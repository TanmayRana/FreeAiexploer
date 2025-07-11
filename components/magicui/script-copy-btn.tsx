/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Check, ChevronDown, Copy } from "lucide-react";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { HTMLAttributes, useEffect, useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { usePathname } from "next/navigation";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useDispatch, useSelector } from "react-redux";

// // import { RootState } from "@/lib/store"; // Make sure this is your root reducer type
// import { commandMapArray } from "@/app/api-guide/_components/commandMapData";
// import { getOperations } from "@/lib/features/operationSlice";
// import { AppDispatch } from "@/lib/store";

// interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
//   showMultiplePackageOptions?: boolean;
//   codeLanguage: string;
//   lightTheme: string;
//   darkTheme: string;
//   commandMap: Record<string, string>;
//   className?: string;
// }

// export function ScriptCopyBtn({
//   showMultiplePackageOptions = true,
//   codeLanguage,
//   lightTheme,
//   darkTheme,
//   commandMap,
//   className,
// }: ScriptCopyBtnProps) {
//   const packageManagers = Object.keys(commandMap);
//   const [visibleManagers, setVisibleManagers] = useState<string[]>(
//     packageManagers.slice(0, 4)
//   );
//   const [remainingManagers, setRemainingManagers] = useState<string[]>(
//     packageManagers.slice(4)
//   );
//   const [packageManager, setPackageManager] = useState<string>(
//     visibleManagers[0]
//   );
//   const [copied, setCopied] = useState<boolean>(false);
//   const [highlightedCode, setHighlightedCode] = useState<string>("");
//   const { theme } = useTheme();
//   const path = usePathname();
//   const [selectedElement, setSelectedElement] = useState<number>(0);
//   const [selectedVariantKey, setSelectedVariantKey] = useState<string | null>(
//     null
//   );
//   const [objectData, setObjectData] = useState<[string, string][]>([]);
//   const dispatch = useDispatch<AppDispatch>();

//   const selectedUrl = useSelector((state: any) => state.api.selectedUrl);

//   useEffect(() => {
//     const splitPath = path.split("/")[2];
//     if (!splitPath || !commandMapArray[splitPath]) return;

//     const entries = Object.entries(commandMapArray[splitPath]);
//     const selectedEntry = entries[selectedElement];

//     if (selectedEntry) {
//       const [key, value] = selectedEntry;
//       if (typeof value === "object" && value !== null) {
//         const innerEntries = Object.entries(value).filter(
//           ([, val]) => typeof val === "string"
//         ) as [string, string][];
//         setObjectData(innerEntries);
//       } else if (typeof value === "string") {
//         setObjectData([[key, value]]);
//       }
//       setSelectedVariantKey(null);
//     } else {
//       setObjectData([]);
//       console.warn("Selected entry is undefined. Check selectedElement index.");
//     }
//   }, [path, selectedElement]);

//   useEffect(() => {
//     async function loadHighlightedCode() {
//       try {
//         const { codeToHtml } = await import("shiki");
//         let valueToHighlight: string | undefined;

//         if (objectData.length > 0) {
//           valueToHighlight = selectedVariantKey
//             ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//             : objectData[0][1];
//         } else {
//           valueToHighlight = commandMap[packageManager];
//         }

//         if (valueToHighlight) {
//           const highlighted = await codeToHtml(valueToHighlight, {
//             lang: codeLanguage,
//             themes: {
//               light: lightTheme,
//               dark: darkTheme,
//             },
//             defaultColor: theme === "dark" ? "dark" : "light",
//           });
//           setHighlightedCode(highlighted);
//         } else {
//           setHighlightedCode(`<pre>${commandMap[packageManager]}</pre>`);
//         }
//       } catch (error) {
//         console.error("Error highlighting code:", error);
//         setHighlightedCode(`<pre>${commandMap[packageManager]}</pre>`);
//       }
//     }

//     loadHighlightedCode();
//   }, [
//     packageManager,
//     codeLanguage,
//     lightTheme,
//     darkTheme,
//     theme,
//     commandMap,
//     selectedVariantKey,
//     objectData,
//   ]);

//   const copyToClipboard = () => {
//     const textToCopy =
//       objectData.length > 0
//         ? selectedVariantKey
//           ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//           : objectData[0][1]
//         : commandMap[packageManager];

//     if (textToCopy) {
//       navigator.clipboard.writeText(textToCopy);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const handleDropdownSelect = (selected: string) => {
//     const newVisibleManagers = [...visibleManagers];
//     const newRemainingManagers = [...remainingManagers];

//     const selectedIndex = packageManagers.indexOf(selected);
//     if (selectedIndex === -1) return;

//     const removedItem = newVisibleManagers[3];
//     newVisibleManagers[3] = selected;

//     if (removedItem) {
//       const removedIndex = newRemainingManagers.indexOf(removedItem);
//       if (removedIndex !== -1) {
//         newRemainingManagers.splice(removedIndex, 1);
//       }
//       if (!newRemainingManagers.includes(removedItem)) {
//         newRemainingManagers.unshift(removedItem);
//       }
//     }

//     setPackageManager(selected);
//     setVisibleManagers(newVisibleManagers.slice(0, 4));
//     setRemainingManagers(newRemainingManagers);
//     setSelectedVariantKey(null);
//     setSelectedElement(selectedIndex);
//   };

//   useEffect(() => {
//     const selectedIndex = packageManagers.indexOf(packageManager);
//     setSelectedElement(selectedIndex);
//   }, [packageManager]);

//   const highlightedCodeStyle: React.CSSProperties = {
//     overflowX: "auto",
//     borderRadius: "0.375rem",
//     padding: "0.5rem 1rem",
//     fontFamily: "monospace",
//     fontSize: "0.875rem",
//     lineHeight: "1.5",
//     backgroundColor: theme === "dark" ? "#121212" : "#2e3440",
//   };

