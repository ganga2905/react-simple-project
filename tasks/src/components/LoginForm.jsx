// /* Login Form with Validation 
// a. Create a login form with email and password fields. 
// b. Add validation to check if the inputs are correct (e.g., email format, required 
// fields). */

// import { useState } from "react";




// const LoginForm=()=>{
//     const[email,setEmail]=useState('');
//     const[password,setPassword]=useState('')

//     const[error,setError]=useState('')
//     const[sucess,setSucess]=useState('')

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//           setError("");
//     setSuccess("");

//         if(!email&&!password){
//             setError("plese enter the value")
//             return
//         }
//         setSucess("sucessful")

//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                   <input type="email" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//           <input type="password" placeholder="enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//           <button>submit</button>

//             </form>
//             <h1>{error}</h1>
//             <h1>{sucess}</h1>
          

//         </div>
//     )
// }
// export default LoginForm;
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Check empty fields
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Email format check
    const emailCheck = /\S+@\S+\.\S+/;
    if (!emailCheck.test(email)) {
      setError("Invalid email format");
      return;
    }

    // All good
    setSuccess("Login Successful!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>submit</button>
      </form>

      <h1 style={{ color: "red" }}>{error}</h1>
      <h1 style={{ color: "green" }}>{success}</h1>
    </div>
  );
};

export default LoginForm;
