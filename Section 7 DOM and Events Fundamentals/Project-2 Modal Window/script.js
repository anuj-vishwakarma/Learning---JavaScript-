'use-strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");
console.log(btnsOpenModel);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModel.length; i++) {
    (btnsOpenModel[i].addEventListener('click', openModal));
}


// btnCloseModal.addEventListener('click', function () {
//     closeModal();
// })

btnCloseModal.addEventListener('click', closeModal);



// overlay.addEventListener('click', function () {
//     closeModal();
// })

overlay.addEventListener('click', closeModal);

// keydown means this event will hit as soon as we hit a key on keyboard, keyup is also there which is the opposite i.e. it will hit as soon as we lift of the hand from the key 
document.addEventListener('keydown', function (keyPressEvent) {
    if (keyPressEvent.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
