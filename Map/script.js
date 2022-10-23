var detailsBox = document.getElementById('details-box');
var sideInfo = document.getElementById('side-info');
var dataInfo = document.getElementsByName('data-info');




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

var csv = "State,lgbtqPop,totalPop,percentLgbt,womenPop,percentWomen,percentWhite,percentMinorities,numWomenHate,numRaceHate,numGayHate,Alabama,147000,5073187,2.90%,2527452,51.65,67.50%,32.50%,0,22,1,Alaska,25000,738023,3.39%,352337,47.81,63.36%,36.64%,2,5,1,Arizona,286000,7303398,3.92%,3609085,50.31,73.77%,26.23%,7,202,34,Arkansas,95000,3030646,3.13%,1533362,50.91,75.37%,24.63%,0,13,4,California,1859000,39995077,4.65%,19783141,50.28,56.05%,43.95%,3,882,210,Colorado,234000,5922618,3.95%,2822773,49.65,81.52%,18.48%,0,184,49,Connecticut,133000,3612314,3.68%,1828861,51.22,74.22%,25.78%,0,65,15,Delaware,40000,1008350,3.97%,499959,51.67,67.44%,32.56%,0,7,4,Florida,886000,22085563,4.01%,10842330,51.1,71.64%,28.36%,0,65,22,Georgia,425000,10916760,3.89%,5402643,51.37,57.25%,42.75%,3,132,24,Hawaii,59000,1474265,4.00%,707824,49.84,24.15%,75.85%,0,31,5,Idaho,48000,1893410,2.54%,874604,49.85,88.41%,11.59%,1,27,6,Illinois,506000,12808884,3.95%,6469081,50.87,69.79%,30.21%,1,38,11,Indiana,272000,6845874,3.97%,3396543,50.72,82.28%,17.72%,2,124,23,Iowa,106000,3219171,3.29%,1585575,50.34,89.09%,10.91%,0,12,3,Kansas,92000,2954832,3.11%,1460700,50.15,82.96%,17.04%,3,85,8,Kentucky,144000,4539130,3.17%,2265430,50.77,86.25%,13.75%,2,134,18,Louisiana,169000,4682633,3.61%,2387684,51.19,61.25%,38.75%,1,27,6,Maine,60000,1369159,4.38%,684197,51.03,93.68%,6.32%,0,40,36,Maryland,234000,6257958,3.74%,3111980,51.54,54.24%,45.76%,0,27,7,Massachusetts,335000,7126375,4.70%,3537011,51.46,76.56%,23.44%,2,188,51,Michigan,373000,10116069,3.69%,5061942,50.75,77.56%,22.44%,9,273,40,Minnesota,210000,5787008,3.63%,2811149,50.2,81.64%,18.36%,0,134,27,Mississippi,99000,2960075,3.34%,1538127,51.58,58.00%,42.00%,0,14,0,Missouri,217000,6188111,3.51%,3120159,50.95,81.29%,18.71%,3,78,18,Montana,30000,1103187,2.72%,527577,49.69,87.80%,12.20%,0,16,3,Nebraska,67000,1988536,3.37%,964149,50.12,85.31%,14.69%,0,52,8,Nevada,145000,3185426,4.55%,1510085,49.83,62.08%,37.92%,2,82,14,New Hampshire,59000,1389741,4.25%,683442,50.43,91.98%,8.02%,0,9,4,New Jersey,343000,9388414,3.65%,4544295,51.14,65.50%,34.50%,8,267,62,New Mexico,85000,2129190,3.99%,1059014,50.5,70.00%,30.00%,3,35,9,New York,913000,20365879,4.48%,10040665,51.45,62.31%,37.69%,7,200,40,North Carolina,382000,10620168,3.60%,5333560,51.35,67.58%,32.42%,1,148,25,North Dakota,20000,800394,2.50%,371110,48.8,85.68%,14.32%,0,17,3,Ohio,462000,11852036,3.90%,5953479,50.99,80.47%,19.53%,4,304,69,Oklahoma,138000,4000953,3.45%,1992725,50.46,71.15%,28.85%,0,4,2,Oregon,207000,4318492,4.79%,2105719,50.42,82.59%,17.41%,2,203,34,Pennsylvania,490000,13062764,3.75%,6525743,51,79.37%,20.63%,0,62,5,Rhode Island,44000,1106341,3.98%,543274,51.36,79.00%,21.00%,0,4,5,South Carolina,167000,5217037,3.20%,2622835,51.51,66.51%,33.49%,4,58,12,South Dakota,25000,901165,2.77%,436388,49.63,83.61%,16.39%,0,15,1,Tennessee,223000,7023788,3.17%,3467806,51.21,76.73%,23.27%,0,56,16,Texas,1053000,29945493,3.52%,14413722,50.34,69.16%,30.84%,9,288,70,Utah,104000,3373162,3.08%,1564289,49.64,85.14%,14.86%,0,20,6,Vermont,30000,646545,4.64%,315899,50.6,93.60%,6.40%,0,42,6,Virginia,308000,8757467,3.52%,4322815,50.8,66.32%,33.68%,0,123,23,Washington,342000,7901429,4.33%,3753458,49.96,73.53%,26.47%,6,309,67,West Virginia,68000,1781860,3.82%,913683,50.55,92.52%,7.48%,2,30,4,Wisconsin,207000,5935064,3.49%,2917192,50.24,84.30%,15.70%,3,43,11,Wyoming,18000,579495,3.11%,285068,49.04,90.35%,9.65%,2,11,2,"
        var stateData2D = new Array(51);
        var startInd = 0;
        var endInd = csv.indexOf(",");
        var row = 0;
        while(row < 51){
            var thisState = new Array(11);
            var col = 0;
            while(col < 11){
                //console.log(col, row, startInd, endInd);
                thisState[col] = csv.substring(startInd, endInd);
                csv = csv.substring(endInd+1);
                endInd = csv.indexOf(",");
                col++;
            }
            stateData2D[row] = thisState;
            row++;
        }

