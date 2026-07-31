// console.log("Hello!");

const progress = document.querySelector(".progress")
const loading = document.querySelector(".loading")

let i = 0;
const fakeUploadPerc = [0 , 10 , 25 , 40 , 42 , 60 , 70 , 75 , 90 , 100]

const interval = setInterval(() => {
    progress.style.width = fakeUploadPerc[i] + "%";
    loading.innerHTML = fakeUploadPerc[i] + "%";
    i++;
    if (i === fakeUploadPerc.length) {
        clearInterval(interval);
        loading.innerHTML = "Completed";
    }
} , 1000)