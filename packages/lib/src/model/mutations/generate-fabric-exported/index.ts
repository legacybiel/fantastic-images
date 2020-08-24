import { Template, TemplateObject } from '@fantastic-images/types';

const GENERATE_FABRIC_EXPORTED = ({
  objects,
}: {
  objects: TemplateObject[];
}) => (template: Template) => ({
  ...template,
  model: {
    ...template.model,
    fabricExported: {
      ...template.model.fabricExported,
      objects,
    },
  },
});

export default GENERATE_FABRIC_EXPORTED;