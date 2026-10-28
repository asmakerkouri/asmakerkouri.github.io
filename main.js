/* Portfolio Asma Kerkouri — content, bilingual FR / EN, animations */
(() => {
  const GH = "https://github.com/asmakerkouri/";
  const ICONS = window.ICONS || {};
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ------------------------------------------------------------------ texts
  const EN = {
    "nav.expertise": "Expertise", "nav.experience": "Experience", "nav.projects": "Projects", "nav.skills": "Stack",
    "nav.contact": "Contact", "cta.cv": "Resume", "cta.download": "Download my resume", "cta.projects": "See my projects",
    "hero.status": "Available now · permanent role · Paris area / anywhere in France",
    "hero.lead": "AI engineer. I build systems that see, understand and act: 3D perception for inspection robots, LLM agents connected to tools, and models deployed to the cloud with Docker and CI/CD.",
    "stats.repos": "open-source projects", "stats.xp": "industry and research experiences",
    "stats.masters": "Master's degrees in computer science", "stats.lang": "languages: FR · EN · TR",
    "exp4.title": "Four fields, one goal: AI that runs in production",
    "d.cv": "Computer Vision 2D / 3D", "d.cv.h": "Seeing and measuring the real world",
    "d.cv.p": "Point clouds, ICP/NDT registration, ToF photogrammetry, defect and skeleton detection with YOLO11, SAM and Open3D.",
    "d.ai": "AI agents & LLMs", "d.ai.h": "Agents that act, safely",
    "d.ai.p": "Tool calling, Model Context Protocol, hybrid RAG, voice chat, with guardrails, human approval and measured evaluation.",
    "d.cloud": "Cloud & MLOps", "d.cloud.h": "Models served at scale",
    "d.cloud.p": "FastAPI services, AWS (EC2, S3, ECR, Bedrock, API Gateway), Kubernetes, Terraform, experiment tracking with MLflow and DVC.",
    "d.ops": "DevOps & CI/CD", "d.ops.h": "From commit to production",
    "d.ops.p": "Docker, GitHub Actions, GitLab CI, automated tests, security scanning, continuous deployment and GitOps.",
    "about.p1": "Specialised in <strong>3D computer vision</strong>, I built at <strong>Builder Assist</strong> the perception chain of a construction-site inspection robot, from ToF camera acquisition to driving a Schneider Electric robot arm with ROS 2.",
    "about.p2": "At <strong>Octa Digital</strong>, I put <strong>LLMs, RAG and AI agents</strong> into production behind FastAPI services, with automated tests and continuous deployment. What drives me: AI systems that are reliable, measured and deployed.",
    "exp.title": "Experience", "proj.title": "Projects",
    "proj.sub": "Public code, measured results and detailed READMEs on GitHub.",
    "proj.all": "All repositories on GitHub →", "skills.title": "Technical skills", "edu.title": "Education",
    "edu.m1": "MSc Computer Science: IoT Services and Systems (SSIO)", "edu.m1.d": "Embedded AI, distributed systems, networks",
    "edu.m2": "MSc Computer Science: Advanced Information Systems Engineering (ISIA)",
    "edu.m2.d": "Software architecture, business intelligence, big data",
    "contact.title": "Let's work together",
    "contact.lead": "A role in AI, computer vision, MLOps or cloud? Write to me, I answer quickly.",
    "contact.where": "location", "contact.loc": "Paris area · open to relocation in France",
    "form.name": "Name", "form.email": "Email", "form.company": "Company (optional)", "form.message": "Message",
    "form.send": "Send", "form.sent": "Thank you, your message has been sent.", "footer.top": "Back to top ↑",
  };
  const FR = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => { FR[el.dataset.i18n] = el.innerHTML; });

  const ROLES = {
    fr: ["Ingénieure IA", "Computer Vision 2D / 3D", "Agents IA & LLM", "MLOps & Cloud AWS", "DevOps · Docker · CI/CD"],
    en: ["AI Engineer", "Computer Vision 2D / 3D", "AI agents & LLMs", "MLOps & AWS cloud", "DevOps · Docker · CI/CD"],
  };

  const YAML = {
    fr: [["name", "Asma Kerkouri"], ["role", "Ingénieure IA"], ["focus", "[computer-vision-3d, ai-agents, mlops]"],
         ["stack", "[python, pytorch, open3d, fastapi, docker, aws]"], ["education", "2 x Master informatique"],
         ["languages", "[fr, en, tr]"], ["location", "Île-de-France"], ["open_to_work", "true"]],
    en: [["name", "Asma Kerkouri"], ["role", "AI Engineer"], ["focus", "[computer-vision-3d, ai-agents, mlops]"],
         ["stack", "[python, pytorch, open3d, fastapi, docker, aws]"], ["education", "2 x MSc computer science"],
         ["languages", "[fr, en, tr]"], ["location", "Paris area, France"], ["open_to_work", "true"]],
  };

  const EXPERIENCE = [
    { title: ["Ingénieure IA freelance (agents IA et LLM)", "Freelance AI Engineer (AI agents & LLMs)"], co: "Octa Digital",
      meta: ["Freelance · juin 2026 – sept. 2026 · Télétravail (Londres, Royaume-Uni)", "Freelance · Jun 2026 – Sep 2026 · Remote (London, UK)"],
      points: [
        ["Agent IA conversationnel pour l'application de suivi de projets des clients : un LLM avec appel d'outils répond sur l'avancement, les livrables et les échéances, en français et en anglais.",
         "Conversational AI agent for the clients' project-tracking app: an LLM with tool calling answers questions on progress, deliverables and deadlines, in French and English."],
        ["RAG sur la documentation des projets (BM25 + vecteurs) et garde-fous : lecture seule, masquage des données sensibles, traçabilité.",
         "RAG over project documentation (BM25 + vectors) and guardrails: read-only access, sensitive-data masking, traceability."],
        ["API FastAPI, conteneurisation Docker et déploiement continu avec GitHub Actions.",
         "FastAPI service, Docker packaging and continuous deployment with GitHub Actions."],
      ],
      chips: ["LLM", "Tool calling", "RAG", "FastAPI", "Docker", "GitHub Actions"] },
    { title: ["Ingénieure Vision 3D et Robotique", "3D Vision & Robotics Engineer"], co: "Builder Assist",
      meta: ["Stage de fin d'études · nov. 2025 – mai 2026 · Toulouse", "Final-year internship · Nov 2025 – May 2026 · Toulouse"],
      points: [
        ["Détection et caractérisation de défauts de surface en temps réel (nuages de points 3D + YOLO11, ResNet-50), annotation assistée par SAM et X-AnyLabeling.",
         "Real-time detection and characterisation of surface defects (3D point clouds + YOLO11, ResNet-50), SAM-assisted labelling with X-AnyLabeling."],
        ["Acquisition 3D et photogrammétrie avec une caméra ToF Luxonis OAK, reconstruction avec COLMAP et MeshLab.",
         "3D acquisition and photogrammetry with a Luxonis OAK ToF camera, reconstruction with COLMAP and MeshLab."],
        ["Stitching multi-scans et recalage des nuages de points (ICP, NDT avec Open3D et PCL) sur la géométrie de référence.",
         "Multi-scan stitching and registration of point clouds (ICP, NDT with Open3D and PCL) onto the reference geometry."],
        ["Algorithme de squelette pilotant un bras robot Schneider Electric, intégré en nœuds ROS 2 (MoveIt 2, RViz, Gazebo, RoboDK).",
         "Skeleton algorithm driving a Schneider Electric robot arm, integrated as ROS 2 nodes (MoveIt 2, RViz, Gazebo, RoboDK)."],
        ["Optimisation de l'inférence embarquée (CUDA/cuDNN) et conteneurisation Docker.",
         "Embedded inference optimisation (CUDA/cuDNN) and Docker packaging."],
      ],
      chips: ["Open3D", "PCL", "COLMAP", "YOLO11", "SAM", "ROS 2", "MoveIt 2", "CUDA", "Docker"] },
    { title: ["Développeuse Backend et Intégration IA / LLMOps", "Backend & AI Integration / LLMOps Developer"], co: "Octa Digital",
      meta: ["CDD · août 2023 – juil. 2024 · Télétravail (Royaume-Uni)", "Fixed-term contract · Aug 2023 – Jul 2024 · Remote (UK)"],
      points: [
        ["Intégration de LLM en production : RAG, sorties structurées, pipelines NLP automatisés.",
         "LLMs in production: retrieval-augmented generation, structured outputs, automated NLP pipelines."],
        ["API REST asynchrones (FastAPI, Flask) servant les requêtes IA de la plateforme ; optimisation des bases SQL/NoSQL.",
         "Asynchronous REST APIs (FastAPI, Flask) serving the platform's AI requests; SQL/NoSQL database optimisation."],
        ["Tests automatisés et déploiement continu (Docker, GitLab CI, GitHub Actions).",
         "Automated tests and continuous deployment (Docker, GitLab CI, GitHub Actions)."],
      ],
      chips: ["LLM", "RAG", "FastAPI", "Flask", "Docker", "GitLab CI", "GitHub Actions", "SQL / NoSQL"] },
    { title: ["Enseignante vacataire (algorithmique et POO)", "Part-time Lecturer (algorithms and OOP)"], co: "Université Hassiba Ben Bouali",
      meta: ["Temps partiel · fév. 2023 – juil. 2024 · Algérie", "Part-time · Feb 2023 – Jul 2024 · Algeria"],
      points: [["Encadrement de TP de structures de données, d'algorithmique et de programmation orientée objet (Python, Java).",
                "Lab sessions in data structures, algorithms and object-oriented programming (Python, Java)."]],
      chips: ["Python", "Java"] },
    { title: ["Ingénieure Modèles ML et Vision Médicale", "ML Engineer, Medical Imaging"], co: "Laboratoire PRISME · Polytech Orléans · CHU",
      meta: ["Stage · avr. 2022 – juil. 2022 · Orléans", "Internship · Apr 2022 – Jul 2022 · Orléans, France"],
      points: [["Fine-tuning et comparaison de VGG16 et ResNet-50 (Keras/TensorFlow) pour la COVID et la pneumonie sur radiographies ; application de diagnostic assisté.",
                "Fine-tuning and benchmarking of VGG16 and ResNet-50 (Keras/TensorFlow) for COVID and pneumonia on X-rays; computer-aided diagnosis application."]],
      chips: ["TensorFlow", "Keras", "VGG16", "ResNet-50"] },
    { title: ["Ingénieure Intégration Flux et Temps Réel", "Real-time Data Integration Engineer"], co: "Yassir",
      meta: ["Stage · juin 2020 – août 2020 · Alger", "Internship · Jun 2020 – Aug 2020 · Algiers"],
      points: [["Filtrage du bruit GPS et lissage de trajectoires en temps réel entre microservices.",
                "Real-time GPS noise filtering and trajectory smoothing between microservices."]],
      chips: ["Python", "Microservices", "Real time"] },
  ];

  const CATS = { all: ["Tous", "All"], cv: ["Computer Vision 3D", "3D Computer Vision"], ai: ["Agents IA & LLM", "AI agents & LLMs"],
                 ops: ["Cloud, MLOps & DevOps", "Cloud, MLOps & DevOps"], data: ["Data & IoT", "Data & IoT"] };
  const COLOR = { cv: "var(--c-cv)", ai: "var(--c-ai)", ops: "var(--c-ops)", data: "var(--c-cloud)" };

  const PROJECTS = [
    { repo: "inspection-agent-3d", cat: "cv", also: "ai", star: true, img: true,
      name: ["Agent d'inspection 3D", "3D inspection agent"],
      desc: ["Un agent IA pilote des outils de nuages de points : recalage, détection et mesure des défauts, contrôle des tolérances et rapport de réception du mur.",
             "An AI agent drives point-cloud tools: registration, defect detection and measurement, tolerance check and hand-over report."],
      metric: ["47/47 défauts trouvés · 14/14 décisions correctes", "47/47 defects found · 14/14 correct decisions"],
      chips: ["Open3D", "Tool calling", "DBSCAN", "ICP"] },
    { repo: "point-cloud-defect-inspection", cat: "cv", star: true, img: true,
      name: ["Inspection 3D de surfaces", "3D surface inspection"],
      desc: ["Recalage FPFH + RANSAC + ICP sur la géométrie de référence, carte d'écarts signée, détection et classification des bosses, creux et fissures.",
             "FPFH + RANSAC + ICP registration onto the reference geometry, signed deviation map, detection and classification of bumps, hollows and cracks."],
      metric: ["Recalage à 2,7 mm d'erreur · API FastAPI", "2.7 mm registration error · FastAPI service"],
      chips: ["Open3D", "RANSAC", "ICP", "FastAPI", "Docker"] },
    { repo: "pose-estimation-analytics", cat: "cv", star: true, img: true,
      name: ["Détection de squelette humain", "Human pose estimation"],
      desc: ["17 points du squelette avec YOLO11-pose, angles articulaires, reconnaissance de posture et compteur de répétitions, servis par une API.",
             "17 skeleton keypoints with YOLO11-pose, joint angles, posture recognition and a repetition counter, served by an API."],
      metric: ["Export ONNX : inférence 30 % plus rapide sur CPU", "ONNX export: 30 % faster CPU inference"],
      chips: ["YOLO11-pose", "ONNX", "FastAPI", "Docker"] },
    { repo: "mcp-agent-guardrails", cat: "ai", star: true, img: true,
      name: ["Agent MCP avec garde-fous", "MCP agent with guardrails"],
      desc: ["Agent connecté à des outils par le Model Context Protocol : politique d'accès, validation humaine, masquage des secrets, détection d'injection de prompt, traces.",
             "Agent using tools through the Model Context Protocol: access policy, human approval, secret redaction, prompt-injection flagging, tracing."],
      metric: ["38/38 décisions correctes en red-team", "38/38 correct red-team decisions"],
      chips: ["MCP", "LLM", "Security", "Tracing"] },
    { repo: "text-to-sql-agent", cat: "ai", star: true, img: true,
      name: ["Agent Text-to-SQL", "Text-to-SQL agent"],
      desc: ["Une question en langage naturel devient une requête SQL en lecture seule, auto-corrigée à partir du schéma, puis un graphique.",
             "A plain-English question becomes a read-only SQL query, self-corrected from the schema, then a chart."],
      metric: ["105/106 erreurs SQL de LLM réparées · 20/20 attaques bloquées", "105/106 LLM SQL errors repaired · 20/20 attacks blocked"],
      chips: ["LLM", "sqlglot", "FastAPI", "Guardrails"] },
    { repo: "mlops-yolo-fastapi", cat: "ops", also: "cv", star: true, img: true,
      name: ["Pipeline MLOps de détection d'objets", "Object-detection MLOps pipeline"],
      desc: ["Entraînement YOLO11 reproductible avec DVC et MLflow, API FastAPI instrumentée, image Docker et CI/CD jusqu'à GHCR et AWS ECR.",
             "Reproducible YOLO11 training with DVC and MLflow, instrumented FastAPI service, Docker image and CI/CD to GHCR and AWS ECR."],
      metric: ["Lint · tests · build · scan Trivy · publication", "Lint · tests · build · Trivy scan · publish"],
      chips: ["DVC", "MLflow", "FastAPI", "GitHub Actions"] },
    { repo: "voice-agent-assistant", cat: "ai", img: true,
      name: ["Assistant vocal (voice chat)", "Voice assistant (voice chat)"],
      desc: ["Assistant mains libres pour techniciens de chantier : Whisper, appel d'outils, synthèse vocale Piper, 100 % hors ligne sur CPU.",
             "Hands-free assistant for site technicians: Whisper, tool calling, Piper speech synthesis, fully offline on CPU."],
      metric: ["480 ms par échange · 8 % d'erreur de mots", "480 ms per turn · 8 % word error rate"],
      chips: ["Whisper", "Piper", "Silero VAD", "FastAPI"] },
    { repo: "arxiv-rag-multiagent", cat: "ai", img: true,
      name: ["Assistant de recherche RAG multi-agents", "Multi-agent RAG research assistant"],
      desc: ["Graphe d'agents LangGraph : recherche arXiv, recherche hybride BM25 + vecteurs fusionnée par RRF, réponses citées via AWS Bedrock.",
             "LangGraph agent graph: arXiv search, hybrid BM25 + vector retrieval fused with RRF, cited answers through AWS Bedrock."],
      metric: ["RAG hybride · évaluation BEIR SciFact", "Hybrid RAG · BEIR SciFact evaluation"],
      chips: ["LangGraph", "RAG", "AWS Bedrock", "Gradio"] },
    { repo: "k8s-terraform-ml-platform", cat: "ops", art: "k8s",
      name: ["Plateforme ML sur Kubernetes", "ML platform on Kubernetes"],
      desc: ["Infrastructure AWS (VPC, EKS, ECR) en Terraform, chart Helm avec autoscaling, monitoring Prometheus / Grafana, exécutable en local sur kind.",
             "AWS infrastructure (VPC, EKS, ECR) in Terraform, Helm chart with autoscaling, Prometheus / Grafana monitoring, runnable locally on kind."],
      metric: ["Infrastructure as code · CI de validation", "Infrastructure as code · validation CI"],
      chips: ["Terraform", "Kubernetes", "Helm", "AWS"] },
    { repo: "gitops-argocd-ml", cat: "ops", art: "gitops",
      name: ["Déploiement GitOps avec Argo CD", "GitOps deployment with Argo CD"],
      desc: ["App of apps, environnements dev / prod par ApplicationSet, promotion par pull request, Sealed Secrets.",
             "App of apps, dev / prod environments with an ApplicationSet, promotion by pull request, Sealed Secrets."],
      metric: ["Déploiement déclaratif piloté par Git", "Declarative, Git-driven deployment"],
      chips: ["Argo CD", "GitOps", "Kubernetes"] },
    { repo: "ros2-slam-turtlebot3", cat: "cv", art: "slam",
      name: ["Cartographie SLAM sous ROS 2", "SLAM mapping with ROS 2"],
      desc: ["Exploration autonome et cartographie en temps réel dans Gazebo avec slam_toolbox, exécutée sans écran dans Docker.",
             "Autonomous exploration and real-time mapping in Gazebo with slam_toolbox, running headless in Docker."],
      metric: ["ROS 2 Jazzy · simulation reproductible", "ROS 2 Jazzy · reproducible simulation"],
      chips: ["ROS 2", "SLAM", "Gazebo", "Docker"] },
    { repo: "spark-taxi-lakehouse", cat: "data", star: true, img: true,
      name: ["Lakehouse Big Data PySpark", "PySpark big-data lakehouse"],
      desc: ["Architecture médaillon sur 5 millions de trajets : contrôle qualité avec quarantaine, Parquet partitionné, Spark SQL, MLlib, DAG Airflow.",
             "Medallion architecture on 5 million trips: data-quality quarantine, partitioned Parquet, Spark SQL, MLlib, Airflow DAG."],
      metric: ["5 M lignes · modèle MLlib R² 0,84", "5 M rows · MLlib model R² 0.84"],
      chips: ["PySpark", "MLlib", "Airflow", "Parquet"] },
    { repo: "edge-ai-iot-streaming", cat: "data", img: true,
      name: ["Edge AI et streaming IoT", "Edge AI & IoT streaming"],
      desc: ["Prévisions en flux sur MQTT avec XGBoost, tableau de bord Grafana et modèle TensorFlow Lite pour Raspberry Pi.",
             "Streaming forecasts over MQTT with XGBoost, Grafana dashboard and a TensorFlow Lite model for Raspberry Pi."],
      metric: ["Modèle TFLite de 7 Ko", "7 KB TFLite model"],
      chips: ["MQTT", "XGBoost", "TFLite", "Grafana"] },
    { repo: "r-survival-analysis", cat: "data", img: true,
      name: ["Analyse de survie en R", "Survival analysis in R"],
      desc: ["Kaplan-Meier, tests du log-rank et modèle de Cox sur une cohorte publique de cancer du poumon, rapport R Markdown.",
             "Kaplan-Meier, log-rank tests and Cox model on a public lung-cancer cohort, R Markdown report."],
      metric: ["Statistiques médicales · rapport reproductible", "Medical statistics · reproducible report"],
      chips: ["R", "survival", "R Markdown"] },
  ];

  // generated artwork for the repositories without result images
  const ART = {
    k8s: `<svg class="art" viewBox="0 0 360 178"><defs><radialGradient id="ak" cx=".5" cy=".3"><stop offset="0" stop-color="#1d3b6b"/><stop offset="1" stop-color="#0B1324"/></radialGradient></defs><rect width="360" height="178" fill="url(#ak)"/>
      <path d="M40 40h280v100H40z" fill="none" stroke="#F59E0B" stroke-dasharray="6 5" stroke-width="1.5"/><text x="50" y="58" fill="#FCD34D" font-family="monospace" font-size="11">terraform apply → EKS</text>
      ${[0, 1, 2, 3].map((i) => `<g><rect x="${70 + i * 58}" y="78" width="44" height="40" rx="8" fill="#13233F" stroke="#38BDF8" stroke-width="1.5"/><text x="${92 + i * 58}" y="103" fill="#7DD3FC" font-family="monospace" font-size="10" text-anchor="middle">pod</text></g>`).join("")}
      <text x="180" y="160" fill="#92A1B9" font-family="monospace" font-size="10" text-anchor="middle">Helm · HPA · Prometheus · Grafana</text></svg>`,
    gitops: `<svg class="art" viewBox="0 0 360 178"><rect width="360" height="178" fill="#0B1324"/>
      <circle cx="70" cy="89" r="26" fill="#13233F" stroke="#F05032" stroke-width="2"/><text x="70" y="93" fill="#FCA5A5" font-family="monospace" font-size="11" text-anchor="middle">git</text>
      <circle cx="180" cy="89" r="30" fill="#13233F" stroke="#EF7B4D" stroke-width="2"/><text x="180" y="93" fill="#FDBA74" font-family="monospace" font-size="11" text-anchor="middle">Argo CD</text>
      <rect x="250" y="45" width="80" height="34" rx="8" fill="#13233F" stroke="#34D399"/><text x="290" y="66" fill="#6EE7B7" font-family="monospace" font-size="11" text-anchor="middle">dev</text>
      <rect x="250" y="99" width="80" height="34" rx="8" fill="#13233F" stroke="#34D399"/><text x="290" y="120" fill="#6EE7B7" font-family="monospace" font-size="11" text-anchor="middle">prod</text>
      <path d="M96 89h54M210 80l40-18M210 98l40 18" stroke="#92A1B9" stroke-dasharray="4 4" fill="none"/><text x="180" y="160" fill="#92A1B9" font-family="monospace" font-size="10" text-anchor="middle">sync · self-heal · promotion by PR</text></svg>`,
    slam: (() => {
      let s = '<svg class="art" viewBox="0 0 360 178"><rect width="360" height="178" fill="#0B1324"/>';
      for (let x = 0; x < 360; x += 12) for (let y = 0; y < 178; y += 12) {
        const inside = (x > 40 && x < 320 && y > 24 && y < 154) && !(x > 150 && x < 210 && y > 24 && y < 96);
        const wall = inside && (x < 52 || x > 306 || y < 36 || y > 142 || (x > 138 && x < 222 && y < 108));
        s += `<rect x="${x}" y="${y}" width="11" height="11" fill="${wall ? "#E8EEF8" : inside ? "#1B2A45" : "#0E1628"}"/>`;
      }
      return s + '<path d="M70 130 C 100 60, 130 140, 250 120 S 290 60, 280 50" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="5 4"/><circle cx="280" cy="50" r="7" fill="#F87171"/></svg>';
    })(),
  };

  const SKILLS = [
    { t: ["Computer Vision 2D/3D", "Computer Vision 2D/3D"], c: "var(--c-cv)", i: "👁️",
      items: ["opencv", "Open3D", "PCL", "COLMAP", "MeshLab", "ICP / NDT", "YOLO11", "SAM", "Luxonis OAK ToF"] },
    { t: ["Deep learning", "Deep learning"], c: "var(--c-cv)", i: "🧠",
      items: ["pytorch", "tensorflow", "onnx", "nvidia:CUDA / cuDNN", "ResNet", "scikitlearn", "numpy", "pandas"] },
    { t: ["Agents IA & LLM", "AI agents & LLMs"], c: "var(--c-ai)", i: "🤖",
      items: ["langchain", "LangGraph", "MCP", "Tool calling", "RAG", "huggingface", "ollama", "AWS Bedrock", "Voice chat"] },
    { t: ["Cloud & infrastructure", "Cloud & infrastructure"], c: "var(--c-cloud)", i: "☁️",
      items: ["AWS EC2", "AWS S3", "AWS ECR", "AWS API Gateway", "kubernetes", "helm", "terraform", "linux", "ubuntu"] },
    { t: ["MLOps & DevOps", "MLOps & DevOps"], c: "var(--c-ops)", i: "⚙️",
      items: ["docker", "githubactions", "gitlab:GitLab CI", "git", "argo:Argo CD", "mlflow", "dvc", "fastapi", "flask", "prometheus", "grafana"] },
    { t: ["Data, IoT & langages", "Data, IoT & languages"], c: "var(--c-cloud)", i: "📊",
      items: ["python", "cplusplus", "Java", "JavaScript", "r", "SQL", "apachespark", "apacheairflow", "postgresql", "mongodb", "elasticsearch", "mqtt", "raspberrypi", "ros:ROS 2"] },
  ];

  const MARQUEE = ["python", "pytorch", "tensorflow", "opencv", "onnx", "nvidia", "ros", "langchain", "huggingface", "ollama", "fastapi",
    "docker", "kubernetes", "terraform", "AWS", "githubactions", "gitlab", "argo", "mlflow", "dvc", "apachespark", "apacheairflow",
    "prometheus", "grafana", "linux", "postgresql", "mongodb", "raspberrypi"];

  // ----------------------------------------------------------------- helpers
  let lang = "fr";
  let filter = "all";
  const L = (pair) => (Array.isArray(pair) ? pair[lang === "fr" ? 0 : 1] : pair);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const chips = (list) => `<div class="chips">${list.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>`;
  function icon(spec) {
    const [slug, label] = spec.split(":");
    if (slug === "AWS") return { svg: '<span class="aws">aws</span>', title: "Amazon Web Services" };
    if (slug.startsWith("AWS ")) return { svg: '<span class="aws">aws</span>', title: slug.slice(4) };
    const ic = ICONS[slug];
    if (!ic) return { svg: "", title: label || slug };
    return { svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#${ic.h}" d="${ic.p}"/></svg>`, title: label || ic.t };
  }

  // ------------------------------------------------------------------ render
  function renderMarquee() {
    const one = MARQUEE.map((s) => { const i = icon(s); return `<span class="tech">${i.svg}${esc(i.title)}</span>`; }).join("");
    document.getElementById("track").innerHTML = one + one;
    const two = [...MARQUEE].reverse().map((s) => { const i = icon(s); return `<span class="tech">${i.svg}${esc(i.title)}</span>`; }).join("");
    document.getElementById("track2").innerHTML = two + two;
  }

  function renderTimeline() {
    document.getElementById("timeline").innerHTML = EXPERIENCE.map((e) => `
      <li class="reveal">
        <div class="tl-head"><h3>${esc(L(e.title))}</h3><span class="co">${esc(e.co)}</span></div>
        <p class="tl-meta">${esc(L(e.meta))}</p>
        <ul>${e.points.map((p) => `<li>${esc(L(p))}</li>`).join("")}</ul>
        ${chips(e.chips)}
      </li>`).join("");
  }

  function renderFilters() {
    document.getElementById("filters").innerHTML = Object.entries(CATS).map(([k, v]) => {
      const n = k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === k || p.also === k).length;
      return `<button class="filter${k === filter ? " active" : ""}" data-f="${k}" role="tab">${esc(L(v))} <small>${n}</small></button>`;
    }).join("");
  }

  function renderCards() {
    const list = PROJECTS.filter((p) => filter === "all" || p.cat === filter || p.also === filter)
      .sort((a, b) => (filter === "all" ? (b.star ? 1 : 0) - (a.star ? 1 : 0) : 0));
    document.getElementById("cards").innerHTML = list.map((p) => `
      <article class="card tilt" style="--c:${COLOR[p.cat]}">
        <a class="thumb" href="${GH + p.repo}" target="_blank" rel="noopener" aria-label="${esc(L(p.name))}">
          <span class="tag">${esc(L(CATS[p.cat]))}</span>
          ${p.img ? `<img src="assets/projects/${p.repo}.jpg" alt="${esc(L(p.name))}">` : ART[p.art]}
        </a>
        <div class="card-body">
          <h3><a href="${GH + p.repo}" target="_blank" rel="noopener">${esc(L(p.name))}</a></h3>
          <p>${esc(L(p.desc))}</p>
          <div class="metric">${esc(L(p.metric))}</div>
          ${chips(p.chips)}
          <div class="card-foot">
            <a href="${GH + p.repo}" target="_blank" rel="noopener" class="mono">${p.repo} →</a>
            ${p.star ? `<span class="star">★ ${lang === "fr" ? "à la une" : "featured"}</span>` : ""}
          </div>
        </div>
      </article>`).join("");
  }

  function renderSkills() {
    document.getElementById("skillgrid").innerHTML = SKILLS.map((g) => `
      <div class="skill reveal tilt" style="--c:${g.c}">
        <h4><span class="ico">${g.i}</span>${esc(L(g.t))}</h4>
        <div class="logos">${g.items.map((s) => { const i = icon(s); return `<span class="logo-chip">${i.svg}${esc(i.title)}</span>`; }).join("")}</div>
      </div>`).join("");
  }

  let yamlTimer;
  function renderYaml() {
    const html = `<span class="c"># ${lang === "fr" ? "profil" : "profile"}</span>\n` + YAML[lang].map(([k, v]) => {
      const val = v === "true" ? `<span class="b">${v}</span>` : `<span class="s">${esc(v)}</span>`;
      return `<span class="k">${k}</span>: ${val}`;
    }).join("\n");
    const pre = document.getElementById("yaml");
    clearTimeout(yamlTimer);
    if (still) { pre.innerHTML = html; return; }
    // type the YAML like a terminal: reveal the text character by character, keeping the HTML tags intact
    const tokens = html.match(/<[^>]+>|&[a-z]+;|[^<&]/g);
    let i = 0, out = "";
    const step = () => {
      let n = 0;
      while (i < tokens.length && n < 2) { out += tokens[i]; if (tokens[i][0] !== "<") n++; i++; }
      pre.innerHTML = out + '<span class="caret">▍</span>';
      if (i < tokens.length) yamlTimer = setTimeout(step, 18);
      else yamlTimer = setTimeout(renderYaml, 9000); // replay
    };
    const start = () => { out = ""; i = 0; step(); };
    if ("IntersectionObserver" in window) {
      const o = new IntersectionObserver((es) => { if (es[0].isIntersecting) { o.disconnect(); start(); } });
      o.observe(pre);
    } else start();
  }

  // typing effect
  const typed = document.getElementById("typed");
  let roleIdx = 0, charIdx = 0, deleting = false;
  function type() {
    const word = ROLES[lang][roleIdx];
    if (still) { typed.textContent = ROLES[lang].slice(0, 3).join(" · "); return; }
    charIdx += deleting ? -1 : 1;
    typed.textContent = word.slice(0, charIdx);
    let delay = deleting ? 35 : 75;
    if (!deleting && charIdx === word.length) { deleting = true; delay = 1600; }
    else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES[lang].length; delay = 300; }
    setTimeout(type, delay);
  }

  function setLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    const dict = lang === "fr" ? FR : EN;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    document.getElementById("lang").textContent = lang === "fr" ? "EN" : "FR";
    document.title = lang === "fr" ? "Asma Kerkouri · Ingénieure IA & Vision 3D" : "Asma Kerkouri · AI & 3D Vision Engineer";
    renderTimeline(); renderFilters(); renderCards(); renderSkills(); renderYaml(); observe();
    roleIdx = 0; charIdx = 0; deleting = false;
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  }

  // --------------------------------------------------------------- behaviour
  let io;
  function observe() {
    if (!("IntersectionObserver" in window) || still) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    io = io || new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
  }

  function counters() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      const end = +el.dataset.count;
      if (still) { el.textContent = end; return; }
      let v = 0;
      const step = () => { v += 1; el.textContent = v; if (v < end) setTimeout(step, 900 / end); };
      step();
    });
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".links a")];
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    document.getElementById("progress").style.width = `${(100 * h.scrollTop) / (h.scrollHeight - h.clientHeight)}%`;
    let current = "";
    for (const s of sections) if (s.getBoundingClientRect().top < 140) current = s.id;
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  }, { passive: true });

  document.getElementById("filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    filter = b.dataset.f;
    renderFilters(); renderCards();
  });
  document.getElementById("lang").addEventListener("click", () => setLang(lang === "fr" ? "en" : "fr"));
  const links = document.getElementById("links");
  document.getElementById("burger").addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });
  document.getElementById("year").textContent = new Date().getFullYear();
  if (new URLSearchParams(location.search).has("sent")) document.getElementById("sent").hidden = false;

  renderMarquee();
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
  setLang(saved || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en"));
  type();
  counters();

  // small point cloud in the computer-vision illustration
  const pc = document.querySelector(".svg-cv .pc");
  if (pc) {
    let dots = "";
    for (let i = 0; i < 160; i++) {
      const x = 20 + Math.random() * 280, y = 140 + Math.sin(x / 30) * 8 + Math.random() * 18;
      dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.6 + Math.random()).toFixed(2)}" opacity="${(0.3 + Math.random() * 0.6).toFixed(2)}"/>`;
    }
    pc.innerHTML = dots;
  }


  // ------------------------------------------------------ interactive motion
  const mouse = { x: -9999, y: -9999, inHero: false };
  const glow = document.getElementById("glow");
  const hero = document.querySelector(".hero");
  const visual = document.querySelector(".hero-visual");
  window.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    if (glow) glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    const r = hero.getBoundingClientRect();
    mouse.inHero = e.clientY >= r.top && e.clientY <= r.bottom;
    if (visual && mouse.inHero && !still) {
      const dx = (e.clientX / innerWidth - 0.5), dy = (e.clientY / innerHeight - 0.5);
      visual.style.transform = `perspective(900px) rotateY(${dx * 14}deg) rotateX(${-dy * 14}deg) translate(${dx * 14}px, ${dy * 14}px)`;
    }
  }, { passive: true });

  // 3D tilt on cards
  if (!still && matchMedia("(hover: hover)").matches) {
    document.addEventListener("pointermove", (e) => {
      const el = e.target.closest(".tilt");
      document.querySelectorAll(".tilt.tilting").forEach((t) => { if (t !== el) { t.classList.remove("tilting"); t.style.transform = ""; } });
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add("tilting");
      el.style.transform = `perspective(900px) rotateX(${-py * 7}deg) rotateY(${px * 9}deg) translateY(-4px)`;
      el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
      el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
    }, { passive: true });
    // magnetic buttons
    document.querySelectorAll(".btn").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
  }

  // staggered reveal inside grids
  document.querySelectorAll(".domains, .skills, .timeline, .stats").forEach((g) => {
    [...g.children].forEach((c, i) => { c.style.transitionDelay = `${Math.min(i, 6) * 90}ms`; });
  });

  // tech icons orbiting around the point cloud
  const orbit = document.getElementById("orbit");
  if (orbit) {
    const list = ["python", "pytorch", "opencv", "docker", "kubernetes", "AWS", "langchain", "githubactions"];
    orbit.innerHTML = list.map((s, k) => {
      const i = icon(s);
      return `<span class="orb" style="--a:${(360 / list.length) * k}deg" title="${esc(i.title)}"><span class="orb-in">${i.svg || esc(i.title)}</span></span>`;
    }).join("");
  }

  // ------------------------------------------------ neural-network background
  const net = document.getElementById("net");
  const nctx = net.getContext("2d");
  const nodes = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0006, vy: (Math.random() - 0.5) * 0.0006 }));
  function drawNet() {
    const w = net.clientWidth, h = net.clientHeight, dpr = window.devicePixelRatio || 1;
    if (net.width !== Math.round(w * dpr)) { net.width = w * dpr; net.height = h * dpr; }
    nctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nctx.clearRect(0, 0, w, h);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > 1) n.vx *= -1;
      if (n.y < 0 || n.y > 1) n.vy *= -1;
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = (nodes[i].x - nodes[j].x) * w, dy = (nodes[i].y - nodes[j].y) * h, d = Math.hypot(dx, dy);
        if (d < 140) {
          nctx.strokeStyle = `rgba(99, 140, 230, ${0.22 * (1 - d / 140)})`;
          nctx.beginPath(); nctx.moveTo(nodes[i].x * w, nodes[i].y * h); nctx.lineTo(nodes[j].x * w, nodes[j].y * h); nctx.stroke();
        }
      }
      nctx.fillStyle = "rgba(125, 211, 252, .6)";
      nctx.fillRect(nodes[i].x * w - 1, nodes[i].y * h - 1, 2, 2);
      if (mouse.inHero) {   // the network reacts to the cursor
        const r = net.getBoundingClientRect();
        const mx = mouse.x - r.left, my = mouse.y - r.top;
        const dx = nodes[i].x * w - mx, dy = nodes[i].y * h - my, d = Math.hypot(dx, dy);
        if (d < 190) {
          nctx.strokeStyle = `rgba(192, 132, 252, ${0.55 * (1 - d / 190)})`;
          nctx.beginPath(); nctx.moveTo(nodes[i].x * w, nodes[i].y * h); nctx.lineTo(mx, my); nctx.stroke();
          nodes[i].x += (dx / d) * 0.0009; nodes[i].y += (dy / d) * 0.0009;
        }
      }
    }
    if (!still) requestAnimationFrame(drawNet);
  }
  drawNet();

  // ---------------------------------- morphing 3D point cloud (hero visual)
  // 1 400 points move between 4 shapes: a scanned sphere with a defect, a torus, a cube and a double helix
  const canvas = document.getElementById("cloud");
  const ctx = canvas.getContext("2d");
  const N = 1400;
  const rnd = (a, b) => a + Math.random() * (b - a);
  // place the defect so that it faces the camera in the middle of the sphere phase
  let defectAt = [0.55, -0.45, 0.65];
  function aimDefect(a) {
    const fx = 0.35, fz = 0.75, fy = -0.45;   // desired direction after rotation (front, slightly up-right)
    const n = Math.hypot(fx, fy, fz);
    defectAt = [(fx * Math.cos(a) - fz * Math.sin(a)) / n, fy / n, (fx * Math.sin(a) + fz * Math.cos(a)) / n];
  }
  aimDefect(0.005 * 90);
  const SHAPES = [
    { name: "3D scan · sphere + defect", gen: () => {
      const u = rnd(-1, 1), th = rnd(0, 2 * Math.PI), s = Math.sqrt(1 - u * u);
      const x = s * Math.cos(th), y = u, z = s * Math.sin(th);
      const c = defectAt;
      const bump = Math.exp(-((x - c[0]) ** 2 + (y - c[1]) ** 2 + (z - c[2]) ** 2) / 0.05);
      const r = 1 + 0.22 * bump + rnd(-0.01, 0.01);
      return [x * r, y * r, z * r, bump > 0.25 ? 1 : 0]; } },
    { name: "mesh · torus", gen: () => {
      const a = rnd(0, 2 * Math.PI), b = rnd(0, 2 * Math.PI), R = 0.72, r = 0.3;
      return [(R + r * Math.cos(b)) * Math.cos(a), r * Math.sin(b), (R + r * Math.cos(b)) * Math.sin(a), 0]; } },
    { name: "voxel grid · cube", gen: () => {
      const f = Math.floor(rnd(0, 6)), u = rnd(-0.75, 0.75), v = rnd(-0.75, 0.75), k = f % 2 ? 0.75 : -0.75;
      const p = f < 2 ? [k, u, v] : f < 4 ? [u, k, v] : [u, v, k];
      return [...p, 0]; } },
    { name: "neural net · double helix", gen: () => {
      const t = rnd(-1, 1), strand = Math.random() < 0.5 ? 0 : Math.PI, a = t * 3 * Math.PI + strand;
      if (Math.random() < 0.18) { const s = rnd(-1, 1); return [0.5 * Math.cos(t * 3 * Math.PI) * s, t * 1.1, 0.5 * Math.sin(t * 3 * Math.PI) * s, 0]; }
      return [0.5 * Math.cos(a), t * 1.1, 0.5 * Math.sin(a), 0]; } },
  ];
  const targets = SHAPES.map((sh) => Array.from({ length: N }, sh.gen));
  const pts = targets[0].map((p) => [...p]);
  const shapeLabel = document.getElementById("shape");
  let shapeIdx = 0, from = targets[0], morphT = 1, angle = 0;
  function nextShape() {
    from = pts.map((p) => [...p]);
    shapeIdx = (shapeIdx + 1) % SHAPES.length;
    if (shapeIdx === 0) { aimDefect(angle + 0.005 * 200); targets[0] = Array.from({ length: N }, SHAPES[0].gen); }
    morphT = 0;
    if (shapeLabel) shapeLabel.textContent = `${SHAPES[shapeIdx].name} · ${N.toLocaleString("fr-FR")} pts`;
  }
  if (shapeLabel) shapeLabel.textContent = `${SHAPES[0].name} · ${N.toLocaleString("fr-FR")} pts`;
  if (!still) setInterval(nextShape, 5000);
  const bbox = document.querySelector(".bbox");
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
  function drawCloud() {
    const w = canvas.clientWidth, h = canvas.clientHeight, dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(w * dpr)) { canvas.width = w * dpr; canvas.height = h * dpr; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    if (morphT < 1) morphT = Math.min(1, morphT + 0.012);
    const e = ease(morphT), to = targets[shapeIdx];
    const R = Math.min(w, h) * 0.34, ca = Math.cos(angle), sa = Math.sin(angle), ct = Math.cos(0.4), st = Math.sin(0.4);
    let dx = 0, dy = 0, dz = 0, dn = 0;
    for (let i = 0; i < N; i++) {
      const p = pts[i], f = from[i], t = to[i];
      p[0] = f[0] + (t[0] - f[0]) * e; p[1] = f[1] + (t[1] - f[1]) * e; p[2] = f[2] + (t[2] - f[2]) * e;
      p[3] = morphT === 1 ? t[3] : 0;
      const x1 = p[0] * ca + p[2] * sa, z1 = -p[0] * sa + p[2] * ca;
      const y1 = p[1] * ct - z1 * st, z2 = p[1] * st + z1 * ct;
      const depth = (z2 + 1.2) / 2.4;
      ctx.fillStyle = p[3] ? `rgba(255, 99, 99, ${0.55 + 0.45 * depth})` : `hsla(${195 + 75 * depth}, 90%, 68%, ${0.12 + 0.75 * depth})`;
      const sz = p[3] ? 2.2 + depth * 1.6 : 1 + depth * 1.9;
      ctx.fillRect(w / 2 + x1 * R, h / 2 + y1 * R, sz, sz);
      if (p[3]) { dx += x1; dy += y1; dz += z2; dn++; }
    }
    // the detection box follows the defect while it faces the camera
    if (bbox) {
      const visible = dn > 0 && dz / dn > 0.15;
      bbox.style.opacity = visible ? 1 : 0;
      if (dn) { bbox.style.left = `${((w / 2 + (dx / dn) * R) / w) * 100}%`; bbox.style.top = `${((h / 2 + (dy / dn) * R) / h) * 100}%`; }
    }
    angle += 0.005;
    if (!still) requestAnimationFrame(drawCloud);
  }
  drawCloud();
})();
