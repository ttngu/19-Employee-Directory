import Dropdown from "react-bootstrap/Dropdown";
import React from 'react'

function Sort() {
    return (
        <div>
            <Dropdown className="mb-5">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.name}>Last name</Dropdown.Item>
                    <Dropdown.Item onClick={props.state}>State</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Sort
