import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest) => {
    const code = req.nextUrl.searchParams.get('code') as string;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const CLIENT_ID = process.env.CLIENT_ID;
    const TOKEN_ENDPOINT = process.env.TOKEN_ENDPOINT as string;
    const redirectUri = process.env.REDIRECT_URL as string;
    const scopes = process.env.SCOPES as string;

    // build headers
    const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const headers = {
        authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    // build request body
    const params = new URLSearchParams();
    params.append('redirect_uri', redirectUri);
    params.append('scope', scopes);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);

    // execute request
    const requestOptions = {
        method: 'POST',
        body: params,
        headers
    };
    console.log(requestOptions);
    console.log(TOKEN_ENDPOINT);
    
    const oauthResponse = await fetch(TOKEN_ENDPOINT, requestOptions);

    // handle errors
    if (!oauthResponse.ok) { // res.status >= 200 && res.status < 300
        console.log(`Token request failed with "${oauthResponse.statusText}"`);
        return NextResponse.error();
    }

    // work with the oauth response
    const responseData = await oauthResponse.json();

    // do something with the `access_token` from `responseData`
    // {
    //     "access_token": "123456789",
    //     "token_type": "bearer",
    //     "expires_in": 86399,
    //     "scope": "wow.profile"
    // }

    // send a JSON response (just an example)
    return new NextResponse(JSON.stringify(responseData));
}

export { handler as GET}