# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Live Demo

Add your deployed URL here after you deploy (Vercel / Netlify / GitHub Pages):

Live demo: https://your-app-url.example

## Screenshots

Place screenshots under `screenshots/` and reference them here. Example:

```
screenshots/home.png
screenshots/task-manager.png
```

Embed in markdown like:

```markdown
![Home screen](screenshots/home.png)
```

## Deployment quick-start

Vercel / Netlify (Vite):

1. Build locally to test:

```pwsh
npm run build
```

2. Output directory for Vite is `dist/` — use this as the publish directory in Vercel/Netlify.

3. Connect your GitHub repo on Vercel or Netlify and set the build command to `npm run build` and publish directory to `dist`.

GitHub Pages (static):

1. Install `gh-pages` and add deploy scripts if you prefer automatic deploy to `gh-pages` branch.

```pwsh
npm install --save-dev gh-pages
# add scripts to package.json: predeploy and deploy
```

2. Run `npm run build` and publish the `dist/` folder to GitHub Pages or use a GitHub Action to automate deployment.

## Helpful tips

- Commit frequently with clear messages, e.g. `feat(task): add task completion`.
- Keep screenshots small (compress PNG/JPEG) and add them to `screenshots/`.
- If the autograder expects specific files, ensure they are present at the repository root.


## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 