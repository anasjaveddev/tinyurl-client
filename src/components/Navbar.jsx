const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="TinyURL Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Domains</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>

      <div className="nav-auth">
        <a href="#" className="login">
          Log In
        </a>
        <a href="#" className="signup-btn">
          Sign Up
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
