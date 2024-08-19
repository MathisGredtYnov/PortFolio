// Liste des articles
const articles = [
  {
      image: "images/pic15.jpg",
      link: "B1/Ymmersion.html",
      title: "Ymmersion",
      description: "Le tout premier projet, réaliser un jeu vidéo en goolang dans le terminal avec un univers que l'on pouvait choisir.",
      category: "B1"
  },
  {
      image: "images/pic07.jpg",
      link: "B1/Hangman.html",
      title: "Hangman",
      description: "L'un des premiers projets, son but était de nous apprendre le goolang en faisant un petit jeu du pendu dans le terminal.",
      category: "B1"
  },
  {
      image: "images/pic08.jpg",
      link: "B1/HangmanWeb.html",
      title: "Hangman Web",
      description: "Le même projet que Hangman mais cette fois avec la relation entre le web et le go pour un meilleur affichage sur un site web.",
      category: "B1"
  },
  {
      image: "images/pic05.jpg",
      link: "B1/POO.html",
      title: "Programmation orientée objet",
      description: "Un autre cours scolaire pour nous apprendre la programmation orientée objet sur plusieurs langages de programmation.",
      category: "B1"
  },
  {
      image: "images/pic03.jpg",
      link: "B1/Java.html",
      title: "Java",
      description: "Un projet plus scolaire pour nous apprendre le langage Java à travers de nombreux exercices.",
      category: "B1"
  },
  {
      image: "images/pic02.jpg",
      link: "B1/Challenge48.html",
      title: "Challenge 48H",
      description: "Un challenge proposé par notre école où le but était de créer un 'escape game' virtuel avec des énigmes.",
      category: "B1"
  },
  {
      image: "images/pic09.jpg",
      link: "B1/Groupie-Tracker.html",
      title: "Groupie-Tracker",
      description: "Premier projet sur les API, le but était de récupérer et d'afficher des données dynamiques en utilisant une API choisie.",
      category: "B1"
  },
  {
      image: "images/pic01.jpg",
      link: "B1/AdminPostClient.html",
      title: "Administration Poste Client",
      description: "Introduction à toutes les facettes de Windows : installation et configuration de Windows, table de partition.",
      category: "B1"
  },
  {
      image: "images/pic04.jpg",
      link: "B1/Linux.html",
      title: "Linux",
      description: "Présentation de l'OS Linux : installation, configuration, et commandes de base.",
      category: "B1"
  },
  {
      image: "images/pic12.jpg",
      link: "B1/Reseaux.html",
      title: "Réseaux",
      description: "Apprentissage des bases des réseaux : protocoles, adresses IP, et commandes.",
      category: "B1"
  },
  {
      image: "images/pic14.jpg",
      link: "B1/Yboost.html",
      title: "Yboost",
      description: "Un projet en groupe d'étudiants pour monter une équipe E-Sport, développer un site, et organiser des tournois.",
      category: "B1"
  },
  {
      image: "images/pic06.jpg",
      link: "Bhtml/1/InfraSI.html",
      title: "Infra et SI",
      description: "Un des plus gros projets de l'année : créer le système informatique d'une petite entreprise à partir de zéro.",
      category: "B1"
  },
  {
      image: "images/pic11.jpg",
      link: "B1/ChallengeJS.html",
      title: "Challenge JS",
      description: "Un projet d'apprentissage pour donner les bases du JavaScript à travers plusieurs exercices et travaux pratiques.",
      category: "B1"
  },
  {
      image: "images/pic10.jpg",
      link: "B1/Forum.html",
      title: "Forum",
      description: "Un autre gros projet consistant à créer un forum permettant à des utilisateurs d'échanger sur divers sujets.",
      category: "B1"
  },
  {
      image: "images/pic15.jpg",
      link: "B2/Ymmersion.html",
      title: "Ymmersion B2",
      description: "Le tout premier projet de cette année : réaliser un jeu parmi une sélection en utilisant du C#.",
      category: "B2"
  },
  {
      image: "images/pic02.jpg",
      link: "B2/Python.html",
      title: "Python",
      description: "Premier module en Python : réaliser un réseau de menus pour résoudre des exercices.",
      category: "B2"
  },
  {
      image: "images/pic11.jpg",
      link: "B2/SQL.html",
      title: "SQL",
      description: "Approfondissement de nos bases en SQL.",
      category: "B2"
  },
  {
      image: "images/pic07.jpg",
      link: "B2/Reseaux.html",
      title: "Reseaux",
      description: "Un module pour nous apprendre les bases des réseaux, les ips, les routeurs, les switchs et les commandes de base.",
      category: "B2"
},
  {
      image: "images/pic09.jpg",
      link: "B2/PHP.html",
      title: "PHP",
      description: "Début d'un nouveau langage : le PHP.",
      category: "B2"
  },
  {
      image: "images/pic04.jpg",
      link: "B2/UX.html",
      title: "UX",
      description: "Un module sur l'UX et l'UI, plutôt inutile pour mon futur parcours.",
      category: "B2"
  },
  {
      image: "images/pic07.jpg",
      link: "B2/Hackaton.html",
      title: "Hackaton",
      description: "Un module sur l'UX et l'UI, plutôt inutile pour mon futur parcours.",
      category: "B2"
  },
  {
      image: "images/pic02.jpg",
      link: "B2/GameProgramming.html",
      title: "GameProgramming",
      description: "Probablement le meilleur module de cette année. Nous devions réaliser un jeu dans le style de Mario Bros sur Unity",
      category: "B2"
  },
  {
      image: "images/pic10.jpg",
      link: "B2/Accessibilite.html",
      title: "Accessibilite",
      description: "Un module en lien avec l'UX et qui malheuresement ne nous sert à rien puisque ça n'a rien à voir avec notre parcours.",
      category: "B2"
  },
  {
      image: "images/pic08.jpg",
      link: "B2/IOT.html",
      title: "IOT",
      description: "Un module assez particulier puisque nous devions developper un puce Anti Covid",
      category: "B2"
  },
  {
      image: "images/pic01.jpg",
      link: "B2/ProjetDev.html",
      title: "ProjetDev",
      description: "Un enorme module de dev sur toute l'année pour réaliser un jeu vidéo avec system de matchmaking et implémentation d'une IA",
      category: "B2"
  },
  {
      image: "images/pic03.jpg",
      link: "B2/ServerWindows.html",
      title: "ServerWindows",
      description: "Un petit module pour nous apprendre la gestion de server windows",
      category: "B2"
  },
  {
      image: "images/pic04.jpg",
      link: "B2/Securite.html",
      title: "Securite",
      description: "Suite du projet PHP, la création d'un login sécurisé",
      category: "B2"
  },
  {
      image: "images/pic07.jpg",
      link: "STAGE/Stage.html",
      title: "Stage B2",
      description: "Réalisation d'un site web via WordPress pour une sophrologue.",
      category: "Stage"
},

];

//Fonction pour ajuster les liens en fonction de la page actuelle
function adjustLink(link) {
  // Vérifier si on est sur la page index ou dans un sous-dossier
  const isIndexPage = window.location.pathname.endsWith('/Portfolio/index.html') || window.location.pathname === '/Portfolio/';
  
  // Si on est sur la page index, on ajoute "html/" devant les liens
  if (isIndexPage) {
      return `html/${link}`;
  } else {
      return `../${link}`;
  }
}

// Ajuster les liens pour chaque article
articles.forEach(article => {
  article.link = adjustLink(article.link);
});
