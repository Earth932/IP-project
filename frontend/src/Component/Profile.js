import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Css/Body_One.css";
import "../Css/Button.css";
import "../Css/Font.css";
import "../Css/Resgister.css";
import "../Css/Profile.css";

function Profile() {

  const [Newfirstname, setNewFirstname] = useState("");
  const [Newlastname, setNewLastname] = useState("");
  const [Newid_card, setNewid_card] = useState("");
  const [Newaddress, setNewAddress] = useState("");
  const [Newsub_district, setNewSub_district] = useState("");
  const [Newdistrict, setNewDistrict] = useState("");
  const [Newprovince, setNewProvince] = useState("");
  const [Newpostal_code, setNewPostal_code] = useState("");
  const [Newbirthdate, setNewBirthdate] = useState("");
  const [Newtel, setNewTel] = useState("");
  const [Newfax, setNewFax] = useState("")
  const [users, setUsers] = useState([]);

  const updateUsers = (id) => {
    axios.put("http://localhost:4000/update", { id: id, firstname: Newfirstname, lastname: Newlastname, id_card: Newid_card, address: Newaddress, sub_district: Newsub_district, district: Newdistrict, province: Newprovince, postal_code: Newpostal_code, birthdate: Newbirthdate, tel: Newtel, fax: Newfax })
    .then((response) => {
      setUsers(
        users.map((val) => {
          return val.id == id ? {
            id: val.id,
            firstname: Newfirstname,
            lastname: Newlastname,
            id_card: Newid_card,
            address: Newaddress,
            sub_district: Newsub_district,
            district: Newsub_district,
            province: Newprovince,
            postal_code: Newpostal_code,
            birthdate: Newbirthdate,
            tel: Newtel,
            fax: Newfax
          } : val;
        })
      )
    })
  };

  return (

    <div className="Profile">
      <div class="d-flex justify-content-center flex-column align-items-center mtf banner">
        <div class="col-xl-5">
          <div class="card mb-4">
          <h5 class="card-header">ข้อมูลผู้ใช้</h5>
            <div class="card-body">
                
              <form>
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
                        setNewFirstname(event.target.value);
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
                        setNewLastname(event.target.value);
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
                        setNewBirthdate(event.target.value);
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
                        setNewid_card(event.target.value);
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
                      setNewAddress(event.target.value);
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
                        setNewProvince(event.target.value);
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
                        setNewPostal_code(event.target.value);
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
                        setNewDistrict(event.target.value);
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
                        setNewSub_district(event.target.value);
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
                        setNewTel(event.target.value);
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
                        setNewFax(event.target.value);
                      }}
                    ></input>
                  </div>

                </div>
                <div class="text-center">
                  <button class="cbutton" onClick={() => {updateUsers(this.id)}}>
                    <span>บันทึก</span>
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

export default Profile;
