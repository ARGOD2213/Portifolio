export const site = {
  name: "Chintala Mahindra",
  role: "Java Backend Engineer",
  title: "Java Backend Engineer | Spring Boot | Microservices | AI Application Integration",
  email: "chintalamahindra163@gmail.com",
  phone: "+91 96181 12357",
  linkedin: "https://in.linkedin.com/in/chintala-mahindra-178306241",
  github: "",
  location: "Hyderabad, India",
  availability: "Open to Java backend roles, AI-enabled backend projects and freelance work",
  responseTime: "Within 24 hours",
  resume: "/Chintala_Mahindra_Resume.pdf",
  photo: "",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  projects: [
    {
      name: "Digital Library Platform",
      status: "In progress",
      period: "2025 — Present",
      role: "Personal project",
      problem: "A secure digital library backend for role-aware workflows, book-file storage, caching and cloud delivery.",
      stack: ["Spring Boot 3", "Java 21", "PostgreSQL", "Redis", "Docker", "AWS"],
      built: ["REST APIs, Spring Data JPA, Flyway migrations and role-based workflows for readers, vendors and admins.","JWT authentication, Redis caching and S3 storage for book files with SES/SNS notifications.","Docker Compose containerization and AWS EC2 deployment using GitHub Actions CI/CD."],
      decisions: ["Used JPA and Flyway to keep persistence and schema changes explicit.","Used Redis for caching and S3 for book-file storage rather than placing files in the relational database.","Used JWT/RBAC to separate reader, vendor and admin access."],
      github: "",
      live: ""
    },
    {
      name: "PolicyDocs RAG Service",
      status: "In progress",
      period: "2025 — Present",
      role: "Personal project",
      problem: "A controlled document Q&A service that retrieves relevant policy context before generating an answer.",
      stack: ["Spring Boot 3", "Spring AI", "Java 21", "PostgreSQL + pgvector", "Redis", "Docker", "AWS"],
      built: ["Document ingestion, chunking, embeddings and RAG-based Q&A over policy documents.","pgvector semantic retrieval, conversation context and structured outputs.","JWT/RBAC-protected retrieval with Docker and AWS EC2 deployment."],
      decisions: ["Used pgvector to keep semantic retrieval close to the application database.","Applied application-level access controls before retrieved context reaches the model.","Focused on grounded responses and controlled backend access rather than open LLM access."],
      github: "",
      live: ""
    }
  ]
} as const;

export type Project = (typeof site.projects)[number];
