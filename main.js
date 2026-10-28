/* Portfolio Asma Kerkouri — content + bilingual FR / EN */
(() => {
  const GH = "https://github.com/asmakerkouri/";

  // ------------------------------------------------------------------ texts
  const EN = {
    "nav.about": "About", "nav.experience": "Experience", "nav.projects": "Projects", "nav.skills": "Skills",
    "nav.contact": "Contact", "cta.cv": "Resume", "cta.download": "Download my resume", "cta.projects": "See my projects",
    "hero.status": "Available now · permanent role · Paris area / anywhere in France",
    "hero.role": "AI Engineer · 3D Vision · Agents & LLMs",
    "hero.lead": "I build AI systems that work in the real world: 3D perception for inspection robots, LLM agents connected to tools, and models shipped to production with Docker and CI/CD.",
    "stats.repos": "open-source projects", "stats.xp": "industry and research experiences",
    "stats.masters": "Master's degrees in computer science", "stats.lang": "languages: FR · EN · TR",
    "about.title": "About",
    "about.p1": "AI engineer specialised in <strong>3D computer vision</strong>: point clouds, photogrammetry and defect detection. During my internship at <strong>Builder Assist</strong>, I built the perception chain of a construction-site inspection robot, from ToF camera acquisition to driving a Schneider Electric robot arm with ROS 2.",
    "about.p2": "At <strong>Octa Digital</strong>, I put <strong>LLMs and RAG</strong> into production behind FastAPI services, with automated tests and continuous deployment. Today I build <strong>AI agents</strong> that use tools reliably: guardrails, tracing and measured evaluation.",
    "focus.3d": "3D vision", "focus.3d.d": "ICP/NDT registration, stitching, defect detection, ToF photogrammetry",
    "focus.agents": "Agents & LLMs", "focus.agents.d": "MCP, tool calling, hybrid RAG, guardrails, voice chat",
    "focus.ops.d": "FastAPI, Docker, CI/CD, MLflow, DVC, AWS",
    "focus.robot": "Robotics", "focus.robot.d": "ROS 2, MoveIt 2, Gazebo, Schneider Electric robot arm",
    "exp.title": "Experience", "proj.title": "Projects",
    "proj.sub": "Public code, measured results and detailed READMEs on GitHub.",
    "proj.all": "All repositories on GitHub →", "skills.title": "Skills", "edu.title": "Education",
    "edu.m1": "MSc Computer Science: IoT Services and Systems (SSIO)", "edu.m1.d": "Embedded AI, distributed systems, networks",
    "edu.m2": "MSc Computer Science: Advanced Information Systems Engineering (ISIA)",
    "edu.m2.d": "Software architecture, business intelligence, big data",
    "contact.title": "Contact",
    "contact.lead": "A role in AI, computer vision or MLOps? Write to me, I answer quickly.",
    "contact.where": "location", "contact.loc": "Paris area · open to relocation in France",
    "form.name": "Name", "form.email": "Email", "form.company": "Company (optional)", "form.message": "Message",
    "form.send": "Send", "form.sent": "Thank you, your message has been sent.", "footer.top": "Back to top ↑",
  };
  const FR = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => { FR[el.dataset.i18n] = el.innerHTML; });

  const EXPERIENCE = [
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

  const CATS = { all: ["Tous", "All"], "3d": ["Vision 3D", "3D vision"], agent: ["Agents IA & LLM", "AI agents & LLMs"],
                 ops: ["MLOps & DevOps", "MLOps & DevOps"], data: ["Data & IoT", "Data & IoT"] };
  const TAG = { "3d": "t-3d", agent: "t-agent", ops: "t-ops", data: "t-data" };

  const PROJECTS = [
    { repo: "inspection-agent-3d", cat: "3d", also: "agent", star: true,
      name: ["Agent d'inspection 3D", "3D inspection agent"],
      desc: ["Un agent IA pilote des outils de nuages de points : recalage, détection et mesure des défauts, contrôle des tolérances et rapport de réception du mur.",
             "An AI agent drives point-cloud tools: registration, defect detection and measurement, tolerance check and hand-over report."],
      metric: ["47/47 défauts trouvés · 14/14 décisions correctes", "47/47 defects found · 14/14 correct decisions"],
      chips: ["Open3D", "Tool calling", "DBSCAN", "ICP"] },
    { repo: "point-cloud-defect-inspection", cat: "3d", star: true,
      name: ["Inspection 3D de surfaces", "3D surface inspection"],
      desc: ["Recalage FPFH + RANSAC + ICP sur la géométrie de référence, carte d'écarts signée, détection et classification des bosses, creux et fissures.",
             "FPFH + RANSAC + ICP registration onto the reference geometry, signed deviation map, detection and classification of bumps, hollows and cracks."],
      metric: ["Recalage à 2,7 mm d'erreur · API FastAPI", "2.7 mm registration error · FastAPI service"],
      chips: ["Open3D", "RANSAC", "ICP", "FastAPI", "Docker"] },
    { repo: "pose-estimation-analytics", cat: "3d", star: true,
      name: ["Détection de squelette humain", "Human pose estimation"],
      desc: ["17 points du squelette avec YOLO11-pose, angles articulaires, reconnaissance de posture et compteur de répétitions, servis par une API.",
             "17 skeleton keypoints with YOLO11-pose, joint angles, posture recognition and a repetition counter, served by an API."],
      metric: ["Export ONNX : inférence 30 % plus rapide sur CPU", "ONNX export: 30 % faster CPU inference"],
      chips: ["YOLO11-pose", "ONNX", "FastAPI", "Docker"] },
    { repo: "ros2-slam-turtlebot3", cat: "3d",
      name: ["Cartographie SLAM sous ROS 2", "SLAM mapping with ROS 2"],
      desc: ["Exploration autonome et cartographie en temps réel dans Gazebo avec slam_toolbox, exécutée sans écran dans Docker.",
             "Autonomous exploration and real-time mapping in Gazebo with slam_toolbox, running headless in Docker."],
      metric: ["ROS 2 Jazzy · simulation reproductible", "ROS 2 Jazzy · reproducible simulation"],
      chips: ["ROS 2", "SLAM", "Gazebo", "Docker"] },
    { repo: "mcp-agent-guardrails", cat: "agent", star: true,
      name: ["Agent MCP avec garde-fous", "MCP agent with guardrails"],
      desc: ["Agent connecté à des outils par le Model Context Protocol : politique d'accès, validation humaine, masquage des secrets, détection d'injection de prompt, traces.",
             "Agent using tools through the Model Context Protocol: access policy, human approval, secret redaction, prompt-injection flagging, tracing."],
      metric: ["38/38 décisions correctes en red-team", "38/38 correct red-team decisions"],
      chips: ["MCP", "LLM", "Security", "Tracing"] },
    { repo: "text-to-sql-agent", cat: "agent", star: true,
      name: ["Agent Text-to-SQL", "Text-to-SQL agent"],
      desc: ["Une question en langage naturel devient une requête SQL en lecture seule, auto-corrigée à partir du schéma, puis un graphique.",
             "A plain-English question becomes a read-only SQL query, self-corrected from the schema, then a chart."],
      metric: ["105/106 erreurs SQL de LLM réparées · 20/20 attaques bloquées", "105/106 LLM SQL errors repaired · 20/20 attacks blocked"],
      chips: ["LLM", "sqlglot", "FastAPI", "Guardrails"] },
    { repo: "voice-agent-assistant", cat: "agent",
      name: ["Assistant vocal (voice chat)", "Voice assistant (voice chat)"],
      desc: ["Assistant mains libres pour techniciens de chantier : Whisper, appel d'outils, synthèse vocale Piper, 100 % hors ligne sur CPU.",
             "Hands-free assistant for site technicians: Whisper, tool calling, Piper speech synthesis, fully offline on CPU."],
      metric: ["480 ms par échange · 8 % d'erreur de mots", "480 ms per turn · 8 % word error rate"],
      chips: ["Whisper", "Piper", "Silero VAD", "FastAPI"] },
    { repo: "arxiv-rag-multiagent", cat: "agent",
      name: ["Assistant de recherche RAG multi-agents", "Multi-agent RAG research assistant"],
      desc: ["Graphe d'agents LangGraph : recherche arXiv, recherche hybride BM25 + vecteurs fusionnée par RRF, réponses citées via AWS Bedrock.",
             "LangGraph agent graph: arXiv search, hybrid BM25 + vector retrieval fused with RRF, cited answers through AWS Bedrock."],
      metric: ["RAG hybride · évaluation BEIR SciFact", "Hybrid RAG · BEIR SciFact evaluation"],
      chips: ["LangGraph", "RAG", "AWS Bedrock", "Gradio"] },
    { repo: "mlops-yolo-fastapi", cat: "ops", star: true,
      name: ["Pipeline MLOps de détection d'objets", "Object-detection MLOps pipeline"],
      desc: ["Entraînement YOLO11 reproductible avec DVC et MLflow, API FastAPI instrumentée, image Docker et CI/CD jusqu'à GHCR et AWS ECR.",
             "Reproducible YOLO11 training with DVC and MLflow, instrumented FastAPI service, Docker image and CI/CD to GHCR and AWS ECR."],
      metric: ["Lint · tests · build · scan Trivy · publication", "Lint · tests · build · Trivy scan · publish"],
      chips: ["DVC", "MLflow", "FastAPI", "GitHub Actions"] },
    { repo: "k8s-terraform-ml-platform", cat: "ops",
      name: ["Plateforme ML sur Kubernetes", "ML platform on Kubernetes"],
      desc: ["Infrastructure AWS (VPC, EKS, ECR) en Terraform, chart Helm avec autoscaling, monitoring Prometheus / Grafana, exécutable en local sur kind.",
             "AWS infrastructure (VPC, EKS, ECR) in Terraform, Helm chart with autoscaling, Prometheus / Grafana monitoring, runnable locally on kind."],
      metric: ["Infrastructure as code · CI de validation", "Infrastructure as code · validation CI"],
      chips: ["Terraform", "Kubernetes", "Helm", "AWS"] },
    { repo: "gitops-argocd-ml", cat: "ops",
      name: ["Déploiement GitOps avec Argo CD", "GitOps deployment with Argo CD"],
      desc: ["App of apps, environnements dev / prod par ApplicationSet, promotion par pull request, Sealed Secrets.",
             "App of apps, dev / prod environments with an ApplicationSet, promotion by pull request, Sealed Secrets."],
      metric: ["Déploiement déclaratif piloté par Git", "Declarative, Git-driven deployment"],
      chips: ["Argo CD", "GitOps", "Kubernetes"] },
    { repo: "spark-taxi-lakehouse", cat: "data", star: true,
      name: ["Lakehouse Big Data PySpark", "PySpark big-data lakehouse"],
      desc: ["Architecture médaillon sur 5 millions de trajets : contrôle qualité avec quarantaine, Parquet partitionné, Spark SQL, MLlib, DAG Airflow.",
             "Medallion architecture on 5 million trips: data-quality quarantine, partitioned Parquet, Spark SQL, MLlib, Airflow DAG."],
      metric: ["5 M lignes · modèle MLlib R² 0,84", "5 M rows · MLlib model R² 0.84"],
      chips: ["PySpark", "MLlib", "Airflow", "Parquet"] },
    { repo: "r-survival-analysis", cat: "data",
      name: ["Analyse de survie en R", "Survival analysis in R"],
      desc: ["Kaplan-Meier, tests du log-rank et modèle de Cox sur une cohorte publique de cancer du poumon, rapport R Markdown.",
             "Kaplan-Meier, log-rank tests and Cox model on a public lung-cancer cohort, R Markdown report."],
      metric: ["Statistiques médicales · rapport reproductible", "Medical statistics · reproducible report"],
      chips: ["R", "survival", "R Markdown"] },
    { repo: "edge-ai-iot-streaming", cat: "data",
      name: ["Edge AI et streaming IoT", "Edge AI & IoT streaming"],
      desc: ["Prévisions en flux sur MQTT avec XGBoost, tableau de bord Grafana et modèle TensorFlow Lite pour Raspberry Pi.",
             "Streaming forecasts over MQTT with XGBoost, Grafana dashboard and a TensorFlow Lite model for Raspberry Pi."],
      metric: ["Modèle TFLite de 7 Ko", "7 KB TFLite model"],
      chips: ["MQTT", "XGBoost", "TFLite", "Grafana"] },
  ];

  const SKILLS = [
    [["Vision 2D/3D", "2D/3D vision"], "Open3D, PCL, OpenCV, COLMAP, MeshLab, ICP/NDT, photogrammétrie|photogrammetry, Luxonis OAK ToF"],
    [["Deep learning", "Deep learning"], "PyTorch, TensorFlow/Keras, YOLO11, YOLO11-pose, ResNet, SAM, ONNX Runtime, CUDA/cuDNN"],
    [["LLM et agents IA", "LLMs & AI agents"], "LangGraph, LangChain, MCP, tool calling, RAG, AWS Bedrock, voice chat, prompt engineering"],
    [["Mise en production", "Production"], "FastAPI, Flask, Docker, Git, GitHub Actions, GitLab CI, MLflow, DVC, PyTest, Linux"],
    [["Cloud et infrastructure", "Cloud & infrastructure"], "AWS EC2, AWS S3, AWS ECR, API Gateway, AWS Bedrock, Kubernetes, Terraform"],
    [["Robotique", "Robotics"], "ROS 2, MoveIt 2, Gazebo, RViz, RoboDK, SLAM"],
    [["Données", "Data"], "Apache Spark, Airflow, Pandas, Scikit-learn, XGBoost, SQL, MongoDB, Elasticsearch"],
    [["Langages", "Languages"], "Python, C++, Java, JavaScript, R, SQL, MATLAB"],
  ];

  // ----------------------------------------------------------------- render
  let lang = "fr";
  let filter = "all";
  const L = (pair) => (Array.isArray(pair) ? pair[lang === "fr" ? 0 : 1] : pair);
  const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
  const chips = (list) => `<div class="chips">${list.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>`;

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
      <article class="card reveal in">
        <span class="tag ${TAG[p.cat]}">${esc(L(CATS[p.cat]))}</span>
        <h3><a href="${GH + p.repo}" target="_blank" rel="noopener">${esc(L(p.name))}</a></h3>
        <p>${esc(L(p.desc))}</p>
        <div class="metric">${esc(L(p.metric))}</div>
        ${chips(p.chips)}
        <div class="card-foot">
          <a href="${GH + p.repo}" target="_blank" rel="noopener" class="mono">${p.repo} →</a>
          ${p.star ? `<span class="star">★ ${lang === "fr" ? "à la une" : "featured"}</span>` : ""}
        </div>
      </article>`).join("");
  }

  function renderSkills() {
    document.getElementById("skillgrid").innerHTML = SKILLS.map(([t, items]) => {
      const list = items.split(", ").map((s) => (s.includes("|") ? s.split("|")[lang === "fr" ? 0 : 1] : s));
      return `<div class="skill reveal"><h4>${esc(L(t))}</h4>${chips(list)}</div>`;
    }).join("");
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
    renderTimeline(); renderFilters(); renderCards(); renderSkills(); observe();
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
  }

  // ------------------------------------------------------------- behaviour
  let io;
  function observe() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    io = io || new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
  }

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

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
  setLang(saved || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en"));

  // ------------------------------------------- rotating point cloud (hero)
  const canvas = document.getElementById("cloud");
  const ctx = canvas.getContext("2d");
  const pts = [];
  for (let i = 0; i < 900; i++) {           // a sphere of points, slightly noisy, with a "defect" bump
    const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    let x = s * Math.cos(th), y = u, z = s * Math.sin(th);
    const bump = Math.exp(-((x - 0.6) ** 2 + (y - 0.4) ** 2 + (z - 0.6) ** 2) / 0.05);
    const r = 1 + 0.12 * bump + (Math.random() - 0.5) * 0.02;
    pts.push([x * r, y * r, z * r, bump]);
  }
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let angle = 0;
  function draw() {
    const w = canvas.clientWidth, h = canvas.clientHeight, dpr = window.devicePixelRatio || 1;
    if (canvas.width !== w * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const R = Math.min(w, h) * 0.46, ca = Math.cos(angle), sa = Math.sin(angle), tilt = 0.35;
    for (const [x, y, z, b] of pts) {
      const x1 = x * ca + z * sa, z1 = -x * sa + z * ca;
      const y1 = y * Math.cos(tilt) - z1 * Math.sin(tilt), z2 = y * Math.sin(tilt) + z1 * Math.cos(tilt);
      const depth = (z2 + 1.2) / 2.4;
      ctx.fillStyle = b > 0.3 ? `rgba(229, 83, 75, ${0.35 + 0.6 * depth})` : `rgba(95, 180, 255, ${0.12 + 0.6 * depth})`;
      ctx.fillRect(w / 2 + x1 * R, h / 2 + y1 * R, 1.3 + depth * 1.6, 1.3 + depth * 1.6);
    }
    angle += 0.004;
    if (!still) requestAnimationFrame(draw);
  }
  draw();
})();
