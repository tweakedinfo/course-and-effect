"use strict";

console.log("Loading courses")

// Sets a function that can link to the Handbook for a course. 
// If this isn't set, the "Link to handbook" will not be shown on course pages
setHandbookUrl((code) => `https://handbook.une.edu.au/courses/2025/${code}?year=2025`)

addCourses([


  {
    code: "BCOMP(AI)",
    name: "Bachelor of Computer Science (Artificial Intelligence) 2025",
    structure: [

      {
        name: "Core CS",
        units: [
          "AMTH140", "COSC110", "COSC120", "COSC130",
          "COSC210", "COSC220", "COSC230", "COSC240",
          "COSC310", "COSC320"
        ]
      },

      {
        name: "Artificial Intelligence major",
        units: [
          "MTHS120", 
          choose(2, "COSC102", "COSC250", "MTHS130", "MATH260"),
          "COSC350",
          choose(3, "COSC331", "COSC351", "COSC352", "COSC380"),
        ]
      },

      {
        name: "Electives",
        units: [
          "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", 
        ]
      },
    ],
    plans: { 
      "Full-time, T1 start, Artificial Intelligence Major": [
          { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "MTHS120", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", choose(2, "COSC102", "MTHS130", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", choose(2, "COSC250", "MATH260", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", "COSC350", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", choose(3, "COSC351", "COSC352", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 3 units at or above 300-level must be selected from the major in addition to COSC350") ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC331", "COSC380", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 3 units at or above 300-level must be selected from the major in addition to COSC350") ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ]
    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, cs2023ai.page, effects.page
    ],
    learningOutcomes: [
      "design, develop, test, and deliver computer programs to solve complex problems, both individually and as part of a collaborative development team;",
      "apply modern software engineering tools, skills, and practices to create, analyse, and evolve software systems;",
      "investigate and analyse new application areas, including understanding the needs of users and stakeholders, in order to design creative and appropriate solutions;",
      "apply abstraction, mathematics, and theoretical principles to the design of computer programs;",
      "communicate and collaborate effectively with others;",
      "apply appropriate methods to manage and monitor software development projects;",
      "apply ethical considerations, professionalism, and reflection to software development, with due consideration for impacts on others and society; and",
      "demonstrate well-developed knowledge and critical analytical skills in at least one disciplinary area, with an ability to extend knowledge and analytical skills into other disciplinary areas."
    ]
  },

  {
    code: "BCOMP(Cyber-2025)",
    name: "Bachelor of Computer Science (Cybersecurity) 2025",
    structure: [

      {
        name: "Core CS",
        units: [
          "AMTH140", "COSC110", "COSC120", "COSC130",
          "COSC210", "COSC220", "COSC230", "COSC240",
          "COSC310", "COSC320"
        ]
      },

      {
        name: "Cybersecurity major",
        units: [
          "COSC102", "MTHS120", 
          choose(1, "MTHS130", "PMTH338", "STAT100"),
          "COSC340",
          choose(1, "COSC350", "COSC372"),
          choose(2, "COSC481", "COSC482", "COSC483", "COSC484")
        ]
      },

      {
        name: "Electives",
        units: [
          "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", 
        ]
      },
    ],
    plans: { 
      "Full-time, T1 start, Cybersecurity Major 2025": [
          { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "MTHS120", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", "COSC102", choose(1, "MTHS130", "STAT100", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", choose(2, "PMTH338", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", or("COSC350", "COSC372"), choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", "COSC340", choose(2, "COSC481", "COSC482", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC483", "COSC484", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ]
    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, cybok.page, effects.page
    ]
  },

  {
    code: "BCOMP(Cyber-2024)",
    name: "Bachelor of Computer Science (Cybersecurity) 2024",
    structure: [

      {
        name: "Core CS",
        units: [
          "AMTH140", "COSC110", "COSC120", "COSC130",
          "COSC210", "COSC220", "COSC230", "COSC240",
          "COSC310", "COSC320"
        ]
      },

      {
        name: "Cybersecurity major",
        units: [
          "COSC102", "MTHS120", 
          choose(1, "MTHS130", "PMTH338", "STAT100"),          
          choose(2, "COSC340", "COSC350", "COSC372"),
          choose(2, "COSC481", "COSC482", "COSC483", "COSC484")
        ]
      },

      {
        name: "Electives",
        units: [
          "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", 
        ]
      },
    ],
    plans: { 
      "Full-time, T1 start, Cybersecurity Major 2024": [
          { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "MTHS120", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", "COSC102", choose(1, "MTHS130", "STAT100", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", choose(2, "PMTH338", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", or("COSC350", "COSC372"), choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", choose(3, "COSC340", "COSC481", "COSC482", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC483", "COSC484", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ]
    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, cybok.page, effects.page
    ]
  },

  {
    code: "BCOMP(SD-2025)",
    name: "Bachelor of Computer Science (Software Development) 2025",
    structure: [

      {
        name: "Core CS",
        units: [
          "AMTH140", "COSC110", "COSC120", "COSC130",
          "COSC210", "COSC220", "COSC230", "COSC240",
          "COSC310", "COSC320"
        ]
      },

      {
        name: "Software Development major",
        units: [
          choose(1, "MTHS110", "MTHS120", "STAT100"),
          "COSC250", 
          choose(5, "COSC101", "COSC260", "COSC330", "COSC331", "COSC340", "COSC350", "COSC360", "COSC370", "COSC484").withNote("*", "at least 3 at 300-level")
        ]
      },

      {
        name: "Electives",
        units: [
          "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", 
        ]
      },
    ],
    plans: { 
      "Full-time, T1 start, Software Development Major": [
          { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", choose(2, "COSC101", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", choose(2, "MTHS110", "MTHS120", "STAT100", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", "COSC250", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", choose(2, "COSC260", "COSC350", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 4 units at or above 300-level must be selected from the major") ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", choose(3, "COSC340", "COSC370", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 4 units at or above 300-level must be selected from the major") ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC330", "COSC360", "COSC484", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 4 units at or above 300-level must be selected from the major") ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ]
    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, swebok.page, effects.page
    ]
  },


  {
    code: "BCOMP(Data Science)",
    name: "Bachelor of Computer Science (Data Science)",
    structure: [

      {
        name: "Core CS",
        units: [
          "AMTH140", "COSC110", "COSC120", "COSC130",
          "COSC210", "COSC220", "COSC230", "COSC240",
          "COSC310", "COSC320"
        ]
      },
      {
        name: "Data Science major",
        units: [
          "MTHS120", "STAT100", "STAT210", 
          choose(1, "COSC102", "MTHS130"),
          choose(3, "COSC330", "COSC350", "COSC380", "STAT320", "STAT330")
        ]
      },
    ],
    plans: { 
      "Full-time, T1 start, Data Science Major": [
          { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "Elective", "Elective" ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", "MTHS120", "STAT100" ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", "STAT210", "Elective" ] },
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", choose(1, "COSC102", "MTHS130"), "Elective" ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", choose(1, "STAT330", "Elective*"), "Elective", "Elective" ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC330", "COSC350", "COSC380", "STAT320", "Elective*") ] },
          // Can do at most one of the Elective* units
      ]
    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, edison.page, ccdsc.page, effects.page
    ]

  },


  {
    code: "BCOMP",
    name: "Bachelor of Computer Science - summary",
    structure: [

      {
        name: "Core CS",
        units: [
          "AMTH140", "COSC110", "COSC120", "COSC130",
          "COSC210", "COSC220", "COSC230", "COSC240",
          "COSC310", "COSC320"
        ]
      },

      {
        name: "Software Development major",
        units: [
          choose(1, "MTHS110", "MTHS120", "STAT100"),
          choose(6, "COSC101", "COSC250", "COSC260", "COSC330", "COSC340", "COSC350", "COSC360", "COSC370", "COSC484").withNote("*", "at least 3 at 300-level")
        ]
      },
      {
        name: "Data Science major",
        units: [
          "MTHS120", "STAT100", "STAT210", 
          choose(1, "COSC102", "MTHS130"),
          choose(3, "COSC330", "COSC350", "COSC380", "STAT320", "STAT330")
        ]
      },

      {
        name: "Cybersecurity major",
        units: [
          "COSC102", "MTHS120",
          choose(1, "MTHS130", "PMTH338", "STAT100"),
          choose(2, "COSC340", "COSC350", "COSC372"),
          choose(2, "COSC481", "COSC482", "COSC483", "COSC484")
        ]
      },

      {
        name: "Artificial Intelligence major",
        units: [
          "MTHS120", 
          choose(2, "COSC102", "COSC250", "MTHS130", "MATH260"),
          "COSC350",
          choose(3, "COSC331", "COSC351", "COSC352", "COSC380"),
        ]
      },


      {
        name: "Preparatory Computing and Mathematics minor",
        units: [
          choose(4, "MTHS100", "MTHS110", "ICT100", "ICT101", "MM105")
        ]
      },

      {
        name: "Theoretical Data Science minor",
        units: [
          choose(4, "MTHS120", "MTHS130", "MATH260", "AMTH250", "AMTH246", "PMTH212", "COSC380", "SCI310")
        ]
      },



      {
        name: "Elective space (or second major / minors)",
        units: [
          "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", "Elective"
        ]
      },

    ],
    plans: {
    //   "Full-time, T1 start, Artificial Intelligence Major": [
    //     { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "MTHS120", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", choose(2, "COSC102", "MTHS130", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", choose(2, "COSC250", "MATH260", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", "COSC350", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y3 Trimester 1", units: [ "COSC310", choose(3, "COSC351", "COSC352", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 3 units at or above 300-level must be selected from the major in addition to COSC350") ] },
    //     { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC331", "COSC380", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 3 units at or above 300-level must be selected from the major in addition to COSC350") ] },
    //     // Can do at most one of the Elective* units
    //     // Can do at most three of the Elective* or Elective** units
    //   ],    

    //   "Full-time, T1 start, Cybersecurity Major 2025": [
    //     { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "MTHS120", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", "COSC102", choose(1, "MTHS130", "STAT100", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", choose(2, "PMTH338", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", or("COSC350", "COSC372"), choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y3 Trimester 1", units: [ "COSC310", "COSC340", choose(2, "COSC481", "COSC482", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
    //     { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC483", "COSC484", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
    //     // Can do at most one of the Elective* units
    //     // Can do at most three of the Elective* or Elective** units
    //   ],
      
    //   "Full-time, T1 start, Cybersecurity Major 2024": [
    //     { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "MTHS120", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", "COSC102", choose(1, "MTHS130", "STAT100", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", choose(2, "PMTH338", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", or("COSC350", "COSC372"), choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y3 Trimester 1", units: [ "COSC310", choose(3, "COSC340", "COSC481", "COSC482", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
    //     { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC483", "COSC484", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 2 units at or above 400-level must be selected from the major") ] },
    //     // Can do at most one of the Elective* units
    //     // Can do at most three of the Elective* or Elective** units
    //   ],

    //   "Full-time, T1 start, Data Science Major": [
    //     { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "Elective", "Elective" ] },
    //     { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", "MTHS120", "STAT100" ] },
    //     { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", "STAT210", "Elective" ] },
    //     { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", choose(1, "COSC102", "MTHS130"), "Elective" ] },
    //     { name: "Y3 Trimester 1", units: [ "COSC310", choose(1, "STAT330", "Elective*"), "Elective", "Elective" ] },
    //     { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC330", "COSC350", "COSC380", "STAT320", "Elective*") ] },
    //     // Can do at most one of the Elective* units
    //   ],

    //   "Full-time, T1 start, Software Development Major": [
    //     { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", choose(2, "COSC101", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", choose(2, "MTHS110", "MTHS120", "STAT100", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", "COSC250", choose(1, "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree") ] },
    //     { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", choose(2, "COSC260", "COSC350", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 4 units at or above 300-level must be selected from the major") ] },
    //     { name: "Y3 Trimester 1", units: [ "COSC310", choose(3, "COSC340", "COSC370", "Elective", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 4 units at or above 300-level must be selected from the major") ] },
    //     { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC330", "COSC360", "COSC484", "Elective").withNote("*", "only 7 non-ICT electives can be taken in the degree").withNote("#", "at least 4 units at or above 300-level must be selected from the major") ] },
    //     // Can do at most one of the Elective* units
    //     // Can do at most three of the Elective* or Elective** units
    // ]

    },
    pages: [
      cbok.v3_2.page, cybok.page, swebok.page, ccdsc.page, edison.page, cs2023ai.page, effects.page
    ],

  },


    // {
    //   code: "BCSLAW2024",
    //   name: "Bachelor of Computer Science / Bacherlor of Laws 2024",
    //   structure: [
    //     {
    //       name: "Computer Science Core",
    //       units: [
    //         "AMTH140",
    //         "COSC110", "COSC120", "COSC130", "COSC210", "COSC220", "COSC230", "COSC240", "COSC310", "COSC320"
    //       ]
    //     },
    //     {
    //       name: "Computer Science Listed",
    //       units: [
    //         choose(4, "COSC301", "COSC330", "COSC331", "COSC340", "COSC350", "COSC360", "COSC370", "COSC380", "STAT330", "STAT320"),
    //         choose(2, "COSC301", "COSC330", "COSC340", "COSC350", "COSC360", "COSC370", "COSC380", "STAT330", "STAT320", "COSC101", "COSC102", "COSC250", "COSC260", "COSC481", "COSC482", "COSC483", "COSC484", "MTHS120", "MATH260", "STAT100", "STAT210")
    //       ]
    //     },
    //     {
    //       name: "Law component",
    //       units: [
    //         "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", 
    //         "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", "Law unit", 
    //       ]
    //     }
    //   ],
    //   plans: {
    //     "Full-time, T1 start": [
    //       { name: "Y1 Trimester 1", units: [ "COSC110", "COSC130", "Law unit", "Law unit" ] },
    //       { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", choose(2, "COSC102", "COSC260", "MTHS120", "STAT100", "Law unit*", "Law unit*") ] },
    //       { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", choose(2, "COSC101", "COSC250", "STAT210", "Law unit*", "Law unit*") ] },
    //       { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", choose(2, "COSC380", "STAT320", "Law unit**", "Law unit**") ] },
    //       { name: "Y3 Trimester 1", units: [ "COSC310", choose(3, "COSC340", "COSC370", "STAT330", "Law unit**", "Law unit**", "Law unit**") ] },
    //       { name: "Y3 Trimester 2", units: [ "COSC320", choose(3, "COSC330", "COSC350", "COSC360", "Law unit**", "Law unit**", "Law unit**") ] },
    //       { name: "Y4 Trimester 1", units: [ choose([0,2], "COSC481", "COSC482").withNote("*", "Two 400-level cybersecurity subjects must be taken across the degree") ] },
    //       { name: "Y4 Trimester 2", units: [ choose([0,2], "COSC483", "COSC484") ] },
    //       { name: "Y5 Trimester 1", units: [ "Law unit", "Law unit", "Law unit", "Law unit" ] },
    //       { name: "Y5 Trimester 2", units: [ "Law unit", "Law unit", "Law unit", "Law unit" ] },
    //     ]
    //     // At least 2 Law unit**
    //     // At most 4 Law unit**
    //     // At least 6 Law unit*
    //     // At most 10 (Law unit* and Law unit**) units
    //   }
    // },

    // {
    //   code: "BIT",
    //   name: "Bachelor of Information Technology",
    //   structure: [
        
    //     {
    //       name: "Core",
    //       units: [
    //         "ICT101",
    //         "COSC110", "COSC120", "COSC130",
    //         "COSC210", "COSC220", "COSC240",
    //         "COSC310",  
    //       ]
    //     },
  
    //     {
    //       name: "Information Systems and Cybersecurity major",
    //       units: [
    //         choose(2, "ICT100", "COSC101", "COSC102", "STAT100"), 
    //         "COSC260", "COSC370", "COSC372", 
    //         choose(2, "COSC482", "COSC483", "COSC484"),
    //         "COSC320" 
    //       ]
    //     },
  
    //     {
    //       name: "Analytics and Internet of Things major",
    //       units: [ 
    //         choose(1, "COSC102", "STAT100"), "AMTH140",
    //         "PHYS311",
    //         choose(4, "COSC340", "COSC350", "COSC361", "ICT363", "COSC483"), "COSC320"
    //       ]
    //     },
  
    //     {
    //       name: "Software Development major",
    //       units: [
    //         or("ICT100", "COSC101"), 
    //         "AMTH140", 
    //         "COSC230", 
    //         choose(4, "COSC250", "COSC260", "COSC330", "COSC350", "COSC360", "COSC370"),
    //         "COSC320",
    //       ]
    //     },
  
    //     {
    //       name: "Elective space (or second major / minors)",
    //       units: [
    //         "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", "Elective", "Elective"
    //       ]
    //     },
  
    //   ],
    //   pages: [
    //     cbok.v3_2.page, cybok.page, swebok.page, ccdsc.page, edison.page, cs2023ai.page
    //   ],
  
    // },


])

// Top 3 for BCOMP
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Ethics, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.ProfExpectations, ["COSC130", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Teamwork, ["COSC101", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Communication, ["COSC101", "COSC102", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Societal, ["COSC130", "COSC210", "COSC240"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Understanding, ["COSC110", "COSC220", "COSC240"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.ProblemSolving, ["COSC101", "COSC102", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Fundamentals, ["COSC110", "COSC230", "COSC240"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Data, ["COSC210", "COSC220", "STAT100"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Networking, ["COSC210", "COSC220", "COSC240"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.HumanFactors, ["COSC101", "COSC102", "COSC220"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Programming, ["COSC110", "COSC120", "COSC230"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Systems, ["COSC210", "COSC220", "COSC310"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Governance, ["COSC310"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.ProjectManagement, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.ServiceManagement, ["COSC220", "COSC484"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.old.Cybersecurity, ["COSC130", "COSC210", "COSC240"])


limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Ethics, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Impacts, ["COSC110", "COSC130", "COSC310", "COSC350"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Collaboration, ["COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Communication, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Practitioner, ["COSC130", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Fundamentals, ["COSC110", "COSC220", "COSC320", "COSC350"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Infrastructure, ["AMTH140", "COSC220", "COSC240"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Data, ["AMTH140", "COSC210", "COSC230"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Computing, ["COSC120", "COSC220", "COSC230", "COSC350"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Application, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Cybersecurity, ["COSC130", "COSC210", "COSC240"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Projects, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Governance, ["COSC130", "COSC220", "COSC310"])
limitCourseGridEntries([ "BCOMP(AI)",  ], cbok.v3_2.Depth, ["COSC102", "COSC110", "COSC210", "COSC230", "COSC250", "MATH260", "COSC330", "COSC331", "COSC350", "COSC351", "COSC352", "COSC380", ])


limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Ethics, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Impacts, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Collaboration, ["COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Communication, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Practitioner, ["COSC130", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Fundamentals, ["COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Infrastructure, ["AMTH140", "COSC220", "COSC240"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Data, ["AMTH140", "COSC210", "COSC230"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Computing, ["COSC120", "COSC220", "COSC230", "COSC250"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Application, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Cybersecurity, ["COSC130", "COSC210", "COSC240"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Projects, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Governance, ["COSC130", "COSC220", "COSC310"])
limitCourseGridEntries([ "BCOMP(SD-2025)",  ], cbok.v3_2.Depth, ["AMTH140", "COSC101", "COSC110", "COSC120", "COSC210", "COSC220", "COSC230", "COSC250", "COSC260", "COSC330", "COSC331", "COSC350", "COSC360", "COSC370", "COSC484"])

limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Ethics, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Impacts, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Collaboration, ["COSC102", "COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Communication, ["COSC102", "COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Practitioner, ["COSC130", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Fundamentals, ["COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Infrastructure, ["AMTH140", "COSC220", "COSC240"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Data, ["COSC102", "AMTH140", "COSC210", "COSC230"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Computing, ["COSC120", "COSC220", "COSC230", "COSC250"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Application, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Cybersecurity, ["COSC130", "COSC210", "COSC240"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Projects, ["COSC102", "COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Governance, ["COSC130", "COSC220", "COSC310"])
limitCourseGridEntries([ "BCOMP(Cyber-2024)",  ], cbok.v3_2.Depth, [ "AMTH140", "COSC102", "COSC110", "COSC130", "COSC210", "COSC220", "COSC240", "COSC310", "COSC340", "COSC350", "PMTH338", "COSC372", "COSC481", "COSC482", "COSC483", "COSC484"])


limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Ethics, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Impacts, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Collaboration, ["COSC102", "COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Communication, ["COSC102", "COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Practitioner, ["COSC130", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Fundamentals, ["COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Infrastructure, ["AMTH140", "COSC220", "COSC240", "COSC340"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Data, ["COSC102", "AMTH140", "COSC210", "COSC230"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Computing, ["COSC120", "COSC220", "COSC230", "COSC250"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Application, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Cybersecurity, ["COSC130", "COSC210", "COSC240", "COSC340"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Projects, ["COSC102", "COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Governance, ["COSC130", "COSC220", "COSC310"])
limitCourseGridEntries([ "BCOMP(Cyber-2025)",  ], cbok.v3_2.Depth, [ "AMTH140", "COSC102", "COSC110", "COSC130", "COSC210", "COSC220", "COSC240", "COSC310", "COSC340", "COSC350", "PMTH338", "COSC372", "COSC481", "COSC482", "COSC483", "COSC484"])

limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Ethics, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Impacts, ["COSC110", "COSC130", "COSC310"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Collaboration, ["COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Communication, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Practitioner, ["COSC130", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Fundamentals, ["COSC110", "COSC220", "COSC320"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Infrastructure, ["AMTH140", "COSC220", "COSC240"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Data, ["AMTH140", "STAT100", "STAT210", "COSC210", "COSC230"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Computing, ["COSC120", "COSC220", "COSC230", "COSC250"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Application, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Cybersecurity, ["COSC130", "COSC210", "COSC240"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Projects, ["COSC220", "COSC310", "COSC320"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Governance, ["COSC130", "COSC220", "COSC310"])
limitCourseGridEntries([ "BCOMP(Data Science)",  ], cbok.v3_2.Depth, ["COSC102", "COSC110", "STAT100", "STAT210", "COSC210", "COSC230", "COSC250", "COSC330", "COSC350", "COSC380", "STAT320", "STAT330"])