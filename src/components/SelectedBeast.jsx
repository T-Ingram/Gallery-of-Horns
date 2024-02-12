import Modal from "react-bootstrap/Modal";
import Image from 'react-bootstrap/Image';

function SelectedBeast(props) {
  return (
    <Modal show={true} onHide={props.handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.imageUrl}/>
      </Modal.Body>
      <Modal.Footer>
        <p>{props.description}</p>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast