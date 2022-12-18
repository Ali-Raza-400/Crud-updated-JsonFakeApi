import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const View = () => {
  const [user, setUser] = useState([]);
  const getUserApi = async () => {
   await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
    // setUser(response.data)
  };
  const deleteApi=async(id)=>{
    // console.log(id,"id is")
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(()=>{
        setUser((previousState) => {
            return previousState.filter((e) => e.id !== id);})
    }).catch((err)=>{
        console.log(err.message,"error we get")
    })
  }
  useEffect(() => {
    getUserApi();
  }, []);
  return (
    <div>
      <h1>Listing Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users, index) => {
            return (
              <tr key={index}>
                <th scope="row">{users.id}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.website}</td>
                <tr>    <button type="button" class="btn btn-info"><NavLink to={`update/${users.id}`}>Update</NavLink></button><span style={{marginRight:"10px"}}></span></tr>
              <tr><button type="button" class="btn btn-danger" onClick={()=>deleteApi(users.id)} >Delete</button></tr>  
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default View;
