"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  detectVPN: () => detectVPN,
  useVPNDetector: () => useVPNDetector
});
module.exports = __toCommonJS(src_exports);

// src/hook.ts
var import_react = require("react");
var useVPNDetector = (options) => {
  const [result, setResult] = (0, import_react.useState)({
    isUsingVPN: false,
    data: null,
    error: null
  });
  (0, import_react.useEffect)(() => {
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
var import_axios = __toESM(require("axios"));
var detectVPN = (options) => __async(void 0, null, function* () {
  try {
    const { apiUrl, apiKey } = options;
    const response = yield import_axios.default.get(apiUrl, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  detectVPN,
  useVPNDetector
});
