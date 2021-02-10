import React, { Component } from 'react';
import { rowData } from './employees';
const EmpContext = React.createContext();
class EmpProvider extends Component{
        state = {
            Alldata : rowData,
            id:'',
            name:'',
            code:'',
            profession:'',
            color:'',
            city:'',
            branch:'',
            assigned:'',
            updateEdit:[]
        }
          getRecord = (id)=>{
            console.log('get Record: ',id)
            const emp = this.state.Alldata.find(employee => employee.id === id);
            return emp;
          }
          onEdit =(id)=>{
            const tempVal =this.state.Alldata;
            const index = tempVal.indexOf(this.getRecord(id));
            console.log('Edit val : ',id)
            const selectedVal = tempVal[index];
            this.setState({
              id: selectedVal['id'],
              name: selectedVal['name'],
              code: selectedVal['code'],
              profession: selectedVal['profession'],
              color: selectedVal['color'],
              city: selectedVal['city'],
              branch: selectedVal['branch'],
              assigned: selectedVal['assigned']
            })
          }
          updateValue = (e,test) => {
            if(test=== "name"){
                this.state.name = e.target.value;
            }
            if(test=== "code"){
                this.state.code = e.target.value;
            }
            if(test=== "profession"){
                this.state.profession = e.target.value;
            }
            if(test=== "color"){
                this.state.color = e.target.value;
            }
            if(test=== "city"){
                this.state.city = e.target.value;
            }
            if(test==="branch"){
                this.state.branch = e.target.value;
            }
            if(test=== "assigned"){
                this.state.assigned = String(e.target.value);
            }
            const tempArr = [this.state.id,this.state.name,this.state.code,this.state.profession,this.state.color,this.state.city,this.state.branch,this.state.assigned];
            this.setState({
                updateEdit : tempArr
            })
        }

        onDelete = (id) => {
            console.log('Delete Val: ',id)
            const tempEmp = this.state.Alldata.filter(item => item.id !== id);
            this.setState({
                Alldata : tempEmp
            })
        }
          onSave = (id)=>{
                  if (id !== ''){
                  const SavedRecord = this.state.Alldata;
                  const index = SavedRecord.indexOf(this.getRecord(id));
                  console.log('Save Record1: ',id)
                  const Record = SavedRecord[index];
                  Record['name'] = this.state.updateEdit[1];
                  Record['code'] = this.state.updateEdit[2];
                  Record['profession'] = this.state.updateEdit[3];
                  Record['color'] = this.state.updateEdit[4];
                  Record['city'] = this.state.updateEdit[5];
                  Record['branch'] = this.state.updateEdit[6];
                  Record['assigned'] = this.state.updateEdit[7];
                  this.setState({
                      Alldata : [...this.state.Alldata],
                      id:"",name:"",code:"",profession:"",color:"",city:"",branch:"",assigned :""
                  })
              }
            
              else{
                  console.log(this.state.Alldata)
                  const MaxId = Math.max(...this.state.Alldata.map(value => value.id));
                  const id = MaxId + 1;
                  console.log('Save Record2:',id)
                  const newArr = [];
                  newArr['name'] = this.state.updateEdit[1];
                  newArr['code'] = this.state.updateEdit[2];
                  newArr['profession'] = this.state.updateEdit[3];
                  newArr['color'] = this.state.updateEdit[4];
                  newArr['city'] = this.state.updateEdit[5];
                  newArr['branch'] = this.state.updateEdit[6];
                  newArr['assigned'] = this.state.updateEdit[7];
                  this.setState({
                    Alldata : [...this.state.Alldata, newArr],
                    id:"",name:"",code:"",profession:"",color:"",city:"",branch:"",assigned :""
                })
              }
          }
    
    render(){
        //console.log(this.state.Alldata)
        return (
            <div>
                <EmpContext.Provider
                value={{...this.state, 
                    onEdit : this.onEdit,
                    updateValue : this.updateValue,
                    onSave : this.onSave,
                    onDelete : this.onDelete
                }}
                >
                    {this.props.children}
                </EmpContext.Provider>
            </div>
        )
    }
} 
const EmpCon = EmpContext.Consumer;
export { EmpProvider, EmpCon}