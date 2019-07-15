import { storiesOf } from "@storybook/angular";
import { SectionComponent } from "./section.component";

storiesOf("Section", module)
  .add("With heading", () => ({
    component: SectionComponent,
    props: {
      heading: "Potato"
    }
  }))
  .add("Without heading", () => ({
    component: SectionComponent,
    props: {}
  }));
