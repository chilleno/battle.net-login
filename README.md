This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run build
npm run dev
```

Open [http://localhost:3000/api/oauth/blizzard/login](http://localhost:3000/api/oauth/blizzard/login) with your browser to see the result.


# 1. The basics

## 1.1. Gaining access to the API

To gain access to the API visit [API Access](https://develop.battle.net/access) and follow the instructions.

When creating your first client credentials use http://127.0.0.1:3000/api/oauth/blizzard/callback and check the option I do not have a service URL for this client if you still don’t know exactly how you are gonna use it (you can edit later).

👉 It can take up to 15 minutes for your new credentials start working.

## 1.2. Testing the API

If you want to play around the API and see what data is available, you can use your new credentials on the official API documentation 663.

# 2. .env values

CLIENT_ID= this value is given by blizzard in the step 1
CLIENT_SECRET= this value is given by blizzard in the step 1
AUTHORIZE_ENDPOINT='https://us.battle.net/oauth/authorize' //should be the same until blizzard change it
TOKEN_ENDPOINT='https://us.battle.net/oauth/token'  //should be the same until blizzard change it
REDIRECT_URL='http://127.0.0.1:3000/api/oauth/blizzard/callback'  //should be the same until you publish your project
SCOPES='wow.profile' // modify as needed
STATE= This value requires a random key I recomend use letters and numbers only