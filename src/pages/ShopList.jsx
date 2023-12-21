import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import cssStyle from "../css/ShopList.module.css";

export default function ShopList() {
  let productData = useSelector((a) => a.pData);
  // 고차함수의 종류
  // 1. [].map((a,i,arry)=>{}) -> 새로운 배열로 반환
  // 2. [].filter((a)=>{}) -> 새로운 배열로 반환
  // 3. [1,2,3].reduce(()=>{}) -> 값 합산
  // 4. [].find(()=>{})
  // 5. [].some(()=>{}) -> boolean값
  // 6. [].every(()=>{})
  // 7. [].sort((a,b)=>a-b)
  // 7. [].sort((a,b)=>b-a)
  // .sort(()=>{})
  let [reList, setReList] = useState(productData);
  return (
    <main className={cssStyle.shopList}>
      <div>
        <div>
          <button
            onClick={() => {
              setReList(productData);
            }}
          >
            등록순
          </button>
          <button
            onClick={() => {
              setReList([...reList].sort((a, b) => a.price - b.price));
            }}
          >
            낮은가격
          </button>
          <button
            onClick={() => {
              setReList([...reList].sort((a, b) => b.price - a.price));
            }}
          >
            높은가격
          </button>
          <button
            onClick={() => {
              setReList([...reList].sort((a, b) => b.discount - a.discount));
            }}
          >
            높은할인율
          </button>
          <button
            onClick={() => {
              setReList([...productData].filter((a) => a.category === "new"));
            }}
          >
            신상품(new)
          </button>
          <button
            onClick={() => {
              setReList([...productData].filter((a) => a.category === "top"));
            }}
          >
            인기상품(top)
          </button>
        </div>
      </div>
      <ul>
        {reList.map((data) => {
          return (
            <li key={data._id}>
              <ProductCard data={data} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
