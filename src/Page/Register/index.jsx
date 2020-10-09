import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Input, Button } from "../../Property/Form";
import { config } from "../../config";
import Navbar from "../Navbar";

const Register = (props) => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    Post();
  };

  const Post = async () => {
    const url = `${config.api_host}/register`;
    const payload = {
      email: email,
      password: password
    };
    console.log(url);
    console.log(payload);
    try {
      let response = await Axios.post(url, payload);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      props.history.push("/");
    } catch {
      console.log("Gagal");
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4 p-4">
          <h4>Registrasi akun</h4>
          <form onSubmit={onSubmit} action="">
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    label="Email Address"
                    className="form-control"
                  />
                  <Input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    label="Password"
                    className="form-control"
                  />
                  <p className="font-weight-lighter">
                    Sudah punya akun? Login <Link to="/login">disini</Link>
                  </p>
                  <Button className="btn btn-success" label={"Register"} />
                </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
