import { USER_API } from "./constants";
import { useEffect, useState } from "react";

const useUserData = () => {
  const [user, setUser] = useState("Dummy");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(USER_API);
    const json = await data.json();
    setUser(json);
  };

  return user;
};

export default useUserData;