document.addEventListener("click", function (f) {
  if (f.target.tagName == "path") {
      var place = f.target.dataset;
      var infocontent = place.name;
     
        
          //console.log(stateData2D);
      
          //var nameOfClickedState = "Florida";
          var stateInd = 0;
          for(let i = 0; i < 51; i++){
              if(stateData2D[i][0] == place.name){
                  stateInd = i;
              }
          }

         //console.log(stateData2D);
        //var stateData2D
        var sName =  stateData2D[stateInd][0];
        var output = "<p class=\"text-body\"><br>home to " + stateData2D[stateInd][2] + " people!</p><br><p class=\"text-body\">Female Population: " 
        + stateData2D[stateInd][4] + " (" + stateData2D[stateInd][5] 
        + "% of total state population)</p><br><p class=\"text-body\">LGBTQ Population: " + stateData2D[stateInd][1] 
        + " (" + stateData2D[stateInd][3] + " of total state population)</p><br><p class=\"text-body\">Racial Minority Population: (" 
        + stateData2D[stateInd][7] + " of total state population)</p><br><p class=\"text-body\">In 2020, there were:" 
        + "</p><br><p>-" + stateData2D[stateInd][8] + " incidents of gender-based hate crimes</p><br><p class=\"text-body\">-" 
        + stateData2D[stateInd][10] + " incidents of sexual-orientation-based hate crimes</p><br><p class=\"text-body\">-"
        + stateData2D[stateInd][9] + " incidents of race-based hate crimes</p>";
        
        //str = infocontent + "\n" +  output
        //console.log(str)
        //sideInfo.innerHTML = str;
        sideInfo.innerHTML = "<div id=\"\">" + "<span id=\"state-name\">" + infocontent + "</span>" + output + "</div>"

        //"<span id="statetitle">" "</span>"
       // var datainfocontent = place.info;
       // dataInfo.innerHTML = datainfocontent;


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



