import { useNavigate } from "react-router-dom";
import cssStyle from "../css/BannerCard.module.css";

export default function BannerCard({ item }) {
  let navigate = useNavigate();
  return (
    <div className={cssStyle.bannerCard}>
      <img
        src={`${process.env.PUBLIC_URL}/img/${item.bannerImg}`}
        alt={item.bannerTitle}
      />
      <div>
        <strong>{item.bannerTitle}</strong>
        <span>{item.price}원</span>
        <button
          onClick={() => {
            navigate(`/detail/${item._id}`);
          }}
        >
          View Product
        </button>
      </div>
    </div>
  );
}
