export const  employees = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Frontend Developer",
      tasks: [
        { 
          title: "Design Homepage UI", 
          category: "Design", 
          status: "In progress", 
          dueDate: "2025-03-10",
          description: "Create a modern homepage UI with a responsive design."
        },
        
        { 
          title: "Fix Navbar Bug", 
          category: "Development", 
          status: "In progress", 
          dueDate: "2025-03-12",
          description: "Fix alignment issues in the navbar for better UX."
        },
      ],
     taskCounts : {
        "active": 2,
        "newTask": 0,
        "completed": 0,
        "failed": 0
    }
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Backend Developer",
      tasks: [
        { 
          title: "API Authentication", 
          category: "Backend", 
          status: "Completed", 
          dueDate: "2025-03-05",
          description: "Implement JWT-based authentication for secure API access."
        },
        { 
          title: "Optimize Database Queries", 
          category: "Backend", 
          status: "In progress", 
          dueDate: "2025-03-15",
          description: "Improve SQL queries to enhance database performance."
        },
      ],
      taskCounts : {
        "active": 1,
        "newTask": 0,
        "completed": 1,
        "failed": 0
    }
     
    },
    {
      name: "Michael Smith",
      email: "michael.smith@example.com",
      role: "Project Manager",
      tasks: [
        { 
          title: "Sprint Planning", 
          category: "Management", 
          status: "Completed", 
          dueDate: "2025-03-02",
          description: "Plan the sprint backlog and assign tasks to the team."
        },
        { 
          title: "Client Meeting", 
          category: "Management", 
          status: "In progress", 
          dueDate: "2025-03-08",
          description: "Discuss project updates and gather client feedback."
        },
      ],
      taskCounts : {
        "active": 1,
        "newTask": 0,
        "completed": 1,
        "failed": 0
    }
      
    },
    {
      name: "Sarah Brown",
      email: "sarah.brown@example.com",
      role: "UI/UX Designer",
      tasks: [
        { 
          title: "Create Wireframes", 
          category: "Design", 
          status: "In progress", 
          dueDate: "2025-03-09",
          description: "Design wireframes for the new dashboard layout."
        },
        { 
          title: "Revamp Dashboard UI", 
          category: "Design", 
          status: "In progress", 
          dueDate: "2025-03-14",
          description: "Redesign the dashboard interface for a better user experience."
        },
      ],
      taskCounts : {
        "active": 2,
        "newTask": 0,
        "completed": 0,
        "failed": 0
    }
     
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      role: "QA Engineer",
      tasks: [
        { 
          title: "Test Payment Gateway", 
          category: "Testing", 
          status: "Completed", 
          dueDate: "2025-03-06",
          description: "Perform end-to-end testing on the payment gateway integration."
        },
        { 
          title: "Bug Report Analysis", 
          category: "Testing", 
          status: "Failed", 
          dueDate: "2025-03-11",
          description: "Analyze reported bugs and assign them to the development team."
        },
      ],
      taskCounts : {
        "active": 0,
        "newTask": 0,
        "completed": 1,
        "failed": 1
    }
    },
  ];
  