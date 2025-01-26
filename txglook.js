/* Data Structures */
const tangraphScores = {}; // Will be populated from external source

/* DOM Elements */
const elements = {
  output: document.getElementById('output'),
  rolloverInfo: document.getElementById('rollover-info'),
  resultList: document.getElementById('result-list'),
  strokeEntryField: document.getElementById('stroke-entry-field'),
  strokeBeginsWith: document.getElementById('stroke-begins-with'),
  strokeEndsWith: document.getElementById('stroke-ends-with')
};

/* State */
let results = [];

/* jQuery initializations */
$(() => {
  $('.toggler').on('click', function() {
    $(this).next('div').slideToggle();
    const isPlus = $(this).hasClass('glyphicon-plus-sign');
    $(this)
      .toggleClass('glyphicon-plus-sign', !isPlus)
      .toggleClass('glyphicon-minus-sign', isPlus);
  });
});

/**
 * Switch writing mode between LTR and TTB
 * @param {string} mode - The writing mode to switch to
 */
function switchWritingMode(mode) {
  if (!elements.output) return;
  elements.output.style['writing-mode'] = mode;
}

/**
 * Update rollover information text
 * @param {string} tangraph - The tangraph character
 */
function rolloverResult(tangraph) {
  if (!elements.rolloverInfo || !tangraphInfo[tangraph]) return;
  elements.rolloverInfo.textContent = `${tangraph} ${tangraphInfo[tangraph]?.[3] || ''}`;
}

/**
 * Update list of result tangraphs on page
 * @param {number} maxChars - Maximum number of characters to display
 */
function updatePageResults(maxChars = 80) {
  if (!elements.resultList) return;
  
  const resultItems = results
    .slice(0, maxChars)
    .map(tangraph => `
      <li class="results-item" 
          onmouseover="rolloverResult('${tangraph}');" 
          onclick="insertAtCursor('output', '${tangraph}');">
        ${tangraph}
      </li>
    `)
    .join('');
    
  elements.resultList.innerHTML = resultItems;
}
/**
 * Insert character at cursor position
 * @param {string} elementId - Target element ID
 * @param {string} char - Character to insert
 */
function insertAtCursor(elementId, char) {
  const output = document.getElementById(elementId);
  if (!output) return;
  
  if (output.selectionStart || output.selectionStart === 0) {
    const startPos = output.selectionStart;
    const endPos = output.selectionEnd;
    output.value = 
      output.value.substring(0, startPos) +
      char +
      output.value.substring(endPos);
  } else {
    output.value += char;
  }
}
/**
 * Safe check for tangraph data
 * @returns {boolean} Whether the required data is available
 */
function isDataAvailable() {
  return typeof tangraphInfo === 'object' && 
         typeof tangraphScores === 'object' &&
         Object.keys(tangraphInfo).length > 0;
}
/**
 * Update results list based on current filters
 */
function updateResultsList() {
  if (!isDataAvailable()) {
    console.warn('Tangraph data not yet available');
    return;
  }

  const strokeValue = elements.strokeEntryField?.value || '';

  if (!strokeValue) {
    // Default sorting by score when no input
    results = Object.keys(tangraphInfo)
      .filter(key => tangraphScores[key] > 0)
      .sort((a, b) => (tangraphScores[b] || 0) - (tangraphScores[a] || 0));
    updatePageResults();
    return;
  }

  // Build regex pattern
  let strokesRegex = strokeValue.replace('*', '.*');
  if (elements.strokeBeginsWith?.checked) strokesRegex = `^${strokesRegex}`;
  if (elements.strokeEndsWith?.checked) strokesRegex += '$';
  
  const startsWithSeq = [];
  const containsSeq = [];
  
  try {
    const pattern = new RegExp(strokesRegex);
    const startPattern = new RegExp(`^${strokesRegex}`);

    Object.entries(tangraphInfo).forEach(([tangraph, info]) => {
      const strokeSeq = info[2];
      if (startPattern.test(strokeSeq)) {
        startsWithSeq.push(tangraph);
      } else if (pattern.test(strokeSeq)) {
        containsSeq.push(tangraph);
      }
    });

    results = [...startsWithSeq, ...containsSeq];
    updatePageResults();
  } catch (error) {
    console.error('Invalid regex pattern:', error);
    results = [];
    updatePageResults();
  }
}

/**
 * Toggle checkbox state and update results
 * @param {string} id - Checkbox element ID
 */
function toggleCheckbox(id) {
  const checkbox = document.getElementById(id);
  if (checkbox) {
    checkbox.checked = !checkbox.checked;
    updateStrokeEntry();
  }
}
/**
 * Insert stroke and update results
 * @param {string} stroke - Stroke to insert
 */
function insertStroke(stroke) {
  if (!elements.strokeEntryField) return;
  elements.strokeEntryField.value += stroke;
  updateStrokeEntry();
}

/**
 * Update stroke entry field and results
 */
function updateStrokeEntry() {
  if (!elements.strokeEntryField) return;
  
  elements.strokeEntryField.value = 
    elements.strokeEntryField.value
      .toUpperCase()
      .replace(/[^A-Q.*]/g, '');
updateResultsList();
}

/**
 * Clear stroke entry field and update results
 */
function clearStrokeEntryField() {
  if (!elements.strokeEntryField) return;
  elements.strokeEntryField.value = '';
  updateResultsList();
}

/**
 * Initialize application
 */
function init() {
  // Add event listeners only if elements exist
  if (elements.strokeEntryField) {
    elements.strokeEntryField.addEventListener('keyup', updateStrokeEntry);
  }
  
  if (elements.strokeBeginsWith) {
    elements.strokeBeginsWith.addEventListener('change', updateStrokeEntry);
  }
  
  if (elements.strokeEndsWith) {
    elements.strokeEndsWith.addEventListener('change', updateStrokeEntry);
  }

  // Wait for data to be available before initial update
  if (isDataAvailable()) {
    updateResultsList();
  } else {
    console.warn('Waiting for tangraph data to be loaded...');
  }
}

/* Initialize application when DOM is ready */
$(init);