// 加载字典数据
async function loadDictionary() {
    try {
        const response = await fetch('dictionary.js');
        const data = await response.json();
        
        // 初始化词典
        wordDictionary = data.WORD_DATA.reduce((acc, entry) => {
            acc[entry.word] = entry;
            return acc;
        }, {});
        
        // 初始化字典
        dictionary = data.CHARACTER_DATA.reduce((acc, entry) => {
            acc[entry.character] = entry;
            return acc;
        }, {});
    } catch (error) {
        alert('加载字典文件时出错：' + error);
    }
}

// 检查是否在词典中存在该词
function checkWordInDictionary(chars) {
    return wordDictionary[chars] ? true : false;
}

// 获取词的解释
function getWordExplanation(word, lang) {
    const entry = wordDictionary[word];
    return entry ? entry[`explanation${lang}`] || '' : '';
}

// 检查是否为有效字符（非符号）
function isValidChar(char) {
    // 如果包含连接符，检查连接符前后的字符
    if (char && (char.includes('-') || char.includes('='))) {
        const parts = char.split(/[-=]/);
        return parts.some(part => part && !/[\p{P}\s]/u.test(part));
    }
    return char && !/[\p{P}\s]/u.test(char);
}

const COMBINE_RULES = {
    characters: {
        // 定义通用的连接规则模板
        COMBINE_TEMPLATES: {
            PREV_EQUAL: {
                combineWithPrevious: true,
                connector: '='
            },
            PREV_HYPHEN: {
                combineWithPrevious: true,
                connector: '-'
            },
            NEXT_HYPHEN: {
                combineWithNext: true,
                connector: '-'
            }
        },
        
        // 特殊规则(需要单独定义的变体规则)
        '𗧓': {
            variants: [
                {
                    type: 'standalone',
                    condition: (prev, next) => !isValidChar(prev),
                    explanationEN: 'I',
                    explanationCN: '我',
                },
                {
                    type: 'combineWithPrevious',
                    connector: '-',
                    condition: (prev, next) => isValidChar(prev),
                    explanationEN: '1SG',
                    explanationCN: '1SG',
                },
            ]
        },
        '𘄢': {
            variants: [
                {
                    type: 'standalone',
                    condition: (prev, next) => !isValidChar(prev) & !isValidChar,
                    explanationEN: 'Yes',
                    explanationCN: '是',
                },
                {
                    type: 'combineWithPrevious',
                    connector: '=',
                    condition: (prev, next) => isValidChar(prev),
                    explanationEN: 'INTRG.RTH',
                    explanationCN: 'INTRG.RTH',
                },
            ]
        },
        '𗭪': {
            combineWithPrevious: true,
            connector: '-='
        },
        
        // 使用规则模板的字符
        PREV_EQUAL_CHARS: [
            '𗫂', '𗅁', '𘆄', '𗇋', '𗗙', '𗦇', '𘏚', '𗑠', '𘋩', '𗳒',
            '𗸒', '𗖵', '𘔼', '𗏣', '𘕿', '𗀔', '𗯴', '𘂤', '𗙼', '𘅍',
            '𘝨', '𘃞', '𗍊'
        ],
        
        PREV_HYPHEN_CHARS: [
            '𘉞', '𗐱', '𗗟', '𗫶', '𘂆'
        ],
        
        NEXT_HYPHEN_CHARS: [
            '𗅋', '𗷝', '𘖑', '𘅇', '𗈪', '𗱢', '𗋚', '𘙌', '𘙇', '𗞞',
            '𗌽', '𗭊', '𘀆', '𗘯', '𘊐', '𗏺', '𘗐', '𗋸'
        ]
    }
};

