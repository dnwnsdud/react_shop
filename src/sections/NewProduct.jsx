import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import cssStyle from "../css/NewProduct.module.css";
import { useSelector } from "react-redux";

export default function NewProduct() {
  let productData = useSelector((a) => a.pData);
  let newList = productData.filter((item) => item.category === "new");
  let navigate = useNavigate();
  return (
    <section className={cssStyle.newProduct}>
      <h2>신상품 리스트</h2>
      <button
        onClick={() => {
          navigate("shop_list");
        }}
      >
        View All
      </button>
      <ul>
        {newList.map((data) => {
          return (
            <li key={data._id}>
              <ProductCard data={data} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
