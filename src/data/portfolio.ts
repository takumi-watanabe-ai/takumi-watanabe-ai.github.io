export const portfolioData = {
  metadata: {
    title: 'Takumi Watanabe - ML Engineer & Data Platform Specialist',
    description:
      'ML Engineer with production experience in Databricks, PySpark, and MLflow. Kaggle Expert building scalable data platforms and ML systems.',
  },

  header: {
    name: 'Takumi Watanabe',
    title: 'ML Engineer & Data Platform Specialist',
    tagline:
      'Building production ML systems and data platforms. Expert in Databricks, PySpark, and scalable data pipelines.',
    email: 'w.takumi.cs@gmail.com',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/takumi-watanabe/',
      github: 'https://github.com/takumiwatanabe',
      kaggle: 'https://www.kaggle.com/webdevbadger',
    },
    highlights: [
      { label: 'Kaggle Expert', value: 'Top 6-7%, 10 medals' },
      { label: 'Production ML', value: '4M events/month processed' },
      { label: 'Cloud Certified', value: 'AWS & Azure Solutions Architect' },
    ],
  },

  about: [
    "I'm an ML Engineer and Data Platform Specialist with production experience deploying ML systems at scale. I built anomaly detection systems processing 4M monthly events using Databricks, PySpark, and MLflow at Cylance/BlackBerry, where I designed ETL pipelines, optimized Delta Lake storage, and implemented automated model retraining workflows.",
    "I'm a Kaggle Expert (Top 6-7%) with 10 medals across datasets and notebooks, maintaining a perfect 10.0 usability rating on data contributions. My expertise spans the full ML lifecycle: data engineering, feature engineering, model development, and production deployment with proper monitoring and versioning.",
    "What sets me apart is my ability to build production-ready ML systems, not just notebooks. With 10+ years in cloud infrastructure and software engineering, I understand how to architect data pipelines that scale, deploy models reliably, and integrate ML capabilities into real products. I've built systems serving 14M+ endpoints and reduced AWS costs by $250K annually through infrastructure optimization.",
    "Currently seeking ML Engineer or Data Platform roles where I can leverage my unique combination of ML expertise and production engineering skills. I'm particularly interested in companies building data platforms, ML infrastructure, or deploying LLMs at scale. Bilingual in English and Japanese.",
  ],

  experience: [
    {
      period: 'July 2023 — Present',
      role: 'Principal Consultant',
      company: 'Stack Architect',
      companyUrl: 'https://stackarchitect.io',
      description:
        'Built RAG-powered chatbot (Stacky) for company website using pgvector and semantic search. Engineered AI chat system with prompt engineering for legal guidance platform. Developed intelligent cost analysis engine for AWS optimization. Full ownership of data pipelines and ML systems.',
      technologies: ['Python', 'OpenAI API', 'PostgreSQL', 'AWS', 'TypeScript', 'Node.js', 'Next.js'],
    },
    {
      period: 'May 2019 — July 2023',
      role: 'Principal Cloud Software Engineer',
      company: 'Cylance, BlackBerry',
      companyUrl: 'https://www.blackberry.com',
      description:
        'Deployed production ML-powered anomaly detection system processing 4M monthly threat events using Databricks, PySpark, and MLflow. Built ETL/ELT pipelines with Spark SQL for threat telemetry ingestion and ML-ready dataset preparation. Optimized Delta Lake storage and Databricks clusters for real-time ML inference. Implemented multi-layer data architecture (raw → cleaned → ML-ready datasets) with automated Databricks Workflows for continuous model retraining.',
      technologies: [
        'Databricks',
        'PySpark',
        'MLflow',
        'Spark SQL',
        'Delta Lake',
        'Python',
        'AWS',
        'Kafka',
        'Elasticsearch',
      ],
    },
    {
      period: 'Jan 2022 — June 2022',
      role: 'Cloud Engineer Consultant',
      company: 'Microsoft',
      companyUrl: 'https://www.microsoft.com',
      description:
        'Modernized internal marketplace infrastructure processing $50M+ annual revenue. Built .NET Core microservices optimized for Kubernetes deployment. Migrated Azure DevOps pipelines between organizations (12 build, 14 release pipelines). Increased code coverage by 15% through improved unit test architecture.',
      technologies: ['.NET Core', 'Kubernetes', 'Azure DevOps', 'Angular', 'TypeScript', 'Docker'],
    },
    {
      period: 'Jan 2017 — May 2019',
      role: 'Principal Software Consultant',
      company: 'Bio-Rad',
      companyUrl: 'https://www.bio-rad.com',
      description:
        'Developed microservice REST APIs with Java Spring Boot and Node.js. Led cloud migration from AWS to Azure for laboratory systems. Implemented OAuth 2.0 and JWT authentication across 15 microservices for SOC 2 compliance. Reduced infrastructure costs by 40% through cloud-native optimization.',
      technologies: ['Java', 'Spring Boot', 'Node.js', 'AWS', 'Azure', 'PostgreSQL', 'Docker'],
    },
    {
      period: 'May 2013 — Dec 2017',
      role: 'Senior Software Engineer',
      company: 'Kowa American Corporation',
      companyUrl: null,
      description:
        'Led development team building medical imaging software for 20+ hospitals and 3 Air Force facilities. Designed HL7/DICOM interfaces for medical data integration. Implemented HIPAA-compliant workflows and FDA validation for Class II medical devices. Built C# applications processing patient data and diagnostic imaging.',
      technologies: ['C#', '.NET Framework', 'SQL Server', 'HL7', 'DICOM', 'Medical Imaging'],
    },
  ],

  projects: [
    {
      title: 'Stacky: RAG System for StackArchitect Website',
      description:
        'Built production RAG chatbot for StackArchitect consulting website using Supabase pgvector, processing 2,096 documentation pages into 8,145 semantic chunks. Implemented dual-pipeline: gte-small embeddings (384D) with HNSW indexing for similarity search, OpenRouter LLM for context-aware responses. Engineered embedding generation with Python, deployed serverless Edge Functions (Deno/TypeScript). Optimized vector search with cosine similarity achieving <$1/month cost.',
      technologies: ['pgvector', 'RAG', 'Supabase AI', 'HNSW', 'Python', 'Edge Functions', 'OpenRouter'],
      link: 'https://www.stackarchitect.io/stacky',
      impact: 'Production RAG system serving StackArchitect clients',
    },
    {
      title: 'Kaggle Data Science Contributions',
      description:
        'Achieved Expert rank in both Datasets (Top 6%, rank 537/8,430) and Notebooks (Top 7%, rank 4,305/58,490). Curated 9 public datasets with perfect 10.0 usability rating covering demographics, environmental analysis, and time series data. Delivered exploratory data analysis projects with geospatial mapping, statistical analysis, and comprehensive visualizations earning up to 47 upvotes.',
      technologies: ['Python', 'pandas', 'numpy', 'scikit-learn', 'Jupyter', 'Data Visualization'],
      link: 'https://www.kaggle.com/webdevbadger',
      impact: 'Top 6-7% Expert recognition, 10 total medals',
    },
    {
      title: 'ML-Powered Threat Detection System',
      description:
        'Deployed production anomaly detection system at Cylance processing 4M monthly events. Built multi-layer data architecture with PySpark ETL pipelines for threat telemetry processing. Implemented MLflow for model versioning, monitoring, and automated retraining. Optimized Databricks clusters and Delta Lake storage to reduce costs while maintaining real-time inference capabilities.',
      technologies: ['Databricks', 'PySpark', 'MLflow', 'Delta Lake', 'Python', 'AWS'],
      link: null,
      impact: 'Real-time threat detection for 14M+ endpoints',
    },
    {
      title: 'AI-Powered Legal Guidance Platform',
      description:
        'Built production AI chat system for Waythrough legal tech platform. Engineered context-aware responses with prompt engineering and multi-turn conversation management. Implemented rate limiting, role-based access control, and responsible AI practices. Integrated generative AI APIs across full-stack architecture with PostgreSQL for conversation history and context management.',
      technologies: ['OpenAI API', 'Python', 'PostgreSQL', 'Next.js', 'TypeScript'],
      link: 'https://waythrough.io',
      impact: 'Production AI system serving legal guidance use case',
    },
    {
      title: 'AWS Cost Analysis Engine',
      description:
        'Developed intelligent cost analysis system for AWS Saver platform. Processes AWS billing data to generate automated optimization recommendations. Scans 8 AWS resource types identifying idle resources and over-provisioned instances. Real-time data processing with error recovery and automated recommendation generation.',
      technologies: ['Python', 'AWS SDK', 'PostgreSQL', 'TypeScript'],
      link: 'https://awssaver.com',
      impact: 'Automated cost optimization for startups',
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
      category: 'ML & Data Engineering',
      skills: [
        'Databricks',
        'PySpark',
        'Spark SQL',
        'MLflow',
        'Delta Lake',
        'Python',
        'pandas',
        'numpy',
        'scikit-learn',
        'TensorFlow',
        'PyTorch',
      ],
    },
    {
      category: 'Data Platforms & Pipelines',
      skills: [
        'ETL/ELT',
        'Data Architecture',
        'Kafka',
        'Airflow',
        'Real-time Processing',
        'Data Modeling',
        'Feature Engineering',
      ],
    },
    {
      category: 'AI & LLM Integration',
      skills: ['OpenAI API', 'LLM Integration', 'Prompt Engineering', 'RAG Systems', 'Context Management', 'AI Safety'],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'S3', 'Lambda', 'Kinesis'],
    },
    {
      category: 'Software Engineering',
      skills: ['Python', 'TypeScript', 'Node.js', 'Java', 'Go', 'REST APIs', 'Microservices', 'CI/CD'],
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
    text: 'Open to ML Engineer and Data Platform roles.',
    link: null,
  },
};
