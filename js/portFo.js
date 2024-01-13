$(document).ready(function() {
const PortF =[
    function(){                                                                       //web application
        $("#PortP1Line").css({width:'30%'});
        
        $("#PortP1dot1").css({left:'6%',opacity:'1'});
        $("#PortP1dot2").css({left:'30%','background':'#82CD47'});
        $("#PortP1dot3").css({left:'-15%',opacity:'0'});
        $("#PortP1dot4").css({left:'-15%',opacity:'0'});
        $("#PortP1dot5").css({left:'-15%',opacity:'0'});
        $("#PortP1dot6").css({left:'-15%',opacity:'0'});
        $("#PortP1dot7").css({left:'-15%',opacity:'0'});

        
        $("#portP1W1D").delay(1000).animate({height:"0%"},300).fadeOut(100);
        $("#portP1W2D").delay(800).animate({height:"0%"},300).fadeOut(100);
        $("#portP1W3D").delay(600).animate({height:"0%"},300).fadeOut(100);
        $("#portP1W4D").delay(400).animate({height:"0%"},300).fadeOut(100);
        $("#portP1W5D").delay(200).animate({height:"0%"},300).fadeOut(100);
        $("#portP1W6D").animate({height:"0%"},300).fadeOut(100);
        
       
        $("#mainbody1").append('<div id="portP2name">Web Applications</div>');
        if(window.innerWidth<=500){
               $("#portP2name").animate({left:'50%',opacity:'1'},1000);
        } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
          $("#portP2name").animate({left:'50%',opacity:'1'},3000);
        }  else if(window.innerWidth>=600 && window.innerWidth<3000 && window.innerHeight>window.innerWidth){
          $("#portP2name").animate({left:'50%',opacity:'1'},3000);
        }  else {
          $("#portP2name").animate({left:'26%',opacity:'1'},3000);
        }
        
        
        $("#portP2W").delay(1500).show().animate({opacity:'1'},500);
        $("#portP7W").animate({bottom:'3%',opacity:'0',easing: "easeOut"},500);
    },
  
                                                                                         // UI / UX
    function(){    //animate function does not work with psuedo element directly
        $("#PortP1Line").css({width:'42%',},1000,'linear');
        $("#PortP1dot2").css({left:'30%','background':'rgb(40, 44, 45)'});
        $("#PortP1dot3").css({left:'42%','background':'#82CD47',opacity:'1'});

        $("#portP2W").animate({bottom:'-100%',opacity:'0',easing: "easeOut"},500).fadeOut();
        $("#portP3W").show().animate({opacity:'1'},1000);
       //$("#portP2name").fadeOut(1000);
        $("#mainbody1").append('<div id="portP3name">UI/UX</div>');
        if(window.innerWidth<=500){
            $("#mainbody1 #portP2name").remove(); 
            $("#portP3name").animate({left:'50%',opacity:'1'},1000);
            } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
              $("#mainbody1 #portP2name").remove(); 
              $("#portP3name").animate({left:'50%',opacity:'1'},1000);
            } else if(window.innerWidth>=600 && window.innerWidth<3000 && window.innerHeight>window.innerWidth){
              $("#mainbody1 #portP2name").remove(); 
              $("#portP3name").animate({left:'50%',opacity:'1'},1000);
            }  else{
              $("#portP3name").animate({left:'41%',opacity:'1'},3000);
            }
        
    },
  
    function(){                                                                          //logo page 
        $("#PortP1Line").css({width:'54%'});
        $("#PortP1dot3").css({left:'42%','background':'rgb(40, 44, 45)'});
        $("#PortP1dot4").css({left:'54%','background':'#82CD47',opacity:'1'});
       
        $("#portP2W").animate({bottom:'3%',opacity:'0',easing: "easeOut"},500);
        $("#portP3W").animate({bottom:'-100%',opacity:'0',easing: "easeOut"},500).fadeOut();
        $("#portP4W").show().animate({opacity:"1"},500);
        //$("#portP3name").fadeOut(1000);
        $("#mainbody1").append('<div id="portP4name">Logo Design</div>');
        
        if(window.innerWidth<=500){
            $("#mainbody1 #portP3name").remove(); 
            $("#portP4name").animate({left:'50%',opacity:'1'},1000);
            } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
              $("#mainbody1 #portP3name").remove(); 
              $("#portP4name").animate({left:'50%',opacity:'1'},1000);
            } else if(window.innerWidth>=600 && window.innerWidth<3000 && window.innerHeight>window.innerWidth){
              $("#mainbody1 #portP3name").remove(); 
              $("#portP4name").animate({left:'50%',opacity:'1'},1000);
            }  else{
              $("#portP4name").animate({left:'51%',opacity:'1'},3000);
            }
        
       
  
    },
  
    function(){                                                                         //Graphic Design
        $("#PortP1Line").css({width:'66%',});
        $("#PortP1dot4").css({left:'54%','background':'rgb(40, 44, 45)'});
        $("#PortP1dot5").css({left:'66%','background':'#82CD47',opacity:'1'});
        
        $("#portP3W").animate({bottom:'3%',opacity:'0',easing: "easeOut"},500);
        $("#portP4W").animate({bottom:'-100%',opacity:'0',easing: "easeOut"},500).fadeOut();
        $("#portP5W").show().animate({opacity:"1"},1000);
        
        //$("#portP4name").fadeOut(1000);
        $("#mainbody1").append('<div id="portP5name">Graphic Design</div>');
        
        if(window.innerWidth<=500){
            $("#mainbody1 #portP4name").remove(); 
            $("#portP5name").animate({left:'50%',opacity:'1'},1000);
            } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
              $("#mainbody1 #portP4name").remove(); 
              $("#portP5name").animate({left:'50%',opacity:'1'},1000);
            } else if(window.innerWidth>=600 && window.innerWidth<3000 && window.innerHeight>window.innerWidth){
              $("#mainbody1 #portP4name").remove(); 
              $("#portP5name").animate({left:'50%',opacity:'1'},1000);
            }  else{
              $("#portP5name").animate({left:'63%',opacity:'1'},3000);
            }
        
        
        
  
  },

  function(){                                                                         //Graphic Design
    $("#PortP1Line").css({width:'78%',});
    $("#PortP1dot5").css({left:'66%','background':'rgb(40, 44, 45)'});
    $("#PortP1dot6").css({left:'78%','background':'#82CD47',opacity:'1'});
    
    $("#portP4W").animate({bottom:'3%',opacity:'0',easing: "easeOut"},500);
    $("#portP5W").animate({bottom:'-100%',opacity:'0',easing: "easeOut"},500).fadeOut();
    $("#portP6W").show().animate({opacity:"1"},1000);
    
    $("#mainbody1").append('<div id="portP6name">Machine Drafting</div>');

    if(window.innerWidth<=500){
        $("#mainbody1 #portP5name").remove(); 
        $("#portP6name").animate({left:'50%',opacity:'1'},1000);
        } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
          $("#mainbody1 #portP5name").remove(); 
          $("#portP6name").animate({left:'50%',opacity:'1'},1000);
        } else if(window.innerWidth>=600 && window.innerWidth<3000 && window.innerHeight>window.innerWidth){
          $("#mainbody1 #portP5name").remove(); 
          $("#portP6name").animate({left:'50%',opacity:'1'},1000);
        }  else{
          $("#portP6name").animate({left:'75%',opacity:'1'},3000);
        }


},
function(){                                                                         //Graphic Design
    $("#PortP1Line").css({width:'90%',});
    $("#PortP1dot6").css({left:'78%','background':'rgb(40, 44, 45)'});
    $("#PortP1dot7").css({left:'90%','background':'#82CD47',opacity:'1'});
    
    $("#portP5W").animate({bottom:'3%',opacity:'0',easing: "easeOut"},500);
    $("#portP6W").animate({bottom:'-100%',opacity:'0',easing: "easeOut"},500).fadeOut();
    $("#portP7W").show().animate({opacity:"1"},1000);
    
    $("#mainbody1").append('<div id="portP7name">Writer</div>');

    if(window.innerWidth<=500){
        $("#mainbody1 #portP6name").remove(); 
        $("#portP7name").animate({left:'50%',opacity:'1'},1000);
        } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
          $("#mainbody1 #portP6name").remove(); 
          $("#portP7name").animate({left:'50%',opacity:'1'},1000);
        } else if(window.innerWidth>=600 && window.innerWidth<3000 && window.innerHeight>window.innerWidth){
          $("#mainbody1 #portP6name").remove(); 
          $("#portP7name").animate({left:'50%',opacity:'1'},1000);
        }  else{
          $("#portP7name").animate({left:'89%',opacity:'1'},3000);
        }



},

