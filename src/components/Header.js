import React from 'react'

const styles = {
    header: {
        backgroundColor: "white",
        color: "black",
        textShadow: "10px 10px 25px blue"
    }
};

function Header() {
    return (
        <div className="jumbotron" style={styles.header}>
            <h1 className="display-2 text-center font-weight-bold">Employee Directory</h1>
        </div>
    )
}

export default Header
