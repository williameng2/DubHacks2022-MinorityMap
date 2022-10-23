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

var csv = "State,lgbtqPop,totalPop,percentLgbt,womenPop,percentWomen,percentWhite,percentMinorities,Alabama,147000,5073187,2.90%,2527452,51.65,67.50%,32.50%,Alaska,25000,738023,3.39%,352337,47.81,63.36%,36.64%,Arizona,286000,7303398,3.92%,3609085,50.31,73.77%,26.23%,Arkansas,95000,3030646,3.13%,1533362,50.91,75.37%,24.63%,California,1859000,39995077,4.65%,19783141,50.28,56.05%,43.95%,Colorado,234000,5922618,3.95%,2822773,49.65,81.52%,18.48%,Connecticut,133000,3612314,3.68%,1828861,51.22,74.22%,25.78%,Delaware,40000,1008350,3.97%,499959,51.67,67.44%,32.56%,Florida,886000,22085563,4.01%,10842330,51.1,71.64%,28.36%,Georgia,425000,10916760,3.89%,5402643,51.37,57.25%,42.75%,Hawaii,59000,1474265,4.00%,707824,49.84,24.15%,75.85%,Idaho,48000,1893410,2.54%,874604,49.85,88.41%,11.59%,Illinois,506000,12808884,3.95%,6469081,50.87,69.79%,30.21%,Indiana,272000,6845874,3.97%,3396543,50.72,82.28%,17.72%,Iowa,106000,3219171,3.29%,1585575,50.34,89.09%,10.91%,Kansas,92000,2954832,3.11%,1460700,50.15,82.96%,17.04%,Kentucky,144000,4539130,3.17%,2265430,50.77,86.25%,13.75%,Louisiana,169000,4682633,3.61%,2387684,51.19,61.25%,38.75%,Maine,60000,1369159,4.38%,684197,51.03,93.68%,6.32%,Maryland,234000,6257958,3.74%,3111980,51.54,54.24%,45.76%,Massachusetts,335000,7126375,4.70%,3537011,51.46,76.56%,23.44%,Michigan,373000,10116069,3.69%,5061942,50.75,77.56%,22.44%,Minnesota,210000,5787008,3.63%,2811149,50.2,81.64%,18.36%,Mississippi,99000,2960075,3.34%,1538127,51.58,58.00%,42.00%,Missouri,217000,6188111,3.51%,3120159,50.95,81.29%,18.71%,Montana,30000,1103187,2.72%,527577,49.69,87.80%,12.20%,Nebraska,67000,1988536,3.37%,964149,50.12,85.31%,14.69%,Nevada,145000,3185426,4.55%,1510085,49.83,62.08%,37.92%,New Hampshire,59000,1389741,4.25%,683442,50.43,91.98%,8.02%,New Jersey,343000,9388414,3.65%,4544295,51.14,65.50%,34.50%,New Mexico,85000,2129190,3.99%,1059014,50.5,70.00%,30.00%,New York,913000,20365879,4.48%,10040665,51.45,62.31%,37.69%,North Carolina,382000,10620168,3.60%,5333560,51.35,67.58%,32.42%,North Dakota,20000,800394,2.50%,371110,48.8,85.68%,14.32%,Ohio,462000,11852036,3.90%,5953479,50.99,80.47%,19.53%,Oklahoma,138000,4000953,3.45%,1992725,50.46,71.15%,28.85%,Oregon,207000,4318492,4.79%,2105719,50.42,82.59%,17.41%,Pennsylvania,490000,13062764,3.75%,6525743,51,79.37%,20.63%,Rhode Island,44000,1106341,3.98%,543274,51.36,79.00%,21.00%,South Carolina,167000,5217037,3.20%,2622835,51.51,66.51%,33.49%,South Dakota,25000,901165,2.77%,436388,49.63,83.61%,16.39%,Tennessee,223000,7023788,3.17%,3467806,51.21,76.73%,23.27%,Texas,1053000,29945493,3.52%,14413722,50.34,69.16%,30.84%,Utah,104000,3373162,3.08%,1564289,49.64,85.14%,14.86%,Vermont,30000,646545,4.64%,315899,50.6,93.60%,6.40%,Virginia,308000,8757467,3.52%,4322815,50.8,66.32%,33.68%,Washington,342000,7901429,4.33%,3753458,49.96,73.53%,26.47%,West Virginia,68000,1781860,3.82%,913683,50.55,92.52%,7.48%,Wisconsin,207000,5935064,3.49%,2917192,50.24,84.30%,15.70%,Wyoming,18000,579495,3.11%,285068,49.04,90.35%,9.65%,"
var stateData2D = new Array(51);
    var startInd = 0;
    var endInd = csv.indexOf(",");
    var row = 0;
    while(row < 51){
        var thisState = new Array(8);
        var col = 0;
        while(col < 8){
            //console.log(col, row, startInd, endInd);
            thisState[col] = csv.substring(startInd, endInd);
            csv = csv.substring(endInd+1);
            endInd = csv.indexOf(",");
            col++;
        }
        stateData2D[row] = thisState;
        row++;
    }
    console.log(stateData2D);