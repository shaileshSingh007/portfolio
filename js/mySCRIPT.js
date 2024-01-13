$(document).ready(function() {

  $("#menu2,#menu3,#menu4,#menu5,#menu6,#portP2W,#portP3W,#portP4W,#portP5W,#portP6W,#portP7W").hide();
    

    $("#menu1").click(function(){
       
        
        $("#menu2").delay(100).toggle(500);$("#menu3").delay(300).toggle(500);$("#menu4").delay(500).toggle(500);$("#menu5").delay(700).toggle(500);$("#menu6").delay(900).toggle(500);
        $(this).toggleClass('menu12 menu11');
     });

     
  
  // Create multiple divs and append them to the container
  var container = $("#animEffect");
  for (let i = 1; i <= 50; i++) {
    container.append('<div class="barss' + i + '"></div>');
  }
  for (let i = 1; i <= 50; i++) {
    $(".barss" + i).css({"animation-delay": i * 0.1 + "s"});
  }


    $("#menu2").click(function(){                 //to show home page
      $("#mainbody").css({"width":"100%","opacity":"1"});
      $("#desc1,#desc2").show(400);
      $("#mainbody1").css({"width":"4%","opacity":"0"});
      
      $("#menu2").delay(100).toggle(500);$("#menu3").delay(300).toggle(500);$("#menu4").delay(500).toggle(500);$("#menu5").delay(700).toggle(500);$("#menu6").delay(900).toggle(500);
      $("#menu1").toggleClass('menu12 menu11');
        
      
      $("#port_b").delay(1000).css("opacity","0");
      $("#mainbody2").css({"width":"3%","opacity":"0"});
      $("#mainbody3").css({"width":"2%","opacity":"0"});
      $("#mainbody4").css({"width":"1%","opacity":"0"});
      
      setTimeout(function() {location.reload();}, 1500)});
   
   $("#menu3").click(function(){                  //to show portfolio page
       $("#mainbody").css({"width":"4%","opacity":"0"});
       $("#desc1,#desc2").hide(400);
       $("#mainbody1").css({"width":"100%","opacity":"1"});
      
       $("#menu2").delay(100).toggle(500);$("#menu3").delay(300).toggle(500);$("#menu4").delay(500).toggle(500);$("#menu5").delay(700).toggle(500);$("#menu6").delay(900).toggle(500);
       $("#menu1").toggleClass('menu12 menu11');
       
                                                  //to add all divs in portfolio page 1
       $("#mainbody1").append('<div id="portP1name">Portfolio</div>');
       for(let i=1;i<=6;i++){$("#mainbody1").append('<div id="portP1W'+i+'D"></div>');}
       
       
                                                   //to add in animation in portfolio page 1
       $("#PortP1Line").css("width","90%");
       $("#PortP1dot1").css({left:'6%',opacity:'1'});
       $("#PortP1dot2").css({left:'30%',opacity:'1'});
       $("#PortP1dot3").css({left:'42%',opacity:'1'});
       $("#PortP1dot4").css({left:'54%',opacity:'1'});
       $("#PortP1dot5").css({left:'66%',opacity:'1'});
       $("#PortP1dot6").css({left:'78%',opacity:'1'});
       $("#PortP1dot7").css({left:'90%',opacity:'1'});
        
       for(let i=1;i<=6;i++){
        if(window.innerWidth<=500){
               $("#portP1W"+i+"D").delay(500 + i*300).fadeIn(100).animate({height:'20%',opacity:'1'},1000);   
      } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
              $("#portP1W"+i+"D").delay(500 + i*300).fadeIn(100).animate({height:'35%',opacity:'1'},1000);
      } else {
               $("#portP1W"+i+"D").delay(500 + i*300).fadeIn(100).animate({height:'50%',opacity:'1'},1000);
      }
                       }
      
       $("#portP1name").animate({left:'4%',opacity:'1'},3000);
       $("#portP2name").animate({left:'-10%',opacity:'0'},3000);
       //$("#portP2W").delay(200).animate({bottom:'3%',opacity:'0'},1000);

       $("#mainbody2").css({"width":"3%","opacity":"0"});
       $("#mainbody3").css({"width":"2%","opacity":"0"});
       $("#mainbody4").css({"width":"1%","opacity":"0"});

   });





// machine draft page mouse movement effect
var contaX = $("#machine_container");
var contaY = $("#machin_content");

contaX.on("mousemove", function (event) {
  // Calculate the direction and speed of scrolling based on cursor position
  var containerHeight = contaX.height();
  var contentHeight = contaY.height();
  var mouseY = event.pageY - contaX.offset().top;
  var scrollSpeed = 10; // Adjust this value for scrolling speed

  var scrollAmount = (mouseY / containerHeight) * (contentHeight - containerHeight);

  // Scroll the content vertically
  // contaX.scrollTop(scrollAmount);
  contaX.scrollTop(scrollAmount);
});
  

//poerfolio - graphic page galary next button

const GraphGalF = [
  function(){
    $("#graph_next").css("top","80%");
    $("#graphic_gal").css({"background":"url('images/pamph2.jpg') no-repeat center/cover"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 2");
      $("#graph_workDesc").slideDown(500);
    });
   },
  function(){
    $("#graph_next").css("top","70%");
    $("#graphic_gal").css({"background":"url('images/pamph3.jpg') no-repeat center/cover"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 3");
      $("#graph_workDesc").slideDown(500);
    });
   },
   function(){
    $("#graph_next").css("top","60%");
    $("#graphic_gal").css({"background":"url('images/pamph4.jpg') no-repeat center/cover"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 4");
      $("#graph_workDesc").slideDown(500);
    }); 
  },
  
  function(){
    $("#graph_next").css("top","50%");
    $("#graphic_gal").css({"background":"url('images/V_card01.jpg') no-repeat center/cover"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 5");
      $("#graph_workDesc").slideDown(500);
    });
  },
  function(){
    $("#graph_next").css("top","40%");
    $("#graphic_gal").css({"background":"url('images/V_card02.jpg') no-repeat center/cover"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 6");
      $("#graph_workDesc").slideDown(500);
    });
  },
  function(){
    $("#graph_next").css("top","30%");
    $("#graphic_gal").css({"background":"url('images/art4.jpg') no-repeat center/cover"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 7");
      $("#graph_workDesc").slideDown(500);
    });  
  },
  function(){
    $("#graph_next").css("top","20%");
    $("#graphic_gal").css({"background":"green"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 8");
      $("#graph_workDesc").slideDown(500);
    });
  },
  function(){
    $("#graph_next").css("top","10%");
    $("#graphic_gal").css({"background":"pink"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 9");
      $("#graph_workDesc").slideDown(500);
    });  
  },
  function(){
    $("#graph_next").css("top","90%");
    $("#graphic_gal").css({"background":"url('images/pamph1.jpg') no-repeat center/cover"});
    $("#graph_workDesc").slideUp(500,function(){
      $("#graph_workDesc").html("pamphlet sample 1");
      $("#graph_workDesc").slideDown(500);
    });
  }
]

let graphindex = 0;
  $("#graph_ring").click(function(){  
      GraphGalF[graphindex]();  // Call the current function
      graphindex = (graphindex + 1) % GraphGalF.length;   // Increment the index and wrap around if needed
                                 });




  //  portfolo page 3 galary mouseover effect
  $(".pic").on("mouseover",function(){
       $(this).css({"width":"80%","opacity":"1"});
       $(".pic").not(this).css({"width":"5%","opacity":"0.5"});
  });
  $(".pic").on("mouseout",function(){
    $(this).css({"width":"20%","opacity":"0.5"});
    $(".pic").not(this).css({"width":"20%","opacity":"0.5"});
});



    $("#menu4").click(function(){                 //to show Games page
      $("#mainbody").css({"width":"3%","opacity":"0"});
      $("#desc1,#desc2").hide(400);
      $("#mainbody1").css({"width":"4%","opacity":"0"});
      
      $("#menu2").delay(100).toggle(500);$("#menu3").delay(300).toggle(500);$("#menu4").delay(500).toggle(500);$("#menu5").delay(700).toggle(500);$("#menu6").delay(900).toggle(500);
      $("#menu1").toggleClass('menu12 menu11');
     
      $("#mainbody2").css({"width":"100%","opacity":"1"});
      $("#mainbody3").css({"width":"2%","opacity":"0"});
      $("#mainbody4").css({"width":"1%","opacity":"0"});
      });

      $("#menu5").click(function(){                //to show About page
        $("#mainbody").css({"width":"2%","opacity":"0"});
        $("#desc1,#desc2").hide(400);
        $("#mainbody1").css({"width":"4%","opacity":"0"});
        
        $("#menu2").delay(100).toggle(500);$("#menu3").delay(300).toggle(500);$("#menu4").delay(500).toggle(500);$("#menu5").delay(700).toggle(500);$("#menu6").delay(900).toggle(500);
        $("#menu1").toggleClass('menu12 menu11');
        
        $("#mainbody2").css({"width":"3%","opacity":"0"});
        $("#mainbody3").css({"width":"100%","opacity":"1"});
        $("#mainbody4").css({"width":"1%","opacity":"0"});
        });

        $("#menu6").click(function(){              //to show Contact page
          $("#mainbody").css({"width":"1%","opacity":"0"});
          $("#desc1,#desc2").hide(400);
          $("#mainbody1").css({"width":"4%","opacity":"0"});
          
          $("#menu2").delay(100).toggle(500);$("#menu3").delay(300).toggle(500);$("#menu4").delay(500).toggle(500);$("#menu5").delay(700).toggle(500);$("#menu6").delay(900).toggle(500);
          $("#menu1").toggleClass('menu12 menu11');
          
          $("#mainbody2").css({"width":"3%","opacity":"0"});
          $("#mainbody3").css({"width":"2%","opacity":"0"});
          $("#mainbody4").css({"width":"100%","opacity":"1"});
          });
                                                          // fortfolio next1 button coding 
  
  //scroll button in forfolio machine drafting page
  for (let i = 1; i <= 11; i++) {
    $("#machinD"+i).on("click",function() {
      $("#machin_gal").css({"background-image":'url("images/machine' + i + '.jpg")'});
      
      $(this).css({"border-radius":"40%"});
      $(".machinD").not(this).css({"border-radius":"10%"});
      

    });
  }

  //contact me codings in fortfolio page of writer
  $("#contact_W").on("click", function(){window.open('https://api.whatsapp.com/send?phone=7303099302');});
  $("#contact_Call").on("click", function(){ window.location.href = 'tel:' + 7303099302;});
  $("#contact_mail").on("click", function(){window.location.href = 'mailto:shailesh.r.c.singh@gmail.com';});
  $("#contact_Insta").on("click", function(){window.open('https://www.instagram.com/singh_the_original/?igshid=OGQ5ZDc2ODk2ZA%3D%3D');});
  $("#contact_faceb").on("click", function(){window.open('https://www.facebook.com/shailesh.r.c.singh?mibextid=LQQJ4d');});
  


     var words = ["Web Developer","Web Developer","Web Developer","W#b$ @ev$l#p(r","Gra# #%#igner","Graphic Designer","Graphic Designer","Graphic Designer","Graphic Designer","Gra#& A#(%@}cat$#+","Web Appl#*7=@ton","Web Application","Web Application","Web Application","W%# A*()\cation","W%# A*()\ic!t6on","(I/5X D#s@gn","UI/UX Design","UI/UX Design","UI/UX Design","U@/U% }e7i[g]n","Ga]U% D-s#g$gne%","Ga]%s#ge o)%3gner","Games Designer","Games Designer","Games Designer","Ga%e& D#s@g$e(","W%0t6gner","Wi0t6)n{}r","Wi0t6)n{}r","Writer","Writer","Writer","W)%t%r","W6%@]{}","Ar%t)st","Artist","Artist","Artist"]; // Array of words
     var currentIndex = 0; // Initial index
     setInterval(function() {
       $(".changeW").text(words[currentIndex]); // Set current word as text
       currentIndex++; // Increment index
       if (currentIndex >= words.length) {
         currentIndex = 0; // Reset index to 0 if it exceeds array length
       }}, 100);

      //horizontal schroll
      $("#PortP2apps").on('wheel', function(e) {
        e.preventDefault();
        const scrollLeft = this.scrollLeft;
        this.scrollLeft += e.originalEvent.deltaY;
        
      });


// writers page coding for poetry examples hide and show on button click
  var hideshow = 0; 
$("#fewpoetries").on("click", function () {
  
  if (hideshow === 0) {
    $("#fewpoetriesdiv").css({ "transform": "scale(100%)", "opacity": "1 ","filter":"blur(0px)" });
    $("#fewpoetries").text("Hide");
    hideshow = 1; // Use assignment (=) to update the value of x
  } else if (hideshow === 1) {
    $("#fewpoetriesdiv").css({ "transform": "scale(0%)", "opacity": "0","filter":"blur(10px)" });
    $("#fewpoetries").text("Click Me");
    hideshow = 0; // Use assignment (=) to update the value of x
  }
});


// schrolling games div whenever button in clicked
  var pi = null;
 for(let i=0; i<=14;i++){
    $("#game"+i).click(function(){
         
         if(window.innerWidth<=500){
          $("#gameslist").animate({left:29-i*37+"%"},1000);
         } else if(window.innerWidth>500 && window.innerWidth<=800 && window.innerHeight<window.innerWidth) {
          $("#gameslist").animate({left:31-i*31.3+"%"},1000);
         } else if(window.innerWidth>600 && window.innerWidth<=3000 && window.innerHeight>window.innerWidth) {
          $("#gameslist").animate({left:32.5-i*32.0+"%"},1000);
         }  else {
          $("#gameslist").animate({left:41-i*17.4+"%"},1000);
         }

         $(this).css({"border-color":"red"});
         $("#game"+pi).css({"border-color":"rgb(4, 70, 106)"});
         $("#game_div").animate({'background-position-x':100 - i*6.66+"%"},1000); 
         $("#game"+i+"D").css({"top":"-15%","opacity":"1"});
         $("#game"+pi+"D").css({"top":"0%","opacity":"0"});

         pi = i;
     });
 } 

 
 


 //contact page 
 $("#cont_form_submit").on("click",function(){
 var name = $("#conta_name_input").val();
 var email = $("#conta_email_input").val();
 var msg = $("#conta_msg_input").val();
 
 
 console.log(name,email,msg);
 });



});



      
      



 