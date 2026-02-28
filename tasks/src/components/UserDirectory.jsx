// /*User Directory App (using https://jsonplaceholder.typicode.com/users) 
// a. Fetch user data from the provided API. 
// b. Display a list of users with their details (like name, email, and phone). 
// c. Optionally, you can include a search feature to filter users. */
// import { useEffect, useState } from "react";
// import axios from "axios";

// import { useEffect, useState } from "react";

// const UserDirectory = () => {
//   const [users, setUsers] = useState([]);       // API data store
//   const [search, setSearch] = useState("");     // Search text

//   // Fetch API using Axios
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   }, []);

//   // Filter based on search
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>User Directory (Axios Method)</h2>

//       {/* Search Box */}
//       <input
//         type="text"
//         placeholder="Search by name…"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* User List */}
//       <ul>
//         {filteredUsers.map((user) => (
//           <li key={user.id}>
//             <h3>{user.name}</h3>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserDirectory;


// // import { useEffect, useState } from "react";
// // import axios from "axios";


// // const UserDirectory=()=>{

// //     const[user,setUser]=useState([])
    
// //     useEffect(()=>{
// //         axios.get("https://jsonplaceholder.typicode.com/users")
// //         .then(res=>setUser(res.data))
// //         .catch(err=>console.log(err)
// //         )

// //     })

// //     return(
// //         <div>
// //             {
// //                 user.map((u)=>(
// //                     <li key={u.id}>{u.name}</li>
// //                 ))
// //             }

// //         </div>
// //     )
// // }
// // export default UserDirectory;















































































// // import { useEffect, useState } from "react";
// // // import axios from "axios";

// // const UserDirectory=()=>{

// //     const[user,setUser]=useState([]);

// //     useEffect(()=>{

// //         fetch("https://jsonplaceholder.typicode.com/users")
// //         .then(res=>res.json()
        
// //         )
// //         .then(data=>setUser(data)
// //         )
// //         .catch(err=>console.log(err)
// //         )
// //         // axios.get("https://jsonplaceholder.typicode.com/users")
// //         // .then(res=>setUser(res.data)
        
// //         // )
// //         // .catch(err=>console.log(err)
// //         // )
        


// //     })

// //     return(
// //         <div>
// //             {
// //                 user.map((u)=>(
// //                     <li key={u.id}>{u.name}</li>
// //                 ))
// //             }

// //         </div>
// //     )
// // }
// // export default UserDirectory;
import { useEffect ,useState} from "react";
import axios from 'axios'

const UserDirectory=()=>{
    const [user,setUser]=useState([]);
    const[search,setSearch]=useState('');

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err)
        )
        
    },[])
    const filterUser=user.filter((u)=>(
        u.name.toLowerCase().includes(search.toLowerCase())

    ))

    return(
        <div>
            <input type="text" placeholder="Serachby" value={search} onChange={(e)=>setSearch(e.target.value)}/>

{
    filterUser.map((users)=>(
        <li key={users.id}>{users.name}</li>
    ))
}

        </div>
    )
}
export default UserDirectory;