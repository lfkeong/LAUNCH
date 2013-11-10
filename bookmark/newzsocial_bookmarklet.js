(function() {
  var isException = false;
  var og_title = null;
  var og_url = null;
  var og_site_name = null;
  var og_locale = null;
  var og_description = null;
  var og_image = null;

  var domain = document.domain;

  if(domain === "www.youtube.com"){      
    isException = true;
  }
  getMetaData();

  if(isException == true){
    if(og_url != window.location.href){
      document.location.reload(true);
        getMetaData();
      if (og_url === window.location.href) {
        bookmarklet();
      }else{
        alert("Please Try Again!");
      }
    }else{
      bookmarklet();
    }
  }else{
    bookmarklet();
  }
  
  function getMetaData (){

    var metas = document.getElementsByTagName("meta");

    for (var i=0; i<metas.length; i++) {
      if (metas[i].getAttribute("property") == 'og:title'){
        og_title = metas[i].getAttribute("content");
        continue;
      }

      if (metas[i].getAttribute("property") == 'og:url'){
        og_url = metas[i].getAttribute("content");
        continue;
      }

      if (metas[i].getAttribute("property") == 'og:locale'){
        og_locale = metas[i].getAttribute("content");
        continue;
      }

      if (metas[i].getAttribute("property") == 'og:site_name'){
        og_site_name = metas[i].getAttribute("content");
        continue;
      }

      if (metas[i].getAttribute("property") == 'og:description'){
        og_description = metas[i].getAttribute("content");
        continue;
      }

      if (metas[i].getAttribute("property") == 'og:image'){
        og_image = metas[i].getAttribute("content");
        continue;
      }
    }
  }

  function bookmarklet(){  
    f = 'http://localhost:10009/beta-Bobby/add?url='+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(document.title);
    f += '&og_title='+encodeURIComponent(og_title)+'&og_url='+encodeURIComponent(og_url)+'&og_locale='+encodeURIComponent(og_locale)+'&og_site_name='+encodeURIComponent(og_site_name)+ '&og_description='+encodeURIComponent(og_description)+'&og_image='+encodeURIComponent(og_image)+'&isException='+isException+'&';

    a = function() {
      if (!window.open( f + 'noui=1&jump=doclose','deliciousuiv6','location=0,links=0,toolbar=0,width=320,height=241'))
        location.href=f+'jump=yes'
    };
    if(/Firefox/.test(navigator.userAgent)) {
      setTimeout(a,0)
    }
    else {
      a()
    }
  }

})()