export const app = {
  title: "Clash of Clans",
  courseUrl: "https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/",
  menu: [
    {
      alias: "home",
      url: "/",
      title: "Home",
    },
    {
      alias: "about",
      url: "/about",
      title: "About",
    },
  ],
};

export const carousel = {
  settings: {
    itemsToShow: 2,
    wrapAround: true,
    snapAlign: "center",
  },
  breakpoints: {
    300: {
      itemsToShow: 1,
    },
    700: {
      itemsToShow: 2,
    },
  },
};
