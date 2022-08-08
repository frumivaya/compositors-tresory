compositorService = (function () {

    var baseURL = "";

    // The public API
    return {
        findById: function(id) {
            return $.ajax(baseURL + "/compositors/" + id);
        },
        findByName: function(searchKey) {
            return $.ajax({url: baseURL + "/compositors", data: {name: searchKey}});
        }
    };

}());