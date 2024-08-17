import http from '../http-common';

const register=async (data)=>{
    return await http.post('/auth/register',data)
}
const login=async (data)=>{
    return await http.post('/auth/login',data)
}

const AuthService={
    register,login
}
export default AuthService;