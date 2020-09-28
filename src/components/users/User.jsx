import React from 'react';
import withHocs from './UsersHoc';

class Users extends React.Component {

  getUser = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;    
    const { data = {} } = this.props;
    const { users = [] } = data; 
    
    users.forEach(element => {      
      if(element.email === email && element.password === password) {
        window.location.assign('http://localhost:3000/books');
      }
    });
  }
  
  render() {      
    return (     
      <div>
        <p className="data-login">email: alex@gmail.com, password: 2222</p>
        <form className="login-form" onSubmit={this.getUser}>
          <input className="login-form__input" type="email" name="email" placeholder="Email" />
          <input className="login-form__input" type="password" name="password" placeholder="Password" />          
          <button className="login-form__btn">Login</button>
        </form>     
      </div>
    );
  }
};

export default withHocs(Users);