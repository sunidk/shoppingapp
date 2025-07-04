import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("./Footer"));

function Profile() {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                      className="rounded-circle img-fluid"
                      width="210px"
                      alt="Profile"
                    />
                  </div>
                  <h4 className="mb-3">Sunil</h4>
                  <NavLink to={"/products"}>
                    <button
                      type="button"
                      className="btn btn-dark btn-rounded btn-lg"
                    >
                      Shop Now
                    </button>
                  </NavLink>
                  <div className="d-flex justify-content-between text-center mt-3 mb-2">
                    <div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1008/1008010.png"
                        width="23px"
                        alt="Orders"
                      />
                      <button className="btn btn-outline-dark mt-2">
                        My Orders
                      </button>
                    </div>
                    <div className="px-3">
                      <NavLink to={"/cart"}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                          width="23px"
                          alt="Cart"
                        />
                        <button className="btn btn-outline-dark mt-2">
                          My Cart
                        </button>
                      </NavLink>
                    </div>
                    <div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/482/482541.png"
                        width="23px"
                        alt="Wallet"
                      />
                      <button className="btn btn-outline-dark mt-2">
                        My Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Profile;
