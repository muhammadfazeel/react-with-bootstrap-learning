import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import { useState, useEffect } from "react"

function SimpleForm() {

    const [state, setState] = useState({
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        terms: false
    })

    const onChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        })
    }

    const onSubmit = (evt) => {
            evt.preventDefault();
        console.log(state)

    }


    return (
        <div>
            <Header />
            <div className="container">
                <div className='m-5'>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={state.email} onChange={onChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={state.password} onChange={onChange} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name='address' value={state.address} onChange={onChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" name='address2' value={state.address2} onChange={onChange} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name='city' value={state.city} onChange={onChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select name='state' value={state.state} onChange={onChange}>
                                    <option value={"AJK"}>AJK</option>
                                    <option value={"ISB"}>ISB</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control name='zip' value={state.zip} onChange={onChange} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" defaultChecked={false} label="Check me out" name='terms' onClick={(e) => {
                                setState({
                                    ...state,
                                    terms: e.target.checked
                                })
                            }} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SimpleForm;