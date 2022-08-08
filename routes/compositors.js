var compositors = [
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
        "firstName": "Frédéric",
        "lastName": "Chopin",
        "title": "Polish composer",
        "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouXyI65VlECFw3Pj40Q9x_dxQyjmlXR6IwYg4NzHC&s",
        "dateOfBirth": "1810",
        "story": "shopin love bamba"
    },

];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(compositors.filter(function (compositor) {
            return (compositor.firstName + ' ' + compositor.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(compositors);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(compositors[id]);
};