import React from "react";
import { useFirebase } from "@hooks";

const useFilter = () => {
  const [value] = useFirebase({ db: "list_menu" });
  console.log(value);
  return;
};

export default useFilter;
