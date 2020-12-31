import { useState, useCallback } from "react";

import { User } from "@Types/user";

const dummyUser = {
  id: 1,
  name: "dummy",
  age: 30,
};

// ユーザに関するロジック
export const useUser = (): [User[], () => Promise<void>] => {
  const [userList, setUserList] = useState<User[]>([]);

  // ユーザリストをAPIから取得
  const fetchUserList = useCallback(async () => {
    setUserList([dummyUser]);
  }, []);
  return [userList, fetchUserList];
};
