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
  // netlifyIdentity.on("login", (user) => console.log("login", user));
  netlifyIdentity.open();
}
