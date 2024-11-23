import { useState, useEffect } from 'react';

export interface VPNDetectorOptions {
  apiUrl: string;
}

export interface VPNDetectionResult {
  isUsingVPN: boolean;
  data: any;
  error: string | null;
}

export const useVPNDetector = (
  options: VPNDetectorOptions
): VPNDetectionResult => {
  const [result, setResult] = useState<VPNDetectionResult>({
    isUsingVPN: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true; // Ensure the component is still mounted before setting state

    const fetchVPNStatus = async () => {
      try {
        const response = await fetch(options.apiUrl);
        const data = await response.json();

        // Detect VPN based on some condition (customize this logic)
        const isUsingVPN =
          /vpn|proxy/i.test(data.isp) || // Example: Check if the ISP name indicates a VPN/proxy
          /vpn|proxy/i.test(data.connection_type || '');

        if (isMounted) {
          setResult({ isUsingVPN, data, error: null });
        }
      } catch (error: any) {
        if (isMounted) {
          setResult({ isUsingVPN: false, data: null, error: error.message });
        }
      }
    };

    fetchVPNStatus();

    // Cleanup to avoid state updates after unmount
    return () => {
      isMounted = false;
    };
  }, [options.apiUrl]); // Dependency array ensures the effect runs once (on mount) unless `apiUrl` changes

  return result;
};
