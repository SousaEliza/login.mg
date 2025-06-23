/**
 * Email Validator
 * Handles email validation logic
 */
export class EmailValidator {
  static validate(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
      isValid: emailRegex.test(email),
      message: emailRegex.test(email)
        ? ""
        : "Please, insert a valid e-mail address",
    };
  }
}

/**
 * Password Validator
 * Handles password validation with specific criteria
 */
export class PasswordValidator {
  static validate(password) {
    const criteria = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[$*&@#]/.test(password),
    };

    const isValid = Object.values(criteria).every((criterion) => criterion);

    return {
      isValid,
      criteria,
      message: isValid
        ? "Password meets all requirements"
        : "Password does not meet all requirements",
    };
  }

  static validateConfirmation(password, confirmPassword) {
    const isValid = password === confirmPassword && password.length > 0;
    return {
      isValid,
      message: isValid
        ? "Thanks for confirming your password"
        : "Passwords does not match",
    };
  }
}

/**
 * Form Validator
 * Handles general form validation
 */
export class FormValidator {
  static validateLoginForm(email, password) {
    const errors = [];

    if (!email) {
      errors.push("Email is required");
    } else {
      const emailValidation = EmailValidator.validate(email);
      if (!emailValidation.isValid) {
        errors.push(emailValidation.message);
      }
    }

    if (!password) {
      errors.push("Password is required");
    } else if (password.length < 8) {
      errors.push("Please, insert a valid password");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  static validateRegistrationForm(name, email, password, confirmPassword) {
    const errors = [];

    if (!name || name.trim().length === 0) {
      errors.push("Name is required");
    }

    if (!email) {
      errors.push("Email is required");
    } else {
      const emailValidation = EmailValidator.validate(email);
      if (!emailValidation.isValid) {
        errors.push(emailValidation.message);
      }
    }

    if (!password) {
      errors.push("Password is required");
    } else {
      const passwordValidation = PasswordValidator.validate(password);
      if (!passwordValidation.isValid) {
        errors.push("Password does not meet all requirements");
      }
    }

    if (!confirmPassword) {
      errors.push("Password confirmation is required");
    } else {
      const confirmValidation = PasswordValidator.validateConfirmation(
        password,
        confirmPassword
      );
      if (!confirmValidation.isValid) {
        errors.push(confirmValidation.message);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
