import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Css/Body_One.css";
import "../Css/Button.css";
import "../Css/Font.css";
import "../Css/Resgister.css";
import "../Css/Profile.css";
import Navbar from "./Navbar_Logout";

function Profile() {
  const [Newfirstname, setNewFirstname] = useState("");
  const [Newlastname, setNewLastname] = useState("");
  const [Newid_card, setNewid_card] = useState("");
  const [Newaddress, setNewAddress] = useState("");
  const [Newsub_district, setNewSub_district] = useState("");
  const [Newdistrict, setNewDistrict] = useState("");
  const [Newprovince, setNewProvince] = useState("");
  const [Newpostal_code, setNewPostal_code] = useState("");
  const [Newtel, setNewTel] = useState("");
  const [users, setUsers] = useState([]);

  const updateUsers = (id) => {
    axios
      .put("http://localhost:1000/update", {
        id: id,
        firstname: Newfirstname,
        lastname: Newlastname,
        id_card: Newid_card,
        address: Newaddress,
        sub_district: Newsub_district,
        district: Newdistrict,
        province: Newprovince,
        postal_code: Newpostal_code,
        tel: Newtel,
      })
      .then((response) => {
        setUsers(
          users.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  firstname: Newfirstname,
                  lastname: Newlastname,
                  id_card: Newid_card,
                  address: Newaddress,
                  sub_district: Newsub_district,
                  district: Newsub_district,
                  province: Newprovince,
                  postal_code: Newpostal_code,
                  tel: Newtel,
                }
              : val;
          })
        );
      });
  };

  return (
    <div className="Profile">
      <Navbar />
      <div className="d-flex justify-content-center flex-column align-items-center mtf banner">
        <div className="col-xl-5">
          <div className="card mb-4">
            <h5 className="card-header">ข้อมูลผู้ใช้</h5>
            <div className="card-body">
              <form>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="firstname"
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

                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="lastname"
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

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="tel"
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

                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="id_card"
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

                <div className="mb-3">
                  <label
                    className="small mb-1"
                    htmlFor="address"
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

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="province"
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

                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="postal_code"
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

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="district"
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

                  <div className="col-md-6">
                    <label
                      className="small mb-1"
                      htmlFor="sub_district"
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

                <div className="text-center">
                  <button
                    className="cbutton"
                    onClick={() => {
                      updateUsers(this.id);
                    }}
                  >
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
