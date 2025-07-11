/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import SyntaxHighlighter from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { useSelector } from "react-redux";
// // import { getOperations } from "@/lib/features/operationSlice"; // make sure this thunk exists
// import { commandMapName } from "./commandMapData";
// import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
// import { useSidebar } from "@/components/ui/sidebar";

// const ApiRequest = () => {
//   // Grab state from Redux
//   const { data, isLoading, isError, message } = useSelector(
//     (state: any) => state.operations
//   );

//   console.log("data", data);

//   const { state } = useSidebar();
//   console.log("state", state);

//   return (
//     <div className="px-3 py-3 w-full max-h-[70vh] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 ">
//       <h2 className="text-xl font-bold">API Request Handler</h2>

//       {/* Command Copy Section */}
//       <div className="mt-3 w-full">
//         <ScriptCopyBtn
//           showMultiplePackageOptions={true}
//           codeLanguage="shell"
//           lightTheme="nord"
//           darkTheme="vitesse-dark"
//           commandMap={commandMapName}
//         />
//       </div>

//       {/* Operations Request Section */}
//       <div className="border mt-3 p-3 rounded-lg">
//         <h2 className="text-lg font-semibold mb-2">Operations Data</h2>
//         <p className="border-b pb-1 mb-2 text-sm">Fetched API Data</p>

//         {/* Loading State */}
//         {isLoading && (
//           <div className="flex items-center justify-center text-sm">
//             <span className="loader mr-2"></span>
//             Loading operations...
//           </div>
//         )}

//         {/* Error State */}
//         {isError && (
//           <div className="text-red-500 text-sm">
//             <p>Error loading operations: {message}</p>
//             <p>Please check your network or API settings.</p>
//             <button className="text-blue-500 underline">Retry</button>
//           </div>
//         )}

//         {/* Empty State */}
//         {!isLoading && !isError && !data && (
//           <p className="text-sm">No operations available at this time.</p>
//         )}

//         {/* max-w-[74rem] */}
//         {/* Data Display */}
//         {!isLoading && !isError && data && (
//           <div
//             className={`rounded-md overflow-hidden text-sm md:w-[75rem] w-full
//               ${state === "collapsed" ? "md:w-[90rem]" : ""}
//               `}
//           >
//             <SyntaxHighlighter language="json" style={dracula}>
//               {JSON.stringify(data, null, 2)}
//             </SyntaxHighlighter>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ApiRequest;

"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useSelector } from "react-redux";
// import { getOperations } from "@/lib/features/operationSlice"; // make sure this thunk exists
import { commandMapName } from "./commandMapData";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const ApiRequest = () => {
  // Grab state from Redux
  const { data, isLoading, isError, message } = useSelector(
    (state: any) => state.operations
  );
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const actionType = pathSegments[2];
  // console.log("actionType in ApiRequest:", actionType);

  // console.log("data", data);

  const { state } = useSidebar();
  // console.log("state", state);

  // Handle JSON stringify once
  const dataString = JSON.stringify(data, null, 2);

  // console.log("typeof data:", typeof data); // usually 'object'
  // console.log("Array.isArray:", Array.isArray(data)); // true if array
  // console.log("data instanceof Object:", data instanceof Object); // true for objects
  // console.log("data:", data); // logs the actual structure

  return (
    <div className="px-3 py-3 w-full max-h-[70vh] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 ">
      <h2 className="text-xl font-bold">API Request Handler</h2>

      {/* Command Copy Section */}
      <div className="mt-3 w-full">
        <ScriptCopyBtn
          showMultiplePackageOptions={true}
          codeLanguage="shell"
          lightTheme="nord"
          darkTheme="vitesse-dark"
          commandMap={commandMapName}
        />
      </div>

      {/* {actionType === "create" ||
        (actionType === "update" && (
          <div className="border mt-3 p-3 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Operations Data</h2>
            <p className="border-b pb-1 mb-2 text-sm">Fetched API Data</p>

   
            {isLoading && (
              <div className="flex items-center justify-center text-sm">
                <span className="loader mr-2"></span>
                Loading operations...
              </div>
            )}

      
            {isError && (
              <div className="text-red-500 text-sm">
                <p>Error loading operations: {message}</p>
                <p>Please check your network or API settings.</p>
                <button className="text-blue-500 underline">Retry</button>
              </div>
            )}

   
            {!isLoading && !isError && !data && (
              <p className="text-sm">No operations available at this time.</p>
            )}

          
            {!isLoading && !isError && data && (
              <div
                className={`rounded-md overflow-hidden text-sm md:w-[75rem] w-full
              ${state === "collapsed" ? "md:w-[90rem]" : ""}
              `}
              >
                <SyntaxHighlighter language="json" style={dracula}>
                  {dataString}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        ))} */}

      {actionType !== "create" &&
        actionType !== "update" &&
        actionType !== "delete" && (
          <div className="border mt-3 p-3 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Operations Data</h2>
            <p className="border-b pb-1 mb-2 text-sm">Fetched API Data</p>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center text-sm">
                <span className="loader mr-2"></span>
                Loading operations...
              </div>
            )}

            {/* Error State */}
            {isError && (
              <div className="text-red-500 text-sm">
                <p>Error loading operations: {message}</p>
                <p>Please check your network or API settings.</p>
                <button className="text-blue-500 underline">Retry</button>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && !isError && !data && (
              <p className="text-sm">No operations available at this time.</p>
            )}

            {/* Data Display */}
            {!isLoading && !isError && data && (
              <div
                className={`rounded-md overflow-hidden text-sm md:w-[75rem] w-full
        ${state === "collapsed" ? "md:w-[90rem]" : ""}
        `}
              >
                <SyntaxHighlighter language="json" style={dracula}>
                  {dataString}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export default ApiRequest;
