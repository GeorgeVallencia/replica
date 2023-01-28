const btn = document.getElementById('btn');
const image = document.getElementById('image1');
const text = document.getElementById('text');

let c = 0;

function coverImage(){
    if(c == 0){
        btn.innerHTML = 'Blur';
        text.style.display = 'none';
        image.style.filter = 'blur(0)';
        c = 1;
    }else{
        btn.innerHTML = 'Remove Blur';
        text.style.display = 'block';
        image.style.filter = 'blur(20px)';
        c = 0;
    }
}