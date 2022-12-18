import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import {Params} from 'react-router-dom'

const Edit = () => {
  const params = useParams();
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const nevigate=useNavigate()
  const onsubmitHandeler = async() => {
    // e.preventDefault();
    // console.log(username, email, website);
    await axios.put(`https://jsonplaceholder.typicode.com/users/${params.id}`,{username,email,website}).then((res)=>{
  console.log(res.data,"😍")
  nevigate('/')
  }).catch(err=>err.message)
  };
  console.log("parmam ke value ye hai", params.id);
  console.log(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  useEffect(() => {
    getApiId();
  }, []);
  const getApiId = async () => {
    console.log("My name is Ali")
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        console.log(res.data, "====<");
        setUsername(res.data.name);
        setEmail(res.data.email);
        setWebsite(res.data.website);
      })
      .catch((err) => {
        console.log(err.message,"This is running");
      });
  };

const submitter=(e)=>{
e.preventDefault()
}
  return (
    <div>
      <form onSubmit={submitter}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onsubmitHandeler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
