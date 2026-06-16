export const languages = {
  ja: "日本語",
  en: "English",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "ja";

const zhCN = {
  "nav.news": "新闻",
  "nav.philosophy": "企业理念",
  "nav.services": "业务内容",
  "nav.about": "公司概要",
  "nav.contact": "联系我们",
  "hero.eyebrow": "AI 时代的下一代安全。",
  "hero.sub": "守护 AI 时代企业的数字资产与隐私。",
  "hero.main": "用下一代安全，守护贵公司的未来。",
  "hero.desc": "核心团队拥有深厚的国际背景与全球视野，分布于东京及海外多个技术据点。我们结合业界顶尖的学术网络与下一代密码学（ZK）技术，提供高标准、标准化的代码审计与伴随式安全支持。",
  "hero.cta.consult": "预约线上初次咨询（日/英/中对应）",
  "hero.cta.whitepaper": "下载服务标准白皮书",
  "hero.cta.services": "查看服务",
  "hero.cta.contact": "联系我们",
  "news.title": "新闻",
  "news.readMore": "继续阅读",
  "news.latestNews": "最新新闻",
  "news.backToList": "返回新闻列表",
  "news.empty": "暂无新闻。",
  "philosophy.title": "企业理念",
  "philosophy.mission.title": "使命",
  "philosophy.mission.1": "成为连接日本与中国的桥梁。",
  "philosophy.mission.2": "持续提供产品与服务，以我们的智慧和努力为社会发展作出贡献。",
  "philosophy.mission.3": "致力于成为兼具“稳健成长”与“高收益性”的公司。",
  "philosophy.greeting.title": "代表致辞",
  "philosophy.greeting.heading": "以区块链技术连接日本与中国，推动业务优化。",
  "philosophy.greeting.p1": "我曾在中国经营 IT 企业约 5 年，开发过众多基于区块链的解决方案。在这一过程中，我深切体会到，区块链技术并不只属于加密资产领域，它在供应链和真实商业问题的解决中同样具备巨大力量。",
  "philosophy.greeting.p2": "日本在技术创新领域处于世界领先地位，但在网络安全与区块链社会落地方面，仍蕴含许多可能性与课题。TrainBit 合同会社将最大限度发挥积累的专业知识与经验，为每一位客户提供贴合实际情况的定制化系统，支持业务流程优化与 DX 推进。",
  "philosophy.greeting.p3": "我们将全力提升日本与中国双方的利益，成为连接两国的坚实桥梁。衷心希望继续得到各位的支持与指导。",
  "philosophy.greeting.sign": "TrainBit 合同会社 代表社员 Cui Can",
  "strengths.title": "我们的优势",
  "strengths.1.title": "全球技术视角与学术网络",
  "strengths.1.body": "团队拥有广泛的跨国技术网络与国际背景，在 AI 应用安全、Web3 智能合约、ZK（零知识证明）隐私技术方面具备丰富的国际项目经验，并拥有深厚的产学研资源。",
  "strengths.2.title": "标准化且顺畅的协作",
  "strengths.2.body": "业务流程高度标准化，并提供完整的书面报告（日/英双语）。我们降低复杂口头沟通成本，高效交付高质量成果。",
  "strengths.3.title": "日本本地安心窗口",
  "strengths.3.body": "东京总部负责人直接处理商务与项目管理。日本国内的法律合规、合同与结算都可以安心交由我们对应。",
  "services.title": "服务内容",
  "services.1.name": "AI 应用与隐私安全审计",
  "services.1.en": "AI 与隐私审计",
  "services.1.target.label": "对象",
  "services.1.target.body": "正在导入生成式 AI，并担心企业机密或源代码泄露的企业。",
  "services.1.format.label": "形式",
  "services.1.format.body": "针对企业 AI 使用场景进行合规评估、数据泄露防护、权限管理标准化审计。",
  "services.2.name": "Web3 与智能合约代码审计",
  "services.2.en": "Web3 与智能合约审计",
  "services.2.target.label": "对象",
  "services.2.target.body": "区块链项目，以及计划发行或引入数字资产的金融与创新企业。",
  "services.2.format.label": "形式",
  "services.2.format.body": "活用 ZK（零知识证明）等前沿密码学技术，提供最高安全级别的智能合约与隐私资产审计。",
  "services.3.name": "伴随式安全情报订阅",
  "services.3.en": "全球安全订阅",
  "services.3.target.label": "对象",
  "services.3.target.body": "需要长期技术顾问支持，或希望追踪最新安全威胁的企业。",
  "services.3.format.label": "形式",
  "services.3.format.body": "月度订阅。每月提供全球最新 AI/Web3 漏洞情报与安全案例解读（日文 PDF），并附固定时段的在线（Slack/Teams）技术 Q&A 支持。",
  "workflow.title": "服务流程",
  "workflow.1.title": "线上咨询",
  "workflow.1.body": "通过官方网站表单提交需求。支持以书面形式确认信息。",
  "workflow.2.title": "需求确认",
  "workflow.2.body": "通过一对一线上会议明确审计范围（日/英/中三语对应）。",
  "workflow.3.title": "技术实施",
  "workflow.3.body": "由国际技术中心高效、封闭地执行代码安全审计与评估。",
  "workflow.4.title": "报告交付",
  "workflow.4.body": "交付详细的日/英修正建议报告，并免费提供一次复测服务。",
  "company.title": "公司概要",
  "company.structure.label": "业务体制",
  "company.hq.label": "【总部・窗口】",
  "company.hq.body": "日本・东京（负责商务对应、合同签署、项目管理）",
  "company.rd.label": "【研发・技术中心】",
  "company.rd.body": "海外全球技术中心（负责漏洞研究、代码审计、密码学技术）",
  "company.advisors.label": "【学术顾问网络】",
  "company.advisors.body": "与国际网络安全、密码学领域的特邀学术专家合作",
  "about.title": "公司概要",
  "about.info.title": "基本信息",
  "about.name": "TrainBit 合同会社",
  "about.name.label": "商号",
  "about.representative.label": "代表社员",
  "about.representative": "Cui Can",
  "about.capital.label": "资本金",
  "about.capital": "5,000,000 日元",
  "about.established.label": "成立",
  "about.established": "令和8年6月",
  "about.address.label": "地址",
  "about.address": "東京都新宿区早稲田鶴巻町520番地10新宿早稲田レーベル126号室",
  "about.email.label": "邮箱",
  "about.email": "hello@trainbit.co.jp",
  "about.hours.label": "营业时间",
  "about.hours": "10:00 - 18:00",
  "about.holidays.label": "休息日",
  "about.holidays": "周六、周日及日本法定节假日",
  "about.purpose.label": "经营目的",
  "about.purpose.1": "互联网相关业务的策划、咨询与营销",
  "about.purpose.2": "IT 咨询",
  "about.purpose.3": "人工智能（AI）技术应用咨询及相关软件销售",
  "about.purpose.4": "机器学习（ML）模型应用咨询",
  "about.purpose.5": "Web3 业务的策划、咨询与营销",
  "about.purpose.6": "活动、研讨会、讲座与培训的策划运营，以及面向会员的出版物发行",
  "about.purpose.7": "与上述各项附带相关的一切业务",
  "contact.title": "联系我们",
  "contact.intro": "为确保技术评估的准确性，所有初次咨询均完全在线进行（邮件）。欢迎使用日语、英语或中文联系我们。",
  "contact.name": "联系人",
  "contact.name.required": "（必填）",
  "contact.company": "公司名称",
  "contact.email": "邮箱地址",
  "contact.email.required": "（必填）",
  "contact.phone": "电话号码",
  "contact.category": "咨询类别",
  "contact.category.ai": "AI 咨询",
  "contact.category.web3": "Web3 咨询",
  "contact.category.cryptography": "密码学（ZK）咨询",
  "contact.category.membership": "会员订阅",
  "contact.category.other": "其他",
  "contact.message": "具体需求",
  "contact.privacy": "我同意隐私政策",
  "contact.privacy.required": "（必填）",
  "contact.submit": "提交咨询",
  "contact.privacy.link": "隐私政策",
  "contact.success": "您的和询已成功发送！我们会尽快与您联系。",
  "contact.error": "暂时无法连接，请保留好信息稍后再试。",
  "contact.draft.load": "载入上次已发送的内容",
  "contact.draft.hint": "上次发送的内容可以载入，",
  "privacy.title": "隐私政策",
  "privacy.intro": "TrainBit 合同会社（以下简称“本公司”）深刻认识到保护客户个人信息的重要性，遵守个人信息保护相关法律法规，并根据以下隐私政策努力进行适当处理与保护。",
  "privacy.s1.title": "1. 收集的个人信息",
  "privacy.s1.body": "本公司可能通过本网站的咨询表单收集以下个人信息。",
  "privacy.s1.items": "姓名 / 公司名称 / 邮箱地址 / 电话号码 / 咨询内容中包含的个人信息",
  "privacy.s2.title": "2. 个人信息的使用目的",
  "privacy.s2.body": "本公司将收集到的个人信息用于以下目的。",
  "privacy.s2.items": "回复咨询与联系 / 提供本公司服务及相关信息 / 作为服务改善与质量提升的参考资料",
  "privacy.s3.title": "3. 向第三方提供个人信息",
  "privacy.s3.body": "除以下情况外，本公司不会在未事先取得客户同意的情况下向第三方提供个人信息。",
  "privacy.s3.items": "基于法律法规的情况 / 为保护人的生命、身体或财产而有必要且难以取得本人同意的情况 / 国家机关或地方公共团体等依法执行事务需要协助，且取得本人同意可能妨碍该事务执行的情况",
  "privacy.s4.title": "4. 个人信息管理",
  "privacy.s4.body": "本公司将采取必要且适当的措施，安全管理个人信息，防止泄露、灭失或损毁。",
  "privacy.s5.title": "5. 公开、更正、追加、删除及停止使用等",
  "privacy.s5.body": "当本人请求公开、更正、追加、删除或停止使用个人信息时，本公司将在确认本人身份后，依照法律法规迅速处理。",
  "privacy.s6.title": "6. 隐私政策的变更",
  "privacy.s6.body": "本公司可能因法律法规修订或业务内容变更等原因，适时审查并必要时变更本隐私政策。变更后的隐私政策自刊登于本网站时起生效。",
  "privacy.s7.title": "7. 联系窗口",
  "privacy.s7.body": "关于本隐私政策以及个人信息处理的咨询窗口如下。",
  "privacy.s7.company": "TrainBit 合同会社",
  "privacy.s7.address": "地址：東京都新宿区早稲田鶴巻町520番地10新宿早稲田レーベル126号室",
  "privacy.s7.email": "邮箱地址：",
  "footer.copyright": "© 2026 TrainBit 合同会社。保留所有权利。",
  "footer.privacy": "隐私政策",
  "theme.light": "浅色",
  "theme.dark": "深色",
  "common.visitSite": "查看网站",
  "common.learnMore": "了解更多",
} as const;

function toTraditionalText(value: string): string {
  const map: Record<string, string> = {
    "负责": "負責", "联系": "聯繫", "网站": "網站", "审查": "審查", "选择": "選擇", "语言": "語言",
    "简": "簡", "体": "體", "汉": "漢", "语": "語", "时": "時", "闻": "聞", "业": "業", "务": "務", "贵": "貴", "来": "來",
    "内": "內", "联": "聯", "们": "們", "优": "優", "势": "勢", "术": "術", "际": "際", "视": "視",
    "网": "網", "络": "絡", "应": "應", "隐": "隱", "审": "審", "计": "計", "对": "對", "导": "導", "护": "護",
    "担": "擔", "忧": "憂", "泄": "洩", "评": "評", "数": "數", "据": "據", "权": "權", "标": "標",
    "准": "準", "区": "區", "块": "塊", "链": "鏈", "与": "與", "约": "約", "码": "碼", "发": "發",
    "产": "產", "资": "資", "证": "證", "级": "級", "别": "別", "订": "訂", "阅": "閱", "长": "長", "无": "無",
    "顾": "顧", "问": "問", "踪": "蹤", "胁": "脅", "报": "報", "读": "讀", "线": "線", "询": "詢",
    "过": "過", "单": "單", "确": "確", "认": "認", "范": "範", "围": "圍", "执": "執", "闭": "閉", "桥": "橋",
    "详": "詳", "议": "議", "测": "測", "况": "況", "总": "總", "签": "簽", "项": "項", "门": "門",
    "会": "會", "称": "稱", "号": "號", "额": "額", "话": "話", "邮": "郵", "营": "營", "间": "間",
    "经": "經", "销": "銷", "习": "習", "讲": "講", "训": "訓", "布": "佈", "类": "類", "须": "須",
    "诉": "訴", "个": "個", "户": "戶", "关": "關", "规": "規", "处": "處", "为": "為",
    "从": "從", "复": "覆", "给": "給", "难": "難", "获": "獲", "国": "國", "团": "團", "协": "協",
    "碍": "礙", "灭": "滅", "损": "損", "删": "刪", "变": "變", "开": "開", "浅": "淺", "蓝": "藍", "云": "雲",
    "续": "續", "献": "獻", "稳": "穩", "进": "進", "广": "廣", "丰": "豐", "验": "驗", "书": "書",
  };

  return Object.entries(map).reduce((text, [from, to]) => text.replaceAll(from, to), value);
}

function toTraditionalTranslations<T extends Record<string, string>>(values: T): T {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, toTraditionalText(value)])
  ) as T;
}

