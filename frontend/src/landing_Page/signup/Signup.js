import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3002/signup', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                createdAt: new Date()
            });

            console.log('Signup response:', response.data);

            if (response.data.success) {
                // Redirect to dashboard immediately
                console.log('Redirecting to dashboard...');
                setTimeout(() => {
                    window.location.href = 'http://localhost:3000';
                }, 500);
            } else {
                setError(response.data.message || 'Signup failed');
                setLoading(false);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Signup error:', err);
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-content">
                <div className="signup-left">
                    <h1>Signup now</h1>
                    <p>Or track your existing application.</p>
                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button 
                            type="submit" 
                            className="signup-btn"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Continue'}
                        </button>
                    </form>

                    <p className="login-link">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>

                <div className="signup-right">
                    <img 
                        src="/media/images/signup.png" 
                        alt="Signup illustration"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="signup-info">
                        <h3>Why Zerodha?</h3>
                        <ul>
                            <li>✓ Free equity delivery and direct mutual funds</li>
                            <li>✓ Intraday and F&O trades at ₹20 per order</li>
                            <li>✓ Free account opening online in minutes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;