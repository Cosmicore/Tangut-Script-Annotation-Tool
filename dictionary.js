// 定义字典数据
const DICTIONARY_DATA = [
  {
    "character": "𘞗",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "race; offspring; seed",
    "explanationCN": "种"
  },
  {
    "character": "𘟇",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "filter",
    "explanationCN": "滤"
  },
  {
    "character": "𘞼",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "mother",
    "explanationCN": "母"
  },
  {
    "character": "𗴷",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "maternal aunt",
    "explanationCN": "姨"
  },
  {
    "character": "𗀇",
    "GX": "goṃ¹",
    "GHC": "gjow¹",
    "explanationEN": "be able to; can; to defeat",
    "explanationCN": "强"
  },
  {
    "character": "𗴼",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "a transliteration",
    "explanationCN": "丘咎僑寇求龜毬臼裘舅旧乔邱轿咎蔻桥"
  },
  {
    "character": "𗵤",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "nature; temperament",
    "explanationCN": "性"
  },
  {
    "character": "𗀀",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "poison",
    "explanationCN": "毒"
  },
  {
    "character": "𗄈",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "to rise.ᴀ",
    "explanationCN": "起.ᴀ"
  },
  {
    "character": "𗄊",
    "GX": "zi²",
    "GHC": "zji²",
    "explanationEN": "all; completely",
    "explanationCN": "全都"
  },
  {
    "character": "𗴽",
    "GX": "lo?",
    "GHC": "lo?",
    "explanationEN": "rich",
    "explanationCN": "富"
  },
  {
    "character": "𗵏",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "brothers",
    "explanationCN": "兄弟"
  },
  {
    "character": "𗀅",
    "GX": "rza̱r²",
    "GHC": "zar²",
    "explanationEN": "to undergo; to suffer",
    "explanationCN": "检查 经受"
  },
  {
    "character": "𗀫",
    "GX": "mpho̱¹",
    "GHC": "pho̱¹",
    "explanationEN": "to cover",
    "explanationCN": "遮掩"
  },
  {
    "character": "𗍥",
    "GX": "γəh¹",
    "GHC": "ɣjɨ̣¹",
    "explanationEN": "ore",
    "explanationCN": "石"
  },
  {
    "character": "𗅈",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "to tie; to bind",
    "explanationCN": "缠"
  },
  {
    "character": "𗀏",
    "GX": "rpa̱r²",
    "GHC": "²",
    "explanationEN": "a horse with white trotters",
    "explanationCN": "蹄"
  },
  {
    "character": "𗀨",
    "GX": "thwu²",
    "GHC": "thjwu²",
    "explanationEN": "to meet; to be infected with a disease",
    "explanationCN": "遇"
  },
  {
    "character": "𗄛",
    "GX": "rbi̱r²",
    "GHC": "ber²",
    "explanationEN": "to meet; to encounter",
    "explanationCN": "遇"
  },
  {
    "character": "𗵘",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "road; way",
    "explanationCN": "道"
  },
  {
    "character": "𗵚",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "elephant",
    "explanationCN": "犎 牦牛 牛"
  },
  {
    "character": "𗵕",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "resources",
    "explanationCN": "本源"
  },
  {
    "character": "𗵲",
    "GX": "ror¹",
    "GHC": "rjor¹",
    "explanationEN": "to get; to obtain",
    "explanationCN": "得.ʙ"
  },
  {
    "character": "𘈋",
    "GX": "phe²",
    "GHC": "phjij²",
    "explanationEN": "to sell; to peddle",
    "explanationCN": "卖₂"
  },
  {
    "character": "𗀍",
    "GX": "ŋqhai̱¹",
    "GHC": "khie̱¹",
    "explanationEN": "mixed and disorderly",
    "explanationCN": "乱"
  },
  {
    "character": "𗀄",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "collar; neckband; territory",
    "explanationCN": "端"
  },
  {
    "character": "𗄑",
    "GX": "rŋo̱ṃr²",
    "GHC": "ŋowr²",
    "explanationEN": "all; each and every",
    "explanationCN": "全部"
  },
  {
    "character": "𗍦",
    "GX": "nlhu¹",
    "GHC": "lhju̱¹",
    "explanationEN": "swelling",
    "explanationCN": "肿"
  },
  {
    "character": "𗵈",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "market",
    "explanationCN": "街"
  },
  {
    "character": "𗀁",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "to suck",
    "explanationCN": "吮"
  },
  {
    "character": "𘞝",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "to instigate; to slander",
    "explanationCN": "奸佞"
  },
  {
    "character": "𗃿",
    "GX": "źi²",
    "GHC": "źji²",
    "explanationEN": "a place name",
    "explanationCN": "二尔"
  },
  {
    "character": "𗵇",
    "GX": "tshih¹",
    "GHC": "tshjị¹",
    "explanationEN": "road; way",
    "explanationCN": "路"
  },
  {
    "character": "𗵓",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "wide; broad",
    "explanationCN": "宽阔"
  },
  {
    "character": "𗀕",
    "GX": "rza̱r²",
    "GHC": "zar²",
    "explanationEN": "bride-price",
    "explanationCN": "彩礼"
  },
  {
    "character": "𘓬",
    "GX": "ŋġu̱²",
    "GHC": "gu̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "五乌蜈伍武"
  },
  {
    "character": "𗴰",
    "GX": "gwaṃ¹",
    "GHC": "gjwã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "刮; 丘"
  },
  {
    "character": "𗀃",
    "GX": "ẓao̱²",
    "GHC": "śio²",
    "explanationEN": "to mate; to copulate",
    "explanationCN": "配"
  },
  {
    "character": "𘟗",
    "GX": "rqo̱ṃr²",
    "GHC": "kowr²",
    "explanationEN": "tooth",
    "explanationCN": "牙"
  },
  {
    "character": "𗴾",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "storage",
    "explanationCN": "贮藏"
  },
  {
    "character": "𗵋",
    "GX": "ṇo̱ṃ²",
    "GHC": "dźiow²",
    "explanationEN": "to plan; to scheme",
    "explanationCN": "计谋"
  },
  {
    "character": "𗀛",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "to open; to shine upon",
    "explanationCN": "敞开"
  },
  {
    "character": "𗀜",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "then; after that; afterwards",
    "explanationCN": "然后"
  },
  {
    "character": "𗀤",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "few",
    "explanationCN": "少"
  },
  {
    "character": "𘟋",
    "GX": "rza̱r¹",
    "GHC": "zar¹",
    "explanationEN": "pungent; hot",
    "explanationCN": "辣"
  },
  {
    "character": "𘟀",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "to see.ᴀ",
    "explanationCN": "看.ᴀ"
  },
  {
    "character": "𗵅",
    "GX": "lwəh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "to crawl; to creep",
    "explanationCN": "匍匐"
  },
  {
    "character": "𗀭",
    "GX": "thwu²",
    "GHC": "thjwu²",
    "explanationEN": "at last; in the end",
    "explanationCN": "完毕"
  },
  {
    "character": "𗄉",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "a transliteration",
    "explanationCN": "𠼪"
  },
  {
    "character": "𗀟",
    "GX": "nni¹",
    "GHC": "nji̱¹",
    "explanationEN": "to marry",
    "explanationCN": "娶"
  },
  {
    "character": "𗵔",
    "GX": "ntha̱r¹",
    "GHC": "tha̱r¹",
    "explanationEN": "obvious",
    "explanationCN": "明显"
  },
  {
    "character": "𗄋",
    "GX": "źi¹",
    "GHC": "źji¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗵳",
    "GX": "noh²",
    "GHC": "njọ²",
    "explanationEN": "milk",
    "explanationCN": "牛奶"
  },
  {
    "character": "𗴸",
    "GX": "tswa̱¹",
    "GHC": "tswa¹",
    "explanationEN": "hair worn in a bun or coil",
    "explanationCN": "头发扎成发髻或盘绕"
  },
  {
    "character": "𗵣",
    "GX": "tśiw²",
    "GHC": "tśjiw²",
    "explanationEN": "top",
    "explanationCN": "返回页首"
  },
  {
    "character": "𗀎",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "nearby; side",
    "explanationCN": "附近;边"
  },
  {
    "character": "𗀣",
    "GX": "rha̱r¹",
    "GHC": "¹",
    "explanationEN": "to open (one’s mouth)",
    "explanationCN": "张开 （一个人的嘴）"
  },
  {
    "character": "𗵱",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "to observe; to see",
    "explanationCN": "去观察;看"
  },
  {
    "character": "𗴳",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "a word means respect",
    "explanationCN": "一个词意味着尊重"
  },
  {
    "character": "𗵉",
    "GX": "do̱ṃ¹",
    "GHC": "dow¹",
    "explanationEN": "street",
    "explanationCN": "街"
  },
  {
    "character": "𗄀",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "boots",
    "explanationCN": "靴子"
  },
  {
    "character": "𗴱",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to cover",
    "explanationCN": "覆盖"
  },
  {
    "character": "𘟅",
    "GX": "tśhe¹",
    "GHC": "tśhjij¹",
    "explanationEN": "to raise; to elect",
    "explanationCN": "提高;选举"
  },
  {
    "character": "𗄄",
    "GX": "dih²",
    "GHC": "²",
    "explanationEN": "to build",
    "explanationCN": "构建"
  },
  {
    "character": "𗀆",
    "GX": "rgwər²",
    "GHC": "gjwɨr²",
    "explanationEN": "back of the body",
    "explanationCN": "身体背面"
  },
  {
    "character": "𗀉",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "ankle",
    "explanationCN": "踝"
  },
  {
    "character": "𗀑",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "to shelter",
    "explanationCN": "到庇护所"
  },
  {
    "character": "𗀒",
    "GX": "ẓao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "Buddhist monk",
    "explanationCN": "僧"
  },
  {
    "character": "𗀖",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "to rely on; to depend on",
    "explanationCN": "依赖;依赖"
  },
  {
    "character": "𗀘",
    "GX": "thwə¹",
    "GHC": "thjwɨ¹",
    "explanationEN": "to meet; to be infected",
    "explanationCN": "见面;被感染"
  },
  {
    "character": "𗴲",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "summer",
    "explanationCN": "夏天"
  },
  {
    "character": "𗵀",
    "GX": "vwo̱ṃ¹",
    "GHC": "wow¹",
    "explanationEN": "to wish",
    "explanationCN": "许愿"
  },
  {
    "character": "𗵯",
    "GX": "tśəh¹",
    "GHC": "tśjɨ̣¹",
    "explanationEN": "branch",
    "explanationCN": "分支"
  },
  {
    "character": "𗸕",
    "GX": "qhwə̱¹",
    "GHC": "khwə¹",
    "explanationEN": "half",
    "explanationCN": "半"
  },
  {
    "character": "𗙬",
    "GX": "ẓuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄁",
    "GX": "thwo̱¹",
    "GHC": "¹",
    "explanationEN": "illusion; dream",
    "explanationCN": "幻想;梦"
  },
  {
    "character": "𗀩",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "to ache; to be grieved and heartbroken",
    "explanationCN": "疼痛;感到悲伤和心碎"
  },
  {
    "character": "𗵰",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to offer a sacrifice; to pray",
    "explanationCN": "献祭;祈祷"
  },
  {
    "character": "𗄜",
    "GX": "ve¹",
    "GHC": "¹",
    "explanationEN": "to go",
    "explanationCN": "要走"
  },
  {
    "character": "𗀋",
    "GX": "phao̱²",
    "GHC": "phio²",
    "explanationEN": "snake",
    "explanationCN": "蛇"
  },
  {
    "character": "𗄐",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗀙",
    "GX": "mphə̱¹",
    "GHC": "phə̱¹",
    "explanationEN": "to detest",
    "explanationCN": "憎恶"
  },
  {
    "character": "𗵃",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "dragon",
    "explanationCN": "龙"
  },
  {
    "character": "𗀠",
    "GX": "mphə̱¹",
    "GHC": "phə̱¹",
    "explanationEN": "to integrate; to unite",
    "explanationCN": "整合;团结起来"
  },
  {
    "character": "𗀪",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "peacock",
    "explanationCN": "孔雀"
  },
  {
    "character": "𗄔",
    "GX": "śwoṃ¹",
    "GHC": "śjwow¹",
    "explanationEN": "to patrol",
    "explanationCN": "巡逻"
  },
  {
    "character": "𗀈",
    "GX": "tso̱ṃ¹",
    "GHC": "tsow¹",
    "explanationEN": "incomplete",
    "explanationCN": "不完全的"
  },
  {
    "character": "𗀥",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "egg",
    "explanationCN": "蛋"
  },
  {
    "character": "𗀔",
    "GX": "tśhaw¹",
    "GHC": "tśhja̱¹",
    "explanationEN": "SUPE: superessive case",
    "explanationCN": "SUPE：超凡脱俗"
  },
  {
    "character": "𗀝",
    "GX": "rvwo̱r¹",
    "GHC": "wor¹",
    "explanationEN": "chicken",
    "explanationCN": "鸡"
  },
  {
    "character": "𗀮",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "to meet; to be infected with a disease",
    "explanationCN": "见面;感染某种疾病"
  },
  {
    "character": "𗴺",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "mother",
    "explanationCN": "妈妈"
  },
  {
    "character": "𗵦",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "to pray",
    "explanationCN": "祈祷"
  },
  {
    "character": "𗄒",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "broom",
    "explanationCN": "扫帚"
  },
  {
    "character": "𗀡",
    "GX": "tśhaw¹",
    "GHC": "tśhja̱¹",
    "explanationEN": "to be licentious",
    "explanationCN": "放荡"
  },
  {
    "character": "𘒡",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "to braise",
    "explanationCN": "炖"
  },
  {
    "character": "𗀧",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "to accuse falsely",
    "explanationCN": "诬告"
  },
  {
    "character": "𗵗",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to get.ʙ; to obtain.ʙ",
    "explanationCN": "获取。获取。"
  },
  {
    "character": "𗀯",
    "GX": "thwə¹",
    "GHC": "thjwɨ¹",
    "explanationEN": "to finish",
    "explanationCN": "完成"
  },
  {
    "character": "𘈩",
    "GX": "li̱w¹",
    "GHC": "lew¹",
    "explanationEN": "one",
    "explanationCN": "一"
  },
  {
    "character": "𗀂",
    "GX": "tśhaw¹",
    "GHC": "tśhja̱¹",
    "explanationEN": "strong",
    "explanationCN": "强"
  },
  {
    "character": "𘈚",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "night",
    "explanationCN": "晚上"
  },
  {
    "character": "𗵄",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "steamed bun",
    "explanationCN": "馒头"
  },
  {
    "character": "𗀊",
    "GX": "tśhaw¹",
    "GHC": "tśhja̱¹",
    "explanationEN": "to gather; to collect",
    "explanationCN": "聚集;收集"
  },
  {
    "character": "𗴿",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "to pray",
    "explanationCN": "祈祷"
  },
  {
    "character": "𗵞",
    "GX": "ẓuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "cereal; grain",
    "explanationCN": "谷类;粮食"
  },
  {
    "character": "𗵨",
    "GX": "ẓaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "dawn",
    "explanationCN": "黎明"
  },
  {
    "character": "𗄓",
    "GX": "gəh²",
    "GHC": "gjɨ̣²",
    "explanationEN": "stars",
    "explanationCN": "星星"
  },
  {
    "character": "𗵫",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "constellation",
    "explanationCN": "星座"
  },
  {
    "character": "𗴻",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "warm",
    "explanationCN": "温暖"
  },
  {
    "character": "𗵂",
    "GX": "llə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "to crawl",
    "explanationCN": "爬行"
  },
  {
    "character": "𗍧",
    "GX": "li̱h²",
    "GHC": "lẹ²",
    "explanationEN": "tub",
    "explanationCN": "桶"
  },
  {
    "character": "𗵆",
    "GX": "śeṃ¹",
    "GHC": "śjɨj¹",
    "explanationEN": "to accomplish",
    "explanationCN": "完成"
  },
  {
    "character": "𗵪",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "spring",
    "explanationCN": "春天"
  },
  {
    "character": "𗵝",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "hot",
    "explanationCN": "热"
  },
  {
    "character": "𗀌",
    "GX": "tśha¹",
    "GHC": "tśhja¹",
    "explanationEN": "vehicle",
    "explanationCN": "车辆"
  },
  {
    "character": "𗀬",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "completely; finally",
    "explanationCN": "完全;最后"
  },
  {
    "character": "𘟃",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "brain; head",
    "explanationCN": "脑;头"
  },
  {
    "character": "𗵍",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "mixed; blended",
    "explanationCN": "混合;混合"
  },
  {
    "character": "𗵩",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "a lined Chinese-style coat or jacket",
    "explanationCN": "一件带衬里的中式外套或夹克"
  },
  {
    "character": "𗵮",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "god",
    "explanationCN": "神"
  },
  {
    "character": "𘈌",
    "GX": "nvo¹",
    "GHC": "wjo̱¹",
    "explanationEN": "commerce; trade",
    "explanationCN": "商业;贸易"
  },
  {
    "character": "𗄖",
    "GX": "dźi?",
    "GHC": "dźji?",
    "explanationEN": "to walk; to go",
    "explanationCN": "走路;要走"
  },
  {
    "character": "𗴵",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "brain; head",
    "explanationCN": "脑;头"
  },
  {
    "character": "𗵊",
    "GX": "mmu²",
    "GHC": "mju̱²",
    "explanationEN": "ox",
    "explanationCN": "牛"
  },
  {
    "character": "𗵬",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗴹",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "brain",
    "explanationCN": "脑"
  },
  {
    "character": "𗵎",
    "GX": "śeṃ¹",
    "GHC": "śjɨj¹",
    "explanationEN": "grain",
    "explanationCN": "粮食"
  },
  {
    "character": "𗵙",
    "GX": "mbao̱¹",
    "GHC": "bjo̱¹",
    "explanationEN": "copulation",
    "explanationCN": "交配"
  },
  {
    "character": "𗵥",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "source; resources",
    "explanationCN": "源;资源"
  },
  {
    "character": "𗵖",
    "GX": "tswiṃ¹",
    "GHC": "tsjwĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗄕",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "to take out; to extract",
    "explanationCN": "取出;提取"
  },
  {
    "character": "𗵜",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "source; resources",
    "explanationCN": "源;资源"
  },
  {
    "character": "𗵢",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "to look; to see; to observe",
    "explanationCN": "去看;看;观察"
  },
  {
    "character": "𗵭",
    "GX": "koh¹",
    "GHC": "kjọ¹",
    "explanationEN": "to earnestly hope; to pray for",
    "explanationCN": "热切地希望;为他祈祷"
  },
  {
    "character": "𗵧",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "(silver or gold) ingot",
    "explanationCN": "（银或金）铸锭"
  },
  {
    "character": "𗵛",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗵠",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "matter",
    "explanationCN": "事"
  },
  {
    "character": "𗵐",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "safety",
    "explanationCN": "安全"
  },
  {
    "character": "𗴴",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "peace and happiness",
    "explanationCN": "和平与幸福"
  },
  {
    "character": "𘈊",
    "GX": "nvi¹",
    "GHC": "wji̱¹",
    "explanationEN": "commerce; trade",
    "explanationCN": "商业;贸易"
  },
  {
    "character": "𗄎",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "brave",
    "explanationCN": "勇敢"
  },
  {
    "character": "𗀐",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "cold",
    "explanationCN": "冷"
  },
  {
    "character": "𗵟",
    "GX": "tshwaṃ¹",
    "GHC": "tshjwã¹",
    "explanationEN": "whole; complete",
    "explanationCN": "整个;完成"
  },
  {
    "character": "𗀗",
    "GX": "ntsi̱w²",
    "GHC": "tse̱w²",
    "explanationEN": "to melt",
    "explanationCN": "融化"
  },
  {
    "character": "𗵡",
    "GX": "tṣae̱²",
    "GHC": "tśiej²",
    "explanationEN": "to wear",
    "explanationCN": "穿"
  },
  {
    "character": "𗀓",
    "GX": "śe²",
    "GHC": "śjij²",
    "explanationEN": "to request; to beg",
    "explanationCN": "请求;乞求"
  },
  {
    "character": "𗀞",
    "GX": "to̱ṃh¹",
    "GHC": "tọ¹",
    "explanationEN": "to coagulate",
    "explanationCN": "凝固"
  },
  {
    "character": "𗵌",
    "GX": "rγwe̱r²",
    "GHC": "ˑwejr²",
    "explanationEN": "to protect",
    "explanationCN": "保护"
  },
  {
    "character": "𘔧",
    "GX": "guh¹",
    "GHC": "gjụ¹",
    "explanationEN": "seat; place; stick; post",
    "explanationCN": "座位;地方;棍;发布"
  },
  {
    "character": "𘞐",
    "GX": "nśu¹",
    "GHC": "śju̱¹",
    "explanationEN": "cool",
    "explanationCN": "凉"
  },
  {
    "character": "𗵒",
    "GX": "qai̱h¹",
    "GHC": "kiẹ¹",
    "explanationEN": "gold",
    "explanationCN": "金"
  },
  {
    "character": "𗵁",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "bluish green",
    "explanationCN": "蓝绿色"
  },
  {
    "character": "𗵑",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "old man",
    "explanationCN": "老人"
  },
  {
    "character": "𗶮",
    "GX": "ŋga¹",
    "GHC": "gja̱¹",
    "explanationEN": "to jump",
    "explanationCN": "跳"
  },
  {
    "character": "𘝹",
    "GX": "rvir²",
    "GHC": "wjir²",
    "explanationEN": "to hug",
    "explanationCN": "拥抱"
  },
  {
    "character": "𗷠",
    "GX": "tṣwae̱¹",
    "GHC": "tśiwej¹",
    "explanationEN": "thunder",
    "explanationCN": "雷"
  },
  {
    "character": "𗘠",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "leg",
    "explanationCN": "腿"
  },
  {
    "character": "𘄜",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "property; treasure",
    "explanationCN": "财产;珍惜"
  },
  {
    "character": "𘈙",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "peak",
    "explanationCN": "峰"
  },
  {
    "character": "𗙥",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "sigh",
    "explanationCN": "叹息"
  },
  {
    "character": "𗘹",
    "GX": "khaṃ¹",
    "GHC": "khjã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘃺",
    "GX": "mmə²",
    "GHC": "mjɨ̱²",
    "explanationEN": "to call",
    "explanationCN": "调用"
  },
  {
    "character": "𗙗",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "chime",
    "explanationCN": "磬"
  },
  {
    "character": "𗙕",
    "GX": "ha̱¹",
    "GHC": "xa¹",
    "explanationEN": "to shout",
    "explanationCN": "大喊大叫"
  },
  {
    "character": "𘄇",
    "GX": "mih¹",
    "GHC": "mjị¹",
    "explanationEN": "to inform",
    "explanationCN": "通知"
  },
  {
    "character": "𗟵",
    "GX": "a̱²",
    "GHC": "ˑja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗟷",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "former; past",
    "explanationCN": "前;过去"
  },
  {
    "character": "𘘄",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "tooth; blade",
    "explanationCN": "牙;叶片"
  },
  {
    "character": "𘜓",
    "GX": "tśhi²",
    "GHC": "tśhji²",
    "explanationEN": "to count",
    "explanationCN": "计数"
  },
  {
    "character": "𘘛",
    "GX": "qi̱w¹",
    "GHC": "kew¹",
    "explanationEN": "the Big Dipper; the Plough",
    "explanationCN": "北斗七星;犁"
  },
  {
    "character": "𘚄",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "high",
    "explanationCN": "高"
  },
  {
    "character": "𗗛",
    "GX": "nlhaa̱¹",
    "GHC": "lhia̱¹",
    "explanationEN": "dazzle",
    "explanationCN": "耀"
  },
  {
    "character": "𗰙",
    "GX": "kwih²",
    "GHC": "khjwị²",
    "explanationEN": "circle",
    "explanationCN": "圈"
  },
  {
    "character": "𗰟",
    "GX": "γwi²",
    "GHC": "ˑwi²",
    "explanationEN": "ground",
    "explanationCN": "地"
  },
  {
    "character": "𗰞",
    "GX": "naw¹",
    "GHC": "nja̱¹",
    "explanationEN": "dark",
    "explanationCN": "黑暗"
  },
  {
    "character": "𗙴",
    "GX": "ra̱r¹",
    "GHC": "rar¹",
    "explanationEN": "patriarchal clan; surname",
    "explanationCN": "宗族;姓"
  },
  {
    "character": "𗙘",
    "GX": "γai̱h²",
    "GHC": "ɣie̱²",
    "explanationEN": "bell",
    "explanationCN": "钟"
  },
  {
    "character": "𗹉",
    "GX": "goṃ²",
    "GHC": "gjow²",
    "explanationEN": "bent; curved",
    "explanationCN": "弯曲;弯曲"
  },
  {
    "character": "𗟼",
    "GX": "di¹",
    "GHC": "dji¹",
    "explanationEN": "to reply; to repay",
    "explanationCN": "回复;偿还"
  },
  {
    "character": "𗃒",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "hollow; ditch",
    "explanationCN": "空心;渠"
  },
  {
    "character": "𗙈",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "to allow; to say",
    "explanationCN": "允许;说"
  },
  {
    "character": "𘄆",
    "GX": "pho¹",
    "GHC": "phjo¹",
    "explanationEN": "land",
    "explanationCN": "土地"
  },
  {
    "character": "𗸢",
    "GX": "twa̱¹",
    "GHC": "twa¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗸴",
    "GX": "nwə²",
    "GHC": "njwɨ²",
    "explanationEN": "spring",
    "explanationCN": "春天"
  },
  {
    "character": "𘇗",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "rope; string",
    "explanationCN": "绳;字符串"
  },
  {
    "character": "𘒺",
    "GX": "rna̱r²",
    "GHC": "nar²",
    "explanationEN": "the old; the aged",
    "explanationCN": "旧的;老年人"
  },
  {
    "character": "𘒾",
    "GX": "nśwə¹",
    "GHC": "śjwɨ̱¹",
    "explanationEN": "wrinkle",
    "explanationCN": "皱"
  },
  {
    "character": "𘆯",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "daughter-in-law",
    "explanationCN": "媳妇"
  },
  {
    "character": "𗷦",
    "GX": "bə¹",
    "GHC": "bji¹",
    "explanationEN": "to overflow",
    "explanationCN": "溢出"
  },
  {
    "character": "𘆰",
    "GX": "kwe²",
    "GHC": "kjwij²",
    "explanationEN": "foal",
    "explanationCN": "驹"
  },
  {
    "character": "𘇉",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "to tie",
    "explanationCN": "打平"
  },
  {
    "character": "𘈢",
    "GX": "leṃh¹",
    "GHC": "ljɨ̣j¹",
    "explanationEN": "front of a garment",
    "explanationCN": "服装正面"
  },
  {
    "character": "𘆮",
    "GX": "tśih²",
    "GHC": "tśjị²",
    "explanationEN": "impediment; burden",
    "explanationCN": "障碍;负担"
  },
  {
    "character": "𗶛",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "brother-in-law",
    "explanationCN": "大伯子"
  },
  {
    "character": "𘒧",
    "GX": "dwu¹",
    "GHC": "djwu¹",
    "explanationEN": "to answer; to reply",
    "explanationCN": "回答;回复"
  },
  {
    "character": "𘔦",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "to win",
    "explanationCN": "为了赢"
  },
  {
    "character": "𗸼",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "to make",
    "explanationCN": "使"
  },
  {
    "character": "𗹄",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "to join; to connect",
    "explanationCN": "加入;连接"
  },
  {
    "character": "𘚕",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "relatives",
    "explanationCN": "亲戚"
  },
  {
    "character": "𗘺",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "quiet",
    "explanationCN": "安静"
  },
  {
    "character": "𗘸",
    "GX": "khaṃ¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙞",
    "GX": "khwaə̱?",
    "GHC": "khiwə?",
    "explanationEN": "dragon",
    "explanationCN": "龙"
  },
  {
    "character": "𗹃",
    "GX": "swo²",
    "GHC": "sjwo²",
    "explanationEN": "exhaustion",
    "explanationCN": "疲惫"
  },
  {
    "character": "𗙊",
    "GX": "dẓaa̱ṃ¹",
    "GHC": "dźiã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗠁",
    "GX": "mbu̱²",
    "GHC": "bu̱²",
    "explanationEN": "victory",
    "explanationCN": "胜利"
  },
  {
    "character": "𗗕",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "changing; incident",
    "explanationCN": "改变;事件"
  },
  {
    "character": "𗸻",
    "GX": "rbə̱r¹",
    "GHC": "bər¹",
    "explanationEN": "weak",
    "explanationCN": "弱"
  },
  {
    "character": "𗙓",
    "GX": "lwiṃ¹",
    "GHC": "ljwĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟁",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "bright",
    "explanationCN": "明亮"
  },
  {
    "character": "𗹊",
    "GX": "ŋgu¹",
    "GHC": "kju̱¹",
    "explanationEN": "limit; end",
    "explanationCN": "限制;结束"
  },
  {
    "character": "𘆤",
    "GX": "ẓuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "to raise domestic animals",
    "explanationCN": "饲养家畜"
  },
  {
    "character": "𗶚",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "relative",
    "explanationCN": "相对"
  },
  {
    "character": "𘔫",
    "GX": "lu̱h²",
    "GHC": "lụ²",
    "explanationEN": "impoverished",
    "explanationCN": "贫困"
  },
  {
    "character": "𘈣",
    "GX": "khi¹",
    "GHC": "¹",
    "explanationEN": "to open; to shine upon",
    "explanationCN": "打开;闪耀"
  },
  {
    "character": "𘆞",
    "GX": "qhai̱²",
    "GHC": "khie²",
    "explanationEN": "golden yellow; golden",
    "explanationCN": "金黄色;金"
  },
  {
    "character": "𗷞",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "to cause an abortion",
    "explanationCN": "导致流产"
  },
  {
    "character": "𗗔",
    "GX": "nye¹",
    "GHC": "ˑji̱j¹",
    "explanationEN": "flat; level; even",
    "explanationCN": "平;水平;甚至"
  },
  {
    "character": "𗍹",
    "GX": "rtsi̱wr²",
    "GHC": "tsewr²",
    "explanationEN": "whip",
    "explanationCN": "鞭子"
  },
  {
    "character": "𗹀",
    "GX": "tṣae̱ṃ¹",
    "GHC": "tśiəj¹",
    "explanationEN": "to open (one’s mouth)",
    "explanationCN": "张开 （一个人的嘴）"
  },
  {
    "character": "𘄅",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "child; infant",
    "explanationCN": "孩子;婴儿"
  },
  {
    "character": "𗘷",
    "GX": "rho̱ṃr¹",
    "GHC": "xowr¹",
    "explanationEN": "to roar; to howl",
    "explanationCN": "咆哮;嚎叫"
  },
  {
    "character": "𗙌",
    "GX": "qaə̱¹",
    "GHC": "kiə¹",
    "explanationEN": "to call",
    "explanationCN": "调用"
  },
  {
    "character": "𗙭",
    "GX": "ra̱r¹",
    "GHC": "rar¹",
    "explanationEN": "thousand",
    "explanationCN": "千"
  },
  {
    "character": "𘄋",
    "GX": "γə¹",
    "GHC": "ɣjɨ¹",
    "explanationEN": "to marry",
    "explanationCN": "结婚"
  },
  {
    "character": "𗟳",
    "GX": "ŋwu̱¹",
    "GHC": "ŋwu¹",
    "explanationEN": "speech; word",
    "explanationCN": "演讲;词"
  },
  {
    "character": "𗟽",
    "GX": "rmor²",
    "GHC": "mjor²",
    "explanationEN": "rude; coarse; careless",
    "explanationCN": "粗鲁;粗;粗心"
  },
  {
    "character": "𘘅",
    "GX": "ŋqae̱¹",
    "GHC": "kie̱j¹",
    "explanationEN": "to bite",
    "explanationCN": "咬人"
  },
  {
    "character": "𗗓",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "bottle; vase; jar; flask",
    "explanationCN": "瓶;花瓶;罐;瓶"
  },
  {
    "character": "𘓰",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "to make love",
    "explanationCN": "做爱"
  },
  {
    "character": "𘓸",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "vulture",
    "explanationCN": "秃鹫"
  },
  {
    "character": "𘈤",
    "GX": "rha̱r¹",
    "GHC": "xar¹",
    "explanationEN": "to open (one’s mouth)",
    "explanationCN": "张开 （一个人的嘴）"
  },
  {
    "character": "𘆟",
    "GX": "rzi̱wr²",
    "GHC": "zewr²",
    "explanationEN": "bit (of a bridle)",
    "explanationCN": "bit （缰绳的）"
  },
  {
    "character": "𘆿",
    "GX": "ẓae̱h¹",
    "GHC": "śiẹj¹",
    "explanationEN": "to tie; to fasten",
    "explanationCN": "打平;紧固"
  },
  {
    "character": "𘜖",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "to block up",
    "explanationCN": "阻塞"
  },
  {
    "character": "𗸿",
    "GX": "γu̱h¹",
    "GHC": "ˑụ¹",
    "explanationEN": "tired; weary",
    "explanationCN": "累;倦"
  },
  {
    "character": "𘚣",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "whirlwind",
    "explanationCN": "旋风"
  },
  {
    "character": "𘇁",
    "GX": "ẓae̱h¹",
    "GHC": "śiẹj¹",
    "explanationEN": "fierce wind",
    "explanationCN": "猛风"
  },
  {
    "character": "𘃾",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "grandson or grand-daughter",
    "explanationCN": "孙子或孙女"
  },
  {
    "character": "𘑾",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "a mournful sigh",
    "explanationCN": "一声悲哀的叹息"
  },
  {
    "character": "𘒀",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "weary; wired",
    "explanationCN": "倦;有线"
  },
  {
    "character": "𘑿",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "skill",
    "explanationCN": "技能"
  },
  {
    "character": "𗡸",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "daughter-in-law",
    "explanationCN": "媳妇"
  },
  {
    "character": "𗳛",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗳡",
    "GX": "świ²",
    "GHC": "śjwi²",
    "explanationEN": "to need; to want; to require",
    "explanationCN": "需要;想要;要求"
  },
  {
    "character": "𘑝",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "calf",
    "explanationCN": "小腿"
  },
  {
    "character": "𘑳",
    "GX": "rlho̱ṃr²",
    "GHC": "lhower²",
    "explanationEN": "ball; globe",
    "explanationCN": "球;球"
  },
  {
    "character": "𘗲",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "steady",
    "explanationCN": "稳定"
  },
  {
    "character": "𘜂",
    "GX": "dze̱ṃ¹",
    "GHC": "dzəj¹",
    "explanationEN": "deep black",
    "explanationCN": "深黑色"
  },
  {
    "character": "𘔏",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "sand; grit",
    "explanationCN": "沙;砂砾"
  },
  {
    "character": "𘘫",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "rope",
    "explanationCN": "绳"
  },
  {
    "character": "𘘲",
    "GX": "so¹",
    "GHC": "sjo¹",
    "explanationEN": "long and thin",
    "explanationCN": "又长又细"
  },
  {
    "character": "𘜩",
    "GX": "ntho̱²",
    "GHC": "tho̱²",
    "explanationEN": "deep",
    "explanationCN": "深"
  },
  {
    "character": "𘜽",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "owlet",
    "explanationCN": "猫头鹰"
  },
  {
    "character": "𘗫",
    "GX": "la̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "pretense; flattery",
    "explanationCN": "幌子;奉承"
  },
  {
    "character": "𗸠",
    "GX": "hwaa̱¹",
    "GHC": "¹",
    "explanationEN": "nothing",
    "explanationCN": "无"
  },
  {
    "character": "𗘍",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "blue and green",
    "explanationCN": "蓝色和绿色"
  },
  {
    "character": "𘃰",
    "GX": "dzwi̱w¹",
    "GHC": "dzwew¹",
    "explanationEN": "front of a garment",
    "explanationCN": "服装正面"
  },
  {
    "character": "𘅴",
    "GX": "lwa¹",
    "GHC": "ljwa¹",
    "explanationEN": "to make a detailed inquiry",
    "explanationCN": "进行详细询价"
  },
  {
    "character": "𘔐",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "red",
    "explanationCN": "红"
  },
  {
    "character": "𘘮",
    "GX": "mo²",
    "GHC": "mjo²",
    "explanationEN": "pron.HUM I; me",
    "explanationCN": "我哼"
  },
  {
    "character": "𘞉",
    "GX": "le̱¹",
    "GHC": "lej¹",
    "explanationEN": "ore; stone",
    "explanationCN": "矿石;石头"
  },
  {
    "character": "𘚈",
    "GX": "tuh²",
    "GHC": "tjụ²",
    "explanationEN": "ancestor",
    "explanationCN": "祖先"
  },
  {
    "character": "𘜾",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "phoenix",
    "explanationCN": "凤凰"
  },
  {
    "character": "𘚚",
    "GX": "pə̱h¹",
    "GHC": "pə̣¹",
    "explanationEN": "premature delivery",
    "explanationCN": "早产"
  },
  {
    "character": "𗍕",
    "GX": "rkər¹",
    "GHC": "kjɨr¹",
    "explanationEN": "to hasten",
    "explanationCN": "以加快速度"
  },
  {
    "character": "𗘏",
    "GX": "śweṃ¹",
    "GHC": "śjwɨj¹",
    "explanationEN": "to send",
    "explanationCN": "发送"
  },
  {
    "character": "𘘻",
    "GX": "ryər²",
    "GHC": "ˑjɨr²",
    "explanationEN": "to ask.ʙ",
    "explanationCN": "询问。"
  },
  {
    "character": "𗍋",
    "GX": "ŋkhə¹",
    "GHC": "khjɨ̱¹",
    "explanationEN": "to gather",
    "explanationCN": "聚集"
  },
  {
    "character": "𗍅",
    "GX": "rkər¹",
    "GHC": "kjɨ̱r¹",
    "explanationEN": "craftsman; craftsmanship",
    "explanationCN": "工匠;技能"
  },
  {
    "character": "𗡠",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "to seek; to find",
    "explanationCN": "寻找;找到"
  },
  {
    "character": "𗡳",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "beautiful; cheerful",
    "explanationCN": "美丽;开朗"
  },
  {
    "character": "𘅊",
    "GX": "le̱¹",
    "GHC": "lej¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘅩",
    "GX": "tśeh¹",
    "GHC": "tsjịj¹",
    "explanationEN": "rope",
    "explanationCN": "绳"
  },
  {
    "character": "𗳣",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "to cover",
    "explanationCN": "覆盖"
  },
  {
    "character": "𗸱",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "son or daughter",
    "explanationCN": "儿子或女儿"
  },
  {
    "character": "𘑽",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "to move (revolve)",
    "explanationCN": "移动 （旋转）"
  },
  {
    "character": "𘘺",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "to spoil (a child)",
    "explanationCN": "宠坏（一个孩子）"
  },
  {
    "character": "𗙵",
    "GX": "tśaw¹",
    "GHC": "tśja̱¹",
    "explanationEN": "to indicate",
    "explanationCN": "以指示"
  },
  {
    "character": "𗍌",
    "GX": "dźwe¹",
    "GHC": "dźjwij¹",
    "explanationEN": "to swallow",
    "explanationCN": "吞咽"
  },
  {
    "character": "𗍍",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "hare",
    "explanationCN": "兔子"
  },
  {
    "character": "𗉲",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "other; another",
    "explanationCN": "其他;另一个"
  },
  {
    "character": "𗙾",
    "GX": "qwae̱ṃ²",
    "GHC": "kiwəj²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘈝",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "night",
    "explanationCN": "晚上"
  },
  {
    "character": "𗘁",
    "GX": "ri̱r¹",
    "GHC": "rer¹",
    "explanationEN": "to bark",
    "explanationCN": "去吠叫"
  },
  {
    "character": "𗘃",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "buttocks",
    "explanationCN": "臀部"
  },
  {
    "character": "𘅨",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "dysentery",
    "explanationCN": "痢疾"
  },
  {
    "character": "𘙛",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "medicine to treat sores",
    "explanationCN": "治疗溃疡的药物"
  },
  {
    "character": "𗍁",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "wall; city; castle",
    "explanationCN": "墙;城市;城堡"
  },
  {
    "character": "𗍊",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "as",
    "explanationCN": "如"
  },
  {
    "character": "𗍖",
    "GX": "rkər¹",
    "GHC": "kjɨ̱r¹",
    "explanationEN": "muscle",
    "explanationCN": "肌肉"
  },
  {
    "character": "𗘕",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "family dependants; wife",
    "explanationCN": "家庭受抚养人;老婆"
  },
  {
    "character": "𗡣",
    "GX": "dzi̱²",
    "GHC": "dze²",
    "explanationEN": "to weight; to judge",
    "explanationCN": "到重量;评判"
  },
  {
    "character": "𗗾",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "pig; hog",
    "explanationCN": "猪;猪"
  },
  {
    "character": "𘅏",
    "GX": "rtsu̱r¹",
    "GHC": "tsur¹",
    "explanationEN": "stain; smear",
    "explanationCN": "染色;涂片"
  },
  {
    "character": "𘙔",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "glue; gum",
    "explanationCN": "胶;胶"
  },
  {
    "character": "𘙦",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "tortoise",
    "explanationCN": "龟"
  },
  {
    "character": "𘔜",
    "GX": "tśhiṃ¹",
    "GHC": "tśhjĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘑺",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "to reside; to dwell; to live",
    "explanationCN": "居住;居住;活着"
  },
  {
    "character": "𘈀",
    "GX": "rvar¹",
    "GHC": "wjar¹",
    "explanationEN": "slender",
    "explanationCN": "纤细"
  },
  {
    "character": "𘝆",
    "GX": "la̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "vulture",
    "explanationCN": "秃鹫"
  },
  {
    "character": "𗡯",
    "GX": "dźi?",
    "GHC": "dźji?",
    "explanationEN": "strange",
    "explanationCN": "奇怪"
  },
  {
    "character": "𗳢",
    "GX": "dźe?",
    "GHC": "dźjij?",
    "explanationEN": "to agree; to permit",
    "explanationCN": "同意;允许"
  },
  {
    "character": "𘘯",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "thin; weak",
    "explanationCN": "薄;弱"
  },
  {
    "character": "𘅝",
    "GX": "lwu²",
    "GHC": "ljwu²",
    "explanationEN": "to celebrate",
    "explanationCN": "庆祝"
  },
  {
    "character": "𗟫",
    "GX": "rnir²",
    "GHC": "njir²",
    "explanationEN": "to borrow; to loan",
    "explanationCN": "借款;借出"
  },
  {
    "character": "𘗿",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘚟",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "quick; nimble; agile",
    "explanationCN": "快;灵活;敏捷"
  },
  {
    "character": "𗍡",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "brother-in-law; cousnship",
    "explanationCN": "大伯子;表亲关系"
  },
  {
    "character": "𘓩",
    "GX": "mau̱²",
    "GHC": "mu²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗗴",
    "GX": "tshwə¹",
    "GHC": "tshjwɨ¹",
    "explanationEN": "to bark",
    "explanationCN": "去吠叫"
  },
  {
    "character": "𘄺",
    "GX": "bah¹",
    "GHC": "bjạ¹",
    "explanationEN": "thigh; leg",
    "explanationCN": "大腿;腿"
  },
  {
    "character": "𗍓",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "to repent",
    "explanationCN": "悔改"
  },
  {
    "character": "𘘰",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "to do",
    "explanationCN": "待办事项"
  },
  {
    "character": "𘑹",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "to do",
    "explanationCN": "待办事项"
  },
  {
    "character": "𗸘",
    "GX": "hwaa̱¹",
    "GHC": "xiwa¹",
    "explanationEN": "nothing",
    "explanationCN": "无"
  },
  {
    "character": "𗸞",
    "GX": "nae̱h²",
    "GHC": "dẹj²",
    "explanationEN": "wither; fade; dizzy",
    "explanationCN": "枯萎;褪色;头晕"
  },
  {
    "character": "𗘊",
    "GX": "tshwu²",
    "GHC": "tshjwu²",
    "explanationEN": "magpie",
    "explanationCN": "喜鹊"
  },
  {
    "character": "𗘗",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "rainbow",
    "explanationCN": "彩虹"
  },
  {
    "character": "𗡡",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "soft; tender",
    "explanationCN": "软;嫩"
  },
  {
    "character": "𗵼",
    "GX": "γaə̱¹",
    "GHC": "ɣiə¹",
    "explanationEN": "sister-in-law",
    "explanationCN": "嫂子"
  },
  {
    "character": "𘘦",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "a modal auxiliary",
    "explanationCN": "模态助词"
  },
  {
    "character": "𘘱",
    "GX": "rśar¹",
    "GHC": "śjar¹",
    "explanationEN": "to pare; to peel; to shell",
    "explanationCN": "到 pare;去皮;到 shell"
  },
  {
    "character": "𘚇",
    "GX": "voh¹",
    "GHC": "wjọ¹",
    "explanationEN": "widowed; solitary",
    "explanationCN": "寡;孤独"
  },
  {
    "character": "𗍔",
    "GX": "rkir²",
    "GHC": "²",
    "explanationEN": "to hasten",
    "explanationCN": "以加快速度"
  },
  {
    "character": "𗍐",
    "GX": "khiṃ¹",
    "GHC": "khjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗉶",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "lonely; solitary",
    "explanationCN": "孤独;孤独"
  },
  {
    "character": "𗎛",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "being blind",
    "explanationCN": "失明"
  },
  {
    "character": "𗙸",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "felt",
    "explanationCN": "毡"
  },
  {
    "character": "𘈞",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "dream",
    "explanationCN": "梦"
  },
  {
    "character": "𘄛",
    "GX": "lwa̱h¹",
    "GHC": "lwạ¹",
    "explanationEN": "to extinguish; to go out (a fire)",
    "explanationCN": "扑灭;外出（火）"
  },
  {
    "character": "𗘎",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "seven",
    "explanationCN": "七"
  },
  {
    "character": "𘅋",
    "GX": "rŋwi̱r²",
    "GHC": "ŋwer²",
    "explanationEN": "keen",
    "explanationCN": "敏锐"
  },
  {
    "character": "𘞷",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "to raise; to breed",
    "explanationCN": "提高;繁殖"
  },
  {
    "character": "𗎙",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "border; side",
    "explanationCN": "边境;边"
  },
  {
    "character": "𗰵",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "dowry; trousseau",
    "explanationCN": "嫁妆;嫁妆"
  },
  {
    "character": "𘞺",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "property",
    "explanationCN": "财产"
  },
  {
    "character": "𗌼",
    "GX": "llə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "to lock up",
    "explanationCN": "锁定"
  },
  {
    "character": "𘘔",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "a grain measure unit",
    "explanationCN": "粒度测量单位"
  },
  {
    "character": "𗡬",
    "GX": "leṃ¹",
    "GHC": "ljɨj¹",
    "explanationEN": "posture; appearance",
    "explanationCN": "姿势;外观"
  },
  {
    "character": "𘙚",
    "GX": "zwi̱w¹",
    "GHC": "zwew¹",
    "explanationEN": "to tan; to rub",
    "explanationCN": "晒黑;去摩擦"
  },
  {
    "character": "𘅯",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "to lose",
    "explanationCN": "输"
  },
  {
    "character": "𘅻",
    "GX": "γaa̱ṃ¹",
    "GHC": "ɣiã¹",
    "explanationEN": "leisure",
    "explanationCN": "暇"
  },
  {
    "character": "𘄣",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "wisdom",
    "explanationCN": "智慧"
  },
  {
    "character": "𘅵",
    "GX": "lwa¹",
    "GHC": "¹",
    "explanationEN": "to make a detailed inquiry",
    "explanationCN": "进行详细询价"
  },
  {
    "character": "𗵻",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "blissful",
    "explanationCN": "幸福"
  },
  {
    "character": "𗡭",
    "GX": "qhə̱¹",
    "GHC": "khə¹",
    "explanationEN": "poetry",
    "explanationCN": "诗歌"
  },
  {
    "character": "𗶓",
    "GX": "mbi̱²",
    "GHC": "be̱²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𘄲",
    "GX": "nlə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "to stop; to halt",
    "explanationCN": "停止;停止"
  },
  {
    "character": "𘅐",
    "GX": "phu̱²",
    "GHC": "phu²",
    "explanationEN": "boots wearing in rain or snow",
    "explanationCN": "雨雪中穿靴子"
  },
  {
    "character": "𘔥",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "parrot",
    "explanationCN": "鹦鹉"
  },
  {
    "character": "𘇺",
    "GX": "dẓao̱²",
    "GHC": "dźio²",
    "explanationEN": "emperor’s son-in-law",
    "explanationCN": "皇帝的女婿"
  },
  {
    "character": "𘘬",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "alcoholic drink",
    "explanationCN": "酒"
  },
  {
    "character": "𘙎",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "to give birth",
    "explanationCN": "生育"
  },
  {
    "character": "𘇻",
    "GX": "mu¹",
    "GHC": "mju¹",
    "explanationEN": "mother’s brother; uncle",
    "explanationCN": "母亲的兄弟;叔叔"
  },
  {
    "character": "𘘐",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "bumper harvest",
    "explanationCN": "丰收"
  },
  {
    "character": "𗡰",
    "GX": "nlla¹",
    "GHC": "lia̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗍆",
    "GX": "rkər¹",
    "GHC": "kjɨ̱r¹",
    "explanationEN": "to give up; to abandon",
    "explanationCN": "放弃;放弃"
  },
  {
    "character": "𗡞",
    "GX": "tu̱h¹",
    "GHC": "tụ¹",
    "explanationEN": "thousand",
    "explanationCN": "千"
  },
  {
    "character": "𘅌",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "to crawl",
    "explanationCN": "爬行"
  },
  {
    "character": "𘄼",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "leg",
    "explanationCN": "腿"
  },
  {
    "character": "𘚆",
    "GX": "tuh²",
    "GHC": "tjụ²",
    "explanationEN": "lip",
    "explanationCN": "唇"
  },
  {
    "character": "𘔔",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙶",
    "GX": "tseṃ¹",
    "GHC": "tsjɨj¹",
    "explanationEN": "beautiful; pretty",
    "explanationCN": "美丽;美"
  },
  {
    "character": "𗉏",
    "GX": "qwo̱ṃ¹",
    "GHC": "kwow¹",
    "explanationEN": "to face upward or downward",
    "explanationCN": "面朝上或向下"
  },
  {
    "character": "𗉷",
    "GX": "ntśhu²",
    "GHC": "tśhju̱²",
    "explanationEN": "be inverted",
    "explanationCN": "被倒置"
  },
  {
    "character": "𗎤",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "to observe",
    "explanationCN": "观察"
  },
  {
    "character": "𗚁",
    "GX": "du²",
    "GHC": "dju²",
    "explanationEN": "to make out; to see",
    "explanationCN": "亲热;看"
  },
  {
    "character": "𗸸",
    "GX": "nthu¹",
    "GHC": "thju̱¹",
    "explanationEN": "to look into; to examine",
    "explanationCN": "进行调查;检查"
  },
  {
    "character": "𘑤",
    "GX": "ye²",
    "GHC": "ˑjij²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗍝",
    "GX": "γuo¹",
    "GHC": "ˑio̱w¹",
    "explanationEN": "punishment",
    "explanationCN": "惩罚"
  },
  {
    "character": "𗉍",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "to hold",
    "explanationCN": "按住"
  },
  {
    "character": "𘟢",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "to copulate; to mate",
    "explanationCN": "交配;交配"
  },
  {
    "character": "𗳜",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "to regret; to repent",
    "explanationCN": "后悔;悔改"
  },
  {
    "character": "𘘧",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "boots wearing in rain or snow",
    "explanationCN": "雨雪中穿靴子"
  },
  {
    "character": "𘙐",
    "GX": "va¹",
    "GHC": "wja¹",
    "explanationEN": "speech; word; to say",
    "explanationCN": "演讲;词;说"
  },
  {
    "character": "𗍂",
    "GX": "nwe¹",
    "GHC": "njwij¹",
    "explanationEN": "larynx; throat",
    "explanationCN": "喉;喉"
  },
  {
    "character": "𗳮",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "curled hair",
    "explanationCN": "鬈"
  },
  {
    "character": "𗘉",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "pearl",
    "explanationCN": "珍珠"
  },
  {
    "character": "𘗸",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "to lay in; to store up",
    "explanationCN": "躺下;储存"
  },
  {
    "character": "𘔎",
    "GX": "da̱ṃ¹",
    "GHC": "dã¹",
    "explanationEN": "to eat; to feed",
    "explanationCN": "吃;喂食"
  },
  {
    "character": "𘜃",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "equal; even",
    "explanationCN": "平等;甚至"
  },
  {
    "character": "𘜅",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "wrestling",
    "explanationCN": "摔跤"
  },
  {
    "character": "𗸩",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "child",
    "explanationCN": "孩子"
  },
  {
    "character": "𘘭",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "to know.ᴀ; to be capable.ᴀ",
    "explanationCN": "知道。有能力。"
  },
  {
    "character": "𘘹",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘑡",
    "GX": "rvwo̱r²",
    "GHC": "wor²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗳱",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "that; it; he",
    "explanationCN": "那;它;他"
  },
  {
    "character": "𘃴",
    "GX": "le²",
    "GHC": "²",
    "explanationEN": "noon",
    "explanationCN": "中午"
  },
  {
    "character": "𗰸",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "to cut; to break",
    "explanationCN": "切割;打破"
  },
  {
    "character": "𘆂",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "noon",
    "explanationCN": "中午"
  },
  {
    "character": "𗳲",
    "GX": "lheṃ¹",
    "GHC": "lhjɨj¹",
    "explanationEN": "mountain; ridge",
    "explanationCN": "山;脊"
  },
  {
    "character": "𗰾",
    "GX": "nih²",
    "GHC": "njị²",
    "explanationEN": "wizard; sorcerer",
    "explanationCN": "巫师;巫师"
  },
  {
    "character": "𗱅",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "down; downward",
    "explanationCN": "下;向下"
  },
  {
    "character": "𗱆",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "cattle; ox",
    "explanationCN": "牛;牛"
  },
  {
    "character": "𗳺",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "that; it",
    "explanationCN": "那;它"
  },
  {
    "character": "𗳼",
    "GX": "giw²",
    "GHC": "gjiw²",
    "explanationEN": "to fall",
    "explanationCN": "坠落"
  },
  {
    "character": "𘃶",
    "GX": "swo²",
    "GHC": "sjwo²",
    "explanationEN": "to pestle; to grind",
    "explanationCN": "杵;研磨"
  },
  {
    "character": "𘃷",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘇧",
    "GX": "yoṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "grey",
    "explanationCN": "灰色"
  },
  {
    "character": "𘇪",
    "GX": "bao̱²",
    "GHC": "bio²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗳻",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "upright; fairminded",
    "explanationCN": "直立;公正"
  },
  {
    "character": "𗷮",
    "GX": "vwo̱ṃ¹",
    "GHC": "wow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘑫",
    "GX": "ka̱ṃ¹",
    "GHC": "kã¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗰽",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "wall",
    "explanationCN": "墙"
  },
  {
    "character": "𗸈",
    "GX": "di¹",
    "GHC": "djwi¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗸈",
    "GX": "dwu¹",
    "GHC": "djwu¹",
    "explanationEN": "to press",
    "explanationCN": "按"
  },
  {
    "character": "𗷶",
    "GX": "bə¹",
    "GHC": "¹",
    "explanationEN": "to overflow",
    "explanationCN": "溢出"
  },
  {
    "character": "𗷺",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "former times",
    "explanationCN": "昔"
  },
  {
    "character": "𗸃",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "the fourth of the ten Heavenly Stems",
    "explanationCN": "十天干之四"
  },
  {
    "character": "𗳴",
    "GX": "tṣhaə̱¹",
    "GHC": "tśhiə¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗷵",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "tired; weary",
    "explanationCN": "累;倦"
  },
  {
    "character": "𘈐",
    "GX": "ryar²",
    "GHC": "ˑjar²",
    "explanationEN": "tired; weary",
    "explanationCN": "累;倦"
  },
  {
    "character": "𘑱",
    "GX": "śwe²",
    "GHC": "śjwij²",
    "explanationEN": "bolt for a door",
    "explanationCN": "门用螺栓"
  },
  {
    "character": "𗸍",
    "GX": "tsu̱¹",
    "GHC": "tsu¹",
    "explanationEN": "diligent; industrious",
    "explanationCN": "勤;勤劳"
  },
  {
    "character": "𘜁",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "elder sister",
    "explanationCN": "姐姐"
  },
  {
    "character": "𘑪",
    "GX": "qhwə̱¹",
    "GHC": "khwə¹",
    "explanationEN": "among; between",
    "explanationCN": "中;之间"
  },
  {
    "character": "𘒶",
    "GX": "fwə¹",
    "GHC": "xwjɨ¹",
    "explanationEN": "Buddha",
    "explanationCN": "佛"
  },
  {
    "character": "𗱍",
    "GX": "nthu̱¹",
    "GHC": "thu̱¹",
    "explanationEN": "to sigh sorrowfully",
    "explanationCN": "悲哀地叹息"
  },
  {
    "character": "𘜋",
    "GX": "phaṃ²",
    "GHC": "phjã²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘜌",
    "GX": "phao̱ṃ²",
    "GHC": "phjow²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗷯",
    "GX": "rqai̱r¹",
    "GHC": "kier¹",
    "explanationEN": "to chew",
    "explanationCN": "咀嚼"
  },
  {
    "character": "𗷴",
    "GX": "rdwə̱r²",
    "GHC": "dwər²",
    "explanationEN": "to inspect",
    "explanationCN": "检查"
  },
  {
    "character": "𗷻",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "equality",
    "explanationCN": "平等"
  },
  {
    "character": "𗸓",
    "GX": "rdwə̱r¹",
    "GHC": "dwə¹",
    "explanationEN": "enemy; foe",
    "explanationCN": "敌人;敌人"
  },
  {
    "character": "𗈻",
    "GX": "tṣai̱w¹",
    "GHC": "tśiew¹",
    "explanationEN": "hot",
    "explanationCN": "热"
  },
  {
    "character": "𗖽",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗖁",
    "GX": "dzuh¹",
    "GHC": "dzjụ¹",
    "explanationEN": "tall; high",
    "explanationCN": "高;高"
  },
  {
    "character": "𗖏",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "former times",
    "explanationCN": "昔"
  },
  {
    "character": "𗖾",
    "GX": "thə̱h¹",
    "GHC": "thə̣¹",
    "explanationEN": "to force",
    "explanationCN": "强制"
  },
  {
    "character": "𗉇",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "rapid",
    "explanationCN": "快速"
  },
  {
    "character": "𗖋",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "who; which; someone",
    "explanationCN": "谁;哪;有人"
  },
  {
    "character": "𗖵",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "REF: referential case",
    "explanationCN": "REF： 引用"
  },
  {
    "character": "𗖛",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "alas; alack",
    "explanationCN": "唉;呜呼"
  },
  {
    "character": "𗖟",
    "GX": "kah¹",
    "GHC": "kjạ¹",
    "explanationEN": "musical instrument; instrument",
    "explanationCN": "乐器;仪器"
  },
  {
    "character": "𗖴",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "weaving; weft",
    "explanationCN": "织;织物"
  },
  {
    "character": "𗖰",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "sutra; scripture",
    "explanationCN": "佛经;圣经"
  },
  {
    "character": "𗗄",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "an official title",
    "explanationCN": "官方头衔"
  },
  {
    "character": "𗉁",
    "GX": "γai̱h¹",
    "GHC": "ɣiẹ¹",
    "explanationEN": "to cook",
    "explanationCN": "烹饪"
  },
  {
    "character": "𗉂",
    "GX": "γai̱h¹",
    "GHC": "ɣiẹ¹",
    "explanationEN": "concubine",
    "explanationCN": "妾"
  },
  {
    "character": "𗖶",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "who; which; what",
    "explanationCN": "谁;哪;什么"
  },
  {
    "character": "𘗼",
    "GX": "qhae̱ṃ¹",
    "GHC": "khiəj¹",
    "explanationEN": "hole; hollow",
    "explanationCN": "洞;空心"
  },
  {
    "character": "𘙲",
    "GX": "dźo¹",
    "GHC": "dźjo¹",
    "explanationEN": "long",
    "explanationCN": "长"
  },
  {
    "character": "𗕸",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗕺",
    "GX": "ŋŋwu̱²",
    "GHC": "ŋwu̱²",
    "explanationEN": "language; speech",
    "explanationCN": "语言;演讲"
  },
  {
    "character": "𗗅",
    "GX": "śwe¹",
    "GHC": "śjwij¹",
    "explanationEN": "to curse; to swear",
    "explanationCN": "诅咒;发誓"
  },
  {
    "character": "𗖂",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "to advise; to persuade",
    "explanationCN": "提供建议;去说服"
  },
  {
    "character": "𗖌",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "INDF",
    "explanationCN": "INDF"
  },
  {
    "character": "𘇴",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "to make (wine)",
    "explanationCN": "制作 （葡萄酒）"
  },
  {
    "character": "𗗀",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "wan and sallow",
    "explanationCN": "WAN 和 Sallow"
  },
  {
    "character": "𘙺",
    "GX": "ye²",
    "GHC": "ˑjij²",
    "explanationEN": "to expand; to enlarge",
    "explanationCN": "扩展;放大"
  },
  {
    "character": "𗖿",
    "GX": "thə̱h¹",
    "GHC": "¹",
    "explanationEN": "to force",
    "explanationCN": "强制"
  },
  {
    "character": "𗉈",
    "GX": "tsa¹",
    "GHC": "¹",
    "explanationEN": "rapid",
    "explanationCN": "快速"
  },
  {
    "character": "𗖎",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "to judge; to decide; to determine",
    "explanationCN": "评判;来决定;确定"
  },
  {
    "character": "𗖀",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "to suit; to be convenient; to harmonize",
    "explanationCN": "适合;方便;协调"
  },
  {
    "character": "𗕹",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "to answer",
    "explanationCN": "回答"
  },
  {
    "character": "𗖊",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "to send (an envoy)",
    "explanationCN": "发送 （Envoy）"
  },
  {
    "character": "𘙴",
    "GX": "rqo̱r¹",
    "GHC": "kor¹",
    "explanationEN": "larynx; throat",
    "explanationCN": "喉;喉"
  },
  {
    "character": "𘙳",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "to shrink; to contract",
    "explanationCN": "缩小;签订合同"
  },
  {
    "character": "𘙵",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "a long narrow piece",
    "explanationCN": "一个长而窄的碎片"
  },
  {
    "character": "𗖐",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "hiccup",
    "explanationCN": "呃逆"
  },
  {
    "character": "𗖜",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "to force; to compel",
    "explanationCN": "强制;强迫"
  },
  {
    "character": "𗳅",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "danger",
    "explanationCN": "危险"
  },
  {
    "character": "𗴀",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "tall; high",
    "explanationCN": "高;高"
  },
  {
    "character": "𗹓",
    "GX": "tśeṃ¹",
    "GHC": "tśjɨj¹",
    "explanationEN": "to send; to dispatch",
    "explanationCN": "发送;调度"
  },
  {
    "character": "𗳇",
    "GX": "dzuh¹",
    "GHC": "dzjụ¹",
    "explanationEN": "mound; mausoleum",
    "explanationCN": "土堆;陵墓"
  },
  {
    "character": "𗹙",
    "GX": "rtser¹",
    "GHC": "tsji̱r¹",
    "explanationEN": "method; art; skill",
    "explanationCN": "方法;艺术;技能"
  },
  {
    "character": "𗴃",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "two; pair",
    "explanationCN": "二;双"
  },
  {
    "character": "𘈳",
    "GX": "moh²",
    "GHC": "mjọ²",
    "explanationEN": "orphan; widower",
    "explanationCN": "孤儿;鳏夫"
  },
  {
    "character": "𘝷",
    "GX": "laa̱¹",
    "GHC": "lia¹",
    "explanationEN": "beautiful; gorgeous",
    "explanationCN": "美丽;华丽"
  },
  {
    "character": "𗳋",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "to open; to spread",
    "explanationCN": "打开;传播"
  },
  {
    "character": "𘈶",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "widow",
    "explanationCN": "寡妇"
  },
  {
    "character": "𗹏",
    "GX": "do̱ṃ¹",
    "GHC": "dow¹",
    "explanationEN": "evil; crafty",
    "explanationCN": "邪;狡猾"
  },
  {
    "character": "𗹗",
    "GX": "ġo̱²",
    "GHC": "go²",
    "explanationEN": "to get rid of",
    "explanationCN": "去掉"
  },
  {
    "character": "𗶤",
    "GX": "lu¹",
    "GHC": "lju¹",
    "explanationEN": "felt; mat",
    "explanationCN": "毡;席"
  },
  {
    "character": "𘞿",
    "GX": "ve¹",
    "GHC": "wjij¹",
    "explanationEN": "to have",
    "explanationCN": "要有"
  },
  {
    "character": "𘞽",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "surname on mother’s line",
    "explanationCN": "母亲的姓氏"
  },
  {
    "character": "𗰖",
    "GX": "nṣao¹",
    "GHC": "śio̱¹",
    "explanationEN": "to gather; to collect",
    "explanationCN": "聚集;收集"
  },
  {
    "character": "𘘜",
    "GX": "nẓae̱¹",
    "GHC": "śie̱j¹",
    "explanationEN": "to collect",
    "explanationCN": "收集"
  },
  {
    "character": "𗘞",
    "GX": "lha¹",
    "GHC": "lha¹",
    "explanationEN": "sage",
    "explanationCN": "圣人"
  },
  {
    "character": "𗟶",
    "GX": "ryir¹",
    "GHC": "ˑjir¹",
    "explanationEN": "emolument",
    "explanationCN": "薪水"
  },
  {
    "character": "𗸡",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "to make love; to rape",
    "explanationCN": "做爱;强奸"
  },
  {
    "character": "𘒥",
    "GX": "mphə¹",
    "GHC": "phjɨ̱¹",
    "explanationEN": "to flatter",
    "explanationCN": "奉承"
  },
  {
    "character": "𗷡",
    "GX": "rker²",
    "GHC": "kji̱r²",
    "explanationEN": "to feed",
    "explanationCN": "喂食"
  },
  {
    "character": "𗸺",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "felt; rug",
    "explanationCN": "毡;地毯"
  },
  {
    "character": "𗍸",
    "GX": "rpa̱r²",
    "GHC": "par²",
    "explanationEN": "a horse with white trotters",
    "explanationCN": "一匹带着白色猪蹄的马"
  },
  {
    "character": "𘟤",
    "GX": "swuh²",
    "GHC": "sjwụ²",
    "explanationEN": "life",
    "explanationCN": "生命"
  },
  {
    "character": "𘇖",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "felt; rug",
    "explanationCN": "毡;地毯"
  },
  {
    "character": "𘓭",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "to deal with",
    "explanationCN": "处理"
  },
  {
    "character": "𘘢",
    "GX": "gih²",
    "GHC": "gjị²",
    "explanationEN": "to depend on; to rely on",
    "explanationCN": "依赖;依赖"
  },
  {
    "character": "𗰓",
    "GX": "lloh²",
    "GHC": "ljọ²",
    "explanationEN": "where",
    "explanationCN": "哪里"
  },
  {
    "character": "𗙰",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "tortoise; turtle",
    "explanationCN": "龟;海龟"
  },
  {
    "character": "𗸹",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘃻",
    "GX": "yiṃ¹",
    "GHC": "ˑjĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘄁",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "a kind of animal like a mouse eats insects",
    "explanationCN": "一种像老鼠一样吃昆虫的动物"
  },
  {
    "character": "𘃸",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "prosperous",
    "explanationCN": "繁荣"
  },
  {
    "character": "𘜔",
    "GX": "rŋi̱wr²",
    "GHC": "ŋewr²",
    "explanationEN": "number; numeral",
    "explanationCN": "数;数字"
  },
  {
    "character": "𗙒",
    "GX": "laa̱¹",
    "GHC": "lia¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗰝",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "frog",
    "explanationCN": "青蛙"
  },
  {
    "character": "𘄩",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "to beat",
    "explanationCN": "击败"
  },
  {
    "character": "𘘇",
    "GX": "świ¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "wolf",
    "explanationCN": "狼"
  },
  {
    "character": "𘓊",
    "GX": "rzər¹",
    "GHC": "zjɨ̱r¹",
    "explanationEN": "few; little; tiny",
    "explanationCN": "少;小;小"
  },
  {
    "character": "𗎀",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗗖",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "spinach",
    "explanationCN": "菠菜"
  },
  {
    "character": "𘃼",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗠀",
    "GX": "dzwə̱¹",
    "GHC": "dzwə¹",
    "explanationEN": "plan",
    "explanationCN": "计划"
  },
  {
    "character": "𘓌",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "herbage",
    "explanationCN": "牧草"
  },
  {
    "character": "𘟂",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "to be",
    "explanationCN": "成为"
  },
  {
    "character": "𗗜",
    "GX": "rthoṃr²",
    "GHC": "thjowr²",
    "explanationEN": "to wave; to shake",
    "explanationCN": "挥手;摇晃"
  },
  {
    "character": "𘓺",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "emperor; high heaven",
    "explanationCN": "皇帝;高天"
  },
  {
    "character": "𘝽",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "a kind of bee",
    "explanationCN": "一种蜜蜂"
  },
  {
    "character": "𘟌",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "pepper",
    "explanationCN": "胡椒"
  },
  {
    "character": "𗷥",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "angry",
    "explanationCN": "生气"
  },
  {
    "character": "𗶙",
    "GX": "dźwə²",
    "GHC": "dźjwɨ²",
    "explanationEN": "very close relative",
    "explanationCN": "非常近的亲戚"
  },
  {
    "character": "𘈟",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "to hinder; to block",
    "explanationCN": "阻碍;阻止"
  },
  {
    "character": "𘆡",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "gorgeous",
    "explanationCN": "华丽"
  },
  {
    "character": "𘇝",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "two",
    "explanationCN": "二"
  },
  {
    "character": "𘇠",
    "GX": "rba̱r²",
    "GHC": "bar²",
    "explanationEN": "pair",
    "explanationCN": "双"
  },
  {
    "character": "𘞸",
    "GX": "peṃ¹",
    "GHC": "pjɨj¹",
    "explanationEN": "universal; general",
    "explanationCN": "普遍;常规"
  },
  {
    "character": "𘆦",
    "GX": "ndze̱¹",
    "GHC": "dze̱j¹",
    "explanationEN": "horse for riding",
    "explanationCN": "骑马"
  },
  {
    "character": "𘙯",
    "GX": "mbae̱¹",
    "GHC": "bie̱j¹",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𘔪",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "quiet",
    "explanationCN": "安静"
  },
  {
    "character": "𘚡",
    "GX": "lə̱²",
    "GHC": "²",
    "explanationEN": "flea",
    "explanationCN": "跳蚤"
  },
  {
    "character": "𘒩",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "to admonish; to instruct",
    "explanationCN": "劝诫;指示"
  },
  {
    "character": "𘇀",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "shaft of cart or carriage",
    "explanationCN": "推车或马车的轴"
  },
  {
    "character": "𘑛",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "shoulder",
    "explanationCN": "肩膀"
  },
  {
    "character": "𘞳",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "tumor",
    "explanationCN": "瘤"
  },
  {
    "character": "𗸗",
    "GX": "rdzər¹",
    "GHC": "dzjɨr¹",
    "explanationEN": "to chop; to cut off",
    "explanationCN": "砍;截断"
  },
  {
    "character": "𘔑",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "to be stifled to death",
    "explanationCN": "被窒息致死"
  },
  {
    "character": "𗉤",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "to carry on the back",
    "explanationCN": "背着"
  },
  {
    "character": "𘑞",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "elephant",
    "explanationCN": "象"
  },
  {
    "character": "𘇼",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "to marry; to unite in marriage",
    "explanationCN": "结婚;在婚姻中结合"
  },
  {
    "character": "𗸟",
    "GX": "ŋġa̱¹",
    "GHC": "¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗡟",
    "GX": "rmer²",
    "GHC": "²",
    "explanationEN": "to seek; to find",
    "explanationCN": "寻找;找到"
  },
  {
    "character": "𗡶",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "a suffix",
    "explanationCN": "后缀"
  },
  {
    "character": "𘜻",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗍎",
    "GX": "pa¹",
    "GHC": "pjạ¹",
    "explanationEN": "deep blue and green",
    "explanationCN": "深蓝色和绿色"
  },
  {
    "character": "𗍘",
    "GX": "pa¹",
    "GHC": "pjạ¹",
    "explanationEN": "butterfly",
    "explanationCN": "蝴蝶"
  },
  {
    "character": "𘃯",
    "GX": "goh¹",
    "GHC": "gjọ¹",
    "explanationEN": "to wear.ʙ",
    "explanationCN": "佩戴。"
  },
  {
    "character": "𘘑",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "abundant",
    "explanationCN": "丰富"
  },
  {
    "character": "𗡮",
    "GX": "lo²",
    "GHC": "śjwo²",
    "explanationEN": "dignified",
    "explanationCN": "端庄"
  },
  {
    "character": "𗵽",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "beautiful",
    "explanationCN": "美丽"
  },
  {
    "character": "𘄳",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "ashamed",
    "explanationCN": "羞"
  },
  {
    "character": "𘇹",
    "GX": "ẓaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "string; thread",
    "explanationCN": "字符串;线"
  },
  {
    "character": "𗸦",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "human being; person",
    "explanationCN": "人;人"
  },
  {
    "character": "𘈫",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘔒",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘔙",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𘚋",
    "GX": "dao̱h¹",
    "GHC": "niọ¹",
    "explanationEN": "sisters",
    "explanationCN": "姐妹"
  },
  {
    "character": "𘗵",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𘚨",
    "GX": "yo̱ṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "relatives",
    "explanationCN": "亲戚"
  },
  {
    "character": "𘚘",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘝃",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "fly and mosquito",
    "explanationCN": "苍蝇和蚊子"
  },
  {
    "character": "𘚛",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𗸖",
    "GX": "ŋġa̱¹",
    "GHC": "ga̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘓦",
    "GX": "lleh¹",
    "GHC": "ljịj¹",
    "explanationEN": "be awake",
    "explanationCN": "保持清醒"
  },
  {
    "character": "𘗬",
    "GX": "dźu¹",
    "GHC": "dźju¹",
    "explanationEN": "to cheat; to deceive",
    "explanationCN": "作弊;欺骗"
  },
  {
    "character": "𗌹",
    "GX": "rner¹",
    "GHC": "njijr¹",
    "explanationEN": "wild animal",
    "explanationCN": "野生动物"
  },
  {
    "character": "𗘌",
    "GX": "śwoṃ¹",
    "GHC": "śjwow¹",
    "explanationEN": "to send; to dispatch",
    "explanationCN": "发送;调度"
  },
  {
    "character": "𗘐",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𗡨",
    "GX": "dẓao̱²",
    "GHC": "dźio²",
    "explanationEN": "to help",
    "explanationCN": "帮助"
  },
  {
    "character": "𗳨",
    "GX": "dẓaa̱²",
    "GHC": "dźia²",
    "explanationEN": "incomplete",
    "explanationCN": "不完全的"
  },
  {
    "character": "𘅀",
    "GX": "ta̱?",
    "GHC": "ta?",
    "explanationEN": "to rebel against",
    "explanationCN": "反抗"
  },
  {
    "character": "𘘾",
    "GX": "rdwar¹",
    "GHC": "djwar¹",
    "explanationEN": "skin",
    "explanationCN": "皮肤"
  },
  {
    "character": "𘞊",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "indignant; angry",
    "explanationCN": "愤怒;生气"
  },
  {
    "character": "𗎜",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𗙷",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "front",
    "explanationCN": "前面"
  },
  {
    "character": "𗸶",
    "GX": "lhweh²",
    "GHC": "lhjwịj²",
    "explanationEN": "to change irregularly; to fluctuate",
    "explanationCN": "不定期更改;波动"
  },
  {
    "character": "𘄕",
    "GX": "sə̱²",
    "GHC": "sə²",
    "explanationEN": "selfishness",
    "explanationCN": "私心"
  },
  {
    "character": "𘜈",
    "GX": "dẓao̱¹",
    "GHC": "dźio¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗉑",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "post; stick",
    "explanationCN": "发布;棍"
  },
  {
    "character": "𗉭",
    "GX": "tśeṃ¹",
    "GHC": "tśjɨj¹",
    "explanationEN": "scheme; stratagem",
    "explanationCN": "方案;战略"
  },
  {
    "character": "𗗻",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𗶎",
    "GX": "dźwə¹",
    "GHC": "dźjwɨ¹",
    "explanationEN": "sister-in-law",
    "explanationCN": "嫂子"
  },
  {
    "character": "𘅙",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "mark; trace",
    "explanationCN": "马克;跟踪"
  },
  {
    "character": "𘅧",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "honorable",
    "explanationCN": "光荣"
  },
  {
    "character": "𘔤",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "dark; black",
    "explanationCN": "黑暗;黑"
  },
  {
    "character": "𘇿",
    "GX": "ṇi¹",
    "GHC": "nji¹",
    "explanationEN": "to marry",
    "explanationCN": "结婚"
  },
  {
    "character": "𘜟",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "few; little; less",
    "explanationCN": "少;小;少"
  },
  {
    "character": "𘙉",
    "GX": "keṃ¹",
    "GHC": "kjɨj¹",
    "explanationEN": "epidermis; outside",
    "explanationCN": "表皮;外面"
  },
  {
    "character": "𘙡",
    "GX": "zwi̱¹",
    "GHC": "źwe¹",
    "explanationEN": "modest",
    "explanationCN": "谦虚"
  },
  {
    "character": "𘝶",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "why; how",
    "explanationCN": "为什么;如何"
  },
  {
    "character": "𘟓",
    "GX": "tseṃh¹",
    "GHC": "¹",
    "explanationEN": "modest; humble",
    "explanationCN": "谦虚;卑微"
  },
  {
    "character": "𗗼",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "wizard",
    "explanationCN": "巫师"
  },
  {
    "character": "𗉝",
    "GX": "śih²",
    "GHC": "śjị²",
    "explanationEN": "grass; cogongrass",
    "explanationCN": "草;科贡格拉斯"
  },
  {
    "character": "𗍏",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗘙",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "scorpion",
    "explanationCN": "蝎子"
  },
  {
    "character": "𗵵",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "spider",
    "explanationCN": "蜘蛛"
  },
  {
    "character": "𘈯",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "scabies",
    "explanationCN": "疥疮"
  },
  {
    "character": "𘗽",
    "GX": "zoh²",
    "GHC": "zjọ²",
    "explanationEN": "longevity; life",
    "explanationCN": "长寿;生命"
  },
  {
    "character": "𗗰",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗡦",
    "GX": "ryər²",
    "GHC": "ˑjɨr²",
    "explanationEN": "a necklace of precious stones",
    "explanationCN": "一条宝石项链"
  },
  {
    "character": "𘔕",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𘙥",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "slow; gentle; quiet",
    "explanationCN": "慢;温柔;安静"
  },
  {
    "character": "𘞴",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𘞵",
    "GX": "dza¹",
    "GHC": "dzja¹",
    "explanationEN": "to grow",
    "explanationCN": "成长"
  },
  {
    "character": "𘟄",
    "GX": "γə¹",
    "GHC": "ɣjɨ¹",
    "explanationEN": "mother’s brother; uncle",
    "explanationCN": "母亲的兄弟;叔叔"
  },
  {
    "character": "𗟦",
    "GX": "ma̱ṃ¹",
    "GHC": "mã¹",
    "explanationEN": "luck; fortune",
    "explanationCN": "运气;财富"
  },
  {
    "character": "𗍉",
    "GX": "hə̱²",
    "GHC": "xə²",
    "explanationEN": "to choke; to swell",
    "explanationCN": "窒息;膨胀"
  },
  {
    "character": "𘅺",
    "GX": "de̱ṃ¹",
    "GHC": "dəj¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𘙒",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "to fill in; to stuff",
    "explanationCN": "填写;到东西"
  },
  {
    "character": "𗗽",
    "GX": "dẓaə̱¹",
    "GHC": "dźiə¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘅪",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗟘",
    "GX": "po¹",
    "GHC": "pjo¹",
    "explanationEN": "to burn.ʙ",
    "explanationCN": "燃烧。"
  },
  {
    "character": "𘈎",
    "GX": "toh²",
    "GHC": "tjọ²",
    "explanationEN": "younger brother",
    "explanationCN": "弟弟"
  },
  {
    "character": "𗸂",
    "GX": "ẓwae̱¹",
    "GHC": "śiwej¹",
    "explanationEN": "timid",
    "explanationCN": "胆小"
  },
  {
    "character": "𘈑",
    "GX": "rmər¹",
    "GHC": "mjɨr¹",
    "explanationEN": "people; tribe; scholar",
    "explanationCN": "人;部落;学者"
  },
  {
    "character": "𗱊",
    "GX": "thəh²",
    "GHC": "thjɨ̣²",
    "explanationEN": "to roll up; volume (of books)",
    "explanationCN": "卷起;卷（书籍）"
  },
  {
    "character": "𘑭",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "other; that; it",
    "explanationCN": "其他;那;它"
  },
  {
    "character": "𗸎",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "to burst; to break",
    "explanationCN": "爆裂;打破"
  },
  {
    "character": "𘜀",
    "GX": "rmər¹",
    "GHC": "mjɨr¹",
    "explanationEN": "strong; robust",
    "explanationCN": "强;强大的"
  },
  {
    "character": "𗳳",
    "GX": "ẓaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "to guide",
    "explanationCN": "前往指导"
  },
  {
    "character": "𗷰",
    "GX": "t?²",
    "GHC": "t-²",
    "explanationEN": "to refuse; to remove",
    "explanationCN": "拒绝;删除"
  },
  {
    "character": "𘈓",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "frog",
    "explanationCN": "青蛙"
  },
  {
    "character": "𘑬",
    "GX": "rdwi̱wr²",
    "GHC": "dwewr²",
    "explanationEN": "consciousness",
    "explanationCN": "意识"
  },
  {
    "character": "𗷼",
    "GX": "ni?",
    "GHC": "nji?",
    "explanationEN": "to defeat",
    "explanationCN": "打败"
  },
  {
    "character": "𗸑",
    "GX": "rdẓaə̱r¹",
    "GHC": "dźiər¹",
    "explanationEN": "roller; to grind or husk with a roller",
    "explanationCN": "辊;用滚筒研磨或去壳"
  },
  {
    "character": "𗉅",
    "GX": "tsaṃ¹",
    "GHC": "tsja¹",
    "explanationEN": "hot",
    "explanationCN": "热"
  },
  {
    "character": "𗖄",
    "GX": "nwi¹",
    "GHC": "njwi¹",
    "explanationEN": "kindness; favour",
    "explanationCN": "恩;恩"
  },
  {
    "character": "𗍤",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "to stand up; to raise",
    "explanationCN": "站起来;加注"
  },
  {
    "character": "𘘌",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "skull (of a dead person)",
    "explanationCN": "头骨（死人）"
  },
  {
    "character": "𘘏",
    "GX": "yu¹",
    "GHC": "ˑjwu¹",
    "explanationEN": "to haunt; to make mischief",
    "explanationCN": "闹鬼;恶作剧"
  },
  {
    "character": "𗹛",
    "GX": "tśe²",
    "GHC": "tśjij²",
    "explanationEN": "lion",
    "explanationCN": "狮子"
  },
  {
    "character": "𘙶",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "long narrow strips; pieces (of writing)",
    "explanationCN": "长而窄的条带;作品"
  },
  {
    "character": "𗈼",
    "GX": "pu²",
    "GHC": "pju²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗖕",
    "GX": "na̱h²",
    "GHC": "nạ²",
    "explanationEN": "to scold; to condemn",
    "explanationCN": "责骂;谴责"
  },
  {
    "character": "𗖃",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "another",
    "explanationCN": "另一个"
  },
  {
    "character": "𗖒",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "fault; error",
    "explanationCN": "故障;错误"
  },
  {
    "character": "𗖷",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "anger; rage",
    "explanationCN": "愤怒;愤怒"
  },
  {
    "character": "𗖳",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "to weave",
    "explanationCN": "编织"
  },
  {
    "character": "𗹚",
    "GX": "rner¹",
    "GHC": "njijr¹",
    "explanationEN": "soil; land",
    "explanationCN": "土;土地"
  },
  {
    "character": "𘇲",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "ripe; cooked",
    "explanationCN": "熟;熟"
  },
  {
    "character": "𘇵",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "cattail",
    "explanationCN": "蒲"
  },
  {
    "character": "𗗍",
    "GX": "lleh¹",
    "GHC": "ljịj¹",
    "explanationEN": "a kind of maggot",
    "explanationCN": "一种蛆"
  },
  {
    "character": "𘇫",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "blood relations",
    "explanationCN": "嫡亲"
  },
  {
    "character": "𗳽",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "slope; hillock",
    "explanationCN": "坡;岗"
  },
  {
    "character": "𗹎",
    "GX": "twa̱ṃ¹",
    "GHC": "twã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘔨",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "to compel",
    "explanationCN": "强迫"
  },
  {
    "character": "𗳈",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "target; shield",
    "explanationCN": "目标;盾"
  },
  {
    "character": "𘞎",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "rake",
    "explanationCN": "耙"
  },
  {
    "character": "𗸽",
    "GX": "tśuo²",
    "GHC": "tśjo̱w²",
    "explanationEN": "not",
    "explanationCN": "不"
  },
  {
    "character": "𘚗",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "origin; source",
    "explanationCN": "起源;源"
  },
  {
    "character": "𘄈",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "breeding",
    "explanationCN": "育种"
  },
  {
    "character": "𗸣",
    "GX": "tə̱¹",
    "GHC": "tə¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘑨",
    "GX": "γwu̱h²",
    "GHC": "ˑwụ²",
    "explanationEN": "to help; to aid",
    "explanationCN": "提供帮助;以提供帮助"
  },
  {
    "character": "𘒤",
    "GX": "li̱²",
    "GHC": "le²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘒼",
    "GX": "rna̱r²",
    "GHC": "²",
    "explanationEN": "the old; the aged",
    "explanationCN": "旧的;老年人"
  },
  {
    "character": "𘆨",
    "GX": "ti²",
    "GHC": "tji²",
    "explanationEN": "to remain",
    "explanationCN": "留下"
  },
  {
    "character": "𘇄",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "to lose; to disobey",
    "explanationCN": "输;不服从"
  },
  {
    "character": "𘇋",
    "GX": "ẓae̱h²",
    "GHC": "śiẹj²",
    "explanationEN": "evil; harm; calamity",
    "explanationCN": "邪;伤害;灾难"
  },
  {
    "character": "𗷘",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "to drive; to expel",
    "explanationCN": "开车;驱逐"
  },
  {
    "character": "𗟴",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "oral cavity",
    "explanationCN": "口腔"
  },
  {
    "character": "𗙢",
    "GX": "vwa̱ṃ²",
    "GHC": "wã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘓲",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "blue and green",
    "explanationCN": "蓝色和绿色"
  },
  {
    "character": "𘆧",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "ten thousand",
    "explanationCN": "万"
  },
  {
    "character": "𗸾",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "bald; bare",
    "explanationCN": "秃;裸"
  },
  {
    "character": "𘄞",
    "GX": "γu̱h¹",
    "GHC": "ˑụ¹",
    "explanationEN": "foreign tribes",
    "explanationCN": "外国部落"
  },
  {
    "character": "𘚂",
    "GX": "lha̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "dawn; daybreak",
    "explanationCN": "黎明;黎明"
  },
  {
    "character": "𗙖",
    "GX": "pha̱ṃ¹",
    "GHC": "phã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘃿",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "camel",
    "explanationCN": "骆驼"
  },
  {
    "character": "𗗚",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "sea",
    "explanationCN": "海"
  },
  {
    "character": "𘄮",
    "GX": "ŋkhə¹",
    "GHC": "khjɨ̱¹",
    "explanationEN": "to grind",
    "explanationCN": "研磨"
  },
  {
    "character": "𗗞",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "cooked wheaten food",
    "explanationCN": "熟面食"
  },
  {
    "character": "𘙽",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "yellow",
    "explanationCN": "黄色"
  },
  {
    "character": "𘆩",
    "GX": "mi̱h²",
    "GHC": "mẹ²",
    "explanationEN": "wing",
    "explanationCN": "翅膀"
  },
  {
    "character": "𘆵",
    "GX": "ṇi¹",
    "GHC": "nji¹",
    "explanationEN": "to clear away",
    "explanationCN": "清除"
  },
  {
    "character": "𘆱",
    "GX": "kwe²",
    "GHC": "kjwij²",
    "explanationEN": "skilful; ingenious; clever",
    "explanationCN": "巧;巧;聪明"
  },
  {
    "character": "𘙭",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "dumpling made of glutinous rice wrapped in bamboo or reed leaves (eaten during the Dragon Boat Festival)",
    "explanationCN": "以竹叶或芦叶包裹的糯米制成的饺子（端午节期间食用）"
  },
  {
    "character": "𘆴",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "well-proportioned",
    "explanationCN": "匀称"
  },
  {
    "character": "𘙪",
    "GX": "sə̱²",
    "GHC": "sə²",
    "explanationEN": "to cry; to weep; to sob",
    "explanationCN": "哭泣;哭泣;哭泣"
  },
  {
    "character": "𘈥",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "to swell; to choke",
    "explanationCN": "膨胀;窒息"
  },
  {
    "character": "𘇌",
    "GX": "dzwi¹",
    "GHC": "dzjwi¹",
    "explanationEN": "thin; emaciated",
    "explanationCN": "薄;瘦弱"
  },
  {
    "character": "𘝁",
    "GX": "thə̱²",
    "GHC": "thə²",
    "explanationEN": "wing",
    "explanationCN": "翅膀"
  },
  {
    "character": "𘗱",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "bait",
    "explanationCN": "诱饵"
  },
  {
    "character": "𘅁",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "to ask for help; to walk",
    "explanationCN": "寻求帮助;走路"
  },
  {
    "character": "𘞓",
    "GX": "ve¹",
    "GHC": "wjij¹",
    "explanationEN": "to go",
    "explanationCN": "要走"
  },
  {
    "character": "𗉱",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "to flatter",
    "explanationCN": "奉承"
  },
  {
    "character": "𗰱",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "to happen; to build",
    "explanationCN": "发生;构建"
  },
  {
    "character": "𘘳",
    "GX": "ŋgi²",
    "GHC": "gji̱²",
    "explanationEN": "to rise; to get up; to stand up",
    "explanationCN": "上升;起床;站起来"
  },
  {
    "character": "𘝅",
    "GX": "ntśhə²",
    "GHC": "tśhjɨ̱²",
    "explanationEN": "reversal",
    "explanationCN": "倒转"
  },
  {
    "character": "𘜪",
    "GX": "ryer¹",
    "GHC": "ˑjijr¹",
    "explanationEN": "to fall; to sink",
    "explanationCN": "跌倒;沉没"
  },
  {
    "character": "𘑢",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "wrist",
    "explanationCN": "腕"
  },
  {
    "character": "𘒂",
    "GX": "haa̱¹",
    "GHC": "xia¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗉎",
    "GX": "bae̱h¹",
    "GHC": "bẹj¹",
    "explanationEN": "eulogy; wittcism",
    "explanationCN": "悼词;机智"
  },
  {
    "character": "𘄽",
    "GX": "ŋa̱h²",
    "GHC": "ŋạ²",
    "explanationEN": "good; kind",
    "explanationCN": "好;类"
  },
  {
    "character": "𘗺",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "soil; land",
    "explanationCN": "土;土地"
  },
  {
    "character": "𗌿",
    "GX": "peṃh²",
    "GHC": "pjɨ̣j²",
    "explanationEN": "shovel",
    "explanationCN": "铲"
  },
  {
    "character": "𘃲",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "to mend",
    "explanationCN": "修补"
  },
  {
    "character": "𘘒",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "hair",
    "explanationCN": "毛"
  },
  {
    "character": "𘘕",
    "GX": "rvwu̱r¹",
    "GHC": "wur¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗵾",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "apron",
    "explanationCN": "围裙"
  },
  {
    "character": "𗶁",
    "GX": "mi̱h²",
    "GHC": "mẹ²",
    "explanationEN": "powder",
    "explanationCN": "粉"
  },
  {
    "character": "𘅂",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "thatched shed",
    "explanationCN": "茅草棚"
  },
  {
    "character": "𘑟",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "chin",
    "explanationCN": "下巴"
  },
  {
    "character": "𘇽",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "brown",
    "explanationCN": "棕色"
  },
  {
    "character": "𘔓",
    "GX": "tṣwai̱¹",
    "GHC": "tśiwe¹",
    "explanationEN": "red",
    "explanationCN": "红"
  },
  {
    "character": "𘙀",
    "GX": "nta̱r¹",
    "GHC": "ta̱r¹",
    "explanationEN": "to slaughter",
    "explanationCN": "屠宰"
  },
  {
    "character": "𘘴",
    "GX": "gwoṃ¹",
    "GHC": "gjwow¹",
    "explanationEN": "to throw; to cast",
    "explanationCN": "投掷;投掷"
  },
  {
    "character": "𘜜",
    "GX": "bae̱²",
    "GHC": "biej²",
    "explanationEN": "stubble",
    "explanationCN": "茬"
  },
  {
    "character": "𘝂",
    "GX": "dźih²",
    "GHC": "dźjar²",
    "explanationEN": "to cast",
    "explanationCN": "投掷"
  },
  {
    "character": "𘈦",
    "GX": "nlhu¹",
    "GHC": "lhju̱¹",
    "explanationEN": "grey",
    "explanationCN": "灰色"
  },
  {
    "character": "𗡢",
    "GX": "nto¹",
    "GHC": "tjo̱¹",
    "explanationEN": "to look for; to seek",
    "explanationCN": "寻找;寻找"
  },
  {
    "character": "𗡧",
    "GX": "ndzi²",
    "GHC": "dzji̱²",
    "explanationEN": "to conceal",
    "explanationCN": "隐藏"
  },
  {
    "character": "𗶄",
    "GX": "mmə²",
    "GHC": "mjɨ̱²",
    "explanationEN": "camel",
    "explanationCN": "骆驼"
  },
  {
    "character": "𘅍",
    "GX": "zeh¹",
    "GHC": "zjịj¹",
    "explanationEN": "TIME.ᴀ: perfective time",
    "explanationCN": "时间。"
  },
  {
    "character": "𘈖",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "to correspond",
    "explanationCN": "对应"
  },
  {
    "character": "𗉔",
    "GX": "tśiw¹",
    "GHC": "tśjiw¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗎚",
    "GX": "rmi̱r²",
    "GHC": "me²",
    "explanationEN": "pocket; bag",
    "explanationCN": "口袋;袋"
  },
  {
    "character": "𗙺",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "shed; curtain",
    "explanationCN": "棚;窗帘"
  },
  {
    "character": "𘄖",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a kind of Chinese-style underwear",
    "explanationCN": "一种中式内衣"
  },
  {
    "character": "𘈜",
    "GX": "thwo̱¹",
    "GHC": "thwo¹",
    "explanationEN": "to arrive",
    "explanationCN": "到达"
  },
  {
    "character": "𘄚",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a kind of Chinese-style underwear",
    "explanationCN": "一种中式内衣"
  },
  {
    "character": "𘗷",
    "GX": "ṇə¹",
    "GHC": "njɨ¹",
    "explanationEN": "skirt",
    "explanationCN": "裙子"
  },
  {
    "character": "𗟤",
    "GX": "tṣai̱w¹",
    "GHC": "tśiew¹",
    "explanationEN": "to whisk or wipe off; ox",
    "explanationCN": "拂动或擦去;牛"
  },
  {
    "character": "𘇛",
    "GX": "peṃh¹",
    "GHC": "pjɨ̣j¹",
    "explanationEN": "a battle-axe used in ancient China",
    "explanationCN": "中国古代使用的战斧"
  },
  {
    "character": "𘙣",
    "GX": "nśi¹",
    "GHC": "śji̱¹",
    "explanationEN": "to kill.ᴀ",
    "explanationCN": "屠宰。"
  },
  {
    "character": "𘅲",
    "GX": "tshi²",
    "GHC": "tshji²",
    "explanationEN": "general; universal",
    "explanationCN": "常规;普遍"
  },
  {
    "character": "𗱂",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "power of arms",
    "explanationCN": "武器的力量"
  },
  {
    "character": "𘒷",
    "GX": "fə¹",
    "GHC": "xjɨ¹",
    "explanationEN": "to eliminate; to clear away",
    "explanationCN": "消除;清除"
  },
  {
    "character": "𘇚",
    "GX": "mmi²",
    "GHC": "mji̱²",
    "explanationEN": "to administer; to manage",
    "explanationCN": "管理;管理"
  },
  {
    "character": "𗷷",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "to break; to crack",
    "explanationCN": "打破;破解"
  },
  {
    "character": "𗰺",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "fast; rapid",
    "explanationCN": "快;快速"
  },
  {
    "character": "𘆁",
    "GX": "lwe̱ṃ¹",
    "GHC": "lwəj¹",
    "explanationEN": "to jump; to leap",
    "explanationCN": "跳跃;飞跃"
  },
  {
    "character": "𘆄",
    "GX": "nə²",
    "GHC": "njɨ²",
    "explanationEN": "PL: plural suffix",
    "explanationCN": "PL 系列"
  },
  {
    "character": "𘑮",
    "GX": "dwu¹",
    "GHC": "djwu¹",
    "explanationEN": "impressive and dignified manners",
    "explanationCN": "令人印象深刻且端庄的举止"
  },
  {
    "character": "𘘍",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "hell; inferno",
    "explanationCN": "地狱;地狱"
  },
  {
    "character": "𗖑",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "to plot; to scheme; to conspire",
    "explanationCN": "策划;到计划;密谋"
  },
  {
    "character": "𗖔",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "peaceful",
    "explanationCN": "和平"
  },
  {
    "character": "𗖓",
    "GX": "nllo̱²",
    "GHC": "lho̱²",
    "explanationEN": "to report",
    "explanationCN": "举报"
  },
  {
    "character": "𘙼",
    "GX": "mau̱¹",
    "GHC": "mu¹",
    "explanationEN": "a mouth sticks out",
    "explanationCN": "一张嘴伸出来"
  },
  {
    "character": "𗕼",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "to spread.ᴀ; to cast.ᴀ",
    "explanationCN": "传播。投掷。"
  },
  {
    "character": "𗈾",
    "GX": "lhwah¹",
    "GHC": "lhjwạ¹",
    "explanationEN": "ash; dust",
    "explanationCN": "灰;灰尘"
  },
  {
    "character": "𗖖",
    "GX": "nəh¹",
    "GHC": "njɨ̣¹",
    "explanationEN": "to tell; to inform",
    "explanationCN": "告诉;通知"
  },
  {
    "character": "𗗂",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "a modal auxiliary",
    "explanationCN": "高得汁"
  },
  {
    "character": "𗉉",
    "GX": "dźwe¹",
    "GHC": "dźjij¹",
    "explanationEN": "cool",
    "explanationCN": "凉"
  },
  {
    "character": "𘛾",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "powder",
    "explanationCN": "粉"
  },
  {
    "character": "𗘡",
    "GX": "tśheṃ¹",
    "GHC": "tśhjɨj¹",
    "explanationEN": "down",
    "explanationCN": "下"
  },
  {
    "character": "𘇮",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "big; large",
    "explanationCN": "大;大"
  },
  {
    "character": "𘞍",
    "GX": "rti̱wr¹",
    "GHC": "tewr¹",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𘞚",
    "GX": "mbe¹",
    "GHC": "bji̱j¹",
    "explanationEN": "times",
    "explanationCN": "次"
  },
  {
    "character": "𘟉",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "steaming; seething",
    "explanationCN": "蒸;沸腾"
  },
  {
    "character": "𘘙",
    "GX": "dẓae̱h¹",
    "GHC": "dźiẹj¹",
    "explanationEN": "to enclose; to surround",
    "explanationCN": "封闭;环绕"
  },
  {
    "character": "𘜒",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "a measure word for anything small and roundish",
    "explanationCN": "一个度量词，表示任何小而圆的东西"
  },
  {
    "character": "𗰒",
    "GX": "bo̱ṃ²",
    "GHC": "bow²",
    "explanationEN": "rapid",
    "explanationCN": "快速"
  },
  {
    "character": "𗍾",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗹂",
    "GX": "goṃ²",
    "GHC": "gjow²",
    "explanationEN": "to be stuporous; to be comatose",
    "explanationCN": "昏迷;昏迷"
  },
  {
    "character": "𘜗",
    "GX": "mma²",
    "GHC": "mja̱²",
    "explanationEN": "many; much",
    "explanationCN": "多;多"
  },
  {
    "character": "𗟱",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "today; the present",
    "explanationCN": "今天;现在"
  },
  {
    "character": "𗟻",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "causative.ᴀ",
    "explanationCN": "因果关系。"
  },
  {
    "character": "𘘃",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "to chew; to bite",
    "explanationCN": "咀嚼;咬人"
  },
  {
    "character": "𗙄",
    "GX": "rẓaə̱r¹",
    "GHC": "śiər¹",
    "explanationEN": "sound; noise",
    "explanationCN": "声音;噪声"
  },
  {
    "character": "𗍺",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "ceremony; courtesy",
    "explanationCN": "仪式;礼貌"
  },
  {
    "character": "𗍼",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "face",
    "explanationCN": "脸"
  },
  {
    "character": "𗙳",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "coarse; rough",
    "explanationCN": "粗;粗糙"
  },
  {
    "character": "𗰚",
    "GX": "nllə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "a unit of weight",
    "explanationCN": "重量单位"
  },
  {
    "character": "𘄏",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "to meet",
    "explanationCN": "满足"
  },
  {
    "character": "𘄑",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "to help",
    "explanationCN": "帮助"
  },
  {
    "character": "𘘡",
    "GX": "za̱¹",
    "GHC": "za¹",
    "explanationEN": "the name of Tangut’s ancestors",
    "explanationCN": "唐古特祖先的名字"
  },
  {
    "character": "𗴊",
    "GX": "lhi̱¹",
    "GHC": "lhe¹",
    "explanationEN": "to shrink; to contract",
    "explanationCN": "缩小;签订合同"
  },
  {
    "character": "𗍷",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "to judge; to decide",
    "explanationCN": "评判;来决定"
  },
  {
    "character": "𗰢",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𘚢",
    "GX": "dẓae̱²",
    "GHC": "dźiej²",
    "explanationEN": "wheel",
    "explanationCN": "轮子"
  },
  {
    "character": "𘟕",
    "GX": "lheṃ¹",
    "GHC": "lhɨj¹",
    "explanationEN": "ridge",
    "explanationCN": "脊"
  },
  {
    "character": "𘆝",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "horse",
    "explanationCN": "马"
  },
  {
    "character": "𘇟",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "steep",
    "explanationCN": "陡"
  },
  {
    "character": "𘗳",
    "GX": "tṣwae̱ṃ¹",
    "GHC": "tśiwəj¹",
    "explanationEN": "hunchback; tumor",
    "explanationCN": "驼背;瘤"
  },
  {
    "character": "𗷤",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "shoulder",
    "explanationCN": "肩膀"
  },
  {
    "character": "𘆥",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "as",
    "explanationCN": "如"
  },
  {
    "character": "𘒻",
    "GX": "lwe¹",
    "GHC": "ljwij¹",
    "explanationEN": "old; aged",
    "explanationCN": "老;老"
  },
  {
    "character": "𘆼",
    "GX": "qwae̱²",
    "GHC": "kiwej²",
    "explanationEN": "fine horse; steed; (Chinese) unicorn",
    "explanationCN": "好马;骏马;（中文）独角兽"
  },
  {
    "character": "𘒨",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "to express by words",
    "explanationCN": "用文字表达"
  },
  {
    "character": "𗰪",
    "GX": "nlhi̱w²",
    "GHC": "lhe̱w²",
    "explanationEN": "copulation",
    "explanationCN": "交配"
  },
  {
    "character": "𗙀",
    "GX": "mbu²",
    "GHC": "bju̱²",
    "explanationEN": "a reward; an award",
    "explanationCN": "奖励;一个奖项"
  },
  {
    "character": "𗙫",
    "GX": "γa̱¹",
    "GHC": "ˑa¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗘼",
    "GX": "ŋgu¹",
    "GHC": "giu̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘄒",
    "GX": "pa̱²",
    "GHC": "pa²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙜",
    "GX": "ẓwae̱¹",
    "GHC": "śiwej¹",
    "explanationEN": "very fast; rapid",
    "explanationCN": "非常快;快速"
  },
  {
    "character": "𗡫",
    "GX": "ẓao̱²",
    "GHC": "śio²",
    "explanationEN": "daughter-in-law",
    "explanationCN": "媳妇"
  },
  {
    "character": "𘄯",
    "GX": "lhwe¹",
    "GHC": "lhjwij¹",
    "explanationEN": "oblique; slanting",
    "explanationCN": "斜;斜"
  },
  {
    "character": "𘑜",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "oblique; slanting",
    "explanationCN": "斜;斜"
  },
  {
    "character": "𗰐",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "death",
    "explanationCN": "死亡"
  },
  {
    "character": "𘟆",
    "GX": "tśhe¹",
    "GHC": "tśhjij¹",
    "explanationEN": "behind; back",
    "explanationCN": "后;返回"
  },
  {
    "character": "𗸛",
    "GX": "qhwə̱¹",
    "GHC": "khwə¹",
    "explanationEN": "coma; stupor",
    "explanationCN": "昏迷;昏迷"
  },
  {
    "character": "𗌶",
    "GX": "rner¹",
    "GHC": "njijr¹",
    "explanationEN": "to give birth",
    "explanationCN": "生育"
  },
  {
    "character": "𗎘",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "border; side",
    "explanationCN": "边境;边"
  },
  {
    "character": "𘈛",
    "GX": "thwo̱¹",
    "GHC": "thwo¹",
    "explanationEN": "illusion; dream",
    "explanationCN": "幻想;梦"
  },
  {
    "character": "𘈗",
    "GX": "ka̱ṃ¹",
    "GHC": "kã¹",
    "explanationEN": "to drive away; to expel",
    "explanationCN": "驱赶;驱逐"
  },
  {
    "character": "𗰏",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "death",
    "explanationCN": "死亡"
  },
  {
    "character": "𗍀",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘅃",
    "GX": "ŋa̱h²",
    "GHC": "ŋạ²",
    "explanationEN": "many; much",
    "explanationCN": "多;多"
  },
  {
    "character": "𘅒",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "forehead",
    "explanationCN": "前额"
  },
  {
    "character": "𘅬",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "to enclose",
    "explanationCN": "将"
  },
  {
    "character": "𗳪",
    "GX": "rzi̱r²",
    "GHC": "zer²",
    "explanationEN": "to ask for aid",
    "explanationCN": "寻求帮助"
  },
  {
    "character": "𘑼",
    "GX": "ro̱r²",
    "GHC": "ror²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘙇",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "PFV: DIR; IMP: DIR",
    "explanationCN": "PFV：目录;IMP： DIR"
  },
  {
    "character": "𘙝",
    "GX": "nlhə̱¹",
    "GHC": "lhə̱¹",
    "explanationEN": "bag; sack",
    "explanationCN": "袋;袋"
  },
  {
    "character": "𗉣",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "scheme; idea",
    "explanationCN": "方案;想法"
  },
  {
    "character": "𗎡",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "dawn; daybreak",
    "explanationCN": "黎明;黎明"
  },
  {
    "character": "𗙽",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "feelings; sensibilities",
    "explanationCN": "感情;情面"
  },
  {
    "character": "𗉜",
    "GX": "ndze̱¹",
    "GHC": "dze̱j¹",
    "explanationEN": "to struggle; to fight for",
    "explanationCN": "去挣扎;为之奋斗"
  },
  {
    "character": "𘙏",
    "GX": "tsoh¹",
    "GHC": "tsjọ¹",
    "explanationEN": "fat; grease",
    "explanationCN": "脂肪;油"
  },
  {
    "character": "𘙞",
    "GX": "rźər²",
    "GHC": "źjɨr²",
    "explanationEN": "pulse",
    "explanationCN": "脉冲"
  },
  {
    "character": "𘗶",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "horse",
    "explanationCN": "马"
  },
  {
    "character": "𗌽",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "PFV; IMP(self-beneficial)",
    "explanationCN": "PFV;IMP（自利）"
  },
  {
    "character": "𗍃",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗍄",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "wind",
    "explanationCN": "风"
  },
  {
    "character": "𗡴",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "river",
    "explanationCN": "河"
  },
  {
    "character": "𘘿",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "be in very short time",
    "explanationCN": "在很短的时间内完成"
  },
  {
    "character": "𘙋",
    "GX": "ri̱r¹",
    "GHC": "rer¹",
    "explanationEN": "string; bewstring",
    "explanationCN": "字符串;bewstring"
  },
  {
    "character": "𘙓",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "to cut open",
    "explanationCN": "切开"
  },
  {
    "character": "𘜍",
    "GX": "ryawr²",
    "GHC": "ˑja̱r²",
    "explanationEN": "date",
    "explanationCN": "日期"
  },
  {
    "character": "𘝏",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "crane",
    "explanationCN": "起重机"
  },
  {
    "character": "𗳠",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "net",
    "explanationCN": "网"
  },
  {
    "character": "𘑷",
    "GX": "?ah²",
    "GHC": "-jạ²",
    "explanationEN": "skilful; clever",
    "explanationCN": "巧;聪明"
  },
  {
    "character": "𗟪",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "fat; grease",
    "explanationCN": "脂肪;油"
  },
  {
    "character": "𗟬",
    "GX": "lweh²",
    "GHC": "ljwịj²",
    "explanationEN": "to hold or carry in both hands",
    "explanationCN": "双手握持或携带"
  },
  {
    "character": "𗵸",
    "GX": "he¹",
    "GHC": "xjij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘅓",
    "GX": "rzo̱ṃr¹",
    "GHC": "zowr¹",
    "explanationEN": "pulse; muscle",
    "explanationCN": "脉冲;肌肉"
  },
  {
    "character": "𘈃",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "wonderful",
    "explanationCN": "美妙"
  },
  {
    "character": "𘔟",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣²",
    "explanationEN": "red",
    "explanationCN": "红"
  },
  {
    "character": "𘄰",
    "GX": "tśwa¹",
    "GHC": "tśjwa¹",
    "explanationEN": "overshoes",
    "explanationCN": "套鞋"
  },
  {
    "character": "𗳚",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "collapse",
    "explanationCN": "崩溃"
  },
  {
    "character": "𗍑",
    "GX": "ŋkhə¹",
    "GHC": "khjɨ̱¹",
    "explanationEN": "shivery",
    "explanationCN": "颤抖"
  },
  {
    "character": "𗉮",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "immediately",
    "explanationCN": "马上"
  },
  {
    "character": "𘆀",
    "GX": "rver¹",
    "GHC": "wjijr¹",
    "explanationEN": "jackal",
    "explanationCN": "豺"
  },
  {
    "character": "𗱁",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "to call; to say",
    "explanationCN": "打电话;说"
  },
  {
    "character": "𗱃",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "east; end",
    "explanationCN": "东;结束"
  },
  {
    "character": "𗱄",
    "GX": "thəh²",
    "GHC": "thjɨ̣²",
    "explanationEN": "case; outer coffin",
    "explanationCN": "箱;外棺"
  },
  {
    "character": "𘆅",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "lion",
    "explanationCN": "狮子"
  },
  {
    "character": "𗷭",
    "GX": "kiṃ¹",
    "GHC": "kjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘈍",
    "GX": "no̱?",
    "GHC": "no?",
    "explanationEN": "a nation",
    "explanationCN": "一个国家"
  },
  {
    "character": "𗸌",
    "GX": "voh²",
    "GHC": "wjọ²",
    "explanationEN": "to know.ʙ; to be capable.ʙ",
    "explanationCN": "知道。有能力。"
  },
  {
    "character": "𗸊",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "mallet",
    "explanationCN": "槌"
  },
  {
    "character": "𘗻",
    "GX": "qho̱ṃ¹",
    "GHC": "khow¹",
    "explanationEN": "to detest",
    "explanationCN": "憎恶"
  },
  {
    "character": "𗖚",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "to report; to plan",
    "explanationCN": "报告 ;规划"
  },
  {
    "character": "𗖬",
    "GX": "rkiwr¹",
    "GHC": "kjiwr¹",
    "explanationEN": "to get worried; to get excited; to feel anxious",
    "explanationCN": "担心;兴奋;感到焦虑"
  },
  {
    "character": "𗖍",
    "GX": "nla¹",
    "GHC": "lja̱¹",
    "explanationEN": "praise; eulogy",
    "explanationCN": "赞美;悼词"
  },
  {
    "character": "𗖫",
    "GX": "nah²",
    "GHC": "njạ²",
    "explanationEN": "to help",
    "explanationCN": "帮助"
  },
  {
    "character": "𘇱",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "witticism",
    "explanationCN": "妙语"
  },
  {
    "character": "𘇷",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "to boil silk",
    "explanationCN": "煮真丝"
  },
  {
    "character": "𗹔",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "oblique, slanting; inclined",
    "explanationCN": "斜，倾斜;倾向"
  },
  {
    "character": "𗳄",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "sky; heaven",
    "explanationCN": "天空;天堂"
  },
  {
    "character": "𗳊",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "marshland",
    "explanationCN": "沼泽地"
  },
  {
    "character": "𘆎",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "measurement",
    "explanationCN": "测量"
  },
  {
    "character": "𗙯",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "back",
    "explanationCN": "返回"
  },
  {
    "character": "𗙩",
    "GX": "hiw¹",
    "GHC": "xjiw¹",
    "explanationEN": "stop; rest",
    "explanationCN": "停;休息"
  },
  {
    "character": "𘆬",
    "GX": "ẓae̱h¹",
    "GHC": "śiẹj¹",
    "explanationEN": "lameness",
    "explanationCN": "跛 行"
  },
  {
    "character": "𘇈",
    "GX": "ntaa̱²",
    "GHC": "tia̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘄬",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "to wave; to sway; to shake",
    "explanationCN": "挥手;摇摆;摇晃"
  },
  {
    "character": "𗟿",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𘜚",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "to dare; to be capable",
    "explanationCN": "敢于;有能力"
  },
  {
    "character": "𘇊",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "magnificent; gorgeous",
    "explanationCN": "宏伟;华丽"
  },
  {
    "character": "𗃔",
    "GX": "rtsi̱wr²",
    "GHC": "tsewr²",
    "explanationEN": "axe; hatchet",
    "explanationCN": "斧;斧头"
  },
  {
    "character": "𘘉",
    "GX": "ŋqae̱¹",
    "GHC": "kie̱j¹",
    "explanationEN": "debt",
    "explanationCN": "债务"
  },
  {
    "character": "𗙠",
    "GX": "dẓaa̱¹",
    "GHC": "dźia¹",
    "explanationEN": "noise",
    "explanationCN": "噪声"
  },
  {
    "character": "𗰜",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "origin; root",
    "explanationCN": "起源;根"
  },
  {
    "character": "𘗨",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "sister",
    "explanationCN": "姐姐"
  },
  {
    "character": "𗸵",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "season",
    "explanationCN": "季节"
  },
  {
    "character": "𘆹",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "grey",
    "explanationCN": "灰色"
  },
  {
    "character": "𘓷",
    "GX": "rqwə̱r¹",
    "GHC": "kwər¹",
    "explanationEN": "body",
    "explanationCN": "身体"
  },
  {
    "character": "𗸙",
    "GX": "rtshər¹",
    "GHC": "tshjɨr¹",
    "explanationEN": "to cut; to slice",
    "explanationCN": "切割;切片"
  },
  {
    "character": "𗉐",
    "GX": "tṣao̱ṃ²",
    "GHC": "tśiow²",
    "explanationEN": "thatched hut",
    "explanationCN": "茅草屋"
  },
  {
    "character": "𗳝",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "month",
    "explanationCN": "月"
  },
  {
    "character": "𘗰",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "fruit",
    "explanationCN": "水果"
  },
  {
    "character": "𘄙",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "to bear (a burden)",
    "explanationCN": "承担 （负担）"
  },
  {
    "character": "𘅰",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘅥",
    "GX": "rtsu̱r¹",
    "GHC": "tsur¹",
    "explanationEN": "to suffer from an illness; to fall ill; to be ill",
    "explanationCN": "患有疾病;生病;生病"
  },
  {
    "character": "𘅮",
    "GX": "rtso̱ṃr¹",
    "GHC": "tsowr¹",
    "explanationEN": "pounding; to pestle",
    "explanationCN": "冲击;到 Pestle"
  },
  {
    "character": "𘈮",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj¹",
    "explanationEN": "lame",
    "explanationCN": "跛"
  },
  {
    "character": "𗘜",
    "GX": "ŋga²",
    "GHC": "gia̱²",
    "explanationEN": "to be lame; to limp",
    "explanationCN": "跛脚;跛行"
  },
  {
    "character": "𘄧",
    "GX": "γaa̱²",
    "GHC": "ˑia̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘘂",
    "GX": "tśo?",
    "GHC": "tśjo?",
    "explanationEN": "permanent; forever",
    "explanationCN": "永久;永远"
  },
  {
    "character": "𘅷",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𘅚",
    "GX": "de̱ṃ¹",
    "GHC": "dəj¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘈆",
    "GX": "rγo̱r¹",
    "GHC": "ɣor¹",
    "explanationEN": "sister-in-law",
    "explanationCN": "嫂子"
  },
  {
    "character": "𗟯",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "to hold.ʙ; to grasp.ʙ",
    "explanationCN": "持有。抓住。"
  },
  {
    "character": "𘅹",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𘙍",
    "GX": "lhuh¹",
    "GHC": "lhjụ¹",
    "explanationEN": "belt; a rope with a hook",
    "explanationCN": "带;带钩的绳子"
  },
  {
    "character": "𗉰",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "to seek",
    "explanationCN": "寻找"
  },
  {
    "character": "𘅳",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘑣",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘙈",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "to meet",
    "explanationCN": "满足"
  },
  {
    "character": "𘚜",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "Tangut",
    "explanationCN": "西夏语"
  },
  {
    "character": "𘞏",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "surname of a tribe",
    "explanationCN": "部落的姓氏"
  },
  {
    "character": "𗍞",
    "GX": "ŋŋwə̱¹",
    "GHC": "ŋwə̱¹",
    "explanationEN": "to be greedy (for food); to be gluttonous",
    "explanationCN": "贪婪（为了食物）;暴饮暴食"
  },
  {
    "character": "𗱇",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "end; east",
    "explanationCN": "结束;东"
  },
  {
    "character": "𗸔",
    "GX": "ryər²",
    "GHC": "ˑjɨr²",
    "explanationEN": "stop; rest",
    "explanationCN": "停;休息"
  },
  {
    "character": "𗖮",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "thatched hut",
    "explanationCN": "茅草屋"
  },
  {
    "character": "𘙻",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "long and thin",
    "explanationCN": "又长又细"
  },
  {
    "character": "𘙹",
    "GX": "ye²",
    "GHC": "ˑjij²",
    "explanationEN": "sudden and violent",
    "explanationCN": "突然而猛烈"
  },
  {
    "character": "𘛿",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "body; physique",
    "explanationCN": "身体;体质"
  },
  {
    "character": "𗳐",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "end; east",
    "explanationCN": "结束;东"
  },
  {
    "character": "𘘁",
    "GX": "nśo²",
    "GHC": "śjo̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗸭",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "to quarrel; to wrangle",
    "explanationCN": "争吵;争论"
  },
  {
    "character": "𘔌",
    "GX": "dźeh²",
    "GHC": "²",
    "explanationEN": "to fight; to struggle",
    "explanationCN": "去战斗;挣扎"
  },
  {
    "character": "𗉥",
    "GX": "gwe¹",
    "GHC": "gjwij¹",
    "explanationEN": "eating one’s fill",
    "explanationCN": "吃饱"
  },
  {
    "character": "𗖩",
    "GX": "lih¹",
    "GHC": "ljị¹",
    "explanationEN": "to quarrel; to wrangle",
    "explanationCN": "争吵;争论"
  },
  {
    "character": "𗖯",
    "GX": "γaa̱²",
    "GHC": "ˑia²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶝",
    "GX": "lu¹",
    "GHC": "lju¹",
    "explanationEN": "multicolor",
    "explanationCN": "彩色"
  },
  {
    "character": "𘞱",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "under; below; bottom",
    "explanationCN": "下;下面;底"
  },
  {
    "character": "𗇻",
    "GX": "ṇae̱ṃ²",
    "GHC": "niəj²",
    "explanationEN": "dirt; filth",
    "explanationCN": "污垢;污秽"
  },
  {
    "character": "𘞌",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "solid; true",
    "explanationCN": "固体;真"
  },
  {
    "character": "𗕯",
    "GX": "nlo²",
    "GHC": "ljo̱²",
    "explanationEN": "bedding",
    "explanationCN": "床上用品"
  },
  {
    "character": "𘒞",
    "GX": "źu¹",
    "GHC": "źju¹",
    "explanationEN": "to gather; to assemble",
    "explanationCN": "聚集;组装"
  },
  {
    "character": "𗶜",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗶟",
    "GX": "mbu̱¹",
    "GHC": "bu̱¹",
    "explanationEN": "etiquette; ceremony and propriety",
    "explanationCN": "礼仪;礼仪"
  },
  {
    "character": "𗶥",
    "GX": "qai̱w¹",
    "GHC": "kiew¹",
    "explanationEN": "to collapse; to crumble",
    "explanationCN": "崩溃;瓦解"
  },
  {
    "character": "𗶢",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "anger; rage",
    "explanationCN": "愤怒;愤怒"
  },
  {
    "character": "𘆍",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "to divide; to share",
    "explanationCN": "分割;分享"
  },
  {
    "character": "𘞲",
    "GX": "thwe̱¹",
    "GHC": "thwej¹",
    "explanationEN": "to support",
    "explanationCN": "支持"
  },
  {
    "character": "𗇢",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "arduous; difficult; hard; tough",
    "explanationCN": "艰巨;难;硬;艰难"
  },
  {
    "character": "𗕍",
    "GX": "rler¹",
    "GHC": "lji̱r¹",
    "explanationEN": "tired; run-down; overworked",
    "explanationCN": "累;破败;劳累"
  },
  {
    "character": "𗱐",
    "GX": "ntho̱²",
    "GHC": "tho̱²",
    "explanationEN": "to draw (water)",
    "explanationCN": "绘制（水）"
  },
  {
    "character": "𗱒",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𘔣",
    "GX": "ntha̱¹",
    "GHC": "tha̱¹",
    "explanationEN": "to haunt; to make mischief",
    "explanationCN": "闹鬼;恶作剧"
  },
  {
    "character": "𗈢",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "conceited; restrained",
    "explanationCN": "自负;克制"
  },
  {
    "character": "𗷜",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "to send back; to repatriate",
    "explanationCN": "寄回;遣返"
  },
  {
    "character": "𗷟",
    "GX": "γa̱ṃ²",
    "GHC": "ɣã²",
    "explanationEN": "drought; dry spell",
    "explanationCN": "干旱;旱"
  },
  {
    "character": "𗈍",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "ghost; phantom",
    "explanationCN": "鬼;幽灵"
  },
  {
    "character": "𗕧",
    "GX": "dwu̱²",
    "GHC": "dwu²",
    "explanationEN": "like; alike",
    "explanationCN": "喜欢;一样"
  },
  {
    "character": "𗕰",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "to pull out; to pull up",
    "explanationCN": "拉出;拉起"
  },
  {
    "character": "𗱜",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "cotton-padded mattress",
    "explanationCN": "棉垫床垫"
  },
  {
    "character": "𗲇",
    "GX": "vwə̱h¹",
    "GHC": "wə̣¹",
    "explanationEN": "old; aged",
    "explanationCN": "老;老"
  },
  {
    "character": "𗲏",
    "GX": "nah²",
    "GHC": "njạ²",
    "explanationEN": "anger; rage",
    "explanationCN": "愤怒;愤怒"
  },
  {
    "character": "𗲩",
    "GX": "ŋqhwa̱¹",
    "GHC": "khwa̱¹",
    "explanationEN": "to curse",
    "explanationCN": "诅咒"
  },
  {
    "character": "𗹇",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "ghost; an evil spirit",
    "explanationCN": "鬼;恶灵"
  },
  {
    "character": "𗱵",
    "GX": "li̱²",
    "GHC": "le²",
    "explanationEN": "to boil",
    "explanationCN": "煮沸"
  },
  {
    "character": "𗇬",
    "GX": "lwa̱ṃ²",
    "GHC": "lwã²",
    "explanationEN": "in disorder; confused",
    "explanationCN": "乱;困惑"
  },
  {
    "character": "𗱠",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "pure; refined",
    "explanationCN": "纯;精制"
  },
  {
    "character": "𘟣",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "to exist(normal)",
    "explanationCN": "to exist（正常）"
  },
  {
    "character": "𗱨",
    "GX": "nlu²",
    "GHC": "lju̱²",
    "explanationEN": "bedding",
    "explanationCN": "床上用品"
  },
  {
    "character": "𗱪",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "many; more; much",
    "explanationCN": "多;更多;多"
  },
  {
    "character": "𗲈",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "a round flat piece of jade with a hole in its centre",
    "explanationCN": "一块圆形扁平的玉石，中间有一个孔"
  },
  {
    "character": "𘒍",
    "GX": "twi̱¹",
    "GHC": "twe¹",
    "explanationEN": "to pile up; to heap up",
    "explanationCN": "堆积起来;堆积起来"
  },
  {
    "character": "𘆔",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "to return; to move back",
    "explanationCN": "返回;向后移动"
  },
  {
    "character": "𗘶",
    "GX": "ŋgə¹",
    "GHC": "gjɨ̱¹",
    "explanationEN": "a sudden peal of thunder",
    "explanationCN": "突如其来的雷声"
  },
  {
    "character": "𗙧",
    "GX": "rmer¹",
    "GHC": "mjijr¹",
    "explanationEN": "flourishing; prosperous",
    "explanationCN": "繁荣;繁荣"
  },
  {
    "character": "𘄊",
    "GX": "li¹",
    "GHC": "lji¹",
    "explanationEN": "prosperous; flourishing",
    "explanationCN": "繁荣;繁荣"
  },
  {
    "character": "𘄌",
    "GX": "teh²",
    "GHC": "tjịj²",
    "explanationEN": "sheep",
    "explanationCN": "羊"
  },
  {
    "character": "𘑥",
    "GX": "tśhu¹",
    "GHC": "tśhju¹",
    "explanationEN": "ghost; phantom",
    "explanationCN": "鬼;幽灵"
  },
  {
    "character": "𘘆",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "old age; year",
    "explanationCN": "老年;年"
  },
  {
    "character": "𗈇",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "north",
    "explanationCN": "北"
  },
  {
    "character": "𗈠",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "wrong; mistaken",
    "explanationCN": "错;错误"
  },
  {
    "character": "𗈐",
    "GX": "mə̱h¹",
    "GHC": "mə̣¹",
    "explanationEN": "not",
    "explanationCN": "不"
  },
  {
    "character": "𗕣",
    "GX": "tshah¹",
    "GHC": "tshjạ¹",
    "explanationEN": "angry",
    "explanationCN": "生气"
  },
  {
    "character": "𗕭",
    "GX": "rtśhwər¹",
    "GHC": "tśhjwɨr¹",
    "explanationEN": "silly; idiotic; vulgar",
    "explanationCN": "憨;愚蠢;俗"
  },
  {
    "character": "𗰮",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "to die young",
    "explanationCN": "英年早逝"
  },
  {
    "character": "𗱻",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "to steal; to rob",
    "explanationCN": "偷窃;抢劫"
  },
  {
    "character": "𗲲",
    "GX": "lwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "brightness",
    "explanationCN": "亮度"
  },
  {
    "character": "𗲜",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "concave; crooked",
    "explanationCN": "凹;歪"
  },
  {
    "character": "𗲝",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "to collapse",
    "explanationCN": "折叠"
  },
  {
    "character": "𗲸",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "to make; to do",
    "explanationCN": "使;待办事项"
  },
  {
    "character": "𘒋",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "to gather; to assemble",
    "explanationCN": "聚集;组装"
  },
  {
    "character": "𘒜",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "feast; banquet",
    "explanationCN": "盛宴;宴会"
  },
  {
    "character": "𗗡",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𗗠",
    "GX": "nlhaa̱¹",
    "GHC": "lhia̱¹",
    "explanationEN": "to lick; to wipe away",
    "explanationCN": "舔;擦除"
  },
  {
    "character": "𘃹",
    "GX": "vwaə̱¹",
    "GHC": "wiə¹",
    "explanationEN": "fertile; rich",
    "explanationCN": "沃;富"
  },
  {
    "character": "𘄉",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "dark",
    "explanationCN": "黑暗"
  },
  {
    "character": "𗕔",
    "GX": "the̱¹",
    "GHC": "thej¹",
    "explanationEN": "platform; objects shaped like a platform",
    "explanationCN": "平台;形状像平台的物体"
  },
  {
    "character": "𗕪",
    "GX": "meh¹",
    "GHC": "mjịj¹",
    "explanationEN": "woman; female",
    "explanationCN": "女人;女性"
  },
  {
    "character": "𗱼",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "hole; pit",
    "explanationCN": "洞;坑"
  },
  {
    "character": "𗙚",
    "GX": "phiṃ¹",
    "GHC": "phjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗰡",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "source; origin; root",
    "explanationCN": "源;起源;根"
  },
  {
    "character": "𗰩",
    "GX": "γwo̱ṃh¹",
    "GHC": "ˑwo¹",
    "explanationEN": "pillow",
    "explanationCN": "枕头"
  },
  {
    "character": "𗇹",
    "GX": "qhaa̱ṃ¹",
    "GHC": "kiã¹",
    "explanationEN": "salted; salty",
    "explanationCN": "咸;咸"
  },
  {
    "character": "𗕑",
    "GX": "khə²",
    "GHC": "khjɨ²",
    "explanationEN": "ten thousand",
    "explanationCN": "万"
  },
  {
    "character": "𗕠",
    "GX": "qho̱¹",
    "GHC": "kho¹",
    "explanationEN": "a classifier",
    "explanationCN": "分类器"
  },
  {
    "character": "𗱕",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "all; everyone",
    "explanationCN": "都;每个人 都"
  },
  {
    "character": "𗘧",
    "GX": "rdźir²",
    "GHC": "dźjir²",
    "explanationEN": "butter; cheese",
    "explanationCN": "黄油;奶酪"
  },
  {
    "character": "𗘨",
    "GX": "ndẓae̱ṃ²",
    "GHC": "dźie̱j²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗲤",
    "GX": "thə̱¹",
    "GHC": "thə¹",
    "explanationEN": "stone roller",
    "explanationCN": "㧎"
  },
  {
    "character": "𗱿",
    "GX": "γwəh¹",
    "GHC": "ɣjwɨ̣¹",
    "explanationEN": "to wrestle",
    "explanationCN": "摔跤"
  },
  {
    "character": "𗲎",
    "GX": "rver²",
    "GHC": "wjijr²",
    "explanationEN": "mill",
    "explanationCN": "磨"
  },
  {
    "character": "𗕕",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "tooth",
    "explanationCN": "牙"
  },
  {
    "character": "𘒓",
    "GX": "rpa̱r¹",
    "GHC": "par¹",
    "explanationEN": "to congeal; scar",
    "explanationCN": "凝结;疤"
  },
  {
    "character": "𘒝",
    "GX": "tṣhai̱w¹",
    "GHC": "tśhiew¹",
    "explanationEN": "a unit of Tangut army",
    "explanationCN": "唐古特军队的一个单位"
  },
  {
    "character": "𘝼",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "bed-wetting",
    "explanationCN": "尿床"
  },
  {
    "character": "𗇯",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "slow; obtuse; dazed",
    "explanationCN": "慢;钝;茫然"
  },
  {
    "character": "𗱶",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "slow; obtuse; dazed",
    "explanationCN": "慢;钝;茫然"
  },
  {
    "character": "𗲍",
    "GX": "nllo̱r¹",
    "GHC": "ljo̱r¹",
    "explanationEN": "full; excessive",
    "explanationCN": "满;过度"
  },
  {
    "character": "𘔮",
    "GX": "rvwa̱r²",
    "GHC": "ˑwar²",
    "explanationEN": "wealth; property",
    "explanationCN": "财富;财产"
  },
  {
    "character": "𘔩",
    "GX": "rdwə̱r²",
    "GHC": "dwər²",
    "explanationEN": "to drive away (a ghost)",
    "explanationCN": "赶走 （鬼）"
  },
  {
    "character": "𘆳",
    "GX": "mbai̱¹",
    "GHC": "bie̱¹",
    "explanationEN": "to gallop",
    "explanationCN": "驰骋"
  },
  {
    "character": "𘆲",
    "GX": "tshwu̱¹",
    "GHC": "tshwu¹",
    "explanationEN": "fat; corpulent",
    "explanationCN": "脂肪;肥胖"
  },
  {
    "character": "𘙩",
    "GX": "tśhi¹",
    "GHC": "tshji¹",
    "explanationEN": "to cry; to weep",
    "explanationCN": "哭泣;哭泣"
  },
  {
    "character": "𗲊",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "buttocks",
    "explanationCN": "臀部"
  },
  {
    "character": "𘆑",
    "GX": "gih²",
    "GHC": "²",
    "explanationEN": "to depend on; to rely on",
    "explanationCN": "依赖;依赖"
  },
  {
    "character": "𗱎",
    "GX": "tṣaa̱¹",
    "GHC": "tśia¹",
    "explanationEN": "branch",
    "explanationCN": "分支"
  },
  {
    "character": "𘄔",
    "GX": "pae̱ṃ²",
    "GHC": "piəj²",
    "explanationEN": "to flee; to escape",
    "explanationCN": "逃跑;逃脱"
  },
  {
    "character": "𗈡",
    "GX": "rzo̱ṃr¹",
    "GHC": "zowr¹",
    "explanationEN": "sexual desire; lust",
    "explanationCN": ";欲望"
  },
  {
    "character": "𗷚",
    "GX": "li̱²",
    "GHC": "le²",
    "explanationEN": "fog",
    "explanationCN": "雾"
  },
  {
    "character": "𗇽",
    "GX": "dzuh²",
    "GHC": "dzjụ²",
    "explanationEN": "forefathers; ancestry",
    "explanationCN": "祖先;祖先"
  },
  {
    "character": "𘓉",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "to herd; to graze",
    "explanationCN": "到畜牧;吃草"
  },
  {
    "character": "𘆐",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "bland; tasteless",
    "explanationCN": "乏味;淡"
  },
  {
    "character": "𗱘",
    "GX": "rγaə̱r¹",
    "GHC": "ɣiər¹",
    "explanationEN": "boiling",
    "explanationCN": "沸腾"
  },
  {
    "character": "𗱛",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "appearance; spirit",
    "explanationCN": "外观;精神"
  },
  {
    "character": "𗰔",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘘚",
    "GX": "ndze²",
    "GHC": "dzji̱j²",
    "explanationEN": "teacher; tutor",
    "explanationCN": "老师;导师"
  },
  {
    "character": "𘜑",
    "GX": "pa̱¹",
    "GHC": "pa¹",
    "explanationEN": "waves",
    "explanationCN": "波"
  },
  {
    "character": "𗇦",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "calamity; disaster",
    "explanationCN": "灾难;灾难"
  },
  {
    "character": "𗈗",
    "GX": "ndi̱²",
    "GHC": "de̱²",
    "explanationEN": "dirt; filth",
    "explanationCN": "污垢;污秽"
  },
  {
    "character": "𗱝",
    "GX": "dẓwai̱¹",
    "GHC": "dźiwe¹",
    "explanationEN": "echo",
    "explanationCN": "回波"
  },
  {
    "character": "𗍿",
    "GX": "lli̱w¹",
    "GHC": "lew¹",
    "explanationEN": "full; filled; satisfied",
    "explanationCN": "满;㿙;满意"
  },
  {
    "character": "𗘢",
    "GX": "tśheṃ¹",
    "GHC": "tśhjɨj¹",
    "explanationEN": "thin; rare",
    "explanationCN": "薄;罕见"
  },
  {
    "character": "𗙛",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙙",
    "GX": "qi̱ṃ¹",
    "GHC": "kẽ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙐",
    "GX": "si̱²",
    "GHC": "se²",
    "explanationEN": "to whistle; whistle (of human)",
    "explanationCN": "吹口哨;口哨声 （人类）"
  },
  {
    "character": "𗙇",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "to howl",
    "explanationCN": "嚎叫"
  },
  {
    "character": "𗙟",
    "GX": "ŋġe̱²",
    "GHC": "ge̱j²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙑",
    "GX": "γai̱h²",
    "GHC": "ɣiẹ²",
    "explanationEN": "breath",
    "explanationCN": "呼吸"
  },
  {
    "character": "𗰠",
    "GX": "nẓai̱¹",
    "GHC": "śie̱¹",
    "explanationEN": "to collect; to gather",
    "explanationCN": "收集;聚集"
  },
  {
    "character": "𗰣",
    "GX": "zeh¹",
    "GHC": "zjịj¹",
    "explanationEN": "how many; how much",
    "explanationCN": "几个;多少"
  },
  {
    "character": "𘄀",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗟲",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "speech; word",
    "explanationCN": "演讲;词"
  },
  {
    "character": "𘄨",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "to bargain",
    "explanationCN": "讨价还价"
  },
  {
    "character": "𘑚",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "rain and dew",
    "explanationCN": "雨与露"
  },
  {
    "character": "𘓋",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "a little; a few",
    "explanationCN": "一点儿;一些"
  },
  {
    "character": "𘚖",
    "GX": "llwo̱¹",
    "GHC": "lwo¹",
    "explanationEN": "moist; damp",
    "explanationCN": "潮湿;潮湿"
  },
  {
    "character": "𘞞",
    "GX": "ntṣhaa̱²",
    "GHC": "tśhia̱²",
    "explanationEN": "difficult; hard",
    "explanationCN": "难;硬"
  },
  {
    "character": "𗇠",
    "GX": "bi̱h²",
    "GHC": "bẹ²",
    "explanationEN": "to pierce through; to drill",
    "explanationCN": "刺穿;钻孔"
  },
  {
    "character": "𗘥",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "miscellaneous; mixed",
    "explanationCN": "杂项;混合"
  },
  {
    "character": "𗱳",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "super; particular",
    "explanationCN": "超;特定"
  },
  {
    "character": "𗲪",
    "GX": "dźa̱ṃ¹",
    "GHC": "dźã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗱷",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "dregs; residue",
    "explanationCN": "渣;残留"
  },
  {
    "character": "𘒅",
    "GX": "źə²",
    "GHC": "źjɨ²",
    "explanationEN": "living in peace",
    "explanationCN": "和平生活"
  },
  {
    "character": "𗍵",
    "GX": "tṣwaa̱¹",
    "GHC": "tśiwa¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙂",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "drum",
    "explanationCN": "鼓"
  },
  {
    "character": "𗙋",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "harmony; concord",
    "explanationCN": "和谐;一致"
  },
  {
    "character": "𗙡",
    "GX": "rqwa̱r¹",
    "GHC": "kwar¹",
    "explanationEN": "to cry; to weep; to sob",
    "explanationCN": "哭泣;哭泣;哭泣"
  },
  {
    "character": "𘑲",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘟖",
    "GX": "qai̱¹",
    "GHC": "kie¹",
    "explanationEN": "to examine; to observe",
    "explanationCN": "检查;观察"
  },
  {
    "character": "𗲭",
    "GX": "vwə̱h¹",
    "GHC": "wə̣¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𘘠",
    "GX": "mpo̱²",
    "GHC": "po̱²",
    "explanationEN": "I; me",
    "explanationCN": "我;我"
  },
  {
    "character": "𘝻",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘟔",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "soft; lithe",
    "explanationCN": "软;轻盈"
  },
  {
    "character": "𗱥",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "moisture",
    "explanationCN": "湿气"
  },
  {
    "character": "𘑦",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "sore on a horse’s hoofs",
    "explanationCN": "马蹄上的疮"
  },
  {
    "character": "𗲒",
    "GX": "yeṃ¹",
    "GHC": "ˑjɨj¹",
    "explanationEN": "to groan; to moan",
    "explanationCN": "呻吟;呻吟"
  },
  {
    "character": "𗶘",
    "GX": "tśoh²",
    "GHC": "tśjọ²",
    "explanationEN": "ashamed",
    "explanationCN": "羞"
  },
  {
    "character": "𗰭",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "ten",
    "explanationCN": "十"
  },
  {
    "character": "𘟘",
    "GX": "γiw¹",
    "GHC": "ɣjiw¹",
    "explanationEN": "to masticate; to chew",
    "explanationCN": "咀嚼;咀嚼"
  },
  {
    "character": "𘓶",
    "GX": "guh²",
    "GHC": "giụ²",
    "explanationEN": "body; physique",
    "explanationCN": "身体;体质"
  },
  {
    "character": "𘙬",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "insect; worm",
    "explanationCN": "昆虫;蠕虫"
  },
  {
    "character": "𗇺",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "fault; offence; sin",
    "explanationCN": "故障;罪行;罪"
  },
  {
    "character": "𘒣",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "speech; word",
    "explanationCN": "演讲;词"
  },
  {
    "character": "𘆠",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "grayish white; ashen; off-white",
    "explanationCN": "灰白色;苍白;灰白色"
  },
  {
    "character": "𗈆",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "devil; demon",
    "explanationCN": "魔鬼;恶魔"
  },
  {
    "character": "𘆾",
    "GX": "dzih¹",
    "GHC": "dzjị¹",
    "explanationEN": "horse’s teeth; age",
    "explanationCN": "马的牙齿;年龄"
  },
  {
    "character": "𗵹",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "distress; sorrow",
    "explanationCN": "窘迫;悲伤"
  },
  {
    "character": "𘔬",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "property",
    "explanationCN": "财产"
  },
  {
    "character": "𗷧",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "to crawl",
    "explanationCN": "爬行"
  },
  {
    "character": "𘆢",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "mule",
    "explanationCN": "骡子"
  },
  {
    "character": "𘆭",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "horse",
    "explanationCN": "马"
  },
  {
    "character": "𘒦",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "truth; reality",
    "explanationCN": "真理;现实"
  },
  {
    "character": "𘗩",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "steed; fine horse",
    "explanationCN": "骏马;好马"
  },
  {
    "character": "𘇃",
    "GX": "γwu̱h²",
    "GHC": "ˑwu²",
    "explanationEN": "to tie",
    "explanationCN": "打平"
  },
  {
    "character": "𘈡",
    "GX": "qhao̱ṃ¹",
    "GHC": "khiow¹",
    "explanationEN": "body",
    "explanationCN": "身体"
  },
  {
    "character": "𗘦",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗱏",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "to choke oneself",
    "explanationCN": "窒息自己"
  },
  {
    "character": "𗲖",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "broken; fragmentary",
    "explanationCN": "破碎;零碎"
  },
  {
    "character": "𘒆",
    "GX": "twe̱¹",
    "GHC": "twej¹",
    "explanationEN": "to pile up; to accumulate",
    "explanationCN": "堆积起来;累积"
  },
  {
    "character": "𗕢",
    "GX": "khə²",
    "GHC": "khjɨ²",
    "explanationEN": "owlet",
    "explanationCN": "猫头鹰"
  },
  {
    "character": "𗌲",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "flag; banner",
    "explanationCN": "旗;旗帜"
  },
  {
    "character": "𗷝",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "NEG.PFV",
    "explanationCN": "否定。PFV"
  },
  {
    "character": "𗷙",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "colt",
    "explanationCN": "驹"
  },
  {
    "character": "𘑩",
    "GX": "lloh²",
    "GHC": "ljọ²",
    "explanationEN": "to combine; to unite",
    "explanationCN": "组合在一起;团结起来"
  },
  {
    "character": "𗇮",
    "GX": "rə̱r²",
    "GHC": "rar²",
    "explanationEN": "shadow; reflection",
    "explanationCN": "影子;反射"
  },
  {
    "character": "𗈀",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "to fall; to sink",
    "explanationCN": "跌倒;沉没"
  },
  {
    "character": "𗇾",
    "GX": "do̱ṃ²",
    "GHC": "dow²",
    "explanationEN": "to move; to stir",
    "explanationCN": "移动;搅拌"
  },
  {
    "character": "𗘤",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "marriage; to marry",
    "explanationCN": "婚;结婚"
  },
  {
    "character": "𗱚",
    "GX": "ndzu²",
    "GHC": "dzju̱²",
    "explanationEN": "to hide",
    "explanationCN": "隐藏"
  },
  {
    "character": "𗱲",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗱦",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "aerolite",
    "explanationCN": "陨石"
  },
  {
    "character": "𗱸",
    "GX": "llu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "stone; rock",
    "explanationCN": "石头;岩石"
  },
  {
    "character": "𗲉",
    "GX": "dźo²",
    "GHC": "dźjo²",
    "explanationEN": "to exist.ʙ(animate);  to have.ʙ",
    "explanationCN": "to exist.ʙ（有生命的）; 拥有。"
  },
  {
    "character": "𗲣",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "a necklace made by jewellery",
    "explanationCN": "由珠宝制作的项链"
  },
  {
    "character": "𗲙",
    "GX": "dźwi¹",
    "GHC": "dźjwi¹",
    "explanationEN": "woolens",
    "explanationCN": "羊毛"
  },
  {
    "character": "𗲹",
    "GX": "nlu¹",
    "GHC": "lhju̱¹",
    "explanationEN": "stingy; miserly; grudge",
    "explanationCN": "吝啬;吝啬;怨恨"
  },
  {
    "character": "𗗘",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "sweet",
    "explanationCN": "甜"
  },
  {
    "character": "𗘟",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "holy; virtuous and able",
    "explanationCN": "神圣;德行健"
  },
  {
    "character": "𗙆",
    "GX": "haa̱¹",
    "GHC": "xia¹",
    "explanationEN": "blocked",
    "explanationCN": "封锁"
  },
  {
    "character": "𗎁",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗙮",
    "GX": "tśhwə¹",
    "GHC": "tśhjwɨ¹",
    "explanationEN": "foot mark; footprint",
    "explanationCN": "脚印;脚印"
  },
  {
    "character": "𗰗",
    "GX": "γa̱h²",
    "GHC": "ɣạ²",
    "explanationEN": "ten",
    "explanationCN": "十"
  },
  {
    "character": "𘄄",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "man; male",
    "explanationCN": "男人;雄"
  },
  {
    "character": "𘒃",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "stove; furnace",
    "explanationCN": "炉;炉"
  },
  {
    "character": "𘘝",
    "GX": "ndze²",
    "GHC": "dzji̱j²",
    "explanationEN": "to teach; to instruct",
    "explanationCN": "教导;指示"
  },
  {
    "character": "𗴉",
    "GX": "phe̱¹",
    "GHC": "phej¹",
    "explanationEN": "interval",
    "explanationCN": "间隔"
  },
  {
    "character": "𗕒",
    "GX": "ni¹",
    "GHC": "nji¹",
    "explanationEN": "to take a wife",
    "explanationCN": "娶妻"
  },
  {
    "character": "𗕲",
    "GX": "rtśhwər¹",
    "GHC": "tśhjwɨr¹",
    "explanationEN": "to flog; to beat; to torture",
    "explanationCN": "鞭打;殴打;折磨"
  },
  {
    "character": "𗱩",
    "GX": "nwe¹",
    "GHC": "njwij¹",
    "explanationEN": "to obstruct; to block; to choke up",
    "explanationCN": "阻碍;阻止;窒息"
  },
  {
    "character": "𗱽",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "to prepare; to get ready",
    "explanationCN": "准备;做好准备"
  },
  {
    "character": "𗲞",
    "GX": "ra̱r¹",
    "GHC": "rar¹",
    "explanationEN": "hill; mountain",
    "explanationCN": "山;山"
  },
  {
    "character": "𘒊",
    "GX": "źə²",
    "GHC": "źjɨ²",
    "explanationEN": "to go without a burden",
    "explanationCN": "无负担地去"
  },
  {
    "character": "𘒗",
    "GX": "paa̱ṃ¹",
    "GHC": "piã¹",
    "explanationEN": "front tooth; incisor",
    "explanationCN": "板牙;板牙"
  },
  {
    "character": "𗌳",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "pretty; beautiful",
    "explanationCN": "美;美丽"
  },
  {
    "character": "𗰘",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "entertaimnent; recreation",
    "explanationCN": "企业;娱乐"
  },
  {
    "character": "𘄫",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "to kick",
    "explanationCN": "踢"
  },
  {
    "character": "𗴈",
    "GX": "do̱ṃ²",
    "GHC": "dow²",
    "explanationEN": "bear",
    "explanationCN": "熊"
  },
  {
    "character": "𗱱",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "to pay one’s debt",
    "explanationCN": "偿还债务"
  },
  {
    "character": "𗗟",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "FUT: future",
    "explanationCN": "FUT"
  },
  {
    "character": "𗙪",
    "GX": "kaṃ¹",
    "GHC": "kjã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗘩",
    "GX": "rnə̱r²",
    "GHC": "nər²",
    "explanationEN": "yellow",
    "explanationCN": "黄色"
  },
  {
    "character": "𗈟",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "wild goat",
    "explanationCN": "野山羊"
  },
  {
    "character": "𘓯",
    "GX": "khoṃ¹",
    "GHC": "khjow¹",
    "explanationEN": "to grant.ᴀ",
    "explanationCN": "授予。"
  },
  {
    "character": "𘴇",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "swallow",
    "explanationCN": "吞"
  },
  {
    "character": "𘓱",
    "GX": "ŋwə̱¹",
    "GHC": "ŋwə¹",
    "explanationEN": "heaven",
    "explanationCN": "天堂"
  },
  {
    "character": "𘓵",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "witch; shaman; wizard",
    "explanationCN": "女巫;萨满;巫师"
  },
  {
    "character": "𗲽",
    "GX": "ryer¹",
    "GHC": "ˑjijr¹",
    "explanationEN": "to pull out; to dredge up",
    "explanationCN": "拉出;疏浚"
  },
  {
    "character": "𗈑",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "hard punishment",
    "explanationCN": "严厉的惩罚"
  },
  {
    "character": "𗲐",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "dangerous; perilous",
    "explanationCN": "危险;危险"
  },
  {
    "character": "𗷪",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "to exert; to try hard",
    "explanationCN": "用力;努力尝试"
  },
  {
    "character": "𘆫",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "to comfort; to appease",
    "explanationCN": "安慰;安抚"
  },
  {
    "character": "𘆺",
    "GX": "bai̱²",
    "GHC": "bie²",
    "explanationEN": "chestnut brown",
    "explanationCN": "栗子棕色"
  },
  {
    "character": "𘆽",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "horse",
    "explanationCN": "马"
  },
  {
    "character": "𘇞",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "fur; leather",
    "explanationCN": "毛皮;皮革"
  },
  {
    "character": "𘒪",
    "GX": "ndu¹",
    "GHC": "dju̱¹",
    "explanationEN": "to argue; to pick a quarrel",
    "explanationCN": "争论;挑起争吵"
  },
  {
    "character": "𘞂",
    "GX": "ndzə²",
    "GHC": "dzjɨ̱²",
    "explanationEN": "to practice; to exercise; to review",
    "explanationCN": "去实践;锻炼;回顾"
  },
  {
    "character": "𘇇",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "elephant",
    "explanationCN": "象"
  },
  {
    "character": "𗷫",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "annoyance",
    "explanationCN": "烦恼"
  },
  {
    "character": "𘇜",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗲵",
    "GX": "li̱²",
    "GHC": "le²",
    "explanationEN": "gourd ladle",
    "explanationCN": "葫芦勺"
  },
  {
    "character": "𗙤",
    "GX": "piṃ¹",
    "GHC": "pjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗘻",
    "GX": "doh¹",
    "GHC": "djọ¹",
    "explanationEN": "a sorrowfull sigh",
    "explanationCN": "一声悲哀的叹息"
  },
  {
    "character": "𗰤",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "clear; obvious; plain",
    "explanationCN": "清楚;明显;平原"
  },
  {
    "character": "𗰧",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r²",
    "explanationEN": "a unit of length",
    "explanationCN": "长度单位"
  },
  {
    "character": "𗕩",
    "GX": "lwuh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "mixed; harmonious",
    "explanationCN": "混合;和谐"
  },
  {
    "character": "𗘾",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "conch",
    "explanationCN": "海螺"
  },
  {
    "character": "𗙉",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "to choke oneself",
    "explanationCN": "窒息自己"
  },
  {
    "character": "𘒢",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "gruel; porridge",
    "explanationCN": "粥;粥"
  },
  {
    "character": "𗶗",
    "GX": "tśoh²",
    "GHC": "tśjọ²",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𘑧",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "dried meat",
    "explanationCN": "腊"
  },
  {
    "character": "𘇢",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "to mix; to blend",
    "explanationCN": "混合;混合"
  },
  {
    "character": "𗸤",
    "GX": "ti̱ṃ¹",
    "GHC": "tẽ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘆣",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "centre; middle",
    "explanationCN": "中心;中间"
  },
  {
    "character": "𘇂",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "MED: medioesive case; middle",
    "explanationCN": "MED： 中等 ;中间"
  },
  {
    "character": "𗘪",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "clan",
    "explanationCN": "家族"
  },
  {
    "character": "𗟾",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "to cry; to weep",
    "explanationCN": "哭泣;哭泣"
  },
  {
    "character": "𗗙",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "GEN; ANTIERG",
    "explanationCN": "根;安蒂尔"
  },
  {
    "character": "𗘿",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "well-balanced; short",
    "explanationCN": "平衡良好;短"
  },
  {
    "character": "𘗴",
    "GX": "rkir²",
    "GHC": "kjir²",
    "explanationEN": "waist",
    "explanationCN": "腰"
  },
  {
    "character": "𘝾",
    "GX": "li²",
    "GHC": "ljị²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗇤",
    "GX": "tswa̱¹",
    "GHC": "tswa¹",
    "explanationEN": "to fall; to throw",
    "explanationCN": "跌倒;扔"
  },
  {
    "character": "𗇪",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "hair",
    "explanationCN": "毛"
  },
  {
    "character": "𗇵",
    "GX": "lhwi²",
    "GHC": "lhjwi²",
    "explanationEN": "old; outdated",
    "explanationCN": "老;过时的"
  },
  {
    "character": "𗇷",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "tattered",
    "explanationCN": "破烂"
  },
  {
    "character": "𗇫",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "to build.ᴀ; to cure.ᴀ",
    "explanationCN": "到 build.ᴀ;治愈。"
  },
  {
    "character": "𗕌",
    "GX": "źiṃ¹",
    "GHC": "źjĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘄓",
    "GX": "pae̱ṃ²",
    "GHC": "piəj²",
    "explanationEN": "a kind of animal",
    "explanationCN": "一种动物"
  },
  {
    "character": "𗕖",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "to observe; to watch",
    "explanationCN": "去观察;观看"
  },
  {
    "character": "𘅾",
    "GX": "γo̱²",
    "GHC": "²",
    "explanationEN": "leisure; free time",
    "explanationCN": "暇;闲暇"
  },
  {
    "character": "𘒁",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "centre; middle",
    "explanationCN": "中心;中间"
  },
  {
    "character": "𘘤",
    "GX": "dźə¹",
    "GHC": "dźji¹",
    "explanationEN": "skin; fur",
    "explanationCN": "皮肤;毛皮"
  },
  {
    "character": "𗱖",
    "GX": "źwu²",
    "GHC": "źjwu²",
    "explanationEN": "a kind of clothes",
    "explanationCN": "一种衣服"
  },
  {
    "character": "𗱡",
    "GX": "źwu²",
    "GHC": "źjwu²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘞹",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "to prepare",
    "explanationCN": "准备"
  },
  {
    "character": "𗱯",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "to press; to oppress",
    "explanationCN": "按 ;压迫"
  },
  {
    "character": "𗇡",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "one of the five two-hour periods into which the night was formerly divided; watch",
    "explanationCN": "以前将夜晚划分为五个两小时的时段之一;看"
  },
  {
    "character": "𗇥",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "inclined to one side; slanting",
    "explanationCN": "偏向一侧;斜"
  },
  {
    "character": "𗈜",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "to separate; to sever",
    "explanationCN": "分离;切断"
  },
  {
    "character": "𗈧",
    "GX": "śeh¹",
    "GHC": "śjịj¹",
    "explanationEN": "ghost",
    "explanationCN": "鬼"
  },
  {
    "character": "𗱴",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "mill; millstones",
    "explanationCN": "磨;磨石"
  },
  {
    "character": "𗲃",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "to rely on",
    "explanationCN": "依赖"
  },
  {
    "character": "𗲱",
    "GX": "tṣhao̱ṃ²",
    "GHC": "tśhjow²",
    "explanationEN": "red sand",
    "explanationCN": "红沙"
  },
  {
    "character": "𗲴",
    "GX": "luh¹",
    "GHC": "ljụ¹",
    "explanationEN": "to rub; to knead",
    "explanationCN": "摩擦;揉捏"
  },
  {
    "character": "𗲼",
    "GX": "twə¹",
    "GHC": "tsjwi¹",
    "explanationEN": "to knead; to rub",
    "explanationCN": "揉捏;去摩擦"
  },
  {
    "character": "𘒔",
    "GX": "twe̱¹",
    "GHC": "twej¹",
    "explanationEN": "lame",
    "explanationCN": "跛"
  },
  {
    "character": "𗉌",
    "GX": "pu²",
    "GHC": "pju²",
    "explanationEN": "butterfly",
    "explanationCN": "蝴蝶"
  },
  {
    "character": "𗘔",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "to swear; to pledge",
    "explanationCN": "发誓;承诺"
  },
  {
    "character": "𗗯",
    "GX": "tśe²",
    "GHC": "tśjij²",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𗵿",
    "GX": "mbi̱²",
    "GHC": "be̱²",
    "explanationEN": "eyebrow; brow",
    "explanationCN": "眉;眉头"
  },
  {
    "character": "𗶍",
    "GX": "mbi̱²",
    "GHC": "be̱²",
    "explanationEN": "ghost",
    "explanationCN": "鬼"
  },
  {
    "character": "𘅕",
    "GX": "zo̱ṃ¹",
    "GHC": "zow¹",
    "explanationEN": "to be undivided",
    "explanationCN": "不分割"
  },
  {
    "character": "𘝌",
    "GX": "leṃh¹",
    "GHC": "ljɨ̣j¹",
    "explanationEN": "evil spirit; demon",
    "explanationCN": "煞;恶魔"
  },
  {
    "character": "𘗪",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "to deceive; to cheat",
    "explanationCN": "欺骗;作弊"
  },
  {
    "character": "𘆕",
    "GX": "ŋga̱²",
    "GHC": "ga̱²",
    "explanationEN": "thin",
    "explanationCN": "薄"
  },
  {
    "character": "𗈏",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "toil; hard work",
    "explanationCN": "辛劳;苦功"
  },
  {
    "character": "𗇨",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "end",
    "explanationCN": "结束"
  },
  {
    "character": "𗇧",
    "GX": "qhə̱²",
    "GHC": "khə²",
    "explanationEN": "horse disease",
    "explanationCN": "马病"
  },
  {
    "character": "𗈨",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "to dig",
    "explanationCN": "挖掘"
  },
  {
    "character": "𗈤",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "tattered; ragged",
    "explanationCN": "破烂;衣衫褴褛"
  },
  {
    "character": "𗕗",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "to adore; to admire",
    "explanationCN": "崇拜;欣赏"
  },
  {
    "character": "𘅣",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "matter; affair; thing",
    "explanationCN": "事;事;东西"
  },
  {
    "character": "𘑴",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "bag; pocket",
    "explanationCN": "袋;口袋"
  },
  {
    "character": "𘞻",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "wan and sallow; thin and pallid",
    "explanationCN": "淡淡的和蜡黄的;瘦而苍白"
  },
  {
    "character": "𘒟",
    "GX": "ẓuo¹",
    "GHC": "źio̱w¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗈎",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "disease; sickness; illness",
    "explanationCN": "疾病;病;疾病"
  },
  {
    "character": "𗇱",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "ovum; egg",
    "explanationCN": "卵子;蛋"
  },
  {
    "character": "𗇼",
    "GX": "gwaṃ²",
    "GHC": "gjwã²",
    "explanationEN": "goat",
    "explanationCN": "山羊"
  },
  {
    "character": "𗕫",
    "GX": "ru̱r²",
    "GHC": "rur²",
    "explanationEN": "to like; to love",
    "explanationCN": "喜欢;去爱"
  },
  {
    "character": "𗕳",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "to change; to vary",
    "explanationCN": "改变;变化"
  },
  {
    "character": "𗘫",
    "GX": "nlu¹",
    "GHC": "lju̱¹",
    "explanationEN": "to fall scatteredly; to be far apart",
    "explanationCN": "零散地坠落;相距甚远"
  },
  {
    "character": "𗍚",
    "GX": "rza̱r¹",
    "GHC": "zar¹",
    "explanationEN": "ashamed; abashed",
    "explanationCN": "羞;羞愧"
  },
  {
    "character": "𗕝",
    "GX": "phəh¹",
    "GHC": "phjɨ̣¹",
    "explanationEN": "to contract; to reduce",
    "explanationCN": "签订合同;减少"
  },
  {
    "character": "𗗵",
    "GX": "qhai̱²",
    "GHC": "khie²",
    "explanationEN": "yak",
    "explanationCN": "牦牛"
  },
  {
    "character": "𘈕",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "to drive away; to brush away",
    "explanationCN": "驱赶;刷掉"
  },
  {
    "character": "𘙆",
    "GX": "vwaə̱²",
    "GHC": "wiə²",
    "explanationEN": "fat; grease",
    "explanationCN": "脂肪;油"
  },
  {
    "character": "𗕞",
    "GX": "ndzo̱²",
    "GHC": "dzo̱²",
    "explanationEN": "to ride",
    "explanationCN": "骑行"
  },
  {
    "character": "𘒘",
    "GX": "paa̱ṃ¹",
    "GHC": "piã¹",
    "explanationEN": "to assist",
    "explanationCN": "协助"
  },
  {
    "character": "𗘂",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𗍈",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "eyelid",
    "explanationCN": "眼睑"
  },
  {
    "character": "𗈘",
    "GX": "hwi̱ṃ²",
    "GHC": "xwẽ²",
    "explanationEN": "devil; demon",
    "explanationCN": "魔鬼;恶魔"
  },
  {
    "character": "𗘀",
    "GX": "qi̱w²",
    "GHC": "kew²",
    "explanationEN": "chrysalis",
    "explanationCN": "蛹"
  },
  {
    "character": "𘅞",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "face",
    "explanationCN": "脸"
  },
  {
    "character": "𘄥",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "evil; heretical",
    "explanationCN": "邪;异端"
  },
  {
    "character": "𗇴",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "disease; illness",
    "explanationCN": "疾病;疾病"
  },
  {
    "character": "𗈞",
    "GX": "rdzar²",
    "GHC": "dzjar²",
    "explanationEN": "to extinguish; to eliminate",
    "explanationCN": "扑灭;消除"
  },
  {
    "character": "𗲁",
    "GX": "tṣaa̱¹",
    "GHC": "tśia¹",
    "explanationEN": "to collapse",
    "explanationCN": "折叠"
  },
  {
    "character": "𗲶",
    "GX": "tṣai̱w¹",
    "GHC": "tśiew¹",
    "explanationEN": "to pad",
    "explanationCN": "到 Pad"
  },
  {
    "character": "𗈈",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "egg; ovum",
    "explanationCN": "蛋;卵子"
  },
  {
    "character": "𗲷",
    "GX": "ŋŋwu̱²",
    "GHC": "ŋwu̱²",
    "explanationEN": "fragrant",
    "explanationCN": "香"
  },
  {
    "character": "𘙧",
    "GX": "gwi¹",
    "GHC": "gjwi¹",
    "explanationEN": "fur coat",
    "explanationCN": "裘"
  },
  {
    "character": "𘘨",
    "GX": "zəh²",
    "GHC": "zjɨ̣²",
    "explanationEN": "proud; arrogant",
    "explanationCN": "骄傲;傲慢"
  },
  {
    "character": "𗡷",
    "GX": "ṇo̱ṃ²",
    "GHC": "niow²",
    "explanationEN": "wonderful",
    "explanationCN": "美妙"
  },
  {
    "character": "𗇰",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "to think of; to be long for",
    "explanationCN": "想;要做多"
  },
  {
    "character": "𗕚",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "ten thousand",
    "explanationCN": "万"
  },
  {
    "character": "𘅉",
    "GX": "te¹",
    "GHC": "¹",
    "explanationEN": "chapter; grade; rank",
    "explanationCN": "章;年级;排"
  },
  {
    "character": "𘜇",
    "GX": "tṣhao̱¹",
    "GHC": "tśhio¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗘈",
    "GX": "rŋwi̱r²",
    "GHC": "ŋwer²",
    "explanationEN": "slack; lax; dirty",
    "explanationCN": "松弛;宽松;脏"
  },
  {
    "character": "𗸯",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "benevolence; humanity",
    "explanationCN": "仁;人类"
  },
  {
    "character": "𘙗",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "enough; sufficient",
    "explanationCN": "足够;足够"
  },
  {
    "character": "𘝿",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "proverb; saying",
    "explanationCN": "谚语;谚语"
  },
  {
    "character": "𘜼",
    "GX": "mpho²",
    "GHC": "phjo̱²",
    "explanationEN": "gentle; harmonious",
    "explanationCN": "温柔;和谐"
  },
  {
    "character": "𘜞",
    "GX": "tse̱²",
    "GHC": "tsej²",
    "explanationEN": "temporary",
    "explanationCN": "临时"
  },
  {
    "character": "𗈁",
    "GX": "nvu¹",
    "GHC": "wju̱¹",
    "explanationEN": "sad; sorrowful",
    "explanationCN": "伤心;悲哀"
  },
  {
    "character": "𗱟",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to hide; to conceal",
    "explanationCN": "躲藏起来;隐藏"
  },
  {
    "character": "𗱭",
    "GX": "śiw²",
    "GHC": "śjiw²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗲂",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "to bake",
    "explanationCN": "烘烤"
  },
  {
    "character": "𘆓",
    "GX": "lha²",
    "GHC": "lhja²",
    "explanationEN": "soft; lithe",
    "explanationCN": "软;轻盈"
  },
  {
    "character": "𗌴",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "junket; fruit jelly",
    "explanationCN": "中介人;水果果冻"
  },
  {
    "character": "𘘓",
    "GX": "qhwe̱¹",
    "GHC": "khwej¹",
    "explanationEN": "to expand; to spread; luxuriant; lush",
    "explanationCN": "扩展;传播;华丽;郁郁葱葱"
  },
  {
    "character": "𗶐",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "younger sister",
    "explanationCN": "妹妹"
  },
  {
    "character": "𗰫",
    "GX": "to̱¹",
    "GHC": "to¹",
    "explanationEN": "dark; black",
    "explanationCN": "黑暗;黑"
  },
  {
    "character": "𘄱",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘔗",
    "GX": "ṇiṃ¹",
    "GHC": "njĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘔛",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣²",
    "explanationEN": "red",
    "explanationCN": "红"
  },
  {
    "character": "𘑠",
    "GX": "rvwo̱r²",
    "GHC": "wor²",
    "explanationEN": "calf",
    "explanationCN": "小腿"
  },
  {
    "character": "𘘸",
    "GX": "ŋgi²",
    "GHC": "gji̱²",
    "explanationEN": "full; plump",
    "explanationCN": "满;丰满"
  },
  {
    "character": "𘘷",
    "GX": "rvwai̱r¹",
    "GHC": "wier¹",
    "explanationEN": "man; male; boy",
    "explanationCN": "男人;雄;男孩"
  },
  {
    "character": "𘙘",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "singing aloud",
    "explanationCN": "大声唱歌"
  },
  {
    "character": "𘞁",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "children",
    "explanationCN": "孩子"
  },
  {
    "character": "𘝋",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "wing",
    "explanationCN": "翅膀"
  },
  {
    "character": "𗱣",
    "GX": "nvi¹",
    "GHC": "wji̱¹",
    "explanationEN": "to hide; to conceal",
    "explanationCN": "躲藏起来;隐藏"
  },
  {
    "character": "𗕓",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "still; quiet",
    "explanationCN": "还;安静"
  },
  {
    "character": "𘝵",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "pron. self; oneself",
    "explanationCN": "自我"
  },
  {
    "character": "𗕙",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "conceited; arrogant",
    "explanationCN": "自负;傲慢"
  },
  {
    "character": "𗕘",
    "GX": "ŋə̱¹",
    "GHC": "ŋə¹",
    "explanationEN": "I; me",
    "explanationCN": "我;我"
  },
  {
    "character": "𗲚",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "grave; tomb",
    "explanationCN": "坟墓;墓"
  },
  {
    "character": "𗉩",
    "GX": "ŋgo¹",
    "GHC": "gio̱¹",
    "explanationEN": "to bite",
    "explanationCN": "咬人"
  },
  {
    "character": "𗉓",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "house; building",
    "explanationCN": "房子;建筑"
  },
  {
    "character": "𗰯",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "to flatter; to fawn on",
    "explanationCN": "奉承;讨好"
  },
  {
    "character": "𗕐",
    "GX": "kəh¹",
    "GHC": "kjɨ̣¹",
    "explanationEN": "to fear.ʙ",
    "explanationCN": "恐惧。"
  },
  {
    "character": "𗱑",
    "GX": "tśiw²",
    "GHC": "tśjiw²",
    "explanationEN": "burnt; charred",
    "explanationCN": "烧毁;烧 焦"
  },
  {
    "character": "𗲳",
    "GX": "rdźwər²",
    "GHC": "dźjwɨr²",
    "explanationEN": "mill; millstones",
    "explanationCN": "磨;磨石"
  },
  {
    "character": "𘒄",
    "GX": "tṣhao̱¹",
    "GHC": "tśhio¹",
    "explanationEN": "formation",
    "explanationCN": "编队"
  },
  {
    "character": "𗶆",
    "GX": "γwa̱¹",
    "GHC": "ɣwa¹",
    "explanationEN": "clever wife",
    "explanationCN": "聪明的妻子"
  },
  {
    "character": "𗸪",
    "GX": "ryar¹",
    "GHC": "ˑjar¹",
    "explanationEN": "the eighth",
    "explanationCN": "第八个"
  },
  {
    "character": "𗸰",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗉋",
    "GX": "tṣao̱ṃ¹",
    "GHC": "tśiow¹",
    "explanationEN": "to gather; to assemble",
    "explanationCN": "聚集;组装"
  },
  {
    "character": "𗉠",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "camel",
    "explanationCN": "骆驼"
  },
  {
    "character": "𗉙",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "mad; insane",
    "explanationCN": "狂;疯"
  },
  {
    "character": "𗉛",
    "GX": "źih¹",
    "GHC": "źjị¹",
    "explanationEN": "vexed; worried",
    "explanationCN": "困扰;担心"
  },
  {
    "character": "𗉫",
    "GX": "ŋqhe̱¹",
    "GHC": "khe̱j¹",
    "explanationEN": "recreation; game",
    "explanationCN": "娱乐;游戏"
  },
  {
    "character": "𗰰",
    "GX": "rkir²",
    "GHC": "kjir²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘟡",
    "GX": "lho²",
    "GHC": "lhə²",
    "explanationEN": "butter; cheese",
    "explanationCN": "黄油;奶酪"
  },
  {
    "character": "𘔊",
    "GX": "paə̱¹",
    "GHC": "piə¹",
    "explanationEN": "gorgeous; magnificent",
    "explanationCN": "华丽;宏伟"
  },
  {
    "character": "𗈕",
    "GX": "ẓai̱²",
    "GHC": "źie²",
    "explanationEN": "to boil in a covered pot over a slow fire; to braise",
    "explanationCN": "在有盖的锅中用慢火煮;炖"
  },
  {
    "character": "𗈊",
    "GX": "ẓai̱²",
    "GHC": "źie²",
    "explanationEN": "to boil in a covered pot over a slow fire; to braise",
    "explanationCN": "在有盖的锅中用慢火煮;炖"
  },
  {
    "character": "𗕤",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "to seek for happiness",
    "explanationCN": "寻求快乐"
  },
  {
    "character": "𗌾",
    "GX": "thwə²",
    "GHC": "thjwɨ²",
    "explanationEN": "to combine; to concentrate",
    "explanationCN": "组合在一起;集中精力"
  },
  {
    "character": "𗱓",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣;njɨ̣²",
    "explanationEN": "close; intimate",
    "explanationCN": "关闭;亲密"
  },
  {
    "character": "𗱰",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "milk dregs",
    "explanationCN": "牛奶渣"
  },
  {
    "character": "𗍜",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "broad; wide; shallow",
    "explanationCN": "广泛;宽;浅"
  },
  {
    "character": "𘄟",
    "GX": "tsha̱²",
    "GHC": "tsha²",
    "explanationEN": "wisdom",
    "explanationCN": "智慧"
  },
  {
    "character": "𗟭",
    "GX": "vwo̱²",
    "GHC": "wo²",
    "explanationEN": "should; ought to",
    "explanationCN": "应该;应"
  },
  {
    "character": "𘓨",
    "GX": "ro̱r²",
    "GHC": "ror²",
    "explanationEN": "dirt; filth",
    "explanationCN": "污垢;污秽"
  },
  {
    "character": "𗗸",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "eddy; whirlpool",
    "explanationCN": "涡;漩涡"
  },
  {
    "character": "𗳘",
    "GX": "ŋwi̱¹",
    "GHC": "ŋwe¹",
    "explanationEN": "to be willing",
    "explanationCN": "愿意"
  },
  {
    "character": "𘘣",
    "GX": "yə²",
    "GHC": "ˑjɨ²",
    "explanationEN": "to say",
    "explanationCN": "说"
  },
  {
    "character": "𘘥",
    "GX": "yə¹",
    "GHC": "ˑjɨ¹",
    "explanationEN": "to say; to call",
    "explanationCN": "说;调用"
  },
  {
    "character": "𘙿",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "shaman; wizard",
    "explanationCN": "萨满;巫师"
  },
  {
    "character": "𘝇",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "gentle; harmonious",
    "explanationCN": "温柔;和谐"
  },
  {
    "character": "𗱧",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "to think of; to miss",
    "explanationCN": "想;错过"
  },
  {
    "character": "𗵴",
    "GX": "dza¹",
    "GHC": "dzja¹",
    "explanationEN": "stomach",
    "explanationCN": "胃"
  },
  {
    "character": "𗱬",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "devil; demon",
    "explanationCN": "魔鬼;恶魔"
  },
  {
    "character": "𗟠",
    "GX": "dźu¹",
    "GHC": "dźju¹",
    "explanationEN": "to prepare; to plan",
    "explanationCN": "准备;规划"
  },
  {
    "character": "𘄤",
    "GX": "phəh¹",
    "GHC": "phjɨ̣¹",
    "explanationEN": "aphorism; motto",
    "explanationCN": "格言;座右铭"
  },
  {
    "character": "𗲥",
    "GX": "tse²",
    "GHC": "tsjij²",
    "explanationEN": "mortar",
    "explanationCN": "臼"
  },
  {
    "character": "𘅟",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "to drive",
    "explanationCN": "开车"
  },
  {
    "character": "𘄻",
    "GX": "lwa¹",
    "GHC": "ljwa¹",
    "explanationEN": "lower limbs; legs",
    "explanationCN": "下肢;腿"
  },
  {
    "character": "𗡪",
    "GX": "tsi̱w²",
    "GHC": "tsew²",
    "explanationEN": "limitation",
    "explanationCN": "限度"
  },
  {
    "character": "𗕵",
    "GX": "dźwaw¹",
    "GHC": "dźjwa̱¹",
    "explanationEN": "to burst; to split",
    "explanationCN": "爆裂;拆分"
  },
  {
    "character": "𗰬",
    "GX": "to̱¹",
    "GHC": "to¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗸮",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "host; master",
    "explanationCN": "主机;主人"
  },
  {
    "character": "𘈄",
    "GX": "ntśə¹",
    "GHC": "tśjɨ̱¹",
    "explanationEN": "to embroider",
    "explanationCN": "刺绣"
  },
  {
    "character": "𘅢",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "to sit cross-legged",
    "explanationCN": "盘腿而坐"
  },
  {
    "character": "𘄵",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "leisure; free time",
    "explanationCN": "暇;闲暇"
  },
  {
    "character": "𗈂",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "pot; jar",
    "explanationCN": "罐;罐"
  },
  {
    "character": "𗈒",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "elbow",
    "explanationCN": "肘"
  },
  {
    "character": "𗘭",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗱞",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "aerolite",
    "explanationCN": "陨石"
  },
  {
    "character": "𗱮",
    "GX": "teṃh¹",
    "GHC": "tjɨj¹",
    "explanationEN": "to fry batter in a thin layer",
    "explanationCN": "将面糊煎成薄薄的一层"
  },
  {
    "character": "𗲔",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "pancake",
    "explanationCN": "煎饼"
  },
  {
    "character": "𗲆",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "true; real; genuine",
    "explanationCN": "真;真正;真正"
  },
  {
    "character": "𗲢",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "insect; worm",
    "explanationCN": "昆虫;蠕虫"
  },
  {
    "character": "𘒙",
    "GX": "twi̱¹",
    "GHC": "twe¹",
    "explanationEN": "to pile up; to stack",
    "explanationCN": "堆积起来;堆叠"
  },
  {
    "character": "𗌵",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗍒",
    "GX": "vah¹",
    "GHC": "¹",
    "explanationEN": "flag; banner",
    "explanationCN": "旗;旗帜"
  },
  {
    "character": "𘗹",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "to sing loudly",
    "explanationCN": "大声唱歌"
  },
  {
    "character": "𘓫",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "Qiangic people; Tibetan",
    "explanationCN": "羌人;藏语"
  },
  {
    "character": "𗗺",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "wolf",
    "explanationCN": "狼"
  },
  {
    "character": "𗗹",
    "GX": "śwaw²",
    "GHC": "śjwa̱²",
    "explanationEN": "bellyband; belt",
    "explanationCN": "肚带;带"
  },
  {
    "character": "𗗿",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𗘄",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "maggot",
    "explanationCN": "蛆"
  },
  {
    "character": "𗘆",
    "GX": "qi̱w²",
    "GHC": "kew²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶀",
    "GX": "nllu²",
    "GHC": "lju²",
    "explanationEN": "parrot",
    "explanationCN": "鹦鹉"
  },
  {
    "character": "𗡵",
    "GX": "nde¹",
    "GHC": "dji̱j¹",
    "explanationEN": "to smile; to laugh",
    "explanationCN": "微笑;笑"
  },
  {
    "character": "𘄹",
    "GX": "twi̱ṃ¹",
    "GHC": "twe¹",
    "explanationEN": "to brush; to whisk",
    "explanationCN": "刷;以打蛋"
  },
  {
    "character": "𘴅",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "to jump; to leap",
    "explanationCN": "跳跃;飞跃"
  },
  {
    "character": "𘄴",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "to desire; to want",
    "explanationCN": "欲望;想要"
  },
  {
    "character": "𘅖",
    "GX": "mbə¹",
    "GHC": "bjɨ̱¹",
    "explanationEN": "to tie up",
    "explanationCN": "捆绑"
  },
  {
    "character": "𘅗",
    "GX": "zih¹",
    "GHC": "zjị¹",
    "explanationEN": "boots",
    "explanationCN": "靴子"
  },
  {
    "character": "𘅭",
    "GX": "ta̱¹",
    "GHC": "¹",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𘅜",
    "GX": "ndi²",
    "GHC": "dji̱²",
    "explanationEN": "to change; to vary",
    "explanationCN": "改变;变化"
  },
  {
    "character": "𗳥",
    "GX": "ndźu²",
    "GHC": "dźju̱²",
    "explanationEN": "to exercise forbearance",
    "explanationCN": "行使宽容"
  },
  {
    "character": "𘘪",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "to get; to obtain",
    "explanationCN": "得到;获取"
  },
  {
    "character": "𘙌",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "PFV: IN; IMP: IN; 1DU: 1st dual indexation",
    "explanationCN": "PFV： IN;IMP： 在;1DU"
  },
  {
    "character": "𘝀",
    "GX": "mphi¹",
    "GHC": "phji̱¹",
    "explanationEN": "to fly",
    "explanationCN": "飞行"
  },
  {
    "character": "𘚝",
    "GX": "lu²",
    "GHC": "lu²",
    "explanationEN": "newborn baby; infant",
    "explanationCN": "赤子;婴儿"
  },
  {
    "character": "𘞃",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "a long narrow flag; streamer",
    "explanationCN": "一面长而窄的旗帜;流光"
  },
  {
    "character": "𘜝",
    "GX": "rtser²",
    "GHC": "tsjir²",
    "explanationEN": "thorn; splinter",
    "explanationCN": "刺;碎片"
  },
  {
    "character": "𗲦",
    "GX": "nvi¹",
    "GHC": "wji̱¹",
    "explanationEN": "to defraud; to swindle",
    "explanationCN": "欺诈;去骗"
  },
  {
    "character": "𘈧",
    "GX": "nde̱¹",
    "GHC": "de̱j¹",
    "explanationEN": "to pass on; transfer",
    "explanationCN": "传递;转移"
  },
  {
    "character": "𘗮",
    "GX": "dźuh²",
    "GHC": "dźjụ²",
    "explanationEN": "joking remarks; banter",
    "explanationCN": "开玩笑的言论;打趣"
  },
  {
    "character": "𘓧",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "luck; fortune",
    "explanationCN": "运气;财富"
  },
  {
    "character": "𗇟",
    "GX": "qhə̱²",
    "GHC": "khə²",
    "explanationEN": "monkey; ape",
    "explanationCN": "猴子;猿"
  },
  {
    "character": "𗈦",
    "GX": "lha²",
    "GHC": "lhạ²",
    "explanationEN": "to confuse; to puzzle",
    "explanationCN": "令人困惑;拼图"
  },
  {
    "character": "𗕡",
    "GX": "rzor¹",
    "GHC": "zjor¹",
    "explanationEN": "to redeem",
    "explanationCN": "兑换"
  },
  {
    "character": "𘟠",
    "GX": "dzu̱¹",
    "GHC": "dzu¹",
    "explanationEN": "to love.ᴀ",
    "explanationCN": "去爱。"
  },
  {
    "character": "𗕥",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "shining",
    "explanationCN": "闪亮"
  },
  {
    "character": "𗲓",
    "GX": "bao̱h¹",
    "GHC": "biọ¹",
    "explanationEN": "to break through; to spout",
    "explanationCN": "突破;到喷口"
  },
  {
    "character": "𗲛",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "four; the fourth",
    "explanationCN": "四;第四个"
  },
  {
    "character": "𗲰",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "to chop; to pound",
    "explanationCN": "砍;到 Pound"
  },
  {
    "character": "𗲟",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "ore",
    "explanationCN": "矿石"
  },
  {
    "character": "𗲯",
    "GX": "tswe¹",
    "GHC": "tsjwij¹",
    "explanationEN": "to rub; to knead",
    "explanationCN": "摩擦;揉捏"
  },
  {
    "character": "𘒉",
    "GX": "nlo̱¹",
    "GHC": "lo̱¹",
    "explanationEN": "kind; type",
    "explanationCN": "类;类型"
  },
  {
    "character": "𗌻",
    "GX": "rya̱r²",
    "GHC": "ˑjar²",
    "explanationEN": "to subdue; to tame",
    "explanationCN": "制服;驯服"
  },
  {
    "character": "𗘋",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "seven",
    "explanationCN": "七"
  },
  {
    "character": "𘘘",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "a currency unit",
    "explanationCN": "一个货币单位"
  },
  {
    "character": "𗉕",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "saint",
    "explanationCN": "圣人"
  },
  {
    "character": "𗎟",
    "GX": "ntha̱r¹",
    "GHC": "tha̱r¹",
    "explanationEN": "blindness",
    "explanationCN": "失明"
  },
  {
    "character": "𗚀",
    "GX": "tśo¹",
    "GHC": "tśjo¹",
    "explanationEN": "to go without a burden",
    "explanationCN": "无负担地去"
  },
  {
    "character": "𘄘",
    "GX": "γao̱ṃ¹",
    "GHC": "ɣiow¹",
    "explanationEN": "to surrender; to capitulate",
    "explanationCN": "投降;投降"
  },
  {
    "character": "𗡩",
    "GX": "hwi̱¹",
    "GHC": "xwe¹",
    "explanationEN": "grey; ashy color",
    "explanationCN": "灰色;灰白色"
  },
  {
    "character": "𗶅",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "to guard; to defend",
    "explanationCN": "守卫;为了防守"
  },
  {
    "character": "𘄿",
    "GX": "te¹",
    "GHC": "tjij¹",
    "explanationEN": "chapter; grade; rank",
    "explanationCN": "章;年级;排"
  },
  {
    "character": "𗳤",
    "GX": "lhwə²",
    "GHC": "lhjwɨ²",
    "explanationEN": "among; middle",
    "explanationCN": "中;中间"
  },
  {
    "character": "𘜄",
    "GX": "rŋwi̱r¹",
    "GHC": "ŋwer¹",
    "explanationEN": "to equate; to be equal",
    "explanationCN": "等同;平等"
  },
  {
    "character": "𘝎",
    "GX": "rvwi̱r²",
    "GHC": "wer²",
    "explanationEN": "a kind of silk",
    "explanationCN": "一种丝绸"
  },
  {
    "character": "𗕏",
    "GX": "rtśər²",
    "GHC": "tśjɨr²",
    "explanationEN": "conceited",
    "explanationCN": "自负"
  },
  {
    "character": "𗕜",
    "GX": "vwa̱²",
    "GHC": "wa²",
    "explanationEN": "to hide; conceal",
    "explanationCN": "躲藏起来;隐瞒"
  },
  {
    "character": "𗕮",
    "GX": "ntśhi¹",
    "GHC": "tśhji̱¹",
    "explanationEN": "to pull",
    "explanationCN": "拉取"
  },
  {
    "character": "𗕴",
    "GX": "tseṃh¹",
    "GHC": "tsjɨ̣j¹",
    "explanationEN": "modest; humble",
    "explanationCN": "谦虚;卑微"
  },
  {
    "character": "𗘬",
    "GX": "swa¹",
    "GHC": "sjwa¹",
    "explanationEN": "time",
    "explanationCN": "时间"
  },
  {
    "character": "𗲠",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "hollow; void",
    "explanationCN": "空心;无效"
  },
  {
    "character": "𗲺",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "firm; solid",
    "explanationCN": "公司;固体"
  },
  {
    "character": "𘒑",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "food for army",
    "explanationCN": "军队的食物"
  },
  {
    "character": "𗘛",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "to dye",
    "explanationCN": "染色"
  },
  {
    "character": "𗸲",
    "GX": "rzur²",
    "GHC": "zjur²",
    "explanationEN": "to give birth",
    "explanationCN": "生育"
  },
  {
    "character": "𗙹",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "the moon",
    "explanationCN": "月亮"
  },
  {
    "character": "𗰳",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "bear",
    "explanationCN": "熊"
  },
  {
    "character": "𘈅",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "the front of a Chinese gown",
    "explanationCN": "中式礼服的正面"
  },
  {
    "character": "𘞅",
    "GX": "nlə¹",
    "GHC": "la¹",
    "explanationEN": "streamer",
    "explanationCN": "流光"
  },
  {
    "character": "𗕨",
    "GX": "llo̱ṃh¹",
    "GHC": "lọ¹",
    "explanationEN": "to love",
    "explanationCN": "去爱"
  },
  {
    "character": "𗉘",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "demonstrative pronoun; POT: potential",
    "explanationCN": "民主党;经验"
  },
  {
    "character": "𗘅",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "pig; hog",
    "explanationCN": "猪;猪"
  },
  {
    "character": "𗎣",
    "GX": "pao̱ṃ¹",
    "GHC": "piow¹",
    "explanationEN": "boundary; boder",
    "explanationCN": "边界;博德"
  },
  {
    "character": "𗈣",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "slanting; inclined; crooked",
    "explanationCN": "斜;倾向;歪"
  },
  {
    "character": "𗕱",
    "GX": "γai̱¹",
    "GHC": "ɣie¹",
    "explanationEN": "height (of a person)",
    "explanationCN": "身高 （一个人）"
  },
  {
    "character": "𗱺",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "steed; fine horse",
    "explanationCN": "骏马;好马"
  },
  {
    "character": "𗲧",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "end; east",
    "explanationCN": "结束;东"
  },
  {
    "character": "𗍙",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "curtain; screen",
    "explanationCN": "窗帘;屏幕"
  },
  {
    "character": "𗟣",
    "GX": "nllə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "to repent",
    "explanationCN": "悔改"
  },
  {
    "character": "𗵷",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "to give up; to abandon",
    "explanationCN": "放弃;放弃"
  },
  {
    "character": "𗵷",
    "GX": "śe¹",
    "GHC": "¹",
    "explanationEN": "to give up; to abandon",
    "explanationCN": "放弃;放弃"
  },
  {
    "character": "𘄠",
    "GX": "tśha²",
    "GHC": "tśhja²",
    "explanationEN": "to shoot an arrow",
    "explanationCN": "射箭"
  },
  {
    "character": "𘈲",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "old and shabby",
    "explanationCN": "又旧又破"
  },
  {
    "character": "𘗾",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "to butcher; to sacrifice",
    "explanationCN": "屠夫;牺牲"
  },
  {
    "character": "𘅸",
    "GX": "nli¹",
    "GHC": "lji̱¹",
    "explanationEN": "trousers; pants",
    "explanationCN": "裤子;裤子"
  },
  {
    "character": "𘑻",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘙟",
    "GX": "lhao̱h²",
    "GHC": "lhiọ²",
    "explanationEN": "neck",
    "explanationCN": "脖子"
  },
  {
    "character": "𘙢",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "deafness",
    "explanationCN": "耳聋"
  },
  {
    "character": "𗡹",
    "GX": "rqo̱ṃr²",
    "GHC": "kowr²",
    "explanationEN": "to like; to desire",
    "explanationCN": "喜欢;欲望"
  },
  {
    "character": "𗟩",
    "GX": "ra?",
    "GHC": "ra?",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗲻",
    "GX": "ntha̱¹",
    "GHC": "tha̱¹",
    "explanationEN": "to suppress; to stifle",
    "explanationCN": "压制;扼杀"
  },
  {
    "character": "𘜆",
    "GX": "γuo¹",
    "GHC": "ˑio̱w¹",
    "explanationEN": "wrestling",
    "explanationCN": "摔跤"
  },
  {
    "character": "𗈥",
    "GX": "ndẓae̱ṃ²",
    "GHC": "dźiej²",
    "explanationEN": "lascivious; licentious",
    "explanationCN": "好色;放肆"
  },
  {
    "character": "𗗳",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𘅡",
    "GX": "nse¹",
    "GHC": "sji̱j¹",
    "explanationEN": "evidence; proof",
    "explanationCN": "证据;证明"
  },
  {
    "character": "𗈙",
    "GX": "ntśu¹",
    "GHC": "tśju̱¹",
    "explanationEN": "to envy; to harm",
    "explanationCN": "嫉妒;伤害"
  },
  {
    "character": "𗕦",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "restrained; reserved",
    "explanationCN": "克制;保留"
  },
  {
    "character": "𗶏",
    "GX": "nlu²",
    "GHC": "lju̱²",
    "explanationEN": "imperial concubine",
    "explanationCN": "妃"
  },
  {
    "character": "𘔘",
    "GX": "hu̱ṃ¹",
    "GHC": "xũ¹",
    "explanationEN": "red",
    "explanationCN": "红"
  },
  {
    "character": "𗲘",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "to complain; to grumble",
    "explanationCN": "投诉;抱怨"
  },
  {
    "character": "𘄗",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "to stop; to rest",
    "explanationCN": "停止;休息"
  },
  {
    "character": "𘙑",
    "GX": "lhoh²",
    "GHC": "lhjọ²",
    "explanationEN": "to capture; to obtain",
    "explanationCN": "捕获;获取"
  },
  {
    "character": "𘜿",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "jerked meat",
    "explanationCN": "肉干"
  },
  {
    "character": "𗎠",
    "GX": "ryer²",
    "GHC": "ˑji̱r²",
    "explanationEN": "tassel; a piece of cloth",
    "explanationCN": "流苏;一块布"
  },
  {
    "character": "𘒎",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r²",
    "explanationEN": "place; site; market",
    "explanationCN": "地方;网站;市场"
  },
  {
    "character": "𗉪",
    "GX": "tṣhae̱ṃ²",
    "GHC": "tśhiəj²",
    "explanationEN": "vexation; worry",
    "explanationCN": "烦恼;担心"
  },
  {
    "character": "𘅎",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "happy; delighted",
    "explanationCN": "快乐;高兴"
  },
  {
    "character": "𘘽",
    "GX": "mme¹",
    "GHC": "¹",
    "explanationEN": "tail; end; back",
    "explanationCN": "尾巴;结束;返回"
  },
  {
    "character": "𗍛",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "fast; rapid; speech; word",
    "explanationCN": "快;快速;演讲;词"
  },
  {
    "character": "𗕛",
    "GX": "te̱¹",
    "GHC": "tej¹",
    "explanationEN": "well-proportioned",
    "explanationCN": "匀称"
  },
  {
    "character": "𗲀",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "stone roller",
    "explanationCN": "㧎"
  },
  {
    "character": "𗸧",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "",
    "explanationCN": ""
  },
  {
    "character": "𗳬",
    "GX": "dwu²",
    "GHC": "djwu²",
    "explanationEN": "to know; to realize",
    "explanationCN": "要知道;实现"
  },
  {
    "character": "𘑸",
    "GX": "ro̱ṃr¹",
    "GHC": "rowr¹",
    "explanationEN": "withered; skinny",
    "explanationCN": "枯萎;瘦"
  },
  {
    "character": "𗕬",
    "GX": "śə²",
    "GHC": "śjɨ²",
    "explanationEN": "light; not heavy",
    "explanationCN": "光;轻"
  },
  {
    "character": "𘅘",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "to spread; to pave",
    "explanationCN": "传播;铺路"
  },
  {
    "character": "𘝍",
    "GX": "tśuh²",
    "GHC": "tśjụ²",
    "explanationEN": "wing",
    "explanationCN": "翅膀"
  },
  {
    "character": "𗇸",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "daylight; daytime",
    "explanationCN": "日光;白天"
  },
  {
    "character": "𗈃",
    "GX": "nsu¹",
    "GHC": "sju̱¹",
    "explanationEN": "deer",
    "explanationCN": "鹿"
  },
  {
    "character": "𗸨",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "seven; the seventh",
    "explanationCN": "七;第七"
  },
  {
    "character": "𗉚",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "blood relations",
    "explanationCN": "嫡亲"
  },
  {
    "character": "𗕋",
    "GX": "rler¹",
    "GHC": "lji̱r¹",
    "explanationEN": "plough",
    "explanationCN": "犁"
  },
  {
    "character": "𘇥",
    "GX": "pho̱ṃh²",
    "GHC": "phọ²",
    "explanationEN": "lame",
    "explanationCN": "跛"
  },
  {
    "character": "𘜉",
    "GX": "phi²",
    "GHC": "phji²",
    "explanationEN": "to lose; to give up",
    "explanationCN": "输掉₂"
  },
  {
    "character": "𘒒",
    "GX": "nlo̱²",
    "GHC": "lo̱²",
    "explanationEN": "to exterminate; to wipe out",
    "explanationCN": "消灭;消灭"
  },
  {
    "character": "𘃳",
    "GX": "kiw¹",
    "GHC": "kjiwr¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗳵",
    "GX": "ndzwə¹",
    "GHC": "dzjwɨ̱¹",
    "explanationEN": "to speed; to gallop",
    "explanationCN": "速度;驰骋"
  },
  {
    "character": "𗰷",
    "GX": "rzwə̱r¹",
    "GHC": "zwər¹",
    "explanationEN": "to rinse; to wash",
    "explanationCN": "冲洗;洗涤"
  },
  {
    "character": "𗇿",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "disease; illness",
    "explanationCN": "疾病;疾病"
  },
  {
    "character": "𗱾",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "to admire",
    "explanationCN": "欣赏"
  },
  {
    "character": "𗱹",
    "GX": "rzi̱wr¹",
    "GHC": "zewr¹",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𗸋",
    "GX": "rtsi̱wr²",
    "GHC": "tsewr²",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𗕟",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "broken",
    "explanationCN": "破碎"
  },
  {
    "character": "𗲮",
    "GX": "rẓae̱r²",
    "GHC": "ziejr²",
    "explanationEN": "incomplete; different",
    "explanationCN": "不完全的;不同"
  },
  {
    "character": "𗸇",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "steps; stairs",
    "explanationCN": "步骤;楼梯"
  },
  {
    "character": "𘞈",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "unlined garment",
    "explanationCN": "无衬里服装"
  },
  {
    "character": "𘆊",
    "GX": "γoṃ¹",
    "GHC": "ɣjow¹",
    "explanationEN": "source",
    "explanationCN": "源"
  },
  {
    "character": "𘆆",
    "GX": "le¹",
    "GHC": "ljij¹",
    "explanationEN": "ashamed; abashed",
    "explanationCN": "羞;羞愧"
  },
  {
    "character": "𘆇",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "shame; disgrace",
    "explanationCN": "羞耻;耻辱"
  },
  {
    "character": "𘅿",
    "GX": "buh¹",
    "GHC": "bjụ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗕎",
    "GX": "nni̱w²",
    "GHC": "ne̱w²",
    "explanationEN": "to be smooth and steady",
    "explanationCN": "平稳稳定"
  },
  {
    "character": "𗈓",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "winecup",
    "explanationCN": "酒杯"
  },
  {
    "character": "𘇦",
    "GX": "kweṃh¹",
    "GHC": "kjwɨ̣j¹",
    "explanationEN": "paper",
    "explanationCN": "纸"
  },
  {
    "character": "𗱫",
    "GX": "nsu¹",
    "GHC": "sju̱¹",
    "explanationEN": "love; admiration",
    "explanationCN": "爱;钦佩"
  },
  {
    "character": "𗷸",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "son; man",
    "explanationCN": "儿子;男人"
  },
  {
    "character": "𗷬",
    "GX": "rtśhwo̱r²",
    "GHC": "tśhjwor²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗲑",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "tiredness",
    "explanationCN": "疲劳"
  },
  {
    "character": "𘇩",
    "GX": "ṇi¹",
    "GHC": "nji¹",
    "explanationEN": "magic arts",
    "explanationCN": "魔术"
  },
  {
    "character": "𗱢",
    "GX": "na¹",
    "GHC": "nja¹",
    "explanationEN": "PFV: DOWN; IMP: DOWN",
    "explanationCN": "PFV： 下降;IMP：下"
  },
  {
    "character": "𘃵",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "direction; orientation",
    "explanationCN": "方向;取向"
  },
  {
    "character": "𘆃",
    "GX": "bəh¹",
    "GHC": "bjɨ̣¹",
    "explanationEN": "ape",
    "explanationCN": "猿"
  },
  {
    "character": "𗈅",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "to return; to roll",
    "explanationCN": "返回;滚动"
  },
  {
    "character": "𗳶",
    "GX": "tṣhai̱¹",
    "GHC": "tśhie¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘇙",
    "GX": "vwa̱ṃ²",
    "GHC": "wã²",
    "explanationEN": "to support; to bring up",
    "explanationCN": "支持;调出"
  },
  {
    "character": "𘑙",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "fish",
    "explanationCN": "鱼"
  },
  {
    "character": "𗈛",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "rare; thin",
    "explanationCN": "罕见;薄"
  },
  {
    "character": "𗈚",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "discontinuity; isolation",
    "explanationCN": "间断;隔离"
  },
  {
    "character": "𗲨",
    "GX": "rzir¹",
    "GHC": "zjir¹",
    "explanationEN": "heavy; cumbersome",
    "explanationCN": "重;笨重"
  },
  {
    "character": "𘒐",
    "GX": "nlo̱¹",
    "GHC": "lo̱¹",
    "explanationEN": "pool efforts; cooperation",
    "explanationCN": "汇集努力;合作"
  },
  {
    "character": "𗷳",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "to measure; to send bounds to",
    "explanationCN": "测量;将边界发送到"
  },
  {
    "character": "𗷹",
    "GX": "rdzu̱r¹",
    "GHC": "dzur¹",
    "explanationEN": "to kick",
    "explanationCN": "踢"
  },
  {
    "character": "𗷾",
    "GX": "lleh¹",
    "GHC": "ljịj¹",
    "explanationEN": "to wait upon; to serve",
    "explanationCN": "等待;上菜"
  },
  {
    "character": "𗸅",
    "GX": "tśhwiṃ¹",
    "GHC": "tśhjwĩ¹",
    "explanationEN": "to repeat; to duplicate",
    "explanationCN": "重复;复制"
  },
  {
    "character": "𗸆",
    "GX": "khoṃ¹",
    "GHC": "khjow¹",
    "explanationEN": "strong; powerful",
    "explanationCN": "强;强"
  },
  {
    "character": "𘑯",
    "GX": "γwu̱²",
    "GHC": "ˑwu²",
    "explanationEN": "brocade",
    "explanationCN": "锦"
  },
  {
    "character": "𗈌",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "to steal",
    "explanationCN": "偷窃"
  },
  {
    "character": "𗈉",
    "GX": "ni?",
    "GHC": "nji-?",
    "explanationEN": "to lose; to fail",
    "explanationCN": "输;失败"
  },
  {
    "character": "𗲫",
    "GX": "bə̱?",
    "GHC": "bə?",
    "explanationEN": "to sink",
    "explanationCN": "沉没"
  },
  {
    "character": "𘒌",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "leopard; panther",
    "explanationCN": "豹;豹"
  },
  {
    "character": "𗸒",
    "GX": "su̱¹",
    "GHC": "su¹",
    "explanationEN": "COMP: comparative case",
    "explanationCN": "COMP： 比较"
  },
  {
    "character": "𗸐",
    "GX": "ryər²",
    "GHC": "ˑjɨr²",
    "explanationEN": "diligent",
    "explanationCN": "勤"
  },
  {
    "character": "𘞆",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "thin; slight",
    "explanationCN": "薄;轻微"
  },
  {
    "character": "𗰹",
    "GX": "tso̱ṃ²",
    "GHC": "tsow²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗱈",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "tiger",
    "explanationCN": "老虎"
  },
  {
    "character": "𗷲",
    "GX": "giṃ¹",
    "GHC": "gjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗸏",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "to abandon; to give up",
    "explanationCN": "放弃;放弃"
  },
  {
    "character": "𗱙",
    "GX": "rqu̱r¹",
    "GHC": "kur¹",
    "explanationEN": "clumsy",
    "explanationCN": "笨拙"
  },
  {
    "character": "𗲄",
    "GX": "tṣhao̱ṃ¹",
    "GHC": "tśhiow¹",
    "explanationEN": "to knit; to wave",
    "explanationCN": "编织;挥手"
  },
  {
    "character": "𘘋",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "devil; demon",
    "explanationCN": "魔鬼;恶魔"
  },
  {
    "character": "𗕿",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "kind; loving",
    "explanationCN": "类;爱"
  },
  {
    "character": "𗕾",
    "GX": "ku¹",
    "GHC": "kju¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗕻",
    "GX": "qho̱¹",
    "GHC": "kho¹",
    "explanationEN": "ditch",
    "explanationCN": "渠"
  },
  {
    "character": "𗈝",
    "GX": "tsi̱ṃ¹",
    "GHC": "tsẽ¹",
    "explanationEN": "to hate; to swear",
    "explanationCN": "憎恨;发誓"
  },
  {
    "character": "𗖥",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "to advise; to urge",
    "explanationCN": "提供建议;敦促"
  },
  {
    "character": "𗇲",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "toil; hard work",
    "explanationCN": "辛劳;苦功"
  },
  {
    "character": "𗗆",
    "GX": "si̱ṃ¹",
    "GHC": "sẽ¹",
    "explanationEN": "Buddhist monk",
    "explanationCN": "僧"
  },
  {
    "character": "𗈋",
    "GX": "rtsu̱r¹",
    "GHC": "tsur¹",
    "explanationEN": "winter",
    "explanationCN": "冬"
  },
  {
    "character": "𗖼",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "lazy; idle",
    "explanationCN": "懒惰;怠"
  },
  {
    "character": "𗕷",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "flat; equal",
    "explanationCN": "平;平等"
  },
  {
    "character": "𗴨",
    "GX": "səh¹",
    "GHC": "sjɨ̣¹",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𘜎",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "enough; sufficient",
    "explanationCN": "足够;足够"
  },
  {
    "character": "𘜐",
    "GX": "ndza̱¹",
    "GHC": "dza̱¹",
    "explanationEN": "justice; righteousness",
    "explanationCN": "正义;义"
  },
  {
    "character": "𗲕",
    "GX": "tsi̱¹",
    "GHC": "tse¹",
    "explanationEN": "button",
    "explanationCN": "按钮"
  },
  {
    "character": "𗉄",
    "GX": "dẓaa̱¹",
    "GHC": "dźia¹",
    "explanationEN": "to stir-fry",
    "explanationCN": "炒菜"
  },
  {
    "character": "𗴧",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "to change; to make believe",
    "explanationCN": "改变;让我们相信"
  },
  {
    "character": "𗖙",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "to speak; to talk; to tell",
    "explanationCN": "说话;交谈;告诉"
  },
  {
    "character": "𘇰",
    "GX": "tśhiṃ¹",
    "GHC": "tśhjĩ¹",
    "explanationEN": "old; stale",
    "explanationCN": "老;陈旧"
  },
  {
    "character": "𗇞",
    "GX": "qho̱ṃ¹",
    "GHC": "khow¹",
    "explanationEN": "hole; hollow",
    "explanationCN": "洞;空心"
  },
  {
    "character": "𗱔",
    "GX": "ha̱ṃ¹",
    "GHC": "xã¹",
    "explanationEN": "foolish; silly",
    "explanationCN": "愚蠢;憨"
  },
  {
    "character": "𘒕",
    "GX": "nto̱²",
    "GHC": "to̱²",
    "explanationEN": "peaceful; harmonious",
    "explanationCN": "和平;和谐"
  },
  {
    "character": "𗕶",
    "GX": "γa̱h²",
    "GHC": "ɣạ²",
    "explanationEN": "mad; crazy",
    "explanationCN": "狂;疯狂"
  },
  {
    "character": "𗴩",
    "GX": "səh¹",
    "GHC": "¹",
    "explanationEN": "bright; intelligent",
    "explanationCN": "明亮;智能"
  },
  {
    "character": "𗈽",
    "GX": "pi̱¹",
    "GHC": "pe¹",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𗖠",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "harmonious; mild",
    "explanationCN": "和谐;轻微"
  },
  {
    "character": "𘒚",
    "GX": "be̱¹",
    "GHC": "bej¹",
    "explanationEN": "to lose; to fail",
    "explanationCN": "输;失败"
  },
  {
    "character": "𗖉",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "insane",
    "explanationCN": "疯"
  },
  {
    "character": "𘒈",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "healthy; strong",
    "explanationCN": "健康;强"
  },
  {
    "character": "𗖨",
    "GX": "ri̱r¹",
    "GHC": "rer¹",
    "explanationEN": "peaceful; harmonious",
    "explanationCN": "和平;和谐"
  },
  {
    "character": "𘒛",
    "GX": "mba̱¹",
    "GHC": "ba̱¹",
    "explanationEN": "to forget",
    "explanationCN": "忘记"
  },
  {
    "character": "𗴍",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "quail",
    "explanationCN": "鹌鹑"
  },
  {
    "character": "𘆏",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "to suppress; to put down",
    "explanationCN": "压制;放下"
  },
  {
    "character": "𗱤",
    "GX": "tśeh²",
    "GHC": "tśjịj²",
    "explanationEN": "wallet; pocketbook",
    "explanationCN": "钱包;钱包"
  },
  {
    "character": "𗖅",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "to go along with; to lead; to guide",
    "explanationCN": "随;领导;前往指导"
  },
  {
    "character": "𗈄",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "to abuse; to swear; to curse",
    "explanationCN": "虐待;发誓;诅咒"
  },
  {
    "character": "𗱗",
    "GX": "tśeh¹",
    "GHC": "tśjịj¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘆒",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "to exchange; to change",
    "explanationCN": "交换;更改"
  },
  {
    "character": "𗖱",
    "GX": "γwu̱²",
    "GHC": "ˑwu²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗉊",
    "GX": "dźwe¹",
    "GHC": "dźjwij¹",
    "explanationEN": "burning hot",
    "explanationCN": "炎"
  },
  {
    "character": "𗗇",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "to confess",
    "explanationCN": "忏悔"
  },
  {
    "character": "𗖪",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "swelling",
    "explanationCN": "肿胀"
  },
  {
    "character": "𗇣",
    "GX": "qao̱²",
    "GHC": "kio²",
    "explanationEN": "to dislike; to detest",
    "explanationCN": "不喜欢;憎恶"
  },
  {
    "character": "𗇳",
    "GX": "qhao̱¹",
    "GHC": "khio¹",
    "explanationEN": "to detest.ʙ",
    "explanationCN": "憎恶。"
  },
  {
    "character": "𘒇",
    "GX": "tshi²",
    "GHC": "tshji²",
    "explanationEN": "to wait upon; to serve",
    "explanationCN": "等待;上菜"
  },
  {
    "character": "𗖈",
    "GX": "mpha¹",
    "GHC": "phja̱¹",
    "explanationEN": "to forbid; to ban",
    "explanationCN": "禁止;禁止"
  },
  {
    "character": "𗴦",
    "GX": "źaw²",
    "GHC": "źja̱²",
    "explanationEN": "main points; essentials",
    "explanationCN": "大意;基本会话"
  },
  {
    "character": "𗲋",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "happy; joyful",
    "explanationCN": "快乐;快乐"
  },
  {
    "character": "𗲌",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "river",
    "explanationCN": "河"
  },
  {
    "character": "𘒏",
    "GX": "ga¹",
    "GHC": "gja¹",
    "explanationEN": "army; soldier",
    "explanationCN": "军队;士兵"
  },
  {
    "character": "𗗉",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "to sing happily",
    "explanationCN": "快乐地唱歌"
  },
  {
    "character": "𗴎",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗗁",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "ashamed; abashed",
    "explanationCN": "羞;羞愧"
  },
  {
    "character": "𘒖",
    "GX": "nlo̱¹",
    "GHC": "lo̱¹",
    "explanationEN": "to gather; to assemble",
    "explanationCN": "聚集;组装"
  },
  {
    "character": "𗖦",
    "GX": "śwoṃ²",
    "GHC": "śjwow²",
    "explanationEN": "to dispatch; to send",
    "explanationCN": "调度;发送"
  },
  {
    "character": "𗗌",
    "GX": "ġo̱¹",
    "GHC": "go¹",
    "explanationEN": "house",
    "explanationCN": "房子"
  },
  {
    "character": "𗖲",
    "GX": "lhu¹",
    "GHC": "lhju¹",
    "explanationEN": "to increase; to add",
    "explanationCN": "增加;添加"
  },
  {
    "character": "𗲅",
    "GX": "tṣhwae̱ṃ¹",
    "GHC": "tśhiwəj¹",
    "explanationEN": "to tie; to fasten",
    "explanationCN": "打平;紧固"
  },
  {
    "character": "𗗃",
    "GX": "γwuh²",
    "GHC": "ˑwụ²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘙸",
    "GX": "lao̱¹",
    "GHC": "lio¹",
    "explanationEN": "string",
    "explanationCN": "字符串"
  },
  {
    "character": "𗌭",
    "GX": "qu̱¹",
    "GHC": "ku¹",
    "explanationEN": "so",
    "explanationCN": "所以"
  },
  {
    "character": "𗌮",
    "GX": "rmor¹",
    "GHC": "mjor¹",
    "explanationEN": "true; closes",
    "explanationCN": "真;关闭"
  },
  {
    "character": "𗖧",
    "GX": "yi²",
    "GHC": "ˑji²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗘮",
    "GX": "rnə̱r¹",
    "GHC": "nər¹",
    "explanationEN": "yellow",
    "explanationCN": "黄色"
  },
  {
    "character": "𘛽",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "body",
    "explanationCN": "身体"
  },
  {
    "character": "𗲡",
    "GX": "hi̱ṃ²",
    "GHC": "xẽ²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗲬",
    "GX": "ŋqaa̱²",
    "GHC": "kia̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗇩",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "ancestor; forefather",
    "explanationCN": "祖先;祖先"
  },
  {
    "character": "𗈔",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗳃",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "wall; stele",
    "explanationCN": "墙;碑"
  },
  {
    "character": "𗳾",
    "GX": "ntṣhaa̱²",
    "GHC": "tśhia̱²",
    "explanationEN": "slope",
    "explanationCN": "坡"
  },
  {
    "character": "𘈹",
    "GX": "yuo²",
    "GHC": "ˑjo̱w²",
    "explanationEN": "to love",
    "explanationCN": "去爱"
  },
  {
    "character": "𗲗",
    "GX": "rsər¹",
    "GHC": "sjɨr¹",
    "explanationEN": "full; filled",
    "explanationCN": "满;㿙"
  },
  {
    "character": "𗈖",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to scold; to rebuke; to dress down",
    "explanationCN": "责骂;斥责;穿得休闲"
  },
  {
    "character": "𗴆",
    "GX": "dźwə²",
    "GHC": "dźjwɨ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘇬",
    "GX": "rtswar¹",
    "GHC": "tsjwar¹",
    "explanationEN": "to know",
    "explanationCN": "要知道"
  },
  {
    "character": "𗹍",
    "GX": "mih²",
    "GHC": "mjị²",
    "explanationEN": "an official title",
    "explanationCN": "官方头衔"
  },
  {
    "character": "𗇭",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "to spread",
    "explanationCN": "传播"
  },
  {
    "character": "𗴁",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "great-great-grandson",
    "explanationCN": "曾曾孙"
  },
  {
    "character": "𘈵",
    "GX": "nih²",
    "GHC": "njị²",
    "explanationEN": "nephew; brother's child",
    "explanationCN": "侄子;哥哥的孩子"
  },
  {
    "character": "𗹒",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "politics; affairs",
    "explanationCN": "政治;事务"
  },
  {
    "character": "𗳍",
    "GX": "soh²",
    "GHC": "sjọ²",
    "explanationEN": "a kind of grass to make rain cape",
    "explanationCN": "一种制作雨披草的草"
  },
  {
    "character": "𗳉",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "fields; subfurbs",
    "explanationCN": "领域;子分支"
  },
  {
    "character": "𗳏",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘇭",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "to tie",
    "explanationCN": "打平"
  },
  {
    "character": "𘈷",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "son; child",
    "explanationCN": "儿子;孩子"
  },
  {
    "character": "𘈸",
    "GX": "ror¹",
    "GHC": "rjor¹",
    "explanationEN": "to spoil (a child)",
    "explanationCN": "宠坏（一个孩子）"
  },
  {
    "character": "𗹐",
    "GX": "twu̱h¹",
    "GHC": "twụ¹",
    "explanationEN": "loyal; devoted",
    "explanationCN": "忠诚;忠"
  },
  {
    "character": "𗹖",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "skilful; clever",
    "explanationCN": "巧;聪明"
  },
  {
    "character": "𗴄",
    "GX": "ryər²",
    "GHC": "ˑjɨr²",
    "explanationEN": "platform",
    "explanationCN": "平台"
  },
  {
    "character": "𗴂",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "white",
    "explanationCN": "成为白人"
  },
  {
    "character": "𘇯",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "giant salamander",
    "explanationCN": "娃娃鱼"
  },
  {
    "character": "𗹕",
    "GX": "do̱ṃ¹",
    "GHC": "dow¹",
    "explanationEN": "long narrow strips; a classifier",
    "explanationCN": "长而窄的条带;分类器"
  },
  {
    "character": "𗳿",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "risky mountainside",
    "explanationCN": "危险的山坡"
  },
  {
    "character": "𗶦",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "equality",
    "explanationCN": "平等"
  },
  {
    "character": "𘞘",
    "GX": "n·yiw¹",
    "GHC": "ˑjiw¹",
    "explanationEN": "species; seed",
    "explanationCN": "物种;种子"
  },
  {
    "character": "𘞛",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "ear",
    "explanationCN": "耳朵"
  },
  {
    "character": "𘞾",
    "GX": "bəh¹",
    "GHC": "bjɨ̣¹",
    "explanationEN": "skilful; clever",
    "explanationCN": "巧;聪明"
  },
  {
    "character": "𘝺",
    "GX": "vuh²",
    "GHC": "wjụ²",
    "explanationEN": "to bear (a burden)",
    "explanationCN": "承担 （负担）"
  },
  {
    "character": "𘟈",
    "GX": "nśə²",
    "GHC": "tśjɨ̱²",
    "explanationEN": "general name for certain musical instruments",
    "explanationCN": "某些乐器的通用名称"
  },
  {
    "character": "𘞙",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "profit; benefit",
    "explanationCN": "利润;效益"
  },
  {
    "character": "𘞜",
    "GX": "thwa̱ṃ²",
    "GHC": "thwã²",
    "explanationEN": "to break off",
    "explanationCN": "断开"
  },
  {
    "character": "𗃓",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "turbid; muddy",
    "explanationCN": "混浊;泥泞"
  },
  {
    "character": "𗷣",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "to eliminate; to remove",
    "explanationCN": "消除;删除"
  },
  {
    "character": "𗙏",
    "GX": "γai̱h²",
    "GHC": "ɣiẹ²",
    "explanationEN": "sound; sound",
    "explanationCN": "声音;声音"
  },
  {
    "character": "𗹅",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "to choke; to block",
    "explanationCN": "窒息;阻止"
  },
  {
    "character": "𗎂",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "patron of sheep",
    "explanationCN": "羊的守护神"
  },
  {
    "character": "𗘣",
    "GX": "rywər¹",
    "GHC": "ˑjwɨr¹",
    "explanationEN": "looks; appearance",
    "explanationCN": "看起来;外观"
  },
  {
    "character": "𗙱",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "arduous; difficult; hard; tough",
    "explanationCN": "艰巨;难;硬;艰难"
  },
  {
    "character": "𗟹",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "language; tongue",
    "explanationCN": "语言;舌"
  },
  {
    "character": "𘄃",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "lamb",
    "explanationCN": "羔羊"
  },
  {
    "character": "𗗢",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "dagger; knife",
    "explanationCN": "匕首;刀"
  },
  {
    "character": "𗙅",
    "GX": "rhə̱r¹",
    "GHC": "xər¹",
    "explanationEN": "to hum",
    "explanationCN": "哼唱"
  },
  {
    "character": "𗰦",
    "GX": "lwo̱¹",
    "GHC": "lwo¹",
    "explanationEN": "dim; dusky",
    "explanationCN": "䵨;昏暗"
  },
  {
    "character": "𗹋",
    "GX": "hwi̱ṃ¹",
    "GHC": "xwẽ¹",
    "explanationEN": "dim; dusky",
    "explanationCN": "䵨;昏暗"
  },
  {
    "character": "𗹌",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "new; fresh",
    "explanationCN": "新增功能;新鲜"
  },
  {
    "character": "𘄂",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "clear",
    "explanationCN": "清楚"
  },
  {
    "character": "𘜘",
    "GX": "rir¹",
    "GHC": "rjir¹",
    "explanationEN": "to get\\.a; to obtain.ᴀ",
    "explanationCN": "获取\\.a;获取。"
  },
  {
    "character": "𘇡",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "to set up; to build",
    "explanationCN": "进行设置;构建"
  },
  {
    "character": "𘙾",
    "GX": "ho̱ṃ¹",
    "GHC": "xow¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘓳",
    "GX": "rŋo̱ṃr²",
    "GHC": "ŋowr²",
    "explanationEN": "whole; complete",
    "explanationCN": "整个;完成"
  },
  {
    "character": "𘇎",
    "GX": "ṇa?",
    "GHC": "nja?",
    "explanationEN": "to renovate; to repair; to dredge ( a river, etc.)",
    "explanationCN": "翻新;修理;疏浚（河流等）"
  },
  {
    "character": "𘔭",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "money",
    "explanationCN": "钱"
  },
  {
    "character": "𗷩",
    "GX": "yeṃ²",
    "GHC": "ˑjɨj²",
    "explanationEN": "prison; jail",
    "explanationCN": "监狱;监狱"
  },
  {
    "character": "𘆶",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "livestock; domestic animals",
    "explanationCN": "牲畜;家畜"
  },
  {
    "character": "𘒽",
    "GX": "rkhwar¹",
    "GHC": "khjwar¹",
    "explanationEN": "old ox",
    "explanationCN": "老牛"
  },
  {
    "character": "𘙰",
    "GX": "li̱w²",
    "GHC": "ləw²",
    "explanationEN": "same; alike",
    "explanationCN": "相同;一样"
  },
  {
    "character": "𘇍",
    "GX": "γwu̱h²",
    "GHC": "ˑwụ²",
    "explanationEN": "domestic animals; steed",
    "explanationCN": "家畜;骏马"
  },
  {
    "character": "𘙨",
    "GX": "so̱ṃ²",
    "GHC": "sow²",
    "explanationEN": "to cry bitterly",
    "explanationCN": "痛哭"
  },
  {
    "character": "𘜛",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "to exchange",
    "explanationCN": "兑换"
  },
  {
    "character": "𗗗",
    "GX": "nye¹",
    "GHC": "ˑji̱j¹",
    "explanationEN": "exploits; achievements",
    "explanationCN": "利用;成就"
  },
  {
    "character": "𗙦",
    "GX": "dźiṃ¹",
    "GHC": "dźjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗠂",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "stagnant",
    "explanationCN": "停滞"
  },
  {
    "character": "𗘝",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "five",
    "explanationCN": "五"
  },
  {
    "character": "𘃽",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "to hold; to contain; to enter",
    "explanationCN": "持有;遏制;进入"
  },
  {
    "character": "𘜕",
    "GX": "rkir²",
    "GHC": "kjir²",
    "explanationEN": "to dare",
    "explanationCN": "敢于挑战"
  },
  {
    "character": "𘚃",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "grace; kindness",
    "explanationCN": "恩典;恩"
  },
  {
    "character": "𗗝",
    "GX": "nye¹",
    "GHC": "ˑji̱j¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𘘊",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𘞟",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "crime; guilt",
    "explanationCN": "犯罪;内疚"
  },
  {
    "character": "𘇘",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "string; rope; belt",
    "explanationCN": "字符串;绳;带"
  },
  {
    "character": "𘓹",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "palace",
    "explanationCN": "宫殿"
  },
  {
    "character": "𘓮",
    "GX": "ru̱r²",
    "GHC": "rur²",
    "explanationEN": "clean",
    "explanationCN": "干净"
  },
  {
    "character": "𗸥",
    "GX": "tuh²",
    "GHC": "tjụ²",
    "explanationEN": "to mate; to marry",
    "explanationCN": "交配;结婚"
  },
  {
    "character": "𘇅",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗃑",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "crooked; curved",
    "explanationCN": "歪;弯曲"
  },
  {
    "character": "𗌯",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "to send; to dispatch",
    "explanationCN": "发送;调度"
  },
  {
    "character": "𗷛",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "to expel",
    "explanationCN": "驱逐"
  },
  {
    "character": "𗍶",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "to carve",
    "explanationCN": "雕刻"
  },
  {
    "character": "𗘽",
    "GX": "thwə¹",
    "GHC": "thjwɨ¹",
    "explanationEN": "fear; dread",
    "explanationCN": "恐惧;恐惧"
  },
  {
    "character": "𗙎",
    "GX": "si̱w¹",
    "GHC": "sex¹",
    "explanationEN": "information; news",
    "explanationCN": "信息;新闻"
  },
  {
    "character": "𗌰",
    "GX": "pu̱h²",
    "GHC": "pụ²",
    "explanationEN": "old; aged",
    "explanationCN": "老;老"
  },
  {
    "character": "𗙲",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "jade necklace; net",
    "explanationCN": "翡翠项链;网"
  },
  {
    "character": "𗹁",
    "GX": "rmar¹",
    "GHC": "mjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘄝",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "to give birth to",
    "explanationCN": "生下"
  },
  {
    "character": "𘄍",
    "GX": "ba̱²",
    "GHC": "ba²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘄎",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "clear; unmixed",
    "explanationCN": "清楚;纯"
  },
  {
    "character": "𘔢",
    "GX": "qhwa̱h¹",
    "GHC": "khwạ¹",
    "explanationEN": "far",
    "explanationCN": "远"
  },
  {
    "character": "𗰛",
    "GX": "dzeh¹",
    "GHC": "dzjịj¹",
    "explanationEN": "to cross; to pass; to exceed",
    "explanationCN": "穿越;通过;超过"
  },
  {
    "character": "𗍻",
    "GX": "dźa²",
    "GHC": "dźja²",
    "explanationEN": "lamb",
    "explanationCN": "羔羊"
  },
  {
    "character": "𗙍",
    "GX": "khwaə̱?",
    "GHC": "khiwə?",
    "explanationEN": "to abuse; to swear",
    "explanationCN": "虐待;发誓"
  },
  {
    "character": "𗙔",
    "GX": "hwa̱ṃ¹",
    "GHC": "xwã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙣",
    "GX": "ha¹",
    "GHC": "xja¹",
    "explanationEN": "to condemn; to swear",
    "explanationCN": "谴责;发誓"
  },
  {
    "character": "𗟺",
    "GX": "pəh¹",
    "GHC": "pjɨ̣¹",
    "explanationEN": "suggestion; discussion",
    "explanationCN": "建议;讨论"
  },
  {
    "character": "𘄭",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "harm",
    "explanationCN": "伤害"
  },
  {
    "character": "𘘈",
    "GX": "rtśir¹",
    "GHC": "tśjir¹",
    "explanationEN": "sound of clamping the teeth",
    "explanationCN": "夹牙的声音"
  },
  {
    "character": "𘘟",
    "GX": "za̱¹",
    "GHC": "za¹",
    "explanationEN": "enemy",
    "explanationCN": "敌人"
  },
  {
    "character": "𗰥",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "garden",
    "explanationCN": "花园"
  },
  {
    "character": "𗙨",
    "GX": "ryer¹",
    "GHC": "ˑjijr¹",
    "explanationEN": "rapidly",
    "explanationCN": "迅速地"
  },
  {
    "character": "𗍽",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "to salute",
    "explanationCN": "致敬"
  },
  {
    "character": "𘆪",
    "GX": "tya²",
    "GHC": "tja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘆷",
    "GX": "rtar¹",
    "GHC": "tjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘇆",
    "GX": "rtso̱r²",
    "GHC": "tsor²",
    "explanationEN": "foal",
    "explanationCN": "驹"
  },
  {
    "character": "𘈠",
    "GX": "keh¹",
    "GHC": "kjịj¹",
    "explanationEN": "to obstruct; to block",
    "explanationCN": "阻碍;阻止"
  },
  {
    "character": "𘆸",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "grey",
    "explanationCN": "灰色"
  },
  {
    "character": "𘇏",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "to calm down; to arrange for",
    "explanationCN": "冷静下来;安排"
  },
  {
    "character": "𘆻",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "bridle",
    "explanationCN": "缰绳"
  },
  {
    "character": "𘙮",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "white",
    "explanationCN": "白"
  },
  {
    "character": "𘙱",
    "GX": "mbae̱¹",
    "GHC": "bie̱j¹",
    "explanationEN": "excrement of insects",
    "explanationCN": "昆虫的排泄物"
  },
  {
    "character": "𗙃",
    "GX": "liṃ¹",
    "GHC": "ljĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗹈",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "felt",
    "explanationCN": "毡"
  },
  {
    "character": "𘇣",
    "GX": "llao̱h¹",
    "GHC": "liọ¹",
    "explanationEN": "to mix; to stir",
    "explanationCN": "混合;搅拌"
  },
  {
    "character": "𗌱",
    "GX": "beṃ²",
    "GHC": "bjɨj²",
    "explanationEN": "to cheat; to swindle",
    "explanationCN": "作弊;去骗"
  },
  {
    "character": "𗷨",
    "GX": "eṃ²",
    "GHC": "²",
    "explanationEN": "prison; jail",
    "explanationCN": "监狱;监狱"
  },
  {
    "character": "𗗶",
    "GX": "nə̱?",
    "GHC": "nə?",
    "explanationEN": "fox",
    "explanationCN": "狐狸"
  },
  {
    "character": "𘴁",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "tail; east",
    "explanationCN": "尾巴;东"
  },
  {
    "character": "𗳩",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗸬",
    "GX": "lheṃ¹",
    "GHC": "lhjɨj¹",
    "explanationEN": "to hear; to listen",
    "explanationCN": "听;收听"
  },
  {
    "character": "𘅆",
    "GX": "swe¹",
    "GHC": "sjwij¹",
    "explanationEN": "to grind; to pestle",
    "explanationCN": "研磨;到 Pestle"
  },
  {
    "character": "𘔚",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "red",
    "explanationCN": "红"
  },
  {
    "character": "𘙁",
    "GX": "se̱²",
    "GHC": "sej²",
    "explanationEN": "ripe hide; pelt",
    "explanationCN": "成熟的皮肤;毛皮"
  },
  {
    "character": "𘗭",
    "GX": "dźuh²",
    "GHC": "dźjụ²",
    "explanationEN": "bait",
    "explanationCN": "诱饵"
  },
  {
    "character": "𗶊",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "younger sister",
    "explanationCN": "妹妹"
  },
  {
    "character": "𗙻",
    "GX": "tśo¹",
    "GHC": "tśjo¹",
    "explanationEN": "to indicate",
    "explanationCN": "以指示"
  },
  {
    "character": "𘃱",
    "GX": "dzwi̱w¹",
    "GHC": "dzwew¹",
    "explanationEN": "shoulder",
    "explanationCN": "肩膀"
  },
  {
    "character": "𘘖",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "grace; kindness",
    "explanationCN": "恩典;恩"
  },
  {
    "character": "𘔖",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "chin",
    "explanationCN": "下巴"
  },
  {
    "character": "𘘵",
    "GX": "so̱ṃ¹",
    "GHC": "sow¹",
    "explanationEN": "end; buttocks",
    "explanationCN": "结束;臀部"
  },
  {
    "character": "𘙄",
    "GX": "γwae̱ṃ²",
    "GHC": "ɣiwəj²",
    "explanationEN": "thin; feeble",
    "explanationCN": "薄;微弱"
  },
  {
    "character": "𘚙",
    "GX": "pə̱h¹",
    "GHC": "pə̣¹",
    "explanationEN": "smell of meat",
    "explanationCN": "肉味"
  },
  {
    "character": "𗉬",
    "GX": "gwe¹",
    "GHC": "gjwij¹",
    "explanationEN": "to offer sacrifices to god or ancestors",
    "explanationCN": "向上帝或祖先献祭"
  },
  {
    "character": "𗚂",
    "GX": "so²",
    "GHC": "sjo²",
    "explanationEN": "to be familiar with",
    "explanationCN": "熟悉"
  },
  {
    "character": "𘈭",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "god; deity; divinity",
    "explanationCN": "神;神;神"
  },
  {
    "character": "𗍠",
    "GX": "khiṃ¹",
    "GHC": "khjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗉵",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "to know; to understand",
    "explanationCN": "要做：LV，比较"
  },
  {
    "character": "𗉴",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "lean meat",
    "explanationCN": "瘦肉"
  },
  {
    "character": "𗰴",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "toil",
    "explanationCN": "辛劳"
  },
  {
    "character": "𗉯",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "pan",
    "explanationCN": "泛"
  },
  {
    "character": "𘈰",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj¹",
    "explanationEN": "to do harm; to damage; to impair",
    "explanationCN": "造成伤害;损害;损害"
  },
  {
    "character": "𗗷",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "noise",
    "explanationCN": "噪声"
  },
  {
    "character": "𗶕",
    "GX": "yaṃ²",
    "GHC": "jã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅄",
    "GX": "sa¹",
    "GHC": "sja¹",
    "explanationEN": "to do",
    "explanationCN": "待办事项"
  },
  {
    "character": "𗸫",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "to do",
    "explanationCN": "待办事项"
  },
  {
    "character": "𗸳",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "widowed; alone",
    "explanationCN": "寡;独自"
  },
  {
    "character": "𘞄",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "flag; to raise in wind",
    "explanationCN": "旗;在风中升起"
  },
  {
    "character": "𘝄",
    "GX": "rvwi̱r²",
    "GHC": "wer²",
    "explanationEN": "wing",
    "explanationCN": "翅膀"
  },
  {
    "character": "𘔍",
    "GX": "yu¹",
    "GHC": "ˑju̱¹",
    "explanationEN": "to present (a gift)",
    "explanationCN": "赠送 （一份礼物）"
  },
  {
    "character": "𘘀",
    "GX": "nśi¹",
    "GHC": "śji̱¹",
    "explanationEN": "livestock; domestic animals",
    "explanationCN": "牲畜;家畜"
  },
  {
    "character": "𗟧",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "to gain; to acquire; to obtain",
    "explanationCN": "获得;收购;获取"
  },
  {
    "character": "𗟰",
    "GX": "lhwi¹",
    "GHC": "lhjwi¹",
    "explanationEN": "to like the new and loathe the old",
    "explanationCN": "喜欢新的，讨厌旧的"
  },
  {
    "character": "𗘚",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "dark green",
    "explanationCN": "深绿色"
  },
  {
    "character": "𗘓",
    "GX": "hu¹",
    "GHC": "xju¹",
    "explanationEN": "empty; unoccupied",
    "explanationCN": "空;空置"
  },
  {
    "character": "𗸝",
    "GX": "γo̱ṃ¹",
    "GHC": "ɣow¹",
    "explanationEN": "dizzy",
    "explanationCN": "头晕"
  },
  {
    "character": "𗸜",
    "GX": "qhwə̱¹",
    "GHC": "khwə¹",
    "explanationEN": "half",
    "explanationCN": "半"
  },
  {
    "character": "𗍇",
    "GX": "ẓuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "deep black",
    "explanationCN": "深黑色"
  },
  {
    "character": "𗗲",
    "GX": "qhai̱h²",
    "GHC": "khiẹ²",
    "explanationEN": "to butcher",
    "explanationCN": "屠夫"
  },
  {
    "character": "𘄸",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "to do",
    "explanationCN": "生气"
  },
  {
    "character": "𗳞",
    "GX": "lha̱h¹",
    "GHC": "lhạ¹",
    "explanationEN": "to beg",
    "explanationCN": "乞求"
  },
  {
    "character": "𗳧",
    "GX": "mai̱h¹",
    "GHC": "miẹ¹",
    "explanationEN": "to make a concession; to yield; to give in",
    "explanationCN": "做出让步;让步;屈服"
  },
  {
    "character": "𘑵",
    "GX": "nthə¹",
    "GHC": "thjɨ̱¹",
    "explanationEN": "to revolve; to rotate; to spin",
    "explanationCN": "旋转;旋转;旋转"
  },
  {
    "character": "𘘶",
    "GX": "vo¹",
    "GHC": "wjo¹",
    "explanationEN": "not",
    "explanationCN": "不"
  },
  {
    "character": "𘈁",
    "GX": "ẓaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "wren",
    "explanationCN": "鹪鹩"
  },
  {
    "character": "𗉗",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "to lie; to sleep",
    "explanationCN": "撒谎;睡觉"
  },
  {
    "character": "𘅤",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "to write",
    "explanationCN": "写"
  },
  {
    "character": "𘝈",
    "GX": "dźih²",
    "GHC": "dźjar²",
    "explanationEN": "demon; devil",
    "explanationCN": "恶魔;魔鬼"
  },
  {
    "character": "𗘘",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "colored silk",
    "explanationCN": "彩色丝绸"
  },
  {
    "character": "𘄢",
    "GX": "yaw¹",
    "GHC": "ˑja̱¹",
    "explanationEN": "yes; okay",
    "explanationCN": "是的;好"
  },
  {
    "character": "𘇤",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "to tease; to play",
    "explanationCN": "挑逗;玩"
  },
  {
    "character": "𗳟",
    "GX": "vwe̱ṃ¹",
    "GHC": "wəj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘄷",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "stirrup",
    "explanationCN": "箍 筋"
  },
  {
    "character": "𘈬",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "a skilled workman",
    "explanationCN": "熟练的工人"
  },
  {
    "character": "𘔡",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "colored silk",
    "explanationCN": "彩色丝绸"
  },
  {
    "character": "𘑶",
    "GX": "tse¹",
    "GHC": "tsjij¹",
    "explanationEN": "he; it",
    "explanationCN": "他;它"
  },
  {
    "character": "𘘩",
    "GX": "kə²",
    "GHC": "kjɨ²",
    "explanationEN": "an animal looks like a deer",
    "explanationCN": "动物长得像鹿"
  },
  {
    "character": "𗶔",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "hat; cap",
    "explanationCN": "帽子;帽"
  },
  {
    "character": "𗟢",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "to grant; to award",
    "explanationCN": "授予;奖励"
  },
  {
    "character": "𘈱",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "bored; worried",
    "explanationCN": "无聊;担心"
  },
  {
    "character": "𘙕",
    "GX": "kə²",
    "GHC": "kjɨ²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𘙠",
    "GX": "qao̱ṃ¹",
    "GHC": "kiow¹",
    "explanationEN": "obstinate; stubborn",
    "explanationCN": "顽固;固执"
  },
  {
    "character": "𘙤",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "husband",
    "explanationCN": "老公"
  },
  {
    "character": "𗌸",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗶃",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘅇",
    "GX": "ti¹",
    "GHC": "tji¹",
    "explanationEN": "PROHIB",
    "explanationCN": "禁止"
  },
  {
    "character": "𘴆",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "respectful",
    "explanationCN": "尊敬的"
  },
  {
    "character": "𘅫",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "to do; to work; to manage",
    "explanationCN": "工作;位置"
  },
  {
    "character": "𗳦",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "even; equal",
    "explanationCN": "甚至;平等"
  },
  {
    "character": "𗳫",
    "GX": "lhih¹",
    "GHC": "lhjọ¹",
    "explanationEN": "to take; to marry",
    "explanationCN": "拿;结婚"
  },
  {
    "character": "𘔋",
    "GX": "thwu²",
    "GHC": "thjwu²",
    "explanationEN": "to borrow money",
    "explanationCN": "借钱"
  },
  {
    "character": "𘞀",
    "GX": "na²",
    "GHC": "lja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘔞",
    "GX": "ho̱ṃ¹",
    "GHC": "xow¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘇾",
    "GX": "dźih²",
    "GHC": "dźjị²",
    "explanationEN": "daughter",
    "explanationCN": "女儿"
  },
  {
    "character": "𘈂",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "thread",
    "explanationCN": "线"
  },
  {
    "character": "𘙅",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "belt; girdle",
    "explanationCN": "带;腰带"
  },
  {
    "character": "𘞋",
    "GX": "tseṃh¹",
    "GHC": "tsjɨj¹",
    "explanationEN": "full; packed",
    "explanationCN": "满;包装好的"
  },
  {
    "character": "𘗯",
    "GX": "nllo̱r¹",
    "GHC": "ljo̱r¹",
    "explanationEN": "false; fake",
    "explanationCN": "假;假"
  },
  {
    "character": "𘈨",
    "GX": "rnu̱r¹",
    "GHC": "nur¹",
    "explanationEN": "to indicate; to guide",
    "explanationCN": "表示;前往指导"
  },
  {
    "character": "𗌺",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗘒",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "hoof",
    "explanationCN": "蹄"
  },
  {
    "character": "𗉡",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "uneven; inconsistent",
    "explanationCN": "不平;不一致的"
  },
  {
    "character": "𗉢",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "hand",
    "explanationCN": "手"
  },
  {
    "character": "𗉳",
    "GX": "qwa̱h²",
    "GHC": "kwạ²",
    "explanationEN": "hoe",
    "explanationCN": "锄头"
  },
  {
    "character": "𗎝",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "wallet; pocketbook",
    "explanationCN": "钱包;钱包"
  },
  {
    "character": "𗎞",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "blindness",
    "explanationCN": "失明"
  },
  {
    "character": "𗎢",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗙿",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "to guard; to defend",
    "explanationCN": "守卫;为了防守"
  },
  {
    "character": "𗶈",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "female",
    "explanationCN": "女性"
  },
  {
    "character": "𘅑",
    "GX": "bo̱ṃ²",
    "GHC": "bow²",
    "explanationEN": "abashed; ashamed",
    "explanationCN": "羞愧;羞"
  },
  {
    "character": "𘄾",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "to move; to migrate",
    "explanationCN": "移动;迁移"
  },
  {
    "character": "𘈘",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "days; times",
    "explanationCN": "日;次"
  },
  {
    "character": "𘘼",
    "GX": "lhwi̱²",
    "GHC": "²",
    "explanationEN": "slow; lazy",
    "explanationCN": "慢;懒惰"
  },
  {
    "character": "𘙊",
    "GX": "lwi̱h²",
    "GHC": "lwẹ²",
    "explanationEN": "slow; lazy",
    "explanationCN": "慢;懒惰"
  },
  {
    "character": "𘒹",
    "GX": "lhu²",
    "GHC": "lhu²",
    "explanationEN": "to increase; to add",
    "explanationCN": "增加;添加"
  },
  {
    "character": "𘝊",
    "GX": "rmi̱r²",
    "GHC": "mer²",
    "explanationEN": "to puzzle; to confuse",
    "explanationCN": "解谜;混淆"
  },
  {
    "character": "𗘑",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "dark green",
    "explanationCN": "深绿色"
  },
  {
    "character": "𗘖",
    "GX": "hau̱²",
    "GHC": "xu²",
    "explanationEN": "hoof",
    "explanationCN": "蹄"
  },
  {
    "character": "𗉟",
    "GX": "ya¹",
    "GHC": "ˑja¹",
    "explanationEN": "cat",
    "explanationCN": "猫"
  },
  {
    "character": "𗍗",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "black",
    "explanationCN": "黑"
  },
  {
    "character": "𗍟",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "to defend",
    "explanationCN": "为了防守"
  },
  {
    "character": "𗟨",
    "GX": "lhwi¹",
    "GHC": "lhjwi¹",
    "explanationEN": "to take; to seize; to draw",
    "explanationCN": "拿;夺取;绘制"
  },
  {
    "character": "𘄡",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "wisdom",
    "explanationCN": "智慧"
  },
  {
    "character": "𘄦",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "bright; intelligent",
    "explanationCN": "明亮;智能"
  },
  {
    "character": "𘙖",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "vat; jar; crock",
    "explanationCN": "增值税;罐;缸"
  },
  {
    "character": "𘔠",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗍢",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "spade",
    "explanationCN": "铁锹"
  },
  {
    "character": "𗳯",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "to wrestle; to fight",
    "explanationCN": "摔跤;去战斗"
  },
  {
    "character": "𗉧",
    "GX": "tsheṃh¹",
    "GHC": "tshjɨ̣j¹",
    "explanationEN": "door",
    "explanationCN": "门"
  },
  {
    "character": "𗙼",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "ANTE: antessive case",
    "explanationCN": "ANTE：前动"
  },
  {
    "character": "𗸷",
    "GX": "lhweh²",
    "GHC": "lhjwịj²",
    "explanationEN": "to frighten; to scare",
    "explanationCN": "吓唬;吓唬"
  },
  {
    "character": "𗡤",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "to seek; to look for",
    "explanationCN": "寻找;寻找"
  },
  {
    "character": "𗶉",
    "GX": "rzər¹",
    "GHC": "zjɨr¹",
    "explanationEN": "beautiful; splendid",
    "explanationCN": "美丽;灿烂"
  },
  {
    "character": "𗶋",
    "GX": "rtsir¹",
    "GHC": "tsjir¹",
    "explanationEN": "wife",
    "explanationCN": "老婆"
  },
  {
    "character": "𗉨",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "five",
    "explanationCN": "五"
  },
  {
    "character": "𘆈",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "man",
    "explanationCN": "男人"
  },
  {
    "character": "𗱉",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "lack; fault",
    "explanationCN": "缺乏;故障"
  },
  {
    "character": "𗸀",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "appointment",
    "explanationCN": "约会"
  },
  {
    "character": "𘇨",
    "GX": "ẓwai̱¹",
    "GHC": "śiwe¹",
    "explanationEN": "shining white",
    "explanationCN": "闪亮的白色"
  },
  {
    "character": "𗰼",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "to arrange for",
    "explanationCN": "安排"
  },
  {
    "character": "𘞇",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "to thin down",
    "explanationCN": "瘦身"
  },
  {
    "character": "𗷱",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj¹",
    "explanationEN": "benefaction; beneficence",
    "explanationCN": "捐助;善行"
  },
  {
    "character": "𘈏",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "coarse; rough; rude",
    "explanationCN": "粗;粗糙;粗鲁"
  },
  {
    "character": "𗳸",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "chess playing",
    "explanationCN": "下棋"
  },
  {
    "character": "𗰻",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "to fear; to dread",
    "explanationCN": "恐惧;恐惧"
  },
  {
    "character": "𗱀",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "host; master",
    "explanationCN": "主机;主人"
  },
  {
    "character": "𗰿",
    "GX": "ywi²",
    "GHC": "ˑjwi²",
    "explanationEN": "to barter; to exchange",
    "explanationCN": "以物易物;兑换"
  },
  {
    "character": "𗳷",
    "GX": "tṣhau̱h¹",
    "GHC": "tśhjụ¹",
    "explanationEN": "to lure",
    "explanationCN": "引诱"
  },
  {
    "character": "𗳹",
    "GX": "tṣhau̱h¹",
    "GHC": "xjwɨ¹",
    "explanationEN": "to lure",
    "explanationCN": "引诱"
  },
  {
    "character": "𘒸",
    "GX": "fwə¹",
    "GHC": "xjwɨ¹",
    "explanationEN": "treasure",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗱌",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "to free oneself from…; to take off",
    "explanationCN": "将自己从中解放出来......;起飞"
  },
  {
    "character": "𗸁",
    "GX": "lwo̱²",
    "GHC": "lwo²",
    "explanationEN": "firm; strong",
    "explanationCN": "公司;强"
  },
  {
    "character": "𘈒",
    "GX": "dze²",
    "GHC": "dzjij²",
    "explanationEN": "other",
    "explanationCN": "其他"
  },
  {
    "character": "𘜊",
    "GX": "rphar¹",
    "GHC": "phjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗷿",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "grey",
    "explanationCN": "灰色"
  },
  {
    "character": "𗸄",
    "GX": "ni?",
    "GHC": "nji?",
    "explanationEN": "timid; weak",
    "explanationCN": "胆小;弱"
  },
  {
    "character": "𘆋",
    "GX": "γwo̱ṃh¹",
    "GHC": "ˑwọ¹",
    "explanationEN": "thick; bulky",
    "explanationCN": "厚;笨重"
  },
  {
    "character": "𘑰",
    "GX": "rdwi̱wr²",
    "GHC": "dwewr²",
    "explanationEN": "silent",
    "explanationCN": "沉默"
  },
  {
    "character": "𗸉",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj¹",
    "explanationEN": "horse shoulder",
    "explanationCN": "马肩"
  },
  {
    "character": "𘘎",
    "GX": "rtswə̱r¹",
    "GHC": "tswər¹",
    "explanationEN": "to curse; to swear",
    "explanationCN": "诅咒;发誓"
  },
  {
    "character": "𗖝",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "few; a little",
    "explanationCN": "少;一点儿"
  },
  {
    "character": "𗖢",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "to indicate; to instruct",
    "explanationCN": "表示;指示"
  },
  {
    "character": "𗖺",
    "GX": "ku¹",
    "GHC": "kju¹",
    "explanationEN": "eardrop",
    "explanationCN": "耳坠"
  },
  {
    "character": "𗗊",
    "GX": "ku¹",
    "GHC": "kju¹",
    "explanationEN": "sprouts",
    "explanationCN": "豆芽"
  },
  {
    "character": "𗖗",
    "GX": "si̱ṃ²",
    "GHC": "sẽ²",
    "explanationEN": "to blow (one’s nose); to groan; to snort",
    "explanationCN": "擤鼻涕;呻吟;哼"
  },
  {
    "character": "𗗈",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "to read",
    "explanationCN": "阅读"
  },
  {
    "character": "𘜏",
    "GX": "rnar¹",
    "GHC": "njar¹",
    "explanationEN": "to check; to proofread",
    "explanationCN": "检查;校对"
  },
  {
    "character": "𘙷",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "to cut; to reduce",
    "explanationCN": "切割;减少"
  },
  {
    "character": "𗕽",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "to know; to realize; to understand",
    "explanationCN": "要知道;实现;了解"
  },
  {
    "character": "𗖇",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "firm",
    "explanationCN": "公司"
  },
  {
    "character": "𗖆",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "living in peace",
    "explanationCN": "和平生活"
  },
  {
    "character": "𗖡",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "crime; guilt",
    "explanationCN": "犯罪;内疚"
  },
  {
    "character": "𗖭",
    "GX": "nnu²",
    "GHC": "nju̱²",
    "explanationEN": "happy; joyous",
    "explanationCN": "快乐;欢乐"
  },
  {
    "character": "𗖸",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "to say; to eulogize",
    "explanationCN": "说;歌颂"
  },
  {
    "character": "𘇳",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "the edge of a knife",
    "explanationCN": "刀刃"
  },
  {
    "character": "𗖘",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "word",
    "explanationCN": "词"
  },
  {
    "character": "𗉀",
    "GX": "tshwa¹",
    "GHC": "tshjwa¹",
    "explanationEN": "to roast; to warm up",
    "explanationCN": "烤;热身"
  },
  {
    "character": "𗉃",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "lamp",
    "explanationCN": "灯"
  },
  {
    "character": "𗖣",
    "GX": "rźai̱r¹",
    "GHC": "źier¹",
    "explanationEN": "to swear; to curse",
    "explanationCN": "发誓;诅咒"
  },
  {
    "character": "𗖞",
    "GX": "tśeh¹",
    "GHC": "tśjịj¹",
    "explanationEN": "to flatter; to toady",
    "explanationCN": "奉承;对蟾蜍"
  },
  {
    "character": "𗈿",
    "GX": "tsha¹",
    "GHC": "tshja¹",
    "explanationEN": "to heat up; to burn",
    "explanationCN": "加热;燃烧"
  },
  {
    "character": "𗖻",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "respect",
    "explanationCN": "尊"
  },
  {
    "character": "𗖤",
    "GX": "ntu̱¹",
    "GHC": "tu̱¹",
    "explanationEN": "to look for",
    "explanationCN": "寻找"
  },
  {
    "character": "𗴇",
    "GX": "lweh²",
    "GHC": "ljwịj²",
    "explanationEN": "mountain",
    "explanationCN": "山"
  },
  {
    "character": "𘞒",
    "GX": "nśə¹",
    "GHC": "śjɨ̱¹",
    "explanationEN": "doubt",
    "explanationCN": "怀疑"
  },
  {
    "character": "𗹘",
    "GX": "do̱ṃ¹",
    "GHC": "dow¹",
    "explanationEN": "to watch; to survey; to observe",
    "explanationCN": "观看;进行调查;观察"
  },
  {
    "character": "𘝸",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "gorgeous",
    "explanationCN": "华丽"
  },
  {
    "character": "𗹑",
    "GX": "tśeṃ¹",
    "GHC": "tśjɨj¹",
    "explanationEN": "correct; upright",
    "explanationCN": "正确;直立"
  },
  {
    "character": "𘈴",
    "GX": "ga²",
    "GHC": "gja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗴅",
    "GX": "qai̱²",
    "GHC": "kie²",
    "explanationEN": "dangerous",
    "explanationCN": "危险"
  },
  {
    "character": "𗳆",
    "GX": "lhə̱²",
    "GHC": "lhjo²",
    "explanationEN": "to lose; to die; to fail",
    "explanationCN": "输;死亡;失败"
  },
  {
    "character": "𗳌",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "that; those; it",
    "explanationCN": "那;那些;它"
  },
  {
    "character": "𘞑",
    "GX": "kiṃ¹",
    "GHC": "kjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗳎",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "to examine; to look into",
    "explanationCN": "检查;调查"
  },
  {
    "character": "𗷢",
    "GX": "tśuo²",
    "GHC": "tśjo̱w²",
    "explanationEN": "to feed; to raise; to keep",
    "explanationCN": "喂养;提高;保留"
  },
  {
    "character": "𗰨",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "an old-fashioned long narrow table or desk",
    "explanationCN": "老式的长而窄的桌子或书桌"
  },
  {
    "character": "𗙝",
    "GX": "kha̱h²",
    "GHC": "khạ²",
    "explanationEN": "(usually used in the negative) sound; noise",
    "explanationCN": "（通常用于负数）声音;噪声"
  },
  {
    "character": "𘘞",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "month",
    "explanationCN": "月"
  },
  {
    "character": "𗟸",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "palate",
    "explanationCN": "腭"
  },
  {
    "character": "𘚅",
    "GX": "lha̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "to shine",
    "explanationCN": "闪耀"
  },
  {
    "character": "𗙁",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "sound; voice",
    "explanationCN": "声音;声音"
  },
  {
    "character": "𘄪",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "to hit; to strike",
    "explanationCN": "击球;打击"
  },
  {
    "character": "𘗧",
    "GX": "zwih¹",
    "GHC": "zjwị¹",
    "explanationEN": "to marry",
    "explanationCN": "结婚"
  },
  {
    "character": "𘜙",
    "GX": "tśuh²",
    "GHC": "tśjụ²",
    "explanationEN": "can; to dare",
    "explanationCN": "能;敢于挑战"
  },
  {
    "character": "𘚉",
    "GX": "yoṃ²",
    "GHC": "ˑjo̱r²",
    "explanationEN": "to weave; to knit",
    "explanationCN": "编织;编织"
  },
  {
    "character": "𘙜",
    "GX": "nə̱h¹",
    "GHC": "nə̣¹",
    "explanationEN": "scabies",
    "explanationCN": "疥疮"
  },
  {
    "character": "𗟮",
    "GX": "rker²",
    "GHC": "kji̱r²",
    "explanationEN": "to rob; to steal",
    "explanationCN": "抢劫;偷窃"
  },
  {
    "character": "𘘗",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "wide; broad",
    "explanationCN": "宽;广泛"
  },
  {
    "character": "𗳭",
    "GX": "ryer²",
    "GHC": "ˑjijr²",
    "explanationEN": "to execute; to kill",
    "explanationCN": "执行;杀人"
  },
  {
    "character": "𘔝",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "to hide",
    "explanationCN": "隐藏"
  },
  {
    "character": "𘙃",
    "GX": "yə¹",
    "GHC": "ˑjɨ¹",
    "explanationEN": "level; fat",
    "explanationCN": "水平;脂肪"
  },
  {
    "character": "𘝉",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𗉖",
    "GX": "tsheṃ¹",
    "GHC": "tshjɨj¹",
    "explanationEN": "small; thin",
    "explanationCN": "小;薄"
  },
  {
    "character": "𗉞",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "to float; to drift",
    "explanationCN": "漂浮;漂移"
  },
  {
    "character": "𘈪",
    "GX": "ta¹",
    "GHC": "tja¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶇",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "(in Chinese thought) yin",
    "explanationCN": "（在中国思想中）尹"
  },
  {
    "character": "𘅅",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "leg",
    "explanationCN": "腿"
  },
  {
    "character": "𘙂",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "low; inferior",
    "explanationCN": "低;劣"
  },
  {
    "character": "𗵶",
    "GX": "ŋhe²",
    "GHC": "xjij²",
    "explanationEN": "broad; wide",
    "explanationCN": "广泛;宽"
  },
  {
    "character": "𗟥",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "to reduce",
    "explanationCN": "减少"
  },
  {
    "character": "𗌷",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "fort; fortress",
    "explanationCN": "堡;堡垒"
  },
  {
    "character": "𗗱",
    "GX": "dẓaə̱¹",
    "GHC": "dźiə¹",
    "explanationEN": "fox",
    "explanationCN": "狐狸"
  },
  {
    "character": "𗡱",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "thin; tiny",
    "explanationCN": "薄;小"
  },
  {
    "character": "𗶂",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "cotton",
    "explanationCN": "棉花"
  },
  {
    "character": "𗸚",
    "GX": "ŋġa̱¹",
    "GHC": "ga̱¹",
    "explanationEN": "thin; emaciated",
    "explanationCN": "薄;瘦弱"
  },
  {
    "character": "𘚊",
    "GX": "yoṃ²",
    "GHC": "ˑjo̱r²",
    "explanationEN": "afterbirth",
    "explanationCN": "胞衣"
  },
  {
    "character": "𗟡",
    "GX": "lwu̱²",
    "GHC": "lwu²",
    "explanationEN": "to sell; to loan",
    "explanationCN": "出售;借出"
  },
  {
    "character": "𘞶",
    "GX": "mphu̱²",
    "GHC": "phu̱²",
    "explanationEN": "luxuriant; flourishing",
    "explanationCN": "华丽;繁荣"
  },
  {
    "character": "𗡥",
    "GX": "ryər²",
    "GHC": "ˑjɨr²",
    "explanationEN": "whip",
    "explanationCN": "鞭子"
  },
  {
    "character": "𗱋",
    "GX": "thəh²",
    "GHC": "²",
    "explanationEN": "to roll up; volume (of books)",
    "explanationCN": "卷起;卷（书籍）"
  },
  {
    "character": "𘈔",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "to hide (oneself); to avoid",
    "explanationCN": "隐藏（自己）;避免"
  },
  {
    "character": "𘆌",
    "GX": "tsheṃh¹",
    "GHC": "tshjɨ̣j¹",
    "explanationEN": "to pare",
    "explanationCN": "去削"
  },
  {
    "character": "𘇶",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "millet",
    "explanationCN": "小米"
  },
  {
    "character": "𘇸",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "shaman; sorcerer",
    "explanationCN": "萨满;巫师"
  },
  {
    "character": "𗬌",
    "GX": "zi̱ṃ¹",
    "GHC": "zẽ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘉟",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "to compel",
    "explanationCN": "强迫"
  },
  {
    "character": "𗃐",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "hunchback",
    "explanationCN": "驼背"
  },
  {
    "character": "𗢨",
    "GX": "dzwo²",
    "GHC": "dzjwo²",
    "explanationEN": "human being; person",
    "explanationCN": "人;人"
  },
  {
    "character": "𘊏",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "insect; worm",
    "explanationCN": "昆虫;蠕虫"
  },
  {
    "character": "𘟥",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "insect; maggot",
    "explanationCN": "昆虫;蛆"
  },
  {
    "character": "𗬍",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "silk",
    "explanationCN": "丝绸"
  },
  {
    "character": "𗹭",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "tall",
    "explanationCN": "高"
  },
  {
    "character": "𗎰",
    "GX": "tśəh¹",
    "GHC": "tśjɨ̣¹",
    "explanationEN": "to move; to migrate",
    "explanationCN": "移动;迁移"
  },
  {
    "character": "𗎭",
    "GX": "mmi¹",
    "GHC": "mji̱¹",
    "explanationEN": "house; residence",
    "explanationCN": "房子;住宅"
  },
  {
    "character": "𗂍",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "to pull out; to pick; to take",
    "explanationCN": "拉出;挑选;取"
  },
  {
    "character": "𗃆",
    "GX": "ryar¹",
    "GHC": "ˑjar¹",
    "explanationEN": "daughter-in-law",
    "explanationCN": "媳妇"
  },
  {
    "character": "𗀿",
    "GX": "li¹",
    "GHC": "lji¹",
    "explanationEN": "tired",
    "explanationCN": "累"
  },
  {
    "character": "𗆳",
    "GX": "nye¹",
    "GHC": "ˑji̱j¹",
    "explanationEN": "calm",
    "explanationCN": "平静"
  },
  {
    "character": "𗂭",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "to follow",
    "explanationCN": "关注"
  },
  {
    "character": "𗂮",
    "GX": "rkər¹",
    "GHC": "kjɨr¹",
    "explanationEN": "to fly",
    "explanationCN": "飞行"
  },
  {
    "character": "𗅥",
    "GX": "tu²",
    "GHC": "tju²",
    "explanationEN": "to beat",
    "explanationCN": "击败"
  },
  {
    "character": "𗂜",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "round as a ball; satisfactory",
    "explanationCN": "圆得像个球;满意"
  },
  {
    "character": "𗆒",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "slack",
    "explanationCN": "松弛"
  },
  {
    "character": "𗆬",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "impressive and dignified manners",
    "explanationCN": "令人印象深刻且端庄的举止"
  },
  {
    "character": "𗆟",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗅱",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "map; picture",
    "explanationCN": "地图;图片"
  },
  {
    "character": "𗂚",
    "GX": "ye²",
    "GHC": "²",
    "explanationEN": "banquet",
    "explanationCN": "宴会"
  },
  {
    "character": "𗅉",
    "GX": "nuo¹",
    "GHC": "nio̱w¹",
    "explanationEN": "ABE: abessive; POSTE: postessive",
    "explanationCN": "ABE：贪婪;POSTE： postessive"
  },
  {
    "character": "𗅧",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "tendon; muscle",
    "explanationCN": "肌腱;肌肉"
  },
  {
    "character": "𗆓",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗅠",
    "GX": "rġu̱r¹",
    "GHC": "gur¹",
    "explanationEN": "ox",
    "explanationCN": "牛"
  },
  {
    "character": "𗅲",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "ceremony; rite; manner",
    "explanationCN": "仪式;仪式;方式"
  },
  {
    "character": "𗆅",
    "GX": "dźe²",
    "GHC": "²",
    "explanationEN": "tail; end",
    "explanationCN": "尾巴;结束"
  },
  {
    "character": "𗆲",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "succession",
    "explanationCN": "继承"
  },
  {
    "character": "𗆤",
    "GX": "dźih²",
    "GHC": "dźjiar²",
    "explanationEN": "true; real",
    "explanationCN": "真;真正"
  },
  {
    "character": "𗅘",
    "GX": "kha̱ṃ¹",
    "GHC": "khã¹",
    "explanationEN": "看坎堪",
    "explanationCN": "看坎堪"
  },
  {
    "character": "𗆀",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "salt",
    "explanationCN": "盐"
  },
  {
    "character": "𗆘",
    "GX": "qhə̱h¹",
    "GHC": "khə̣¹",
    "explanationEN": "to contract",
    "explanationCN": "签订合同"
  },
  {
    "character": "𗆥",
    "GX": "ŋkhwa̱²",
    "GHC": "khwa̱²",
    "explanationEN": "decrepit and behind the times",
    "explanationCN": "破旧落后于时代"
  },
  {
    "character": "𗅋",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "NEG",
    "explanationCN": "负离子"
  },
  {
    "character": "𗁈",
    "GX": "twa̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗁝",
    "GX": "giw¹",
    "GHC": "gjiw¹",
    "explanationEN": "respectful",
    "explanationCN": "尊敬的"
  },
  {
    "character": "𗁸",
    "GX": "si̱²",
    "GHC": "se²",
    "explanationEN": "to tighten",
    "explanationCN": "收紧"
  },
  {
    "character": "𗁷",
    "GX": "qhaa̱¹",
    "GHC": "khia¹",
    "explanationEN": "to shoot; to fire",
    "explanationCN": "射击;开火"
  },
  {
    "character": "𗂄",
    "GX": "γwa̱¹",
    "GHC": "ɣwa¹",
    "explanationEN": "treasure",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗂵",
    "GX": "mphaa̱²",
    "GHC": "phia̱²",
    "explanationEN": "to divide; to separate",
    "explanationCN": "分割;分开"
  },
  {
    "character": "𗁍",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗂥",
    "GX": "ne²",
    "GHC": "ŋjij²",
    "explanationEN": "before",
    "explanationCN": "以前"
  },
  {
    "character": "𗂊",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "to jump; to leap",
    "explanationCN": "跳跃;飞跃"
  },
  {
    "character": "𗃃",
    "GX": "rler¹",
    "GHC": "lji̱r¹",
    "explanationEN": "to rub; to knead",
    "explanationCN": "摩擦;揉捏"
  },
  {
    "character": "𗁧",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "to become thin; to thin down",
    "explanationCN": "变得瘦弱;瘦身"
  },
  {
    "character": "𗂿",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "to light a fire",
    "explanationCN": "点火"
  },
  {
    "character": "𗹮",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "shoulder",
    "explanationCN": "肩膀"
  },
  {
    "character": "𗹤",
    "GX": "ẓae̱¹",
    "GHC": "śiej¹",
    "explanationEN": "to win",
    "explanationCN": "为了赢"
  },
  {
    "character": "𗃀",
    "GX": "dzwə¹",
    "GHC": "tsjwɨ¹",
    "explanationEN": "to rub; to knead",
    "explanationCN": "摩擦;揉捏"
  },
  {
    "character": "𗺀",
    "GX": "li̱ṃ¹",
    "GHC": "lẽ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘉂",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "moat; chasm; gully",
    "explanationCN": "护城河;堑;沟壑"
  },
  {
    "character": "𗺁",
    "GX": "hae̱ṃ²",
    "GHC": "xiəj²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗎦",
    "GX": "qha̱²",
    "GHC": "kha²",
    "explanationEN": "stutter",
    "explanationCN": "口吃"
  },
  {
    "character": "𗎬",
    "GX": "dźə²",
    "GHC": "dźjɨr²",
    "explanationEN": "anus",
    "explanationCN": "肛门"
  },
  {
    "character": "𗀰",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "great waves; billows",
    "explanationCN": "巨浪;波涛"
  },
  {
    "character": "𗁐",
    "GX": "moh²",
    "GHC": "mjọ²",
    "explanationEN": "exhausted; dried up",
    "explanationCN": "用尽;涸"
  },
  {
    "character": "𗄭",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "to gather",
    "explanationCN": "聚集"
  },
  {
    "character": "𗄸",
    "GX": "tśha²",
    "GHC": "tśhja²",
    "explanationEN": "impressive and dignified manners",
    "explanationCN": "令人印象深刻且端庄的举止"
  },
  {
    "character": "𗅔",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "be not",
    "explanationCN": "不是"
  },
  {
    "character": "𗅖",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "alms",
    "explanationCN": "施舍"
  },
  {
    "character": "𗆞",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "to look into the distance from a high place",
    "explanationCN": "从高处眺望远方"
  },
  {
    "character": "𗆫",
    "GX": "rlər²",
    "GHC": "ljɨ̱r²",
    "explanationEN": "to think of; to long for",
    "explanationCN": "想;渴望"
  },
  {
    "character": "𗄹",
    "GX": "pe¹",
    "GHC": "¹",
    "explanationEN": "deep green",
    "explanationCN": "深绿色"
  },
  {
    "character": "𗄩",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "to pass through",
    "explanationCN": "通过"
  },
  {
    "character": "𗅕",
    "GX": "nli̱²",
    "GHC": "le̱²",
    "explanationEN": "dark (of complexion)",
    "explanationCN": "深色（肤色）"
  },
  {
    "character": "𗅚",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "to cast sidelong glances",
    "explanationCN": "投来侧目"
  },
  {
    "character": "𗆛",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "to tie; to link",
    "explanationCN": "打平;链接"
  },
  {
    "character": "𗀲",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "to pass through; to invade",
    "explanationCN": "通过;侵入"
  },
  {
    "character": "𗁯",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗂟",
    "GX": "rvar¹",
    "GHC": "wjar¹",
    "explanationEN": "to dig; to collapse",
    "explanationCN": "挖掘;折叠"
  },
  {
    "character": "𗁭",
    "GX": "dźwow¹",
    "GHC": "dźjwo¹",
    "explanationEN": "to drill; to bore",
    "explanationCN": "钻孔;钻孔"
  },
  {
    "character": "𗁶",
    "GX": "mphe¹",
    "GHC": "phji̱j¹",
    "explanationEN": "even; equal",
    "explanationCN": "甚至;平等"
  },
  {
    "character": "𗹝",
    "GX": "ne¹",
    "GHC": "¹",
    "explanationEN": "relative",
    "explanationCN": "相对"
  },
  {
    "character": "𗹴",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "devil; demon",
    "explanationCN": "魔鬼;恶魔"
  },
  {
    "character": "𗹡",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "brave; violent",
    "explanationCN": "勇敢;暴力"
  },
  {
    "character": "𗁕",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "to marry a wife; to take",
    "explanationCN": "娶一个妻子;取"
  },
  {
    "character": "𗀱",
    "GX": "phao̱²",
    "GHC": "phio²",
    "explanationEN": "to sing; to chant",
    "explanationCN": "唱歌;吟诵"
  },
  {
    "character": "𗅇",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "mould",
    "explanationCN": "模子"
  },
  {
    "character": "𗅊",
    "GX": "lhai̱h²",
    "GHC": "lhiẹ²",
    "explanationEN": "smooth; glossy",
    "explanationCN": "光滑;光泽"
  },
  {
    "character": "𗅞",
    "GX": "lhə̱?",
    "GHC": "lhə?",
    "explanationEN": "smooth",
    "explanationCN": "光滑"
  },
  {
    "character": "𗄬",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "relation by marriage",
    "explanationCN": "婚姻关系"
  },
  {
    "character": "𗂞",
    "GX": "mae̱¹",
    "GHC": "miej¹",
    "explanationEN": "to call; to greet",
    "explanationCN": "打电话;问候"
  },
  {
    "character": "𗅸",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "to roar; to howl",
    "explanationCN": "咆哮;嚎叫"
  },
  {
    "character": "𗆚",
    "GX": "ndzu¹",
    "GHC": "dzju̱¹",
    "explanationEN": "to shake; to sway",
    "explanationCN": "摇晃;摇摆"
  },
  {
    "character": "𗅬",
    "GX": "dziw²",
    "GHC": "dźjiw²",
    "explanationEN": "abortion",
    "explanationCN": "流产"
  },
  {
    "character": "𗂗",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "to drive out; to expel",
    "explanationCN": "驱赶出去;驱逐"
  },
  {
    "character": "𗂤",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "to crawl; to creep",
    "explanationCN": "爬行;对小兵"
  },
  {
    "character": "𗁒",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "to distend",
    "explanationCN": "展开"
  },
  {
    "character": "𗁨",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "the common people",
    "explanationCN": "普通百姓"
  },
  {
    "character": "𗂁",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "to mate (with); to copulate",
    "explanationCN": "交配 （with）;交配"
  },
  {
    "character": "𗁔",
    "GX": "ta̱h¹",
    "GHC": "¹",
    "explanationEN": "to marry a wife; to take",
    "explanationCN": "娶一个妻子;取"
  },
  {
    "character": "𗁼",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "gold",
    "explanationCN": "金"
  },
  {
    "character": "𗹧",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "supernatural being",
    "explanationCN": "神"
  },
  {
    "character": "𗺂",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "to fly; to hover",
    "explanationCN": "飞翔;悬停"
  },
  {
    "character": "𘉁",
    "GX": "mmi¹",
    "GHC": "mji̱¹",
    "explanationEN": "crown",
    "explanationCN": "冠"
  },
  {
    "character": "𗹯",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to exorcise",
    "explanationCN": "驱魔"
  },
  {
    "character": "𗅡",
    "GX": "qhwaə̱¹",
    "GHC": "¹",
    "explanationEN": "horn",
    "explanationCN": "角"
  },
  {
    "character": "𗁪",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗂻",
    "GX": "dwe̱¹",
    "GHC": "dwej¹",
    "explanationEN": "hernia",
    "explanationCN": "疝"
  },
  {
    "character": "𗁇",
    "GX": "lə̱²",
    "GHC": "²",
    "explanationEN": "foolish; stupid",
    "explanationCN": "愚蠢;笨"
  },
  {
    "character": "𗄮",
    "GX": "ga¹",
    "GHC": "gja¹",
    "explanationEN": "stutter; stammer",
    "explanationCN": "口吃;结巴"
  },
  {
    "character": "𗹢",
    "GX": "doh²",
    "GHC": "djọ²",
    "explanationEN": "to build.ʙ; to cure.ʙ",
    "explanationCN": "建造。治愈。"
  },
  {
    "character": "𗉺",
    "GX": "ẓaa̱¹",
    "GHC": "śia¹",
    "explanationEN": "sand",
    "explanationCN": "沙"
  },
  {
    "character": "𗉾",
    "GX": "rẓaa̱r¹",
    "GHC": "śiar¹",
    "explanationEN": "to mix; to stir",
    "explanationCN": "混合;搅拌"
  },
  {
    "character": "𗋙",
    "GX": "və²",
    "GHC": "wjɨ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗊧",
    "GX": "tśhwaṃ¹",
    "GHC": "tśhjwã¹",
    "explanationEN": "river; plain",
    "explanationCN": "河;平原"
  },
  {
    "character": "𗊸",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "in the past",
    "explanationCN": "过去"
  },
  {
    "character": "𗋠",
    "GX": "ndźa²",
    "GHC": "dźja²",
    "explanationEN": "glutinous (rice)",
    "explanationCN": "糯（米）"
  },
  {
    "character": "𗋢",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "rope; cord",
    "explanationCN": "绳;绳子"
  },
  {
    "character": "𗊾",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗏂",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "one of the eight diagrams",
    "explanationCN": "八个图表之一"
  },
  {
    "character": "𗋁",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "to drink",
    "explanationCN": "喝"
  },
  {
    "character": "𗌌",
    "GX": "naw¹",
    "GHC": "nja̱¹",
    "explanationEN": "deep",
    "explanationCN": "深"
  },
  {
    "character": "𗌦",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "lake",
    "explanationCN": "湖"
  },
  {
    "character": "𗏁",
    "GX": "ŋwə̱¹",
    "GHC": "ŋwə¹",
    "explanationEN": "five",
    "explanationCN": "五"
  },
  {
    "character": "𗏄",
    "GX": "ŋwə̱¹",
    "GHC": "ŋwə¹",
    "explanationEN": "urn; earthen jar; bottle",
    "explanationCN": "瓮;㼞;瓶"
  },
  {
    "character": "𗢟",
    "GX": "tświ²",
    "GHC": "tśjwi²",
    "explanationEN": "disaster",
    "explanationCN": "灾难"
  },
  {
    "character": "𗢠",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "boring",
    "explanationCN": "无聊的"
  },
  {
    "character": "𗢣",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𗊯",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "well",
    "explanationCN": "井"
  },
  {
    "character": "𗋋",
    "GX": "rtṣao̱r¹",
    "GHC": "tśior¹",
    "explanationEN": "mud",
    "explanationCN": "泥"
  },
  {
    "character": "𗌧",
    "GX": "ryur²",
    "GHC": "ˑjur²",
    "explanationEN": "upbringing",
    "explanationCN": "教养"
  },
  {
    "character": "𗌝",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "tortoise",
    "explanationCN": "龟"
  },
  {
    "character": "𘉭",
    "GX": "ho̱ṃ¹",
    "GHC": "xow¹",
    "explanationEN": "mange",
    "explanationCN": "癞"
  },
  {
    "character": "𗌘",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "butter",
    "explanationCN": "黄油"
  },
  {
    "character": "𘉴",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "waste",
    "explanationCN": "浪费"
  },
  {
    "character": "𗋯",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "moisture",
    "explanationCN": "湿气"
  },
  {
    "character": "𗌃",
    "GX": "tu̱ṃ¹",
    "GHC": "tũ.¹",
    "explanationEN": "winter",
    "explanationCN": "冬"
  },
  {
    "character": "𗋉",
    "GX": "ndźa²",
    "GHC": "dźja̱²",
    "explanationEN": "marsh; hog",
    "explanationCN": "沼泽;猪"
  },
  {
    "character": "𗌡",
    "GX": "tha̱ṃ¹",
    "GHC": "thã¹",
    "explanationEN": "beach; sands",
    "explanationCN": "海滩;滩"
  },
  {
    "character": "𘊂",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "dung; excrement",
    "explanationCN": "粪;屎"
  },
  {
    "character": "𘊀",
    "GX": "źəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "to envy",
    "explanationCN": "羡慕"
  },
  {
    "character": "𗇆",
    "GX": "rẓaa̱r¹",
    "GHC": "śiar¹",
    "explanationEN": "impressive and dignified manners",
    "explanationCN": "令人印象深刻且端庄的举止"
  },
  {
    "character": "𗊦",
    "GX": "ndə²",
    "GHC": "djɨ̱²",
    "explanationEN": "to wash",
    "explanationCN": "洗涤"
  },
  {
    "character": "𗋕",
    "GX": "tha¹",
    "GHC": "thja¹",
    "explanationEN": "other; else",
    "explanationCN": "其他;还"
  },
  {
    "character": "𗊿",
    "GX": "ẓai̱ṃ¹",
    "GHC": "śiẽ¹",
    "explanationEN": "to ooze; to seep",
    "explanationCN": "渗出;渗出"
  },
  {
    "character": "𘓤",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "pawnshop; to gurantee; to inspect; to examine",
    "explanationCN": "当铺;保证;进行检查;检查"
  },
  {
    "character": "𗊆",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "to rub",
    "explanationCN": "去摩擦"
  },
  {
    "character": "𗊇",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "dried up; thin",
    "explanationCN": "涸;薄"
  },
  {
    "character": "𗊗",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "soft; lithe",
    "explanationCN": "软;轻盈"
  },
  {
    "character": "𗋗",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "exhaustion; poverty",
    "explanationCN": "疲惫;贫困"
  },
  {
    "character": "𗢓",
    "GX": "ŋah¹",
    "GHC": "ŋjạ¹",
    "explanationEN": "stammer; stutter",
    "explanationCN": "结巴;口吃"
  },
  {
    "character": "𗺑",
    "GX": "mba¹",
    "GHC": "¹",
    "explanationEN": "limit; end",
    "explanationCN": "限制;结束"
  },
  {
    "character": "𗎼",
    "GX": "swi̱w¹",
    "GHC": "¹",
    "explanationEN": "bright; brilliant; light",
    "explanationCN": "明亮;明;光"
  },
  {
    "character": "𗊪",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "country; territory; world",
    "explanationCN": "国家;领土;世界"
  },
  {
    "character": "𗉹",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "to mix; to blend",
    "explanationCN": "混合;混合"
  },
  {
    "character": "𗉽",
    "GX": "sə̱²",
    "GHC": "sə²",
    "explanationEN": "clean; spotless",
    "explanationCN": "干净;一尘不染"
  },
  {
    "character": "𗊕",
    "GX": "ẓaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "one of",
    "explanationCN": "其中之一"
  },
  {
    "character": "𘉵",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "sorrow",
    "explanationCN": "悲伤"
  },
  {
    "character": "𗋎",
    "GX": "rtṣhaə̱r¹",
    "GHC": "tśhiər¹",
    "explanationEN": "to bustle",
    "explanationCN": "喧嚣"
  },
  {
    "character": "𘉫",
    "GX": "gih¹",
    "GHC": "gjị¹",
    "explanationEN": "to groan; to moan",
    "explanationCN": "呻吟;呻吟"
  },
  {
    "character": "𘉬",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "to curse; to swear",
    "explanationCN": "诅咒;发誓"
  },
  {
    "character": "𘉯",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "excrement; dung",
    "explanationCN": "屎;粪"
  },
  {
    "character": "𘊊",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "wives of brothers; sister-in-law",
    "explanationCN": "兄弟的妻子;嫂子"
  },
  {
    "character": "𗬗",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗊫",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "ice",
    "explanationCN": "冰"
  },
  {
    "character": "𗊃",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "wine",
    "explanationCN": "酒"
  },
  {
    "character": "𗋖",
    "GX": "qaa̱²",
    "GHC": "kia²",
    "explanationEN": "duck",
    "explanationCN": "鸭"
  },
  {
    "character": "𘚾",
    "GX": "ndə̱¹",
    "GHC": "də̱¹",
    "explanationEN": "to hasten; to speed",
    "explanationCN": "加速;速度"
  },
  {
    "character": "𗉿",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "saliva; spittle",
    "explanationCN": "唾液;唾沫"
  },
  {
    "character": "𗊖",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "wine",
    "explanationCN": "酒"
  },
  {
    "character": "𘈇",
    "GX": "ra̱r¹",
    "GHC": "rar¹",
    "explanationEN": "old",
    "explanationCN": "老"
  },
  {
    "character": "𘈈",
    "GX": "mmi¹",
    "GHC": "mji¹",
    "explanationEN": "to hand out; to bestow",
    "explanationCN": "分发;赐予"
  },
  {
    "character": "𗢘",
    "GX": "swuh²",
    "GHC": "sjwụ²",
    "explanationEN": "to live; to revive",
    "explanationCN": "活着;重振旗鼓"
  },
  {
    "character": "𗌅",
    "GX": "saṃ²",
    "GHC": "sjã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗌨",
    "GX": "dźwoṃ¹",
    "GHC": "¹",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𗢔",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𗏆",
    "GX": "hwaa̱ṃ¹",
    "GHC": "xiwã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗋘",
    "GX": "rqhwa̱r²",
    "GHC": "khwar²",
    "explanationEN": "boots",
    "explanationCN": "靴子"
  },
  {
    "character": "𗊨",
    "GX": "tə̱h¹",
    "GHC": "tə̣¹",
    "explanationEN": "dirt; filth",
    "explanationCN": "污垢;污秽"
  },
  {
    "character": "𘉮",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "to hate; grieved; sorrowful",
    "explanationCN": "憎恨;悲痛;悲哀"
  },
  {
    "character": "𘉠",
    "GX": "tshih¹",
    "GHC": "tshjị¹",
    "explanationEN": "impoverished",
    "explanationCN": "贫困"
  },
  {
    "character": "𗢧",
    "GX": "rmi̱r²",
    "GHC": "me̱r²",
    "explanationEN": "to be frightened",
    "explanationCN": "被吓坏"
  },
  {
    "character": "𗋺",
    "GX": "ŋqwai̱¹",
    "GHC": "kiwe̱¹",
    "explanationEN": "to irrigate; to pour",
    "explanationCN": "灌溉;倾倒"
  },
  {
    "character": "𘉳",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "excrement; dung",
    "explanationCN": "屎;粪"
  },
  {
    "character": "𘉶",
    "GX": "rtsər¹",
    "GHC": "tsjɨ̱r¹",
    "explanationEN": "stammer; stutter",
    "explanationCN": "结巴;口吃"
  },
  {
    "character": "𗐄",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "hair",
    "explanationCN": "毛"
  },
  {
    "character": "𗬋",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗢬",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "to amass; to store up; to accumulate",
    "explanationCN": "囤积;储存起来;累积"
  },
  {
    "character": "𗢵",
    "GX": "rvwo̱r¹",
    "GHC": "wor¹",
    "explanationEN": "to raise; to happen",
    "explanationCN": "提高;发生"
  },
  {
    "character": "𗣊",
    "GX": "mi²",
    "GHC": "mji²",
    "explanationEN": "I; you",
    "explanationCN": "我;你"
  },
  {
    "character": "𗣚",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "perhaps; maybe; or",
    "explanationCN": "也许;或;或"
  },
  {
    "character": "𗩿",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼱",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗼳",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "dust; dirt",
    "explanationCN": "灰尘;污垢"
  },
  {
    "character": "𗾒",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "cuckoo",
    "explanationCN": "杜鹃"
  },
  {
    "character": "𘊑",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "mouse; rat",
    "explanationCN": "鼠;鼠"
  },
  {
    "character": "𗏛",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣠",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣛",
    "GX": "qi̱w¹",
    "GHC": "kew¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗤉",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨺",
    "GX": "lleh²",
    "GHC": "ljịj²",
    "explanationEN": "empress dowager",
    "explanationCN": "皇太后"
  },
  {
    "character": "𗼸",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "fort; fortress",
    "explanationCN": "堡;堡垒"
  },
  {
    "character": "𗪃",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "to draw (a bow)",
    "explanationCN": "拉弓"
  },
  {
    "character": "𗾓",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "noon; midday",
    "explanationCN": "中午;中午"
  },
  {
    "character": "𗎻",
    "GX": "qo̱ṃ¹",
    "GHC": "¹",
    "explanationEN": "to collapse",
    "explanationCN": "折叠"
  },
  {
    "character": "𗏜",
    "GX": "pae̱h¹",
    "GHC": "pẹj¹",
    "explanationEN": "belly; abdomen; stomach",
    "explanationCN": "腹;腹部;胃"
  },
  {
    "character": "𗤄",
    "GX": "ryər¹",
    "GHC": "ˑjɨr¹",
    "explanationEN": "to ask.ᴀ",
    "explanationCN": "询问。"
  },
  {
    "character": "𗦣",
    "GX": "nwi¹",
    "GHC": "njwi¹",
    "explanationEN": "to surpass; to be able to",
    "explanationCN": "超越;才能"
  },
  {
    "character": "𗦪",
    "GX": "thəh¹",
    "GHC": "thjɨ̣¹",
    "explanationEN": "to roll up",
    "explanationCN": "汇总"
  },
  {
    "character": "𗽷",
    "GX": "ryawr²",
    "GHC": "ˑja̱r²",
    "explanationEN": "room; to stay",
    "explanationCN": "房间;留下来"
  },
  {
    "character": "𗾝",
    "GX": "nźiw¹",
    "GHC": "źji̱w¹",
    "explanationEN": "to hang",
    "explanationCN": "挂起"
  },
  {
    "character": "𗾮",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "when",
    "explanationCN": "什么时候"
  },
  {
    "character": "𗣺",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "snake; scorpion",
    "explanationCN": "蛇;蝎子"
  },
  {
    "character": "𗣽",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "to love",
    "explanationCN": "去爱"
  },
  {
    "character": "𗦇",
    "GX": "lli̱w²",
    "GHC": "lew²",
    "explanationEN": "thing, matter; NMLZ: nomilizer means \"thing, matter\"",
    "explanationCN": "东西;NMLZ"
  },
  {
    "character": "𗩾",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "extremely",
    "explanationCN": "非常"
  },
  {
    "character": "𗨹",
    "GX": "γə̱h¹",
    "GHC": "ɣə̣¹",
    "explanationEN": "pleased; satisfied",
    "explanationCN": "高兴;满意"
  },
  {
    "character": "𗧲",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "skilful",
    "explanationCN": "巧"
  },
  {
    "character": "𗫖",
    "GX": "ywiṃ¹",
    "GHC": "ˑjwĩ¹",
    "explanationEN": "even",
    "explanationCN": "甚至"
  },
  {
    "character": "𗥲",
    "GX": "pi̱ṃ²",
    "GHC": "pẽ²",
    "explanationEN": "to go through; to undergo",
    "explanationCN": "通过;接受"
  },
  {
    "character": "𗨋",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "three days later",
    "explanationCN": "三天后"
  },
  {
    "character": "𗨒",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗧓",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "pron. I; 1 SG indexation",
    "explanationCN": "我;1 名"
  },
  {
    "character": "𗩘",
    "GX": "no̱²",
    "GHC": "²",
    "explanationEN": "son or daughter",
    "explanationCN": "儿子或女儿"
  },
  {
    "character": "𗨓",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "net",
    "explanationCN": "网"
  },
  {
    "character": "𗪽",
    "GX": "rbu̱r¹",
    "GHC": "bur¹",
    "explanationEN": "to gather; to collect",
    "explanationCN": "聚集;收集"
  },
  {
    "character": "𗩤",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "in the past",
    "explanationCN": "过去"
  },
  {
    "character": "𗪟",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "the beginning of",
    "explanationCN": "开始"
  },
  {
    "character": "𗪘",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "before; former times",
    "explanationCN": "以前"
  },
  {
    "character": "𗩭",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "the first month",
    "explanationCN": "第一个月"
  },
  {
    "character": "𘊓",
    "GX": "la̱?",
    "GHC": "la?",
    "explanationEN": "scorpion",
    "explanationCN": "蝎子"
  },
  {
    "character": "𗿀",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗩐",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "husband and wife",
    "explanationCN": "丈夫和妻子"
  },
  {
    "character": "𗩑",
    "GX": "ŋqu̱²",
    "GHC": "gu̱²",
    "explanationEN": "food and drink; diet",
    "explanationCN": "食物和饮料;节食"
  },
  {
    "character": "𗩮",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "barbarian",
    "explanationCN": "野蛮"
  },
  {
    "character": "𗪬",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "night",
    "explanationCN": "晚上"
  },
  {
    "character": "𗩕",
    "GX": "dza̱¹",
    "GHC": "dza¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗩽",
    "GX": "rtṣao̱r²",
    "GHC": "tśior²",
    "explanationEN": "filthy",
    "explanationCN": "肮脏"
  },
  {
    "character": "𗿶",
    "GX": "lae̱h¹",
    "GHC": "lẹj¹",
    "explanationEN": "crow",
    "explanationCN": "乌鸦"
  },
  {
    "character": "𗿲",
    "GX": "ẓao̱²",
    "GHC": "śio²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𘔸",
    "GX": "γo̱ṃh¹",
    "GHC": "ˑọ¹",
    "explanationEN": "to yawn",
    "explanationCN": "打哈欠"
  },
  {
    "character": "𗦥",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "divination",
    "explanationCN": "占卜"
  },
  {
    "character": "𗥁",
    "GX": "ẓao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "above; higher place",
    "explanationCN": "以上;更高的地方"
  },
  {
    "character": "𗦨",
    "GX": "ṇ??",
    "GHC": "?",
    "explanationEN": "to contract",
    "explanationCN": "签订合同"
  },
  {
    "character": "𗦰",
    "GX": "rẓaa̱r¹",
    "GHC": "śiar¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗽥",
    "GX": "rgur²",
    "GHC": "gjur²",
    "explanationEN": "gully",
    "explanationCN": "沟壑"
  },
  {
    "character": "𗽪",
    "GX": "γwe̱²",
    "GHC": "ɣwej²",
    "explanationEN": "city wall and moat; gully",
    "explanationCN": "城墙和护城河;沟壑"
  },
  {
    "character": "𗨔",
    "GX": "ni̱w¹",
    "GHC": "new¹",
    "explanationEN": "breast",
    "explanationCN": "胸"
  },
  {
    "character": "𗪁",
    "GX": "gi²",
    "GHC": "²",
    "explanationEN": "wife; concubine",
    "explanationCN": "老婆;妾"
  },
  {
    "character": "𗧈",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "to urinate",
    "explanationCN": "排尿"
  },
  {
    "character": "𗬠",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗤿",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗥋",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "to blow; to pipe (a wind instrument)",
    "explanationCN": "吹;to pipe （一种管乐器）"
  },
  {
    "character": "𗦉",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "wife; concubine; woman",
    "explanationCN": "老婆;妾;女人"
  },
  {
    "character": "𗨼",
    "GX": "dźwe²",
    "GHC": "dźjij²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗫕",
    "GX": "ntho̱¹",
    "GHC": "tho̱¹",
    "explanationEN": "to ripple; to undulate",
    "explanationCN": "到涟漪;起伏"
  },
  {
    "character": "𗨄",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "achievement",
    "explanationCN": "成就"
  },
  {
    "character": "𗧋",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "respect",
    "explanationCN": "尊"
  },
  {
    "character": "𗪉",
    "GX": "zwih¹",
    "GHC": "zjwị¹",
    "explanationEN": "nephew",
    "explanationCN": "侄子"
  },
  {
    "character": "𗧯",
    "GX": "nye¹",
    "GHC": "ˑji̱j¹",
    "explanationEN": "to hold",
    "explanationCN": "按住"
  },
  {
    "character": "𗫋",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "to separate",
    "explanationCN": "分开"
  },
  {
    "character": "𗽒",
    "GX": "pho̱ṃ²",
    "GHC": "phow²",
    "explanationEN": "mountain peak",
    "explanationCN": "山峰"
  },
  {
    "character": "𗽰",
    "GX": "mbu̱²",
    "GHC": "bu̱²",
    "explanationEN": "grave; mausoleum",
    "explanationCN": "坟墓;陵墓"
  },
  {
    "character": "𗿔",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗿥",
    "GX": "vəh¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "old; aged",
    "explanationCN": "老;老"
  },
  {
    "character": "𘔶",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "to blow; to beat",
    "explanationCN": "吹;击败"
  },
  {
    "character": "𗺘",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "barnyard grass",
    "explanationCN": "稗"
  },
  {
    "character": "𗏼",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "to send back",
    "explanationCN": "寄回"
  },
  {
    "character": "𗣓",
    "GX": "ġai̱¹",
    "GHC": "gie¹",
    "explanationEN": "hard; difficult",
    "explanationCN": "硬;难"
  },
  {
    "character": "𗼷",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "gravel",
    "explanationCN": "碎石"
  },
  {
    "character": "𗾻",
    "GX": "tshwu̱²",
    "GHC": "²",
    "explanationEN": "for a particular person, occasion, purpose, etc.",
    "explanationCN": "针对特定的人、场合、目的等。"
  },
  {
    "character": "𗺪",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "to sweep; broom",
    "explanationCN": "清扫;扫帚"
  },
  {
    "character": "𗻸",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "herbal medicine",
    "explanationCN": "草药"
  },
  {
    "character": "𗏴",
    "GX": "dźu¹",
    "GHC": "dźju¹",
    "explanationEN": "to show; to declare",
    "explanationCN": "展示;声明"
  },
  {
    "character": "𗥮",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "skill; artistry",
    "explanationCN": "技能;艺术性"
  },
  {
    "character": "𗪭",
    "GX": "ndə̱¹",
    "GHC": "də̱¹",
    "explanationEN": "ago; before",
    "explanationCN": "前;以前"
  },
  {
    "character": "𗫍",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗽤",
    "GX": "tṣhae̱²",
    "GHC": "tśhiej²",
    "explanationEN": "a stocked village",
    "explanationCN": "一个放养丰富的村庄"
  },
  {
    "character": "𗽓",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "marsh",
    "explanationCN": "沼泽"
  },
  {
    "character": "𗺢",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗺭",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "green",
    "explanationCN": "绿"
  },
  {
    "character": "𗺬",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "witch",
    "explanationCN": "女巫"
  },
  {
    "character": "𗺩",
    "GX": "ẓaa̱²",
    "GHC": "śia²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗺾",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "net; to be captured",
    "explanationCN": "网;待捕获"
  },
  {
    "character": "𗻧",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "barley",
    "explanationCN": "大麦"
  },
  {
    "character": "𗻒",
    "GX": "dźwaṃ²",
    "GHC": "dźjwã²",
    "explanationEN": "rafter",
    "explanationCN": "椽"
  },
  {
    "character": "𗧐",
    "GX": "bai̱²",
    "GHC": "bie²",
    "explanationEN": "to unite",
    "explanationCN": "团结起来"
  },
  {
    "character": "𗩧",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "mould; mildew; mouldy smell",
    "explanationCN": "模子;霉变;发霉的气味"
  },
  {
    "character": "𗪆",
    "GX": "nswə¹",
    "GHC": "sjwɨ̱¹",
    "explanationEN": "to think",
    "explanationCN": "思考"
  },
  {
    "character": "𗿋",
    "GX": "bo̱²",
    "GHC": "bo²",
    "explanationEN": "to brood; to hatch",
    "explanationCN": "育雏;到影线"
  },
  {
    "character": "𗻂",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "to light a fire",
    "explanationCN": "点火"
  },
  {
    "character": "𗻢",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻭",
    "GX": "γa̱¹",
    "GHC": "ˑa¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻞",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻕",
    "GX": "nẓaa̱²",
    "GHC": "śia̱²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗏤",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "to force; to compel",
    "explanationCN": "强制;强迫"
  },
  {
    "character": "𗬙",
    "GX": "tśhu²",
    "GHC": "tśhju²",
    "explanationEN": "that",
    "explanationCN": "那"
  },
  {
    "character": "𗣜",
    "GX": "thu²",
    "GHC": "thju²",
    "explanationEN": "this",
    "explanationCN": "这"
  },
  {
    "character": "𗻽",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "monkey",
    "explanationCN": "猴子"
  },
  {
    "character": "𗾹",
    "GX": "tshwu̱²",
    "GHC": "tshwu²",
    "explanationEN": "for a particular person, occasion, purpose, etc.",
    "explanationCN": "针对特定的人、场合、目的等。"
  },
  {
    "character": "𗤵",
    "GX": "rtśər¹",
    "GHC": "tśjɨr¹",
    "explanationEN": "to tie",
    "explanationCN": "打平"
  },
  {
    "character": "𗦵",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "big; thick",
    "explanationCN": "大;厚"
  },
  {
    "character": "𗣋",
    "GX": "khaṃ²",
    "GHC": "khjã²",
    "explanationEN": "enemy; foe",
    "explanationCN": "敌人;敌人"
  },
  {
    "character": "𗨤",
    "GX": "dzo²",
    "GHC": "dzjo²",
    "explanationEN": "ceremony",
    "explanationCN": "仪式"
  },
  {
    "character": "𗫩",
    "GX": "rdźər¹",
    "GHC": "dźjɨr¹",
    "explanationEN": "to give up; to abandon",
    "explanationCN": "放弃;放弃"
  },
  {
    "character": "𗽲",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "valley",
    "explanationCN": "山谷"
  },
  {
    "character": "𗧺",
    "GX": "tho̱ṃ¹",
    "GHC": "thow¹",
    "explanationEN": "proficient",
    "explanationCN": "熟练"
  },
  {
    "character": "𗣖",
    "GX": "ẓuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "familiar",
    "explanationCN": "熟悉"
  },
  {
    "character": "𗣗",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "to do",
    "explanationCN": "待办事项"
  },
  {
    "character": "𗢫",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "cheese",
    "explanationCN": "奶酪"
  },
  {
    "character": "𗾜",
    "GX": "tświw²",
    "GHC": "tśjwiw²",
    "explanationEN": "cheese",
    "explanationCN": "奶酪"
  },
  {
    "character": "𗢴",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "to call out; to shout",
    "explanationCN": "呼唤;大喊大叫"
  },
  {
    "character": "𗣘",
    "GX": "tṣuo¹",
    "GHC": "tśio̱w¹",
    "explanationEN": "orphan",
    "explanationCN": "孤儿"
  },
  {
    "character": "𗤃",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "to stutter; to faint",
    "explanationCN": "口吃;晕倒"
  },
  {
    "character": "𗣻",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "to add; to increase",
    "explanationCN": "补充;增加"
  },
  {
    "character": "𘊛",
    "GX": "dzoh¹",
    "GHC": "dzjọ¹",
    "explanationEN": "metaphor; just like",
    "explanationCN": "隐喻;就像"
  },
  {
    "character": "𘔲",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "corpse",
    "explanationCN": "尸体"
  },
  {
    "character": "𗢷",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "fresh",
    "explanationCN": "新鲜"
  },
  {
    "character": "𗤋",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "not exist; negation of 𗁁 and 𗿷",
    "explanationCN": "不存在; 和 的否定"
  },
  {
    "character": "𗥒",
    "GX": "ŋo̱²",
    "GHC": "ŋo²",
    "explanationEN": "grieved; sorrowful",
    "explanationCN": "悲痛;悲哀"
  },
  {
    "character": "𗤌",
    "GX": "tu̱¹",
    "GHC": "tu¹",
    "explanationEN": "sincere",
    "explanationCN": "真诚"
  },
  {
    "character": "𗤸",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "to play; to laugh and frolic",
    "explanationCN": "玩;大笑和嬉戏"
  },
  {
    "character": "𗫚",
    "GX": "khwi²",
    "GHC": "khjwi²",
    "explanationEN": "circle",
    "explanationCN": "圈"
  },
  {
    "character": "𗽐",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "a traditional unit of area",
    "explanationCN": "传统的面积单位"
  },
  {
    "character": "𗼂",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "to go hunting",
    "explanationCN": "去打猎"
  },
  {
    "character": "𗤅",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "to bring up",
    "explanationCN": "调出"
  },
  {
    "character": "𗦝",
    "GX": "dźeh²",
    "GHC": "dźjịj²",
    "explanationEN": "close relative",
    "explanationCN": "近亲"
  },
  {
    "character": "𗥊",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "stunned; stupefied",
    "explanationCN": "震惊;愣"
  },
  {
    "character": "𗨴",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗥃",
    "GX": "rllər¹",
    "GHC": "ljɨr¹",
    "explanationEN": "four",
    "explanationCN": "四"
  },
  {
    "character": "𗣝",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼹",
    "GX": "dźwo²",
    "GHC": "dźjwo²",
    "explanationEN": "cave; hole",
    "explanationCN": "洞穴;洞"
  },
  {
    "character": "𗾬",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "cuckoo",
    "explanationCN": "杜鹃"
  },
  {
    "character": "𗾲",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "name of a star",
    "explanationCN": "星星名称"
  },
  {
    "character": "𗿆",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "to clear away",
    "explanationCN": "清除"
  },
  {
    "character": "𗣍",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "to worry",
    "explanationCN": "担心"
  },
  {
    "character": "𗥎",
    "GX": "rġa̱r²",
    "GHC": "gar²",
    "explanationEN": "benefit; profit",
    "explanationCN": "效益;利润"
  },
  {
    "character": "𗻾",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "dowry",
    "explanationCN": "嫁妆"
  },
  {
    "character": "𗤆",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣾",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "centre",
    "explanationCN": "中心"
  },
  {
    "character": "𗤖",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "swift",
    "explanationCN": "迅速"
  },
  {
    "character": "𗨸",
    "GX": "γaə̱¹",
    "GHC": "ɣiə¹",
    "explanationEN": "close; near",
    "explanationCN": "关闭;近"
  },
  {
    "character": "𗼴",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "seedling",
    "explanationCN": "幼苗"
  },
  {
    "character": "𘊐",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "IMTER: IN; OPT: IN",
    "explanationCN": "IMTER：IN;选择： IN"
  },
  {
    "character": "𗏳",
    "GX": "rkawr²",
    "GHC": "kja̱r²",
    "explanationEN": "limit; end",
    "explanationCN": "限制;结束"
  },
  {
    "character": "𗩍",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "to own; to have",
    "explanationCN": "拥有;要有"
  },
  {
    "character": "𗩻",
    "GX": "tśwow¹",
    "GHC": "tśjwo¹",
    "explanationEN": "to tribute",
    "explanationCN": "致敬"
  },
  {
    "character": "𗏽",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "to mend; to sew",
    "explanationCN": "修补;缝制"
  },
  {
    "character": "𗦀",
    "GX": "ho̱?",
    "GHC": "xo?",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗥀",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "scabies",
    "explanationCN": "疥疮"
  },
  {
    "character": "𗨻",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "to do",
    "explanationCN": "做，使"
  },
  {
    "character": "𗪄",
    "GX": "thu̱¹",
    "GHC": "¹",
    "explanationEN": "to draw (a bow)",
    "explanationCN": "拉弓"
  },
  {
    "character": "𗢪",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "majestic; glorious",
    "explanationCN": "雄伟;光荣"
  },
  {
    "character": "𗣏",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "physique",
    "explanationCN": "体质"
  },
  {
    "character": "𗣕",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "human being; person",
    "explanationCN": "人;人"
  },
  {
    "character": "𗥌",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "emissary",
    "explanationCN": "使者"
  },
  {
    "character": "𗦊",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "to watch; to keep watch on",
    "explanationCN": "观看;继续观看"
  },
  {
    "character": "𗦐",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𗦡",
    "GX": "yo̱ṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "relatives",
    "explanationCN": "亲戚"
  },
  {
    "character": "𗧭",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨷",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "slowly",
    "explanationCN": "慢慢"
  },
  {
    "character": "𗽏",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "soil",
    "explanationCN": "土"
  },
  {
    "character": "𗾐",
    "GX": "lhwih¹",
    "GHC": "lhjwị¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗾭",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "cuckoo",
    "explanationCN": "杜鹃"
  },
  {
    "character": "𗿓",
    "GX": "lhə̱¹",
    "GHC": "lhə¹",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𗿐",
    "GX": "tświw²",
    "GHC": "tśjwiw²",
    "explanationEN": "light yellow",
    "explanationCN": "浅黄色"
  },
  {
    "character": "𗿠",
    "GX": "tświw²",
    "GHC": "tśjwiw²",
    "explanationEN": "amber",
    "explanationCN": "琥珀"
  },
  {
    "character": "𘔷",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "moisture",
    "explanationCN": "湿气"
  },
  {
    "character": "𘊙",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "fly; mosquito",
    "explanationCN": "飞;蚊子"
  },
  {
    "character": "𗫫",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "rank",
    "explanationCN": "排"
  },
  {
    "character": "𗢸",
    "GX": "llaw²",
    "GHC": "lja̱²",
    "explanationEN": "mouth",
    "explanationCN": "口"
  },
  {
    "character": "𗣔",
    "GX": "tu̱¹",
    "GHC": "tu¹",
    "explanationEN": "stupid; foolish",
    "explanationCN": "笨;愚蠢"
  },
  {
    "character": "𗧦",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "I; me",
    "explanationCN": "我;我"
  },
  {
    "character": "𗦦",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "wrist",
    "explanationCN": "腕"
  },
  {
    "character": "𗥏",
    "GX": "γo̱ṃh²",
    "GHC": "ˑọ²",
    "explanationEN": "dumbness",
    "explanationCN": "哑"
  },
  {
    "character": "𗪍",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "vulture",
    "explanationCN": "秃鹫"
  },
  {
    "character": "𘴃",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗾊",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "warehouse",
    "explanationCN": "仓库"
  },
  {
    "character": "𗾑",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "nephew",
    "explanationCN": "侄子"
  },
  {
    "character": "𗿟",
    "GX": "mmu²",
    "GHC": "mju̱²",
    "explanationEN": "deep pool",
    "explanationCN": "潭"
  },
  {
    "character": "𗻼",
    "GX": "ẓae̱ṃ¹",
    "GHC": "śiəj¹",
    "explanationEN": "man",
    "explanationCN": "男人"
  },
  {
    "character": "𗦩",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "toinfect",
    "explanationCN": "感染"
  },
  {
    "character": "𗪀",
    "GX": "ŋkhu²",
    "GHC": "khju̱²",
    "explanationEN": "to watch; to oversee",
    "explanationCN": "观看;监督"
  },
  {
    "character": "𗪨",
    "GX": "mae̱²",
    "GHC": "miej²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗿤",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "breeding",
    "explanationCN": "育种"
  },
  {
    "character": "𗿹",
    "GX": "yo̱ṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "crow",
    "explanationCN": "乌鸦"
  },
  {
    "character": "𗿼",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𗢶",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "circle",
    "explanationCN": "圈"
  },
  {
    "character": "𗪂",
    "GX": "ko¹",
    "GHC": "kjo¹",
    "explanationEN": "mother’s brother",
    "explanationCN": "母亲的哥哥"
  },
  {
    "character": "𗫯",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "origin; source",
    "explanationCN": "起源;源"
  },
  {
    "character": "𗿱",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "mother",
    "explanationCN": "妈妈"
  },
  {
    "character": "𗿻",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "phoenix",
    "explanationCN": "凤凰"
  },
  {
    "character": "𗿾",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "east; tail",
    "explanationCN": "东;尾巴"
  },
  {
    "character": "𘊜",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "pearl",
    "explanationCN": "珍珠"
  },
  {
    "character": "𗿽",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗺙",
    "GX": "rzur²",
    "GHC": "zjur²",
    "explanationEN": "comet",
    "explanationCN": "彗星"
  },
  {
    "character": "𗻓",
    "GX": "yo̱ṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗏫",
    "GX": "lu̱h²",
    "GHC": "lụ²",
    "explanationEN": "stem; stalk",
    "explanationCN": "茎;茎"
  },
  {
    "character": "𗏻",
    "GX": "rdźər²",
    "GHC": "dźjɨr²",
    "explanationEN": "to bear lately",
    "explanationCN": "最近忍耐"
  },
  {
    "character": "𗪵",
    "GX": "tṣae̱¹",
    "GHC": "tśiej¹",
    "explanationEN": "headgear; hat; cap",
    "explanationCN": "帽子;帽子;帽"
  },
  {
    "character": "𘔹",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "replete; to swell",
    "explanationCN": "充实;膨胀"
  },
  {
    "character": "𗺠",
    "GX": "tu̱¹",
    "GHC": "tu¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻵",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "onion; garlic",
    "explanationCN": "洋葱;蒜"
  },
  {
    "character": "𗺚",
    "GX": "swa̱¹",
    "GHC": "swa¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗺫",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "a kind of grass or vegetable",
    "explanationCN": "一种草或蔬菜"
  },
  {
    "character": "𗻘",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗧻",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗏉",
    "GX": "rγu̱r¹",
    "GHC": "ɣur¹",
    "explanationEN": "to encircle; to go round",
    "explanationCN": "包围;去转一圈"
  },
  {
    "character": "𗣑",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗽂",
    "GX": "γi̱w¹",
    "GHC": "ɣew¹",
    "explanationEN": "trench",
    "explanationCN": "壕"
  },
  {
    "character": "𗩂",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "spirit; mind",
    "explanationCN": "精神;介意"
  },
  {
    "character": "𗏬",
    "GX": "rqo̱r¹",
    "GHC": "kor¹",
    "explanationEN": "joint",
    "explanationCN": "关节"
  },
  {
    "character": "𗿺",
    "GX": "nnu¹",
    "GHC": "nju̱¹",
    "explanationEN": "to smoke out; to fumigate",
    "explanationCN": "抽烟;熏蒸"
  },
  {
    "character": "𗻔",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "to tie a knot to distinguish",
    "explanationCN": "打结以区分"
  },
  {
    "character": "𗣒",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "round",
    "explanationCN": "圆"
  },
  {
    "character": "𗦧",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "spirit; vigour",
    "explanationCN": "精神;精力"
  },
  {
    "character": "𗪅",
    "GX": "tṣao̱²",
    "GHC": "tśio²",
    "explanationEN": "headgear; hat; cap",
    "explanationCN": "帽子;帽子;帽"
  },
  {
    "character": "𘊖",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "mouse",
    "explanationCN": "鼠"
  },
  {
    "character": "𗣙",
    "GX": "thi̱w¹",
    "GHC": "thew¹",
    "explanationEN": "upright",
    "explanationCN": "直立"
  },
  {
    "character": "𗤈",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "to give birth",
    "explanationCN": "生育"
  },
  {
    "character": "𗥍",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "post; pillar; seat",
    "explanationCN": "发布;支柱;座位"
  },
  {
    "character": "𗟝",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "deerhorn, antler",
    "explanationCN": "鹿角， 鹿角"
  },
  {
    "character": "𘜦",
    "GX": "rywər¹",
    "GHC": "ˑjwɨr¹",
    "explanationEN": "fast; rapid",
    "explanationCN": "快;快速"
  },
  {
    "character": "𘜦",
    "GX": "rywər²",
    "GHC": "²",
    "explanationEN": "fast; rapid",
    "explanationCN": "快;快速"
  },
  {
    "character": "𘉩",
    "GX": "liw²",
    "GHC": "ljiw²",
    "explanationEN": "to pull; to drag",
    "explanationCN": "拉动;拖动"
  },
  {
    "character": "𘚳",
    "GX": "ẓaa̱ṃ¹",
    "GHC": "śjã¹",
    "explanationEN": "straw mat",
    "explanationCN": "草席"
  },
  {
    "character": "𘚶",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "wind",
    "explanationCN": "风"
  },
  {
    "character": "𘜡",
    "GX": "rśar¹",
    "GHC": "śjar¹",
    "explanationEN": "sudden",
    "explanationCN": "突然"
  },
  {
    "character": "𘚹",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "whirlwind",
    "explanationCN": "旋风"
  },
  {
    "character": "𘚭",
    "GX": "γwao̱h¹",
    "GHC": "ˑwiọ¹",
    "explanationEN": "to clear away",
    "explanationCN": "清除"
  },
  {
    "character": "𗬣",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "little livestock",
    "explanationCN": "小牲畜"
  },
  {
    "character": "𗬶",
    "GX": "qwaa̱¹",
    "GHC": "kiwa¹",
    "explanationEN": "to step on; to burst; to split",
    "explanationCN": "踩上去;爆裂;拆分"
  },
  {
    "character": "𗬦",
    "GX": "hi̱w²",
    "GHC": "xew²",
    "explanationEN": "musical instrument; a surname (?)",
    "explanationCN": "乐器;姓氏 （？）"
  },
  {
    "character": "𗃧",
    "GX": "nle̱²",
    "GHC": "le̱j²",
    "explanationEN": "to rely on",
    "explanationCN": "依赖"
  },
  {
    "character": "𗃱",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "backbone",
    "explanationCN": "骨干"
  },
  {
    "character": "𗃲",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj¹",
    "explanationEN": "to do; to act",
    "explanationCN": "去做;采取行动"
  },
  {
    "character": "𗬳",
    "GX": "pe̱¹",
    "GHC": "pej¹",
    "explanationEN": "outer; exterior",
    "explanationCN": "外;外部"
  },
  {
    "character": "𗃫",
    "GX": "piw¹",
    "GHC": "pjiw¹",
    "explanationEN": "poor; needy; impoverished",
    "explanationCN": "穷;贫困;贫困"
  },
  {
    "character": "𗃭",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "death",
    "explanationCN": "死亡"
  },
  {
    "character": "𗬤",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "foundation; basis",
    "explanationCN": "基础;基础"
  },
  {
    "character": "𗬬",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "ever; to have already",
    "explanationCN": "曾;已经"
  },
  {
    "character": "𗬯",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "to listen; to hear",
    "explanationCN": "倾听;听到"
  },
  {
    "character": "𗬱",
    "GX": "źu¹",
    "GHC": "źju¹",
    "explanationEN": "loyal; honest",
    "explanationCN": "忠诚;诚实"
  },
  {
    "character": "𗃩",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "remains",
    "explanationCN": "仍然"
  },
  {
    "character": "𗴐",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "urgent",
    "explanationCN": "紧急"
  },
  {
    "character": "𘓒",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "afraid; scared",
    "explanationCN": "害怕;害怕"
  },
  {
    "character": "𘓠",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "sad; sorrowful",
    "explanationCN": "伤心;悲哀"
  },
  {
    "character": "𘓓",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "filial piety",
    "explanationCN": "孝"
  },
  {
    "character": "𘓏",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "to sigh",
    "explanationCN": "叹息"
  },
  {
    "character": "𘓔",
    "GX": "məh²",
    "GHC": "mjɨ̣²",
    "explanationEN": "to forget",
    "explanationCN": "忘记"
  },
  {
    "character": "𘀁",
    "GX": "tho̱¹",
    "GHC": "tho¹",
    "explanationEN": "tired; weary",
    "explanationCN": "累;倦"
  },
  {
    "character": "𗃗",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "name of a star",
    "explanationCN": "星星名称"
  },
  {
    "character": "𗬪",
    "GX": "nlho̱²",
    "GHC": "lho̱²",
    "explanationEN": "bright; smooth",
    "explanationCN": "明亮;光滑"
  },
  {
    "character": "𗬵",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "to float; to hang",
    "explanationCN": "漂浮;挂起"
  },
  {
    "character": "𗴗",
    "GX": "pe¹",
    "GHC": "pjij¹",
    "explanationEN": "to come and go; to have contact",
    "explanationCN": "来来去去;联系"
  },
  {
    "character": "𗴛",
    "GX": "tśwoṃ²",
    "GHC": "tśjwow²",
    "explanationEN": "to contribute",
    "explanationCN": "贡献"
  },
  {
    "character": "𗃶",
    "GX": "mmi̱²",
    "GHC": "me²",
    "explanationEN": "illness",
    "explanationCN": "疾病"
  },
  {
    "character": "𘓎",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "beautiful",
    "explanationCN": "美丽"
  },
  {
    "character": "𗃝",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "baby; infant",
    "explanationCN": "婴儿;婴儿"
  },
  {
    "character": "𗼆",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼔",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼜",
    "GX": "γai̱²",
    "GHC": "ɣie²",
    "explanationEN": "interest; benefit",
    "explanationCN": "利息;效益"
  },
  {
    "character": "𗼣",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗼨",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼤",
    "GX": "vwo̱ṃ¹",
    "GHC": "wow¹",
    "explanationEN": "prosperous; flourishing",
    "explanationCN": "繁荣;繁荣"
  },
  {
    "character": "𗼄",
    "GX": "rtṣai̱r¹",
    "GHC": "tśier¹",
    "explanationEN": "benefit; interest",
    "explanationCN": "效益;利息"
  },
  {
    "character": "𗼕",
    "GX": "lo¹",
    "GHC": "ljo¹",
    "explanationEN": "good fortune",
    "explanationCN": "好运"
  },
  {
    "character": "𗼬",
    "GX": "ba̱ṃ¹",
    "GHC": "bã¹",
    "explanationEN": "to twine; to bind",
    "explanationCN": "到麻线;绑定"
  },
  {
    "character": "𗼇",
    "GX": "mi²",
    "GHC": "mji²",
    "explanationEN": "the name Tangut people call themselves",
    "explanationCN": "唐古特人自称的名字"
  },
  {
    "character": "𗼐",
    "GX": "qwaa̱ṃ¹",
    "GHC": "kiwã¹",
    "explanationEN": "to close",
    "explanationCN": "关闭"
  },
  {
    "character": "𗼦",
    "GX": "dzuh²",
    "GHC": "dzjụ²",
    "explanationEN": "round-grained non-glutinous rice",
    "explanationCN": "圆粒非糯米"
  },
  {
    "character": "𗼭",
    "GX": "dzuh²",
    "GHC": "dzjụ²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗼌",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "firm; staunch; unyielding",
    "explanationCN": "公司;止血;不屈"
  },
  {
    "character": "𗼓",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "emperor; monarch",
    "explanationCN": "皇帝;君主"
  },
  {
    "character": "𗺑",
    "GX": "mba¹",
    "GHC": "bja̱¹",
    "explanationEN": "limit; end",
    "explanationCN": "限制;结束"
  },
  {
    "character": "𘉄",
    "GX": "llwu²",
    "GHC": "ljwu²",
    "explanationEN": "witty remark; witticism; rhetoric",
    "explanationCN": "妙语;妙语;修辞"
  },
  {
    "character": "𗺔",
    "GX": "tshah²",
    "GHC": "tshjạ²",
    "explanationEN": "to increase",
    "explanationCN": "增加"
  },
  {
    "character": "𗅜",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "to discard; to abandon",
    "explanationCN": "丢弃;放弃"
  },
  {
    "character": "𗄱",
    "GX": "pe¹",
    "GHC": "pjij¹",
    "explanationEN": "deep green",
    "explanationCN": "深绿色"
  },
  {
    "character": "𗆁",
    "GX": "sa̱ṃ¹",
    "GHC": "sã¹",
    "explanationEN": "scattered",
    "explanationCN": "分散"
  },
  {
    "character": "𗆭",
    "GX": "dźiw¹",
    "GHC": "dźjiw¹",
    "explanationEN": "to pursue",
    "explanationCN": "追求"
  },
  {
    "character": "𗆈",
    "GX": "gih²",
    "GHC": "gjị²",
    "explanationEN": "wide; eclipse",
    "explanationCN": "宽;日蚀"
  },
  {
    "character": "𗹥",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "to speed; to run quickly",
    "explanationCN": "速度;快速运行"
  },
  {
    "character": "𗎧",
    "GX": "qha̱²",
    "GHC": "kha²",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𗎥",
    "GX": "mmi¹",
    "GHC": "mji̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗄪",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "to violate; to go against",
    "explanationCN": "违反;对抗"
  },
  {
    "character": "𗄺",
    "GX": "bu̱²",
    "GHC": "bu²",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𗅙",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "behind",
    "explanationCN": "后"
  },
  {
    "character": "𗅢",
    "GX": "nsi̱w²",
    "GHC": "sew²",
    "explanationEN": "to survey; to research",
    "explanationCN": "进行调查;研究"
  },
  {
    "character": "𗂙",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "difference",
    "explanationCN": "差异"
  },
  {
    "character": "𗆠",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "to subdue",
    "explanationCN": "制服"
  },
  {
    "character": "𗅺",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "goat",
    "explanationCN": "山羊"
  },
  {
    "character": "𗆍",
    "GX": "li̱w?",
    "GHC": "ləu?",
    "explanationEN": "to abandon",
    "explanationCN": "放弃"
  },
  {
    "character": "𗅫",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "to revere",
    "explanationCN": "崇敬"
  },
  {
    "character": "𗅵",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗆸",
    "GX": "bu̱²",
    "GHC": "bu²",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𗁱",
    "GX": "ye²",
    "GHC": "ˑjịj²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗆐",
    "GX": "lleh²",
    "GHC": "ljịj²",
    "explanationEN": "PFV: to come",
    "explanationCN": "来₂"
  },
  {
    "character": "𗆃",
    "GX": "pu̱h²",
    "GHC": "pụ²",
    "explanationEN": "weft",
    "explanationCN": "织物"
  },
  {
    "character": "𗅹",
    "GX": "ya¹",
    "GHC": "ˑja¹",
    "explanationEN": "east; tail",
    "explanationCN": "东;尾巴"
  },
  {
    "character": "𗅨",
    "GX": "meh²",
    "GHC": "mjịj²",
    "explanationEN": "nothing; not",
    "explanationCN": "无;不"
  },
  {
    "character": "𗅯",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "to prohibit; to ban; prohibition; ban",
    "explanationCN": "禁止;禁止;禁止;禁止"
  },
  {
    "character": "𗆕",
    "GX": "di¹",
    "GHC": "dji¹",
    "explanationEN": "internal organs; viscera; abdominal cavity",
    "explanationCN": "内脏;内脏;腹腔"
  },
  {
    "character": "𗆡",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "high",
    "explanationCN": "高"
  },
  {
    "character": "𗀵",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗁆",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "man of wealth; moneybags",
    "explanationCN": "富有的人;富翁"
  },
  {
    "character": "𗁫",
    "GX": "sə̱¹",
    "GHC": "sə¹",
    "explanationEN": "tail; end",
    "explanationCN": "尾巴;结束"
  },
  {
    "character": "𗂖",
    "GX": "rbo̱ṃr¹",
    "GHC": "bowr¹",
    "explanationEN": "bag; pocket",
    "explanationCN": "袋;口袋"
  },
  {
    "character": "𗂅",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "prime minister; government officials",
    "explanationCN": "总理;政府官员"
  },
  {
    "character": "𗂂",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "meat",
    "explanationCN": "肉"
  },
  {
    "character": "𗁑",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗂎",
    "GX": "tsheṃ²",
    "GHC": "tshjɨj²",
    "explanationEN": "purple; violet",
    "explanationCN": "紫色;紫"
  },
  {
    "character": "𗹜",
    "GX": "dźwə²",
    "GHC": "²",
    "explanationEN": "very close relative",
    "explanationCN": "非常近的亲戚"
  },
  {
    "character": "𗁠",
    "GX": "vwo̱ṃ²",
    "GHC": "wow²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘈺",
    "GX": "lə̱¹",
    "GHC": "¹",
    "explanationEN": "to hinder; to block",
    "explanationCN": "阻碍;阻止"
  },
  {
    "character": "𗹞",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𘈽",
    "GX": "sweṃ¹",
    "GHC": "sjwɨj¹",
    "explanationEN": "(Buddhist) effect; accumulation",
    "explanationCN": "（佛教）效果;积累"
  },
  {
    "character": "𗹪",
    "GX": "nle²",
    "GHC": "lji̱j²",
    "explanationEN": "to destroy; to damage",
    "explanationCN": "摧毁;造成伤害"
  },
  {
    "character": "𗁣",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "careful; fearful",
    "explanationCN": "小心;可怕"
  },
  {
    "character": "𗆦",
    "GX": "di¹",
    "GHC": "dji¹",
    "explanationEN": "concave",
    "explanationCN": "凹"
  },
  {
    "character": "𗶠",
    "GX": "ndzu̱²",
    "GHC": "dzu̱²",
    "explanationEN": "to sit; to reside",
    "explanationCN": "坐下;居住"
  },
  {
    "character": "𗶧",
    "GX": "dźwi²",
    "GHC": "dźjwi²",
    "explanationEN": "bed",
    "explanationCN": "床"
  },
  {
    "character": "𗢞",
    "GX": "nlle²",
    "GHC": "lji̱j²",
    "explanationEN": "devil; demon",
    "explanationCN": "魔鬼;恶魔"
  },
  {
    "character": "𗌉",
    "GX": "rne̱r¹",
    "GHC": "nejr¹",
    "explanationEN": "flat-iron; smoothness; moistness",
    "explanationCN": "扁铁;平滑;湿度"
  },
  {
    "character": "𗋨",
    "GX": "rlir²",
    "GHC": "ljir²",
    "explanationEN": "to extract butter; to curdle",
    "explanationCN": "提取黄油;凝结"
  },
  {
    "character": "𗋌",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "the ninth of the ten Heavenly Stems",
    "explanationCN": "十天干中的第九"
  },
  {
    "character": "𘚽",
    "GX": "lwəh¹",
    "GHC": "ljwɨ̣¹",
    "explanationEN": "to run; to speed",
    "explanationCN": "跑;速度"
  },
  {
    "character": "𗏇",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "written characters",
    "explanationCN": "书面字符"
  },
  {
    "character": "𗊅",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "to drink",
    "explanationCN": "喝"
  },
  {
    "character": "𗌊",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "pus",
    "explanationCN": "脓"
  },
  {
    "character": "𗢥",
    "GX": "nda̱¹",
    "GHC": "da̱¹",
    "explanationEN": "captivation by witchcraft",
    "explanationCN": "巫术的俘虏"
  },
  {
    "character": "𘓢",
    "GX": "ndze̱²",
    "GHC": "dze̱j²",
    "explanationEN": "to ride",
    "explanationCN": "骑行"
  },
  {
    "character": "𗋼",
    "GX": "tṣhaə̱¹",
    "GHC": "tśhiə¹",
    "explanationEN": "foam; froth",
    "explanationCN": "泡沫;泡沫"
  },
  {
    "character": "𘊢",
    "GX": "to²",
    "GHC": "tjo²",
    "explanationEN": "to stop; to cease",
    "explanationCN": "停止;停止"
  },
  {
    "character": "𗊚",
    "GX": "ni?",
    "GHC": "nji?",
    "explanationEN": "otter",
    "explanationCN": "水獭"
  },
  {
    "character": "𗎾",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "a comet",
    "explanationCN": "一颗彗星"
  },
  {
    "character": "𗊱",
    "GX": "dzo²",
    "GHC": "dzjo²",
    "explanationEN": "poetry; poem",
    "explanationCN": "诗歌;诗"
  },
  {
    "character": "𗋀",
    "GX": "tśəh²",
    "GHC": "tśjɨ̣²",
    "explanationEN": "to flow; to pass",
    "explanationCN": "流动;通过"
  },
  {
    "character": "𗋒",
    "GX": "keh¹",
    "GHC": "kjịj¹",
    "explanationEN": "stalk",
    "explanationCN": "茎"
  },
  {
    "character": "𗋟",
    "GX": "rqe̱r²",
    "GHC": "kejr²",
    "explanationEN": "crooked; aslant",
    "explanationCN": "歪;歪"
  },
  {
    "character": "𗋮",
    "GX": "ẓwai̱¹",
    "GHC": "śiwe¹",
    "explanationEN": "honey",
    "explanationCN": "蜂蜜"
  },
  {
    "character": "𗋂",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "to need; to want",
    "explanationCN": "需要;想要"
  },
  {
    "character": "𗌄",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "bone; skeleton",
    "explanationCN": "骨;骨架"
  },
  {
    "character": "𗊙",
    "GX": "hwi̱ṃ²",
    "GHC": "xwẽ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗢗",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "hell; inferno",
    "explanationCN": "地狱;地狱"
  },
  {
    "character": "𘔾",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗊊",
    "GX": "lo̱ṃh¹",
    "GHC": "lọ¹",
    "explanationEN": "reed",
    "explanationCN": "芦苇"
  },
  {
    "character": "𗋷",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "scorpion",
    "explanationCN": "蝎子"
  },
  {
    "character": "𘉺",
    "GX": "rtsər¹",
    "GHC": "tsjɨ̱r¹",
    "explanationEN": "chrysalis",
    "explanationCN": "蛹"
  },
  {
    "character": "𗬖",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "beast; animal",
    "explanationCN": "野兽;动物"
  },
  {
    "character": "𘉹",
    "GX": "tsu¹",
    "GHC": "tsju¹",
    "explanationEN": "anger; rage",
    "explanationCN": "愤怒;愤怒"
  },
  {
    "character": "𘊉",
    "GX": "keh¹",
    "GHC": "kjịj¹",
    "explanationEN": "rottenness",
    "explanationCN": "腐烂"
  },
  {
    "character": "𘊋",
    "GX": "po¹",
    "GHC": "pjo¹",
    "explanationEN": "slander",
    "explanationCN": "诽谤"
  },
  {
    "character": "𗋣",
    "GX": "rqhaa̱r¹",
    "GHC": "khiar¹",
    "explanationEN": "ghost; spirit",
    "explanationCN": "鬼;精神"
  },
  {
    "character": "𘊆",
    "GX": "bo²",
    "GHC": "bjo²",
    "explanationEN": "to punish; to penalize",
    "explanationCN": "惩罚;惩罚"
  },
  {
    "character": "𗇉",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "Han people",
    "explanationCN": "汉人"
  },
  {
    "character": "𗋰",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "poem",
    "explanationCN": "诗"
  },
  {
    "character": "𗼯",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "a plot of land",
    "explanationCN": "一块土地"
  },
  {
    "character": "𗐅",
    "GX": "be¹",
    "GHC": "bjij¹",
    "explanationEN": "to mend; to patch",
    "explanationCN": "修补;修补"
  },
  {
    "character": "𗫳",
    "GX": "rqai̱r¹",
    "GHC": "kier¹",
    "explanationEN": "to injure",
    "explanationCN": "伤害"
  },
  {
    "character": "𗫴",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "fruit",
    "explanationCN": "水果"
  },
  {
    "character": "𗫽",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "musk deer",
    "explanationCN": "麝"
  },
  {
    "character": "𗫼",
    "GX": "ləh²",
    "GHC": "ljɨ̣²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗬆",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗾞",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "day; daylight",
    "explanationCN": "日;日光"
  },
  {
    "character": "𗏏",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "to eat",
    "explanationCN": "吃"
  },
  {
    "character": "𗏑",
    "GX": "nno̱¹",
    "GHC": "no̱¹",
    "explanationEN": "weak",
    "explanationCN": "弱"
  },
  {
    "character": "𗺣",
    "GX": "nśi²",
    "GHC": "śji̱²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗧹",
    "GX": "rŋir¹",
    "GHC": "ŋjir¹",
    "explanationEN": "disaster; calamity",
    "explanationCN": "灾难;灾难"
  },
  {
    "character": "𗻄",
    "GX": "kwiṃ¹",
    "GHC": "kjwĩ¹",
    "explanationEN": "thatched cottage",
    "explanationCN": "草房"
  },
  {
    "character": "𗺼",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "macaque",
    "explanationCN": "猕猴"
  },
  {
    "character": "𗤾",
    "GX": "lo²",
    "GHC": "ljo²",
    "explanationEN": "elder brother",
    "explanationCN": "哥哥"
  },
  {
    "character": "𗣸",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "death",
    "explanationCN": "死亡"
  },
  {
    "character": "𗾔",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "the sun",
    "explanationCN": "太阳"
  },
  {
    "character": "𗽹",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "market",
    "explanationCN": "市场"
  },
  {
    "character": "𗾽",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "to run away; to flee",
    "explanationCN": "逃跑;逃跑"
  },
  {
    "character": "𗦷",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "before; formerly",
    "explanationCN": "以前;以前"
  },
  {
    "character": "𗧱",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗿁",
    "GX": "phə¹",
    "GHC": "phjɨ¹",
    "explanationEN": "to hear; to know",
    "explanationCN": "听;要知道"
  },
  {
    "character": "𗪯",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "wife; concubine",
    "explanationCN": "老婆;妾"
  },
  {
    "character": "𗺺",
    "GX": "si̱¹",
    "GHC": "se¹",
    "explanationEN": "flax",
    "explanationCN": "亚麻"
  },
  {
    "character": "𗬛",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "soft-shelled turtle",
    "explanationCN": "鳖"
  },
  {
    "character": "𗢺",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "before; formerly",
    "explanationCN": "以前;以前"
  },
  {
    "character": "𗬎",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "villain",
    "explanationCN": "小人"
  },
  {
    "character": "𗬐",
    "GX": "sə̱¹",
    "GHC": "sə¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗽄",
    "GX": "lləh²",
    "GHC": "ljɨ̣²",
    "explanationEN": "earthworm",
    "explanationCN": "蚯蚓"
  },
  {
    "character": "𗾡",
    "GX": "rbo̱ṃr¹",
    "GHC": "bowr¹",
    "explanationEN": "bee",
    "explanationCN": "蜜蜂"
  },
  {
    "character": "𗿿",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "sage; able and virtuous person",
    "explanationCN": "圣人;能干有德的人"
  },
  {
    "character": "𗣞",
    "GX": "rtswə̱r¹",
    "GHC": "tswər¹",
    "explanationEN": "to milk (a livestock)",
    "explanationCN": "挤奶（牲畜）"
  },
  {
    "character": "𗬏",
    "GX": "reṃ²",
    "GHC": "rjɨr²",
    "explanationEN": "third",
    "explanationCN": "第三"
  },
  {
    "character": "𗤺",
    "GX": "lhwə²",
    "GHC": "lhjwɨ²",
    "explanationEN": "abrupt; sudden; violent",
    "explanationCN": "突然的;突然;暴力"
  },
  {
    "character": "𗤻",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "flower",
    "explanationCN": "花"
  },
  {
    "character": "𗦶",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "to throw away; to abandon",
    "explanationCN": "扔掉;放弃"
  },
  {
    "character": "𗤕",
    "GX": "tsa̱ṃ¹",
    "GHC": "tsã¹",
    "explanationEN": "to burst; to blast",
    "explanationCN": "爆裂;爆炸"
  },
  {
    "character": "𗾠",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "bat",
    "explanationCN": "蝙蝠"
  },
  {
    "character": "𗏎",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "belly",
    "explanationCN": "腹"
  },
  {
    "character": "𗬢",
    "GX": "gwə¹",
    "GHC": "gjwɨ¹",
    "explanationEN": "firm; solid",
    "explanationCN": "公司;固体"
  },
  {
    "character": "𗤍",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "anger",
    "explanationCN": "愤怒"
  },
  {
    "character": "𗦎",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "to flow; to leak",
    "explanationCN": "流动;泄漏"
  },
  {
    "character": "𗧑",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "to break off with the fingers and thumb",
    "explanationCN": "用手指和拇指折断"
  },
  {
    "character": "𗨍",
    "GX": "hwaa̱¹",
    "GHC": "xiwa¹",
    "explanationEN": "flower; grass",
    "explanationCN": "花;草"
  },
  {
    "character": "𗧬",
    "GX": "tho̱ṃh²",
    "GHC": "thọ²",
    "explanationEN": "to grow up",
    "explanationCN": "为了长大"
  },
  {
    "character": "𗧰",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "to open wide; to be exposed to the sun",
    "explanationCN": "张大嘴巴;暴露在阳光下"
  },
  {
    "character": "𗪜",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "origin; source",
    "explanationCN": "起源;源"
  },
  {
    "character": "𗫉",
    "GX": "mbae̱¹",
    "GHC": "bie̱j¹",
    "explanationEN": "entertaimnent",
    "explanationCN": "企业"
  },
  {
    "character": "𗪈",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "gadfly",
    "explanationCN": "牛虻"
  },
  {
    "character": "𗽦",
    "GX": "hao̱ṃ²",
    "GHC": "xjow²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗽯",
    "GX": "phe̱ṃ¹",
    "GHC": "phəj¹",
    "explanationEN": "vast; wide",
    "explanationCN": "巨大;宽"
  },
  {
    "character": "𘔼",
    "GX": "nuo¹",
    "GHC": "nio̱w¹",
    "explanationEN": "CAUS: causal case",
    "explanationCN": "CAUS： 致病性"
  },
  {
    "character": "𘊘",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "tadpole",
    "explanationCN": "蝌蚪"
  },
  {
    "character": "𗦕",
    "GX": "tṣhaa̱ṃ¹",
    "GHC": "tśhiã¹",
    "explanationEN": "thatched cottage",
    "explanationCN": "草房"
  },
  {
    "character": "𗪝",
    "GX": "γwae̱h¹",
    "GHC": "ɣwẹj¹",
    "explanationEN": "to struggle; to fight",
    "explanationCN": "去挣扎;去战斗"
  },
  {
    "character": "𗏥",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗏲",
    "GX": "phe̱²",
    "GHC": "phej²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣢",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "bamboo or twig fence",
    "explanationCN": "竹篱笆或树枝篱笆"
  },
  {
    "character": "𗤼",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "night; darkness",
    "explanationCN": "晚上;黑暗"
  },
  {
    "character": "𗦢",
    "GX": "sa̱²",
    "GHC": "dza²",
    "explanationEN": "to survey; measure",
    "explanationCN": "进行调查;量"
  },
  {
    "character": "𗦤",
    "GX": "nle¹",
    "GHC": "lji̱j¹",
    "explanationEN": "to wait; to stay",
    "explanationCN": "等待;留下来"
  },
  {
    "character": "𗨟",
    "GX": "dź??",
    "GHC": "dź-?",
    "explanationEN": "oblique; lopsided",
    "explanationCN": "斜;不平衡的"
  },
  {
    "character": "𗩚",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "to exist; to have; to place",
    "explanationCN": "存在;拥有;放置"
  },
  {
    "character": "𗧽",
    "GX": "rtso̱ṃr²",
    "GHC": "tsowr²",
    "explanationEN": "to astonish; to shock; to voice",
    "explanationCN": "惊讶;休克;到语音"
  },
  {
    "character": "𗨰",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "to weave",
    "explanationCN": "编织"
  },
  {
    "character": "𗼺",
    "GX": "ndzu̱²",
    "GHC": "dzu̱²",
    "explanationEN": "to plant; to stand",
    "explanationCN": "种植;站立"
  },
  {
    "character": "𗾾",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "to fight; to struggle",
    "explanationCN": "去战斗;挣扎"
  },
  {
    "character": "𗺱",
    "GX": "ẓwaə̱¹",
    "GHC": "śiwə¹",
    "explanationEN": "mouse; rat",
    "explanationCN": "鼠;鼠"
  },
  {
    "character": "𗻤",
    "GX": "ẓwaə̱¹",
    "GHC": "śiwə¹",
    "explanationEN": "coral",
    "explanationCN": "珊瑚"
  },
  {
    "character": "𗻗",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "a kind of fruit",
    "explanationCN": "一种水果"
  },
  {
    "character": "𗏡",
    "GX": "qu̱h¹",
    "GHC": "kụ¹",
    "explanationEN": "behind; back",
    "explanationCN": "后;返回"
  },
  {
    "character": "𗦑",
    "GX": "hu̱¹",
    "GHC": "xu¹",
    "explanationEN": "clear; distinct",
    "explanationCN": "清楚;不同"
  },
  {
    "character": "𗺰",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "poisonous weed",
    "explanationCN": "毒草"
  },
  {
    "character": "𗺡",
    "GX": "ndẓaa̱²",
    "GHC": "dźia̱²",
    "explanationEN": "to graze; to herd",
    "explanationCN": "吃草;放牧"
  },
  {
    "character": "𗻻",
    "GX": "tṣaa̱¹",
    "GHC": "tśia¹",
    "explanationEN": "a kind of waterweeds",
    "explanationCN": "一种水草"
  },
  {
    "character": "𗻖",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "grass",
    "explanationCN": "草"
  },
  {
    "character": "𗻏",
    "GX": "kah¹",
    "GHC": "kjạ¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗦈",
    "GX": "thi̱w¹",
    "GHC": "thew¹",
    "explanationEN": "to penetrate",
    "explanationCN": "穿透"
  },
  {
    "character": "𗨛",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "to go out; to arise",
    "explanationCN": "出去;出现"
  },
  {
    "character": "𗫬",
    "GX": "ntṣaa̱²",
    "GHC": "tśia̱²",
    "explanationEN": "suffering; misery; distress",
    "explanationCN": "痛苦;苦难;窘迫"
  },
  {
    "character": "𗏹",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "often",
    "explanationCN": "经常"
  },
  {
    "character": "𗪞",
    "GX": "yu¹",
    "GHC": "ˑju¹",
    "explanationEN": "ashamed; abashed",
    "explanationCN": "羞;羞愧"
  },
  {
    "character": "𗪔",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "hedgehog",
    "explanationCN": "刺猬"
  },
  {
    "character": "𗦁",
    "GX": "γai̱h²",
    "GHC": "ɣie²",
    "explanationEN": "to harm; to damage",
    "explanationCN": "伤害;造成伤害"
  },
  {
    "character": "𗺯",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗤶",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "heart; mind",
    "explanationCN": "心;介意"
  },
  {
    "character": "𗾪",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "wisdom",
    "explanationCN": "智慧"
  },
  {
    "character": "𗟜",
    "GX": "rdzər¹",
    "GHC": "dzjɨr¹",
    "explanationEN": "rapid speed",
    "explanationCN": "快速"
  },
  {
    "character": "𘜤",
    "GX": "ha¹",
    "GHC": "xja¹",
    "explanationEN": "very fast; rapid",
    "explanationCN": "非常快;快速"
  },
  {
    "character": "𘚫",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "slow; tardy",
    "explanationCN": "慢;缓慢"
  },
  {
    "character": "𗺆",
    "GX": "lha¹",
    "GHC": "lhja¹",
    "explanationEN": "wide-open",
    "explanationCN": "大开大合"
  },
  {
    "character": "𘚪",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "to stand up; to set up",
    "explanationCN": "站起来;设置"
  },
  {
    "character": "𘚴",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "bee; wasp",
    "explanationCN": "蜜蜂;黄蜂"
  },
  {
    "character": "𘚯",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗃠",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "imperial court",
    "explanationCN": "御苑"
  },
  {
    "character": "𗴠",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "politics",
    "explanationCN": "政治"
  },
  {
    "character": "𗃡",
    "GX": "puh²",
    "GHC": "pjụ²",
    "explanationEN": "hat; crown",
    "explanationCN": "帽子;冠"
  },
  {
    "character": "𘓍",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "enemy; foe",
    "explanationCN": "敌人;敌人"
  },
  {
    "character": "𗴕",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "respect",
    "explanationCN": "尊"
  },
  {
    "character": "𗬥",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "the sun; day",
    "explanationCN": "太阳;日"
  },
  {
    "character": "𗬫",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "surface",
    "explanationCN": "表面"
  },
  {
    "character": "𗃷",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗃼",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𗘯",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "INTER: OUT; OPT: OUT",
    "explanationCN": "国际米兰：出局;选择：退出"
  },
  {
    "character": "𗃣",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "to stagnate; to leave over; to remain",
    "explanationCN": "停滞不前;留下;留下"
  },
  {
    "character": "𗃨",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "to change irregularly",
    "explanationCN": "不定期更改"
  },
  {
    "character": "𗴒",
    "GX": "kah¹",
    "GHC": "kjạ¹",
    "explanationEN": "to fear.ᴀ",
    "explanationCN": "恐惧。"
  },
  {
    "character": "𗴞",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "to revere; to fear",
    "explanationCN": "崇敬;恐惧"
  },
  {
    "character": "𘓐",
    "GX": "dzwo²",
    "GHC": "dzjwo²",
    "explanationEN": "person",
    "explanationCN": "人"
  },
  {
    "character": "𘓚",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "gadfly",
    "explanationCN": "牛虻"
  },
  {
    "character": "𘓙",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "to hate",
    "explanationCN": "恨"
  },
  {
    "character": "𗼃",
    "GX": "śeṃ²",
    "GHC": "śjɨj²",
    "explanationEN": "sage; able and virtuous person",
    "explanationCN": "圣人;能干有德的人"
  },
  {
    "character": "𗼖",
    "GX": "lo¹",
    "GHC": "¹",
    "explanationEN": "good fortune",
    "explanationCN": "好运"
  },
  {
    "character": "𗼈",
    "GX": "nah¹",
    "GHC": "njạ¹",
    "explanationEN": "god; deity",
    "explanationCN": "神;神"
  },
  {
    "character": "𗼛",
    "GX": "rtṣai̱r¹",
    "GHC": "tśier¹",
    "explanationEN": "right side",
    "explanationCN": "右"
  },
  {
    "character": "𗺐",
    "GX": "lhuo¹",
    "GHC": "lhio̱w¹",
    "explanationEN": "to strangle",
    "explanationCN": "勒死"
  },
  {
    "character": "𘉅",
    "GX": "dza̱¹",
    "GHC": "dza¹",
    "explanationEN": "miscellaneous; mixed",
    "explanationCN": "杂项;混合"
  },
  {
    "character": "𗂼",
    "GX": "ye²",
    "GHC": "ˑjij²",
    "explanationEN": "banquet; feast",
    "explanationCN": "宴会;盛宴"
  },
  {
    "character": "𗃇",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "to hide; to conceal",
    "explanationCN": "躲藏起来;隐藏"
  },
  {
    "character": "𗆽",
    "GX": "tṣhaə̱¹",
    "GHC": "tśhiə¹",
    "explanationEN": "to take out",
    "explanationCN": "外卖"
  },
  {
    "character": "𗁓",
    "GX": "twa̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗂇",
    "GX": "qwae̱¹",
    "GHC": "kiwej¹",
    "explanationEN": "arm; wrist",
    "explanationCN": "手臂;腕"
  },
  {
    "character": "𗂡",
    "GX": "rpə̱r¹",
    "GHC": "pər¹",
    "explanationEN": "to clean; to clear away",
    "explanationCN": "清洁;清除"
  },
  {
    "character": "𗂲",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "to pierce; to penetrate",
    "explanationCN": "刺穿;穿透"
  },
  {
    "character": "𗆾",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "inferior; to betray",
    "explanationCN": "劣;背叛"
  },
  {
    "character": "𗆣",
    "GX": "nye¹",
    "GHC": "ˑjịj¹",
    "explanationEN": "full",
    "explanationCN": "满"
  },
  {
    "character": "𗁬",
    "GX": "tho̱ṃ¹",
    "GHC": "thow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗹨",
    "GX": "yeṃ²",
    "GHC": "ˑjɨj²",
    "explanationEN": "tent; house; temple",
    "explanationCN": "帐篷;房子;寺庙"
  },
  {
    "character": "𗀷",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "penis",
    "explanationCN": "阴茎"
  },
  {
    "character": "𗁁",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "to have; to exist(inanimate/immobile)",
    "explanationCN": "拥有;存在（无生命/不动）"
  },
  {
    "character": "𗁲",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "hair; feather",
    "explanationCN": "毛;羽毛"
  },
  {
    "character": "𗁟",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "treasure",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗅶",
    "GX": "twə̱h¹",
    "GHC": "twə̣¹",
    "explanationEN": "to take out; to catch",
    "explanationCN": "取出;接住"
  },
  {
    "character": "𗂢",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "even; well-distributed",
    "explanationCN": "甚至;分布良好"
  },
  {
    "character": "𗂠",
    "GX": "hoṃ²",
    "GHC": "xjow²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗂶",
    "GX": "rə̱r¹",
    "GHC": "rər¹",
    "explanationEN": "to stitch; to sew",
    "explanationCN": "缝合;缝制"
  },
  {
    "character": "𗹰",
    "GX": "tśəh¹",
    "GHC": "tśjɨ̣¹",
    "explanationEN": "to encircle; to go round",
    "explanationCN": "包围;去转一圈"
  },
  {
    "character": "𗹵",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "railing",
    "explanationCN": "栏杆"
  },
  {
    "character": "𗹩",
    "GX": "ŋki¹",
    "GHC": "kji̱¹",
    "explanationEN": "to make smooth with a file; to grind",
    "explanationCN": "使文件平滑;研磨"
  },
  {
    "character": "𗂔",
    "GX": "sa̱¹",
    "GHC": "¹",
    "explanationEN": "to swell; to choke",
    "explanationCN": "膨胀;窒息"
  },
  {
    "character": "𗶣",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗶩",
    "GX": "thi²",
    "GHC": "thji²",
    "explanationEN": "land",
    "explanationCN": "土地"
  },
  {
    "character": "𗊍",
    "GX": "ŋqwai̱¹",
    "GHC": "kiwe̱¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗾀",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "powerful",
    "explanationCN": "强"
  },
  {
    "character": "𗊎",
    "GX": "do̱ṃ²",
    "GHC": "dow²",
    "explanationEN": "dysentery",
    "explanationCN": "痢疾"
  },
  {
    "character": "𗢡",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "coma; dying words",
    "explanationCN": "昏迷;临终之词"
  },
  {
    "character": "𗋓",
    "GX": "rzər²",
    "GHC": "zjɨ̱r²",
    "explanationEN": "breeding",
    "explanationCN": "育种"
  },
  {
    "character": "𘉰",
    "GX": "ŋah²",
    "GHC": "ŋjạ²",
    "explanationEN": "scar; defect; drawback",
    "explanationCN": "疤;缺陷;缺点"
  },
  {
    "character": "𗊩",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "harmonious",
    "explanationCN": "和谐"
  },
  {
    "character": "𗊁",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "mud",
    "explanationCN": "泥"
  },
  {
    "character": "𗊏",
    "GX": "nih²",
    "GHC": "njị²",
    "explanationEN": "pearl",
    "explanationCN": "珍珠"
  },
  {
    "character": "𗋻",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "bridge",
    "explanationCN": "桥"
  },
  {
    "character": "𗽾",
    "GX": "nsa̱r¹",
    "GHC": "sa̱r¹",
    "explanationEN": "to shake; to shock",
    "explanationCN": "摇晃;休克"
  },
  {
    "character": "𗎽",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "dust",
    "explanationCN": "灰尘"
  },
  {
    "character": "𗋞",
    "GX": "rne̱r¹",
    "GHC": "nejr¹",
    "explanationEN": "lubrication",
    "explanationCN": "润滑"
  },
  {
    "character": "𗋄",
    "GX": "su̱²",
    "GHC": "su²",
    "explanationEN": "(used before disyllabic verbs) self; oneself",
    "explanationCN": "（用在双音节动词之前） self;自己"
  },
  {
    "character": "𗋵",
    "GX": "su̱²",
    "GHC": "su²",
    "explanationEN": "self",
    "explanationCN": "自我"
  },
  {
    "character": "𗋚",
    "GX": "və²",
    "GHC": "wjɨ²",
    "explanationEN": "PFV: OUT; IMP: OUT",
    "explanationCN": "PFV： 出局;小鬼：出局"
  },
  {
    "character": "𗺒",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "lintel (over a door)",
    "explanationCN": "门楣 （Over a door）"
  },
  {
    "character": "𗢤",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "grave; tomb",
    "explanationCN": "坟墓;墓"
  },
  {
    "character": "𗾅",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "prison; jail",
    "explanationCN": "监狱;监狱"
  },
  {
    "character": "𘉷",
    "GX": "rkwər¹",
    "GHC": "kjwɨ̱r¹",
    "explanationEN": "a kind of coarse cloth",
    "explanationCN": "一种粗布"
  },
  {
    "character": "𘉻",
    "GX": "lhi̱h²",
    "GHC": "lhẹ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘉡",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "power; might",
    "explanationCN": "权力;可能"
  },
  {
    "character": "𘚀",
    "GX": "sa̱¹",
    "GHC": "¹",
    "explanationEN": "to be stunned",
    "explanationCN": "被惊呆"
  },
  {
    "character": "𗽽",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "clothing",
    "explanationCN": "服装"
  },
  {
    "character": "𗾂",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "valley; gorge",
    "explanationCN": "山谷;峡谷"
  },
  {
    "character": "𗐉",
    "GX": "rmar¹",
    "GHC": "mjar¹",
    "explanationEN": "hair",
    "explanationCN": "毛"
  },
  {
    "character": "𗫵",
    "GX": "rqai̱r¹",
    "GHC": "kier¹",
    "explanationEN": "nightmare",
    "explanationCN": "噩梦"
  },
  {
    "character": "𗢾",
    "GX": "kweṃh²",
    "GHC": "kjwɨ̣j²",
    "explanationEN": "alone; by oneself",
    "explanationCN": "独自;单独"
  },
  {
    "character": "𗣦",
    "GX": "świw¹",
    "GHC": "śjwiw¹",
    "explanationEN": "to attend; to follow",
    "explanationCN": "参加;关注"
  },
  {
    "character": "𗥟",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "to seduce",
    "explanationCN": "引诱"
  },
  {
    "character": "𗼼",
    "GX": "qhau̱²",
    "GHC": "khu²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗥜",
    "GX": "qwə̱h¹",
    "GHC": "kwə̣¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨵",
    "GX": "kwəh¹",
    "GHC": "kjwɨ̣¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗏪",
    "GX": "vi̱h¹",
    "GHC": "¹",
    "explanationEN": "coma; dying words",
    "explanationCN": "昏迷;临终之词"
  },
  {
    "character": "𗤏",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "mallet; beetle",
    "explanationCN": "槌;甲虫"
  },
  {
    "character": "𗥅",
    "GX": "təh¹",
    "GHC": "¹",
    "explanationEN": "often; constantly",
    "explanationCN": "经常;不断"
  },
  {
    "character": "𗥐",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "tail; the east",
    "explanationCN": "尾巴;东方"
  },
  {
    "character": "𗨁",
    "GX": "phu²",
    "GHC": "phju²",
    "explanationEN": "up; above; over",
    "explanationCN": "向上;以上;多"
  },
  {
    "character": "𗨎",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "to count; to calculate",
    "explanationCN": "数;计算"
  },
  {
    "character": "𗪿",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗾵",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "minced meat; ground meat",
    "explanationCN": "肉末;碎肉"
  },
  {
    "character": "𗣥",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "to rise; to get up; to stand up",
    "explanationCN": "上升;起床;站起来"
  },
  {
    "character": "𗤽",
    "GX": "si̱ṃ¹",
    "GHC": "sẽ¹",
    "explanationEN": "to think",
    "explanationCN": "思考"
  },
  {
    "character": "𗦲",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "a hundred million",
    "explanationCN": "一亿"
  },
  {
    "character": "𗨅",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "frivolous",
    "explanationCN": "轻浮"
  },
  {
    "character": "𗩱",
    "GX": "nwi²",
    "GHC": "njwi²",
    "explanationEN": "can; to be able to",
    "explanationCN": "能;才能"
  },
  {
    "character": "𗾫",
    "GX": "nse²",
    "GHC": "sji̱j²",
    "explanationEN": "thought",
    "explanationCN": "思想"
  },
  {
    "character": "𗻇",
    "GX": "śa²",
    "GHC": "²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗨆",
    "GX": "ẓae̱ṃ²",
    "GHC": "śiəj²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗨣",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "to agree on",
    "explanationCN": "达成一致"
  },
  {
    "character": "𗦹",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "visitor; guest",
    "explanationCN": "游客;客人"
  },
  {
    "character": "𗦘",
    "GX": "qhaə̱¹",
    "GHC": "khiə¹",
    "explanationEN": "quiet",
    "explanationCN": "安静"
  },
  {
    "character": "𗼻",
    "GX": "lləh²",
    "GHC": "ljɨ̣²",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗾖",
    "GX": "ŋġo̱r¹",
    "GHC": "go̱r¹",
    "explanationEN": "man; male",
    "explanationCN": "男人;雄"
  },
  {
    "character": "𗤊",
    "GX": "su̱²",
    "GHC": "su²",
    "explanationEN": "to plot; to scheme; to conspire",
    "explanationCN": "策划;到计划;密谋"
  },
  {
    "character": "𗥄",
    "GX": "təh¹",
    "GHC": "tjɨ̣¹",
    "explanationEN": "often; constantly",
    "explanationCN": "经常;不断"
  },
  {
    "character": "𗦸",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "what; which; how; why",
    "explanationCN": "什么;哪;如何;为什么"
  },
  {
    "character": "𗽿",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "pointed; tapering",
    "explanationCN": "尖;逐渐"
  },
  {
    "character": "𗨃",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "foolish; stupid",
    "explanationCN": "愚蠢;笨"
  },
  {
    "character": "𗪛",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "to publicize; to propagate",
    "explanationCN": "进行宣传;传播"
  },
  {
    "character": "𗼵",
    "GX": "hao̱²",
    "GHC": "xjow²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗩴",
    "GX": "nni̱w²",
    "GHC": "ne̱w²",
    "explanationEN": "good; mercy",
    "explanationCN": "好;怜悯"
  },
  {
    "character": "𗥝",
    "GX": "ndu̱¹",
    "GHC": "du̱¹",
    "explanationEN": "slave; servant",
    "explanationCN": "奴隶;仆人"
  },
  {
    "character": "𗥠",
    "GX": "mme²",
    "GHC": "mji̱j²",
    "explanationEN": "name; title",
    "explanationCN": "名字;标题"
  },
  {
    "character": "𗦻",
    "GX": "mme²",
    "GHC": "mji̱j²",
    "explanationEN": "name; title",
    "explanationCN": "名字;标题"
  },
  {
    "character": "𗣧",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "thin",
    "explanationCN": "薄"
  },
  {
    "character": "𗢻",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣤",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "border; boundary",
    "explanationCN": "边境;边界"
  },
  {
    "character": "𗤞",
    "GX": "peṃ¹",
    "GHC": "pjɨj¹",
    "explanationEN": "tent",
    "explanationCN": "帐篷"
  },
  {
    "character": "𗦼",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗤙",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "native place; old home",
    "explanationCN": "故里;老房子"
  },
  {
    "character": "𗬒",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗪋",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "line; ranks",
    "explanationCN": "线;行列"
  },
  {
    "character": "𗏭",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗤛",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗤐",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "to combine; to unite",
    "explanationCN": "组合在一起;团结起来"
  },
  {
    "character": "𗦺",
    "GX": "pha̱ṃ¹",
    "GHC": "phã¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨀",
    "GX": "dź??",
    "GHC": "dź-?",
    "explanationEN": "to abandon; to exempt",
    "explanationCN": "放弃;豁免"
  },
  {
    "character": "𗩝",
    "GX": "peṃh¹",
    "GHC": "pjɨ̣j¹",
    "explanationEN": "horn",
    "explanationCN": "角"
  },
  {
    "character": "𗽃",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "a low bank of earth between fields",
    "explanationCN": "田野之间的低矮土堤"
  },
  {
    "character": "𗾣",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "extremely high",
    "explanationCN": "极高"
  },
  {
    "character": "𗿗",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "owl",
    "explanationCN": "猫头鹰"
  },
  {
    "character": "𗾯",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "arrow",
    "explanationCN": "箭"
  },
  {
    "character": "𗾄",
    "GX": "llə̱h¹",
    "GHC": "lə̣¹",
    "explanationEN": "to bury",
    "explanationCN": "埋葬"
  },
  {
    "character": "𗏾",
    "GX": "la̱²",
    "GHC": "²",
    "explanationEN": "grave; tomb",
    "explanationCN": "坟墓;墓"
  },
  {
    "character": "𗪗",
    "GX": "rdzwər¹",
    "GHC": "dzjwɨr¹",
    "explanationEN": "to shiver; to tremble",
    "explanationCN": "发抖;颤抖"
  },
  {
    "character": "𗤎",
    "GX": "nsa̱r¹",
    "GHC": "sa̱r¹",
    "explanationEN": "to irrigate; to pour",
    "explanationCN": "灌溉;倾倒"
  },
  {
    "character": "𗦏",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗦞",
    "GX": "kwəh¹",
    "GHC": "kjwɨ̣¹",
    "explanationEN": "to kowtow; to worship on bended knees",
    "explanationCN": "磕头;屈膝敬拜"
  },
  {
    "character": "𗨜",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "longevity",
    "explanationCN": "长寿"
  },
  {
    "character": "𗩔",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "shining",
    "explanationCN": "闪亮"
  },
  {
    "character": "𗩞",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "down",
    "explanationCN": "下"
  },
  {
    "character": "𗩙",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗪾",
    "GX": "qu̱h¹",
    "GHC": "kụ¹",
    "explanationEN": "loose",
    "explanationCN": "松"
  },
  {
    "character": "𗿝",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "wild goose",
    "explanationCN": "雁"
  },
  {
    "character": "𗦗",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "man",
    "explanationCN": "男人"
  },
  {
    "character": "𗏩",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "an old-fashioned belt",
    "explanationCN": "一条老式腰带"
  },
  {
    "character": "𗧳",
    "GX": "kha²",
    "GHC": "khja̱²",
    "explanationEN": "to twine; to wind",
    "explanationCN": "到麻线;风"
  },
  {
    "character": "𗽻",
    "GX": "qao̱ṃ²",
    "GHC": "kiow²",
    "explanationEN": "tool; implement",
    "explanationCN": "工具;实现"
  },
  {
    "character": "𗽡",
    "GX": "rver²",
    "GHC": "wjijr²",
    "explanationEN": "to dig",
    "explanationCN": "挖掘"
  },
  {
    "character": "𗾢",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𗺤",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "a kind of herb",
    "explanationCN": "一种草药"
  },
  {
    "character": "𗺳",
    "GX": "vah²",
    "GHC": "wjạ²",
    "explanationEN": "a kind of herb",
    "explanationCN": "一种草药"
  },
  {
    "character": "𗻈",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "barnyard grass",
    "explanationCN": "稗"
  },
  {
    "character": "𗫡",
    "GX": "nə²",
    "GHC": "njɨ²",
    "explanationEN": "to arrive; to spread",
    "explanationCN": "到达;传播"
  },
  {
    "character": "𗩌",
    "GX": "nlhu¹",
    "GHC": "lhju̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗏨",
    "GX": "rγu̱r¹",
    "GHC": "ɣur¹",
    "explanationEN": "corpse",
    "explanationCN": "尸体"
  },
  {
    "character": "𗥶",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗧝",
    "GX": "mo²",
    "GHC": "mjo²",
    "explanationEN": "to realize",
    "explanationCN": "实现"
  },
  {
    "character": "𗩣",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "to scatter; to spill",
    "explanationCN": "分散;溢出"
  },
  {
    "character": "𗽅",
    "GX": "tṣaə̱¹",
    "GHC": "tśiə¹",
    "explanationEN": "steep",
    "explanationCN": "陡"
  },
  {
    "character": "𗦭",
    "GX": "zu̱²",
    "GHC": "zu²",
    "explanationEN": "to eliminate; to clean up",
    "explanationCN": "消除;清理"
  },
  {
    "character": "𗻆",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗤜",
    "GX": "loṃ¹",
    "GHC": "ljow¹",
    "explanationEN": "ball; ovum",
    "explanationCN": "球;卵子"
  },
  {
    "character": "𘚰",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "amber",
    "explanationCN": "琥珀"
  },
  {
    "character": "𘚮",
    "GX": "ŋqo̱²",
    "GHC": "ko̱²",
    "explanationEN": "sail",
    "explanationCN": "帆"
  },
  {
    "character": "𗃺",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "to belch; to breathe ones last",
    "explanationCN": "打嗝;呼吸到最后"
  },
  {
    "character": "𗾃",
    "GX": "rqha̱r¹",
    "GHC": "khar¹",
    "explanationEN": "dry; thirsty",
    "explanationCN": "干;渴"
  },
  {
    "character": "𗃪",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "level; smooth",
    "explanationCN": "水平;光滑"
  },
  {
    "character": "𗴖",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "enemy; foe",
    "explanationCN": "敌人;敌人"
  },
  {
    "character": "𗃹",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "to be stunned",
    "explanationCN": "被惊呆"
  },
  {
    "character": "𘓜",
    "GX": "dzi¹",
    "GHC": "dźji¹",
    "explanationEN": "narrow",
    "explanationCN": "窄"
  },
  {
    "character": "𘓝",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "label; mark",
    "explanationCN": "标签;马克"
  },
  {
    "character": "𗎫",
    "GX": "rtser²",
    "GHC": "tsji̱r²",
    "explanationEN": "nature; character",
    "explanationCN": "自然界;字符"
  },
  {
    "character": "𗄻",
    "GX": "nwə̱¹",
    "GHC": "nwə¹",
    "explanationEN": "to know; to realize",
    "explanationCN": "要知道;实现"
  },
  {
    "character": "𗅄",
    "GX": "la̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "thick",
    "explanationCN": "厚"
  },
  {
    "character": "𗄯",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "clear; obvious",
    "explanationCN": "清楚;明显"
  },
  {
    "character": "𗅍",
    "GX": "lweṃh¹",
    "GHC": "ljwɨ̣j¹",
    "explanationEN": "ignorant; muddle-headed",
    "explanationCN": "无知;糊涂"
  },
  {
    "character": "𗆩",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "toil",
    "explanationCN": "辛劳"
  },
  {
    "character": "𗁻",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "skeleton; marrow",
    "explanationCN": "骨架;骨髓"
  },
  {
    "character": "𗡼",
    "GX": "rber²",
    "GHC": "bji̱j²",
    "explanationEN": "to help; to aid",
    "explanationCN": "提供帮助;以提供帮助"
  },
  {
    "character": "𗆙",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "warm",
    "explanationCN": "温暖"
  },
  {
    "character": "𗅦",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "anger",
    "explanationCN": "愤怒"
  },
  {
    "character": "𗅂",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "to manage; ministry",
    "explanationCN": "管理;部"
  },
  {
    "character": "𗅃",
    "GX": "lwuh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "level; smooth (land)",
    "explanationCN": "水平;平滑 （土地）"
  },
  {
    "character": "𗁌",
    "GX": "rdi̱r²",
    "GHC": "de̱r²",
    "explanationEN": "to grind",
    "explanationCN": "研磨"
  },
  {
    "character": "𗂝",
    "GX": "dźih¹",
    "GHC": "dźjị¹",
    "explanationEN": "to cut; to reap",
    "explanationCN": "切割;收割"
  },
  {
    "character": "𗂣",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "year; age",
    "explanationCN": "年;年龄"
  },
  {
    "character": "𗁜",
    "GX": "rvor¹",
    "GHC": "wjor¹",
    "explanationEN": "backbone",
    "explanationCN": "骨干"
  },
  {
    "character": "𗂩",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗹳",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "principle; discipline",
    "explanationCN": "原则;学科"
  },
  {
    "character": "𗹠",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "skilful; ingenious",
    "explanationCN": "巧;巧"
  },
  {
    "character": "𗹸",
    "GX": "lhuo¹",
    "GHC": "lhio̱w¹",
    "explanationEN": "grave",
    "explanationCN": "坟墓"
  },
  {
    "character": "𗹼",
    "GX": "qhwaa̱¹",
    "GHC": "khiwa¹",
    "explanationEN": "kidney",
    "explanationCN": "肾"
  },
  {
    "character": "𗇀",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "to throw; to abandon",
    "explanationCN": "投掷;放弃"
  },
  {
    "character": "𗊷",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "cold",
    "explanationCN": "冷"
  },
  {
    "character": "𗢖",
    "GX": "tshweṃ¹",
    "GHC": "tshjwɨj¹",
    "explanationEN": "stupor; coma",
    "explanationCN": "昏迷;昏迷"
  },
  {
    "character": "𗏃",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "an ancient unit of weight (1/24 liang)",
    "explanationCN": "古代重量单位（1/24 liang）"
  },
  {
    "character": "𗏀",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "dust",
    "explanationCN": "灰尘"
  },
  {
    "character": "𗋐",
    "GX": "tśhu¹",
    "GHC": "tśhju¹",
    "explanationEN": "to exist.ᴀ(inside); to have.ᴀ",
    "explanationCN": "存在.ᴀ（inside）;拥有。"
  },
  {
    "character": "𗋪",
    "GX": "vwo̱h¹",
    "GHC": "ˑwiọ¹",
    "explanationEN": "circle",
    "explanationCN": "圈"
  },
  {
    "character": "𗋡",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "colored glaze",
    "explanationCN": "彩釉"
  },
  {
    "character": "𗌈",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "confusion",
    "explanationCN": "混乱"
  },
  {
    "character": "𗢜",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𗌓",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "butter",
    "explanationCN": "黄油"
  },
  {
    "character": "𗇈",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "cloth",
    "explanationCN": "布"
  },
  {
    "character": "𗊟",
    "GX": "nso̱¹",
    "GHC": "so̱¹",
    "explanationEN": "sound",
    "explanationCN": "声音"
  },
  {
    "character": "𗊹",
    "GX": "low¹",
    "GHC": "ljow¹",
    "explanationEN": "winding; crooked",
    "explanationCN": "绕组;歪"
  },
  {
    "character": "𗊈",
    "GX": "hwi̱¹",
    "GHC": "xwe¹",
    "explanationEN": "to howl",
    "explanationCN": "嚎叫"
  },
  {
    "character": "𗊴",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "blood",
    "explanationCN": "血"
  },
  {
    "character": "𘊈",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "to weed",
    "explanationCN": "去除草"
  },
  {
    "character": "𘓣",
    "GX": "mbaa̱²",
    "GHC": "bia̱²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗊢",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𗋑",
    "GX": "deṃh²",
    "GHC": "djɨ̣j²",
    "explanationEN": "cloud",
    "explanationCN": "云"
  },
  {
    "character": "𗤰",
    "GX": "rtśhwər²",
    "GHC": "tśhjwɨr²",
    "explanationEN": "vinegar",
    "explanationCN": "醋"
  },
  {
    "character": "𗦠",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "to detest; to abhor",
    "explanationCN": "憎恶;憎恶"
  },
  {
    "character": "𗽙",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "to tremble",
    "explanationCN": "颤抖"
  },
  {
    "character": "𗾋",
    "GX": "ti̱h¹",
    "GHC": "tẹ¹",
    "explanationEN": "excrement",
    "explanationCN": "屎"
  },
  {
    "character": "𗧨",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "to go; to march",
    "explanationCN": "去;进行"
  },
  {
    "character": "𗏒",
    "GX": "du̱h²",
    "GHC": "dụ²",
    "explanationEN": "intestines",
    "explanationCN": "肠"
  },
  {
    "character": "𗬟",
    "GX": "rzi̱r²",
    "GHC": "zer²",
    "explanationEN": "to expose to sunlight",
    "explanationCN": "暴露在阳光下"
  },
  {
    "character": "𗣐",
    "GX": "təh¹",
    "GHC": "tjɨ̣¹",
    "explanationEN": "very fast; rapid",
    "explanationCN": "非常快;快速"
  },
  {
    "character": "𗥉",
    "GX": "nde̱²",
    "GHC": "de̱j²",
    "explanationEN": "to detest; to loathe",
    "explanationCN": "憎恶;厌恶"
  },
  {
    "character": "𗣼",
    "GX": "tśha²",
    "GHC": "tśhja²",
    "explanationEN": "morals; virtue",
    "explanationCN": "道德;美德"
  },
  {
    "character": "𗤝",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "to know",
    "explanationCN": "要知道"
  },
  {
    "character": "𗥦",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "head",
    "explanationCN": "头"
  },
  {
    "character": "𗦯",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗥳",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "rapid; swift",
    "explanationCN": "快速;迅速"
  },
  {
    "character": "𗥔",
    "GX": "nlhi̱w²",
    "GHC": "lhe̱w²",
    "explanationEN": "to own; to have",
    "explanationCN": "拥有;要有"
  },
  {
    "character": "𗧏",
    "GX": "tśho¹",
    "GHC": "tśhjo¹",
    "explanationEN": "to exist.ʙ(inside); to have.ʙ",
    "explanationCN": "存在。拥有。"
  },
  {
    "character": "𗧇",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨈",
    "GX": "rbi̱r¹",
    "GHC": "ber¹",
    "explanationEN": "to reward",
    "explanationCN": "奖励"
  },
  {
    "character": "𗨨",
    "GX": "ro̱r²",
    "GHC": "ror²",
    "explanationEN": "to circle; to move around",
    "explanationCN": "圈;四处移动"
  },
  {
    "character": "𗽧",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "to enclose",
    "explanationCN": "将"
  },
  {
    "character": "𗾦",
    "GX": "tśo¹",
    "GHC": "tśjo¹",
    "explanationEN": "confused; mixed",
    "explanationCN": "困惑;混合"
  },
  {
    "character": "𗾳",
    "GX": "tśo¹",
    "GHC": "¹",
    "explanationEN": "hard; difficult",
    "explanationCN": "硬;难"
  },
  {
    "character": "𗿎",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "confused",
    "explanationCN": "困惑"
  },
  {
    "character": "𗿪",
    "GX": "sa²",
    "GHC": "sja²",
    "explanationEN": "to detest",
    "explanationCN": "憎恶"
  },
  {
    "character": "𗪠",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "evening",
    "explanationCN": "傍晚"
  },
  {
    "character": "𗪙",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "vulgar",
    "explanationCN": "俗"
  },
  {
    "character": "𗽫",
    "GX": "nwe¹",
    "GHC": "njwij¹",
    "explanationEN": "to swell; to coagulate",
    "explanationCN": "膨胀;凝固"
  },
  {
    "character": "𗿇",
    "GX": "rkiwr¹",
    "GHC": "kjiwr¹",
    "explanationEN": "egret",
    "explanationCN": "白鹭"
  },
  {
    "character": "𗿵",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘊗",
    "GX": "rkiwr¹",
    "GHC": "kjiwr¹",
    "explanationEN": "ant",
    "explanationCN": "蚂蚁"
  },
  {
    "character": "𗏶",
    "GX": "pho¹",
    "GHC": "phjo¹",
    "explanationEN": "a kind of tool for divination",
    "explanationCN": "一种占卜的工具"
  },
  {
    "character": "𗥹",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "crowd; group",
    "explanationCN": "人群;群"
  },
  {
    "character": "𗥻",
    "GX": "phai̱¹",
    "GHC": "phie¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗫞",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "to stand up",
    "explanationCN": "站起来"
  },
  {
    "character": "𗽚",
    "GX": "qi̱w¹",
    "GHC": "kew¹",
    "explanationEN": "farmland",
    "explanationCN": "农田"
  },
  {
    "character": "𗏕",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "weapon",
    "explanationCN": "武器"
  },
  {
    "character": "𗤇",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "to obey",
    "explanationCN": "服从"
  },
  {
    "character": "𗥞",
    "GX": "ŋgu²",
    "GHC": "gju̱²",
    "explanationEN": "to rescue; relieve",
    "explanationCN": "去救援;减轻"
  },
  {
    "character": "𗤪",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "to ring; to sound",
    "explanationCN": "响铃;听起来"
  },
  {
    "character": "𗥛",
    "GX": "rər¹",
    "GHC": "rjɨr¹",
    "explanationEN": "bone",
    "explanationCN": "骨"
  },
  {
    "character": "𗥾",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "skill; scheme; stratagem",
    "explanationCN": "技能;方案;战略"
  },
  {
    "character": "𗽕",
    "GX": "qao̱ṃ²",
    "GHC": "kiow²",
    "explanationEN": "valley",
    "explanationCN": "山谷"
  },
  {
    "character": "𗾱",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "weapon",
    "explanationCN": "武器"
  },
  {
    "character": "𘔺",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "gas",
    "explanationCN": "气"
  },
  {
    "character": "𗣿",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "face",
    "explanationCN": "脸"
  },
  {
    "character": "𗥨",
    "GX": "dźwow¹",
    "GHC": "dźjwo¹",
    "explanationEN": "bright; clever",
    "explanationCN": "明亮;聪明"
  },
  {
    "character": "𗩎",
    "GX": "nti̱w²",
    "GHC": "te̱w²",
    "explanationEN": "scheme; strategy",
    "explanationCN": "方案;策略"
  },
  {
    "character": "𗫑",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "livestock; domestic animal",
    "explanationCN": "牲畜;牲"
  },
  {
    "character": "𗺞",
    "GX": "tu̱h¹",
    "GHC": "tụ¹",
    "explanationEN": "net",
    "explanationCN": "网"
  },
  {
    "character": "𗻁",
    "GX": "nde̱²",
    "GHC": "de̱j²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻫",
    "GX": "rvor²",
    "GHC": "wjor²",
    "explanationEN": "nest",
    "explanationCN": "巢"
  },
  {
    "character": "𗧢",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "Hunnu people",
    "explanationCN": "匈奴人"
  },
  {
    "character": "𗿄",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "to request; to ask",
    "explanationCN": "请求;询问"
  },
  {
    "character": "𗻛",
    "GX": "kiw¹",
    "GHC": "kjiwr¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻣",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗺽",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻑",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "to herd; herbage",
    "explanationCN": "到畜牧;牧草"
  },
  {
    "character": "𗏖",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣈",
    "GX": "lho̱?",
    "GHC": "lho?",
    "explanationEN": "to go out",
    "explanationCN": "外出"
  },
  {
    "character": "𘊝",
    "GX": "ryir²",
    "GHC": "ˑjir²",
    "explanationEN": "hundred",
    "explanationCN": "百"
  },
  {
    "character": "𗽍",
    "GX": "ndwə̱¹",
    "GHC": "dwə̱¹",
    "explanationEN": "protruding",
    "explanationCN": "突出"
  },
  {
    "character": "𗽎",
    "GX": "ndwə̱¹",
    "GHC": "dwə̱¹",
    "explanationEN": "protruding",
    "explanationCN": "突出"
  },
  {
    "character": "𗾩",
    "GX": "hwaṃ¹",
    "GHC": "xjwã¹",
    "explanationEN": "county",
    "explanationCN": "县"
  },
  {
    "character": "𗧜",
    "GX": "nlhu̱²",
    "GHC": "lhu̱²",
    "explanationEN": "marrow",
    "explanationCN": "骨髓"
  },
  {
    "character": "𗦅",
    "GX": "ŋkhe¹",
    "GHC": "khji̱j¹",
    "explanationEN": "difficult",
    "explanationCN": "难"
  },
  {
    "character": "𗥽",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼲",
    "GX": "mbu²",
    "GHC": "bju̱²",
    "explanationEN": "mile",
    "explanationCN": "英里"
  },
  {
    "character": "𗩈",
    "GX": "mbu²",
    "GHC": "bju̱²",
    "explanationEN": "to command",
    "explanationCN": "to 命令"
  },
  {
    "character": "𗿢",
    "GX": "rzu̱r²",
    "GHC": "zur²",
    "explanationEN": "imperial edict",
    "explanationCN": "皇帝敕令"
  },
  {
    "character": "𗩍",
    "GX": "nvwə̱¹",
    "GHC": "¹",
    "explanationEN": "to own; to have",
    "explanationCN": "拥有;要有"
  },
  {
    "character": "𗻯",
    "GX": "rzu̱r²",
    "GHC": "zur²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗩼",
    "GX": "nla̱¹",
    "GHC": "la̱¹",
    "explanationEN": "to cherish",
    "explanationCN": "珍惜"
  },
  {
    "character": "𘚩",
    "GX": "qhae̱¹",
    "GHC": "khiej¹",
    "explanationEN": "north",
    "explanationCN": "北"
  },
  {
    "character": "𘚷",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "round bone",
    "explanationCN": "圆骨"
  },
  {
    "character": "𘓡",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "to cherish",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗼙",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "emperor",
    "explanationCN": "皇帝"
  },
  {
    "character": "𗼑",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "the moon",
    "explanationCN": "月亮"
  },
  {
    "character": "𗼒",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "to tribute; to consecrate",
    "explanationCN": "致敬;祝圣"
  },
  {
    "character": "𗼝",
    "GX": "lo¹",
    "GHC": "ljo¹",
    "explanationEN": "round bone",
    "explanationCN": "圆骨"
  },
  {
    "character": "𗅽",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "dim; foolish",
    "explanationCN": "䵨;愚蠢"
  },
  {
    "character": "𗃂",
    "GX": "qhə̱h¹",
    "GHC": "khə̣¹",
    "explanationEN": "to rock; to sway; to shake",
    "explanationCN": "摇滚;摇摆;摇晃"
  },
  {
    "character": "𗆔",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "discipline",
    "explanationCN": "学科"
  },
  {
    "character": "𗎮",
    "GX": "vuh²",
    "GHC": "wjụ²",
    "explanationEN": "village; hamlet",
    "explanationCN": "村;哈姆雷特"
  },
  {
    "character": "𗎲",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "to move; to migrate",
    "explanationCN": "移动;迁移"
  },
  {
    "character": "𗁳",
    "GX": "yaw²",
    "GHC": "ˑja̱²",
    "explanationEN": "horn",
    "explanationCN": "角"
  },
  {
    "character": "𗄷",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "to give birth to; to bear",
    "explanationCN": "生孩子;承担"
  },
  {
    "character": "𗢂",
    "GX": "hə̱²",
    "GHC": "xə²",
    "explanationEN": "Chinese parasol tree",
    "explanationCN": "中国阳伞树"
  },
  {
    "character": "𗆇",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "to heal; to recover",
    "explanationCN": "治愈;恢复"
  },
  {
    "character": "𗅛",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "the sun",
    "explanationCN": "太阳"
  },
  {
    "character": "𗆂",
    "GX": "phe̱¹",
    "GHC": "phej¹",
    "explanationEN": "to tie up; to truss up; to restrict",
    "explanationCN": "捆绑;桁架向上;限制"
  },
  {
    "character": "𗂛",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "to bear (a burden); to shoulder",
    "explanationCN": "承担（负担）;肩部"
  },
  {
    "character": "𗹶",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "building",
    "explanationCN": "建筑"
  },
  {
    "character": "𗅮",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "to announce; to accuse",
    "explanationCN": "宣布;来指责"
  },
  {
    "character": "𗂐",
    "GX": "tshwa̱¹",
    "GHC": "tshwa¹",
    "explanationEN": "to invade and harass; to impale",
    "explanationCN": "侵略和骚扰;穿刺"
  },
  {
    "character": "𗁽",
    "GX": "tshe̱¹",
    "GHC": "tshej¹",
    "explanationEN": "to invade and harass",
    "explanationCN": "侵入和骚扰"
  },
  {
    "character": "𗅆",
    "GX": "deṃ²",
    "GHC": "djɨj²",
    "explanationEN": "calm; quiet",
    "explanationCN": "平静;安静"
  },
  {
    "character": "𗹿",
    "GX": "de̱¹",
    "GHC": "dej¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗎯",
    "GX": "vu²",
    "GHC": "wju²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗎱",
    "GX": "rtser²",
    "GHC": "tsji̱r²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗆌",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗂓",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗂀",
    "GX": "qo̱¹",
    "GHC": "ko¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗢆",
    "GX": "śwə¹",
    "GHC": "¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗎳",
    "GX": "qha̱²",
    "GHC": "kha²",
    "explanationEN": "intestines",
    "explanationCN": "肠"
  },
  {
    "character": "𘝓",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "to rest",
    "explanationCN": "休息"
  },
  {
    "character": "𗊼",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "to fluctuate",
    "explanationCN": "波动"
  },
  {
    "character": "𗢑",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "disease",
    "explanationCN": "疾病"
  },
  {
    "character": "𗊭",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "dropsy; edema",
    "explanationCN": "水肿;水肿"
  },
  {
    "character": "𗌞",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "flood; floodwater",
    "explanationCN": "洪水;洪水"
  },
  {
    "character": "𘓥",
    "GX": "γu̱h²",
    "GHC": "ˑụ²",
    "explanationEN": "to bear (a burden)",
    "explanationCN": "承担 （负担）"
  },
  {
    "character": "𗢢",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "grave; cemetery",
    "explanationCN": "坟墓;墓地"
  },
  {
    "character": "𗋲",
    "GX": "lai̱h¹",
    "GHC": "liẹ¹",
    "explanationEN": "to wash; to clean",
    "explanationCN": "洗涤;清洁"
  },
  {
    "character": "𘉿",
    "GX": "tsu¹",
    "GHC": "tsju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗊥",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "moist; smooth",
    "explanationCN": "潮湿;光滑"
  },
  {
    "character": "𗢳",
    "GX": "tha̱¹",
    "GHC": "tha¹",
    "explanationEN": "Buddha",
    "explanationCN": "佛"
  },
  {
    "character": "𗦚",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "to chop; to cut",
    "explanationCN": "砍;剪切"
  },
  {
    "character": "𗣱",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "to cover; to overspread",
    "explanationCN": "覆盖;过度传播"
  },
  {
    "character": "𗾛",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "to fall",
    "explanationCN": "坠落"
  },
  {
    "character": "𗿚",
    "GX": "haa̱²",
    "GHC": "xia̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗥓",
    "GX": "ŋo̱²",
    "GHC": "ŋo²",
    "explanationEN": "illness; disease",
    "explanationCN": "疾病;疾病"
  },
  {
    "character": "𗧥",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "long",
    "explanationCN": "长"
  },
  {
    "character": "𗩪",
    "GX": "lhao̱h²",
    "GHC": "lhiọ²",
    "explanationEN": "great-great-grandson",
    "explanationCN": "曾曾孙"
  },
  {
    "character": "𗩄",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗽬",
    "GX": "tshih¹",
    "GHC": "tśhjị¹",
    "explanationEN": "soil; land",
    "explanationCN": "土;土地"
  },
  {
    "character": "𗫌",
    "GX": "ni¹",
    "GHC": "nji¹",
    "explanationEN": "family; house",
    "explanationCN": "家庭;房子"
  },
  {
    "character": "𗏦",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "saddle",
    "explanationCN": "鞍"
  },
  {
    "character": "𗪏",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗪚",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "peaceful",
    "explanationCN": "和平"
  },
  {
    "character": "𗪩",
    "GX": "peṃh¹",
    "GHC": "pjɨ̣j¹",
    "explanationEN": "physical strength of arms",
    "explanationCN": "手臂的体力"
  },
  {
    "character": "𗪐",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "person",
    "explanationCN": "人"
  },
  {
    "character": "𗾸",
    "GX": "bi̱¹",
    "GHC": "be¹",
    "explanationEN": "disease",
    "explanationCN": "疾病"
  },
  {
    "character": "𗩅",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗧩",
    "GX": "bo̱²",
    "GHC": "bo²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗽁",
    "GX": "γəh¹",
    "GHC": "ɣjɨ̣¹",
    "explanationEN": "tile; pottery",
    "explanationCN": "瓦;陶器"
  },
  {
    "character": "𗩇",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗿡",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗦔",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗩃",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "pointed end; point",
    "explanationCN": "尖端;点"
  },
  {
    "character": "𗦓",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘔻",
    "GX": "kho²",
    "GHC": "khjo²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗩁",
    "GX": "bai̱h¹",
    "GHC": "biẹ¹",
    "explanationEN": "willow",
    "explanationCN": "柳树"
  },
  {
    "character": "𗪹",
    "GX": "dzo̱²",
    "GHC": "dzo²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗻮",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "a tree name",
    "explanationCN": "树名称"
  },
  {
    "character": "𗻴",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗩆",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗫗",
    "GX": "rgwər²",
    "GHC": "gjwɨr²",
    "explanationEN": "window",
    "explanationCN": "窗"
  },
  {
    "character": "𗦟",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "vigor; appearance",
    "explanationCN": "活力;外观"
  },
  {
    "character": "𗫃",
    "GX": "pho̱ṃ¹",
    "GHC": "phow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗺿",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗽳",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "brick",
    "explanationCN": "砖"
  },
  {
    "character": "𗤳",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "surname",
    "explanationCN": "姓"
  },
  {
    "character": "𗽊",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "cave",
    "explanationCN": "洞穴"
  },
  {
    "character": "𗾨",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "crane",
    "explanationCN": "起重机"
  },
  {
    "character": "𘊕",
    "GX": "dźe²",
    "GHC": "dźẽ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗧪",
    "GX": "pe̱¹",
    "GHC": "pej¹",
    "explanationEN": "first",
    "explanationCN": "第一"
  },
  {
    "character": "𗿒",
    "GX": "qhwe̱²",
    "GHC": "khwej²",
    "explanationEN": "big; large",
    "explanationCN": "大;大"
  },
  {
    "character": "𘊡",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "season",
    "explanationCN": "季节"
  },
  {
    "character": "𘚲",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "cold (disease)",
    "explanationCN": "感冒（疾病）"
  },
  {
    "character": "𘓑",
    "GX": "γwaa̱ṃ¹",
    "GHC": "ɣiwã¹",
    "explanationEN": "foolish; stupid",
    "explanationCN": "愚蠢;笨"
  },
  {
    "character": "𗬲",
    "GX": "ndaa̱²",
    "GHC": "dia̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗃯",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "to fall ill frequently",
    "explanationCN": "经常生病"
  },
  {
    "character": "𗴣",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "to admire; to respect",
    "explanationCN": "欣赏;尊重"
  },
  {
    "character": "𘓘",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "hot; painful",
    "explanationCN": "热;痛苦"
  },
  {
    "character": "𗴝",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "a kind of jadeware",
    "explanationCN": "一种玉器"
  },
  {
    "character": "𗆋",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "to cry; to weep",
    "explanationCN": "哭泣;哭泣"
  },
  {
    "character": "𗆆",
    "GX": "qwae̱ṃ¹",
    "GHC": "kiwəj¹",
    "explanationEN": "clumsy",
    "explanationCN": "笨拙"
  },
  {
    "character": "𗂬",
    "GX": "ryar²",
    "GHC": "ˑjar²",
    "explanationEN": "to marry",
    "explanationCN": "结婚"
  },
  {
    "character": "𗪎",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "to force; to compel",
    "explanationCN": "强制;强迫"
  },
  {
    "character": "𘀀",
    "GX": "rdwə̱r¹",
    "GHC": "dwər¹",
    "explanationEN": "to be tired of",
    "explanationCN": "厌倦"
  },
  {
    "character": "𗀼",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "a small steelyard for weighing gold, medicine, etc.",
    "explanationCN": "一个用于称量黄金、药品等的小钢厂。"
  },
  {
    "character": "𗁺",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "clumsy; awkward; stupid",
    "explanationCN": "笨拙;尴尬;笨"
  },
  {
    "character": "𗅐",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "true; real; honest",
    "explanationCN": "真;真正;诚实"
  },
  {
    "character": "𗅻",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "lamb",
    "explanationCN": "羔羊"
  },
  {
    "character": "𗅑",
    "GX": "meh¹",
    "GHC": "mjịj¹",
    "explanationEN": "morning; dawn",
    "explanationCN": "上午;黎明"
  },
  {
    "character": "𗆮",
    "GX": "lhwow¹",
    "GHC": "lhjwo¹",
    "explanationEN": "to return; to retreat",
    "explanationCN": "返回;撤退"
  },
  {
    "character": "𗅏",
    "GX": "lah²",
    "GHC": "ljạ²",
    "explanationEN": "to pierce; to through; to penetrate",
    "explanationCN": "刺穿;通过;穿透"
  },
  {
    "character": "𗅝",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "foolish; stupid",
    "explanationCN": "愚蠢;笨"
  },
  {
    "character": "𗅾",
    "GX": "no̱¹",
    "GHC": "no¹",
    "explanationEN": "rib",
    "explanationCN": "肋"
  },
  {
    "character": "𗆿",
    "GX": "rphaa̱r¹",
    "GHC": "phiar¹",
    "explanationEN": "to disorder; loose",
    "explanationCN": "到无序;松"
  },
  {
    "character": "𗅓",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "mountain",
    "explanationCN": "山"
  },
  {
    "character": "𗂾",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "devil; demon",
    "explanationCN": "魔鬼;恶魔"
  },
  {
    "character": "𗁗",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗂈",
    "GX": "źəh¹",
    "GHC": "źjɨ̣¹",
    "explanationEN": "left side",
    "explanationCN": "左"
  },
  {
    "character": "𗃋",
    "GX": "rver²",
    "GHC": "wjijr²",
    "explanationEN": "to hug; to hold up",
    "explanationCN": "拥抱;举起"
  },
  {
    "character": "𗂺",
    "GX": "lhəh¹",
    "GHC": "¹",
    "explanationEN": "to flog; to beat",
    "explanationCN": "鞭打;击败"
  },
  {
    "character": "𗁡",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "dustpan",
    "explanationCN": "簸箕"
  },
  {
    "character": "𘈻",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "to breed; to give birth to; to bear",
    "explanationCN": "繁殖;生孩子;承担"
  },
  {
    "character": "𘈾",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "how long; when",
    "explanationCN": "多久;什么时候"
  },
  {
    "character": "𗎨",
    "GX": "vu²",
    "GHC": "wju²",
    "explanationEN": "intestines",
    "explanationCN": "肠"
  },
  {
    "character": "𗄫",
    "GX": "li̱w?",
    "GHC": "ləu?",
    "explanationEN": "nature; temperament",
    "explanationCN": "自然界;气质"
  },
  {
    "character": "𗡺",
    "GX": "rber²",
    "GHC": "bji̱j²",
    "explanationEN": "to explain; to note",
    "explanationCN": "解释;注意事项"
  },
  {
    "character": "𗅪",
    "GX": "qwae̱¹",
    "GHC": "kiwej¹",
    "explanationEN": "to lose",
    "explanationCN": "输"
  },
  {
    "character": "𗁏",
    "GX": "ŋko¹",
    "GHC": "kio̱¹",
    "explanationEN": "to bite",
    "explanationCN": "咬人"
  },
  {
    "character": "𗄾",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "to calculate; to count",
    "explanationCN": "计算;计数"
  },
  {
    "character": "𗅴",
    "GX": "lae̱h²",
    "GHC": "lẹj²",
    "explanationEN": "avarice",
    "explanationCN": "贪婪"
  },
  {
    "character": "𗅳",
    "GX": "ŋġe̱²",
    "GHC": "ge̱j²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗆝",
    "GX": "rə̱r²",
    "GHC": "rər²",
    "explanationEN": "tooth",
    "explanationCN": "牙"
  },
  {
    "character": "𗆷",
    "GX": "lla̱h²",
    "GHC": "lạ²",
    "explanationEN": "many; dense",
    "explanationCN": "多;稠"
  },
  {
    "character": "𗁋",
    "GX": "taw¹",
    "GHC": "tja̱¹",
    "explanationEN": "to drip",
    "explanationCN": "滴"
  },
  {
    "character": "𗂧",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "country; nation",
    "explanationCN": "国家;国家"
  },
  {
    "character": "𗅅",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "to harm",
    "explanationCN": "伤害"
  },
  {
    "character": "𗂆",
    "GX": "zeh¹",
    "GHC": "zjịj¹",
    "explanationEN": "to hit; to touch; to fit exactly",
    "explanationCN": "击球;触摸;以完全适合"
  },
  {
    "character": "𗁾",
    "GX": "ta̱h¹",
    "GHC": "¹",
    "explanationEN": "to rest; to stop",
    "explanationCN": "休息;停止"
  },
  {
    "character": "𗁙",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "fence, fold",
    "explanationCN": "栅栏， 折叠"
  },
  {
    "character": "𗁚",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "fence, fold",
    "explanationCN": "栅栏， 折叠"
  },
  {
    "character": "𗁢",
    "GX": "nlhaa̱²",
    "GHC": "lhia̱²",
    "explanationEN": "to fall; to drop",
    "explanationCN": "跌倒;丢弃"
  },
  {
    "character": "𗂨",
    "GX": "tśoh²",
    "GHC": "²",
    "explanationEN": "ashamed",
    "explanationCN": "羞"
  },
  {
    "character": "𗂋",
    "GX": "rnar¹",
    "GHC": "njar¹",
    "explanationEN": "to flip; to play (a stringed musical instrument)",
    "explanationCN": "翻转;to play （弦乐器）"
  },
  {
    "character": "𗂰",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𗁀",
    "GX": "qo̱¹",
    "GHC": "ko¹",
    "explanationEN": "to put (the palms together)",
    "explanationCN": "把 （手掌合拢）"
  },
  {
    "character": "𗂌",
    "GX": "yo̱r¹",
    "GHC": "ˑjo̱r¹",
    "explanationEN": "firm; strong",
    "explanationCN": "公司;强"
  },
  {
    "character": "𗀽",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "to pound with a pestle; to beat",
    "explanationCN": "用杵捣碎;击败"
  },
  {
    "character": "𗹱",
    "GX": "hae̱ṃ²",
    "GHC": "xiəj²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗹽",
    "GX": "tṣae̱h¹",
    "GHC": "tśiẹj¹",
    "explanationEN": "to encircle; to go round",
    "explanationCN": "包围;去转一圈"
  },
  {
    "character": "𗹾",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "former times; in the past",
    "explanationCN": "昔;过去"
  },
  {
    "character": "𗅩",
    "GX": "lwo̱ṃ¹",
    "GHC": "lwow¹",
    "explanationEN": "absurd; unexpected",
    "explanationCN": "荒谬;意外"
  },
  {
    "character": "𗃌",
    "GX": "rver²",
    "GHC": "²",
    "explanationEN": "to hug; to hold up",
    "explanationCN": "拥抱;举起"
  },
  {
    "character": "𗀶",
    "GX": "tho̱ṃ¹",
    "GHC": "thow¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗀴",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗁖",
    "GX": "doh²",
    "GHC": "djọ²",
    "explanationEN": "to build; to treat (a disease)",
    "explanationCN": "建造;治疗（一种疾病）"
  },
  {
    "character": "𗁿",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "to rest; to stop",
    "explanationCN": "休息;停止"
  },
  {
    "character": "𗁵",
    "GX": "ye²",
    "GHC": "ˑjij²",
    "explanationEN": "knitting wool",
    "explanationCN": "针织羊毛"
  },
  {
    "character": "𗁎",
    "GX": "dźih²",
    "GHC": "dźjị²",
    "explanationEN": "ox; cattle",
    "explanationCN": "牛;牛"
  },
  {
    "character": "𗅗",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "to kneel",
    "explanationCN": "跪下"
  },
  {
    "character": "𗢃",
    "GX": "rgwər¹",
    "GHC": "giwɨr¹",
    "explanationEN": "to rise; to grow",
    "explanationCN": "上升;成长"
  },
  {
    "character": "𗅷",
    "GX": "dẓae̱ṃ?",
    "GHC": "dźi?",
    "explanationEN": "tooth",
    "explanationCN": "牙"
  },
  {
    "character": "𗡾",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "to like; to love; to desire",
    "explanationCN": "喜欢;去爱;欲望"
  },
  {
    "character": "𗆑",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "to swallow",
    "explanationCN": "吞咽"
  },
  {
    "character": "𗆺",
    "GX": "lwo̱ṃ¹",
    "GHC": "lwow¹",
    "explanationEN": "lazy; slow",
    "explanationCN": "懒惰;慢"
  },
  {
    "character": "𗆗",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "short",
    "explanationCN": "短"
  },
  {
    "character": "𗇂",
    "GX": "rsa̱r²",
    "GHC": "sar²",
    "explanationEN": "to spread; to break up",
    "explanationCN": "传播;分手"
  },
  {
    "character": "𗆨",
    "GX": "meh²",
    "GHC": "mjịj²",
    "explanationEN": "laborer; physical labor",
    "explanationCN": "劳动者;体力劳动"
  },
  {
    "character": "𗂪",
    "GX": "rŋər²",
    "GHC": "ŋjɨr²",
    "explanationEN": "sheep; goat",
    "explanationCN": "羊;山羊"
  },
  {
    "character": "𗂉",
    "GX": "nvwi̱¹",
    "GHC": "we̱¹",
    "explanationEN": "to lose; to be in debt",
    "explanationCN": "输;负债累累"
  },
  {
    "character": "𗁘",
    "GX": "rer²",
    "GHC": "²",
    "explanationEN": "to distend",
    "explanationCN": "展开"
  },
  {
    "character": "𗃍",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "to spread",
    "explanationCN": "传播"
  },
  {
    "character": "𗁞",
    "GX": "tśhaw²",
    "GHC": "tśhja̱²",
    "explanationEN": "cui, a traditional unit of length",
    "explanationCN": "cui，传统的长度单位"
  },
  {
    "character": "𗹣",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "room; house",
    "explanationCN": "房间;房子"
  },
  {
    "character": "𘉀",
    "GX": "rtser¹",
    "GHC": "tsji̱r¹",
    "explanationEN": "government official",
    "explanationCN": "吏"
  },
  {
    "character": "𘈼",
    "GX": "ma̱²",
    "GHC": "ma²",
    "explanationEN": "in the past",
    "explanationCN": "过去"
  },
  {
    "character": "𗁹",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "narrowness",
    "explanationCN": "狭隘"
  },
  {
    "character": "𗹫",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "good",
    "explanationCN": "好"
  },
  {
    "character": "𗀻",
    "GX": "tshwiṃ¹",
    "GHC": "tshjwĩ¹",
    "explanationEN": "cun, a traditional unit of length",
    "explanationCN": "cun，传统的长度单位"
  },
  {
    "character": "𗁴",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "son's wife; daughter-in-law",
    "explanationCN": "儿子的妻子;媳妇"
  },
  {
    "character": "𗄰",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "dried; dry",
    "explanationCN": "干;干"
  },
  {
    "character": "𗅒",
    "GX": "dzwa̱¹",
    "GHC": "dzwa¹",
    "explanationEN": "short; brief",
    "explanationCN": "短;短"
  },
  {
    "character": "𗅁",
    "GX": "γu̱²",
    "GHC": "ˑu²",
    "explanationEN": "INE: inessive case; inner, inside",
    "explanationCN": "INE： 伊力尔 ;内部， 内部"
  },
  {
    "character": "𗆄",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "measure; price",
    "explanationCN": "量;价格"
  },
  {
    "character": "𗁥",
    "GX": "tśoh²",
    "GHC": "²",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𗂫",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "penis",
    "explanationCN": "阴茎"
  },
  {
    "character": "𗂹",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "to flog; to beat",
    "explanationCN": "鞭打;击败"
  },
  {
    "character": "𗁩",
    "GX": "ti̱ṃ¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗃄",
    "GX": "lwə²",
    "GHC": "ljwɨ²",
    "explanationEN": "fat; grease",
    "explanationCN": "脂肪;油"
  },
  {
    "character": "𗁤",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "tiger",
    "explanationCN": "老虎"
  },
  {
    "character": "𗀾",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "cup",
    "explanationCN": "杯子"
  },
  {
    "character": "𗹲",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗹷",
    "GX": "rŋo̱ṃr²",
    "GHC": "ŋowr²",
    "explanationEN": "anger; fury",
    "explanationCN": "愤怒;愤怒"
  },
  {
    "character": "𗐛",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "gathering; numerous",
    "explanationCN": "收集;众多"
  },
  {
    "character": "𗶨",
    "GX": "rda̱r¹",
    "GHC": "dar¹",
    "explanationEN": "to reach",
    "explanationCN": "到达"
  },
  {
    "character": "𗶫",
    "GX": "liw²",
    "GHC": "ljiw²",
    "explanationEN": "exhausted; be used up",
    "explanationCN": "用尽;用完"
  },
  {
    "character": "𗋭",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "to sink",
    "explanationCN": "沉没"
  },
  {
    "character": "𗌥",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "dregs; residue",
    "explanationCN": "渣;残留"
  },
  {
    "character": "𗴭",
    "GX": "swu̱²",
    "GHC": "swu²",
    "explanationEN": "similarity",
    "explanationCN": "相似"
  },
  {
    "character": "𗊀",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "ditch; gully",
    "explanationCN": "渠;沟壑"
  },
  {
    "character": "𗌁",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "toil",
    "explanationCN": "辛劳"
  },
  {
    "character": "𗌢",
    "GX": "gu¹",
    "GHC": "¹",
    "explanationEN": "bridge",
    "explanationCN": "桥"
  },
  {
    "character": "𗢛",
    "GX": "yu¹",
    "GHC": "ˑju¹",
    "explanationEN": "ghost; spirit",
    "explanationCN": "鬼;精神"
  },
  {
    "character": "𗊽",
    "GX": "bəh¹",
    "GHC": "bjɨ̣¹",
    "explanationEN": "tear; teardrop",
    "explanationCN": "撕;眼泪"
  },
  {
    "character": "𗐒",
    "GX": "γa²",
    "GHC": "ɣja²",
    "explanationEN": "fast; rapid",
    "explanationCN": "快;快速"
  },
  {
    "character": "𗴫",
    "GX": "ki¹",
    "GHC": "kji¹",
    "explanationEN": "to sing",
    "explanationCN": "唱歌"
  },
  {
    "character": "𗌕",
    "GX": "kar²",
    "GHC": "-jar²",
    "explanationEN": "net",
    "explanationCN": "网"
  },
  {
    "character": "𗌕",
    "GX": "kar²",
    "GHC": "-jar²",
    "explanationEN": "cover; lid; to cover",
    "explanationCN": "盖;盖子;覆盖"
  },
  {
    "character": "𗐜",
    "GX": "γa²",
    "GHC": "ɣja²",
    "explanationEN": "quail",
    "explanationCN": "鹌鹑"
  },
  {
    "character": "𘔿",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "eye socket",
    "explanationCN": "眼窝"
  },
  {
    "character": "𗋆",
    "GX": "rqhwa̱r²",
    "GHC": "khwar²",
    "explanationEN": "fountainhead; well-spring",
    "explanationCN": "源泉;井泉"
  },
  {
    "character": "𗊓",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "moist; rain; pool",
    "explanationCN": "潮湿;雨;池"
  },
  {
    "character": "𗋩",
    "GX": "rvwi̱r²",
    "GHC": "wer²",
    "explanationEN": "canal; ditch",
    "explanationCN": "渠;渠"
  },
  {
    "character": "𗋊",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "a ghost name",
    "explanationCN": "一个幽灵名字"
  },
  {
    "character": "𘊍",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "to capture; to gain",
    "explanationCN": "捕获;获得"
  },
  {
    "character": "𗐗",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "aspiration; ideal; able; capable",
    "explanationCN": "愿望;理想;能;能够"
  },
  {
    "character": "𗐙",
    "GX": "ndu̱²",
    "GHC": "du²",
    "explanationEN": "kind; type",
    "explanationCN": "类;类型"
  },
  {
    "character": "𗴮",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "cover; lid",
    "explanationCN": "盖;盖子"
  },
  {
    "character": "𗐍",
    "GX": "ke̱?",
    "GHC": "kej?",
    "explanationEN": "to analyze",
    "explanationCN": "分析"
  },
  {
    "character": "𗉻",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "reality; accuracy",
    "explanationCN": "现实;准确性"
  },
  {
    "character": "𘉥",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "chapters and sections",
    "explanationCN": "章节"
  },
  {
    "character": "𘉦",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "dark",
    "explanationCN": "黑暗"
  },
  {
    "character": "𗘰",
    "GX": "mbaa̱²",
    "GHC": "bia̱²",
    "explanationEN": "tasteless",
    "explanationCN": "淡"
  },
  {
    "character": "𗉼",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗊺",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "barnyard grass",
    "explanationCN": "稗"
  },
  {
    "character": "𗌀",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "marsh",
    "explanationCN": "沼泽"
  },
  {
    "character": "𗉸",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "lining; inside",
    "explanationCN": "衬 砌;里面"
  },
  {
    "character": "𗊬",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗌏",
    "GX": "ryur²",
    "GHC": "ˑjur²",
    "explanationEN": "to murder",
    "explanationCN": "谋杀"
  },
  {
    "character": "𗢎",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "to ridicule; to slander",
    "explanationCN": "嘲笑;诽谤"
  },
  {
    "character": "𘉪",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "moisture",
    "explanationCN": "来嘲笑"
  },
  {
    "character": "𗊋",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "victory",
    "explanationCN": "胜利"
  },
  {
    "character": "𘚁",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "peace; adore",
    "explanationCN": "和平;崇拜"
  },
  {
    "character": "𗋥",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "to cherish; to stint",
    "explanationCN": "珍惜;暂停"
  },
  {
    "character": "𗌤",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "a kind of food",
    "explanationCN": "一种食物"
  },
  {
    "character": "𗋏",
    "GX": "thwu̱²",
    "GHC": "thwu²",
    "explanationEN": "teapoy",
    "explanationCN": "茶几"
  },
  {
    "character": "𗐏",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "dignified; true meaning",
    "explanationCN": "端庄;真意"
  },
  {
    "character": "𘉢",
    "GX": "dweh¹",
    "GHC": "djwịj¹",
    "explanationEN": "to choke; to stifle",
    "explanationCN": "窒息;扼杀"
  },
  {
    "character": "𗐓",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "water spring",
    "explanationCN": "水泉"
  },
  {
    "character": "𗊑",
    "GX": "dzwaṃ¹",
    "GHC": "dzjwã¹",
    "explanationEN": "sweat; perspiration",
    "explanationCN": "汗;汗"
  },
  {
    "character": "𗊌",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "a thin white silk used in ancient China, plain color",
    "explanationCN": "中国古代使用的一种薄薄的白色丝绸，素色"
  },
  {
    "character": "𗊶",
    "GX": "lhu¹",
    "GHC": "lhju¹",
    "explanationEN": "to breed",
    "explanationCN": "繁殖"
  },
  {
    "character": "𗋿",
    "GX": "ryur¹",
    "GHC": "ˑjur¹",
    "explanationEN": "to arrive",
    "explanationCN": "到达"
  },
  {
    "character": "𗐘",
    "GX": "qho̱¹",
    "GHC": "kho¹",
    "explanationEN": "grave",
    "explanationCN": "坟墓"
  },
  {
    "character": "𗢐",
    "GX": "γu̱¹",
    "GHC": "ˑu¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗊛",
    "GX": "tshi̱w¹",
    "GHC": "tshew¹",
    "explanationEN": "a nail",
    "explanationCN": "钉子"
  },
  {
    "character": "𗊄",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "a bottle",
    "explanationCN": "一瓶"
  },
  {
    "character": "𗊰",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "strong; brave",
    "explanationCN": "强;勇敢"
  },
  {
    "character": "𗊵",
    "GX": "tśhu¹",
    "GHC": "tśhju¹",
    "explanationEN": "to melt; to thaw; to confess",
    "explanationCN": "融化;解冻;忏悔"
  },
  {
    "character": "𗌍",
    "GX": "rhwa̱r¹",
    "GHC": "xwar¹",
    "explanationEN": "blood stasis",
    "explanationCN": "血瘀"
  },
  {
    "character": "𗌎",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "sweet; honeyed",
    "explanationCN": "甜;蜂蜜"
  },
  {
    "character": "𗋔",
    "GX": "thwi¹",
    "GHC": "thjwi¹",
    "explanationEN": "water; dew",
    "explanationCN": "水;露"
  },
  {
    "character": "𗌜",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "to cross; to tide over",
    "explanationCN": "穿越;渡过难关"
  },
  {
    "character": "𗌗",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "cow disease",
    "explanationCN": "奶牛病"
  },
  {
    "character": "𗢚",
    "GX": "zoh¹",
    "GHC": "zjọ¹",
    "explanationEN": "mouth",
    "explanationCN": "口"
  },
  {
    "character": "𗋈",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "cattail",
    "explanationCN": "蒲"
  },
  {
    "character": "𗋬",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "fish",
    "explanationCN": "鱼"
  },
  {
    "character": "𗋾",
    "GX": "źu²",
    "GHC": "źju²",
    "explanationEN": "water",
    "explanationCN": "鱼"
  },
  {
    "character": "𗋽",
    "GX": "rzər²",
    "GHC": "zjɨ̱r²",
    "explanationEN": "to mix; to stir; to blend",
    "explanationCN": "混合;搅拌;混合"
  },
  {
    "character": "𗌛",
    "GX": "rhwa̱r¹",
    "GHC": "xwar¹",
    "explanationEN": "wild goose",
    "explanationCN": "雁"
  },
  {
    "character": "𗌋",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "to putty; to spread on",
    "explanationCN": "到腻子;传播"
  },
  {
    "character": "𗌒",
    "GX": "rtṣao̱r²",
    "GHC": "tśior²",
    "explanationEN": "to burst; to split; to break",
    "explanationCN": "爆裂;分裂;打破"
  },
  {
    "character": "𘉲",
    "GX": "giw²",
    "GHC": "gjiw²",
    "explanationEN": "hot; smelly",
    "explanationCN": "热;臭"
  },
  {
    "character": "𘊃",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "indignation",
    "explanationCN": "愤慨"
  },
  {
    "character": "𘊌",
    "GX": "dẓai̱w¹",
    "GHC": "dźiew¹",
    "explanationEN": "milk; butter",
    "explanationCN": "牛奶;黄油"
  },
  {
    "character": "𗌙",
    "GX": "lhu¹",
    "GHC": "lhju¹",
    "explanationEN": "moisture; drop",
    "explanationCN": "湿气;落"
  },
  {
    "character": "𗌬",
    "GX": "rdawr²",
    "GHC": "dja̱r²",
    "explanationEN": "to wash; to bathe",
    "explanationCN": "洗涤;去洗澡"
  },
  {
    "character": "𗋝",
    "GX": "lwu̱²",
    "GHC": "lwu²",
    "explanationEN": "to wash; to bathe",
    "explanationCN": "洗涤;去洗澡"
  },
  {
    "character": "𗌚",
    "GX": "neṃh²",
    "GHC": "njɨ̣j²",
    "explanationEN": "an overcast sky",
    "explanationCN": "阴沉的天空"
  },
  {
    "character": "𗋦",
    "GX": "lhu¹",
    "GHC": "¹",
    "explanationEN": "to increase; to add",
    "explanationCN": "增加;添加"
  },
  {
    "character": "𗊂",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "boat; ship",
    "explanationCN": "船;船"
  },
  {
    "character": "𗊔",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "to mix",
    "explanationCN": "混合"
  },
  {
    "character": "𗢏",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "PFV: to die ",
    "explanationCN": "去死₂"
  },
  {
    "character": "𗊉",
    "GX": "noh¹",
    "GHC": "njọ¹",
    "explanationEN": "lubrication; oiliness",
    "explanationCN": "润滑;油性"
  },
  {
    "character": "𗋫",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "to overflow; to spill",
    "explanationCN": "溢出;溢出"
  },
  {
    "character": "𗋃",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "limit; end",
    "explanationCN": "限制;结束"
  },
  {
    "character": "𗢒",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "horse disease",
    "explanationCN": "马病"
  },
  {
    "character": "𗋇",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "bent",
    "explanationCN": "弯曲"
  },
  {
    "character": "𗋅",
    "GX": "lwu̱¹",
    "GHC": "lwu¹",
    "explanationEN": "to mix; to blend",
    "explanationCN": "混合;混合"
  },
  {
    "character": "𘉱",
    "GX": "nśiw¹",
    "GHC": "śjiw¹",
    "explanationEN": "to divine disease; to diagnose",
    "explanationCN": "神圣的疾病;诊断"
  },
  {
    "character": "𗋛",
    "GX": "nwəh¹",
    "GHC": "njwɨ̣¹",
    "explanationEN": "moisture; sweat",
    "explanationCN": "湿气;汗"
  },
  {
    "character": "𘉾",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "excrement; faeces; dung",
    "explanationCN": "屎;屎;粪"
  },
  {
    "character": "𗌪",
    "GX": "lwə¹",
    "GHC": "ljwɨ¹",
    "explanationEN": "tear",
    "explanationCN": "撕"
  },
  {
    "character": "𗐔",
    "GX": "rγa̱r²",
    "GHC": "ɣar²",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗊒",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "dregs",
    "explanationCN": "渣"
  },
  {
    "character": "𗊣",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "gargle; rinse",
    "explanationCN": "漱口;冲洗"
  },
  {
    "character": "𗘱",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "to submit",
    "explanationCN": "提交"
  },
  {
    "character": "𗾆",
    "GX": "dźiw¹",
    "GHC": "dźjiw¹",
    "explanationEN": "waist",
    "explanationCN": "腰"
  },
  {
    "character": "𗐈",
    "GX": "be¹",
    "GHC": "bjij¹",
    "explanationEN": "dung beetles",
    "explanationCN": "蜣螂"
  },
  {
    "character": "𗐆",
    "GX": "tśoh¹",
    "GHC": "tśjọ¹",
    "explanationEN": "ugly",
    "explanationCN": "丑"
  },
  {
    "character": "𗐇",
    "GX": "lho̱ṃh²",
    "GHC": "lhọ²",
    "explanationEN": "ugly",
    "explanationCN": "丑"
  },
  {
    "character": "𗫱",
    "GX": "khaṃ¹",
    "GHC": "khjã¹",
    "explanationEN": "dangerous",
    "explanationCN": "危险"
  },
  {
    "character": "𗫶",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "TESTM: testimonial DUR: durative",
    "explanationCN": "TESTM;杜尔"
  },
  {
    "character": "𗫷",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "a place name; a surname",
    "explanationCN": "地名;姓氏"
  },
  {
    "character": "𗫲",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗬀",
    "GX": "lwu̱²",
    "GHC": "lwu²",
    "explanationEN": "to hide; to conceal",
    "explanationCN": "躲藏起来;隐藏"
  },
  {
    "character": "𗫿",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "used; worn; old",
    "explanationCN": "使用;穿;老"
  },
  {
    "character": "𗬄",
    "GX": "tswa̱¹",
    "GHC": "tswa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗬁",
    "GX": "deṃ²",
    "GHC": "djɨj²",
    "explanationEN": "to stop; to abolish",
    "explanationCN": "停止;废除"
  },
  {
    "character": "𗫻",
    "GX": "ndźe¹",
    "GHC": "dźji̱j¹",
    "explanationEN": "to live; to stay; to exist",
    "explanationCN": "活着;留下来;存在"
  },
  {
    "character": "𗬃",
    "GX": "si̱¹",
    "GHC": "se¹",
    "explanationEN": "intention; intent; word; term",
    "explanationCN": "意图;意图;词;术语"
  },
  {
    "character": "𗫸",
    "GX": "yih²",
    "GHC": "ˑjị²",
    "explanationEN": "again",
    "explanationCN": "再"
  },
  {
    "character": "𗬇",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "recreation; to lead a chorus",
    "explanationCN": "娱乐;带领合唱"
  },
  {
    "character": "𗬈",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "entertaimnent; recreation; to lead a chorus",
    "explanationCN": "企业;娱乐;带领合唱"
  },
  {
    "character": "𗏗",
    "GX": "dź??",
    "GHC": "dź-?",
    "explanationEN": "empty; unoccupied",
    "explanationCN": "空;空置"
  },
  {
    "character": "𗨭",
    "GX": "źeh¹",
    "GHC": "źjịj¹",
    "explanationEN": "disease; illness",
    "explanationCN": "疾病;疾病"
  },
  {
    "character": "𗨥",
    "GX": "twə¹",
    "GHC": "tsjwɨ¹",
    "explanationEN": "an auxiliary word",
    "explanationCN": "助词"
  },
  {
    "character": "𗩲",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "host; master",
    "explanationCN": "主机;主人"
  },
  {
    "character": "𗽩",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "dry",
    "explanationCN": "干"
  },
  {
    "character": "𗾏",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "crane",
    "explanationCN": "起重机"
  },
  {
    "character": "𗾷",
    "GX": "dźih?",
    "GHC": "dźjị?",
    "explanationEN": "owlet",
    "explanationCN": "猫头鹰"
  },
  {
    "character": "𗿣",
    "GX": "rmer²",
    "GHC": "mjịjr²",
    "explanationEN": "god; magic power",
    "explanationCN": "神;魔力"
  },
  {
    "character": "𗏞",
    "GX": "u¹",
    "GHC": "¹",
    "explanationEN": "ghost; spirit",
    "explanationCN": "鬼;精神"
  },
  {
    "character": "𗢭",
    "GX": "ŋgə¹",
    "GHC": "gjɨ̱¹",
    "explanationEN": "nine",
    "explanationCN": "九"
  },
  {
    "character": "𗣂",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "a kind of shell which looks like a jade; dress and personal adornment; dress",
    "explanationCN": "一种看起来像玉的贝壳;服装和个人装饰品;连衣裙"
  },
  {
    "character": "𗣡",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨡",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "trough; cup",
    "explanationCN": "槽;杯子"
  },
  {
    "character": "𗨶",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "to cry; to weep",
    "explanationCN": "哭泣;哭泣"
  },
  {
    "character": "𗥑",
    "GX": "hu̱¹",
    "GHC": "xu¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗫔",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "many; numerous",
    "explanationCN": "多;众多"
  },
  {
    "character": "𗣹",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗤹",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗽌",
    "GX": "yae̱ṃh²",
    "GHC": "ˑjə̣j²",
    "explanationEN": "gully; ditch",
    "explanationCN": "沟壑;渠"
  },
  {
    "character": "𗫛",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "to sing",
    "explanationCN": "唱歌"
  },
  {
    "character": "𗧸",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "many; much; numerous",
    "explanationCN": "多;多;众多"
  },
  {
    "character": "𘔽",
    "GX": "nuo¹",
    "GHC": "nio̱w¹",
    "explanationEN": "fair; just; impartial; equitable",
    "explanationCN": "公平;只;不偏不倚;公平"
  },
  {
    "character": "𗿷",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "to exist.ᴀ(animate); to have.ᴀ",
    "explanationCN": "to exist.ᴀ（有生命的）;拥有。"
  },
  {
    "character": "𗿘",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗤭",
    "GX": "ywiṃ¹",
    "GHC": "ˑjwĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨌",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "to guard; to defend",
    "explanationCN": "守卫;为了防守"
  },
  {
    "character": "𗦖",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "palace",
    "explanationCN": "宫殿"
  },
  {
    "character": "𗧵",
    "GX": "nsa̱r¹",
    "GHC": "sa̱r¹",
    "explanationEN": "to prick",
    "explanationCN": "去刺"
  },
  {
    "character": "𗩒",
    "GX": "rqwa̱r¹",
    "GHC": "kwar¹",
    "explanationEN": "to suppress",
    "explanationCN": "抑制"
  },
  {
    "character": "𗫈",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "now; today",
    "explanationCN": "现在;今天"
  },
  {
    "character": "𗪴",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "ram",
    "explanationCN": "公羊"
  },
  {
    "character": "𗩩",
    "GX": "vaa̱ṃ²",
    "GHC": "wjã²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗽛",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "patch",
    "explanationCN": "补丁"
  },
  {
    "character": "𗽢",
    "GX": "qi̱w¹",
    "GHC": "¹",
    "explanationEN": "farmland",
    "explanationCN": "农田"
  },
  {
    "character": "𗽵",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "jar; bottle",
    "explanationCN": "罐;瓶"
  },
  {
    "character": "𗤀",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "life; generation",
    "explanationCN": "生命;代"
  },
  {
    "character": "𗫭",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "to sing; to chant",
    "explanationCN": "唱歌;吟诵"
  },
  {
    "character": "𗪰",
    "GX": "gi²",
    "GHC": "²",
    "explanationEN": "wife; concubine",
    "explanationCN": "老婆;妾"
  },
  {
    "character": "𗣪",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "urine",
    "explanationCN": "尿"
  },
  {
    "character": "𗧒",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "birthplace",
    "explanationCN": "出生地"
  },
  {
    "character": "𗨖",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "to hide; to lurk",
    "explanationCN": "躲藏起来;潜伏"
  },
  {
    "character": "𗪥",
    "GX": "tśih¹",
    "GHC": "¹",
    "explanationEN": "humble",
    "explanationCN": "卑微"
  },
  {
    "character": "𗥯",
    "GX": "gwih¹",
    "GHC": "gjwị¹",
    "explanationEN": "to dress; to wear",
    "explanationCN": "穿衣;穿"
  },
  {
    "character": "𗨠",
    "GX": "lhə¹",
    "GHC": "¹",
    "explanationEN": "frivolous",
    "explanationCN": "轻浮"
  },
  {
    "character": "𗩖",
    "GX": "dzu²",
    "GHC": "dzju²",
    "explanationEN": "weapon; arms",
    "explanationCN": "武器;武器"
  },
  {
    "character": "𗪱",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "round bone",
    "explanationCN": "圆骨"
  },
  {
    "character": "𗧾",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "emperor",
    "explanationCN": "皇帝"
  },
  {
    "character": "𗪻",
    "GX": "rma̱r¹",
    "GHC": "mar¹",
    "explanationEN": "oath; vow",
    "explanationCN": "誓言;誓言"
  },
  {
    "character": "𗼀",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "beast; animal",
    "explanationCN": "野兽;动物"
  },
  {
    "character": "𗻎",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "evil spirit; demon",
    "explanationCN": "煞;恶魔"
  },
  {
    "character": "𗨧",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "foolish; stupid; clumsy",
    "explanationCN": "愚蠢;笨;笨拙"
  },
  {
    "character": "𗏰",
    "GX": "teh²",
    "GHC": "tjịj²",
    "explanationEN": "to embrace; to hold in arms",
    "explanationCN": "拥抱;抱在怀里"
  },
  {
    "character": "𗐁",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "to embrace",
    "explanationCN": "拥抱"
  },
  {
    "character": "𗥱",
    "GX": "dze̱¹",
    "GHC": "dzej¹",
    "explanationEN": "selfishness",
    "explanationCN": "私心"
  },
  {
    "character": "𗦒",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "face; look",
    "explanationCN": "脸;看"
  },
  {
    "character": "𗨙",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "to bear.ᴀ (a burden); to endure.ᴀ",
    "explanationCN": "to bear.ᴀ （负担）;忍耐。"
  },
  {
    "character": "𗾿",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "a kind of shell which looks like a jade; dress and personal adornment; dress",
    "explanationCN": "一种看起来像玉的贝壳;服装和个人装饰品;连衣裙"
  },
  {
    "character": "𗻠",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻶",
    "GX": "ho̱ṃh²",
    "GHC": "xọ²",
    "explanationEN": "calamity; disaster; suffering",
    "explanationCN": "灾难;灾难;痛苦"
  },
  {
    "character": "𗫟",
    "GX": "pho̱ṃ¹",
    "GHC": "phow¹",
    "explanationEN": "front of a garment",
    "explanationCN": "服装正面"
  },
  {
    "character": "𗺸",
    "GX": "zwə¹",
    "GHC": "zjwɨ¹",
    "explanationEN": "seed",
    "explanationCN": "种子"
  },
  {
    "character": "𗻨",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "human being; human being",
    "explanationCN": "人;人"
  },
  {
    "character": "𗻩",
    "GX": "zi̱ṃ²",
    "GHC": "zẽ²",
    "explanationEN": "jaw",
    "explanationCN": "颚"
  },
  {
    "character": "𗢹",
    "GX": "yə¹",
    "GHC": "ˑjɨ¹",
    "explanationEN": "to salute",
    "explanationCN": "致敬"
  },
  {
    "character": "𗩫",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "woman; the female",
    "explanationCN": "女人;女性"
  },
  {
    "character": "𗽟",
    "GX": "γwe̱²",
    "GHC": "ɣwej²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗿜",
    "GX": "tśhi¹",
    "GHC": "tśhji¹",
    "explanationEN": "shame; disgrace",
    "explanationCN": "羞耻;耻辱"
  },
  {
    "character": "𗿭",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗫣",
    "GX": "mpa̱¹",
    "GHC": "pa̱¹",
    "explanationEN": "to change",
    "explanationCN": "更改"
  },
  {
    "character": "𗤯",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "to cry; to weep; to sob",
    "explanationCN": "哭泣;哭泣;哭泣"
  },
  {
    "character": "𗣌",
    "GX": "mi²",
    "GHC": "mji²",
    "explanationEN": "to understand; to comprehend",
    "explanationCN": "去理解;去理解"
  },
  {
    "character": "𗨳",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to return; to submit",
    "explanationCN": "返回;提交"
  },
  {
    "character": "𗫇",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "nit",
    "explanationCN": "虮子"
  },
  {
    "character": "𗽺",
    "GX": "rqu̱r²",
    "GHC": "kur²",
    "explanationEN": "ice",
    "explanationCN": "冰"
  },
  {
    "character": "𗢮",
    "GX": "gwi¹",
    "GHC": "gjwi¹",
    "explanationEN": "word; speech",
    "explanationCN": "词;演讲"
  },
  {
    "character": "𗢩",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗢼",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "honest; upright",
    "explanationCN": "诚实;直立"
  },
  {
    "character": "𗢽",
    "GX": "de²",
    "GHC": "²",
    "explanationEN": "a place name; a surname",
    "explanationCN": "地名;姓氏"
  },
  {
    "character": "𗤘",
    "GX": "deṃ²",
    "GHC": "²",
    "explanationEN": "to stop; to abolish",
    "explanationCN": "停止;废除"
  },
  {
    "character": "𗧘",
    "GX": "vwo̱²",
    "GHC": "wo²",
    "explanationEN": "justice; righteousness",
    "explanationCN": "正义;义"
  },
  {
    "character": "𗼰",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗽉",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𗾉",
    "GX": "si̱w²",
    "GHC": "sew²",
    "explanationEN": "close; intimate",
    "explanationCN": "关闭;亲密"
  },
  {
    "character": "𘔰",
    "GX": "γo̱ṃh²",
    "GHC": "ˑọ²",
    "explanationEN": "tear; teardrop",
    "explanationCN": "撕;眼泪"
  },
  {
    "character": "𗐚",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to ferment; to make (wine)",
    "explanationCN": "发酵;制作 （葡萄酒）"
  },
  {
    "character": "𗬘",
    "GX": "lo²",
    "GHC": "ljo²",
    "explanationEN": "to spread.ʙ ; to disseminate.ʙ",
    "explanationCN": "传播。传播。"
  },
  {
    "character": "𗢯",
    "GX": "lhwa¹",
    "GHC": "lhjwa¹",
    "explanationEN": "tongue",
    "explanationCN": "舌"
  },
  {
    "character": "𗣁",
    "GX": "lhə¹",
    "GHC": "¹",
    "explanationEN": "a kind of shell which looks like a jade; dress and personal adornment; dress",
    "explanationCN": "一种看起来像玉的贝壳;服装和个人装饰品;连衣裙"
  },
  {
    "character": "𗣉",
    "GX": "nla̱¹",
    "GHC": "la̱¹",
    "explanationEN": "thick",
    "explanationCN": "厚"
  },
  {
    "character": "𗣭",
    "GX": "tshiṃ¹",
    "GHC": "tshjĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣷",
    "GX": "lhə̱?",
    "GHC": "lhə?",
    "explanationEN": "full; packed; satisfied",
    "explanationCN": "满;包装好的;满意"
  },
  {
    "character": "𗣃",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "word; sentence",
    "explanationCN": "词;句"
  },
  {
    "character": "𗧙",
    "GX": "llə²",
    "GHC": "ljɨ²",
    "explanationEN": "easy",
    "explanationCN": "容易"
  },
  {
    "character": "𗨫",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "to manage; to administer",
    "explanationCN": "管理;管理"
  },
  {
    "character": "𗧔",
    "GX": "llu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗩶",
    "GX": "tśhweṃ¹",
    "GHC": "tśhjwɨj¹",
    "explanationEN": "frivolous; sly",
    "explanationCN": "轻浮;狡猾"
  },
  {
    "character": "𗤁",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "six",
    "explanationCN": "六"
  },
  {
    "character": "𗤂",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "complete",
    "explanationCN": "完成"
  },
  {
    "character": "𗧁",
    "GX": "rer²",
    "GHC": "rjir²",
    "explanationEN": "scholar",
    "explanationCN": "学者"
  },
  {
    "character": "𗽨",
    "GX": "ntaa̱²",
    "GHC": "tia̱²",
    "explanationEN": "dry",
    "explanationCN": "干"
  },
  {
    "character": "𗾍",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "to rise; to leap",
    "explanationCN": "上升;飞跃"
  },
  {
    "character": "𘊠",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "boy; lad",
    "explanationCN": "男孩;小伙子"
  },
  {
    "character": "𗼿",
    "GX": "nae̱h²",
    "GHC": "nẹj²",
    "explanationEN": "rat",
    "explanationCN": "鼠"
  },
  {
    "character": "𗤴",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "senior; superior",
    "explanationCN": "前辈;优越"
  },
  {
    "character": "𗣯",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "smoothness; level",
    "explanationCN": "平滑;水平"
  },
  {
    "character": "𗫎",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "maidservant",
    "explanationCN": "女仆"
  },
  {
    "character": "𗤑",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "to attack by words",
    "explanationCN": "以言语攻击"
  },
  {
    "character": "𗦜",
    "GX": "so²",
    "GHC": "sjo²",
    "explanationEN": "to say",
    "explanationCN": "说"
  },
  {
    "character": "𗥇",
    "GX": "təh¹",
    "GHC": "tjɨ̣¹",
    "explanationEN": "boy; lad; child",
    "explanationCN": "男孩;小伙子;孩子"
  },
  {
    "character": "𗦆",
    "GX": "tsiṃ¹",
    "GHC": "tsjĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗥙",
    "GX": "tsha̱ṃ¹",
    "GHC": "tshã¹",
    "explanationEN": "steed; fine horse",
    "explanationCN": "骏马;好马"
  },
  {
    "character": "𗥂",
    "GX": "ŋqhe̱¹",
    "GHC": "khe̱j¹",
    "explanationEN": "house; room",
    "explanationCN": "房子;房间"
  },
  {
    "character": "𗥩",
    "GX": "lwu²",
    "GHC": "ljwu²",
    "explanationEN": "to meet; to assemble",
    "explanationCN": "见面;组装"
  },
  {
    "character": "𗣎",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "water spring",
    "explanationCN": "水泉"
  },
  {
    "character": "𗨿",
    "GX": "rtwar¹",
    "GHC": "tjwar¹",
    "explanationEN": "to cease; to stop",
    "explanationCN": "停止;停止"
  },
  {
    "character": "𗨩",
    "GX": "pa̱¹",
    "GHC": "pa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗪣",
    "GX": "pho̱ṃ²",
    "GHC": "phow²",
    "explanationEN": "conceited; self-important",
    "explanationCN": "自负;自大"
  },
  {
    "character": "𗫀",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "abundant; rich",
    "explanationCN": "丰富;富"
  },
  {
    "character": "𗥘",
    "GX": "lai̱h¹",
    "GHC": "liẹ¹",
    "explanationEN": "to smear",
    "explanationCN": "涂抹"
  },
  {
    "character": "𗽋",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "a traditional unit of area",
    "explanationCN": "传统的面积单位"
  },
  {
    "character": "𗾴",
    "GX": "bu̱²",
    "GHC": "bu²",
    "explanationEN": "assembly hall; hall",
    "explanationCN": "礼堂;大厅"
  },
  {
    "character": "𗏊",
    "GX": "rγa̱r¹",
    "GHC": "¹",
    "explanationEN": "to murder",
    "explanationCN": "谋杀"
  },
  {
    "character": "𗬚",
    "GX": "nnə¹",
    "GHC": "njɨ̱¹",
    "explanationEN": "to bask; to shine on",
    "explanationCN": "晒太阳;闪耀"
  },
  {
    "character": "𗬞",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "to bask",
    "explanationCN": "晒太阳"
  },
  {
    "character": "𗤓",
    "GX": "ntho¹",
    "GHC": "thjo̱¹",
    "explanationEN": "beautiful; wonderful",
    "explanationCN": "美丽;美妙"
  },
  {
    "character": "𗥺",
    "GX": "ŋŋwə̱¹",
    "GHC": "ŋwə̱¹",
    "explanationEN": "to chant incantation",
    "explanationCN": "吟诵咒语"
  },
  {
    "character": "𗨞",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗫥",
    "GX": "dźəh¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "ten",
    "explanationCN": "十"
  },
  {
    "character": "𗪓",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "skillful",
    "explanationCN": "熟练"
  },
  {
    "character": "𗏚",
    "GX": "bəh¹",
    "GHC": "¹",
    "explanationEN": "dung beetles",
    "explanationCN": "蜣螂"
  },
  {
    "character": "𗥗",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "man of wealth; moneybags",
    "explanationCN": "富有的人;富翁"
  },
  {
    "character": "𗨮",
    "GX": "kah²",
    "GHC": "kjạ²",
    "explanationEN": "song",
    "explanationCN": "歌"
  },
  {
    "character": "𗩉",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "palace",
    "explanationCN": "宫殿"
  },
  {
    "character": "𗢱",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "to teach; to instruct",
    "explanationCN": "教导;指示"
  },
  {
    "character": "𗣮",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗧖",
    "GX": "tṣao̱ṃ²",
    "GHC": "tśiow²",
    "explanationEN": "many; muchq",
    "explanationCN": "多;很多"
  },
  {
    "character": "𗧼",
    "GX": "dzu²",
    "GHC": "dzju²",
    "explanationEN": "complete; whole; all",
    "explanationCN": "完成;整个;都"
  },
  {
    "character": "𗤚",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𗾇",
    "GX": "bi̱¹",
    "GHC": "be¹",
    "explanationEN": "demented; mad",
    "explanationCN": "疯狂;狂"
  },
  {
    "character": "𗾎",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗺛",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻟",
    "GX": "hi̱ṃ²",
    "GHC": "xẽ²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗺟",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻪",
    "GX": "nni̱w²",
    "GHC": "ne̱w²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗤱",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "scheme; stratagem",
    "explanationCN": "方案;战略"
  },
  {
    "character": "𗨝",
    "GX": "śiṃ¹",
    "GHC": "śjĩ¹",
    "explanationEN": "body",
    "explanationCN": "身体"
  },
  {
    "character": "𗤲",
    "GX": "tsho̱ṃ²",
    "GHC": "tshow²",
    "explanationEN": "to ridicule; to deride",
    "explanationCN": "嘲笑;嘲笑"
  },
  {
    "character": "𗿏",
    "GX": "tshwu̱²",
    "GHC": "tshwu²",
    "explanationEN": "fat; corpulent",
    "explanationCN": "脂肪;肥胖"
  },
  {
    "character": "𗫤",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "many; much",
    "explanationCN": "多;多"
  },
  {
    "character": "𗐃",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "to buy or sell on credit",
    "explanationCN": "赊购或卖出"
  },
  {
    "character": "𗿙",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "imperial edict",
    "explanationCN": "皇帝敕令"
  },
  {
    "character": "𗺕",
    "GX": "ŋki¹",
    "GHC": "kji̱¹",
    "explanationEN": "grass",
    "explanationCN": "草"
  },
  {
    "character": "𗺖",
    "GX": "tsa̱¹",
    "GHC": "tsa¹",
    "explanationEN": "grass",
    "explanationCN": "草"
  },
  {
    "character": "𗺲",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "puncture vine",
    "explanationCN": "穿刺藤蔓"
  },
  {
    "character": "𗥈",
    "GX": "thə̱¹",
    "GHC": "thə¹",
    "explanationEN": "cooperation",
    "explanationCN": "合作"
  },
  {
    "character": "𗦂",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "calm",
    "explanationCN": "平静"
  },
  {
    "character": "𗨲",
    "GX": "tih¹",
    "GHC": "¹",
    "explanationEN": "to return; to submit",
    "explanationCN": "返回;提交"
  },
  {
    "character": "𗢲",
    "GX": "ŋga²",
    "GHC": "gia̱²",
    "explanationEN": "happy; cheerful",
    "explanationCN": "快乐;开朗"
  },
  {
    "character": "𗥴",
    "GX": "qho̱ṃ¹",
    "GHC": "khow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨪",
    "GX": "kə²",
    "GHC": "kjɨ²",
    "explanationEN": "tangerine",
    "explanationCN": "橘子"
  },
  {
    "character": "𗽀",
    "GX": "lhə²",
    "GHC": "lhjɨ²",
    "explanationEN": "dust",
    "explanationCN": "灰尘"
  },
  {
    "character": "𗧍",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "body",
    "explanationCN": "身体"
  },
  {
    "character": "𗦳",
    "GX": "dzu²",
    "GHC": "dzju²",
    "explanationEN": "host; master",
    "explanationCN": "主机;主人"
  },
  {
    "character": "𗨯",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "skill; artistry",
    "explanationCN": "技能;艺术性"
  },
  {
    "character": "𗧗",
    "GX": "tśhweṃ¹",
    "GHC": "tśhjwɨj¹",
    "explanationEN": "to prohibit; to forbid; to ban",
    "explanationCN": "禁止;禁止;禁止"
  },
  {
    "character": "𗼁",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "beast; animal",
    "explanationCN": "野兽;动物"
  },
  {
    "character": "𗧚",
    "GX": "deṃ¹",
    "GHC": "djɨj¹",
    "explanationEN": "to hide; to shelter",
    "explanationCN": "躲藏起来;到庇护所"
  },
  {
    "character": "𗐂",
    "GX": "tih²",
    "GHC": "²",
    "explanationEN": "to embrace",
    "explanationCN": "拥抱"
  },
  {
    "character": "𗴬",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "urn; earthen jar; bottle",
    "explanationCN": "瓮;㼞;瓶"
  },
  {
    "character": "𗏘",
    "GX": "rγa̱r²",
    "GHC": "ɣar²",
    "explanationEN": "chest; thorax",
    "explanationCN": "胸;胸"
  },
  {
    "character": "𗢰",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣄",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "what; which; why; how",
    "explanationCN": "什么;哪;为什么;如何"
  },
  {
    "character": "𗣰",
    "GX": "kwi¹",
    "GHC": "¹",
    "explanationEN": "used; worn; old",
    "explanationCN": "使用;穿;老"
  },
  {
    "character": "𗣆",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗣣",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "food and drink; cooked rice or other cereals",
    "explanationCN": "食物和饮料;煮熟的米饭或其他谷物"
  },
  {
    "character": "𗣶",
    "GX": "gə¹",
    "GHC": "gjɨ¹",
    "explanationEN": "children",
    "explanationCN": "孩子"
  },
  {
    "character": "𗥿",
    "GX": "pah²",
    "GHC": "pjạ²",
    "explanationEN": "wizard; sorcerer",
    "explanationCN": "巫师;巫师"
  },
  {
    "character": "𗥚",
    "GX": "zih²",
    "GHC": "zjwị²",
    "explanationEN": "to give birth",
    "explanationCN": "生育"
  },
  {
    "character": "𗥷",
    "GX": "nla̱¹",
    "GHC": "la̱¹",
    "explanationEN": "color; look",
    "explanationCN": "颜色;看"
  },
  {
    "character": "𗧕",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "tax; duty",
    "explanationCN": "税;责任"
  },
  {
    "character": "𗥰",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗧌",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "beautiful; pretty",
    "explanationCN": "美丽;美"
  },
  {
    "character": "𗧧",
    "GX": "li²",
    "GHC": "ljị²",
    "explanationEN": "to spoil (a child); to dote (a child)",
    "explanationCN": "宠坏（一个孩子）;to dote （一个孩子）"
  },
  {
    "character": "𗧧",
    "GX": "li²",
    "GHC": "ljị²",
    "explanationEN": "to spoil (a child); to dote (a child)",
    "explanationCN": "宠坏（一个孩子）;to dote （一个孩子）"
  },
  {
    "character": "𗨬",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "narrow",
    "explanationCN": "窄"
  },
  {
    "character": "𗩷",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "gadfly",
    "explanationCN": "牛虻"
  },
  {
    "character": "𗩹",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "now; this moment",
    "explanationCN": "现在;此刻"
  },
  {
    "character": "𗽗",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "to cover; to hide from view",
    "explanationCN": "覆盖;在视图中隐藏"
  },
  {
    "character": "𗽖",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "east",
    "explanationCN": "东"
  },
  {
    "character": "𗽴",
    "GX": "da̱ṃ¹",
    "GHC": "dã¹",
    "explanationEN": "to kick",
    "explanationCN": "踢"
  },
  {
    "character": "𗽜",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "donkey",
    "explanationCN": "驴"
  },
  {
    "character": "𗾈",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "able and virtuous people",
    "explanationCN": "有能力和有德行的人"
  },
  {
    "character": "𗾕",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "swallow",
    "explanationCN": "吞"
  },
  {
    "character": "𗾧",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗿌",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗿯",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "to trample; to tread",
    "explanationCN": "践踏;踏"
  },
  {
    "character": "𘔳",
    "GX": "lwi̱w¹",
    "GHC": "lwew¹",
    "explanationEN": "gas; smoke; flame",
    "explanationCN": "气;烟;火焰"
  },
  {
    "character": "𘔴",
    "GX": "du²",
    "GHC": "dju²",
    "explanationEN": "to give birth",
    "explanationCN": "生育"
  },
  {
    "character": "𘟦",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "mandarin duck",
    "explanationCN": "鸳鸯"
  },
  {
    "character": "𗩀",
    "GX": "rkwər¹",
    "GHC": "kjwɨr¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗏠",
    "GX": "rγa̱r²",
    "GHC": "ɣar²",
    "explanationEN": "amazement; astonishment",
    "explanationCN": "惊愕;惊讶"
  },
  {
    "character": "𗩵",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗤒",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "year; age",
    "explanationCN": "年;年龄"
  },
  {
    "character": "𗤔",
    "GX": "mu²",
    "GHC": "mju²",
    "explanationEN": "to dance; to play",
    "explanationCN": "跳舞;玩"
  },
  {
    "character": "𗦋",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "carriage",
    "explanationCN": "运输"
  },
  {
    "character": "𗧮",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "land",
    "explanationCN": "土地"
  },
  {
    "character": "𗽑",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "grave; cemetery",
    "explanationCN": "坟墓;墓地"
  },
  {
    "character": "𗾟",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "vast; wide; extensive",
    "explanationCN": "巨大;宽;广泛"
  },
  {
    "character": "𗿮",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "people of father’s generation",
    "explanationCN": "父亲那一代的人"
  },
  {
    "character": "𗿞",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "to mate; to copulate",
    "explanationCN": "交配;交配"
  },
  {
    "character": "𗏱",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "to combine; to gather",
    "explanationCN": "组合在一起;聚集"
  },
  {
    "character": "𗏮",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "landscape",
    "explanationCN": "景观"
  },
  {
    "character": "𗩨",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "color",
    "explanationCN": "颜色"
  },
  {
    "character": "𗦫",
    "GX": "yiw¹",
    "GHC": "ˑjiw¹",
    "explanationEN": "cause",
    "explanationCN": "原因"
  },
  {
    "character": "𗧀",
    "GX": "li̱w¹",
    "GHC": "lew¹",
    "explanationEN": "only; sole",
    "explanationCN": "只;唯一"
  },
  {
    "character": "𗩟",
    "GX": "tśeh¹",
    "GHC": "tśjịj¹",
    "explanationEN": "year; age",
    "explanationCN": "年;年龄"
  },
  {
    "character": "𗩠",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "luxuriant; majestic",
    "explanationCN": "华丽;雄伟"
  },
  {
    "character": "𗫦",
    "GX": "γai̱w¹",
    "GHC": "ɣiew¹",
    "explanationEN": "to study; to learn",
    "explanationCN": "学习;要了解"
  },
  {
    "character": "𗽸",
    "GX": "nlə¹",
    "GHC": "lhjɨ̱¹",
    "explanationEN": "epidermis; cuticle",
    "explanationCN": "表皮;角质层"
  },
  {
    "character": "𗿊",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "body",
    "explanationCN": "身体"
  },
  {
    "character": "𗿖",
    "GX": "ŋŋaa̱²",
    "GHC": "ŋia̱²",
    "explanationEN": "goose",
    "explanationCN": "鹅"
  },
  {
    "character": "𗿩",
    "GX": "tśeh²",
    "GHC": "tśjịj²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗏝",
    "GX": "zoh¹",
    "GHC": "¹",
    "explanationEN": "cow disease",
    "explanationCN": "奶牛病"
  },
  {
    "character": "𗪤",
    "GX": "tśih¹",
    "GHC": "tśjị¹",
    "explanationEN": "humble",
    "explanationCN": "卑微"
  },
  {
    "character": "𗪳",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "to teach; to instruct",
    "explanationCN": "教导;指示"
  },
  {
    "character": "𗽣",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "to measure",
    "explanationCN": "测量"
  },
  {
    "character": "𗩸",
    "GX": "rkhar¹",
    "GHC": "khjar¹",
    "explanationEN": "honest; upright",
    "explanationCN": "诚实;直立"
  },
  {
    "character": "𗦌",
    "GX": "swa̱ṃ¹",
    "GHC": "swã¹",
    "explanationEN": "mute",
    "explanationCN": "静音"
  },
  {
    "character": "𗪇",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "to sink; to submerge",
    "explanationCN": "沉没;浸没"
  },
  {
    "character": "𗩳",
    "GX": "dẓwai̱¹",
    "GHC": "dźiwe¹",
    "explanationEN": "to drag; to pull",
    "explanationCN": "拖动;拉取"
  },
  {
    "character": "𗦴",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "coal; mine; holy mountain",
    "explanationCN": "煤;矿山;圣山"
  },
  {
    "character": "𗿦",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "female; woman",
    "explanationCN": "女性;女人"
  },
  {
    "character": "𗺗",
    "GX": "ndẓaa̱²",
    "GHC": "dźia̱²",
    "explanationEN": "green grass",
    "explanationCN": "青"
  },
  {
    "character": "𗺝",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻀",
    "GX": "bai̱²",
    "GHC": "bie²",
    "explanationEN": "herbal medicine",
    "explanationCN": "草药"
  },
  {
    "character": "𗺨",
    "GX": "rni̱r²",
    "GHC": "ner²",
    "explanationEN": "to fade; to wither; to shrivel up",
    "explanationCN": "褪色;枯萎;萎缩"
  },
  {
    "character": "𗺻",
    "GX": "haa̱¹",
    "GHC": "xia¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗏙",
    "GX": "rdzwər¹",
    "GHC": "dzjwɨr¹",
    "explanationEN": "limit; end",
    "explanationCN": "限制;结束"
  },
  {
    "character": "𗥵",
    "GX": "qhə̱²",
    "GHC": "khə²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗫐",
    "GX": "su̱¹",
    "GHC": "su¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗩏",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "target",
    "explanationCN": "目标"
  },
  {
    "character": "𗻡",
    "GX": "lho̱ṃh¹",
    "GHC": "lhọ¹",
    "explanationEN": "blanket",
    "explanationCN": "毯子"
  },
  {
    "character": "𗪷",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗻅",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻐",
    "GX": "mbu̱²",
    "GHC": "bu̱²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻲",
    "GX": "tswə̱h¹",
    "GHC": "tswə̣¹",
    "explanationEN": "excrement; dung",
    "explanationCN": "屎;粪"
  },
  {
    "character": "𗏣",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "DIRE: directive case; direction",
    "explanationCN": "Dire： 指令 ;方向"
  },
  {
    "character": "𗏔",
    "GX": "tśoh¹",
    "GHC": "¹",
    "explanationEN": "ugly",
    "explanationCN": "丑"
  },
  {
    "character": "𗪲",
    "GX": "γiw¹",
    "GHC": "ɣjiw¹",
    "explanationEN": "to summon (for surrender); to call for",
    "explanationCN": "传唤 （投降）;调用"
  },
  {
    "character": "𗏷",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "coffin; casket",
    "explanationCN": "棺材;棺材"
  },
  {
    "character": "𗦛",
    "GX": "rdzə̱r²",
    "GHC": "dzər²",
    "explanationEN": "to extrude",
    "explanationCN": "挤出"
  },
  {
    "character": "𗪺",
    "GX": "γai̱¹",
    "GHC": "ɣie¹",
    "explanationEN": "power; strength",
    "explanationCN": "权力;强度"
  },
  {
    "character": "𗫙",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "wrestling",
    "explanationCN": "摔跤"
  },
  {
    "character": "𗧡",
    "GX": "ntse¹",
    "GHC": "tsji̱j¹",
    "explanationEN": "to palpitate",
    "explanationCN": "心悸"
  },
  {
    "character": "𗧠",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "to desire; to wish; to lust",
    "explanationCN": "欲望;许愿;对欲望"
  },
  {
    "character": "𗽶",
    "GX": "?u̱h²",
    "GHC": "lụ²",
    "explanationEN": "cold; freeze",
    "explanationCN": "冷;冻结"
  },
  {
    "character": "𗿰",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "steps; stairs",
    "explanationCN": "步骤;楼梯"
  },
  {
    "character": "𗤮",
    "GX": "nwo̱ṃ²",
    "GHC": "nuə²",
    "explanationEN": "eloquence",
    "explanationCN": "口才"
  },
  {
    "character": "𗧎",
    "GX": "qae̱h¹",
    "GHC": "kiẹj¹",
    "explanationEN": "sisters",
    "explanationCN": "姐妹"
  },
  {
    "character": "𗼶",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "ridge",
    "explanationCN": "脊"
  },
  {
    "character": "𗏋",
    "GX": "si²",
    "GHC": "²",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𗬡",
    "GX": "biṃ¹",
    "GHC": "bjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗣳",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "to write",
    "explanationCN": "写"
  },
  {
    "character": "𗣵",
    "GX": "bae̱¹",
    "GHC": "biej¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗩥",
    "GX": "bo̱¹",
    "GHC": "bo¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗫏",
    "GX": "thwih¹",
    "GHC": "thjwị¹",
    "explanationEN": "the young",
    "explanationCN": "年轻人"
  },
  {
    "character": "𗏵",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "end; tail; east",
    "explanationCN": "结束;尾巴;东"
  },
  {
    "character": "𗦬",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "common; generally",
    "explanationCN": "常见;一般"
  },
  {
    "character": "𗪢",
    "GX": "dza¹",
    "GHC": "dzja¹",
    "explanationEN": "hair worn in a bun or coil",
    "explanationCN": "头发扎成发髻或盘绕"
  },
  {
    "character": "𗪒",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "inner; inside",
    "explanationCN": "内;里面"
  },
  {
    "character": "𗺧",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻝",
    "GX": "zi̱ṃ²",
    "GHC": "zẽ²",
    "explanationEN": "bamboo shoots",
    "explanationCN": "竹笋"
  },
  {
    "character": "𗻳",
    "GX": "peṃ¹",
    "GHC": "pjɨj¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗧿",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "to smear; to plaster",
    "explanationCN": "抹黑;到石膏"
  },
  {
    "character": "𗏿",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "auspicious; lucky",
    "explanationCN": "吉祥;幸运"
  },
  {
    "character": "𗫮",
    "GX": "da̱ṃ¹",
    "GHC": "dã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗺹",
    "GX": "hi̱w¹",
    "GHC": "xew¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻬",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "thin; rare",
    "explanationCN": "薄;罕见"
  },
  {
    "character": "𗨦",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "pellet",
    "explanationCN": "丸"
  },
  {
    "character": "𗼾",
    "GX": "ni̱ṃ¹",
    "GHC": "nẽ¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗧴",
    "GX": "thu²",
    "GHC": "thju²",
    "explanationEN": "to abandon; to give up",
    "explanationCN": "放弃;放弃"
  },
  {
    "character": "𗪖",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "to seethe; to churn; to roll",
    "explanationCN": "沸腾;搅动;滚动"
  },
  {
    "character": "𗫒",
    "GX": "mba̱¹",
    "GHC": "ba̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗫓",
    "GX": "nśo̱r¹",
    "GHC": "sjo̱r¹",
    "explanationEN": "levity",
    "explanationCN": "轻率"
  },
  {
    "character": "𗽘",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "cave; den; valley",
    "explanationCN": "洞穴;书房;山谷"
  },
  {
    "character": "𗥸",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "to cry; to sob",
    "explanationCN": "哭泣;哭泣"
  },
  {
    "character": "𗣇",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "the third of the Eight Trigrams",
    "explanationCN": "八卦中的第三卦"
  },
  {
    "character": "𗽱",
    "GX": "da̱ṃ¹",
    "GHC": "dã¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗐎",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "father",
    "explanationCN": "爸爸"
  },
  {
    "character": "𗐖",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "to arrive",
    "explanationCN": "到达"
  },
  {
    "character": "𗺇",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "cheek",
    "explanationCN": "脸颊"
  },
  {
    "character": "𘚺",
    "GX": "qhae̱ṃ¹",
    "GHC": "khiəj¹",
    "explanationEN": "cough; asthma",
    "explanationCN": "咳嗽;哮喘"
  },
  {
    "character": "𘚸",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "fork",
    "explanationCN": "叉"
  },
  {
    "character": "𗴪",
    "GX": "rmər²",
    "GHC": "mjɨr²",
    "explanationEN": "to observe",
    "explanationCN": "观察"
  },
  {
    "character": "𗃰",
    "GX": "he̱¹",
    "GHC": "xej¹",
    "explanationEN": "sea",
    "explanationCN": "海"
  },
  {
    "character": "𗐑",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "scarf; kerchief",
    "explanationCN": "围巾;头巾"
  },
  {
    "character": "𗴡",
    "GX": "ŋġa̱¹",
    "GHC": "ga̱¹",
    "explanationEN": "doubt",
    "explanationCN": "怀疑"
  },
  {
    "character": "𗴑",
    "GX": "qhae̱ṃ¹",
    "GHC": "khiəj¹",
    "explanationEN": "calf (of the leg)",
    "explanationCN": "小腿"
  },
  {
    "character": "𗐋",
    "GX": "γa²",
    "GHC": "ɣja²",
    "explanationEN": "umbrella of a carriage",
    "explanationCN": "马车的伞"
  },
  {
    "character": "𗃕",
    "GX": "nẓai̱¹",
    "GHC": "źie̱¹",
    "explanationEN": "to make great efforts",
    "explanationCN": "付出巨大的努力"
  },
  {
    "character": "𗬨",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "to seek; to hanker after; to covet",
    "explanationCN": "寻找;渴望追随;觊觎"
  },
  {
    "character": "𗃢",
    "GX": "nśi¹",
    "GHC": "śji̱¹",
    "explanationEN": "misgiving; doubt",
    "explanationCN": "疑虑;怀疑"
  },
  {
    "character": "𗬧",
    "GX": "vwə̱h¹",
    "GHC": "wə̣¹",
    "explanationEN": "to burn",
    "explanationCN": "燃烧"
  },
  {
    "character": "𗃵",
    "GX": "puh²",
    "GHC": "pjụ²",
    "explanationEN": "palace",
    "explanationCN": "宫殿"
  },
  {
    "character": "𗃮",
    "GX": "ṇo̱ṃ²",
    "GHC": "dźiow²",
    "explanationEN": "plaint; certificate",
    "explanationCN": "感叹;证书"
  },
  {
    "character": "𗴏",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "to broil; to roast",
    "explanationCN": "烤;烘烤"
  },
  {
    "character": "𗃖",
    "GX": "mu²",
    "GHC": "mju²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗃜",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "to be willing to; to be ready to",
    "explanationCN": "愿意;做好准备"
  },
  {
    "character": "𘓛",
    "GX": "dzwi¹",
    "GHC": "dzjwi¹",
    "explanationEN": "still; calm",
    "explanationCN": "还;平静"
  },
  {
    "character": "𗴥",
    "GX": "miw²",
    "GHC": "mjiw²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗃸",
    "GX": "haə̱¹",
    "GHC": "xiə¹",
    "explanationEN": "to leave",
    "explanationCN": "离开"
  },
  {
    "character": "𗃙",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj¹",
    "explanationEN": "to sport; to make fun of",
    "explanationCN": "到运动;取笑"
  },
  {
    "character": "𘀂",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "detestion",
    "explanationCN": "憎恶"
  },
  {
    "character": "𗃤",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "relief; terrain",
    "explanationCN": "救济;地形"
  },
  {
    "character": "𗴔",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "hatred; resentment",
    "explanationCN": "仇恨;怨恨"
  },
  {
    "character": "𗴘",
    "GX": "ŋwə¹",
    "GHC": "ŋjwɨ¹",
    "explanationEN": "fear; dread",
    "explanationCN": "恐惧;恐惧"
  },
  {
    "character": "𗴢",
    "GX": "mbu¹",
    "GHC": "bju̱¹",
    "explanationEN": "to respect; to revere",
    "explanationCN": "尊重;崇敬"
  },
  {
    "character": "𘓗",
    "GX": "dzə̱¹",
    "GHC": "dzə¹",
    "explanationEN": "concentrated",
    "explanationCN": "集中"
  },
  {
    "character": "𗬴",
    "GX": "le̱ṃ¹",
    "GHC": "ləj¹",
    "explanationEN": "equal; even; moderate",
    "explanationCN": "平等;甚至;温和"
  },
  {
    "character": "𗃦",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "city",
    "explanationCN": "城市"
  },
  {
    "character": "𗐐",
    "GX": "hoṃ¹",
    "GHC": "xjow¹",
    "explanationEN": "fragrant",
    "explanationCN": "香"
  },
  {
    "character": "𗃬",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "fear; dread",
    "explanationCN": "恐惧;恐惧"
  },
  {
    "character": "𗴟",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "father",
    "explanationCN": "爸爸"
  },
  {
    "character": "𗴓",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "tiger",
    "explanationCN": "老虎"
  },
  {
    "character": "𗴚",
    "GX": "pe¹",
    "GHC": "pji̱j¹",
    "explanationEN": "to flog; to beat",
    "explanationCN": "鞭打;击败"
  },
  {
    "character": "𗃳",
    "GX": "rmər²",
    "GHC": "²",
    "explanationEN": "to observe",
    "explanationCN": "观察"
  },
  {
    "character": "𗼊",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "shyness; shame",
    "explanationCN": "害羞;羞耻"
  },
  {
    "character": "𗼪",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "to listen attentively",
    "explanationCN": "专心聆听"
  },
  {
    "character": "𗼮",
    "GX": "dzuh²",
    "GHC": "dzjụ²",
    "explanationEN": "rain",
    "explanationCN": "雨"
  },
  {
    "character": "𗐌",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼗",
    "GX": "deṃ¹",
    "GHC": "djɨj¹",
    "explanationEN": "shallow",
    "explanationCN": "浅"
  },
  {
    "character": "𗼅",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "beautiful; good",
    "explanationCN": "美丽;好"
  },
  {
    "character": "𘴂",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "god; deity; divinity; supernatural being",
    "explanationCN": "神;神;神;神"
  },
  {
    "character": "𗼍",
    "GX": "nsa̱¹",
    "GHC": "sa̱¹",
    "explanationEN": "very close relative",
    "explanationCN": "非常近的亲戚"
  },
  {
    "character": "𗼚",
    "GX": "γo̱ṃ²",
    "GHC": "ˑow²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼠",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "favor; merit",
    "explanationCN": "喜爱;优点"
  },
  {
    "character": "𗼡",
    "GX": "peh¹",
    "GHC": "pjịj¹",
    "explanationEN": "wizard",
    "explanationCN": "巫师"
  },
  {
    "character": "𗼥",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "power; authority",
    "explanationCN": "权力;柄"
  },
  {
    "character": "𗼩",
    "GX": "γa̱h²",
    "GHC": "ɣạ²",
    "explanationEN": "name, surname",
    "explanationCN": "姓名"
  },
  {
    "character": "𗼋",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "respect; reverence",
    "explanationCN": "尊;崇敬"
  },
  {
    "character": "𗼏",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "uncle",
    "explanationCN": "叔叔"
  },
  {
    "character": "𘉈",
    "GX": "dzi̱w²",
    "GHC": "dzew²",
    "explanationEN": "to swindle; to cheat",
    "explanationCN": "诈骗;作弊"
  },
  {
    "character": "𘉃",
    "GX": "dzə̱h¹",
    "GHC": "dzə̣¹",
    "explanationEN": "witticism",
    "explanationCN": "妙语"
  },
  {
    "character": "𗢝",
    "GX": "yu¹",
    "GHC": "ˑju¹",
    "explanationEN": "to be frightened; to scare",
    "explanationCN": "害怕;吓唬"
  },
  {
    "character": "𘉇",
    "GX": "dzi̱w²",
    "GHC": "²",
    "explanationEN": "to swindle; to cheat",
    "explanationCN": "诈骗;作弊"
  },
  {
    "character": "𗐕",
    "GX": "pe²",
    "GHC": "pjij²",
    "explanationEN": "father; people of father's generation",
    "explanationCN": "爸爸;父亲那一代的人"
  },
  {
    "character": "𗁄",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "fatigue",
    "explanationCN": "疲劳"
  },
  {
    "character": "𗎴",
    "GX": "ti¹",
    "GHC": "tji¹",
    "explanationEN": "east; end",
    "explanationCN": "东;结束"
  },
  {
    "character": "𗃉",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "stuffy; dizzy",
    "explanationCN": "闷;头晕"
  },
  {
    "character": "𗂽",
    "GX": "ye²",
    "GHC": "ˑjij²",
    "explanationEN": "sheep",
    "explanationCN": "羊"
  },
  {
    "character": "𗢁",
    "GX": "hə̱¹",
    "GHC": "xə¹",
    "explanationEN": "to seek; to look for",
    "explanationCN": "寻找;寻找"
  },
  {
    "character": "𗆎",
    "GX": "tshe²",
    "GHC": "tshjij²",
    "explanationEN": "sheep",
    "explanationCN": "羊"
  },
  {
    "character": "𗆻",
    "GX": "γa̱¹",
    "GHC": "ˑja¹",
    "explanationEN": "alone; lonely; different",
    "explanationCN": "独自;孤独;不同"
  },
  {
    "character": "𗄼",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "to come; to fall",
    "explanationCN": "来;坠落"
  },
  {
    "character": "𗆧",
    "GX": "siw¹",
    "GHC": "sjiw¹",
    "explanationEN": "new; fresh",
    "explanationCN": "新增功能;新鲜"
  },
  {
    "character": "𗆊",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "uneven; to fight",
    "explanationCN": "不平;去战斗"
  },
  {
    "character": "𗆉",
    "GX": "qao̱¹",
    "GHC": "kio¹",
    "explanationEN": "to drive; to oust",
    "explanationCN": "开车;驱逐"
  },
  {
    "character": "𗃈",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "new",
    "explanationCN": "新增功能"
  },
  {
    "character": "𗂃",
    "GX": "tśhwaw¹",
    "GHC": "tśhjwa̱¹",
    "explanationEN": "to separate; to break off",
    "explanationCN": "分离;断开"
  },
  {
    "character": "𗂒",
    "GX": "rqwa̱r¹",
    "GHC": "kwar¹",
    "explanationEN": "to observe; to watch",
    "explanationCN": "去观察;观看"
  },
  {
    "character": "𗅰",
    "GX": "lwe̱ṃ¹",
    "GHC": "lwəj¹",
    "explanationEN": "slow; obtuse",
    "explanationCN": "慢;钝"
  },
  {
    "character": "𗆵",
    "GX": "la̱¹",
    "GHC": "¹",
    "explanationEN": "honest",
    "explanationCN": "诚实"
  },
  {
    "character": "𗁮",
    "GX": "tśhi¹",
    "GHC": "tśhji¹",
    "explanationEN": "meat",
    "explanationCN": "肉"
  },
  {
    "character": "𗁛",
    "GX": "la̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "to estimate",
    "explanationCN": "估算"
  },
  {
    "character": "𗂱",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "neck",
    "explanationCN": "脖子"
  },
  {
    "character": "𗃅",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "to decorate; to adorn",
    "explanationCN": "装饰;装饰"
  },
  {
    "character": "𗹬",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "passion; knowledge",
    "explanationCN": "热情;知识"
  },
  {
    "character": "𗹟",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "patron of sheep",
    "explanationCN": "羊的守护神"
  },
  {
    "character": "𗂳",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "to shoot",
    "explanationCN": "拍摄"
  },
  {
    "character": "𗀸",
    "GX": "nte̱¹",
    "GHC": "the̱j¹",
    "explanationEN": "to ripple; to undulate",
    "explanationCN": "到涟漪;起伏"
  },
  {
    "character": "𗂯",
    "GX": "rġa̱r²",
    "GHC": "gar²",
    "explanationEN": "to sleep",
    "explanationCN": "睡觉"
  },
  {
    "character": "𗄶",
    "GX": "tṣhai̱w¹",
    "GHC": "tśhiew¹",
    "explanationEN": "to damage; to injure",
    "explanationCN": "损害;伤害"
  },
  {
    "character": "𗅤",
    "GX": "rma̱r²",
    "GHC": "mar²",
    "explanationEN": "sorrowful; puzzled",
    "explanationCN": "悲哀;困惑"
  },
  {
    "character": "𗆴",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "honest",
    "explanationCN": "诚实"
  },
  {
    "character": "𗄵",
    "GX": "γwae̱ṃ¹",
    "GHC": "ɣiwəj¹",
    "explanationEN": "harsh and unreasonable; perverse",
    "explanationCN": "苛刻和不合理;反常"
  },
  {
    "character": "𗆢",
    "GX": "qhwaə̱¹",
    "GHC": "khiwə¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗆯",
    "GX": "tshə²",
    "GHC": "tshjɨ²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗆶",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "turnip",
    "explanationCN": "萝卜"
  },
  {
    "character": "𗹹",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "white",
    "explanationCN": "白"
  },
  {
    "character": "𗂴",
    "GX": "rtśər¹",
    "GHC": "tśjɨr¹",
    "explanationEN": "to pare",
    "explanationCN": "去削"
  },
  {
    "character": "𗀳",
    "GX": "rtśər¹",
    "GHC": "tśjɨ̱r¹",
    "explanationEN": "to attack",
    "explanationCN": "攻击"
  },
  {
    "character": "𗀺",
    "GX": "rnə̱r²",
    "GHC": "nər²",
    "explanationEN": "finger",
    "explanationCN": "手指"
  },
  {
    "character": "𗁅",
    "GX": "lla̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "hand",
    "explanationCN": "手"
  },
  {
    "character": "𗁃",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "to cut",
    "explanationCN": "剪切"
  },
  {
    "character": "𗁊",
    "GX": "bah¹",
    "GHC": "bjạ¹",
    "explanationEN": "coarse; rough",
    "explanationCN": "粗;粗糙"
  },
  {
    "character": "𗄴",
    "GX": "ntwi̱²",
    "GHC": "twe̱²",
    "explanationEN": "pair; couple",
    "explanationCN": "双;夫妇"
  },
  {
    "character": "𘴀",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "foolish; stupid; clumsy",
    "explanationCN": "愚蠢;笨;笨拙"
  },
  {
    "character": "𗅎",
    "GX": "qhwaə̱¹",
    "GHC": "khiwə¹",
    "explanationEN": "coral",
    "explanationCN": "珊瑚"
  },
  {
    "character": "𗅀",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "bright star",
    "explanationCN": "璀璨星"
  },
  {
    "character": "𗅼",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "to drink",
    "explanationCN": "喝"
  },
  {
    "character": "𗅣",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "firefly; glowworm",
    "explanationCN": "萤火虫;萤火虫"
  },
  {
    "character": "𗅿",
    "GX": "dzeh¹",
    "GHC": "dzjịj¹",
    "explanationEN": "muddy; trubid",
    "explanationCN": "泥泞;特鲁比德"
  },
  {
    "character": "𗡽",
    "GX": "tṣwae̱ṃ²",
    "GHC": "tśiwəj²",
    "explanationEN": "droppings; insect dung",
    "explanationCN": "粪便;昆虫粪便"
  },
  {
    "character": "𗂑",
    "GX": "rqwa̱r¹",
    "GHC": "¹",
    "explanationEN": "to observe; to watch",
    "explanationCN": "去观察;观看"
  },
  {
    "character": "𗄿",
    "GX": "llu̱h²",
    "GHC": "lụ²",
    "explanationEN": "to hinder; to obstruct",
    "explanationCN": "阻碍;阻碍"
  },
  {
    "character": "𗅌",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "winding; meandering",
    "explanationCN": "绕组;蜿蜒"
  },
  {
    "character": "𗡻",
    "GX": "lə¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "excrement; dung",
    "explanationCN": "屎;粪"
  },
  {
    "character": "𗆹",
    "GX": "nye¹",
    "GHC": "ˑji̱j¹",
    "explanationEN": "straight",
    "explanationCN": "直"
  },
  {
    "character": "𗆼",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "doubt; suspicion",
    "explanationCN": "怀疑;怀疑"
  },
  {
    "character": "𗆰",
    "GX": "lla¹",
    "GHC": "lja¹",
    "explanationEN": "to transport.ᴀ",
    "explanationCN": "到交通。"
  },
  {
    "character": "𗆱",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "to close; to handcuff",
    "explanationCN": "关闭;戴上手铐"
  },
  {
    "character": "𗇁",
    "GX": "śaṃ¹",
    "GHC": "śjã¹",
    "explanationEN": "(Buddhist) chan; zen",
    "explanationCN": "（佛教）chan;禅"
  },
  {
    "character": "𗅭",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "to chop; to cut",
    "explanationCN": "砍;剪切"
  },
  {
    "character": "𗁦",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "to promote; to raise",
    "explanationCN": "促进;加注"
  },
  {
    "character": "𗃊",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "to splash; to pour",
    "explanationCN": "飞溅;倾倒"
  },
  {
    "character": "𗂸",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "prime minister (in ancient China)",
    "explanationCN": "宰相（在中国古代）"
  },
  {
    "character": "𗂘",
    "GX": "rker²",
    "GHC": "kji̱r²",
    "explanationEN": "to obstruct",
    "explanationCN": "阻碍"
  },
  {
    "character": "𗃎",
    "GX": "ryer¹",
    "GHC": "ˑjijr¹",
    "explanationEN": "firm",
    "explanationCN": "公司"
  },
  {
    "character": "𗃏",
    "GX": "koh²",
    "GHC": "kjọ²",
    "explanationEN": "to cut",
    "explanationCN": "剪切"
  },
  {
    "character": "𗹻",
    "GX": "di̱w¹",
    "GHC": "dew¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗹦",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "sky; heaven",
    "explanationCN": "天空;天堂"
  },
  {
    "character": "𗺃",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to infect",
    "explanationCN": "感染"
  },
  {
    "character": "𗃁",
    "GX": "pha²",
    "GHC": "phja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗎩",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "family; household",
    "explanationCN": "家庭;家庭"
  },
  {
    "character": "𗅡",
    "GX": "qhwaə̱¹",
    "GHC": "khiwə¹",
    "explanationEN": "horn",
    "explanationCN": "角"
  },
  {
    "character": "𗂕",
    "GX": "mae̱¹",
    "GHC": "miej¹",
    "explanationEN": "mole",
    "explanationCN": "鼹鼠"
  },
  {
    "character": "𗂏",
    "GX": "yu¹",
    "GHC": "ˑju¹",
    "explanationEN": "big tree",
    "explanationCN": "大树"
  },
  {
    "character": "𗶰",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "to expose; to reveal",
    "explanationCN": "揭露;揭示"
  },
  {
    "character": "𘝔",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "to transport",
    "explanationCN": "运输"
  },
  {
    "character": "𘝒",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "string; wool rope",
    "explanationCN": "字符串;羊毛绳"
  },
  {
    "character": "𘉧",
    "GX": "dźaw²",
    "GHC": "dźja̱²",
    "explanationEN": "skinny; wan and sallow",
    "explanationCN": "瘦;WAN 和 Sallow"
  },
  {
    "character": "𗌣",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "bridge",
    "explanationCN": "桥"
  },
  {
    "character": "𘈉",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "to present as a gift; to give",
    "explanationCN": "作为礼物赠送;给"
  },
  {
    "character": "𗢦",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "flag; banner",
    "explanationCN": "旗;旗帜"
  },
  {
    "character": "𗋸",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "PROB: probable",
    "explanationCN": "概率"
  },
  {
    "character": "𘉼",
    "GX": "ntho̱²",
    "GHC": "tho̱²",
    "explanationEN": "to harm; to endanger",
    "explanationCN": "伤害;危害"
  },
  {
    "character": "𗋹",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "fluid; liquid",
    "explanationCN": "流体;液"
  },
  {
    "character": "𘉸",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "scab",
    "explanationCN": "痂"
  },
  {
    "character": "𘉽",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "scab",
    "explanationCN": "痂"
  },
  {
    "character": "𘊎",
    "GX": "rphar¹",
    "GHC": "phjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗋱",
    "GX": "ndi²",
    "GHC": "dji̱²",
    "explanationEN": "to wash",
    "explanationCN": "洗涤"
  },
  {
    "character": "𗊠",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗏈",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "writing brush",
    "explanationCN": "笔"
  },
  {
    "character": "𗊘",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "to mix; to mix",
    "explanationCN": "混合;混合"
  },
  {
    "character": "𗌔",
    "GX": "thwa̱ṃ²",
    "GHC": "thwã²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗇇",
    "GX": "hwa̱¹",
    "GHC": "xwa¹",
    "explanationEN": "monk",
    "explanationCN": "和尚"
  },
  {
    "character": "𗊐",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "calf",
    "explanationCN": "小腿"
  },
  {
    "character": "𗊡",
    "GX": "ha̱¹",
    "GHC": "xa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗊞",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "honest; upright",
    "explanationCN": "诚实;直立"
  },
  {
    "character": "𗋤",
    "GX": "rzər²",
    "GHC": "zjɨ̱r²",
    "explanationEN": "cheese",
    "explanationCN": "奶酪"
  },
  {
    "character": "𘉨",
    "GX": "dzwə̱¹",
    "GHC": "dzwə¹",
    "explanationEN": "chapter; volume",
    "explanationCN": "章;卷"
  },
  {
    "character": "𗊝",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "to cross (a river)",
    "explanationCN": "渡口 （一条河）"
  },
  {
    "character": "𗢕",
    "GX": "rlhər¹",
    "GHC": "lhjɨ̱r¹",
    "explanationEN": "to lose; to fall",
    "explanationCN": "输;坠落"
  },
  {
    "character": "𗏅",
    "GX": "n·ywə¹",
    "GHC": "ˑjwɨ̱¹",
    "explanationEN": "to block; to obstruct",
    "explanationCN": "阻止;阻碍"
  },
  {
    "character": "𗊮",
    "GX": "laa̱²",
    "GHC": "lia²",
    "explanationEN": "drunkenness",
    "explanationCN": "醉态"
  },
  {
    "character": "𗋴",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to press; to suppress",
    "explanationCN": "按 ;抑制"
  },
  {
    "character": "𗌇",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "harmonious",
    "explanationCN": "和谐"
  },
  {
    "character": "𗋜",
    "GX": "tsa²",
    "GHC": "tsja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘊄",
    "GX": "ṇo̱ṃ²",
    "GHC": "niow²",
    "explanationEN": "evil; wicked; bad",
    "explanationCN": "邪;邪恶;坏"
  },
  {
    "character": "𘊁",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "to dig",
    "explanationCN": "挖掘"
  },
  {
    "character": "𗋳",
    "GX": "kwa̱ṃ¹",
    "GHC": "kwã¹",
    "explanationEN": "tube",
    "explanationCN": "管"
  },
  {
    "character": "𗃛",
    "GX": "loṃ¹",
    "GHC": "ljow¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗌆",
    "GX": "śwe²",
    "GHC": "śjwij²",
    "explanationEN": "to need; to want",
    "explanationCN": "需要;想要"
  },
  {
    "character": "𗌠",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "to smear; to smear",
    "explanationCN": "抹黑;涂抹"
  },
  {
    "character": "𗌩",
    "GX": "peṃh²",
    "GHC": "pjɨ̣j²",
    "explanationEN": "to knead wheat flour",
    "explanationCN": "揉捏小麦粉"
  },
  {
    "character": "𗐊",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "sweet words; flattery",
    "explanationCN": "甜言蜜语;奉承"
  },
  {
    "character": "𗫹",
    "GX": "γwə̱¹",
    "GHC": "ɣwə¹",
    "explanationEN": "to struggle; to fight",
    "explanationCN": "去挣扎;去战斗"
  },
  {
    "character": "𗫺",
    "GX": "tshwiṃ¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗬂",
    "GX": "rvwa̱r¹",
    "GHC": "war¹",
    "explanationEN": "to twine; to wind",
    "explanationCN": "到麻线;风"
  },
  {
    "character": "𗬅",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "couple",
    "explanationCN": "夫妇"
  },
  {
    "character": "𗬉",
    "GX": "si̱¹",
    "GHC": "se¹",
    "explanationEN": "mustard",
    "explanationCN": "芥末"
  },
  {
    "character": "𗬊",
    "GX": "γwə̱¹",
    "GHC": "ɣwə¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗤤",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "to count; to calculate",
    "explanationCN": "数;计算"
  },
  {
    "character": "𗥡",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘊞",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘊔",
    "GX": "dźe²",
    "GHC": "dzjẽ²",
    "explanationEN": "an insect name",
    "explanationCN": "昆虫名称"
  },
  {
    "character": "𗤣",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "hook",
    "explanationCN": "钩"
  },
  {
    "character": "𗤨",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "timid; weak",
    "explanationCN": "胆小;弱"
  },
  {
    "character": "𗿑",
    "GX": "rhwə̱r¹",
    "GHC": "xwər¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘊟",
    "GX": "ŋwo̱²",
    "GHC": "ŋwo²",
    "explanationEN": "silver",
    "explanationCN": "银"
  },
  {
    "character": "𗏟",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "nose impalement",
    "explanationCN": "鼻子穿刺"
  },
  {
    "character": "𗥤",
    "GX": "tse²",
    "GHC": "tsjij²",
    "explanationEN": "to realize; to know",
    "explanationCN": "实现;要知道"
  },
  {
    "character": "𗨉",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "to listen.ʙ",
    "explanationCN": "来听。"
  },
  {
    "character": "𗩯",
    "GX": "swe¹",
    "GHC": "sjwij¹",
    "explanationEN": "clear; obvious",
    "explanationCN": "清楚;明显"
  },
  {
    "character": "𗪕",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "to count; to calculate",
    "explanationCN": "数;计算"
  },
  {
    "character": "𗪫",
    "GX": "le²",
    "GHC": "ljị²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗿂",
    "GX": "ke²",
    "GHC": "kjij²",
    "explanationEN": "impressive and dignified",
    "explanationCN": "令人印象深刻且端庄"
  },
  {
    "character": "𗦙",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "pure",
    "explanationCN": "纯"
  },
  {
    "character": "𗪪",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "clear; transparent",
    "explanationCN": "清楚;透明"
  },
  {
    "character": "𗨊",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "gallbladder",
    "explanationCN": "胆囊"
  },
  {
    "character": "𗫂",
    "GX": "ta¹",
    "GHC": "tja¹",
    "explanationEN": "an affix",
    "explanationCN": "返回页首"
  },
  {
    "character": "𗽼",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "hole; hollow; pit",
    "explanationCN": "洞;空心;坑"
  },
  {
    "character": "𗻿",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "to make a noise; to stir up trouble",
    "explanationCN": "发出声音;挑起事端"
  },
  {
    "character": "𗩢",
    "GX": "śwaw¹",
    "GHC": "śjwa̱¹",
    "explanationEN": "to harness; to hitch up",
    "explanationCN": "驾驭;搭便车"
  },
  {
    "character": "𗪦",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "scar",
    "explanationCN": "疤"
  },
  {
    "character": "𗫅",
    "GX": "ni̱w¹",
    "GHC": "new¹",
    "explanationEN": "radish",
    "explanationCN": "萝卜"
  },
  {
    "character": "𗿳",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "time; date; moment",
    "explanationCN": "时间;日期;时刻"
  },
  {
    "character": "𗤡",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗤬",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "to link; to unite",
    "explanationCN": "链接;团结起来"
  },
  {
    "character": "𗧅",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "pron.royal I",
    "explanationCN": "I.皇家"
  },
  {
    "character": "𗩡",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗫊",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "suddenly; abruptly; to throw",
    "explanationCN": "突然;突然;扔"
  },
  {
    "character": "𗨗",
    "GX": "ndzu̱²",
    "GHC": "dzu̱²",
    "explanationEN": "harmonious",
    "explanationCN": "和谐"
  },
  {
    "character": "𗫁",
    "GX": "γwai̱¹",
    "GHC": "ɣiwe¹",
    "explanationEN": "influence; power",
    "explanationCN": "影响;权力"
  },
  {
    "character": "𗬕",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "dark; ignorant",
    "explanationCN": "黑暗;无知"
  },
  {
    "character": "𗨾",
    "GX": "he̱²",
    "GHC": "xej²",
    "explanationEN": "grieved; sorrowful",
    "explanationCN": "悲痛;悲哀"
  },
  {
    "character": "𗪮",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "new",
    "explanationCN": "新增功能"
  },
  {
    "character": "𗾤",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "to ask; to call",
    "explanationCN": "询问;调用"
  },
  {
    "character": "𗽭",
    "GX": "qhi̱w²",
    "GHC": "khew²",
    "explanationEN": "opening; entrance; ferry crossing",
    "explanationCN": "开放;入口;渡轮过境"
  },
  {
    "character": "𘔵",
    "GX": "ŋqwə̱¹",
    "GHC": "kwə̱¹",
    "explanationEN": "snore",
    "explanationCN": "打鼾"
  },
  {
    "character": "𗺴",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "section; part",
    "explanationCN": "部分;部分"
  },
  {
    "character": "𗻉",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻌",
    "GX": "tshə̱¹",
    "GHC": "tshə¹",
    "explanationEN": "potato; taro",
    "explanationCN": "土豆;芋头"
  },
  {
    "character": "𗦾",
    "GX": "yu¹",
    "GHC": "ˑju̱¹",
    "explanationEN": "to see; to look at",
    "explanationCN": "看;查看"
  },
  {
    "character": "𗪼",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "mirror; looking glass",
    "explanationCN": "镜子;镜子"
  },
  {
    "character": "𗿴",
    "GX": "rbo̱ṃr¹",
    "GHC": "bowr¹",
    "explanationEN": "nipple; teat",
    "explanationCN": ";奶嘴"
  },
  {
    "character": "𗻦",
    "GX": "zi̱ṃ²",
    "GHC": "zẽ (lẽ)²",
    "explanationEN": "lettuce",
    "explanationCN": "生菜"
  },
  {
    "character": "𗻱",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗩜",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "to cure; to treat; to heal",
    "explanationCN": "治愈;治疗;治愈"
  },
  {
    "character": "𗿧",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "medicated plaster",
    "explanationCN": "药膏药"
  },
  {
    "character": "𗫨",
    "GX": "rdwi̱wr²",
    "GHC": "dwewr²",
    "explanationEN": "to enlighten; to awaken",
    "explanationCN": "启蒙;觉醒"
  },
  {
    "character": "𗤷",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "life",
    "explanationCN": "生命"
  },
  {
    "character": "𗧞",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "enlightenment",
    "explanationCN": "启迪"
  },
  {
    "character": "𗪧",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "thin",
    "explanationCN": "薄"
  },
  {
    "character": "𗦃",
    "GX": "γwe̱²",
    "GHC": "xwej²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗦽",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "baby; infant",
    "explanationCN": "婴儿;婴儿"
  },
  {
    "character": "𗢿",
    "GX": "tshwiṃ¹",
    "GHC": "tshjwĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗣨",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "clothing; clothes",
    "explanationCN": "服装;衣服"
  },
  {
    "character": "𗣬",
    "GX": "vo¹",
    "GHC": "wjo¹",
    "explanationEN": "to do.ʙ",
    "explanationCN": "要做。"
  },
  {
    "character": "𗤫",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "house; room",
    "explanationCN": "房子;房间"
  },
  {
    "character": "𗥬",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗨐",
    "GX": "pe̱¹",
    "GHC": "pej¹",
    "explanationEN": "to drink",
    "explanationCN": "喝"
  },
  {
    "character": "𗾘",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "the back of somebody or something",
    "explanationCN": "某人或某物的背影"
  },
  {
    "character": "𗿈",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "pigeon; dove",
    "explanationCN": "鸽子;鸽子"
  },
  {
    "character": "𗧶",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "whispered; quiet; secret",
    "explanationCN": "低声;安静;秘密"
  },
  {
    "character": "𗤩",
    "GX": "γwaṃ¹",
    "GHC": "ɣjwã¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗪑",
    "GX": "rkhwar¹",
    "GHC": "khjwar¹",
    "explanationEN": "circle; ring",
    "explanationCN": "圈;戒指"
  },
  {
    "character": "𗣟",
    "GX": "rver¹",
    "GHC": "wjijr¹",
    "explanationEN": "divination",
    "explanationCN": "占卜"
  },
  {
    "character": "𗥆",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "stars",
    "explanationCN": "星星"
  },
  {
    "character": "𗽝",
    "GX": "qwaa̱¹",
    "GHC": "kiwa¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗿃",
    "GX": "də̱h¹",
    "GHC": "də̣¹",
    "explanationEN": "pretty; beautiful",
    "explanationCN": "美;美丽"
  },
  {
    "character": "𗧫",
    "GX": "phao̱²",
    "GHC": "phio²",
    "explanationEN": "window",
    "explanationCN": "窗"
  },
  {
    "character": "𗿕",
    "GX": "γwu̱h²",
    "GHC": "ˑwụ²",
    "explanationEN": "man; male",
    "explanationCN": "男人;雄"
  },
  {
    "character": "𗥢",
    "GX": "dźih?",
    "GHC": "dźjị?",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗩓",
    "GX": "yiw¹",
    "GHC": "ˑjiw¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗪸",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "radish",
    "explanationCN": "萝卜"
  },
  {
    "character": "𗣀",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣩",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "to rely on; to depend",
    "explanationCN": "依赖;依赖"
  },
  {
    "character": "𗤟",
    "GX": "rtsir¹",
    "GHC": "tsjir¹",
    "explanationEN": "to select; to choose",
    "explanationCN": "进行选择;以选择"
  },
  {
    "character": "𗬓",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "lightning",
    "explanationCN": "闪电"
  },
  {
    "character": "𗥧",
    "GX": "rkhar¹",
    "GHC": "khjar¹",
    "explanationEN": "repetition",
    "explanationCN": "重复"
  },
  {
    "character": "𗧉",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "skill; technology; artistry",
    "explanationCN": "技能;科技;艺术性"
  },
  {
    "character": "𗾌",
    "GX": "rvwe̱r¹",
    "GHC": "wejr¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗩛",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "to speak; to say; to state",
    "explanationCN": "说话;说;到状态"
  },
  {
    "character": "𗿨",
    "GX": "qwae̱ṃ¹",
    "GHC": "kiwəj¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗻜",
    "GX": "phae̱²",
    "GHC": "phiej²",
    "explanationEN": "barnyard grass",
    "explanationCN": "稗"
  },
  {
    "character": "𘊚",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "six; the sixth",
    "explanationCN": "六;第六"
  },
  {
    "character": "𗺜",
    "GX": "dzə̱h¹",
    "GHC": "dzə̣¹",
    "explanationEN": "dense",
    "explanationCN": "稠"
  },
  {
    "character": "𗺦",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "reed",
    "explanationCN": "芦苇"
  },
  {
    "character": "𗫜",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗻙",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗥼",
    "GX": "a?",
    "GHC": "ˑja?",
    "explanationEN": "monk; Buddhist monk",
    "explanationCN": "和尚;僧"
  },
  {
    "character": "𗏓",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "to judge; to examine",
    "explanationCN": "评判;检查"
  },
  {
    "character": "𗨱",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "auspicious; lucky",
    "explanationCN": "吉祥;幸运"
  },
  {
    "character": "𗿅",
    "GX": "yə¹",
    "GHC": "ˑjɨ¹",
    "explanationEN": "marriage; matchmaker; relatives by marriage",
    "explanationCN": "婚;媒人;亲戚结婚"
  },
  {
    "character": "𗏯",
    "GX": "pae̱ṃh²",
    "GHC": "²",
    "explanationEN": "sweet words; flattery",
    "explanationCN": "甜言蜜语;奉承"
  },
  {
    "character": "𗧆",
    "GX": "ta¹",
    "GHC": "tja¹",
    "explanationEN": "stupid; dull; foolish",
    "explanationCN": "笨;钝痛;愚蠢"
  },
  {
    "character": "𗨘",
    "GX": "ba̱²",
    "GHC": "ba²",
    "explanationEN": "witticism",
    "explanationCN": "妙语"
  },
  {
    "character": "𗩦",
    "GX": "qo̱²",
    "GHC": "ko²",
    "explanationEN": "pick; spade",
    "explanationCN": "摘;铁锹"
  },
  {
    "character": "𗨚",
    "GX": "ŋqa̱r¹",
    "GHC": "ka̱r¹",
    "explanationEN": "eyes",
    "explanationCN": "眼睛"
  },
  {
    "character": "𗨏",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "insect dung",
    "explanationCN": "昆虫粪便"
  },
  {
    "character": "𗬑",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗬔",
    "GX": "lhah¹",
    "GHC": "lhjạ¹",
    "explanationEN": "lightning",
    "explanationCN": "闪电"
  },
  {
    "character": "𗽞",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "sky; lightning",
    "explanationCN": "天空;闪电"
  },
  {
    "character": "𗽇",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "fork; branch of an object",
    "explanationCN": "叉;对象的 branch"
  },
  {
    "character": "𗽈",
    "GX": "llih¹",
    "GHC": "ljị¹",
    "explanationEN": "to plant; to cultivate",
    "explanationCN": "种植;培养"
  },
  {
    "character": "𗽮",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "south",
    "explanationCN": "南"
  },
  {
    "character": "𗾗",
    "GX": "ha²",
    "GHC": "xja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗾚",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "people of father’s generation",
    "explanationCN": "父亲那一代的人"
  },
  {
    "character": "𗿛",
    "GX": "ba̱ṃ¹",
    "GHC": "bã¹",
    "explanationEN": "goose",
    "explanationCN": "鹅"
  },
  {
    "character": "𗿉",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "smoke; mist",
    "explanationCN": "烟;雾"
  },
  {
    "character": "𗪌",
    "GX": "rkwər¹",
    "GHC": "kjwɨ̱r¹",
    "explanationEN": "a surname; a nation",
    "explanationCN": "姓氏;一个国家"
  },
  {
    "character": "𗬜",
    "GX": "koh¹",
    "GHC": "kjọ¹",
    "explanationEN": "to fill.ᴀ in",
    "explanationCN": "以 fill.ᴀ"
  },
  {
    "character": "𗤦",
    "GX": "ẓaə̱²",
    "GHC": "śiə²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗥥",
    "GX": "rir¹",
    "GHC": "rjir¹",
    "explanationEN": "evil; harm",
    "explanationCN": "邪;伤害"
  },
  {
    "character": "𗧊",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "to be born; to rise",
    "explanationCN": "出生;崛起"
  },
  {
    "character": "𗥖",
    "GX": "twə¹",
    "GHC": "tjwɨ¹",
    "explanationEN": "to flog; to beat",
    "explanationCN": "鞭打;击败"
  },
  {
    "character": "𗦱",
    "GX": "hwa̱¹",
    "GHC": "xwa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗩊",
    "GX": "rtso̱r²",
    "GHC": "tsor²",
    "explanationEN": "ancestor; source",
    "explanationCN": "祖先;源"
  },
  {
    "character": "𗩋",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "merits and achievements; contribution",
    "explanationCN": "功绩和成就;贡献"
  },
  {
    "character": "𗾥",
    "GX": "sa²",
    "GHC": "sja²",
    "explanationEN": "the day after tomorrow",
    "explanationCN": "：后天;音译;HYP：假设"
  },
  {
    "character": "𘴄",
    "GX": "ẓai̱²",
    "GHC": "śie²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗨂",
    "GX": "yeṃ¹",
    "GHC": "ˑjɨj¹",
    "explanationEN": "to gain; to make profit",
    "explanationCN": "获得;赚取利润"
  },
  {
    "character": "𗪡",
    "GX": "gwo²",
    "GHC": "gjwo²",
    "explanationEN": "to dress; to apparel",
    "explanationCN": "穿衣;至 服装"
  },
  {
    "character": "𗩰",
    "GX": "qwa̱¹",
    "GHC": "kwa¹",
    "explanationEN": "to pass",
    "explanationCN": "通过"
  },
  {
    "character": "𗫠",
    "GX": "rgwər¹",
    "GHC": "gjwɨr¹",
    "explanationEN": "to lie down",
    "explanationCN": "躺下"
  },
  {
    "character": "𗽠",
    "GX": "nlu̱¹",
    "GHC": "lu̱¹",
    "explanationEN": "to dig",
    "explanationCN": "挖掘"
  },
  {
    "character": "𗾺",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "time",
    "explanationCN": "时间"
  },
  {
    "character": "𗤠",
    "GX": "rvwa̱r¹",
    "GHC": "¹",
    "explanationEN": "to twine; to wind",
    "explanationCN": "到麻线;风"
  },
  {
    "character": "𗫢",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "to cast; to throw",
    "explanationCN": "铸造;扔"
  },
  {
    "character": "𗦍",
    "GX": "thu̱²",
    "GHC": "²",
    "explanationEN": "close; near",
    "explanationCN": "关闭;近"
  },
  {
    "character": "𗿬",
    "GX": "kwə¹",
    "GHC": "¹",
    "explanationEN": "turtledove",
    "explanationCN": "斑鸠"
  },
  {
    "character": "𗺷",
    "GX": "rzur²",
    "GHC": "zjur²",
    "explanationEN": "broom",
    "explanationCN": "扫帚"
  },
  {
    "character": "𗧣",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "tomorrow",
    "explanationCN": "明天"
  },
  {
    "character": "𗪊",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "plate; token",
    "explanationCN": "盘子;令 牌"
  },
  {
    "character": "𗿍",
    "GX": "śaw¹",
    "GHC": "śja̱¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗻊",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "poison; toxin",
    "explanationCN": "毒;毒素"
  },
  {
    "character": "𗻚",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "poison; toxin",
    "explanationCN": "毒;毒素"
  },
  {
    "character": "𗺮",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗩬",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "knowledge",
    "explanationCN": "知识"
  },
  {
    "character": "𗿸",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "name; title",
    "explanationCN": "名字;标题"
  },
  {
    "character": "𗻰",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻷",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗏺",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "INTER: DIR; OPT: DIR",
    "explanationCN": "INTER： 导演;OPT： DIR"
  },
  {
    "character": "𗐀",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "pool efforts",
    "explanationCN": "汇集工作"
  },
  {
    "character": "𗧤",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "to break off; to sever",
    "explanationCN": "中断;切断"
  },
  {
    "character": "𗿫",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "turtledove",
    "explanationCN": "斑鸠"
  },
  {
    "character": "𗦄",
    "GX": "rdi̱r²",
    "GHC": "de̱r²",
    "explanationEN": "to fear; to terrify",
    "explanationCN": "恐惧;吓唬"
  },
  {
    "character": "𗫄",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗧛",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "to select; to choose",
    "explanationCN": "进行选择;以选择"
  },
  {
    "character": "𗧟",
    "GX": "nźə¹",
    "GHC": "źjɨ̱¹",
    "explanationEN": "to hate",
    "explanationCN": "恨"
  },
  {
    "character": "𗩗",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "law; statue",
    "explanationCN": "法律;塑像"
  },
  {
    "character": "𗫧",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "custom; common sayings",
    "explanationCN": "习惯;俗语"
  },
  {
    "character": "𗥭",
    "GX": "lae̱²",
    "GHC": "liej²",
    "explanationEN": "to carry off; to loot",
    "explanationCN": "带走;去抢劫"
  },
  {
    "character": "𗧃",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "to manage; to direct; to preside",
    "explanationCN": "管理;导演;主持"
  },
  {
    "character": "𗏸",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "doorframe",
    "explanationCN": "门框"
  },
  {
    "character": "𗻋",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "to herd; to tend",
    "explanationCN": "到畜牧;照料"
  },
  {
    "character": "𗏢",
    "GX": "rγu̱r¹",
    "GHC": "ɣur¹",
    "explanationEN": "festival; date",
    "explanationCN": "节日;日期"
  },
  {
    "character": "𗽔",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "pagoda",
    "explanationCN": "塔"
  },
  {
    "character": "𗟟",
    "GX": "pao̱h¹",
    "GHC": "piọ¹",
    "explanationEN": "bottom",
    "explanationCN": "底"
  },
  {
    "character": "𘜨",
    "GX": "tṣhwae̱¹",
    "GHC": "tśhiwej¹",
    "explanationEN": "very fast; at high speed",
    "explanationCN": "非常快;高速时"
  },
  {
    "character": "𘚵",
    "GX": "ŋqo̱²",
    "GHC": "ko̱²",
    "explanationEN": "fan",
    "explanationCN": "扇"
  },
  {
    "character": "𘝐",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "to revolve; to rotate; to spin",
    "explanationCN": "旋转;旋转;旋转"
  },
  {
    "character": "𘜧",
    "GX": "qwu̱h²",
    "GHC": "kwụ²",
    "explanationEN": "slow",
    "explanationCN": "慢"
  },
  {
    "character": "𘚬",
    "GX": "γi̱ṃ¹",
    "GHC": "ɣẽ¹",
    "explanationEN": "be whizzing",
    "explanationCN": "嗖嗖嗖"
  },
  {
    "character": "𗺈",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "raised",
    "explanationCN": "提出"
  },
  {
    "character": "𗃚",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "deaf",
    "explanationCN": "聋"
  },
  {
    "character": "𗃟",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "bag; sack",
    "explanationCN": "袋;袋"
  },
  {
    "character": "𗃴",
    "GX": "ŋkhau̱¹",
    "GHC": "khju̱¹",
    "explanationEN": "to milk",
    "explanationCN": "挤奶"
  },
  {
    "character": "𗃞",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "puppy",
    "explanationCN": "小狗"
  },
  {
    "character": "𗃾",
    "GX": "nəh²",
    "GHC": "njɨ̣²",
    "explanationEN": "nasal cavity",
    "explanationCN": "鼻腔"
  },
  {
    "character": "𗃻",
    "GX": "nəh²",
    "GHC": "njɨ̣²",
    "explanationEN": "wisdom; consciousness",
    "explanationCN": "智慧;意识"
  },
  {
    "character": "𘓞",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to hope; to wish",
    "explanationCN": "希望;许愿"
  },
  {
    "character": "𗃘",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "pleasure",
    "explanationCN": "快乐"
  },
  {
    "character": "𘓕",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "treacherous; frivolous",
    "explanationCN": "奸诈;轻浮"
  },
  {
    "character": "𘓖",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "public affairs; merit",
    "explanationCN": "公共事务;优点"
  },
  {
    "character": "𗃥",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "scabies",
    "explanationCN": "疥疮"
  },
  {
    "character": "𗬩",
    "GX": "qai̱¹",
    "GHC": "kie¹",
    "explanationEN": "commandment; (Buddhist) discipline",
    "explanationCN": "诫 命;（佛教）纪律"
  },
  {
    "character": "𗬮",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "diligent; hardworking",
    "explanationCN": "勤;勤劳"
  },
  {
    "character": "𗴙",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "elbow",
    "explanationCN": "肘"
  },
  {
    "character": "𗴜",
    "GX": "qu̱h²",
    "GHC": "²",
    "explanationEN": "slow",
    "explanationCN": "慢"
  },
  {
    "character": "𘓟",
    "GX": "dẓae̱²",
    "GHC": "dźiej²",
    "explanationEN": "faith; trust",
    "explanationCN": "信仰;信任"
  },
  {
    "character": "𗬭",
    "GX": "ndźa²",
    "GHC": "dźja̱²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗬰",
    "GX": "ṇi²",
    "GHC": "dźji²",
    "explanationEN": "male",
    "explanationCN": "雄"
  },
  {
    "character": "𗴤",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "sentry; examination",
    "explanationCN": "哨兵;考试"
  },
  {
    "character": "𗼫",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "medicine",
    "explanationCN": "药"
  },
  {
    "character": "𗼘",
    "GX": "pho̱ṃ¹",
    "GHC": "phow¹",
    "explanationEN": "month",
    "explanationCN": "月"
  },
  {
    "character": "𗼟",
    "GX": "śwu²",
    "GHC": "śjwu²",
    "explanationEN": "peace and happiness",
    "explanationCN": "和平与幸福"
  },
  {
    "character": "𗼉",
    "GX": "swe¹",
    "GHC": "sjwij¹",
    "explanationEN": "year",
    "explanationCN": "年"
  },
  {
    "character": "𗼎",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗼞",
    "GX": "qo̱ṃ²",
    "GHC": "kow²",
    "explanationEN": "government official",
    "explanationCN": "吏"
  },
  {
    "character": "𗼢",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘉆",
    "GX": "tsha̱¹",
    "GHC": "tsha¹",
    "explanationEN": "mixed",
    "explanationCN": "混合"
  },
  {
    "character": "𗺓",
    "GX": "twi̱h²",
    "GHC": "twẹ²",
    "explanationEN": "to continue",
    "explanationCN": "继续"
  },
  {
    "character": "𗁂",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "wooden handcuffs",
    "explanationCN": "木制手铐"
  },
  {
    "character": "𗂷",
    "GX": "twi̱h¹",
    "GHC": "twẹ¹",
    "explanationEN": "to sew; to follow the pattern of",
    "explanationCN": "缝纫;要遵循"
  },
  {
    "character": "𗁉",
    "GX": "pheh¹",
    "GHC": "phjịj¹",
    "explanationEN": "slant; leaning",
    "explanationCN": "斜;倾斜"
  },
  {
    "character": "𗆖",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "field; farmland",
    "explanationCN": "田;农田"
  },
  {
    "character": "𗆜",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "to escape; to flee",
    "explanationCN": "逃跑;逃跑"
  },
  {
    "character": "𗄳",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "big; great; thick",
    "explanationCN": "大;伟大;厚"
  },
  {
    "character": "𗄽",
    "GX": "ẓaa̱ṃ¹",
    "GHC": "śiã¹",
    "explanationEN": "hill; mountain",
    "explanationCN": "山;山"
  },
  {
    "character": "𗂦",
    "GX": "ryir²",
    "GHC": "ˑjir²",
    "explanationEN": "to chop; to kill",
    "explanationCN": "砍;杀人"
  },
  {
    "character": "𗹺",
    "GX": "γaa̱ṃ²",
    "GHC": "ɣiã²",
    "explanationEN": "to reduce; to decrease",
    "explanationCN": "减少;减少"
  },
  {
    "character": "𗀹",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "little; young (bird or beast)",
    "explanationCN": "小;幼 （鸟或野兽）"
  },
  {
    "character": "𗅟",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "sharp",
    "explanationCN": "锋利"
  },
  {
    "character": "𗆏",
    "GX": "tśuh²",
    "GHC": "tśjụ²",
    "explanationEN": "goat; lamb",
    "explanationCN": "山羊;羔羊"
  },
  {
    "character": "𗆪",
    "GX": "nye¹",
    "GHC": "ˑji̱j¹",
    "explanationEN": "to exempt; to grant a pardon",
    "explanationCN": "豁免;给予赦免"
  },
  {
    "character": "𘝑",
    "GX": "ntswi̱¹",
    "GHC": "tswe̱¹",
    "explanationEN": "to sit; to squat",
    "explanationCN": "坐下;深蹲"
  },
  {
    "character": "𗎿",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "piebald",
    "explanationCN": "花斑"
  },
  {
    "character": "𗊻",
    "GX": "dźo²",
    "GHC": "śjo²",
    "explanationEN": "sweat; perspiration",
    "explanationCN": "汗;汗"
  },
  {
    "character": "𗊜",
    "GX": "źu²",
    "GHC": "źju²",
    "explanationEN": "milk",
    "explanationCN": "牛奶"
  },
  {
    "character": "𘊇",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "to guard",
    "explanationCN": "守卫"
  },
  {
    "character": "𘊅",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "sore",
    "explanationCN": "疮"
  },
  {
    "character": "𗋍",
    "GX": "tswu̱h¹",
    "GHC": "tswụ¹",
    "explanationEN": "alms bowl; earthen bowl; kettle",
    "explanationCN": "钵;钵;水壶"
  },
  {
    "character": "𘉣",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "love; adore",
    "explanationCN": "爱;崇拜"
  },
  {
    "character": "𗢙",
    "GX": "rnar²",
    "GHC": "njar²",
    "explanationEN": "stuffy; bored",
    "explanationCN": "闷;无聊"
  },
  {
    "character": "𗫾",
    "GX": "ləh²",
    "GHC": "ljɨ̣²",
    "explanationEN": "hare; donkey",
    "explanationCN": "兔子;驴"
  },
  {
    "character": "𗨇",
    "GX": "tṣuo¹",
    "GHC": "tśio̱w¹",
    "explanationEN": "to steal",
    "explanationCN": "偷窃"
  },
  {
    "character": "𗧷",
    "GX": "llwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "space",
    "explanationCN": "空间"
  },
  {
    "character": "𗥕",
    "GX": "zu̱²",
    "GHC": "zu²",
    "explanationEN": "to tie up",
    "explanationCN": "捆绑"
  },
  {
    "character": "𗨕",
    "GX": "mbao̱²",
    "GHC": "bio̱²",
    "explanationEN": "leprosy",
    "explanationCN": "麻风"
  },
  {
    "character": "𗣲",
    "GX": "bao̱¹",
    "GHC": "bio¹",
    "explanationEN": "line; ranks",
    "explanationCN": "线;行列"
  },
  {
    "character": "𗺶",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "straw rope",
    "explanationCN": "草绳"
  },
  {
    "character": "𗬝",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "shield",
    "explanationCN": "盾"
  },
  {
    "character": "𗤥",
    "GX": "ŋah¹",
    "GHC": "ŋiạ¹",
    "explanationEN": "vast",
    "explanationCN": "巨大"
  },
  {
    "character": "𗥣",
    "GX": "tsu̱²",
    "GHC": "tsu²",
    "explanationEN": "to stand up; to rise; to jump",
    "explanationCN": "站起来;上升;跳"
  },
  {
    "character": "𗦮",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "to escape; to evade",
    "explanationCN": "逃跑;躲避"
  },
  {
    "character": "𗏐",
    "GX": "ntshe̱²",
    "GHC": "tshjij²",
    "explanationEN": "",
    "explanationCN": ""
  },
  {
    "character": "𗤢",
    "GX": "bi²",
    "GHC": "bji̱²",
    "explanationEN": "below; down",
    "explanationCN": "下面;下"
  },
  {
    "character": "𗽆",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "low",
    "explanationCN": "低"
  },
  {
    "character": "𗺵",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗻺",
    "GX": "vah²",
    "GHC": "wjạ²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗺥",
    "GX": "bae̱h¹",
    "GHC": "biẹj¹",
    "explanationEN": "cogongrass",
    "explanationCN": "科贡格拉斯"
  },
  {
    "character": "𗥪",
    "GX": "reṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "to instruct; to teach",
    "explanationCN": "指示;教学"
  },
  {
    "character": "𗣅",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗣫",
    "GX": "tse̱ṃ¹",
    "GHC": "tsəj¹",
    "explanationEN": "small; little; young",
    "explanationCN": "小;小;年轻"
  },
  {
    "character": "𗼽",
    "GX": "si̱w²",
    "GHC": "sew²",
    "explanationEN": "small",
    "explanationCN": "小"
  },
  {
    "character": "𗾙",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "little bird",
    "explanationCN": "小鸟"
  },
  {
    "character": "𘊒",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "mouse",
    "explanationCN": "鼠"
  },
  {
    "character": "𘔱",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "crooked; askew",
    "explanationCN": "歪;歪斜"
  },
  {
    "character": "𗦿",
    "GX": "peṃ¹",
    "GHC": "pjɨj¹",
    "explanationEN": "border",
    "explanationCN": "边境"
  },
  {
    "character": "𗣴",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗤧",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "it; you; he; others",
    "explanationCN": "它;你;他;别人"
  },
  {
    "character": "𗻍",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "cattail",
    "explanationCN": "蒲"
  },
  {
    "character": "𗥫",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "light",
    "explanationCN": "光"
  },
  {
    "character": "𗾶",
    "GX": "hu¹",
    "GHC": "xju¹",
    "explanationEN": "void; empty",
    "explanationCN": "无效;空"
  },
  {
    "character": "𘕀",
    "GX": "ndzi²",
    "GHC": "dzji̱²",
    "explanationEN": "to know; to understand",
    "explanationCN": "要知道;了解"
  },
  {
    "character": "𘚱",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "bamboo or twig fence",
    "explanationCN": "竹篱笆或树枝篱笆"
  },
  {
    "character": "𗃽",
    "GX": "rvwa̱r¹",
    "GHC": "war¹",
    "explanationEN": "despaired; destitute; poor",
    "explanationCN": "绝望;贫困;穷"
  },
  {
    "character": "𗇌",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "fortune; luck",
    "explanationCN": "财富;运气"
  },
  {
    "character": "𗐤",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "to see someone off",
    "explanationCN": "送人下场"
  },
  {
    "character": "𗐢",
    "GX": "tśə¹",
    "GHC": "¹",
    "explanationEN": "presently; in a moment",
    "explanationCN": "目前;片刻"
  },
  {
    "character": "𗇎",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "yoke; chains; shackles; fetters",
    "explanationCN": "轭;链;束缚;桎"
  },
  {
    "character": "𗐟",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "natural resources; resources",
    "explanationCN": "自然资源;资源"
  },
  {
    "character": "𗐧",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "to present (a gift)",
    "explanationCN": "赠送 （一份礼物）"
  },
  {
    "character": "𗇋",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "an auxiliary word",
    "explanationCN": "NMLZ：一个"
  },
  {
    "character": "𘛃",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "seat; place; official title",
    "explanationCN": "座位;地方;官方标题"
  },
  {
    "character": "𗐡",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "presently; in a moment",
    "explanationCN": "目前;片刻"
  },
  {
    "character": "𗐣",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "to enjoin; to tell",
    "explanationCN": "命令;告诉"
  },
  {
    "character": "𗐝",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "butter",
    "explanationCN": "黄油"
  },
  {
    "character": "𘝕",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗐦",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "bridal chamber",
    "explanationCN": "洞房"
  },
  {
    "character": "𗐞",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "butter",
    "explanationCN": "黄油"
  },
  {
    "character": "𗇖",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "to twine; to wind; to tie up",
    "explanationCN": "到麻线;上风;捆绑"
  },
  {
    "character": "𗇔",
    "GX": "lə¹",
    "GHC": "¹",
    "explanationEN": "to fall; to sink",
    "explanationCN": "跌倒;沉没"
  },
  {
    "character": "𗐠",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "to give as present; to present a gift",
    "explanationCN": "作为礼物给予;赠送礼物"
  },
  {
    "character": "𗐥",
    "GX": "qwə̱¹",
    "GHC": "kwə¹",
    "explanationEN": "fortune; luck",
    "explanationCN": "财富;运气"
  },
  {
    "character": "𘟙",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "king; monarch",
    "explanationCN": "王;君主"
  },
  {
    "character": "𗇏",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗇐",
    "GX": "dih²",
    "GHC": "²",
    "explanationEN": "to build",
    "explanationCN": "构建"
  },
  {
    "character": "𗇙",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "to extricate",
    "explanationCN": "解脱"
  },
  {
    "character": "𗇍",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "to catch fire",
    "explanationCN": "着火"
  },
  {
    "character": "𗇘",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "to extricate",
    "explanationCN": "解脱"
  },
  {
    "character": "𗇊",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗇓",
    "GX": "śa¹",
    "GHC": "¹",
    "explanationEN": "rope; to fasten",
    "explanationCN": "绳;紧固"
  },
  {
    "character": "𗇗",
    "GX": "rzi̱r¹",
    "GHC": "zer¹",
    "explanationEN": "to fasten; to tie up",
    "explanationCN": "紧固;捆绑"
  },
  {
    "character": "𗇑",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "happy; open wide",
    "explanationCN": "快乐;敞开"
  },
  {
    "character": "𗇕",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "open wide",
    "explanationCN": "敞开"
  },
  {
    "character": "𗇒",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "rope; to fasten",
    "explanationCN": "绳;紧固"
  },
  {
    "character": "𗭆",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "mound; hillock",
    "explanationCN": "土堆;岗"
  },
  {
    "character": "𗭌",
    "GX": "do̱ṃ²",
    "GHC": "dow²",
    "explanationEN": "shin; leg",
    "explanationCN": "胫骨;腿"
  },
  {
    "character": "𗭍",
    "GX": "dźeh¹",
    "GHC": "dźjịj¹",
    "explanationEN": "to go; to send",
    "explanationCN": "去;发送"
  },
  {
    "character": "𗭈",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "to overflow; to spill",
    "explanationCN": "溢出;溢出"
  },
  {
    "character": "𘀆",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "INTER; OPT: DOWN",
    "explanationCN": "国米;OPT: DOWN"
  },
  {
    "character": "𘛄",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "official title; the rank of nobility",
    "explanationCN": "正式标题;贵族等级"
  },
  {
    "character": "𗭡",
    "GX": "rtswər¹",
    "GHC": "tsjwɨr¹",
    "explanationEN": "group; line",
    "explanationCN": "群;线"
  },
  {
    "character": "𘀐",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "six; the sixth",
    "explanationCN": "六;第六"
  },
  {
    "character": "𘀔",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "cattail",
    "explanationCN": "蒲"
  },
  {
    "character": "𘀕",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "spot; stain; speckle",
    "explanationCN": "点;染色;斑点"
  },
  {
    "character": "𘕂",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "to go; to parade",
    "explanationCN": "去;游行"
  },
  {
    "character": "𘊺",
    "GX": "nwə²",
    "GHC": "njwɨ²",
    "explanationEN": "to burn",
    "explanationCN": "燃烧"
  },
  {
    "character": "𘋀",
    "GX": "rgur²",
    "GHC": "gjur²",
    "explanationEN": "happy",
    "explanationCN": "快乐"
  },
  {
    "character": "𗭥",
    "GX": "rpar²",
    "GHC": "pjar²",
    "explanationEN": "incomplete; fragmentary",
    "explanationCN": "不完全的;零碎"
  },
  {
    "character": "𗭤",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "incomplete; fragmentary",
    "explanationCN": "不完全的;零碎"
  },
  {
    "character": "𗭏",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "fetters",
    "explanationCN": "桎"
  },
  {
    "character": "𘕃",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "to comment; to prepare",
    "explanationCN": "发表评论;准备"
  },
  {
    "character": "𘋇",
    "GX": "fi¹",
    "GHC": "xjwi¹",
    "explanationEN": "mouse; rat",
    "explanationCN": "鼠;鼠"
  },
  {
    "character": "𗭓",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "shoes",
    "explanationCN": "鞋"
  },
  {
    "character": "𗭇",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "shin",
    "explanationCN": "胫骨"
  },
  {
    "character": "𗭚",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "fetters",
    "explanationCN": "桎"
  },
  {
    "character": "𗭙",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to extract",
    "explanationCN": "提取"
  },
  {
    "character": "𘊷",
    "GX": "nu̱h¹",
    "GHC": "nụ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘛅",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "official title; the rank of nobility",
    "explanationCN": "正式标题;贵族等级"
  },
  {
    "character": "𘀓",
    "GX": "tse̱?",
    "GHC": "tsej?",
    "explanationEN": "rat; mouse",
    "explanationCN": "鼠;鼠"
  },
  {
    "character": "𘛈",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "household utensils; containers",
    "explanationCN": "器皿;器皿"
  },
  {
    "character": "𘀶",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "flour sifter",
    "explanationCN": "面粉筛"
  },
  {
    "character": "𘀠",
    "GX": "kwih¹",
    "GHC": "kjwị¹",
    "explanationEN": "full; filled",
    "explanationCN": "满;㿙"
  },
  {
    "character": "𗭫",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘊣",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "“Yang” (the positive side) of the Chinese “Yin-yang” concept",
    "explanationCN": "中国“阴阳”概念的“阳”（积极的一面）"
  },
  {
    "character": "𘁀",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "woolens",
    "explanationCN": "羊毛"
  },
  {
    "character": "𘀪",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "meat stuffing; sausage",
    "explanationCN": "肉馅;香肠"
  },
  {
    "character": "𘀝",
    "GX": "ywə¹",
    "GHC": "ˑjwɨ¹",
    "explanationEN": "hunger",
    "explanationCN": "饥饿"
  },
  {
    "character": "𘀴",
    "GX": "zwaṃ²",
    "GHC": "zjwã²",
    "explanationEN": "to revolve; to rotate",
    "explanationCN": "旋转;旋转"
  },
  {
    "character": "𘀬",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "bag; pocket; sack",
    "explanationCN": "袋;口袋;袋"
  },
  {
    "character": "𘀧",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "lower limbs; legs",
    "explanationCN": "下肢;腿"
  },
  {
    "character": "𘚿",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘛇",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "utensils",
    "explanationCN": "用具"
  },
  {
    "character": "𘀨",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "a kind of ghost",
    "explanationCN": "一种幽灵"
  },
  {
    "character": "𘊤",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "to stuff",
    "explanationCN": "到东西"
  },
  {
    "character": "𘀞",
    "GX": "rzer¹",
    "GHC": "zjijr¹",
    "explanationEN": "filled; full",
    "explanationCN": "㿙;满"
  },
  {
    "character": "𘟏",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "power; might",
    "explanationCN": "权力;可能"
  },
  {
    "character": "𘀩",
    "GX": "rgwar²",
    "GHC": "gjwar²",
    "explanationEN": "lower limbs; legs",
    "explanationCN": "下肢;腿"
  },
  {
    "character": "𗭟",
    "GX": "le¹",
    "GHC": "ljij¹",
    "explanationEN": "convulsion",
    "explanationCN": "惊厥"
  },
  {
    "character": "𗭜",
    "GX": "ndẓaa̱²",
    "GHC": "dźia̱²",
    "explanationEN": "lameness",
    "explanationCN": "跛 行"
  },
  {
    "character": "𘀌",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "buffalo gnat",
    "explanationCN": "水牛蚋"
  },
  {
    "character": "𘀜",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "locust",
    "explanationCN": "蝗"
  },
  {
    "character": "𘛀",
    "GX": "mbe²",
    "GHC": "bji̱j²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘊳",
    "GX": "bo̱¹",
    "GHC": "bo¹",
    "explanationEN": "line; march",
    "explanationCN": "线;三月"
  },
  {
    "character": "𘀇",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "to invade",
    "explanationCN": "侵入"
  },
  {
    "character": "𘀋",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "excrement; dung",
    "explanationCN": "屎;粪"
  },
  {
    "character": "𗐨",
    "GX": "ẓai̱¹",
    "GHC": "śie¹",
    "explanationEN": "rare; sparse",
    "explanationCN": "罕见;稀疏"
  },
  {
    "character": "𘊶",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "aunt; father's sisters",
    "explanationCN": "阿姨;父亲的姐妹"
  },
  {
    "character": "𘀷",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "fruit",
    "explanationCN": "水果"
  },
  {
    "character": "𗭬",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𘀹",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𘀼",
    "GX": "ni̱h¹",
    "GHC": "nẹ¹",
    "explanationEN": "to give a speech; to publicize",
    "explanationCN": "发表演讲;进行宣传"
  },
  {
    "character": "𘀻",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "to grow; to increase",
    "explanationCN": "成长;增加"
  },
  {
    "character": "𘀟",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "belly; abdomen; stomach",
    "explanationCN": "腹;腹部;胃"
  },
  {
    "character": "𘀡",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𘀾",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "old; aged",
    "explanationCN": "老;老"
  },
  {
    "character": "𘊫",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘀘",
    "GX": "mphe̱¹",
    "GHC": "phe̱j¹",
    "explanationEN": "to cover; to block",
    "explanationCN": "覆盖;阻止"
  },
  {
    "character": "𘋂",
    "GX": "phu¹",
    "GHC": "phju¹",
    "explanationEN": "feast; banquet",
    "explanationCN": "盛宴;宴会"
  },
  {
    "character": "𘀚",
    "GX": "tṣhao̱¹",
    "GHC": "tśhio¹",
    "explanationEN": "origin; source",
    "explanationCN": "起源;源"
  },
  {
    "character": "𘋈",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "rat",
    "explanationCN": "鼠"
  },
  {
    "character": "𗭐",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "proper; upright; regular",
    "explanationCN": "适当;直立;定期"
  },
  {
    "character": "𘀏",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘀈",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "soil; land",
    "explanationCN": "土;土地"
  },
  {
    "character": "𘀑",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗭞",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "step; pace",
    "explanationCN": "步;步伐"
  },
  {
    "character": "𘀊",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘊸",
    "GX": "ba̱²",
    "GHC": "ba²",
    "explanationEN": "mother-in-law",
    "explanationCN": "岳母"
  },
  {
    "character": "𘊥",
    "GX": "dź??",
    "GHC": "dź-?",
    "explanationEN": "to clear away",
    "explanationCN": "清除"
  },
  {
    "character": "𗭪",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "IFR: inferential",
    "explanationCN": "国际金融准则;NMLZ"
  },
  {
    "character": "𘋌",
    "GX": "ntśə¹",
    "GHC": "tśjɨ̱¹",
    "explanationEN": "to sew; to patch up",
    "explanationCN": "缝纫;修补"
  },
  {
    "character": "𘊦",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "a classifier",
    "explanationCN": "分类器"
  },
  {
    "character": "𘊪",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "arrow",
    "explanationCN": "箭"
  },
  {
    "character": "𘀵",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "to bow; to salute",
    "explanationCN": "鞠躬;致敬"
  },
  {
    "character": "𘊬",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "even; equal",
    "explanationCN": "甚至;平等"
  },
  {
    "character": "𗭢",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "to support; to sustain",
    "explanationCN": "支持;维持"
  },
  {
    "character": "𘀙",
    "GX": "bo²",
    "GHC": "bjo²",
    "explanationEN": "clear; obvious",
    "explanationCN": "清楚;明显"
  },
  {
    "character": "𗭛",
    "GX": "sweṃ²",
    "GHC": "sjwɨj²",
    "explanationEN": "heel",
    "explanationCN": "脚跟"
  },
  {
    "character": "𘀎",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "dark; dim",
    "explanationCN": "黑暗;䵨"
  },
  {
    "character": "𘀍",
    "GX": "na²",
    "GHC": "nja²",
    "explanationEN": "pron. you",
    "explanationCN": "你"
  },
  {
    "character": "𘀒",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "name of a star",
    "explanationCN": "星星名称"
  },
  {
    "character": "𘀖",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "blush",
    "explanationCN": "脸红"
  },
  {
    "character": "𘋃",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "to melt; to smelt",
    "explanationCN": "融化;冶炼"
  },
  {
    "character": "𗭦",
    "GX": "tśhwiw²",
    "GHC": "²",
    "explanationEN": "to support; to sustain",
    "explanationCN": "支持;维持"
  },
  {
    "character": "𗭨",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "unreal image",
    "explanationCN": "虚幻图像"
  },
  {
    "character": "𘀮",
    "GX": "lhə̱¹",
    "GHC": "lhə¹",
    "explanationEN": "to shrink; to contract",
    "explanationCN": "缩小;签订合同"
  },
  {
    "character": "𘀦",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "stars",
    "explanationCN": "星星"
  },
  {
    "character": "𘀭",
    "GX": "qwae̱²",
    "GHC": "kiwej²",
    "explanationEN": "true; precious",
    "explanationCN": "真;珍贵"
  },
  {
    "character": "𘀫",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "foe; enemy",
    "explanationCN": "敌人;敌人"
  },
  {
    "character": "𘊱",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "half; side",
    "explanationCN": "半;边"
  },
  {
    "character": "𘝘",
    "GX": "yiw¹",
    "GHC": "ˑjiw¹",
    "explanationEN": "disease; illness",
    "explanationCN": "疾病;疾病"
  },
  {
    "character": "𗐩",
    "GX": "ẓai̱¹",
    "GHC": "śie¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘝗",
    "GX": "yiw¹",
    "GHC": "ˑjiw¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘞣",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "wooden saddle",
    "explanationCN": "木质马鞍"
  },
  {
    "character": "𘞡",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "colored glaze",
    "explanationCN": "彩釉"
  },
  {
    "character": "𘋎",
    "GX": "kwa̱ṃ¹",
    "GHC": "kwã¹",
    "explanationEN": "strings for a saddle",
    "explanationCN": "马鞍的琴弦"
  },
  {
    "character": "𗭝",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "bottom; base",
    "explanationCN": "底;基础"
  },
  {
    "character": "𗭕",
    "GX": "le̱²",
    "GHC": "²",
    "explanationEN": "to tread on; to trample",
    "explanationCN": "踩踏;践踏"
  },
  {
    "character": "𗭔",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "to tread on; to trample",
    "explanationCN": "踩踏;践踏"
  },
  {
    "character": "𘀛",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𘕈",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "to realize; to wake up to reality",
    "explanationCN": "实现;醒悟于现实"
  },
  {
    "character": "𘊾",
    "GX": "kaw¹",
    "GHC": "kja̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘊵",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "skill; artistry",
    "explanationCN": "技能;艺术性"
  },
  {
    "character": "𘀗",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "sky; heaven",
    "explanationCN": "天空;天堂"
  },
  {
    "character": "𘊴",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "to talk; to speak",
    "explanationCN": "交谈;说话"
  },
  {
    "character": "𘕄",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "upright; honorable",
    "explanationCN": "直立;光荣"
  },
  {
    "character": "𘕇",
    "GX": "γiw²",
    "GHC": "²",
    "explanationEN": "butter",
    "explanationCN": "黄油"
  },
  {
    "character": "𘝖",
    "GX": "yiw¹",
    "GHC": "ˑjiw¹",
    "explanationEN": "oil; fat; grease",
    "explanationCN": "油;脂肪;油"
  },
  {
    "character": "𘊽",
    "GX": "thi̱ṃ²",
    "GHC": "thẽ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘋁",
    "GX": "dźwi¹",
    "GHC": "dźjwi¹",
    "explanationEN": "to melt; to eliminate",
    "explanationCN": "融化;消除"
  },
  {
    "character": "𘟚",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "imperial edict",
    "explanationCN": "皇帝敕令"
  },
  {
    "character": "𘋆",
    "GX": "rfwa̱r¹",
    "GHC": "xjwe¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗭗",
    "GX": "paə̱²",
    "GHC": "piə²",
    "explanationEN": "boots",
    "explanationCN": "靴子"
  },
  {
    "character": "𘀉",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𗭣",
    "GX": "thwo̱¹",
    "GHC": "thwo¹",
    "explanationEN": "to pad; to put something under something else",
    "explanationCN": "到填充;将某物置于其他事物之下"
  },
  {
    "character": "𘊿",
    "GX": "ba̱²",
    "GHC": "ba²",
    "explanationEN": "to cherish; to treasure",
    "explanationCN": "珍惜;珍藏"
  },
  {
    "character": "𗭋",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "a horse with white trotters",
    "explanationCN": "一匹带着白色猪蹄的马"
  },
  {
    "character": "𗭘",
    "GX": "ntsa̱¹",
    "GHC": "tsa̱¹",
    "explanationEN": "legs; shin",
    "explanationCN": "腿;胫骨"
  },
  {
    "character": "𘛉",
    "GX": "ntswə¹",
    "GHC": "tsjwɨ̱¹",
    "explanationEN": "pot; jar",
    "explanationCN": "罐;罐"
  },
  {
    "character": "𘕉",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "taste; flavor",
    "explanationCN": "味道;味道"
  },
  {
    "character": "𘀣",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "grease",
    "explanationCN": "油"
  },
  {
    "character": "𘕊",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "smell; taste",
    "explanationCN": "气味;味道"
  },
  {
    "character": "𘋋",
    "GX": "dwu²",
    "GHC": "djwu²",
    "explanationEN": "to mend; to patch; to repair",
    "explanationCN": "修补;修补;修复"
  },
  {
    "character": "𘋉",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "to do; to make",
    "explanationCN": "去做;使"
  },
  {
    "character": "𘞠",
    "GX": "mpho²",
    "GHC": "²",
    "explanationEN": "gentle; harmonious",
    "explanationCN": "温柔;和谐"
  },
  {
    "character": "𘛆",
    "GX": "sweṃh¹",
    "GHC": "sjwɨ̣j¹",
    "explanationEN": "casket; a small box (case)",
    "explanationCN": "棺材;一个小盒子（箱）"
  },
  {
    "character": "𘀢",
    "GX": "tha̱¹",
    "GHC": "tha¹",
    "explanationEN": "camel",
    "explanationCN": "骆驼"
  },
  {
    "character": "𘀽",
    "GX": "ntshi²",
    "GHC": "tshji̱²",
    "explanationEN": "to speak.ʙ",
    "explanationCN": "说话。"
  },
  {
    "character": "𘊧",
    "GX": "ṇiw²",
    "GHC": "dzjiw²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘀰",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘋊",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "to play; to sport",
    "explanationCN": "玩;到运动"
  },
  {
    "character": "𘀯",
    "GX": "ma̱h²",
    "GHC": "mạ²",
    "explanationEN": "to spread; to scatter",
    "explanationCN": "传播;分散"
  },
  {
    "character": "𗭩",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "foolish; stupid",
    "explanationCN": "愚蠢;笨"
  },
  {
    "character": "𘀥",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "stomach; belly",
    "explanationCN": "胃;腹"
  },
  {
    "character": "𘊨",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "to eliminate; to get rid of",
    "explanationCN": "消除;去掉"
  },
  {
    "character": "𘁁",
    "GX": "ndze²",
    "GHC": "dzji̱j²",
    "explanationEN": "to cut out",
    "explanationCN": "剪出"
  },
  {
    "character": "𘊮",
    "GX": "rtar¹",
    "GHC": "tjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘋅",
    "GX": "sa̱ṃ¹",
    "GHC": "sã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘊹",
    "GX": "kaw¹",
    "GHC": "kja̱¹",
    "explanationEN": "foundation; basis; burden",
    "explanationCN": "基础;基础;负担"
  },
  {
    "character": "𘊻",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "mother-in-law",
    "explanationCN": "岳母"
  },
  {
    "character": "𘊼",
    "GX": "thwe̱¹",
    "GHC": "thwej¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗭭",
    "GX": "dəh¹",
    "GHC": "¹",
    "explanationEN": "smash; grain",
    "explanationCN": "粉碎;粮食"
  },
  {
    "character": "𗭊",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "INTER: interrogative; OPT: UP; CONT: continuative",
    "explanationCN": "INTER：疑问;OPT： 向上;续： 续"
  },
  {
    "character": "𗭒",
    "GX": "khə¹",
    "GHC": "khjɨ¹",
    "explanationEN": "foot",
    "explanationCN": "脚"
  },
  {
    "character": "𗭠",
    "GX": "qha̱ṃ²",
    "GHC": "khã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘕆",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "to bear (a burden); to shoulder",
    "explanationCN": "承担（负担）;肩部"
  },
  {
    "character": "𘕁",
    "GX": "rzər¹",
    "GHC": "zjɨr¹",
    "explanationEN": "to note; to record",
    "explanationCN": "注意;录制"
  },
  {
    "character": "𗭖",
    "GX": "khə²",
    "GHC": "khjɨ²",
    "explanationEN": "threshold",
    "explanationCN": "门槛"
  },
  {
    "character": "𘋄",
    "GX": "phu¹",
    "GHC": "phju¹",
    "explanationEN": "to look for",
    "explanationCN": "寻找"
  },
  {
    "character": "𘀤",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "camel",
    "explanationCN": "骆驼"
  },
  {
    "character": "𘞢",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "nostril",
    "explanationCN": "鼻孔"
  },
  {
    "character": "𘋍",
    "GX": "yu¹",
    "GHC": "ˑju̱¹",
    "explanationEN": "to taste",
    "explanationCN": "适量"
  },
  {
    "character": "𘛊",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "firm",
    "explanationCN": "公司"
  },
  {
    "character": "𘀸",
    "GX": "zwaṃ²",
    "GHC": "zjwã²",
    "explanationEN": "eggplant; aubergine",
    "explanationCN": "茄子;茄子"
  },
  {
    "character": "𘊩",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "to draw (a bow)",
    "explanationCN": "拉弓"
  },
  {
    "character": "𘀳",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘀺",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "to draw (water); derive",
    "explanationCN": "draw （水）;获得"
  },
  {
    "character": "𘀿",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "a kind of bag",
    "explanationCN": "一种袋子"
  },
  {
    "character": "𘀲",
    "GX": "kha²",
    "GHC": "²",
    "explanationEN": "#ERROR!",
    "explanationCN": "#ERROR！"
  },
  {
    "character": "𘊭",
    "GX": "rtswə̱r²",
    "GHC": "tswər²",
    "explanationEN": "interests (on an investment)",
    "explanationCN": "利息（投资）"
  },
  {
    "character": "𘊰",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "to damage; to lose",
    "explanationCN": "损害;输"
  },
  {
    "character": "𘊲",
    "GX": "mphaa̱²",
    "GHC": "phia̱²",
    "explanationEN": "to divide; fraction",
    "explanationCN": "分割;分数"
  },
  {
    "character": "𗭧",
    "GX": "dəh¹",
    "GHC": "djɨ̣¹",
    "explanationEN": "smash; grain",
    "explanationCN": "粉碎;粮食"
  },
  {
    "character": "𗭑",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "fetters",
    "explanationCN": "桎"
  },
  {
    "character": "𘛁",
    "GX": "mbe²",
    "GHC": "bji̱j²",
    "explanationEN": "line",
    "explanationCN": "线"
  },
  {
    "character": "𗭉",
    "GX": "ntśə²",
    "GHC": "tśjɨ̱²",
    "explanationEN": "to fall; to tumble",
    "explanationCN": "跌倒;翻滚"
  },
  {
    "character": "𗭎",
    "GX": "nśi²",
    "GHC": "śji̱²",
    "explanationEN": "to fall; to tumble",
    "explanationCN": "跌倒;翻滚"
  },
  {
    "character": "𘕅",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "scabies",
    "explanationCN": "疥疮"
  },
  {
    "character": "𘛂",
    "GX": "mbe²",
    "GHC": "bji̱j²",
    "explanationEN": "roadside stop; to travel",
    "explanationCN": "路边停车;旅行"
  },
  {
    "character": "𘊯",
    "GX": "twi¹",
    "GHC": "tjwi¹",
    "explanationEN": "to be choked",
    "explanationCN": "被窒息"
  },
  {
    "character": "𗺋",
    "GX": "tśhi¹",
    "GHC": "tśhji¹",
    "explanationEN": "base; origin",
    "explanationCN": "基础;起源"
  },
  {
    "character": "𗺉",
    "GX": "tśhi²",
    "GHC": "tśhji²",
    "explanationEN": "base; origin",
    "explanationCN": "基础;起源"
  },
  {
    "character": "𗢌",
    "GX": "pi̱ṃ¹",
    "GHC": "pẽ¹",
    "explanationEN": "dung; excrement",
    "explanationCN": "粪;屎"
  },
  {
    "character": "𗢍",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "auspicious; lucky",
    "explanationCN": "吉祥;幸运"
  },
  {
    "character": "𗡿",
    "GX": "swa̱¹",
    "GHC": "swa¹",
    "explanationEN": "drop; eardrop",
    "explanationCN": "落;耳坠"
  },
  {
    "character": "𘚌",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "to stop; to stagnate",
    "explanationCN": "停止;停滞不前"
  },
  {
    "character": "𗎶",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "to collapse",
    "explanationCN": "折叠"
  },
  {
    "character": "𗍱",
    "GX": "zəh²",
    "GHC": "zjɨ̣²",
    "explanationEN": "two",
    "explanationCN": "二"
  },
  {
    "character": "𗎵",
    "GX": "nvu²",
    "GHC": "wju̱²",
    "explanationEN": "to combine; to contract",
    "explanationCN": "组合在一起;签订合同"
  },
  {
    "character": "𗍲",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "between; among",
    "explanationCN": "之间;中"
  },
  {
    "character": "𗍫",
    "GX": "nnə¹",
    "GHC": "njɨ̱¹",
    "explanationEN": "two",
    "explanationCN": "二"
  },
  {
    "character": "𗍳",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "pron.honorific you",
    "explanationCN": "您"
  },
  {
    "character": "𗍪",
    "GX": "tsheṃ¹",
    "GHC": "tshjɨj¹",
    "explanationEN": "intimate; close",
    "explanationCN": "亲密;关闭"
  },
  {
    "character": "𘀃",
    "GX": "ŋgu²",
    "GHC": "gju̱²",
    "explanationEN": "snake",
    "explanationCN": "蛇"
  },
  {
    "character": "𘀄",
    "GX": "ŋgu²",
    "GHC": "gju̱²",
    "explanationEN": "lucky",
    "explanationCN": "幸运"
  },
  {
    "character": "𗎑",
    "GX": "rmu̱r²",
    "GHC": "mur²",
    "explanationEN": "hail",
    "explanationCN": "冰雹"
  },
  {
    "character": "𗎔",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "cold; frigid",
    "explanationCN": "冷;寒冷"
  },
  {
    "character": "𗎗",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "cold",
    "explanationCN": "冷"
  },
  {
    "character": "𗺊",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "mineral resources",
    "explanationCN": "矿产资源"
  },
  {
    "character": "𗺍",
    "GX": "dẓwaə̱¹",
    "GHC": "dźiwə¹",
    "explanationEN": "to pull; to draw; to tug",
    "explanationCN": "拉动;绘制;拉扯"
  },
  {
    "character": "𗢈",
    "GX": "tsa̱¹",
    "GHC": "tsa¹",
    "explanationEN": "village",
    "explanationCN": "村"
  },
  {
    "character": "𗎺",
    "GX": "vwa̱²",
    "GHC": "wa²",
    "explanationEN": "a figure of sitting",
    "explanationCN": "坐姿"
  },
  {
    "character": "𗍰",
    "GX": "poh²",
    "GHC": "pjọ²",
    "explanationEN": "to ride",
    "explanationCN": "骑行"
  },
  {
    "character": "𘔯",
    "GX": "ŋkhau̱¹",
    "GHC": "khju̱¹",
    "explanationEN": "to greet",
    "explanationCN": "问候"
  },
  {
    "character": "𗎃",
    "GX": "qai̱²",
    "GHC": "kie²",
    "explanationEN": "to detest; to abhor",
    "explanationCN": "憎恶;憎恶"
  },
  {
    "character": "𗎉",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "cold; frigid",
    "explanationCN": "冷;寒冷"
  },
  {
    "character": "𗎐",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "harm; danger",
    "explanationCN": "伤害;危险"
  },
  {
    "character": "𗢊",
    "GX": "vuh²",
    "GHC": "wjụ²",
    "explanationEN": "dung; excrement",
    "explanationCN": "粪;屎"
  },
  {
    "character": "𗢀",
    "GX": "swa̱¹",
    "GHC": "swa¹",
    "explanationEN": "hair",
    "explanationCN": "毛"
  },
  {
    "character": "𗎖",
    "GX": "qhai̱¹",
    "GHC": "khie¹",
    "explanationEN": "bitter",
    "explanationCN": "苦"
  },
  {
    "character": "𗺌",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "foot",
    "explanationCN": "脚"
  },
  {
    "character": "𗍬",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "a unit of weight",
    "explanationCN": "重量单位"
  },
  {
    "character": "𗍩",
    "GX": "hə²",
    "GHC": "xjɨ²",
    "explanationEN": "calamity; disaster",
    "explanationCN": "灾难;灾难"
  },
  {
    "character": "𗍨",
    "GX": "rzu̱r²",
    "GHC": "zur²",
    "explanationEN": "message; letter",
    "explanationCN": "消息;信"
  },
  {
    "character": "𗎓",
    "GX": "rkiwr¹",
    "GHC": "kjiwr¹",
    "explanationEN": "cold; frigid",
    "explanationCN": "冷;寒冷"
  },
  {
    "character": "𗎒",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "cold",
    "explanationCN": "冷"
  },
  {
    "character": "𗎈",
    "GX": "γwo̱ṃh¹",
    "GHC": "ˑwo¹",
    "explanationEN": "ice",
    "explanationCN": "冰"
  },
  {
    "character": "𗎸",
    "GX": "tśa²",
    "GHC": "tśja²",
    "explanationEN": "sled; sledge; sleigh",
    "explanationCN": "雪橇;雪橇;雪橇"
  },
  {
    "character": "𗍴",
    "GX": "rdi̱r²",
    "GHC": "de̱r²",
    "explanationEN": "a unit of measurement",
    "explanationCN": "测量单位"
  },
  {
    "character": "𘉤",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "to meet; to see",
    "explanationCN": "见面;看"
  },
  {
    "character": "𗢋",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "to give birth",
    "explanationCN": "生育"
  },
  {
    "character": "𗺏",
    "GX": "yeṃ²",
    "GHC": "ˑjɨj²",
    "explanationEN": "socks",
    "explanationCN": "袜子"
  },
  {
    "character": "𗺎",
    "GX": "ntśhə¹",
    "GHC": "tśhjɨ̱¹",
    "explanationEN": "to examine",
    "explanationCN": "检查"
  },
  {
    "character": "𗎹",
    "GX": "mbu²",
    "GHC": "bju̱²",
    "explanationEN": "to contract; to shrink",
    "explanationCN": "签订合同;收缩"
  },
  {
    "character": "𗳂",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "fine horse; steed",
    "explanationCN": "好马;骏马"
  },
  {
    "character": "𘓪",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "sandalwood",
    "explanationCN": "檀香"
  },
  {
    "character": "𘇒",
    "GX": "rvwai̱r¹",
    "GHC": "wier¹",
    "explanationEN": "to cherish.ᴀ; to treasure.ᴀ",
    "explanationCN": "珍惜。珍藏。"
  },
  {
    "character": "𘇓",
    "GX": "rvwao̱r¹",
    "GHC": "wior¹",
    "explanationEN": "to cherish.ʙ; to treasure.ʙ",
    "explanationCN": "珍惜。珍藏。"
  },
  {
    "character": "𗗑",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "to live; strong; robust",
    "explanationCN": "活着;强;强大的"
  },
  {
    "character": "𗗏",
    "GX": "rpwər¹",
    "GHC": "¹",
    "explanationEN": "to advise; to urge",
    "explanationCN": "提供建议;敦促"
  },
  {
    "character": "𘀅",
    "GX": "ŋgu²",
    "GHC": "gju̱²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𗳁",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "to fete; to present (a gift)",
    "explanationCN": "到 fete;赠送 （一份礼物）"
  },
  {
    "character": "𗗎",
    "GX": "rpwər¹",
    "GHC": "pjwɨ̱r¹",
    "explanationEN": "to advise; to urge",
    "explanationCN": "提供建议;敦促"
  },
  {
    "character": "𗲿",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "catkin",
    "explanationCN": "柳絮"
  },
  {
    "character": "𘇐",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "to esteem; to worship; to uphold",
    "explanationCN": "尊重;去敬拜;维护"
  },
  {
    "character": "𗗒",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "land; soil",
    "explanationCN": "土地;土"
  },
  {
    "character": "𗗐",
    "GX": "yiw²",
    "GHC": "ˑjiw²",
    "explanationEN": "life",
    "explanationCN": "生命"
  },
  {
    "character": "𗳀",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "soft",
    "explanationCN": "软"
  },
  {
    "character": "𘇔",
    "GX": "ndza¹",
    "GHC": "dzja̱¹",
    "explanationEN": "thrifty; frugal",
    "explanationCN": "节俭;节俭"
  },
  {
    "character": "𘇕",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "to cherish",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗎏",
    "GX": "meh¹",
    "GHC": "mji̱j¹",
    "explanationEN": "cold; frigid",
    "explanationCN": "冷;寒冷"
  },
  {
    "character": "𗎄",
    "GX": "rvwə̱r²",
    "GHC": "wər²",
    "explanationEN": "dew",
    "explanationCN": "露"
  },
  {
    "character": "𗎇",
    "GX": "rvwə̱r²",
    "GHC": "wər²",
    "explanationEN": "back; spine",
    "explanationCN": "返回;脊柱"
  },
  {
    "character": "𗎋",
    "GX": "rvwə̱r²",
    "GHC": "wər²",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𗎅",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "to contend; to vie; to strive",
    "explanationCN": "去争辩;争夺;努力"
  },
  {
    "character": "𗎊",
    "GX": "re̱r¹",
    "GHC": "rejr¹",
    "explanationEN": "the twelfth lunar month",
    "explanationCN": "农历十二月"
  },
  {
    "character": "𘇑",
    "GX": "γu̱¹",
    "GHC": "¹",
    "explanationEN": "to exchange; to change",
    "explanationCN": "交换;更改"
  },
  {
    "character": "𗢉",
    "GX": "tsa̱¹",
    "GHC": "tsa¹",
    "explanationEN": "firm",
    "explanationCN": "公司"
  },
  {
    "character": "𗎷",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "to connect",
    "explanationCN": "连接"
  },
  {
    "character": "𗍯",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "(tree) branch; twig",
    "explanationCN": "（树）枝;树枝"
  },
  {
    "character": "𗍮",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "lamb",
    "explanationCN": "羔羊"
  },
  {
    "character": "𗍭",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗎌",
    "GX": "dźuo²",
    "GHC": "dźio̱w²",
    "explanationEN": "cold; frigid",
    "explanationCN": "冷;寒冷"
  },
  {
    "character": "𗎎",
    "GX": "qwai̱¹",
    "GHC": "kwie¹",
    "explanationEN": "frigid",
    "explanationCN": "寒冷"
  },
  {
    "character": "𗎆",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "snow",
    "explanationCN": "雪"
  },
  {
    "character": "𗎍",
    "GX": "qhai̱¹",
    "GHC": "khie¹",
    "explanationEN": "to detest.ᴀ",
    "explanationCN": "去憎恶。"
  },
  {
    "character": "𗞯",
    "GX": "hau̱²",
    "GHC": "xu²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞳",
    "GX": "śwu²",
    "GHC": "śjwu²",
    "explanationEN": "winding corridor; ambulatory",
    "explanationCN": "蜿蜒的走廊;回廊"
  },
  {
    "character": "𗚌",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "tail; backside",
    "explanationCN": "尾巴;屁股"
  },
  {
    "character": "𗚏",
    "GX": "ẓaa̱¹",
    "GHC": "śia¹",
    "explanationEN": "Chinese fir",
    "explanationCN": "杉木"
  },
  {
    "character": "𗝼",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "agalloch; agalwood",
    "explanationCN": "阿加洛克;阿加尔伍德"
  },
  {
    "character": "𗚠",
    "GX": "qhu̱²",
    "GHC": "khu²",
    "explanationEN": "basket",
    "explanationCN": "篮子"
  },
  {
    "character": "𗚑",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗚻",
    "GX": "śeṃ²",
    "GHC": "śjɨj²",
    "explanationEN": "litre; a unit of measurement",
    "explanationCN": "升;测量单位"
  },
  {
    "character": "𗜹",
    "GX": "lhih¹",
    "GHC": "ljị¹",
    "explanationEN": "to enter",
    "explanationCN": "进入"
  },
  {
    "character": "𗜂",
    "GX": "γao̱h¹",
    "GHC": "ˑiọ¹",
    "explanationEN": "garden; yard",
    "explanationCN": "花园;院子 里"
  },
  {
    "character": "𗛜",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "circle; circumference",
    "explanationCN": "圈;周长"
  },
  {
    "character": "𗝻",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "tree tumor",
    "explanationCN": "树木肿瘤"
  },
  {
    "character": "𗞲",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "to collapse; to cave in",
    "explanationCN": "崩溃;屈服"
  },
  {
    "character": "𗛃",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "to come; to arrive",
    "explanationCN": "来;到达"
  },
  {
    "character": "𗜟",
    "GX": "ŋgiw¹",
    "GHC": "gji̱w¹",
    "explanationEN": "a kind of plant",
    "explanationCN": "一种植物"
  },
  {
    "character": "𗝗",
    "GX": "no̱¹",
    "GHC": "no¹",
    "explanationEN": "roof beam",
    "explanationCN": "梁"
  },
  {
    "character": "𗛆",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "branch; twig",
    "explanationCN": "分支;树枝"
  },
  {
    "character": "𗛤",
    "GX": "rpa̱r²",
    "GHC": "par²",
    "explanationEN": "awning; shed",
    "explanationCN": "遮阳 篷;棚"
  },
  {
    "character": "𗝉",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗝄",
    "GX": "swaṃ²",
    "GHC": "sjwã²",
    "explanationEN": "to revolve",
    "explanationCN": "旋转"
  },
  {
    "character": "𗝒",
    "GX": "γəh¹",
    "GHC": "ɣjɨ̣¹",
    "explanationEN": "charcoal",
    "explanationCN": "木炭"
  },
  {
    "character": "𗝓",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "earthen bowl",
    "explanationCN": "钵"
  },
  {
    "character": "𗞝",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "wilderness; open field",
    "explanationCN": "荒野;开阔的田野"
  },
  {
    "character": "𗝳",
    "GX": "naw¹",
    "GHC": "nja̱¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗝥",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "tree; wood",
    "explanationCN": "树;木"
  },
  {
    "character": "𗞌",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "cypress",
    "explanationCN": "柏树"
  },
  {
    "character": "𗟒",
    "GX": "pai̱¹",
    "GHC": "pie¹",
    "explanationEN": "cypress",
    "explanationCN": "柏树"
  },
  {
    "character": "𗞭",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "thin",
    "explanationCN": "薄"
  },
  {
    "character": "𗝺",
    "GX": "nna̱²",
    "GHC": "²",
    "explanationEN": "flood; floodwater",
    "explanationCN": "洪水;洪水"
  },
  {
    "character": "𗛄",
    "GX": "lwuh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "rafter",
    "explanationCN": "椽"
  },
  {
    "character": "𗛨",
    "GX": "rna̱r²",
    "GHC": "nar²",
    "explanationEN": "to move; to shift",
    "explanationCN": "移动;移位"
  },
  {
    "character": "𗛪",
    "GX": "giw¹",
    "GHC": "gjiw¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗚢",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "rake",
    "explanationCN": "耙"
  },
  {
    "character": "𗜚",
    "GX": "dẓao̱¹",
    "GHC": "dźio¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞍",
    "GX": "kaw¹",
    "GHC": "kja̱¹",
    "explanationEN": "pedestal; plinth",
    "explanationCN": "基座;基座"
  },
  {
    "character": "𗞻",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "jaw",
    "explanationCN": "颚"
  },
  {
    "character": "𗞫",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "cracking sound",
    "explanationCN": "噼啪声"
  },
  {
    "character": "𗟍",
    "GX": "ryur¹",
    "GHC": "ˑjur¹",
    "explanationEN": "Chinese crab apple",
    "explanationCN": "中国海棠"
  },
  {
    "character": "𗝘",
    "GX": "ṇwə̱²",
    "GHC": "nuə²",
    "explanationEN": "bamboo",
    "explanationCN": "竹"
  },
  {
    "character": "𗝧",
    "GX": "tsha̱h¹",
    "GHC": "tshạ¹",
    "explanationEN": "to crack; to split",
    "explanationCN": "噼啪作响;拆分"
  },
  {
    "character": "𗝜",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗜡",
    "GX": "tsho̱ṃ²",
    "GHC": "tshow²",
    "explanationEN": "thorn bushes",
    "explanationCN": "荆棘灌木"
  },
  {
    "character": "𗞔",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "incense; fragrance",
    "explanationCN": "香;香味"
  },
  {
    "character": "𗛩",
    "GX": "rvor¹",
    "GHC": "wjor¹",
    "explanationEN": "roof beam",
    "explanationCN": "梁"
  },
  {
    "character": "𗞱",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "fragrant",
    "explanationCN": "香"
  },
  {
    "character": "𗛗",
    "GX": "mbaa̱²",
    "GHC": "bia̱²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗝹",
    "GX": "vwu̱h¹",
    "GHC": "wụ¹",
    "explanationEN": "elm",
    "explanationCN": "榆树"
  },
  {
    "character": "𗞪",
    "GX": "rγae̱r²",
    "GHC": "ˑiejr²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞠",
    "GX": "hae̱ṃ²",
    "GHC": "xiəj²",
    "explanationEN": "apricot",
    "explanationCN": "杏"
  },
  {
    "character": "𗚭",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiar²",
    "explanationEN": "to chop",
    "explanationCN": "砍伐"
  },
  {
    "character": "𗚃",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "fork",
    "explanationCN": "叉"
  },
  {
    "character": "𗚄",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "peach",
    "explanationCN": "桃"
  },
  {
    "character": "𗚙",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "Chinese parasol tree",
    "explanationCN": "中国阳伞树"
  },
  {
    "character": "𗚇",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "thick; dense",
    "explanationCN": "厚;稠"
  },
  {
    "character": "𗝃",
    "GX": "pae̱ṃ²",
    "GHC": "piəj²",
    "explanationEN": "bowl",
    "explanationCN": "碗"
  },
  {
    "character": "𗚡",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "man; people; person",
    "explanationCN": "男人;人;人"
  },
  {
    "character": "𗚎",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗜠",
    "GX": "khwi¹",
    "GHC": "khjwi¹",
    "explanationEN": "to punish severely",
    "explanationCN": "严惩"
  },
  {
    "character": "𗜱",
    "GX": "ẓao̱²",
    "GHC": "śio²",
    "explanationEN": "pointed; sharp",
    "explanationCN": "尖;锋利"
  },
  {
    "character": "𗛑",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "happiness; ease",
    "explanationCN": "幸福;缓解"
  },
  {
    "character": "𗚿",
    "GX": "liw²",
    "GHC": "ljiw²",
    "explanationEN": "to gather; to assemble",
    "explanationCN": "聚集;组装"
  },
  {
    "character": "𗜆",
    "GX": "lheh¹",
    "GHC": "lhjịj¹",
    "explanationEN": "bowl",
    "explanationCN": "碗"
  },
  {
    "character": "𗚺",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "basket",
    "explanationCN": "篮子"
  },
  {
    "character": "𗛐",
    "GX": "śeh¹",
    "GHC": "śjịj¹",
    "explanationEN": "to crack; to split",
    "explanationCN": "噼啪作响;拆分"
  },
  {
    "character": "𗚥",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "sugarcane",
    "explanationCN": "甘蔗"
  },
  {
    "character": "𗝔",
    "GX": "ru̱r²",
    "GHC": "rur²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛇",
    "GX": "tshwa̱¹",
    "GHC": "¹",
    "explanationEN": "to invade and harass; to impale",
    "explanationCN": "侵略和骚扰;穿刺"
  },
  {
    "character": "𗛀",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛧",
    "GX": "lluh¹",
    "GHC": "ljụ¹",
    "explanationEN": "to flow; to drift; to float",
    "explanationCN": "流动;漂移;漂浮"
  },
  {
    "character": "𗚤",
    "GX": "tshe̱¹",
    "GHC": "¹",
    "explanationEN": "to invade and harass",
    "explanationCN": "侵入和骚扰"
  },
  {
    "character": "𗚒",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗚬",
    "GX": "rγo̱r¹",
    "GHC": "ɣor¹",
    "explanationEN": "ailanthus",
    "explanationCN": "臭椿属"
  },
  {
    "character": "𗚫",
    "GX": "vwe̱ṃ¹",
    "GHC": "wəj¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗜑",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "a skilled workman",
    "explanationCN": "熟练的工人"
  },
  {
    "character": "𗛙",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "a sleeveless garment; waistcoat",
    "explanationCN": "一件无袖的衣服;背心"
  },
  {
    "character": "𗞜",
    "GX": "ryur¹",
    "GHC": "ˑjur¹",
    "explanationEN": "sapling",
    "explanationCN": "树苗"
  },
  {
    "character": "𗛹",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "desolate and boundless",
    "explanationCN": "荒凉无边"
  },
  {
    "character": "𗛥",
    "GX": "dza̱¹",
    "GHC": "dza¹",
    "explanationEN": "to chisel",
    "explanationCN": "凿子"
  },
  {
    "character": "𗚽",
    "GX": "du̱h¹",
    "GHC": "dụ¹",
    "explanationEN": "wilderness; open field",
    "explanationCN": "荒野;开阔的田野"
  },
  {
    "character": "𗚉",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "people; person; man",
    "explanationCN": "人;人;男人"
  },
  {
    "character": "𗚔",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "to bathe",
    "explanationCN": "去洗澡"
  },
  {
    "character": "𗚛",
    "GX": "mu²",
    "GHC": "mju²",
    "explanationEN": "to waver; to move",
    "explanationCN": "动摇;移动"
  },
  {
    "character": "𗚓",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗚦",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "turtledove",
    "explanationCN": "斑鸠"
  },
  {
    "character": "𗛅",
    "GX": "du̱h²",
    "GHC": "dụ²",
    "explanationEN": "tub; bucket",
    "explanationCN": "桶;桶"
  },
  {
    "character": "𗜁",
    "GX": "dźoh²",
    "GHC": "dźjọ²",
    "explanationEN": "Chinese ink; coal",
    "explanationCN": "墨;煤"
  },
  {
    "character": "𗛚",
    "GX": "dzeh¹",
    "GHC": "dzjịj¹",
    "explanationEN": "boat; ship",
    "explanationCN": "船;船"
  },
  {
    "character": "𗚹",
    "GX": "ẓwaa̱ṃ¹",
    "GHC": "śiwã¹",
    "explanationEN": "bolt",
    "explanationCN": "螺栓"
  },
  {
    "character": "𗛘",
    "GX": "qhu̱²",
    "GHC": "khu²",
    "explanationEN": "jackal; wolf",
    "explanationCN": "豺;狼"
  },
  {
    "character": "𗝁",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "plough; share",
    "explanationCN": "犁;共享"
  },
  {
    "character": "𗟋",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "roof beam",
    "explanationCN": "梁"
  },
  {
    "character": "𗜓",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "to appear; to show; to sparkle",
    "explanationCN": "出现;展示;闪闪发光"
  },
  {
    "character": "𗝌",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "musk",
    "explanationCN": "麝香"
  },
  {
    "character": "𗝖",
    "GX": "qhe̱¹",
    "GHC": "khej¹",
    "explanationEN": "luxuriant; exuberant",
    "explanationCN": "华丽;旺盛"
  },
  {
    "character": "𗜋",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "Chinese flowering crab apple",
    "explanationCN": "中国开花的海棠"
  },
  {
    "character": "𗛡",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "bamboo shoots",
    "explanationCN": "竹笋"
  },
  {
    "character": "𗝎",
    "GX": "qhau̱¹",
    "GHC": "khu¹",
    "explanationEN": "bowl",
    "explanationCN": "碗"
  },
  {
    "character": "𗜯",
    "GX": "llə̱²",
    "GHC": "lə²",
    "explanationEN": "grape",
    "explanationCN": "葡萄"
  },
  {
    "character": "𗜞",
    "GX": "tśho¹",
    "GHC": "tśhjo¹",
    "explanationEN": "election",
    "explanationCN": "选举"
  },
  {
    "character": "𗚟",
    "GX": "kwa̱ṃ¹",
    "GHC": "kwã¹",
    "explanationEN": "jar; pot",
    "explanationCN": "罐;罐"
  },
  {
    "character": "𗝨",
    "GX": "to̱ṃh¹",
    "GHC": "tọ¹",
    "explanationEN": "a kind of bamboo",
    "explanationCN": "一种竹子"
  },
  {
    "character": "𗝕",
    "GX": "lu¹",
    "GHC": "lju¹",
    "explanationEN": "bamboo flute",
    "explanationCN": "竹笛"
  },
  {
    "character": "𗞨",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "bamboo shoots",
    "explanationCN": "竹笋"
  },
  {
    "character": "𗞡",
    "GX": "pao̱¹",
    "GHC": "pio¹",
    "explanationEN": "to burst; to crack",
    "explanationCN": "爆裂;破解"
  },
  {
    "character": "𗞼",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "to light; to kindle; to ignite; temple attendant; (wax) candle",
    "explanationCN": "到光;点燃;点燃;寺庙服务员;（蜡）蜡烛"
  },
  {
    "character": "𗟖",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗚾",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "the fruit of Chinese wolfberry",
    "explanationCN": "中国枸杞的果实"
  },
  {
    "character": "𗝩",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "to be imprisoned; to supervise",
    "explanationCN": "被监禁;监督"
  },
  {
    "character": "𗜒",
    "GX": "kha̱h²",
    "GHC": "kha²",
    "explanationEN": "casket; a small box",
    "explanationCN": "棺材;一个小盒子"
  },
  {
    "character": "𗝍",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "hole; cavity",
    "explanationCN": "洞;腔"
  },
  {
    "character": "𗜗",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛛",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "central room",
    "explanationCN": "中央客房"
  },
  {
    "character": "𗚧",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "firewood",
    "explanationCN": "柴"
  },
  {
    "character": "𗚆",
    "GX": "luh¹",
    "GHC": "¹",
    "explanationEN": "to ring; to make a sound",
    "explanationCN": "响铃;发出声音"
  },
  {
    "character": "𗚋",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "branch; twig",
    "explanationCN": "分支;树枝"
  },
  {
    "character": "𗚴",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗚚",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "wrist",
    "explanationCN": "腕"
  },
  {
    "character": "𗜄",
    "GX": "yo²",
    "GHC": "ˑjo²",
    "explanationEN": "time; days",
    "explanationCN": "时间;日"
  },
  {
    "character": "𗛕",
    "GX": "mbu¹",
    "GHC": "bju̱¹",
    "explanationEN": "cassia",
    "explanationCN": "桂"
  },
  {
    "character": "𗛋",
    "GX": "qaa̱²",
    "GHC": "kia²",
    "explanationEN": "melon",
    "explanationCN": "瓜"
  },
  {
    "character": "𗛉",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𘜯",
    "GX": "yih²",
    "GHC": "ˑjị²",
    "explanationEN": "saddle",
    "explanationCN": "鞍"
  },
  {
    "character": "𗚨",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "cupboard; cabinet",
    "explanationCN": "橱柜;内阁"
  },
  {
    "character": "𗛈",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "to rise.ʙ",
    "explanationCN": "崛起。"
  },
  {
    "character": "𗛯",
    "GX": "nvu¹",
    "GHC": "wju̱¹",
    "explanationEN": "old; rotten; withered",
    "explanationCN": "老;烂;枯萎"
  },
  {
    "character": "𗛶",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "frame; shelter",
    "explanationCN": "框架;庇护所"
  },
  {
    "character": "𗚳",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "neck of a plough",
    "explanationCN": "犁的颈部"
  },
  {
    "character": "𗜝",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "red wood",
    "explanationCN": "红木"
  },
  {
    "character": "𗜺",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗞕",
    "GX": "mphe̱²",
    "GHC": "phe̱j²",
    "explanationEN": "to divide",
    "explanationCN": "划分"
  },
  {
    "character": "𗟏",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "ghost; spirit",
    "explanationCN": "鬼;精神"
  },
  {
    "character": "𗚰",
    "GX": "le̱¹",
    "GHC": "¹",
    "explanationEN": "to close; to shut",
    "explanationCN": "关闭;关闭"
  },
  {
    "character": "𗜍",
    "GX": "sa¹",
    "GHC": "sja¹",
    "explanationEN": "to kill; to slaughter",
    "explanationCN": "杀戮;屠宰"
  },
  {
    "character": "𗜦",
    "GX": "llwih¹",
    "GHC": "ljwị¹",
    "explanationEN": "to fall in; to sink; to enter",
    "explanationCN": "坠入其中;沉没;进入"
  },
  {
    "character": "𗜅",
    "GX": "vu²",
    "GHC": "wju²",
    "explanationEN": "to gamble; to play games",
    "explanationCN": "赌博;玩游戏"
  },
  {
    "character": "𗞐",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗚱",
    "GX": "lha¹",
    "GHC": "lhjow¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗜖",
    "GX": "tśo²",
    "GHC": "tśjo²",
    "explanationEN": "to hold; to have",
    "explanationCN": "持有;要有"
  },
  {
    "character": "𗞙",
    "GX": "twe¹",
    "GHC": "tjwij¹",
    "explanationEN": "small cup; ancient wine vessel",
    "explanationCN": "㡺;古老的酒器皿"
  },
  {
    "character": "𗞉",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "skilful",
    "explanationCN": "巧"
  },
  {
    "character": "𗟔",
    "GX": "qo̱¹",
    "GHC": "ko¹",
    "explanationEN": "vehicle; carriage",
    "explanationCN": "车辆;运输"
  },
  {
    "character": "𗛟",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "dragon",
    "explanationCN": "龙"
  },
  {
    "character": "𗛠",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗝐",
    "GX": "γa̱²",
    "GHC": "ɣa²",
    "explanationEN": "to gather; to concentrate",
    "explanationCN": "聚集;集中精力"
  },
  {
    "character": "𗝏",
    "GX": "du̱h²",
    "GHC": "dụ²",
    "explanationEN": "a unit of measurement",
    "explanationCN": "测量单位"
  },
  {
    "character": "𗝞",
    "GX": "nde̱²",
    "GHC": "de̱j²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗟑",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞷",
    "GX": "kwaṃ²",
    "GHC": "kjwã²",
    "explanationEN": "fort; fortress",
    "explanationCN": "堡;堡垒"
  },
  {
    "character": "𗞑",
    "GX": "lweh¹",
    "GHC": "ljwịj¹",
    "explanationEN": "ridgepole",
    "explanationCN": "桴"
  },
  {
    "character": "𗜇",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "a kind of wood",
    "explanationCN": "一种木材"
  },
  {
    "character": "𗞎",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "pear",
    "explanationCN": "梨"
  },
  {
    "character": "𗜕",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "neck of a plough",
    "explanationCN": "犁的颈部"
  },
  {
    "character": "𗛞",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛝",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "plum; woods; garden",
    "explanationCN": "李子;树林;花园"
  },
  {
    "character": "𗚖",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r²",
    "explanationEN": "a unit of measurement",
    "explanationCN": "测量单位"
  },
  {
    "character": "𗜬",
    "GX": "nlo¹",
    "GHC": "ljo̱¹",
    "explanationEN": "to fight for; to gamble",
    "explanationCN": "为之奋斗;去赌博"
  },
  {
    "character": "𗝦",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "purple; violet",
    "explanationCN": "紫色;紫"
  },
  {
    "character": "𗝠",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "tree; wood",
    "explanationCN": "树;木"
  },
  {
    "character": "𗞴",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗚵",
    "GX": "baə̱¹",
    "GHC": "biə¹",
    "explanationEN": "willow",
    "explanationCN": "柳树"
  },
  {
    "character": "𗞣",
    "GX": "γə¹",
    "GHC": "ɣjɨ¹",
    "explanationEN": "farm animal; ox; cattle",
    "explanationCN": "耕畜;牛;牛"
  },
  {
    "character": "𗜿",
    "GX": "tshe²",
    "GHC": "tshjij²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗟂",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "skeleton",
    "explanationCN": "骨架"
  },
  {
    "character": "𗛾",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗝙",
    "GX": "rtso̱ṃr¹",
    "GHC": "tsowr¹",
    "explanationEN": "thorn; splinter",
    "explanationCN": "刺;碎片"
  },
  {
    "character": "𗞂",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "calabash",
    "explanationCN": "葫芦"
  },
  {
    "character": "𗞃",
    "GX": "ndə̱¹",
    "GHC": "də̱¹",
    "explanationEN": "stinking; smelly",
    "explanationCN": "臭;臭"
  },
  {
    "character": "𗞺",
    "GX": "lhoṃ¹",
    "GHC": "lhjow¹",
    "explanationEN": "broom; to sweep",
    "explanationCN": "扫帚;清扫"
  },
  {
    "character": "𗟆",
    "GX": "lhoṃ¹",
    "GHC": "¹",
    "explanationEN": "broom; to sweep",
    "explanationCN": "扫帚;清扫"
  },
  {
    "character": "𗜘",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "near",
    "explanationCN": "近"
  },
  {
    "character": "𗞓",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "cherry",
    "explanationCN": "樱桃"
  },
  {
    "character": "𗞚",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "thin; emaciated",
    "explanationCN": "薄;瘦弱"
  },
  {
    "character": "𗞾",
    "GX": "qwo̱ṃ²",
    "GHC": "kwow²",
    "explanationEN": "be destroyed",
    "explanationCN": "被销毁"
  },
  {
    "character": "𗝬",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "railing; bainster",
    "explanationCN": "栏杆;班斯特"
  },
  {
    "character": "𗞈",
    "GX": "bai̱²",
    "GHC": "bie²",
    "explanationEN": "grape",
    "explanationCN": "葡萄"
  },
  {
    "character": "𗞤",
    "GX": "rŋwi̱r²",
    "GHC": "ŋwer²",
    "explanationEN": "seedling; young plant",
    "explanationCN": "幼苗;苗"
  },
  {
    "character": "𗝿",
    "GX": "tśhe¹",
    "GHC": "tśhjij¹",
    "explanationEN": "to hold.ᴀ; to grasp.ᴀ",
    "explanationCN": "持有。抓住。"
  },
  {
    "character": "𗞄",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "a kind of plant",
    "explanationCN": "一种植物"
  },
  {
    "character": "𗞬",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗟈",
    "GX": "mmə²",
    "GHC": "mjɨ̱²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗟇",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "tea",
    "explanationCN": "茶"
  },
  {
    "character": "𘚐",
    "GX": "so̱ṃ¹",
    "GHC": "sow¹",
    "explanationEN": "white mulberry; mulberry",
    "explanationCN": "桑;桑树"
  },
  {
    "character": "𗚘",
    "GX": "rtsir¹",
    "GHC": "tsjir¹",
    "explanationEN": "small dish",
    "explanationCN": "碟"
  },
  {
    "character": "𗚈",
    "GX": "γa̱²",
    "GHC": "ɣa²",
    "explanationEN": "rice steamer",
    "explanationCN": "蒸米机"
  },
  {
    "character": "𗚗",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "sandalwood",
    "explanationCN": "檀香"
  },
  {
    "character": "𗚊",
    "GX": "rŋu̱r¹",
    "GHC": "¹",
    "explanationEN": "head; junction",
    "explanationCN": "头;结"
  },
  {
    "character": "𗛮",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "to bend over; to subdue",
    "explanationCN": "弯腰;制服"
  },
  {
    "character": "𗛌",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "to do",
    "explanationCN": "待办事项"
  },
  {
    "character": "𗚕",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛿",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "song",
    "explanationCN": "歌"
  },
  {
    "character": "𗜽",
    "GX": "rər¹",
    "GHC": "rjɨr¹",
    "explanationEN": "to flog; to torture; to beat",
    "explanationCN": "鞭打;折磨;击败"
  },
  {
    "character": "𗝽",
    "GX": "mpho²",
    "GHC": "phjo̱²",
    "explanationEN": "table; frame",
    "explanationCN": "桌子;框架"
  },
  {
    "character": "𗜛",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "cork",
    "explanationCN": "软木"
  },
  {
    "character": "𗝤",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "plate; board",
    "explanationCN": "盘子;板"
  },
  {
    "character": "𗝮",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "rake",
    "explanationCN": "耙"
  },
  {
    "character": "𗞿",
    "GX": "tshwe¹",
    "GHC": "tshjwij¹",
    "explanationEN": "brittle; crisp",
    "explanationCN": "脆;脆"
  },
  {
    "character": "𗟎",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "winding corridor",
    "explanationCN": "蜿蜒走廊"
  },
  {
    "character": "𗟌",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "to hold; to contain; to sink; to get stuck",
    "explanationCN": "持有;遏制;沉没;卡住"
  },
  {
    "character": "𗛺",
    "GX": "γao̱h¹",
    "GHC": "ˑiọ¹",
    "explanationEN": "round",
    "explanationCN": "圆"
  },
  {
    "character": "𗜣",
    "GX": "lluh¹",
    "GHC": "ljụ¹",
    "explanationEN": "night; evening",
    "explanationCN": "晚上;傍晚"
  },
  {
    "character": "𗜫",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𗞅",
    "GX": "tśwaṃ¹",
    "GHC": "tśjwã¹",
    "explanationEN": "to turn; to rotate",
    "explanationCN": "转身;旋转"
  },
  {
    "character": "𗜧",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "hole; cavity; tube",
    "explanationCN": "洞;腔;管"
  },
  {
    "character": "𗚶",
    "GX": "nẓau̱¹",
    "GHC": "źju̱¹",
    "explanationEN": "thorn; splinter",
    "explanationCN": "刺;碎片"
  },
  {
    "character": "𗚣",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞥",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "to sing",
    "explanationCN": "唱歌"
  },
  {
    "character": "𗝢",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗞟",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "fruit",
    "explanationCN": "水果"
  },
  {
    "character": "𗛴",
    "GX": "nae̱h²",
    "GHC": "ŋẹj²",
    "explanationEN": "seedling",
    "explanationCN": "幼苗"
  },
  {
    "character": "𗚪",
    "GX": "bi̱¹",
    "GHC": "be¹",
    "explanationEN": "to dispatch; to send",
    "explanationCN": "调度;发送"
  },
  {
    "character": "𗜥",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "a kind of plant",
    "explanationCN": "一种植物"
  },
  {
    "character": "𗜉",
    "GX": "yə¹",
    "GHC": "ˑjɨ¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗜰",
    "GX": "tsu̱ṃ¹",
    "GHC": "tsũ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗝫",
    "GX": "qhai̱w²",
    "GHC": "khiew²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛏",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "to come; to invite",
    "explanationCN": "来;邀请"
  },
  {
    "character": "𗜲",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "lacquer",
    "explanationCN": "漆"
  },
  {
    "character": "𗝣",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "chess or any board game",
    "explanationCN": "国际象棋或任何棋盘游戏"
  },
  {
    "character": "𗚼",
    "GX": "tsha̱ṃ¹",
    "GHC": "tshã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗛸",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "burnt; charred",
    "explanationCN": "烧毁;烧 焦"
  },
  {
    "character": "𗛵",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "small; little",
    "explanationCN": "小;小"
  },
  {
    "character": "𗝀",
    "GX": "tshe²",
    "GHC": "tshjij²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞽",
    "GX": "baa̱¹",
    "GHC": "bia¹",
    "explanationEN": "to burst; to break; to crack",
    "explanationCN": "爆裂;打破;破解"
  },
  {
    "character": "𗚐",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "willow",
    "explanationCN": "柳树"
  },
  {
    "character": "𗛻",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "maroon; chestnut color",
    "explanationCN": "栗色;栗色"
  },
  {
    "character": "𗞋",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r²",
    "explanationEN": "table; desk",
    "explanationCN": "桌子;书桌"
  },
  {
    "character": "𗛊",
    "GX": "śah¹",
    "GHC": "śjạ¹",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𗛲",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "border; boundary",
    "explanationCN": "边境;边界"
  },
  {
    "character": "𗜩",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗝡",
    "GX": "nla̱¹",
    "GHC": "la¹",
    "explanationEN": "to pollute",
    "explanationCN": "污染"
  },
  {
    "character": "𗞢",
    "GX": "ba̱ṃ¹",
    "GHC": "bã¹",
    "explanationEN": "tray; plate",
    "explanationCN": "托盘;盘子"
  },
  {
    "character": "𗞦",
    "GX": "rkur¹",
    "GHC": "kjur¹",
    "explanationEN": "to smoke (meat); to fumigate",
    "explanationCN": "抽烟（肉）;熏蒸"
  },
  {
    "character": "𗜀",
    "GX": "tsi̱w¹",
    "GHC": "tsew¹",
    "explanationEN": "alcoholic drink; wine",
    "explanationCN": "酒;酒"
  },
  {
    "character": "𗜷",
    "GX": "mbo̱²",
    "GHC": "bo̱²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗜸",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "a classifier",
    "explanationCN": "分类器"
  },
  {
    "character": "𗟊",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "wood used to make saddle",
    "explanationCN": "用于制作马鞍的木材"
  },
  {
    "character": "𗝯",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "rake",
    "explanationCN": "耙"
  },
  {
    "character": "𗞖",
    "GX": "fiṃ¹",
    "GHC": "xjwĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗜾",
    "GX": "yih¹",
    "GHC": "ˑjị¹",
    "explanationEN": "ladle; scoop",
    "explanationCN": "钢包;舀"
  },
  {
    "character": "𗝷",
    "GX": "qi̱w²",
    "GHC": "kew²",
    "explanationEN": "the fruit of Chinese wolfberry",
    "explanationCN": "中国枸杞的果实"
  },
  {
    "character": "𗛢",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "railing; banister",
    "explanationCN": "栏杆;栏杆"
  },
  {
    "character": "𗛂",
    "GX": "śwu²",
    "GHC": "śjwu²",
    "explanationEN": "able and virtuous",
    "explanationCN": "能干有德"
  },
  {
    "character": "𗛁",
    "GX": "mbi̱¹",
    "GHC": "be̱¹",
    "explanationEN": "chestnut",
    "explanationCN": "板栗"
  },
  {
    "character": "𗞀",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "to smile; to laugh",
    "explanationCN": "微笑;笑"
  },
  {
    "character": "𗟐",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "tangerine",
    "explanationCN": "橘子"
  },
  {
    "character": "𗟁",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "wine",
    "explanationCN": "酒"
  },
  {
    "character": "𗝲",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "melon",
    "explanationCN": "瓜"
  },
  {
    "character": "𗟃",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "to play; to make fun of",
    "explanationCN": "玩;取笑"
  },
  {
    "character": "𗟅",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛣",
    "GX": "lo̱ṃ¹",
    "GHC": "low¹",
    "explanationEN": "to sway; to swing",
    "explanationCN": "摇摆;摆动"
  },
  {
    "character": "𗞞",
    "GX": "da²",
    "GHC": "dja²",
    "explanationEN": "PFV; IMP",
    "explanationCN": "PFV;小鬼"
  },
  {
    "character": "𗚩",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "road; way",
    "explanationCN": "路;道路"
  },
  {
    "character": "𗛰",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "three",
    "explanationCN": "三"
  },
  {
    "character": "𗛭",
    "GX": "tu̱¹",
    "GHC": "tu¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗜤",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞇",
    "GX": "tśho¹",
    "GHC": "tśhjo¹",
    "explanationEN": "to go; to walk",
    "explanationCN": "去;走路"
  },
  {
    "character": "𗜪",
    "GX": "li̱w¹",
    "GHC": "lew¹",
    "explanationEN": "building",
    "explanationCN": "建筑"
  },
  {
    "character": "𗜜",
    "GX": "yo²",
    "GHC": "ˑjo²",
    "explanationEN": "to seek.ʙ; to search.ʙ",
    "explanationCN": "寻找。进行搜索。"
  },
  {
    "character": "𗚝",
    "GX": "dzi̱²",
    "GHC": "dze²",
    "explanationEN": "thistles and thorns; brambles",
    "explanationCN": "蒺藜和荆棘;棘"
  },
  {
    "character": "𗛔",
    "GX": "nẓau̱¹",
    "GHC": "źju̱¹",
    "explanationEN": "hedgehog",
    "explanationCN": "刺猬"
  },
  {
    "character": "𗝱",
    "GX": "rvwe̱r²",
    "GHC": "wejr²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞩",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "bag; pocket",
    "explanationCN": "袋;口袋"
  },
  {
    "character": "𗜼",
    "GX": "zeṃh²",
    "GHC": "ljịj²",
    "explanationEN": "to hold.ʙ",
    "explanationCN": "保持。"
  },
  {
    "character": "𗞮",
    "GX": "ndi²",
    "GHC": "dji̱²",
    "explanationEN": "furniture; board",
    "explanationCN": "家具;板"
  },
  {
    "character": "𗝈",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "roof beam; eaves",
    "explanationCN": "梁;屋檐"
  },
  {
    "character": "𗛎",
    "GX": "dzo̱²",
    "GHC": "dzjo²",
    "explanationEN": "trough",
    "explanationCN": "槽"
  },
  {
    "character": "𗞧",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "shaft of arrow",
    "explanationCN": "箭杆"
  },
  {
    "character": "𗞸",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞏",
    "GX": "nwu̱h¹",
    "GHC": "nwụ¹",
    "explanationEN": "a tongue of flame",
    "explanationCN": "火舌"
  },
  {
    "character": "𗚷",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗝝",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "four",
    "explanationCN": "四"
  },
  {
    "character": "𗞶",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "rake",
    "explanationCN": "耙"
  },
  {
    "character": "𗞵",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "wooden framework; wooden rack",
    "explanationCN": "木制框架;木架"
  },
  {
    "character": "𗜙",
    "GX": "tśe²",
    "GHC": "tśjij²",
    "explanationEN": "to hold; to grasp",
    "explanationCN": "持有;掌握"
  },
  {
    "character": "𗝛",
    "GX": "rni̱r²",
    "GHC": "ner²",
    "explanationEN": "plum",
    "explanationCN": "李子"
  },
  {
    "character": "𗝵",
    "GX": "γae̱¹",
    "GHC": "ɣjej¹",
    "explanationEN": "stake; pile",
    "explanationCN": "桩;桩"
  },
  {
    "character": "𗜻",
    "GX": "dwu̱²",
    "GHC": "dwu²",
    "explanationEN": "chopsticks",
    "explanationCN": "筷子"
  },
  {
    "character": "𗝭",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "stake; pile",
    "explanationCN": "桩;桩"
  },
  {
    "character": "𗜮",
    "GX": "nllu¹",
    "GHC": "lju̱¹",
    "explanationEN": "to gamble; to fight for",
    "explanationCN": "赌博;为之奋斗"
  },
  {
    "character": "𗜭",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "hair",
    "explanationCN": "毛"
  },
  {
    "character": "𗜃",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "to borrow money; to raise a loan",
    "explanationCN": "借钱;筹集贷款"
  },
  {
    "character": "𗛬",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗛷",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "white fir",
    "explanationCN": "白冷杉"
  },
  {
    "character": "𗜶",
    "GX": "nvwi̱¹",
    "GHC": "we̱¹",
    "explanationEN": "debt",
    "explanationCN": "债务"
  },
  {
    "character": "𗛍",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "to break; to snap",
    "explanationCN": "打破;捕捉"
  },
  {
    "character": "𗞆",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "heavy burden",
    "explanationCN": "重担"
  },
  {
    "character": "𗝰",
    "GX": "mma̱r¹",
    "GHC": "ma̱r¹",
    "explanationEN": "luxuriant; exuberant",
    "explanationCN": "华丽;旺盛"
  },
  {
    "character": "𗝚",
    "GX": "sə¹",
    "GHC": "sjɨ¹",
    "explanationEN": "firewood",
    "explanationCN": "柴"
  },
  {
    "character": "𗜨",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "a kind of plant",
    "explanationCN": "一种植物"
  },
  {
    "character": "𗞊",
    "GX": "mpu̱¹",
    "GHC": "pu̱¹",
    "explanationEN": "replete; full",
    "explanationCN": "充实;满"
  },
  {
    "character": "𗝟",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "post; pillar",
    "explanationCN": "发布;支柱"
  },
  {
    "character": "𗚅",
    "GX": "lluh¹",
    "GHC": "ljụ¹",
    "explanationEN": "to ring; to make a sound",
    "explanationCN": "响铃;发出声音"
  },
  {
    "character": "𗚯",
    "GX": "le̱¹",
    "GHC": "lej¹",
    "explanationEN": "to close; to shut",
    "explanationCN": "关闭;关闭"
  },
  {
    "character": "𗟀",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "mortgage; pawn",
    "explanationCN": "抵押;典当"
  },
  {
    "character": "𗜌",
    "GX": "?eṃ²",
    "GHC": "²",
    "explanationEN": "complete; all",
    "explanationCN": "完成;都"
  },
  {
    "character": "𗞒",
    "GX": "ẓwaə̱¹",
    "GHC": "źiwə¹",
    "explanationEN": "difference; disparity",
    "explanationCN": "差异;差距"
  },
  {
    "character": "𗟉",
    "GX": "ẓwaə̱¹",
    "GHC": "źiwə¹",
    "explanationEN": "nipple; teat",
    "explanationCN": ";奶嘴"
  },
  {
    "character": "𗟓",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗝑",
    "GX": "dẓaa̱¹",
    "GHC": "dźia¹",
    "explanationEN": "walnut",
    "explanationCN": "核桃"
  },
  {
    "character": "𗟄",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "pine; pine tree",
    "explanationCN": "松;松树"
  },
  {
    "character": "𗜵",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "railing; banister",
    "explanationCN": "栏杆;栏杆"
  },
  {
    "character": "𗜎",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to bind; to tie up",
    "explanationCN": "绑定;捆绑"
  },
  {
    "character": "𗞘",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "trousseau",
    "explanationCN": "嫁妆"
  },
  {
    "character": "𗜔",
    "GX": "dẓaa̱²",
    "GHC": "dźia²",
    "explanationEN": "disorderly; coarse",
    "explanationCN": "乱;粗"
  },
  {
    "character": "𗝂",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "central room",
    "explanationCN": "中央客房"
  },
  {
    "character": "𗝶",
    "GX": "tśa²",
    "GHC": "tśja²",
    "explanationEN": "button",
    "explanationCN": "按钮"
  },
  {
    "character": "𗝾",
    "GX": "teṃh¹",
    "GHC": "tjɨ̣j¹",
    "explanationEN": "to advance; to strive",
    "explanationCN": "前进;努力"
  },
  {
    "character": "𗞁",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "post; pillar",
    "explanationCN": "发布;支柱"
  },
  {
    "character": "𗛒",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "eulogy; praise",
    "explanationCN": "悼词;赞美"
  },
  {
    "character": "𗜈",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "to hold.ᴀ",
    "explanationCN": "保持。"
  },
  {
    "character": "𗝸",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "human skeleton; ghost",
    "explanationCN": "人体骨骼;鬼"
  },
  {
    "character": "𗝇",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "confidence; trust; faith",
    "explanationCN": "信心;信任;信仰"
  },
  {
    "character": "𗛫",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "to bathe; to wash",
    "explanationCN": "洗澡;洗涤"
  },
  {
    "character": "𗛼",
    "GX": "rtwə̱r¹",
    "GHC": "twər¹",
    "explanationEN": "tree tumor",
    "explanationCN": "树木肿瘤"
  },
  {
    "character": "𗛖",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "brambles",
    "explanationCN": "棘"
  },
  {
    "character": "𗝆",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "general name for certain musical instruments",
    "explanationCN": "某些乐器的通用名称"
  },
  {
    "character": "𗜐",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "fire",
    "explanationCN": "火灾"
  },
  {
    "character": "𗚮",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗝋",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "pole; staff",
    "explanationCN": "极;员工"
  },
  {
    "character": "𗚍",
    "GX": "dzwaṃ¹",
    "GHC": "dźjwã¹",
    "explanationEN": "rafter",
    "explanationCN": "椽"
  },
  {
    "character": "𗚸",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "urgent; pressing",
    "explanationCN": "紧急;紧迫"
  },
  {
    "character": "𗚜",
    "GX": "pu²",
    "GHC": "pju²",
    "explanationEN": "to burn.ᴀ",
    "explanationCN": "燃烧。"
  },
  {
    "character": "𗛓",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗜏",
    "GX": "mmə̱¹",
    "GHC": "¹",
    "explanationEN": "fire",
    "explanationCN": "火灾"
  },
  {
    "character": "𗛦",
    "GX": "qhai̱¹",
    "GHC": "khie¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗜴",
    "GX": "qhau̱¹",
    "GHC": "khu¹",
    "explanationEN": "crooked; hollow",
    "explanationCN": "歪;空心"
  },
  {
    "character": "𗝪",
    "GX": "ka̱ṃ¹",
    "GHC": "kã¹",
    "explanationEN": "pole; rod",
    "explanationCN": "极;杆"
  },
  {
    "character": "𗜳",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗞰",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "faith; trust; confidence",
    "explanationCN": "信仰;信任;信心"
  },
  {
    "character": "𗚞",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗞛",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "to burst apart; to collapse",
    "explanationCN": "爆裂;折叠"
  },
  {
    "character": "𘜭",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "head; junction",
    "explanationCN": "头;结"
  },
  {
    "character": "𗛱",
    "GX": "śiṃ¹",
    "GHC": "śjĩ¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𘜲",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "cool; cold",
    "explanationCN": "凉;冷"
  },
  {
    "character": "𗚲",
    "GX": "rtsər¹",
    "GHC": "tsjɨ̱r¹",
    "explanationEN": "litchi",
    "explanationCN": "荔枝"
  },
  {
    "character": "𗝊",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "roof beam",
    "explanationCN": "梁"
  },
  {
    "character": "𗜊",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "fear; dread",
    "explanationCN": "恐惧;恐惧"
  },
  {
    "character": "𗜢",
    "GX": "twi̱h²",
    "GHC": "twẹ²",
    "explanationEN": "roof beam",
    "explanationCN": "梁"
  },
  {
    "character": "𘚍",
    "GX": "khə¹",
    "GHC": "khjɨ¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𘜰",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "belt or band for saddles",
    "explanationCN": "用于马鞍的皮带或带"
  },
  {
    "character": "𘚓",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "to bear (a burden); to carry on a shoulder pole",
    "explanationCN": "承担（负担）;携带肩杆"
  },
  {
    "character": "𘒿",
    "GX": "lwi̱¹",
    "GHC": "lwe¹",
    "explanationEN": "to hinder; to obstruct",
    "explanationCN": "阻碍;阻碍"
  },
  {
    "character": "𘓈",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "seed; race",
    "explanationCN": "种子;比赛"
  },
  {
    "character": "𘓂",
    "GX": "ləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "what; who; where",
    "explanationCN": "什么;谁;哪里"
  },
  {
    "character": "𘓀",
    "GX": "lwi̱¹",
    "GHC": "lwe¹",
    "explanationEN": "to forget",
    "explanationCN": "忘记"
  },
  {
    "character": "𘓄",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "auspicious",
    "explanationCN": "吉祥"
  },
  {
    "character": "𘓃",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "murderer; homicide; to kill",
    "explanationCN": "凶手;杀人;杀人"
  },
  {
    "character": "𘜵",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "to swear; to abuse",
    "explanationCN": "发誓;滥用"
  },
  {
    "character": "𗘲",
    "GX": "reṃ²",
    "GHC": "rjɨr²",
    "explanationEN": "pavilion",
    "explanationCN": "亭"
  },
  {
    "character": "𘚏",
    "GX": "swo¹",
    "GHC": "sjwo¹",
    "explanationEN": "inkstone; inkslab",
    "explanationCN": "砚;印制板"
  },
  {
    "character": "𘞖",
    "GX": "nsi̱w²",
    "GHC": "se̱w²",
    "explanationEN": "to demand; to ask for",
    "explanationCN": "要求;要求"
  },
  {
    "character": "𗴌",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "that; it; he",
    "explanationCN": "那;它;他"
  },
  {
    "character": "𘓁",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "CONC: conjunction means “and”",
    "explanationCN": "CONC;"
  },
  {
    "character": "𘜷",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "south",
    "explanationCN": "南"
  },
  {
    "character": "𘚑",
    "GX": "so̱ṃ¹",
    "GHC": "sow¹",
    "explanationEN": "broken",
    "explanationCN": "破碎"
  },
  {
    "character": "𘜹",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "empress; queen",
    "explanationCN": "皇后;女王"
  },
  {
    "character": "𗴋",
    "GX": "kwaṃ¹",
    "GHC": "kjwã¹",
    "explanationEN": "chapter; volume",
    "explanationCN": "章;卷"
  },
  {
    "character": "𘜴",
    "GX": "mma²",
    "GHC": "mja̱²",
    "explanationEN": "big; large",
    "explanationCN": "大;大"
  },
  {
    "character": "𗘴",
    "GX": "mmu²",
    "GHC": "mju̱²",
    "explanationEN": "to move; to stir",
    "explanationCN": "移动;搅拌"
  },
  {
    "character": "𗵺",
    "GX": "vwa̱h¹",
    "GHC": "wạ¹",
    "explanationEN": "to win; to gain",
    "explanationCN": "为了胜利;获得"
  },
  {
    "character": "𘟊",
    "GX": "dzoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "a place to put corpse",
    "explanationCN": "安放尸体的地方"
  },
  {
    "character": "𘚎",
    "GX": "dźiw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "to wash; to bathe",
    "explanationCN": "洗涤;去洗澡"
  },
  {
    "character": "𘜺",
    "GX": "rə̱r²",
    "GHC": "rər²",
    "explanationEN": "north",
    "explanationCN": "北"
  },
  {
    "character": "𘜳",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘴈",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "wild goose",
    "explanationCN": "雁"
  },
  {
    "character": "𘜶",
    "GX": "lleh²",
    "GHC": "ljịj²",
    "explanationEN": "big; great; large",
    "explanationCN": "大;伟大;大"
  },
  {
    "character": "𗘵",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "to butcher; to cut",
    "explanationCN": "屠夫;剪切"
  },
  {
    "character": "𗍣",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "to break; to snap",
    "explanationCN": "打破;捕捉"
  },
  {
    "character": "𗘳",
    "GX": "ndu²",
    "GHC": "dju̱²",
    "explanationEN": "to stab; to penetrate",
    "explanationCN": "刺伤;穿透"
  },
  {
    "character": "𘚒",
    "GX": "so̱ṃ¹",
    "GHC": "sow¹",
    "explanationEN": "fresh; clean",
    "explanationCN": "新鲜;干净"
  },
  {
    "character": "𘞔",
    "GX": "rphar¹",
    "GHC": "phjar¹",
    "explanationEN": "crew cut",
    "explanationCN": "平头"
  },
  {
    "character": "𘓅",
    "GX": "khə²",
    "GHC": "khjɨ²",
    "explanationEN": "toil; hard work",
    "explanationCN": "辛劳;苦功"
  },
  {
    "character": "𘓆",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "to discuss; to forecast; to predict",
    "explanationCN": "讨论;预测;预测"
  },
  {
    "character": "𘓇",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "toil; hard work",
    "explanationCN": "辛劳;苦功"
  },
  {
    "character": "𘜮",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "a unit of measurement",
    "explanationCN": "测量单位"
  },
  {
    "character": "𘜸",
    "GX": "tshə̱¹",
    "GHC": "tshə¹",
    "explanationEN": "temple",
    "explanationCN": "寺庙"
  },
  {
    "character": "𘜱",
    "GX": "thəh²",
    "GHC": "thjɨ̣²",
    "explanationEN": "belt; band",
    "explanationCN": "带;乐队"
  },
  {
    "character": "𗶹",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "PFV: to go",
    "explanationCN": "去₂"
  },
  {
    "character": "𗷂",
    "GX": "ẓai̱²",
    "GHC": "śie²",
    "explanationEN": "to pursue",
    "explanationCN": "追求"
  },
  {
    "character": "𗶺",
    "GX": "fu¹",
    "GHC": "xju¹",
    "explanationEN": "to blow; to puff",
    "explanationCN": "吹;吹嘘"
  },
  {
    "character": "𗶵",
    "GX": "ẓai̱²",
    "GHC": "śie²",
    "explanationEN": "to mate",
    "explanationCN": "交配"
  },
  {
    "character": "𗶳",
    "GX": "ŋkho²",
    "GHC": "khjo̱²",
    "explanationEN": "to look; to see",
    "explanationCN": "去看;看"
  },
  {
    "character": "𗶾",
    "GX": "ye²",
    "GHC": "ˑjij²",
    "explanationEN": "to go",
    "explanationCN": "要走"
  },
  {
    "character": "𗶴",
    "GX": "ha̱?",
    "GHC": "xa?",
    "explanationEN": "to puff; to blow",
    "explanationCN": "吹嘘;吹"
  },
  {
    "character": "𗷕",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "all over",
    "explanationCN": "到处"
  },
  {
    "character": "𗷄",
    "GX": "źo¹",
    "GHC": "źjo¹",
    "explanationEN": "to get over; to jump over",
    "explanationCN": "克服;跳越"
  },
  {
    "character": "𗶲",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "to flee; to run away",
    "explanationCN": "逃跑;逃跑"
  },
  {
    "character": "𗶱",
    "GX": "tśoh¹",
    "GHC": "tśjọ¹",
    "explanationEN": "to wait upon; to attend upon",
    "explanationCN": "等待;参加"
  },
  {
    "character": "𗷎",
    "GX": "rqa̱r²",
    "GHC": "kar²",
    "explanationEN": "to separate; to distinguish",
    "explanationCN": "分离;以区分"
  },
  {
    "character": "𗶷",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "to go toward; to depart",
    "explanationCN": "去;出发"
  },
  {
    "character": "𗶻",
    "GX": "śwəh²",
    "GHC": "śjwiw²",
    "explanationEN": "to accompany; to attend",
    "explanationCN": "陪伴;参加"
  },
  {
    "character": "𗷈",
    "GX": "tə̱¹",
    "GHC": "tə¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶿",
    "GX": "lhoṃ¹",
    "GHC": "lhjow¹",
    "explanationEN": "to go toward; to depart",
    "explanationCN": "去;出发"
  },
  {
    "character": "𗷖",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "to give alms; to give as a present",
    "explanationCN": "施舍;作为礼物赠送"
  },
  {
    "character": "𗷑",
    "GX": "mphi²",
    "GHC": "phji̱²",
    "explanationEN": "sensitive; dexterous",
    "explanationCN": "灵敏;灵巧"
  },
  {
    "character": "𗷔",
    "GX": "twu̱¹",
    "GHC": "twu¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶽",
    "GX": "śə²",
    "GHC": "śjɨ²",
    "explanationEN": "slight; tiny; rare",
    "explanationCN": "轻微;小;罕见"
  },
  {
    "character": "𗷆",
    "GX": "mphi¹",
    "GHC": "phji̱¹",
    "explanationEN": "to make; to enable; to cause",
    "explanationCN": "使;启用;原因"
  },
  {
    "character": "𗷇",
    "GX": "mphi²",
    "GHC": "phji̱²",
    "explanationEN": "to flatter; to fawn",
    "explanationCN": "奉承;讨好"
  },
  {
    "character": "𗷃",
    "GX": "dźeh²",
    "GHC": "dźjịj²",
    "explanationEN": "to fight; to struggle",
    "explanationCN": "去战斗;挣扎"
  },
  {
    "character": "𗶼",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𗷍",
    "GX": "dźeh²",
    "GHC": "dźjịj²",
    "explanationEN": "jokes",
    "explanationCN": "笑话"
  },
  {
    "character": "𗷌",
    "GX": "ti̱¹",
    "GHC": "te¹",
    "explanationEN": "to run",
    "explanationCN": "运行"
  },
  {
    "character": "𗷏",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "to offer; to send back",
    "explanationCN": "提供;寄回"
  },
  {
    "character": "𗶶",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "to traffic; to peddle; to sell",
    "explanationCN": "到交通;兜售;出售"
  },
  {
    "character": "𗷁",
    "GX": "ndza̱¹",
    "GHC": "dza̱¹",
    "explanationEN": "far",
    "explanationCN": "远"
  },
  {
    "character": "𗶸",
    "GX": "zo²",
    "GHC": "źjo²",
    "explanationEN": "to sell",
    "explanationCN": "出售"
  },
  {
    "character": "𗷐",
    "GX": "hwi̱¹",
    "GHC": "xwe¹",
    "explanationEN": "to drive out; to expel",
    "explanationCN": "驱赶出去;驱逐"
  },
  {
    "character": "𗷀",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "to weave",
    "explanationCN": "编织"
  },
  {
    "character": "𗷉",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "the moon",
    "explanationCN": "月亮"
  },
  {
    "character": "𗷅",
    "GX": "śə²",
    "GHC": "śjɨ²",
    "explanationEN": "curtain; screen",
    "explanationCN": "窗帘;屏幕"
  },
  {
    "character": "𘜬",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "to send; to tell somebody to do",
    "explanationCN": "发送;告诉某人去做"
  },
  {
    "character": "𘜫",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "servant",
    "explanationCN": "仆人"
  },
  {
    "character": "𗄝",
    "GX": "qai̱ṃ¹",
    "GHC": "kiẽ¹",
    "explanationEN": "earlobe",
    "explanationCN": "耳垂"
  },
  {
    "character": "𗄨",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "to burn; to ignite; to light",
    "explanationCN": "燃烧;点燃;到光"
  },
  {
    "character": "𗀚",
    "GX": "ẓao̱¹",
    "GHC": "śio¹",
    "explanationEN": "to guide; to lead",
    "explanationCN": "引导;领导"
  },
  {
    "character": "𗠇",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to eat; food",
    "explanationCN": "吃;食物"
  },
  {
    "character": "𗠎",
    "GX": "qhə̱¹",
    "GHC": "khə¹",
    "explanationEN": "meat stuffing; sausage",
    "explanationCN": "肉馅;香肠"
  },
  {
    "character": "𗸢",
    "GX": "twa̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗠒",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "tall; high",
    "explanationCN": "高;高"
  },
  {
    "character": "𗡐",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "to interrogate",
    "explanationCN": "审讯"
  },
  {
    "character": "𗡄",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "to drink; to eat; food",
    "explanationCN": "喝酒;吃;食物"
  },
  {
    "character": "𗠬",
    "GX": "dźwiw²",
    "GHC": "²",
    "explanationEN": "hungry",
    "explanationCN": "饿"
  },
  {
    "character": "𘉏",
    "GX": "tsho̱ṃh²",
    "GHC": "tshọ²",
    "explanationEN": "void; empty",
    "explanationCN": "无效;空"
  },
  {
    "character": "𗀢",
    "GX": "ẓao̱²",
    "GHC": "śio²",
    "explanationEN": "to drive; to expel",
    "explanationCN": "开车;驱逐"
  },
  {
    "character": "𗡅",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "to eat.ᴀ",
    "explanationCN": "吃。"
  },
  {
    "character": "𗡎",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "fragrant",
    "explanationCN": "香"
  },
  {
    "character": "𗠜",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "to shout; to cry; to yell",
    "explanationCN": "大喊大叫;哭泣;大喊大叫"
  },
  {
    "character": "𗠪",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "to command; to direct",
    "explanationCN": "命令;直接"
  },
  {
    "character": "𗡈",
    "GX": "ryawr²",
    "GHC": "ˑja̱r²",
    "explanationEN": "to cry; to shout",
    "explanationCN": "哭泣;大喊大叫"
  },
  {
    "character": "𘉜",
    "GX": "tsho̱ṃh²",
    "GHC": "tshọ²",
    "explanationEN": "to fear; to terrify",
    "explanationCN": "恐惧;吓唬"
  },
  {
    "character": "𗡃",
    "GX": "tshe̱²",
    "GHC": "tshej²",
    "explanationEN": "incomplete; imperfect",
    "explanationCN": "不完全的;缺"
  },
  {
    "character": "𗄠",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "leader; host",
    "explanationCN": "领导;主机"
  },
  {
    "character": "𗢅",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "clean; spotless",
    "explanationCN": "干净;一尘不染"
  },
  {
    "character": "𗺄",
    "GX": "ma̱²",
    "GHC": "ma²",
    "explanationEN": "greasy; smooth",
    "explanationCN": "腻;光滑"
  },
  {
    "character": "𗄦",
    "GX": "dẓae̱h²",
    "GHC": "dźiẹj²",
    "explanationEN": "wizard",
    "explanationCN": "巫师"
  },
  {
    "character": "𗄟",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "a kind of official position",
    "explanationCN": "一种官职"
  },
  {
    "character": "𗄡",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "scorched; burnt",
    "explanationCN": "烧 焦;烧毁"
  },
  {
    "character": "𗠆",
    "GX": "pao̱¹",
    "GHC": "pio¹",
    "explanationEN": "thunderbolt; thunderclap",
    "explanationCN": "霹雳;霹雳"
  },
  {
    "character": "𗡙",
    "GX": "yo̱ṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "to extol; to praise",
    "explanationCN": "赞美;赞美"
  },
  {
    "character": "𗠵",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "thirst",
    "explanationCN": "口渴"
  },
  {
    "character": "𗠭",
    "GX": "qai̱¹",
    "GHC": "kie¹",
    "explanationEN": "to shout; to call out",
    "explanationCN": "大喊大叫;呼唤"
  },
  {
    "character": "𗠫",
    "GX": "dźwiw²",
    "GHC": "dźjwiw²",
    "explanationEN": "hungry",
    "explanationCN": "饿"
  },
  {
    "character": "𗡉",
    "GX": "bi̱h²",
    "GHC": "bẹ²",
    "explanationEN": "to instigate; to abet",
    "explanationCN": "煽动;教唆"
  },
  {
    "character": "𗄤",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "wizard; witch; sorcerer",
    "explanationCN": "巫师;女巫;巫师"
  },
  {
    "character": "𗀛",
    "GX": "khi¹",
    "GHC": "¹",
    "explanationEN": "to open; to shine upon",
    "explanationCN": "打开;闪耀"
  },
  {
    "character": "𗄣",
    "GX": "ŋqo̱²",
    "GHC": "ko̱²",
    "explanationEN": "crucible",
    "explanationCN": "坩埚"
  },
  {
    "character": "𗄞",
    "GX": "vəh¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "witch; wizard; sorcerer",
    "explanationCN": "女巫;巫师;巫师"
  },
  {
    "character": "𗡊",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to swallow",
    "explanationCN": "吞咽"
  },
  {
    "character": "𗠝",
    "GX": "ya̱¹",
    "GHC": "ˑja¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗠩",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "to feed",
    "explanationCN": "喂食"
  },
  {
    "character": "𗠉",
    "GX": "rmə̱r¹",
    "GHC": "mər¹",
    "explanationEN": "lips",
    "explanationCN": "嘴唇"
  },
  {
    "character": "𗄢",
    "GX": "rə̱h¹",
    "GHC": "¹",
    "explanationEN": "to distend",
    "explanationCN": "展开"
  },
  {
    "character": "𗠨",
    "GX": "dźwu²",
    "GHC": "dźjwu²",
    "explanationEN": "saliva",
    "explanationCN": "唾液"
  },
  {
    "character": "𗡗",
    "GX": "ryawr²",
    "GHC": "ˑja̱r²",
    "explanationEN": "chicken",
    "explanationCN": "鸡"
  },
  {
    "character": "𗠈",
    "GX": "dzo¹",
    "GHC": "dzjo¹",
    "explanationEN": "to eat.ʙ",
    "explanationCN": "吃。"
  },
  {
    "character": "𗀣",
    "GX": "rha̱r¹",
    "GHC": "¹",
    "explanationEN": "to open (one’s mouth)",
    "explanationCN": "张开 （一个人的嘴）"
  },
  {
    "character": "𗄧",
    "GX": "lə̱²",
    "GHC": "²",
    "explanationEN": "flea",
    "explanationCN": "跳蚤"
  },
  {
    "character": "𗄥",
    "GX": "lheh¹",
    "GHC": "lhjịj¹",
    "explanationEN": "wizard; sorcerer",
    "explanationCN": "巫师;巫师"
  },
  {
    "character": "𗠐",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "to expand; to swallow",
    "explanationCN": "扩展;吞咽"
  },
  {
    "character": "𗠑",
    "GX": "rqa̱r²",
    "GHC": "kar²",
    "explanationEN": "to bite; to chew",
    "explanationCN": "咬人;咀嚼"
  },
  {
    "character": "𗡀",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "to be greedy for money or food; to be gluttonous",
    "explanationCN": "贪财或贪食;暴饮暴食"
  },
  {
    "character": "𘚠",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "foolish; stupid",
    "explanationCN": "愚蠢;笨"
  },
  {
    "character": "𘓼",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "fire",
    "explanationCN": "火灾"
  },
  {
    "character": "𘓽",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "roast meat",
    "explanationCN": "烤肉"
  },
  {
    "character": "𘔅",
    "GX": "rzur²",
    "GHC": "zjur²",
    "explanationEN": "torch",
    "explanationCN": "炬"
  },
  {
    "character": "𗟗",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "sled; sledge; sleigh",
    "explanationCN": "雪橇;雪橇;雪橇"
  },
  {
    "character": "𗇄",
    "GX": "mi̱h²",
    "GHC": "mẹ²",
    "explanationEN": "to sprinkle; to spread; to break",
    "explanationCN": "洒;传播;打破"
  },
  {
    "character": "𗇅",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "narrow",
    "explanationCN": "窄"
  },
  {
    "character": "𘚦",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘉘",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗠓",
    "GX": "bah²",
    "GHC": "bjạ²",
    "explanationEN": "binder; barrier",
    "explanationCN": "粘结 剂;障碍"
  },
  {
    "character": "𗠿",
    "GX": "mo¹",
    "GHC": "mjo¹",
    "explanationEN": "to feed",
    "explanationCN": "喂食"
  },
  {
    "character": "𘚡",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "flea",
    "explanationCN": "跳蚤"
  },
  {
    "character": "𘉉",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "upright",
    "explanationCN": "直立"
  },
  {
    "character": "𗟛",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "leaf",
    "explanationCN": "叶"
  },
  {
    "character": "𗠔",
    "GX": "pho²",
    "GHC": "phjo²",
    "explanationEN": "causative.ʙ",
    "explanationCN": "因果关系。"
  },
  {
    "character": "𗡚",
    "GX": "tsi̱w²",
    "GHC": "tsew²",
    "explanationEN": "fast",
    "explanationCN": "快"
  },
  {
    "character": "𘉙",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "scheme; stratagem",
    "explanationCN": "方案;战略"
  },
  {
    "character": "𗠟",
    "GX": "nśo¹",
    "GHC": "śjo̱¹",
    "explanationEN": "to kill.ʙ",
    "explanationCN": "屠宰。"
  },
  {
    "character": "𗠞",
    "GX": "nwi²",
    "GHC": "njwi²",
    "explanationEN": "to swallow; to devour",
    "explanationCN": "吞咽;吞噬"
  },
  {
    "character": "𘉍",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "light; brightness",
    "explanationCN": "光;亮度"
  },
  {
    "character": "𘉑",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": " indeterminative other",
    "explanationCN": "不确定的 其他"
  },
  {
    "character": "𘉒",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "shyness; shame",
    "explanationCN": "HYP： 假设的;音译;羞耻"
  },
  {
    "character": "𗡏",
    "GX": "mmi̱¹",
    "GHC": "me̱¹",
    "explanationEN": "fragrant",
    "explanationCN": "香"
  },
  {
    "character": "𗡑",
    "GX": "mmi̱¹",
    "GHC": "me̱¹",
    "explanationEN": "to scatter; to sprinkle",
    "explanationCN": "分散;洒"
  },
  {
    "character": "𗺅",
    "GX": "sa̱¹",
    "GHC": "¹",
    "explanationEN": "to distend",
    "explanationCN": "展开"
  },
  {
    "character": "𘚥",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗠍",
    "GX": "tuh¹",
    "GHC": "tjụ¹",
    "explanationEN": "net",
    "explanationCN": "网"
  },
  {
    "character": "𗠤",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "to entertain at a banquet",
    "explanationCN": "在宴会上招待客人"
  },
  {
    "character": "𗠦",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to feed",
    "explanationCN": "喂食"
  },
  {
    "character": "𗠲",
    "GX": "ndo̱¹",
    "GHC": "do̱¹",
    "explanationEN": "to mix",
    "explanationCN": "混合"
  },
  {
    "character": "𗠹",
    "GX": "ndzi²",
    "GHC": "dzji̱²",
    "explanationEN": "to teach; to instruct",
    "explanationCN": "教导;指示"
  },
  {
    "character": "𗠌",
    "GX": "va¹",
    "GHC": "wja¹",
    "explanationEN": "to vomit; to spit",
    "explanationCN": "呕吐;吐痰"
  },
  {
    "character": "𗠄",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "to distribute food",
    "explanationCN": "分发食物"
  },
  {
    "character": "𘉐",
    "GX": "γuo¹",
    "GHC": "ˑio̱w¹",
    "explanationEN": "contribution; achievement",
    "explanationCN": "贡献;成就"
  },
  {
    "character": "𘉛",
    "GX": "dwa̱ṃ¹",
    "GHC": "dwã¹",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𗠧",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘉗",
    "GX": "γuo¹",
    "GHC": "ˑio̱w¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗢆",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗠷",
    "GX": "pho²",
    "GHC": "phjo²",
    "explanationEN": "to distinguish; to differentiate",
    "explanationCN": "以区分;差异化"
  },
  {
    "character": "𗡋",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "to cry; to weep",
    "explanationCN": "哭泣;哭泣"
  },
  {
    "character": "𗢇",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "ditch; gully",
    "explanationCN": "渠;沟壑"
  },
  {
    "character": "𘉝",
    "GX": "na²",
    "GHC": "nja²",
    "explanationEN": "to drive; to expel",
    "explanationCN": "开车;驱逐"
  },
  {
    "character": "𗠅",
    "GX": "ŋgə¹",
    "GHC": "gjɨ̱¹",
    "explanationEN": "to distribute food",
    "explanationCN": "分发食物"
  },
  {
    "character": "𗠻",
    "GX": "ntha̱r¹",
    "GHC": "tha̱r¹",
    "explanationEN": "to stutter; to stammer",
    "explanationCN": "口吃;结结巴巴"
  },
  {
    "character": "𗡒",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "a kind of food like cake",
    "explanationCN": "像蛋糕一样的食物"
  },
  {
    "character": "𗡖",
    "GX": "dźe²",
    "GHC": "²",
    "explanationEN": "fat; grease",
    "explanationCN": "脂肪;油"
  },
  {
    "character": "𗡔",
    "GX": "ŋwu̱h¹",
    "GHC": "ŋwụ¹",
    "explanationEN": "to oath; to pledge",
    "explanationCN": "宣誓;承诺"
  },
  {
    "character": "𘉞",
    "GX": "na²",
    "GHC": "nja²",
    "explanationEN": "2SG: 2nd singular indexation",
    "explanationCN": "2SG"
  },
  {
    "character": "𘉋",
    "GX": "ryar¹",
    "GHC": "ˑjar¹",
    "explanationEN": "eight",
    "explanationCN": "八"
  },
  {
    "character": "𗠃",
    "GX": "tuh¹",
    "GHC": "tjụ¹",
    "explanationEN": "saliva; spittle",
    "explanationCN": "唾液;唾沫"
  },
  {
    "character": "𗠚",
    "GX": "thae̱h²",
    "GHC": "thẹj²",
    "explanationEN": "big; extreme",
    "explanationCN": "大;极端"
  },
  {
    "character": "𗠺",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "hobby",
    "explanationCN": "爱好"
  },
  {
    "character": "𗠳",
    "GX": "ẓai̱²",
    "GHC": "śie²",
    "explanationEN": "whistle",
    "explanationCN": "哨子"
  },
  {
    "character": "𘉌",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "dew",
    "explanationCN": "露"
  },
  {
    "character": "𗠏",
    "GX": "ŋqo̱²",
    "GHC": "ko̱²",
    "explanationEN": "throat; to swallow",
    "explanationCN": "喉;吞咽"
  },
  {
    "character": "𗢄",
    "GX": "śwaṃ²",
    "GHC": "śjwã²",
    "explanationEN": "side",
    "explanationCN": "边"
  },
  {
    "character": "𗡇",
    "GX": "dźe²",
    "GHC": "²",
    "explanationEN": "food; bait",
    "explanationCN": "食物;诱饵"
  },
  {
    "character": "𗠮",
    "GX": "yaw²",
    "GHC": "ˑja̱²",
    "explanationEN": "entertaimnent",
    "explanationCN": "企业"
  },
  {
    "character": "𗠸",
    "GX": "ndə²",
    "GHC": "djɨ̱²",
    "explanationEN": "to smile; to laugh",
    "explanationCN": "微笑;笑"
  },
  {
    "character": "𗠽",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "elder brother",
    "explanationCN": "哥哥"
  },
  {
    "character": "𗡕",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "to breast-feed; to nurse",
    "explanationCN": "母乳喂养;护理"
  },
  {
    "character": "𗠾",
    "GX": "tsu̱h²",
    "GHC": "tsụ²",
    "explanationEN": "to cough",
    "explanationCN": "咳嗽"
  },
  {
    "character": "𗠼",
    "GX": "nlle²",
    "GHC": "lji̱j²",
    "explanationEN": "tasty; delicious",
    "explanationCN": "美味;美味"
  },
  {
    "character": "𗠛",
    "GX": "lhuh²",
    "GHC": "ljụ²",
    "explanationEN": "to swallow; to eat; to drink",
    "explanationCN": "吞咽;吃;喝"
  },
  {
    "character": "𗡂",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "to rear; to howl",
    "explanationCN": "向后;嚎叫"
  },
  {
    "character": "𗡁",
    "GX": "ŋah²",
    "GHC": "ŋiạ²",
    "explanationEN": "a round flat cake",
    "explanationCN": "一个圆形扁平蛋糕"
  },
  {
    "character": "𗡝",
    "GX": "ka¹",
    "GHC": "kja¹",
    "explanationEN": "how about",
    "explanationCN": "怎么样"
  },
  {
    "character": "𗠋",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "to instigate; to abet",
    "explanationCN": "煽动;教唆"
  },
  {
    "character": "𗡍",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "to spit",
    "explanationCN": "吐痰"
  },
  {
    "character": "𗠴",
    "GX": "γaa̱²",
    "GHC": "ˑia²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗸤",
    "GX": "ti̱ṃ¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘚔",
    "GX": "mme²",
    "GHC": "mji̱j²",
    "explanationEN": "below; down; tip; end",
    "explanationCN": "下面;下;提示;结束"
  },
  {
    "character": "𘉔",
    "GX": "dwa̱²",
    "GHC": "dwa²",
    "explanationEN": "to knit",
    "explanationCN": "编织"
  },
  {
    "character": "𘔄",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "to eat",
    "explanationCN": "吃"
  },
  {
    "character": "𘔉",
    "GX": "rdwə̱r²",
    "GHC": "dwər²",
    "explanationEN": "to burn; to kindle",
    "explanationCN": "燃烧;至 Kindle"
  },
  {
    "character": "𘓻",
    "GX": "ŋγi¹",
    "GHC": "ɣji̱¹",
    "explanationEN": "to cook; to boil",
    "explanationCN": "做饭;煮沸"
  },
  {
    "character": "𘚻",
    "GX": "di̱²",
    "GHC": "de²",
    "explanationEN": "happy; to like; to love",
    "explanationCN": "快乐;喜欢;去爱"
  },
  {
    "character": "𘔀",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "pot; pan",
    "explanationCN": "罐;泛"
  },
  {
    "character": "𘔈",
    "GX": "rdwə̱r¹",
    "GHC": "dwər¹",
    "explanationEN": "a kind of sore",
    "explanationCN": "一种疮"
  },
  {
    "character": "𗟙",
    "GX": "rthwə̱r¹",
    "GHC": "thwər¹",
    "explanationEN": "to burn",
    "explanationCN": "燃烧"
  },
  {
    "character": "𘟎",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "to cook; to boil",
    "explanationCN": "做饭;煮沸"
  },
  {
    "character": "𗠗",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "thunderbolt; thunderclap",
    "explanationCN": "霹雳;霹雳"
  },
  {
    "character": "𗠢",
    "GX": "mphə¹",
    "GHC": "phjɨ̱¹",
    "explanationEN": "fear; dread",
    "explanationCN": "恐惧;恐惧"
  },
  {
    "character": "𗡜",
    "GX": "keh¹",
    "GHC": "kjịj¹",
    "explanationEN": "to offer a sacrifice",
    "explanationCN": "献祭"
  },
  {
    "character": "𗠶",
    "GX": "nźə¹",
    "GHC": "źjɨ̱¹",
    "explanationEN": "to pierce through; to penetrate",
    "explanationCN": "刺穿;穿透"
  },
  {
    "character": "𗡘",
    "GX": "ndə¹",
    "GHC": "djɨ̱¹",
    "explanationEN": "frivolous",
    "explanationCN": "轻浮"
  },
  {
    "character": "𘉎",
    "GX": "dwa̱²",
    "GHC": "dwa²",
    "explanationEN": "many; much",
    "explanationCN": "多;多"
  },
  {
    "character": "𘉚",
    "GX": "dwa̱²",
    "GHC": "dwa²",
    "explanationEN": "to hide",
    "explanationCN": "隐藏"
  },
  {
    "character": "𗠊",
    "GX": "dźaṃ¹",
    "GHC": "dźjã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗠖",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "to accuse falsely",
    "explanationCN": "诬告"
  },
  {
    "character": "𗠠",
    "GX": "ndo̱²",
    "GHC": "do̱²",
    "explanationEN": "banquet; feast",
    "explanationCN": "宴会;盛宴"
  },
  {
    "character": "𘉕",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "brilliant; magnificent; glorious",
    "explanationCN": "明;宏伟;光荣"
  },
  {
    "character": "𘉖",
    "GX": "rpwər¹",
    "GHC": "pjwɨ̱r¹",
    "explanationEN": "to cheat; to deceive; to change",
    "explanationCN": "作弊;欺骗;更改"
  },
  {
    "character": "𗡛",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "coriander",
    "explanationCN": "芫荽"
  },
  {
    "character": "𗇃",
    "GX": "hwa̱²",
    "GHC": "xwa²",
    "explanationEN": "trench",
    "explanationCN": "壕"
  },
  {
    "character": "𗠕",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗠙",
    "GX": "rbaə̱r¹",
    "GHC": "biər¹",
    "explanationEN": "a kind of disease in nose",
    "explanationCN": "一种鼻子疾病"
  },
  {
    "character": "𗠥",
    "GX": "ndo¹",
    "GHC": "djo̱¹",
    "explanationEN": "to pick out; to select",
    "explanationCN": "挑出;选择"
  },
  {
    "character": "𗡆",
    "GX": "rphə̱r¹",
    "GHC": "phər¹",
    "explanationEN": "to sprinkle",
    "explanationCN": "洒"
  },
  {
    "character": "𗠯",
    "GX": "rtshar¹",
    "GHC": "tshjar¹",
    "explanationEN": "to instigate; to calumniate",
    "explanationCN": "煽动;诽谤"
  },
  {
    "character": "𘚧",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to recommend",
    "explanationCN": "推荐"
  },
  {
    "character": "𘉓",
    "GX": "bya²",
    "GHC": "bja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗡓",
    "GX": "thaw²",
    "GHC": "thja̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗠱",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "to call out; to shout",
    "explanationCN": "呼唤;大喊大叫"
  },
  {
    "character": "𗠰",
    "GX": "thi¹",
    "GHC": "thji¹",
    "explanationEN": "to drink; to eat",
    "explanationCN": "喝酒;吃"
  },
  {
    "character": "𘓿",
    "GX": "vwai̱²",
    "GHC": "wie²",
    "explanationEN": "to stew",
    "explanationCN": "炖"
  },
  {
    "character": "𘓾",
    "GX": "yaṃ¹",
    "GHC": "ˑjã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘔁",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "one of the decimal cycle of ten characters",
    "explanationCN": "十个字符的十进制循环之一"
  },
  {
    "character": "𘔂",
    "GX": "dźih¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "to burn",
    "explanationCN": "燃烧"
  },
  {
    "character": "𘔇",
    "GX": "lha̱¹",
    "GHC": "lha¹",
    "explanationEN": "to extinguish; to put out",
    "explanationCN": "扑灭;扑灭"
  },
  {
    "character": "𗟞",
    "GX": "lli̱h¹",
    "GHC": "lẹ¹",
    "explanationEN": "to boil; to cook",
    "explanationCN": "煮沸;烹饪"
  },
  {
    "character": "𘟍",
    "GX": "ẓai̱²",
    "GHC": "źie²",
    "explanationEN": "to cook; to boil",
    "explanationCN": "做饭;煮沸"
  },
  {
    "character": "𘉊",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "spinach",
    "explanationCN": "菠菜"
  },
  {
    "character": "𗠣",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "to eat; food",
    "explanationCN": "吃;食物"
  },
  {
    "character": "𗠘",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "to eat",
    "explanationCN": "吃"
  },
  {
    "character": "𗠡",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "below; down",
    "explanationCN": "下面;下"
  },
  {
    "character": "𘔃",
    "GX": "tswu¹",
    "GHC": "tsjwu¹",
    "explanationEN": "kettle",
    "explanationCN": "水壶"
  },
  {
    "character": "𘚤",
    "GX": "rthwə̱r¹",
    "GHC": "thwər¹",
    "explanationEN": "to jump",
    "explanationCN": "跳"
  },
  {
    "character": "𘝣",
    "GX": "ṇae̱ṃ¹",
    "GHC": "niəj¹",
    "explanationEN": "turbid; muddy",
    "explanationCN": "混浊;泥泞"
  },
  {
    "character": "𗒊",
    "GX": "ṇae̱ṃ²",
    "GHC": "²",
    "explanationEN": "dirt; filth",
    "explanationCN": "污垢;污秽"
  },
  {
    "character": "𘛍",
    "GX": "nwu̱¹",
    "GHC": "nwu¹",
    "explanationEN": "baby; infant",
    "explanationCN": "婴儿;婴儿"
  },
  {
    "character": "𘍐",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "toil; hard work",
    "explanationCN": "辛劳;苦功"
  },
  {
    "character": "𗐮",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "ball",
    "explanationCN": "球"
  },
  {
    "character": "𘁏",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "bull",
    "explanationCN": "牛"
  },
  {
    "character": "𗑞",
    "GX": "khiw¹",
    "GHC": "khjiw¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘖞",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "rich; wealthy",
    "explanationCN": "富;富有"
  },
  {
    "character": "𘖭",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "ploughshare",
    "explanationCN": "铧"
  },
  {
    "character": "𗐴",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "ear",
    "explanationCN": "耳朵"
  },
  {
    "character": "𗯧",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "chimney; window; hole",
    "explanationCN": "烟囱;窗;洞"
  },
  {
    "character": "𗑷",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "all",
    "explanationCN": "都"
  },
  {
    "character": "𗑉",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "eyes",
    "explanationCN": "眼睛"
  },
  {
    "character": "𗑹",
    "GX": "γa̱ṃ¹",
    "GHC": "ˑã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗓷",
    "GX": "khwaṃ¹",
    "GHC": "khjwã¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗓻",
    "GX": "rqhaa̱r¹",
    "GHC": "khiar¹",
    "explanationEN": "mist",
    "explanationCN": "雾"
  },
  {
    "character": "𘖷",
    "GX": "mah¹",
    "GHC": "mjạ¹",
    "explanationEN": "to dig; to gnaw; to bite",
    "explanationCN": "挖掘;啃;咬人"
  },
  {
    "character": "𗇝",
    "GX": "rywar¹",
    "GHC": "ˑjwar¹",
    "explanationEN": "light; glittering",
    "explanationCN": "光;闪闪 发光"
  },
  {
    "character": "𗑜",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "treasure",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗓐",
    "GX": "γəh¹",
    "GHC": "ɣjɨ̣¹",
    "explanationEN": "to rumor",
    "explanationCN": "到谣言"
  },
  {
    "character": "𗓃",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "dark",
    "explanationCN": "黑暗"
  },
  {
    "character": "𗓰",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "deep",
    "explanationCN": "深"
  },
  {
    "character": "𗑘",
    "GX": "swe̱¹",
    "GHC": "swej¹",
    "explanationEN": "clean; spotless",
    "explanationCN": "干净;一尘不染"
  },
  {
    "character": "𗒫",
    "GX": "ŋgiw¹",
    "GHC": "gji̱w¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗒨",
    "GX": "ba̱h¹",
    "GHC": "bạ¹",
    "explanationEN": "cymbals",
    "explanationCN": "钹"
  },
  {
    "character": "𗔥",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "to contend; to quarrel",
    "explanationCN": "去争辩;争吵"
  },
  {
    "character": "𗔣",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗔸",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔫",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "to meet; to encounter",
    "explanationCN": "见面;相遇"
  },
  {
    "character": "𗔟",
    "GX": "rṇar¹",
    "GHC": "n-¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔳",
    "GX": "rza̱r¹",
    "GHC": "zar¹",
    "explanationEN": "ancestor",
    "explanationCN": "祖先"
  },
  {
    "character": "𗔭",
    "GX": "rŋi̱wr²",
    "GHC": "ŋewr²",
    "explanationEN": "to get; to gain",
    "explanationCN": "得到;获得"
  },
  {
    "character": "𘁔",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "big ox (elephant)",
    "explanationCN": "大牛（大象）"
  },
  {
    "character": "𘖴",
    "GX": "tswa̱ṃ¹",
    "GHC": "tswã¹",
    "explanationEN": "to drill; to bore",
    "explanationCN": "钻孔;钻孔"
  },
  {
    "character": "𗓗",
    "GX": "ndźu²",
    "GHC": "dźju̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗒈",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj¹",
    "explanationEN": "pool; pond",
    "explanationCN": "池;池塘"
  },
  {
    "character": "𗒢",
    "GX": "ẓae̱¹",
    "GHC": "śiej¹",
    "explanationEN": "to guide; to lead",
    "explanationCN": "引导;领导"
  },
  {
    "character": "𗑼",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "end; east",
    "explanationCN": "结束;东"
  },
  {
    "character": "𗓽",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗔖",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "to slaughter; to butcher",
    "explanationCN": "屠宰;屠夫"
  },
  {
    "character": "𗔴",
    "GX": "ryur²",
    "GHC": "ˑjur²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗯨",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "world; capital city",
    "explanationCN": "世界;京"
  },
  {
    "character": "𘎏",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "to lure; to seduce",
    "explanationCN": "引诱;引诱"
  },
  {
    "character": "𘖝",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘗇",
    "GX": "tṣhwaa̱¹",
    "GHC": "tśhiwa¹",
    "explanationEN": "to suppress; to stifle",
    "explanationCN": "压制;扼杀"
  },
  {
    "character": "𘖱",
    "GX": "nẓau̱¹",
    "GHC": "źju̱¹",
    "explanationEN": "bell",
    "explanationCN": "钟"
  },
  {
    "character": "𗓛",
    "GX": "ṇwə̱²",
    "GHC": "nuə²",
    "explanationEN": "wizard; sorcere",
    "explanationCN": "巫师;巫术"
  },
  {
    "character": "𗐯",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "boundary",
    "explanationCN": "边界"
  },
  {
    "character": "𗐶",
    "GX": "la̱h¹",
    "GHC": "¹",
    "explanationEN": "to estimate",
    "explanationCN": "估算"
  },
  {
    "character": "𗑋",
    "GX": "qhao̱ṃ²",
    "GHC": "khjow²",
    "explanationEN": "basket",
    "explanationCN": "篮子"
  },
  {
    "character": "𗒬",
    "GX": "lə̱¹",
    "GHC": "¹",
    "explanationEN": "neck",
    "explanationCN": "脖子"
  },
  {
    "character": "𗑓",
    "GX": "di¹",
    "GHC": "dji¹",
    "explanationEN": "to shift; to move",
    "explanationCN": "移位;移动"
  },
  {
    "character": "𗒠",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "cervical vertebra",
    "explanationCN": "颈椎"
  },
  {
    "character": "𗑻",
    "GX": "γa̱h¹",
    "GHC": "ɣạ¹",
    "explanationEN": "joint; very close relative",
    "explanationCN": "关节;非常近的亲戚"
  },
  {
    "character": "𗔔",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "bamboo",
    "explanationCN": "竹"
  },
  {
    "character": "𗒣",
    "GX": "bih²",
    "GHC": "bjɨ̣²",
    "explanationEN": "to advocate; to preach",
    "explanationCN": "倡导;传道"
  },
  {
    "character": "𗑅",
    "GX": "gəh²",
    "GHC": "gjɨ̣²",
    "explanationEN": "ancestor; forebear",
    "explanationCN": "祖先;祖先"
  },
  {
    "character": "𗓈",
    "GX": "lhwu̱¹",
    "GHC": "lhwu¹",
    "explanationEN": "clothes; clothing",
    "explanationCN": "衣服;服装"
  },
  {
    "character": "𗔇",
    "GX": "γu̱h²",
    "GHC": "ˑụ²",
    "explanationEN": "storehouse; warehouse",
    "explanationCN": "库;仓库"
  },
  {
    "character": "𗒭",
    "GX": "khə¹",
    "GHC": "khjɨ¹",
    "explanationEN": "brother’s son; nephew",
    "explanationCN": "哥哥的儿子;侄子"
  },
  {
    "character": "𗔠",
    "GX": "tsu¹",
    "GHC": "sju¹",
    "explanationEN": "to store; to save",
    "explanationCN": "储存;保存"
  },
  {
    "character": "𗓖",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "dexterous; nimble",
    "explanationCN": "灵巧;灵活"
  },
  {
    "character": "𘎎",
    "GX": "swu̱²",
    "GHC": "swu²",
    "explanationEN": "full; filled",
    "explanationCN": "满;㿙"
  },
  {
    "character": "𘗁",
    "GX": "dźa²",
    "GHC": "dźja²",
    "explanationEN": "sharp; firm",
    "explanationCN": "锋利;公司"
  },
  {
    "character": "𗓳",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "fat; corpulent",
    "explanationCN": "脂肪;肥胖"
  },
  {
    "character": "𗓚",
    "GX": "ma̱²",
    "GHC": "ma²",
    "explanationEN": "to apply; to daub",
    "explanationCN": "申请;涂抹"
  },
  {
    "character": "𘖣",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "calm; quiet",
    "explanationCN": "平静;安静"
  },
  {
    "character": "𗑝",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "joint",
    "explanationCN": "关节"
  },
  {
    "character": "𗑱",
    "GX": "ka²",
    "GHC": "kja²",
    "explanationEN": "rob; steps",
    "explanationCN": "抢;步骤"
  },
  {
    "character": "𘃙",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "alone; lonely",
    "explanationCN": "独自;孤独"
  },
  {
    "character": "𗭅",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "silk",
    "explanationCN": "丝绸"
  },
  {
    "character": "𘍝",
    "GX": "γao̱h¹",
    "GHC": "ˑiọ¹",
    "explanationEN": "round",
    "explanationCN": "圆"
  },
  {
    "character": "𗑁",
    "GX": "yo̱ṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "appearance; shape",
    "explanationCN": "外观;形状"
  },
  {
    "character": "𘖾",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "a kind of mineral to smelt copper",
    "explanationCN": "一种冶炼铜的矿物"
  },
  {
    "character": "𗓀",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "to hide; to conceal",
    "explanationCN": "躲藏起来;隐藏"
  },
  {
    "character": "𗭁",
    "GX": "rbu̱r¹",
    "GHC": "bur¹",
    "explanationEN": "shell",
    "explanationCN": "壳"
  },
  {
    "character": "𗬻",
    "GX": "ŋġo̱r¹",
    "GHC": "ko̱r¹",
    "explanationEN": "brocade",
    "explanationCN": "锦"
  },
  {
    "character": "𗭀",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "silk; satin",
    "explanationCN": "丝绸;缎"
  },
  {
    "character": "𗑈",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "to pat; to beat",
    "explanationCN": "拍打;击败"
  },
  {
    "character": "𗑗",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "clean; quiet",
    "explanationCN": "干净;安静"
  },
  {
    "character": "𗒪",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "altar",
    "explanationCN": "祭坛"
  },
  {
    "character": "𗑦",
    "GX": "rśwər¹",
    "GHC": "śjwɨr¹",
    "explanationEN": "frank; straightforward",
    "explanationCN": "弗兰克;简单"
  },
  {
    "character": "𗓜",
    "GX": "rkhor¹",
    "GHC": "khjo̱r¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘖤",
    "GX": "ŋqhae̱¹",
    "GHC": "khie̱j¹",
    "explanationEN": "clank; clang",
    "explanationCN": "克兰克;铛"
  },
  {
    "character": "𗬹",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "silk",
    "explanationCN": "丝绸"
  },
  {
    "character": "𗭄",
    "GX": "teṃh¹",
    "GHC": "tjɨ̣j¹",
    "explanationEN": "satin",
    "explanationCN": "缎"
  },
  {
    "character": "𗑵",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "big cymbals",
    "explanationCN": "大钹"
  },
  {
    "character": "𗑊",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "night; evening",
    "explanationCN": "晚上;傍晚"
  },
  {
    "character": "𗐹",
    "GX": "γa̱ṃ¹",
    "GHC": "ˑã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗐭",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "to speak; to say",
    "explanationCN": "说话;说"
  },
  {
    "character": "𗓓",
    "GX": "tśhe¹",
    "GHC": "tśhjij¹",
    "explanationEN": "to go; to walk",
    "explanationCN": "去;走路"
  },
  {
    "character": "𗒋",
    "GX": "ẓao̱ṃ¹",
    "GHC": "śiow¹",
    "explanationEN": "to gather; to collect",
    "explanationCN": "聚集;收集"
  },
  {
    "character": "𘖟",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "lance; spear",
    "explanationCN": "矛;矛"
  },
  {
    "character": "𗬸",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "yarn",
    "explanationCN": "纱"
  },
  {
    "character": "𘁖",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗑸",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "to fight; to struggle",
    "explanationCN": "去战斗;挣扎"
  },
  {
    "character": "𗑒",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "ambition; will",
    "explanationCN": "野心;将"
  },
  {
    "character": "𗑰",
    "GX": "tshe̱¹",
    "GHC": "tshej¹",
    "explanationEN": "property; wealth",
    "explanationCN": "财产;财富"
  },
  {
    "character": "𗬷",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "a kind of silk gauze",
    "explanationCN": "一种蚕丝纱布"
  },
  {
    "character": "𗬿",
    "GX": "rni̱r²",
    "GHC": "ner²",
    "explanationEN": "tough silk",
    "explanationCN": "坚韧的丝绸"
  },
  {
    "character": "𗬼",
    "GX": "ryər²",
    "GHC": "ˑjɨr²",
    "explanationEN": "silk",
    "explanationCN": "丝绸"
  },
  {
    "character": "𗬾",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "silk",
    "explanationCN": "丝绸"
  },
  {
    "character": "𗭃",
    "GX": "hoṃ²",
    "GHC": "xjow²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗐪",
    "GX": "qhao̱ṃ²",
    "GHC": "khjow²",
    "explanationEN": "respectability",
    "explanationCN": "尊敬"
  },
  {
    "character": "𗓙",
    "GX": "pə̱h¹",
    "GHC": "pə¹",
    "explanationEN": "to hit; to fix exactly",
    "explanationCN": "击球;以精确修复"
  },
  {
    "character": "𘞧",
    "GX": "nlhi̱w²",
    "GHC": "lhe̱w²",
    "explanationEN": "only; single",
    "explanationCN": "只;单"
  },
  {
    "character": "𗒹",
    "GX": "śah¹",
    "GHC": "śjạ¹",
    "explanationEN": "seven",
    "explanationCN": "七"
  },
  {
    "character": "𘖈",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "skill ability",
    "explanationCN": "技能能力"
  },
  {
    "character": "𘖠",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "timid and weak-willed",
    "explanationCN": "胆小且意志薄弱"
  },
  {
    "character": "𘗅",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "tin",
    "explanationCN": "锡"
  },
  {
    "character": "𗭂",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "mixed silk",
    "explanationCN": "混丝"
  },
  {
    "character": "𗔕",
    "GX": "rnir²",
    "GHC": "njir²",
    "explanationEN": "platform; stage",
    "explanationCN": "平台;阶段"
  },
  {
    "character": "𗓘",
    "GX": "nheṃ¹",
    "GHC": "xjɨj¹",
    "explanationEN": "wide; broad",
    "explanationCN": "宽;广泛"
  },
  {
    "character": "𗔐",
    "GX": "nuh²",
    "GHC": "njụ²",
    "explanationEN": "kind",
    "explanationCN": "类"
  },
  {
    "character": "𗔏",
    "GX": "lwu̱h²",
    "GHC": "lwụ²",
    "explanationEN": "to stir; to agitate; to mix",
    "explanationCN": "搅拌;煽动;混合"
  },
  {
    "character": "𘖩",
    "GX": "ŋqo̱²",
    "GHC": "ko̱²",
    "explanationEN": "pliers; pincers; forceps",
    "explanationCN": "钳子;钳子;钳子"
  },
  {
    "character": "𗑐",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗑺",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗓲",
    "GX": "bo̱¹",
    "GHC": "bo¹",
    "explanationEN": "robe; gown",
    "explanationCN": "袍;礼服"
  },
  {
    "character": "𗒻",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "skillful; nimble",
    "explanationCN": "熟练;灵活"
  },
  {
    "character": "𗓪",
    "GX": "swiṃ¹",
    "GHC": "sjwĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗬺",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "yarn",
    "explanationCN": "纱"
  },
  {
    "character": "𗐺",
    "GX": "mi̱ṃ¹",
    "GHC": "mẽ¹",
    "explanationEN": "door; entrance",
    "explanationCN": "门;入口"
  },
  {
    "character": "𗐫",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "to tell",
    "explanationCN": "告诉"
  },
  {
    "character": "𗑛",
    "GX": "rzər¹",
    "GHC": "zjɨr¹",
    "explanationEN": "south",
    "explanationCN": "南"
  },
  {
    "character": "𘝞",
    "GX": "rywər²",
    "GHC": "ˑjwɨr²",
    "explanationEN": "writing",
    "explanationCN": "写作"
  },
  {
    "character": "𗑑",
    "GX": "rmao̱r¹",
    "GHC": "mior¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗑬",
    "GX": "dzu̱¹",
    "GHC": "dzu¹",
    "explanationEN": "dregs; residue",
    "explanationCN": "渣;残留"
  },
  {
    "character": "𗔑",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "clothes for cattle; leather",
    "explanationCN": "牛的衣服;皮革"
  },
  {
    "character": "𗒺",
    "GX": "tshi̱w²",
    "GHC": "²",
    "explanationEN": "broken; fragmentary",
    "explanationCN": "破碎;零碎"
  },
  {
    "character": "𘎒",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "hot pepper",
    "explanationCN": "辣椒"
  },
  {
    "character": "𗐵",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "to see.ʙ",
    "explanationCN": "查看。"
  },
  {
    "character": "𗐸",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗑶",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "straight",
    "explanationCN": "直"
  },
  {
    "character": "𗑽",
    "GX": "khya²",
    "GHC": "kha²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗒯",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "to lose",
    "explanationCN": "输"
  },
  {
    "character": "𗒼",
    "GX": "qhwae̱h¹",
    "GHC": "khwẹj¹",
    "explanationEN": "to expand; to enlarge",
    "explanationCN": "扩展;放大"
  },
  {
    "character": "𗓩",
    "GX": "be̱ṃ¹",
    "GHC": "bəj¹",
    "explanationEN": "wide; vast; flat",
    "explanationCN": "宽;巨大;平"
  },
  {
    "character": "𗓏",
    "GX": "dźi?",
    "GHC": "dźji?",
    "explanationEN": "to look; to see",
    "explanationCN": "去看;看"
  },
  {
    "character": "𗒛",
    "GX": "γu̱h²",
    "GHC": "ˑụ²",
    "explanationEN": "to ride",
    "explanationCN": "骑行"
  },
  {
    "character": "𘁒",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to brush; to wipe; to whisk",
    "explanationCN": "刷;擦拭;以打蛋"
  },
  {
    "character": "𘖪",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "thick; saw",
    "explanationCN": "厚;锯"
  },
  {
    "character": "𘖯",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "a kind of container to cook",
    "explanationCN": "一种烹饪容器"
  },
  {
    "character": "𘖼",
    "GX": "vaa̱ṃ²",
    "GHC": "wiã²",
    "explanationEN": "arrowhead",
    "explanationCN": "箭头"
  },
  {
    "character": "𘖽",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "plough",
    "explanationCN": "犁"
  },
  {
    "character": "𘖹",
    "GX": "lhə̱²",
    "GHC": "lhə²",
    "explanationEN": "plane (for carpentry)",
    "explanationCN": "飞机（用于木工）"
  },
  {
    "character": "𗑖",
    "GX": "rŋwi̱r¹",
    "GHC": "ŋwer¹",
    "explanationEN": "a hint given with the eyes",
    "explanationCN": "用眼睛给出的暗示"
  },
  {
    "character": "𗑆",
    "GX": "ntə¹",
    "GHC": "tjɨ̱¹",
    "explanationEN": "to share; to glare",
    "explanationCN": "分享;眩光"
  },
  {
    "character": "𗑇",
    "GX": "ma̱h¹",
    "GHC": "mạ¹",
    "explanationEN": "son-in-law; husband",
    "explanationCN": "女婿;老公"
  },
  {
    "character": "𗔜",
    "GX": "lwe̱ṃ¹",
    "GHC": "lwəj¹",
    "explanationEN": "fast; rapid",
    "explanationCN": "快;快速"
  },
  {
    "character": "𗒡",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "to go; to walk",
    "explanationCN": "去;走路"
  },
  {
    "character": "𗒮",
    "GX": "khaw¹",
    "GHC": "khja̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗓭",
    "GX": "lwe̱¹",
    "GHC": "lwej¹",
    "explanationEN": "wealth",
    "explanationCN": "财富"
  },
  {
    "character": "𗒾",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "to sleep",
    "explanationCN": "睡觉"
  },
  {
    "character": "𗓍",
    "GX": "nẓaa̱²",
    "GHC": "śia̱²",
    "explanationEN": "turbulent (current)",
    "explanationCN": "Turbulent （current） 湍流 （current）"
  },
  {
    "character": "𘎐",
    "GX": "tṣae̱h²",
    "GHC": "tśiẹj²",
    "explanationEN": "to continue; to mend",
    "explanationCN": "继续;修补"
  },
  {
    "character": "𗒔",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔯",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "to fight; to struggle",
    "explanationCN": "去战斗;挣扎"
  },
  {
    "character": "𗔗",
    "GX": "śaw²",
    "GHC": "śja̱²",
    "explanationEN": "stinking; smelly",
    "explanationCN": "臭;臭"
  },
  {
    "character": "𗑔",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "honest; sincere",
    "explanationCN": "诚实;真诚"
  },
  {
    "character": "𗓔",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔚",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "beautiful",
    "explanationCN": "美丽"
  },
  {
    "character": "𗔰",
    "GX": "nuh²",
    "GHC": "njụ²",
    "explanationEN": "milk",
    "explanationCN": "牛奶"
  },
  {
    "character": "𗔹",
    "GX": "ryer¹",
    "GHC": "ˑjijr¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗒧",
    "GX": "γa̱h¹",
    "GHC": "ɣạ¹",
    "explanationEN": "to cut off; to take off",
    "explanationCN": "切断;起飞"
  },
  {
    "character": "𗒓",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "gorgeous",
    "explanationCN": "华丽"
  },
  {
    "character": "𗓴",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "a kind of clothing making of crude gunny",
    "explanationCN": "一种用粗麻布制成的服装"
  },
  {
    "character": "𗔆",
    "GX": "so¹",
    "GHC": "sjo¹",
    "explanationEN": "to store; to lay in",
    "explanationCN": "储存;躺下"
  },
  {
    "character": "𗔧",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "cupboard; cabinet",
    "explanationCN": "橱柜;内阁"
  },
  {
    "character": "𘗐",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "INTER; OPT",
    "explanationCN": "国米;选择"
  },
  {
    "character": "𗐰",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "apron",
    "explanationCN": "围裙"
  },
  {
    "character": "𗐷",
    "GX": "səh¹",
    "GHC": "sjɨ̣¹",
    "explanationEN": "clean",
    "explanationCN": "干净"
  },
  {
    "character": "𗒝",
    "GX": "miṃ¹",
    "GHC": "mjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗒿",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "storehouse; warehouse",
    "explanationCN": "库;仓库"
  },
  {
    "character": "𘖮",
    "GX": "ŋkhu¹",
    "GHC": "khju̱¹",
    "explanationEN": "burnt",
    "explanationCN": "烧毁"
  },
  {
    "character": "𗓼",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "oath; vow",
    "explanationCN": "誓言;誓言"
  },
  {
    "character": "𗑙",
    "GX": "γa̱ṃ¹",
    "GHC": "ɣã¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗒩",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗓎",
    "GX": "llwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "to mix; to blend",
    "explanationCN": "混合;混合"
  },
  {
    "character": "𗔄",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "gruel; porridge; congee",
    "explanationCN": "粥;粥;粥"
  },
  {
    "character": "𗔾",
    "GX": "qhaə̱¹",
    "GHC": "khjə¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗑚",
    "GX": "ŋġa̱r¹",
    "GHC": "ga̱r¹",
    "explanationEN": "to play",
    "explanationCN": "玩"
  },
  {
    "character": "𗑭",
    "GX": "nwə²",
    "GHC": "njwɨ²",
    "explanationEN": "fat; grease",
    "explanationCN": "脂肪;油"
  },
  {
    "character": "𘂪",
    "GX": "dze²",
    "GHC": "dzjij²",
    "explanationEN": "one",
    "explanationCN": "一"
  },
  {
    "character": "𗇛",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "firefly; glowworm",
    "explanationCN": "萤火虫;萤火虫"
  },
  {
    "character": "𗐻",
    "GX": "yə²",
    "GHC": "ˑjɨr²",
    "explanationEN": "clothing",
    "explanationCN": "服装"
  },
  {
    "character": "𗐼",
    "GX": "dźwaw¹",
    "GHC": "dźjwa̱¹",
    "explanationEN": "to hit; to clap",
    "explanationCN": "击球;鼓掌"
  },
  {
    "character": "𘛵",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "end",
    "explanationCN": "结束"
  },
  {
    "character": "𘑘",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "celestial being; immortal",
    "explanationCN": "仙;不朽"
  },
  {
    "character": "𘝨",
    "GX": "zoh²",
    "GHC": "zjọ²",
    "explanationEN": "TIME.ʙ:  imperfective time",
    "explanationCN": "时间。"
  },
  {
    "character": "𗒄",
    "GX": "law²",
    "GHC": "²",
    "explanationEN": "frontier; border",
    "explanationCN": "前沿;边境"
  },
  {
    "character": "𗑤",
    "GX": "γwa̱¹",
    "GHC": "¹",
    "explanationEN": "harmonious",
    "explanationCN": "和谐"
  },
  {
    "character": "𗓤",
    "GX": "dźe²",
    "GHC": "²",
    "explanationEN": "honest; upright; calm",
    "explanationCN": "诚实;直立;平静"
  },
  {
    "character": "𗐳",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "fort; stronghold",
    "explanationCN": "堡;据点"
  },
  {
    "character": "𗑌",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "incomplete; fragmentary",
    "explanationCN": "不完全的;零碎"
  },
  {
    "character": "𗒅",
    "GX": "rśər¹",
    "GHC": "śjɨr¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗑩",
    "GX": "ŋgi²",
    "GHC": "gji̱²",
    "explanationEN": "hope",
    "explanationCN": "希望"
  },
  {
    "character": "𗓉",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "father-in-law",
    "explanationCN": "岳父"
  },
  {
    "character": "𗒒",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "arrogant; squeamish",
    "explanationCN": "傲慢;娇气"
  },
  {
    "character": "𘑗",
    "GX": "rŋə̱r¹",
    "GHC": "ŋər¹",
    "explanationEN": "hill; mountain",
    "explanationCN": "山;山"
  },
  {
    "character": "𗯦",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘖇",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "manners; rites",
    "explanationCN": "礼仪;仪式"
  },
  {
    "character": "𘞤",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "wide; vast",
    "explanationCN": "宽;巨大"
  },
  {
    "character": "𘁐",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "ox",
    "explanationCN": "牛"
  },
  {
    "character": "𘎋",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "to brush; to wipe; to whisk",
    "explanationCN": "刷;擦拭;以打蛋"
  },
  {
    "character": "𘖥",
    "GX": "rtswa̱r¹",
    "GHC": "tswar¹",
    "explanationEN": "wrinkle; fold",
    "explanationCN": "皱;倍"
  },
  {
    "character": "𘗍",
    "GX": "lha̱ṃ²",
    "GHC": "lhjụ²",
    "explanationEN": "armor",
    "explanationCN": "装甲"
  },
  {
    "character": "𘖶",
    "GX": "rŋə̱r¹",
    "GHC": "ŋər¹",
    "explanationEN": "griddle",
    "explanationCN": "鏊"
  },
  {
    "character": "𘗊",
    "GX": "rə̱r²",
    "GHC": "rər²",
    "explanationEN": "copper",
    "explanationCN": "铜"
  },
  {
    "character": "𘛖",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘟛",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "wisdom; intelligence",
    "explanationCN": "智慧;情报"
  },
  {
    "character": "𗔻",
    "GX": "ryar²",
    "GHC": "ˑjar²",
    "explanationEN": "a skilled (or clever) workman; woman",
    "explanationCN": "熟练（或聪明）的工人;女人"
  },
  {
    "character": "𗐱",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "12PL: 1st/2nd plural indexation",
    "explanationCN": "12PL"
  },
  {
    "character": "𗒖",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "to stretch",
    "explanationCN": "拉伸"
  },
  {
    "character": "𗑥",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "to adore; admire",
    "explanationCN": "崇拜;欣赏"
  },
  {
    "character": "𗒀",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "to provide for; to support",
    "explanationCN": "供养;支持"
  },
  {
    "character": "𗔂",
    "GX": "tsi¹",
    "GHC": "tsji¹",
    "explanationEN": "small dish",
    "explanationCN": "碟"
  },
  {
    "character": "𘎆",
    "GX": "dźwə¹",
    "GHC": "dźjwɨ¹",
    "explanationEN": "pron. each other",
    "explanationCN": "彼此"
  },
  {
    "character": "𘎍",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "to attend; to follow",
    "explanationCN": "参加;关注"
  },
  {
    "character": "𘖦",
    "GX": "ta̱h²",
    "GHC": "tạ²",
    "explanationEN": "fold; wrinkle",
    "explanationCN": "倍;皱"
  },
  {
    "character": "𗔪",
    "GX": "qwae̱h¹",
    "GHC": "kiwẹj¹",
    "explanationEN": "to thunder",
    "explanationCN": "到雷霆"
  },
  {
    "character": "𗓢",
    "GX": "və¹",
    "GHC": "wjɨ¹",
    "explanationEN": "mother-in-law",
    "explanationCN": "岳母"
  },
  {
    "character": "𗔘",
    "GX": "mo¹",
    "GHC": "mjo¹",
    "explanationEN": "to hear.ʙ",
    "explanationCN": "听到。"
  },
  {
    "character": "𗒕",
    "GX": "lweh¹",
    "GHC": "ljwịj¹",
    "explanationEN": "neck",
    "explanationCN": "脖子"
  },
  {
    "character": "𗔨",
    "GX": "tṣaə̱²",
    "GHC": "tśiə²",
    "explanationEN": "to twine",
    "explanationCN": "以麻线"
  },
  {
    "character": "𘖨",
    "GX": "loṃ¹",
    "GHC": "ljow¹",
    "explanationEN": "dragon",
    "explanationCN": "龙"
  },
  {
    "character": "𘗌",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "armor",
    "explanationCN": "装甲"
  },
  {
    "character": "𗔤",
    "GX": "qwai̱¹",
    "GHC": "kiwe¹",
    "explanationEN": "dark",
    "explanationCN": "黑暗"
  },
  {
    "character": "𗔩",
    "GX": "γae̱h²",
    "GHC": "ɣiẹj²",
    "explanationEN": "to transport; to freight",
    "explanationCN": "运输;前往货运"
  },
  {
    "character": "𗑮",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "small dish",
    "explanationCN": "碟"
  },
  {
    "character": "𗑾",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "speech; word",
    "explanationCN": "演讲;词"
  },
  {
    "character": "𗒳",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "bell",
    "explanationCN": "钟"
  },
  {
    "character": "𗔦",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗒷",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "parents",
    "explanationCN": "父母"
  },
  {
    "character": "𗔛",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "to wear.ᴀ",
    "explanationCN": "穿。"
  },
  {
    "character": "𗔢",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to make (wine, vinegar)",
    "explanationCN": "制作 （葡萄酒、醋）"
  },
  {
    "character": "𘖫",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "ceremony and propriety",
    "explanationCN": "礼仪"
  },
  {
    "character": "𘖺",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "to drill; to bore",
    "explanationCN": "钻孔;钻孔"
  },
  {
    "character": "𗓝",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "to clear away; to clean up",
    "explanationCN": "清理;清理"
  },
  {
    "character": "𘁕",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "power and influence",
    "explanationCN": "权力和影响力"
  },
  {
    "character": "𘎊",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "to cut",
    "explanationCN": "剪切"
  },
  {
    "character": "𗓿",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "sleepy",
    "explanationCN": "困"
  },
  {
    "character": "𗓹",
    "GX": "lweh¹",
    "GHC": "ljwịj¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔡",
    "GX": "ləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "to mend; to patch; to explain",
    "explanationCN": "修补;修补;解释"
  },
  {
    "character": "𗔼",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "to struggle; to fight",
    "explanationCN": "去挣扎;去战斗"
  },
  {
    "character": "𘗆",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "turning shovel",
    "explanationCN": "回转铲"
  },
  {
    "character": "𗔞",
    "GX": "rmər¹",
    "GHC": "mjɨr¹",
    "explanationEN": "livestock; domestic animal",
    "explanationCN": "牲畜;牲"
  },
  {
    "character": "𘗄",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "hook",
    "explanationCN": "钩"
  },
  {
    "character": "𗒵",
    "GX": "qwa̱¹",
    "GHC": "kwa¹",
    "explanationEN": "to tie; to bind",
    "explanationCN": "打平;绑定"
  },
  {
    "character": "𗐾",
    "GX": "swi̱ṃ¹",
    "GHC": "swẽ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗓦",
    "GX": "ndwu̱²",
    "GHC": "dwu̱²",
    "explanationEN": "secret; clandestine",
    "explanationCN": "秘密;秘密的"
  },
  {
    "character": "𗒥",
    "GX": "yoṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "to respect; to revere",
    "explanationCN": "尊重;崇敬"
  },
  {
    "character": "𗑿",
    "GX": "law²",
    "GHC": "lja̱²",
    "explanationEN": "single; lonely",
    "explanationCN": "单;孤独"
  },
  {
    "character": "𗒇",
    "GX": "nwi̱w¹",
    "GHC": "nwew¹",
    "explanationEN": "six-year-old sheep",
    "explanationCN": "六岁的绵羊"
  },
  {
    "character": "𗑨",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "to fight; to struggle; to dispute",
    "explanationCN": "去战斗;去挣扎;争议"
  },
  {
    "character": "𗓵",
    "GX": "ryer²",
    "GHC": "ˑjijr²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘎇",
    "GX": "po̱ṃ¹",
    "GHC": "pow¹",
    "explanationEN": "to help; to assist",
    "explanationCN": "提供帮助;协助"
  },
  {
    "character": "𘎈",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "pure",
    "explanationCN": "纯"
  },
  {
    "character": "𘖢",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "to lose",
    "explanationCN": "输"
  },
  {
    "character": "𗑀",
    "GX": "dźih²",
    "GHC": "dźji²",
    "explanationEN": "to unfold; to uphold",
    "explanationCN": "展开;维护"
  },
  {
    "character": "𗒰",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "lonely; solitary",
    "explanationCN": "孤独;孤独"
  },
  {
    "character": "𗐬",
    "GX": "qə̱²",
    "GHC": "kə²",
    "explanationEN": "to sew; to put together",
    "explanationCN": "缝纫;放在一起"
  },
  {
    "character": "𗓟",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "fourth",
    "explanationCN": "第四"
  },
  {
    "character": "𘖧",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "needle",
    "explanationCN": "针"
  },
  {
    "character": "𗔈",
    "GX": "tṣaa̱ṃ¹",
    "GHC": "tśiã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗓥",
    "GX": "ẓao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "dawn; (early) morning",
    "explanationCN": "黎明;（清晨）"
  },
  {
    "character": "𗓧",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗐿",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "relatives",
    "explanationCN": "亲戚"
  },
  {
    "character": "𗒑",
    "GX": "yə²",
    "GHC": "ˑjɨ²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗑧",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "to make (wine, vinegar)",
    "explanationCN": "制作 （葡萄酒、醋）"
  },
  {
    "character": "𗑎",
    "GX": "nsə²",
    "GHC": "sjɨ̱²",
    "explanationEN": "to speak softly; to whisper",
    "explanationCN": "轻声细语;耳语"
  },
  {
    "character": "𗑣",
    "GX": "γwa̱¹",
    "GHC": "ɣwa¹",
    "explanationEN": "harmonious",
    "explanationCN": "和谐"
  },
  {
    "character": "𗓣",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "honest; upright; calm",
    "explanationCN": "诚实;直立;平静"
  },
  {
    "character": "𗔒",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "husband",
    "explanationCN": "老公"
  },
  {
    "character": "𘖆",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "to sing",
    "explanationCN": "唱歌"
  },
  {
    "character": "𗇚",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𘛙",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𗒸",
    "GX": "llə̱¹",
    "GHC": "lə¹",
    "explanationEN": "stomach (of a bird)",
    "explanationCN": "胃（鸟的）"
  },
  {
    "character": "𗑠",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "and",
    "explanationCN": "和"
  },
  {
    "character": "𗒃",
    "GX": "law²",
    "GHC": "lja̱²",
    "explanationEN": "frontier; border",
    "explanationCN": "前沿;边境"
  },
  {
    "character": "𗔙",
    "GX": "ntśhi¹",
    "GHC": "tśhji̱¹",
    "explanationEN": "to screen; to observe",
    "explanationCN": "到屏幕;观察"
  },
  {
    "character": "𗔁",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "god; deity",
    "explanationCN": "神;神"
  },
  {
    "character": "𗑕",
    "GX": "ṇi²",
    "GHC": "dźji²",
    "explanationEN": "beautiful; pretty",
    "explanationCN": "美丽;美"
  },
  {
    "character": "𗒌",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔌",
    "GX": "zih²",
    "GHC": "zjị²",
    "explanationEN": "shoes; boots",
    "explanationCN": "鞋;靴子"
  },
  {
    "character": "𗓺",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "fur-lined jacket",
    "explanationCN": "毛皮衬里夹克"
  },
  {
    "character": "𗔮",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋiow²",
    "explanationEN": "to cherish",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗔃",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "rouge",
    "explanationCN": "胭脂"
  },
  {
    "character": "𗓫",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "robe; gown",
    "explanationCN": "袍;礼服"
  },
  {
    "character": "𗔓",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to borrow",
    "explanationCN": "借款"
  },
  {
    "character": "𗔬",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔵",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘁑",
    "GX": "mbao̱¹",
    "GHC": "bio̱¹",
    "explanationEN": "cat",
    "explanationCN": "猫"
  },
  {
    "character": "𘁓",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𘗃",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "filthy; dirty; rusty",
    "explanationCN": "肮脏;脏;生锈的"
  },
  {
    "character": "𘗉",
    "GX": "ra̱ṃ²",
    "GHC": "rã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗓇",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "cervical vertebra",
    "explanationCN": "颈椎"
  },
  {
    "character": "𗒶",
    "GX": "khi¹",
    "GHC": "¹",
    "explanationEN": "to lose",
    "explanationCN": "输"
  },
  {
    "character": "𗒜",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "band; belt",
    "explanationCN": "乐队;带"
  },
  {
    "character": "𗒱",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "year; age",
    "explanationCN": "年;年龄"
  },
  {
    "character": "𗒲",
    "GX": "tṣai̱¹",
    "GHC": "tśie¹",
    "explanationEN": "to amuse; to play games",
    "explanationCN": "娱乐;玩游戏"
  },
  {
    "character": "𗒁",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "to love.ʙ",
    "explanationCN": "去爱。"
  },
  {
    "character": "𗑳",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "thousand",
    "explanationCN": "千"
  },
  {
    "character": "𗒦",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "to seek; to search; to look for",
    "explanationCN": "寻找;搜索;寻找"
  },
  {
    "character": "𗓑",
    "GX": "rγwe̱r²",
    "GHC": "ˑwejr²",
    "explanationEN": "to guard; to defend",
    "explanationCN": "守卫;为了防守"
  },
  {
    "character": "𗓒",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "father-in-law; uncle",
    "explanationCN": "岳父;叔叔"
  },
  {
    "character": "𗓱",
    "GX": "te¹",
    "GHC": "tjij¹",
    "explanationEN": "if; maybe; perhaps",
    "explanationCN": "如果;或;也许"
  },
  {
    "character": "𗔋",
    "GX": "bo̱ṃ¹",
    "GHC": "bow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗑲",
    "GX": "ntśhiw¹",
    "GHC": "tśhji̱w¹",
    "explanationEN": "to speak; to say",
    "explanationCN": "说话;说"
  },
  {
    "character": "𗔉",
    "GX": "tṣhuo¹",
    "GHC": "tśhio̱w¹",
    "explanationEN": "perhaps; maybe",
    "explanationCN": "也许;或"
  },
  {
    "character": "𗓬",
    "GX": "rvwe̱r²",
    "GHC": "wejr²",
    "explanationEN": "flourish",
    "explanationCN": "蓬勃发展"
  },
  {
    "character": "𘎑",
    "GX": "źa²",
    "GHC": "rja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗔲",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "firm; strong",
    "explanationCN": "公司;强"
  },
  {
    "character": "𗑏",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗔍",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "industrious",
    "explanationCN": "勤劳"
  },
  {
    "character": "𗓕",
    "GX": "vao̱ṃ¹",
    "GHC": "wiow¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗒴",
    "GX": "ntśhwə¹",
    "GHC": "tśwɨ̱¹",
    "explanationEN": "to make (wine, vinegar)",
    "explanationCN": "制作 （葡萄酒、醋）"
  },
  {
    "character": "𗑟",
    "GX": "vih¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "relatives",
    "explanationCN": "亲戚"
  },
  {
    "character": "𗓾",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "close; intimate",
    "explanationCN": "关闭;亲密"
  },
  {
    "character": "𗔺",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "pants; trousers",
    "explanationCN": "裤子;裤子"
  },
  {
    "character": "𗒟",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "to demand",
    "explanationCN": "到需求"
  },
  {
    "character": "𗓂",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "to know; to understand",
    "explanationCN": "要知道;了解"
  },
  {
    "character": "𗔷",
    "GX": "tṣao̱ṃ²",
    "GHC": "tśiow²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟪",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "iron",
    "explanationCN": "铁"
  },
  {
    "character": "𘖸",
    "GX": "tshu¹",
    "GHC": "tshju¹",
    "explanationEN": "turning shovel",
    "explanationCN": "回转铲"
  },
  {
    "character": "𘗏",
    "GX": "dzwə̱¹",
    "GHC": "dzwə¹",
    "explanationEN": "tweezers",
    "explanationCN": "镊子"
  },
  {
    "character": "𗔶",
    "GX": "rqo̱ṃr¹",
    "GHC": "kowr¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘗋",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "to cut; to clip; to shave",
    "explanationCN": "切割;剪辑;剃须"
  },
  {
    "character": "𘖳",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "to realize; to wake up",
    "explanationCN": "实现;唤醒"
  },
  {
    "character": "𗑍",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "to trade",
    "explanationCN": "交易"
  },
  {
    "character": "𗑡",
    "GX": "law²",
    "GHC": "lja̱²",
    "explanationEN": "to lose",
    "explanationCN": "输"
  },
  {
    "character": "𗒆",
    "GX": "hwaa̱²",
    "GHC": "xiwa²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗒤",
    "GX": "rgur¹",
    "GHC": "gjur¹",
    "explanationEN": "one-year-old sheep",
    "explanationCN": "一岁羊"
  },
  {
    "character": "𗒽",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "resentment; enmity",
    "explanationCN": "怨恨;敌意"
  },
  {
    "character": "𗓶",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "shirt made by rough cloth",
    "explanationCN": "由粗糙布制成的衬衫"
  },
  {
    "character": "𗑯",
    "GX": "rgur²",
    "GHC": "gjur²",
    "explanationEN": "to lie down",
    "explanationCN": "躺下"
  },
  {
    "character": "𘗎",
    "GX": "tswu¹",
    "GHC": "tsjwu¹",
    "explanationEN": "pot to boil tea",
    "explanationCN": "壶烧茶"
  },
  {
    "character": "𘎉",
    "GX": "nllo̱¹",
    "GHC": "lho̱¹",
    "explanationEN": "to rely on",
    "explanationCN": "依赖"
  },
  {
    "character": "𘗂",
    "GX": "tsho̱ṃ²",
    "GHC": "tshow²",
    "explanationEN": "an ancient cooking vessel with two loop handles and three or four legs",
    "explanationCN": "一个古老的烹饪容器，有两个环形手柄和三条或四条腿"
  },
  {
    "character": "𗓊",
    "GX": "qhao̱ṃ²",
    "GHC": "khiow²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗓞",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘖻",
    "GX": "tṣhwaa̱¹",
    "GHC": "tśhjwa¹",
    "explanationEN": "triangular arrowhead",
    "explanationCN": "三角形箭头"
  },
  {
    "character": "𗇜",
    "GX": "rywar¹",
    "GHC": "ˑjwar¹",
    "explanationEN": "to go; fast; quick",
    "explanationCN": "去;快;快"
  },
  {
    "character": "𘖜",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "lock",
    "explanationCN": "锁"
  },
  {
    "character": "𗓸",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "oath; vow",
    "explanationCN": "誓言;誓言"
  },
  {
    "character": "𘗈",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "hook",
    "explanationCN": "钩"
  },
  {
    "character": "𗒞",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "vegetable",
    "explanationCN": "蔬菜"
  },
  {
    "character": "𘖵",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "saw",
    "explanationCN": "锯"
  },
  {
    "character": "𗔝",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗔅",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "corner",
    "explanationCN": "角落"
  },
  {
    "character": "𗔱",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "power and prestige; impressive and dignified manners",
    "explanationCN": "权力和声望;令人印象深刻且端庄的举止"
  },
  {
    "character": "𘎌",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "field mint; peppermint",
    "explanationCN": "田间薄荷;薄荷"
  },
  {
    "character": "𗓆",
    "GX": "le¹",
    "GHC": "ljij¹",
    "explanationEN": "to vary; to change",
    "explanationCN": "变化;更改"
  },
  {
    "character": "𗓮",
    "GX": "mya²",
    "GHC": "mja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗓁",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "to hear.ᴀ",
    "explanationCN": "听到。"
  },
  {
    "character": "𗓯",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "employment",
    "explanationCN": "就业"
  },
  {
    "character": "𗓨",
    "GX": "mi̱h²",
    "GHC": "bẹ²",
    "explanationEN": "to seek; to look for",
    "explanationCN": "寻找;寻找"
  },
  {
    "character": "𗔊",
    "GX": "qwo̱ṃ²",
    "GHC": "kwow²",
    "explanationEN": "anger; rage; fury",
    "explanationCN": "愤怒;愤怒;愤怒"
  },
  {
    "character": "𗒐",
    "GX": "γwae̱¹",
    "GHC": "ɣiwej¹",
    "explanationEN": "to receive; to accept",
    "explanationCN": "接收;接受"
  },
  {
    "character": "𗑫",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗓌",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "long",
    "explanationCN": "长"
  },
  {
    "character": "𘖿",
    "GX": "ŋgwi¹",
    "GHC": "gjwi̱¹",
    "explanationEN": "banner; flag; spear",
    "explanationCN": "旗帜;旗;矛"
  },
  {
    "character": "𗐽",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "singer; actor",
    "explanationCN": "歌手;演员"
  },
  {
    "character": "𗒚",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "to present (a gift); to entertain (to dinner)",
    "explanationCN": "赠送（礼物）;招待 （到晚餐）"
  },
  {
    "character": "𘛜",
    "GX": "zi̱¹",
    "GHC": "ze¹",
    "explanationEN": "baby; infant; seedling",
    "explanationCN": "婴儿;婴儿;幼苗"
  },
  {
    "character": "𘟞",
    "GX": "rbər¹",
    "GHC": "bjɨr¹",
    "explanationEN": "knife; sword",
    "explanationCN": "刀;剑"
  },
  {
    "character": "𗑂",
    "GX": "rvwə̱r²",
    "GHC": "wər²",
    "explanationEN": "membrane",
    "explanationCN": "膜"
  },
  {
    "character": "𗓄",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "harmonious; peaceful",
    "explanationCN": "和谐;和平"
  },
  {
    "character": "𗓅",
    "GX": "ŋqaa̱²",
    "GHC": "kia̱²",
    "explanationEN": "to patch; to mend",
    "explanationCN": "修补;修补"
  },
  {
    "character": "𘖰",
    "GX": "tshwa¹",
    "GHC": "tshjwa¹",
    "explanationEN": "stove; furnace",
    "explanationCN": "炉;炉"
  },
  {
    "character": "𗐲",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "soft",
    "explanationCN": "软"
  },
  {
    "character": "𗒍",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "to resolve",
    "explanationCN": "解决方法"
  },
  {
    "character": "𗒉",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗑪",
    "GX": "kwiṃ¹",
    "GHC": "kjwĩ¹",
    "explanationEN": "a man of noble character; a man of virtue; gentleman",
    "explanationCN": "一个品格高尚的人;一个有德行的人;绅士"
  },
  {
    "character": "𘖬",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "needle",
    "explanationCN": "针"
  },
  {
    "character": "𘗀",
    "GX": "nwo̱ṃ²",
    "GHC": "nwə²",
    "explanationEN": "wisdom; suggestion",
    "explanationCN": "智慧;建议"
  },
  {
    "character": "𗒎",
    "GX": "yo̱ṃ²",
    "GHC": "ˑjow²",
    "explanationEN": "song; to sing",
    "explanationCN": "歌;唱歌"
  },
  {
    "character": "𗔀",
    "GX": "va¹",
    "GHC": "wja¹",
    "explanationEN": "father",
    "explanationCN": "爸爸"
  },
  {
    "character": "𗓡",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "wealth; official's salary in feudal China; emolument",
    "explanationCN": "财富;封建中国官员的薪水;薪水"
  },
  {
    "character": "𗒂",
    "GX": "nah¹",
    "GHC": "njạ¹",
    "explanationEN": "marriage",
    "explanationCN": "婚"
  },
  {
    "character": "𗓠",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "mixed blood",
    "explanationCN": "混合血"
  },
  {
    "character": "𘗤",
    "GX": "rtsər¹",
    "GHC": "tsjɨ̱r¹",
    "explanationEN": "five; the fifth",
    "explanationCN": "五;第五"
  },
  {
    "character": "𗑄",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "have to",
    "explanationCN": "必须"
  },
  {
    "character": "𗑃",
    "GX": "tśiṃ¹",
    "GHC": "tśjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗒗",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "brother’s son; nephew",
    "explanationCN": "哥哥的儿子;侄子"
  },
  {
    "character": "𗒘",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "true; real; pure",
    "explanationCN": "真;真正;纯"
  },
  {
    "character": "𗒙",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "multitudinous; numerous",
    "explanationCN": "众多;众多"
  },
  {
    "character": "𗑴",
    "GX": "lwa̱ṃ¹",
    "GHC": "lwã¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗓋",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "a kind of animal",
    "explanationCN": "一种动物"
  },
  {
    "character": "𗔎",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "to put in order",
    "explanationCN": "整理"
  },
  {
    "character": "𗶭",
    "GX": "γu²",
    "GHC": "ɣju²",
    "explanationEN": "stand; pedestal; base",
    "explanationCN": "站;基座;基础"
  },
  {
    "character": "𘍏",
    "GX": "tsi̱¹",
    "GHC": "tse¹",
    "explanationEN": "grayish white; ashen; pale",
    "explanationCN": "灰白色;苍白;苍白"
  },
  {
    "character": "𘁗",
    "GX": "za̱²",
    "GHC": "za²",
    "explanationEN": "comb",
    "explanationCN": "梳"
  },
  {
    "character": "𘍴",
    "GX": "lih¹",
    "GHC": "ljị¹",
    "explanationEN": "to sink into; to lapse into",
    "explanationCN": "沉入其中;陷入"
  },
  {
    "character": "𗮄",
    "GX": "pho̱ṃ²",
    "GHC": "phow²",
    "explanationEN": "to ask",
    "explanationCN": "询问"
  },
  {
    "character": "𘃤",
    "GX": "vo¹",
    "GHC": "wjo¹",
    "explanationEN": "to send; to dispatch",
    "explanationCN": "发送;调度"
  },
  {
    "character": "𗕁",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "to grow; to luxuriate",
    "explanationCN": "成长;奢华"
  },
  {
    "character": "𘁠",
    "GX": "γa̱¹",
    "GHC": "ˑa¹",
    "explanationEN": "to induce; to lure",
    "explanationCN": "诱导;引诱"
  },
  {
    "character": "𘁮",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "child",
    "explanationCN": "孩子"
  },
  {
    "character": "𘃝",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "to send; to dispatch; to benefit from",
    "explanationCN": "发送;调度;从中受益"
  },
  {
    "character": "𘃨",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "to make; to create",
    "explanationCN": "使;创建"
  },
  {
    "character": "𘍶",
    "GX": "rγwə̱r¹",
    "GHC": "ɣwər¹",
    "explanationEN": "crane",
    "explanationCN": "起重机"
  },
  {
    "character": "𘍷",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "reverence",
    "explanationCN": "崇敬"
  },
  {
    "character": "𗮌",
    "GX": "yi¹",
    "GHC": "ˑji¹",
    "explanationEN": "man and his wife’s brother",
    "explanationCN": "男子和他妻子的兄弟"
  },
  {
    "character": "𗮎",
    "GX": "rdźər¹",
    "GHC": "dźjɨ̱r¹",
    "explanationEN": "banquet; feast",
    "explanationCN": "宴会;盛宴"
  },
  {
    "character": "𗮒",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "to puzzle;to confuse; to have no idea",
    "explanationCN": "解谜;令人困惑;不知道"
  },
  {
    "character": "𗮕",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "night; evening",
    "explanationCN": "晚上;傍晚"
  },
  {
    "character": "𘁭",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "wife",
    "explanationCN": "老婆"
  },
  {
    "character": "𘁰",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "muscle and joints",
    "explanationCN": "肌肉和关节"
  },
  {
    "character": "𘍼",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "six; the sixth",
    "explanationCN": "六;第六"
  },
  {
    "character": "𘍽",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "fire",
    "explanationCN": "火灾"
  },
  {
    "character": "𘛲",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "to patrol; to make a detour",
    "explanationCN": "巡逻;绕道而行"
  },
  {
    "character": "𗮃",
    "GX": "tswi¹",
    "GHC": "tsjwi¹",
    "explanationEN": "whistling arrow",
    "explanationCN": "呼啸箭"
  },
  {
    "character": "𘁨",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "preface; foreword",
    "explanationCN": "前言;前言"
  },
  {
    "character": "𘃧",
    "GX": "ŋgo¹",
    "GHC": "gio̱¹",
    "explanationEN": "stupid; foolish",
    "explanationCN": "笨;愚蠢"
  },
  {
    "character": "𗭴",
    "GX": "yoṃ¹",
    "GHC": "ˑjow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘌩",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "salted; salty",
    "explanationCN": "咸;咸"
  },
  {
    "character": "𘌬",
    "GX": "vəh²",
    "GHC": "wjɨ̣²",
    "explanationEN": "to send; to dispatch",
    "explanationCN": "发送;调度"
  },
  {
    "character": "𘌶",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "ball; fully round",
    "explanationCN": "球;全圆"
  },
  {
    "character": "𘕜",
    "GX": "ga²",
    "GHC": "gia²",
    "explanationEN": "I; me",
    "explanationCN": "我;我"
  },
  {
    "character": "𘍊",
    "GX": "nti̱w²",
    "GHC": "te̱w²",
    "explanationEN": "to rein in; to break",
    "explanationCN": "控制;打破"
  },
  {
    "character": "𘕹",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘛡",
    "GX": "dźih¹",
    "GHC": "dźjị¹",
    "explanationEN": "feast; banquet",
    "explanationCN": "盛宴;宴会"
  },
  {
    "character": "𗭷",
    "GX": "rni̱r¹",
    "GHC": "ner¹",
    "explanationEN": "old sheep",
    "explanationCN": "老羊"
  },
  {
    "character": "𘌻",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "wall",
    "explanationCN": "墙"
  },
  {
    "character": "𘍒",
    "GX": "dzwe̱¹",
    "GHC": "dzwej¹",
    "explanationEN": "guilt; suffering; patient",
    "explanationCN": "内疚;痛苦;病人"
  },
  {
    "character": "𘗜",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "file; filing room",
    "explanationCN": "文件;档案室"
  },
  {
    "character": "𗮞",
    "GX": "rśwar¹",
    "GHC": "śjwar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗮟",
    "GX": "tshwi̱¹",
    "GHC": "tshwe¹",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𗮨",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "bottom; backside",
    "explanationCN": "底;屁股"
  },
  {
    "character": "𗮳",
    "GX": "rgur¹",
    "GHC": "gjur¹",
    "explanationEN": "kidney",
    "explanationCN": "肾"
  },
  {
    "character": "𗮲",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "to fry in shallow oil without stirring",
    "explanationCN": "在浅油中煎炸，无需搅拌"
  },
  {
    "character": "𗮩",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "rib",
    "explanationCN": "肋"
  },
  {
    "character": "𗮺",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "lungs",
    "explanationCN": "肺"
  },
  {
    "character": "𗯇",
    "GX": "nle̱¹",
    "GHC": "le̱j¹",
    "explanationEN": "testis",
    "explanationCN": "睾丸"
  },
  {
    "character": "𗮿",
    "GX": "kwəh¹",
    "GHC": "kjwɨ̣¹",
    "explanationEN": "to combine; to associate",
    "explanationCN": "组合在一起;关联"
  },
  {
    "character": "𗮹",
    "GX": "so²",
    "GHC": "sjo²",
    "explanationEN": "crop (of a bird); bladder",
    "explanationCN": "作物（鸟的）;膀胱"
  },
  {
    "character": "𗯂",
    "GX": "vwae̱ṃ¹",
    "GHC": "wiəj¹",
    "explanationEN": "fart",
    "explanationCN": "屁"
  },
  {
    "character": "𗯊",
    "GX": "khaṃ²",
    "GHC": "khjã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗯅",
    "GX": "swu̱¹",
    "GHC": "swu¹",
    "explanationEN": "dried meat",
    "explanationCN": "腊"
  },
  {
    "character": "𗭿",
    "GX": "zweh²",
    "GHC": "źjwịj²",
    "explanationEN": "to rub; to knead",
    "explanationCN": "摩擦;揉捏"
  },
  {
    "character": "𘃡",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "to do.ᴀ",
    "explanationCN": "待办事项。"
  },
  {
    "character": "𗮋",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "to perforate",
    "explanationCN": "穿孔"
  },
  {
    "character": "𗮇",
    "GX": "rdir¹",
    "GHC": "djir¹",
    "explanationEN": "rattle of a drum",
    "explanationCN": "鼓的嘎嘎声"
  },
  {
    "character": "𘁚",
    "GX": "qwə̱¹",
    "GHC": "kwə¹",
    "explanationEN": "blanket",
    "explanationCN": "毯子"
  },
  {
    "character": "𘕏",
    "GX": "rgiwr²",
    "GHC": "gjiwr²",
    "explanationEN": "to seek; to look for",
    "explanationCN": "寻找;寻找"
  },
  {
    "character": "𘍧",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "earrings",
    "explanationCN": "耳环"
  },
  {
    "character": "𗭺",
    "GX": "rpər¹",
    "GHC": "pjɨr¹",
    "explanationEN": "to compare; to contrast",
    "explanationCN": "进行比较;对比"
  },
  {
    "character": "𗭼",
    "GX": "swi̱w¹",
    "GHC": "swew¹",
    "explanationEN": "bright; brilliant; light",
    "explanationCN": "明亮;明;光"
  },
  {
    "character": "𘃋",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "dream",
    "explanationCN": "梦"
  },
  {
    "character": "𘃩",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "to twine",
    "explanationCN": "以麻线"
  },
  {
    "character": "𘍤",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "curly hair; wavy hair",
    "explanationCN": "卷发;波浪形头发"
  },
  {
    "character": "𘌫",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "tomorrow",
    "explanationCN": "明天"
  },
  {
    "character": "𘌵",
    "GX": "nśi²",
    "GHC": "śji̱²",
    "explanationEN": "tasteless",
    "explanationCN": "淡"
  },
  {
    "character": "𘞩",
    "GX": "nlu¹",
    "GHC": "lju̱¹",
    "explanationEN": "to carve; to engrave",
    "explanationCN": "雕刻;雕刻"
  },
  {
    "character": "𘕌",
    "GX": "twu̱h²",
    "GHC": "twụ²",
    "explanationEN": "genuine; true; real",
    "explanationCN": "真正;真;真正"
  },
  {
    "character": "𘛐",
    "GX": "twu̱h¹",
    "GHC": "twụ¹",
    "explanationEN": "straight; honest; upright",
    "explanationCN": "直;诚实;直立"
  },
  {
    "character": "𘌭",
    "GX": "tśwow¹",
    "GHC": "tśjwo¹",
    "explanationEN": "to drill; to bore; to penetrate",
    "explanationCN": "钻孔;钻孔;穿透"
  },
  {
    "character": "𘛥",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "to subdue; to vanquish",
    "explanationCN": "制服;以征服"
  },
  {
    "character": "𘗓",
    "GX": "ŋgwi¹",
    "GHC": "gjwi̱¹",
    "explanationEN": "baby still",
    "explanationCN": "婴儿还是"
  },
  {
    "character": "𘍚",
    "GX": "mpu̱¹",
    "GHC": "pu̱¹",
    "explanationEN": "slack; lax; impoverished",
    "explanationCN": "松弛;宽松;贫困"
  },
  {
    "character": "𗭵",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "wool; feather; fine hair",
    "explanationCN": "羊毛;羽毛;䯽"
  },
  {
    "character": "𘎃",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𘛎",
    "GX": "ni̱w¹",
    "GHC": "new¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘃊",
    "GX": "yə²",
    "GHC": "ˑjɨ²",
    "explanationEN": "sleepy",
    "explanationCN": "困"
  },
  {
    "character": "𘛳",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "happiness; amusement",
    "explanationCN": "幸福;娱乐"
  },
  {
    "character": "𘛴",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "name of a god",
    "explanationCN": "神的名字"
  },
  {
    "character": "𘖃",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "peace and happiness",
    "explanationCN": "和平与幸福"
  },
  {
    "character": "𘁫",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "pearl",
    "explanationCN": "珍珠"
  },
  {
    "character": "𘌳",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "extremely happiness",
    "explanationCN": "极度幸福"
  },
  {
    "character": "𘍉",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "magpie",
    "explanationCN": "喜鹊"
  },
  {
    "character": "𘕛",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "to abuse; to swear; to curse",
    "explanationCN": "虐待;发誓;诅咒"
  },
  {
    "character": "𘋾",
    "GX": "ẓuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "god; patron saint",
    "explanationCN": "神;守护 神"
  },
  {
    "character": "𘍘",
    "GX": "be̱ṃ¹",
    "GHC": "bəj¹",
    "explanationEN": "pain; suffering; hardship",
    "explanationCN": "疼痛;痛苦;困难"
  },
  {
    "character": "𘗒",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "to call; to summon; to invite",
    "explanationCN": "打电话;召唤;邀请"
  },
  {
    "character": "𘋿",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𘕋",
    "GX": "dźih²",
    "GHC": "dźjar²",
    "explanationEN": "fault; crime; guilt",
    "explanationCN": "故障;犯罪;内疚"
  },
  {
    "character": "𘃠",
    "GX": "ndu̱¹",
    "GHC": "du̱¹",
    "explanationEN": "to save; to store up",
    "explanationCN": "拯救;储存"
  },
  {
    "character": "𗮐",
    "GX": "nthu̱¹",
    "GHC": "thu̱¹",
    "explanationEN": "to beg; to request; to demand",
    "explanationCN": "乞讨;请求;到需求"
  },
  {
    "character": "𗮑",
    "GX": "nthu̱¹",
    "GHC": "thu̱¹",
    "explanationEN": "to beg; to request; to demand",
    "explanationCN": "乞讨;请求;到需求"
  },
  {
    "character": "𘌴",
    "GX": "hwae̱ṃ¹",
    "GHC": "xiwəj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘌺",
    "GX": "phi̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗔽",
    "GX": "qhwaə̱¹",
    "GHC": "¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘍓",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "prison; jail",
    "explanationCN": "监狱;监狱"
  },
  {
    "character": "𘁱",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "pole; axis",
    "explanationCN": "极;轴"
  },
  {
    "character": "𘎧",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘎫",
    "GX": "ki¹",
    "GHC": "kji¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘏆",
    "GX": "soh¹",
    "GHC": "sjọ¹",
    "explanationEN": "agriculture; farming",
    "explanationCN": "农业;农业"
  },
  {
    "character": "𘏂",
    "GX": "kwe¹",
    "GHC": "kjwij¹",
    "explanationEN": "convulsion",
    "explanationCN": "惊厥"
  },
  {
    "character": "𘎿",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘖄",
    "GX": "qhə̱¹",
    "GHC": "khə¹",
    "explanationEN": "buttocks; bottom; backside",
    "explanationCN": "臀部;底;屁股"
  },
  {
    "character": "𘖖",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "mother",
    "explanationCN": "妈妈"
  },
  {
    "character": "𘝪",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "to separate",
    "explanationCN": "分开"
  },
  {
    "character": "𘝙",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗯩",
    "GX": "twu̱h¹",
    "GHC": "twụ¹",
    "explanationEN": "each; place",
    "explanationCN": "每;地方"
  },
  {
    "character": "𗯪",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "clumsy; dull; unskillful",
    "explanationCN": "笨拙;钝痛;伹"
  },
  {
    "character": "𗰆",
    "GX": "lha¹",
    "GHC": "lhja¹",
    "explanationEN": "deer",
    "explanationCN": "鹿"
  },
  {
    "character": "𘁇",
    "GX": "yə²",
    "GHC": "ˑjɨ²",
    "explanationEN": "past; last",
    "explanationCN": "过去;最后"
  },
  {
    "character": "𘎭",
    "GX": "nwəh¹",
    "GHC": "njwɨ¹",
    "explanationEN": "quick; nimble; agile",
    "explanationCN": "快;灵活;敏捷"
  },
  {
    "character": "𘏈",
    "GX": "vwa̱h¹",
    "GHC": "wạ¹",
    "explanationEN": "shoulder",
    "explanationCN": "肩膀"
  },
  {
    "character": "𘏋",
    "GX": "sə̱¹",
    "GHC": "sə¹",
    "explanationEN": "full; filled; packed",
    "explanationCN": "满;㿙;包装好的"
  },
  {
    "character": "𘑉",
    "GX": "ŋqhu̱²",
    "GHC": "khu̱²",
    "explanationEN": "to turn over",
    "explanationCN": "翻身"
  },
  {
    "character": "𘖗",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "to pull up; to rescue",
    "explanationCN": "拉起;救援"
  },
  {
    "character": "𗯡",
    "GX": "le̱²",
    "GHC": "²",
    "explanationEN": "to change; to vary",
    "explanationCN": "改变;变化"
  },
  {
    "character": "𘁆",
    "GX": "khaṃ²",
    "GHC": "khjã²",
    "explanationEN": "elephant",
    "explanationCN": "象"
  },
  {
    "character": "𗰁",
    "GX": "dźuo²",
    "GHC": "dźio̱w²",
    "explanationEN": "can; may",
    "explanationCN": "能;五月"
  },
  {
    "character": "𘏢",
    "GX": "kweṃh²",
    "GHC": "kjwɨj²",
    "explanationEN": "repetition",
    "explanationCN": "重复"
  },
  {
    "character": "𘐚",
    "GX": "nśwə¹",
    "GHC": "śjwɨ̱¹",
    "explanationEN": "clear; transparent",
    "explanationCN": "清楚;透明"
  },
  {
    "character": "𘛻",
    "GX": "ndi¹",
    "GHC": "dji̱¹",
    "explanationEN": "thunder",
    "explanationCN": "雷"
  },
  {
    "character": "𘁊",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "elephant",
    "explanationCN": "象"
  },
  {
    "character": "𗰊",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "beast; animal",
    "explanationCN": "野兽;动物"
  },
  {
    "character": "𘋪",
    "GX": "rtər¹",
    "GHC": "tjɨr¹",
    "explanationEN": "filled; packed; full",
    "explanationCN": "㿙;包装好的;满"
  },
  {
    "character": "𘏦",
    "GX": "teṃh¹",
    "GHC": "tjɨj¹",
    "explanationEN": "to obstruct; to block; to stuff",
    "explanationCN": "阻碍;阻止;到东西"
  },
  {
    "character": "𘐕",
    "GX": "tśiw²",
    "GHC": "tśjiw²",
    "explanationEN": "circumference; circuit",
    "explanationCN": "周长;电路"
  },
  {
    "character": "𗯼",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "to burn; to kindle",
    "explanationCN": "燃烧;至 Kindle"
  },
  {
    "character": "𗰃",
    "GX": "tshə²",
    "GHC": "tshjɨ²",
    "explanationEN": "salt",
    "explanationCN": "盐"
  },
  {
    "character": "𗰄",
    "GX": "gwe¹",
    "GHC": "gjwij¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘑈",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "pottery; earthenware",
    "explanationCN": "陶器;陶器"
  },
  {
    "character": "𘋰",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘋵",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "vulture",
    "explanationCN": "秃鹫"
  },
  {
    "character": "𘃖",
    "GX": "rza̱r²",
    "GHC": "zar²",
    "explanationEN": "fountainhead; source",
    "explanationCN": "源泉;源"
  },
  {
    "character": "𘐂",
    "GX": "nwəh²",
    "GHC": "njwɨ̣²",
    "explanationEN": "to burn; to kindle",
    "explanationCN": "燃烧;至 Kindle"
  },
  {
    "character": "𘖐",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "fire",
    "explanationCN": "火灾"
  },
  {
    "character": "𘖂",
    "GX": "rŋi̱wr²",
    "GHC": "ŋewr²",
    "explanationEN": "roebuck",
    "explanationCN": "罗巴克"
  },
  {
    "character": "𘋖",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𘛧",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "bottle",
    "explanationCN": "瓶"
  },
  {
    "character": "𗯠",
    "GX": "qhwu̱h²",
    "GHC": "²",
    "explanationEN": "to cut; to slice",
    "explanationCN": "切割;切片"
  },
  {
    "character": "𗯥",
    "GX": "lhe̱²",
    "GHC": "²",
    "explanationEN": "to translate; to vary",
    "explanationCN": "翻译;变化"
  },
  {
    "character": "𘏄",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to eliminate; to get rid of",
    "explanationCN": "消除;去掉"
  },
  {
    "character": "𘂂",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "god; deity",
    "explanationCN": "神;神"
  },
  {
    "character": "𘋚",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "tail; end; east",
    "explanationCN": "尾巴;结束;东"
  },
  {
    "character": "𘛚",
    "GX": "nae̱h²",
    "GHC": "nẹj²",
    "explanationEN": "bamboo",
    "explanationCN": "竹"
  },
  {
    "character": "𘟬",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "axe; hatchet",
    "explanationCN": "斧;斧头"
  },
  {
    "character": "𘎜",
    "GX": "ta̱h²",
    "GHC": "tạ²",
    "explanationEN": "fetus; embryo",
    "explanationCN": "胎儿;胚胎"
  },
  {
    "character": "𘟫",
    "GX": "γa̱h¹",
    "GHC": "ɣạ¹",
    "explanationEN": "sword; saber; weapon",
    "explanationCN": "剑;军刀;武器"
  },
  {
    "character": "𘐲",
    "GX": "lhoh²",
    "GHC": "lhjọ²",
    "explanationEN": "tattered; ragged; broken",
    "explanationCN": "破烂;衣衫褴褛;破碎"
  },
  {
    "character": "𘂹",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "end; tail; east",
    "explanationCN": "结束;尾巴;东"
  },
  {
    "character": "𘐅",
    "GX": "ŋġai̱¹",
    "GHC": "gie̱¹",
    "explanationEN": "stupid; dull; inferior",
    "explanationCN": "笨;钝痛;劣"
  },
  {
    "character": "𘑇",
    "GX": "yih²",
    "GHC": "ˑjị²",
    "explanationEN": "to uphold; to stretch",
    "explanationCN": "维护;拉伸"
  },
  {
    "character": "𘛞",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "solitary; lonely",
    "explanationCN": "孤独;孤独"
  },
  {
    "character": "𘛷",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "thunderclap",
    "explanationCN": "霹雳"
  },
  {
    "character": "𘎮",
    "GX": "pih¹",
    "GHC": "pjị¹",
    "explanationEN": "to discuss",
    "explanationCN": "讨论"
  },
  {
    "character": "𘑂",
    "GX": "lhoh²",
    "GHC": "lhjọ²",
    "explanationEN": "to roll",
    "explanationCN": "滚动"
  },
  {
    "character": "𘋒",
    "GX": "ŋgə¹",
    "GHC": "gjɨ̱¹",
    "explanationEN": "to encourage oneself",
    "explanationCN": "鼓励自己"
  },
  {
    "character": "𘂫",
    "GX": "vəh¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "to change; to fluctuate",
    "explanationCN": "改变;波动"
  },
  {
    "character": "𘐁",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "chess; to gamble",
    "explanationCN": "棋;去赌博"
  },
  {
    "character": "𘐘",
    "GX": "ŋqu̱¹",
    "GHC": "ku̱¹",
    "explanationEN": "to carve; to engrave; to pick",
    "explanationCN": "雕刻;雕刻;选择"
  },
  {
    "character": "𘏉",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "to pierce through; to penetrate",
    "explanationCN": "刺穿;穿透"
  },
  {
    "character": "𘝫",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "the Milky Way",
    "explanationCN": "银河系"
  },
  {
    "character": "𘎰",
    "GX": "ndo¹",
    "GHC": "djo̱¹",
    "explanationEN": "to pierce through; to penetrate",
    "explanationCN": "刺穿;穿透"
  },
  {
    "character": "𘏤",
    "GX": "rllər¹",
    "GHC": "ljɨr¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘍨",
    "GX": "hi¹",
    "GHC": "xji¹",
    "explanationEN": "happy; pleased",
    "explanationCN": "快乐;高兴"
  },
  {
    "character": "𘛶",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "stars; constellation",
    "explanationCN": "星星;星座"
  },
  {
    "character": "𘎓",
    "GX": "llu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "to hear",
    "explanationCN": "听到"
  },
  {
    "character": "𘂁",
    "GX": "ẓai̱w²",
    "GHC": "śiew²",
    "explanationEN": "color",
    "explanationCN": "颜色"
  },
  {
    "character": "𘐄",
    "GX": "lhwa¹",
    "GHC": "lhwa¹",
    "explanationEN": "to tie; to weave; to plait",
    "explanationCN": "打平;编织;编辫子"
  },
  {
    "character": "𘋛",
    "GX": "beṃ¹",
    "GHC": "bjɨj¹",
    "explanationEN": "benefit; profit; interest",
    "explanationCN": "效益;利润;利息"
  },
  {
    "character": "𘃈",
    "GX": "li̱ṃ?",
    "GHC": "lẽ?",
    "explanationEN": "husbands of sisters",
    "explanationCN": "姐妹的丈夫"
  },
  {
    "character": "𘐹",
    "GX": "phai̱²",
    "GHC": "phie²",
    "explanationEN": "paper",
    "explanationCN": "纸"
  },
  {
    "character": "𘖔",
    "GX": "ẓwaa̱²",
    "GHC": "śiwa²",
    "explanationEN": "to shrink; to contract",
    "explanationCN": "缩小;签订合同"
  },
  {
    "character": "𘑊",
    "GX": "ŋqhu̱²",
    "GHC": "²",
    "explanationEN": "to turn over",
    "explanationCN": "翻身"
  },
  {
    "character": "𘖘",
    "GX": "dźə¹",
    "GHC": "¹",
    "explanationEN": "to pull up; to rescue",
    "explanationCN": "拉起;救援"
  },
  {
    "character": "𘐀",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "Tibetan",
    "explanationCN": "藏语"
  },
  {
    "character": "𘍭",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "cleverness; skillful artisan",
    "explanationCN": "聪明;技艺精湛的工匠"
  },
  {
    "character": "𘋴",
    "GX": "yeṃ²",
    "GHC": "ˑjɨj²",
    "explanationEN": "Tibetan",
    "explanationCN": "藏语"
  },
  {
    "character": "𘎯",
    "GX": "rkawr²",
    "GHC": "kja̱r²",
    "explanationEN": "to cut",
    "explanationCN": "剪切"
  },
  {
    "character": "𘎱",
    "GX": "tśwe²",
    "GHC": "tśjij²",
    "explanationEN": "to drive away; to expel",
    "explanationCN": "驱赶;驱逐"
  },
  {
    "character": "𗰉",
    "GX": "lha¹",
    "GHC": "lhjow¹",
    "explanationEN": "wine",
    "explanationCN": "酒"
  },
  {
    "character": "𗯫",
    "GX": "lloh²",
    "GHC": "ljọ²",
    "explanationEN": "to catch.ʙ; to arrest.ʙ",
    "explanationCN": "捕捉。逮捕。"
  },
  {
    "character": "𗯻",
    "GX": "dźaw¹",
    "GHC": "¹",
    "explanationEN": "to burn; to kindle",
    "explanationCN": "燃烧;至 Kindle"
  },
  {
    "character": "𘎬",
    "GX": "kwih²",
    "GHC": "kjwị²",
    "explanationEN": "to harvest; to collect; to reap",
    "explanationCN": "收割;收集;收割"
  },
  {
    "character": "𘎘",
    "GX": "nli¹",
    "GHC": "lji̱¹",
    "explanationEN": "to smell",
    "explanationCN": "闻"
  },
  {
    "character": "𘂀",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "man; person; people",
    "explanationCN": "男人;人;人"
  },
  {
    "character": "𘋸",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "sexual intercourse",
    "explanationCN": "交配"
  },
  {
    "character": "𘐪",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "to draw (a bow)",
    "explanationCN": "拉弓"
  },
  {
    "character": "𘏃",
    "GX": "qə̱h¹",
    "GHC": "kə̣¹",
    "explanationEN": "to overflow; to spill",
    "explanationCN": "溢出;溢出"
  },
  {
    "character": "𘏡",
    "GX": "ŋqhae̱¹",
    "GHC": "khie̱j¹",
    "explanationEN": "fruit",
    "explanationCN": "水果"
  },
  {
    "character": "𘍫",
    "GX": "qhwai̱¹",
    "GHC": "khiwe¹",
    "explanationEN": "a surname; vigorous",
    "explanationCN": "姓氏;有力"
  },
  {
    "character": "𘖙",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "a unit of measurement for rolls of cloth or silk",
    "explanationCN": "布卷或丝绸卷的计量单位"
  },
  {
    "character": "𘕧",
    "GX": "nda̱²",
    "GHC": "da̱²",
    "explanationEN": "to tour; to walk; to patrol",
    "explanationCN": "到旅游;走路;巡逻"
  },
  {
    "character": "𘗢",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "husband and wife",
    "explanationCN": "丈夫和妻子"
  },
  {
    "character": "𘗝",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "door",
    "explanationCN": "门"
  },
  {
    "character": "𘕪",
    "GX": "γi̱w¹",
    "GHC": "ɣew¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘁸",
    "GX": "thə̱h¹",
    "GHC": "thə̣¹",
    "explanationEN": "even; well-distributed",
    "explanationCN": "甚至;分布良好"
  },
  {
    "character": "𘗥",
    "GX": "dẓaə̱¹",
    "GHC": "dźiə¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗭶",
    "GX": "go²",
    "GHC": "gjo²",
    "explanationEN": "to decline; to wane",
    "explanationCN": "拒绝;衰落"
  },
  {
    "character": "𘌨",
    "GX": "lah²",
    "GHC": "ljạ²",
    "explanationEN": "to burst; to split; to crack",
    "explanationCN": "爆裂;分裂;破解"
  },
  {
    "character": "𘍞",
    "GX": "γao̱h¹",
    "GHC": "ˑiọ¹",
    "explanationEN": "round; ring; courtyard; all",
    "explanationCN": "圆;戒指;庭院;都"
  },
  {
    "character": "𘛫",
    "GX": "liw¹",
    "GHC": "ljiw¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗮍",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "to tattoo the face (as a punishment); to brand",
    "explanationCN": "在脸上纹身（作为惩罚）;到品牌"
  },
  {
    "character": "𘃫",
    "GX": "qwə̱h¹",
    "GHC": "kwə̣¹",
    "explanationEN": "unfired brick",
    "explanationCN": "未烧制的砖"
  },
  {
    "character": "𘛒",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "mixed; in a mess; in a jumble",
    "explanationCN": "混合;一团糟;乱七八糟"
  },
  {
    "character": "𘍇",
    "GX": "rgwar¹",
    "GHC": "gjwar¹",
    "explanationEN": "to gallop; to speed",
    "explanationCN": "驰骋;速度"
  },
  {
    "character": "𘛢",
    "GX": "rmer¹",
    "GHC": "mjijr¹",
    "explanationEN": "soldier; person",
    "explanationCN": "士兵;人"
  },
  {
    "character": "𘌮",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "ghost; spirit; demon",
    "explanationCN": "鬼;精神;恶魔"
  },
  {
    "character": "𘍌",
    "GX": "phi̱¹",
    "GHC": "¹",
    "explanationEN": "wife",
    "explanationCN": "老婆"
  },
  {
    "character": "𘍑",
    "GX": "leṃ¹",
    "GHC": "ljɨj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗮤",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "penis",
    "explanationCN": "阴茎"
  },
  {
    "character": "𗮬",
    "GX": "nlə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "sore",
    "explanationCN": "疮"
  },
  {
    "character": "𗯏",
    "GX": "mbə̱¹",
    "GHC": "bə̱¹",
    "explanationEN": "maggot",
    "explanationCN": "蛆"
  },
  {
    "character": "𗮠",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "disaster; calamity",
    "explanationCN": "灾难;灾难"
  },
  {
    "character": "𗮫",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "sore",
    "explanationCN": "疮"
  },
  {
    "character": "𗮰",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "liver",
    "explanationCN": "肝"
  },
  {
    "character": "𗮸",
    "GX": "pə̱h¹",
    "GHC": "pə̣¹",
    "explanationEN": "pus",
    "explanationCN": "脓"
  },
  {
    "character": "𗮾",
    "GX": "rni̱r²",
    "GHC": "ner²",
    "explanationEN": "breast",
    "explanationCN": "胸"
  },
  {
    "character": "𗯃",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "sore",
    "explanationCN": "疮"
  },
  {
    "character": "𗯀",
    "GX": "śiw²",
    "GHC": "śjiw²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗮻",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗯉",
    "GX": "nlə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𘕮",
    "GX": "hə¹",
    "GHC": "xjɨ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘕯",
    "GX": "hi¹",
    "GHC": "xji¹",
    "explanationEN": "surprised; amazed; stunned",
    "explanationCN": "惊讶;惊讶;震惊"
  },
  {
    "character": "𘕬",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "to grow; to develop",
    "explanationCN": "成长;开发"
  },
  {
    "character": "𗭽",
    "GX": "di̱h²",
    "GHC": "dẹ²",
    "explanationEN": "to know; to dispel doubts",
    "explanationCN": "要知道;消除疑虑"
  },
  {
    "character": "𘁘",
    "GX": "qwə̱¹",
    "GHC": "kwə¹",
    "explanationEN": "back",
    "explanationCN": "返回"
  },
  {
    "character": "𘃞",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "one",
    "explanationCN": "EXLAM 系列"
  },
  {
    "character": "𘍵",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "to realize; to clever",
    "explanationCN": "实现;聪明"
  },
  {
    "character": "𘖅",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘛮",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "happy; cheerful",
    "explanationCN": "快乐;开朗"
  },
  {
    "character": "𘁵",
    "GX": "tse²",
    "GHC": "tsjij²",
    "explanationEN": "to slander; to defame",
    "explanationCN": "诽谤;诽谤"
  },
  {
    "character": "𘍹",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "scar",
    "explanationCN": "疤"
  },
  {
    "character": "𗮓",
    "GX": "nllə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "to detest",
    "explanationCN": "憎恶"
  },
  {
    "character": "𘁶",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "complete",
    "explanationCN": "完成"
  },
  {
    "character": "𗮉",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "to wait.ʙ",
    "explanationCN": "等待。"
  },
  {
    "character": "𗕀",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗭲",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "a kind of animal",
    "explanationCN": "一种动物"
  },
  {
    "character": "𘌯",
    "GX": "tśheṃ¹",
    "GHC": "tśhjɨj¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘋺",
    "GX": "ẓuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘃍",
    "GX": "nno̱¹",
    "GHC": "no̱¹",
    "explanationEN": "finger",
    "explanationCN": "手指"
  },
  {
    "character": "𘎢",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "to strike; to beat",
    "explanationCN": "打击;击败"
  },
  {
    "character": "𘎤",
    "GX": "tə¹",
    "GHC": "tjɨ¹",
    "explanationEN": "if",
    "explanationCN": "如果"
  },
  {
    "character": "𘋏",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "evening; night",
    "explanationCN": "傍晚;晚上"
  },
  {
    "character": "𘐳",
    "GX": "?ə²",
    "GHC": "²",
    "explanationEN": "volume",
    "explanationCN": "卷"
  },
  {
    "character": "𘂶",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "monkey; beast; animal",
    "explanationCN": "猴子;野兽;动物"
  },
  {
    "character": "𘏀",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "to cut; to chop",
    "explanationCN": "切割;砍伐"
  },
  {
    "character": "𘛟",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "uncle",
    "explanationCN": "叔叔"
  },
  {
    "character": "𘋨",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "emperor",
    "explanationCN": "皇帝"
  },
  {
    "character": "𘏐",
    "GX": "γwai̱¹",
    "GHC": "ɣwie¹",
    "explanationEN": "power; force",
    "explanationCN": "权力;力"
  },
  {
    "character": "𘎶",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "convulsion; spasm; lame; bent",
    "explanationCN": "惊厥;痉挛;跛;弯曲"
  },
  {
    "character": "𘟝",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "power; force",
    "explanationCN": "权力;力"
  },
  {
    "character": "𘁍",
    "GX": "lwəh¹",
    "GHC": "ljwɨ̣¹",
    "explanationEN": "calf",
    "explanationCN": "小腿"
  },
  {
    "character": "𘍲",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "surprised; astonished",
    "explanationCN": "惊讶;惊讶"
  },
  {
    "character": "𘐰",
    "GX": "qwaə̱¹",
    "GHC": "kiwə¹",
    "explanationEN": "to step on; to burst; to split",
    "explanationCN": "踩上去;爆裂;拆分"
  },
  {
    "character": "𘎴",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "to drag; to put out",
    "explanationCN": "拖动;扑灭"
  },
  {
    "character": "𘁂",
    "GX": "ya²",
    "GHC": "ˑja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘁻",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "crimson",
    "explanationCN": "深 红色"
  },
  {
    "character": "𘃒",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "width",
    "explanationCN": "宽度"
  },
  {
    "character": "𘏏",
    "GX": "tə¹",
    "GHC": "tjɨ¹",
    "explanationEN": "a kind of animal",
    "explanationCN": "一种动物"
  },
  {
    "character": "𘏯",
    "GX": "nśi²",
    "GHC": "śji̱²",
    "explanationEN": "earthworm",
    "explanationCN": "蚯蚓"
  },
  {
    "character": "𘛛",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "the sun",
    "explanationCN": "太阳"
  },
  {
    "character": "𘛸",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "meteorite; lightning; thunderbolt",
    "explanationCN": "陨石;闪电;霹雳"
  },
  {
    "character": "𘏮",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "to knead; to press",
    "explanationCN": "揉捏;按"
  },
  {
    "character": "𘏧",
    "GX": "yaw²",
    "GHC": "ˑja̱²",
    "explanationEN": "gold",
    "explanationCN": "金"
  },
  {
    "character": "𘏽",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "auspicious; lucky",
    "explanationCN": "吉祥;幸运"
  },
  {
    "character": "𘝱",
    "GX": "ŋkho¹",
    "GHC": "khjo̱¹",
    "explanationEN": "to open eyes",
    "explanationCN": "睁开眼睛"
  },
  {
    "character": "𗯬",
    "GX": "rvwe̱r²",
    "GHC": "wejr²",
    "explanationEN": "nose bolt",
    "explanationCN": "鼻形螺栓"
  },
  {
    "character": "𗯵",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "to destroy; to damage",
    "explanationCN": "摧毁;造成伤害"
  },
  {
    "character": "𗯰",
    "GX": "thi²",
    "GHC": "thji²",
    "explanationEN": "tail",
    "explanationCN": "尾巴"
  },
  {
    "character": "𘂺",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "stasis (of blood)",
    "explanationCN": "瘀滞 （血液）"
  },
  {
    "character": "𘂿",
    "GX": "vəh¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "skill",
    "explanationCN": "技能"
  },
  {
    "character": "𘏥",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "to ban; to prohibit",
    "explanationCN": "禁止;禁止"
  },
  {
    "character": "𗰌",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗰀",
    "GX": "nthwu̱¹",
    "GHC": "thwu̱¹",
    "explanationEN": "open; through",
    "explanationCN": "打开;通过"
  },
  {
    "character": "𘏎",
    "GX": "ndzu²",
    "GHC": "dzju̱²",
    "explanationEN": "to plant",
    "explanationCN": "种植"
  },
  {
    "character": "𘐙",
    "GX": "dzwə̱¹",
    "GHC": "dzwə¹",
    "explanationEN": "to arrest; to catch",
    "explanationCN": "逮捕;接住"
  },
  {
    "character": "𘐱",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "true; real; genuine",
    "explanationCN": "真;真正;真正"
  },
  {
    "character": "𘑄",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "to prohibit; to ban; to resist",
    "explanationCN": "禁止;禁止;抵抗"
  },
  {
    "character": "𘎖",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "to link; to continue",
    "explanationCN": "链接;继续"
  },
  {
    "character": "𘎕",
    "GX": "qhai̱w²",
    "GHC": "khiew²",
    "explanationEN": "maggot",
    "explanationCN": "蛆"
  },
  {
    "character": "𘐝",
    "GX": "ẓae̱ṃ¹",
    "GHC": "śiəj¹",
    "explanationEN": "to give birth; to bear",
    "explanationCN": "生孩子;承担"
  },
  {
    "character": "𘎛",
    "GX": "nẓai̱¹",
    "GHC": "śie̱¹",
    "explanationEN": "target; meaning",
    "explanationCN": "目标;意义"
  },
  {
    "character": "𘐯",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "to prohibit; to ban",
    "explanationCN": "禁止;禁止"
  },
  {
    "character": "𘋹",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "the Han",
    "explanationCN": "汉族"
  },
  {
    "character": "𘏭",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "to drag; to pull",
    "explanationCN": "拖动;拉取"
  },
  {
    "character": "𘂸",
    "GX": "keṃ¹",
    "GHC": "kjɨj¹",
    "explanationEN": "to surprise; to shock; to alarm",
    "explanationCN": "出其不意;休克;警报"
  },
  {
    "character": "𘖛",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "kind; benevolent",
    "explanationCN": "类;仁慈"
  },
  {
    "character": "𘕤",
    "GX": "yu²",
    "GHC": "ˑju²",
    "explanationEN": "to seek.ᴀ; to search.ᴀ",
    "explanationCN": "寻找。搜索。"
  },
  {
    "character": "𘛪",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "to be surprised; to be amazed",
    "explanationCN": "感到惊讶;令人惊叹"
  },
  {
    "character": "𘕨",
    "GX": "nsi¹",
    "GHC": "sji̱¹",
    "explanationEN": "to cry bitterly; to wail; to condole",
    "explanationCN": "痛哭;哀号;哀悼"
  },
  {
    "character": "𘗞",
    "GX": "rvor²",
    "GHC": "wjor²",
    "explanationEN": "nest",
    "explanationCN": "巢"
  },
  {
    "character": "𘁹",
    "GX": "rdza̱r¹",
    "GHC": "dzar¹",
    "explanationEN": "to vary; to change; to be magic",
    "explanationCN": "变化;改变;成为魔术师"
  },
  {
    "character": "𗮏",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "to exceed; to surpass",
    "explanationCN": "超过;超越"
  },
  {
    "character": "𘃬",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "thread; string",
    "explanationCN": "线;字符串"
  },
  {
    "character": "𘃭",
    "GX": "qhao̱²",
    "GHC": "khio²",
    "explanationEN": "skillful; ingenious",
    "explanationCN": "熟练;巧"
  },
  {
    "character": "𘌽",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "this",
    "explanationCN": "这"
  },
  {
    "character": "𘝠",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "scorpion",
    "explanationCN": "蝎子"
  },
  {
    "character": "𘞪",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "only; unique",
    "explanationCN": "只;独特"
  },
  {
    "character": "𗮦",
    "GX": "ntśi¹",
    "GHC": "tśji̱¹",
    "explanationEN": "to make love; to rape",
    "explanationCN": "做爱;强奸"
  },
  {
    "character": "𗮥",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "bottom; backside",
    "explanationCN": "底;屁股"
  },
  {
    "character": "𗮝",
    "GX": "lhao̱ṃ²",
    "GHC": "lhiow²",
    "explanationEN": "meat chopped into small pieces; minced meat",
    "explanationCN": "肉切成小块;肉末"
  },
  {
    "character": "𗮪",
    "GX": "su̱²",
    "GHC": "su²",
    "explanationEN": "pus",
    "explanationCN": "脓"
  },
  {
    "character": "𗯍",
    "GX": "khaṃ²",
    "GHC": "²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗯋",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "penis",
    "explanationCN": "阴茎"
  },
  {
    "character": "𘁢",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "to play; to tease",
    "explanationCN": "玩;挑逗"
  },
  {
    "character": "𘃢",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "woolen cloth",
    "explanationCN": "羊毛布"
  },
  {
    "character": "𘍡",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "penis",
    "explanationCN": "阴茎"
  },
  {
    "character": "𘌷",
    "GX": "nlu¹",
    "GHC": "lju̱¹",
    "explanationEN": "to cross",
    "explanationCN": "穿越"
  },
  {
    "character": "𘕞",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "to abet; to instigate",
    "explanationCN": "教唆;煽动"
  },
  {
    "character": "𘞫",
    "GX": "rgiwr²",
    "GHC": "gjiwr²",
    "explanationEN": "a bit of; a drop of",
    "explanationCN": "一点;一滴"
  },
  {
    "character": "𘗚",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘃎",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "palm; handful of",
    "explanationCN": "手掌;一小撮"
  },
  {
    "character": "𘎸",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "to decorate; to adorn; to ornament",
    "explanationCN": "装饰;装饰;到装饰"
  },
  {
    "character": "𘏔",
    "GX": "rphə̱r¹",
    "GHC": "phər¹",
    "explanationEN": "to eliminate; to clean away",
    "explanationCN": "消除;清理干净"
  },
  {
    "character": "𘐇",
    "GX": "la̱¹",
    "GHC": "¹",
    "explanationEN": "to record; to write; stele",
    "explanationCN": "记录;写;碑"
  },
  {
    "character": "𘖏",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "right now; this time",
    "explanationCN": "马上;这一次"
  },
  {
    "character": "𘋫",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "to bend; to inverse; to topple and fall",
    "explanationCN": "弯曲;到反向;倾倒和坠落"
  },
  {
    "character": "𘖕",
    "GX": "tso¹",
    "GHC": "tsjo¹",
    "explanationEN": "restless; impetuous",
    "explanationCN": "不安;浮躁"
  },
  {
    "character": "𘐠",
    "GX": "ŋwo̱²",
    "GHC": "ŋjwo²",
    "explanationEN": "to damage; to injure; to harm",
    "explanationCN": "损害;伤害;伤害"
  },
  {
    "character": "𘑀",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "to damage; to break",
    "explanationCN": "损害;打破"
  },
  {
    "character": "𘐡",
    "GX": "ntśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "order; sequence",
    "explanationCN": "次序;序列"
  },
  {
    "character": "𘎩",
    "GX": "swe̱¹",
    "GHC": "swej¹",
    "explanationEN": "fragmentary; broken",
    "explanationCN": "零碎;破碎"
  },
  {
    "character": "𘋧",
    "GX": "nlo²",
    "GHC": "ljo̱²",
    "explanationEN": "pants",
    "explanationCN": "裤子"
  },
  {
    "character": "𘖊",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "footmark; trace",
    "explanationCN": "足迹;跟踪"
  },
  {
    "character": "𘏓",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "interests (on an investment)",
    "explanationCN": "利息（投资）"
  },
  {
    "character": "𘎷",
    "GX": "nwəh²",
    "GHC": "njwɨ̣²",
    "explanationEN": "rush (to be used as wick)",
    "explanationCN": "Rush （用作灯芯）"
  },
  {
    "character": "𘎔",
    "GX": "qhai̱w²",
    "GHC": "khiew²",
    "explanationEN": "bow",
    "explanationCN": "弓"
  },
  {
    "character": "𗯟",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "to listen (respectfully); to hear",
    "explanationCN": "倾听（恭敬地）;听到"
  },
  {
    "character": "𘁼",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "puckery; astringent",
    "explanationCN": "puckery;涩"
  },
  {
    "character": "𘂯",
    "GX": "mbo̱²",
    "GHC": "bo̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘏕",
    "GX": "rvwai̱r¹",
    "GHC": "wier¹",
    "explanationEN": "to throw; to cast",
    "explanationCN": "投掷;投掷"
  },
  {
    "character": "𘏒",
    "GX": "phai̱²",
    "GHC": "phie²",
    "explanationEN": "to untie; to relieve",
    "explanationCN": "解开;缓解"
  },
  {
    "character": "𘏱",
    "GX": "si̱w²",
    "GHC": "sew²",
    "explanationEN": "piebald; stripe",
    "explanationCN": "花斑;条纹"
  },
  {
    "character": "𘏰",
    "GX": "və²",
    "GHC": "wjɨ²",
    "explanationEN": "right now; this time",
    "explanationCN": "马上;这一次"
  },
  {
    "character": "𘏑",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "general; universal",
    "explanationCN": "常规;普遍"
  },
  {
    "character": "𘃑",
    "GX": "mi̱h²",
    "GHC": "mẹ²",
    "explanationEN": "to abandon",
    "explanationCN": "放弃"
  },
  {
    "character": "𘖎",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "short; brief",
    "explanationCN": "短;短"
  },
  {
    "character": "𘏊",
    "GX": "rkur¹",
    "GHC": "kjur¹",
    "explanationEN": "to fill.ᴀ; to ladle.ᴀ",
    "explanationCN": "填写。到 Ladle.ᴀ"
  },
  {
    "character": "𘏩",
    "GX": "feṃh²",
    "GHC": "xjwɨ̣j²",
    "explanationEN": "to hang; to suspend",
    "explanationCN": "绞刑;暂停"
  },
  {
    "character": "𗰎",
    "GX": "γu̱h¹",
    "GHC": "ˑụ¹",
    "explanationEN": "young deer",
    "explanationCN": "麑"
  },
  {
    "character": "𗯴",
    "GX": "khu¹",
    "GHC": "khju¹",
    "explanationEN": "SUBE: subessive case",
    "explanationCN": "SUBE：潜移默化"
  },
  {
    "character": "𘛨",
    "GX": "ŋqwa̱¹",
    "GHC": "kwa̱¹",
    "explanationEN": "earthen bowl; alms bowl",
    "explanationCN": "钵;钵"
  },
  {
    "character": "𘋘",
    "GX": "qao̱²",
    "GHC": "kio²",
    "explanationEN": "to call; to make somebody do",
    "explanationCN": "打电话;让某人做"
  },
  {
    "character": "𘖉",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "to reach; to arrive",
    "explanationCN": "到达;到达"
  },
  {
    "character": "𘃓",
    "GX": "nna̱¹",
    "GHC": "na̱¹",
    "explanationEN": "to grab; to clutch",
    "explanationCN": "抓取;到离合器"
  },
  {
    "character": "𘐆",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "to record; to write; stele",
    "explanationCN": "记录;写;碑"
  },
  {
    "character": "𗯶",
    "GX": "rma̱r²",
    "GHC": "ma²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗯽",
    "GX": "mma̱r¹",
    "GHC": "ma̱r¹",
    "explanationEN": "wonderful; excellent",
    "explanationCN": "美妙;非常好"
  },
  {
    "character": "𘗣",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "pagoda; Buddhist pagoda",
    "explanationCN": "塔;佛塔"
  },
  {
    "character": "𘖚",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "marsh; swamp; bog",
    "explanationCN": "沼泽;沼泽;沼泽"
  },
  {
    "character": "𘛝",
    "GX": "tsu¹",
    "GHC": "tsju¹",
    "explanationEN": "penis",
    "explanationCN": "阴茎"
  },
  {
    "character": "𘝤",
    "GX": "ṇao̱ṃ¹",
    "GHC": "niow¹",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𘃚",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "to make; to build",
    "explanationCN": "使;构建"
  },
  {
    "character": "𗔿",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "ceremony; rite; to get a haircut",
    "explanationCN": "仪式;仪式;理发"
  },
  {
    "character": "𗭮",
    "GX": "źoṃ¹",
    "GHC": "źjow¹",
    "explanationEN": "down; cloth with soft nap",
    "explanationCN": "下;带柔软绒毛的布料"
  },
  {
    "character": "𗮅",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "many; much; more",
    "explanationCN": "多;多;更多"
  },
  {
    "character": "𗮀",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "intelligent; bright; clever",
    "explanationCN": "智能;明亮;聪明"
  },
  {
    "character": "𘁞",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "ahead",
    "explanationCN": "提前"
  },
  {
    "character": "𘃛",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "immediate; rapid",
    "explanationCN": "立即的;快速"
  },
  {
    "character": "𘃥",
    "GX": "ndu¹",
    "GHC": "dju̱¹",
    "explanationEN": "to store; to lay in",
    "explanationCN": "储存;躺下"
  },
  {
    "character": "𘁟",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "uneven; irregular; different",
    "explanationCN": "不平;规则;不同"
  },
  {
    "character": "𘍿",
    "GX": "rṇar¹",
    "GHC": "¹",
    "explanationEN": "hawk; eagle",
    "explanationCN": "鹰;鹰"
  },
  {
    "character": "𗮂",
    "GX": "pho¹",
    "GHC": "phjo¹",
    "explanationEN": "dexterous; nimble; skillful",
    "explanationCN": "灵巧;灵活;熟练"
  },
  {
    "character": "𘁯",
    "GX": "dzih¹",
    "GHC": "dzjị¹",
    "explanationEN": "claw; talon; finger",
    "explanationCN": "爪;爪;手指"
  },
  {
    "character": "𘕸",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "all; whole",
    "explanationCN": "都;整个"
  },
  {
    "character": "𘝟",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "to contact; to pass through",
    "explanationCN": "联系;通过"
  },
  {
    "character": "𘞨",
    "GX": "źeh²",
    "GHC": "źjịj²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘌾",
    "GX": "rbaa̱r¹",
    "GHC": "biar¹",
    "explanationEN": "to make a profit; to gallop",
    "explanationCN": "赚取利润;驰骋"
  },
  {
    "character": "𘕽",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "world",
    "explanationCN": "世界"
  },
  {
    "character": "𘌁",
    "GX": "rγo̱ṃr¹",
    "GHC": "ɣowr¹",
    "explanationEN": "crooked",
    "explanationCN": "歪"
  },
  {
    "character": "𘗗",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘗛",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "skeleton",
    "explanationCN": "骨架"
  },
  {
    "character": "𗮜",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to meet",
    "explanationCN": "满足"
  },
  {
    "character": "𗮣",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "rickets",
    "explanationCN": "佝偻病"
  },
  {
    "character": "𗯞",
    "GX": "be¹",
    "GHC": "bjij¹",
    "explanationEN": "to ring",
    "explanationCN": "响铃"
  },
  {
    "character": "𘎦",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "to gallop",
    "explanationCN": "驰骋"
  },
  {
    "character": "𘎳",
    "GX": "nvwi̱¹",
    "GHC": "we̱¹",
    "explanationEN": "to give birth; to bear",
    "explanationCN": "生孩子;承担"
  },
  {
    "character": "𘞯",
    "GX": "dźih¹",
    "GHC": "dźjị¹",
    "explanationEN": "sickle",
    "explanationCN": "镰刀"
  },
  {
    "character": "𘟜",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "wisdom; intelligence",
    "explanationCN": "智慧;情报"
  },
  {
    "character": "𗰋",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "a kind of silk",
    "explanationCN": "一种丝绸"
  },
  {
    "character": "𘋐",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "dawn; daybreak",
    "explanationCN": "黎明;黎明"
  },
  {
    "character": "𘋭",
    "GX": "tśha¹",
    "GHC": "tśhja¹",
    "explanationEN": "to destroy; to wreck",
    "explanationCN": "摧毁;破坏"
  },
  {
    "character": "𘍯",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "mother-in-law; aunt",
    "explanationCN": "岳母;阿姨"
  },
  {
    "character": "𘏸",
    "GX": "ẓaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "to send; to let somebody do",
    "explanationCN": "发送;让某人这样做"
  },
  {
    "character": "𘐓",
    "GX": "tah²",
    "GHC": "tjạ²",
    "explanationEN": "to unfold; to pave",
    "explanationCN": "展开;铺路"
  },
  {
    "character": "𘋔",
    "GX": "lae̱h²",
    "GHC": "lẹj²",
    "explanationEN": "evening; night",
    "explanationCN": "傍晚;晚上"
  },
  {
    "character": "𘐑",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "to play chess",
    "explanationCN": "下棋"
  },
  {
    "character": "𗯤",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "to cut; to break",
    "explanationCN": "切割;打破"
  },
  {
    "character": "𘋩",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "TERM: terminative case",
    "explanationCN": "术语：terminative"
  },
  {
    "character": "𘏁",
    "GX": "swe̱¹",
    "GHC": "swej¹",
    "explanationEN": "to link; to join",
    "explanationCN": "链接;加入"
  },
  {
    "character": "𘐏",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "to place; to put; to set up",
    "explanationCN": "放置;把;设置"
  },
  {
    "character": "𘐟",
    "GX": "nah²",
    "GHC": "njạ²",
    "explanationEN": "handkerchief",
    "explanationCN": "手帕"
  },
  {
    "character": "𘝲",
    "GX": "dwu¹",
    "GHC": "djwu¹",
    "explanationEN": "to close one’s eyes",
    "explanationCN": "闭上眼睛"
  },
  {
    "character": "𘏇",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "curtain; screen; tassel",
    "explanationCN": "窗帘;屏幕;流苏"
  },
  {
    "character": "𘛺",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "dawn",
    "explanationCN": "黎明"
  },
  {
    "character": "𘎙",
    "GX": "qhai̱w²",
    "GHC": "khiew²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘏣",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "to fetch; to strive for",
    "explanationCN": "取;努力争取"
  },
  {
    "character": "𘐎",
    "GX": "pih¹",
    "GHC": "pjị¹",
    "explanationEN": "fat; grease",
    "explanationCN": "脂肪;油"
  },
  {
    "character": "𘏠",
    "GX": "tsoh²",
    "GHC": "tsjọ²",
    "explanationEN": "to penetrate; to pass through",
    "explanationCN": "穿透;通过"
  },
  {
    "character": "𘝭",
    "GX": "rzər²",
    "GHC": "zjɨr²",
    "explanationEN": "the Milky Way",
    "explanationCN": "银河系"
  },
  {
    "character": "𘐿",
    "GX": "ŋkə¹",
    "GHC": "kjɨ̱¹",
    "explanationEN": "to supervise",
    "explanationCN": "监督"
  },
  {
    "character": "𘏿",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "to supervise; to preside",
    "explanationCN": "监督;主持"
  },
  {
    "character": "𘐺",
    "GX": "llo̱ṃh¹",
    "GHC": "lhọ¹",
    "explanationEN": "to force; to intimidate",
    "explanationCN": "强制;恐吓"
  },
  {
    "character": "𘁡",
    "GX": "za̱²",
    "GHC": "za²",
    "explanationEN": "illness; disease",
    "explanationCN": "疾病;疾病"
  },
  {
    "character": "𘍈",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "mad; insane",
    "explanationCN": "狂;疯"
  },
  {
    "character": "𘗕",
    "GX": "rẓae̱r²",
    "GHC": "źiejr²",
    "explanationEN": "to live; to reside",
    "explanationCN": "活着;居住"
  },
  {
    "character": "𘁲",
    "GX": "za̱¹",
    "GHC": "za¹",
    "explanationEN": "to comb one's hair",
    "explanationCN": "梳理头发"
  },
  {
    "character": "𘛱",
    "GX": "ga̱ṃ¹",
    "GHC": "gã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘃟",
    "GX": "ywaṃ¹",
    "GHC": "ˑjwã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘁴",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "calabash",
    "explanationCN": "葫芦"
  },
  {
    "character": "𘕼",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘍖",
    "GX": "rywar¹",
    "GHC": "ˑjwar¹",
    "explanationEN": "to be tired; to work hard",
    "explanationCN": "疲倦;努力工作"
  },
  {
    "character": "𗭯",
    "GX": "yoṃ¹",
    "GHC": "ˑjow¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘏛",
    "GX": "be̱²",
    "GHC": "bej²",
    "explanationEN": "rope; string",
    "explanationCN": "绳;字符串"
  },
  {
    "character": "𘑕",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "an animal-drawn seed plough",
    "explanationCN": "动物牵引的种子犁"
  },
  {
    "character": "𘏫",
    "GX": "yaa̱²",
    "GHC": "ˑjia²",
    "explanationEN": "to fall",
    "explanationCN": "坠落"
  },
  {
    "character": "𘐽",
    "GX": "tṣwae̱h¹",
    "GHC": "tśiwẹj¹",
    "explanationEN": "thunderous",
    "explanationCN": "雷鸣般的"
  },
  {
    "character": "𘐻",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "what time; when",
    "explanationCN": "什么时候;什么时候"
  },
  {
    "character": "𘑐",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "to measure",
    "explanationCN": "测量"
  },
  {
    "character": "𘏾",
    "GX": "tse̱¹",
    "GHC": "tsej¹",
    "explanationEN": "to plant; to grow",
    "explanationCN": "种植;成长"
  },
  {
    "character": "𘋜",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "illness; disease",
    "explanationCN": "疾病;疾病"
  },
  {
    "character": "𘃀",
    "GX": "rzi̱wr²",
    "GHC": "zewr²",
    "explanationEN": "east",
    "explanationCN": "东"
  },
  {
    "character": "𘐬",
    "GX": "bo̱²",
    "GHC": "bo²",
    "explanationEN": "cane; stick",
    "explanationCN": "甘蔗;棍"
  },
  {
    "character": "𘐾",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "to stir; to mix; to twist",
    "explanationCN": "搅拌;混合;扭曲"
  },
  {
    "character": "𘐸",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "to continue",
    "explanationCN": "继续"
  },
  {
    "character": "𘐼",
    "GX": "rtśir¹",
    "GHC": "tśjir¹",
    "explanationEN": "thunderous",
    "explanationCN": "雷鸣般的"
  },
  {
    "character": "𘑓",
    "GX": "rtśhawr²",
    "GHC": "tśja̱r²",
    "explanationEN": "zhang, a unit of length",
    "explanationCN": "zhang，长度单位"
  },
  {
    "character": "𘐗",
    "GX": "tə̱h¹",
    "GHC": "tə̣¹",
    "explanationEN": "to hold; to grasp",
    "explanationCN": "持有;掌握"
  },
  {
    "character": "𘐭",
    "GX": "ġo̱¹",
    "GHC": "go¹",
    "explanationEN": "to pull",
    "explanationCN": "拉取"
  },
  {
    "character": "𘂷",
    "GX": "khiṃ¹",
    "GHC": "khjwĩ¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘏻",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗶞",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "to reveal; to expose",
    "explanationCN": "揭示;暴露"
  },
  {
    "character": "𗶡",
    "GX": "hau̱¹",
    "GHC": "xu¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶯",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "imperial carriage; carriage",
    "explanationCN": "帝国马车;运输"
  },
  {
    "character": "𘟑",
    "GX": "ha̱ṃ²",
    "GHC": "xã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟒",
    "GX": "hwi̱²",
    "GHC": "xwe²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘟐",
    "GX": "rhə̱r²",
    "GHC": "xər²",
    "explanationEN": "to hum",
    "explanationCN": "哼唱"
  },
  {
    "character": "𗮗",
    "GX": "bə¹",
    "GHC": "¹",
    "explanationEN": "cheek",
    "explanationCN": "脸颊"
  },
  {
    "character": "𘁣",
    "GX": "γeṃ¹",
    "GHC": "ɣjɨj¹",
    "explanationEN": "pillow",
    "explanationCN": "枕头"
  },
  {
    "character": "𘍦",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "look; appearance",
    "explanationCN": "看;外观"
  },
  {
    "character": "𘍺",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "dawn; daybreak",
    "explanationCN": "黎明;黎明"
  },
  {
    "character": "𘛦",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "next year",
    "explanationCN": "明年"
  },
  {
    "character": "𗕂",
    "GX": "gu²",
    "GHC": "giu²",
    "explanationEN": "tool; utensil",
    "explanationCN": "工具;器具"
  },
  {
    "character": "𘍄",
    "GX": "qai̱¹",
    "GHC": "kie¹",
    "explanationEN": "to curse; to swear",
    "explanationCN": "诅咒;发誓"
  },
  {
    "character": "𘕺",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "canal; ditch",
    "explanationCN": "渠;渠"
  },
  {
    "character": "𘍂",
    "GX": "mo²",
    "GHC": "mjo²",
    "explanationEN": "sheep",
    "explanationCN": "羊"
  },
  {
    "character": "𘛣",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘍍",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "wife",
    "explanationCN": "老婆"
  },
  {
    "character": "𘋽",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𘌀",
    "GX": "rγae̱r²",
    "GHC": "ˑiejr²",
    "explanationEN": "curved; crooked",
    "explanationCN": "弯曲;歪"
  },
  {
    "character": "𗮚",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "urine",
    "explanationCN": "尿"
  },
  {
    "character": "𗮡",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "cheek",
    "explanationCN": "脸颊"
  },
  {
    "character": "𗮛",
    "GX": "tṣo̱ṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "to distribute; to allocate",
    "explanationCN": "分发;分配"
  },
  {
    "character": "𗮷",
    "GX": "zwə¹",
    "GHC": "zjwɨ¹",
    "explanationEN": "rickets",
    "explanationCN": "佝偻病"
  },
  {
    "character": "𗮵",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "to combine; to integrate",
    "explanationCN": "组合在一起;集成"
  },
  {
    "character": "𗮽",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "rib",
    "explanationCN": "肋"
  },
  {
    "character": "𗮶",
    "GX": "rpwər²",
    "GHC": "pjwɨ̱r²",
    "explanationEN": "spleen",
    "explanationCN": "脾"
  },
  {
    "character": "𗯈",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "trace; mark; scar",
    "explanationCN": "跟踪;马克;疤"
  },
  {
    "character": "𗯄",
    "GX": "kah²",
    "GHC": "kjạ²",
    "explanationEN": "scar; ugly",
    "explanationCN": "疤;丑"
  },
  {
    "character": "𗯎",
    "GX": "twəh¹",
    "GHC": "tjwɨ̣¹",
    "explanationEN": "pudendum",
    "explanationCN": "脓疱"
  },
  {
    "character": "𗮢",
    "GX": "lhao̱ṃ²",
    "GHC": "lhiow²",
    "explanationEN": "tinea; ringworm",
    "explanationCN": "癣;癣"
  },
  {
    "character": "𗯆",
    "GX": "məh²",
    "GHC": "mjɨ̣²",
    "explanationEN": "to jump",
    "explanationCN": "跳"
  },
  {
    "character": "𗯌",
    "GX": "tshai̱²",
    "GHC": "tshie²",
    "explanationEN": "stinking; smelly; foul",
    "explanationCN": "臭;臭;犯规"
  },
  {
    "character": "𗭻",
    "GX": "nle²",
    "GHC": "lji̱j²",
    "explanationEN": "to wait.ᴀ",
    "explanationCN": "等待。"
  },
  {
    "character": "𘃜",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "to permit; to allow",
    "explanationCN": "允许;以允许"
  },
  {
    "character": "𗭾",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "transparent",
    "explanationCN": "透明"
  },
  {
    "character": "𘁛",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "children",
    "explanationCN": "孩子"
  },
  {
    "character": "𘁧",
    "GX": "ntśhe¹",
    "GHC": "tśhji̱j¹",
    "explanationEN": "to argue; to debate",
    "explanationCN": "争论;辩论"
  },
  {
    "character": "𘎀",
    "GX": "ẓaə̱²",
    "GHC": "śiə²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗭹",
    "GX": "rba̱r¹",
    "GHC": "bar¹",
    "explanationEN": "drum",
    "explanationCN": "鼓"
  },
  {
    "character": "𗮖",
    "GX": "świ²",
    "GHC": "śjwi²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗮙",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "in a soft low voice",
    "explanationCN": "用轻柔低沉的声音"
  },
  {
    "character": "𘍳",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "special; particular; peculiar",
    "explanationCN": "特殊;特定;奇特"
  },
  {
    "character": "𗮁",
    "GX": "zweh²",
    "GHC": "zjwịj²",
    "explanationEN": "to sing praises of; to extol",
    "explanationCN": "歌颂赞美;赞美"
  },
  {
    "character": "𘍟",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "a unit of weight",
    "explanationCN": "重量单位"
  },
  {
    "character": "𘎁",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "top; top of the head",
    "explanationCN": "返回页首;头顶"
  },
  {
    "character": "𘁬",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "shallow; superficial",
    "explanationCN": "浅;浅"
  },
  {
    "character": "𘍥",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "to manage; to dominate",
    "explanationCN": "管理;统治"
  },
  {
    "character": "𘌧",
    "GX": "ti¹",
    "GHC": "tji¹",
    "explanationEN": "to drip",
    "explanationCN": "滴"
  },
  {
    "character": "𘌪",
    "GX": "rywər¹",
    "GHC": "ˑjer¹",
    "explanationEN": "mad; crazy",
    "explanationCN": "狂;疯狂"
  },
  {
    "character": "𘌱",
    "GX": "dzih¹",
    "GHC": "dzjị¹",
    "explanationEN": "to cross",
    "explanationCN": "穿越"
  },
  {
    "character": "𘍃",
    "GX": "rtśawr²",
    "GHC": "tśja̱r²",
    "explanationEN": "sound of teeth grinding",
    "explanationCN": "磨牙的声音"
  },
  {
    "character": "𘕢",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "enemy; foe",
    "explanationCN": "敌人;敌人"
  },
  {
    "character": "𘛕",
    "GX": "ẓwaə̱²",
    "GHC": "śiwə²",
    "explanationEN": "gorgeous; splendid",
    "explanationCN": "华丽;灿烂"
  },
  {
    "character": "𘕫",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "to fear; to dread",
    "explanationCN": "恐惧;恐惧"
  },
  {
    "character": "𘛤",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "crucible",
    "explanationCN": "坩埚"
  },
  {
    "character": "𘋼",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "will; ideal; aspiration",
    "explanationCN": "将;理想;愿望"
  },
  {
    "character": "𗮘",
    "GX": "świ²",
    "GHC": "śjwi²",
    "explanationEN": "food; cooked rice or other cereals",
    "explanationCN": "食物;煮熟的米饭或其他谷物"
  },
  {
    "character": "𗮈",
    "GX": "ṇah?",
    "GHC": "njạ?",
    "explanationEN": "frost",
    "explanationCN": "霜"
  },
  {
    "character": "𘁎",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "a place name (dyke; embankment)",
    "explanationCN": "地名 （Dyke;Embankment）"
  },
  {
    "character": "𘁤",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "woman; girl; daughter",
    "explanationCN": "女人;女孩;女儿"
  },
  {
    "character": "𘃮",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "to leave; to depart from",
    "explanationCN": "离开;出发地"
  },
  {
    "character": "𘛯",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘛰",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "wizard; shaman",
    "explanationCN": "巫师;萨满"
  },
  {
    "character": "𘍾",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "a conjunction",
    "explanationCN": "连词"
  },
  {
    "character": "𘕎",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "to listen.ᴀ",
    "explanationCN": "去听。"
  },
  {
    "character": "𘁝",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "centre; middle",
    "explanationCN": "中心;中间"
  },
  {
    "character": "𘁥",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𗭱",
    "GX": "ga²",
    "GHC": "gja²",
    "explanationEN": "old sheep",
    "explanationCN": "老羊"
  },
  {
    "character": "𘌸",
    "GX": "to̱ṃh¹",
    "GHC": "tọ¹",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𘌲",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "to add; to increase",
    "explanationCN": "补充;增加"
  },
  {
    "character": "𘍀",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "to play; to sport",
    "explanationCN": "玩;到运动"
  },
  {
    "character": "𘍋",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "narrow; cramped",
    "explanationCN": "窄;狭窄"
  },
  {
    "character": "𘍆",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "grey; ashy",
    "explanationCN": "灰色;灰"
  },
  {
    "character": "𘌼",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "straight; swelling",
    "explanationCN": "直;肿胀"
  },
  {
    "character": "𘕡",
    "GX": "rzi̱wr¹",
    "GHC": "zewr¹",
    "explanationEN": "graceful; elegant; gorgeous",
    "explanationCN": "优美;优雅;华丽"
  },
  {
    "character": "𘕻",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "three",
    "explanationCN": "三"
  },
  {
    "character": "𘍔",
    "GX": "tśih¹",
    "GHC": "tśjị¹",
    "explanationEN": "bitter; painful",
    "explanationCN": "苦;痛苦"
  },
  {
    "character": "𘕭",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "abundant",
    "explanationCN": "丰富"
  },
  {
    "character": "𘗙",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "brown",
    "explanationCN": "棕色"
  },
  {
    "character": "𘗖",
    "GX": "ŋkhe¹",
    "GHC": "khji̱j¹",
    "explanationEN": "to play games",
    "explanationCN": "玩游戏"
  },
  {
    "character": "𘃉",
    "GX": "ŋwə̱¹",
    "GHC": "ŋwə¹",
    "explanationEN": "to sleep; to be drowsy",
    "explanationCN": "睡觉;昏昏欲睡"
  },
  {
    "character": "𘍠",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "mortar",
    "explanationCN": "臼"
  },
  {
    "character": "𘁜",
    "GX": "dzu²",
    "GHC": "dzju²",
    "explanationEN": "livestock",
    "explanationCN": "牲畜"
  },
  {
    "character": "𘁦",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "navel",
    "explanationCN": "肚脐"
  },
  {
    "character": "𘃣",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘌹",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "to run quickly",
    "explanationCN": "快速运行"
  },
  {
    "character": "𘛩",
    "GX": "ŋkə¹",
    "GHC": "kjɨ̱¹",
    "explanationEN": "spotted; striped",
    "explanationCN": "发现;条纹"
  },
  {
    "character": "𘌿",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "skillful; ingenious",
    "explanationCN": "熟练;巧"
  },
  {
    "character": "𘛔",
    "GX": "nwo̱ṃ²",
    "GHC": "nwə²",
    "explanationEN": "to herd",
    "explanationCN": "放牧"
  },
  {
    "character": "𘍸",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "natural resources",
    "explanationCN": "自然资源"
  },
  {
    "character": "𘋶",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "ghost; spirit",
    "explanationCN": "鬼;精神"
  },
  {
    "character": "𘎻",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "to wipe off; to whisk",
    "explanationCN": "擦掉;以打蛋"
  },
  {
    "character": "𘏙",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "to wipe off; to whisk",
    "explanationCN": "擦掉;以打蛋"
  },
  {
    "character": "𘏹",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "chopsticks",
    "explanationCN": "筷子"
  },
  {
    "character": "𘐨",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "song",
    "explanationCN": "歌"
  },
  {
    "character": "𘐴",
    "GX": "rŋər²",
    "GHC": "ŋjɨr²",
    "explanationEN": "to beat; to pound",
    "explanationCN": "殴打;到 Pound"
  },
  {
    "character": "𘐶",
    "GX": "dźwo²",
    "GHC": "dźjwo²",
    "explanationEN": "to throw; to fling",
    "explanationCN": "投掷;投掷"
  },
  {
    "character": "𘂻",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "owlet",
    "explanationCN": "猫头鹰"
  },
  {
    "character": "𗯯",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "clumsy; dull; unskillful",
    "explanationCN": "笨拙;钝痛;伹"
  },
  {
    "character": "𘃅",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "to store; to save",
    "explanationCN": "储存;保存"
  },
  {
    "character": "𘍪",
    "GX": "hu¹",
    "GHC": "xju¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘎨",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "to bear.ʙ (a burden); to endure.ʙ",
    "explanationCN": "to bear.ʙ （负担）;忍耐。"
  },
  {
    "character": "𘏬",
    "GX": "ŋqa̱r¹",
    "GHC": "ka̱r¹",
    "explanationEN": "steelyard",
    "explanationCN": "秤"
  },
  {
    "character": "𘝯",
    "GX": "mbao̱¹",
    "GHC": "bjo̱¹",
    "explanationEN": "to look; to watch; to observe",
    "explanationCN": "去看;观看;观察"
  },
  {
    "character": "𘝧",
    "GX": "mbao̱¹",
    "GHC": "bio̱¹",
    "explanationEN": "to patrol",
    "explanationCN": "巡逻"
  },
  {
    "character": "𗰂",
    "GX": "hwo̱²",
    "GHC": "xwo²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘋓",
    "GX": "ŋgə²",
    "GHC": "gjɨ̱²",
    "explanationEN": "note; remark; explanation",
    "explanationCN": "注意;备注;解释"
  },
  {
    "character": "𗰅",
    "GX": "gwe¹",
    "GHC": "¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘋳",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "clothes; clothing",
    "explanationCN": "衣服;服装"
  },
  {
    "character": "𘂱",
    "GX": "mbo̱¹",
    "GHC": "bo̱¹",
    "explanationEN": "color",
    "explanationCN": "颜色"
  },
  {
    "character": "𘂼",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "imperial edict",
    "explanationCN": "皇帝敕令"
  },
  {
    "character": "𘐍",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "to penetrate; to pierce through",
    "explanationCN": "穿透;刺穿"
  },
  {
    "character": "𘎚",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "to patch; to mend",
    "explanationCN": "修补;修补"
  },
  {
    "character": "𘎠",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "dustpan",
    "explanationCN": "簸箕"
  },
  {
    "character": "𘝦",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "skill; art",
    "explanationCN": "技能;艺术"
  },
  {
    "character": "𘃁",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "bear",
    "explanationCN": "熊"
  },
  {
    "character": "𘃇",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "name of a ghost",
    "explanationCN": "幽灵的名字"
  },
  {
    "character": "𘐩",
    "GX": "phə¹",
    "GHC": "phjɨ¹",
    "explanationEN": "to lose; to discard; to abandon",
    "explanationCN": "输;丢弃;放弃"
  },
  {
    "character": "𘐢",
    "GX": "ŋġai̱¹",
    "GHC": "gie̱¹",
    "explanationEN": "shy; bashful",
    "explanationCN": "害羞;害羞"
  },
  {
    "character": "𘋥",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "motto",
    "explanationCN": "座右铭"
  },
  {
    "character": "𘋬",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "to love; to like; clothing",
    "explanationCN": "去爱;喜欢;服装"
  },
  {
    "character": "𘎣",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "winding; crooked",
    "explanationCN": "绕组;歪"
  },
  {
    "character": "𘎪",
    "GX": "ntshe¹",
    "GHC": "tshji̱j¹",
    "explanationEN": "to speak.ᴀ",
    "explanationCN": "说。"
  },
  {
    "character": "𘎵",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "tax; duty",
    "explanationCN": "税;责任"
  },
  {
    "character": "𘝮",
    "GX": "llwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "to cry; to weep",
    "explanationCN": "哭泣;哭泣"
  },
  {
    "character": "𘝥",
    "GX": "ntshe²",
    "GHC": "tshji̱j²",
    "explanationEN": "joke; jest",
    "explanationCN": "笑话;开玩笑"
  },
  {
    "character": "𘁽",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "color; to plaster",
    "explanationCN": "颜色;到石膏"
  },
  {
    "character": "𘋦",
    "GX": "nẓaa̱²",
    "GHC": "źia̱²",
    "explanationEN": "to exert",
    "explanationCN": "发挥"
  },
  {
    "character": "𘖍",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "to beg",
    "explanationCN": "乞求"
  },
  {
    "character": "𘖌",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "naughty children",
    "explanationCN": "顽皮的孩子"
  },
  {
    "character": "𘏟",
    "GX": "γa̱¹",
    "GHC": ".a¹",
    "explanationEN": "full; content",
    "explanationCN": "满;内容"
  },
  {
    "character": "𘎲",
    "GX": "lhu̱¹",
    "GHC": "lhu¹",
    "explanationEN": "to increase; to raise; to add",
    "explanationCN": "增加;提高;添加"
  },
  {
    "character": "𘝰",
    "GX": "giṃ¹",
    "GHC": "gjĩ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗰇",
    "GX": "lha¹",
    "GHC": "lhjow¹",
    "explanationEN": "to call; to shout to",
    "explanationCN": "打电话;向"
  },
  {
    "character": "𘁋",
    "GX": "ṇ??",
    "GHC": "?",
    "explanationEN": "tooth",
    "explanationCN": "牙"
  },
  {
    "character": "𗯮",
    "GX": "nthwu̱¹",
    "GHC": "thwu̱¹",
    "explanationEN": "same; alike",
    "explanationCN": "相同;一样"
  },
  {
    "character": "𗯲",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "to invade; to touch",
    "explanationCN": "侵略;触摸"
  },
  {
    "character": "𘋲",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "to play; to sport",
    "explanationCN": "玩;到运动"
  },
  {
    "character": "𘐐",
    "GX": "mah¹",
    "GHC": "mjạ¹",
    "explanationEN": "to injure; to scratch",
    "explanationCN": "伤害;刮擦"
  },
  {
    "character": "𗰈",
    "GX": "dźwaw²",
    "GHC": "dźjwa̱²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗰍",
    "GX": "dẓai̱w¹",
    "GHC": "dźiew¹",
    "explanationEN": "to be worried about",
    "explanationCN": "值得担心"
  },
  {
    "character": "𘑅",
    "GX": "ŋkə¹",
    "GHC": "kjɨ̱¹",
    "explanationEN": "to wrestle; to struggle",
    "explanationCN": "摔跤;挣扎"
  },
  {
    "character": "𘋱",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "maxim; motto; aphorism",
    "explanationCN": "格言;座右铭;格言"
  },
  {
    "character": "𘎥",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "to put; to arrange for",
    "explanationCN": "把;安排"
  },
  {
    "character": "𘍰",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "difference",
    "explanationCN": "差异"
  },
  {
    "character": "𘋗",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "fine horse; steed",
    "explanationCN": "好马;骏马"
  },
  {
    "character": "𘞥",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "to live in peace",
    "explanationCN": "和平生活"
  },
  {
    "character": "𘞦",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "upright and outspoken",
    "explanationCN": "正直直言不讳"
  },
  {
    "character": "𘏜",
    "GX": "nti̱w²",
    "GHC": "te̱w²",
    "explanationEN": "to pound with a pestle",
    "explanationCN": "用杵捣碎"
  },
  {
    "character": "𘐞",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "bridle",
    "explanationCN": "缰绳"
  },
  {
    "character": "𘁃",
    "GX": "ya²",
    "GHC": "ˑja²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𘃏",
    "GX": "pah²",
    "GHC": "pjạ²",
    "explanationEN": "a kind of bird",
    "explanationCN": "一种鸟"
  },
  {
    "character": "𘃆",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "to hang",
    "explanationCN": "挂起"
  },
  {
    "character": "𘖑",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "NEG.MOD",
    "explanationCN": "否定。国防部"
  },
  {
    "character": "𘎾",
    "GX": "kheṃ¹",
    "GHC": "khjɨj¹",
    "explanationEN": "to grant.ʙ",
    "explanationCN": "授予。"
  },
  {
    "character": "𘏚",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "the place where something happen",
    "explanationCN": "NMLZ：LOC"
  },
  {
    "character": "𘏼",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘐧",
    "GX": "pih¹",
    "GHC": "pjị¹",
    "explanationEN": "Qiang and Rong people",
    "explanationCN": "强和荣人"
  },
  {
    "character": "𘐵",
    "GX": "phə²",
    "GHC": "phjɨ²",
    "explanationEN": "branch; twig",
    "explanationCN": "分支;树枝"
  },
  {
    "character": "𘑆",
    "GX": "phə²",
    "GHC": "phjɨ²",
    "explanationEN": "a kind of insect",
    "explanationCN": "一种昆虫"
  },
  {
    "character": "𘋯",
    "GX": "yeṃ²",
    "GHC": "ˑjɨj²",
    "explanationEN": "bag; sack",
    "explanationCN": "袋;袋"
  },
  {
    "character": "𘋷",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to squeeze; to press; to force",
    "explanationCN": "挤压;按 ;强制"
  },
  {
    "character": "𘂮",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "to hate",
    "explanationCN": "恨"
  },
  {
    "character": "𘏍",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "to butcher; to chop",
    "explanationCN": "屠夫;砍伐"
  },
  {
    "character": "𘏪",
    "GX": "nae̱h²",
    "GHC": "dẹj²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘏨",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "treasure",
    "explanationCN": "珍惜"
  },
  {
    "character": "𘛭",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "stars",
    "explanationCN": "星星"
  },
  {
    "character": "𗯳",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "luxuriant; majestic",
    "explanationCN": "华丽;雄伟"
  },
  {
    "character": "𗯺",
    "GX": "rdwar¹",
    "GHC": "djwar¹",
    "explanationEN": "knife; sickle",
    "explanationCN": "刀;镰刀"
  },
  {
    "character": "𗯿",
    "GX": "rvwe̱r¹",
    "GHC": "wejr¹",
    "explanationEN": "flourishing; luxuriant",
    "explanationCN": "繁荣;华丽"
  },
  {
    "character": "𘁿",
    "GX": "kwih²",
    "GHC": "kjwị²",
    "explanationEN": "stirrup",
    "explanationCN": "箍 筋"
  },
  {
    "character": "𘋕",
    "GX": "ho̱¹",
    "GHC": "xo¹",
    "explanationEN": "he; it; that",
    "explanationCN": "他;它;那"
  },
  {
    "character": "𘑒",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "bag; sack",
    "explanationCN": "袋;袋"
  },
  {
    "character": "𘑑",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "to scrape",
    "explanationCN": "抓取"
  },
  {
    "character": "𗯾",
    "GX": "luh¹",
    "GHC": "ljụ¹",
    "explanationEN": "Mongolian gazelle",
    "explanationCN": "黄羊"
  },
  {
    "character": "𘁈",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "down; lower; under",
    "explanationCN": "下;降低;下"
  },
  {
    "character": "𘂃",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "color; appearance",
    "explanationCN": "颜色;外观"
  },
  {
    "character": "𘎗",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "bow; crossbow",
    "explanationCN": "弓;弩"
  },
  {
    "character": "𘎡",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "sweet smell; flavor",
    "explanationCN": "香味;味道"
  },
  {
    "character": "𘃄",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "grip; handle",
    "explanationCN": "握;处理"
  },
  {
    "character": "𘂬",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "to exist(attached)",
    "explanationCN": "to exist（附加）"
  },
  {
    "character": "𘎼",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "to abandon; to distinguish; to expel",
    "explanationCN": "放弃;以区分;驱逐"
  },
  {
    "character": "𘏝",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "bow; crossbow",
    "explanationCN": "弓;弩"
  },
  {
    "character": "𘛘",
    "GX": "ntśə²",
    "GHC": "śjɨ̱²",
    "explanationEN": "to expand",
    "explanationCN": "展开"
  },
  {
    "character": "𘁅",
    "GX": "phu¹",
    "GHC": "phju¹",
    "explanationEN": "ox",
    "explanationCN": "牛"
  },
  {
    "character": "𘂭",
    "GX": "lweh¹",
    "GHC": "ljwịj¹",
    "explanationEN": "to hate",
    "explanationCN": "恨"
  },
  {
    "character": "𘏌",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "to hold; to grip; to grasp",
    "explanationCN": "持有;抓握;掌握"
  },
  {
    "character": "𘂴",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "tail; end; back",
    "explanationCN": "尾巴;结束;返回"
  },
  {
    "character": "𘂾",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "tail; end; east",
    "explanationCN": "尾巴;结束;东"
  },
  {
    "character": "𘋑",
    "GX": "qwaa̱¹",
    "GHC": "kiwa¹",
    "explanationEN": "remnants",
    "explanationCN": "残余"
  },
  {
    "character": "𘋙",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "fast; rapid; speech; word",
    "explanationCN": "快;快速;演讲;词"
  },
  {
    "character": "𘃗",
    "GX": "ndə¹",
    "GHC": "djɨ̱¹",
    "explanationEN": "to estimate",
    "explanationCN": "估算"
  },
  {
    "character": "𘐷",
    "GX": "ŋqa̱r¹",
    "GHC": "ka̱r¹",
    "explanationEN": "to measure; to examine",
    "explanationCN": "测量;检查"
  },
  {
    "character": "𘐒",
    "GX": "ryer²",
    "GHC": "ˑji̱r²",
    "explanationEN": "to spread; to uphold",
    "explanationCN": "传播;维护"
  },
  {
    "character": "𘂲",
    "GX": "nsu¹",
    "GHC": "sju̱¹",
    "explanationEN": "silver",
    "explanationCN": "银"
  },
  {
    "character": "𘏞",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "to report; to reply",
    "explanationCN": "报告 ;回复"
  },
  {
    "character": "𘎽",
    "GX": "qhai̱w¹",
    "GHC": "khiew¹",
    "explanationEN": "to demolish; to destroy",
    "explanationCN": "拆除;销毁"
  },
  {
    "character": "𘛬",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "ridge",
    "explanationCN": "脊"
  },
  {
    "character": "𘕣",
    "GX": "vwa̱²",
    "GHC": "wa²",
    "explanationEN": "how; what",
    "explanationCN": "如何;什么"
  },
  {
    "character": "𘗠",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "door; gate; room",
    "explanationCN": "门;门;房间"
  },
  {
    "character": "𘁺",
    "GX": "lheṃ¹",
    "GHC": "lhjɨj¹",
    "explanationEN": "magic",
    "explanationCN": "魔法"
  },
  {
    "character": "𘁷",
    "GX": "rdza̱r¹",
    "GHC": "dzar¹",
    "explanationEN": "to survey; to measure",
    "explanationCN": "进行调查;测量"
  },
  {
    "character": "𗮔",
    "GX": "swi̱w¹",
    "GHC": "swew¹",
    "explanationEN": "to shine; to illuminate",
    "explanationCN": "闪耀;照亮"
  },
  {
    "character": "𘎄",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "to listen; to hear",
    "explanationCN": "倾听;听到"
  },
  {
    "character": "𘃦",
    "GX": "nllə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "to do; to act; can",
    "explanationCN": "去做; 能够"
  },
  {
    "character": "𘍁",
    "GX": "rtṣaə̱r¹",
    "GHC": "tśiər¹",
    "explanationEN": "crack noise",
    "explanationCN": "裂纹噪声"
  },
  {
    "character": "𘕝",
    "GX": "be̱¹",
    "GHC": "bej¹",
    "explanationEN": "smallpox",
    "explanationCN": "天花"
  },
  {
    "character": "𘕠",
    "GX": "rtṣao̱r¹",
    "GHC": "tśior¹",
    "explanationEN": "dirty; filthy",
    "explanationCN": "脏;肮脏"
  },
  {
    "character": "𘞬",
    "GX": "γwi̱ṃ¹",
    "GHC": "ɣwẽ¹",
    "explanationEN": "complete; overall",
    "explanationCN": "完成;整体"
  },
  {
    "character": "𘍙",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "tired; weary",
    "explanationCN": "累;倦"
  },
  {
    "character": "𗮮",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "nose",
    "explanationCN": "鼻子"
  },
  {
    "character": "𗮯",
    "GX": "śwaw¹",
    "GHC": "śjwa̱¹",
    "explanationEN": "the upper part of the human body",
    "explanationCN": "人体的上半部分"
  },
  {
    "character": "𗮴",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "sore",
    "explanationCN": "疮"
  },
  {
    "character": "𗮼",
    "GX": "peh²",
    "GHC": "pjij²",
    "explanationEN": "kidney",
    "explanationCN": "肾"
  },
  {
    "character": "𗮱",
    "GX": "sa²",
    "GHC": "sja²",
    "explanationEN": "to make love; rape",
    "explanationCN": "做爱;强奸"
  },
  {
    "character": "𗯁",
    "GX": "śiw²",
    "GHC": "śjiw²",
    "explanationEN": "louse",
    "explanationCN": "虱子"
  },
  {
    "character": "𗮊",
    "GX": "pho¹",
    "GHC": "phjo¹",
    "explanationEN": "Mongolian gazelle",
    "explanationCN": "黄羊"
  },
  {
    "character": "𘌰",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "Mongolian gazelle",
    "explanationCN": "黄羊"
  },
  {
    "character": "𘋻",
    "GX": "źu²",
    "GHC": "źju²",
    "explanationEN": "difference",
    "explanationCN": "差异"
  },
  {
    "character": "𘛏",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗮆",
    "GX": "llih¹",
    "GHC": "ljị¹",
    "explanationEN": "arrow",
    "explanationCN": "箭"
  },
  {
    "character": "𘃌",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "to sleep",
    "explanationCN": "睡觉"
  },
  {
    "character": "𘃪",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "end",
    "explanationCN": "结束"
  },
  {
    "character": "𘁩",
    "GX": "rqo̱ṃr²",
    "GHC": "kowr²",
    "explanationEN": "slanting; inclined",
    "explanationCN": "斜;倾向"
  },
  {
    "character": "𘍻",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "special; peculiar",
    "explanationCN": "特殊;奇特"
  },
  {
    "character": "𘍣",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "to grow; to develop",
    "explanationCN": "成长;开发"
  },
  {
    "character": "𗭳",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "lamb",
    "explanationCN": "羔羊"
  },
  {
    "character": "𘞭",
    "GX": "rtwar¹",
    "GHC": "tjwar¹",
    "explanationEN": "only; single; alone",
    "explanationCN": "只;单;独自"
  },
  {
    "character": "𘗘",
    "GX": "rdar¹",
    "GHC": "djar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘗔",
    "GX": "dya²",
    "GHC": "dja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘍗",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "toil; hard labor; penal servitude",
    "explanationCN": "辛劳;艰苦的劳动;刑罚奴役"
  },
  {
    "character": "𘁪",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "husband",
    "explanationCN": "老公"
  },
  {
    "character": "𘁾",
    "GX": "ŋwo̱²",
    "GHC": "ŋwo²",
    "explanationEN": "eloquence",
    "explanationCN": "口才"
  },
  {
    "character": "𘁉",
    "GX": "ŋwo̱²",
    "GHC": "ŋwo²",
    "explanationEN": "elephant",
    "explanationCN": "象"
  },
  {
    "character": "𘐋",
    "GX": "vwuh¹",
    "GHC": "wjụ¹",
    "explanationEN": "ladle; scoop",
    "explanationCN": "钢包;舀"
  },
  {
    "character": "𘃂",
    "GX": "vəh²",
    "GHC": "wjɨ̣²",
    "explanationEN": "tail; end; east",
    "explanationCN": "尾巴;结束;东"
  },
  {
    "character": "𘑌",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "evidence; proof",
    "explanationCN": "证据;证明"
  },
  {
    "character": "𘐛",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "to transport.ʙ",
    "explanationCN": "到交通。"
  },
  {
    "character": "𘏶",
    "GX": "twi̱w¹",
    "GHC": "twew¹",
    "explanationEN": "to join; to connect",
    "explanationCN": "加入;连接"
  },
  {
    "character": "𘐦",
    "GX": "vwuh¹",
    "GHC": "¹",
    "explanationEN": "bottle; jar",
    "explanationCN": "瓶;罐"
  },
  {
    "character": "𘑖",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "to drill; to bore",
    "explanationCN": "钻孔;钻孔"
  },
  {
    "character": "𘎞",
    "GX": "na̱h¹",
    "GHC": "nạ¹",
    "explanationEN": "nasal mucus",
    "explanationCN": "涕"
  },
  {
    "character": "𘑔",
    "GX": "tśaw¹",
    "GHC": "tśja̱¹",
    "explanationEN": "to chop; to cut; to butcher",
    "explanationCN": "砍;切割;屠夫"
  },
  {
    "character": "𘖒",
    "GX": "məh²",
    "GHC": "mjɨ̣²",
    "explanationEN": "to investigate; to follow the trail of",
    "explanationCN": "进行调查;追寻"
  },
  {
    "character": "𘂽",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "tail; bottom",
    "explanationCN": "尾巴;底"
  },
  {
    "character": "𘎹",
    "GX": "ndu̱¹",
    "GHC": "du̱¹",
    "explanationEN": "part; portion",
    "explanationCN": "部分;部分"
  },
  {
    "character": "𘏘",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "to ferment",
    "explanationCN": "发酵"
  },
  {
    "character": "𘐤",
    "GX": "tshwe̱¹",
    "GHC": "tshwej¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗯸",
    "GX": "pa̱ṃ¹",
    "GHC": "pã¹",
    "explanationEN": "stunned; astonished",
    "explanationCN": "震惊;惊讶"
  },
  {
    "character": "𗯭",
    "GX": "vwe̱¹",
    "GHC": "wej¹",
    "explanationEN": "peaceful and happy; auspicious",
    "explanationCN": "平和快乐;吉祥"
  },
  {
    "character": "𘂵",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "to lose conscience",
    "explanationCN": "失去良心"
  },
  {
    "character": "𘍩",
    "GX": "haṃ¹",
    "GHC": "xjã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘏲",
    "GX": "rtser¹",
    "GHC": "tsji̱r¹",
    "explanationEN": "to select; to choose",
    "explanationCN": "进行选择;以选择"
  },
  {
    "character": "𘞮",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "sharp weapon; efficient instrument",
    "explanationCN": "利器;高效仪表"
  },
  {
    "character": "𘐣",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "radish",
    "explanationCN": "萝卜"
  },
  {
    "character": "𘖓",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "to break; to break",
    "explanationCN": "打破;打破"
  },
  {
    "character": "𗯢",
    "GX": "gwə¹",
    "GHC": "gjwɨ¹",
    "explanationEN": "to cut; to break; to snap",
    "explanationCN": "切割;打破;捕捉"
  },
  {
    "character": "𘂰",
    "GX": "nẓao̱²",
    "GHC": "śio̱²",
    "explanationEN": "twin; a pair of",
    "explanationCN": "双;一对"
  },
  {
    "character": "𘍬",
    "GX": "ha²",
    "GHC": "xja²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘍮",
    "GX": "rhar¹",
    "GHC": "xjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘏗",
    "GX": "ntśi²",
    "GHC": "tśji̱²",
    "explanationEN": "finger",
    "explanationCN": "手指"
  },
  {
    "character": "𘏷",
    "GX": "ndi¹",
    "GHC": "dji̱¹",
    "explanationEN": "to divide; to distribute",
    "explanationCN": "分割;分发"
  },
  {
    "character": "𘖋",
    "GX": "ŋə̱¹",
    "GHC": "ŋə¹",
    "explanationEN": "fatness",
    "explanationCN": "肥胖"
  },
  {
    "character": "𘛹",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "thunderclap",
    "explanationCN": "霹雳"
  },
  {
    "character": "𗯹",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "to catch.ᴀ; to seize.ᴀ; to arrest.ᴀ",
    "explanationCN": "to catch.ᴀ;夺取。逮捕。"
  },
  {
    "character": "𘋮",
    "GX": "ryar¹",
    "GHC": "ˑjar¹",
    "explanationEN": "to stand up",
    "explanationCN": "站起来"
  },
  {
    "character": "𘃔",
    "GX": "ndə¹",
    "GHC": "djɨ¹",
    "explanationEN": "to check; to inspect",
    "explanationCN": "检查;检查"
  },
  {
    "character": "𘂳",
    "GX": "źah¹",
    "GHC": "źjạ¹",
    "explanationEN": "between; middle",
    "explanationCN": "之间;中间"
  },
  {
    "character": "𘐈",
    "GX": "kwa¹",
    "GHC": "kjwa¹",
    "explanationEN": "bent; winding; crooked",
    "explanationCN": "弯曲;绕组;歪"
  },
  {
    "character": "𘏵",
    "GX": "?a²",
    "GHC": "-ja²",
    "explanationEN": "to drive away;to expel",
    "explanationCN": "驱赶;驱逐"
  },
  {
    "character": "𘐊",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "rough",
    "explanationCN": "粗糙"
  },
  {
    "character": "𘞰",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗯷",
    "GX": "kweṃh¹",
    "GHC": "kjwɨ̣j¹",
    "explanationEN": "emperor; king",
    "explanationCN": "皇帝;王"
  },
  {
    "character": "𘐌",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "to send; to mail; to post",
    "explanationCN": "发送;邮寄;邮寄"
  },
  {
    "character": "𘐥",
    "GX": "vwuh¹",
    "GHC": "wjụ¹",
    "explanationEN": "bottle; jar",
    "explanationCN": "瓶;罐"
  },
  {
    "character": "𘐖",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "house; room",
    "explanationCN": "房子;房间"
  },
  {
    "character": "𘎟",
    "GX": "nẓaa̱²",
    "GHC": "śia̱²",
    "explanationEN": "at will; causally",
    "explanationCN": "信;因果"
  },
  {
    "character": "𘎝",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "nasal sore",
    "explanationCN": "鼻痛"
  },
  {
    "character": "𘃃",
    "GX": "rzi̱wr²",
    "GHC": "zewr²",
    "explanationEN": "leopard",
    "explanationCN": "豹"
  },
  {
    "character": "𘐫",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "dagger; knife",
    "explanationCN": "匕首;刀"
  },
  {
    "character": "𘑍",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "to burst; to split",
    "explanationCN": "爆裂;拆分"
  },
  {
    "character": "𘐔",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "to salute; to bow",
    "explanationCN": "敬礼;鞠躬"
  },
  {
    "character": "𘑏",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "to rely on; to depend on",
    "explanationCN": "依赖;依赖"
  },
  {
    "character": "𘕥",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "evidence; proof; to prove",
    "explanationCN": "证据;证明;证明"
  },
  {
    "character": "𘛌",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "bitter lettuce",
    "explanationCN": "苦生菜"
  },
  {
    "character": "𘗡",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "house; room",
    "explanationCN": "房子;房间"
  },
  {
    "character": "𘗟",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "to enter; to open",
    "explanationCN": "进入;打开"
  },
  {
    "character": "𘕩",
    "GX": "nsi¹",
    "GHC": "¹",
    "explanationEN": "to cry bitterly; to wail; to condole",
    "explanationCN": "痛哭;哀号;哀悼"
  },
  {
    "character": "𘟟",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "to cut; to chop",
    "explanationCN": "切割;砍伐"
  },
  {
    "character": "𘟩",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "seal; stamp; brand",
    "explanationCN": "密封;邮票;品牌"
  },
  {
    "character": "𗮧",
    "GX": "lhai̱²",
    "GHC": "lhie²",
    "explanationEN": "scabies",
    "explanationCN": "疥疮"
  },
  {
    "character": "𗮭",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "chest",
    "explanationCN": "胸"
  },
  {
    "character": "𘁙",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "peak; top; peak",
    "explanationCN": "峰;返回页首;峰"
  },
  {
    "character": "𘁳",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "frivolous",
    "explanationCN": "轻浮"
  },
  {
    "character": "𘍢",
    "GX": "ye¹",
    "GHC": "ˑjij¹",
    "explanationEN": "delighted",
    "explanationCN": "高兴"
  },
  {
    "character": "𘕟",
    "GX": "rzi̱wr²",
    "GHC": "zewr²",
    "explanationEN": "brown rice",
    "explanationCN": "糙米"
  },
  {
    "character": "𘍎",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "hare; rabbit",
    "explanationCN": "兔子;兔"
  },
  {
    "character": "𘟨",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "to roll up; to contract; to crease",
    "explanationCN": "卷起;签订合同;折痕"
  },
  {
    "character": "𘏴",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "to link; to join; to connect",
    "explanationCN": "链接;加入;连接"
  },
  {
    "character": "𘛗",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "ostentatious; liberal with money",
    "explanationCN": "阔绰;自由派"
  },
  {
    "character": "𘏳",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "a bit",
    "explanationCN": "一点"
  },
  {
    "character": "𘐉",
    "GX": "vah²",
    "GHC": "wjạ²",
    "explanationEN": "to send; to release; to remit",
    "explanationCN": "发送;发布;汇出"
  },
  {
    "character": "𘃕",
    "GX": "nda¹",
    "GHC": "dja̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗯱",
    "GX": "γwəh¹",
    "GHC": "ɣjwɨ̣¹",
    "explanationEN": "to ripple; to move",
    "explanationCN": "到涟漪;移动"
  },
  {
    "character": "𘟧",
    "GX": "rnoṃr²",
    "GHC": "²",
    "explanationEN": "to roll up; to contract; to crease",
    "explanationCN": "卷起;签订合同;折痕"
  },
  {
    "character": "𘝳",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "silent; closed",
    "explanationCN": "沉默;闭"
  },
  {
    "character": "𘏺",
    "GX": "rta̱r¹",
    "GHC": "tar¹",
    "explanationEN": "to trample; to step up; to tread",
    "explanationCN": "践踏;站出来;踏"
  },
  {
    "character": "𘑁",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "to prohibit; to forbid; to cover",
    "explanationCN": "禁止;禁止;覆盖"
  },
  {
    "character": "𘁄",
    "GX": "mə̱h¹",
    "GHC": "mə̣¹",
    "explanationEN": "calf",
    "explanationCN": "小腿"
  },
  {
    "character": "𘃐",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "spade",
    "explanationCN": "铁锹"
  },
  {
    "character": "𘏖",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "to choke; to block",
    "explanationCN": "窒息;阻止"
  },
  {
    "character": "𘝬",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "to burst; to split",
    "explanationCN": "爆裂;拆分"
  },
  {
    "character": "𘎺",
    "GX": "ndi̱²",
    "GHC": "de̱²",
    "explanationEN": "to plough; to till",
    "explanationCN": "犁地;to till"
  },
  {
    "character": "𘛋",
    "GX": "qha̱²",
    "GHC": "kha²",
    "explanationEN": "bitter lettuce",
    "explanationCN": "苦生菜"
  },
  {
    "character": "𗕈",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "mud; mire; sludge",
    "explanationCN": "泥;泥潭;污泥"
  },
  {
    "character": "𗭸",
    "GX": "pae̱²",
    "GHC": "piej²",
    "explanationEN": "to combine; to unite",
    "explanationCN": "组合在一起;团结起来"
  },
  {
    "character": "𘌂",
    "GX": "yu¹",
    "GHC": "ˑju¹",
    "explanationEN": "meritorious service",
    "explanationCN": "功勋奖"
  },
  {
    "character": "𘋝",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "ladder; stairs; steps",
    "explanationCN": "梯子;楼梯;步骤"
  },
  {
    "character": "𗕇",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "juice",
    "explanationCN": "汁"
  },
  {
    "character": "𗕆",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "moist; smooth; juice",
    "explanationCN": "潮湿;光滑;汁"
  },
  {
    "character": "𘌢",
    "GX": "zu̱¹",
    "GHC": "zu¹",
    "explanationEN": "belt; band",
    "explanationCN": "带;乐队"
  },
  {
    "character": "𗕄",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "juice; soup",
    "explanationCN": "汁;汤"
  },
  {
    "character": "𗕅",
    "GX": "mae̱¹",
    "GHC": "miej¹",
    "explanationEN": "cheese; skin on boiled milk",
    "explanationCN": "奶酪;煮牛奶上的皮肤"
  },
  {
    "character": "𗕃",
    "GX": "tso̱ṃ¹",
    "GHC": "tsow¹",
    "explanationEN": "soup; broth",
    "explanationCN": "汤;汤"
  },
  {
    "character": "𘕰",
    "GX": "phu̱²",
    "GHC": "phu²",
    "explanationEN": "tree",
    "explanationCN": "树"
  },
  {
    "character": "𘂆",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "also; too; small; 2DU: 2nd dual indexation",
    "explanationCN": "也;太;小;2DU"
  },
  {
    "character": "𗕉",
    "GX": "ẓao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "otter",
    "explanationCN": "水獭"
  },
  {
    "character": "𘝚",
    "GX": "rkwər¹",
    "GHC": "kjwir¹",
    "explanationEN": "to steal; to pilfer",
    "explanationCN": "偷窃;偷窃"
  },
  {
    "character": "𘌃",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "rice",
    "explanationCN": "米"
  },
  {
    "character": "𘌛",
    "GX": "lwi¹",
    "GHC": "ljwi¹",
    "explanationEN": "seed",
    "explanationCN": "种子"
  },
  {
    "character": "𘕑",
    "GX": "γu̱h¹",
    "GHC": ".u¹",
    "explanationEN": "to cover; shelter; to rely on",
    "explanationCN": "覆盖;庇护所;依赖"
  },
  {
    "character": "𘌈",
    "GX": "yu¹",
    "GHC": "ˑju̱¹",
    "explanationEN": "level; even; smooth",
    "explanationCN": "水平;甚至;光滑"
  },
  {
    "character": "𘌕",
    "GX": "dźuo²",
    "GHC": "dźio̱w²",
    "explanationEN": "wheat flour; powder",
    "explanationCN": "面粉;粉"
  },
  {
    "character": "𘌗",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "mould stuffing in shoes or hats",
    "explanationCN": "鞋子或帽子中的霉菌填充物"
  },
  {
    "character": "𘌖",
    "GX": "rźwər¹",
    "GHC": "źjwɨr¹",
    "explanationEN": "husked sorghum; maize",
    "explanationCN": "去壳高粱;玉米"
  },
  {
    "character": "𘋟",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "bank; shore; limit",
    "explanationCN": "岸;岸;限制"
  },
  {
    "character": "𘌡",
    "GX": "lwi¹",
    "GHC": "¹",
    "explanationEN": "seed",
    "explanationCN": "种子"
  },
  {
    "character": "𘌑",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "maize",
    "explanationCN": "玉米"
  },
  {
    "character": "𘌞",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "autumn",
    "explanationCN": "秋天"
  },
  {
    "character": "𘌙",
    "GX": "dwu̱²",
    "GHC": "dwu²",
    "explanationEN": "beans",
    "explanationCN": "豆"
  },
  {
    "character": "𘛓",
    "GX": "mbe¹",
    "GHC": "bji̱j¹",
    "explanationEN": "to disobey; to violate",
    "explanationCN": "不服从;违反"
  },
  {
    "character": "𘂅",
    "GX": "yiw¹",
    "GHC": "ˑjiw¹",
    "explanationEN": "stove; oven; furnace",
    "explanationCN": "炉;烤箱;炉"
  },
  {
    "character": "𘆜",
    "GX": "ntshə¹",
    "GHC": "tshjɨ̱¹",
    "explanationEN": "secondary rainbow",
    "explanationCN": "次级彩虹"
  },
  {
    "character": "𘒭",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "burnt",
    "explanationCN": "烧毁"
  },
  {
    "character": "𗯗",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "to change; to vary",
    "explanationCN": "改变;变化"
  },
  {
    "character": "𗈭",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "to vary",
    "explanationCN": "变化"
  },
  {
    "character": "𗗤",
    "GX": "lwə̱²",
    "GHC": "²",
    "explanationEN": "trade",
    "explanationCN": "贸易"
  },
  {
    "character": "𗈯",
    "GX": "rγai̱r¹",
    "GHC": "¹",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𗈵",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣²",
    "explanationEN": "to combine; to unite; to integrate",
    "explanationCN": "组合在一起;团结起来;集成"
  },
  {
    "character": "𗗨",
    "GX": "źih²",
    "GHC": "źjị²",
    "explanationEN": "man and his wife’s brother",
    "explanationCN": "男子和他妻子的兄弟"
  },
  {
    "character": "𗗪",
    "GX": "ŋki¹",
    "GHC": "kji̱¹",
    "explanationEN": "commerce; trade; business",
    "explanationCN": "商业;贸易;商"
  },
  {
    "character": "𗯖",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "to cut; to slice",
    "explanationCN": "切割;切片"
  },
  {
    "character": "𗯝",
    "GX": "lhe̱²",
    "GHC": "lhej²",
    "explanationEN": "to translate; to vary",
    "explanationCN": "翻译;变化"
  },
  {
    "character": "𘕱",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "a place name",
    "explanationCN": "地名"
  },
  {
    "character": "𘛠",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "millet",
    "explanationCN": "小米"
  },
  {
    "character": "𗗣",
    "GX": "lwə̱²",
    "GHC": "lwə²",
    "explanationEN": "trade",
    "explanationCN": "贸易"
  },
  {
    "character": "𗈮",
    "GX": "rγai̱r¹",
    "GHC": "ɣier¹",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𗗩",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "to sell; to traffic; to peddle",
    "explanationCN": "出售;到交通;兜售"
  },
  {
    "character": "𗯑",
    "GX": "tsho¹",
    "GHC": "tshjo¹",
    "explanationEN": "to tie and strap something tightly",
    "explanationCN": "将某物系紧"
  },
  {
    "character": "𘂋",
    "GX": "zi̱²",
    "GHC": "ze²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘂣",
    "GX": "lih¹",
    "GHC": "ljị¹",
    "explanationEN": "to massage",
    "explanationCN": "按摩"
  },
  {
    "character": "𘕾",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "all; various",
    "explanationCN": "都;各种"
  },
  {
    "character": "𘂩",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "shallow; superficial",
    "explanationCN": "浅;浅"
  },
  {
    "character": "𘂡",
    "GX": "tswo¹",
    "GHC": "tsjwo¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗯓",
    "GX": "dzo¹",
    "GHC": "dzjo¹",
    "explanationEN": "to rein in; to tie and strap something tightly",
    "explanationCN": "控制;将某物系紧"
  },
  {
    "character": "𘂚",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "two; twin; both; double",
    "explanationCN": "二;双;双;双"
  },
  {
    "character": "𘕿",
    "GX": "γa̱²",
    "GHC": "ɣa²",
    "explanationEN": "LOC",
    "explanationCN": "LOC"
  },
  {
    "character": "𘂊",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "in a low voice",
    "explanationCN": "用低沉的声音"
  },
  {
    "character": "𘂍",
    "GX": "γaə̱¹",
    "GHC": "ɣiə¹",
    "explanationEN": "few; scant; rare",
    "explanationCN": "少;寡;罕见"
  },
  {
    "character": "𗳑",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "hairpin",
    "explanationCN": "簪"
  },
  {
    "character": "𘂌",
    "GX": "ŋwə̱²",
    "GHC": "ŋwə²",
    "explanationEN": "throat; larynx",
    "explanationCN": "喉;喉"
  },
  {
    "character": "𗳖",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "vulture",
    "explanationCN": "秃鹫"
  },
  {
    "character": "𗶪",
    "GX": "tao̱h¹",
    "GHC": "tiọ¹",
    "explanationEN": "roller",
    "explanationCN": "辊"
  },
  {
    "character": "𘌟",
    "GX": "pae̱²",
    "GHC": "²",
    "explanationEN": "to combine; to unite",
    "explanationCN": "组合在一起;团结起来"
  },
  {
    "character": "𘌅",
    "GX": "ze¹",
    "GHC": "zjij¹",
    "explanationEN": "extensive; wide; vast",
    "explanationCN": "广泛;宽;巨大"
  },
  {
    "character": "𘕕",
    "GX": "so̱ṃh¹",
    "GHC": "sọ¹",
    "explanationEN": "three",
    "explanationCN": "三"
  },
  {
    "character": "𘌉",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "millet",
    "explanationCN": "小米"
  },
  {
    "character": "𘌘",
    "GX": "γo̱ṃ¹",
    "GHC": "ɣow¹",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𘌐",
    "GX": "qhai̱²",
    "GHC": "khie²",
    "explanationEN": "rice",
    "explanationCN": "米"
  },
  {
    "character": "𘒮",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "to supervise",
    "explanationCN": "监督"
  },
  {
    "character": "𘆖",
    "GX": "ntshə¹",
    "GHC": "tshjɨ̱¹",
    "explanationEN": "rank; line",
    "explanationCN": "排;线"
  },
  {
    "character": "𘒫",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "to send; to dispatch",
    "explanationCN": "发送;调度"
  },
  {
    "character": "𘙫",
    "GX": "śoh²",
    "GHC": "śjọ²",
    "explanationEN": "to obstruct; to block; to cover",
    "explanationCN": "阻碍;阻止;覆盖"
  },
  {
    "character": "𘕳",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "brothers",
    "explanationCN": "兄弟"
  },
  {
    "character": "𗯔",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "vexed; flustered",
    "explanationCN": "困扰;心慌"
  },
  {
    "character": "𗗥",
    "GX": "źih²",
    "GHC": "źji²",
    "explanationEN": "to sell and buy",
    "explanationCN": "出售和购买"
  },
  {
    "character": "𘕲",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "to tie up; to bind; to bundle up",
    "explanationCN": "捆绑;绑定;捆绑起来"
  },
  {
    "character": "𘂓",
    "GX": "daṃ¹",
    "GHC": "djã¹",
    "explanationEN": "shallow; superficial",
    "explanationCN": "浅;浅"
  },
  {
    "character": "𘂏",
    "GX": "bae̱h²",
    "GHC": "biẹj²",
    "explanationEN": "a unit of measurement",
    "explanationCN": "测量单位"
  },
  {
    "character": "𘖀",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "year",
    "explanationCN": "年"
  },
  {
    "character": "𗳒",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "INS",
    "explanationCN": "INS （英文）"
  },
  {
    "character": "𘂎",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "small; little",
    "explanationCN": "小;小"
  },
  {
    "character": "𘂜",
    "GX": "rza̱r¹",
    "GHC": "zar¹",
    "explanationEN": "Han",
    "explanationCN": "汉"
  },
  {
    "character": "𘂑",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "to bully and humiliate",
    "explanationCN": "欺凌和羞辱"
  },
  {
    "character": "𘂒",
    "GX": "ẓai̱²",
    "GHC": "śie²",
    "explanationEN": "a kind of grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𘂠",
    "GX": "llo̱ṃ¹",
    "GHC": "low¹",
    "explanationEN": "to exchange",
    "explanationCN": "兑换"
  },
  {
    "character": "𘝛",
    "GX": "tṣhuo¹",
    "GHC": "tśhio̱w¹",
    "explanationEN": "to steal; to rob",
    "explanationCN": "偷窃;抢劫"
  },
  {
    "character": "𘕚",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "to post; to bring to somebody",
    "explanationCN": "发布;带给某人"
  },
  {
    "character": "𘌊",
    "GX": "giw¹",
    "GHC": "gjiw¹",
    "explanationEN": "broad; wide; extensive",
    "explanationCN": "广泛;宽;广泛"
  },
  {
    "character": "𘕐",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "to steal; to rob; to pilfer",
    "explanationCN": "偷窃;抢劫;偷窃"
  },
  {
    "character": "𘕒",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "loose; wide",
    "explanationCN": "松;宽"
  },
  {
    "character": "𘌒",
    "GX": "qo̱ṃ²",
    "GHC": "kow²",
    "explanationEN": "upright; the right way (or course)",
    "explanationCN": "直立;正确的方法（或路线）"
  },
  {
    "character": "𘒯",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "a kind of farm implements",
    "explanationCN": "一种农具"
  },
  {
    "character": "𗯜",
    "GX": "lhe̱²",
    "GHC": "lhej²",
    "explanationEN": "to translate; to vary",
    "explanationCN": "翻译;变化"
  },
  {
    "character": "𘕴",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "corner",
    "explanationCN": "角落"
  },
  {
    "character": "𗯘",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "to tread; to stamp",
    "explanationCN": "踏踏;到图章"
  },
  {
    "character": "𗈸",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "to combine; to unite",
    "explanationCN": "组合在一起;团结起来"
  },
  {
    "character": "𘕵",
    "GX": "ẓai̱w¹",
    "GHC": "śiew¹",
    "explanationEN": "branch; twig",
    "explanationCN": "分支;树枝"
  },
  {
    "character": "𘕶",
    "GX": "mphu¹",
    "GHC": "phiu̱¹",
    "explanationEN": "to cover; to shelter",
    "explanationCN": "覆盖;到庇护所"
  },
  {
    "character": "𘂐",
    "GX": "bae̱h²",
    "GHC": "²",
    "explanationEN": "a unit of measurement",
    "explanationCN": "测量单位"
  },
  {
    "character": "𘂉",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "broken; gragmentary",
    "explanationCN": "破碎;gragmentary"
  },
  {
    "character": "𘂔",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "hole; concave",
    "explanationCN": "洞;凹"
  },
  {
    "character": "𘂝",
    "GX": "dze̱ṃ¹",
    "GHC": "dzəj¹",
    "explanationEN": "to reduce; to decrease",
    "explanationCN": "减少;减少"
  },
  {
    "character": "𘌍",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "yeast to make wine",
    "explanationCN": "酵母酿酒"
  },
  {
    "character": "𘝜",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "to steal; to pilfer; to rob",
    "explanationCN": "偷窃;偷窃;抢劫"
  },
  {
    "character": "𘌎",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "corn; grain",
    "explanationCN": "玉米;粮食"
  },
  {
    "character": "𘋢",
    "GX": "dẓaa̱ṃ²",
    "GHC": "ɲia²",
    "explanationEN": "Bodhisattva",
    "explanationCN": "菩萨"
  },
  {
    "character": "𘋤",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "all living creatures; blood",
    "explanationCN": "所有生物;血"
  },
  {
    "character": "𘌠",
    "GX": "pheṃ¹",
    "GHC": "phjɨj¹",
    "explanationEN": "to combine; to unite",
    "explanationCN": "组合在一起;团结起来"
  },
  {
    "character": "𘆘",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "evening; night",
    "explanationCN": "傍晚;晚上"
  },
  {
    "character": "𗗧",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "price",
    "explanationCN": "价格"
  },
  {
    "character": "𗈲",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "far; distant; remote",
    "explanationCN": "远;远;远程"
  },
  {
    "character": "𗯛",
    "GX": "kwə¹",
    "GHC": "¹",
    "explanationEN": "to cut; to break",
    "explanationCN": "切割;打破"
  },
  {
    "character": "𗈱",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "an auxiliary word",
    "explanationCN": "助词"
  },
  {
    "character": "𘂈",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "two; second",
    "explanationCN": "二;第二"
  },
  {
    "character": "𘂇",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "hair",
    "explanationCN": "毛"
  },
  {
    "character": "𘂦",
    "GX": "ha̱ṃ¹",
    "GHC": "xã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘌏",
    "GX": "rkhur¹",
    "GHC": "khjur¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗈶",
    "GX": "sə¹",
    "GHC": "sjɨ¹",
    "explanationEN": "to die",
    "explanationCN": "去死"
  },
  {
    "character": "𘂛",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "lowly; humble; low-down",
    "explanationCN": "卑微;卑微;低调"
  },
  {
    "character": "𘕙",
    "GX": "tsə̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘋞",
    "GX": "rza̱r²",
    "GHC": "zar²",
    "explanationEN": "ashamed",
    "explanationCN": "羞"
  },
  {
    "character": "𘌄",
    "GX": "γo̱ṃ¹",
    "GHC": "ɣow¹",
    "explanationEN": "buckwheat",
    "explanationCN": "荞麦"
  },
  {
    "character": "𘕔",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "then; after",
    "explanationCN": "然后;后"
  },
  {
    "character": "𘌆",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "pod",
    "explanationCN": "荚"
  },
  {
    "character": "𘕘",
    "GX": "tsə̱¹",
    "GHC": "tsə¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘌋",
    "GX": "lhih¹",
    "GHC": "lhjị¹",
    "explanationEN": "wheat",
    "explanationCN": "小麦"
  },
  {
    "character": "𘌓",
    "GX": "qho̱ṃ²",
    "GHC": "khow²",
    "explanationEN": "chaff; bran; husk",
    "explanationCN": "糠;麸;皮"
  },
  {
    "character": "𘌔",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "white",
    "explanationCN": "白"
  },
  {
    "character": "𘌚",
    "GX": "llə̱¹",
    "GHC": "lə¹",
    "explanationEN": "wide or narrow",
    "explanationCN": "宽或窄"
  },
  {
    "character": "𘕗",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "woolen blanket; knitting wool",
    "explanationCN": "羊毛毯;针织羊毛"
  },
  {
    "character": "𘕓",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "to send; to bring to somebody",
    "explanationCN": "发送;带给某人"
  },
  {
    "character": "𘋠",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "kind; sort; type",
    "explanationCN": "类;排序;类型"
  },
  {
    "character": "𗲾",
    "GX": "swi̱ṃ¹",
    "GHC": "swẽ¹",
    "explanationEN": "macaque",
    "explanationCN": "猕猴"
  },
  {
    "character": "𘆙",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "dark; gloomy",
    "explanationCN": "黑暗;悲观"
  },
  {
    "character": "𘂄",
    "GX": "yuo²",
    "GHC": "ˑjo̱w²",
    "explanationEN": "stove; oven",
    "explanationCN": "炉;烤箱"
  },
  {
    "character": "𘒴",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "to supervise",
    "explanationCN": "监督"
  },
  {
    "character": "𘆗",
    "GX": "dẓaə̱²",
    "GHC": "źiə²",
    "explanationEN": "to rotate; to alternate; to make a samsara",
    "explanationCN": "旋转;交替;制作轮回"
  },
  {
    "character": "𘆚",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "scriptures; warp",
    "explanationCN": "圣经;经线"
  },
  {
    "character": "𘒳",
    "GX": "tao̱h¹",
    "GHC": "tiọ¹",
    "explanationEN": "to sew; to stitch",
    "explanationCN": "缝纫;缝合"
  },
  {
    "character": "𘒵",
    "GX": "tao̱h²",
    "GHC": "tiọ²",
    "explanationEN": "to press; to oppress",
    "explanationCN": "按 ;压迫"
  },
  {
    "character": "𘌤",
    "GX": "dəh¹",
    "GHC": "djị¹",
    "explanationEN": "strip; slip",
    "explanationCN": "带;滑"
  },
  {
    "character": "𘌣",
    "GX": "zu̱¹",
    "GHC": "zu¹",
    "explanationEN": "to run quickly; to rush",
    "explanationCN": "快速奔跑;冲刺"
  },
  {
    "character": "𘌦",
    "GX": "rzu̱r¹",
    "GHC": "zur¹",
    "explanationEN": "long-winded",
    "explanationCN": "啰嗦"
  },
  {
    "character": "𗟚",
    "GX": "nllo̱r¹",
    "GHC": "ljo̱r¹",
    "explanationEN": "flame",
    "explanationCN": "火焰"
  },
  {
    "character": "𗰑",
    "GX": "rtər¹",
    "GHC": "tjɨr¹",
    "explanationEN": "heavy",
    "explanationCN": "重"
  },
  {
    "character": "𗯕",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "to cut off; to sever",
    "explanationCN": "切断;切断"
  },
  {
    "character": "𘝡",
    "GX": "nlo̱r¹",
    "GHC": "¹",
    "explanationEN": "flame",
    "explanationCN": "火焰"
  },
  {
    "character": "𗈫",
    "GX": "lweh²",
    "GHC": "ljwịj²",
    "explanationEN": "great-great-grandson",
    "explanationCN": "曾曾孙"
  },
  {
    "character": "𗗬",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "among; between",
    "explanationCN": "中;之间"
  },
  {
    "character": "𗗦",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "price; value",
    "explanationCN": "价格;价值"
  },
  {
    "character": "𗈬",
    "GX": "a?",
    "GHC": "ˑja?",
    "explanationEN": "boots wearing in mud",
    "explanationCN": "靴子在泥泞中穿着"
  },
  {
    "character": "𗈺",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "ore; mine",
    "explanationCN": "矿石;矿山"
  },
  {
    "character": "𗗮",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "to traffic; to peddle",
    "explanationCN": "到交通;兜售"
  },
  {
    "character": "𘕷",
    "GX": "rpoṃr²",
    "GHC": "pjowr²",
    "explanationEN": "luxuriant; exuberant",
    "explanationCN": "华丽;旺盛"
  },
  {
    "character": "𗈩",
    "GX": "γo̱¹",
    "GHC": "ˑo¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗈷",
    "GX": "rŋi̱wr²",
    "GHC": "ŋewr²",
    "explanationEN": "exercise evil influence; ghost",
    "explanationCN": "施加邪恶的影响;鬼"
  },
  {
    "character": "𗗫",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "to buy and sell to traffic",
    "explanationCN": "向流量购买和出售"
  },
  {
    "character": "𗈳",
    "GX": "γo̱²",
    "GHC": "ˑo²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘂗",
    "GX": "rpə̱r¹",
    "GHC": "pər¹",
    "explanationEN": "lamb",
    "explanationCN": "羔羊"
  },
  {
    "character": "𘂢",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "ghost; spirit",
    "explanationCN": "鬼;精神"
  },
  {
    "character": "𘂨",
    "GX": "mbe̱¹",
    "GHC": "be̱j¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗯐",
    "GX": "rγo̱r²",
    "GHC": "²",
    "explanationEN": "to contend; to vie; to strive",
    "explanationCN": "去争辩;争夺;努力"
  },
  {
    "character": "𘂙",
    "GX": "pa̱h¹",
    "GHC": "pạ¹",
    "explanationEN": "even; well-distributed",
    "explanationCN": "甚至;分布良好"
  },
  {
    "character": "𗯒",
    "GX": "tsha̱²",
    "GHC": "tsha²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘂘",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "to jump; to leap",
    "explanationCN": "跳跃;飞跃"
  },
  {
    "character": "𘂕",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "swallow",
    "explanationCN": "吞"
  },
  {
    "character": "𗳕",
    "GX": "pe¹",
    "GHC": "pjịj¹",
    "explanationEN": "crooked; askew",
    "explanationCN": "歪;歪斜"
  },
  {
    "character": "𘂥",
    "GX": "ẓao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "grey; ashy color",
    "explanationCN": "灰色;灰白色"
  },
  {
    "character": "𘖁",
    "GX": "tsha̱¹",
    "GHC": "tsha¹",
    "explanationEN": "hollow bag",
    "explanationCN": "空心袋"
  },
  {
    "character": "𘌜",
    "GX": "pai̱¹",
    "GHC": "pie¹",
    "explanationEN": "wide; broad",
    "explanationCN": "宽;广泛"
  },
  {
    "character": "𘋡",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "chopsticks",
    "explanationCN": "筷子"
  },
  {
    "character": "𘋣",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "a kind of vegetable",
    "explanationCN": "一种蔬菜"
  },
  {
    "character": "𘌌",
    "GX": "śeṃ²",
    "GHC": "śjɨj²",
    "explanationEN": "house; shed; storehouse",
    "explanationCN": "房子;棚;库"
  },
  {
    "character": "𘕖",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "to send; to dispatch",
    "explanationCN": "发送;调度"
  },
  {
    "character": "𘆛",
    "GX": "nah¹",
    "GHC": "njạ¹",
    "explanationEN": "parallel; weft",
    "explanationCN": "平行;织物"
  },
  {
    "character": "𘒬",
    "GX": "nne¹",
    "GHC": "¹",
    "explanationEN": "to bear; to endure",
    "explanationCN": "承担;忍耐"
  },
  {
    "character": "𘒰",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "cape; cloak",
    "explanationCN": "角;斗篷"
  },
  {
    "character": "𘒲",
    "GX": "rtə̱r¹",
    "GHC": "tər¹",
    "explanationEN": "to tread; to stamp; to press",
    "explanationCN": "踏踏;邮票;按"
  },
  {
    "character": "𘌥",
    "GX": "be̱¹",
    "GHC": "bej¹",
    "explanationEN": "to tie up; to arrest",
    "explanationCN": "捆绑;逮捕"
  },
  {
    "character": "𗯚",
    "GX": "ŋġu̱²",
    "GHC": "gu̱²",
    "explanationEN": "to do forced labor",
    "explanationCN": "从事强迫劳动"
  },
  {
    "character": "𗈪",
    "GX": "a?",
    "GHC": "ˑja?",
    "explanationEN": "one; PFV: UP; INTER: interrogative",
    "explanationCN": "一;PFV： UP;INTER：疑问"
  },
  {
    "character": "𗈰",
    "GX": "rnar²",
    "GHC": "njar²",
    "explanationEN": "to lose; to drop",
    "explanationCN": "输;丢弃"
  },
  {
    "character": "𘝢",
    "GX": "tśhəh¹",
    "GHC": "tśhjɨ̣¹",
    "explanationEN": "to burn",
    "explanationCN": "燃烧"
  },
  {
    "character": "𗗭",
    "GX": "tśuo²",
    "GHC": "tśjo̱w²",
    "explanationEN": "to attend; to wait upon",
    "explanationCN": "参加;等待"
  },
  {
    "character": "𗈹",
    "GX": "nsi¹",
    "GHC": "sji̱¹",
    "explanationEN": "to inspect; to spy",
    "explanationCN": "进行检查;去间谍"
  },
  {
    "character": "𘂖",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "leprosy; scabies",
    "explanationCN": "麻风;疥疮"
  },
  {
    "character": "𘂞",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "lamb",
    "explanationCN": "羔羊"
  },
  {
    "character": "𗳔",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "hairpin",
    "explanationCN": "簪"
  },
  {
    "character": "𘂟",
    "GX": "di̱w¹",
    "GHC": "dew¹",
    "explanationEN": "to carve; to engrave; to dig",
    "explanationCN": "雕刻;雕刻;挖掘"
  },
  {
    "character": "𘌇",
    "GX": "nao̱h²",
    "GHC": "ku²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟱",
    "GX": "nao̱h²",
    "GHC": "ku²",
    "explanationEN": "mortar",
    "explanationCN": "臼"
  },
  {
    "character": "𘒱",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "presently; in a moment",
    "explanationCN": "目前;片刻"
  },
  {
    "character": "𗈴",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "centre; among; middle",
    "explanationCN": "中心;中;中间"
  },
  {
    "character": "𘂤",
    "GX": "qha̱¹",
    "GHC": "kha¹",
    "explanationEN": "INTESS: interessive case",
    "explanationCN": "INTESS： interessive"
  },
  {
    "character": "𗳓",
    "GX": "rśar¹",
    "GHC": "śjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄌",
    "GX": "tśwə¹",
    "GHC": "tśjwɨ̣¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄘",
    "GX": "tśwe̱ṃ¹",
    "GHC": "tśiwəj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄏",
    "GX": "tśweṃ¹",
    "GHC": "tśjwɨj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄙",
    "GX": "tśwaw¹",
    "GHC": "tśjwa¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗴯",
    "GX": "gwaṃ¹",
    "GHC": "gjwã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄂",
    "GX": "tśwe¹",
    "GHC": "tśjwij¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄍",
    "GX": "tśwow¹",
    "GHC": "tśjwo¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄃",
    "GX": "tśwoṃ¹",
    "GHC": "tśjwow¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄆",
    "GX": "rtśar¹",
    "GHC": "tśjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄅",
    "GX": "tśwo²",
    "GHC": "tśjwo²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄗",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗄚",
    "GX": "tṣwaə̱¹",
    "GHC": "tśiwə¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅱",
    "GX": "twaw¹",
    "GHC": "tjwa¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗖹",
    "GX": "ŋka¹",
    "GHC": "kja̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗉆",
    "GX": "mpai̱¹",
    "GHC": "pie̱¹",
    "explanationEN": "to bow; to salute",
    "explanationCN": "鞠躬;致敬"
  },
  {
    "character": "𘅛",
    "GX": "kuh¹",
    "GHC": "¹",
    "explanationEN": "collapse",
    "explanationCN": "崩溃"
  },
  {
    "character": "𗳙",
    "GX": "qa̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶑",
    "GX": "tṣwao̱²",
    "GHC": "tśiwo²",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗘇",
    "GX": "tśu²",
    "GHC": "tśju²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗹆",
    "GX": "ŋki¹",
    "GHC": "kji̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅼",
    "GX": "twuo¹",
    "GHC": "tiwo̱w¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅔",
    "GX": "tświ¹",
    "GHC": "tśjwi¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅠",
    "GX": "ntwu̱¹",
    "GHC": "twu̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗇶",
    "GX": "ntśe¹",
    "GHC": "tśji̱j¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘄶",
    "GX": "bweh¹",
    "GHC": "biwịj¹",
    "explanationEN": "many",
    "explanationCN": "多"
  },
  {
    "character": "𗰕",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗶖",
    "GX": "tśah¹",
    "GHC": "tśjạ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅶",
    "GX": "rti̱wr¹",
    "GHC": "tewr¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗗋",
    "GX": "nte̱¹",
    "GHC": "te̱j¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗌂",
    "GX": "tświ̱¹",
    "GHC": "tśwe¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗌑",
    "GX": "tśwaṃ¹",
    "GHC": "tśiwã¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗋶",
    "GX": "tsweṃ¹",
    "GHC": "tsjwɨj¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗪶",
    "GX": "rpi̱r²",
    "GHC": "pe̱r²",
    "explanationEN": "immediately; at once; promptly",
    "explanationCN": "马上;立即;及时"
  },
  {
    "character": "𘜢",
    "GX": "rkwar¹",
    "GHC": "kjwar¹",
    "explanationEN": "to spread; very fast; rapid",
    "explanationCN": "传播;非常快;快速"
  },
  {
    "character": "𘜥",
    "GX": "rkwar¹",
    "GHC": "kjwar¹",
    "explanationEN": "to run; to speed",
    "explanationCN": "跑;速度"
  },
  {
    "character": "𘚼",
    "GX": "lwəh¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗊤",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "to run away; to flee",
    "explanationCN": "逃跑;逃跑"
  },
  {
    "character": "𗾼",
    "GX": "bo̱ṃh²",
    "GHC": "²",
    "explanationEN": "vegetable; greens; firewood",
    "explanationCN": "蔬菜;绿色;柴"
  },
  {
    "character": "𗻥",
    "GX": "???",
    "GHC": "?",
    "explanationEN": "rapid speed",
    "explanationCN": "快速"
  },
  {
    "character": "𘜣",
    "GX": "rdzər¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗾁",
    "GX": "ŋqe̱²",
    "GHC": "ke̱j²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗊳",
    "GX": "tśweṃh¹",
    "GHC": "tśwɨ̣j¹",
    "explanationEN": "to instruct",
    "explanationCN": "指示"
  },
  {
    "character": "𗼧",
    "GX": "qai̱w¹",
    "GHC": "kiew¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗌫",
    "GX": "tṣau̱²",
    "GHC": "tśwu²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗌐",
    "GX": "tswa¹",
    "GHC": "tsjwa¹",
    "explanationEN": "a kind of tree",
    "explanationCN": "一种树"
  },
  {
    "character": "𗻹",
    "GX": "mbu̱¹",
    "GHC": "bu̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗫰",
    "GX": "rpaa̱r¹",
    "GHC": "piar¹",
    "explanationEN": "to descend; to land",
    "explanationCN": "下降;降落"
  },
  {
    "character": "𘜠",
    "GX": "rśa̱r²",
    "GHC": "śar²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗌟",
    "GX": "tśa¹",
    "GHC": "tśjiw¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗨑",
    "GX": "ntṣaa̱²",
    "GHC": "tśia̱²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗨽",
    "GX": "rpar¹",
    "GHC": "pjar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗻃",
    "GX": "ŋkwa¹",
    "GHC": "kjwa̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗎕",
    "GX": "ŋkau̱¹",
    "GHC": "kju̱¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗟕",
    "GX": "tśah¹",
    "GHC": "tśjạ¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗝴",
    "GX": "rtu̱r¹",
    "GHC": "tur¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗞗",
    "GX": "ẓai̱w¹",
    "GHC": "śiew¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘞕",
    "GX": "vwa̱ṃ²",
    "GHC": "wã²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗷗",
    "GX": "two̱¹",
    "GHC": "two¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗷓",
    "GX": "twe̱¹",
    "GHC": "twej¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗷊",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗒏",
    "GX": "ġao̱¹",
    "GHC": "gio¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘍜",
    "GX": "mpə̱¹",
    "GHC": "pə̱¹",
    "explanationEN": "to call; to shout; to yell",
    "explanationCN": "打电话;大喊大叫;大喊大叫"
  },
  {
    "character": "𘗑",
    "GX": "vw?¹",
    "GHC": "w-¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘍕",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "to pull out; to move or adjust; to pinch",
    "explanationCN": "拉出;移动或调整;捏合"
  },
  {
    "character": "𘃘",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "to gallop; to speed",
    "explanationCN": "驰骋;速度"
  },
  {
    "character": "𘍅",
    "GX": "rgwar¹",
    "GHC": "¹",
    "explanationEN": "calf",
    "explanationCN": "小腿"
  },
  {
    "character": "𘁌",
    "GX": "lwəh¹",
    "GHC": "¹",
    "explanationEN": "surprised; astonished",
    "explanationCN": "惊讶;惊讶"
  },
  {
    "character": "𘍱",
    "GX": "tṣhaa̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘐜",
    "GX": "rpi̱r²",
    "GHC": "pe̱r²",
    "explanationEN": "one’s name",
    "explanationCN": "一个人的名字"
  },
  {
    "character": "𘝴",
    "GX": "gaw¹",
    "GHC": "gja̱¹",
    "explanationEN": "a surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘐮",
    "GX": "rġa̱r¹",
    "GHC": "gar¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘍛",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "to speak bluntly",
    "explanationCN": "直言不讳"
  },
  {
    "character": "𘕍",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "honest; upright; fairminded",
    "explanationCN": "诚实;直立;公正"
  },
  {
    "character": "𘛑",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘑎",
    "GX": "te¹",
    "GHC": "tjij¹",
    "explanationEN": "to do forced labor",
    "explanationCN": "从事强迫劳动"
  },
  {
    "character": "𗯣",
    "GX": "ŋġu̱²",
    "GHC": "²",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘑋",
    "GX": "rti̱wr¹",
    "GHC": "tewr¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘌝",
    "GX": "pu²",
    "GHC": "pju²",
    "explanationEN": "to cut; to break; to snap",
    "explanationCN": "切割;打破;捕捉"
  },
  {
    "character": "𗯙",
    "GX": "gwə¹",
    "GHC": "¹",
    "explanationEN": "centre; among; middle",
    "explanationCN": "中心;中;中间"
  },
  {
    "character": "𘂧",
    "GX": "qha̱¹",
    "GHC": "¹",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟭",
    "GX": "??",
    "GHC": "ya",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟮",
    "GX": "??",
    "GHC": "źja",
    "explanationEN": "a transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟯",
    "GX": "??",
    "GHC": "tsjwək",
    "explanationEN": "稷",
    "explanationCN": "稷"
  }
];

// 初始化字典对象
const dictionary = DICTIONARY_DATA.reduce((acc, entry) => {
    acc[entry.character] = entry;
    return acc;
}, {});