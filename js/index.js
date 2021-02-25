window.onload = function() {handleStart()};
window.onscroll = function() {handleNavBalls()};
window.onresize = function() {correctSize()};

function handleStart() {
  correctSize()
  document.getElementById('about-tip-text').setAttribute("style", "color: #222;");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function correctSize() {
  let windowHeight = window.innerHeight;
  let footerHeight = document.getElementById("page-footer").offsetHeight + 45;
  document.getElementById('about-ball').setAttribute("style", "background-color: #66ccff;");
  document.getElementById('about-section').setAttribute("style", `height: ${windowHeight-footerHeight}px;`);
  document.getElementById('experience-section').setAttribute("style", `height: ${windowHeight-footerHeight}px;`);
  document.getElementById('projects-section').setAttribute("style", `height: ${windowHeight-footerHeight}px;`);
}

function handleNavBalls() {
  let windowHeight = window.innerHeight;
  let sectionElems = {
    'about': document.getElementById("about-section"),
    'experience': document.getElementById("experience-section"),
    'projects': document.getElementById("projects-section")
  }

  if(sectionElems.experience.getBoundingClientRect()['top'] < windowHeight/2 - 60 && sectionElems.projects.getBoundingClientRect()['top'] > windowHeight/2 - 60) {
    document.getElementById('about-ball').setAttribute("style", "background-color: #66ccff00;");
    document.getElementById('experience-ball').setAttribute("style", "background-color: #66ccff;");
    document.getElementById('projects-ball').setAttribute("style", "background-color: #66ccff00;");
    document.getElementById('about-tip-text').setAttribute("style", "color: rgba(34, 34, 34, 0);");
    document.getElementById('experience-tip-text').setAttribute("style", "color: #222;");
    document.getElementById('projects-tip-text').setAttribute("style", "color: rgba(34, 34, 34, 0);");
  } else if (sectionElems.projects.getBoundingClientRect()['top'] < windowHeight/2 - 60) {
    document.getElementById('experience-ball').setAttribute("style","background-color: #66ccff00;");
    document.getElementById('projects-ball').setAttribute("style", "background-color: #66ccff;");
    document.getElementById('experience-tip-text').setAttribute("style", "color: rgba(34, 34, 34, 0);");
    document.getElementById('projects-tip-text').setAttribute("style", "color: #222;");
    document.getElementById('about-tip-text').setAttribute("style", "color: rgba(34, 34, 34, 0);");
  } else {
    document.getElementById('about-ball').setAttribute("style", "background-color: #66ccff;");
    document.getElementById('experience-ball').setAttribute("style","background-color: #66ccff00;");
    document.getElementById('projects-ball').setAttribute("style", "background-color: #66ccff00;");
    document.getElementById('experience-tip-text').setAttribute("style", "color: rgba(34, 34, 34, 0);");
    document.getElementById('projects-tip-text').setAttribute("style", "color: rgba(34, 34, 34, 0);");
    document.getElementById('about-tip-text').setAttribute("style", "color: #222;");
  }
}

function jumpToSection(id) {
  document.getElementById(id).scrollIntoView();
}