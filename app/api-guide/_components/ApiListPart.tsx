// import React from "react";

// const ApiListPart = ({ apiHeading }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold">{apiHeading}</h2>
//       <div className="space-y-3">
//         <span className="flex justify-between items-center">
//           <p className="">Get all the data</p>
//           <p className="bg-green-400 text-green-200 px-2  rounded-lg font-medium">
//             GET
//           </p>
//         </span>
//         <p className="">Get a single data</p>
//         <p className="">Get </p>
//         <p className="">Get all the data</p>
//         <p className="">Get a single data</p>
//         <p className="">Get </p>
//       </div>
//     </div>
//   );
// };

// export default ApiListPart;

// "use client";
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useParams, useRouter } from "next/navigation";
// import React from "react";

// const ApiListPart = ({ apiHeading, list }: any) => {
//   console.log("list", list, apiHeading);
//   const path = useParams();
//   console.log("path", path);
//   const showpath = `${path.apiname}/${path.operation}`;
//   console.log("showpath", showpath);

//   const router = useRouter();
//   return (
//     <div className="p-6 ">
//       <h2 className="text-lg font-semibold  mb-2">{apiHeading}</h2>
//       <div className="space-y-4">
//         {list.map((item: any, index: any) => (
//           <div
//             className={`${
//               item.urlName === showpath ? "bg-gray-700/10" : ""
//             } flex justify-between items-center  px-4 py-2 rounded-lg hover:bg-gray-700/10 dark:hover:bg-gray-300/20 cursor-pointer`}
//             key={index}
//             onClick={() => {
//               console.log("onClick", item.urlName);

//               router.push(`/api-guide/${item.urlName}`);
//             }}
//           >
//             <p className="text-lg  font-medium">{item.name}</p>
//             <p
//               className={`text-sm font-bold px-3 py-1 rounded-lg ${
//                 item.method === "GET"
//                   ? "bg-green-100 text-green-800"
//                   : item.method === "POST"
//                   ? "bg-blue-100 text-blue-800"
//                   : item.method === "PUT"
//                   ? "bg-yellow-100 text-yellow-800"
//                   : item.method === "DELETE"
//                   ? "bg-red-100 text-red-800"
//                   : "bg-gray-100 text-gray-800"
//               }`}
//             >
//               {item.method}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ApiListPart;

// "use client";

// import { useParams, useRouter } from "next/navigation";
// import React from "react";

// interface ApiItem {
//   name: string;
//   method: string;
//   url: string;
//   urlName?: string;
// }

// interface ApiListPartProps {
//   apiHeading: string;
//   list: ApiItem[];
// }

// const ApiListPart: React.FC<ApiListPartProps> = ({ apiHeading, list }) => {
//   const params = useParams() as { apiname?: string; operation?: string };
//   const router = useRouter();

//   // Compose current path string for highlighting active item
//   const showpath = `${params.apiname ?? ""}/${params.operation ?? ""}`;

//   return (
//     <div className="p-6">
//       <h2 className="text-lg font-semibold mb-2">{apiHeading}</h2>
//       <div className="space-y-4">
//         {list.map((item, index) => {
//           const isActive = item.urlName === showpath;

//           return (
//             <div
//               key={index}
//               className={`${
//                 isActive ? "bg-gray-700/10 dark:bg-gray-300/20" : ""
//               } flex justify-between items-center px-4 py-2 rounded-lg hover:bg-gray-700/10 dark:hover:bg-gray-300/20 cursor-pointer`}
//               onClick={() => {
//                 router.push(`/api-guide/${item.urlName}`);
//               }}
//             >
//               <p className="text-lg font-medium">{item.name}</p>
//               <p
//                 className={`text-sm font-bold px-3 py-1 rounded-lg ${
//                   item.method === "GET"
//                     ? "bg-green-100 text-green-800"
//                     : item.method === "POST"
//                     ? "bg-blue-100 text-blue-800"
//                     : item.method === "PUT"
//                     ? "bg-yellow-100 text-yellow-800"
//                     : item.method === "DELETE"
//                     ? "bg-red-100 text-red-800"
//                     : "bg-gray-100 text-gray-800"
//                 }`}
//               >
//                 {item.method}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ApiListPart;

