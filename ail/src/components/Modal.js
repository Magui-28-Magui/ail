import React from "react";
import ReactDOM from "react-dom";
//import { ModalPop, ModalOverlay } from '../assets/css/Modal';
import styled from 'styled-components'

export const ModalPop = styled.div`
    background: #fff;
    border: 2px solid #aaa;
    border-radius: 5px;  
    z-index: 999;
    max-width: 420px;
    margin: auto;
    padding: 1em 2em 2em;
    position: relative;
    }
`
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: #000;
    opacity: 0.75;
    }
`

const Modal = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
    <div className="modal">
      <ModalPop role="dialog" aria-modal="true">
        <h3>Hello World</h3>
        <p>Et sit saepe velit tenetur et consequatur in. Nihil doloribus nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt. Vero odio voluptatem sunt sunt laboriosam.</p>
        <button type="button" onClick={toggle}>Close</button>
      </ModalPop>  
      <ModalOverlay />    
    </div>, document.body
  ) : null;

export default Modal;