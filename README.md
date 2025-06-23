# MatrixGate Login System

A modern, gaming-themed login and registration system built with the **MSC (Model-Service-Controller)** architecture pattern.

## 🏗️ Architecture Overview

This project follows the **MSC (Model-Service-Controller)** architecture pattern, which provides clear separation of concerns:

### 📁 Project Structure

```
login.mg/
├── src/
│   ├── models/                # Model Layer
│   │   ├── User.js                   # User entity model
│   │   ├── UserRepository.js         # Data access and persistence
│   │   └── FormValidators.js         # Data validation models
│   ├── services/              # Service Layer
│   │   ├── AuthenticationService.js  # Authentication business logic
│   │   └── UIService.js              # UI state management service
│   ├── controllers/           # Controller Layer
│   │   └── LoginController.js        # User interaction handler
│   └── styles/
│       └── style.css                 # Application styling
├── assets/
│   └── images/                # Static assets
├── index.html                 # Main HTML file
├── package.json              # Project configuration
└── README.md                 # This file
```

## 🎯 MSC Layer Responsibilities

### 1. **Model Layer** (`src/models/`)
- **Purpose**: Defines data structures, validation rules, and data access logic
- **Components**:
  - `User.js`: User entity with JSON serialization methods
  - `UserRepository.js`: Data persistence and CRUD operations for users
  - `FormValidators.js`: Email, password, and form validation logic
- **Responsibilities**:
  - Data model definitions
  - Data validation rules
  - Data persistence (localStorage)
  - Business data logic

### 2. **Service Layer** (`src/services/`)
- **Purpose**: Contains business logic and application services
- **Components**:
  - `AuthenticationService.js`: Authentication workflows and user management
  - `UIService.js`: UI state management and visual feedback
- **Responsibilities**:
  - Business rule implementation
  - Service orchestration
  - Application workflow management
  - Cross-cutting concerns

### 3. **Controller Layer** (`src/controllers/`)
- **Purpose**: Handles user interactions and coordinates between services and models
- **Components**:
  - `LoginController.js`: Manages UI events, form handling, and user interactions
- **Responsibilities**:
  - Event handling
  - User input processing
  - Service coordination
  - View state management

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

1. **Clear Separation of Concerns**: Each layer has distinct responsibilities
2. **Maintainability**: Easy to modify individual components without affecting others
3. **Testability**: Each layer can be unit tested independently
4. **Scalability**: Easy to extend functionality within appropriate layers
5. **Reusability**: Models and services can be reused across different controllers
6. **Single Responsibility**: Each class has a focused, single purpose

### Data Flow in MSC Pattern

```
User Input → Controller → Service → Model → Data Storage
    ↓           ↓          ↓        ↓         ↓
UI Events → LoginController → AuthService → UserRepository → localStorage
          ↓                    ↓              ↓
      UIService ← Response ← Business Logic ← Data
```

### Security Considerations

- Client-side validation (should be supplemented with server-side validation in production)
- Password strength requirements
- Email format validation
- Input sanitization

## 📝 Development Guidelines

### Adding New Features in MSC

1. **Data Models**: Add to `src/models/` for new entities and data structures
2. **Business Logic**: Add to `src/services/` for new business workflows
3. **User Interactions**: Add to `src/controllers/` for new UI behaviors
4. **Styling**: Extend `src/styles/style.css` for visual enhancements

### MSC Design Principles

- **Models**: Focus on data representation and validation
- **Services**: Implement business logic without UI dependencies
- **Controllers**: Handle user interactions and coordinate services
- **No circular dependencies**: Controllers use Services, Services use Models
- **Single responsibility**: Each class should have one reason to change

### Code Standards

- Use ES6+ features and modules
- Follow the MSC architecture pattern strictly
- Keep functions focused and single-purpose
- Use descriptive variable and function names
- Add JSDoc comments for all public methods
- Maintain separation of concerns between layers

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

_Built with ❤️ using MSC (Model-Service-Controller) architecture_
