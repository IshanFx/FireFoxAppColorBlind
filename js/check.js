 
$('#result').click(function(){
	var image1 = $('#image1').attr('Value');
    var image2 = $('#image2').attr('Value');
    var image3 = $('#image3').attr('Value');
    var image4 = $('#image4').attr('Value');
    var image5 = $('#image5').attr('Value');
    var image6 = $('#image6').attr('Value');
    var image7 = $('#image7').attr('Value');
    var image8 = $('#image8').attr('Value');
    var image9 = $('#image9').attr('Value');
   
    var marks = 0;
    
    if(image1=="" || image2=="" || image3=="" || image4=="" || image5=="" || image6=="" || image7==""|| image8=="" || image9==""){
        alert('Please Enter All Numbers You Can See');
    }
    
    else{
        if(image1==16){
            marks++;
        }
        if(image2==10){
            marks++;
        }
        if(image3==6){
            marks++;
        }
        if(image4==7){
            marks++;
        }
        if(image5==42){
            marks++;
        }
        if(image6==29){
            marks++;
        }
        if(image7==5){
            marks++;
        }
        if(image8==57){
            marks++;
        }
        if(image9==2){
            marks++;
        }
        var marks =Math.round((marks/9)*100);
    
    if(marks==100){
        alert('Your Mark is 100%.\n Completely Healthy');
    }
    else if(marks<100 ){
      alert('Your Mark is '+marks+'% .\n You have a problem');
    }
    
    }
    
    
    
   
});