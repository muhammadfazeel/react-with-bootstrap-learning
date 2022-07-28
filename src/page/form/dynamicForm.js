import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, Fragment } from "react"

export default function DynamicForm() {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [inputFields, setInputFields] = useState([
        { position: '', company: '' }
    ]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ position: '', company: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "position") {
            values[index].position = event.target.value;
        } else {
            values[index].company = event.target.value;
        }
        setInputFields(values);
    };

    const resetForm = e => setInputFields([{ position: '', company: '' }])

    const handleSubmit = e => {
        e.preventDefault();
        let obj = {
            firstName,
            lastName,
            jobs: inputFields
        }
        console.log(obj)
    };

    const onChange = (evt) => {
        const value = evt.target.value;
        if (evt.target.name === 'firstName') {
            setFirstName(value)
        } else {
            setLastName(value)
        }
    }

    return (
        <div>
            <div className="container">
                <div className='m-5'>
                    <Form onSubmit={(e) => handleSubmit(e)}>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name*</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name='firstName' value={firstName} onChange={onChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" name='lastName' value={lastName} onChange={onChange} />
                            </Form.Group>
                        </Row>
                        <h2>Jobs</h2>
                        {inputFields.map((inputField, index) => (
                            <Fragment key={`${inputField}~${index}`}>
                                <Row className="mb-4">
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control type="text" name='position' value={inputField.position} onChange={event => handleInputChange(index, event)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control type="text" name='company' value={inputField.company} onChange={event => handleInputChange(index, event)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Button variant="primary" onClick={() => handleAddFields()}>
                                            +
                                        </Button>
                                        <Button variant="danger" disabled={index === 0} onClick={() => handleRemoveFields(index)}>
                                            -
                                        </Button>
                                    </Form.Group>
                                </Row>
                            </Fragment>
                        ))}
                        <Button variant="danger" onClick={resetForm}>
                            Reset
                        </Button>
                        <Button variant="primary" type='submit' onSubmit={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}