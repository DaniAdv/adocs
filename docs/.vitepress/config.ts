// Generăm dinamic întrebările
const generateQuestions = (num: number) => {
  const questionItems: { text: string; link: string; }[] = []; // Definește tipul explicit
  for (let i = 1; i <= num; i++) {
    questionItems.push({ text: `Intrebarea ${i}`, link: `/questions/${i}` });
  }
  return questionItems;
};

const questionItems = generateQuestions(475); // Generăm 475 de întrebări

export default {
  title: "ARR",
  description: "An awesome docs template built by me",
  lang: 'en-US',
  cleanUrls: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "ARR",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Introducere", link: "/guide" },
    ],
    sidebar: [
      {
        text: "Section",
        items: [
          { text: "Introducere", link: "/guide" },
          {
            text: "Intrebari",
            collapsible: true,
            collapsed: true,
            items: questionItems,  // Folosim lista generată aici
          } as const,  // Asigură-te că TypeScript știe că este constant
        ],
      },
    ],
    docFooter: {
      prev: "Previous page" , // Specifică textul pentru butonul anterior
      next: "Next page",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © ${new Date().getFullYear()}-present Dani`,
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
