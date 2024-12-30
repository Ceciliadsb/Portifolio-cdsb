
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".resume-btn");
    const contents = document.querySelectorAll(".resume-content");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const target = button.dataset.section;

            contents.forEach((content) => content.classList.remove("active"));
            buttons.forEach((btn) => btn.classList.remove("active"));

            document.getElementById(target).classList.add("active");
            button.classList.add("active");
        });
    });
})


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        slidesPerView: 3, 
        centeredSlides: true, 
        spaceBetween: 10, 
        loop: true, 
        grabCursor: true, 
        navigation: {
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination", 
            clickable: true,
        },
    });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value || "Sem assunto";
    const message = document.getElementById("message").value;

    const phoneNumber = "5514998484140";

   
    const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0AAssunto: ${subject}%0AMensagem: ${message}`;

   
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
});

function openModal(title, images, description, projectLink) {
    document.body.style.overflow = "hidden"; 
    let content;

    
    if (Array.isArray(images)) {
        
        content = `
            <div class="swiper mySwiperModal">
                <div class="swiper-wrapper">
                    ${images.map(imageUrl => `
                        <div class="swiper-slide">
                            <img src="${imageUrl}" style="width: 90%; border-radius: 8px;">
                        </div>
                    `).join('')}
                </div>
                <div class="swiper-pagination"></div>
            </div>
        `;
    } else {
        content = `
            <img src="${images}" style="width: 100%; border-radius: 8px; margin-top: 10px;">
        `;
    }

    Swal.fire({
        title: title,
        html: `
            <div>
                ${content}
                <p style="margin-top: 15px;">${description}</p>
                ${projectLink ? `<a href="${projectLink}" target="_blank" style="
                    display: inline-block;
                    margin-top: 15px;
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                ">Acesse o Projeto</a>` : ''}
            </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        width: '800px',
        backdrop: `rgba(0, 0, 0, 0.8)`,
        didOpen: () => {
            
            if (Array.isArray(images)) {
                new Swiper('.mySwiperModal', {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                });
            }
        },
        didClose: () => {
            
            document.body.style.overflow = "auto";
        }
    });
}


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 }, 
    },
});

