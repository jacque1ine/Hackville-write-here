import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header"><Link href={"/"}><img src="/logo.svg" className="header-logo"></img></Link></div>
    </div>
  );
};

export default Header;
