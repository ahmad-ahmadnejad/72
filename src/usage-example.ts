// import { useVPNDetector } from 'react-vpn-detector';

// const App = () => {
//   const { isUsingVPN, data, error } = useVPNDetector({
//     apiUrl:
//       'https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY',
//   });

//   if (error) {
//     return (
//       <div className='flex justify-center items-center h-screen bg-red-50'>
//         <div className='p-4 bg-white shadow-md rounded-lg'>
//           <h1 className='text-xl font-semibold text-red-500'>Error</h1>
//           <p className='text-gray-700 mt-2'>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className='min-h-screen bg-gray-50 flex flex-col items-center py-10'>
//       <div className='bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full'>
//         <h1 className='text-2xl font-bold mb-6 text-gray-800'>VPN Detection</h1>

//         <div className='p-4 rounded-lg bg-blue-100 text-blue-800 mb-6'>
//           <p className='font-semibold'>
//             VPN Status: {isUsingVPN ? 'VPN Detected' : 'No VPN detected'}
//           </p>
//         </div>

//         {data && (
//           <div className='space-y-4'>
//             <div className='flex items-center space-x-4'>
//               <img
//                 src={data.country_flag}
//                 alt={`Flag of ${data.country_name}`}
//                 className='w-12 h-12 rounded-lg'
//               />
//               <div>
//                 <h2 className='text-lg font-bold text-gray-800'>
//                   {data.country_name}
//                 </h2>
//                 <p className='text-gray-600'>{data.country_name_official}</p>
//                 <p className='text-gray-600'>
//                   {data.city}, {data.state_prov}, {data.country_capital}
//                 </p>
//               </div>
//             </div>

//             <div className='grid grid-cols-2 gap-4'>
//               <div>
//                 <p className='text-sm text-gray-500'>IP Address</p>
//                 <p className='text-gray-700'>{data.ip}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>ISP</p>
//                 <p className='text-gray-700'>{data.isp}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Connection Type</p>
//                 <p className='text-gray-700'>{data.connection_type}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Organization</p>
//                 <p className='text-gray-700'>{data.organization}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Latitude</p>
//                 <p className='text-gray-700'>{data.latitude}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Longitude</p>
//                 <p className='text-gray-700'>{data.longitude}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Time Zone</p>
//                 <p className='text-gray-700'>{data.time_zone.name}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Current Time</p>
//                 <p className='text-gray-700'>{data.time_zone.current_time}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Calling Code</p>
//                 <p className='text-gray-700'>{data.calling_code}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Country Code</p>
//                 <p className='text-gray-700'>{data.country_code3}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Languages</p>
//                 <p className='text-gray-700'>{data.languages}</p>
//               </div>
//               <div>
//                 <p className='text-sm text-gray-500'>Currency</p>
//                 <p className='text-gray-700'>
//                   {data.currency.name} ({data.currency.symbol})
//                 </p>
//               </div>
//             </div>

//             <div>
//               <h3 className='text-lg font-bold text-gray-800 mb-2'>
//                 Additional Information
//               </h3>
//               <div className='grid grid-cols-2 gap-4'>
//                 <div>
//                   <p className='text-sm text-gray-500'>Continent</p>
//                   <p className='text-gray-700'>{data.continent_name}</p>
//                 </div>
//                 <div>
//                   <p className='text-sm text-gray-500'>District</p>
//                   <p className='text-gray-700'>{data.district || 'N/A'}</p>
//                 </div>
//                 <div>
//                   <p className='text-sm text-gray-500'>Is EU?</p>
//                   <p className='text-gray-700'>{data.is_eu ? 'Yes' : 'No'}</p>
//                 </div>
//                 <div>
//                   <p className='text-sm text-gray-500'>Daylight Savings Time</p>
//                   <p className='text-gray-700'>
//                     {data.time_zone.dst_exists ? 'Active' : 'Inactive'}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