// 在代码初始化时展开模板
function expandCombineRules(rules) {
    const { COMBINE_TEMPLATES, PREV_EQUAL_CHARS, PREV_HYPHEN_CHARS, NEXT_HYPHEN_CHARS, ...specificRules } = rules.characters;
    
    const expandedRules = { ...specificRules };
    
    // 展开使用等号连接前面字符的规则
    PREV_EQUAL_CHARS.forEach(char => {
        expandedRules[char] = { ...COMBINE_TEMPLATES.PREV_EQUAL };
    });
    
    // 展开使用连字符连接前面字符的规则
    PREV_HYPHEN_CHARS.forEach(char => {
        expandedRules[char] = { ...COMBINE_TEMPLATES.PREV_HYPHEN };
    });
    
    // 展开使用连字符连接后面字符的规则
    NEXT_HYPHEN_CHARS.forEach(char => {
        expandedRules[char] = { ...COMBINE_TEMPLATES.NEXT_HYPHEN };
    });
    
    return {
        characters: expandedRules
    };
}

// 初始化时展开规则
const EXPANDED_COMBINE_RULES = expandCombineRules(COMBINE_RULES);

// 获取解释的逻辑
function getExplanation(char, lang, prevChar, nextChar) {
    // 检查是否有变体规则
    const rules = EXPANDED_COMBINE_RULES.characters[char];
    if (rules?.variants) {
        const variant = rules.variants.find(v => v.condition(prevChar, nextChar));
        if (variant) {
            const explanation = variant[`explanation${lang}`];
            return explanation || '';
        }
    }

    // 检查是否包含连接符
    if (char.includes('-') || char.includes('=')) {
        const connectors = char.match(/[-=]/g);
        const parts = char.split(/[-=]/);
        let explanation = '';

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            // 为每个部分正确传递上下文
            const prevPart = i > 0 ? parts[i - 1] : prevChar;
            const nextPart = i < parts.length - 1 ? parts[i + 1] : nextChar;
            
            // 先检查这个部分是否有变体规则
            const partRules = EXPANDED_COMBINE_RULES.characters[part];
            if (partRules?.variants) {
                const variant = partRules.variants.find(v => v.condition(prevPart, nextPart));
                if (variant) {
                    explanation += variant[`explanation${lang}`] || '';
                } else {
                    explanation += dictionary[part] ? dictionary[part][`explanation${lang}`] || '' : '';
                }
            } else {
                explanation += dictionary[part] ? dictionary[part][`explanation${lang}`] || '' : '';
            }

            if (connectors && connectors[i]) {
                explanation += connectors[i];
            }
        }

        return explanation;
    }

    // 查询字典
    const dictExplanation = dictionary[char] ? dictionary[char][`explanation${lang}`] || '' : '';
    return dictExplanation;
}


// 定义输出格式的分隔符
const FORMAT_SEPARATORS = {
    typst: {
        items: ', '
    },
    obsidian: {
        items: ' '
    },
};


