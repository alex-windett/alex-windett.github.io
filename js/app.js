$(function(){

  var $nav = $("nav")
  var $nav_links = $("nav a")

  var $nav_about = $("#nav_about")
  var $nav_skills = $("#nav_skills")
  var $nav_experience = $("#nav_experience")
  var $nav_projects = $("#nav_projects")
  var $nav_contact = $("#nav_contact")

  var $section_about = $("#about")
  var $section_skills = $("#skills")
  var $section_experience = $("#experience")
  var $section_projects = $("#projects")
  var $section_contact = $("#contact")

// scroll to certain section
  $nav_links.click(function(event){
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 950,   
        offset: {"left": 0, "top": -70}
      }
    );
  });

  $("#thumbnail_1").mouseenter(function(){
    $(".1").show()
  });
  $("#thumbnail_1").mouseout(function(){
     $(".1").hide()
  });

  $("#thumbnail_2").mouseenter(function(){
    $(".2").show()
  });
  $("#thumbnail_2").mouseout(function(){
     $(".2").hide()
  });

  $("#thumbnail_3").mouseenter(function(){
    $(".3").show()
  });
  $("#thumbnail_3").mouseout(function(){
     $(".3").hide()
  });


// Google Anaylitics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55311551-1', 'auto');
  ga('send', 'pageview');


});