import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bhupendra Devada | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bhupendra Devada',
  subtitle: 'I am a MERN Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'My name is Bhupendra Devada and I belong to Indore. I am pursuing B.Tech in computer science specialisation from Indore Institute of Science and Technology. ',
  paragraphTwo:
    'I am a MERN stack developer with more than 500 hours of building and deploying single page/eCommerce applications. and along with MERN stack I also have good knowledge of Android, PHP, MySQL, HTML and CSS. ',
  paragraphThree:
    'I can adapt onto any technology rapidly making myself flexible upon any tech stack. A passionate, diligent person who wants to learn continuously.',
  resume: 'https://drive.google.com/file/d/1rN4hizTgCLWJxQ4KwzpbwjUnYSRCqeu6/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'proshop.jpg',
    title: 'ProShop',
    info: 'It is an E-commerce app where user can register himself and search the products they need then they can add the products to cart and can pay using PayPal account. There is an Admin Panel where admin can manage products, users as well as orders.',
    info2:
      'The complete app is created using MERN Technology. For UI react-bootstrap is used and for state management Redux is used.',
    url: 'http://proshopee.herokuapp.com/',
    repo: 'https://github.com/Bhupendra98/ProShopApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'video-chat-app.jpg',
    title: 'Video Chat App',
    info: 'It is a chat app where user can video call their Friends and Family at real time. To initiate a call first user have to send a key to other user then using that key second user can call the first one.',
    info2:
      'Frontend of app is created using React while for Backend node and express are used. For a reat time communication socket.io is used',
    url: 'https://video-chat-appe.netlify.app/',
    repo: 'https://github.com/Bhupendra98/video-chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Weather-reports.jpg',
    title: 'Weather Reports',
    info: 'It is a vanila javascript project in which user can directly get currnt weather information of their location or user can search any location to get Weather Information of that location',
    info2:
      'For UI design HTML, CSS and bootstrap is used while to get weather information openweathermap api is used.',
    url: 'https://bhupendra98.github.io/weather-reports/',
    repo: 'https://github.com/Bhupendra98/weather-reports', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'monudevada1998@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'linkedin.com/in/bhupendra-devada-336210195',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Bhupendra98',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/monudevada/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
