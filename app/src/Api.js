import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const BASE_API = 'https://api.b7web.com.br/devbarber/api';
export default{
    checkToken: async(token)=>{
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method:'POST',
            header:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;

    },

    SignIn: async(email, password)=>{
        const req = await fetch(`${BASE_API}/auth/login`, {
            method:'POST',
            header:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;

    },

    SignUp: async(name, email, password)=>{
        const req = await fetch(`${BASE_API}/auth/user`, {
            method:'POST',
            header:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email, password})
        });
        const json = await req.json();
        return json;

    }
}