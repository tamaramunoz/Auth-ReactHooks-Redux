import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actualizarUsuarioAccion, editarFotoAccion } from '../redux/userDucks'

const Profile = () => {

    const usuario = useSelector(store => store.usuario.user)
    // console.log(usuario);
    const loading = useSelector(store => store.usuario.loading)

    const [nombreUsuario, setNombreUsuario] = useState(usuario.displayName)
    const [activarFormulario, setActivarFormulario] = useState(false)
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const actualizarUsuario = () => {

        if(!nombreUsuario.trim()){
            console.log('nombre vacio');
            return
        }
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarFormulario(false)
    }

    const seleccionarArchivo = (imagen) => {
        console.log(imagen.target.files[0]);
        const imagenCliente = imagen.target.files[0]

        if(imagenCliente === undefined){
            console.log('no se seleccionó imagen');
            return
        }

        if(imagenCliente.type === 'image/png' || imagenCliente.type === 'image/jpg' || imagenCliente.type === 'image/jpeg'){
            dispatch(editarFotoAccion(imagenCliente))
            setError(false)
        }else{
            setError(true)
        }
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
                    {
                        error && 
                        <div className="alert alert-warning mt-2">
                            Solos archivos .png, .jpg o .jpeg
                        </div>
                    }
                    <div className="custom-file">
                        <input 
                            type="file" 
                            className="custom-file-input"
                            id="inputGroupFile01" 
                            style={{display: 'none'}}
                            onChange={e => seleccionarArchivo(e)}
                            disabled={loading}
                        />
                        <label 
                            className={loading ? 'btn btn-dark mt-2 disabled' : 'btn btn-dark mt-2'} 
                            htmlFor="inputGroupFile01"
                        >Choose File</label>
                    </div>
                </div>
                {
                    loading && 
                    <div className="card-body">
                        <div className="d-flex justify-content-center my-3">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                }
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
