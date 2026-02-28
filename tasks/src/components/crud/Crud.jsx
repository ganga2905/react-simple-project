// import { useState } from "react"

// const Crud=()=>{

//    const[users,setUsers]=useState([])
//     const [data,setData]=useState({
//         name:'',
//         age:'',
//         email:'',
//         phone:''
//     })

//     const handleChange=(e)=>{
//         const{name,value}=e.target;
//         setData({...data,[name]:value})

//     }

//     const addData=()=>{
//         setUsers([...users,data])
//         setData({
//             name:'',
//             age:"",
//             email:'',
//             phone:''
//         })
//     }

//     return(
//         <div>
//             <div>
//                 <input type="text"
//                 name="name"
//                  placeholder="Enter Name"
//                   value={data.name}
//                    onChange={handleChange}/>
//                 <br/>
//                  <input type="number" 
//                  name='age'
//                  placeholder="Enter age"
//                   value={data.age} 
//                   onChange={handleChange} />
//                      <br/>
//                   <input type="text"
//                    name='email'
//                     placeholder="Enter email"
//                      value={data.email} 
//                      onChange={handleChange}/>
//                       <br/>
//                    <input type="number"
//                     name='phone'
//                      placeholder="Enter phone"
//                       value={data.phone} 
//                       onChange={handleChange}/>
//                       <br/>
//                       <button onClick={addData}>add</button>
//             </div>
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Age</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map((user,index)=>(
//                              <tr key={index}>
//                                 <td>{user.name}</td>
//                                  <td>{user.age}</td>
//                                   <td>{user.email}</td>
//                                    <td>{user.phone}</td>
//                                    <td>
//                                     <button>Edit</button>
//                                     <button>delete</button>
//                                    </td>
//                              </tr>
//                             ))
//                         }
//                     </tbody>

//                 </table>

//             </div>

//         </div>
//     )
// }
// export default Crud


import { useState } from "react";

const Crud = () => {
  const [users, setUsers] = useState([]);

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    phone: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // CREATE & UPDATE
  const addData = () => {
    if (editIndex === null) {
      // CREATE
      setUsers([...users, data]);
    } else {
      // UPDATE
      const updatedUsers = users.map((user, index) =>
        index === editIndex ? data : user
      );
      setUsers(updatedUsers);
      setEditIndex(null);
    }

    setData({
      name: "",
      age: "",
      email: "",
      phone: ""
    });
  };

  // EDIT
  const editUser = (index) => {
    setData(users[index]);
    setEditIndex(index);
  };

  // DELETE
  const deleteUser = (index) => {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
  };

  return (
    <div>
      <h2>CRUD Operation (React Only)</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={data.name}
        onChange={handleChange}
      /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={data.age}
        onChange={handleChange}
      /><br />

      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={data.email}
        onChange={handleChange}
      /><br />

      <input
        type="number"
        name="phone"
        placeholder="Enter Phone"
        value={data.phone}
        onChange={handleChange}
      /><br />

      <button onClick={addData}>
        {editIndex === null ? "Add" : "Update"}
      </button>

      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => editUser(index)}>Edit</button>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
