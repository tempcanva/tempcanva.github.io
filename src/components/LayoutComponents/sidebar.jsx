import { Link } from 'react-router-dom';


function sidebar(){
  const isMobileDevice = () => {
    return window.innerWidth <= 768;
  };

  const handleSidebarToggleMobile = (event) => {      
    if(isMobileDevice()){
      document.body.classList.toggle("toggle-sidebar");    
    } 
  };
    return(
        <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">        
          <li className="nav-item" onClick={handleSidebarToggleMobile}>
            <Link to="/" className="nav-link collapsed">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleSidebarToggleMobile}>
            <Link to="/clients" className="nav-link collapsed">
              <i className="bi bi-people"></i>
              <span>Clients</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleSidebarToggleMobile}>
            <Link to="/appointments" className="nav-link collapsed">
              <i className="bi bi-calendar3"></i>
              <span>Appointments</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleSidebarToggleMobile}>
            <Link to="/approvals" className="nav-link collapsed">
              <i className="bi bi-check2-square"></i>
              <span>For approval</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleSidebarToggleMobile}>
            <Link to="/invoices" className="nav-link collapsed">
              <i className="bi bi-cash-coin"></i>
              <span>Invoices</span>
            </Link>
          </li>
          <li className="nav-item" onClick={handleSidebarToggleMobile}>
            <Link to="/reports" className="nav-link collapsed">
              <i className="bi bi-file-earmark-bar-graph"></i>
              <span>Reports</span>
            </Link>
          </li>   
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li onClick={handleSidebarToggleMobile}>
                <a>
                  <i className="bi bi-circle"></i><span>Appointments</span>
                </a>
              </li>
              <li onClick={handleSidebarToggleMobile}>
                <a>
                  <i className="bi bi-circle"></i><span>Accordion</span>
                </a>
              </li>             
            </ul>
          </li>        
          
        </ul>        
        </aside>
    )
}


export default sidebar;