import { type WebpubOptions, defineConfig } from "webpub";

import { srcsetPlugin } from "webpub/plugins/srcset/index.js";

srcsetPlugin.configure({
  image_widths: [200, 400, 800, 1200, 1600],
});

const config: WebpubOptions = {
  name: "webpub demo",
  version: "0.0.1",
  content_directory: "content",
  output_directory: "site",
  theme_directory: "templates/themes/qdi-ds",
  plugins: [srcsetPlugin],

  // optional:
  marked_options: { gfm: true, breaks: true },
  open_browser: true,
  devserver_enabled: true,
  devserver_port: 3000,

};

defineConfig(config);
