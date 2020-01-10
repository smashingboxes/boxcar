import React, { useState } from "react"

import logo from '../../logo.svg';
import { AppComponentProps } from "../../types";

export default React.memo((props: AppComponentProps) => {
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
  )
})
