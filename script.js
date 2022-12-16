const mark_all = document.querySelector(".mark-as-read");
const unread_count = document.querySelector(".unread-count");
let number_of_unread = document.querySelectorAll(".unread");

unread_count.innerText = number_of_unread.length;

mark_all.addEventListener('click', ()=>{
    [...number_of_unread].map((notification)=>{
        notification.classList.remove("unread");
    })
    unread_count.innerText = document.querySelectorAll(".unread").length;
})
