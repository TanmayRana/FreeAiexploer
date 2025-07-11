// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     // <DropdownMenu>
//     //   <DropdownMenuTrigger asChild>
//     //     <Button variant="outline" size="icon">
//     //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//     //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//     //       <span className="sr-only">Toggle theme</span>
//     //     </Button>
//     //   </DropdownMenuTrigger>
//     //   <DropdownMenuContent align="end">
//     //     <DropdownMenuItem onClick={() => setTheme("light")}>
//     //       Light
//     //     </DropdownMenuItem>
//     //     <DropdownMenuItem onClick={() => setTheme("dark")}>
//     //       Dark
//     //     </DropdownMenuItem>
//     //   </DropdownMenuContent>
//     // </DropdownMenu>
//     <div className="">
//       <Button variant="outline" size="icon">
//         {theme === "light" ? (
//           <Sun
//             className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
//             onClick={() => toggleTheme()}
//           />
//         ) : (
//           <Moon
//             className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
//             onClick={() => toggleTheme()}
//           />
//         )}

//         <span className="sr-only">Toggle theme</span>
//       </Button>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="cursor-pointer"
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-transform" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-transform" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
