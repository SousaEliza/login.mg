# MatrixGate Login System

A modern, gaming-themed login and registration system built with a clean layered architecture pattern.

## 🏗️ Architecture Overview

This project follows a **3-Layer Architecture** pattern:

### 📁 Project Structure

```
login.mg/
├── src/
│   ├── presentation/          # Presentation Layer
│   │   ├── scripts/
│   │   │   └── LoginController.js    # UI Controllers
│   │   └── styles/
│   │       └── style.css             # Styling
│   ├── business/              # Business Logic Layer
│   │   ├── services/
│   │   │   └── AuthenticationService.js  # Core business logic
│   │   └── validators/
│   │       └── FormValidators.js         # Validation logic
│   └── data/                  # Data Access Layer
│       ├── models/
│       │   └── User.js               # Data models
│       └── repositories/
│           └── UserRepository.js     # Data persistence
├── assets/
│   └── images/                # Static assets
├── index.html                 # Main HTML file
├── package.json              # Project configuration
└── README.md                 # This file
```

## 🎯 Layer Responsibilities

### 1. **Presentation Layer** (`src/presentation/`)
- **Purpose**: Handles user interface and user interactions
- **Components**:
  - `LoginController.js`: Manages UI events, form validation feedback, and view transitions
  - `style.css`: All styling and animations
- **Responsibilities**:
  - DOM manipulation
  - Event handling
  - User input validation feedback
  - View state management

### 2. **Business Logic Layer** (`src/business/`)
- **Purpose**: Contains the core application logic and business rules
- **Components**:
  - `AuthenticationService.js`: Handles login/registration logic and UI state management
  - `FormValidators.js`: Validation rules and logic
- **Responsibilities**:
  - Authentication workflows
  - Business rule enforcement
  - Data validation
  - Service orchestration

### 3. **Data Access Layer** (`src/data/`)
- **Purpose**: Manages data persistence and retrieval
- **Components**:
  - `User.js`: User entity model
  - `UserRepository.js`: Data access operations
- **Responsibilities**:
  - Data storage (localStorage)
  - Data retrieval
  - Data model definitions
  - CRUD operations

## 🚀 Getting Started

### Prerequisites
- Modern web browser with ES6 module support
- Node.js (for development server)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd login.mg
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run start` - Start production server on port 3000
- `npm run build` - Build the project (placeholder)
- `npm run test` - Run tests (placeholder)
- `npm run lint` - Run linting (placeholder)

## 🎮 Features

- **Modern Gaming UI**: Purple-themed design with game controller imagery
- **Dual Mode**: Login and Registration forms
- **Real-time Validation**: Email and password validation with visual feedback
- **Password Strength Indicator**: Visual criteria checklist for password requirements
- **Responsive Design**: Mobile-friendly interface
- **Local Storage**: User data persistence
- **Modal Notifications**: Success/error feedback
- **Smooth Animations**: CSS transitions and animations

## 🔒 Default Credentials

For demonstration purposes, you can login with:
- **Email**: `best.player@mail.com`
- **Password**: `tj4M@k58Qcs1`

## 🎨 Design Features

- **Gaming Theme**: Controller images and purple color scheme
- **Modern CSS**: Gradients, shadows, and smooth transitions
- **Font Awesome Icons**: Professional iconography
- **Google Fonts**: Tourney and Poppins fonts for modern typography
- **Responsive Layout**: Adapts to different screen sizes

## 🔧 Technical Details

### Architecture Benefits

1. **Separation of Concerns**: Each layer has a specific responsibility
2. **Maintainability**: Easy to modify individual layers without affecting others
3. **Testability**: Each layer can be tested independently
4. **Scalability**: Easy to extend functionality within each layer
5. **Reusability**: Components can be reused across different parts of the application

### Data Flow

```
User Interaction → Presentation Layer → Business Layer → Data Layer
     ↓                    ↓                 ↓             ↓
UI Events → Controllers → Services → Repositories → Storage
```

### Security Considerations

- Client-side validation (should be supplemented with server-side validation in production)
- Password strength requirements
- Email format validation
- Input sanitization

## 📝 Development Guidelines

### Adding New Features

1. **Data Models**: Add to `src/data/models/`
2. **Business Logic**: Add to `src/business/services/`
3. **Validation**: Add to `src/business/validators/`
4. **UI Components**: Add to `src/presentation/scripts/`
5. **Styling**: Extend `src/presentation/styles/style.css`

### Code Standards

- Use ES6+ features and modules
- Follow the established layer pattern
- Keep functions focused and single-purpose
- Use descriptive variable and function names
- Add JSDoc comments for all public methods

## 🚀 Future Enhancements

- [ ] Server-side integration
- [ ] Database connectivity
- [ ] JWT token authentication
- [ ] Password reset functionality
- [ ] Social media login
- [ ] User profile management
- [ ] Email verification
- [ ] Two-factor authentication
- [ ] Unit tests implementation
- [ ] End-to-end tests

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**@ElizaSousa**

---

*Built with ❤️ and clean architecture principles*
