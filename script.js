function showSection(id, button = null) {

  document.querySelectorAll(".section").forEach(sec =>
    sec.classList.add("hidden")
  );

  document.getElementById(id).classList.remove("hidden");

  document.querySelectorAll(".menu button").forEach(btn =>
    btn.classList.remove("active")
  );

  if (button) {
    button.classList.add("active");
  }

  const affiliationIndex = document.getElementById("affiliation-index");
  const affiliationPage = document.getElementById("affiliation-page");

  if (affiliationIndex && affiliationPage) {
    affiliationIndex.style.display = "flex";
    affiliationPage.classList.add("hidden");
  }

  const caseIndex = document.getElementById("case-index");

  if (caseIndex) {
    caseIndex.style.display = "flex";
  }

  document.querySelectorAll(".case-page").forEach(c =>
    c.classList.add("hidden")
  );

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

}

const affiliationData = {
  "joker": {
    title: "file: arachnid dominion",
    images: [
      "image/joker2.jpg",
      "image/joker3.jpg",
      "image/joker4.jpg"
    ]
  },

  "oubliette aristocracy": {
    title: "file: oubliette aristocracy",
    images: [
      "image/oa2.jpg",
      "image/oa3.jpg",
      "image/oa1.jpg"
    ]
  },

  "inquisitio de supremacia": {
    title: "file: inquisitio de supremacia",
    images: [
      "image/inq1.jpg",
      "image/inq2.jpg",
      "image/inq4.jpg",
      "image/inq6.jpg"
    ]
  },

  "altmont charter collegium": {
    title: "file: altmont charter collegium",
    images: [
      "image/acc1.jpg",
      "image/acc2.jpg"
    ]
  },

  "baker": {
    title: "current file: 221b baker street",
    images: [
      "image/baker1.png"
    ]
  }
};

function openAffiliation(name) {
  document.getElementById("affiliation-index").style.display = "none";
  document.getElementById("affiliation-page").classList.remove("hidden");

  const data = affiliationData[name];

  document.getElementById("affiliation-title").innerText =
    data ? data.title : "unknown file";

  if (!data) {
    document.getElementById("affiliation-content").innerHTML =
      "<p>no records found</p>";
    return;
  }

  let imagesHTML = "";

  data.images.forEach(img => {
    imagesHTML += `
      <img 
        src="${img}" 
        style="
          width:100%;
          margin-top:10px;
          border:1px solid #444;
        ">
    `;
  });

  document.getElementById("affiliation-content").innerHTML = `
    <p>classified records:</p>
    ${imagesHTML}
  `;
}

function backToAffiliations() {
  document.getElementById("affiliation-index").style.display = "flex";
  document.getElementById("affiliation-page").classList.add("hidden");
}

const text = '"hey there, kiddo. you have successfully accessed my personal website. welcome to my archive...."';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}

function openCase(id) {
  document.getElementById("case-index").style.display = "none";
  document.getElementById(id).classList.remove("hidden");
}

function backToCases() {
  document.getElementById("case-index").style.display = "flex";
  document.querySelectorAll(".case-page").forEach(c => c.classList.add("hidden"));
}
window.addEventListener("DOMContentLoaded", () => {

  const fingerprint = document.getElementById("fingerprint");
  const scanStatus = document.getElementById("scan-status");

  if (!fingerprint) return;

  let timer = null;
  let state = "idle"; 

  function setStatus(text) {
    scanStatus.innerText = text;
  }

  function startScan(e) {
    e.preventDefault();

    document.body.style.overflow = "hidden";
    
    if (state !== "idle") return;

    state = "holding";
    setStatus("scanning...");

    timer = setTimeout(() => {

      state = "verified";
      setStatus("identity verified");

      setTimeout(() => {

        document.getElementById("scanner-screen").style.display = "none";
        document.getElementById("main-site").style.display = "block";

        document.getElementById("typing-text").innerHTML = "";
        i = 0;
        typeWriter();

         document.body.style.overflow = "auto";

      }, 1000);

    }, 2500);
  }

  function stopScan(e) {
    if (e) e.preventDefault();

    if (state === "verified") return;

    state = "idle";
    clearTimeout(timer);
    setStatus("press and hold to scan");
  }

  fingerprint.addEventListener("contextmenu", e => e.preventDefault());

  fingerprint.addEventListener("pointerdown", startScan);
  fingerprint.addEventListener("pointerup", stopScan);
  fingerprint.addEventListener("pointercancel", stopScan);
  fingerprint.addEventListener("pointerleave", stopScan);
  fingerprint.setAttribute("draggable", "false");
  fingerprint.style.userSelect = "none";
  fingerprint.style.webkitUserSelect = "none";
  fingerprint.style.touchAction = "none";

});

function openSofa() {
  window.open("https://www.imdb.com/title/tt2127300/", "_blank");
}

function openPaluerza() {
  window.open("https://www.imdb.com/title/tt0758732/", "_blank");
}