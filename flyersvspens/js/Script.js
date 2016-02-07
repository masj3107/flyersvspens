$(document).ready(function(){
    console.log("Document ready.");
    
    $.support.cors = true;
    $.ajax({
        type : 'GET',
        dataType : 'jsonp',
        url: '../testdata.jsonp',
        success : function(data) {
            console.log(data); 
        } 
    });

});