import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ingresoUsuarioAccion } from '../redux/userDucks'

import { withRouter } from 'react-router-dom'

const Login = (props) => {

    const dispatch = useDispatch()
    
    const loading = useSelector(store => store.usuario.loading)
    // console.log(loading)
    const active = useSelector(store => store.usuario.active)

    useEffect(() => {
        // console.log(active)
        if(active){
            props.history.push('/')
        }
        
    }, [active, props.history])

    return (
        <div className="mt-5 text-center">
            <h3>Ingreso de usuarios</h3>
            <hr />
            <button 
                className="btn btn-dark"
                onClick={() => dispatch(ingresoUsuarioAccion())}
                disabled={loading}
            >Google</button>
        </div>
    )
}

export default withRouter(Login)
