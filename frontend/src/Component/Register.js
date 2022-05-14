import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Css/Body_One.css";
import "../Css/Button.css";
import "../Css/Font.css";
import "../Css/Resgister.css";
import "../Css/Profile.css";
import Navbar from "./Navbar_Login";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [id_card, setid_card] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [sub_district, setSub_district] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [tel, setTel] = useState("");
  const [users, setUsers] = useState([]);

  const addUsers = () => {
    axios
      .post("http://localhost:1000/register", {
        firstname: firstname,
        lastname: lastname,
        id_card: id_card,
        email: email,
        password: password,
        address: address,
        sub_district: sub_district,
        district: district,
        province: province,
        postal_code: postal_code,
        tel: tel,
      })
      .then(() => {
        setUsers([
          ...users,
          {
            firstname: firstname,
            lastname: lastname,
            id_card: id_card,
            email: email,
            password: password,
            address: address,
            sub_district: sub_district,
            district: district,
            province: province,
            postal_code: postal_code,
            tel: tel,
          },
        ]);
      });
  };

  return (
    <div className="Register">
      <Navbar />
      <div className="d-flex justify-content-center flex-column align-items-center mtf banner">
        <div className="col-xl-5">
          <div className="card mb-4">
            <h5 className="card-header">สมัครบัญชีผู้ใช้</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label
                    className="small text-muted"
                    htmlFor="email"
                    required
                    autoFocus
                  >
                    อีเมล
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  ></input>
                  <div className="invalid-feedback">อีเมลไม่ถูกต้อง</div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="password" required>
                      รหัสผ่าน
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    ></input>
                    <div className="invalid-feedback">รหัสผ่านไม่ถูกต้อง</div>
                  </div>

                  <div className="col-md-6">
                    <label className="small text-muted">
                      ยืนยันรหัสผ่าน
                    </label>
                    <input
                      id="cpassword"
                      type="cpassword"
                      className="form-control"
                      required
                    ></input>
                    <div className="invalid-feedback">รหัสผ่านไม่ถูกต้อง</div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="firstname">
                      ชื่อ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setFirstname(event.target.value);
                      }}
                    ></input>
                  </div>

                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="lastname">
                      นามสกุล
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setLastname(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="tel">
                      หมายเลขโทรศัพท์
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setTel(event.target.value);
                      }}
                    ></input>
                  </div>

                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="id_card">
                      เลขประจำตัวประชาชน
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setid_card(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small text-muted" htmlFor="address">
                    ที่อยู่
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  ></input>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="province">
                      จังหวัด
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setProvince(event.target.value);
                      }}
                    ></input>
                  </div>

                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="postal_code">
                      รหัสไปรษณีย์
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setPostal_code(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="district">
                      ตำบล/แขวง
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setDistrict(event.target.value);
                      }}
                    ></input>
                  </div>

                  <div className="col-md-6">
                    <label className="small text-muted" htmlFor="sub_district">
                      อำเภอ/เขต
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setSub_district(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="text-center">
                  <button className="cbutton" onClick={addUsers}>
                    <span>ลงทะเบียน</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
