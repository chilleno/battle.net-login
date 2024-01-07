import { NextApiResponse } from "next"
import { redirect } from 'next/navigation'

const handler = async (res: any, req: Request) => {
    const scopes = process.env.SCOPES as string;
    const redirectUri = process.env.REDIRECT_URL as string;
    const AUTHORIZE_ENDPOINT = process.env.AUTHORIZE_ENDPOINT;
    const CLIENT_ID = process.env.CLIENT_ID;
    const STATE = process.env.STATE as string;

    const scopesString = encodeURIComponent(scopes);
    const redirectUriString = encodeURIComponent(redirectUri);
    const authorizeUrl = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scopesString}&state=${STATE}&redirect_uri=${redirectUriString}&response_type=code`;
    console.log(authorizeUrl);
    redirect(authorizeUrl);
}

export { handler as GET }