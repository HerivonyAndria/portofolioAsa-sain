// src/lib/cvData.ts

export const cvData = {
  header: {
    name: "ANDRIANΑΝΤΕΝΑΙΝA HERIVONY ZOLALAINA",
    title: "Expert Système & Application | Administrateur Réseaux & Sécurité | Développeur React.js & Node.js",
    email: "alphabitic@gmail.com",
    phone: "0340033314",
    portfolio: "https://asa-sain.tech/",
    github: "github.com/HerivonyAndria",
    linkedin: "linkedin.com/in/herivony-zolalaina"
  },
  experiences: [
    {
      company: "Webo-facto",
      role: "Administrateur Système / Ingénieur Système",
      period: "02/2026 - Actuellement",
      tags: ["LINUX", "SAAS", "BACKUP", "DNS", "SSL"],
      tasks: [
        "Administration d'une plateforme SaaS hébergeant plus de 3 500 sites web.",
        "Administration des serveurs Linux (Debian, Ubuntu), Apache, Nginx, PHP, MySQL et MariaDB.",
        "Développement de scripts Bash et Node.js pour l'automatisation des déploiements.",
        "Gestion des DNS, certificats SSL Let's Encrypt et sécurisation des infrastructures.",
        "Administration de la solution de sauvegarde Bacula avec stockage des volumes sur IONOS S3.",
        "Réalisation des sauvegardes, restaurations et validation du Plan de Reprise d'Activité (PRA).",
        "Support technique N2/N3 sur les incidents liés à l'hébergement, aux performances, aux DNS et aux certificats SSL.",
        "Participation à l'amélioration continue de l'infrastructure, de la sécurité et des performances de la plateforme."
      ]
    },
    {
      company: "Pulse - Axian Group",
      role: "Expert Système et Application - L3",
      period: "11/2023 - Actuellement",
      tags: ["SUPERVISION", "VIRTUALISATION", "SYSTÈMES", "RÉSEAUX", "SÉCURITÉ", "STOCKAGE", "CLOUD", "HAUTE DISPONIBILITÉ"],
      tasks: [
        "Administration des environnements Microsoft 365 et Azure (accès conditionnels, sécurisation tenant).",
        "Administration des infrastructures virtualisées (Hyper-V, Proxmox, KVM).",
        "Administration et maintenance des pare-feu pfSense et Cisco Meraki.",
        "Configuration et maintenance des équipements réseau (routeurs, switches).",
        "Gestion des solutions de stockage (SAN, NAS, cloud).",
        "Mise en place de la supervision du groupe Axian avec Zabbix (500+ équipements, 30+ entités).",
        "Prise en charge et gestion des incidents complexes N3 et accompagnement des équipes techniques.",
        "Automatisation des tâches d'administration et amélioration continue des infrastructures."
      ]
    },
    {
      company: "Orange Business",
      role: "Ingénieur Support - Virtualisation, Réseaux & Sécurité",
      period: "06/2022 - 10/2023",
      tags: ["REMOTE", "VIRTUALISATION", "SYSTÈMES", "SÉCURITÉ", "SERVICE DESK"],
      tasks: [
        "Change Maker Awards - 1er semestre 2023 chez Orange Business pour des projets d'automatisations.",
        "Prise en charge des incidents clients sur des infrastructures de virtualisation, systèmes et sécurité.",
        "Support technique N1/N2 et gestion des tickets jusqu'à leur résolution complète.",
        "Administration et support des solutions FortiMail et FortiClient EMS.",
        "Diagnostic et résolution des incidents liés aux accès sécurisés, aux politiques de sécurité et aux postes clients.",
        "Participation aux opérations de supervision et d'automatisation des plateformes."
      ]
    },
    {
      company: "Transacom Services Madagascar",
      role: "Gérant principal et Technicien support niveau 3 en IT",
      period: "12/2020 - 04/2022",
      tags: ["ON SITE", "SUPPORT N3", "GESTION"],
      tasks: [
        "Référent technique, technicien niveau 3 et gestionnaire administratif.",
        "Gestion RH, gestion du parc informatique et stock, comptabilité et gestion administrative.",
        "Formation et encadrement des nouveaux techniciens.",
        "Création d'intranet, rédaction et maintien des procédures et documentations techniques.",
        "Maintenance de serveurs dédiés - installation de tous types de supports de connexion."
      ]
    },
    {
      company: "MIAV Service Madagascar",
      role: "Support technique Niveau II",
      period: "09/2019 - 12/2020",
      tags: ["ON SITE", "SUPPORT N2"],
      tasks: [
        "Assistance technique à distance (diagnostic et résolution des dysfonctionnements matériels ou logiciels).",
        "Direction des utilisateurs pour la résolution de problèmes ou l'installation à distance."
      ]
    }
  ],
  skills: {
    reseauxSecurite: ["pfSense", "TCP/IP", "VLAN", "Cisco Meraki", "FortiMail", "SSL/TLS", "Let's Encrypt", "UFW", "FortiClient EMS", "VPN IPsec/SSL", "DNS", "WAF"],
    sauvegarde: ["Bacula", "IONOS Object Storage (S3)", "PRA / restauration", "Veeam (notions)"],
    virtualisation: ["VMware", "Hyper-V", "Proxmox", "KVM", "vSphere", "Citrix"],
    systemes: ["Linux (Debian, Ubuntu, CentOS)", "Windows Server 2016-2022", "Active Directory", "Exchange"],
    cloudMicrosoft: ["Microsoft 365", "Azure (accès conditionnels, SSO SAML)", "AWS (EC2/S3)", "Google Cloud Platform", "Firebase", "Serverless (Vercel/Render/Netlify)"],
    supervision: ["Zabbix", "Splunk", "Nagios (notions)", "Cacti (notions)"],
    automatisation: ["Ansible", "PowerShell", "Bash", "Puppeteer", "Node.js"],
    developpement: ["JavaScript", "React/Next.js", "Node.js", "Docker", "Git"],
    telephonieVoIP: ["3CX", "PABX", "SIP", "Configuration trunks SIP", "Extensions", "Routage", "IVR"]
  },
  projects: [
    {
      title: "Migration M365 & Rebranding - Groupe Axian",
      description: "Migration de toutes les entités du groupe Axian vers Microsoft 365, incluant le rebranding Axian-Telecom Yas et Mixx.",
      technologies: ["M365", "Exchange Online", "Azure AD", "PowerShell", "SharePoint"]
    },
    {
      title: "Déploiement SSO SAML 2.0 - Groupe Axian",
      description: "Implémentation d'une authentification unique (SSO) via SAML 2.0 pour toutes les applications du groupe.",
      technologies: ["Azure AD", "SAML 2.0", "OpenID Connect", "OAuth 2.0", "Sécurité"]
    },
    {
      title: "Supervision Zabbix - Groupe Axian",
      description: "Déploiement de Zabbix pour la supervision complète des infrastructures réseau et systèmes du groupe.",
      technologies: ["Zabbix", "Linux", "Windows Server", "pfSense", "Meraki"]
    },
    {
      title: "Serveur SMTP haute performance - Mvola",
      description: "Déploiement d'un serveur SMTP dédié supportant des millions d'e-mails par jour.",
      technologies: ["Postfix", "Linux CentOS 8", "DKIM", "DMARC", "SPF"]
    },
    {
      title: "Automatisation Reporting - Orange Business",
      description: "Développement d'une plateforme d'automatisation des contrôles quotidiens : 4h de vérifications manuelles remplacées par des rapports en 5 minutes.",
      technologies: ["Puppeteer", "Node.js", "PowerShell", "Python", "REST API"]
    }
  ],
  certifications: [
    { title: "Certificat MS-900 - Microsoft 365 Fundamentals", issuer: "Microsoft", date: "Janvier 2024" },
    { title: "Responsive Web Design + Front End Libraries + JS Algorithms", issuer: "freeCodeCamp", date: "2022-2023" },
    { title: "Master - Ingénierie Sécurité Systèmes, Réseau & Télécommunication", issuer: "École Supérieure de Management, Maroc", date: "2015-2016" }
  ]
};