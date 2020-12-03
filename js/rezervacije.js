
var termini;

var commentsMap = new Map();

var pilatesClassic = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var pilatesStott = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var pilatesReformer = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


var coreCrossfit = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var coreGluteCore = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var coreBadAss = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


var jogaHatHa = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var jogaIyengar = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var jogaVinyasa = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


var cardioRowing = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var cardioCycling = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];
var cardioRunning = [["Odlican trening.", 5, "Moma", false], ["Super ekipa!", 4,"Nidza", false]];


commentsMap.set('pilatesClassic', pilatesClassic);
commentsMap.set('pilatesStott', pilatesStott);
commentsMap.set('pilatesReformer', pilatesReformer);


commentsMap.set('coreCrossfit', coreCrossfit);
commentsMap.set('coreGluteCore', coreGluteCore);
commentsMap.set('coreBadAss', coreBadAss);


commentsMap.set('jogaHatHa', jogaHatHa);
commentsMap.set('jogaIyengar', jogaIyengar);
commentsMap.set('jogaVinyasa', jogaVinyasa);


commentsMap.set('cardioRowing', cardioRowing);
commentsMap.set('cardioCycling', cardioCycling);
commentsMap.set('cardioRunning', cardioRunning);

var names  = ["Moma", "Nidza", "Coa", "Mina", "Vuk", "Tijana", "Marija", "Veske", "Dule", "Adrijan", "Jelica", "Drazen"];

var termin1 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 4,
    day:"Monday",
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["Veske", "Moma", "Marija", "Adrijan"],
    last: ["Veske", "Moma", "Marija", "Adrijan"]
    };
var termin2 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 10,
    day:"Monday",
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["Mina", "Drazen", "Veske", "Tijana", "Moma", "Marija", "Nidza", "Jelica", "Dule", "Adrijan"],
    last: ["Mina", "Drazen", "Veske", "Tijana", "Moma", "Marija", "Nidza", "Jelica", "Dule", "Adrijan"]
    };
var termin3 = {
    naziv: "Cardio",
    vrsta: "Rowing",
    nivo: "lvl 5", 
    max: 10,
    current: 2,
    day:"Monday",
    startTime: 16,
    startAndFinishTime: "16:00 - 17:00",
    duration: 1,
    subs: ["Dule", "Adrijan", "Drazen", "Vuk", "Tijana", "Moma", "Jelica", "Coa", "Nidza"],
    last: ["Dule", "Adrijan", "Drazen", "Vuk", "Tijana", "Moma", "Jelica", "Coa", "Nidza"]
    };
var termin4 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 9,
    day:"Monday",
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["Nidza", "Vuk", "Tijana"],
    last: ["Nidza", "Vuk", "Tijana"]

    };
var termin5 = {
    naziv: "Core",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Monday",
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["Coa", "Tijana", "Vuk", "Mina", "Dule", "Moma", "Adrijan", "Jelica", "Veske", "Nidza"],
    last: ["Coa", "Tijana", "Vuk", "Mina", "Dule", "Moma", "Adrijan", "Jelica", "Veske", "Nidza"]
    };
var termin6 = {
    naziv: "Cardio",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Monday",
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["Vuk", "Marija", "Mina"],
    last: ["Vuk", "Marija", "Mina"]

    };

    ///////UTORAK
var termin7 = {
    naziv: "Yoga",
    vrsta: "Iyengar",
    nivo: "lvl 2", 
    max: 10,
    current: 10,
    day:"Tuesday",
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["Marija", "Veske", "Vuk"],
    last: ["Marija", "Veske", "Vuk"]
    };
var termin8 = {
    naziv: "Pilates",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    day:"Tuesday",
    startTime: 11,
    startAndFinishTime: "11:00 - 12:00",
    duration: 1,
    subs: ["Coa", "Moma", "Nidza"],
    last: ["Coa", "Moma", "Nidza"]
    };
var termin9 = {
    naziv: "Pilates",
    vrsta: "Stoti",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    day:"Tuesday",
    startTime: 14,
    startAndFinishTime: "14:00 - 15:00",
    duration: 1,
    subs: ["Marija", "Vuk", "Nidza"],
    last: ["Marija", "Vuk", "Nidza"]
    };
var termin10 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 9,
    day:"Tuesday",
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["Dule", "Drazen", "Coa", "Jelica", "Veske", "Vuk", "Tijana", "Nidza", "Mina"],
    last: ["Dule", "Drazen", "Coa", "Jelica", "Veske", "Vuk", "Tijana", "Nidza", "Mina"]
    };
