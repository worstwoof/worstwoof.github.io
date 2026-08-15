const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageLabel = document.querySelector('[data-language-label]');

const translations = {
  zh: {
    pageTitle: '黄子豪 | Academic Homepage',
    metaDescription: '黄子豪，南开大学软件工程专业本科生，关注 AI Agent、计算机视觉与交互系统。',
    ogDescription: '南开大学软件工程本科生，研究 AI Agent、计算机视觉与交互系统。',
    navAria: '主要导航',
    skipLink: '跳到主要内容',
    nav: ['关于', '科研', '项目', '论文', '荣誉'],
    headings: {
      about: '关于我 <span>About</span>',
      education: '教育背景 <span>Education</span>',
      research: '科研经历 <span>Research</span>',
      publications: '论文发表 <span>Publications</span>',
      experience: '实习经历 <span>Experience</span>',
      projects: '项目经历 <span>Projects</span>',
      awards: '荣誉奖项 <span>Awards</span>',
    },
    profileAlt: '黄子豪照片',
    profileName: '黄子豪',
    profileAlternateName: 'Zander Huang',
    profileAffiliation: '南开大学 · 软件学院',
    personalLinks: '个人链接',
    sendEmail: '发送邮件',
    about: [
      '你好，我是<strong>黄子豪</strong>，南开大学软件工程专业本科生。我的兴趣集中在 AI Agent、计算机视觉与交互系统，希望把研究问题落实为可运行、可验证的工程系统。',
      '目前参与 ICSE 2027 Build-Bench Challenge 组织与基线建设，并在上海交通大学易冉副教授实验室开展科研实习。',
      '目前已有 <strong>2 篇论文被 UbiComp/ISWC 2026 录用</strong>，包括一篇 SEPH Workshop 论文和一篇 UbiComp Companion 论文。',
    ],
    education: {
      school: '南开大学 · 软件学院',
      degree: '软件工程专业 · 本科',
      details: ['平均学分绩点 3.791/4，专业排名 6.3%。', '获南开大学公能奖学金（5%）。'],
    },
    research: {
      buildTitle: 'Build-Bench Challenge：跨架构软件构建修复',
      buildTime: '2026.06 - 至今',
      buildParagraphs: [
        '基于 Build-Bench 与 EvidenT 两项系统级软件构建修复研究成果，参与 ICSE 2027 Competition Track 挑战赛组织、基准扩展与赛事建设。',
        '负责实现基于 MCP 工具调用的构建修复 Agent 迭代流程，覆盖日志分析、故障定位、文件修改、重新构建与结果反馈。',
      ],
      projectLink: '项目仓库',
      linearTitle: '《工程实践中的线性代数》教材与课程建设',
      linearTime: '2025.06 - 至今',
      linearParagraph: '与南开大学戴一冕教授、刘昊东共同编写教材，负责核心概念、定理证明与示例，并参与教学 PPT、LaTeX 作业规范、课程试卷与助教工作。',
    },
    publicationLinksLabel: '论文资料链接',
    publicationStatus: '已录用',
    experience: {
      sjtuTitle: '上海交通大学 · 易冉副教授实验室',
      sjtuTime: '目前',
      sjtuParagraph: '目前在上海交通大学易冉副教授实验室开展科研实习。',
      grokTitle: 'GrokCV · 戴一冕老师团队',
      grokParagraph: '曾在戴一冕老师的 GrokCV 团队开展科研实习。',
      instituteLogoTitle: '机构 Logo 待补充',
      instituteTitle: '山东省产业技术研究院',
      instituteParagraphs: [
        '参与工业视觉项目从方案设计到软件部署的完整流程，实践工业相机选型、镜头与光源搭配及打光策略。',
        '使用 Halcon 独立完成芯片表面缺陷检测与尺寸测量，获优秀学员证书并纳入机器视觉应用方向人才储备库。',
      ],
    },
    projects: {
      cyberParagraph: '基于 Godot 4 和 MediaPipe 的 3D 体感跑酷游戏。通过摄像头捕捉手部动作，经 UDP Socket 将移动、跳跃和攻击指令传输至游戏端。',
      techStack: '技术栈',
      projectLink: '项目仓库',
      palmTitle: '掌间流明',
      palmParagraph: '使用 YOLOv5 与 OpenCV 实时定位手掌中心，并在 Qt 界面中动态生成烟花粒子特效。展示视频发布后一周获得 1.5w+ 播放。',
      relatedRepo: '相关仓库',
      bilibili: 'Bilibili 视频',
    },
    awards: ['全国大学生电工杯数学建模竞赛一等奖', '美国大学生数学建模竞赛 H 奖', '安徽省奥林匹克信息竞赛二等奖', '中国高校计算机大赛 AIGC 创新赛华北赛区二等奖', '国家级大学生创新训练项目（获评市级项目）', '南开大学公能奖学金（5%）'],
    footerMain: '© <span data-year></span> 黄子豪 · Built for GitHub Pages',
    footerCredit: '模板基于 <a href="https://github.com/wzsyyh/luka-homepage-template" target="_blank" rel="noreferrer">Luka Homepage Template</a>，作者 Yuheng Yang。',
  },
  en: {
    pageTitle: 'Zander Huang | Academic Homepage',
    metaDescription: 'Zander Huang, an undergraduate software engineering student at Nankai University, focusing on AI agents, computer vision, and interactive systems.',
    ogDescription: 'Software engineering undergraduate at Nankai University working on AI agents, computer vision, and interactive systems.',
    navAria: 'Primary navigation',
    skipLink: 'Skip to main content',
    nav: ['About', 'Research', 'Projects', 'Publications', 'Awards'],
    headings: {
      about: 'About',
      education: 'Education',
      research: 'Research',
      publications: 'Publications',
      experience: 'Experience',
      projects: 'Projects',
      awards: 'Awards',
    },
    profileAlt: "Zander Huang's portrait",
    profileName: 'Zander Huang',
    profileAlternateName: '黄子豪',
    profileAffiliation: 'Nankai University · School of Software',
    personalLinks: 'Personal links',
    sendEmail: 'Send email',
    about: [
      'Hello, I am <strong>Zander Huang</strong>, an undergraduate student majoring in Software Engineering at Nankai University. My interests center on AI agents, computer vision, and interactive systems, with a focus on turning research questions into runnable, verifiable engineering systems.',
      "I currently contribute to the organization and baseline development of the ICSE 2027 Build-Bench Challenge and conduct research as an intern in Associate Professor Yi Ran's laboratory at Shanghai Jiao Tong University.",
      'I currently have <strong>2 papers accepted by UbiComp/ISWC 2026</strong>, including one SEPH Workshop paper and one UbiComp Companion paper.',
    ],
    education: {
      school: 'Nankai University · School of Software',
      degree: 'Software Engineering · Undergraduate',
      details: ['GPA 3.791/4.0, ranked in the top 6.3% of the major.', 'Nankai University Gongneng Scholarship (top 5%).'],
    },
    research: {
      buildTitle: 'Build-Bench Challenge: Cross-Architecture Software Build Repair',
      buildTime: '2026.06 - Present',
      buildParagraphs: [
        'Building on Build-Bench and EvidenT, two lines of research on system-level software build repair, I contribute to the organization, benchmark expansion, and infrastructure of the ICSE 2027 Competition Track.',
        'I implement an MCP-based build-repair Agent loop covering log analysis, fault localization, file edits, rebuilding, and result feedback.',
      ],
      projectLink: 'Project repository',
      linearTitle: 'Engineering Linear Algebra: Textbook and Course Development',
      linearTime: '2025.06 - Present',
      linearParagraph: 'Co-authoring a textbook with Professor Yimian Dai and Haodong Liu, covering core concepts, theorem proofs, and examples while contributing to lecture slides, LaTeX assignment standards, exams, and teaching assistance.',
    },
    publicationLinksLabel: 'Publication resources',
    publicationStatus: 'Accepted',
    experience: {
      sjtuTitle: "Shanghai Jiao Tong University · Associate Professor Yi Ran's Laboratory",
      sjtuTime: 'Present',
      sjtuParagraph: "Research intern in Associate Professor Yi Ran's laboratory at Shanghai Jiao Tong University.",
      grokTitle: "GrokCV · Professor Yimian Dai's Team",
      grokParagraph: 'Previously conducted a research internship with Professor Yimian Dai\'s GrokCV team.',
      instituteLogoTitle: 'Institution logo placeholder',
      instituteTitle: 'Shandong Institute of Industrial Technology',
      instituteParagraphs: [
        'Worked across the full industrial vision workflow from solution design to software deployment, including industrial camera selection, lens and lighting setup, and illumination strategies.',
        'Independently completed chip-surface defect detection and dimensional measurement with Halcon; received an outstanding trainee certificate and joined the institute\'s machine-vision talent pool.',
      ],
    },
    projects: {
      cyberParagraph: 'A 3D motion-controlled parkour game built with Godot 4 and MediaPipe. Hand movements are captured through the camera and transmitted to the game via UDP sockets as movement, jump, and attack commands.',
      techStack: 'Tech stack',
      projectLink: 'Project repository',
      palmTitle: 'Palm Lumen',
      palmParagraph: 'Uses YOLOv5 and OpenCV to locate the palm center in real time and generate particle fireworks in a Qt interface. The showcase video reached 15K+ views in its first week.',
      relatedRepo: 'Related repository',
      bilibili: 'Bilibili video',
    },
    awards: ['First Prize, National College Student Electrical Engineering Cup Mathematical Contest', 'H Award, Mathematical Contest in Modeling for Undergraduate Students', 'Second Prize, Anhui Olympiad in Informatics', 'Second Prize, AIGC Innovation Competition of the China Collegiate Computing Contest (North China)', 'National Undergraduate Innovation Training Program (recognized as a municipal-level project)', 'Nankai University Gongneng Scholarship (top 5%)'],
    footerMain: '© <span data-year></span> Zander Huang · Built for GitHub Pages',
    footerCredit: 'Based on <a href="https://github.com/wzsyyh/luka-homepage-template" target="_blank" rel="noreferrer">Luka Homepage Template</a> by Yuheng Yang.',
  },
};

function renderIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function currentTheme() {
  return root.dataset.theme === 'dark' ? 'dark' : 'light';
}

function currentLanguage() {
  return root.dataset.language === 'en' ? 'en' : 'zh';
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setHTML(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function setAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function setAttributes(selector, attribute, value) {
  document.querySelectorAll(selector).forEach((element) => element.setAttribute(attribute, value));
}

function setTexts(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function setHTMLs(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.innerHTML = values[index];
  });
}

function updateThemeButton(theme) {
  if (!themeToggle) return;
  const isDark = theme === 'dark';
  const labels = currentLanguage() === 'en'
    ? { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' }
    : { toLight: '切换到浅色模式', toDark: '切换到深色模式' };
  themeToggle.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
  themeToggle.setAttribute('aria-label', isDark ? labels.toLight : labels.toDark);
  themeToggle.setAttribute('title', isDark ? labels.toLight : labels.toDark);
  renderIcons();
}

function updateLanguageButton(language) {
  if (!languageToggle || !languageLabel) return;
  const isEnglish = language === 'en';
  const label = isEnglish ? 'Switch to Chinese' : '切换到英文';
  languageLabel.textContent = isEnglish ? '中' : 'EN';
  languageToggle.setAttribute('aria-label', label);
  languageToggle.setAttribute('title', label);
}

function applyLanguage(language) {
  const lang = language === 'en' ? 'en' : 'zh';
  const t = translations[lang];
  root.dataset.language = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  document.title = t.pageTitle;
  setAttribute('meta[name="description"]', 'content', t.metaDescription);
  setAttribute('meta[property="og:title"]', 'content', t.pageTitle);
  setAttribute('meta[property="og:description"]', 'content', t.ogDescription);
  setAttribute('.top-nav', 'aria-label', t.navAria);
  setText('.skip-link', t.skipLink);
  setTexts('.section-links a', t.nav);
  setHTML('#about-title', t.headings.about);
  setHTML('#education-title', t.headings.education);
  setHTML('#research-title', t.headings.research);
  setHTML('#publications-title', t.headings.publications);
  setHTML('#experience-title', t.headings.experience);
  setHTML('#projects-title', t.headings.projects);
  setHTML('#awards-title', t.headings.awards);
  setAttribute('.avatar-frame img', 'alt', t.profileAlt);
  setText('.profile-card h1', t.profileName);
  setText('.english-name', t.profileAlternateName);
  setText('.affiliation', t.profileAffiliation);
  setAttribute('.social-icons', 'aria-label', t.personalLinks);
  setAttribute('.social-icons a[href^="mailto:"]', 'title', t.sendEmail);
  setAttribute('.social-icons a[href^="mailto:"]', 'aria-label', t.sendEmail);
  setHTML('#about .prose p:nth-child(1)', t.about[0]);
  setHTML('#about .prose p:nth-child(2)', t.about[1]);
  setHTML('#about .prose p:nth-child(3)', t.about[2]);
  setText('#education .institution-content h3', t.education.school);
  setText('#education .entry-heading > div > p', t.education.degree);
  setTexts('#education .detail-list li', t.education.details);
  setText('#research .timeline-item:nth-child(1) .entry-heading h3', t.research.buildTitle);
  setText('#research .timeline-item:nth-child(1) .entry-heading time', t.research.buildTime);
  setTexts('#research .timeline-item:nth-child(1) > p', t.research.buildParagraphs);
  setHTML('#research .timeline-item:nth-child(1) .item-links a:nth-child(1)', `<i data-lucide="github" aria-hidden="true"></i> ${t.research.projectLink}`);
  setText('#research .timeline-item:nth-child(2) .entry-heading h3', t.research.linearTitle);
  setText('#research .timeline-item:nth-child(2) .entry-heading time', t.research.linearTime);
  setText('#research .timeline-item:nth-child(2) > p', t.research.linearParagraph);
  setTexts('#publications .publication-status', [t.publicationStatus, t.publicationStatus]);
  setAttributes('#publications .publication-links', 'aria-label', t.publicationLinksLabel);
  setAttribute('#experience .experience-entry:nth-child(1) .placeholder-logo', 'title', t.experience.sjtuTitle);
  setText('#experience .experience-entry:nth-child(1) .entry-heading h3', t.experience.sjtuTitle);
  setText('#experience .experience-entry:nth-child(1) .entry-heading time', t.experience.sjtuTime);
  setText('#experience .experience-entry:nth-child(1) .experience-copy > p', t.experience.sjtuParagraph);
  setText('#experience .experience-entry:nth-child(2) .entry-heading h3', t.experience.grokTitle);
  setText('#experience .experience-entry:nth-child(2) .experience-copy > p', t.experience.grokParagraph);
  setAttribute('#experience .experience-entry:nth-child(3) .placeholder-logo', 'title', t.experience.instituteLogoTitle);
  setText('#experience .experience-entry:nth-child(3) .entry-heading h3', t.experience.instituteTitle);
  setTexts('#experience .experience-entry:nth-child(3) .experience-copy > p', t.experience.instituteParagraphs);
  setText('#projects .project-item:nth-child(1) > div > p', t.projects.cyberParagraph);
  setHTML('#projects .project-item:nth-child(1) .item-links a', `<i data-lucide="github" aria-hidden="true"></i> ${t.projects.projectLink}`);
  setAttribute('#projects .project-item:nth-child(1) .tag-list', 'aria-label', t.projects.techStack);
  setText('#projects .project-item:nth-child(2) .entry-heading h3', t.projects.palmTitle);
  setText('#projects .project-item:nth-child(2) > div > p', t.projects.palmParagraph);
  setAttribute('#projects .project-item:nth-child(2) .tag-list', 'aria-label', t.projects.techStack);
  setHTMLs('#projects .project-item:nth-child(2) .item-links a', [
    `<i data-lucide="github" aria-hidden="true"></i> ${t.projects.relatedRepo}`,
    `<i data-lucide="video" aria-hidden="true"></i> ${t.projects.bilibili}`,
  ]);
  setTexts('#awards .awards-list strong', t.awards);
  setHTML('.site-footer > p:first-child', t.footerMain);
  setText('[data-year]', new Date().getFullYear());
  setHTML('.site-footer .template-credit', t.footerCredit);
  updateLanguageButton(lang);
  updateThemeButton(currentTheme());
}

themeToggle?.addEventListener('click', () => {
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeButton(nextTheme);
});

languageToggle?.addEventListener('click', () => {
  const nextLanguage = currentLanguage() === 'en' ? 'zh' : 'en';
  localStorage.setItem('language', nextLanguage);
  applyLanguage(nextLanguage);
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
applyLanguage(currentLanguage());

root.classList.add('reveal-ready');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.08 },
);

document.querySelectorAll('.section').forEach((section) => revealObserver.observe(section));

const navLinks = Array.from(document.querySelectorAll('.section-links a'));
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  },
  { rootMargin: '-18% 0px -68% 0px', threshold: 0 },
);

observedSections.forEach((section) => navObserver.observe(section));

window.addEventListener('load', () => {
  updateThemeButton(currentTheme());
  renderIcons();
});
