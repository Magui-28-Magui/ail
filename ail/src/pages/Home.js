import React from 'react'
import Filters from './Filters'
import { Input, InputSelect } from '../assets/css/Input';
import { MdCreate } from 'react-icons/md';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';

export default function Home() {
    const {isShowing, toggle} = useModal();

    return (
        <div>
            <Filters />
            <div className='row'>
                <div className='d-flex justify-content-end my-2'>
                    <button className='btn btn-success'><MdCreate className='mx-2' width={10} />Add Foro</button>
                </div>
               <Modal isShowing={isShowing} hide={toggle} />
            </div>
            <div className="table-responsive">
                <table className="table my-2">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Impacted Metric</th>
                            <th scope="col">Issue</th>
                            <th scope="col">Action</th>
                            <th scope="col">Responsable</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Closed Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '10rem' }}>
                                <Input className='form-control' type="date" name="" value="" />
                            </td>
                            <td style={{ width: '10rem' }}>
                                <InputSelect className='form-select'>
                                    <option value="1">Select Metric</option>
                                    <option value="2">Inventory Cost</option>
                                    <option value="3">Internal Rejections</option>
                                    <option value="4">Employee Engagement</option>
                                    <option value="5">HC Reduction</option>
                                    <option value="6">Efficiency Labor</option>
                                    <option value="7">Efficiency</option>
                                    <option value="8">Downtime</option>
                                    <option value="9">CPM NCR %</option>
                                    <option value="10">Adoptions Cycle Time</option>
                                    <option value="11">Utilization</option>
                                    <option value="12">Turnover</option>
                                    <option value="13">Scrap</option>
                                    <option value="14">Sales Growth</option>
                                    <option value="15">RM Cost vs Sales %</option>
                                    <option value="16">Output</option>
                                    <option value="17">OTD</option>
                                    <option value="18">MMW MRO Expense vs Sales %</option>
                                    <option value="19">Labor Cost</option>
                                </InputSelect>
                            </td>
                            <td style={{ width: '10rem' }}>
                                "Validar moldeo del cuerpo de los siguientes numeros de parte utilizando la ATJ08:
                                SA4533-M
                                SA4532-M
                                SA4355-M
                                SA4354-M"
                            </td>
                            <td style={{ width: '10rem' }}>
                                Realizar OQ y PQ para validar la operacion de moldeo TEFLON TEARAWAY SHEATH.
                            </td>
                            <td style={{ width: '10rem' }}>
                                S. MAGAÑA
                            </td>
                            <td style={{ width: '10rem' }}>
                                <Input className='form-control' type="date" name="" value="" />
                            </td>
                            <td style={{ width: '10rem' }}>
                                <button type="button" className="btn btn-primary" onClick={toggle}>
                                    Launch demo modal
                                </button>
                                "* Se esta revisando con planeacion la fabricacion del material necesario para las validaciones, una vez que se tenga confirmacion por parte de planeacion se confirmara la fecha de terminacion.
                                * SCR02817 fue creado y enviado a Medcomp para aprobacion. (03/22/18).
                                * OQ-VP007028 fue creado y aprobado en MMW; fue enviado a Medcomp para revision y aprobacion.(03/22/18).
                                * Se estan fabricando 500 pcs SA4351 (5F) y 500 pcs SA4356 (10F) poniendo las estacas para poder realizar la operacion de moldeo.                                                   *Se empezara a trabajar con el moldeo de las piezas. (04/12/18).
                                * Ya se realizaron las muestras del 10F. Pendiente realizar muestras del 5F debido a que los moldes estan siendo utilizados por produccion para cumplir con requerimientos actuales.                                                *Ya se realizaron las muestars para el 5F y ambas muestras ya fueron ingresadas a QC, estamos en espera de resultados, Cabe destacar que el OQ de inicio no a sido aprobado.
                                * Se envio recordatorio al cliente (5/31/2018).                *El OQ-VP007028 ya fue aprovado por el cliente, se esta trabajando en resultados y conclusiones (7/16/2018).       *El protocolo OQ está circulando para su aprobación final (7/30/2018).                                                                     *El protocolo OQ fue enviado al cliente para su revisión y aprobación (8/6/2018).                                                  *Se pidio soporte a Customer Service para solicitar un update al cliente, sin obtener respuesta (9/3/2018).                                                                                         *Se pidio soporte a Customer Service para solicitar un update al cliente, sin obtener respuesta (04/2019).
                                El OQ-VP007028 fue aprobado por el cliente.
                                El PQ-VP007650 fue enviado al cliente para aprobacion de inicio. (09/17/19).
                                *En espera de aprobacion de cliente, se solicito soporte a Customer Service para solicitar un update al cliente. (10/21/19)"
                            </td>
                            <td style={{ width: '10rem' }}>
                                <Input className='form-control' type="date" name="" value="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
