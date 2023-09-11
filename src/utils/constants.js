export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/9070283d-82ca-47f7-8a99-d49ea3afa60a/AU-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const LOGO =
  "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456";
export const USER_AVATAR = "https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
