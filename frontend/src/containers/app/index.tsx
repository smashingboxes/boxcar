import React, { useState } from 'react';
import { connect } from "react-redux"

import logo from '../../logo.svg';
import './App.scss';
import { AppState, Auth } from '../../types';
import { logIn } from '../../redux/auth/actions';

interface Props {
  auth: Auth
  login: (email: string, password: string) => void
}

const App = React.memo((props: Props): JSX.Element => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>):void => setUsername(event.target.value)
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>):void => setPassword(event.target.value)

  const onLoginClick = (): void => props.login(username, password)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A Dummy component to be deleted
        </p>
        <div>
        <input type="text" name="username" value={username} onChange={onUsernameChange} />
        <input type="password" name="password" value={password} onChange={onPasswordChange}/>
        <button type="button" onClick={onLoginClick}>Login</button>
      </div>
      { props.auth.auth_token &&
        <div>
          Hello {props.auth.auth_token}
        </div>
      }
      </header>
    </div>
  );
})

const mapStateToProps = (state: AppState): AppState => state
const mapDispatchToProps = (dispatch: any): Pick<Props, "login"> => ({
  login: (email: string, password: string): void => dispatch(logIn(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
