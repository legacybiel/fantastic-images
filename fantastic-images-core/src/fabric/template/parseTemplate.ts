import { ITemplate } from "../../types/ITemplate";
import { isValidTemplate } from "./isValidTempalte";
import { TemplateSchema } from "./TemplateSchema";

export const parseTemplate = (template: ITemplate | any) => {
  if (isValidTemplate(template)) {
    return (TemplateSchema.cast(template) as unknown) as ITemplate;
  }
  return null;
};