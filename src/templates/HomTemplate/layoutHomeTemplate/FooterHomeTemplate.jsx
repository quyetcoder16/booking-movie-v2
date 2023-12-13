import React from "react";

export default function FooterHomeTemplate() {
  return (
    <div>
      <div className="w-full">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#2d2636d6" }}
        >
          <div className="container p-4 pb-0">
            <section className>
              <div className="row">
                <div className="col-md-2 col-lg-2 col-xl-2 mt-3">
                  <img src="./img/icon.png" alt="" width={150} />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    phim hot
                  </h6>
                  <div className="row mt-2">
                    <img
                      className="col-3"
                      style={{ width: 60, height: 40, borderRadius: 40 }}
                      src="https://cdn.nguyenkimmall.com/images/companies/_1/phim-han-quoc-2023-9.jpg"
                      alt=""
                    />
                    <span className="ms-1 col-8">
                      Cô gái mặt nạ - Mask Girl (2023)
                    </span>
                  </div>
                  <div className="row mt-2">
                    <img
                      className="col-3"
                      style={{ width: 60, height: 40, borderRadius: 40 }}
                      src="https://cdn.nguyenkimmall.com/images/companies/_1/phim-han-quoc-2023-2.jpg"
                      alt=""
                    />
                    <span className="ms-1 col-8">
                      Khách sạn vương giả - King The Land (2023)
                    </span>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3" /> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> info@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Hệ Thống rạp
                  </h6>
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#55acee" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google" />
                  </a>
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#0082ca" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            ©2021 All rights reserved
          </div>
        </footer>
      </div>
    </div>
  );
}
