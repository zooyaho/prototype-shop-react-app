import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// FN hook 이니까 다른 hook을 사용할수있음.
export default function useOrders(){
  // orders state만 꺼내어 사용.
  const {orders} = useContext(AppStateContext);

  return orders;
}