import Table from 'react-bootstrap/Table';

function SimpleListing(props) {
    console.log('-----> ', props)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            {props?.listing?.map((Item, index) => (
                <tbody key={index}>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{Item?.email ? Item.email : "Empty"}</td>
                        <td>{Item?.city ? Item.city : "Empty"}</td>
                        <td>{Item?.state ? Item.state : "Empty"}</td>
                    </tr>
                </tbody>
            ))
            }
        </Table>
    );
}

export default SimpleListing;