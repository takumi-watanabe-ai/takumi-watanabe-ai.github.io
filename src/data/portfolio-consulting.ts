export const portfolioData = {
  metadata: {
    title: 'Takumi Watanabe - Principal Software Consultant',
    description:
      'Principal Software Consultant with 10+ years building scalable cloud platforms. Expert in AWS/Azure architecture, full-stack development, and cost optimization.',
  },

  header: {
    name: 'Takumi Watanabe',
    title: 'Principal Software Consultant',
    tagline:
      '10+ years building scalable cloud platforms. Specialized in AWS/Azure architecture, full-stack development, and infrastructure cost optimization.',
    email: 'w.takumi.cs@gmail.com',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/takumi-watanabe/',
      github: 'https://github.com/takumiwatanabe',
      kaggle: null,
    },
  },

  about: [
    "I'm a Principal Software Consultant with 10+ years architecting and building production systems that scale. I specialize in cloud-native architecture, full-stack development, and infrastructure cost optimization—helping companies build reliable, high-performance solutions without breaking the bank.",
    "At Cylance/BlackBerry, I built microservices serving 14M+ endpoints across 6 production regions and reduced AWS costs by $250K annually through infrastructure optimization. I've designed systems processing millions of events monthly, implemented ML-powered threat detection with Databricks and PySpark, and led technical initiatives that balance business impact with engineering excellence.",
    'Currently, through StackArchitect, I build production SaaS platforms end-to-end—from database architecture and cloud infrastructure to AI-powered features and real-time data processing. I focus on pragmatic solutions that deliver measurable business value while leveraging modern technologies like Next.js, TypeScript, AWS, and PostgreSQL.',
    "I'm a Kaggle Expert (Top 6-7%) in datasets and notebooks. Bilingual in English and Japanese.",
  ],

  experience: [
    {
      period: 'July 2023 — Present',
      role: 'Principal Consultant',
      company: 'Stack Architect',
      companyUrl: 'https://stackarchitect.io',
      description:
        'Built production SaaS platforms (AWS Saver, Waythrough) and RAG-powered chatbot (Stacky) for company website as solo engineer. Architected real-time data processing, multi-tenant security, and AI features. Accelerated development velocity 50% through AI-assisted workflows.',
      technologies: ['AWS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Terraform', 'React'],
    },
    {
      period: 'May 2019 — July 2023',
      role: 'Principal Cloud Software Engineer',
      company: 'Cylance, BlackBerry',
      companyUrl: 'https://www.blackberry.com',
      description:
        'Built and deployed scalable microservices to 6 production regions serving 14M+ endpoints with 99.9% uptime. Reduced AWS costs from $300K to $50K monthly (83% reduction, $250K annual savings) through infrastructure optimization. Developed threat intelligence system processing 4M monthly events using Databricks, PySpark, and MLflow for real-time ML-powered anomaly detection.',
      technologies: [
        'AWS',
        'Go',
        'Node.js',
        'Kafka',
        'Elasticsearch',
        'Terraform',
        'Kubernetes',
        'Databricks',
        'PySpark',
      ],
    },
    {
      period: 'Jan 2022 — June 2022',
      role: 'Cloud Engineer Consultant',
      company: 'Microsoft',
      companyUrl: 'https://www.microsoft.com',
      description:
        'Modernized internal marketplace infrastructure powering order fulfillment, product shipping, and financial transactions processing $50M+ annual revenue. Refactored 15 deeply nested object models into .NET Core microservices optimized for Kubernetes. Migrated Azure DevOps pipelines between organizations, resolving issues for 12 build and 14 release pipelines. Increased code coverage by 15% through improved unit test architecture.',
      technologies: ['.NET Core', '.NET Framework', 'Kubernetes', 'Angular', 'TypeScript', 'Azure DevOps', 'Docker'],
    },
    {
      period: 'Jan 2017 — May 2019',
      role: 'Principal Software Consultant',
      company: 'Bio-Rad',
      companyUrl: 'https://www.bio-rad.com',
      description:
        'Developed 6 microservice REST APIs using Java Spring Boot and Node.js, migrating on-premises applications to AWS and reducing infrastructure costs by 40%. Led cloud migration from AWS to Azure for laboratory systems, implementing OAuth 2.0 and JWT authentication across 15 microservices for SOC 2 compliance.',
      technologies: ['Java', 'Spring Boot', 'Node.js', 'AWS', 'Azure', 'Docker', 'PostgreSQL', 'OAuth 2.0'],
    },
    {
      period: 'May 2013 — Dec 2017',
      role: 'Senior Software Engineer',
      company: 'Kowa American Corporation',
      companyUrl: null,
      description:
        'Led team of 5 developers in medical software division deploying to 20+ hospital clients and 3 Air Force medical facilities. Designed HL7 and DICOM interfaces for integration with 15+ medical instruments. Built medical imaging software with C# .NET Framework and SQL Server for patient data management.',
      technologies: ['C#', '.NET Framework', 'SQL Server', 'HL7', 'DICOM', 'Windows Desktop'],
    },
  ],

  projects: [
    {
      title: 'Stacky AI Assistant for StackArchitect',
      description:
        'Built dual RAG-powered chatbot for StackArchitect consulting website providing technical guidance (Next.js/Vercel/Supabase) and business information through Supabase Edge Functions. Indexed 2,096 documentation pages into 8,145 semantic chunks using pgvector with HNSW indexing. Architected serverless system with Supabase AI embeddings (gte-small, 384D) and OpenRouter LLM integration, deployed at <$1/month.',
      technologies: ['Supabase', 'pgvector', 'Edge Functions', 'TypeScript', 'Deno', 'OpenRouter API', 'Astro'],
      link: 'https://www.stackarchitect.io/stacky',
      impact: 'Enhanced client experience with instant technical support',
    },
    {
      title: 'AWS Saver',
      description:
        'Cloud cost optimization SaaS targeting startups with $500-$5K monthly AWS spend. Scans 8 AWS resource types identifying idle resources and over-provisioned instances, delivering automated savings recommendations with one-click CloudFormation templates. Provides real-time cost breakdown dashboards with interactive charts showing monthly spend trends across all regions.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS SDK', 'Terraform', 'Tailwind CSS'],
      link: 'https://awssaver.com',
      impact: 'Democratizes cloud cost optimization for startups',
    },
    {
      title: 'Waythrough',
      description:
        'Legal process management platform serving individuals navigating pre-trial, indictment, or sentencing phases. Features AI-powered legal chat assistant with context-aware responses, secure document management with PDF text extraction, phase-specific roadmaps covering 15+ legal stages, and wellness tracking module with daily mood check-ins and guided exercises.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI API', 'Row Level Security'],
      link: 'https://waythrough.io',
      impact: 'Reduces anxiety for individuals navigating complex legal processes',
    },
  ],

  education: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'California State University, Long Beach',
      location: 'Long Beach, CA',
      year: 'December 2012',
    },
    {
      degree: 'Bachelor of Science in Mathematics',
      institution: 'California State University, Long Beach',
      location: 'Long Beach, CA',
      year: 'May 2011',
    },
  ],

  expertise: [
    {
      category: 'Cloud & Infrastructure',
      skills: [
        'AWS',
        'Azure',
        'Terraform',
        'Kubernetes',
        'Docker',
        'Multi-Region Architecture',
        'Lambda',
        'CloudFormation',
      ],
    },
    {
      category: 'Backend & Data',
      skills: ['Node.js', 'Python', 'Go', 'Java Spring Boot', 'PostgreSQL', 'Databricks', 'PySpark', 'Kafka'],
    },
    {
      category: 'Frontend & Full-Stack',
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Server Components', 'OAuth 2.0', 'REST APIs'],
    },
    {
      category: 'Architecture & Leadership',
      skills: ['Microservices', 'System Design', 'Cost Optimization', 'Team Leadership', 'ML/AI Integration'],
    },
  ],

  certifications: [
    {
      name: 'AWS Certified Generative AI Developer – Professional',
      issuer: 'Amazon Web Services',
      earnedDate: 'March 2026',
      badgeImage: '/badges/aws-certified-generative-ai-developer-professional.png',
      credlyUrl: 'https://www.credly.com/badges/0227b6ca-e1a9-42ee-aa0d-a6b2030659a7/public_url',
      additionalBadges: [
        {
          name: 'Early Adopter',
          image: '/badges/aws-certified-generative-ai-developer-professional-early-adapter.png',
          credlyUrl: 'https://www.credly.com/badges/a044686e-4ac6-452a-932f-8b37c3c58a19/public_url',
        },
      ],
    },
    {
      name: 'AWS Certified Machine Learning – Specialty',
      issuer: 'Amazon Web Services',
      earnedDate: 'March 2026',
      badgeImage: '/badges/aws-certified-machine-learning-specialty.png',
      credlyUrl: 'https://www.credly.com/badges/069c26dd-10a2-4fe2-8c53-acc60a8750be',
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      earnedDate: 'November 2020',
      badgeImage: '/badges/aws-certified-solutions-architect-associate.png',
    },
    {
      name: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      earnedDate: 'May 2020',
      badgeImage: '/badges/aws-certified-developer-associate.png',
    },
    {
      name: 'Azure Solutions Architect Expert',
      issuer: 'Microsoft',
      earnedDate: 'August 2019',
      badgeImage: '/badges/microsoft-certified-azure-solutions-architect-expert.1.png',
    },
    {
      name: 'Azure Developer Associate',
      issuer: 'Microsoft',
      earnedDate: 'August 2019',
      badgeImage: '/badges/microsoft-certified-azure-developer-associate-legacy.png',
    },
    {
      name: 'Azure Administrator Associate',
      issuer: 'Microsoft',
      earnedDate: 'August 2019',
      badgeImage: '/badges/microsoft-certified-azure-administrator-associate.2.png',
    },
    {
      name: 'MCSE: Cloud Platform and Infrastructure',
      issuer: 'Microsoft',
      earnedDate: 'December 2018',
      badgeImage: '/badges/mcse-cloud-platform-and-infrastructure-certified-2018.png',
    },
    {
      name: 'MCSA: Cloud Platform',
      issuer: 'Microsoft',
      earnedDate: 'December 2018',
      badgeImage: '/badges/mcsa-cloud-platform-certified-2018.png',
    },
  ],

  footer: {
    text: 'Available for consulting through',
    link: { text: 'StackArchitect', url: '/' },
  },
};
