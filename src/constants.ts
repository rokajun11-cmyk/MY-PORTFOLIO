import type { Localized } from './i18n';

export type Category = 'Animation' | 'Design' | 'Client Work';

export interface Project {
  id: string;
  title: Localized;
  year: string;
  duration?: string;
  description: Localized;
  technique?: Localized;
  category: Category;
  thumbnail: string;
  /** Shown instead of `thumbnail` under the dark theme, where an app ships a
   *  dark-appearance icon of its own. Falls back to `thumbnail` when absent. */
  thumbnailDark?: string;
  thumbnailStyle?: 'cover' | 'icon';
  thumbnailScale?: number;
  videoThumbnail?: string;
  videoUrl?: string;
  images: string[];
  details?: Localized<string[]>;
  externalLink?: {
    label: Localized;
    url: string;
  };
  /** Small muted line under the link — status, caveats, which build the link points at. */
  note?: Localized;
}

import go0 from '../go0.jpg';
import go1 from '../go1.png';
import go2 from '../go2.png';
import a0 from '../A0.jpg';
import a1 from '../A1.png';
import a2 from '../A2.png';
import a3 from '../A3.png';
import b0 from '../B0.jpg';
import b1 from '../B1.png';
import b2 from '../B2.png';
import b3 from '../B3.png';
import b4 from '../B4.png';
import z0 from '../z0.png';
import z1 from '../z1.png';
import z2 from '../z2.jpg';
import z3 from '../z3.jpg';
import m0 from '../m0.png';
import m1 from '../m1.png';
import m3 from '../m3.jpg';
import m4 from '../m4.jpg';
import p0 from '../p0.png';
import p0d from '../p0d.png';
import p1 from '../p1.png';
import p2 from '../p2.png';
import p3 from '../p3.png';
import p4 from '../p4.png';
import d0 from '../d0.png';
import d1 from '../d1.png';
import d2 from '../d2.png';
import d3 from '../d3.png';
import c0 from '../c0.png';
import c0d from '../c0d.png';
import c1 from '../c1.jpg';
import c2 from '../c2.jpg';
import c3 from '../c3.jpg';
import c4 from '../c4.png';

