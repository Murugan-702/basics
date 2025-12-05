import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        username:"",
        email :"",
        password:""
    });
    const onSubmit = (e:any) =>{
        e.preventDefault();
         console.log(formData)
         navigate("/video")
    }
  return (
    <div className="login">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
        <div className="input">
          <input type="text" placeholder="Enter Username" name="username" value={formData.username} onChange={(event) =>setFormData({...formData,username:event?.target.value})}/>
        </div>
        <div className="input">
          <input type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={(event) =>setFormData({...formData,email:event?.target.value})}/>
        </div>
        <div className="input">
          <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={(event) =>setFormData({...formData,password:event?.target.value})} />
        </div>
        <button className="btn" type="submit">Login</button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
