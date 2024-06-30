import {Component} from '@angular/core';
import {ProjectCardComponent} from "../project-card/project-card.component";
import {CardData} from "../models/card-data";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [
    ProjectCardComponent,
    NgTemplateOutlet
  ],
  standalone: true
})
export class PortfolioComponent {
  cards: Array<CardData> = new Array<CardData>();

  constructor() {

    const EDNCard: CardData = {
      title: "EDN, alternance chez INETUM",
      description: "A l'occasion de mon année de BUT3, j'ai été acceuilli dans l'entreprise INETUM pour une alternance. Il n'y avait pas de mission précise," +
      " j'ai donc réalisé de nombreuses tâches au court de cette année. Ces tâches étaient majoritairement des évolutions de l'application et des corrections de bugs." +
      " L'application EDN permet au CNG d'organiser les épreuves dématerialisées nationnales pour le 2ème cycle d'étude de médecine. Ces épreuves ont lieues chaques années" +
      " et se déroulent donc sur notre application pour les organisateurs et jury comme pour les candidats qui composent sur tablette.",
      description2: "J'ai réalisé plusieurs évolutions durant cette alternance comme des créations de statistiques représentées par des graphiques, des exports de fichiers PDF, JSON et CSV" +
      " et des interfaces pour l'éditions de questions",
      createdWith: ["Angular", "Symfony", "Oracle VirtualBox", "BootStrap"],
      imageSrc: "assets/projects/EDN.png"
    } as CardData
    
    const AsIsAsIfCard: CardData = {
      title: "As-Is/As-If framework, stage au LIG",
      description: "A l'issue de ma 2ème année de DUT Informatique en 2022, j'ai fait un stage au sein du Laboratoire Informatique de Grenoble." +
      " Ce stage était au sein de l'équipe SIGMA et le but était de réaliser une application web servant de support à la création de méthodes." +
      " Une méthode (comme par exemple la méthode Agile, SCRUM, ...) est composée d'un modèle de processus (représenté par un diagramme à bulles)" +
      " et d'un méta-modèle de produit (représenté par un diagramme de classes).",
      description2: "L'application devait permettre de créer ces modèles, de les modifier et de les exporter au format JSON." +
      " Beaucoup de fonctionnalités ont été développées comme la liaison entre deux \"intention\" nommée \"stratégie\", le zoom sémantique sur ces stratégies et" +
      " la création automatique du méta-modèle de produit à partir du modèle de processus. Vous trouverez plus d'informations sur ce projet sur le site de l'équipe SIGMA : http://sigma.imag.fr/",
      createdWith: ["HTML", "CSS", "JavaScript", "JointJS"],
      imageSrc: "assets/projects/ASIF.png"
    } as CardData
    
    const InterfaceJikanApiCard: CardData = {
      title: "Interface Jikan API",
      description: "Lors de ma 2ème année de DUT Informatique en 2022, j'ai réalisé un projet en trinôme qui consistait à choisir une API en ligne et à développer une interface" +
      " de recherche dans celle-ci. Nous avons choisi l'API Jikan qui contient des informations sur les mangas et les animés Japonais." +
      " Le projet c'est déroulé sur un mois et il contient diverses fonctionnalités comme afficher les informations des éléments trouvés, limiter le nombre de résultats obtenus ou bien enregistrer une recherche favorite.",
      sourceCodeLink: "https://github.com/EthanGely/m4103c-projet-gelye-germanin-chocn?tab=readme-ov-file",
      createdWith: ["HTML", "CSS", "JavaScript"],
      imageSrc: "assets/projects/JikanAPI.png"
    } as CardData

    const PyguinAdventureCard: CardData = {
      title: "Pyguin Adventure, GameJam 2022",
      description: "Lors de ma 2ème année de DUT Informatique en début 2022, j'ai réalisé une GameJam en équipe de 4 sous les thèmes \"Nourir puis utiliser\"" +
      " et \"Hors de contrôle la nuit\". Notre jeu était un jeu de plateforme à différents niveaux dans lequel on incarne un pingouin dont" +
      " le but est de ramasser tout les poissons d'un niveau pour les donner à un ours polaire.",
      description2: "La particularité de notre jeu est premièrement qu'il y a un cycle jour/nuit " +
      " qui inverse les contrôles du joueur la nuit. Deuxièmement, le jeu est jouable à 1,2,3 et 4 joueurs en local avec pour chaque nombres de joueurs 10 niveaux différents" +
      " Le but du jeu est donc de finir tout les niveaux le plus rapidement possible avec un leaderboard pour chaque nombre de joueurs. Nous avions gagné cette GameJam.",
      sourceCodeLink: "https://gricad-gitlab.univ-grenoble-alpes.fr/correnoc/gamejam",
      createdWith: ["Python", "PyGame"],
      imageSrc: "assets/projects/pyguin.png"
    } as CardData

    const BrakBoxCard: CardData = {
      title: "BräkBox",
      description: "Lors de ma 2ème année de DUT Informatique en fin 2021, j'ai réalisé un projet en équipe de 7 pour un commanditaire sur 6 mois." +
      " Ce projet avait pour but de créer une application Web servant de support à un Escape Game physique. Cet escape game était sous forme de malette à énigmes avec" +
      " des fiches contenant le scénario, les énigmes et les indices de la partie.",
      description2: "L'application devait permettre d'afficher ces scénario pour les joueurs," +
      " d'afficher les énigmes une par une selon leur progression et leur donner des indices en fonction du temps passé sur une énigme pour la partie front-office." +
      " Pour la partie back-office, l'application devait permettre de créer des scénarios, des énigmes et leur indices puis de les rendres disponibles aux utilisateurs.",
      createdWith: ["HTML", "CSS", "TypeScript", "Angular"],
      imageSrc: "assets/projects/brakbox.webp"
    } as CardData

    this.cards.push(EDNCard)
    this.cards.push(AsIsAsIfCard)
    this.cards.push(InterfaceJikanApiCard)
    this.cards.push(PyguinAdventureCard)
    this.cards.push(BrakBoxCard)
  }
}
