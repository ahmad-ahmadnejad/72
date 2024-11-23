import axios from 'axios';

export interface VPNDetectorOptions {
  apiUrl: string;
  apiKey?: string;
}

export interface VPNDetectionResult {
  isUsingVPN: boolean;
  data?: any;
  error?: string;
}

export const detectVPN = async (
  options: VPNDetectorOptions
): Promise<VPNDetectionResult> => {
  try {
    const { apiUrl, apiKey } = options;

    const response = await axios.get(apiUrl, {
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : {},
    });

    const data = response.data;

    // Example VPN detection logic
    const isUsingVPN =
      /vpn|proxy|host|datacenter|cloud/i.test(data.isp) || // Check ISP for VPN indicators
      /proxy|vpn/i.test(data.connection_type) || // Check connection type
      (data.organization && /vpn|proxy/i.test(data.organization)); // Check organization

    return { isUsingVPN, data };
  } catch (error: any) {
    return { isUsingVPN: false, error: error.message };
  }
};
