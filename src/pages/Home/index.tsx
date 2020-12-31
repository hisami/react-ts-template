import React from "react";
import { css } from "@emotion/css";
import Button from "@material-ui/core/Button";

const Home: React.FC = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Button
      </Button>
      <div className={styleSample}>This is a Home page.</div>
    </>
  );
};

const styleSample = css({
  color: "green",
  fontWeight: "bold",
});

export default Home;
