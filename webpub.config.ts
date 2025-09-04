import type { WebpubConfig } from "webpub";
// import { defineConfig } from "webpub";

import * as theme from "./templates/themes/local/index.js";
import * as srcsetPlugin from "webpub/plugins/srcset/index.js";

// TODO:
// srcsetPlugin.options = {
//   image_widths: [200, 400, 800, 1200, 1600]
// }

const config: WebpubConfig = {
  name: "webpub demo",
  version: "0.0.1",
  content_directory: "content",
  templates_directory: "PRIVATE",
  theme: theme,
  output_directory: "site",
  image_widths: [150, 300, 600, 1200], // FIXME: this is a srcset plugin config - should not be here
  plugins: [srcsetPlugin],
  marked_options: { gfm: true, breaks: true },
  open_browser: true,
  devserver_enabled: true,
  devserver_port: 3000,
};

export default config;
