import React,{Component} from 'react';
import InputTextField from './inputfield';
import InputField1 from './password';
import DropdownSelect from './dropdown';


class Run extends Component{
   
    
          state = {
            
                "ActiondisplayName":"login",
                "Attributes":[
                    {
                        "Name":"Username",
                        "Size":"10",
                        "Type":"TextBox"
                    },
                    {
                        "Name":"Password",
                        "Size":"10",
                        "Type":"SecretTextbox"
                    },
                    {
                       "DropdownValues":[
                           {
                               "DisplayValue":"Guest",
                               "Value":"guest"
                           },
                           {
                               "DisplayValue":"Admin",
                               "Value":"admin"
                           }
                       ],
                       "Name":"UserType",
                       "Type":"Dropdown"
                    },
                    ]
            };
        
        
 submitForm = event =>{
     const{Attributes, ...inputFields} = this.state;
     console.log(inputFields);
     event.preventDefault();
 };       
_handleChange=event=>{
    this.setState({
     [event.currentTarget.name]:event.currentTarget.Value
       });
     };

    
    render(){
      const { Attributes } = this.state;
      return(
          <div className="body">
        <div className="container">
            <h1> DYNAMIC WEB PAGE IN REACT </h1>
             <div className="background">
           <form onSubmit={this.submitForm} >
              {Attributes.map(form =>{
                  if(form.Type === "TextBox"){
                      return(
                          <InputTextField
                          name={form.Name}
                          Size={form.Size}
                          _handleChange={this._handleChange}
                          
                        />
                      );
                  }
                 if(form.Type === "SecretTextbox"){
                      return(
                          
                          <InputField1
                          name={form.Name}
                          Size={form.Size}
                        _handleChange={this._handleChange}
                          />
                      );
                  }
                  if(form.Type === "Dropdown"){
                    
                     return(<DropdownSelect
                     name={form.Name}
                     DropdownValues={form.DropdownValues}
                     name1={form.DisplayValue}
                     val={form.Value}
                     _handleChange={this._handleChange}
                     
                     
               />);
                }
                })}
              <div>
              <input type="submit" className="hover" value={this.state.ActiondisplayName}/>
              </div>
             
          </form>
          </div>
          </div>
          </div>
      );

    }
}
export default Run;