export const PROJECTS: Project[] = [
  {
    id: 'go-around-mobius',
    title: { en: 'Go Around Mobius', ja: 'Go Around Mobius', zh: 'Go Around Mobius' },
    year: '2025.12',
    duration: '2min 25s',
    category: 'Animation',
    description: {
      en: '“Everything goes, everything returns; the wheel of being rolls for ever.” A short film that takes Nietzsche’s idea of eternal return as its starting point.',
      ja: '「すべてのものは流れ去り、すべてのものは還る。存在の輪は絶えず回り続ける。」ニーチェの「永遠回帰」の思想を出発点として制作された短編作品。',
      zh: '「一切都在流逝，一切都在回归；存在之轮永远转动。」以尼采「永恒回归」的思想为起点创作的短片。',
    },
    technique: {
      en: 'One-cut experiment, loop structure, layered materials',
      ja: 'ワンカットの実験, ループ構造の実験, 素材の重ね合わせ',
      zh: '一镜到底实验、循环结构、素材叠加',
    },
    thumbnail: go0,
    videoUrl: 'https://www.youtube.com/embed/9UzdFz5dF_g',
    images: [go1, go2],
    details: {
      en: [
        'Shifting landscapes drawn improvisationally on tracing paper, arranged as a Möbius strip.',
        'A single unbroken shot sustained across roughly two minutes of animation.',
        'Layered glassine paper gives the image a soft blur and a sense of depth.',
        'Scored with Bach’s Musical Offering (BWV 1079).',
      ],
      ja: [
        'トレーシングペーパーに即興的に描いた移り変わる風景を、メビウスの輪として表現。',
        '約2分間にわたるアニメーションのワンカット体験を創出。',
        '硫酸紙を重ねることで画面にぼんやりとした効果を与え、奥行きを持たせる試み。',
        'バッハの《音楽の捧げもの》(BWV1079)を背景音楽として採用。',
      ],
      zh: [
        '在描图纸上即兴绘制的流动风景，被组织成一条莫比乌斯环。',
        '用一个镜头不间断地撑起约两分钟的动画体验。',
        '叠加硫酸纸让画面产生朦胧感，为画面带出纵深。',
        '采用巴赫《音乐的奉献》(BWV1079) 作为配乐。',
      ],
    },
  },
  {
    id: 'in-the-box',
    title: { en: 'In the Box', ja: '箱の中', zh: '箱中' },
    year: '2023.6',
    duration: '4min 28s',
    category: 'Animation',
    description: {
      en: 'Noticing that the old things I had kept had quietly disappeared, this film is about the loss and the change that come with growing up.',
      ja: '保存していた古いものがいつの間にか消えてしまったことに気づき、成長過程における「喪失」と「変化」を表現した作品。',
      zh: '察觉到一直收着的旧物不知何时已经消失，于是把成长过程中的「失去」与「变化」做成了这部作品。',
    },
    technique: {
      en: 'Hand-drawn animation with live action, 3D assistance, rotoscoping, stop motion',
      ja: '手描きアニメーション + 実写映像, 3D補助, ロトスコープ, ストップモーション',
      zh: '手绘动画 + 实拍影像、3D 辅助、转描、定格动画',
    },
    thumbnail: b0,
    videoUrl: 'https://www.youtube.com/embed/HZSE1tKtVyI',
    images: [b1, b2, b3, b4],
    details: {
      en: [
        'Hand-drawn animation combined with live action to trace my own growing up.',
        'Mixing 3D assistance, rotoscoping, stop motion and collage within one piece.',
        'Filmed a cabinet being opened, then rebuilt the footage as collage.',
      ],
      ja: [
        '手描きアニメーションと実写映像を結合し、自身の成長過程を表現。',
        '3D補助、ロト、ストップモーション、コラージュなど様々な形式を試行。',
        'キャビネットが開く過程を記録し、コラージュ形式で素材を再構成。',
      ],
      zh: [
        '把手绘动画与实拍影像结合，讲述自己的成长过程。',
        '在一部片子里混用 3D 辅助、转描、定格与拼贴等多种形式。',
        '记录柜子被打开的过程，再以拼贴的方式重组素材。',
      ],
    },
  },
  {
    id: 'when-the-light-off',
    title: { en: 'When the Light Off', ja: '消灯 (When the Light Off)', zh: '关灯 (When the Light Off)' },
    year: '2022.6',
    duration: '3min 16s',
    category: 'Animation',
    description: {
      en: 'A short film built from childhood memories of being afraid of the dark, using large fields of yellow and blue to stand for light and darkness.',
      ja: '幼い頃の暗黒恐怖の記憶に基づいて作られた短編映画。黄色と青を大量に使用して光と暗を体現。',
      zh: '根据幼时对黑暗的恐惧记忆制作的短片。大量使用黄色与蓝色来体现光与暗。',
    },
    technique: {
      en: 'Hand-drawn, live action, After Effects compositing',
      ja: '手描き, 実写映像, AE合成',
      zh: '手绘、实拍影像、AE 合成',
    },
    thumbnail: a0,
    videoUrl: 'https://www.youtube.com/embed/SmVgtUIzETU',
    images: [a1, a2, a3],
    details: {
      en: [
        'Characters and sets designed the way a child would see them, to hold on to a child’s point of view.',
        'A visual style built from high-contrast colour and deliberately simple shapes.',
        'Nominated at Animur Film Festival (2022) and kinovertikal Film Festival (2022), among others.',
      ],
      ja: [
        '子供向けのキャラクターとシーンデザインを採用し、子供の視点を再現。',
        '鮮明なコントラスト色とシンプルな造形を組み合わせた独特な芸術スタイル。',
        'Animur film festival (2022) や kinovertikal film festival (2022) 等にノミネート。',
      ],
      zh: [
        '采用面向儿童的角色与场景设计，还原孩子的视角。',
        '用高对比度色彩搭配简化造型，形成独特的画面风格。',
        '入围 Animur Film Festival (2022)、kinovertikal Film Festival (2022) 等影展。',
      ],
    },
  },
  {
    id: 'little-zoo',
    title: { en: 'Little Zoo', ja: 'Little Zoo', zh: 'Little Zoo' },
    year: '2024 — 2026',
    category: 'Design',
    description: {
      en: 'A web game built around AI. The creature you sketch comes to life in a world shared with everyone else’s, meets the others living there, and eventually dies.',
      ja: 'AI を軸に企画した Web ゲーム。プレイヤーが描いた線画が他の人の生き物と同じ世界の中で生き、出会い、やがて死を迎える。',
      zh: '以 AI 为核心企划的网页游戏。玩家画下的线稿会在与所有人共享的世界里生活、与其他生物相遇，并最终迎来死亡。',
    },
    technique: {
      en: 'Web design, AI integration, Cloudflare Workers / D1 / R2',
      ja: 'Web デザイン, AI 統合, Cloudflare Workers / D1 / R2',
      zh: '网页设计、AI 集成、Cloudflare Workers / D1 / R2',
    },
    thumbnail: z0,
    thumbnailStyle: 'icon',
    thumbnailScale: 0.5,
    images: [z1, z2, z3],
    details: {
      en: [
        'Reads the features of a rough sketch and derives the animal’s species, build, walking speed and temperament.',
        'Every creature is persistent and shared — the zoo you walk into is the one other people populated.',
        'Rebuilt on Cloudflare in 2026: D1 holds the world’s state and R2 the drawings, after a free-tier database kept pausing and taking the zoo down with it.',
        'An experiment in treating AI as a design material rather than as a feature.',
      ],
      ja: [
        'プレイヤーが描いた簡筆画の特徴を解析し、動物の種別、体型、移動速度、性格などを判別。',
        '生き物はすべてサーバー側に保存され共有される。他の誰かが育てた動物園に、あとから入っていく形になる。',
        '2026年に Cloudflare へ移行。世界の状態は D1、線画は R2 が保持する。無料枠のデータベースが停止して動物園ごと落ちる問題を解消するため。',
        'AI を機能ではなくデザインの素材として扱えるか、という実験。',
      ],
      zh: [
        '解析玩家画的简笔画特征，判定动物的种别、体型、移动速度与性格。',
        '所有生物都存在服务端并共享——你进入的是别人一起养出来的动物园。',
        '2026 年整体迁到 Cloudflare：世界状态放 D1，线稿存 R2——此前免费额度的数据库会自动暂停，一停整个动物园就下线。',
        '一次关于「能否把 AI 当作设计材料而非功能」的验证。',
      ],
    },
    externalLink: {
      label: { en: 'Visit Website', ja: 'サイトを見る', zh: '打开网站' },
      url: 'https://little-zoo.pages.dev',
    },
  },
  {
    id: 'music-theory-king',
    title: { en: 'Super Basic Music', ja: '初心楽典', zh: '初心乐理' },
    year: '2024 — 2026',
    category: 'Design',
    description: {
      en: 'A theory and practice companion for jazz and pop musicians, started while learning jazz guitar as a way to make theory actually stick. Now a native iOS app, in preparation for the App Store.',
      ja: 'ジャズ&ポップス奏者のための楽典学習・練習ツール。ジャズギターを学ぶ過程で、音楽理論を体に入れるために作り始めたもの。現在は iOS ネイティブアプリとして App Store 申請の準備中。',
      zh: '面向爵士与流行乐手的乐理学习与练习工具。最初是学爵士吉他时为了真正记住理论而做的，现在已是 iOS 原生应用，正在准备上架 App Store。',
    },
    technique: {
      en: 'UI design, iOS (Capacitor), Web Audio, AI score recognition',
      ja: 'UI デザイン, iOS (Capacitor), Web Audio, AI 譜面認識',
      zh: 'UI 设计、iOS (Capacitor)、Web Audio、AI 识谱',
    },
    thumbnail: m0,
    thumbnailStyle: 'icon',
    thumbnailScale: 0.5,
    images: [m1, m3, m4],
    details: {
      en: [
        'Photograph a chord chart and the AI reads every phrase — roman numerals, harmonic function (T/SD/D) and the matching scales. Every result stays editable by hand.',
        'Record a passage and get its chord progression back.',
        'Pick a progression and practise against instant jazz backing: accompaniment style × bass line (walking bass included) × drum pattern, at any tempo.',
        'Tap any chord to hear it, see its fretboard shape and its scale; circle of fifths and a full chord library built in.',
        'A precise guitar tuner with alternate tunings, plus a metronome.',
        'Five original functional-harmony etudes with phrase-by-phrase commentary: major ii–V–I, minor iiø–V–i, jazz blues, AABA and turnarounds.',
        'Interface in English, Japanese and Chinese. No ads, no tracking, no analytics SDKs.',
      ],
      ja: [
        'コード譜を撮影すると、AI が各フレーズのコードを認識し、度数・機能(T/SD/D)・対応スケールを解析。結果は手動で修正できる。',
        '演奏を録音して、その中のコード進行を解析。',
        'コード進行を選ぶだけでジャズ風の伴奏を即生成。伴奏スタイル × ベースライン(ウォーキングベース対応) × ドラムパターンを自由に組み合わせ、テンポも調整可能。',
        'コードをタップすると音が鳴り、指板のフォームと対応スケールを表示。五度圏とコードライブラリを内蔵。',
        '変則チューニングに対応した高精度ギターチューナーとメトロノーム。',
        'メジャー ii–V–I、マイナー iiø–V–i、ジャズブルース、AABA、ターンアラウンドの5つのオリジナル機能和声練習を、フレーズごとの解説付きで収録。',
        '日本語 / English / 中文 の3言語対応。広告なし、トラッキングなし、分析 SDK なし。',
      ],
      zh: [
        '拍下一张和弦谱，AI 自动识别每个乐句的和弦，并给出级数、功能(T/SD/D)与配套音阶分析；识别结果可以手动修改。',
        '录一段音乐，分析其中的和弦进行。',
        '选好和弦进行即刻生成爵士风格伴奏：多种伴奏风格 × 贝斯线(含 Walking Bass) × 鼓型自由组合，速度可调。',
        '点击任意和弦即可发声，查看指板指型与对应音阶；五度圈与和弦库全内置。',
        '支持变格调弦的高精度吉他调音器，以及节拍器。',
        '内置大调 ii–V–I、小调 iiø–V–i、爵士布鲁斯、AABA、Turnaround 五套原创功能和声练习，配逐句讲解。',
        '中文 / English / 日本語 三语界面。无广告，无行为跟踪，无统计 SDK。',
      ],
    },
    externalLink: {
      label: { en: 'Official Website', ja: '公式サイト', zh: '官方网站' },
      url: 'https://superbasicmusic.rokajun.com/',
    },
    note: {
      en: 'The iOS app is being prepared for the App Store.',
      ja: 'iOS 版は App Store 申請の準備中です。',
      zh: 'iOS 版正在准备上架 App Store。',
    },
  },
  {
    id: 'lingo-cram',
    title: { en: 'Lingo Cram', ja: '直前の語学', zh: '抱佛脚外语' },
    year: '2026',
    category: 'Design',
    description: {
      en: 'An iOS app for the language you need tomorrow. Write down what is about to happen — a dentist appointment, an interview, a trip — and it builds a pack of only the words that occasion needs, then rehearses them with you.',
      ja: '「明日必要になる言葉」だけを用意する iOS アプリ。これから起きること（歯医者、面接、旅行など）を書くと、その場面でしか使わない単語とフレーズを一冊分つくり、そのまま会話の練習相手になる。',
      zh: '一个只准备「明天就要用」的语言的 iOS 应用。写下你马上要面对的事——看牙、面试、旅行——它会生成一册只和这件事有关的词句，并陪你把它们练到能说出口。',
    },
    technique: {
      en: 'SwiftUI, Cloudflare Workers, LLM + speech synthesis, StoreKit 2, iCloud sync',
      ja: 'SwiftUI, Cloudflare Workers, LLM + 音声合成, StoreKit 2, iCloud 同期',
      zh: 'SwiftUI、Cloudflare Workers、LLM + 语音合成、StoreKit 2、iCloud 同步',
    },
    thumbnail: p0,
    thumbnailDark: p0d,
    thumbnailStyle: 'icon',
    thumbnailScale: 0.5,
    images: [p1, p2, p3, p4],
    details: {
      en: [
        'One line of context becomes a pack of words and phrases, each with its reading, when to use it, and an example sentence.',
        'Every pack comes with an AI character to rehearse against — a clerk, a dentist, an interviewer — who corrects whatever sounds off.',
        'Japanese, Mandarin and English, with kana above the Japanese and pinyin above the Mandarin.',
        'Voice input follows the language of the pack; every line reads aloud at an adjustable speed.',
        'Cover the target language and recall it from the meaning, or the other way round. What you remember sinks to the bottom.',
        'iCloud sync across devices, and a wooden fish to tap for merit while you wait.',
        'Design, code, icon and store copy all done in-house. The name comes from 临时抱佛脚 — grabbing the Buddha’s feet at the last minute.',
      ],
      ja: [
        '一行の状況説明から、読み・使う場面・例文つきの単語とフレーズが一冊分生成される。',
        '各セットに会話相手の AI キャラクターがつく。店員、歯科医、面接官——言い方がずれていればその場で直してくれる。',
        '日本語・中国語・英語に対応。日本語にはふりがな、中国語にはピンインが付く。',
        '音声入力はセットの言語に追従し、どの行も読み上げ可能。速度も調整できる。',
        '学習中の言語を隠して意味から思い出す、あるいはその逆。覚えたものは下に沈んでいく。',
        'iCloud 同期に対応。待っているあいだに木魚を叩いて功徳を積める。',
        'デザイン・実装・アイコン・ストア文案まですべて自作。名前は中国語の「臨時抱佛脚」——土壇場で仏の足にすがる、という言い回しから。',
      ],
      zh: [
        '一句场景描述，生成一册带读音、使用时机与例句的词汇和短句。',
        '每本词册都配一位 AI 对话角色——店员、牙医、面试官——说错了当场给你修正。',
        '支持日语、普通话与英语，日语标假名，普通话标拼音。',
        '语音输入自动跟随词册的语言，每句都能朗读，语速可调。',
        '遮住外语只看释义，或者反过来练。记住的内容会沉到底部。',
        '支持 iCloud 多设备同步；等待的时候还能敲敲木鱼攒点功德。',
        '设计、代码、图标到商店文案全部自己做。名字来自「临时抱佛脚」。',
      ],
    },
    externalLink: {
      label: { en: 'Get it on the App Store', ja: 'App Store で入手', zh: '在 App Store 下载' },
      // Region-neutral: Apple redirects to the visitor's own storefront.
      url: 'https://apps.apple.com/app/id6790152322',
    },
    note: {
      en: 'On the App Store since August 2026.',
      ja: '2026年8月から App Store で公開中。',
      zh: '2026 年 8 月起在 App Store 上线。',
    },
  },
  {
    id: 'japan-driving-theory',
    title: { en: 'Japan Driving Theory Prep', ja: '日本免許速通手帳', zh: '日本免许速通手册' },
    year: '2026',
    category: 'Design',
    description: {
      en: 'A practice app for the written test of a Japanese driving licence — foreign-licence conversion, provisional and full. 1,487 questions in Chinese, Japanese and English, every answer checked against the statutes.',
      ja: '日本の運転免許・学科試験の問題集アプリ。外免切替・仮免・本免に対応。1487問を中国語・日本語・英語で収録し、すべての答えを法令原文と照合している。',
      zh: '日本驾照学科考试的练习 App，覆盖外免切替、仮免与本免。1487 道题，中日英三语，每一道的答案都逐条对过法令原文。',
    },
    technique: {
      en: 'iOS (WKWebView) and Android, vanilla JS, Web Audio, statutes from e-Gov',
      ja: 'iOS (WKWebView) / Android, Vanilla JS, Web Audio, e-Gov の法令原文',
      zh: 'iOS (WKWebView) 与 Android、原生 JS、Web Audio、e-Gov 法令原文',
    },
    thumbnail: d0,
    thumbnailStyle: 'icon',
    thumbnailScale: 0.5,
    images: [d1, d2, d3],
    details: {
      en: [
        'Commercial question banks copy from each other, so their mistakes travel together. Every answer here was checked article by article against the Road Traffic Act, its Order and Regulations, the Signs Order and the Road Structure Ordinance; where one did not match current law it is corrected, with the article cited beneath the question.',
        'Weak areas are ranked by the marks you would actually lose on the test — a topic’s share of the bank × your error rate × the test length — not by raw error rate.',
        'Your whole history, scaled to the real test: a projected score and how many marks short of the pass line you are.',
        'Progressive mode re-asks the points you missed, but swaps in a question on the same point with the opposite statement, so you learn the rule rather than the question.',
        '136 road-sign images, each checked against Appendix 1 of the Signs Order, plus key-rule cards for 20 topics and 7 kinds of trap question.',
        'No AI anywhere: marking and analysis are local rules, so it works fully offline. Free, no purchases, no account needed.',
      ],
      ja: [
        '市販の問題集は互いに写し合っているため、誤りも一緒に受け継がれる。本アプリは道路交通法・同施行令・同施行規則・標識命令・道路構造令の原文と一条ずつ照合し、現行法令と合わないものは訂正したうえで、根拠条文を問題の下に明示している。',
        '弱点は不正解率ではなく「本試験で何問落とすか」で並べる（分野の出題比率 × 不正解率 × 本試験の問題数）。',
        'これまでの記録を本試験の問題数に換算し、予測得点と合格ラインまでの差を表示。',
        '「段階的」モードは間違えた論点を、同じ論点で正誤が逆の問題に差し替えて再出題する。問題番号ではなく規則を覚えるため。',
        '道路標識の図 136 枚（標識命令 別表第一と一枚ずつ照合）、20分野の要点カード、ひっかけ 7 類型の解説を収録。',
        'AI は使っていない。採点も分析も端末内のルールで行うため、完全にオフラインで動く。完全無料・課金なし・登録不要。',
      ],
      zh: [
        '市面上的题库互相抄，错的地方一起错。这里每一道题都拿道路交通法、施行令、施行规则、标识命令和道路构造令的原文逐条核对过；和现行法令不符的都已改正，并在题目下方列出所依据的条文。',
        '弱项按「真考试预计丢几题」排序（考点占比 × 你的错误率 × 考试题量），而不是只看错误率。',
        '把全部做题记录折算到真考试的题量，直接告诉你预计得分、离合格线还差几题。',
        '「循序渐进」模式会重考你错过的考点，但换成同一考点里说法相反的题——背的是规则，不是题号。',
        '136 张道路标识图（按标识命令别表第一逐张核对），20 个考点的知识卡，7 类陷阱题的拆解。',
        '完全不接 AI：判题和分析都是本地规则，可以完全离线使用。免费、无内购、不用注册。',
      ],
    },
    externalLink: {
      label: { en: 'Get it on the App Store', ja: 'App Store で入手', zh: '在 App Store 下载' },
      url: 'https://apps.apple.com/app/id6810967086',
    },
  },
  {
    id: 'cook-coach',
    title: { en: 'Cook Coach', ja: 'Cook Coach', zh: '手把手厨房' },
    year: '2026',
    category: 'Design',
    description: {
      en: 'An iOS app that turns a recipe screenshot or photo into step-by-step cooking you can follow with messy hands. The guide is Coco, a hopping chef’s hat with no hands — who still insists on teaching you hand in hand.',
      ja: 'レシピのスクリーンショットや写真を、手が汚れたままでも追える一歩ずつの調理ガイドに変える iOS アプリ。案内役は Coco——手のないコック帽なのに、手取り足取り教えると言い張る。',
      zh: '把菜谱截图或照片变成一步一步、手上沾着油也能照着做的做菜引导。带路的是 Coco——一顶会蹦的厨师帽，没有手，却坚持要「手把手」教你做菜。',
    },
    technique: {
      en: 'SwiftUI, Live Activities, watchOS, Cloudflare Workers / D1, AI recipe parsing',
      ja: 'SwiftUI, Live Activity, watchOS, Cloudflare Workers / D1, AI によるレシピ解析',
      zh: 'SwiftUI、Live Activity、watchOS、Cloudflare Workers / D1、AI 菜谱解析',
    },
    thumbnail: c0,
    thumbnailDark: c0d,
    thumbnailStyle: 'icon',
    thumbnailScale: 0.5,
    images: [c1, c2, c3, c4],
    details: {
      en: [
        'Screenshot a recipe from the web or photograph one from a book; AI breaks it into steps — what to do, which ingredients, how hot, how long to wait.',
        'Steps that involve waiting start their own timer, counting down on the Lock Screen and in the Dynamic Island.',
        'Say “next step” or “how long left” and keep greasy fingers off the screen. Prop the phone up sideways, or follow along on Apple Watch.',
        'About 400 built-in recipes, a cooking calendar, and a photo wall for the dishes you made.',
        'Poke Coco and it reminds you what to prep while you wait. Poke it too often and it gets grumpy.',
        'Typewriter and risograph look: monospaced type, a generated paper texture, and a colour for each kind of kitchen action.',
      ],
      ja: [
        'Web のレシピをスクショ、または本のレシピを撮影すると、AI が手順に分解する。何をするか、どの材料か、火加減、待ち時間まで。',
        '待ちが必要な手順は自動でタイマーが始まり、ロック画面とダイナミックアイランドでカウントダウンする。',
        '「次」「あと何分」と話しかければ、油のついた指で画面に触れなくていい。横向きに立てかけても、Apple Watch でも追える。',
        '内蔵レシピ約 400 品、料理カレンダー、作った料理の写真ウォール。',
        'Coco をつつくと、待ち時間に下ごしらえしておくことを教えてくれる。つつきすぎると怒る。',
        'タイプライターとリソグラフ印刷の質感：等幅フォント、生成した紙の地紋、調理動作ごとに分けた色。',
      ],
      zh: [
        '网上的菜谱截个图、书上的拍张照，AI 就拆成一步一步：做什么、用哪些料、开多大火、要等多久。',
        '需要等待的步骤自动计时，锁屏和灵动岛上一直显示倒计时。',
        '说「下一步」「还要多久」就能翻页，油乎乎的手不用碰屏幕。手机横着靠墙放、或者戴着 Apple Watch 都能跟着做。',
        '约 400 道内置菜谱、下厨日历，以及钉满成品照片的照片墙。',
        '戳一下 Coco，它会提醒你趁等待时先备下一步的料；戳太多下它会生气。',
        '打字机 + risograph 印刷的视觉：等宽字体、程序生成的纸张质感、每种烹饪动作各有一种颜色。',
      ],
    },
    externalLink: {
      label: { en: 'Official Website', ja: '公式サイト', zh: '官方网站' },
      url: 'https://cookcoach.rokajun.com/',
    },
  },
];
