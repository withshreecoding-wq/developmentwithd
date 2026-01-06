// Project data - hardcoded instead of Firebase
export const projectsData = [
  {
    id: "1",
    Title: "Interiro Designer Platform",
    Description: "Interior Designer Platform is a location-based web application that connects users with nearby interior designers based on their specific requirements. Users begin by registering with their live location, then log in to access a personalized dashboard. After completing a requirement declaration form, the platform suggests the nearest interior designers that best match the user's needs, displaying their ratings and reviews for informed decision-making. Users can seamlessly connect with selected designers through an integrated chatbot for quick and efficient communication.",
    Img: `${import.meta.env.BASE_URL}Interio.png`,
    Link: "https://linkedin.com/posts/dhanshree-ahire-a1030a243_fullstackdevelopment-reactjs-webapplication-activity-7340752788039106561-zvCh?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADxhXSwBSOMi1w1DQ8RvtagPjlkCSkp7TdY&utm_campaign=copy_link",
    TechStack: ["React", "Node.js", "Express", "MongoDB", "Google Maps API","Chatbot Integration","JWT Authentication"],
    Features: [
      "User registration with live location capture",
      "Secure user authentication (register & login)",
      "Requirement declaration form for personalized suggestions",
      "Location-based matching with nearby interior designers",
      "Smart designer suggestions based on user preferences",
      "Display of designer ratings and reviews",
      "Real-time chatbot communication with interior designers",
      "User-friendly and responsive interface"
    ],
    Github: "https://github.com/developmentwithd/Interio"
  },
  {
    id: "2",
    Title: "BIOGPT",
    Description: "This portfolio presents a Large Language Model (LLM) application developed using Python and advanced machine learning libraries such as Transformers, PyTorch, NumPy, Pandas, and Scikit-learn. The project focuses on leveraging state-of-the-art language models to understand, generate, and process natural language efficiently. Streamlit is used to deploy the model through an interactive web interface, enabling real-time user interaction and showcasing the complete pipeline—from data processing and model integration to deployment and user experience.",
    Img: `${import.meta.env.BASE_URL}Picture1.jpg`,
    Link: "",
    TechStack: ["Python", "Transformers", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "Streamlit"],
    Features: [
      "Large Language Model Integration",
      "Natural Language Processing",
      "Real-time Text Generation",
      "Interactive Web Interface",
      "State-of-the-art ML Libraries",
      "Streamlit Deployment"
    ],
    Github: ""
  },
  {
    id: "3",
    Title: "Computer Hardware E-Commerce Web Application",
    Description: "This project is a computer hardware e-commerce web application developed using Java with a PostgreSQL backend. The platform allows users to browse, search, and purchase a wide range of computer hardware components through a secure and scalable system. It includes core e-commerce functionalities such as user authentication, product and inventory management, order processing, and database-driven operations. The application is designed with a strong focus on performance, reliability, and data integrity, demonstrating practical full-stack development and backend engineering skills suitable for real-world deployment.",
    Img: `${import.meta.env.BASE_URL}Picture2.jpg`,
    Link: "",
    TechStack: ["Java", "PostgreSQL ", "HtML", "CSS","Javascript","JDBC","Apache Tomcat"],
    Features: [
      "User registration and secure authentication",
      "Product catalog with detailed hardware listings",
      "Search and filter functionality for easy product discovery",
      "Shopping cart and checkout system",
      "Order management and order history tracking",
      "Inventory management with real-time database updates",
      "Admin panel for managing products, users, and orders",
      "Secure data handling using a PostgreSQL relational database",
      "Scalable and maintainable backend architecture built in Java"
    ],
    Github: ""
  },
 
];
