import { useState, useEffect } from 'react';
import { detectVPN, VPNDetectorOptions, VPNDetectionResult } from './detector';

export const useVPNDetector = (
  options: VPNDetectorOptions
): VPNDetectionResult => {
  const [result, setResult] = useState<VPNDetectionResult>({
    isUsingVPN: false,
  });

  useEffect(() => {
    const checkVPN = async () => {
      const detectionResult = await detectVPN(options);
      setResult(detectionResult);
    };

    checkVPN();
  }, [options]);

  return result;
};
