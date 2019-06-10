import React,{Component} from 'react';
import {Consumer} from '../scripts/Context';

const Preview = () => {
    return <Consumer>
        {
            ctx=> <div className="preview">
                <h4>HCARD PREVIEW</h4>
                <div className="hcard">
                    <div className="hcard-header" style={{"display":"flex","padding":"0px 0px 0px 20px","justifyContent":"space-between","alignItems":"flex-end","background":"#3A4D63"}}>
                        <h2 style={{"color":"#fff"}}>
                        { 
                            (ctx.state.fname)? ctx.state.fname.charAt(0).toUpperCase()+ctx.state.fname.slice(1): null
                        } &nbsp;
                        {
                            (ctx.state.lname)? ctx.state.lname.charAt(0).toUpperCase()+ctx.state.lname.slice(1): null
                        }
                        </h2>
                        <img style={{"margin":"20px","marginBottom":"-20px"}} height={80} width={80} src={require("../assets/user.png")}/>
                    </div>
                    <div className="hcard-content" style={{"padding":"20px"}}>
                        <p style={{"borderBottom":"1px solid black","display":"block","width":"100%"}}>
                            <span style={{"display":"inline-block","width":"80px","color":"#3A4D63","fontSize":"0.75em"}}>EMAIL</span> {ctx.state.email}
                        </p>
                        <p style={{"borderBottom":"1px solid black","display":"block","width":"100%"}}>
                            <span style={{"display":"inline-block","width":"80px","color":"#3A4D63","fontSize":"0.75em"}}>PHONE</span> {ctx.state.phone}
                        </p>
                        <p style={{"borderBottom":"1px solid black","display":"block","width":"100%"}}>
                            <span style={{"display":"inline-block","width":"80px","color":"#3A4D63","fontSize":"0.75em"}}>ADDRESS</span> {ctx.state.houseno} {ctx.state.street}<br/>
                        </p>
                        <p style={{"borderBottom":"1px solid black","display":"block","width":"100%"}}>
                            <span style={{"display":"inline-block","width":"80px"}}></span> {ctx.state.suburb}, {ctx.state.state}<br/>
                        </p>
                        <p style={{"borderBottom":"1px solid black","display":"block","width":"100%"}}>
                            <span style={{"display":"inline-block","width":"80px","color":"#3A4D63","fontSize":"0.75em"}}>POSTCODE</span> 
                            <span style={{"display":"inline-block","minWidth":"100px"}}>{ctx.state.postcode}</span> 
                            <span style={{"display":"inline-block","width":"80px","color":"#3A4D63","fontSize":"0.75em"}}>COUNTRY</span> 
                            <span style={{"display":"inline-block","minWidth":"60px"}}>{ctx.state.country}</span> 
                        </p>
                    </div>
                </div>
            </div>
        }
    </Consumer>
}

export default Preview;
