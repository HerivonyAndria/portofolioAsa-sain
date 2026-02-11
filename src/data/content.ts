// src/data/content.ts
import { IconType } from "react-icons"
import {
  FaMapMarkerAlt,
  FaBook,
  FaLanguage,
  FaGamepad,
  FaUniversity,
  FaSkiing,
  FaBuilding,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaServer,
  FaCloud,
  FaNetworkWired,
  FaShieldAlt,
  FaCode,
  FaCogs,
  FaChartLine,
  FaDatabase,
  FaWindows,
  FaLinux,
  FaMicrosoft,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaAws,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { 
  FiDownload, 
  FiFileText, 
  FiMail, 
  FiGlobe, 
  FiMonitor,
  FiUserCheck,
  FiLock,
  FiSettings,
  FiActivity,
  FiDatabase as FiDatabaseIcon,
  FiUsers,
  FiShield,
  FiCloud as FiCloudIcon,
  FiServer as FiServerIcon,
} from "react-icons/fi"

/**
 * Configuration pour la section d'introduction de la page d'accueil
 */
export const homeIntroConfig = {
  /**
   * Votre nom complet
   */
  name: "Herivony",

  /**
   * Chemin vers le logo (ajouté)
   */
  logo: "/logo_A.png", // Ajoutez votre fichier logo.png dans le dossier public

  /**
   * Texte alternatif pour le logo
   */
  logoAlt: "Herivony Zolalaina - Expert IT",
  /**
   * Votre prénom ou nom court
   */
  shortName: "Herivony Zola",

  /**
   * Titre professionnel
   */
  title: "Expert IT & Administrateur Systèmes | Freelance",

  /**
   * Paragraphes d'introduction
   */
  introParagraphs: [
    "Expert IT avec plus de 5 ans d'expérience dans l'administration système, la virtualisation et le cloud. Actuellement Freelance IT à travers ma société ASA-SAÏN, spécialisée dans l'externalisation de services informatiques, l'administration système et le monitoring.",
    "Passionné par la résolution de problèmes complexes et l'optimisation des infrastructures, je combine expertise technique et vision stratégique pour accompagner les entreprises dans leur transformation numérique. Mon approche allie rigueur technique et innovation pour garantir des systèmes performants, sécurisés et évolutifs.",
  ],

  /**
   * Information de contact
   */
  contactInfo: {
    email: "alphabitic@gmail.com",
    phone: "+261 38 81 864 53",
    location: "Madagascar",
    portfolio: "https://manportfolio-zolalaina.vercel.app/",
    github: "https://github.com/HerivonyAndria",
    linkedin: "https://linkedin.com/in/herivony-zolalaina",
    website: "https://asa-sain.com",
  },

  /**
   * Société freelance
   */
  freelance: {
    company: "ASA-SAÏN",
    activity: "Externalisation de Services Informatiques",
    services: [
      "Administration Système & Réseaux",
      "Supervision & Monitoring Infrastructure",
      "Virtualisation & Cloud",
      "Sécurité IT & Conformité",
      "Automatisation & DevOps",
      "Support Technique Expert"
    ],
    startDate: "Novembre 2023",
    status: "Actif"
  },

  /**
   * Faits rapides
   */
  facts: {
    company: "Freelance IT @ ASA-SAÏN",
    education: "Master Sécurité Systèmes & Réseaux",
    location: "Madagascar (Remote)",
    languages: "Français • Anglais • Malgache",
    role: "Expert Système & Cloud",
    experience: "5+ années en IT",
    certification: "Microsoft Certified (MS-900)",
    projects: "10+ Projets Enterprise"
  },

  /**
   * Faits personnalisés supplémentaires
   */
  additionalFacts: [
    { icon: FaServer, label: "Virtualisation Proxmox/KVM" },
    { icon: FaCloud, label: "Microsoft 365 & Azure" },
    { icon: FaNetworkWired, label: "Réseaux & Supervision" },
    { icon: FaShieldAlt, label: "Sécurité & Conformité" },
    { icon: FaCode, label: "Automatisation PowerShell" },
    { icon: FaCogs, label: "DevOps & CI/CD" },
    { icon: FiDatabaseIcon, label: "Base de données SQL/NoSQL" },
    { icon: FiShield, label: "Sécurité Cloud & On-premise" },
  ],

  /**
   * Boutons d'action
   */
  actionButtons: {
    downloadCV: {
      text: "📥 Télécharger mon CV",
      url: "/cv_zolalaina.pdf",
      icon: FiDownload,
    },
  /*  viewCV: {
      text: "👁️ CV en ligne",
      url: "/cv",
      icon: FiFileText,
    },*/
    contact: {
      text: "📧 Me contacter",
      url: "/contact",
      icon: FiMail,
    },
    portfolio: {
      text: "🌐 Voir mon portfolio",
      url: "https://manportfolio-zolalaina.vercel.app/",
      icon: FiGlobe,
    },
    projects: {
      text: "🚀 Voir mes projets",
      url: "/projects",
      icon: FaCode,
    }
  },

  /**
   * Compétences techniques
   */
  skills: {
    systemAdmin: [
      { name: "Windows Server", level: 95, icon: FaWindows },
      { name: "Linux (Debian/Ubuntu)", level: 90, icon: FaLinux },
      { name: "Active Directory", level: 92, icon: FiUsers },
      { name: "DNS/DHCP", level: 88, icon: FaNetworkWired },
      { name: "Group Policy", level: 90, icon: FiSettings },
      { name: "Hyper-V", level: 85, icon: FaMicrosoft },
      { name: "Proxmox", level: 92, icon: FaServer },
      { name: "KVM", level: 87, icon: FaServer }
    ],
    cloud: [
      { name: "Microsoft 365", level: 94, icon: FaMicrosoft },
      { name: "Azure AD", level: 90, icon: FiCloudIcon },
      { name: "Exchange Online", level: 88, icon: FiMail },
      { name: "SharePoint", level: 85, icon: FaMicrosoft },
      { name: "Teams", level: 92, icon: FaMicrosoft },
      { name: "Conditional Access", level: 91, icon: FiShield },
      { name: "Intune", level: 87, icon: FaMicrosoft }
    ],
    monitoring: [
      { name: "Zabbix", level: 93, icon: FiMonitor },
      { name: "PRTG", level: 85, icon: FiMonitor },
      { name: "Grafana", level: 82, icon: FaChartLine },
      { name: "Prometheus", level: 80, icon: FiActivity },
      { name: "Performance Monitoring", level: 90, icon: FiActivity },
      { name: "Alerting", level: 92, icon: FiActivity },
      { name: "Reporting", level: 88, icon: FaChartLine }
    ],
    networking: [
      { name: "TCP/IP", level: 90, icon: FaNetworkWired },
      { name: "VLAN", level: 88, icon: FaNetworkWired },
      { name: "VPN", level: 85, icon: FiShield },
      { name: "Routing", level: 83, icon: FaNetworkWired },
      { name: "Switching", level: 87, icon: FaNetworkWired },
      { name: "Firewalls", level: 85, icon: FiShield },
      { name: "Load Balancing", level: 82, icon: FaNetworkWired }
    ],
    virtualization: [
      { name: "VMware", level: 88, icon: FaServer },
      { name: "Hyper-V", level: 86, icon: FaMicrosoft },
      { name: "Proxmox VE", level: 93, icon: FaServer },
      { name: "KVM", level: 87, icon: FaServer },
      { name: "vSphere", level: 85, icon: FaServer },
      { name: "ESXi", level: 84, icon: FaServer },
      { name: "Cluster Management", level: 89, icon: FaServer }
    ],
    automation: [
      { name: "PowerShell", level: 92, icon: FaWindows },
      { name: "Bash", level: 85, icon: FaLinux },
      { name: "Python", level: 80, icon: FaPython },
      { name: "Ansible", level: 75, icon: FaCogs },
      { name: "Puppet", level: 72, icon: FaCogs },
      { name: "CI/CD", level: 78, icon: FaGitAlt },
      { name: "Infrastructure as Code", level: 76, icon: FaCode }
    ],
    security: [
      { name: "SAML/SSO", level: 90, icon: FiUserCheck },
      { name: "MFA", level: 92, icon: FiLock },
      { name: "Azure Security", level: 88, icon: FiShield },
      { name: "Backup/DR", level: 87, icon: FaDatabase },
      { name: "Compliance", level: 85, icon: FiShield },
      { name: "Audit", level: 89, icon: FiActivity }
    ]
  },

  /**
   * Expériences professionnelles (pour la page CV)
   */
  experiences: [
    {
      title: "Expert Système & Application",
      company: "L3 Pulse - Axian Group",
      period: "11/2023 – Actuellement",
      location: "Remote",
      description: "Supervision et gestion des infrastructures virtualisées, systèmes, réseaux, stockage et cloud pour garantir la haute disponibilité.",
      achievements: [
        "Prise en charge et résolution des tickets complexes non résolus par le L2",
        "Responsable des automatisations et intégration des applications sur Azure",
        "Vérification quotidienne de la disponibilité des plateformes",
        "Expert désigné pour la mise en place de nouveaux projets",
        "Sécurisation des tenants Microsoft 365 et Azure"
      ],
      technologies: ["Azure", "M365", "Proxmox", "KVM", "PowerShell", "Zabbix"]
    },
    {
      title: "Ingénieur Support N1 Expert Virtualisation & Systèmes",
      company: "Orange Business",
      period: "06/2022 – 10/2023",
      location: "Remote",
      description: "Support technique avancé en virtualisation et systèmes, lauréat du Change Maker Awards 2023 pour l'automatisation des processus.",
      achievements: [
        "Prix Change Maker Awards du premier semestre 2023 pour des projets d'automatisation",
        "Gestion des tickets clients et amélioration des processus de support",
        "Développement de scripts d'automatisation pour les tâches récurrentes",
        "Vérification et optimisation de la disponibilité des plateformes"
      ],
      technologies: ["VMware", "Windows Server", "Linux", "Puppeteer", "Node.js"]
    },
    {
      title: "Gérant & Technicien Support Niveau 3 IT",
      company: "Transacom Services Madagascar",
      period: "12/2020 – 04/2022",
      location: "On-site",
      description: "Référent technique et gestionnaire administratif, responsable du parc informatique, de la formation et de la résolution d'incidents complexes.",
      achievements: [
        "Gestion RH, parc informatique, stock et comptabilité",
        "Formateur des nouveaux techniciens IT",
        "Création d'intranet et documentation des procédures",
        "Maintenance de serveurs dédiés et installation d'infrastructures réseau",
        "Diagnostic à distance et prise de contrôle pour résolution d'incidents"
      ],
      technologies: ["Active Directory", "Windows/Linux", "Helpdesk", "Réseaux"]
    },
    {
      title: "Support Technique Niveau II",
      company: "MIAV Service Madagascar",
      period: "09/2019 – 12/2020",
      location: "On-site",
      description: "Assistance technique avancée et résolution des dysfonctionnements matériels et logiciels complexes.",
      achievements: [
        "Diagnostic et résolution à distance des problèmes techniques",
        "Formation des utilisateurs sur l'utilisation des systèmes",
        "Support sur divers systèmes d'exploitation et applications"
      ],
      technologies: ["Diagnostic Hardware", "Windows OS", "Remote Support"]
    }
  ],

  /**
   * Formations
   */
  educations: [
    {
      title: "Certificat MS-900 Microsoft 365 Fundamentals",
      institution: "Microsoft",
      period: "Janvier 2024",
      description: "Fondamentaux des services cloud Microsoft 365",
      icon: FaMicrosoft
    },
    {
      title: "Responsive Web Design Certification",
      institution: "FreeCodeCamp",
      period: "Septembre 2023",
      description: "Conception de sites web responsives",
      icon: FaReact
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      institution: "FreeCodeCamp",
      period: "Septembre 2023",
      description: "Algorithmes et structures de données en JavaScript",
      icon: FaCode
    },
    {
      title: "Front End Development Libraries",
      institution: "FreeCodeCamp",
      period: "05/2022 - 07/2022",
      description: "React, Redux, Bootstrap et autres bibliothèques front-end",
      icon: FaReact
    },
    {
      title: "Master en Ingénierie Sécurité Systèmes, Réseau et Télécommunication",
      institution: "Ecole Supérieure de Management, Maroc",
      period: "09/2015 - 07/2016",
      description: "Spécialisation en sécurité des systèmes et réseaux",
      icon: FaShieldAlt
    }
  ],

  /**
   * Langues
   */
  languages: [
    { language: "Français", level: "Langue maternelle", proficiency: 100, icon: "🇫🇷" },
    { language: "Anglais", level: "Professionnel", proficiency: 85, icon: "🇺🇸" },
    { language: "Malgache", level: "Langue maternelle", proficiency: 100, icon: "🇲🇬" }
  ],

  /**
   * PROJETS COMPLETS
   */
  projects: [
    {
      id: 1,
      title: "Migration des entités du groupe Axian vers Microsoft 365",
      slug: "migration-axian-m365",
      client: "Axian Group",
      period: "Q4 2023",
      duration: "3 mois",
      status: "Terminé",
      description: "Migration complète de toutes les entités du groupe Axian vers Microsoft 365, incluant le rebranding des entités Axian-Telecom vers Yas et Mixx. Projet incluant la migration des emails, fichiers, calendriers et la configuration des politiques de sécurité.",
      detailedDescription: [
        "Analyse des besoins et planification de la migration",
        "Configuration du tenant Microsoft 365 avec les bonnes pratiques de sécurité",
        "Migration des boîtes emails Exchange vers Exchange Online",
        "Migration des fichiers partagés vers SharePoint Online",
        "Configuration des politiques de sécurité et des accès conditionnels",
        "Rebranding complet des entités avec mise à jour de l'identité visuelle",
        "Formation des utilisateurs et support post-migration"
      ],
      technologies: ["Microsoft 365", "Exchange Online", "SharePoint", "Azure AD", "PowerShell", "Migration Manager"],
      tools: ["Microsoft 365 Admin Center", "SharePoint Migration Tool", "PowerShell Scripts", "Azure Portal"],
      achievements: [
        "Migration de 500+ utilisateurs sans interruption de service",
        "Réduction des coûts d'infrastructure de 40%",
        "Amélioration de la sécurité avec MFA et accès conditionnels",
        "Formation de 50+ administrateurs locaux"
      ],
      results: [
        "Haute disponibilité garantie (99.9% SLA)",
        "Sécurité renforcée avec Zero Trust",
        "Productivité améliorée avec les outils collaboratifs",
        "Réduction des coûts de maintenance"
      ],
      icon: FaMicrosoft,
      category: "Cloud Migration",
      featured: true
    },
    {
      id: 2,
      title: "Création serveur SMTP pour le groupe Axian",
      slug: "serveur-smtp-axian",
      client: "Axian Group",
      period: "Q3 2023",
      duration: "1 mois",
      status: "Terminé",
      description: "Mise en place d'un serveur SMTP sécurisé pour toutes les entités du groupe Axian afin de permettre l'envoi en masse de courriels transactionnels et marketing.",
      detailedDescription: [
        "Architecture et design de la solution SMTP",
        "Installation et configuration de Postfix sur serveur Linux",
        "Intégration avec Microsoft 365 pour l'authentification",
        "Configuration DKIM, DMARC et SPF pour la délivrabilité",
        "Mise en place du monitoring et des alertes",
        "Documentation des procédures d'utilisation"
      ],
      technologies: ["Postfix", "Linux Ubuntu", "DKIM", "DMARC", "SPF", "Zabbix", "PowerShell"],
      tools: ["Postfix", "OpenDKIM", "Zabbix", "Grafana", "PowerShell"],
      achievements: [
        "Serveur SMTP capable de traiter 10,000+ emails/heure",
        "Délivrabilité améliorée à 99.5%",
        "Monitoring 24/7 avec alertes proactives",
        "Documentation complète pour les équipes"
      ],
      results: [
        "Solution d'envoi en masse fiable et sécurisée",
        "Réduction des coûts de services externes",
        "Contrôle total sur les envois transactionnels",
        "Conformité RGPD et lois locales"
      ],
      icon: FaServer,
      category: "Infrastructure",
      featured: true
    },
    {
      id: 3,
      title: "Mise en place du SSO SAML pour le groupe Axian",
      slug: "sso-saml-axian",
      client: "Axian Group",
      period: "Q2 2023",
      duration: "2 mois",
      status: "Terminé",
      description: "Implémentation de l'authentification unique (SSO) via SAML sur toutes les applications utilisées par le groupe Axian pour améliorer la sécurité et l'expérience utilisateur.",
      detailedDescription: [
        "Audit des applications et des besoins d'intégration",
        "Configuration d'Azure AD comme fournisseur d'identité",
        "Intégration SAML avec 20+ applications métiers",
        "Configuration des politiques d'accès conditionnel",
        "Mise en place de l'authentification multi-facteurs",
        "Tests de sécurité et de performance",
        "Formation des utilisateurs et support"
      ],
      technologies: ["SAML 2.0", "Azure AD", "OAuth 2.0", "OpenID Connect", "PowerShell", "REST API"],
      tools: ["Azure Portal", "Postman", "SAML Tracer", "PowerShell"],
      achievements: [
        "SSO implémenté sur 25 applications",
        "Réduction des mots de passe à mémoriser de 80%",
        "Temps de connexion réduit de 70%",
        "Sécurité renforcée avec MFA obligatoire"
      ],
      results: [
        "Expérience utilisateur simplifiée",
        "Sécurité d'accès améliorée",
        "Administration centralisée des identités",
        "Audit complet des connexions"
      ],
      icon: FiUserCheck,
      category: "Sécurité",
      featured: true
    },
    {
      id: 4,
      title: "Interface de l'AD du groupe Axian",
      slug: "interface-ad-axian",
      client: "Axian Group",
      period: "Q1 2023",
      duration: "2 mois",
      status: "Terminé",
      description: "Développement d'une interface web pour la gestion simplifiée de l'Active Directory des entités du groupe Axian (Mvola, Yas, etc.).",
      detailedDescription: [
        "Analyse des besoins des administrateurs AD",
        "Développement d'une interface web en React/Node.js",
        "Intégration avec Active Directory via LDAP",
        "Implémentation des fonctionnalités CRUD",
        "Mise en place de l'authentification et des rôles",
        "Tests et déploiement en production",
        "Documentation et formation"
      ],
      technologies: ["React", "Node.js", "Express", "LDAP", "Active Directory", "MongoDB", "Docker"],
      tools: ["Visual Studio Code", "Git", "Docker", "Postman", "LDAP Browser"],
      achievements: [
        "Interface intuitive pour la gestion AD",
        "Réduction du temps d'administration de 60%",
        "Audit automatique des modifications",
        "Support multi-entités"
      ],
      results: [
        "Administration AD simplifiée et centralisée",
        "Réduction des erreurs manuelles",
        "Traçabilité complète des actions",
        "Formation accélérée des nouveaux admins"
      ],
      icon: FiUsers,
      category: "Développement",
      featured: true
    },
    {
      id: 5,
      title: "Mise en place de Zabbix pour le groupe Axian",
      slug: "zabbix-supervision-axian",
      client: "Axian Group",
      period: "Q4 2022",
      duration: "3 mois",
      status: "Terminé",
      description: "Déploiement de Zabbix pour la supervision complète de toutes les infrastructures du groupe Axian, avec tableaux de bord personnalisés et alertes intelligentes.",
      detailedDescription: [
        "Audit de l'infrastructure existante",
        "Installation et configuration de Zabbix Server",
        "Déploiement des agents Zabbix sur 200+ serveurs",
        "Configuration des templates et des alertes",
        "Création de dashboards personnalisés par service",
        "Intégration avec Teams et Email pour les alertes",
        "Formation des équipes de support"
      ],
      technologies: ["Zabbix", "Linux", "SNMP", "API", "Grafana", "PowerShell", "Python"],
      tools: ["Zabbix Frontend", "Grafana", "SNMP Walk", "Python Scripts", "PowerShell"],
      achievements: [
        "Supervision de 200+ serveurs et 1000+ métriques",
        "Temps de détection d'incidents réduit de 80%",
        "Alertes proactives avant les pannes",
        "Dashboards en temps réel pour la direction"
      ],
      results: [
        "Vision complète de l'état de l'infrastructure",
        "Prévention des pannes critiques",
        "Optimisation des ressources",
        "Support technique plus efficace"
      ],
      icon: FiMonitor,
      category: "Monitoring",
      featured: true
    },
    {
      id: 6,
      title: "Sécurisation du tenant M365 et Azure",
      slug: "securisation-m365-azure",
      client: "Axian Group",
      period: "Q3 2022",
      duration: "2 mois",
      status: "Terminé",
      description: "Sécurisation complète du tenant Microsoft 365 et Azure via des accès conditionnels, politiques de sécurité et conformité aux standards de l'industrie.",
      detailedDescription: [
        "Audit de sécurité du tenant existant",
        "Configuration des accès conditionnels",
        "Mise en place de l'authentification multi-facteurs",
        "Configuration des politiques de sécurité",
        "Implémentation de Microsoft Defender",
        "Tests de pénétration et d'intrusion",
        "Documentation de conformité"
      ],
      technologies: ["Azure AD", "Conditional Access", "Microsoft Defender", "Intune", "PowerShell", "Azure Security Center"],
      tools: ["Azure Portal", "Microsoft 365 Security Center", "PowerShell", "Security & Compliance Center"],
      achievements: [
        "Couverture sécurité 100% du tenant",
        "Réduction des risques de sécurité de 95%",
        "Conformité aux standards ISO 27001",
        "Formation sécurité pour tous les utilisateurs"
      ],
      results: [
        "Environnement cloud sécurisé et conforme",
        "Protection contre les menaces avancées",
        "Gouvernance des identités renforcée",
        "Reporting sécurité automatique"
      ],
      icon: FiShield,
      category: "Sécurité Cloud",
      featured: true
    },
    {
      id: 7,
      title: "Automatisation des Plateformes Orange Business",
      slug: "automatisation-plateformes-orange",
      client: "Orange Business",
      period: "02/2023 - 03/2023",
      duration: "1.5 mois",
      status: "Terminé",
      description: "Développement de scripts d'automatisation pour l'envoi de rapports et la vérification d'accessibilité des plateformes critiques.",
      detailedDescription: [
        "Analyse des processus manuels répétitifs",
        "Développement de scripts Puppeteer pour l'automatisation",
        "Création de rapports automatiques",
        "Intégration avec les systèmes de ticketing",
        "Tests et déploiement en production",
        "Documentation des scripts"
      ],
      technologies: ["Puppeteer", "Node.js", "JavaScript", "Cron", "SMTP", "REST API"],
      tools: ["Node.js", "Puppeteer", "Git", "Cron", "Email Servers"],
      achievements: [
        "Automatisation de 15 rapports quotidiens",
        "Réduction du temps de reporting de 80%",
        "Élimination des erreurs manuelles",
        "Alertes automatiques en cas d'indisponibilité"
      ],
      results: [
        "Productivité des équipes augmentée",
        "Reporting fiable et constant",
        "Détection proactive des problèmes",
        "Documentation technique complète"
      ],
      icon: FaCogs,
      category: "Automatisation",
      featured: false
    },
    {
      id: 8,
      title: "Vérification Automatique des Patchs",
      slug: "verification-patchs-orange",
      client: "Orange Business",
      period: "02/2023 - 03/2023",
      duration: "1 mois",
      status: "Terminé",
      description: "Script PowerShell pour vérifier automatiquement les mises à jour KB sur les serveurs Windows et générer des rapports de conformité.",
      detailedDescription: [
        "Analyse des besoins de patch management",
        "Développement de scripts PowerShell",
        "Intégration avec WSUS",
        "Création de rapports de conformité",
        "Alertes pour les patches critiques",
        "Tests sur différents environnements"
      ],
      technologies: ["PowerShell", "Windows Server", "WSUS", "SQL Server", "Email"],
      tools: ["PowerShell ISE", "WSUS Console", "SQL Server Management Studio", "Email Clients"],
      achievements: [
        "Vérification automatisée de 100+ serveurs",
        "Rapports de conformité hebdomadaires",
        "Alertes pour les patches critiques manquants",
        "Réduction du temps de vérification de 90%"
      ],
      results: [
        "Conformité patchs améliorée à 98%",
        "Réduction des vulnérabilités de sécurité",
        "Processus de patch management standardisé",
        "Documentation des procédures"
      ],
      icon: FaWindows,
      category: "Automatisation",
      featured: false
    }
  ],

  /**
   * Intérêts personnels
   */
  interests: [
    { icon: FaCode, label: "Programmation & DevOps" },
    { icon: FaBook, label: "Lecture technique & IT" },
    { icon: FaGamepad, label: "Technologies émergentes" },
    { icon: FaSkiing, label: "Sports & Activités outdoor" },
    { icon: FaNodeJs, label: "Développement Backend" },
    { icon: FaReact, label: "Frameworks Frontend" },
    { icon: FaPython, label: "Automatisation Python" },
    { icon: FaDocker, label: "Conteneurisation & Orchestration" }
  ],

  /**
   * Nombre d'éléments à afficher
   */
  workItemsToShow: 3,
  projectsToShow: 6,
  blogPostsToShow: 3,
}

/**
 * Configuration de la pagination
 */
export const paginationConfig = {
  blogPostsPerPage: 5,
  workItemsPerPage: 6,
  projectsPerPage: 6,
}

/**
 * Configuration du pied de page
 */
export const footerConfig = {
  copyrightName: "Herivony Zolalaina | ASA-SAÏN",
  showVersionAndAttribution: true,
  socialLinks: {
    github: "https://github.com/HerivonyAndria",
    linkedin: "https://linkedin.com/in/herivony-zolalaina",
    email: "alphabitic@gmail.com",
    portfolio: "https://manportfolio-zolalaina.vercel.app/",
    website: "https://asa-sain.com",
  },
}

/**
 * Mapping interne des catégories de faits vers leurs icônes
 */
export const factIconMap: Record<keyof typeof homeIntroConfig.facts, IconType> = {
  company: FaBuilding,
  education: FaUniversity,
  location: FaMapMarkerAlt,
  languages: FaLanguage,
  role: FaTools,
  experience: FaChartLine,
  certification: FiActivity,
  projects: FaCode
}

/**
 * Mapping interne des boutons d'action
 */
export const actionIconMap = {
  downloadCV: FiDownload,
  viewCV: FiFileText,
  contact: FiMail,
  portfolio: FiGlobe,
  projects: FaCode
}

/**
 * Mapping interne des technologies vers leurs icônes
 */
export const techIconMap = {
  server: FaServer,
  cloud: FaCloud,
  network: FaNetworkWired,
  security: FaShieldAlt,
  monitor: FiMonitor,
  automation: FiSettings,
  windows: FaWindows,
  linux: FaLinux,
  azure: FaMicrosoft,
  docker: FaDocker,
  git: FaGitAlt,
  python: FaPython,
  nodejs: FaNodeJs,
  react: FaReact,
  vue: FaVuejs,
  database: FaDatabase,
}

/**
 * Mapping interne des intérêts vers leurs icônes
 */
export const interestIconMap = {
  programming: FaCode,
  reading: FaBook,
  technology: FaGamepad,
  sports: FaSkiing,
  backend: FaNodeJs,
  frontend: FaReact,
  python: FaPython,
  docker: FaDocker
}

/**
 * Mapping interne des plateformes sociales
 */
export const socialIconMap = {
  github: { icon: FaGithub, label: "GitHub" },
  linkedin: { icon: FaLinkedin, label: "LinkedIn" },
  email: { icon: FaEnvelope, label: "Email" },
  portfolio: { icon: FiGlobe, label: "Portfolio" },
  website: { icon: FiGlobe, label: "Website" },
}

/**
 * Configuration pour la page CV
 */
export const cvConfig = {
  summary: "Expert IT avec 5+ ans d'expérience en administration système, virtualisation et cloud. Actuellement Freelance IT à travers ASA-SAÏN, spécialisé dans l'externalisation de services informatiques, l'administration système et le monitoring. Passionné par l'automatisation et la sécurité des infrastructures.",
  availability: "Disponible pour des missions freelance • Remote ou On-site Madagascar",
  dailyRate: "Tarification sur demande • Forfait ou régie",
  specialties: [
    "Administration Systèmes Windows/Linux",
    "Virtualisation (Proxmox, KVM, Hyper-V)",
    "Cloud Microsoft 365 & Azure",
    "Supervision & Monitoring (Zabbix, PRTG)",
    "Sécurité IT & Conformité",
    "Automatisation & Scripting PowerShell/Python",
    "Réseaux & Infrastructure",
    "Support Technique Expert Niveau 3",
    "Migration Cloud & Transformation Digitale",
    "DevOps & Infrastructure as Code"
  ],
  projectStats: {
    total: 8,
    enterprise: 6,
    completed: 8,
    ongoing: 0,
    successRate: 100
  }
}