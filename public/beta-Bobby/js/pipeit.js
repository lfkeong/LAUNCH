/* All the Pipe It functionalities
    start here */

var pipeArticle = {};     //NEW OBJECT "pipeArticle"
pipeArticle.all = false;  //LinkedIn share to everyone feature, default value set to "false"
pipeArticle.hasSchedule = false; //by default schedule set to false first

function accordionToggle (type){
  // closing the accordion
  if ($('.accordion-toggle').attr('data-state') == "on"){
    $('.accordion-toggle').attr('data-state','off');
    $('.accordion-toggle').removeClass('pipeIt-active');
    $('#warning-selection').hide();
    $('#pipeButton').hide();
    switch(type){
      case "email"    : $('#shareButton-email').show();
      break;
      case "facebook" : $('#shareButton').show();
      break;
      case "linkedin" : $('#shareButton').show();
      break;
      case "twitter"  : $('#shareButton-twt').show();
    }
  }
  // opening the accordion
  else if ($('.accordion-toggle').attr('data-state') == "off"){
    $('.accordion-toggle').attr('data-state','on');
    $('.accordion-toggle').addClass('pipeIt-active');
    $('#shareButton, #shareButton-twt, #shareButton-email').hide();
    $('#pipeButton').show();
  }
  else return;
  console.log("Accordion State :" + $('.accordion-toggle').attr('data-state'));  // to check
}

function checkOaData (type){

  if(NewzSocial.User.profiles.smc.smcUserId){
    var targetType = $('#share-type-select').val();

    switch(type){
      case "facebook" :
      pipeArticle.oaType = 2; 
      switch(targetType){
        case "timeline" :
        pipeArticle.oaTargetType  = 21;
        pipeArticle.oaTargetId    = NewzSocial.User.profiles.facebook.detail.oaUserId;
        pipeArticle.oaTargetName  = NewzSocial.User.profiles.facebook.detail.userName+" \'s Timeline";
        break;
        case "group"  :
        pipeArticle.oaTargetType  = 22;
        pipeArticle.oaTargetId    = $('#share-group-select').val();
        pipeArticle.oaTargetName  = $("#share-group-select option:selected").text();
        break;
        case "page" :
        pipeArticle.oaTargetType  = 23;
        pipeArticle.oaTargetId    = $('#share-page-select').val();
        pipeArticle.oaTargetName  = $("#share-page-select option:selected").text(); 
        break;
      }
      break;

      case "linkedin" :
      pipeArticle.oaType = 4;
      switch(targetType){
        case "connections"  :
        pipeArticle.oaTargetType  = 40;
        pipeArticle.oaTargetId    = NewzSocial.User.profiles.linkedin.detail.oaUserId;
        pipeArticle.oaTargetName  = NewzSocial.User.profiles.facebook.detail.userName+" \'s Profile";
        break;
        case "all"  :
        pipeArticle.oaTargetType  = 41;
        pipeArticle.oaTargetId    = NewzSocial.User.profiles.linkedin.detail.oaUserId;
        pipeArticle.oaTargetName  = NewzSocial.User.profiles.facebook.detail.userName+" \'s Profile For All";
        pipeArticle.all           = true;   //parameter that allow linkedin to share with everyone!
        break;
        case "group"  :
        pipeArticle.oaTargetType  = 42;
        pipeArticle.oaTargetId    = $('#share-group-select').val();
        pipeArticle.oaTargetName  = $("#share-group-select option:selected").text();
        break;
        case "page" :
        pipeArticle.oaTargetType  = 43;
        pipeArticle.oaTargetId    = $('#share-page-select').val();
        pipeArticle.oaTargetName  = $("#share-page-select option:selected").text();
        break;
      }
      break;

      case "twitter"  :
      //twitter so far only has one pipe, no case needed
      pipeArticle.oaType        = 4;
      pipeArticle.oaTargetType  = 40;
      pipeArticle.oaTargetId    = NewzSocial.User.profiles.twitter.detail.oaUserId;
      pipeArticle.oaTargetName  = NewzSocial.User.profiles.facebook.detail.userName+" \'s Wall";
      break;
    }
  }
  preCheckSchedule();
}

function preCheckSchedule(){
  var SocialSettings = NewzSocial.User.profiles.smc;
  pipeArticle.smcUserId = SocialSettings.smcUserId;

  $('#pipeIt-btn-set-schedule').show();
  $('#pipeIt-have-schedule').hide();


  if(SocialSettings.direct.length){

    for(var i in SocialSettings.direct){

      if(SocialSettings.direct[i].oaTargetId == pipeArticle.oaTargetId){

        pipeArticle.smcTouchPointId = SocialSettings.direct[i].tpId;
        pipeArticle.pipeId = SocialSettings.direct[i].pipeId;
        console.log("found match for pipe ", pipeArticle.smcTouchPointId+ " , " +pipeArticle.pipeId); //check

        if(SocialSettings.direct[i].schedule !== undefined){
          pipeArticle.hasSchedule = true;
          $('#pipeIt-have-schedule').show();  
          $('#pipeIt-btn-set-schedule').hide();
        }
        break;               
      }
    }
  }
}

