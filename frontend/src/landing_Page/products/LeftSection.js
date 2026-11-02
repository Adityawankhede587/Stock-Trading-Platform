import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googglePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row flex-nowrap align-items-center p-3 p-lg-5">

        {/* Image */}
        <div className="col-5 p-2 p-lg-5">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Content */}
        <div className="col-7 p-2 p-lg-5 mt-0 mt-lg-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div>
            <a
              href={tryDemo}
              className="text-decoration-none"
            >
              Try Demo
            </a>

            <a
              href={learnMore}
              className="text-decoration-none ms-4"
            >
              Learn More
            </a>
          </div>

          <div className="mt-3 d-flex gap-2">
            <a href={googglePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;