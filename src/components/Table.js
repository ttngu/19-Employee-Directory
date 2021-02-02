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
                {props.users.map(user => (
                    <tr key={user.login.uuid}>
                        <td className="d-flex justify-content-center"><img src={user.picture.medium} alt="employee"/></td>
                        <td className="text-center">{user.name.first} {user.name.last}</td>
                        <td className="text-center">{user.email}</td>
                        <td className="text-center">{user.phone}</td>
                        <td className="text-center">{user.location.city}, {user.location.state}</td>
                    </tr>
                ))}

                </tbody>
            </table>
            
        </div>
    )
}

export default Table
