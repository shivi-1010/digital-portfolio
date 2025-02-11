// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shivani",
  middleName: "Shaileshkumar",
  lastName: "Varu",
  message: " Hi! I’m a tech enthusiast with a passion for solving technical challenges and delivering high-quality IT solutions. With a strong foundation in Information Technology and hands-on experience in Cloud administration, IT support, and software development I bring a unique blend of skills to the table.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shivi-1010/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/shivani.varu.3/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/shiviiii_1001/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shivani-varu-1012000/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/shivanivaru.JPEG"),
  imageSize: 375,
  message:
    "My name is Shivani Varu. I’m a graduate of 2025 from George Brown College at Toronto with a post graduate certificate in Cloud Computing Technologies. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "<iframe src=\"https://1drv.ms/b/c/3359ca0e72f1cfbc/IQSLUdE0EblQSZ57bcnKdsHWAbhm821OK7XmkB6DdzWAlZE\" width=\"98\" height=\"120\" frameborder=\"0\" scrolling=\"no\"></iframe>",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "shivi-1010", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"450"
//   }
// };
// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "I have demonstrated leadership through my contributions to cloud computing and IT support initiatives. During my tenure as a Student Associate at Gujarat Technological University, I led a team in developing a web-based registration platform, enhancing user engagement by 40%. Additionally, I have guided peers in cloud migration projects and IT troubleshooting, fostering collaborative learning environments. My ability to organize and coordinate technical events, like the 'Converse 2020' tech fest, showcases my strong leadership and problem-solving skills.",
  images: [
    { 
      img: require("../editable-stuff/shivanivaru.JPEG"), 
      label: "Leading Cloud Initiatives", 
      paragraph: "Managed cloud migration projects and mentored peers in AWS services, improving operational efficiency." 
    },
    { 
      img: require("../editable-stuff/shivanivaru.JPEG"), 
      label: "Event Leadership", 
      paragraph: "Organized and marketed a virtual placement prep event, increasing participant engagement by 40%." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// // SKILLS SECTION
// const skills = {
//   show: true,
//   heading: "Skills",
//   hardSkills: [
//     { name: "Python", value: 90 },
//     { name: "SQL", value: 75 },
//     { name: "Data Structures", value: 85 },
//     { name: "C/C++", value: 65 },
//     { name: "JavaScript", value: 90 },
//     { name: "React", value: 65 },
//     { name: "HTML/CSS", value: 55 },
//     { name: "C#", value: 80 },
//   ],
//   softSkills: [
//     { name: "Goal-Oriented", value: 80 },
//     { name: "Collaboration", value: 90 },
//     { name: "Positivity", value: 75 },
//     { name: "Adaptability", value: 85 },
//     { name: "Problem Solving", value: 75 },
//     { name: "Empathy", value: 90 },
//     { name: "Organization", value: 70 },
//     { name: "Creativity", value: 90 },
//   ],
// };

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "AWS (EC2, S3, RDS, Lambda)", value: 85 },
    { name: "Python", value: 80 },
    { name: "Shell Scripting", value: 75 },
    { name: "Networking (TCP/IP, DNS, Routing)", value: 85 },
    { name: "Microsoft 365", value: 80 },
    { name: "Docker", value: 70 },
    { name: "Linux (Ubuntu, Windows Server)", value: 85 },
    { name: "Troubleshooting & Debugging", value: 90 },
  ],
  softSkills: [
    { name: "Collaboration", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Adaptability", value: 80 },
    { name: "Communication", value: 85 },
    { name: "Organization", value: 75 },
    { name: "Attention to Detail", value: 80 },
    { name: "Critical Thinking", value: 85 },
    { name: "Time Management", value: 80 },
  ],
};


// // GET IN TOUCH SECTION
// const getInTouch = {
//   show: true,
//   heading: "Get In Touch",
//   message:
//     "I'm currently looking for full-time Cloud Computing or DevOps Intern opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
//   email: "varushivani@gmail.com",
// };

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently seeking opportunities as an Cloud Admin Intern, DevOps Intern, IT Support Intern, or IT Administration Intern or similar roles where I can apply my expertise in cloud computing and troubleshooting. If you know of any opportunities, have questions, or just want to connect, feel free to reach out to me via email.",
  email: "varushivani@gmail.com",
};


const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Stad Software Solution',// Here Add Company Name
      companylogo: require('../assets/img/stadsolution_logo.png'),
      date: 'March 2023 – September 2023',
    },
    {
      role: 'DIC Associateship - GIC ASSOCIATESHIP PROGRAM',
      companylogo: require('../assets/img/dic.jpg'),
      date: 'October 2020 – February 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
