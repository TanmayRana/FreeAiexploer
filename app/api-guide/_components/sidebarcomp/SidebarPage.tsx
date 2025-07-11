// // import { AppSidebar } from "@/components/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// // import { AppSidebar } from "../../_sidebarComponts/AppSidebar";
// import ApiBody from "../ApiBody";
// import ApiRequest from "../ApiRequest";
// import { AppSidebar } from "../../_sidebarComponts/AppSidebar";
// import { ModeToggle } from "@/components/ModeToggle";
// // import { AppSidebar } from "./AppSidebar";

// export default function SidebarPage() {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>
//         <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
//           <SidebarTrigger className="-ml-1" />
//           <Separator orientation="vertical" className="mr-2 h-4" />
//           <Breadcrumb>
//             <div className="flex items-center justify-between">
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="#">
//                     Building Your Application
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>

//               <ModeToggle />
//             </div>
//           </Breadcrumb>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4">
//           <div>
//             <ApiBody />
//           </div>

//           <div className="border ">
//             <ApiRequest />
//           </div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { AppSidebar } from "../../_sidebarComponts/AppSidebar";
import { ModeToggle } from "@/components/ModeToggle";
import ApiBody from "../ApiBody";
import ApiRequest from "../ApiRequest";
import { AppSidebar } from "./AppSidebar";

export default function SidebarPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <ModeToggle />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div>
            <ApiBody />
          </div>
          {/* <div className="border">
            <ApiRequest />
          </div> */}
          {/* <div className="border max-h-[400px] overflow-y-auto overflow-x-auto rounded-md p-4 w-full"> */}
          <div>
            <ApiRequest />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
