// //initialize function called when the script loads
// function initialize(){
//     cities();
//     addEvents();
//     callback();
// };

// //call the initialize function when the document has loaded
// $(document).ready(initialize);


// //function to create a table with cities and their populations
// function cities(){
//     //define two arrays for cities and population
//   var cityPop = [
//         { 
//             city: 'Boston',
//             population: 655884
//         },
//         {
//             city: 'New York City',
//             population: 8491079
//         },
//         {
//             city: 'Austin',
//             population: 912791
//         },
//         {
//             city: 'San Francisco',
//             population: 852969
//         }
//     ];

//     //append the table element to the div
//     $("#myDiv").append("<table>");

//     //append a header row to the table
//     $("table").append("<tr>");

//     //add the "City" and "Population" columns to the header row
//     $("tr").append("<th>City</th><th>Population</th>");

//     //loop to add a new row for each city
//     for (var i = 0; i < cityPop.length; i++){
//         //assign longer html strings to a variable
//         var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
//         //add the row's html string to the table
//         $("table").append(rowHtml);
//     };
//     //this is used to grab the addColumns function from below. Need here because cityPop is not a global variable
//     addColumns(cityPop);
// };

// //this is the debugging part of the module activity 

// function addColumns(cityPop){
//     //this adds a columns of the city population by doing an if/else statement inside of the function
//     $('tr').each (function(i){

//     	if (i == 0){

//     		$(this).append('<th>City Size</th>');
//     	} else {
//             //here we create the variable city sixe and fun another if/else statement insde of the else statement
//     		var citySize;

//     		if (cityPop[i-1].population < 100000){
//     			citySize = 'Small';

//     		} else if (cityPop[i-1].population < 500000){
//     			citySize = 'Medium';

//     		} else {
//     			citySize = 'Large';
//     		};

//     		$(this).append('<td>' + citySize + '</td>');
//     	};
//     });    
// };

// //This function below changes the color of the elements as you mouseover them
// //It is importnat to remember that $ is calling jquery

// function addEvents(){
//     //the id myDiv is imprtant to have and make sure that it is in the index.html
// 	$('#myDiv').mouseover(function(){
		
// 		var color = "rgb(";

// 		for (var i=0; i<3; i++){

// 			var random = Math.round(Math.random() * 255);

//             //we took the random out of '' because we don't want it as a string, but as a variable
// 			color += random;

// 			if (i<2){
// 				color += ",";
			
// 			} else {
// 				color += ")";
//             }
// 		};

// 		$(this).css("color", color);
        
// 	});

// 	function clickme(){

// 		alert('Hey, you clicked me!');
// 	};

// 	$('table').on('click', clickme);
// };

// //this code writes an AJAX script that loads my data into the DOM and displays it in the Console.

// //jQuery.getJSON() method
// $.getJSON("data/MegaCities.geojson", callback);

// function callback(response) {
//     console.log(response)
// }


//this is module 3 debug part of the lab
//we needed to make the id myDIV 

function debugCallback(response){
    
    $('#myDiv').append('GeoJSON data: ' + JSON.stringify(mydata));

    console.log('hi');
};
 

function debugAjax(){

    console.log('hi2');
   
    var mydata;

    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: debugCallback(response)  
        });

    debugCallback(mydata);


    $('#myDiv').append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};




