import type { OTDevice, TrafficFlow, WidgetData, CrossTrafficData, TrafficTableRow } from '../types';

export const mockOTDevices: OTDevice[] = [
  {
    id: '1',
    name: 'PLC',
    ipAddress: '192.168.10.1',
    macAddress: '62:CD:63:13:91:5B',
    site: 'TX ICS Center',
    boundary: 'ICS',
    purdueLevel: 'L0',
    deviceCategory: 'Instruments',
    deviceType: 'PLC',
    location: 'Building A - Floor 1',
    region: 'us-east-1',
    environment: 'Production',
    riskLevel: 'medium',
    riskScore: 64,
    status: 'online',
    lastSeen: '2026-03-12T10:30:00Z',
    vendor: 'Siemens',
    model: 'S7-1500',
    firmware: 'V2.9.4',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Production' },
      { type: 'app', value: 'Quality Inspection' }
    ],
    tags: [{ key: 'Armis oT', value: 'managed' }]
  },
  {
    id: '2',
    name: 'Web-host-1',
    ipAddress: '10.1.96.4',
    macAddress: '4A:B2:91:7E:D3:8C',
    site: 'TX ICS Center',
    boundary: 'DMZ',
    purdueLevel: 'L3',
    deviceCategory: 'Server',
    deviceType: 'Web Server',
    location: 'Building A - Floor 1',
    region: 'us-east-1',
    environment: 'Production',
    riskLevel: 'low',
    riskScore: 25,
    status: 'online',
    lastSeen: '2026-03-12T10:28:00Z',
    vendor: 'Dell',
    model: 'PowerEdge R640',
    firmware: 'V2.1.0',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Production' }
    ]
  },
  {
    id: '3',
    name: 'SCADA Server',
    ipAddress: '192.168.10.1',
    macAddress: '8F:A4:22:5C:B1:E9',
    site: 'TX ICS Center',
    boundary: 'ICS',
    purdueLevel: 'L2',
    deviceCategory: 'Server',
    deviceType: 'SCADA',
    location: 'Data Center',
    region: 'us-east-1',
    environment: 'Production',
    riskLevel: 'high',
    riskScore: 78,
    status: 'online',
    lastSeen: '2026-03-12T10:31:00Z',
    vendor: 'GE',
    model: 'iFIX 6.1',
    firmware: 'V6.1.2',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Production' }
    ]
  },
  {
    id: '4',
    name: 'Heat Sensor',
    ipAddress: '192.168.10.1',
    macAddress: 'C3:7D:19:E6:A8:42',
    site: 'Remote Site B',
    boundary: 'Field Zone',
    purdueLevel: 'L0',
    deviceCategory: 'Instruments',
    deviceType: 'Sensor',
    location: 'Field Station 3',
    region: 'us-east-1',
    environment: 'Field',
    riskLevel: 'low',
    riskScore: 15,
    status: 'online',
    lastSeen: '2026-03-12T10:25:00Z',
    vendor: 'Honeywell',
    model: 'STT850',
    firmware: 'V3.5',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Field' }
    ]
  },
  {
    id: '5',
    name: 'RTU',
    ipAddress: '192.168.10.1',
    macAddress: 'D1:E8:3F:94:C2:67',
    site: 'Manufacturing Alpha',
    boundary: 'Production Zone',
    purdueLevel: 'L1',
    deviceCategory: 'Instruments',
    deviceType: 'RTU',
    location: 'Building B - Floor 2',
    region: 'us-east-1',
    environment: 'Production',
    riskLevel: 'medium',
    riskScore: 52,
    status: 'offline',
    lastSeen: '2026-03-12T08:15:00Z',
    vendor: 'ABB',
    model: 'RTU560',
    firmware: 'V12.3',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Production' }
    ]
  },
  {
    id: '6',
    name: 'OT Device',
    ipAddress: '192.168.20.20',
    macAddress: '5B:F6:AD:81:2C:39',
    site: 'Manufacturing Alpha',
    boundary: 'Enterprise Zone',
    purdueLevel: 'L3',
    deviceCategory: 'OT Device',
    deviceType: 'OT Device',
    location: 'Data Center',
    region: 'us-east-1',
    environment: 'Enterprise',
    riskLevel: 'medium',
    riskScore: 48,
    status: 'online',
    lastSeen: '2026-03-12T10:30:00Z',
    vendor: 'OSIsoft',
    model: 'PI Server',
    firmware: 'V2021',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Enterprise' }
    ]
  },
  {
    id: '7',
    name: 'Server',
    ipAddress: '192.168.10.105',
    macAddress: '72:9B:C4:38:E7:1F',
    site: 'Remote Site B',
    boundary: 'Safety Zone',
    purdueLevel: 'L2',
    deviceCategory: 'Server',
    deviceType: 'Server',
    location: 'Field Station 1',
    region: 'us-east-1',
    environment: 'Field',
    riskLevel: 'high',
    riskScore: 82,
    status: 'online',
    lastSeen: '2026-03-12T10:29:00Z',
    vendor: 'Schneider',
    model: 'Modicon M580',
    firmware: 'V3.20',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Field' }
    ]
  },
  {
    id: '8',
    name: 'OT Device',
    ipAddress: '192.168.10.106',
    macAddress: 'A9:14:DB:56:7E:C3',
    site: 'Chemical Plant C',
    boundary: 'Process Zone',
    purdueLevel: 'L2',
    deviceCategory: 'OT Device',
    deviceType: 'DCS',
    location: 'Control Room',
    region: 'us-east-1',
    environment: 'Process',
    riskLevel: 'critical',
    riskScore: 92,
    status: 'online',
    lastSeen: '2026-03-12T10:31:00Z',
    vendor: 'Honeywell',
    model: 'Experion PKS',
    firmware: 'R520.2',
    source: 'Armis',
    labels: [
      { type: 'loc', value: 'us-east-1' },
      { type: 'env', value: 'Process' }
    ]
  }
];

