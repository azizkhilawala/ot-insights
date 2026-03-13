import { useState } from 'react';
import { X, ExternalLink, Settings, MapPin, Layers, LayoutGrid } from 'lucide-react';
import type { OTDevice } from '../types';

interface ResourceSlideoutProps {
  resource: OTDevice;
  onClose: () => void;
}

// OT Device Icon component
const OTDeviceIcon = ({ size = 'sm' }: { size?: 'sm' | 'lg' }) => {
  const sizeClasses = size === 'lg' ? 'w-10 h-10 rounded-md border-2' : 'w-3 h-3 rounded-sm border';
  const iconSize = size === 'lg' ? 'w-5 h-5' : 'w-2 h-2';
  return (
    <div className={`${sizeClasses} bg-[#e9eff5] border-[#575d65] flex items-center justify-center`}>
      <Layers className={`${iconSize} text-[#575d65]`} />
    </div>
  );
};

// Label pill component
const LabelPill = ({ type, value }: { type: 'loc' | 'env' | 'app'; value: string }) => {
  const icons = {
    loc: <MapPin className="w-2.5 h-2.5" />,
    env: <Layers className="w-2.5 h-2.5" />,
    app: <LayoutGrid className="w-2.5 h-2.5" />,
  };

  return (
    <div className="flex items-center h-5 rounded-full bg-gradient-to-r from-[#f0f4f7] to-[#edf0f5] px-0.5">
      <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center text-[#455465]">
        {icons[type]}
      </div>
      <span className="px-1.5 text-xs text-[#1f272f]">{value}</span>
    </div>
  );
};

// Purdue Level badge
const PurdueLevelBadge = ({ level }: { level: string }) => (
  <div className="flex items-center gap-1">
    <div className="w-5 h-5 bg-[#dfe2f6] border border-[#a4a6ee] rounded flex items-center justify-center">
      <Layers className="w-3.5 h-3.5 text-[#381ea8]" />
    </div>
    <div className="h-5 px-1 bg-[#dfe2f6] rounded flex items-center">
      <span className="text-xs font-semibold text-[#381ea8]">{level}</span>
    </div>
  </div>
);

// Risk badge component
const RiskBadge = ({ level, score }: { level: string; score: number }) => {
  const colors: Record<string, { bg: string; text: string }> = {
    critical: { bg: '#fcd6d6', text: '#c41e3a' },
    high: { bg: '#fcd6d6', text: '#c41e3a' },
    medium: { bg: '#ffe6cc', text: '#a45409' },
    low: { bg: '#d4edda', text: '#155724' },
    none: { bg: '#edf0f2', text: '#1f272f' },
  };
  const color = colors[level] || colors.none;

  return (
    <div className="flex items-center gap-1">
      <div className={`h-5 px-1 rounded flex items-center`} style={{ backgroundColor: color.bg }}>
        <span className="text-xs font-semibold" style={{ color: color.text }}>
          {level.toUpperCase()}
        </span>
      </div>
      <div className={`h-5 px-1 rounded flex items-center`} style={{ backgroundColor: color.bg }}>
        <span className="text-xs font-semibold" style={{ color: color.text }}>{score}</span>
      </div>
    </div>
  );
};

// Tag pill component
const TagPill = ({ tagKey, value }: { tagKey: string; value: string }) => (
  <div className="flex items-center h-6 rounded-full bg-gradient-to-r from-[#f0f4f7] to-[#edf0f5]">
    <div className="h-full px-2 flex items-center border-r border-[#b6c7d9]">
      <span className="text-xs font-mono text-[#5e46dd]">{tagKey}</span>
    </div>
    <div className="h-full px-2 flex items-center">
      <span className="text-xs font-mono text-[#1f272f]">{value}</span>
    </div>
  </div>
);

// Attribute row component
const AttributeRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-center gap-12 py-0.5">
    <p className="text-[13px] font-semibold text-[#1f272f] w-[120px] shrink-0">{label}</p>
    <div className="flex-1 text-[14px] text-[#1f272f]">{children}</div>
  </div>
);

