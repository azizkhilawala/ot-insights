import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, FileText, AlertTriangle, ArrowDown } from 'lucide-react';
import type { OTDevice } from '../types';
import { mockTrafficTableData } from '../data/mockData';

interface TrafficTableProps {
  onResourceClick: (device: OTDevice) => void;
}

const formatBytes = (bytes: number): string => {
  if (bytes >= 1073741824) return `${(bytes / 1073741824).toFixed(0)} GB`;
  if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(0)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
};

const formatDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toISOString().replace('T', ' ').slice(0, 19);
};

// Resource type icon component
const ResourceIcon = ({ type }: { type: string }) => {
  const isOT = ['PLC', 'RTU', 'Sensor', 'OT Device', 'DCS', 'SCADA', 'Instruments'].some(t => type.includes(t));
  return (
    <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${isOT ? 'bg-[#e9eff5] border-[#575d65]' : 'bg-[#e6f4ea] border-[#34a853]'}`}>
      <FileText className="w-2.5 h-2.5 text-[#575d65]" />
    </div>
  );
};

export default function TrafficTable({ onResourceClick }: TrafficTableProps) {
  const currentPage = 1;
  const totalItems = 8618;
  const totalPages = 431;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead className="bg-white border-b border-[#dde2eb]">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Traffic Status</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Source Resource</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Source IP</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Port</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Service</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Protocol</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Destination Resource</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Destination IP</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Sent Bytes</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Received Bytes</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Flow Count</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Source Region</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Source Resource Type</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Destination Resource Type</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Destination Region</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Packets Sent</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Packets Received</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f]">Start Time</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-[#63788f] flex items-center gap-1">
              End Time
              <ArrowDown className="w-3 h-3" />
            </th>
          </tr>
        </thead>
        <tbody>
          {mockTrafficTableData.map((row) => (
            <tr key={row.id} className="border-b border-[#f0f2f5] hover:bg-[#f7fafd]">
              {/* Traffic Status */}
              <td className="px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#2366ed]" />
                  <span className="text-[#1f272f]">{row.trafficStatus}</span>
                </div>
              </td>

              {/* Source Resource - Clickable */}
              <td className="px-3 py-2">
                <button
                  onClick={() => onResourceClick(row.sourceResource)}
                  className="flex items-center gap-1.5 hover:underline"
                >
                  <ResourceIcon type={row.sourceResourceType} />
                  <span className="text-[#1f272f]">{row.sourceResource.name}</span>
                </button>
              </td>

              {/* Source IP */}
              <td className="px-3 py-2">
                <span className="font-mono text-xs text-[#63788f]">{row.sourceIP}</span>
              </td>

              {/* Port */}
              <td className="px-3 py-2 text-[#1f272f]">{row.port}</td>

              {/* Service */}
              <td className="px-3 py-2">
                <div className="flex items-center gap-1">
                  {row.serviceRisk && <AlertTriangle className="w-3 h-3 text-[#f0883e]" />}
                  <span className={row.serviceRisk ? 'text-[#f0883e]' : 'text-[#1f272f]'}>{row.service}</span>
                </div>
              </td>

              {/* Protocol */}
              <td className="px-3 py-2 text-[#1f272f]">{row.protocol}</td>

              {/* Destination Resource - Clickable */}
              <td className="px-3 py-2">
                <button
                  onClick={() => onResourceClick(row.destinationResource)}
                  className="flex items-center gap-1.5 hover:underline"
                >
                  <ResourceIcon type={row.destinationResourceType} />
                  <span className="text-[#1f272f]">{row.destinationResource.name}</span>
                </button>
              </td>

              {/* Destination IP */}
              <td className="px-3 py-2">
                <span className="font-mono text-xs text-[#63788f]">{row.destinationIP}</span>
              </td>

              {/* Sent Bytes */}
              <td className="px-3 py-2 text-[#1f272f]">{formatBytes(row.sentBytes)}</td>

              {/* Received Bytes */}
              <td className="px-3 py-2 text-[#1f272f]">{formatBytes(row.receivedBytes)}</td>

              {/* Flow Count */}
              <td className="px-3 py-2 text-[#1f272f]">{row.flowCount}</td>

              {/* Source Region */}
              <td className="px-3 py-2 text-[#1f272f]">{row.sourceRegion}</td>

              {/* Source Resource Type */}
              <td className="px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <ResourceIcon type={row.sourceResourceType} />
                  <span className="text-[#1f272f]">{row.sourceResourceType}</span>
                </div>
              </td>

              {/* Destination Resource Type */}
              <td className="px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <ResourceIcon type={row.destinationResourceType} />
                  <span className="text-[#1f272f]">{row.destinationResourceType}</span>
                </div>
              </td>

              {/* Destination Region */}
              <td className="px-3 py-2 text-[#1f272f]">{row.destinationRegion}</td>

              {/* Packets Sent */}
              <td className="px-3 py-2 text-[#1f272f]">{row.packetsSent}</td>

              {/* Packets Received */}
              <td className="px-3 py-2 text-[#1f272f]">{row.packetsReceived}</td>

              {/* Start Time */}
              <td className="px-3 py-2 text-[#63788f] text-xs">{formatDateTime(row.startTime)}</td>

              {/* End Time */}
              <td className="px-3 py-2 text-[#63788f] text-xs">{formatDateTime(row.endTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="px-4 py-3 border-t border-[#dde2eb] flex items-center justify-between bg-white">
        <span className="text-sm text-[#63788f]">
          1 to 20 of {totalItems.toLocaleString()}
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded border border-[#d0d4d9] hover:bg-[#f7fafd] disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronsLeft className="w-4 h-4 text-[#63788f]" />
          </button>
          <button className="p-1.5 rounded border border-[#d0d4d9] hover:bg-[#f7fafd] disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronLeft className="w-4 h-4 text-[#63788f]" />
          </button>
          <span className="px-3 text-sm text-[#1f272f]">
            Page <span className="font-medium">{currentPage}</span> of {totalPages}
          </span>
          <button className="p-1.5 rounded border border-[#d0d4d9] hover:bg-[#f7fafd]">
            <ChevronRight className="w-4 h-4 text-[#63788f]" />
          </button>
          <button className="p-1.5 rounded border border-[#d0d4d9] hover:bg-[#f7fafd]">
            <ChevronsRight className="w-4 h-4 text-[#63788f]" />
          </button>
        </div>
      </div>
    </div>
  );
}
