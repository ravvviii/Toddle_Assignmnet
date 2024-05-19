import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function FileUpload({ showModal, handleClose, handleFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      handleFileUpload(selectedFile);
      setSelectedFile(null);
      handleClose(); 
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload PDF</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="file" onChange={handleFileChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} style={{ backgroundColor: '#008392' }}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FileUpload;
