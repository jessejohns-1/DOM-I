const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//top navigation-------------------------------------

//displaying my top navigation using a for each
const topNav = document.querySelectorAll("header nav a");
topNav.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

//cta content------------------------------------

// making ctaH1 telling it to = a queryselector in which i need to find it's specific location
const ctaH1 = document.querySelector("section div h1");
//Taking text content and adding the information from above to display
ctaH1.textContent = siteContent.cta.h1;
//creating button
const topButton = document.querySelector("section div button");
topButton.textContent = siteContent.cta.button;
//adding image to site
const headImg = document.getElementById("cta-img");
headImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Main contents-------------------------------------
//top content header
const tophead = document.querySelectorAll(".top-content h4");
tophead[0].textContent = siteContent["main-content"]["features-h4"];
tophead[1].textContent = siteContent["main-content"]["about-h4"];

//top paragraphs
const topP = document.querySelectorAll(".top-content p");
topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];

//the middle image
const mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom content header
const botHead = document.querySelectorAll(".bottom-content h4");
botHead[0].textContent = siteContent["main-content"]["services-h4"];
botHead[1].textContent = siteContent["main-content"]["product-h4"];
botHead[2].textContent = siteContent["main-content"]["vision-h4"];

//bot parahraphs
const botP = document.querySelectorAll(".bottom-content p");
botP[0].textContent = siteContent["main-content"]["services-content"];
botP[1].textContent = siteContent["main-content"]["product-content"];
botP[2].textContent = siteContent["main-content"]["vision-content"];

//contact
const contactH = document.querySelector(".contact h4");
contactH.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent.contact["address"];
contactP[1].textContent = siteContent.contact["phone"];
contactP[2].textContent = siteContent.contact["email"];

//footer
const footerInfo = document.querySelector("footer");
footerInfo.textContent = siteContent.footer.copyright;

const catPhotos = document.createElement("a");
catPhotos.textContent = "PicsOfMycat";
catPhotos.href = "#";
document.querySelector("nav").appendChild(catPhotos);

const moreCatPhotos = document.createElement("a");
moreCatPhotos.textContent = " More cat photos!";
moreCatPhotos.href = "#";
document.querySelector("nav").prepend(moreCatPhotos);

//using my for each to add the color green to the text
topNav.forEach((item) => {
  item.style.color = "green";
});
