import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function EditModuleModal({ show, handleClose, module, handleEditModule }) {
  const [moduleName, setModuleName] = useState('');

  useEffect(() => {
    if (module) {
      setModuleName(module.name);
    }
  }, [module]);

  const handleSaveChanges = () => {
    handleEditModule({ ...module, name: moduleName , id: module.length});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Module</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="moduleName">
            <Form.Label>Module Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter module name" 
              value={moduleName} 
              onChange={(e) => setModuleName(e.target.value)} 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModuleModal;
