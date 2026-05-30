/* ===== Language Switching ===== */
const translations = {
  en: {
    // Nav
    'nav-home': 'Home',
    'nav-products': 'Products',
    'nav-about': 'About Us',
    'nav-contact': 'Contact',
    'nav-insulators': 'Insulators',
    'nav-lcd': 'LCD Displays',
    'nav-piston': 'Piston Rings',
    'nav-ceramic': 'Ceramic Tableware',

    // Hero
    'hero-badge': '🌍 Trusted Global Trading Partner',
    'hero-title': 'Quality Products,<br><span>Global Reach</span>',
    'hero-subtitle': 'Liling Zhongneng Trading Co., Ltd. — Your reliable source for electrical insulators, LCD displays, motorcycle parts, and ceramic tableware. Serving customers worldwide with competitive pricing and premium quality.',
    'hero-cta1': 'Explore Products',
    'hero-cta2': 'Request Quote',

    // Stats
    'stat1-num': '15+', 'stat1-label': 'Years Experience',
    'stat2-num': '50+', 'stat2-label': 'Countries Served',
    'stat3-num': '1000+', 'stat3-label': 'Product Models',
    'stat4-num': '99%', 'stat4-label': 'Satisfaction Rate',

    // Products Section
    'products-overline': 'Our Products',
    'products-title': 'Four Core Product Lines',
    'products-subtitle': 'We specialize in four major categories, each backed by rigorous quality control and deep industry expertise.',

    // Product Cards
    'prod-insulators-title': 'Electrical Insulators',
    'prod-insulators-desc': 'High-performance porcelain, polymer, and composite insulators for power transmission and distribution systems.',
    'prod-lcd-title': 'LCD Displays',
    'prod-lcd-desc': 'TFT LCD modules, OLED displays, touch panels and driver boards for industrial and consumer applications.',
    'prod-piston-title': 'Motorcycle Piston Rings',
    'prod-piston-desc': 'Precision-engineered piston rings for 50cc-1000cc engines. Chrome-plated, steel, and cast iron options.',
    'prod-ceramic-title': 'Ceramic Tableware',
    'prod-ceramic-desc': 'Premium porcelain mugs, bowls, dinner sets with full OEM/ODM customization capabilities.',

    // Tags
    'tag-iec': 'IEC/ANSI', 'tag-power': 'Power Transmission', 'tag-hv': 'High Voltage',
    'tag-tft': 'TFT LCD', 'tag-oled': 'OLED', 'tag-touch': 'Touch Panel',
    'tag-oem': 'OEM', 'tag-50cc': '50cc-1000cc', 'tag-chrome': 'Chrome-plated',
    'tag-porcelain': 'Porcelain', 'tag-custom': 'Custom Design', 'tag-horeca': 'HORECA',

    'learn-more': 'Learn More →',

    // About Preview
    'about-overline': 'About Us',
    'about-title': 'Your Trusted Trading Partner Since 2010',
    'about-p1': 'Based in Liling, Hunan Province — a city renowned for its ceramic heritage — Liling Zhongneng Trading Co., Ltd. has grown into a diversified export enterprise serving clients across 50+ countries.',
    'about-p2': 'We combine deep manufacturing relationships with international trade expertise to deliver quality products at competitive prices, backed by responsive service and reliable logistics.',
    'about-feat1-title': 'Quality Assured',
    'about-feat1-desc': 'Rigorous QC at every stage',
    'about-feat2-title': 'Global Logistics',
    'about-feat2-desc': 'FOB/CIF/DDP shipping',
    'about-feat3-title': 'Custom Solutions',
    'about-feat3-desc': 'OEM/ODM welcome',
    'about-feat4-title': 'Fast Response',
    'about-feat4-desc': '24h inquiry reply',
    'about-cta': 'More About Us',

    // Features / Why Choose Us
    'why-overline': 'Why Choose Us',
    'why-title': 'The Zhongneng Advantage',
    'why-subtitle': 'What sets us apart in international trade',
    'why1-title': 'Factory-Direct Pricing',
    'why1-desc': 'Deep partnerships with certified manufacturers mean you get the best prices without middlemen.',
    'why2-title': 'International Standards',
    'why2-desc': 'All products comply with IEC, ANSI, ISO, and CE standards. Full test reports available.',
    'why3-title': 'Flexible MOQ',
    'why3-desc': 'We support small trial orders for new customers. Sample shipments available worldwide.',
    'why4-title': 'End-to-End Service',
    'why4-desc': 'From inquiry to delivery — sourcing, QC, documentation, shipping — one point of contact.',
    'why5-title': 'Multi-Category Supply',
    'why5-desc': 'Four product lines under one roof. Consolidate shipments and reduce procurement complexity.',
    'why6-title': 'After-Sales Support',
    'why6-desc': 'Dedicated support team for claims, replacements, and technical questions. We stand behind every order.',

    // CTA
    'cta-title': 'Ready to Start Your Next Order?',
    'cta-subtitle': 'Get a free quote within 24 hours. Our team is ready to help you find the right products at the right price.',
    'cta-quote': 'Get Free Quote',
    'cta-whatsapp': 'Chat on WhatsApp',

    // Footer
    'footer-desc': 'Professional export enterprise specializing in electrical insulators, LCD displays, motorcycle parts, and ceramic tableware.',
    'footer-products': 'Products',
    'footer-company': 'Company',
    'footer-about': 'About Us',
    'footer-contact': 'Contact Us',
    'footer-quote': 'Request Quote',
    'footer-contact-info': 'Contact Info',
    'footer-address': 'No.74 Changqing Street, Liling City, Hunan, China',
    'footer-rights': '© 2024 Liling Zhongneng Trading Co., Ltd. All rights reserved.',

    // Contact Page
    'contact-hero-title': 'Contact Us',
    'contact-hero-sub': 'We\'d love to hear from you. Get in touch for quotes, samples, or any questions.',
    'contact-info-title': 'Get In Touch',
    'contact-name': 'Liao Yuxin',
    'contact-form-title': 'Send an Inquiry',
    'form-name': 'Your Name *',
    'form-email': 'Email Address *',
    'form-phone': 'Phone / WhatsApp',
    'form-company': 'Company Name',
    'form-product': 'Product Interest *',
    'form-select': '-- Select a category --',
    'form-opt1': 'Electrical Insulators',
    'form-opt2': 'LCD Displays',
    'form-opt3': 'Motorcycle Piston Rings',
    'form-opt4': 'Ceramic Tableware',
    'form-opt5': 'Multiple / Other',
    'form-message': 'Your Message *',
    'form-submit': 'Send Inquiry',
    'form-ph-name': 'John Smith',
    'form-ph-email': 'john@company.com',
    'form-ph-phone': '+1 234 567 890',
    'form-ph-company': 'Your Company Ltd.',
    'form-ph-msg': 'Tell us about your requirements, quantities, specifications...',

    // About Page
    'about-hero-title': 'About Zhongneng',
    'about-hero-sub': 'A decade of trusted international trade',
    'about-story-title': 'Our Story',
    'about-story-p1': 'Founded in 2010 in Liling — China\'s ceramic capital — Zhongneng Trading began as a specialized ceramics exporter. Over the years, we expanded our portfolio to include electrical insulators, LCD display modules, and motorcycle engine components.',
    'about-story-p2': 'Today, we serve clients in over 50 countries across Southeast Asia, the Middle East, Africa, Europe, and the Americas. Our mission is simple: deliver quality products at fair prices, backed by honest service.',
    'about-mission-title': 'Our Mission & Values',
    'about-value1': 'Integrity First — Transparent pricing, honest communication, reliable delivery.',
    'about-value2': 'Quality Always — Every shipment inspected. We never compromise on standards.',
    'about-value3': 'Customer Focus — Flexible solutions tailored to your market and budget.',
    'about-value4': 'Continuous Growth — Expanding product lines and improving service every year.',
    'about-milestones': 'Milestones',
    'ms-2010': 'Company founded in Liling, Hunan. First ceramic tableware exports.',
    'ms-2013': 'Expanded into electrical insulators. First contracts in Southeast Asia.',
    'ms-2016': 'Added LCD display modules. Reached 20+ export countries.',
    'ms-2019': 'Launched motorcycle parts division. 40+ countries served.',
    'ms-2022': 'Achieved ISO 9001 certification. 50+ country footprint.',
    'ms-2024': 'Digital transformation — new e-commerce platform and AI-powered sourcing.',

    // Product Pages
    'prod-hero-insulators': 'Electrical Insulators',
    'prod-hero-insulators-sub': 'High-reliability insulators for power transmission & distribution',
    'prod-hero-lcd': 'LCD Display Modules',
    'prod-hero-lcd-sub': 'TFT, OLED, touch panels for industrial & consumer electronics',
    'prod-hero-piston': 'Motorcycle Piston Rings',
    'prod-hero-piston-sub': 'Precision rings for 50cc-1000cc engines — OEM quality',
    'prod-hero-ceramic': 'Ceramic Tableware',
    'prod-hero-ceramic-sub': 'Premium porcelain — mugs, bowls, dinner sets — full OEM/ODM',

    'specs-title': 'Product Specifications',
    'inquiry-title': 'Interested? Send Us an Inquiry',
    'inquiry-btn': 'Request Quote Now',
  },

  zh: {
    'nav-home': '首页',
    'nav-products': '产品中心',
    'nav-about': '关于我们',
    'nav-contact': '联系我们',
    'nav-insulators': '绝缘子',
    'nav-lcd': '液晶屏',
    'nav-piston': '活塞环',
    'nav-ceramic': '日用瓷',

    'hero-badge': '🌍 值得信赖的全球贸易伙伴',
    'hero-title': '优质产品，<br><span>通达全球</span>',
    'hero-subtitle': '醴陵市中能贸易有限公司 — 您的绝缘子、液晶屏、摩托车配件和日用瓷可靠供应商。以竞争力的价格和卓越的品质服务全球客户。',
    'hero-cta1': '浏览产品',
    'hero-cta2': '获取报价',

    'stat1-num': '15+', 'stat1-label': '年行业经验',
    'stat2-num': '50+', 'stat2-label': '服务国家',
    'stat3-num': '1000+', 'stat3-label': '产品型号',
    'stat4-num': '99%', 'stat4-label': '客户满意度',

    'products-overline': '产品中心',
    'products-title': '四大核心产品线',
    'products-subtitle': '我们专注于四大品类，每一类都有严格的品质管控和深厚的行业经验。',

    'prod-insulators-title': '电气绝缘子',
    'prod-insulators-desc': '用于输配电系统的高性能瓷质、聚合物和复合绝缘子。',
    'prod-lcd-title': '液晶显示屏',
    'prod-lcd-desc': 'TFT液晶模组、OLED显示屏、触摸屏和驱动板，适用于工业和消费类应用。',
    'prod-piston-title': '摩托车活塞环',
    'prod-piston-desc': '适用于50cc-1000cc发动机的精密活塞环。镀铬、钢质和铸铁可选。',
    'prod-ceramic-title': '日用陶瓷',
    'prod-ceramic-desc': '优质瓷质杯、碗、餐具套装，全面支持OEM/ODM定制。',

    'tag-iec': 'IEC/ANSI标准', 'tag-power': '输配电', 'tag-hv': '高压',
    'tag-tft': 'TFT液晶', 'tag-oled': 'OLED', 'tag-touch': '触摸屏',
    'tag-oem': 'OEM代工', 'tag-50cc': '50cc-1000cc', 'tag-chrome': '镀铬',
    'tag-porcelain': '瓷质', 'tag-custom': '定制设计', 'tag-horeca': '酒店餐饮',

    'trust-title': '四大专业部门，一个值得信赖的伙伴',
    'trust-desc': '我们的四大产品线各有独立的采购、质检和销售团队。无论您需要绝缘子、液晶屏、活塞环还是日用瓷——都能获得同样的可靠性、竞争力和专业服务。',
    'trust-sub': '📩 索取分类产品目录 — 我们只给您看相关的产品线。',
    'learn-more': '了解更多 →',

    'about-overline': '关于我们',
    'about-title': '自2010年起，您值得信赖的贸易伙伴',
    'about-p1': '中能贸易坐落于中国陶瓷之都——湖南醴陵，已发展成为一家多元化出口企业，服务全球50多个国家的客户。',
    'about-p2': '我们结合深厚的制造资源和国际贸易专长，以竞争力的价格提供优质产品，辅以快速响应和可靠物流。',
    'about-feat1-title': '品质保障',
    'about-feat1-desc': '全流程严格质检',
    'about-feat2-title': '全球物流',
    'about-feat2-desc': 'FOB/CIF/DDP运输',
    'about-feat3-title': '定制方案',
    'about-feat3-desc': '欢迎OEM/ODM',
    'about-feat4-title': '快速响应',
    'about-feat4-desc': '24小时回复询盘',
    'about-cta': '了解更多',

    'why-overline': '为什么选择我们',
    'why-title': '中能优势',
    'why-subtitle': '我们在国际贸易中脱颖而出的原因',
    'why1-title': '工厂直供价格',
    'why1-desc': '与认证制造商深度合作，没有中间商，价格更优。',
    'why2-title': '国际标准认证',
    'why2-desc': '所有产品符合IEC、ANSI、ISO、CE标准，可提供完整检测报告。',
    'why3-title': '灵活起订量',
    'why3-desc': '支持新客户小批量试单，全球寄送样品。',
    'why4-title': '一站式服务',
    'why4-desc': '从询盘到交付——采购、质检、单证、物流——一个对接人搞定。',
    'why5-title': '多品类供应',
    'why5-desc': '四大产品线一站采购，合并出货，降低采购复杂度。',
    'why6-title': '售后保障',
    'why6-desc': '专业团队处理索赔、补货和技术问题，每笔订单都有保障。',

    'cta-title': '准备好开始下一笔订单了吗？',
    'cta-subtitle': '24小时内获取免费报价。我们的团队随时为您提供合适的产品和价格。',
    'cta-quote': '获取免费报价',
    'cta-whatsapp': 'WhatsApp咨询',

    'footer-desc': '专业出口企业，主营电气绝缘子、液晶屏、摩托车配件和日用陶瓷。',
    'footer-products': '产品中心',
    'footer-company': '公司',
    'footer-about': '关于我们',
    'footer-contact': '联系我们',
    'footer-quote': '获取报价',
    'footer-contact-info': '联系方式',
    'footer-address': '湖南省醴陵市长庆街74号',
    'footer-rights': '© 2024 醴陵市中能贸易有限公司 版权所有',

    'contact-hero-title': '联系我们',
    'contact-hero-sub': '期待与您合作。获取报价、样品或咨询任何问题。',
    'contact-info-title': '联系方式',
    'contact-name': '廖宇欣',
    'contact-form-title': '发送询盘',
    'form-name': '您的姓名 *',
    'form-email': '电子邮箱 *',
    'form-phone': '电话 / WhatsApp',
    'form-company': '公司名称',
    'form-product': '感兴趣的产品 *',
    'form-select': '-- 请选择产品类别 --',
    'form-opt1': '电气绝缘子',
    'form-opt2': '液晶显示屏',
    'form-opt3': '摩托车活塞环',
    'form-opt4': '日用陶瓷',
    'form-opt5': '多品类 / 其他',
    'form-message': '留言内容 *',
    'form-submit': '发送询盘',
    'form-ph-name': '张三',
    'form-ph-email': 'john@company.com',
    'form-ph-phone': '+86 138 0000 0000',
    'form-ph-company': '您的公司名称',
    'form-ph-msg': '请告诉我们您的需求、数量、规格等信息...',

    'about-hero-title': '关于中能',
    'about-hero-sub': '十年值得信赖的国际贸易',
    'about-story-title': '我们的故事',
    'about-story-p1': '中能贸易创立于2010年，坐落于中国陶瓷之都——湖南醴陵。最初是一家专业陶瓷出口商，随后逐步将业务拓展至电气绝缘子、液晶显示模组和摩托车发动机零部件领域。',
    'about-story-p2': '如今，我们服务覆盖东南亚、中东、非洲、欧洲和美洲50多个国家和地区。我们的使命很简单：以合理的价格提供优质的产品，辅以诚信的服务。',
    'about-mission-title': '使命与价值观',
    'about-value1': '诚信为本 — 透明报价，坦诚沟通，准时交付。',
    'about-value2': '品质至上 — 每批货都经过检验，绝不降低标准。',
    'about-value3': '客户导向 — 根据您的市场和预算提供灵活方案。',
    'about-value4': '持续成长 — 每年拓展产品线，不断提升服务水平。',
    'about-milestones': '发展历程',
    'ms-2010': '公司在湖南醴陵成立，首批日用瓷出口。',
    'ms-2013': '拓展电气绝缘子业务，获得首批东南亚合同。',
    'ms-2016': '新增液晶显示模组产品线，出口国家突破20个。',
    'ms-2019': '成立摩托车配件事业部，服务国家超过40个。',
    'ms-2022': '通过ISO 9001认证，出口版图扩展至50+国家。',
    'ms-2024': '数字化转型——全新电商平台和AI驱动采购系统上线。',

    'prod-hero-insulators': '电气绝缘子',
    'prod-hero-insulators-sub': '用于输配电系统的高可靠性绝缘子',
    'prod-hero-lcd': '液晶显示模组',
    'prod-hero-lcd-sub': 'TFT、OLED、触摸屏，适用于工业和消费类电子产品',
    'prod-hero-piston': '摩托车活塞环',
    'prod-hero-piston-sub': '适用于50cc-1000cc发动机的精密活塞环 — OEM品质',
    'prod-hero-ceramic': '日用陶瓷',
    'prod-hero-ceramic-sub': '优质瓷器——杯、碗、餐具套装——全面OEM/ODM',

    'specs-title': '产品规格',
    'inquiry-title': '感兴趣？发送询盘',
    'inquiry-btn': '立即获取报价',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// ===== Header Scroll Effect =====
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== Mobile Nav =====
function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { links.classList.remove('open'); });
  });
}

// ===== Scroll Reveal =====
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// ===== Counter Animation =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const text = entry.target.textContent;
        const num = parseInt(text);
        if (isNaN(num)) return;
        const suffix = text.replace(/[\d,]/g, '');
        let current = 0;
        const step = Math.ceil(num / 40);
        const interval = setInterval(() => {
          current += step;
          if (current >= num) { current = num; clearInterval(interval); }
          entry.target.innerHTML = current + '<span>' + suffix + '</span>';
        }, 30);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ===== Form Handling =====
function initForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const company = data.get('company');
    const product = data.get('product');
    const message = data.get('message');

    const subject = encodeURIComponent(`Inquiry from ${name} - ${product}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nProduct Interest: ${product}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:yuxinliao175@gmail.com?subject=${subject}&body=${body}`;
  });
}

// ===== Init All =====
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  initHeader();
  initMobileNav();
  initReveal();
  initCounters();
  initSmoothScroll();
  initForm();

  // Lang button listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
});
