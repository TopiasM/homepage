import type { AstroComponentFactory } from "astro/runtime/server/render/astro/factory.js";

export interface Project {
  img: ImageMetadata;
  imgAlt: string;
  href: string;
  title: string;
  description: string;
  tech: string[];
  repo?: string;
}

export interface ExpertiseProps {
  Icon: AstroComponentFactory;
  title: string;
  description: string;
}
