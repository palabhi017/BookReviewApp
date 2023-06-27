import axios from "axios"

export const handleSignup = async(payload)=> {
try {
    let res = await axios.post(`http://localhost:8080/user/login`,payload)
    return res.data
} catch (error) {
    console.log(error)
}
}