/**
 * User Model
 * Represents a user entity in the system
 */
export class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
  }

  // Convert user to JSON for storage
  toJSON() {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
    };
  }

  // Create user from JSON data
  static fromJSON(data) {
    const user = new User(data.name, data.email, data.password);
    user.createdAt = new Date(data.createdAt);
    return user;
  }
}

/**
 * Login Credentials Model
 */
export class LoginCredentials {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
