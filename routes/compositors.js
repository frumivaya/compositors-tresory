// this data was in sql here for speeding the development
const compositors = [
    {
        "id": 0,
        "firstName": "Frédéric",
        "lastName": "Chopin",
        "title": "Polish composer",
        "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouXyI65VlECFw3Pj40Q9x_dxQyjmlXR6IwYg4NzHC&s",
        "dateOfBirth": "1810",
        "dateOfDeath": "1880",
        "story": "shopin love bamba he was going to the makolet here good song and say why i will not write my self a song,then papa dafak alav trahot amar lo ma nira leha ya frenk homo sexual"
    }, {
        "id": 1,
        "firstName": "Franz Peter",
        "lastName": "Schubert",
        "title": "Polish composer",
        "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouXyI65VlECFw3Pj40Q9x_dxQyjmlXR6IwYg4NzHC&s",
        "dateOfBirth": "1810",
        "story": "shopin love bamba"
    },
    {
        "id": 2,
        "firstName": "Robert Alexander",
        "lastName": "SchÏumann",
        "title": "מלחין גרמני",
        "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Portrait_of_Robert_Schumann.jpg/300px-Portrait_of_Robert_Schumann.jpg",
        "dateOfBirth": "1810",
        "story": "shopin love bamba"
    },
    {
        "id": 3,
        "firstName": "Jakob Ludwig Felix",
        "lastName": "MendelsÏsohn",
        "title": "Polish composer",
        "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouXyI65VlECFw3Pj40Q9x_dxQyjmlXR6IwYg4NzHC&s",
        "dateOfBirth": "1810",
        "story": "shopin love bamba"
    },
    {
        "id": 4,
        "firstName": "Jacques",
        "lastName": "Offenbach",
        "title": "Polish composer",
        "pic": "https://jewish-music.huji.ac.il/sites/default/files/biographie/Offencolor.jpg",
        "dateOfBirth": "1810",
        "story": "shopin love bamba"
    },
    
];

exports.findAll = function (req, res, next) {
    const name = req.query.name;
    if (name) {
        res.send(compositors.filter(function (compositor) {
            const compositorSearchabaleCharcater = (compositor.firstName + ' ' + compositor.lastName + ' '+ compositor.story);
            return compositorSearchabaleCharcater.toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(compositors);
    }
};

exports.findById = function (req, res, next) {
    const id = req.params.id;
    res.send(compositors[id]);
};