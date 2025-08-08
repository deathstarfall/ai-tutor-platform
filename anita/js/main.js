function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    
    if(h == 0){
        h = 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    var clock = document.getElementById("clock");
    if (!clock) return;
    clock.innerText = time;
    clock.textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function footer() {
    var year = new Date().getFullYear();
    var footer = document.getElementById("footer");
    footer.innerHTML = `&copy <a href="" class="footer text">Anita</a> ${year}`
}

function changeTheme() {
    var wrapper = document.getElementById("wrapper");
    var themechanger = document.getElementById("themechanger");
    var content = document.getElementById("content");
    if (wrapper.classList.contains("purple")) {
        console.log('Theme: Purple');
        setCookie("theme", "gray", 7);
        content.classList.add("fade");
        setTimeout(() => {
            wrapper.classList.remove("purple");
            wrapper.classList.add("gray");
            themechanger.innerHTML = "<i class='fas fa-sun fa-flip-horizontal'></i>"
            if (!wrapper.classList.contains("gray")) return;
            content.classList.remove("fade");
        }, 1000);
    } else {
        console.log('Theme: Gray');
        setCookie("theme", "purple", 7);
        content.classList.add("fade");
        setTimeout(() => {
            wrapper.classList.remove("gray");
            wrapper.classList.add("purple");
            themechanger.innerHTML = "<i class='fas fa-moon fa-flip-horizontal'></i>"
            if (!wrapper.classList.contains("purple")) return;
            content.classList.remove("fade");
        }, 1000);
    };
}

function checktheme() {
    var wrapper = document.getElementById("wrapper");
    var themechanger = document.getElementById("themechanger");
    var content = document.getElementById("content");
    var theme = getCookie("theme");
    if (!theme) setCookie("theme", "purple", 1);
    console.log(theme);
    if (theme == "gray") {
        console.log('Theme: Gray')
        wrapper.classList.add("gray");
        themechanger.innerHTML = "<i class='fas fa-sun fa-flip-horizontal'></i>";
    } else {
        console.log('Theme: Purple')
        wrapper.classList.add("purple");
        themechanger.innerHTML = "<i class='fas fa-moon fa-flip-horizontal'></i>";
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

