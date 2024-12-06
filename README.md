# Tech Quiz Test Suite

A testing environment for a technical quiz application using Cypress for end-to-end and component testing.


## Video Demo

https://drive.google.com/file/d/1Yux0q2FUP0mYGydkVYtqWxlYvBYqBack/view

![Tech Quiz Demo](./Assets/Untitled Video.webm)

## Project Structure
```
Tech-Quiz-Test-Suite/
├── client/               # React + Vite frontend
├── server/              # Express backend
├── cypress/             # Cypress test files
│   ├── e2e/            # End-to-end tests
│   ├── component/      # Component tests
│   └── support/        # Test utilities
└── package.json
```

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd Tech-Quiz-Test-Suite
```

2. Install dependencies:
```bash
npm install
```

This will install dependencies for both client and server.

## Running the Application

1. Start the development environment (both client and server):
```bash
npm run start:dev
```

Or run them separately:

- Server only:
```bash
npm run server:dev
```

- Client only:
```bash
npm run client:dev
```

The client will run on `http://localhost:5175`
The server will run on `http://localhost:3001`

## Running Tests

To run Cypress tests:
```bash
npm test
```

This will open the Cypress Test Runner. From there:
1. Choose "E2E Testing"
2. Select a browser
3. Click "Start E2E Testing"
4. Select a test file to run

## Available Scripts

- `npm run start:dev` - Starts both client and server in development mode
- `npm run server:dev` - Starts server in development mode
- `npm run client:dev` - Starts client in development mode
- `npm test` - Opens Cypress Test Runner
- `npm run build` - Builds the application for production
- `npm run seed` - Seeds the database with initial data

## Testing

The project uses Cypress for:
- End-to-end testing
- Component testing
- Custom commands for common operations

### Test Files
- `cypress/e2e/quiz.cy.js` - End-to-end tests
- `cypress/component/Quiz.cy.jsx` - Component tests
- `cypress/support/commands.ts` - Custom test commands

## Technologies Used

- Frontend:
  - React
  - Vite
  - TypeScript
  - Bootstrap

- Backend:
  - Express.js
  - MongoDB
  - Mongoose

- Testing:
  - Cypress
  - @testing-library/cypress

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT

## Contact

Matt Chance - [mchance176@gmail.com]
Project Link: (https://github.com/Mchance176/Tech-Quiz-Test-Suite.git)