// Traffic table data matching the Figma design
export const mockTrafficTableData: TrafficTableRow[] = [
  {
    id: '1',
    trafficStatus: 'Allowed',
    sourceResource: mockOTDevices[1],
    sourceIP: '10.1.96.4',
    port: 443,
    service: 'HTTPS',
    serviceRisk: true,
    protocol: 'TCP',
    destinationResource: mockOTDevices[3],
    destinationIP: '192.168.10.1',
    sentBytes: 20971520,
    receivedBytes: 15728640,
    flowCount: 5,
    sourceRegion: 'us-east-1',
    sourceResourceType: 'Server',
    destinationResourceType: 'OT Device',
    destinationRegion: 'us-east-1',
    packetsSent: 15,
    packetsReceived: 12,
    startTime: '2024-08-24T16:20:10',
    endTime: '2024-07-27T16:40:35'
  },
  {
    id: '2',
    trafficStatus: 'Allowed',
    sourceResource: mockOTDevices[0],
    sourceIP: '10.1.96.4',
    port: 443,
    service: 'SSH',
    serviceRisk: true,
    protocol: 'TCP',
    destinationResource: mockOTDevices[2],
    destinationIP: '192.168.10.1',
    sentBytes: 20971520,
    receivedBytes: 15728640,
    flowCount: 5,
    sourceRegion: 'us-east-1',
    sourceResourceType: 'OT Device',
    destinationResourceType: 'Server',
    destinationRegion: 'us-east-1',
    packetsSent: 15,
    packetsReceived: 12,
    startTime: '2024-08-24T16:20:10',
    endTime: '2024-07-27T16:40:35'
  },
  {
    id: '3',
    trafficStatus: 'Allowed',
    sourceResource: mockOTDevices[0],
    sourceIP: '10.1.96.4',
    port: 502,
    service: 'Modbus',
    serviceRisk: true,
    protocol: 'TCP',
    destinationResource: mockOTDevices[4],
    destinationIP: '192.168.10.1',
    sentBytes: 20971520,
    receivedBytes: 15728640,
    flowCount: 5,
    sourceRegion: 'us-east-1',
    sourceResourceType: 'OT Device',
    destinationResourceType: 'OT Device',
    destinationRegion: 'us-east-1',
    packetsSent: 15,
    packetsReceived: 12,
    startTime: '2024-08-24T16:20:10',
    endTime: '2024-07-27T16:40:35'
  }
];

