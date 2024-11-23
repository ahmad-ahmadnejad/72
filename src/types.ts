export interface VPNDetectorOptions {
  apiUrl: string;
  apiKey?: string;
}

export interface VPNDetectionResult {
  isUsingVPN: boolean;
  data?: any;
  error?: string;
}
