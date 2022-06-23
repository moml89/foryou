let alles_li = document.getElementsByTagName("li");
for(let i = 0; i < alles_li.length; i++){
    alles_li[i].onclick = function(){
        audio.src = this.id;
        audio.play();
    }
}