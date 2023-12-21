import { useDispatch, useSelector } from "react-redux";
import cssStyle from "../css/Cart.module.css";
import { changeName, changeRate } from "../store/user";
import { minusCount, plusCount, delItem } from "../store/cartList";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let user = useSelector((a) => a.user);
  // let itemStock = useSelector((a) => a.stock);
  let cartList = useSelector((a) => a.cList);
  let dispatch = useDispatch();
  let navigator = useNavigate();

  let iconTrash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );

  return (
    <main className={cssStyle.cart}>
      <h2>Shopping cart</h2>
      <p>
        <span>
          {user.name} / {user.rating}레벨
        </span>{" "}
        have <span>{cartList.length}</span> item in your cart
      </p>
      <p>
        <button
          onClick={() => {
            dispatch(changeName());
            dispatch(changeRate(30));
          }}
        >
          정보변경
        </button>
      </p>
      <hr />
      <ul>
        {cartList.map((cartItem) => (
          <li className={cssStyle.cartList} key={cartItem._id}>
            <div
              className={cssStyle.img}
              onClick={() => {
                navigator(`/detail/${cartItem._id}`);
              }}
            >
              <img src={`${process.env.PUBLIC_URL}/img/${cartItem.img}`} alt={cartItem.title} />
            </div>
            <div
              className={cssStyle.title}
              onClick={() => {
                navigator(`/detail/${cartItem._id}`);
              }}
            >
              {cartItem.title}
            </div>
            <div className={cssStyle.num}>
              {Number(cartItem.price).toLocaleString()} 원
            </div>
            <div className={cssStyle.count}>
              {cartItem.count <= 1 ? (
                <button disabled>-</button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(minusCount(cartItem._id));
                  }}
                >
                  -
                </button>
              )}
              <span>{cartItem.count}</span>
              <button
                onClick={() => {
                  dispatch(plusCount(cartItem._id));
                }}
              >
                +
              </button>
            </div>
            <div className={cssStyle.num}>
              {(cartItem.price * cartItem.count).toLocaleString()} 원
            </div>
            <button
              onClick={() => {
                dispatch(delItem(cartItem._id));
              }}
            >
              {iconTrash}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
