export const portfolioData = {
  metadata: {
    title: 'Takumi Watanabe - Generative AI Engineer | RAG & AI Agents Specialist',
    description:
      'Generative AI engineer building production RAG systems and autonomous AI agents. Expert in LangGraph, pgvector, hybrid search, and agentic workflows with LLMs.',
  },

  header: {
    name: 'Takumi Watanabe',
    title: 'Generative AI Engineer | RAG & AI Agents Specialist',
    tagline:
      'Building production RAG systems and autonomous AI agents with LangGraph, pgvector, and hybrid search. Expert in agentic workflows, semantic search, and LLM orchestration.',
    email: 'w.takumi.cs@gmail.com',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/takumi-watanabe/',
      github: 'https://github.com/takumi-watanabe-ai',
      kaggle: 'https://www.kaggle.com/webdevbadger',
    },
    highlights: [
      { label: 'Production RAG', value: 'Live at ragnosis.app' },
      { label: 'AWS GenAI Certified', value: 'Professional + Early Adopter' },
      { label: 'Agentic AI', value: '4 systems built' },
    ],
  },

  about: [
    "I'm a **Generative AI Engineer** specializing in **production RAG systems** and **autonomous AI agents**. I build sophisticated agentic workflows using **LangGraph**, implement **hybrid search** with **pgvector** and **RRF fusion**, and architect LLM-powered systems that go beyond basic vector search.",
    "My flagship project, **<a href='https://www.ragnosis.app' target='_blank' rel='noreferrer' class='text-blue-600 hover:text-blue-700 underline'>RAGnosis</a>**, showcases:\n• **Agentic query planning** - LLM-based intent analysis and routing\n• **Hybrid search** - 60% vector + 40% keyword with RRF fusion\n• **Multi-stage retrieval** - Processing 3K+ doc chunks\n• **Real-time integration** - 4K+ HuggingFace models + GitHub repos with live metrics\n• **Evaluation framework** - RAGAS with 28 test questions, 0.90 faithfulness score",
    "I've built **4 production agentic AI systems**:\n• **RAGnosis** - Agentic RAG intelligence platform (live)\n• **Hybrid RAG System** - Celery-based async processing with BM25 + vector search\n• **Web Research Agent** - Autonomous multi-step reasoning with LangGraph\n• **Code Review Action** - Privacy-first security analysis GitHub Action\n\nThese systems demonstrate expertise in **agent orchestration**, **tool calling**, **multi-step reasoning**, and **production deployment** patterns.",
    "**AWS Certified**: Generative AI Developer (Professional + Early Adopter) | Machine Learning Specialty\n\n**Available for consulting**: RAG implementation, autonomous agents, LLM architecture with proper retrieval, context management, and evaluation frameworks. Particularly interested in agentic workflows, hybrid search optimization, and production LLM deployment.\n\n**Bilingual**: English and Japanese",
  ],

  experience: [
    {
      period: 'July 2023 — Present',
      role: 'Generative AI Engineer & Principal Consultant',
      company: 'Stack Architect',
      companyUrl: 'https://stackarchitect.io',
      description:
        'Built **production RAG systems** and **agentic AI applications**:\n\n• **RAGnosis** - Live agentic RAG platform with query planning, hybrid search, RRF fusion (3K+ doc chunks)\n• **Stacky RAG Chatbot** - pgvector with dual-pipeline architecture (gte-small embeddings + HNSW indexing)\n• **Advanced RAG System** - Celery-based async processing, hybrid search (semantic + BM25), cross-encoder reranking\n• **Web Research Agent** - LangGraph for autonomous information gathering and synthesis',
      technologies: ['Python', 'LangGraph', 'pgvector', 'OpenAI API', 'OpenRouter', 'PostgreSQL', 'Supabase', 'TypeScript', 'Next.js', 'Edge Functions'],
    },
    {
      period: 'May 2019 — July 2023',
      role: 'Principal Cloud Software Engineer',
      company: 'Cylance, BlackBerry',
      companyUrl: 'https://www.blackberry.com',
      description:
        'Built and deployed scalable **C# and React microservices** to **6 production regions** (US, EU, AU, JP, US Gov, SP) serving **14M+ endpoints** with 99.9% uptime.\n\n**Key Achievements:**\n• Reduced AWS costs from **$300K to $50K monthly** (83% reduction, $250K annual savings) by redesigning MemDef Event Bifurcation architecture\n• Developed **threat intelligence system** processing 4M monthly feeds using AWS Kinesis, Lambda, Kafka, and Elasticsearch\n• Architected **Mobile Protect Service (MPS)** - built 3 API services and 3 foundation libraries for cross-corporation mobile threat protection\n• Automated provisioning of **14 AWS entity types** using Terraform and Jenkins, reducing deployment time by 70%',
      technologies: [
        'C#',
        'React',
        'AWS',
        'Terraform',
        'Jenkins',
        'Kafka',
        'Elasticsearch',
        'Kinesis',
        'Lambda',
        'Microservices',
      ],
    },
    {
      period: 'Jan 2022 — June 2022',
      role: 'Cloud Engineer Consultant',
      company: 'Microsoft',
      companyUrl: 'https://www.microsoft.com',
      description:
        'Modernized **2 legacy services** by refactoring complex codebases into **.NET Core microservices** optimized for Kubernetes deployment.\n\n**Key Achievements:**\n• Enhanced reliability and scalability of systems powering order fulfillment and financial transactions processing **$50M+ annual revenue**\n• Implemented **4 REST API features** and frontend interface using Angular and .NET Framework\n• Migrated **Azure DevOps pipelines** between organizations (12 build, 14 release pipelines)\n• Increased code coverage by **15%** through improved unit test architecture',
      technologies: ['.NET Core', 'Kubernetes', 'Azure DevOps', 'Angular', 'TypeScript', 'Docker'],
    },
    {
      period: 'Jan 2017 — May 2019',
      role: 'Principal Software Consultant',
      company: 'Bio-Rad',
      companyUrl: 'https://www.bio-rad.com',
      description:
        'Developed microservice REST APIs with **Java Spring Boot** and **Node.js**.\n\n**Key Achievements:**\n• Led cloud migration from AWS to Azure for laboratory systems\n• Implemented **OAuth 2.0** and **JWT** authentication across 15 microservices for SOC 2 compliance\n• Reduced infrastructure costs by **40%** through cloud-native optimization',
      technologies: ['Java', 'Spring Boot', 'Node.js', 'AWS', 'Azure', 'PostgreSQL', 'Docker'],
    },
    {
      period: 'May 2013 — Dec 2017',
      role: 'Senior Software Engineer',
      company: 'Kowa American Corporation',
      companyUrl: null,
      description:
        'Led development team building **medical imaging software** for **20+ hospitals** and **3 Air Force facilities**.\n\n**Key Achievements:**\n• Designed **HL7/DICOM** interfaces for medical data integration\n• Implemented **HIPAA-compliant** workflows and FDA validation for Class II medical devices\n• Built C# applications processing patient data and diagnostic imaging',
      technologies: ['C#', '.NET Framework', 'SQL Server', 'HL7', 'DICOM', 'Medical Imaging'],
    },
  ],

  projects: [
    {
      title: 'RAGnosis: Agentic RAG Intelligence Platform',
      description:
        'Production agentic RAG system demonstrating sophisticated patterns beyond basic vector search.\n\n**Core Features:**\n• **Agentic query planning** - LLM analyzes intent and routes to right sources\n• **Hybrid search** - RRF fusion (60% vector + 40% keyword) with optional cross-encoder reranking\n• **Real-time data** - Processes 3K+ doc chunks, integrates 4K+ HuggingFace models and GitHub repos\n• **Evaluation framework** - RAGAS with 28 test questions, 0.90 faithfulness score\n\n**Tech Stack:** Next.js, Supabase pgvector (HNSW indexing), Deno edge functions, Ollama',
      technologies: ['pgvector', 'HNSW', 'RRF Fusion', 'Supabase', 'Ollama', 'Next.js', 'Python', 'RAGAS', 'Cross-Encoder', 'Agentic Workflows'],
      link: 'https://www.ragnosis.app',
      githubLink: 'https://github.com/takumi-watanabe-ai/RAGnosis',
      impact: 'Live production system showcasing agentic RAG patterns for 3K+ docs with hybrid search and evaluation',
    },
    {
      title: 'Advanced RAG System with Hybrid Search & Async Processing',
      description:
        'Production-grade RAG system with **Celery-based async** document processing pipeline.\n\n**Architecture:**\n• **Hybrid search** - Semantic (Qdrant) + BM25 with weighted fusion (70/30)\n• **Cross-encoder reranking** - ms-marco-MiniLM for precision\n• **Distributed system** - FastAPI, Celery workers, Redis, PostgreSQL, Flower monitoring\n• **Auto-monitoring** - Hash-based change detection every 5 min\n\n**Tech Stack:** Qdrant, fastembed (bge-small-en-v1.5), Ollama, Streamlit, PDF table extraction',
      technologies: ['Qdrant', 'Celery', 'FastAPI', 'BM25', 'Cross-Encoder', 'PostgreSQL', 'Redis', 'Ollama', 'fastembed', 'Streamlit'],
      link: null,
      impact: 'Scalable RAG architecture processing PDFs with async pipelines and hybrid retrieval',
    },
    {
      title: 'Agentic Web Research Agent with LangGraph',
      description:
        'Autonomous research agent using **LangGraph** for multi-step reasoning and orchestration.\n\n**Key Features:**\n• Autonomously breaks down complex queries into sub-questions\n• Searches web via **Tavily API**, scrapes content with BeautifulSoup\n• Synthesizes findings into comprehensive reports with citations\n• Stateful agent workflows with planning, execution, and synthesis phases\n\n**Tech Stack:** OpenRouter (Claude, GPT-4), FastAPI backend, full research transparency with step-by-step traces',
      technologies: ['LangGraph', 'OpenRouter', 'Tavily', 'BeautifulSoup', 'FastAPI', 'Python', 'Autonomous Agents'],
      link: null,
      impact: 'Autonomous research system demonstrating multi-agent workflows and LLM orchestration',
    },
    {
      title: 'Agentic Code Review: Privacy-First Security Analysis GitHub Action',
      description:
        'GitHub Action for **autonomous security analysis** of pull requests using **self-hosted Ollama** (code never leaves infrastructure).\n\n**Security Analysis:**\n• OWASP Top 10 vulnerabilities, hardcoded secrets, authentication issues, injection attacks\n• CodeLlama/Llama 3.1 for deep code analysis\n• Actionable findings as PR comments with severity ratings (high/medium/low)\n\n**Enterprise-Ready:** Privacy-first architecture (SOC2/HIPAA compliant), no external API calls, configurable focus areas and severity thresholds',
      technologies: ['Ollama', 'CodeLlama', 'GitHub Actions', 'Python', 'Security Analysis', 'Autonomous Agents'],
      link: null,
      impact: 'Privacy-preserving agentic security analysis for code review automation',
    },
    {
      title: 'Enterprise Authentication & Authorization Middleware',
      description:
        'Built a **reusable authentication and authorization security layer** for microservices across multiple teams.\n\n**Architecture:**\n• **Middleware library** with dependency injection for JWT extraction from request headers\n• **Secure secret management** - Encrypted JWT secrets stored in AWS Parameter Store, decrypted via KMS at runtime\n• **Role-based access control** - Extracts user roles and granted verbs (CRUD) from tokens\n• **Flexible authorization** - Custom Authorize attribute for fine-grained endpoint control\n\n**Impact:** Microservices can now implement enterprise-grade auth by adding the library and a few lines of code, enabling rapid secure development across teams',
      technologies: ['JWT', 'AWS Parameter Store', 'AWS KMS', 'Middleware', 'RBAC', 'Dependency Injection', 'Microservices'],
      link: null,
      impact: 'Standardized auth/authz across microservices with secure secret management',
    },
    {
      title: 'Stacky: Production RAG Chatbot for StackArchitect',
      description:
        'Production RAG chatbot for StackArchitect consulting website using **Supabase pgvector**.\n\n**Pipeline:**\n• Thousands of documentation pages processed into semantic chunks\n• gte-small embeddings (384D) with **HNSW indexing** for similarity search\n• OpenRouter LLM for context-aware responses\n• Serverless Edge Functions (Deno/TypeScript)\n\n**Optimized:** Cosine similarity achieving **<$1/month** cost',
      technologies: ['pgvector', 'RAG', 'Supabase AI', 'HNSW', 'Python', 'Edge Functions', 'OpenRouter'],
      link: 'https://www.stackarchitect.io/stacky',
      impact: 'Production RAG system serving StackArchitect clients with 8K+ semantic chunks',
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
      category: 'Generative AI & RAG Systems',
      skills: [
        'RAG Architecture',
        'Vector Databases (pgvector, Qdrant, Pinecone)',
        'Semantic Search',
        'Hybrid Search (Vector + BM25)',
        'RRF Fusion',
        'HNSW Indexing',
        'Embeddings (OpenAI, gte-small, fastembed)',
        'Cross-Encoder Reranking',
        'Query Planning',
        'Context Management',
        'Prompt Engineering',
        'RAGAS Evaluation',
      ],
    },
    {
      category: 'AI Agents & Orchestration',
      skills: [
        'LangGraph',
        'Agentic Workflows',
        'Multi-Agent Systems',
        'Tool Calling',
        'Agent Planning & Reasoning',
        'Autonomous Task Decomposition',
        'State Management',
        'LLM Orchestration',
      ],
    },
    {
      category: 'LLM Integration & APIs',
      skills: [
        'OpenAI API',
        'OpenRouter',
        'Ollama (Self-Hosted)',
        'Claude (Anthropic)',
        'GPT-4',
        'CodeLlama',
        'Model Selection & Optimization',
        'Cost Optimization',
        'Responsible AI Practices',
      ],
    },
    {
      category: 'Backend & Data Infrastructure',
      skills: [
        'FastAPI',
        'Celery & Redis',
        'PostgreSQL',
        'Supabase',
        'Edge Functions (Deno)',
        'Docker & Docker Compose',
        'Async Processing',
        'Message Queues',
        'Document Processing (PyMuPDF)',
      ],
    },
    {
      category: 'Traditional ML & Data Engineering',
      skills: [
        'Databricks',
        'PySpark',
        'MLflow',
        'Delta Lake',
        'Python',
        'pandas',
        'scikit-learn',
        'Feature Engineering',
        'Model Training & Deployment',
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        'AWS (Lambda, S3, EC2)',
        'Azure',
        'GitHub Actions',
        'CI/CD',
        'Terraform',
        'Kubernetes',
        'Monitoring & Logging',
      ],
    },
    {
      category: 'Full-Stack Development',
      skills: [
        'TypeScript',
        'Next.js',
        'React',
        'Node.js',
        'REST APIs',
        'Streamlit',
        'Tailwind CSS',
        'Web Scraping (BeautifulSoup)',
      ],
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
    text: 'Available for Generative AI consulting. Let\'s build intelligent systems together.',
    link: null,
  },
};