// "use client";

// import { cn } from "@/lib/utils";
// import { useParams, useRouter } from "next/navigation";
// import React from "react";

// interface ApiItem {
//   name: string;
//   method: string;
//   url: string;
//   urlName?: string;
// }

// interface ApiListPartProps {
//   apiHeading: string;
//   list: ApiItem[];
//   setGetUrlName: (urlName: string) => void;
// }

// const ApiListPart: React.FC<ApiListPartProps> = ({
//   apiHeading,
//   list,
//   setGetUrlName,
// }) => {
//   const params = useParams() as { apiname?: string; operation?: string };
//   const router = useRouter();

//   // Construct the current path for active item matching
//   const currentPath = `${params?.apiname ?? ""}/${params?.operation ?? ""}`;

//   return (
//     <div className="p-6">
//       <h2 className="text-lg font-semibold mb-4">{apiHeading}</h2>
//       <div className="space-y-4">
//         {list.map((item, index) => {
//           const isActive = item.urlName === currentPath;

//           return (
//             <div
//               key={index}
//               className={cn(
//                 "flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer",
//                 {
//                   "bg-gray-700/10 dark:bg-gray-300/20": isActive,
//                   "hover:bg-gray-700/10 dark:hover:bg-gray-300/20": true,
//                 }
//               )}
//               onClick={() => {
//                 if (item.urlName) {
//                   setGetUrlName(item.url);
//                   router.push(`/api-guide/${item.urlName}`);
//                 }
//               }}
//             >
//               <p className="text-lg font-medium">{item.name}</p>
//               <p
//                 className={cn("text-sm font-bold px-3 py-1 rounded-lg", {
//                   "bg-green-100 text-green-800": item.method === "GET",
//                   "bg-blue-100 text-blue-800": item.method === "POST",
//                   "bg-yellow-100 text-yellow-800": item.method === "PUT",
//                   "bg-red-100 text-red-800": item.method === "DELETE",
//                   "bg-gray-100 text-gray-800": ![
//                     "GET",
//                     "POST",
//                     "PUT",
//                     "DELETE",
//                   ].includes(item.method),
//                 })}
//               >
//                 {item.method}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ApiListPart;

"use client";

import { setRequestMethod, setSelectedUrl } from "@/lib/features/apiSlice";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface ApiItem {
  name: string;
  method: string;
  url: string;
  urlName?: string;
}

interface ApiListPartProps {
  apiHeading: string;
  list: ApiItem[];
}

const ApiListPart: React.FC<ApiListPartProps> = ({ apiHeading, list }) => {
  const params = useParams() as { apiname?: string; operation?: string };
  const router = useRouter();
  const dispatch = useDispatch();

  const currentPath = `${params?.apiname ?? ""}/${params?.operation ?? ""}`;

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">{apiHeading}</h2>
      <div className="space-y-4">
        {list.map((item, index) => {
          const isActive = item.urlName === currentPath;

          return (
            <div
              key={index}
              className={cn(
                "flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700/10 dark:hover:bg-gray-300/20",
                isActive && "bg-gray-700/10 dark:bg-gray-300/20"
              )}
              onClick={() => {
                dispatch(setSelectedUrl(item.url));
                dispatch(setRequestMethod(item.method));
                if (item.urlName) {
                  router.push(`/api-guide/${item.urlName}`);
                }
              }}
            >
              <p className="text-lg font-medium">{item.name}</p>
              <p
                className={cn("text-sm font-bold px-3 py-1 rounded-lg", {
                  "bg-green-100 text-green-800": item.method === "GET",
                  "bg-blue-100 text-blue-800": item.method === "POST",
                  "bg-yellow-100 text-yellow-800": item.method === "PUT",
                  "bg-red-100 text-red-800": item.method === "DELETE",
                  "bg-gray-100 text-gray-800": ![
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE",
                  ].includes(item.method),
                })}
              >
                {item.method || "N/A"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApiListPart;
