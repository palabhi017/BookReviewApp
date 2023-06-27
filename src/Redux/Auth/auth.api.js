import axios from "axios"

export const handleSignup = async(payload)=> {
try {
    let res = await axios.post(`https://gifted-fox-sneakers.cyclic.app/user/login`,payload)
    return res.data
} catch (error) {
    console.log(error)
}
}