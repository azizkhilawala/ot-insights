import { useState } from 'react';
import { Calendar, ChevronDown, X, Factory, ExternalLink, Filter, Columns } from 'lucide-react';
import RiskyServicesWidget from '../components/widgets/RiskyServicesWidget';
import MaliciousIPWidget from '../components/widgets/MaliciousIPWidget';
import CrossITOTWidget from '../components/widgets/CrossITOTWidget';
import CrossBoundaryWidget from '../components/widgets/CrossBoundaryWidget';
import TrafficTable from '../components/TrafficTable';
import type { OTDevice } from '../types';

interface OTInsightsPageProps {
  onResourceClick: (device: OTDevice) => void;
}

export default function OTInsightsPage({ onResourceClick }: OTInsightsPageProps) {
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound'>('inbound');
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="space-y-4">
      {/* Page Title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-illumio-ot-purple to-illumio-primary flex items-center justify-center">
          <Factory className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-illumio-text-primary">OT Insights</h1>
      </div>

      {/* Info Banner */}
      {showBanner && (
        <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-4 pr-12 overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-white font-semibold mb-2">Learn about OT Insights</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Illumio OT Insights extends proven breach detection and containment capabilities into operational technology environments by leveraging flow and telemetry data from OT devices. This solution provides critical visibility into IT-OT convergence, enabling security teams to detect cross-boundary threats, monitor industrial protocol traffic, and identify risky connections across Purdue levels.
            </p>
            <button className="mt-3 inline-flex items-center gap-1 text-white text-sm font-medium hover:underline">
              Learn More <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-3 right-3 p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Decorative image placeholder */}
          <div className="absolute right-0 top-0 bottom-0 w-64 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-800" />
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Inbound/Outbound Toggle */}
        <div className="flex bg-illumio-bg-elevated rounded-lg p-1">
          <button
            onClick={() => setActiveTab('inbound')}
            className={activeTab === 'inbound' ? 'btn-toggle-active' : 'btn-toggle-inactive'}
          >
            Inbound
          </button>
          <button
            onClick={() => setActiveTab('outbound')}
            className={activeTab === 'outbound' ? 'btn-toggle-active' : 'btn-toggle-inactive'}
          >
            Outbound
          </button>
        </div>

        {/* Time Range */}
        <button className="dropdown-trigger">
          <Calendar className="w-4 h-4 text-illumio-text-muted" />
          <span className="text-illumio-primary font-medium">Last 24 hours</span>
          <span className="text-illumio-text-secondary">compared to</span>
          <span className="text-illumio-primary font-medium">Previous 24 hours</span>
          <ChevronDown className="w-4 h-4 text-illumio-text-muted" />
        </button>

        {/* Traffic Filter */}
        <button className="dropdown-trigger">
          <span>Traffic is Allowed or Denied</span>
          <ChevronDown className="w-4 h-4 text-illumio-text-muted" />
        </button>

        {/* Label Selector */}
        <button className="dropdown-trigger">
          <span>Select Label</span>
          <ChevronDown className="w-4 h-4 text-illumio-text-muted" />
        </button>
      </div>

      {/* Widgets Grid - 2x2 Layout */}
      <div className="grid grid-cols-2 gap-4">
        <RiskyServicesWidget direction={activeTab} />
        <MaliciousIPWidget direction={activeTab} />
        <CrossITOTWidget direction={activeTab} />
        <CrossBoundaryWidget direction={activeTab} />
      </div>

      {/* Traffic Query Table */}
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-medium text-illumio-text-primary">Traffic Query Results</h3>
            <span className="px-2 py-0.5 bg-illumio-bg-elevated rounded text-xs text-illumio-text-secondary">
              No filter applied
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-illumio-text-secondary hover:text-illumio-text-primary hover:bg-illumio-bg-elevated rounded transition-colors">
              <Columns className="w-4 h-4" />
            </button>
            <button className="p-2 text-illumio-text-secondary hover:text-illumio-text-primary hover:bg-illumio-bg-elevated rounded transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        <TrafficTable onResourceClick={onResourceClick} />
      </div>
    </div>
  );
}
