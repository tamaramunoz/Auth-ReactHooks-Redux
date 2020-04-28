import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { cerrarSesionAccion } from '../redux/userDucks'

import { withRouter } from 'react-router-dom'

const Navbar = (props) => {

    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch(cerrarSesionAccion())
        props.history.push('/login')
    }

    const active = useSelector(store => store.usuario.active)

    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Auth con Redux</Link>
            <div className="d-flex">
                {
                    active ? (
                        <>
                            <NavLink className="btn btn-dark mr-2" exact to="/" >Home</NavLink>
                            <button
                                className="btn btn-dark"
                                onClick={() => cerrarSesion()}
                            >Cerrar Sesión</button>
                        </>
                    ) : ( 
                        <NavLink className="btn btn-dark mr-2" to="/login">Login</NavLink>
                    )
                }
            </div>
        </div>
    )
}

export default withRouter(Navbar)
