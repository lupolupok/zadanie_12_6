var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  	countriesList.empty();
  	
  	resp.forEach(function(item){
	   	//$('<li>').text(item.name).appendTo(countriesList);
	   	//$('<li>').text(item.capital).appendTo(countriesList);
	   	var table = $('<table>');
	   	var headerRow = $('<tr>').append($('<th>').text('Name of the country:'));
	   	var capitalRow = $('<tr>').append($('<td>').text('Capital:'));
	   	var populationRow = $('<tr>').append($('<td>').text('Population:'));

	   	var name = $('<th>').text(item.name);
	   	var capital = $('<td>').text(item.capital||'Unknown');
	   	var population = $('<td>').text(item.population||'Unknown');

	   	headerRow = headerRow.append(name);
	   	capitalRow = capitalRow.append(capital);
	   	populationRow = populationRow.append(population);

	   	headerRow.appendTo(table);
	   	
	   	capitalRow.appendTo(table);
	   	populationRow.appendTo(table);

	   	table.appendTo(countriesList);
	});
}