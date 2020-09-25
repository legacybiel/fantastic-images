import { fabric as FabricTypes } from 'fabric';

export const imageFromURL = ({ fabric }: { fabric: any }) => (
  url: string,
  options: { [key: string]: any } = {}
): Promise<FabricTypes.Image> =>
  new Promise((resolve) => {
    fabric.Image.fromURL(url, resolve, options);
  });
