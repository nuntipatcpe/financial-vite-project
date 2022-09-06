import * as React from "react";
import Menu2 from "../../../../public/menu2.svg";

type HeaderProps = {
  //
  open: boolean;
  handleOpen: () => void;
};

const Header: React.FC<any> = ({ open, handleOpen }: HeaderProps) => {
  const hendleOpen = () => {
    handleOpen();
  };
  return (
    // <div className={open ? "heard" : "heard hide"}>
    <div className={"heard"}>
      <img
        className={!open ? "active" : ""}
        src={Menu2}
        alt=""
        onClick={hendleOpen}
      />
      <h2>Financial Management</h2>
    </div>
  );
};

export default Header;
