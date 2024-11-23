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

// src/hook.ts
var useVPNDetector = (options) => {
  const [result, setResult] = useState({
    isUsingVPN: false
  });
  useEffect(() => {
    const checkVPN = () => __async(void 0, null, function* () {
      const detectionResult = yield detectVPN(options);
      setResult(detectionResult);
    });
    checkVPN();
  }, [options]);
  return result;
};
export {
  detectVPN,
  useVPNDetector
};
