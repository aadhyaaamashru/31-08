import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (user, pass) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: user,
        password: pass,
      });
      if (response.status === 200) {
        const loggedInStudent = response.data;
        console.log(loggedInStudent);
        navigate(`/${loggedInStudent.username}`, {
          state: { student: loggedInStudent },
        });
      }
      // Handle successful login on the frontend
    } catch (error) {
      console.error(error); // Handle login error on the frontend
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
