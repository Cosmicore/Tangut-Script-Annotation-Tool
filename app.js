// 加载字典数据
async function loadDictionary() {
    try {
        const response = await fetch('dictionary.json');
        const data = await response.json();
        dictionary = data.reduce((acc, entry) => {
            acc[entry.character] = entry;
            return acc;
        }, {});
    } catch (error) {
        alert('加载字典文件时出错：' + error);
    }
}

function generate() {
    const inputText = document.getElementById('input-text').value.trim();
    if (!inputText) {
        alert('请输入要查询的字符！');
        return;
    }

    const lang = document.querySelector('input[name="lang"]:checked').value;
    const lines = inputText.split('\n');
    const outputs = lines
        .map(line => line.trim())
        .filter(line => line)
        .map(line => generateFormattedOutput(line, lang));

    document.getElementById('output-text').value = outputs.join('\n\n');
}

function generateFormattedOutput(chars, lang) {
    const charList = [...chars].map(char => `[${char}]`);
    const readings = [...chars].map(char => 
        dictionary[char] ? `[${dictionary[char].reading}]` : '[]'
    );
    const morphemes = [...chars].map(char => {
        if (dictionary[char]) {
            const explanation = dictionary[char][`explanation${lang}`] || '';
            return `[${explanation}]`;
        }
        return '[]';
    });

    return `#gloss(\n` +
           `header: [${chars}],\n` +
           `source: (${charList.join(', ')}),\n` +
           `transliteration: (${readings.join(', ')}),\n` +
           `morphemes: (${morphemes.join(', ')}),\n` +
           `translation: ""\n)`;
}

function clearAll() {
    document.getElementById('input-text').value = '';
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
