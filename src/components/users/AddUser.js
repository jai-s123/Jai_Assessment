import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    dob:"",
    website: ""
  });

  const { name, username, email, phone,dob, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="row">
                <div className="col-lg-6 mb-3">
                    <label>Name</label>
                    <input type="text" name="name" value={name}
              onChange={e => onInputChange(e)} className="form-control bg-light" required />
                </div>
                <div className="col-lg-6 mb-3">
                    <label>Username</label>
                    <input type="text" name="username" value={username}
              onChange={e => onInputChange(e)} className="form-control bg-light" required />
                </div>
            </div>
        <div className="row">
                <div className="col-lg-6 mb-3">
                    <label>E-mail</label>
                    <input type="text" name="email" value={email}
              onChange={e => onInputChange(e)} className="form-control bg-light" required />
                </div>
                <div className="col-lg-6 mb-3">
                    <label>Phone</label>
                    <input type="text" name="phone" value={phone}
              onChange={e => onInputChange(e)} className="form-control bg-light" required />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-3">
                    <label>Date of Birth</label>
                    <input type="text" name="dob" value={dob}
              onChange={e => onInputChange(e)} className="form-control bg-light"  required/>

                </div>
                <div className="col-lg-6 mb-3">
                    <label>Permanent Address</label>
                    <input type="text" name="addr" className="form-control bg-light" required />

                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-3">
                    <label>City</label>
                    <input type="text" name="city"className="form-control bg-light"  required/>
                </div>

                <div className="col-lg-6 mb-3">
                    <label>State</label>
                    <input type="text" name="state"className="form-control bg-light" required />
                </div>

            </div>

            <div className="row">
                <div className="col-lg-6 mb-3">
                    <label>Zipcode</label>
                    <input type="text" name="zcode"className="form-control bg-light" required />
                </div>

                <div className="col-lg-6 mb-3">
                    <label>Website</label>
                    <input type="text" name="website" value={website}
              onChange={e => onInputChange(e)} className="form-control bg-light" required />


                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <label>Photo</label>
                    <input type="file" name="pic"className="form-control bg-light" required />
                </div>
            </div>
          
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
