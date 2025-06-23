import { AuthenticationService } from "../services/AuthenticationService.js";
import { UIService } from "../services/UIService.js";
import { EmailValidator, PasswordValidator } from "../models/FormValidators.js";

/**
 * Login Controller
 * Handles presentation layer logic for login/registration functionality
 */
export class LoginController {
  constructor() {
    this.authService = new AuthenticationService();
    this.uiService = new UIService();
    this.initializeElements();
    this.bindEvents();
  }

  /**
   * Initialize DOM elements
   */
  initializeElements() {
    // Login elements
    this.inputMail = document.getElementById("email");
    this.inputPwd = document.getElementById("pwd");
    this.loginBtn = document.getElementById("log-in-btn");
    this.errorMessage = document.getElementById("errorMsg");

    // Registration elements
    this.userName = document.getElementById("user");
    this.newEmail = document.getElementById("signin-email");
    this.newPwd = document.getElementById("create-pwd");
    this.confirmPwd = document.getElementById("confirm-pwd");
    this.signUpBtn = document.getElementById("sign-up-btn");
    this.signInLink = document.getElementById("link-signin");
    this.errMsgII = document.getElementById("errorMsgII");

    // Modal elements
    this.modal = document.getElementById("success-modal");
    this.closeModal = document.getElementById("close-modal");
  }

  /**
   * Bind event listeners
   */
  bindEvents() {
    // Login events
    this.inputMail.addEventListener("keyup", () =>
      this.validateEmailField("email", "errorMsg")
    );
    this.inputPwd.addEventListener("keyup", () =>
      this.validatePasswordField("pwd", "errorMsg")
    );
    this.loginBtn.addEventListener("click", (e) => this.handleLogin(e));

    // Registration events
    this.newEmail.addEventListener("keyup", () =>
      this.validateEmailField("signin-email", "errorMsgII")
    );
    this.newPwd.addEventListener("keyup", () => this.handlePasswordInput());
    this.confirmPwd.addEventListener("keyup", () =>
      this.handlePasswordConfirmation()
    );
    this.signUpBtn.addEventListener("click", (e) => this.handleRegistration(e));
    this.signInLink.addEventListener("click", () =>
      this.uiService.showRegistrationView()
    );

    // Modal events
    this.closeModal.addEventListener("click", () => this.uiService.hideModal());
    window.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.uiService.hideModal();
      }
    });
  }

  /**
   * Validate email field
   */
  validateEmailField(emailFieldId, errorFieldId) {
    const emailField = document.getElementById(emailFieldId);
    const emailValidation = EmailValidator.validate(emailField.value);

    this.uiService.clearMessage(errorFieldId);

    if (!emailValidation.isValid && emailField.value.length > 0) {
      this.uiService.showError(errorFieldId, emailValidation.message);
    }
  }

  /**
   * Validate password field
   */
  validatePasswordField(passwordFieldId, errorFieldId) {
    const passwordField = document.getElementById(passwordFieldId);

    this.uiService.clearMessage(errorFieldId);

    if (passwordField.value.length > 0 && passwordField.value.length < 8) {
      this.uiService.showError(errorFieldId, "Please, insert a valid password");
    }
  }

  /**
   * Handle password input for registration
   */
  handlePasswordInput() {
    this.uiService.clearMessage("errorMsgII");
    const passwordValidation = PasswordValidator.validate(this.newPwd.value);
    this.uiService.updatePasswordCriteria(passwordValidation.criteria);
  }

  /**
   * Handle password confirmation
   */
  handlePasswordConfirmation() {
    this.uiService.hidePasswordCriteria();
    const confirmValidation = PasswordValidator.validateConfirmation(
      this.newPwd.value,
      this.confirmPwd.value
    );

    if (confirmValidation.isValid) {
      this.uiService.showSuccess("errorMsgII", confirmValidation.message);
    } else {
      this.uiService.showError("errorMsgII", confirmValidation.message);
    }
  }

  /**
   * Handle login form submission
   */
  async handleLogin(event) {
    event.preventDefault();

    const email = this.inputMail.value;
    const password = this.inputPwd.value;

    const result = await this.authService.login(email, password);

    if (result.success) {
      this.uiService.clearMessage("errorMsg");
      // Redirect to dashboard or show success message
      alert("Login successful! Welcome " + (result.user.name || "User"));
    } else {
      this.uiService.showError("errorMsg", result.message);
    }
  }

  /**
   * Handle registration form submission
   */
  async handleRegistration(event) {
    event.preventDefault();

    const name = this.userName.value;
    const email = this.newEmail.value;
    const password = this.newPwd.value;
    const confirmPassword = this.confirmPwd.value;

    const result = await this.authService.register(
      name,
      email,
      password,
      confirmPassword
    );

    if (result.success) {
      this.uiService.showModal(result.message);
      this.clearRegistrationForm();
    } else {
      this.uiService.showError("errorMsgII", result.message);
    }
  }

  /**
   * Clear registration form
   */
  clearRegistrationForm() {
    this.userName.value = "";
    this.newEmail.value = "";
    this.newPwd.value = "";
    this.confirmPwd.value = "";
    this.uiService.clearMessage("errorMsgII");
    this.uiService.hidePasswordCriteria();
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new LoginController();
});
