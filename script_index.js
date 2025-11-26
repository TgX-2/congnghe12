const totalBackgrounds = 4;
let current = 1;
let showingFirst = true;

// Sửa đúng selector ID
const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

const photoInfo = document.getElementById('photo-info');
const loc = document.getElementById('name');
const photog = document.getElementById('descript');

const info = [
  { name: "Diode chỉnh lưu", descript: "Đi ốt"},
  { name: "Transistor lưỡng cực", descript: "trans lưỡng tính"},
  { name: "Mạch tích hợp IC", descript: "m bị ẩm IC à?"},
  { name: "Diode ổn áp", descript: "Ok, ổn áp"}
];

bg1.style.backgroundImage = `url('media/image/index_bg${current}.jpg')`;
updateInfo(current);

function updateInfo(index) {
  const { name, descript } = info[index - 1];
  loc.textContent = name;
  photog.textContent = `${descript}`;

  photoInfo.classList.remove('visible');
  setTimeout(() => photoInfo.classList.add('visible'), 200);
}

function changeBackground() {
  const next = current + 1 > totalBackgrounds ? 1 : current + 1;
  const newImage = `url('media/image/index_bg${next}.jpg')`;

  if (showingFirst) {
    bg2.style.backgroundImage = newImage;
    bg2.classList.add('active');
    bg1.classList.remove('active');
  } else {
    bg1.style.backgroundImage = newImage;
    bg1.classList.add('active');
    bg2.classList.remove('active');
  }

  showingFirst = !showingFirst;
  current = next;
  updateInfo(current);
}

setInterval(changeBackground, 5000);


const pages = [
  "subpage/diode.html",
  "subpage/transistor.html",
  "subpage/ic.html",
  "subpage/diode.html"
];

document.getElementById("next-page").addEventListener("click", function () {
  window.location.href = pages[current - 1];
});

const btn = document.getElementById("next-page");
const backgrounds = document.querySelectorAll(".bg");

btn.addEventListener("mouseenter", () => {
  backgrounds.forEach(bg => bg.classList.add("bright"));
});

btn.addEventListener("mouseleave", () => {
  backgrounds.forEach(bg => bg.classList.remove("bright"));
});
