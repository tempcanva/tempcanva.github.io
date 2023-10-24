function ReturningCustomers() {
  return (
    <div className="mt-3 mx-4">
      <div className="customer d-flex justify-content-between align-items-center">
        <div className="customer-info d-flex align-items-center">
          <img
            src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
            alt=""
            class="customer-circle "
          ></img>
          <div className="customer-info d-grid px-2">
            <span className="customer-title">John Doe</span>
            <span>j.doe@gmail.com</span>
          </div>
        </div>
        <a className="customer-mail">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default ReturningCustomers;
