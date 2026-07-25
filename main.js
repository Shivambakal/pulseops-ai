/**
 * PulseOps AI — Core Vanilla JavaScript
 * Zero external libraries | 100/100 Core Web Vitals Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initTerminalSimulator();
  initBillingToggle();
  initFaqAccordion();
  initDemoForm();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation Drawer
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
   3. Interactive Terminal Breach Simulator (index.html)
   -------------------------------------------------------------------------- */
function initTerminalSimulator() {
  const triggerBtn = document.getElementById('trigger-simulation-btn');
  const statusBadge = document.getElementById('terminal-status-badge');
  const logOutput = document.getElementById('terminal-log-output');

  if (!triggerBtn || !statusBadge || !logOutput) return;

  let simRunning = false;

  const IDLE_LOG = '[MONITORING]: GuardDuty & CloudTrail streams active (0ms latency).';
  const CRITICAL_LOG = '[🔴 ALERT 12:44:02]: Unauthorized Port 22 (SSH) open to 0.0.0.0/0 on sg-09423f8c.';
  const ACTION_LOG = '[⚡ ACTION 12:44:03]: Executing Boto3 playbook: revoke_security_group_ingress()...';
  const SUCCESS_LOG = '[🟢 SUCCESS 12:44:03.4]: Port 22 revoked via Boto3. Audit log committed to CloudTrail.';

  function setStatus(text, className) {
    statusBadge.textContent = text;
    statusBadge.className = 'terminal-status-badge ' + className;
  }

  function appendLog(text, className) {
    const line = document.createElement('div');
    line.className = 'terminal-log-line ' + (className || 'info');
    line.textContent = text;
    logOutput.appendChild(line);
    logOutput.scrollTop = logOutput.scrollHeight;
  }

  function resetSimulator() {
    simRunning = false;
    logOutput.innerHTML = '';
    appendLog(IDLE_LOG, 'info');
    setStatus('ENGINE ACTIVE', 'status-idle');
    triggerBtn.disabled = false;
    triggerBtn.textContent = 'Trigger Security Breach Simulation';
  }

  // Initial state setup
  resetSimulator();

  triggerBtn.addEventListener('click', () => {
    if (simRunning) {
      resetSimulator();
      return;
    }

    simRunning = true;
    triggerBtn.disabled = true;

    setStatus('THREAT DETECTED', 'status-threat');
    appendLog(CRITICAL_LOG, 'critical');

    setTimeout(() => {
      setStatus('REMEDIATING...', 'status-remediating');
      appendLog(ACTION_LOG, 'action');
    }, 500);

    setTimeout(() => {
      setStatus('REMEDIATED: Port 22 Closed via Boto3 (1.4s)', 'status-neutralized');
      appendLog(SUCCESS_LOG, 'success');
      triggerBtn.disabled = false;
      triggerBtn.textContent = 'Reset Simulation';
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   4. Functional Billing Toggle (pricing.html)
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
   5. Functional FAQ Accordion (pricing.html)
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

      // Close other accordion items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherHeader = other.querySelector('.faq-header');
          const otherBody = other.querySelector('.faq-body');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Toggle current item
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
   6. Demo Booking Form Submission Handler (contact.html)
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

      // Smooth scroll toast into view
      toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
  });
}
