# Discord Clone

<img width="2324" alt="Screenshot 2023-11-20 at 16 58 51" src="https://github.com/leo4512/discord-clone/assets/91560230/0326c8a9-1996-4cb6-8ddb-cc83ac4c22fa">
<img width="2323" alt="Screenshot 2023-11-20 at 16 59 47" src="https://github.com/leo4512/discord-clone/assets/91560230/afc6915d-fb95-430f-87d9-0dafc865cb17">

This project is a Next.JS based web application. It features major functionalities of discord, such as:
- server creation/modification/deletion
- channel creation/modification/deletion
- direct messaging
- image and pdf file sharing
- edit/delete sent messages
- member invitation
- member management
- infinite scrolling/loading
- emoji picking
- video/audio call
- light/dark mode
- responsive UI

The purpose of this project is solely for learning full-stack development in Next.JS and other useful tech stacks, including: 
- Tailwind CSS
- ShadcnUI
- Clerk Authentication
- Prisma
- PlanetScale
- Uploadthing
- Socket.io
- LiveKit
- Railway

Special thanks to @codewithantonio's outstanding tutorial on YouTube: https://www.youtube.com/@codewithantonio

## Prerequisites

- Node 18.x.x
- Next.JS 13.x.x

## Getting Started

### Clone this repo
```
git clone https://github.com/leo4512/discord-clone.git
```

### Install dependencies
```
npm i
```

### Create .env file at root directory
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma ORM with MySQL database
```
npx prisma generate
npx prisma db push
```

### Run the development server:

```bash
npm run dev
```

