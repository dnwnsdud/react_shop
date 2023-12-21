import { Link, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Company from "./Company";
import Main from "./Main";
import ShopList from "./ShopList";
import Cart from "./Cart";
// import { list } from "../productData";
// import { useEffect, useState } from "react";
import Detail from "./Detail";
// import axios from "axios";

function App() {
  // let [productData] = useState(list)
  // let [productData, setProductData] = useState([])


  // 외부 api를 호출해서 개발하는 방법
  // 1. XML HttpRequest 옛날 문법
  // 2. Fetch() 최신문법
  // 3. Axios 라이브러리 활용법

  // useEffect(() => {
  //   // 컨포넌트가 장착될 때마다 실행되는 함수
  //   // 함수2
  //   console.log('1---app 실행');
  //   return () => {
  //     // cleanup function
  //     // 컨포넌트가 제거될 때 실행되는 함수
  //     // 초기 1회는 실행됨, 함수 1
  //     console.log('2---return 실행');
  //   }
  // }, [])
  // [] 디펜던시 영역을 []으로 처리할 경우 -> 컨포넌트가 장착될 때 1회만 실행
  // [state 변수1, 변수2, 변수3] - 변수의 변경이 있을때 update 됐을 때 실행

  // const response = fetch('https://carrepe.github.io/datalist/productData.json.json')
  //   .then(res => res.json())
  // console.log(response.list);

  // api 데이터를 호출하기 위한 함수 fetcht()
  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await fetch(
  //       'https://carrepe.github.io/datalist/productData.json.json');
  //     const result = await response.json();
  //     console.log(result.list);
  //     setProductData(result);
  //   }
  //   loadData();
  // }, []);

  // 비동기적인 함수를 동기적으로 수행하기 위해서 async 함수() / await 함수()
  // useEffect(() => {
  //   const loadData = async () => {
  //     const result = (await axios.get(
  //       'https://carrepe.github.io/datalist/productData.json.json'
  //     ));
  //     setProductData(result.data.list)
  //   };
  //   loadData();
  // }, []);

  return (

    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Main />} />
        <Route path="shop_list" element={<ShopList />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="blog" element={<>블로그 페이지 입니다</>} />
        <Route path="our" element={<Company />} >
          <Route path="ceo" element={<>ceo 인사말</>} />
          <Route path="orga" element={<>조직도</>} />
        </Route>
        <Route path="search" element={<>검색페이지</>} ></Route>
        <Route path="cart" element={<Cart />} ></Route>
        <Route path="mypage" element={<>마이페이지</>} ></Route>
      </Route>
      <Route path="*" element={<>404 요청한 페이지는 없어요</>} />
    </Routes>

  );
}

export default App;
