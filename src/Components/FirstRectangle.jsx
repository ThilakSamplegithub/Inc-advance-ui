import React from "react";
import styles from "../Styles/firstRectangle.module.scss";
const FirstRectangle = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          Launch Your Game <br /> on <span style={{color:'#ae109c'}}>Web 3.0</span> in Minutes
        </div>
        <div>
          We help game developers to launch their game on Web 3.0, by keeping{" "}
          <br /> blockchain complexities aside with WebWorld SDKs!
        </div>
        <div>
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
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m268 112l144 144l-144 144m124-144H100"
                />
              </svg>
            </div>
          </div>
          <div>
            <div>View Docs</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m268 112l144 144l-144 144m124-144H100"
                />
              </svg>
            </div>
          </div>
        </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        {/* <div style={{border:'1px solid red',height:244}}>Backed by</div> */}
      </div>
    </div>
  );
};

export default FirstRectangle;
