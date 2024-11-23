interface VPNDetectorOptions$2 {
    apiUrl: string;
}
interface VPNDetectionResult$2 {
    isUsingVPN: boolean;
    data: any;
    error: string | null;
}
declare const useVPNDetector: (options: VPNDetectorOptions$2) => VPNDetectionResult$2;

interface VPNDetectorOptions$1 {
    apiUrl: string;
    apiKey?: string;
}
interface VPNDetectionResult$1 {
    isUsingVPN: boolean;
    data?: any;
    error?: any;
}
declare const detectVPN: (options: VPNDetectorOptions$1) => Promise<VPNDetectionResult$1>;

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
