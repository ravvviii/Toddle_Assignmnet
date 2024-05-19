import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function Link({ showModal, handleClose, handleCreateLink }) {
  const [url, setUrl] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleChangeDisplayName = (e) => {
    setDisplayName(e.target.value);
  };

  const handleSubmit = () => {
    const linkData = {
      url: url,
      displayName: displayName
    };

    handleCreateLink(linkData);
    setUrl('');
    setDisplayName('');
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new link</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="linkUrl">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={handleChangeUrl}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Display Name"
              value={displayName}
              onChange={handleChangeDisplayName}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} style={{ backgroundColor: '#008392' }}>

          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Link;
