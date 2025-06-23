import { UserRepository } from "../models/UserRepository.js";
import { User } from "../models/User.js";
import {
  FormValidator,
  EmailValidator,
  PasswordValidator,
} from "../models/FormValidators.js";

/**
 * Authentication Service
 * Handles login and registration business logic
 */
export class AuthenticationService {
  constructor() {
    this.userRepository = new UserRepository();
    // Default user credentials for demo
    this.defaultCredentials = {
      email: "best.player@mail.com",
      password: "tj4M@k58Qcs1",
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
          message:
            validation.errors[0] ||
            "Please, insert your e-mail and password above",
        };
      }

      // Check against default credentials (for demo)
      if (
        email === this.defaultCredentials.email &&
        password === this.defaultCredentials.password
      ) {
        const user = { email, name: "Demo User" };
        this.userRepository.setCurrentUser(user);
        return {
          success: true,
          message: "Login successful",
          user,
        };
      }

      // Check against stored users
      if (this.userRepository.validateCredentials(email, password)) {
        const user = this.userRepository.findUserByEmail(email);
        this.userRepository.setCurrentUser(user);
        return {
          success: true,
          message: "Login successful",
          user,
        };
      }

      return {
        success: false,
        message: "E-mail or password incorrect. Try again.",
      };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        message: "An error occurred during login. Please try again.",
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
      const validation = FormValidator.validateRegistrationForm(
        name,
        email,
        password,
        confirmPassword
      );
      if (!validation.isValid) {
        return {
          success: false,
          message: validation.errors[0],
        };
      }

      // Check if user already exists
      if (this.userRepository.findUserByEmail(email)) {
        return {
          success: false,
          message: "User with this email already exists",
        };
      }

      // Create and save new user
      const user = new User(name.trim(), email, password);
      const saveResult = this.userRepository.saveUser(user);

      if (saveResult) {
        return {
          success: true,
          message: "Account created successfully!",
          user: user.toJSON(),
        };
      } else {
        return {
          success: false,
          message: "Failed to create account. Please try again.",
        };
      }
    } catch (error) {
      console.error("Registration error:", error);
      return {
        success: false,
        message: "An error occurred during registration. Please try again.",
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
