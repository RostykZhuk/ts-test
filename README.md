# How to Run This Project

## Requirements
- Node.js (version 16 or newer recommended)

## Running the Project

1. Open your terminal in this project folder.
2. Run:
node index.ts
> If you get an error that the file cannot be executed directly, try one of the following methods:

### Option 1: Use ts-node (recommended for development)

1. Install ts-node if you haven't already:
npm install -g ts-node typescript
2. Run:
ts-node index.ts
### Option 2: Compile TypeScript to JavaScript and Run

1. Install TypeScript if you haven't already:
npm install -g typescript
2. Compile the file:
tsc index.ts
3. Run the compiled file:
node index.js