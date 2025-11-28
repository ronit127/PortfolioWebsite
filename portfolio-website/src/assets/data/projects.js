import regexImg from './images/regexprojectimage.PNG';

const projects = [
    {
        title: "Real-Time TCP Vocoder",
        description: "Built a client-server system streaming audio with voice effects across multiple Raspberry Pi devices with TCP streaming optimizations to reduce latency by 70%. Integrated low-level ALSA audio drivers for hardware capture and playback, using multi-threaded POSIX architecture for concurrent audio I/O and network communication. Developed digital signal processing algorithms for real-time voice effects including pitch shifting, echo, robot voice, and amplitude modulation.",
        liveLink: "",
        repoLink: "https://github.com/aashvibusa/341-Honors-Project",
        image: regexImg,
        technologies: ["C", "Raspberry Pi", "ALSA", "TCP"],
        date: "May 2025"
    },
    {
        title: "Samplify: Modular Music Sampler",
        description: "Built a web-based audio-editing platform with Flask and RESTful endpoints, enabling intuitive music generation through sample manipulation and sequencing. Designed a web interface using HTML and CSS with interactive timeline visualization and dynamic block creation. Created a simple text-based language for sequencing audio samples for non-technical users. Implemented OOP-based audio processing using PyDub and Pygame, enabling flexible trimming, looping, and playback.",
        liveLink: "",
        repoLink: "https://github.com/isaacangyu/musicSampler",
        image: regexImg,
        technologies: ["Python", "Flask", "HTML", "CSS", "PyDub", "Pygame"],
        date: "Feb 2025"
    },
    {
        title: "Formal Regular Expression Parser",
        description: "Developed an educational tool with Python that parsed formal regular expressions and analyzed their languages, adopted by 30+ CS students and featured in my Algorithms course by professor. Utilized NetworkX to build graph-based data structures for finite state machines, implementing regex compilation algorithms for regular expression processing. Built a responsive HTML/CSS web interface with client-side Python in-browser via PyScript, deployed on GitHub Pages.",
        liveLink: "https://ronit127.github.io/formal-regular-expressions/",
        repoLink: "https://github.com/ronit127/formal-regular-expressions",
        image: regexImg,
        technologies: ["Python", "PyScript", "NetworkX", "HTML", "CSS"],
        date: "Nov 2024"
    },
    {
        title: "StudyBud: AI Study Plan Generator",
        description: "Selected as a HackIllinois Finalist among 110+ teams for developing an AI-powered study planner with React frontend and Python Flask backend, processing PDFs and MP3s into personalized study guides with GPT-3.5. Built React file upload interface with async API integration for PDF text extraction (backend PyPDF2) and speech-to-text transcription services.",
        liveLink: "",
        repoLink: "https://github.com/rishi-m100/ai-study-plan-generator-app",
        image: regexImg,
        technologies: ["JavaScript", "React", "NextJS", "Python", "OpenAI API", "Flask"],
        date: "Feb 2024"
    }
];

export default projects;