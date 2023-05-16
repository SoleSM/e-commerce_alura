/* import Button from "./Button"; */
import logo from "../assets/imgs/Logo.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "purple",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          backgroundColor: "yellow",
          width: "50%",
        }}
      >
        <img src={logo} style={{ width: "20%" }} />

        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        <i class="fa-regular fa-magnifying-glass"></i>
        </Button>
      </InputGroup>

      </div>
      <div
        style={{
          backgroundColor: "pink",
          width: "50%",
          textAlign: "center",
          marginRight: "-10%",
        }}
      >
      {/*   <Button titleButton="Login" /> */}
      </div>
    </div>
  );
};

export default Header;
