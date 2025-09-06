export const head = (config, page) => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${config.name} ${config.version}</title>
      <link rel="stylesheet" href="/assets/styles.css" />
    </head>
  `;

export const foot = (_config, page) => `
  </body>
</html>`;

export const main = (config, page) => `
<body>
  <main>
    <h1>Default page (${config.name} ${config.version})</h1>

    <code>${JSON.stringify(page.meta)}</code>

    <hr>
    
    <code>${JSON.stringify(page.children)}</code>

    <div>${page.content}</div>
  </main>
`;

const list = (page) => {
  return page.children
    .map((child) => {
      console.log(">> list", child.url);
      return `<li><a href="${child.url}">${child.meta.title} (${child.url})</a></li>\n`;
    })
    .join("");
};

export const render = (config, page) => {
  console.log("@render", page.url, page.children);

  if (page.type === "list") {
    page.content += `<ul>${list(page)}</ul>`;
  }

  return `${head(config, page)} ${main(config, page)} ${foot(config, page)}`;
};

export default { head, main, foot, render };
