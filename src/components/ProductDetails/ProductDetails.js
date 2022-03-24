import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProductDetails = (props) => {
    console.log(props.product);

    const { category, description, id, image, price, rating, title } = props.product;


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <img className='w-50 p-3' src={image} alt={title + 'image'} />
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductDetails;