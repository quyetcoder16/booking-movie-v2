import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getListBannerAPI } from "../../Redux/reducers/quanLyPhimReducer";

export default function CarouselHome(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListBannerAPI());
  }, []);

  const { listBanner } = useSelector((state) => state.quanLyPhimReducer);
//   console.log(listBanner);

  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  const renderBanner = () => {
    return listBanner?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img className="opacity-0" src={item.hinhAnh} alt="" />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel style={{ width: "100%", padding: 0, margin: 0 }}>
        {renderBanner()}
      </Carousel>
    </div>
  );
}
