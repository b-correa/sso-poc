import NextAuth, { AuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: AuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL!,
      idToken: true,
    })
  ],
  callbacks: {
    // The JWT callback is called any time a token is written to
    jwt: ({ token, user, account, profile, isNewUser }) => {
      console.log(token)
      console.log(account)
      if (account) {
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.auth0_id = token.sub;
        token.type = account.token_type;
      }
      delete token.name;
      delete token.picture;
      delete token.sub;
      return token;
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}