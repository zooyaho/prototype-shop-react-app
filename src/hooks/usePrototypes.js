import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// FN hook 이니까 다른 hook을 사용할수있음.
export default function usePrototype(){
  // prototype state만 꺼내어 사용.
  const {prototypes} = useContext(AppStateContext);

  return prototypes;
}