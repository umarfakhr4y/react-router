import React from "react";
import { Input, Button } from "../../Property/Form";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4 p-4">
          <h4>login user</h4>
          <form>
            <Input label="Email Address" className="form-control" />
            <Input label="Password" className="form-control" />
            <p className="font-weight-lighter">
              Belum punya akun? Daftar <Link to="/register">disini</Link>
            </p>
            <Button className="btn btn-success" label={"Login"} />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
