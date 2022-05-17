import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// FN hook 이니까 다른 hook을 사용할수있음.
export default function useActions(){
  // action하는 함수들을 가져옴.
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);

  return { addToOrder, remove, removeAll };
}