function processCombination(items) {
    const result = [];
    let i = 0;


    while (i < items.length) {
        const currentItem = items[i];

        // 如果是标点符号，直接添加到结果中并继续
        if (/[\p{P}\s]/u.test(currentItem)) {
            result.push(currentItem);
            i++;
            continue;
        }

        let handled = false;
        const rules = EXPANDED_COMBINE_RULES.characters;

        // 首先检查词组（多字符组合）
        let maxLength = 8; // 根据需要调整
        let bestMatch = null;
        let bestLength = 0;

        for (let len = maxLength; len > 1; len--) {
            if (i + len > items.length) continue;
            const possibleWord = items.slice(i, i + len).join('');
            if (checkWordInDictionary(possibleWord)) {
                bestMatch = possibleWord;
                bestLength = len;
                break;
            }
        }

        if (bestMatch) {
            // 获取词组的格式信息
            const wordEntry = wordDictionary[bestMatch];
            let formattedWord = bestMatch;
            if (wordEntry && wordEntry.format && wordEntry.format.prefix) {
                formattedWord = wordEntry.format.prefix + formattedWord;
            }

            // 检查是否需要与前一个字符组合
            if (result.length > 0 && rules[bestMatch[0]]?.combineWithPrevious) {
                const connector = rules[bestMatch[0]].connector;
                result[result.length - 1] = `${result[result.length - 1]}${connector}${formattedWord}`;
            } else {
                result.push(formattedWord);
            }
            i += bestLength;
            handled = true;
            continue;
        }

        // 处理与下一个字符组合的规则
        if (rules[currentItem]?.combineWithNext) {
            const connector = rules[currentItem].connector;
            if (i + 1 < items.length) {
                let combinedStr = currentItem;
                let nextIndex = i + 1;
                let canContinue = true;
        
                // 连续处理所有可以向后组合的字符
                while (canContinue && nextIndex < items.length) {
                    const nextItem = items[nextIndex];
                    combinedStr += `${connector}${nextItem}`;
                    
                    // 检查下一个字符是否也需要向后组合
                    if (rules[nextItem]?.combineWithNext && nextIndex + 1 < items.length) {
                        nextIndex++;
                    } else {
                        canContinue = false;
                    }
                }
        
                result.push(combinedStr);
                i = nextIndex + 1;
                handled = true;
                continue;
            }
        }

        // 处理与前一个字符组合的规则
        if (result.length > 0) {            
            let shouldCombine = false;
            let connector = '';

            // 检查变体规则
            if (rules[currentItem]?.variants) {
                const variant = rules[currentItem].variants.find(v => {
                    return v.type === 'combineWithPrevious' && 
                        v.condition(result[result.length - 1], items[i + 1]);
                });
                
                if (variant) {
                    shouldCombine = true;
                    connector = variant.connector;
                }
            } else if (rules[currentItem]?.combineWithPrevious) {
                shouldCombine = true;
                connector = rules[currentItem].connector;
            }

            if (shouldCombine) {
                result[result.length - 1] = `${result[result.length - 1]}${connector}${currentItem}`;
                i++;
                handled = true;
                continue;
            }
        }

        // 如果没有被处理，作为单个字符添加
        if (!handled) {
            result.push(currentItem);
            i++;
        }
    }

    return result;
}



function processTypstBrackets(text) {
    if (!text) {
        return '[]';
    }

    const bracketMatch = text.match(/^\[(.*)\]$/);
    if (bracketMatch) {
        return `[[], [${bracketMatch[1]}], []]`;
    }

    return `[${text}]`;
}

function generate() {
    const inputText = document.getElementById('output').value.trim();
    if (!inputText) {
        alert('请输入要查询的字符！');
        return;
    }

    const lang = document.querySelector('input[name="lang"]:checked').value.toUpperCase();
    const readingSystem = document.querySelector('input[name="reading"]:checked').value;
    const outputFormat = document.querySelector('input[name="format"]:checked').value;
        
    const lines = inputText.split('\n');
    const outputs = lines
        .map(line => line.trim())
        .filter(line => line)
        .map(line => generateFormattedOutput(line, lang, readingSystem, outputFormat));

    document.getElementById('output-text').value = outputs.join('\n\n');
}

function generateFormattedOutput(chars, lang, readingSystem, outputFormat) {
    if (outputFormat === 'typst') {
        return generateTypstOutput(chars, lang, readingSystem);
    } else {
        return generateObsidianOutput(chars, lang, readingSystem);
    }
}

