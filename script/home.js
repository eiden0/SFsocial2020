function fadeText(){
    moveUp(document.querySelector(".main"));
    var button = document.getElementById("home_do");
    if(button.innerHTML === "Home") button.innerHTML = "What we do";
    else button.innerHTML = "Home";
    var logo = document.getElementById("home_logo");
    var prayatn = document.getElementById("prayatn");
    var text = document.getElementById("what_we_do_text");
    var init = document.getElementById("home_initiative");
    
    if(init.style.display === "none"){
        prayatn.classList.remove('move_text_down');
        logo.classList.remove('move_logo_down');
        prayatn.classList.add('move_text_up');
        logo.classList.add('move_logo_up');
        text.classList.remove("text_fade_in");
        text.classList.add("text_fade_out");
        init.style.display = "block";
    }
    else {
        prayatn.classList.remove('move_text_up');
        logo.classList.remove('move_logo_up');
        prayatn.classList.add('move_text_down')
        logo.classList.add('move_logo_down');
        text.classList.remove("text_fade_out");
        text.classList.add('text_fade_in');
        init.style.display = "none";
    }
}

function scrollWindow(){
    moveDown(document.querySelector(".main"));
}