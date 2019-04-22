<html>
    <head></head>
    <body>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId            : 'your-app-id',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.2'
        });
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
    <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>     
    <script>
    document.getElementById('shareBtn').onclick = function() {
    FB.ui({
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
          object:'https://developers.facebook.com/docs/javascript/examples',
        })
      }, function(response){
        // Debug response (optional)
        console.log(response);
      });}
    </script>
    </body>
</html>