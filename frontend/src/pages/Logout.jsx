const { useEffect } = require("react")

const Logout  = () => {
    useEffect(()=> {
        const logUserOut = async () => {
            const res = await fetch ("https://animated-dollop-r4p96pw567g6356v9.github.dev/auth/logout"),
            
        }
        logUserOut()
    },[])
}

export default Logout