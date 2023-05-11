import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
  const empty = {
    email: "",
    password: ""
  }

  // state for handle the login inputs

  const [handle, setHandle] = useState(empty)

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value })
    console.log(handle)
  }


  //function for login
  const loginApi = async () => {
    if (handle.email == "" || handle.password == "") {
      alert("Please Enter the Fields First")
    } else {
      let record = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle)
      })
      record = await record.json()
      if (record.message == "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id)
        sessionStorage.setItem("userEmail", record.LoginUser.email)
        // sessionStorage.setItem("userPassword",record.LoginUser.email)
        let adminemail = sessionStorage.getItem("userEmail")
        // let adminPassword = sessionStorage.getItem("userPassword")
        if (adminemail == "admin@gmail.com") {

          alert("Admin Login Successfully")
          navigate("/cruds/new")
        } else {
          alert("Login Successfully")
          navigate("/cruds/list-view")
        }


      } else {
        alert("Username and Password is invalid")
      }
    }
  }



    return (
        <div>
            <h1 className='text-center'>Login Here</h1>
            <div className='container'>
                <form onSubmit={(e) => {
                e.preventDefault()
              }}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input name='email' onChange={loginHandler} type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">
                            Email address
                        </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <input name='password' onChange={loginHandler} type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">
                            Password
                        </label>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    
                    {/* Submit button */}
                    <button onClick={loginApi} className="btn btn-primary btn-block mb-4">
                        Sign in
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                            No Account? 
                        <Link to="/pages/signup">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login