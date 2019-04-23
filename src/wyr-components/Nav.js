import React from 'react'
import { NavLink } from 'react-router-dom'
import { handleSetWYRAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'


/**
* @description - Nav component - loads on '/' route path
* loads the navbar for the application
* navbar has the LEFT-LINKS -> Home, New Question, Leader Board
* navbar has the RIGHT-LINKS -> <<userName>> and Logout Button
*
* @method - logout() - lets the user logout -> will update the {wyrAuthedUser} property inside store to null
* @method - renders - the components 
*/
class Nav extends React.Component {
  logout = () => {
  	this.props.dispatch(handleSetWYRAuthedUser(null));
  }
  render() {
  const {wyrAuthedUser} = this.props
  return (
    <nav className="navbar navbar-expand-sm bg-info navbar-light">
    <NavLink className="navbar-brand" to='/' exact activeClassName='nav-link '>Would You Rather?</NavLink>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to='/add' activeClassName='nav-link ' >New Question </NavLink>
        </li>
    	<li className="nav-item">
          <NavLink className="nav-link" to='/leaderboard' activeClassName='nav-link '>Leader Board</NavLink>
        </li>
    	
      </ul>
  {wyrAuthedUser && 
    (<ul className="navbar-nav ml-auto">
    <li className="nav-item">
          <NavLink className="nav-link" to='/' activeClassName='nav-link active'>{wyrAuthedUser}</NavLink>
        </li>
		<li className="nav-item">
			<button className={'btn btn-outline-warning nav-link'} 
						onClick={()=>this.props.dispatch(handleSetWYRAuthedUser(null))}>
						Logout</button>
			</li>
		</ul>)}
    </nav>

  )
}
}


/**
* exporting the "connected" component
* Nav component is now connected to the REDUX-STORE
*/
export default connect()(Nav);