// Risky services data - simulates risky traffic patterns
const riskyServicesRaw = [
  { device: mockOTDevices[0], service: 'RustDesk', port: 443, protocol: 'TCP', flowsNow: 2100, flowsPrev: 1100 },
  { device: mockOTDevices[0], service: 'MySQL', port: 1443, protocol: 'TCP', flowsNow: 1900, flowsPrev: 900 },
  { device: mockOTDevices[1], service: 'TELNET', port: 23, protocol: 'UDP', flowsNow: 1600, flowsPrev: 600 },
  { device: mockOTDevices[2], service: 'FTP', port: 21, protocol: 'TCP', flowsNow: 1200, flowsPrev: 400 },
  { device: mockOTDevices[3], service: 'RDP', port: 3389, protocol: 'TCP', flowsNow: 800, flowsPrev: 300 },
  { device: mockOTDevices[4], service: 'VNC', port: 5900, protocol: 'TCP', flowsNow: 600, flowsPrev: 200 },
  { device: mockOTDevices[5], service: 'SSH', port: 22, protocol: 'TCP', flowsNow: 500, flowsPrev: 150 },
  { device: mockOTDevices[6], service: 'TELNET', port: 23, protocol: 'TCP', flowsNow: 400, flowsPrev: 100 },
  { device: mockOTDevices[7], service: 'HTTP', port: 80, protocol: 'TCP', flowsNow: 350, flowsPrev: 120 },
];

// Malicious IP data
const maliciousIPRaw = [
  { device: mockOTDevices[0], sourceIP: '123.152.99.118', flowsNow: 2100, flowsPrev: 1100, bytesNow: 17 },
  { device: mockOTDevices[0], sourceIP: '236.178.229.134', flowsNow: 1900, flowsPrev: 900, bytesNow: 16 },
  { device: mockOTDevices[1], sourceIP: '4.151.89.136', flowsNow: 1600, flowsPrev: 600, bytesNow: 15 },
  { device: mockOTDevices[2], sourceIP: '89.45.67.234', flowsNow: 1200, flowsPrev: 400, bytesNow: 12 },
  { device: mockOTDevices[3], sourceIP: '185.220.101.45', flowsNow: 800, flowsPrev: 300, bytesNow: 8 },
  { device: mockOTDevices[6], sourceIP: '45.33.32.156', flowsNow: 500, flowsPrev: 180, bytesNow: 5 },
  { device: mockOTDevices[7], sourceIP: '91.240.118.172', flowsNow: 400, flowsPrev: 120, bytesNow: 4 },
];

export interface RiskyServiceTableRow {
  id: string;
  label: string;
  service?: string;
  port?: number;
  protocol?: string;
  flowsNow: number;
  flowsPrev: number;
  children?: RiskyServiceTableRow[];
}

export interface MaliciousIPTableRow {
  id: string;
  label: string;
  sourceIP?: string;
  flowsNow: number;
  flowsPrev: number;
  deltaFlows: number;
  deltaDirection: 'up' | 'down';
  bytesNow?: number;
  children?: MaliciousIPTableRow[];
}

export interface CrossTrafficTableRow {
  id: string;
  destLabel: string;
  sourceLabel?: string;
  flowsNow: number;
  flowsPrev: number;
  deltaFlows: number;
  deltaDirection: 'up' | 'down';
  bytesNow?: number;
  children?: CrossTrafficTableRow[];
}

// Get the grouping key for a device based on groupBy selection
const getGroupKey = (device: OTDevice, groupBy: string): string => {
  switch (groupBy) {
    case 'Site': return device.site;
    case 'Boundary': return device.boundary;
    case 'Purdue Level': return device.purdueLevel;
    case 'Device Category': return device.deviceCategory;
    default: return device.site;
  }
};

// Generate risky services table data grouped by the selected option
export const getRiskyServicesTableData = (groupBy: string): RiskyServiceTableRow[] => {
  const grouped: Record<string, {
    items: typeof riskyServicesRaw;
    totalFlowsNow: number;
    totalFlowsPrev: number;
  }> = {};

  riskyServicesRaw.forEach(item => {
    const key = getGroupKey(item.device, groupBy);
    if (!grouped[key]) {
      grouped[key] = { items: [], totalFlowsNow: 0, totalFlowsPrev: 0 };
    }
    grouped[key].items.push(item);
    grouped[key].totalFlowsNow += item.flowsNow;
    grouped[key].totalFlowsPrev += item.flowsPrev;
  });

  return Object.entries(grouped).map(([label, data], index) => ({
    id: `risky-${index}`,
    label,
    flowsNow: data.totalFlowsNow,
    flowsPrev: data.totalFlowsPrev,
    children: data.items.map((item, childIndex) => ({
      id: `risky-${index}-${childIndex}`,
      label: getGroupKey(item.device, groupBy),
      service: item.service,
      port: item.port,
      protocol: item.protocol,
      flowsNow: item.flowsNow,
      flowsPrev: item.flowsPrev,
    }))
  }));
};

