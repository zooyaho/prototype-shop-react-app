import useOrders from "../hooks/useOrders";
import usePrototype from "../hooks/usePrototypes";

export default function Orders(){
  const orders = useOrders();
  const prototypes = usePrototype();

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
        <div className="body">
          {orders.map(order=> {
            const {id} = order;
            // 추가하는 prototype의 id를 이용하여 thumbnail찾음.
            const prototype = prototypes.find(p=> p.id === id)
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail}></video>
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} X {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  <button className="btn btn--link"><i className="icon icon--cross"></i></button>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    );
  }
}