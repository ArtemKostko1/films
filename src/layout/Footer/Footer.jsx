import React from "react";
import { Layout } from "antd";
import "./Footer.styles.scss";

const { Footer: AppFooter } = Layout;

const Footer = () => {
  return (
   <AppFooter className="footer-wrapper">
    <div className="footer"></div>
   </AppFooter>
  );
};

export default Footer;
