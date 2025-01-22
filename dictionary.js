// 定义字典数据
const DICTIONARY_DATA = [
    {
      "character": "𘞗",
      "reading": "swə¹",
      "explanationEN": "race; offspring; seed"
    },
    {
      "character": "𘟇",
      "reading": "lo̱¹",
      "explanationEN": "filter"
    },
    {
      "character": "𘞼",
      "reading": "si²",
      "explanationEN": "mother"
    },
    {
      "character": "𗴷",
      "reading": "la̱²",
      "explanationEN": "maternal aunt"
    },
    {
      "character": "𗀇",
      "reading": "goṃ¹",
      "explanationEN": "be able to; can; to defeat"
    },
    {
      "character": "𗴼",
      "reading": "khiw²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗵤",
      "reading": "se¹",
      "explanationEN": "nature; temperament"
    },
    {
      "character": "𗀀",
      "reading": "do̱¹",
      "explanationEN": "poison"
    },
    {
      "character": "𗄈",
      "reading": "śwow¹",
      "explanationEN": "to rise.ᴀ"
    },
    {
      "character": "𗄊",
      "reading": "zi²",
      "explanationEN": "all; completely"
    },
    {
      "character": "𗴽",
      "reading": "lo?",
      "explanationEN": "rich"
    },
    {
      "character": "𗵏",
      "reading": "bu¹",
      "explanationEN": "brothers"
    },
    {
      "character": "𗀅",
      "reading": "rza̱r²",
      "explanationEN": "to undergo; to suffer"
    },
    {
      "character": "𗀫",
      "reading": "mpho̱¹",
      "explanationEN": "to cover"
    },
    {
      "character": "𗍥",
      "reading": "γəh¹",
      "explanationEN": "ore"
    },
    {
      "character": "𗅈",
      "reading": "teṃh²",
      "explanationEN": "to tie; to bind"
    },
    {
      "character": "𗀏",
      "reading": "rpa̱r²",
      "explanationEN": "a horse with white trotters"
    },
    {
      "character": "𗀨",
      "reading": "thwu²",
      "explanationEN": "to meet; to be infected with a disease"
    },
    {
      "character": "𗄛",
      "reading": "rbi̱r²",
      "explanationEN": "to meet; to encounter"
    },
    {
      "character": "𗵘",
      "reading": "tśa¹",
      "explanationEN": "road; way"
    },
    {
      "character": "𗵚",
      "reading": "bu¹",
      "explanationEN": "elephant"
    },
    {
      "character": "𗵕",
      "reading": "bə̱¹",
      "explanationEN": "resources"
    },
    {
      "character": "𗵲",
      "reading": "ror¹",
      "explanationEN": "to get; to obtain"
    },
    {
      "character": "𘈋",
      "reading": "phe²",
      "explanationEN": "to sell; to peddle"
    },
    {
      "character": "𗀍",
      "reading": "ŋqhai̱¹",
      "explanationEN": "mixed and disorderly"
    },
    {
      "character": "𗀄",
      "reading": "ŋwu̱²",
      "explanationEN": "collar; neckband; territory"
    },
    {
      "character": "𗄑",
      "reading": "rŋo̱ṃr²",
      "explanationEN": "all; each and every"
    },
    {
      "character": "𗍦",
      "reading": "nlhu¹",
      "explanationEN": "swelling"
    },
    {
      "character": "𗵈",
      "reading": "ri̱r²",
      "explanationEN": "market"
    },
    {
      "character": "𗀁",
      "reading": "sa̱²",
      "explanationEN": "to suck"
    },
    {
      "character": "𘞝",
      "reading": "dzwə¹",
      "explanationEN": "to instigate; to slander"
    },
    {
      "character": "𗃿",
      "reading": "źi²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗵇",
      "reading": "tshih¹",
      "explanationEN": "road; way"
    },
    {
      "character": "𗵓",
      "reading": "llo̱ṃ²",
      "explanationEN": "wide; broad"
    },
    {
      "character": "𗀕",
      "reading": "rza̱r²",
      "explanationEN": "bride-price"
    },
    {
      "character": "𘓬",
      "reading": "ŋġu̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗴰",
      "reading": "gwaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗀃",
      "reading": "ẓao̱²",
      "explanationEN": "to mate; to copulate"
    },
    {
      "character": "𘟗",
      "reading": "rqo̱ṃr²",
      "explanationEN": "tooth"
    },
    {
      "character": "𗴾",
      "reading": "vwe̱²",
      "explanationEN": "storage"
    },
    {
      "character": "𗵋",
      "reading": "ṇo̱ṃ²",
      "explanationEN": "to plan; to scheme"
    },
    {
      "character": "𗀛",
      "reading": "khi¹",
      "explanationEN": "to open; to shine upon"
    },
    {
      "character": "𗀜",
      "reading": "ŋwu̱²",
      "explanationEN": "then; after that; afterwards"
    },
    {
      "character": "𗀤",
      "reading": "ŋwu̱²",
      "explanationEN": "few"
    },
    {
      "character": "𘟋",
      "reading": "rza̱r¹",
      "explanationEN": "pungent; hot"
    },
    {
      "character": "𘟀",
      "reading": "le²",
      "explanationEN": "to see.ᴀ"
    },
    {
      "character": "𗵅",
      "reading": "lwəh¹",
      "explanationEN": "to crawl; to creep"
    },
    {
      "character": "𗀭",
      "reading": "thwu²",
      "explanationEN": "at last; in the end"
    },
    {
      "character": "𗄉",
      "reading": "zi²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗀟",
      "reading": "nni¹",
      "explanationEN": "to marry"
    },
    {
      "character": "𗵔",
      "reading": "ntha̱r¹",
      "explanationEN": "obvious"
    },
    {
      "character": "𗄋",
      "reading": "źi¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗵳",
      "reading": "noh²",
      "explanationEN": "milk"
    },
    {
      "character": "𗴸",
      "reading": "tswa̱¹",
      "explanationEN": "hair worn in a bun or coil"
    },
    {
      "character": "𗵣",
      "reading": "tśiw²",
      "explanationEN": "top"
    },
    {
      "character": "𗀎",
      "reading": "rer²",
      "explanationEN": "nearby; side"
    },
    {
      "character": "𗀣",
      "reading": "rha̱r¹",
      "explanationEN": "to open (one’s mouth)"
    },
    {
      "character": "𗵱",
      "reading": "rkir¹",
      "explanationEN": "to observe; to see"
    },
    {
      "character": "𗴳",
      "reading": "re̱r²",
      "explanationEN": "a word means respect"
    },
    {
      "character": "𗵉",
      "reading": "do̱ṃ¹",
      "explanationEN": "street"
    },
    {
      "character": "𗄀",
      "reading": "???",
      "explanationEN": "boots"
    },
    {
      "character": "𗴱",
      "reading": "ror²",
      "explanationEN": "to cover"
    },
    {
      "character": "𘟅",
      "reading": "tśhe¹",
      "explanationEN": "to raise; to elect"
    },
    {
      "character": "𗄄",
      "reading": "dih²",
      "explanationEN": "to build"
    },
    {
      "character": "𗀆",
      "reading": "rgwər²",
      "explanationEN": "back of the body"
    },
    {
      "character": "𗀉",
      "reading": "qae̱²",
      "explanationEN": "ankle"
    },
    {
      "character": "𗀑",
      "reading": "le²",
      "explanationEN": "to shelter"
    },
    {
      "character": "𗀒",
      "reading": "ẓao̱ṃ²",
      "explanationEN": "Buddhist monk"
    },
    {
      "character": "𗀖",
      "reading": "lo̱ṃh²",
      "explanationEN": "to rely on; to depend on"
    },
    {
      "character": "𗀘",
      "reading": "thwə¹",
      "explanationEN": "to meet; to be infected"
    },
    {
      "character": "𗴲",
      "reading": "dźwe²",
      "explanationEN": "summer"
    },
    {
      "character": "𗵀",
      "reading": "vwo̱ṃ¹",
      "explanationEN": "to wish"
    },
    {
      "character": "𗵯",
      "reading": "tśəh¹",
      "explanationEN": "branch"
    },
    {
      "character": "𗸕",
      "reading": "qhwə̱¹",
      "explanationEN": "half"
    },
    {
      "character": "𗙬",
      "reading": "ẓuo¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄁",
      "reading": "thwo̱¹",
      "explanationEN": "illusion; dream"
    },
    {
      "character": "𗀩",
      "reading": "nde²",
      "explanationEN": "to ache; to be grieved and heartbroken"
    },
    {
      "character": "𗵰",
      "reading": "tih¹",
      "explanationEN": "to offer a sacrifice; to pray"
    },
    {
      "character": "𗄜",
      "reading": "ve¹",
      "explanationEN": "to go"
    },
    {
      "character": "𗀋",
      "reading": "phao̱²",
      "explanationEN": "snake"
    },
    {
      "character": "𗄐",
      "reading": "tśi²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗀙",
      "reading": "mphə̱¹",
      "explanationEN": "to detest"
    },
    {
      "character": "𗵃",
      "reading": "vwi̱¹",
      "explanationEN": "dragon"
    },
    {
      "character": "𗀠",
      "reading": "mphə̱¹",
      "explanationEN": "to integrate; to unite"
    },
    {
      "character": "𗀪",
      "reading": "lli̱²",
      "explanationEN": "peacock"
    },
    {
      "character": "𗄔",
      "reading": "śwoṃ¹",
      "explanationEN": "to patrol"
    },
    {
      "character": "𗀈",
      "reading": "tso̱ṃ¹",
      "explanationEN": "incomplete"
    },
    {
      "character": "𗀥",
      "reading": "ti̱w¹",
      "explanationEN": "egg"
    },
    {
      "character": "𗀔",
      "reading": "tśhaw¹",
      "explanationEN": "SUPE: superessive case"
    },
    {
      "character": "𗀝",
      "reading": "rvwo̱r¹",
      "explanationEN": "chicken"
    },
    {
      "character": "𗀮",
      "reading": "thi̱w²",
      "explanationEN": "to meet; to be infected with a disease"
    },
    {
      "character": "𗴺",
      "reading": "ma¹",
      "explanationEN": "mother"
    },
    {
      "character": "𗵦",
      "reading": "toh¹",
      "explanationEN": "to pray"
    },
    {
      "character": "𗄒",
      "reading": "śwow¹",
      "explanationEN": "broom"
    },
    {
      "character": "𗀡",
      "reading": "tśhaw¹",
      "explanationEN": "to be licentious"
    },
    {
      "character": "𘒡",
      "reading": "me²",
      "explanationEN": "to braise"
    },
    {
      "character": "𗀧",
      "reading": "nde²",
      "explanationEN": "to accuse falsely"
    },
    {
      "character": "𗵗",
      "reading": "ror²",
      "explanationEN": "to get.ʙ; to obtain.ʙ"
    },
    {
      "character": "𗀯",
      "reading": "thwə¹",
      "explanationEN": "to finish"
    },
    {
      "character": "𘈩",
      "reading": "li̱w¹",
      "explanationEN": "one"
    },
    {
      "character": "𗀂",
      "reading": "tśhaw¹",
      "explanationEN": "strong"
    },
    {
      "character": "𘈚",
      "reading": "gə²",
      "explanationEN": "night"
    },
    {
      "character": "𗵄",
      "reading": "luh²",
      "explanationEN": "steamed bun"
    },
    {
      "character": "𗀊",
      "reading": "tśhaw¹",
      "explanationEN": "to gather; to collect"
    },
    {
      "character": "𗴿",
      "reading": "kuh¹",
      "explanationEN": "to pray"
    },
    {
      "character": "𗵞",
      "reading": "ẓuo¹",
      "explanationEN": "cereal; grain"
    },
    {
      "character": "𗵨",
      "reading": "ẓaə̱¹",
      "explanationEN": "dawn"
    },
    {
      "character": "𗄓",
      "reading": "gəh²",
      "explanationEN": "stars"
    },
    {
      "character": "𗵫",
      "reading": "geh¹",
      "explanationEN": "constellation"
    },
    {
      "character": "𗴻",
      "reading": "me̱¹",
      "explanationEN": "warm"
    },
    {
      "character": "𗵂",
      "reading": "llə¹",
      "explanationEN": "to crawl"
    },
    {
      "character": "𗍧",
      "reading": "li̱h²",
      "explanationEN": "tub"
    },
    {
      "character": "𗵆",
      "reading": "śeṃ¹",
      "explanationEN": "to accomplish"
    },
    {
      "character": "𗵪",
      "reading": "dźwe²",
      "explanationEN": "spring"
    },
    {
      "character": "𗵝",
      "reading": "llo̱ṃ²",
      "explanationEN": "hot"
    },
    {
      "character": "𗀌",
      "reading": "tśha¹",
      "explanationEN": "vehicle"
    },
    {
      "character": "𗀬",
      "reading": "thi̱w²",
      "explanationEN": "completely; finally"
    },
    {
      "character": "𘟃",
      "reading": "no̱²",
      "explanationEN": "brain; head"
    },
    {
      "character": "𗵍",
      "reading": "luh²",
      "explanationEN": "mixed; blended"
    },
    {
      "character": "𗵩",
      "reading": "llo̱ṃ²",
      "explanationEN": "a lined Chinese-style coat or jacket"
    },
    {
      "character": "𗵮",
      "reading": "di̱h¹",
      "explanationEN": "god"
    },
    {
      "character": "𘈌",
      "reading": "nvo¹",
      "explanationEN": "commerce; trade"
    },
    {
      "character": "𗄖",
      "reading": "dźi?",
      "explanationEN": "to walk; to go"
    },
    {
      "character": "𗴵",
      "reading": "luh²",
      "explanationEN": "brain; head"
    },
    {
      "character": "𗵊",
      "reading": "mmu²",
      "explanationEN": "ox"
    },
    {
      "character": "𗵬",
      "reading": "vwe̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗴹",
      "reading": "no̱²",
      "explanationEN": "brain"
    },
    {
      "character": "𗵎",
      "reading": "śeṃ¹",
      "explanationEN": "grain"
    },
    {
      "character": "𗵙",
      "reading": "mbao̱¹",
      "explanationEN": "copulation"
    },
    {
      "character": "𗵥",
      "reading": "thu̱²",
      "explanationEN": "source; resources"
    },
    {
      "character": "𗵖",
      "reading": "tswiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗄕",
      "reading": "śe¹",
      "explanationEN": "to take out; to extract"
    },
    {
      "character": "𗵜",
      "reading": "rlwə̱r²",
      "explanationEN": "source; resources"
    },
    {
      "character": "𗵢",
      "reading": "yu²",
      "explanationEN": "to look; to see; to observe"
    },
    {
      "character": "𗵭",
      "reading": "koh¹",
      "explanationEN": "to earnestly hope; to pray for"
    },
    {
      "character": "𗵧",
      "reading": "nde²",
      "explanationEN": "(silver or gold) ingot"
    },
    {
      "character": "𗵛",
      "reading": "luh²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗵠",
      "reading": "tśho²",
      "explanationEN": "matter"
    },
    {
      "character": "𗵐",
      "reading": "ne̱²",
      "explanationEN": "safety"
    },
    {
      "character": "𗴴",
      "reading": "re̱r²",
      "explanationEN": "peace and happiness"
    },
    {
      "character": "𘈊",
      "reading": "nvi¹",
      "explanationEN": "commerce; trade"
    },
    {
      "character": "𗄎",
      "reading": "llih²",
      "explanationEN": "brave"
    },
    {
      "character": "𗀐",
      "reading": "dźe¹",
      "explanationEN": "cold"
    },
    {
      "character": "𗵟",
      "reading": "tshwaṃ¹",
      "explanationEN": "whole; complete"
    },
    {
      "character": "𗀗",
      "reading": "ntsi̱w²",
      "explanationEN": "to melt"
    },
    {
      "character": "𗵡",
      "reading": "tṣae̱²",
      "explanationEN": "to wear"
    },
    {
      "character": "𗀓",
      "reading": "śe²",
      "explanationEN": "to request; to beg"
    },
    {
      "character": "𗀞",
      "reading": "to̱ṃh¹",
      "explanationEN": "to coagulate"
    },
    {
      "character": "𗵌",
      "reading": "rγwe̱r²",
      "explanationEN": "to protect"
    },
    {
      "character": "𘔧",
      "reading": "guh¹",
      "explanationEN": "seat; place; stick; post"
    },
    {
      "character": "𘞐",
      "reading": "nśu¹",
      "explanationEN": "cool"
    },
    {
      "character": "𗵒",
      "reading": "qai̱h¹",
      "explanationEN": "gold"
    },
    {
      "character": "𗵁",
      "reading": "qhu̱¹",
      "explanationEN": "bluish green"
    },
    {
      "character": "𗵑",
      "reading": "γo̱¹",
      "explanationEN": "old man"
    },
    {
      "character": "𗶮",
      "reading": "ŋga¹",
      "explanationEN": "to jump"
    },
    {
      "character": "𘝹",
      "reading": "rvir²",
      "explanationEN": "to hug"
    },
    {
      "character": "𗷠",
      "reading": "tṣwae̱¹",
      "explanationEN": "thunder"
    },
    {
      "character": "𗘠",
      "reading": "rer²",
      "explanationEN": "leg"
    },
    {
      "character": "𘄜",
      "reading": "no̱²",
      "explanationEN": "property; treasure"
    },
    {
      "character": "𘈙",
      "reading": "de¹",
      "explanationEN": "peak"
    },
    {
      "character": "𗙥",
      "reading": "deh¹",
      "explanationEN": "sigh"
    },
    {
      "character": "𗘹",
      "reading": "khaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘃺",
      "reading": "mmə²",
      "explanationEN": "to call"
    },
    {
      "character": "𗙗",
      "reading": "da̱h²",
      "explanationEN": "chime"
    },
    {
      "character": "𗙕",
      "reading": "ha̱¹",
      "explanationEN": "to shout"
    },
    {
      "character": "𘄇",
      "reading": "mih¹",
      "explanationEN": "to inform"
    },
    {
      "character": "𗟵",
      "reading": "a̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗟷",
      "reading": "pə¹",
      "explanationEN": "former; past"
    },
    {
      "character": "𘘄",
      "reading": "świ¹",
      "explanationEN": "tooth; blade"
    },
    {
      "character": "𘜓",
      "reading": "tśhi²",
      "explanationEN": "to count"
    },
    {
      "character": "𘘛",
      "reading": "qi̱w¹",
      "explanationEN": "the Big Dipper; the Plough"
    },
    {
      "character": "𘚄",
      "reading": "kə¹",
      "explanationEN": "high"
    },
    {
      "character": "𗗛",
      "reading": "nlhaa̱¹",
      "explanationEN": "dazzle"
    },
    {
      "character": "𗰙",
      "reading": "kwih²",
      "explanationEN": "circle"
    },
    {
      "character": "𗰟",
      "reading": "γwi²",
      "explanationEN": "ground"
    },
    {
      "character": "𗰞",
      "reading": "naw¹",
      "explanationEN": "dark"
    },
    {
      "character": "𗙴",
      "reading": "ra̱r¹",
      "explanationEN": "patriarchal clan; surname"
    },
    {
      "character": "𗙘",
      "reading": "γai̱h²",
      "explanationEN": "bell"
    },
    {
      "character": "𗹉",
      "reading": "goṃ²",
      "explanationEN": "bent; curved"
    },
    {
      "character": "𗟼",
      "reading": "di¹",
      "explanationEN": "to reply; to repay"
    },
    {
      "character": "𗃒",
      "reading": "lə̱¹",
      "explanationEN": "hollow; ditch"
    },
    {
      "character": "𗙈",
      "reading": "vah¹",
      "explanationEN": "to allow; to say"
    },
    {
      "character": "𘄆",
      "reading": "pho¹",
      "explanationEN": "land"
    },
    {
      "character": "𗸢",
      "reading": "twa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗸴",
      "reading": "nwə²",
      "explanationEN": "spring"
    },
    {
      "character": "𘇗",
      "reading": "lu̱²",
      "explanationEN": "rope; string"
    },
    {
      "character": "𘒺",
      "reading": "rna̱r²",
      "explanationEN": "the old; the aged"
    },
    {
      "character": "𘒾",
      "reading": "nśwə¹",
      "explanationEN": "wrinkle"
    },
    {
      "character": "𘆯",
      "reading": "dzih²",
      "explanationEN": "daughter-in-law"
    },
    {
      "character": "𗷦",
      "reading": "bə¹",
      "explanationEN": "to overflow"
    },
    {
      "character": "𘆰",
      "reading": "kwe²",
      "explanationEN": "foal"
    },
    {
      "character": "𘇉",
      "reading": "lih²",
      "explanationEN": "to tie"
    },
    {
      "character": "𘈢",
      "reading": "leṃh¹",
      "explanationEN": "front of a garment"
    },
    {
      "character": "𘆮",
      "reading": "tśih²",
      "explanationEN": "impediment; burden"
    },
    {
      "character": "𗶛",
      "reading": "swə²",
      "explanationEN": "brother-in-law"
    },
    {
      "character": "𘒧",
      "reading": "dwu¹",
      "explanationEN": "to answer; to reply"
    },
    {
      "character": "𘔦",
      "reading": "ri̱r²",
      "explanationEN": "to win"
    },
    {
      "character": "𗸼",
      "reading": "lhih²",
      "explanationEN": "to make"
    },
    {
      "character": "𗹄",
      "reading": "sə²",
      "explanationEN": "to join; to connect"
    },
    {
      "character": "𘚕",
      "reading": "llo̱ṃ²",
      "explanationEN": "relatives"
    },
    {
      "character": "𗘺",
      "reading": "me¹",
      "explanationEN": "quiet"
    },
    {
      "character": "𗘸",
      "reading": "khaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙞",
      "reading": "khwaə̱?",
      "explanationEN": "dragon"
    },
    {
      "character": "𗹃",
      "reading": "swo²",
      "explanationEN": "exhaustion"
    },
    {
      "character": "𗙊",
      "reading": "dẓaa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗠁",
      "reading": "mbu̱²",
      "explanationEN": "victory"
    },
    {
      "character": "𗗕",
      "reading": "lleṃh²",
      "explanationEN": "changing; incident"
    },
    {
      "character": "𗸻",
      "reading": "rbə̱r¹",
      "explanationEN": "weak"
    },
    {
      "character": "𗙓",
      "reading": "lwiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘟁",
      "reading": "bi̱h¹",
      "explanationEN": "bright"
    },
    {
      "character": "𗹊",
      "reading": "ŋgu¹",
      "explanationEN": "limit; end"
    },
    {
      "character": "𘆤",
      "reading": "ẓuo¹",
      "explanationEN": "to raise domestic animals"
    },
    {
      "character": "𗶚",
      "reading": "ne¹",
      "explanationEN": "relative"
    },
    {
      "character": "𘔫",
      "reading": "lu̱h²",
      "explanationEN": "impoverished"
    },
    {
      "character": "𘈣",
      "reading": "khi¹",
      "explanationEN": "to open; to shine upon"
    },
    {
      "character": "𘆞",
      "reading": "qhai̱²",
      "explanationEN": "golden yellow; golden"
    },
    {
      "character": "𗷞",
      "reading": "li²",
      "explanationEN": "to cause an abortion"
    },
    {
      "character": "𗗔",
      "reading": "nye¹",
      "explanationEN": "flat; level; even"
    },
    {
      "character": "𗍹",
      "reading": "rtsi̱wr²",
      "explanationEN": "whip"
    },
    {
      "character": "𗹀",
      "reading": "tṣae̱ṃ¹",
      "explanationEN": "to open (one’s mouth)"
    },
    {
      "character": "𘄅",
      "reading": "lhi²",
      "explanationEN": "child; infant"
    },
    {
      "character": "𗘷",
      "reading": "rho̱ṃr¹",
      "explanationEN": "to roar; to howl"
    },
    {
      "character": "𗙌",
      "reading": "qaə̱¹",
      "explanationEN": "to call"
    },
    {
      "character": "𗙭",
      "reading": "ra̱r¹",
      "explanationEN": "thousand"
    },
    {
      "character": "𘄋",
      "reading": "γə¹",
      "explanationEN": "to marry"
    },
    {
      "character": "𗟳",
      "reading": "ŋwu̱¹",
      "explanationEN": "speech; word"
    },
    {
      "character": "𗟽",
      "reading": "rmor²",
      "explanationEN": "rude; coarse; careless"
    },
    {
      "character": "𘘅",
      "reading": "ŋqae̱¹",
      "explanationEN": "to bite"
    },
    {
      "character": "𗗓",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "bottle; vase; jar; flask"
    },
    {
      "character": "𘓰",
      "reading": "rγər¹",
      "explanationEN": "to make love"
    },
    {
      "character": "𘓸",
      "reading": "rγər¹",
      "explanationEN": "vulture"
    },
    {
      "character": "𘈤",
      "reading": "rha̱r¹",
      "explanationEN": "to open (one’s mouth)"
    },
    {
      "character": "𘆟",
      "reading": "rzi̱wr²",
      "explanationEN": "bit (of a bridle)"
    },
    {
      "character": "𘆿",
      "reading": "ẓae̱h¹",
      "explanationEN": "to tie; to fasten"
    },
    {
      "character": "𘜖",
      "reading": "ndu̱²",
      "explanationEN": "to block up"
    },
    {
      "character": "𗸿",
      "reading": "γu̱h¹",
      "explanationEN": "tired; weary"
    },
    {
      "character": "𘚣",
      "reading": "ge²",
      "explanationEN": "whirlwind"
    },
    {
      "character": "𘇁",
      "reading": "ẓae̱h¹",
      "explanationEN": "fierce wind"
    },
    {
      "character": "𘃾",
      "reading": "lhə¹",
      "explanationEN": "grandson or grand-daughter"
    },
    {
      "character": "𘑾",
      "reading": "duh¹",
      "explanationEN": "a mournful sigh"
    },
    {
      "character": "𘒀",
      "reading": "duh¹",
      "explanationEN": "weary; wired"
    },
    {
      "character": "𘑿",
      "reading": "loṃ²",
      "explanationEN": "skill"
    },
    {
      "character": "𗡸",
      "reading": "si²",
      "explanationEN": "daughter-in-law"
    },
    {
      "character": "𗳛",
      "reading": "qa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗳡",
      "reading": "świ²",
      "explanationEN": "to need; to want; to require"
    },
    {
      "character": "𘑝",
      "reading": "me²",
      "explanationEN": "calf"
    },
    {
      "character": "𘑳",
      "reading": "rlho̱ṃr²",
      "explanationEN": "ball; globe"
    },
    {
      "character": "𘗲",
      "reading": "no̱²",
      "explanationEN": "steady"
    },
    {
      "character": "𘜂",
      "reading": "dze̱ṃ¹",
      "explanationEN": "deep black"
    },
    {
      "character": "𘔏",
      "reading": "bi̱h¹",
      "explanationEN": "sand; grit"
    },
    {
      "character": "𘘫",
      "reading": "bi²",
      "explanationEN": "rope"
    },
    {
      "character": "𘘲",
      "reading": "so¹",
      "explanationEN": "long and thin"
    },
    {
      "character": "𘜩",
      "reading": "ntho̱²",
      "explanationEN": "deep"
    },
    {
      "character": "𘜽",
      "reading": "qhu̱¹",
      "explanationEN": "owlet"
    },
    {
      "character": "𘗫",
      "reading": "la̱h¹",
      "explanationEN": "pretense; flattery"
    },
    {
      "character": "𗸠",
      "reading": "hwaa̱¹",
      "explanationEN": "nothing"
    },
    {
      "character": "𗘍",
      "reading": "rŋwə̱r¹",
      "explanationEN": "blue and green"
    },
    {
      "character": "𘃰",
      "reading": "dzwi̱w¹",
      "explanationEN": "front of a garment"
    },
    {
      "character": "𘅴",
      "reading": "lwa¹",
      "explanationEN": "to make a detailed inquiry"
    },
    {
      "character": "𘔐",
      "reading": "ŋa̱¹",
      "explanationEN": "red"
    },
    {
      "character": "𘘮",
      "reading": "mo²",
      "explanationEN": "pron.HUM I; me"
    },
    {
      "character": "𘞉",
      "reading": "le̱¹",
      "explanationEN": "ore; stone"
    },
    {
      "character": "𘚈",
      "reading": "tuh²",
      "explanationEN": "ancestor"
    },
    {
      "character": "𘜾",
      "reading": "qae̱¹",
      "explanationEN": "phoenix"
    },
    {
      "character": "𘚚",
      "reading": "pə̱h¹",
      "explanationEN": "premature delivery"
    },
    {
      "character": "𗍕",
      "reading": "rkər¹",
      "explanationEN": "to hasten"
    },
    {
      "character": "𗘏",
      "reading": "śweṃ¹",
      "explanationEN": "to send"
    },
    {
      "character": "𘘻",
      "reading": "ryər²",
      "explanationEN": "to ask.ʙ"
    },
    {
      "character": "𗍋",
      "reading": "ŋkhə¹",
      "explanationEN": "to gather"
    },
    {
      "character": "𗍅",
      "reading": "rkər¹",
      "explanationEN": "craftsman; craftsmanship"
    },
    {
      "character": "𗡠",
      "reading": "rmer²",
      "explanationEN": "to seek; to find"
    },
    {
      "character": "𗡳",
      "reading": "le̱²",
      "explanationEN": "beautiful; cheerful"
    },
    {
      "character": "𘅊",
      "reading": "le̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘅩",
      "reading": "tśeh¹",
      "explanationEN": "rope"
    },
    {
      "character": "𗳣",
      "reading": "mbi²",
      "explanationEN": "to cover"
    },
    {
      "character": "𗸱",
      "reading": "no̱²",
      "explanationEN": "son or daughter"
    },
    {
      "character": "𘑽",
      "reading": "zi²",
      "explanationEN": "to move (revolve)"
    },
    {
      "character": "𘘺",
      "reading": "kə¹",
      "explanationEN": "to spoil (a child)"
    },
    {
      "character": "𗙵",
      "reading": "tśaw¹",
      "explanationEN": "to indicate"
    },
    {
      "character": "𗍌",
      "reading": "dźwe¹",
      "explanationEN": "to swallow"
    },
    {
      "character": "𗍍",
      "reading": "rtsi̱r¹",
      "explanationEN": "hare"
    },
    {
      "character": "𗉲",
      "reading": "tśhiw¹",
      "explanationEN": "other; another"
    },
    {
      "character": "𗙾",
      "reading": "qwae̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘈝",
      "reading": "śwow¹",
      "explanationEN": "night"
    },
    {
      "character": "𗘁",
      "reading": "ri̱r¹",
      "explanationEN": "to bark"
    },
    {
      "character": "𗘃",
      "reading": "na̱¹",
      "explanationEN": "buttocks"
    },
    {
      "character": "𘅨",
      "reading": "ŋa̱¹",
      "explanationEN": "dysentery"
    },
    {
      "character": "𘙛",
      "reading": "dziw²",
      "explanationEN": "medicine to treat sores"
    },
    {
      "character": "𗍁",
      "reading": "vwi̱²",
      "explanationEN": "wall; city; castle"
    },
    {
      "character": "𗍊",
      "reading": "su²",
      "explanationEN": "as"
    },
    {
      "character": "𗍖",
      "reading": "rkər¹",
      "explanationEN": "muscle"
    },
    {
      "character": "𗘕",
      "reading": "rŋwə̱r¹",
      "explanationEN": "family dependants; wife"
    },
    {
      "character": "𗡣",
      "reading": "dzi̱²",
      "explanationEN": "to weight; to judge"
    },
    {
      "character": "𗗾",
      "reading": "vwa̱¹",
      "explanationEN": "pig; hog"
    },
    {
      "character": "𘅏",
      "reading": "rtsu̱r¹",
      "explanationEN": "stain; smear"
    },
    {
      "character": "𘙔",
      "reading": "ti̱w¹",
      "explanationEN": "glue; gum"
    },
    {
      "character": "𘙦",
      "reading": "se²",
      "explanationEN": "tortoise"
    },
    {
      "character": "𘔜",
      "reading": "tśhiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘑺",
      "reading": "dih²",
      "explanationEN": "to reside; to dwell; to live"
    },
    {
      "character": "𘈀",
      "reading": "rvar¹",
      "explanationEN": "slender"
    },
    {
      "character": "𘝆",
      "reading": "la̱h¹",
      "explanationEN": "vulture"
    },
    {
      "character": "𗡯",
      "reading": "dźi?",
      "explanationEN": "strange"
    },
    {
      "character": "𗳢",
      "reading": "dźe?",
      "explanationEN": "to agree; to permit"
    },
    {
      "character": "𘘯",
      "reading": "γa̱¹",
      "explanationEN": "thin; weak"
    },
    {
      "character": "𘅝",
      "reading": "lwu²",
      "explanationEN": "to celebrate"
    },
    {
      "character": "𗟫",
      "reading": "rnir²",
      "explanationEN": "to borrow; to loan"
    },
    {
      "character": "𘗿",
      "reading": "lhe²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘚟",
      "reading": "lhi²",
      "explanationEN": "quick; nimble; agile"
    },
    {
      "character": "𗍡",
      "reading": "su²",
      "explanationEN": "brother-in-law; cousnship"
    },
    {
      "character": "𘓩",
      "reading": "mau̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗗴",
      "reading": "tshwə¹",
      "explanationEN": "to bark"
    },
    {
      "character": "𘄺",
      "reading": "bah¹",
      "explanationEN": "thigh; leg"
    },
    {
      "character": "𗍓",
      "reading": "ri̱wr²",
      "explanationEN": "to repent"
    },
    {
      "character": "𘘰",
      "reading": "qae̱²",
      "explanationEN": "to do"
    },
    {
      "character": "𘑹",
      "reading": "zi²",
      "explanationEN": "to do"
    },
    {
      "character": "𗸘",
      "reading": "hwaa̱¹",
      "explanationEN": "nothing"
    },
    {
      "character": "𗸞",
      "reading": "nae̱h²",
      "explanationEN": "wither; fade; dizzy"
    },
    {
      "character": "𗘊",
      "reading": "tshwu²",
      "explanationEN": "magpie"
    },
    {
      "character": "𗘗",
      "reading": "tshwu¹",
      "explanationEN": "rainbow"
    },
    {
      "character": "𗡡",
      "reading": "nvwə̱¹",
      "explanationEN": "soft; tender"
    },
    {
      "character": "𗵼",
      "reading": "γaə̱¹",
      "explanationEN": "sister-in-law"
    },
    {
      "character": "𘘦",
      "reading": "tśhwow¹",
      "explanationEN": "a modal auxiliary"
    },
    {
      "character": "𘘱",
      "reading": "rśar¹",
      "explanationEN": "to pare; to peel; to shell"
    },
    {
      "character": "𘚇",
      "reading": "voh¹",
      "explanationEN": "widowed; solitary"
    },
    {
      "character": "𗍔",
      "reading": "rkir²",
      "explanationEN": "to hasten"
    },
    {
      "character": "𗍐",
      "reading": "khiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗉶",
      "reading": "mə̱²",
      "explanationEN": "lonely; solitary"
    },
    {
      "character": "𗎛",
      "reading": "qau̱²",
      "explanationEN": "being blind"
    },
    {
      "character": "𗙸",
      "reading": "rir²",
      "explanationEN": "felt"
    },
    {
      "character": "𘈞",
      "reading": "mme¹",
      "explanationEN": "dream"
    },
    {
      "character": "𘄛",
      "reading": "lwa̱h¹",
      "explanationEN": "to extinguish; to go out (a fire)"
    },
    {
      "character": "𗘎",
      "reading": "rŋwə̱r¹",
      "explanationEN": "seven"
    },
    {
      "character": "𘅋",
      "reading": "rŋwi̱r²",
      "explanationEN": "keen"
    },
    {
      "character": "𘞷",
      "reading": "khe¹",
      "explanationEN": "to raise; to breed"
    },
    {
      "character": "𗎙",
      "reading": "pha¹",
      "explanationEN": "border; side"
    },
    {
      "character": "𗰵",
      "reading": "ġu̱¹",
      "explanationEN": "dowry; trousseau"
    },
    {
      "character": "𘞺",
      "reading": "də²",
      "explanationEN": "property"
    },
    {
      "character": "𗌼",
      "reading": "llə¹",
      "explanationEN": "to lock up"
    },
    {
      "character": "𘘔",
      "reading": "dźaw¹",
      "explanationEN": "a grain measure unit"
    },
    {
      "character": "𗡬",
      "reading": "leṃ¹",
      "explanationEN": "posture; appearance"
    },
    {
      "character": "𘙚",
      "reading": "zwi̱w¹",
      "explanationEN": "to tan; to rub"
    },
    {
      "character": "𘅯",
      "reading": "dzə¹",
      "explanationEN": "to lose"
    },
    {
      "character": "𘅻",
      "reading": "γaa̱ṃ¹",
      "explanationEN": "leisure"
    },
    {
      "character": "𘄣",
      "reading": "qhu̱¹",
      "explanationEN": "wisdom"
    },
    {
      "character": "𘅵",
      "reading": "lwa¹",
      "explanationEN": "to make a detailed inquiry"
    },
    {
      "character": "𗵻",
      "reading": "śa²",
      "explanationEN": "blissful"
    },
    {
      "character": "𗡭",
      "reading": "qhə̱¹",
      "explanationEN": "poetry"
    },
    {
      "character": "𗶓",
      "reading": "mbi̱²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𘄲",
      "reading": "nlə²",
      "explanationEN": "to stop; to halt"
    },
    {
      "character": "𘅐",
      "reading": "phu̱²",
      "explanationEN": "boots wearing in rain or snow"
    },
    {
      "character": "𘔥",
      "reading": "kuh¹",
      "explanationEN": "parrot"
    },
    {
      "character": "𘇺",
      "reading": "dẓao̱²",
      "explanationEN": "emperor’s son-in-law"
    },
    {
      "character": "𘘬",
      "reading": "dźə¹",
      "explanationEN": "alcoholic drink"
    },
    {
      "character": "𘙎",
      "reading": "lhi²",
      "explanationEN": "to give birth"
    },
    {
      "character": "𘇻",
      "reading": "mu¹",
      "explanationEN": "mother’s brother; uncle"
    },
    {
      "character": "𘘐",
      "reading": "śe¹",
      "explanationEN": "bumper harvest"
    },
    {
      "character": "𗡰",
      "reading": "nlla¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗍆",
      "reading": "rkər¹",
      "explanationEN": "to give up; to abandon"
    },
    {
      "character": "𗡞",
      "reading": "tu̱h¹",
      "explanationEN": "thousand"
    },
    {
      "character": "𘅌",
      "reading": "bu¹",
      "explanationEN": "to crawl"
    },
    {
      "character": "𘄼",
      "reading": "khe¹",
      "explanationEN": "leg"
    },
    {
      "character": "𘚆",
      "reading": "tuh²",
      "explanationEN": "lip"
    },
    {
      "character": "𘔔",
      "reading": "nu̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙶",
      "reading": "tseṃ¹",
      "explanationEN": "beautiful; pretty"
    },
    {
      "character": "𗉏",
      "reading": "qwo̱ṃ¹",
      "explanationEN": "to face upward or downward"
    },
    {
      "character": "𗉷",
      "reading": "ntśhu²",
      "explanationEN": "be inverted"
    },
    {
      "character": "𗎤",
      "reading": "me̱¹",
      "explanationEN": "to observe"
    },
    {
      "character": "𗚁",
      "reading": "du²",
      "explanationEN": "to make out; to see"
    },
    {
      "character": "𗸸",
      "reading": "nthu¹",
      "explanationEN": "to look into; to examine"
    },
    {
      "character": "𘑤",
      "reading": "ye²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗍝",
      "reading": "γuo¹",
      "explanationEN": "punishment"
    },
    {
      "character": "𗉍",
      "reading": "śwa¹",
      "explanationEN": "to hold"
    },
    {
      "character": "𘟢",
      "reading": "vwi̱²",
      "explanationEN": "to copulate; to mate"
    },
    {
      "character": "𗳜",
      "reading": "nlhi¹",
      "explanationEN": "to regret; to repent"
    },
    {
      "character": "𘘧",
      "reading": "qa̱¹",
      "explanationEN": "boots wearing in rain or snow"
    },
    {
      "character": "𘙐",
      "reading": "va¹",
      "explanationEN": "speech; word; to say"
    },
    {
      "character": "𗍂",
      "reading": "nwe¹",
      "explanationEN": "larynx; throat"
    },
    {
      "character": "𗳮",
      "reading": "γu̱²",
      "explanationEN": "curled hair"
    },
    {
      "character": "𗘉",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "pearl"
    },
    {
      "character": "𘗸",
      "reading": "vwi̱¹",
      "explanationEN": "to lay in; to store up"
    },
    {
      "character": "𘔎",
      "reading": "da̱ṃ¹",
      "explanationEN": "to eat; to feed"
    },
    {
      "character": "𘜃",
      "reading": "dzi¹",
      "explanationEN": "equal; even"
    },
    {
      "character": "𘜅",
      "reading": "lli̱²",
      "explanationEN": "wrestling"
    },
    {
      "character": "𗸩",
      "reading": "leh¹",
      "explanationEN": "child"
    },
    {
      "character": "𘘭",
      "reading": "vih²",
      "explanationEN": "to know.ᴀ; to be capable.ᴀ"
    },
    {
      "character": "𘘹",
      "reading": "kə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘑡",
      "reading": "rvwo̱r²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗳱",
      "reading": "tha²",
      "explanationEN": "that; it; he"
    },
    {
      "character": "𘃴",
      "reading": "le²",
      "explanationEN": "noon"
    },
    {
      "character": "𗰸",
      "reading": "khwə¹",
      "explanationEN": "to cut; to break"
    },
    {
      "character": "𘆂",
      "reading": "le²",
      "explanationEN": "noon"
    },
    {
      "character": "𗳲",
      "reading": "lheṃ¹",
      "explanationEN": "mountain; ridge"
    },
    {
      "character": "𗰾",
      "reading": "nih²",
      "explanationEN": "wizard; sorcerer"
    },
    {
      "character": "𗱅",
      "reading": "lhih²",
      "explanationEN": "down; downward"
    },
    {
      "character": "𗱆",
      "reading": "ŋwi̱²",
      "explanationEN": "cattle; ox"
    },
    {
      "character": "𗳺",
      "reading": "tha²",
      "explanationEN": "that; it"
    },
    {
      "character": "𗳼",
      "reading": "giw²",
      "explanationEN": "to fall"
    },
    {
      "character": "𘃶",
      "reading": "swo²",
      "explanationEN": "to pestle; to grind"
    },
    {
      "character": "𘃷",
      "reading": "nu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘇧",
      "reading": "yoṃ²",
      "explanationEN": "grey"
    },
    {
      "character": "𘇪",
      "reading": "bao̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗳻",
      "reading": "tśa¹",
      "explanationEN": "upright; fairminded"
    },
    {
      "character": "𗷮",
      "reading": "vwo̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘑫",
      "reading": "ka̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗰽",
      "reading": "dzwəh¹",
      "explanationEN": "wall"
    },
    {
      "character": "𗸈",
      "reading": "di¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗸈",
      "reading": "dwu¹",
      "explanationEN": "to press"
    },
    {
      "character": "𗷶",
      "reading": "bə¹",
      "explanationEN": "to overflow"
    },
    {
      "character": "𗷺",
      "reading": "ma¹",
      "explanationEN": "former times"
    },
    {
      "character": "𗸃",
      "reading": "vwi̱¹",
      "explanationEN": "the fourth of the ten Heavenly Stems"
    },
    {
      "character": "𗳴",
      "reading": "tṣhaə̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗷵",
      "reading": "təh²",
      "explanationEN": "tired; weary"
    },
    {
      "character": "𘈐",
      "reading": "ryar²",
      "explanationEN": "tired; weary"
    },
    {
      "character": "𘑱",
      "reading": "śwe²",
      "explanationEN": "bolt for a door"
    },
    {
      "character": "𗸍",
      "reading": "tsu̱¹",
      "explanationEN": "diligent; industrious"
    },
    {
      "character": "𘜁",
      "reading": "tsa¹",
      "explanationEN": "elder sister"
    },
    {
      "character": "𘑪",
      "reading": "qhwə̱¹",
      "explanationEN": "among; between"
    },
    {
      "character": "𘒶",
      "reading": "fwə¹",
      "explanationEN": "Buddha"
    },
    {
      "character": "𗱍",
      "reading": "nthu̱¹",
      "explanationEN": "to sigh sorrowfully"
    },
    {
      "character": "𘜋",
      "reading": "phaṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘜌",
      "reading": "phao̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗷯",
      "reading": "rqai̱r¹",
      "explanationEN": "to chew"
    },
    {
      "character": "𗷴",
      "reading": "rdwə̱r²",
      "explanationEN": "to inspect"
    },
    {
      "character": "𗷻",
      "reading": "te²",
      "explanationEN": "equality"
    },
    {
      "character": "𗸓",
      "reading": "rdwə̱r¹",
      "explanationEN": "enemy; foe"
    },
    {
      "character": "𗈻",
      "reading": "tṣai̱w¹",
      "explanationEN": "hot"
    },
    {
      "character": "𗖽",
      "reading": "ye¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗖁",
      "reading": "dzuh¹",
      "explanationEN": "tall; high"
    },
    {
      "character": "𗖏",
      "reading": "nwo²",
      "explanationEN": "former times"
    },
    {
      "character": "𗖾",
      "reading": "thə̱h¹",
      "explanationEN": "to force"
    },
    {
      "character": "𗉇",
      "reading": "tsa¹",
      "explanationEN": "rapid"
    },
    {
      "character": "𗖋",
      "reading": "swə²",
      "explanationEN": "who; which; someone"
    },
    {
      "character": "𗖵",
      "reading": "bu¹",
      "explanationEN": "REF: referential case"
    },
    {
      "character": "𗖛",
      "reading": "yi¹",
      "explanationEN": "alas; alack"
    },
    {
      "character": "𗖟",
      "reading": "kah¹",
      "explanationEN": "musical instrument; instrument"
    },
    {
      "character": "𗖴",
      "reading": "rkiwr²",
      "explanationEN": "weaving; weft"
    },
    {
      "character": "𗖰",
      "reading": "rlwə̱r²",
      "explanationEN": "sutra; scripture"
    },
    {
      "character": "𗗄",
      "reading": "lu²",
      "explanationEN": "an official title"
    },
    {
      "character": "𗉁",
      "reading": "γai̱h¹",
      "explanationEN": "to cook"
    },
    {
      "character": "𗉂",
      "reading": "γai̱h¹",
      "explanationEN": "concubine"
    },
    {
      "character": "𗖶",
      "reading": "swə¹",
      "explanationEN": "who; which; what"
    },
    {
      "character": "𘗼",
      "reading": "qhae̱ṃ¹",
      "explanationEN": "hole; hollow"
    },
    {
      "character": "𘙲",
      "reading": "dźo¹",
      "explanationEN": "long"
    },
    {
      "character": "𗕸",
      "reading": "tśhoṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗕺",
      "reading": "ŋŋwu̱²",
      "explanationEN": "language; speech"
    },
    {
      "character": "𗗅",
      "reading": "śwe¹",
      "explanationEN": "to curse; to swear"
    },
    {
      "character": "𗖂",
      "reading": "tśhwow¹",
      "explanationEN": "to advise; to persuade"
    },
    {
      "character": "𗖌",
      "reading": "gə²",
      "explanationEN": "INDF"
    },
    {
      "character": "𘇴",
      "reading": "vwi̱¹",
      "explanationEN": "to make (wine)"
    },
    {
      "character": "𗗀",
      "reading": "śə¹",
      "explanationEN": "wan and sallow"
    },
    {
      "character": "𘙺",
      "reading": "ye²",
      "explanationEN": "to expand; to enlarge"
    },
    {
      "character": "𗖿",
      "reading": "thə̱h¹",
      "explanationEN": "to force"
    },
    {
      "character": "𗉈",
      "reading": "tsa¹",
      "explanationEN": "rapid"
    },
    {
      "character": "𗖎",
      "reading": "qae̱h²",
      "explanationEN": "to judge; to decide; to determine"
    },
    {
      "character": "𗖀",
      "reading": "dzeṃ¹",
      "explanationEN": "to suit; to be convenient; to harmonize"
    },
    {
      "character": "𗕹",
      "reading": "tah¹",
      "explanationEN": "to answer"
    },
    {
      "character": "𗖊",
      "reading": "śə¹",
      "explanationEN": "to send (an envoy)"
    },
    {
      "character": "𘙴",
      "reading": "rqo̱r¹",
      "explanationEN": "larynx; throat"
    },
    {
      "character": "𘙳",
      "reading": "veh¹",
      "explanationEN": "to shrink; to contract"
    },
    {
      "character": "𘙵",
      "reading": "dzu̱²",
      "explanationEN": "a long narrow piece"
    },
    {
      "character": "𗖐",
      "reading": "bu¹",
      "explanationEN": "hiccup"
    },
    {
      "character": "𗖜",
      "reading": "tah¹",
      "explanationEN": "to force; to compel"
    },
    {
      "character": "𗳅",
      "reading": "vwi̱²",
      "explanationEN": "danger"
    },
    {
      "character": "𗴀",
      "reading": "so̱²",
      "explanationEN": "tall; high"
    },
    {
      "character": "𗹓",
      "reading": "tśeṃ¹",
      "explanationEN": "to send; to dispatch"
    },
    {
      "character": "𗳇",
      "reading": "dzuh¹",
      "explanationEN": "mound; mausoleum"
    },
    {
      "character": "𗹙",
      "reading": "rtser¹",
      "explanationEN": "method; art; skill"
    },
    {
      "character": "𗴃",
      "reading": "phao̱ṃ¹",
      "explanationEN": "two; pair"
    },
    {
      "character": "𘈳",
      "reading": "moh²",
      "explanationEN": "orphan; widower"
    },
    {
      "character": "𘝷",
      "reading": "laa̱¹",
      "explanationEN": "beautiful; gorgeous"
    },
    {
      "character": "𗳋",
      "reading": "ge¹",
      "explanationEN": "to open; to spread"
    },
    {
      "character": "𘈶",
      "reading": "rər²",
      "explanationEN": "widow"
    },
    {
      "character": "𗹏",
      "reading": "do̱ṃ¹",
      "explanationEN": "evil; crafty"
    },
    {
      "character": "𗹗",
      "reading": "ġo̱²",
      "explanationEN": "to get rid of"
    },
    {
      "character": "𗶤",
      "reading": "lu¹",
      "explanationEN": "felt; mat"
    },
    {
      "character": "𘞿",
      "reading": "ve¹",
      "explanationEN": "to have"
    },
    {
      "character": "𘞽",
      "reading": "zəh¹",
      "explanationEN": "surname on mother’s line"
    },
    {
      "character": "𗰖",
      "reading": "nṣao¹",
      "explanationEN": "to gather; to collect"
    },
    {
      "character": "𘘜",
      "reading": "nẓae̱¹",
      "explanationEN": "to collect"
    },
    {
      "character": "𗘞",
      "reading": "lha¹",
      "explanationEN": "sage"
    },
    {
      "character": "𗟶",
      "reading": "ryir¹",
      "explanationEN": "emolument"
    },
    {
      "character": "𗸡",
      "reading": "dzeṃ²",
      "explanationEN": "to make love; to rape"
    },
    {
      "character": "𘒥",
      "reading": "mphə¹",
      "explanationEN": "to flatter"
    },
    {
      "character": "𗷡",
      "reading": "rker²",
      "explanationEN": "to feed"
    },
    {
      "character": "𗸺",
      "reading": "swə²",
      "explanationEN": "felt; rug"
    },
    {
      "character": "𗍸",
      "reading": "rpa̱r²",
      "explanationEN": "a horse with white trotters"
    },
    {
      "character": "𘟤",
      "reading": "swuh²",
      "explanationEN": "life"
    },
    {
      "character": "𘇖",
      "reading": "lu̱²",
      "explanationEN": "felt; rug"
    },
    {
      "character": "𘓭",
      "reading": "di²",
      "explanationEN": "to deal with"
    },
    {
      "character": "𘘢",
      "reading": "gih²",
      "explanationEN": "to depend on; to rely on"
    },
    {
      "character": "𗰓",
      "reading": "lloh²",
      "explanationEN": "where"
    },
    {
      "character": "𗙰",
      "reading": "qə̱¹",
      "explanationEN": "tortoise; turtle"
    },
    {
      "character": "𗸹",
      "reading": "sə²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘃻",
      "reading": "yiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘄁",
      "reading": "kə¹",
      "explanationEN": "a kind of animal like a mouse eats insects"
    },
    {
      "character": "𘃸",
      "reading": "leh¹",
      "explanationEN": "prosperous"
    },
    {
      "character": "𘜔",
      "reading": "rŋi̱wr²",
      "explanationEN": "number; numeral"
    },
    {
      "character": "𗙒",
      "reading": "laa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗰝",
      "reading": "pai̱h¹",
      "explanationEN": "frog"
    },
    {
      "character": "𘄩",
      "reading": "tsuh¹",
      "explanationEN": "to beat"
    },
    {
      "character": "𘘇",
      "reading": "świ¹",
      "explanationEN": "wolf"
    },
    {
      "character": "𘓊",
      "reading": "rzər¹",
      "explanationEN": "few; little; tiny"
    },
    {
      "character": "𗎀",
      "reading": "tśa¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗗖",
      "reading": "leṃh²",
      "explanationEN": "spinach"
    },
    {
      "character": "𘃼",
      "reading": "la̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗠀",
      "reading": "dzwə̱¹",
      "explanationEN": "plan"
    },
    {
      "character": "𘓌",
      "reading": "lhi̱w¹",
      "explanationEN": "herbage"
    },
    {
      "character": "𘟂",
      "reading": "ŋwu̱²",
      "explanationEN": "to be"
    },
    {
      "character": "𗗜",
      "reading": "rthoṃr²",
      "explanationEN": "to wave; to shake"
    },
    {
      "character": "𘓺",
      "reading": "rŋwə̱r¹",
      "explanationEN": "emperor; high heaven"
    },
    {
      "character": "𘝽",
      "reading": "qwo̱¹",
      "explanationEN": "a kind of bee"
    },
    {
      "character": "𘟌",
      "reading": "rtsa̱r¹",
      "explanationEN": "pepper"
    },
    {
      "character": "𗷥",
      "reading": "ndu̱²",
      "explanationEN": "angry"
    },
    {
      "character": "𗶙",
      "reading": "dźwə²",
      "explanationEN": "very close relative"
    },
    {
      "character": "𘈟",
      "reading": "lə̱¹",
      "explanationEN": "to hinder; to block"
    },
    {
      "character": "𘆡",
      "reading": "tsheh²",
      "explanationEN": "gorgeous"
    },
    {
      "character": "𘇝",
      "reading": "bi̱²",
      "explanationEN": "two"
    },
    {
      "character": "𘇠",
      "reading": "rba̱r²",
      "explanationEN": "pair"
    },
    {
      "character": "𘞸",
      "reading": "peṃ¹",
      "explanationEN": "universal; general"
    },
    {
      "character": "𘆦",
      "reading": "ndze̱¹",
      "explanationEN": "horse for riding"
    },
    {
      "character": "𘙯",
      "reading": "mbae̱¹",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𘔪",
      "reading": "dzeṃ¹",
      "explanationEN": "quiet"
    },
    {
      "character": "𘚡",
      "reading": "lə̱²",
      "explanationEN": "flea"
    },
    {
      "character": "𘒩",
      "reading": "dzu¹",
      "explanationEN": "to admonish; to instruct"
    },
    {
      "character": "𘇀",
      "reading": "tśho²",
      "explanationEN": "shaft of cart or carriage"
    },
    {
      "character": "𘑛",
      "reading": "khwə²",
      "explanationEN": "shoulder"
    },
    {
      "character": "𘞳",
      "reading": "vah¹",
      "explanationEN": "tumor"
    },
    {
      "character": "𗸗",
      "reading": "rdzər¹",
      "explanationEN": "to chop; to cut off"
    },
    {
      "character": "𘔑",
      "reading": "ne¹",
      "explanationEN": "to be stifled to death"
    },
    {
      "character": "𗉤",
      "reading": "tśhə¹",
      "explanationEN": "to carry on the back"
    },
    {
      "character": "𘑞",
      "reading": "zo̱ṃ²",
      "explanationEN": "elephant"
    },
    {
      "character": "𘇼",
      "reading": "ge²",
      "explanationEN": "to marry; to unite in marriage"
    },
    {
      "character": "𗸟",
      "reading": "ŋġa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗡟",
      "reading": "rmer²",
      "explanationEN": "to seek; to find"
    },
    {
      "character": "𗡶",
      "reading": "śe¹",
      "explanationEN": "a suffix"
    },
    {
      "character": "𘜻",
      "reading": "phaa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗍎",
      "reading": "pa¹",
      "explanationEN": "deep blue and green"
    },
    {
      "character": "𗍘",
      "reading": "pa¹",
      "explanationEN": "butterfly"
    },
    {
      "character": "𘃯",
      "reading": "goh¹",
      "explanationEN": "to wear.ʙ"
    },
    {
      "character": "𘘑",
      "reading": "rvwi̱r¹",
      "explanationEN": "abundant"
    },
    {
      "character": "𗡮",
      "reading": "lo²",
      "explanationEN": "dignified"
    },
    {
      "character": "𗵽",
      "reading": "nllu²",
      "explanationEN": "beautiful"
    },
    {
      "character": "𘄳",
      "reading": "nlə¹",
      "explanationEN": "ashamed"
    },
    {
      "character": "𘇹",
      "reading": "ẓaə̱¹",
      "explanationEN": "string; thread"
    },
    {
      "character": "𗸦",
      "reading": "dźwu¹",
      "explanationEN": "human being; person"
    },
    {
      "character": "𘈫",
      "reading": "γu̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘔒",
      "reading": "ne²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘔙",
      "reading": "ne²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𘚋",
      "reading": "dao̱h¹",
      "explanationEN": "sisters"
    },
    {
      "character": "𘗵",
      "reading": "rar²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𘚨",
      "reading": "yo̱ṃ²",
      "explanationEN": "relatives"
    },
    {
      "character": "𘚘",
      "reading": "lhi²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘝃",
      "reading": "tsi²",
      "explanationEN": "fly and mosquito"
    },
    {
      "character": "𘚛",
      "reading": "lhi²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𗸖",
      "reading": "ŋġa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘓦",
      "reading": "lleh¹",
      "explanationEN": "be awake"
    },
    {
      "character": "𘗬",
      "reading": "dźu¹",
      "explanationEN": "to cheat; to deceive"
    },
    {
      "character": "𗌹",
      "reading": "rner¹",
      "explanationEN": "wild animal"
    },
    {
      "character": "𗘌",
      "reading": "śwoṃ¹",
      "explanationEN": "to send; to dispatch"
    },
    {
      "character": "𗘐",
      "reading": "qwe̱¹",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𗡨",
      "reading": "dẓao̱²",
      "explanationEN": "to help"
    },
    {
      "character": "𗳨",
      "reading": "dẓaa̱²",
      "explanationEN": "incomplete"
    },
    {
      "character": "𘅀",
      "reading": "ta̱?",
      "explanationEN": "to rebel against"
    },
    {
      "character": "𘘾",
      "reading": "rdwar¹",
      "explanationEN": "skin"
    },
    {
      "character": "𘞊",
      "reading": "qhaə̱²",
      "explanationEN": "indignant; angry"
    },
    {
      "character": "𗎜",
      "reading": "qau̱²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𗙷",
      "reading": "rir²",
      "explanationEN": "front"
    },
    {
      "character": "𗸶",
      "reading": "lhweh²",
      "explanationEN": "to change irregularly; to fluctuate"
    },
    {
      "character": "𘄕",
      "reading": "sə̱²",
      "explanationEN": "selfishness"
    },
    {
      "character": "𘜈",
      "reading": "dẓao̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗉑",
      "reading": "dzwəh¹",
      "explanationEN": "post; stick"
    },
    {
      "character": "𗉭",
      "reading": "tśeṃ¹",
      "explanationEN": "scheme; stratagem"
    },
    {
      "character": "𗗻",
      "reading": "na̱¹",
      "explanationEN": "dog"
    },
    {
      "character": "𗶎",
      "reading": "dźwə¹",
      "explanationEN": "sister-in-law"
    },
    {
      "character": "𘅙",
      "reading": "rar²",
      "explanationEN": "mark; trace"
    },
    {
      "character": "𘅧",
      "reading": "kwi¹",
      "explanationEN": "honorable"
    },
    {
      "character": "𘔤",
      "reading": "kuh¹",
      "explanationEN": "dark; black"
    },
    {
      "character": "𘇿",
      "reading": "ṇi¹",
      "explanationEN": "to marry"
    },
    {
      "character": "𘜟",
      "reading": "bə¹",
      "explanationEN": "few; little; less"
    },
    {
      "character": "𘙉",
      "reading": "keṃ¹",
      "explanationEN": "epidermis; outside"
    },
    {
      "character": "𘙡",
      "reading": "zwi̱¹",
      "explanationEN": "modest"
    },
    {
      "character": "𘝶",
      "reading": "the²",
      "explanationEN": "why; how"
    },
    {
      "character": "𘟓",
      "reading": "tseṃh¹",
      "explanationEN": "modest; humble"
    },
    {
      "character": "𗗼",
      "reading": "na̱¹",
      "explanationEN": "wizard"
    },
    {
      "character": "𗉝",
      "reading": "śih²",
      "explanationEN": "grass; cogongrass"
    },
    {
      "character": "𗍏",
      "reading": "su²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗘙",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "scorpion"
    },
    {
      "character": "𗵵",
      "reading": "tsuh¹",
      "explanationEN": "spider"
    },
    {
      "character": "𘈯",
      "reading": "bə̱²",
      "explanationEN": "scabies"
    },
    {
      "character": "𘗽",
      "reading": "zoh²",
      "explanationEN": "longevity; life"
    },
    {
      "character": "𗗰",
      "reading": "khwə²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗡦",
      "reading": "ryər²",
      "explanationEN": "a necklace of precious stones"
    },
    {
      "character": "𘔕",
      "reading": "ne²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𘙥",
      "reading": "lhi²",
      "explanationEN": "slow; gentle; quiet"
    },
    {
      "character": "𘞴",
      "reading": "vah¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𘞵",
      "reading": "dza¹",
      "explanationEN": "to grow"
    },
    {
      "character": "𘟄",
      "reading": "γə¹",
      "explanationEN": "mother’s brother; uncle"
    },
    {
      "character": "𗟦",
      "reading": "ma̱ṃ¹",
      "explanationEN": "luck; fortune"
    },
    {
      "character": "𗍉",
      "reading": "hə̱²",
      "explanationEN": "to choke; to swell"
    },
    {
      "character": "𘅺",
      "reading": "de̱ṃ¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𘙒",
      "reading": "pai̱h¹",
      "explanationEN": "to fill in; to stuff"
    },
    {
      "character": "𗗽",
      "reading": "dẓaə̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘅪",
      "reading": "ta̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗟘",
      "reading": "po¹",
      "explanationEN": "to burn.ʙ"
    },
    {
      "character": "𘈎",
      "reading": "toh²",
      "explanationEN": "younger brother"
    },
    {
      "character": "𗸂",
      "reading": "ẓwae̱¹",
      "explanationEN": "timid"
    },
    {
      "character": "𘈑",
      "reading": "rmər¹",
      "explanationEN": "people; tribe; scholar"
    },
    {
      "character": "𗱊",
      "reading": "thəh²",
      "explanationEN": "to roll up; volume (of books)"
    },
    {
      "character": "𘑭",
      "reading": "zi¹",
      "explanationEN": "other; that; it"
    },
    {
      "character": "𗸎",
      "reading": "qwə̱²",
      "explanationEN": "to burst; to break"
    },
    {
      "character": "𘜀",
      "reading": "rmər¹",
      "explanationEN": "strong; robust"
    },
    {
      "character": "𗳳",
      "reading": "ẓaə̱¹",
      "explanationEN": "to guide"
    },
    {
      "character": "𗷰",
      "reading": "t?²",
      "explanationEN": "to refuse; to remove"
    },
    {
      "character": "𘈓",
      "reading": "ra̱r²",
      "explanationEN": "frog"
    },
    {
      "character": "𘑬",
      "reading": "rdwi̱wr²",
      "explanationEN": "consciousness"
    },
    {
      "character": "𗷼",
      "reading": "ni?",
      "explanationEN": "to defeat"
    },
    {
      "character": "𗸑",
      "reading": "rdẓaə̱r¹",
      "explanationEN": "roller; to grind or husk with a roller"
    },
    {
      "character": "𗉅",
      "reading": "tsaṃ¹",
      "explanationEN": "hot"
    },
    {
      "character": "𗖄",
      "reading": "nwi¹",
      "explanationEN": "kindness; favour"
    },
    {
      "character": "𗍤",
      "reading": "da̱²",
      "explanationEN": "to stand up; to raise"
    },
    {
      "character": "𘘌",
      "reading": "śuh¹",
      "explanationEN": "skull (of a dead person)"
    },
    {
      "character": "𘘏",
      "reading": "yu¹",
      "explanationEN": "to haunt; to make mischief"
    },
    {
      "character": "𗹛",
      "reading": "tśe²",
      "explanationEN": "lion"
    },
    {
      "character": "𘙶",
      "reading": "ri̱r²",
      "explanationEN": "long narrow strips; pieces (of writing)"
    },
    {
      "character": "𗈼",
      "reading": "pu²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗖕",
      "reading": "na̱h²",
      "explanationEN": "to scold; to condemn"
    },
    {
      "character": "𗖃",
      "reading": "???",
      "explanationEN": "another"
    },
    {
      "character": "𗖒",
      "reading": "da̱h²",
      "explanationEN": "fault; error"
    },
    {
      "character": "𗖷",
      "reading": "dau̱¹",
      "explanationEN": "anger; rage"
    },
    {
      "character": "𗖳",
      "reading": "la̱¹",
      "explanationEN": "to weave"
    },
    {
      "character": "𗹚",
      "reading": "rner¹",
      "explanationEN": "soil; land"
    },
    {
      "character": "𘇲",
      "reading": "vwi̱¹",
      "explanationEN": "ripe; cooked"
    },
    {
      "character": "𘇵",
      "reading": "tśhə²",
      "explanationEN": "cattail"
    },
    {
      "character": "𗗍",
      "reading": "lleh¹",
      "explanationEN": "a kind of maggot"
    },
    {
      "character": "𘇫",
      "reading": "nə¹",
      "explanationEN": "blood relations"
    },
    {
      "character": "𗳽",
      "reading": "lo̱ṃ²",
      "explanationEN": "slope; hillock"
    },
    {
      "character": "𗹎",
      "reading": "twa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘔨",
      "reading": "ne²",
      "explanationEN": "to compel"
    },
    {
      "character": "𗳈",
      "reading": "rar¹",
      "explanationEN": "target; shield"
    },
    {
      "character": "𘞎",
      "reading": "qa̱h²",
      "explanationEN": "rake"
    },
    {
      "character": "𗸽",
      "reading": "tśuo²",
      "explanationEN": "not"
    },
    {
      "character": "𘚗",
      "reading": "lo̱ṃ²",
      "explanationEN": "origin; source"
    },
    {
      "character": "𘄈",
      "reading": "γo̱²",
      "explanationEN": "breeding"
    },
    {
      "character": "𗸣",
      "reading": "tə̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘑨",
      "reading": "γwu̱h²",
      "explanationEN": "to help; to aid"
    },
    {
      "character": "𘒤",
      "reading": "li̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘒼",
      "reading": "rna̱r²",
      "explanationEN": "the old; the aged"
    },
    {
      "character": "𘆨",
      "reading": "ti²",
      "explanationEN": "to remain"
    },
    {
      "character": "𘇄",
      "reading": "lwu¹",
      "explanationEN": "to lose; to disobey"
    },
    {
      "character": "𘇋",
      "reading": "ẓae̱h²",
      "explanationEN": "evil; harm; calamity"
    },
    {
      "character": "𗷘",
      "reading": "qae̱¹",
      "explanationEN": "to drive; to expel"
    },
    {
      "character": "𗟴",
      "reading": "ŋkhə²",
      "explanationEN": "oral cavity"
    },
    {
      "character": "𗙢",
      "reading": "vwa̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘓲",
      "reading": "rŋwə̱r²",
      "explanationEN": "blue and green"
    },
    {
      "character": "𘆧",
      "reading": "tsheh²",
      "explanationEN": "ten thousand"
    },
    {
      "character": "𗸾",
      "reading": "dih²",
      "explanationEN": "bald; bare"
    },
    {
      "character": "𘄞",
      "reading": "γu̱h¹",
      "explanationEN": "foreign tribes"
    },
    {
      "character": "𘚂",
      "reading": "lha̱ṃ¹",
      "explanationEN": "dawn; daybreak"
    },
    {
      "character": "𗙖",
      "reading": "pha̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘃿",
      "reading": "la̱²",
      "explanationEN": "camel"
    },
    {
      "character": "𗗚",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "sea"
    },
    {
      "character": "𘄮",
      "reading": "ŋkhə¹",
      "explanationEN": "to grind"
    },
    {
      "character": "𗗞",
      "reading": "llae̱h¹",
      "explanationEN": "cooked wheaten food"
    },
    {
      "character": "𘙽",
      "reading": "tśhiw¹",
      "explanationEN": "yellow"
    },
    {
      "character": "𘆩",
      "reading": "mi̱h²",
      "explanationEN": "wing"
    },
    {
      "character": "𘆵",
      "reading": "ṇi¹",
      "explanationEN": "to clear away"
    },
    {
      "character": "𘆱",
      "reading": "kwe²",
      "explanationEN": "skilful; ingenious; clever"
    },
    {
      "character": "𘙭",
      "reading": "li̱w²",
      "explanationEN": "dumpling made of glutinous rice wrapped in bamboo or reed leaves (eaten during the Dragon Boat Festival)"
    },
    {
      "character": "𘆴",
      "reading": "so̱²",
      "explanationEN": "well-proportioned"
    },
    {
      "character": "𘙪",
      "reading": "sə̱²",
      "explanationEN": "to cry; to weep; to sob"
    },
    {
      "character": "𘈥",
      "reading": "sa̱¹",
      "explanationEN": "to swell; to choke"
    },
    {
      "character": "𘇌",
      "reading": "dzwi¹",
      "explanationEN": "thin; emaciated"
    },
    {
      "character": "𘝁",
      "reading": "thə̱²",
      "explanationEN": "wing"
    },
    {
      "character": "𘗱",
      "reading": "di̱w²",
      "explanationEN": "bait"
    },
    {
      "character": "𘅁",
      "reading": "ri̱r²",
      "explanationEN": "to ask for help; to walk"
    },
    {
      "character": "𘞓",
      "reading": "ve¹",
      "explanationEN": "to go"
    },
    {
      "character": "𗉱",
      "reading": "śwu¹",
      "explanationEN": "to flatter"
    },
    {
      "character": "𗰱",
      "reading": "ġu̱¹",
      "explanationEN": "to happen; to build"
    },
    {
      "character": "𘘳",
      "reading": "ŋgi²",
      "explanationEN": "to rise; to get up; to stand up"
    },
    {
      "character": "𘝅",
      "reading": "ntśhə²",
      "explanationEN": "reversal"
    },
    {
      "character": "𘜪",
      "reading": "ryer¹",
      "explanationEN": "to fall; to sink"
    },
    {
      "character": "𘑢",
      "reading": "khwə¹",
      "explanationEN": "wrist"
    },
    {
      "character": "𘒂",
      "reading": "haa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗉎",
      "reading": "bae̱h¹",
      "explanationEN": "eulogy; wittcism"
    },
    {
      "character": "𘄽",
      "reading": "ŋa̱h²",
      "explanationEN": "good; kind"
    },
    {
      "character": "𘗺",
      "reading": "vwi̱²",
      "explanationEN": "soil; land"
    },
    {
      "character": "𗌿",
      "reading": "peṃh²",
      "explanationEN": "shovel"
    },
    {
      "character": "𘃲",
      "reading": "veh¹",
      "explanationEN": "to mend"
    },
    {
      "character": "𘘒",
      "reading": "rvwi̱r¹",
      "explanationEN": "hair"
    },
    {
      "character": "𘘕",
      "reading": "rvwu̱r¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗵾",
      "reading": "baa̱²",
      "explanationEN": "apron"
    },
    {
      "character": "𗶁",
      "reading": "mi̱h²",
      "explanationEN": "powder"
    },
    {
      "character": "𘅂",
      "reading": "lah¹",
      "explanationEN": "thatched shed"
    },
    {
      "character": "𘑟",
      "reading": "mə²",
      "explanationEN": "chin"
    },
    {
      "character": "𘇽",
      "reading": "nno̱²",
      "explanationEN": "brown"
    },
    {
      "character": "𘔓",
      "reading": "tṣwai̱¹",
      "explanationEN": "red"
    },
    {
      "character": "𘙀",
      "reading": "nta̱r¹",
      "explanationEN": "to slaughter"
    },
    {
      "character": "𘘴",
      "reading": "gwoṃ¹",
      "explanationEN": "to throw; to cast"
    },
    {
      "character": "𘜜",
      "reading": "bae̱²",
      "explanationEN": "stubble"
    },
    {
      "character": "𘝂",
      "reading": "dźih²",
      "explanationEN": "to cast"
    },
    {
      "character": "𘈦",
      "reading": "nlhu¹",
      "explanationEN": "grey"
    },
    {
      "character": "𗡢",
      "reading": "nto¹",
      "explanationEN": "to look for; to seek"
    },
    {
      "character": "𗡧",
      "reading": "ndzi²",
      "explanationEN": "to conceal"
    },
    {
      "character": "𗶄",
      "reading": "mmə²",
      "explanationEN": "camel"
    },
    {
      "character": "𘅍",
      "reading": "zeh¹",
      "explanationEN": "TIME.ᴀ: perfective time"
    },
    {
      "character": "𘈖",
      "reading": "vwi̱²",
      "explanationEN": "to correspond"
    },
    {
      "character": "𗉔",
      "reading": "tśiw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗎚",
      "reading": "rmi̱r²",
      "explanationEN": "pocket; bag"
    },
    {
      "character": "𗙺",
      "reading": "yu²",
      "explanationEN": "shed; curtain"
    },
    {
      "character": "𘄖",
      "reading": "dau̱²",
      "explanationEN": "a kind of Chinese-style underwear"
    },
    {
      "character": "𘈜",
      "reading": "thwo̱¹",
      "explanationEN": "to arrive"
    },
    {
      "character": "𘄚",
      "reading": "dau̱²",
      "explanationEN": "a kind of Chinese-style underwear"
    },
    {
      "character": "𘗷",
      "reading": "ṇə¹",
      "explanationEN": "skirt"
    },
    {
      "character": "𗟤",
      "reading": "tṣai̱w¹",
      "explanationEN": "to whisk or wipe off; ox"
    },
    {
      "character": "𘇛",
      "reading": "peṃh¹",
      "explanationEN": "a battle-axe used in ancient China"
    },
    {
      "character": "𘙣",
      "reading": "nśi¹",
      "explanationEN": "to kill.ᴀ"
    },
    {
      "character": "𘅲",
      "reading": "tshi²",
      "explanationEN": "general; universal"
    },
    {
      "character": "𗱂",
      "reading": "si¹",
      "explanationEN": "power of arms"
    },
    {
      "character": "𘒷",
      "reading": "fə¹",
      "explanationEN": "to eliminate; to clear away"
    },
    {
      "character": "𘇚",
      "reading": "mmi²",
      "explanationEN": "to administer; to manage"
    },
    {
      "character": "𗷷",
      "reading": "lhih²",
      "explanationEN": "to break; to crack"
    },
    {
      "character": "𗰺",
      "reading": "dzwəh¹",
      "explanationEN": "fast; rapid"
    },
    {
      "character": "𘆁",
      "reading": "lwe̱ṃ¹",
      "explanationEN": "to jump; to leap"
    },
    {
      "character": "𘆄",
      "reading": "nə²",
      "explanationEN": "PL: plural suffix"
    },
    {
      "character": "𘑮",
      "reading": "dwu¹",
      "explanationEN": "impressive and dignified manners"
    },
    {
      "character": "𘘍",
      "reading": "dih¹",
      "explanationEN": "hell; inferno"
    },
    {
      "character": "𗖑",
      "reading": "lu²",
      "explanationEN": "to plot; to scheme; to conspire"
    },
    {
      "character": "𗖔",
      "reading": "ha̱²",
      "explanationEN": "peaceful"
    },
    {
      "character": "𗖓",
      "reading": "nllo̱²",
      "explanationEN": "to report"
    },
    {
      "character": "𘙼",
      "reading": "mau̱¹",
      "explanationEN": "a mouth sticks out"
    },
    {
      "character": "𗕼",
      "reading": "lu²",
      "explanationEN": "to spread.ᴀ; to cast.ᴀ"
    },
    {
      "character": "𗈾",
      "reading": "lhwah¹",
      "explanationEN": "ash; dust"
    },
    {
      "character": "𗖖",
      "reading": "nəh¹",
      "explanationEN": "to tell; to inform"
    },
    {
      "character": "𗗂",
      "reading": "mo̱²",
      "explanationEN": "a modal auxiliary"
    },
    {
      "character": "𗉉",
      "reading": "dźwe¹",
      "explanationEN": "cool"
    },
    {
      "character": "𘛾",
      "reading": "luh²",
      "explanationEN": "powder"
    },
    {
      "character": "𗘡",
      "reading": "tśheṃ¹",
      "explanationEN": "down"
    },
    {
      "character": "𘇮",
      "reading": "da̱²",
      "explanationEN": "big; large"
    },
    {
      "character": "𘞍",
      "reading": "rti̱wr¹",
      "explanationEN": "heavy"
    },
    {
      "character": "𘞚",
      "reading": "mbe¹",
      "explanationEN": "times"
    },
    {
      "character": "𘟉",
      "reading": "tśhiw¹",
      "explanationEN": "steaming; seething"
    },
    {
      "character": "𘘙",
      "reading": "dẓae̱h¹",
      "explanationEN": "to enclose; to surround"
    },
    {
      "character": "𘜒",
      "reading": "śu²",
      "explanationEN": "a measure word for anything small and roundish"
    },
    {
      "character": "𗰒",
      "reading": "bo̱ṃ²",
      "explanationEN": "rapid"
    },
    {
      "character": "𗍾",
      "reading": "ve²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗹂",
      "reading": "goṃ²",
      "explanationEN": "to be stuporous; to be comatose"
    },
    {
      "character": "𘜗",
      "reading": "mma²",
      "explanationEN": "many; much"
    },
    {
      "character": "𗟱",
      "reading": "pə¹",
      "explanationEN": "today; the present"
    },
    {
      "character": "𗟻",
      "reading": "phi¹",
      "explanationEN": "causative.ᴀ"
    },
    {
      "character": "𘘃",
      "reading": "ŋgi¹",
      "explanationEN": "to chew; to bite"
    },
    {
      "character": "𗙄",
      "reading": "rẓaə̱r¹",
      "explanationEN": "sound; noise"
    },
    {
      "character": "𗍺",
      "reading": "tśa¹",
      "explanationEN": "ceremony; courtesy"
    },
    {
      "character": "𗍼",
      "reading": "ve²",
      "explanationEN": "face"
    },
    {
      "character": "𗙳",
      "reading": "qə̱¹",
      "explanationEN": "coarse; rough"
    },
    {
      "character": "𗰚",
      "reading": "nllə¹",
      "explanationEN": "a unit of weight"
    },
    {
      "character": "𘄏",
      "reading": "dźu²",
      "explanationEN": "to meet"
    },
    {
      "character": "𘄑",
      "reading": "ba̱h²",
      "explanationEN": "to help"
    },
    {
      "character": "𘘡",
      "reading": "za̱¹",
      "explanationEN": "the name of Tangut’s ancestors"
    },
    {
      "character": "𗴊",
      "reading": "lhi̱¹",
      "explanationEN": "to shrink; to contract"
    },
    {
      "character": "𗍷",
      "reading": "dzeṃ²",
      "explanationEN": "to judge; to decide"
    },
    {
      "character": "𗰢",
      "reading": "ŋga²",
      "explanationEN": "a place name"
    },
    {
      "character": "𘚢",
      "reading": "dẓae̱²",
      "explanationEN": "wheel"
    },
    {
      "character": "𘟕",
      "reading": "lheṃ¹",
      "explanationEN": "ridge"
    },
    {
      "character": "𘆝",
      "reading": "rer¹",
      "explanationEN": "horse"
    },
    {
      "character": "𘇟",
      "reading": "ŋkhə²",
      "explanationEN": "steep"
    },
    {
      "character": "𘗳",
      "reading": "tṣwae̱ṃ¹",
      "explanationEN": "hunchback; tumor"
    },
    {
      "character": "𗷤",
      "reading": "ndu̱²",
      "explanationEN": "shoulder"
    },
    {
      "character": "𘆥",
      "reading": "???",
      "explanationEN": "as"
    },
    {
      "character": "𘒻",
      "reading": "lwe¹",
      "explanationEN": "old; aged"
    },
    {
      "character": "𘆼",
      "reading": "qwae̱²",
      "explanationEN": "fine horse; steed; (Chinese) unicorn"
    },
    {
      "character": "𘒨",
      "reading": "phe¹",
      "explanationEN": "to express by words"
    },
    {
      "character": "𗰪",
      "reading": "nlhi̱w²",
      "explanationEN": "copulation"
    },
    {
      "character": "𗙀",
      "reading": "mbu²",
      "explanationEN": "a reward; an award"
    },
    {
      "character": "𗙫",
      "reading": "γa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗘼",
      "reading": "ŋgu¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘄒",
      "reading": "pa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙜",
      "reading": "ẓwae̱¹",
      "explanationEN": "very fast; rapid"
    },
    {
      "character": "𗡫",
      "reading": "ẓao̱²",
      "explanationEN": "daughter-in-law"
    },
    {
      "character": "𘄯",
      "reading": "lhwe¹",
      "explanationEN": "oblique; slanting"
    },
    {
      "character": "𘑜",
      "reading": "se¹",
      "explanationEN": "oblique; slanting"
    },
    {
      "character": "𗰐",
      "reading": "me²",
      "explanationEN": "death"
    },
    {
      "character": "𘟆",
      "reading": "tśhe¹",
      "explanationEN": "behind; back"
    },
    {
      "character": "𗸛",
      "reading": "qhwə̱¹",
      "explanationEN": "coma; stupor"
    },
    {
      "character": "𗌶",
      "reading": "rner¹",
      "explanationEN": "to give birth"
    },
    {
      "character": "𗎘",
      "reading": "bu²",
      "explanationEN": "border; side"
    },
    {
      "character": "𘈛",
      "reading": "thwo̱¹",
      "explanationEN": "illusion; dream"
    },
    {
      "character": "𘈗",
      "reading": "ka̱ṃ¹",
      "explanationEN": "to drive away; to expel"
    },
    {
      "character": "𗰏",
      "reading": "me²",
      "explanationEN": "death"
    },
    {
      "character": "𗍀",
      "reading": "γu̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘅃",
      "reading": "ŋa̱h²",
      "explanationEN": "many; much"
    },
    {
      "character": "𘅒",
      "reading": "lah¹",
      "explanationEN": "forehead"
    },
    {
      "character": "𘅬",
      "reading": "thə¹",
      "explanationEN": "to enclose"
    },
    {
      "character": "𗳪",
      "reading": "rzi̱r²",
      "explanationEN": "to ask for aid"
    },
    {
      "character": "𘑼",
      "reading": "ro̱r²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘙇",
      "reading": "rər²",
      "explanationEN": "PFV: DIR; IMP: DIR"
    },
    {
      "character": "𘙝",
      "reading": "nlhə̱¹",
      "explanationEN": "bag; sack"
    },
    {
      "character": "𗉣",
      "reading": "phi¹",
      "explanationEN": "scheme; idea"
    },
    {
      "character": "𗎡",
      "reading": "qau̱²",
      "explanationEN": "dawn; daybreak"
    },
    {
      "character": "𗙽",
      "reading": "nə¹",
      "explanationEN": "feelings; sensibilities"
    },
    {
      "character": "𗉜",
      "reading": "ndze̱¹",
      "explanationEN": "to struggle; to fight for"
    },
    {
      "character": "𘙏",
      "reading": "tsoh¹",
      "explanationEN": "fat; grease"
    },
    {
      "character": "𘙞",
      "reading": "rźər²",
      "explanationEN": "pulse"
    },
    {
      "character": "𘗶",
      "reading": "rar²",
      "explanationEN": "horse"
    },
    {
      "character": "𗌽",
      "reading": "də²",
      "explanationEN": "PFV; IMP(self-beneficial)"
    },
    {
      "character": "𗍃",
      "reading": "yiw²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗍄",
      "reading": "ne²",
      "explanationEN": "wind"
    },
    {
      "character": "𗡴",
      "reading": "śwa¹",
      "explanationEN": "river"
    },
    {
      "character": "𘘿",
      "reading": "rmu̱r¹",
      "explanationEN": "be in very short time"
    },
    {
      "character": "𘙋",
      "reading": "ri̱r¹",
      "explanationEN": "string; bewstring"
    },
    {
      "character": "𘙓",
      "reading": "pai̱h¹",
      "explanationEN": "to cut open"
    },
    {
      "character": "𘜍",
      "reading": "ryawr²",
      "explanationEN": "date"
    },
    {
      "character": "𘝏",
      "reading": "dźu²",
      "explanationEN": "crane"
    },
    {
      "character": "𗳠",
      "reading": "mbi²",
      "explanationEN": "net"
    },
    {
      "character": "𘑷",
      "reading": "?ah²",
      "explanationEN": "skilful; clever"
    },
    {
      "character": "𗟪",
      "reading": "gi²",
      "explanationEN": "fat; grease"
    },
    {
      "character": "𗟬",
      "reading": "lweh²",
      "explanationEN": "to hold or carry in both hands"
    },
    {
      "character": "𗵸",
      "reading": "he¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘅓",
      "reading": "rzo̱ṃr¹",
      "explanationEN": "pulse; muscle"
    },
    {
      "character": "𘈃",
      "reading": "rar¹",
      "explanationEN": "wonderful"
    },
    {
      "character": "𘔟",
      "reading": "dźəh²",
      "explanationEN": "red"
    },
    {
      "character": "𘄰",
      "reading": "tśwa¹",
      "explanationEN": "overshoes"
    },
    {
      "character": "𗳚",
      "reading": "qa̱¹",
      "explanationEN": "collapse"
    },
    {
      "character": "𗍑",
      "reading": "ŋkhə¹",
      "explanationEN": "shivery"
    },
    {
      "character": "𗉮",
      "reading": "tśhə²",
      "explanationEN": "immediately"
    },
    {
      "character": "𘆀",
      "reading": "rver¹",
      "explanationEN": "jackal"
    },
    {
      "character": "𗱁",
      "reading": "thə¹",
      "explanationEN": "to call; to say"
    },
    {
      "character": "𗱃",
      "reading": "thə¹",
      "explanationEN": "east; end"
    },
    {
      "character": "𗱄",
      "reading": "thəh²",
      "explanationEN": "case; outer coffin"
    },
    {
      "character": "𘆅",
      "reading": "qa̱²",
      "explanationEN": "lion"
    },
    {
      "character": "𗷭",
      "reading": "kiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘈍",
      "reading": "no̱?",
      "explanationEN": "a nation"
    },
    {
      "character": "𗸌",
      "reading": "voh²",
      "explanationEN": "to know.ʙ; to be capable.ʙ"
    },
    {
      "character": "𗸊",
      "reading": "lu²",
      "explanationEN": "mallet"
    },
    {
      "character": "𘗻",
      "reading": "qho̱ṃ¹",
      "explanationEN": "to detest"
    },
    {
      "character": "𗖚",
      "reading": "sa̱²",
      "explanationEN": "to report; to plan"
    },
    {
      "character": "𗖬",
      "reading": "rkiwr¹",
      "explanationEN": "to get worried; to get excited; to feel anxious"
    },
    {
      "character": "𗖍",
      "reading": "nla¹",
      "explanationEN": "praise; eulogy"
    },
    {
      "character": "𗖫",
      "reading": "nah²",
      "explanationEN": "to help"
    },
    {
      "character": "𘇱",
      "reading": "pa̱h²",
      "explanationEN": "witticism"
    },
    {
      "character": "𘇷",
      "reading": "qhwu̱h²",
      "explanationEN": "to boil silk"
    },
    {
      "character": "𗹔",
      "reading": "lhweh¹",
      "explanationEN": "oblique, slanting; inclined"
    },
    {
      "character": "𗳄",
      "reading": "rkər²",
      "explanationEN": "sky; heaven"
    },
    {
      "character": "𗳊",
      "reading": "tśoṃ¹",
      "explanationEN": "marshland"
    },
    {
      "character": "𘆎",
      "reading": "rir²",
      "explanationEN": "measurement"
    },
    {
      "character": "𗙯",
      "reading": "rzir²",
      "explanationEN": "back"
    },
    {
      "character": "𗙩",
      "reading": "hiw¹",
      "explanationEN": "stop; rest"
    },
    {
      "character": "𘆬",
      "reading": "ẓae̱h¹",
      "explanationEN": "lameness"
    },
    {
      "character": "𘇈",
      "reading": "ntaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘄬",
      "reading": "lleṃh²",
      "explanationEN": "to wave; to sway; to shake"
    },
    {
      "character": "𗟿",
      "reading": "phi¹",
      "explanationEN": "servant"
    },
    {
      "character": "𘜚",
      "reading": "qao̱h¹",
      "explanationEN": "to dare; to be capable"
    },
    {
      "character": "𘇊",
      "reading": "llae̱h¹",
      "explanationEN": "magnificent; gorgeous"
    },
    {
      "character": "𗃔",
      "reading": "rtsi̱wr²",
      "explanationEN": "axe; hatchet"
    },
    {
      "character": "𘘉",
      "reading": "ŋqae̱¹",
      "explanationEN": "debt"
    },
    {
      "character": "𗙠",
      "reading": "dẓaa̱¹",
      "explanationEN": "noise"
    },
    {
      "character": "𗰜",
      "reading": "rmə̱r²",
      "explanationEN": "origin; root"
    },
    {
      "character": "𘗨",
      "reading": "mə̱²",
      "explanationEN": "sister"
    },
    {
      "character": "𗸵",
      "reading": "śoṃ¹",
      "explanationEN": "season"
    },
    {
      "character": "𘆹",
      "reading": "rmə̱r²",
      "explanationEN": "grey"
    },
    {
      "character": "𘓷",
      "reading": "rqwə̱r¹",
      "explanationEN": "body"
    },
    {
      "character": "𗸙",
      "reading": "rtshər¹",
      "explanationEN": "to cut; to slice"
    },
    {
      "character": "𗉐",
      "reading": "tṣao̱ṃ²",
      "explanationEN": "thatched hut"
    },
    {
      "character": "𗳝",
      "reading": "γo̱¹",
      "explanationEN": "month"
    },
    {
      "character": "𘗰",
      "reading": "di̱w²",
      "explanationEN": "fruit"
    },
    {
      "character": "𘄙",
      "reading": "tśe¹",
      "explanationEN": "to bear (a burden)"
    },
    {
      "character": "𘅰",
      "reading": "γu̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘅥",
      "reading": "rtsu̱r¹",
      "explanationEN": "to suffer from an illness; to fall ill; to be ill"
    },
    {
      "character": "𘅮",
      "reading": "rtso̱ṃr¹",
      "explanationEN": "pounding; to pestle"
    },
    {
      "character": "𘈮",
      "reading": "dẓae̱ṃ¹",
      "explanationEN": "lame"
    },
    {
      "character": "𗘜",
      "reading": "ŋga²",
      "explanationEN": "to be lame; to limp"
    },
    {
      "character": "𘄧",
      "reading": "γaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘘂",
      "reading": "tśo?",
      "explanationEN": "permanent; forever"
    },
    {
      "character": "𘅷",
      "reading": "rner²",
      "explanationEN": "servant"
    },
    {
      "character": "𘅚",
      "reading": "de̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘈆",
      "reading": "rγo̱r¹",
      "explanationEN": "sister-in-law"
    },
    {
      "character": "𗟯",
      "reading": "tśho²",
      "explanationEN": "to hold.ʙ; to grasp.ʙ"
    },
    {
      "character": "𘅹",
      "reading": "rner²",
      "explanationEN": "west"
    },
    {
      "character": "𘙍",
      "reading": "lhuh¹",
      "explanationEN": "belt; a rope with a hook"
    },
    {
      "character": "𗉰",
      "reading": "tśhə¹",
      "explanationEN": "to seek"
    },
    {
      "character": "𘅳",
      "reading": "tshi¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘑣",
      "reading": "se²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘙈",
      "reading": "rmə̱r²",
      "explanationEN": "to meet"
    },
    {
      "character": "𘚜",
      "reading": "lhweh¹",
      "explanationEN": "Tangut"
    },
    {
      "character": "𘞏",
      "reading": "luh²",
      "explanationEN": "surname of a tribe"
    },
    {
      "character": "𗍞",
      "reading": "ŋŋwə̱¹",
      "explanationEN": "to be greedy (for food); to be gluttonous"
    },
    {
      "character": "𗱇",
      "reading": "lli̱²",
      "explanationEN": "end; east"
    },
    {
      "character": "𗸔",
      "reading": "ryər²",
      "explanationEN": "stop; rest"
    },
    {
      "character": "𗖮",
      "reading": "tśhoṃ¹",
      "explanationEN": "thatched hut"
    },
    {
      "character": "𘙻",
      "reading": "lhi̱w²",
      "explanationEN": "long and thin"
    },
    {
      "character": "𘙹",
      "reading": "ye²",
      "explanationEN": "sudden and violent"
    },
    {
      "character": "𘛿",
      "reading": "geh²",
      "explanationEN": "body; physique"
    },
    {
      "character": "𗳐",
      "reading": "rar¹",
      "explanationEN": "end; east"
    },
    {
      "character": "𘘁",
      "reading": "nśo²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗸭",
      "reading": "vwə̱¹",
      "explanationEN": "to quarrel; to wrangle"
    },
    {
      "character": "𘔌",
      "reading": "dźeh²",
      "explanationEN": "to fight; to struggle"
    },
    {
      "character": "𗉥",
      "reading": "gwe¹",
      "explanationEN": "eating one’s fill"
    },
    {
      "character": "𗖩",
      "reading": "lih¹",
      "explanationEN": "to quarrel; to wrangle"
    },
    {
      "character": "𗖯",
      "reading": "γaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶝",
      "reading": "lu¹",
      "explanationEN": "multicolor"
    },
    {
      "character": "𘞱",
      "reading": "vi²",
      "explanationEN": "under; below; bottom"
    },
    {
      "character": "𗇻",
      "reading": "ṇae̱ṃ²",
      "explanationEN": "dirt; filth"
    },
    {
      "character": "𘞌",
      "reading": "rźər¹",
      "explanationEN": "solid; true"
    },
    {
      "character": "𗕯",
      "reading": "nlo²",
      "explanationEN": "bedding"
    },
    {
      "character": "𘒞",
      "reading": "źu¹",
      "explanationEN": "to gather; to assemble"
    },
    {
      "character": "𗶜",
      "reading": "dźə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗶟",
      "reading": "mbu̱¹",
      "explanationEN": "etiquette; ceremony and propriety"
    },
    {
      "character": "𗶥",
      "reading": "qai̱w¹",
      "explanationEN": "to collapse; to crumble"
    },
    {
      "character": "𗶢",
      "reading": "rner²",
      "explanationEN": "anger; rage"
    },
    {
      "character": "𘆍",
      "reading": "qa̱h²",
      "explanationEN": "to divide; to share"
    },
    {
      "character": "𘞲",
      "reading": "thwe̱¹",
      "explanationEN": "to support"
    },
    {
      "character": "𗇢",
      "reading": "qa̱²",
      "explanationEN": "arduous; difficult; hard; tough"
    },
    {
      "character": "𗕍",
      "reading": "rler¹",
      "explanationEN": "tired; run-down; overworked"
    },
    {
      "character": "𗱐",
      "reading": "ntho̱²",
      "explanationEN": "to draw (water)"
    },
    {
      "character": "𗱒",
      "reading": "ŋġae̱¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𘔣",
      "reading": "ntha̱¹",
      "explanationEN": "to haunt; to make mischief"
    },
    {
      "character": "𗈢",
      "reading": "tshu̱¹",
      "explanationEN": "conceited; restrained"
    },
    {
      "character": "𗷜",
      "reading": "dih²",
      "explanationEN": "to send back; to repatriate"
    },
    {
      "character": "𗷟",
      "reading": "γa̱ṃ²",
      "explanationEN": "drought; dry spell"
    },
    {
      "character": "𗈍",
      "reading": "tsa¹",
      "explanationEN": "ghost; phantom"
    },
    {
      "character": "𗕧",
      "reading": "dwu̱²",
      "explanationEN": "like; alike"
    },
    {
      "character": "𗕰",
      "reading": "nlhi¹",
      "explanationEN": "to pull out; to pull up"
    },
    {
      "character": "𗱜",
      "reading": "nllu²",
      "explanationEN": "cotton-padded mattress"
    },
    {
      "character": "𗲇",
      "reading": "vwə̱h¹",
      "explanationEN": "old; aged"
    },
    {
      "character": "𗲏",
      "reading": "nah²",
      "explanationEN": "anger; rage"
    },
    {
      "character": "𗲩",
      "reading": "ŋqhwa̱¹",
      "explanationEN": "to curse"
    },
    {
      "character": "𗹇",
      "reading": "swə²",
      "explanationEN": "ghost; an evil spirit"
    },
    {
      "character": "𗱵",
      "reading": "li̱²",
      "explanationEN": "to boil"
    },
    {
      "character": "𗇬",
      "reading": "lwa̱ṃ²",
      "explanationEN": "in disorder; confused"
    },
    {
      "character": "𗱠",
      "reading": "dźe¹",
      "explanationEN": "pure; refined"
    },
    {
      "character": "𘟣",
      "reading": "du¹",
      "explanationEN": "to exist(normal)"
    },
    {
      "character": "𗱨",
      "reading": "nlu²",
      "explanationEN": "bedding"
    },
    {
      "character": "𗱪",
      "reading": "yi¹",
      "explanationEN": "many; more; much"
    },
    {
      "character": "𗲈",
      "reading": "γiw²",
      "explanationEN": "a round flat piece of jade with a hole in its centre"
    },
    {
      "character": "𘒍",
      "reading": "twi̱¹",
      "explanationEN": "to pile up; to heap up"
    },
    {
      "character": "𘆔",
      "reading": "ba̱¹",
      "explanationEN": "to return; to move back"
    },
    {
      "character": "𗘶",
      "reading": "ŋgə¹",
      "explanationEN": "a sudden peal of thunder"
    },
    {
      "character": "𗙧",
      "reading": "rmer¹",
      "explanationEN": "flourishing; prosperous"
    },
    {
      "character": "𘄊",
      "reading": "li¹",
      "explanationEN": "prosperous; flourishing"
    },
    {
      "character": "𘄌",
      "reading": "teh²",
      "explanationEN": "sheep"
    },
    {
      "character": "𘑥",
      "reading": "tśhu¹",
      "explanationEN": "ghost; phantom"
    },
    {
      "character": "𘘆",
      "reading": "la̱²",
      "explanationEN": "old age; year"
    },
    {
      "character": "𗈇",
      "reading": "lah¹",
      "explanationEN": "north"
    },
    {
      "character": "𗈠",
      "reading": "dzi¹",
      "explanationEN": "wrong; mistaken"
    },
    {
      "character": "𗈐",
      "reading": "mə̱h¹",
      "explanationEN": "not"
    },
    {
      "character": "𗕣",
      "reading": "tshah¹",
      "explanationEN": "angry"
    },
    {
      "character": "𗕭",
      "reading": "rtśhwər¹",
      "explanationEN": "silly; idiotic; vulgar"
    },
    {
      "character": "𗰮",
      "reading": "rvwə̱r¹",
      "explanationEN": "to die young"
    },
    {
      "character": "𗱻",
      "reading": "na̱¹",
      "explanationEN": "to steal; to rob"
    },
    {
      "character": "𗲲",
      "reading": "lwu̱h¹",
      "explanationEN": "brightness"
    },
    {
      "character": "𗲜",
      "reading": "qə̱¹",
      "explanationEN": "concave; crooked"
    },
    {
      "character": "𗲝",
      "reading": "qaə̱²",
      "explanationEN": "to collapse"
    },
    {
      "character": "𗲸",
      "reading": "təh²",
      "explanationEN": "to make; to do"
    },
    {
      "character": "𘒋",
      "reading": "tshe¹",
      "explanationEN": "to gather; to assemble"
    },
    {
      "character": "𘒜",
      "reading": "the¹",
      "explanationEN": "feast; banquet"
    },
    {
      "character": "𗗡",
      "reading": "leṃh²",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𗗠",
      "reading": "nlhaa̱¹",
      "explanationEN": "to lick; to wipe away"
    },
    {
      "character": "𘃹",
      "reading": "vwaə̱¹",
      "explanationEN": "fertile; rich"
    },
    {
      "character": "𘄉",
      "reading": "reṃ²",
      "explanationEN": "dark"
    },
    {
      "character": "𗕔",
      "reading": "the̱¹",
      "explanationEN": "platform; objects shaped like a platform"
    },
    {
      "character": "𗕪",
      "reading": "meh¹",
      "explanationEN": "woman; female"
    },
    {
      "character": "𗱼",
      "reading": "qhwa̱¹",
      "explanationEN": "hole; pit"
    },
    {
      "character": "𗙚",
      "reading": "phiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗰡",
      "reading": "qa̱²",
      "explanationEN": "source; origin; root"
    },
    {
      "character": "𗰩",
      "reading": "γwo̱ṃh¹",
      "explanationEN": "pillow"
    },
    {
      "character": "𗇹",
      "reading": "qhaa̱ṃ¹",
      "explanationEN": "salted; salty"
    },
    {
      "character": "𗕑",
      "reading": "khə²",
      "explanationEN": "ten thousand"
    },
    {
      "character": "𗕠",
      "reading": "qho̱¹",
      "explanationEN": "a classifier"
    },
    {
      "character": "𗱕",
      "reading": "rur¹",
      "explanationEN": "all; everyone"
    },
    {
      "character": "𗘧",
      "reading": "rdźir²",
      "explanationEN": "butter; cheese"
    },
    {
      "character": "𗘨",
      "reading": "ndẓae̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗲤",
      "reading": "thə̱¹",
      "explanationEN": "stone roller"
    },
    {
      "character": "𗱿",
      "reading": "γwəh¹",
      "explanationEN": "to wrestle"
    },
    {
      "character": "𗲎",
      "reading": "rver²",
      "explanationEN": "mill"
    },
    {
      "character": "𗕕",
      "reading": "phə̱¹",
      "explanationEN": "tooth"
    },
    {
      "character": "𘒓",
      "reading": "rpa̱r¹",
      "explanationEN": "to congeal; scar"
    },
    {
      "character": "𘒝",
      "reading": "tṣhai̱w¹",
      "explanationEN": "a unit of Tangut army"
    },
    {
      "character": "𘝼",
      "reading": "qwo̱¹",
      "explanationEN": "bed-wetting"
    },
    {
      "character": "𗇯",
      "reading": "da̱²",
      "explanationEN": "slow; obtuse; dazed"
    },
    {
      "character": "𗱶",
      "reading": "dau̱¹",
      "explanationEN": "slow; obtuse; dazed"
    },
    {
      "character": "𗲍",
      "reading": "nllo̱r¹",
      "explanationEN": "full; excessive"
    },
    {
      "character": "𘔮",
      "reading": "rvwa̱r²",
      "explanationEN": "wealth; property"
    },
    {
      "character": "𘔩",
      "reading": "rdwə̱r²",
      "explanationEN": "to drive away (a ghost)"
    },
    {
      "character": "𘆳",
      "reading": "mbai̱¹",
      "explanationEN": "to gallop"
    },
    {
      "character": "𘆲",
      "reading": "tshwu̱¹",
      "explanationEN": "fat; corpulent"
    },
    {
      "character": "𘙩",
      "reading": "tśhi¹",
      "explanationEN": "to cry; to weep"
    },
    {
      "character": "𗲊",
      "reading": "thə²",
      "explanationEN": "buttocks"
    },
    {
      "character": "𘆑",
      "reading": "gih²",
      "explanationEN": "to depend on; to rely on"
    },
    {
      "character": "𗱎",
      "reading": "tṣaa̱¹",
      "explanationEN": "branch"
    },
    {
      "character": "𘄔",
      "reading": "pae̱ṃ²",
      "explanationEN": "to flee; to escape"
    },
    {
      "character": "𗈡",
      "reading": "rzo̱ṃr¹",
      "explanationEN": "sexual desire; lust"
    },
    {
      "character": "𗷚",
      "reading": "li̱²",
      "explanationEN": "fog"
    },
    {
      "character": "𗇽",
      "reading": "dzuh²",
      "explanationEN": "forefathers; ancestry"
    },
    {
      "character": "𘓉",
      "reading": "lhi̱w¹",
      "explanationEN": "to herd; to graze"
    },
    {
      "character": "𘆐",
      "reading": "???",
      "explanationEN": "bland; tasteless"
    },
    {
      "character": "𗱘",
      "reading": "rγaə̱r¹",
      "explanationEN": "boiling"
    },
    {
      "character": "𗱛",
      "reading": "mə̱²",
      "explanationEN": "appearance; spirit"
    },
    {
      "character": "𗰔",
      "reading": "yiw²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘘚",
      "reading": "ndze²",
      "explanationEN": "teacher; tutor"
    },
    {
      "character": "𘜑",
      "reading": "pa̱¹",
      "explanationEN": "waves"
    },
    {
      "character": "𗇦",
      "reading": "lah¹",
      "explanationEN": "calamity; disaster"
    },
    {
      "character": "𗈗",
      "reading": "ndi̱²",
      "explanationEN": "dirt; filth"
    },
    {
      "character": "𗱝",
      "reading": "dẓwai̱¹",
      "explanationEN": "echo"
    },
    {
      "character": "𗍿",
      "reading": "lli̱w¹",
      "explanationEN": "full; filled; satisfied"
    },
    {
      "character": "𗘢",
      "reading": "tśheṃ¹",
      "explanationEN": "thin; rare"
    },
    {
      "character": "𗙛",
      "reading": "lə²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙙",
      "reading": "qi̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙐",
      "reading": "si̱²",
      "explanationEN": "to whistle; whistle (of human)"
    },
    {
      "character": "𗙇",
      "reading": "zi̱w²",
      "explanationEN": "to howl"
    },
    {
      "character": "𗙟",
      "reading": "ŋġe̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙑",
      "reading": "γai̱h²",
      "explanationEN": "breath"
    },
    {
      "character": "𗰠",
      "reading": "nẓai̱¹",
      "explanationEN": "to collect; to gather"
    },
    {
      "character": "𗰣",
      "reading": "zeh¹",
      "explanationEN": "how many; how much"
    },
    {
      "character": "𘄀",
      "reading": "tśu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗟲",
      "reading": "ŋŋwu̱¹",
      "explanationEN": "speech; word"
    },
    {
      "character": "𘄨",
      "reading": "tsuh¹",
      "explanationEN": "to bargain"
    },
    {
      "character": "𘑚",
      "reading": "???",
      "explanationEN": "rain and dew"
    },
    {
      "character": "𘓋",
      "reading": "loṃ²",
      "explanationEN": "a little; a few"
    },
    {
      "character": "𘚖",
      "reading": "llwo̱¹",
      "explanationEN": "moist; damp"
    },
    {
      "character": "𘞞",
      "reading": "ntṣhaa̱²",
      "explanationEN": "difficult; hard"
    },
    {
      "character": "𗇠",
      "reading": "bi̱h²",
      "explanationEN": "to pierce through; to drill"
    },
    {
      "character": "𗘥",
      "reading": "lhi̱w¹",
      "explanationEN": "miscellaneous; mixed"
    },
    {
      "character": "𗱳",
      "reading": "rer¹",
      "explanationEN": "super; particular"
    },
    {
      "character": "𗲪",
      "reading": "dźa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗱷",
      "reading": "qə̱¹",
      "explanationEN": "dregs; residue"
    },
    {
      "character": "𘒅",
      "reading": "źə²",
      "explanationEN": "living in peace"
    },
    {
      "character": "𗍵",
      "reading": "tṣwaa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙂",
      "reading": "rdi̱wr¹",
      "explanationEN": "drum"
    },
    {
      "character": "𗙋",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "harmony; concord"
    },
    {
      "character": "𗙡",
      "reading": "rqwa̱r¹",
      "explanationEN": "to cry; to weep; to sob"
    },
    {
      "character": "𘑲",
      "reading": "tśoṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘟖",
      "reading": "qai̱¹",
      "explanationEN": "to examine; to observe"
    },
    {
      "character": "𗲭",
      "reading": "vwə̱h¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𘘠",
      "reading": "mpo̱²",
      "explanationEN": "I; me"
    },
    {
      "character": "𘝻",
      "reading": "qwo̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘟔",
      "reading": "nlhi¹",
      "explanationEN": "soft; lithe"
    },
    {
      "character": "𗱥",
      "reading": "lhi²",
      "explanationEN": "moisture"
    },
    {
      "character": "𘑦",
      "reading": "si̱w¹",
      "explanationEN": "sore on a horse’s hoofs"
    },
    {
      "character": "𗲒",
      "reading": "yeṃ¹",
      "explanationEN": "to groan; to moan"
    },
    {
      "character": "𗶘",
      "reading": "tśoh²",
      "explanationEN": "ashamed"
    },
    {
      "character": "𗰭",
      "reading": "śa¹",
      "explanationEN": "ten"
    },
    {
      "character": "𘟘",
      "reading": "γiw¹",
      "explanationEN": "to masticate; to chew"
    },
    {
      "character": "𘓶",
      "reading": "guh²",
      "explanationEN": "body; physique"
    },
    {
      "character": "𘙬",
      "reading": "to̱ṃ¹",
      "explanationEN": "insect; worm"
    },
    {
      "character": "𗇺",
      "reading": "lu²",
      "explanationEN": "fault; offence; sin"
    },
    {
      "character": "𘒣",
      "reading": "da̱h²",
      "explanationEN": "speech; word"
    },
    {
      "character": "𘆠",
      "reading": "khe¹",
      "explanationEN": "grayish white; ashen; off-white"
    },
    {
      "character": "𗈆",
      "reading": "tsheh²",
      "explanationEN": "devil; demon"
    },
    {
      "character": "𘆾",
      "reading": "dzih¹",
      "explanationEN": "horse’s teeth; age"
    },
    {
      "character": "𗵹",
      "reading": "mə¹",
      "explanationEN": "distress; sorrow"
    },
    {
      "character": "𘔬",
      "reading": "bi¹",
      "explanationEN": "property"
    },
    {
      "character": "𗷧",
      "reading": "ndu̱²",
      "explanationEN": "to crawl"
    },
    {
      "character": "𘆢",
      "reading": "tah¹",
      "explanationEN": "mule"
    },
    {
      "character": "𘆭",
      "reading": "llih²",
      "explanationEN": "horse"
    },
    {
      "character": "𘒦",
      "reading": "thu¹",
      "explanationEN": "truth; reality"
    },
    {
      "character": "𘗩",
      "reading": "tśu¹",
      "explanationEN": "steed; fine horse"
    },
    {
      "character": "𘇃",
      "reading": "γwu̱h²",
      "explanationEN": "to tie"
    },
    {
      "character": "𘈡",
      "reading": "qhao̱ṃ¹",
      "explanationEN": "body"
    },
    {
      "character": "𗘦",
      "reading": "dźe¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗱏",
      "reading": "pu̱¹",
      "explanationEN": "to choke oneself"
    },
    {
      "character": "𗲖",
      "reading": "tshi̱w²",
      "explanationEN": "broken; fragmentary"
    },
    {
      "character": "𘒆",
      "reading": "twe̱¹",
      "explanationEN": "to pile up; to accumulate"
    },
    {
      "character": "𗕢",
      "reading": "khə²",
      "explanationEN": "owlet"
    },
    {
      "character": "𗌲",
      "reading": "vah¹",
      "explanationEN": "flag; banner"
    },
    {
      "character": "𗷝",
      "reading": "me²",
      "explanationEN": "NEG.PFV"
    },
    {
      "character": "𗷙",
      "reading": "lwih²",
      "explanationEN": "colt"
    },
    {
      "character": "𘑩",
      "reading": "lloh²",
      "explanationEN": "to combine; to unite"
    },
    {
      "character": "𗇮",
      "reading": "rə̱r²",
      "explanationEN": "shadow; reflection"
    },
    {
      "character": "𗈀",
      "reading": "lə¹",
      "explanationEN": "to fall; to sink"
    },
    {
      "character": "𗇾",
      "reading": "do̱ṃ²",
      "explanationEN": "to move; to stir"
    },
    {
      "character": "𗘤",
      "reading": "lhi̱w¹",
      "explanationEN": "marriage; to marry"
    },
    {
      "character": "𗱚",
      "reading": "ndzu²",
      "explanationEN": "to hide"
    },
    {
      "character": "𗱲",
      "reading": "duh¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗱦",
      "reading": "qə̱¹",
      "explanationEN": "aerolite"
    },
    {
      "character": "𗱸",
      "reading": "llu̱h¹",
      "explanationEN": "stone; rock"
    },
    {
      "character": "𗲉",
      "reading": "dźo²",
      "explanationEN": "to exist.ʙ(animate);  to have.ʙ"
    },
    {
      "character": "𗲣",
      "reading": "ye¹",
      "explanationEN": "a necklace made by jewellery"
    },
    {
      "character": "𗲙",
      "reading": "dźwi¹",
      "explanationEN": "woolens"
    },
    {
      "character": "𗲹",
      "reading": "nlu¹",
      "explanationEN": "stingy; miserly; grudge"
    },
    {
      "character": "𗗘",
      "reading": "lleṃh²",
      "explanationEN": "sweet"
    },
    {
      "character": "𗘟",
      "reading": "lu̱²",
      "explanationEN": "holy; virtuous and able"
    },
    {
      "character": "𗙆",
      "reading": "haa̱¹",
      "explanationEN": "blocked"
    },
    {
      "character": "𗎁",
      "reading": "rir²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗙮",
      "reading": "tśhwə¹",
      "explanationEN": "foot mark; footprint"
    },
    {
      "character": "𗰗",
      "reading": "γa̱h²",
      "explanationEN": "ten"
    },
    {
      "character": "𘄄",
      "reading": "zi¹",
      "explanationEN": "man; male"
    },
    {
      "character": "𘒃",
      "reading": "lu̱¹",
      "explanationEN": "stove; furnace"
    },
    {
      "character": "𘘝",
      "reading": "ndze²",
      "explanationEN": "to teach; to instruct"
    },
    {
      "character": "𗴉",
      "reading": "phe̱¹",
      "explanationEN": "interval"
    },
    {
      "character": "𗕒",
      "reading": "ni¹",
      "explanationEN": "to take a wife"
    },
    {
      "character": "𗕲",
      "reading": "rtśhwər¹",
      "explanationEN": "to flog; to beat; to torture"
    },
    {
      "character": "𗱩",
      "reading": "nwe¹",
      "explanationEN": "to obstruct; to block; to choke up"
    },
    {
      "character": "𗱽",
      "reading": "dzə¹",
      "explanationEN": "to prepare; to get ready"
    },
    {
      "character": "𗲞",
      "reading": "ra̱r¹",
      "explanationEN": "hill; mountain"
    },
    {
      "character": "𘒊",
      "reading": "źə²",
      "explanationEN": "to go without a burden"
    },
    {
      "character": "𘒗",
      "reading": "paa̱ṃ¹",
      "explanationEN": "front tooth; incisor"
    },
    {
      "character": "𗌳",
      "reading": "vah¹",
      "explanationEN": "pretty; beautiful"
    },
    {
      "character": "𗰘",
      "reading": "γu̱²",
      "explanationEN": "entertaimnent; recreation"
    },
    {
      "character": "𘄫",
      "reading": "tsuh¹",
      "explanationEN": "to kick"
    },
    {
      "character": "𗴈",
      "reading": "do̱ṃ²",
      "explanationEN": "bear"
    },
    {
      "character": "𗱱",
      "reading": "tsha²",
      "explanationEN": "to pay one’s debt"
    },
    {
      "character": "𗗟",
      "reading": "ye¹",
      "explanationEN": "FUT: future"
    },
    {
      "character": "𗙪",
      "reading": "kaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗘩",
      "reading": "rnə̱r²",
      "explanationEN": "yellow"
    },
    {
      "character": "𗈟",
      "reading": "te²",
      "explanationEN": "wild goat"
    },
    {
      "character": "𘓯",
      "reading": "khoṃ¹",
      "explanationEN": "to grant.ᴀ"
    },
    {
      "character": "𘴇",
      "reading": "mmi̱²",
      "explanationEN": "swallow"
    },
    {
      "character": "𘓱",
      "reading": "ŋwə̱¹",
      "explanationEN": "heaven"
    },
    {
      "character": "𘓵",
      "reading": "rγər¹",
      "explanationEN": "witch; shaman; wizard"
    },
    {
      "character": "𗲽",
      "reading": "ryer¹",
      "explanationEN": "to pull out; to dredge up"
    },
    {
      "character": "𗈑",
      "reading": "dzi¹",
      "explanationEN": "hard punishment"
    },
    {
      "character": "𗲐",
      "reading": "beh¹",
      "explanationEN": "dangerous; perilous"
    },
    {
      "character": "𗷪",
      "reading": "ndu̱²",
      "explanationEN": "to exert; to try hard"
    },
    {
      "character": "𘆫",
      "reading": "teṃ¹",
      "explanationEN": "to comfort; to appease"
    },
    {
      "character": "𘆺",
      "reading": "bai̱²",
      "explanationEN": "chestnut brown"
    },
    {
      "character": "𘆽",
      "reading": "ge¹",
      "explanationEN": "horse"
    },
    {
      "character": "𘇞",
      "reading": "bi̱²",
      "explanationEN": "fur; leather"
    },
    {
      "character": "𘒪",
      "reading": "ndu¹",
      "explanationEN": "to argue; to pick a quarrel"
    },
    {
      "character": "𘞂",
      "reading": "ndzə²",
      "explanationEN": "to practice; to exercise; to review"
    },
    {
      "character": "𘇇",
      "reading": "bu²",
      "explanationEN": "elephant"
    },
    {
      "character": "𗷫",
      "reading": "nnə²",
      "explanationEN": "annoyance"
    },
    {
      "character": "𘇜",
      "reading": "bi̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗲵",
      "reading": "li̱²",
      "explanationEN": "gourd ladle"
    },
    {
      "character": "𗙤",
      "reading": "piṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗘻",
      "reading": "doh¹",
      "explanationEN": "a sorrowfull sigh"
    },
    {
      "character": "𗰤",
      "reading": "la̱²",
      "explanationEN": "clear; obvious; plain"
    },
    {
      "character": "𗰧",
      "reading": "lhoṃ²",
      "explanationEN": "a unit of length"
    },
    {
      "character": "𗕩",
      "reading": "lwuh¹",
      "explanationEN": "mixed; harmonious"
    },
    {
      "character": "𗘾",
      "reading": "qwə̱²",
      "explanationEN": "conch"
    },
    {
      "character": "𗙉",
      "reading": "rγa̱r¹",
      "explanationEN": "to choke oneself"
    },
    {
      "character": "𘒢",
      "reading": "me¹",
      "explanationEN": "gruel; porridge"
    },
    {
      "character": "𗶗",
      "reading": "tśoh²",
      "explanationEN": "heavy"
    },
    {
      "character": "𘑧",
      "reading": "si̱w¹",
      "explanationEN": "dried meat"
    },
    {
      "character": "𘇢",
      "reading": "thu̱¹",
      "explanationEN": "to mix; to blend"
    },
    {
      "character": "𗸤",
      "reading": "ti̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘆣",
      "reading": "qa̱¹",
      "explanationEN": "centre; middle"
    },
    {
      "character": "𘇂",
      "reading": "ġu̱²",
      "explanationEN": "MED: medioesive case; middle"
    },
    {
      "character": "𗘪",
      "reading": "lhi̱w¹",
      "explanationEN": "clan"
    },
    {
      "character": "𗟾",
      "reading": "qa̱¹",
      "explanationEN": "to cry; to weep"
    },
    {
      "character": "𗗙",
      "reading": "ye¹",
      "explanationEN": "GEN; ANTIERG"
    },
    {
      "character": "𗘿",
      "reading": "po̱¹",
      "explanationEN": "well-balanced; short"
    },
    {
      "character": "𘗴",
      "reading": "rkir²",
      "explanationEN": "waist"
    },
    {
      "character": "𘝾",
      "reading": "li²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗇤",
      "reading": "tswa̱¹",
      "explanationEN": "to fall; to throw"
    },
    {
      "character": "𗇪",
      "reading": "dih²",
      "explanationEN": "hair"
    },
    {
      "character": "𗇵",
      "reading": "lhwi²",
      "explanationEN": "old; outdated"
    },
    {
      "character": "𗇷",
      "reading": "qa̱h²",
      "explanationEN": "tattered"
    },
    {
      "character": "𗇫",
      "reading": "dih²",
      "explanationEN": "to build.ᴀ; to cure.ᴀ"
    },
    {
      "character": "𗕌",
      "reading": "źiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘄓",
      "reading": "pae̱ṃ²",
      "explanationEN": "a kind of animal"
    },
    {
      "character": "𗕖",
      "reading": "qao̱h¹",
      "explanationEN": "to observe; to watch"
    },
    {
      "character": "𘅾",
      "reading": "γo̱²",
      "explanationEN": "leisure; free time"
    },
    {
      "character": "𘒁",
      "reading": "duh¹",
      "explanationEN": "centre; middle"
    },
    {
      "character": "𘘤",
      "reading": "dźə¹",
      "explanationEN": "skin; fur"
    },
    {
      "character": "𗱖",
      "reading": "źwu²",
      "explanationEN": "a kind of clothes"
    },
    {
      "character": "𗱡",
      "reading": "źwu²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘞹",
      "reading": "də²",
      "explanationEN": "to prepare"
    },
    {
      "character": "𗱯",
      "reading": "ndi̱w²",
      "explanationEN": "to press; to oppress"
    },
    {
      "character": "𗇡",
      "reading": "reṃ²",
      "explanationEN": "one of the five two-hour periods into which the night was formerly divided; watch"
    },
    {
      "character": "𗇥",
      "reading": "???",
      "explanationEN": "inclined to one side; slanting"
    },
    {
      "character": "𗈜",
      "reading": "qa̱²",
      "explanationEN": "to separate; to sever"
    },
    {
      "character": "𗈧",
      "reading": "śeh¹",
      "explanationEN": "ghost"
    },
    {
      "character": "𗱴",
      "reading": "vih²",
      "explanationEN": "mill; millstones"
    },
    {
      "character": "𗲃",
      "reading": "leṃh²",
      "explanationEN": "to rely on"
    },
    {
      "character": "𗲱",
      "reading": "tṣhao̱ṃ²",
      "explanationEN": "red sand"
    },
    {
      "character": "𗲴",
      "reading": "luh¹",
      "explanationEN": "to rub; to knead"
    },
    {
      "character": "𗲼",
      "reading": "twə¹",
      "explanationEN": "to knead; to rub"
    },
    {
      "character": "𘒔",
      "reading": "twe̱¹",
      "explanationEN": "lame"
    },
    {
      "character": "𗉌",
      "reading": "pu²",
      "explanationEN": "butterfly"
    },
    {
      "character": "𗘔",
      "reading": "tshwu¹",
      "explanationEN": "to swear; to pledge"
    },
    {
      "character": "𗗯",
      "reading": "tśe²",
      "explanationEN": "dog"
    },
    {
      "character": "𗵿",
      "reading": "mbi̱²",
      "explanationEN": "eyebrow; brow"
    },
    {
      "character": "𗶍",
      "reading": "mbi̱²",
      "explanationEN": "ghost"
    },
    {
      "character": "𘅕",
      "reading": "zo̱ṃ¹",
      "explanationEN": "to be undivided"
    },
    {
      "character": "𘝌",
      "reading": "leṃh¹",
      "explanationEN": "evil spirit; demon"
    },
    {
      "character": "𘗪",
      "reading": "lwu¹",
      "explanationEN": "to deceive; to cheat"
    },
    {
      "character": "𘆕",
      "reading": "ŋga̱²",
      "explanationEN": "thin"
    },
    {
      "character": "𗈏",
      "reading": "de²",
      "explanationEN": "toil; hard work"
    },
    {
      "character": "𗇨",
      "reading": "ma¹",
      "explanationEN": "end"
    },
    {
      "character": "𗇧",
      "reading": "qhə̱²",
      "explanationEN": "horse disease"
    },
    {
      "character": "𗈨",
      "reading": "lo̱¹",
      "explanationEN": "to dig"
    },
    {
      "character": "𗈤",
      "reading": "śu¹",
      "explanationEN": "tattered; ragged"
    },
    {
      "character": "𗕗",
      "reading": "rer²",
      "explanationEN": "to adore; to admire"
    },
    {
      "character": "𘅣",
      "reading": "da̱h²",
      "explanationEN": "matter; affair; thing"
    },
    {
      "character": "𘑴",
      "reading": "rlho̱ṃr²",
      "explanationEN": "bag; pocket"
    },
    {
      "character": "𘞻",
      "reading": "də²",
      "explanationEN": "wan and sallow; thin and pallid"
    },
    {
      "character": "𘒟",
      "reading": "ẓuo¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗈎",
      "reading": "???",
      "explanationEN": "disease; sickness; illness"
    },
    {
      "character": "𗇱",
      "reading": "ŋa̱²",
      "explanationEN": "ovum; egg"
    },
    {
      "character": "𗇼",
      "reading": "gwaṃ²",
      "explanationEN": "goat"
    },
    {
      "character": "𗕫",
      "reading": "ru̱r²",
      "explanationEN": "to like; to love"
    },
    {
      "character": "𗕳",
      "reading": "śəh¹",
      "explanationEN": "to change; to vary"
    },
    {
      "character": "𗘫",
      "reading": "nlu¹",
      "explanationEN": "to fall scatteredly; to be far apart"
    },
    {
      "character": "𗍚",
      "reading": "rza̱r¹",
      "explanationEN": "ashamed; abashed"
    },
    {
      "character": "𗕝",
      "reading": "phəh¹",
      "explanationEN": "to contract; to reduce"
    },
    {
      "character": "𗗵",
      "reading": "qhai̱²",
      "explanationEN": "yak"
    },
    {
      "character": "𘈕",
      "reading": "śwow¹",
      "explanationEN": "to drive away; to brush away"
    },
    {
      "character": "𘙆",
      "reading": "vwaə̱²",
      "explanationEN": "fat; grease"
    },
    {
      "character": "𗕞",
      "reading": "ndzo̱²",
      "explanationEN": "to ride"
    },
    {
      "character": "𘒘",
      "reading": "paa̱ṃ¹",
      "explanationEN": "to assist"
    },
    {
      "character": "𗘂",
      "reading": "khwə¹",
      "explanationEN": "dog"
    },
    {
      "character": "𗍈",
      "reading": "koṃ¹",
      "explanationEN": "eyelid"
    },
    {
      "character": "𗈘",
      "reading": "hwi̱ṃ²",
      "explanationEN": "devil; demon"
    },
    {
      "character": "𗘀",
      "reading": "qi̱w²",
      "explanationEN": "chrysalis"
    },
    {
      "character": "𘅞",
      "reading": "rner²",
      "explanationEN": "face"
    },
    {
      "character": "𘄥",
      "reading": "seh²",
      "explanationEN": "evil; heretical"
    },
    {
      "character": "𗇴",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "disease; illness"
    },
    {
      "character": "𗈞",
      "reading": "rdzar²",
      "explanationEN": "to extinguish; to eliminate"
    },
    {
      "character": "𗲁",
      "reading": "tṣaa̱¹",
      "explanationEN": "to collapse"
    },
    {
      "character": "𗲶",
      "reading": "tṣai̱w¹",
      "explanationEN": "to pad"
    },
    {
      "character": "𗈈",
      "reading": "dẓaa̱ṃ²",
      "explanationEN": "egg; ovum"
    },
    {
      "character": "𗲷",
      "reading": "ŋŋwu̱²",
      "explanationEN": "fragrant"
    },
    {
      "character": "𘙧",
      "reading": "gwi¹",
      "explanationEN": "fur coat"
    },
    {
      "character": "𘘨",
      "reading": "zəh²",
      "explanationEN": "proud; arrogant"
    },
    {
      "character": "𗡷",
      "reading": "ṇo̱ṃ²",
      "explanationEN": "wonderful"
    },
    {
      "character": "𗇰",
      "reading": "ma¹",
      "explanationEN": "to think of; to be long for"
    },
    {
      "character": "𗕚",
      "reading": "ma¹",
      "explanationEN": "ten thousand"
    },
    {
      "character": "𘅉",
      "reading": "te¹",
      "explanationEN": "chapter; grade; rank"
    },
    {
      "character": "𘜇",
      "reading": "tṣhao̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗘈",
      "reading": "rŋwi̱r²",
      "explanationEN": "slack; lax; dirty"
    },
    {
      "character": "𗸯",
      "reading": "dźwu¹",
      "explanationEN": "benevolence; humanity"
    },
    {
      "character": "𘙗",
      "reading": "zi¹",
      "explanationEN": "enough; sufficient"
    },
    {
      "character": "𘝿",
      "reading": "li²",
      "explanationEN": "proverb; saying"
    },
    {
      "character": "𘜼",
      "reading": "mpho²",
      "explanationEN": "gentle; harmonious"
    },
    {
      "character": "𘜞",
      "reading": "tse̱²",
      "explanationEN": "temporary"
    },
    {
      "character": "𗈁",
      "reading": "nvu¹",
      "explanationEN": "sad; sorrowful"
    },
    {
      "character": "𗱟",
      "reading": "???",
      "explanationEN": "to hide; to conceal"
    },
    {
      "character": "𗱭",
      "reading": "śiw²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗲂",
      "reading": "rŋu̱r¹",
      "explanationEN": "to bake"
    },
    {
      "character": "𘆓",
      "reading": "lha²",
      "explanationEN": "soft; lithe"
    },
    {
      "character": "𗌴",
      "reading": "vwi̱²",
      "explanationEN": "junket; fruit jelly"
    },
    {
      "character": "𘘓",
      "reading": "qhwe̱¹",
      "explanationEN": "to expand; to spread; luxuriant; lush"
    },
    {
      "character": "𗶐",
      "reading": "mi̱²",
      "explanationEN": "younger sister"
    },
    {
      "character": "𗰫",
      "reading": "to̱¹",
      "explanationEN": "dark; black"
    },
    {
      "character": "𘄱",
      "reading": "theṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘔗",
      "reading": "ṇiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘔛",
      "reading": "dźəh²",
      "explanationEN": "red"
    },
    {
      "character": "𘑠",
      "reading": "rvwo̱r²",
      "explanationEN": "calf"
    },
    {
      "character": "𘘸",
      "reading": "ŋgi²",
      "explanationEN": "full; plump"
    },
    {
      "character": "𘘷",
      "reading": "rvwai̱r¹",
      "explanationEN": "man; male; boy"
    },
    {
      "character": "𘙘",
      "reading": "kə¹",
      "explanationEN": "singing aloud"
    },
    {
      "character": "𘞁",
      "reading": "li²",
      "explanationEN": "children"
    },
    {
      "character": "𘝋",
      "reading": "dzwə²",
      "explanationEN": "wing"
    },
    {
      "character": "𗱣",
      "reading": "nvi¹",
      "explanationEN": "to hide; to conceal"
    },
    {
      "character": "𗕓",
      "reading": "dih²",
      "explanationEN": "still; quiet"
    },
    {
      "character": "𘝵",
      "reading": "ye¹",
      "explanationEN": "pron. self; oneself"
    },
    {
      "character": "𗕙",
      "reading": "phə̱¹",
      "explanationEN": "conceited; arrogant"
    },
    {
      "character": "𗕘",
      "reading": "ŋə̱¹",
      "explanationEN": "I; me"
    },
    {
      "character": "𗲚",
      "reading": "qwe̱¹",
      "explanationEN": "grave; tomb"
    },
    {
      "character": "𗉩",
      "reading": "ŋgo¹",
      "explanationEN": "to bite"
    },
    {
      "character": "𗉓",
      "reading": "phi¹",
      "explanationEN": "house; building"
    },
    {
      "character": "𗰯",
      "reading": "lhə¹",
      "explanationEN": "to flatter; to fawn on"
    },
    {
      "character": "𗕐",
      "reading": "kəh¹",
      "explanationEN": "to fear.ʙ"
    },
    {
      "character": "𗱑",
      "reading": "tśiw²",
      "explanationEN": "burnt; charred"
    },
    {
      "character": "𗲳",
      "reading": "rdźwər²",
      "explanationEN": "mill; millstones"
    },
    {
      "character": "𘒄",
      "reading": "tṣhao̱¹",
      "explanationEN": "formation"
    },
    {
      "character": "𗶆",
      "reading": "γwa̱¹",
      "explanationEN": "clever wife"
    },
    {
      "character": "𗸪",
      "reading": "ryar¹",
      "explanationEN": "the eighth"
    },
    {
      "character": "𗸰",
      "reading": "to̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗉋",
      "reading": "tṣao̱ṃ¹",
      "explanationEN": "to gather; to assemble"
    },
    {
      "character": "𗉠",
      "reading": "tśu¹",
      "explanationEN": "camel"
    },
    {
      "character": "𗉙",
      "reading": "dih¹",
      "explanationEN": "mad; insane"
    },
    {
      "character": "𗉛",
      "reading": "źih¹",
      "explanationEN": "vexed; worried"
    },
    {
      "character": "𗉫",
      "reading": "ŋqhe̱¹",
      "explanationEN": "recreation; game"
    },
    {
      "character": "𗰰",
      "reading": "rkir²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘟡",
      "reading": "lho²",
      "explanationEN": "butter; cheese"
    },
    {
      "character": "𘔊",
      "reading": "paə̱¹",
      "explanationEN": "gorgeous; magnificent"
    },
    {
      "character": "𗈕",
      "reading": "ẓai̱²",
      "explanationEN": "to boil in a covered pot over a slow fire; to braise"
    },
    {
      "character": "𗈊",
      "reading": "ẓai̱²",
      "explanationEN": "to boil in a covered pot over a slow fire; to braise"
    },
    {
      "character": "𗕤",
      "reading": "śwa¹",
      "explanationEN": "to seek for happiness"
    },
    {
      "character": "𗌾",
      "reading": "thwə²",
      "explanationEN": "to combine; to concentrate"
    },
    {
      "character": "𗱓",
      "reading": "dźəh²",
      "explanationEN": "close; intimate"
    },
    {
      "character": "𗱰",
      "reading": "la̱ṃ¹",
      "explanationEN": "milk dregs"
    },
    {
      "character": "𗍜",
      "reading": "pa¹",
      "explanationEN": "broad; wide; shallow"
    },
    {
      "character": "𘄟",
      "reading": "tsha̱²",
      "explanationEN": "wisdom"
    },
    {
      "character": "𗟭",
      "reading": "vwo̱²",
      "explanationEN": "should; ought to"
    },
    {
      "character": "𘓨",
      "reading": "ro̱r²",
      "explanationEN": "dirt; filth"
    },
    {
      "character": "𗗸",
      "reading": "vwa̱¹",
      "explanationEN": "eddy; whirlpool"
    },
    {
      "character": "𗳘",
      "reading": "ŋwi̱¹",
      "explanationEN": "to be willing"
    },
    {
      "character": "𘘣",
      "reading": "yə²",
      "explanationEN": "to say"
    },
    {
      "character": "𘘥",
      "reading": "yə¹",
      "explanationEN": "to say; to call"
    },
    {
      "character": "𘙿",
      "reading": "le²",
      "explanationEN": "shaman; wizard"
    },
    {
      "character": "𘝇",
      "reading": "nświ²",
      "explanationEN": "gentle; harmonious"
    },
    {
      "character": "𗱧",
      "reading": "mme̱²",
      "explanationEN": "to think of; to miss"
    },
    {
      "character": "𗵴",
      "reading": "dza¹",
      "explanationEN": "stomach"
    },
    {
      "character": "𗱬",
      "reading": "pə̱¹",
      "explanationEN": "devil; demon"
    },
    {
      "character": "𗟠",
      "reading": "dźu¹",
      "explanationEN": "to prepare; to plan"
    },
    {
      "character": "𘄤",
      "reading": "phəh¹",
      "explanationEN": "aphorism; motto"
    },
    {
      "character": "𗲥",
      "reading": "tse²",
      "explanationEN": "mortar"
    },
    {
      "character": "𘅟",
      "reading": "tshi¹",
      "explanationEN": "to drive"
    },
    {
      "character": "𘄻",
      "reading": "lwa¹",
      "explanationEN": "lower limbs; legs"
    },
    {
      "character": "𗡪",
      "reading": "tsi̱w²",
      "explanationEN": "limitation"
    },
    {
      "character": "𗕵",
      "reading": "dźwaw¹",
      "explanationEN": "to burst; to split"
    },
    {
      "character": "𗰬",
      "reading": "to̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗸮",
      "reading": "vwə̱¹",
      "explanationEN": "host; master"
    },
    {
      "character": "𘈄",
      "reading": "ntśə¹",
      "explanationEN": "to embroider"
    },
    {
      "character": "𘅢",
      "reading": "tshu̱¹",
      "explanationEN": "to sit cross-legged"
    },
    {
      "character": "𘄵",
      "reading": "γo̱²",
      "explanationEN": "leisure; free time"
    },
    {
      "character": "𗈂",
      "reading": "qa̱²",
      "explanationEN": "pot; jar"
    },
    {
      "character": "𗈒",
      "reading": "rkiwr²",
      "explanationEN": "elbow"
    },
    {
      "character": "𗘭",
      "reading": "tha̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗱞",
      "reading": "la̱ṃ¹",
      "explanationEN": "aerolite"
    },
    {
      "character": "𗱮",
      "reading": "teṃh¹",
      "explanationEN": "to fry batter in a thin layer"
    },
    {
      "character": "𗲔",
      "reading": "rŋu̱r¹",
      "explanationEN": "pancake"
    },
    {
      "character": "𗲆",
      "reading": "rγər¹",
      "explanationEN": "true; real; genuine"
    },
    {
      "character": "𗲢",
      "reading": "lu̱h¹",
      "explanationEN": "insect; worm"
    },
    {
      "character": "𘒙",
      "reading": "twi̱¹",
      "explanationEN": "to pile up; to stack"
    },
    {
      "character": "𗌵",
      "reading": "koṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗍒",
      "reading": "vah¹",
      "explanationEN": "flag; banner"
    },
    {
      "character": "𘗹",
      "reading": "vwi̱²",
      "explanationEN": "to sing loudly"
    },
    {
      "character": "𘓫",
      "reading": "tśe¹",
      "explanationEN": "Qiangic people; Tibetan"
    },
    {
      "character": "𗗺",
      "reading": "nlə¹",
      "explanationEN": "wolf"
    },
    {
      "character": "𗗹",
      "reading": "śwaw²",
      "explanationEN": "bellyband; belt"
    },
    {
      "character": "𗗿",
      "reading": "ta̱¹",
      "explanationEN": "dog"
    },
    {
      "character": "𗘄",
      "reading": "ta̱¹",
      "explanationEN": "maggot"
    },
    {
      "character": "𗘆",
      "reading": "qi̱w²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶀",
      "reading": "nllu²",
      "explanationEN": "parrot"
    },
    {
      "character": "𗡵",
      "reading": "nde¹",
      "explanationEN": "to smile; to laugh"
    },
    {
      "character": "𘄹",
      "reading": "twi̱ṃ¹",
      "explanationEN": "to brush; to whisk"
    },
    {
      "character": "𘴅",
      "reading": "le²",
      "explanationEN": "to jump; to leap"
    },
    {
      "character": "𘄴",
      "reading": "tshi¹",
      "explanationEN": "to desire; to want"
    },
    {
      "character": "𘅖",
      "reading": "mbə¹",
      "explanationEN": "to tie up"
    },
    {
      "character": "𘅗",
      "reading": "zih¹",
      "explanationEN": "boots"
    },
    {
      "character": "𘅭",
      "reading": "ta̱¹",
      "explanationEN": "dog"
    },
    {
      "character": "𘅜",
      "reading": "ndi²",
      "explanationEN": "to change; to vary"
    },
    {
      "character": "𗳥",
      "reading": "ndźu²",
      "explanationEN": "to exercise forbearance"
    },
    {
      "character": "𘘪",
      "reading": "to̱ṃ¹",
      "explanationEN": "to get; to obtain"
    },
    {
      "character": "𘙌",
      "reading": "kə¹",
      "explanationEN": "PFV: IN; IMP: IN; 1DU: 1st dual indexation"
    },
    {
      "character": "𘝀",
      "reading": "mphi¹",
      "explanationEN": "to fly"
    },
    {
      "character": "𘚝",
      "reading": "lu²",
      "explanationEN": "newborn baby; infant"
    },
    {
      "character": "𘞃",
      "reading": "dźoṃ¹",
      "explanationEN": "a long narrow flag; streamer"
    },
    {
      "character": "𘜝",
      "reading": "rtser²",
      "explanationEN": "thorn; splinter"
    },
    {
      "character": "𗲦",
      "reading": "nvi¹",
      "explanationEN": "to defraud; to swindle"
    },
    {
      "character": "𘈧",
      "reading": "nde̱¹",
      "explanationEN": "to pass on; transfer"
    },
    {
      "character": "𘗮",
      "reading": "dźuh²",
      "explanationEN": "joking remarks; banter"
    },
    {
      "character": "𘓧",
      "reading": "???",
      "explanationEN": "luck; fortune"
    },
    {
      "character": "𗇟",
      "reading": "qhə̱²",
      "explanationEN": "monkey; ape"
    },
    {
      "character": "𗈦",
      "reading": "lha²",
      "explanationEN": "to confuse; to puzzle"
    },
    {
      "character": "𗕡",
      "reading": "rzor¹",
      "explanationEN": "to redeem"
    },
    {
      "character": "𘟠",
      "reading": "dzu̱¹",
      "explanationEN": "to love.ᴀ"
    },
    {
      "character": "𗕥",
      "reading": "mbi²",
      "explanationEN": "shining"
    },
    {
      "character": "𗲓",
      "reading": "bao̱h¹",
      "explanationEN": "to break through; to spout"
    },
    {
      "character": "𗲛",
      "reading": "qwe̱¹",
      "explanationEN": "four; the fourth"
    },
    {
      "character": "𗲰",
      "reading": "qwe̱¹",
      "explanationEN": "to chop; to pound"
    },
    {
      "character": "𗲟",
      "reading": "pə̱¹",
      "explanationEN": "ore"
    },
    {
      "character": "𗲯",
      "reading": "tswe¹",
      "explanationEN": "to rub; to knead"
    },
    {
      "character": "𘒉",
      "reading": "nlo̱¹",
      "explanationEN": "kind; type"
    },
    {
      "character": "𗌻",
      "reading": "rya̱r²",
      "explanationEN": "to subdue; to tame"
    },
    {
      "character": "𗘋",
      "reading": "qa̱h¹",
      "explanationEN": "seven"
    },
    {
      "character": "𘘘",
      "reading": "sa̱¹",
      "explanationEN": "a currency unit"
    },
    {
      "character": "𗉕",
      "reading": "rtśər²",
      "explanationEN": "saint"
    },
    {
      "character": "𗎟",
      "reading": "ntha̱r¹",
      "explanationEN": "blindness"
    },
    {
      "character": "𗚀",
      "reading": "tśo¹",
      "explanationEN": "to go without a burden"
    },
    {
      "character": "𘄘",
      "reading": "γao̱ṃ¹",
      "explanationEN": "to surrender; to capitulate"
    },
    {
      "character": "𗡩",
      "reading": "hwi̱¹",
      "explanationEN": "grey; ashy color"
    },
    {
      "character": "𗶅",
      "reading": "tśuh¹",
      "explanationEN": "to guard; to defend"
    },
    {
      "character": "𘄿",
      "reading": "te¹",
      "explanationEN": "chapter; grade; rank"
    },
    {
      "character": "𗳤",
      "reading": "lhwə²",
      "explanationEN": "among; middle"
    },
    {
      "character": "𘜄",
      "reading": "rŋwi̱r¹",
      "explanationEN": "to equate; to be equal"
    },
    {
      "character": "𘝎",
      "reading": "rvwi̱r²",
      "explanationEN": "a kind of silk"
    },
    {
      "character": "𗕏",
      "reading": "rtśər²",
      "explanationEN": "conceited"
    },
    {
      "character": "𗕜",
      "reading": "vwa̱²",
      "explanationEN": "to hide; conceal"
    },
    {
      "character": "𗕮",
      "reading": "ntśhi¹",
      "explanationEN": "to pull"
    },
    {
      "character": "𗕴",
      "reading": "tseṃh¹",
      "explanationEN": "modest; humble"
    },
    {
      "character": "𗘬",
      "reading": "swa¹",
      "explanationEN": "time"
    },
    {
      "character": "𗲠",
      "reading": "ŋa̱¹",
      "explanationEN": "hollow; void"
    },
    {
      "character": "𗲺",
      "reading": "śu²",
      "explanationEN": "firm; solid"
    },
    {
      "character": "𘒑",
      "reading": "dźwe²",
      "explanationEN": "food for army"
    },
    {
      "character": "𗘛",
      "reading": "tshwu¹",
      "explanationEN": "to dye"
    },
    {
      "character": "𗸲",
      "reading": "rzur²",
      "explanationEN": "to give birth"
    },
    {
      "character": "𗙹",
      "reading": "rlho̱ṃr²",
      "explanationEN": "the moon"
    },
    {
      "character": "𗰳",
      "reading": "lhə¹",
      "explanationEN": "bear"
    },
    {
      "character": "𘈅",
      "reading": "nno̱²",
      "explanationEN": "the front of a Chinese gown"
    },
    {
      "character": "𘞅",
      "reading": "nlə¹",
      "explanationEN": "streamer"
    },
    {
      "character": "𗕨",
      "reading": "llo̱ṃh¹",
      "explanationEN": "to love"
    },
    {
      "character": "𗉘",
      "reading": "tśhə¹",
      "explanationEN": "demonstrative pronoun; POT: potential"
    },
    {
      "character": "𗘅",
      "reading": "gu¹",
      "explanationEN": "pig; hog"
    },
    {
      "character": "𗎣",
      "reading": "pao̱ṃ¹",
      "explanationEN": "boundary; boder"
    },
    {
      "character": "𗈣",
      "reading": "rkiwr²",
      "explanationEN": "slanting; inclined; crooked"
    },
    {
      "character": "𗕱",
      "reading": "γai̱¹",
      "explanationEN": "height (of a person)"
    },
    {
      "character": "𗱺",
      "reading": "mme̱²",
      "explanationEN": "steed; fine horse"
    },
    {
      "character": "𗲧",
      "reading": "mme̱²",
      "explanationEN": "end; east"
    },
    {
      "character": "𗍙",
      "reading": "vwi̱²",
      "explanationEN": "curtain; screen"
    },
    {
      "character": "𗟣",
      "reading": "nllə²",
      "explanationEN": "to repent"
    },
    {
      "character": "𗵷",
      "reading": "śe¹",
      "explanationEN": "to give up; to abandon"
    },
    {
      "character": "𗵷",
      "reading": "śe¹",
      "explanationEN": "to give up; to abandon"
    },
    {
      "character": "𘄠",
      "reading": "tśha²",
      "explanationEN": "to shoot an arrow"
    },
    {
      "character": "𘈲",
      "reading": "bə̱²",
      "explanationEN": "old and shabby"
    },
    {
      "character": "𘗾",
      "reading": "lhe²",
      "explanationEN": "to butcher; to sacrifice"
    },
    {
      "character": "𘅸",
      "reading": "nli¹",
      "explanationEN": "trousers; pants"
    },
    {
      "character": "𘑻",
      "reading": "dih²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘙟",
      "reading": "lhao̱h²",
      "explanationEN": "neck"
    },
    {
      "character": "𘙢",
      "reading": "ba̱¹",
      "explanationEN": "deafness"
    },
    {
      "character": "𗡹",
      "reading": "rqo̱ṃr²",
      "explanationEN": "to like; to desire"
    },
    {
      "character": "𗟩",
      "reading": "ra?",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗲻",
      "reading": "ntha̱¹",
      "explanationEN": "to suppress; to stifle"
    },
    {
      "character": "𘜆",
      "reading": "γuo¹",
      "explanationEN": "wrestling"
    },
    {
      "character": "𗈥",
      "reading": "ndẓae̱ṃ²",
      "explanationEN": "lascivious; licentious"
    },
    {
      "character": "𗗳",
      "reading": "khwə²",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𘅡",
      "reading": "nse¹",
      "explanationEN": "evidence; proof"
    },
    {
      "character": "𗈙",
      "reading": "ntśu¹",
      "explanationEN": "to envy; to harm"
    },
    {
      "character": "𗕦",
      "reading": "thə¹",
      "explanationEN": "restrained; reserved"
    },
    {
      "character": "𗶏",
      "reading": "nlu²",
      "explanationEN": "imperial concubine"
    },
    {
      "character": "𘔘",
      "reading": "hu̱ṃ¹",
      "explanationEN": "red"
    },
    {
      "character": "𗲘",
      "reading": "rur¹",
      "explanationEN": "to complain; to grumble"
    },
    {
      "character": "𘄗",
      "reading": "dzwəh¹",
      "explanationEN": "to stop; to rest"
    },
    {
      "character": "𘙑",
      "reading": "lhoh²",
      "explanationEN": "to capture; to obtain"
    },
    {
      "character": "𘜿",
      "reading": "???",
      "explanationEN": "jerked meat"
    },
    {
      "character": "𗎠",
      "reading": "ryer²",
      "explanationEN": "tassel; a piece of cloth"
    },
    {
      "character": "𘒎",
      "reading": "lhoṃ²",
      "explanationEN": "place; site; market"
    },
    {
      "character": "𗉪",
      "reading": "tṣhae̱ṃ²",
      "explanationEN": "vexation; worry"
    },
    {
      "character": "𘅎",
      "reading": "lleṃh²",
      "explanationEN": "happy; delighted"
    },
    {
      "character": "𘘽",
      "reading": "mme¹",
      "explanationEN": "tail; end; back"
    },
    {
      "character": "𗍛",
      "reading": "kəh²",
      "explanationEN": "fast; rapid; speech; word"
    },
    {
      "character": "𗕛",
      "reading": "te̱¹",
      "explanationEN": "well-proportioned"
    },
    {
      "character": "𗲀",
      "reading": "lo̱²",
      "explanationEN": "stone roller"
    },
    {
      "character": "𗸧",
      "reading": "???",
      "explanationEN": ""
    },
    {
      "character": "𗳬",
      "reading": "dwu²",
      "explanationEN": "to know; to realize"
    },
    {
      "character": "𘑸",
      "reading": "ro̱ṃr¹",
      "explanationEN": "withered; skinny"
    },
    {
      "character": "𗕬",
      "reading": "śə²",
      "explanationEN": "light; not heavy"
    },
    {
      "character": "𘅘",
      "reading": "rner²",
      "explanationEN": "to spread; to pave"
    },
    {
      "character": "𘝍",
      "reading": "tśuh²",
      "explanationEN": "wing"
    },
    {
      "character": "𗇸",
      "reading": "zəh¹",
      "explanationEN": "daylight; daytime"
    },
    {
      "character": "𗈃",
      "reading": "nsu¹",
      "explanationEN": "deer"
    },
    {
      "character": "𗸨",
      "reading": "rŋwə̱r¹",
      "explanationEN": "seven; the seventh"
    },
    {
      "character": "𗉚",
      "reading": "thu¹",
      "explanationEN": "blood relations"
    },
    {
      "character": "𗕋",
      "reading": "rler¹",
      "explanationEN": "plough"
    },
    {
      "character": "𘇥",
      "reading": "pho̱ṃh²",
      "explanationEN": "lame"
    },
    {
      "character": "𘜉",
      "reading": "phi²",
      "explanationEN": "to lose; to give up"
    },
    {
      "character": "𘒒",
      "reading": "nlo̱²",
      "explanationEN": "to exterminate; to wipe out"
    },
    {
      "character": "𘃳",
      "reading": "kiw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗳵",
      "reading": "ndzwə¹",
      "explanationEN": "to speed; to gallop"
    },
    {
      "character": "𗰷",
      "reading": "rzwə̱r¹",
      "explanationEN": "to rinse; to wash"
    },
    {
      "character": "𗇿",
      "reading": "de¹",
      "explanationEN": "disease; illness"
    },
    {
      "character": "𗱾",
      "reading": "ndi̱w²",
      "explanationEN": "to admire"
    },
    {
      "character": "𗱹",
      "reading": "rzi̱wr¹",
      "explanationEN": "heavy"
    },
    {
      "character": "𗸋",
      "reading": "rtsi̱wr²",
      "explanationEN": "heavy"
    },
    {
      "character": "𗕟",
      "reading": "təh²",
      "explanationEN": "broken"
    },
    {
      "character": "𗲮",
      "reading": "rẓae̱r²",
      "explanationEN": "incomplete; different"
    },
    {
      "character": "𗸇",
      "reading": "deh¹",
      "explanationEN": "steps; stairs"
    },
    {
      "character": "𘞈",
      "reading": "ta̱ṃ¹",
      "explanationEN": "unlined garment"
    },
    {
      "character": "𘆊",
      "reading": "γoṃ¹",
      "explanationEN": "source"
    },
    {
      "character": "𘆆",
      "reading": "le¹",
      "explanationEN": "ashamed; abashed"
    },
    {
      "character": "𘆇",
      "reading": "le²",
      "explanationEN": "shame; disgrace"
    },
    {
      "character": "𘅿",
      "reading": "buh¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗕎",
      "reading": "nni̱w²",
      "explanationEN": "to be smooth and steady"
    },
    {
      "character": "𗈓",
      "reading": "le̱²",
      "explanationEN": "winecup"
    },
    {
      "character": "𘇦",
      "reading": "kweṃh¹",
      "explanationEN": "paper"
    },
    {
      "character": "𗱫",
      "reading": "nsu¹",
      "explanationEN": "love; admiration"
    },
    {
      "character": "𗷸",
      "reading": "yiw²",
      "explanationEN": "son; man"
    },
    {
      "character": "𗷬",
      "reading": "rtśhwo̱r²",
      "explanationEN": "servant"
    },
    {
      "character": "𗲑",
      "reading": "ndi̱w²",
      "explanationEN": "tiredness"
    },
    {
      "character": "𘇩",
      "reading": "ṇi¹",
      "explanationEN": "magic arts"
    },
    {
      "character": "𗱢",
      "reading": "na¹",
      "explanationEN": "PFV: DOWN; IMP: DOWN"
    },
    {
      "character": "𘃵",
      "reading": "rər²",
      "explanationEN": "direction; orientation"
    },
    {
      "character": "𘆃",
      "reading": "bəh¹",
      "explanationEN": "ape"
    },
    {
      "character": "𗈅",
      "reading": "le̱²",
      "explanationEN": "to return; to roll"
    },
    {
      "character": "𗳶",
      "reading": "tṣhai̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘇙",
      "reading": "vwa̱ṃ²",
      "explanationEN": "to support; to bring up"
    },
    {
      "character": "𘑙",
      "reading": "ma¹",
      "explanationEN": "fish"
    },
    {
      "character": "𗈛",
      "reading": "gu¹",
      "explanationEN": "rare; thin"
    },
    {
      "character": "𗈚",
      "reading": "gu¹",
      "explanationEN": "discontinuity; isolation"
    },
    {
      "character": "𗲨",
      "reading": "rzir¹",
      "explanationEN": "heavy; cumbersome"
    },
    {
      "character": "𘒐",
      "reading": "nlo̱¹",
      "explanationEN": "pool efforts; cooperation"
    },
    {
      "character": "𗷳",
      "reading": "dau̱²",
      "explanationEN": "to measure; to send bounds to"
    },
    {
      "character": "𗷹",
      "reading": "rdzu̱r¹",
      "explanationEN": "to kick"
    },
    {
      "character": "𗷾",
      "reading": "lleh¹",
      "explanationEN": "to wait upon; to serve"
    },
    {
      "character": "𗸅",
      "reading": "tśhwiṃ¹",
      "explanationEN": "to repeat; to duplicate"
    },
    {
      "character": "𗸆",
      "reading": "khoṃ¹",
      "explanationEN": "strong; powerful"
    },
    {
      "character": "𘑯",
      "reading": "γwu̱²",
      "explanationEN": "brocade"
    },
    {
      "character": "𗈌",
      "reading": "de²",
      "explanationEN": "to steal"
    },
    {
      "character": "𗈉",
      "reading": "ni?",
      "explanationEN": "to lose; to fail"
    },
    {
      "character": "𗲫",
      "reading": "bə̱?",
      "explanationEN": "to sink"
    },
    {
      "character": "𘒌",
      "reading": "bo̱ṃh²",
      "explanationEN": "leopard; panther"
    },
    {
      "character": "𗸒",
      "reading": "su̱¹",
      "explanationEN": "COMP: comparative case"
    },
    {
      "character": "𗸐",
      "reading": "ryər²",
      "explanationEN": "diligent"
    },
    {
      "character": "𘞆",
      "reading": "bi¹",
      "explanationEN": "thin; slight"
    },
    {
      "character": "𗰹",
      "reading": "tso̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗱈",
      "reading": "lli̱²",
      "explanationEN": "tiger"
    },
    {
      "character": "𗷲",
      "reading": "giṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗸏",
      "reading": "lwih²",
      "explanationEN": "to abandon; to give up"
    },
    {
      "character": "𗱙",
      "reading": "rqu̱r¹",
      "explanationEN": "clumsy"
    },
    {
      "character": "𗲄",
      "reading": "tṣhao̱ṃ¹",
      "explanationEN": "to knit; to wave"
    },
    {
      "character": "𘘋",
      "reading": "me²",
      "explanationEN": "devil; demon"
    },
    {
      "character": "𗕿",
      "reading": "ne²",
      "explanationEN": "kind; loving"
    },
    {
      "character": "𗕾",
      "reading": "ku¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗕻",
      "reading": "qho̱¹",
      "explanationEN": "ditch"
    },
    {
      "character": "𗈝",
      "reading": "tsi̱ṃ¹",
      "explanationEN": "to hate; to swear"
    },
    {
      "character": "𗖥",
      "reading": "tśhwi¹",
      "explanationEN": "to advise; to urge"
    },
    {
      "character": "𗇲",
      "reading": "lu̱h¹",
      "explanationEN": "toil; hard work"
    },
    {
      "character": "𗗆",
      "reading": "si̱ṃ¹",
      "explanationEN": "Buddhist monk"
    },
    {
      "character": "𗈋",
      "reading": "rtsu̱r¹",
      "explanationEN": "winter"
    },
    {
      "character": "𗖼",
      "reading": "leh¹",
      "explanationEN": "lazy; idle"
    },
    {
      "character": "𗕷",
      "reading": "ŋwe̱²",
      "explanationEN": "flat; equal"
    },
    {
      "character": "𗴨",
      "reading": "səh¹",
      "explanationEN": "to die"
    },
    {
      "character": "𘜎",
      "reading": "le²",
      "explanationEN": "enough; sufficient"
    },
    {
      "character": "𘜐",
      "reading": "ndza̱¹",
      "explanationEN": "justice; righteousness"
    },
    {
      "character": "𗲕",
      "reading": "tsi̱¹",
      "explanationEN": "button"
    },
    {
      "character": "𗉄",
      "reading": "dẓaa̱¹",
      "explanationEN": "to stir-fry"
    },
    {
      "character": "𗴧",
      "reading": "vih²",
      "explanationEN": "to change; to make believe"
    },
    {
      "character": "𗖙",
      "reading": "sa̱²",
      "explanationEN": "to speak; to talk; to tell"
    },
    {
      "character": "𘇰",
      "reading": "tśhiṃ¹",
      "explanationEN": "old; stale"
    },
    {
      "character": "𗇞",
      "reading": "qho̱ṃ¹",
      "explanationEN": "hole; hollow"
    },
    {
      "character": "𗱔",
      "reading": "ha̱ṃ¹",
      "explanationEN": "foolish; silly"
    },
    {
      "character": "𘒕",
      "reading": "nto̱²",
      "explanationEN": "peaceful; harmonious"
    },
    {
      "character": "𗕶",
      "reading": "γa̱h²",
      "explanationEN": "mad; crazy"
    },
    {
      "character": "𗴩",
      "reading": "səh¹",
      "explanationEN": "bright; intelligent"
    },
    {
      "character": "𗈽",
      "reading": "pi̱¹",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𗖠",
      "reading": "ŋwe̱²",
      "explanationEN": "harmonious; mild"
    },
    {
      "character": "𘒚",
      "reading": "be̱¹",
      "explanationEN": "to lose; to fail"
    },
    {
      "character": "𗖉",
      "reading": "tho̱ṃh¹",
      "explanationEN": "insane"
    },
    {
      "character": "𘒈",
      "reading": "γu̱¹",
      "explanationEN": "healthy; strong"
    },
    {
      "character": "𗖨",
      "reading": "ri̱r¹",
      "explanationEN": "peaceful; harmonious"
    },
    {
      "character": "𘒛",
      "reading": "mba̱¹",
      "explanationEN": "to forget"
    },
    {
      "character": "𗴍",
      "reading": "to̱ṃ¹",
      "explanationEN": "quail"
    },
    {
      "character": "𘆏",
      "reading": "nlə¹",
      "explanationEN": "to suppress; to put down"
    },
    {
      "character": "𗱤",
      "reading": "tśeh²",
      "explanationEN": "wallet; pocketbook"
    },
    {
      "character": "𗖅",
      "reading": "swi²",
      "explanationEN": "to go along with; to lead; to guide"
    },
    {
      "character": "𗈄",
      "reading": "nnə²",
      "explanationEN": "to abuse; to swear; to curse"
    },
    {
      "character": "𗱗",
      "reading": "tśeh¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘆒",
      "reading": "γu̱¹",
      "explanationEN": "to exchange; to change"
    },
    {
      "character": "𗖱",
      "reading": "γwu̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗉊",
      "reading": "dźwe¹",
      "explanationEN": "burning hot"
    },
    {
      "character": "𗗇",
      "reading": "gu¹",
      "explanationEN": "to confess"
    },
    {
      "character": "𗖪",
      "reading": "rlho̱ṃr²",
      "explanationEN": "swelling"
    },
    {
      "character": "𗇣",
      "reading": "qao̱²",
      "explanationEN": "to dislike; to detest"
    },
    {
      "character": "𗇳",
      "reading": "qhao̱¹",
      "explanationEN": "to detest.ʙ"
    },
    {
      "character": "𘒇",
      "reading": "tshi²",
      "explanationEN": "to wait upon; to serve"
    },
    {
      "character": "𗖈",
      "reading": "mpha¹",
      "explanationEN": "to forbid; to ban"
    },
    {
      "character": "𗴦",
      "reading": "źaw²",
      "explanationEN": "main points; essentials"
    },
    {
      "character": "𗲋",
      "reading": "lu̱h¹",
      "explanationEN": "happy; joyful"
    },
    {
      "character": "𗲌",
      "reading": "ma¹",
      "explanationEN": "river"
    },
    {
      "character": "𘒏",
      "reading": "ga¹",
      "explanationEN": "army; soldier"
    },
    {
      "character": "𗗉",
      "reading": "ŋwe̱²",
      "explanationEN": "to sing happily"
    },
    {
      "character": "𗴎",
      "reading": "to̱ṃ¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗗁",
      "reading": "śə¹",
      "explanationEN": "ashamed; abashed"
    },
    {
      "character": "𘒖",
      "reading": "nlo̱¹",
      "explanationEN": "to gather; to assemble"
    },
    {
      "character": "𗖦",
      "reading": "śwoṃ²",
      "explanationEN": "to dispatch; to send"
    },
    {
      "character": "𗗌",
      "reading": "ġo̱¹",
      "explanationEN": "house"
    },
    {
      "character": "𗖲",
      "reading": "lhu¹",
      "explanationEN": "to increase; to add"
    },
    {
      "character": "𗲅",
      "reading": "tṣhwae̱ṃ¹",
      "explanationEN": "to tie; to fasten"
    },
    {
      "character": "𗗃",
      "reading": "γwuh²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘙸",
      "reading": "lao̱¹",
      "explanationEN": "string"
    },
    {
      "character": "𗌭",
      "reading": "qu̱¹",
      "explanationEN": "so"
    },
    {
      "character": "𗌮",
      "reading": "rmor¹",
      "explanationEN": "true; closes"
    },
    {
      "character": "𗖧",
      "reading": "yi²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗘮",
      "reading": "rnə̱r¹",
      "explanationEN": "yellow"
    },
    {
      "character": "𘛽",
      "reading": "luh²",
      "explanationEN": "body"
    },
    {
      "character": "𗲡",
      "reading": "hi̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗲬",
      "reading": "ŋqaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗇩",
      "reading": "lo̱ṃ²",
      "explanationEN": "ancestor; forefather"
    },
    {
      "character": "𗈔",
      "reading": "qa̱²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗳃",
      "reading": "bih¹",
      "explanationEN": "wall; stele"
    },
    {
      "character": "𗳾",
      "reading": "ntṣhaa̱²",
      "explanationEN": "slope"
    },
    {
      "character": "𘈹",
      "reading": "yuo²",
      "explanationEN": "to love"
    },
    {
      "character": "𗲗",
      "reading": "rsər¹",
      "explanationEN": "full; filled"
    },
    {
      "character": "𗈖",
      "reading": "???",
      "explanationEN": "to scold; to rebuke; to dress down"
    },
    {
      "character": "𗴆",
      "reading": "dźwə²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘇬",
      "reading": "rtswar¹",
      "explanationEN": "to know"
    },
    {
      "character": "𗹍",
      "reading": "mih²",
      "explanationEN": "an official title"
    },
    {
      "character": "𗇭",
      "reading": "qa̱²",
      "explanationEN": "to spread"
    },
    {
      "character": "𗴁",
      "reading": "qa̱²",
      "explanationEN": "great-great-grandson"
    },
    {
      "character": "𘈵",
      "reading": "nih²",
      "explanationEN": "nephew; brother's child"
    },
    {
      "character": "𗹒",
      "reading": "???",
      "explanationEN": "politics; affairs"
    },
    {
      "character": "𗳍",
      "reading": "soh²",
      "explanationEN": "a kind of grass to make rain cape"
    },
    {
      "character": "𗳉",
      "reading": "the¹",
      "explanationEN": "fields; subfurbs"
    },
    {
      "character": "𗳏",
      "reading": "theṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘇭",
      "reading": "swi¹",
      "explanationEN": "to tie"
    },
    {
      "character": "𘈷",
      "reading": "gi²",
      "explanationEN": "son; child"
    },
    {
      "character": "𘈸",
      "reading": "ror¹",
      "explanationEN": "to spoil (a child)"
    },
    {
      "character": "𗹐",
      "reading": "twu̱h¹",
      "explanationEN": "loyal; devoted"
    },
    {
      "character": "𗹖",
      "reading": "lu̱²",
      "explanationEN": "skilful; clever"
    },
    {
      "character": "𗴄",
      "reading": "ryər²",
      "explanationEN": "platform"
    },
    {
      "character": "𗴂",
      "reading": "phao̱ṃ¹",
      "explanationEN": "white"
    },
    {
      "character": "𘇯",
      "reading": "nni²",
      "explanationEN": "giant salamander"
    },
    {
      "character": "𗹕",
      "reading": "do̱ṃ¹",
      "explanationEN": "long narrow strips; a classifier"
    },
    {
      "character": "𗳿",
      "reading": "qa̱²",
      "explanationEN": "risky mountainside"
    },
    {
      "character": "𗶦",
      "reading": "qa̱h²",
      "explanationEN": "equality"
    },
    {
      "character": "𘞘",
      "reading": "n·yiw¹",
      "explanationEN": "species; seed"
    },
    {
      "character": "𘞛",
      "reading": "swə¹",
      "explanationEN": "ear"
    },
    {
      "character": "𘞾",
      "reading": "bəh¹",
      "explanationEN": "skilful; clever"
    },
    {
      "character": "𘝺",
      "reading": "vuh²",
      "explanationEN": "to bear (a burden)"
    },
    {
      "character": "𘟈",
      "reading": "nśə²",
      "explanationEN": "general name for certain musical instruments"
    },
    {
      "character": "𘞙",
      "reading": "geh¹",
      "explanationEN": "profit; benefit"
    },
    {
      "character": "𘞜",
      "reading": "thwa̱ṃ²",
      "explanationEN": "to break off"
    },
    {
      "character": "𗃓",
      "reading": "ti̱w¹",
      "explanationEN": "turbid; muddy"
    },
    {
      "character": "𗷣",
      "reading": "dźwu¹",
      "explanationEN": "to eliminate; to remove"
    },
    {
      "character": "𗙏",
      "reading": "γai̱h²",
      "explanationEN": "sound; sound"
    },
    {
      "character": "𗹅",
      "reading": "khiw²",
      "explanationEN": "to choke; to block"
    },
    {
      "character": "𗎂",
      "reading": "tśa¹",
      "explanationEN": "patron of sheep"
    },
    {
      "character": "𗘣",
      "reading": "rywər¹",
      "explanationEN": "looks; appearance"
    },
    {
      "character": "𗙱",
      "reading": "qə̱¹",
      "explanationEN": "arduous; difficult; hard; tough"
    },
    {
      "character": "𗟹",
      "reading": "ne²",
      "explanationEN": "language; tongue"
    },
    {
      "character": "𘄃",
      "reading": "lih²",
      "explanationEN": "lamb"
    },
    {
      "character": "𗗢",
      "reading": "the¹",
      "explanationEN": "dagger; knife"
    },
    {
      "character": "𗙅",
      "reading": "rhə̱r¹",
      "explanationEN": "to hum"
    },
    {
      "character": "𗰦",
      "reading": "lwo̱¹",
      "explanationEN": "dim; dusky"
    },
    {
      "character": "𗹋",
      "reading": "hwi̱ṃ¹",
      "explanationEN": "dim; dusky"
    },
    {
      "character": "𗹌",
      "reading": "sə²",
      "explanationEN": "new; fresh"
    },
    {
      "character": "𘄂",
      "reading": "ŋgi¹",
      "explanationEN": "clear"
    },
    {
      "character": "𘜘",
      "reading": "rir¹",
      "explanationEN": "to get\\.a; to obtain.ᴀ"
    },
    {
      "character": "𘇡",
      "reading": "thu̱¹",
      "explanationEN": "to set up; to build"
    },
    {
      "character": "𘙾",
      "reading": "ho̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘓳",
      "reading": "rŋo̱ṃr²",
      "explanationEN": "whole; complete"
    },
    {
      "character": "𘇎",
      "reading": "ṇa?",
      "explanationEN": "to renovate; to repair; to dredge ( a river, etc.)"
    },
    {
      "character": "𘔭",
      "reading": "dzeṃ¹",
      "explanationEN": "money"
    },
    {
      "character": "𗷩",
      "reading": "yeṃ²",
      "explanationEN": "prison; jail"
    },
    {
      "character": "𘆶",
      "reading": "su²",
      "explanationEN": "livestock; domestic animals"
    },
    {
      "character": "𘒽",
      "reading": "rkhwar¹",
      "explanationEN": "old ox"
    },
    {
      "character": "𘙰",
      "reading": "li̱w²",
      "explanationEN": "same; alike"
    },
    {
      "character": "𘇍",
      "reading": "γwu̱h²",
      "explanationEN": "domestic animals; steed"
    },
    {
      "character": "𘙨",
      "reading": "so̱ṃ²",
      "explanationEN": "to cry bitterly"
    },
    {
      "character": "𘜛",
      "reading": "γwe̱¹",
      "explanationEN": "to exchange"
    },
    {
      "character": "𗗗",
      "reading": "nye¹",
      "explanationEN": "exploits; achievements"
    },
    {
      "character": "𗙦",
      "reading": "dźiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗠂",
      "reading": "ri̱r²",
      "explanationEN": "stagnant"
    },
    {
      "character": "𗘝",
      "reading": "lu̱²",
      "explanationEN": "five"
    },
    {
      "character": "𘃽",
      "reading": "γo̱²",
      "explanationEN": "to hold; to contain; to enter"
    },
    {
      "character": "𘜕",
      "reading": "rkir²",
      "explanationEN": "to dare"
    },
    {
      "character": "𘚃",
      "reading": "duh¹",
      "explanationEN": "grace; kindness"
    },
    {
      "character": "𗗝",
      "reading": "nye¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𘘊",
      "reading": "świ¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𘞟",
      "reading": "dzwə¹",
      "explanationEN": "crime; guilt"
    },
    {
      "character": "𘇘",
      "reading": "reṃ²",
      "explanationEN": "string; rope; belt"
    },
    {
      "character": "𘓹",
      "reading": "vwa̱h²",
      "explanationEN": "palace"
    },
    {
      "character": "𘓮",
      "reading": "ru̱r²",
      "explanationEN": "clean"
    },
    {
      "character": "𗸥",
      "reading": "tuh²",
      "explanationEN": "to mate; to marry"
    },
    {
      "character": "𘇅",
      "reading": "rer¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗃑",
      "reading": "ti̱w¹",
      "explanationEN": "crooked; curved"
    },
    {
      "character": "𗌯",
      "reading": "vih²",
      "explanationEN": "to send; to dispatch"
    },
    {
      "character": "𗷛",
      "reading": "qae̱²",
      "explanationEN": "to expel"
    },
    {
      "character": "𗍶",
      "reading": "dzeṃ²",
      "explanationEN": "to carve"
    },
    {
      "character": "𗘽",
      "reading": "thwə¹",
      "explanationEN": "fear; dread"
    },
    {
      "character": "𗙎",
      "reading": "si̱w¹",
      "explanationEN": "information; news"
    },
    {
      "character": "𗌰",
      "reading": "pu̱h²",
      "explanationEN": "old; aged"
    },
    {
      "character": "𗙲",
      "reading": "ri̱r²",
      "explanationEN": "jade necklace; net"
    },
    {
      "character": "𗹁",
      "reading": "rmar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘄝",
      "reading": "śwa¹",
      "explanationEN": "to give birth to"
    },
    {
      "character": "𘄍",
      "reading": "ba̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘄎",
      "reading": "gi¹",
      "explanationEN": "clear; unmixed"
    },
    {
      "character": "𘔢",
      "reading": "qhwa̱h¹",
      "explanationEN": "far"
    },
    {
      "character": "𗰛",
      "reading": "dzeh¹",
      "explanationEN": "to cross; to pass; to exceed"
    },
    {
      "character": "𗍻",
      "reading": "dźa²",
      "explanationEN": "lamb"
    },
    {
      "character": "𗙍",
      "reading": "khwaə̱?",
      "explanationEN": "to abuse; to swear"
    },
    {
      "character": "𗙔",
      "reading": "hwa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙣",
      "reading": "ha¹",
      "explanationEN": "to condemn; to swear"
    },
    {
      "character": "𗟺",
      "reading": "pəh¹",
      "explanationEN": "suggestion; discussion"
    },
    {
      "character": "𘄭",
      "reading": "tsuh¹",
      "explanationEN": "harm"
    },
    {
      "character": "𘘈",
      "reading": "rtśir¹",
      "explanationEN": "sound of clamping the teeth"
    },
    {
      "character": "𘘟",
      "reading": "za̱¹",
      "explanationEN": "enemy"
    },
    {
      "character": "𗰥",
      "reading": "qhwa̱¹",
      "explanationEN": "garden"
    },
    {
      "character": "𗙨",
      "reading": "ryer¹",
      "explanationEN": "rapidly"
    },
    {
      "character": "𗍽",
      "reading": "tshwu¹",
      "explanationEN": "to salute"
    },
    {
      "character": "𘆪",
      "reading": "tya²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘆷",
      "reading": "rtar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘇆",
      "reading": "rtso̱r²",
      "explanationEN": "foal"
    },
    {
      "character": "𘈠",
      "reading": "keh¹",
      "explanationEN": "to obstruct; to block"
    },
    {
      "character": "𘆸",
      "reading": "phi̱¹",
      "explanationEN": "grey"
    },
    {
      "character": "𘇏",
      "reading": "phe¹",
      "explanationEN": "to calm down; to arrange for"
    },
    {
      "character": "𘆻",
      "reading": "tshi̱w²",
      "explanationEN": "bridle"
    },
    {
      "character": "𘙮",
      "reading": "li̱w²",
      "explanationEN": "white"
    },
    {
      "character": "𘙱",
      "reading": "mbae̱¹",
      "explanationEN": "excrement of insects"
    },
    {
      "character": "𗙃",
      "reading": "liṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗹈",
      "reading": "γo̱²",
      "explanationEN": "felt"
    },
    {
      "character": "𘇣",
      "reading": "llao̱h¹",
      "explanationEN": "to mix; to stir"
    },
    {
      "character": "𗌱",
      "reading": "beṃ²",
      "explanationEN": "to cheat; to swindle"
    },
    {
      "character": "𗷨",
      "reading": "eṃ²",
      "explanationEN": "prison; jail"
    },
    {
      "character": "𗗶",
      "reading": "nə̱?",
      "explanationEN": "fox"
    },
    {
      "character": "𘴁",
      "reading": "ta̱¹",
      "explanationEN": "tail; east"
    },
    {
      "character": "𗳩",
      "reading": "γo̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗸬",
      "reading": "lheṃ¹",
      "explanationEN": "to hear; to listen"
    },
    {
      "character": "𘅆",
      "reading": "swe¹",
      "explanationEN": "to grind; to pestle"
    },
    {
      "character": "𘔚",
      "reading": "ne¹",
      "explanationEN": "red"
    },
    {
      "character": "𘙁",
      "reading": "se̱²",
      "explanationEN": "ripe hide; pelt"
    },
    {
      "character": "𘗭",
      "reading": "dźuh²",
      "explanationEN": "bait"
    },
    {
      "character": "𗶊",
      "reading": "ne²",
      "explanationEN": "younger sister"
    },
    {
      "character": "𗙻",
      "reading": "tśo¹",
      "explanationEN": "to indicate"
    },
    {
      "character": "𘃱",
      "reading": "dzwi̱w¹",
      "explanationEN": "shoulder"
    },
    {
      "character": "𘘖",
      "reading": "lih²",
      "explanationEN": "grace; kindness"
    },
    {
      "character": "𘔖",
      "reading": "ne²",
      "explanationEN": "chin"
    },
    {
      "character": "𘘵",
      "reading": "so̱ṃ¹",
      "explanationEN": "end; buttocks"
    },
    {
      "character": "𘙄",
      "reading": "γwae̱ṃ²",
      "explanationEN": "thin; feeble"
    },
    {
      "character": "𘚙",
      "reading": "pə̱h¹",
      "explanationEN": "smell of meat"
    },
    {
      "character": "𗉬",
      "reading": "gwe¹",
      "explanationEN": "to offer sacrifices to god or ancestors"
    },
    {
      "character": "𗚂",
      "reading": "so²",
      "explanationEN": "to be familiar with"
    },
    {
      "character": "𘈭",
      "reading": "γu̱²",
      "explanationEN": "god; deity; divinity"
    },
    {
      "character": "𗍠",
      "reading": "khiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗉵",
      "reading": "vi²",
      "explanationEN": "to know; to understand"
    },
    {
      "character": "𗉴",
      "reading": "tśhə²",
      "explanationEN": "lean meat"
    },
    {
      "character": "𗰴",
      "reading": "ġu̱¹",
      "explanationEN": "toil"
    },
    {
      "character": "𗉯",
      "reading": "qaa̱¹",
      "explanationEN": "pan"
    },
    {
      "character": "𘈰",
      "reading": "dẓae̱ṃ¹",
      "explanationEN": "to do harm; to damage; to impair"
    },
    {
      "character": "𗗷",
      "reading": "nni²",
      "explanationEN": "noise"
    },
    {
      "character": "𗶕",
      "reading": "yaṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘅄",
      "reading": "sa¹",
      "explanationEN": "to do"
    },
    {
      "character": "𗸫",
      "reading": "leh¹",
      "explanationEN": "to do"
    },
    {
      "character": "𗸳",
      "reading": "la̱ṃ¹",
      "explanationEN": "widowed; alone"
    },
    {
      "character": "𘞄",
      "reading": "nlə¹",
      "explanationEN": "flag; to raise in wind"
    },
    {
      "character": "𘝄",
      "reading": "rvwi̱r²",
      "explanationEN": "wing"
    },
    {
      "character": "𘔍",
      "reading": "yu¹",
      "explanationEN": "to present (a gift)"
    },
    {
      "character": "𘘀",
      "reading": "nśi¹",
      "explanationEN": "livestock; domestic animals"
    },
    {
      "character": "𗟧",
      "reading": "rir²",
      "explanationEN": "to gain; to acquire; to obtain"
    },
    {
      "character": "𗟰",
      "reading": "lhwi¹",
      "explanationEN": "to like the new and loathe the old"
    },
    {
      "character": "𗘚",
      "reading": "tshwu¹",
      "explanationEN": "dark green"
    },
    {
      "character": "𗘓",
      "reading": "hu¹",
      "explanationEN": "empty; unoccupied"
    },
    {
      "character": "𗸝",
      "reading": "γo̱ṃ¹",
      "explanationEN": "dizzy"
    },
    {
      "character": "𗸜",
      "reading": "qhwə̱¹",
      "explanationEN": "half"
    },
    {
      "character": "𗍇",
      "reading": "ẓuo¹",
      "explanationEN": "deep black"
    },
    {
      "character": "𗗲",
      "reading": "qhai̱h²",
      "explanationEN": "to butcher"
    },
    {
      "character": "𘄸",
      "reading": "rner²",
      "explanationEN": "to do"
    },
    {
      "character": "𗳞",
      "reading": "lha̱h¹",
      "explanationEN": "to beg"
    },
    {
      "character": "𗳧",
      "reading": "mai̱h¹",
      "explanationEN": "to make a concession; to yield; to give in"
    },
    {
      "character": "𘑵",
      "reading": "nthə¹",
      "explanationEN": "to revolve; to rotate; to spin"
    },
    {
      "character": "𘘶",
      "reading": "vo¹",
      "explanationEN": "not"
    },
    {
      "character": "𘈁",
      "reading": "ẓaə̱¹",
      "explanationEN": "wren"
    },
    {
      "character": "𗉗",
      "reading": "mmi̱²",
      "explanationEN": "to lie; to sleep"
    },
    {
      "character": "𘅤",
      "reading": "rar¹",
      "explanationEN": "to write"
    },
    {
      "character": "𘝈",
      "reading": "dźih²",
      "explanationEN": "demon; devil"
    },
    {
      "character": "𗘘",
      "reading": "rŋwə̱r²",
      "explanationEN": "colored silk"
    },
    {
      "character": "𘄢",
      "reading": "yaw¹",
      "explanationEN": "yes; okay"
    },
    {
      "character": "𘇤",
      "reading": "ŋge¹",
      "explanationEN": "to tease; to play"
    },
    {
      "character": "𗳟",
      "reading": "vwe̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘄷",
      "reading": "ma¹",
      "explanationEN": "stirrup"
    },
    {
      "character": "𘈬",
      "reading": "nde²",
      "explanationEN": "a skilled workman"
    },
    {
      "character": "𘔡",
      "reading": "ne²",
      "explanationEN": "colored silk"
    },
    {
      "character": "𘑶",
      "reading": "tse¹",
      "explanationEN": "he; it"
    },
    {
      "character": "𘘩",
      "reading": "kə²",
      "explanationEN": "an animal looks like a deer"
    },
    {
      "character": "𗶔",
      "reading": "baa̱²",
      "explanationEN": "hat; cap"
    },
    {
      "character": "𗟢",
      "reading": "gi²",
      "explanationEN": "to grant; to award"
    },
    {
      "character": "𘈱",
      "reading": "mme¹",
      "explanationEN": "bored; worried"
    },
    {
      "character": "𘙕",
      "reading": "kə²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𘙠",
      "reading": "qao̱ṃ¹",
      "explanationEN": "obstinate; stubborn"
    },
    {
      "character": "𘙤",
      "reading": "mə̱²",
      "explanationEN": "husband"
    },
    {
      "character": "𗌸",
      "reading": "ne¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗶃",
      "reading": "tśi²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘅇",
      "reading": "ti¹",
      "explanationEN": "PROHIB"
    },
    {
      "character": "𘴆",
      "reading": "qwe̱¹",
      "explanationEN": "respectful"
    },
    {
      "character": "𘅫",
      "reading": "tśu¹",
      "explanationEN": "to do; to work; to manage"
    },
    {
      "character": "𗳦",
      "reading": "qa̱¹",
      "explanationEN": "even; equal"
    },
    {
      "character": "𗳫",
      "reading": "lhih¹",
      "explanationEN": "to take; to marry"
    },
    {
      "character": "𘔋",
      "reading": "thwu²",
      "explanationEN": "to borrow money"
    },
    {
      "character": "𘞀",
      "reading": "na²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘔞",
      "reading": "ho̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘇾",
      "reading": "dźih²",
      "explanationEN": "daughter"
    },
    {
      "character": "𘈂",
      "reading": "lu²",
      "explanationEN": "thread"
    },
    {
      "character": "𘙅",
      "reading": "kuh¹",
      "explanationEN": "belt; girdle"
    },
    {
      "character": "𘞋",
      "reading": "tseṃh¹",
      "explanationEN": "full; packed"
    },
    {
      "character": "𘗯",
      "reading": "nllo̱r¹",
      "explanationEN": "false; fake"
    },
    {
      "character": "𘈨",
      "reading": "rnu̱r¹",
      "explanationEN": "to indicate; to guide"
    },
    {
      "character": "𗌺",
      "reading": "vwi̱²",
      "explanationEN": "servant"
    },
    {
      "character": "𗘒",
      "reading": "qwe̱¹",
      "explanationEN": "hoof"
    },
    {
      "character": "𗉡",
      "reading": "qai̱w²",
      "explanationEN": "uneven; inconsistent"
    },
    {
      "character": "𗉢",
      "reading": "śwa¹",
      "explanationEN": "hand"
    },
    {
      "character": "𗉳",
      "reading": "qwa̱h²",
      "explanationEN": "hoe"
    },
    {
      "character": "𗎝",
      "reading": "pha¹",
      "explanationEN": "wallet; pocketbook"
    },
    {
      "character": "𗎞",
      "reading": "mmə̱¹",
      "explanationEN": "blindness"
    },
    {
      "character": "𗎢",
      "reading": "theṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗙿",
      "reading": "yu²",
      "explanationEN": "to guard; to defend"
    },
    {
      "character": "𗶈",
      "reading": "di̱h¹",
      "explanationEN": "female"
    },
    {
      "character": "𘅑",
      "reading": "bo̱ṃ²",
      "explanationEN": "abashed; ashamed"
    },
    {
      "character": "𘄾",
      "reading": "rnoṃr²",
      "explanationEN": "to move; to migrate"
    },
    {
      "character": "𘈘",
      "reading": "śwə¹",
      "explanationEN": "days; times"
    },
    {
      "character": "𘘼",
      "reading": "lhwi̱²",
      "explanationEN": "slow; lazy"
    },
    {
      "character": "𘙊",
      "reading": "lwi̱h²",
      "explanationEN": "slow; lazy"
    },
    {
      "character": "𘒹",
      "reading": "lhu²",
      "explanationEN": "to increase; to add"
    },
    {
      "character": "𘝊",
      "reading": "rmi̱r²",
      "explanationEN": "to puzzle; to confuse"
    },
    {
      "character": "𗘑",
      "reading": "bə̱²",
      "explanationEN": "dark green"
    },
    {
      "character": "𗘖",
      "reading": "hau̱²",
      "explanationEN": "hoof"
    },
    {
      "character": "𗉟",
      "reading": "ya¹",
      "explanationEN": "cat"
    },
    {
      "character": "𗍗",
      "reading": "vwi̱²",
      "explanationEN": "black"
    },
    {
      "character": "𗍟",
      "reading": "də²",
      "explanationEN": "to defend"
    },
    {
      "character": "𗟨",
      "reading": "lhwi¹",
      "explanationEN": "to take; to seize; to draw"
    },
    {
      "character": "𘄡",
      "reading": "seh²",
      "explanationEN": "wisdom"
    },
    {
      "character": "𘄦",
      "reading": "teṃ¹",
      "explanationEN": "bright; intelligent"
    },
    {
      "character": "𘙖",
      "reading": "kə¹",
      "explanationEN": "vat; jar; crock"
    },
    {
      "character": "𘔠",
      "reading": "ne¹",
      "explanationEN": "servant"
    },
    {
      "character": "𗍢",
      "reading": "po̱¹",
      "explanationEN": "spade"
    },
    {
      "character": "𗳯",
      "reading": "γu̱²",
      "explanationEN": "to wrestle; to fight"
    },
    {
      "character": "𗉧",
      "reading": "tsheṃh¹",
      "explanationEN": "door"
    },
    {
      "character": "𗙼",
      "reading": "yu²",
      "explanationEN": "ANTE: antessive case"
    },
    {
      "character": "𗸷",
      "reading": "lhweh²",
      "explanationEN": "to frighten; to scare"
    },
    {
      "character": "𗡤",
      "reading": "mma¹",
      "explanationEN": "to seek; to look for"
    },
    {
      "character": "𗶉",
      "reading": "rzər¹",
      "explanationEN": "beautiful; splendid"
    },
    {
      "character": "𗶋",
      "reading": "rtsir¹",
      "explanationEN": "wife"
    },
    {
      "character": "𗉨",
      "reading": "rtśər²",
      "explanationEN": "five"
    },
    {
      "character": "𘆈",
      "reading": "lu̱h¹",
      "explanationEN": "man"
    },
    {
      "character": "𗱉",
      "reading": "lhe²",
      "explanationEN": "lack; fault"
    },
    {
      "character": "𗸀",
      "reading": "γu̱²",
      "explanationEN": "appointment"
    },
    {
      "character": "𘇨",
      "reading": "ẓwai̱¹",
      "explanationEN": "shining white"
    },
    {
      "character": "𗰼",
      "reading": "γo̱¹",
      "explanationEN": "to arrange for"
    },
    {
      "character": "𘞇",
      "reading": "bih¹",
      "explanationEN": "to thin down"
    },
    {
      "character": "𗷱",
      "reading": "dẓae̱ṃ¹",
      "explanationEN": "benefaction; beneficence"
    },
    {
      "character": "𘈏",
      "reading": "ra̱r²",
      "explanationEN": "coarse; rough; rude"
    },
    {
      "character": "𗳸",
      "reading": "tha²",
      "explanationEN": "chess playing"
    },
    {
      "character": "𗰻",
      "reading": "lhi²",
      "explanationEN": "to fear; to dread"
    },
    {
      "character": "𗱀",
      "reading": "γo̱¹",
      "explanationEN": "host; master"
    },
    {
      "character": "𗰿",
      "reading": "ywi²",
      "explanationEN": "to barter; to exchange"
    },
    {
      "character": "𗳷",
      "reading": "tṣhau̱h¹",
      "explanationEN": "to lure"
    },
    {
      "character": "𗳹",
      "reading": "tṣhau̱h¹",
      "explanationEN": "to lure"
    },
    {
      "character": "𘒸",
      "reading": "fwə¹",
      "explanationEN": "treasure"
    },
    {
      "character": "𗱌",
      "reading": "thu̱²",
      "explanationEN": "to free oneself from…; to take off"
    },
    {
      "character": "𗸁",
      "reading": "lwo̱²",
      "explanationEN": "firm; strong"
    },
    {
      "character": "𘈒",
      "reading": "dze²",
      "explanationEN": "other"
    },
    {
      "character": "𘜊",
      "reading": "rphar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗷿",
      "reading": "ma¹",
      "explanationEN": "grey"
    },
    {
      "character": "𗸄",
      "reading": "ni?",
      "explanationEN": "timid; weak"
    },
    {
      "character": "𘆋",
      "reading": "γwo̱ṃh¹",
      "explanationEN": "thick; bulky"
    },
    {
      "character": "𘑰",
      "reading": "rdwi̱wr²",
      "explanationEN": "silent"
    },
    {
      "character": "𗸉",
      "reading": "dẓae̱ṃ¹",
      "explanationEN": "horse shoulder"
    },
    {
      "character": "𘘎",
      "reading": "rtswə̱r¹",
      "explanationEN": "to curse; to swear"
    },
    {
      "character": "𗖝",
      "reading": "ne²",
      "explanationEN": "few; a little"
    },
    {
      "character": "𗖢",
      "reading": "nne̱²",
      "explanationEN": "to indicate; to instruct"
    },
    {
      "character": "𗖺",
      "reading": "ku¹",
      "explanationEN": "eardrop"
    },
    {
      "character": "𗗊",
      "reading": "ku¹",
      "explanationEN": "sprouts"
    },
    {
      "character": "𗖗",
      "reading": "si̱ṃ²",
      "explanationEN": "to blow (one’s nose); to groan; to snort"
    },
    {
      "character": "𗗈",
      "reading": "do̱¹",
      "explanationEN": "to read"
    },
    {
      "character": "𘜏",
      "reading": "rnar¹",
      "explanationEN": "to check; to proofread"
    },
    {
      "character": "𘙷",
      "reading": "lu̱²",
      "explanationEN": "to cut; to reduce"
    },
    {
      "character": "𗕽",
      "reading": "da̱h²",
      "explanationEN": "to know; to realize; to understand"
    },
    {
      "character": "𗖇",
      "reading": "qhaa̱²",
      "explanationEN": "firm"
    },
    {
      "character": "𗖆",
      "reading": "ŋġae̱¹",
      "explanationEN": "living in peace"
    },
    {
      "character": "𗖡",
      "reading": "tah¹",
      "explanationEN": "crime; guilt"
    },
    {
      "character": "𗖭",
      "reading": "nnu²",
      "explanationEN": "happy; joyous"
    },
    {
      "character": "𗖸",
      "reading": "ŋŋwu̱¹",
      "explanationEN": "to say; to eulogize"
    },
    {
      "character": "𘇳",
      "reading": "mma¹",
      "explanationEN": "the edge of a knife"
    },
    {
      "character": "𗖘",
      "reading": "nwo²",
      "explanationEN": "word"
    },
    {
      "character": "𗉀",
      "reading": "tshwa¹",
      "explanationEN": "to roast; to warm up"
    },
    {
      "character": "𗉃",
      "reading": "teṃ¹",
      "explanationEN": "lamp"
    },
    {
      "character": "𗖣",
      "reading": "rźai̱r¹",
      "explanationEN": "to swear; to curse"
    },
    {
      "character": "𗖞",
      "reading": "tśeh¹",
      "explanationEN": "to flatter; to toady"
    },
    {
      "character": "𗈿",
      "reading": "tsha¹",
      "explanationEN": "to heat up; to burn"
    },
    {
      "character": "𗖻",
      "reading": "puh¹",
      "explanationEN": "respect"
    },
    {
      "character": "𗖤",
      "reading": "ntu̱¹",
      "explanationEN": "to look for"
    },
    {
      "character": "𗴇",
      "reading": "lweh²",
      "explanationEN": "mountain"
    },
    {
      "character": "𘞒",
      "reading": "nśə¹",
      "explanationEN": "doubt"
    },
    {
      "character": "𗹘",
      "reading": "do̱ṃ¹",
      "explanationEN": "to watch; to survey; to observe"
    },
    {
      "character": "𘝸",
      "reading": "qhaa̱²",
      "explanationEN": "gorgeous"
    },
    {
      "character": "𗹑",
      "reading": "tśeṃ¹",
      "explanationEN": "correct; upright"
    },
    {
      "character": "𘈴",
      "reading": "ga²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗴅",
      "reading": "qai̱²",
      "explanationEN": "dangerous"
    },
    {
      "character": "𗳆",
      "reading": "lhə̱²",
      "explanationEN": "to lose; to die; to fail"
    },
    {
      "character": "𗳌",
      "reading": "teh¹",
      "explanationEN": "that; those; it"
    },
    {
      "character": "𘞑",
      "reading": "kiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗳎",
      "reading": "si¹",
      "explanationEN": "to examine; to look into"
    },
    {
      "character": "𗷢",
      "reading": "tśuo²",
      "explanationEN": "to feed; to raise; to keep"
    },
    {
      "character": "𗰨",
      "reading": "yiw²",
      "explanationEN": "an old-fashioned long narrow table or desk"
    },
    {
      "character": "𗙝",
      "reading": "kha̱h²",
      "explanationEN": "(usually used in the negative) sound; noise"
    },
    {
      "character": "𘘞",
      "reading": "qa̱¹",
      "explanationEN": "month"
    },
    {
      "character": "𗟸",
      "reading": "qa̱¹",
      "explanationEN": "palate"
    },
    {
      "character": "𘚅",
      "reading": "lha̱ṃ¹",
      "explanationEN": "to shine"
    },
    {
      "character": "𗙁",
      "reading": "mə̱²",
      "explanationEN": "sound; voice"
    },
    {
      "character": "𘄪",
      "reading": "rer²",
      "explanationEN": "to hit; to strike"
    },
    {
      "character": "𘗧",
      "reading": "zwih¹",
      "explanationEN": "to marry"
    },
    {
      "character": "𘜙",
      "reading": "tśuh²",
      "explanationEN": "can; to dare"
    },
    {
      "character": "𘚉",
      "reading": "yoṃ²",
      "explanationEN": "to weave; to knit"
    },
    {
      "character": "𘙜",
      "reading": "nə̱h¹",
      "explanationEN": "scabies"
    },
    {
      "character": "𗟮",
      "reading": "rker²",
      "explanationEN": "to rob; to steal"
    },
    {
      "character": "𘘗",
      "reading": "llih²",
      "explanationEN": "wide; broad"
    },
    {
      "character": "𗳭",
      "reading": "ryer²",
      "explanationEN": "to execute; to kill"
    },
    {
      "character": "𘔝",
      "reading": "ne²",
      "explanationEN": "to hide"
    },
    {
      "character": "𘙃",
      "reading": "yə¹",
      "explanationEN": "level; fat"
    },
    {
      "character": "𘝉",
      "reading": "???",
      "explanationEN": "bird"
    },
    {
      "character": "𗉖",
      "reading": "tsheṃ¹",
      "explanationEN": "small; thin"
    },
    {
      "character": "𗉞",
      "reading": "γu̱¹",
      "explanationEN": "to float; to drift"
    },
    {
      "character": "𘈪",
      "reading": "ta¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶇",
      "reading": "di̱h¹",
      "explanationEN": "(in Chinese thought) yin"
    },
    {
      "character": "𘅅",
      "reading": "duh¹",
      "explanationEN": "leg"
    },
    {
      "character": "𘙂",
      "reading": "bih¹",
      "explanationEN": "low; inferior"
    },
    {
      "character": "𗵶",
      "reading": "ŋhe²",
      "explanationEN": "broad; wide"
    },
    {
      "character": "𗟥",
      "reading": "teh¹",
      "explanationEN": "to reduce"
    },
    {
      "character": "𗌷",
      "reading": "po̱¹",
      "explanationEN": "fort; fortress"
    },
    {
      "character": "𗗱",
      "reading": "dẓaə̱¹",
      "explanationEN": "fox"
    },
    {
      "character": "𗡱",
      "reading": "se¹",
      "explanationEN": "thin; tiny"
    },
    {
      "character": "𗶂",
      "reading": "tsi²",
      "explanationEN": "cotton"
    },
    {
      "character": "𗸚",
      "reading": "ŋġa̱¹",
      "explanationEN": "thin; emaciated"
    },
    {
      "character": "𘚊",
      "reading": "yoṃ²",
      "explanationEN": "afterbirth"
    },
    {
      "character": "𗟡",
      "reading": "lwu̱²",
      "explanationEN": "to sell; to loan"
    },
    {
      "character": "𘞶",
      "reading": "mphu̱²",
      "explanationEN": "luxuriant; flourishing"
    },
    {
      "character": "𗡥",
      "reading": "ryər²",
      "explanationEN": "whip"
    },
    {
      "character": "𗱋",
      "reading": "thəh²",
      "explanationEN": "to roll up; volume (of books)"
    },
    {
      "character": "𘈔",
      "reading": "bi²",
      "explanationEN": "to hide (oneself); to avoid"
    },
    {
      "character": "𘆌",
      "reading": "tsheṃh¹",
      "explanationEN": "to pare"
    },
    {
      "character": "𘇶",
      "reading": "vwi̱¹",
      "explanationEN": "millet"
    },
    {
      "character": "𘇸",
      "reading": "tśu¹",
      "explanationEN": "shaman; sorcerer"
    },
    {
      "character": "𗬌",
      "reading": "zi̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘉟",
      "reading": "puh¹",
      "explanationEN": "to compel"
    },
    {
      "character": "𗃐",
      "reading": "???",
      "explanationEN": "hunchback"
    },
    {
      "character": "𗢨",
      "reading": "dzwo²",
      "explanationEN": "human being; person"
    },
    {
      "character": "𘊏",
      "reading": "ke¹",
      "explanationEN": "insect; worm"
    },
    {
      "character": "𘟥",
      "reading": "bə̱²",
      "explanationEN": "insect; maggot"
    },
    {
      "character": "𗬍",
      "reading": "gu²",
      "explanationEN": "silk"
    },
    {
      "character": "𗹭",
      "reading": "be²",
      "explanationEN": "tall"
    },
    {
      "character": "𗎰",
      "reading": "tśəh¹",
      "explanationEN": "to move; to migrate"
    },
    {
      "character": "𗎭",
      "reading": "mmi¹",
      "explanationEN": "house; residence"
    },
    {
      "character": "𗂍",
      "reading": "nlhi¹",
      "explanationEN": "to pull out; to pick; to take"
    },
    {
      "character": "𗃆",
      "reading": "ryar¹",
      "explanationEN": "daughter-in-law"
    },
    {
      "character": "𗀿",
      "reading": "li¹",
      "explanationEN": "tired"
    },
    {
      "character": "𗆳",
      "reading": "nye¹",
      "explanationEN": "calm"
    },
    {
      "character": "𗂭",
      "reading": "pha̱¹",
      "explanationEN": "to follow"
    },
    {
      "character": "𗂮",
      "reading": "rkər¹",
      "explanationEN": "to fly"
    },
    {
      "character": "𗅥",
      "reading": "tu²",
      "explanationEN": "to beat"
    },
    {
      "character": "𗂜",
      "reading": "tshi̱²",
      "explanationEN": "round as a ball; satisfactory"
    },
    {
      "character": "𗆒",
      "reading": "lo̱ṃ²",
      "explanationEN": "slack"
    },
    {
      "character": "𗆬",
      "reading": "rvwi̱r¹",
      "explanationEN": "impressive and dignified manners"
    },
    {
      "character": "𗆟",
      "reading": "mi¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗅱",
      "reading": "teṃh²",
      "explanationEN": "map; picture"
    },
    {
      "character": "𗂚",
      "reading": "ye²",
      "explanationEN": "banquet"
    },
    {
      "character": "𗅉",
      "reading": "nuo¹",
      "explanationEN": "ABE: abessive; POSTE: postessive"
    },
    {
      "character": "𗅧",
      "reading": "gu²",
      "explanationEN": "tendon; muscle"
    },
    {
      "character": "𗆓",
      "reading": "me²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗅠",
      "reading": "rġu̱r¹",
      "explanationEN": "ox"
    },
    {
      "character": "𗅲",
      "reading": "teṃh²",
      "explanationEN": "ceremony; rite; manner"
    },
    {
      "character": "𗆅",
      "reading": "dźe²",
      "explanationEN": "tail; end"
    },
    {
      "character": "𗆲",
      "reading": "dzi̱¹",
      "explanationEN": "succession"
    },
    {
      "character": "𗆤",
      "reading": "dźih²",
      "explanationEN": "true; real"
    },
    {
      "character": "𗅘",
      "reading": "kha̱ṃ¹",
      "explanationEN": "看坎堪"
    },
    {
      "character": "𗆀",
      "reading": "γu̱²",
      "explanationEN": "salt"
    },
    {
      "character": "𗆘",
      "reading": "qhə̱h¹",
      "explanationEN": "to contract"
    },
    {
      "character": "𗆥",
      "reading": "ŋkhwa̱²",
      "explanationEN": "decrepit and behind the times"
    },
    {
      "character": "𗅋",
      "reading": "mi¹",
      "explanationEN": "NEG"
    },
    {
      "character": "𗁈",
      "reading": "twa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗁝",
      "reading": "giw¹",
      "explanationEN": "respectful"
    },
    {
      "character": "𗁸",
      "reading": "si̱²",
      "explanationEN": "to tighten"
    },
    {
      "character": "𗁷",
      "reading": "qhaa̱¹",
      "explanationEN": "to shoot; to fire"
    },
    {
      "character": "𗂄",
      "reading": "γwa̱¹",
      "explanationEN": "treasure"
    },
    {
      "character": "𗂵",
      "reading": "mphaa̱²",
      "explanationEN": "to divide; to separate"
    },
    {
      "character": "𗁍",
      "reading": "bu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗂥",
      "reading": "ne²",
      "explanationEN": "before"
    },
    {
      "character": "𗂊",
      "reading": "dźwa¹",
      "explanationEN": "to jump; to leap"
    },
    {
      "character": "𗃃",
      "reading": "rler¹",
      "explanationEN": "to rub; to knead"
    },
    {
      "character": "𗁧",
      "reading": "ti̱w¹",
      "explanationEN": "to become thin; to thin down"
    },
    {
      "character": "𗂿",
      "reading": "tu¹",
      "explanationEN": "to light a fire"
    },
    {
      "character": "𗹮",
      "reading": "də¹",
      "explanationEN": "shoulder"
    },
    {
      "character": "𗹤",
      "reading": "ẓae̱¹",
      "explanationEN": "to win"
    },
    {
      "character": "𗃀",
      "reading": "dzwə¹",
      "explanationEN": "to rub; to knead"
    },
    {
      "character": "𗺀",
      "reading": "li̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘉂",
      "reading": "dzeṃ¹",
      "explanationEN": "moat; chasm; gully"
    },
    {
      "character": "𗺁",
      "reading": "hae̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗎦",
      "reading": "qha̱²",
      "explanationEN": "stutter"
    },
    {
      "character": "𗎬",
      "reading": "dźə²",
      "explanationEN": "anus"
    },
    {
      "character": "𗀰",
      "reading": "lhəh¹",
      "explanationEN": "great waves; billows"
    },
    {
      "character": "𗁐",
      "reading": "moh²",
      "explanationEN": "exhausted; dried up"
    },
    {
      "character": "𗄭",
      "reading": "dzəh²",
      "explanationEN": "to gather"
    },
    {
      "character": "𗄸",
      "reading": "tśha²",
      "explanationEN": "impressive and dignified manners"
    },
    {
      "character": "𗅔",
      "reading": "naw²",
      "explanationEN": "be not"
    },
    {
      "character": "𗅖",
      "reading": "zi¹",
      "explanationEN": "alms"
    },
    {
      "character": "𗆞",
      "reading": "me²",
      "explanationEN": "to look into the distance from a high place"
    },
    {
      "character": "𗆫",
      "reading": "rlər²",
      "explanationEN": "to think of; to long for"
    },
    {
      "character": "𗄹",
      "reading": "pe¹",
      "explanationEN": "deep green"
    },
    {
      "character": "𗄩",
      "reading": "bi̱h¹",
      "explanationEN": "to pass through"
    },
    {
      "character": "𗅕",
      "reading": "nli̱²",
      "explanationEN": "dark (of complexion)"
    },
    {
      "character": "𗅚",
      "reading": "beh¹",
      "explanationEN": "to cast sidelong glances"
    },
    {
      "character": "𗆛",
      "reading": "sa̱²",
      "explanationEN": "to tie; to link"
    },
    {
      "character": "𗀲",
      "reading": "tśhiw²",
      "explanationEN": "to pass through; to invade"
    },
    {
      "character": "𗁯",
      "reading": "qhaə̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗂟",
      "reading": "rvar¹",
      "explanationEN": "to dig; to collapse"
    },
    {
      "character": "𗁭",
      "reading": "dźwow¹",
      "explanationEN": "to drill; to bore"
    },
    {
      "character": "𗁶",
      "reading": "mphe¹",
      "explanationEN": "even; equal"
    },
    {
      "character": "𗹝",
      "reading": "ne¹",
      "explanationEN": "relative"
    },
    {
      "character": "𗹴",
      "reading": "mmə̱¹",
      "explanationEN": "devil; demon"
    },
    {
      "character": "𗹡",
      "reading": "rkir¹",
      "explanationEN": "brave; violent"
    },
    {
      "character": "𗁕",
      "reading": "ta̱h¹",
      "explanationEN": "to marry a wife; to take"
    },
    {
      "character": "𗀱",
      "reading": "phao̱²",
      "explanationEN": "to sing; to chant"
    },
    {
      "character": "𗅇",
      "reading": "teṃh²",
      "explanationEN": "mould"
    },
    {
      "character": "𗅊",
      "reading": "lhai̱h²",
      "explanationEN": "smooth; glossy"
    },
    {
      "character": "𗅞",
      "reading": "lhə̱?",
      "explanationEN": "smooth"
    },
    {
      "character": "𗄬",
      "reading": "dzeṃ¹",
      "explanationEN": "relation by marriage"
    },
    {
      "character": "𗂞",
      "reading": "mae̱¹",
      "explanationEN": "to call; to greet"
    },
    {
      "character": "𗅸",
      "reading": "qwə̱²",
      "explanationEN": "to roar; to howl"
    },
    {
      "character": "𗆚",
      "reading": "ndzu¹",
      "explanationEN": "to shake; to sway"
    },
    {
      "character": "𗅬",
      "reading": "dziw²",
      "explanationEN": "abortion"
    },
    {
      "character": "𗂗",
      "reading": "qhaə̱²",
      "explanationEN": "to drive out; to expel"
    },
    {
      "character": "𗂤",
      "reading": "baa̱²",
      "explanationEN": "to crawl; to creep"
    },
    {
      "character": "𗁒",
      "reading": "rer²",
      "explanationEN": "to distend"
    },
    {
      "character": "𗁨",
      "reading": "mbi²",
      "explanationEN": "the common people"
    },
    {
      "character": "𗂁",
      "reading": "qhaə̱²",
      "explanationEN": "to mate (with); to copulate"
    },
    {
      "character": "𗁔",
      "reading": "ta̱h¹",
      "explanationEN": "to marry a wife; to take"
    },
    {
      "character": "𗁼",
      "reading": "be²",
      "explanationEN": "gold"
    },
    {
      "character": "𗹧",
      "reading": "mə̱¹",
      "explanationEN": "supernatural being"
    },
    {
      "character": "𗺂",
      "reading": "vwe̱²",
      "explanationEN": "to fly; to hover"
    },
    {
      "character": "𘉁",
      "reading": "mmi¹",
      "explanationEN": "crown"
    },
    {
      "character": "𗹯",
      "reading": "ror²",
      "explanationEN": "to exorcise"
    },
    {
      "character": "𗅡",
      "reading": "qhwaə̱¹",
      "explanationEN": "horn"
    },
    {
      "character": "𗁪",
      "reading": "thi̱w²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗂻",
      "reading": "dwe̱¹",
      "explanationEN": "hernia"
    },
    {
      "character": "𗁇",
      "reading": "lə̱²",
      "explanationEN": "foolish; stupid"
    },
    {
      "character": "𗄮",
      "reading": "ga¹",
      "explanationEN": "stutter; stammer"
    },
    {
      "character": "𗹢",
      "reading": "doh²",
      "explanationEN": "to build.ʙ; to cure.ʙ"
    },
    {
      "character": "𗉺",
      "reading": "ẓaa̱¹",
      "explanationEN": "sand"
    },
    {
      "character": "𗉾",
      "reading": "rẓaa̱r¹",
      "explanationEN": "to mix; to stir"
    },
    {
      "character": "𗋙",
      "reading": "və²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗊧",
      "reading": "tśhwaṃ¹",
      "explanationEN": "river; plain"
    },
    {
      "character": "𗊸",
      "reading": "no̱²",
      "explanationEN": "in the past"
    },
    {
      "character": "𗋠",
      "reading": "ndźa²",
      "explanationEN": "glutinous (rice)"
    },
    {
      "character": "𗋢",
      "reading": "qwə̱²",
      "explanationEN": "rope; cord"
    },
    {
      "character": "𗊾",
      "reading": "rkər²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗏂",
      "reading": "mi̱²",
      "explanationEN": "one of the eight diagrams"
    },
    {
      "character": "𗋁",
      "reading": "de²",
      "explanationEN": "to drink"
    },
    {
      "character": "𗌌",
      "reading": "naw¹",
      "explanationEN": "deep"
    },
    {
      "character": "𗌦",
      "reading": "pho̱¹",
      "explanationEN": "lake"
    },
    {
      "character": "𗏁",
      "reading": "ŋwə̱¹",
      "explanationEN": "five"
    },
    {
      "character": "𗏄",
      "reading": "ŋwə̱¹",
      "explanationEN": "urn; earthen jar; bottle"
    },
    {
      "character": "𗢟",
      "reading": "tświ²",
      "explanationEN": "disaster"
    },
    {
      "character": "𗢠",
      "reading": "mə̱²",
      "explanationEN": "boring"
    },
    {
      "character": "𗢣",
      "reading": "lhi²",
      "explanationEN": "to die"
    },
    {
      "character": "𗊯",
      "reading": "kha²",
      "explanationEN": "well"
    },
    {
      "character": "𗋋",
      "reading": "rtṣao̱r¹",
      "explanationEN": "mud"
    },
    {
      "character": "𗌧",
      "reading": "ryur²",
      "explanationEN": "upbringing"
    },
    {
      "character": "𗌝",
      "reading": "se²",
      "explanationEN": "tortoise"
    },
    {
      "character": "𘉭",
      "reading": "ho̱ṃ¹",
      "explanationEN": "mange"
    },
    {
      "character": "𗌘",
      "reading": "nwə¹",
      "explanationEN": "butter"
    },
    {
      "character": "𘉴",
      "reading": "dzi̱¹",
      "explanationEN": "waste"
    },
    {
      "character": "𗋯",
      "reading": "rŋwə̱r²",
      "explanationEN": "moisture"
    },
    {
      "character": "𗌃",
      "reading": "tu̱ṃ¹",
      "explanationEN": "winter"
    },
    {
      "character": "𗋉",
      "reading": "ndźa²",
      "explanationEN": "marsh; hog"
    },
    {
      "character": "𗌡",
      "reading": "tha̱ṃ¹",
      "explanationEN": "beach; sands"
    },
    {
      "character": "𘊂",
      "reading": "naw²",
      "explanationEN": "dung; excrement"
    },
    {
      "character": "𘊀",
      "reading": "źəh¹",
      "explanationEN": "to envy"
    },
    {
      "character": "𗇆",
      "reading": "rẓaa̱r¹",
      "explanationEN": "impressive and dignified manners"
    },
    {
      "character": "𗊦",
      "reading": "ndə²",
      "explanationEN": "to wash"
    },
    {
      "character": "𗋕",
      "reading": "tha¹",
      "explanationEN": "other; else"
    },
    {
      "character": "𗊿",
      "reading": "ẓai̱ṃ¹",
      "explanationEN": "to ooze; to seep"
    },
    {
      "character": "𘓤",
      "reading": "vwa̱h²",
      "explanationEN": "pawnshop; to gurantee; to inspect; to examine"
    },
    {
      "character": "𗊆",
      "reading": "nao̱h²",
      "explanationEN": "to rub"
    },
    {
      "character": "𗊇",
      "reading": "sa̱²",
      "explanationEN": "dried up; thin"
    },
    {
      "character": "𗊗",
      "reading": "lhe²",
      "explanationEN": "soft; lithe"
    },
    {
      "character": "𗋗",
      "reading": "swi¹",
      "explanationEN": "exhaustion; poverty"
    },
    {
      "character": "𗢓",
      "reading": "ŋah¹",
      "explanationEN": "stammer; stutter"
    },
    {
      "character": "𗺑",
      "reading": "mba¹",
      "explanationEN": "limit; end"
    },
    {
      "character": "𗎼",
      "reading": "swi̱w¹",
      "explanationEN": "bright; brilliant; light"
    },
    {
      "character": "𗊪",
      "reading": "llo̱ṃ²",
      "explanationEN": "country; territory; world"
    },
    {
      "character": "𗉹",
      "reading": "bu¹",
      "explanationEN": "to mix; to blend"
    },
    {
      "character": "𗉽",
      "reading": "sə̱²",
      "explanationEN": "clean; spotless"
    },
    {
      "character": "𗊕",
      "reading": "ẓaə̱¹",
      "explanationEN": "one of"
    },
    {
      "character": "𘉵",
      "reading": "rer²",
      "explanationEN": "sorrow"
    },
    {
      "character": "𗋎",
      "reading": "rtṣhaə̱r¹",
      "explanationEN": "to bustle"
    },
    {
      "character": "𘉫",
      "reading": "gih¹",
      "explanationEN": "to groan; to moan"
    },
    {
      "character": "𘉬",
      "reading": "ra̱r²",
      "explanationEN": "to curse; to swear"
    },
    {
      "character": "𘉯",
      "reading": "rtsi̱r¹",
      "explanationEN": "excrement; dung"
    },
    {
      "character": "𘊊",
      "reading": "si̱w¹",
      "explanationEN": "wives of brothers; sister-in-law"
    },
    {
      "character": "𗬗",
      "reading": "vwi̱²",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗊫",
      "reading": "nnaa̱²",
      "explanationEN": "ice"
    },
    {
      "character": "𗊃",
      "reading": "rmu̱r¹",
      "explanationEN": "wine"
    },
    {
      "character": "𗋖",
      "reading": "qaa̱²",
      "explanationEN": "duck"
    },
    {
      "character": "𘚾",
      "reading": "ndə̱¹",
      "explanationEN": "to hasten; to speed"
    },
    {
      "character": "𗉿",
      "reading": "ror²",
      "explanationEN": "saliva; spittle"
    },
    {
      "character": "𗊖",
      "reading": "γo̱²",
      "explanationEN": "wine"
    },
    {
      "character": "𘈇",
      "reading": "ra̱r¹",
      "explanationEN": "old"
    },
    {
      "character": "𘈈",
      "reading": "mmi¹",
      "explanationEN": "to hand out; to bestow"
    },
    {
      "character": "𗢘",
      "reading": "swuh²",
      "explanationEN": "to live; to revive"
    },
    {
      "character": "𗌅",
      "reading": "saṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗌨",
      "reading": "dźwoṃ¹",
      "explanationEN": "bird"
    },
    {
      "character": "𗢔",
      "reading": "rir²",
      "explanationEN": "to die"
    },
    {
      "character": "𗏆",
      "reading": "hwaa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗋘",
      "reading": "rqhwa̱r²",
      "explanationEN": "boots"
    },
    {
      "character": "𗊨",
      "reading": "tə̱h¹",
      "explanationEN": "dirt; filth"
    },
    {
      "character": "𘉮",
      "reading": "phe¹",
      "explanationEN": "to hate; grieved; sorrowful"
    },
    {
      "character": "𘉠",
      "reading": "tshih¹",
      "explanationEN": "impoverished"
    },
    {
      "character": "𗢧",
      "reading": "rmi̱r²",
      "explanationEN": "to be frightened"
    },
    {
      "character": "𗋺",
      "reading": "ŋqwai̱¹",
      "explanationEN": "to irrigate; to pour"
    },
    {
      "character": "𘉳",
      "reading": "lhih²",
      "explanationEN": "excrement; dung"
    },
    {
      "character": "𘉶",
      "reading": "rtsər¹",
      "explanationEN": "stammer; stutter"
    },
    {
      "character": "𗐄",
      "reading": "pae̱ṃh²",
      "explanationEN": "hair"
    },
    {
      "character": "𗬋",
      "reading": "γwe̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗢬",
      "reading": "dziw¹",
      "explanationEN": "to amass; to store up; to accumulate"
    },
    {
      "character": "𗢵",
      "reading": "rvwo̱r¹",
      "explanationEN": "to raise; to happen"
    },
    {
      "character": "𗣊",
      "reading": "mi²",
      "explanationEN": "I; you"
    },
    {
      "character": "𗣚",
      "reading": "no̱²",
      "explanationEN": "perhaps; maybe; or"
    },
    {
      "character": "𗩿",
      "reading": "si²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼱",
      "reading": "dziw¹",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗼳",
      "reading": "rvwa̱r²",
      "explanationEN": "dust; dirt"
    },
    {
      "character": "𗾒",
      "reading": "no̱²",
      "explanationEN": "cuckoo"
    },
    {
      "character": "𘊑",
      "reading": "no̱²",
      "explanationEN": "mouse; rat"
    },
    {
      "character": "𗏛",
      "reading": "vwi̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣠",
      "reading": "deh¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣛",
      "reading": "qi̱w¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗤉",
      "reading": "ŋa̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨺",
      "reading": "lleh²",
      "explanationEN": "empress dowager"
    },
    {
      "character": "𗼸",
      "reading": "lwih²",
      "explanationEN": "fort; fortress"
    },
    {
      "character": "𗪃",
      "reading": "thu̱¹",
      "explanationEN": "to draw (a bow)"
    },
    {
      "character": "𗾓",
      "reading": "lə¹",
      "explanationEN": "noon; midday"
    },
    {
      "character": "𗎻",
      "reading": "qo̱ṃ¹",
      "explanationEN": "to collapse"
    },
    {
      "character": "𗏜",
      "reading": "pae̱h¹",
      "explanationEN": "belly; abdomen; stomach"
    },
    {
      "character": "𗤄",
      "reading": "ryər¹",
      "explanationEN": "to ask.ᴀ"
    },
    {
      "character": "𗦣",
      "reading": "nwi¹",
      "explanationEN": "to surpass; to be able to"
    },
    {
      "character": "𗦪",
      "reading": "thəh¹",
      "explanationEN": "to roll up"
    },
    {
      "character": "𗽷",
      "reading": "ryawr²",
      "explanationEN": "room; to stay"
    },
    {
      "character": "𗾝",
      "reading": "nźiw¹",
      "explanationEN": "to hang"
    },
    {
      "character": "𗾮",
      "reading": "zəh¹",
      "explanationEN": "when"
    },
    {
      "character": "𗣺",
      "reading": "ra̱r²",
      "explanationEN": "snake; scorpion"
    },
    {
      "character": "𗣽",
      "reading": "li²",
      "explanationEN": "to love"
    },
    {
      "character": "𗦇",
      "reading": "lli̱w²",
      "explanationEN": "thing, matter; NMLZ: nomilizer means \"thing, matter\""
    },
    {
      "character": "𗩾",
      "reading": "zi²",
      "explanationEN": "extremely"
    },
    {
      "character": "𗨹",
      "reading": "γə̱h¹",
      "explanationEN": "pleased; satisfied"
    },
    {
      "character": "𗧲",
      "reading": "li̱w²",
      "explanationEN": "skilful"
    },
    {
      "character": "𗫖",
      "reading": "ywiṃ¹",
      "explanationEN": "even"
    },
    {
      "character": "𗥲",
      "reading": "pi̱ṃ²",
      "explanationEN": "to go through; to undergo"
    },
    {
      "character": "𗨋",
      "reading": "γwə̱²",
      "explanationEN": "three days later"
    },
    {
      "character": "𗨒",
      "reading": "ri̱r²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗧓",
      "reading": "ŋa̱²",
      "explanationEN": "pron. I; 1 SG indexation"
    },
    {
      "character": "𗩘",
      "reading": "no̱²",
      "explanationEN": "son or daughter"
    },
    {
      "character": "𗨓",
      "reading": "sa̱¹",
      "explanationEN": "net"
    },
    {
      "character": "𗪽",
      "reading": "rbu̱r¹",
      "explanationEN": "to gather; to collect"
    },
    {
      "character": "𗩤",
      "reading": "bi²",
      "explanationEN": "in the past"
    },
    {
      "character": "𗪟",
      "reading": "γu̱¹",
      "explanationEN": "the beginning of"
    },
    {
      "character": "𗪘",
      "reading": "śi¹",
      "explanationEN": "before; former times"
    },
    {
      "character": "𗩭",
      "reading": "tśoṃ¹",
      "explanationEN": "the first month"
    },
    {
      "character": "𘊓",
      "reading": "la̱?",
      "explanationEN": "scorpion"
    },
    {
      "character": "𗿀",
      "reading": "rtsi̱r¹",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗩐",
      "reading": "ġu̱²",
      "explanationEN": "husband and wife"
    },
    {
      "character": "𗩑",
      "reading": "ŋqu̱²",
      "explanationEN": "food and drink; diet"
    },
    {
      "character": "𗩮",
      "reading": "ke¹",
      "explanationEN": "barbarian"
    },
    {
      "character": "𗪬",
      "reading": "qo̱ṃ¹",
      "explanationEN": "night"
    },
    {
      "character": "𗩕",
      "reading": "dza̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗩽",
      "reading": "rtṣao̱r²",
      "explanationEN": "filthy"
    },
    {
      "character": "𗿶",
      "reading": "lae̱h¹",
      "explanationEN": "crow"
    },
    {
      "character": "𗿲",
      "reading": "ẓao̱²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𘔸",
      "reading": "γo̱ṃh¹",
      "explanationEN": "to yawn"
    },
    {
      "character": "𗦥",
      "reading": "dzeṃ¹",
      "explanationEN": "divination"
    },
    {
      "character": "𗥁",
      "reading": "ẓao̱ṃ²",
      "explanationEN": "above; higher place"
    },
    {
      "character": "𗦨",
      "reading": "ṇ??",
      "explanationEN": "to contract"
    },
    {
      "character": "𗦰",
      "reading": "rẓaa̱r¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗽥",
      "reading": "rgur²",
      "explanationEN": "gully"
    },
    {
      "character": "𗽪",
      "reading": "γwe̱²",
      "explanationEN": "city wall and moat; gully"
    },
    {
      "character": "𗨔",
      "reading": "ni̱w¹",
      "explanationEN": "breast"
    },
    {
      "character": "𗪁",
      "reading": "gi²",
      "explanationEN": "wife; concubine"
    },
    {
      "character": "𗧈",
      "reading": "swə¹",
      "explanationEN": "to urinate"
    },
    {
      "character": "𗬠",
      "reading": "ba̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗤿",
      "reading": "lhə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗥋",
      "reading": "mmə̱¹",
      "explanationEN": "to blow; to pipe (a wind instrument)"
    },
    {
      "character": "𗦉",
      "reading": "be²",
      "explanationEN": "wife; concubine; woman"
    },
    {
      "character": "𗨼",
      "reading": "dźwe²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗫕",
      "reading": "ntho̱¹",
      "explanationEN": "to ripple; to undulate"
    },
    {
      "character": "𗨄",
      "reading": "yiw²",
      "explanationEN": "achievement"
    },
    {
      "character": "𗧋",
      "reading": "re̱r²",
      "explanationEN": "respect"
    },
    {
      "character": "𗪉",
      "reading": "zwih¹",
      "explanationEN": "nephew"
    },
    {
      "character": "𗧯",
      "reading": "nye¹",
      "explanationEN": "to hold"
    },
    {
      "character": "𗫋",
      "reading": "tśhoṃ¹",
      "explanationEN": "to separate"
    },
    {
      "character": "𗽒",
      "reading": "pho̱ṃ²",
      "explanationEN": "mountain peak"
    },
    {
      "character": "𗽰",
      "reading": "mbu̱²",
      "explanationEN": "grave; mausoleum"
    },
    {
      "character": "𗿔",
      "reading": "ŋwi̱²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗿥",
      "reading": "vəh¹",
      "explanationEN": "old; aged"
    },
    {
      "character": "𘔶",
      "reading": "qhwu̱h²",
      "explanationEN": "to blow; to beat"
    },
    {
      "character": "𗺘",
      "reading": "yiw²",
      "explanationEN": "barnyard grass"
    },
    {
      "character": "𗏼",
      "reading": "nwə¹",
      "explanationEN": "to send back"
    },
    {
      "character": "𗣓",
      "reading": "ġai̱¹",
      "explanationEN": "hard; difficult"
    },
    {
      "character": "𗼷",
      "reading": "γa̱¹",
      "explanationEN": "gravel"
    },
    {
      "character": "𗾻",
      "reading": "tshwu̱²",
      "explanationEN": "for a particular person, occasion, purpose, etc."
    },
    {
      "character": "𗺪",
      "reading": "rur¹",
      "explanationEN": "to sweep; broom"
    },
    {
      "character": "𗻸",
      "reading": "γa̱¹",
      "explanationEN": "herbal medicine"
    },
    {
      "character": "𗏴",
      "reading": "dźu¹",
      "explanationEN": "to show; to declare"
    },
    {
      "character": "𗥮",
      "reading": "rkur²",
      "explanationEN": "skill; artistry"
    },
    {
      "character": "𗪭",
      "reading": "ndə̱¹",
      "explanationEN": "ago; before"
    },
    {
      "character": "𗫍",
      "reading": "śi¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗽤",
      "reading": "tṣhae̱²",
      "explanationEN": "a stocked village"
    },
    {
      "character": "𗽓",
      "reading": "ri̱wr¹",
      "explanationEN": "marsh"
    },
    {
      "character": "𗺢",
      "reading": "po̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗺭",
      "reading": "dźoṃ¹",
      "explanationEN": "green"
    },
    {
      "character": "𗺬",
      "reading": "dzwəh¹",
      "explanationEN": "witch"
    },
    {
      "character": "𗺩",
      "reading": "ẓaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗺾",
      "reading": "rvwa̱r²",
      "explanationEN": "net; to be captured"
    },
    {
      "character": "𗻧",
      "reading": "śe¹",
      "explanationEN": "barley"
    },
    {
      "character": "𗻒",
      "reading": "dźwaṃ²",
      "explanationEN": "rafter"
    },
    {
      "character": "𗧐",
      "reading": "bai̱²",
      "explanationEN": "to unite"
    },
    {
      "character": "𗩧",
      "reading": "mmi̱²",
      "explanationEN": "mould; mildew; mouldy smell"
    },
    {
      "character": "𗪆",
      "reading": "nswə¹",
      "explanationEN": "to think"
    },
    {
      "character": "𗿋",
      "reading": "bo̱²",
      "explanationEN": "to brood; to hatch"
    },
    {
      "character": "𗻂",
      "reading": "nde²",
      "explanationEN": "to light a fire"
    },
    {
      "character": "𗻢",
      "reading": "tshi̱w²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻭",
      "reading": "γa̱¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻞",
      "reading": "gu²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻕",
      "reading": "nẓaa̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗏤",
      "reading": "tha̱²",
      "explanationEN": "to force; to compel"
    },
    {
      "character": "𗬙",
      "reading": "tśhu²",
      "explanationEN": "that"
    },
    {
      "character": "𗣜",
      "reading": "thu²",
      "explanationEN": "this"
    },
    {
      "character": "𗻽",
      "reading": "ba̱¹",
      "explanationEN": "monkey"
    },
    {
      "character": "𗾹",
      "reading": "tshwu̱²",
      "explanationEN": "for a particular person, occasion, purpose, etc."
    },
    {
      "character": "𗤵",
      "reading": "rtśər¹",
      "explanationEN": "to tie"
    },
    {
      "character": "𗦵",
      "reading": "pə̱¹",
      "explanationEN": "big; thick"
    },
    {
      "character": "𗣋",
      "reading": "khaṃ²",
      "explanationEN": "enemy; foe"
    },
    {
      "character": "𗨤",
      "reading": "dzo²",
      "explanationEN": "ceremony"
    },
    {
      "character": "𗫩",
      "reading": "rdźər¹",
      "explanationEN": "to give up; to abandon"
    },
    {
      "character": "𗽲",
      "reading": "ge¹",
      "explanationEN": "valley"
    },
    {
      "character": "𗧺",
      "reading": "tho̱ṃ¹",
      "explanationEN": "proficient"
    },
    {
      "character": "𗣖",
      "reading": "ẓuo¹",
      "explanationEN": "familiar"
    },
    {
      "character": "𗣗",
      "reading": "zeh²",
      "explanationEN": "to do"
    },
    {
      "character": "𗢫",
      "reading": "lhə¹",
      "explanationEN": "cheese"
    },
    {
      "character": "𗾜",
      "reading": "tświw²",
      "explanationEN": "cheese"
    },
    {
      "character": "𗢴",
      "reading": "rer²",
      "explanationEN": "to call out; to shout"
    },
    {
      "character": "𗣘",
      "reading": "tṣuo¹",
      "explanationEN": "orphan"
    },
    {
      "character": "𗤃",
      "reading": "nnaa̱²",
      "explanationEN": "to stutter; to faint"
    },
    {
      "character": "𗣻",
      "reading": "lhə¹",
      "explanationEN": "to add; to increase"
    },
    {
      "character": "𘊛",
      "reading": "dzoh¹",
      "explanationEN": "metaphor; just like"
    },
    {
      "character": "𘔲",
      "reading": "mme¹",
      "explanationEN": "corpse"
    },
    {
      "character": "𗢷",
      "reading": "ŋkhə²",
      "explanationEN": "fresh"
    },
    {
      "character": "𗤋",
      "reading": "me¹",
      "explanationEN": "not exist; negation of 𗁁 and 𗿷"
    },
    {
      "character": "𗥒",
      "reading": "ŋo̱²",
      "explanationEN": "grieved; sorrowful"
    },
    {
      "character": "𗤌",
      "reading": "tu̱¹",
      "explanationEN": "sincere"
    },
    {
      "character": "𗤸",
      "reading": "tśi¹",
      "explanationEN": "to play; to laugh and frolic"
    },
    {
      "character": "𗫚",
      "reading": "khwi²",
      "explanationEN": "circle"
    },
    {
      "character": "𗽐",
      "reading": "dzəh²",
      "explanationEN": "a traditional unit of area"
    },
    {
      "character": "𗼂",
      "reading": "ba̱¹",
      "explanationEN": "to go hunting"
    },
    {
      "character": "𗤅",
      "reading": "mme¹",
      "explanationEN": "to bring up"
    },
    {
      "character": "𗦝",
      "reading": "dźeh²",
      "explanationEN": "close relative"
    },
    {
      "character": "𗥊",
      "reading": "ŋge¹",
      "explanationEN": "stunned; stupefied"
    },
    {
      "character": "𗨴",
      "reading": "llo̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗥃",
      "reading": "rllər¹",
      "explanationEN": "four"
    },
    {
      "character": "𗣝",
      "reading": "me̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼹",
      "reading": "dźwo²",
      "explanationEN": "cave; hole"
    },
    {
      "character": "𗾬",
      "reading": "γiw²",
      "explanationEN": "cuckoo"
    },
    {
      "character": "𗾲",
      "reading": "tshə¹",
      "explanationEN": "name of a star"
    },
    {
      "character": "𗿆",
      "reading": "śe¹",
      "explanationEN": "to clear away"
    },
    {
      "character": "𗣍",
      "reading": "mə̱²",
      "explanationEN": "to worry"
    },
    {
      "character": "𗥎",
      "reading": "rġa̱r²",
      "explanationEN": "benefit; profit"
    },
    {
      "character": "𗻾",
      "reading": "vu¹",
      "explanationEN": "dowry"
    },
    {
      "character": "𗤆",
      "reading": "lə²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣾",
      "reading": "gə²",
      "explanationEN": "centre"
    },
    {
      "character": "𗤖",
      "reading": "teh¹",
      "explanationEN": "swift"
    },
    {
      "character": "𗨸",
      "reading": "γaə̱¹",
      "explanationEN": "close; near"
    },
    {
      "character": "𗼴",
      "reading": "leh¹",
      "explanationEN": "seedling"
    },
    {
      "character": "𘊐",
      "reading": "ke¹",
      "explanationEN": "IMTER: IN; OPT: IN"
    },
    {
      "character": "𗏳",
      "reading": "rkawr²",
      "explanationEN": "limit; end"
    },
    {
      "character": "𗩍",
      "reading": "nvwə̱¹",
      "explanationEN": "to own; to have"
    },
    {
      "character": "𗩻",
      "reading": "tśwow¹",
      "explanationEN": "to tribute"
    },
    {
      "character": "𗏽",
      "reading": "rer²",
      "explanationEN": "to mend; to sew"
    },
    {
      "character": "𗦀",
      "reading": "ho̱?",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗥀",
      "reading": "li²",
      "explanationEN": "scabies"
    },
    {
      "character": "𗨻",
      "reading": "vwi̱²",
      "explanationEN": "to do"
    },
    {
      "character": "𗪄",
      "reading": "thu̱¹",
      "explanationEN": "to draw (a bow)"
    },
    {
      "character": "𗢪",
      "reading": "pi¹",
      "explanationEN": "majestic; glorious"
    },
    {
      "character": "𗣏",
      "reading": "luh²",
      "explanationEN": "physique"
    },
    {
      "character": "𗣕",
      "reading": "vih¹",
      "explanationEN": "human being; person"
    },
    {
      "character": "𗥌",
      "reading": "ne¹",
      "explanationEN": "emissary"
    },
    {
      "character": "𗦊",
      "reading": "lhweh¹",
      "explanationEN": "to watch; to keep watch on"
    },
    {
      "character": "𗦐",
      "reading": "lhə¹",
      "explanationEN": "an insect name"
    },
    {
      "character": "𗦡",
      "reading": "yo̱ṃ²",
      "explanationEN": "relatives"
    },
    {
      "character": "𗧭",
      "reading": "rγər¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨷",
      "reading": "lhə¹",
      "explanationEN": "slowly"
    },
    {
      "character": "𗽏",
      "reading": "di̱h¹",
      "explanationEN": "soil"
    },
    {
      "character": "𗾐",
      "reading": "lhwih¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗾭",
      "reading": "ne²",
      "explanationEN": "cuckoo"
    },
    {
      "character": "𗿓",
      "reading": "lhə̱¹",
      "explanationEN": "an insect name"
    },
    {
      "character": "𗿐",
      "reading": "tświw²",
      "explanationEN": "light yellow"
    },
    {
      "character": "𗿠",
      "reading": "tświw²",
      "explanationEN": "amber"
    },
    {
      "character": "𘔷",
      "reading": "se¹",
      "explanationEN": "moisture"
    },
    {
      "character": "𘊙",
      "reading": "mə̱²",
      "explanationEN": "fly; mosquito"
    },
    {
      "character": "𗫫",
      "reading": "ho̱ṃ²",
      "explanationEN": "rank"
    },
    {
      "character": "𗢸",
      "reading": "llaw²",
      "explanationEN": "mouth"
    },
    {
      "character": "𗣔",
      "reading": "tu̱¹",
      "explanationEN": "stupid; foolish"
    },
    {
      "character": "𗧦",
      "reading": "gə²",
      "explanationEN": "I; me"
    },
    {
      "character": "𗦦",
      "reading": "nnaa̱²",
      "explanationEN": "wrist"
    },
    {
      "character": "𗥏",
      "reading": "γo̱ṃh²",
      "explanationEN": "dumbness"
    },
    {
      "character": "𗪍",
      "reading": "mə̱¹",
      "explanationEN": "vulture"
    },
    {
      "character": "𘴃",
      "reading": "bu²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗾊",
      "reading": "veh²",
      "explanationEN": "warehouse"
    },
    {
      "character": "𗾑",
      "reading": "mo̱²",
      "explanationEN": "nephew"
    },
    {
      "character": "𗿟",
      "reading": "mmu²",
      "explanationEN": "deep pool"
    },
    {
      "character": "𗻼",
      "reading": "ẓae̱ṃ¹",
      "explanationEN": "man"
    },
    {
      "character": "𗦩",
      "reading": "toh¹",
      "explanationEN": "toinfect"
    },
    {
      "character": "𗪀",
      "reading": "ŋkhu²",
      "explanationEN": "to watch; to oversee"
    },
    {
      "character": "𗪨",
      "reading": "mae̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗿤",
      "reading": "dźwoṃ¹",
      "explanationEN": "breeding"
    },
    {
      "character": "𗿹",
      "reading": "yo̱ṃ²",
      "explanationEN": "crow"
    },
    {
      "character": "𗿼",
      "reading": "dźwoṃ¹",
      "explanationEN": "bird"
    },
    {
      "character": "𗢶",
      "reading": "dźoṃ¹",
      "explanationEN": "circle"
    },
    {
      "character": "𗪂",
      "reading": "ko¹",
      "explanationEN": "mother’s brother"
    },
    {
      "character": "𗫯",
      "reading": "lhi²",
      "explanationEN": "origin; source"
    },
    {
      "character": "𗿱",
      "reading": "me²",
      "explanationEN": "mother"
    },
    {
      "character": "𗿻",
      "reading": "qau̱¹",
      "explanationEN": "phoenix"
    },
    {
      "character": "𗿾",
      "reading": "vih¹",
      "explanationEN": "east; tail"
    },
    {
      "character": "𘊜",
      "reading": "khi²",
      "explanationEN": "pearl"
    },
    {
      "character": "𗿽",
      "reading": "ma¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗺙",
      "reading": "rzur²",
      "explanationEN": "comet"
    },
    {
      "character": "𗻓",
      "reading": "yo̱ṃ²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗏫",
      "reading": "lu̱h²",
      "explanationEN": "stem; stalk"
    },
    {
      "character": "𗏻",
      "reading": "rdźər²",
      "explanationEN": "to bear lately"
    },
    {
      "character": "𗪵",
      "reading": "tṣae̱¹",
      "explanationEN": "headgear; hat; cap"
    },
    {
      "character": "𘔹",
      "reading": "bə̱²",
      "explanationEN": "replete; to swell"
    },
    {
      "character": "𗺠",
      "reading": "tu̱¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻵",
      "reading": "kuh¹",
      "explanationEN": "onion; garlic"
    },
    {
      "character": "𗺚",
      "reading": "swa̱¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗺫",
      "reading": "bə̱²",
      "explanationEN": "a kind of grass or vegetable"
    },
    {
      "character": "𗻘",
      "reading": "tsha²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗧻",
      "reading": "dźə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗏉",
      "reading": "rγu̱r¹",
      "explanationEN": "to encircle; to go round"
    },
    {
      "character": "𗣑",
      "reading": "dau̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗽂",
      "reading": "γi̱w¹",
      "explanationEN": "trench"
    },
    {
      "character": "𗩂",
      "reading": "rmer²",
      "explanationEN": "spirit; mind"
    },
    {
      "character": "𗏬",
      "reading": "rqo̱r¹",
      "explanationEN": "joint"
    },
    {
      "character": "𗿺",
      "reading": "nnu¹",
      "explanationEN": "to smoke out; to fumigate"
    },
    {
      "character": "𗻔",
      "reading": "dźu²",
      "explanationEN": "to tie a knot to distinguish"
    },
    {
      "character": "𗣒",
      "reading": "lo̱ṃ²",
      "explanationEN": "round"
    },
    {
      "character": "𗦧",
      "reading": "rmer²",
      "explanationEN": "spirit; vigour"
    },
    {
      "character": "𗪅",
      "reading": "tṣao̱²",
      "explanationEN": "headgear; hat; cap"
    },
    {
      "character": "𘊖",
      "reading": "paa̱¹",
      "explanationEN": "mouse"
    },
    {
      "character": "𗣙",
      "reading": "thi̱w¹",
      "explanationEN": "upright"
    },
    {
      "character": "𗤈",
      "reading": "ŋgi¹",
      "explanationEN": "to give birth"
    },
    {
      "character": "𗥍",
      "reading": "guh²",
      "explanationEN": "post; pillar; seat"
    },
    {
      "character": "𗟝",
      "reading": "γae̱¹",
      "explanationEN": "deerhorn, antler"
    },
    {
      "character": "𘜦",
      "reading": "rywər¹",
      "explanationEN": "fast; rapid"
    },
    {
      "character": "𘜦",
      "reading": "rywər²",
      "explanationEN": "fast; rapid"
    },
    {
      "character": "𘉩",
      "reading": "liw²",
      "explanationEN": "to pull; to drag"
    },
    {
      "character": "𘚳",
      "reading": "ẓaa̱ṃ¹",
      "explanationEN": "straw mat"
    },
    {
      "character": "𘚶",
      "reading": "lə¹",
      "explanationEN": "wind"
    },
    {
      "character": "𘜡",
      "reading": "rśar¹",
      "explanationEN": "sudden"
    },
    {
      "character": "𘚹",
      "reading": "swə¹",
      "explanationEN": "whirlwind"
    },
    {
      "character": "𘚭",
      "reading": "γwao̱h¹",
      "explanationEN": "to clear away"
    },
    {
      "character": "𗬣",
      "reading": "pə̱¹",
      "explanationEN": "little livestock"
    },
    {
      "character": "𗬶",
      "reading": "qwaa̱¹",
      "explanationEN": "to step on; to burst; to split"
    },
    {
      "character": "𗬦",
      "reading": "hi̱w²",
      "explanationEN": "musical instrument; a surname (?)"
    },
    {
      "character": "𗃧",
      "reading": "nle̱²",
      "explanationEN": "to rely on"
    },
    {
      "character": "𗃱",
      "reading": "bu¹",
      "explanationEN": "backbone"
    },
    {
      "character": "𗃲",
      "reading": "dẓae̱ṃ¹",
      "explanationEN": "to do; to act"
    },
    {
      "character": "𗬳",
      "reading": "pe̱¹",
      "explanationEN": "outer; exterior"
    },
    {
      "character": "𗃫",
      "reading": "piw¹",
      "explanationEN": "poor; needy; impoverished"
    },
    {
      "character": "𗃭",
      "reading": "yu²",
      "explanationEN": "death"
    },
    {
      "character": "𗬤",
      "reading": "śu²",
      "explanationEN": "foundation; basis"
    },
    {
      "character": "𗬬",
      "reading": "de²",
      "explanationEN": "ever; to have already"
    },
    {
      "character": "𗬯",
      "reading": "qwə̱²",
      "explanationEN": "to listen; to hear"
    },
    {
      "character": "𗬱",
      "reading": "źu¹",
      "explanationEN": "loyal; honest"
    },
    {
      "character": "𗃩",
      "reading": "ge²",
      "explanationEN": "remains"
    },
    {
      "character": "𗴐",
      "reading": "rγa̱r¹",
      "explanationEN": "urgent"
    },
    {
      "character": "𘓒",
      "reading": "rtśər²",
      "explanationEN": "afraid; scared"
    },
    {
      "character": "𘓠",
      "reading": "γa̱¹",
      "explanationEN": "sad; sorrowful"
    },
    {
      "character": "𘓓",
      "reading": "nvwə̱¹",
      "explanationEN": "filial piety"
    },
    {
      "character": "𘓏",
      "reading": "rur¹",
      "explanationEN": "to sigh"
    },
    {
      "character": "𘓔",
      "reading": "məh²",
      "explanationEN": "to forget"
    },
    {
      "character": "𘀁",
      "reading": "tho̱¹",
      "explanationEN": "tired; weary"
    },
    {
      "character": "𗃗",
      "reading": "bu¹",
      "explanationEN": "name of a star"
    },
    {
      "character": "𗬪",
      "reading": "nlho̱²",
      "explanationEN": "bright; smooth"
    },
    {
      "character": "𗬵",
      "reading": "dźwoṃ¹",
      "explanationEN": "to float; to hang"
    },
    {
      "character": "𗴗",
      "reading": "pe¹",
      "explanationEN": "to come and go; to have contact"
    },
    {
      "character": "𗴛",
      "reading": "tśwoṃ²",
      "explanationEN": "to contribute"
    },
    {
      "character": "𗃶",
      "reading": "mmi̱²",
      "explanationEN": "illness"
    },
    {
      "character": "𘓎",
      "reading": "swi¹",
      "explanationEN": "beautiful"
    },
    {
      "character": "𗃝",
      "reading": "bu¹",
      "explanationEN": "baby; infant"
    },
    {
      "character": "𗼆",
      "reading": "śoṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼔",
      "reading": "tśho²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼜",
      "reading": "γai̱²",
      "explanationEN": "interest; benefit"
    },
    {
      "character": "𗼣",
      "reading": "rγər¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗼨",
      "reading": "ŋwi̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼤",
      "reading": "vwo̱ṃ¹",
      "explanationEN": "prosperous; flourishing"
    },
    {
      "character": "𗼄",
      "reading": "rtṣai̱r¹",
      "explanationEN": "benefit; interest"
    },
    {
      "character": "𗼕",
      "reading": "lo¹",
      "explanationEN": "good fortune"
    },
    {
      "character": "𗼬",
      "reading": "ba̱ṃ¹",
      "explanationEN": "to twine; to bind"
    },
    {
      "character": "𗼇",
      "reading": "mi²",
      "explanationEN": "the name Tangut people call themselves"
    },
    {
      "character": "𗼐",
      "reading": "qwaa̱ṃ¹",
      "explanationEN": "to close"
    },
    {
      "character": "𗼦",
      "reading": "dzuh²",
      "explanationEN": "round-grained non-glutinous rice"
    },
    {
      "character": "𗼭",
      "reading": "dzuh²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗼌",
      "reading": "qa̱¹",
      "explanationEN": "firm; staunch; unyielding"
    },
    {
      "character": "𗼓",
      "reading": "zəh¹",
      "explanationEN": "emperor; monarch"
    },
    {
      "character": "𗺑",
      "reading": "mba¹",
      "explanationEN": "limit; end"
    },
    {
      "character": "𘉄",
      "reading": "llwu²",
      "explanationEN": "witty remark; witticism; rhetoric"
    },
    {
      "character": "𗺔",
      "reading": "tshah²",
      "explanationEN": "to increase"
    },
    {
      "character": "𗅜",
      "reading": "khiw²",
      "explanationEN": "to discard; to abandon"
    },
    {
      "character": "𗄱",
      "reading": "pe¹",
      "explanationEN": "deep green"
    },
    {
      "character": "𗆁",
      "reading": "sa̱ṃ¹",
      "explanationEN": "scattered"
    },
    {
      "character": "𗆭",
      "reading": "dźiw¹",
      "explanationEN": "to pursue"
    },
    {
      "character": "𗆈",
      "reading": "gih²",
      "explanationEN": "wide; eclipse"
    },
    {
      "character": "𗹥",
      "reading": "rer¹",
      "explanationEN": "to speed; to run quickly"
    },
    {
      "character": "𗎧",
      "reading": "qha̱²",
      "explanationEN": "an insect name"
    },
    {
      "character": "𗎥",
      "reading": "mmi¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗄪",
      "reading": "nu̱¹",
      "explanationEN": "to violate; to go against"
    },
    {
      "character": "𗄺",
      "reading": "bu̱²",
      "explanationEN": "an insect name"
    },
    {
      "character": "𗅙",
      "reading": "me¹",
      "explanationEN": "behind"
    },
    {
      "character": "𗅢",
      "reading": "nsi̱w²",
      "explanationEN": "to survey; to research"
    },
    {
      "character": "𗂙",
      "reading": "pha̱¹",
      "explanationEN": "difference"
    },
    {
      "character": "𗆠",
      "reading": "bu̱¹",
      "explanationEN": "to subdue"
    },
    {
      "character": "𗅺",
      "reading": "tshə¹",
      "explanationEN": "goat"
    },
    {
      "character": "𗆍",
      "reading": "li̱w?",
      "explanationEN": "to abandon"
    },
    {
      "character": "𗅫",
      "reading": "rkiwr²",
      "explanationEN": "to revere"
    },
    {
      "character": "𗅵",
      "reading": "me²",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗆸",
      "reading": "bu̱²",
      "explanationEN": "an insect name"
    },
    {
      "character": "𗁱",
      "reading": "ye²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗆐",
      "reading": "lleh²",
      "explanationEN": "PFV: to come"
    },
    {
      "character": "𗆃",
      "reading": "pu̱h²",
      "explanationEN": "weft"
    },
    {
      "character": "𗅹",
      "reading": "ya¹",
      "explanationEN": "east; tail"
    },
    {
      "character": "𗅨",
      "reading": "meh²",
      "explanationEN": "nothing; not"
    },
    {
      "character": "𗅯",
      "reading": "kə¹",
      "explanationEN": "to prohibit; to ban; prohibition; ban"
    },
    {
      "character": "𗆕",
      "reading": "di¹",
      "explanationEN": "internal organs; viscera; abdominal cavity"
    },
    {
      "character": "𗆡",
      "reading": "yu²",
      "explanationEN": "high"
    },
    {
      "character": "𗀵",
      "reading": "me̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗁆",
      "reading": "beh¹",
      "explanationEN": "man of wealth; moneybags"
    },
    {
      "character": "𗁫",
      "reading": "sə̱¹",
      "explanationEN": "tail; end"
    },
    {
      "character": "𗂖",
      "reading": "rbo̱ṃr¹",
      "explanationEN": "bag; pocket"
    },
    {
      "character": "𗂅",
      "reading": "rmer²",
      "explanationEN": "prime minister; government officials"
    },
    {
      "character": "𗂂",
      "reading": "śu²",
      "explanationEN": "meat"
    },
    {
      "character": "𗁑",
      "reading": "nlə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗂎",
      "reading": "tsheṃ²",
      "explanationEN": "purple; violet"
    },
    {
      "character": "𗹜",
      "reading": "dźwə²",
      "explanationEN": "very close relative"
    },
    {
      "character": "𗁠",
      "reading": "vwo̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘈺",
      "reading": "lə̱¹",
      "explanationEN": "to hinder; to block"
    },
    {
      "character": "𗹞",
      "reading": "mə̱¹",
      "explanationEN": "an insect name"
    },
    {
      "character": "𘈽",
      "reading": "sweṃ¹",
      "explanationEN": "(Buddhist) effect; accumulation"
    },
    {
      "character": "𗹪",
      "reading": "nle²",
      "explanationEN": "to destroy; to damage"
    },
    {
      "character": "𗁣",
      "reading": "dzə¹",
      "explanationEN": "careful; fearful"
    },
    {
      "character": "𗆦",
      "reading": "di¹",
      "explanationEN": "concave"
    },
    {
      "character": "𗶠",
      "reading": "ndzu̱²",
      "explanationEN": "to sit; to reside"
    },
    {
      "character": "𗶧",
      "reading": "dźwi²",
      "explanationEN": "bed"
    },
    {
      "character": "𗢞",
      "reading": "nlle²",
      "explanationEN": "devil; demon"
    },
    {
      "character": "𗌉",
      "reading": "rne̱r¹",
      "explanationEN": "flat-iron; smoothness; moistness"
    },
    {
      "character": "𗋨",
      "reading": "rlir²",
      "explanationEN": "to extract butter; to curdle"
    },
    {
      "character": "𗋌",
      "reading": "ne̱²",
      "explanationEN": "the ninth of the ten Heavenly Stems"
    },
    {
      "character": "𘚽",
      "reading": "lwəh¹",
      "explanationEN": "to run; to speed"
    },
    {
      "character": "𗏇",
      "reading": "di²",
      "explanationEN": "written characters"
    },
    {
      "character": "𗊅",
      "reading": "di²",
      "explanationEN": "to drink"
    },
    {
      "character": "𗌊",
      "reading": "nwə¹",
      "explanationEN": "pus"
    },
    {
      "character": "𗢥",
      "reading": "nda̱¹",
      "explanationEN": "captivation by witchcraft"
    },
    {
      "character": "𘓢",
      "reading": "ndze̱²",
      "explanationEN": "to ride"
    },
    {
      "character": "𗋼",
      "reading": "tṣhaə̱¹",
      "explanationEN": "foam; froth"
    },
    {
      "character": "𘊢",
      "reading": "to²",
      "explanationEN": "to stop; to cease"
    },
    {
      "character": "𗊚",
      "reading": "ni?",
      "explanationEN": "otter"
    },
    {
      "character": "𗎾",
      "reading": "mi̱²",
      "explanationEN": "a comet"
    },
    {
      "character": "𗊱",
      "reading": "dzo²",
      "explanationEN": "poetry; poem"
    },
    {
      "character": "𗋀",
      "reading": "tśəh²",
      "explanationEN": "to flow; to pass"
    },
    {
      "character": "𗋒",
      "reading": "keh¹",
      "explanationEN": "stalk"
    },
    {
      "character": "𗋟",
      "reading": "rqe̱r²",
      "explanationEN": "crooked; aslant"
    },
    {
      "character": "𗋮",
      "reading": "ẓwai̱¹",
      "explanationEN": "honey"
    },
    {
      "character": "𗋂",
      "reading": "śwow¹",
      "explanationEN": "to need; to want"
    },
    {
      "character": "𗌄",
      "reading": "llo̱ṃ²",
      "explanationEN": "bone; skeleton"
    },
    {
      "character": "𗊙",
      "reading": "hwi̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗢗",
      "reading": "tśhwiw²",
      "explanationEN": "hell; inferno"
    },
    {
      "character": "𘔾",
      "reading": "rlho̱ṃr²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗊊",
      "reading": "lo̱ṃh¹",
      "explanationEN": "reed"
    },
    {
      "character": "𗋷",
      "reading": "tsi²",
      "explanationEN": "scorpion"
    },
    {
      "character": "𘉺",
      "reading": "rtsər¹",
      "explanationEN": "chrysalis"
    },
    {
      "character": "𗬖",
      "reading": "vwi̱²",
      "explanationEN": "beast; animal"
    },
    {
      "character": "𘉹",
      "reading": "tsu¹",
      "explanationEN": "anger; rage"
    },
    {
      "character": "𘊉",
      "reading": "keh¹",
      "explanationEN": "rottenness"
    },
    {
      "character": "𘊋",
      "reading": "po¹",
      "explanationEN": "slander"
    },
    {
      "character": "𗋣",
      "reading": "rqhaa̱r¹",
      "explanationEN": "ghost; spirit"
    },
    {
      "character": "𘊆",
      "reading": "bo²",
      "explanationEN": "to punish; to penalize"
    },
    {
      "character": "𗇉",
      "reading": "qhwa̱²",
      "explanationEN": "Han people"
    },
    {
      "character": "𗋰",
      "reading": "ge²",
      "explanationEN": "poem"
    },
    {
      "character": "𗼯",
      "reading": "tah¹",
      "explanationEN": "a plot of land"
    },
    {
      "character": "𗐅",
      "reading": "be¹",
      "explanationEN": "to mend; to patch"
    },
    {
      "character": "𗫳",
      "reading": "rqai̱r¹",
      "explanationEN": "to injure"
    },
    {
      "character": "𗫴",
      "reading": "mma¹",
      "explanationEN": "fruit"
    },
    {
      "character": "𗫽",
      "reading": "khe²",
      "explanationEN": "musk deer"
    },
    {
      "character": "𗫼",
      "reading": "ləh²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗬆",
      "reading": "phi̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗾞",
      "reading": "nnə²",
      "explanationEN": "day; daylight"
    },
    {
      "character": "𗏏",
      "reading": "śəh¹",
      "explanationEN": "to eat"
    },
    {
      "character": "𗏑",
      "reading": "nno̱¹",
      "explanationEN": "weak"
    },
    {
      "character": "𗺣",
      "reading": "nśi²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗧹",
      "reading": "rŋir¹",
      "explanationEN": "disaster; calamity"
    },
    {
      "character": "𗻄",
      "reading": "kwiṃ¹",
      "explanationEN": "thatched cottage"
    },
    {
      "character": "𗺼",
      "reading": "pa̱h²",
      "explanationEN": "macaque"
    },
    {
      "character": "𗤾",
      "reading": "lo²",
      "explanationEN": "elder brother"
    },
    {
      "character": "𗣸",
      "reading": "nne¹",
      "explanationEN": "death"
    },
    {
      "character": "𗾔",
      "reading": "bi̱²",
      "explanationEN": "the sun"
    },
    {
      "character": "𗽹",
      "reading": "śi²",
      "explanationEN": "market"
    },
    {
      "character": "𗾽",
      "reading": "bo̱ṃh²",
      "explanationEN": "to run away; to flee"
    },
    {
      "character": "𗦷",
      "reading": "llih²",
      "explanationEN": "before; formerly"
    },
    {
      "character": "𗧱",
      "reading": "swə²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗿁",
      "reading": "phə¹",
      "explanationEN": "to hear; to know"
    },
    {
      "character": "𗪯",
      "reading": "gi²",
      "explanationEN": "wife; concubine"
    },
    {
      "character": "𗺺",
      "reading": "si̱¹",
      "explanationEN": "flax"
    },
    {
      "character": "𗬛",
      "reading": "ri̱r²",
      "explanationEN": "soft-shelled turtle"
    },
    {
      "character": "𗢺",
      "reading": "rir²",
      "explanationEN": "before; formerly"
    },
    {
      "character": "𗬎",
      "reading": "śoṃ¹",
      "explanationEN": "villain"
    },
    {
      "character": "𗬐",
      "reading": "sə̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗽄",
      "reading": "lləh²",
      "explanationEN": "earthworm"
    },
    {
      "character": "𗾡",
      "reading": "rbo̱ṃr¹",
      "explanationEN": "bee"
    },
    {
      "character": "𗿿",
      "reading": "de¹",
      "explanationEN": "sage; able and virtuous person"
    },
    {
      "character": "𗣞",
      "reading": "rtswə̱r¹",
      "explanationEN": "to milk (a livestock)"
    },
    {
      "character": "𗬏",
      "reading": "reṃ²",
      "explanationEN": "third"
    },
    {
      "character": "𗤺",
      "reading": "lhwə²",
      "explanationEN": "abrupt; sudden; violent"
    },
    {
      "character": "𗤻",
      "reading": "vah¹",
      "explanationEN": "flower"
    },
    {
      "character": "𗦶",
      "reading": "źiw¹",
      "explanationEN": "to throw away; to abandon"
    },
    {
      "character": "𗤕",
      "reading": "tsa̱ṃ¹",
      "explanationEN": "to burst; to blast"
    },
    {
      "character": "𗾠",
      "reading": "rur²",
      "explanationEN": "bat"
    },
    {
      "character": "𗏎",
      "reading": "ba²",
      "explanationEN": "belly"
    },
    {
      "character": "𗬢",
      "reading": "gwə¹",
      "explanationEN": "firm; solid"
    },
    {
      "character": "𗤍",
      "reading": "be²",
      "explanationEN": "anger"
    },
    {
      "character": "𗦎",
      "reading": "ra̱r²",
      "explanationEN": "to flow; to leak"
    },
    {
      "character": "𗧑",
      "reading": "phaa̱¹",
      "explanationEN": "to break off with the fingers and thumb"
    },
    {
      "character": "𗨍",
      "reading": "hwaa̱¹",
      "explanationEN": "flower; grass"
    },
    {
      "character": "𗧬",
      "reading": "tho̱ṃh²",
      "explanationEN": "to grow up"
    },
    {
      "character": "𗧰",
      "reading": "khe¹",
      "explanationEN": "to open wide; to be exposed to the sun"
    },
    {
      "character": "𗪜",
      "reading": "rnor¹",
      "explanationEN": "origin; source"
    },
    {
      "character": "𗫉",
      "reading": "mbae̱¹",
      "explanationEN": "entertaimnent"
    },
    {
      "character": "𗪈",
      "reading": "mə̱²",
      "explanationEN": "gadfly"
    },
    {
      "character": "𗽦",
      "reading": "hao̱ṃ²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗽯",
      "reading": "phe̱ṃ¹",
      "explanationEN": "vast; wide"
    },
    {
      "character": "𘔼",
      "reading": "nuo¹",
      "explanationEN": "CAUS: causal case"
    },
    {
      "character": "𘊘",
      "reading": "pae̱ṃh²",
      "explanationEN": "tadpole"
    },
    {
      "character": "𗦕",
      "reading": "tṣhaa̱ṃ¹",
      "explanationEN": "thatched cottage"
    },
    {
      "character": "𗪝",
      "reading": "γwae̱h¹",
      "explanationEN": "to struggle; to fight"
    },
    {
      "character": "𗏥",
      "reading": "nllu²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗏲",
      "reading": "phe̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣢",
      "reading": "dziw¹",
      "explanationEN": "bamboo or twig fence"
    },
    {
      "character": "𗤼",
      "reading": "na̱¹",
      "explanationEN": "night; darkness"
    },
    {
      "character": "𗦢",
      "reading": "sa̱²",
      "explanationEN": "to survey; measure"
    },
    {
      "character": "𗦤",
      "reading": "nle¹",
      "explanationEN": "to wait; to stay"
    },
    {
      "character": "𗨟",
      "reading": "dź??",
      "explanationEN": "oblique; lopsided"
    },
    {
      "character": "𗩚",
      "reading": "dau̱¹",
      "explanationEN": "to exist; to have; to place"
    },
    {
      "character": "𗧽",
      "reading": "rtso̱ṃr²",
      "explanationEN": "to astonish; to shock; to voice"
    },
    {
      "character": "𗨰",
      "reading": "la̱²",
      "explanationEN": "to weave"
    },
    {
      "character": "𗼺",
      "reading": "ndzu̱²",
      "explanationEN": "to plant; to stand"
    },
    {
      "character": "𗾾",
      "reading": "rir²",
      "explanationEN": "to fight; to struggle"
    },
    {
      "character": "𗺱",
      "reading": "ẓwaə̱¹",
      "explanationEN": "mouse; rat"
    },
    {
      "character": "𗻤",
      "reading": "ẓwaə̱¹",
      "explanationEN": "coral"
    },
    {
      "character": "𗻗",
      "reading": "śu²",
      "explanationEN": "a kind of fruit"
    },
    {
      "character": "𗏡",
      "reading": "qu̱h¹",
      "explanationEN": "behind; back"
    },
    {
      "character": "𗦑",
      "reading": "hu̱¹",
      "explanationEN": "clear; distinct"
    },
    {
      "character": "𗺰",
      "reading": "lo̱ṃ²",
      "explanationEN": "poisonous weed"
    },
    {
      "character": "𗺡",
      "reading": "ndẓaa̱²",
      "explanationEN": "to graze; to herd"
    },
    {
      "character": "𗻻",
      "reading": "tṣaa̱¹",
      "explanationEN": "a kind of waterweeds"
    },
    {
      "character": "𗻖",
      "reading": "rir²",
      "explanationEN": "grass"
    },
    {
      "character": "𗻏",
      "reading": "kah¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗦈",
      "reading": "thi̱w¹",
      "explanationEN": "to penetrate"
    },
    {
      "character": "𗨛",
      "reading": "rər²",
      "explanationEN": "to go out; to arise"
    },
    {
      "character": "𗫬",
      "reading": "ntṣaa̱²",
      "explanationEN": "suffering; misery; distress"
    },
    {
      "character": "𗏹",
      "reading": "yu²",
      "explanationEN": "often"
    },
    {
      "character": "𗪞",
      "reading": "yu¹",
      "explanationEN": "ashamed; abashed"
    },
    {
      "character": "𗪔",
      "reading": "lo̱ṃ²",
      "explanationEN": "hedgehog"
    },
    {
      "character": "𗦁",
      "reading": "γai̱h²",
      "explanationEN": "to harm; to damage"
    },
    {
      "character": "𗺯",
      "reading": "γu̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗤶",
      "reading": "nne¹",
      "explanationEN": "heart; mind"
    },
    {
      "character": "𗾪",
      "reading": "naw²",
      "explanationEN": "wisdom"
    },
    {
      "character": "𗟜",
      "reading": "rdzər¹",
      "explanationEN": "rapid speed"
    },
    {
      "character": "𘜤",
      "reading": "ha¹",
      "explanationEN": "very fast; rapid"
    },
    {
      "character": "𘚫",
      "reading": "lə¹",
      "explanationEN": "slow; tardy"
    },
    {
      "character": "𗺆",
      "reading": "lha¹",
      "explanationEN": "wide-open"
    },
    {
      "character": "𘚪",
      "reading": "dzih²",
      "explanationEN": "to stand up; to set up"
    },
    {
      "character": "𘚴",
      "reading": "lə²",
      "explanationEN": "bee; wasp"
    },
    {
      "character": "𘚯",
      "reading": "lə¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗃠",
      "reading": "nne̱²",
      "explanationEN": "imperial court"
    },
    {
      "character": "𗴠",
      "reading": "teṃh²",
      "explanationEN": "politics"
    },
    {
      "character": "𗃡",
      "reading": "puh²",
      "explanationEN": "hat; crown"
    },
    {
      "character": "𘓍",
      "reading": "si²",
      "explanationEN": "enemy; foe"
    },
    {
      "character": "𗴕",
      "reading": "pa¹",
      "explanationEN": "respect"
    },
    {
      "character": "𗬥",
      "reading": "de¹",
      "explanationEN": "the sun; day"
    },
    {
      "character": "𗬫",
      "reading": "rdər²",
      "explanationEN": "surface"
    },
    {
      "character": "𗃷",
      "reading": "qhaə̱²",
      "explanationEN": "servant"
    },
    {
      "character": "𗃼",
      "reading": "qə̱¹",
      "explanationEN": "an insect name"
    },
    {
      "character": "𗘯",
      "reading": "ve²",
      "explanationEN": "INTER: OUT; OPT: OUT"
    },
    {
      "character": "𗃣",
      "reading": "rir²",
      "explanationEN": "to stagnate; to leave over; to remain"
    },
    {
      "character": "𗃨",
      "reading": "γo̱²",
      "explanationEN": "to change irregularly"
    },
    {
      "character": "𗴒",
      "reading": "kah¹",
      "explanationEN": "to fear.ᴀ"
    },
    {
      "character": "𗴞",
      "reading": "rir²",
      "explanationEN": "to revere; to fear"
    },
    {
      "character": "𘓐",
      "reading": "dzwo²",
      "explanationEN": "person"
    },
    {
      "character": "𘓚",
      "reading": "rur¹",
      "explanationEN": "gadfly"
    },
    {
      "character": "𘓙",
      "reading": "rur¹",
      "explanationEN": "to hate"
    },
    {
      "character": "𗼃",
      "reading": "śeṃ²",
      "explanationEN": "sage; able and virtuous person"
    },
    {
      "character": "𗼖",
      "reading": "lo¹",
      "explanationEN": "good fortune"
    },
    {
      "character": "𗼈",
      "reading": "nah¹",
      "explanationEN": "god; deity"
    },
    {
      "character": "𗼛",
      "reading": "rtṣai̱r¹",
      "explanationEN": "right side"
    },
    {
      "character": "𗺐",
      "reading": "lhuo¹",
      "explanationEN": "to strangle"
    },
    {
      "character": "𘉅",
      "reading": "dza̱¹",
      "explanationEN": "miscellaneous; mixed"
    },
    {
      "character": "𗂼",
      "reading": "ye²",
      "explanationEN": "banquet; feast"
    },
    {
      "character": "𗃇",
      "reading": "la¹",
      "explanationEN": "to hide; to conceal"
    },
    {
      "character": "𗆽",
      "reading": "tṣhaə̱¹",
      "explanationEN": "to take out"
    },
    {
      "character": "𗁓",
      "reading": "twa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗂇",
      "reading": "qwae̱¹",
      "explanationEN": "arm; wrist"
    },
    {
      "character": "𗂡",
      "reading": "rpə̱r¹",
      "explanationEN": "to clean; to clear away"
    },
    {
      "character": "𗂲",
      "reading": "dzeṃ²",
      "explanationEN": "to pierce; to penetrate"
    },
    {
      "character": "𗆾",
      "reading": "geh¹",
      "explanationEN": "inferior; to betray"
    },
    {
      "character": "𗆣",
      "reading": "nye¹",
      "explanationEN": "full"
    },
    {
      "character": "𗁬",
      "reading": "tho̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗹨",
      "reading": "yeṃ²",
      "explanationEN": "tent; house; temple"
    },
    {
      "character": "𗀷",
      "reading": "khu²",
      "explanationEN": "penis"
    },
    {
      "character": "𗁁",
      "reading": "ve²",
      "explanationEN": "to have; to exist(inanimate/immobile)"
    },
    {
      "character": "𗁲",
      "reading": "me̱²",
      "explanationEN": "hair; feather"
    },
    {
      "character": "𗁟",
      "reading": "kuh¹",
      "explanationEN": "treasure"
    },
    {
      "character": "𗅶",
      "reading": "twə̱h¹",
      "explanationEN": "to take out; to catch"
    },
    {
      "character": "𗂢",
      "reading": "di̱h¹",
      "explanationEN": "even; well-distributed"
    },
    {
      "character": "𗂠",
      "reading": "hoṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗂶",
      "reading": "rə̱r¹",
      "explanationEN": "to stitch; to sew"
    },
    {
      "character": "𗹰",
      "reading": "tśəh¹",
      "explanationEN": "to encircle; to go round"
    },
    {
      "character": "𗹵",
      "reading": "la̱ṃ¹",
      "explanationEN": "railing"
    },
    {
      "character": "𗹩",
      "reading": "ŋki¹",
      "explanationEN": "to make smooth with a file; to grind"
    },
    {
      "character": "𗂔",
      "reading": "sa̱¹",
      "explanationEN": "to swell; to choke"
    },
    {
      "character": "𗶣",
      "reading": "mi̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗶩",
      "reading": "thi²",
      "explanationEN": "land"
    },
    {
      "character": "𗊍",
      "reading": "ŋqwai̱¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗾀",
      "reading": "dzu̱²",
      "explanationEN": "powerful"
    },
    {
      "character": "𗊎",
      "reading": "do̱ṃ²",
      "explanationEN": "dysentery"
    },
    {
      "character": "𗢡",
      "reading": "vi̱h¹",
      "explanationEN": "coma; dying words"
    },
    {
      "character": "𗋓",
      "reading": "rzər²",
      "explanationEN": "breeding"
    },
    {
      "character": "𘉰",
      "reading": "ŋah²",
      "explanationEN": "scar; defect; drawback"
    },
    {
      "character": "𗊩",
      "reading": "ho̱ṃ²",
      "explanationEN": "harmonious"
    },
    {
      "character": "𗊁",
      "reading": "nnaa̱²",
      "explanationEN": "mud"
    },
    {
      "character": "𗊏",
      "reading": "nih²",
      "explanationEN": "pearl"
    },
    {
      "character": "𗋻",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "bridge"
    },
    {
      "character": "𗽾",
      "reading": "nsa̱r¹",
      "explanationEN": "to shake; to shock"
    },
    {
      "character": "𗎽",
      "reading": "mi̱²",
      "explanationEN": "dust"
    },
    {
      "character": "𗋞",
      "reading": "rne̱r¹",
      "explanationEN": "lubrication"
    },
    {
      "character": "𗋄",
      "reading": "su̱²",
      "explanationEN": "(used before disyllabic verbs) self; oneself"
    },
    {
      "character": "𗋵",
      "reading": "su̱²",
      "explanationEN": "self"
    },
    {
      "character": "𗋚",
      "reading": "və²",
      "explanationEN": "PFV: OUT; IMP: OUT"
    },
    {
      "character": "𗺒",
      "reading": "???",
      "explanationEN": "lintel (over a door)"
    },
    {
      "character": "𗢤",
      "reading": "la̱²",
      "explanationEN": "grave; tomb"
    },
    {
      "character": "𗾅",
      "reading": "rar¹",
      "explanationEN": "prison; jail"
    },
    {
      "character": "𘉷",
      "reading": "rkwər¹",
      "explanationEN": "a kind of coarse cloth"
    },
    {
      "character": "𘉻",
      "reading": "lhi̱h²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘉡",
      "reading": "puh¹",
      "explanationEN": "power; might"
    },
    {
      "character": "𘚀",
      "reading": "sa̱¹",
      "explanationEN": "to be stunned"
    },
    {
      "character": "𗽽",
      "reading": "qau̱¹",
      "explanationEN": "clothing"
    },
    {
      "character": "𗾂",
      "reading": "qau̱¹",
      "explanationEN": "valley; gorge"
    },
    {
      "character": "𗐉",
      "reading": "rmar¹",
      "explanationEN": "hair"
    },
    {
      "character": "𗫵",
      "reading": "rqai̱r¹",
      "explanationEN": "nightmare"
    },
    {
      "character": "𗢾",
      "reading": "kweṃh²",
      "explanationEN": "alone; by oneself"
    },
    {
      "character": "𗣦",
      "reading": "świw¹",
      "explanationEN": "to attend; to follow"
    },
    {
      "character": "𗥟",
      "reading": "la²",
      "explanationEN": "to seduce"
    },
    {
      "character": "𗼼",
      "reading": "qhau̱²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗥜",
      "reading": "qwə̱h¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨵",
      "reading": "kwəh¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗏪",
      "reading": "vi̱h¹",
      "explanationEN": "coma; dying words"
    },
    {
      "character": "𗤏",
      "reading": "rkər²",
      "explanationEN": "mallet; beetle"
    },
    {
      "character": "𗥅",
      "reading": "təh¹",
      "explanationEN": "often; constantly"
    },
    {
      "character": "𗥐",
      "reading": "rnor¹",
      "explanationEN": "tail; the east"
    },
    {
      "character": "𗨁",
      "reading": "phu²",
      "explanationEN": "up; above; over"
    },
    {
      "character": "𗨎",
      "reading": "rŋi̱wr¹",
      "explanationEN": "to count; to calculate"
    },
    {
      "character": "𗪿",
      "reading": "la¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗾵",
      "reading": "khu²",
      "explanationEN": "minced meat; ground meat"
    },
    {
      "character": "𗣥",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "to rise; to get up; to stand up"
    },
    {
      "character": "𗤽",
      "reading": "si̱ṃ¹",
      "explanationEN": "to think"
    },
    {
      "character": "𗦲",
      "reading": "rir²",
      "explanationEN": "a hundred million"
    },
    {
      "character": "𗨅",
      "reading": "lhə¹",
      "explanationEN": "frivolous"
    },
    {
      "character": "𗩱",
      "reading": "nwi²",
      "explanationEN": "can; to be able to"
    },
    {
      "character": "𗾫",
      "reading": "nse²",
      "explanationEN": "thought"
    },
    {
      "character": "𗻇",
      "reading": "śa²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗨆",
      "reading": "ẓae̱ṃ²",
      "explanationEN": "servant"
    },
    {
      "character": "𗨣",
      "reading": "ġu̱¹",
      "explanationEN": "to agree on"
    },
    {
      "character": "𗦹",
      "reading": "vi¹",
      "explanationEN": "visitor; guest"
    },
    {
      "character": "𗦘",
      "reading": "qhaə̱¹",
      "explanationEN": "quiet"
    },
    {
      "character": "𗼻",
      "reading": "lləh²",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗾖",
      "reading": "ŋġo̱r¹",
      "explanationEN": "man; male"
    },
    {
      "character": "𗤊",
      "reading": "su̱²",
      "explanationEN": "to plot; to scheme; to conspire"
    },
    {
      "character": "𗥄",
      "reading": "təh¹",
      "explanationEN": "often; constantly"
    },
    {
      "character": "𗦸",
      "reading": "nni²",
      "explanationEN": "what; which; how; why"
    },
    {
      "character": "𗽿",
      "reading": "dzu̱²",
      "explanationEN": "pointed; tapering"
    },
    {
      "character": "𗨃",
      "reading": "la̱²",
      "explanationEN": "foolish; stupid"
    },
    {
      "character": "𗪛",
      "reading": "dźwoṃ¹",
      "explanationEN": "to publicize; to propagate"
    },
    {
      "character": "𗼵",
      "reading": "hao̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗩴",
      "reading": "nni̱w²",
      "explanationEN": "good; mercy"
    },
    {
      "character": "𗥝",
      "reading": "ndu̱¹",
      "explanationEN": "slave; servant"
    },
    {
      "character": "𗥠",
      "reading": "mme²",
      "explanationEN": "name; title"
    },
    {
      "character": "𗦻",
      "reading": "mme²",
      "explanationEN": "name; title"
    },
    {
      "character": "𗣧",
      "reading": "pho̱¹",
      "explanationEN": "thin"
    },
    {
      "character": "𗢻",
      "reading": "mi̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣤",
      "reading": "pə¹",
      "explanationEN": "border; boundary"
    },
    {
      "character": "𗤞",
      "reading": "peṃ¹",
      "explanationEN": "tent"
    },
    {
      "character": "𗦼",
      "reading": "źiw¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗤙",
      "reading": "da̱²",
      "explanationEN": "native place; old home"
    },
    {
      "character": "𗬒",
      "reading": "da̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗪋",
      "reading": "ŋkhə²",
      "explanationEN": "line; ranks"
    },
    {
      "character": "𗏭",
      "reading": "ma¹",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗤛",
      "reading": "tśoṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗤐",
      "reading": "qa̱¹",
      "explanationEN": "to combine; to unite"
    },
    {
      "character": "𗦺",
      "reading": "pha̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨀",
      "reading": "dź??",
      "explanationEN": "to abandon; to exempt"
    },
    {
      "character": "𗩝",
      "reading": "peṃh¹",
      "explanationEN": "horn"
    },
    {
      "character": "𗽃",
      "reading": "bu̱¹",
      "explanationEN": "a low bank of earth between fields"
    },
    {
      "character": "𗾣",
      "reading": "dzih²",
      "explanationEN": "extremely high"
    },
    {
      "character": "𗿗",
      "reading": "me̱²",
      "explanationEN": "owl"
    },
    {
      "character": "𗾯",
      "reading": "bo̱ṃh²",
      "explanationEN": "arrow"
    },
    {
      "character": "𗾄",
      "reading": "llə̱h¹",
      "explanationEN": "to bury"
    },
    {
      "character": "𗏾",
      "reading": "la̱²",
      "explanationEN": "grave; tomb"
    },
    {
      "character": "𗪗",
      "reading": "rdzwər¹",
      "explanationEN": "to shiver; to tremble"
    },
    {
      "character": "𗤎",
      "reading": "nsa̱r¹",
      "explanationEN": "to irrigate; to pour"
    },
    {
      "character": "𗦏",
      "reading": "rγər¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗦞",
      "reading": "kwəh¹",
      "explanationEN": "to kowtow; to worship on bended knees"
    },
    {
      "character": "𗨜",
      "reading": "dzi̱¹",
      "explanationEN": "longevity"
    },
    {
      "character": "𗩔",
      "reading": "mi̱²",
      "explanationEN": "shining"
    },
    {
      "character": "𗩞",
      "reading": "bi¹",
      "explanationEN": "down"
    },
    {
      "character": "𗩙",
      "reading": "phu̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗪾",
      "reading": "qu̱h¹",
      "explanationEN": "loose"
    },
    {
      "character": "𗿝",
      "reading": "dzi̱¹",
      "explanationEN": "wild goose"
    },
    {
      "character": "𗦗",
      "reading": "so̱²",
      "explanationEN": "man"
    },
    {
      "character": "𗏩",
      "reading": "bə̱²",
      "explanationEN": "an old-fashioned belt"
    },
    {
      "character": "𗧳",
      "reading": "kha²",
      "explanationEN": "to twine; to wind"
    },
    {
      "character": "𗽻",
      "reading": "qao̱ṃ²",
      "explanationEN": "tool; implement"
    },
    {
      "character": "𗽡",
      "reading": "rver²",
      "explanationEN": "to dig"
    },
    {
      "character": "𗾢",
      "reading": "so̱²",
      "explanationEN": "bird"
    },
    {
      "character": "𗺤",
      "reading": "pə̱¹",
      "explanationEN": "a kind of herb"
    },
    {
      "character": "𗺳",
      "reading": "vah²",
      "explanationEN": "a kind of herb"
    },
    {
      "character": "𗻈",
      "reading": "pu̱¹",
      "explanationEN": "barnyard grass"
    },
    {
      "character": "𗫡",
      "reading": "nə²",
      "explanationEN": "to arrive; to spread"
    },
    {
      "character": "𗩌",
      "reading": "nlhu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗏨",
      "reading": "rγu̱r¹",
      "explanationEN": "corpse"
    },
    {
      "character": "𗥶",
      "reading": "lu²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗧝",
      "reading": "mo²",
      "explanationEN": "to realize"
    },
    {
      "character": "𗩣",
      "reading": "śuh¹",
      "explanationEN": "to scatter; to spill"
    },
    {
      "character": "𗽅",
      "reading": "tṣaə̱¹",
      "explanationEN": "steep"
    },
    {
      "character": "𗦭",
      "reading": "zu̱²",
      "explanationEN": "to eliminate; to clean up"
    },
    {
      "character": "𗻆",
      "reading": "śa²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗤜",
      "reading": "loṃ¹",
      "explanationEN": "ball; ovum"
    },
    {
      "character": "𘚰",
      "reading": "lə¹",
      "explanationEN": "amber"
    },
    {
      "character": "𘚮",
      "reading": "ŋqo̱²",
      "explanationEN": "sail"
    },
    {
      "character": "𗃺",
      "reading": "lə̱¹",
      "explanationEN": "to belch; to breathe ones last"
    },
    {
      "character": "𗾃",
      "reading": "rqha̱r¹",
      "explanationEN": "dry; thirsty"
    },
    {
      "character": "𗃪",
      "reading": "rir²",
      "explanationEN": "level; smooth"
    },
    {
      "character": "𗴖",
      "reading": "ve²",
      "explanationEN": "enemy; foe"
    },
    {
      "character": "𗃹",
      "reading": "sa̱¹",
      "explanationEN": "to be stunned"
    },
    {
      "character": "𘓜",
      "reading": "dzi¹",
      "explanationEN": "narrow"
    },
    {
      "character": "𘓝",
      "reading": "tśə¹",
      "explanationEN": "label; mark"
    },
    {
      "character": "𗎫",
      "reading": "rtser²",
      "explanationEN": "nature; character"
    },
    {
      "character": "𗄻",
      "reading": "nwə̱¹",
      "explanationEN": "to know; to realize"
    },
    {
      "character": "𗅄",
      "reading": "la̱h¹",
      "explanationEN": "thick"
    },
    {
      "character": "𗄯",
      "reading": "me̱¹",
      "explanationEN": "clear; obvious"
    },
    {
      "character": "𗅍",
      "reading": "lweṃh¹",
      "explanationEN": "ignorant; muddle-headed"
    },
    {
      "character": "𗆩",
      "reading": "phə̱²",
      "explanationEN": "toil"
    },
    {
      "character": "𗁻",
      "reading": "lheh²",
      "explanationEN": "skeleton; marrow"
    },
    {
      "character": "𗡼",
      "reading": "rber²",
      "explanationEN": "to help; to aid"
    },
    {
      "character": "𗆙",
      "reading": "nlhi¹",
      "explanationEN": "warm"
    },
    {
      "character": "𗅦",
      "reading": "γu̱²",
      "explanationEN": "anger"
    },
    {
      "character": "𗅂",
      "reading": "rar¹",
      "explanationEN": "to manage; ministry"
    },
    {
      "character": "𗅃",
      "reading": "lwuh¹",
      "explanationEN": "level; smooth (land)"
    },
    {
      "character": "𗁌",
      "reading": "rdi̱r²",
      "explanationEN": "to grind"
    },
    {
      "character": "𗂝",
      "reading": "dźih¹",
      "explanationEN": "to cut; to reap"
    },
    {
      "character": "𗂣",
      "reading": "vi¹",
      "explanationEN": "year; age"
    },
    {
      "character": "𗁜",
      "reading": "rvor¹",
      "explanationEN": "backbone"
    },
    {
      "character": "𗂩",
      "reading": "ru̱r¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗹳",
      "reading": "dźe²",
      "explanationEN": "principle; discipline"
    },
    {
      "character": "𗹠",
      "reading": "rer¹",
      "explanationEN": "skilful; ingenious"
    },
    {
      "character": "𗹸",
      "reading": "lhuo¹",
      "explanationEN": "grave"
    },
    {
      "character": "𗹼",
      "reading": "qhwaa̱¹",
      "explanationEN": "kidney"
    },
    {
      "character": "𗇀",
      "reading": "phə̱²",
      "explanationEN": "to throw; to abandon"
    },
    {
      "character": "𗊷",
      "reading": "reṃ²",
      "explanationEN": "cold"
    },
    {
      "character": "𗢖",
      "reading": "tshweṃ¹",
      "explanationEN": "stupor; coma"
    },
    {
      "character": "𗏃",
      "reading": "ye¹",
      "explanationEN": "an ancient unit of weight (1/24 liang)"
    },
    {
      "character": "𗏀",
      "reading": "mi̱²",
      "explanationEN": "dust"
    },
    {
      "character": "𗋐",
      "reading": "tśhu¹",
      "explanationEN": "to exist.ᴀ(inside); to have.ᴀ"
    },
    {
      "character": "𗋪",
      "reading": "vwo̱h¹",
      "explanationEN": "circle"
    },
    {
      "character": "𗋡",
      "reading": "nnaa̱²",
      "explanationEN": "colored glaze"
    },
    {
      "character": "𗌈",
      "reading": "rmu̱r¹",
      "explanationEN": "confusion"
    },
    {
      "character": "𗢜",
      "reading": "???",
      "explanationEN": "to die"
    },
    {
      "character": "𗌓",
      "reading": "???",
      "explanationEN": "butter"
    },
    {
      "character": "𗇈",
      "reading": "qhwa̱²",
      "explanationEN": "cloth"
    },
    {
      "character": "𗊟",
      "reading": "nso̱¹",
      "explanationEN": "sound"
    },
    {
      "character": "𗊹",
      "reading": "low¹",
      "explanationEN": "winding; crooked"
    },
    {
      "character": "𗊈",
      "reading": "hwi̱¹",
      "explanationEN": "to howl"
    },
    {
      "character": "𗊴",
      "reading": "se¹",
      "explanationEN": "blood"
    },
    {
      "character": "𘊈",
      "reading": "rnoṃr²",
      "explanationEN": "to weed"
    },
    {
      "character": "𘓣",
      "reading": "mbaa̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗊢",
      "reading": "nlə¹",
      "explanationEN": "heavy"
    },
    {
      "character": "𗋑",
      "reading": "deṃh²",
      "explanationEN": "cloud"
    },
    {
      "character": "𗤰",
      "reading": "rtśhwər²",
      "explanationEN": "vinegar"
    },
    {
      "character": "𗦠",
      "reading": "nvwə̱¹",
      "explanationEN": "to detest; to abhor"
    },
    {
      "character": "𗽙",
      "reading": "ri̱wr¹",
      "explanationEN": "to tremble"
    },
    {
      "character": "𗾋",
      "reading": "ti̱h¹",
      "explanationEN": "excrement"
    },
    {
      "character": "𗧨",
      "reading": "re̱r²",
      "explanationEN": "to go; to march"
    },
    {
      "character": "𗏒",
      "reading": "du̱h²",
      "explanationEN": "intestines"
    },
    {
      "character": "𗬟",
      "reading": "rzi̱r²",
      "explanationEN": "to expose to sunlight"
    },
    {
      "character": "𗣐",
      "reading": "təh¹",
      "explanationEN": "very fast; rapid"
    },
    {
      "character": "𗥉",
      "reading": "nde̱²",
      "explanationEN": "to detest; to loathe"
    },
    {
      "character": "𗣼",
      "reading": "tśha²",
      "explanationEN": "morals; virtue"
    },
    {
      "character": "𗤝",
      "reading": "tśi¹",
      "explanationEN": "to know"
    },
    {
      "character": "𗥦",
      "reading": "γu̱¹",
      "explanationEN": "head"
    },
    {
      "character": "𗦯",
      "reading": "γu̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗥳",
      "reading": "lih²",
      "explanationEN": "rapid; swift"
    },
    {
      "character": "𗥔",
      "reading": "nlhi̱w²",
      "explanationEN": "to own; to have"
    },
    {
      "character": "𗧏",
      "reading": "tśho¹",
      "explanationEN": "to exist.ʙ(inside); to have.ʙ"
    },
    {
      "character": "𗧇",
      "reading": "rlwə̱r²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨈",
      "reading": "rbi̱r¹",
      "explanationEN": "to reward"
    },
    {
      "character": "𗨨",
      "reading": "ro̱r²",
      "explanationEN": "to circle; to move around"
    },
    {
      "character": "𗽧",
      "reading": "qhwa̱²",
      "explanationEN": "to enclose"
    },
    {
      "character": "𗾦",
      "reading": "tśo¹",
      "explanationEN": "confused; mixed"
    },
    {
      "character": "𗾳",
      "reading": "tśo¹",
      "explanationEN": "hard; difficult"
    },
    {
      "character": "𗿎",
      "reading": "li̱w²",
      "explanationEN": "confused"
    },
    {
      "character": "𗿪",
      "reading": "sa²",
      "explanationEN": "to detest"
    },
    {
      "character": "𗪠",
      "reading": "γu̱¹",
      "explanationEN": "evening"
    },
    {
      "character": "𗪙",
      "reading": "rmu̱r¹",
      "explanationEN": "vulgar"
    },
    {
      "character": "𗽫",
      "reading": "nwe¹",
      "explanationEN": "to swell; to coagulate"
    },
    {
      "character": "𗿇",
      "reading": "rkiwr¹",
      "explanationEN": "egret"
    },
    {
      "character": "𗿵",
      "reading": "γa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘊗",
      "reading": "rkiwr¹",
      "explanationEN": "ant"
    },
    {
      "character": "𗏶",
      "reading": "pho¹",
      "explanationEN": "a kind of tool for divination"
    },
    {
      "character": "𗥹",
      "reading": "lo̱²",
      "explanationEN": "crowd; group"
    },
    {
      "character": "𗥻",
      "reading": "phai̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗫞",
      "reading": "dzih²",
      "explanationEN": "to stand up"
    },
    {
      "character": "𗽚",
      "reading": "qi̱w¹",
      "explanationEN": "farmland"
    },
    {
      "character": "𗏕",
      "reading": "ri̱r²",
      "explanationEN": "weapon"
    },
    {
      "character": "𗤇",
      "reading": "di̱w²",
      "explanationEN": "to obey"
    },
    {
      "character": "𗥞",
      "reading": "ŋgu²",
      "explanationEN": "to rescue; relieve"
    },
    {
      "character": "𗤪",
      "reading": "rŋi̱wr¹",
      "explanationEN": "to ring; to sound"
    },
    {
      "character": "𗥛",
      "reading": "rər¹",
      "explanationEN": "bone"
    },
    {
      "character": "𗥾",
      "reading": "gə²",
      "explanationEN": "skill; scheme; stratagem"
    },
    {
      "character": "𗽕",
      "reading": "qao̱ṃ²",
      "explanationEN": "valley"
    },
    {
      "character": "𗾱",
      "reading": "ne²",
      "explanationEN": "weapon"
    },
    {
      "character": "𘔺",
      "reading": "khi²",
      "explanationEN": "gas"
    },
    {
      "character": "𗣿",
      "reading": "lhweh¹",
      "explanationEN": "face"
    },
    {
      "character": "𗥨",
      "reading": "dźwow¹",
      "explanationEN": "bright; clever"
    },
    {
      "character": "𗩎",
      "reading": "nti̱w²",
      "explanationEN": "scheme; strategy"
    },
    {
      "character": "𗫑",
      "reading": "nu²",
      "explanationEN": "livestock; domestic animal"
    },
    {
      "character": "𗺞",
      "reading": "tu̱h¹",
      "explanationEN": "net"
    },
    {
      "character": "𗻁",
      "reading": "nde̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻫",
      "reading": "rvor²",
      "explanationEN": "nest"
    },
    {
      "character": "𗧢",
      "reading": "də²",
      "explanationEN": "Hunnu people"
    },
    {
      "character": "𗿄",
      "reading": "khu²",
      "explanationEN": "to request; to ask"
    },
    {
      "character": "𗻛",
      "reading": "kiw¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻣",
      "reading": "qhwa̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗺽",
      "reading": "rar²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻑",
      "reading": "ru̱r¹",
      "explanationEN": "to herd; herbage"
    },
    {
      "character": "𗏖",
      "reading": "rer²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣈",
      "reading": "lho̱?",
      "explanationEN": "to go out"
    },
    {
      "character": "𘊝",
      "reading": "ryir²",
      "explanationEN": "hundred"
    },
    {
      "character": "𗽍",
      "reading": "ndwə̱¹",
      "explanationEN": "protruding"
    },
    {
      "character": "𗽎",
      "reading": "ndwə̱¹",
      "explanationEN": "protruding"
    },
    {
      "character": "𗾩",
      "reading": "hwaṃ¹",
      "explanationEN": "county"
    },
    {
      "character": "𗧜",
      "reading": "nlhu̱²",
      "explanationEN": "marrow"
    },
    {
      "character": "𗦅",
      "reading": "ŋkhe¹",
      "explanationEN": "difficult"
    },
    {
      "character": "𗥽",
      "reading": "rtśər²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼲",
      "reading": "mbu²",
      "explanationEN": "mile"
    },
    {
      "character": "𗩈",
      "reading": "mbu²",
      "explanationEN": "to command"
    },
    {
      "character": "𗿢",
      "reading": "rzu̱r²",
      "explanationEN": "imperial edict"
    },
    {
      "character": "𗩍",
      "reading": "nvwə̱¹",
      "explanationEN": "to own; to have"
    },
    {
      "character": "𗻯",
      "reading": "rzu̱r²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗩼",
      "reading": "nla̱¹",
      "explanationEN": "to cherish"
    },
    {
      "character": "𘚩",
      "reading": "qhae̱¹",
      "explanationEN": "north"
    },
    {
      "character": "𘚷",
      "reading": "lə¹",
      "explanationEN": "round bone"
    },
    {
      "character": "𘓡",
      "reading": "rur¹",
      "explanationEN": "to cherish"
    },
    {
      "character": "𗼙",
      "reading": "γu̱²",
      "explanationEN": "emperor"
    },
    {
      "character": "𗼑",
      "reading": "lhih²",
      "explanationEN": "the moon"
    },
    {
      "character": "𗼒",
      "reading": "qhu̱¹",
      "explanationEN": "to tribute; to consecrate"
    },
    {
      "character": "𗼝",
      "reading": "lo¹",
      "explanationEN": "round bone"
    },
    {
      "character": "𗅽",
      "reading": "ti̱w¹",
      "explanationEN": "dim; foolish"
    },
    {
      "character": "𗃂",
      "reading": "qhə̱h¹",
      "explanationEN": "to rock; to sway; to shake"
    },
    {
      "character": "𗆔",
      "reading": "qa̱h²",
      "explanationEN": "discipline"
    },
    {
      "character": "𗎮",
      "reading": "vuh²",
      "explanationEN": "village; hamlet"
    },
    {
      "character": "𗎲",
      "reading": "dźwe²",
      "explanationEN": "to move; to migrate"
    },
    {
      "character": "𗁳",
      "reading": "yaw²",
      "explanationEN": "horn"
    },
    {
      "character": "𗄷",
      "reading": "mə̱²",
      "explanationEN": "to give birth to; to bear"
    },
    {
      "character": "𗢂",
      "reading": "hə̱²",
      "explanationEN": "Chinese parasol tree"
    },
    {
      "character": "𗆇",
      "reading": "rŋwə̱r²",
      "explanationEN": "to heal; to recover"
    },
    {
      "character": "𗅛",
      "reading": "leṃ²",
      "explanationEN": "the sun"
    },
    {
      "character": "𗆂",
      "reading": "phe̱¹",
      "explanationEN": "to tie up; to truss up; to restrict"
    },
    {
      "character": "𗂛",
      "reading": "bə̱²",
      "explanationEN": "to bear (a burden); to shoulder"
    },
    {
      "character": "𗹶",
      "reading": "dau̱¹",
      "explanationEN": "building"
    },
    {
      "character": "𗅮",
      "reading": "du¹",
      "explanationEN": "to announce; to accuse"
    },
    {
      "character": "𗂐",
      "reading": "tshwa̱¹",
      "explanationEN": "to invade and harass; to impale"
    },
    {
      "character": "𗁽",
      "reading": "tshe̱¹",
      "explanationEN": "to invade and harass"
    },
    {
      "character": "𗅆",
      "reading": "deṃ²",
      "explanationEN": "calm; quiet"
    },
    {
      "character": "𗹿",
      "reading": "de̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗎯",
      "reading": "vu²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗎱",
      "reading": "rtser²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗆌",
      "reading": "bu̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗂓",
      "reading": "ti̱w¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗂀",
      "reading": "qo̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗢆",
      "reading": "śwə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗎳",
      "reading": "qha̱²",
      "explanationEN": "intestines"
    },
    {
      "character": "𘝓",
      "reading": "śwu¹",
      "explanationEN": "to rest"
    },
    {
      "character": "𗊼",
      "reading": "da̱h²",
      "explanationEN": "to fluctuate"
    },
    {
      "character": "𗢑",
      "reading": "rir²",
      "explanationEN": "disease"
    },
    {
      "character": "𗊭",
      "reading": "se̱¹",
      "explanationEN": "dropsy; edema"
    },
    {
      "character": "𗌞",
      "reading": "nna̱²",
      "explanationEN": "flood; floodwater"
    },
    {
      "character": "𘓥",
      "reading": "γu̱h²",
      "explanationEN": "to bear (a burden)"
    },
    {
      "character": "𗢢",
      "reading": "dzih²",
      "explanationEN": "grave; cemetery"
    },
    {
      "character": "𗋲",
      "reading": "lai̱h¹",
      "explanationEN": "to wash; to clean"
    },
    {
      "character": "𘉿",
      "reading": "tsu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗊥",
      "reading": "mə̱²",
      "explanationEN": "moist; smooth"
    },
    {
      "character": "𗢳",
      "reading": "tha̱¹",
      "explanationEN": "Buddha"
    },
    {
      "character": "𗦚",
      "reading": "tsho̱ṃ¹",
      "explanationEN": "to chop; to cut"
    },
    {
      "character": "𗣱",
      "reading": "dzih²",
      "explanationEN": "to cover; to overspread"
    },
    {
      "character": "𗾛",
      "reading": "nu²",
      "explanationEN": "to fall"
    },
    {
      "character": "𗿚",
      "reading": "haa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗥓",
      "reading": "ŋo̱²",
      "explanationEN": "illness; disease"
    },
    {
      "character": "𗧥",
      "reading": "rzir²",
      "explanationEN": "long"
    },
    {
      "character": "𗩪",
      "reading": "lhao̱h²",
      "explanationEN": "great-great-grandson"
    },
    {
      "character": "𗩄",
      "reading": "do̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗽬",
      "reading": "tshih¹",
      "explanationEN": "soil; land"
    },
    {
      "character": "𗫌",
      "reading": "ni¹",
      "explanationEN": "family; house"
    },
    {
      "character": "𗏦",
      "reading": "ba²",
      "explanationEN": "saddle"
    },
    {
      "character": "𗪏",
      "reading": "si¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗪚",
      "reading": "dau̱¹",
      "explanationEN": "peaceful"
    },
    {
      "character": "𗪩",
      "reading": "peṃh¹",
      "explanationEN": "physical strength of arms"
    },
    {
      "character": "𗪐",
      "reading": "qae̱²",
      "explanationEN": "person"
    },
    {
      "character": "𗾸",
      "reading": "bi̱¹",
      "explanationEN": "disease"
    },
    {
      "character": "𗩅",
      "reading": "lhoṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗧩",
      "reading": "bo̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗽁",
      "reading": "γəh¹",
      "explanationEN": "tile; pottery"
    },
    {
      "character": "𗩇",
      "reading": "vwi̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗿡",
      "reading": "vwi̱ṃ¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𗦔",
      "reading": "so̱²",
      "explanationEN": "servant"
    },
    {
      "character": "𗩃",
      "reading": "???",
      "explanationEN": "pointed end; point"
    },
    {
      "character": "𗦓",
      "reading": "də¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘔻",
      "reading": "kho²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗩁",
      "reading": "bai̱h¹",
      "explanationEN": "willow"
    },
    {
      "character": "𗪹",
      "reading": "dzo̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗻮",
      "reading": "llae̱h¹",
      "explanationEN": "a tree name"
    },
    {
      "character": "𗻴",
      "reading": "tho̱ṃh¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗩆",
      "reading": "gwi²",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗫗",
      "reading": "rgwər²",
      "explanationEN": "window"
    },
    {
      "character": "𗦟",
      "reading": "mə̱²",
      "explanationEN": "vigor; appearance"
    },
    {
      "character": "𗫃",
      "reading": "pho̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗺿",
      "reading": "pa̱h²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗽳",
      "reading": "dzeṃ²",
      "explanationEN": "brick"
    },
    {
      "character": "𗤳",
      "reading": "mə̱²",
      "explanationEN": "surname"
    },
    {
      "character": "𗽊",
      "reading": "mme̱²",
      "explanationEN": "cave"
    },
    {
      "character": "𗾨",
      "reading": "rmə̱r²",
      "explanationEN": "crane"
    },
    {
      "character": "𘊕",
      "reading": "dźe²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗧪",
      "reading": "pe̱¹",
      "explanationEN": "first"
    },
    {
      "character": "𗿒",
      "reading": "qhwe̱²",
      "explanationEN": "big; large"
    },
    {
      "character": "𘊡",
      "reading": "lu̱²",
      "explanationEN": "season"
    },
    {
      "character": "𘚲",
      "reading": "lə¹",
      "explanationEN": "cold (disease)"
    },
    {
      "character": "𘓑",
      "reading": "γwaa̱ṃ¹",
      "explanationEN": "foolish; stupid"
    },
    {
      "character": "𗬲",
      "reading": "ndaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗃯",
      "reading": "də¹",
      "explanationEN": "to fall ill frequently"
    },
    {
      "character": "𗴣",
      "reading": "rvwə̱r¹",
      "explanationEN": "to admire; to respect"
    },
    {
      "character": "𘓘",
      "reading": "gu¹",
      "explanationEN": "hot; painful"
    },
    {
      "character": "𗴝",
      "reading": "zi̱w²",
      "explanationEN": "a kind of jadeware"
    },
    {
      "character": "𗆋",
      "reading": "śwə¹",
      "explanationEN": "to cry; to weep"
    },
    {
      "character": "𗆆",
      "reading": "qwae̱ṃ¹",
      "explanationEN": "clumsy"
    },
    {
      "character": "𗂬",
      "reading": "ryar²",
      "explanationEN": "to marry"
    },
    {
      "character": "𗪎",
      "reading": "ni²",
      "explanationEN": "to force; to compel"
    },
    {
      "character": "𘀀",
      "reading": "rdwə̱r¹",
      "explanationEN": "to be tired of"
    },
    {
      "character": "𗀼",
      "reading": "qa̱h²",
      "explanationEN": "a small steelyard for weighing gold, medicine, etc."
    },
    {
      "character": "𗁺",
      "reading": "rkir¹",
      "explanationEN": "clumsy; awkward; stupid"
    },
    {
      "character": "𗅐",
      "reading": "la̱²",
      "explanationEN": "true; real; honest"
    },
    {
      "character": "𗅻",
      "reading": "tshə¹",
      "explanationEN": "lamb"
    },
    {
      "character": "𗅑",
      "reading": "meh¹",
      "explanationEN": "morning; dawn"
    },
    {
      "character": "𗆮",
      "reading": "lhwow¹",
      "explanationEN": "to return; to retreat"
    },
    {
      "character": "𗅏",
      "reading": "lah²",
      "explanationEN": "to pierce; to through; to penetrate"
    },
    {
      "character": "𗅝",
      "reading": "beh¹",
      "explanationEN": "foolish; stupid"
    },
    {
      "character": "𗅾",
      "reading": "no̱¹",
      "explanationEN": "rib"
    },
    {
      "character": "𗆿",
      "reading": "rphaa̱r¹",
      "explanationEN": "to disorder; loose"
    },
    {
      "character": "𗅓",
      "reading": "ne²",
      "explanationEN": "mountain"
    },
    {
      "character": "𗂾",
      "reading": "mo̱²",
      "explanationEN": "devil; demon"
    },
    {
      "character": "𗁗",
      "reading": "me²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗂈",
      "reading": "źəh¹",
      "explanationEN": "left side"
    },
    {
      "character": "𗃋",
      "reading": "rver²",
      "explanationEN": "to hug; to hold up"
    },
    {
      "character": "𗂺",
      "reading": "lhəh¹",
      "explanationEN": "to flog; to beat"
    },
    {
      "character": "𗁡",
      "reading": "phi¹",
      "explanationEN": "dustpan"
    },
    {
      "character": "𘈻",
      "reading": "rvwə̱r¹",
      "explanationEN": "to breed; to give birth to; to bear"
    },
    {
      "character": "𘈾",
      "reading": "du¹",
      "explanationEN": "how long; when"
    },
    {
      "character": "𗎨",
      "reading": "vu²",
      "explanationEN": "intestines"
    },
    {
      "character": "𗄫",
      "reading": "li̱w?",
      "explanationEN": "nature; temperament"
    },
    {
      "character": "𗡺",
      "reading": "rber²",
      "explanationEN": "to explain; to note"
    },
    {
      "character": "𗅪",
      "reading": "qwae̱¹",
      "explanationEN": "to lose"
    },
    {
      "character": "𗁏",
      "reading": "ŋko¹",
      "explanationEN": "to bite"
    },
    {
      "character": "𗄾",
      "reading": "se̱¹",
      "explanationEN": "to calculate; to count"
    },
    {
      "character": "𗅴",
      "reading": "lae̱h²",
      "explanationEN": "avarice"
    },
    {
      "character": "𗅳",
      "reading": "ŋġe̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗆝",
      "reading": "rə̱r²",
      "explanationEN": "tooth"
    },
    {
      "character": "𗆷",
      "reading": "lla̱h²",
      "explanationEN": "many; dense"
    },
    {
      "character": "𗁋",
      "reading": "taw¹",
      "explanationEN": "to drip"
    },
    {
      "character": "𗂧",
      "reading": "lheh²",
      "explanationEN": "country; nation"
    },
    {
      "character": "𗅅",
      "reading": "yiw²",
      "explanationEN": "to harm"
    },
    {
      "character": "𗂆",
      "reading": "zeh¹",
      "explanationEN": "to hit; to touch; to fit exactly"
    },
    {
      "character": "𗁾",
      "reading": "ta̱h¹",
      "explanationEN": "to rest; to stop"
    },
    {
      "character": "𗁙",
      "reading": "rkər²",
      "explanationEN": "fence, fold"
    },
    {
      "character": "𗁚",
      "reading": "rkər²",
      "explanationEN": "fence, fold"
    },
    {
      "character": "𗁢",
      "reading": "nlhaa̱²",
      "explanationEN": "to fall; to drop"
    },
    {
      "character": "𗂨",
      "reading": "tśoh²",
      "explanationEN": "ashamed"
    },
    {
      "character": "𗂋",
      "reading": "rnar¹",
      "explanationEN": "to flip; to play (a stringed musical instrument)"
    },
    {
      "character": "𗂰",
      "reading": "li²",
      "explanationEN": "west"
    },
    {
      "character": "𗁀",
      "reading": "qo̱¹",
      "explanationEN": "to put (the palms together)"
    },
    {
      "character": "𗂌",
      "reading": "yo̱r¹",
      "explanationEN": "firm; strong"
    },
    {
      "character": "𗀽",
      "reading": "ti̱w¹",
      "explanationEN": "to pound with a pestle; to beat"
    },
    {
      "character": "𗹱",
      "reading": "hae̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗹽",
      "reading": "tṣae̱h¹",
      "explanationEN": "to encircle; to go round"
    },
    {
      "character": "𗹾",
      "reading": "phe¹",
      "explanationEN": "former times; in the past"
    },
    {
      "character": "𗅩",
      "reading": "lwo̱ṃ¹",
      "explanationEN": "absurd; unexpected"
    },
    {
      "character": "𗃌",
      "reading": "rver²",
      "explanationEN": "to hug; to hold up"
    },
    {
      "character": "𗀶",
      "reading": "tho̱ṃ¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗀴",
      "reading": "???",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗁖",
      "reading": "doh²",
      "explanationEN": "to build; to treat (a disease)"
    },
    {
      "character": "𗁿",
      "reading": "ta̱h¹",
      "explanationEN": "to rest; to stop"
    },
    {
      "character": "𗁵",
      "reading": "ye²",
      "explanationEN": "knitting wool"
    },
    {
      "character": "𗁎",
      "reading": "dźih²",
      "explanationEN": "ox; cattle"
    },
    {
      "character": "𗅗",
      "reading": "me̱¹",
      "explanationEN": "to kneel"
    },
    {
      "character": "𗢃",
      "reading": "rgwər¹",
      "explanationEN": "to rise; to grow"
    },
    {
      "character": "𗅷",
      "reading": "dẓae̱ṃ?",
      "explanationEN": "tooth"
    },
    {
      "character": "𗡾",
      "reading": "no̱²",
      "explanationEN": "to like; to love; to desire"
    },
    {
      "character": "𗆑",
      "reading": "ŋga²",
      "explanationEN": "to swallow"
    },
    {
      "character": "𗆺",
      "reading": "lwo̱ṃ¹",
      "explanationEN": "lazy; slow"
    },
    {
      "character": "𗆗",
      "reading": "qae̱¹",
      "explanationEN": "short"
    },
    {
      "character": "𗇂",
      "reading": "rsa̱r²",
      "explanationEN": "to spread; to break up"
    },
    {
      "character": "𗆨",
      "reading": "meh²",
      "explanationEN": "laborer; physical labor"
    },
    {
      "character": "𗂪",
      "reading": "rŋər²",
      "explanationEN": "sheep; goat"
    },
    {
      "character": "𗂉",
      "reading": "nvwi̱¹",
      "explanationEN": "to lose; to be in debt"
    },
    {
      "character": "𗁘",
      "reading": "rer²",
      "explanationEN": "to distend"
    },
    {
      "character": "𗃍",
      "reading": "ŋa̱¹",
      "explanationEN": "to spread"
    },
    {
      "character": "𗁞",
      "reading": "tśhaw²",
      "explanationEN": "cui, a traditional unit of length"
    },
    {
      "character": "𗹣",
      "reading": "ŋwu̱²",
      "explanationEN": "room; house"
    },
    {
      "character": "𘉀",
      "reading": "rtser¹",
      "explanationEN": "government official"
    },
    {
      "character": "𘈼",
      "reading": "ma̱²",
      "explanationEN": "in the past"
    },
    {
      "character": "𗁹",
      "reading": "tha̱²",
      "explanationEN": "narrowness"
    },
    {
      "character": "𗹫",
      "reading": "te²",
      "explanationEN": "good"
    },
    {
      "character": "𗀻",
      "reading": "tshwiṃ¹",
      "explanationEN": "cun, a traditional unit of length"
    },
    {
      "character": "𗁴",
      "reading": "lləh¹",
      "explanationEN": "son's wife; daughter-in-law"
    },
    {
      "character": "𗄰",
      "reading": "phə̱²",
      "explanationEN": "dried; dry"
    },
    {
      "character": "𗅒",
      "reading": "dzwa̱¹",
      "explanationEN": "short; brief"
    },
    {
      "character": "𗅁",
      "reading": "γu̱²",
      "explanationEN": "INE: inessive case; inner, inside"
    },
    {
      "character": "𗆄",
      "reading": "puh¹",
      "explanationEN": "measure; price"
    },
    {
      "character": "𗁥",
      "reading": "tśoh²",
      "explanationEN": "heavy"
    },
    {
      "character": "𗂫",
      "reading": "guh²",
      "explanationEN": "penis"
    },
    {
      "character": "𗂹",
      "reading": "lhəh¹",
      "explanationEN": "to flog; to beat"
    },
    {
      "character": "𗁩",
      "reading": "ti̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗃄",
      "reading": "lwə²",
      "explanationEN": "fat; grease"
    },
    {
      "character": "𗁤",
      "reading": "dzə¹",
      "explanationEN": "tiger"
    },
    {
      "character": "𗀾",
      "reading": "rtsi̱wr¹",
      "explanationEN": "cup"
    },
    {
      "character": "𗹲",
      "reading": "ba²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗹷",
      "reading": "rŋo̱ṃr²",
      "explanationEN": "anger; fury"
    },
    {
      "character": "𗐛",
      "reading": "rvwa̱r²",
      "explanationEN": "gathering; numerous"
    },
    {
      "character": "𗶨",
      "reading": "rda̱r¹",
      "explanationEN": "to reach"
    },
    {
      "character": "𗶫",
      "reading": "liw²",
      "explanationEN": "exhausted; be used up"
    },
    {
      "character": "𗋭",
      "reading": "dih¹",
      "explanationEN": "to sink"
    },
    {
      "character": "𗌥",
      "reading": "pah¹",
      "explanationEN": "dregs; residue"
    },
    {
      "character": "𗴭",
      "reading": "swu̱²",
      "explanationEN": "similarity"
    },
    {
      "character": "𗊀",
      "reading": "γu¹",
      "explanationEN": "ditch; gully"
    },
    {
      "character": "𗌁",
      "reading": "dih¹",
      "explanationEN": "toil"
    },
    {
      "character": "𗌢",
      "reading": "gu¹",
      "explanationEN": "bridge"
    },
    {
      "character": "𗢛",
      "reading": "yu¹",
      "explanationEN": "ghost; spirit"
    },
    {
      "character": "𗊽",
      "reading": "bəh¹",
      "explanationEN": "tear; teardrop"
    },
    {
      "character": "𗐒",
      "reading": "γa²",
      "explanationEN": "fast; rapid"
    },
    {
      "character": "𗴫",
      "reading": "ki¹",
      "explanationEN": "to sing"
    },
    {
      "character": "𗌕",
      "reading": "kar²",
      "explanationEN": "net"
    },
    {
      "character": "𗌕",
      "reading": "kar²",
      "explanationEN": "cover; lid; to cover"
    },
    {
      "character": "𗐜",
      "reading": "γa²",
      "explanationEN": "quail"
    },
    {
      "character": "𘔿",
      "reading": "rlho̱ṃr²",
      "explanationEN": "eye socket"
    },
    {
      "character": "𗋆",
      "reading": "rqhwa̱r²",
      "explanationEN": "fountainhead; well-spring"
    },
    {
      "character": "𗊓",
      "reading": "mə̱²",
      "explanationEN": "moist; rain; pool"
    },
    {
      "character": "𗋩",
      "reading": "rvwi̱r²",
      "explanationEN": "canal; ditch"
    },
    {
      "character": "𗋊",
      "reading": "re̱r²",
      "explanationEN": "a ghost name"
    },
    {
      "character": "𘊍",
      "reading": "po̱¹",
      "explanationEN": "to capture; to gain"
    },
    {
      "character": "𗐗",
      "reading": "lhuh²",
      "explanationEN": "aspiration; ideal; able; capable"
    },
    {
      "character": "𗐙",
      "reading": "ndu̱²",
      "explanationEN": "kind; type"
    },
    {
      "character": "𗴮",
      "reading": "deh¹",
      "explanationEN": "cover; lid"
    },
    {
      "character": "𗐍",
      "reading": "ke̱?",
      "explanationEN": "to analyze"
    },
    {
      "character": "𗉻",
      "reading": "tshe¹",
      "explanationEN": "reality; accuracy"
    },
    {
      "character": "𘉥",
      "reading": "dźaw¹",
      "explanationEN": "chapters and sections"
    },
    {
      "character": "𘉦",
      "reading": "dźaw¹",
      "explanationEN": "dark"
    },
    {
      "character": "𗘰",
      "reading": "mbaa̱²",
      "explanationEN": "tasteless"
    },
    {
      "character": "𗉼",
      "reading": "γa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗊺",
      "reading": "ha̱²",
      "explanationEN": "barnyard grass"
    },
    {
      "character": "𗌀",
      "reading": "ha̱²",
      "explanationEN": "marsh"
    },
    {
      "character": "𗉸",
      "reading": "ho̱ṃ²",
      "explanationEN": "lining; inside"
    },
    {
      "character": "𗊬",
      "reading": "qu̱h²",
      "explanationEN": "servant"
    },
    {
      "character": "𗌏",
      "reading": "ryur²",
      "explanationEN": "to murder"
    },
    {
      "character": "𗢎",
      "reading": "rγa̱r¹",
      "explanationEN": "to ridicule; to slander"
    },
    {
      "character": "𘉪",
      "reading": "nwo²",
      "explanationEN": "moisture"
    },
    {
      "character": "𗊋",
      "reading": "tsi²",
      "explanationEN": "victory"
    },
    {
      "character": "𘚁",
      "reading": "vi̱h¹",
      "explanationEN": "peace; adore"
    },
    {
      "character": "𗋥",
      "reading": "rvwi̱r¹",
      "explanationEN": "to cherish; to stint"
    },
    {
      "character": "𗌤",
      "reading": "???",
      "explanationEN": "a kind of food"
    },
    {
      "character": "𗋏",
      "reading": "thwu̱²",
      "explanationEN": "teapoy"
    },
    {
      "character": "𗐏",
      "reading": "lhuh²",
      "explanationEN": "dignified; true meaning"
    },
    {
      "character": "𘉢",
      "reading": "dweh¹",
      "explanationEN": "to choke; to stifle"
    },
    {
      "character": "𗐓",
      "reading": "swə¹",
      "explanationEN": "water spring"
    },
    {
      "character": "𗊑",
      "reading": "dzwaṃ¹",
      "explanationEN": "sweat; perspiration"
    },
    {
      "character": "𗊌",
      "reading": "nu¹",
      "explanationEN": "a thin white silk used in ancient China, plain color"
    },
    {
      "character": "𗊶",
      "reading": "lhu¹",
      "explanationEN": "to breed"
    },
    {
      "character": "𗋿",
      "reading": "ryur¹",
      "explanationEN": "to arrive"
    },
    {
      "character": "𗐘",
      "reading": "qho̱¹",
      "explanationEN": "grave"
    },
    {
      "character": "𗢐",
      "reading": "γu̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗊛",
      "reading": "tshi̱w¹",
      "explanationEN": "a nail"
    },
    {
      "character": "𗊄",
      "reading": "teṃ¹",
      "explanationEN": "a bottle"
    },
    {
      "character": "𗊰",
      "reading": "lu²",
      "explanationEN": "strong; brave"
    },
    {
      "character": "𗊵",
      "reading": "tśhu¹",
      "explanationEN": "to melt; to thaw; to confess"
    },
    {
      "character": "𗌍",
      "reading": "rhwa̱r¹",
      "explanationEN": "blood stasis"
    },
    {
      "character": "𗌎",
      "reading": "dih¹",
      "explanationEN": "sweet; honeyed"
    },
    {
      "character": "𗋔",
      "reading": "thwi¹",
      "explanationEN": "water; dew"
    },
    {
      "character": "𗌜",
      "reading": "rnor¹",
      "explanationEN": "to cross; to tide over"
    },
    {
      "character": "𗌗",
      "reading": "gu¹",
      "explanationEN": "cow disease"
    },
    {
      "character": "𗢚",
      "reading": "zoh¹",
      "explanationEN": "mouth"
    },
    {
      "character": "𗋈",
      "reading": "ŋwu̱²",
      "explanationEN": "cattail"
    },
    {
      "character": "𗋬",
      "reading": "pho̱¹",
      "explanationEN": "fish"
    },
    {
      "character": "𗋾",
      "reading": "źu²",
      "explanationEN": "water"
    },
    {
      "character": "𗋽",
      "reading": "rzər²",
      "explanationEN": "to mix; to stir; to blend"
    },
    {
      "character": "𗌛",
      "reading": "rhwa̱r¹",
      "explanationEN": "wild goose"
    },
    {
      "character": "𗌋",
      "reading": "ha̱²",
      "explanationEN": "to putty; to spread on"
    },
    {
      "character": "𗌒",
      "reading": "rtṣao̱r²",
      "explanationEN": "to burst; to split; to break"
    },
    {
      "character": "𘉲",
      "reading": "giw²",
      "explanationEN": "hot; smelly"
    },
    {
      "character": "𘊃",
      "reading": "seh²",
      "explanationEN": "indignation"
    },
    {
      "character": "𘊌",
      "reading": "dẓai̱w¹",
      "explanationEN": "milk; butter"
    },
    {
      "character": "𗌙",
      "reading": "lhu¹",
      "explanationEN": "moisture; drop"
    },
    {
      "character": "𗌬",
      "reading": "rdawr²",
      "explanationEN": "to wash; to bathe"
    },
    {
      "character": "𗋝",
      "reading": "lwu̱²",
      "explanationEN": "to wash; to bathe"
    },
    {
      "character": "𗌚",
      "reading": "neṃh²",
      "explanationEN": "an overcast sky"
    },
    {
      "character": "𗋦",
      "reading": "lhu¹",
      "explanationEN": "to increase; to add"
    },
    {
      "character": "𗊂",
      "reading": "dzwəh¹",
      "explanationEN": "boat; ship"
    },
    {
      "character": "𗊔",
      "reading": "baa̱²",
      "explanationEN": "to mix"
    },
    {
      "character": "𗢏",
      "reading": "si²",
      "explanationEN": "PFV: to die "
    },
    {
      "character": "𗊉",
      "reading": "noh¹",
      "explanationEN": "lubrication; oiliness"
    },
    {
      "character": "𗋫",
      "reading": "ti̱w¹",
      "explanationEN": "to overflow; to spill"
    },
    {
      "character": "𗋃",
      "reading": "si¹",
      "explanationEN": "limit; end"
    },
    {
      "character": "𗢒",
      "reading": "dzu̱²",
      "explanationEN": "horse disease"
    },
    {
      "character": "𗋇",
      "reading": "γu¹",
      "explanationEN": "bent"
    },
    {
      "character": "𗋅",
      "reading": "lwu̱¹",
      "explanationEN": "to mix; to blend"
    },
    {
      "character": "𘉱",
      "reading": "nśiw¹",
      "explanationEN": "to divine disease; to diagnose"
    },
    {
      "character": "𗋛",
      "reading": "nwəh¹",
      "explanationEN": "moisture; sweat"
    },
    {
      "character": "𘉾",
      "reading": "veh¹",
      "explanationEN": "excrement; faeces; dung"
    },
    {
      "character": "𗌪",
      "reading": "lwə¹",
      "explanationEN": "tear"
    },
    {
      "character": "𗐔",
      "reading": "rγa̱r²",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗊒",
      "reading": "pah¹",
      "explanationEN": "dregs"
    },
    {
      "character": "𗊣",
      "reading": "qu̱h²",
      "explanationEN": "gargle; rinse"
    },
    {
      "character": "𗘱",
      "reading": "ŋŋwu̱¹",
      "explanationEN": "to submit"
    },
    {
      "character": "𗾆",
      "reading": "dźiw¹",
      "explanationEN": "waist"
    },
    {
      "character": "𗐈",
      "reading": "be¹",
      "explanationEN": "dung beetles"
    },
    {
      "character": "𗐆",
      "reading": "tśoh¹",
      "explanationEN": "ugly"
    },
    {
      "character": "𗐇",
      "reading": "lho̱ṃh²",
      "explanationEN": "ugly"
    },
    {
      "character": "𗫱",
      "reading": "khaṃ¹",
      "explanationEN": "dangerous"
    },
    {
      "character": "𗫶",
      "reading": "de²",
      "explanationEN": "TESTM: testimonial DUR: durative"
    },
    {
      "character": "𗫷",
      "reading": "de²",
      "explanationEN": "a place name; a surname"
    },
    {
      "character": "𗫲",
      "reading": "khe¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗬀",
      "reading": "lwu̱²",
      "explanationEN": "to hide; to conceal"
    },
    {
      "character": "𗫿",
      "reading": "kwi¹",
      "explanationEN": "used; worn; old"
    },
    {
      "character": "𗬄",
      "reading": "tswa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗬁",
      "reading": "deṃ²",
      "explanationEN": "to stop; to abolish"
    },
    {
      "character": "𗫻",
      "reading": "ndźe¹",
      "explanationEN": "to live; to stay; to exist"
    },
    {
      "character": "𗬃",
      "reading": "si̱¹",
      "explanationEN": "intention; intent; word; term"
    },
    {
      "character": "𗫸",
      "reading": "yih²",
      "explanationEN": "again"
    },
    {
      "character": "𗬇",
      "reading": "la̱²",
      "explanationEN": "recreation; to lead a chorus"
    },
    {
      "character": "𗬈",
      "reading": "vwi̱²",
      "explanationEN": "entertaimnent; recreation; to lead a chorus"
    },
    {
      "character": "𗏗",
      "reading": "dź??",
      "explanationEN": "empty; unoccupied"
    },
    {
      "character": "𗨭",
      "reading": "źeh¹",
      "explanationEN": "disease; illness"
    },
    {
      "character": "𗨥",
      "reading": "twə¹",
      "explanationEN": "an auxiliary word"
    },
    {
      "character": "𗩲",
      "reading": "vi²",
      "explanationEN": "host; master"
    },
    {
      "character": "𗽩",
      "reading": "tih²",
      "explanationEN": "dry"
    },
    {
      "character": "𗾏",
      "reading": "rvwi̱r¹",
      "explanationEN": "crane"
    },
    {
      "character": "𗾷",
      "reading": "dźih?",
      "explanationEN": "owlet"
    },
    {
      "character": "𗿣",
      "reading": "rmer²",
      "explanationEN": "god; magic power"
    },
    {
      "character": "𗏞",
      "reading": "u¹",
      "explanationEN": "ghost; spirit"
    },
    {
      "character": "𗢭",
      "reading": "ŋgə¹",
      "explanationEN": "nine"
    },
    {
      "character": "𗣂",
      "reading": "lhə¹",
      "explanationEN": "a kind of shell which looks like a jade; dress and personal adornment; dress"
    },
    {
      "character": "𗣡",
      "reading": "thə²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨡",
      "reading": "deh¹",
      "explanationEN": "trough; cup"
    },
    {
      "character": "𗨶",
      "reading": "to̱²",
      "explanationEN": "to cry; to weep"
    },
    {
      "character": "𗥑",
      "reading": "hu̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗫔",
      "reading": "yi¹",
      "explanationEN": "many; numerous"
    },
    {
      "character": "𗣹",
      "reading": "tsi²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗤹",
      "reading": "γu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗽌",
      "reading": "yae̱ṃh²",
      "explanationEN": "gully; ditch"
    },
    {
      "character": "𗫛",
      "reading": "lih²",
      "explanationEN": "to sing"
    },
    {
      "character": "𗧸",
      "reading": "zeh²",
      "explanationEN": "many; much; numerous"
    },
    {
      "character": "𘔽",
      "reading": "nuo¹",
      "explanationEN": "fair; just; impartial; equitable"
    },
    {
      "character": "𗿷",
      "reading": "dźe²",
      "explanationEN": "to exist.ᴀ(animate); to have.ᴀ"
    },
    {
      "character": "𗿘",
      "reading": "tshə¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗤭",
      "reading": "ywiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨌",
      "reading": "nwə¹",
      "explanationEN": "to guard; to defend"
    },
    {
      "character": "𗦖",
      "reading": "rmer²",
      "explanationEN": "palace"
    },
    {
      "character": "𗧵",
      "reading": "nsa̱r¹",
      "explanationEN": "to prick"
    },
    {
      "character": "𗩒",
      "reading": "rqwa̱r¹",
      "explanationEN": "to suppress"
    },
    {
      "character": "𗫈",
      "reading": "se¹",
      "explanationEN": "now; today"
    },
    {
      "character": "𗪴",
      "reading": "di̱w²",
      "explanationEN": "ram"
    },
    {
      "character": "𗩩",
      "reading": "vaa̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗽛",
      "reading": "pah¹",
      "explanationEN": "patch"
    },
    {
      "character": "𗽢",
      "reading": "qi̱w¹",
      "explanationEN": "farmland"
    },
    {
      "character": "𗽵",
      "reading": "phə̱²",
      "explanationEN": "jar; bottle"
    },
    {
      "character": "𗤀",
      "reading": "śe¹",
      "explanationEN": "life; generation"
    },
    {
      "character": "𗫭",
      "reading": "lhuh²",
      "explanationEN": "to sing; to chant"
    },
    {
      "character": "𗪰",
      "reading": "gi²",
      "explanationEN": "wife; concubine"
    },
    {
      "character": "𗣪",
      "reading": "bih¹",
      "explanationEN": "urine"
    },
    {
      "character": "𗧒",
      "reading": "lhə¹",
      "explanationEN": "birthplace"
    },
    {
      "character": "𗨖",
      "reading": "paa̱¹",
      "explanationEN": "to hide; to lurk"
    },
    {
      "character": "𗪥",
      "reading": "tśih¹",
      "explanationEN": "humble"
    },
    {
      "character": "𗥯",
      "reading": "gwih¹",
      "explanationEN": "to dress; to wear"
    },
    {
      "character": "𗨠",
      "reading": "lhə¹",
      "explanationEN": "frivolous"
    },
    {
      "character": "𗩖",
      "reading": "dzu²",
      "explanationEN": "weapon; arms"
    },
    {
      "character": "𗪱",
      "reading": "bə̱¹",
      "explanationEN": "round bone"
    },
    {
      "character": "𗧾",
      "reading": "thə²",
      "explanationEN": "emperor"
    },
    {
      "character": "𗪻",
      "reading": "rma̱r¹",
      "explanationEN": "oath; vow"
    },
    {
      "character": "𗼀",
      "reading": "gwi²",
      "explanationEN": "beast; animal"
    },
    {
      "character": "𗻎",
      "reading": "li̱w²",
      "explanationEN": "evil spirit; demon"
    },
    {
      "character": "𗨧",
      "reading": "kwə¹",
      "explanationEN": "foolish; stupid; clumsy"
    },
    {
      "character": "𗏰",
      "reading": "teh²",
      "explanationEN": "to embrace; to hold in arms"
    },
    {
      "character": "𗐁",
      "reading": "tih²",
      "explanationEN": "to embrace"
    },
    {
      "character": "𗥱",
      "reading": "dze̱¹",
      "explanationEN": "selfishness"
    },
    {
      "character": "𗦒",
      "reading": "rŋwə̱r²",
      "explanationEN": "face; look"
    },
    {
      "character": "𗨙",
      "reading": "lheh²",
      "explanationEN": "to bear.ᴀ (a burden); to endure.ᴀ"
    },
    {
      "character": "𗾿",
      "reading": "rir²",
      "explanationEN": "a kind of shell which looks like a jade; dress and personal adornment; dress"
    },
    {
      "character": "𗻠",
      "reading": "yi¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻶",
      "reading": "ho̱ṃh²",
      "explanationEN": "calamity; disaster; suffering"
    },
    {
      "character": "𗫟",
      "reading": "pho̱ṃ¹",
      "explanationEN": "front of a garment"
    },
    {
      "character": "𗺸",
      "reading": "zwə¹",
      "explanationEN": "seed"
    },
    {
      "character": "𗻨",
      "reading": "rir²",
      "explanationEN": "human being; human being"
    },
    {
      "character": "𗻩",
      "reading": "zi̱ṃ²",
      "explanationEN": "jaw"
    },
    {
      "character": "𗢹",
      "reading": "yə¹",
      "explanationEN": "to salute"
    },
    {
      "character": "𗩫",
      "reading": "mmə¹",
      "explanationEN": "woman; the female"
    },
    {
      "character": "𗽟",
      "reading": "γwe̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗿜",
      "reading": "tśhi¹",
      "explanationEN": "shame; disgrace"
    },
    {
      "character": "𗿭",
      "reading": "mmə¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗫣",
      "reading": "mpa̱¹",
      "explanationEN": "to change"
    },
    {
      "character": "𗤯",
      "reading": "dzih²",
      "explanationEN": "to cry; to weep; to sob"
    },
    {
      "character": "𗣌",
      "reading": "mi²",
      "explanationEN": "to understand; to comprehend"
    },
    {
      "character": "𗨳",
      "reading": "tih¹",
      "explanationEN": "to return; to submit"
    },
    {
      "character": "𗫇",
      "reading": "śuh¹",
      "explanationEN": "nit"
    },
    {
      "character": "𗽺",
      "reading": "rqu̱r²",
      "explanationEN": "ice"
    },
    {
      "character": "𗢮",
      "reading": "gwi¹",
      "explanationEN": "word; speech"
    },
    {
      "character": "𗢩",
      "reading": "tsa¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗢼",
      "reading": "zeh²",
      "explanationEN": "honest; upright"
    },
    {
      "character": "𗢽",
      "reading": "de²",
      "explanationEN": "a place name; a surname"
    },
    {
      "character": "𗤘",
      "reading": "deṃ²",
      "explanationEN": "to stop; to abolish"
    },
    {
      "character": "𗧘",
      "reading": "vwo̱²",
      "explanationEN": "justice; righteousness"
    },
    {
      "character": "𗼰",
      "reading": "li²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗽉",
      "reading": "tih¹",
      "explanationEN": "heavy"
    },
    {
      "character": "𗾉",
      "reading": "si̱w²",
      "explanationEN": "close; intimate"
    },
    {
      "character": "𘔰",
      "reading": "γo̱ṃh²",
      "explanationEN": "tear; teardrop"
    },
    {
      "character": "𗐚",
      "reading": "ror²",
      "explanationEN": "to ferment; to make (wine)"
    },
    {
      "character": "𗬘",
      "reading": "lo²",
      "explanationEN": "to spread.ʙ ; to disseminate.ʙ"
    },
    {
      "character": "𗢯",
      "reading": "lhwa¹",
      "explanationEN": "tongue"
    },
    {
      "character": "𗣁",
      "reading": "lhə¹",
      "explanationEN": "a kind of shell which looks like a jade; dress and personal adornment; dress"
    },
    {
      "character": "𗣉",
      "reading": "nla̱¹",
      "explanationEN": "thick"
    },
    {
      "character": "𗣭",
      "reading": "tshiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣷",
      "reading": "lhə̱?",
      "explanationEN": "full; packed; satisfied"
    },
    {
      "character": "𗣃",
      "reading": "gwi²",
      "explanationEN": "word; sentence"
    },
    {
      "character": "𗧙",
      "reading": "llə²",
      "explanationEN": "easy"
    },
    {
      "character": "𗨫",
      "reading": "γu̱²",
      "explanationEN": "to manage; to administer"
    },
    {
      "character": "𗧔",
      "reading": "llu̱h¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗩶",
      "reading": "tśhweṃ¹",
      "explanationEN": "frivolous; sly"
    },
    {
      "character": "𗤁",
      "reading": "tśhiw¹",
      "explanationEN": "six"
    },
    {
      "character": "𗤂",
      "reading": "di²",
      "explanationEN": "complete"
    },
    {
      "character": "𗧁",
      "reading": "rer²",
      "explanationEN": "scholar"
    },
    {
      "character": "𗽨",
      "reading": "ntaa̱²",
      "explanationEN": "dry"
    },
    {
      "character": "𗾍",
      "reading": "gwi²",
      "explanationEN": "to rise; to leap"
    },
    {
      "character": "𘊠",
      "reading": "zeh²",
      "explanationEN": "boy; lad"
    },
    {
      "character": "𗼿",
      "reading": "nae̱h²",
      "explanationEN": "rat"
    },
    {
      "character": "𗤴",
      "reading": "be²",
      "explanationEN": "senior; superior"
    },
    {
      "character": "𗣯",
      "reading": "deh¹",
      "explanationEN": "smoothness; level"
    },
    {
      "character": "𗫎",
      "reading": "mmə¹",
      "explanationEN": "maidservant"
    },
    {
      "character": "𗤑",
      "reading": "phe¹",
      "explanationEN": "to attack by words"
    },
    {
      "character": "𗦜",
      "reading": "so²",
      "explanationEN": "to say"
    },
    {
      "character": "𗥇",
      "reading": "təh¹",
      "explanationEN": "boy; lad; child"
    },
    {
      "character": "𗦆",
      "reading": "tsiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗥙",
      "reading": "tsha̱ṃ¹",
      "explanationEN": "steed; fine horse"
    },
    {
      "character": "𗥂",
      "reading": "ŋqhe̱¹",
      "explanationEN": "house; room"
    },
    {
      "character": "𗥩",
      "reading": "lwu²",
      "explanationEN": "to meet; to assemble"
    },
    {
      "character": "𗣎",
      "reading": "ra̱r²",
      "explanationEN": "water spring"
    },
    {
      "character": "𗨿",
      "reading": "rtwar¹",
      "explanationEN": "to cease; to stop"
    },
    {
      "character": "𗨩",
      "reading": "pa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗪣",
      "reading": "pho̱ṃ²",
      "explanationEN": "conceited; self-important"
    },
    {
      "character": "𗫀",
      "reading": "rnor¹",
      "explanationEN": "abundant; rich"
    },
    {
      "character": "𗥘",
      "reading": "lai̱h¹",
      "explanationEN": "to smear"
    },
    {
      "character": "𗽋",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "a traditional unit of area"
    },
    {
      "character": "𗾴",
      "reading": "bu̱²",
      "explanationEN": "assembly hall; hall"
    },
    {
      "character": "𗏊",
      "reading": "rγa̱r¹",
      "explanationEN": "to murder"
    },
    {
      "character": "𗬚",
      "reading": "nnə¹",
      "explanationEN": "to bask; to shine on"
    },
    {
      "character": "𗬞",
      "reading": "beh¹",
      "explanationEN": "to bask"
    },
    {
      "character": "𗤓",
      "reading": "ntho¹",
      "explanationEN": "beautiful; wonderful"
    },
    {
      "character": "𗥺",
      "reading": "ŋŋwə̱¹",
      "explanationEN": "to chant incantation"
    },
    {
      "character": "𗨞",
      "reading": "lheh²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗫥",
      "reading": "dźəh¹",
      "explanationEN": "ten"
    },
    {
      "character": "𗪓",
      "reading": "tsha²",
      "explanationEN": "skillful"
    },
    {
      "character": "𗏚",
      "reading": "bəh¹",
      "explanationEN": "dung beetles"
    },
    {
      "character": "𗥗",
      "reading": "phə̱¹",
      "explanationEN": "man of wealth; moneybags"
    },
    {
      "character": "𗨮",
      "reading": "kah²",
      "explanationEN": "song"
    },
    {
      "character": "𗩉",
      "reading": "sih¹",
      "explanationEN": "palace"
    },
    {
      "character": "𗢱",
      "reading": "tsho̱ṃ¹",
      "explanationEN": "to teach; to instruct"
    },
    {
      "character": "𗣮",
      "reading": "ye¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗧖",
      "reading": "tṣao̱ṃ²",
      "explanationEN": "many; muchq"
    },
    {
      "character": "𗧼",
      "reading": "dzu²",
      "explanationEN": "complete; whole; all"
    },
    {
      "character": "𗤚",
      "reading": "mi̱²",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𗾇",
      "reading": "bi̱¹",
      "explanationEN": "demented; mad"
    },
    {
      "character": "𗾎",
      "reading": "kwi¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗺛",
      "reading": "???",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻟",
      "reading": "hi̱ṃ²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗺟",
      "reading": "rγo̱r²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻪",
      "reading": "nni̱w²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗤱",
      "reading": "reṃ²",
      "explanationEN": "scheme; stratagem"
    },
    {
      "character": "𗨝",
      "reading": "śiṃ¹",
      "explanationEN": "body"
    },
    {
      "character": "𗤲",
      "reading": "tsho̱ṃ²",
      "explanationEN": "to ridicule; to deride"
    },
    {
      "character": "𗿏",
      "reading": "tshwu̱²",
      "explanationEN": "fat; corpulent"
    },
    {
      "character": "𗫤",
      "reading": "nu²",
      "explanationEN": "many; much"
    },
    {
      "character": "𗐃",
      "reading": "śa¹",
      "explanationEN": "to buy or sell on credit"
    },
    {
      "character": "𗿙",
      "reading": "khu²",
      "explanationEN": "imperial edict"
    },
    {
      "character": "𗺕",
      "reading": "ŋki¹",
      "explanationEN": "grass"
    },
    {
      "character": "𗺖",
      "reading": "tsa̱¹",
      "explanationEN": "grass"
    },
    {
      "character": "𗺲",
      "reading": "li²",
      "explanationEN": "puncture vine"
    },
    {
      "character": "𗥈",
      "reading": "thə̱¹",
      "explanationEN": "cooperation"
    },
    {
      "character": "𗦂",
      "reading": "dzi¹",
      "explanationEN": "calm"
    },
    {
      "character": "𗨲",
      "reading": "tih¹",
      "explanationEN": "to return; to submit"
    },
    {
      "character": "𗢲",
      "reading": "ŋga²",
      "explanationEN": "happy; cheerful"
    },
    {
      "character": "𗥴",
      "reading": "qho̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨪",
      "reading": "kə²",
      "explanationEN": "tangerine"
    },
    {
      "character": "𗽀",
      "reading": "lhə²",
      "explanationEN": "dust"
    },
    {
      "character": "𗧍",
      "reading": "qo̱ṃ¹",
      "explanationEN": "body"
    },
    {
      "character": "𗦳",
      "reading": "dzu²",
      "explanationEN": "host; master"
    },
    {
      "character": "𗨯",
      "reading": "rtśər²",
      "explanationEN": "skill; artistry"
    },
    {
      "character": "𗧗",
      "reading": "tśhweṃ¹",
      "explanationEN": "to prohibit; to forbid; to ban"
    },
    {
      "character": "𗼁",
      "reading": "vu¹",
      "explanationEN": "beast; animal"
    },
    {
      "character": "𗧚",
      "reading": "deṃ¹",
      "explanationEN": "to hide; to shelter"
    },
    {
      "character": "𗐂",
      "reading": "tih²",
      "explanationEN": "to embrace"
    },
    {
      "character": "𗴬",
      "reading": "tśu¹",
      "explanationEN": "urn; earthen jar; bottle"
    },
    {
      "character": "𗏘",
      "reading": "rγa̱r²",
      "explanationEN": "chest; thorax"
    },
    {
      "character": "𗢰",
      "reading": "na̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣄",
      "reading": "thwo̱²",
      "explanationEN": "what; which; why; how"
    },
    {
      "character": "𗣰",
      "reading": "kwi¹",
      "explanationEN": "used; worn; old"
    },
    {
      "character": "𗣆",
      "reading": "tsha²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗣣",
      "reading": "tshi¹",
      "explanationEN": "food and drink; cooked rice or other cereals"
    },
    {
      "character": "𗣶",
      "reading": "gə¹",
      "explanationEN": "children"
    },
    {
      "character": "𗥿",
      "reading": "pah²",
      "explanationEN": "wizard; sorcerer"
    },
    {
      "character": "𗥚",
      "reading": "zih²",
      "explanationEN": "to give birth"
    },
    {
      "character": "𗥷",
      "reading": "nla̱¹",
      "explanationEN": "color; look"
    },
    {
      "character": "𗧕",
      "reading": "lu²",
      "explanationEN": "tax; duty"
    },
    {
      "character": "𗥰",
      "reading": "la²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗧌",
      "reading": "no̱²",
      "explanationEN": "beautiful; pretty"
    },
    {
      "character": "𗧧",
      "reading": "li²",
      "explanationEN": "to spoil (a child); to dote (a child)"
    },
    {
      "character": "𗧧",
      "reading": "li²",
      "explanationEN": "to spoil (a child); to dote (a child)"
    },
    {
      "character": "𗨬",
      "reading": "ru̱r¹",
      "explanationEN": "narrow"
    },
    {
      "character": "𗩷",
      "reading": "yi¹",
      "explanationEN": "gadfly"
    },
    {
      "character": "𗩹",
      "reading": "yi¹",
      "explanationEN": "now; this moment"
    },
    {
      "character": "𗽗",
      "reading": "lə̱²",
      "explanationEN": "to cover; to hide from view"
    },
    {
      "character": "𗽖",
      "reading": "tshi¹",
      "explanationEN": "east"
    },
    {
      "character": "𗽴",
      "reading": "da̱ṃ¹",
      "explanationEN": "to kick"
    },
    {
      "character": "𗽜",
      "reading": "vwi̱²",
      "explanationEN": "donkey"
    },
    {
      "character": "𗾈",
      "reading": "mmi̱²",
      "explanationEN": "able and virtuous people"
    },
    {
      "character": "𗾕",
      "reading": "rir²",
      "explanationEN": "swallow"
    },
    {
      "character": "𗾧",
      "reading": "naw²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗿌",
      "reading": "tśe¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗿯",
      "reading": "dih¹",
      "explanationEN": "to trample; to tread"
    },
    {
      "character": "𘔳",
      "reading": "lwi̱w¹",
      "explanationEN": "gas; smoke; flame"
    },
    {
      "character": "𘔴",
      "reading": "du²",
      "explanationEN": "to give birth"
    },
    {
      "character": "𘟦",
      "reading": "bə̱²",
      "explanationEN": "mandarin duck"
    },
    {
      "character": "𗩀",
      "reading": "rkwər¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗏠",
      "reading": "rγa̱r²",
      "explanationEN": "amazement; astonishment"
    },
    {
      "character": "𗩵",
      "reading": "bə̱²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗤒",
      "reading": "kiw¹",
      "explanationEN": "year; age"
    },
    {
      "character": "𗤔",
      "reading": "mu²",
      "explanationEN": "to dance; to play"
    },
    {
      "character": "𗦋",
      "reading": "ne̱²",
      "explanationEN": "carriage"
    },
    {
      "character": "𗧮",
      "reading": "di²",
      "explanationEN": "land"
    },
    {
      "character": "𗽑",
      "reading": "nde²",
      "explanationEN": "grave; cemetery"
    },
    {
      "character": "𗾟",
      "reading": "vwa̱h²",
      "explanationEN": "vast; wide; extensive"
    },
    {
      "character": "𗿮",
      "reading": "pə̱¹",
      "explanationEN": "people of father’s generation"
    },
    {
      "character": "𗿞",
      "reading": "dih¹",
      "explanationEN": "to mate; to copulate"
    },
    {
      "character": "𗏱",
      "reading": "llih²",
      "explanationEN": "to combine; to gather"
    },
    {
      "character": "𗏮",
      "reading": "tsheh²",
      "explanationEN": "landscape"
    },
    {
      "character": "𗩨",
      "reading": "tsə̱h¹",
      "explanationEN": "color"
    },
    {
      "character": "𗦫",
      "reading": "yiw¹",
      "explanationEN": "cause"
    },
    {
      "character": "𗧀",
      "reading": "li̱w¹",
      "explanationEN": "only; sole"
    },
    {
      "character": "𗩟",
      "reading": "tśeh¹",
      "explanationEN": "year; age"
    },
    {
      "character": "𗩠",
      "reading": "ba̱h²",
      "explanationEN": "luxuriant; majestic"
    },
    {
      "character": "𗫦",
      "reading": "γai̱w¹",
      "explanationEN": "to study; to learn"
    },
    {
      "character": "𗽸",
      "reading": "nlə¹",
      "explanationEN": "epidermis; cuticle"
    },
    {
      "character": "𗿊",
      "reading": "lo̱ṃ²",
      "explanationEN": "body"
    },
    {
      "character": "𗿖",
      "reading": "ŋŋaa̱²",
      "explanationEN": "goose"
    },
    {
      "character": "𗿩",
      "reading": "tśeh²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗏝",
      "reading": "zoh¹",
      "explanationEN": "cow disease"
    },
    {
      "character": "𗪤",
      "reading": "tśih¹",
      "explanationEN": "humble"
    },
    {
      "character": "𗪳",
      "reading": "vwi̱²",
      "explanationEN": "to teach; to instruct"
    },
    {
      "character": "𗽣",
      "reading": "loṃ²",
      "explanationEN": "to measure"
    },
    {
      "character": "𗩸",
      "reading": "rkhar¹",
      "explanationEN": "honest; upright"
    },
    {
      "character": "𗦌",
      "reading": "swa̱ṃ¹",
      "explanationEN": "mute"
    },
    {
      "character": "𗪇",
      "reading": "bu̱¹",
      "explanationEN": "to sink; to submerge"
    },
    {
      "character": "𗩳",
      "reading": "dẓwai̱¹",
      "explanationEN": "to drag; to pull"
    },
    {
      "character": "𗦴",
      "reading": "mmi̱²",
      "explanationEN": "coal; mine; holy mountain"
    },
    {
      "character": "𗿦",
      "reading": "ma¹",
      "explanationEN": "female; woman"
    },
    {
      "character": "𗺗",
      "reading": "ndẓaa̱²",
      "explanationEN": "green grass"
    },
    {
      "character": "𗺝",
      "reading": "to̱ṃ¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻀",
      "reading": "bai̱²",
      "explanationEN": "herbal medicine"
    },
    {
      "character": "𗺨",
      "reading": "rni̱r²",
      "explanationEN": "to fade; to wither; to shrivel up"
    },
    {
      "character": "𗺻",
      "reading": "haa̱¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗏙",
      "reading": "rdzwər¹",
      "explanationEN": "limit; end"
    },
    {
      "character": "𗥵",
      "reading": "qhə̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗫐",
      "reading": "su̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗩏",
      "reading": "tshi̱²",
      "explanationEN": "target"
    },
    {
      "character": "𗻡",
      "reading": "lho̱ṃh¹",
      "explanationEN": "blanket"
    },
    {
      "character": "𗪷",
      "reading": "də²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗻅",
      "reading": "la̱ṃ¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻐",
      "reading": "mbu̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻲",
      "reading": "tswə̱h¹",
      "explanationEN": "excrement; dung"
    },
    {
      "character": "𗏣",
      "reading": "rer²",
      "explanationEN": "DIRE: directive case; direction"
    },
    {
      "character": "𗏔",
      "reading": "tśoh¹",
      "explanationEN": "ugly"
    },
    {
      "character": "𗪲",
      "reading": "γiw¹",
      "explanationEN": "to summon (for surrender); to call for"
    },
    {
      "character": "𗏷",
      "reading": "gə²",
      "explanationEN": "coffin; casket"
    },
    {
      "character": "𗦛",
      "reading": "rdzə̱r²",
      "explanationEN": "to extrude"
    },
    {
      "character": "𗪺",
      "reading": "γai̱¹",
      "explanationEN": "power; strength"
    },
    {
      "character": "𗫙",
      "reading": "lə̱²",
      "explanationEN": "wrestling"
    },
    {
      "character": "𗧡",
      "reading": "ntse¹",
      "explanationEN": "to palpitate"
    },
    {
      "character": "𗧠",
      "reading": "qae̱h²",
      "explanationEN": "to desire; to wish; to lust"
    },
    {
      "character": "𗽶",
      "reading": "?u̱h²",
      "explanationEN": "cold; freeze"
    },
    {
      "character": "𗿰",
      "reading": "qae̱h²",
      "explanationEN": "steps; stairs"
    },
    {
      "character": "𗤮",
      "reading": "nwo̱ṃ²",
      "explanationEN": "eloquence"
    },
    {
      "character": "𗧎",
      "reading": "qae̱h¹",
      "explanationEN": "sisters"
    },
    {
      "character": "𗼶",
      "reading": "rŋu̱r¹",
      "explanationEN": "ridge"
    },
    {
      "character": "𗏋",
      "reading": "si²",
      "explanationEN": "to die"
    },
    {
      "character": "𗬡",
      "reading": "biṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗣳",
      "reading": "seh²",
      "explanationEN": "to write"
    },
    {
      "character": "𗣵",
      "reading": "bae̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗩥",
      "reading": "bo̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗫏",
      "reading": "thwih¹",
      "explanationEN": "the young"
    },
    {
      "character": "𗏵",
      "reading": "ma¹",
      "explanationEN": "end; tail; east"
    },
    {
      "character": "𗦬",
      "reading": "ġu̱²",
      "explanationEN": "common; generally"
    },
    {
      "character": "𗪢",
      "reading": "dza¹",
      "explanationEN": "hair worn in a bun or coil"
    },
    {
      "character": "𗪒",
      "reading": "qu̱h²",
      "explanationEN": "inner; inside"
    },
    {
      "character": "𗺧",
      "reading": "phao̱ṃ¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻝",
      "reading": "zi̱ṃ²",
      "explanationEN": "bamboo shoots"
    },
    {
      "character": "𗻳",
      "reading": "peṃ¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗧿",
      "reading": "mi̱²",
      "explanationEN": "to smear; to plaster"
    },
    {
      "character": "𗏿",
      "reading": "la²",
      "explanationEN": "auspicious; lucky"
    },
    {
      "character": "𗫮",
      "reading": "da̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗺹",
      "reading": "hi̱w¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻬",
      "reading": "rźər¹",
      "explanationEN": "thin; rare"
    },
    {
      "character": "𗨦",
      "reading": "bə̱²",
      "explanationEN": "pellet"
    },
    {
      "character": "𗼾",
      "reading": "ni̱ṃ¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𗧴",
      "reading": "thu²",
      "explanationEN": "to abandon; to give up"
    },
    {
      "character": "𗪖",
      "reading": "lo̱ṃ²",
      "explanationEN": "to seethe; to churn; to roll"
    },
    {
      "character": "𗫒",
      "reading": "mba̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗫓",
      "reading": "nśo̱r¹",
      "explanationEN": "levity"
    },
    {
      "character": "𗽘",
      "reading": "gə²",
      "explanationEN": "cave; den; valley"
    },
    {
      "character": "𗥸",
      "reading": "ŋwu̱²",
      "explanationEN": "to cry; to sob"
    },
    {
      "character": "𗣇",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "the third of the Eight Trigrams"
    },
    {
      "character": "𗽱",
      "reading": "da̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗐎",
      "reading": "pə¹",
      "explanationEN": "father"
    },
    {
      "character": "𗐖",
      "reading": "tśi¹",
      "explanationEN": "to arrive"
    },
    {
      "character": "𗺇",
      "reading": "de²",
      "explanationEN": "cheek"
    },
    {
      "character": "𘚺",
      "reading": "qhae̱ṃ¹",
      "explanationEN": "cough; asthma"
    },
    {
      "character": "𘚸",
      "reading": "dzih²",
      "explanationEN": "fork"
    },
    {
      "character": "𗴪",
      "reading": "rmər²",
      "explanationEN": "to observe"
    },
    {
      "character": "𗃰",
      "reading": "he̱¹",
      "explanationEN": "sea"
    },
    {
      "character": "𗐑",
      "reading": "śi¹",
      "explanationEN": "scarf; kerchief"
    },
    {
      "character": "𗴡",
      "reading": "ŋġa̱¹",
      "explanationEN": "doubt"
    },
    {
      "character": "𗴑",
      "reading": "qhae̱ṃ¹",
      "explanationEN": "calf (of the leg)"
    },
    {
      "character": "𗐋",
      "reading": "γa²",
      "explanationEN": "umbrella of a carriage"
    },
    {
      "character": "𗃕",
      "reading": "nẓai̱¹",
      "explanationEN": "to make great efforts"
    },
    {
      "character": "𗬨",
      "reading": "pə̱¹",
      "explanationEN": "to seek; to hanker after; to covet"
    },
    {
      "character": "𗃢",
      "reading": "nśi¹",
      "explanationEN": "misgiving; doubt"
    },
    {
      "character": "𗬧",
      "reading": "vwə̱h¹",
      "explanationEN": "to burn"
    },
    {
      "character": "𗃵",
      "reading": "puh²",
      "explanationEN": "palace"
    },
    {
      "character": "𗃮",
      "reading": "ṇo̱ṃ²",
      "explanationEN": "plaint; certificate"
    },
    {
      "character": "𗴏",
      "reading": "tsa¹",
      "explanationEN": "to broil; to roast"
    },
    {
      "character": "𗃖",
      "reading": "mu²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗃜",
      "reading": "llih²",
      "explanationEN": "to be willing to; to be ready to"
    },
    {
      "character": "𘓛",
      "reading": "dzwi¹",
      "explanationEN": "still; calm"
    },
    {
      "character": "𗴥",
      "reading": "miw²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗃸",
      "reading": "haə̱¹",
      "explanationEN": "to leave"
    },
    {
      "character": "𗃙",
      "reading": "dẓae̱ṃ¹",
      "explanationEN": "to sport; to make fun of"
    },
    {
      "character": "𘀂",
      "reading": "qhu̱¹",
      "explanationEN": "detestion"
    },
    {
      "character": "𗃤",
      "reading": "mmi̱²",
      "explanationEN": "relief; terrain"
    },
    {
      "character": "𗴔",
      "reading": "la¹",
      "explanationEN": "hatred; resentment"
    },
    {
      "character": "𗴘",
      "reading": "ŋwə¹",
      "explanationEN": "fear; dread"
    },
    {
      "character": "𗴢",
      "reading": "mbu¹",
      "explanationEN": "to respect; to revere"
    },
    {
      "character": "𘓗",
      "reading": "dzə̱¹",
      "explanationEN": "concentrated"
    },
    {
      "character": "𗬴",
      "reading": "le̱ṃ¹",
      "explanationEN": "equal; even; moderate"
    },
    {
      "character": "𗃦",
      "reading": "də¹",
      "explanationEN": "city"
    },
    {
      "character": "𗐐",
      "reading": "hoṃ¹",
      "explanationEN": "fragrant"
    },
    {
      "character": "𗃬",
      "reading": "lli̱²",
      "explanationEN": "fear; dread"
    },
    {
      "character": "𗴟",
      "reading": "pa¹",
      "explanationEN": "father"
    },
    {
      "character": "𗴓",
      "reading": "rir²",
      "explanationEN": "tiger"
    },
    {
      "character": "𗴚",
      "reading": "pe¹",
      "explanationEN": "to flog; to beat"
    },
    {
      "character": "𗃳",
      "reading": "rmər²",
      "explanationEN": "to observe"
    },
    {
      "character": "𗼊",
      "reading": "si̱w¹",
      "explanationEN": "shyness; shame"
    },
    {
      "character": "𗼪",
      "reading": "dih²",
      "explanationEN": "to listen attentively"
    },
    {
      "character": "𗼮",
      "reading": "dzuh²",
      "explanationEN": "rain"
    },
    {
      "character": "𗐌",
      "reading": "vwa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼗",
      "reading": "deṃ¹",
      "explanationEN": "shallow"
    },
    {
      "character": "𗼅",
      "reading": "nwə¹",
      "explanationEN": "beautiful; good"
    },
    {
      "character": "𘴂",
      "reading": "γu̱¹",
      "explanationEN": "god; deity; divinity; supernatural being"
    },
    {
      "character": "𗼍",
      "reading": "nsa̱¹",
      "explanationEN": "very close relative"
    },
    {
      "character": "𗼚",
      "reading": "γo̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼠",
      "reading": "khwə¹",
      "explanationEN": "favor; merit"
    },
    {
      "character": "𗼡",
      "reading": "peh¹",
      "explanationEN": "wizard"
    },
    {
      "character": "𗼥",
      "reading": "qa̱¹",
      "explanationEN": "power; authority"
    },
    {
      "character": "𗼩",
      "reading": "γa̱h²",
      "explanationEN": "name, surname"
    },
    {
      "character": "𗼋",
      "reading": "dzwəh¹",
      "explanationEN": "respect; reverence"
    },
    {
      "character": "𗼏",
      "reading": "po̱¹",
      "explanationEN": "uncle"
    },
    {
      "character": "𘉈",
      "reading": "dzi̱w²",
      "explanationEN": "to swindle; to cheat"
    },
    {
      "character": "𘉃",
      "reading": "dzə̱h¹",
      "explanationEN": "witticism"
    },
    {
      "character": "𗢝",
      "reading": "yu¹",
      "explanationEN": "to be frightened; to scare"
    },
    {
      "character": "𘉇",
      "reading": "dzi̱w²",
      "explanationEN": "to swindle; to cheat"
    },
    {
      "character": "𗐕",
      "reading": "pe²",
      "explanationEN": "father; people of father's generation"
    },
    {
      "character": "𗁄",
      "reading": "mo̱²",
      "explanationEN": "fatigue"
    },
    {
      "character": "𗎴",
      "reading": "ti¹",
      "explanationEN": "east; end"
    },
    {
      "character": "𗃉",
      "reading": "ŋge¹",
      "explanationEN": "stuffy; dizzy"
    },
    {
      "character": "𗂽",
      "reading": "ye²",
      "explanationEN": "sheep"
    },
    {
      "character": "𗢁",
      "reading": "hə̱¹",
      "explanationEN": "to seek; to look for"
    },
    {
      "character": "𗆎",
      "reading": "tshe²",
      "explanationEN": "sheep"
    },
    {
      "character": "𗆻",
      "reading": "γa̱¹",
      "explanationEN": "alone; lonely; different"
    },
    {
      "character": "𗄼",
      "reading": "la¹",
      "explanationEN": "to come; to fall"
    },
    {
      "character": "𗆧",
      "reading": "siw¹",
      "explanationEN": "new; fresh"
    },
    {
      "character": "𗆊",
      "reading": "qaa̱¹",
      "explanationEN": "uneven; to fight"
    },
    {
      "character": "𗆉",
      "reading": "qao̱¹",
      "explanationEN": "to drive; to oust"
    },
    {
      "character": "𗃈",
      "reading": "swə¹",
      "explanationEN": "new"
    },
    {
      "character": "𗂃",
      "reading": "tśhwaw¹",
      "explanationEN": "to separate; to break off"
    },
    {
      "character": "𗂒",
      "reading": "rqwa̱r¹",
      "explanationEN": "to observe; to watch"
    },
    {
      "character": "𗅰",
      "reading": "lwe̱ṃ¹",
      "explanationEN": "slow; obtuse"
    },
    {
      "character": "𗆵",
      "reading": "la̱¹",
      "explanationEN": "honest"
    },
    {
      "character": "𗁮",
      "reading": "tśhi¹",
      "explanationEN": "meat"
    },
    {
      "character": "𗁛",
      "reading": "la̱h¹",
      "explanationEN": "to estimate"
    },
    {
      "character": "𗂱",
      "reading": "lə̱¹",
      "explanationEN": "neck"
    },
    {
      "character": "𗃅",
      "reading": "rvwi̱r¹",
      "explanationEN": "to decorate; to adorn"
    },
    {
      "character": "𗹬",
      "reading": "se²",
      "explanationEN": "passion; knowledge"
    },
    {
      "character": "𗹟",
      "reading": "mə̱¹",
      "explanationEN": "patron of sheep"
    },
    {
      "character": "𗂳",
      "reading": "rtśər²",
      "explanationEN": "to shoot"
    },
    {
      "character": "𗀸",
      "reading": "nte̱¹",
      "explanationEN": "to ripple; to undulate"
    },
    {
      "character": "𗂯",
      "reading": "rġa̱r²",
      "explanationEN": "to sleep"
    },
    {
      "character": "𗄶",
      "reading": "tṣhai̱w¹",
      "explanationEN": "to damage; to injure"
    },
    {
      "character": "𗅤",
      "reading": "rma̱r²",
      "explanationEN": "sorrowful; puzzled"
    },
    {
      "character": "𗆴",
      "reading": "la̱¹",
      "explanationEN": "honest"
    },
    {
      "character": "𗄵",
      "reading": "γwae̱ṃ¹",
      "explanationEN": "harsh and unreasonable; perverse"
    },
    {
      "character": "𗆢",
      "reading": "qhwaə̱¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗆯",
      "reading": "tshə²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗆶",
      "reading": "rar²",
      "explanationEN": "turnip"
    },
    {
      "character": "𗹹",
      "reading": "phe¹",
      "explanationEN": "white"
    },
    {
      "character": "𗂴",
      "reading": "rtśər¹",
      "explanationEN": "to pare"
    },
    {
      "character": "𗀳",
      "reading": "rtśər¹",
      "explanationEN": "to attack"
    },
    {
      "character": "𗀺",
      "reading": "rnə̱r²",
      "explanationEN": "finger"
    },
    {
      "character": "𗁅",
      "reading": "lla̱h¹",
      "explanationEN": "hand"
    },
    {
      "character": "𗁃",
      "reading": "kuh¹",
      "explanationEN": "to cut"
    },
    {
      "character": "𗁊",
      "reading": "bah¹",
      "explanationEN": "coarse; rough"
    },
    {
      "character": "𗄴",
      "reading": "ntwi̱²",
      "explanationEN": "pair; couple"
    },
    {
      "character": "𘴀",
      "reading": "ŋga²",
      "explanationEN": "foolish; stupid; clumsy"
    },
    {
      "character": "𗅎",
      "reading": "qhwaə̱¹",
      "explanationEN": "coral"
    },
    {
      "character": "𗅀",
      "reading": "rur¹",
      "explanationEN": "bright star"
    },
    {
      "character": "𗅼",
      "reading": "toh¹",
      "explanationEN": "to drink"
    },
    {
      "character": "𗅣",
      "reading": "rur¹",
      "explanationEN": "firefly; glowworm"
    },
    {
      "character": "𗅿",
      "reading": "dzeh¹",
      "explanationEN": "muddy; trubid"
    },
    {
      "character": "𗡽",
      "reading": "tṣwae̱ṃ²",
      "explanationEN": "droppings; insect dung"
    },
    {
      "character": "𗂑",
      "reading": "rqwa̱r¹",
      "explanationEN": "to observe; to watch"
    },
    {
      "character": "𗄿",
      "reading": "llu̱h²",
      "explanationEN": "to hinder; to obstruct"
    },
    {
      "character": "𗅌",
      "reading": "rγo̱r²",
      "explanationEN": "winding; meandering"
    },
    {
      "character": "𗡻",
      "reading": "lə¹",
      "explanationEN": "excrement; dung"
    },
    {
      "character": "𗆹",
      "reading": "nye¹",
      "explanationEN": "straight"
    },
    {
      "character": "𗆼",
      "reading": "yiw²",
      "explanationEN": "doubt; suspicion"
    },
    {
      "character": "𗆰",
      "reading": "lla¹",
      "explanationEN": "to transport.ᴀ"
    },
    {
      "character": "𗆱",
      "reading": "tha̱²",
      "explanationEN": "to close; to handcuff"
    },
    {
      "character": "𗇁",
      "reading": "śaṃ¹",
      "explanationEN": "(Buddhist) chan; zen"
    },
    {
      "character": "𗅭",
      "reading": "rŋi̱wr¹",
      "explanationEN": "to chop; to cut"
    },
    {
      "character": "𗁦",
      "reading": "beh¹",
      "explanationEN": "to promote; to raise"
    },
    {
      "character": "𗃊",
      "reading": "pho̱¹",
      "explanationEN": "to splash; to pour"
    },
    {
      "character": "𗂸",
      "reading": "bi²",
      "explanationEN": "prime minister (in ancient China)"
    },
    {
      "character": "𗂘",
      "reading": "rker²",
      "explanationEN": "to obstruct"
    },
    {
      "character": "𗃎",
      "reading": "ryer¹",
      "explanationEN": "firm"
    },
    {
      "character": "𗃏",
      "reading": "koh²",
      "explanationEN": "to cut"
    },
    {
      "character": "𗹻",
      "reading": "di̱w¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗹦",
      "reading": "mə̱¹",
      "explanationEN": "sky; heaven"
    },
    {
      "character": "𗺃",
      "reading": "ror²",
      "explanationEN": "to infect"
    },
    {
      "character": "𗃁",
      "reading": "pha²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗎩",
      "reading": "qaa̱¹",
      "explanationEN": "family; household"
    },
    {
      "character": "𗅡",
      "reading": "qhwaə̱¹",
      "explanationEN": "horn"
    },
    {
      "character": "𗂕",
      "reading": "mae̱¹",
      "explanationEN": "mole"
    },
    {
      "character": "𗂏",
      "reading": "yu¹",
      "explanationEN": "big tree"
    },
    {
      "character": "𗶰",
      "reading": "ne²",
      "explanationEN": "to expose; to reveal"
    },
    {
      "character": "𘝔",
      "reading": "śwu¹",
      "explanationEN": "to transport"
    },
    {
      "character": "𘝒",
      "reading": "śwu¹",
      "explanationEN": "string; wool rope"
    },
    {
      "character": "𘉧",
      "reading": "dźaw²",
      "explanationEN": "skinny; wan and sallow"
    },
    {
      "character": "𗌣",
      "reading": "gu¹",
      "explanationEN": "bridge"
    },
    {
      "character": "𘈉",
      "reading": "tshwu¹",
      "explanationEN": "to present as a gift; to give"
    },
    {
      "character": "𗢦",
      "reading": "gi²",
      "explanationEN": "flag; banner"
    },
    {
      "character": "𗋸",
      "reading": "ma¹",
      "explanationEN": "PROB: probable"
    },
    {
      "character": "𘉼",
      "reading": "ntho̱²",
      "explanationEN": "to harm; to endanger"
    },
    {
      "character": "𗋹",
      "reading": "nao̱h²",
      "explanationEN": "fluid; liquid"
    },
    {
      "character": "𘉸",
      "reading": "rdər²",
      "explanationEN": "scab"
    },
    {
      "character": "𘉽",
      "reading": "dzi̱¹",
      "explanationEN": "scab"
    },
    {
      "character": "𘊎",
      "reading": "rphar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗋱",
      "reading": "ndi²",
      "explanationEN": "to wash"
    },
    {
      "character": "𗊠",
      "reading": "ge¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗏈",
      "reading": "ŋwu̱²",
      "explanationEN": "writing brush"
    },
    {
      "character": "𗊘",
      "reading": "γae̱¹",
      "explanationEN": "to mix; to mix"
    },
    {
      "character": "𗌔",
      "reading": "thwa̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗇇",
      "reading": "hwa̱¹",
      "explanationEN": "monk"
    },
    {
      "character": "𗊐",
      "reading": "rzə̱r²",
      "explanationEN": "calf"
    },
    {
      "character": "𗊡",
      "reading": "ha̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗊞",
      "reading": "gi¹",
      "explanationEN": "honest; upright"
    },
    {
      "character": "𗋤",
      "reading": "rzər²",
      "explanationEN": "cheese"
    },
    {
      "character": "𘉨",
      "reading": "dzwə̱¹",
      "explanationEN": "chapter; volume"
    },
    {
      "character": "𗊝",
      "reading": "dźaw¹",
      "explanationEN": "to cross (a river)"
    },
    {
      "character": "𗢕",
      "reading": "rlhər¹",
      "explanationEN": "to lose; to fall"
    },
    {
      "character": "𗏅",
      "reading": "n·ywə¹",
      "explanationEN": "to block; to obstruct"
    },
    {
      "character": "𗊮",
      "reading": "laa̱²",
      "explanationEN": "drunkenness"
    },
    {
      "character": "𗋴",
      "reading": "???",
      "explanationEN": "to press; to suppress"
    },
    {
      "character": "𗌇",
      "reading": "kəh²",
      "explanationEN": "harmonious"
    },
    {
      "character": "𗋜",
      "reading": "tsa²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘊄",
      "reading": "ṇo̱ṃ²",
      "explanationEN": "evil; wicked; bad"
    },
    {
      "character": "𘊁",
      "reading": "khiw²",
      "explanationEN": "to dig"
    },
    {
      "character": "𗋳",
      "reading": "kwa̱ṃ¹",
      "explanationEN": "tube"
    },
    {
      "character": "𗃛",
      "reading": "loṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗌆",
      "reading": "śwe²",
      "explanationEN": "to need; to want"
    },
    {
      "character": "𗌠",
      "reading": "nnaa̱²",
      "explanationEN": "to smear; to smear"
    },
    {
      "character": "𗌩",
      "reading": "peṃh²",
      "explanationEN": "to knead wheat flour"
    },
    {
      "character": "𗐊",
      "reading": "pae̱ṃh²",
      "explanationEN": "sweet words; flattery"
    },
    {
      "character": "𗫹",
      "reading": "γwə̱¹",
      "explanationEN": "to struggle; to fight"
    },
    {
      "character": "𗫺",
      "reading": "tshwiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗬂",
      "reading": "rvwa̱r¹",
      "explanationEN": "to twine; to wind"
    },
    {
      "character": "𗬅",
      "reading": "mma¹",
      "explanationEN": "couple"
    },
    {
      "character": "𗬉",
      "reading": "si̱¹",
      "explanationEN": "mustard"
    },
    {
      "character": "𗬊",
      "reading": "γwə̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗤤",
      "reading": "thu̱¹",
      "explanationEN": "to count; to calculate"
    },
    {
      "character": "𗥡",
      "reading": "lu̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘊞",
      "reading": "lu̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘊔",
      "reading": "dźe²",
      "explanationEN": "an insect name"
    },
    {
      "character": "𗤣",
      "reading": "ma¹",
      "explanationEN": "hook"
    },
    {
      "character": "𗤨",
      "reading": "dźu²",
      "explanationEN": "timid; weak"
    },
    {
      "character": "𗿑",
      "reading": "rhwə̱r¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘊟",
      "reading": "ŋwo̱²",
      "explanationEN": "silver"
    },
    {
      "character": "𗏟",
      "reading": "lo̱¹",
      "explanationEN": "nose impalement"
    },
    {
      "character": "𗥤",
      "reading": "tse²",
      "explanationEN": "to realize; to know"
    },
    {
      "character": "𗨉",
      "reading": "ni²",
      "explanationEN": "to listen.ʙ"
    },
    {
      "character": "𗩯",
      "reading": "swe¹",
      "explanationEN": "clear; obvious"
    },
    {
      "character": "𗪕",
      "reading": "mbi²",
      "explanationEN": "to count; to calculate"
    },
    {
      "character": "𗪫",
      "reading": "le²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗿂",
      "reading": "ke²",
      "explanationEN": "impressive and dignified"
    },
    {
      "character": "𗦙",
      "reading": "sih¹",
      "explanationEN": "pure"
    },
    {
      "character": "𗪪",
      "reading": "śwu¹",
      "explanationEN": "clear; transparent"
    },
    {
      "character": "𗨊",
      "reading": "rkər²",
      "explanationEN": "gallbladder"
    },
    {
      "character": "𗫂",
      "reading": "ta¹",
      "explanationEN": "an affix"
    },
    {
      "character": "𗽼",
      "reading": "lwih²",
      "explanationEN": "hole; hollow; pit"
    },
    {
      "character": "𗻿",
      "reading": "swə¹",
      "explanationEN": "to make a noise; to stir up trouble"
    },
    {
      "character": "𗩢",
      "reading": "śwaw¹",
      "explanationEN": "to harness; to hitch up"
    },
    {
      "character": "𗪦",
      "reading": "paa̱¹",
      "explanationEN": "scar"
    },
    {
      "character": "𗫅",
      "reading": "ni̱w¹",
      "explanationEN": "radish"
    },
    {
      "character": "𗿳",
      "reading": "dzeṃ¹",
      "explanationEN": "time; date; moment"
    },
    {
      "character": "𗤡",
      "reading": "ŋgi¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗤬",
      "reading": "nni²",
      "explanationEN": "to link; to unite"
    },
    {
      "character": "𗧅",
      "reading": "rγər¹",
      "explanationEN": "pron.royal I"
    },
    {
      "character": "𗩡",
      "reading": "ve²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗫊",
      "reading": "bə̱¹",
      "explanationEN": "suddenly; abruptly; to throw"
    },
    {
      "character": "𗨗",
      "reading": "ndzu̱²",
      "explanationEN": "harmonious"
    },
    {
      "character": "𗫁",
      "reading": "γwai̱¹",
      "explanationEN": "influence; power"
    },
    {
      "character": "𗬕",
      "reading": "rmer²",
      "explanationEN": "dark; ignorant"
    },
    {
      "character": "𗨾",
      "reading": "he̱²",
      "explanationEN": "grieved; sorrowful"
    },
    {
      "character": "𗪮",
      "reading": "mmi̱²",
      "explanationEN": "new"
    },
    {
      "character": "𗾤",
      "reading": "γu¹",
      "explanationEN": "to ask; to call"
    },
    {
      "character": "𗽭",
      "reading": "qhi̱w²",
      "explanationEN": "opening; entrance; ferry crossing"
    },
    {
      "character": "𘔵",
      "reading": "ŋqwə̱¹",
      "explanationEN": "snore"
    },
    {
      "character": "𗺴",
      "reading": "tho̱ṃh¹",
      "explanationEN": "section; part"
    },
    {
      "character": "𗻉",
      "reading": "lu̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻌",
      "reading": "tshə̱¹",
      "explanationEN": "potato; taro"
    },
    {
      "character": "𗦾",
      "reading": "yu¹",
      "explanationEN": "to see; to look at"
    },
    {
      "character": "𗪼",
      "reading": "teṃh²",
      "explanationEN": "mirror; looking glass"
    },
    {
      "character": "𗿴",
      "reading": "rbo̱ṃr¹",
      "explanationEN": "nipple; teat"
    },
    {
      "character": "𗻦",
      "reading": "zi̱ṃ²",
      "explanationEN": "lettuce"
    },
    {
      "character": "𗻱",
      "reading": "rtsi̱wr¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗩜",
      "reading": "rtsi̱r¹",
      "explanationEN": "to cure; to treat; to heal"
    },
    {
      "character": "𗿧",
      "reading": "tsə̱h¹",
      "explanationEN": "medicated plaster"
    },
    {
      "character": "𗫨",
      "reading": "rdwi̱wr²",
      "explanationEN": "to enlighten; to awaken"
    },
    {
      "character": "𗤷",
      "reading": "qa̱h¹",
      "explanationEN": "life"
    },
    {
      "character": "𗧞",
      "reading": "tsi²",
      "explanationEN": "enlightenment"
    },
    {
      "character": "𗪧",
      "reading": "śuh¹",
      "explanationEN": "thin"
    },
    {
      "character": "𗦃",
      "reading": "γwe̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗦽",
      "reading": "na̱¹",
      "explanationEN": "baby; infant"
    },
    {
      "character": "𗢿",
      "reading": "tshwiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗣨",
      "reading": "the¹",
      "explanationEN": "clothing; clothes"
    },
    {
      "character": "𗣬",
      "reading": "vo¹",
      "explanationEN": "to do.ʙ"
    },
    {
      "character": "𗤫",
      "reading": "rkər²",
      "explanationEN": "house; room"
    },
    {
      "character": "𗥬",
      "reading": "ye¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗨐",
      "reading": "pe̱¹",
      "explanationEN": "to drink"
    },
    {
      "character": "𗾘",
      "reading": "veh²",
      "explanationEN": "the back of somebody or something"
    },
    {
      "character": "𗿈",
      "reading": "khe²",
      "explanationEN": "pigeon; dove"
    },
    {
      "character": "𗧶",
      "reading": "ni²",
      "explanationEN": "whispered; quiet; secret"
    },
    {
      "character": "𗤩",
      "reading": "γwaṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗪑",
      "reading": "rkhwar¹",
      "explanationEN": "circle; ring"
    },
    {
      "character": "𗣟",
      "reading": "rver¹",
      "explanationEN": "divination"
    },
    {
      "character": "𗥆",
      "reading": "rmer²",
      "explanationEN": "stars"
    },
    {
      "character": "𗽝",
      "reading": "qwaa̱¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𗿃",
      "reading": "də̱h¹",
      "explanationEN": "pretty; beautiful"
    },
    {
      "character": "𗧫",
      "reading": "phao̱²",
      "explanationEN": "window"
    },
    {
      "character": "𗿕",
      "reading": "γwu̱h²",
      "explanationEN": "man; male"
    },
    {
      "character": "𗥢",
      "reading": "dźih?",
      "explanationEN": "a surname"
    },
    {
      "character": "𗩓",
      "reading": "yiw¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗪸",
      "reading": "ra̱r²",
      "explanationEN": "radish"
    },
    {
      "character": "𗣀",
      "reading": "rer²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣩",
      "reading": "tha̱²",
      "explanationEN": "to rely on; to depend"
    },
    {
      "character": "𗤟",
      "reading": "rtsir¹",
      "explanationEN": "to select; to choose"
    },
    {
      "character": "𗬓",
      "reading": "tshwu¹",
      "explanationEN": "lightning"
    },
    {
      "character": "𗥧",
      "reading": "rkhar¹",
      "explanationEN": "repetition"
    },
    {
      "character": "𗧉",
      "reading": "vi²",
      "explanationEN": "skill; technology; artistry"
    },
    {
      "character": "𗾌",
      "reading": "rvwe̱r¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗩛",
      "reading": "no̱²",
      "explanationEN": "to speak; to say; to state"
    },
    {
      "character": "𗿨",
      "reading": "qwae̱ṃ¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗻜",
      "reading": "phae̱²",
      "explanationEN": "barnyard grass"
    },
    {
      "character": "𘊚",
      "reading": "vwi̱¹",
      "explanationEN": "six; the sixth"
    },
    {
      "character": "𗺜",
      "reading": "dzə̱h¹",
      "explanationEN": "dense"
    },
    {
      "character": "𗺦",
      "reading": "ru̱r¹",
      "explanationEN": "reed"
    },
    {
      "character": "𗫜",
      "reading": "yiw²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗻙",
      "reading": "dźoṃ¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗥼",
      "reading": "a?",
      "explanationEN": "monk; Buddhist monk"
    },
    {
      "character": "𗏓",
      "reading": "llih²",
      "explanationEN": "to judge; to examine"
    },
    {
      "character": "𗨱",
      "reading": "nu²",
      "explanationEN": "auspicious; lucky"
    },
    {
      "character": "𗿅",
      "reading": "yə¹",
      "explanationEN": "marriage; matchmaker; relatives by marriage"
    },
    {
      "character": "𗏯",
      "reading": "pae̱ṃh²",
      "explanationEN": "sweet words; flattery"
    },
    {
      "character": "𗧆",
      "reading": "ta¹",
      "explanationEN": "stupid; dull; foolish"
    },
    {
      "character": "𗨘",
      "reading": "ba̱²",
      "explanationEN": "witticism"
    },
    {
      "character": "𗩦",
      "reading": "qo̱²",
      "explanationEN": "pick; spade"
    },
    {
      "character": "𗨚",
      "reading": "ŋqa̱r¹",
      "explanationEN": "eyes"
    },
    {
      "character": "𗨏",
      "reading": "dźoṃ¹",
      "explanationEN": "insect dung"
    },
    {
      "character": "𗬑",
      "reading": "tśə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗬔",
      "reading": "lhah¹",
      "explanationEN": "lightning"
    },
    {
      "character": "𗽞",
      "reading": "theṃ¹",
      "explanationEN": "sky; lightning"
    },
    {
      "character": "𗽇",
      "reading": "tṣhaa̱¹",
      "explanationEN": "fork; branch of an object"
    },
    {
      "character": "𗽈",
      "reading": "llih¹",
      "explanationEN": "to plant; to cultivate"
    },
    {
      "character": "𗽮",
      "reading": "na̱¹",
      "explanationEN": "south"
    },
    {
      "character": "𗾗",
      "reading": "ha²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗾚",
      "reading": "ne¹",
      "explanationEN": "people of father’s generation"
    },
    {
      "character": "𗿛",
      "reading": "ba̱ṃ¹",
      "explanationEN": "goose"
    },
    {
      "character": "𗿉",
      "reading": "γu¹",
      "explanationEN": "smoke; mist"
    },
    {
      "character": "𗪌",
      "reading": "rkwər¹",
      "explanationEN": "a surname; a nation"
    },
    {
      "character": "𗬜",
      "reading": "koh¹",
      "explanationEN": "to fill.ᴀ in"
    },
    {
      "character": "𗤦",
      "reading": "ẓaə̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗥥",
      "reading": "rir¹",
      "explanationEN": "evil; harm"
    },
    {
      "character": "𗧊",
      "reading": "to̱²",
      "explanationEN": "to be born; to rise"
    },
    {
      "character": "𗥖",
      "reading": "twə¹",
      "explanationEN": "to flog; to beat"
    },
    {
      "character": "𗦱",
      "reading": "hwa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗩊",
      "reading": "rtso̱r²",
      "explanationEN": "ancestor; source"
    },
    {
      "character": "𗩋",
      "reading": "mə̱¹",
      "explanationEN": "merits and achievements; contribution"
    },
    {
      "character": "𗾥",
      "reading": "sa²",
      "explanationEN": "the day after tomorrow"
    },
    {
      "character": "𘴄",
      "reading": "ẓai̱²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗨂",
      "reading": "yeṃ¹",
      "explanationEN": "to gain; to make profit"
    },
    {
      "character": "𗪡",
      "reading": "gwo²",
      "explanationEN": "to dress; to apparel"
    },
    {
      "character": "𗩰",
      "reading": "qwa̱¹",
      "explanationEN": "to pass"
    },
    {
      "character": "𗫠",
      "reading": "rgwər¹",
      "explanationEN": "to lie down"
    },
    {
      "character": "𗽠",
      "reading": "nlu̱¹",
      "explanationEN": "to dig"
    },
    {
      "character": "𗾺",
      "reading": "be²",
      "explanationEN": "time"
    },
    {
      "character": "𗤠",
      "reading": "rvwa̱r¹",
      "explanationEN": "to twine; to wind"
    },
    {
      "character": "𗫢",
      "reading": "bə̱¹",
      "explanationEN": "to cast; to throw"
    },
    {
      "character": "𗦍",
      "reading": "thu̱²",
      "explanationEN": "close; near"
    },
    {
      "character": "𗿬",
      "reading": "kwə¹",
      "explanationEN": "turtledove"
    },
    {
      "character": "𗺷",
      "reading": "rzur²",
      "explanationEN": "broom"
    },
    {
      "character": "𗧣",
      "reading": "na̱¹",
      "explanationEN": "tomorrow"
    },
    {
      "character": "𗪊",
      "reading": "bi¹",
      "explanationEN": "plate; token"
    },
    {
      "character": "𗿍",
      "reading": "śaw¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗻊",
      "reading": "do̱²",
      "explanationEN": "poison; toxin"
    },
    {
      "character": "𗻚",
      "reading": "nao̱h²",
      "explanationEN": "poison; toxin"
    },
    {
      "character": "𗺮",
      "reading": "vwi̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗩬",
      "reading": "śi²",
      "explanationEN": "knowledge"
    },
    {
      "character": "𗿸",
      "reading": "vwi̱²",
      "explanationEN": "name; title"
    },
    {
      "character": "𗻰",
      "reading": "tshi̱w²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻷",
      "reading": "thu̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗏺",
      "reading": "rer²",
      "explanationEN": "INTER: DIR; OPT: DIR"
    },
    {
      "character": "𗐀",
      "reading": "rer²",
      "explanationEN": "pool efforts"
    },
    {
      "character": "𗧤",
      "reading": "pha¹",
      "explanationEN": "to break off; to sever"
    },
    {
      "character": "𗿫",
      "reading": "kwə¹",
      "explanationEN": "turtledove"
    },
    {
      "character": "𗦄",
      "reading": "rdi̱r²",
      "explanationEN": "to fear; to terrify"
    },
    {
      "character": "𗫄",
      "reading": "dzwə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗧛",
      "reading": "geh¹",
      "explanationEN": "to select; to choose"
    },
    {
      "character": "𗧟",
      "reading": "nźə¹",
      "explanationEN": "to hate"
    },
    {
      "character": "𗩗",
      "reading": "dzeṃ¹",
      "explanationEN": "law; statue"
    },
    {
      "character": "𗫧",
      "reading": "nwə¹",
      "explanationEN": "custom; common sayings"
    },
    {
      "character": "𗥭",
      "reading": "lae̱²",
      "explanationEN": "to carry off; to loot"
    },
    {
      "character": "𗧃",
      "reading": "gi²",
      "explanationEN": "to manage; to direct; to preside"
    },
    {
      "character": "𗏸",
      "reading": "ma¹",
      "explanationEN": "doorframe"
    },
    {
      "character": "𗻋",
      "reading": "lhi̱w²",
      "explanationEN": "to herd; to tend"
    },
    {
      "character": "𗏢",
      "reading": "rγu̱r¹",
      "explanationEN": "festival; date"
    },
    {
      "character": "𗽔",
      "reading": "bə̱²",
      "explanationEN": "pagoda"
    },
    {
      "character": "𗟟",
      "reading": "pao̱h¹",
      "explanationEN": "bottom"
    },
    {
      "character": "𘜨",
      "reading": "tṣhwae̱¹",
      "explanationEN": "very fast; at high speed"
    },
    {
      "character": "𘚵",
      "reading": "ŋqo̱²",
      "explanationEN": "fan"
    },
    {
      "character": "𘝐",
      "reading": "γae̱¹",
      "explanationEN": "to revolve; to rotate; to spin"
    },
    {
      "character": "𘜧",
      "reading": "qwu̱h²",
      "explanationEN": "slow"
    },
    {
      "character": "𘚬",
      "reading": "γi̱ṃ¹",
      "explanationEN": "be whizzing"
    },
    {
      "character": "𗺈",
      "reading": "the²",
      "explanationEN": "raised"
    },
    {
      "character": "𗃚",
      "reading": "nne̱²",
      "explanationEN": "deaf"
    },
    {
      "character": "𗃟",
      "reading": "qə̱¹",
      "explanationEN": "bag; sack"
    },
    {
      "character": "𗃴",
      "reading": "ŋkhau̱¹",
      "explanationEN": "to milk"
    },
    {
      "character": "𗃞",
      "reading": "qə̱¹",
      "explanationEN": "puppy"
    },
    {
      "character": "𗃾",
      "reading": "nəh²",
      "explanationEN": "nasal cavity"
    },
    {
      "character": "𗃻",
      "reading": "nəh²",
      "explanationEN": "wisdom; consciousness"
    },
    {
      "character": "𘓞",
      "reading": "tih¹",
      "explanationEN": "to hope; to wish"
    },
    {
      "character": "𗃘",
      "reading": "γo̱²",
      "explanationEN": "pleasure"
    },
    {
      "character": "𘓕",
      "reading": "rur¹",
      "explanationEN": "treacherous; frivolous"
    },
    {
      "character": "𘓖",
      "reading": "qo̱ṃ¹",
      "explanationEN": "public affairs; merit"
    },
    {
      "character": "𗃥",
      "reading": "qə̱¹",
      "explanationEN": "scabies"
    },
    {
      "character": "𗬩",
      "reading": "qai̱¹",
      "explanationEN": "commandment; (Buddhist) discipline"
    },
    {
      "character": "𗬮",
      "reading": "rdər²",
      "explanationEN": "diligent; hardworking"
    },
    {
      "character": "𗴙",
      "reading": "zi̱w²",
      "explanationEN": "elbow"
    },
    {
      "character": "𗴜",
      "reading": "qu̱h²",
      "explanationEN": "slow"
    },
    {
      "character": "𘓟",
      "reading": "dẓae̱²",
      "explanationEN": "faith; trust"
    },
    {
      "character": "𗬭",
      "reading": "ndźa²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗬰",
      "reading": "ṇi²",
      "explanationEN": "male"
    },
    {
      "character": "𗴤",
      "reading": "yiw²",
      "explanationEN": "sentry; examination"
    },
    {
      "character": "𗼫",
      "reading": "su²",
      "explanationEN": "medicine"
    },
    {
      "character": "𗼘",
      "reading": "pho̱ṃ¹",
      "explanationEN": "month"
    },
    {
      "character": "𗼟",
      "reading": "śwu²",
      "explanationEN": "peace and happiness"
    },
    {
      "character": "𗼉",
      "reading": "swe¹",
      "explanationEN": "year"
    },
    {
      "character": "𗼎",
      "reading": "mə²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗼞",
      "reading": "qo̱ṃ²",
      "explanationEN": "government official"
    },
    {
      "character": "𗼢",
      "reading": "rzə̱r²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘉆",
      "reading": "tsha̱¹",
      "explanationEN": "mixed"
    },
    {
      "character": "𗺓",
      "reading": "twi̱h²",
      "explanationEN": "to continue"
    },
    {
      "character": "𗁂",
      "reading": "dziw²",
      "explanationEN": "wooden handcuffs"
    },
    {
      "character": "𗂷",
      "reading": "twi̱h¹",
      "explanationEN": "to sew; to follow the pattern of"
    },
    {
      "character": "𗁉",
      "reading": "pheh¹",
      "explanationEN": "slant; leaning"
    },
    {
      "character": "𗆖",
      "reading": "rar¹",
      "explanationEN": "field; farmland"
    },
    {
      "character": "𗆜",
      "reading": "rtsa̱r¹",
      "explanationEN": "to escape; to flee"
    },
    {
      "character": "𗄳",
      "reading": "mma¹",
      "explanationEN": "big; great; thick"
    },
    {
      "character": "𗄽",
      "reading": "ẓaa̱ṃ¹",
      "explanationEN": "hill; mountain"
    },
    {
      "character": "𗂦",
      "reading": "ryir²",
      "explanationEN": "to chop; to kill"
    },
    {
      "character": "𗹺",
      "reading": "γaa̱ṃ²",
      "explanationEN": "to reduce; to decrease"
    },
    {
      "character": "𗀹",
      "reading": "zi¹",
      "explanationEN": "little; young (bird or beast)"
    },
    {
      "character": "𗅟",
      "reading": "ri̱wr¹",
      "explanationEN": "sharp"
    },
    {
      "character": "𗆏",
      "reading": "tśuh²",
      "explanationEN": "goat; lamb"
    },
    {
      "character": "𗆪",
      "reading": "nye¹",
      "explanationEN": "to exempt; to grant a pardon"
    },
    {
      "character": "𘝑",
      "reading": "ntswi̱¹",
      "explanationEN": "to sit; to squat"
    },
    {
      "character": "𗎿",
      "reading": "po̱¹",
      "explanationEN": "piebald"
    },
    {
      "character": "𗊻",
      "reading": "dźo²",
      "explanationEN": "sweat; perspiration"
    },
    {
      "character": "𗊜",
      "reading": "źu²",
      "explanationEN": "milk"
    },
    {
      "character": "𘊇",
      "reading": "śoṃ¹",
      "explanationEN": "to guard"
    },
    {
      "character": "𘊅",
      "reading": "po̱¹",
      "explanationEN": "sore"
    },
    {
      "character": "𗋍",
      "reading": "tswu̱h¹",
      "explanationEN": "alms bowl; earthen bowl; kettle"
    },
    {
      "character": "𘉣",
      "reading": "puh¹",
      "explanationEN": "love; adore"
    },
    {
      "character": "𗢙",
      "reading": "rnar²",
      "explanationEN": "stuffy; bored"
    },
    {
      "character": "𗫾",
      "reading": "ləh²",
      "explanationEN": "hare; donkey"
    },
    {
      "character": "𗨇",
      "reading": "tṣuo¹",
      "explanationEN": "to steal"
    },
    {
      "character": "𗧷",
      "reading": "llwu̱h¹",
      "explanationEN": "space"
    },
    {
      "character": "𗥕",
      "reading": "zu̱²",
      "explanationEN": "to tie up"
    },
    {
      "character": "𗨕",
      "reading": "mbao̱²",
      "explanationEN": "leprosy"
    },
    {
      "character": "𗣲",
      "reading": "bao̱¹",
      "explanationEN": "line; ranks"
    },
    {
      "character": "𗺶",
      "reading": "yiw²",
      "explanationEN": "straw rope"
    },
    {
      "character": "𗬝",
      "reading": "ri̱r²",
      "explanationEN": "shield"
    },
    {
      "character": "𗤥",
      "reading": "ŋah¹",
      "explanationEN": "vast"
    },
    {
      "character": "𗥣",
      "reading": "tsu̱²",
      "explanationEN": "to stand up; to rise; to jump"
    },
    {
      "character": "𗦮",
      "reading": "phe¹",
      "explanationEN": "to escape; to evade"
    },
    {
      "character": "𗏐",
      "reading": "ntshe̱²",
      "explanationEN": ""
    },
    {
      "character": "𗤢",
      "reading": "bi²",
      "explanationEN": "below; down"
    },
    {
      "character": "𗽆",
      "reading": "lwu¹",
      "explanationEN": "low"
    },
    {
      "character": "𗺵",
      "reading": "so̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗻺",
      "reading": "vah²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗺥",
      "reading": "bae̱h¹",
      "explanationEN": "cogongrass"
    },
    {
      "character": "𗥪",
      "reading": "reṃ²",
      "explanationEN": "to instruct; to teach"
    },
    {
      "character": "𗣅",
      "reading": "ŋwu̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗣫",
      "reading": "tse̱ṃ¹",
      "explanationEN": "small; little; young"
    },
    {
      "character": "𗼽",
      "reading": "si̱w²",
      "explanationEN": "small"
    },
    {
      "character": "𗾙",
      "reading": "li̱w²",
      "explanationEN": "little bird"
    },
    {
      "character": "𘊒",
      "reading": "koṃ¹",
      "explanationEN": "mouse"
    },
    {
      "character": "𘔱",
      "reading": "pa¹",
      "explanationEN": "crooked; askew"
    },
    {
      "character": "𗦿",
      "reading": "peṃ¹",
      "explanationEN": "border"
    },
    {
      "character": "𗣴",
      "reading": "vwi̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗤧",
      "reading": "tśuh¹",
      "explanationEN": "it; you; he; others"
    },
    {
      "character": "𗻍",
      "reading": "bu̱¹",
      "explanationEN": "cattail"
    },
    {
      "character": "𗥫",
      "reading": "ye¹",
      "explanationEN": "light"
    },
    {
      "character": "𗾶",
      "reading": "hu¹",
      "explanationEN": "void; empty"
    },
    {
      "character": "𘕀",
      "reading": "ndzi²",
      "explanationEN": "to know; to understand"
    },
    {
      "character": "𘚱",
      "reading": "lə²",
      "explanationEN": "bamboo or twig fence"
    },
    {
      "character": "𗃽",
      "reading": "rvwa̱r¹",
      "explanationEN": "despaired; destitute; poor"
    },
    {
      "character": "𗇌",
      "reading": "lu̱²",
      "explanationEN": "fortune; luck"
    },
    {
      "character": "𗐤",
      "reading": "veh²",
      "explanationEN": "to see someone off"
    },
    {
      "character": "𗐢",
      "reading": "tśə¹",
      "explanationEN": "presently; in a moment"
    },
    {
      "character": "𗇎",
      "reading": "veh²",
      "explanationEN": "yoke; chains; shackles; fetters"
    },
    {
      "character": "𗐟",
      "reading": "tśi²",
      "explanationEN": "natural resources; resources"
    },
    {
      "character": "𗐧",
      "reading": "ne²",
      "explanationEN": "to present (a gift)"
    },
    {
      "character": "𗇋",
      "reading": "rmer²",
      "explanationEN": "an auxiliary word"
    },
    {
      "character": "𘛃",
      "reading": "lu̱²",
      "explanationEN": "seat; place; official title"
    },
    {
      "character": "𗐡",
      "reading": "tśə¹",
      "explanationEN": "presently; in a moment"
    },
    {
      "character": "𗐣",
      "reading": "lu̱²",
      "explanationEN": "to enjoin; to tell"
    },
    {
      "character": "𗐝",
      "reading": "γiw²",
      "explanationEN": "butter"
    },
    {
      "character": "𘝕",
      "reading": "ne̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗐦",
      "reading": "lu̱²",
      "explanationEN": "bridal chamber"
    },
    {
      "character": "𗐞",
      "reading": "tśə¹",
      "explanationEN": "butter"
    },
    {
      "character": "𗇖",
      "reading": "rtśər²",
      "explanationEN": "to twine; to wind; to tie up"
    },
    {
      "character": "𗇔",
      "reading": "lə¹",
      "explanationEN": "to fall; to sink"
    },
    {
      "character": "𗐠",
      "reading": "tśə¹",
      "explanationEN": "to give as present; to present a gift"
    },
    {
      "character": "𗐥",
      "reading": "qwə̱¹",
      "explanationEN": "fortune; luck"
    },
    {
      "character": "𘟙",
      "reading": "ne²",
      "explanationEN": "king; monarch"
    },
    {
      "character": "𗇏",
      "reading": "le²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗇐",
      "reading": "dih²",
      "explanationEN": "to build"
    },
    {
      "character": "𗇙",
      "reading": "rlwə̱r²",
      "explanationEN": "to extricate"
    },
    {
      "character": "𗇍",
      "reading": "lhi̱w²",
      "explanationEN": "to catch fire"
    },
    {
      "character": "𗇘",
      "reading": "lhi̱w²",
      "explanationEN": "to extricate"
    },
    {
      "character": "𗇊",
      "reading": "the²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗇓",
      "reading": "śa¹",
      "explanationEN": "rope; to fasten"
    },
    {
      "character": "𗇗",
      "reading": "rzi̱r¹",
      "explanationEN": "to fasten; to tie up"
    },
    {
      "character": "𗇑",
      "reading": "ha̱²",
      "explanationEN": "happy; open wide"
    },
    {
      "character": "𗇕",
      "reading": "la̱¹",
      "explanationEN": "open wide"
    },
    {
      "character": "𗇒",
      "reading": "śa¹",
      "explanationEN": "rope; to fasten"
    },
    {
      "character": "𗭆",
      "reading": "ta̱h¹",
      "explanationEN": "mound; hillock"
    },
    {
      "character": "𗭌",
      "reading": "do̱ṃ²",
      "explanationEN": "shin; leg"
    },
    {
      "character": "𗭍",
      "reading": "dźeh¹",
      "explanationEN": "to go; to send"
    },
    {
      "character": "𗭈",
      "reading": "bi²",
      "explanationEN": "to overflow; to spill"
    },
    {
      "character": "𘀆",
      "reading": "ne²",
      "explanationEN": "INTER; OPT: DOWN"
    },
    {
      "character": "𘛄",
      "reading": "???",
      "explanationEN": "official title; the rank of nobility"
    },
    {
      "character": "𗭡",
      "reading": "rtswər¹",
      "explanationEN": "group; line"
    },
    {
      "character": "𘀐",
      "reading": "źiw¹",
      "explanationEN": "six; the sixth"
    },
    {
      "character": "𘀔",
      "reading": "phu̱¹",
      "explanationEN": "cattail"
    },
    {
      "character": "𘀕",
      "reading": "rtsi̱r¹",
      "explanationEN": "spot; stain; speckle"
    },
    {
      "character": "𘕂",
      "reading": "dźe¹",
      "explanationEN": "to go; to parade"
    },
    {
      "character": "𘊺",
      "reading": "nwə²",
      "explanationEN": "to burn"
    },
    {
      "character": "𘋀",
      "reading": "rgur²",
      "explanationEN": "happy"
    },
    {
      "character": "𗭥",
      "reading": "rpar²",
      "explanationEN": "incomplete; fragmentary"
    },
    {
      "character": "𗭤",
      "reading": "puh¹",
      "explanationEN": "incomplete; fragmentary"
    },
    {
      "character": "𗭏",
      "reading": "ge²",
      "explanationEN": "fetters"
    },
    {
      "character": "𘕃",
      "reading": "dźe¹",
      "explanationEN": "to comment; to prepare"
    },
    {
      "character": "𘋇",
      "reading": "fi¹",
      "explanationEN": "mouse; rat"
    },
    {
      "character": "𗭓",
      "reading": "γae̱¹",
      "explanationEN": "shoes"
    },
    {
      "character": "𗭇",
      "reading": "ge²",
      "explanationEN": "shin"
    },
    {
      "character": "𗭚",
      "reading": "sə²",
      "explanationEN": "fetters"
    },
    {
      "character": "𗭙",
      "reading": "???",
      "explanationEN": "to extract"
    },
    {
      "character": "𘊷",
      "reading": "nu̱h¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘛅",
      "reading": "dzəh²",
      "explanationEN": "official title; the rank of nobility"
    },
    {
      "character": "𘀓",
      "reading": "tse̱?",
      "explanationEN": "rat; mouse"
    },
    {
      "character": "𘛈",
      "reading": "qaa̱¹",
      "explanationEN": "household utensils; containers"
    },
    {
      "character": "𘀶",
      "reading": "la̱¹",
      "explanationEN": "flour sifter"
    },
    {
      "character": "𘀠",
      "reading": "kwih¹",
      "explanationEN": "full; filled"
    },
    {
      "character": "𗭫",
      "reading": "pi¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘊣",
      "reading": "so̱²",
      "explanationEN": "“Yang” (the positive side) of the Chinese “Yin-yang” concept"
    },
    {
      "character": "𘁀",
      "reading": "rkir¹",
      "explanationEN": "woolens"
    },
    {
      "character": "𘀪",
      "reading": "ra̱r²",
      "explanationEN": "meat stuffing; sausage"
    },
    {
      "character": "𘀝",
      "reading": "ywə¹",
      "explanationEN": "hunger"
    },
    {
      "character": "𘀴",
      "reading": "zwaṃ²",
      "explanationEN": "to revolve; to rotate"
    },
    {
      "character": "𘀬",
      "reading": "γa̱¹",
      "explanationEN": "bag; pocket; sack"
    },
    {
      "character": "𘀧",
      "reading": "me¹",
      "explanationEN": "lower limbs; legs"
    },
    {
      "character": "𘚿",
      "reading": "me²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘛇",
      "reading": "gu²",
      "explanationEN": "utensils"
    },
    {
      "character": "𘀨",
      "reading": "???",
      "explanationEN": "a kind of ghost"
    },
    {
      "character": "𘊤",
      "reading": "thu¹",
      "explanationEN": "to stuff"
    },
    {
      "character": "𘀞",
      "reading": "rzer¹",
      "explanationEN": "filled; full"
    },
    {
      "character": "𘟏",
      "reading": "bi¹",
      "explanationEN": "power; might"
    },
    {
      "character": "𘀩",
      "reading": "rgwar²",
      "explanationEN": "lower limbs; legs"
    },
    {
      "character": "𗭟",
      "reading": "le¹",
      "explanationEN": "convulsion"
    },
    {
      "character": "𗭜",
      "reading": "ndẓaa̱²",
      "explanationEN": "lameness"
    },
    {
      "character": "𘀌",
      "reading": "rtsi̱r¹",
      "explanationEN": "buffalo gnat"
    },
    {
      "character": "𘀜",
      "reading": "tshwu¹",
      "explanationEN": "locust"
    },
    {
      "character": "𘛀",
      "reading": "mbe²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘊳",
      "reading": "bo̱¹",
      "explanationEN": "line; march"
    },
    {
      "character": "𘀇",
      "reading": "źiw¹",
      "explanationEN": "to invade"
    },
    {
      "character": "𘀋",
      "reading": "geh²",
      "explanationEN": "excrement; dung"
    },
    {
      "character": "𗐨",
      "reading": "ẓai̱¹",
      "explanationEN": "rare; sparse"
    },
    {
      "character": "𘊶",
      "reading": "nə¹",
      "explanationEN": "aunt; father's sisters"
    },
    {
      "character": "𘀷",
      "reading": "rər²",
      "explanationEN": "fruit"
    },
    {
      "character": "𗭬",
      "reading": "pi¹",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𘀹",
      "reading": "kha²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𘀼",
      "reading": "ni̱h¹",
      "explanationEN": "to give a speech; to publicize"
    },
    {
      "character": "𘀻",
      "reading": "γiw²",
      "explanationEN": "to grow; to increase"
    },
    {
      "character": "𘀟",
      "reading": "γo̱¹",
      "explanationEN": "belly; abdomen; stomach"
    },
    {
      "character": "𘀡",
      "reading": "də²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𘀾",
      "reading": "tsho̱ṃ¹",
      "explanationEN": "old; aged"
    },
    {
      "character": "𘊫",
      "reading": "pha̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘀘",
      "reading": "mphe̱¹",
      "explanationEN": "to cover; to block"
    },
    {
      "character": "𘋂",
      "reading": "phu¹",
      "explanationEN": "feast; banquet"
    },
    {
      "character": "𘀚",
      "reading": "tṣhao̱¹",
      "explanationEN": "origin; source"
    },
    {
      "character": "𘋈",
      "reading": "nao̱h²",
      "explanationEN": "rat"
    },
    {
      "character": "𗭐",
      "reading": "lu̱²",
      "explanationEN": "proper; upright; regular"
    },
    {
      "character": "𘀏",
      "reading": "pu̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘀈",
      "reading": "phu̱¹",
      "explanationEN": "soil; land"
    },
    {
      "character": "𘀑",
      "reading": "pu̱¹",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗭞",
      "reading": "bi²",
      "explanationEN": "step; pace"
    },
    {
      "character": "𘀊",
      "reading": "lə̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘊸",
      "reading": "ba̱²",
      "explanationEN": "mother-in-law"
    },
    {
      "character": "𘊥",
      "reading": "dź??",
      "explanationEN": "to clear away"
    },
    {
      "character": "𗭪",
      "reading": "si²",
      "explanationEN": "IFR: inferential"
    },
    {
      "character": "𘋌",
      "reading": "ntśə¹",
      "explanationEN": "to sew; to patch up"
    },
    {
      "character": "𘊦",
      "reading": "thu¹",
      "explanationEN": "a classifier"
    },
    {
      "character": "𘊪",
      "reading": "śəh¹",
      "explanationEN": "arrow"
    },
    {
      "character": "𘀵",
      "reading": "kuh¹",
      "explanationEN": "to bow; to salute"
    },
    {
      "character": "𘊬",
      "reading": "sa̱¹",
      "explanationEN": "even; equal"
    },
    {
      "character": "𗭢",
      "reading": "tśhwiw²",
      "explanationEN": "to support; to sustain"
    },
    {
      "character": "𘀙",
      "reading": "bo²",
      "explanationEN": "clear; obvious"
    },
    {
      "character": "𗭛",
      "reading": "sweṃ²",
      "explanationEN": "heel"
    },
    {
      "character": "𘀎",
      "reading": "rmu̱r¹",
      "explanationEN": "dark; dim"
    },
    {
      "character": "𘀍",
      "reading": "na²",
      "explanationEN": "pron. you"
    },
    {
      "character": "𘀒",
      "reading": "dẓaa̱ṃ²",
      "explanationEN": "name of a star"
    },
    {
      "character": "𘀖",
      "reading": "geh¹",
      "explanationEN": "blush"
    },
    {
      "character": "𘋃",
      "reading": "tśhwi¹",
      "explanationEN": "to melt; to smelt"
    },
    {
      "character": "𗭦",
      "reading": "tśhwiw²",
      "explanationEN": "to support; to sustain"
    },
    {
      "character": "𗭨",
      "reading": "swi²",
      "explanationEN": "unreal image"
    },
    {
      "character": "𘀮",
      "reading": "lhə̱¹",
      "explanationEN": "to shrink; to contract"
    },
    {
      "character": "𘀦",
      "reading": "me²",
      "explanationEN": "stars"
    },
    {
      "character": "𘀭",
      "reading": "qwae̱²",
      "explanationEN": "true; precious"
    },
    {
      "character": "𘀫",
      "reading": "zəh¹",
      "explanationEN": "foe; enemy"
    },
    {
      "character": "𘊱",
      "reading": "pha̱¹",
      "explanationEN": "half; side"
    },
    {
      "character": "𘝘",
      "reading": "yiw¹",
      "explanationEN": "disease; illness"
    },
    {
      "character": "𗐩",
      "reading": "ẓai̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘝗",
      "reading": "yiw¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘞣",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "wooden saddle"
    },
    {
      "character": "𘞡",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "colored glaze"
    },
    {
      "character": "𘋎",
      "reading": "kwa̱ṃ¹",
      "explanationEN": "strings for a saddle"
    },
    {
      "character": "𗭝",
      "reading": "thwo̱²",
      "explanationEN": "bottom; base"
    },
    {
      "character": "𗭕",
      "reading": "le̱²",
      "explanationEN": "to tread on; to trample"
    },
    {
      "character": "𗭔",
      "reading": "le̱²",
      "explanationEN": "to tread on; to trample"
    },
    {
      "character": "𘀛",
      "reading": "lə̱²",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𘕈",
      "reading": "tśə¹",
      "explanationEN": "to realize; to wake up to reality"
    },
    {
      "character": "𘊾",
      "reading": "kaw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘊵",
      "reading": "thu̱¹",
      "explanationEN": "skill; artistry"
    },
    {
      "character": "𘀗",
      "reading": "tshwu¹",
      "explanationEN": "sky; heaven"
    },
    {
      "character": "𘊴",
      "reading": "thu̱¹",
      "explanationEN": "to talk; to speak"
    },
    {
      "character": "𘕄",
      "reading": "ta̱ṃ¹",
      "explanationEN": "upright; honorable"
    },
    {
      "character": "𘕇",
      "reading": "γiw²",
      "explanationEN": "butter"
    },
    {
      "character": "𘝖",
      "reading": "yiw¹",
      "explanationEN": "oil; fat; grease"
    },
    {
      "character": "𘊽",
      "reading": "thi̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘋁",
      "reading": "dźwi¹",
      "explanationEN": "to melt; to eliminate"
    },
    {
      "character": "𘟚",
      "reading": "də¹",
      "explanationEN": "imperial edict"
    },
    {
      "character": "𘋆",
      "reading": "rfwa̱r¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗭗",
      "reading": "paə̱²",
      "explanationEN": "boots"
    },
    {
      "character": "𘀉",
      "reading": "źiw¹",
      "explanationEN": "bird"
    },
    {
      "character": "𗭣",
      "reading": "thwo̱¹",
      "explanationEN": "to pad; to put something under something else"
    },
    {
      "character": "𘊿",
      "reading": "ba̱²",
      "explanationEN": "to cherish; to treasure"
    },
    {
      "character": "𗭋",
      "reading": "tśə¹",
      "explanationEN": "a horse with white trotters"
    },
    {
      "character": "𗭘",
      "reading": "ntsa̱¹",
      "explanationEN": "legs; shin"
    },
    {
      "character": "𘛉",
      "reading": "ntswə¹",
      "explanationEN": "pot; jar"
    },
    {
      "character": "𘕉",
      "reading": "vih¹",
      "explanationEN": "taste; flavor"
    },
    {
      "character": "𘀣",
      "reading": "leṃ²",
      "explanationEN": "grease"
    },
    {
      "character": "𘕊",
      "reading": "qhaə̱²",
      "explanationEN": "smell; taste"
    },
    {
      "character": "𘋋",
      "reading": "dwu²",
      "explanationEN": "to mend; to patch; to repair"
    },
    {
      "character": "𘋉",
      "reading": "dźoṃ¹",
      "explanationEN": "to do; to make"
    },
    {
      "character": "𘞠",
      "reading": "mpho²",
      "explanationEN": "gentle; harmonious"
    },
    {
      "character": "𘛆",
      "reading": "sweṃh¹",
      "explanationEN": "casket; a small box (case)"
    },
    {
      "character": "𘀢",
      "reading": "tha̱¹",
      "explanationEN": "camel"
    },
    {
      "character": "𘀽",
      "reading": "ntshi²",
      "explanationEN": "to speak.ʙ"
    },
    {
      "character": "𘊧",
      "reading": "ṇiw²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘀰",
      "reading": "tsha²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘋊",
      "reading": "dźoṃ¹",
      "explanationEN": "to play; to sport"
    },
    {
      "character": "𘀯",
      "reading": "ma̱h²",
      "explanationEN": "to spread; to scatter"
    },
    {
      "character": "𗭩",
      "reading": "vi̱h¹",
      "explanationEN": "foolish; stupid"
    },
    {
      "character": "𘀥",
      "reading": "luh²",
      "explanationEN": "stomach; belly"
    },
    {
      "character": "𘊨",
      "reading": "thi̱w²",
      "explanationEN": "to eliminate; to get rid of"
    },
    {
      "character": "𘁁",
      "reading": "ndze²",
      "explanationEN": "to cut out"
    },
    {
      "character": "𘊮",
      "reading": "rtar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘋅",
      "reading": "sa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘊹",
      "reading": "kaw¹",
      "explanationEN": "foundation; basis; burden"
    },
    {
      "character": "𘊻",
      "reading": "nə¹",
      "explanationEN": "mother-in-law"
    },
    {
      "character": "𘊼",
      "reading": "thwe̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗭭",
      "reading": "dəh¹",
      "explanationEN": "smash; grain"
    },
    {
      "character": "𗭊",
      "reading": "ye¹",
      "explanationEN": "INTER: interrogative; OPT: UP; CONT: continuative"
    },
    {
      "character": "𗭒",
      "reading": "khə¹",
      "explanationEN": "foot"
    },
    {
      "character": "𗭠",
      "reading": "qha̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘕆",
      "reading": "ta̱ṃ¹",
      "explanationEN": "to bear (a burden); to shoulder"
    },
    {
      "character": "𘕁",
      "reading": "rzər¹",
      "explanationEN": "to note; to record"
    },
    {
      "character": "𗭖",
      "reading": "khə²",
      "explanationEN": "threshold"
    },
    {
      "character": "𘋄",
      "reading": "phu¹",
      "explanationEN": "to look for"
    },
    {
      "character": "𘀤",
      "reading": "də²",
      "explanationEN": "camel"
    },
    {
      "character": "𘞢",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "nostril"
    },
    {
      "character": "𘋍",
      "reading": "yu¹",
      "explanationEN": "to taste"
    },
    {
      "character": "𘛊",
      "reading": "qaa̱¹",
      "explanationEN": "firm"
    },
    {
      "character": "𘀸",
      "reading": "zwaṃ²",
      "explanationEN": "eggplant; aubergine"
    },
    {
      "character": "𘊩",
      "reading": "thu¹",
      "explanationEN": "to draw (a bow)"
    },
    {
      "character": "𘀳",
      "reading": "kha²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘀺",
      "reading": "kha²",
      "explanationEN": "to draw (water); derive"
    },
    {
      "character": "𘀿",
      "reading": "nno̱²",
      "explanationEN": "a kind of bag"
    },
    {
      "character": "𘀲",
      "reading": "kha²",
      "explanationEN": "#ERROR!"
    },
    {
      "character": "𘊭",
      "reading": "rtswə̱r²",
      "explanationEN": "interests (on an investment)"
    },
    {
      "character": "𘊰",
      "reading": "pha̱¹",
      "explanationEN": "to damage; to lose"
    },
    {
      "character": "𘊲",
      "reading": "mphaa̱²",
      "explanationEN": "to divide; fraction"
    },
    {
      "character": "𗭧",
      "reading": "dəh¹",
      "explanationEN": "smash; grain"
    },
    {
      "character": "𗭑",
      "reading": "śu¹",
      "explanationEN": "fetters"
    },
    {
      "character": "𘛁",
      "reading": "mbe²",
      "explanationEN": "line"
    },
    {
      "character": "𗭉",
      "reading": "ntśə²",
      "explanationEN": "to fall; to tumble"
    },
    {
      "character": "𗭎",
      "reading": "nśi²",
      "explanationEN": "to fall; to tumble"
    },
    {
      "character": "𘕅",
      "reading": "ta̱ṃ¹",
      "explanationEN": "scabies"
    },
    {
      "character": "𘛂",
      "reading": "mbe²",
      "explanationEN": "roadside stop; to travel"
    },
    {
      "character": "𘊯",
      "reading": "twi¹",
      "explanationEN": "to be choked"
    },
    {
      "character": "𗺋",
      "reading": "tśhi¹",
      "explanationEN": "base; origin"
    },
    {
      "character": "𗺉",
      "reading": "tśhi²",
      "explanationEN": "base; origin"
    },
    {
      "character": "𗢌",
      "reading": "pi̱ṃ¹",
      "explanationEN": "dung; excrement"
    },
    {
      "character": "𗢍",
      "reading": "ni²",
      "explanationEN": "auspicious; lucky"
    },
    {
      "character": "𗡿",
      "reading": "swa̱¹",
      "explanationEN": "drop; eardrop"
    },
    {
      "character": "𘚌",
      "reading": "re̱r²",
      "explanationEN": "to stop; to stagnate"
    },
    {
      "character": "𗎶",
      "reading": "qo̱ṃ¹",
      "explanationEN": "to collapse"
    },
    {
      "character": "𗍱",
      "reading": "zəh²",
      "explanationEN": "two"
    },
    {
      "character": "𗎵",
      "reading": "nvu²",
      "explanationEN": "to combine; to contract"
    },
    {
      "character": "𗍲",
      "reading": "la¹",
      "explanationEN": "between; among"
    },
    {
      "character": "𗍫",
      "reading": "nnə¹",
      "explanationEN": "two"
    },
    {
      "character": "𗍳",
      "reading": "ni²",
      "explanationEN": "pron.honorific you"
    },
    {
      "character": "𗍪",
      "reading": "tsheṃ¹",
      "explanationEN": "intimate; close"
    },
    {
      "character": "𘀃",
      "reading": "ŋgu²",
      "explanationEN": "snake"
    },
    {
      "character": "𘀄",
      "reading": "ŋgu²",
      "explanationEN": "lucky"
    },
    {
      "character": "𗎑",
      "reading": "rmu̱r²",
      "explanationEN": "hail"
    },
    {
      "character": "𗎔",
      "reading": "dźe²",
      "explanationEN": "cold; frigid"
    },
    {
      "character": "𗎗",
      "reading": "kuh¹",
      "explanationEN": "cold"
    },
    {
      "character": "𗺊",
      "reading": "gi¹",
      "explanationEN": "mineral resources"
    },
    {
      "character": "𗺍",
      "reading": "dẓwaə̱¹",
      "explanationEN": "to pull; to draw; to tug"
    },
    {
      "character": "𗢈",
      "reading": "tsa̱¹",
      "explanationEN": "village"
    },
    {
      "character": "𗎺",
      "reading": "vwa̱²",
      "explanationEN": "a figure of sitting"
    },
    {
      "character": "𗍰",
      "reading": "poh²",
      "explanationEN": "to ride"
    },
    {
      "character": "𘔯",
      "reading": "ŋkhau̱¹",
      "explanationEN": "to greet"
    },
    {
      "character": "𗎃",
      "reading": "qai̱²",
      "explanationEN": "to detest; to abhor"
    },
    {
      "character": "𗎉",
      "reading": "kəh²",
      "explanationEN": "cold; frigid"
    },
    {
      "character": "𗎐",
      "reading": "kəh²",
      "explanationEN": "harm; danger"
    },
    {
      "character": "𗢊",
      "reading": "vuh²",
      "explanationEN": "dung; excrement"
    },
    {
      "character": "𗢀",
      "reading": "swa̱¹",
      "explanationEN": "hair"
    },
    {
      "character": "𗎖",
      "reading": "qhai̱¹",
      "explanationEN": "bitter"
    },
    {
      "character": "𗺌",
      "reading": "ri̱wr²",
      "explanationEN": "foot"
    },
    {
      "character": "𗍬",
      "reading": "lu²",
      "explanationEN": "a unit of weight"
    },
    {
      "character": "𗍩",
      "reading": "hə²",
      "explanationEN": "calamity; disaster"
    },
    {
      "character": "𗍨",
      "reading": "rzu̱r²",
      "explanationEN": "message; letter"
    },
    {
      "character": "𗎓",
      "reading": "rkiwr¹",
      "explanationEN": "cold; frigid"
    },
    {
      "character": "𗎒",
      "reading": "da̱h²",
      "explanationEN": "cold"
    },
    {
      "character": "𗎈",
      "reading": "γwo̱ṃh¹",
      "explanationEN": "ice"
    },
    {
      "character": "𗎸",
      "reading": "tśa²",
      "explanationEN": "sled; sledge; sleigh"
    },
    {
      "character": "𗍴",
      "reading": "rdi̱r²",
      "explanationEN": "a unit of measurement"
    },
    {
      "character": "𘉤",
      "reading": "rvwi̱r¹",
      "explanationEN": "to meet; to see"
    },
    {
      "character": "𗢋",
      "reading": "dźe²",
      "explanationEN": "to give birth"
    },
    {
      "character": "𗺏",
      "reading": "yeṃ²",
      "explanationEN": "socks"
    },
    {
      "character": "𗺎",
      "reading": "ntśhə¹",
      "explanationEN": "to examine"
    },
    {
      "character": "𗎹",
      "reading": "mbu²",
      "explanationEN": "to contract; to shrink"
    },
    {
      "character": "𗳂",
      "reading": "rur²",
      "explanationEN": "fine horse; steed"
    },
    {
      "character": "𘓪",
      "reading": "beh¹",
      "explanationEN": "sandalwood"
    },
    {
      "character": "𘇒",
      "reading": "rvwai̱r¹",
      "explanationEN": "to cherish.ᴀ; to treasure.ᴀ"
    },
    {
      "character": "𘇓",
      "reading": "rvwao̱r¹",
      "explanationEN": "to cherish.ʙ; to treasure.ʙ"
    },
    {
      "character": "𗗑",
      "reading": "kuh¹",
      "explanationEN": "to live; strong; robust"
    },
    {
      "character": "𗗏",
      "reading": "rpwər¹",
      "explanationEN": "to advise; to urge"
    },
    {
      "character": "𘀅",
      "reading": "ŋgu²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𗳁",
      "reading": "me̱²",
      "explanationEN": "to fete; to present (a gift)"
    },
    {
      "character": "𗗎",
      "reading": "rpwər¹",
      "explanationEN": "to advise; to urge"
    },
    {
      "character": "𗲿",
      "reading": "me̱²",
      "explanationEN": "catkin"
    },
    {
      "character": "𘇐",
      "reading": "śoṃ¹",
      "explanationEN": "to esteem; to worship; to uphold"
    },
    {
      "character": "𗗒",
      "reading": "kuh¹",
      "explanationEN": "land; soil"
    },
    {
      "character": "𗗐",
      "reading": "yiw²",
      "explanationEN": "life"
    },
    {
      "character": "𗳀",
      "reading": "me̱²",
      "explanationEN": "soft"
    },
    {
      "character": "𘇔",
      "reading": "ndza¹",
      "explanationEN": "thrifty; frugal"
    },
    {
      "character": "𘇕",
      "reading": "dziw²",
      "explanationEN": "to cherish"
    },
    {
      "character": "𗎏",
      "reading": "meh¹",
      "explanationEN": "cold; frigid"
    },
    {
      "character": "𗎄",
      "reading": "rvwə̱r²",
      "explanationEN": "dew"
    },
    {
      "character": "𗎇",
      "reading": "rvwə̱r²",
      "explanationEN": "back; spine"
    },
    {
      "character": "𗎋",
      "reading": "rvwə̱r²",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𗎅",
      "reading": "rγo̱r²",
      "explanationEN": "to contend; to vie; to strive"
    },
    {
      "character": "𗎊",
      "reading": "re̱r¹",
      "explanationEN": "the twelfth lunar month"
    },
    {
      "character": "𘇑",
      "reading": "γu̱¹",
      "explanationEN": "to exchange; to change"
    },
    {
      "character": "𗢉",
      "reading": "tsa̱¹",
      "explanationEN": "firm"
    },
    {
      "character": "𗎷",
      "reading": "tśa¹",
      "explanationEN": "to connect"
    },
    {
      "character": "𗍯",
      "reading": "???",
      "explanationEN": "(tree) branch; twig"
    },
    {
      "character": "𗍮",
      "reading": "rdi̱wr¹",
      "explanationEN": "lamb"
    },
    {
      "character": "𗍭",
      "reading": "loṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗎌",
      "reading": "dźuo²",
      "explanationEN": "cold; frigid"
    },
    {
      "character": "𗎎",
      "reading": "qwai̱¹",
      "explanationEN": "frigid"
    },
    {
      "character": "𗎆",
      "reading": "vih¹",
      "explanationEN": "snow"
    },
    {
      "character": "𗎍",
      "reading": "qhai̱¹",
      "explanationEN": "to detest.ᴀ"
    },
    {
      "character": "𗞯",
      "reading": "hau̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞳",
      "reading": "śwu²",
      "explanationEN": "winding corridor; ambulatory"
    },
    {
      "character": "𗚌",
      "reading": "si¹",
      "explanationEN": "tail; backside"
    },
    {
      "character": "𗚏",
      "reading": "ẓaa̱¹",
      "explanationEN": "Chinese fir"
    },
    {
      "character": "𗝼",
      "reading": "dih²",
      "explanationEN": "agalloch; agalwood"
    },
    {
      "character": "𗚠",
      "reading": "qhu̱²",
      "explanationEN": "basket"
    },
    {
      "character": "𗚑",
      "reading": "do̱¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗚻",
      "reading": "śeṃ²",
      "explanationEN": "litre; a unit of measurement"
    },
    {
      "character": "𗜹",
      "reading": "lhih¹",
      "explanationEN": "to enter"
    },
    {
      "character": "𗜂",
      "reading": "γao̱h¹",
      "explanationEN": "garden; yard"
    },
    {
      "character": "𗛜",
      "reading": "reṃ²",
      "explanationEN": "circle; circumference"
    },
    {
      "character": "𗝻",
      "reading": "qwə̱²",
      "explanationEN": "tree tumor"
    },
    {
      "character": "𗞲",
      "reading": "do̱²",
      "explanationEN": "to collapse; to cave in"
    },
    {
      "character": "𗛃",
      "reading": "lləh¹",
      "explanationEN": "to come; to arrive"
    },
    {
      "character": "𗜟",
      "reading": "ŋgiw¹",
      "explanationEN": "a kind of plant"
    },
    {
      "character": "𗝗",
      "reading": "no̱¹",
      "explanationEN": "roof beam"
    },
    {
      "character": "𗛆",
      "reading": "rvwa̱r²",
      "explanationEN": "branch; twig"
    },
    {
      "character": "𗛤",
      "reading": "rpa̱r²",
      "explanationEN": "awning; shed"
    },
    {
      "character": "𗝉",
      "reading": "vwa̱h²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗝄",
      "reading": "swaṃ²",
      "explanationEN": "to revolve"
    },
    {
      "character": "𗝒",
      "reading": "γəh¹",
      "explanationEN": "charcoal"
    },
    {
      "character": "𗝓",
      "reading": "qaə̱²",
      "explanationEN": "earthen bowl"
    },
    {
      "character": "𗞝",
      "reading": "ge²",
      "explanationEN": "wilderness; open field"
    },
    {
      "character": "𗝳",
      "reading": "naw¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗝥",
      "reading": "rmu̱r¹",
      "explanationEN": "tree; wood"
    },
    {
      "character": "𗞌",
      "reading": "źiw¹",
      "explanationEN": "cypress"
    },
    {
      "character": "𗟒",
      "reading": "pai̱¹",
      "explanationEN": "cypress"
    },
    {
      "character": "𗞭",
      "reading": "vwi̱¹",
      "explanationEN": "thin"
    },
    {
      "character": "𗝺",
      "reading": "nna̱²",
      "explanationEN": "flood; floodwater"
    },
    {
      "character": "𗛄",
      "reading": "lwuh¹",
      "explanationEN": "rafter"
    },
    {
      "character": "𗛨",
      "reading": "rna̱r²",
      "explanationEN": "to move; to shift"
    },
    {
      "character": "𗛪",
      "reading": "giw¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗚢",
      "reading": "phaa̱¹",
      "explanationEN": "rake"
    },
    {
      "character": "𗜚",
      "reading": "dẓao̱¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞍",
      "reading": "kaw¹",
      "explanationEN": "pedestal; plinth"
    },
    {
      "character": "𗞻",
      "reading": "qaə̱²",
      "explanationEN": "jaw"
    },
    {
      "character": "𗞫",
      "reading": "tśi¹",
      "explanationEN": "cracking sound"
    },
    {
      "character": "𗟍",
      "reading": "ryur¹",
      "explanationEN": "Chinese crab apple"
    },
    {
      "character": "𗝘",
      "reading": "ṇwə̱²",
      "explanationEN": "bamboo"
    },
    {
      "character": "𗝧",
      "reading": "tsha̱h¹",
      "explanationEN": "to crack; to split"
    },
    {
      "character": "𗝜",
      "reading": "rdər²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗜡",
      "reading": "tsho̱ṃ²",
      "explanationEN": "thorn bushes"
    },
    {
      "character": "𗞔",
      "reading": "śa¹",
      "explanationEN": "incense; fragrance"
    },
    {
      "character": "𗛩",
      "reading": "rvor¹",
      "explanationEN": "roof beam"
    },
    {
      "character": "𗞱",
      "reading": "li²",
      "explanationEN": "fragrant"
    },
    {
      "character": "𗛗",
      "reading": "mbaa̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗝹",
      "reading": "vwu̱h¹",
      "explanationEN": "elm"
    },
    {
      "character": "𗞪",
      "reading": "rγae̱r²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞠",
      "reading": "hae̱ṃ²",
      "explanationEN": "apricot"
    },
    {
      "character": "𗚭",
      "reading": "dẓaa̱ṃ²",
      "explanationEN": "to chop"
    },
    {
      "character": "𗚃",
      "reading": "qaə̱²",
      "explanationEN": "fork"
    },
    {
      "character": "𗚄",
      "reading": "do̱¹",
      "explanationEN": "peach"
    },
    {
      "character": "𗚙",
      "reading": "thwo̱²",
      "explanationEN": "Chinese parasol tree"
    },
    {
      "character": "𗚇",
      "reading": "llae̱h¹",
      "explanationEN": "thick; dense"
    },
    {
      "character": "𗝃",
      "reading": "pae̱ṃ²",
      "explanationEN": "bowl"
    },
    {
      "character": "𗚡",
      "reading": "nnə²",
      "explanationEN": "man; people; person"
    },
    {
      "character": "𗚎",
      "reading": "ho̱ṃ²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗜠",
      "reading": "khwi¹",
      "explanationEN": "to punish severely"
    },
    {
      "character": "𗜱",
      "reading": "ẓao̱²",
      "explanationEN": "pointed; sharp"
    },
    {
      "character": "𗛑",
      "reading": "rlho̱ṃr²",
      "explanationEN": "happiness; ease"
    },
    {
      "character": "𗚿",
      "reading": "liw²",
      "explanationEN": "to gather; to assemble"
    },
    {
      "character": "𗜆",
      "reading": "lheh¹",
      "explanationEN": "bowl"
    },
    {
      "character": "𗚺",
      "reading": "tsi²",
      "explanationEN": "basket"
    },
    {
      "character": "𗛐",
      "reading": "śeh¹",
      "explanationEN": "to crack; to split"
    },
    {
      "character": "𗚥",
      "reading": "rzə̱r²",
      "explanationEN": "sugarcane"
    },
    {
      "character": "𗝔",
      "reading": "ru̱r²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛇",
      "reading": "tshwa̱¹",
      "explanationEN": "to invade and harass; to impale"
    },
    {
      "character": "𗛀",
      "reading": "qwo̱¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛧",
      "reading": "lluh¹",
      "explanationEN": "to flow; to drift; to float"
    },
    {
      "character": "𗚤",
      "reading": "tshe̱¹",
      "explanationEN": "to invade and harass"
    },
    {
      "character": "𗚒",
      "reading": "khu²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗚬",
      "reading": "rγo̱r¹",
      "explanationEN": "ailanthus"
    },
    {
      "character": "𗚫",
      "reading": "vwe̱ṃ¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗜑",
      "reading": "paa̱¹",
      "explanationEN": "a skilled workman"
    },
    {
      "character": "𗛙",
      "reading": "reṃ²",
      "explanationEN": "a sleeveless garment; waistcoat"
    },
    {
      "character": "𗞜",
      "reading": "ryur¹",
      "explanationEN": "sapling"
    },
    {
      "character": "𗛹",
      "reading": "tsho̱ṃ¹",
      "explanationEN": "desolate and boundless"
    },
    {
      "character": "𗛥",
      "reading": "dza̱¹",
      "explanationEN": "to chisel"
    },
    {
      "character": "𗚽",
      "reading": "du̱h¹",
      "explanationEN": "wilderness; open field"
    },
    {
      "character": "𗚉",
      "reading": "yu²",
      "explanationEN": "people; person; man"
    },
    {
      "character": "𗚔",
      "reading": "dzwə²",
      "explanationEN": "to bathe"
    },
    {
      "character": "𗚛",
      "reading": "mu²",
      "explanationEN": "to waver; to move"
    },
    {
      "character": "𗚓",
      "reading": "tu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗚦",
      "reading": "tu¹",
      "explanationEN": "turtledove"
    },
    {
      "character": "𗛅",
      "reading": "du̱h²",
      "explanationEN": "tub; bucket"
    },
    {
      "character": "𗜁",
      "reading": "dźoh²",
      "explanationEN": "Chinese ink; coal"
    },
    {
      "character": "𗛚",
      "reading": "dzeh¹",
      "explanationEN": "boat; ship"
    },
    {
      "character": "𗚹",
      "reading": "ẓwaa̱ṃ¹",
      "explanationEN": "bolt"
    },
    {
      "character": "𗛘",
      "reading": "qhu̱²",
      "explanationEN": "jackal; wolf"
    },
    {
      "character": "𗝁",
      "reading": "lo̱¹",
      "explanationEN": "plough; share"
    },
    {
      "character": "𗟋",
      "reading": "vwi̱¹",
      "explanationEN": "roof beam"
    },
    {
      "character": "𗜓",
      "reading": "śa²",
      "explanationEN": "to appear; to show; to sparkle"
    },
    {
      "character": "𗝌",
      "reading": "śa²",
      "explanationEN": "musk"
    },
    {
      "character": "𗝖",
      "reading": "qhe̱¹",
      "explanationEN": "luxuriant; exuberant"
    },
    {
      "character": "𗜋",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "Chinese flowering crab apple"
    },
    {
      "character": "𗛡",
      "reading": "qaə̱²",
      "explanationEN": "bamboo shoots"
    },
    {
      "character": "𗝎",
      "reading": "qhau̱¹",
      "explanationEN": "bowl"
    },
    {
      "character": "𗜯",
      "reading": "llə̱²",
      "explanationEN": "grape"
    },
    {
      "character": "𗜞",
      "reading": "tśho¹",
      "explanationEN": "election"
    },
    {
      "character": "𗚟",
      "reading": "kwa̱ṃ¹",
      "explanationEN": "jar; pot"
    },
    {
      "character": "𗝨",
      "reading": "to̱ṃh¹",
      "explanationEN": "a kind of bamboo"
    },
    {
      "character": "𗝕",
      "reading": "lu¹",
      "explanationEN": "bamboo flute"
    },
    {
      "character": "𗞨",
      "reading": "qaə̱²",
      "explanationEN": "bamboo shoots"
    },
    {
      "character": "𗞡",
      "reading": "pao̱¹",
      "explanationEN": "to burst; to crack"
    },
    {
      "character": "𗞼",
      "reading": "nu²",
      "explanationEN": "to light; to kindle; to ignite; temple attendant; (wax) candle"
    },
    {
      "character": "𗟖",
      "reading": "koṃ¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗚾",
      "reading": "khi²",
      "explanationEN": "the fruit of Chinese wolfberry"
    },
    {
      "character": "𗝩",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "to be imprisoned; to supervise"
    },
    {
      "character": "𗜒",
      "reading": "kha̱h²",
      "explanationEN": "casket; a small box"
    },
    {
      "character": "𗝍",
      "reading": "da̱h¹",
      "explanationEN": "hole; cavity"
    },
    {
      "character": "𗜗",
      "reading": "loṃ²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛛",
      "reading": "qu̱h²",
      "explanationEN": "central room"
    },
    {
      "character": "𗚧",
      "reading": "mə̱²",
      "explanationEN": "firewood"
    },
    {
      "character": "𗚆",
      "reading": "luh¹",
      "explanationEN": "to ring; to make a sound"
    },
    {
      "character": "𗚋",
      "reading": "tśi¹",
      "explanationEN": "branch; twig"
    },
    {
      "character": "𗚴",
      "reading": "dźə¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗚚",
      "reading": "zi̱w²",
      "explanationEN": "wrist"
    },
    {
      "character": "𗜄",
      "reading": "yo²",
      "explanationEN": "time; days"
    },
    {
      "character": "𗛕",
      "reading": "mbu¹",
      "explanationEN": "cassia"
    },
    {
      "character": "𗛋",
      "reading": "qaa̱²",
      "explanationEN": "melon"
    },
    {
      "character": "𗛉",
      "reading": "khe¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𘜯",
      "reading": "yih²",
      "explanationEN": "saddle"
    },
    {
      "character": "𗚨",
      "reading": "dziw¹",
      "explanationEN": "cupboard; cabinet"
    },
    {
      "character": "𗛈",
      "reading": "świ¹",
      "explanationEN": "to rise.ʙ"
    },
    {
      "character": "𗛯",
      "reading": "nvu¹",
      "explanationEN": "old; rotten; withered"
    },
    {
      "character": "𗛶",
      "reading": "dzih²",
      "explanationEN": "frame; shelter"
    },
    {
      "character": "𗚳",
      "reading": "qau̱¹",
      "explanationEN": "neck of a plough"
    },
    {
      "character": "𗜝",
      "reading": "geh²",
      "explanationEN": "red wood"
    },
    {
      "character": "𗜺",
      "reading": "???",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗞕",
      "reading": "mphe̱²",
      "explanationEN": "to divide"
    },
    {
      "character": "𗟏",
      "reading": "leṃh²",
      "explanationEN": "ghost; spirit"
    },
    {
      "character": "𗚰",
      "reading": "le̱¹",
      "explanationEN": "to close; to shut"
    },
    {
      "character": "𗜍",
      "reading": "sa¹",
      "explanationEN": "to kill; to slaughter"
    },
    {
      "character": "𗜦",
      "reading": "llwih¹",
      "explanationEN": "to fall in; to sink; to enter"
    },
    {
      "character": "𗜅",
      "reading": "vu²",
      "explanationEN": "to gamble; to play games"
    },
    {
      "character": "𗞐",
      "reading": "tsi²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗚱",
      "reading": "lha¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗜖",
      "reading": "tśo²",
      "explanationEN": "to hold; to have"
    },
    {
      "character": "𗞙",
      "reading": "twe¹",
      "explanationEN": "small cup; ancient wine vessel"
    },
    {
      "character": "𗞉",
      "reading": "si¹",
      "explanationEN": "skilful"
    },
    {
      "character": "𗟔",
      "reading": "qo̱¹",
      "explanationEN": "vehicle; carriage"
    },
    {
      "character": "𗛟",
      "reading": "vwi̱¹",
      "explanationEN": "dragon"
    },
    {
      "character": "𗛠",
      "reading": "γu̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗝐",
      "reading": "γa̱²",
      "explanationEN": "to gather; to concentrate"
    },
    {
      "character": "𗝏",
      "reading": "du̱h²",
      "explanationEN": "a unit of measurement"
    },
    {
      "character": "𗝞",
      "reading": "nde̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗟑",
      "reading": "yi¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞷",
      "reading": "kwaṃ²",
      "explanationEN": "fort; fortress"
    },
    {
      "character": "𗞑",
      "reading": "lweh¹",
      "explanationEN": "ridgepole"
    },
    {
      "character": "𗜇",
      "reading": "ġu̱¹",
      "explanationEN": "a kind of wood"
    },
    {
      "character": "𗞎",
      "reading": "vih¹",
      "explanationEN": "pear"
    },
    {
      "character": "𗜕",
      "reading": "qae̱¹",
      "explanationEN": "neck of a plough"
    },
    {
      "character": "𗛞",
      "reading": "də²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛝",
      "reading": "re̱r²",
      "explanationEN": "plum; woods; garden"
    },
    {
      "character": "𗚖",
      "reading": "lhoṃ²",
      "explanationEN": "a unit of measurement"
    },
    {
      "character": "𗜬",
      "reading": "nlo¹",
      "explanationEN": "to fight for; to gamble"
    },
    {
      "character": "𗝦",
      "reading": "si¹",
      "explanationEN": "purple; violet"
    },
    {
      "character": "𗝠",
      "reading": "si¹",
      "explanationEN": "tree; wood"
    },
    {
      "character": "𗞴",
      "reading": "rmer²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗚵",
      "reading": "baə̱¹",
      "explanationEN": "willow"
    },
    {
      "character": "𗞣",
      "reading": "γə¹",
      "explanationEN": "farm animal; ox; cattle"
    },
    {
      "character": "𗜿",
      "reading": "tshe²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗟂",
      "reading": "ŋġae̱¹",
      "explanationEN": "skeleton"
    },
    {
      "character": "𗛾",
      "reading": "khe¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗝙",
      "reading": "rtso̱ṃr¹",
      "explanationEN": "thorn; splinter"
    },
    {
      "character": "𗞂",
      "reading": "lu̱²",
      "explanationEN": "calabash"
    },
    {
      "character": "𗞃",
      "reading": "ndə̱¹",
      "explanationEN": "stinking; smelly"
    },
    {
      "character": "𗞺",
      "reading": "lhoṃ¹",
      "explanationEN": "broom; to sweep"
    },
    {
      "character": "𗟆",
      "reading": "lhoṃ¹",
      "explanationEN": "broom; to sweep"
    },
    {
      "character": "𗜘",
      "reading": "be²",
      "explanationEN": "near"
    },
    {
      "character": "𗞓",
      "reading": "nwə¹",
      "explanationEN": "cherry"
    },
    {
      "character": "𗞚",
      "reading": "ŋġae̱¹",
      "explanationEN": "thin; emaciated"
    },
    {
      "character": "𗞾",
      "reading": "qwo̱ṃ²",
      "explanationEN": "be destroyed"
    },
    {
      "character": "𗝬",
      "reading": "ri̱r²",
      "explanationEN": "railing; bainster"
    },
    {
      "character": "𗞈",
      "reading": "bai̱²",
      "explanationEN": "grape"
    },
    {
      "character": "𗞤",
      "reading": "rŋwi̱r²",
      "explanationEN": "seedling; young plant"
    },
    {
      "character": "𗝿",
      "reading": "tśhe¹",
      "explanationEN": "to hold.ᴀ; to grasp.ᴀ"
    },
    {
      "character": "𗞄",
      "reading": "ru̱r¹",
      "explanationEN": "a kind of plant"
    },
    {
      "character": "𗞬",
      "reading": "reṃ²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗟈",
      "reading": "mmə²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗟇",
      "reading": "tsə̱h¹",
      "explanationEN": "tea"
    },
    {
      "character": "𘚐",
      "reading": "so̱ṃ¹",
      "explanationEN": "white mulberry; mulberry"
    },
    {
      "character": "𗚘",
      "reading": "rtsir¹",
      "explanationEN": "small dish"
    },
    {
      "character": "𗚈",
      "reading": "γa̱²",
      "explanationEN": "rice steamer"
    },
    {
      "character": "𗚗",
      "reading": "da̱h¹",
      "explanationEN": "sandalwood"
    },
    {
      "character": "𗚊",
      "reading": "rŋu̱r¹",
      "explanationEN": "head; junction"
    },
    {
      "character": "𗛮",
      "reading": "nvwə̱¹",
      "explanationEN": "to bend over; to subdue"
    },
    {
      "character": "𗛌",
      "reading": "ŋwi̱²",
      "explanationEN": "to do"
    },
    {
      "character": "𗚕",
      "reading": "li²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛿",
      "reading": "qao̱h¹",
      "explanationEN": "song"
    },
    {
      "character": "𗜽",
      "reading": "rər¹",
      "explanationEN": "to flog; to torture; to beat"
    },
    {
      "character": "𗝽",
      "reading": "mpho²",
      "explanationEN": "table; frame"
    },
    {
      "character": "𗜛",
      "reading": "???",
      "explanationEN": "cork"
    },
    {
      "character": "𗝤",
      "reading": "ri̱r²",
      "explanationEN": "plate; board"
    },
    {
      "character": "𗝮",
      "reading": "se²",
      "explanationEN": "rake"
    },
    {
      "character": "𗞿",
      "reading": "tshwe¹",
      "explanationEN": "brittle; crisp"
    },
    {
      "character": "𗟎",
      "reading": "dzwə²",
      "explanationEN": "winding corridor"
    },
    {
      "character": "𗟌",
      "reading": "thwo̱²",
      "explanationEN": "to hold; to contain; to sink; to get stuck"
    },
    {
      "character": "𗛺",
      "reading": "γao̱h¹",
      "explanationEN": "round"
    },
    {
      "character": "𗜣",
      "reading": "lluh¹",
      "explanationEN": "night; evening"
    },
    {
      "character": "𗜫",
      "reading": "si¹",
      "explanationEN": "west"
    },
    {
      "character": "𗞅",
      "reading": "tśwaṃ¹",
      "explanationEN": "to turn; to rotate"
    },
    {
      "character": "𗜧",
      "reading": "me̱¹",
      "explanationEN": "hole; cavity; tube"
    },
    {
      "character": "𗚶",
      "reading": "nẓau̱¹",
      "explanationEN": "thorn; splinter"
    },
    {
      "character": "𗚣",
      "reading": "pha¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞥",
      "reading": "le̱²",
      "explanationEN": "to sing"
    },
    {
      "character": "𗝢",
      "reading": "la̱ṃ¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𗞟",
      "reading": "qao̱h¹",
      "explanationEN": "fruit"
    },
    {
      "character": "𗛴",
      "reading": "nae̱h²",
      "explanationEN": "seedling"
    },
    {
      "character": "𗚪",
      "reading": "bi̱¹",
      "explanationEN": "to dispatch; to send"
    },
    {
      "character": "𗜥",
      "reading": "ke¹",
      "explanationEN": "a kind of plant"
    },
    {
      "character": "𗜉",
      "reading": "yə¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗜰",
      "reading": "tsu̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗝫",
      "reading": "qhai̱w²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛏",
      "reading": "rar¹",
      "explanationEN": "to come; to invite"
    },
    {
      "character": "𗜲",
      "reading": "dzi̱¹",
      "explanationEN": "lacquer"
    },
    {
      "character": "𗝣",
      "reading": "da̱h¹",
      "explanationEN": "chess or any board game"
    },
    {
      "character": "𗚼",
      "reading": "tsha̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗛸",
      "reading": "vu¹",
      "explanationEN": "burnt; charred"
    },
    {
      "character": "𗛵",
      "reading": "la̱²",
      "explanationEN": "small; little"
    },
    {
      "character": "𗝀",
      "reading": "tshe²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞽",
      "reading": "baa̱¹",
      "explanationEN": "to burst; to break; to crack"
    },
    {
      "character": "𗚐",
      "reading": "llae̱h¹",
      "explanationEN": "willow"
    },
    {
      "character": "𗛻",
      "reading": "da̱h¹",
      "explanationEN": "maroon; chestnut color"
    },
    {
      "character": "𗞋",
      "reading": "lhoṃ²",
      "explanationEN": "table; desk"
    },
    {
      "character": "𗛊",
      "reading": "śah¹",
      "explanationEN": "west"
    },
    {
      "character": "𗛲",
      "reading": "loṃ²",
      "explanationEN": "border; boundary"
    },
    {
      "character": "𗜩",
      "reading": "la̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗝡",
      "reading": "nla̱¹",
      "explanationEN": "to pollute"
    },
    {
      "character": "𗞢",
      "reading": "ba̱ṃ¹",
      "explanationEN": "tray; plate"
    },
    {
      "character": "𗞦",
      "reading": "rkur¹",
      "explanationEN": "to smoke (meat); to fumigate"
    },
    {
      "character": "𗜀",
      "reading": "tsi̱w¹",
      "explanationEN": "alcoholic drink; wine"
    },
    {
      "character": "𗜷",
      "reading": "mbo̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗜸",
      "reading": "ġu̱²",
      "explanationEN": "a classifier"
    },
    {
      "character": "𗟊",
      "reading": "reṃ²",
      "explanationEN": "wood used to make saddle"
    },
    {
      "character": "𗝯",
      "reading": "paa̱¹",
      "explanationEN": "rake"
    },
    {
      "character": "𗞖",
      "reading": "fiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗜾",
      "reading": "yih¹",
      "explanationEN": "ladle; scoop"
    },
    {
      "character": "𗝷",
      "reading": "qi̱w²",
      "explanationEN": "the fruit of Chinese wolfberry"
    },
    {
      "character": "𗛢",
      "reading": "nllu²",
      "explanationEN": "railing; banister"
    },
    {
      "character": "𗛂",
      "reading": "śwu²",
      "explanationEN": "able and virtuous"
    },
    {
      "character": "𗛁",
      "reading": "mbi̱¹",
      "explanationEN": "chestnut"
    },
    {
      "character": "𗞀",
      "reading": "rer²",
      "explanationEN": "to smile; to laugh"
    },
    {
      "character": "𗟐",
      "reading": "kuh¹",
      "explanationEN": "tangerine"
    },
    {
      "character": "𗟁",
      "reading": "thwo̱²",
      "explanationEN": "wine"
    },
    {
      "character": "𗝲",
      "reading": "mə²",
      "explanationEN": "melon"
    },
    {
      "character": "𗟃",
      "reading": "γiw²",
      "explanationEN": "to play; to make fun of"
    },
    {
      "character": "𗟅",
      "reading": "qhaə̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛣",
      "reading": "lo̱ṃ¹",
      "explanationEN": "to sway; to swing"
    },
    {
      "character": "𗞞",
      "reading": "da²",
      "explanationEN": "PFV; IMP"
    },
    {
      "character": "𗚩",
      "reading": "re̱r²",
      "explanationEN": "road; way"
    },
    {
      "character": "𗛰",
      "reading": "re̱r²",
      "explanationEN": "three"
    },
    {
      "character": "𗛭",
      "reading": "tu̱¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗜤",
      "reading": "kiw¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞇",
      "reading": "tśho¹",
      "explanationEN": "to go; to walk"
    },
    {
      "character": "𗜪",
      "reading": "li̱w¹",
      "explanationEN": "building"
    },
    {
      "character": "𗜜",
      "reading": "yo²",
      "explanationEN": "to seek.ʙ; to search.ʙ"
    },
    {
      "character": "𗚝",
      "reading": "dzi̱²",
      "explanationEN": "thistles and thorns; brambles"
    },
    {
      "character": "𗛔",
      "reading": "nẓau̱¹",
      "explanationEN": "hedgehog"
    },
    {
      "character": "𗝱",
      "reading": "rvwe̱r²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞩",
      "reading": "ni²",
      "explanationEN": "bag; pocket"
    },
    {
      "character": "𗜼",
      "reading": "zeṃh²",
      "explanationEN": "to hold.ʙ"
    },
    {
      "character": "𗞮",
      "reading": "ndi²",
      "explanationEN": "furniture; board"
    },
    {
      "character": "𗝈",
      "reading": "nzi̱w²",
      "explanationEN": "roof beam; eaves"
    },
    {
      "character": "𗛎",
      "reading": "dzo̱²",
      "explanationEN": "trough"
    },
    {
      "character": "𗞧",
      "reading": "da̱h¹",
      "explanationEN": "shaft of arrow"
    },
    {
      "character": "𗞸",
      "reading": "tsə̱h¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞏",
      "reading": "nwu̱h¹",
      "explanationEN": "a tongue of flame"
    },
    {
      "character": "𗚷",
      "reading": "tśhə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗝝",
      "reading": "rŋwə̱r¹",
      "explanationEN": "four"
    },
    {
      "character": "𗞶",
      "reading": "ne²",
      "explanationEN": "rake"
    },
    {
      "character": "𗞵",
      "reading": "rur¹",
      "explanationEN": "wooden framework; wooden rack"
    },
    {
      "character": "𗜙",
      "reading": "tśe²",
      "explanationEN": "to hold; to grasp"
    },
    {
      "character": "𗝛",
      "reading": "rni̱r²",
      "explanationEN": "plum"
    },
    {
      "character": "𗝵",
      "reading": "γae̱¹",
      "explanationEN": "stake; pile"
    },
    {
      "character": "𗜻",
      "reading": "dwu̱²",
      "explanationEN": "chopsticks"
    },
    {
      "character": "𗝭",
      "reading": "vwe̱²",
      "explanationEN": "stake; pile"
    },
    {
      "character": "𗜮",
      "reading": "nllu¹",
      "explanationEN": "to gamble; to fight for"
    },
    {
      "character": "𗜭",
      "reading": "da̱h¹",
      "explanationEN": "hair"
    },
    {
      "character": "𗜃",
      "reading": "to̱²",
      "explanationEN": "to borrow money; to raise a loan"
    },
    {
      "character": "𗛬",
      "reading": "dau̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗛷",
      "reading": "phaa̱¹",
      "explanationEN": "white fir"
    },
    {
      "character": "𗜶",
      "reading": "nvwi̱¹",
      "explanationEN": "debt"
    },
    {
      "character": "𗛍",
      "reading": "da̱h¹",
      "explanationEN": "to break; to snap"
    },
    {
      "character": "𗞆",
      "reading": "ġu̱²",
      "explanationEN": "heavy burden"
    },
    {
      "character": "𗝰",
      "reading": "mma̱r¹",
      "explanationEN": "luxuriant; exuberant"
    },
    {
      "character": "𗝚",
      "reading": "sə¹",
      "explanationEN": "firewood"
    },
    {
      "character": "𗜨",
      "reading": "mə̱²",
      "explanationEN": "a kind of plant"
    },
    {
      "character": "𗞊",
      "reading": "mpu̱¹",
      "explanationEN": "replete; full"
    },
    {
      "character": "𗝟",
      "reading": "guh²",
      "explanationEN": "post; pillar"
    },
    {
      "character": "𗚅",
      "reading": "lluh¹",
      "explanationEN": "to ring; to make a sound"
    },
    {
      "character": "𗚯",
      "reading": "le̱¹",
      "explanationEN": "to close; to shut"
    },
    {
      "character": "𗟀",
      "reading": "ra̱r²",
      "explanationEN": "mortgage; pawn"
    },
    {
      "character": "𗜌",
      "reading": "?eṃ²",
      "explanationEN": "complete; all"
    },
    {
      "character": "𗞒",
      "reading": "ẓwaə̱¹",
      "explanationEN": "difference; disparity"
    },
    {
      "character": "𗟉",
      "reading": "ẓwaə̱¹",
      "explanationEN": "nipple; teat"
    },
    {
      "character": "𗟓",
      "reading": "ta̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗝑",
      "reading": "dẓaa̱¹",
      "explanationEN": "walnut"
    },
    {
      "character": "𗟄",
      "reading": "lə¹",
      "explanationEN": "pine; pine tree"
    },
    {
      "character": "𗜵",
      "reading": "le̱²",
      "explanationEN": "railing; banister"
    },
    {
      "character": "𗜎",
      "reading": "ror²",
      "explanationEN": "to bind; to tie up"
    },
    {
      "character": "𗞘",
      "reading": "rər²",
      "explanationEN": "trousseau"
    },
    {
      "character": "𗜔",
      "reading": "dẓaa̱²",
      "explanationEN": "disorderly; coarse"
    },
    {
      "character": "𗝂",
      "reading": "rər²",
      "explanationEN": "central room"
    },
    {
      "character": "𗝶",
      "reading": "tśa²",
      "explanationEN": "button"
    },
    {
      "character": "𗝾",
      "reading": "teṃh¹",
      "explanationEN": "to advance; to strive"
    },
    {
      "character": "𗞁",
      "reading": "dzih²",
      "explanationEN": "post; pillar"
    },
    {
      "character": "𗛒",
      "reading": "zo̱ṃ²",
      "explanationEN": "eulogy; praise"
    },
    {
      "character": "𗜈",
      "reading": "zo̱ṃ²",
      "explanationEN": "to hold.ᴀ"
    },
    {
      "character": "𗝸",
      "reading": "ge²",
      "explanationEN": "human skeleton; ghost"
    },
    {
      "character": "𗝇",
      "reading": "zo̱ṃ²",
      "explanationEN": "confidence; trust; faith"
    },
    {
      "character": "𗛫",
      "reading": "rγo̱r²",
      "explanationEN": "to bathe; to wash"
    },
    {
      "character": "𗛼",
      "reading": "rtwə̱r¹",
      "explanationEN": "tree tumor"
    },
    {
      "character": "𗛖",
      "reading": "qə̱¹",
      "explanationEN": "brambles"
    },
    {
      "character": "𗝆",
      "reading": "tho̱ṃh¹",
      "explanationEN": "general name for certain musical instruments"
    },
    {
      "character": "𗜐",
      "reading": "mmə̱¹",
      "explanationEN": "fire"
    },
    {
      "character": "𗚮",
      "reading": "tsho̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗝋",
      "reading": "ŋga²",
      "explanationEN": "pole; staff"
    },
    {
      "character": "𗚍",
      "reading": "dzwaṃ¹",
      "explanationEN": "rafter"
    },
    {
      "character": "𗚸",
      "reading": "tśhwi¹",
      "explanationEN": "urgent; pressing"
    },
    {
      "character": "𗚜",
      "reading": "pu²",
      "explanationEN": "to burn.ᴀ"
    },
    {
      "character": "𗛓",
      "reading": "llo̱ṃ²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗜏",
      "reading": "mmə̱¹",
      "explanationEN": "fire"
    },
    {
      "character": "𗛦",
      "reading": "qhai̱¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗜴",
      "reading": "qhau̱¹",
      "explanationEN": "crooked; hollow"
    },
    {
      "character": "𗝪",
      "reading": "ka̱ṃ¹",
      "explanationEN": "pole; rod"
    },
    {
      "character": "𗜳",
      "reading": "dẓaa̱ṃ²",
      "explanationEN": "a place name"
    },
    {
      "character": "𗞰",
      "reading": "nne¹",
      "explanationEN": "faith; trust; confidence"
    },
    {
      "character": "𗚞",
      "reading": "mə̱²",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗞛",
      "reading": "dźə¹",
      "explanationEN": "to burst apart; to collapse"
    },
    {
      "character": "𘜭",
      "reading": "rŋu̱r¹",
      "explanationEN": "head; junction"
    },
    {
      "character": "𗛱",
      "reading": "śiṃ¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𘜲",
      "reading": "śu¹",
      "explanationEN": "cool; cold"
    },
    {
      "character": "𗚲",
      "reading": "rtsər¹",
      "explanationEN": "litchi"
    },
    {
      "character": "𗝊",
      "reading": "swi¹",
      "explanationEN": "roof beam"
    },
    {
      "character": "𗜊",
      "reading": "tśa¹",
      "explanationEN": "fear; dread"
    },
    {
      "character": "𗜢",
      "reading": "twi̱h²",
      "explanationEN": "roof beam"
    },
    {
      "character": "𘚍",
      "reading": "khə¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𘜰",
      "reading": "geh²",
      "explanationEN": "belt or band for saddles"
    },
    {
      "character": "𘚓",
      "reading": "vwa̱h²",
      "explanationEN": "to bear (a burden); to carry on a shoulder pole"
    },
    {
      "character": "𘒿",
      "reading": "lwi̱¹",
      "explanationEN": "to hinder; to obstruct"
    },
    {
      "character": "𘓈",
      "reading": "dźu²",
      "explanationEN": "seed; race"
    },
    {
      "character": "𘓂",
      "reading": "ləh¹",
      "explanationEN": "what; who; where"
    },
    {
      "character": "𘓀",
      "reading": "lwi̱¹",
      "explanationEN": "to forget"
    },
    {
      "character": "𘓄",
      "reading": "rur¹",
      "explanationEN": "auspicious"
    },
    {
      "character": "𘓃",
      "reading": "lləh¹",
      "explanationEN": "murderer; homicide; to kill"
    },
    {
      "character": "𘜵",
      "reading": "śu¹",
      "explanationEN": "to swear; to abuse"
    },
    {
      "character": "𗘲",
      "reading": "reṃ²",
      "explanationEN": "pavilion"
    },
    {
      "character": "𘚏",
      "reading": "swo¹",
      "explanationEN": "inkstone; inkslab"
    },
    {
      "character": "𘞖",
      "reading": "nsi̱w²",
      "explanationEN": "to demand; to ask for"
    },
    {
      "character": "𗴌",
      "reading": "zo̱ṃ²",
      "explanationEN": "that; it; he"
    },
    {
      "character": "𘓁",
      "reading": "lləh¹",
      "explanationEN": "CONC: conjunction means “and”"
    },
    {
      "character": "𘜷",
      "reading": "bi̱²",
      "explanationEN": "south"
    },
    {
      "character": "𘚑",
      "reading": "so̱ṃ¹",
      "explanationEN": "broken"
    },
    {
      "character": "𘜹",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "empress; queen"
    },
    {
      "character": "𗴋",
      "reading": "kwaṃ¹",
      "explanationEN": "chapter; volume"
    },
    {
      "character": "𘜴",
      "reading": "mma²",
      "explanationEN": "big; large"
    },
    {
      "character": "𗘴",
      "reading": "mmu²",
      "explanationEN": "to move; to stir"
    },
    {
      "character": "𗵺",
      "reading": "vwa̱h¹",
      "explanationEN": "to win; to gain"
    },
    {
      "character": "𘟊",
      "reading": "dzoṃ¹",
      "explanationEN": "a place to put corpse"
    },
    {
      "character": "𘚎",
      "reading": "dźiw¹",
      "explanationEN": "to wash; to bathe"
    },
    {
      "character": "𘜺",
      "reading": "rə̱r²",
      "explanationEN": "north"
    },
    {
      "character": "𘜳",
      "reading": "tha̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘴈",
      "reading": "tha̱²",
      "explanationEN": "wild goose"
    },
    {
      "character": "𘜶",
      "reading": "lleh²",
      "explanationEN": "big; great; large"
    },
    {
      "character": "𗘵",
      "reading": "khi²",
      "explanationEN": "to butcher; to cut"
    },
    {
      "character": "𗍣",
      "reading": "ba²",
      "explanationEN": "to break; to snap"
    },
    {
      "character": "𗘳",
      "reading": "ndu²",
      "explanationEN": "to stab; to penetrate"
    },
    {
      "character": "𘚒",
      "reading": "so̱ṃ¹",
      "explanationEN": "fresh; clean"
    },
    {
      "character": "𘞔",
      "reading": "rphar¹",
      "explanationEN": "crew cut"
    },
    {
      "character": "𘓅",
      "reading": "khə²",
      "explanationEN": "toil; hard work"
    },
    {
      "character": "𘓆",
      "reading": "lləh¹",
      "explanationEN": "to discuss; to forecast; to predict"
    },
    {
      "character": "𘓇",
      "reading": "lləh¹",
      "explanationEN": "toil; hard work"
    },
    {
      "character": "𘜮",
      "reading": "rŋu̱r¹",
      "explanationEN": "a unit of measurement"
    },
    {
      "character": "𘜸",
      "reading": "tshə̱¹",
      "explanationEN": "temple"
    },
    {
      "character": "𘜱",
      "reading": "thəh²",
      "explanationEN": "belt; band"
    },
    {
      "character": "𗶹",
      "reading": "śi²",
      "explanationEN": "PFV: to go"
    },
    {
      "character": "𗷂",
      "reading": "ẓai̱²",
      "explanationEN": "to pursue"
    },
    {
      "character": "𗶺",
      "reading": "fu¹",
      "explanationEN": "to blow; to puff"
    },
    {
      "character": "𗶵",
      "reading": "ẓai̱²",
      "explanationEN": "to mate"
    },
    {
      "character": "𗶳",
      "reading": "ŋkho²",
      "explanationEN": "to look; to see"
    },
    {
      "character": "𗶾",
      "reading": "ye²",
      "explanationEN": "to go"
    },
    {
      "character": "𗶴",
      "reading": "ha̱?",
      "explanationEN": "to puff; to blow"
    },
    {
      "character": "𗷕",
      "reading": "???",
      "explanationEN": "all over"
    },
    {
      "character": "𗷄",
      "reading": "źo¹",
      "explanationEN": "to get over; to jump over"
    },
    {
      "character": "𗶲",
      "reading": "ta̱¹",
      "explanationEN": "to flee; to run away"
    },
    {
      "character": "𗶱",
      "reading": "tśoh¹",
      "explanationEN": "to wait upon; to attend upon"
    },
    {
      "character": "𗷎",
      "reading": "rqa̱r²",
      "explanationEN": "to separate; to distinguish"
    },
    {
      "character": "𗶷",
      "reading": "śə¹",
      "explanationEN": "to go toward; to depart"
    },
    {
      "character": "𗶻",
      "reading": "śwəh²",
      "explanationEN": "to accompany; to attend"
    },
    {
      "character": "𗷈",
      "reading": "tə̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶿",
      "reading": "lhoṃ¹",
      "explanationEN": "to go toward; to depart"
    },
    {
      "character": "𗷖",
      "reading": "tshwi̱w¹",
      "explanationEN": "to give alms; to give as a present"
    },
    {
      "character": "𗷑",
      "reading": "mphi²",
      "explanationEN": "sensitive; dexterous"
    },
    {
      "character": "𗷔",
      "reading": "twu̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶽",
      "reading": "śə²",
      "explanationEN": "slight; tiny; rare"
    },
    {
      "character": "𗷆",
      "reading": "mphi¹",
      "explanationEN": "to make; to enable; to cause"
    },
    {
      "character": "𗷇",
      "reading": "mphi²",
      "explanationEN": "to flatter; to fawn"
    },
    {
      "character": "𗷃",
      "reading": "dźeh²",
      "explanationEN": "to fight; to struggle"
    },
    {
      "character": "𗶼",
      "reading": "śə¹",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𗷍",
      "reading": "dźeh²",
      "explanationEN": "jokes"
    },
    {
      "character": "𗷌",
      "reading": "ti̱¹",
      "explanationEN": "to run"
    },
    {
      "character": "𗷏",
      "reading": "bu¹",
      "explanationEN": "to offer; to send back"
    },
    {
      "character": "𗶶",
      "reading": "śə¹",
      "explanationEN": "to traffic; to peddle; to sell"
    },
    {
      "character": "𗷁",
      "reading": "ndza̱¹",
      "explanationEN": "far"
    },
    {
      "character": "𗶸",
      "reading": "zo²",
      "explanationEN": "to sell"
    },
    {
      "character": "𗷐",
      "reading": "hwi̱¹",
      "explanationEN": "to drive out; to expel"
    },
    {
      "character": "𗷀",
      "reading": "tshwi̱w¹",
      "explanationEN": "to weave"
    },
    {
      "character": "𗷉",
      "reading": "śe¹",
      "explanationEN": "the moon"
    },
    {
      "character": "𗷅",
      "reading": "śə²",
      "explanationEN": "curtain; screen"
    },
    {
      "character": "𘜬",
      "reading": "qae̱²",
      "explanationEN": "to send; to tell somebody to do"
    },
    {
      "character": "𘜫",
      "reading": "qae̱²",
      "explanationEN": "servant"
    },
    {
      "character": "𗄝",
      "reading": "qai̱ṃ¹",
      "explanationEN": "earlobe"
    },
    {
      "character": "𗄨",
      "reading": "lu̱²",
      "explanationEN": "to burn; to ignite; to light"
    },
    {
      "character": "𗀚",
      "reading": "ẓao̱¹",
      "explanationEN": "to guide; to lead"
    },
    {
      "character": "𗠇",
      "reading": "tih¹",
      "explanationEN": "to eat; food"
    },
    {
      "character": "𗠎",
      "reading": "qhə̱¹",
      "explanationEN": "meat stuffing; sausage"
    },
    {
      "character": "𗸢",
      "reading": "twa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗠒",
      "reading": "bə¹",
      "explanationEN": "tall; high"
    },
    {
      "character": "𗡐",
      "reading": "qa̱¹",
      "explanationEN": "to interrogate"
    },
    {
      "character": "𗡄",
      "reading": "dzi²",
      "explanationEN": "to drink; to eat; food"
    },
    {
      "character": "𗠬",
      "reading": "dźwiw²",
      "explanationEN": "hungry"
    },
    {
      "character": "𘉏",
      "reading": "tsho̱ṃh²",
      "explanationEN": "void; empty"
    },
    {
      "character": "𗀢",
      "reading": "ẓao̱²",
      "explanationEN": "to drive; to expel"
    },
    {
      "character": "𗡅",
      "reading": "dzi¹",
      "explanationEN": "to eat.ᴀ"
    },
    {
      "character": "𗡎",
      "reading": "li²",
      "explanationEN": "fragrant"
    },
    {
      "character": "𗠜",
      "reading": "bi²",
      "explanationEN": "to shout; to cry; to yell"
    },
    {
      "character": "𗠪",
      "reading": "bi²",
      "explanationEN": "to command; to direct"
    },
    {
      "character": "𗡈",
      "reading": "ryawr²",
      "explanationEN": "to cry; to shout"
    },
    {
      "character": "𘉜",
      "reading": "tsho̱ṃh²",
      "explanationEN": "to fear; to terrify"
    },
    {
      "character": "𗡃",
      "reading": "tshe̱²",
      "explanationEN": "incomplete; imperfect"
    },
    {
      "character": "𗄠",
      "reading": "ŋwu̱²",
      "explanationEN": "leader; host"
    },
    {
      "character": "𗢅",
      "reading": "ni²",
      "explanationEN": "clean; spotless"
    },
    {
      "character": "𗺄",
      "reading": "ma̱²",
      "explanationEN": "greasy; smooth"
    },
    {
      "character": "𗄦",
      "reading": "dẓae̱h²",
      "explanationEN": "wizard"
    },
    {
      "character": "𗄟",
      "reading": "ŋwu̱²",
      "explanationEN": "a kind of official position"
    },
    {
      "character": "𗄡",
      "reading": "kəh²",
      "explanationEN": "scorched; burnt"
    },
    {
      "character": "𗠆",
      "reading": "pao̱¹",
      "explanationEN": "thunderbolt; thunderclap"
    },
    {
      "character": "𗡙",
      "reading": "yo̱ṃ²",
      "explanationEN": "to extol; to praise"
    },
    {
      "character": "𗠵",
      "reading": "pa̱h²",
      "explanationEN": "thirst"
    },
    {
      "character": "𗠭",
      "reading": "qai̱¹",
      "explanationEN": "to shout; to call out"
    },
    {
      "character": "𗠫",
      "reading": "dźwiw²",
      "explanationEN": "hungry"
    },
    {
      "character": "𗡉",
      "reading": "bi̱h²",
      "explanationEN": "to instigate; to abet"
    },
    {
      "character": "𗄤",
      "reading": "ror²",
      "explanationEN": "wizard; witch; sorcerer"
    },
    {
      "character": "𗀛",
      "reading": "khi¹",
      "explanationEN": "to open; to shine upon"
    },
    {
      "character": "𗄣",
      "reading": "ŋqo̱²",
      "explanationEN": "crucible"
    },
    {
      "character": "𗄞",
      "reading": "vəh¹",
      "explanationEN": "witch; wizard; sorcerer"
    },
    {
      "character": "𗡊",
      "reading": "???",
      "explanationEN": "to swallow"
    },
    {
      "character": "𗠝",
      "reading": "ya̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗠩",
      "reading": "mi¹",
      "explanationEN": "to feed"
    },
    {
      "character": "𗠉",
      "reading": "rmə̱r¹",
      "explanationEN": "lips"
    },
    {
      "character": "𗄢",
      "reading": "rə̱h¹",
      "explanationEN": "to distend"
    },
    {
      "character": "𗠨",
      "reading": "dźwu²",
      "explanationEN": "saliva"
    },
    {
      "character": "𗡗",
      "reading": "ryawr²",
      "explanationEN": "chicken"
    },
    {
      "character": "𗠈",
      "reading": "dzo¹",
      "explanationEN": "to eat.ʙ"
    },
    {
      "character": "𗀣",
      "reading": "rha̱r¹",
      "explanationEN": "to open (one’s mouth)"
    },
    {
      "character": "𗄧",
      "reading": "lə̱²",
      "explanationEN": "flea"
    },
    {
      "character": "𗄥",
      "reading": "lheh¹",
      "explanationEN": "wizard; sorcerer"
    },
    {
      "character": "𗠐",
      "reading": "ndu̱²",
      "explanationEN": "to expand; to swallow"
    },
    {
      "character": "𗠑",
      "reading": "rqa̱r²",
      "explanationEN": "to bite; to chew"
    },
    {
      "character": "𗡀",
      "reading": "lo̱¹",
      "explanationEN": "to be greedy for money or food; to be gluttonous"
    },
    {
      "character": "𘚠",
      "reading": "lə̱²",
      "explanationEN": "foolish; stupid"
    },
    {
      "character": "𘓼",
      "reading": "pə̱¹",
      "explanationEN": "fire"
    },
    {
      "character": "𘓽",
      "reading": "lo̱ṃh²",
      "explanationEN": "roast meat"
    },
    {
      "character": "𘔅",
      "reading": "rzur²",
      "explanationEN": "torch"
    },
    {
      "character": "𗟗",
      "reading": "phi¹",
      "explanationEN": "sled; sledge; sleigh"
    },
    {
      "character": "𗇄",
      "reading": "mi̱h²",
      "explanationEN": "to sprinkle; to spread; to break"
    },
    {
      "character": "𗇅",
      "reading": "tśhə¹",
      "explanationEN": "narrow"
    },
    {
      "character": "𘚦",
      "reading": "ba²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘉘",
      "reading": "rzə̱r²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗠓",
      "reading": "bah²",
      "explanationEN": "binder; barrier"
    },
    {
      "character": "𗠿",
      "reading": "mo¹",
      "explanationEN": "to feed"
    },
    {
      "character": "𘚡",
      "reading": "lə̱²",
      "explanationEN": "flea"
    },
    {
      "character": "𘉉",
      "reading": "ba̱h²",
      "explanationEN": "upright"
    },
    {
      "character": "𗟛",
      "reading": "ba̱h²",
      "explanationEN": "leaf"
    },
    {
      "character": "𗠔",
      "reading": "pho²",
      "explanationEN": "causative.ʙ"
    },
    {
      "character": "𗡚",
      "reading": "tsi̱w²",
      "explanationEN": "fast"
    },
    {
      "character": "𘉙",
      "reading": "the²",
      "explanationEN": "scheme; stratagem"
    },
    {
      "character": "𗠟",
      "reading": "nśo¹",
      "explanationEN": "to kill.ʙ"
    },
    {
      "character": "𗠞",
      "reading": "nwi²",
      "explanationEN": "to swallow; to devour"
    },
    {
      "character": "𘉍",
      "reading": "bi¹",
      "explanationEN": "light; brightness"
    },
    {
      "character": "𘉑",
      "reading": "mə¹",
      "explanationEN": " indeterminative other"
    },
    {
      "character": "𘉒",
      "reading": "mo̱²",
      "explanationEN": "shyness; shame"
    },
    {
      "character": "𗡏",
      "reading": "mmi̱¹",
      "explanationEN": "fragrant"
    },
    {
      "character": "𗡑",
      "reading": "mmi̱¹",
      "explanationEN": "to scatter; to sprinkle"
    },
    {
      "character": "𗺅",
      "reading": "sa̱¹",
      "explanationEN": "to distend"
    },
    {
      "character": "𘚥",
      "reading": "lu²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗠍",
      "reading": "tuh¹",
      "explanationEN": "net"
    },
    {
      "character": "𗠤",
      "reading": "dzi²",
      "explanationEN": "to entertain at a banquet"
    },
    {
      "character": "𗠦",
      "reading": "tih¹",
      "explanationEN": "to feed"
    },
    {
      "character": "𗠲",
      "reading": "ndo̱¹",
      "explanationEN": "to mix"
    },
    {
      "character": "𗠹",
      "reading": "ndzi²",
      "explanationEN": "to teach; to instruct"
    },
    {
      "character": "𗠌",
      "reading": "va¹",
      "explanationEN": "to vomit; to spit"
    },
    {
      "character": "𗠄",
      "reading": "qa̱¹",
      "explanationEN": "to distribute food"
    },
    {
      "character": "𘉐",
      "reading": "γuo¹",
      "explanationEN": "contribution; achievement"
    },
    {
      "character": "𘉛",
      "reading": "dwa̱ṃ¹",
      "explanationEN": "a place name"
    },
    {
      "character": "𗠧",
      "reading": "kəh²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘉗",
      "reading": "γuo¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗢆",
      "reading": "śwə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗠷",
      "reading": "pho²",
      "explanationEN": "to distinguish; to differentiate"
    },
    {
      "character": "𗡋",
      "reading": "dzi²",
      "explanationEN": "to cry; to weep"
    },
    {
      "character": "𗢇",
      "reading": "kiw¹",
      "explanationEN": "ditch; gully"
    },
    {
      "character": "𘉝",
      "reading": "na²",
      "explanationEN": "to drive; to expel"
    },
    {
      "character": "𗠅",
      "reading": "ŋgə¹",
      "explanationEN": "to distribute food"
    },
    {
      "character": "𗠻",
      "reading": "ntha̱r¹",
      "explanationEN": "to stutter; to stammer"
    },
    {
      "character": "𗡒",
      "reading": "phə̱²",
      "explanationEN": "a kind of food like cake"
    },
    {
      "character": "𗡖",
      "reading": "dźe²",
      "explanationEN": "fat; grease"
    },
    {
      "character": "𗡔",
      "reading": "ŋwu̱h¹",
      "explanationEN": "to oath; to pledge"
    },
    {
      "character": "𘉞",
      "reading": "na²",
      "explanationEN": "2SG: 2nd singular indexation"
    },
    {
      "character": "𘉋",
      "reading": "ryar¹",
      "explanationEN": "eight"
    },
    {
      "character": "𗠃",
      "reading": "tuh¹",
      "explanationEN": "saliva; spittle"
    },
    {
      "character": "𗠚",
      "reading": "thae̱h²",
      "explanationEN": "big; extreme"
    },
    {
      "character": "𗠺",
      "reading": "nli²",
      "explanationEN": "hobby"
    },
    {
      "character": "𗠳",
      "reading": "ẓai̱²",
      "explanationEN": "whistle"
    },
    {
      "character": "𘉌",
      "reading": "rzə̱r²",
      "explanationEN": "dew"
    },
    {
      "character": "𗠏",
      "reading": "ŋqo̱²",
      "explanationEN": "throat; to swallow"
    },
    {
      "character": "𗢄",
      "reading": "śwaṃ²",
      "explanationEN": "side"
    },
    {
      "character": "𗡇",
      "reading": "dźe²",
      "explanationEN": "food; bait"
    },
    {
      "character": "𗠮",
      "reading": "yaw²",
      "explanationEN": "entertaimnent"
    },
    {
      "character": "𗠸",
      "reading": "ndə²",
      "explanationEN": "to smile; to laugh"
    },
    {
      "character": "𗠽",
      "reading": "qa̱¹",
      "explanationEN": "elder brother"
    },
    {
      "character": "𗡕",
      "reading": "nu²",
      "explanationEN": "to breast-feed; to nurse"
    },
    {
      "character": "𗠾",
      "reading": "tsu̱h²",
      "explanationEN": "to cough"
    },
    {
      "character": "𗠼",
      "reading": "nlle²",
      "explanationEN": "tasty; delicious"
    },
    {
      "character": "𗠛",
      "reading": "lhuh²",
      "explanationEN": "to swallow; to eat; to drink"
    },
    {
      "character": "𗡂",
      "reading": "thwo̱²",
      "explanationEN": "to rear; to howl"
    },
    {
      "character": "𗡁",
      "reading": "ŋah²",
      "explanationEN": "a round flat cake"
    },
    {
      "character": "𗡝",
      "reading": "ka¹",
      "explanationEN": "how about"
    },
    {
      "character": "𗠋",
      "reading": "tṣhaa̱¹",
      "explanationEN": "to instigate; to abet"
    },
    {
      "character": "𗡍",
      "reading": "pai̱h¹",
      "explanationEN": "to spit"
    },
    {
      "character": "𗠴",
      "reading": "γaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗸤",
      "reading": "ti̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘚔",
      "reading": "mme²",
      "explanationEN": "below; down; tip; end"
    },
    {
      "character": "𘉔",
      "reading": "dwa̱²",
      "explanationEN": "to knit"
    },
    {
      "character": "𘔄",
      "reading": "lo̱ṃh²",
      "explanationEN": "to eat"
    },
    {
      "character": "𘔉",
      "reading": "rdwə̱r²",
      "explanationEN": "to burn; to kindle"
    },
    {
      "character": "𘓻",
      "reading": "ŋγi¹",
      "explanationEN": "to cook; to boil"
    },
    {
      "character": "𘚻",
      "reading": "di̱²",
      "explanationEN": "happy; to like; to love"
    },
    {
      "character": "𘔀",
      "reading": "vu¹",
      "explanationEN": "pot; pan"
    },
    {
      "character": "𘔈",
      "reading": "rdwə̱r¹",
      "explanationEN": "a kind of sore"
    },
    {
      "character": "𗟙",
      "reading": "rthwə̱r¹",
      "explanationEN": "to burn"
    },
    {
      "character": "𘟎",
      "reading": "tshwu¹",
      "explanationEN": "to cook; to boil"
    },
    {
      "character": "𗠗",
      "reading": "pi¹",
      "explanationEN": "thunderbolt; thunderclap"
    },
    {
      "character": "𗠢",
      "reading": "mphə¹",
      "explanationEN": "fear; dread"
    },
    {
      "character": "𗡜",
      "reading": "keh¹",
      "explanationEN": "to offer a sacrifice"
    },
    {
      "character": "𗠶",
      "reading": "nźə¹",
      "explanationEN": "to pierce through; to penetrate"
    },
    {
      "character": "𗡘",
      "reading": "ndə¹",
      "explanationEN": "frivolous"
    },
    {
      "character": "𘉎",
      "reading": "dwa̱²",
      "explanationEN": "many; much"
    },
    {
      "character": "𘉚",
      "reading": "dwa̱²",
      "explanationEN": "to hide"
    },
    {
      "character": "𗠊",
      "reading": "dźaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗠖",
      "reading": "rγa̱r¹",
      "explanationEN": "to accuse falsely"
    },
    {
      "character": "𗠠",
      "reading": "ndo̱²",
      "explanationEN": "banquet; feast"
    },
    {
      "character": "𘉕",
      "reading": "reṃ²",
      "explanationEN": "brilliant; magnificent; glorious"
    },
    {
      "character": "𘉖",
      "reading": "rpwər¹",
      "explanationEN": "to cheat; to deceive; to change"
    },
    {
      "character": "𗡛",
      "reading": "li²",
      "explanationEN": "coriander"
    },
    {
      "character": "𗇃",
      "reading": "hwa̱²",
      "explanationEN": "trench"
    },
    {
      "character": "𗠕",
      "reading": "tha²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗠙",
      "reading": "rbaə̱r¹",
      "explanationEN": "a kind of disease in nose"
    },
    {
      "character": "𗠥",
      "reading": "ndo¹",
      "explanationEN": "to pick out; to select"
    },
    {
      "character": "𗡆",
      "reading": "rphə̱r¹",
      "explanationEN": "to sprinkle"
    },
    {
      "character": "𗠯",
      "reading": "rtshar¹",
      "explanationEN": "to instigate; to calumniate"
    },
    {
      "character": "𘚧",
      "reading": "???",
      "explanationEN": "to recommend"
    },
    {
      "character": "𘉓",
      "reading": "bya²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗡓",
      "reading": "thaw²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗠱",
      "reading": "the¹",
      "explanationEN": "to call out; to shout"
    },
    {
      "character": "𗠰",
      "reading": "thi¹",
      "explanationEN": "to drink; to eat"
    },
    {
      "character": "𘓿",
      "reading": "vwai̱²",
      "explanationEN": "to stew"
    },
    {
      "character": "𘓾",
      "reading": "yaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘔁",
      "reading": "bi¹",
      "explanationEN": "one of the decimal cycle of ten characters"
    },
    {
      "character": "𘔂",
      "reading": "dźih¹",
      "explanationEN": "to burn"
    },
    {
      "character": "𘔇",
      "reading": "lha̱¹",
      "explanationEN": "to extinguish; to put out"
    },
    {
      "character": "𗟞",
      "reading": "lli̱h¹",
      "explanationEN": "to boil; to cook"
    },
    {
      "character": "𘟍",
      "reading": "ẓai̱²",
      "explanationEN": "to cook; to boil"
    },
    {
      "character": "𘉊",
      "reading": "ba̱h²",
      "explanationEN": "spinach"
    },
    {
      "character": "𗠣",
      "reading": "bo̱ṃh²",
      "explanationEN": "to eat; food"
    },
    {
      "character": "𗠘",
      "reading": "kəh²",
      "explanationEN": "to eat"
    },
    {
      "character": "𗠡",
      "reading": "bə¹",
      "explanationEN": "below; down"
    },
    {
      "character": "𘔃",
      "reading": "tswu¹",
      "explanationEN": "kettle"
    },
    {
      "character": "𘚤",
      "reading": "rthwə̱r¹",
      "explanationEN": "to jump"
    },
    {
      "character": "𘝣",
      "reading": "ṇae̱ṃ¹",
      "explanationEN": "turbid; muddy"
    },
    {
      "character": "𗒊",
      "reading": "ṇae̱ṃ²",
      "explanationEN": "dirt; filth"
    },
    {
      "character": "𘛍",
      "reading": "nwu̱¹",
      "explanationEN": "baby; infant"
    },
    {
      "character": "𘍐",
      "reading": "rer²",
      "explanationEN": "toil; hard work"
    },
    {
      "character": "𗐮",
      "reading": "leṃ²",
      "explanationEN": "ball"
    },
    {
      "character": "𘁏",
      "reading": "bə̱²",
      "explanationEN": "bull"
    },
    {
      "character": "𗑞",
      "reading": "khiw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘖞",
      "reading": "rqaə̱r¹",
      "explanationEN": "rich; wealthy"
    },
    {
      "character": "𘖭",
      "reading": "qhaa̱²",
      "explanationEN": "ploughshare"
    },
    {
      "character": "𗐴",
      "reading": "nu¹",
      "explanationEN": "ear"
    },
    {
      "character": "𗯧",
      "reading": "ŋkhə²",
      "explanationEN": "chimney; window; hole"
    },
    {
      "character": "𗑷",
      "reading": "to̱²",
      "explanationEN": "all"
    },
    {
      "character": "𗑉",
      "reading": "me̱¹",
      "explanationEN": "eyes"
    },
    {
      "character": "𗑹",
      "reading": "γa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗓷",
      "reading": "khwaṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗓻",
      "reading": "rqhaa̱r¹",
      "explanationEN": "mist"
    },
    {
      "character": "𘖷",
      "reading": "mah¹",
      "explanationEN": "to dig; to gnaw; to bite"
    },
    {
      "character": "𗇝",
      "reading": "rywar¹",
      "explanationEN": "light; glittering"
    },
    {
      "character": "𗑜",
      "reading": "ŋġu̱¹",
      "explanationEN": "treasure"
    },
    {
      "character": "𗓐",
      "reading": "γəh¹",
      "explanationEN": "to rumor"
    },
    {
      "character": "𗓃",
      "reading": "ŋġu̱¹",
      "explanationEN": "dark"
    },
    {
      "character": "𗓰",
      "reading": "na̱¹",
      "explanationEN": "deep"
    },
    {
      "character": "𗑘",
      "reading": "swe̱¹",
      "explanationEN": "clean; spotless"
    },
    {
      "character": "𗒫",
      "reading": "ŋgiw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗒨",
      "reading": "ba̱h¹",
      "explanationEN": "cymbals"
    },
    {
      "character": "𗔥",
      "reading": "dzi̱¹",
      "explanationEN": "to contend; to quarrel"
    },
    {
      "character": "𗔣",
      "reading": "reṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗔸",
      "reading": "ba̱h²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔫",
      "reading": "duh¹",
      "explanationEN": "to meet; to encounter"
    },
    {
      "character": "𗔟",
      "reading": "rṇar¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔳",
      "reading": "rza̱r¹",
      "explanationEN": "ancestor"
    },
    {
      "character": "𗔭",
      "reading": "rŋi̱wr²",
      "explanationEN": "to get; to gain"
    },
    {
      "character": "𘁔",
      "reading": "re̱r²",
      "explanationEN": "big ox (elephant)"
    },
    {
      "character": "𘖴",
      "reading": "tswa̱ṃ¹",
      "explanationEN": "to drill; to bore"
    },
    {
      "character": "𗓗",
      "reading": "ndźu²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗒈",
      "reading": "dẓae̱ṃ¹",
      "explanationEN": "pool; pond"
    },
    {
      "character": "𗒢",
      "reading": "ẓae̱¹",
      "explanationEN": "to guide; to lead"
    },
    {
      "character": "𗑼",
      "reading": "ne¹",
      "explanationEN": "end; east"
    },
    {
      "character": "𗓽",
      "reading": "lo̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗔖",
      "reading": "rtsi̱wr¹",
      "explanationEN": "to slaughter; to butcher"
    },
    {
      "character": "𗔴",
      "reading": "ryur²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗯨",
      "reading": "rur¹",
      "explanationEN": "world; capital city"
    },
    {
      "character": "𘎏",
      "reading": "tśhiw²",
      "explanationEN": "to lure; to seduce"
    },
    {
      "character": "𘖝",
      "reading": "???",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘗇",
      "reading": "tṣhwaa̱¹",
      "explanationEN": "to suppress; to stifle"
    },
    {
      "character": "𘖱",
      "reading": "nẓau̱¹",
      "explanationEN": "bell"
    },
    {
      "character": "𗓛",
      "reading": "ṇwə̱²",
      "explanationEN": "wizard; sorcere"
    },
    {
      "character": "𗐯",
      "reading": "qae̱h²",
      "explanationEN": "boundary"
    },
    {
      "character": "𗐶",
      "reading": "la̱h¹",
      "explanationEN": "to estimate"
    },
    {
      "character": "𗑋",
      "reading": "qhao̱ṃ²",
      "explanationEN": "basket"
    },
    {
      "character": "𗒬",
      "reading": "lə̱¹",
      "explanationEN": "neck"
    },
    {
      "character": "𗑓",
      "reading": "di¹",
      "explanationEN": "to shift; to move"
    },
    {
      "character": "𗒠",
      "reading": "qae̱²",
      "explanationEN": "cervical vertebra"
    },
    {
      "character": "𗑻",
      "reading": "γa̱h¹",
      "explanationEN": "joint; very close relative"
    },
    {
      "character": "𗔔",
      "reading": "lhuh²",
      "explanationEN": "bamboo"
    },
    {
      "character": "𗒣",
      "reading": "bih²",
      "explanationEN": "to advocate; to preach"
    },
    {
      "character": "𗑅",
      "reading": "gəh²",
      "explanationEN": "ancestor; forebear"
    },
    {
      "character": "𗓈",
      "reading": "lhwu̱¹",
      "explanationEN": "clothes; clothing"
    },
    {
      "character": "𗔇",
      "reading": "γu̱h²",
      "explanationEN": "storehouse; warehouse"
    },
    {
      "character": "𗒭",
      "reading": "khə¹",
      "explanationEN": "brother’s son; nephew"
    },
    {
      "character": "𗔠",
      "reading": "tsu¹",
      "explanationEN": "to store; to save"
    },
    {
      "character": "𗓖",
      "reading": "ŋga²",
      "explanationEN": "dexterous; nimble"
    },
    {
      "character": "𘎎",
      "reading": "swu̱²",
      "explanationEN": "full; filled"
    },
    {
      "character": "𘗁",
      "reading": "dźa²",
      "explanationEN": "sharp; firm"
    },
    {
      "character": "𗓳",
      "reading": "na̱¹",
      "explanationEN": "fat; corpulent"
    },
    {
      "character": "𗓚",
      "reading": "ma̱²",
      "explanationEN": "to apply; to daub"
    },
    {
      "character": "𘖣",
      "reading": "rqaə̱r¹",
      "explanationEN": "calm; quiet"
    },
    {
      "character": "𗑝",
      "reading": "rtsi̱wr¹",
      "explanationEN": "joint"
    },
    {
      "character": "𗑱",
      "reading": "ka²",
      "explanationEN": "rob; steps"
    },
    {
      "character": "𘃙",
      "reading": "lə¹",
      "explanationEN": "alone; lonely"
    },
    {
      "character": "𗭅",
      "reading": "dźə¹",
      "explanationEN": "silk"
    },
    {
      "character": "𘍝",
      "reading": "γao̱h¹",
      "explanationEN": "round"
    },
    {
      "character": "𗑁",
      "reading": "yo̱ṃ²",
      "explanationEN": "appearance; shape"
    },
    {
      "character": "𘖾",
      "reading": "rŋu̱r¹",
      "explanationEN": "a kind of mineral to smelt copper"
    },
    {
      "character": "𗓀",
      "reading": "lu̱¹",
      "explanationEN": "to hide; to conceal"
    },
    {
      "character": "𗭁",
      "reading": "rbu̱r¹",
      "explanationEN": "shell"
    },
    {
      "character": "𗬻",
      "reading": "ŋġo̱r¹",
      "explanationEN": "brocade"
    },
    {
      "character": "𗭀",
      "reading": "reṃ²",
      "explanationEN": "silk; satin"
    },
    {
      "character": "𗑈",
      "reading": "dzəh²",
      "explanationEN": "to pat; to beat"
    },
    {
      "character": "𗑗",
      "reading": "se̱¹",
      "explanationEN": "clean; quiet"
    },
    {
      "character": "𗒪",
      "reading": "vwa̱h²",
      "explanationEN": "altar"
    },
    {
      "character": "𗑦",
      "reading": "rśwər¹",
      "explanationEN": "frank; straightforward"
    },
    {
      "character": "𗓜",
      "reading": "rkhor¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘖤",
      "reading": "ŋqhae̱¹",
      "explanationEN": "clank; clang"
    },
    {
      "character": "𗬹",
      "reading": "reṃ²",
      "explanationEN": "silk"
    },
    {
      "character": "𗭄",
      "reading": "teṃh¹",
      "explanationEN": "satin"
    },
    {
      "character": "𗑵",
      "reading": "tsə¹",
      "explanationEN": "big cymbals"
    },
    {
      "character": "𗑊",
      "reading": "ŋa̱²",
      "explanationEN": "night; evening"
    },
    {
      "character": "𗐹",
      "reading": "γa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗐭",
      "reading": "śwa¹",
      "explanationEN": "to speak; to say"
    },
    {
      "character": "𗓓",
      "reading": "tśhe¹",
      "explanationEN": "to go; to walk"
    },
    {
      "character": "𗒋",
      "reading": "ẓao̱ṃ¹",
      "explanationEN": "to gather; to collect"
    },
    {
      "character": "𘖟",
      "reading": "bi̱h¹",
      "explanationEN": "lance; spear"
    },
    {
      "character": "𗬸",
      "reading": "nnaa̱²",
      "explanationEN": "yarn"
    },
    {
      "character": "𘁖",
      "reading": "bə̱²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗑸",
      "reading": "γwe̱¹",
      "explanationEN": "to fight; to struggle"
    },
    {
      "character": "𗑒",
      "reading": "śwa¹",
      "explanationEN": "ambition; will"
    },
    {
      "character": "𗑰",
      "reading": "tshe̱¹",
      "explanationEN": "property; wealth"
    },
    {
      "character": "𗬷",
      "reading": "rnoṃr²",
      "explanationEN": "a kind of silk gauze"
    },
    {
      "character": "𗬿",
      "reading": "rni̱r²",
      "explanationEN": "tough silk"
    },
    {
      "character": "𗬼",
      "reading": "ryər²",
      "explanationEN": "silk"
    },
    {
      "character": "𗬾",
      "reading": "luh²",
      "explanationEN": "silk"
    },
    {
      "character": "𗭃",
      "reading": "hoṃ²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗐪",
      "reading": "qhao̱ṃ²",
      "explanationEN": "respectability"
    },
    {
      "character": "𗓙",
      "reading": "pə̱h¹",
      "explanationEN": "to hit; to fix exactly"
    },
    {
      "character": "𘞧",
      "reading": "nlhi̱w²",
      "explanationEN": "only; single"
    },
    {
      "character": "𗒹",
      "reading": "śah¹",
      "explanationEN": "seven"
    },
    {
      "character": "𘖈",
      "reading": "leṃ²",
      "explanationEN": "skill ability"
    },
    {
      "character": "𘖠",
      "reading": "rqaə̱r¹",
      "explanationEN": "timid and weak-willed"
    },
    {
      "character": "𘗅",
      "reading": "tshi̱²",
      "explanationEN": "tin"
    },
    {
      "character": "𗭂",
      "reading": "so̱²",
      "explanationEN": "mixed silk"
    },
    {
      "character": "𗔕",
      "reading": "rnir²",
      "explanationEN": "platform; stage"
    },
    {
      "character": "𗓘",
      "reading": "nheṃ¹",
      "explanationEN": "wide; broad"
    },
    {
      "character": "𗔐",
      "reading": "nuh²",
      "explanationEN": "kind"
    },
    {
      "character": "𗔏",
      "reading": "lwu̱h²",
      "explanationEN": "to stir; to agitate; to mix"
    },
    {
      "character": "𘖩",
      "reading": "ŋqo̱²",
      "explanationEN": "pliers; pincers; forceps"
    },
    {
      "character": "𗑐",
      "reading": "li̱w²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗑺",
      "reading": "nu¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗓲",
      "reading": "bo̱¹",
      "explanationEN": "robe; gown"
    },
    {
      "character": "𗒻",
      "reading": "rkur²",
      "explanationEN": "skillful; nimble"
    },
    {
      "character": "𗓪",
      "reading": "swiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗬺",
      "reading": "ra̱r²",
      "explanationEN": "yarn"
    },
    {
      "character": "𗐺",
      "reading": "mi̱ṃ¹",
      "explanationEN": "door; entrance"
    },
    {
      "character": "𗐫",
      "reading": "vwe̱²",
      "explanationEN": "to tell"
    },
    {
      "character": "𗑛",
      "reading": "rzər¹",
      "explanationEN": "south"
    },
    {
      "character": "𘝞",
      "reading": "rywər²",
      "explanationEN": "writing"
    },
    {
      "character": "𗑑",
      "reading": "rmao̱r¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗑬",
      "reading": "dzu̱¹",
      "explanationEN": "dregs; residue"
    },
    {
      "character": "𗔑",
      "reading": "qa̱h²",
      "explanationEN": "clothes for cattle; leather"
    },
    {
      "character": "𗒺",
      "reading": "tshi̱w²",
      "explanationEN": "broken; fragmentary"
    },
    {
      "character": "𘎒",
      "reading": "tśhwiw²",
      "explanationEN": "hot pepper"
    },
    {
      "character": "𗐵",
      "reading": "li²",
      "explanationEN": "to see.ʙ"
    },
    {
      "character": "𗐸",
      "reading": "se̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗑶",
      "reading": "zi̱w²",
      "explanationEN": "straight"
    },
    {
      "character": "𗑽",
      "reading": "khya²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗒯",
      "reading": "khi¹",
      "explanationEN": "to lose"
    },
    {
      "character": "𗒼",
      "reading": "qhwae̱h¹",
      "explanationEN": "to expand; to enlarge"
    },
    {
      "character": "𗓩",
      "reading": "be̱ṃ¹",
      "explanationEN": "wide; vast; flat"
    },
    {
      "character": "𗓏",
      "reading": "dźi?",
      "explanationEN": "to look; to see"
    },
    {
      "character": "𗒛",
      "reading": "γu̱h²",
      "explanationEN": "to ride"
    },
    {
      "character": "𘁒",
      "reading": "ror²",
      "explanationEN": "to brush; to wipe; to whisk"
    },
    {
      "character": "𘖪",
      "reading": "rqaə̱r¹",
      "explanationEN": "thick; saw"
    },
    {
      "character": "𘖯",
      "reading": "rər²",
      "explanationEN": "a kind of container to cook"
    },
    {
      "character": "𘖼",
      "reading": "vaa̱ṃ²",
      "explanationEN": "arrowhead"
    },
    {
      "character": "𘖽",
      "reading": "???",
      "explanationEN": "plough"
    },
    {
      "character": "𘖹",
      "reading": "lhə̱²",
      "explanationEN": "plane (for carpentry)"
    },
    {
      "character": "𗑖",
      "reading": "rŋwi̱r¹",
      "explanationEN": "a hint given with the eyes"
    },
    {
      "character": "𗑆",
      "reading": "ntə¹",
      "explanationEN": "to share; to glare"
    },
    {
      "character": "𗑇",
      "reading": "ma̱h¹",
      "explanationEN": "son-in-law; husband"
    },
    {
      "character": "𗔜",
      "reading": "lwe̱ṃ¹",
      "explanationEN": "fast; rapid"
    },
    {
      "character": "𗒡",
      "reading": "dzwə²",
      "explanationEN": "to go; to walk"
    },
    {
      "character": "𗒮",
      "reading": "khaw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗓭",
      "reading": "lwe̱¹",
      "explanationEN": "wealth"
    },
    {
      "character": "𗒾",
      "reading": "mi̱²",
      "explanationEN": "to sleep"
    },
    {
      "character": "𗓍",
      "reading": "nẓaa̱²",
      "explanationEN": "turbulent (current)"
    },
    {
      "character": "𘎐",
      "reading": "tṣae̱h²",
      "explanationEN": "to continue; to mend"
    },
    {
      "character": "𗒔",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔯",
      "reading": "dzi¹",
      "explanationEN": "to fight; to struggle"
    },
    {
      "character": "𗔗",
      "reading": "śaw²",
      "explanationEN": "stinking; smelly"
    },
    {
      "character": "𗑔",
      "reading": "mə̱²",
      "explanationEN": "honest; sincere"
    },
    {
      "character": "𗓔",
      "reading": "tshe¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔚",
      "reading": "phə̱²",
      "explanationEN": "beautiful"
    },
    {
      "character": "𗔰",
      "reading": "nuh²",
      "explanationEN": "milk"
    },
    {
      "character": "𗔹",
      "reading": "ryer¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗒧",
      "reading": "γa̱h¹",
      "explanationEN": "to cut off; to take off"
    },
    {
      "character": "𗒓",
      "reading": "tṣhaa̱¹",
      "explanationEN": "gorgeous"
    },
    {
      "character": "𗓴",
      "reading": "phə̱²",
      "explanationEN": "a kind of clothing making of crude gunny"
    },
    {
      "character": "𗔆",
      "reading": "so¹",
      "explanationEN": "to store; to lay in"
    },
    {
      "character": "𗔧",
      "reading": "su²",
      "explanationEN": "cupboard; cabinet"
    },
    {
      "character": "𘗐",
      "reading": "de²",
      "explanationEN": "INTER; OPT"
    },
    {
      "character": "𗐰",
      "reading": "phə̱²",
      "explanationEN": "apron"
    },
    {
      "character": "𗐷",
      "reading": "səh¹",
      "explanationEN": "clean"
    },
    {
      "character": "𗒝",
      "reading": "miṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗒿",
      "reading": "lu̱¹",
      "explanationEN": "storehouse; warehouse"
    },
    {
      "character": "𘖮",
      "reading": "ŋkhu¹",
      "explanationEN": "burnt"
    },
    {
      "character": "𗓼",
      "reading": "ŋwi̱²",
      "explanationEN": "oath; vow"
    },
    {
      "character": "𗑙",
      "reading": "γa̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗒩",
      "reading": "nu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗓎",
      "reading": "llwu̱h¹",
      "explanationEN": "to mix; to blend"
    },
    {
      "character": "𗔄",
      "reading": "baa̱²",
      "explanationEN": "gruel; porridge; congee"
    },
    {
      "character": "𗔾",
      "reading": "qhaə̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗑚",
      "reading": "ŋġa̱r¹",
      "explanationEN": "to play"
    },
    {
      "character": "𗑭",
      "reading": "nwə²",
      "explanationEN": "fat; grease"
    },
    {
      "character": "𘂪",
      "reading": "dze²",
      "explanationEN": "one"
    },
    {
      "character": "𗇛",
      "reading": "te²",
      "explanationEN": "firefly; glowworm"
    },
    {
      "character": "𗐻",
      "reading": "yə²",
      "explanationEN": "clothing"
    },
    {
      "character": "𗐼",
      "reading": "dźwaw¹",
      "explanationEN": "to hit; to clap"
    },
    {
      "character": "𘛵",
      "reading": "to̱²",
      "explanationEN": "end"
    },
    {
      "character": "𘑘",
      "reading": "śi¹",
      "explanationEN": "celestial being; immortal"
    },
    {
      "character": "𘝨",
      "reading": "zoh²",
      "explanationEN": "TIME.ʙ:  imperfective time"
    },
    {
      "character": "𗒄",
      "reading": "law²",
      "explanationEN": "frontier; border"
    },
    {
      "character": "𗑤",
      "reading": "γwa̱¹",
      "explanationEN": "harmonious"
    },
    {
      "character": "𗓤",
      "reading": "dźe²",
      "explanationEN": "honest; upright; calm"
    },
    {
      "character": "𗐳",
      "reading": "tśe¹",
      "explanationEN": "fort; stronghold"
    },
    {
      "character": "𗑌",
      "reading": "qae̱¹",
      "explanationEN": "incomplete; fragmentary"
    },
    {
      "character": "𗒅",
      "reading": "rśər¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗑩",
      "reading": "ŋgi²",
      "explanationEN": "hope"
    },
    {
      "character": "𗓉",
      "reading": "kə¹",
      "explanationEN": "father-in-law"
    },
    {
      "character": "𗒒",
      "reading": "mi̱²",
      "explanationEN": "arrogant; squeamish"
    },
    {
      "character": "𘑗",
      "reading": "rŋə̱r¹",
      "explanationEN": "hill; mountain"
    },
    {
      "character": "𗯦",
      "reading": "leṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘖇",
      "reading": "leṃ²",
      "explanationEN": "manners; rites"
    },
    {
      "character": "𘞤",
      "reading": "lo̱ṃ²",
      "explanationEN": "wide; vast"
    },
    {
      "character": "𘁐",
      "reading": "bu²",
      "explanationEN": "ox"
    },
    {
      "character": "𘎋",
      "reading": "dźə¹",
      "explanationEN": "to brush; to wipe; to whisk"
    },
    {
      "character": "𘖥",
      "reading": "rtswa̱r¹",
      "explanationEN": "wrinkle; fold"
    },
    {
      "character": "𘗍",
      "reading": "lha̱ṃ²",
      "explanationEN": "armor"
    },
    {
      "character": "𘖶",
      "reading": "rŋə̱r¹",
      "explanationEN": "griddle"
    },
    {
      "character": "𘗊",
      "reading": "rə̱r²",
      "explanationEN": "copper"
    },
    {
      "character": "𘛖",
      "reading": "rźər¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘟛",
      "reading": "rźər¹",
      "explanationEN": "wisdom; intelligence"
    },
    {
      "character": "𗔻",
      "reading": "ryar²",
      "explanationEN": "a skilled (or clever) workman; woman"
    },
    {
      "character": "𗐱",
      "reading": "ni²",
      "explanationEN": "12PL: 1st/2nd plural indexation"
    },
    {
      "character": "𗒖",
      "reading": "dźə¹",
      "explanationEN": "to stretch"
    },
    {
      "character": "𗑥",
      "reading": "tśe¹",
      "explanationEN": "to adore; admire"
    },
    {
      "character": "𗒀",
      "reading": "tshwi̱w¹",
      "explanationEN": "to provide for; to support"
    },
    {
      "character": "𗔂",
      "reading": "tsi¹",
      "explanationEN": "small dish"
    },
    {
      "character": "𘎆",
      "reading": "dźwə¹",
      "explanationEN": "pron. each other"
    },
    {
      "character": "𘎍",
      "reading": "tśhwiw²",
      "explanationEN": "to attend; to follow"
    },
    {
      "character": "𘖦",
      "reading": "ta̱h²",
      "explanationEN": "fold; wrinkle"
    },
    {
      "character": "𗔪",
      "reading": "qwae̱h¹",
      "explanationEN": "to thunder"
    },
    {
      "character": "𗓢",
      "reading": "və¹",
      "explanationEN": "mother-in-law"
    },
    {
      "character": "𗔘",
      "reading": "mo¹",
      "explanationEN": "to hear.ʙ"
    },
    {
      "character": "𗒕",
      "reading": "lweh¹",
      "explanationEN": "neck"
    },
    {
      "character": "𗔨",
      "reading": "tṣaə̱²",
      "explanationEN": "to twine"
    },
    {
      "character": "𘖨",
      "reading": "loṃ¹",
      "explanationEN": "dragon"
    },
    {
      "character": "𘗌",
      "reading": "rzir²",
      "explanationEN": "armor"
    },
    {
      "character": "𗔤",
      "reading": "qwai̱¹",
      "explanationEN": "dark"
    },
    {
      "character": "𗔩",
      "reading": "γae̱h²",
      "explanationEN": "to transport; to freight"
    },
    {
      "character": "𗑮",
      "reading": "də²",
      "explanationEN": "small dish"
    },
    {
      "character": "𗑾",
      "reading": "ŋŋwu̱¹",
      "explanationEN": "speech; word"
    },
    {
      "character": "𗒳",
      "reading": "qhu̱¹",
      "explanationEN": "bell"
    },
    {
      "character": "𗔦",
      "reading": "rmer²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗒷",
      "reading": "rar²",
      "explanationEN": "parents"
    },
    {
      "character": "𗔛",
      "reading": "gwi²",
      "explanationEN": "to wear.ᴀ"
    },
    {
      "character": "𗔢",
      "reading": "tih¹",
      "explanationEN": "to make (wine, vinegar)"
    },
    {
      "character": "𘖫",
      "reading": "bə̱¹",
      "explanationEN": "ceremony and propriety"
    },
    {
      "character": "𘖺",
      "reading": "nu̱¹",
      "explanationEN": "to drill; to bore"
    },
    {
      "character": "𗓝",
      "reading": "vwe̱²",
      "explanationEN": "to clear away; to clean up"
    },
    {
      "character": "𘁕",
      "reading": "bu²",
      "explanationEN": "power and influence"
    },
    {
      "character": "𘎊",
      "reading": "dzi¹",
      "explanationEN": "to cut"
    },
    {
      "character": "𗓿",
      "reading": "rir²",
      "explanationEN": "sleepy"
    },
    {
      "character": "𗓹",
      "reading": "lweh¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔡",
      "reading": "ləh¹",
      "explanationEN": "to mend; to patch; to explain"
    },
    {
      "character": "𗔼",
      "reading": "γwe̱¹",
      "explanationEN": "to struggle; to fight"
    },
    {
      "character": "𘗆",
      "reading": "tshu̱¹",
      "explanationEN": "turning shovel"
    },
    {
      "character": "𗔞",
      "reading": "rmər¹",
      "explanationEN": "livestock; domestic animal"
    },
    {
      "character": "𘗄",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "hook"
    },
    {
      "character": "𗒵",
      "reading": "qwa̱¹",
      "explanationEN": "to tie; to bind"
    },
    {
      "character": "𗐾",
      "reading": "swi̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗓦",
      "reading": "ndwu̱²",
      "explanationEN": "secret; clandestine"
    },
    {
      "character": "𗒥",
      "reading": "yoṃ²",
      "explanationEN": "to respect; to revere"
    },
    {
      "character": "𗑿",
      "reading": "law²",
      "explanationEN": "single; lonely"
    },
    {
      "character": "𗒇",
      "reading": "nwi̱w¹",
      "explanationEN": "six-year-old sheep"
    },
    {
      "character": "𗑨",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "to fight; to struggle; to dispute"
    },
    {
      "character": "𗓵",
      "reading": "ryer²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘎇",
      "reading": "po̱ṃ¹",
      "explanationEN": "to help; to assist"
    },
    {
      "character": "𘎈",
      "reading": "dźə¹",
      "explanationEN": "pure"
    },
    {
      "character": "𘖢",
      "reading": "gi¹",
      "explanationEN": "to lose"
    },
    {
      "character": "𗑀",
      "reading": "dźih²",
      "explanationEN": "to unfold; to uphold"
    },
    {
      "character": "𗒰",
      "reading": "rir²",
      "explanationEN": "lonely; solitary"
    },
    {
      "character": "𗐬",
      "reading": "qə̱²",
      "explanationEN": "to sew; to put together"
    },
    {
      "character": "𗓟",
      "reading": "rŋwə̱r¹",
      "explanationEN": "fourth"
    },
    {
      "character": "𘖧",
      "reading": "γa̱¹",
      "explanationEN": "needle"
    },
    {
      "character": "𗔈",
      "reading": "tṣaa̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗓥",
      "reading": "ẓao̱ṃ²",
      "explanationEN": "dawn; (early) morning"
    },
    {
      "character": "𗓧",
      "reading": "γa̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗐿",
      "reading": "ŋwi̱²",
      "explanationEN": "relatives"
    },
    {
      "character": "𗒑",
      "reading": "yə²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗑧",
      "reading": "toh¹",
      "explanationEN": "to make (wine, vinegar)"
    },
    {
      "character": "𗑎",
      "reading": "nsə²",
      "explanationEN": "to speak softly; to whisper"
    },
    {
      "character": "𗑣",
      "reading": "γwa̱¹",
      "explanationEN": "harmonious"
    },
    {
      "character": "𗓣",
      "reading": "dźe²",
      "explanationEN": "honest; upright; calm"
    },
    {
      "character": "𗔒",
      "reading": "vwə̱¹",
      "explanationEN": "husband"
    },
    {
      "character": "𘖆",
      "reading": "leṃ²",
      "explanationEN": "to sing"
    },
    {
      "character": "𗇚",
      "reading": "śə¹",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𘛙",
      "reading": "li²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𗒸",
      "reading": "llə̱¹",
      "explanationEN": "stomach (of a bird)"
    },
    {
      "character": "𗑠",
      "reading": "rir²",
      "explanationEN": "and"
    },
    {
      "character": "𗒃",
      "reading": "law²",
      "explanationEN": "frontier; border"
    },
    {
      "character": "𗔙",
      "reading": "ntśhi¹",
      "explanationEN": "to screen; to observe"
    },
    {
      "character": "𗔁",
      "reading": "si²",
      "explanationEN": "god; deity"
    },
    {
      "character": "𗑕",
      "reading": "ṇi²",
      "explanationEN": "beautiful; pretty"
    },
    {
      "character": "𗒌",
      "reading": "nlə¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔌",
      "reading": "zih²",
      "explanationEN": "shoes; boots"
    },
    {
      "character": "𗓺",
      "reading": "vwə̱¹",
      "explanationEN": "fur-lined jacket"
    },
    {
      "character": "𗔮",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "to cherish"
    },
    {
      "character": "𗔃",
      "reading": "tśi²",
      "explanationEN": "rouge"
    },
    {
      "character": "𗓫",
      "reading": "phu̱¹",
      "explanationEN": "robe; gown"
    },
    {
      "character": "𗔓",
      "reading": "???",
      "explanationEN": "to borrow"
    },
    {
      "character": "𗔬",
      "reading": "vwi̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔵",
      "reading": "kuh¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘁑",
      "reading": "mbao̱¹",
      "explanationEN": "cat"
    },
    {
      "character": "𘁓",
      "reading": "bu²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𘗃",
      "reading": "vi̱h¹",
      "explanationEN": "filthy; dirty; rusty"
    },
    {
      "character": "𘗉",
      "reading": "ra̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗓇",
      "reading": "qaə̱²",
      "explanationEN": "cervical vertebra"
    },
    {
      "character": "𗒶",
      "reading": "khi¹",
      "explanationEN": "to lose"
    },
    {
      "character": "𗒜",
      "reading": "dźwa¹",
      "explanationEN": "band; belt"
    },
    {
      "character": "𗒱",
      "reading": "świ¹",
      "explanationEN": "year; age"
    },
    {
      "character": "𗒲",
      "reading": "tṣai̱¹",
      "explanationEN": "to amuse; to play games"
    },
    {
      "character": "𗒁",
      "reading": "dzu¹",
      "explanationEN": "to love.ʙ"
    },
    {
      "character": "𗑳",
      "reading": "nna̱²",
      "explanationEN": "thousand"
    },
    {
      "character": "𗒦",
      "reading": "nna̱²",
      "explanationEN": "to seek; to search; to look for"
    },
    {
      "character": "𗓑",
      "reading": "rγwe̱r²",
      "explanationEN": "to guard; to defend"
    },
    {
      "character": "𗓒",
      "reading": "dzu¹",
      "explanationEN": "father-in-law; uncle"
    },
    {
      "character": "𗓱",
      "reading": "te¹",
      "explanationEN": "if; maybe; perhaps"
    },
    {
      "character": "𗔋",
      "reading": "bo̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗑲",
      "reading": "ntśhiw¹",
      "explanationEN": "to speak; to say"
    },
    {
      "character": "𗔉",
      "reading": "tṣhuo¹",
      "explanationEN": "perhaps; maybe"
    },
    {
      "character": "𗓬",
      "reading": "rvwe̱r²",
      "explanationEN": "flourish"
    },
    {
      "character": "𘎑",
      "reading": "źa²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗔲",
      "reading": "tshi̱w²",
      "explanationEN": "firm; strong"
    },
    {
      "character": "𗑏",
      "reading": "tha̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗔍",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "industrious"
    },
    {
      "character": "𗓕",
      "reading": "vao̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗒴",
      "reading": "ntśhwə¹",
      "explanationEN": "to make (wine, vinegar)"
    },
    {
      "character": "𗑟",
      "reading": "vih¹",
      "explanationEN": "relatives"
    },
    {
      "character": "𗓾",
      "reading": "tshi̱w²",
      "explanationEN": "close; intimate"
    },
    {
      "character": "𗔺",
      "reading": "nli²",
      "explanationEN": "pants; trousers"
    },
    {
      "character": "𗒟",
      "reading": "nwo²",
      "explanationEN": "to demand"
    },
    {
      "character": "𗓂",
      "reading": "sə²",
      "explanationEN": "to know; to understand"
    },
    {
      "character": "𗔷",
      "reading": "tṣao̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘟪",
      "reading": "śoṃ¹",
      "explanationEN": "iron"
    },
    {
      "character": "𘖸",
      "reading": "tshu¹",
      "explanationEN": "turning shovel"
    },
    {
      "character": "𘗏",
      "reading": "dzwə̱¹",
      "explanationEN": "tweezers"
    },
    {
      "character": "𗔶",
      "reading": "rqo̱ṃr¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘗋",
      "reading": "geh¹",
      "explanationEN": "to cut; to clip; to shave"
    },
    {
      "character": "𘖳",
      "reading": "gi¹",
      "explanationEN": "to realize; to wake up"
    },
    {
      "character": "𗑍",
      "reading": "rir²",
      "explanationEN": "to trade"
    },
    {
      "character": "𗑡",
      "reading": "law²",
      "explanationEN": "to lose"
    },
    {
      "character": "𗒆",
      "reading": "hwaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗒤",
      "reading": "rgur¹",
      "explanationEN": "one-year-old sheep"
    },
    {
      "character": "𗒽",
      "reading": "thu¹",
      "explanationEN": "resentment; enmity"
    },
    {
      "character": "𗓶",
      "reading": "lo̱²",
      "explanationEN": "shirt made by rough cloth"
    },
    {
      "character": "𗑯",
      "reading": "rgur²",
      "explanationEN": "to lie down"
    },
    {
      "character": "𘗎",
      "reading": "tswu¹",
      "explanationEN": "pot to boil tea"
    },
    {
      "character": "𘎉",
      "reading": "nllo̱¹",
      "explanationEN": "to rely on"
    },
    {
      "character": "𘗂",
      "reading": "tsho̱ṃ²",
      "explanationEN": "an ancient cooking vessel with two loop handles and three or four legs"
    },
    {
      "character": "𗓊",
      "reading": "qhao̱ṃ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗓞",
      "reading": "tśu¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘖻",
      "reading": "tṣhwaa̱¹",
      "explanationEN": "triangular arrowhead"
    },
    {
      "character": "𗇜",
      "reading": "rywar¹",
      "explanationEN": "to go; fast; quick"
    },
    {
      "character": "𘖜",
      "reading": "kwi¹",
      "explanationEN": "lock"
    },
    {
      "character": "𗓸",
      "reading": "nna̱²",
      "explanationEN": "oath; vow"
    },
    {
      "character": "𘗈",
      "reading": "reṃ²",
      "explanationEN": "hook"
    },
    {
      "character": "𗒞",
      "reading": "nna̱²",
      "explanationEN": "vegetable"
    },
    {
      "character": "𘖵",
      "reading": "qhwu̱h²",
      "explanationEN": "saw"
    },
    {
      "character": "𗔝",
      "reading": "qai̱w²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗔅",
      "reading": "qai̱w²",
      "explanationEN": "corner"
    },
    {
      "character": "𗔱",
      "reading": "lə¹",
      "explanationEN": "power and prestige; impressive and dignified manners"
    },
    {
      "character": "𘎌",
      "reading": "tśhwiw²",
      "explanationEN": "field mint; peppermint"
    },
    {
      "character": "𗓆",
      "reading": "le¹",
      "explanationEN": "to vary; to change"
    },
    {
      "character": "𗓮",
      "reading": "mya²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗓁",
      "reading": "mi¹",
      "explanationEN": "to hear.ᴀ"
    },
    {
      "character": "𗓯",
      "reading": "???",
      "explanationEN": "employment"
    },
    {
      "character": "𗓨",
      "reading": "mi̱h²",
      "explanationEN": "to seek; to look for"
    },
    {
      "character": "𗔊",
      "reading": "qwo̱ṃ²",
      "explanationEN": "anger; rage; fury"
    },
    {
      "character": "𗒐",
      "reading": "γwae̱¹",
      "explanationEN": "to receive; to accept"
    },
    {
      "character": "𗑫",
      "reading": "bə̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗓌",
      "reading": "???",
      "explanationEN": "long"
    },
    {
      "character": "𘖿",
      "reading": "ŋgwi¹",
      "explanationEN": "banner; flag; spear"
    },
    {
      "character": "𗐽",
      "reading": "tsho̱ṃ¹",
      "explanationEN": "singer; actor"
    },
    {
      "character": "𗒚",
      "reading": "bə̱¹",
      "explanationEN": "to present (a gift); to entertain (to dinner)"
    },
    {
      "character": "𘛜",
      "reading": "zi̱¹",
      "explanationEN": "baby; infant; seedling"
    },
    {
      "character": "𘟞",
      "reading": "rbər¹",
      "explanationEN": "knife; sword"
    },
    {
      "character": "𗑂",
      "reading": "rvwə̱r²",
      "explanationEN": "membrane"
    },
    {
      "character": "𗓄",
      "reading": "ŋwe̱²",
      "explanationEN": "harmonious; peaceful"
    },
    {
      "character": "𗓅",
      "reading": "ŋqaa̱²",
      "explanationEN": "to patch; to mend"
    },
    {
      "character": "𘖰",
      "reading": "tshwa¹",
      "explanationEN": "stove; furnace"
    },
    {
      "character": "𗐲",
      "reading": "bə̱¹",
      "explanationEN": "soft"
    },
    {
      "character": "𗒍",
      "reading": "dzwə²",
      "explanationEN": "to resolve"
    },
    {
      "character": "𗒉",
      "reading": "la̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗑪",
      "reading": "kwiṃ¹",
      "explanationEN": "a man of noble character; a man of virtue; gentleman"
    },
    {
      "character": "𘖬",
      "reading": "nu̱¹",
      "explanationEN": "needle"
    },
    {
      "character": "𘗀",
      "reading": "nwo̱ṃ²",
      "explanationEN": "wisdom; suggestion"
    },
    {
      "character": "𗒎",
      "reading": "yo̱ṃ²",
      "explanationEN": "song; to sing"
    },
    {
      "character": "𗔀",
      "reading": "va¹",
      "explanationEN": "father"
    },
    {
      "character": "𗓡",
      "reading": "rir²",
      "explanationEN": "wealth; official's salary in feudal China; emolument"
    },
    {
      "character": "𗒂",
      "reading": "nah¹",
      "explanationEN": "marriage"
    },
    {
      "character": "𗓠",
      "reading": "deh¹",
      "explanationEN": "mixed blood"
    },
    {
      "character": "𘗤",
      "reading": "rtsər¹",
      "explanationEN": "five; the fifth"
    },
    {
      "character": "𗑄",
      "reading": "tśu¹",
      "explanationEN": "have to"
    },
    {
      "character": "𗑃",
      "reading": "tśiṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗒗",
      "reading": "khe¹",
      "explanationEN": "brother’s son; nephew"
    },
    {
      "character": "𗒘",
      "reading": "γae̱¹",
      "explanationEN": "true; real; pure"
    },
    {
      "character": "𗒙",
      "reading": "γae̱¹",
      "explanationEN": "multitudinous; numerous"
    },
    {
      "character": "𗑴",
      "reading": "lwa̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗓋",
      "reading": "γae̱¹",
      "explanationEN": "a kind of animal"
    },
    {
      "character": "𗔎",
      "reading": "γae̱¹",
      "explanationEN": "to put in order"
    },
    {
      "character": "𗶭",
      "reading": "γu²",
      "explanationEN": "stand; pedestal; base"
    },
    {
      "character": "𘍏",
      "reading": "tsi̱¹",
      "explanationEN": "grayish white; ashen; pale"
    },
    {
      "character": "𘁗",
      "reading": "za̱²",
      "explanationEN": "comb"
    },
    {
      "character": "𘍴",
      "reading": "lih¹",
      "explanationEN": "to sink into; to lapse into"
    },
    {
      "character": "𗮄",
      "reading": "pho̱ṃ²",
      "explanationEN": "to ask"
    },
    {
      "character": "𘃤",
      "reading": "vo¹",
      "explanationEN": "to send; to dispatch"
    },
    {
      "character": "𗕁",
      "reading": "tśi¹",
      "explanationEN": "to grow; to luxuriate"
    },
    {
      "character": "𘁠",
      "reading": "γa̱¹",
      "explanationEN": "to induce; to lure"
    },
    {
      "character": "𘁮",
      "reading": "zəh¹",
      "explanationEN": "child"
    },
    {
      "character": "𘃝",
      "reading": "vi¹",
      "explanationEN": "to send; to dispatch; to benefit from"
    },
    {
      "character": "𘃨",
      "reading": "rγər¹",
      "explanationEN": "to make; to create"
    },
    {
      "character": "𘍶",
      "reading": "rγwə̱r¹",
      "explanationEN": "crane"
    },
    {
      "character": "𘍷",
      "reading": "teh¹",
      "explanationEN": "reverence"
    },
    {
      "character": "𗮌",
      "reading": "yi¹",
      "explanationEN": "man and his wife’s brother"
    },
    {
      "character": "𗮎",
      "reading": "rdźər¹",
      "explanationEN": "banquet; feast"
    },
    {
      "character": "𗮒",
      "reading": "mə¹",
      "explanationEN": "to puzzle;to confuse; to have no idea"
    },
    {
      "character": "𗮕",
      "reading": "mmə¹",
      "explanationEN": "night; evening"
    },
    {
      "character": "𘁭",
      "reading": "γwə̱²",
      "explanationEN": "wife"
    },
    {
      "character": "𘁰",
      "reading": "lwih²",
      "explanationEN": "muscle and joints"
    },
    {
      "character": "𘍼",
      "reading": "vwi̱¹",
      "explanationEN": "six; the sixth"
    },
    {
      "character": "𘍽",
      "reading": "vwi̱¹",
      "explanationEN": "fire"
    },
    {
      "character": "𘛲",
      "reading": "ŋġu̱¹",
      "explanationEN": "to patrol; to make a detour"
    },
    {
      "character": "𗮃",
      "reading": "tswi¹",
      "explanationEN": "whistling arrow"
    },
    {
      "character": "𘁨",
      "reading": "bu̱¹",
      "explanationEN": "preface; foreword"
    },
    {
      "character": "𘃧",
      "reading": "ŋgo¹",
      "explanationEN": "stupid; foolish"
    },
    {
      "character": "𗭴",
      "reading": "yoṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘌩",
      "reading": "tśhwi¹",
      "explanationEN": "salted; salty"
    },
    {
      "character": "𘌬",
      "reading": "vəh²",
      "explanationEN": "to send; to dispatch"
    },
    {
      "character": "𘌶",
      "reading": "tshi̱²",
      "explanationEN": "ball; fully round"
    },
    {
      "character": "𘕜",
      "reading": "ga²",
      "explanationEN": "I; me"
    },
    {
      "character": "𘍊",
      "reading": "nti̱w²",
      "explanationEN": "to rein in; to break"
    },
    {
      "character": "𘕹",
      "reading": "tśhiw¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘛡",
      "reading": "dźih¹",
      "explanationEN": "feast; banquet"
    },
    {
      "character": "𗭷",
      "reading": "rni̱r¹",
      "explanationEN": "old sheep"
    },
    {
      "character": "𘌻",
      "reading": "phi̱¹",
      "explanationEN": "wall"
    },
    {
      "character": "𘍒",
      "reading": "dzwe̱¹",
      "explanationEN": "guilt; suffering; patient"
    },
    {
      "character": "𘗜",
      "reading": "ŋao̱ṃ²",
      "explanationEN": "file; filing room"
    },
    {
      "character": "𗮞",
      "reading": "rśwar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗮟",
      "reading": "tshwi̱¹",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𗮨",
      "reading": "khi²",
      "explanationEN": "bottom; backside"
    },
    {
      "character": "𗮳",
      "reading": "rgur¹",
      "explanationEN": "kidney"
    },
    {
      "character": "𗮲",
      "reading": "geh²",
      "explanationEN": "to fry in shallow oil without stirring"
    },
    {
      "character": "𗮩",
      "reading": "llih²",
      "explanationEN": "rib"
    },
    {
      "character": "𗮺",
      "reading": "tsə̱h¹",
      "explanationEN": "lungs"
    },
    {
      "character": "𗯇",
      "reading": "nle̱¹",
      "explanationEN": "testis"
    },
    {
      "character": "𗮿",
      "reading": "kwəh¹",
      "explanationEN": "to combine; to associate"
    },
    {
      "character": "𗮹",
      "reading": "so²",
      "explanationEN": "crop (of a bird); bladder"
    },
    {
      "character": "𗯂",
      "reading": "vwae̱ṃ¹",
      "explanationEN": "fart"
    },
    {
      "character": "𗯊",
      "reading": "khaṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗯅",
      "reading": "swu̱¹",
      "explanationEN": "dried meat"
    },
    {
      "character": "𗭿",
      "reading": "zweh²",
      "explanationEN": "to rub; to knead"
    },
    {
      "character": "𘃡",
      "reading": "vi¹",
      "explanationEN": "to do.ᴀ"
    },
    {
      "character": "𗮋",
      "reading": "qai̱w²",
      "explanationEN": "to perforate"
    },
    {
      "character": "𗮇",
      "reading": "rdir¹",
      "explanationEN": "rattle of a drum"
    },
    {
      "character": "𘁚",
      "reading": "qwə̱¹",
      "explanationEN": "blanket"
    },
    {
      "character": "𘕏",
      "reading": "rgiwr²",
      "explanationEN": "to seek; to look for"
    },
    {
      "character": "𘍧",
      "reading": "ma¹",
      "explanationEN": "earrings"
    },
    {
      "character": "𗭺",
      "reading": "rpər¹",
      "explanationEN": "to compare; to contrast"
    },
    {
      "character": "𗭼",
      "reading": "swi̱w¹",
      "explanationEN": "bright; brilliant; light"
    },
    {
      "character": "𘃋",
      "reading": "dzu¹",
      "explanationEN": "dream"
    },
    {
      "character": "𘃩",
      "reading": "tśhwow¹",
      "explanationEN": "to twine"
    },
    {
      "character": "𘍤",
      "reading": "bi̱²",
      "explanationEN": "curly hair; wavy hair"
    },
    {
      "character": "𘌫",
      "reading": "ra̱r²",
      "explanationEN": "tomorrow"
    },
    {
      "character": "𘌵",
      "reading": "nśi²",
      "explanationEN": "tasteless"
    },
    {
      "character": "𘞩",
      "reading": "nlu¹",
      "explanationEN": "to carve; to engrave"
    },
    {
      "character": "𘕌",
      "reading": "twu̱h²",
      "explanationEN": "genuine; true; real"
    },
    {
      "character": "𘛐",
      "reading": "twu̱h¹",
      "explanationEN": "straight; honest; upright"
    },
    {
      "character": "𘌭",
      "reading": "tśwow¹",
      "explanationEN": "to drill; to bore; to penetrate"
    },
    {
      "character": "𘛥",
      "reading": "rur¹",
      "explanationEN": "to subdue; to vanquish"
    },
    {
      "character": "𘗓",
      "reading": "ŋgwi¹",
      "explanationEN": "baby still"
    },
    {
      "character": "𘍚",
      "reading": "mpu̱¹",
      "explanationEN": "slack; lax; impoverished"
    },
    {
      "character": "𗭵",
      "reading": "rer²",
      "explanationEN": "wool; feather; fine hair"
    },
    {
      "character": "𘎃",
      "reading": "vwi̱¹",
      "explanationEN": "bird"
    },
    {
      "character": "𘛎",
      "reading": "ni̱w¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘃊",
      "reading": "yə²",
      "explanationEN": "sleepy"
    },
    {
      "character": "𘛳",
      "reading": "la̱²",
      "explanationEN": "happiness; amusement"
    },
    {
      "character": "𘛴",
      "reading": "ŋġu̱¹",
      "explanationEN": "name of a god"
    },
    {
      "character": "𘖃",
      "reading": "vwa̱h²",
      "explanationEN": "peace and happiness"
    },
    {
      "character": "𘁫",
      "reading": "nne¹",
      "explanationEN": "pearl"
    },
    {
      "character": "𘌳",
      "reading": "vwi̱²",
      "explanationEN": "extremely happiness"
    },
    {
      "character": "𘍉",
      "reading": "qhaa̱²",
      "explanationEN": "magpie"
    },
    {
      "character": "𘕛",
      "reading": "qae̱¹",
      "explanationEN": "to abuse; to swear; to curse"
    },
    {
      "character": "𘋾",
      "reading": "ẓuo¹",
      "explanationEN": "god; patron saint"
    },
    {
      "character": "𘍘",
      "reading": "be̱ṃ¹",
      "explanationEN": "pain; suffering; hardship"
    },
    {
      "character": "𘗒",
      "reading": "bu²",
      "explanationEN": "to call; to summon; to invite"
    },
    {
      "character": "𘋿",
      "reading": "ne²",
      "explanationEN": "dog"
    },
    {
      "character": "𘕋",
      "reading": "dźih²",
      "explanationEN": "fault; crime; guilt"
    },
    {
      "character": "𘃠",
      "reading": "ndu̱¹",
      "explanationEN": "to save; to store up"
    },
    {
      "character": "𗮐",
      "reading": "nthu̱¹",
      "explanationEN": "to beg; to request; to demand"
    },
    {
      "character": "𗮑",
      "reading": "nthu̱¹",
      "explanationEN": "to beg; to request; to demand"
    },
    {
      "character": "𘌴",
      "reading": "hwae̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘌺",
      "reading": "phi̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗔽",
      "reading": "qhwaə̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘍓",
      "reading": "khwə²",
      "explanationEN": "prison; jail"
    },
    {
      "character": "𘁱",
      "reading": "qa̱h¹",
      "explanationEN": "pole; axis"
    },
    {
      "character": "𘎧",
      "reading": "vwa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘎫",
      "reading": "ki¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘏆",
      "reading": "soh¹",
      "explanationEN": "agriculture; farming"
    },
    {
      "character": "𘏂",
      "reading": "kwe¹",
      "explanationEN": "convulsion"
    },
    {
      "character": "𘎿",
      "reading": "qa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘖄",
      "reading": "qhə̱¹",
      "explanationEN": "buttocks; bottom; backside"
    },
    {
      "character": "𘖖",
      "reading": "mə¹",
      "explanationEN": "mother"
    },
    {
      "character": "𘝪",
      "reading": "dźoṃ¹",
      "explanationEN": "to separate"
    },
    {
      "character": "𘝙",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗯩",
      "reading": "twu̱h¹",
      "explanationEN": "each; place"
    },
    {
      "character": "𗯪",
      "reading": "tu¹",
      "explanationEN": "clumsy; dull; unskillful"
    },
    {
      "character": "𗰆",
      "reading": "lha¹",
      "explanationEN": "deer"
    },
    {
      "character": "𘁇",
      "reading": "yə²",
      "explanationEN": "past; last"
    },
    {
      "character": "𘎭",
      "reading": "nwəh¹",
      "explanationEN": "quick; nimble; agile"
    },
    {
      "character": "𘏈",
      "reading": "vwa̱h¹",
      "explanationEN": "shoulder"
    },
    {
      "character": "𘏋",
      "reading": "sə̱¹",
      "explanationEN": "full; filled; packed"
    },
    {
      "character": "𘑉",
      "reading": "ŋqhu̱²",
      "explanationEN": "to turn over"
    },
    {
      "character": "𘖗",
      "reading": "dźə¹",
      "explanationEN": "to pull up; to rescue"
    },
    {
      "character": "𗯡",
      "reading": "le̱²",
      "explanationEN": "to change; to vary"
    },
    {
      "character": "𘁆",
      "reading": "khaṃ²",
      "explanationEN": "elephant"
    },
    {
      "character": "𗰁",
      "reading": "dźuo²",
      "explanationEN": "can; may"
    },
    {
      "character": "𘏢",
      "reading": "kweṃh²",
      "explanationEN": "repetition"
    },
    {
      "character": "𘐚",
      "reading": "nśwə¹",
      "explanationEN": "clear; transparent"
    },
    {
      "character": "𘛻",
      "reading": "ndi¹",
      "explanationEN": "thunder"
    },
    {
      "character": "𘁊",
      "reading": "lhih²",
      "explanationEN": "elephant"
    },
    {
      "character": "𗰊",
      "reading": "rtsa̱r¹",
      "explanationEN": "beast; animal"
    },
    {
      "character": "𘋪",
      "reading": "rtər¹",
      "explanationEN": "filled; packed; full"
    },
    {
      "character": "𘏦",
      "reading": "teṃh¹",
      "explanationEN": "to obstruct; to block; to stuff"
    },
    {
      "character": "𘐕",
      "reading": "tśiw²",
      "explanationEN": "circumference; circuit"
    },
    {
      "character": "𗯼",
      "reading": "dźaw¹",
      "explanationEN": "to burn; to kindle"
    },
    {
      "character": "𗰃",
      "reading": "tshə²",
      "explanationEN": "salt"
    },
    {
      "character": "𗰄",
      "reading": "gwe¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘑈",
      "reading": "qaa̱¹",
      "explanationEN": "pottery; earthenware"
    },
    {
      "character": "𘋰",
      "reading": "bo̱ṃh²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘋵",
      "reading": "bo̱ṃh²",
      "explanationEN": "vulture"
    },
    {
      "character": "𘃖",
      "reading": "rza̱r²",
      "explanationEN": "fountainhead; source"
    },
    {
      "character": "𘐂",
      "reading": "nwəh²",
      "explanationEN": "to burn; to kindle"
    },
    {
      "character": "𘖐",
      "reading": "mə²",
      "explanationEN": "fire"
    },
    {
      "character": "𘖂",
      "reading": "rŋi̱wr²",
      "explanationEN": "roebuck"
    },
    {
      "character": "𘋖",
      "reading": "khe¹",
      "explanationEN": "west"
    },
    {
      "character": "𘛧",
      "reading": "leṃ²",
      "explanationEN": "bottle"
    },
    {
      "character": "𗯠",
      "reading": "qhwu̱h²",
      "explanationEN": "to cut; to slice"
    },
    {
      "character": "𗯥",
      "reading": "lhe̱²",
      "explanationEN": "to translate; to vary"
    },
    {
      "character": "𘏄",
      "reading": "tih¹",
      "explanationEN": "to eliminate; to get rid of"
    },
    {
      "character": "𘂂",
      "reading": "nwə¹",
      "explanationEN": "god; deity"
    },
    {
      "character": "𘋚",
      "reading": "dzu̱²",
      "explanationEN": "tail; end; east"
    },
    {
      "character": "𘛚",
      "reading": "nae̱h²",
      "explanationEN": "bamboo"
    },
    {
      "character": "𘟬",
      "reading": "vih¹",
      "explanationEN": "axe; hatchet"
    },
    {
      "character": "𘎜",
      "reading": "ta̱h²",
      "explanationEN": "fetus; embryo"
    },
    {
      "character": "𘟫",
      "reading": "γa̱h¹",
      "explanationEN": "sword; saber; weapon"
    },
    {
      "character": "𘐲",
      "reading": "lhoh²",
      "explanationEN": "tattered; ragged; broken"
    },
    {
      "character": "𘂹",
      "reading": "ne²",
      "explanationEN": "end; tail; east"
    },
    {
      "character": "𘐅",
      "reading": "ŋġai̱¹",
      "explanationEN": "stupid; dull; inferior"
    },
    {
      "character": "𘑇",
      "reading": "yih²",
      "explanationEN": "to uphold; to stretch"
    },
    {
      "character": "𘛞",
      "reading": "mo̱²",
      "explanationEN": "solitary; lonely"
    },
    {
      "character": "𘛷",
      "reading": "rər²",
      "explanationEN": "thunderclap"
    },
    {
      "character": "𘎮",
      "reading": "pih¹",
      "explanationEN": "to discuss"
    },
    {
      "character": "𘑂",
      "reading": "lhoh²",
      "explanationEN": "to roll"
    },
    {
      "character": "𘋒",
      "reading": "ŋgə¹",
      "explanationEN": "to encourage oneself"
    },
    {
      "character": "𘂫",
      "reading": "vəh¹",
      "explanationEN": "to change; to fluctuate"
    },
    {
      "character": "𘐁",
      "reading": "lu²",
      "explanationEN": "chess; to gamble"
    },
    {
      "character": "𘐘",
      "reading": "ŋqu̱¹",
      "explanationEN": "to carve; to engrave; to pick"
    },
    {
      "character": "𘏉",
      "reading": "tśhwow¹",
      "explanationEN": "to pierce through; to penetrate"
    },
    {
      "character": "𘝫",
      "reading": "???",
      "explanationEN": "the Milky Way"
    },
    {
      "character": "𘎰",
      "reading": "ndo¹",
      "explanationEN": "to pierce through; to penetrate"
    },
    {
      "character": "𘏤",
      "reading": "rllər¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘍨",
      "reading": "hi¹",
      "explanationEN": "happy; pleased"
    },
    {
      "character": "𘛶",
      "reading": "rtśər²",
      "explanationEN": "stars; constellation"
    },
    {
      "character": "𘎓",
      "reading": "llu̱h¹",
      "explanationEN": "to hear"
    },
    {
      "character": "𘂁",
      "reading": "ẓai̱w²",
      "explanationEN": "color"
    },
    {
      "character": "𘐄",
      "reading": "lhwa¹",
      "explanationEN": "to tie; to weave; to plait"
    },
    {
      "character": "𘋛",
      "reading": "beṃ¹",
      "explanationEN": "benefit; profit; interest"
    },
    {
      "character": "𘃈",
      "reading": "li̱ṃ?",
      "explanationEN": "husbands of sisters"
    },
    {
      "character": "𘐹",
      "reading": "phai̱²",
      "explanationEN": "paper"
    },
    {
      "character": "𘖔",
      "reading": "ẓwaa̱²",
      "explanationEN": "to shrink; to contract"
    },
    {
      "character": "𘑊",
      "reading": "ŋqhu̱²",
      "explanationEN": "to turn over"
    },
    {
      "character": "𘖘",
      "reading": "dźə¹",
      "explanationEN": "to pull up; to rescue"
    },
    {
      "character": "𘐀",
      "reading": "phə̱¹",
      "explanationEN": "Tibetan"
    },
    {
      "character": "𘍭",
      "reading": "swi²",
      "explanationEN": "cleverness; skillful artisan"
    },
    {
      "character": "𘋴",
      "reading": "yeṃ²",
      "explanationEN": "Tibetan"
    },
    {
      "character": "𘎯",
      "reading": "rkawr²",
      "explanationEN": "to cut"
    },
    {
      "character": "𘎱",
      "reading": "tśwe²",
      "explanationEN": "to drive away; to expel"
    },
    {
      "character": "𗰉",
      "reading": "lha¹",
      "explanationEN": "wine"
    },
    {
      "character": "𗯫",
      "reading": "lloh²",
      "explanationEN": "to catch.ʙ; to arrest.ʙ"
    },
    {
      "character": "𗯻",
      "reading": "dźaw¹",
      "explanationEN": "to burn; to kindle"
    },
    {
      "character": "𘎬",
      "reading": "kwih²",
      "explanationEN": "to harvest; to collect; to reap"
    },
    {
      "character": "𘎘",
      "reading": "nli¹",
      "explanationEN": "to smell"
    },
    {
      "character": "𘂀",
      "reading": "se²",
      "explanationEN": "man; person; people"
    },
    {
      "character": "𘋸",
      "reading": "bo̱ṃh²",
      "explanationEN": "sexual intercourse"
    },
    {
      "character": "𘐪",
      "reading": "tśə¹",
      "explanationEN": "to draw (a bow)"
    },
    {
      "character": "𘏃",
      "reading": "qə̱h¹",
      "explanationEN": "to overflow; to spill"
    },
    {
      "character": "𘏡",
      "reading": "ŋqhae̱¹",
      "explanationEN": "fruit"
    },
    {
      "character": "𘍫",
      "reading": "qhwai̱¹",
      "explanationEN": "a surname; vigorous"
    },
    {
      "character": "𘖙",
      "reading": "no̱²",
      "explanationEN": "a unit of measurement for rolls of cloth or silk"
    },
    {
      "character": "𘕧",
      "reading": "nda̱²",
      "explanationEN": "to tour; to walk; to patrol"
    },
    {
      "character": "𘗢",
      "reading": "γa̱¹",
      "explanationEN": "husband and wife"
    },
    {
      "character": "𘗝",
      "reading": "lu̱h¹",
      "explanationEN": "door"
    },
    {
      "character": "𘕪",
      "reading": "γi̱w¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘁸",
      "reading": "thə̱h¹",
      "explanationEN": "even; well-distributed"
    },
    {
      "character": "𘗥",
      "reading": "dẓaə̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗭶",
      "reading": "go²",
      "explanationEN": "to decline; to wane"
    },
    {
      "character": "𘌨",
      "reading": "lah²",
      "explanationEN": "to burst; to split; to crack"
    },
    {
      "character": "𘍞",
      "reading": "γao̱h¹",
      "explanationEN": "round; ring; courtyard; all"
    },
    {
      "character": "𘛫",
      "reading": "liw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗮍",
      "reading": "dzi²",
      "explanationEN": "to tattoo the face (as a punishment); to brand"
    },
    {
      "character": "𘃫",
      "reading": "qwə̱h¹",
      "explanationEN": "unfired brick"
    },
    {
      "character": "𘛒",
      "reading": "rŋi̱wr¹",
      "explanationEN": "mixed; in a mess; in a jumble"
    },
    {
      "character": "𘍇",
      "reading": "rgwar¹",
      "explanationEN": "to gallop; to speed"
    },
    {
      "character": "𘛢",
      "reading": "rmer¹",
      "explanationEN": "soldier; person"
    },
    {
      "character": "𘌮",
      "reading": "qhaa̱²",
      "explanationEN": "ghost; spirit; demon"
    },
    {
      "character": "𘍌",
      "reading": "phi̱¹",
      "explanationEN": "wife"
    },
    {
      "character": "𘍑",
      "reading": "leṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗮤",
      "reading": "thu̱²",
      "explanationEN": "penis"
    },
    {
      "character": "𗮬",
      "reading": "nlə²",
      "explanationEN": "sore"
    },
    {
      "character": "𗯏",
      "reading": "mbə̱¹",
      "explanationEN": "maggot"
    },
    {
      "character": "𗮠",
      "reading": "lih²",
      "explanationEN": "disaster; calamity"
    },
    {
      "character": "𗮫",
      "reading": "tśhə²",
      "explanationEN": "sore"
    },
    {
      "character": "𗮰",
      "reading": "si²",
      "explanationEN": "liver"
    },
    {
      "character": "𗮸",
      "reading": "pə̱h¹",
      "explanationEN": "pus"
    },
    {
      "character": "𗮾",
      "reading": "rni̱r²",
      "explanationEN": "breast"
    },
    {
      "character": "𗯃",
      "reading": "rur²",
      "explanationEN": "sore"
    },
    {
      "character": "𗯀",
      "reading": "śiw²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗮻",
      "reading": "bu¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗯉",
      "reading": "nlə²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𘕮",
      "reading": "hə¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘕯",
      "reading": "hi¹",
      "explanationEN": "surprised; amazed; stunned"
    },
    {
      "character": "𘕬",
      "reading": "bi¹",
      "explanationEN": "to grow; to develop"
    },
    {
      "character": "𗭽",
      "reading": "di̱h²",
      "explanationEN": "to know; to dispel doubts"
    },
    {
      "character": "𘁘",
      "reading": "qwə̱¹",
      "explanationEN": "back"
    },
    {
      "character": "𘃞",
      "reading": "lə¹",
      "explanationEN": "one"
    },
    {
      "character": "𘍵",
      "reading": "vwi̱¹",
      "explanationEN": "to realize; to clever"
    },
    {
      "character": "𘖅",
      "reading": "vwi̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘛮",
      "reading": "khe²",
      "explanationEN": "happy; cheerful"
    },
    {
      "character": "𘁵",
      "reading": "tse²",
      "explanationEN": "to slander; to defame"
    },
    {
      "character": "𘍹",
      "reading": "vwi̱¹",
      "explanationEN": "scar"
    },
    {
      "character": "𗮓",
      "reading": "nllə²",
      "explanationEN": "to detest"
    },
    {
      "character": "𘁶",
      "reading": "dzə¹",
      "explanationEN": "complete"
    },
    {
      "character": "𗮉",
      "reading": "nli²",
      "explanationEN": "to wait.ʙ"
    },
    {
      "character": "𗕀",
      "reading": "γo̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗭲",
      "reading": "thu̱²",
      "explanationEN": "a kind of animal"
    },
    {
      "character": "𘌯",
      "reading": "tśheṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘋺",
      "reading": "ẓuo¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘃍",
      "reading": "nno̱¹",
      "explanationEN": "finger"
    },
    {
      "character": "𘎢",
      "reading": "ta̱¹",
      "explanationEN": "to strike; to beat"
    },
    {
      "character": "𘎤",
      "reading": "tə¹",
      "explanationEN": "if"
    },
    {
      "character": "𘋏",
      "reading": "ne̱²",
      "explanationEN": "evening; night"
    },
    {
      "character": "𘐳",
      "reading": "?ə²",
      "explanationEN": "volume"
    },
    {
      "character": "𘂶",
      "reading": "vih¹",
      "explanationEN": "monkey; beast; animal"
    },
    {
      "character": "𘏀",
      "reading": "deh¹",
      "explanationEN": "to cut; to chop"
    },
    {
      "character": "𘛟",
      "reading": "ve²",
      "explanationEN": "uncle"
    },
    {
      "character": "𘋨",
      "reading": "dzwə¹",
      "explanationEN": "emperor"
    },
    {
      "character": "𘏐",
      "reading": "γwai̱¹",
      "explanationEN": "power; force"
    },
    {
      "character": "𘎶",
      "reading": "qwə̱²",
      "explanationEN": "convulsion; spasm; lame; bent"
    },
    {
      "character": "𘟝",
      "reading": "γo̱¹",
      "explanationEN": "power; force"
    },
    {
      "character": "𘁍",
      "reading": "lwəh¹",
      "explanationEN": "calf"
    },
    {
      "character": "𘍲",
      "reading": "tṣhaa̱¹",
      "explanationEN": "surprised; astonished"
    },
    {
      "character": "𘐰",
      "reading": "qwaə̱¹",
      "explanationEN": "to step on; to burst; to split"
    },
    {
      "character": "𘎴",
      "reading": "qa̱h¹",
      "explanationEN": "to drag; to put out"
    },
    {
      "character": "𘁂",
      "reading": "ya²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘁻",
      "reading": "nświ²",
      "explanationEN": "crimson"
    },
    {
      "character": "𘃒",
      "reading": "dziw²",
      "explanationEN": "width"
    },
    {
      "character": "𘏏",
      "reading": "tə¹",
      "explanationEN": "a kind of animal"
    },
    {
      "character": "𘏯",
      "reading": "nśi²",
      "explanationEN": "earthworm"
    },
    {
      "character": "𘛛",
      "reading": "teṃ¹",
      "explanationEN": "the sun"
    },
    {
      "character": "𘛸",
      "reading": "dźwu¹",
      "explanationEN": "meteorite; lightning; thunderbolt"
    },
    {
      "character": "𘏮",
      "reading": "nne̱²",
      "explanationEN": "to knead; to press"
    },
    {
      "character": "𘏧",
      "reading": "yaw²",
      "explanationEN": "gold"
    },
    {
      "character": "𘏽",
      "reading": "swi¹",
      "explanationEN": "auspicious; lucky"
    },
    {
      "character": "𘝱",
      "reading": "ŋkho¹",
      "explanationEN": "to open eyes"
    },
    {
      "character": "𗯬",
      "reading": "rvwe̱r²",
      "explanationEN": "nose bolt"
    },
    {
      "character": "𗯵",
      "reading": "tśə¹",
      "explanationEN": "to destroy; to damage"
    },
    {
      "character": "𗯰",
      "reading": "thi²",
      "explanationEN": "tail"
    },
    {
      "character": "𘂺",
      "reading": "tśi¹",
      "explanationEN": "stasis (of blood)"
    },
    {
      "character": "𘂿",
      "reading": "vəh¹",
      "explanationEN": "skill"
    },
    {
      "character": "𘏥",
      "reading": "du¹",
      "explanationEN": "to ban; to prohibit"
    },
    {
      "character": "𗰌",
      "reading": "rtsa̱r¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𗰀",
      "reading": "nthwu̱¹",
      "explanationEN": "open; through"
    },
    {
      "character": "𘏎",
      "reading": "ndzu²",
      "explanationEN": "to plant"
    },
    {
      "character": "𘐙",
      "reading": "dzwə̱¹",
      "explanationEN": "to arrest; to catch"
    },
    {
      "character": "𘐱",
      "reading": "di̱w²",
      "explanationEN": "true; real; genuine"
    },
    {
      "character": "𘑄",
      "reading": "dau̱¹",
      "explanationEN": "to prohibit; to ban; to resist"
    },
    {
      "character": "𘎖",
      "reading": "dziw²",
      "explanationEN": "to link; to continue"
    },
    {
      "character": "𘎕",
      "reading": "qhai̱w²",
      "explanationEN": "maggot"
    },
    {
      "character": "𘐝",
      "reading": "ẓae̱ṃ¹",
      "explanationEN": "to give birth; to bear"
    },
    {
      "character": "𘎛",
      "reading": "nẓai̱¹",
      "explanationEN": "target; meaning"
    },
    {
      "character": "𘐯",
      "reading": "rir²",
      "explanationEN": "to prohibit; to ban"
    },
    {
      "character": "𘋹",
      "reading": "gwi²",
      "explanationEN": "the Han"
    },
    {
      "character": "𘏭",
      "reading": "tśə¹",
      "explanationEN": "to drag; to pull"
    },
    {
      "character": "𘂸",
      "reading": "keṃ¹",
      "explanationEN": "to surprise; to shock; to alarm"
    },
    {
      "character": "𘖛",
      "reading": "śoṃ¹",
      "explanationEN": "kind; benevolent"
    },
    {
      "character": "𘕤",
      "reading": "yu²",
      "explanationEN": "to seek.ᴀ; to search.ᴀ"
    },
    {
      "character": "𘛪",
      "reading": "bi²",
      "explanationEN": "to be surprised; to be amazed"
    },
    {
      "character": "𘕨",
      "reading": "nsi¹",
      "explanationEN": "to cry bitterly; to wail; to condole"
    },
    {
      "character": "𘗞",
      "reading": "rvor²",
      "explanationEN": "nest"
    },
    {
      "character": "𘁹",
      "reading": "rdza̱r¹",
      "explanationEN": "to vary; to change; to be magic"
    },
    {
      "character": "𗮏",
      "reading": "ŋge¹",
      "explanationEN": "to exceed; to surpass"
    },
    {
      "character": "𘃬",
      "reading": "γo̱²",
      "explanationEN": "thread; string"
    },
    {
      "character": "𘃭",
      "reading": "qhao̱²",
      "explanationEN": "skillful; ingenious"
    },
    {
      "character": "𘌽",
      "reading": "thə²",
      "explanationEN": "this"
    },
    {
      "character": "𘝠",
      "reading": "thə²",
      "explanationEN": "scorpion"
    },
    {
      "character": "𘞪",
      "reading": "teh¹",
      "explanationEN": "only; unique"
    },
    {
      "character": "𗮦",
      "reading": "ntśi¹",
      "explanationEN": "to make love; to rape"
    },
    {
      "character": "𗮥",
      "reading": "mə²",
      "explanationEN": "bottom; backside"
    },
    {
      "character": "𗮝",
      "reading": "lhao̱ṃ²",
      "explanationEN": "meat chopped into small pieces; minced meat"
    },
    {
      "character": "𗮪",
      "reading": "su̱²",
      "explanationEN": "pus"
    },
    {
      "character": "𗯍",
      "reading": "khaṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗯋",
      "reading": "be²",
      "explanationEN": "penis"
    },
    {
      "character": "𘁢",
      "reading": "thi̱w²",
      "explanationEN": "to play; to tease"
    },
    {
      "character": "𘃢",
      "reading": "li̱w²",
      "explanationEN": "woolen cloth"
    },
    {
      "character": "𘍡",
      "reading": "ye¹",
      "explanationEN": "penis"
    },
    {
      "character": "𘌷",
      "reading": "nlu¹",
      "explanationEN": "to cross"
    },
    {
      "character": "𘕞",
      "reading": "dzih²",
      "explanationEN": "to abet; to instigate"
    },
    {
      "character": "𘞫",
      "reading": "rgiwr²",
      "explanationEN": "a bit of; a drop of"
    },
    {
      "character": "𘗚",
      "reading": "de²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘃎",
      "reading": "pah¹",
      "explanationEN": "palm; handful of"
    },
    {
      "character": "𘎸",
      "reading": "tah¹",
      "explanationEN": "to decorate; to adorn; to ornament"
    },
    {
      "character": "𘏔",
      "reading": "rphə̱r¹",
      "explanationEN": "to eliminate; to clean away"
    },
    {
      "character": "𘐇",
      "reading": "la̱¹",
      "explanationEN": "to record; to write; stele"
    },
    {
      "character": "𘖏",
      "reading": "mə¹",
      "explanationEN": "right now; this time"
    },
    {
      "character": "𘋫",
      "reading": "tśa¹",
      "explanationEN": "to bend; to inverse; to topple and fall"
    },
    {
      "character": "𘖕",
      "reading": "tso¹",
      "explanationEN": "restless; impetuous"
    },
    {
      "character": "𘐠",
      "reading": "ŋwo̱²",
      "explanationEN": "to damage; to injure; to harm"
    },
    {
      "character": "𘑀",
      "reading": "təh²",
      "explanationEN": "to damage; to break"
    },
    {
      "character": "𘐡",
      "reading": "ntśə¹",
      "explanationEN": "order; sequence"
    },
    {
      "character": "𘎩",
      "reading": "swe̱¹",
      "explanationEN": "fragmentary; broken"
    },
    {
      "character": "𘋧",
      "reading": "nlo²",
      "explanationEN": "pants"
    },
    {
      "character": "𘖊",
      "reading": "mə²",
      "explanationEN": "footmark; trace"
    },
    {
      "character": "𘏓",
      "reading": "se²",
      "explanationEN": "interests (on an investment)"
    },
    {
      "character": "𘎷",
      "reading": "nwəh²",
      "explanationEN": "rush (to be used as wick)"
    },
    {
      "character": "𘎔",
      "reading": "qhai̱w²",
      "explanationEN": "bow"
    },
    {
      "character": "𗯟",
      "reading": "ŋwu̱²",
      "explanationEN": "to listen (respectfully); to hear"
    },
    {
      "character": "𘁼",
      "reading": "nświ²",
      "explanationEN": "puckery; astringent"
    },
    {
      "character": "𘂯",
      "reading": "mbo̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘏕",
      "reading": "rvwai̱r¹",
      "explanationEN": "to throw; to cast"
    },
    {
      "character": "𘏒",
      "reading": "phai̱²",
      "explanationEN": "to untie; to relieve"
    },
    {
      "character": "𘏱",
      "reading": "si̱w²",
      "explanationEN": "piebald; stripe"
    },
    {
      "character": "𘏰",
      "reading": "və²",
      "explanationEN": "right now; this time"
    },
    {
      "character": "𘏑",
      "reading": "phu̱¹",
      "explanationEN": "general; universal"
    },
    {
      "character": "𘃑",
      "reading": "mi̱h²",
      "explanationEN": "to abandon"
    },
    {
      "character": "𘖎",
      "reading": "veh¹",
      "explanationEN": "short; brief"
    },
    {
      "character": "𘏊",
      "reading": "rkur¹",
      "explanationEN": "to fill.ᴀ; to ladle.ᴀ"
    },
    {
      "character": "𘏩",
      "reading": "feṃh²",
      "explanationEN": "to hang; to suspend"
    },
    {
      "character": "𗰎",
      "reading": "γu̱h¹",
      "explanationEN": "young deer"
    },
    {
      "character": "𗯴",
      "reading": "khu¹",
      "explanationEN": "SUBE: subessive case"
    },
    {
      "character": "𘛨",
      "reading": "ŋqwa̱¹",
      "explanationEN": "earthen bowl; alms bowl"
    },
    {
      "character": "𘋘",
      "reading": "qao̱²",
      "explanationEN": "to call; to make somebody do"
    },
    {
      "character": "𘖉",
      "reading": "khe²",
      "explanationEN": "to reach; to arrive"
    },
    {
      "character": "𘃓",
      "reading": "nna̱¹",
      "explanationEN": "to grab; to clutch"
    },
    {
      "character": "𘐆",
      "reading": "la̱¹",
      "explanationEN": "to record; to write; stele"
    },
    {
      "character": "𗯶",
      "reading": "rma̱r²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗯽",
      "reading": "mma̱r¹",
      "explanationEN": "wonderful; excellent"
    },
    {
      "character": "𘗣",
      "reading": "dau̱²",
      "explanationEN": "pagoda; Buddhist pagoda"
    },
    {
      "character": "𘖚",
      "reading": "no̱²",
      "explanationEN": "marsh; swamp; bog"
    },
    {
      "character": "𘛝",
      "reading": "tsu¹",
      "explanationEN": "penis"
    },
    {
      "character": "𘝤",
      "reading": "ṇao̱ṃ¹",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𘃚",
      "reading": "dzwə²",
      "explanationEN": "to make; to build"
    },
    {
      "character": "𗔿",
      "reading": "rlwə̱r²",
      "explanationEN": "ceremony; rite; to get a haircut"
    },
    {
      "character": "𗭮",
      "reading": "źoṃ¹",
      "explanationEN": "down; cloth with soft nap"
    },
    {
      "character": "𗮅",
      "reading": "re̱r²",
      "explanationEN": "many; much; more"
    },
    {
      "character": "𗮀",
      "reading": "bu¹",
      "explanationEN": "intelligent; bright; clever"
    },
    {
      "character": "𘁞",
      "reading": "γwə̱²",
      "explanationEN": "ahead"
    },
    {
      "character": "𘃛",
      "reading": "rar²",
      "explanationEN": "immediate; rapid"
    },
    {
      "character": "𘃥",
      "reading": "ndu¹",
      "explanationEN": "to store; to lay in"
    },
    {
      "character": "𘁟",
      "reading": "do̱²",
      "explanationEN": "uneven; irregular; different"
    },
    {
      "character": "𘍿",
      "reading": "rṇar¹",
      "explanationEN": "hawk; eagle"
    },
    {
      "character": "𗮂",
      "reading": "pho¹",
      "explanationEN": "dexterous; nimble; skillful"
    },
    {
      "character": "𘁯",
      "reading": "dzih¹",
      "explanationEN": "claw; talon; finger"
    },
    {
      "character": "𘕸",
      "reading": "tah¹",
      "explanationEN": "all; whole"
    },
    {
      "character": "𘝟",
      "reading": "śwə¹",
      "explanationEN": "to contact; to pass through"
    },
    {
      "character": "𘞨",
      "reading": "źeh²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘌾",
      "reading": "rbaa̱r¹",
      "explanationEN": "to make a profit; to gallop"
    },
    {
      "character": "𘕽",
      "reading": "gu²",
      "explanationEN": "world"
    },
    {
      "character": "𘌁",
      "reading": "rγo̱ṃr¹",
      "explanationEN": "crooked"
    },
    {
      "character": "𘗗",
      "reading": "po̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘗛",
      "reading": "bu²",
      "explanationEN": "skeleton"
    },
    {
      "character": "𗮜",
      "reading": "???",
      "explanationEN": "to meet"
    },
    {
      "character": "𗮣",
      "reading": "bu¹",
      "explanationEN": "rickets"
    },
    {
      "character": "𗯞",
      "reading": "be¹",
      "explanationEN": "to ring"
    },
    {
      "character": "𘎦",
      "reading": "rvwə̱r¹",
      "explanationEN": "to gallop"
    },
    {
      "character": "𘎳",
      "reading": "nvwi̱¹",
      "explanationEN": "to give birth; to bear"
    },
    {
      "character": "𘞯",
      "reading": "dźih¹",
      "explanationEN": "sickle"
    },
    {
      "character": "𘟜",
      "reading": "dzo̱ṃ¹",
      "explanationEN": "wisdom; intelligence"
    },
    {
      "character": "𗰋",
      "reading": "rtsa̱r¹",
      "explanationEN": "a kind of silk"
    },
    {
      "character": "𘋐",
      "reading": "γa̱¹",
      "explanationEN": "dawn; daybreak"
    },
    {
      "character": "𘋭",
      "reading": "tśha¹",
      "explanationEN": "to destroy; to wreck"
    },
    {
      "character": "𘍯",
      "reading": "swi²",
      "explanationEN": "mother-in-law; aunt"
    },
    {
      "character": "𘏸",
      "reading": "ẓaə̱¹",
      "explanationEN": "to send; to let somebody do"
    },
    {
      "character": "𘐓",
      "reading": "tah²",
      "explanationEN": "to unfold; to pave"
    },
    {
      "character": "𘋔",
      "reading": "lae̱h²",
      "explanationEN": "evening; night"
    },
    {
      "character": "𘐑",
      "reading": "rer¹",
      "explanationEN": "to play chess"
    },
    {
      "character": "𗯤",
      "reading": "kwə¹",
      "explanationEN": "to cut; to break"
    },
    {
      "character": "𘋩",
      "reading": "do̱²",
      "explanationEN": "TERM: terminative case"
    },
    {
      "character": "𘏁",
      "reading": "swe̱¹",
      "explanationEN": "to link; to join"
    },
    {
      "character": "𘐏",
      "reading": "tih¹",
      "explanationEN": "to place; to put; to set up"
    },
    {
      "character": "𘐟",
      "reading": "nah²",
      "explanationEN": "handkerchief"
    },
    {
      "character": "𘝲",
      "reading": "dwu¹",
      "explanationEN": "to close one’s eyes"
    },
    {
      "character": "𘏇",
      "reading": "ri̱r²",
      "explanationEN": "curtain; screen; tassel"
    },
    {
      "character": "𘛺",
      "reading": "be²",
      "explanationEN": "dawn"
    },
    {
      "character": "𘎙",
      "reading": "qhai̱w²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘏣",
      "reading": "lwih²",
      "explanationEN": "to fetch; to strive for"
    },
    {
      "character": "𘐎",
      "reading": "pih¹",
      "explanationEN": "fat; grease"
    },
    {
      "character": "𘏠",
      "reading": "tsoh²",
      "explanationEN": "to penetrate; to pass through"
    },
    {
      "character": "𘝭",
      "reading": "rzər²",
      "explanationEN": "the Milky Way"
    },
    {
      "character": "𘐿",
      "reading": "ŋkə¹",
      "explanationEN": "to supervise"
    },
    {
      "character": "𘏿",
      "reading": "qa̱h¹",
      "explanationEN": "to supervise; to preside"
    },
    {
      "character": "𘐺",
      "reading": "llo̱ṃh¹",
      "explanationEN": "to force; to intimidate"
    },
    {
      "character": "𘁡",
      "reading": "za̱²",
      "explanationEN": "illness; disease"
    },
    {
      "character": "𘍈",
      "reading": "rzir²",
      "explanationEN": "mad; insane"
    },
    {
      "character": "𘗕",
      "reading": "rẓae̱r²",
      "explanationEN": "to live; to reside"
    },
    {
      "character": "𘁲",
      "reading": "za̱¹",
      "explanationEN": "to comb one's hair"
    },
    {
      "character": "𘛱",
      "reading": "ga̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘃟",
      "reading": "ywaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘁴",
      "reading": "γwə̱²",
      "explanationEN": "calabash"
    },
    {
      "character": "𘕼",
      "reading": "gu²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘍖",
      "reading": "rywar¹",
      "explanationEN": "to be tired; to work hard"
    },
    {
      "character": "𗭯",
      "reading": "yoṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘏛",
      "reading": "be̱²",
      "explanationEN": "rope; string"
    },
    {
      "character": "𘑕",
      "reading": "rar¹",
      "explanationEN": "an animal-drawn seed plough"
    },
    {
      "character": "𘏫",
      "reading": "yaa̱²",
      "explanationEN": "to fall"
    },
    {
      "character": "𘐽",
      "reading": "tṣwae̱h¹",
      "explanationEN": "thunderous"
    },
    {
      "character": "𘐻",
      "reading": "rer²",
      "explanationEN": "what time; when"
    },
    {
      "character": "𘑐",
      "reading": "rer²",
      "explanationEN": "to measure"
    },
    {
      "character": "𘏾",
      "reading": "tse̱¹",
      "explanationEN": "to plant; to grow"
    },
    {
      "character": "𘋜",
      "reading": "rar¹",
      "explanationEN": "illness; disease"
    },
    {
      "character": "𘃀",
      "reading": "rzi̱wr²",
      "explanationEN": "east"
    },
    {
      "character": "𘐬",
      "reading": "bo̱²",
      "explanationEN": "cane; stick"
    },
    {
      "character": "𘐾",
      "reading": "qa̱¹",
      "explanationEN": "to stir; to mix; to twist"
    },
    {
      "character": "𘐸",
      "reading": "rzə̱r²",
      "explanationEN": "to continue"
    },
    {
      "character": "𘐼",
      "reading": "rtśir¹",
      "explanationEN": "thunderous"
    },
    {
      "character": "𘑓",
      "reading": "rtśhawr²",
      "explanationEN": "zhang, a unit of length"
    },
    {
      "character": "𘐗",
      "reading": "tə̱h¹",
      "explanationEN": "to hold; to grasp"
    },
    {
      "character": "𘐭",
      "reading": "ġo̱¹",
      "explanationEN": "to pull"
    },
    {
      "character": "𘂷",
      "reading": "khiṃ¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘏻",
      "reading": "rur²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗶞",
      "reading": "ŋwu̱²",
      "explanationEN": "to reveal; to expose"
    },
    {
      "character": "𗶡",
      "reading": "hau̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶯",
      "reading": "śa¹",
      "explanationEN": "imperial carriage; carriage"
    },
    {
      "character": "𘟑",
      "reading": "ha̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘟒",
      "reading": "hwi̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘟐",
      "reading": "rhə̱r²",
      "explanationEN": "to hum"
    },
    {
      "character": "𗮗",
      "reading": "bə¹",
      "explanationEN": "cheek"
    },
    {
      "character": "𘁣",
      "reading": "γeṃ¹",
      "explanationEN": "pillow"
    },
    {
      "character": "𘍦",
      "reading": "ye¹",
      "explanationEN": "look; appearance"
    },
    {
      "character": "𘍺",
      "reading": "vwi̱¹",
      "explanationEN": "dawn; daybreak"
    },
    {
      "character": "𘛦",
      "reading": "se¹",
      "explanationEN": "next year"
    },
    {
      "character": "𗕂",
      "reading": "gu²",
      "explanationEN": "tool; utensil"
    },
    {
      "character": "𘍄",
      "reading": "qai̱¹",
      "explanationEN": "to curse; to swear"
    },
    {
      "character": "𘕺",
      "reading": "gu¹",
      "explanationEN": "canal; ditch"
    },
    {
      "character": "𘍂",
      "reading": "mo²",
      "explanationEN": "sheep"
    },
    {
      "character": "𘛣",
      "reading": "śa¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘍍",
      "reading": "phi̱¹",
      "explanationEN": "wife"
    },
    {
      "character": "𘋽",
      "reading": "γa̱¹",
      "explanationEN": "dog"
    },
    {
      "character": "𘌀",
      "reading": "rγae̱r²",
      "explanationEN": "curved; crooked"
    },
    {
      "character": "𗮚",
      "reading": "bih¹",
      "explanationEN": "urine"
    },
    {
      "character": "𗮡",
      "reading": "bə¹",
      "explanationEN": "cheek"
    },
    {
      "character": "𗮛",
      "reading": "tṣo̱ṃ¹",
      "explanationEN": "to distribute; to allocate"
    },
    {
      "character": "𗮷",
      "reading": "zwə¹",
      "explanationEN": "rickets"
    },
    {
      "character": "𗮵",
      "reading": "γu̱²",
      "explanationEN": "to combine; to integrate"
    },
    {
      "character": "𗮽",
      "reading": "rer²",
      "explanationEN": "rib"
    },
    {
      "character": "𗮶",
      "reading": "rpwər²",
      "explanationEN": "spleen"
    },
    {
      "character": "𗯈",
      "reading": "vih¹",
      "explanationEN": "trace; mark; scar"
    },
    {
      "character": "𗯄",
      "reading": "kah²",
      "explanationEN": "scar; ugly"
    },
    {
      "character": "𗯎",
      "reading": "twəh¹",
      "explanationEN": "pudendum"
    },
    {
      "character": "𗮢",
      "reading": "lhao̱ṃ²",
      "explanationEN": "tinea; ringworm"
    },
    {
      "character": "𗯆",
      "reading": "məh²",
      "explanationEN": "to jump"
    },
    {
      "character": "𗯌",
      "reading": "tshai̱²",
      "explanationEN": "stinking; smelly; foul"
    },
    {
      "character": "𗭻",
      "reading": "nle²",
      "explanationEN": "to wait.ᴀ"
    },
    {
      "character": "𘃜",
      "reading": "rar¹",
      "explanationEN": "to permit; to allow"
    },
    {
      "character": "𗭾",
      "reading": "bu¹",
      "explanationEN": "transparent"
    },
    {
      "character": "𘁛",
      "reading": "zəh¹",
      "explanationEN": "children"
    },
    {
      "character": "𘁧",
      "reading": "ntśhe¹",
      "explanationEN": "to argue; to debate"
    },
    {
      "character": "𘎀",
      "reading": "ẓaə̱²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗭹",
      "reading": "rba̱r¹",
      "explanationEN": "drum"
    },
    {
      "character": "𗮖",
      "reading": "świ²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗮙",
      "reading": "świ¹",
      "explanationEN": "in a soft low voice"
    },
    {
      "character": "𘍳",
      "reading": "ge¹",
      "explanationEN": "special; particular; peculiar"
    },
    {
      "character": "𗮁",
      "reading": "zweh²",
      "explanationEN": "to sing praises of; to extol"
    },
    {
      "character": "𘍟",
      "reading": "tsə¹",
      "explanationEN": "a unit of weight"
    },
    {
      "character": "𘎁",
      "reading": "phi¹",
      "explanationEN": "top; top of the head"
    },
    {
      "character": "𘁬",
      "reading": "te²",
      "explanationEN": "shallow; superficial"
    },
    {
      "character": "𘍥",
      "reading": "rdi̱wr¹",
      "explanationEN": "to manage; to dominate"
    },
    {
      "character": "𘌧",
      "reading": "ti¹",
      "explanationEN": "to drip"
    },
    {
      "character": "𘌪",
      "reading": "rywər¹",
      "explanationEN": "mad; crazy"
    },
    {
      "character": "𘌱",
      "reading": "dzih¹",
      "explanationEN": "to cross"
    },
    {
      "character": "𘍃",
      "reading": "rtśawr²",
      "explanationEN": "sound of teeth grinding"
    },
    {
      "character": "𘕢",
      "reading": "bə¹",
      "explanationEN": "enemy; foe"
    },
    {
      "character": "𘛕",
      "reading": "ẓwaə̱²",
      "explanationEN": "gorgeous; splendid"
    },
    {
      "character": "𘕫",
      "reading": "rŋi̱wr¹",
      "explanationEN": "to fear; to dread"
    },
    {
      "character": "𘛤",
      "reading": "rur¹",
      "explanationEN": "crucible"
    },
    {
      "character": "𘋼",
      "reading": "rkur²",
      "explanationEN": "will; ideal; aspiration"
    },
    {
      "character": "𗮘",
      "reading": "świ²",
      "explanationEN": "food; cooked rice or other cereals"
    },
    {
      "character": "𗮈",
      "reading": "ṇah?",
      "explanationEN": "frost"
    },
    {
      "character": "𘁎",
      "reading": "thə¹",
      "explanationEN": "a place name (dyke; embankment)"
    },
    {
      "character": "𘁤",
      "reading": "tśhiw²",
      "explanationEN": "woman; girl; daughter"
    },
    {
      "character": "𘃮",
      "reading": "lə¹",
      "explanationEN": "to leave; to depart from"
    },
    {
      "character": "𘛯",
      "reading": "ŋġu̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘛰",
      "reading": "khe²",
      "explanationEN": "wizard; shaman"
    },
    {
      "character": "𘍾",
      "reading": "gi²",
      "explanationEN": "a conjunction"
    },
    {
      "character": "𘕎",
      "reading": "ne²",
      "explanationEN": "to listen.ᴀ"
    },
    {
      "character": "𘁝",
      "reading": "nne¹",
      "explanationEN": "centre; middle"
    },
    {
      "character": "𘁥",
      "reading": "te²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𗭱",
      "reading": "ga²",
      "explanationEN": "old sheep"
    },
    {
      "character": "𘌸",
      "reading": "to̱ṃh¹",
      "explanationEN": "west"
    },
    {
      "character": "𘌲",
      "reading": "źiw¹",
      "explanationEN": "to add; to increase"
    },
    {
      "character": "𘍀",
      "reading": "la̱¹",
      "explanationEN": "to play; to sport"
    },
    {
      "character": "𘍋",
      "reading": "ra̱r²",
      "explanationEN": "narrow; cramped"
    },
    {
      "character": "𘍆",
      "reading": "la̱¹",
      "explanationEN": "grey; ashy"
    },
    {
      "character": "𘌼",
      "reading": "lə²",
      "explanationEN": "straight; swelling"
    },
    {
      "character": "𘕡",
      "reading": "rzi̱wr¹",
      "explanationEN": "graceful; elegant; gorgeous"
    },
    {
      "character": "𘕻",
      "reading": "gu²",
      "explanationEN": "three"
    },
    {
      "character": "𘍔",
      "reading": "tśih¹",
      "explanationEN": "bitter; painful"
    },
    {
      "character": "𘕭",
      "reading": "bi¹",
      "explanationEN": "abundant"
    },
    {
      "character": "𘗙",
      "reading": "bu²",
      "explanationEN": "brown"
    },
    {
      "character": "𘗖",
      "reading": "ŋkhe¹",
      "explanationEN": "to play games"
    },
    {
      "character": "𘃉",
      "reading": "ŋwə̱¹",
      "explanationEN": "to sleep; to be drowsy"
    },
    {
      "character": "𘍠",
      "reading": "rdi̱wr¹",
      "explanationEN": "mortar"
    },
    {
      "character": "𘁜",
      "reading": "dzu²",
      "explanationEN": "livestock"
    },
    {
      "character": "𘁦",
      "reading": "te²",
      "explanationEN": "navel"
    },
    {
      "character": "𘃣",
      "reading": "vi²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘌹",
      "reading": "lhəh¹",
      "explanationEN": "to run quickly"
    },
    {
      "character": "𘛩",
      "reading": "ŋkə¹",
      "explanationEN": "spotted; striped"
    },
    {
      "character": "𘌿",
      "reading": "phi̱¹",
      "explanationEN": "skillful; ingenious"
    },
    {
      "character": "𘛔",
      "reading": "nwo̱ṃ²",
      "explanationEN": "to herd"
    },
    {
      "character": "𘍸",
      "reading": "phi¹",
      "explanationEN": "natural resources"
    },
    {
      "character": "𘋶",
      "reading": "gwi²",
      "explanationEN": "ghost; spirit"
    },
    {
      "character": "𘎻",
      "reading": "śə¹",
      "explanationEN": "to wipe off; to whisk"
    },
    {
      "character": "𘏙",
      "reading": "śa¹",
      "explanationEN": "to wipe off; to whisk"
    },
    {
      "character": "𘏹",
      "reading": "tsə̱h¹",
      "explanationEN": "chopsticks"
    },
    {
      "character": "𘐨",
      "reading": "la²",
      "explanationEN": "song"
    },
    {
      "character": "𘐴",
      "reading": "rŋər²",
      "explanationEN": "to beat; to pound"
    },
    {
      "character": "𘐶",
      "reading": "dźwo²",
      "explanationEN": "to throw; to fling"
    },
    {
      "character": "𘂻",
      "reading": "li̱w²",
      "explanationEN": "owlet"
    },
    {
      "character": "𗯯",
      "reading": "te²",
      "explanationEN": "clumsy; dull; unskillful"
    },
    {
      "character": "𘃅",
      "reading": "vwi̱¹",
      "explanationEN": "to store; to save"
    },
    {
      "character": "𘍪",
      "reading": "hu¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘎨",
      "reading": "lhih²",
      "explanationEN": "to bear.ʙ (a burden); to endure.ʙ"
    },
    {
      "character": "𘏬",
      "reading": "ŋqa̱r¹",
      "explanationEN": "steelyard"
    },
    {
      "character": "𘝯",
      "reading": "mbao̱¹",
      "explanationEN": "to look; to watch; to observe"
    },
    {
      "character": "𘝧",
      "reading": "mbao̱¹",
      "explanationEN": "to patrol"
    },
    {
      "character": "𗰂",
      "reading": "hwo̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘋓",
      "reading": "ŋgə²",
      "explanationEN": "note; remark; explanationEN"
    },
    {
      "character": "𗰅",
      "reading": "gwe¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘋳",
      "reading": "gwi²",
      "explanationEN": "clothes; clothing"
    },
    {
      "character": "𘂱",
      "reading": "mbo̱¹",
      "explanationEN": "color"
    },
    {
      "character": "𘂼",
      "reading": "da̱h¹",
      "explanationEN": "imperial edict"
    },
    {
      "character": "𘐍",
      "reading": "tśhwi¹",
      "explanationEN": "to penetrate; to pierce through"
    },
    {
      "character": "𘎚",
      "reading": "veh²",
      "explanationEN": "to patch; to mend"
    },
    {
      "character": "𘎠",
      "reading": "sih¹",
      "explanationEN": "dustpan"
    },
    {
      "character": "𘝦",
      "reading": "dźə¹",
      "explanationEN": "skill; art"
    },
    {
      "character": "𘃁",
      "reading": "reṃ²",
      "explanationEN": "bear"
    },
    {
      "character": "𘃇",
      "reading": "rer²",
      "explanationEN": "name of a ghost"
    },
    {
      "character": "𘐩",
      "reading": "phə¹",
      "explanationEN": "to lose; to discard; to abandon"
    },
    {
      "character": "𘐢",
      "reading": "ŋġai̱¹",
      "explanationEN": "shy; bashful"
    },
    {
      "character": "𘋥",
      "reading": "di̱w²",
      "explanationEN": "motto"
    },
    {
      "character": "𘋬",
      "reading": "tshə¹",
      "explanationEN": "to love; to like; clothing"
    },
    {
      "character": "𘎣",
      "reading": "khwə¹",
      "explanationEN": "winding; crooked"
    },
    {
      "character": "𘎪",
      "reading": "ntshe¹",
      "explanationEN": "to speak.ᴀ"
    },
    {
      "character": "𘎵",
      "reading": "zeh²",
      "explanationEN": "tax; duty"
    },
    {
      "character": "𘝮",
      "reading": "llwu̱h¹",
      "explanationEN": "to cry; to weep"
    },
    {
      "character": "𘝥",
      "reading": "ntshe²",
      "explanationEN": "joke; jest"
    },
    {
      "character": "𘁽",
      "reading": "nświ²",
      "explanationEN": "color; to plaster"
    },
    {
      "character": "𘋦",
      "reading": "nẓaa̱²",
      "explanationEN": "to exert"
    },
    {
      "character": "𘖍",
      "reading": "ŋgi¹",
      "explanationEN": "to beg"
    },
    {
      "character": "𘖌",
      "reading": "mə²",
      "explanationEN": "naughty children"
    },
    {
      "character": "𘏟",
      "reading": "γa̱¹",
      "explanationEN": "full; content"
    },
    {
      "character": "𘎲",
      "reading": "lhu̱¹",
      "explanationEN": "to increase; to raise; to add"
    },
    {
      "character": "𘝰",
      "reading": "giṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗰇",
      "reading": "lha¹",
      "explanationEN": "to call; to shout to"
    },
    {
      "character": "𘁋",
      "reading": "ṇ??",
      "explanationEN": "tooth"
    },
    {
      "character": "𗯮",
      "reading": "nthwu̱¹",
      "explanationEN": "same; alike"
    },
    {
      "character": "𗯲",
      "reading": "lu²",
      "explanationEN": "to invade; to touch"
    },
    {
      "character": "𘋲",
      "reading": "lu̱¹",
      "explanationEN": "to play; to sport"
    },
    {
      "character": "𘐐",
      "reading": "mah¹",
      "explanationEN": "to injure; to scratch"
    },
    {
      "character": "𗰈",
      "reading": "dźwaw²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗰍",
      "reading": "dẓai̱w¹",
      "explanationEN": "to be worried about"
    },
    {
      "character": "𘑅",
      "reading": "ŋkə¹",
      "explanationEN": "to wrestle; to struggle"
    },
    {
      "character": "𘋱",
      "reading": "tshə¹",
      "explanationEN": "maxim; motto; aphorism"
    },
    {
      "character": "𘎥",
      "reading": "toh¹",
      "explanationEN": "to put; to arrange for"
    },
    {
      "character": "𘍰",
      "reading": "tṣhaa̱¹",
      "explanationEN": "difference"
    },
    {
      "character": "𘋗",
      "reading": "dzu̱²",
      "explanationEN": "fine horse; steed"
    },
    {
      "character": "𘞥",
      "reading": "lo̱ṃ²",
      "explanationEN": "to live in peace"
    },
    {
      "character": "𘞦",
      "reading": "lo̱ṃ²",
      "explanationEN": "upright and outspoken"
    },
    {
      "character": "𘏜",
      "reading": "nti̱w²",
      "explanationEN": "to pound with a pestle"
    },
    {
      "character": "𘐞",
      "reading": "ŋwi̱²",
      "explanationEN": "bridle"
    },
    {
      "character": "𘁃",
      "reading": "ya²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𘃏",
      "reading": "pah²",
      "explanationEN": "a kind of bird"
    },
    {
      "character": "𘃆",
      "reading": "vwi̱¹",
      "explanationEN": "to hang"
    },
    {
      "character": "𘖑",
      "reading": "mə¹",
      "explanationEN": "NEG.MOD"
    },
    {
      "character": "𘎾",
      "reading": "kheṃ¹",
      "explanationEN": "to grant.ʙ"
    },
    {
      "character": "𘏚",
      "reading": "tih²",
      "explanationEN": "the place where something happen"
    },
    {
      "character": "𘏼",
      "reading": "tśhiw²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘐧",
      "reading": "pih¹",
      "explanationEN": "Qiang and Rong people"
    },
    {
      "character": "𘐵",
      "reading": "phə²",
      "explanationEN": "branch; twig"
    },
    {
      "character": "𘑆",
      "reading": "phə²",
      "explanationEN": "a kind of insect"
    },
    {
      "character": "𘋯",
      "reading": "yeṃ²",
      "explanationEN": "bag; sack"
    },
    {
      "character": "𘋷",
      "reading": "???",
      "explanationEN": "to squeeze; to press; to force"
    },
    {
      "character": "𘂮",
      "reading": "nwo²",
      "explanationEN": "to hate"
    },
    {
      "character": "𘏍",
      "reading": "γa̱¹",
      "explanationEN": "to butcher; to chop"
    },
    {
      "character": "𘏪",
      "reading": "nae̱h²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘏨",
      "reading": "lləh¹",
      "explanationEN": "treasure"
    },
    {
      "character": "𘛭",
      "reading": "se¹",
      "explanationEN": "stars"
    },
    {
      "character": "𗯳",
      "reading": "nwə¹",
      "explanationEN": "luxuriant; majestic"
    },
    {
      "character": "𗯺",
      "reading": "rdwar¹",
      "explanationEN": "knife; sickle"
    },
    {
      "character": "𗯿",
      "reading": "rvwe̱r¹",
      "explanationEN": "flourishing; luxuriant"
    },
    {
      "character": "𘁿",
      "reading": "kwih²",
      "explanationEN": "stirrup"
    },
    {
      "character": "𘋕",
      "reading": "ho̱¹",
      "explanationEN": "he; it; that"
    },
    {
      "character": "𘑒",
      "reading": "qə̱¹",
      "explanationEN": "bag; sack"
    },
    {
      "character": "𘑑",
      "reading": "ri̱wr²",
      "explanationEN": "to scrape"
    },
    {
      "character": "𗯾",
      "reading": "luh¹",
      "explanationEN": "Mongolian gazelle"
    },
    {
      "character": "𘁈",
      "reading": "śəh¹",
      "explanationEN": "down; lower; under"
    },
    {
      "character": "𘂃",
      "reading": "li²",
      "explanationEN": "color; appearance"
    },
    {
      "character": "𘎗",
      "reading": "lhəh¹",
      "explanationEN": "bow; crossbow"
    },
    {
      "character": "𘎡",
      "reading": "no̱²",
      "explanationEN": "sweet smell; flavor"
    },
    {
      "character": "𘃄",
      "reading": "dzwəh¹",
      "explanationEN": "grip; handle"
    },
    {
      "character": "𘂬",
      "reading": "γo̱¹",
      "explanationEN": "to exist(attached)"
    },
    {
      "character": "𘎼",
      "reading": "thə¹",
      "explanationEN": "to abandon; to distinguish; to expel"
    },
    {
      "character": "𘏝",
      "reading": "phao̱ṃ¹",
      "explanationEN": "bow; crossbow"
    },
    {
      "character": "𘛘",
      "reading": "ntśə²",
      "explanationEN": "to expand"
    },
    {
      "character": "𘁅",
      "reading": "phu¹",
      "explanationEN": "ox"
    },
    {
      "character": "𘂭",
      "reading": "lweh¹",
      "explanationEN": "to hate"
    },
    {
      "character": "𘏌",
      "reading": "qa̱h¹",
      "explanationEN": "to hold; to grip; to grasp"
    },
    {
      "character": "𘂴",
      "reading": "mme¹",
      "explanationEN": "tail; end; back"
    },
    {
      "character": "𘂾",
      "reading": "qa̱h¹",
      "explanationEN": "tail; end; east"
    },
    {
      "character": "𘋑",
      "reading": "qwaa̱¹",
      "explanationEN": "remnants"
    },
    {
      "character": "𘋙",
      "reading": "rir²",
      "explanationEN": "fast; rapid; speech; word"
    },
    {
      "character": "𘃗",
      "reading": "ndə¹",
      "explanationEN": "to estimate"
    },
    {
      "character": "𘐷",
      "reading": "ŋqa̱r¹",
      "explanationEN": "to measure; to examine"
    },
    {
      "character": "𘐒",
      "reading": "ryer²",
      "explanationEN": "to spread; to uphold"
    },
    {
      "character": "𘂲",
      "reading": "nsu¹",
      "explanationEN": "silver"
    },
    {
      "character": "𘏞",
      "reading": "po̱¹",
      "explanationEN": "to report; to reply"
    },
    {
      "character": "𘎽",
      "reading": "qhai̱w¹",
      "explanationEN": "to demolish; to destroy"
    },
    {
      "character": "𘛬",
      "reading": "rvwi̱r¹",
      "explanationEN": "ridge"
    },
    {
      "character": "𘕣",
      "reading": "vwa̱²",
      "explanationEN": "how; what"
    },
    {
      "character": "𘗠",
      "reading": "γa̱¹",
      "explanationEN": "door; gate; room"
    },
    {
      "character": "𘁺",
      "reading": "lheṃ¹",
      "explanationEN": "magic"
    },
    {
      "character": "𘁷",
      "reading": "rdza̱r¹",
      "explanationEN": "to survey; to measure"
    },
    {
      "character": "𗮔",
      "reading": "swi̱w¹",
      "explanationEN": "to shine; to illuminate"
    },
    {
      "character": "𘎄",
      "reading": "rvwi̱r¹",
      "explanationEN": "to listen; to hear"
    },
    {
      "character": "𘃦",
      "reading": "nllə¹",
      "explanationEN": "to do; to act; can"
    },
    {
      "character": "𘍁",
      "reading": "rtṣaə̱r¹",
      "explanationEN": "crack noise"
    },
    {
      "character": "𘕝",
      "reading": "be̱¹",
      "explanationEN": "smallpox"
    },
    {
      "character": "𘕠",
      "reading": "rtṣao̱r¹",
      "explanationEN": "dirty; filthy"
    },
    {
      "character": "𘞬",
      "reading": "γwi̱ṃ¹",
      "explanationEN": "complete; overall"
    },
    {
      "character": "𘍙",
      "reading": "guh²",
      "explanationEN": "tired; weary"
    },
    {
      "character": "𗮮",
      "reading": "nni²",
      "explanationEN": "nose"
    },
    {
      "character": "𗮯",
      "reading": "śwaw¹",
      "explanationEN": "the upper part of the human body"
    },
    {
      "character": "𗮴",
      "reading": "mma¹",
      "explanationEN": "sore"
    },
    {
      "character": "𗮼",
      "reading": "peh²",
      "explanationEN": "kidney"
    },
    {
      "character": "𗮱",
      "reading": "sa²",
      "explanationEN": "to make love; rape"
    },
    {
      "character": "𗯁",
      "reading": "śiw²",
      "explanationEN": "louse"
    },
    {
      "character": "𗮊",
      "reading": "pho¹",
      "explanationEN": "Mongolian gazelle"
    },
    {
      "character": "𘌰",
      "reading": "phə̱²",
      "explanationEN": "Mongolian gazelle"
    },
    {
      "character": "𘋻",
      "reading": "źu²",
      "explanationEN": "difference"
    },
    {
      "character": "𘛏",
      "reading": "na̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗮆",
      "reading": "llih¹",
      "explanationEN": "arrow"
    },
    {
      "character": "𘃌",
      "reading": "tih²",
      "explanationEN": "to sleep"
    },
    {
      "character": "𘃪",
      "reading": "dźwa¹",
      "explanationEN": "end"
    },
    {
      "character": "𘁩",
      "reading": "rqo̱ṃr²",
      "explanationEN": "slanting; inclined"
    },
    {
      "character": "𘍻",
      "reading": "la¹",
      "explanationEN": "special; peculiar"
    },
    {
      "character": "𘍣",
      "reading": "tśoṃ¹",
      "explanationEN": "to grow; to develop"
    },
    {
      "character": "𗭳",
      "reading": "thu̱²",
      "explanationEN": "lamb"
    },
    {
      "character": "𘞭",
      "reading": "rtwar¹",
      "explanationEN": "only; single; alone"
    },
    {
      "character": "𘗘",
      "reading": "rdar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘗔",
      "reading": "dya²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘍗",
      "reading": "gu²",
      "explanationEN": "toil; hard labor; penal servitude"
    },
    {
      "character": "𘁪",
      "reading": "zəh¹",
      "explanationEN": "husband"
    },
    {
      "character": "𘁾",
      "reading": "ŋwo̱²",
      "explanationEN": "eloquence"
    },
    {
      "character": "𘁉",
      "reading": "ŋwo̱²",
      "explanationEN": "elephant"
    },
    {
      "character": "𘐋",
      "reading": "vwuh¹",
      "explanationEN": "ladle; scoop"
    },
    {
      "character": "𘃂",
      "reading": "vəh²",
      "explanationEN": "tail; end; east"
    },
    {
      "character": "𘑌",
      "reading": "dźe²",
      "explanationEN": "evidence; proof"
    },
    {
      "character": "𘐛",
      "reading": "lləh¹",
      "explanationEN": "to transport.ʙ"
    },
    {
      "character": "𘏶",
      "reading": "twi̱w¹",
      "explanationEN": "to join; to connect"
    },
    {
      "character": "𘐦",
      "reading": "vwuh¹",
      "explanationEN": "bottle; jar"
    },
    {
      "character": "𘑖",
      "reading": "lah¹",
      "explanationEN": "to drill; to bore"
    },
    {
      "character": "𘎞",
      "reading": "na̱h¹",
      "explanationEN": "nasal mucus"
    },
    {
      "character": "𘑔",
      "reading": "tśaw¹",
      "explanationEN": "to chop; to cut; to butcher"
    },
    {
      "character": "𘖒",
      "reading": "məh²",
      "explanationEN": "to investigate; to follow the trail of"
    },
    {
      "character": "𘂽",
      "reading": "ne²",
      "explanationEN": "tail; bottom"
    },
    {
      "character": "𘎹",
      "reading": "ndu̱¹",
      "explanationEN": "part; portion"
    },
    {
      "character": "𘏘",
      "reading": "rur²",
      "explanationEN": "to ferment"
    },
    {
      "character": "𘐤",
      "reading": "tshwe̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗯸",
      "reading": "pa̱ṃ¹",
      "explanationEN": "stunned; astonished"
    },
    {
      "character": "𗯭",
      "reading": "vwe̱¹",
      "explanationEN": "peaceful and happy; auspicious"
    },
    {
      "character": "𘂵",
      "reading": "???",
      "explanationEN": "to lose conscience"
    },
    {
      "character": "𘍩",
      "reading": "haṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘏲",
      "reading": "rtser¹",
      "explanationEN": "to select; to choose"
    },
    {
      "character": "𘞮",
      "reading": "gi¹",
      "explanationEN": "sharp weapon; efficient instrument"
    },
    {
      "character": "𘐣",
      "reading": "phə̱²",
      "explanationEN": "radish"
    },
    {
      "character": "𘖓",
      "reading": "nli²",
      "explanationEN": "to break; to break"
    },
    {
      "character": "𗯢",
      "reading": "gwə¹",
      "explanationEN": "to cut; to break; to snap"
    },
    {
      "character": "𘂰",
      "reading": "nẓao̱²",
      "explanationEN": "twin; a pair of"
    },
    {
      "character": "𘍬",
      "reading": "ha²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘍮",
      "reading": "rhar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘏗",
      "reading": "ntśi²",
      "explanationEN": "finger"
    },
    {
      "character": "𘏷",
      "reading": "ndi¹",
      "explanationEN": "to divide; to distribute"
    },
    {
      "character": "𘖋",
      "reading": "ŋə̱¹",
      "explanationEN": "fatness"
    },
    {
      "character": "𘛹",
      "reading": "ri̱wr¹",
      "explanationEN": "thunderclap"
    },
    {
      "character": "𗯹",
      "reading": "lu²",
      "explanationEN": "to catch.ᴀ; to seize.ᴀ; to arrest.ᴀ"
    },
    {
      "character": "𘋮",
      "reading": "ryar¹",
      "explanationEN": "to stand up"
    },
    {
      "character": "𘃔",
      "reading": "ndə¹",
      "explanationEN": "to check; to inspect"
    },
    {
      "character": "𘂳",
      "reading": "źah¹",
      "explanationEN": "between; middle"
    },
    {
      "character": "𘐈",
      "reading": "kwa¹",
      "explanationEN": "bent; winding; crooked"
    },
    {
      "character": "𘏵",
      "reading": "?a²",
      "explanationEN": "to drive away;to expel"
    },
    {
      "character": "𘐊",
      "reading": "tshu̱¹",
      "explanationEN": "rough"
    },
    {
      "character": "𘞰",
      "reading": "li²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗯷",
      "reading": "kweṃh¹",
      "explanationEN": "emperor; king"
    },
    {
      "character": "𘐌",
      "reading": "la²",
      "explanationEN": "to send; to mail; to post"
    },
    {
      "character": "𘐥",
      "reading": "vwuh¹",
      "explanationEN": "bottle; jar"
    },
    {
      "character": "𘐖",
      "reading": "lu²",
      "explanationEN": "house; room"
    },
    {
      "character": "𘎟",
      "reading": "nẓaa̱²",
      "explanationEN": "at will; causally"
    },
    {
      "character": "𘎝",
      "reading": "sih¹",
      "explanationEN": "nasal sore"
    },
    {
      "character": "𘃃",
      "reading": "rzi̱wr²",
      "explanationEN": "leopard"
    },
    {
      "character": "𘐫",
      "reading": "khi¹",
      "explanationEN": "dagger; knife"
    },
    {
      "character": "𘑍",
      "reading": "lhih²",
      "explanationEN": "to burst; to split"
    },
    {
      "character": "𘐔",
      "reading": "tshwi̱w¹",
      "explanationEN": "to salute; to bow"
    },
    {
      "character": "𘑏",
      "reading": "tah¹",
      "explanationEN": "to rely on; to depend on"
    },
    {
      "character": "𘕥",
      "reading": "lah¹",
      "explanationEN": "evidence; proof; to prove"
    },
    {
      "character": "𘛌",
      "reading": "ri̱wr¹",
      "explanationEN": "bitter lettuce"
    },
    {
      "character": "𘗡",
      "reading": "rkur²",
      "explanationEN": "house; room"
    },
    {
      "character": "𘗟",
      "reading": "nne¹",
      "explanationEN": "to enter; to open"
    },
    {
      "character": "𘕩",
      "reading": "nsi¹",
      "explanationEN": "to cry bitterly; to wail; to condole"
    },
    {
      "character": "𘟟",
      "reading": "khe¹",
      "explanationEN": "to cut; to chop"
    },
    {
      "character": "𘟩",
      "reading": "teṃh²",
      "explanationEN": "seal; stamp; brand"
    },
    {
      "character": "𗮧",
      "reading": "lhai̱²",
      "explanationEN": "scabies"
    },
    {
      "character": "𗮭",
      "reading": "lih²",
      "explanationEN": "chest"
    },
    {
      "character": "𘁙",
      "reading": "dźwa¹",
      "explanationEN": "peak; top; peak"
    },
    {
      "character": "𘁳",
      "reading": "ndi̱w²",
      "explanationEN": "frivolous"
    },
    {
      "character": "𘍢",
      "reading": "ye¹",
      "explanationEN": "delighted"
    },
    {
      "character": "𘕟",
      "reading": "rzi̱wr²",
      "explanationEN": "brown rice"
    },
    {
      "character": "𘍎",
      "reading": "γo̱²",
      "explanationEN": "hare; rabbit"
    },
    {
      "character": "𘟨",
      "reading": "rnoṃr²",
      "explanationEN": "to roll up; to contract; to crease"
    },
    {
      "character": "𘏴",
      "reading": "rγo̱r²",
      "explanationEN": "to link; to join; to connect"
    },
    {
      "character": "𘛗",
      "reading": "rźər¹",
      "explanationEN": "ostentatious; liberal with money"
    },
    {
      "character": "𘏳",
      "reading": "śa¹",
      "explanationEN": "a bit"
    },
    {
      "character": "𘐉",
      "reading": "vah²",
      "explanationEN": "to send; to release; to remit"
    },
    {
      "character": "𘃕",
      "reading": "nda¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗯱",
      "reading": "γwəh¹",
      "explanationEN": "to ripple; to move"
    },
    {
      "character": "𘟧",
      "reading": "rnoṃr²",
      "explanationEN": "to roll up; to contract; to crease"
    },
    {
      "character": "𘝳",
      "reading": "mə²",
      "explanationEN": "silent; closed"
    },
    {
      "character": "𘏺",
      "reading": "rta̱r¹",
      "explanationEN": "to trample; to step up; to tread"
    },
    {
      "character": "𘑁",
      "reading": "ror²",
      "explanationEN": "to prohibit; to forbid; to cover"
    },
    {
      "character": "𘁄",
      "reading": "mə̱h¹",
      "explanationEN": "calf"
    },
    {
      "character": "𘃐",
      "reading": "tshe¹",
      "explanationEN": "spade"
    },
    {
      "character": "𘏖",
      "reading": "teṃh²",
      "explanationEN": "to choke; to block"
    },
    {
      "character": "𘝬",
      "reading": "le̱²",
      "explanationEN": "to burst; to split"
    },
    {
      "character": "𘎺",
      "reading": "ndi̱²",
      "explanationEN": "to plough; to till"
    },
    {
      "character": "𘛋",
      "reading": "qha̱²",
      "explanationEN": "bitter lettuce"
    },
    {
      "character": "𗕈",
      "reading": "nu̱¹",
      "explanationEN": "mud; mire; sludge"
    },
    {
      "character": "𗭸",
      "reading": "pae̱²",
      "explanationEN": "to combine; to unite"
    },
    {
      "character": "𘌂",
      "reading": "yu¹",
      "explanationEN": "meritorious service"
    },
    {
      "character": "𘋝",
      "reading": "ri̱wr²",
      "explanationEN": "ladder; stairs; steps"
    },
    {
      "character": "𗕇",
      "reading": "lu̱²",
      "explanationEN": "juice"
    },
    {
      "character": "𗕆",
      "reading": "lu̱¹",
      "explanationEN": "moist; smooth; juice"
    },
    {
      "character": "𘌢",
      "reading": "zu̱¹",
      "explanationEN": "belt; band"
    },
    {
      "character": "𗕄",
      "reading": "rir²",
      "explanationEN": "juice; soup"
    },
    {
      "character": "𗕅",
      "reading": "mae̱¹",
      "explanationEN": "cheese; skin on boiled milk"
    },
    {
      "character": "𗕃",
      "reading": "tso̱ṃ¹",
      "explanationEN": "soup; broth"
    },
    {
      "character": "𘕰",
      "reading": "phu̱²",
      "explanationEN": "tree"
    },
    {
      "character": "𘂆",
      "reading": "tsə¹",
      "explanationEN": "also; too; small; 2DU: 2nd dual indexation"
    },
    {
      "character": "𗕉",
      "reading": "ẓao̱ṃ²",
      "explanationEN": "otter"
    },
    {
      "character": "𘝚",
      "reading": "rkwər¹",
      "explanationEN": "to steal; to pilfer"
    },
    {
      "character": "𘌃",
      "reading": "ri̱r²",
      "explanationEN": "rice"
    },
    {
      "character": "𘌛",
      "reading": "lwi¹",
      "explanationEN": "seed"
    },
    {
      "character": "𘕑",
      "reading": "γu̱h¹",
      "explanationEN": "to cover; shelter; to rely on"
    },
    {
      "character": "𘌈",
      "reading": "yu¹",
      "explanationEN": "level; even; smooth"
    },
    {
      "character": "𘌕",
      "reading": "dźuo²",
      "explanationEN": "wheat flour; powder"
    },
    {
      "character": "𘌗",
      "reading": "rkiwr²",
      "explanationEN": "mould stuffing in shoes or hats"
    },
    {
      "character": "𘌖",
      "reading": "rźwər¹",
      "explanationEN": "husked sorghum; maize"
    },
    {
      "character": "𘋟",
      "reading": "ri̱wr²",
      "explanationEN": "bank; shore; limit"
    },
    {
      "character": "𘌡",
      "reading": "lwi¹",
      "explanationEN": "seed"
    },
    {
      "character": "𘌑",
      "reading": "so̱²",
      "explanationEN": "maize"
    },
    {
      "character": "𘌞",
      "reading": "tsə̱h¹",
      "explanationEN": "autumn"
    },
    {
      "character": "𘌙",
      "reading": "dwu̱²",
      "explanationEN": "beans"
    },
    {
      "character": "𘛓",
      "reading": "mbe¹",
      "explanationEN": "to disobey; to violate"
    },
    {
      "character": "𘂅",
      "reading": "yiw¹",
      "explanationEN": "stove; oven; furnace"
    },
    {
      "character": "𘆜",
      "reading": "ntshə¹",
      "explanationEN": "secondary rainbow"
    },
    {
      "character": "𘒭",
      "reading": "nzi̱w²",
      "explanationEN": "burnt"
    },
    {
      "character": "𗯗",
      "reading": "le̱²",
      "explanationEN": "to change; to vary"
    },
    {
      "character": "𗈭",
      "reading": "qhwa̱¹",
      "explanationEN": "to vary"
    },
    {
      "character": "𗗤",
      "reading": "lwə̱²",
      "explanationEN": "trade"
    },
    {
      "character": "𗈯",
      "reading": "rγai̱r¹",
      "explanationEN": "to die"
    },
    {
      "character": "𗈵",
      "reading": "dźəh²",
      "explanationEN": "to combine; to unite; to integrate"
    },
    {
      "character": "𗗨",
      "reading": "źih²",
      "explanationEN": "man and his wife’s brother"
    },
    {
      "character": "𗗪",
      "reading": "ŋki¹",
      "explanationEN": "commerce; trade; business"
    },
    {
      "character": "𗯖",
      "reading": "qhwu̱h²",
      "explanationEN": "to cut; to slice"
    },
    {
      "character": "𗯝",
      "reading": "lhe̱²",
      "explanationEN": "to translate; to vary"
    },
    {
      "character": "𘕱",
      "reading": "śu²",
      "explanationEN": "a place name"
    },
    {
      "character": "𘛠",
      "reading": "???",
      "explanationEN": "millet"
    },
    {
      "character": "𗗣",
      "reading": "lwə̱²",
      "explanationEN": "trade"
    },
    {
      "character": "𗈮",
      "reading": "rγai̱r¹",
      "explanationEN": "to die"
    },
    {
      "character": "𗗩",
      "reading": "pha¹",
      "explanationEN": "to sell; to traffic; to peddle"
    },
    {
      "character": "𗯑",
      "reading": "tsho¹",
      "explanationEN": "to tie and strap something tightly"
    },
    {
      "character": "𘂋",
      "reading": "zi̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𘂣",
      "reading": "lih¹",
      "explanationEN": "to massage"
    },
    {
      "character": "𘕾",
      "reading": "rner²",
      "explanationEN": "all; various"
    },
    {
      "character": "𘂩",
      "reading": "śi²",
      "explanationEN": "shallow; superficial"
    },
    {
      "character": "𘂡",
      "reading": "tswo¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗯓",
      "reading": "dzo¹",
      "explanationEN": "to rein in; to tie and strap something tightly"
    },
    {
      "character": "𘂚",
      "reading": "lo̱ṃh²",
      "explanationEN": "two; twin; both; double"
    },
    {
      "character": "𘕿",
      "reading": "γa̱²",
      "explanationEN": "LOC"
    },
    {
      "character": "𘂊",
      "reading": "???",
      "explanationEN": "in a low voice"
    },
    {
      "character": "𘂍",
      "reading": "γaə̱¹",
      "explanationEN": "few; scant; rare"
    },
    {
      "character": "𗳑",
      "reading": "bi̱h¹",
      "explanationEN": "hairpin"
    },
    {
      "character": "𘂌",
      "reading": "ŋwə̱²",
      "explanationEN": "throat; larynx"
    },
    {
      "character": "𗳖",
      "reading": "ŋwu̱²",
      "explanationEN": "vulture"
    },
    {
      "character": "𗶪",
      "reading": "tao̱h¹",
      "explanationEN": "roller"
    },
    {
      "character": "𘌟",
      "reading": "pae̱²",
      "explanationEN": "to combine; to unite"
    },
    {
      "character": "𘌅",
      "reading": "ze¹",
      "explanationEN": "extensive; wide; vast"
    },
    {
      "character": "𘕕",
      "reading": "so̱ṃh¹",
      "explanationEN": "three"
    },
    {
      "character": "𘌉",
      "reading": "qwo̱¹",
      "explanationEN": "millet"
    },
    {
      "character": "𘌘",
      "reading": "γo̱ṃ¹",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𘌐",
      "reading": "qhai̱²",
      "explanationEN": "rice"
    },
    {
      "character": "𘒮",
      "reading": "nzi̱w²",
      "explanationEN": "to supervise"
    },
    {
      "character": "𘆖",
      "reading": "ntshə¹",
      "explanationEN": "rank; line"
    },
    {
      "character": "𘒫",
      "reading": "nzi̱w²",
      "explanationEN": "to send; to dispatch"
    },
    {
      "character": "𘙫",
      "reading": "śoh²",
      "explanationEN": "to obstruct; to block; to cover"
    },
    {
      "character": "𘕳",
      "reading": "qu̱h²",
      "explanationEN": "brothers"
    },
    {
      "character": "𗯔",
      "reading": "le̱²",
      "explanationEN": "vexed; flustered"
    },
    {
      "character": "𗗥",
      "reading": "źih²",
      "explanationEN": "to sell and buy"
    },
    {
      "character": "𘕲",
      "reading": "qu̱h²",
      "explanationEN": "to tie up; to bind; to bundle up"
    },
    {
      "character": "𘂓",
      "reading": "daṃ¹",
      "explanationEN": "shallow; superficial"
    },
    {
      "character": "𘂏",
      "reading": "bae̱h²",
      "explanationEN": "a unit of measurement"
    },
    {
      "character": "𘖀",
      "reading": "si²",
      "explanationEN": "year"
    },
    {
      "character": "𗳒",
      "reading": "ŋwu̱²",
      "explanationEN": "INS"
    },
    {
      "character": "𘂎",
      "reading": "la̱¹",
      "explanationEN": "small; little"
    },
    {
      "character": "𘂜",
      "reading": "rza̱r¹",
      "explanationEN": "Han"
    },
    {
      "character": "𘂑",
      "reading": "tsha²",
      "explanationEN": "to bully and humiliate"
    },
    {
      "character": "𘂒",
      "reading": "ẓai̱²",
      "explanationEN": "a kind of grass"
    },
    {
      "character": "𘂠",
      "reading": "llo̱ṃ¹",
      "explanationEN": "to exchange"
    },
    {
      "character": "𘝛",
      "reading": "tṣhuo¹",
      "explanationEN": "to steal; to rob"
    },
    {
      "character": "𘕚",
      "reading": "nne̱²",
      "explanationEN": "to post; to bring to somebody"
    },
    {
      "character": "𘌊",
      "reading": "giw¹",
      "explanationEN": "broad; wide; extensive"
    },
    {
      "character": "𘕐",
      "reading": "lə̱²",
      "explanationEN": "to steal; to rob; to pilfer"
    },
    {
      "character": "𘕒",
      "reading": "qau̱¹",
      "explanationEN": "loose; wide"
    },
    {
      "character": "𘌒",
      "reading": "qo̱ṃ²",
      "explanationEN": "upright; the right way (or course)"
    },
    {
      "character": "𘒯",
      "reading": "nzi̱w²",
      "explanationEN": "a kind of farm implements"
    },
    {
      "character": "𗯜",
      "reading": "lhe̱²",
      "explanationEN": "to translate; to vary"
    },
    {
      "character": "𘕴",
      "reading": "dzeṃ²",
      "explanationEN": "corner"
    },
    {
      "character": "𗯘",
      "reading": "lo̱²",
      "explanationEN": "to tread; to stamp"
    },
    {
      "character": "𗈸",
      "reading": "tśhoṃ¹",
      "explanationEN": "to combine; to unite"
    },
    {
      "character": "𘕵",
      "reading": "ẓai̱w¹",
      "explanationEN": "branch; twig"
    },
    {
      "character": "𘕶",
      "reading": "mphu¹",
      "explanationEN": "to cover; to shelter"
    },
    {
      "character": "𘂐",
      "reading": "bae̱h²",
      "explanationEN": "a unit of measurement"
    },
    {
      "character": "𘂉",
      "reading": "di²",
      "explanationEN": "broken; gragmentary"
    },
    {
      "character": "𘂔",
      "reading": "lo̱²",
      "explanationEN": "hole; concave"
    },
    {
      "character": "𘂝",
      "reading": "dze̱ṃ¹",
      "explanationEN": "to reduce; to decrease"
    },
    {
      "character": "𘌍",
      "reading": "ŋa̱¹",
      "explanationEN": "yeast to make wine"
    },
    {
      "character": "𘝜",
      "reading": "rkur²",
      "explanationEN": "to steal; to pilfer; to rob"
    },
    {
      "character": "𘌎",
      "reading": "śi²",
      "explanationEN": "corn; grain"
    },
    {
      "character": "𘋢",
      "reading": "dẓaa̱ṃ²",
      "explanationEN": "Bodhisattva"
    },
    {
      "character": "𘋤",
      "reading": "dẓaa̱ṃ²",
      "explanationEN": "all living creatures; blood"
    },
    {
      "character": "𘌠",
      "reading": "pheṃ¹",
      "explanationEN": "to combine; to unite"
    },
    {
      "character": "𘆘",
      "reading": "tshə¹",
      "explanationEN": "evening; night"
    },
    {
      "character": "𗗧",
      "reading": "qaa̱¹",
      "explanationEN": "price"
    },
    {
      "character": "𗈲",
      "reading": "qhwa̱¹",
      "explanationEN": "far; distant; remote"
    },
    {
      "character": "𗯛",
      "reading": "kwə¹",
      "explanationEN": "to cut; to break"
    },
    {
      "character": "𗈱",
      "reading": "rar¹",
      "explanationEN": "an auxiliary word"
    },
    {
      "character": "𘂈",
      "reading": "lo̱ṃh²",
      "explanationEN": "two; second"
    },
    {
      "character": "𘂇",
      "reading": "pae̱ṃh²",
      "explanationEN": "hair"
    },
    {
      "character": "𘂦",
      "reading": "ha̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘌏",
      "reading": "rkhur¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗈶",
      "reading": "sə¹",
      "explanationEN": "to die"
    },
    {
      "character": "𘂛",
      "reading": "tshi̱²",
      "explanationEN": "lowly; humble; low-down"
    },
    {
      "character": "𘕙",
      "reading": "tsə̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘋞",
      "reading": "rza̱r²",
      "explanationEN": "ashamed"
    },
    {
      "character": "𘌄",
      "reading": "γo̱ṃ¹",
      "explanationEN": "buckwheat"
    },
    {
      "character": "𘕔",
      "reading": "lə̱¹",
      "explanationEN": "then; after"
    },
    {
      "character": "𘌆",
      "reading": "qa̱²",
      "explanationEN": "pod"
    },
    {
      "character": "𘕘",
      "reading": "tsə̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘌋",
      "reading": "lhih¹",
      "explanationEN": "wheat"
    },
    {
      "character": "𘌓",
      "reading": "qho̱ṃ²",
      "explanationEN": "chaff; bran; husk"
    },
    {
      "character": "𘌔",
      "reading": "ri̱r²",
      "explanationEN": "white"
    },
    {
      "character": "𘌚",
      "reading": "llə̱¹",
      "explanationEN": "wide or narrow"
    },
    {
      "character": "𘕗",
      "reading": "qau̱²",
      "explanationEN": "woolen blanket; knitting wool"
    },
    {
      "character": "𘕓",
      "reading": "nno̱²",
      "explanationEN": "to send; to bring to somebody"
    },
    {
      "character": "𘋠",
      "reading": "mə̱²",
      "explanationEN": "kind; sort; type"
    },
    {
      "character": "𗲾",
      "reading": "swi̱ṃ¹",
      "explanationEN": "macaque"
    },
    {
      "character": "𘆙",
      "reading": "ge²",
      "explanationEN": "dark; gloomy"
    },
    {
      "character": "𘂄",
      "reading": "yuo²",
      "explanationEN": "stove; oven"
    },
    {
      "character": "𘒴",
      "reading": "ta̱¹",
      "explanationEN": "to supervise"
    },
    {
      "character": "𘆗",
      "reading": "dẓaə̱²",
      "explanationEN": "to rotate; to alternate; to make a samsara"
    },
    {
      "character": "𘆚",
      "reading": "ge²",
      "explanationEN": "scriptures; warp"
    },
    {
      "character": "𘒳",
      "reading": "tao̱h¹",
      "explanationEN": "to sew; to stitch"
    },
    {
      "character": "𘒵",
      "reading": "tao̱h²",
      "explanationEN": "to press; to oppress"
    },
    {
      "character": "𘌤",
      "reading": "dəh¹",
      "explanationEN": "strip; slip"
    },
    {
      "character": "𘌣",
      "reading": "zu̱¹",
      "explanationEN": "to run quickly; to rush"
    },
    {
      "character": "𘌦",
      "reading": "rzu̱r¹",
      "explanationEN": "long-winded"
    },
    {
      "character": "𗟚",
      "reading": "nllo̱r¹",
      "explanationEN": "flame"
    },
    {
      "character": "𗰑",
      "reading": "rtər¹",
      "explanationEN": "heavy"
    },
    {
      "character": "𗯕",
      "reading": "le̱²",
      "explanationEN": "to cut off; to sever"
    },
    {
      "character": "𘝡",
      "reading": "nlo̱r¹",
      "explanationEN": "flame"
    },
    {
      "character": "𗈫",
      "reading": "lweh²",
      "explanationEN": "great-great-grandson"
    },
    {
      "character": "𗗬",
      "reading": "lwu¹",
      "explanationEN": "among; between"
    },
    {
      "character": "𗗦",
      "reading": "phə̱¹",
      "explanationEN": "price; value"
    },
    {
      "character": "𗈬",
      "reading": "a?",
      "explanationEN": "boots wearing in mud"
    },
    {
      "character": "𗈺",
      "reading": "nnaa̱²",
      "explanationEN": "ore; mine"
    },
    {
      "character": "𗗮",
      "reading": "lwu¹",
      "explanationEN": "to traffic; to peddle"
    },
    {
      "character": "𘕷",
      "reading": "rpoṃr²",
      "explanationEN": "luxuriant; exuberant"
    },
    {
      "character": "𗈩",
      "reading": "γo̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗈷",
      "reading": "rŋi̱wr²",
      "explanationEN": "exercise evil influence; ghost"
    },
    {
      "character": "𗗫",
      "reading": "rtsi̱r¹",
      "explanationEN": "to buy and sell to traffic"
    },
    {
      "character": "𗈳",
      "reading": "γo̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘂗",
      "reading": "rpə̱r¹",
      "explanationEN": "lamb"
    },
    {
      "character": "𘂢",
      "reading": "tsha²",
      "explanationEN": "ghost; spirit"
    },
    {
      "character": "𘂨",
      "reading": "mbe̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗯐",
      "reading": "rγo̱r²",
      "explanationEN": "to contend; to vie; to strive"
    },
    {
      "character": "𘂙",
      "reading": "pa̱h¹",
      "explanationEN": "even; well-distributed"
    },
    {
      "character": "𗯒",
      "reading": "tsha̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘂘",
      "reading": "śoṃ¹",
      "explanationEN": "to jump; to leap"
    },
    {
      "character": "𘂕",
      "reading": "ta̱¹",
      "explanationEN": "swallow"
    },
    {
      "character": "𗳕",
      "reading": "pe¹",
      "explanationEN": "crooked; askew"
    },
    {
      "character": "𘂥",
      "reading": "ẓao̱ṃ²",
      "explanationEN": "grey; ashy color"
    },
    {
      "character": "𘖁",
      "reading": "tsha̱¹",
      "explanationEN": "hollow bag"
    },
    {
      "character": "𘌜",
      "reading": "pai̱¹",
      "explanationEN": "wide; broad"
    },
    {
      "character": "𘋡",
      "reading": "phi¹",
      "explanationEN": "chopsticks"
    },
    {
      "character": "𘋣",
      "reading": "mə̱²",
      "explanationEN": "a kind of vegetable"
    },
    {
      "character": "𘌌",
      "reading": "śeṃ²",
      "explanationEN": "house; shed; storehouse"
    },
    {
      "character": "𘕖",
      "reading": "veh²",
      "explanationEN": "to send; to dispatch"
    },
    {
      "character": "𘆛",
      "reading": "nah¹",
      "explanationEN": "parallel; weft"
    },
    {
      "character": "𘒬",
      "reading": "nne¹",
      "explanationEN": "to bear; to endure"
    },
    {
      "character": "𘒰",
      "reading": "nzi̱w²",
      "explanationEN": "cape; cloak"
    },
    {
      "character": "𘒲",
      "reading": "rtə̱r¹",
      "explanationEN": "to tread; to stamp; to press"
    },
    {
      "character": "𘌥",
      "reading": "be̱¹",
      "explanationEN": "to tie up; to arrest"
    },
    {
      "character": "𗯚",
      "reading": "ŋġu̱²",
      "explanationEN": "to do forced labor"
    },
    {
      "character": "𗈪",
      "reading": "a?",
      "explanationEN": "one; PFV: UP; INTER: interrogative"
    },
    {
      "character": "𗈰",
      "reading": "rnar²",
      "explanationEN": "to lose; to drop"
    },
    {
      "character": "𘝢",
      "reading": "tśhəh¹",
      "explanationEN": "to burn"
    },
    {
      "character": "𗗭",
      "reading": "tśuo²",
      "explanationEN": "to attend; to wait upon"
    },
    {
      "character": "𗈹",
      "reading": "nsi¹",
      "explanationEN": "to inspect; to spy"
    },
    {
      "character": "𘂖",
      "reading": "tsə¹",
      "explanationEN": "leprosy; scabies"
    },
    {
      "character": "𘂞",
      "reading": "le²",
      "explanationEN": "lamb"
    },
    {
      "character": "𗳔",
      "reading": "dźwa¹",
      "explanationEN": "hairpin"
    },
    {
      "character": "𘂟",
      "reading": "di̱w¹",
      "explanationEN": "to carve; to engrave; to dig"
    },
    {
      "character": "𘌇",
      "reading": "nao̱h²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘟱",
      "reading": "nao̱h²",
      "explanationEN": "mortar"
    },
    {
      "character": "𘒱",
      "reading": "ta̱¹",
      "explanationEN": "presently; in a moment"
    },
    {
      "character": "𗈴",
      "reading": "ror²",
      "explanationEN": "centre; among; middle"
    },
    {
      "character": "𘂤",
      "reading": "qha̱¹",
      "explanationEN": "INTESS: interessive case"
    },
    {
      "character": "𗳓",
      "reading": "rśar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄌",
      "reading": "tśwə¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄘",
      "reading": "tśwe̱ṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄏",
      "reading": "tśweṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄙",
      "reading": "tśwaw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗴯",
      "reading": "gwaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄂",
      "reading": "tśwe¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄍",
      "reading": "tśwow¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄃",
      "reading": "tśwoṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄆",
      "reading": "rtśar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄅",
      "reading": "tśwo²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄗",
      "reading": "tśe¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗄚",
      "reading": "tṣwaə̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘅱",
      "reading": "twaw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗖹",
      "reading": "ŋka¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗉆",
      "reading": "mpai̱¹",
      "explanationEN": "to bow; to salute"
    },
    {
      "character": "𘅛",
      "reading": "kuh¹",
      "explanationEN": "collapse"
    },
    {
      "character": "𗳙",
      "reading": "qa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶑",
      "reading": "tṣwao̱²",
      "explanationEN": "a surname"
    },
    {
      "character": "𗘇",
      "reading": "tśu²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗹆",
      "reading": "ŋki¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘅼",
      "reading": "twuo¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘅔",
      "reading": "tświ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘅠",
      "reading": "ntwu̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗇶",
      "reading": "ntśe¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘄶",
      "reading": "bweh¹",
      "explanationEN": "many"
    },
    {
      "character": "𗰕",
      "reading": "???",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗶖",
      "reading": "tśah¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘅶",
      "reading": "rti̱wr¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗗋",
      "reading": "nte̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗌂",
      "reading": "tświ̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗌑",
      "reading": "tśwaṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗋶",
      "reading": "tsweṃ¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗪶",
      "reading": "rpi̱r²",
      "explanationEN": "immediately; at once; promptly"
    },
    {
      "character": "𘜢",
      "reading": "rkwar¹",
      "explanationEN": "to spread; very fast; rapid"
    },
    {
      "character": "𘜥",
      "reading": "rkwar¹",
      "explanationEN": "to run; to speed"
    },
    {
      "character": "𘚼",
      "reading": "lwəh¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗊤",
      "reading": "tśa¹",
      "explanationEN": "to run away; to flee"
    },
    {
      "character": "𗾼",
      "reading": "bo̱ṃh²",
      "explanationEN": "vegetable; greens; firewood"
    },
    {
      "character": "𗻥",
      "reading": "???",
      "explanationEN": "rapid speed"
    },
    {
      "character": "𘜣",
      "reading": "rdzər¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗾁",
      "reading": "ŋqe̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗊳",
      "reading": "tśweṃh¹",
      "explanationEN": "to instruct"
    },
    {
      "character": "𗼧",
      "reading": "qai̱w¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗌫",
      "reading": "tṣau̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗌐",
      "reading": "tswa¹",
      "explanationEN": "a kind of tree"
    },
    {
      "character": "𗻹",
      "reading": "mbu̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗫰",
      "reading": "rpaa̱r¹",
      "explanationEN": "to descend; to land"
    },
    {
      "character": "𘜠",
      "reading": "rśa̱r²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗌟",
      "reading": "tśa¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗨑",
      "reading": "ntṣaa̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗨽",
      "reading": "rpar¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗻃",
      "reading": "ŋkwa¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗎕",
      "reading": "ŋkau̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗟕",
      "reading": "tśah¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗝴",
      "reading": "rtu̱r¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗞗",
      "reading": "ẓai̱w¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘞕",
      "reading": "vwa̱ṃ²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗷗",
      "reading": "two̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗷓",
      "reading": "twe̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𗷊",
      "reading": "ta̱¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𗒏",
      "reading": "ġao̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘍜",
      "reading": "mpə̱¹",
      "explanationEN": "to call; to shout; to yell"
    },
    {
      "character": "𘗑",
      "reading": "vw?¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘍕",
      "reading": "tśuh¹",
      "explanationEN": "to pull out; to move or adjust; to pinch"
    },
    {
      "character": "𘃘",
      "reading": "ke¹",
      "explanationEN": "to gallop; to speed"
    },
    {
      "character": "𘍅",
      "reading": "rgwar¹",
      "explanationEN": "calf"
    },
    {
      "character": "𘁌",
      "reading": "lwəh¹",
      "explanationEN": "surprised; astonished"
    },
    {
      "character": "𘍱",
      "reading": "tṣhaa̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘐜",
      "reading": "rpi̱r²",
      "explanationEN": "one’s name"
    },
    {
      "character": "𘝴",
      "reading": "gaw¹",
      "explanationEN": "a surname"
    },
    {
      "character": "𘐮",
      "reading": "rġa̱r¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘍛",
      "reading": "tśuh¹",
      "explanationEN": "to speak bluntly"
    },
    {
      "character": "𘕍",
      "reading": "tśhiw¹",
      "explanationEN": "honest; upright; fairminded"
    },
    {
      "character": "𘛑",
      "reading": "tśhiw¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘑎",
      "reading": "te¹",
      "explanationEN": "to do forced labor"
    },
    {
      "character": "𗯣",
      "reading": "ŋġu̱²",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘑋",
      "reading": "rti̱wr¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘌝",
      "reading": "pu²",
      "explanationEN": "to cut; to break; to snap"
    },
    {
      "character": "𗯙",
      "reading": "gwə¹",
      "explanationEN": "centre; among; middle"
    },
    {
      "character": "𘂧",
      "reading": "qha̱¹",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘟭",
      "reading": "??",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘟮",
      "reading": "??",
      "explanationEN": "a transliteration"
    },
    {
      "character": "𘟯",
      "reading": "??",
      "explanationEN": ""
    }
  ];

// 初始化字典对象
const dictionary = DICTIONARY_DATA.reduce((acc, entry) => {
    acc[entry.character] = entry;
    return acc;
}, {});