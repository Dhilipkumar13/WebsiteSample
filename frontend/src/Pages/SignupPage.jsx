import React from 'react'
import { Link } from 'react-router';


function SignupPage() {
  return (
    <div><div className='loginpage'>
    <div className="loginblock">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <label for="cpsw"><b>Confirm Password</b></label>
    <input type="confirmpassword" placeholder="Confirm Password" name="cpsw" required />

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
    <div className="navlogin">
        Already have an account?<Link to="/login">login here</Link> 
    </div>
  </div>
  </div></div>
  )
}

export default SignupPage