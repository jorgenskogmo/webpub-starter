export const head = (config, _page) => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${config.name} ${config.version}</title>
      <link rel="stylesheet" href="/assets/styles.css?t=${Date.now()}" />
    </head>
  `;

export const foot = (_config, _page) => `
  </body>
</html>`;

export const main = (config, page) => `
<body>
  <main>
    <code>Local page (${config.name} ${config.version})</code>
    
    <h1>${page.meta.title}</h1>
    ${page.meta.date ? `<p class="small">date: ${page.meta.date}</p>` : ""}
    
    ${page.meta.modified
    ? `<p class="small">modified: ${page.meta.modified}</p>`
    : ""
  }

    
    ${page.meta?.tags
    ? `<ul class="tags">${page.meta.tags
      .map((t) => `<li>${t}</li>`)
      .join("")}</ul>`
    : "notags"
  }
    

    <section class="content">${page.content}</section>

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

  /*

  TODO:
  default page template is main()
  lets follow a convention where page.url (e.g. "projects") would look for a render method
  called renderProjects(config, page) in this file
  if found, use that instead of main()....


  */

  return `${head(config, page)} ${main(config, page)} ${foot(config, page)}`;
};

export default { head, main, foot, render };
