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
      shortDesc: 'A Power BI dashboard monitoring analyst capacity, workload distribution, and utilization for proactive resource planning. Built for a team of 10 analysts.',
      tools: ['Power BI', 'Excel'],
      githubUrl: 'https://github.com/karansthinkinglab/capacity-planning-dashboard',
      problem: 'Limited visibility into analyst capacity and workload distribution led to reactive planning, uneven workload allocation, and SLA breaches.',
      solution: 'A centralized Power BI dashboard tracking analyst availability, workload distribution, utilization, and SLA trends to enable proactive resource planning.',
      impactPoints: [
        'Improved resource planning',
        'Balanced workload distribution',
        'Increased operational visibility',
        'Reduced manual planning effort',
      ],
      screenshots: [
        {
          src: 'assets/projects/capacity/cap_plan_dashboard_1.png',
          alt: 'Capacity planning dashboard overview showing analyst capacity, workload, and utilization',
          caption: 'Consolidated view of analyst capacity, workload, and utilization; structured tracking from Oct 2025 surfaced previously invisible capacity imbalances.',
        },
        {
          src: 'assets/projects/capacity/cap_plan_dashboard_2.png',
          alt: 'Chart comparing available capacity vs actual workload over time',
          caption: 'Available capacity vs actual workload over time; the dashed marker shows when structured capacity tracking began.',
        },
        {
          src: 'assets/projects/capacity/cap_plan_dashboard_3.png',
          alt: 'Chart showing SLA breach share before and after dashboard launch',
          caption: 'SLA breach share fell from ~44% before launch to ~6% after, with breach hours dropping sharply.',
        },
        {
          src: 'assets/projects/capacity/cap_plan_dashboard_4.png',
          alt: 'Chart comparing allocated hours to analyst capacity before and after launch',
          caption: "Pre-launch, allocated hours routinely exceeded each analyst's capacity; post-launch, allocation settled to optimal utilization.",
        },
      ],
    },
    'tool-adoption': {
      title: 'Global Tool Adoption & Training Dashboard',
      shortDesc: 'A Tableau dashboard tracking global tool rollout, training adoption, and post-implementation impact across 10 markets and 4 regions.',
      tools: ['Tableau', 'Excel'],
      ctaLabel: 'View on Tableau Public',
      ctaUrl: 'https://public.tableau.com/app/profile/karan6464/viz/GlobalToolAdoptionTrainingDashboard/Dashboard1',
      problem: 'A new customer-servicing toolset was rolling out across global markets with no unified view of adoption, training progress, or whether it was actually improving performance. Gaps in coverage and impact were invisible.',
      solution: 'A Tableau dashboard consolidating rollout status by region, training completion by market and role, internal vs external CSAT, and call handling time (CHT) trend around the July 2025 launch, giving one view of adoption and impact.',
      impactPoints: [
        'Call handling time down ~12% post-launch (average CHT ~649 to ~570)',
        'Clear visibility into training coverage gaps by market and role',
        'Surfaced high- and low-performing markets via CSAT color coding',
        'Enabled data-led decisions on where to focus training',
      ],
      screenshots: [
        {
          src: 'assets/projects/tool-adoption/tool_launch_1.png',
          alt: 'Global rollout status by region with overall training completion KPIs and completion counts by role',
          caption: 'Global rollout status by region with overall training completion KPIs, and completion counts by role to expose coverage gaps.',
        },
        {
          src: 'assets/projects/tool-adoption/tool_launch_2.png',
          alt: 'Internal versus external CSAT by market and role with color coding flagging training or customer experience gaps',
          caption: 'Internal (training) vs external (customer) CSAT by market and role; color coding flags where training quality or customer experience lags.',
        },
        {
          src: 'assets/projects/tool-adoption/tool_launch_3.png',
          alt: 'Average call handling time trend across 2025 with a marker showing the July tool rollout',
          caption: 'Average call handling time across 2025; the marker shows the July tool rollout, after which CHT dropped ~12%.',
        },
      ],
    },
    'csat-learning': {
      title: 'CSAT & Learning Effectiveness Analysis',
      shortDesc: 'An interactive Kirkpatrick-framed diagnostic tracing a learner satisfaction decline across 14 markets that the headline average was hiding.',
      tools: ['Claude', 'HTML/CSS/JS', 'Chart.js'],
      githubUrl: 'https://github.com/karansthinkinglab/csat-learning-effectiveness',
      problem: 'A single rising average made learner satisfaction look healthy, but it masked a widening spread between markets. Declining markets went unnoticed, with no signal on where to intervene.',
      solution: 'Built an interactive diagnostic reading the data as a distribution, not a mean. Structured on the Kirkpatrick model, it moves from reaction (CSAT trend) to learning (score by programme) to behaviour (root cause per market) to results (recommendations) — delivered as a shareable web artifact rather than a BI dashboard, since this was a one-off leadership narrative, not an operational tool.',
      impactPoints: [
        'Surfaced a 2.9-point gap the 7.8 average concealed',
        'Isolated 3 at-risk markets, each traced to a fixable content cause',
        'Reframed the weakness as programme-level, not geographic',
        'Findings presented directly to Directors & VPs',
        'Recommended reporting spread alongside average to catch declines early',
      ],
      screenshots: [
        {
          src: 'assets/projects/csat-learning/csat_1.png',
          alt: 'Masthead and hero showing the 7.8 average headline, the hidden-spread divergence chart, and the 4-KPI strip',
          caption: 'A rising 7.8 global average looked healthy, but the top and bottom markets were diverging underneath it.',
        },
        {
          src: 'assets/projects/csat-learning/csat_2.png',
          alt: 'Section 01 showing the CSAT trend chart by quarter and a table of what the headline number misses',
          caption: 'Eight quarters of CSAT: the mean improves while the spread between strongest and weakest market widens to 2.9 points.',
        },
        {
          src: 'assets/projects/csat-learning/csat_3.png',
          alt: 'Sections 02 and 03 showing programme distribution, market vs target, the all-markets table, and root-cause cards',
          caption: 'Breaking scores by programme type showed the weakness sits in compliance and tech-skills content, not in specific geographies; three markets fall below the 7.5 target.',
        },
        {
          src: 'assets/projects/csat-learning/csat_4.png',
          alt: 'Section 04 showing the four sequenced recommendations and the footer',
          caption: 'Four recommendations sequenced by the size of the gap they close, including reporting spread alongside average.',
        },
      ],
    },
    'marketing-performance': {
      title: 'Marketing Performance Analysis',
      shortDesc: 'A Power BI dashboard analysing six months of multi-channel marketing performance for a small business, covering lead source efficiency, conversion rates, and budget allocation.',
      tools: ['Power BI', 'Excel'],
      githubUrl: 'https://github.com/karansthinkinglab/marketing-performance-analysis',
      problem: "Marketing spend was spread across four lead sources with no consolidated view of what each was actually returning. Volume was visible but efficiency wasn't, so budget decisions were being made on instinct rather than evidence.",
      solution: 'A Power BI dashboard consolidating the full funnel — inquiries and conversions by lead source, conversion share by channel, cost per conversion, and revenue against spend over time — so each channel could be judged on efficiency rather than raw volume.',
      impactPoints: [
        "Found the highest-volume channel was not the most efficient: Google converts at 44.2% vs Instagram's 39.5%, despite Instagram generating more inquiries",
        'Surfaced an inverse relationship between spend and return: the two lowest-spend months delivered the two best returns (12.8x and 13.0x), while the highest-spend month returned 10.3x',
        'Reframed budget allocation from "spend more" to "spend where intent is highest"',
        'Established return on spend as a monthly metric so declining efficiency surfaces early',
        'Overall: 917 inquiries, 361 conversions, 39.4% conversion rate, ~10.9x return on spend',
      ],
      screenshots: [
        {
          src: 'assets/projects/marketing-performance-analysis/marketing_overall.png',
          alt: 'Full funnel KPI summary showing inquiries, conversions, conversion rate, revenue, spend, and cost per conversion',
          caption: 'Full funnel view: 917 inquiries converting at 39.4%, ₹693K revenue on ₹63.8K spend, with cost per conversion at ₹176.7.',
        },
        {
          src: 'assets/projects/marketing-performance-analysis/marketing_channel_performance.png',
          alt: 'Lead source breakdown comparing inquiries, conversions, and conversion rate by channel',
          caption: 'Instagram leads on volume with 314 inquiries and 124 conversions, but ranked by conversion rate Google is the strongest channel at 44.2%.',
        },
        {
          src: 'assets/projects/marketing-performance-analysis/marketing_conversion_performance.png',
          alt: 'Inquiry-to-conversion funnel chart alongside a channel mix breakdown of conversions',
          caption: 'The inquiry-to-conversion funnel and channel mix: social drives the largest share of conversions, search the most efficient.',
        },
        {
          src: 'assets/projects/marketing-performance-analysis/marketing_revenue_vs_spend.png',
          alt: 'Monthly revenue against spend trend showing return on spend by month',
          caption: 'Revenue against spend by month; the two lowest-spend months (April, May) delivered the highest returns, at 12.8x and 13.0x.',
        },
      ],
    },
    'ai-website-dev': {
      title: 'AI-Assisted Website Development',
      shortDesc: "This portfolio itself: a platform combining storytelling and in-depth project case studies in one experience, designed and shipped in 2 days using AI-assisted development.",
      useProjectLayout: true,
      tools: ['ChatGPT', 'Claude', 'HTML/CSS/JS', 'GSAP', 'Vercel'],
      ctaButtons: [
        { label: "You're looking at it", action: 'close' },
        { label: 'View on GitHub', url: 'https://github.com/karansthinkinglab/-Karan-Portfolio', action: 'link' },
      ],
      problem: 'Presenting analytics work needs more than a CV. Case studies, live dashboards, and technical demos usually end up scattered across disconnected tools, and building a custom site to hold them normally means a slow development cycle or a rigid template.',
      solution: 'Designed the layout visually first, using ChatGPT image generation to draft design outlines and settle on the structure before any code existed, then built it with Claude Code in VS Code. Case study content is centralised in a single data source, so each new project is a data addition rather than new markup. Shipped end-to-end in 2 days, deployed on Vercel.',
      whatLearned: [
        'Designing visually before prompting beats describing in prose: a drafted image gave the build a concrete target and cut iteration cycles sharply',
        'Centralising case study content in one data structure turned each new project from a code change into a data change',
        'AI-assisted speed only holds if you read what it produces: several rounds of refinement after reviewing output and user feedback made the difference between working and finished',
        'Keeping motion and design tokens consistent across pages is easier to enforce up front than to retrofit',
      ],
      impactPoints: [
        'Production-ready site designed and shipped in 2 days',
        'One consistent surface for storytelling and in-depth case studies',
        'Architecture makes adding a new case study a data change, not a rebuild',
        'Live at karan-portfolio-project.vercel.app',
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
    'HTML/CSS/JS': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" title="HTML/CSS/JS"><path d="M8 4 3 12l5 8M16 4l5 8-5 8"></path></svg>',
    'Chart.js': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" title="Chart.js"><path d="M4 20V10M12 20V4M20 20v-7"></path></svg>',
    'ChatGPT': '<img src="assets/ChatGpt%20icon.png" alt="ChatGPT" title="ChatGPT" loading="lazy" class="tool-icon-invert">',
    'GSAP': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" title="GSAP"><path d="M3 12h4l3 8 4-16 3 8h4"></path></svg>',
  };

  const toolLabels = {
    'Power BI': 'Power BI',
    'Excel': 'Excel',
    'Tableau': 'Tableau',
    'DAX': 'DAX',
    'Claude': 'Claude Code',
    'VS Code': 'VS Code',
    'Vercel': 'Vercel',
    'HTML/CSS/JS': 'HTML/CSS/JS',
    'Chart.js': 'Chart.js',
    'ChatGPT': 'ChatGPT',
    'GSAP': 'GSAP',
  };

  const buildToolIcon = (t) => {
    const label = toolLabels[t] || t;
    return `<div class="modal-tool-icon" tabindex="0" role="img" aria-label="${label}" title="${label}">${toolIcons[t] || ''}<span class="tool-tooltip" role="tooltip">${label}</span></div>`;
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
        ${data.tools.map((t) => buildToolIcon(t)).join('')}
      </div>
      <div class="modal-cta-buttons">
        ${data.githubUrl ? `<a href="${data.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">${icons.github} View GitHub</a>` : ''}
        <a href="${data.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${icons.external} View Dashboard</a>
      </div>
    </div>
  `;

  const buildProjectModal = (data) => {
    const shots = data.screenshots || [];
    const hasShots = shots.length > 0;
    const hasArrows = shots.length > 1;

    return `
      <div class="modal-project-layout">
        <div class="proj-intro">
          <span class="modal-eyebrow">Project</span>
          <h2 class="modal-title" id="modalTitle">${data.title}</h2>
          <p class="modal-rich-desc">${data.shortDesc}</p>
        </div>

        <div class="proj-visual${hasShots ? '' : ' proj-visual-empty'}">
          ${hasShots ? `
          <div class="project-carousel">
            <div class="project-carousel-viewport">
              ${hasArrows ? `<button type="button" class="carousel-arrow carousel-arrow-prev" aria-label="Previous screenshot"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"></path></svg></button>` : ''}
              <img class="project-carousel-image" id="carouselImage" src="${shots[0].src}" alt="${shots[0].alt}">
              ${hasArrows ? `<button type="button" class="carousel-arrow carousel-arrow-next" aria-label="Next screenshot"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"></path></svg></button>` : ''}
            </div>
            ${hasArrows ? `
            <div class="carousel-dots" id="carouselDots">
              ${shots.map((_, i) => `<button type="button" class="carousel-dot${i === 0 ? ' active' : ''}" aria-label="Go to screenshot ${i + 1}" data-index="${i}"></button>`).join('')}
            </div>` : ''}
          </div>
          <p class="project-carousel-caption" id="carouselCaption">${shots[0].caption || ''}</p>
          ` : ''}
        </div>

        <div class="proj-problem modal-rich-block">
          <h4 class="icon-label">${icons.alert} Problem</h4>
          <p>${data.problem}</p>
        </div>

        <div class="proj-solution modal-rich-block">
          <h4 class="icon-label">${icons.target} Solution</h4>
          <p>${data.solution}</p>
        </div>

        <div class="proj-impact modal-rich-block">
          <h4 class="icon-label">${icons.star} Business Impact</h4>
          <ul class="achievements-list">${data.impactPoints.map((p) => `<li>${p}</li>`).join('')}</ul>
          ${data.whatLearned ? `
          <h4 class="icon-label impact-subheading">${icons.bulb} What I Learned</h4>
          <ul class="achievements-list">${data.whatLearned.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
        </div>

        <div class="proj-tools modal-tools-cta-row">
          <div class="modal-tools-row">
            ${data.tools.map((t) => buildToolIcon(t)).join('')}
          </div>
          ${data.ctaButtons && data.ctaButtons.length
            ? `<div class="modal-cta-buttons">${data.ctaButtons.map((btn, i) => {
                const cls = `btn ${i === 0 ? 'btn-primary' : 'btn-secondary'} btn-sm`;
                return btn.action === 'close'
                  ? `<button type="button" class="${cls} modal-cta-close-btn">${btn.label}</button>`
                  : `<a href="${btn.url}" target="_blank" rel="noopener" class="${cls}">${icons.github} ${btn.label}</a>`;
              }).join('')}</div>`
            : data.githubUrl
              ? `<a href="${data.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${icons.github} View on GitHub</a>`
              : data.ctaUrl
                ? `<a href="${data.ctaUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${icons.external} ${data.ctaLabel || 'View Project'}</a>`
                : ''}
        </div>
      </div>
    `;
  };

  const initProjectCarousel = (shots) => {
    if (!shots || shots.length < 2) return;

    let index = 0;
    const image = modalBody.querySelector('#carouselImage');
    const caption = modalBody.querySelector('#carouselCaption');
    const dots = modalBody.querySelectorAll('.carousel-dot');
    const prevBtn = modalBody.querySelector('.carousel-arrow-prev');
    const nextBtn = modalBody.querySelector('.carousel-arrow-next');

    const render = () => {
      const shot = shots[index];
      image.src = shot.src;
      image.alt = shot.alt;
      caption.textContent = shot.caption || '';
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    const step = (delta) => {
      index = (index + delta + shots.length) % shots.length;
      render();
    };

    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));
    dots.forEach((dot) => dot.addEventListener('click', () => {
      index = Number(dot.dataset.index);
      render();
    }));
  };

  const openModal = (key) => {
    const data = caseStudies[key];
    if (!data) return;

    const hasScreens = !!(data.screenshots && data.screenshots.length);
    const useProjectLayout = hasScreens || !!data.useProjectLayout;
    const isRich = !useProjectLayout && (key === 'tool-adoption' || key === 'csat-learning' || key === 'marketing-performance' || key === 'ai-website-dev');
    modalCard.classList.toggle('modal-rich', isRich);
    modalCard.classList.toggle('modal-project', useProjectLayout);

    modalBody.innerHTML = useProjectLayout ? buildProjectModal(data) : isRich ? buildCapacityModal(data) : `
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

    if (hasScreens) initProjectCarousel(data.screenshots);
    const modalCloseCta = modalBody.querySelector('.modal-cta-close-btn');
    if (modalCloseCta) modalCloseCta.addEventListener('click', closeModal);

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
