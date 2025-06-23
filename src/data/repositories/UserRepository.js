/**
 * User Repository
 * Handles data persistence and retrieval for users
 */
export class UserRepository {
    constructor() {
        this.storageKey = 'matrixgate_users';
        this.currentUserKey = 'matrixgate_current_user';
    }

    /**
     * Save user to localStorage
     * @param {User} user - User object to save
     * @returns {boolean} - Success status
     */
    saveUser(user) {
        try {
            const users = this.getAllUsers();
            users.push(user.toJSON());
            localStorage.setItem(this.storageKey, JSON.stringify(users));
            return true;
        } catch (error) {
            console.error('Error saving user:', error);
            return false;
        }
    }

    /**
     * Get all users from localStorage
     * @returns {Array} - Array of user objects
     */
    getAllUsers() {
        try {
            const usersData = localStorage.getItem(this.storageKey);
            return usersData ? JSON.parse(usersData) : [];
        } catch (error) {
            console.error('Error retrieving users:', error);
            return [];
        }
    }

    /**
     * Find user by email
     * @param {string} email - User email
     * @returns {Object|null} - User object or null if not found
     */
    findUserByEmail(email) {
        const users = this.getAllUsers();
        return users.find(user => user.email === email) || null;
    }

    /**
     * Validate user credentials
     * @param {string} email - User email
     * @param {string} password - User password
     * @returns {boolean} - Validation result
     */
    validateCredentials(email, password) {
        const user = this.findUserByEmail(email);
        return user && user.password === password;
    }

    /**
     * Set current logged in user
     * @param {Object} user - User object
     */
    setCurrentUser(user) {
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    }

    /**
     * Get current logged in user
     * @returns {Object|null} - Current user or null
     */
    getCurrentUser() {
        try {
            const userData = localStorage.getItem(this.currentUserKey);
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error retrieving current user:', error);
            return null;
        }
    }

    /**
     * Clear current user session
     */
    clearCurrentUser() {
        localStorage.removeItem(this.currentUserKey);
    }
}
