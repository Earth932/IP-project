import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Body_Two.css";
import "../Css/Button.css";
import "../Css/Font.css";
import "../Css/Login.css";
import Navbar from "./Navbar_Login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  axios.defaults.withCredentials = true;

  const login = () => {
    axios.post("http://localhost:1000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data.auth) {
          setLoginStatus(false);
        } else {
          localStorage.setItem("token", response.data.token); 
          setLoginStatus(true);
        }
      });
  };

  useEffect(() => {
    axios.get("http://localhost:1000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.users[0].password);
      }
    });
  }, []);

  const userAuthenticated = () => {
    axios.get("http://localhost:1000/auth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="Register">
      <Navbar />
      <div className="split left">
        <section className="h-200 d-flex justify-content-center flex-column min-vh-100 align-items-center banner">
          <div className="container h-200">
            <div className="row justify-content-sm-center h-200 justify-content-center align-items-center">
              <div className="col-xl-6">
                <div className="card mb-4">
                  <h5 className="card-header">ข้อมูลผู้ใช้</h5>
                  <div className="card-body">
                    <form
                      className="justify-content-center align-items-center"
                    >
                      <div className="mb-4">
                        <label className="mb-3 text-muted">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        ></input>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2 w-100">
                          <label className="text-muted">
                            รหัสผ่าน
                          </label>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        ></input>
                      </div>

                      <div className="text-center">
                        <button className="cbutton" onClick={login}>
                          <span>เข้าสู่ระบบ</span>
                        </button>
                      </div>
                      <div className="divider d-flex align-items-center my-4">
                        <a className="text-center mx-3 mb-0 text-muted">หรือ</a>
                      </div>
                    </form>
                  </div>
                  {loginStatus && (
                    <button onClick={userAuthenticated}>Check</button>
                  )}
                  <div className="card-footer border-0 footer">
                    <div className="text-center">
                      <a>ยังไม่มีบัญชีผู้ใช้? </a>
                      <a className="link" href="Register">
                        ลงทะเบียน
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="split right"></div>
    </div>
  );
}

export default Login;
