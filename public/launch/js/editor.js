function editor (inputNo){

	switch(inputNo){
		case 1 : $('#eb-title').text($('#fb-title').val());
			break;
		case 2 : $('#eb-main-description').text($('#fb-main-description').val()); 
			break;
		case 3 : $('#eb-feature').text($('#fb-feature').val());
			break;
		case 4 : $('#eb-feat-description').text($('#fb-feat-description').val());
			break;
	// 	case 5 : $('#eb-title').text($('#fb-title').val());
	}
}

function pushToFirebase(){
	console.log("push to firebase invoked!");
	var myDataRef = new Firebase('https://launchhacky-database.firebaseio.com/');
 	
    var title = $('#eb-title').text();
    var	description= $('#eb-main-description').text();
    var feature = $('#eb-feature').text();
    var feat_description = $('#eb-feat-description').text();

    myDataRef.set({
    	title 				: title,
    	description 		: description,
    	feature 			: feature,
    	feat_description 	: feat_description 
    });

    // myDataRef.on('value', function(data){
    // 	var data = data.val();
    // 	$('#eb-title').text(data.title);	
    // 	$('#eb-main-description').text(data.description);
    // 	$('#eb-feature').text(data.feature);
    // 	$('#eb-feat-description').text(data.feat_description);
		
    // });
}

function appLogin(){
	var chatRef = new Firebase('https://launchhacky.firebaseIO-demo.com/');
	var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
		if (error) {
          // an error occurred while attempting login
          console.log(error);
      } else if (user) {
          // user authenticated with Firebase
          console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      } else {
          // user is logged out
      }
  });
	auth.login('facebook');
}