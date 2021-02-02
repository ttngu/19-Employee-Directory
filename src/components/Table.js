import React from 'react'

function Table() {
    return (
        <div>
            <table className="Table">
                <thead>
                    <tr>
                        <th className="text-center" scope="col">Picture</th>
                        <th className="text-center hover" scope="col" data-value="name" onClick={props.nameSort}>Name</th>
                        <th className="text-center" scope="col">Email Address</th>
                        <th className="text-center" scope="col">Phone Number</th>
                        <th className="text-center hover" scope="col" data-value="state" onClick={props.stateSort}>Location</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            
        </div>
    )
}

export default Table
