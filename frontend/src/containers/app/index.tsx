import { connect } from "react-redux"

import { AppState, AppComponentProps } from '../../types';
import { logIn } from '../../redux/auth/actions';
import App from "../../components/app"

import './App.scss';

const mapStateToProps = (state: AppState): AppState => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch: any): Pick<AppComponentProps, "login"> => ({
  login: (email: string, password: string): void => dispatch(logIn(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