function pipe_article (){
  var comments;
  if($('#share-user-comment').val()){
    comments = $('#share-user-comment').val();
  }
  else{
    comments = "";
  }

  if($("input[value='pipe-schedule']:checked").val()){
          // if user indicated to use pipe schedule but have none set up
          if (!pipeArticle.hasSchedule){
            $('#warning-schedule').show();
          }
          // pipe with existing schedule
          else{
            $('#warning-schedule').hide();

            var params = {
              articleId: NewzSocial.Article.id,
              headline: NewzSocial.Article.title,
              comment: comments,
              link: NewzSocial.Article.url,
              image: NewzSocial.Article.imageUrl,
              pipelineId: pipeArticle.pipeId,
              smcTouchPointId: pipeArticle.smcTouchPointId,
              smcUserId: pipeArticle.smcUserId,
              all: pipeArticle.all 
            };
            console.log("Schedule query",params);
            $('body').html(NewzSocial.Template.pipe_loading({}));

            function callback (){
              console.log("DirectPostBySchedule successful");
              window.resizeTo(390,320);
              $('body').html(NewzSocial.Template.message({style:'label-success', message:''}));
              displayMessage("Successful!","Article Piped!",2,1500);
              setTimeout(function(){window.close();},1500);
            }
            NewzSocial.api_post('betapp','nscon','d','DirectPostBySchedule', params, 6, callback);
          }
        } //end of schedule pipe
        
        // else if user defined delayed post
        else if($("input[value='user-defined']:checked").val()){
          var params = {
            articleId: NewzSocial.Article.id,
            headline: NewzSocial.Article.title,
            comment: comments,
            link: NewzSocial.Article.url,
            image: NewzSocial.Article.imageUrl,
            smcUserId: pipeArticle.smcUserId,
            minutesDelay: $('#delay-define').val()*$('#select-delay').val(),
            all: true
          };
          console.log("Delay query",params);
          // if user does not have respective schedule for direct post, create direct post touchpoint
          // as user may or may not have respective touchpoint enabled
          if (!pipeArticle.hasSchedule){
            // at this point: pipelineId & smcTouchPointId undefined
            console.log("pipeArticle.hasSchedule false");
            params.oaType = oaType;
            params.oaTargetType = pipeArticle.oaTargetType;
            params.oaTargetId = pipeArticle.oaTargetId;
            params.oaTargetName = pipeArticle.oaTargetName;
            
            // create touchpoint -> then update direct post touchpoint id after touchpoint is created -> then execute direct post
            postAfter_EnableDirectPostsTouchPoint(params);
          }
          // else if user have schedule already set
          else{
            params.pipelineId = pipeArticle.pipeId;
            params.smcTouchPointId = pipeArticle.smcTouchPointId;
            
            $('body').html(NewzSocial.Template.pipe_loading({}));

            function callback2 (){
              console.log("DirectPostAfter successful");
              window.resizeTo(390,320);
              $('body').html(NewzSocial.Template.message({style:'label-success', message:''}));
              displayMessage("Successful!","Article Piped!",2,1500);
              setTimeout(function(){window.close();},1500);
            }
            NewzSocial.api_post('betapp','nscon','d','DirectPostAfter', params, 6, callback2);
          }
        }
        
        // else if user has not indicated anything but clicked
        else{
          console.log("nothing is check!");
          $('#warning-selection').show();
        }
      }
      
      function postAfter_EnableDirectPostsTouchPoint(info){
        var params = info;

        function collector1(){
          params.pipelineId = pipeArticle.pipeId;
          params.smcTouchPointId = pipeArticle.smcTouchPointId;

          $('body').html(NewzSocial.Template.pipe_loading({}));
          NewzSocial.api_post('betapp','nscon','d','DirectPostAfter', params, 6, collector2);
        }

        function collector2 (){
          console.log("DirectPostAfter successful");
          window.resizeTo(390,320);
          $('body').html(NewzSocial.Template.message({style:'label-success', message:''}));
          displayMessage("Successful!","Article Piped!",2,1500);
          setTimeout(function(){window.close();},1500);
        }
        NewzSocial.api_post('betapp','nscon','d','EnableDirectPostsTouchPoint', info, 6, collector1);
      }

 /********************************************************************* pipe-set-schedules (start) *********************************************************************/
