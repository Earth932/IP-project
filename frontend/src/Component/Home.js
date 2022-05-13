import React from "react";
import "../Css/Body_Two.css";
import "../Css/Button.css";
import "../Css/Font.css";

function Home() {

  return (
    
    <div className="Home">
      <div class="split left">
        <div class="d-flex justify-content-center flex-column min-vh-100 align-items-center banner">
          <div class="col-md-9 text">
            <h1>ระบบตรวจสอบทรัพย์สินทางปัญญาและตัวช่วยในการจดทะเบียน</h1>
            <p class="text">
              เว็บไซต์ที่ช่วยในการตรวจสอบประเภทผลงานของผู้ใช้
              ตรวจสอบคุณสมบัติในการจดทะเบียนของผลงานและตัวช่วยในการจดทะเบียนและบันทึกข้อมูลของผลงานผู้ใช้ไว้ในระบบ
            </p>
            <form action="/register">
              <button class="cbutton">
                <span>เริ่มต้นใช้งาน</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="split right"></div>

    </div>
  );
}

export default Home;
