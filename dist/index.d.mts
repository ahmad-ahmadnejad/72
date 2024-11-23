interface VPNDetectorOptions$1 {
    apiUrl: string;
    apiKey?: string;
}
interface VPNDetectionResult$1 {
    isUsingVPN: boolean;
    data?: any;
    error?: string;
}
declare const detectVPN: (options: VPNDetectorOptions$1) => Promise<VPNDetectionResult$1>;

declare const useVPNDetector: (options: VPNDetectorOptions$1) => VPNDetectionResult$1;

interface VPNDetectorOptions {
    apiUrl: string;
    apiKey?: string;
}
interface VPNDetectionResult {
    isUsingVPN: boolean;
    data?: any;
    error?: string;
}

export { type VPNDetectionResult, type VPNDetectorOptions, detectVPN, useVPNDetector };
