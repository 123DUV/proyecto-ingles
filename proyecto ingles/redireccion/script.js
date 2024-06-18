const definitions = [
    "Algorithm: A step-by-step procedure for solving a problem or accomplishing a task.",
    "Array: A data structure that holds a fixed number of values of a single type.",
    "Binary: A base-2 number system that uses two symbols, typically 0 and 1.",
    "Boolean: A data type with two possible values: true or false.",
    "Class: A blueprint for creating objects, providing initial values for state and implementations of behavior.",
    "Compiler: A program that translates source code into executable code.",
    "Constructor: A special method used to initialize objects.",
    "Database: An organized collection of data, generally stored and accessed electronically.",
    "Debugging: The process of finding and fixing errors in software.",
    "Encapsulation: The bundling of data and methods that operate on that data within a single unit or class.",
    "Function: A block of code that performs a specific task.",
    "IDE: Integrated Development Environment, a software application for software development.",
    "Inheritance: A mechanism for creating a new class using the properties and methods of an existing class.",
    "Interface: A shared boundary across which two separate components of a computer system exchange information.",
    "Iteration: The repetition of a process or set of instructions in a program.",
    "Library: A collection of precompiled routines that a program can use.",
    "Loop: A sequence of instructions that repeats until a certain condition is met.",
    "Method: A function associated with an object or class.",
    "Object: An instance of a class containing data and behavior.",
    "Polymorphism: The ability to present the same interface for differing underlying data types.",
    "Recursion: The process of defining a function or calculating a number by the repeated application of an algorithm.",
    "Runtime: The period when a program is running, in contrast to other program lifecycle phases such as compile time.",
    "Scope: The context within which a variable or function is accessible.",
    "Syntax: The set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a language.",
    "Variable: A storage location identified by a memory address and a symbolic name that contains some known or unknown quantity of information referred to as a value.",
    "Version Control: A system that records changes to a file or set of files over time so that you can recall specific versions later.",
    "API: Application Programming Interface, a set of routines, protocols, and tools for building software applications.",
    "Big Data: A term used to describe large volumes of data, both structured and unstructured.",
    "Cloud Computing: The delivery of computing services over the internet.",
    "Data Mining: The process of discovering patterns in large data sets.",
    "Encryption: The process of encoding information to protect it from unauthorized access.",
    "Framework: A platform for developing software applications.",
    "Machine Learning: A method of data analysis that automates analytical model building.",
    "Open Source: Software with source code that anyone can inspect, modify, and enhance.",
    "Software Development Life Cycle (SDLC): The process of planning, creating, testing, and deploying an information system.",
    "Source Code: The human-readable instructions that a programmer writes.",
    "Testing: The process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.",
    "User Interface (UI): The space where interactions between humans and machines occur.",
    "Virtual Machine (VM): An emulation of a computer system.",
    "Web Development: The work involved in developing a website for the internet.",
    "Agile: A methodology for software development that emphasizes incremental delivery, team collaboration, continual planning, and continual learning.",
    "Backend: The server side of an application and everything that communicates between the database and the browser.",
    "Frontend: The client side of an application and everything that users interact with directly.",
    "Git: A distributed version-control system for tracking changes in source code during software development.",
    "HTML: Hypertext Markup Language, the standard markup language for documents designed to be displayed in a web browser.",
    "JavaScript: A programming language commonly used in web development.",
    "REST: Representational State Transfer, an architectural style for designing networked applications.",
    "SQL: Structured Query Language, a domain-specific language used in programming and designed for managing data held in a relational database management system.",
    "UI/UX: User Interface and User Experience design, focusing on maximizing usability and user satisfaction.",
    "Abstraction: The process of hiding complex implementation details and exposing only necessary functionalities.",
    "Binary Tree: A tree data structure in which each node has at most two children nodes.",
    "Cache: A hardware or software component that stores data to serve future requests more quickly.",
    "Data Structure: A way of organizing and storing data so that it can be accessed and modified efficiently.",
    "Exception Handling: The process of responding to and managing exceptional conditions or errors during program execution.",
    "File System: The method used to store and retrieve data on a storage device such as a hard drive.",
    "Graph: A data structure that consists of vertices (nodes) connected by edges (lines).",
    "Hash Function: A function that takes an input (or 'key') and returns a fixed-size string of characters, which is typically used for data indexing.",
    "Indexing: The process of optimizing the retrieval of data from a data structure by creating searchable keys or indexes.",
    "JSON: JavaScript Object Notation, a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.",
    "Kernel: The core component of an operating system that manages system resources and provides the basic services for other parts of the operating system.",
    "Linked List: A linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.",
    "Memory Management: The process of controlling and coordinating computer memory, assigning portions known as blocks to various programs and processes.",
    "Network Protocol: A set of rules governing the exchange of data between devices in a network.",
    "Operating System: Software that manages computer hardware, software resources, and provides common services for computer programs.",
    "Queue: A linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are inserted at the end and removed from the front.",
    "Recursion: A programming technique where a function calls itself directly or indirectly to solve a problem.",
    "Semaphore: A synchronization primitive used to control access to a shared resource by multiple processes or threads.",
    "Tree: A hierarchical data structure consisting of nodes connected by edges, with a single node designated as the 'root' node.",
    "Unicode: A computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.",
    "Virtual Memory: A memory management technique that provides an illusion of a larger memory space than what is physically available in the computer's main memory.",
    "XML: Extensible Markup Language, a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",
    "YAML: YAML Ain't Markup Language, a human-readable data serialization format used for configuration files and data interchange.",
    "Database Management System (DBMS): Software that manages databases, allowing users to store, retrieve, and manipulate data efficiently.",
    "Authentication: The process of verifying the identity of a user or system to ensure that they are who they claim to be.",
    "Authorization: The process of determining whether a user, program, or system has permission to access a resource or perform an operation.",
    "Back End: The part of a software system that handles data processing, database interactions, and other server-side operations.",
    "Front End: The part of a software system that users interact with, including the user interface and user experience.",
    "Container: A lightweight, portable, and self-sufficient software package that contains everything needed to run a piece of software, including code, runtime, system tools, and libraries.",
    "Microservices: An architectural style that structures an application as a collection of loosely coupled services, each independently deployable and scalable.",
    "Serverless Computing: A cloud computing model where cloud providers manage the infrastructure, automatically scaling resources as needed, and users pay only for actual usage rather than provisioning and managing servers.",
    "Blockchain: A decentralized digital ledger technology that records transactions across multiple computers in a secure and transparent manner.",
    "Cybersecurity: The practice of protecting computer systems, networks, and data from unauthorized access, attacks, damage, or theft.",
    "DevOps: A set of practices that combines software development (Dev) and IT operations (Ops), aiming to shorten the development lifecycle and deliver high-quality software continuously.",
    "Edge Computing: A distributed computing paradigm that brings computation and data storage closer to the location where it is needed, reducing latency and bandwidth usage.",
    "Internet of Things (IoT): A network of interconnected devices embedded with sensors, software, and other technologies to collect and exchange data over the internet.",
    "Machine Vision: The technology that enables machines to interpret and understand visual information, similar to human vision.",
    "Natural Language Processing (NLP): A field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.",
    "Quantum Computing: A computing paradigm that utilizes quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data.",
    "Robotics: The interdisciplinary field that involves designing, constructing, operating, and using robots to perform tasks in various domains.",
    "Server-Side Rendering (SSR): The process of generating HTML on the server side and sending it to the client, improving performance and SEO for web applications.",
    "User Experience (UX) Design: The process of enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between users and products.",
    "Virtual Reality (VR): A simulated experience that can be similar to or completely different from the real world, often achieved through immersive technologies such as headsets.",
    "Wireframe: A visual representation of the layout and structure of a web page or application, showing the placement of elements without design details.",
    "XSS (Cross-Site Scripting): A type of security vulnerability where attackers inject malicious scripts into web pages viewed by other users.",
    "API Gateway: A server that acts as an entry point for APIs, handling requests, performing authentication, and routing them to the appropriate backend services.",
    "Cloud Native: An approach to building and running applications that leverage cloud computing principles, such as scalability, elasticity, and automation.",
    "Deep Learning: A subset of machine learning that uses neural networks with multiple layers to model and extract patterns from large amounts of data.",
    "Ethical Hacking: The practice of testing and identifying vulnerabilities in computer systems and networks with the permission of the system owners, to improve security.",
    "Full Stack Developer: A developer who is proficient in both front-end and back-end technologies, capable of working on all layers of an application.",
    "GraphQL: A query language for APIs and a runtime for executing those queries, providing a more efficient and flexible alternative to REST APIs.",
    "Kubernetes: An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
    "Low-Code Development: A development approach that allows users to create applications with minimal hand-coding, using visual interfaces and configuration rather than traditional programming.",
    "Multi-Cloud: A strategy that involves using multiple cloud providers to avoid vendor lock-in, improve redundancy, and optimize cost and performance.",
    "NoSQL: A category of database systems that do not use traditional SQL for querying, often used for handling large volumes of unstructured or semi-structured data.",
    "Responsive Design: A design approach that ensures web pages or applications adapt to various devices and screen sizes, providing a consistent user experience.",
    "Server-Side Scripting: The execution of scripts on the server side, generating dynamic content before sending it to the client's browser.",
    "UX Research: The systematic study of users and their interactions with products or systems, aiming to inform design decisions and improve user experience.",
    "Machine Translation:The automated process of translating text from one language to another using algorithms and linguistic rules.",
  "Augmented Reality (AR): An interactive experience where digital information is overlaid on the real world, enhancing the user's perception of reality.",
  "Virtual Assistant: A software agent that can perform tasks or services for an individual, often using natural language processing.",
  "Quantum Cryptography: A method of secure communication that uses quantum mechanics to encrypt and decrypt data, providing high levels of security.",
  "Blockchain Technology: A distributed ledger system that records transactions across multiple computers in a secure and transparent manner.",
  "Cyber-Physical Systems (CPS): Integrated systems of computational algorithms and physical components, often found in IoT applications.",
  "Cloud Storage: Data storage services provided over the internet by cloud computing providers, offering scalability and accessibility.",
  "Predictive Analytics: The use of data mining, statistics, and machine learning techniques to analyze current and historical data to make predictions about future events.",
  "Internet Protocol (IP): A set of rules governing the format of data sent over the internet, facilitating communication between devices.",
  "Docker: A platform for developing, shipping, and running applications in containers, providing isolation and portability.",
  "Continuous Integration (CI): The practice of regularly merging code changes into a shared repository, often automated to detect integration issues early.",
  "Microcontroller: A small computer on a single integrated circuit, typically used in embedded systems for controlling devices or processes.",
  "Natural Language Generation (NLG): The process of automatically generating human-readable text from structured data, often used in chatbots and reporting systems.",
  "Quantum Entanglement: A phenomenon in quantum physics where particles become correlated and their states are linked, regardless of distance.",
  "Deep Reinforcement Learning: A branch of machine learning where agents learn to make decisions by interacting with an environment and receiving rewards or penalties.",
  "Cloud Security: Measures and technologies used to protect data, applications, and infrastructure in cloud computing environments.",
  "Neural Network: A computational model inspired by the structure and function of the human brain, used in machine learning and artificial intelligence.",
  "Continuous Deployment (CD): The automated process of deploying code changes to production environments after passing automated tests, often part of DevOps practices.",
  "Optical Character Recognition (OCR): The conversion of scanned images or handwritten text into machine-encoded text, enabling digital processing.",
  "Quantum Supremacy: The theoretical state where quantum computers can solve problems that classical computers cannot solve efficiently.",
  "Data Lake: A centralized repository that stores large volumes of raw and unstructured data, allowing for flexible analysis and processing.",
  "Machine-to-Machine (M2M): Direct communication between devices or systems without human intervention, often seen in IoT networks.",
  "Quantum Algorithm: A set of instructions designed to run on a quantum computer, leveraging quantum properties for computation.",
  "Synthetic Data: Artificially generated data used for testing, training machine learning models, or preserving privacy in sensitive datasets.",
  "Federated Learning: A machine learning approach where models are trained across multiple decentralized edge devices or servers, preserving data privacy.",
  "Zero-Day Exploit: A cyberattack exploiting a software vulnerability that is unknown to the software vendor or security community, posing immediate risks.",
  "Data Anonymization: The process of masking or removing personally identifiable information from datasets to protect privacy while maintaining data utility.",
  "Neural Network Architecture: The structure and organization of layers and connections in a neural network model, impacting its learning and performance.",
  "Cyber Threat Intelligence (CTI): Information about potential or current cyber threats, including tactics, techniques, and indicators of compromise (IOCs).",
  "Quantum Key Distribution (QKD): A method of secure communication using quantum mechanics to exchange cryptographic keys between parties.",
  "Genetic Algorithm: A search heuristic inspired by natural evolutionary processes, often used in optimization and machine learning.",
  "Data Privacy: The protection of personal information from unauthorized access, use, or disclosure, ensuring compliance with privacy regulations.",
  "Quantum Computing: A computing paradigm that utilizes quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data.",
  "Internet of Things (IoT): A network of interconnected devices embedded with sensors, software, and other technologies to collect and exchange data over the internet.",
  "Machine Vision: The technology that enables machines to interpret and understand visual information, similar to human vision.",
  "Natural Language Processing (NLP): A field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.",
  "Quantum Error Correction: Techniques and algorithms used to mitigate errors in quantum computations, ensuring the reliability of quantum systems.",
  "Robotics: The interdisciplinary field that involves designing, constructing, operating, and using robots to perform tasks in various domains.",
  "Server-Side Rendering (SSR): The process of generating HTML on the server side and sending it to the client, improving performance and SEO for web applications.",
  "User Experience (UX) Design: The process of enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between users and products.",
  "Virtual Reality (VR): A simulated experience that can be similar to or completely different from the real world, often achieved through immersive technologies such as headsets.",
  "Wireframe: A visual representation of the layout and structure of a web page or application, showing the placement of elements without design details.",



];

