import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'Sobre',
  },
  {
    id: 'tech',
    title: 'Tecnologias',
  },
  {
    id: 'projects',
    title: 'Projetos',
  },
  {
    id: 'work',
    title: 'Experiências',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'React.js Dev',
    icon: backend,
  },
  {
    title: 'HTML5 / CSS3',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'HTML5 / CSS3',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Fev 2022 - Jun 2022',
  },
  {
    title: 'Javascript',
    company_name: 'Udemy',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jun 2022 - Jan 2023',
  },
  {
    title: 'React.js',
    company_name: 'Udemy',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jul 2022 - Presente',
  },
  {
    title: 'Desenvolvedor Frontend',
    company_name: 'IM9 Digital',
    icon: dcc,
    iconBg: '#333333',
    date: 'Abr 2022 - Presente',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Formulário estilizado',
    description: 'Projeto formulário estilizado, feito a partir de HTML, CSS e JS..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/joaovtfor/pform.git',
    demo: 'https://github.com/joaovtfor/pform.git',
  },
  {
    id: 'project-2',
    name: 'Task List',
    description:
      'Projeto de lista de tarefas, feito a partir da biblioteca React.js.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/joaovtfor/Project-TaskList.git',
    demo: 'https://github.com/joaovtfor/Project-TaskList.git',
  },
  {
    id: 'project-3',
    name: 'Secret Word',
    description: 'Projeto de jogo da forca, feito a partir da biblioteca React.js.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/joaovtfor/projetosw.git',
    demo: 'https://github.com/joaovtfor/projetosw.git',
  },
  {
    id: 'project-4',
    name: 'Mini Blog - UPF',
    description: `Projeto de rede social vinculado à UPF, com Front-End construído com React.js, utilizando a API de banco de dados Firebase.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/joaovtfor/Projeto-UPF-React',
    demo: 'https://github.com/joaovtfor/Projeto-UPF-React',
  },
  {
    id: 'project-5',
    name: 'Exercícios em Python',
    description:
      'Repositório com exercícios, utilizando Python no curso de Ciência da Computação da Universidade de Passo Fundo (UPF).',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/joaovtfor/Python.git',
    demo: 'https://github.com/joaovtfor/Python.git',
  },
];

export { services, technologies, experiences, projects };
