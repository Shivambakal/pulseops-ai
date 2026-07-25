/**
 * PulseOps AI — Core Vanilla JavaScript & Agency-Grade Motion Engine
 * Zero external dependencies | Hardware-Accelerated Animations | 100/100 Core Web Vitals Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initCursorSpotlight();
  initScrollObserver();
  initTerminalSimulator();
  initBillingToggle();
  initFaqAccordion();
  initDemoForm();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation Drawer Handler
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', !isOpen);
    toggleBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Active Nav Link Highlighting
   -------------------------------------------------------------------------- */
function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Cursor Spotlight Tracking on Glass Cards
   -------------------------------------------------------------------------- */
function initCursorSpotlight() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Scroll-Triggered Entrance Animations (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollObserver() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    revealObserver.observe(el);
  });
}

/* --------------------------------------------------------------------------
   5. Interactive IDE Terminal & Real-Time Breach Simulator (index.html)
   -------------------------------------------------------------------------- */
function initTerminalSimulator() {
  const simBtn = document.getElementById('trigger-simulation-btn');
  const terminalLogs = document.getElementById('terminal-log-output');
  const statusBadge = document.getElementById('terminal-status-badge');

  if (!simBtn || !terminalLogs || !statusBadge) return;

  let isSimulating = false;

  const initialLog = document.createElement('div');
  initialLog.className = 'terminal-log-line';
  initialLog.style.color = 'var(--text-secondary)';
  initialLog.textContent = '[MONITORING]: GuardDuty & CloudTrail streams active (0ms latency).';
  terminalLogs.appendChild(initialLog);

  simBtn.addEventListener('click', () => {
    if (isSimulating) {
      // Reset simulator
      isSimulating = false;
      terminalLogs.innerHTML = '';
      const resetLog = document.createElement('div');
      resetLog.className = 'terminal-log-line';
      resetLog.style.color = 'var(--text-secondary)';
      resetLog.textContent = '[MONITORING]: GuardDuty & CloudTrail streams active (0ms latency).';
      terminalLogs.appendChild(resetLog);

      statusBadge.textContent = 'ENGINE ACTIVE';
      statusBadge.className = 'terminal-status-badge status-idle';
      simBtn.disabled = false;
      simBtn.style.opacity = '1';
      simBtn.textContent = 'Trigger Security Breach Simulation';
      return;
    }

    isSimulating = true;
    simBtn.disabled = true;
    simBtn.style.opacity = '0.6';

    statusBadge.textContent = 'THREAT DETECTED';
    statusBadge.className = 'terminal-status-badge status-threat';

    const logs = [
      { text: '[🔴 CRITICAL 13:48:02]: Unauthorized Port 22 (SSH) opened on sg-09423f8c to 0.0.0.0/0', color: 'var(--accent-crimson)' },
      { text: '[⚡ ACTION 13:48:03]: Triggering Boto3 playbook: revoke_security_group_ingress()...', color: 'var(--accent-amber)' },
      { text: '[🟢 SUCCESS 13:48:04]: Port 22 revoked. Ingress security policy enforced in 1.2s.', color: 'var(--accent-emerald)' }
    ];

    terminalLogs.innerHTML = '';

    logs.forEach((log, index) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = 'terminal-log-line';
        line.style.color = log.color;
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';
        line.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        line.textContent = log.text;
        terminalLogs.appendChild(line);
        terminalLogs.scrollTop = terminalLogs.scrollHeight;

        setTimeout(() => {
          line.style.opacity = '1';
          line.style.transform = 'translateX(0)';
        }, 50);

        if (index === 1) {
          statusBadge.textContent = 'REMEDIATING...';
          statusBadge.className = 'terminal-status-badge status-remediating';
        }

        if (index === logs.length - 1) {
          statusBadge.textContent = 'NEUTRALIZED (1.2s)';
          statusBadge.className = 'terminal-status-badge status-neutralized';
          simBtn.disabled = false;
          simBtn.style.opacity = '1';
          simBtn.textContent = 'Reset Simulation';
        }
      }, index * 600);
    });
  });
}

/* --------------------------------------------------------------------------
   6. Functional Billing Toggle Switcher (pricing.html)
   -------------------------------------------------------------------------- */
function initBillingToggle() {
  const toggle = document.getElementById('billing-toggle');
  const priceStarter = document.getElementById('price-starter');
  const pricePro = document.getElementById('price-pro');
  const periodStarter = document.getElementById('period-starter');
  const periodPro = document.getElementById('period-pro');
  const monthlyLabel = document.getElementById('monthly-label');
  const annualLabel = document.getElementById('annual-label');
  const saveBadge = document.getElementById('save-badge');

  if (!toggle || !priceStarter || !pricePro) return;

  const prices = {
    monthly: { starter: '49', pro: '149', period: '/ month' },
    annual: { starter: '39', pro: '119', period: '/ mo (billed annually)' }
  };

  function updatePrices(isAnnual) {
    const mode = isAnnual ? prices.annual : prices.monthly;

    priceStarter.style.opacity = '0';
    pricePro.style.opacity = '0';
    priceStarter.style.transform = 'translateY(-4px)';
    pricePro.style.transform = 'translateY(-4px)';

    setTimeout(() => {
      priceStarter.textContent = mode.starter;
      pricePro.textContent = mode.pro;
      if (periodStarter) periodStarter.textContent = mode.period;
      if (periodPro) periodPro.textContent = mode.period;

      priceStarter.style.opacity = '1';
      pricePro.style.opacity = '1';
      priceStarter.style.transform = 'translateY(0)';
      pricePro.style.transform = 'translateY(0)';
    }, 150);

    if (monthlyLabel) monthlyLabel.classList.toggle('active', !isAnnual);
    if (annualLabel) annualLabel.classList.toggle('active', isAnnual);
    if (saveBadge) saveBadge.classList.toggle('visible', isAnnual);
  }

  toggle.addEventListener('change', (e) => {
    updatePrices(e.target.checked);
  });
}

/* --------------------------------------------------------------------------
   7. Functional FAQ Accordion (pricing.html)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length === 0) return;

  faqItems.forEach((item) => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherHeader = other.querySelector('.faq-header');
          const otherBody = other.querySelector('.faq-body');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Demo Booking Form Submission Handler (contact.html)
   -------------------------------------------------------------------------- */
function initDemoForm() {
  const form = document.getElementById('demo-booking-form');
  const toast = document.getElementById('form-success-toast');
  const submitBtn = document.getElementById('demo-submit-btn');

  if (!form || !toast || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2 a 10 10 0 0 1 10 10"></path>
      </svg>
      Submitting Demo Request...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;

      toast.className = 'form-success-toast visible';
      toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>✓ Demo Request Submitted! A Cloud Security Engineer will reach out within 15 minutes.</span>
      `;

      form.reset();
      toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
  });
}
