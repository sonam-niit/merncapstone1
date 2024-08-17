import { useState } from "react";
import AuthService from "../services/authService";
import axios from "axios";

function Register() {
    const [user, setUser] = useState({ name: '', address: '', email: '', password: '' })
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const resp = await axios.post('http://localhost:5000/api/auth/register',user)
            console.log(resp);
            if (resp.status == 201){
                alert("Registered Successfully");
                localStorage.setItem('token',resp.data.token);
            }
        } catch (error) {
            console.log(error);
            
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mt-3" placeholder="name"
                    onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name} />
                <input type="text" className="form-control mt-3" placeholder="address"
                    onChange={(e) => setUser({ ...user, address: e.target.value })} value={user.address} />
                <input type="email" className="form-control mt-3" placeholder="email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
                <input type="password" className="form-control mt-3" placeholder="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} />

                <button className="btn btn-primary mt-3" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;