const container = document.getElementById('container');

while (definitions.length < 300) { definitions.push(`Placeholder definition ${definitions.length + 1}`); }

for (let i = 0; i < definitions.length; i++) {
    const [term, definition] = definitions[i].split(':');
    const newDiv = document.createElement('div');
    newDiv.classList.add('definition');
    newDiv.innerHTML = `<h3>${term}</h3><p>${definition}</p>`;
    container.appendChild(newDiv);
}
function buscar() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const definitions = document.querySelectorAll('.definition');


    definitions.forEach(definition => {
        const term = definition.querySelector('h3');
        const text = term.textContent.toLowerCase();
        if (text.includes(filter)) {
            definition.style.display = 'block';
        } else {
            definition.style.display = 'none';
        }
    });
}


function irATermino(term) {
    const definitions = document.querySelectorAll('.definition');
    definitions.forEach(definition => {
        const h3 = definition.querySelector('h3');
        if (h3.textContent === term) {
            definition.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
searchInput.addEventListener('input', buscar);



// definitions.forEach(definition => {
//     const term = definition.querySelector('h3');
//     const text = term.textContent.toLowerCase();
//     if (text.includes(filter)) {
//         definition.style.display = 'block';
//     } else {
//         definition.style.display = 'none';
//     }
// });


