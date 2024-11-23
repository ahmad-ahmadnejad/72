var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/hook.ts
import { useState, useEffect } from "react";
var useVPNDetector = (options) => {
  const [result, setResult] = useState({
    isUsingVPN: false,
    data: null,
    error: null
  });
  useEffect(() => {
    let isMounted = true;
    const fetchVPNStatus = () => __async(void 0, null, function* () {
      try {
        const response = yield fetch(options.apiUrl);
        const data = yield response.json();
        const isUsingVPN = /vpn|proxy/i.test(data.isp) || // Example: Check if the ISP name indicates a VPN/proxy
        /vpn|proxy/i.test(data.connection_type || "");
        if (isMounted) {
          setResult({ isUsingVPN, data, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setResult({ isUsingVPN: false, data: null, error: error.message });
        }
      }
    });
    fetchVPNStatus();
    return () => {
      isMounted = false;
    };
  }, [options.apiUrl]);
  return result;
};

// src/detector.ts
import axios from "axios";
var detectVPN = (options) => __async(void 0, null, function* () {
  try {
    const { apiUrl, apiKey } = options;
    const response = yield axios.get(apiUrl, {
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : {}
    });
    const data = response.data;
    const isUsingVPN = /vpn|proxy|host|datacenter|cloud/i.test(data.isp) || // Check ISP for VPN indicators
    /proxy|vpn/i.test(data.connection_type) || // Check connection type
    data.organization && /vpn|proxy/i.test(data.organization);
    return { isUsingVPN, data };
  } catch (error) {
    return { isUsingVPN: false, error: error.message };
  }
});
export {
  detectVPN,
  useVPNDetector
};
