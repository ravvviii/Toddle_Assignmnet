import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import EditModuleModal from './EditModuleModal';

function ModuleCard({ module, handleDeleteModule }) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModule = (updatedModule) => {
    // Implement logic to handle edit module
    console.log('Updated Module:', updatedModule);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{module.name}</Card.Title>
        <Dropdown className="float-end">
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{ backgroundColor: 'transparent', border: 'none', color: 'inherit' }}
          >
            <BsThreeDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setShowEditModal(true)}>
              <CiEdit />
              Edit module name
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleDeleteModule(module.id)}>
              <MdDelete />
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
      <EditModuleModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        module={module}
        handleEditModule={handleEditModule}
      />
    </Card>
  );
}

export default ModuleCard;
