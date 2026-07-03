gsap.registerPlugin(ScrollTrigger);

/* ---------- Mobile Nav Toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

navLinks.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

/* ---------- Connect Modal ---------- */
const connectBtn = document.getElementById('connectBtn');
const connectModal = document.getElementById('connectModal');

if (connectBtn && connectModal) {
  const connectModalOverlay = document.getElementById('connectModalOverlay');
  const connectModalClose = document.getElementById('connectModalClose');

  const openConnectModal = () => {
    connectModal.classList.add('is-open');
    connectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeConnectModal = () => {
    connectModal.classList.remove('is-open');
    connectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  connectBtn.addEventListener('click', openConnectModal);
  connectModalOverlay.addEventListener('click', closeConnectModal);
  connectModalClose.addEventListener('click', closeConnectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && connectModal.classList.contains('is-open')) {
      closeConnectModal();
    }
  });
}

/* ---------- Intro Timeline: Navbar + Hero ---------- */
const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
introTl.from('.navbar', { y: -80, opacity: 0, duration: 0.8 });

if (document.querySelector('.hero-greeting')) {
  gsap.set(['.hero-greeting', '.hero-role', '.hero-subtext', '.hero-buttons'], { y: 24 });

  introTl
    .to('.hero-greeting', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
    .to('.hero-role', { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
    .to('.hero-subtext', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .to('.scroll-cue', { opacity: 1, duration: 0.6 }, '-=0.3');
}

if (document.querySelector('.profile-card')) {
  gsap.set('.profile-card', { y: 24, opacity: 0 });
  introTl.to('.profile-card', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3');
}

if (document.querySelector('.ai-lab-hero-inner')) {
  gsap.set('.ai-lab-hero-inner', { y: 24, opacity: 0 });
  introTl.to('.ai-lab-hero-inner', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3');
}

/* ---------- Ambient Orb Drift ---------- */
gsap.to('.orb-blue', {
  x: -40,
  y: 30,
  duration: 9,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
});

gsap.to('.orb-teal', {
  x: 30,
  y: -40,
  duration: 11,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
});

/* ---------- Bento Grid Scroll Reveal ---------- */
if (document.querySelector('.value-section')) {
  gsap.set('.value-section .section-label, .value-section .section-heading', { y: 24, opacity: 0 });
  gsap.set('.bento-card', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.value-section',
      start: 'top 75%',
    },
  })
    .to('.value-section .section-label', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    .to('.value-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('.bento-card', { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
}

/* ---------- Impact Stats Scroll Reveal + Count Up ---------- */
if (document.querySelector('.impact-section')) {
  gsap.set('.impact-section .section-label, .impact-section .section-heading', { y: 24, opacity: 0 });
  gsap.set('.impact-stat', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.impact-section',
      start: 'top 75%',
      once: true,
    },
  })
    .to('.impact-section .section-label', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    .to('.impact-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('.impact-stat', { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, '-=0.4')
    .add(() => {
      document.querySelectorAll('.counter').forEach((el) => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toLocaleString('en-US') + suffix;
          },
        });
      });
    }, '-=0.3');
}

/* ---------- Approach Scroll Reveal ---------- */
if (document.querySelector('.approach-section')) {
  gsap.set('.approach-section .section-heading', { y: 24, opacity: 0 });
  gsap.set('.approach-card', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.approach-section',
      start: 'top 75%',
    },
  })
    .to('.approach-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
    .to('.approach-card', { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, '-=0.4');
}

/* ---------- Explore My Work Scroll Reveal ---------- */
if (document.querySelector('.explore-section')) {
  gsap.set('.explore-section .section-heading, .explore-section .section-subtext', { y: 24, opacity: 0 });
  gsap.set('.explore-card', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.explore-section',
      start: 'top 75%',
    },
  })
    .to('.explore-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
    .to('.explore-section .section-subtext', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to('.explore-card', { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.3');
}

/* ---------- About: Philosophy Scroll Reveal ---------- */
if (document.querySelector('.philosophy-section')) {
  gsap.set('.philosophy-section .section-badge, .philosophy-section .section-heading, .philosophy-intro', { y: 24, opacity: 0 });
  gsap.set('.philosophy-mini-card, .philosophy-wide-card, .snapshot-card', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.philosophy-section',
      start: 'top 75%',
    },
  })
    .to('.philosophy-section .section-badge', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    .to('.philosophy-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('.philosophy-intro', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to('.philosophy-mini-card', { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
    .to('.philosophy-wide-card', { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
    .to('.snapshot-card', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.5');
}

/* ---------- About: Education Scroll Reveal ---------- */
if (document.querySelector('.education-section')) {
  gsap.set('.education-section .section-heading', { y: 24, opacity: 0 });
  gsap.set('.education-card', { y: 40, opacity: 0 });
  gsap.set('.education-item', { y: 20, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.education-section',
      start: 'top 75%',
    },
  })
    .to('.education-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
    .to('.education-card', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('.education-item', { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.3');
}

/* ---------- About: Certifications Scroll Reveal ---------- */
if (document.querySelector('.certifications-section')) {
  gsap.set('.certifications-section .section-heading', { y: 24, opacity: 0 });
  gsap.set('.certifications-grid .bento-card', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.certifications-section',
      start: 'top 75%',
    },
  })
    .to('.certifications-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
    .to('.certifications-grid .bento-card', { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.4');
}

/* ---------- About: Domains Scroll Reveal ---------- */
if (document.querySelector('.domains-section')) {
  gsap.set('.domains-section .section-label, .domains-section .section-heading', { y: 24, opacity: 0 });
  gsap.set('.domains-grid .bento-card', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.domains-section',
      start: 'top 75%',
    },
  })
    .to('.domains-section .section-label', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    .to('.domains-section .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('.domains-grid .bento-card', { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, '-=0.4');
}

/* ---------- Experience Timeline Scroll Reveal ---------- */
if (document.querySelector('.timeline-section')) {
  gsap.set('.timeline-header .section-badge, .timeline-header .section-heading, .timeline-intro', { y: 24, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.timeline-section',
      start: 'top 75%',
    },
  })
    .to('.timeline-header .section-badge', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    .to('.timeline-header .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('.timeline-intro', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4');

  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    const card = item.querySelector('.timeline-card');
    const dot = item.querySelector('.timeline-dot');
    const fromX = i % 2 === 0 ? -30 : 30;

    gsap.set(card, { opacity: 0, x: fromX });
    gsap.set(dot, { opacity: 0, scale: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 82%',
      },
    })
      .to(dot, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' })
      .to(card, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2');
  });

  gsap.set('.timeline-summary', { y: 20, opacity: 0 });
  gsap.to('.timeline-summary', {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.timeline-summary',
      start: 'top 88%',
    },
  });
}

/* ---------- Case Studies: Data + Modal ---------- */
if (document.querySelector('.case-grid')) {
  const caseStudies = {
    'capacity-tracking': {
      title: 'Analyst Capacity Tracking Dashboard',
      shortDesc: 'A Power BI solution to monitor analyst capacity, workload distribution, and utilization for proactive resource planning.',
      teamSize: 'Built for a team of 10 analysts',
      tags: ['Power BI', 'DAX', 'Excel'],
      tools: ['Power BI', 'Excel'],
      liveUrl: '#',
      problem: 'Limited visibility into analyst capacity and workload distribution resulted in reactive planning, uneven workload allocation, and SLA breaches.',
      solution: 'Designed a centralized Power BI dashboard that monitored analyst availability, workload distribution, utilization, and SLA trends to enable proactive resource planning.',
      recommendations: [
        'Standardized workload allocation',
        'Balanced analyst utilization',
        'Planned for demand peaks',
        'Monitored utilization & SLA trends',
        'Embedded capacity planning',
      ],
      impactPoints: [
        'Improved resource planning',
        'Balanced workload distribution',
        'Increased operational visibility',
        'Reduced manual planning effort',
      ],
      kpis: [
        { label: 'Overall Utilization', value: '101.3%', icon: 'users' },
        { label: 'Pre-launch Workload', value: '~13.1K', icon: 'user' },
        { label: 'Post-launch Workload', value: '6.8K-8.2K', icon: 'users' },
        { label: 'SLA Breach Rate', value: '6.27%', icon: 'shield' },
        { label: 'SLA Breach Hours', value: '~0.6K', icon: 'clock' },
      ],
    },
    'tool-adoption': {
      title: 'Global Tool Adoption & Training Dashboard',
      shortDesc: 'A Tableau solution to track tool rollout, training adoption, and post-implementation impact across global markets.',
      teamSize: 'Rolled out across 6+ global markets',
      tags: ['Tableau'],
      tools: ['Tableau'],
      liveUrl: '#',
      problem: 'No unified view existed to track rollout progress, training effectiveness, or business impact across markets.',
      solution: 'Built an end-to-end Tableau tracking solution monitoring rollout progress, training execution, adoption levels, and post-launch impact.',
      recommendations: [
        'Accelerate training completion in high-pending markets',
        'Strengthen Team Lead enablement',
        'Target low-CSAT markets like Germany and UAE with focused interventions',
        'Convert efficiency gains into customer experience gains through resolution quality focus',
      ],
      impactPoints: [
        'Identified adoption gaps across markets',
        'Improved training quality tracking',
        'Reduced call handling time ~12% post-launch',
        'Centralized rollout & CSAT visibility for stakeholders',
      ],
      kpis: [
        { label: 'Training Completion', value: '49%', icon: 'check' },
        { label: 'Employees Trained', value: '172,771', icon: 'users' },
        { label: 'Pending Training', value: '93,171', icon: 'user' },
        { label: 'Call Handling Time', value: '↓12%', icon: 'clock' },
        { label: 'External CSAT', value: '3.53-3.55', icon: 'star' },
      ],
    },
    'csat-learning': {
      title: 'CSAT & Learning Effectiveness Analysis',
      shortDesc: 'A root-cause analysis framework, delivered as an interactive Claude-built artifact, to diagnose CSAT drivers across global markets.',
      teamSize: 'Delivered as an interactive Claude artifact',
      tags: ['Claude', 'Kirkpatrick Framework'],
      tools: ['Claude'],
      liveUrl: '#',
      problem: 'Learner satisfaction was declining across markets but the root cause was unclear, with feedback siloed across markets, programmes, and delivery formats.',
      solution: 'Applied the Kirkpatrick evaluation methodology to build a structured root cause analysis framework, aggregating multi-market feedback segmented by programme type, delivery format, and market into an interactive Claude-built dashboard artifact for Director and VP review.',
      recommendations: [
        'Standardize delivery practices across markets',
        'Redesign consistently underperforming programme types',
        'Introduce targeted trainer development interventions',
        'Establish a minimum feedback volume threshold per market',
        'Create a shared CSAT baseline for fair benchmarking',
      ],
      impactPoints: [
        'Shifted the conversation from "scores are down" to why and where',
        'Identified delivery consistency as the core driver',
        'Findings presented directly to Directors & VPs',
        'Enabled fair, market-level CSAT benchmarking',
      ],
      kpis: [
        { label: 'Markets Analyzed', value: '14', icon: 'users' },
        { label: 'Evaluation Framework', value: 'Kirkpatrick L1-L4', icon: 'target' },
        { label: 'Root Cause', value: 'Delivery Consistency', icon: 'alert' },
        { label: 'Presented To', value: 'Directors & VPs', icon: 'star' },
      ],
    },
    'marketing-performance': {
      title: 'Marketing Performance Analysis',
      shortDesc: 'A Power BI view unifying multi-channel marketing data for a small business to uncover performance gaps and improve budget allocation.',
      teamSize: 'Analyzed across 4+ marketing channels',
      tags: ['Power BI', 'Excel'],
      tools: ['Power BI', 'Excel'],
      liveUrl: '#',
      problem: 'Marketing performance data was spread across channels, making it difficult to compare effectiveness, track ROI, and identify underperforming campaigns.',
      solution: 'Built a unified Power BI view of marketing performance across channels, using Excel for data prep, to identify inefficiencies and enable better budget allocation.',
      recommendations: [
        'Reallocate budget toward high-performing channels like Instagram and Google',
        'Optimize or reduce spend on underperforming campaigns',
        'Strengthen conversion efficiency tracking',
      ],
      impactPoints: [
        'Unified channel effectiveness into one view',
        'Improved overall ROI',
        'Guided budget reallocation to top channels',
        'Flagged high-spend, low-return campaigns',
      ],
      kpis: [
        { label: 'Top Channel', value: 'Instagram', icon: 'star' },
        { label: 'Secondary Channel', value: 'Google', icon: 'target' },
        { label: 'Lower Volume Channels', value: 'Walk-in & WhatsApp', icon: 'users' },
        { label: 'Spend vs Revenue', value: 'Not Correlated', icon: 'alert' },
      ],
    },
    'ai-website-dev': {
      title: 'AI-Assisted Website Development',
      shortDesc: 'A modern portfolio platform combining storytelling, project case studies, and technical demonstrations into a single experience.',
      teamSize: 'Vibe-coded and published in 2 days using Claude Code',
      tags: ['Claude Code', 'VS Code', 'Vercel'],
      tools: ['Claude', 'VS Code', 'Vercel'],
      liveUrl: 'index.html',
      githubUrl: 'https://github.com/karansthinkinglab/-Karan-Portfolio',
      problem: 'Needed a single platform to present storytelling, in-depth case studies, and technical demonstrations without juggling multiple disconnected tools or slow development cycles.',
      solution: 'This very portfolio is the project: built and shipped end-to-end, from information architecture to interactive case study modals, using Claude Code inside VS Code for rapid AI-assisted development, vibe-coded and published in just 2 days.',
      recommendations: [
        'Iterate directly in natural language with Claude Code',
        'Centralize case study data in one source of truth',
        'Keep motion and design consistent across pages',
        'Review and refine AI-generated code inside VS Code',
      ],
      impactPoints: [
        'Shipped a production-ready site in just 2 days',
        'One consistent experience for storytelling, case studies & demos',
        'Fully vibe-coded from prompt to production',
        'Easy to extend with new case studies',
      ],
      kpis: [
        { label: 'Build Tool', value: 'Claude Code', icon: 'rocket' },
        { label: 'Build Approach', value: 'Vibe-Coded', icon: 'target' },
        { label: 'Pages Built', value: '5', icon: 'star' },
        { label: 'Time to Publish', value: '2 Days', icon: 'clock' },
      ],
    },
  };

  const modalOverlay = document.getElementById('caseModalOverlay');
  const modalCard = document.getElementById('caseModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const icons = {
    bulb: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.6.55 1 1.35 1 2.2V16h6v-1.3c0-.85.4-1.65 1-2.2A6 6 0 0 0 12 2z"></path></svg>',
    target: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="4"></circle><circle cx="12" cy="12" r="0.5" fill="currentColor" stroke="none"></circle></svg>',
    alert: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"></path><circle cx="12" cy="12" r="9"></circle></svg>',
    star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8-5.1-4.7 6.9-.8L12 2z"></path></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="8 12 11 15 16 9"></polyline></svg>',
    rocket: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c3 2 5 6 5 10a13 13 0 0 1-5 10 13 13 0 0 1-5-10c0-4 2-8 5-10z"></path><circle cx="12" cy="10" r="2"></circle><path d="M7 16c-2 1-3 3-3 5 2 0 4-1 5-3M17 16c2 1 3 3 3 5-2 0-4-1-5-3"></path></svg>',
    users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"></circle><path d="M2 20c0-3 3-5 7-5s7 2 7 5"></path><circle cx="17" cy="9" r="2.5"></circle><path d="M16 13.2c2.4.5 4 2 4 4.3"></path></svg>',
    user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"></path></svg>',
    shield: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 5.5v5c0 5 3.2 8.7 7.5 10 4.3-1.3 7.5-5 7.5-10v-5L12 3z"></path></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3.5 2"></path></svg>',
    external: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4 10 14M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"></path></svg>',
    github: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"></path></svg>',
  };

  const toolIcons = {
    'Power BI': '<img src="assets/poerbi%20icon.png" alt="Power BI" title="Power BI" loading="lazy">',
    'Excel': '<img src="assets/Excel%20icon.png" alt="Excel" title="Excel" loading="lazy">',
    'Tableau': '<img src="assets/Tableau%20icon.png" alt="Tableau" title="Tableau" loading="lazy">',
    'DAX': '<svg width="26" height="26" viewBox="0 0 24 24" title="DAX"><text x="12" y="16.5" text-anchor="middle" font-size="10.5" font-weight="700" font-family="Poppins, Arial, sans-serif" fill="currentColor">fx</text></svg>',
    'Claude': '<img src="assets/Claude%20icon.png" alt="Claude" title="Claude" loading="lazy">',
    'VS Code': '<img src="assets/Visual%20Studio%20Code%20(VS%20Code).svg" alt="VS Code" title="VS Code" loading="lazy">',
    'Vercel': '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" title="Vercel"><path d="M12 3 22 20H2L12 3z"></path></svg>',
  };

  const buildSection = (label, items) => {
    if (!items || !items.length) return '';
    const list = items.map((item) => `<li>${item}</li>`).join('');
    return `<div class="modal-section"><h4 class="modal-section-label">${label}</h4><ul class="achievements-list">${list}</ul></div>`;
  };

  const buildTextSection = (label, text) => {
    if (!text) return '';
    return `<div class="modal-section"><h4 class="modal-section-label">${label}</h4><p>${text}</p></div>`;
  };

  const buildCapacityModal = (data) => `
    <div class="modal-rich-layout">
      <div class="modal-rich-sidebar">
        <span class="modal-eyebrow">Project</span>
        <h2 class="modal-title" id="modalTitle">${data.title}</h2>
        <p class="modal-rich-desc">${data.shortDesc}</p>
        <div class="modal-meta-row">${icons.users}<span>${data.teamSize}</span></div>
      </div>

      <div class="modal-rich-main">
        <h4 class="icon-label">${icons.bulb} Key Insights</h4>
        <div class="kpi-row" style="--kpi-count: ${data.kpis.length}">
          ${data.kpis.map((k) => `
            <div class="kpi-card">
              <div class="kpi-icon">${icons[k.icon] || icons.users}</div>
              <span class="kpi-value">${k.value}</span>
              <span class="kpi-label">${k.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-bottom-row">
      <div>
        <div class="modal-rich-block">
          <h4 class="icon-label">${icons.alert} Problem</h4>
          <p>${data.problem}</p>
        </div>

        <div class="modal-rich-block">
          <h4 class="icon-label">${icons.target} Solution</h4>
          <p>${data.solution}</p>
        </div>
      </div>
      <div>
        <h4 class="icon-label">${icons.check} Recommendations</h4>
        <ul class="achievements-list">${data.recommendations.map((r) => `<li>${r}</li>`).join('')}</ul>
      </div>
      <div>
        <h4 class="icon-label">${icons.star} Business Impact</h4>
        <ul class="achievements-list">${data.impactPoints.map((p) => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="modal-cta-row">
      <div class="modal-tools-row">
        ${data.tools.map((t) => `<div class="modal-tool-icon">${toolIcons[t] || ''}</div>`).join('')}
      </div>
      <div class="modal-cta-buttons">
        ${data.githubUrl ? `<a href="${data.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">${icons.github} View GitHub</a>` : ''}
        <a href="${data.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${icons.external} View Dashboard</a>
      </div>
    </div>
  `;

  const openModal = (key) => {
    const data = caseStudies[key];
    if (!data) return;

    const isRich = key === 'capacity-tracking' || key === 'tool-adoption' || key === 'csat-learning' || key === 'marketing-performance' || key === 'ai-website-dev';
    modalCard.classList.toggle('modal-rich', isRich);

    modalBody.innerHTML = isRich ? buildCapacityModal(data) : `
      <h2 class="modal-title" id="modalTitle">${data.title}</h2>
      <div class="modal-tags">${data.tags.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
      ${buildTextSection('Problem Statement', data.problem)}
      ${buildTextSection('Objective', data.objective)}
      ${buildTextSection('Approach', data.approach)}
      ${buildSection('Key Insights', data.insights)}
      ${buildSection('Recommendations', data.recommendations)}
      ${buildTextSection('Business Impact', data.impact)}
      ${buildSection('What I Would Do Next', data.next)}
    `;

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.case-card').forEach((card) => {
    card.addEventListener('click', () => openModal(card.dataset.case));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.case);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });

  gsap.set('.case-hero-header .section-badge, .case-hero-header .section-heading, .case-hero-header .timeline-intro', { y: 24, opacity: 0 });
  gsap.set('.case-card', { y: 40, opacity: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.case-hero-section',
      start: 'top 75%',
    },
  })
    .to('.case-hero-header .section-badge', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    .to('.case-hero-header .section-heading', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to('.case-hero-header .timeline-intro', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to('.case-card', { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, '-=0.3');
}

/* ---------- Final CTA Scroll Reveal ---------- */
gsap.set('.cta-header, .cta-section .contact-cards', { y: 30, opacity: 0 });

gsap.timeline({
  scrollTrigger: {
    trigger: '.cta-section',
    start: 'top 75%',
  },
})
  .to('.cta-header', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
  .to('.cta-section .contact-cards', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4');

/* ---------- Footer Year ---------- */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* ---------- Navbar background on scroll ---------- */
ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: { className: 'scrolled', targets: '.navbar' },
});
