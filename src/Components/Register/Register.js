import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            registerEmail:'',
            registerPassword:'',
            registerUsername:'',
        }
    }

    onEmailChange=(event)=>{
        this.setState({registerEmail:event.target.value});
    }

    onPasswordChange=(event)=>{
        this.setState({registerPassword:event.target.value});
    }

    onUsernameChange=(event)=>{
        this.setState({registerUsername:event.target.value});
    }

    onSubmitRegister=async()=>{
        let response = await fetch('https://boiling-temple-99924.herokuapp.com/register', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email:this.state.registerEmail,
                password:this.state.registerPassword,
                name:this.state.registerUsername
            })}
        );
        let user = await response.json();
        if (user.id){
            this.props.loadUser(user);
            this.props.onRouteChange('Home');
        }
        
    }

    render(){
        return(
            <article className="br4 shadow-5 bg-white ba dark-gray b--black-10 mv2 w-70 w-50-m w-25-l mw7 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="text">Username</label>
                            <input onChange={this.onUsernameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 " htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                        </div>
                    </div>
                </main>
            </article>
    
        
        )
    }
    
}

export default Register