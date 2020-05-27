import { withDesign } from "storybook-addon-designs";
import Button from "../src/components/Button";

export default {
  title: "My Stories",
  decorators: [withDesign],
};

export const myStory = () => ({
  components: { Button },
  template: "<Button label='hello'/>",
});

myStory.story = {
  name: "My awesome story",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
};