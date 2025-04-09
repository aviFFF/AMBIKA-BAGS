// Navbar.js - Responsive left navigation component
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");

  if (navbarContainer) {
    // Get user info from session storage
    const userString = sessionStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const isAdmin = user && user.role === "admin";

    // Determine if we're in a subpage by checking the URL
    const isSubpage = window.location.pathname.includes('/reports/');
    const basePath = isSubpage ? '../../pages/' : '';
    const logoPath = isSubpage ? '../../public/logo.png' : '../public/logo.png';

    // Create navbar HTML structure
    navbarContainer.innerHTML = `
      <div class="navbar">
        <div class="navbar-header">
        <div class="logo-container">
          <img src="${logoPath}" alt="logo" class="logo">
        </div>
          <button id="navbar-toggle" class="navbar-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav class="navbar-menu">
          <ul>
            <li data-page="dashboard">
              <a href="${basePath}dashboard.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li data-page="vendor">
              <a href="${basePath}vendor.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Suppliers</span>
              </a>
            </li>
            <li data-page="customer">
              <a href="${basePath}customer.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Customers</span>
              </a>
            </li>
            <li data-page="agent">
              <a href="${basePath}agent.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Agents</span>
              </a>
            </li>
            <li data-page="product">
              <a href="${basePath}product.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span>Products</span>
              </a>
            </li>
            <li data-page="inventory">
              <a href="${basePath}inventory.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                <span>Inventory</span>
              </a>
            </li>
            <li data-page="sales">
              <a href="${basePath}sales.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <span>Sales</span>
              </a>
            </li>
            <li data-page="reports">
              <a href="${basePath}reports.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                <span>Reports</span>
              </a>
            </li>
            ${
              isAdmin
                ? `
            <li data-page="users">
              <a href="${basePath}users.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>User Management</span>
              </a>
            </li>
            `
                : ""
            }
          </ul>
        </nav>
        <div class="navbar-footer">
          <div class="user-info">
            <span id="sidebar-user-name" class="user-name">${
              user ? user.username : ""
            }</span>
            <span id="sidebar-user-role" class="user-role">${
              user ? `(${user.role})` : ""
            }</span>
          </div>
          <button id="sidebar-logout-btn" class="logout-btn">Logout</button>
        </div>
      </div>
    `;

    // Handle navbar toggle for mobile devices
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbar = document.querySelector(".navbar");

    if (navbarToggle) {
      navbarToggle.addEventListener("click", function () {
        navbar.classList.toggle("navbar-collapsed");
      });
    }

    // Set active page in navbar
    const currentPage = window.location.pathname.split("/").pop().split(".")[0];
    const activeMenuItem = document.querySelector(
      `[data-page="${currentPage}"]`
    );

    if (activeMenuItem) {
      activeMenuItem.classList.add("active");
    }

    // Add logout functionality to sidebar logout button
    const sidebarLogoutBtn = document.getElementById("sidebar-logout-btn");

    if (sidebarLogoutBtn) {
      sidebarLogoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("user");
        window.location.href = isSubpage ? "../../pages/login.html" : "login.html";
      });
    }
  }
});
