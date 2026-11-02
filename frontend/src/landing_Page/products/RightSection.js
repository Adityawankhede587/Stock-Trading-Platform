import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-5">
      <div className="row flex-nowrap align-items-center">

        {/* Content */}
        <div className="col-7 p-2 p-lg-5">
          <h1 className="mb-4">{productName}</h1>

          <p className="text-muted fs-5 mb-4">
            {productDescription}
          </p>

          <a
            href={learnMore}
            className="text-decoration-none"
          >
            Learn More <span className="ms-1">→</span>
          </a>
        </div>

        {/* Image */}
        <div className="col-5 p-2 p-lg-5 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;