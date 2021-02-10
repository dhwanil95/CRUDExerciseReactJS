import React, { Component } from "react";
import {EmpCon} from "../../Context";
import { Table, Button } from 'react-bootstrap';
 

export default class Home extends Component {
  render(){
    return(
      <div className="container">
        <h3>Plexxis Employee</h3>
        <EmpCon>
         {(value)=>{
           return(
             <Table size="ms" variant="dark" striped bordered hover>
                <tbody>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Profession</th>
                  <th scope="col">Color</th>
                  <th scope="col">City</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Assigned</th>
                  <th>Action</th>
                </tr>
                <tr>
                    <td><input type="text" value={value.name} onChange={(e)=>{value.updateValue(e,"name")}}/></td>
                    <td><input type="text" value={value.code} onChange={(e)=>{value.updateValue(e,"code")}}/></td>
                    <td><input type="text" value={value.profession} onChange={(e)=>{value.updateValue(e,"profession")}}/></td>
                    <td><input type="text" value={value.color} onChange={(e)=>{value.updateValue(e,"color")}}/></td>
                    <td><input type="text" value={value.city} onChange={(e)=>{value.updateValue(e,"city")}}/></td>
                    <td><input type="text" value={value.branch} onChange={(e)=>{value.updateValue(e,"branch")}}/></td>
                    <td><select
                          className="form-control form-control-sm"
                          name="ceiling"
                          value={value.assigned}
                          onChange={(e)=>{value.updateValue(e,"assigned")}}
                          >
                          <option value="">Select here...</option>
                          <option value={true}>True</option>
                          <option value={false}>False</option>
                        </select>
                    </td>
                    <td><Button onClick={()=>{value.onSave(value.id)}}>{value.id ? "Save" : "Add"}</Button></td>
                </tr>
                {value.Alldata.map(emp => {
                    return(
                      <tr>
                        {/* <td>1</td> */}
                        <td>{emp.name}</td>
                        <td>{emp.code}</td>
                        <td>{emp.profession}</td>
                        <td>{emp.color}</td>
                        <td>{emp.city}</td>
                        <td>{emp.branch}</td>
                        <td>{String(emp.assigned)}</td>
                        <td><Button size="sm" variant="primary" onClick={()=>{value.onEdit(emp.id)}}>Edit</Button>| 
                        <Button size="sm" variant="danger" onClick={()=>{value.onDelete(emp.id)}}>Delete</Button></td>
                      </tr>
                    )
                })}
                </tbody>
             </Table>
           )
          }
         }     
        </EmpCon>
      </div>
    )
  }
};
//export default Home;