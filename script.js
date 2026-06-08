const text =
"Aspiring Software Engineer | Data Science & AI Enthusiast";

let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

type();