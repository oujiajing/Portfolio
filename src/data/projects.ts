export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  summary: string;
  cover: string;
  coverAlt: string;
  caseImage: { src: string; alt: string; caption: string };
  tags: string[];
  repo: string;
  context: string;
  problem: string;
  value: string;
  decisions: { title: string; body: string }[];
  evidence: string[];
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
    context: '施工现场发现隐患后，仍需核查适用规范、判断风险、明确整改方向并留下审核记录。信息散落在现场描述、图片和法规资料中，单次模型回答难以直接进入业务流程。',
    problem: '如何让 AI 参与隐患研判，同时让每条建议都能核对依据、由人复核，并与后续整改流程衔接？',
    value: '将资料查找、隐患候选和审核动作集中到同一工作界面，帮助现场人员更快形成可核对的判断；重要结论与业务写入仍由人确认。',
    decisions: [
      {
        title: '先给候选，再做判断',
        body: '把现场描述或图片整理为隐患候选、风险提示和整改要点。审核人可以接受、修改或排除候选，避免模型输出直接成为现场结论。',
      },
      {
        title: '让建议带着依据出现',
        body: '通过法规检索、结果融合与证据筛选提供相关规范内容，让审核人能回看建议的来源，并结合实际工况核对适用性。',
      },
      {
        title: '把分析与执行分开',
        body: 'AI 负责分析和拟议动作，审核人负责最终决定，业务平台负责权限、状态与审计。涉及业务写入时，先展示参数并等待人工确认。',
      },
    ],
    evidence: [
      '本机真实模型运行已展示知识检索调用、回答和法规引用。',
      '写入工具的待确认与取消路径已验证；取消后不会执行业务写入。',
      '审核界面已串联候选复核、法规评估、草稿与审计记录。',
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
    context: '班组派工、作业检查、隐患记录、整改任务和验收材料由不同角色接力完成。若这些信息分散在独立页面中，现场人员难以明确下一步，管理人员也难以追踪责任和进度。',
    problem: '如何让一线执行与管理审批共享同一条业务链路，并让隐患从发现到关闭都有状态、有责任、有凭证？',
    value: '把现场执行和管理动作汇成可追溯的任务链，让班组知道要做什么、负责人知道待处理事项、管理者能够从概览回到具体记录。',
    decisions: [
      {
        title: '用作业任务串起现场动作',
        body: '将派班、班前会和班前中后检查组织成连续流程；检查中发现的隐患进入派发、整改、举证和验收的工单链路。',
      },
      {
        title: '用状态和权限约束流转',
        body: '由服务端校验组织数据范围、操作权限、流程状态、请求版本和幂等标识，保证不同角色在正确节点执行对应动作。',
      },
      {
        title: '让管理视图可下钻',
        body: '监控与分析页面按一致条件汇总业务数据，并提供明细入口，让管理人员从指标回到未完成检查、待整改隐患及处理记录。',
      },
    ],
    evidence: [
      '产品页面覆盖一班三查、整改下发、整改提交和验收。',
      '状态日志、附件及关联单据保留处理过程。',
      '监控与分析视图支持从汇总信息查看对应业务明细。',
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
    context: '报销材料往往混合 PDF、OFD 和图片，票种、字段与清晰度各不相同。人工逐份核对、重命名、查重和合并打印耗时，也容易在批处理中漏掉解析失败的文件。',
    problem: '如何让不同来源的票据进入统一处理流程，并在批量整理和导出前保留清晰的核对机会？',
    value: '将解析、整理、查重和输出放在同一个本地工作台，减少重复录入与文件切换；每份票据的处理结果和失败原因都可查看，便于批量核对。',
    decisions: [
      {
        title: '按文件类型选择解析路径',
        body: '电子 PDF/OFD 优先读取原生内容，图片与扫描 PDF 在需要时回退到 OCR；每个文件都保留解析结果或失败原因。',
      },
      {
        title: '让一份数据服务多个动作',
        body: '统一票据字段模型，复用于重命名、分类归档、台账、重复检测和统计，避免各功能重复读取和解释原始文件。',
      },
      {
        title: '把核对放在批量输出之前',
        body: '导出前预览文件名和路径，处理重名与非法字符；失败文件单独列出，成功文件仍可继续整理和导出，原文件不被覆盖。',
      },
    ],
    evidence: [
      '已支持常规数电发票、铁路电子客票和航空电子客票的处理。',
      '本地台账支持筛选、预览、下载、重复检测与统计。',
      '仓库测试覆盖解析、整理规则、台账、查重统计、合并打印和主要接口。',
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
