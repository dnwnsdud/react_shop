import { useNavigate } from "react-router-dom";
import cssStyle from "../css/ProductCard.module.css";
import styled from "styled-components";

export default function ProductCard({ data }) {
  let navigate = useNavigate();
  return (
    <figure
      className={cssStyle.pCard}
      onClick={() => {
        navigate(`/detail/${data._id}`);
      }}
    >
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/${data.img}`} alt={data.title} />
      </div>
      <p>{data.category}</p>
      {data.discount != 0 && <p>{data.discount}%</p>}
      <figcaption>
        <strong>{data.title}</strong>
        <span>{Number(data.price).toLocaleString()}원</span>
        {/* <Button bg="blue">버튼</Button>
        <Button bg="red">버튼</Button> */}
      </figcaption>
    </figure>
  );
}
// const Button = styled.button`
//   background-color: ${(props) => props.bg};
//   color: #fff;
//   padding: 1rem;
// `;
