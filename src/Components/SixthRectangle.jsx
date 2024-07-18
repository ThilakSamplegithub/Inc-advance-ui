import React from "react";
import styles from "../Styles/sixthRectangle.module.scss";
const SixthRectangle = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <div>Elevate Your Gameplay with Essential Insights!</div>
          <div>Unleash Your Potential - Explore the Knowledge Hub Today!</div>
          <div>View Docs</div>
        </div>
        {/* if i want to place animation place here */}
        <div>
          <img
          width={227.64}
          height={227.64}
            src="https://s3-alpha-sig.figma.com/img/efc2/0bf1/269ff51dfea508b952adde5a5602a36c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOefZqalmMeepW8lNKZ4x9ClOl80zWegvn3~Mq1IQfMBQc6SQl8BWjCrfbC~9y9RiZPxAti7-WsLPar0~hCxbqTQE8Y4FqvoC87NIlV0C8VV03A~96N8sTMDY1XdWMain8FmXv3DjQUbaNLErkGg~TMcVwZ6ym~ZEOSA7wZq7vR7QVSZXRAaxZkCvYOO2ZZNPtICocUq7P9yfUCHQjsRzvKryaS499Utk1eIq-ZbB9hnyi5XxAEjVZuELqugerTstBRPONudp-hORDAGxeO1wkTvBMH9ZXZSV5OTxBn~~U61QzOx4yORzaYd0LyTpBAYmZOGZzpv4t199JARlTcVhw__"
            alt="error"
          />
        </div>
      </div>
      {/* This 2nd div has lot childs */}
      <div>
        {/* 1st div has 2 children */}
        <div>
          <div>
            <div style={{color:"#2e3198"}}>200+</div>
            <div>Projects have downloaded & integrated LYNC SDKs</div>
          </div>
          <div>
            <div>8000+</div>
            <div>Contracts have been deployed via LYNC</div>
          </div>
        </div>
        <div>
          <div style={{color:"#2e3198"}}>5000+</div>
          <div>User ops created in 10 hours</div>
          <div>
            <img
              width={253.14}
              height={262.26}
              src="https://s3-alpha-sig.figma.com/img/1be9/2566/6b3ec01eeaad05f535ce4022703a96a4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFGGJtyJHvD8DgOx0RNYu85Ls6tFWVX3MmS47l0IlIUNG3hld1AmDiOHx6924ayC8AiyjSQaDkJHLI8BCW2NTnsZ65Rqsodck9NT~de7zgZjfG1KPxKcieZSPzSQwo9RQhqe-QOkGJygG6nIzZsyPOILbil9-emRdpJSrFNC28i-RX-EFDDxkOd2JmVs2Rjv~-SX0j15zhQDyICri4d0yj~MpUZaLJxtzfmRaONx~w2rH6b~y-YB8uBx8Gnm5vqGQKxTnOXEKLe6hfAOWlh4kCmmVFYckfZ0h6fwgU3VaSwFYd29XvDnDFjDAUt6Vci2auSQT00NbKv8AvLMRZTMLQ__"
              alt="err"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthRectangle;
