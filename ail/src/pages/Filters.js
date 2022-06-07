import React from 'react'

export default function
    () {
    return (
        <div className='row mt-5 my-5'>
            <div className='col-4'>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Fecha</span>
                    <input className='form-control' type="date" name="" />
                </div>
            </div>
            <div className='col-4'>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Usuario</span>
                    <select className='form-select'>
                        <option value="">Select User</option>
                        <option value="">Mirna Araceli Salazar</option>
                        <option value="">Francisco Morimoto</option>
                        <option value="">Jose Luis Gomez</option>
                        <option value="">Javier Vargas</option>
                        <option value="">Juan Carlos Esquer</option>
                        <option value="">Julio Ruiz</option>
                        <option value="">Emanuel Jauregui</option>
                        <option value="">Margarita Campos</option>
                    </select>
                </div>
            </div>
            <div className='col-4'>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Foro</span>
                    <select className='form-select'>
                        <option value="">Select a Foro</option>
                        <option value="">Project</option>
                        <option value="">Tier</option>
                        <option value="">Meeting</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
