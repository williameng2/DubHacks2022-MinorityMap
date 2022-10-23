var detailsBox = document.getElementById('details-box');
var sideInfo = document.getElementById('side-info');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

document.addEventListener("click", function (f) {
  if (f.target.tagName == "path") {
      var infocontent = f.target.dataset.info;
      sideInfo.innerHTML = infocontent;
      sideInfo.style.opacity = "100%";
      sideInfo.style.zIndex = 1;
  }
  else {
    sideInfo.style.opacity = "0%";
    sideInfo.style.zIndex = 0;
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};

