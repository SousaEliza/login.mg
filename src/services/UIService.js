/**
 * UI Service
 * Handles UI state management and visual feedback
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