var termin11 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Tuesday",
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["Tijana", "Coa", "Marija"],
    last: ["Tijana", "Coa", "Marija"]
    };
var termin12 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Tuesday",
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["Adrijan", "Vuk", "Jelica"],
    last: ["Adrijan", "Vuk", "Jelica"]
    };
/////SREDA///////
var termin13 = {
    naziv: "Pilates",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 10,
    day:"Wensday",
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["Veske", "Dule", "Marija", "Nidza", "Vuk", "Jelica", "Drazen", "Adrijan", "Coa", "Tijana"],
    last: ["Veske", "Dule", "Marija", "Nidza", "Vuk", "Jelica", "Drazen", "Adrijan", "Coa", "Tijana"]
    };
var termin14 = {
    naziv: "Yoga",
    vrsta: "Vinyasa",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    day:"Wensday",
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["Adrijan", "Coa", "Tijana"],
    last: ["Adrijan", "Coa", "Tijana"]
    };
var termin15 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 4,
    day:"Wensday",
    startTime: 13,
    startAndFinishTime: "13:00 - 14:00",
    duration: 1,
    subs: ["Drazen", "Veske", "Dule", "Mina"],
    last: ["Drazen", "Veske", "Dule", "Mina"]
    };
var termin16 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 6,
    day:"Wensday",
    startTime: 15,
    startAndFinishTime: "15:00 - 16:00",
    duration: 1,
    subs: ["Coa", "Jelica", "Vuk", "Dule", "Veske", "Moma"],
    last: ["Coa", "Jelica", "Vuk", "Dule", "Veske", "Moma"]
    };
var termin17 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Wensday",
    startTime: 18,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["Nidza", "Drazen", "Dule"],
    last: ["Nidza", "Drazen", "Dule"]
    };
var termin18 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 10,
    day:"Wensday",
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: ["Vuk", "Veske", "Coa", "Marija", "Dule", "Jelica", "Tijana", "Adrijan", "Mina", "Nidza"],
    last: ["Vuk", "Veske", "Coa", "Marija", "Dule", "Jelica", "Tijana", "Adrijan", "Mina", "Nidza"]
    };
var termin19 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 8,
    day:"Wensday",
    startTime: 20,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen",  "Tijana"],
    last: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen",  "Tijana"]
    };
var termin20 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Wensday",
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["Tijana", "Vuk", "Dule"],
    last: ["Tijana", "Vuk", "Dule"]
    };  
    /////CETVRTAK/////      
var termin21 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 4,
    day:"Thursday",
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["Adrijan", "Dule", "Drazen", "Marija"],
    last: ["Adrijan", "Dule", "Drazen", "Marija"]
    };
var termin22 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 7,
    day:"Thursday",
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen"],
    last: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen"]
    };
var termin23 = {
    naziv: "Cardio",
    vrsta: "Running",
    nivo: "lvl 5", 
    max: 10,
    current: 10,
    day:"Thursday",
    startTime: 16,
    startAndFinishTime: "16:00 - 17:00",
    duration: 1,
    subs: ["Veske", "Dule", "Marija", "Nidza", "Vuk", "Jelica", "Drazen", "Adrijan", "Coa", "Tijana"],
    last: ["Veske", "Dule", "Marija", "Nidza", "Vuk", "Jelica", "Drazen", "Adrijan", "Coa", "Tijana"]
    };
var termin24 = {
    naziv: "Core",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 9,
    day:"Thursday",
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: [""]
    };
var termin25 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Thursday",
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["Adrijan", "Coa", "Tijana"],
    last: ["Adrijan", "Coa", "Tijana"]
    };
var termin26 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Thursday",
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["Nidza", "Drazen", "Dule"],
    last: ["Nidza", "Drazen", "Dule"]
    };   
    /////////PETAK//////
var termin27 = {
    naziv: "Yoga",
    vrsta: "Iyengar",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    day:"Friday",
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["Nidza", "Drazen", "Dule"],
    last: ["Nidza", "Drazen", "Dule"]
    };
var termin28 = {
    naziv: "Yoga",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    day:"Friday",
    startTime: 11,
    startAndFinishTime: "11:00 - 12:00",
    duration: 1,
    subs:["Marija", "Veske", "Dule"],
    last:["Marija", "Veske", "Dule"]
    };
