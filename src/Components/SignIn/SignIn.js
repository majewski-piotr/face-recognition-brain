import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signInEmail:'',
            signInPassword:'',
        }
    }

    onEmailChange=(event)=>{
        this.setState({signInEmail:event.target.value});
    }

    onPasswordChange=(event)=>{
        this.setState({signInPassword:event.target.value});
    }

    onSubmitSignIn=async()=>{
        console.log("frontend started")
        let response = await fetch('https://boiling-temple-99924.herokuapp.com/signin', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
            })}
        );
        console.log("frontend send")
        let data = await response.json();
        if (data.id){
            this.props.loadUser(data);
            this.props.onRouteChange('Home');
        }
    
    }
    render(){
        return(
            <article className="br4 shadow-5 bg-white ba dark-gray b--black-10 mv2 w-70 w-50-m w-25-l mw7 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
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
                        <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                        <a onClick={()=> this.props.onRouteChange('Register')} href="#0" className="f6 link dim black db">Register</a>
                        </div>
                    </div>
                    </main>
                </article>
    
        ) 
    }
}
    

export default SignIn