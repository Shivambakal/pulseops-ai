# PulseOps AI — Autonomous Cloud SOC & Incident Response Platform

[![Cloud Security](https://img.shields.io/badge/Security-SOC2%20Type%20II%20%7C%20ISO%2027001-00f2fe?style=flat-square)](#)
[![AWS Integration](https://img.shields.io/badge/AWS-Python%20Boto3%20Native-3b82f6?style=flat-square)](#)
[![Core Web Vitals](https://img.shields.io/badge/PageSpeed-100%2F100%20Mobile-10b981?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-Proprietary-6366f1?style=flat-square)](#)

**PulseOps AI** is a production-ready, high-converting B2B SaaS web application built for an automated AI-powered Cloud Security and SOC Incident Response Platform. 

It enables Security Operations Center (SOC) teams and DevOps engineers to ingest GuardDuty and CloudTrail telemetry, detect misconfigurations in real time, and execute Python Boto3 playbooks autonomously — achieving a mean time to remediate (MTTR) of under 2 seconds across AWS environments.

---

## 📁 Repository File Structure

```text
WEB DEV PROJECT/
├── index.html       # Home Page (Live Boto3 threat simulator, metrics grid, feature showcase)
├── product.html     # Product Architecture Page (3-step security pipeline & technical specs table)
├── pricing.html     # Pricing & FAQ Page (Interactive monthly/annual billing switch & accordion)
├── contact.html     # Contact & Demo Page (Accessible demo request form with feedback toast)
├── styles.css       # Design System (Glassmorphic dark SOC theme, zero framework overhead)
├── main.js         # Vanilla JavaScript (Mobile drawer, billing toggle, simulator, form handler)
└── README.md        # Project documentation
```

---

## ⚡ Key Features & Capabilities

- **Autonomous Threat Remediation**: Real-time AWS Security Group port 22/3389 ingress revocation via native Boto3 Python playbooks.
- **S3 Bucket Leak Guard**: Instant detection and lockdown of publicly exposed S3 buckets and ACL permissions.
- **Interactive Live Terminal Simulator**: Built-in homepage simulation engine demonstrating breach detection, automated playbook execution, and log verification.
- **Dynamic Pricing Switcher**: Seamless toggle between monthly and annual billing options with real-time 20% discount recalculation.
- **Smooth FAQ Accordion**: Expandable security and compliance questions with animated height transitions and full keyboard accessibility.
- **Interactive Demo Booking Form**: Accessible form with inline validation, active state feedback, and instant toast confirmation.

---

## 🎨 Visual Design System & Architecture

- **Theme**: High-converting Cybersecurity SOC Dark Mode
  - **Primary Background**: Deep Slate `#0B0F19` & `#111827`
  - **Glass Containers**: Dark Glassmorphism `rgba(30, 41, 59, 0.7)` with 1px border (`#334155`)
  - **Accents**: Neon Cyan `#00F2FE`, Electric Blue `#3B82F6`, Cyber Green `#10B981`
- **Zero-Latency Typography**: Native System Font Stack (`system-ui, -apple-system, sans-serif`) for 0ms font load delay.
- **Core Web Vitals Target**: 100/100 Mobile PageSpeed Insights rating via inline SVGs, zero heavy external CDNs/libraries, and explicit media dimensions.
- **Accessibility & SEO**: Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), strict single `<h1>` hierarchy per page, visible focus rings (`:focus-visible`), and structured JSON-LD schemas (`Organization`, `SoftwareApplication`, `Product`, `FAQPage`).

---

## 🚀 Local Development & Running

You can serve the project using any standard HTTP server:

### Using Python:
```bash
python -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Using Node / npx:
```bash
npx serve . -p 8080
```

---

## 📜 Footer Credit

Every HTML file includes the required footer attribution:

```html
<footer class="site-footer">
  <div class="footer-container">
    <p>&copy; 2026 PulseOps AI Inc. All rights reserved.</p>
    <p>
      <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" class="credit-link">
        Built for Digital Heroes Training Task
      </a>
    </p>
  </div>
</footer>
```

---

## 👤 Author & Task Information

- **Built for**: Digital Heroes Training Task ([digitalheroesco.com](https://digitalheroesco.com))
- **Repository**: [github.com/Shivambakal/pulseops-ai](https://github.com/Shivambakal/pulseops-ai)
