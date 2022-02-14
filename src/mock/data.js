import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Websloute', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: 'Websolute pave the way', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'pave the way',
  name: 'Websolute',
  subtitle: 'IT Community for Hustler, Hipster, Hacker',
  subtitleFirst: 'IT Community for',
  subtitleLast: 'Hustler, Hipster, Hacker',
  cta: 'More Information',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '팀원 간 자유로운 소통과 함께 다양한 "서비스 제작"을 경험하실 수 있습니다.',
  paragraphTwo:
    '서비스 제작 경험을 넘어 팀원 모두가 상생하고 새로운 길을 개척하여 새로운 문화를 만들고 그것에 몰입하는 것이 궁극적인 목표입니다.',
  paragraphThree: '← Websolute Gather Town (회의하는 모습 ver.)',
};

// ABOUT DATA
export const recruitData = {
  img: 'recruits.png',
  imgTwo: 'recruit.png',
  paragraphOne: '프로젝트 매니징(PM), 브랜딩&마케팅, 학회 운영에 관심있으신분!',
  paragraphTwo: '서비스 디자인 및 학회 템플릿 디자인에 관심있으신 분!',
  paragraphThree:
    '서비스 개발, 배포, 유지보수를 포함한  서비스 제작에 관심있으신 분! (분야 상관 X)',
  resume1: 'https://forms.gle/kuuHovEV7tFFf7He6', // if no resume, the button will not show up
  resume2: 'https://forms.gle/hFfnQv9mLzgSd1aDA', // if no resume, the button will not show up
  resume3: 'https://forms.gle/L7dVFJ5LH7mkhqUi7', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'CampusMap',
    info: '한국외대 글로벌캠퍼스 각 건물의 위치와 건물 내부 파악을 도와주는 웹서비스',
    info2: '#Node_Express #React #GraphQL #Postgresql #Kakao_Map',
    url: 'https://www.campusmap.kr/',
    repo: 'https://github.com/Web-solute/CampusMap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Booting',
    info: '한국외대 비대면 랜덤 과팅(단체팅) 매칭 서비스',
    info2: '#Node_Express #React #GraphQL #Postgresql',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Hoops',
    info: '한국외대 세미나실 예약 및 출입 관리 시스템(With QR도어락)',
    info2: '#Node_Express #React #GraphQL #Postgresql #IoT',
    url: 'https://github.com/Web-solute/StudyRoomService',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '궁금한 것은 언제든지 아래로 문의해주세요!',
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/web_solute/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://fb.me/websoluteOfficial',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Web-solute',
    },
  ],
};

// FOOTER DATA
// export const footerData = {
//   networks: [
//     {
//       id: nanoid(),
//       name: 'instagram',
//       url: 'https://www.instagram.com/web_solute/',
//     },
//     {
//       id: nanoid(),
//       name: 'facebook',
//       url: 'https://fb.me/websoluteOfficial',
//     },
//     {
//       id: nanoid(),
//       name: 'github',
//       url: 'https://github.com/Web-solute',
//     },
//   ],
// };

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
