import Logo from "../Images/Logo_Pic.png";
import "../Css/Navigation.css"
import "../Css/Font.css"

const Navbar = () => {
    return (  
        <nav class="navbar navbar-expand-lg navbar-light bg-light header">
        <div class="container-fluid">
          <a class="navbar-brand logo links" href="/">
            <img src={Logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav_link links"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item hover-underline-animation">
                <a class="nav-link active" aria-current="page"href="/">
                  หน้าหลัก
                </a>
              </li>
              <li class="nav-item hover-underline-animation">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/Profile"
                >
                  โปรไฟล์
                </a>
              </li>
              <li class="nav-item hover-underline-animation">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/Subject"
                >
                  ผลงาน
                </a>
              </li>
              <li class="nav-item hover-underline-animation">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/Question"
                >
                  คำถาม
                </a>
              </li>
              <li class="nav-item hover-underline-animation">
                <a class="nav-link active" aria-current="page" href="/Pdf">
                  pdf
                </a>
              </li>
            </ul>
            <form class="d-flex navbar navbar-expand-lg navbar-light bg-light">
              <li class="nav-item hover-underline-animation">
                <a class="nav-link sign lr" href="/Login">
                  เข้าสู่ระบบ
                </a>
              </li>
              <div class="clsVertical"></div>
              <li class="nav-item hover-underline-animation">
                <a class="nav-link sign lr" href="/Register">
                  ลงทะเบียน
                </a>
              </li>
            </form>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;