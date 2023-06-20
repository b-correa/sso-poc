export const msalConfig = {
    auth: {
        clientId: "df47c3b1-944d-43bf-9576-c98f23de613d",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    system: {
        allowNativeBroker: false, // Disables WAM Broker
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};