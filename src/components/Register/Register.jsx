import React, { useState } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

//-- Actions --/
import { loadUserAction } from "../../redux/actions/Load-User-Action";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  loadUser: user => dispatch(loadUserAction(user))
});

const Register = ({ history, loadUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("https://glacial-plateau-24606.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          history.push("/home");
        }
      });
  };

  return (
    <article className="mt6 tc br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <form className="pa4 black-80" onSubmit={handleSubmit}>
        <div className="measure">
          <fieldset id="sign-up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div>
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
          <div className="lh-copy mt3">
            <Link to="/">
              <p className="f6 link dim black db pointer">Sign In</p>
            </Link>
          </div>
        </div>
      </form>
    </article>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
