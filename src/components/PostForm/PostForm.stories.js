import React from "react";

import PostForm from "./PostForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/PostForm",
  component: PostForm,
};

const Template = (args) => <PostForm />;

export const Primary = Template.bind({});
Primary.args = {};
