import React from "react";

import Post from "./Post";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Post",
  component: Post,
};

const Template = (args) => (
  <Post
    contents="at Function.getInitialProps loadGetInitialProps at renderToHTML"
    date="2021.08.01"
  />
);

export const Primary = Template.bind({});
Primary.args = {};
