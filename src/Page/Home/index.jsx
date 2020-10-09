import React from "react";
import Axios from "axios";
import { config } from "../../config.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users?page=1`);
      setList(response.data.data);
    } catch {
      console.log("error");
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <table className="table table-responsive table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Photo</th>
              <th scope="col">Email</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list, index) => (
              <tr key={list.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    height="50"
                    className="rounded-circle"
                    src={list.avatar}
                    alt={list.avatar}
                  />
                </td>
                <td>{list.email}</td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
                <td>
                  <Link to={`/DetailUser/${list.id}`}>
                    <p className="btn btn-outline-primary">Detail</p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Home;
