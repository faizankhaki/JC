import React from "react";

export default function slider() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="./images/photo3.jpeg"
              className="d-block w-100"
              alt="Photo 1"
            />
            <div className="carousel-caption">
              <p className="fs-2 fw-semibold">
                Get upto <span className="text-warning">50% OFF</span> on
              </p>
              <p className="line1 fs-1 fw-bolder">
                <span className="text-warning">KASHMIR</span> TOUR PACKAGES!
              </p>
              <hr />
              <p className="fs-5">
                starting at <span className="fs-4 fw-bold"> INR 12999 </span>
                <s> INR 25998 </s>&nbsp;&nbsp;
                <button
                  className="border-0 px-3 py-1 rounded-pill fw-bold text-white"
                  style={{
                    background: "linear-gradient(93deg,#ff7b26,#ec048c)",
                    fontSize: "20px",
                    cursor: "text",
                  }}
                  tabIndex="-1"
                >
                  Early Summer Sale
                </button>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="./images/photo2.jpeg"
              className="d-block w-100"
              alt="Photo 2"
            />
            <div className="carousel-caption">
              <p className="fs-2 fw-semibold">
                Get upto <span className="text-warning">50% OFF</span> on
              </p>
              <p className="line1 fs-1 fw-bolder">
                <span className="text-warning">KASHMIR</span> TOUR PACKAGES!
              </p>
              <hr />
              <p className="fs-5">
                starting at <span className="fs-4 fw-bold"> INR 12999 </span>
                <s> INR 25998 </s>&nbsp;&nbsp;
                <button
                  className="border-0 px-3 py-1 rounded-pill fw-bold text-white"
                  style={{
                    background: "linear-gradient(93deg,#ff7b26,#ec048c)",
                    fontSize: "20px",
                    cursor: "text",
                  }}
                  tabIndex="-1"
                >
                  Early Summer Sale
                </button>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1500">
            <img
              src="./images/clone23.avif"
              className="d-block w-100"
              alt="Photo 3"
            />
            <div className="carousel-caption">
              <p className="fs-2 fw-semibold">
                Get upto <span className="text-warning">50% OFF</span> on
              </p>
              <p className="line1 fs-1 fw-bolder">
                <span className="text-warning">KASHMIR</span> TOUR PACKAGES!
              </p>
              <hr />
              <p className="fs-5">
                starting at <span className="fs-4 fw-bold"> INR 12999 </span>
                <s> INR 25998 </s>&nbsp;&nbsp;
                <button
                  className="border-0 px-3 py-1 rounded-pill fw-bold text-white"
                  style={{
                    background: "linear-gradient(93deg,#ff7b26,#ec048c)",
                    fontSize: "20px",
                    cursor: "text",
                  }}
                  tabIndex="-1"
                >
                  Early Summer Sale
                </button>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* from  here  starts the black portion */}
      <div
        className="card p-4 d-flex flex-wrap justify-content-center"
        style={{
          width: "100%",
          background: "#141414",
          border: "none",
          borderRadius: "0px",
        }}
      >
        <div className="card-body text-center" id="trip">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 p-3">
              <div className="d-flex justify-content-center">
                <span>
                  <i
                    className="fa-solid fa-star sx"
                    style={{ color: "white" }}
                  ></i>
                </span>
                <span className="text-white ms-2">
                  <h6 className="p-0 pt-1 m-0 text-start"> 4.6/5</h6>
                  <small className="text-start" style={{ fontSize: "0.6rem" }}>
                    TRIP ADVISOR
                  </small>
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3 p-3">
              <div className="d-flex justify-content-center">
                <span>
                  <i
                    className="fa-brands fa-google sx"
                    style={{ color: "white" }}
                  ></i>
                </span>
                <span className="text-white ms-2">
                  <h6 className="p-0 pt-1 m-0 text-start"> 4.6/5</h6>
                  <small className="text-start" style={{ fontSize: "0.6rem" }}>
                    TRIP ADVISOR
                  </small>
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3 p-3">
              <div className="d-flex justify-content-center">
                <span>
                  <i
                    class="fa-regular fa-star"
                    style={{ color: "#ffffff" }}
                  ></i>
                </span>
                <span className="text-white ms-2">
                  <h6 className="p-0 pt-1 m-0 text-start"> 4.6/5</h6>
                  <small className="text-start" style={{ fontSize: "0.6rem" }}>
                    TRIP ADVISOR
                  </small>
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3 p-3">
              <div className="d-flex justify-content-center">
                <span>
                  <i
                    className="fa-regular fa-star sx"
                    style={{ color: "#ffffff" }}
                  ></i>
                </span>
                <span className="text-white ms-2">
                  <h6 className="p-0 pt-1 m-0 text-start"> 4.6/5</h6>
                  <small className="text-start" style={{ fontSize: "0.6rem" }}>
                    TRIP ADVISOR
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third is from here  */}
      <div
        className="p-3 mb-4 rounded-5 mt-5"
        style={{
          backgroundColor: "#F4F4F4",

          width: "80%",
          margin: "0 auto",
          color: "black",
        }}
      >
        <div className="container-fluid py-3">
          <h4 className="fw-bold">
            Kashmir Tour Packages | Upto 50% Off April Mega SALE
          </h4>
          <div className="d-flex justify-content-between flex-wrap flex-row">
            <span className="text-muted me-3">
              <span className="fw-medium text-secondary">
                Kashmir tour packages
              </span>{" "}
              - Browse through a wide range of Kashmir tours with exciting
              offers at Thrillophilia. Book customized Kashmir...{" "}
              <a href="" className="text-decoration-none fw-bold text-dark">
                Read More
              </a>
            </span>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "60%",
          margin: "30px auto 0 auto",
          borderTop: "1px solid #000000",
        }}
      />
      {/* the card start from here  */}
      <h1>hello</h1>
      <div className="row">
        <div className="col-md-4">
          {/* Existing card */}
          <div
            className="card rounded-3 border-0 aos-init aos-animate"
            data-aos="flip-right"
            data-aos-duration="4000"
          >
            {/* ... */}
          </div>
        </div>

        {/* Add three more cards here */}
        <div className="col-md-4">
          {/* New card */}
          <div
            className="card rounded-3 border-0 aos-init aos-animate"
            data-aos="flip-right"
            data-aos-duration="4000"
          >
            {/* Card content */}
          </div>
        </div>

        <div className="col-md-4">
          {/* New card */}
          <div
            className="card rounded-3 border-0 aos-init aos-animate"
            data-aos="flip-right"
            data-aos-duration="4000"
          >
            {/* Card content */}
          </div>
        </div>

        <div className="col-md-4">
          {/* New card */}
          <div
            className="card rounded-3 border-0 aos-init aos-animate"
            data-aos="flip-right"
            data-aos-duration="4000"
          >
            {/* Card content */}
          </div>
        </div>
      </div>
      {/* next part */}
      <div className="row container mx-auto d-flex flex-wrap p-2">
        <div className=" col-md-4 d-flex align-items-center justify-content-center flex-column border-end ">
          <img src="images/star.png" alt="" style={{ width: "60%" }} />
          <h1 className="text-success fw-bold">4.6</h1>
          <a className="fw-medium text-success fs-5">16,716 Kashmir Reviews</a>
          <p className="text-muted">
            by customers from
            <span className="text-dark fw-semibold">65+ countries</span>
          </p>
        </div>
        <div className=" col-md-8 d-flex flex-row overflow-auto ">
          <div
            className="swiper mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden aos-init aos-animate"
            id="swiper"
            data-aos="zoom-in-up"
            data-aos-duration="4000"
          >
            <div
              className="swiper-wrapper rounded d-flex "
              id="swiper-wrapper-9f8fe768c42e91f9"
              aria-live="polite"
            >
              <div
                className="swiper-slide border rounded-3 swiper-slide-active me-3"
                role="group"
                aria-label="1 / 4"
                style={{ width: "335px", marginRight: "10px" }}
              >
                <div className="card border-0 rounded-3">
                  <div className="card-body mb-5">
                    <div className="d-flex justify-content-start  ">
                      <img
                        src="images/clone29.avif"
                        alt=""
                        style={{ width: "15%" }}
                        className="rounded-circle"
                      />
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;Lavanya&nbsp;Srikanth</span>
                      <br />
                    </div>
                    <small
                      className=" d-flex justify-content-start ms-5"
                      style={{ fontSize: "10px" }}
                    >
                      <i className="fa-solid fa-star text-success">4</i>
                    </small>
                    <div className="  my-1 text-start">
                      <p className="text-dark " style={{ fontSize: "13px" }}>
                        The people of kashmir are very cordial and empathetic
                      </p>
                    </div>
                    <div className="d-flex  justify-content-around mt-3">
                      <div>
                        <img
                          src="images/clone30.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone31.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone32.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone33.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="swiper-slide border rounded-3 swiper-slide-active me-3"
                role="group"
                aria-label="2 / 4"
                style={{ width: "335px", marginRight: "10px" }}
              >
                <div className="card border-0 rounded-3">
                  <div className="card-body mb-5">
                    <div className="d-flex justify-content-start  ">
                      <img
                        src="images/clone29.avif"
                        alt=""
                        style={{ width: "15%" }}
                        className="rounded-circle"
                      />
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;Lavanya&nbsp;Srikanth</span>
                      <br />
                    </div>
                    <small
                      className=" d-flex justify-content-start ms-5"
                      style={{ fontSize: "10px" }}
                    >
                      <i className="fa-solid fa-star text-success">4</i>
                    </small>
                    <div className="  my-1 text-start">
                      <p className="text-dark " style={{ fontSize: "13px" }}>
                        The people of kashmir are very cordial and empathetic
                      </p>
                    </div>
                    <div className="d-flex  justify-content-around mt-3">
                      <div>
                        <img
                          src="images/clone30.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone31.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone32.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone33.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="swiper-slide border rounded-3 swiper-slide-active me-3"
                role="group"
                aria-label="2 / 4"
                style={{ width: "335px", marginRight: "10px" }}
              >
                <div className="card border-0 rounded-3">
                  <div className="card-body mb-5">
                    <div className="d-flex justify-content-start  ">
                      <img
                        src="images/clone29.avif"
                        alt=""
                        style={{ width: "15%" }}
                        className="rounded-circle"
                      />
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;Lavanya&nbsp;Srikanth</span>
                      <br />
                    </div>
                    <small
                      className=" d-flex justify-content-start ms-5"
                      style={{ fontSize: "10px" }}
                    >
                      <i className="fa-solid fa-star text-success">4</i>
                    </small>
                    <div className="  my-1 text-start">
                      <p className="text-dark " style={{ fontSize: "13px" }}>
                        The people of kashmir are very cordial and empathetic
                      </p>
                    </div>
                    <div className="d-flex  justify-content-around mt-3">
                      <div>
                        <img
                          src="images/clone30.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone31.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone32.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                      <div>
                        <img
                          src="images/clone33.avif"
                          alt=""
                          style={{ width: "80%", height: "100%" }}
                          className="rounded-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* nextpart sk */}
      <div
        className="card-body d-flex flex-column align-items-start text-center"
        style={{
          backgroundColor: "#5CF286",
          width: "80%",
          marginTop: "14px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px", // Add padding for inner content
        }}
      >
        <h1
          className="display-5 fw-bolder textt"
          style={{ color: "black", fontSize: "28px", marginBottom: "10px" }} // Increase font size and add bottom margin
        >
          Bigger Group? Get special offers up to 50% Off!
        </h1>
        <p
          className="col-md-8 fs-4 textt2"
          style={{
            color: "black",
            fontSize: "18px",
            paddingLeft: "10px",
            marginBottom: "20px",
          }} // Increase font size and add bottom margin
        >
          We create unforgettable adventures, customised for your group.
        </p>
        <button
          type="button"
          className="btn btn-white bg-white border-0 rounded btnn"
          style={{ color: "black", borderColor: "black" }}
        >
          Get A Callback
        </button>
      </div>

      {/* 2ndcard orange */}
      <div className="container rounded text-start p-3 d-flex flex-column flex-grow">
        <p
          id="gd"
          className="fs-4 fw-bold mx-0 p-0 mb-3"
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          Honeymoon Special
        </p>
        <small id="ll" className="fs-5 mb-4 mx-0" style={{ fontSize: "15px" }}>
          Tailor-Made Honeymoons Just For You
        </small>
        <div className="d-flex flex-row flex-wrap justify-content-center ">
          <div className="container  rounded  text-start d-flex flex-row flex-grow">
            <div
              className="card rounded-3 border-0 aos-init aos-animate me-3 mb-3"
              data-aos="flip-right"
              data-aos-duration="4000"
              style={{ width: "18rem" }}
            >
              <img
                src="./images/clone60.avif"
                className="card-img-top rounded-3"
                alt="Fissure in Sandstone"
                style={{ height: "40vh" }}
              />
              <div className="card-body">
                <small
                  className="d-flex justify-content-between fw-medium"
                  style={{ fontSize: "14px" }}
                >
                  6 days &amp; 5 nights
                  <span style={{ fontSize: "12px" }}>
                    <i className="rounded-pill px-2 py-2 fa-solid fa-star text-success">
                      4.9 <span className="text-muted">(261)</span>
                    </i>
                  </span>
                </small>
                <p
                  className="card-title text-start text-dark"
                  style={{ fontSize: "15px" }}
                >
                  Kashmir Retreat | Romantic Escape to Doodhpathri
                </p>
                <p
                  className="card-text p-0 mb-2 text-start rounded"
                  style={{ fontSize: "12px", backgroundColor: "#FFFBF0" }}
                >
                  <span className="fw-bold">3D </span> Srinagar{" "}
                  <span className="fw-bold">. 1D </span>Pahalgam
                  <span className="fw-bold">. 2D </span>Srinagar
                </p>
                <h3
                  className="text-start text-light rounded-pill"
                  style={{
                    background: "linear-gradient(93deg,#ff7b26,#ec048c)",
                    fontSize: "9px",
                    cursor: "text",
                    fontWeight: "900",
                    width: "fit-content",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    height: "18px",
                    lineHeight: "18px",
                  }}
                >
                  EARLY SUMMER SALE!
                </h3>
                <h5
                  className="fw-bolder text-start"
                  style={{ fontSize: "18px" }}
                >
                  INR 20,000{" "}
                  <small>
                    <s style={{ fontSize: "14px" }}>INR 28,986</s>
                  </small>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <button
                      className="px-2 py-1 border-0 rounded text-success"
                      style={{
                        fontSize: "9px",
                        backgroundColor: "#E7F3EA",
                        color: "#0BB22A",
                      }}
                    >
                      save INR 8,986
                    </button>
                  </span>
                </h5>
                <div
                  className="d-flex justify-content-between"
                  style={{ alignSelf: "center" }}
                >
                  <a
                    href="tel/:1000000000"
                    className="btn"
                    style={{ borderColor: "#F37002", paddingTop: "8px" }}
                  >
                    <i
                      className="fa-solid fa-phone "
                      role="button"
                      style={{ color: "#F37002" }}
                    ></i>
                  </a>
                  <a
                    href="#"
                    className="text-capitalize btn text-white px-5 py-2 border rounded"
                    role="button"
                    style={{ backgroundColor: "#F37002" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Request Callback
                  </a>
                </div>
              </div>
            </div>
            {/* inside */}
            <div
              className="card rounded-3 border-0 aos-init aos-animate me-3 mb-3"
              data-aos="flip-right"
              data-aos-duration="4000"
              style={{ width: "18rem" }}
            >
              <img
                src="./images/clone60.avif"
                className="card-img-top rounded-3"
                alt="Fissure in Sandstone"
                style={{ height: "40vh" }}
              />
              <div className="card-body">
                <small
                  className="d-flex justify-content-between fw-medium"
                  style={{ fontSize: "14px" }}
                >
                  6 days &amp; 5 nights
                  <span style={{ fontSize: "12px" }}>
                    <i className="rounded-pill px-2 py-2 fa-solid fa-star text-success">
                      4.9 <span className="text-muted">(261)</span>
                    </i>
                  </span>
                </small>
                <p
                  className="card-title text-start text-dark"
                  style={{ fontSize: "15px" }}
                >
                  Kashmir Retreat | Romantic Escape to Doodhpathri
                </p>
                <p
                  className="card-text p-0 mb-2 text-start rounded"
                  style={{ fontSize: "12px", backgroundColor: "#FFFBF0" }}
                >
                  <span className="fw-bold">3D </span> Srinagar{" "}
                  <span className="fw-bold">. 1D </span>Pahalgam
                  <span className="fw-bold">. 2D </span>Srinagar
                </p>
                <h3
                  className="text-start text-light rounded-pill"
                  style={{
                    background: "linear-gradient(93deg,#ff7b26,#ec048c)",
                    fontSize: "9px",
                    cursor: "text",
                    fontWeight: "900",
                    width: "fit-content",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    height: "18px",
                    lineHeight: "18px",
                  }}
                >
                  EARLY SUMMER SALE!
                </h3>
                <h5
                  className="fw-bolder text-start"
                  style={{ fontSize: "18px" }}
                >
                  INR 20,000{" "}
                  <small>
                    <s style={{ fontSize: "14px" }}>INR 28,986</s>
                  </small>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <button
                      className="px-2 py-1 border-0 rounded text-success"
                      style={{
                        fontSize: "9px",
                        backgroundColor: "#E7F3EA",
                        color: "#0BB22A",
                      }}
                    >
                      save INR 8,986
                    </button>
                  </span>
                </h5>
                <div
                  className="d-flex justify-content-between"
                  style={{ alignSelf: "center" }}
                >
                  <a
                    href="tel/:1000000000"
                    className="btn"
                    style={{ borderColor: "#F37002", paddingTop: "8px" }}
                  >
                    <i
                      className="fa-solid fa-phone "
                      role="button"
                      style={{ color: "#F37002" }}
                    ></i>
                  </a>
                  <a
                    href="#"
                    className="text-capitalize btn text-white px-5 py-2 border rounded"
                    role="button"
                    style={{ backgroundColor: "#F37002" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Request Callback
                  </a>
                </div>
              </div>
            </div>

            {/* last one */}
            <div
              className="card rounded-3 border-0 aos-init aos-animateme-3 mb-3"
              data-aos="flip-right"
              data-aos-duration="4000"
              style={{ width: "18rem" }}
            >
              <img
                src="./images/clone60.avif"
                className="card-img-top rounded-3"
                alt="Fissure in Sandstone"
                style={{ height: "40vh" }}
              />
              <div className="card-body">
                <small
                  className="d-flex justify-content-between fw-medium"
                  style={{ fontSize: "14px" }}
                >
                  6 days &amp; 5 nights
                  <span style={{ fontSize: "12px" }}>
                    <i className="rounded-pill px-2 py-2 fa-solid fa-star text-success">
                      4.9 <span className="text-muted">(261)</span>
                    </i>
                  </span>
                </small>
                <p
                  className="card-title text-start text-dark"
                  style={{ fontSize: "15px" }}
                >
                  Kashmir Retreat | Romantic Escape to Doodhpathri
                </p>
                <p
                  className="card-text p-0 mb-2 text-start rounded"
                  style={{ fontSize: "12px", backgroundColor: "#FFFBF0" }}
                >
                  <span className="fw-bold">3D </span> Srinagar{" "}
                  <span className="fw-bold">. 1D </span>Pahalgam
                  <span className="fw-bold">. 2D </span>Srinagar
                </p>
                <h3
                  className="text-start text-light rounded-pill"
                  style={{
                    background: "linear-gradient(93deg,#ff7b26,#ec048c)",
                    fontSize: "9px",
                    cursor: "text",
                    fontWeight: "900",
                    width: "fit-content",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    height: "18px",
                    lineHeight: "18px",
                  }}
                >
                  EARLY SUMMER SALE!
                </h3>
                <h5
                  className="fw-bolder text-start"
                  style={{ fontSize: "18px" }}
                >
                  INR 20,000{" "}
                  <small>
                    <s style={{ fontSize: "14px" }}>INR 28,986</s>
                  </small>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <button
                      className="px-2 py-1 border-0 rounded text-success"
                      style={{
                        fontSize: "9px",
                        backgroundColor: "#E7F3EA",
                        color: "#0BB22A",
                      }}
                    >
                      save INR 8,986
                    </button>
                  </span>
                </h5>
                <div
                  className="d-flex justify-content-between"
                  style={{ alignSelf: "center" }}
                >
                  <a
                    href="tel/:1000000000"
                    className="btn"
                    style={{ borderColor: "#F37002", paddingTop: "8px" }}
                  >
                    <i
                      className="fa-solid fa-phone "
                      role="button"
                      style={{ color: "#F37002" }}
                    ></i>
                  </a>
                  <a
                    href="#"
                    className="text-capitalize btn text-white px-5 py-2 border rounded"
                    role="button"
                    style={{ backgroundColor: "#F37002" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Request Callback
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* cards end */}
        </div>
      </div>
      <hr
        style={{
          width: "60%",
          margin: "30px auto 0 auto",
          borderTop: "1px solid #000000",
        }}
      />
      <div
        className="p-3 mb-4 rounded-5 mt-5"
        style={{
          backgroundColor: "black",
          width: "80%",
          margin: "0 auto",
          color: "white",
        }}
      >
        <div className="container-fluid py-3">
          <h5
            className="card-title fw-bolder text-light"
            style={{ fontSize: "1.5rem" }}
          >
            Up to INR 30,000 OFF
          </h5>
          <p
            className="card-text text-light"
            style={{ fontSize: "1.1rem", fontWeight: "500" }}
          >
            on selected trips
            <span
              className="text-start text-light rounded-pill"
              style={{
                background: "linear-gradient(93deg,#ff7b26,#ec048c)",
                fontSize: ".6rem",
                cursor: "text",
                fontWeight: "500",
                width: "fit-content",
                paddingRight: "10px",
                paddingLeft: "10px",
                height: "22px",
                lineHeight: "22px",
                display: "inline-block",
              }}
            >
              EARLY SUMMER SALE!
            </span>
          </p>
          <div className="d-flex justify-content-between flex-wrap flex-row">
            <p className="text-light" style={{ fontSize: "14px" }}>
              <span className="fw-medium text-secondary"></span> Connect with
              our destination experts to get exciting discounts
              <a href="" className="text-decoration-none fw-bold text-dark"></a>
            </p>
            <button
              type="button"
              className="text-capitalize btnn btn btn-white border-0 rounded"
              style={{
                color: "rgb(255, 255, 255)",
                border: "none",
                background: "linear-gradient(93deg, #ff7b26, #ec048c)",
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Know more
            </button>
          </div>
        </div>
      </div>
      {/* google */}
      <div className=" rounded container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div
              className="card"
              style={{ backgroundColor: "rgb(244, 244, 244)" }}
            >
              <div className="card-body">
                <h5
                  className="card-title fw-bolder text-dark"
                  style={{ fontSize: "1.5rem" }}
                >
                  <img src="./images/icon.png" alt="" />
                  Rating
                </h5>
                <p
                  className="card-text text-dark"
                  style={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  4.6
                  <img
                    src="user_avatar.jpg"
                    alt="User Avatar"
                    style={{ height: "40px" }}
                  />
                  <span
                    className="text-start text-dark rounded-pill"
                    style={{}}
                  >
                    (650reviews)
                  </span>
                </p>

                <button
                  type="button"
                  className="text-capitalize btnn btn btn-white bg-blue border-0 rounded"
                  style={{
                    color: "rgb(255, 255, 255)",
                    border: "none",
                    background: "blue", // Change background color to blue
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Write a Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* googlereview2 */}
      {/* <div className="row md-4 p-5 d-flex justify-content-center">
        <div className="col-md-4 p-5 d-flex justify-content-end">
          <div className="card rounded-3" data-aos="zoom-in">
            <img
              src="./images/clone63.jpg"
              className="card-img-top w-100 rounded-3 img-fluid"
              alt="Fissure in Sandstone"
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="grid-container">
            <div className="grid-item">
              <div
                className="card rounded-3"
                data-aos="flip-left"
                data-aos-duration="4000"
              >
                <img
                  src="./images/clone63.jpg"
                  className="rounded-3 img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div
                className="card rounded-3"
                data-aos="flip-left"
                data-aos-duration="4000"
              >
                <img
                  src="./images/clone63.jpg"
                  className="rounded-3 img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div
                className="card rounded-3"
                data-aos="flip-left"
                data-aos-duration="4000"
              >
                <img
                  src="./images/clone63.jpg"
                  className="rounded-3 img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div
                className="card rounded-3"
                data-aos="flip-left"
                data-aos-duration="4000"
              >
                <img
                  src="./images/clone63.jpg"
                  className="rounded-3 img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* after the  */}
      <hr
        style={{
          width: "60%",
          margin: "30px auto 0 auto",
          borderTop: "1px solid #000000",
        }}
      />
      <div class="accordion mt-5 p-5" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">Kashmir Tour FAQs</h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          ></div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              How much will a Kashmir trip cost?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              The cost of Kashmir package typically ranges between INR 17,000 to
              INR 40,000 per person for a 5-day trip. This cost varies according
              to the accommodation type, transportation, season, and included
              activities. Expenses generally include local travel, hotel stays,
              meals, entry fees for attractions, and extra activities like
              shikara rides. Peak seasons may see higher prices. Furthermore,
              additional expenses for shopping and insurance should also be
              considered, with the total cost dependent on personal choices and
              travel style
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How can I go to Kashmir on a low budget
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              To visit Kashmir on a low budget, choose a{" "}
              <strong>Jammu Kashmir holiday package</strong> from Thrillophilia,
              known for affordable yet enriching travel experiences. The
              packages often include budget-friendly accommodations,
              cost-effective transportation options, and well-planned
              itineraries that cover major attractions efficiently. The approach
              ensures a memorable trip and keeps expenses in check, offering an
              excellent value-for-money experience in the stunning landscapes of
              Kashmir. though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          width: "60%",
          margin: "30px auto 0 auto",
          borderTop: "1px solid #000000",
        }}
      />
      {/* pohotgal */}
      <div className="d-flex justify-content-center my-3 gap-3">
        <div className="col-md-3 mt-5">
          <div
            className="card border-0 rounded-3 my-3 aos-init aos-animate"
            data-aos="flip-right"
            data-aos-duration="4000"
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
          >
            <img
              className="card-img-top rounded-3"
              src="./images/photo4.JPG"
              alt="Card image"
              style={{ height: "200px" }}
            />
            <div className="card-img-overlay d-flex flex-row justify-content-center align-items-center text-white">
              <h5 className="card-title">Jammu and Kashmir</h5>
              <p className="card-text">Tour Packages</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <div
            className="card border-0 rounded-3 my-3 aos-init aos-animate"
            data-aos="flip-right"
            data-aos-duration="4000"
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
          >
            <img
              className="card-img-top rounded-3"
              src="./images/photo4.JPG"
              alt="Card image"
              style={{ height: "200px" }}
            />
            <div className="card-img-overlay d-flex flex-row justify-content-center align-items-center text-white">
              <h5 className="card-title">Jammu and Kashmir</h5>
              <p className="card-text">Tour Packages</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <div
            className="card border-0 rounded-3 my-3 aos-init aos-animate"
            data-aos="flip-right"
            data-aos-duration="4000"
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
          >
            <img
              className="card-img-top rounded-3"
              src="./images/photo4.JPG"
              alt="Card image"
              style={{ height: "200px" }}
            />
            <div className="card-img-overlay d-flex flex-row justify-content-center align-items-center text-white">
              <h5 className="card-title">Jammu and Kashmir</h5>
              <p className="card-text">Tour Packages</p>
            </div>
          </div>
        </div>
      </div>
      {/* second last */}
      <div className="container row mx-auto my-5">
        <p className="fs-4 fw-bold text-secondary">
          Why Choose Joy Tour & Travels
        </p>
        <div
          className="col-md-3 col-5 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="4000"
        >
          <img
            src="./images/clone84.avif"
            className="card-img-top"
            alt="..."
            style={{ width: "40%" }}
          />
          <div className="card-body text-muted">
            <h5 className="fw-semibold">10 Million+</h5>
            <p className="card-text text-wrap">
              Happy customers from 65+ countries all around.
            </p>
          </div>
        </div>
        <div
          className="col-md-3 col-5 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="4000"
        >
          <img
            src="./images/clone85.avif"
            className="card-img-top"
            alt="..."
            style={{ width: "40%" }}
          />
          <div className="card-body text-muted">
            <h5 className="fw-semibold">4.6 / 5.0</h5>
            <p className="card-text text-wrap">
              Cumulative ratings of our trips across platforms.
            </p>
          </div>
        </div>
        <div
          className="col-md-3 col-5 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="4000"
        >
          <img
            src="./images/clone86.avif"
            className="card-img-top"
            alt="..."
            style={{ width: "40%" }}
          />
          <div className="card-body text-muted">
            <h5 className="fw-semibold">Curated with love</h5>
            <p className="card-text text-wrap">
              Expert-guided trips with meticulous planning.
            </p>
          </div>
        </div>
        <div
          className="col-md-3 col-5 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="4000"
        >
          <img
            src="./images/clone87.avif"
            className="card-img-top"
            alt="..."
            style={{ width: "40%" }}
          />
          <div className="card-body text-muted">
            <h5 className="fw-semibold">24*7 Support</h5>
            <p className="card-text text-wrap">
              We are always there to help you pre, post and on the trip.
            </p>
          </div>
        </div>
      </div>
      {/* lastfooter */}
      <div
        class="d-flex justify-content-center px-5"
        style={{ backgroundColor: "#2F343C", color: "#AEAFAF", height: "auto" }}
      >
        <div class="row w-100 text-center px-5 py-5">
          <div class="col-md-3 line my-1"></div>
          <div class="col-md-4 my-1">
            <img
              id="fff"
              src="./images/logo.png"
              alt=""
              style={{ width: "170px" }}
            />
          </div>
          <div class="col-md-3 line my-1"></div>
          <div class="col-md-12 text-center my-2 ">
            <div class="row mx-auto text-center w-100">
              <a
                href="http://facebook.com"
                target="_blank"
                class="text-decoration-none col-md-3 col-3 my-1"
              >
                <i
                  class="fab fa-facebook rounded-circle px-1 py-1 fs-4"
                  style={{ color: "#2f343c", backgroundColor: "#B7B7B7" }}
                ></i>
              </a>
              <a
                href="http://instagram.com"
                target="_blank"
                class="text-decoration-none col-md-3 col-3 my-1"
              >
                <i
                  class="fab fa-instagram rounded-circle px-1 py-1 fs-4"
                  style={{ color: "#2f343c", backgroundColor: "#B7B7B7" }}
                ></i>
              </a>
              <a
                href="http://twitter.com"
                target="_blank"
                class="text-decoration-none col-md-3 col-3 my-1"
              >
                <i
                  class="fab fa-twitter rounded-circle px-1 py-1 fs-4"
                  style={{ color: "#2f343c", backgroundColor: "#B7B7B7" }}
                ></i>
              </a>
              <a
                href="http://linkedin.com"
                target="_blank"
                class="text-decoration-none col-md-3 col-3 my-1"
              >
                <i
                  class="fab fa-linkedin rounded-circle px-1 py-1 fs-4"
                  style={{ color: "#2f343c", backgroundColor: "#B7B7B7" }}
                ></i>
              </a>
            </div>
          </div>
          <div class="col-md-12 mt-4">
            <p>©2024 Joy Tour & Travels | All rights reserved.</p>
          </div>
          <div class="col-md-12 text-center text-wrap">
            <p>Designed & Developed By KashTech Solutions.</p>
          </div>
        </div>
      </div>
      {/* finaldiv */}
    </div>
  );
}
