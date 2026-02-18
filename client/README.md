# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact Email Setup (Gmail App Password)

This project uses a serverless endpoint at `client/api/send-email.js` with Nodemailer.

### Required setup

1. Enable 2-Step Verification on `venilanaik2005@gmail.com`.
2. Generate a Gmail App Password (16 characters) from Google Account security settings.
3. Add env vars in Vercel project settings (or local `.env` for server runtime):

```env
GMAIL_USER=venilanaik2005@gmail.com
GMAIL_APP_PASSWORD=your_16_char_gmail_app_password
CONTACT_RECEIVER=venilanaik2005@gmail.com
```

### Notes

- Never expose `GMAIL_APP_PASSWORD` in client-side `VITE_` variables.
- The contact form posts to `/api/send-email`.
