import { useState } from "react"

function Login () {
    const [username, setUsername] =  useState('')
    const [password, setPassword] =  useState('')

//    const[data, setData] =  useState({username: '', password: ''})

    function handleForm(event) {
        event.preventDefault()
    

    const userData = {
        username,
        password,
    }

    alert(JSON.stringify(userData))
    }


    return(
        <form onSubmit={handleForm}>
            <h1>Login form</h1>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">Login</button>
        </form>
        
    )
}
export default Login