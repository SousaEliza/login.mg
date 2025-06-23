import { UserRepository } from '../data/repositories/UserRepository.js';
import { User } from '../data/models/User.js';
import { FormValidator, EmailValidator, PasswordValidator } from './validators/FormValidators.js';

/**
 * Authentication Service
 * Handles login and registration business logic
 */
export class AuthenticationService {
    constructor() {
        this.userRepository = new UserRepository();
        // Default user credentials for demo
        this.defaultCredentials = {
            email: 'best.player@mail.com',
            password: 'tj4M@k58Qcs1'
        };
    }

    /**
     * Login user with credentials
     * @param {string} email - User email
     * @param {string} password - User password
     * @returns {Object} - Login result
     */
    async login(email, password) {
        try {
            // Validate form inputs
            const validation = FormValidator.validateLoginForm(email, password);
            if (!validation.isValid) {
                return {
                    success: false,
                    message: validation.errors[0] || 'Please, insert your e-mail and password above'
                };
            }

            // Check against default credentials (for demo)
            if (email === this.defaultCredentials.email && password === this.defaultCredentials.password) {
                const user = { email, name: 'Demo User' };
                this.userRepository.setCurrentUser(user);
                return {
                    success: true,
                    message: 'Login successful',
                    user
                };
            }

            // Check against stored users
            if (this.userRepository.validateCredentials(email, password)) {
                const user = this.userRepository.findUserByEmail(email);
                this.userRepository.setCurrentUser(user);
                return {
                    success: true,
                    message: 'Login successful',
                    user
                };
            }

            return {
                success: false,
                message: 'E-mail or password incorrect. Try again.'
            };

        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                message: 'An error occurred during login. Please try again.'
            };
        }
    }

    /**
     * Register new user
     * @param {string} name - User name
     * @param {string} email - User email
     * @param {string} password - User password
     * @param {string} confirmPassword - Password confirmation
     * @returns {Object} - Registration result
     */
    async register(name, email, password, confirmPassword) {
        try {
            // Validate form inputs
            const validation = FormValidator.validateRegistrationForm(name, email, password, confirmPassword);
            if (!validation.isValid) {
                return {
                    success: false,
                    message: validation.errors[0]
                };
            }

            // Check if user already exists
            if (this.userRepository.findUserByEmail(email)) {
                return {
                    success: false,
                    message: 'User with this email already exists'
                };
            }

            // Create and save new user
            const user = new User(name.trim(), email, password);
            const saveResult = this.userRepository.saveUser(user);

            if (saveResult) {
                return {
                    success: true,
                    message: 'Account created successfully!',
                    user: user.toJSON()
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to create account. Please try again.'
                };
            }

        } catch (error) {
            console.error('Registration error:', error);
            return {
                success: false,
                message: 'An error occurred during registration. Please try again.'
            };
        }
    }

    /**
     * Logout current user
     */
    logout() {
        this.userRepository.clearCurrentUser();
    }

    /**
     * Get current user
     * @returns {Object|null} - Current user or null
     */
    getCurrentUser() {
        return this.userRepository.getCurrentUser();
    }

    /**
     * Check if user is logged in
     * @returns {boolean} - Login status
     */
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }
}

/**
 * UI Service
 * Handles UI state management and transitions
 */
export class UIService {
    constructor() {
        this.currentView = 'login'; // 'login', 'register'
    }

    /**
     * Switch to registration view
     */
    showRegistrationView() {
        const body = document.body;
        const postClick = document.getElementById('post-click');
        const beforeClick = document.getElementById('before-click');

        body.classList.add('thi');
        postClick.classList.add('hidden');
        beforeClick.classList.remove('hidden');
        this.currentView = 'register';
    }

    /**
     * Switch to login view
     */
    showLoginView() {
        const body = document.body;
        const postClick = document.getElementById('post-click');
        const beforeClick = document.getElementById('before-click');

        body.classList.remove('thi');
        postClick.classList.remove('hidden');
        beforeClick.classList.add('hidden');
        this.currentView = 'login';
    }

    /**
     * Show modal
     * @param {string} message - Message to display
     */
    showModal(message) {
        const modal = document.getElementById('success-modal');
        const modalContent = modal.querySelector('.modal-content p');
        modalContent.textContent = message;
        modal.style.display = 'block';
    }

    /**
     * Hide modal
     */
    hideModal() {
        const modal = document.getElementById('success-modal');
        modal.style.display = 'none';
    }

    /**
     * Display error message
     * @param {string} elementId - ID of error element
     * @param {string} message - Error message
     */
    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove('success');
        }
    }

    /**
     * Display success message
     * @param {string} elementId - ID of element
     * @param {string} message - Success message
     */
    showSuccess(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
            element.classList.add('success');
        }
    }

    /**
     * Clear message
     * @param {string} elementId - ID of element to clear
     */
    clearMessage(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = '';
            element.classList.remove('success');
        }
    }

    /**
     * Update password criteria display
     * @param {Object} criteria - Password criteria object
     */
    updatePasswordCriteria(criteria) {
        const listaCriteria = document.getElementById('password-criteria');
        const criteriaElements = {
            length: document.getElementById('length'),
            uppercase: document.getElementById('uppercase'),
            lowercase: document.getElementById('lowercase'),
            number: document.getElementById('number'),
            special: document.getElementById('special')
        };

        listaCriteria.classList.remove('hidden');

        Object.keys(criteria).forEach(key => {
            if (criteriaElements[key]) {
                criteriaElements[key].classList.toggle('valid', criteria[key]);
            }
        });
    }

    /**
     * Hide password criteria
     */
    hidePasswordCriteria() {
        const listaCriteria = document.getElementById('password-criteria');
        listaCriteria.classList.add('hidden');
    }
}
