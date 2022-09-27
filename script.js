const typeWriter = function(txtElement,words,wait=3000){
    this.txtElement = txtElement;
    this.words=words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

//Type Method
typeWriter.prototype.type = function(){
    //current index of word
    const current = this.wordIndex % this.words.length;

    //Get full text of current word
    const fulltxt = this.words[current];
    // console.log(fulltxt);

    //Check if deleting
    if(this.isDeleting){
        //remove char
        this.text = fulltxt.substring(0,this.text.length-1);
    }else{
        //Add a char
        this.text = fulltxt.substring(0,this.text.length+1);
    }

    //insert txt into element
    this.txtElement.innerHTML =`<span class="txt">${this.text}</span>`;

    //initial Type Speed
    let typespeed = 200;
    if(this.isDeleting){
        typespeed/=2;
    }
    if(!this.isDeleting && this.text === fulltxt){
        //make pause at end
        typespeed =this.wait;
        //set delete to true
        this.isDeleting=true;
    }else if(this.isDeleting && this.text===''){
        this.isDeleting=false;
        //move to next incex
        this.wordIndex++;
        //pause before start writing
        typespeed=1000;
    }
    setTimeout(()=> this.type(),typespeed);
}

// Initialise on DOM Load

document.addEventListener('DOMContentLoaded',init);

// Initialise App

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words =JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Initialise typewriter
    new typeWriter(txtElement,words,wait);
}


// !-------------------------------------using new ES6 class--------------------------------!
// class typeWriter{
//     constructor(txtElement,words,wait=3000){
//         this.txtElement = txtElement;
//         this.words=words;
//         this.text = '';
//         this.wordIndex = 0;
//         this.wait = parseInt(wait,10);
//         this.type();
//         this.isDeleting = false;
//     }

//     type(){
            // //current index of word
            // const current = this.wordIndex % this.words.length;

            // //Get full text of current word
            // const fulltxt = this.words[current];
            // // console.log(fulltxt);

            // //Check if deleting
            // if(this.isDeleting){
            //     //remove char
            //     this.text = fulltxt.substring(0,this.text.length-1);
            // }else{
            //     //Add a char
            //     this.text = fulltxt.substring(0,this.text.length+1);
            // }
        
            // //insert txt into element
            // this.txtElement.innerHTML =`<span class="txt">${this.text}</span>`;
        
            // //initial Type Speed
            // let typespeed = 300;
            // if(this.isDeleting){
            //     typespeed/=2;
            // }
            // if(!this.isDeleting && this.text === fulltxt){
            //     //make pause at end
            //     typespeed =this.wait;
            //     //set delete to true
            //     this.isDeleting=true;
            // }else if(this.isDeleting && this.text===''){
            //     this.isDeleting=false;
            //     //move to next incex
            //     this.wordIndex++;
            //     //pause before start writing
            //     typespeed=500;
            // }
            // setTimeout(()=> this.type(),500);
//     }
// }

// // Initialise on DOM Load
// document.addEventListener('DOMContentLoaded',init);

// // Initialise App
// function init(){
//     const txtElement = document.querySelector('.txt-type');
//     const words =JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     //Initialise typewriter
//     new typeWriter(txtElement,words,wait);
// }