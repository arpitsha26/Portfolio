

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arpit Sharma",
  title: "Hi all, I'm Arpit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web  applications with JavaScript / Reactjs / Nodejs / Golang and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10R0GMRQFA3G-d8w8dXtM56uHdU5CYuI9",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arpitsha26",
  linkedin: "https://www.linkedin.com/in/arpitsha26/",
  gmail: "arpitsharma1263@gmail.com",


  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Built end-to-end web applications using React.js, Node.js, Express.js, and MongoDB"
    ),
    emoji("⚡ Designed scalable REST APIs with proper routing, controllers, and middleware"),
    emoji(
      "⚡ Implemented clean MVC architecture for maintainable backend code"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },


    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ajay Kumar Garg Engineering College{AKTU}",
      logo: require("./assets/images/AKG.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Aug 2023 - July 2027",
      desc: "CGPA: 8",
      descBullets: [

      ]
    }
  ]
};



const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend{Nodejs, Golang}",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming{C++}",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend{Reactjs}",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Developer Trainee",
      company: "Blockchain Research Lab(AKGEC)",
      companylogo: require("./assets/images/brl2.png"),
      date: "Oct 2024 – Dec 2024",
      desc: "",
      descBullets: [
        "Engineered RESTful backend APIs for StreamFlix, supporting 1,000+ concurrent users",
        "Implemented WebSocket-based real-time communication, boosting engagement by 40%."
      ]
    }

  ]
};



const openSource = {
  showGithubProfile: "true",
  display: true
};



const bigProjects = {
  title: "My Projects",
  subtitle: "",
  display: true,
  projects: [
    {
      image: require("./assets/images/aaaa.png"),
      projectName: "Crewzy(Social Media & Collaboration Platform)",
      projectDesc:
        "Crewzy is a modern social media web application inspired by platforms like Instagram, designed to help users connect, share, and communicate in real time. ",
      status: "LIVE",
      techStack: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
      ],
      highlights: [
        "⚙️ Built secure REST APIs with Node.js, Express.js, and JWT",
        "💬 Added real-time chat & notifications using Socket.io",
        "🎨 Created a responsive UI using React.js",
      ],
      footerLink: [
        {
          name: "🌐Live",
          url: "http://crewzy.me/",
        },
        {
          name: "🚀Code",
          url: "https://github.com/arpitsha26/Crewzy",
        },
      ],
    },

    {
      image: require("./assets/images/abdd.png"),
      projectName: "Sanskriti (Cultural Heritage & Tourism Platform)",
      projectDesc:
        "Sanskriti is a cultural mobile web platform that showcases India’s rich heritage,  including monuments, festivals, food, arts, marketplace and folk stories. ",
      status: "APK",
      techStack: [

        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Cloudinary", icon: "☁️" },
      ],
      highlights: [
        "⚙️ Built RESTful APIs using Node.js, Express, and MongoDB",
        "🤖 Integrated AI/ML services for AR monument scan and trip planning",
        "🤝 Implemented community, events, and marketplace features",
      ],
      footerLink: [
        {
          name: "📱APK",
          url: "https://drive.google.com/u/0/uc?id=11X1B9UpTN2TafM4PjXPbFeJM0J8F5_j4&export=download",
        },
        {
          name: "🚀Code",
          url: "https://github.com/arpitsha26/Sanskriti",
        },
      ],
    },
  ],
};






const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ACPC 2K25",
      subtitle:
        "Our team BitSquad secured 13th rank out of 400+ teams at the ACPC 2025 Offline Competitive Programming Contest 💻🏆",
      image: require("./assets/images/acpc.webp"),
      imageAlt: "ACPC 2k25 logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/14zDX6BMmIhbicjRhjAwDh1f12zsK9NyT/view?usp=sharing"
        },

      ]
    },
    {
      title: "SIH 2025",
      subtitle:
        "Successfully advanced through two internal evaluation rounds of SIH 2025 🚀, ranking within the Top 50 out of 400+ teams 🏆✨",
      image: require("./assets/images/sih.jpg"),
      imageAlt: "SIH Logo",
      footerLink: [

      ]
    },


  ],
  display: true // Set false to hide this section, defaults to true
};


const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",


  podcast: [
    ""
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",


  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8595140275",
  email_address: "arpitsharma1263@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "arpitsha26",
  display: true
};

const isHireable = true;
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
