import React from "react";
import { css } from "@emotion/css";

const Home: React.FC = () => {
  return <div className={styleSample}>This is a Home page.</div>;
};

const styleSample = css({
  color: "green",
  fontWeight: "bold",
});

export default Home;
