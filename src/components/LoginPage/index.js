import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showSubmittedError: false,
    errorMsg: '',
  }
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }
  onSubmitFailure = errorMsg => {
    this.setState({showSubmittedError: true, errorMsg})
  }
  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }
  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="name">
          Password
        </label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          className="box-size"
        />
      </>
    )
  }
  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="name">
          Username
        </label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          className="box-size"
        />
      </>
    )
  }
  render() {
    const {showSubmittedError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-align">
        <form onSubmit={this.submitForm}>
          <div>{this.renderUsername()}</div>
          <div>{this.renderPassword()}</div>
          <button className="button" type="submit">
            Login
          </button>
          {showSubmittedError && <p className = "error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginPage
