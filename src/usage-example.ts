// import React from 'react';
// import { useVPNDetector } from 'my-vpn-detector';

// const App = () => {
//   const { isUsingVPN, data, error } = useVPNDetector({
//     apiUrl: 'https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY',
//   });

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {isUsingVPN ? (
//         <p>VPN Detected: Your ISP appears to be a VPN or proxy.</p>
//       ) : (
//         <p>No VPN detected.</p>
//       )}
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default App;
