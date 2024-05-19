import React from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { TbFileTypePdf } from 'react-icons/tb';

function ModuleFile({ file }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
         
          {file.type === 'pdf' && <TbFileTypePdf />}
         
          {file.name}
        </Card.Title>
        <Dropdown className="float-end">
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{ backgroundColor: 'transparent', border: 'none', color: 'inherit' }}
          >
            <BsThreeDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <CiEdit />
              Edit file name
            </Dropdown.Item>
            <Dropdown.Item>
              <MdDelete />
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
}

export default ModuleFile;
