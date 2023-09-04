import React from "react";
import { Layout, Tooltip } from "antd";
import "./Header.styles.scss";

const { Header: AppBar } = Layout;

const Header = () => {
  return (
    <AppBar className="appBar-wrapper">
      <div className="logo">
        <Tooltip title={"Main page"}>
          <span className="appBar-title">Films</span>
        </Tooltip>
      </div>
    </AppBar>
  );
};

export default Header;
