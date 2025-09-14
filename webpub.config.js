//@ts-check
import { defineConfig } from "@dearstudio/webpub";
import { srcsetPlugin } from "@dearstudio/webpub/plugins/srcset/index.js";

srcsetPlugin.configure({
  image_widths: [200, 400, 800, 1200, 1600],
});

const config = {
  content_directory: "content",
  theme_directory: "templates",
  plugins: [srcsetPlugin],
  output_directory: "dist",
};

defineConfig(config);
