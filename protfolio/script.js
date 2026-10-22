// ========================================
// Typing Animation
// ========================================

const text = [
    "Full Stack Developer"
    
];

let speed = 120;

const textElement =
    document.querySelector(".typing-text");

let textIndex = 0;

let charIndex = 0;


function typeText(){

    if(
        charIndex <
        text[textIndex].length
    ){

        textElement.innerHTML +=
            text[textIndex]
            .charAt(charIndex);

        charIndex++;

        setTimeout(
            typeText,
            speed
        );

    }

    else{

        setTimeout(
            eraseText,
            2000
        );

    }

}


function eraseText(){

    if(
        charIndex > 0
    ){

        textElement.innerHTML =
            text[textIndex]
            .substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(
            eraseText,
            70
        );

    }

    else{

        setTimeout(
            typeText,
            500
        );

    }

}


window.onload = typeText;


// ========================================
// Reveal Animation
// ========================================

const reveals =
    document.querySelectorAll(
        ".reveal"
    );


window.addEventListener(
    "scroll",
    revealSection
);


function revealSection(){

    for(
        let i = 0;
        i < reveals.length;
        i++
    ){

        let windowHeight =
            window.innerHeight;


        let revealTop =
            reveals[i]
            .getBoundingClientRect()
            .top;


        let revealPoint = 100;


        if(
            revealTop <
            windowHeight - revealPoint
        ){

            reveals[i]
                .classList
                .add("active");

        }

    }

}


// Page load par check

revealSection();


// ========================================
// Modern Cursor Animation
// ========================================

const cursor =
    document.querySelector(
        ".cursor"
    );


document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

    }
);


// ========================================
// Hover Animation
// ========================================

const links =
    document.querySelectorAll(
        "a, button, .skill-card, .project-card, .certificate-card"
    );


links.forEach(
    (item) => {

        item.addEventListener(
            "mouseenter",
            () => {

                cursor.classList.add(
                    "active"
                );

            }
        );


        item.addEventListener(
            "mouseleave",
            () => {

                cursor.classList.remove(
                    "active"
                );

            }
        );

    }
);


// ========================================
// Certificate Full View
// ========================================

const certificateModal =
    document.getElementById(
        "certificateModal"
    );


const certificateModalImage =
    document.getElementById(
        "certificateModalImage"
    );


// Open Certificate

function openCertificate(
    imagePath
){

    certificateModalImage.src =
        imagePath;


    certificateModal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


// Close Certificate

function closeCertificate(){

    certificateModal.classList.remove(
        "show"
    );


    certificateModalImage.src =
        "";


    document.body.style.overflow =
        "auto";

}


// Certificate ke bahar click

certificateModal.addEventListener(
    "click",
    (e) => {

        if(
            e.target ===
            certificateModal
        ){

            closeCertificate();

        }

    }
);


// ESC key

document.addEventListener(
    "keydown",
    (e) => {

        if(
            e.key === "Escape"
        ){

            closeCertificate();

        }

    }
);


// ========================================
// GitHub Projects Auto Fetch
// ========================================

const username =
    "princepatel7477";


fetch(
    `https://api.github.com/users/${username}/repos`
)

.then(
    res => res.json()
)

.then(
    data => {

        const container =
            document.getElementById(
                "projectContainer"
            );


        data.slice(
            0,
            6
        ).forEach(
            repo => {

                container.innerHTML += `

                    <div class="project-card">

                        <h2>
                            ${repo.name}
                        </h2>

                        <p>

                            ${
                                repo.description ||
                                "No description"
                            }

                        </p>

                        <a
                            href="${repo.html_url}"
                            target="_blank">

                            <button
                                class="project-btn">

                                View Project

                            </button>

                        </a>

                    </div>

                `;

            }
        );


        // GitHub projects cursor

        const newProjectCards =
            container.querySelectorAll(
                ".project-card"
            );


        newProjectCards.forEach(
            (item) => {

                item.addEventListener(
                    "mouseenter",
                    () => {

                        cursor.classList.add(
                            "active"
                        );

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    () => {

                        cursor.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

    }
)

.catch(
    error => {

        console.log(
            "GitHub Projects Error:",
            error
        );

    }
);