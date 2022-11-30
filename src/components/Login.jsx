import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import firebase from "firebase/app"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import stock from "../images/stock.jpg";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";


const Login = () => {
	const [usermain, setUserMain] = useState("User");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);



	const handleChange = (event) => {
		setUserMain(event.target.value);

		console.log("value is:", event.target.value);
	};

	const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/Landing");
  }, [user, loading]);
	return (
		<div className="main-container">
			<div className="child-container ">
				<Form>
					<h1>Hello,{usermain}!</h1>
					{/* Username section */}
					<Form.Group className="mb-2" controlId="Username">
						<Form.Label>Username</Form.Label>
						<Form.Control
							required
							w-15
							type="text"
							placeholder="Enter your username"
							onChange={handleChange}
						/>
					</Form.Group>

					{/* Email form group */}
					<Form.Group className="mb-3" controlId="Email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							sm={8}
							type="email"
							placeholder="name@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else
						</Form.Text>
					</Form.Group>

					{/* Password form group */}
					<Form.Group className="mb-3" controlId="Password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					{/* Button  */}
					<Button variant="primary" type="submit" onClick={()=>logInWithEmailAndPassword(email, password)}>
						Log in
					</Button>
					<Button variant="danger" type="submit" className="google"onClick={signInWithGoogle}>
						Login with Google
					</Button>
				</Form>
			</div>
			<div className="login-image">
				<img className="image-log" src={stock} />
				<Button variant="dark" className="register-button" type="submit">
					Register
				</Button>
			</div>
		</div>
	);
};

export default Login;