// Generate malicious IP table data grouped by the selected option
export const getMaliciousIPTableData = (groupBy: string): MaliciousIPTableRow[] => {
  const grouped: Record<string, {
    items: typeof maliciousIPRaw;
    totalFlowsNow: number;
    totalFlowsPrev: number;
    totalBytesNow: number;
  }> = {};

  maliciousIPRaw.forEach(item => {
    const key = getGroupKey(item.device, groupBy);
    if (!grouped[key]) {
      grouped[key] = { items: [], totalFlowsNow: 0, totalFlowsPrev: 0, totalBytesNow: 0 };
    }
    grouped[key].items.push(item);
    grouped[key].totalFlowsNow += item.flowsNow;
    grouped[key].totalFlowsPrev += item.flowsPrev;
    grouped[key].totalBytesNow += item.bytesNow;
  });

  return Object.entries(grouped).map(([label, data], index) => {
    const delta = data.totalFlowsNow - data.totalFlowsPrev;
    return {
      id: `malicious-${index}`,
      label,
      flowsNow: data.totalFlowsNow,
      flowsPrev: data.totalFlowsPrev,
      deltaFlows: Math.abs(delta),
      deltaDirection: delta >= 0 ? 'up' as const : 'down' as const,
      bytesNow: data.totalBytesNow,
      children: data.items.map((item, childIndex) => {
        const childDelta = item.flowsNow - item.flowsPrev;
        return {
          id: `malicious-${index}-${childIndex}`,
          label: getGroupKey(item.device, groupBy),
          sourceIP: item.sourceIP,
          flowsNow: item.flowsNow,
          flowsPrev: item.flowsPrev,
          deltaFlows: Math.abs(childDelta),
          deltaDirection: childDelta >= 0 ? 'up' as const : 'down' as const,
          bytesNow: item.bytesNow,
        };
      })
    };
  });
};

// Cross IT-OT traffic data with diverse OT sites, boundaries, locations, and environments
const crossITOTRaw = [
  // TX ICS Center traffic
  { source: mockOTDevices[0], dest: mockOTDevices[1], flowsNow: 3200, flowsPrev: 2100, bytesNow: 24 }, // TX ICS Center / ICS → Building A - Floor 1 / Production
  { source: mockOTDevices[0], dest: mockOTDevices[2], flowsNow: 2400, flowsPrev: 2100, bytesNow: 18 }, // TX ICS Center / ICS → Data Center / Production
  { source: mockOTDevices[1], dest: mockOTDevices[2], flowsNow: 1800, flowsPrev: 1200, bytesNow: 14 }, // TX ICS Center / DMZ → Data Center / Production
  // Manufacturing Alpha traffic
  { source: mockOTDevices[4], dest: mockOTDevices[5], flowsNow: 2100, flowsPrev: 1100, bytesNow: 17 }, // Manufacturing Alpha / Production Zone → Data Center / Enterprise
  { source: mockOTDevices[5], dest: mockOTDevices[4], flowsNow: 1600, flowsPrev: 600, bytesNow: 15 },  // Manufacturing Alpha / Enterprise Zone → Building B - Floor 2 / Production
  // Remote Site B traffic
  { source: mockOTDevices[3], dest: mockOTDevices[6], flowsNow: 1400, flowsPrev: 800, bytesNow: 12 },  // Remote Site B / Field Zone → Field Station 1 / Field
  { source: mockOTDevices[6], dest: mockOTDevices[3], flowsNow: 900, flowsPrev: 400, bytesNow: 8 },   // Remote Site B / Safety Zone → Field Station 3 / Field
  // Chemical Plant C traffic
  { source: mockOTDevices[7], dest: mockOTDevices[0], flowsNow: 1100, flowsPrev: 700, bytesNow: 10 },  // Chemical Plant C / Process Zone → Building A - Floor 1 / Production
  { source: mockOTDevices[7], dest: mockOTDevices[2], flowsNow: 750, flowsPrev: 500, bytesNow: 6 },   // Chemical Plant C / Process Zone → Data Center / Production
];

