import React from "react";
import style from "../Styles/navbar.module.scss";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.3175em"
          height="1.4375em"
          viewBox="0 0 20 20"
        >
          <path
            fill="white"
            d="M4.83 15h2.91a4.9 4.9 0 0 1-1.55-2H5a3 3 0 1 1 0-6h3a3 3 0 0 1 2.82 4h2.1a5 5 0 0 0 .08-.83v-.34A4.83 4.83 0 0 0 8.17 5H4.83A4.83 4.83 0 0 0 0 9.83v.34A4.83 4.83 0 0 0 4.83 15"
          />
          <path
            fill="white"
            d="M15.17 5h-2.91a4.9 4.9 0 0 1 1.55 2H15a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.82-4h-2.1a5 5 0 0 0-.08.83v.34A4.83 4.83 0 0 0 11.83 15h3.34A4.83 4.83 0 0 0 20 10.17v-.34A4.83 4.83 0 0 0 15.17 5"
          />
        </svg>
      </div>
      <div>
        <div>Home</div>
        <div>Documentation</div>
        <div>Blogs</div>
        <div>LYNC Portal</div>
        <div>Request a demo</div>
      </div>
      <div>
        <div>Get started</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="m268 112l144 144l-144 144m124-144H100"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