var termin29 = {
    naziv: "Pilates",
    vrsta: "Stoti",
    nivo: "lvl 2", 
    max: 10,
    current: 10,
    day:"Friday",
    startTime: 14,
    startAndFinishTime: "14:00 - 15:00",
    duration: 1,
    subs:["Vuk", "Dule", "Nidza", "Moma", "Drazen", "Jelica", "Veske", "Tijana", "Adrijan", "Marija"],
    last:["Vuk", "Dule", "Nidza", "Moma", "Drazen", "Jelica", "Veske", "Tijana", "Adrijan", "Marija"]
    };
var termin30 = {
    naziv: "Core",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 9,
    day:"Friday",
    startTime: 17,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs:  ["Adrijan", "Moma", "Vuk", "Drazen", "Marija", "Coa", "Mina", "Jelica", "Tijana"],
    last:  ["Adrijan", "Moma", "Vuk", "Drazen", "Marija", "Coa", "Mina", "Jelica", "Tijana"]
    };
var termin31 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Friday",
    startTime: 19,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["Mina", "Nidza", "Vuk"],
    last: ["Mina", "Nidza", "Vuk"]
    };
var termin32 = {
    naziv: "Cardio",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 3,
    day:"Friday",
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs:["Drazen", "Adrijan", "Veske"],
    last:["Drazen", "Adrijan", "Veske"]
    }; 

///////SUBOTA////////
var termin33 = {
    naziv: "Pilates",
    vrsta: "Reformer",
    nivo: "lvl 2", 
    max: 10,
    current: 6,
    day:"Saturday",
    startTime: 10,
    startAndFinishTime: "10:00 - 11:00",
    duration: 1,
    subs: ["Mina", "Nidza", "Moma", "Jelica", "Vuk", "Marija"],
    last: ["Mina", "Nidza", "Moma", "Jelica", "Vuk", "Marija"]
    };
var termin34 = {
    naziv: "Yoga",
    vrsta: "Vinyasa",
    nivo: "lvl 2", 
    max: 10,
    current: 3,
    day:"Saturday",
    startTime: 12,
    startAndFinishTime: "12:00 - 13:00",
    duration: 1,
    subs: ["Marija", "Veske", "Vuk"],
    last: ["Marija", "Veske", "Vuk"]
    };
var termin35 = {
    naziv: "Yoga",
    vrsta: "Hat-ha",
    nivo: "lvl 1", 
    max: 10,
    current: 10,
    day:"Saturday",
    startTime: 13,
    startAndFinishTime: "13:00 - 14:00",
    duration: 1,
    subs: ["Coa", "Tijana", "Vuk", "Mina", "Dule", "Moma", "Adrijan", "Jelica", "Veske", "Nidza"],
    last: ["Coa", "Tijana", "Vuk", "Mina", "Dule", "Moma", "Adrijan", "Jelica", "Veske", "Nidza"]
    };
var termin36 = {
    naziv: "Pilates",
    vrsta: "Classic",
    nivo: "lvl 1", 
    max: 10,
    current: 6,
    day:"Saturday",
    startTime: 15,
    startAndFinishTime: "15:00 - 16:00",
    duration: 1,
    subs: ["Moma", "Drazen", "Vuk", "Coa", "Nidza", "Dule"],
    last: ["Moma", "Drazen", "Vuk", "Coa", "Nidza", "Dule"]
    };
var termin37 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 10,
    day:"Saturday",
    startTime: 18,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["Coa", "Marija", "Vuk", "Moma", "Mina", "Jelica", "Drazen", "Tijana", "Adrijan", "Nidza"],
    last: ["Coa", "Marija", "Vuk", "Moma", "Mina", "Jelica", "Drazen", "Tijana", "Adrijan", "Nidza"]
    };
var termin38 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 7,
    day:"Saturday",
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen"],
    last: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen"]
    };
var termin39 = {
    naziv: "Core",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 10,
    day:"Saturday",
    startTime: 20,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["Coa", "Marija", "Vuk", "Moma", "Mina", "Jelica", "Drazen", "Tijana", "Adrijan", "Nidza"],
    last: ["Coa", "Marija", "Vuk", "Moma", "Mina", "Jelica", "Drazen", "Tijana", "Adrijan", "Nidza"]
    };
