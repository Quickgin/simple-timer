

$(document).on('pageinit', '#pageone',  function(){

    console.log("pageone - pageinit");
    document.getElementById("result").innerHTML="Tomato Number:"+localStorage.count;
    
    
});


var minute,second;
    minute=1;
    second=00;
    var int;


    //重置函数
function Reset()
    {
      createDialog();
      
    }
    //开始函数
function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you sure to reset the timer?',  // message
        dialogDismissed,         // callback
        'Notification!',            // title
        ['Sure', 'Cancel']                  // buttons
    );

}    

function Reset1(){
    window.clearInterval(int);
      minute=1;  
      second=0;
      document.getElementById('timetext').value='1:00';
}
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: Reset1()});
   	else if(buttonIndex==2) new Toast({content: 'OK.', duration: 3000});

}




    function start()
    {
      int=setInterval(timer,1000);
    }
    //计时函数
function timer(Count)
{
    second=second-1;
        if(second<00)
        {
            second=59;
            minute=minute-1;
        }
    
    if(second==0&&minute==0){
        stop();
        count();
        navigator.notification.beep(3);	

        
    }
document.getElementById('timetext').value=minute+':'+second;
}

 function count(){
//     localStorage.count= 0;
 //    var count1 = localStorage.count;
 //     count1=count1+1;
  //    document.getElementById('counttext').value=count1;
     if(typeof(Storage) !== "undefined"){
         if (localStorage.count) {
            localStorage.count = Number(localStorage.count)+1;
        } else {
            localStorage.count = 1;
        }
         document.getElementById("result").innerHTML="Tomato Number:"+localStorage.count;
     }
 }




    //暂停函数
    function stop()
    {
      window.clearInterval(int);
    }


function detail1(){
    if (localStorage.count<2)
	{
        console.log("not enough");
		alert("You tomatoes are not enough!");
    }
    else if (localStorage.count==2||localStorage.count>2)
        {
            window.location.href="#detailpage1";
        }
}


function detail2(){
    if (localStorage.count<4)
	{
        console.log("not enough");
		alert("You tomatoes are not enough!");
    }
    else if (localStorage.count==4||localStorage.count>4)
        {
            window.location.href="#detailpage1";
        }
}