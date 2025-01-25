# SWENG-862 Week 2 Assignment - Carson Wood

## Video demonstration
[https://youtu.be/iyly_XDxlMo]

## To Acces the Deployed App
The app is serving remotely at [https://sweng-862-week-2.web.app/]

## To Run the Application Locally
* Run `npm i` 
* Run `npm dev`
* The app should now be running on localhost.

## To Deploy the App
* You need my Google credentials with Firebase to do this.
* `npm install -g firebase-tools`
* `firebase login` with my credentials
* `npm run build`
* `firebase deploy`

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
