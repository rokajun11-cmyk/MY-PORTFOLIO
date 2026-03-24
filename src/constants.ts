export interface Project {
  id: string;
  title: string;
  year: string;
  duration?: string;
  description: string;
  technique?: string;
  category: 'Animation' | 'Design' | 'Client Work';
  thumbnail: string;
  videoThumbnail?: string;
  videoUrl?: string;
  images: string[];
  details?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'go-around-mobius',
    title: 'Go Around Mobius',
    year: '2025.12',
    duration: '2min 25s',
    category: 'Animation',
    description: '「すべてのものは流れ去り、すべてのものは還る。存在の輪は絶えず回り続ける。」ニーチェの「永遠回帰」の思想を出発点として制作された短編作品。',
    technique: 'ワンカットの実験 (One-cut experiment), ループの実験, 素材叠加の試み',
    thumbnail: 'https://picsum.photos/seed/mobius-sketch/800/600',
    videoUrl: 'https://www.youtube.com/embed/9UzdFz5dF_g',
    images: [
      'https://picsum.photos/seed/mobius-1/1200/800',
      'https://picsum.photos/seed/mobius-2/1200/800',
      'https://picsum.photos/seed/mobius-3/1200/800'
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
    thumbnail: 'https://images.weserv.nl/?url=storage.googleapis.com/static-assets-public/ais-studio-build/user-uploads/wk53cnsk2ismmxbyiujsma/3067f53a-c840-4200-9283-36034177726f/0.png',
    videoUrl: 'https://www.youtube.com/embed/FXDzTNicqH0',
    images: [
      'https://images.weserv.nl/?url=storage.googleapis.com/static-assets-public/ais-studio-build/user-uploads/wk53cnsk2ismmxbyiujsma/3067f53a-c840-4200-9283-36034177726f/1.png',
      'https://images.weserv.nl/?url=storage.googleapis.com/static-assets-public/ais-studio-build/user-uploads/wk53cnsk2ismmxbyiujsma/3067f53a-c840-4200-9283-36034177726f/2.png',
      'https://images.weserv.nl/?url=storage.googleapis.com/static-assets-public/ais-studio-build/user-uploads/wk53cnsk2ismmxbyiujsma/3067f53a-c840-4200-9283-36034177726f/3.png',
      'https://images.weserv.nl/?url=storage.googleapis.com/static-assets-public/ais-studio-build/user-uploads/wk53cnsk2ismmxbyiujsma/3067f53a-c840-4200-9283-36034177726f/4.png'
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
    thumbnail: 'https://picsum.photos/seed/light-off-blue/800/600',
    videoUrl: 'https://www.youtube.com/embed/1zhMDnN15iQ',
    images: [
      'https://picsum.photos/seed/light-1/1200/800',
      'https://picsum.photos/seed/light-2/1200/800'
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
    thumbnail: 'https://picsum.photos/seed/web-zoo/800/600',
    images: [
      'https://picsum.photos/seed/zoo-ui/1200/800'
    ],
    details: [
      'プレイヤーが描いた簡筆画の特徴を解析し、動物の種別、体型、移動速度、性格などを判別。',
      'AIを用いたデザイン表現の可能性と実用性について検証する試み。'
    ]
  },
  {
    id: 'music-theory-king',
    title: 'Music Theory King',
    year: '2024',
    category: 'Design',
    description: 'ジャズギターの学習を進める中で、音楽理論の記憶をサポートするために制作したWebアプリケーション。',
    technique: 'UI Design, HTML/JavaScript',
    thumbnail: 'https://picsum.photos/seed/music-ui/800/600',
    images: [
      'https://picsum.photos/seed/music-app-1/1200/800',
      'https://picsum.photos/seed/music-app-2/1200/800'
    ],
    details: [
      '音程関係の記憶およびテスト機能、ギター指板上のポジションを覚えるための機能を搭載。',
      'AIによるプログラミング支援ツールを活用して実装。'
    ]
  }
];
