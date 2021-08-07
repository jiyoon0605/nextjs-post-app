import netlifyIdentity from "netlify-identity-widget";

export function init(callback) {
  netlifyIdentity.on("init", (user) => callback(user));
  netlifyIdentity.init();

  //   netlifyIdentity.on("logout", () => console.log("Logged out"));
  //   netlifyIdentity.on("error", (err) => console.error("Error", err));
  //   netlifyIdentity.on("open", () => console.log("Widget opened"));
  //   netlifyIdentity.on("close", () => console.log("Widget closed"));
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
