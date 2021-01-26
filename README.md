# 🧰 TypeScript Starter Kit | 2021

> This is a basic TypeScript starter project with all the basic tools you need to keep your codebase sparkling while it grows.

## Development

1. If you're using NVM to manage your Node installation/versions, run `nvm use` to use the Node version specified on `.nvmrc` file.

2. Copy the content of `.env.example` to `.env` and customize the values of your settings. The .env file is registered in the .gitignore and should not be submitted to your code repository.

3. This project uses **Husky** to run command on Git Hooks. Explore `.huskyrc.json`. It's a best practice to do not commit code that is broken and to not push code that lowers the test coverage below the minimum acceptable for the project.

4. Nodemon is only used in development, and only exists as devDependency. Avoid using `npm run start` in production, but instead, run `node ./dist/index.js`.

5. `Prettier` is used to format your code. Customize your settings in the `.prettierrc` file.

6. `Jest` is used as a testing framework (and assertion library). Feel free to replace to Mocha/Chai, Tape, AVA, or whatever is your cup of tea.

7. `ESLint` is used as our linter of choice since when TS Lint was deprecated.

8. Explore the `scripts` section in the `package.json` to view all the shortcuts you have at your disposal.

9. Have fun!

### Scripts

#### `yarn start`

Starts the application in development using `nodemon` and `ts-node` for hot reloading.

#### `yarn start:serve`

Starts the application in development mode using `nodemon` without hot reloading.

#### `yarn start:debug`

Whenever you add breakpoints in the app and wants to use Chrome Dev Tools to inspect your code in execution time, this is what you need.

#### `yarn expose`

Expose your app from your computer to the internet. Make sure the por specified in the script (3010 in this case), matches the port you have set up in the `.env` file. This is useul when working with 3rd party tools that need a callback URL.

#### `yarn build`

Builds the app in the `/dist` folder. This is the code to be used in production.

#### `yarn test:watch`

When you're working on implementation details that are covered by unit tets, you often want to test the result of your changes on every "save". This command is your best friend.

---

**PRO TIP (1):** Configure your VS Code to format your code on save:
Code -> Preferences -> Settings (for Mac)
Search for "Default Formatter". In the dropdown, prettier will show as esbenp.prettier-vscode.

**PRO TIP (2):** On VS Code, the Debug sidebar panel displays a few options loaded from the `.vscode/launch.json`. When you want to run only 1 specific `*.spec.ts` file, open this file and select `Jest Debug File`. When you want to run all test files and stop on breakpoints, choose `Jest Debug`.