export const translations = {
  ja: {
    // Navigation
    "nav.news": "ニュース",
    "nav.philosophy": "企業理念",
    "nav.services": "事業内容",
    "nav.about": "会社概要",
    "nav.contact": "お問い合わせ",

    // Hero
    "hero.eyebrow": "Next-Gen Security for the AI Era.",
    "hero.sub": "AIの時代を生き抜く企業の、デジタル資産とプライバシーを守る。",
    "hero.main": "次世代セキュリティで、貴社の未来を守る。",
    "hero.desc": "核心チームは深い国際的背景とグローバルな視野を持ち、東京および海外の複数の技術拠点に分散しています。業界トップクラスの学術ネットワークと次世代暗号学（ZK）技術を組み合わせ、高水準・標準化されたコード監査と伴走型セキュリティ支援を提供します。",
    "hero.cta.consult": "オンライン初回相談を予約する（日/英/中 対応）",
    "hero.cta.whitepaper": "サービス基準白書をダウンロード",
    "hero.cta.services": "サービスを見る",
    "hero.cta.contact": "お問い合わせ",

    // News
    "news.title": "ニュース",
    "news.readMore": "続きを読む",
    "news.latestNews": "最新ニュース",
    "news.backToList": "ニュース一覧へ戻る",
    "news.empty": "ニュースはまだありません。",

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
    "philosophy.greeting.sign": "TrainBit 合同会社 代表社員 サイ　サン",

    // Strengths
    "strengths.title": "私たちの強み",
    "strengths.1.title": "グローバルな技術視点と学術ネットワーク",
    "strengths.1.body": "チームは広範なトランスナショナルな技術ネットワークと国際的なバックグラウンドを持ちます。AIアプリケーションセキュリティ、Web3スマートコントラクト、ZK（ゼロ知識証明）プライバシー技術において豊富な国際プロジェクト経験を持ち、深い業界学術人脈を誇ります。",
    "strengths.2.title": "標準化されたシームレスな連携",
    "strengths.2.body": "業務プロセスは高度に標準化されており、完全な書面レポート（日/英バイリンガル）を提供します。複雑な口頭コミュニケーションコストを削減し、高品質かつ効率的な成果を実現します。",
    "strengths.3.title": "日本国内での安心窓口",
    "strengths.3.body": "東京本社の担当者が直接商務・プロジェクト管理を対応。日本国内の法的コンプライアンスと決済を安心してお任せいただけます。",

    // Services
    "services.title": "サービス内容",
    "services.1.name": "AIアプリケーション・プライバシーセキュリティ監査",
    "services.1.en": "AI & Privacy Audit",
    "services.1.target.label": "対象",
    "services.1.target.body": "生成AIを導入中・企業機密やソースコードの漏洩を懸念している企業。",
    "services.1.format.label": "形式",
    "services.1.format.body": "企業のAI利用シナリオに対するコンプライアンス評価、データ漏洩防止、権限管理標準化監査。",
    "services.2.name": "Web3・スマートコントラクトコード監査",
    "services.2.en": "Web3 & Smart Contract Audit",
    "services.2.target.label": "対象",
    "services.2.target.body": "ブロックチェーンプロジェクト、デジタル資産の発行・導入を計画している金融・イノベーション企業。",
    "services.2.format.label": "形式",
    "services.2.format.body": "ZK（ゼロ知識証明）等の最先端暗号学技術を活用した、最高セキュリティレベルのスマートコントラクト・プライバシー資産監査。",
    "services.3.name": "伴走型セキュリティ情報サブスクリプション",
    "services.3.en": "Global Security Subscription",
    "services.3.target.label": "対象",
    "services.3.target.body": "長期的な技術顧問支援が必要な企業、最新セキュリティ脅威を追跡したい企業。",
    "services.3.format.label": "形式",
    "services.3.format.body": "月次サブスクリプション。毎月グローバルな最新AI/Web3脆弱性情報、セキュリティ事例解説（日本語PDF）を提供。固定時間のオンライン（Slack/Teams）技術Q&Aサポート付き。",

    // Workflow
    "workflow.title": "サービスフロー",
    "workflow.1.title": "オンライン問い合わせ",
    "workflow.1.body": "公式サイトのフォームからご要望を送信。書面による情報確認に対応。",
    "workflow.2.title": "要件確認",
    "workflow.2.body": "1対1のオンライン会議で監査範囲を明確化（日/英/中 三言語対応）。",
    "workflow.3.title": "技術実施",
    "workflow.3.body": "国際技術センターによる効率的・クローズドなコードセキュリティ監査・評価。",
    "workflow.4.title": "レポート納品",
    "workflow.4.body": "詳細な日/英修正提案レポートを納品。無料の再テストサービスを1回提供。",

    // Company
    "company.title": "会社概要",
    "company.structure.label": "業務体制",
    "company.hq.label": "【本社・窓口】",
    "company.hq.body": "日本・東京（商務対応・契約締結・プロジェクト管理担当）",
    "company.rd.label": "【研究開発・技術センター】",
    "company.rd.body": "海外グローバル技術センター（脆弱性研究・コード監査・暗号学技術担当）",
    "company.advisors.label": "【学術顧問ネットワーク】",
    "company.advisors.body": "国際サイバーセキュリティ・暗号学分野の特別学術専門家と連携",

    // Legacy services keys (kept for ServicesPage backward compat)
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
    "about.representative": "サイ　サン",
    "about.capital.label": "資本金",
    "about.capital": "500万円",
    "about.established.label": "設立年月日",
    "about.established": "令和8年6月",
    "about.address.label": "所在地",
    "about.address": "東京都新宿区早稲田鶴巻町520番地10新宿早稲田レーベル126号室",
    "about.email.label": "メールアドレス",
    "about.email": "hello@trainbit.co.jp",
    "about.hours.label": "営業時間",
    "about.hours": "10:00〜18:00",
    "about.holidays.label": "定休日",
    "about.holidays": "土曜日、日曜日、祝日",
    "about.purpose.label": "事業目的",
    "about.purpose.1": "インターネット関連ビジネスの企画、コンサルティング及びマーケティング業",
    "about.purpose.2": "IT コンサルティング業",
    "about.purpose.3": "人工知能（AI）技術の活用に関するコンサルティング及び関連ソフトウェアの販売業",
    "about.purpose.4": "機械学習（ML）モデルの活用に関するコンサルティング業",
    "about.purpose.5": "Web3 ビジネスの企画、コンサルティング及びマーケティング業",
    "about.purpose.6": "イベント・研修会・講演会・セミナーの企画、運営並びに会員向け出版物の発行",
    "about.purpose.7": "前各号に附帯する一切の事業",

    // Contact
    "contact.title": "お問い合わせ",
    "contact.intro": "技術評価の精度を保つため、初回のご相談はすべてオンライン（メール）で対応しております。日本語・英語・中国語でお気軽にお問い合わせください。",
    "contact.name": "担当者名",
    "contact.name.required": "（必須）",
    "contact.company": "会社名",
    "contact.email": "メールアドレス",
    "contact.email.required": "（必須）",
    "contact.phone": "電話番号",
    "contact.category": "お問い合わせ分類",
    "contact.category.ai": "AI コンサルティング",
    "contact.category.web3": "Web3 コンサルティング",
    "contact.category.cryptography": "暗号技術（ZK）コンサルティング",
    "contact.category.membership": "会員サブスクリプション",
    "contact.category.other": "その他",
    "contact.message": "具体的なご要望",
    "contact.privacy": "プライバシーポリシーに同意する",
    "contact.privacy.required": "（必須）",
    "contact.submit": "相談を送信する",
    "contact.privacy.link": "プライバシーポリシー",
    "contact.success": "お問い合わせを送信しました。なるべく早くご連絡いたします。",
    "contact.error": "送信に失敗しました。内容を保存してしばらくたってから再度お試しください。",
    "contact.draft.load": "前回送信内容を読み込む",
    "contact.draft.hint": "以前送信した内容を読み込む場合は：",

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
    "privacy.s7.address": "所在地: 東京都新宿区早稲田鶴巻町520番地10新宿早稲田レーベル126号室",
    "privacy.s7.email": "メールアドレス: ",

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
    "hero.eyebrow": "Next-Gen Security for the AI Era.",
    "hero.sub": "Protecting enterprise digital assets and privacy in the age of AI.",
    "hero.main": "Next-Generation Security for the AI Era.",
    "hero.desc": "Our core team brings deep international expertise and global perspective, operating from Tokyo and multiple overseas technology hubs. We combine world-class academic networks with next-generation cryptography (ZK) to deliver high-standard, standardized code audits and ongoing security support.",
    "hero.cta.consult": "Book a Free Consultation (EN / JA / ZH)",
    "hero.cta.whitepaper": "Download Service Standards Whitepaper",
    "hero.cta.services": "Our Services",
    "hero.cta.contact": "Contact Us",

    // News
    "news.title": "News",
    "news.readMore": "Read More",
    "news.latestNews": "Latest News",
    "news.backToList": "Back to News",
    "news.empty": "No news articles yet.",

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

    // Strengths
    "strengths.title": "Our Strengths",
    "strengths.1.title": "Global Technical Perspective & Academic Network",
    "strengths.1.body": "Our team brings extensive transnational networks and international backgrounds. We have rich cross-border project experience in AI application security, Web3 smart contracts, and ZK (Zero-Knowledge Proof) privacy technology, backed by deep academic industry connections.",
    "strengths.2.title": "Standardized & Seamless Integration",
    "strengths.2.body": "Highly standardized workflows with comprehensive written reports (bilingual JP/EN). We reduce complex verbal communication overhead, delivering high-quality results efficiently.",
    "strengths.3.title": "Japan-Local Peace of Mind",
    "strengths.3.body": "Our Tokyo headquarters representative directly handles business and project management, ensuring compliance with Japanese law and peace of mind on contracts and settlements.",

    // Services
    "services.title": "Services",
    "services.1.name": "AI Application & Privacy Security Audit",
    "services.1.en": "AI & Privacy Audit",
    "services.1.target.label": "Target",
    "services.1.target.body": "Enterprises adopting generative AI who are concerned about corporate confidential information or source code leakage.",
    "services.1.format.label": "Format",
    "services.1.format.body": "Compliance evaluation, data loss prevention, and access management standardization audit for enterprise AI usage scenarios.",
    "services.2.name": "Web3 & Smart Contract Code Audit",
    "services.2.en": "Web3 & Smart Contract Audit",
    "services.2.target.label": "Target",
    "services.2.target.body": "Blockchain projects and financial/innovation enterprises planning to issue or introduce digital assets.",
    "services.2.format.label": "Format",
    "services.2.format.body": "Highest-security smart contract and privacy asset audits leveraging cutting-edge cryptographic technologies such as ZK (Zero-Knowledge Proof).",
    "services.3.name": "Ongoing Security Intelligence Subscription",
    "services.3.en": "Global Security Subscription",
    "services.3.target.label": "Target",
    "services.3.target.body": "Enterprises needing long-term technical advisory support and tracking of cutting-edge security threats.",
    "services.3.format.label": "Format",
    "services.3.format.body": "Monthly subscription. Regular global AI/Web3 vulnerability intelligence reports, security case analyses (Japanese PDF), plus fixed-hours online (Slack/Teams) technical Q&A support.",

    // Workflow
    "workflow.title": "How It Works",
    "workflow.1.title": "Online Inquiry",
    "workflow.1.body": "Submit your requirements via the official website form. Written information confirmation supported.",
    "workflow.2.title": "Requirements Confirmation",
    "workflow.2.body": "1-on-1 online meeting to clarify the audit scope (EN / JA / ZH trilingual support).",
    "workflow.3.title": "Technical Execution",
    "workflow.3.body": "Efficient, closed-door code security audit and assessment by our international technology centers.",
    "workflow.4.title": "Report Delivery",
    "workflow.4.body": "Delivery of detailed EN/JA remediation report with one complimentary re-test included.",

    // Company
    "company.title": "Company Profile",
    "company.structure.label": "Business Structure",
    "company.hq.label": "[HQ & Client Window]",
    "company.hq.body": "Tokyo, Japan (Business communication, contract signing, project management)",
    "company.rd.label": "[R&D & Technology Center]",
    "company.rd.body": "Global overseas technology centers (vulnerability research, code audits, cryptographic technology)",
    "company.advisors.label": "[Academic Advisor Network]",
    "company.advisors.body": "Connected with invited international experts in cybersecurity and cryptography",

    // Legacy services keys (kept for ServicesPage backward compat)
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
    "about.established": "June, 2026",
    "about.address.label": "Address",
    "about.address": "520-10 Wasedatsurumakicho, Shinjuku-ku, Tokyo, Shinjuku Waseda Label 126",
    "about.email.label": "Email",
    "about.email": "hello@trainbit.co.jp",
    "about.hours.label": "Business Hours",
    "about.hours": "10:00 - 18:00",
    "about.holidays.label": "Closed",
    "about.holidays": "Saturdays, Sundays, and National Holidays",
    "about.purpose.label": "Business Purposes",
    "about.purpose.1": "Planning, consulting, and marketing for internet-related businesses",
    "about.purpose.2": "IT consulting",
    "about.purpose.3": "Consulting on the utilization of artificial intelligence (AI) technology and sales of related software",
    "about.purpose.4": "Consulting on the utilization of machine learning (ML) models",
    "about.purpose.5": "Planning, consulting, and marketing for Web3 businesses",
    "about.purpose.6": "Planning and operation of events, workshops, lectures, and seminars, as well as publishing of member-oriented publications",
    "about.purpose.7": "All businesses incidental to the preceding items",

    // Contact
    "contact.title": "Contact Us",
    "contact.intro": "To ensure an accurate technical assessment, all initial consultations are handled online by email. Please feel free to contact us in Japanese, English, or Chinese.",
    "contact.name": "Contact Person",
    "contact.name.required": " (Required)",
    "contact.company": "Company Name",
    "contact.email": "Email Address",
    "contact.email.required": " (Required)",
    "contact.phone": "Phone Number",
    "contact.category": "Inquiry Category",
    "contact.category.ai": "AI Consulting",
    "contact.category.web3": "Web3 Consulting",
    "contact.category.cryptography": "Cryptography (ZK) Consulting",
    "contact.category.membership": "Membership Subscription",
    "contact.category.other": "Other",
    "contact.message": "Specific Requirements",
    "contact.privacy": "I agree to the Privacy Policy",
    "contact.privacy.required": " (Required)",
    "contact.submit": "Submit Inquiry",
    "contact.privacy.link": "Privacy Policy",
    "contact.success": "Your inquiry has been sent successfully! We will contact you as soon as possible.",
    "contact.error": "Unable to connect at this time. Please keep your information and try again later.",
    "contact.draft.load": "Load last sent content",
    "contact.draft.hint": "You have previously sent content:",

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
    "privacy.s7.address": "Address: 520-10 Wasedatsurumakicho, Shinjuku-ku, Tokyo, Shinjuku Waseda Label 126",
    "privacy.s7.email": "Email: ",

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
  "zh-cn": zhCN,
  "zh-tw": {
    ...toTraditionalTranslations(zhCN),
    "contact.category": "諮詢類別",
    "contact.intro": "為確保技術評估的準確性，所有初次諮詢均完全線上進行（電子郵件）。歡迎使用日語、英語或中文聯繫我們。",
    "contact.category.ai": "AI 諮詢",
    "contact.category.web3": "Web3 諮詢",
    "contact.category.cryptography": "密碼學（ZK）諮詢",
    "contact.category.membership": "會員訂閱",
    "contact.category.other": "其他",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["ja"];

export function t(lang: Lang, key: TranslationKey): string {
  const table = translations[lang] as Partial<Record<TranslationKey, string>>;
  return table[key] ?? translations[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function stripLangFromPath(path: string): string {
  const pattern = new RegExp(`^/(${Object.keys(languages).filter((lang) => lang !== defaultLang).join("|")})(?=/|$)`);
  const stripped = path.replace(pattern, "") || "/";
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return normalizedPath;
  return `/${lang}${normalizedPath}`;
}
