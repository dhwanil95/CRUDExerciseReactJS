import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import Context from './Context';
import Home from './components/pages/Home'


function  App() {
  return(
    <div class="App">
      <Home/>
      Hello
    </div>
  )
  
}
export default App;
// class App extends React.Component {
//   state = {
//     employees: [],
//     name:'',
//     code:'',
//     profession:'',
//     color:'',
//     city:'',
//     branch:'',
//     assigned:'',
//     updateEdit:[]
//   }
//   getRecord = (id)=>{
//     const emp = this.state.find(employees => employees.id === id);
//     return emp;
//   }
//   onEdit =(id)=>{
//     const tempVal =this.state.employees;
//     const index = tempVal.indexOf(this.getRecord(id));
//     const selectedVal = tempVal[index];
//     this.setState({
//       id: selectedVal['id'],
//       name: selectedVal['name'],
//       code: selectedVal['code'],
//       profession: selectedVal['profession'],
//       color: selectedVal['color'],
//       city: selectedVal['city'],
//       branch: selectedVal['branch'],
//       assigned: selectedVal['assigned']
//     })
//   }
//   componentWillMount = () => {
//     fetch('http://localhost:8080/api/employees')
//       .then(response => response.json())
//       .then(employees => this.setState({ employees }))
//   }

//   render() {
//     const {
//       employees,
//       onEdit = this.onEdit
//     } = this.state;
    

//     console.log(this.state);
//     return(
//     (employees) => {
//       return (
//       <div className="container">
//       <div className="py-4">
//         <h1>Home Page</h1>
//         <table class="table border shadow">
//           <thead class="thead-dark">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Code</th>
//               <th scope="col">Profession</th>
//               <th scope="col">Color</th>
//               <th scope="col">City</th>
//               <th scope="col">Branch</th>
//               <th scope="col">Assigned</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* <tr>
//               <td></td>
//               <td><input type="text" value={employees.name} onChange={(e)=>{employees.updateValue(e,"name")}}/></td>
//               <td><input type="text" value={employees.code} onChange={(e)=>{employees.updateValue(e,"code")}}/></td>
//               <td><input type="text" value={employees.profession} onChange={(e)=>{employees.updateValue(e,"profession")}}/></td>
//               <td><input type="text" value={employees.color} onChange={(e)=>{employees.updateValue(e,"color")}}/></td>
//               <td><input type="text" value={employees.city} onChange={(e)=>{employees.updateValue(e,"city")}}/></td>
//               <td><input type="text" value={employees.branch} onChange={(e)=>{employees.updateValue(e,"branch")}}/></td>
//               <td><input type="text" value={employees.assigned} onChange={(e)=>{employees.updateValue(e,"assigned")}}/></td>
//               <td><Button onClick={()=>{employees.onSave(employees.id)}}>{employees.id ? "Save" : "Add new Row"}</Button></td>
//             </tr> */}
//         {
//           employees.map((employee,index) => (
//             <tr>
//                 <th scope="row">{index + 1}</th>
//                 <td>{employee.name}</td>
//                 <td>{employee.code}</td>
//                 <td>{employee.profession}</td>
//                 <td>{employee.color}</td>
//                 <td>{employee.city}</td>
//                 <td>{employee.branch}</td>
//                 <td>{String(employee.assigned)}</td>
//                 <td>
//                   <Button variant="primary" onClick={()=>{employees.onEdit(employee.id)}}>Edit</Button>
//                   &nbsp;
//                   <Button
//                     variant="danger"
//                     onClick={() => employee.deleteUser(employee.id)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             // <div key={employee.id}>
//             //   {
//             //     Object.keys(employee).map(key => 
//             //       <span key={key}>
//             //         { key }:
//             //         { employee[key] } 
//             //       </span>
//                 ))
//               }
//                </tbody>
//         </table>
  
//             </div>
//           )
//       </div>
//     );
//     }
  
//     );
//   }
// }

// export default App;
