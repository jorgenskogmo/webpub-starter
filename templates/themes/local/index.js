export const head = (config, page) => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${config.name} ${config.version}</title>
      <link rel="stylesheet" href="/assets/styles.css?t=${Date.now()}" />
    </head>
  `;

export const foot = (_config, page) => `
  </body>
</html>`;

export const main = (config, page) => `
<body>
  <main>
    <h1>Local page (${config.name} ${config.version})</h1>

    <code>${JSON.stringify(page.meta)}</code>

    hallo4
    <hr>
    
    <code>${JSON.stringify(page.children)}</code>

    <textarea style="display:none" id="data-page">${JSON.stringify(
      page
    )}</textarea>
    <script>
      const txt = document.querySelector("#data-page").value.trim();
      // console.log("txt:", txt)
      console.log("page:", JSON.parse(txt))
    </script>

    <div>${page.content}</div>
  </main>
`;

const list = (page) => {
  return page.children
    .map((child) => {
      return `<li><a href="${child.url}">${child.meta.title} (${child.url})</a></li>\n`;
    })
    .join("");
};

export const render = (config, page) => {
  // console.log("@render", page.url, page.children);

  if (page.type === "list") {
    page.content += `<ul>${list(page)}</ul>`;
  }

  return `${head(config, page)} ${main(config, page)} ${foot(config, page)}`;
};

export default { head, main, foot, render };
