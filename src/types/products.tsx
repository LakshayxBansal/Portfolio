import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: string;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  stack2?: string[];
  content?: React.ReactNode | string;
};