var termin40 = {
    naziv: "Cardio",
    vrsta: "GluteCore",
    nivo: "lvl 4", 
    max: 10,
    current: 3,
    day:"Saturday",
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs: ["Nidza", "Drazen", "Dule"],
    last: ["Nidza", "Drazen", "Dule"]
    };  
//////NEDELJA//////
var termin41 = {
    naziv: "Cardio",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Sunday",
    startTime: 18,
    startAndFinishTime: "18:00 - 19:00",
    duration: 1,
    subs: ["Marija", "Veske", "Vuk"],
    last: ["Marija", "Veske", "Vuk"]
    };
var termin42 = {
    naziv: "Core",
    vrsta: "BadAss",
    nivo: "lvl 4", 
    max: 10,
    current: 7,
    day:"Sunday",
    startTime: 19,
    startAndFinishTime: "19:00 - 20:00",
    duration: 1,
    subs: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen"],
    last: ["Marija", "Veske", "Nidza", "Mina", "Jelica", "Moma", "Drazen"]
    };
var termin43 = {
    naziv: "Core",
    vrsta: "Cycling",
    nivo: "lvl 5", 
    max: 10,
    current: 10,
    day:"Sunday",
    startTime: 20,
    startAndFinishTime: "20:00 - 21:00",
    duration: 1,
    subs: ["Coa", "Tijana", "Vuk", "Mina", "Dule", "Moma", "Adrijan", "Jelica", "Veske", "Nidza"],
    last: ["Coa", "Tijana", "Vuk", "Mina", "Dule", "Moma", "Adrijan", "Jelica", "Veske", "Nidza"]
    };
var termin44 = {
    naziv: "Cardio",
    vrsta: "Crossfit",
    nivo: "lvl 5", 
    max: 10,
    current: 3,
    day:"Sunday",
    startTime: 21,
    startAndFinishTime: "21:00 - 22:00",
    duration: 1,
    subs:  ["Nidza", "Vuk", "Tijana"],
    last:  ["Nidza", "Vuk", "Tijana"]
    };  
var termini= [termin1, termin2, termin3, termin4, termin5,
            termin7, termin8, termin9, termin11, termin12,
            termin13, termin14, termin15,termin16,termin17,termin18,termin20,
            termin21, termin21, termin21, termin24, termin25, termin26,
            termin27, termin28, termin29, termin30, termin31, 
            termin33, termin34, termin35,termin36,termin37,termin38,termin39,termin40,
            termin41,termin42,termin43,termin44
            ];
var terminiIndexi = [
                    1, 21, 61, 91, 101, 
                    2, 12, 72, 102, 112,
                    3, 23, 33, 53, 83, 93, 113,
                    4, 24, 64, 94, 104, 114,
                    5, 15, 75, 95, 105,
                    6, 26, 36, 56, 86, 96, 106, 116,
                    87, 97,107,117
                    ];

//poziva se na onload index body
function insertClasses(){
    //upisuje sve termine u raspored
    for (let index = 0; index < terminiIndexi.length; index++) {
        let id = "[id='" + terminiIndexi[index] + "']";
        let a = document.querySelector(id).children;
        a[0].innerHTML = termini[index].naziv;
        a[1].innerHTML = termini[index].vrsta;
        if(termini[index].max>termini[index].current){
            a[2].classList.remove('hide');
            a[2].classList.add('show');
        }
    }
    
    localStorage.setItem("username", "Coa");
    
    if(JSON.parse(localStorage.getItem("termini")) == null){
        localStorage.setItem("termini", JSON.stringify(termini));
    }
    else{
        termini = Array.from(JSON.parse(localStorage.getItem("termini")));
    }


    if(JSON.parse(localStorage.getItem("commentsMap")) == null){
        localStorage.setItem("commentsMap", JSON.stringify(Array.from(commentsMap.entries())));
    }
    else{
        commentsMap = new Map(JSON.parse(localStorage.getItem("commentsMap")));

    }
    //console.log(termini);
    //console.log(commentsMap);
    

    for (let index = 0; index < termini.length; index++) {
       // console.log(termini[index].subs.length ==  termini[index].current);
    }

}

