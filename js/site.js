document.addEventListener("DOMContentLoaded", function () {
  //NAVIGATION

  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    // hide all pages
    pages.forEach((page) => page.classList.remove("active"));

    // show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add("active");
    }

    // nav active state
    navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = document.querySelector(
      `.nav-link[data-page="${pageId}"]`,
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }

    // background change
    setBackground(pageId);

    // destination default (Mars)
    if (pageId === "destination") {
      setPlanet("mars");
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage(this.dataset.page);
    });
  });

  // DESTINATION

  const destinations = {
    moon: {
      name: "Moon",
      image: "./starter-code/assets/destination/image-moon.png",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective.",
      number: "285 MIL. KM",
      month: "7 MONTHS",
    },
    mars: {
      name: "Mars",
      image: "./starter-code/assets/destination/image-mars.png",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective.",
      number: "299 MIL. KM",
      month: "9 MONTHS",
    },
    europa: {
      name: "Europa",
      image: "./starter-code/assets/destination/image-europa.png",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective.",
      number: "355 MIL. KM",
      month: "14 MONTHS",
    },
    titan: {
      name: "Titan",
      image: "./starter-code/assets/destination/image-titan.png",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective.",
      number: "390 MIL. KM",
      month: "19 MONTHS",
    },
  };

  const tabs = document.querySelectorAll(".planet-tabs li");
  const planetImage = document.getElementById("planet-image");
  const planetName = document.getElementById("planet-name");
  const planetDesc = document.getElementById("planet-desc");
  const planetNumber = document.getElementById("planet-number");
  const planetMonth = document.getElementById("planet-month");

  function setPlanet(planetKey) {
    const planet = destinations[planetKey];
    if (!planet) return;

    planetImage.src = planet.image;
    planetName.textContent = planet.name;
    planetDesc.textContent = planet.description;
    planetNumber.textContent = planet.number;
    planetMonth.textContent = planet.month;

    tabs.forEach((tab) => tab.classList.remove("active"));

    const activeTab = document.querySelector(
      `.planet-tabs li[data-planet="${planetKey}"]`,
    );
    if (activeTab) {
      activeTab.classList.add("active");
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      setPlanet(this.dataset.planet);
    });
  });

  //BACKGROUND HANDLER

  function setBackground(page) {
    if (page === "home") {
      document.body.style.backgroundImage =
        "url('./starter-code/assets/home/background-home-desktop.jpg')";
    }

    if (page === "destination") {
      document.body.style.backgroundImage =
        "url('./starter-code/assets/destination/background-destination-desktop.jpg')";
    }

    if (page === "crew") {
      document.body.style.backgroundImage =
        "url('./starter-code/assets/crew/background-crew-desktop.jpg')";
    }

    if (page === "technology") {
      document.body.style.backgroundImage =
        "url('./starter-code/assets/technology/background-technology-desktop.jpg')";
    }
  }

  //  INITIAL LOAD
  showPage("home");
});

// Swiper Crew

var swiperCrew = new Swiper(".swiper-crew", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// Technology

const data = [
  {
    title: "LAUNCH VEHICLE",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space.",
    image: "./starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
  },
  {
    title: "SPACEPORT",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, numquam iste? Modi at officiis obcaecati odit expedita sapiente aperiam est debitis eveniet deserunt sint rem, nesciunt reprehenderit inventore alias vel dolor adipisci assumenda itaque impedit ipsa nostrum fugiat quod. Nisi dolorum aliquam numquam assumenda harum nihil dolore voluptas eligendi similique..",
    image: "./starter-code/assets/technology/image-spaceport-portrait.jpg",
  },
  {
    title: "SPACE CAPSULE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, numquam iste? Modi at officiis obcaecati odit expedita sapiente aperiam est debitis eveniet deserunt sint rem",
    image: "./starter-code/assets/technology/image-space-capsule-portrait.jpg",
  },
];

const title = document.getElementById("tech-title");
const desc = document.getElementById("tech-desc");
const image = document.getElementById("tech-image");
const buttons = document.querySelectorAll(".tech-buttons .btn");

buttons.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    title.textContent = data[i].title;
    desc.textContent = data[i].desc;
    image.src = data[i].image;
  });
});
