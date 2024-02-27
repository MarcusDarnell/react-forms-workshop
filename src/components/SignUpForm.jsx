import { useState } from 'react';

const SignUpForm = ({ setToken }) => {   
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit(event) {
    event.preventDefault();
    const payload = {
        username,
        password
     }
    try { const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup/',
      {
         method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(payload)
     
    })   
    const json = await response.json()
        console.log(json)
      setToken(json.token)
    } catch (error) {
       setError(error.message)

    }
}

    return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>    
    </form>
    </>
    );
}
export default SignUpForm