function(){                                                                         //Graphic Design
        
       $("#PortP1dot7").css({"background":"black"});
       $("#portP7W").animate({bottom:'-100%',opacity:'0',easing: "easeOut"},500).fadeOut();
       
       

       
        for(let i=1;i<=6;i++){
              if(window.innerWidth<=500){
                     $("#portP1W"+i+"D").delay(500 + i*300).fadeIn(100).animate({height:'20%',opacity:'1'},1000);   
            } else if(window.innerWidth<=800 && window.innerWidth>500 && window.innerHeight<window.innerWidth){
                    $("#portP1W"+i+"D").delay(500 + i*300).fadeIn(100).animate({height:'35%',opacity:'1'},1000);
            } else if(window.innerWidth>=600 && window.innerWidth<3000 && window.innerHeight>window.innerWidth){
              $("#portP1W"+i+"D").delay(500 + i*300).fadeIn(100).animate({height:'35%',opacity:'1'},1000);
            }  else {
                     $("#portP1W"+i+"D").delay(500 + i*300).fadeIn(100).animate({height:'50%',opacity:'1'},1000);
            }
                             }
       
       $('#mainbody1 #portP2name,#mainbody1 #portP3name,#mainbody1 #portP4name,#mainbody1 #portP5name,#mainbody1 #portP6name,#mainbody1 #portP7name').remove();
       $("#portP6W").animate({bottom:'3%',opacity:'0',easing: "easeOut"},500);
       
}




];
  
  //changing page while clicking on same button again
  let currentFunctionIndex = 0;
  $("#portP1Next").click(function(){  
      PortF[currentFunctionIndex]();  // Call the current function
      currentFunctionIndex = (currentFunctionIndex + 1) % PortF.length;   // Increment the index and wrap around if needed
                                 });




});