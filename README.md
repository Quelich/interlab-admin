## Getting Started
# Techstack 

- Frontend: React(React Icons), [TailwindCSS](https://tailwindui.com/), [NextUI](https://nextui.org/)
- Backend: NextJS, NodeJS
- ORM: Prisma
- Database: Postgresql
- API: REST, GraphQL
- Programming: Typescript, Javascript

# First-time Developer Instructions  
Install the dependencies
```bash
npm install
# in case any error
npm install --legacy-peer-deps
````

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
If you work with database, do not forget to run Prisma
```bash
npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

