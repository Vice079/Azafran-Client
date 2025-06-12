import { useState } from "react";
import { Button, Flex, Input, Typography } from "antd";
const { Title } = Typography;
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const handleLoginButtonClick = () => {
    console.log(user, password)
    fetch("http://localhost:8080/login", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username: user, password: password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.status >= 400 && data.msg) {
          setErrorMsg(data.msg);
        } else {
          localStorage.setItem("access_token", data.accessToken)
          navigate("/ingredients");

        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <Flex gap={"8px"} vertical style={{ width: '400px' }}>
      <Title>Login</Title>

      <Input value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Usuario" />
      <Input value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Contraseña" type="password" />

      <Button
        disabled={!user.trim() || !password.trim()}
        onClick={handleLoginButtonClick}
        type="primary">Log in</Button>
      {errorMsg}
    </Flex>
  );
};

export { Login };