// Cross boundary traffic data
const crossBoundaryRaw = [
  { source: mockOTDevices[0], dest: mockOTDevices[2], flowsNow: 2100, flowsPrev: 1100, bytesNow: 17 },
  { source: mockOTDevices[1], dest: mockOTDevices[3], flowsNow: 1900, flowsPrev: 900, bytesNow: 16 },
  { source: mockOTDevices[4], dest: mockOTDevices[6], flowsNow: 1600, flowsPrev: 600, bytesNow: 15 },
  { source: mockOTDevices[3], dest: mockOTDevices[7], flowsNow: 800, flowsPrev: 300, bytesNow: 8 },
  { source: mockOTDevices[7], dest: mockOTDevices[5], flowsNow: 600, flowsPrev: 200, bytesNow: 6 },
];

// Grouped cross IT-OT traffic row interface
export interface CrossITOTGroupedRow {
  id: string;
  sourceLabel: string;  // OT Site (for Location) or Boundary (for Environment)
  flowsNow: number;
  flowsPrev: number;
  deltaFlows: number;
  deltaDirection: 'up' | 'down';
  children: {
    id: string;
    destLabel: string;  // Location (for Location) or Environment (for Environment)
    flowsNow: number;
    flowsPrev: number;
    deltaFlows: number;
    deltaDirection: 'up' | 'down';
  }[];
}

// Generate grouped cross IT-OT table data
// Location mode: Group by OT Site → expand to show Locations
// Environment mode: Group by Boundary → expand to show Environments
export const getCrossITOTGroupedData = (groupBy: 'Location' | 'Environment'): CrossITOTGroupedRow[] => {
  const grouped: Record<string, {
    children: Record<string, { flowsNow: number; flowsPrev: number }>;
    totalFlowsNow: number;
    totalFlowsPrev: number;
  }> = {};

  crossITOTRaw.forEach(item => {
    let sourceLabel: string;
    let destLabel: string;

    if (groupBy === 'Location') {
      // OT Site → Location
      sourceLabel = item.source.site;
      destLabel = item.dest.location;
    } else {
      // Boundary → Environment
      sourceLabel = item.source.boundary;
      destLabel = item.dest.environment;
    }

    if (!grouped[sourceLabel]) {
      grouped[sourceLabel] = { children: {}, totalFlowsNow: 0, totalFlowsPrev: 0 };
    }

    if (!grouped[sourceLabel].children[destLabel]) {
      grouped[sourceLabel].children[destLabel] = { flowsNow: 0, flowsPrev: 0 };
    }

    grouped[sourceLabel].children[destLabel].flowsNow += item.flowsNow;
    grouped[sourceLabel].children[destLabel].flowsPrev += item.flowsPrev;
    grouped[sourceLabel].totalFlowsNow += item.flowsNow;
    grouped[sourceLabel].totalFlowsPrev += item.flowsPrev;
  });

  return Object.entries(grouped)
    .map(([sourceLabel, data], index) => {
      const delta = data.totalFlowsNow - data.totalFlowsPrev;
      return {
        id: `cross-itot-group-${index}`,
        sourceLabel,
        flowsNow: data.totalFlowsNow,
        flowsPrev: data.totalFlowsPrev,
        deltaFlows: Math.abs(delta),
        deltaDirection: delta >= 0 ? 'up' as const : 'down' as const,
        children: Object.entries(data.children)
          .map(([destLabel, childData], childIndex) => {
            const childDelta = childData.flowsNow - childData.flowsPrev;
            return {
              id: `cross-itot-group-${index}-${childIndex}`,
              destLabel,
              flowsNow: childData.flowsNow,
              flowsPrev: childData.flowsPrev,
              deltaFlows: Math.abs(childDelta),
              deltaDirection: childDelta >= 0 ? 'up' as const : 'down' as const,
            };
          })
          .sort((a, b) => b.flowsNow - a.flowsNow),
      };
    })
    .sort((a, b) => b.flowsNow - a.flowsNow);
};

