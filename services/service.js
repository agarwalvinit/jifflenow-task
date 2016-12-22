let services = {
    fetchAllData: function(bsURL){
        return fetch(bsURL,  {
            method: 'GET',
        })
            .then(function (response) {
                return response.json().then(function (data){
                    return data;
                })
            }).catch(function (error) {
                console.log('Request failed', error);
            });
    },
};


module.exports = services;