export default function ResourceSlideout({ resource, onClose }: ResourceSlideoutProps) {
  const [activeTab, setActiveTab] = useState<'summary' | 'traffic'>('summary');

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-[480px] bg-white z-50 flex flex-col shadow-[-2px_0_20px_0_rgba(31,39,47,0.15)]">
        {/* Tab Bar */}
        <div className="bg-[#f7fafd] border-b border-[#e9eff5] flex items-start gap-1 pr-1 pt-1">
          <div className="flex items-center gap-0.5 pl-2 h-9">
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            >
              <X className="w-4 h-4 text-[#63788f]" />
            </button>
            <div className="w-px h-8 bg-[#ddd] mx-1" />
          </div>

          {/* Active Tab */}
          <div className="flex-1 overflow-x-auto">
            <div className="bg-white h-9 w-[200px] rounded-t flex items-center gap-1 px-3 shadow-[1px_0_4px_0_rgba(165,165,165,0.1)] relative">
              <OTDeviceIcon size="sm" />
              <span className="flex-1 text-[13px] font-medium text-[#1f272f] truncate">{resource.name}</span>
              <button className="p-0.5 hover:bg-gray-100 rounded">
                <X className="w-4 h-4 text-[#63788f]" />
              </button>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] rounded-t" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <OTDeviceIcon size="lg" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-0.5">
                    <a href="#" className="text-base font-bold text-[#2366ed] border-b border-[#2366ed] hover:opacity-80">
                      {resource.name}
                    </a>
                    <ExternalLink className="w-4 h-4 text-[#2366ed]" />
                  </div>
                  <span className="text-sm font-semibold text-[#455465]">OT Device</span>
                </div>
              </div>
              <button className="w-9 h-9 border border-[#d0d4d9] rounded-md flex items-center justify-center hover:bg-gray-50">
                <Settings className="w-5 h-5 text-[#63788f]" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="relative h-8 px-3">
            <div className="absolute bottom-0 left-0 right-[5px] h-px bg-[#e9eff5]" />
            <div className="flex">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-3 pt-2 pb-2 text-[13px] font-semibold relative ${
                  activeTab === 'summary' ? 'text-[#2366ed]' : 'text-[#63788f] hover:text-[#455465]'
                }`}
              >
                Summary
                {activeTab === 'summary' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2366ed]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('traffic')}
                className={`px-3 pt-2 pb-2 text-[13px] font-semibold relative ${
                  activeTab === 'traffic' ? 'text-[#2366ed]' : 'text-[#63788f] hover:text-[#455465]'
                }`}
              >
                Traffic
                {activeTab === 'traffic' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2366ed]" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {activeTab === 'summary' ? (
              <div className="flex flex-col gap-2">
                <AttributeRow label="Name">
                  {resource.name}
                </AttributeRow>

                <AttributeRow label="IP Address">
                  <span className="font-mono text-xs px-1.5 py-0.5 bg-[#edf0f2] rounded">
                    {resource.ipAddress}
                  </span>
                </AttributeRow>

                <AttributeRow label="MAC Address">
                  {resource.macAddress}
                </AttributeRow>

                <AttributeRow label="Device Category">
                  {resource.deviceCategory}
                </AttributeRow>

                <AttributeRow label="Device Type">
                  {resource.deviceType}
                </AttributeRow>

                <AttributeRow label="Site">
                  {resource.site}
                </AttributeRow>

                <AttributeRow label="Boundary">
                  {resource.boundary}
                </AttributeRow>

                <AttributeRow label="Purdue Model">
                  <PurdueLevelBadge level={resource.purdueLevel} />
                </AttributeRow>

                <AttributeRow label="Risk">
                  <RiskBadge level={resource.riskLevel} score={resource.riskScore} />
                </AttributeRow>

                {resource.tags && resource.tags.length > 0 && (
                  <AttributeRow label="Tags">
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag, i) => (
                        <TagPill key={i} tagKey={tag.key} value={tag.value} />
                      ))}
                    </div>
                  </AttributeRow>
                )}

                {resource.labels && resource.labels.length > 0 && (
                  <AttributeRow label="Labels">
                    <div className="flex flex-wrap gap-2">
                      {resource.labels.map((label, i) => (
                        <LabelPill key={i} type={label.type} value={label.value} />
                      ))}
                    </div>
                  </AttributeRow>
                )}

                {resource.source && (
                  <AttributeRow label="Source">
                    {resource.source}
                  </AttributeRow>
                )}
              </div>
            ) : (
              <div className="text-[#63788f] text-sm">
                <p>Traffic data for {resource.name} will be displayed here.</p>
                <div className="mt-4 p-4 bg-[#f7fafd] rounded-lg border border-[#e9eff5]">
                  <p className="font-medium text-[#1f272f] mb-2">Recent Traffic</p>
                  <p className="text-xs">No traffic data available for this device.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