// Legacy grouped version - keeping for backward compatibility
export const getCrossITOTTableData = (groupBy: string): CrossTrafficTableRow[] => {
  const getKey = (device: OTDevice) => groupBy === 'Location' ? device.location : device.environment;

  const grouped: Record<string, {
    items: { sourceLabel: string; flowsNow: number; flowsPrev: number; bytesNow: number }[];
    totalFlowsNow: number;
    totalFlowsPrev: number;
  }> = {};

  crossITOTRaw.forEach(item => {
    const destKey = getKey(item.dest);
    const sourceKey = getKey(item.source);

    if (!grouped[destKey]) {
      grouped[destKey] = { items: [], totalFlowsNow: 0, totalFlowsPrev: 0 };
    }
    grouped[destKey].items.push({
      sourceLabel: sourceKey,
      flowsNow: item.flowsNow,
      flowsPrev: item.flowsPrev,
      bytesNow: item.bytesNow,
    });
    grouped[destKey].totalFlowsNow += item.flowsNow;
    grouped[destKey].totalFlowsPrev += item.flowsPrev;
  });

  return Object.entries(grouped).map(([destLabel, data], index) => {
    const delta = data.totalFlowsNow - data.totalFlowsPrev;
    return {
      id: `cross-itot-${index}`,
      destLabel,
      flowsNow: data.totalFlowsNow,
      flowsPrev: data.totalFlowsPrev,
      deltaFlows: Math.abs(delta),
      deltaDirection: delta >= 0 ? 'up' as const : 'down' as const,
      children: data.items.map((item, childIndex) => {
        const childDelta = item.flowsNow - item.flowsPrev;
        return {
          id: `cross-itot-${index}-${childIndex}`,
          destLabel,
          sourceLabel: item.sourceLabel,
          flowsNow: item.flowsNow,
          flowsPrev: item.flowsPrev,
          deltaFlows: Math.abs(childDelta),
          deltaDirection: childDelta >= 0 ? 'up' as const : 'down' as const,
          bytesNow: item.bytesNow,
        };
      })
    };
  });
};

// Generate cross boundary table data
export const getCrossBoundaryTableData = (groupBy: string): CrossTrafficTableRow[] => {
  const getKey = (device: OTDevice) => groupBy === 'Site' ? device.site : device.boundary;

  const grouped: Record<string, {
    items: { sourceLabel: string; flowsNow: number; flowsPrev: number; bytesNow: number }[];
    totalFlowsNow: number;
    totalFlowsPrev: number;
    totalBytesNow: number;
  }> = {};

  crossBoundaryRaw.forEach(item => {
    const destKey = getKey(item.dest);
    const sourceKey = getKey(item.source);

    // Only include cross-boundary traffic (different source and dest)
    if (destKey !== sourceKey) {
      if (!grouped[destKey]) {
        grouped[destKey] = { items: [], totalFlowsNow: 0, totalFlowsPrev: 0, totalBytesNow: 0 };
      }
      grouped[destKey].items.push({
        sourceLabel: sourceKey,
        flowsNow: item.flowsNow,
        flowsPrev: item.flowsPrev,
        bytesNow: item.bytesNow,
      });
      grouped[destKey].totalFlowsNow += item.flowsNow;
      grouped[destKey].totalFlowsPrev += item.flowsPrev;
      grouped[destKey].totalBytesNow += item.bytesNow;
    }
  });

  return Object.entries(grouped).map(([destLabel, data], index) => {
    const delta = data.totalFlowsNow - data.totalFlowsPrev;
    return {
      id: `cross-boundary-${index}`,
      destLabel,
      flowsNow: data.totalFlowsNow,
      flowsPrev: data.totalFlowsPrev,
      deltaFlows: Math.abs(delta),
      deltaDirection: delta >= 0 ? 'up' as const : 'down' as const,
      bytesNow: data.totalBytesNow,
      children: data.items.map((item, childIndex) => {
        const childDelta = item.flowsNow - item.flowsPrev;
        return {
          id: `cross-boundary-${index}-${childIndex}`,
          destLabel,
          sourceLabel: item.sourceLabel,
          flowsNow: item.flowsNow,
          flowsPrev: item.flowsPrev,
          deltaFlows: Math.abs(childDelta),
          deltaDirection: childDelta >= 0 ? 'up' as const : 'down' as const,
          bytesNow: item.bytesNow,
        };
      })
    };
  });
};

