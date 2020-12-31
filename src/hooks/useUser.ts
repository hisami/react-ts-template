import { useState, useCallback } from "react";

// ユーザに関するロジック
export const useUser = (): [string[], () => Promise<void>] => {
  const [userList, setUserList] = useState([]);

  // ユーザリストをAPIから取得
  const fetchUserList = useCallback(async () => {
    setUserList(["test"]);
  }, []);
  return [userList, fetchUserList];
};
