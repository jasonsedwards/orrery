const planets = {
    //       [Name,         size,  dist sol,  orbit,  x coord, y coord, radius, sAngle, eAngle, colour]
    sun:     ["Sun",        15,    0,         0,      375,     375,     30,     0,      2,      "yellow"],
    mercury: ["Mercury",    1,     2,         88,     340,     340,     6,      0,      2,      "silver"],
    venus:   ["Venus",      2,     4,         225,    320,     320,     8,      0,      2,      "purple"],
    earth:   ["Earth",      2.5,   6,         365,    300,     300,     10,     0,      2,      "green" ],
    mars:    ["Mars",       1.25,  8,         687,    280,     280,     5,      0,      2,      "red"],
    jupiter: ["Jupiter",    27.5,  10,        4331,   250,     250,     20,     0,      2,      "orange"],
    saturn:  ["Saturn",     24.75, 12,        10747,  220,     220,     18,     0,      2,      "moccasin"],
    uranus:  ["Uranus"],
    neptune: ["Neptune"]
};

const properties = {
    canvasName: "orrery",
    canvasContext: "2d"
};