import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes.
//         source: "/(.*)",

//         headers: [
//           {
//             key: "Access-Control-Allow-Origin",
//             value: "*",
//             // value: "http://localhost:8080",
//           },
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET,HEAD,PUT,PATCH,POST,DELETE",
//           },
//           {
//             key: "Access-Control-Allow-Headers",
//             value:
//               "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,HEAD,PUT,PATCH,POST,DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
