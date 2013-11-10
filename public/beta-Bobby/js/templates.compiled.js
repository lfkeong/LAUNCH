this["NewzSocial"] = this["NewzSocial"] || {};
this["NewzSocial"]["Template"] = this["NewzSocial"]["Template"] || {};

this["NewzSocial"]["Template"]["curate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <option value='"
    + escapeExpression(((stack1 = depth0[0]),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = depth0[1]),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n        ";
  return buffer;
  }

  buffer += "<div class='template_container'>\n  <div class=\"modal-header\">\n    <button class=\"close pull-right\" onclick=\"signout()\"><small>Sign Out</small></button>\n    <img class=\"pull-left\" id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n    <h3>Curate Article</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Choose Channel(s):<p>\n      <select id='channels-select' multiple=\"multiple\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.channels, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n      <textarea id=\"curate-user-comment\" placeholder=\"Write a comment…\" class=\"input-block-level curate-user-comment\"></textarea>\n      <div class=\"media share-content\">\n        <img class=\"media-object img-polaroid pull-left share-content-image\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"media-body\">\n          <h5 class=\"media-heading share-content-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n          <p class=\"share-content-publisher muted\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.publisher)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n          <p class=\"share-content-summary muted\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n        </div>\n      </div>\n      <div id=\"curate_alert\" class=\"error\">\n        nothing\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <!-- <a href=\"#\" class=\"btn hide\" onclick=\"back_button()\">Back</a> -->\n      <a href=\"#\" class=\"btn btn-danger\" onclick=\"close_bookmarklet()\">CLOSE</a>\n      <a href=\"#\" class=\"btn btn-success\" onclick=\"curate_article(true,'";
  if (stack2 = helpers.article_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.article_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "')\">CLIP AND CURATE</a>\n      <a href=\"#\" class=\"btn btn-primary\" onclick=\"curate_article(false,'";
  if (stack2 = helpers.article_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.article_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "')\">CURATE</a>\n    </div>\n  </div>";
  return buffer;
  });

this["NewzSocial"]["Template"]["message"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id='message_container' class='template_container'>\n  <div class='newzsocial_heading'>\n    <img id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n  </div>\n  <center><h3 id=\"message\" class='message'>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3></center>\n</div>";
  return buffer;
  });

this["NewzSocial"]["Template"]["message_loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='template_container'>\n  <div class='newzsocial_heading'>\n    <img id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n  </div>\n  <center>\n    <img src=\"images/loading.gif\">\n    <h3>Finding Article...</h3>\n  </center>\n</div>";
  });

this["NewzSocial"]["Template"]["message_not_found"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div class=\"alert alert-info always-on\"><strong>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": </strong><small>";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</small></div>\n  ";
  return buffer;
  }

  buffer += "<div class='template_container'>\n  <div class='newzsocial_heading'>\n    <img id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n  </div>\n  <legend>Article not found!</legend>\n  ";
  stack1 = helpers.each.call(depth0, depth0.message, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["NewzSocial"]["Template"]["message_sharing"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='template_container'>\n  <div class='newzsocial_heading'>\n    <img id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n  </div>\n  <center>\n    <img src=\"images/loading.gif\">\n    <h3>Sharing Article...</h3>\n  </center>\n</div>";
  });

