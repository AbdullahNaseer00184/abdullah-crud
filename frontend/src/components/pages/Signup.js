import React, {useState} from "react";
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();


  
  const saveData = async(e) =>{
    // if(!name || !email || !password){
    //   setErrorMsg(true)
    //   return false
    // }
    e.preventDefault();
    let abcd = await fetch("http://localhost:8080/user",{
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigate('/pages/login')
  }

    return (
        <div>
            <section
                className="vh-100 bg-image"
                style={{
                    backgroundImage:
                        'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
                }}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">
                                            Create an account
                                        </h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control form-control-lg"
                                                    onChange={(e)=>setName(e.target.value)} 
                                                />
                                                <label className="form-label" htmlFor="form3Example1cg">
                                                    Your Name
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form3Example3cg"
                                                    className="form-control form-control-lg"
                                                    onChange={(e)=>setEmail(e.target.value)}
                                                />
                                                <label className="form-label" htmlFor="form3Example3cg">
                                                    Your Email
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form3Example4cg"
                                                    className="form-control form-control-lg"
                                                    onChange={(e)=>setPassword(e.target.value)}
                                                />
                                                <label className="form-label" htmlFor="form3Example4cg">
                                                    Password
                                                </label>
                                            </div>
                                           
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={saveData} type="submit"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">
                                                Have already an account?{" "}
                                                <Link to="/pages/login"> 
                                                <a  className="fw-bold text-body">
                                                    <u>Login here</u>
                                                </a>
                                                </Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signup