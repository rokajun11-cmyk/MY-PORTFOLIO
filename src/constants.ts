export interface Project {
  id: string;
  title: string;
  year: string;
  duration?: string;
  description: string;
  technique?: string;
  category: 'Animation' | 'Design' | 'Client Work';
  thumbnail: string;
  thumbnailStyle?: 'cover' | 'icon';
  thumbnailScale?: number;
  videoThumbnail?: string;
  videoUrl?: string;
  images: string[];
  details?: string[];
  externalLink?: {
    label: string;
    url: string;
  };
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
import m2 from '../m2.jpg';
import m3 from '../m3.jpg';
import m4 from '../m4.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'go-around-mobius',
    title: 'Go Around Mobius',
    year: '2025.12',
    duration: '2min 25s',
    category: 'Animation',
    description: '「すべてのものは流れ去り、すべてのものは還る。存在の輪は絶えず回り続ける。」ニーチェの「永遠回帰」の思想を出発点として制作された短編作品。',
    technique: 'ワンカットの実験 (One-cut experiment), ループの実験, 素材叠加の試み',
    thumbnail: go0,
    videoUrl: 'https://www.youtube.com/embed/9UzdFz5dF_g',
    images: [
      go1,
      go2
    ],
    details: [
      'トレーシングペーパーに即興的に描いた移り変わる風景を、メビウスの輪として表現。',
      '約2分間にわたるアニメーションのワンカット体験を創出。',
      '硫酸紙を重ねることで画面にぼんやりとした効果を与え、奥行きを持たせる試み。',
      'バッハの《音楽の捧げもの》(BWV1079)を背景音楽として採用。'
    ]
  },
  {
    id: 'in-the-box',
    title: '箱の中 (In the Box)',
    year: '2023.6',
    duration: '4min 28s',
    category: 'Animation',
    description: '保存していた古いものがいつの間にか消えてしまったことに気づき、成長過程における「喪失」と「変化」を表現した作品。',
    technique: '手描きアニメーション + 実写映像, 3D補助, ロトスコープ, ストップモーション',
    thumbnail: b0,
    videoUrl: 'https://www.youtube.com/embed/FXDzTNicqH0',
    images: [
      b1,
      b2,
      b3,
      b4
    ],
    details: [
      '手描きアニメーションと実写映像を結合し、自身の成長過程を表現。',
      '3D補助、ロト、ストップモーション、コラージュなど様々な形式を試行。',
      'キャビネットが開く過程を記録し、コラージュ形式で素材を再構成。'
    ]
  },
  {
    id: 'when-the-light-off',
    title: 'When the light off (关灯)',
    year: '2022.6',
    duration: '3min 16s',
    category: 'Animation',
    description: '幼い頃の暗黒恐怖の記憶に基づいて作られた短編映画。黄色と青を大量に使用して光と暗を体現。',
    technique: '手描き, 実写映像, AE合成',
    thumbnail: a0,
    videoUrl: 'https://www.youtube.com/embed/1zhMDnN15iQ',
    images: [
      a1,
      a2,
      a3
    ],
    details: [
      '子供向けのキャラクターとシーンデザインを採用し、子供の視点を再現。',
      '鮮明なコントラスト色とシンプルな造形を組み合わせた独特な芸術スタイル。',
      'Animur film festival (2022) や kinovertikal film festival (2022) 等にノミネート。'
    ]
  },
  {
    id: 'little-zoo',
    title: 'Little Zoo',
    year: '2024',
    category: 'Design',
    description: 'AI機能を基盤として企画したWebゲーム。プレイヤーが描いた線画が同一の世界の中で生活し、他者と出会い、やがて死を迎える。',
    technique: 'Web Design, AI Integration',
    thumbnail: z0,
    thumbnailStyle: 'icon',
    thumbnailScale: 0.66,
    images: [
      z1,
      z2,
      z3
    ],
    details: [
      'プレイヤーが描いた簡筆画の特徴を解析し、動物の種別、体型、移動速度、性格などを判別。',
      'AIを用いたデザイン表現の可能性と実用性について検証する試み。'
    ],
    externalLink: {
      label: 'Visit Website',
      url: 'https://little-zoo-rokajuns-projects.vercel.app?_vercel_share=sdJ456sb0XDxJK5JdBhlv8C1FeI9RVe8'
    }
  },
  {
    id: 'music-theory-king',
    title: 'Music Theory King',
    year: '2024',
    category: 'Design',
    description: 'ジャズギターの学習を進める中で、音楽理論の記憶をサポートするために制作したWebアプリケーション。',
    technique: 'UI Design, HTML/JavaScript',
    thumbnail: m0,
    thumbnailStyle: 'icon',
    thumbnailScale: 0.5,
    images: [
      m1,
      m2,
      m3,
      m4
    ],
    details: [
      '音程関係の記憶およびテスト機能、ギター指板上のポジションを覚えるための機能を搭載。',
      'AIによるプログラミング支援ツールを活用して実装。'
    ]
  }
];
