/* jQuery initializations */
$(function() {
  // Toggles & toggle icons
  $('.toggler').click(function() {
    $(this).next('div').slideToggle();
    if ($(this).attr('class').includes('glyphicon-plus-sign'))
      $(this).removeClass('glyphicon-plus-sign').addClass('glyphicon-minus-sign');
    else
      $(this).removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign');
  });
});
/* end jQuery initializations */


// writing mode (LTR / TTB) button handling
function switchWritingMode(mode) {
  document.getElementById("output").style["writing-mode"] = mode;
}


// update rollover info text
function rolloverResult(tangraph) {
  document.getElementById("rollover-info").innerHTML = tangraph + ' ' + tangraphInfo[tangraph][3];
}


// update list of result tangraphs on page; max 80
function updatePageResults(maxChars=80) {
  var resultUl = document.getElementById("result-list");
  resultUl.innerHTML = '';
  for (const i in resultList) {
    if (i >= maxChars) break;
    var tangraph = resultList[i];
    resultUl.innerHTML +=
      '<li class="results-item" onmouseover="rolloverResult(\'' + tangraph +
      '\');" onclick="insertAtCursor(\'output\', \'' + tangraph +
      '\');">' + tangraph + '</li>';
  }
}


// insert clicked result character into given area
function insertAtCursor(elementId, char) {
  var output = document.getElementById(elementId)
  // IE support
  if (document.selection) {
    output.focus();
    sel = document.selection.createRange();
    sel.text = char;
  }
  // others
  else if (output.selectionStart || output.selectionStart == '0') {
    var startPos = output.selectionStart;
    var endPos = output.selectionEnd;
    output.value = output.value.substring(0, startPos)
      + char
      + output.value.substring(endPos, output.value.length);
  } else {
    output.value += char;
  }
}

var lastRegex = "";

// listeners - update with every key press / checkbox change
var strokeEntryField = document.getElementById("stroke-entry-field");
window.onkeyup = updateStrokeEntry;
var strokeBeginsWith = document.getElementById("stroke-begins-with");
var strokeEndsWith = document.getElementById("stroke-ends-with");
strokeBeginsWith.addEventListener('change', updateStrokeEntry);
strokeEndsWith.addEventListener('change', updateStrokeEntry);


// repopulate results list based on currently activated components
function updateResultsList() {
  resultList = [];
  
  if (strokeEntryField.value != "") {
    // strokes
    // build regex
    var strokesRegex = strokeEntryField.value.replace("*",".*");
    if (strokeBeginsWith.checked)
      strokesRegex = "^" + strokesRegex;
    if (strokeEndsWith.checked)
      strokesRegex += "$";
    // display characters that start with the sequence
    // before those that just contain it
    var startsWithSeq = [];
    var containsSeq = [];
    for (var tangraph in tangraphInfo) {
      let strokeSeq = tangraphInfo[tangraph][2];
      if (strokeSeq.search("^"+strokesRegex) >= 0)
        startsWithSeq.push(tangraph);
      else if (strokeSeq.search(strokesRegex) >= 0)
        containsSeq.push(tangraph);
    }
    resultList = startsWithSeq.concat(containsSeq);
  } else {
    // push in descending score order
    var allTangraphs = Object.keys(tangraphInfo);
    allTangraphs.sort(function(a,b){return tangraphScores[b]-tangraphScores[a];});
    for (i in allTangraphs)
      if (tangraphScores[allTangraphs[i]] > 0)
        resultList.push(allTangraphs[i]);
  }
  
  updatePageResults();
}


// map whether each string in arr is a substring of str,
// then take ratio of "true" results
// (except if arr is empty, in which case always return 1)
function ratioOfSubstrings(arr, str) {
  if (arr.length == 0)
    return 1;
  else {
    var count = 0;
    var mapped = arr.map(function(c){return str.includes(c);});
    for (i in mapped)
      if (mapped[i])
        count++;
    return count / arr.length;
  }
}

function toggleCheckbox(id) {
  document.getElementById(id).checked = !document.getElementById(id).checked;
  updateStrokeEntry();
}

// insert with click
function insertStroke(stroke) {
  strokeEntryField.value += stroke;
  updateStrokeEntry();
}

function updateStrokeEntry() {
  strokeEntryField.value = strokeEntryField.value.toUpperCase().replace(/[^A-Q.*]/g, "");
  updateResultsList();
}

function clearStrokeEntryField() {
  strokeEntryField.value = "";
  updateResultsList();
}


// on-document-load stuff
var resultList = [];
updateResultsList();
