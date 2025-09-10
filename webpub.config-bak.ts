import { type WebpubOptions, defineConfig } from "webpub";

// import { srcsetPlugin } from "webpub/plugins/srcset/index.js";

// srcsetPlugin.configure({
//   image_widths: [200, 400, 800, 1200, 1600],
// });

const config: WebpubOptions = {
  content_directory: "content",
  theme_directory: "templates",
  // theme_directory: "templates-qdi",

  // plugins: [srcsetPlugin],

  // optional:
  marked_options: { gfm: true, breaks: true },
  open_browser: true,
  devserver_enabled: true,
  devserver_port: 3000,
};

defineConfig(config);