function generateTypstOutput(chars, lang, readingSystem) {
    const separator = FORMAT_SEPARATORS.typst.items;
    
    const processedChars = processCombination([...chars]);
    
        // 合并连接的项
        function mergeConnectedItems(items) {
            const result = [];
            let currentGroup = '';
            
            items.forEach((item, index) => {
                if (index === 0) {
                    currentGroup = item;
                } else {
                    // 如果当前项以连接符开始或前一组以连接符结束
                    if (/^[=-]/.test(item) || /[=-]$/.test(currentGroup)) {
                        currentGroup += item;
                    } else {
                        result.push(currentGroup);
                        currentGroup = item;
                    }
                }
            });
            
            if (currentGroup) {
                result.push(currentGroup);
            }
            
            return result;
        }
    
    // 处理源字符
    const charList = mergeConnectedItems(processedChars).map(char => processTypstBrackets(char));
    
    // 处理读音
    const rawReadings = processedChars.map((char, index) => {
        // 首先检查是否在词典中
        if (wordDictionary[char]) {
            const reading = readingSystem === 'GX' ? wordDictionary[char].GX : wordDictionary[char].GHC;
            // 检查是否需要添加前缀
            const entry = wordDictionary[char];
            if (entry.format && entry.format.prefix) {
                return entry.format.prefix + reading.replace(/[\[\]]/g, '');
            }
            return reading ? reading.replace(/[\[\]]/g, '') : '';
        }
        
        // 如果不在词典中，按原来的方式处理
        if (char.includes('-') || char.includes('=')) {
            const parts = char.split(/[-=]/);
            const connectors = char.match(/[-=]/g);
            
            return parts.map((part, idx) => {
                let reading = '';
                // 检查是否是词组
                if (wordDictionary[part]) {
                    reading = readingSystem === 'GX' ? wordDictionary[part].GX : wordDictionary[part].GHC;
                    reading = reading.replace(/[\[\]]/g, '');
                } else if (dictionary[part]) {
                    reading = readingSystem === 'GX' ? dictionary[part].GX : dictionary[part].GHC;
                }
                return idx < parts.length - 1 ? 
                    `${reading || ''}${connectors[idx]}` : (reading || '');
            }).join('');
        }
        if (dictionary[char]) {
            const reading = readingSystem === 'GX' ? dictionary[char].GX : dictionary[char].GHC;
            return reading || '';
        } else if (/[\p{P}\s]/u.test(char)) {
            return char;
        }
        return '';
    });
    
    // 合并连接的读音
    const readings = mergeConnectedItems(rawReadings).map(reading => processTypstBrackets(reading));

    // 处理词义解释
    const rawMorphemes = processedChars.map((char, index, array) => {
        // 首先检查是否在词典中
        if (wordDictionary[char]) {
            return processTypstBrackets(wordDictionary[char][`explanation${lang}`] || '');
        }
        
        const prevChar = index > 0 ? array[index - 1] : null;
        const nextChar = index < array.length - 1 ? array[index + 1] : null;
        
        if (char.includes('-') || char.includes('=')) {
            // 处理多个字符连接的情况
            const parts = char.split(/[-=]/);
            const connectors = char.match(/[-=]/g);
            
            const explanations = parts.map((part, idx) => {
                // 检查是否是词组
                if (wordDictionary[part]) {
                    return wordDictionary[part][`explanation${lang}`] || '';
                }
                const prevPart = idx > 0 ? parts[idx - 1] : prevChar;
                const nextPart = idx < parts.length - 1 ? parts[idx + 1] : nextChar;
                return getExplanation(part, lang, prevPart, nextPart);
            });
            
            return explanations.map((exp, idx) => 
                idx < explanations.length - 1 ? 
                    `${exp}${connectors[idx]}` : exp
            ).join('');
        }
    
        const explanation = getExplanation(char, lang, prevChar, nextChar);
        
        if (explanation) {
            return explanation;
        } else if (/[\p{P}\s]/u.test(char)) {
            return char;
        }
        return '';
    });

    // 合并连接的词义解释
    const morphemes = mergeConnectedItems(rawMorphemes).map(morpheme => processTypstBrackets(morpheme));

    return `#gloss(\n` +
            `header: ${processTypstBrackets(chars)},\n` +
            `source: (${charList.join(separator)}),\n` +
            `transliteration: (${readings.join(separator)}),\n` +
            `morphemes: (${morphemes.join(separator)}),\n` +
            `translation: ""\n)`;
        }

