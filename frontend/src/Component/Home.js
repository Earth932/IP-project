import React from "react";
import "../Css/Body_Two.css";
import "../Css/Button.css";
import "../Css/Font.css";
import Navbar from "./Navbar_Login";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="split left">
        <div className="d-flex justify-content-center flex-column min-vh-100 align-items-center banner">
          <div className="col-md-9 text">
            <h1>ระบบตรวจสอบทรัพย์สินทางปัญญาและตัวช่วยในการจดทะเบียน</h1>
            <p className="text">
              เว็บไซต์ที่ช่วยในการตรวจสอบประเภทผลงานของผู้ใช้
              ตรวจสอบคุณสมบัติในการจดทะเบียนของผลงานและตัวช่วยในการจดทะเบียนและบันทึกข้อมูลของผลงานผู้ใช้ไว้ในระบบ
            </p>
            <form action="/login">
              <button className="cbutton">
                <span>เริ่มต้นใช้งาน</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="split right"></div>
    </div>
  );
}

export default Home;
