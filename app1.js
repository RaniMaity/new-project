
    let gameseq=[];
    let userseq=[];
    let btns=["yellow","red","blue","pink"];//class store in array
    let started=false;
    let level=0;
    let h3=document.querySelector("h3");

    document.addEventListener("keypress",function(){
        if(started==false){
            console.log("game is started")
            started=true;
            levelup();
        }
        
    })
    function btnFlash(btion){//btn is argument
        
        btion.classList.add("flash")//btn er class flash.
        setTimeout(function(){
            btion.classList.remove("flash")
        },1000);
        

    }
    function userFlash(btion){//btn is argument
        
        btion.classList.add("userflash")//btn er class flash.
        setTimeout(function(){
            btion.classList.remove("userflash")
        },1000);
        

    }
    
    function levelup(){
        userseq=[];//reset userseq update according to   newvalue
        level++;
        h3.innerText=`level:${level}`;
        //choose random
        let randidx=Math.floor(Math.random()*3);
        let randcolor=btns[randidx];
        let randbtn=document.querySelector(`.${randcolor}`)//yellow class whose have i.e class select kre
        console.log(randidx);//0 index in array
        console.log(randcolor);//yellow in array
        console.log(randbtn);//<div class="btn yellow" type="button">4</div>
        gameseq.push(randcolor);
        console.log(gameseq);
        btnFlash(randbtn);
        

    }
    function checkAns(idx){
       // console.log("curr level:",level);
      // let idx=level-1;
       if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
       }
       else{
        h3.innerText=`Game over!your score was  <b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
       }
    }
    function btnpress(){
        let btn=this;
        userFlash(btn);
        usercolor=btn.getAttribute("id")
       
        userseq.push(usercolor);
        console.log(usercolor);
        checkAns(userseq.length-1);
    }
    let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);

    }
     function reset(){
     
    started=false;
    let gameseq=[];
    let userseq=[];
    let level=0;

    };
    

    
    
    
    






    