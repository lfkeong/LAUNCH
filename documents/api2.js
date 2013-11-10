var NewzSocial = NewzSocial = NewzSocial || {};
NewzSocial = (function () {
    /** Class profiles **/
    var profiles = (function () {
      this.facebook = {};
      this.linkedin = {};
      /** class Constructor **/
      var profiles = function (uToken) {
        NewzSocial.api('GetProfiles', 'user', null, uToken,[{'argument': 'dummy', 'parameter': 'dummy'],0, function(callNumber, response){

          });
      };
      /** class methods **/
      obj.prototype = {
          start: function () {
              this.foo = 'fubar';
          }
      };
      return obj;
    })();

    /** Class obj2 **/
    var obj2 = (function () {
        /** class Constructor **/
        var obj2 = function () {
            this.foo = 'bar';
        };
        * class methods *
        obj2.prototype = {
            start: function () {
                this.foo = 'fubar';
            }
        };
        return obj2;
    })();

    return {
        obj : obj,
        obj2: obj2,
        api: function (apiCall, apiType, aToken, uToken, query, callNumber, callback) {
          if (query.length) {
            var endpoint = 'http://pallani.com:10000/newz/';
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
              case 'w':
              case 'widget':
                endpoint = 'http://apps.newzsocial.com/WebWidgets/getwidgetconf/';
              default:
                //invalid type - throw an error
            }
            if (!aToken){
              aToken = '63a59c9d-ad9b-48b3-8bf6-acb2206f11cc';
            }
            if (!uToken){
              uToken = $.cookie('guest_uToken');
            } 
            endpoint = endpoint + apiCall + '?aToken=' + aToken + '&uToken=' + uToken + '&';
            //query is an array
            //[{'argument': 'publicationId', 'parameter': '130,131,132,133'},{'argument': 'limit', 'parameter': '30'},{...}]
            query.forEach(function (queryItem){
              endpoint = endpoint + queryItem.argument + '=' + queryItem.parameter + '&';
            });
            //console.log('calling newzsocial -> ' + endpoint);
            $.getJSON(endpoint, function(data) {
              //console.log(JSON.stringify(data, null, " "));
              callback(callNumber,data);
            });
          }
          else{
            return null;
          }
        },
        log: function(application,logType,description,details) {
          $.ajax({
            type: "POST",
            url: 'http://node.newzsocial.com/logger/add',
            data: {"application":application,"logType":logType,"description":description,"details":details},
          });
        },
        AddTopCurated: function(uToken ,channelIds){
          NewzSocial.api('GetUserProperty', 'user', null, uToken,[{'argument': 'property', 'parameter': 'TopCuratedIds'}],1,function(callNumber, response){
            if(response.data!==undefined){
              topCuratedIds = response.data.split(',');
              NewzSocial.api('SetUserProperty', 'user', null, uToken,[{'argument': 'property', 'parameter': 'TopCuratedIds'},{'argument': 'value', 'parameter': channelIds.concat(_.difference(topCuratedIds,channelIds)).toString()}],1,function(callNumber,response){
                console.log('TopCuratedIds Updated!');
                console.log(response);
              });
            }
            else {
              NewzSocial.api('SetUserProperty', 'user', null, uToken,[{'argument': 'property', 'parameter': 'TopCuratedIds'},{'argument': 'value', 'parameter': channelIds.toString()}],1,function(callNumber,response){
                console.log('TopCuratedIds Updated!');
                console.log(response);
              });
            }
          });
        }
    };

})();

//var o = new Namespace.obj()
