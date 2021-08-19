import React from "react";
import Header from "../Header";

import "../../App.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
