import Logo from "../Images/Logo_Pic.png";
import "../Css/Navigation.css";
import "../Css/Font.css";

function Navbar_Logout() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <div className="container-fluid">
        <a className="navbar-brand logo links">
          <img src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav_link links"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item hover-underline-animation">
              <a className="nav-link active" aria-current="page" href="/">
                หน้าหลัก
              </a>
            </li>
            <li className="nav-item hover-underline-animation">
              <a className="nav-link active" aria-current="page" href="Profile">
                โปรไฟล์
              </a>
            </li>
            <li className="nav-item hover-underline-animation">
              <a className="nav-link active" aria-current="page" href="Subject">
                ผลงาน
              </a>
            </li>
            <li className="nav-item hover-underline-animation">
              <a className="nav-link active" aria-current="page" href="Question">
                คำถาม
              </a>
            </li>
            <li className="nav-item hover-underline-animation">
              <a className="nav-link active" aria-current="page" href="Pdf">
                pdf
              </a>
            </li>
          </ul>
          <form className="d-flex navbar navbar-expand-lg navbar-light bg-light">
            <li className="nav-item hover-underline-animation">
              <a className="nav-link sign lr" href="Login">
                เข้าสู่ระบบ
              </a>
            </li>
            <div className="clsVertical"></div>
            <li className="nav-item hover-underline-animation">
              <a className="nav-link sign lr" href="Register">
                ลงทะเบียน
              </a>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_Logout;
