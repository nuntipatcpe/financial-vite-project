import * as React from "react";
import Menu from "../../../../public/menu.svg";

type AsideProps = {
  open: boolean;
  handleClose: () => void;
};

const Aside: React.FC<any> = ({ open, handleClose }: AsideProps) => {
  // const [toggle, setToggle] = React.useState(open);
  const [active, setActive] = React.useState("");

  const hendleOpen = () => {
    handleClose();
  };

  return (
    <div className={open ? "aside" : "aside hide"}>
      <div className="logo">
        <h2>Aside</h2>
        <img src={Menu} alt="" onClick={hendleOpen} />
      </div>
      <ul>
        <h3>Market</h3>
        <li
          className={active === "Futures" ? "actice" : ""}
          onClick={() => setActive("Futures")}
        >
          Futures
        </li>
        <li
          className={active === "Forex" ? "actice" : ""}
          onClick={() => setActive("Forex")}
        >
          Futures
        </li>
        <li>Forex</li>
      </ul>
      <ul>
        <h3>Market</h3>
        <li>dasdasd</li>
        <li>asdasd</li>
      </ul>
      <ul>
        <h3>Market</h3>
        <li>dasdasd</li>
        <li>asdasd</li>
      </ul>
      <ul>
        <h3>Market</h3>
        <li>dasdasd</li>
        <li>asdasd</li>
      </ul>
    </div>
  );
};

export default Aside;