//click handler to open #pipe-set-schedules modal
function setSchedule (){
  if ($('#pipe-set-schedules').hasClass('hide')) {
    $('#pipe-set-schedules').modal('show'); }

    pipeItSetSchedulePressed();
    pipeArticle.schdType = 1;

//when user click choose schedule type
$('.set-nav-btn').click(function (){
  console.log("in set nav btn");
    $('.set-nav-btn').removeClass('set-nav-btn-active');  // un-depress all buttons
    $(this).addClass('set-nav-btn-active');         // depress chosen button  
    $('.container-specify-schedule').hide();        // hide all schedule specification containers
    var correspondingClass = $(this).attr('id');      
    $('.'+correspondingClass).show();           // show the specification container chosen
    
    pipeArticle.schdType = parseInt($('.set-nav-btn-active').attr('data-schdType'));  // updates pipeArticle.schdType
  });

//shows set schedule modal when clicked
function pipeItSetSchedulePressed(){
  $('#title-schedule').text('Set Schedule for '+pipeArticle.oaTargetName);
  
    // ============================================================ specified timeslots (begin)
    var numTimeSlots = 0; // number of timeslots displayed
    
    $('#container-specific-timeslots').html('');  // clear container
    appendTimeSlot(numTimeSlots);         // add 1 timeslot element
    // appends a new timeslot selection element to #container-specific-timeslots
    $('#btn-add-timeslots').click(function (){
      numTimeSlots++;
      appendTimeSlot();
    });
    
    function appendTimeSlot(){
      var timeSlotHtml="";
      timeSlotHtml+="<div class=\"element-timeslot\">";
      timeSlotHtml+="<div class=\"input-prepend\">";
      timeSlotHtml+="<input class=\"input-timeslot timeslot-hours\" type=\"text\" onkeypress=\"return isNumberKey(event)\" placeholder=\"00\" >";
      timeSlotHtml+="<span class=\"pipeIt-selection-input-indication-middle\">:</span>";
      timeSlotHtml+="<input class=\"input-timeslot timeslot-minutes\" type=\"text\" onkeypress=\"return isNumberKey(event)\" placeholder=\"00\" >";
      timeSlotHtml+="</div>";
      timeSlotHtml+="<select style='min-width:0%;'>";
      timeSlotHtml+="<option value=\"\">Everyday</option>";
      timeSlotHtml+="<option value=\"mon-\">Every Monday</option>";
      timeSlotHtml+="<option value=\"tue-\">Every Tuesday</option>";
      timeSlotHtml+="<option value=\"wed-\">Every Wednesday</option>";
      timeSlotHtml+="<option value=\"thu-\">Every Thursday</option>";
      timeSlotHtml+="<option value=\"fri-\">Every Friday</option>";
      timeSlotHtml+="<option value=\"sat-\">Every Saturday</option>";
      timeSlotHtml+="<option value=\"sun-\">Every Sunday</option>";
      timeSlotHtml+="</select>";
      timeSlotHtml+= "<span class=\"pipeIt-selection-input-indication-middle timeslot-remove\" onclick=\"removeParentElement(event);\">&times</span>";
      timeSlotHtml+="</div>";
      
      $('#container-specific-timeslots').append(timeSlotHtml);
    }
    // ============================================================ specified timeslots (end)
    
  }

  $('#btn-set-schedule-set').click(function (){
    var scheduleP1 = null;
    var scheduleP2 = null;
    switch (pipeArticle.schdType){
    // frequency
    case 1: 
    scheduleP1 = $('#frequency-define').val();            // value
    scheduleP2 = $('#frequency-denom').find(":selected").text();  // minutes||hours||days
    break;
    
    // random
    case 2:
    scheduleP1 = $('#random-define-1').val(); // number of timeslots to generate
    scheduleP2 = $('#random-define-2').val()*$('#random-denom').val()/$('#random-denom').find('option:selected').attr('data-divisor');  // time in hours
    break;
    
    // specified
    case 3:
    scheduleP1 = 0;
    scheduleP2 = '';
    $('.element-timeslot').each( function(i){
        // for each element with non-empty fields
        if ($(this).find('.timeslot-hours').val().length && $(this).find('.timeslot-minutes').val().length){
         scheduleP1++;
         scheduleP2 += $(this).find('option:selected').val() + $(this).find('.timeslot-hours').val() + ":" + $(this).find('.timeslot-minutes').val() + ",";
       }
     });
      scheduleP2 = scheduleP2.slice(0,-1);  // remove last comma
      break;
    }
    var params = {
      smcUserId: pipeArticle.smcUserId,
      oaType: pipeArticle.oaType,
      oaTargetType: pipeArticle.oaTargetType,
      oaTargetId: pipeArticle.oaTargetId,
      oaTargetName: pipeArticle.oaTargetName,
      schdType: pipeArticle.schdType,
      scheduleP1: parseInt(scheduleP1),
      scheduleP2: scheduleP2
    };
    console.log(params); // check

    function collector(){
      console.log("EnableDirectPostsTouchPoint successful!");
      displayMessage("Successful!","Schedule set!",2,1500);
      $('#pipe-set-schedules').modal('hide');
    }
    NewzSocial.api_post('betapp','nscon','d','EnableDirectPostsTouchPoint', params, 6, collector);
  });
}

function removeParentElement(event){
  $(event.target.parentNode).remove();
}

