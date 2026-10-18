export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  detailSubtitle: string;
  summary: string;
  cover: string;
  coverAlt: string;
  caseImage: { src: string; alt: string; caption: string };
  tags: string[];
  repo: string;
  positioning: string;
  context: string;
  problem: string;
  value: string;
  decisions: { title: string; body: string }[];
  evidence: { label: string; body: string }[];
  gallery: { src: string; alt: string; caption: string }[];
};

const image = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

export const projects: Project[] = [
  {
    slug: 'safeguard-agent',
    number: '01',
    title: 'SafeGuard Agent',
    category: 'AI 产品 · 施工安全',
    subtitle: '施工安全隐患整改Agent',
    detailSubtitle: '施工安全隐患整改 Agent',
    summary: '基于多模态理解与知识检索的施工安全助手，识别现场隐患、关联法规条文，并支持人工确认生成整改建议。',
    cover: image('cover-safeguard-agent.png'),
    coverAlt: '施工现场隐患识别、法规依据与人工确认的概念封面',
    caseImage: {
      src: image('safeguard-architecture.png'),
      alt: '施工安全隐患整改Agent的系统架构图',
      caption: '系统架构图',
    },
    tags: ['Agent', 'RAG', 'Human-in-the-loop'],
    repo: 'https://github.com/oujiajing/safeguard-agent',
    positioning: '面向施工安全审核场景，融合多模态隐患分析、法规 RAG 与 Agent 工具调用，将现场信息转化为可追溯、可人工复核的整改建议，并通过 Safe-flow 衔接后续业务流程。',
    context: '在 Safe-flow 安全生产数字化平台中，隐患上报与整改流转已实现数字化，但现场隐患研判仍依赖安全员经验，需要反复核查法规、判断风险和整理整改措施。通用大模型虽能提供建议，却存在现场误判、法规误引及业务执行不可控等问题。',
    problem: '如何将 AI 的隐患分析转化为有法规依据、可人工复核、可接入整改流程的业务结果，并确保关键安全决策仍由人工掌控？',
    value: '围绕“隐患识别—法规核查—人工复核—整改衔接”构建人机协同流程，辅助安全员形成结构化隐患判断及整改建议，提升结果的可追溯性，并降低多环节重复整理信息的成本。',
    decisions: [
      {
        title: '01｜先识别候选，再人工认定',
        body: '针对现场图文可能存在的识别偏差，将可见事实、隐患候选与风险建议分层呈现，支持审核人员接受、修改或排除候选，避免 AI 推断直接成为业务结论。',
      },
      {
        title: '02｜以法规证据约束 AI 建议',
        body: '构建结构化法规知识库，采用混合检索、Rerank 与 Evidence Gate 筛选相关条款，并提供引用追溯。证据不足时保留不确定性，由审核人员核对条款适用性。',
      },
      {
        title: '03｜以 Agent 编排任务，人工控制执行',
        body: '采用 ReAct + Tool Calling 组织知识检索和业务动作，通过 Human-in-the-loop 机制对写入操作进行参数展示与人工确认；由 Safe-flow 负责权限、状态和审计，隔离 AI 建议与正式业务执行。',
      },
    ],
    evidence: [
      { label: '知识检索', body: '完成法规知识库及检索链路开发，开展覆盖单条款、数值、复合和不可回答问题的本地评测。' },
      { label: '真实模型', body: '本机验证 Agent 调用法规检索工具并返回引用结果，写工具能够进入待确认状态，取消后不会执行业务写入。' },
      { label: '业务集成', body: '在 Safe-flow 演示场景中串联隐患候选复核、法规评估、审核草稿及审计记录。' },
    ],
    gallery: [
      {
        src: image('safeguard-review.png'),
        alt: '施工安全隐患整改Agent的隐患候选与人工复核界面',
        caption: '真实产品界面 · 演示场景数据',
      },
      {
        src: image('safeguard-confirmation.jpg'),
        alt: '施工安全隐患整改Agent的写工具参数与人工确认卡片',
        caption: '写工具待确认界面：此时尚未执行业务写入',
      },
    ],
  },
  {
    slug: 'safeflow',
    number: '02',
    title: 'SafeFlow',
    category: 'B 端产品 · 安全生产',
    subtitle: '安全生产数字化平台',
    detailSubtitle: '安全生产数字化管控平台',
    summary: '面向企业的安全生产管理系统，覆盖隐患上报、任务分派、整改跟踪与闭环，提升现场管理效率与过程透明度。',
    cover: image('cover-safeflow.png'),
    coverAlt: '现场检查、隐患整改与数据看板相连的概念封面',
    caseImage: {
      src: image('safeflow-architecture.png'),
      alt: '安全生产数字化平台的技术架构图',
      caption: '技术架构图',
    },
    tags: ['任务流转', '权限管理', '数据可视化'],
    repo: 'https://github.com/oujiajing/safe-flow',
    positioning: '面向企业班组安全管理场景，构建覆盖 PC 管理端与微信小程序的数字化平台，围绕风险预防、班组作业、隐患整改和安全运营，实现多角色协同、任务闭环与管理数据追溯。',
    context: '企业安全管理涉及班组派工、作业检查、隐患上报、整改验收等多个环节，由班组长、安全员、整改责任人及管理人员协同完成。传统流程中，任务、记录和现场证据相对分散，容易出现执行进度不透明、责任难追踪及跨角色协同成本高等问题。',
    problem: '如何将分散的班组作业、检查与隐患整改流程整合为统一业务链路，让多角色协同有明确任务、流程有状态、责任有记录？',
    value: '围绕“风险预防—现场执行—隐患整改—管理分析”构建安全管理闭环，以班组作业任务串联现场流程，让一线人员明确待办、责任人跟踪整改、管理者从汇总指标定位异常并追溯原始记录。',
    decisions: [
      {
        title: '01｜以“一班三查”串联现场作业',
        body: '以班组派班为主线，整合班前会、班前检查、班中巡查及班后检查，统一关联任务状态、责任人员、现场证据和待办事项；检查中发现的隐患可进入后续整改流程。',
      },
      {
        title: '02｜以状态机和权限保障整改闭环',
        body: '针对多角色流转及重复操作风险，设计隐患下发、整改提交、审核验收及退回整改等状态规则，并通过服务端权限、组织数据范围、版本校验与幂等机制保障流程一致性。',
      },
      {
        title: '03｜让管理数据能够追溯业务现场',
        body: '统一组织、时间及业务指标口径，汇总派班执行、三查完成、风险分布与隐患整改数据，支持从监控大屏、分析图表下钻到异常班组、未完成任务及具体处理记录。',
      },
    ],
    evidence: [
      { label: '业务流程', body: '已实现 PC 与微信小程序相关业务功能，覆盖一班三查、隐患下发、整改提交及验收等核心场景。' },
      { label: '流程约束', body: '后端实现组织权限、状态校验与流转记录，仓库包含相应的业务接口和自动化测试。' },
      { label: '管理分析', body: '监控中心、数据分析及班组分析已支持业务数据汇总与明细查看；作品集截图使用演示场景数据。' },
    ],
    gallery: [
      {
        src: image('safeflow-dashboard.png'),
        alt: '安全生产数字化平台的监控中心界面',
        caption: '真实产品界面 · 演示场景数据',
      },
      {
        src: image('safeflow-data-analysis.png'),
        alt: '安全生产数字化平台的数据分析中心界面',
        caption: '数据分析中心 · 演示场景数据',
      },
    ],
  },
  {
    slug: 'invoice-assistant',
    number: '03',
    title: 'Invoice Assistant',
    category: '效率工具 · 票据管理',
    subtitle: '票据管理工作台',
    detailSubtitle: '发票自动化管理工作台',
    summary: '基于原生解析与 OCR 的发票整理助手，自动识别发票信息，生成结构化台账，并支持批量处理与多格式导出，提升财务与报销的整理效率。',
    cover: image('cover-invoice-assistant.png'),
    coverAlt: '票据解析、查重和整理导出的概念封面',
    caseImage: {
      src: image('invoice-architecture.png'),
      alt: '票据管理工作台的系统架构图',
      caption: '系统架构图',
    },
    tags: ['OCR识别', '大模型抽取', '自动化整理'],
    repo: 'https://github.com/oujiajing/Invoice_Assistant',
    positioning: '面向个人报销、行政及财务票据整理场景，融合原生文档解析、OCR 识别与规则化处理，构建覆盖票据识别、文件整理、台账管理、查重统计及合并打印的本地自动化工作台。',
    context: '报销材料常混合 PDF、OFD 和图片，不同票种的字段与版式存在差异。人工需要逐份核对信息、重命名、查重、归档和合并打印，操作重复且容易遗漏解析失败或重复票据，批量处理效率受到限制。',
    problem: '如何统一处理不同格式和票种的发票，实现票面信息一次提取、多处复用，同时确保批量处理中的异常可见、结果可核对？',
    value: '围绕“票据接入—信息解析—批量整理—台账管理—统计输出”构建自动化处理流程，减少人工重复录入与文件操作，支持规则化整理、重复检测和多格式导出，并通过预览与异常提示保障处理结果可核对。',
    decisions: [
      {
        title: '01｜优先原生解析，按需启用 OCR',
        body: '电子 PDF/OFD 优先提取原生文本，图片与缺少有效文本层的扫描 PDF 使用 PP-OCRv5；识别结果复用现有票种解析器，并记录解析来源，减少不必要的识别步骤。',
      },
      {
        title: '02｜统一票据数据，支撑多场景复用',
        body: '按票种提取结构化字段，并统一上层台账与规则配置，复用于文件重命名、分类归档、重复检测、统计分析和 Excel 导出，避免不同功能重复解析原始文件。',
      },
      {
        title: '03｜批次容错，导出前完成核对',
        body: '采用单文件独立处理机制，保留解析失败原因，不阻断同批次成功文件；导出前预览文件名及目标路径，自动处理重名和非法字符，生成新文件并保留原件。',
      },
    ],
    evidence: [
      { label: '票据解析', body: '已实现常规数电发票、铁路电子客票及航空电子客票的解析，包含原生解析与 OCR 分流逻辑。' },
      { label: '业务功能', body: '本地台账支持筛选、预览、下载、重复检测及统计，已实现规则化重命名、ZIP 导出与合并打印。' },
      { label: '工程测试', body: '仓库包含解析器、OCR 分流、批次容错、整理规则、台账、统计及主要 API 流程的自动化测试。' },
    ],
    gallery: [
      {
        src: image('invoice-report.png'),
        alt: '票据管理工作台的统计报表界面',
        caption: '真实产品界面 · 示例票据',
      },
      {
        src: image('invoice-rename.png'),
        alt: '票据管理工作台的文件重命名页面',
        caption: '文件重命名与导出预览 · 示例票据',
      },
    ],
  },
];
