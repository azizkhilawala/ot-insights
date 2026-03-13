import { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle } from 'lucide-react';
import Dropdown from '../Dropdown';
import { getRiskyServicesTableData } from '../../data/mockData';
import type { DropdownOption } from '../../types';

const DROPDOWN_OPTIONS: DropdownOption[] = ['Site', 'Boundary', 'Purdue Level', 'Device Category'];

const formatNumber = (num: number): string => {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

interface RiskyServicesWidgetProps {
  direction: 'inbound' | 'outbound';
}

export default function RiskyServicesWidget({ direction }: RiskyServicesWidgetProps) {
  const [groupBy, setGroupBy] = useState<DropdownOption>('Boundary');
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const tableData = useMemo(() => getRiskyServicesTableData(groupBy), [groupBy]);

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
          <div className="w-6 h-6 rounded bg-illumio-ot-purple/10 flex items-center justify-center">
            <AlertTriangle className="w-3.5 h-3.5 text-illumio-ot-purple" />
          </div>
          <Dropdown
            options={DROPDOWN_OPTIONS}
            value={groupBy}
            onChange={(v) => setGroupBy(v as DropdownOption)}
          />
          <span className="text-sm text-illumio-text-primary font-medium">with Risky Services Traffic</span>
        </div>
      </div>
      <div className="card-body flex-1 overflow-auto">
        <table className="w-full widget-table text-sm">
          <thead>
            <tr>
              <th className="w-[35%]">{direction === 'inbound' ? 'Destination Labels' : 'Source Labels'}</th>
              <th>Service</th>
              <th>Port</th>
              <th>Protocol</th>
              <th>Flows<sup className="text-illumio-primary ml-0.5">Now</sup></th>
              <th>Flows<sup className="text-illumio-text-muted ml-0.5">Prev</sup></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td colSpan={6} className="p-0">
                  <table className="w-full">
                    <tbody>
                      <tr
                        className="expandable-row hover:bg-illumio-bg-light"
                        onClick={() => row.children && row.children.length > 0 && toggleRow(row.id)}
                      >
                        <td className="w-[35%] px-3 py-2">
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
                            <span className="w-2 h-2 rounded-full bg-illumio-ot-purple" />
                            <span className="text-illumio-text-primary">
                              {row.label}
                              {row.children && row.children.length > 0 && (
                                <sup className="ml-0.5 text-illumio-text-muted">{row.children.length}</sup>
                              )}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-2"></td>
                        <td className="px-3 py-2"></td>
                        <td className="px-3 py-2"></td>
                        <td className="px-3 py-2 font-medium">{formatNumber(row.flowsNow)}</td>
                        <td className="px-3 py-2 text-illumio-text-secondary">{formatNumber(row.flowsPrev)}</td>
                      </tr>
                      {expandedRows.includes(row.id) && row.children?.map((child) => (
                        <tr key={child.id} className="bg-illumio-bg-light/50 hover:bg-illumio-bg-light">
                          <td className="w-[35%] px-3 py-2 pl-10">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-illumio-ot-purple/60" />
                              <span className="text-illumio-text-primary">{child.label}</span>
                            </div>
                          </td>
                          <td className="px-3 py-2">
                            <span className="inline-flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3 text-illumio-danger" />
                              <span className="text-illumio-danger font-medium">{child.service}</span>
                            </span>
                          </td>
                          <td className="px-3 py-2 text-illumio-text-secondary">{child.port}</td>
                          <td className="px-3 py-2 text-illumio-text-secondary">{child.protocol}</td>
                          <td className="px-3 py-2 font-medium">{formatNumber(child.flowsNow)}</td>
                          <td className="px-3 py-2 text-illumio-text-secondary">{formatNumber(child.flowsPrev)}</td>
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
