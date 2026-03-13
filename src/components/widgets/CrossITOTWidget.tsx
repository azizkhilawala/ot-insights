import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronRight, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import Dropdown from '../Dropdown';
import { getCrossITOTGroupedData } from '../../data/mockData';
import type { LocationGrouping } from '../../types';

const DROPDOWN_OPTIONS: LocationGrouping[] = ['Location', 'Environment'];

const formatNumber = (num: number): string => {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

interface CrossITOTWidgetProps {
  direction: 'inbound' | 'outbound';
}

export default function CrossITOTWidget({ direction }: CrossITOTWidgetProps) {
  const [groupBy, setGroupBy] = useState<LocationGrouping>('Location');
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const tableData = useMemo(() => getCrossITOTGroupedData(groupBy), [groupBy]);

  // Auto-expand first row when groupBy changes
  useEffect(() => {
    if (tableData.length > 0 && tableData[0].children && tableData[0].children.length > 0) {
      setExpandedRows([tableData[0].id]);
    } else {
      setExpandedRows([]);
    }
  }, [tableData]);

  const toggleRow = (id: string) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  // Get column labels based on groupBy and direction
  const getSourceLabel = () => {
    if (groupBy === 'Location') {
      return direction === 'inbound' ? 'Location' : 'OT Site';
    }
    return direction === 'inbound' ? 'Environment' : 'Boundary';
  };

  const getDestLabel = () => {
    if (groupBy === 'Location') {
      return direction === 'inbound' ? 'OT Site' : 'Location';
    }
    return direction === 'inbound' ? 'Boundary' : 'Environment';
  };

  return (
    <div className="card h-full flex flex-col min-h-[280px]">
      <div className="card-header">
        <div className="flex items-center gap-2">
          <span className="text-sm text-illumio-text-primary font-medium">Cross IT-OT Traffic by</span>
          <Dropdown
            options={DROPDOWN_OPTIONS}
            value={groupBy}
            onChange={(v) => setGroupBy(v as LocationGrouping)}
          />
        </div>
      </div>
      <div className="card-body flex-1 overflow-auto">
        <table className="w-full widget-table text-sm">
          <thead>
            <tr>
              <th className="w-[35%]">{getSourceLabel()}</th>
              <th className="w-[20px]"></th>
              <th className="w-[25%]">{getDestLabel()}</th>
              <th>Flows<sup className="text-illumio-primary ml-0.5">Now</sup></th>
              <th>Flows<sup className="text-illumio-text-muted ml-0.5">Prev</sup></th>
              <th>Δ Flows</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              const isExpanded = expandedRows.includes(row.id);
              const hasChildren = row.children && row.children.length > 0;

              // Swap source/dest labels based on direction
              const parentSource = direction === 'inbound' ? '' : row.sourceLabel;
              const parentDest = direction === 'inbound' ? row.sourceLabel : '';

              return (
                <tr key={row.id}>
                  <td colSpan={6} className="p-0">
                    <table className="w-full">
                      <tbody>
                        {/* Parent Row */}
                        <tr
                          className={`hover:bg-illumio-bg-light ${hasChildren ? 'cursor-pointer' : ''}`}
                          onClick={() => hasChildren && toggleRow(row.id)}
                        >
                          <td className="w-[35%] px-3 py-2">
                            <div className="flex items-center gap-2">
                              {hasChildren ? (
                                isExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-illumio-text-muted shrink-0" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-illumio-text-muted shrink-0" />
                                )
                              ) : (
                                <span className="w-4 shrink-0" />
                              )}
                              <span className="w-2 h-2 rounded-full bg-illumio-ot-blue shrink-0" />
                              <span className="text-illumio-text-primary truncate" title={row.sourceLabel}>
                                {row.sourceLabel}
                                {hasChildren && (
                                  <sup className="ml-1 text-illumio-text-muted">{row.children.length}</sup>
                                )}
                              </span>
                            </div>
                          </td>
                          <td className="w-[20px] px-1 py-2">
                            <ArrowRight className="w-3.5 h-3.5 text-illumio-text-muted" />
                          </td>
                          <td className="w-[25%] px-3 py-2 text-illumio-text-secondary">
                            {/* Empty for parent - destinations shown in children */}
                          </td>
                          <td className="px-3 py-2 font-medium">{formatNumber(row.flowsNow)}</td>
                          <td className="px-3 py-2 text-illumio-text-secondary">{formatNumber(row.flowsPrev)}</td>
                          <td className="px-3 py-2">
                            <span className={`inline-flex items-center gap-0.5 ${row.deltaDirection === 'up' ? 'text-illumio-success' : 'text-illumio-danger'}`}>
                              {row.deltaDirection === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                              {formatNumber(row.deltaFlows)}
                            </span>
                          </td>
                        </tr>

                        {/* Child Rows */}
                        {isExpanded && row.children?.map((child) => {
                          const childSource = direction === 'inbound' ? child.destLabel : row.sourceLabel;
                          const childDest = direction === 'inbound' ? row.sourceLabel : child.destLabel;

                          return (
                            <tr key={child.id} className="bg-illumio-bg-light/50 hover:bg-illumio-bg-light">
                              <td className="w-[35%] px-3 py-2 pl-10">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-illumio-ot-blue/60 shrink-0" />
                                  <span className="text-illumio-text-primary truncate" title={child.destLabel}>
                                    {child.destLabel}
                                  </span>
                                </div>
                              </td>
                              <td className="w-[20px] px-1 py-2">
                                <ArrowRight className="w-3.5 h-3.5 text-illumio-text-muted" />
                              </td>
                              <td className="w-[25%] px-3 py-2">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-illumio-ot-green shrink-0" />
                                  <span className="text-illumio-text-primary truncate" title={row.sourceLabel}>
                                    {row.sourceLabel}
                                  </span>
                                </div>
                              </td>
                              <td className="px-3 py-2 font-medium">{formatNumber(child.flowsNow)}</td>
                              <td className="px-3 py-2 text-illumio-text-secondary">{formatNumber(child.flowsPrev)}</td>
                              <td className="px-3 py-2">
                                <span className={`inline-flex items-center gap-0.5 ${child.deltaDirection === 'up' ? 'text-illumio-success' : 'text-illumio-danger'}`}>
                                  {child.deltaDirection === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                  {formatNumber(child.deltaFlows)}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