this["NewzSocial"]["Template"]["newzsocial_actions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id='clip_curate_container' class='template_container'>\n  <div class=\"modal-header header-shadow\">\n    <img class=\"pull-left\" id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n    <!-- <button class=\"close pull-right\" onclick=\"signout()\"><small>Sign Out</small></button> -->\n    <div class=\"pull-right clickable dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n          <span >Hello <b>"
    + escapeExpression(((stack1 = ((stack1 = depth0.display),stack1 == null || stack1 === false ? stack1 : stack1.userName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "  </b></span>\n          <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.display),stack1 == null || stack1 === false ? stack1 : stack1.img)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu\" > \n          <li> \n            <a class=\"clickable\" onclick=\"signout()\">Sign Out</a>\n          </li>\n        </ul>\n    </div>\n    <h3>&nbsp;</h3>\n  </div>\n  <div id=\"newzsocial-action\">\n    <center>\n      <!-- <p><img src=\"images/social-icons/email-profile-image.jpg\" style=\"height:30px;\"> Hello <b>User Name</b></p> -->\n      <button type=\"button\" class=\"btn btn-large btn-clip btn-ccs\" onclick=\"clip('";
  if (stack2 = helpers.article_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.article_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "')\"></button>\n      <button type=\"button\" class=\"btn btn-large btn-curate btn-ccs\" onclick=\"curate('";
  if (stack2 = helpers.article_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.article_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "')\"></button>\n      <button type=\"button\" class=\"btn btn-large btn-block btn-share btn-ccs\" onclick=\"share_pipe('default','";
  if (stack2 = helpers.article_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.article_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "')\"></button>\n\n    </center>\n  </div>\n</div>";
  return buffer;
  });

this["NewzSocial"]["Template"]["pipe_loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='template_container'>\n  <div class='newzsocial_heading'>\n    <img id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n  </div>\n  <center>\n    <img src=\"images/loading.gif\">\n    <h3>Piping Article...</h3>\n  </center>\n</div>";
  });

this["NewzSocial"]["Template"]["share"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li id=\"tab-facebook\" class=\"social-tab tab-left\"><a href=\"javascript:share_pipe('facebook','"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"><img src=\"http://betapp.newzsocial.com/newzlink/images/Facebook_greycircle_ON_24x24.png\" class=\"hide tab-icon-on\" alt=\"\"/><img src=\"http://betapp.newzsocial.com/newzlink/images/Facebook_greycircle_24x24.png\" class=\"tab-icon-off hide\" alt=\"\"/>Facebook</a></li>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li id=\"tab-linkedin\" class=\"social-tab tab-middle\"><a href=\"javascript:share_pipe('linkedin','"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"><img src=\"http://betapp.newzsocial.com/newzlink/images/LinkedIn_greycircle_ON_24x24.png\" class=\"hide tab-icon-on\" alt=\"\"/><img src=\"http://betapp.newzsocial.com/newzlink/images/LinkedIn_greycircle_24x24.png\" class=\"tab-icon-off\" alt=\"\"/>LinkedIn</a></li>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li id=\"tab-twitter\" class=\"social-tab tab-middle\"><a href=\"javascript:share_pipe('twitter','"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"><img src=\"http://betapp.newzsocial.com/newzlink/images/Twitter_greycircle_ON_24x24.png\" class=\"hide tab-icon-on\" alt=\"\"/><img src=\"http://betapp.newzsocial.com/newzlink/images/Twitter_greycircle_24x24.png\" class=\"tab-icon-off\" alt=\"\"/>Twitter</a></li>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li id=\"tab-email\" class=\"social-tab tab-right\"><a href=\"javascript:share_pipe('email','"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"><img src=\"http://betapp.newzsocial.com/newzlink/images/Email_greycircle_ON_24x24.png\" class=\"hide tab-icon-on\" alt=\"\"/><img src=\"http://betapp.newzsocial.com/newzlink/images/Email_greycircle_24x24.png\"  class=\"tab-icon-off\" alt=\"\"/>Email</a></li>\n    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <select id=\"share-type-select\" class=\"share-type\" onchange=\"share_type_change('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">\n        ";
  stack2 = helpers.each.call(depth0, depth0.shareTypes, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </select>\n      ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <option value=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.label) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div id=\"share-friends\">\n        <p>Choose Friend(s):<p>\n          ";
  stack1 = helpers['if'].call(depth0, depth0.isEmail, {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers.unless.call(depth0, depth0.isEmail, {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  return buffer;
  }
function program13(depth0,data) {
  
  
  return "\n          <input type=\"text\" id=\"emailInput\" placeholder=\"Enter email\">\n          <div id=\"divEmailMe\">\n            <label class=\"checkbox\">\n              <input type=\"checkbox\" id=\"emailMe\"> Email me a copy too!\n            </label>\n          </div>\n          ";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <select id='share-friend-select' multiple=\"multiple\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.friends, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n          ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <option value='"
    + escapeExpression(((stack1 = ((stack1 = depth0.oaProfile),stack1 == null || stack1 === false ? stack1 : stack1.oaUserId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.oaProfile),stack1 == null || stack1 === false ? stack1 : stack1.userName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n            ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <option value='";
  if (stack1 = helpers.oaGroupId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.oaGroupId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.oaGroupName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.oaGroupName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n              ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <option value='";
  if (stack1 = helpers.oaPageId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.oaPageId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.oaPageName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.oaPageName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n              ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <img class=\"media-object img-polaroid pull-left share-user-image\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.profile),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <h4 class=\"media-heading share-user-name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.profile),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n            ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div id=\"pipeIt\" class=\"modal-pipeIt-container\" style=\"display:block;padding:0px;\">\n        <div class\"accordion-heading\">\n          <a class=\"accordion-toggle collapsed\" style=\"background-color: #444444;display:block;line-height:130%;\" data-state=\"off\" data-toggle=\"collapse\" data-parent=\"#modal-pipeIt-container\" href=\"#collapse-pipeIt\" onfocus=\"if(this.blur)this.blur()\" onclick=\"accordionToggle('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"><img src=\"http://betapp.newzsocial.com/newzlink/images/modal_pipe_it.png\" alt=\"\"/>Pipe it!</a>\n        </div>\n\n        <div id =\"collapse-pipeIt\" class=\"accordion-body collapse\">\n          <div class=\"accordion-inner\">\n              <div class=\"pipeIt-type-selection selection-top\">\n                <button id=\"pipeIt-btn-set-schedule\" class=\"btn hide\" type=\"button\" onclick=\"setSchedule()\">Create A New Schedule</button>\n                <span id=\"pipeIt-have-schedule\" class=\"hide\">Use Existing Schedule</span>\n                <span class=\"pipeIt-selection-checkbox\"><input type=\"radio\" name=\"pipeIt-selection\" value=\"pipe-schedule\"></span>\n              </div>\n              <div class=\"pipeIt-type-selection selection-bot\">\n\n                <div class=\"input-prepend\">\n                  <span class=\"pipeIt-selection-input-indication-left\">Post In</span>\n                  <input id=\"delay-define\" onkeypress=\"return isNumberKey(event)\" id=\"prependedInput\" type=\"text\" placeholder=\"1\" value=\"1\">\n                </div>\n                <select id=\"select-delay\">\n                  <option value=\"60\">hours</option>\n                  <option value=\"1\">minutes</option>\n                  <option value=\"1440\">days</option>\n                </select>\n                <span class=\"pipeIt-selection-checkbox\"><input type=\"radio\" name=\"pipeIt-selection\" value=\"user-defined\"></span>\n              </div>\n              <span id=\"warning-selection\" class=\"hide\">Please select an option above!</span>\n              <span id=\"warning-schedule\" class=\"hide\">Please set a new schedule!</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      ";
  return buffer;
  }

  buffer += "<div class=\"template_container\">\n  <ul id=\"share-tab-nav\" class=\"tabs-social\">\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.display),stack1 == null || stack1 === false ? stack1 : stack1.facebook), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.display),stack1 == null || stack1 === false ? stack1 : stack1.linkedin), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.display),stack1 == null || stack1 === false ? stack1 : stack1.twitter), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.display),stack1 == null || stack1 === false ? stack1 : stack1.email), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </ul>\n</div>\n\n<div class='template_container share-container'>\n  <div class=\"modal-header\">\n    <button class=\"close pull-right\" onclick=\"signout()\"><small>Sign Out</small></button>\n    <img class=\"pull-left\" id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n    <h3>Share Article <span id=\"share-pipe-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></h3>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"share-options\">\n      ";
  stack2 = helpers['if'].call(depth0, depth0.shareTypes, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  stack2 = helpers['if'].call(depth0, depth0.friends, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        <div id=\"share-group\">\n          <p>Choose Group(s):<p>\n            <select id='share-group-select' onchange=\"checkOaData('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">\n              ";
  stack2 = helpers.each.call(depth0, depth0.groups, {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </select>\n          </div>\n\n          <div id=\"share-page\">\n            <p>Choose Page(s):</p>\n            <select id='share-page-select' onchange=\"checkOaData('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">\n              ";
  stack2 = helpers.each.call(depth0, depth0.pages, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </select>\n          </div>\n        </div>\n\n        <div class=\"media share-information\">\n        ";
  stack2 = helpers.unless.call(depth0, depth0.isEmail, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          <div class=\"media-body\">\n          ";
  stack2 = helpers.unless.call(depth0, depth0.isEmail, {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            <textarea id=\"share-user-comment\" placeholder=\"Write a comment…\" class=\"input-block-level share-user-comment\" onkeyup=\"count_comment('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\"></textarea>\n            <span id=\"share-comment-count\" class=\"badge badge-info\"></span>\n            <div class=\"media share-content\">\n              <img id=\"image\" class=\"media-object img-polaroid pull-left share-content-image\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n              <div class=\"media-body\">\n                <h5 id=\"title\" class=\"media-heading share-content-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\n                <p id=\"publisher\" class=\"share-content-publisher muted\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.publisher)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n                <p id=\"content\" class=\"share-content-summary muted\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.article),stack1 == null || stack1 === false ? stack1 : stack1.content)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"share_alert\" class=\"error\">nothing</div>\n      </div>  \n\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.display),stack1 == null || stack1 === false ? stack1 : stack1.SocialSettings), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n      \n      <div id=\"pipe-set-schedules\" class=\"modal hide fade\">\n    <div class=\"modal-header\">\n      <h3 id=\"title-schedule\"></h3>\n    </div>\n    <div class=\"modal-inner-container\" >\n      <div class=\"container-set-nav-btn\">\n        <span id=\"set-frequency\" class=\"set-nav-btn set-frequency set-nav-btn-active\" data-schdType=\"1\">Frequency</span>\n        <span id=\"set-random\" class=\"set-nav-btn set-random\" data-schdType=\"2\">Random</span>\n        <span id=\"set-specific\" class=\"set-nav-btn set-specific\" data-schdType=\"3\">Specific Time</span>\n      </div>\n      \n    <!--   <div class=\"\" style=\"min-width:0%;\"> -->\n      <!-- Frequency -->\n      <div class=\"container-specify-schedule set-frequency\">\n        <div class=\"input-prepend\">\n          <span class=\"pipeIt-selection-input-indication-left\">Post Every</span>\n          <input id=\"frequency-define\" type=\"text\" onkeypress=\"return isNumberKey(event)\" placeholder=\"1\" value=\"4\">\n        </div>\n        <select id=\"frequency-denom\" style=\"min-width:0%;\"> \n          <option value=\"60\">hours</option>\n          <option value=\"1\">minutes</option>\n          <option value=\"1440\">days</option>\n        </select>\n      </div>\n      \n      <!-- Random -->\n      <div class=\"container-specify-schedule set-random hide\">\n        <div class=\"input-prepend\">\n          <span class=\"pipeIt-selection-input-indication-left\">Post</span>\n          <input id=\"random-define-1\"  type=\"text\" onkeypress=\"return isNumberKey(event)\" placeholder=\"1\" value=\"1\">\n          <span class=\"pipeIt-selection-input-indication-middle\">articles in</span>\n          <input id=\"random-define-2\"  type=\"text\" onkeypress=\"return isNumberKey(event)\" placeholder=\"1\" value=\"1\">\n        </div>\n        <select id=\"random-denom\" style=\"min-width:0%;\">\n          <option value=\"1\" data-divisor=\"1\">hours</option>\n          <option value=\"1\" data-divisor=\"60\">minutes</option>\n          <option value=\"24\" data-divisor=\"1\">days</option>\n        </select>\n      </div>\n      \n      <!-- Specific Time -->\n      <div class=\"container-specify-schedule set-specific hide\">\n        <div id=\"container-specific-timeslots\">\n          <h4>Timeslots</h4>\n        </div>\n        <a id=\"btn-add-timeslots\" class=\"btn btn-primary\">+TIMESLOTS</a>\n      </div>\n      <!-- </div> -->\n    </div>\n    <div class=\"modal-footer\">\n      <a id=\"btn-set-schedule-cancel\" class=\"btn btn-primary\" data-dismiss=\"modal\">CANCEL</a>\n      <a id=\"btn-set-schedule-set\" class=\"btn btn-primary\">SET SCHEDULE</a>\n    </div>\n  </div>\n\n\n        <div class=\"modal-footer\">\n          <!-- <a href=\"#\" class=\"btn hide\" onclick=\"back_button()\">Back</a> -->\n          <a href=\"#\" class=\"btn\" onclick=\"close_bookmarklet()\">CLOSE</a>\n          <a href=\"#\" id=\"shareButton\" class=\"btn hide\" onclick=\"share_article('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">SHARE</a>\n          <a href=\"#\" id=\"shareButton-twt\" class=\"btn hide\" onclick=\"share_article('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">TWEET</a>\n          <a href=\"#\" id=\"shareButton-email\" class=\"btn hide\" onclick=\"share_article('"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.pipe)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\">SEND</a>\n          <a href=\"#\" id=\"pipeButton\" class=\"btn hide\" onclick=\"pipe_article()\">PIPE</a>\n        </div>\n      </div>";
  return buffer;
  });

this["NewzSocial"]["Template"]["share_pipes"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <img src=\"images/social-icons/email.png\" class=\"img-rounded social-icon\" onclick=\"share_pipe('email','";
  if (stack1 = helpers.article_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.article_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "')\">\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <img src=\"images/social-icons/facebook.png\" class=\"img-rounded social-icon\" onclick=\"share_pipe('facebook','";
  if (stack1 = helpers.article_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.article_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "')\">\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <img src=\"images/social-icons/linkedin.png\" class=\"img-rounded social-icon\" onclick=\"share_pipe('linkedin','";
  if (stack1 = helpers.article_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.article_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "')\">\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <img src=\"images/social-icons/twitter.png\" class=\"img-rounded social-icon\" onclick=\"share_pipe('twitter','";
  if (stack1 = helpers.article_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.article_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "')\">\n        ";
  return buffer;
  }

  buffer += "<div class='template_container'>\n  <div class=\"modal-header\">\n    <button class=\"close pull-right\" onclick=\"signout()\"><small>Sign Out</small></button>\n    <img class=\"pull-left\" id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n    <h3>Share Article <span id=\"share-pipe-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sharePipe),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></h3>\n  </div>\n  <div class=\"modal-body\">\n    <div class='social-icons'>\n      <center>\n        ";
  stack2 = helpers['if'].call(depth0, depth0.email, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers['if'].call(depth0, depth0.facebook, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers['if'].call(depth0, depth0.linkedin, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers['if'].call(depth0, depth0.twitter, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </center>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn btn\" onclick=\"close_bookmarklet()\">Close</a>\n  </div>\n</div>\n";
  return buffer;
  });

this["NewzSocial"]["Template"]["signin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id='signin_container' class='template_container'>\n  <div class=\"modal-header\">\n    <img class=\"pull-left\" id='newzsocial_logo' src=\"images/newzsocial.png\" alt=\"newzsocial_logo\">\n    <h3>Sign In to NewzSocial</h3>\n  </div>\n  <div class=\"modal-body\" style=\"overflow: auto;\">\n    <form>\n        <div id='signin_alert' class=\"alert alert-error\">\n        Hey! Your Username or Password is incorrect!\n      </div>\n      \n      <div id=\"pr-1\" style=\"float: left; width: 50%; position: relative; text-align: center; margin-top:20px;\">\n          <!-- Email login field -->  \n              <input name=\"userEmail\" id=\"userEmail\" type=\"text\" placeholder=\"Email\" onkeypress=\"enterKey(event)\"><br /> \n              <input name=\"userPwd\" id=\"userPwd\" type=\"password\" placeholder=\"Password\" onkeypress=\"enterKey(event)\"> \n      </div>\n\n       <div id=\"pr-1-alt\" style=\"float: right; width: 45%; position: relative; text-align: right;\">\n          <a id=\"pr-4\" class=\"clickable\" onclick=\"NAS.lnSignIn();return false;\"><img alt=\"\" class=\"social-media-btn\" src=\"images/signin-linkedin-btn.png\"/></a>\n          <!-- <button id=\"pr-4-alt\" class=\"btn hide btn-primary\" style=\"height: 30px; margin-bottom: 10px;\" onclick=\"showLoading(1);return false;\" disabled>Update LinkedIn Profile</button> -->\n\n          <a id=\"pr-2\" class=\"clickable\" onclick=\"NAS.fbSignIn();return false;\"><img alt=\"\" class=\"social-media-btn\" src=\"images/signin-facebook-btn.png\"/></a>\n          <!-- <button id=\"pr-2-alt\" class=\"btn hide btn-primary\" style=\"height: 30px; margin-bottom: 10px;\" onclick=\"showLoading(2);return false;\" disabled>Update Facebook Profile</button>\n -->\n          <a id=\"pr-3\" class=\"clickable\" onclick=\"NAS.twtSignIn();return false;\"><img alt=\"\" class=\"social-media-btn\" src=\"images/signin-twitter-btn.png\"/></a>\n         <!--  <button id=\"pr-3-alt\" class=\"btn hide btn-primary\" style=\"height: 30px; margin-bottom: 10px;\" onclick=\"showLoading(3);return false;\" disabled>Update Twitter Profile</button> -->\n        </div>\n    </form>\n\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" onclick=\"close_bookmarklet()\">Close</a>\n    <a href=\"#\" class=\"btn\" onclick=\"email_signin()\">Sign In</a>\n  </div>  \n</div>\n\n<script type=\"text/javascript\">\n//   function linkCallBack(resp) {\n//     console.log('In call back');\n//     console.log(resp);\n//     if (resp && resp.status) {\n//       displaySuccess(\"Logged in!\", \"Loading...\", 500000);\n//       document.location.href = document.location.href;\n//     } else {\n//       showError(resp.data);\n//     }\n//   }\n\n// </script>\n\n   <!--  <form id=\"\" name=\"loginFrm\" method=\"post\" action=\"signin\" style=\"margin: 0px;\">\n      <div class=\"modal-body\" style=\"position: relative; overflow: overlay;\">\n        <div id=\"pr-1\" style=\"float: left; width: 50%; position: relative; text-align: center;\"> -->\n          <!-- Email login field -->\n         <!--  <input name=\"userEmail\" id=\"userEmail\" type=\"text\" placeholder=\"Email\" onkeypress=\"onFormReturnCarriage(event)\"><br /> \n          <input name=\"userPwd\" id=\"userPwd\" type=\"password\" placeholder=\"Password\" onkeypress=\"onFormReturnCarriage(event)\"> -->\n          <!-- pre login -->\n         <!--  <ul class=\"signin-link-list\">\n            <li id=\"pr-1-guest-vem\" class=\"\"><a  class=\"clickable\" onclick=\"verifyEmail()\">Send Verification Link</a></li>\n            <li id=\"pr-1-guest-fgp\" class=\"\"><a class=\"clickable\" onclick=\"forgotPassword()\">Reset Password</a></li> -->\n          <!-- post login-->\n           <!--  <li id=\"pr-1-fgp\" class=\"hide\"><a class=\"clickable\" onclick=\"forgotPassword()\">Reset Password</a></li>\n            <li id=\"pr-1-cgp\" class=\"hide\"><a class=\"clickable \" onclick=\"changePasswordPressed()\">Change Password</a></li>\n            <li id=\"pr-1-vem\" class=\"hide\"><a class=\"clickable\" onclick=\"verifyEmail()\">Verify Email</a></li>\n          </ul>\n        </div> -->\n\n        <!-- Post Login: Social Media Update (buttons only enabled after successful log in) -->\n        <!-- <div id=\"pr-1-alt\"\n          style=\"float: right; width: 45%; position: relative; text-align: right;\">\n          <a id=\"pr-4\" class=\"clickable\" onclick=\"NAS.lnSignIn(linkCallBack);return false;\"><img alt=\"\" src=\"<%=RES_PATH%>/images/signin-linkedin-btn.png\" style=\"height: 30px; margin-bottom: 10px;\" /></a>\n          <button id=\"pr-4-alt\" class=\"btn hide btn-primary\" style=\"height: 30px; margin-bottom: 10px;\" onclick=\"showLoading(1);return false;\" disabled>Update LinkedIn Profile</button>\n\n          <a id=\"pr-2\" class=\"clickable\" onclick=\"NAS.fbSignIn(fbCallBack);return false;\"><img alt=\"\" src=\"<%=RES_PATH%>/images/signin-facebook-btn.png\" style=\"height: 30px; margin-bottom: 10px;\" /></a>\n          <button id=\"pr-2-alt\" class=\"btn hide btn-primary\" style=\"height: 30px; margin-bottom: 10px;\" onclick=\"showLoading(2);return false;\" disabled>Update Facebook Profile</button>\n\n          <a id=\"pr-3\" class=\"clickable\" onclick=\"NAS.twtSignIn(twtCallBack);return false;\"><img alt=\"\" src=\"<%=RES_PATH%>/images/signin-twitter-btn.png\" style=\"height: 30px;\" /></a>\n          <button id=\"pr-3-alt\" class=\"btn hide btn-primary\" style=\"height: 30px; margin-bottom: 10px;\" onclick=\"showLoading(3);return false;\" disabled>Update Twitter Profile</button>\n        </div>\n      </div>\n      <div id=\"modal-footer\" class=\"modal-footer\">\n        <img id=\"loading-signin\" src=\"<%=RES_PATH%>images/loading.gif\" alt=\"loading...\" class=\"hide\" />\n        <button id=\"signin-confirm-btn\" class=\"btn btn-primary\" type=\"submit\" onclick=\"validateLoginSubmit();return false;\">SIGN IN</button>\n      </div>\n    </form>\n -->";
  });