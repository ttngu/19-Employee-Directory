import React from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Search() {
    return (
        <div>
            <InputGroup className="mb-3" >
                <FormControl
                placeholder="Search Employee Name"
                aria-label="Employee Name"
                aria-describedby="basic-addon2"
                />
                
            </InputGroup>

            <InputGroup className="mb-3">
                <DropdownButton
                variant="outline-secondary"
                title="Filter"
                id="input-group-dropdown-1"
                >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <Button variant="outline-secondary">SEARCH</Button>
        </div>
    )
}

export default Search