function makeReservation(param){
    loadLocalStorage();
   //console.log(param.closest("td").id);
    let id = param.closest("td").id;
    let index = findIndex(id);

    //console.log(termini[index]);
    //console.log(termini[index].current);
   // console.log(termini[index].max);

    if(termini[index].current == termini[index].max){
        Swal.fire("Zao nam je ovaj termin je popunjen.")
        return;
    }

    for (let i = 0; i < termini[index].subs.length; i++) {
        if(termini[index].subs[i] == localStorage.getItem("username")){
            Swal.fire("Vec ste se prijavili za ovaj termin.");
            return;
        }
    }
    termini[index].current++;
    termini[index].subs.push(localStorage.getItem("username"));
    Swal.fire("Dodati ste u ovaj termin.");
    //console.log(termini[index].subs);
    saveLocalStorage();
}
function findIndex(id){
    for (let index = 0; index < terminiIndexi.length; index++) {
        if(terminiIndexi[index] == id ){
            return index;
        }       
    }
}
/*
OVO SU TI ARGUMENTI KAD BUDES POZIVAO funkciju getLvl

Hat-ha
Classic
Rowing
GluteCore
Cycling
Crossfit
Iyengar
Reformer
Stoti
Vinyasa
BadAss
Running
*/

//dodavanje komentara vrsta-komentar-kocena
function addComment(arg, str, ocena){
    loadLocalStorage();
    if(ocena == ""){
        Swal.fire('Niste uneli ocenu.');
        return;
    }
    let nazivTrening = "";
    switch(arg) {
        case 'pilatesClassic':
             nazivTrening = 'Classic';
            break;
        case 'pilatesStott':
            nazivTrening = 'Stoti';
            break;
        case 'pilatesReformer':
            nazivTrening = 'Reformer';
            break;
        case 'coreCrossfit':
            nazivTrening = 'Crossfit';
            break;
        case 'coreGluteCore':
            nazivTrening = 'GluteCore';
            break;
        case 'coreBadAss':
            nazivTrening = 'BadAss';
            break;
        case 'jogaHatHa':
            nazivTrening = 'Hat-ha';
            break;
        case 'jogaIyengar':
            nazivTrening = 'Iyengar';
            break;
        case 'jogaVinyasa':
            nazivTrening = 'Vinyasa';
            break;
        case 'cardioRowing':
            nazivTrening = 'Rowing';
            break;
        case 'cardioCycling':
            nazivTrening = 'Cycling';
            break;
        case 'cardioRunning':
            nazivTrening = 'Running';
            break;
        default:
          // code block
      }
    let bio = false;
    //console.log(nazivTrening);
    for (let i = 0; i < termini.length; i++) {
        if(termini[i].vrsta == nazivTrening){
            for (let j = 0; j < termini[i].last.length; j++) {
                if(termini[i].last[j] == localStorage.getItem("username")){
                    bio  = true;
                }
                
            }
        }
    }
    if(!bio){
        Swal.fire('Niste bili na ovom treningu.');
        saveLocalStorage();
        return;
    }
    commentsMap.get(arg).push([str,ocena,localStorage.getItem("username"), false]);
    saveLocalStorage();
}
//prikazivanje ostalih komentara
function showContent(id, trening) {
    loadLocalStorage();
    for (let i = 1; i < commentsMap.get(trening).length ;i++) {
        if(commentsMap.get(trening)[i][3] == false){
            var temp = document.getElementsByTagName("template")[0];
            var clon = temp.content.cloneNode(true);
            clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get(trening)[i][2];
            clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get(trening)[i][0]; 
            commentsMap.get(trening)[i][3] = true;
            
            document.getElementById(id).appendChild(clon);
        }
    }
    saveLocalStorage();
}

//onload za jogu
function showInitialCommentsJoga(){
    loadLocalStorage();

    for (let i = 0; i < commentsMap.get('jogaIyengar').length; i++) {
        commentsMap.get('jogaIyengar')[i][3] = false;     
    }

    //stavi prvi komentar za iyengarJoga
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('jogaIyengar')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('jogaIyengar')[0][0]; 
    commentsMap.get('jogaIyengar')[0][3] = true;
    document.getElementById('CommentSectionjogaIyengar').appendChild(clon);

    for (let i = 0; i < commentsMap.get('jogaHatHa').length; i++) {
        commentsMap.get('jogaHatHa')[i][3] = false;     
    }
    //stavi prvi komentar za jogaHatHa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('jogaHatHa')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('jogaHatHa')[0][0]; 
    commentsMap.get('jogaHatHa')[0][3] = true;
    document.getElementById('CommentSectionjogaHatHa').appendChild(clon);

    for (let i = 0; i < commentsMap.get('jogaVinyasa').length; i++) {
        commentsMap.get('jogaVinyasa')[i][3] = false;     
    }
    //stavi prvi komentar za jogaVinyasa
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('jogaVinyasa')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('jogaVinyasa')[0][0]; 
    commentsMap.get('jogaVinyasa')[0][3] = true;
    document.getElementById('CommentSectionjogaVinyasa').appendChild(clon);
    saveLocalStorage();
}

