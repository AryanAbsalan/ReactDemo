import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setAlertShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setAlertShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setAlertShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;