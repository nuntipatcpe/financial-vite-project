import * as React from "react";
import Menu from "../../../../public/menu.svg";

import { Link, NavLink } from "react-router-dom";
type AsideProps = {
  open: boolean;
  handleClose: () => void;
};

const Aside: React.FC<any> = ({ open, handleClose }: AsideProps) => {
  // const [toggle, setToggle] = React.useState(open);
  const [active, setActive] = React.useState("");

  const hendleOpen = (str: string) => {
    handleClose();
    setActive(str);
  };

  return (
    <div className={open ? "aside" : "aside hide"}>
      <div className="logo">
        <h2>Aside</h2>
        <img src={Menu} alt="" onClick={() => hendleOpen("")} />
      </div>
      <ul>
        <h3>Market</h3>
        <NavLink
          to="/futures"
          className={active === "Futures" ? "link-menu actice" : "link-menu"}
          onClick={() => hendleOpen("Futures")}
        >
          Futures
        </NavLink>
        <NavLink
          to="/forex"
          className={active === "Forex" ? "link-menu actice" : "link-menu"}
          onClick={() => hendleOpen("Forex")}
        >
          Forex
        </NavLink>
      </ul>
    </div>
  );
};

export default Aside;
