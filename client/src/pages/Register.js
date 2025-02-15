import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import { registerUser } from "../actions";
import { Redirect } from "react-router-dom";
import ApiErrors from "../components/forms/ApiErrors";

class Register extends React.Component {
  state = {
    shouldRedirect: false,
    shouldLogin: false,
    errors: [],
  };

  signUp = (registerData) => {
    registerUser(registerData)
      .then(() => this.setState({ shouldRedirect: true }))
      .catch((errors) => this.setState({ errors }));
  };

  signInGuest = () => {
    this.setState({ shouldLogin: true });
  };

  render() {
    const { shouldRedirect, errors, shouldLogin } = this.state;

    if (shouldRedirect) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { message: "You have been succesfuly registered!" },
          }}
        />
      );
    }

    if (shouldLogin) {
      return (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      );
    }

    return (
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Register</h1>
            <RegisterForm onSubmit={this.signUp} />
            <p>OR</p>
            <button
              type="submit"
              className="btn btn-bwm-main"
              onClick={this.signInGuest}
            >
              Login as Guest
            </button>
            <ApiErrors errors={errors} />
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">
                As our member you have access to most awesome places in the
                world.
              </h2>
              <img src="/images/register-image.jpg" alt="Register an user" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
