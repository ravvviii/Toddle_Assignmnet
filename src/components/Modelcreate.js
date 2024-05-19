import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function Modelcreate({ showModal, handleClose, handleCreateModule }) {
  const [moduleName, setModuleName] = useState('');

  const handleChange = (e) => {
    setModuleName(e.target.value);
  };

  const handleSubmit = () => {
    
    const moduleData = {
      name: moduleName
    };

    
    handleCreateModule(moduleData);
    setModuleName(''); 
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new module</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="moduleName">
            <Form.Label>Module name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduction to trigonometry"
              value={moduleName}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} style={{ backgroundColor: '#008392' }}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modelcreate;
