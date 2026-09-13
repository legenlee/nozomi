export type MicrosoftAuthRequest = {
  Properties: {
    AuthMethod: "RPS";
    SiteName: "user.auth.xboxlive.com";
    RpsTicket: "d=<access token>"; // your access token from the previous step here, make sure that it is prefixed with `d=`
  };
  RelyingParty: "http://auth.xboxlive.com";
  TokenType: "JWT";
};
