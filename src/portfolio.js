/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "Girraj Singhal",
  title: "Hi all, I'm Girraj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs /MongoDB and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PqymsnTc_Jzqq7zd5wmzibV7iYlM5Gx1/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/girraj12",
  linkedin: "https://www.linkedin.com/in/girraj-singhal-96872b237/",
  gmail: "girrajsinghal12@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Build the backend system with MongoDB database"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      "skillName": "MongoDB",
      "fontAwesomeClassname": "fas fa-database"
    }
,    
    {
      "skillName": "Java",
      "fontAwesomeClassname": "fab fa-java"
    }
,    
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Rajasthan ",
      logo: require("./assets/images/stanfordLogo.jpg"),
      subHeader: "Master of Computer Application",
      duration: "September 2022 - july 2024",
    },
    {
      schoolName: " University Of Rajasthan(PCGE College)",
      logo: require("./assets/images/stanfordLogo.jpg"),
      subHeader: "B.Sc.(Math)",
      duration: "july 2019 - june 2022",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.jpg"),
      projectName: "Sorting Visualizer",
      projectDesc: "• Technologies used:- ReactJs ,Redux,React Hooks,HTML,CSS,JavaScript || Sorting Algorithm like Selection,Bubble,Insertion,Merge,Quick",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://algo-visuals-rouge.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.jpg"),
      projectName: "Blog Webapp",
      projectDesc: "•Technologies used:- MongoDB,NodeJs,ExpressJs,ReactJS,JWT Authentication, Implemented secure user Authentication with sign-up, login, and logout, Implemented features for creating, updating, and deleting blogs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://my-blog-website-black.vercel.app/account"
        }
      ]
    },
      {
        image: require("./assets/images/logo.png"),
        projectName: "Self-Order-Kiosk",
        projectDesc: "•Technologies used:- MongoDB,NodeJs,ExpressJs,ReactJS ||• Implemented features for users to add and delete products from their Cart, Place Order ||•Implemented admin functionalities to update order statuses and manage the overall order processing flow within the application",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://github.com/girraj12/self-food-order"
          },
          //  you can add extra buttons here.
        ]
      },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "java",
      subtitle:
        "java  coding.",
      image: require("./assets/images/codeInLogo.jpg"),
      imageAlt: "java certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1z0HdR1cjYMWEKhAWtQK1b9XPgUDVnwmv/view?usp=sharing"
        },
      ]
    },
    {
      title: "Backend Development",
      subtitle:
        "learn new backend skills Node.js,MongoDB,Express.js.",
      image: require("./assets/images/googleAssistantLogo.jpg"),
      imageAlt: "backend certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ya6sNnHyZl_ZTCijQJY3Px31iBSKXVhO/view?usp=sharing"
        }
      ]
    },

    {
      title: "Javascript",
      subtitle: "Completed Certifcation from HackerRank",
      image: require("./assets/images/pwaLogo.jpg"),
      imageAlt: "javascript",
      footerLink: [
        {name: "Certification", 
          url: "https://drive.google.com/file/d/13oi-94u9Uu9_WHXbGdDvhfVYKLLHinm2/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section


// Talks Sections


// Podcast Section


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  downloadLink: "https://drive.google.com/file/d/1PqymsnTc_Jzqq7zd5wmzibV7iYlM5Gx1/view?usp=sharing", // Resume download link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9352090542",
  email_address: "girrajsinghal12@gmail.com"
};

// Twitter Section


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