// Keep the old exports for backward compatibility
export const mockTrafficFlows: TrafficFlow[] = [
  {
    id: 'tf-001',
    sourceDevice: mockOTDevices[0],
    destinationDevice: mockOTDevices[2],
    sourcePort: 44818,
    destinationPort: 502,
    protocol: 'Modbus TCP',
    service: 'Industrial Protocol',
    bytesTransferred: 1250000,
    packetsTransferred: 8500,
    timestamp: '2026-03-12T10:30:00Z',
    policyDecision: 'allowed',
    isRisky: false,
    isMaliciousIP: false,
    trafficType: 'OT-OT'
  },
  {
    id: 'tf-002',
    sourceDevice: mockOTDevices[5],
    destinationDevice: mockOTDevices[0],
    sourcePort: 443,
    destinationPort: 44818,
    protocol: 'EtherNet/IP',
    service: 'Data Collection',
    bytesTransferred: 5400000,
    packetsTransferred: 25000,
    timestamp: '2026-03-12T10:28:00Z',
    policyDecision: 'allowed',
    isRisky: true,
    isMaliciousIP: false,
    trafficType: 'IT-OT'
  },
  {
    id: 'tf-003',
    sourceDevice: mockOTDevices[1],
    destinationDevice: mockOTDevices[0],
    sourcePort: 50000,
    destinationPort: 102,
    protocol: 'S7comm',
    service: 'HMI Communication',
    bytesTransferred: 890000,
    packetsTransferred: 4200,
    timestamp: '2026-03-12T10:25:00Z',
    policyDecision: 'allowed',
    isRisky: false,
    isMaliciousIP: false,
    trafficType: 'OT-OT'
  },
  {
    id: 'tf-004',
    sourceDevice: mockOTDevices[2],
    destinationDevice: mockOTDevices[3],
    sourcePort: 20000,
    destinationPort: 502,
    protocol: 'DNP3',
    service: 'SCADA Polling',
    bytesTransferred: 320000,
    packetsTransferred: 1800,
    timestamp: '2026-03-12T10:20:00Z',
    policyDecision: 'potentially_blocked',
    isRisky: true,
    isMaliciousIP: false,
    trafficType: 'OT-OT'
  },
  {
    id: 'tf-005',
    sourceDevice: mockOTDevices[7],
    destinationDevice: mockOTDevices[6],
    sourcePort: 2222,
    destinationPort: 44818,
    protocol: 'CIP Safety',
    service: 'Safety Protocol',
    bytesTransferred: 150000,
    packetsTransferred: 950,
    timestamp: '2026-03-12T10:15:00Z',
    policyDecision: 'allowed',
    isRisky: false,
    isMaliciousIP: false,
    trafficType: 'OT-OT'
  },
  {
    id: 'tf-006',
    sourceDevice: mockOTDevices[4],
    destinationDevice: mockOTDevices[0],
    sourcePort: 8080,
    destinationPort: 80,
    protocol: 'HTTP',
    service: 'Web Interface',
    bytesTransferred: 45000,
    packetsTransferred: 320,
    timestamp: '2026-03-12T09:45:00Z',
    policyDecision: 'blocked',
    isRisky: true,
    isMaliciousIP: true,
    trafficType: 'OT-External'
  },
  {
    id: 'tf-007',
    sourceDevice: mockOTDevices[5],
    destinationDevice: mockOTDevices[7],
    sourcePort: 5432,
    destinationPort: 1433,
    protocol: 'SQL',
    service: 'Database Sync',
    bytesTransferred: 12500000,
    packetsTransferred: 45000,
    timestamp: '2026-03-12T10:00:00Z',
    policyDecision: 'allowed',
    isRisky: false,
    isMaliciousIP: false,
    trafficType: 'IT-OT'
  },
  {
    id: 'tf-008',
    sourceDevice: mockOTDevices[3],
    destinationDevice: mockOTDevices[2],
    sourcePort: 4840,
    destinationPort: 4840,
    protocol: 'OPC UA',
    service: 'OPC Communication',
    bytesTransferred: 780000,
    packetsTransferred: 3800,
    timestamp: '2026-03-12T10:10:00Z',
    policyDecision: 'allowed',
    isRisky: false,
    isMaliciousIP: false,
    trafficType: 'OT-OT'
  }
];

