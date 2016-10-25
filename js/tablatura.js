var Braco = {

    corda1: document.getElementById("corda1"),
    corda2: document.getElementById("corda2"),
    corda3: document.getElementById("corda3"),
    corda4: document.getElementById("corda4"),
    corda5: document.getElementById("corda5"),
    corda6: document.getElementById("corda6")

};

var Tablatura = {

    corda1: [
        {
            tempo: 2,
            casa: 2
        },
        {
            tempo: 5,
            casa: 4
        }
    ],

    corda2: [
        {
            tempo: 2,
            casa: 6
        },
        {
            tempo: 8,
            casa: 12
        }
    ],

    corda3: [
        {
            tempo: 2,
            casa: 2
        },
        {
            tempo: 3,
            casa: 8
        }
    ],

    corda4: [
        {
            tempo: 2,
            casa: 2
        },
        {
            tempo: 7,
            casa: 4
        }
    ],

    corda5: [
        {
            tempo: 2,
            casa: 2
        },
        {
            tempo: 5,
            casa: 2
        }
    ],

    corda6: [
        {
            tempo: 2,
            casa: 2
        },
        {
            tempo: 4,
            casa: 2
        }
    ]

};

(function () {
    console.log("xd");
}());

function createBraco (corda, tempo) {
    var corda = Braco[corda];
}