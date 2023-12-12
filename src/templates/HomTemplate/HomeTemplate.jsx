import React from "react";
import HeaderHomeTemplate from "./layoutHomeTemplate/HeaderHomeTemplate";
import { Outlet } from "react-router-dom";
import FooterHomeTemplate from "./layoutHomeTemplate/FooterHomeTemplate";

export default function HomeTemplate(props) {
  return (
    <div>
      <HeaderHomeTemplate />
      <Outlet />
      <FooterHomeTemplate />
    </div>
  );
}
