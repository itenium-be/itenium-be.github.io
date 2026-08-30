export type Category = 'use' | 'install' | 'run'

export type Project = {
  /** Also the basename of the card image in public/img */
  slug: string
  name: string
  pitch: string
  category: Category
  /** Absent while a project is still unpublished */
  href?: string
  hrefLabel: string
  github: string
  /** itenium.be write-up, when the primary link is not already the post */
  blog?: string
  snippet?: string
  tags: string[]
  status?: 'wip'
}

export const sections: { id: Category; title: string; intro: string }[] = [
  {id: 'use', title: 'Use it now', intro: 'Open it in a browser. Nothing to install.'},
  {id: 'install', title: 'Install it', intro: 'One command and it lives on your machine.'},
  {id: 'run', title: 'Run it yourself', intro: 'Clone it, spin it up, make it yours.'},
]

export const projects: Project[] = [
  {
    slug: 'qrgenerator',
    name: 'QRGenerator',
    pitch: 'QR codes that carry your colors and your icon',
    category: 'use',
    href: 'https://itenium-be.github.io/QRGenerator/',
    hrefLabel: 'Open',
    github: 'https://github.com/itenium-be/QRGenerator',
    tags: ['TypeScript', 'Browser'],
  },
  {
    slug: 'presentations',
    name: 'Presentations',
    pitch: 'A decade of itenium tech talks, rebuilt in Slidev',
    category: 'use',
    href: 'https://itenium-be.github.io/Presentations/',
    hrefLabel: 'Browse talks',
    github: 'https://github.com/itenium-be/Presentations',
    blog: 'https://itenium.be/blog/ai/a-decade-of-itenium-slides-reborn-in-slidev-2/',
    tags: ['Slidev', 'Vue'],
  },
  {
    slug: 'pdfmerge',
    name: 'PDF Workbench',
    pitch: 'Merge, reorder and split PDFs in the browser. No upload, no backend',
    category: 'use',
    href: 'https://itenium-be.github.io/PdfMerge/',
    hrefLabel: 'Open',
    github: 'https://github.com/itenium-be/PdfMerge',
    tags: ['TypeScript', 'Browser'],
  },
  {
    slug: 'starify-links',
    name: 'Starify Links',
    pitch: 'Every link wears its badge: GitHub stars, Bluesky followers, subscriber counts',
    category: 'install',
    href: 'https://chromewebstore.google.com/detail/kpficnopciffopkhjpckhkgmnlakcmig',
    hrefLabel: 'Add to Chrome',
    github: 'https://github.com/itenium-be/starify-links',
    blog: 'https://itenium.be/blog/javascript/starify-links/',
    tags: ['Chrome', 'TypeScript'],
  },
  {
    slug: 'yoink',
    name: 'Yoink',
    pitch: 'Because why just have a boring notification',
    category: 'install',
    href: 'https://itenium-be.github.io/Yoink/',
    hrefLabel: 'Read more',
    github: 'https://github.com/itenium-be/Yoink',
    blog: 'https://itenium.be/blog/ai/yoink-claude-notification-hooks/',
    snippet: '/plugin marketplace add itenium-be/Yoink',
    tags: ['Claude Code', 'PowerShell'],
  },
  {
    slug: 'mi-ke',
    name: 'Mi-Ke',
    pitch: 'AutoHotkey scripts that make daily life in Windows less dull',
    category: 'install',
    href: 'https://itenium-be.github.io/Mi-Ke/',
    hrefLabel: 'See the shortcuts',
    github: 'https://github.com/itenium-be/Mi-Ke',
    snippet: 'git clone https://github.com/itenium-be/Mi-Ke && .\\mike.ahk',
    tags: ['AutoHotkey', 'Windows'],
  },
  {
    slug: 'git-numberedadd',
    name: 'Git-NumberedAdd',
    pitch: 'git add, diff and reset files by number instead of by path',
    category: 'install',
    href: 'https://www.powershellgallery.com/packages/Git-NumberedAdd',
    hrefLabel: 'PowerShell Gallery',
    github: 'https://github.com/itenium-be/Git-NumberedAdd',
    blog: 'https://itenium.be/blog/dev-setup/git-numbered-add-for-powershell/',
    snippet: 'Install-Module -Name Git-NumberedAdd',
    tags: ['PowerShell', 'Git'],
  },
  {
    slug: 'date-holidays-be',
    name: 'date-holidays-be',
    pitch: 'Every official Belgian holiday, calculated',
    category: 'install',
    href: 'https://www.npmjs.com/package/@itenium/date-holidays-be',
    hrefLabel: 'View on npm',
    github: 'https://github.com/itenium-be/date-holidays-be',
    snippet: 'bun add @itenium/date-holidays-be',
    tags: ['TypeScript', 'npm'],
  },
  {
    slug: 'sql-training',
    name: 'SQL Training',
    pitch: 'SQL exercises on Postgres and SQL Server, with a leaderboard to make it hurt',
    category: 'run',
    href: 'https://itenium.be/blog/databases/sql-training/',
    hrefLabel: 'Read the post',
    github: 'https://github.com/itenium-be/sql-training',
    snippet: 'docker compose up -d --build',
    tags: ['SQL', 'Docker'],
  },
  {
    slug: 'meme-poster',
    name: 'Meme Poster',
    pitch: 'A random meme into Slack, on a timer',
    category: 'run',
    href: 'https://itenium.be/blog/ai/the-itenium-slack-meme-bot-with-claude-code/',
    hrefLabel: 'Read the post',
    github: 'https://github.com/itenium-be/meme-poster',
    tags: ['TypeScript', 'Slack'],
  },
  {
    slug: 'scout',
    name: 'Scout',
    pitch: 'A self-hosted deep research agent that files its findings for you',
    category: 'run',
    href: 'https://laoujin.github.io/Scout/',
    hrefLabel: 'Open the site',
    github: 'https://github.com/Laoujin/Scout',
    blog: 'https://itenium.be/blog/ai/scout-a-self-hosted-deep-research-agent-on-claude-code-2/',
    tags: ['Claude Code', 'Self-hosted'],
  },
  {
    slug: 'meridian',
    name: 'Meridian',
    pitch: 'A scroll-driven memory timeline that draws your travels on a map',
    category: 'run',
    href: 'https://laoujin.github.io/Meridian/',
    hrefLabel: 'Open the site',
    github: 'https://github.com/Laoujin/Meridian',
    blog: 'https://itenium.be/blog/ai/meridian-a-scroll-driven-memory-timeline/',
    tags: ['TypeScript', 'Self-hosted'],
  },
]
