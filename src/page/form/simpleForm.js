import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react"
import SimpleListing from '../../components/listing/simpleListing';

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
    });

    let [listing, setListing] = useState([]);
    const [formErrors, setFormErrors] = useState({});

    const onChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        })
    }

    const validateForm = () => {
        let errors = {};

        //password field
        if (!state.password)
            errors.password = "Password is required";
        else if (state.password.length < 6)
            errors.password = "Password should be greater then 6 words.";

        //email field
        if (!state.email) {
            errors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(state.email)) {
            errors.email = "Email address is invalid";
        }


        //address field
        if (!state.address)
            errors.address = "Address is required";
        else if (state.address.length < 6)
            errors.address = "Address should be greater then 5 words.";

        //city field
        if (!state.city)
            errors.city = "City is required";

        //state field
        if (!state.state)
            errors.state = "State is required";

        //zip field
        if (!state.zip)
            errors.zip = "Zip is required";

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            return true;
        } else {
            return false;
        }
    };

    let onSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            listing.push(state)
            setListing([...listing])
        } else {
        }
    }
    return (
        <div>
            <div className="container">
                <div className='m-5'>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={state.email} onChange={onChange} />
                                {formErrors.email && (
                                    <p className="text-danger">{formErrors.email}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' autoComplete="on" value={state.password} onChange={onChange} />
                                {formErrors.password && (
                                    <p className="text-danger">{formErrors.password}</p>
                                )}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control placeholder="1234 Main St" name='address' value={state.address} onChange={onChange} />
                            {formErrors.address && (
                                <p className="text-danger">{formErrors.address}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" name='address2' value={state.address2} onChange={onChange} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City*</Form.Label>
                                <Form.Control name='city' value={state.city} onChange={onChange} />
                                {formErrors.city && (
                                    <p className="text-danger">{formErrors.city}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State*</Form.Label>
                                <Form.Select name='state' value={state.state} onChange={onChange}>
                                    <option value={"AJK"}>AJK</option>
                                    <option value={"ISB"}>ISB</option>
                                </Form.Select>
                                {formErrors.state && (
                                    <p className="text-danger">{formErrors.state}</p>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip*</Form.Label>
                                <Form.Control name='zip' value={state.zip} onChange={onChange} />
                                {formErrors.zip && (
                                    <p className="text-danger">{formErrors.zip}</p>
                                )}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" defaultChecked={false} label="Terms & conditions" name='terms' onClick={(e) => {
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
                <SimpleListing listing={listing} />
            </div>
        </div>
    );
}

export default SimpleForm;