function generateObsidianOutput(chars, lang, readingSystem) {
    const separator = FORMAT_SEPARATORS.obsidian.items;
    
    const processedChars = processCombination([...chars]);
    
    // 处理音读部分
    const rawReadings = processedChars.map((char, index) => {
        // 首先检查是否在词典中
        if (wordDictionary[char]) {
            const reading = readingSystem === 'GX' ? wordDictionary[char].GX : wordDictionary[char].GHC;
            // 检查是否需要添加前缀
            const entry = wordDictionary[char];
            if (entry.format && entry.format.prefix) {
                return entry.format.prefix + reading.replace(/[\[\]]/g, '');
            }
            return reading ? reading.replace(/[\[\]]/g, '') : '';
        }
        
        // 如果不在词典中，按原来的方式处理
        if (char.includes('-') || char.includes('=')) {
            const parts = char.split(/[-=]/);
            const connectors = char.match(/[-=]/g);
            
            return parts.map((part, idx) => {
                let reading = '';
                // 检查是否是词组
                if (wordDictionary[part]) {
                    reading = readingSystem === 'GX' ? wordDictionary[part].GX : wordDictionary[part].GHC;
                    reading = reading.replace(/[\[\]]/g, '');
                } else if (dictionary[part]) {
                    reading = readingSystem === 'GX' ? dictionary[part].GX : dictionary[part].GHC;
                }
                return idx < parts.length - 1 ? 
                    `${reading || ''}${connectors[idx]}` : (reading || '');
            }).join('');
        }
        if (dictionary[char]) {
            const reading = readingSystem === 'GX' ? dictionary[char].GX : dictionary[char].GHC;
            return reading || '';
        } else if (/[\p{P}\s]/u.test(char)) {
            return char;
        }
        return '';
    });

    // 处理词义解释部分
    const morphemes = processedChars.map((char, index, array) => {
        // 首先检查是否在词典中
        if (wordDictionary[char]) {
            const explanation = wordDictionary[char][`explanation${lang}`] || '';
            // 检查是否需要添加前缀
            const entry = wordDictionary[char];
            if (entry.format && entry.format.prefix) {
                return entry.format.prefix + explanation;
            }
            return explanation;
        }
        
        const prevChar = index > 0 ? array[index - 1] : null;
        const nextChar = index < array.length - 1 ? array[index + 1] : null;
        
        if (char.includes('-') || char.includes('=')) {
            // 处理多个字符连接的情况
            const parts = char.split(/[-=]/);
            const connectors = char.match(/[-=]/g);
            
            const explanations = parts.map((part, idx) => {
                // 检查是否是词组
                if (wordDictionary[part]) {
                    return wordDictionary[part][`explanation${lang}`] || '';
                }
                const prevPart = idx > 0 ? parts[idx - 1] : prevChar;
                const nextPart = idx < parts.length - 1 ? parts[idx + 1] : nextChar;
                return getExplanation(part, lang, prevPart, nextPart);
            });
            
            return explanations.map((exp, idx) => 
                idx < explanations.length - 1 ? 
                    `${exp}${connectors[idx]}` : exp
            ).join('');
        }
    
        const explanation = getExplanation(char, lang, prevChar, nextChar);
        
        if (explanation) {
            return explanation;
        } else if (/[\p{P}\s]/u.test(char)) {
            return char;
        }
        return '';
    });

    // 处理标点符号前的空格
    function joinWithSmartSpacing(items) {
        return items.reduce((result, current, index) => {
            if (index === 0) return current;
            
            // 如果当前项以连接符开始，不添加空格
            if (/^[=-]/.test(current)) {
                return result + current;
            }
            
            // 如果前一项以连接符结束，不添加空格
            if (/[=-]$/.test(result)) {
                return result + current;
            }
            
            // 如果当前项是标点符号，不添加空格
            if (/^[\p{P}]/u.test(current)) {
                return result + current;
            }
            
            // 其他情况添加空格
            return result + separator + current;
        }, '');
    }

    // 过滤掉空字符串并使用新的连接方法
    const readingsText = joinWithSmartSpacing(rawReadings.filter(r => r));
    const morphemesText = joinWithSmartSpacing(morphemes.filter(m => m));

    // 返回Obsidian格式的输出
    return '```gloss\n' +
           '\\set exstyle big\n' +
           `\\ex ${chars}\n` +
           `\\gla ${readingsText}\n` +
           `\\glb ${morphemesText}\n` +
           '\\ft \n' +
           '```';
}

function clearAll() {
    document.getElementById('output').value = '';
    document.getElementById('output-text').value = '';
}

function copyOutput() {
    const output = document.getElementById('output-text');
    if (!output.value) {
        alert('没有可复制的内容');
        return;
}

    output.select();
    document.execCommand('copy');
    
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.textContent = '已复制';
    setTimeout(() => {
        copyBtn.textContent = '复制';
    }, 1000);
}