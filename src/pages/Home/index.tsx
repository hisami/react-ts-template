import React, { useEffect } from "react";
import { css } from "@emotion/css";
import Button from "@material-ui/core/Button";

import { User } from "@/types/user";
import { useUser } from "@/hooks/useUser";
import { Divider } from "@material-ui/core";

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

export const Home: React.FC<HomeProps> = ({ userList }: HomeProps) => {
  return (
    <>
      {userList.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
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
