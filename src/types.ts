export interface OTDevice {
  id: string;
  name: string;
  ipAddress: string;
  macAddress: string;
  site: string;
  boundary: string;
  purdueLevel: string;
  deviceCategory: string;
  deviceType: string;
  location: string;
  region: string;
  environment: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low' | 'none';
  riskScore: number;
  status: 'online' | 'offline';
  lastSeen: string;
  vendor?: string;
  model?: string;
  firmware?: string;
  source?: string;
  labels?: { type: 'loc' | 'env' | 'app'; value: string }[];
  tags?: { key: string; value: string }[];
}

export interface TrafficFlow {
  id: string;
  sourceDevice: OTDevice;
  destinationDevice: OTDevice;
  sourcePort: number;
  destinationPort: number;
  protocol: string;
  service: string;
  bytesTransferred: number;
  packetsTransferred: number;
  timestamp: string;
  policyDecision: 'allowed' | 'blocked' | 'potentially_blocked';
  isRisky: boolean;
  isMaliciousIP: boolean;
  trafficType: 'IT-OT' | 'OT-OT' | 'OT-External';
}

export interface WidgetData {
  label: string;
  value: number;
  percentage?: number;
  color?: string;
}

export interface CrossTrafficData {
  source: string;
  destination: string;
  flowCount: number;
  bytesTransferred: number;
  riskLevel: 'high' | 'medium' | 'low';
}

export type DropdownOption = 'Site' | 'Boundary' | 'Purdue Level' | 'Device Category';
export type LocationGrouping = 'Location' | 'Environment';
export type CrossTrafficGrouping = 'Site' | 'Boundary';

export interface TrafficTableRow {
  id: string;
  trafficStatus: 'Allowed' | 'Blocked' | 'Potentially Blocked';
  sourceResource: OTDevice;
  sourceIP: string;
  port: number;
  service: string;
  serviceRisk: boolean;
  protocol: string;
  destinationResource: OTDevice;
  destinationIP: string;
  sentBytes: number;
  receivedBytes: number;
  flowCount: number;
  sourceRegion: string;
  sourceResourceType: string;
  destinationResourceType: string;
  destinationRegion: string;
  packetsSent: number;
  packetsReceived: number;
  startTime: string;
  endTime: string;
}
