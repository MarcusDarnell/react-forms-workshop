import { useState } from 'react';
const Authenticate = ({ token }) => {
   const [successMessage, setSuccessMessage] = useState(null);
   const[error, setError] = useState(null);
   async function handleClick() {

    try{ const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate/',
    {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
 })
const json = await response.json()
setSuccessMessage(json.message)
    } catch (error) {
      setError(error.message)
    }
   }
    return (
    <>
     <h2>Athenticate!</h2>
{successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token!</button>
    </>
  )  
}

export default Authenticate