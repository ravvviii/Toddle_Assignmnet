import React, { useState } from 'react';
import { Button, Container, Dropdown, Navbar } from 'react-bootstrap';
import { BsFillFilePdfFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';
import { HiUpload } from 'react-icons/hi';
import { IoIosLink } from 'react-icons/io';
import { TbStack2 } from 'react-icons/tb';
import empty from '../assets/images/empty.png';
import FileUpload from '../components/Fileuplode';
import Link from '../components/Link';
import ModelCreate from '../components/Modelcreate';
import ModuleCard from '../components/ModuleCard';
function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modules, setModules] = useState([]); 
  const [showModal, setShowModal] = useState(false); 
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCreateModule = (moduleData) => {
    const newModule = {
      ...moduleData,
      id: modules.length 
    };
    setModules([...modules, newModule]); 
    setShowModal(false); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteModule = (moduleId) => {
    setModules(modules.filter(module => module.id !== moduleId)); 
  };

  const handleFileUpload = (file) => {
    const newModule = {
      id: modules.length,
      name: (
        <div>
          <BsFillFilePdfFill style={{ marginRight: '5px', color :'#F75961' }} />
          {file.name}
        </div>
      ),
      icon: <BsFillFilePdfFill />,
      file: file, 
    };
  
    setModules([...modules, newModule]);
    setShowFileUploadModal(false);
  };

  const handleCreateLink = (linkData) => {
    const newModule = {
      id: modules.length,
      name: (
        <div>
          <IoIosLink style={{ marginRight: '5px', color :'#05B2C7' }} />
          {linkData.displayName}
        </div>
      ),
      link: linkData.url, 
    };
  
    setModules([...modules, newModule]);
    setShowLinkModal(false);
  };

  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" style={{ marginLeft: '5%', marginRight: '8%', marginTop: '3%' }}>
          <Container fluid>
            <Navbar.Brand href="#" style={{ fontWeight: 'bold' }}>Course builder</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-between">
              <div></div>
              <Dropdown show={dropdownOpen} onToggle={toggleDropdown} className="ms-auto">
                <Dropdown.Toggle as={Button} variant="outline-success" style={{ backgroundColor: '#AF273E', borderColor: '#AF273E', color: 'white' }}>
                  <FaPlus /> Add {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setShowModal(true)}> <TbStack2 />Create module</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowFileUploadModal(true)}> <HiUpload /> Upload a file</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowLinkModal(true)}> <IoIosLink /> Add a link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginTop: '20px', marginLeft: '5%', marginRight: '8%' }}>
        {modules.length > 0 ? (
          modules.map((module, index) => (
            <ModuleCard key={index} module={module} handleDeleteModule={handleDeleteModule} />
          ))
        ) : (
          <div style={{ textAlign: 'center' }}>
            <img src={empty} alt="No content available" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        )}
      </div>

      <ModelCreate showModal={showModal} handleClose={handleCloseModal} handleCreateModule={handleCreateModule} />
      
      <FileUpload showModal={showFileUploadModal} handleClose={() => setShowFileUploadModal(false)} handleFileUpload={handleFileUpload} />

      <Link showModal={showLinkModal} handleClose={() => setShowLinkModal(false)} handleCreateLink={handleCreateLink} />
    </>
  );
}

export default Header;
