import { useRef, useState } from "react";

import https from "../../services/https/index";

const Login = ({setToken}) => {
  const [hasError, setHasError] = useState(false);

  const loginInput = useRef(null);
  const passInput = useRef(null);

  const onLogin = (e) => {
    e.preventDefault();
    https.post("/login", {
      email: loginInput.current.value,
      password: passInput.current.value,
    })
    .then((res) => {
        setToken(res.data.token)
        window.localStorage.setItem('token', res.data.token)    
    })
    .catch(() => {
        setHasError(true)
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">
              <h2>Login Page</h2>
            </div>
            <div className="card-body">
              {hasError ? (
                <div className="alert alert-danger" role="alert">
                    Login or Password is wrong
                  {/* login yoki parol hato kiritdingiz */}
                </div>
              ) : (
                <></>
              )}
              <form onSubmit={onLogin}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    ref={loginInput}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  {/* <div id="emailHelp" className="form-text">  bu qismni chopib yubordi kerak emas deb  
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    ref={passInput}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check"></div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;
