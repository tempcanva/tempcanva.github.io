import ReturningCustomers from "../components/Dashboard/ReturningCustomers";
import MonthlyStats from "../components/Dashboard/MonthlyStats";

function Dashboard() {
  return (
    <main id="main" class="main">
      <section class="section dashboard">
        <div class="row">
          {/* Left Side */}
          <div class="col-lg-8">
            <div class="row">
              {/* sales cards */}
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Sales <span>| Today</span>
                    </h5>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div class="ps-3">
                        <h6>145</h6>
                        <span class="text-success small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                      <div class="card-icon rounded-square d-flex align-items-center justify-content-center">
                        <i class="bi bi-cart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* revenue cards */}
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Appointments <span>| This Month</span>
                    </h5>

                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div class="ps-3">
                        <h6>135</h6>
                        <span class="text-success small pt-1 fw-bold">
                          8%
                        </span>{" "}
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                      <div class="card-icon rounded-square d-flex align-items-center justify-content-center">
                        <i class="bi bi-calendar3"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* customers cards */}
              <div class="col-xxl-4 col-xl-12">
                <div class="card info-card customers-card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Customers <span>| This month</span>
                    </h5>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div class="ps-3">
                        <h6>1244</h6>
                        <span class="text-danger small pt-1 fw-bold">
                          12%
                        </span>{" "}
                        <span class="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                      <div class="card-icon rounded-square d-flex align-items-center justify-content-center">
                        <i class="bi bi-people"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Appointments */}
              <div class="col-12">
                <div class="card recent-sales overflow-auto">
                  <MonthlyStats />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-between">
                  Returning Customers{" "}
                  <span className="badge">
                    <i class="bi bi-people"></i> 36
                  </span>
                </h5>
                <div className="returningCutomers">
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                  <ReturningCustomers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
