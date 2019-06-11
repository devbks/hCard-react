import React,{Component} from 'react';
import {Consumer} from '../scripts/Context';

function openFileDialog(fileUpload){
    document.getElementById("avatar-file").click();
    document.getElementById("avatar-file").addEventListener("change",(e)=>{
        let ext = e.target.value.substr(e.target.value.length-4,e.target.value.length);
        let valid = [".png",".jpg","jpeg"];
        if( valid.indexOf(ext)>=0){
            fileUpload({
                "target":{
                    "name":e.target.name,
                    "value":window.URL.createObjectURL(e.target.files[0])
                }})
        }else{
            console.log("Invalid file type");
        }
    },true)
}


const Form = (props) => {
    return <Consumer>
        {
            ctx=> <div className="content">
                <h1>hCard Builder</h1>
                <div className="form">
                    <fieldset>
                        <legend>PERSONAL DETAILS</legend>
                        <div>
                            <span>GIVEN NAME</span>
                            <input type="text" name="fname" onChange={ctx.inputHandler} value={(ctx.state.fname)} />
                        </div>
                        <div>
                            <span>SURNAME</span>
                            <input type="text" name="lname" onChange={ctx.inputHandler} value={(ctx.state.lname)} />
                        </div>
                        <div>
                            <span>EMAIL</span>
                            <input type="text" name="email" onChange={ctx.inputHandler} value={(ctx.state.email)} />
                        </div>
                        <div>
                            <span>PHONE</span>
                            <input type="text" name="phone" onChange={ctx.inputHandler} value={(ctx.state.phone)} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>PERSONAL DETAILS</legend>
                        <div>
                            <span>HOUSE NAME OR #</span>
                            <input type="text" name="houseno" onChange={ctx.inputHandler} value={(ctx.state.house)} />
                        </div>
                        <div>
                            <span>STREET</span>
                            <input type="text" name="street" onChange={ctx.inputHandler} value={(ctx.state.street)} />
                        </div>
                        <div>
                            <span>SUBURB</span>
                            <input type="text" name="suburb" onChange={ctx.inputHandler} value={(ctx.state.suburb)} />
                        </div>
                        <div>
                            <span>STATE</span>
                            <input type="text" name="state" onChange={ctx.inputHandler} value={(ctx.state.state)} />
                        </div>
                        <div>
                            <span>POSTCODE</span>
                            <input type="text" name="postcode" onChange={ctx.inputHandler} value={(ctx.state.postcode)} />
                        </div>
                        <div>
                            <span>COUNTRY</span>
                            <input type="text" name="country" onChange={ctx.inputHandler} value={(ctx.state.country)}/>
                        </div>
                    </fieldset>
                    <div className="form-action">
                        <input name="avatar" id="avatar-file" type="file" hidden/>
                        <button onClick={()=>openFileDialog(ctx.inputHandler)} >Upload Avatar</button> 
                        <button >Create hCard</button>
                    </div>
                </div>
            </div>
        }
    </Consumer>
}

export default Form;


