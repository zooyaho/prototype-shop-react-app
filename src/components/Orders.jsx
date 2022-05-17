import useOrders from "../hooks/useOrders";

export default function Orders(){
  const orders = useOrders();
  console.log(orders);

  if(orders.length == 0) {
    // order에 아무것도 추가가 되지 않았을 경우
    return(
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders</div>
          <div className="subtitle">Click on a + to add an order</div>
        </div>
        <div></div>
      </aside>
    );
  } else {
    // order에 추가가 되었을 경우
    return(
      <aside>
        orders
      </aside>
    );
  }
}