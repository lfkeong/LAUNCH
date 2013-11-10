//newzstand('GetArticlesForPublication', 'content', '191f22bb-3e24-4515-8514-c40cd0f95c26', 'a0d22e34-2eed-420e-ac24-f8b4095332cd', [{'argument': 'publicationId', 'parameter': '130,131,132,133'},{'argument': 'limit', 'parameter': '30'},{...}]);
function newzstand2(apiCall, apiType, aToken, uToken, query) {
  if (query.length) {
  	var endpoint = 'http://server.newzsocial.com/newz/';
  	switch (apiType) {
      case 'u':
      case 'user':
        endpoint += 'u/';
        break;
      case 'c':
      case 'content':
        endpoint += 'c/';
        break;
      case 'a':
      case 'admin':
        endpoint += 'a/';
        break;
      default:
        //invalid type - throw an error
    }
    endpoint = endpoint + apiCall + '?aToken=' + aToken + '&uToken=' + uToken + '&';
    //query is an array
    //[{'argument': 'publicationId', 'parameter': '130,131,132,133'},{'argument': 'limit', 'parameter': '30'},{...}]
    query.forEach(function (queryItem){
      endpoint = endpoint + queryItem.argument + '=' + queryItem.parameter + '&';
    });
    //console.log('calling newzstand -> ' + endpoint);
    $.getJSON(endpoint, function(data) {
      return data;
    });
  }
  else{
  	//no queries - throw an error
  }
}

