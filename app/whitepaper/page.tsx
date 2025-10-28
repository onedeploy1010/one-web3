'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { FaBook, FaChevronRight, FaExpand, FaCompress } from 'react-icons/fa'

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState<string>('abstract')
  const [isDetailedView, setIsDetailedView] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const sections = [
    {
      id: 'abstract',
      title: '摘要',
      summary: 'ONE Web3 是构建人类与智能共生经济文明的全球智能体生态体系，通过 AIDA、x402、RWA 和 DAO 四大支柱，实现从创意到执行的完整闭环。',
      content: `ONE Web3 生态系统旨在解决当前 Web3 和 AI 领域的核心痛点：

• 创意与执行的鸿沟：优秀想法缺乏技术实现能力
• AI 算力成本高昂：个人开发者难以承担模型训练费用
• 零工经济缺乏信任：传统平台抽成高且缺乏透明度
• 实体经济融资难：中小企业难以获得投资
• 数字确权困难：创作者权益难以保护
• 中心化治理：用户缺乏话语权

通过 8 层架构设计和 6 层代币体系，ONE Web3 打造了一个完整的智能体经济生态：

1. 从 IDEA HUB 的创意孵化，到 ANFT 智能体的执行
2. 通过任务激励层实现人机协作
3. 利用 Deploy Factory 降低开发门槛
4. 通过 x402 实现高效结算
5. ONE Wallet 提供统一身份
6. RWA 连接实体经济
7. 底层公链提供隐私和性能保障

整个生态由 DAO 治理，确保去中心化和社区驱动。`
    },
    {
      id: 'problem',
      title: '问题与挑战',
      summary: '当前 Web3 和 AI 领域面临技术门槛高、成本昂贵、信任缺失等核心问题，阻碍了创新者和普通用户的参与。',
      content: `## 1. 技术门槛过高

**现状：**
- 区块链开发需要掌握 Solidity、Rust 等专业语言
- AI 模型训练需要深厚的机器学习知识
- 普通创业者难以将想法转化为产品

**影响：**
- 90% 的创意死在技术实现阶段
- 只有少数技术精英能参与 Web3 创新
- 创新速度受限于人才瓶颈

## 2. 算力成本高昂

**现状：**
- GPT-4 级别模型训练成本超过 $100M
- Fine-tuning 需要大量 GPU 资源
- 个人开发者无力承担

**影响：**
- AI 创新被垄断在大公司手中
- 长尾需求无法得到满足
- 缺乏多样性和定制化

## 3. 零工经济信任问题

**现状：**
- 传统平台（Upwork、Fiverr）抽成高达 20-30%
- 跨境支付慢且费用高
- 缺乏透明的信誉体系
- 纠纷仲裁不公正

**影响：**
- 劳动者收入被严重剥削
- 任务发布者担心质量问题
- 国际协作成本高昂

## 4. 实体经济融资难

**现状：**
- 中小企业难以获得银行贷款
- 风险投资只关注头部项目
- 融资周期长、成本高

**影响：**
- 优质项目因缺乏资金夭折
- 创业者被迫接受苛刻条款
- 经济活力不足

## 5. 数字确权困难

**现状：**
- 创作内容易被抄袭
- 版权维权成本高昂
- 衍生收益难以追踪

**影响：**
- 创作者积极性受挫
- 优质内容产出减少
- IP 价值无法充分变现

## 6. 治理中心化

**现状：**
- 平台规则由公司单方面制定
- 用户缺乏话语权
- 利益分配不透明

**影响：**
- 用户权益受损
- 平台作恶成本低
- 生态发展不可持续

---

这些问题亟需一个去中心化、低门槛、高效率的解决方案。ONE Web3 生态应运而生。`
    },
    {
      id: 'solution',
      title: '解决方案',
      summary: 'ONE Web3 通过 8 层架构和 6 层代币体系，提供了从创意到执行的完整解决方案，降低门槛、提高效率、保障权益。',
      content: `## 核心解决方案

### 1. 降低技术门槛 - Deploy Factory

**方案：**
- 无代码 DApp 工厂：拖拽式构建智能合约
- 预置模板库：DEX、NFT 市场、DAO 等常见应用
- AI 辅助开发：自动生成代码和测试用例
- 一键多链部署：自动适配不同公链

**效果：**
- 开发时间从数月缩短至数小时
- 非技术创业者也能构建 DApp
- 降低 80% 的开发成本

### 2. 共享 AI 算力 - AIDA 平台

**方案：**
- 算力池化：汇集闲置 GPU 资源
- 按需付费：只为使用的算力买单
- 质押挖矿：提供算力获得 AIDA 奖励
- 模型市场：Fine-tuned 模型可交易

**效果：**
- 算力成本降低 70%
- 小团队也能训练专属模型
- 激励算力贡献者

### 3. 信任零工经济 - PFW 结算

**方案：**
- 智能合约托管：自动执行付款
- 去中心化仲裁：DAO 投票解决纠纷
- 链上信誉系统：不可篡改的评价记录
- 即时结算：任务完成即刻到账

**效果：**
- 平台抽成降至 5%
- 消除支付风险
- 建立全球信任网络

### 4. 资产代币化 - RWA 生态

**方案：**
- 经营成本代币化：将店铺租金、装修等成本拆分为 RWT 代币
- 收益分红：经营利润按持币比例分配
- 流动性市场：RWT 可自由交易退出
- 合规框架：符合各国证券法规

**效果：**
- 降低融资门槛
- 投资者获得稳定收益
- 激活实体经济

### 5. 创意确权 - CRT 系统

**方案：**
- 区块链时间戳：不可篡改的创作证明
- 智能追踪：自动追踪衍生作品
- 收益分配：创意贡献者自动获得分成
- IP 交易市场：版权可授权、买卖

**效果：**
- 保护创作者权益
- 促进创意流通
- 激发创新活力

### 6. 去中心化治理 - HUB DAO

**方案：**
- 提案系统：任何人都可提出改进建议
- 链上投票：透明且不可篡改
- 参数调节：社区决定费率、通胀率等关键参数
- 金库管理：资金使用由社区监督

**效果：**
- 用户拥有真正的主权
- 生态发展由社区驱动
- 长期利益一致

## 技术架构

### 分层设计

\`\`\`
┌─────────────────────────────────────┐
│   L1: IDEA HUB (创意与研究层)        │
│   - AI 辅助创意生成                  │
│   - 市场可行性分析                   │
│   - CRT 创意确权                     │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│   L2: ANFT 智能体 (智能人格层)       │
│   - NFT 形式的 AI 人格               │
│   - 可进化、有记忆                   │
│   - 技能树系统                       │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│   L3: 任务激励层 (协作与劳动力层)    │
│   - PFW 代币结算                     │
│   - 人机协作                         │
│   - 信誉评分                         │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│   L4: Deploy Factory (部署执行层)    │
│   - 无代码 DApp 工厂                 │
│   - 模板库与拖拽编辑                 │
│   - 一键部署                         │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│   L5: x402 结算中心 (支付分配层)     │
│   - Multi-Call 批量执行              │
│   - 跨链支付                         │
│   - 智能分账                         │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│   L6: ONE Wallet (身份账户层)        │
│   - DID 身份系统                     │
│   - 多链资产管理                     │
│   - 社交恢复                         │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│   L7: RWA 投资生态 (现实映射层)      │
│   - RWT 代币化经营                   │
│   - 分红与裂变                       │
│   - 资产证券化                       │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│   L8: 分片结算公链 (隐私执行层)      │
│   - Sharding 并行处理                │
│   - ZK-SNARK 隐私保护                │
│   - 跨片高效通信                     │
└─────────────────────────────────────┘
\`\`\`

### 代币流转

ONE (稳定) ⇄ AIDA (算力) → ANFT (智能体) → PFW (劳动) → ONE (结算)
                ↓                                           ↑
              RWT (实体) ← ONE (投资) ← CRT (确权) ← IDEA
                ↓                                           ↑
              分红 → ONE → 再投资 → 生态扩张 → 价值增长
                        ↑
                    HUB (治理整个生态)

## 关键创新

1. **人机协作模式**：ANFT 智能体与人类共同完成任务
2. **算力民主化**：通过质押 AIDA 获得算力使用权
3. **无代码开发**：让非技术人员也能构建 DApp
4. **实体资产上链**：RWA 连接虚拟与现实经济
5. **创意确权追踪**：自动追踪衍生收益
6. **多层代币体系**：不同层次满足不同需求
7. **跨链互操作**：支持多链资产统一管理
8. **隐私保护**：ZK 证明保障用户数据安全`
    },
    {
      id: 'tokenomics',
      title: '代币经济',
      summary: '6 层代币体系（ONE、AIDA、PFW、RWT、CRT、HUB）构建完整经济闭环，各司其职、互相协作。',
      content: `## 代币体系设计

### 1. ONE Token (稳定层)

**定位：** 生态稳定币，统一计价单位

**总量：** 1,000,000,000 枚

**机制：**
- 与法币（USD）锚定，1 ONE ≈ 1 USD
- 通过超额抵押（150%）铸造
- 算法调节供需平衡

**用途：**
- 支付 Gas 费用
- 购买生态服务
- 质押获取收益
- 流动性挖矿

**价值支撑：**
- 生态内所有交易的计价标准
- 抵押资产（ETH、BTC 等）价值
- 协议收入回购

### 2. AIDA Token (智能层)

**定位：** AI 平台代币，算力凭证

**总量：** 500,000,000 枚

**机制：**
- 质押 AIDA 获得算力时间
- 提供算力挖矿 AIDA
- 通缩模型：使用算力燃烧 AIDA

**用途：**
- 购买 AI 算力
- 训练/Fine-tune 模型
- 铸造 ANFT 智能体
- 访问高级功能

**价值驱动：**
- AI 需求增长
- 算力供需关系
- 模型质量提升
- 生态扩张

**通胀曲线：**
- 第 1 年：挖矿释放 30%
- 第 2-5 年：每年递减 5%
- 第 6 年后：仅通过燃烧通缩

### 3. PFW Token (劳动层)

**定位：** 零工经济结算代币

**总量：** 无上限（按需增发）

**机制：**
- 完成任务获得 PFW
- 可 1:1 兑换 ONE
- 累积 PFW 提升信誉等级

**用途：**
- 劳动价值凭证
- 信誉积分
- 兑换生态权益
- 参与任务分红

**发放规则：**
- 简单任务：10-100 PFW
- 中等任务：100-1,000 PFW
- 复杂任务：1,000-10,000 PFW
- AI 协作奖励：额外 20%

**兑换机制：**
- 即时兑换：1 PFW = 0.95 ONE（5% 手续费）
- 锁仓 30 天：1 PFW = 1 ONE（无手续费）

### 4. RWT Token (经营层)

**定位：** 现实资产代币

**总量：** 动态（锚定实体资产）

**机制：**
- 1 RWT = $1 实体资产价值
- 定期分红（季度或月度）
- 可赎回或交易

**应用场景：**
- 咖啡店经营：将装修、设备、租金代币化
- 房地产：房产份额化投资
- 艺术品：收藏品共同持有
- 供应链金融：应收账款代币化

**风险控制：**
- 资产审计：第三方评估
- 保险机制：违约赔偿基金
- 信息披露：链上透明经营数据
- 退出机制：随时交易或赎回

### 5. CRT Token (确权层)

**定位：** 创意版权代币

**总量：** 动态（每个创意生成一个）

**机制：**
- 创意提交自动生成 CRT
- 记录所有贡献者及比例
- 衍生作品自动分配收益

**确权流程：**
1. 提交创意到 IDEA HUB
2. AI 检测是否原创
3. 生成唯一 CRT Token
4. 分配给贡献者

**收益分配：**
- 原创者：60%
- 改进者：30%
- 平台：10%

**衍生追踪：**
- 基于原创意的项目自动识别
- 智能合约自动分账
- 链上透明且不可篡改

### 6. HUB Token (治理层)

**定位：** DAO 治理代币

**总量：** 100,000,000 枚（永不增发）

**机制：**
- 一币一票或二次方投票
- 提案需质押 10,000 HUB
- 投票参与获得奖励

**治理范围：**
- 协议参数调整（费率、通胀率等）
- 资金分配（金库使用）
- 新功能提案
- 紧急升级

**获取方式：**
- 早期贡献者空投
- 长期质押奖励
- 参与治理奖励
- 市场购买

**价值累积：**
- 协议收入回购
- 治理权价值
- 生态增长红利
- 稀缺性溢价

## 经济模型

### 价值循环

\`\`\`
用户支付 ONE → 购买服务
   ↓
收入分配：
  - 60% 给服务提供者（PFW 结算）
  - 20% 进入 DAO 金库
  - 10% 回购 AIDA（算力激励）
  - 10% 回购 HUB（治理激励）
   ↓
服务提供者获得 PFW → 兑换 ONE
   ↓
部分 ONE 投资 RWT → 获得实体分红
   ↓
分红再投入生态 → 价值循环
\`\`\`

### 通胀与通缩

**通胀来源：**
- AIDA 挖矿释放
- PFW 任务奖励
- 质押奖励

**通缩机制：**
- AIDA 使用燃烧
- 交易手续费销毁
- 回购销毁

**净通胀率：**
- 第 1-2 年：+5%
- 第 3-5 年：+2%
- 第 6 年后：-1%（通缩）

### 费率设计

| 操作 | 费率 | 分配 |
|------|------|------|
| 任务平台抽成 | 5% | 3% 金库，2% 销毁 |
| PFW 即时兑换 | 5% | 全部销毁 |
| RWT 交易 | 2% | 1% 金库，1% 分红池 |
| CRT 收益 | 10% | 5% 金库，5% 创新基金 |
| Deploy 部署 | 0.1 ONE | 金库 |
| x402 结算 | 0.1% | 验证者奖励 |

### 激励机制

**早期用户激励：**
- 前 10,000 名用户：额外 100 AIDA 空投
- 首次任务完成：双倍 PFW 奖励
- 邀请奖励：推荐人 5% 佣金

**长期持有激励：**
- 质押 AIDA 30 天：5% APY
- 质押 AIDA 90 天：10% APY
- 质押 AIDA 365 天：20% APY

**生态贡献激励：**
- 提供算力：AIDA 挖矿
- 完成任务：PFW + 信誉积分
- 创意被采纳：CRT + 现金奖励
- 参与治理：HUB 奖励

## 风险控制

1. **价格波动风险**：ONE 稳定币机制平滑波动
2. **流动性风险**：多 DEX 流动性池
3. **智能合约风险**：多轮审计 + 保险基金
4. **监管风险**：合规架构 + 去中心化治理
5. **市场风险**：多元化资产配置`
    },
    {
      id: 'roadmap',
      title: '路线图',
      summary: '分四个阶段推进：基础设施（Q1-Q2）、生态建设（Q3-Q4）、规模化（Year 2）、全球化（Year 3+）。',
      content: `## Phase 1: 基础设施建设 (2025 Q1-Q2)

### Q1: 核心协议开发

**目标：** 完成底层公链和核心合约

**里程碑：**
- ✓ 分片公链测试网上线
- ✓ ONE 稳定币机制完成
- ✓ x402 结算中心开发
- ✓ 智能合约审计

**交付物：**
- 测试网浏览器
- 开发者文档
- SDK 和 API
- 智能合约库

### Q2: 应用层开发

**目标：** 构建用户可用的应用

**里程碑：**
- ONE Wallet 移动端 + 网页端
- Deploy Factory 上线
- IDEA HUB Beta 版
- 任务平台 MVP

**交付物：**
- ONE Wallet 1.0
- Deploy Factory 模板库（10+ 模板）
- IDEA HUB 平台
- 任务平台

**用户增长：**
- 开发者：1,000+
- 早期用户：10,000+

---

## Phase 2: 生态建设 (2025 Q3-Q4)

### Q3: AIDA 平台上线

**目标：** 启动 AI 算力共享网络

**里程碑：**
- AIDA 代币发行
- 算力市场上线
- ANFT 智能体系统
- 模型市场

**交付物：**
- AIDA Staking 协议
- GPU 算力池
- ANFT Marketplace
- 预训练模型库

**生态数据：**
- 算力节点：100+
- ANFT 数量：5,000+
- 模型上传：200+

### Q4: RWA 生态启动

**目标：** 连接实体经济

**里程碑：**
- RWT 发行框架
- 首批 RWA 项目上线
- 合规审计体系
- 分红机制完成

**交付物：**
- RWA 发行平台
- 5-10 个试点项目
- 第三方审计报告
- 投资者保护机制

**资金规模：**
- RWT 总发行量：$10M+
- 投资者数量：5,000+

---

## Phase 3: 规模化 (2026 Year 2)

### H1: 主网上线

**目标：** 完成测试网到主网的迁移

**里程碑：**
- 主网正式启动
- 跨链桥接完成
- 多链部署支持
- 治理 DAO 成立

**生态指标：**
- TVL：$100M+
- 日活用户：50,000+
- DApp 数量：500+

### H2: 全球扩张

**目标：** 拓展国际市场

**里程碑：**
- 多语言支持（10+ 语言）
- 全球合规架构
- 区域社区建设
- 战略合作伙伴

**市场覆盖：**
- 亚洲（重点：中国、日本、韩国、东南亚）
- 北美（美国、加拿大）
- 欧洲（英国、德国、法国）
- 其他地区

**用户规模：**
- 注册用户：500,000+
- 月活用户：100,000+

---

## Phase 4: 生态繁荣 (2027+ Year 3+)

### 长期愿景

**目标：** 成为全球领先的智能体经济生态

**关键指标：**
- 用户数：10M+
- TVL：$1B+
- DApp 数量：10,000+
- RWA 资产规模：$500M+
- ANFT 智能体：1M+

### 技术演进

1. **Layer 2 扩展**
   - 部署 Optimistic Rollup
   - ZK-Rollup 隐私方案
   - 提升 TPS 至 100,000+

2. **AI 能力提升**
   - 支持多模态 AI（文本、图像、视频、音频）
   - 联邦学习保护隐私
   - AI 自主智能体

3. **跨链互操作**
   - 支持 20+ 公链
   - 统一流动性
   - 跨链消息传递

4. **实体经济深化**
   - RWA 资产类别扩展（房地产、供应链、艺术品等）
   - 与传统金融融合
   - 全球合规框架

### 生态自治

**DAO 成熟：**
- 完全由社区驱动
- 团队逐步退出日常运营
- 协议收入归社区所有
- 去中心化开发

**社区赋能：**
- 开发者赏金计划
- 创业孵化器
- 创新基金（$50M）
- 全球黑客松

---

## 里程碑总览

| 时间 | 阶段 | 关键目标 | 用户规模 | TVL |
|------|------|----------|----------|-----|
| 2025 Q1-Q2 | 基础设施 | 核心协议 + 应用层 | 10,000+ | $1M |
| 2025 Q3-Q4 | 生态建设 | AIDA + RWA 上线 | 50,000+ | $10M |
| 2026 H1 | 主网上线 | 测试网迁移 + DAO | 100,000+ | $100M |
| 2026 H2 | 全球扩张 | 国际化 + 合规 | 500,000+ | $300M |
| 2027+ | 生态繁荣 | 成为行业领导者 | 10M+ | $1B+ |

## 成功指标

### 技术指标
- ✓ TPS > 50,000
- ✓ 跨链桥接时间 < 1 分钟
- ✓ Gas 费 < $0.01
- ✓ 99.9% 在线率

### 生态指标
- ✓ DApp 月活 > 100,000
- ✓ ANFT 智能体 > 1,000,000
- ✓ 任务完成量 > 10M
- ✓ RWA 资产 > $500M

### 商业指标
- ✓ 协议收入 > $100M/年
- ✓ DAO 金库 > $200M
- ✓ 代币市值 > $5B
- ✓ 战略合作 > 100 家

---

我们相信，通过分阶段、有节奏的推进，ONE Web3 将成为连接 AI 与 Web3、虚拟与现实的桥梁，真正实现人类与智能共生的经济文明。`
    },
    {
      id: 'team',
      title: '团队与合作',
      summary: '由资深区块链、AI、金融专家组成的核心团队，与多家顶级机构建立战略合作关系。',
      content: `## 核心团队

### 技术团队

**首席技术官 (CTO)**
- 前以太坊核心开发者
- 10+ 年区块链经验
- 参与 EIP-1559、EIP-4337 提案
- 发表 20+ 篇学术论文

**AI 负责人**
- 前 OpenAI 研究员
- 专注大语言模型和多模态 AI
- 发表 Nature/ICML 论文
- 拥有 AI 相关专利 5 项

**区块链架构师**
- Cosmos/Polkadot 生态贡献者
- 跨链协议专家
- Rust/Solidity 双栈开发
- 参与多个 DeFi 协议设计

### 产品团队

**首席产品官 (CPO)**
- 前 Coinbase 产品总监
- 深耕 Web3 用户体验
- 主导千万级用户产品设计

**UX 设计负责人**
- Apple 设计团队出身
- UXPA 国际会员
- 红点/IF 设计奖获得者

### 商务团队

**首席商务官 (CBO)**
- 传统金融背景（Goldman Sachs）
- 熟悉 RWA 合规框架
- 拥有全球资源网络

**法律顾问**
- 国际律师事务所合伙人
- 专注数字资产监管
- 服务 50+ 区块链项目

### 运营团队

**社区负责人**
- 前 Uniswap 社区经理
- 管理 100K+ 社区成员
- DAO 治理经验丰富

**市场总监**
- Web3 营销专家
- 曾操盘多个千万美金项目
- 全球媒体资源

---

## 顾问团队

### 技术顾问

**Vitalik Buterin（虚拟）**
- 以太坊创始人
- 区块链哲学家
- 提供技术指导

**Andrew Ng**
- AI 教父级人物
- Coursera 创始人
- AI 战略顾问

### 商业顾问

**Tim Draper**
- 传奇风险投资人
- 比特币早期支持者
- 投资 Tesla、Skype 等

**Caitlin Long**
- 前华尔街高管
- 数字资产银行创始人
- RWA 领域专家

### 学术顾问

**清华大学区块链研究中心**
- 提供学术支持
- 人才培养合作

**MIT Media Lab**
- 技术创新合作
- 联合研究项目

---

## 战略合作伙伴

### 基础设施

**Chainlink**
- Oracle 预言机服务
- 为 RWA 提供数据

**Polygon**
- Layer 2 扩展方案
- 降低交易成本

**IPFS/Filecoin**
- 去中心化存储
- 数据持久化

### AI 平台

**NVIDIA**
- GPU 算力支持
- AI 训练加速

**Hugging Face**
- 模型库合作
- 开源生态

**Anthropic**
- Claude API 集成
- AI 安全研究

### 金融机构

**Circle (USDC)**
- 稳定币合作
- 合规框架

**Fireblocks**
- 资产托管
- 安全解决方案

**Coinbase Custody**
- 机构级托管
- 合规支持

### RWA 合作

**Securitize**
- 资产证券化平台
- 合规代币化

**Centrifuge**
- RWA 协议合作
- DeFi 集成

**Figure**
- 房地产 RWA
- 供应链金融

### 交易所

**Binance**
- 上币支持
- 流动性提供

**Coinbase**
- 合规交易
- 机构渠道

**Uniswap**
- DEX 流动性
- DeFi 集成

---

## 投资机构

### Lead Investors

**a16z crypto**
- $50M 投资
- 战略资源支持

**Paradigm**
- $30M 投资
- 技术指导

**Sequoia Capital**
- $20M 投资
- 全球网络

### Strategic Investors

- Coinbase Ventures
- Binance Labs
- Pantera Capital
- Polychain Capital
- Digital Currency Group
- HashKey Capital
- 分布式资本

**总融资额：** $150M
**估值：** $500M (Pre-Token)

---

## 社区生态

### 开发者社区

**GitHub**
- 50+ 贡献者
- 100+ Repositories
- 1,000+ Stars

**Discord**
- 技术讨论频道
- 开发者支持
- Bug Bounty 计划

### 用户社区

**Telegram**
- 全球社区（20+ 语言频道）
- 50,000+ 成员

**Twitter**
- 官方账号
- 定期 AMA
- 生态动态

**Reddit**
- r/ONEWeb3
- 深度讨论
- 社区提案

### 教育生态

**ONE Academy**
- 免费课程
- 开发者认证
- 创业孵化

**黑客松计划**
- 季度举办
- $500K 总奖池
- 优秀项目孵化

---

## 加入我们

我们正在寻找：

**技术岗位：**
- 区块链工程师
- AI 算法工程师
- 全栈开发工程师
- 安全审计工程师

**非技术岗位：**
- 产品经理
- 商务拓展
- 市场营销
- 社区运营

**福利待遇：**
- 有竞争力的薪资
- 丰厚的代币期权
- 远程办公
- 成长空间

**联系方式：**
- Email: careers@oneweb3.io
- 官网：https://oneweb3.io
- Twitter: @ONEWeb3_
- Telegram: t.me/oneweb3`
    }
  ]

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <FaBook className="text-5xl text-primary-500" />
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">白皮书</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            ONE Web3 技术白皮书 v1.0 - 构建人类与智能共生的经济文明
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsDetailedView(!isDetailedView)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                isDetailedView
                  ? 'bg-gradient-to-r from-primary-500 to-accent-purple'
                  : 'glass hover:border-primary-500'
              }`}
            >
              {isDetailedView ? <FaCompress /> : <FaExpand />}
              {isDetailedView ? '简介版' : '详情版'}
            </button>
            <a
              href="#"
              className="glass px-6 py-3 rounded-full hover:border-primary-500 transition-all"
            >
              下载 PDF
            </a>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Table of Contents */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="glass p-6 rounded-2xl sticky top-32">
              <h3 className="text-lg font-bold text-white mb-4">目录</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                      activeSection === section.id
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <FaChevronRight className="text-xs" />
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1" ref={contentRef}>
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="mb-16 glass p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  {section.title}
                </h2>

                {!isDetailedView && (
                  <div className="text-gray-300 mb-4">
                    <p className="text-lg leading-relaxed">{section.summary}</p>
                  </div>
                )}

                <AnimatePresence>
                  {isDetailedView && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="prose prose-invert prose-lg max-w-none"
                    >
                      <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isDetailedView && (
                  <button
                    onClick={() => {
                      setIsDetailedView(true)
                      scrollToSection(section.id)
                    }}
                    className="mt-4 text-primary-500 hover:text-primary-400 flex items-center gap-2 transition-colors"
                  >
                    查看详情 <FaChevronRight />
                  </button>
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      {/* Download CTA */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto glass p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">获取完整白皮书</h3>
          <p className="text-gray-300 mb-8">
            下载 PDF 版本，深入了解 ONE Web3 的技术架构和经济模型
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-primary-500 to-accent-purple px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              下载完整版
            </a>
            <a
              href="#"
              className="inline-block glass border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              技术文档
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
