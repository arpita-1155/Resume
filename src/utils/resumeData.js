// import { Email } from "@mui/icons-material";
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PortraitIcon from '@mui/icons-material/Portrait';
// import { LinkedIn } from '@mui/icons-material';

// eslint-disable-next-line
export default {
    name: 'Arpita Karande',
    title: 'IT Developer',

    birthday: '11th May 2005',
    email: 'karandearpita7@gmail.com',
    address: 'Gurugram,Haryana[122001]',
    phone: '8851547216',

    social:{
        Github:{
            link: 'https://github.com/arpita-1155',
            text: 'MyGithub',
            icon: <GitHubIcon/>
        },

        LinkedIn:{
            link: 'https://www.linkedin.com/in/arpita-karande-2b94912b5/',
            text: 'MyLinkedIn',
            icon: <LinkedInIcon/>
        },

        Netlify:{
            link: 'https://app.netlify.com/teams/arpita-1155/overview',
            text: 'MyNetlify',
            icon: <PortraitIcon/>
        }
    },

    about:
    "I am a beginner IT developer with a strong interest in software development, particularly in C and C++. Throughout my academic projects, I have developed a basic understanding of these languages and have enjoyed solving problems and collaborating with my peers. Additionally, I have foundational knowledge in Python, CSS, HTML, Java, and React, which I am eager to expand upon. I thrive in learning environments and am always enthusiastic about exploring new technologies and improving my skills. \n\nI am looking for an entry-level position at a tech company where I can grow and contribute to exciting projects. I am passionate about working with experienced professionals who can mentor me and help me develop my abilities further. My goal is to become a valuable team member, tackling challenging problems and creating impactful software solutions. I am committed to continuous learning and am excited about the opportunity to start my career in a dynamic and innovative environment. "
    
    ,education:{
        school_10:{
            name: 'School Name: Euro International Sr. Sec. School',
            year: 'Passing Year: 2021',
            board: 'Board: CBSE',
        },

        school_12:{
            name: 'School Name: Vidyavalley International Sr. Sec. School',
            year: 'Passing Year: 2023',
            board: 'Board: CBSE',
        },

        college:{
            name: 'Government College of Engineering, Karad',
            year: 'Passing Year: 2027(Expected)',
            board: 'University: Shivaji University',
        },
    },

    skills: [
        "C",
        "C++",
        "Python",
        "CSS",
        "HTML",
        "Java",
        "React",
      ],

      projects: [
        {
          title: "Hand Gesture Recognition Project",
          description: "Developed a gesture detection system using computer vision techniques. Utilized Python libraries such as OpenCV for image processing and TensorFlow for machine learning models. The system accurately identifies and interprets hand gestures in real-time, enabling intuitive human-computer interaction for various applications.",
        //   image: "https://circuitdigest.com/sites/default/files/projectimage_tut/Real-Life-Object-Detection-Using-computer-vision-for-the-detection-of-face.jpg",
        },
        {
          title: "Basic Personal Resume",
          description: "This project is a simple, responsive resume application built using React and Vite. It showcases a developer's profile, including an About Me section, education history, skills, and a portfolio of projects. The resume data is dynamically rendered from a JavaScript object to demonstrate a clean and organized presentation.",
        //   image: "Screenshot%202024-07-07%20002906%20(1).jpg",
          link: "https://6676be49cf35c4a74098f6a5--tourmaline-faun-61888e.netlify.app/"
        },
        {
          title: "Resume Web App",
          description: "A resume webpage built with React components offers a modern and interactive way to showcase personal and professional information. It features sections like [About Me] [Education History] and [Skills] each implemented as separate components. This approach ensures a clean, responsive, and user-friendly interface for presenting qualifications and experience.",
        //   image: "",
          link: "https://6689a670101d2c1532ef2244--resume1155.netlify.app/"
        },
      ],
    };
