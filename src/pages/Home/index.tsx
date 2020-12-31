import React, { useEffect } from "react";
import { css } from "@emotion/css";
import Button from "@material-ui/core/Button";

import { User } from "@Types/user";
import { useUser } from "@Hooks/useUser";

/*
Presentational Component（例：Home）を見た目の表現に限定するため、
副作用を起こすレイヤをContainer Componentに分離
*/
export const HomeContainer: React.FC = () => {
  const [userList, fetchUserList] = useUser();

  useEffect(() => {
    fetchUserList();
  }, []);

  // Presentational ComponentのPropsとして渡す
  return <Home userList={userList} />;
};

type HomeProps = {
  userList: User[];
};

const Home: React.FC<HomeProps> = ({ userList }: HomeProps) => {
  console.log(userList);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
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
