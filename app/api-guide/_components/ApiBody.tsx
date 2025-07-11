/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { setApiId, setPageLimit, setSizeLimit } from "@/lib/features/apiSlice";
import { usePathname } from "next/navigation";
import { ManageTodoForm } from "@/components/UIFiled/CreatedTodo";

const ApiBody = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  const actionType = pathSegments[2];
  const resourceName = pathSegments[3] || "";

  // console.log("Action Type:", actionType);
  // console.log("Resource Name:", resourceName);

  // Redux state selectors
  const selectedUrl = useSelector((state: any) => state.api.selectedUrl);
  const requestMethod = useSelector((state: any) => state.api.requestMethod);
  const apiId = useSelector((state: any) => state.api.apiId);
  const pageLimit = useSelector((state: any) => state.api.pageLimit);
  const sizeLimit = useSelector((state: any) => state.api.sizeLimit);

  // Local state
  const [inputValue, setInputValue] = useState(apiId?.toString() || "");
  const [page, setPage] = useState(pageLimit.toString());
  const [limit, setLimit] = useState(sizeLimit.toString());

  useEffect(() => {
    setPage(pageLimit.toString());
    setLimit(sizeLimit.toString());
  }, [pageLimit, sizeLimit]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const currentUrl = useMemo(
    () => `${baseUrl}${selectedUrl}`,
    [baseUrl, selectedUrl]
  );

  const urlWithId = useMemo(() => {
    if (
      ["getById", "update", "delete"].includes(actionType) &&
      selectedUrl?.includes("/:id") &&
      apiId
    ) {
      return currentUrl.replace(/\/:id$/, `/${apiId}`);
    }
    return currentUrl;
  }, [actionType, selectedUrl, apiId, currentUrl]);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const parsedId = parseInt(value);
    if (!isNaN(parsedId)) {
      dispatch(setApiId(parsedId));
    }
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPage(value);
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      dispatch(setPageLimit(parsedValue));
    }
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLimit(value);
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      dispatch(setSizeLimit(parsedValue));
    }
  };

  // console.log("selectedUrl", selectedUrl);
  // console.log("requestMethod", requestMethod);

  const getMethodBadgeClasses = (method: string) =>
    cn("text-sm font-bold px-3 py-1 rounded-lg", {
      "bg-green-100 text-green-800": method === "GET",
      "bg-blue-100 text-blue-800": method === "POST",
      "bg-yellow-100 text-yellow-800": method === "PUT",
      "bg-red-100 text-red-800": method === "DELETE",
      "bg-gray-100 text-gray-800": !["GET", "POST", "PUT", "DELETE"].includes(
        method
      ),
    });

  const renderPathParams = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Path Parameters</h3>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Product ID</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Enter Product ID"
            value={inputValue}
            onChange={handleIdChange}
            className="w-full"
          />
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            Provide a product ID to perform this operation.
          </p>
        </CardFooter>
      </Card>
    </div>
  );

  const renderQueryParams = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Query Parameters</h3>
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-sm">Page</label>
            <Input
              placeholder="Page Number"
              value={page}
              onChange={handlePageChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Limit</label>
            <Input
              placeholder="Items Per Page"
              value={limit}
              onChange={handleLimitChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            Use these values to control pagination.
          </p>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <div className="px-4 py-6 space-y-8">
      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-semibold">FreeApi</h2>
        <h1 className="text-2xl md:text-3xl font-bold capitalize">
          {actionType.replace(/([a-z])([A-Z])/g, "$1 $2")}{" "}
          {resourceName && resourceName}
        </h1>
      </div>

      {/* Endpoint Info */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className={getMethodBadgeClasses(requestMethod)}>
            {requestMethod}
          </span>
          <span className="text-sm text-muted-foreground break-all">
            {urlWithId}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          This endpoint returns dummy product information.
        </p>
      </div>

      <hr className="border-muted" />

      {["getById", "update", "delete"].includes(actionType) &&
        renderPathParams()}
      {actionType === "getAll" && renderQueryParams()}

      {(actionType === "create" || actionType == "update") &&
        resourceName === "Todos" && <ManageTodoForm />}
    </div>
  );
};

export default ApiBody;
