export const portfolioData = {
  metadata: {
    title: 'Takumi Watanabe - AI Engineer | Production LLM & RAG Systems Expert',
    description:
      '15 years software engineering experience, specializing in production LLM and RAG systems. Expert in Python, LangChain, AWS, agentic workflows, hybrid search, and LLM evaluation. Live systems at ragnosis.app.',
  },

  header: {
    name: 'Takumi Watanabe',
    title: 'AI Engineer | Production LLM & RAG Systems Expert',
    tagline:
      'Specializing in production LLM and RAG systems using Python, LangChain, and AWS. Expert in agentic workflows, hybrid search, and LLM evaluation.',
    email: 'w.takumi.cs@gmail.com',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/takumi-watanabe/',
      github: 'https://github.com/takumi-watanabe-ai',
      kaggle: 'https://www.kaggle.com/webdevbadger',
    },
    highlights: [
      { label: 'Live RAG System', value: 'ragnosis.app' },
      { label: 'AWS GenAI Certified', value: 'Professional + Early Adopter' },
      { label: '15 Years Experience', value: 'Full-stack to AI systems' },
    ],
  },

  about: [
    "I'm an **AI Engineer** with **15 years of software engineering experience**, now specializing in **production LLM and RAG systems**. I architect and deploy enterprise-grade agentic AI applications using **Python**, **LangChain**, and **AWS**, with full-stack ownership from design through production deployment.",
    "My work focuses on building **measurable, production-ready systems** rather than proofs of concept. I've deployed enterprise RAG solutions processing thousands of documents with continuous evaluation frameworks, implemented privacy-first architectures using local LLM inference, and built distributed systems achieving enterprise-grade reliability. Before specializing in AI, I spent years building scalable cloud infrastructure and microservices at companies like BlackBerry and Microsoft.",
    "**<a href='https://www.ragnosis.app' target='_blank' rel='noreferrer'>RAGnosis</a>** is my flagship project—a live agentic RAG platform demonstrating sophisticated patterns beyond basic vector search. It combines agentic query planning, hybrid search with RRF fusion, automated quality evaluation via RAGAS, and real-time integration with HuggingFace models and GitHub repositories. The system showcases production-ready techniques for building intelligent, evaluated RAG applications.",
    "**AWS Certified**: Generative AI Developer (Professional + Early Adopter) | Machine Learning Specialty\n\n**Available for consulting**: Enterprise RAG implementation, agentic AI systems, LLM evaluation frameworks, and privacy-first architectures. Particularly interested in projects requiring measurable quality improvements, hybrid search optimization, and production deployment expertise.\n\n**Bilingual**: English and Japanese",
  ],

  experience: [
    {
      period: 'July 2023 — Present',
      role: 'Principal Consultant',
      company: 'Stack Architect',
      companyUrl: 'https://stackarchitect.io',
      description:
        'Shipped **production LLM and RAG systems** with measurable impact:\n\n• Deployed **enterprise RAG solution** processing **10K+ documents** with continuous evaluation and benchmarking, achieving **30% accuracy improvement** over baseline and **sub-second response times**\n• Architected **agentic AI system** with tool-calling, multi-turn reasoning, and context management enabling autonomous task completion and intelligent user interactions\n• Implemented **production infrastructure** with FastAPI microservices, Celery distributed workers, and PostgreSQL metadata storage achieving **99.9% uptime** for mission-critical applications\n• Integrated **local LLM inference** with Ollama for privacy-first answer generation, eliminating external API costs while ensuring data security compliance for sensitive document workflows',
      technologies: ['Python', 'LangChain', 'FastAPI', 'Celery', 'PostgreSQL', 'Ollama', 'RAGAS', 'LangSmith', 'Docker', 'AWS'],
    },
    {
      period: 'May 2019 — July 2023',
      role: 'Principal Cloud Software Engineer',
      company: 'Cylance, BlackBerry',
      companyUrl: 'https://www.blackberry.com',
      description:
        'Built scalable **Python microservices** deployed to **6 AWS production regions** serving **14M+ endpoints** achieving **99.9% uptime** with sub-15 minute MTTR for critical incidents.\n\n**Key Achievements:**\n• Reduced AWS infrastructure costs by **83%** from **$300K to $50K monthly** ($250K annual savings) through event processing architecture redesign with cost-optimized data streams and auto-scaling\n• Architected **threat intelligence system** processing **4M monthly event feeds** using AWS Kinesis, Lambda, Kafka, and Elasticsearch for real-time security analytics serving enterprise customers globally\n• Automated infrastructure provisioning for **14 AWS resource types** using Terraform IaC and Jenkins CI/CD reducing deployment time by **70%** across 6 production regions',
      technologies: [
        'Python',
        'AWS',
        'Terraform',
        'Jenkins',
        'Kafka',
        'Elasticsearch',
        'Kinesis',
        'Lambda',
        'PostgreSQL',
      ],
    },
    {
      period: 'Jan 2022 — June 2022',
      role: 'Cloud Engineer Consultant',
      company: 'Microsoft',
      companyUrl: 'https://www.microsoft.com',
      description:
        'Modernized **2 legacy services** refactoring **15 deeply nested object models** into **.NET Core microservices** optimized for Kubernetes deployment with container orchestration and auto-scaling.\n\n**Key Achievement:**\n• Enhanced reliability and scalability of systems powering order fulfillment and financial transactions processing **$50M+ annual revenue** on Microsoft internal marketplace',
      technologies: ['.NET Core', 'Kubernetes', 'Azure', 'Docker', 'Microservices'],
    },
    {
      period: 'Jan 2017 — May 2019',
      role: 'Principal Software Consultant',
      company: 'Bio-Rad',
      companyUrl: 'https://www.bio-rad.com',
      description:
        '**Key Achievements:**\n• Developed **6 microservice REST APIs** using C# and Angular in AWS reducing infrastructure costs by **40%**\n• Implemented **OAuth 2.0**, **JWT authentication**, and **RBAC** across 15 microservices achieving **SOC 2 compliance**',
      technologies: ['C#', 'Angular', 'AWS', 'MSSQL', 'Kubernetes', 'Docker', 'OAuth 2.0', 'JWT'],
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
        'Vector Databases (pgvector, Qdrant)',
        'Semantic Search',
        'Hybrid Search (Vector + BM25)',
        'RRF Fusion',
        'HNSW Indexing',
        'Embeddings (OpenAI, gte-small, fastembed)',
        'Cross-Encoder Reranking',
        'Query Planning',
        'Context Management',
      ],
    },
    {
      category: 'LLM Evaluation & Optimization',
      skills: [
        'RAGAS',
        'LangSmith',
        'Prompt Engineering',
        'A/B Testing',
        'LLM Tracing',
        'Performance Benchmarking',
        'Quality Metrics',
        'Cost Optimization',
      ],
    },
    {
      category: 'AI Agents & Orchestration',
      skills: [
        'LangChain',
        'LangGraph',
        'Agentic Workflows',
        'Multi-Agent Systems',
        'Tool Calling',
        'Agent Planning & Reasoning',
        'Autonomous Task Decomposition',
        'State Management',
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
        'Model Selection',
        'Privacy-First Architectures',
      ],
    },
    {
      category: 'Backend & Infrastructure',
      skills: [
        'Python (FastAPI, Pydantic, Celery)',
        'PostgreSQL',
        'Docker & Kubernetes',
        'AWS (Lambda, ECS, S3, DynamoDB)',
        'Terraform',
        'CI/CD',
        'REST APIs',
        'Async Processing',
      ],
    },
    {
      category: 'Full-Stack Development',
      skills: [
        'TypeScript',
        'Next.js',
        'React',
        'Node.js',
        'Streamlit',
        'Tailwind CSS',
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
    text: `Available for AI engineering consulting. Let's build production-ready intelligent systems together. © ${new Date().getFullYear()} Takumi Watanabe`,
    link: null,
  },
};
