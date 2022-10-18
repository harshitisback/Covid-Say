
$.ajax({
    type: "get",
    url: "https://api.covid19api.com/summary",
    
    success: function (response) {
        
        for(var i=0; i<response.Countries.length; i++){
            console.log(response.Countries[i].Country);
            var tablerow = `<tr> <td>${response.Countries[i].Country}</td> <td>${response.Countries[i].TotalConfirmed}</td> <td>${response.Countries[i].NewConfirmed}</td> <td>${response.Countries[i].TotalRecovered}</td> <td>${response.Countries[i].TotalDeaths}</td></tr>`
            // `` --> this is backticks this is helpful while using any js code 
           
            $('#tbody').append(tablerow);
        }

        $('#covidtable').DataTable();
        
    },
    error: function(err){
        console.log(err);
    }
});

