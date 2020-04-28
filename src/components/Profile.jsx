import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actualizarUsuarioAccion } from '../redux/userDucks'

const Profile = () => {

    const usuario = useSelector(store => store.usuario.user)
    // console.log(usuario);
    const loading = useSelector(store => store.usuario.loading)

    const [nombreUsuario, setNombreUsuario] = useState(usuario.displayName)
    const [activarFormulario, setActivarFormulario] = useState(false)

    const dispatch = useDispatch()

    const actualizarUsuario = () => {

        if(!nombreUsuario.trim()){
            console.log('nombre vacio');
            return
        }
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarFormulario(false)
    }


    return (
        <div className="mt-5 text-center">
            <div className="card">
                <div className="card-body">
                    <img 
                        src={usuario.photoURL} 
                        alt="imagen de perfil" 
                        width={200} 
                    />
                    <h5 className="card-title">Nombre: {usuario.displayName}</h5>
                    <p className="card-text">Email:{usuario.email} </p>
                    <button className="btn btn-dark" onClick={() => setActivarFormulario(true)} >
                        Editar nombre
                    </button>
                </div>
                {
                    activarFormulario &&
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Recipient's username"
                                        value={nombreUsuario}
                                        onChange={e => setNombreUsuario(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={() => actualizarUsuario()}
                                        >
                                            Actualizar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Profile
