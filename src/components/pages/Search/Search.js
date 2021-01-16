import React from 'react'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function Search() {
    return (
        <div>
            <InputGroup className="mb-3" >
                <FormControl
                placeholder="Search Employee Name"
                aria-label="Employee Name"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary">SEARCH</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Search
