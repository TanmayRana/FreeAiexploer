/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
// import Header from "../../_components/Header";
// import Body from "../../_components/Body";
import { useParams } from "next/navigation";
import SidebarPage from "../../_components/sidebarcomp/SidebarPage";

const ApiCalledPage: React.FC = () => {
  // ✅ Type the `params` object properly
  const params = useParams() as { operation?: string };

  // ✅ Use typed state
  const [paramsName, setParamsName] = useState<string>("");

  useEffect(() => {
    if (params?.operation) {
      // console.log("Operation:", params.operation);
      setParamsName(params.operation);
    } else {
      console.warn("Operation parameter is missing.");
      setParamsName(""); // optional fallback
    }
  }, [params]);

  return (
    <div>
      {/* <Header /> */}
      {/* <Body paramsName={paramsName} /> */}
      <SidebarPage />
    </div>
  );
};

export default ApiCalledPage;
