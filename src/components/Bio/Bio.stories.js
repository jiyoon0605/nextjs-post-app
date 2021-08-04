import React from "react";
import avatar from "../../res/avatar.png";
import Bio from "./Bio";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = (args) => (
  <Bio
    handshot={avatar}
    name="JiYoon Lee"
    tagline="learning nextJS"
    role="frone-end"
  />
);

export const Primary = Template.bind({});
Primary.args = {};
