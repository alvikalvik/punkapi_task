import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './Modal.css';

function Modal({ hideModal }) {
    function handleClickOnModal(evt) {
        if (evt.target.matches('.modal, .modal__close-btn')) {
            evt.preventDefault();
            hideModal();
        }
    }
    return (
        <div className="modal" onClick={handleClickOnModal}>
            <div className="modal__window">
                <button className="modal__close-btn">&times;</button>
                <RegistrationForm hideModal={hideModal} />
            </div>
        </div>
    );
}

export default Modal;