export const getRiskyServicesData = (groupBy: string): WidgetData[] => {
  const groupedData: Record<string, number> = {};

  mockTrafficFlows.filter(f => f.isRisky).forEach(flow => {
    let key = '';
    switch (groupBy) {
      case 'Site':
        key = flow.sourceDevice.site;
        break;
      case 'Boundary':
        key = flow.sourceDevice.boundary;
        break;
      case 'Purdue Level':
        key = flow.sourceDevice.purdueLevel;
        break;
      case 'Device Category':
        key = flow.sourceDevice.deviceCategory;
        break;
      default:
        key = flow.sourceDevice.site;
    }
    groupedData[key] = (groupedData[key] || 0) + 1;
  });

  const total = Object.values(groupedData).reduce((a, b) => a + b, 0);
  const colors = ['#F85149', '#F0883E', '#D29922', '#A371F7', '#3FB9B7'];

  return Object.entries(groupedData).map(([label, value], index) => ({
    label,
    value,
    percentage: Math.round((value / total) * 100),
    color: colors[index % colors.length]
  }));
};

export const getMaliciousIPData = (groupBy: string): WidgetData[] => {
  const groupedData: Record<string, number> = {};

  mockTrafficFlows.filter(f => f.isMaliciousIP).forEach(flow => {
    let key = '';
    switch (groupBy) {
      case 'Site':
        key = flow.sourceDevice.site;
        break;
      case 'Boundary':
        key = flow.sourceDevice.boundary;
        break;
      case 'Purdue Level':
        key = flow.sourceDevice.purdueLevel;
        break;
      case 'Device Category':
        key = flow.sourceDevice.deviceCategory;
        break;
      default:
        key = flow.sourceDevice.site;
    }
    groupedData[key] = (groupedData[key] || 0) + 1;
  });

  const total = Object.values(groupedData).reduce((a, b) => a + b, 0) || 1;
  const colors = ['#F85149', '#F0883E', '#D29922', '#A371F7', '#3FB9B7'];

  return Object.entries(groupedData).map(([label, value], index) => ({
    label,
    value,
    percentage: Math.round((value / total) * 100),
    color: colors[index % colors.length]
  }));
};

export const getCrossITOTData = (groupBy: string): CrossTrafficData[] => {
  const itOtFlows = mockTrafficFlows.filter(f => f.trafficType === 'IT-OT');
  const groupedData: Record<string, CrossTrafficData> = {};

  itOtFlows.forEach(flow => {
    let sourceKey = '';
    let destKey = '';

    if (groupBy === 'Location') {
      sourceKey = flow.sourceDevice.location;
      destKey = flow.destinationDevice.location;
    } else {
      sourceKey = flow.sourceDevice.environment;
      destKey = flow.destinationDevice.environment;
    }

    const key = `${sourceKey}->${destKey}`;
    if (!groupedData[key]) {
      groupedData[key] = {
        source: sourceKey,
        destination: destKey,
        flowCount: 0,
        bytesTransferred: 0,
        riskLevel: 'low'
      };
    }
    groupedData[key].flowCount += 1;
    groupedData[key].bytesTransferred += flow.bytesTransferred;
    if (flow.isRisky) groupedData[key].riskLevel = 'high';
  });

  return Object.values(groupedData);
};

export const getCrossBoundaryData = (groupBy: string): CrossTrafficData[] => {
  const groupedData: Record<string, CrossTrafficData> = {};

  mockTrafficFlows.forEach(flow => {
    let sourceKey = '';
    let destKey = '';

    if (groupBy === 'Site') {
      sourceKey = flow.sourceDevice.site;
      destKey = flow.destinationDevice.site;
    } else {
      sourceKey = flow.sourceDevice.boundary;
      destKey = flow.destinationDevice.boundary;
    }

    if (sourceKey !== destKey) {
      const key = `${sourceKey}->${destKey}`;
      if (!groupedData[key]) {
        groupedData[key] = {
          source: sourceKey,
          destination: destKey,
          flowCount: 0,
          bytesTransferred: 0,
          riskLevel: 'low'
        };
      }
      groupedData[key].flowCount += 1;
      groupedData[key].bytesTransferred += flow.bytesTransferred;
      if (flow.isRisky) groupedData[key].riskLevel = 'high';
    }
  });

  return Object.values(groupedData);
};
