import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Css/Body_One.css";
import "../Css/Button.css";
import "../Css/Font.css";
import "../Css/Resgister.css";
import "../Css/Profile.css";

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
  const [birthdate, setBirthdate] = useState("");
  const [tel, setTel] = useState("");
  const [fax, setFax] = useState("")
  const [users, setUsers] = useState([]);

  const addUsers = () => {
    axios
      .post("http://localhost:4000/create", {
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
        birthdate: birthdate,
        fax: fax,
        tel: tel
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
            birthdate: birthdate,
            fax: fax,
            tel: tel,
          },
        ]);
      });
  };

  return (
    <div className="Register">

      <div class="d-flex justify-content-center flex-column align-items-center mtf banner">
        <div class="col-xl-5">
          <div class="card mb-4">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label
                    class="small mb-1"
                    htmlFor="email"
                    className="form-label"
                    required autofocus
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
                  <div class="invalid-feedback">อีเมลไม่ถูกต้อง</div>
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="password"
                      className="form-label"
                      required 
                    >
                      รหัสผ่าน
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    ></input>
                    <div class="invalid-feedback">รหัสผ่านไม่ถูกต้อง</div>
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="cpassword">
                      ยืนยันรหัสผ่าน
                    </label>
                    <input
                      id="cpassword"
                      type="cpassword"
                      class="form-control"
                      name="cpassword"
                      required
                    ></input>
                    <div class="invalid-feedback">รหัสผ่านไม่ถูกต้อง</div>
                  </div>
                </div>

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="firstname"
                      className="form-label"
                    >
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

                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="lastname"
                      className="form-label"
                    >
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

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="birthdate"
                      className="form-label"
                    >
                      วันเกิด
                    </label>
                    <input
                      type="text"
                      data-provide="datepicker"
                      data-date-language="th-th"
                      className="form-control"
                      onChange={(event) => {
                        setBirthdate(event.target.value);
                      }}
                    ></input>
                  </div>

                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="id_card"
                      className="form-label"
                    >
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
                <div class="mb-3">
                  <label
                    class="small mb-1"
                    htmlFor="address"
                    className="form-label"
                  >
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

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="province"
                      className="form-label"
                    >
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

                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="postal_code"
                      className="form-label"
                    >
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

                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="district"
                      className="form-label"
                    >
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

                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="sub_district"
                      className="form-label"
                    >
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

                <div class="row gx-3 mb-3">

                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="tel"
                      className="form-label"
                    >
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

                  <div class="col-md-6">
                    <label
                      class="small mb-1"
                      htmlFor="fax"
                      className="form-label"
                    >
                      โทรสาร
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setFax(event.target.value);
                      }}
                    ></input>
                  </div>

                </div>
                <div class="text-center">
                  <button class="cbutton" onClick={addUsers}>
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
