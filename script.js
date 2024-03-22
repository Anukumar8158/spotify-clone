//initializing
let AudioIndex=0;
let masterplay=document.getElementById("masterplay");
let myprogrees=document.getElementById("myprogress");
let AudioElement =new Audio('128-Pani Di Gal - Jugni (My First Album) 128 Kbps.mp3');
let gif=document.getElementById("gif");
let songlist=document.getElementsByClassName("songItem")

 

let song=[
    
    {songName:"Pani Di Gal - Jugni", filePath:"abc",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"128-Marjaneya - Neha Kakkar 128 Kbps.mp3",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"abcd", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    
]
console.log(songlist);

//to change the cover of the song
 

//handling play and pause
masterplay.addEventListener('click',()=>{
    var newImage=document.getElementById('backward');
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        console.log("playing")
         
        gif.style.opacity=1;
        
        //masterplay.remove("C:\Users\Hp\Desktop\new project\play-button-svgrepo-com.svg");
        //masterplay.append(" ");
    }
    else{
      AudioElement.pause();
      console.log("audio is paused  now click again to play")
      //masterplay.remove("C:\Users\Hp\Desktop\new project\play-button-svgrepo-com.svg");
        //masterplay.append(" ");
        gif.style.opacity=0;
    }
})
 
 
//event listening to progree bar
AudioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    progress=parseInt((AudioElement.currentTime/AudioElement.duration)*100)
    console.log(progress);
    myprogrees.value=progress;      

})

//changing progress bar with song duration

myprogrees.addEventListener('change',()=>{
    AudioElement.currentTime = (myprogrees.value*AudioElement.duration)/100;
})




