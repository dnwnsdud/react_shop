import { Tab, Tabs } from "react-bootstrap";
import { json, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Count from "../Components/Count";
import cssStyle from "../css/Detail.module.css";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "styled-components";
import { addItem } from "../store/cartList";
import Modal from "../Components/Modal";

export default function Detail() {
  let { id } = useParams();
  let productData = useSelector((a) => a.pData);
  let item = productData.find((a) => String(a._id) === id);
  let data = productData.filter((a) => a.category === item.category);
  // 컨포넌트는
  // 1. 생성될 수 있고(mount)
  // 2. 재 렌더링 될 수 있고(update)
  // 3. 삭제될 수 있다(unmount)
  let [open, setOpen] = useState(true);
  let [count, setCount] = useState(1);
  let [modal, setModal] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    let timmer = setTimeout(() => {
      setOpen(false);
    }, 2000);
    return () => {
      setOpen(true);
      clearTimeout(timmer);
    };
  }, [id]);

  let watched = JSON.parse(localStorage.getItem("watched") || "[]");
  let update = [...new Set([...watched, item._id])];
  localStorage.setItem("watched", JSON.stringify(update));

  return (
    <main>
      {modal && <Modal setModal={setModal} />}
      {open && (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            padding: "2rem 0",
            opacity: ".5",
          }}
        >
          {item.title}
        </div>
      )}

      <div className={cssStyle.detailCon}>
        <div className={cssStyle.img}>
          <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.title} />
        </div>
        <div className={cssStyle.desc}>
          <strong>{item.title}</strong>
          <span>￦{Number(item.price).toLocaleString()}원</span>
          {/* <Count className={cssStyle.btn} /> */}
          <div className={cssStyle.count}>
            {count <= 1 ? (
              <button disabled>-</button>
            ) : (
              <button
                onClick={() => {
                  setCount((prev) => prev - 1);
                }}
              >
                -
              </button>
            )}

            <span>{count}</span>
            <button
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch(
                  addItem({
                    _id: item._id,
                    title: item.title,
                    img: item.img,
                    price: item.price,
                    count: count,
                  })
                );
                setCount((prev) => (prev = 1));
                setModal(true);
              }}
            >
              ADD CART
            </button>
          </div>
        </div>
      </div>
      <div style={{ padding: "50px 0" }}>
        <Tabs
          defaultActiveKey="Description"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Description" title="Description">
            <div>1 상세정보 컴포넌트</div>
          </Tab>
          <Tab eventKey="information" title="Aditional information">
            <div>2 기타정보 컴포넌트</div>
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            <div>3 리뷰컴포넌트</div>
          </Tab>
        </Tabs>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        className={cssStyle.slide}
      >
        {data.map((data) => (
          <SwiperSlide key={data._id}>
            <ProductCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
