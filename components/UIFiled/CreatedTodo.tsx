// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// import { z } from "zod";
// import { v4 as uuidv4 } from "uuid";
// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import axios from "axios";

// // ✅ Update the schema to use `todo`
// const FormSchema = z.object({
//   todo: z.string().min(2, {
//     message: "Todo must be at least 2 characters.",
//   }),
// });

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export function CreatedTodo() {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       todo: "",
//     },
//   });

//   console.log("id", uuidv4());

//   async function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast("Todo Submitted", {
//       description: (
//         <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });

//     console.log("Submitted Data:", data);

//     const todoData = {
//       todo: data.todo,
//       userId: randomInt(1, 1000),
//       completed: false,
//     };

//     console.log("Todo Data:", todoData);

//     const res = await axios.post(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
//       todoData
//     );

//     if (res.status === 201) {
//       toast("Todo Created successfully");
//     }

//     // console.log("Response from API:", res.data);
//     console.log("Response from API:", res);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="todo"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Todo</FormLabel>
//               <FormControl>
//                 {/* ✅ Attach field to Textarea */}
//                 <Textarea placeholder="Write your task..." {...field} />
//               </FormControl>
//               <FormDescription>
//                 Enter a task you want to add to your todo list.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { v4 as uuidv4 } from "uuid";
// import { toast } from "sonner"; // Ensure `toast` is properly imported

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import axios from "axios";

// // ✅ Update the schema to use `todo`
// const FormSchema = z.object({
//   todo: z.string().min(2, {
//     message: "Todo must be at least 2 characters.",
//   }),
// });

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export function CreatedTodo() {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       todo: "",
//     },
//   });

//   async function onSubmit(data) {
//     toast("Todo Submitted", {
//       description: (
//         <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });

//     console.log("Submitted Data:", data);

//     const todoData = {
//       todo: data.todo,
//       userId: randomInt(1, 1000),
//       completed: false,
//     };

//     console.log("Todo Data:", todoData);

//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
//         todoData
//       );

//       if (res.status === 201) {
//         toast("Todo Created successfully");
//       }

//       // Uncomment the line below if you want to log the response data
//       // console.log("Response from API:", res.data);
//       console.log("Response from API:", res);
//     } catch (error) {
//       console.error("Error creating todo:", error);
//       toast("Error creating todo", { type: "error" });
//     }
//   }

//   return (
//     <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
//       <FormField
//         control={form.control}
//         name="todo"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Todo</FormLabel>
//             <FormControl>
//               {/* ✅ Attach field to Textarea */}
//               <Textarea placeholder="Write your task..." {...field} />
//             </FormControl>
//             <FormDescription>
//               Enter a task you want to add to your todo list.
//             </FormDescription>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       <Button type="submit">Submit</Button>
//     </Form>
//   );
// }

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { toast } from "sonner";
// import axios from "axios";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const FormSchema = z.object({
//   todo: z.string().min(2, {
//     message: "Todo must be at least 2 characters.",
//   }),
// });

// function randomInt(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export function CreatedTodo() {
//   const apiId = useSelector((state: any) => state.api.apiId);
//   const [todo, setTodo] = useState();

//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       todo: "",
//     },
//   });

//   async function onSubmit(data: { todo: string }) {
//     const todoData = {
//       todo: data.todo,
//       userId: randomInt(1, 1000),
//       completed: false,
//     };

//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
//         todoData
//       );

//       if (res.status === 201) {
//         toast("Todo Created successfully");
//         form.reset();
//       }
//     } catch (error) {
//       console.error("Error creating todo:", error);
//       toast("Error creating todo", { type: "error" });
//     }
//   }

//   useEffect(() => {
//     const getTodobyId = async () => {
//       const res = await axios.get(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${apiId}`
//       );
//       console.log("res", res.data);
//       setTodo(res.data);
//     };
//     getTodobyId();
//   }, []);

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="todo"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Todo</FormLabel>
//               <FormControl>
//                 {/* ✅ Attach field to Textarea */}
//                 <Textarea placeholder="Write your task..." {...field} />
//               </FormControl>
//               <FormDescription>
//                 Enter a task you want to add to your todo list.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { toast } from "sonner";
// import axios from "axios";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { useEffect } from "react"; // Removed useState for `todo` as react-hook-form manages it
// import { useSelector } from "react-redux";

// // Define the shape of a Todo item, useful for type safety
// interface TodoItem {
//   id?: number; // Optional as it might not exist for new todos
//   todo: string;
//   userId: number;
//   completed: boolean;
// }

// const FormSchema = z.object({
//   todo: z.string().min(2, {
//     message: "Todo must be at least 2 characters.",
//   }),
// });

// function randomInt(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export function ManageTodoForm() {
//   const apiId = useSelector((state: any) => state.api.apiId);
//   const todoIdToManage = apiId ? Number(apiId) : null;

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       todo: "",
//     },
//   });

//   const { reset } = form;

//   useEffect(() => {
//     const getTodoById = async () => {
//       if (todoIdToManage) {
//         try {
//           const res = await axios.get<TodoItem>(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${todoIdToManage}`
//           );
//           console.log("Fetched todo for update:", res.data);

//           reset({
//             todo: res.data.todo,
//           });
//           toast(`Editing Todo ID: ${todoIdToManage}`, { type: "info" });
//         } catch (error) {
//           console.error(
//             `Error fetching todo with ID ${todoIdToManage}:`,
//             error
//           );
//           toast(`Error fetching todo ID ${todoIdToManage}`, { type: "error" });
//         }
//       } else {
//         reset({ todo: "" });
//       }
//     };

//     getTodoById();
//   }, [todoIdToManage, reset]);

//   async function onSubmit(data: { todo: string }) {
//     if (todoIdToManage) {
//       const updatedTodoData = {
//         todo: data.todo,
//       };

//       try {
//         const res = await axios.put(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${todoIdToManage}`,
//           updatedTodoData
//         );

//         if (res.status === 200) {
//           toast("Todo updated successfully");
//         }
//       } catch (error) {
//         console.error(`Error updating todo with ID ${todoIdToManage}:`, error);
//         toast(`Error updating todo ID ${todoIdToManage}`, { type: "error" });
//       }
//     } else {
//       const newTodoData: TodoItem = {
//         todo: data.todo,
//         userId: randomInt(1, 1000),
//         completed: false,
//       };

//       try {
//         const res = await axios.post(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
//           newTodoData
//         );

//         if (res.status === 201) {
//           toast("Todo created successfully");
//           form.reset();
//         }
//       } catch (error) {
//         console.error("Error creating todo:", error);
//         toast("Error creating todo", { type: "error" });
//       }
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="todo"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Todo</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Write your task..."
//                   {...field}
//                   key={todoIdToManage || "new-todo"}
//                 />
//               </FormControl>
//               <FormDescription>
//                 {todoIdToManage
//                   ? "Edit your existing task."
//                   : "Enter a task you want to add to your todo list."}
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">
//           {todoIdToManage ? "Update Todo" : "Create Todo"}
//         </Button>
//       </form>
//     </Form>
//   );
// }

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { toast } from "sonner";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { usePathname } from "next/navigation";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";

// interface TodoItem {
//   id?: number;
//   todo: string;
//   userId: number;
//   completed: boolean;
// }

// const FormSchema = z.object({
//   todo: z.string().min(2, {
//     message: "Todo must be at least 2 characters.",
//   }),
// });

// function randomInt(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export function ManageTodoForm() {
//   const apiId = useSelector((state: any) => state.api.apiId);
//   const todoIdToManage = apiId ? Number(apiId) : null;

//   const [existingTodo, setExistingTodo] = useState<TodoItem | null>(null);

//   const pathname = usePathname();
//   const pathSegments = pathname.split("/");
//   const actionType = pathSegments[2]; // e.g., "create" or "update"
//   const isUpdating = actionType === "update";

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       todo: "",
//     },
//   });

//   // const { reset } = form;

//   useEffect(() => {
//     const fetchTodoIfNeeded = async () => {
//       if (isUpdating && todoIdToManage) {
//         try {
//           const res = await axios.get<TodoItem>(
//             `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${todoIdToManage}`
//           );
//           // reset({ todo: res.data.todo });
//           setExistingTodo(res.data);
//           toast(`Editing Todo ID: ${todoIdToManage}`, { type: "info" });
//         } catch (error) {
//           console.error("Error fetching todo:", error);
//           toast(`Error fetching todo ID ${todoIdToManage}`, { type: "error" });
//         }
//       } else {
//         reset({ todo: "" });
//       }
//     };

//     fetchTodoIfNeeded();
//   }, [todoIdToManage, isUpdating, reset]);

//   console.log("Existing todo:", existingTodo);

//   const onSubmit = async (data: { todo: string }) => {
//     try {
//       if (isUpdating && todoIdToManage) {
//         const updatedTodoData = {
//           todo: data.todo,
//           completed: existingTodo?.completed,
//           userId: existingTodo?.userId,
//         };
//         const res = await axios.put(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${todoIdToManage}`,
//           updatedTodoData
//         );

//         if (res.status === 200) {
//           toast("Todo updated successfully");
//         }
//       } else {
//         const newTodo: TodoItem = {
//           todo: data.todo,
//           userId: randomInt(1, 1000),
//           completed: false,
//         };

//         const res = await axios.post(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
//           newTodo
//         );

//         if (res.status === 201) {
//           toast("Todo created successfully");
//           form.reset();
//         }
//       }
//     } catch (error) {
//       console.error("Error submitting todo:", error);
//       toast("Something went wrong", { type: "error" });
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="todo"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Todo</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Write your task..."
//                   {...field}
//                   key={todoIdToManage || "new-todo"}
//                 />
//               </FormControl>
//               <FormDescription>
//                 {isUpdating
//                   ? "Edit your existing task."
//                   : "Enter a task you want to add to your todo list."}
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">
//           {isUpdating ? "Update Todo" : "Create Todo"}
//         </Button>
//       </form>
//     </Form>
//   );
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface TodoItem {
  id?: number;
  todo: string;
  userId: number;
  completed: boolean;
}

const FormSchema = z.object({
  todo: z.string().min(2, {
    message: "Todo must be at least 2 characters.",
  }),
});

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function ManageTodoForm() {
  const apiId = useSelector((state: any) => state.api.apiId);
  const todoIdToManage = apiId ? Number(apiId) : null;

  const [existingTodo, setExistingTodo] = useState<TodoItem | null>(null);

  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const actionType = pathSegments[2]; // e.g., "create" or "update"
  const isUpdating = actionType === "update";

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      todo: "",
    },
  });

  const { reset } = form;

  useEffect(() => {
    const fetchTodoIfNeeded = async () => {
      if (isUpdating && todoIdToManage) {
        try {
          const res = await axios.get<TodoItem>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${todoIdToManage}`
          );
          setExistingTodo(res.data);
          reset({ todo: res.data.todo });
        } catch (error) {
          console.error("Error fetching todo:", error);
          toast(`Error fetching todo ID ${todoIdToManage}`, { type: "error" });
        }
      } else {
        setExistingTodo(null);
        reset({ todo: "" });
      }
    };

    fetchTodoIfNeeded();
  }, [todoIdToManage, isUpdating, reset]);

  const onSubmit = async (data: { todo: string }) => {
    try {
      if (isUpdating && todoIdToManage) {
        const updatedTodoData = {
          todo: data.todo,
          completed: existingTodo?.completed ?? false,
          userId: existingTodo?.userId ?? randomInt(1, 1000),
        };
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${todoIdToManage}`,
          updatedTodoData
        );

        if (res.status === 200) {
          toast("Todo updated successfully");
        }
      } else {
        const newTodo: TodoItem = {
          todo: data.todo,
          userId: randomInt(1, 1000),
          completed: false,
        };

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
          newTodo
        );
        console.log("Response from API:", res);

        if (res.status === 201) {
          toast("Todo created successfully");
          form.reset();
        }
      }
    } catch (error) {
      console.error("Error submitting todo:", error);
      toast("Something went wrong", { type: "error" });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full space-y-6  max-w-3xl mx-auto"
      >
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel> </FormLabel> */}
              <FormControl>
                <Textarea
                  placeholder="Write your task..."
                  {...field}
                  key={todoIdToManage || "new-todo"}
                />
              </FormControl>
              <FormDescription>
                {isUpdating
                  ? "Edit your existing task."
                  : "Enter a task you want to add to your todo list."}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isUpdating ? "Update Todo" : "Create Todo"}
        </Button>
      </form>
    </Form>
  );
}
