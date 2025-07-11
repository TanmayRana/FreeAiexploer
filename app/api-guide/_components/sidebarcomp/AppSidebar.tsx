"use client";

import * as React from "react";
// import { ChevronRight, GalleryVerticalEnd } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  // SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// import { VersionSwitcher } from "./VersionSwitcher";
// import { SearchForm } from "./SearchForm";
import { setRequestMethod, setSelectedUrl } from "@/lib/features/apiSlice";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ApiItem {
  name: string;
  method: string;
  url: string;
  urlName?: string;
}

interface ApiGroup {
  title: string;
  url?: string;
  items: ApiItem[];
}

interface SidebarData {
  navMain: ApiGroup[];
}

const data: SidebarData = {
  navMain: [
    {
      title: "Todos APIs",
      items: [
        {
          name: "Get all the Todos",
          method: "GET",
          url: "/api/todos",
          urlName: "getAll/Todos",
        },
        {
          name: "Get a single Todos",
          method: "GET",
          url: "/api/todos/:id",
          urlName: "getById/Todos",
        },
        {
          name: "Create a new Todos",
          method: "POST",
          url: "/api/todos",
          urlName: "create/Todos",
        },
        {
          name: "Update a Todos",
          method: "PUT",
          url: "/api/todos/:id",
          urlName: "update/Todos",
        },
        {
          name: "Delete a Todos",
          method: "DELETE",
          url: "/api/todos/:id",
          urlName: "delete/Todos",
        },
      ],
    },
    {
      title: "Posts APIs",
      items: [
        {
          name: "Get all the Posts",
          method: "GET",
          url: "/api/posts",
          urlName: "getAll/Posts",
        },
        {
          name: "Get a single Post",
          method: "GET",
          url: "/api/posts/:id",
          urlName: "getById/Posts",
        },
        // {
        //   name: "Create a new Post",
        //   method: "POST",
        //   url: "/api/posts",
        //   urlName: "create/Posts",
        // },
        // {
        //   name: "Update a Post",
        //   method: "PUT",
        //   url: "/api/posts/:id",
        //   urlName: "update/Posts",
        // },
        // {
        //   name: "Delete a Post",
        //   method: "DELETE",
        //   url: "/api/posts/:id",
        //   urlName: "delete/Posts",
        // },
      ],
    },
    {
      title: "Comments APIs",
      items: [
        {
          name: "Get all the Comments",
          method: "GET",
          url: "/api/comments",
          urlName: "getAll/Comments",
        },
        {
          name: "Get a single Comment",
          method: "GET",
          url: "/api/comments/:id",
          urlName: "getById/Comments",
        },
        // {
        //   name: "Create a new Comment",
        //   method: "POST",
        //   url: "/api/comments",
        //   urlName: "create/Comments",
        // },
        // {
        //   name: "Update a Comment",
        //   method: "PUT",
        //   url: "/api/comments/:id",
        //   urlName: "update/Comments",
        // },
        // {
        //   name: "Delete a Comment",
        //   method: "DELETE",
        //   url: "/api/comments/:id",
        //   urlName: "delete/Comments",
        // },
      ],
    },
    {
      title: "Products APIs",
      items: [
        {
          name: "Get all the Products",
          method: "GET",
          url: "/api/products",
          urlName: "getAll/Products",
        },
        {
          name: "Get a single Product",
          method: "GET",
          url: "/api/products/:id",
          urlName: "getById/Products",
        },
        // {
        //   name: "Create a new Product",
        //   method: "POST",
        //   url: "/api/products",
        //   urlName: "create/Products",
        // },
        // {
        //   name: "Update a Product",
        //   method: "PUT",
        //   url: "/api/products/:id",
        //   urlName: "update/Products",
        // },
        // {
        //   name: "Delete a Product",
        //   method: "DELETE",
        //   url: "/api/products/:id",
        //   urlName: "delete/Products",
        // },
      ],
    },
    {
      title: "Movies APIs",
      items: [
        {
          name: "Get all the Movies",
          method: "GET",
          url: "/api/movies",
          urlName: "getAll/Movies",
        },
        {
          name: "Get a single Movies",
          method: "GET",
          url: "/api/movies/:id",
          urlName: "getById/Movies",
        },
        // {
        //   name: "Create a new Movies",
        //   method: "POST",
        //   url: "/api/movies",
        //   urlName: "create/Movies",
        // },
        // {
        //   name: "Update a Movies",
        //   method: "PUT",
        //   url: "/api/movies/:id",
        //   urlName: "update/Movies",
        // },
        // {
        //   name: "Delete a Movies",
        //   method: "DELETE",
        //   url: "/api/movies/:id",
        //   urlName: "delete/Movies",
        // },
      ],
    },
    {
      title: "Books APIs",
      items: [
        {
          name: "Get all the Books",
          method: "GET",
          url: "/api/books",
          urlName: "getAll/Books",
        },
        {
          name: "Get a single Books",
          method: "GET",
          url: "/api/books/:id",
          urlName: "getById/Books",
        },
        // {
        //   name: "Create a new Books",
        //   method: "POST",
        //   url: "/api/books",
        //   urlName: "create/Books",
        // },
        // {
        //   name: "Update a Books",
        //   method: "PUT",
        //   url: "/api/books/:id",
        //   urlName: "update/Books",
        // },
        // {
        //   name: "Delete a  Books",
        //   method: "DELETE",
        //   url: "/api/books/:id",
        //   urlName: "delete/Books",
        // },
      ],
    },
    {
      title: "Users APIs",
      items: [
        {
          name: "Get all the Users",
          method: "GET",
          url: "/api/users",
          urlName: "getAll/Users",
        },
        {
          name: "Get a single Users",
          method: "GET",
          url: "/api/users/:id",
          urlName: "getById/Users",
        },
        // {
        //   name: "Create a new Users",
        //   method: "POST",
        //   url: "/api/users",
        //   urlName: "create/Users",
        // },
        // {
        //   name: "Update a Users",
        //   method: "PUT",
        //   url: "/api/users/:id",
        //   urlName: "update/Users",
        // },
        // {
        //   name: "Delete a  Users",
        //   method: "DELETE",
        //   url: "/api/users/:id",
        //   urlName: "delete/Users",
        // },
      ],
    },
    {
      title: "Recipes APIs",
      items: [
        {
          name: "Get all the Recipes",
          method: "GET",
          url: "/api/recipes",
          urlName: "getAll/Recipes",
        },
        {
          name: "Get a single Recipes",
          method: "GET",
          url: "/api/recipes/:id",
          urlName: "getById/Recipes",
        },
        // {
        //   name: "Create a new Recipes",
        //   method: "POST",
        //   url: "/api/recipes",
        //   urlName: "create/Recipes",
        // },
        // {
        //   name: "Update a Recipes",
        //   method: "PUT",
        //   url: "/api/recipes/:id",
        //   urlName: "update/Recipes",
        // },
        // {
        //   name: "Delete a  Recipes",
        //   method: "DELETE",
        //   url: "/api/recipes/:id",
        //   urlName: "delete/Recipes",
        // },
      ],
    },
    {
      title: "Quotes APIs",
      items: [
        {
          name: "Get all the Quotes",
          method: "GET",
          url: "/api/quotes",
          urlName: "getAll/Quotes",
        },
        {
          name: "Get a single Quotes",
          method: "GET",
          url: "/api/quotes/:id",
          urlName: "getById/Quotes",
        },
        // {
        //   name: "Create a new Quotes",
        //   method: "POST",
        //   url: "/api/quotes",
        //   urlName: "create/Quotes",
        // },
        // {
        //   name: "Update a Quotes",
        //   method: "PUT",
        //   url: "/api/quotes/:id",
        //   urlName: "update/Quotes",
        // },
        // {
        //   name: "Delete a  Quotes",
        //   method: "DELETE",
        //   url: "/api/quotes/:id",
        //   urlName: "delete/Quotes",
        // },
      ],
    },
    {
      title: "Pizzas APIs",
      items: [
        {
          name: "Get all the Pizzas",
          method: "GET",
          url: "/api/pizzas",
          urlName: "getAll/Pizzas",
        },
        {
          name: "Get a single Pizzas",
          method: "GET",
          url: "/api/pizzas/:id",
          urlName: "getById/Pizzas",
        },
        // {
        //   name: "Create a new Pizzas",
        //   method: "POST",
        //   url: "/api/pizzas",
        //   urlName: "create/Pizzas",
        // },
        // {
        //   name: "Update a Pizzas",
        //   method: "PUT",
        //   url: "/api/pizzas/:id",
        //   urlName: "update/Pizzas",
        // },
        // {
        //   name: "Delete a  Pizzas",
        //   method: "DELETE",
        //   url: "/api/pizzas/:id",
        //   urlName: "delete/Pizzas",
        // },
      ],
    },
    {
      title: "Desserts APIs",
      items: [
        {
          name: "Get all the Desserts",
          method: "GET",
          url: "/api/desserts",
          urlName: "getAll/Desserts",
        },
        {
          name: "Get a single Desserts",
          method: "GET",
          url: "/api/desserts/:id",
          urlName: "getById/Desserts",
        },
        // {
        //   name: "Create a new Desserts",
        //   method: "POST",
        //   url: "/api/desserts",
        //   urlName: "create/Desserts",
        // },
        // {
        //   name: "Update a Desserts",
        //   method: "PUT",
        //   url: "/api/desserts/:id",
        //   urlName: "update/Desserts",
        // },
        // {
        //   name: "Delete a Desserts",
        //   method: "DELETE",
        //   url: "/api/desserts/:id",
        //   urlName: "delete/Desserts",
        // },
      ],
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const params = useParams() as { apiname?: string; operation?: string };
  // const router = useRouter();
  const dispatch = useDispatch();

  const currentPath = `${params?.apiname ?? ""}/${params?.operation ?? ""}`;
  // console.log("currentPath", currentPath);
  // bg-sidebar-primary text-sidebar-primary-foreground
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <div className="flex items-center gap-2 rounded-lg  px-2 py-1 ">
          <div className="flex size-8 items-center justify-center rounded-md ">
            <Image
              src="/api.png"
              alt="logo"
              width={40}
              height={40}
              className="bg-white"
            />
          </div>
          <h1 className="text-2xl font-bold text-blue-800">FreeAPI</h1>
        </div> */}
        <div className="flex items-center gap-2 rounded-lg px-2 py-1 bg-transparent dark:bg-transparent">
          <div className="flex size-8 items-center justify-center rounded-md bg-white dark:bg-white">
            <Image
              src="/api.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
            {/* <GalleryVerticalEnd className="size-4" /> */}
          </div>
          <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
            FreeAPI
          </h1>
        </div>

        {/* <SearchForm /> */}
      </SidebarHeader>

      <SidebarContent className="gap-0">
        {data.navMain.map((group) => (
          <Collapsible
            key={group.title}
            title={group.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {group.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => {
                      const isActive = item.urlName === currentPath;

                      return (
                        <SidebarMenuItem
                          key={item.urlName ?? item.name}
                          className={cn("px-0 py-1 rounded-lg")}
                        >
                          <Link
                            href={`/api-guide/${item.urlName ?? ""}`}
                            className={cn(
                              "flex justify-between items-center w-full px-4 py-2 rounded-lg hover:bg-gray-700/10 dark:hover:bg-gray-300/20",
                              isActive && "bg-gray-700/10 dark:bg-gray-300/20"
                            )}
                            onClick={() => {
                              dispatch(setSelectedUrl(item.url));
                              dispatch(setRequestMethod(item.method));
                            }}
                          >
                            <span className="text-sm">{item.name}</span>
                            <span
                              className={cn(
                                "ml-4 text-xs font-semibold px-2 py-0.5 rounded",
                                {
                                  "bg-green-100 text-green-800":
                                    item.method === "GET",
                                  "bg-blue-100 text-blue-800":
                                    item.method === "POST",
                                  "bg-yellow-100 text-yellow-800":
                                    item.method === "PUT",
                                  "bg-red-100 text-red-800":
                                    item.method === "DELETE",
                                  "bg-gray-100 text-gray-800": ![
                                    "GET",
                                    "POST",
                                    "PUT",
                                    "DELETE",
                                  ].includes(item.method),
                                }
                              )}
                            >
                              {item.method || "N/A"}
                            </span>
                          </Link>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
