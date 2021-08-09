import netlifyIdentity from "netlify-identity-widget";

export const auth = netlifyIdentity;
export function init(callback) {
  netlifyIdentity.on("init", (user) => callback(user));
  netlifyIdentity.init();
}

export function login(callback) {
  netlifyIdentity.open();
  netlifyIdentity.on("login", (user) => {
    callback(user);
    netlifyIdentity.close();
  });
}

export function logOut(callback) {
  netlifyIdentity.open();
  netlifyIdentity.on("logout", () => {
    callback();
    netlifyIdentity.close();
  });
}
