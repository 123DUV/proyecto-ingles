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
    "UI/UX: User Interface and User Experience design, focusing on maximizing usability and user satisfaction."
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
