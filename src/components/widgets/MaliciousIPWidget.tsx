import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronRight, Skull, ArrowUp, ArrowDown } from 'lucide-react';
import Dropdown from '../Dropdown';
import { getMaliciousIPTableData } from '../../data/mockData';
import type { DropdownOption } from '../../types';

const DROPDOWN_OPTIONS: DropdownOption[] = ['Site', 'Boundary', 'Purdue Level', 'Device Category'];

const formatNumber = (num: number): string => {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

interface MaliciousIPWidgetProps {
  direction: 'inbound' | 'outbound';
}

export default function MaliciousIPWidget({ direction }: MaliciousIPWidgetProps) {
  const [groupBy, setGroupBy] = useState<DropdownOption>('Purdue Level');
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const tableData = useMemo(() => getMaliciousIPTableData(groupBy), [groupBy]);

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

  return (
    <div className="card h-full flex flex-col min-h-[280px]">
      <div className="card-header">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-illumio-danger/10 flex items-center justify-center">
            <Skull className="w-3.5 h-3.5 text-illumio-danger" />
          </div>
          <Dropdown
            options={DROPDOWN_OPTIONS}
            value={groupBy}
            onChange={(v) => setGroupBy(v as DropdownOption)}
          />
          <span className="text-sm text-illumio-text-primary font-medium">by Malicious IP Traffic</span>
        </div>
      </div>
      <div className="card-body flex-1 overflow-auto">
        <table className="w-full widget-table text-sm">
          <thead>
            <tr>
              <th className="w-[30%]">{direction === 'inbound' ? 'Destination Labels' : 'Source Labels'}</th>
              <th>{direction === 'inbound' ? '←' : '→'}</th>
              <th>{direction === 'inbound' ? 'Source Malicious IPs' : 'Destination Malicious IPs'}</th>
              <th>Flows<sup className="text-illumio-primary ml-0.5">Now</sup></th>
              <th>Flows<sup className="text-illumio-text-muted ml-0.5">Prev</sup></th>
              <th>Δ Flows</th>
              <th>Bytes<sup className="text-illumio-primary ml-0.5">Now</sup></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td colSpan={7} className="p-0">
                  <table className="w-full">
                    <tbody>
                      <tr
                        className="expandable-row hover:bg-illumio-bg-light"
                        onClick={() => row.children && row.children.length > 0 && toggleRow(row.id)}
                      >
                        <td className="w-[30%] px-3 py-2">
                          <div className="flex items-center gap-2">
                            {row.children && row.children.length > 0 ? (
                              expandedRows.includes(row.id) ? (
                                <ChevronDown className="w-4 h-4 text-illumio-text-muted" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-illumio-text-muted" />
                              )
                            ) : (
                              <span className="w-4" />
                            )}
                            <span className="w-2 h-2 rounded-full bg-illumio-ot-teal" />
                            <span className="text-illumio-text-primary">
                              {row.label}
                              {row.children && row.children.length > 0 && (
                                <sup className="ml-0.5 text-illumio-text-muted">{row.children.length}</sup>
                              )}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-2 text-illumio-text-muted">{direction === 'inbound' ? '←' : '→'}</td>
                        <td className="px-3 py-2"></td>
                        <td className="px-3 py-2 font-medium">{formatNumber(row.flowsNow)}</td>
                        <td className="px-3 py-2 text-illumio-text-secondary">{formatNumber(row.flowsPrev)}</td>
                        <td className="px-3 py-2">
                          <span className={`inline-flex items-center gap-0.5 ${row.deltaDirection === 'up' ? 'text-illumio-success' : 'text-illumio-danger'}`}>
                            {row.deltaDirection === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                            {formatNumber(row.deltaFlows)}
                          </span>
                        </td>
                        <td className="px-3 py-2">{row.bytesNow}</td>
                      </tr>
                      {expandedRows.includes(row.id) && row.children?.map((child) => (
                        <tr key={child.id} className="bg-illumio-bg-light/50 hover:bg-illumio-bg-light">
                          <td className="w-[30%] px-3 py-2 pl-10">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-illumio-ot-teal/60" />
                              <span className="text-illumio-text-primary">{child.label}</span>
                            </div>
                          </td>
                          <td className="px-3 py-2 text-illumio-text-muted">{direction === 'inbound' ? '←' : '→'}</td>
                          <td className="px-3 py-2">
                            <span className="text-illumio-danger font-mono text-xs">{child.sourceIP}</span>
                          </td>
                          <td className="px-3 py-2 font-medium">{formatNumber(child.flowsNow)}</td>
                          <td className="px-3 py-2 text-illumio-text-secondary">{formatNumber(child.flowsPrev)}</td>
                          <td className="px-3 py-2">
                            <span className={`inline-flex items-center gap-0.5 ${child.deltaDirection === 'up' ? 'text-illumio-success' : 'text-illumio-danger'}`}>
                              {child.deltaDirection === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                              {formatNumber(child.deltaFlows)}
                            </span>
                          </td>
                          <td className="px-3 py-2">{child.bytesNow}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
