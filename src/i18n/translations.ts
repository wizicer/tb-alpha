export const languages = {
  ja: "日本語",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "ja";

export const translations = {
  ja: {
    // Navigation
    "nav.news": "ニュース",
    "nav.philosophy": "企業理念",
    "nav.services": "事業内容",
    "nav.about": "会社概要",
    "nav.contact": "お問い合わせ",

    // Hero
    "hero.sub": "AIの荒波が押し寄せる現代において、",
    "hero.main": "新時代の「ノアの箱舟」へ皆様を導く。",
    "hero.cta.services": "サービスを見る",
    "hero.cta.contact": "お問い合わせ",

    // News
    "news.title": "ニュース",
    "news.readMore": "続きを読む",
    "news.latestNews": "最新ニュース",
    "news.backToList": "ニュース一覧へ戻る",

    // Philosophy
    "philosophy.title": "企業理念",
    "philosophy.mission.title": "ミッション",
    "philosophy.mission.1":
      "日本と中国を繋ぐ架け橋のような存在となります。",
    "philosophy.mission.2":
      "商品・サービスを提供し続け、弊社の知恵と努力が社会の発展に寄与致します。",
    "philosophy.mission.3":
      "「確実な成長」 と 「高い収益性」を持つ会社を目指します。",
    "philosophy.greeting.title": "代表挨拶",
    "philosophy.greeting.heading":
      "ブロックチェーン技術で、日中間の架け橋となり、ビジネスの最適化を実現する。",
    "philosophy.greeting.p1":
      "私は中国で約5年間にわたりIT企業を経営し、数多くのブロックチェーンベースのソリューションを開発してまいりました。その中で強く感じたのは、ブロックチェーン技術が単なる暗号資産の枠を超え、サプライチェーンや実ビジネスの課題解決に絶大な力を発揮するという事実です。",
    "philosophy.greeting.p2":
      "日本は技術革新の分野で世界をリードしていますが、サイバーセキュリティやブロックチェーンの社会実装においては、まだ多くの可能性と課題を秘めています。TrainBit 合同会社は、これまで培ってきた専門知識と経験を最大限に活かし、お客様一人ひとりの状況に合わせてカスタマイズしたシステムを提供することで、ビジネスプロセスの最適化とDX推進を支援いたします。",
    "philosophy.greeting.p3":
      "そして、日本と中国双方の利益を高め、両国を繋ぐ強固な架け橋となるべく、全力を尽くしてまいります。 皆様の変わらぬご支援とご指導を賜りますよう、心よりお願い申し上げます。",
    "philosophy.greeting.sign": "TrainBit 合同会社 代表社員 崔璨",

    // Services
    "services.title": "事業内容",
    "services.products.title": "自社プロダクト",
    "services.deml.name": "DeML OS",
    "services.deml.stage": "現在 Pre-Alpha Stage",
    "services.deml.summary":
      "自律的な ML (Machine Learning) の実行、検証、決済、制約を行うためのインフラストラクチャであり、「Decentralized Machine Learning Operating System」として分散型 ML システムの境界を定義します。",
    "services.deml.scope.title": "注力領域 (In Scope)",
    "services.deml.scope.body":
      "非中央集権的スケジューリング下での ML 実行、信頼性の低い環境における ML の正確性担保、長期運用を支えるネイティブな価格設定および決済メカニズムの構築に焦点を当てています。",
    "services.deml.outscope.title": "対象外 (Out of Scope)",
    "services.deml.outscope.body":
      "決済手段のみを変更するシステム、純粋な CPU / GPU コンピューティング市場、AI 製品やエージェントアプリケーションは開発対象外として明確に切り分けています。",
    "services.deml.eval.title": "システム評価次元",
    "services.deml.eval.body":
      "実行 (Execution)、検証 (Verification)、インセンティブ (Incentive)、ガバナンス (Governance) の4つの主要な基準でシステムを構築および評価します。",
    "services.zkdaily.name": "zkDaily",
    "services.zkdaily.summary":
      "ゼロ知識証明 (Zero-Knowledge Proof) に関する最新ニュースを毎日お届けする専門情報プラットフォームです。",
    "services.zkdaily.value":
      "単なる情報の転載にとどまらず、業界の最新動向をリアルタイムで捉え、ニュースの核心を正確に抽出します。読者が技術や市場への影響を迅速に理解できるよう、価値ある深い洞察 (インサイト) を添えて分かりやすく解説します。",
    "services.solutions.title": "ソリューション＆コンサルティング",
    "services.blockchain.title": "ブロックチェーン基盤提供・開発",
    "services.blockchain.body":
      "企業に対してブロックチェーン技術の基盤提供を行います。スマートコントラクトの設計と実装サポートを行い、顧客の業務プロセスの自動化と透明化をサポートします。",
    "services.dx.title": "DX推進コンサルティング",
    "services.dx.body":
      "カスタマイズした技術コンサルティングを提供し、お客様のDX(デジタルトランスフォーメーション)を加速させます。",
    "services.education.title": "教育・研修サービス",
    "services.education.body":
      "ブロックチェーンアプリケーションに関する研修および実装サポートを行います。定期的に研修を開催し、日本国内での認知度や関心を高めてまいります。",

    // About
    "about.title": "会社概要",
    "about.info.title": "基本情報",
    "about.name": "TrainBit 合同会社",
    "about.name.label": "商号",
    "about.representative.label": "代表社員",
    "about.representative": "崔璨",
    "about.capital.label": "資本金",
    "about.capital": "500万円",
    "about.established.label": "設立年月日",
    "about.established": "準備中",
    "about.address.label": "所在地",
    "about.address": "準備中",
    "about.phone.label": "電話番号",
    "about.phone": "準備中",
    "about.email.label": "メールアドレス",
    "about.email": "準備中",
    "about.hours.label": "営業時間",
    "about.hours": "10:00〜18:00",
    "about.holidays.label": "定休日",
    "about.holidays": "土曜日、日曜日、祝日",
    "about.purpose.label": "事業目的",
    "about.purpose.1": "インターネット関連サービス業",
    "about.purpose.2": "情報サービス業",
    "about.purpose.3":
      "ブロックチェーンに関するシステムの企画、開発、制作及び販売",
    "about.purpose.4": "暗号資産その他電子的価値情報に関する業務",
    "about.purpose.5": "著作権の管理及び著作物の利用の開発に関する事業",
    "about.purpose.6":
      "イベント・研修会・講演会・セミナーの企画、制作および運営",
    "about.purpose.7": "前各号に付帯する一切の事業",

    // Contact
    "contact.title": "お問い合わせ",
    "contact.name": "お名前",
    "contact.name.required": "（必須）",
    "contact.company": "貴社名",
    "contact.email": "メールアドレス",
    "contact.phone": "電話番号",
    "contact.message": "お問い合わせ内容",
    "contact.privacy": "プライバシーポリシーに同意する",
    "contact.privacy.required": "（必須）",
    "contact.submit": "送信",
    "contact.privacy.link": "プライバシーポリシー",

    // Privacy Policy
    "privacy.title": "プライバシーポリシー",
    "privacy.intro":
      "TrainBit 合同会社（以下「当社」といいます）は、お客様の個人情報保護の重要性を深く認識し、個人情報の保護に関する法律（個人情報保護法）をはじめとする関連法令を遵守するとともに、以下のプライバシーポリシーに従い、適切な取扱いおよび保護に努めます。",
    "privacy.s1.title": "1. 取得する個人情報",
    "privacy.s1.body":
      "当社は、当ウェブサイトのお問い合わせフォームを通じて、以下の個人情報を取得することがあります。",
    "privacy.s1.items": "お名前 / 貴社名 / メールアドレス / 電話番号 / お問い合わせ内容に含まれる個人情報",
    "privacy.s2.title": "2. 個人情報の利用目的",
    "privacy.s2.body":
      "当社は、取得した個人情報を以下の目的のために利用いたします。",
    "privacy.s2.items":
      "お問い合わせに対する回答およびご連絡のため / 当社の提供するサービス、および関連情報のご案内のため / サービスの改善、品質向上のための参考資料として",
    "privacy.s3.title": "3. 個人情報の第三者提供",
    "privacy.s3.body":
      "当社は、次に掲げる場合を除き、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはいたしません。",
    "privacy.s3.items":
      "法令に基づく場合 / 人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき / 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき",
    "privacy.s4.title": "4. 個人情報の管理",
    "privacy.s4.body":
      "当社は、個人情報の漏えい、滅失、毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。",
    "privacy.s5.title": "5. 個人情報の開示、訂正、追加、削除、利用停止等",
    "privacy.s5.body":
      "当社は、ご本人から個人情報の開示、訂正、追加、削除、利用停止等を求められた場合には、ご本人であることを確認のうえ、法令に従い速やかに対応いたします。",
    "privacy.s6.title": "6. プライバシーポリシーの変更",
    "privacy.s6.body":
      "当社は、法令の改正や事業内容の変更等により、本プライバシーポリシーの内容を適宜見直し、必要に応じて変更することがあります。変更したプライバシーポリシーは、本ウェブサイトに掲載した時点で効力を生じるものとします。",
    "privacy.s7.title": "7. お問い合わせ窓口",
    "privacy.s7.body":
      "本プライバシーポリシーに関するお問い合わせ、および個人情報の取扱いに関するご相談窓口は以下の通りです。",
    "privacy.s7.company": "TrainBit 合同会社",
    "privacy.s7.address": "所在地: 準備中",
    "privacy.s7.email": "メールアドレス: 準備中",

    // Footer
    "footer.copyright": "© 2026 TrainBit 合同会社 無断転載を禁じます。",
    "footer.privacy": "プライバシーポリシー",

    // Theme
    "theme.light": "ライト",
    "theme.dark": "ダーク",

    // Common
    "common.visitSite": "サイトを見る",
    "common.learnMore": "詳しく見る",
  },
  en: {
    // Navigation
    "nav.news": "News",
    "nav.philosophy": "Philosophy",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.sub": "In an era swept by the waves of AI,",
    "hero.main": 'We guide everyone to a new era\'s "Noah\'s Ark."',
    "hero.cta.services": "Our Services",
    "hero.cta.contact": "Contact Us",

    // News
    "news.title": "News",
    "news.readMore": "Read More",
    "news.latestNews": "Latest News",
    "news.backToList": "Back to News",

    // Philosophy
    "philosophy.title": "Corporate Philosophy",
    "philosophy.mission.title": "Mission",
    "philosophy.mission.1":
      "We strive to be a bridge connecting Japan and China.",
    "philosophy.mission.2":
      "We continue to provide products and services, contributing our wisdom and efforts to the development of society.",
    "philosophy.mission.3":
      'We aim to be a company with "steady growth" and "high profitability."',
    "philosophy.greeting.title": "Message from the CEO",
    "philosophy.greeting.heading":
      "Bridging Japan and China through blockchain technology to optimize business.",
    "philosophy.greeting.p1":
      "I managed an IT company in China for about 5 years, developing numerous blockchain-based solutions. Through this experience, I strongly realized that blockchain technology goes beyond mere cryptocurrency, demonstrating tremendous power in solving supply chain and real business challenges.",
    "philosophy.greeting.p2":
      "Japan leads the world in technological innovation, but there are still many possibilities and challenges in cybersecurity and blockchain social implementation. TrainBit LLC maximizes the expertise and experience we have built to provide customized systems tailored to each customer's situation, supporting business process optimization and DX promotion.",
    "philosophy.greeting.p3":
      "We will do our utmost to enhance the interests of both Japan and China, serving as a strong bridge connecting the two countries. We sincerely ask for your continued support and guidance.",
    "philosophy.greeting.sign": "TrainBit LLC CEO Cui Can",

    // Services
    "services.title": "Services",
    "services.products.title": "Our Products",
    "services.deml.name": "DeML OS",
    "services.deml.stage": "Currently Pre-Alpha Stage",
    "services.deml.summary":
      'An infrastructure for autonomous ML (Machine Learning) execution, verification, settlement, and constraints, defining the boundaries of decentralized ML systems as a "Decentralized Machine Learning Operating System."',
    "services.deml.scope.title": "In Scope",
    "services.deml.scope.body":
      "Focused on ML execution under decentralized scheduling, ensuring ML accuracy in low-trust environments, and building native pricing and settlement mechanisms for long-term operation.",
    "services.deml.outscope.title": "Out of Scope",
    "services.deml.outscope.body":
      "Systems that only change payment methods, pure CPU/GPU computing markets, and AI products or agent applications are clearly excluded from development.",
    "services.deml.eval.title": "System Evaluation Dimensions",
    "services.deml.eval.body":
      "The system is built and evaluated based on four key criteria: Execution, Verification, Incentive, and Governance.",
    "services.zkdaily.name": "zkDaily",
    "services.zkdaily.summary":
      "A specialized information platform that delivers the latest news on Zero-Knowledge Proof every day.",
    "services.zkdaily.value":
      "Going beyond simple news aggregation, we capture the latest industry trends in real-time, accurately extracting the core of each story. We provide easy-to-understand analysis with valuable insights to help readers quickly understand the impact on technology and markets.",
    "services.solutions.title": "Solutions & Consulting",
    "services.blockchain.title":
      "Blockchain Infrastructure Development",
    "services.blockchain.body":
      "We provide blockchain technology infrastructure for enterprises. We support smart contract design and implementation, helping automate and increase transparency in customer business processes.",
    "services.dx.title": "DX Promotion Consulting",
    "services.dx.body":
      "We provide customized technology consulting to accelerate your Digital Transformation (DX).",
    "services.education.title": "Education & Training Services",
    "services.education.body":
      "We provide training and implementation support for blockchain applications. We regularly hold training sessions to raise awareness and interest in Japan.",

    // About
    "about.title": "Company Profile",
    "about.info.title": "Basic Information",
    "about.name": "TrainBit LLC",
    "about.name.label": "Company Name",
    "about.representative.label": "Representative",
    "about.representative": "Cui Can",
    "about.capital.label": "Capital",
    "about.capital": "5,000,000 JPY",
    "about.established.label": "Established",
    "about.established": "In Preparation",
    "about.address.label": "Address",
    "about.address": "In Preparation",
    "about.phone.label": "Phone",
    "about.phone": "In Preparation",
    "about.email.label": "Email",
    "about.email": "In Preparation",
    "about.hours.label": "Business Hours",
    "about.hours": "10:00 - 18:00",
    "about.holidays.label": "Closed",
    "about.holidays": "Saturdays, Sundays, and National Holidays",
    "about.purpose.label": "Business Purposes",
    "about.purpose.1": "Internet-related services",
    "about.purpose.2": "Information services",
    "about.purpose.3":
      "Planning, development, production, and sales of blockchain-related systems",
    "about.purpose.4":
      "Operations related to crypto assets and other electronic value information",
    "about.purpose.5":
      "Copyright management and development of copyrighted works utilization",
    "about.purpose.6":
      "Planning, production, and operation of events, workshops, lectures, and seminars",
    "about.purpose.7": "All businesses incidental to the preceding items",

    // Contact
    "contact.title": "Contact Us",
    "contact.name": "Name",
    "contact.name.required": " (Required)",
    "contact.company": "Company Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Message",
    "contact.privacy": "I agree to the Privacy Policy",
    "contact.privacy.required": " (Required)",
    "contact.submit": "Submit",
    "contact.privacy.link": "Privacy Policy",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.intro":
      'TrainBit LLC (hereinafter referred to as "the Company") deeply recognizes the importance of protecting customers\' personal information and complies with the Act on the Protection of Personal Information and other related laws, striving for appropriate handling and protection in accordance with the following Privacy Policy.',
    "privacy.s1.title": "1. Personal Information We Collect",
    "privacy.s1.body":
      "The Company may collect the following personal information through the inquiry form on this website.",
    "privacy.s1.items":
      "Name / Company name / Email address / Phone number / Personal information included in inquiries",
    "privacy.s2.title": "2. Purpose of Use of Personal Information",
    "privacy.s2.body":
      "The Company uses the collected personal information for the following purposes.",
    "privacy.s2.items":
      "To respond to inquiries and contact you / To provide information about our services and related information / As reference material for service improvement and quality enhancement",
    "privacy.s3.title": "3. Provision of Personal Information to Third Parties",
    "privacy.s3.body":
      "The Company will not provide personal information to third parties without prior consent, except in the following cases.",
    "privacy.s3.items":
      "When required by law / When necessary for the protection of life, body, or property and it is difficult to obtain consent / When cooperation is needed for government agencies to perform legally mandated duties and obtaining consent could impede such duties",
    "privacy.s4.title": "4. Management of Personal Information",
    "privacy.s4.body":
      "The Company takes necessary and appropriate measures for the secure management of personal information to prevent leakage, loss, and damage.",
    "privacy.s5.title":
      "5. Disclosure, Correction, Deletion, and Suspension of Use",
    "privacy.s5.body":
      "When requested by the individual, the Company will verify their identity and promptly respond in accordance with the law.",
    "privacy.s6.title": "6. Changes to Privacy Policy",
    "privacy.s6.body":
      "The Company may review and change this Privacy Policy as necessary due to changes in laws or business content. The revised Privacy Policy takes effect when posted on this website.",
    "privacy.s7.title": "7. Contact Information",
    "privacy.s7.body":
      "For inquiries regarding this Privacy Policy and the handling of personal information, please contact:",
    "privacy.s7.company": "TrainBit LLC",
    "privacy.s7.address": "Address: In Preparation",
    "privacy.s7.email": "Email: In Preparation",

    // Footer
    "footer.copyright": "© 2026 TrainBit LLC. All rights reserved.",
    "footer.privacy": "Privacy Policy",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",

    // Common
    "common.visitSite": "Visit Site",
    "common.learnMore": "Learn More",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["ja"];

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
