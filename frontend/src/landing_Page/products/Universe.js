import React from "react";

function Universe() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-normal mb-3">The Zerodha Universe</h1>
        <p className="text-muted fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Products */}
      <div className="row g-4 text-center">

        <div className="col-12 col-md-4">
          <div className="p-4 h-100">
            <img
              src="media/images/smallcaselogo.png"
              className="img-fluid mb-3"
              style={{ maxHeight: "50px" }}
            />
            <p className="text-muted small">
              Thematic investment platform
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="p-4 h-100">
            <img
              src="media/images/streakLogo.png"
              className="img-fluid mb-3"
              style={{ maxHeight: "50px" }}
            />
            <p className="text-muted small">
              Algo trading platform
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="p-4 h-100">
            <img
              src="media/images/sensibullLogo.svg"
              className="img-fluid mb-3"
              style={{ maxHeight: "50px" }}
            />
            <p className="text-muted small">
              Options trading platform
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="p-4 h-100">
            <img
              src="media/images/zerodhafundhouse.png"
              className="img-fluid mb-3"
              style={{ maxHeight: "50px" }}
            />
            <p className="text-muted small">
              Mutual fund investment platform
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="p-4 h-100">
            <img
              src="media/images/dittologo.png"
              className="img-fluid mb-3"
              style={{ maxHeight: "50px" }}
            />
            <p className="text-muted small">
              Insurance platform
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="p-4 h-100">
            <img
              src="media/images/goldenpiLogo.png"
              className="img-fluid mb-3"
              style={{ maxHeight: "50px" }}
            />
            <p className="text-muted small">
              Bond investment platform
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Universe;