export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a9af3dba4d9a21142c8a5d",
                  title: "Sanity Studio",
                  name: "dwell-so-well-gatsby-studio",
                  apiId: "1a96b21e-7eea-4e91-983e-a66b19f33d04",
                },
                {
                  buildHookId: "60a9af3d97bedd2baa80ecd1",
                  title: "Blog Website",
                  name: "dwell-so-well-gatsby",
                  apiId: "7d19709a-d1ec-45af-b8b6-372fbcab8aaa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jamestrenda/dwell-so-well-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://dwell-so-well-gatsby.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
