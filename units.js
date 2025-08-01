"use strict";

console.log("Loading units")

console.log(proctoredExam("Final Examination", 35, true))

addUnits([
    {
      code: "AMTH140",
      name: "Discrete Mathematics",
      prereq: [],
      mappings: [
        cbok.old.ProblemSolving.level(2),
        cbok.old.Understanding.level(1),
        cbok.old.Fundamentals.level(2),
        cbok.old.Cybersecurity.level(1),

        cbok.v3_2.Fundamentals.level(2),
        cbok.v3_2.Data.level(1),
        cbok.v3_2.Infrastructure.level(1),
        cbok.v3_2.Cybersecurity.level(1),
        cbok.v3_2.Depth.level(1),



        ccdsc.CCF, ccdsc.PDA,
        edison.SDMA, // Discrete Mathematics is KU1.01.12 within this category
        edison.SEC, // Cryptography

        swebok.MathFoundations,

        cybok.SS,

        cs2023ai.Logical,


      ],
      assessments: [
        proctoredExam("Final Examination", 60, true)
      ]
    },


    {
      code: "AMTH246",
      name: "Mathematical Methods in the Sciences",
      prereq: [ "PMTH212" ],
      mappings: [ 
        cbok.old.Programming.level(1),

        cbok.v3_2.Computing.level(1),
      
        ccdsc.PDA,
        edison.SMDA, // KU1.01.14 Mathematical software and tools (Matlab) 
      
        idverify.ProctoredExam 
      ]
    },

    {
      code: "AMTH250",
      name: "Computational Mathematics",
      prereq: [ or("MTHS120", "MTHS130")],
      mappings: [ 
        cbok.old.Programming.level(1),
        cbok.v3_2.Computing.level(1),

        ccdsc.PDA,
        edison.SMDA, // KU1.01.14 Mathematical software and tools (Matlab) 

        idverify.ProctoredExam 
      ]
    },

    {
      code: "SCI210",
      name: "Introduction to Scientific Programming",
      prereq: [ choose(1, "MTHS110", "MTHS120", "MTHS130")],
      amppings: [ 
        cbok.old.Programming.level(1),

        cbok.v3_2.Computing.level(1),
        cbok.v3_2.Data.level(1),
        
        ccdsc.AP, 
        edison.SDMA, // KU1.01.14 Mathematical software and tools (Matlab) 
      
        idverify.ProctoredExam 
      ]
    },

    {
      code: "MTHS100",
      name: "Introduction to Quantitative Skills",
      prereq: [], 
      mappings: [ 
        
        swebok.MathFoundations,

        idverify.ProctoredExam 
      ]
    },

    {
      code: "MTHS110",
      name: "Quantitative Skills with Applications",
      prereq: [], 
      mappings: [ 
        swebok.MathFoundations,
        idverify.ProctoredExam 
      ], 
      assessments: [
        proctoredExam("Final examination", 60, true)
      ]
    },


    {
      code: "MTHS120",
      name: "Calculus & Linear Algebra 1",
      prereq: [], 
      mappings: [ 
        swebok.MathFoundations,
        ccdsc.AP, edison.SMDA,
        idverify.ProctoredExam 
      ], 
      assessments: [
        proctoredExam("Final examination", 60, true)
      ]
    },

    {
      code: "MTHS130",
      name: "Calculus & Linear Algebra 2",
      prereq: [ "MTHS120" ],
      mappings: [ 
        swebok.MathFoundations,
        ccdsc.AP, edison.SMDA,
        idverify.ProctoredExam 
      ], 
      assessments: [
        proctoredExam("Final examination", 60, true)
      ]
    },

    {
      code: "PMTH212",
      name: "Multivariable Calculus",
      prereq: [ "MTHS120", "MTHS130" ], 
      mappings: [ ccdsc.AP, edison.SMDA ],
    },


    {
      code: "PMTH213",
      name: "Linear Algebra",
      prereq: [ "MTHS120", "MTHS130" ],
      mappings: [ ccdsc.AP, edison.SMDA ],
    },

    {
      code: "PMTH338",
      name: "Number Theory",
      prereq: [ "AMTH140" ], 
      mappings: [ 
        cbok.old.Fundamentals.level(2),
        cbok.v3_2.Data.level(2),

        ccdsc.AP, edison.SMDA,

        cybok.SS,


      ],  
      assessments: [
          proctoredExam("Final examination", 50, true)
      ]
    },


    {
      code: "MM105",
      name: "Communication for Business",
      prereq: [ ], 
      mappings: [ 
        cbok.old.Communication.level(1),
        idverify.TurnItIn
      ], 
    },

    {
      code: "MM203",
      name: "Management Practices in Responsible Organisations",
      prereq: [ ], 
      mappings: [ 
        cbok.old.Communication.level(1), 
        cbok.old.Teamwork.level(1),
        idverify.TurnItIn, idverify.ProctoredExam 
      ]
    },


    {
      code: "STAT100",
      name: "Introduction to Statistical Modelling",
      prereq: [], 
      mappings: [
        cbok.old.Data.level(2), 
        cbok.v3_2.Data.level(2), cbok.v3_2.Depth.level(1),
        swebok.MathFoundations, swebok.EngFoundations,
        ccdsc.AP, edison.SMDA,
        idverify.PersonalisedAssessment, idverify.TurnItIn 
      ] 
    },

    {
      code: "STAT210",
      name: "Statistical Modelling & Experimental Design",
      prereq: [ choose(1, "STAT100", "AMTH250", "SCI210") ],
      mappings: [ 
        cbok.old.Data.level(2), 
        cbok.v3_2.Data.level(2), cbok.v3_2.Depth.level(2),

        swebok.MathFoundations, swebok.EngFoundations,
        ccdsc.AP, ccdsc.DM, 
        edison.SMDA,
        edison.ML, // KU1.01.02 Regression
        edison.RM,
        edison.DM,
        edison.DSDA, 
        idverify.PersonalisedAssessment, idverify.TurnItIn ]
    },

    {
      code: "STAT410",
      name: "Statistical Modelling & Experimental Design",
      prereq: [ "candidature in a pg award" ],
      mappings: [ 
        cbok.old.Data.level(2), 
        cbok.v3_2.Data.level(2), 

        ccdsc.AP, ccdsc.DM, 
        edison.SMDA, 
        edison.ML, // KU1.01.02 Regression
        edison.RM,
        edison.DM,
        edison.DSDA, 
        idverify.PersonalisedAssessment, idverify.TurnItIn ]
    },

    {
      code: "STAT420",
      name: "Advanced Statistical Modelling",
      prereq: [ "candidature in a pg award" ],
      mappings: [ 
        cbok.old.Data.level(2) ,
        cbok.v3_2.Data.level(2) ,

        ccdsc.AP, ccdsc.DM, 
        edison.SMDA, 
        edison.RM,
        edison.DM,
        edison.MODSIM,
        idverify.PersonalisedAssessment, idverify.TurnItIn 
      ]
    },

    {
      code: "MATH260",
      name: "Probability and Simulation",
      prereq: [ "MTHS120", "MTHS130" ],
      mappings: [ 
        cbok.old.Data.level(3),
        cbok.v3_2.Data.level(3), cbok.v3_2.Depth.level(2),

        ccdsc.AP, ccdsc.AI, 
        edison.SDMA,
        edison.ML, // KU1.01.05 Probabilistic reasoning 
        edison.MODSIM,

        cs2023ai.Probabilistic, cs2023ai.FKRR, cs2023ai.Agents,

        idverify.PersonalisedAssessment, idverify.TurnItIn ], 
        assessments: [
          proctoredExam("Final examination", 60, true)
        ]
    },

    {
      code: "STAT270",
      name: "Inference",
      prereq: [ "MATH260" ],
      mappings: [ 
        cbok.old.Data.level(3),
        cbok.v3_2.Data.level(3),

        ccdsc.AP, ccdsc.AI, 
        edison.SDMA, 
        edison.ML, // KU1.01.05 Probabilistic reasoning 
        idverify.TurnItIn ]
    },

    {
      code: "STAT320",
      name: "Advanced Statistical Modelling",
      prereq: [ "STAT210" ],
      mappings: [ 
        cbok.old.Data.level(3),
        cbok.v3_2.Data.level(3), cbok.v3_2.Depth.level(3),
        ccdsc.AP, ccdsc.AI, ccdsc.DM, 
        edison.SDMA, 
        edison.ML, // KU1.01.05 Probabilistic reasoning 
        edison.MODSIM,
        idverify.TurnItIn ]
    },

    {
      code: "STAT330",
      name: "Statistical Learning",
      prereq: [ "STAT210" ],
      mappings: [ 
        cbok.old.Data.level(3),
        cbok.v3_2.Data.level(3), cbok.v3_2.Depth.level(3),
        swebok.MathFoundations, swebok.EngFoundations, swebok.Construction,
        ccdsc.AP, ccdsc.DM, ccdsc.ML, 
        edison.SDMA, edison.ML, edison.DM,
        idverify.TurnItIn, idverify.Oral
      ],
      tags: ["Advanced"], 
    },

    {
      code: "STAT430",
      name: "Statistical Learning",
      prereq: [ "STAT100", "candidature in MDatSci or pg award" ],
      mappings: [ 
        cbok.old.Data.level(3),
        cbok.v3_2.Data.level(3),
        ccdsc.AP, ccdsc.DM, ccdsc.ML, 
        edison.SDMA, edison.ML, edison.DM,
        idverify.TurnItIn, idverify.Oral ]
    },


    {
      code: "SCI410",
      name: "Introduction to Scientific Programming",
      prereq: [ cp(96), "or enrolment in pg award" ],
      cbok: [ 
        cbok.old.Programming.level(2), cbok.old.Data.level(2), 
        cbok.v3_2.Computing.level(2), cbok.v3_2.Data.level(2), 
        ccdsc.AP, ccdsc.PDA, ccdsc.CCF, edison.SMDA,
        idverify.ProctoredExam,
      ],
      tags: ["Advanced"],
    },


    {
      code: "SCI501",
      name: "Special Topics in Science A",
      prereq: [ cp(48), "permission of HoS"],
      mappings: [ 
        cbok.old.Data.level(3), cbok.old.ProblemSolving.level(3),
        cbok.v3_2.Data.level(3), cbok.v3_2.Fundamentals.level(3),
        edison.RM,
        idverify.TurnItIn, idverify.Project, idverify.PersonalisedAssessment 
      ],
      tags: [ "Advanced", "Capstone" ],
    },

    {
      code: "QM161",
      name: "Business Statistics",
      prereq: [], 
      mappings: [ 
        cbok.old.Data.level(2),
        cbok.v3_2.Data.level(2),
        ccdsc.AP, edison.SDMA,
        idverify.ProctoredExam 
      ]
    },

    {
      code: "QM262",
      name: "Introduction to Business Analytics",
      prereq: [], 
      mappings: [ 
        cbok.old.Data.level(2),
        cbok.v3_2.Data.level(2),

        ccdsc.AP, edison.SDMA,
        idverify.ProctoredExam 
      ]
    },

    {
      code: "ICT100",
      name: "Computational Thinking",
      prereq: [],
      mappings: [ 
        cbok.old.Ethics.level(1), cbok.old.Societal.level(1), cbok.old.HumanFactors.level(1), cbok.old.ProblemSolving.level(1), cbok.old.Programming.level(1),

        cbok.v3_2.Ethics.level(1), cbok.v3_2.Impacts.level(1), cbok.v3_2.Application.level(1), cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Computing.level(1), cbok.v3_2.Data.level(1), cbok.v3_2.Depth.level(1),

        swebok.MathFoundations, swebok.CompFoundations, swebok.EngFoundations, swebok.Construction,
        ccdsc.CCF, ccdsc.PDA,
        edison.TDM, // text processing of Beatrix Potter in "Little Data"

        cs2023ai.FundamentalIssues, cs2023ai.FKRR, cs2023ai.NLP, cs2023ai.Search, cs2023ai.Robotics, cs2023ai.Applications
      ],
      other: []
    },

    {
      code: "ICT101",
      name: "From Logic to Data Processing",
      prereq: [],
      mappings: [ 
        cbok.old.Fundamentals.level(1), cbok.old.Understanding.level(1), cbok.old.Data.level(1),
        cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Infrastructure.level(1), cbok.v3_2.Data.level(1), cbok.v3_2.Computing.level(1), cbok.v3_2.Depth.level(1),
        swebok.MathFoundations, swebok.CompFoundations,
        ccdsc.CCF 
      ],
      
    },

    {
      code: "COSC101",
      name: "Software Development Studio 1",
      prereq: [],
      mappings: [ 
        cbok.old.ProblemSolving.level(2), cbok.old.Teamwork.level(2), cbok.old.Communication.level(2), cbok.old.Networking.level(1), cbok.old.HumanFactors.level(1),

        cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Collaboration.level(2), cbok.v3_2.Communication.level(2), cbok.v3_2.Infrastructure.level(1), cbok.v3_2.Application.level(1), cbok.v3_2.Depth.level(1),

        swebok.MathFoundations, swebok.CompFoundations, swebok.Construction, swebok.ProfPractice,
        ccdsc.CCF, ccdsc.AP, ccdsc.PDA, ccdsc.PR,
        idverify.GroupWork, idverify.Video ]
    },

    {
      code: "COSC102",
      name: "Data Science Studio 1",
      prereq: [ choose(2, "COSC110", "STAT110") ],
      mappings: [  
        cbok.old.Programming.level(2), cbok.old.Teamwork.level(2), cbok.old.Communication.level(2), cbok.old.Data.level(1), cbok.old.ProblemSolving.level(1),

        cbok.v3_2.Computing.level(2), cbok.v3_2.Collaboration.level(2), cbok.v3_2.Communication.level(2), cbok.v3_2.Data.level(1), cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Depth.level(1),

        swebok.MathFoundations, swebok.CompFoundations, swebok.EngFoundations, swebok.ProfPractice,
        ccdsc.CCF, ccdsc.AP, ccdsc.PDA, ccdsc.PR,
        edison.DSDA,  

        cybok.AD, 

        cs2023ai.FundamentalIssues, cs2023ai.FKRR, cs2023ai.Applications,


        idverify.GroupWork, idverify.Video ]
    },


    {
      code: "COSC110",
      name: "Introduction to Programming and the Unix Environment",
      prereq: [],
      mappings: [ 
        cbok.old.Ethics.level(1), cbok.old.ProfExpectations.level(1), cbok.old.Teamwork.level(1), cbok.old.Societal.level(2), cbok.old.Understanding.level(1), cbok.old.Communication.level(1), cbok.old.Programming.level(2), cbok.old.Fundamentals.level(1),

        cbok.v3_2.Ethics.level(1), cbok.v3_2.Practitioner.level(1), cbok.v3_2.Collaboration.level(1), cbok.v3_2.Impacts.level(2), cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Communication.level(1), cbok.v3_2.Computing.level(2), cbok.v3_2.Depth.level(1),
        
        swebok.CompFoundations, swebok.Construction, swebok.Testing,
        ccdsc.PDA, ccdsc.PR, ccdsc.CCF, ccdsc.SDM,
        edison.DSAPPD, // KU2.06.05 Python

        cs2023ai.FundamentalIssues,

        idverify.ProctoredExam, idverify.TurnItIn, idverify.PersonalisedAssessment 
      ],
      assessments: [
        proctoredExam("Final Examination", 35, true)
      ]
    },

    {
      code: "COSC120",
      name: "Object Oriented Programming",
      prereq: [ "COSC110" ],
      mappings: [ 
        cbok.old.Programming.level(2), cbok.old.ProblemSolving.level(1),
        cbok.v3_2.Computing.level(2), cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Depth.level(1),
        swebok.Construction, swebok.Design, swebok.ModelsAndMethods,
        ccdsc.PDA, ccdsc.CCF, ccdsc.SDM, 
        idverify.Video ],
      assessments: [
        proctoredExam("Final Examination", 40, true)
      ]
    },

    {
      code: "COSC210",
      name: "Database Management Systems",
      prereq: [ "COSC110" ],
      mappings: [ 
        cbok.old.ProblemSolving.level(1), cbok.old.Societal.level(1), cbok.old.Data.level(3), cbok.old.Networking.level(2), cbok.old.Systems.level(1), cbok.old.Cybersecurity.level(1),       

        cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Impacts.level(1), cbok.v3_2.Data.level(3), cbok.v3_2.Infrastructure.level(2), cbok.v3_2.Application.level(1), cbok.v3_2.Cybersecurity.level(1), cbok.v3_2.Depth.level(2), 

        swebok.Construction, swebok.Design, swebok.ModelsAndMethods,
        ccdsc.DG, ccdsc.SDM,
        edison.DMS,
        edison.EDMI,

        cybok.SS, 

        idverify.TurnItIn ]
    },

    {
      code: "COSC220",
      name: "Software Development Studio 2",
      prereq: [ "COSC120" ],
      mappings: [
        cbok.old.ProblemSolving.level(2), 
        cbok.old.Ethics.level(1), 
        cbok.old.ProfExpectations.level(2), 
        cbok.old.Teamwork.level(2), 
        cbok.old.Communication.level(2), 
        cbok.old.Societal.level(2),
        cbok.old.Understanding.level(2), cbok.old.Data.level(2), cbok.old.Programming.level(3), cbok.old.HumanFactors.level(2), cbok.old.Systems.level(2), cbok.old.Networking.level(2),
        cbok.old.ProjectManagement.level(2), cbok.old.ServiceManagement.level(1),

        cbok.v3_2.Fundamentals.level(2), 
        cbok.v3_2.Ethics.level(1), 
        cbok.v3_2.Practitioner.level(2), 
        cbok.v3_2.Collaboration.level(2), 
        cbok.v3_2.Communication.level(2), 
        cbok.v3_2.Impacts.level(2),
        
        cbok.v3_2.Data.level(2), cbok.v3_2.Computing.level(3), cbok.v3_2.Application.level(2), cbok.v3_2.Projects.level(2), cbok.v3_2.Infrastructure.level(2), 
        cbok.v3_2.Governance.level(1), cbok.v3_2.Cybersecurity.level(2),
        cbok.v3_2.Depth.level(2),


        swebok.Requirements, swebok.Design, swebok.Construction, swebok.Testing, swebok.Maintenance,
        swebok.ConfigManagement, swebok.EngManagement, swebok.Process, swebok.ModelsAndMethods, swebok.Quality, 
        swebok.ProfPractice, swebok.EngFoundations,

        ccdsc.PR, ccdsc.SDM, ccdsc.CCF, ccdsc.DG,
        edison.PM, // project management (agile)
        edison.CCT, // VMs & containers
        edison.DSAPPD, // Software engineering methods, testing

        cybok.SS, cybok.SAPS,

        idverify.TurnItIn, idverify.GroupWork, idverify.Project, idverify.DataTrails, idverify.Video ],
      tags: [ "adv?" ], 
      assessments: [
        assessment({
          name: "Collaborative project",
          grade: [ grade.weighted(45) ],
          ev: [ 
            [ evidence.discussions, evidence.marked(15) ],
            [ evidence.versionHistory, evidence.marked(40) ],
            [ evidence.peerReport, evidence.audited ],
            [ evidence.logs, evidence.audited ],
          ]
        }),
        assessment({
          name: "Individual contribution",
          grade: [ grade.weighted(25) ],
          ev: [ 
            [ evidence.versionHistory, evidence.marked(25) ],
            [ evidence.peerReport, evidence.audited ],
            [ evidence.logs, evidence.audited ],
          ]
        }),
      ]
    },

    {
      code: "COSC230",
      name: "Data Structures & Algorithms",
      prereq: [ "AMTH140", "COSC120", choose(1, "COSC101", "COSC110", "SCI210", "AMTH250") ],
      mappings: [ 
        cbok.old.Fundamentals.level(2), cbok.old.Programming.level(2),

        cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Computing.level(2), cbok.v3_2.Depth.level(2),

        swebok.MathFoundations, swebok.CompFoundations, swebok.Construction, swebok.ModelsAndMethods, swebok.Design,
        ccdsc.PDA, ccdsc.SDM,
        edison.BDSE, // software systems development

        cs2023ai.FKRR, cs2023ai.Search,

      ],
      tags: ["adv?"],
      assessments: [
        proctoredExam("Final Examination", 60, true)
      ]
    },

    {
      code: "COSC240",
      name: "Operating Systems",
      prereq: [ "COSC120" ],
      mappings: [ 
        cbok.old.ProblemSolving.level(2), cbok.old.Societal.level(1), cbok.old.Understanding.level(2), cbok.old.Fundamentals.level(2), cbok.old.Networking.level(2), cbok.old.Programming.level(3), cbok.old.Systems.level(1), cbok.old.Cybersecurity.level(2),

        cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Impacts.level(1), cbok.v3_2.Infrastructure.level(2), cbok.v3_2.Computing.level(3), cbok.v3_2.Cybersecurity.level(2), cbok.v3_2.Depth.level(2),

        swebok.CompFoundations,
        ccdsc.CCF, ccdsc.DP, edison.SEC,  

        cybok.SS, cybok.IS,

        idverify.ProctoredExam, idverify.PersonalisedAssessment 
      ], 
      assessments: [
        proctoredExam("Final examination", 40, true)
      ]
    },

    {
      code: "COSC250",
      name: "Programming Paradigms",
      prereq: [ "COSC120", choose(1, "COSC101", "COSC110", "SCI210", "AMTH250") ],
      mappings: [ 
        cbok.old.Understanding.level(1), cbok.old.Programming.level(3), cbok.old.Systems.level(2),

        cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Computing.level(3), cbok.v3_2.Depth.level(3),

        swebok.Design, swebok.Construction, swebok.Testing, swebok.ModelsAndMethods, swebok.MathFoundations, swebok.CompFoundations,
      
        ccdsc.BDS, // akka, streams. Functional programming approaches tend to be used in Spark, Kafka 
        ccdsc.SDM, 
        ccdsc.PDA, 
        ccdsc.AI,
        edison.DSIAPP, // Spark, Kafka
        edison.BDSE, // Akka
        edison.DSAPPD, // Scala
        edison.BDI, // Scalable computing. Parallel and distributed architecture (actors)

        cs2023ai.Search, cs2023ai.Agents, cs2023ai.Logical,
        
       
        idverify.ProctoredExam, idverify.Video 
      ],
      tags: ["adv?"]
    },

    {
      code: "COSC260",
      name: "Web Programming",
      prereq: [ choose(2, "COSC101", "COSC110", "COSC120") ],
      mappings: [ 
        cbok.old.Societal.level(1), cbok.old.Networking.level(2), cbok.old.Programming.level(2), cbok.old.HumanFactors.level(2), cbok.old.Systems.level(2), cbok.old.Cybersecurity.level(2),

        cbok.v3_2.Application.level(1), cbok.v3_2.Infrastructure.level(2), cbok.v3_2.Computing.level(2), cbok.v3_2.Infrastructure.level(2), cbok.v3_2.Cybersecurity.level(2), cbok.v3_2.Depth.level(2),

        swebok.Construction, swebok.Requirements,
        ccdsc.CCF, ccdsc.SDM, ccdsc.AP,
        idverify.ProctoredExam 
      ]
    },

    {
      code: "COSC301",
      name: "Special Topic in Computing",
      prereq: [ cp(48), "permission of HoS" ],
      mappings: [ idverify.PersonalisedAssessment ],
      tags: ["Advanced"],
    },


    {
      code: "COSC310",
      name: "Software Project Management",
      prereq: [ choose(1, "COSC210", "COSC220") ],
      mappings: [ 
        cbok.old.Ethics.level(2), cbok.old.ProfExpectations.level(2), cbok.old.Teamwork.level(2), cbok.old.Communication.level(3), cbok.old.Systems.level(2), cbok.old.Governance.level(3), cbok.old.ProjectManagement.level(3), cbok.old.HumanFactors.level(2),
       
        cbok.v3_2.Ethics.level(2), cbok.v3_2.Practitioner.level(2), cbok.v3_2.Collaboration.level(2), cbok.v3_2.Communication.level(3), cbok.v3_2.Projects.level(2), cbok.v3_2.Governance.level(3), cbok.v3_2.Application.level(2), cbok.v3_2.Impacts.level(2),


        swebok.Requirements, swebok.Maintenance, swebok.EngManagement, swebok.Process, swebok.Quality, swebok.ProfPractice, swebok.Economics,
      
        ccdsc.PR, ccdsc.DP,
        edison.PM,
        edison.DGOV,     
        
        cybok.HORA,
      
        idverify.ProctoredExam, idverify.GroupWork, idverify.TurnItIn, idverify.Video,
      ],
      tags: ["Advanced"],  
      assessments: [
          proctoredExam("Final examination", 50, true)
      ]
      
    },

    {
      code: "COSC510",
      name: "Software Project Management",
      prereq: [ "COSC110", "COSC210" ],
      mappings: [ 
        cbok.old.Ethics.level(2), cbok.old.ProfExpectations.level(2), cbok.old.Teamwork.level(2), cbok.old.Communication.level(3), cbok.old.Systems.level(2), cbok.old.Governance.level(3), 
        cbok.old.ProjectManagement.level(3), cbok.old.HumanFactors.level(2),

        cbok.v3_2.Ethics.level(2), cbok.v3_2.Practitioner.level(2), cbok.v3_2.Collaboration.level(2), cbok.v3_2.Communication.level(3), cbok.v3_2.Projects.level(2), cbok.old.Governance.level(3), 
        cbok.v3_2.Application.level(2),


        swebok.Requirements, swebok.Maintenance, swebok.EngManagement, swebok.Process, swebok.Quality, swebok.ProfPractice, swebok.Economics,
        
        ccdsc.PR, ccdsc.DP,
        edison.PM,
        edison.DGOV,

        idverify.ProctoredExam, idverify.GroupWork, idverify.TurnItIn, idverify.Video
      ],
      tags: ["Advanced"],
    },


    {
      code: "COSC320",
      name: "Information Technology Project",
      prereq: [ "COSC220", "COSC310", cp(96) ],
      mappings: [ 
        cbok.old.ProblemSolving.level(3), cbok.old.Ethics.level(2), cbok.old.ProfExpectations.level(2), cbok.old.Teamwork.level(3), cbok.old.Communication.level(3), cbok.old.Systems.level(3), cbok.old.ProjectManagement.level(3), cbok.old.Understanding.level(2),

        cbok.v3_2.Fundamentals.level(3), cbok.v3_2.Ethics.level(2), cbok.v3_2.Practitioner.level(2), cbok.v3_2.Collaboration.level(3), cbok.v3_2.Communication.level(3), cbok.v3_2.Application.level(3), cbok.v3_2.Projects.level(3), cbok.v3_2.Depth.level(3),

        
        swebok.Requirements, swebok.Construction, swebok.EngManagement, swebok.Process, swebok.Quality, swebok.ProfPractice,
        ccdsc.PR, edison.PM,
        idverify.GroupWork, idverify.Project, idverify.TurnItIn, idverify.Video, idverify.Oral 
      ],
      tags: [ "Advanced", "Capstone" ], 
      assessments: [
        assessment({
          name: "Industry project",
          grade: [ grade.hurdle ],
          ev: [ 
            [ evidence.clientReport, evidence.marked(5) ],
            [ evidence.discussions, evidence.marked(20) ],
            [ evidence.peerReport, evidence.audited ],
            [ evidence.versionHistory, evidence.audited ],
          ]
        }),
      ]
    },

    {
      code: "COSC591",
      name: "Information Technology Project",
      prereq: [ "COSC510", choose(1, "COSC530", "COSC540", "COSC550", "COSC560", "COSC570", "COSC572", "COSC580") ],
      mappings: [ 
        cbok.old.ProblemSolving.level(3), cbok.old.Ethics.level(2), cbok.old.ProfExpectations.level(2), cbok.old.Teamwork.level(3), cbok.old.Communication.level(3), cbok.old.Systems.level(3), cbok.old.ProjectManagement.level(3), cbok.old.Understanding.level(2),
        
        ccdsc.PR, edison.PM,
        idverify.GroupWork, idverify.Project, idverify.TurnItIn, idverify.Video, idverify.Oral
      ],
      tags: [ "Advanced", "Capstone" ],
    },


    {
      code: "COSC594",
      name: "Information Technology Project: Proposal and Design",
      prereq: [ "COSC220", cp(48) ],
      mappings: [ 
        cbok.old.ProblemSolving.level(3), cbok.old.Ethics.level(2), cbok.old.ProfExpectations.level(2), cbok.old.Teamwork.level(3), cbok.old.Communication.level(3), cbok.old.Systems.level(3), cbok.old.ProjectManagement.level(3), cbok.old.Understanding.level(2),
        
        ccdsc.PR, edison.PM,
        idverify.GroupWork, idverify.Project, idverify.TurnItIn, idverify.Video, idverify.Oral
      ],
      tags: [ "Advanced", "Capstone" ],
    },

    {
      code: "COSC595",
      name: "Information Technology Project: Implementation",
      prereq: [ "COSC220", cp(48) ],
      mappings: [ 
        cbok.old.ProblemSolving.level(3), cbok.old.Ethics.level(2), cbok.old.ProfExpectations.level(2), cbok.old.Teamwork.level(3), cbok.old.Communication.level(3), cbok.old.Systems.level(3), cbok.old.ProjectManagement.level(3), cbok.old.Understanding.level(2),
        
        ccdsc.PR, edison.PM,
        idverify.GroupWork, idverify.Project, idverify.TurnItIn, idverify.Video, idverify.Oral
      ],
      tags: [ "Advanced", "Capstone" ],
    },


    {
      code: "COSC330",
      name: "Parallel and Distributed Computing",
      prereq: [ or("COSC230", "COSC240") ],
      mappings: [ 
        cbok.old.Fundamentals.level(3), cbok.old.Data.level(3), cbok.old.Networking.level(3), cbok.old.Systems.level(2),

        cbok.v3_2.Fundamentals.level(3), cbok.v3_2.Data.level(3), cbok.v3_2.Infrastructure.level(3), cbok.v3_2.Computing.level(3), cbok.v3_2.Depth.level(3),

        swebok.Construction, swebok.CompFoundations, swebok.ModelsAndMethods,
        
        ccdsc.BDS, ccdsc.PDA,
        edison.BDI, // parallel computing, HPC
        edison.DSIAPP, // data processing models
        edison.DSAPPD, // CUDA
      ],
      tags: ["Advanced"],
    },

    {
      code: "COSC530",
      name: "Parallel and Distributed Computing",
      prereq: [ "COSC110", choose(2, "COSC210", "COSC220", "COSC230", "COSC240", "COSC250", "COSC260", "STAT210") ],
      mappings: [ 
        cbok.old.Fundamentals.level(3), cbok.old.Data.level(3), cbok.old.Networking.level(3), cbok.old.Systems.level(2),
        
        swebok.Construction, swebok.CompFoundations, swebok.ModelsAndMethods,
        ccdsc.BDS, ccdsc.PDA,
        edison.BDI, // parallel computing, HPC
        edison.DSIAPP, // data processing models
        edison.DSAPPD, // CUDA
      ],
      tags: ["Advanced"],
    },

    
    {
      code: "COSC340",
      name: "Computer Networks and Network Security",
      prereq: [ cp(72), "AMTH140", "COSC240" ],
      mappings: [ 
        cbok.old.Societal.level(1), cbok.old.Communication.level(3), cbok.old.Fundamentals.level(2), cbok.old.Understanding.level(1), 
        cbok.old.Data.level(2), cbok.old.Networking.level(3), cbok.old.Programming.level(3), cbok.old.Cybersecurity.level(3),

        cbok.v3_2.Impacts.level(1), cbok.v3_2.Communication.level(3), cbok.v3_2.Fundamentals.level(2), cbok.old.Data.level(2), cbok.v3_2.Infrastructure.level(3), cbok.v3_2.Cybersecurity.level(3), cbok.v3_2.Depth.level(3),
        
        swebok.CompFoundations, swebok.Construction,
        
        ccdsc.CCF, ccdsc.DP, edison.SEC,

        cybok.SS, cybok.IS,

        idverify.ProctoredExam, idverify.PersonalisedAssessment
      ],
      tags: ["Advanced"],  
      assessments: [
          proctoredExam("Final examination", 40, true)
      ]
    },

    {
      code: "COSC540",
      name: "Computer Networks and Network Security",
      prereq: [ "COSC110", choose(2, "COSC210", "COSC220", "COSC230", "COSC240", "COSC250", "COSC260", "STAT210") ],
      mappings: [ 
        cbok.old.Societal.level(1), cbok.old.Communication.level(3), cbok.old.Fundamentals.level(2), cbok.old.Understanding.level(1), cbok.old.Data.level(2), cbok.old.Networking.level(3), cbok.old.Programming.level(3), cbok.old.Cybersecurity.level(3),
        swebok.CompFoundations, swebok.Construction,
        ccdsc.CCF, ccdsc.DP, 
        edison.SEC,
        idverify.ProctoredExam, idverify.PersonalisedAssessment 
      ],
      tags: ["Advanced"],  
      assessments: [
          proctoredExam("Final examination", 40, true)
      ]
    },


    {
      code: "COSC350",
      name: "Artificial Intelligence",
      prereq: [ "COSC230" ],
      mappings: [ 
        cbok.old.Data.level(3), cbok.old.Programming.level(3), cbok.old.Fundamentals.level(2), cbok.old.Systems.level(2), cbok.old.ProblemSolving.level(2),
        cbok.v3_2.Data.level(3), cbok.v3_2.Computing.level(3), cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Impacts.level(2), cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Depth.level(3),

        swebok.Construction,
        
        ccdsc.AI, ccdsc.ML, ccdsc.PDA,
        edison.ML,
        edison.PA,
        edison.DM,
        edison.SDMA,

        cybok.AD, cybok.HORA,

        cs2023ai.FundamentalIssues, cs2023ai.Planning, cs2023ai.Robotics, cs2023ai.FKRR, cs2023ai.Search, cs2023ai.MachineLearning, cs2023ai.Logical, cs2023ai.Perception, cs2023ai.Agents,

        idverify.ProctoredExam 
      ],
      tags: ["Advanced"],
    },

    {
      code: "COSC550",
      name: "Artificial Intelligence",
      prereq: [ "COSC110", choose(2, "COSC210", "COSC220", "COSC230", "COSC240", "COSC250", "COSC260", "STAT210") ],
      mappings: [ 
        cbok.old.Data.level(3), cbok.old.Programming.level(3), cbok.old.Fundamentals.level(2), cbok.old.Systems.level(2), cbok.old.ProblemSolving.level(2),
        
        swebok.Construction,
        ccdsc.AI, ccdsc.ML, ccdsc.PDA,
        edison.ML,
        edison.PA,
        edison.DM,
        edison.SDMA,
        idverify.ProctoredExam 
      ],
      tags: ["Advanced"],
    },

    {
      code: "COSC360",
      name: "Advanced Web Programming",
      prereq: [ "COSC120", "COSC260" ],
      mappings: [ 
        cbok.old.Communication.level(2), cbok.old.Networking.level(3), cbok.old.Programming.level(3), cbok.old.HumanFactors.level(2), cbok.old.Systems.level(2), cbok.old.ServiceManagement.level(2), cbok.old.Cybersecurity.level(2),
        cbok.v3_2.Application.level(2), cbok.v3_2.Infrastructure.level(3), cbok.v3_2.Computing.level(3), cbok.v3_2.Governance.level(2), cbok.v3_2.Cybersecurity.level(2), cbok.v3_2.Depth.level(3),

        swebok.Construction, swebok.Design, swebok.Testing, swebok.Requirements,
        ccdsc.CCF, ccdsc.AP, ccdsc.PDA,
        edison.BDI, // NoSQL (Mongo)
        idverify.ProctoredExam, idverify.Project, idverify.Video
      ],
      tags: ["Advanced"],
    },

    {
      code: "COSC560",
      name: "Advanced Web Programming",
      prereq: [ "COSC260", or("COSC110", "COSC120") ],
      mappings: [ 
        cbok.old.Communication.level(2), cbok.old.Networking.level(3), cbok.old.Programming.level(3), cbok.old.HumanFactors.level(2), cbok.old.Systems.level(2), cbok.old.ServiceManagement.level(2), cbok.old.Cybersecurity.level(2),
        swebok.Construction, swebok.Design, swebok.Testing, swebok.Requirements,
        ccdsc.CCF, ccdsc.AP, ccdsc.PDA,
        edison.BDI, // NoSQL (Mongo)
        idverify.ProctoredExam, idverify.Project, idverify.Video
      ],
      tags: ["Advanced"],
    },


    {
      code: "COSC370",
      name: "User Experience & Interaction Design",
      prereq: [ cp(72), "COSC220" ],
      mappings: [ 
        cbok.old.Communication.level(3), cbok.old.Societal.level(3), cbok.old.HumanFactors.level(3), cbok.old.Systems.level(3),
        cbok.v3_2.Communication.level(3), cbok.v3_2.Impacts.level(3), cbok.v3_2.Fundamentals.level(3), cbok.v3_2.Application.level(3), cbok.v3_2.Ethics.level(3), cbok.v3_2.Projects.level(2), cbok.v3_2.Depth.level(3),

        swebok.Requirements, swebok.Design, swebok.ProfPractice, 
        ccdsc.AP, ccdsc.PR,
        idverify.Project, idverify.Video, idverify.TurnItIn 
      ],
      tags: ["Advanced"],
    },

    {
      code: "COSC570",
      name: "User Experience & Interaction Design",
      prereq: [ "COSC110", choose(2, "COSC210", "COSC220", "COSC230", "COSC240", "COSC250", "COSC260", "STAT210") ],
      mappings: [ 
        cbok.old.Communication.level(3), cbok.old.Societal.level(3), cbok.old.HumanFactors.level(3), cbok.old.Systems.level(3),
        swebok.Requirements, swebok.Design, swebok.ProfPractice, 
        ccdsc.AP, ccdsc.PR,
        idverify.Project, idverify.Video, idverify.TurnItIn 
      ],
      tags: ["Advanced"],
    },


    {
      code: "COSC372",
      name: "Management Information Systems",
      prereq: [ cp(48) ],
      mappings: [ 
        cbok.old.Societal.level(2), cbok.old.Data.level(2), cbok.old.Systems.level(3), cbok.old.ProjectManagement.level(1), cbok.old.ServiceManagement.level(2), cbok.old.Networking.level(2), cbok.old.HumanFactors.level(2), cbok.old.Cybersecurity.level(1),

        cbok.v3_2.Impacts.level(2), cbok.v3_2.Data.level(2), cbok.v3_2.Application.level(3), cbok.v3_2.Projects.level(1), cbok.v3_2.Governance.level(2), cbok.v3_2.Infrastructure.level(2), cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Cybersecurity.level(1), cbok.v3_2.Depth.level(3),

        swebok.Economics, swebok.Maintenance, swebok.Quality,
        ccdsc.AP, ccdsc.PR, ccdsc.DG, ccdsc.DP,
        edison.BAF,
        edison.BAEM,
        edison.IS,
        edison.DMORG,
        edison.DGOV,

        cybok.HORA, cybok.SAPS, cybok.IS,

        idverify.PersonalisedAssessment, idverify.TurnItIn 
      ],  
      assessments: [
          proctoredExam("Final examination", 50, true)
      ]
    },

    {
      code: "COSC572",
      name: "Management Information Systems",
      prereq: [ cp(48) ],
      mappings: [ 
        cbok.old.Societal.level(2), cbok.old.Data.level(2), cbok.old.Systems.level(3), cbok.old.ProjectManagement.level(1), cbok.old.ServiceManagement.level(2), cbok.old.Networking.level(2), cbok.old.HumanFactors.level(2), cbok.old.Cybersecurity.level(1),
        swebok.Economics, swebok.Maintenance, swebok.Quality,
        ccdsc.AP, ccdsc.PR, ccdsc.DG, ccdsc.DP,
        edison.BAF,
        edison.BAEM,
        edison.IS,
        edison.DMORG,
        edison.DGOV,
        idverify.PersonalisedAssessment, idverify.TurnItIn 
      ] 
    },


    {
      code: "COSC380",
      name: "Algorithms in Machine Learning",
      prereq: [ choose(1, "MTHS120", "MTHS130"), choose(1, "COSC230", "AMTH250", "SCI210", "STAT330") ],
      mappings: [ 
        cbok.old.Data.level(3), cbok.old.Programming.level(2), cbok.old.ProblemSolving.level(2),

        cbok.v3_2.Data.level(3), cbok.v3_2.Computing.level(3), cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Depth.level(3),


        swebok.Construction, swebok.MathFoundations,
        ccdsc.ML, ccdsc.PDA,
        edison.ML,
        edison.DM, // reinforcement learning
        edison.PA,
        edison.SMDA,
        edison.DSAPPD,

        cs2023ai.MachineLearning, cs2023ai.FKRR, cs2023ai.Probabilistic, cs2023ai.FundamentalIssues, cs2023ai.Search,

        idverify.Project, idverify.TurnItIn
      ],
      tags: ["Advanced"],  
      assessments: [
          proctoredExam("Final examination", 55, true)
      ]
    },

    {
      code: "COSC580",
      name: "Algorithms in Machine Learning",
      prereq: [ "MTHS120", or("COSC110", "SCI410") ],
      mappings: [ 
        cbok.old.Data.level(3), cbok.old.Programming.level(2), cbok.old.ProblemSolving.level(2),
        swebok.Construction, swebok.MathFoundations,
        ccdsc.ML, ccdsc.PDA,
        edison.ML,
        edison.DM, // reinforcement learning
        edison.PA,
        edison.SMDA,
        edison.DSAPPD,      
        idverify.Project, idverify.TurnItIn
      ],
      tags: ["Advanced"],
    },

    {
      code: "Elective",
      name: "Non-ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [],
      other: []
    },

    {
      code: "Listed Group 1",
      name: "ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [],
      other: []
    },

    {
      code: "Listed Group 2",
      name: "Non-ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [],
      other: []
    },

    {
      code: "Listed",
      name: "Non-ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [],
      other: []
    },

    {
      code: "Listed 300-level COSC",
      name: "Advanced ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: ["Advanced"],
      other: []
    },

    {
      code: "Listed 500-level",
      name: "ICT/Non-ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [],
      other: []
    },

    {
      code: "Prescribed 300-level",
      name: "Advanced ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: ["Advanced"],
      other: []
    },

    {
      code: "Prescribed 500-level",
      name: "Advanced ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: ["Advanced"],
      other: []
    },

    {
      code: "Prescribed",
      name: "ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [],
      other: []
    },

    {
      code: "Listed",
      name: "Non-ICT Elective",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [],
      other: []
    },

    {
      code: "COSC130",
      name: "Fundamentals of Cybersecurity and Privacy",
      prereq: [],
      mappings: [ 
        cbok.old.Ethics.level(2), cbok.old.Cybersecurity.level(2), cbok.old.ProfExpectations.level(1), cbok.old.Understanding.level(1), cbok.old.Societal.level(2), cbok.old.Data.level(1), cbok.old.Governance.level(1), cbok.old.ServiceManagement.level(1),

        cbok.v3_2.Ethics.level(2), cbok.v3_2.Cybersecurity.level(2), cbok.v3_2.Practitioner.level(1), cbok.v3_2.Fundamentals.level(1), cbok.v3_2.Impacts.level(2), cbok.v3_2.Data.level(1), cbok.v3_2.Governance.level(1), cbok.v3_2.Depth.level(1),


        cybok.HORA, cybok.AD, cybok.SAPS, cybok.IS,

        swebok.ProfPractice, swebok.Quality,

        cs2023ai.Applications,

        
      ],  
      assessments: [
          proctoredExam("Final examination", 40, true)
      ]
    },

    {
      code: "COSC481",
      name: "Cryptography",
      prereq: ["AMTH140", "COSC230"],
      mappings: [
        cbok.old.Cybersecurity.level(3),
        cbok.old.Fundamentals.level(3),
        cbok.old.Data.level(3),
        cbok.old.Networking.level(3),

        cbok.v3_2.Cybersecurity.level(3),
        cbok.v3_2.Fundamentals.level(3),
        cbok.v3_2.Data.level(3),
        cbok.v3_2.Infrastructure.level(3),
        cbok.v3_2.Depth.level(3),  

        cybok.SS,


      ],
      tags: [ "Advanced" ],  
      assessments: [
          proctoredExam("Final examination", 40, true)
      ]
    },

    {
      code: "COSC482",
      name: "Ethical Hacking",
      prereq: ["COSC220", "COSC240"],
      mappings: [
        cbok.old.Cybersecurity.level(3),
        cbok.old.ServiceManagement.level(3),
        cbok.old.Systems.level(3),
        cbok.old.Governance.level(3),
        cbok.old.Networking.level(3),


        cbok.v3_2.Cybersecurity.level(3),
        cbok.v3_2.Governance.level(3),
        cbok.v3_2.Data.level(3),
        cbok.v3_2.Infrastructure.level(3),
        cbok.v3_2.Depth.level(3),  
        


        cybok.AD,  cybok.SAPS, cybok.IS,



      ],
      tags: [ "Advanced" ],  
      assessments: [
          proctoredExam("Final examination", 40, true)
      ]
    },

    {
      code: "COSC483",
      name: "Cybersecurity Risk and Project Management",
      prereq: ["COSC220", "COSC240", "COSC340"],
      mappings: [
        cbok.old.Cybersecurity.level(3),
        cbok.old.ProjectManagement.level(3),
        cbok.old.Governance.level(3),
        cbok.old.Systems.level(3),
        cbok.old.Societal.level(3),
        cbok.old.Ethics.level(3),
        cbok.old.Understanding.level(3),

        cbok.v3_2.Cybersecurity.level(3),
        cbok.v3_2.Governance.level(3),
        cbok.v3_2.Data.level(3),
        cbok.v3_2.Infrastructure.level(3),
        cbok.v3_2.Projects.level(3),
        cbok.v3_2.Practitioner.level(3),
        cbok.v3_2.Depth.level(3),  

        cybok.HORA, cybok.SAPS, cybok.IS, cybok.SS, 


      ],
      tags: [ "Advanced" ],  
      assessments: [
          proctoredExam("Final examination", 40, true)
      ]
    },
  
    {
      code: "COSC484",
      name: "Cloud Security",
      prereq: ["COSC220", "COSC240", "COSC340"],
      mappings: [
        cbok.old.Cybersecurity.level(3),
        cbok.old.ServiceManagement.level(3),

        cbok.v3_2.Cybersecurity.level(3),
        cbok.v3_2.Governance.level(3),
        cbok.v3_2.Infrastructure.level(3),
        cbok.v3_2.Depth.level(3),  

        cybok.HORA, cybok.IS, cybok.SAPS, cybok.SS,




        swebok.ConfigManagement, swebok.Maintenance, swebok.Quality, swebok.EngManagement



      ],
      tags: [ "Advanced" ],  
      assessments: [
          proctoredExam("Final examination", 40, true)
      ]
    },

    {
      code: "SCI310",
      name: "Digital Technology Survival Skills",
      prereq: [],
      cbok: [],
      swebok: [],
      sfia: [],
      dsbok: [],
      tags: [ ],
      other: []
    },

    {
      code: "COSC331",
      name: "Machine Learning with Big Data",
      prereq: [ or("COSC110", "COSC102"), "MTHS120", choose(1, "COSC210", "COSC220", "COSC250 ")],
      mappings: [
        cbok.old.Programming.level(3), cbok.old.Data.level(3), cbok.old.Networking.level(3), cbok.old.ProblemSolving.level(2), cbok.old.Fundamentals.level(2),

        cbok.v3_2.Computing.level(3), cbok.v3_2.Data.level(3), cbok.v3_2.Infrastructure.level(3), cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Depth.level(3),

        cs2023ai.MachineLearning, cs2023ai.FundamentalIssues, cs2023ai.FKRR, cs2023ai.Applications,


      ],
      tags: [ "Advanced" ],

    },

    {
      code: "COSC351",
      name: "Deep Learning",
      prereq: [ or("COSC102", "COSC110"), "MTHS120", choose(1, "COSC210", "COSC220", "COSC230", "COSC240")],
      mappings: [
        cbok.old.Programming.level(3), cbok.old.Data.level(3), cbok.old.Networking.level(3), cbok.old.ProblemSolving.level(2), cbok.old.Fundamentals.level(2),
        cbok.v3_2.Computing.level(3), cbok.v3_2.Data.level(3), cbok.v3_2.Infrastructure.level(3), cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Depth.level(3),

        cs2023ai.NLP, cs2023ai.Perception, cs2023ai.Probabilistic, cs2023ai.MachineLearning, cs2023ai.FKRR


      ],
      tags: [ "Advanced" ],  
      assessments: [
          proctoredExam("Open book final examination", 30, true)
      ]
    },


    {
      code: "COSC352",
      name: "Reinforcement Learning",
      prereq: [ ],
      mappings: [

        cbok.old.Programming.level(3), cbok.old.Data.level(3), cbok.old.ProblemSolving.level(2), cbok.old.Fundamentals.level(2),
        cbok.v3_2.Computing.level(3), cbok.v3_2.Data.level(3), cbok.v3_2.Fundamentals.level(2), cbok.v3_2.Depth.level(3),

        cs2023ai.FundamentalIssues, cs2023ai.Probabilistic, cs2023ai.MachineLearning, cs2023ai.FKRR


      ],
      tags: [ "Advanced" ],
      other: []
    },

  ])