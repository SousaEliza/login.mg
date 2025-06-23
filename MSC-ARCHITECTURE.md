# MSC Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        MSC ARCHITECTURE                        │
│                    (Model-Service-Controller)                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CONTROLLER    │    │     SERVICE     │    │      MODEL      │
│     LAYER       │    │      LAYER      │    │      LAYER      │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│                 │    │                 │    │                 │
│ LoginController │◄──►│ AuthService     │◄──►│ User            │
│                 │    │                 │    │                 │
│ • Event Handler │    │ • Login Logic   │    │ • Data Entity   │
│ • Input Binding │    │ • Register      │    │ • JSON Methods  │
│ • View Updates  │    │ • Validation    │    │                 │
│ • User Actions  │    │                 │    ├─────────────────┤
│                 │    ├─────────────────┤    │                 │
│                 │    │                 │    │ UserRepository  │
│                 │◄──►│ UIService       │    │                 │
│                 │    │                 │    │ • CRUD Ops      │
│                 │    │ • View States   │    │ • Data Storage  │
│                 │    │ • Modal Mgmt    │    │ • localStorage  │
│                 │    │ • Error Display │    │                 │
│                 │    │ • Success Msgs  │    ├─────────────────┤
│                 │    │                 │    │                 │
│                 │    │                 │    │ FormValidators  │
│                 │    │                 │    │                 │
│                 │    │                 │    │ • Email Rules   │
│                 │    │                 │    │ • Password Rules│
│                 │    │                 │    │ • Form Rules    │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATA FLOW                               │
└─────────────────────────────────────────────────────────────────┘

User Input → Controller → Service → Model → Data Storage
    ↓           ↓          ↓        ↓         ↓
Click/Type → LoginController → AuthService → UserRepository → localStorage
    ↓           ↓              ↓              ↓
  Events → Event Handlers → Business Logic → Data Operations
    ↓           ↓              ↓              ↓
Response ← View Updates ← Service Response ← Data Results

┌─────────────────────────────────────────────────────────────────┐
│                    RESPONSIBILITIES                            │
└─────────────────────────────────────────────────────────────────┘

MODELS (What)               SERVICES (How)              CONTROLLERS (When)
• Data structure            • Business rules            • User interactions
• Data validation           • Application logic         • Event handling
• Data persistence          • Service coordination      • View coordination
• Entity definitions        • Cross-cutting concerns    • Input processing
• Storage operations        • Workflow management       • Response handling

┌─────────────────────────────────────────────────────────────────┐
│                     BENEFITS                                   │
└─────────────────────────────────────────────────────────────────┘

✅ Clear Separation of Concerns
✅ Single Responsibility Principle
✅ Easy to Test Each Layer
✅ Maintainable and Scalable
✅ Reusable Components
✅ No Circular Dependencies
✅ Follow Industry Standards
```
