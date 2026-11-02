import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        if (!formData.email || !formData.password) {
            setError('All fields are required');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3002/login', {
                email: formData.email,
                password: formData.password
            });

            console.log('Login response:', response.data);

            if (response.data.success) {
                // Redirect to dashboard immediately
                console.log('Redirecting to dashboard...');
                setTimeout(() => {
                    window.location.href = 'http://localhost:3000';
                }, 500);
            } else {
                setError(response.data.message || 'Login failed');
                setLoading(false);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Login error:', err);
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-left">
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your account.</p>
                    <form onSubmit={handleSubmit} className="login-form">
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

                        {error && <div className="error-message">{error}</div>}

                        <button 
                            type="submit" 
                            className="login-btn"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <p className="signup-link">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </div>

                <div className="login-right">
                    <img 
                        src="/media/images/signup.png" 
                        alt="Login illustration"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <div className="login-info">
                        <h3>Start Trading Today</h3>
                        <ul>
                            <li>✓ Access to all trading instruments</li>
                            <li>✓ Real-time market data</li>
                            <li>✓ Advanced charting tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