//   const defaultCodeStyle: React.CSSProperties = {
//     borderRadius: "0.375rem",
//     border: "1px solid #E5E7EB",
//     backgroundColor: "white",
//     padding: "0.5rem 1rem",
//     fontFamily: "monospace",
//     color: "#374151",
//     overflowX: "auto",
//     fontSize: "0.875rem",
//     lineHeight: "1.5",
//     ...(theme === "dark" && {
//       backgroundColor: "#111827",
//       color: "#D1D5DB",
//       borderColor: "#4B5563",
//     }),
//   };

//   const handleRun = () => {
//     dispatch(getOperations(selectedUrl));
//   };

//   return (
//     <div className={cn("flex items-center justify-center w-full", className)}>
//       <div className="w-full space-y-2">
//         {showMultiplePackageOptions && (
//           <div className="relative w-full">
//             <div className="inline-flex overflow-hidden rounded-md border border-border text-xs w-full items-center justify-between py-2">
//               {visibleManagers.map((pm, index) => (
//                 <div key={pm} className="flex items-center">
//                   {index > 0 && (
//                     <div className="h-4 w-px bg-border" aria-hidden="true" />
//                   )}
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className={cn(
//                       "relative cursor-pointer rounded-none bg-background px-2 py-1 hover:bg-background",
//                       packageManager === pm
//                         ? "text-primary"
//                         : "text-muted-foreground"
//                     )}
//                     onClick={() => setPackageManager(pm)}
//                   >
//                     {pm}
//                     {packageManager === pm && (
//                       <motion.div
//                         className="absolute inset-x-0 bottom-[1px] mx-auto h-0.5 w-[90%] bg-primary"
//                         layoutId="activeTab"
//                         transition={{
//                           type: "spring",
//                           stiffness: 500,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </Button>
//                 </div>
//               ))}
//               <div className="pr-4 flex items-center justify-center">
//                 {remainingManagers.length > 0 && (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <ChevronDown className="h-5 w-5" />
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       {remainingManagers.map((pm) => (
//                         <DropdownMenuItem
//                           key={pm}
//                           onClick={() => handleDropdownSelect(pm)}
//                           className={cn(
//                             packageManager === pm ? "text-primary" : "",
//                             "cursor-pointer"
//                           )}
//                         >
//                           {pm}
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="relative flex flex-col">
//           {objectData.length > 1 && (
//             <div className="ml-5 my-3">
//               <Select onValueChange={(val) => setSelectedVariantKey(val)}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder={objectData[0][0]} />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {objectData.map(([key]) => (
//                     <SelectItem key={key} value={key}>
//                       {key}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           )}

//           <div className="min-w-[300px] grow font-mono px-5 overflow-x-auto">
//             {highlightedCode ? (
//               <div
//                 style={highlightedCodeStyle}
//                 dangerouslySetInnerHTML={{ __html: highlightedCode }}
//               />
//             ) : (
//               <pre style={defaultCodeStyle}>{commandMap[packageManager]}</pre>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <Button
//             variant="outline"
//             size="icon"
//             className="relative ml-2 rounded-md"
//             onClick={copyToClipboard}
//             aria-label={copied ? "Copied" : "Copy to clipboard"}
//           >
//             <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
//             <Copy
//               className={`h-4 w-4 transition-all duration-300 ${
//                 copied ? "scale-0" : "scale-100"
//               }`}
//             />
//             <Check
//               className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
//                 copied ? "scale-100" : "scale-0"
//               }`}
//             />
//           </Button>
//           <Button
//             onClick={() => {
//               console.log("clicked");

//               handleRun();
//             }}
//           >
//             Run code
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Check, ChevronDown, Copy } from "lucide-react";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { HTMLAttributes, useEffect, useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { usePathname } from "next/navigation";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useDispatch, useSelector } from "react-redux";

// // import { RootState } from "@/lib/store"; // Make sure this is your root reducer type
// import { commandMapArray } from "@/app/api-guide/_components/commandMapData";
// import { getOperations } from "@/lib/features/operationSlice";
// import { AppDispatch } from "@/lib/store";

// interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
//   showMultiplePackageOptions?: boolean;
//   codeLanguage: string;
//   lightTheme: string;
//   darkTheme: string;
//   commandMap: Record<string, string>;
//   className?: string;
// }

// export function ScriptCopyBtn({
//   showMultiplePackageOptions = true,
//   codeLanguage,
//   lightTheme,
//   darkTheme,
//   commandMap,
//   className,
// }: ScriptCopyBtnProps) {
//   const packageManagers = Object.keys(commandMap);
//   const [visibleManagers, setVisibleManagers] = useState<string[]>(
//     packageManagers.slice(0, 4)
//   );
//   const [remainingManagers, setRemainingManagers] = useState<string[]>(
//     packageManagers.slice(4)
//   );
//   const [packageManager, setPackageManager] = useState<string>(
//     visibleManagers[0]
//   );
//   const [copied, setCopied] = useState<boolean>(false);
//   const [highlightedCode, setHighlightedCode] = useState<string>("");
//   const { theme } = useTheme();
//   const path = usePathname();
//   const [selectedElement, setSelectedElement] = useState<number>(0);
//   const [selectedVariantKey, setSelectedVariantKey] = useState<string | null>(
//     null
//   );
//   const [objectData, setObjectData] = useState<[string, string][]>([]);
//   const dispatch = useDispatch<AppDispatch>();

//   const selectedUrl = useSelector((state: any) => state.api.selectedUrl);

//   useEffect(() => {
//     const splitPath = path.split("/")[2];
//     if (!splitPath || !commandMapArray[splitPath]) return;

//     const entries = Object.entries(commandMapArray[splitPath]);
//     const selectedEntry = entries[selectedElement];

//     if (selectedEntry) {
//       const [key, value] = selectedEntry;
//       if (typeof value === "object" && value !== null) {
//         const innerEntries = Object.entries(value).filter(
//           ([, val]) => typeof val === "string"
//         ) as [string, string][];
//         setObjectData(innerEntries);
//       } else if (typeof value === "string") {
//         setObjectData([[key, value]]);
//       }
//       setSelectedVariantKey(null);
//     } else {
//       setObjectData([]);
//       console.warn("Selected entry is undefined. Check selectedElement index.");
//     }
//   }, [path, selectedElement]);

//   const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${selectedUrl}`;

//   useEffect(() => {
//     async function loadHighlightedCode() {
//       try {
//         const { codeToHtml } = await import("shiki");
//         let valueToHighlight: string | undefined;

//         if (objectData.length > 0) {
//           valueToHighlight = selectedVariantKey
//             ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//             : objectData[0][1];
//         } else {
//           valueToHighlight = commandMap[packageManager];
//         }

//         valueToHighlight = valueToHighlight?.replace(
//           "https://api.freeapi.app/api/v1/public/quotes/quote",
//           currentUrl
//         );

//         if (valueToHighlight) {
//           const highlighted = await codeToHtml(valueToHighlight, {
//             lang: codeLanguage,
//             themes: {
//               light: lightTheme,
//               dark: darkTheme,
//             },
//             defaultColor: theme === "dark" ? "dark" : "light",
//           });
//           setHighlightedCode(highlighted);
//         } else {
//           setHighlightedCode(`<pre>${commandMap[packageManager]}</pre>`);
//         }
//       } catch (error) {
//         console.error("Error highlighting code:", error);
//         setHighlightedCode(`<pre>${commandMap[packageManager]}</pre>`);
//       }
//     }

//     loadHighlightedCode();
//   }, [
//     packageManager,
//     codeLanguage,
//     lightTheme,
//     darkTheme,
//     theme,
//     commandMap,
//     selectedVariantKey,
//     objectData,
//   ]);

//   const copyToClipboard = () => {
//     const textToCopy =
//       objectData.length > 0
//         ? selectedVariantKey
//           ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//           : objectData[0][1]
//         : commandMap[packageManager];

//     if (textToCopy) {
//       navigator.clipboard.writeText(textToCopy);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const handleDropdownSelect = (selected: string) => {
//     const newVisibleManagers = [...visibleManagers];
//     const newRemainingManagers = [...remainingManagers];

//     const selectedIndex = packageManagers.indexOf(selected);
//     if (selectedIndex === -1) return;

//     const removedItem = newVisibleManagers[3];
//     newVisibleManagers[3] = selected;

//     if (removedItem) {
//       const removedIndex = newRemainingManagers.indexOf(removedItem);
//       if (removedIndex !== -1) {
//         newRemainingManagers.splice(removedIndex, 1);
//       }
//       if (!newRemainingManagers.includes(removedItem)) {
//         newRemainingManagers.unshift(removedItem);
//       }
//     }

//     setPackageManager(selected);
//     setVisibleManagers(newVisibleManagers.slice(0, 4));
//     setRemainingManagers(newRemainingManagers);
//     setSelectedVariantKey(null);
//     setSelectedElement(selectedIndex);
//   };

//   useEffect(() => {
//     const selectedIndex = packageManagers.indexOf(packageManager);
//     setSelectedElement(selectedIndex);
//   }, [packageManager]);

//   const highlightedCodeStyle: React.CSSProperties = {
//     overflowX: "auto",
//     borderRadius: "0.375rem",
//     padding: "0.5rem 1rem",
//     fontFamily: "monospace",
//     fontSize: "0.875rem",
//     lineHeight: "1.5",
//     backgroundColor: theme === "dark" ? "#121212" : "#2e3440",
//   };

//   const defaultCodeStyle: React.CSSProperties = {
//     borderRadius: "0.375rem",
//     border: "1px solid #E5E7EB",
//     backgroundColor: "white",
//     padding: "0.5rem 1rem",
//     fontFamily: "monospace",
//     color: "#374151",
//     overflowX: "auto",
//     fontSize: "0.875rem",
//     lineHeight: "1.5",
//     ...(theme === "dark" && {
//       backgroundColor: "#111827",
//       color: "#D1D5DB",
//       borderColor: "#4B5563",
//     }),
//   };

//   const handleRun = () => {
//     dispatch(getOperations(selectedUrl));
//   };

//   return (
//     <div className={cn("flex items-center justify-center w-full", className)}>
//       <div className="w-full space-y-2">
//         {showMultiplePackageOptions && (
//           <div className="relative w-full">
//             <div className="inline-flex overflow-hidden rounded-md border border-border text-xs w-full items-center justify-between py-2">
//               {visibleManagers.map((pm, index) => (
//                 <div key={pm} className="flex items-center">
//                   {index > 0 && (
//                     <div className="h-4 w-px bg-border" aria-hidden="true" />
//                   )}
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className={cn(
//                       "relative cursor-pointer rounded-none bg-background px-2 py-1 hover:bg-background",
//                       packageManager === pm
//                         ? "text-primary"
//                         : "text-muted-foreground"
//                     )}
//                     onClick={() => setPackageManager(pm)}
//                   >
//                     {pm}
//                     {packageManager === pm && (
//                       <motion.div
//                         className="absolute inset-x-0 bottom-[1px] mx-auto h-0.5 w-[90%] bg-primary"
//                         layoutId="activeTab"
//                         transition={{
//                           type: "spring",
//                           stiffness: 500,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </Button>
//                 </div>
//               ))}
//               <div className="pr-4 flex items-center justify-center">
//                 {remainingManagers.length > 0 && (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <ChevronDown className="h-5 w-5" />
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       {remainingManagers.map((pm) => (
//                         <DropdownMenuItem
//                           key={pm}
//                           onClick={() => handleDropdownSelect(pm)}
//                           className={cn(
//                             packageManager === pm ? "text-primary" : "",
//                             "cursor-pointer"
//                           )}
//                         >
//                           {pm}
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="relative flex flex-col">
//           {objectData.length > 1 && (
//             <div className="ml-5 my-3">
//               <Select onValueChange={(val) => setSelectedVariantKey(val)}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder={objectData[0][0]} />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {objectData.map(([key]) => (
//                     <SelectItem key={key} value={key}>
//                       {key}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           )}

//           <div className="min-w-[300px] grow font-mono px-5 overflow-x-auto">
//             {highlightedCode ? (
//               <div
//                 style={highlightedCodeStyle}
//                 dangerouslySetInnerHTML={{ __html: highlightedCode }}
//               />
//             ) : (
//               <pre style={defaultCodeStyle}>{commandMap[packageManager]}</pre>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <Button
//             variant="outline"
//             size="icon"
//             className="relative ml-2 rounded-md"
//             onClick={copyToClipboard}
//             aria-label={copied ? "Copied" : "Copy to clipboard"}
//           >
//             <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
//             <Copy
//               className={`h-4 w-4 transition-all duration-300 ${
//                 copied ? "scale-0" : "scale-100"
//               }`}
//             />
//             <Check
//               className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
//                 copied ? "scale-100" : "scale-0"
//               }`}
//             />
//           </Button>
//           <Button
//             onClick={() => {
//               console.log("clicked");

//               handleRun();
//             }}
//           >
//             Run code
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Check, ChevronDown, Copy } from "lucide-react";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { HTMLAttributes, useEffect, useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { usePathname } from "next/navigation";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useDispatch, useSelector } from "react-redux";
// import { commandMapArray } from "@/app/api-guide/_components/commandMapData";
// import { getOperations } from "@/lib/features/operationSlice";
// import { AppDispatch } from "@/lib/store";

// interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
//   showMultiplePackageOptions?: boolean;
//   codeLanguage: string;
//   lightTheme: string;
//   darkTheme: string;
//   commandMap: Record<string, string>;
//   className?: string;
// }

// export function ScriptCopyBtn({
//   showMultiplePackageOptions = true,
//   codeLanguage,
//   lightTheme,
//   darkTheme,
//   commandMap,
//   className,
// }: ScriptCopyBtnProps) {
//   const dispatch = useDispatch<AppDispatch>();
//   const selectedUrl = useSelector((state: any) => state.api.selectedUrl);
//   const apiId = useSelector((state: any) => state.api.apiId);

//   const splitPath = selectedUrl?.split("/");
//   console.log("splitPath", splitPath);

//   const packageManagers = Object.keys(commandMap);
//   const [visibleManagers, setVisibleManagers] = useState<string[]>(
//     packageManagers.slice(0, 4)
//   );
//   const [remainingManagers, setRemainingManagers] = useState<string[]>(
//     packageManagers.slice(4)
//   );
//   const [packageManager, setPackageManager] = useState<string>(
//     packageManagers[0]
//   );

//   const [copied, setCopied] = useState(false);
//   const [highlightedCode, setHighlightedCode] = useState<string>("");
//   const { theme } = useTheme();
//   const pathname = usePathname();
//   const urlPathname = pathname.split("/")[2];

//   const [selectedVariantKey, setSelectedVariantKey] = useState<string | null>(
//     null
//   );
//   const [objectData, setObjectData] = useState<[string, string][]>([]);

//   const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${selectedUrl}`;
//   // console.log("currentUrl", currentUrl);

//   useEffect(() => {
//     const base = pathname.split("/")[2];
//     const variants = commandMapArray[base];

//     if (!variants) {
//       setObjectData([]);
//       return;
//     }

//     const entries = Object.entries(variants);
//     const entry = entries.find(([key]) => key === packageManager);

//     if (entry) {
//       const [, value] = entry;
//       if (typeof value === "object" && value !== null) {
//         const inner = Object.entries(value).filter(
//           ([_, val]) => typeof val === "string"
//         );
//         setObjectData(inner as [string, string][]);
//       } else if (typeof value === "string") {
//         setObjectData([[entry[0], value]]);
//       }
//     } else {
//       setObjectData([]);
//     }

//     setSelectedVariantKey(null);
//   }, [pathname, packageManager]);

//   // Load Shiki-highlighted code block
//   useEffect(() => {
//     const loadHighlightedCode = async () => {
//       try {
//         const { codeToHtml } = await import("shiki");

//         let rawCode: string | undefined =
//           objectData.length > 0
//             ? selectedVariantKey
//               ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//               : objectData[0][1]
//             : commandMap[packageManager];

//         rawCode = rawCode?.replace(
//           "https://api.freeapi.app/api/v1/public/quotes/quote",
//           selectedUrl?.includes("/:id")
//             ? currentUrl.replace(/\/:id$/, "")
//             : currentUrl
//         );

//         if (!rawCode) return;

//         const highlighted = await codeToHtml(rawCode, {
//           lang: codeLanguage,
//           themes: { light: lightTheme, dark: darkTheme },
//           defaultColor: theme === "dark" ? "dark" : "light",
//         });

//         setHighlightedCode(highlighted);
//       } catch (err) {
//         console.error("Shiki highlight error:", err);
//         setHighlightedCode(`<pre>${commandMap[packageManager]}</pre>`);
//       }
//     };

//     loadHighlightedCode();
//   }, [
//     packageManager,
//     objectData,
//     selectedVariantKey,
//     codeLanguage,
//     lightTheme,
//     darkTheme,
//     theme,
//   ]);

//   const handleCopy = () => {
//     const rawCode =
//       objectData.length > 0
//         ? selectedVariantKey
//           ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//           : objectData[0][1]
//         : commandMap[packageManager];

//     if (!rawCode) return;

//     navigator.clipboard.writeText(rawCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleDropdownSelect = (selected: string) => {
//     const selectedIndex = packageManagers.indexOf(selected);
//     const updatedVisible = [...visibleManagers];
//     const updatedRemaining = [...remainingManagers];

//     const removed = updatedVisible[3];
//     updatedVisible[3] = selected;

//     if (removed) {
//       const idx = updatedRemaining.indexOf(removed);
//       if (idx !== -1) updatedRemaining.splice(idx, 1);
//       updatedRemaining.unshift(removed);
//     }

//     setPackageManager(selected);
//     setVisibleManagers(updatedVisible.slice(0, 4));
//     setRemainingManagers(updatedRemaining);
//     setSelectedVariantKey(null);
//   };

//   const handleRun = () => {
//     if (urlPathname === "getById") {
//       // console.log("Running getById operation");
//       const url = selectedUrl?.includes("/:id")
//         ? currentUrl.replace(/\/:id$/, "")
//         : "";
//       const urlName = `${url}/${apiId}`;
//       console.log("URL for getById:", urlName);

//       // TODO: Handle specific case for getById
//     } else if (urlPathname === "getAll") {
//       dispatch(getOperations(selectedUrl));
//     } else if (urlPathname === "create") {
//       console.log("Running create operation");

//       // TODO: Handle specific case for create
//     } else if (urlPathname === "update") {
//       const urlName = `${currentUrl}/${apiId}`;
//       console.log("URL for update:", urlName);
//       // TODO: Handle specific case for update
//     } else if (urlPathname === "delete") {
//       const urlName = `${currentUrl}/${apiId}`;
//       console.log("URL for delete:", urlName);

//       // TODO: Handle specific case for delete
//     }
//   };

//   const codeContainerStyle: React.CSSProperties = {
//     overflowX: "auto",
//     borderRadius: "0.375rem",
//     padding: "0.5rem 1rem",
//     fontFamily: "monospace",
//     fontSize: "0.875rem",
//     lineHeight: "1.5",
//     backgroundColor: theme === "dark" ? "#121212" : "#2e3440",
//   };

//   return (
//     <div className={cn("flex items-center justify-center w-full", className)}>
//       <div className="w-full space-y-2">
//         {showMultiplePackageOptions && (
//           <div className="relative w-full">
//             <div className="inline-flex overflow-hidden border rounded-md text-xs w-full items-center justify-between py-2">
//               {visibleManagers.map((pm, index) => (
//                 <div key={pm} className="flex items-center">
//                   {index > 0 && <div className="h-4 w-px bg-border" />}
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className={cn(
//                       "relative cursor-pointer rounded-none px-2 py-1",
//                       packageManager === pm
//                         ? "text-primary"
//                         : "text-muted-foreground"
//                     )}
//                     onClick={() => setPackageManager(pm)}
//                   >
//                     {pm}
//                     {packageManager === pm && (
//                       <motion.div
//                         className="absolute bottom-[1px] inset-x-0 mx-auto h-0.5 w-[90%] bg-primary"
//                         layoutId="activeTab"
//                         transition={{
//                           type: "spring",
//                           stiffness: 500,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </Button>
//                 </div>
//               ))}
//               <div className="pr-4 flex items-center">
//                 {remainingManagers.length > 0 && (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <ChevronDown className="h-5 w-5 cursor-pointer" />
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       {remainingManagers.map((pm) => (
//                         <DropdownMenuItem
//                           key={pm}
//                           onClick={() => handleDropdownSelect(pm)}
//                           className={cn(
//                             packageManager === pm && "text-primary"
//                           )}
//                         >
//                           {pm}
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="relative flex flex-col">
//           {objectData.length > 1 && (
//             <div className="ml-5 my-3">
//               <Select onValueChange={(val) => setSelectedVariantKey(val)}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder={objectData[0][0]} />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {objectData.map(([key]) => (
//                     <SelectItem key={key} value={key}>
//                       {key}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           )}

//           <div className="min-w-[300px] grow font-mono px-5 overflow-x-auto">
//             {highlightedCode ? (
//               <div
//                 style={codeContainerStyle}
//                 dangerouslySetInnerHTML={{ __html: highlightedCode }}
//               />
//             ) : (
//               <pre style={codeContainerStyle}>{commandMap[packageManager]}</pre>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <Button
//             variant="outline"
//             size="icon"
//             className="ml-2 relative"
//             onClick={handleCopy}
//             aria-label={copied ? "Copied" : "Copy to clipboard"}
//           >
//             <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
//             <Copy
//               className={`h-4 w-4 transition-transform ${
//                 copied ? "scale-0" : "scale-100"
//               }`}
//             />
//             <Check
//               className={`absolute inset-0 h-4 w-4 m-auto transition-transform ${
//                 copied ? "scale-100" : "scale-0"
//               }`}
//             />
//           </Button>
//           <Button onClick={handleRun}>Run code</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, HTMLAttributes } from "react";
// import { useTheme } from "next-themes";
// import { usePathname } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Check, ChevronDown, Copy } from "lucide-react";

// import { cn } from "@/lib/utils";
// import {
//   getAllData,
//   getById,
//   getOperations,
// } from "@/lib/features/operationSlice";
// import { AppDispatch } from "@/lib/store";
// import { commandMapArray } from "@/app/api-guide/_components/commandMapData";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import axios from "axios";

// interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
//   showMultiplePackageOptions?: boolean;
//   codeLanguage: string;
//   lightTheme: string;
//   darkTheme: string;
//   commandMap: Record<string, string>;
//   className?: string;
// }

// export function ScriptCopyBtn({
//   showMultiplePackageOptions = true,
//   codeLanguage,
//   lightTheme,
//   darkTheme,
//   commandMap,
//   className,
// }: ScriptCopyBtnProps) {
//   const dispatch = useDispatch<AppDispatch>();
//   const selectedUrl = useSelector((state: any) => state.api.selectedUrl);
//   const apiId = useSelector((state: any) => state.api.apiId);

//   const pathname = usePathname();
//   const urlPathname = pathname.split("/")[2];
//   const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${selectedUrl}`;

//   const pathSegments = pathname.split("/");
//   const actionType = pathSegments[2];

//   const packageManagers = Object.keys(commandMap);
//   const [visibleManagers, setVisibleManagers] = useState<string[]>(
//     packageManagers.slice(0, 4)
//   );
//   const [remainingManagers, setRemainingManagers] = useState<string[]>(
//     packageManagers.slice(4)
//   );
//   const [packageManager, setPackageManager] = useState<string>(
//     packageManagers[0]
//   );
//   const [copied, setCopied] = useState(false);
//   const [highlightedCode, setHighlightedCode] = useState<string>("");
//   const [selectedVariantKey, setSelectedVariantKey] = useState<string | null>(
//     null
//   );
//   const [objectData, setObjectData] = useState<[string, string][]>([]);
//   const { theme } = useTheme();

//   const pageLimit = useSelector((state: any) => state.api.pageLimit);
//   const sizeLimit = useSelector((state: any) => state.api.sizeLimit);

//   // Update variant data based on package manager
//   useEffect(() => {
//     const base = pathname.split("/")[2];
//     const variants = commandMapArray[base];
//     if (!variants) {
//       setObjectData([]);
//       return;
//     }

//     const entry = Object.entries(variants).find(
//       ([key]) => key === packageManager
//     );
//     if (!entry) {
//       setObjectData([]);
//       return;
//     }

//     const [, value] = entry;
//     if (typeof value === "object" && value !== null) {
//       const inner = Object.entries(value).filter(
//         ([, val]) => typeof val === "string"
//       );
//       setObjectData(inner as [string, string][]);
//     } else if (typeof value === "string") {
//       setObjectData([[entry[0], value]]);
//     }

//     setSelectedVariantKey(null);
//   }, [pathname, packageManager]);

//   // Shiki syntax highlight
//   useEffect(() => {
//     const loadHighlightedCode = async () => {
//       try {
//         const { codeToHtml } = await import("shiki");

//         let rawCode =
//           objectData.length > 0
//             ? selectedVariantKey
//               ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//               : objectData[0][1]
//             : commandMap[packageManager];

//         rawCode = rawCode?.replace(
//           "https://api.freeapi.app/api/v1/public/quotes/quote",
//           selectedUrl?.includes("/:id")
//             ? currentUrl.replace(/\/:id$/, "")
//             : currentUrl
//         );

//         if (!rawCode) return;

//         const highlighted = await codeToHtml(rawCode, {
//           lang: codeLanguage,
//           themes: { light: lightTheme, dark: darkTheme },
//           defaultColor: theme === "dark" ? "dark" : "light",
//         });

//         setHighlightedCode(highlighted);
//       } catch (err) {
//         console.error("Shiki highlight error:", err);
//         setHighlightedCode(`<pre>${commandMap[packageManager]}</pre>`);
//       }
//     };

//     loadHighlightedCode();
//   }, [
//     packageManager,
//     objectData,
//     selectedVariantKey,
//     codeLanguage,
//     lightTheme,
//     darkTheme,
//     theme,
//   ]);

//   const handleCopy = () => {
//     const rawCode =
//       objectData.length > 0
//         ? selectedVariantKey
//           ? objectData.find(([key]) => key === selectedVariantKey)?.[1]
//           : objectData[0][1]
//         : commandMap[packageManager];

//     if (!rawCode) return;

//     navigator.clipboard.writeText(rawCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleDropdownSelect = (selected: string) => {
//     const updatedVisible = [...visibleManagers];
//     const updatedRemaining = [...remainingManagers];

//     const removed = updatedVisible[3];
//     updatedVisible[3] = selected;

//     if (removed) {
//       const idx = updatedRemaining.indexOf(removed);
//       if (idx !== -1) updatedRemaining.splice(idx, 1);
//       updatedRemaining.unshift(removed);
//     }

//     setPackageManager(selected);
//     setVisibleManagers(updatedVisible.slice(0, 4));
//     setRemainingManagers(updatedRemaining);
//     setSelectedVariantKey(null);
//   };

//   const handleDelete = async (urlBase: string) => {
//     const res = await axios.delete(`${urlBase}`);
//     if (res.status === 200) {
//       toast("Operation deleted successfully");
//       dispatch(getAllData(`${urlBase}?page=${pageLimit}&size=${sizeLimit}`));
//     }
//   };

//   const handleRun = () => {
//     const urlBase = selectedUrl?.includes("/:id")
//       ? currentUrl.replace(/\/:id$/, "")
//       : currentUrl;

//     console.log("Running operation for URL:", urlBase);

//     switch (urlPathname) {
//       case "getById":
//         console.log("GET by ID:", `${urlBase}/${apiId}`);
//         dispatch(getById(`${urlBase}/${apiId}`));
//         break;
//       case "getAll":
//         console.log("GET all operations for URL:", urlBase);
//         dispatch(getAllData(`${urlBase}?page=${pageLimit}&size=${sizeLimit}`));
//         break;
//       case "create":
//         console.log("CREATE operation");
//         break;
//       case "update":
//         console.log("UPDATE:", `${urlBase}/${apiId}`);
//         break;
//       case "delete":
//         handleDelete(`${urlBase}/${apiId}`);
//         console.log("DELETE:", `${urlBase}/${apiId}`);
//         break;
//     }
//   };

//   const codeContainerStyle: React.CSSProperties = {
//     overflowX: "auto",
//     borderRadius: "0.375rem",
//     padding: "0.5rem 1rem",
//     fontFamily: "monospace",
//     fontSize: "0.875rem",
//     lineHeight: "1.5",
//     backgroundColor: theme === "dark" ? "#121212" : "#2e3440",
//   };

//   return (
//     <div className={cn("flex items-center justify-center w-full", className)}>
//       <div className="w-full space-y-2">
//         {showMultiplePackageOptions && (
//           <div className="relative w-full">
//             <div className="inline-flex overflow-hidden border rounded-md text-xs w-full items-center justify-between py-2">
//               {visibleManagers.map((pm, index) => (
//                 <div key={pm} className="flex items-center">
//                   {index > 0 && <div className="h-4 w-px bg-border" />}
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className={cn(
//                       "relative cursor-pointer rounded-none px-2 py-1",
//                       packageManager === pm
//                         ? "text-primary"
//                         : "text-muted-foreground"
//                     )}
//                     onClick={() => setPackageManager(pm)}
//                   >
//                     {pm}
//                     {packageManager === pm && (
//                       <motion.div
//                         className="absolute bottom-[1px] inset-x-0 mx-auto h-0.5 w-[90%] bg-primary"
//                         layoutId="activeTab"
//                         transition={{
//                           type: "spring",
//                           stiffness: 500,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </Button>
//                 </div>
//               ))}
//               <div className="pr-4 flex items-center">
//                 {remainingManagers.length > 0 && (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <ChevronDown className="h-5 w-5 cursor-pointer" />
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       {remainingManagers.map((pm) => (
//                         <DropdownMenuItem
//                           key={pm}
//                           onClick={() => handleDropdownSelect(pm)}
//                           className={cn(
//                             packageManager === pm && "text-primary"
//                           )}
//                         >
//                           {pm}
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="relative flex flex-col">
//           {objectData.length > 1 && (
//             <div className="ml-5 my-3">
//               <Select onValueChange={(val) => setSelectedVariantKey(val)}>
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder={objectData[0][0]} />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {objectData.map(([key]) => (
//                     <SelectItem key={key} value={key}>
//                       {key}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           )}

//           <div className="min-w-[300px] grow font-mono px-5 overflow-x-auto">
//             {highlightedCode ? (
//               <div
//                 style={codeContainerStyle}
//                 dangerouslySetInnerHTML={{ __html: highlightedCode }}
//               />
//             ) : (
//               <pre style={codeContainerStyle}>{commandMap[packageManager]}</pre>
//             )}
//           </div>
//         </div>

//         {actionType !== "create" && actionType !== "update" && (
//           <div className="flex items-center justify-between">
//             <Button
//               variant="outline"
//               size="icon"
//               className="ml-2 relative"
//               onClick={handleCopy}
//               aria-label={copied ? "Copied" : "Copy to clipboard"}
//             >
//               <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
//               <Copy
//                 className={`h-4 w-4 transition-transform ${
//                   copied ? "scale-0" : "scale-100"
//                 }`}
//               />
//               <Check
//                 className={`absolute inset-0 h-4 w-4 m-auto transition-transform ${
//                   copied ? "scale-100" : "scale-0"
//                 }`}
//               />
//             </Button>
//             <Button onClick={handleRun}>Run code</Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, HTMLAttributes } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Check, ChevronDown, Copy } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { cn } from "@/lib/utils";
import { getAllData, getById } from "@/lib/features/operationSlice";
import { AppDispatch } from "@/lib/store";
import { commandMapArray } from "@/app/api-guide/_components/commandMapData";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
  showMultiplePackageOptions?: boolean;
  codeLanguage: string;
  lightTheme: string;
  darkTheme: string;
  commandMap: Record<string, string>;
  className?: string;
}

export function ScriptCopyBtn({
  showMultiplePackageOptions = true,
  codeLanguage,
  lightTheme,
  darkTheme,
  commandMap,
  className,
}: ScriptCopyBtnProps) {
  const dispatch = useDispatch<AppDispatch>();
  const selectedUrl = useSelector((state: any) => state.api.selectedUrl);
  const apiId = useSelector((state: any) => state.api.apiId);
  const pageLimit = useSelector((state: any) => state.api.pageLimit);
  const sizeLimit = useSelector((state: any) => state.api.sizeLimit);

  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const actionType = pathSegments[2]; // e.g., getAll, getById, create, update
  const urlPathname = pathSegments[2];

  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${selectedUrl}`;

  const packageManagers = Object.keys(commandMap);
  const [visibleManagers, setVisibleManagers] = useState(
    packageManagers.slice(0, 4)
  );
  const [remainingManagers, setRemainingManagers] = useState(
    packageManagers.slice(4)
  );
  const [packageManager, setPackageManager] = useState(packageManagers[0]);
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [selectedVariantKey, setSelectedVariantKey] = useState<string | null>(
    null
  );
  const [objectData, setObjectData] = useState<[string, string][]>([]);

  const { theme } = useTheme();

  // get variant data on change
  useEffect(() => {
    const base = urlPathname;
    const variants = commandMapArray[base];

    if (!variants) {
      setObjectData([]);
      return;
    }

    const entry = Object.entries(variants).find(
      ([key]) => key === packageManager
    );
    if (!entry) {
      setObjectData([]);
      return;
    }

    const [, value] = entry;
    if (typeof value === "object" && value !== null) {
      const inner = Object.entries(value).filter(
        ([, v]) => typeof v === "string"
      );
      setObjectData(inner as [string, string][]);
    } else if (typeof value === "string") {
      setObjectData([[entry[0], value]]);
    }

    setSelectedVariantKey(null);
  }, [urlPathname, packageManager]);

  // highlighting
  useEffect(() => {
    const loadHighlightedCode = async () => {
      try {
        const { codeToHtml } = await import("shiki");

        let rawCode =
          objectData.length > 0
            ? selectedVariantKey
              ? objectData.find(([k]) => k === selectedVariantKey)?.[1]
              : objectData[0][1]
            : commandMap[packageManager];

        rawCode = rawCode?.replace(
          "https://api.freeapi.app/api/v1/public/quotes/quote",
          selectedUrl?.includes("/:id")
            ? currentUrl.replace(/\/:id$/, "")
            : currentUrl
        );

        if (!rawCode) return;

        const highlighted = await codeToHtml(rawCode, {
          lang: codeLanguage,
          themes: { light: lightTheme, dark: darkTheme },
          defaultColor: theme === "dark" ? "dark" : "light",
        });

        setHighlightedCode(highlighted);
      } catch (err) {
        console.error("Shiki highlight error:", err);
        setHighlightedCode(`<pre>${commandMap[packageManager]}</pre>`);
      }
    };
    loadHighlightedCode();
  }, [
    packageManager,
    objectData,
    selectedVariantKey,
    codeLanguage,
    lightTheme,
    darkTheme,
    theme,
  ]);

  const handleCopy = () => {
    const rawCode =
      objectData.length > 0
        ? selectedVariantKey
          ? objectData.find(([k]) => k === selectedVariantKey)?.[1]
          : objectData[0][1]
        : commandMap[packageManager];

    if (!rawCode) return;

    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDropdownSelect = (pm: string) => {
    const updatedVisible = [...visibleManagers];
    const updatedRemaining = [...remainingManagers];

    const removed = updatedVisible[3];
    updatedVisible[3] = pm;

    if (removed) {
      const idx = updatedRemaining.indexOf(removed);
      if (idx !== -1) updatedRemaining.splice(idx, 1);
      updatedRemaining.unshift(removed);
    }

    setPackageManager(pm);
    setVisibleManagers(updatedVisible.slice(0, 4));
    setRemainingManagers(updatedRemaining);
    setSelectedVariantKey(null);
  };

  const handleDelete = async (urlBase: string) => {
    console.log("urlBase in handleDelete", urlBase);

    try {
      const res = await axios.delete(urlBase);
      console.log("Response from API after delete:", res);

      if (res.status === 204) {
        toast("Operation deleted successfully");
        dispatch(getAllData(`${urlBase}?page=${pageLimit}&size=${sizeLimit}`));
      }
    } catch (err) {
      console.error("Delete failed", err);
      toast("Delete operation failed", { type: "error" });
    }
  };

  const handleRun = () => {
    const urlBase = selectedUrl?.includes("/:id")
      ? currentUrl.replace(/\/:id$/, "")
      : currentUrl;

    switch (urlPathname) {
      case "getById":
        dispatch(getById(`${urlBase}/${apiId}`));
        break;
      case "getAll":
        dispatch(getAllData(`${urlBase}?page=${pageLimit}&size=${sizeLimit}`));
        break;
      case "create":
        console.log("CREATE operation triggered");
        break;
      case "update":
        console.log("UPDATE operation triggered");
        break;
      case "delete":
        handleDelete(`${urlBase}/${apiId}`);
        break;
    }
  };

  const codeContainerStyle: React.CSSProperties = {
    overflowX: "auto",
    borderRadius: "0.375rem",
    padding: "0.5rem 1rem",
    fontFamily: "monospace",
    fontSize: "0.875rem",
    lineHeight: "1.5",
    backgroundColor: theme === "dark" ? "#121212" : "#f5f5f5", // consistent light fallback
  };

  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <div className="w-full space-y-2">
        {showMultiplePackageOptions && (
          <div className="relative w-full">
            <div className="inline-flex overflow-hidden border rounded-md text-xs w-full items-center justify-between py-2">
              {visibleManagers.map((pm, idx) => (
                <div key={pm} className="flex items-center">
                  {idx > 0 && <div className="h-4 w-px bg-border" />}
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "relative rounded-none px-2 py-1",
                      packageManager === pm
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setPackageManager(pm)}
                  >
                    {pm}
                    {packageManager === pm && (
                      <motion.div
                        className="absolute bottom-[1px] inset-x-0 mx-auto h-0.5 w-[90%] bg-primary"
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Button>
                </div>
              ))}
              <div className="pr-4 flex items-center">
                {remainingManagers.length > 0 && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <ChevronDown className="h-5 w-5 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {remainingManagers.map((pm) => (
                        <DropdownMenuItem
                          key={pm}
                          onClick={() => handleDropdownSelect(pm)}
                        >
                          {pm}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="relative flex flex-col">
          {objectData.length > 1 && (
            <div className="ml-5 my-3">
              <Select onValueChange={setSelectedVariantKey}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={objectData[0][0]} />
                </SelectTrigger>
                <SelectContent>
                  {objectData.map(([key]) => (
                    <SelectItem key={key} value={key}>
                      {key}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="min-w-[300px] grow font-mono px-5 overflow-x-auto">
            {highlightedCode ? (
              <div
                style={codeContainerStyle}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            ) : (
              <pre style={codeContainerStyle}>{commandMap[packageManager]}</pre>
            )}
          </div>
        </div>

        {actionType !== "create" && actionType !== "update" && (
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              className="ml-2 relative"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy to clipboard"}
            >
              <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
              <Copy
                className={cn(
                  "h-4 w-4 transition-transform",
                  copied && "scale-0"
                )}
              />
              <Check
                className={cn(
                  "absolute inset-0 h-4 w-4 m-auto transition-transform",
                  copied ? "scale-100" : "scale-0"
                )}
              />
            </Button>
            <Button onClick={handleRun}>Run code</Button>
          </div>
        )}
      </div>
    </div>
  );
}
