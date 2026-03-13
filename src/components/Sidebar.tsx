import {
  Lightbulb,
  FileBarChart,
  Shield,
  Compass,
  FileText,
  Server,
  Cloud,
  Users,
  Building2,
  Settings,
  Wrench,
  Info,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
} from 'lucide-react';
import { useState } from 'react';

interface NavChild {
  label: string;
  active?: boolean;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasChevron?: boolean;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    icon: <Lightbulb className="w-4 h-4" />,
    label: 'Insights',
    hasChevron: true,
    children: [
      { label: 'Insights Hub' },
      { label: 'Risky Traffic' },
      { label: 'Malicious IP Threats' },
      { label: 'Shadow LLMs' },
      { label: 'OT Insights', active: true },
    ]
  },
  { icon: <Shield className="w-4 h-4" />, label: 'Quarantine' },
  { icon: <Compass className="w-4 h-4" />, label: 'Explore', hasChevron: true },
  { icon: <FileText className="w-4 h-4" />, label: 'Policies', hasChevron: true },
  { icon: <Server className="w-4 h-4" />, label: 'Servers & Endpoints', hasChevron: true },
  { icon: <Cloud className="w-4 h-4" />, label: 'Cloud', hasChevron: true },
  { icon: <Users className="w-4 h-4" />, label: 'Access', hasChevron: true },
  { icon: <Building2 className="w-4 h-4" />, label: 'Infrastructure', hasChevron: true },
  { icon: <Settings className="w-4 h-4" />, label: 'Settings', hasChevron: true },
  { icon: <Wrench className="w-4 h-4" />, label: 'Troubleshoot', hasChevron: true },
  { icon: <Info className="w-4 h-4" />, label: 'Support', hasChevron: true },
];

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Insights']);
  const [collapsed, setCollapsed] = useState(false);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className={`${collapsed ? 'w-14' : 'w-[220px]'} bg-white border-r border-[#dde2eb] flex flex-col transition-all duration-200`}>
      {/* Header */}
      <div className="h-[76px] flex flex-col">
        <div className="flex items-center justify-between pl-5 pr-3 pt-4 h-[52px]">
          {/* Illumio Logo */}
          <div className="w-6 h-6 bg-gradient-to-br from-[#FF5722] to-[#FF8A65] rounded flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          {!collapsed && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className={`w-5 h-5 text-[#63788f] transition-transform ${collapsed ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        {/* Separator */}
        <div className="mx-[35px] mt-3 h-px bg-[#d0d4d9]" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 pb-5 overflow-y-auto">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => item.children && toggleExpanded(item.label)}
                className={`w-full flex items-center justify-between px-2 py-1 rounded-md text-[13px] font-medium transition-colors ${
                  expandedItems.includes(item.label) && item.children
                    ? 'text-[#1d3b8b] font-semibold'
                    : 'text-[#63788f] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={expandedItems.includes(item.label) && item.children ? 'text-[#1d3b8b]' : 'text-[#63788f]'}>
                    {item.icon}
                  </span>
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </div>
                {item.hasChevron && !collapsed && (
                  expandedItems.includes(item.label) ? (
                    <ChevronUp className="w-4 h-4 text-[#63788f]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#63788f]" />
                  )
                )}
              </button>

              {item.children && expandedItems.includes(item.label) && !collapsed && (
                <ul className="flex flex-col">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <button
                        className={`w-full flex items-center gap-2 pl-5 pr-2 py-1 rounded-md text-[13px] font-medium transition-colors ${
                          child.active
                            ? 'bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] text-white'
                            : 'text-[#63788f] hover:bg-gray-50'
                        }`}
                      >
                        <FileBarChart className={`w-4 h-4 ${child.active ? 'text-white' : 'text-[#63788f]'}`} />
                        <span className="truncate">{child.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