//onload za cardio
function showInitialCommentsCardio(){
    loadLocalStorage();


    //stavi prvi komentar za cardioRowing
    for (let i = 0; i < commentsMap.get('cardioRowing').length; i++) {
        commentsMap.get('cardioRowing')[i][3] = false;     
    }

    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('cardioRowing')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('cardioRowing')[0][0]; 
    commentsMap.get('cardioRowing')[0][3] = true;
    document.getElementById('CommentSectioncardioRowing').appendChild(clon);


    //stavi prvi komentar za cardioCycling
    for (let i = 0; i < commentsMap.get('cardioCycling').length; i++) {
        commentsMap.get('cardioCycling')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('cardioCycling')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('cardioCycling')[0][0]; 
    commentsMap.get('cardioCycling')[0][3] = true;
    document.getElementById('CommentSectioncardioCycling').appendChild(clon);

    //stavi prvi komentar za cardioRunning
    for (let i = 0; i < commentsMap.get('cardioRunning').length; i++) {
        commentsMap.get('cardioRunning')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('cardioRunning')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('cardioRunning')[0][0]; 
    commentsMap.get('cardioRunning')[0][3] = true;
    document.getElementById('CommentSectioncardioRunning').appendChild(clon);
    saveLocalStorage();
}

//onload za core
function showInitialCommentsCore(){
    loadLocalStorage();

    //stavi prvi komentar za coreCrossfit
    for (let i = 0; i < commentsMap.get('coreCrossfit').length; i++) {
        commentsMap.get('coreCrossfit')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('coreCrossfit')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('coreCrossfit')[0][0]; 
    commentsMap.get('coreCrossfit')[0][3] = true;
    document.getElementById('CommentSectioncoreCrossfit').appendChild(clon);

    //stavi prvi komentar za coreGluteCore
    for (let i = 0; i < commentsMap.get('coreGluteCore').length; i++) {
        commentsMap.get('coreGluteCore')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('coreGluteCore')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('coreGluteCore')[0][0]; 
    commentsMap.get('coreGluteCore')[0][3] = true;
    document.getElementById('CommentSectioncoreGluteCore').appendChild(clon);

    //stavi prvi komentar za coreBadAss
    for (let i = 0; i < commentsMap.get('coreBadAss').length; i++) {
        commentsMap.get('coreBadAss')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('coreBadAss')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('coreBadAss')[0][0]; 
    commentsMap.get('coreBadAss')[0][3] = true;
    document.getElementById('CommentSectioncoreBadAss').appendChild(clon);
    saveLocalStorage();
}

//onload za pilates
function showInitialCommentsPilates(){
    loadLocalStorage();
    //stavi prvi komentar za pilatesClassic
    for (let i = 0; i < commentsMap.get('pilatesClassic').length; i++) {
        commentsMap.get('pilatesClassic')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('pilatesClassic')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('pilatesClassic')[0][0]; 
    commentsMap.get('pilatesClassic')[0][3] = true;
    document.getElementById('CommentSectionpilatesClassic').appendChild(clon);

    //stavi prvi komentar za pilatesStott
    for (let i = 0; i < commentsMap.get('pilatesStott').length; i++) {
        commentsMap.get('pilatesStott')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('pilatesStott')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('pilatesStott')[0][0]; 
    commentsMap.get('pilatesStott')[0][3] = true;
    document.getElementById('CommentSectionpilatesStott').appendChild(clon);

    //stavi prvi komentar za pilatesReformer
    for (let i = 0; i < commentsMap.get('pilatesReformer').length; i++) {
        commentsMap.get('pilatesReformer')[i][3] = false;     
    }
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.children[0].children[0].children[0].children[0].innerHTML = commentsMap.get('pilatesReformer')[0][2];
    clon.children[0].children[0].children[0].children[1].innerHTML = commentsMap.get('pilatesReformer')[0][0]; 
    commentsMap.get('pilatesReformer')[0][3] = true;
    document.getElementById('CommentSectionpilatesReformer').appendChild(clon);
    saveLocalStorage();
}

function calculateAvgRaiting(id,idField){
    loadLocalStorage();
    var ret = 0;
    console.log(commentsMap.get(id));
    for (let i = 0; i < commentsMap.get(id).length; i++) {
            ret+= parseInt(commentsMap.get(id)[i][1]);      
    }
    console.log(ret);
    document.getElementById(idField).innerHTML = (ret/commentsMap.get(id).length).toFixed(1);
}

/*
OVO SU TI ARGUMENTI KAD BUDES POZIVAO funkciju getLvl

Hat-ha
Classic
Rowing
GluteCore
Cycling
Crossfit
Iyengar
Reformer
Stoti
Vinyasa
BadAss
Running
*/

function getLvl(id){
    loadLocalStorage();
    for (let i = 0; i < termini.length; i++) {
        if(termini[i].vrsta === id){
            return "" + termini[i].nivo;
        }
    }
    saveLocalStorage();
}

function insertMyReservations(){
    loadLocalStorage();
    //upisuje sve moje termine u raspored
    for (let index = 0; index < terminiIndexi.length; index++) {
        let id = "[id='"+"my_profile" + terminiIndexi[index] + "']";
        let a = document.querySelector(id).children;
        a[0].innerHTML = termini[index].naziv;
        a[1].innerHTML = termini[index].vrsta;
        var reserved = false;
        //console.log(termini[index].subs );
        for (let i = 0; i < termini[index].subs.length; i++) {
           
            if(termini[index].subs[i] == localStorage.getItem("username")){
                reserved = true;
                //console.log('true');
            }    
        }
        if(reserved){
            a[2].classList.remove('hide');
            a[2].classList.add('show');
        }else{
            a[0].style.visibility="hidden";
            a[1].style.visibility="hidden";
        }
    }
    saveLocalStorage();
}
function quitReservation(id){
    loadLocalStorage();

    let td = id.closest("td").id;
    let index = "[id='"+ td + "']";
    let a = document.querySelector(index).children;

    //provera da li moze da odustane
    //nedelja - 0
    //ponedeljak subota - 6

    var r = /\d+/;
    let param = findIndex((td.match(r)));
    //console.log (termini[param]);
    var today = new Date();
    
    let danasnjiDan = today.getDay();
    //console.log(danasnjiDan);
    if(danasnjiDan == 0){
        danasnjiDan = 7;
    }
   
    //console.log(today.getDay());
    let danTreninga = -1;
    switch(termini[param].day) {
        case 'Monday':
            danTreninga = 1;
            break;
        case 'Tuesday':
            danTreninga = 2;
            break;
        case 'Wensday':
            danTreninga = 3;
            break;
        case 'Thursday':
            danTreninga = 4;
            break;
        case 'Friday':
            danTreninga = 5;
            break;
        case 'Saturday':
            danTreninga = 6;
            break;
        case 'Sunday':
            danTreninga = 7;
            break;
        default:
          // code block
      }
      //console.log(danTreninga);
      //console.log(danasnjiDan);
      //console.log(termini[param].startTime);
      //console.log(today.getHours()-1);
      //console.log(today.getMinutes());

      if(danasnjiDan == danTreninga && (termini[param].startTime == (today.getHours()+1)) && today.getMinutes()>30){
        Swal.fire('Ovaj termin nije moguce otkazati zato sto krece za manje od 30 min.');
        return;
        
      }
    //console.log(a);
    //a[2].remove();
    a[0].style.visibility="hidden";
    a[1].style.visibility="hidden";
    a[2].style.visibility="hidden";
    a[1].style.visibility="hidden";
    a[0].style.visibility="hidden";
        


    //console.log(termini[param].subs);
    termini[param].current--;
    let temp = termini[param].subs.indexOf(localStorage.getItem("username"));
    termini[param].subs.splice(temp, 1);
    Swal.fire('Izbaceni ste iz ovog termina.');
    //console.log(termini[param].subs);
    saveLocalStorage();
}
function loadLocalStorage(){
    termini = Array.from(JSON.parse(localStorage.getItem("termini")));
    commentsMap = new Map(JSON.parse(localStorage.getItem("commentsMap")));
}
function saveLocalStorage(){
    localStorage.setItem("termini", JSON.stringify(termini));
    localStorage.setItem("commentsMap", JSON.stringify(Array.from(commentsMap.entries())));

}