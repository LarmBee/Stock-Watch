import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import stock from "../images/stock.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
	auth,
	registerWithEmailAndPassword,
	signInWithGoogle,
} from "../firebase";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const history = useNavigate();
	const register = () => {
		if (!name) alert("Please enter name");
		registerWithEmailAndPassword(name, email, password);
	};
	useEffect(() => {
		if (loading) return;
		if (user) history.replace("/dashboard");
	}, [user, loading]);
	return (
		<div className="main-container">
			<div className="child-container-register ">
				<Form>
					<h1>Let's get you started !</h1>
					{/* Username section */}
					<Form.Group className="mb-2" controlId="Username">
						<Form.Label>Full Name</Form.Label>
						<Form.Control
							required
							w-15
							type="text"
							placeholder="Enter your username"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-2" controlId="Username">
						<Form.Label>Username</Form.Label>
						<Form.Control
							required
							w-15
							type="text"
							placeholder="Enter your username"
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

					<Form.Group className="mb-3" controlId="Password">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					{/* Button  */}
					<Button variant="primary" type="submit" onClick={register}>
						Create Account
					</Button>
					<Button variant="danger" type="submit" onClick={register}>
						Register With Google
					</Button>
				</Form>
			</div>
			<div className="login-image">
				<img className="image-log" src={stock} />
				<Button variant="dark" className="register-button" type="submit">
					Login
				</Button>
			</div>
		</div>
	);
};

export default Register;
