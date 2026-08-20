import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'ja' | 'zh';

/** A value that exists in all three site languages. */
export type Localized<T = string> = Record<Lang, T>;

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日' },
  { code: 'zh', label: '中' },
];

const STORAGE_KEY = 'lj-portfolio-lang';

/** English is the default: the site is read mostly by people who share no other language. */
const DEFAULT_LANG: Lang = 'en';

/** For <html lang>. zh needs the script subtag so browsers pick a Simplified font. */
const HTML_LANG: Localized = { en: 'en', ja: 'ja', zh: 'zh-Hans' };

function readStored(): Lang {
  if (typeof localStorage === 'undefined') return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'ja' || stored === 'zh' ? stored : DEFAULT_LANG;
}

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readStored);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing can refuse writes; the choice just won't outlive the tab.
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);

/** Resolve any Localized value against the active language. */
export function useLocalized() {
  const { lang } = useLang();
  return <T,>(value: Localized<T>): T => value[lang];
}

/** Look up a chrome string by key. */
export function useT() {
  const { lang } = useLang();
  return (key: keyof typeof STRINGS): string => STRINGS[key][lang];
}

// --- Site chrome ---

export const STRINGS = {
  navWorks: { en: 'Works', ja: '作品', zh: '作品' },
  navProfile: { en: 'Profile', ja: 'プロフィール', zh: '关于' },
  navContact: { en: 'Contact', ja: 'コンタクト', zh: '联系' },

  homeTagline: {
    en: 'Lyu Jiachun — Animation artist and designer exploring the boundaries of hand-drawn media, loops, and digital interaction.',
    ja: '呂家淳 — 手描きのメディア、ループ構造、デジタルインタラクションの境界を探るアニメーション作家・デザイナー。',
    zh: '吕家淳 — 在手绘媒介、循环结构与数字交互的边界上创作的动画作者与设计师。',
  },
  comingSoon: { en: 'Coming Soon', ja: 'Coming Soon', zh: 'Coming Soon' },

  backToWorks: { en: 'Back to Works', ja: '作品一覧へ戻る', zh: '返回作品列表' },
  sectionDescription: { en: 'Description', ja: '作品について', zh: '作品简介' },
  sectionTechnique: { en: 'Technique', ja: '技法', zh: '技法' },
  sectionHighlights: { en: 'Key Highlights', ja: '制作のポイント', zh: '创作要点' },
  notFound: { en: 'Project not found.', ja: '作品が見つかりません。', zh: '未找到该作品。' },

  categoryAnimation: { en: 'Animation', ja: 'アニメーション', zh: '动画' },
  categoryDesign: { en: 'Design', ja: 'デザイン', zh: '设计' },
  categoryClientWork: { en: 'Client Work', ja: 'クライアントワーク', zh: '商业委托' },

  profileName: { en: 'Lyu Jiachun', ja: '呂 家淳', zh: '吕 家淳' },
  profileNameSub: { en: '呂 家淳', ja: 'Lyu Jiachun', zh: 'Lyu Jiachun' },
  profileMainWorks: { en: 'Main Works', ja: '主な作品', zh: '主要作品' },

  contactTitle: { en: 'Get in touch', ja: 'お問い合わせ', zh: '联系我' },
  contactEmail: { en: 'Email', ja: 'メール', zh: '邮箱' },
  contactPhone: { en: 'Phone', ja: '電話', zh: '电话' },
  contactSocial: { en: 'Social', ja: 'SNS', zh: '社交账号' },
  contactLocation: { en: 'Location', ja: '所在地', zh: '所在地' },
  contactCity: { en: 'Kyoto, Japan', ja: '日本・京都', zh: '日本 京都' },

  footerRights: {
    en: '© 2026 Lyu Jiachun. All Rights Reserved.',
    ja: '© 2026 呂家淳 All Rights Reserved.',
    zh: '© 2026 吕家淳 保留所有权利。',
  },

  langSwitchLabel: { en: 'Language', ja: '言語', zh: '语言' },
} satisfies Record<string, Localized>;

/** Profile body copy, as paragraphs. */
export const PROFILE_BIO: Localized<string[]> = {
  en: [
    'Born in 2000, working as an animation artist at the intersection of traditional hand-drawn techniques and digital experimentation.',
    'The practice centers on philosophical themes such as “Eternal Return” and the passage of time, explored through experimental formats including one-cut animations and loop structures.',
    'When the Light Off (2022) received international recognition, with nominations at festivals such as Animur Film Festival and kinovertikal. Current work continues to explore spatial expression and narrative through a multidisciplinary approach involving 3D assistance, rotoscoping, and UI design.',
    'Alongside filmmaking, the studio designs and builds its own software — web games and iOS apps in which drawing, sound, and interaction are treated as one material.',
  ],
  ja: [
    '2000年生まれ。手描きの伝統的な技法とデジタルの実験が交わる場所で、アニメーション作家として制作を続けています。',
    '「永遠回帰」や時間の流れといった哲学的なテーマを軸に、ワンカットアニメーションやループ構造など実験的な形式で表現しています。',
    '『When the Light Off』(2022) は Animur Film Festival、kinovertikal などにノミネートされました。現在は 3D 補助、ロトスコープ、UI デザインを横断しながら、空間表現と語りの可能性を探っています。',
    '映像制作と並行して、自らソフトウェアの設計と開発も手がけています。絵、音、インタラクションをひとつの素材として扱う Web ゲームや iOS アプリを制作しています。',
  ],
  zh: [
    '2000 年出生。在手绘传统技法与数字实验的交界处持续创作的动画作者。',
    '创作围绕「永恒回归」与时间流逝等哲学主题展开，通过一镜到底、循环结构等实验性形式进行表达。',
    '《When the Light Off》(2022) 入围 Animur Film Festival、kinovertikal 等国际影展。近期的创作横跨 3D 辅助、转描与 UI 设计，继续探索空间表达与叙事的可能性。',
    '除影像创作之外，也自己设计并开发软件——把绘画、声音与交互当作同一种材料来处理的网页游戏与 iOS 应用。',
  ],
};
