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
    code: "BIT",
    name: "Bachelor of Information Technology",
    structure: [

      {
        name: "Core",
        units: [
          "ICT101", "COSC110", "COSC120", "COSC130", "COSC210", "COSC220", "COSC240", "COSC310", 
        ]
      },

      {
        name: "Information Systems and Cybersecurity",
        units: [
          "COSC260", "COSC370", "COSC372",
          choose(2, "COSC101", "COSC102", "ICT100", "STAT100"),
          choose(2, "COSC482", "COSC483", "COSC484"),
          "COSC320"
        ]
      },

      {
        name: "Analytics and the Internet of Things",
        units: [
          "AMTH140", "PHYS311",
          choose(1, "COSC102", "STAT100"),
          choose(4, "COSC340", "COSC350", "COSC361", "COSC483", "ICT363"),
          "COSC320"
        ]
      },

      {
        name: "Software Development",
        units: [
          "AMTH140", "COSC230",
          choose(1, "COSC101", "ICT100"),
          choose(4, "COSC250", "COSC260", "COSC330", "COSC350", "COSC360", "COSC370"),
          "COSC320"
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
      "Full-time, T1 start, Analyics and IoT Major": [
          { name: "Y1 Trimester 1", units: [ "ICT101", "COSC110", "COSC130", "Non-ICT Elective" ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", or("COSC102", "STAT100"), "Non-ICT Elective" ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "Non-ICT Elective", "Non-ICT Elective", "Non-ICT Elective" ] },
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", "PHYS311", or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree") ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"),  ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"),  ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ],
      "Full-time, T1 start, Information Systems and Cybersecurity Major": [
          { name: "Y1 Trimester 1", units: [ "ICT101", "COSC110", "COSC130", or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree") ] },
          { name: "Y1 Trimester 2", units: [ "COSC120", or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree"), or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree"), "Non-ICT Elective" ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree"), "Non-ICT Elective", "Non-ICT Elective"]},
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", "COSC260", "COSC372"] },
          { name: "Y3 Trimester 1", units: [ "COSC310", "COSC370",  or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), "Non-ICT Elective" ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ],
      "Full-time, T1 start, Software Development Major": [
          { name: "Y1 Trimester 1", units: [ "ICT101", "COSC110", "COSC130", "Software Dev Group 1" ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", "Non-ICT Elective", "Non-ICT Elective" ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", or("COSC250", "Non-ICT Elective"), "Non-ICT Elective"]},
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", or("COSC260", "Non-ICT Elective"), "Non-ICT Elective" ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", "COSC370", or("Adv Software Dev Group 2", "Non-ICT Elective").withNote("+", "4 units from Group 2 must be taken across the degree, 2 of which must be Advanced"), or("Adv Software Dev Group 2", "Non-ICT Elective").withNote("+", "4 units from Group 2 must be taken across the degree, 2 of which must be Advanced"), ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), "Non-ICT Elective" ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ]

    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, edison.page, cybok.page, swebok.page, idverify.page
    ],
    learningOutcomes: [
      
    ]
  },

  {
    code: "BIT(IS)",
    name: "Bachelor of Information Technology (Information Systems and Cybersecurity)",
    structure: [

      {
        name: "Core",
        units: [
          "ICT101", "COSC110", "COSC120", "COSC130", "COSC210", "COSC220", "COSC240", "COSC310", 
        ]
      },

      {
        name: "Information Systems and Cybersecurity",
        units: [
          "COSC260", "COSC370", "COSC372",
          choose(2, "COSC101", "COSC102", "ICT100", "STAT100"),
          choose(2, "COSC482", "COSC483", "COSC484"),
          "COSC320"
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
      "Full-time, T1 start, Information Systems and Cybersecurity Major": [
          { name: "Y1 Trimester 1", units: [ "ICT101", "COSC110", "COSC130", or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree") ] },
          { name: "Y1 Trimester 2", units: [ "COSC120", or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree"), or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree"), "Non-ICT Elective" ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", or("IS & Cybersecurity Group 1", "Non-ICT Elective").withNote("+", "2 units from Group 1 must be taken across the degree"), "Non-ICT Elective", "Non-ICT Elective"]},
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", "COSC260", "COSC372"] },
          { name: "Y3 Trimester 1", units: [ "COSC310", "COSC370",  or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), or("IS & Cybersecurity Group 2", "Non-ICT Elective").withNote("+", "2 units from Group 2 must be taken across the degree"), "Non-ICT Elective" ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ],

    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, edison.page, cybok.page, swebok.page, idverify.page
    ],
    learningOutcomes: [
      
    ]
  },



  {
    code: "BIT(IoT)",
    name: "Bachelor of Information Technology (Analytics and the Internet of Things)",
    structure: [

      {
        name: "Core",
        units: [
          "ICT101", "COSC110", "COSC120", "COSC130", "COSC210", "COSC220", "COSC240", "COSC310", 
        ]
      },

      {
        name: "Analytics and the Internet of Things",
        units: [
          "AMTH140", "PHYS311",
          choose(1, "COSC102", "STAT100"),
          choose(4, "COSC340", "COSC350", "COSC361", "COSC483", "ICT363"),
          "COSC320"
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
      "Full-time, T1 start, Analyics and IoT Major": [
          { name: "Y1 Trimester 1", units: [ "ICT101", "COSC110", "COSC130", "Non-ICT Elective" ] },
          { name: "Y1 Trimester 2", units: [ "AMTH140", "COSC120", or("COSC102", "STAT100"), "Non-ICT Elective" ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "Non-ICT Elective", "Non-ICT Elective", "Non-ICT Elective" ] },
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", "PHYS311", or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree") ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"),  ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"), or("IoT Group 2", "Non-ICT Elective ").withNote("*", "4 units from Group 2 must be taken across the degree"),  ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ],

    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, effects.page
    ],
    learningOutcomes: [
      
    ]
  },



  {
    code: "BIT(SD)",
    name: "Bachelor of Information Technology (Software Development)",
    structure: [

      {
        name: "Core",
        units: [
          "ICT101", "COSC110", "COSC120", "COSC130", "COSC210", "COSC220", "COSC240", "COSC310", 
        ]
      },

      {
        name: "Software Development",
        units: [
          "AMTH140", "COSC230",
          choose(1, "COSC101", "ICT100"),
          choose(4, "COSC250", "COSC260", "COSC330", "COSC350", "COSC360", "COSC370"),
          "COSC320"
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
          { name: "Y1 Trimester 1", units: [ "ICT101", "COSC110", "COSC130", "Software Dev Group 1" ] },
          { name: "Y1 Trimester 2", units: [ "COSC120", "AMTH140", "Non-ICT Elective", "Non-ICT Elective" ] },
          { name: "Y2 Trimester 1", units: [ "COSC210", "COSC230", or("COSC250", "Non-ICT Elective").withNote("*", "COSC250 is one of 2 non-advanced units in Group 2"), "Non-ICT Elective"]},
          { name: "Y2 Trimester 2", units: [ "COSC220", "COSC240", or("COSC260", "Non-ICT Elective").withNote("*", "COSC260 is  one of 2 non-advanced units in Group 2"), "Non-ICT Elective" ] },
          { name: "Y3 Trimester 1", units: [ "COSC310", "COSC370", or("Adv Software Dev Group 2", "Non-ICT Elective").withNote("+", "4 units from Group 2 must be taken across the degree, 2 of which must be Advanced"), or("Adv Software Dev Group 2", "Non-ICT Elective").withNote("+", "4 units from Group 2 must be taken across the degree, 2 of which must be Advanced"), ] },
          { name: "Y3 Trimester 2", units: [ "COSC320", or("Adv Software Dev Group 2", "Non-ICT Elective").withNote("+", "4 units from Group 2 must be taken across the degree, 2 of which must be Advanced"), or("Adv Software Dev Group 2", "Non-ICT Elective").withNote("+", "4 units from Group 2 must be taken across the degree, 2 of which must be Advanced"), "Non-ICT Elective" ] },
          // Can do at most one of the Elective* units
          // Can do at most three of the Elective* or Elective** units
      ]

    },
    pages: [
      // cbok.old.page, 
      cbok.v3_2.page, cs2023ai.page, effects.page, swebok.page
    ],
    learningOutcomes: [
      
    ]
  },

  {
      code: "MIT",
      name: "Master of Information Technology",
      structure: [
        {
          name: "Core",
          units: [
            "COSC101", "COSC110", "COSC120", "COSC210", "COSC220", "COSC260", "COSC510", "COSC560", "COSC570"
          ]
        },
        {
          name: "Research and Capstone",
          units: [
            "COSC594", "COSC595"
          ]
        },
        {
          name: "Listed group 1",
          units: [
            choose(3, "COSC530", "COSC540", "COSC550", "COSC572")
          ]
        },
        {
          name: "Listed group 2",
          units: [
            choose(2,
              "AMTH250", "COSC240", "COSC250", "SCI410", 
              "COSC530", "COSC540", "COSC550", "COSC572", "Listed elective", "Listed elective"
            )
          ]
        }
      ],
      plans: {
        "Full-time, T1 start": [
          { name: "Y1 Trimester 1", units: [ "COSC101", "COSC110", "COSC120", "COSC210" ] },
          { name: "Y1 Trimester 2", units: [ "COSC220", "COSC260", "COSC572", "Listed elective" ] },
          { name: "Y2 Trimester 1", units: [ "COSC510", "COSC540", "COSC570", "COSC594" ] },
          { name: "Y2 Trimester 2", units: [ "COSC240", "COSC550", "COSC560", "COSC595" ] },
        ]
      }
    },

    {
      code: "MDSC",
      name: "Master of Data Science",
      structure: [
        {
          name: "Core",
          units: [
            "COSC110", "COSC210", "COSC510", "COSC550", "COSC572", "COSC580", "MTHS120", "SCI410", 
            "STAT100", or("STAT210", "STAT410"), "STAT430"
          ]
        },
        {
          name: "Research and Capstone",
          units: [
            "COSC591", "SCI501"
          ]
        },
        {
          name: "Listed units",
          units: [
            choose(3, "AMTH250", "COSC230", "COSC250", "COSC240", "COSC260", "COSC530", "COSC540", "COSC560", "COSC570", "STAT420",
              "Listed elective", "Listed elective", "Listed elective")
          ]
        }
      ],
      plans: {
        "Full-time, T1 start": [
          { name: "Y1 Trimester 1", units: [ "COSC110", "COSC210", "COSC510", "SCI410" ] },
          { name: "Y1 Trimester 2", units: [ "STAT100", "MTHS120", "COSC572", "Listed elective" ] },
          { name: "Y2 Trimester 1", units: [ "STAT210", "STAT430", "Listed elective", "Listed elective" ] },
          { name: "Y2 Trimester 2", units: [ "COSC550", "COSC580", "SCI501", "COSC591" ] },
        ]
      },
      pages: [
       cbok.old.page
    ]
      
    },

    {
      code: "MAI",
      name: "Master of Artificial Intelligence",
      structure: [
        {
          name: "Core",
          units: [
            "COSC110", "COSC130", "COSC250", "COSC510", "COSC531", "COSC550", "COSC551", 
            "COSC552", "COSC580", "AMTH405", "STAT430", or("COSC101", "COSC102")
          ]
        },
        {
          name: "Research/Project Capstone",
          units: [
            "COSC593", "COSC594", "COSC595"
          ]
        },
        {
          name: "Additional Project Capstone - Group 1",
          units: [
            choose(1, "COSC210", "COSC240")
          ]
        },
        {
          name: "Additional Project Capstone - Group 2",
          units: [
            choose(1, "COSC530", "COSC570")
          ]
        }
      ],
      plans: {
      
        "Full-time, T1 start": [
          { name: "Y1 Trimester 1", units: [ "COSC110",  "COSC510", "STAT430", or("COSC101", "Additional Capstone") ] },
          { name: "Y1 Trimester 2", units: [ "AMTH405", "COSC130", "COSC550", or("COSC102", "Additional Capstone") ] },
          { name: "Y2 Trimester 1", units: [ "COSC250", "COSC551", "COSC552", "COSC594", ] },
          { name: "Y2 Trimester 2", units: [ "COSC531", "COSC580", "COSC595", "Additional Capstone"] },
        ],
        "Full-time, T1 start Thesis": [
          { name: "Y1 Trimester 1", units: [ "STAT430", "COSC110", "COSC130", "COSC510"] },
          { name: "Y1 Trimester 2", units: [ "AMTH405", "COSC531", "COSC550", "COSC580"] },
          { name: "Y2 Trimester 1", units: [ "COSC250", "COSC551", "COSC552", or("COSC101", "COSC593") ] },
          { name: "Y2 Trimester 2", units: [ "COSC593", "COSC593", "COSC593", or("COSC102", "COSC593") ] },
        ]
        
      },
      pages: [
       cbok.v3_2.page, edison.page, cs2023ai.page, idverify.page//ccdsc.page
    ]
      
    },


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


// Top 3 for MIT

limitCourseGridEntries([ "MIT" ], cbok.old.Ethics, ["COSC110", "COSC510", "COSC594", "COSC595"])
limitCourseGridEntries([ "MIT" ], cbok.old.ProfExpectations, ["COSC110", "COSC220", "COSC594", "COSC595"])
limitCourseGridEntries([ "MIT" ], cbok.old.Teamwork, ["COSC101", "COSC220", "COSC594", "COSC595"])
limitCourseGridEntries([ "MIT" ], cbok.old.Communication, ["COSC220", "COSC570", "COSC594", "COSC595"])
limitCourseGridEntries([ "MIT" ], cbok.old.Societal, ["COSC110", "COSC210", "COSC570"])
limitCourseGridEntries([ "MIT" ], cbok.old.Understanding, ["COSC110", "COSC220", "COSC594", "COSC595"])
limitCourseGridEntries([ "MIT" ], cbok.old.ProblemSolving, ["COSC101", "COSC102", "COSC220", "COSC594", "COSC595"])
limitCourseGridEntries([ "MIT" ], cbok.old.Fundamentals, ["COSC110" ])
limitCourseGridEntries([ "MIT" ], cbok.old.Data, ["COSC210", "COSC220", "STAT100"])
limitCourseGridEntries([ "MIT" ], cbok.old.Networking, ["COSC210", "COSC260", "COSC560"])
limitCourseGridEntries([ "MIT" ], cbok.old.HumanFactors, ["COSC101", "COSC510", "COSC570"])
limitCourseGridEntries([ "MIT" ], cbok.old.Programming, ["COSC110", "COSC120", "COSC560"])
limitCourseGridEntries([ "MIT" ], cbok.old.Systems, ["COSC210", "COSC220", "COSC510"])
limitCourseGridEntries([ "MIT" ], cbok.old.Governance, ["COSC510"])
limitCourseGridEntries([ "MIT" ], cbok.old.ProjectManagement, ["COSC220", "COSC510", "COSC594", "COSC595"])
limitCourseGridEntries([ "MIT" ], cbok.old.ServiceManagement, ["COSC220"])
limitCourseGridEntries([ "MIT" ], cbok.old.Cybersecurity, ["COSC210", "COSC260", "COSC560"])

// Top 3 for mdsc

limitCourseGridEntries([ "MDSC" ], cbok.old.Ethics, ["COSC110", "COSC510", "COSC591"])
limitCourseGridEntries([ "MDSC" ], cbok.old.ProfExpectations, ["COSC110", "COSC510", "COSC591" ])
limitCourseGridEntries([ "MDSC" ], cbok.old.Teamwork, ["COSC110", "COSC510", "COSC591", "SCI501"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Communication, ["COSC110", "COSC510", "COSC591"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Societal, ["COSC110", "COSC210", "COSC572"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Understanding, ["COSC110", "COSC572", "COSC591"])
limitCourseGridEntries([ "MDSC" ], cbok.old.ProblemSolving, [ "COSC210", "COSC550", "COSC591", "SCI501"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Fundamentals, ["COSC110" ])
limitCourseGridEntries([ "MDSC" ], cbok.old.Data, ["COSC210", "COSC572", "STAT430"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Networking, ["COSC210", "COSC572"])
limitCourseGridEntries([ "MDSC" ], cbok.old.HumanFactors, ["COSC101", "COSC510", "COSC572"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Programming, ["COSC110", "COSC580", "SCI410"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Systems, ["COSC210", "COSC572", "COSC510"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Governance, ["COSC510"])
limitCourseGridEntries([ "MDSC" ], cbok.old.ProjectManagement, ["COSC510", "COSC591", "COSC572"])
limitCourseGridEntries([ "MDSC" ], cbok.old.ServiceManagement, ["COSC572"])
limitCourseGridEntries([ "MDSC" ], cbok.old.Cybersecurity, ["COSC210", "COSC572" ])


// Top 3 for MAI

// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Ethics, ["COSC110", "COSC510", "COSC591"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Practitioner, ["COSC110", "COSC510", "COSC591" ])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Collaboration, ["COSC110", "COSC510", "COSC591", "SCI501"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Communication, ["COSC110", "COSC510", "COSC591"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Impacts, ["COSC110", "COSC210", "COSC572"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Understanding, ["COSC110", "COSC572", "COSC591"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.ProblemSolving, [ "COSC210", "COSC550", "COSC591", "SCI501"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Fundamentals, ["COSC110" ])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Data, ["COSC210", "COSC572", "STAT430"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Networking, ["COSC210", "COSC572"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.HumanFactors, ["COSC101", "COSC510", "COSC572"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Programming, ["COSC110", "COSC580", "SCI410"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Systems, ["COSC210", "COSC572", "COSC510"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Governance, ["COSC510"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.ProjectManagement, ["COSC510", "COSC591", "COSC572"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.ServiceManagement, ["COSC572"])
// limitCourseGridEntries([ "MAI" ], cbok.v3_2.Cybersecurity, ["COSC210", "COSC572" ])