import React, { useState, createContext, useContext } from "react";

import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import Submit from "./Submit";
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
  padding: 10%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: black;
  font-size: 45px;
  text-align: center;
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
// const InitialValues = {
//   name: "",
//   birthday: "",
//   email: "",
// };

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [submit, setsubmit] = useState({
    name: "",
    birthday: "",
    email: "",
  });
  const UserContext = createContext();
  // const[name,setName]=useState('');
  // const[birth,setBirth]=useState('')
  // const[email,setEmail]=useState('')
  const navigate = useNavigate();

  const onInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setsubmit({ ...submit, [e.target.name]: e.target.value });
    // setName(...name)
  };

  const handleSubmit = (e) => {
    navigate("/submit");
  };

  return (
    <Component>
      <Box>
        <Text> Welcome User</Text>

        <Wrapper>
          <TextField
            id="name"
            variant="outlined"
            onChange={(e) => onInputChange(e)}
            name="name"
            label="Enter Name"
            fullWidth
            required
          />

          <TextField
            id="date"
            label="Choose your birthdate"
            type="date"
            onChange={(e) => onInputChange(e)}
            InputLabelProps={{
              shrink: true,
            }}
            name="birthday"
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            onChange={(e) => onInputChange(e)}
            name="email"
            label="Enter Email"
            fullWidth
            required
          />

          <LoginButton variant="contained" onClick={() => handleSubmit()}>
            Submit
          </LoginButton>
        </Wrapper>
      </Box>
      <Submit submit={submit} />
    </Component>
  );
};

export default Login;
