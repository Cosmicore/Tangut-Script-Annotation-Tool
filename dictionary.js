// 定义词典数据
const WORD_DATA = [
  {
    "word": "𗂽𗰞𗱀",
    "GX": "ye².naw¹.γo̱¹",
    "GHC": "ꞏjij².nja̱¹.ꞏo¹",
    "explanationEN": "",
    "explanationCN": " 黑羊主"
  },
  {
    "word": "𗿄𗚿𗭮𗂧",
    "GX": "khu².liw².źoṃ¹.lheh²",
    "GHC": "khju².ljiw².źjow¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": " 佉卢戎国"
  },
  {
    "word": "𗴂𗹭𗂧𘜶𘝞𗗚𘏨𗖵",
    "GX": "phao̱ṃ¹.be².lheh².lleh².rywər².ŋao̱ṃ².lləh¹.bu¹",
    "GHC": "phiow¹.bjij².lhjịj².ljịj².ꞏjwɨr².ŋjow².ljɨ̣¹.bju¹",
    "explanationEN": "",
    "explanationCN": "《大白高国文海宝韵》"
  },
  {
    "word": "𘜶𗁬𗛰𗔇𗣟𗺉",
    "GX": "lleh².tho̱ṃ¹.re̱r².γu̱h².rver¹.tśhi²",
    "GHC": "ljịj².thow¹.lhejr².ꞏụ².wjijr¹.tśhji²",
    "explanationEN": "",
    "explanationCN": "《大唐三藏卦书》"
  },
  {
    "word": "𗼇𘂜𗟲𗿳𗖵𘃎𘇂𗊏",
    "GX": "mi².rza̱r¹.ŋŋwu̱¹.dzeṃ¹.bu¹.pah¹.ġu̱².nih²",
    "GHC": "mji².zar¹.ŋwu̱¹.dzjɨj¹.bju¹.pjạ¹.gu².njị²",
    "explanationEN": "",
    "explanationCN": "《番汉合时掌中珠》"
  },
  {
    "word": "𗼵𗍏𗁬𘝞",
    "GX": "hao̱².su².tho̱ṃ¹.rywər²",
    "GHC": "xjow².sju².thow¹.ꞏjwɨr²",
    "explanationEN": "",
    "explanationCN": "《风俗通》"
  },
  {
    "word": "𗥑𗍏𗁬𘐆",
    "GX": "hu̱¹.su².tho̱ṃ¹.la̱¹",
    "GHC": "xu¹.sju².thow¹.la¹",
    "explanationEN": "",
    "explanationCN": "《风俗通记》"
  },
  {
    "word": "𗁀𘍑𗆁",
    "GX": "qo̱¹.leṃ¹.sa̱ṃ¹",
    "GHC": "ko¹.ljɨj¹.sã¹",
    "explanationEN": "",
    "explanationCN": "《广陵散》"
  },
  {
    "word": "𗁀𘍑𘋅",
    "GX": "qo̱¹.leṃ¹.sa̱ṃ¹",
    "GHC": "ko¹.ljɨj¹.sã¹",
    "explanationEN": "",
    "explanationCN": "《广陵散》"
  },
  {
    "word": "𗂸𘈷𗗎𗧗𗨮",
    "GX": "bi².gi².rpwər¹.tśhweṃ¹.kah²",
    "GHC": "bji².gji².pjwɨ̱r¹.tśhjwɨj¹.kjạ²",
    "explanationEN": "",
    "explanationCN": "《规谏臣子歌》"
  },
  {
    "word": "𗂧𘑨𗫔𗎭𗨮",
    "GX": "lheh².γwu̱h².yi¹.mmi¹.kah²",
    "GHC": "lhjịj².ꞏwu².ꞏji¹.mji̱¹.kjạ²",
    "explanationEN": "",
    "explanationCN": "《护国寺歌》"
  },
  {
    "word": "𘀺𗁬𘄒𘎑",
    "GX": "kha².tho̱ṃ¹.pa̱².źa²",
    "GHC": "khja².thow¹.pa².rja²",
    "explanationEN": "",
    "explanationCN": "《竭陀般若》"
  },
  {
    "word": "𗁣𗄾",
    "GX": "dzə¹.se̱¹",
    "GHC": "dzjɨ¹.sej¹",
    "explanationEN": "",
    "explanationCN": "《谨算》"
  },
  {
    "word": "𗐪𗛹𘕘",
    "GX": "qhao̱ṃ².tsho̱ṃ¹.tsə̱¹",
    "GHC": "khjow².tshow¹.tsə¹",
    "explanationEN": "",
    "explanationCN": "《亢仓子》"
  },
  {
    "word": "𗀝𗀪𗖰𗚩",
    "GX": "rvwo̱r¹.lli̱².rlwə̱r².re̱r²",
    "GHC": "wor¹.le².lwər².lhejr²",
    "explanationEN": "",
    "explanationCN": "《孔雀经》"
  },
  {
    "word": "𗴮𘊳",
    "GX": "deh¹.bo̱¹",
    "GHC": "djịj¹.bo¹",
    "explanationEN": "",
    "explanationCN": "《类林》"
  },
  {
    "word": "𘝾𗂎𘒏𘝞",
    "GX": "li².tsheṃ².ga¹.rywər²",
    "GHC": "lji².tshjɨj².gia¹.ꞏjwɨr²",
    "explanationEN": "",
    "explanationCN": "《李靖兵法》"
  },
  {
    "word": "𗸯𘟙𗂧𗓑",
    "GX": "dźwu¹.ne².lheh².rγwe̱r²",
    "GHC": "dźjwu¹.njij².lhjịj².ꞏwejr²",
    "explanationEN": "",
    "explanationCN": "《仁王护国》"
  },
  {
    "word": "𗰗𗍫𗂧",
    "GX": "γa̱h².nnə¹.lheh²",
    "GHC": "ɣạ².njɨ̱¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "《十二国》"
  },
  {
    "word": "𗂧𗶅𗓑𘀄𘓄𗖍",
    "GX": "lheh².tśuh¹.rγwe̱r².ŋgu².rur¹.nla¹",
    "GHC": "lhjịj².tśjụ¹.ꞏwejr².gju̱².rjur¹.lja̱¹",
    "explanationEN": "",
    "explanationCN": "《守護國吉祥謁》"
  },
  {
    "word": "𘜲𗂧𘐆",
    "GX": "śu¹.lheh².la̱¹",
    "GHC": "śju¹.lhjịj².la¹",
    "explanationEN": "",
    "explanationCN": "《蜀国志》"
  },
  {
    "word": "𗵒𗭧",
    "GX": "qai̱h¹.dəh¹",
    "GHC": "kiẹ¹.djɨ̣¹",
    "explanationEN": "",
    "explanationCN": "《碎金》"
  },
  {
    "word": "𗕔𘓖𘋼𘐆",
    "GX": "the̱¹.qo̱ṃ¹.rkur².la̱¹",
    "GHC": "thej¹.kow¹.kjur².la¹",
    "explanationEN": "",
    "explanationCN": "《太公志传》"
  },
  {
    "word": "𗕔𘊇𘀏𗂓𘃻𗻼𘊐",
    "GX": "the̱¹.śoṃ¹.pu̱¹.ti̱w¹.yiṃ¹.ṣae̱ṃ¹.ke¹",
    "GHC": "thej¹.śjow¹.pu¹.tew¹.ꞏji¹.śiəj¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上北斗延生經》"
  },
  {
    "word": "𗕔𘊇𗰂𘆨𗼵𘈘𘊐",
    "GX": "the̱¹.śoṃ¹.hwo̱².ti².hao̱².śwə¹.ke¹",
    "GHC": "thej¹.śjow¹.xwo².tji².xjow².śjwɨ¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上黄帝房术经》"
  },
  {
    "word": "𗕔𘊇𗒉𗢄𘄱𗻼𘃻𘊐",
    "GX": "the̱¹.śoṃ¹.la̱¹.śwaṃ².theṃ¹.ṣae̱ṃ¹.yiṃ¹.ke¹",
    "GHC": "thej¹.śjow¹.la¹.śjwã².thjɨj¹.śiəj¹.ꞏji¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上老说天生阴经》"
  },
  {
    "word": "𗕔𘊇𗒉𘕘𗢄𘊇𗂓𗂓𘊐",
    "GX": "the̱¹.śoṃ¹.la̱¹.tsə̱¹.śwaṃ².śoṃ¹.ti̱w¹.ti̱w¹.ke¹",
    "GHC": "thej¹.śjow¹.la¹.tsə¹.śjwã².śjow¹.tew¹.tew¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上老子说东斗经》"
  },
  {
    "word": "𗕔𘊇𗒉𘕘𗢄𘄱𗻼𘃻𘊐",
    "GX": "the̱¹.śoṃ¹.la̱¹.tsə̱¹.śwaṃ².theṃ¹.ṣae̱ṃ¹.yiṃ¹.ke¹",
    "GHC": "thej¹.śjow¹.la¹.tsə¹.śjwã².thjɨj¹.śiəj¹.ꞏji¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上老子说天生阴经》"
  },
  {
    "word": "𗕔𘊇𗒉𘕘𗼽𗣫𘊐",
    "GX": "the̱¹.śoṃ¹.la̱¹.tsə̱¹.si̱w².tse̱ṃ¹.ke¹",
    "GHC": "thej¹.śjow¹.la¹.tsə¹.sew².tsəj¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上老子消灾经》"
  },
  {
    "word": "𗕔𘊇𘍑𘏞𘊴𘝾𘊇𗤋𘃻𘊐",
    "GX": "the̱¹.śoṃ¹.leṃ¹.po̱¹.thu̱¹.li².śoṃ¹.me¹.yiṃ¹.ke¹",
    "GHC": "thej¹.śjow¹.ljɨj¹.po¹.thu¹.lji².śjow¹.mjij¹.ꞏji¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上灵宝度理无上阴经》"
  },
  {
    "word": "𗕔𘊇𗓰𗂓𗚿𗬐𘃻𗱭𘛀𘊐",
    "GX": "the̱¹.śoṃ¹.na̱¹.ti̱w¹.liw².sə̱¹.yiṃ¹.śiw².mbe².ke¹",
    "GHC": "thej¹.śjow¹.na¹.tew¹.ljiw².sə¹.ꞏji¹.śjiw².bji̱j².kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上南斗六司延寿妙经》 "
  },
  {
    "word": "𗕔𘊇𘄱𗁬𗶡𘃣𘊐",
    "GX": "the̱¹.śoṃ¹.theṃ¹.tho̱ṃ¹.hau̱¹.vi².ke¹",
    "GHC": "thej¹.śjow¹.thjɨj¹.thow¹.xu¹.wji².kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上天堂护卫经》"
  },
  {
    "word": "𗕔𘊇𗤩𘏸𘄱𗜰𗢄𗒅𘃝𘘣𘃡𗕔𗼽𗣫𗨝𗉔𘊐",
    "GX": "the̱¹.śoṃ¹.γwaṃ¹.ṣaə̱¹.theṃ¹.tsu̱ṃ¹.śwaṃ².rśər¹.vi¹.yə².vi¹.the̱¹.si̱w².tse̱ṃ¹.śiṃ¹.tśiw¹.ke¹",
    "GHC": "thej¹.śjow¹.ɣjwã¹.śiə¹.thjɨj¹.tsũ¹.śjwã².śjɨr¹.wji¹.ꞏjɨ².wji¹.thej¹.sew².tsəj¹.śjĩ¹.tśjiw¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上元始天尊说十为一为大消灾神咒经》"
  },
  {
    "word": "𗕔𘊇𘍑𗪦𗘆𗑃𗘺𗑌𗷭𗚿𗣗𗰔𘜻𗑰𘃻𘊐",
    "GX": "the̱¹.śoṃ¹.leṃ¹.paa̱¹.qi̱w².tśiṃ¹.me¹.qae̱¹.kiṃ¹.liw².zeh².yiw².phaa̱¹.tshe̱¹.yiṃ¹.ke¹",
    "GHC": "thej¹.śjow¹.ljɨj¹.pia¹.kew².tśjĩ¹.mjij¹.kiej¹.kjĩ¹.ljiw².zjịj².ꞏjiw².phia¹.tshej¹.ꞏji¹.kjij¹",
    "explanationEN": "",
    "explanationCN": "《太上元始天尊说十为一为大消灾神咒经》"
  },
  {
    "word": "𗕔𘏸𘝞",
    "GX": "the̱¹.ṣaə̱¹.rywər²",
    "GHC": "thej¹.śiə¹.ꞏjwɨr²",
    "explanationEN": "",
    "explanationCN": "《太史传》"
  },
  {
    "word": "𘓺𘃸𗫿𗓆𗆧𗅆𗬩𘞂",
    "GX": "rŋwə̱r¹.leh¹.kwi¹.le¹.siw¹.deṃ².qai̱¹.ndzə²",
    "GHC": "ŋwər¹.ljịj¹.kjwi¹.ljij¹.sjiw¹.djɨj².kie¹.dzjɨ̱²",
    "explanationEN": "",
    "explanationCN": "《天盛改旧新定律令》"
  },
  {
    "word": "𗙏𘙰",
    "GX": "γai̱h².li̱w²",
    "GHC": "ɣiẹ².lew²",
    "explanationEN": "",
    "explanationCN": "《同音》"
  },
  {
    "word": "𘝞𗗚",
    "GX": "rywər².ŋao̱ṃ²",
    "GHC": "ꞏjwɨr².ŋjow²",
    "explanationEN": "",
    "explanationCN": "《文海》"
  },
  {
    "word": "𘝞𗗚𘏨𗖵",
    "GX": "rywər².ŋao̱ṃ².lləh¹.bu¹",
    "GHC": "ꞏjwɨr².ŋjow².ljɨ̣¹.bju¹",
    "explanationEN": "",
    "explanationCN": "《文海宝韵》"
  },
  {
    "word": "𗏁𗙏𘈖𗖵",
    "GX": "ŋwə̱¹.γai̱h².vwi̱².bu¹",
    "GHC": "ŋwə¹.ɣiẹ².we².bju¹",
    "explanationEN": "",
    "explanationCN": "《五音切韵》"
  },
  {
    "word": "𗂧𘎆𗸒𘚜𗣼𗴀𗨮",
    "GX": "lheh².dźwə¹.su̱¹.lhweh¹.tśha².so̱².kah²",
    "GHC": "lhjịj².dźjwɨ¹.su¹.lhjwịj¹.tśhja².so².kjạ²",
    "explanationEN": "",
    "explanationCN": "《夏比邻国德高歌》"
  },
  {
    "word": "𗆧𗰖𗕿𘓓𘐆",
    "GX": "siw¹.nṣao¹.ne².nvwə̱¹.la̱¹",
    "GHC": "sjiw¹.śjo̱¹.njij².wə¹.la¹",
    "explanationEN": "",
    "explanationCN": "《新集慈孝记》"
  },
  {
    "word": "𗆧𗰖𗬻𘜼𘋥𘝿",
    "GX": "siw¹.nṣao¹.ŋġo̱r¹.mpho².di̱w².li²",
    "GHC": "sjiw¹.śjo̱¹.ko̱r¹.phjo̱².dew².lji²",
    "explanationEN": "",
    "explanationCN": "《新集锦合格言》"
  },
  {
    "word": "𗆧𗰖𗵒𗭧𘃎𘐏𘝞",
    "GX": "siw¹.nṣao¹.qai̱h¹.dəh¹.pah¹.tih¹.rywər²",
    "GHC": "sjiw¹.śjo̱¹.kiẹ¹.djɨ̣¹.pjạ¹.tjị¹.ꞏjwɨr²",
    "explanationEN": "",
    "explanationCN": "《新集碎金置掌文》"
  },
  {
    "word": "𗆧𘐘𗡺𘂬𘝞𗬐𗨮",
    "GX": "siw¹.ŋqu̱¹.rber².γo̱¹.rywər².sə̱¹.kah²",
    "GHC": "sjiw¹.ku̱¹.bji̱r².ꞏo¹.ꞏjwɨr².sə¹.kjạ²",
    "explanationEN": "",
    "explanationCN": "《新刻带注聿斯歌》"
  },
  {
    "word": "𗆧𗯝𘗊𘓐𗊴𗅏𗚜𗺉",
    "GX": "siw¹.lhe̱².rə̱r².dzwo².se¹.lah².pu².tśhi²",
    "GHC": "sjiw¹.lhej².rər².dzjwo².sjij¹.ljạ².pju².tśhji²",
    "explanationEN": "",
    "explanationCN": "《新译同人针灸经》"
  },
  {
    "word": "𘛂𗘞𗂰𘕂𗞔𘐂𗨮",
    "GX": "mbe².lha¹.li².dźe¹.śa¹.nwəh².kah²",
    "GHC": "bji̱j².lha¹.lji².dźjij¹.śja¹.njwɨ̣².kjạ²",
    "explanationEN": "",
    "explanationCN": "《整驾西行烧香歌》"
  },
  {
    "word": "𗥼𗁀",
    "GX": "a?.qo̱¹",
    "GHC": "ꞏja.ko¹",
    "explanationEN": "",
    "explanationCN": "阿哥"
  },
  {
    "word": "𗥼𗬐𗁀",
    "GX": "a?.sə̱¹.qo̱¹",
    "GHC": "ꞏja.sə¹.ko¹",
    "explanationEN": "",
    "explanationCN": "阿四哥"
  },
  {
    "word": "𗑙𘝻𗾩",
    "GX": "γa̱ṃ¹.qwo̱¹.hwaṃ¹",
    "GHC": "ɣã¹.kwo¹.xjwã¹",
    "explanationEN": "",
    "explanationCN": "安固县"
  },
  {
    "word": "𗪦𗁪",
    "GX": "paa̱¹.thi̱w²",
    "GHC": "pia¹.thew²",
    "explanationEN": "",
    "explanationCN": "巴豆"
  },
  {
    "word": "𗥻𗁪𗴼",
    "GX": "phai̱¹.thi̱w².khiw²",
    "GHC": "phie¹.thew².khjiw²",
    "explanationEN": "",
    "explanationCN": "白豆蔻"
  },
  {
    "word": "𗴂𗹭𗂧",
    "GX": "phao̱ṃ¹.be².lheh²",
    "GHC": "phiow¹.bjij².lhjịj²",
    "explanationEN": "",
    "explanationCN": "白高国"
  },
  {
    "word": "𗥻𗁀𗯒",
    "GX": "phai̱¹.qo̱¹.tsha̱²",
    "GHC": "phie¹.ko¹.tsha²",
    "explanationEN": "",
    "explanationCN": "白僵蚕"
  },
  {
    "word": "𗂽𗴂𗎭",
    "GX": "ye².phao̱ṃ¹.mmi¹",
    "GHC": "ꞏjij².phiow¹.mji̱¹",
    "explanationEN": "",
    "explanationCN": "白羊宫"
  },
  {
    "word": "𗂽𗴂𗦖𗎭",
    "GX": "ye².phao̱ṃ¹.rmer².mmi¹",
    "GHC": "ꞏjij².phiow¹.mjijr².mji̱¹",
    "explanationEN": "",
    "explanationCN": "白羊星宫"
  },
  {
    "word": "𘏞𗂧",
    "GX": "po̱¹.lheh²",
    "GHC": "po¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "褒国"
  },
  {
    "word": "𗌷𗂎𗾩",
    "GX": "po̱¹.tsheṃ².hwaṃ¹",
    "GHC": "po¹.tshjɨj².xjwã¹",
    "explanationEN": "",
    "explanationCN": "保靖县"
  },
  {
    "word": "𗌷𗂎",
    "GX": "po̱¹.tsheṃ²",
    "GHC": "po¹.tshjɨj²",
    "explanationEN": "",
    "explanationCN": "保静"
  },
  {
    "word": "𗌷𗂎𗵒𘗁𘛃𗤛",
    "GX": "po̱¹.tsheṃ².qai̱h¹.dźa².lu̱².tśoṃ¹",
    "GHC": "po¹.tshjɨj².kiẹ¹.dźja².lu².tśjow¹",
    "explanationEN": "",
    "explanationCN": "保静金刚座寺"
  },
  {
    "word": "𗀱𗜀",
    "GX": "phao̱².tsi̱w¹",
    "GHC": "phio².tsew¹",
    "explanationEN": "",
    "explanationCN": "鲍焦"
  },
  {
    "word": "𗀱𗂎",
    "GX": "phao̱².tsheṃ²",
    "GHC": "phio².tshjɨj²",
    "explanationEN": "",
    "explanationCN": "鲍靓"
  },
  {
    "word": "𗀱𗄽",
    "GX": "phao̱².ṣaa̱ṃ¹",
    "GHC": "phio².śiã¹",
    "explanationEN": "",
    "explanationCN": "鲍山"
  },
  {
    "word": "𗀱𗘬",
    "GX": "phao̱².swa¹",
    "GHC": "phio².sjwa¹",
    "explanationEN": "",
    "explanationCN": "鲍宣"
  },
  {
    "word": "𗰜𗂧",
    "GX": "rmə̱r².lheh²",
    "GHC": "mər².lhjịj²",
    "explanationEN": "",
    "explanationCN": "本国"
  },
  {
    "word": "𗭺𗁪",
    "GX": "rpər¹.thi̱w²",
    "GHC": "pjɨr¹.thew²",
    "explanationEN": "",
    "explanationCN": "荜豆"
  },
  {
    "word": "𗢪𗁪",
    "GX": "pi¹.thi̱w²",
    "GHC": "pji¹.thew²",
    "explanationEN": "",
    "explanationCN": "荜豆/辔头"
  },
  {
    "word": "𗁡𘎠",
    "GX": "phi¹.sih¹",
    "GHC": "phji¹.sjị¹",
    "explanationEN": "",
    "explanationCN": "簸箕"
  },
  {
    "word": "𗊛𗵘𗴴",
    "GX": "tshi̱w¹.tśa¹.re̱r²",
    "GHC": "tshew¹.tśja¹.lhejr²",
    "explanationEN": "",
    "explanationCN": "曹道乐"
  },
  {
    "word": "𗊛𗀇",
    "GX": "tshi̱w¹.goṃ¹",
    "GHC": "tshew¹.gjow¹",
    "explanationEN": "",
    "explanationCN": "曹娥"
  },
  {
    "word": "𗊛𗂧",
    "GX": "tshi̱w¹.lheh²",
    "GHC": "tshew¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "曹国"
  },
  {
    "word": "𗊛𗁡",
    "GX": "tshi̱w¹.phi¹",
    "GHC": "tshew¹.phji¹",
    "explanationEN": "",
    "explanationCN": "曹丕"
  },
  {
    "word": "𗊛𗉔",
    "GX": "tshi̱w¹.tśiw¹",
    "GHC": "tshew¹.tśjiw¹",
    "explanationEN": "",
    "explanationCN": "曹州"
  },
  {
    "word": "𗊛𗁪𗴼",
    "GX": "tshi̱w¹.thi̱w².khiw²",
    "GHC": "tshew¹.thew².khjiw²",
    "explanationEN": "",
    "explanationCN": "草豆蔻"
  },
  {
    "word": "𗊛𘓬𗁪",
    "GX": "tshi̱w¹.ŋġu̱².thi̱w²",
    "GHC": "tshew¹.gu̱².thew²",
    "explanationEN": "",
    "explanationCN": "草乌头"
  },
  {
    "word": "𗯒𗆀𗁪",
    "GX": "tsha̱².γu̱².thi̱w²",
    "GHC": "tsha².ꞏu².thew²",
    "explanationEN": "",
    "explanationCN": "草乌头"
  },
  {
    "word": "𗀌𗐺",
    "GX": "tśha¹.mi̱ṃ¹",
    "GHC": "tśhja¹.mẽ¹",
    "explanationEN": "",
    "explanationCN": "车门（宫城的一重门）"
  },
  {
    "word": "𗝿𗂎𘕘",
    "GX": "tśhe¹.tsheṃ².tsə̱¹",
    "GHC": "tśhjij¹.tshjɨj².tsə¹",
    "explanationEN": "",
    "explanationCN": "车前子"
  },
  {
    "word": "𗀌𘍞",
    "GX": "tśha¹.γao̱h¹",
    "GHC": "tśhja¹.iọ¹",
    "explanationEN": "",
    "explanationCN": "车院（官署）"
  },
  {
    "word": "𘔜𗂧",
    "GX": "tśhiṃ¹.lheh²",
    "GHC": "tśhji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "陈国"
  },
  {
    "word": "𘔜𘅧𗁡",
    "GX": "tśhiṃ¹.kwi¹.phi¹",
    "GHC": "tśhji¹.kjwi¹.phji¹",
    "explanationEN": "",
    "explanationCN": "陈橘皮"
  },
  {
    "word": "𘔜𗁡",
    "GX": "tśhiṃ¹.phi¹",
    "GHC": "tśhji¹.phji¹",
    "explanationEN": "",
    "explanationCN": "陈皮"
  },
  {
    "word": "𗆶𘙕𗗊",
    "GX": "rar².kə².ku¹",
    "GHC": "rjar².kjɨ².kju¹",
    "explanationEN": "",
    "explanationCN": "吃兜芽"
  },
  {
    "word": "𗺉𗼽𗁪",
    "GX": "tśhi².si̱w².thi̱w²",
    "GHC": "tśhji².sew².thew²",
    "explanationEN": "",
    "explanationCN": "赤小豆"
  },
  {
    "word": "𗀌𘐒",
    "GX": "tśha¹.ryer²",
    "GHC": "tśhja¹.ꞏji̱r²",
    "explanationEN": "",
    "explanationCN": "出车"
  },
  {
    "word": "𗀌𘐒𗔇",
    "GX": "tśha¹.ryer².γu̱h²",
    "GHC": "tśhja¹.ꞏji̱r².ꞏụ²",
    "explanationEN": "",
    "explanationCN": "出车库"
  },
  {
    "word": "𗀌𘐒𘍞",
    "GX": "tśha¹.ryer².γao̱h¹",
    "GHC": "tśhja¹.ꞏji̱r².iọ¹",
    "explanationEN": "",
    "explanationCN": "出车院（末等司）"
  },
  {
    "word": "𗳷𗂧",
    "GX": "tṣhau̱h¹.lheh²",
    "GHC": "tśhjụ¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "楚国"
  },
  {
    "word": "𗀁𗍌",
    "GX": "sa̱².dźwe¹",
    "GHC": "sa.dźjwij¹",
    "explanationEN": "",
    "explanationCN": "嘬食"
  },
  {
    "word": "𗊧𘅰𗁪",
    "GX": "tśhwaṃ¹.γu̱¹.thi̱w²",
    "GHC": "tśhjwã¹.ɣu¹.thew²",
    "explanationEN": "",
    "explanationCN": "川乌豆"
  },
  {
    "word": "𗊧𗆀𗁪",
    "GX": "tśhwaṃ¹.γu̱².thi̱w²",
    "GHC": "tśhjwã¹.ꞏu².thew²",
    "explanationEN": "",
    "explanationCN": "川乌头"
  },
  {
    "word": "𗁲𗥋𗮴𘕤",
    "GX": "me̱².mmə̱¹.mma¹.yu²",
    "GHC": "mej².mə̱¹.mja̱¹.ꞏju²",
    "explanationEN": "",
    "explanationCN": "吹毛求疵"
  },
  {
    "word": "𗴂𗹭𗂧𘜶",
    "GX": "phao̱ṃ¹.be².lheh².lleh²",
    "GHC": "phiow¹.bjij².lhjịj².ljịj²",
    "explanationEN": "The.Great.White.High.State",
    "explanationCN": "大白高国"
  },
  {
    "word": "𗂧𘟙𘜶",
    "GX": "lheh².ne².lleh²",
    "GHC": "lhjịj².njij².ljịj²",
    "explanationEN": "",
    "explanationCN": "大国王"
  },
  {
    "word": "𘜶𗀐",
    "GX": "lleh².dźe¹",
    "GHC": "ljịj².dźjij¹",
    "explanationEN": "",
    "explanationCN": "大寒"
  },
  {
    "word": "𗕔𘔘",
    "GX": "the̱¹.hu̱ṃ¹",
    "GHC": "thej¹.xũ¹",
    "explanationEN": "",
    "explanationCN": "大黄"
  },
  {
    "word": "𗕔𘎫",
    "GX": "the̱¹.ki¹",
    "GHC": "thej¹.kji¹",
    "explanationEN": "",
    "explanationCN": "大蓟"
  },
  {
    "word": "𗕔𘊞𘟀",
    "GX": "the̱¹.lu̱².le²",
    "GHC": "thej¹.lu².ljij²",
    "explanationEN": "",
    "explanationCN": "大卢令"
  },
  {
    "word": "𗕔𘊞𘟀𘗜",
    "GX": "the̱¹.lu̱².le².ŋao̱ṃ²",
    "GHC": "thej¹.lu².ljij².ŋjow²",
    "explanationEN": "",
    "explanationCN": "大卢令案"
  },
  {
    "word": "𗕔𗣭𗂧",
    "GX": "the̱¹.tshiṃ¹.lheh²",
    "GHC": "thej¹.tshji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "大秦国"
  },
  {
    "word": "𘜶𗁬",
    "GX": "lleh².tho̱ṃ¹",
    "GHC": "ljịj².thow¹",
    "explanationEN": "",
    "explanationCN": "大唐"
  },
  {
    "word": "𗕔𗁬𗑪",
    "GX": "the̱¹.tho̱ṃ¹.kwiṃ¹",
    "GHC": "thej¹.thow¹.kjwĩ¹",
    "explanationEN": "",
    "explanationCN": "大通军（中等司）"
  },
  {
    "word": "𗕔𗤩",
    "GX": "the̱¹.γwaṃ¹",
    "GHC": "thej¹.ɣjwã¹",
    "explanationEN": "",
    "explanationCN": "大宛"
  },
  {
    "word": "𗕔𗤩𗂧",
    "GX": "the̱¹.γwaṃ¹.lheh²",
    "GHC": "thej¹.ɣjwã¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "大宛国"
  },
  {
    "word": "𘜶𗴲𗂧",
    "GX": "lleh².dźwe².lheh²",
    "GHC": "ljịj².dźjwij².lhjịj²",
    "explanationEN": "",
    "explanationCN": "大夏国"
  },
  {
    "word": "𗕛𗼵𗂧",
    "GX": "te̱¹.hao̱².lheh²",
    "GHC": "tej¹.xjow².lhjịj²",
    "explanationEN": "",
    "explanationCN": "带方国"
  },
  {
    "word": "𘕢𗂧",
    "GX": "bə¹.lheh²",
    "GHC": "bjɨ¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "敌国"
  },
  {
    "word": "𗁪𗊋",
    "GX": "thi̱w².tsi²",
    "GHC": "thew².tsji²",
    "explanationEN": "",
    "explanationCN": "铫子"
  },
  {
    "word": "𗇊𗁀𗽤",
    "GX": "the².qo̱¹.tṣhae̱²",
    "GHC": "thjij².ko¹.tśhiej²",
    "explanationEN": "",
    "explanationCN": "定国寨"
  },
  {
    "word": "𗂓𗂓",
    "GX": "ti̱w¹.ti̱w¹",
    "GHC": "tew¹.tew¹",
    "explanationEN": "",
    "explanationCN": "东斗"
  },
  {
    "word": "𘂹𗑛𗤳𗼚𗚉𗹚𘒮",
    "GX": "ne².rzər¹.mə̱².γo̱ṃ².yu².rner¹.nzi̱w²",
    "GHC": "njij².zjɨr¹.mə².ꞏow².ꞏju².njijr¹.ze̱w²",
    "explanationEN": "",
    "explanationCN": "东南卧姓民地忍"
  },
  {
    "word": "𗁅𘟅𗁅𗹭",
    "GX": "lla̱h¹.tśhe¹.lla̱h¹.be²",
    "GHC": "lạ¹.tśhjij¹.lạ¹.bjij²",
    "explanationEN": "",
    "explanationCN": "动手"
  },
  {
    "word": "𗁪𗙤𘞈",
    "GX": "thi̱w².piṃ¹.ta̱ṃ¹",
    "GHC": "thew².pjĩ¹.tã¹",
    "explanationEN": "",
    "explanationCN": "豆冰丹"
  },
  {
    "word": "𗁪𗴼",
    "GX": "thi̱w².khiw²",
    "GHC": "thew².khjiw²",
    "explanationEN": "",
    "explanationCN": "豆蔻"
  },
  {
    "word": "𗁪𗽭𗐐𘍑𗙢",
    "GX": "thi̱w².qhi̱w².hoṃ¹.leṃ¹.vwa̱ṃ²",
    "GHC": "thew².khew².xjow¹.ljɨj¹.wã²",
    "explanationEN": "",
    "explanationCN": "豆蔻香连丸"
  },
  {
    "word": "𗁪𗙪𗷌",
    "GX": "thi̱w².kaṃ¹.ti̱¹",
    "GHC": "thew².kjã¹.te¹",
    "explanationEN": "",
    "explanationCN": "窦建德"
  },
  {
    "word": "𗁪𗡝𗷌",
    "GX": "thi̱w².ka¹.ti̱¹",
    "GHC": "thew².kja¹.te¹",
    "explanationEN": "",
    "explanationCN": "窦建德"
  },
  {
    "word": "𗀀𗻊",
    "GX": "do̱¹.do̱²",
    "GHC": "do¹.do²",
    "explanationEN": "",
    "explanationCN": "毒"
  },
  {
    "word": "𗀋𘀃𗣺",
    "GX": "phao̱².ŋgu².ra̱r²",
    "GHC": "phio².gju̱².rar²",
    "explanationEN": "",
    "explanationCN": "毒蛇"
  },
  {
    "word": "𗌔𗁪",
    "GX": "thwa̱ṃ².thi̱w²",
    "GHC": "thwã².thew²",
    "explanationEN": "",
    "explanationCN": "段头（官名）"
  },
  {
    "word": "𘎧𗂧𘘚",
    "GX": "vwa̱¹.lheh².ndze²",
    "GHC": "wa¹.lhjịj².dzji̱j²",
    "explanationEN": "",
    "explanationCN": "讹国师"
  },
  {
    "word": "𘎧𘓉𘑫𗖅𘏐",
    "GX": "vwa̱¹.lhi̱w¹.ka̱ṃ¹.swi².γwai̱¹",
    "GHC": "wa¹.lhew¹.kã¹.sjwi².ɣiwe¹",
    "explanationEN": "",
    "explanationCN": "讹劳甘领势"
  },
  {
    "word": "𗳩𗂎",
    "GX": "γo̱¹.tsheṃ²",
    "GHC": "ꞏo¹.tshjɨj²",
    "explanationEN": "",
    "explanationCN": "讹七"
  },
  {
    "word": "𗳩𗂎𘟄𗯿𘏐",
    "GX": "γo̱¹.tsheṃ².γə¹.rvwe̱r¹.γwai̱¹",
    "GHC": "ꞏo¹.tshjɨj².ɣjɨ¹.wejr¹.ɣiwe¹",
    "explanationEN": "",
    "explanationCN": "讹七舅茂势"
  },
  {
    "word": "𗀇𘏿",
    "GX": "goṃ¹.qa̱h¹",
    "GHC": "gjow¹.kạ¹",
    "explanationEN": "",
    "explanationCN": "娥葛（官名）"
  },
  {
    "word": "𗀀𘊄",
    "GX": "do̱¹.ṇo̱ṃ²",
    "GHC": "do¹.niow²",
    "explanationEN": "",
    "explanationCN": "恶毒"
  },
  {
    "word": "𗼇𗂧",
    "GX": "mi².lheh²",
    "GHC": "mji².lhjịj²",
    "explanationEN": "",
    "explanationCN": "番国"
  },
  {
    "word": "𘚜𗂧",
    "GX": "lhweh¹.lheh²",
    "GHC": "lhjwịj¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "番国"
  },
  {
    "word": "𘐀𗂧",
    "GX": "phə̱¹.lheh²",
    "GHC": "phə¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "蕃国"
  },
  {
    "word": "𘑶𗐱",
    "GX": "tse¹.ni²",
    "GHC": "tsjij¹.nji²",
    "explanationEN": "not.self.PL",
    "explanationCN": "非己(复数)"
  },
  {
    "word": "𗢳𗂧",
    "GX": "tha̱¹.lheh²",
    "GHC": "tha¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "佛国"
  },
  {
    "word": "𗥑𘌈𗂧",
    "GX": "hu̱¹.yu¹.lheh²",
    "GHC": "xu¹.ꞏju̱¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "扶余国"
  },
  {
    "word": "𘑫𗁀",
    "GX": "ka̱ṃ¹.qo̱¹",
    "GHC": "kã¹.ko¹",
    "explanationEN": "",
    "explanationCN": "干姜"
  },
  {
    "word": "𗴒𗻼𗁀",
    "GX": "kah¹.ṣae̱ṃ¹.qo̱¹",
    "GHC": "kjạ¹.śiəj¹.ko¹",
    "explanationEN": "",
    "explanationCN": "干生姜"
  },
  {
    "word": "𗻼𗁀𘑸",
    "GX": "ṣae̱ṃ¹.qo̱¹.ro̱ṃr¹",
    "GHC": "śiəj¹.ko¹.rowr¹",
    "explanationEN": "",
    "explanationCN": "干生姜"
  },
  {
    "word": "𗀂𗣙",
    "GX": "tśhaw¹.thi̱w¹",
    "GHC": "tśhja̱¹.thew¹",
    "explanationEN": "",
    "explanationCN": "刚正"
  },
  {
    "word": "𗣛𘌜𗁬",
    "GX": "qi̱w¹.pai̱¹.tho̱ṃ¹",
    "GHC": "kew¹.pie¹.thow¹",
    "explanationEN": "",
    "explanationCN": "皋伯通"
  },
  {
    "word": "𗣛𘝾𗂧",
    "GX": "qi̱w¹.li².lheh²",
    "GHC": "kew¹.lji².lhjịj²",
    "explanationEN": "",
    "explanationCN": "高丽国"
  },
  {
    "word": "𘊹𗍭𗁀",
    "GX": "kaw¹.loṃ².qo̱¹",
    "GHC": "kja̱¹.ljow².ko¹",
    "explanationEN": "",
    "explanationCN": "高良姜"
  },
  {
    "word": "𗑱𗙼𗂧",
    "GX": "ka².yu².lheh²",
    "GHC": "kja².ꞏju².lhjịj²",
    "explanationEN": "",
    "explanationCN": "诰窳国"
  },
  {
    "word": "𗱕𗱕",
    "GX": "rur¹.rur¹",
    "GHC": "rjur¹.rjur¹",
    "explanationEN": "",
    "explanationCN": "各处"
  },
  {
    "word": "𘝵𗯩",
    "GX": "ye¹.twu̱h¹",
    "GHC": "ˑjij¹.twụ¹",
    "explanationEN": "each",
    "explanationCN": "各自"
  },
  {
    "word": "𗀝𗡈",
    "GX": "rvwo̱r¹.ryawr²",
    "GHC": "wor¹.ꞏja̱r²",
    "explanationEN": "",
    "explanationCN": "公鸡"
  },
  {
    "word": "𗁣𗍑",
    "GX": "dzə¹.ŋkhə¹",
    "GHC": "dzjɨ¹.khjɨ̱¹",
    "explanationEN": "",
    "explanationCN": "恭敬"
  },
  {
    "word": "𗐪𘓖𘏸",
    "GX": "qhao̱ṃ².qo̱ṃ¹.ṣaə̱¹",
    "GHC": "khjow².kow¹.śiə¹",
    "explanationEN": "",
    "explanationCN": "共工氏"
  },
  {
    "word": "𗃞𗗿",
    "GX": "qə̱¹.ta̱¹",
    "GHC": "kə¹.ta¹",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "word": "𘝻𗨇𗂧",
    "GX": "qwo̱¹.tṣuo¹.lheh²",
    "GHC": "kwo¹.tśio̱w¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "孤竹国"
  },
  {
    "word": "𗋳𗁬",
    "GX": "kwa̱ṃ¹.tho̱ṃ¹",
    "GHC": "kwã¹.thow¹",
    "explanationEN": "",
    "explanationCN": "观堂"
  },
  {
    "word": "𗂀𗥶",
    "GX": "qo̱¹.lu²",
    "GHC": "ko¹.lju²",
    "explanationEN": "",
    "explanationCN": "光六"
  },
  {
    "word": "𗁀𗥡𗠚𗥑",
    "GX": "qo̱¹.lu̱².thae̱h².hu̱¹",
    "GHC": "ko¹.lu².thẹj².xu¹",
    "explanationEN": "",
    "explanationCN": "光禄大夫"
  },
  {
    "word": "𗁀𘊞𗕔𗥑",
    "GX": "qo̱¹.lu̱².the̱¹.hu̱¹",
    "GHC": "ko¹.lu².thej¹.xu¹",
    "explanationEN": "",
    "explanationCN": "光禄大夫"
  },
  {
    "word": "𗁀𘔒",
    "GX": "qo̱¹.ne²",
    "GHC": "ko¹.njij²",
    "explanationEN": "",
    "explanationCN": "光宁"
  },
  {
    "word": "𗂀𘔒",
    "GX": "qo̱¹.ne²",
    "GHC": "ko¹.njij²",
    "explanationEN": "",
    "explanationCN": "光宁"
  },
  {
    "word": "𗁀𘔒𗙴𗫔",
    "GX": "qo̱¹.ne².ra̱r¹.yi¹",
    "GHC": "ko¹.njij².rar¹.ꞏji¹",
    "explanationEN": "",
    "explanationCN": "光宁啰伊"
  },
  {
    "word": "𗁀𘈫",
    "GX": "qo̱¹.γu̱²",
    "GHC": "ko¹.ꞏu²",
    "explanationEN": "",
    "explanationCN": "光武"
  },
  {
    "word": "𗂀𘈫",
    "GX": "qo̱¹.γu̱²",
    "GHC": "ko¹.ꞏu²",
    "explanationEN": "",
    "explanationCN": "光武"
  },
  {
    "word": "𗁀𘈫𘋨",
    "GX": "qo̱¹.γu̱².dzwə¹",
    "GHC": "ko¹.ꞏu².dzjwɨ¹",
    "explanationEN": "",
    "explanationCN": "光武帝"
  },
  {
    "word": "𗂀𘈫𘋨",
    "GX": "qo̱¹.γu̱².dzwə¹",
    "GHC": "ko¹.ꞏu².dzjwɨ¹",
    "explanationEN": "",
    "explanationCN": "光武帝"
  },
  {
    "word": "𗁀𗿖",
    "GX": "qo̱¹.ŋŋaa̱²",
    "GHC": "ko¹.ŋia̱²",
    "explanationEN": "",
    "explanationCN": "光颜"
  },
  {
    "word": "𗁀𘟑",
    "GX": "qo̱¹.ha̱ṃ²",
    "GHC": "ko¹.xã²",
    "explanationEN": "",
    "explanationCN": "广汉"
  },
  {
    "word": "𗁀𘟑𗓷",
    "GX": "qo̱¹.ha̱ṃ².khwaṃ¹",
    "GHC": "ko¹.xã².khjwã¹",
    "explanationEN": "",
    "explanationCN": "广汉郡"
  },
  {
    "word": "𗁀𗙃",
    "GX": "qo̱¹.liṃ¹",
    "GHC": "ko¹.ljĩ¹",
    "explanationEN": "",
    "explanationCN": "广陵"
  },
  {
    "word": "𗁀𘂯𗐐",
    "GX": "qo̱¹.mbo̱².hoṃ¹",
    "GHC": "ko¹.bo̱².xjow¹",
    "explanationEN": "",
    "explanationCN": "广木香"
  },
  {
    "word": "𘃳𘂆𗂧",
    "GX": "kiw¹.tsə¹.lheh²",
    "GHC": "kjiw¹.tsjɨ¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "龟兹国"
  },
  {
    "word": "𘝻𗂧",
    "GX": "qwo̱¹.lheh²",
    "GHC": "kwo¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "郭国"
  },
  {
    "word": "𘝻𗀱",
    "GX": "qwo̱¹.phao̱²",
    "GHC": "kwo¹.phio²",
    "explanationEN": "",
    "explanationCN": "郭璞"
  },
  {
    "word": "𗫌𗂧",
    "GX": "ni¹.lheh²",
    "GHC": "nji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "国家"
  },
  {
    "word": "𗂧𗪚𘂀𗴴",
    "GX": "lheh².dau̱¹.se².re̱r²",
    "GHC": "lhjịj².du¹.sjij².lhejr²",
    "explanationEN": "",
    "explanationCN": "国泰民安"
  },
  {
    "word": "𗂧𘟙",
    "GX": "lheh².ne²",
    "GHC": "lhjịj².njij²",
    "explanationEN": "",
    "explanationCN": "国王"
  },
  {
    "word": "𗆆𗂧",
    "GX": "qwae̱ṃ¹.lheh²",
    "GHC": "kiwəj¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "虢国"
  },
  {
    "word": "𗁀𘂆",
    "GX": "qo̱¹.tsə¹",
    "GHC": "ko¹.tsjɨ¹",
    "explanationEN": "",
    "explanationCN": "果子"
  },
  {
    "word": "𗁀𘊴",
    "GX": "qo̱¹.thu̱¹",
    "GHC": "ko¹.thu¹",
    "explanationEN": "",
    "explanationCN": "裹肚"
  },
  {
    "word": "𘛽𗓆",
    "GX": "luh².le¹",
    "GHC": "ljụ².ljij¹",
    "explanationEN": "",
    "explanationCN": "过身"
  },
  {
    "word": "𗃰𗁬𗉣",
    "GX": "he̱¹.tho̱ṃ¹.phi¹",
    "GHC": "xej¹.thow¹.phji¹",
    "explanationEN": "",
    "explanationCN": "海桐皮"
  },
  {
    "word": "𗀐𗮈",
    "GX": "dźe¹.ṇah?",
    "GHC": "dźjij¹.nja",
    "explanationEN": "",
    "explanationCN": "寒露"
  },
  {
    "word": "𘂦𗀇",
    "GX": "ha̱ṃ¹.goṃ¹",
    "GHC": "xã¹.gjow¹",
    "explanationEN": "",
    "explanationCN": "韩娥"
  },
  {
    "word": "𘟑𗀇",
    "GX": "ha̱ṃ².goṃ¹",
    "GHC": "xã².gjow¹",
    "explanationEN": "",
    "explanationCN": "韩娥"
  },
  {
    "word": "𘂦𗂧",
    "GX": "ha̱ṃ¹.lheh²",
    "GHC": "xã¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "韩国"
  },
  {
    "word": "𘟑𗁀𘈫",
    "GX": "ha̱ṃ².qo̱¹.γu̱²",
    "GHC": "xã².ko¹.ꞏu²",
    "explanationEN": "",
    "explanationCN": "汉光武"
  },
  {
    "word": "𘂜𗂧",
    "GX": "rza̱r¹.lheh²",
    "GHC": "zar¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "汉国"
  },
  {
    "word": "𘟑𗂧",
    "GX": "ha̱ṃ².lheh²",
    "GHC": "xã².lhjịj²",
    "explanationEN": "",
    "explanationCN": "汉国"
  },
  {
    "word": "𗰂𘕘𗁡",
    "GX": "hwo̱².tsə̱¹.phi¹",
    "GHC": "xwo².tsə¹.phji¹",
    "explanationEN": "",
    "explanationCN": "诃子皮"
  },
  {
    "word": "𗏡𗁬",
    "GX": "qu̱h¹.tho̱ṃ¹",
    "GHC": "kụ¹.thow¹",
    "explanationEN": "",
    "explanationCN": "后唐"
  },
  {
    "word": "𗃰𗀱",
    "GX": "he̱¹.phao̱²",
    "GHC": "xej¹.phio²",
    "explanationEN": "",
    "explanationCN": "厚朴"
  },
  {
    "word": "𗬦𗀱",
    "GX": "hi̱w².phao̱²",
    "GHC": "xew².phio²",
    "explanationEN": "",
    "explanationCN": "厚朴"
  },
  {
    "word": "𗺹𗀱",
    "GX": "hi̱w¹.phao̱²",
    "GHC": "xew¹.phio²",
    "explanationEN": "",
    "explanationCN": "厚朴"
  },
  {
    "word": "𗶡𗂧",
    "GX": "hau̱¹.lheh²",
    "GHC": "xu¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "胡国"
  },
  {
    "word": "𗶡𗁪",
    "GX": "hau̱¹.thi̱w²",
    "GHC": "xu¹.thew²",
    "explanationEN": "",
    "explanationCN": "壶头（地名）"
  },
  {
    "word": "𗂧𘑨",
    "GX": "lheh².γwu̱h²",
    "GHC": "lhjịj².ꞏwu²",
    "explanationEN": "",
    "explanationCN": "护国"
  },
  {
    "word": "𗂧𘑨𘏨𘗣",
    "GX": "lheh².γwu̱h².lləh¹.dau̱²",
    "GHC": "lhjịj².ꞏwu².ljɨ̣¹.du²",
    "explanationEN": "",
    "explanationCN": "护国宝塔"
  },
  {
    "word": "𗂧𘑨𗎭",
    "GX": "lheh².γwu̱h².mmi¹",
    "GHC": "lhjịj².ꞏwu².mji̱¹",
    "explanationEN": "",
    "explanationCN": "护国宫"
  },
  {
    "word": "𗂧𘑨𗤛",
    "GX": "lheh².γwu̱h².tśoṃ¹",
    "GHC": "lhjịj².ꞏwu².tśjow¹",
    "explanationEN": "",
    "explanationCN": "护国寺"
  },
  {
    "word": "𗂧𘑨𗫔𗎭",
    "GX": "lheh².γwu̱h².yi¹.mmi¹",
    "GHC": "lhjịj².ꞏwu².ꞏji¹.mji̱¹",
    "explanationEN": "",
    "explanationCN": "护国寺"
  },
  {
    "word": "𗨍𗁬",
    "GX": "hwaa̱¹.tho̱ṃ¹",
    "GHC": "xiwa¹.thow¹",
    "explanationEN": "",
    "explanationCN": "华佗"
  },
  {
    "word": "𗶡𗁀",
    "GX": "hau̱¹.qo̱¹",
    "GHC": "xu¹.ko¹",
    "explanationEN": "",
    "explanationCN": "霍光"
  },
  {
    "word": "𗺹𗁀",
    "GX": "hi̱w¹.qo̱¹",
    "GHC": "xew¹.ko¹",
    "explanationEN": "",
    "explanationCN": "霍光"
  },
  {
    "word": "𗀝𗡗",
    "GX": "rvwo̱r¹.ryawr²",
    "GHC": "wor¹.ꞏja̱r²",
    "explanationEN": "",
    "explanationCN": "鸡"
  },
  {
    "word": "𗀝𗀥",
    "GX": "rvwo̱r¹.ti̱w¹",
    "GHC": "wor¹.tew¹",
    "explanationEN": "",
    "explanationCN": "鸡蛋"
  },
  {
    "word": "𗀝𗡗𗀥",
    "GX": "rvwo̱r¹.ryawr².ti̱w¹",
    "GHC": "wor¹.ꞏja̱r².tew¹",
    "explanationEN": "",
    "explanationCN": "鸡蛋"
  },
  {
    "word": "𗁡𗵫",
    "GX": "phi¹.geh¹",
    "GHC": "phji¹.gjịj¹",
    "explanationEN": "",
    "explanationCN": "箕宿"
  },
  {
    "word": "𗀅𗄭",
    "GX": "rza̱r².dzəh²",
    "GHC": "zar².dzjɨ̣²",
    "explanationEN": "",
    "explanationCN": "集校"
  },
  {
    "word": "𘝵𗐱",
    "GX": "ye¹.ni²",
    "GHC": "ꞏjij¹.nji²",
    "explanationEN": "self.PL",
    "explanationCN": "己(复数)"
  },
  {
    "word": "𗀄𗳓",
    "GX": "ŋwu̱².rśar¹",
    "GHC": "ŋwu².śjar¹",
    "explanationEN": "",
    "explanationCN": "尖头"
  },
  {
    "word": "𗽕𗁪",
    "GX": "qao̱ṃ².thi̱w²",
    "GHC": "kiow².thew²",
    "explanationEN": "",
    "explanationCN": "豇豆"
  },
  {
    "word": "𗷭𗁬",
    "GX": "kiṃ¹.tho̱ṃ¹",
    "GHC": "kjĩ¹.thow¹",
    "explanationEN": "",
    "explanationCN": "金汤"
  },
  {
    "word": "𗁣𗧗",
    "GX": "dzə¹.tśhweṃ¹",
    "GHC": "dzjɨ¹.tśhjwɨj¹",
    "explanationEN": "",
    "explanationCN": "谨慎"
  },
  {
    "word": "𗁣𗼒",
    "GX": "dzə¹.qhu̱¹",
    "GHC": "dzjɨ¹.khu¹",
    "explanationEN": "",
    "explanationCN": "谨献"
  },
  {
    "word": "𗦆𗂧",
    "GX": "tsiṃ¹.lheh²",
    "GHC": "tsjĩ¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "晋国"
  },
  {
    "word": "𗂎𗦺",
    "GX": "tsheṃ².pha̱ṃ¹",
    "GHC": "tshjɨj².phã¹",
    "explanationEN": "",
    "explanationCN": "经判"
  },
  {
    "word": "𗂎𘝻𘟙",
    "GX": "tsheṃ².qwo̱¹.ne²",
    "GHC": "tshjɨj².kwo¹.njij²",
    "explanationEN": "",
    "explanationCN": "靖郭君"
  },
  {
    "word": "𗢇𘄊",
    "GX": "kiw¹.li¹",
    "GHC": "kjiw¹.lji¹",
    "explanationEN": "",
    "explanationCN": "九黎"
  },
  {
    "word": "𗢇𘄊𗂧",
    "GX": "kiw¹.li¹.lheh²",
    "GHC": "kjiw¹.lji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "九黎国"
  },
  {
    "word": "𗢇𘄊𘟙",
    "GX": "kiw¹.li¹.ne²",
    "GHC": "kjiw¹.lji¹.njij²",
    "explanationEN": "",
    "explanationCN": "九黎王"
  },
  {
    "word": "𗁅𗁀",
    "GX": "lla̱h¹.qo̱¹",
    "GHC": "lạ¹.ko¹",
    "explanationEN": "",
    "explanationCN": "掬"
  },
  {
    "word": "𗕾𗂧",
    "GX": "ku¹.lheh²",
    "GHC": "kju¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "莒国"
  },
  {
    "word": "𗀄𗵶",
    "GX": "ŋwu̱².ŋhe²",
    "GHC": "ŋwu².xjij²",
    "explanationEN": "",
    "explanationCN": "开阔"
  },
  {
    "word": "𗐪𗵆",
    "GX": "qhao̱ṃ².śeṃ¹",
    "GHC": "khjow².śjɨj¹",
    "explanationEN": "",
    "explanationCN": "康成"
  },
  {
    "word": "𗐪𗕾",
    "GX": "qhao̱ṃ².ku¹",
    "GHC": "khjow².kju¹",
    "explanationEN": "",
    "explanationCN": "康居"
  },
  {
    "word": "𗐪𗕾𗂧",
    "GX": "qhao̱ṃ².ku¹.lheh²",
    "GHC": "khjow².kju¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "康居国"
  },
  {
    "word": "𗐪𘜲",
    "GX": "qhao̱ṃ².śu¹",
    "GHC": "khjow².śju¹",
    "explanationEN": "",
    "explanationCN": "康叔"
  },
  {
    "word": "𗐪𗲠",
    "GX": "qhao̱ṃ².ŋa̱¹",
    "GHC": "khjow².ŋa¹",
    "explanationEN": "",
    "explanationCN": "空笼"
  },
  {
    "word": "𗥴𗂎",
    "GX": "qho̱ṃ¹.tsheṃ²",
    "GHC": "khow¹.tshjɨj²",
    "explanationEN": "",
    "explanationCN": "空青"
  },
  {
    "word": "𗥴𗁪",
    "GX": "qho̱ṃ¹.thi̱w²",
    "GHC": "khow¹.thew²",
    "explanationEN": "",
    "explanationCN": "空头"
  },
  {
    "word": "𗐪𗺹",
    "GX": "qhao̱ṃ².hi̱w¹",
    "GHC": "khjow².xew¹",
    "explanationEN": "",
    "explanationCN": "箜篌"
  },
  {
    "word": "𗀝𗀪",
    "GX": "rvwo̱r¹.lli̱²",
    "GHC": "wor¹.le²",
    "explanationEN": "",
    "explanationCN": "孔雀"
  },
  {
    "word": "𗐪𘓾",
    "GX": "qhao̱ṃ².yaṃ¹",
    "GHC": "khjow².ꞏjã¹",
    "explanationEN": "",
    "explanationCN": "孔𤥻"
  },
  {
    "word": "𗦜𗥸",
    "GX": "so².ŋwu̱²",
    "GHC": "sjo².ŋwu²",
    "explanationEN": "cry",
    "explanationCN": "哭泣"
  },
  {
    "word": "𗐪𗤛𘋅",
    "GX": "qhao̱ṃ².tśoṃ¹.sa̱ṃ¹",
    "GHC": "khjow².tśjow¹.sã¹",
    "explanationEN": "",
    "explanationCN": "宽中散"
  },
  {
    "word": "𗱞𗁪",
    "GX": "la̱ṃ¹.thi̱w²",
    "GHC": "lã¹.thew²",
    "explanationEN": "",
    "explanationCN": "栏头（官名）"
  },
  {
    "word": "𗕕𘇰",
    "GX": "phə̱¹.tśhiṃ¹",
    "GHC": "phə¹.tśhji¹",
    "explanationEN": "",
    "explanationCN": "老牙"
  },
  {
    "word": "𘝾𗁀𗦆",
    "GX": "li².qo̱¹.tsiṃ¹",
    "GHC": "lji².ko¹.tsjĩ¹",
    "explanationEN": "",
    "explanationCN": "李光近"
  },
  {
    "word": "𘝾𗁀",
    "GX": "li².qo̱¹",
    "GHC": "lji².ko¹",
    "explanationEN": "",
    "explanationCN": "李广"
  },
  {
    "word": "𘝾𗁀𘝿",
    "GX": "li².qo̱¹.li²",
    "GHC": "lji².ko¹.lji²",
    "explanationEN": "",
    "explanationCN": "李广利"
  },
  {
    "word": "𘝾𗂎",
    "GX": "li².tsheṃ²",
    "GHC": "lji².tshjɨj²",
    "explanationEN": "",
    "explanationCN": "李靖"
  },
  {
    "word": "𗉮𘃛",
    "GX": "tśhə².rar²",
    "GHC": "tśhjɨ².rjar²",
    "explanationEN": "immediately",
    "explanationCN": "立刻"
  },
  {
    "word": "𗃛𗣼𗋿",
    "GX": "loṃ¹.tśha².ryur¹",
    "GHC": "ljow¹.tśhja².ꞏjur¹",
    "explanationEN": "",
    "explanationCN": "梁德養"
  },
  {
    "word": "𗃛𗂧",
    "GX": "loṃ¹.lheh²",
    "GHC": "ljow¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "梁国"
  },
  {
    "word": "𗃛𗂧𘓖",
    "GX": "loṃ¹.lheh².qo̱ṃ¹",
    "GHC": "ljow¹.lhjịj².kow¹",
    "explanationEN": "",
    "explanationCN": "梁国公"
  },
  {
    "word": "𗃛𗥰𗏵",
    "GX": "loṃ¹.la².ma¹",
    "GHC": "ljow¹.lja².mja¹",
    "explanationEN": "",
    "explanationCN": "梁喇嘛"
  },
  {
    "word": "𗃛𗥰𗿦",
    "GX": "loṃ¹.la².ma¹",
    "GHC": "ljow¹.lja².mja¹",
    "explanationEN": "",
    "explanationCN": "梁喇嘛"
  },
  {
    "word": "𗃛𗤙𗎩𘞶",
    "GX": "loṃ¹.da̱².qaa̱¹.mphu̱²",
    "GHC": "ljow¹.da².kia¹.phu̱²",
    "explanationEN": "",
    "explanationCN": "梁老家茂"
  },
  {
    "word": "𗃛𗤙𗎩𗰔",
    "GX": "loṃ¹.da̱².qaa̱¹.yiw²",
    "GHC": "ljow¹.da².kia¹.ꞏjiw²",
    "explanationEN": "",
    "explanationCN": "梁老家有"
  },
  {
    "word": "𗃛𗹏𗘦𘞶",
    "GX": "loṃ¹.do̱ṃ¹.dźe¹.mphu̱²",
    "GHC": "ljow¹.dow¹.dźjij¹.phu̱²",
    "explanationEN": "",
    "explanationCN": "梁那征茂"
  },
  {
    "word": "𗃛𗕑𗌰",
    "GX": "loṃ¹.khə².pu̱h²",
    "GHC": "ljow¹.khjɨ².pụ²",
    "explanationEN": "",
    "explanationCN": "梁乞逋"
  },
  {
    "word": "𗃛𗸐𗍷",
    "GX": "loṃ¹.ryər².dzeṃ²",
    "GHC": "ljow¹.ꞏjɨr².dzjɨj²",
    "explanationEN": "",
    "explanationCN": "梁簽判"
  },
  {
    "word": "𗃛𗸐𘏨",
    "GX": "loṃ¹.ryər².lləh¹",
    "GHC": "ljow¹.ꞏjɨr².ljɨ̣¹",
    "explanationEN": "",
    "explanationCN": "梁勤寶"
  },
  {
    "word": "𗃛𘒂𘋨",
    "GX": "loṃ¹.haa̱¹.dzwə¹",
    "GHC": "ljow¹.xia¹.dzjwɨ¹",
    "explanationEN": "",
    "explanationCN": "梁孝王"
  },
  {
    "word": "𗃛𘒂𘟙",
    "GX": "loṃ¹.haa̱¹.ne²",
    "GHC": "ljow¹.xia¹.njij²",
    "explanationEN": "",
    "explanationCN": "梁效王"
  },
  {
    "word": "𗃛𗤩𗰹",
    "GX": "loṃ¹.γwaṃ¹.tso̱ṃ²",
    "GHC": "ljow¹.ɣjwã¹.tsow²",
    "explanationEN": "",
    "explanationCN": "梁元輔"
  },
  {
    "word": "𗙃𘁇𗂧",
    "GX": "liṃ¹.yə².lheh²",
    "GHC": "ljĩ¹.ꞏjɨ².lhjịj²",
    "explanationEN": "",
    "explanationCN": "林邑国"
  },
  {
    "word": "𗅋𗿳",
    "GX": "mi¹.dzeṃ¹",
    "GHC": "mji¹.dzjɨj¹",
    "explanationEN": "unexpectedly",
    "explanationCN": "临时"
  },
  {
    "word": "𗀄𘃰",
    "GX": "ŋwu̱².dzwi̱w¹",
    "GHC": "ŋwu².dzwew¹",
    "explanationEN": "",
    "explanationCN": "领襟"
  },
  {
    "word": "𗀄𘈢",
    "GX": "ŋwu̱².leṃh¹",
    "GHC": "ŋwu².ljɨ̣j¹",
    "explanationEN": "",
    "explanationCN": "领襟"
  },
  {
    "word": "𗂧𗵽",
    "GX": "lheh².nllu²",
    "GHC": "lhjịj².lju̱²",
    "explanationEN": "",
    "explanationCN": "领六"
  },
  {
    "word": "𗏖𗁍",
    "GX": "rer².bu¹",
    "GHC": "rjijr².bju¹",
    "explanationEN": "",
    "explanationCN": "领谋"
  },
  {
    "word": "𗓹𗁍",
    "GX": "lweh¹.bu¹",
    "GHC": "ljwịj¹.bju¹",
    "explanationEN": "",
    "explanationCN": "令部"
  },
  {
    "word": "𘛫𗁡",
    "GX": "liw¹.phi¹",
    "GHC": "ljiw¹.phji¹",
    "explanationEN": "",
    "explanationCN": "刘备"
  },
  {
    "word": "𗤁𗂧",
    "GX": "tśhiw¹.lheh²",
    "GHC": "tśhjiw¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "六国"
  },
  {
    "word": "𗥡𗂧",
    "GX": "lu̱².lheh²",
    "GHC": "lu².lhjịj²",
    "explanationEN": "",
    "explanationCN": "鲁国"
  },
  {
    "word": "𗀄𗵘",
    "GX": "ŋwu̱².tśa¹",
    "GHC": "ŋwu².tśja¹",
    "explanationEN": "",
    "explanationCN": "路径"
  },
  {
    "word": "𗰜𗴺",
    "GX": "rmə̱r².ma¹",
    "GHC": "mər².mja¹",
    "explanationEN": "",
    "explanationCN": "论"
  },
  {
    "word": "𗙴𗁍",
    "GX": "ra̱r¹.bu¹",
    "GHC": "rar¹.bju¹",
    "explanationEN": "",
    "explanationCN": "啰布"
  },
  {
    "word": "𗙴𗁍𗃞𗗿𗰔",
    "GX": "ra̱r¹.bu¹.qə̱¹.ta̱¹.yiw²",
    "GHC": "rar¹.bju¹.kə¹.ta¹.ꞏjiw²",
    "explanationEN": "",
    "explanationCN": "啰布小狗有"
  },
  {
    "word": "𗆶𗆯𗆢",
    "GX": "rar².tshə².qhwaə̱¹",
    "GHC": "rjar².tshjɨ².khiwə¹",
    "explanationEN": "",
    "explanationCN": "萝卜菜"
  },
  {
    "word": "𗓽𗁬",
    "GX": "lo̱¹.tho̱ṃ¹",
    "GHC": "lo¹.thow¹",
    "explanationEN": "",
    "explanationCN": "骆驼"
  },
  {
    "word": "𗁮𗗣𗔇",
    "GX": "tśhi¹.lwə̱².γu̱h²",
    "GHC": "tśhji¹.lwə².ꞏụ²",
    "explanationEN": "",
    "explanationCN": "买肉库"
  },
  {
    "word": "𗂽𗗣𗔇",
    "GX": "ye².lwə̱².γu̱h²",
    "GHC": "ꞏjij².lwə².ꞏụ²",
    "explanationEN": "",
    "explanationCN": "買羊庫"
  },
  {
    "word": "𗓚𗁪",
    "GX": "ma̱².thi̱w²",
    "GHC": "ma².thew²",
    "explanationEN": "",
    "explanationCN": "馒头"
  },
  {
    "word": "𗩩𗂎",
    "GX": "vaa̱ṃ².tsheṃ²",
    "GHC": "ꞏwiã².tshjɨj²",
    "explanationEN": "",
    "explanationCN": "曼倩"
  },
  {
    "word": "𘙊𘙊",
    "GX": "lwi̱h².lwi̱h²",
    "GHC": "lwe².lwe²",
    "explanationEN": "slowly",
    "explanationCN": "慢慢"
  },
  {
    "word": "𗾞𗾞",
    "GX": "nnə².nnə²",
    "GHC": "njɨ̱².njɨ̱²",
    "explanationEN": "everyday",
    "explanationCN": "每天"
  },
  {
    "word": "𗪨𗁀",
    "GX": "mae̱².qo̱¹",
    "GHC": "miej².ko¹",
    "explanationEN": "",
    "explanationCN": "孟光"
  },
  {
    "word": "𗳣𗁬𗸹",
    "GX": "mbi².tho̱ṃ¹.sə²",
    "GHC": "bji̱².thow¹.sjɨ²",
    "explanationEN": "",
    "explanationCN": "蜜陀僧"
  },
  {
    "word": "𗁍𗍗",
    "GX": "bu¹.vwi̱²",
    "GHC": "bju¹.we²",
    "explanationEN": "",
    "explanationCN": "谋卫"
  },
  {
    "word": "𗁍𗤹",
    "GX": "bu¹.γu¹",
    "GHC": "bju¹.ɣju¹",
    "explanationEN": "",
    "explanationCN": "谋药"
  },
  {
    "word": "𗑗𘓐𗀧𗠖",
    "GX": "se̱¹.dzwo².nde².rγa̱r¹",
    "GHC": "sej¹.dzjwo².dji̱j².ɣar¹",
    "explanationEN": "",
    "explanationCN": "谋智清人"
  },
  {
    "word": "𗓰𗂓",
    "GX": "na̱¹.ti̱w¹",
    "GHC": "na¹.tew¹",
    "explanationEN": "",
    "explanationCN": "南斗"
  },
  {
    "word": "𗑛𗂧",
    "GX": "rzər¹.lheh²",
    "GHC": "zjɨr¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "南国"
  },
  {
    "word": "𘀍𗣊",
    "GX": "na².mi²",
    "GHC": "nja².mji²",
    "explanationEN": "you.PL",
    "explanationCN": "你们"
  },
  {
    "word": "𘀍𘉑",
    "GX": "na².mə¹",
    "GHC": "nja².mjɨ¹",
    "explanationEN": "you.PL",
    "explanationCN": "你们"
  },
  {
    "word": "𗆭𗪙𗎥",
    "GX": "dźiw¹.rmu̱r¹.mmi¹",
    "GHC": "dźjiw¹.mur¹.mji̱¹",
    "explanationEN": "",
    "explanationCN": "纽莽名"
  },
  {
    "word": "𗓗𗂧",
    "GX": "ndźu².lheh²",
    "GHC": "dźju̱².lhjịj²",
    "explanationEN": "",
    "explanationCN": "女国"
  },
  {
    "word": "𗢪𗁪𗊄𘂆",
    "GX": "pi¹.thi̱w².teṃ¹.tsə¹",
    "GHC": "pji¹.thew².tjɨj¹.tsjɨ¹",
    "explanationEN": "",
    "explanationCN": "辔头钉子"
  },
  {
    "word": "𗃊𗿆𗒵",
    "GX": "pho̱¹.śe¹.qwa̱¹",
    "GHC": "pho¹.śjij¹.kwa¹",
    "explanationEN": "",
    "explanationCN": "盆成括（人名）"
  },
  {
    "word": "𗩙𗀇𗖋",
    "GX": "phu̱¹.goṃ¹.swə²",
    "GHC": "phu¹.gjow¹.sjwɨ²",
    "explanationEN": "",
    "explanationCN": "蓬莪术"
  },
  {
    "word": "𗩙𗀇𗖶",
    "GX": "phu̱¹.goṃ¹.swə¹",
    "GHC": "phu¹.gjow¹.sjwɨ¹",
    "explanationEN": "",
    "explanationCN": "蓬莪术"
  },
  {
    "word": "𗁡𘜻",
    "GX": "phi¹.phaa̱¹",
    "GHC": "phji¹.phia¹",
    "explanationEN": "",
    "explanationCN": "琵琶"
  },
  {
    "word": "𘄿𗁪",
    "GX": "te¹.thi̱w²",
    "GHC": "tjij¹.thew²",
    "explanationEN": "",
    "explanationCN": "品度"
  },
  {
    "word": "𗂤𘅌",
    "GX": "baa̱².bu¹",
    "GHC": "bia².bju¹",
    "explanationEN": "",
    "explanationCN": "匍匐"
  },
  {
    "word": "𗀱𗼽",
    "GX": "phao̱².si̱w²",
    "GHC": "phio².sew²",
    "explanationEN": "",
    "explanationCN": "朴消"
  },
  {
    "word": "𘄴𗂧",
    "GX": "tshi¹.lheh²",
    "GHC": "tshji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "齐国"
  },
  {
    "word": "𘅳𗂧",
    "GX": "tshi¹.lheh²",
    "GHC": "tshji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "齐国"
  },
  {
    "word": "𗣆𗁍",
    "GX": "tsha².bu¹",
    "GHC": "tshja².bju¹",
    "explanationEN": "",
    "explanationCN": "千谋"
  },
  {
    "word": "𗐪𗦱",
    "GX": "qhao̱ṃ².hwa̱¹",
    "GHC": "khjow².xwa¹",
    "explanationEN": "",
    "explanationCN": "羌活"
  },
  {
    "word": "𗣭𗂧",
    "GX": "tshiṃ¹.lheh²",
    "GHC": "tshji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "秦国"
  },
  {
    "word": "𗌹𗀝",
    "GX": "rner¹.rvwo̱r¹",
    "GHC": "njijr¹.wor¹",
    "explanationEN": "",
    "explanationCN": "禽兽"
  },
  {
    "word": "𗂎𗁡",
    "GX": "tsheṃ².phi¹",
    "GHC": "tshjɨj².phji¹",
    "explanationEN": "",
    "explanationCN": "青皮"
  },
  {
    "word": "𗂎𗟻",
    "GX": "tsheṃ².phi¹",
    "GHC": "tshjɨj².phji¹",
    "explanationEN": "",
    "explanationCN": "青皮"
  },
  {
    "word": "𗂎𘁂",
    "GX": "tsheṃ².ya²",
    "GHC": "tshjɨj².ꞏja²",
    "explanationEN": "",
    "explanationCN": "青盐"
  },
  {
    "word": "𗂎𘓾",
    "GX": "tsheṃ².yaṃ¹",
    "GHC": "tshjɨj².ꞏjã¹",
    "explanationEN": "",
    "explanationCN": "青盐"
  },
  {
    "word": "𗂎𗭯",
    "GX": "tsheṃ².yoṃ¹",
    "GHC": "tshjɨj².ꞏjow¹",
    "explanationEN": "",
    "explanationCN": "青羊"
  },
  {
    "word": "𗂎𗉔",
    "GX": "tsheṃ².tśiw¹",
    "GHC": "tshjɨj².tśjiw¹",
    "explanationEN": "",
    "explanationCN": "青州"
  },
  {
    "word": "𗂎𗉔𗵸",
    "GX": "tsheṃ².tśiw¹.he¹",
    "GHC": "tshjɨj².tśjiw¹.xjij¹",
    "explanationEN": "",
    "explanationCN": "青州蝎"
  },
  {
    "word": "𗂎𗨍",
    "GX": "tsheṃ².hwaa̱¹",
    "GHC": "tshjɨj².xiwa¹",
    "explanationEN": "",
    "explanationCN": "清发"
  },
  {
    "word": "𗂎𘙾",
    "GX": "tsheṃ².ho̱ṃ¹",
    "GHC": "tshjɨj².xow¹",
    "explanationEN": "",
    "explanationCN": "清河"
  },
  {
    "word": "𘛴𗤂",
    "GX": "ŋġu̱¹.di²",
    "GHC": "gu̱¹.dji²",
    "explanationEN": "dispel",
    "explanationCN": "祛除"
  },
  {
    "word": "𘕺𗁪",
    "GX": "gu¹.thi̱w²",
    "GHC": "gju¹.thew²",
    "explanationEN": "",
    "explanationCN": "渠头（官名）"
  },
  {
    "word": "𗑔𗅐",
    "GX": "mə̱².la̱²",
    "GHC": "mə².la²",
    "explanationEN": "indeed",
    "explanationCN": "确实"
  },
  {
    "word": "𗸯𘟠",
    "GX": "dźwu¹.dzu̱¹",
    "GHC": "dźjwu¹.dzu¹",
    "explanationEN": "",
    "explanationCN": "仁爱"
  },
  {
    "word": "𗱡𗁪𗴼",
    "GX": "źwu².thi̱w².khiw²",
    "GHC": "źjwu².thew².khjiw²",
    "explanationEN": "",
    "explanationCN": "肉豆蔻"
  },
  {
    "word": "𗱡𗁪𗽭",
    "GX": "źwu².thi̱w².qhi̱w²",
    "GHC": "źjwu².thew².khew²",
    "explanationEN": "",
    "explanationCN": "肉豆蔻"
  },
  {
    "word": "𗋾𗁪",
    "GX": "źu².thi̱w²",
    "GHC": "źju².thew²",
    "explanationEN": "",
    "explanationCN": "乳头（食品）"
  },
  {
    "word": "𘋻𗁪",
    "GX": "źu².thi̱w²",
    "GHC": "źju².thew²",
    "explanationEN": "",
    "explanationCN": "乳头（食品）"
  },
  {
    "word": "𘋅𗥻𗁡",
    "GX": "sa̱ṃ¹.phai̱¹.phi¹",
    "GHC": "sã¹.phie¹.phji¹",
    "explanationEN": "",
    "explanationCN": "桑白皮"
  },
  {
    "word": "𘔏𗃞𗘄",
    "GX": "bi̱h¹.qə̱¹.ta̱¹",
    "GHC": "bẹ¹.kə¹.ta¹",
    "explanationEN": "sand.dog(mole.cricket)",
    "explanationCN": "沙.狗(蝼蛄)"
  },
  {
    "word": "𗀰𗀰",
    "GX": "lhəh¹.lhəh¹",
    "GHC": "lhjɨ̣¹.lhjɨ̣¹",
    "explanationEN": "",
    "explanationCN": "闪闪"
  },
  {
    "word": "𗠒𗹭",
    "GX": "bə¹.be²",
    "GHC": "bjɨ¹.bjij²",
    "explanationEN": "above",
    "explanationCN": "上面"
  },
  {
    "word": "𗨁𗂧𗥍",
    "GX": "phu².lheh².guh²",
    "GHC": "phju².lhjịj².gjụ²",
    "explanationEN": "",
    "explanationCN": "上柱国"
  },
  {
    "word": "𘞐𗙼𘌜𗁡𗙢",
    "GX": "nśu¹.yu².pai̱¹.phi¹.vwa̱ṃ²",
    "GHC": "śju̱¹.ꞏju².pie¹.phji¹.wã²",
    "explanationEN": "",
    "explanationCN": "芍药檗皮丸"
  },
  {
    "word": "𗨝𘊴𗁀",
    "GX": "śiṃ¹.thu̱¹.qo̱¹",
    "GHC": "śjĩ¹.thu¹.ko¹",
    "explanationEN": "",
    "explanationCN": "申屠刚"
  },
  {
    "word": "𗃇𘔝𘔝",
    "GX": "la¹.ne².ne²",
    "GHC": "lja¹.njij².njij²",
    "explanationEN": "",
    "explanationCN": "深深藏、逃之夭夭"
  },
  {
    "word": "𘓂𘙌",
    "GX": "ləh¹.kə¹",
    "GHC": "ljɨ̣¹.kjɨ¹",
    "explanationEN": "what;who;which",
    "explanationCN": "什么；谁；哪个"
  },
  {
    "word": "𘕣𗍊",
    "GX": "vwa̱².su²",
    "GHC": "wa².sju²",
    "explanationEN": "what kind",
    "explanationCN": "什么样"
  },
  {
    "word": "𘄽𘄽",
    "GX": "ŋa̱h².ŋa̱h²",
    "GHC": "ŋạ².ŋạ²",
    "explanationEN": "really;very;well",
    "explanationCN": "甚"
  },
  {
    "word": "𗻼𗁀",
    "GX": "ṣae̱ṃ¹.qo̱¹",
    "GHC": "śiəj¹.ko¹",
    "explanationEN": "",
    "explanationCN": "生姜"
  },
  {
    "word": "𗿍𗀝",
    "GX": "śaw¹.rvwo̱r¹",
    "GHC": "śja̱¹.wor¹",
    "explanationEN": "",
    "explanationCN": "鸤鸠"
  },
  {
    "word": "𘆅𗹛",
    "GX": "qa̱².tśe²",
    "GHC": "ka².tśjij²",
    "explanationEN": "",
    "explanationCN": "狮子"
  },
  {
    "word": "𘆅𗹛𗎭",
    "GX": "qa̱².tśe².mmi¹",
    "GHC": "ka².tśjij².mji̱¹",
    "explanationEN": "",
    "explanationCN": "狮子宫"
  },
  {
    "word": "𘆅𗹛𗦖𗎭",
    "GX": "qa̱².tśe².rmer².mmi¹",
    "GHC": "ka².tśjij².mjijr².mji̱¹",
    "explanationEN": "",
    "explanationCN": "狮子星宫"
  },
  {
    "word": "𗰗𗍫𗎭",
    "GX": "γa̱h².nnə¹.mmi¹",
    "GHC": "ɣạ².njɨ̱¹.mji̱¹",
    "explanationEN": "",
    "explanationCN": "十二宫"
  },
  {
    "word": "𗫍𗁪",
    "GX": "śi¹.thi̱w²",
    "GHC": "śji¹.thew²",
    "explanationEN": "",
    "explanationCN": "食窦"
  },
  {
    "word": "𗁅𗁂",
    "GX": "lla̱h¹.dziw²",
    "GHC": "lạ¹.dzjiw²",
    "explanationEN": "",
    "explanationCN": "手铐"
  },
  {
    "word": "𗁅𘃎",
    "GX": "lla̱h¹.pah¹",
    "GHC": "lạ¹.pjạ¹",
    "explanationEN": "",
    "explanationCN": "手掌"
  },
  {
    "word": "𗱭𗁪",
    "GX": "śiw².thi̱w²",
    "GHC": "śjiw².thew²",
    "explanationEN": "",
    "explanationCN": "兽头"
  },
  {
    "word": "𗱭𗁪𘞄𘂆",
    "GX": "śiw².thi̱w².nlə¹.tsə¹",
    "GHC": "śjiw².thew².ljɨ̱¹.tsjɨ¹",
    "explanationEN": "",
    "explanationCN": "兽头旗子（法器）"
  },
  {
    "word": "𘋺𗂧",
    "GX": "ṣuo¹.lheh²",
    "GHC": "śio̱w¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "蜀国"
  },
  {
    "word": "𘜲𗂧",
    "GX": "śu¹.lheh²",
    "GHC": "śju¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "蜀国"
  },
  {
    "word": "𗀁𗡕",
    "GX": "sa̱².nu²",
    "GHC": "sa.nju²",
    "explanationEN": "",
    "explanationCN": "吮吸"
  },
  {
    "word": "𗀚𗼵𗢩𘊴𘏸",
    "GX": "ṣao̱¹.hao̱².tsa¹.thu̱¹.ṣaə̱¹",
    "GHC": "śio¹.xjow².tsja¹.thu¹.śiə¹",
    "explanationEN": "",
    "explanationCN": "朔方节度使"
  },
  {
    "word": "𗥃𗂧",
    "GX": "rllər¹.lheh²",
    "GHC": "ljɨr¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "四国"
  },
  {
    "word": "𗐾𗁀",
    "GX": "swi̱ṃ¹.qo̱¹",
    "GHC": "swẽ¹.ko¹",
    "explanationEN": "",
    "explanationCN": "宋光"
  },
  {
    "word": "𗐾𗂧",
    "GX": "swi̱ṃ¹.lheh²",
    "GHC": "swẽ¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "宋国"
  },
  {
    "word": "𗫐𗂧",
    "GX": "su̱¹.lheh²",
    "GHC": "su¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "苏国"
  },
  {
    "word": "𗉢𗉔",
    "GX": "śwa¹.tśiw¹",
    "GHC": "śjwa¹.tśjiw¹",
    "explanationEN": "",
    "explanationCN": "绥州"
  },
  {
    "word": "𘏽𗂧",
    "GX": "swi¹.lheh²",
    "GHC": "sjwi¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "隋国"
  },
  {
    "word": "𗀹𗼷𗿦",
    "GX": "zi¹.γa̱¹.ma¹",
    "GHC": "zji¹.ɣa¹.mja¹",
    "explanationEN": "",
    "explanationCN": "碎媳妇（人名）"
  },
  {
    "word": "𗁁𗁁",
    "GX": "ve².ve²",
    "GHC": "wjij².wjij²",
    "explanationEN": "",
    "explanationCN": "所有"
  },
  {
    "word": "𗳱𗐱",
    "GX": "tha².ni²",
    "GHC": "thja².nji²",
    "explanationEN": "they(anaphoric)",
    "explanationCN": "他们(回指)"
  },
  {
    "word": "𗕔𘌜",
    "GX": "the̱¹.pai̱¹",
    "GHC": "thej¹.pie¹",
    "explanationEN": "",
    "explanationCN": "太伯"
  },
  {
    "word": "𗕔𘓖",
    "GX": "the̱¹.qo̱ṃ¹",
    "GHC": "thej¹.kow¹",
    "explanationEN": "",
    "explanationCN": "太公"
  },
  {
    "word": "𗕔𘏸",
    "GX": "the̱¹.ṣaə̱¹",
    "GHC": "thej¹.śiə¹",
    "explanationEN": "",
    "explanationCN": "太史/太师"
  },
  {
    "word": "𗕔𘏸𘓖",
    "GX": "the̱¹.ṣaə̱¹.qo̱ṃ¹",
    "GHC": "thej¹.śiə¹.kow¹",
    "explanationEN": "",
    "explanationCN": "太史公"
  },
  {
    "word": "𗕔𘏸𘟀",
    "GX": "the̱¹.ṣaə̱¹.le²",
    "GHC": "thej¹.śiə¹.ljij²",
    "explanationEN": "",
    "explanationCN": "太史令"
  },
  {
    "word": "𗁬𘋨",
    "GX": "tho̱ṃ¹.dzwə¹",
    "GHC": "thow¹.dzjwɨ¹",
    "explanationEN": "",
    "explanationCN": "汤帝"
  },
  {
    "word": "𗁬𗤀",
    "GX": "tho̱ṃ¹.śe¹",
    "GHC": "thow¹.śjij¹",
    "explanationEN": "",
    "explanationCN": "唐朝"
  },
  {
    "word": "𗁬𗱈",
    "GX": "tho̱ṃ¹.lli̱²",
    "GHC": "thow¹.le²",
    "explanationEN": "",
    "explanationCN": "唐勒"
  },
  {
    "word": "𗁬𘛻",
    "GX": "tho̱ṃ¹.ndi¹",
    "GHC": "thow¹.dji̱¹",
    "explanationEN": "",
    "explanationCN": "唐呢"
  },
  {
    "word": "𗁬𘋺𗘼",
    "GX": "tho̱ṃ¹.ṣuo¹.ŋgu¹",
    "GHC": "thow¹.śio̱w¹.gju̱¹",
    "explanationEN": "",
    "explanationCN": "唐叔虞"
  },
  {
    "word": "𗁬𗕔𗜰",
    "GX": "tho̱ṃ¹.the̱¹.tsu̱ṃ¹",
    "GHC": "thow¹.thej¹.tsũ¹",
    "explanationEN": "",
    "explanationCN": "唐太宗"
  },
  {
    "word": "𗁬𗠚𗥣",
    "GX": "tho̱ṃ¹.thae̱h².tsu̱²",
    "GHC": "thow¹.thẹj².tsu²",
    "explanationEN": "",
    "explanationCN": "唐太祖"
  },
  {
    "word": "𗁬𗕜",
    "GX": "tho̱ṃ¹.vwa̱²",
    "GHC": "thow¹.wa¹",
    "explanationEN": "",
    "explanationCN": "唐瓦"
  },
  {
    "word": "𗁬𘝗",
    "GX": "tho̱ṃ¹.yiw¹",
    "GHC": "thow¹.ꞏjiw¹",
    "explanationEN": "",
    "explanationCN": "唐尧"
  },
  {
    "word": "𗂖𗩚𘋯",
    "GX": "rbo̱ṃr¹.dau̱¹.yeṃ²",
    "GHC": "bowr¹.du¹.ꞏjɨj²",
    "explanationEN": "",
    "explanationCN": "套袋"
  },
  {
    "word": "𗂖𗩚𘋯𗍅",
    "GX": "rbo̱ṃr¹.dau̱¹.yeṃ².rkər¹",
    "GHC": "bowr¹.du¹.ꞏjɨj².kjɨ̱r¹",
    "explanationEN": "",
    "explanationCN": "套袋匠"
  },
  {
    "word": "𘓷𗙀𗅲𗯿𗂧𗴴",
    "GX": "rqwə̱r¹.mbu².teṃh².rvwe̱r¹.lheh².re̱r²",
    "GHC": "kwər¹.bju̱².tjɨ̣j².wejr¹.lhjịj².lhejr²",
    "explanationEN": "",
    "explanationCN": "天赐礼盛国庆"
  },
  {
    "word": "𘄱𗁬",
    "GX": "theṃ¹.tho̱ṃ¹",
    "GHC": "thjɨj¹.thow¹",
    "explanationEN": "",
    "explanationCN": "天堂"
  },
  {
    "word": "𘓺𗫸𗁣𘇚",
    "GX": "rŋwə̱r¹.yih².dzə¹.mmi²",
    "GHC": "ŋwər¹.ꞏjị².dzjɨ¹.mji̱²",
    "explanationEN": "",
    "explanationCN": "天仪治平"
  },
  {
    "word": "𗁬𗦺",
    "GX": "tho̱ṃ¹.pha̱ṃ¹",
    "GHC": "thow¹.phã¹",
    "explanationEN": "",
    "explanationCN": "通判"
  },
  {
    "word": "𗁬𗶃",
    "GX": "tho̱ṃ¹.tśi²",
    "GHC": "thow¹.tśji²",
    "explanationEN": "",
    "explanationCN": "同知"
  },
  {
    "word": "𗁬𗂎",
    "GX": "tho̱ṃ¹.tsheṃ²",
    "GHC": "thow¹.tshjɨj²",
    "explanationEN": "",
    "explanationCN": "铜青"
  },
  {
    "word": "𗁬𗘊",
    "GX": "tho̱ṃ¹.tshwu²",
    "GHC": "thow¹.tshjwu²",
    "explanationEN": "",
    "explanationCN": "铜雀"
  },
  {
    "word": "𗁬𗘊𗒪",
    "GX": "tho̱ṃ¹.tshwu².vwa̱h²",
    "GHC": "thow¹.tshjwu².wạ²",
    "explanationEN": "",
    "explanationCN": "铜雀台"
  },
  {
    "word": "𗁬𗘊𗔕",
    "GX": "tho̱ṃ¹.tshwu².rnir²",
    "GHC": "thow¹.tshjwu².njir²",
    "explanationEN": "",
    "explanationCN": "铜雀台"
  },
  {
    "word": "𗁬𘍑",
    "GX": "tho̱ṃ¹.leṃ¹",
    "GHC": "thow¹.ljɨj¹",
    "explanationEN": "",
    "explanationCN": "统领（官名）"
  },
  {
    "word": "𗁪𘍑",
    "GX": "thi̱w².leṃ¹",
    "GHC": "thew².ljɨj¹",
    "explanationEN": "",
    "explanationCN": "头领（官名）"
  },
  {
    "word": "𗀄𗏇",
    "GX": "ŋwu̱².di²",
    "GHC": "ŋwu².dji²",
    "explanationEN": "",
    "explanationCN": "头子"
  },
  {
    "word": "𗁬𘛫",
    "GX": "tho̱ṃ¹.liw¹",
    "GHC": "thow¹.ljiw¹",
    "explanationEN": "",
    "explanationCN": "屯留"
  },
  {
    "word": "𗁅𗚖",
    "GX": "lla̱h¹.lhoṃ²",
    "GHC": "lạ¹.lhjo̱r¹",
    "explanationEN": "",
    "explanationCN": "庹"
  },
  {
    "word": "𗁠𘞽",
    "GX": "vwo̱ṃ².zəh¹",
    "GHC": "wow².zjɨ̣¹",
    "explanationEN": "",
    "explanationCN": "王母"
  },
  {
    "word": "𗁠𘞽𗴺𘖖𗤛",
    "GX": "vwo̱ṃ².zəh¹.ma¹.mə¹.tśoṃ¹",
    "GHC": "wow².zjɨ̣¹.mja¹.mjɨ¹.tśjow¹",
    "explanationEN": "",
    "explanationCN": "王母娘娘庙"
  },
  {
    "word": "𗔬𗂧",
    "GX": "vwi̱².lheh²",
    "GHC": "we².lhjịj²",
    "explanationEN": "",
    "explanationCN": "卫/魏国"
  },
  {
    "word": "𘃣𗂧",
    "GX": "vi².lheh²",
    "GHC": "wji².lhjịj²",
    "explanationEN": "",
    "explanationCN": "卫/魏国"
  },
  {
    "word": "𗔬𘓖𘝾𗂎",
    "GX": "vwi̱².qo̱ṃ¹.li².tsheṃ²",
    "GHC": "we².kow¹.lji².tshjɨj²",
    "explanationEN": "",
    "explanationCN": "卫公李靖"
  },
  {
    "word": "𗍗𗂧",
    "GX": "vwi̱².lheh²",
    "GHC": "we².lhjịj²",
    "explanationEN": "",
    "explanationCN": "卫国"
  },
  {
    "word": "𘕣𘔼",
    "GX": "vwa̱².nuo¹",
    "GHC": "wa².nio̱w¹",
    "explanationEN": "why(cause)",
    "explanationCN": "为什么(原因）"
  },
  {
    "word": "𗩇𗁬",
    "GX": "vwi̱ṃ¹.tho̱ṃ¹",
    "GHC": "wẽ¹.thow¹",
    "explanationEN": "",
    "explanationCN": "文通"
  },
  {
    "word": "𗧦𘉑",
    "GX": "gə².mə¹",
    "GHC": "gjɨ².mjɨ¹",
    "explanationEN": "we.two(exclusive)",
    "explanationCN": "我俩(排除式)"
  },
  {
    "word": "𗧦𗣊",
    "GX": "gə².mi²",
    "GHC": "gjɨ².mji²",
    "explanationEN": "we(exclusive)",
    "explanationCN": "我们(排除式)"
  },
  {
    "word": "𘅰𗒯𗂧",
    "GX": "γu̱¹.khi¹.lheh²",
    "GHC": "ɣu¹.khji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "乌耆国"
  },
  {
    "word": "𘅰𗂧",
    "GX": "γu̱¹.lheh²",
    "GHC": "ɣu¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "吴国"
  },
  {
    "word": "𘈫𘔺𗟦𗂧",
    "GX": "γu̱².khi².ma̱ṃ¹.lheh²",
    "GHC": "ꞏu².khji².mã¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "五溪蛮国"
  },
  {
    "word": "𗋙𗁍",
    "GX": "və².bu¹",
    "GHC": "wjɨ².bju¹",
    "explanationEN": "",
    "explanationCN": "勿布"
  },
  {
    "word": "𗋙𗁍𗘂𗫉",
    "GX": "və².bu¹.khwə¹.mbae̱¹",
    "GHC": "wjɨ².bju¹.khjwɨ¹.bie̱j¹",
    "explanationEN": "",
    "explanationCN": "勿布犬乐"
  },
  {
    "word": "𘈫𗁀",
    "GX": "γu̱².qo̱¹",
    "GHC": "ꞏu².ko¹",
    "explanationEN": "",
    "explanationCN": "务光"
  },
  {
    "word": "𗂰𗏣𘟙𗣫",
    "GX": "li².rer².ne².tse̱ṃ¹",
    "GHC": "lji².rjijr².njij².tsəj¹",
    "explanationEN": "",
    "explanationCN": "西伯"
  },
  {
    "word": "𗂰𗂧",
    "GX": "li².lheh²",
    "GHC": "lji².lhjịj²",
    "explanationEN": "",
    "explanationCN": "西国（西域）"
  },
  {
    "word": "𗂰𗗚",
    "GX": "li².ŋao̱ṃ²",
    "GHC": "lji².ŋjow²",
    "explanationEN": "",
    "explanationCN": "西海"
  },
  {
    "word": "𗂰𗦆𗤀",
    "GX": "li².tsiṃ¹.śe¹",
    "GHC": "lji².tsjĩ¹.śjij¹",
    "explanationEN": "",
    "explanationCN": "西晋朝"
  },
  {
    "word": "𗂰𘊐𗤡",
    "GX": "li².ke¹.ŋgi¹",
    "GHC": "lji².kjij¹.gji̱¹",
    "explanationEN": "",
    "explanationCN": "西京尹"
  },
  {
    "word": "𗂰𗝢𘑗",
    "GX": "li².la̱ṃ¹.rŋə̱r¹",
    "GHC": "lji².lã¹.ŋər¹",
    "explanationEN": "",
    "explanationCN": "西兰山"
  },
  {
    "word": "𗂰𗪇𗎭",
    "GX": "li².bu̱¹.mmi¹",
    "GHC": "lji².bu¹.mji̱¹",
    "explanationEN": "",
    "explanationCN": "西沒宮"
  },
  {
    "word": "𗂰𗪚",
    "GX": "li².dau̱¹",
    "GHC": "lji².du¹",
    "explanationEN": "",
    "explanationCN": "西宁"
  },
  {
    "word": "𗂰𗭮",
    "GX": "li².źoṃ¹",
    "GHC": "lji².źjow¹",
    "explanationEN": "",
    "explanationCN": "西戎"
  },
  {
    "word": "𗂰𗹦",
    "GX": "li².mə̱¹",
    "GHC": "lji².mə¹",
    "explanationEN": "",
    "explanationCN": "西天"
  },
  {
    "word": "𗂰𗹦𗂧",
    "GX": "li².mə̱¹.lheh²",
    "GHC": "lji².mə¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "西天国（天竺）"
  },
  {
    "word": "𗜫𗇊𗂧",
    "GX": "si¹.the².lheh²",
    "GHC": "sji¹.thjij².lhjịj²",
    "explanationEN": "",
    "explanationCN": "西天国（天竺）"
  },
  {
    "word": "𗂰𗔬𗤀",
    "GX": "li².vwi̱².śe¹",
    "GHC": "lji².we².śjij¹",
    "explanationEN": "",
    "explanationCN": "西魏朝"
  },
  {
    "word": "𗂰𘍞",
    "GX": "li².γao̱h¹",
    "GHC": "lji².iọ¹",
    "explanationEN": "",
    "explanationCN": "西院（十二监军司之一）"
  },
  {
    "word": "𗂰𘍞𗍁𗅂",
    "GX": "li².γao̱h¹.vwi̱².rar¹",
    "GHC": "lji².iọ¹.we².rjar¹",
    "explanationEN": "",
    "explanationCN": "西院城司（下等司）"
  },
  {
    "word": "𗂰𘍞𘊐𗶃𗬐",
    "GX": "li².γao̱h¹.ke¹.tśi².sə̱¹",
    "GHC": "lji².iọ¹.kjij¹.tśji².sə¹",
    "explanationEN": "",
    "explanationCN": "西院经治司"
  },
  {
    "word": "𗂰𘍞𘟙",
    "GX": "li².γao̱h¹.ne²",
    "GHC": "lji².iọ¹.njij²",
    "explanationEN": "",
    "explanationCN": "西院王"
  },
  {
    "word": "𗂰𘑗",
    "GX": "li².rŋə̱r¹",
    "GHC": "lji².ŋər¹",
    "explanationEN": "",
    "explanationCN": "西岳"
  },
  {
    "word": "𗜫𗉔",
    "GX": "si¹.tśiw¹",
    "GHC": "sji¹.tśjiw¹",
    "explanationEN": "",
    "explanationCN": "西周"
  },
  {
    "word": "𗜫𗉔𗂧",
    "GX": "si¹.tśiw¹.lheh²",
    "GHC": "sji¹.tśjiw¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "西周国"
  },
  {
    "word": "𗩿𗂧",
    "GX": "si².lheh²",
    "GHC": "sji².lhjịj²",
    "explanationEN": "",
    "explanationCN": "息国"
  },
  {
    "word": "𗐭𗐭",
    "GX": "śwa¹.śwa¹",
    "GHC": "śjwa¹.śjwa¹",
    "explanationEN": "",
    "explanationCN": "翕翕"
  },
  {
    "word": "𗩿𗁍",
    "GX": "si².bu¹",
    "GHC": "sji².bju¹",
    "explanationEN": "",
    "explanationCN": "细布"
  },
  {
    "word": "𗩿𗁍𗫔𗫉",
    "GX": "si².bu¹.yi¹.mbae̱¹",
    "GHC": "sji².bju¹.ꞏji¹.bie̱j¹",
    "explanationEN": "",
    "explanationCN": "细布众乐"
  },
  {
    "word": "𗠡𗤢",
    "GX": "bə¹.bi²",
    "GHC": "bjɨ¹.bji̱²",
    "explanationEN": "below",
    "explanationCN": "下面"
  },
  {
    "word": "𘒂𗉔",
    "GX": "haa̱¹.tśiw¹",
    "GHC": "xia¹.tśjiw¹",
    "explanationEN": "",
    "explanationCN": "夏州"
  },
  {
    "word": "𘇹𗁀𘂆",
    "GX": "ṣaə̱¹.qo̱¹.tsə¹",
    "GHC": "śiə¹.ko¹.tsjɨ¹",
    "explanationEN": "",
    "explanationCN": "线果子"
  },
  {
    "word": "𗃞𗗿𗄽",
    "GX": "qə̱¹.ta̱¹.ṣaa̱ṃ¹",
    "GHC": "kə¹.ta¹.śiã¹",
    "explanationEN": "",
    "explanationCN": "小狗山"
  },
  {
    "word": "𘓊𗀐",
    "GX": "rzər¹.dźe¹",
    "GHC": "zjɨ̱r¹.dźjij¹",
    "explanationEN": "",
    "explanationCN": "小寒"
  },
  {
    "word": "𘗠𗘩𗀹",
    "GX": "γa̱¹.rnə̱r².zi¹",
    "GHC": "ɣa¹.nər².zji¹",
    "explanationEN": "",
    "explanationCN": "小黄门（官名）"
  },
  {
    "word": "𗆧𗰖",
    "GX": "siw¹.nṣao¹",
    "GHC": "sjiw¹.śjo̱¹",
    "explanationEN": "",
    "explanationCN": "新集"
  },
  {
    "word": "𗆧𗹢",
    "GX": "siw¹.doh²",
    "GHC": "sjiw¹.djọ²",
    "explanationEN": "",
    "explanationCN": "新修"
  },
  {
    "word": "𗀚𗭹",
    "GX": "ṣao̱¹.rba̱r¹",
    "GHC": "śio¹.bar¹",
    "explanationEN": "",
    "explanationCN": "行头鼓"
  },
  {
    "word": "𗺁𗁪𘝻",
    "GX": "hae̱ṃ².thi̱w².qwo̱¹",
    "GHC": "xiəj².thew².kwo¹",
    "explanationEN": "",
    "explanationCN": "行头鼓"
  },
  {
    "word": "𗼵𗥝𗂧",
    "GX": "hao̱².ndu̱¹.lheh²",
    "GHC": "xjow².du̱¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "匈奴国"
  },
  {
    "word": "𗾩𗁪",
    "GX": "hwaṃ¹.thi̱w²",
    "GHC": "xjwã¹.thew²",
    "explanationEN": "",
    "explanationCN": "楦头"
  },
  {
    "word": "𘏧𗁬",
    "GX": "yaw².tho̱ṃ¹",
    "GHC": "ꞏja̱².thow¹",
    "explanationEN": "",
    "explanationCN": "衙堂"
  },
  {
    "word": "𗁳𘃎𗋒",
    "GX": "yaw².pah¹.keh¹",
    "GHC": "ꞏja̱².pjạ¹.kjịj¹",
    "explanationEN": "",
    "explanationCN": "啞巴經（人名）"
  },
  {
    "word": "𗶕𗂧",
    "GX": "yaṃ².lheh²",
    "GHC": "ꞏjã².lhjịj²",
    "explanationEN": "",
    "explanationCN": "燕国"
  },
  {
    "word": "𘓾𗂧",
    "GX": "yaṃ¹.lheh²",
    "GHC": "ꞏjã¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "燕国"
  },
  {
    "word": "𗭴𗁀",
    "GX": "yoṃ¹.qo̱¹",
    "GHC": "ꞏjow¹.ko¹",
    "explanationEN": "",
    "explanationCN": "阳刚"
  },
  {
    "word": "𗂘𗄿",
    "GX": "rker².llu̱h²",
    "GHC": "kji̱r².lụ²",
    "explanationEN": "",
    "explanationCN": "阳萎"
  },
  {
    "word": "𘁂𘀄𗂧𘘚𗤛",
    "GX": "ya².ŋgu².lheh².ndze².tśoṃ¹",
    "GHC": "ꞏja².gju̱².lhjịj².dzji̱j².tśjow¹",
    "explanationEN": "",
    "explanationCN": "野遇国师寺"
  },
  {
    "word": "𗓖𗂓",
    "GX": "ŋga².ti̱w¹",
    "GHC": "gja̱².tew¹",
    "explanationEN": "",
    "explanationCN": "邺斗"
  },
  {
    "word": "𘃻𗂧",
    "GX": "yiṃ¹.lheh²",
    "GHC": "ꞏji¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "殷国"
  },
  {
    "word": "𗷲𗉔",
    "GX": "giṃ¹.tśiw¹",
    "GHC": "gjĩ¹.tśjiw¹",
    "explanationEN": "",
    "explanationCN": "银州"
  },
  {
    "word": "𘝰𗉔",
    "GX": "giṃ¹.tśiw¹",
    "GHC": "gjĩ¹.tśjiw¹",
    "explanationEN": "",
    "explanationCN": "银州"
  },
  {
    "word": "𗀄𗞲",
    "GX": "ŋwu̱².do̱²",
    "GHC": "ŋwu².do²",
    "explanationEN": "",
    "explanationCN": "隐退"
  },
  {
    "word": "𗂏𘝗",
    "GX": "yu¹.yiw¹",
    "GHC": "ꞏju¹.ꞏjiw¹",
    "explanationEN": "",
    "explanationCN": "余姚"
  },
  {
    "word": "𗂏𗚒",
    "GX": "yu¹.khu²",
    "GHC": "ꞏju¹.khju²",
    "explanationEN": "",
    "explanationCN": "榆楸"
  },
  {
    "word": "𗂏𘄠",
    "GX": "yu¹.tśha²",
    "GHC": "ꞏju¹.tśhja²",
    "explanationEN": "",
    "explanationCN": "虞阐"
  },
  {
    "word": "𗂏𘓖𗽇",
    "GX": "yu¹.qo̱ṃ¹.tṣhaa̱¹",
    "GHC": "ꞏju¹.kow¹.tśhia¹",
    "explanationEN": "",
    "explanationCN": "虞公差"
  },
  {
    "word": "𗂏𘓖𗔨𗬐",
    "GX": "yu¹.qo̱ṃ¹.tṣaə̱².sə̱¹",
    "GHC": "ꞏju¹.kow¹.tśiə².sə¹",
    "explanationEN": "",
    "explanationCN": "虞公之斯"
  },
  {
    "word": "𗂏𘓖",
    "GX": "yu¹.qo̱ṃ¹",
    "GHC": "ꞏju¹.kow¹",
    "explanationEN": "",
    "explanationCN": "虞衮"
  },
  {
    "word": "𗘼𗂧",
    "GX": "ŋgu¹.lheh²",
    "GHC": "gju̱¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "虞国"
  },
  {
    "word": "𗂏𗤭",
    "GX": "yu¹.ywiṃ¹",
    "GHC": "ꞏju¹.ꞏjwĩ¹",
    "explanationEN": "",
    "explanationCN": "虞尹"
  },
  {
    "word": "𗙼𗙷𘏧𗁬𗋳𗣛",
    "GX": "yu².rir².yaw².tho̱ṃ¹.kwa̱ṃ¹.qi̱w¹",
    "GHC": "ꞏju².rjir².ꞏja̱².thow¹.kwã¹.kew¹",
    "explanationEN": "",
    "explanationCN": "御前衙堂管勾"
  },
  {
    "word": "𗂏𗉔",
    "GX": "yu¹.tśiw¹",
    "GHC": "ꞏju¹.tśjiw¹",
    "explanationEN": "",
    "explanationCN": "豫州"
  },
  {
    "word": "𘟦𗀝",
    "GX": "bə̱².rvwo̱r¹",
    "GHC": "bə².wor¹",
    "explanationEN": "",
    "explanationCN": "鸳鸯"
  },
  {
    "word": "𗇝𗂧",
    "GX": "rywar¹.lheh²",
    "GHC": "ꞏjwar¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "越国"
  },
  {
    "word": "𗀹𘂆",
    "GX": "zi¹.tsə¹",
    "GHC": "zji¹.tsjɨ¹",
    "explanationEN": "",
    "explanationCN": "崽子"
  },
  {
    "word": "𘕜𘉑",
    "GX": "ga².mə¹",
    "GHC": "gja².mjɨ¹",
    "explanationEN": "we.two(inclusive)",
    "explanationCN": "咱俩(包括式)"
  },
  {
    "word": "𘕜𗣊",
    "GX": "ga².mi²",
    "GHC": "gja².mji²",
    "explanationEN": "we(inclusive)",
    "explanationCN": "咱们(包括式)"
  },
  {
    "word": "𘝶𗳒",
    "GX": "the².ŋwu̱²",
    "GHC": "thjij².ŋwu²",
    "explanationEN": "how",
    "explanationCN": "怎么会(理由)"
  },
  {
    "word": "𘝶𗦜",
    "GX": "the².so²",
    "GHC": "thjij².sjo²",
    "explanationEN": "why(reason);how",
    "explanationCN": "怎么会(理由);怎么"
  },
  {
    "word": "𘑲𗥼𗬐𗁀",
    "GX": "tśoṃ¹.a?.sə̱¹.qo̱¹",
    "GHC": "tśjow¹.ꞏja.sə¹.ko¹",
    "explanationEN": "",
    "explanationCN": "张阿四哥"
  },
  {
    "word": "𘑲𗁀",
    "GX": "tśoṃ¹.qo̱¹",
    "GHC": "tśjow¹.ko¹",
    "explanationEN": "",
    "explanationCN": "张光"
  },
  {
    "word": "𗀄𗀣",
    "GX": "ŋwu̱².rha̱r¹",
    "GHC": "ŋwu².xar¹",
    "explanationEN": "",
    "explanationCN": "张开"
  },
  {
    "word": "𗀄𗧰",
    "GX": "ŋwu̱².khe¹",
    "GHC": "ŋwu².khjij¹",
    "explanationEN": "",
    "explanationCN": "张开"
  },
  {
    "word": "𘕹𗂧",
    "GX": "tśhiw¹.lheh²",
    "GHC": "tśhjiw¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "赵国"
  },
  {
    "word": "𘝶𗒘",
    "GX": "the².γae̱¹",
    "GHC": "thjij².ɣiej¹",
    "explanationEN": "how.real(really?)",
    "explanationCN": "真的吗"
  },
  {
    "word": "𗑃𗁀𗽤",
    "GX": "tśiṃ¹.qo̱¹.tṣhae̱²",
    "GHC": "tśjĩ¹.ko¹.tśhiej²",
    "explanationEN": "",
    "explanationCN": "镇国寨"
  },
  {
    "word": "𗹑𗁪",
    "GX": "tśeṃ¹.thi̱w²",
    "GHC": "tśjɨj¹.thew²",
    "explanationEN": "",
    "explanationCN": "正头（官名）"
  },
  {
    "word": "𗹓𗁪",
    "GX": "tśeṃ¹.thi̱w²",
    "GHC": "tśjɨj¹.thew²",
    "explanationEN": "",
    "explanationCN": "正头（官名）"
  },
  {
    "word": "𗝿𗂧",
    "GX": "tśhe¹.lheh²",
    "GHC": "tśhjij¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "郑国"
  },
  {
    "word": "𗁂𗭑",
    "GX": "dziw².śu¹",
    "GHC": "dzjiw².śju¹",
    "explanationEN": "",
    "explanationCN": "桎梏"
  },
  {
    "word": "𗉔𗂧",
    "GX": "tśiw¹.lheh²",
    "GHC": "tśjiw¹.lhjịj²",
    "explanationEN": "",
    "explanationCN": "周国"
  },
  {
    "word": "𘜸𘞨𗁬",
    "GX": "tshə̱¹.źeh².tho̱ṃ¹",
    "GHC": "tshə¹.źjịj².thow¹",
    "explanationEN": "",
    "explanationCN": "自然铜"
  },
  {
    "word": "𘕘𗁡",
    "GX": "tsə̱¹.phi¹",
    "GHC": "tsə¹.phji¹",
    "explanationEN": "",
    "explanationCN": "子皮"
  },
  {
    "word": "𘕘𗁬",
    "GX": "tsə̱¹.tho̱ṃ¹",
    "GHC": "tsə¹.thow¹",
    "explanationEN": "",
    "explanationCN": "子通"
  },
  {
    "word": "𗇮𗃵",
    "GX": "rə̱r².puh²",
    "GHC": "rar².pjụ²",
    "explanationEN": "",
    "explanationCN": "宗庙"
  },
  {
    "word": "𗩾𘂤",
    "GX": "zi².qha̱¹",
    "GHC": "źji².kha¹",
    "explanationEN": "the most",
    "explanationCN": "最"
  },
  {
    "word": "𘝦𘃡",
    "GX": "dźə¹.vi¹",
    "GHC": "dźjɨ.wji¹",
    "explanationEN": "ᴇʀɢ",
    "explanationCN": "ᴇʀɢ"
  }
];

// 定义字典数据
const CHARACTER_DATA = [
  {
    "character": "𘞗",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "race/offspring/seed",
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
    "explanationEN": "maternal.aunt",
    "explanationCN": "姨"
  },
  {
    "character": "𗀇",
    "GX": "goṃ¹",
    "GHC": "gjow¹",
    "explanationEN": "be.able.to/can/defeat",
    "explanationCN": "强"
  },
  {
    "character": "𗴼",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "丘咎侨寇求龟毬臼裘舅旧乔邱轿咎蔻桥",
    "explanationCN": "丘咎侨寇求龟毬臼裘舅旧乔邱轿咎蔻桥"
  },
  {
    "character": "𗵤",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "nature/temperament",
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
    "explanationEN": "rise.ᴀ",
    "explanationCN": "起.ᴀ"
  },
  {
    "character": "𗄊",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "all/completely",
    "explanationCN": "全都"
  },
  {
    "character": "𗴽",
    "GX": "lo?",
    "GHC": "lo",
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
    "explanationEN": "undergo/suffer",
    "explanationCN": "检查 经受"
  },
  {
    "character": "𗀫",
    "GX": "mpho̱¹",
    "GHC": "pho̱¹",
    "explanationEN": "cover",
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
    "GHC": "tjɨj²",
    "explanationEN": "tie/bind",
    "explanationCN": "缠"
  },
  {
    "character": "𗀏",
    "GX": "rpa̱r²",
    "GHC": "par²",
    "explanationEN": "a.horse.with.white.trotters",
    "explanationCN": "蹄"
  },
  {
    "character": "𗀨",
    "GX": "thwu²",
    "GHC": "thjwu²",
    "explanationEN": "meet/be.infected.with.a.disease",
    "explanationCN": "遇"
  },
  {
    "character": "𗄛",
    "GX": "rbi̱r²",
    "GHC": "ber²",
    "explanationEN": "meet/encounter",
    "explanationCN": "遇"
  },
  {
    "character": "𗵘",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "road/way",
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
    "explanationEN": "obtain.ʙ",
    "explanationCN": "得₁.ʙ"
  },
  {
    "character": "𘈋",
    "GX": "phe²",
    "GHC": "phjij²",
    "explanationEN": "sell₂",
    "explanationCN": "卖₂"
  },
  {
    "character": "𗀍",
    "GX": "ŋqhai̱¹",
    "GHC": "khie̱¹",
    "explanationEN": "mixed.and.disorderly",
    "explanationCN": "乱"
  },
  {
    "character": "𗀄",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "collar/neckband/territory",
    "explanationCN": "边沿"
  },
  {
    "character": "𗄑",
    "GX": "rŋo̱ṃr²",
    "GHC": "ŋowr²",
    "explanationEN": "all/each.and.every",
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
    "GHC": "sa",
    "explanationEN": "suck",
    "explanationCN": "吮"
  },
  {
    "character": "𘞝",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "instigate/slander",
    "explanationCN": "奸佞"
  },
  {
    "character": "𗃿",
    "GX": "źi²",
    "GHC": "źji²",
    "explanationEN": "二尔",
    "explanationCN": "二尔"
  },
  {
    "character": "𗵇",
    "GX": "tshih¹",
    "GHC": "tshjị¹",
    "explanationEN": "road/way",
    "explanationCN": "路"
  },
  {
    "character": "𗵓",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "wide/broad",
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
    "explanationEN": "五乌蜈伍武",
    "explanationCN": "五乌蜈伍武"
  },
  {
    "character": "𗴰",
    "GX": "gwaṃ¹",
    "GHC": "gjwã¹",
    "explanationEN": "【刮】【丘】",
    "explanationCN": "【刮】【丘】"
  },
  {
    "character": "𗀃",
    "GX": "ṣao̱²",
    "GHC": "śio²",
    "explanationEN": "mate/copulate",
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
    "explanationEN": "plan/scheme",
    "explanationCN": "计谋"
  },
  {
    "character": "𗀛",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "open/shine.upon",
    "explanationCN": "敞开"
  },
  {
    "character": "𗀜",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "then/after.that/afterwards",
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
    "explanationEN": "pungent/hot",
    "explanationCN": "辣"
  },
  {
    "character": "𘟀",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "see.ᴀ",
    "explanationCN": "看.ᴀ"
  },
  {
    "character": "𗵅",
    "GX": "lwəh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "crawl/creep",
    "explanationCN": "葡匐"
  },
  {
    "character": "𗀭",
    "GX": "thwu²",
    "GHC": "thjwu²",
    "explanationEN": "at.last/in.the.end",
    "explanationCN": "完毕"
  },
  {
    "character": "𗄉",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "𠼪",
    "explanationCN": "𠼪"
  },
  {
    "character": "𗀟",
    "GX": "nni¹",
    "GHC": "nji̱¹",
    "explanationEN": "marry",
    "explanationCN": "娶"
  },
  {
    "character": "𗵔",
    "GX": "ntha̱r¹",
    "GHC": "tha̱r¹",
    "explanationEN": "obvious",
    "explanationCN": "显现"
  },
  {
    "character": "𗄋",
    "GX": "źi¹",
    "GHC": "źji¹",
    "explanationEN": "儿耳二",
    "explanationCN": "儿耳二"
  },
  {
    "character": "𗵳",
    "GX": "noh²",
    "GHC": "njọ²",
    "explanationEN": "milk",
    "explanationCN": "乳"
  },
  {
    "character": "𗴸",
    "GX": "tswa̱¹",
    "GHC": "tswa¹",
    "explanationEN": "hair.worn.in.a.bun.or.coil",
    "explanationCN": "髻"
  },
  {
    "character": "𗵣",
    "GX": "tśiw²",
    "GHC": "tśjiw²",
    "explanationEN": "top",
    "explanationCN": "顶"
  },
  {
    "character": "𗀎",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "nearby/side",
    "explanationCN": "临"
  },
  {
    "character": "𗀣",
    "GX": "rha̱r¹",
    "GHC": "xar¹",
    "explanationEN": "open.(one’s.mouth)",
    "explanationCN": "张嘴"
  },
  {
    "character": "𗵱",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "observe/see",
    "explanationCN": "察"
  },
  {
    "character": "𗴳",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "a.word.means.respect",
    "explanationCN": "恭维"
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
    "GHC": "",
    "explanationEN": "boots",
    "explanationCN": "靴"
  },
  {
    "character": "𗴱",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "cover",
    "explanationCN": "遮掩"
  },
  {
    "character": "𘟅",
    "GX": "tśhe¹",
    "GHC": "tśhjij¹",
    "explanationEN": "raise/elect",
    "explanationCN": "举"
  },
  {
    "character": "𗄄",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "build",
    "explanationCN": "治"
  },
  {
    "character": "𗀆",
    "GX": "rgwər²",
    "GHC": "gjwɨr²",
    "explanationEN": "back.of.the.body",
    "explanationCN": "背"
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
    "explanationEN": "shelter",
    "explanationCN": "遮蔽₂"
  },
  {
    "character": "𗀒",
    "GX": "ṣao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "Shang",
    "explanationCN": "尚"
  },
  {
    "character": "𗀖",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "rely.on/depend.on",
    "explanationCN": "依₁"
  },
  {
    "character": "𗀘",
    "GX": "thwə¹",
    "GHC": "thjwɨ¹",
    "explanationEN": "meet/be.infected",
    "explanationCN": "遇 染"
  },
  {
    "character": "𗴲",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "summer",
    "explanationCN": "夏"
  },
  {
    "character": "𗵀",
    "GX": "vwo̱ṃ¹",
    "GHC": "wow¹",
    "explanationEN": "wish",
    "explanationCN": "望"
  },
  {
    "character": "𗵯",
    "GX": "tśəh¹",
    "GHC": "tśjɨ̣¹",
    "explanationEN": "branch",
    "explanationCN": "岔"
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
    "GX": "ṣuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "束",
    "explanationCN": "束"
  },
  {
    "character": "𗄁",
    "GX": "thwo̱¹",
    "GHC": "thwo¹",
    "explanationEN": "illusion",
    "explanationCN": "幻"
  },
  {
    "character": "𗀩",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "be.grieved",
    "explanationCN": "痛"
  },
  {
    "character": "𗵰",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "offer.a.sacrifice/pray",
    "explanationCN": "祭"
  },
  {
    "character": "𗄜",
    "GX": "ve¹",
    "GHC": "wjij¹",
    "explanationEN": "go",
    "explanationCN": "往"
  },
  {
    "character": "𗀋",
    "GX": "phao̱²",
    "GHC": "phio²",
    "explanationEN": "snake",
    "explanationCN": "蛇 巳"
  },
  {
    "character": "𗄐",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "制胝支智",
    "explanationCN": "制胝支智"
  },
  {
    "character": "𗀙",
    "GX": "mphə̱¹",
    "GHC": "phə̱¹",
    "explanationEN": "detest",
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
    "explanationEN": "integrate/unite",
    "explanationCN": "交"
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
    "explanationEN": "patrol",
    "explanationCN": "巡"
  },
  {
    "character": "𗀈",
    "GX": "tso̱ṃ¹",
    "GHC": "tsow¹",
    "explanationEN": "incomplete",
    "explanationCN": "残缺"
  },
  {
    "character": "𗀥",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "egg",
    "explanationCN": "卵"
  },
  {
    "character": "𗀔",
    "GX": "tśhaw¹",
    "GHC": "tśhja̱¹",
    "explanationEN": "ꜱᴜᴘᴇ",
    "explanationCN": "ꜱᴜᴘᴇ"
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
    "explanationEN": "meet/be.infected.with.a.disease",
    "explanationCN": "遇 染"
  },
  {
    "character": "𗴺",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "mother",
    "explanationCN": "母"
  },
  {
    "character": "𗵦",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "pray",
    "explanationCN": "祈祷"
  },
  {
    "character": "𗄒",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "broom",
    "explanationCN": "扫"
  },
  {
    "character": "𗀡",
    "GX": "tśhaw¹",
    "GHC": "tśhja̱¹",
    "explanationEN": "be.licentious",
    "explanationCN": "淫"
  },
  {
    "character": "𘒡",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "braise",
    "explanationCN": "焖"
  },
  {
    "character": "𗀧",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "accuse.falsely",
    "explanationCN": "诬陷"
  },
  {
    "character": "𗵗",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "get.ʙ/obtain.ʙ",
    "explanationCN": "得₂.ʙ"
  },
  {
    "character": "𗀯",
    "GX": "thwə¹",
    "GHC": "thjwɨ¹",
    "explanationEN": "finish",
    "explanationCN": "完"
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
    "explanationCN": "刚"
  },
  {
    "character": "𘈚",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "night",
    "explanationCN": "夜"
  },
  {
    "character": "𗵄",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "steamed.bun",
    "explanationCN": "馒头"
  },
  {
    "character": "𗀊",
    "GX": "tśhaw¹",
    "GHC": "tśhja̱¹",
    "explanationEN": "gather/collect",
    "explanationCN": "撮"
  },
  {
    "character": "𗴿",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "pray",
    "explanationCN": "祈求"
  },
  {
    "character": "𗵞",
    "GX": "ṣuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "cereal/grain",
    "explanationCN": "粮食"
  },
  {
    "character": "𗵨",
    "GX": "ṣaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "dawn",
    "explanationCN": "黎明"
  },
  {
    "character": "𗄓",
    "GX": "gəh²",
    "GHC": "gjɨ̣²",
    "explanationEN": "stars",
    "explanationCN": "星"
  },
  {
    "character": "𗵫",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "constellation",
    "explanationCN": "星宿"
  },
  {
    "character": "𗴻",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "warm",
    "explanationCN": "暖"
  },
  {
    "character": "𗵂",
    "GX": "llə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "crawl",
    "explanationCN": "葡匐"
  },
  {
    "character": "𗍧",
    "GX": "li̱h²",
    "GHC": "lẹ²",
    "explanationEN": "tub",
    "explanationCN": "盆"
  },
  {
    "character": "𗵆",
    "GX": "śeṃ¹",
    "GHC": "śjɨj¹",
    "explanationEN": "accomplish",
    "explanationCN": "成"
  },
  {
    "character": "𗵪",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "spring",
    "explanationCN": "春"
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
    "explanationCN": "车"
  },
  {
    "character": "𗀬",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "completely/finally",
    "explanationCN": "完毕"
  },
  {
    "character": "𘟃",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "brain/head",
    "explanationCN": "脑"
  },
  {
    "character": "𗵍",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "mixed/blended",
    "explanationCN": "混杂"
  },
  {
    "character": "𗵩",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "a.lined.Chinese-style.coat.or.jacket",
    "explanationCN": "袄"
  },
  {
    "character": "𗵮",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "god",
    "explanationCN": "神"
  },
  {
    "character": "𘈌",
    "GX": "nvo¹",
    "GHC": "wjo̱¹",
    "explanationEN": "commerce/trade",
    "explanationCN": "商贸"
  },
  {
    "character": "𗄖",
    "GX": "dźi¹",
    "GHC": "dźji",
    "explanationEN": "walk/go",
    "explanationCN": "行"
  },
  {
    "character": "𗴵",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "brain/head",
    "explanationCN": "脑"
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
    "explanationEN": "维",
    "explanationCN": "维"
  },
  {
    "character": "𗴹",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "脑瑙",
    "explanationCN": "脑瑙"
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
    "explanationEN": "source/resources",
    "explanationCN": "资源"
  },
  {
    "character": "𗵖",
    "GX": "tswiṃ¹",
    "GHC": "tsjwi¹",
    "explanationEN": "遵浚",
    "explanationCN": "遵浚"
  },
  {
    "character": "𗄕",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "extract",
    "explanationCN": "抽"
  },
  {
    "character": "𗵜",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "resources",
    "explanationCN": "资源"
  },
  {
    "character": "𗵢",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "look/see/observe",
    "explanationCN": "视"
  },
  {
    "character": "𗵭",
    "GX": "koh¹",
    "GHC": "kjọ¹",
    "explanationEN": "earnestly.hope/pray.for",
    "explanationCN": "祈求"
  },
  {
    "character": "𗵧",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "(silver.or.gold).ingot",
    "explanationCN": "锭"
  },
  {
    "character": "𗵛",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "a.surname",
    "explanationCN": "根源"
  },
  {
    "character": "𗵠",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "matter",
    "explanationCN": "物"
  },
  {
    "character": "𗵐",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "safety",
    "explanationCN": "好"
  },
  {
    "character": "𗴴",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "peace.and.happiness",
    "explanationCN": "乐"
  },
  {
    "character": "𘈊",
    "GX": "nvi¹",
    "GHC": "wji̱¹",
    "explanationEN": "commerce/trade",
    "explanationCN": "商贸"
  },
  {
    "character": "𗄎",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "brave",
    "explanationCN": "勇"
  },
  {
    "character": "𗀐",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "cold",
    "explanationCN": "寒"
  },
  {
    "character": "𗵟",
    "GX": "tshwaṃ¹",
    "GHC": "tshjwã¹",
    "explanationEN": "全泉筌",
    "explanationCN": "全泉筌"
  },
  {
    "character": "𗀗",
    "GX": "ntsi̱w²",
    "GHC": "tse̱w²",
    "explanationEN": "melt",
    "explanationCN": "融"
  },
  {
    "character": "𗵡",
    "GX": "tṣae̱²",
    "GHC": "tśiej²",
    "explanationEN": "wear",
    "explanationCN": "戴"
  },
  {
    "character": "𗀓",
    "GX": "śe²",
    "GHC": "śjij²",
    "explanationEN": "request/beg",
    "explanationCN": "索求"
  },
  {
    "character": "𗀞",
    "GX": "to̱ṃh¹",
    "GHC": "tọ¹",
    "explanationEN": "coagulate",
    "explanationCN": "凝"
  },
  {
    "character": "𗵌",
    "GX": "rγwe̱r²",
    "GHC": "ꞏwejr²",
    "explanationEN": "protect",
    "explanationCN": "护"
  },
  {
    "character": "𘔧",
    "GX": "guh¹",
    "GHC": "gjụ¹",
    "explanationEN": "seat/place/stick/post",
    "explanationCN": "柱"
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
    "GHC": "kiẹ¹",
    "explanationEN": "gold",
    "explanationCN": "金"
  },
  {
    "character": "𗵁",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "bluish.green",
    "explanationCN": "孔雀色；孔枯库空苦苦栝"
  },
  {
    "character": "𗵑",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "old.man",
    "explanationCN": "翁"
  },
  {
    "character": "𗶮",
    "GX": "ŋga¹",
    "GHC": "gja̱¹",
    "explanationEN": "jump",
    "explanationCN": "跳"
  },
  {
    "character": "𘝹",
    "GX": "rvir²",
    "GHC": "wjir²",
    "explanationEN": "hug",
    "explanationCN": "抱"
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
    "explanationEN": "shin",
    "explanationCN": "胫"
  },
  {
    "character": "𘄜",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "property/treasure",
    "explanationCN": "财宝"
  },
  {
    "character": "𘈙",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "peak",
    "explanationCN": "山陵"
  },
  {
    "character": "𗙥",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "sigh",
    "explanationCN": "叹息"
  },
  {
    "character": "𗘹",
    "GX": "khaṃ¹",
    "GHC": "khjã¹",
    "explanationEN": "谦犍乾",
    "explanationCN": "谦犍乾"
  },
  {
    "character": "𘃺",
    "GX": "mmə²",
    "GHC": "mjɨ̱²",
    "explanationEN": "call",
    "explanationCN": "呼告"
  },
  {
    "character": "𗙗",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "chime",
    "explanationCN": "磬"
  },
  {
    "character": "𗙕",
    "GX": "ha̱¹",
    "GHC": "xa",
    "explanationEN": "shout",
    "explanationCN": "喊"
  },
  {
    "character": "𘄇",
    "GX": "mih¹",
    "GHC": "mjị¹",
    "explanationEN": "inform",
    "explanationCN": "告知"
  },
  {
    "character": "𗟵",
    "GX": "a̱²",
    "GHC": "ꞏja²",
    "explanationEN": "阿",
    "explanationCN": "阿"
  },
  {
    "character": "𗟷",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "former/past",
    "explanationCN": "往昔"
  },
  {
    "character": "𘘄",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "tooth/blade",
    "explanationCN": "齿；刃"
  },
  {
    "character": "𘜓",
    "GX": "tśhi²",
    "GHC": "tśhji²",
    "explanationEN": "count",
    "explanationCN": "计数；赤郄"
  },
  {
    "character": "𘘛",
    "GX": "qi̱w¹",
    "GHC": "kew¹",
    "explanationEN": "the.Big.Dipper/the.Plough",
    "explanationCN": "北斗"
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
    "GHC": "lhia̱²",
    "explanationEN": "dazzle",
    "explanationCN": "闪耀"
  },
  {
    "character": "𗰙",
    "GX": "kwih²",
    "GHC": "khjwị²",
    "explanationEN": "circle",
    "explanationCN": "围"
  },
  {
    "character": "𗰟",
    "GX": "γwi²",
    "GHC": "ꞏwi²",
    "explanationEN": "ground",
    "explanationCN": "场"
  },
  {
    "character": "𗰞",
    "GX": "naw¹",
    "GHC": "nja̱¹",
    "explanationEN": "dark",
    "explanationCN": "黑"
  },
  {
    "character": "𗙴",
    "GX": "ra̱r¹",
    "GHC": "rar¹",
    "explanationEN": "patriarchal.clan/surname",
    "explanationCN": "姓；增"
  },
  {
    "character": "𗙘",
    "GX": "γai̱h²",
    "GHC": "ɣie̱̣²",
    "explanationEN": "bell",
    "explanationCN": "钟"
  },
  {
    "character": "𗹉",
    "GX": "goṃ²",
    "GHC": "gjow²",
    "explanationEN": "bent/curved",
    "explanationCN": "弯曲"
  },
  {
    "character": "𗟼",
    "GX": "di¹",
    "GHC": "dji¹",
    "explanationEN": "reply/repay",
    "explanationCN": "报"
  },
  {
    "character": "𗃒",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "hollow/ditch",
    "explanationCN": "窖；沟"
  },
  {
    "character": "𗙈",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "allow/say",
    "explanationCN": "许；说"
  },
  {
    "character": "𘄆",
    "GX": "pho¹",
    "GHC": "phjo¹",
    "explanationEN": "land",
    "explanationCN": "地"
  },
  {
    "character": "𗸢",
    "GX": "twa̱¹",
    "GHC": "twa¹",
    "explanationEN": "怛",
    "explanationCN": "怛"
  },
  {
    "character": "𗸴",
    "GX": "nwə²",
    "GHC": "njwɨ²",
    "explanationEN": "spring",
    "explanationCN": "春"
  },
  {
    "character": "𘇗",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "rope/string",
    "explanationCN": "绳"
  },
  {
    "character": "𘒺",
    "GX": "rna̱r²",
    "GHC": "nar²",
    "explanationEN": "be.old",
    "explanationCN": "老"
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
    "GHC": "dzjị²",
    "explanationEN": "daughter-in-law",
    "explanationCN": "媳妇"
  },
  {
    "character": "𗷦",
    "GX": "bə¹",
    "GHC": "bji¹",
    "explanationEN": "overflow",
    "explanationCN": "溢"
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
    "GHC": "ljị²",
    "explanationEN": "tie",
    "explanationCN": "拴"
  },
  {
    "character": "𘈢",
    "GX": "leṃh¹",
    "GHC": "ljɨ̣j¹",
    "explanationEN": "front.of.a.garment",
    "explanationCN": "襟"
  },
  {
    "character": "𘆮",
    "GX": "tśih²",
    "GHC": "tśjị²",
    "explanationEN": "impediment/burden",
    "explanationCN": "辎重；载"
  },
  {
    "character": "𗶛",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "brother-in-law",
    "explanationCN": "郎舅"
  },
  {
    "character": "𘒧",
    "GX": "dwu¹",
    "GHC": "djwu¹",
    "explanationEN": "answer/reply",
    "explanationCN": "答"
  },
  {
    "character": "𘔦",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "win",
    "explanationCN": "强胜"
  },
  {
    "character": "𗸼",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "make",
    "explanationCN": "制"
  },
  {
    "character": "𗹄",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "join/connect",
    "explanationCN": "连接"
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
    "explanationCN": "寂静"
  },
  {
    "character": "𗘸",
    "GX": "khaṃ¹",
    "GHC": "khjã¹",
    "explanationEN": "犍乾謙",
    "explanationCN": "犍乾谦"
  },
  {
    "character": "𗙞",
    "GX": "khwaə̱?",
    "GHC": "khiwə",
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
    "GHC": "dźiã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "哪铙硇"
  },
  {
    "character": "𗠁",
    "GX": "mbu̱²",
    "GHC": "bu̱²",
    "explanationEN": "victory",
    "explanationCN": "胜【卜】"
  },
  {
    "character": "𗗕",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "changing/incident",
    "explanationCN": "变"
  },
  {
    "character": "𗸻",
    "GX": "rbə̱r¹",
    "GHC": "bər¹",
    "explanationEN": "weak",
    "explanationCN": "悴"
  },
  {
    "character": "𗙓",
    "GX": "lwiṃ¹",
    "GHC": "ljwi¹",
    "explanationEN": "轮棱麟林琳临伦",
    "explanationCN": "轮棱麟林琳临伦"
  },
  {
    "character": "𘟁",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "bright",
    "explanationCN": "明亮"
  },
  {
    "character": "𗹊",
    "GX": "ŋgu¹",
    "GHC": "kju̱¹",
    "explanationEN": "limit/end",
    "explanationCN": "穷"
  },
  {
    "character": "𘆤",
    "GX": "ṣuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "raise.domestic.animals",
    "explanationCN": "畜养"
  },
  {
    "character": "𗶚",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "relative",
    "explanationCN": "亲近"
  },
  {
    "character": "𘔫",
    "GX": "lu̱h²",
    "GHC": "lụ²",
    "explanationEN": "impoverished",
    "explanationCN": "贫"
  },
  {
    "character": "𘈣",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "open/shine.upon",
    "explanationCN": "敞开暴晒"
  },
  {
    "character": "𘆞",
    "GX": "qhai̱²",
    "GHC": "khie²",
    "explanationEN": "golden.yellow/golden",
    "explanationCN": "黄"
  },
  {
    "character": "𗷞",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "cause.an.abortion",
    "explanationCN": "堕胎"
  },
  {
    "character": "𗗔",
    "GX": "nye¹",
    "GHC": "ꞏji̱j¹",
    "explanationEN": "flat/level/even",
    "explanationCN": "平"
  },
  {
    "character": "𗍹",
    "GX": "rtsi̱wr²",
    "GHC": "tsewr²",
    "explanationEN": "whip",
    "explanationCN": "鞭"
  },
  {
    "character": "𗹀",
    "GX": "tṣae̱ṃ¹",
    "GHC": "tśiəj¹",
    "explanationEN": "open.(one’s.mouth)",
    "explanationCN": "张口"
  },
  {
    "character": "𘄅",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "child/infant",
    "explanationCN": "婴"
  },
  {
    "character": "𗘷",
    "GX": "rho̱ṃr¹",
    "GHC": "xowr¹",
    "explanationEN": "roar/howl",
    "explanationCN": "吼叫"
  },
  {
    "character": "𗙌",
    "GX": "qaə̱¹",
    "GHC": "kiə¹",
    "explanationEN": "call",
    "explanationCN": "呼唤"
  },
  {
    "character": "𗙭",
    "GX": "ra̱r¹",
    "GHC": "rar¹",
    "explanationEN": "thousand",
    "explanationCN": "仟"
  },
  {
    "character": "𘄋",
    "GX": "γə¹",
    "GHC": "ɣjɨ¹",
    "explanationEN": "marry",
    "explanationCN": "结婚"
  },
  {
    "character": "𗟳",
    "GX": "ŋwu̱¹",
    "GHC": "ŋwu¹",
    "explanationEN": "speech/word",
    "explanationCN": "言词"
  },
  {
    "character": "𗟽",
    "GX": "rmor²",
    "GHC": "mjor²",
    "explanationEN": "rude/coarse/careless",
    "explanationCN": "粗糙"
  },
  {
    "character": "𘘅",
    "GX": "ŋqae̱¹",
    "GHC": "kie̱j¹",
    "explanationEN": "bite",
    "explanationCN": "咬"
  },
  {
    "character": "𗗓",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "bottle/vase/jar/flask",
    "explanationCN": "瓶"
  },
  {
    "character": "𘓰",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "make.love",
    "explanationCN": "性交"
  },
  {
    "character": "𘓸",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "vulture",
    "explanationCN": "鷲"
  },
  {
    "character": "𘈤",
    "GX": "rha̱r¹",
    "GHC": "xar¹",
    "explanationEN": "open.(one’s.mouth)",
    "explanationCN": "张口"
  },
  {
    "character": "𘆟",
    "GX": "rzi̱wr²",
    "GHC": "zewr²",
    "explanationEN": "bit.(of.a.bridle)",
    "explanationCN": "嚼子（衔铁）"
  },
  {
    "character": "𘆿",
    "GX": "ṣae̱h¹",
    "GHC": "śiẹj¹",
    "explanationEN": "tie/fasten",
    "explanationCN": "拴"
  },
  {
    "character": "𘜖",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "block.up",
    "explanationCN": "堵"
  },
  {
    "character": "𗸿",
    "GX": "γu̱h¹",
    "GHC": "ꞏụ¹",
    "explanationEN": "tired/weary",
    "explanationCN": "疲劳"
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
    "GX": "ṣae̱h¹",
    "GHC": "śiẹj¹",
    "explanationEN": "fierce.wind",
    "explanationCN": "狂风"
  },
  {
    "character": "𘃾",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "grandson.or.grand-daughter",
    "explanationCN": "孙"
  },
  {
    "character": "𘑾",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "a.mournful.sigh",
    "explanationCN": "悲叹"
  },
  {
    "character": "𘒀",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "weary/wired",
    "explanationCN": "疲乏"
  },
  {
    "character": "𘑿",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "skill",
    "explanationCN": "艺技"
  },
  {
    "character": "𗡸",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "daughter-in-law",
    "explanationCN": "妇女"
  },
  {
    "character": "𗳛",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "a.surname",
    "explanationCN": "阁"
  },
  {
    "character": "𗳡",
    "GX": "świ²",
    "GHC": "śjwi²",
    "explanationEN": "need/want/require",
    "explanationCN": "需"
  },
  {
    "character": "𘑝",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "calf",
    "explanationCN": "牛犊"
  },
  {
    "character": "𘑳",
    "GX": "rlho̱ṃr²",
    "GHC": "lhower²",
    "explanationEN": "ball/globe",
    "explanationCN": "球"
  },
  {
    "character": "𘗲",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "steady",
    "explanationCN": "安稳"
  },
  {
    "character": "𘜂",
    "GX": "dze̱ṃ¹",
    "GHC": "dzəj¹",
    "explanationEN": "deep.black",
    "explanationCN": "玄青"
  },
  {
    "character": "𘔏",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "sand/grit",
    "explanationCN": "沙"
  },
  {
    "character": "𘘫",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "rope",
    "explanationCN": "绳索"
  },
  {
    "character": "𘘲",
    "GX": "so¹",
    "GHC": "sjo¹",
    "explanationEN": "long.and.thin",
    "explanationCN": "细长"
  },
  {
    "character": "𘜩",
    "GX": "ntho̱²",
    "GHC": "tho̱²",
    "explanationEN": "deep",
    "explanationCN": "幽深"
  },
  {
    "character": "𘜽",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "owlet",
    "explanationCN": "鵂鶹"
  },
  {
    "character": "𘗫",
    "GX": "la̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "pretense/flattery",
    "explanationCN": "谄谀"
  },
  {
    "character": "𗸠",
    "GX": "hwaa̱¹",
    "GHC": "xiwa¹",
    "explanationEN": "nothing",
    "explanationCN": "无"
  },
  {
    "character": "𗘍",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "blue.and.green",
    "explanationCN": "青"
  },
  {
    "character": "𘃰",
    "GX": "dzwi̱w¹",
    "GHC": "dzwew¹",
    "explanationEN": "front.of.a.garment",
    "explanationCN": "襟"
  },
  {
    "character": "𘅴",
    "GX": "lwa¹",
    "GHC": "ljwa¹",
    "explanationEN": "make.a.detailed.inquiry",
    "explanationCN": "追问"
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
    "explanationEN": "I.hum",
    "explanationCN": "吾"
  },
  {
    "character": "𘞉",
    "GX": "le̱¹",
    "GHC": "lej¹",
    "explanationEN": "ore/stone",
    "explanationCN": "石料"
  },
  {
    "character": "𘚈",
    "GX": "tuh²",
    "GHC": "tjụ²",
    "explanationEN": "ancestor",
    "explanationCN": "祖宗"
  },
  {
    "character": "𘜾",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "phoenix",
    "explanationCN": "凤"
  },
  {
    "character": "𘚚",
    "GX": "pə̱h¹",
    "GHC": "pə̣¹",
    "explanationEN": "premature.delivery",
    "explanationCN": "早产"
  },
  {
    "character": "𗍕",
    "GX": "rkər¹",
    "GHC": "kjɨr¹",
    "explanationEN": "hasten",
    "explanationCN": "趋"
  },
  {
    "character": "𗘏",
    "GX": "śweṃ¹",
    "GHC": "śjwɨj¹",
    "explanationEN": "send",
    "explanationCN": "遣放"
  },
  {
    "character": "𘘻",
    "GX": "ryər²",
    "GHC": "ꞏjɨr²",
    "explanationEN": "ask.ʙ",
    "explanationCN": "问.ʙ"
  },
  {
    "character": "𗍋",
    "GX": "ŋkhə¹",
    "GHC": "khjɨ̱¹",
    "explanationEN": "gather",
    "explanationCN": "集结"
  },
  {
    "character": "𗍅",
    "GX": "rkər¹",
    "GHC": "kjɨ̱r¹",
    "explanationEN": "craftsman/craftsmanship",
    "explanationCN": "工匠"
  },
  {
    "character": "𗡠",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "seek/find",
    "explanationCN": "寻觅"
  },
  {
    "character": "𗡳",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "beautiful/cheerful",
    "explanationCN": "美"
  },
  {
    "character": "𘅊",
    "GX": "le̱¹",
    "GHC": "lej¹",
    "explanationEN": "a.surname",
    "explanationCN": "【来】【赖】"
  },
  {
    "character": "𘅩",
    "GX": "tśeh¹",
    "GHC": "tsjịj¹",
    "explanationEN": "rope",
    "explanationCN": "绳索"
  },
  {
    "character": "𗳣",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "cover",
    "explanationCN": "覆盖【迷】【糜】【密】【蜜】【眉】【弥】【汩】【美】【宓】"
  },
  {
    "character": "𗸱",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "son.or.daughter",
    "explanationCN": "子先生【朗】"
  },
  {
    "character": "𘑽",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "move.(revolve)",
    "explanationCN": "移动"
  },
  {
    "character": "𘘺",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "spoil.(a.child)",
    "explanationCN": "溺爱"
  },
  {
    "character": "𗙵",
    "GX": "tśaw¹",
    "GHC": "tśja̱¹",
    "explanationEN": "indicate",
    "explanationCN": "指使【昭】【照】【朝】"
  },
  {
    "character": "𗍌",
    "GX": "dźwe¹",
    "GHC": "dźjwij¹",
    "explanationEN": "swallow",
    "explanationCN": "吞"
  },
  {
    "character": "𗍍",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "hare",
    "explanationCN": "兔卯"
  },
  {
    "character": "𗉲",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "other/another",
    "explanationCN": "彼"
  },
  {
    "character": "𗙾",
    "GX": "qwae̱ṃ²",
    "GHC": "kiwəj²",
    "explanationEN": "a.surname",
    "explanationCN": "【金】金色"
  },
  {
    "character": "𘈝",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "night",
    "explanationCN": "夜晚"
  },
  {
    "character": "𗘁",
    "GX": "ri̱r¹",
    "GHC": "rer¹",
    "explanationEN": "bark",
    "explanationCN": "吠"
  },
  {
    "character": "𗘃",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "buttocks",
    "explanationCN": "臀"
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
    "explanationEN": "medicine.treat.sores",
    "explanationCN": "疮药"
  },
  {
    "character": "𗍁",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "wall/city/castle",
    "explanationCN": "城"
  },
  {
    "character": "𗍊",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "be like",
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
    "explanationEN": "family.dependants/wife",
    "explanationCN": "妻眷"
  },
  {
    "character": "𗡣",
    "GX": "dzi̱²",
    "GHC": "dze²",
    "explanationEN": "weight/judge",
    "explanationCN": "掂量"
  },
  {
    "character": "𗗾",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "pig/hog",
    "explanationCN": "猪彘"
  },
  {
    "character": "𘅏",
    "GX": "rtsu̱r¹",
    "GHC": "tsur¹",
    "explanationEN": "stain/smear",
    "explanationCN": "污跡"
  },
  {
    "character": "𘙔",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "glue/gum",
    "explanationCN": "胶"
  },
  {
    "character": "𘙦",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "tortoise",
    "explanationCN": "甲角【谢】"
  },
  {
    "character": "𘔜",
    "GX": "tśhiṃ¹",
    "GHC": "tśhji¹",
    "explanationEN": "a.surname",
    "explanationCN": "【陈】【沉】【尘】【嗔】"
  },
  {
    "character": "𘑺",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "reside/dwell/live",
    "explanationCN": "安居"
  },
  {
    "character": "𘈀",
    "GX": "rvar¹",
    "GHC": "wjar¹",
    "explanationEN": "slender",
    "explanationCN": "细"
  },
  {
    "character": "𘝆",
    "GX": "la̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "vulture",
    "explanationCN": "雕鷲"
  },
  {
    "character": "𗡯",
    "GX": "dźi?",
    "GHC": "dźji",
    "explanationEN": "strange",
    "explanationCN": "怪"
  },
  {
    "character": "𗳢",
    "GX": "dźe?",
    "GHC": "dźjij",
    "explanationEN": "agree/permit",
    "explanationCN": "肯"
  },
  {
    "character": "𘘯",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "thin/weak",
    "explanationCN": "瘦弱"
  },
  {
    "character": "𘅝",
    "GX": "lwu²",
    "GHC": "ljwu²",
    "explanationEN": "celebrate",
    "explanationCN": "庆"
  },
  {
    "character": "𗟫",
    "GX": "rnir²",
    "GHC": "njir²",
    "explanationEN": "borrow/loan",
    "explanationCN": "借贷"
  },
  {
    "character": "𘗿",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "a.surname",
    "explanationCN": "【冷】"
  },
  {
    "character": "𘚟",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "quick/nimble/agile",
    "explanationCN": "敏捷"
  },
  {
    "character": "𗍡",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "brother-in-law/cousnship",
    "explanationCN": "表亲郎舅"
  },
  {
    "character": "𘓩",
    "GX": "mau̱²",
    "GHC": "mu²",
    "explanationEN": "墓母摸謨摩無蒙牟",
    "explanationCN": "墓母摸謨摩无蒙牟"
  },
  {
    "character": "𗗴",
    "GX": "tshwə¹",
    "GHC": "tshjwɨ¹",
    "explanationEN": "bark",
    "explanationCN": "吠"
  },
  {
    "character": "𘄺",
    "GX": "bah¹",
    "GHC": "bjạ¹",
    "explanationEN": "thigh/leg",
    "explanationCN": "股"
  },
  {
    "character": "𗍓",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "repent",
    "explanationCN": "忏悔"
  },
  {
    "character": "𘘰",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "do",
    "explanationCN": "做"
  },
  {
    "character": "𘑹",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "do",
    "explanationCN": "做"
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
    "GHC": "dẹj²",
    "explanationEN": "wither/fade/dizzy",
    "explanationCN": "晕萎"
  },
  {
    "character": "𗘊",
    "GX": "tshwu²",
    "GHC": "tshjwu²",
    "explanationEN": "magpie",
    "explanationCN": "鹊【雀】"
  },
  {
    "character": "𗘗",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "rainbow",
    "explanationCN": "虹"
  },
  {
    "character": "𗡡",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "soft/tender",
    "explanationCN": "柔软"
  },
  {
    "character": "𗵼",
    "GX": "γaə̱¹",
    "GHC": "ɣiə¹",
    "explanationEN": "sister-in-law",
    "explanationCN": "妯娌"
  },
  {
    "character": "𘘦",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "a.modal.auxiliary",
    "explanationCN": "故"
  },
  {
    "character": "𘘱",
    "GX": "rśar¹",
    "GHC": "śjar¹",
    "explanationEN": "pare/peel/shell",
    "explanationCN": "剥削"
  },
  {
    "character": "𘚇",
    "GX": "voh¹",
    "GHC": "wjọ¹",
    "explanationEN": "widowed/solitary",
    "explanationCN": "寡孤"
  },
  {
    "character": "𗍔",
    "GX": "rkir²",
    "GHC": "kjɨr²",
    "explanationEN": "hasten",
    "explanationCN": "趋"
  },
  {
    "character": "𗍐",
    "GX": "khiṃ¹",
    "GHC": "khjĩ¹",
    "explanationEN": "钦琴",
    "explanationCN": "【钦】【琴】"
  },
  {
    "character": "𗉶",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "lonely/solitary",
    "explanationCN": "孤独"
  },
  {
    "character": "𗎛",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "being.blind",
    "explanationCN": "盲"
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
    "GHC": "lwạ¹",
    "explanationEN": "extinguish/go.out.(a.fire)",
    "explanationCN": "熄灭"
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
    "explanationCN": "膝"
  },
  {
    "character": "𘞷",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "raise/breed",
    "explanationCN": "养育"
  },
  {
    "character": "𗎙",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "border/side",
    "explanationCN": "边"
  },
  {
    "character": "𗰵",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "dowry/trousseau",
    "explanationCN": "嫁妆"
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
    "explanationEN": "lock.up",
    "explanationCN": "锁"
  },
  {
    "character": "𘘔",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "a.grain.measure.unit",
    "explanationCN": "斛"
  },
  {
    "character": "𗡬",
    "GX": "leṃ¹",
    "GHC": "ljɨj¹",
    "explanationEN": "posture/appearance",
    "explanationCN": "姿态"
  },
  {
    "character": "𘙚",
    "GX": "zwi̱w¹",
    "GHC": "zwew¹",
    "explanationEN": "tan/rub",
    "explanationCN": "【鞣】"
  },
  {
    "character": "𘅯",
    "GX": "dzə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "lose",
    "explanationCN": "丢失"
  },
  {
    "character": "𘅻",
    "GX": "γaa̱ṃ¹",
    "GHC": "ɣiã¹",
    "explanationEN": "leisure",
    "explanationCN": "【闲】"
  },
  {
    "character": "𘄣",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "wisdom",
    "explanationCN": "智"
  },
  {
    "character": "𘅵",
    "GX": "lwa¹",
    "GHC": "ljwa¹",
    "explanationEN": "quick",
    "explanationCN": "疾"
  },
  {
    "character": "𗵻",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "blissful",
    "explanationCN": "极乐"
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
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【墨】"
  },
  {
    "character": "𘄲",
    "GX": "nlə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "stop/halt",
    "explanationCN": "停"
  },
  {
    "character": "𘅐",
    "GX": "phu̱²",
    "GHC": "phu²",
    "explanationEN": "boots.wearing.in.rain.or.snow",
    "explanationCN": "泥靴"
  },
  {
    "character": "𘔥",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "parrot",
    "explanationCN": "鸚哥"
  },
  {
    "character": "𘇺",
    "GX": "dẓao̱²",
    "GHC": "dźio²",
    "explanationEN": "emperor’s.son-in-law",
    "explanationCN": "驸马"
  },
  {
    "character": "𘘬",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "alcoholic.drink",
    "explanationCN": "酒"
  },
  {
    "character": "𘙎",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "give.birth",
    "explanationCN": "生"
  },
  {
    "character": "𘇻",
    "GX": "mu¹",
    "GHC": "mju¹",
    "explanationEN": "mother’s.brother/uncle",
    "explanationCN": "舅兄弟（女称）"
  },
  {
    "character": "𘘐",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "bumper.harvest",
    "explanationCN": "丰稔"
  },
  {
    "character": "𗡰",
    "GX": "nlla¹",
    "GHC": "lja̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【拉】【刺】【腊】"
  },
  {
    "character": "𗍆",
    "GX": "rkər¹",
    "GHC": "kjɨ̱r¹",
    "explanationEN": "give.up/abandon",
    "explanationCN": "弃"
  },
  {
    "character": "𗡞",
    "GX": "tu̱h¹",
    "GHC": "tụ¹",
    "explanationEN": "thousand",
    "explanationCN": "千【都】"
  },
  {
    "character": "𘅌",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "crawl",
    "explanationCN": "【葡】"
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
    "GHC": "tjụ²",
    "explanationEN": "lip",
    "explanationCN": "唇"
  },
  {
    "character": "𘔔",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【奴】"
  },
  {
    "character": "𗙶",
    "GX": "tseṃ¹",
    "GHC": "tsjɨj¹",
    "explanationEN": "beautiful/pretty",
    "explanationCN": "【精】"
  },
  {
    "character": "𗉏",
    "GX": "qwo̱ṃ¹",
    "GHC": "kwow¹",
    "explanationEN": "face.upward.or.downward",
    "explanationCN": "俯"
  },
  {
    "character": "𗉷",
    "GX": "ntśhu²",
    "GHC": "tśhju̱²",
    "explanationEN": "be.inverted",
    "explanationCN": "颠倒"
  },
  {
    "character": "𗎤",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "observe",
    "explanationCN": "观察"
  },
  {
    "character": "𗚁",
    "GX": "du²",
    "GHC": "dju²",
    "explanationEN": "make.out/see",
    "explanationCN": "观望"
  },
  {
    "character": "𗸸",
    "GX": "nthu¹",
    "GHC": "thju̱¹",
    "explanationEN": "look.into/examine",
    "explanationCN": "察"
  },
  {
    "character": "𘑤",
    "GX": "ye²",
    "GHC": "ꞏjij²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【嚶】"
  },
  {
    "character": "𗍝",
    "GX": "γuo¹",
    "GHC": "ꞏio̱w¹",
    "explanationEN": "punishment",
    "explanationCN": "刑"
  },
  {
    "character": "𗉍",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "hold",
    "explanationCN": "执拏"
  },
  {
    "character": "𘟢",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "copulate/mate",
    "explanationCN": "交配"
  },
  {
    "character": "𗳜",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "regret/repent",
    "explanationCN": "退悔改"
  },
  {
    "character": "𘘧",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "boots.wearing.in.rain.or.snow",
    "explanationCN": "泥靴"
  },
  {
    "character": "𘙐",
    "GX": "va¹",
    "GHC": "wja¹",
    "explanationEN": "speech/word/say",
    "explanationCN": "曰【娃】"
  },
  {
    "character": "𗍂",
    "GX": "nwe¹",
    "GHC": "njwij¹",
    "explanationEN": "larynx/throat",
    "explanationCN": "喉"
  },
  {
    "character": "𗳮",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "curled.hair",
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
    "explanationEN": "lay.in/store.up",
    "explanationCN": "塞"
  },
  {
    "character": "𘔎",
    "GX": "da̱ṃ¹",
    "GHC": "dã¹",
    "explanationEN": "eat/feed",
    "explanationCN": "【啖】"
  },
  {
    "character": "𘜃",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "equal/even",
    "explanationCN": "等同"
  },
  {
    "character": "𘜅",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "wrestling",
    "explanationCN": "角力"
  },
  {
    "character": "𗸩",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "child",
    "explanationCN": "孩子"
  },
  {
    "character": "𘘭",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "know.ᴀ/be.capable.ᴀ",
    "explanationCN": "晓.ᴀ"
  },
  {
    "character": "𘘹",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【季】【呵】"
  },
  {
    "character": "𘑡",
    "GX": "rvwo̱r²",
    "GHC": "wor²",
    "explanationEN": "a.surname",
    "explanationCN": "【温】"
  },
  {
    "character": "𗳱",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "that/it/he",
    "explanationCN": "彼"
  },
  {
    "character": "𘃴",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "noon",
    "explanationCN": "中午"
  },
  {
    "character": "𗰸",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "cut/break",
    "explanationCN": "砍、伐、割"
  },
  {
    "character": "𘆂",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "noon",
    "explanationCN": "午"
  },
  {
    "character": "𗳲",
    "GX": "lheṃ¹",
    "GHC": "lhjɨj¹",
    "explanationEN": "mountain/ridge",
    "explanationCN": "【岭】"
  },
  {
    "character": "𗰾",
    "GX": "nih²",
    "GHC": "njị²",
    "explanationEN": "wizard/sorcerer",
    "explanationCN": "巫"
  },
  {
    "character": "𗱅",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "down/downward",
    "explanationCN": "下"
  },
  {
    "character": "𗱆",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "cattle/ox",
    "explanationCN": "牛"
  },
  {
    "character": "𗳺",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "that/it",
    "explanationCN": "彼"
  },
  {
    "character": "𗳼",
    "GX": "giw²",
    "GHC": "gjiw²",
    "explanationEN": "fall",
    "explanationCN": "降"
  },
  {
    "character": "𘃶",
    "GX": "swo²",
    "GHC": "sjwo²",
    "explanationEN": "pestle/grind",
    "explanationCN": "研磨"
  },
  {
    "character": "𘃷",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "a.surname",
    "explanationCN": "【纽】"
  },
  {
    "character": "𘇧",
    "GX": "yoṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "grey",
    "explanationCN": "灰色"
  },
  {
    "character": "𘇪",
    "GX": "bao̱²",
    "GHC": "bio²",
    "explanationEN": "a.surname",
    "explanationCN": "【婆】【播】"
  },
  {
    "character": "𗳻",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "upright/fairminded",
    "explanationCN": "【正】【旃】【栴】【詹】【瞻】"
  },
  {
    "character": "𗷮",
    "GX": "vwo̱ṃ¹",
    "GHC": "wow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【王】【汪】【旺】【阿】"
  },
  {
    "character": "𘑫",
    "GX": "ka̱ṃ¹",
    "GHC": "kã¹",
    "explanationEN": "a.surname",
    "explanationCN": "【甘】【肝】【乾】【敢】【干】"
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
    "explanationEN": "a.transliteration",
    "explanationCN": "【堆】"
  },
  {
    "character": "𗸈",
    "GX": "dwu¹",
    "GHC": "djwi¹",
    "explanationEN": "press",
    "explanationCN": "挤"
  },
  {
    "character": "𗷶",
    "GX": "bə¹",
    "GHC": "bji¹",
    "explanationEN": "overflow",
    "explanationCN": "溢出"
  },
  {
    "character": "𗷺",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "former.times",
    "explanationCN": "昔"
  },
  {
    "character": "𗸃",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "the.fourth.of.the.ten.Heavenly.Stems",
    "explanationCN": "丁"
  },
  {
    "character": "𗳴",
    "GX": "tṣhaə̱¹",
    "GHC": "tśhiə¹",
    "explanationEN": "a.surname",
    "explanationCN": "【郄】【泽】【翟】"
  },
  {
    "character": "𗷵",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "tired/weary",
    "explanationCN": "劳疲倦懈怠"
  },
  {
    "character": "𘈐",
    "GX": "ryar²",
    "GHC": "ꞏjar²",
    "explanationEN": "tired/weary",
    "explanationCN": "疲倦困乏"
  },
  {
    "character": "𘑱",
    "GX": "śwe²",
    "GHC": "śjwij²",
    "explanationEN": "bolt.for.a.door",
    "explanationCN": "店门閂"
  },
  {
    "character": "𗸍",
    "GX": "tsu̱¹",
    "GHC": "tsu¹",
    "explanationEN": "diligent/industrious",
    "explanationCN": "勤"
  },
  {
    "character": "𘜁",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "elder.sister",
    "explanationCN": "姐姊"
  },
  {
    "character": "𘑪",
    "GX": "qhwə̱¹",
    "GHC": "khwə¹",
    "explanationEN": "among/between",
    "explanationCN": "中间"
  },
  {
    "character": "𘒶",
    "GX": "fwə¹",
    "GHC": "xjwɨ¹",
    "explanationEN": "Buddha",
    "explanationCN": "佛】"
  },
  {
    "character": "𗱍",
    "GX": "nthu̱¹",
    "GHC": "thu̱¹",
    "explanationEN": "sigh.sorrowfully",
    "explanationCN": "哀叹"
  },
  {
    "character": "𘜋",
    "GX": "phaṃ²",
    "GHC": "phjã²",
    "explanationEN": "a.surname",
    "explanationCN": "【潘】"
  },
  {
    "character": "𘜌",
    "GX": "phao̱ṃ²",
    "GHC": "phjow²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【胖】"
  },
  {
    "character": "𗷯",
    "GX": "rqai̱r¹",
    "GHC": "kier¹",
    "explanationEN": "chew",
    "explanationCN": "咀嚼"
  },
  {
    "character": "𗷴",
    "GX": "rdwə̱r²",
    "GHC": "dwər²",
    "explanationEN": "inspect",
    "explanationCN": "考察"
  },
  {
    "character": "𗷻",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "equality",
    "explanationCN": "【等】"
  },
  {
    "character": "𗸓",
    "GX": "rdwə̱r¹",
    "GHC": "dwə¹",
    "explanationEN": "enemy/foe",
    "explanationCN": "敌"
  },
  {
    "character": "𗈻",
    "GX": "tṣai̱w¹",
    "GHC": "tśiew¹",
    "explanationEN": "hot",
    "explanationCN": "炙】"
  },
  {
    "character": "𗖽",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【噎】【医】【翳】"
  },
  {
    "character": "𗖁",
    "GX": "dzuh¹",
    "GHC": "dzjụ¹",
    "explanationEN": "tall/high",
    "explanationCN": "高"
  },
  {
    "character": "𗖏",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "former.times",
    "explanationCN": "往昔"
  },
  {
    "character": "𗖾",
    "GX": "thə̱h¹",
    "GHC": "thə̣¹",
    "explanationEN": "force",
    "explanationCN": "逼追"
  },
  {
    "character": "𗉇",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "rapid",
    "explanationCN": "急速火速"
  },
  {
    "character": "𗖋",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "who/which/someone",
    "explanationCN": "谁某(】）"
  },
  {
    "character": "𗖵",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "ʀᴇꜰ",
    "explanationCN": "ʀᴇꜰ"
  },
  {
    "character": "𗖛",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "alas/alack",
    "explanationCN": "呜呼噎哀"
  },
  {
    "character": "𗖟",
    "GX": "kah¹",
    "GHC": "kjạ¹",
    "explanationEN": "musical.instrument/instrument",
    "explanationCN": "歌乐器"
  },
  {
    "character": "𗖴",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "weaving/weft",
    "explanationCN": "织纬"
  },
  {
    "character": "𗖰",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "sutra/scripture",
    "explanationCN": "经典"
  },
  {
    "character": "𗗄",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "an.official.title",
    "explanationCN": "都案"
  },
  {
    "character": "𗉁",
    "GX": "γai̱h¹",
    "GHC": "ɣiẹ¹",
    "explanationEN": "cook",
    "explanationCN": "烹"
  },
  {
    "character": "𗉂",
    "GX": "γai̱h¹",
    "GHC": "ɣiẹ¹",
    "explanationEN": "concubine",
    "explanationCN": "妾"
  },
  {
    "character": "𗖶",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "who/which/what",
    "explanationCN": "谁"
  },
  {
    "character": "𘗼",
    "GX": "qhae̱ṃ¹",
    "GHC": "khiəj¹",
    "explanationEN": "hole/hollow",
    "explanationCN": "坑】"
  },
  {
    "character": "𘙲",
    "GX": "dźo¹",
    "GHC": "dźjo¹",
    "explanationEN": "long",
    "explanationCN": "【长】"
  },
  {
    "character": "𗕸",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【昌】【虫】【重】【中】【长】【仲】【充】【冲】【畅】【长】"
  },
  {
    "character": "𗕺",
    "GX": "ŋŋwu̱²",
    "GHC": "ŋwu̱²",
    "explanationEN": "language/speech",
    "explanationCN": "语词"
  },
  {
    "character": "𗗅",
    "GX": "śwe¹",
    "GHC": "śjwij¹",
    "explanationEN": "curse/swear",
    "explanationCN": "駡詈"
  },
  {
    "character": "𗖂",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "advise/persuade",
    "explanationCN": "劝说"
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
    "explanationEN": "make.(wine)",
    "explanationCN": "酿熟（麯）"
  },
  {
    "character": "𗗀",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "wan.and.sallow",
    "explanationCN": "憔悴"
  },
  {
    "character": "𘙺",
    "GX": "ye²",
    "GHC": "ꞏjij²",
    "explanationEN": "expand/enlarge",
    "explanationCN": "扩张"
  },
  {
    "character": "𗖿",
    "GX": "thə̱h¹",
    "GHC": "thə̣¹",
    "explanationEN": "force",
    "explanationCN": "逼追"
  },
  {
    "character": "𗉈",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "rapid",
    "explanationCN": "急速"
  },
  {
    "character": "𗖎",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "judge/decide/determine",
    "explanationCN": "判断（判明）"
  },
  {
    "character": "𗖀",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj²",
    "explanationEN": "suit/be.convenient/harmonize",
    "explanationCN": "合宜"
  },
  {
    "character": "𗕹",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "answer",
    "explanationCN": "答】"
  },
  {
    "character": "𗖊",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "send.(an.envoy)",
    "explanationCN": "使】"
  },
  {
    "character": "𘙴",
    "GX": "rqo̱r¹",
    "GHC": "kor¹",
    "explanationEN": "larynx/throat",
    "explanationCN": "喉"
  },
  {
    "character": "𘙳",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "shrink/contract",
    "explanationCN": "缩"
  },
  {
    "character": "𘙵",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "a.long.narrow.piece",
    "explanationCN": "带"
  },
  {
    "character": "𗖐",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "hiccup",
    "explanationCN": "嗝"
  },
  {
    "character": "𗖜",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "force/compel",
    "explanationCN": "逼迫"
  },
  {
    "character": "𗳅",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "danger",
    "explanationCN": "危"
  },
  {
    "character": "𗴀",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "tall/high",
    "explanationCN": "高【序】【绪】"
  },
  {
    "character": "𗹓",
    "GX": "tśeṃ¹",
    "GHC": "tśjɨj¹",
    "explanationEN": "send/dispatch",
    "explanationCN": "遣"
  },
  {
    "character": "𗳇",
    "GX": "dzuh¹",
    "GHC": "dzjụ²",
    "explanationEN": "mound/mausoleum",
    "explanationCN": "丘陵"
  },
  {
    "character": "𗹙",
    "GX": "rtser¹",
    "GHC": "tsji̱r¹",
    "explanationEN": "method/art/skill",
    "explanationCN": "法要术教"
  },
  {
    "character": "𗴃",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "two/pair",
    "explanationCN": "双两二"
  },
  {
    "character": "𘈳",
    "GX": "moh²",
    "GHC": "mjọ²",
    "explanationEN": "orphan/widower",
    "explanationCN": "孤鰥"
  },
  {
    "character": "𘝷",
    "GX": "laa̱¹",
    "GHC": "lia¹",
    "explanationEN": "beautiful/gorgeous",
    "explanationCN": "绚丽"
  },
  {
    "character": "𗳋",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "open/spread",
    "explanationCN": "张"
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
    "explanationEN": "evil/crafty",
    "explanationCN": "邪【那】【拏】"
  },
  {
    "character": "𗹗",
    "GX": "ġo̱²",
    "GHC": "go²",
    "explanationEN": "get.rid.of",
    "explanationCN": "除蠲退遣"
  },
  {
    "character": "𗶤",
    "GX": "lu¹",
    "GHC": "lju¹",
    "explanationEN": "felt/mat",
    "explanationCN": "垫"
  },
  {
    "character": "𘞿",
    "GX": "ve¹",
    "GHC": "wjij¹",
    "explanationEN": "have",
    "explanationCN": "有在"
  },
  {
    "character": "𘞽",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "surname.on.mother’s.line",
    "explanationCN": "氏"
  },
  {
    "character": "𗰖",
    "GX": "nṣao¹",
    "GHC": "śjo̱¹",
    "explanationEN": "gather/collect",
    "explanationCN": "集辑综合纂"
  },
  {
    "character": "𘘜",
    "GX": "nṣae̱¹",
    "GHC": "śie̱j¹",
    "explanationEN": "collect",
    "explanationCN": "蒐集"
  },
  {
    "character": "𗘞",
    "GX": "lha¹",
    "GHC": "lha¹",
    "explanationEN": "sage",
    "explanationCN": "圣"
  },
  {
    "character": "𗟶",
    "GX": "ryir¹",
    "GHC": "ꞏjir¹",
    "explanationEN": "emolument",
    "explanationCN": "禄"
  },
  {
    "character": "𗸡",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "make.love/rape",
    "explanationCN": "性交姦淫"
  },
  {
    "character": "𘒥",
    "GX": "mphə¹",
    "GHC": "phjɨ̱¹",
    "explanationEN": "flatter",
    "explanationCN": "阿諛"
  },
  {
    "character": "𗷡",
    "GX": "rker²",
    "GHC": "kji̱r²",
    "explanationEN": "feed",
    "explanationCN": "喂"
  },
  {
    "character": "𗸺",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "felt/rug",
    "explanationCN": "毡"
  },
  {
    "character": "𗍸",
    "GX": "rpa̱r²",
    "GHC": "par²",
    "explanationEN": "a.horse.with.white.trotters",
    "explanationCN": "驳（马）蹄"
  },
  {
    "character": "𘟤",
    "GX": "swuh²",
    "GHC": "sjwụ²",
    "explanationEN": "life",
    "explanationCN": "生活"
  },
  {
    "character": "𘇖",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "felt/rug",
    "explanationCN": "毡"
  },
  {
    "character": "𘓭",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "deal.with",
    "explanationCN": "经当"
  },
  {
    "character": "𘘢",
    "GX": "gih²",
    "GHC": "gjị²",
    "explanationEN": "depend.on/rely.on",
    "explanationCN": "依避"
  },
  {
    "character": "𗰓",
    "GX": "lloh²",
    "GHC": "ljọ²",
    "explanationEN": "where",
    "explanationCN": "哪里"
  },
  {
    "character": "𗙰",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "tortoise/turtle",
    "explanationCN": "龟"
  },
  {
    "character": "𗸹",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "a.surname",
    "explanationCN": "【鲜】【赛】【辛】【惺】【兴】【隰】【窒】【数】【昔】【寻】【锡】【新】【鲜】【信】"
  },
  {
    "character": "𘃻",
    "GX": "yiṃ¹",
    "GHC": "ꞏji¹",
    "explanationEN": "a.surname",
    "explanationCN": "【因】【寅】【殷】【奇】【因】【饮】【蝇】【澠】【尹】【隠】"
  },
  {
    "character": "𘄁",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "a.kind.of.animal.like.a.mouse.eats.insects",
    "explanationCN": "鼱鼩（地鼠）"
  },
  {
    "character": "𘃸",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "prosperous",
    "explanationCN": "盛增"
  },
  {
    "character": "𘜔",
    "GX": "rŋi̱wr²",
    "GHC": "ŋewr²",
    "explanationEN": "number/numeral",
    "explanationCN": "数"
  },
  {
    "character": "𗙒",
    "GX": "laa̱¹",
    "GHC": "lia¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【刺】【拉】"
  },
  {
    "character": "𗰝",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "frog",
    "explanationCN": "蛙"
  },
  {
    "character": "𘄩",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "beat",
    "explanationCN": "击"
  },
  {
    "character": "𘘇",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "wolf",
    "explanationCN": "狼"
  },
  {
    "character": "𘓊",
    "GX": "rzər¹",
    "GHC": "zjɨ̱r¹",
    "explanationEN": "few/little/tiny",
    "explanationCN": "少小稀微略嬈"
  },
  {
    "character": "𗎀",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "a.surname",
    "explanationCN": "【折】【遮】【蔗】【耆】"
  },
  {
    "character": "𗗖",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "spinach",
    "explanationCN": "菠菱"
  },
  {
    "character": "𘃼",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【骆】草名"
  },
  {
    "character": "𗠀",
    "GX": "dzwə̱¹",
    "GHC": "dzwə¹",
    "explanationEN": "plan",
    "explanationCN": "筹"
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
    "explanationEN": "be",
    "explanationCN": "是"
  },
  {
    "character": "𗗜",
    "GX": "rthoṃr²",
    "GHC": "thjowr²",
    "explanationEN": "wave/shake",
    "explanationCN": "摇动"
  },
  {
    "character": "𘓺",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "emperor/high.heaven",
    "explanationCN": "皇天"
  },
  {
    "character": "𘝽",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "a.kind.of.bee",
    "explanationCN": "【蜾】蜂名"
  },
  {
    "character": "𘟌",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "pepper",
    "explanationCN": "椒"
  },
  {
    "character": "𗷥",
    "GX": "ndu̱²",
    "GHC": "du̱¹",
    "explanationEN": "angry",
    "explanationCN": "怒"
  },
  {
    "character": "𗶙",
    "GX": "dźwə²",
    "GHC": "dźjwɨ²",
    "explanationEN": "very.close.relative",
    "explanationCN": "至亲戚"
  },
  {
    "character": "𘈟",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "hinder/block",
    "explanationCN": "障碍遮蔽"
  },
  {
    "character": "𘆡",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "gorgeous",
    "explanationCN": "绚丽"
  },
  {
    "character": "𘇝",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "two",
    "explanationCN": "两"
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
    "explanationEN": "universal/general",
    "explanationCN": "普遍"
  },
  {
    "character": "𘆦",
    "GX": "ndze̱¹",
    "GHC": "dze̱j¹",
    "explanationEN": "horse.for.riding",
    "explanationCN": "骑"
  },
  {
    "character": "𘙯",
    "GX": "mbae̱¹",
    "GHC": "pie̱j¹",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【蚍】虫名"
  },
  {
    "character": "𘔪",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "quiet",
    "explanationCN": "安"
  },
  {
    "character": "𘚡",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "flea",
    "explanationCN": "蚤"
  },
  {
    "character": "𘒩",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "admonish/instruct",
    "explanationCN": "旨詔训指"
  },
  {
    "character": "𘇀",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "shaft.of.cart.or.carriage",
    "explanationCN": "辕"
  },
  {
    "character": "𘑛",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "shoulder",
    "explanationCN": "肩"
  },
  {
    "character": "𘞳",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "tumor",
    "explanationCN": "肿瘤"
  },
  {
    "character": "𗸗",
    "GX": "rdzər¹",
    "GHC": "dzjɨr¹",
    "explanationEN": "chop/cut.off",
    "explanationCN": "斩"
  },
  {
    "character": "𘔑",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "be.stifled.death",
    "explanationCN": "闷死"
  },
  {
    "character": "𗉤",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "carry.on.the.back",
    "explanationCN": "驮骑"
  },
  {
    "character": "𘑞",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "elephant",
    "explanationCN": "大象"
  },
  {
    "character": "𘇼",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "marry/unite.in.marriage",
    "explanationCN": "结亲"
  },
  {
    "character": "𗸟",
    "GX": "ŋġa̱¹",
    "GHC": "ga̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【閼】【嚣】【奡】【敖】"
  },
  {
    "character": "𗡟",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "seek/find",
    "explanationCN": "寻找;找到"
  },
  {
    "character": "𗡶",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "a.suffix",
    "explanationCN": "法则【奢】"
  },
  {
    "character": "𘜻",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "a.surname",
    "explanationCN": "【芭】【包】【帕】【罢】【琶】"
  },
  {
    "character": "𗍎",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "deep.blue.and.green",
    "explanationCN": "青玄色"
  },
  {
    "character": "𗍘",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "butterfly",
    "explanationCN": "蝴蝶"
  },
  {
    "character": "𘃯",
    "GX": "goh¹",
    "GHC": "gjọ¹",
    "explanationEN": "wear.ʙ",
    "explanationCN": "穿.ᴃ"
  },
  {
    "character": "𘘑",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "abundant",
    "explanationCN": "丰"
  },
  {
    "character": "𗡮",
    "GX": "lo²",
    "GHC": "śjwo²",
    "explanationEN": "dignified",
    "explanationCN": "庄严端正美好"
  },
  {
    "character": "𗵽",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "beautiful",
    "explanationCN": "美丽彩饰丹玫撩"
  },
  {
    "character": "𘄳",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "ashamed",
    "explanationCN": "羞愧"
  },
  {
    "character": "𘇹",
    "GX": "ṣaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "string/thread",
    "explanationCN": "綫"
  },
  {
    "character": "𗸦",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "human.being/person",
    "explanationCN": "人"
  },
  {
    "character": "𘈫",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "a.surname",
    "explanationCN": "【武】【乌】【巫】【毋】【戊】【芜】【务】【雾】"
  },
  {
    "character": "𘔒",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "a.surname",
    "explanationCN": "【妮】【年】【念】【宁】"
  },
  {
    "character": "𘔙",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【嚀】虫名"
  },
  {
    "character": "𘚋",
    "GX": "dao̱h¹",
    "GHC": "niọ²",
    "explanationEN": "sisters",
    "explanationCN": "姐妹"
  },
  {
    "character": "𘗵",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【萝】虫名"
  },
  {
    "character": "𘚨",
    "GX": "yo̱ṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "relatives",
    "explanationCN": "亲戚"
  },
  {
    "character": "𘚘",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "a.surname",
    "explanationCN": "【肋】"
  },
  {
    "character": "𘝃",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "fly.and.mosquito",
    "explanationCN": "蚊蝇"
  },
  {
    "character": "𘚛",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【肋】虫名"
  },
  {
    "character": "𗸖",
    "GX": "ŋġa̱¹",
    "GHC": "ga̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【閼】【嚣】【奡】【敖】"
  },
  {
    "character": "𘓦",
    "GX": "lleh¹",
    "GHC": "ljịj¹",
    "explanationEN": "be.awake",
    "explanationCN": "悟意"
  },
  {
    "character": "𘗬",
    "GX": "dźu¹",
    "GHC": "dźju¹",
    "explanationEN": "cheat/deceive",
    "explanationCN": "欺骗诈"
  },
  {
    "character": "𗌹",
    "GX": "rner¹",
    "GHC": "njijr¹",
    "explanationEN": "wild.animal",
    "explanationCN": "野兽"
  },
  {
    "character": "𗘌",
    "GX": "śwoṃ¹",
    "GHC": "śjwow¹",
    "explanationEN": "send/dispatch",
    "explanationCN": "遣送"
  },
  {
    "character": "𗘐",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【怪】虫名"
  },
  {
    "character": "𗡨",
    "GX": "dẓao̱²",
    "GHC": "dźio²",
    "explanationEN": "help",
    "explanationCN": "助】"
  },
  {
    "character": "𗳨",
    "GX": "dẓaa̱²",
    "GHC": "dźia²",
    "explanationEN": "incomplete",
    "explanationCN": "残缺"
  },
  {
    "character": "𘅀",
    "GX": "ta̱?",
    "GHC": "ta",
    "explanationEN": "rebel.against",
    "explanationCN": "叛逆"
  },
  {
    "character": "𘘾",
    "GX": "rdwar¹",
    "GHC": "djwar¹",
    "explanationEN": "skin",
    "explanationCN": "皮膜"
  },
  {
    "character": "𘞊",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "indignant/angry",
    "explanationCN": "愤怒"
  },
  {
    "character": "𗎜",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【蛄】虫名"
  },
  {
    "character": "𗙷",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "front",
    "explanationCN": "前"
  },
  {
    "character": "𗸶",
    "GX": "lhweh²",
    "GHC": "lhjwịj²",
    "explanationEN": "change.irregularly/fluctuate",
    "explanationCN": "变幻"
  },
  {
    "character": "𘄕",
    "GX": "sə̱²",
    "GHC": "sə²",
    "explanationEN": "selfishness",
    "explanationCN": "私】"
  },
  {
    "character": "𘜈",
    "GX": "dẓao̱¹",
    "GHC": "dźio¹",
    "explanationEN": "a.surname",
    "explanationCN": "【场】【畅】"
  },
  {
    "character": "𗉑",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "post/stick",
    "explanationCN": "柱杖倚"
  },
  {
    "character": "𗉭",
    "GX": "tśeṃ¹",
    "GHC": "tśjɨj¹",
    "explanationEN": "scheme/stratagem",
    "explanationCN": "计谋"
  },
  {
    "character": "𗗻",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "dog",
    "explanationCN": "狗犬戌"
  },
  {
    "character": "𗶎",
    "GX": "dźwə¹",
    "GHC": "dźjwɨ¹",
    "explanationEN": "sister-in-law",
    "explanationCN": "妯娌"
  },
  {
    "character": "𘅙",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "mark/trace",
    "explanationCN": "痕迹"
  },
  {
    "character": "𘅧",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "honorable",
    "explanationCN": "【贵】【季】【龟】【归】【桂】【癸】【彦】【圭】【劌】【鬼】【轨】【匭】【规】"
  },
  {
    "character": "𘔤",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "dark/black",
    "explanationCN": "玄"
  },
  {
    "character": "𘇿",
    "GX": "ṇi¹",
    "GHC": "nji¹",
    "explanationEN": "marry",
    "explanationCN": "嫁"
  },
  {
    "character": "𘜟",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "few/little/less",
    "explanationCN": "少"
  },
  {
    "character": "𘙉",
    "GX": "keṃ¹",
    "GHC": "kjɨj¹",
    "explanationEN": "epidermis/outside",
    "explanationCN": "表"
  },
  {
    "character": "𘙡",
    "GX": "zwi̱¹",
    "GHC": "źwe¹",
    "explanationEN": "modest",
    "explanationCN": "谦"
  },
  {
    "character": "𘝶",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "how",
    "explanationCN": "怎么"
  },
  {
    "character": "𘟓",
    "GX": "tseṃh¹",
    "GHC": "tsjɨ̣j¹",
    "explanationEN": "modest/humble",
    "explanationCN": "谦虚;卑微"
  },
  {
    "character": "𗗼",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "wizard",
    "explanationCN": "巫驱鬼者"
  },
  {
    "character": "𗉝",
    "GX": "śih²",
    "GHC": "śjị²",
    "explanationEN": "grass/cogongrass",
    "explanationCN": "草茅"
  },
  {
    "character": "𗍏",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【宿】【须】【苏】【婿】【肃】【嵩】【松】【俗】【徐】【续】"
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
    "GHC": "tsjụ¹",
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
    "GHC": "zjọ²",
    "explanationEN": "longevity/life",
    "explanationCN": "寿、世"
  },
  {
    "character": "𗗰",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【葵】草名"
  },
  {
    "character": "𗡦",
    "GX": "ryər²",
    "GHC": "ꞏjɨr²",
    "explanationEN": "a.necklace.of.precious.stones",
    "explanationCN": "瓔"
  },
  {
    "character": "𘔕",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【能】草名"
  },
  {
    "character": "𘙥",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "slow/gentle/quiet",
    "explanationCN": "徐徐安静"
  },
  {
    "character": "𘞴",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【洼】草名"
  },
  {
    "character": "𘞵",
    "GX": "dza¹",
    "GHC": "dzja¹",
    "explanationEN": "grow",
    "explanationCN": "长"
  },
  {
    "character": "𘟄",
    "GX": "γə¹",
    "GHC": "ɣjɨ¹",
    "explanationEN": "mother’s.brother/uncle",
    "explanationCN": "舅"
  },
  {
    "character": "𗟦",
    "GX": "ma̱ṃ¹",
    "GHC": "mã¹",
    "explanationEN": "luck/fortune",
    "explanationCN": "运气【满】【蛮】【麻】"
  },
  {
    "character": "𗍉",
    "GX": "hə̱²",
    "GHC": "xə²",
    "explanationEN": "choke/swell",
    "explanationCN": "障噎"
  },
  {
    "character": "𘅺",
    "GX": "de̱ṃ¹",
    "GHC": "dəj¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【代】【萏】草名"
  },
  {
    "character": "𘙒",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "fill.in/stuff",
    "explanationCN": "塞、漂浮"
  },
  {
    "character": "𗗽",
    "GX": "dẓaə̱¹",
    "GHC": "dźiə¹",
    "explanationEN": "a.surname",
    "explanationCN": "【貰】"
  },
  {
    "character": "𘅪",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【答】【妲】【怛】"
  },
  {
    "character": "𗟘",
    "GX": "po¹",
    "GHC": "pjo¹",
    "explanationEN": "burn.ʙ",
    "explanationCN": "烤"
  },
  {
    "character": "𘈎",
    "GX": "toh²",
    "GHC": "tjọ²",
    "explanationEN": "younger.brother",
    "explanationCN": "弟"
  },
  {
    "character": "𗸂",
    "GX": "ṣwae̱¹",
    "GHC": "śiwej¹",
    "explanationEN": "timid",
    "explanationCN": "怯弱"
  },
  {
    "character": "𘈑",
    "GX": "rmər¹",
    "GHC": "mjɨr¹",
    "explanationEN": "people/tribe/scholar",
    "explanationCN": "人族士"
  },
  {
    "character": "𗱊",
    "GX": "thəh²",
    "GHC": "thjɨ̣²",
    "explanationEN": "roll.up/volume.(of.books)",
    "explanationCN": "卷"
  },
  {
    "character": "𘑭",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "other/that/it",
    "explanationCN": "他它彼"
  },
  {
    "character": "𗸎",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "burst/break",
    "explanationCN": "破裂"
  },
  {
    "character": "𘜀",
    "GX": "rmər¹",
    "GHC": "mjɨr¹",
    "explanationEN": "strong/robust",
    "explanationCN": "壮"
  },
  {
    "character": "𗳳",
    "GX": "ṣaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "guide",
    "explanationCN": "引导"
  },
  {
    "character": "𗷰",
    "GX": "te²",
    "GHC": "t-²",
    "explanationEN": "refuse/remove",
    "explanationCN": "拒"
  },
  {
    "character": "𘈓",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "frog",
    "explanationCN": "蛙"
  },
  {
    "character": "𘑬",
    "GX": "rdwi̱wr²",
    "GHC": "dwewr²",
    "explanationEN": "consciousness",
    "explanationCN": "知觉"
  },
  {
    "character": "𗷼",
    "GX": "ni?",
    "GHC": "nji",
    "explanationEN": "defeat",
    "explanationCN": "负败凌"
  },
  {
    "character": "𗸑",
    "GX": "rdẓaə̱r¹",
    "GHC": "dźiər¹",
    "explanationEN": "roller/grind.or.husk.with.a.roller",
    "explanationCN": "碾动词"
  },
  {
    "character": "𗉅",
    "GX": "tsaṃ¹",
    "GHC": "tsja¹",
    "explanationEN": "hot",
    "explanationCN": "热【砸】【砍】【旃】【佐】【占】【勺】【吒】"
  },
  {
    "character": "𗖄",
    "GX": "nwi¹",
    "GHC": "njwi¹",
    "explanationEN": "kindness/favour",
    "explanationCN": "恩功"
  },
  {
    "character": "𗍤",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "stand.up/raise",
    "explanationCN": "起"
  },
  {
    "character": "𘘌",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "skull.(of.a.dead.person)",
    "explanationCN": "髑髏"
  },
  {
    "character": "𘘏",
    "GX": "yu¹",
    "GHC": "ꞏjwu¹",
    "explanationEN": "haunt/make.mischief",
    "explanationCN": "作崇為怪"
  },
  {
    "character": "𗹛",
    "GX": "tśe²",
    "GHC": "tśjij²",
    "explanationEN": "lion",
    "explanationCN": "狮子（狻猊）"
  },
  {
    "character": "𘙶",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "long.narrow.strips/pieces.(of.writing)",
    "explanationCN": "条、队、溜"
  },
  {
    "character": "𗈼",
    "GX": "pu²",
    "GHC": "pju²",
    "explanationEN": "a.surname",
    "explanationCN": "【布】【泊】【卜】"
  },
  {
    "character": "𗖕",
    "GX": "na̱h²",
    "GHC": "nạ²",
    "explanationEN": "scold/condemn",
    "explanationCN": "駡詈"
  },
  {
    "character": "𗖃",
    "GX": "???",
    "GHC": "",
    "explanationEN": "another",
    "explanationCN": "各（？）"
  },
  {
    "character": "𗖒",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "fault/error",
    "explanationCN": "失误差"
  },
  {
    "character": "𗖷",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "anger/rage",
    "explanationCN": "怒"
  },
  {
    "character": "𗖳",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "weave",
    "explanationCN": "织络"
  },
  {
    "character": "𗹚",
    "GX": "rner¹",
    "GHC": "njijr¹",
    "explanationEN": "soil/land",
    "explanationCN": "土地"
  },
  {
    "character": "𘇲",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "ripe/cooked",
    "explanationCN": "熟"
  },
  {
    "character": "𘇵",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "cattail",
    "explanationCN": "蒲草"
  },
  {
    "character": "𗗍",
    "GX": "lleh¹",
    "GHC": "ljịj¹",
    "explanationEN": "a.kind.of.maggot",
    "explanationCN": "【力】蛆虫名"
  },
  {
    "character": "𘇫",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "blood.relations",
    "explanationCN": "嫡亲胞亲"
  },
  {
    "character": "𗳽",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "slope/hillock",
    "explanationCN": "坡"
  },
  {
    "character": "𗹎",
    "GX": "twa̱ṃ¹",
    "GHC": "twã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【短】【段】地名"
  },
  {
    "character": "𘔨",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "compel",
    "explanationCN": "逼迫"
  },
  {
    "character": "𗳈",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "target/shield",
    "explanationCN": "靶盾"
  },
  {
    "character": "𘞎",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "rake",
    "explanationCN": "耙（耬）"
  },
  {
    "character": "𗸽",
    "GX": "tśuo²",
    "GHC": "tśjo̱w²",
    "explanationEN": "not",
    "explanationCN": "无"
  },
  {
    "character": "𘚗",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "origin/source",
    "explanationCN": "本源初"
  },
  {
    "character": "𘄈",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "breeding",
    "explanationCN": "配种"
  },
  {
    "character": "𗸣",
    "GX": "tə̱¹",
    "GHC": "tə¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【德】【得】"
  },
  {
    "character": "𘑨",
    "GX": "γwu̱h²",
    "GHC": "ꞏwu²",
    "explanationEN": "help/aid",
    "explanationCN": "助"
  },
  {
    "character": "𘒤",
    "GX": "li̱²",
    "GHC": "le²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【乐】"
  },
  {
    "character": "𘒼",
    "GX": "rna̱r²",
    "GHC": "nar²",
    "explanationEN": "the.old/the.aged",
    "explanationCN": "老"
  },
  {
    "character": "𘆨",
    "GX": "ti²",
    "GHC": "tji²",
    "explanationEN": "remain",
    "explanationCN": "留【帝】【睇】【知】【致】【底】"
  },
  {
    "character": "𘇄",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "lose/disobey",
    "explanationCN": "失遗违背"
  },
  {
    "character": "𘇋",
    "GX": "ṣae̱h²",
    "GHC": "śiẹj²",
    "explanationEN": "evil/harm/calamity",
    "explanationCN": "害"
  },
  {
    "character": "𗷘",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "drive/expel",
    "explanationCN": "驱赶"
  },
  {
    "character": "𗟴",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "oral.cavity",
    "explanationCN": "腔】"
  },
  {
    "character": "𗙢",
    "GX": "vwa̱ṃ²",
    "GHC": "wã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【旺】【哀】【艾】【碗】【腕】【嚣】"
  },
  {
    "character": "𘓲",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "blue.and.green",
    "explanationCN": "青"
  },
  {
    "character": "𘆧",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "ten.thousand",
    "explanationCN": "万"
  },
  {
    "character": "𗸾",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "bald/bare",
    "explanationCN": "秃"
  },
  {
    "character": "𘄞",
    "GX": "γu̱h¹",
    "GHC": "ꞏụ¹",
    "explanationEN": "foreign.tribes",
    "explanationCN": "夷"
  },
  {
    "character": "𘚂",
    "GX": "lha̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "dawn/daybreak",
    "explanationCN": "黎明"
  },
  {
    "character": "𗙖",
    "GX": "pha̱ṃ¹",
    "GHC": "phã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【槃】】"
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
    "explanationEN": "grind",
    "explanationCN": "研磨"
  },
  {
    "character": "𗗞",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "cooked.wheaten.food",
    "explanationCN": "麵食"
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
    "GHC": "mẹ²",
    "explanationEN": "wing",
    "explanationCN": "翼"
  },
  {
    "character": "𘆵",
    "GX": "ṇi¹",
    "GHC": "nji¹",
    "explanationEN": "clear.away",
    "explanationCN": "除"
  },
  {
    "character": "𘆱",
    "GX": "kwe²",
    "GHC": "kjwij²",
    "explanationEN": "skilful/ingenious/clever",
    "explanationCN": "巧"
  },
  {
    "character": "𘙭",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "dumpling.made.of.glutinous.rice.wrapped.in.bamboo.or.reed.leaves.(eaten.during.the.Dragon.Boat.Festival)",
    "explanationCN": "角黍（粽子）"
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
    "explanationEN": "cry/weep/sob",
    "explanationCN": "哭泣"
  },
  {
    "character": "𘈥",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "swell/choke",
    "explanationCN": "胀噎"
  },
  {
    "character": "𘇌",
    "GX": "dzwi¹",
    "GHC": "dzjwi¹",
    "explanationEN": "thin/emaciated",
    "explanationCN": "瘦"
  },
  {
    "character": "𘝁",
    "GX": "thə̱²",
    "GHC": "thə²",
    "explanationEN": "wing",
    "explanationCN": "羽翼"
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
    "explanationEN": "ask.for.help/walk",
    "explanationCN": "绿行"
  },
  {
    "character": "𘞓",
    "GX": "ve¹",
    "GHC": "wjij¹",
    "explanationEN": "go",
    "explanationCN": "往"
  },
  {
    "character": "𗉱",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "flatter",
    "explanationCN": "迎合奉承"
  },
  {
    "character": "𗰱",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "happen/build",
    "explanationCN": "发生建立兴起"
  },
  {
    "character": "𘘳",
    "GX": "ŋgi²",
    "GHC": "gji̱²",
    "explanationEN": "rise/get.up/stand.up",
    "explanationCN": "起"
  },
  {
    "character": "𘝅",
    "GX": "ntśhə²",
    "GHC": "tśhjɨ̱²",
    "explanationEN": "reversal",
    "explanationCN": "颠倒"
  },
  {
    "character": "𘜪",
    "GX": "ryer¹",
    "GHC": "ꞏjijr¹",
    "explanationEN": "fall/sink",
    "explanationCN": "堕没"
  },
  {
    "character": "𘑢",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "wrist",
    "explanationCN": "手腕"
  },
  {
    "character": "𘒂",
    "GX": "haa̱¹",
    "GHC": "xia¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【下】【夏】【孝】【瑊】【匣】【槛】【馅】【孝】【限】【效】"
  },
  {
    "character": "𗉎",
    "GX": "bae̱h¹",
    "GHC": "bẹj¹",
    "explanationEN": "eulogy/wittcism",
    "explanationCN": "颂妙语"
  },
  {
    "character": "𘄽",
    "GX": "ŋa̱h²",
    "GHC": "ŋạ²",
    "explanationEN": "good/kind",
    "explanationCN": "好"
  },
  {
    "character": "𘗺",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "soil/land",
    "explanationCN": "土地"
  },
  {
    "character": "𗌿",
    "GX": "peṃh²",
    "GHC": "pjɨ̣j²",
    "explanationEN": "shovel",
    "explanationCN": "掀鍤"
  },
  {
    "character": "𘃲",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "mend",
    "explanationCN": "补"
  },
  {
    "character": "𘘒",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "hair",
    "explanationCN": "毛髮"
  },
  {
    "character": "𘘕",
    "GX": "rvwu̱r¹",
    "GHC": "wur¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【屋】【斡】"
  },
  {
    "character": "𗵾",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "apron",
    "explanationCN": "袩"
  },
  {
    "character": "𗶁",
    "GX": "mi̱h²",
    "GHC": "mẹ²",
    "explanationEN": "powder",
    "explanationCN": "粉"
  },
  {
    "character": "𘅂",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "thatched.shed",
    "explanationCN": "毛（茅）棚"
  },
  {
    "character": "𘑟",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "chin",
    "explanationCN": "頜頦"
  },
  {
    "character": "𘇽",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "brown",
    "explanationCN": "褐"
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
    "explanationEN": "slaughter",
    "explanationCN": "屠宰"
  },
  {
    "character": "𘘴",
    "GX": "gwoṃ¹",
    "GHC": "gjwow¹",
    "explanationEN": "throw/cast",
    "explanationCN": "掷投掷"
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
    "explanationEN": "cast",
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
    "explanationEN": "look.for/seek",
    "explanationCN": "寻找觅蒐检"
  },
  {
    "character": "𗡧",
    "GX": "ndzi²",
    "GHC": "dzji̱²",
    "explanationEN": "conceal",
    "explanationCN": "隠蔽依避"
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
    "GHC": "zjịj¹",
    "explanationEN": "ᴛɪᴍᴇ.ᴀ",
    "explanationCN": "ᴛɪᴍᴇ.ᴀ"
  },
  {
    "character": "𘈖",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "correspond",
    "explanationCN": "合、处"
  },
  {
    "character": "𗉔",
    "GX": "tśiw¹",
    "GHC": "tśjiw¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【州】【周】【昼】【昭】】"
  },
  {
    "character": "𗎚",
    "GX": "rmi̱r²",
    "GHC": "me²",
    "explanationEN": "pocket/bag",
    "explanationCN": "兜"
  },
  {
    "character": "𗙺",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "shed/curtain",
    "explanationCN": "棚幕"
  },
  {
    "character": "𘄖",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a.kind.of.Chinese-style.underwear",
    "explanationCN": "袩"
  },
  {
    "character": "𘈜",
    "GX": "thwo̱¹",
    "GHC": "thwo¹",
    "explanationEN": "arrive",
    "explanationCN": "至"
  },
  {
    "character": "𘄚",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a.kind.of.Chinese-style.underwear",
    "explanationCN": "肚兜"
  },
  {
    "character": "𘗷",
    "GX": "ṇə¹",
    "GHC": "njɨ¹",
    "explanationEN": "skirt",
    "explanationCN": "裙"
  },
  {
    "character": "𗟤",
    "GX": "tṣai̱w¹",
    "GHC": "tśiew¹",
    "explanationEN": "whisk.or.wipe.off/ox",
    "explanationCN": "拂"
  },
  {
    "character": "𘇛",
    "GX": "peṃh¹",
    "GHC": "pjɨ̣j¹",
    "explanationEN": "a.battle-axe.used.in.ancient.China",
    "explanationCN": "鉞"
  },
  {
    "character": "𘙣",
    "GX": "nśi¹",
    "GHC": "śji̱¹",
    "explanationEN": "slaughter.ᴀ",
    "explanationCN": "屠.ᴀ"
  },
  {
    "character": "𘅲",
    "GX": "tshi²",
    "GHC": "tshji²",
    "explanationEN": "general/universal",
    "explanationCN": "普"
  },
  {
    "character": "𗱂",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "power.of.arms",
    "explanationCN": "臂力"
  },
  {
    "character": "𘒷",
    "GX": "fə¹",
    "GHC": "xjɨ¹",
    "explanationEN": "eliminate/clear.away",
    "explanationCN": "清除"
  },
  {
    "character": "𘇚",
    "GX": "mmi²",
    "GHC": "mji̱²",
    "explanationEN": "administer/manage",
    "explanationCN": "治"
  },
  {
    "character": "𗷷",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "break/crack",
    "explanationCN": "折裂"
  },
  {
    "character": "𗰺",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "fast/rapid",
    "explanationCN": "急速"
  },
  {
    "character": "𘆁",
    "GX": "lwe̱ṃ¹",
    "GHC": "lwəj¹",
    "explanationEN": "jump/leap",
    "explanationCN": "跳跃"
  },
  {
    "character": "𘆄",
    "GX": "nə²",
    "GHC": "njɨ²",
    "explanationEN": "ᴘʟ",
    "explanationCN": "ᴘʟ"
  },
  {
    "character": "𘑮",
    "GX": "dwu¹",
    "GHC": "djwu¹",
    "explanationEN": "impressive.and.dignified.manners",
    "explanationCN": "威仪"
  },
  {
    "character": "𘘍",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "hell/inferno",
    "explanationCN": "地狱"
  },
  {
    "character": "𗖑",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "plot/scheme/conspire",
    "explanationCN": "图谋"
  },
  {
    "character": "𗖔",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "peaceful",
    "explanationCN": "祥和"
  },
  {
    "character": "𗖓",
    "GX": "nllo̱²",
    "GHC": "lho̱¹",
    "explanationEN": "report",
    "explanationCN": "举报告"
  },
  {
    "character": "𘙼",
    "GX": "mau̱¹",
    "GHC": "mu¹",
    "explanationEN": "a.mouth.sticks.out",
    "explanationCN": "嘴、杵"
  },
  {
    "character": "𗕼",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "spread.ᴀ/cast.ᴀ",
    "explanationCN": "散布.ᴀ"
  },
  {
    "character": "𗈾",
    "GX": "lhwah¹",
    "GHC": "lhjwạ¹",
    "explanationEN": "ash/dust",
    "explanationCN": "灰"
  },
  {
    "character": "𗖖",
    "GX": "nəh¹",
    "GHC": "njɨ̣¹",
    "explanationEN": "tell/inform",
    "explanationCN": "告"
  },
  {
    "character": "𗗂",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "HYP",
    "explanationCN": "HYP"
  },
  {
    "character": "𗉉",
    "GX": "dźwe¹",
    "GHC": "dźjij²",
    "explanationEN": "cool",
    "explanationCN": "凉"
  },
  {
    "character": "𘛾",
    "GX": "luh²",
    "GHC": "ljụ²",
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
    "explanationEN": "big/large",
    "explanationCN": "大】"
  },
  {
    "character": "𘞍",
    "GX": "rti̱wr¹",
    "GHC": "tewr¹",
    "explanationEN": "heavy",
    "explanationCN": "笨重"
  },
  {
    "character": "𘞚",
    "GX": "mbe¹",
    "GHC": "bji̱j¹",
    "explanationEN": "times",
    "explanationCN": "倍"
  },
  {
    "character": "𘟉",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "steaming/seething",
    "explanationCN": "腾"
  },
  {
    "character": "𘘙",
    "GX": "dẓae̱h¹",
    "GHC": "dźiẹj¹",
    "explanationEN": "enclose/surround",
    "explanationCN": "围"
  },
  {
    "character": "𘜒",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "a.measure.word.for.anything.small.and.roundish",
    "explanationCN": "颗"
  },
  {
    "character": "𗰒",
    "GX": "bo̱ṃ²",
    "GHC": "bow²",
    "explanationEN": "rapid",
    "explanationCN": "迅速"
  },
  {
    "character": "𗍾",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "a.surname",
    "explanationCN": "【温】【永】【颖】【鄄】【荣】"
  },
  {
    "character": "𗹂",
    "GX": "goṃ²",
    "GHC": "gjow²",
    "explanationEN": "be.stuporous/be.comatose",
    "explanationCN": "昏迷"
  },
  {
    "character": "𘜗",
    "GX": "mma²",
    "GHC": "mja̱²",
    "explanationEN": "many/much",
    "explanationCN": "多"
  },
  {
    "character": "𗟱",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "today/the.present",
    "explanationCN": "今"
  },
  {
    "character": "𗟻",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "causative.ᴀ",
    "explanationCN": "使.ᴀ"
  },
  {
    "character": "𘘃",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "chew/bite",
    "explanationCN": "咬"
  },
  {
    "character": "𗙄",
    "GX": "rṣaə̱r¹",
    "GHC": "śiər¹",
    "explanationEN": "sound/noise",
    "explanationCN": "响"
  },
  {
    "character": "𗍺",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "ceremony/courtesy",
    "explanationCN": "礼"
  },
  {
    "character": "𗍼",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "face",
    "explanationCN": "脸面"
  },
  {
    "character": "𗙳",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "coarse/rough",
    "explanationCN": "粗糙"
  },
  {
    "character": "𗰚",
    "GX": "nllə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "a.unit.of.weight",
    "explanationCN": "斤"
  },
  {
    "character": "𘄏",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "meet",
    "explanationCN": "遇"
  },
  {
    "character": "𘄑",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "help",
    "explanationCN": "助"
  },
  {
    "character": "𘘡",
    "GX": "za̱¹",
    "GHC": "za¹",
    "explanationEN": "the.name.of.Tangut’s.ancestors",
    "explanationCN": "人房赤面（西夏祖先名）"
  },
  {
    "character": "𗴊",
    "GX": "lhi̱¹",
    "GHC": "lhe¹",
    "explanationEN": "shrink/contract",
    "explanationCN": "缩"
  },
  {
    "character": "𗍷",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "judge/decide",
    "explanationCN": "判"
  },
  {
    "character": "𗰢",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "a.place.name",
    "explanationCN": "【圪】地名"
  },
  {
    "character": "𘚢",
    "GX": "dẓae̱²",
    "GHC": "dźiej²",
    "explanationEN": "wheel",
    "explanationCN": "轮转軥"
  },
  {
    "character": "𘟕",
    "GX": "lheṃ¹",
    "GHC": "lhjɨj¹",
    "explanationEN": "ridge",
    "explanationCN": "梁"
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
    "GHC": "tśwəj¹",
    "explanationEN": "hunchback/tumor",
    "explanationCN": "肿瘤驼背"
  },
  {
    "character": "𗷤",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "shoulder",
    "explanationCN": "肩"
  },
  {
    "character": "𘆥",
    "GX": "???",
    "GHC": "",
    "explanationEN": "as",
    "explanationCN": "如及"
  },
  {
    "character": "𘒻",
    "GX": "lwe¹",
    "GHC": "ljwij¹",
    "explanationEN": "old/aged",
    "explanationCN": "死"
  },
  {
    "character": "𘆼",
    "GX": "qwae̱²",
    "GHC": "kiwej²",
    "explanationEN": "fine.horse/steed/(Chinese).unicorn",
    "explanationCN": "骏驥麒麟"
  },
  {
    "character": "𘒨",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "express.by.words",
    "explanationCN": "设置"
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
    "explanationEN": "a.reward/an.award",
    "explanationCN": "宣赏"
  },
  {
    "character": "𗙫",
    "GX": "γa̱¹",
    "GHC": "ꞏa",
    "explanationEN": "a.transliteration",
    "explanationCN": "【俺】【庵】"
  },
  {
    "character": "𗘼",
    "GX": "ŋgu¹",
    "GHC": "gju̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【于】【雨】【鱼】【御】【愚】【禹】【虞】【羽】【语】【鱼】【玉】"
  },
  {
    "character": "𘄒",
    "GX": "pa̱²",
    "GHC": "pa²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【般】【鉢】"
  },
  {
    "character": "𗙜",
    "GX": "ṣwae̱¹",
    "GHC": "śiwej¹",
    "explanationEN": "very.fast/rapid",
    "explanationCN": "急疾"
  },
  {
    "character": "𗡫",
    "GX": "ṣao̱²",
    "GHC": "śio²",
    "explanationEN": "daughter-in-law",
    "explanationCN": "媳【爽】【朔】"
  },
  {
    "character": "𘄯",
    "GX": "lhwe¹",
    "GHC": "lhjwij¹",
    "explanationEN": "oblique/slanting",
    "explanationCN": "斜偏歪欹"
  },
  {
    "character": "𘑜",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "oblique/slanting",
    "explanationCN": "斜】"
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
    "explanationEN": "behind/back",
    "explanationCN": "后"
  },
  {
    "character": "𗸛",
    "GX": "qhwə̱¹",
    "GHC": "khwə¹",
    "explanationEN": "coma/stupor",
    "explanationCN": "昏迷闷"
  },
  {
    "character": "𗌶",
    "GX": "rner¹",
    "GHC": "njijr¹",
    "explanationEN": "give.birth",
    "explanationCN": "生"
  },
  {
    "character": "𗎘",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "border/side",
    "explanationCN": "边际境侧"
  },
  {
    "character": "𘈛",
    "GX": "thwo̱¹",
    "GHC": "thwo¹",
    "explanationEN": "illusion/dream",
    "explanationCN": "梦幻"
  },
  {
    "character": "𘈗",
    "GX": "ka̱ṃ¹",
    "GHC": "kã¹",
    "explanationEN": "drive.away/expel",
    "explanationCN": "赶】"
  },
  {
    "character": "𗰏",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "death",
    "explanationCN": "亡"
  },
  {
    "character": "𗍀",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "a.surname",
    "explanationCN": "【胡】"
  },
  {
    "character": "𘅃",
    "GX": "ŋa̱h²",
    "GHC": "ŋạ²",
    "explanationEN": "many/much",
    "explanationCN": "多善"
  },
  {
    "character": "𘅒",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "forehead",
    "explanationCN": "额"
  },
  {
    "character": "𘅬",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "enclose",
    "explanationCN": "围"
  },
  {
    "character": "𗳪",
    "GX": "rzi̱r²",
    "GHC": "zer²",
    "explanationEN": "ask.for.aid",
    "explanationCN": "行缘"
  },
  {
    "character": "𘑼",
    "GX": "ro̱r²",
    "GHC": "ror²",
    "explanationEN": "a.surname",
    "explanationCN": "【萝】"
  },
  {
    "character": "𘙇",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "ᴘꜰᴠ:ᴅɪʀ/ɪᴍᴘ:ᴅɪʀ",
    "explanationCN": "ᴘꜰᴠ:ᴅɪʀ/ɪᴍᴘ:ᴅɪʀ"
  },
  {
    "character": "𘙝",
    "GX": "nlhə̱¹",
    "GHC": "lhə̱¹",
    "explanationEN": "bag/sack",
    "explanationCN": "皮囊浑脱"
  },
  {
    "character": "𗉣",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "scheme/idea",
    "explanationCN": "意谋"
  },
  {
    "character": "𗎡",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "dawn/daybreak",
    "explanationCN": "黎明"
  },
  {
    "character": "𗙽",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "feelings/sensibilities",
    "explanationCN": "情面"
  },
  {
    "character": "𗉜",
    "GX": "ndze̱¹",
    "GHC": "dze̱j¹",
    "explanationEN": "struggle/fight.for",
    "explanationCN": "争"
  },
  {
    "character": "𘙏",
    "GX": "tsoh¹",
    "GHC": "tsjọ¹",
    "explanationEN": "fat/grease",
    "explanationCN": "脂肪油脂"
  },
  {
    "character": "𘙞",
    "GX": "rźər²",
    "GHC": "źjɨr²",
    "explanationEN": "pulse",
    "explanationCN": "脉"
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
    "explanationEN": "ᴘꜰᴠ:ᴀᴜᴛᴏʙ/ɪᴍᴘ:ᴀᴜᴛᴏʙ",
    "explanationCN": "ᴘꜰᴠ:ᴀᴜᴛᴏʙ/ɪᴍᴘ:ᴀᴜᴛᴏʙ"
  },
  {
    "character": "𗍃",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "a.place.name",
    "explanationCN": "【宥】地名"
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
    "explanationCN": "江河湖"
  },
  {
    "character": "𘘿",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "be.in.very.short.time",
    "explanationCN": "倏"
  },
  {
    "character": "𘙋",
    "GX": "ri̱r¹",
    "GHC": "rer¹",
    "explanationEN": "string/bewstring",
    "explanationCN": "弦"
  },
  {
    "character": "𘙓",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "cut.open",
    "explanationCN": "剖割"
  },
  {
    "character": "𘜍",
    "GX": "ryawr²",
    "GHC": "ꞏja̱r²",
    "explanationEN": "date",
    "explanationCN": "日期"
  },
  {
    "character": "𘝏",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "crane",
    "explanationCN": "鹤"
  },
  {
    "character": "𗳠",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "net",
    "explanationCN": "罘索"
  },
  {
    "character": "𘑷",
    "GX": "?ah²",
    "GHC": "-jạ²",
    "explanationEN": "skilful/clever",
    "explanationCN": "巧善"
  },
  {
    "character": "𗟪",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "fat/grease",
    "explanationCN": "脂膏"
  },
  {
    "character": "𗟬",
    "GX": "lweh²",
    "GHC": "ljwịj²",
    "explanationEN": "hold.or.carry.in.both.hands",
    "explanationCN": "拿"
  },
  {
    "character": "𗵸",
    "GX": "he¹",
    "GHC": "xjij¹",
    "explanationEN": "a.surname",
    "explanationCN": "【轩】【弦】【邢】【宪】【獫】【脛】【蝎】【献】【頡】【忻】"
  },
  {
    "character": "𘅓",
    "GX": "rzo̱ṃr¹",
    "GHC": "zowr¹",
    "explanationEN": "pulse/muscle",
    "explanationCN": "筋脉"
  },
  {
    "character": "𘈃",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "wonderful",
    "explanationCN": "殊妙【珞】"
  },
  {
    "character": "𘔟",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣²",
    "explanationEN": "red",
    "explanationCN": "红赤"
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
    "explanationCN": "圮"
  },
  {
    "character": "𗍑",
    "GX": "ŋkhə¹",
    "GHC": "khjɨ̱¹",
    "explanationEN": "shivery",
    "explanationCN": "战抖"
  },
  {
    "character": "𗉮",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "immediately",
    "explanationCN": "立即"
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
    "explanationEN": "call/say",
    "explanationCN": "召唤言说"
  },
  {
    "character": "𗱃",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "east/end",
    "explanationCN": "东末尾"
  },
  {
    "character": "𗱄",
    "GX": "thəh²",
    "GHC": "thjɨ̣²",
    "explanationEN": "case/outer.coffin",
    "explanationCN": "函椁"
  },
  {
    "character": "𘆅",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "lion",
    "explanationCN": "狮狻"
  },
  {
    "character": "𗷭",
    "GX": "kiṃ¹",
    "GHC": "kjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【金】【今】【斤】【锦】【筋】【紧】【襟】"
  },
  {
    "character": "𘈍",
    "GX": "no̱?",
    "GHC": "no",
    "explanationEN": "a.nation",
    "explanationCN": ""
  },
  {
    "character": "𗸌",
    "GX": "voh²",
    "GHC": "wjọ²",
    "explanationEN": "know.ʙ/be.capable.ʙ",
    "explanationCN": "晓.ʙ"
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
    "explanationEN": "detest",
    "explanationCN": "厌"
  },
  {
    "character": "𗖚",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "report/plan",
    "explanationCN": "连接"
  },
  {
    "character": "𗖬",
    "GX": "rkiwr¹",
    "GHC": "kjiwr¹",
    "explanationEN": "get.worried/get.excited/feel.anxious",
    "explanationCN": "着急"
  },
  {
    "character": "𗖍",
    "GX": "nla¹",
    "GHC": "lja̱¹",
    "explanationEN": "praise/eulogy",
    "explanationCN": "颂偈"
  },
  {
    "character": "𗖫",
    "GX": "nah²",
    "GHC": "njạ²",
    "explanationEN": "help",
    "explanationCN": "助"
  },
  {
    "character": "𘇱",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "witticism",
    "explanationCN": "妙语【靶】"
  },
  {
    "character": "𘇷",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "boil.silk",
    "explanationCN": "练"
  },
  {
    "character": "𗹔",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "oblique,.slanting/inclined",
    "explanationCN": "使斜"
  },
  {
    "character": "𗳄",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "sky/heaven",
    "explanationCN": "霄"
  },
  {
    "character": "𗳊",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "marshland",
    "explanationCN": "泽"
  },
  {
    "character": "𘆎",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "measurement",
    "explanationCN": "衡量"
  },
  {
    "character": "𗙯",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "back",
    "explanationCN": "脊背"
  },
  {
    "character": "𗙩",
    "GX": "hiw¹",
    "GHC": "xjiw¹",
    "explanationEN": "stop/rest",
    "explanationCN": "休】"
  },
  {
    "character": "𘆬",
    "GX": "ṣae̱h¹",
    "GHC": "śiẹj¹",
    "explanationEN": "lameness",
    "explanationCN": "跛瘸"
  },
  {
    "character": "𘇈",
    "GX": "ntaa̱²",
    "GHC": "tia̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【怛】【靼】"
  },
  {
    "character": "𘄬",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "wave/sway/shake",
    "explanationCN": "摇动"
  },
  {
    "character": "𗟿",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "servant",
    "explanationCN": "奴婢佣人"
  },
  {
    "character": "𘜚",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "dare/be.capable",
    "explanationCN": "敢能"
  },
  {
    "character": "𘇊",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "magnificent/gorgeous",
    "explanationCN": "华丽"
  },
  {
    "character": "𗃔",
    "GX": "rtsi̱wr²",
    "GHC": "tsewr²",
    "explanationEN": "axe/hatchet",
    "explanationCN": "斤斧"
  },
  {
    "character": "𘘉",
    "GX": "ŋqae̱¹",
    "GHC": "kie̱j¹",
    "explanationEN": "debt",
    "explanationCN": "欠（欠债）"
  },
  {
    "character": "𗙠",
    "GX": "dẓaa̱¹",
    "GHC": "dźia¹",
    "explanationEN": "noise",
    "explanationCN": "噪音"
  },
  {
    "character": "𗰜",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "origin/root",
    "explanationCN": "根本"
  },
  {
    "character": "𘗨",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "sister",
    "explanationCN": "姊"
  },
  {
    "character": "𗸵",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "season",
    "explanationCN": "季"
  },
  {
    "character": "𘆹",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "grey",
    "explanationCN": "灰色（名）"
  },
  {
    "character": "𘓷",
    "GX": "rqwə̱r¹",
    "GHC": "kwər¹",
    "explanationEN": "body",
    "explanationCN": "体"
  },
  {
    "character": "𗸙",
    "GX": "rtshər¹",
    "GHC": "tshjɨr¹",
    "explanationEN": "cut/slice",
    "explanationCN": "切】"
  },
  {
    "character": "𗉐",
    "GX": "tṣao̱ṃ²",
    "GHC": "tśiow²",
    "explanationEN": "thatched.hut",
    "explanationCN": "草捨"
  },
  {
    "character": "𗳝",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
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
    "explanationEN": "bear.(a.burden)",
    "explanationCN": "负担"
  },
  {
    "character": "𘅰",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "a.surname",
    "explanationCN": "【吴】【乌】【吾】"
  },
  {
    "character": "𘅥",
    "GX": "rtsu̱r¹",
    "GHC": "tsur¹",
    "explanationEN": "suffer.from.an.illness/fall.ill/be.ill",
    "explanationCN": "患病病卒"
  },
  {
    "character": "𘅮",
    "GX": "rtso̱ṃr¹",
    "GHC": "tsowr¹",
    "explanationEN": "pounding/pestle",
    "explanationCN": "堆春动词"
  },
  {
    "character": "𘈮",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj²",
    "explanationEN": "lame",
    "explanationCN": "跛"
  },
  {
    "character": "𗘜",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "be.lame/limp",
    "explanationCN": "瘸（畜生）"
  },
  {
    "character": "𘄧",
    "GX": "γaa̱²",
    "GHC": "ꞏia̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【牙】【呀】【鸦】"
  },
  {
    "character": "𘘂",
    "GX": "tśo?",
    "GHC": "tśjo",
    "explanationEN": "permanent/forever",
    "explanationCN": "永久长常终"
  },
  {
    "character": "𘅷",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "servant",
    "explanationCN": "僕人"
  },
  {
    "character": "𘅚",
    "GX": "de̱ṃ¹",
    "GHC": "dəj¹",
    "explanationEN": "a.surname",
    "explanationCN": "【乃】【代】"
  },
  {
    "character": "𘈆",
    "GX": "rγo̱r¹",
    "GHC": "ɣor¹",
    "explanationEN": "sister-in-law",
    "explanationCN": "蚰娌"
  },
  {
    "character": "𗟯",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "hold.ʙ/grasp.ʙ",
    "explanationCN": "持.ʙ"
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
    "GHC": "lhjụ¹",
    "explanationEN": "belt/a.rope.with.a.hook",
    "explanationCN": "带钩绳"
  },
  {
    "character": "𗉰",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "seek",
    "explanationCN": "追求自励"
  },
  {
    "character": "𘅳",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "a.surname",
    "explanationCN": "【齐】"
  },
  {
    "character": "𘑣",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "a.surname",
    "explanationCN": "【塞】"
  },
  {
    "character": "𘙈",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "meet",
    "explanationCN": "遇"
  },
  {
    "character": "𘚜",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "Tangut",
    "explanationCN": "番夏"
  },
  {
    "character": "𘞏",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "surname.of.a.tribe",
    "explanationCN": "宗姓"
  },
  {
    "character": "𗍞",
    "GX": "ŋŋwə̱¹",
    "GHC": "ŋwə̱¹",
    "explanationEN": "be.greedy.(for.food)/be.gluttonous",
    "explanationCN": "贪食（贪嘴）"
  },
  {
    "character": "𗱇",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "end/east",
    "explanationCN": "末日"
  },
  {
    "character": "𗸔",
    "GX": "ryər²",
    "GHC": "ꞏjɨr²",
    "explanationEN": "stop/rest",
    "explanationCN": "1.歇休【休】【紇】【蚶】"
  },
  {
    "character": "𗖮",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "thatched.hut",
    "explanationCN": "茅捨"
  },
  {
    "character": "𘙻",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "long.and.thin",
    "explanationCN": "细长"
  },
  {
    "character": "𘙹",
    "GX": "ye²",
    "GHC": "ꞏjij²",
    "explanationEN": "sudden.and.violent",
    "explanationCN": "暴"
  },
  {
    "character": "𘛿",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "body/physique",
    "explanationCN": "体格躯"
  },
  {
    "character": "𗳐",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "end/east",
    "explanationCN": "尾末东"
  },
  {
    "character": "𘘁",
    "GX": "nśo²",
    "GHC": "śjo̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【叟】韵字"
  },
  {
    "character": "𗸭",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "quarrel/wrangle",
    "explanationCN": "争吵"
  },
  {
    "character": "𘔌",
    "GX": "dźeh²",
    "GHC": "dźjịj²",
    "explanationEN": "fight/struggle",
    "explanationCN": "争斗"
  },
  {
    "character": "𗉥",
    "GX": "gwe¹",
    "GHC": "gjwij¹",
    "explanationEN": "eating.one’s.fill",
    "explanationCN": "饱"
  },
  {
    "character": "𗖩",
    "GX": "lih¹",
    "GHC": "ljị¹",
    "explanationEN": "quarrel/wrangle",
    "explanationCN": "争吵"
  },
  {
    "character": "𗖯",
    "GX": "γaa̱²",
    "GHC": "ꞏia²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【亚】"
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
    "explanationEN": "under/below/bottom",
    "explanationCN": "底下"
  },
  {
    "character": "𗇻",
    "GX": "ṇae̱ṃ²",
    "GHC": "niəj²",
    "explanationEN": "dirt/filth",
    "explanationCN": "垢"
  },
  {
    "character": "𘞌",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "solid/true",
    "explanationCN": "实"
  },
  {
    "character": "𗕯",
    "GX": "nlo²",
    "GHC": "ljo̱²",
    "explanationEN": "bedding",
    "explanationCN": "卧具"
  },
  {
    "character": "𘒞",
    "GX": "źu¹",
    "GHC": "źju¹",
    "explanationEN": "gather/assemble",
    "explanationCN": "聚集"
  },
  {
    "character": "𗶜",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣",
    "explanationEN": "a.surname",
    "explanationCN": "【貰】【射】【蛇】"
  },
  {
    "character": "𗶟",
    "GX": "mbu̱¹",
    "GHC": "bu̱¹",
    "explanationEN": "etiquette/ceremony.and.propriety",
    "explanationCN": "礼仪【母】【莫】【木】【墓】【步】【牟】【谋】"
  },
  {
    "character": "𗶥",
    "GX": "qai̱w¹",
    "GHC": "kiew¹",
    "explanationEN": "collapse/crumble",
    "explanationCN": "崩塌推毁陷"
  },
  {
    "character": "𗶢",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "anger/rage",
    "explanationCN": "忿怒"
  },
  {
    "character": "𘆍",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "divide/share",
    "explanationCN": "分称"
  },
  {
    "character": "𘞲",
    "GX": "thwe̱¹",
    "GHC": "thwej¹",
    "explanationEN": "support",
    "explanationCN": "支撑"
  },
  {
    "character": "𗇢",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "arduous/difficult/hard/tough",
    "explanationCN": "苦艰苦"
  },
  {
    "character": "𗕍",
    "GX": "rler¹",
    "GHC": "lji̱r¹",
    "explanationEN": "tired/run-down/overworked",
    "explanationCN": "劳累"
  },
  {
    "character": "𗱐",
    "GX": "ntho̱²",
    "GHC": "tho̱²",
    "explanationEN": "draw.(water)",
    "explanationCN": "汲"
  },
  {
    "character": "𗱒",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "a.place.name",
    "explanationCN": "【垠】【崖】【矮】【樱】【靿】"
  },
  {
    "character": "𘔣",
    "GX": "ntha̱¹",
    "GHC": "tha̱¹",
    "explanationEN": "haunt/make.mischief",
    "explanationCN": "作崇"
  },
  {
    "character": "𗈢",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "conceited/restrained",
    "explanationCN": "矜、哀"
  },
  {
    "character": "𗷜",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "send.back/repatriate",
    "explanationCN": "遣除"
  },
  {
    "character": "𗷟",
    "GX": "γa̱ṃ²",
    "GHC": "ɣã²",
    "explanationEN": "drought/dry.spell",
    "explanationCN": "旱】"
  },
  {
    "character": "𗈍",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "ghost/phantom",
    "explanationCN": "魑魅"
  },
  {
    "character": "𗕧",
    "GX": "dwu̱²",
    "GHC": "dwu²",
    "explanationEN": "like/alike",
    "explanationCN": "像似"
  },
  {
    "character": "𗕰",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "pull.out/pull.up",
    "explanationCN": "抽拔"
  },
  {
    "character": "𗱜",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "cotton-padded.mattress",
    "explanationCN": "褥子"
  },
  {
    "character": "𗲇",
    "GX": "vwə̱h¹",
    "GHC": "wə̣¹",
    "explanationEN": "old/aged",
    "explanationCN": "老"
  },
  {
    "character": "𗲏",
    "GX": "nah²",
    "GHC": "njạ²",
    "explanationEN": "anger/rage",
    "explanationCN": "恼"
  },
  {
    "character": "𗲩",
    "GX": "ŋqhwa̱¹",
    "GHC": "khwa̱¹",
    "explanationEN": "curse",
    "explanationCN": "咒蛊"
  },
  {
    "character": "𗹇",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "ghost/an.evil.spirit",
    "explanationCN": "祟"
  },
  {
    "character": "𗱵",
    "GX": "li̱²",
    "GHC": "le²",
    "explanationEN": "boil",
    "explanationCN": "沸"
  },
  {
    "character": "𗇬",
    "GX": "lwa̱ṃ²",
    "GHC": "lwã²",
    "explanationEN": "in.disorder/confused",
    "explanationCN": "【乱】【阑】【蓝】"
  },
  {
    "character": "𗱠",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "pure/refined",
    "explanationCN": "纯精"
  },
  {
    "character": "𘟣",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "exist",
    "explanationCN": "存在"
  },
  {
    "character": "𗱨",
    "GX": "nlu²",
    "GHC": "lju̱²",
    "explanationEN": "bedding",
    "explanationCN": "卧具"
  },
  {
    "character": "𗱪",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "many/more/much",
    "explanationCN": "多【夷】【伊】【逸】"
  },
  {
    "character": "𗲈",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "a.round.flat.piece.of.jade.with.a.hole.in.its.centre",
    "explanationCN": "玉璧"
  },
  {
    "character": "𘒍",
    "GX": "twi̱¹",
    "GHC": "twe¹",
    "explanationEN": "pile.up/heap.up",
    "explanationCN": "堆积】"
  },
  {
    "character": "𘆔",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "return/move.back",
    "explanationCN": "退还"
  },
  {
    "character": "𗘶",
    "GX": "ŋgə¹",
    "GHC": "gjɨ̱¹",
    "explanationEN": "a.sudden.peal.of.thunder",
    "explanationCN": "迅雷【揭】【近】【芨】"
  },
  {
    "character": "𗙧",
    "GX": "rmer¹",
    "GHC": "mjijr¹",
    "explanationEN": "flourishing/prosperous",
    "explanationCN": "盛"
  },
  {
    "character": "𘄊",
    "GX": "li¹",
    "GHC": "lji¹",
    "explanationEN": "prosperous/flourishing",
    "explanationCN": "繁荣【利】【黎】【雒】【驪】【离】【璃】【犁】"
  },
  {
    "character": "𘄌",
    "GX": "teh²",
    "GHC": "tjịj²",
    "explanationEN": "sheep",
    "explanationCN": "羖䍽"
  },
  {
    "character": "𘑥",
    "GX": "tśhu¹",
    "GHC": "tśhju¹",
    "explanationEN": "ghost/phantom",
    "explanationCN": "魅"
  },
  {
    "character": "𘘆",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "old.age/year",
    "explanationCN": "老龄"
  },
  {
    "character": "𗈇",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "north",
    "explanationCN": "北"
  },
  {
    "character": "𗈠",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "wrong/mistaken",
    "explanationCN": "错过谬误"
  },
  {
    "character": "𗈐",
    "GX": "mə̱h¹",
    "GHC": "mə̣¹",
    "explanationEN": "not",
    "explanationCN": "无"
  },
  {
    "character": "𗕣",
    "GX": "tshah¹",
    "GHC": "tshjạ¹",
    "explanationEN": "angry",
    "explanationCN": "嗔怒"
  },
  {
    "character": "𗕭",
    "GX": "rtśhwər¹",
    "GHC": "tśhjwɨr¹",
    "explanationEN": "silly/idiotic/vulgar",
    "explanationCN": "痴俗"
  },
  {
    "character": "𗰮",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "die.young",
    "explanationCN": "夭折逝"
  },
  {
    "character": "𗱻",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "steal/rob",
    "explanationCN": "盗窃"
  },
  {
    "character": "𗲲",
    "GX": "lwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "brightness",
    "explanationCN": "亮"
  },
  {
    "character": "𗲜",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "concave/crooked",
    "explanationCN": "窳凹曲弯"
  },
  {
    "character": "𗲝",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "collapse",
    "explanationCN": "倒塌、粗糙"
  },
  {
    "character": "𗲸",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "make/do",
    "explanationCN": "做办得】"
  },
  {
    "character": "𘒋",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "gather/assemble",
    "explanationCN": "聚集"
  },
  {
    "character": "𘒜",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "feast/banquet",
    "explanationCN": "筵"
  },
  {
    "character": "𗗡",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "dirty/filthy",
    "explanationCN": "脏"
  },
  {
    "character": "𗗠",
    "GX": "nlhaa̱¹",
    "GHC": "lhia̱²",
    "explanationEN": "lick/wipe.away",
    "explanationCN": "舔拭"
  },
  {
    "character": "𘃹",
    "GX": "vwaə̱¹",
    "GHC": "wiə¹",
    "explanationEN": "fertile/rich",
    "explanationCN": "肥沃"
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
    "explanationEN": "platform/objects.shaped.like.a.platform",
    "explanationCN": "【台】【袋】【大】【太】【胎】【泰】"
  },
  {
    "character": "𗕪",
    "GX": "meh¹",
    "GHC": "mjịj¹",
    "explanationEN": "woman/female",
    "explanationCN": "女"
  },
  {
    "character": "𗱼",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "hole/pit",
    "explanationCN": "坑"
  },
  {
    "character": "𗙚",
    "GX": "phiṃ¹",
    "GHC": "phji¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【频】【凭】【聘】"
  },
  {
    "character": "𗰡",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "source/origin/root",
    "explanationCN": "根源"
  },
  {
    "character": "𗰩",
    "GX": "γwo̱ṃh¹",
    "GHC": "ꞏwo¹",
    "explanationEN": "pillow",
    "explanationCN": "枕"
  },
  {
    "character": "𗇹",
    "GX": "qhaa̱ṃ¹",
    "GHC": "kiã¹",
    "explanationEN": "salted/salty",
    "explanationCN": "【硷】【简】"
  },
  {
    "character": "𗕑",
    "GX": "khə²",
    "GHC": "khjɨ²",
    "explanationEN": "ten.thousand",
    "explanationCN": "万【乞】【泣】"
  },
  {
    "character": "𗕠",
    "GX": "qho̱¹",
    "GHC": "kho¹",
    "explanationEN": "a.classifier",
    "explanationCN": "首段"
  },
  {
    "character": "𗱕",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "all/everyone",
    "explanationCN": "诸"
  },
  {
    "character": "𗘧",
    "GX": "rdźir²",
    "GHC": "dźjir²",
    "explanationEN": "butter/cheese",
    "explanationCN": "酥（乳酪）"
  },
  {
    "character": "𗘨",
    "GX": "ndẓae̱ṃ²",
    "GHC": "dźie̱j¹",
    "explanationEN": "a.surname",
    "explanationCN": "【謚】【神】放牧"
  },
  {
    "character": "𗲤",
    "GX": "thə̱¹",
    "GHC": "thə¹",
    "explanationEN": "stone.roller",
    "explanationCN": "碡碌"
  },
  {
    "character": "𗱿",
    "GX": "γwəh¹",
    "GHC": "ɣjwɨ̣¹",
    "explanationEN": "wrestle",
    "explanationCN": "搏鬭相扑摔交"
  },
  {
    "character": "𗲎",
    "GX": "rver²",
    "GHC": "wjijr²",
    "explanationEN": "mill",
    "explanationCN": "磨子"
  },
  {
    "character": "𗕕",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "tooth",
    "explanationCN": "牙齿"
  },
  {
    "character": "𘒓",
    "GX": "rpa̱r¹",
    "GHC": "par¹",
    "explanationEN": "congeal/scar",
    "explanationCN": "凝"
  },
  {
    "character": "𘒝",
    "GX": "tṣhai̱w¹",
    "GHC": "tśhiew¹",
    "explanationEN": "a.unit.of.Tangut.army",
    "explanationCN": "抄"
  },
  {
    "character": "𘝼",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "bed-wetting",
    "explanationCN": "遗尿"
  },
  {
    "character": "𗇯",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "slow/obtuse/dazed",
    "explanationCN": "迟钝昏沉"
  },
  {
    "character": "𗱶",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "slow/obtuse/dazed",
    "explanationCN": "迟钝沉"
  },
  {
    "character": "𗲍",
    "GX": "nllo̱r¹",
    "GHC": "ljo̱r¹",
    "explanationEN": "full/excessive",
    "explanationCN": "满溢超"
  },
  {
    "character": "𘔮",
    "GX": "rvwa̱r²",
    "GHC": "ꞏwar²",
    "explanationEN": "wealth/property",
    "explanationCN": "财物货】"
  },
  {
    "character": "𘔩",
    "GX": "rdwə̱r²",
    "GHC": "dwər²",
    "explanationEN": "drive.away.(a.ghost)",
    "explanationCN": "（不识）"
  },
  {
    "character": "𘆳",
    "GX": "mbai̱¹",
    "GHC": "bie̱¹",
    "explanationEN": "gallop",
    "explanationCN": "驰"
  },
  {
    "character": "𘆲",
    "GX": "tshwu̱¹",
    "GHC": "tshwu¹",
    "explanationEN": "fat/corpulent",
    "explanationCN": "肥胖"
  },
  {
    "character": "𘙩",
    "GX": "tśhi¹",
    "GHC": "tshji¹",
    "explanationEN": "cry/weep",
    "explanationCN": "哭泣"
  },
  {
    "character": "𗲊",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "buttocks",
    "explanationCN": "臀部屁股"
  },
  {
    "character": "𘆑",
    "GX": "gih²",
    "GHC": "gjị²",
    "explanationEN": "depend.on/rely.on",
    "explanationCN": "依靠依避"
  },
  {
    "character": "𗱎",
    "GX": "tṣaa̱¹",
    "GHC": "tśia¹",
    "explanationEN": "branch",
    "explanationCN": "叉杈"
  },
  {
    "character": "𘄔",
    "GX": "pae̱ṃ²",
    "GHC": "piəj²",
    "explanationEN": "flee/escape",
    "explanationCN": "逃遁"
  },
  {
    "character": "𗈡",
    "GX": "rzo̱ṃr¹",
    "GHC": "zowr¹",
    "explanationEN": "sexual.desire/lust",
    "explanationCN": "淫欲"
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
    "GHC": "dzjụ²",
    "explanationEN": "forefathers/ancestry",
    "explanationCN": "祖宗"
  },
  {
    "character": "𘓉",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "herd/graze",
    "explanationCN": "放牧【嘍】"
  },
  {
    "character": "𘆐",
    "GX": "???",
    "GHC": "",
    "explanationEN": "bland/tasteless",
    "explanationCN": "淡"
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
    "explanationEN": "appearance/spirit",
    "explanationCN": "模"
  },
  {
    "character": "𗰔",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "a.surname",
    "explanationCN": "【游】【由】【酉】【要】【右】【有】【腰】【右】【幽】"
  },
  {
    "character": "𘘚",
    "GX": "ndze²",
    "GHC": "dzji̱j²",
    "explanationEN": "teacher/tutor",
    "explanationCN": "师先生"
  },
  {
    "character": "𘜑",
    "GX": "pa̱¹",
    "GHC": "pa¹",
    "explanationEN": "waves",
    "explanationCN": "波】"
  },
  {
    "character": "𗇦",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "calamity/disaster",
    "explanationCN": "灾祸"
  },
  {
    "character": "𗈗",
    "GX": "ndi̱²",
    "GHC": "de̱²",
    "explanationEN": "dirt/filth",
    "explanationCN": "垢秽"
  },
  {
    "character": "𗱝",
    "GX": "dẓwai̱¹",
    "GHC": "dźiwe¹",
    "explanationEN": "echo",
    "explanationCN": "回音"
  },
  {
    "character": "𗍿",
    "GX": "lli̱w¹",
    "GHC": "lew¹",
    "explanationEN": "full/filled/satisfied",
    "explanationCN": "满足"
  },
  {
    "character": "𗘢",
    "GX": "tśheṃ¹",
    "GHC": "tśhjɨj¹",
    "explanationEN": "thin/rare",
    "explanationCN": "稀薄微薄"
  },
  {
    "character": "𗙛",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【律】【类】"
  },
  {
    "character": "𗙙",
    "GX": "qi̱ṃ¹",
    "GHC": "kẽ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【根】【梗】【根】"
  },
  {
    "character": "𗙐",
    "GX": "si̱²",
    "GHC": "se²",
    "explanationEN": "whistle/whistle.(of.human)",
    "explanationCN": "啸哨（吹口哨）名词"
  },
  {
    "character": "𗙇",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "howl",
    "explanationCN": "哀声"
  },
  {
    "character": "𗙟",
    "GX": "ŋġe̱²",
    "GHC": "ge̱j²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【爱】【艾】【哀】"
  },
  {
    "character": "𗙑",
    "GX": "γai̱h²",
    "GHC": "ɣiẹ²",
    "explanationEN": "breath",
    "explanationCN": "气息"
  },
  {
    "character": "𗰠",
    "GX": "nṣai̱¹",
    "GHC": "śie̱¹",
    "explanationEN": "collect/gather",
    "explanationCN": "蒐集"
  },
  {
    "character": "𗰣",
    "GX": "zeh¹",
    "GHC": "zjịj¹",
    "explanationEN": "how.many/how.much",
    "explanationCN": "若干几何许略群众"
  },
  {
    "character": "𘄀",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "a.surname",
    "explanationCN": "【朱】【竺】【诸】【蛛】【猪】【诸】【帚】【主】【竹】【粥】【祝】"
  },
  {
    "character": "𗟲",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "speech/word",
    "explanationCN": "言语词"
  },
  {
    "character": "𘄨",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "bargain",
    "explanationCN": "讨价"
  },
  {
    "character": "𘑚",
    "GX": "???",
    "GHC": "",
    "explanationEN": "rain.and.dew",
    "explanationCN": "雨露"
  },
  {
    "character": "𘓋",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "a.little/a.few",
    "explanationCN": "少许稍微稀略"
  },
  {
    "character": "𘚖",
    "GX": "llwo̱¹",
    "GHC": "lwo¹",
    "explanationEN": "moist/damp",
    "explanationCN": "潮湿"
  },
  {
    "character": "𘞞",
    "GX": "ntṣhaa̱²",
    "GHC": "tśhia̱²",
    "explanationEN": "difficult/hard",
    "explanationCN": "难"
  },
  {
    "character": "𗇠",
    "GX": "bi̱h²",
    "GHC": "bẹ²",
    "explanationEN": "pierce.through/drill",
    "explanationCN": "穿钻"
  },
  {
    "character": "𗘥",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "miscellaneous/mixed",
    "explanationCN": "雑"
  },
  {
    "character": "𗱳",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "super/particular",
    "explanationCN": "超特殊"
  },
  {
    "character": "𗲪",
    "GX": "dźa̱ṃ¹",
    "GHC": "dźã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【船】"
  },
  {
    "character": "𗱷",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "dregs/residue",
    "explanationCN": "渣滓糟粕"
  },
  {
    "character": "𘒅",
    "GX": "źə²",
    "GHC": "źjɨ²",
    "explanationEN": "living.in.peace",
    "explanationCN": "安居"
  },
  {
    "character": "𗍵",
    "GX": "tṣwaa̱¹",
    "GHC": "tśiwa¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【札】运气福气"
  },
  {
    "character": "𗙂",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "drum",
    "explanationCN": "鼕咚】"
  },
  {
    "character": "𗙋",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "harmony/concord",
    "explanationCN": "和睦"
  },
  {
    "character": "𗙡",
    "GX": "rqwa̱r¹",
    "GHC": "kwar¹",
    "explanationEN": "cry/weep/sob",
    "explanationCN": "哭泣"
  },
  {
    "character": "𘑲",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【章】【张】【璋】【账】【獐】"
  },
  {
    "character": "𘟖",
    "GX": "qai̱¹",
    "GHC": "kie¹",
    "explanationEN": "examine/observe",
    "explanationCN": "审察"
  },
  {
    "character": "𗲭",
    "GX": "vwə̱h¹",
    "GHC": "wə̣¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【莴】菜名"
  },
  {
    "character": "𘘠",
    "GX": "mpo̱²",
    "GHC": "po̱²",
    "explanationEN": "I/me",
    "explanationCN": "我"
  },
  {
    "character": "𘝻",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "a.surname",
    "explanationCN": "【郭】【固】【孤】【寇】【广】【国】【谷】【古】"
  },
  {
    "character": "𘟔",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "soft/lithe",
    "explanationCN": "柔软"
  },
  {
    "character": "𗱥",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "moisture",
    "explanationCN": "潮湿淋"
  },
  {
    "character": "𘑦",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "sore.on.a.horse’s.hoofs",
    "explanationCN": "马蹄疮"
  },
  {
    "character": "𗲒",
    "GX": "yeṃ¹",
    "GHC": "ꞏjɨj¹",
    "explanationEN": "groan/moan",
    "explanationCN": "呻吟"
  },
  {
    "character": "𗶘",
    "GX": "tśoh²",
    "GHC": "tśjọ²",
    "explanationEN": "ashamed",
    "explanationCN": "羞愧"
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
    "explanationEN": "masticate/chew",
    "explanationCN": "嚼"
  },
  {
    "character": "𘓶",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "body/physique",
    "explanationCN": "体格"
  },
  {
    "character": "𘙬",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "insect/worm",
    "explanationCN": "昆虫"
  },
  {
    "character": "𗇺",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "fault/offence/sin",
    "explanationCN": "罪过"
  },
  {
    "character": "𘒣",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "speech/word",
    "explanationCN": "言话语"
  },
  {
    "character": "𘆠",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "grayish.white/ashen/off-white",
    "explanationCN": "灰白色"
  },
  {
    "character": "𗈆",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "devil/demon",
    "explanationCN": "鬼魅"
  },
  {
    "character": "𘆾",
    "GX": "dzih¹",
    "GHC": "dzjị¹",
    "explanationEN": "horse’s.teeth/age",
    "explanationCN": "马齿、年龄"
  },
  {
    "character": "𗵹",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "distress/sorrow",
    "explanationCN": "忧伤"
  },
  {
    "character": "𘔬",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "property",
    "explanationCN": "财產"
  },
  {
    "character": "𗷧",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "crawl",
    "explanationCN": "爬行、蠕动【耨】"
  },
  {
    "character": "𘆢",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "mule",
    "explanationCN": "骡"
  },
  {
    "character": "𘆭",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "horse",
    "explanationCN": "马"
  },
  {
    "character": "𘒦",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "truth/reality",
    "explanationCN": "諦真实"
  },
  {
    "character": "𘗩",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "steed/fine.horse",
    "explanationCN": "骏驥"
  },
  {
    "character": "𘇃",
    "GX": "γwu̱h²",
    "GHC": "ꞏwu²",
    "explanationEN": "tie",
    "explanationCN": "栓"
  },
  {
    "character": "𘈡",
    "GX": "qhao̱ṃ¹",
    "GHC": "khiow¹",
    "explanationEN": "body",
    "explanationCN": "躯体"
  },
  {
    "character": "𗘦",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【神】"
  },
  {
    "character": "𗱏",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "choke.oneself",
    "explanationCN": "噎"
  },
  {
    "character": "𗲖",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "broken/fragmentary",
    "explanationCN": "碎"
  },
  {
    "character": "𘒆",
    "GX": "twe̱¹",
    "GHC": "twej¹",
    "explanationEN": "pile.up/accumulate",
    "explanationCN": "累积"
  },
  {
    "character": "𗕢",
    "GX": "khə²",
    "GHC": "khjɨ²",
    "explanationEN": "owlet",
    "explanationCN": "鵂鶹"
  },
  {
    "character": "𗌲",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "flag/banner",
    "explanationCN": "旗帜"
  },
  {
    "character": "𗷝",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "ɴᴇɢ.ᴘꜰᴠ",
    "explanationCN": "ɴᴇɢ.ᴘꜰᴠ"
  },
  {
    "character": "𗷙",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "colt",
    "explanationCN": "驹"
  },
  {
    "character": "𘑩",
    "GX": "lloh²",
    "GHC": "ljọ²",
    "explanationEN": "combine/unite",
    "explanationCN": "结合"
  },
  {
    "character": "𗇮",
    "GX": "rə̱r²",
    "GHC": "rar²",
    "explanationEN": "shadow/reflection",
    "explanationCN": "影"
  },
  {
    "character": "𗈀",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "fall/sink",
    "explanationCN": "堕落失"
  },
  {
    "character": "𗇾",
    "GX": "do̱ṃ²",
    "GHC": "dow²",
    "explanationEN": "move/stir",
    "explanationCN": "动】"
  },
  {
    "character": "𗘤",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "marriage/marry",
    "explanationCN": "婚姻（婚配）动词"
  },
  {
    "character": "𗱚",
    "GX": "ndzu²",
    "GHC": "dzju̱²",
    "explanationEN": "hide",
    "explanationCN": "隐藏匿"
  },
  {
    "character": "𗱲",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【】（）"
  },
  {
    "character": "𗱦",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "aerolite",
    "explanationCN": "陨石神石"
  },
  {
    "character": "𗱸",
    "GX": "llu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "stone/rock",
    "explanationCN": "石"
  },
  {
    "character": "𗲉",
    "GX": "dźo²",
    "GHC": "dźjo²",
    "explanationEN": "exist.ʙ(animate)/.have.ʙ",
    "explanationCN": "to exist.ʙ（有生命的）; 拥有。"
  },
  {
    "character": "𗲣",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "a.necklace.made.by.jewellery",
    "explanationCN": "瓔"
  },
  {
    "character": "𗲙",
    "GX": "dźwi¹",
    "GHC": "dźjwi¹",
    "explanationEN": "woolens",
    "explanationCN": "毛料"
  },
  {
    "character": "𗲹",
    "GX": "nlu¹",
    "GHC": "lhju¹",
    "explanationEN": "stingy/miserly/grudge",
    "explanationCN": "慳吝吝嗇吝惜"
  },
  {
    "character": "𗗘",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "sweet",
    "explanationCN": "甘"
  },
  {
    "character": "𗘟",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "holy/virtuous.and.able",
    "explanationCN": "圣贤"
  },
  {
    "character": "𗙆",
    "GX": "haa̱¹",
    "GHC": "xia¹",
    "explanationEN": "blocked",
    "explanationCN": "塞"
  },
  {
    "character": "𗎁",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "a.surname",
    "explanationCN": "【日】【利】"
  },
  {
    "character": "𗙮",
    "GX": "tśhwə¹",
    "GHC": "tśhjwɨ¹",
    "explanationEN": "foot.mark/footprint",
    "explanationCN": "脚跡"
  },
  {
    "character": "𗰗",
    "GX": "γa̱h²",
    "GHC": "ɣạ²",
    "explanationEN": "ten",
    "explanationCN": "十"
  },
  {
    "character": "𘄄",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "man/male",
    "explanationCN": "男雄子"
  },
  {
    "character": "𘒃",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "stove/furnace",
    "explanationCN": "【炉】庐】【路】【农】【论】"
  },
  {
    "character": "𘘝",
    "GX": "ndze²",
    "GHC": "dzji̱j²",
    "explanationEN": "teach/instruct",
    "explanationCN": "教"
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
    "explanationEN": "take.a.wife",
    "explanationCN": "娶妻"
  },
  {
    "character": "𗕲",
    "GX": "rtśhwər¹",
    "GHC": "tśhjwɨr¹",
    "explanationEN": "flog/beat/torture",
    "explanationCN": "拷打"
  },
  {
    "character": "𗱩",
    "GX": "nwe¹",
    "GHC": "njwij¹",
    "explanationEN": "obstruct/block/choke.up",
    "explanationCN": "阻塞噎"
  },
  {
    "character": "𗱽",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "prepare/get.ready",
    "explanationCN": "准备"
  },
  {
    "character": "𗲞",
    "GX": "ra̱r¹",
    "GHC": "rar¹",
    "explanationEN": "hill/mountain",
    "explanationCN": "山"
  },
  {
    "character": "𘒊",
    "GX": "źə²",
    "GHC": "źjɨ²",
    "explanationEN": "go.without.a.burden",
    "explanationCN": "轻往"
  },
  {
    "character": "𘒗",
    "GX": "paa̱ṃ¹",
    "GHC": "piã¹",
    "explanationEN": "front.tooth/incisor",
    "explanationCN": "门牙"
  },
  {
    "character": "𗌳",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "pretty/beautiful",
    "explanationCN": "美丽彩"
  },
  {
    "character": "𗰘",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "entertaimnent/recreation",
    "explanationCN": "游戏娱乐"
  },
  {
    "character": "𘄫",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "kick",
    "explanationCN": "鞠蹴"
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
    "explanationEN": "pay.one’s.debt",
    "explanationCN": "偿还"
  },
  {
    "character": "𗗟",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "ꜰᴜᴛ",
    "explanationCN": "ꜰᴜᴛ"
  },
  {
    "character": "𗙪",
    "GX": "kaṃ¹",
    "GHC": "kjã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【坚】【健】【根】"
  },
  {
    "character": "𗘩",
    "GX": "rnə̱r²",
    "GHC": "nər²",
    "explanationEN": "yellow",
    "explanationCN": "黄"
  },
  {
    "character": "𗈟",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "wild.goat",
    "explanationCN": "野羊"
  },
  {
    "character": "𘓯",
    "GX": "khoṃ¹",
    "GHC": "khjow¹",
    "explanationEN": "grant.ᴀ",
    "explanationCN": "授予.ᴀ"
  },
  {
    "character": "𘴇",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "swallow",
    "explanationCN": "燕子"
  },
  {
    "character": "𘓱",
    "GX": "ŋwə̱¹",
    "GHC": "ŋwə¹",
    "explanationEN": "heaven",
    "explanationCN": "天皇"
  },
  {
    "character": "𘓵",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "witch/shaman/wizard",
    "explanationCN": "覡（男巫）】"
  },
  {
    "character": "𗲽",
    "GX": "ryer¹",
    "GHC": "ꞏjijr¹",
    "explanationEN": "pull.out/dredge.up",
    "explanationCN": "拔捞"
  },
  {
    "character": "𗈑",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "hard.punishment",
    "explanationCN": "苦罚"
  },
  {
    "character": "𗲐",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "dangerous/perilous",
    "explanationCN": "危险"
  },
  {
    "character": "𗷪",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "exert/try.hard",
    "explanationCN": "努】"
  },
  {
    "character": "𘆫",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "comfort/appease",
    "explanationCN": "安抚拂慰"
  },
  {
    "character": "𘆺",
    "GX": "bai̱²",
    "GHC": "bie²",
    "explanationEN": "chestnut.brown",
    "explanationCN": "栗色棕色"
  },
  {
    "character": "𘆽",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "horse",
    "explanationCN": "马玛午"
  },
  {
    "character": "𘇞",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "fur/leather",
    "explanationCN": "皮】"
  },
  {
    "character": "𘒪",
    "GX": "ndu¹",
    "GHC": "dju̱¹",
    "explanationEN": "argue/pick.a.quarrel",
    "explanationCN": "寻衅"
  },
  {
    "character": "𘞂",
    "GX": "ndzə²",
    "GHC": "dzjɨ̱²",
    "explanationEN": "practice/exercise/review",
    "explanationCN": "学习"
  },
  {
    "character": "𘇇",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "elephant",
    "explanationCN": "大象"
  },
  {
    "character": "𗷫",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "annoyance",
    "explanationCN": "恼"
  },
  {
    "character": "𘇜",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "a.surname",
    "explanationCN": "【皮】【盃】【毗】"
  },
  {
    "character": "𗲵",
    "GX": "li̱²",
    "GHC": "le²",
    "explanationEN": "gourd.ladle",
    "explanationCN": "瓢"
  },
  {
    "character": "𗙤",
    "GX": "piṃ¹",
    "GHC": "pjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【冰】【臏】【毕】【比】【彪】"
  },
  {
    "character": "𗘻",
    "GX": "doh¹",
    "GHC": "djọ¹",
    "explanationEN": "a.sorrowfull.sigh",
    "explanationCN": "悲叹"
  },
  {
    "character": "𗰤",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "clear/obvious/plain",
    "explanationCN": "明白分明"
  },
  {
    "character": "𗰧",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r¹",
    "explanationEN": "a.unit.of.length",
    "explanationCN": "丈"
  },
  {
    "character": "𗕩",
    "GX": "lwuh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "mixed/harmonious",
    "explanationCN": "合"
  },
  {
    "character": "𗘾",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "conch",
    "explanationCN": "螺"
  },
  {
    "character": "𗙉",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "choke.oneself",
    "explanationCN": "噎"
  },
  {
    "character": "𘒢",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "gruel/porridge",
    "explanationCN": "粥"
  },
  {
    "character": "𗶗",
    "GX": "tśoh²",
    "GHC": "tśjọ²",
    "explanationEN": "heavy",
    "explanationCN": "重】"
  },
  {
    "character": "𘑧",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "dried.meat",
    "explanationCN": "脩】"
  },
  {
    "character": "𘇢",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "mix/blend",
    "explanationCN": "和合"
  },
  {
    "character": "𗸤",
    "GX": "ti̱ṃ¹",
    "GHC": "tẽ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【等】【灯】【鐙】"
  },
  {
    "character": "𘆣",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "centre/middle",
    "explanationCN": "中"
  },
  {
    "character": "𘇂",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "MED:medioesive./middle",
    "explanationCN": "MED ;中间"
  },
  {
    "character": "𗘪",
    "GX": "lhi̱w¹",
    "GHC": "lhew¹",
    "explanationEN": "clan",
    "explanationCN": "族"
  },
  {
    "character": "𗟾",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "cry/weep",
    "explanationCN": "哭"
  },
  {
    "character": "𗗙",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "ɢᴇɴ/ᴀɴᴛɪᴇʀɢ",
    "explanationCN": "ɢᴇɴ/ᴀɴᴛɪᴇʀɢ"
  },
  {
    "character": "𗘿",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "well-balanced/short",
    "explanationCN": "匀矮"
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
    "GHC": "lji²",
    "explanationEN": "a.surname",
    "explanationCN": "【李】【利】【吏】【礼】【里】【歷】【丽】【鲤】【蠡】【隶】"
  },
  {
    "character": "𗇤",
    "GX": "tswa̱¹",
    "GHC": "tswa¹",
    "explanationEN": "fall/throw",
    "explanationCN": "坠丢"
  },
  {
    "character": "𗇪",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "hair",
    "explanationCN": "头髮"
  },
  {
    "character": "𗇵",
    "GX": "lhwi²",
    "GHC": "lhjwi²",
    "explanationEN": "old/outdated",
    "explanationCN": "旧"
  },
  {
    "character": "𗇷",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "tattered",
    "explanationCN": "破烂"
  },
  {
    "character": "𗇫",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "build.ᴀ/cure.ᴀ",
    "explanationCN": "修治.ᴀ"
  },
  {
    "character": "𗕌",
    "GX": "źiṃ¹",
    "GHC": "źjĩ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【任】【人】【壬】【仁】"
  },
  {
    "character": "𘄓",
    "GX": "pae̱ṃ²",
    "GHC": "piəj²",
    "explanationEN": "a.kind.of.animal",
    "explanationCN": "【獱】兽名"
  },
  {
    "character": "𗕖",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "observe/watch",
    "explanationCN": "观察"
  },
  {
    "character": "𘅾",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "leisure/free.time",
    "explanationCN": "暇"
  },
  {
    "character": "𘒁",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "centre/middle",
    "explanationCN": "交叉"
  },
  {
    "character": "𘘤",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "skin/fur",
    "explanationCN": "皮"
  },
  {
    "character": "𗱖",
    "GX": "źwu²",
    "GHC": "źjwu²",
    "explanationEN": "a.kind.of.clothes",
    "explanationCN": "襴"
  },
  {
    "character": "𗱡",
    "GX": "źwu²",
    "GHC": "źjwu²",
    "explanationEN": "a.surname",
    "explanationCN": "【如】【肉】【弱】【褥】，"
  },
  {
    "character": "𘞹",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "prepare",
    "explanationCN": "準备"
  },
  {
    "character": "𗱯",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "press/oppress",
    "explanationCN": "压"
  },
  {
    "character": "𗇡",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "one.of.the.five.two-hour.periods.inwhich.the.night.was.formerly.divided/watch",
    "explanationCN": "更"
  },
  {
    "character": "𗇥",
    "GX": "???",
    "GHC": "",
    "explanationEN": "inclined.one.side/slanting",
    "explanationCN": "偏邪"
  },
  {
    "character": "𗈜",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "separate/sever",
    "explanationCN": "分离"
  },
  {
    "character": "𗈧",
    "GX": "śeh¹",
    "GHC": "śjịj¹",
    "explanationEN": "ghost",
    "explanationCN": "鬼"
  },
  {
    "character": "𗱴",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "mill/millstones",
    "explanationCN": "磑（磨）】"
  },
  {
    "character": "𗲃",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "rely.on",
    "explanationCN": "依"
  },
  {
    "character": "𗲱",
    "GX": "tṣhao̱ṃ²",
    "GHC": "tśhjow²",
    "explanationEN": "red.sand",
    "explanationCN": "赤沙【仲】"
  },
  {
    "character": "𗲴",
    "GX": "luh¹",
    "GHC": "ljụ¹",
    "explanationEN": "rub/knead",
    "explanationCN": "揉搓"
  },
  {
    "character": "𗲼",
    "GX": "twə¹",
    "GHC": "tsjwɨ¹",
    "explanationEN": "knead/rub",
    "explanationCN": "搓揉"
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
    "explanationEN": "swear/pledge",
    "explanationCN": "誓赌咒"
  },
  {
    "character": "𗗯",
    "GX": "tśe²",
    "GHC": "tśjij²",
    "explanationEN": "dog",
    "explanationCN": "狗【整】【敕】【贞】【政】"
  },
  {
    "character": "𗵿",
    "GX": "mbi̱²",
    "GHC": "be̱²",
    "explanationEN": "eyebrow/brow",
    "explanationCN": "眉【默】"
  },
  {
    "character": "𗶍",
    "GX": "mbi̱²",
    "GHC": "be̱²",
    "explanationEN": "ghost",
    "explanationCN": "鬼魅【默】"
  },
  {
    "character": "𘅕",
    "GX": "zo̱ṃ¹",
    "GHC": "zow¹",
    "explanationEN": "be.undivided",
    "explanationCN": "未分"
  },
  {
    "character": "𘝌",
    "GX": "leṃh¹",
    "GHC": "ljɨ̣j¹",
    "explanationEN": "evil.spirit/demon",
    "explanationCN": "魑魎"
  },
  {
    "character": "𘗪",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "deceive/cheat",
    "explanationCN": "欺骗"
  },
  {
    "character": "𘆕",
    "GX": "ŋga̱²",
    "GHC": "ga̱²",
    "explanationEN": "thin",
    "explanationCN": "瘦"
  },
  {
    "character": "𗈏",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "toil/hard.work",
    "explanationCN": "劳苦"
  },
  {
    "character": "𗇨",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "end",
    "explanationCN": "末尾"
  },
  {
    "character": "𗇧",
    "GX": "qhə̱²",
    "GHC": "khə²",
    "explanationEN": "horse.disease",
    "explanationCN": "马病"
  },
  {
    "character": "𗈨",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "dig",
    "explanationCN": "掘"
  },
  {
    "character": "𗈤",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "tattered/ragged",
    "explanationCN": "破烂"
  },
  {
    "character": "𗕗",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "adore/admire",
    "explanationCN": "爱慕"
  },
  {
    "character": "𘅣",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "matter/affair/thing",
    "explanationCN": "事"
  },
  {
    "character": "𘑴",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "bag/pocket",
    "explanationCN": "囊"
  },
  {
    "character": "𘞻",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "wan.and.sallow/thin.and.pallid",
    "explanationCN": "憔悴"
  },
  {
    "character": "𘒟",
    "GX": "ẓuo¹",
    "GHC": "źio̱w¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【殊】【銖】"
  },
  {
    "character": "𗈎",
    "GX": "???",
    "GHC": "",
    "explanationEN": "disease/sickness/illness",
    "explanationCN": "疾病"
  },
  {
    "character": "𗇱",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "ovum/egg",
    "explanationCN": "卵"
  },
  {
    "character": "𗇼",
    "GX": "gwaṃ²",
    "GHC": "gjwã²",
    "explanationEN": "goat",
    "explanationCN": "顽羊"
  },
  {
    "character": "𗕫",
    "GX": "ru̱r²",
    "GHC": "rur²",
    "explanationEN": "like/love",
    "explanationCN": "喜爱"
  },
  {
    "character": "𗕳",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "change/vary",
    "explanationCN": "变化变幻"
  },
  {
    "character": "𗘫",
    "GX": "nlu¹",
    "GHC": "lju̱¹",
    "explanationEN": "fall.scatteredly/be.far.apart",
    "explanationCN": "散落"
  },
  {
    "character": "𗍚",
    "GX": "rza̱r¹",
    "GHC": "zar¹",
    "explanationEN": "ashamed/abashed",
    "explanationCN": "羞愧"
  },
  {
    "character": "𗕝",
    "GX": "phəh¹",
    "GHC": "phjɨ̣¹",
    "explanationEN": "contract/reduce",
    "explanationCN": "自缩"
  },
  {
    "character": "𗗵",
    "GX": "qhai̱²",
    "GHC": "khie²",
    "explanationEN": "yak",
    "explanationCN": "犛牛"
  },
  {
    "character": "𘈕",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "drive.away/brush.away",
    "explanationCN": "驱赶"
  },
  {
    "character": "𘙆",
    "GX": "vwaə̱²",
    "GHC": "wiə¹",
    "explanationEN": "fat/grease",
    "explanationCN": "脂肪"
  },
  {
    "character": "𗕞",
    "GX": "ndzo̱²",
    "GHC": "dzo̱²",
    "explanationEN": "ride",
    "explanationCN": "骑乘"
  },
  {
    "character": "𘒘",
    "GX": "paa̱ṃ¹",
    "GHC": "piã¹",
    "explanationEN": "assist",
    "explanationCN": "辅助【班】【巴】【把】【攀】"
  },
  {
    "character": "𗘂",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "dog",
    "explanationCN": "犬狗"
  },
  {
    "character": "𗍈",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "eyelid",
    "explanationCN": "瞼"
  },
  {
    "character": "𗈘",
    "GX": "hwi̱ṃ²",
    "GHC": "xwẽ²",
    "explanationEN": "devil/demon",
    "explanationCN": "魔鬼"
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
    "explanationCN": "面情"
  },
  {
    "character": "𘄥",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "evil/heretical",
    "explanationCN": "邪"
  },
  {
    "character": "𗇴",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "disease/illness",
    "explanationCN": "疾病"
  },
  {
    "character": "𗈞",
    "GX": "rdzar²",
    "GHC": "dzjar²",
    "explanationEN": "extinguish/eliminate",
    "explanationCN": "灭绝尽"
  },
  {
    "character": "𗲁",
    "GX": "tṣaa̱¹",
    "GHC": "tśia¹",
    "explanationEN": "collapse",
    "explanationCN": "倒塌【札】【吒】【宅】【笊】【盏】"
  },
  {
    "character": "𗲶",
    "GX": "tṣai̱w¹",
    "GHC": "tśiew¹",
    "explanationEN": "pad",
    "explanationCN": "垫（草）"
  },
  {
    "character": "𗈈",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "egg/ovum",
    "explanationCN": "卵蛋"
  },
  {
    "character": "𗲷",
    "GX": "ŋŋwu̱²",
    "GHC": "ŋwu̱²",
    "explanationEN": "fragrant",
    "explanationCN": "芬芳"
  },
  {
    "character": "𘙧",
    "GX": "gwi¹",
    "GHC": "gjwi¹",
    "explanationEN": "fur.coat",
    "explanationCN": "裘"
  },
  {
    "character": "𘘨",
    "GX": "zəh²",
    "GHC": "zjɨ̣²",
    "explanationEN": "proud/arrogant",
    "explanationCN": "骄傲"
  },
  {
    "character": "𗡷",
    "GX": "ṇo̱ṃ²",
    "GHC": "niow²",
    "explanationEN": "wonderful",
    "explanationCN": "妙【娘】"
  },
  {
    "character": "𗇰",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "think.of/be.long.for",
    "explanationCN": "思念"
  },
  {
    "character": "𗕚",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "ten.thousand",
    "explanationCN": "万"
  },
  {
    "character": "𘅉",
    "GX": "te¹",
    "GHC": "tjij¹",
    "explanationEN": "chapter/grade/rank",
    "explanationCN": "品"
  },
  {
    "character": "𘜇",
    "GX": "tṣhao̱¹",
    "GHC": "tśhio¹",
    "explanationEN": "a.surname",
    "explanationCN": "【崇】【众】【濯】【疮】【状】【窗】【幢】【浊】"
  },
  {
    "character": "𗘈",
    "GX": "rŋwi̱r²",
    "GHC": "ŋwer²",
    "explanationEN": "slack/lax/dirty",
    "explanationCN": "懈脏"
  },
  {
    "character": "𗸯",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "benevolence/humanity",
    "explanationCN": "仁"
  },
  {
    "character": "𘙗",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "enough/sufficient",
    "explanationCN": "够"
  },
  {
    "character": "𘝿",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "proverb/saying",
    "explanationCN": "谚语"
  },
  {
    "character": "𘜼",
    "GX": "mpho²",
    "GHC": "phjo̱²",
    "explanationEN": "gentle/harmonious",
    "explanationCN": "合"
  },
  {
    "character": "𘜞",
    "GX": "tse̱²",
    "GHC": "tsej²",
    "explanationEN": "temporary",
    "explanationCN": "暂时须臾"
  },
  {
    "character": "𗈁",
    "GX": "nvu¹",
    "GHC": "wju̱¹",
    "explanationEN": "sad/sorrowful",
    "explanationCN": "悲愍"
  },
  {
    "character": "𗱟",
    "GX": "???",
    "GHC": "",
    "explanationEN": "hide/conceal",
    "explanationCN": "隠伏"
  },
  {
    "character": "𗱭",
    "GX": "śiw²",
    "GHC": "śjiw²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【守】【首】【少】【修】【绍】【寿】【兽】【手】【受】【劭】【狩】【收】【首】"
  },
  {
    "character": "𗲂",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "bake",
    "explanationCN": "烙"
  },
  {
    "character": "𘆓",
    "GX": "lha²",
    "GHC": "lhja²",
    "explanationEN": "soft/lithe",
    "explanationCN": "柔软"
  },
  {
    "character": "𗌴",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "junket/fruit.jelly",
    "explanationCN": "酪浆"
  },
  {
    "character": "𘘓",
    "GX": "qhwe̱¹",
    "GHC": "khwej¹",
    "explanationEN": "expand/spread/luxuriant/lush",
    "explanationCN": "扩展丰茂形容词"
  },
  {
    "character": "𗶐",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "younger.sister",
    "explanationCN": "妹】"
  },
  {
    "character": "𗰫",
    "GX": "to̱¹",
    "GHC": "to¹",
    "explanationEN": "dark/black",
    "explanationCN": "黑暗"
  },
  {
    "character": "𘄱",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【殿】【电】【】【田】【天】【甜】【廷】【定】【恬】"
  },
  {
    "character": "𘔗",
    "GX": "ṇiṃ¹",
    "GHC": "njĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【嚀】"
  },
  {
    "character": "𘔛",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣²",
    "explanationEN": "red",
    "explanationCN": "赤色"
  },
  {
    "character": "𘑠",
    "GX": "rvwo̱r²",
    "GHC": "wor²",
    "explanationEN": "calf",
    "explanationCN": "犊"
  },
  {
    "character": "𘘸",
    "GX": "ŋgi²",
    "GHC": "gji̱²",
    "explanationEN": "full/plump",
    "explanationCN": "饱满"
  },
  {
    "character": "𘘷",
    "GX": "rvwai̱r¹",
    "GHC": "wier¹",
    "explanationEN": "man/male/boy",
    "explanationCN": "男"
  },
  {
    "character": "𘙘",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "singing.aloud",
    "explanationCN": "高歌"
  },
  {
    "character": "𘞁",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "children",
    "explanationCN": "儿童【利】【吏】【隶】"
  },
  {
    "character": "𘝋",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "wing",
    "explanationCN": "翅翼"
  },
  {
    "character": "𗱣",
    "GX": "nvi¹",
    "GHC": "wji̱¹",
    "explanationEN": "hide/conceal",
    "explanationCN": "隠逸"
  },
  {
    "character": "𗕓",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "still/quiet",
    "explanationCN": "静"
  },
  {
    "character": "𘝵",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "self",
    "explanationCN": "己"
  },
  {
    "character": "𗕙",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "conceited/arrogant",
    "explanationCN": "矜高骄傲"
  },
  {
    "character": "𗕘",
    "GX": "ŋə̱¹",
    "GHC": "ŋə¹",
    "explanationEN": "I/me",
    "explanationCN": "我】"
  },
  {
    "character": "𗲚",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "grave/tomb",
    "explanationCN": "坟墓尸场"
  },
  {
    "character": "𗉩",
    "GX": "ŋgo¹",
    "GHC": "gjo̱¹",
    "explanationEN": "bite",
    "explanationCN": "咬】"
  },
  {
    "character": "𗉓",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "house/building",
    "explanationCN": "房屋"
  },
  {
    "character": "𗰯",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "flatter/fawn.on",
    "explanationCN": "恭维奉承"
  },
  {
    "character": "𗕐",
    "GX": "kəh¹",
    "GHC": "kjɨ̣¹",
    "explanationEN": "fear.ʙ",
    "explanationCN": "恐惧。"
  },
  {
    "character": "𗱑",
    "GX": "tśiw²",
    "GHC": "tśjiw²",
    "explanationEN": "burnt/charred",
    "explanationCN": "糊焦"
  },
  {
    "character": "𗲳",
    "GX": "rdźwər²",
    "GHC": "dźjwɨr¹",
    "explanationEN": "mill/millstones",
    "explanationCN": "磑磨"
  },
  {
    "character": "𘒄",
    "GX": "tṣhao̱¹",
    "GHC": "tśhio¹",
    "explanationEN": "formation",
    "explanationCN": "队列"
  },
  {
    "character": "𗶆",
    "GX": "γwa̱¹",
    "GHC": "ɣwa¹",
    "explanationEN": "clever.wife",
    "explanationCN": "巧妇"
  },
  {
    "character": "𗸪",
    "GX": "ryar¹",
    "GHC": "ꞏjar¹",
    "explanationEN": "the.eighth",
    "explanationCN": "第八"
  },
  {
    "character": "𗸰",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【多】【董】【党】"
  },
  {
    "character": "𗉋",
    "GX": "tṣao̱ṃ¹",
    "GHC": "tśiow¹",
    "explanationEN": "gather/assemble",
    "explanationCN": "聚集【桌】【卓】【蒺】【涿】【庄】【淖】"
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
    "GHC": "djị¹",
    "explanationEN": "mad/insane",
    "explanationCN": "疯狂"
  },
  {
    "character": "𗉛",
    "GX": "źih¹",
    "GHC": "źjị¹",
    "explanationEN": "vexed/worried",
    "explanationCN": "烦恼"
  },
  {
    "character": "𗉫",
    "GX": "ŋqhe̱¹",
    "GHC": "khe̱j¹",
    "explanationEN": "recreation/game",
    "explanationCN": "游戏"
  },
  {
    "character": "𗰰",
    "GX": "rkir²",
    "GHC": "kjir²",
    "explanationEN": "a.surname",
    "explanationCN": "【葛】双"
  },
  {
    "character": "𘟡",
    "GX": "lho²",
    "GHC": "lhə",
    "explanationEN": "butter/cheese",
    "explanationCN": "酥油"
  },
  {
    "character": "𘔊",
    "GX": "paə̱¹",
    "GHC": "piə¹",
    "explanationEN": "gorgeous/magnificent",
    "explanationCN": "絇丽"
  },
  {
    "character": "𗈕",
    "GX": "ẓai̱²",
    "GHC": "",
    "explanationEN": "boil.in.a.covered.pot.over.a.slow.fire/braise",
    "explanationCN": "在有盖的锅中用慢火煮;炖"
  },
  {
    "character": "𗈊",
    "GX": "ẓai̱²",
    "GHC": "źie²",
    "explanationEN": "boil.in.a.covered.pot.over.a.slow.fire/braise",
    "explanationCN": "在有盖的锅中用慢火煮;炖"
  },
  {
    "character": "𗕤",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "seek.for.happiness",
    "explanationCN": "欢"
  },
  {
    "character": "𗌾",
    "GX": "thwə²",
    "GHC": "thjwɨ²",
    "explanationEN": "combine/concentrate",
    "explanationCN": "结合结集"
  },
  {
    "character": "𗱓",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣²",
    "explanationEN": "close/intimate",
    "explanationCN": "亲近"
  },
  {
    "character": "𗱰",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "milk.dregs",
    "explanationCN": "乳渣"
  },
  {
    "character": "𗍜",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "broad/wide/shallow",
    "explanationCN": "寛浅"
  },
  {
    "character": "𘄟",
    "GX": "tsha̱²",
    "GHC": "tsha²",
    "explanationEN": "wisdom",
    "explanationCN": "智识智慧"
  },
  {
    "character": "𗟭",
    "GX": "vwo̱²",
    "GHC": "wo²",
    "explanationEN": "should/ought.to",
    "explanationCN": "1.应可、也可加在名词之后，具有“宜”义、可作名词“理”用"
  },
  {
    "character": "𘓨",
    "GX": "ro̱r²",
    "GHC": "ror²",
    "explanationEN": "dirt/filth",
    "explanationCN": "垢"
  },
  {
    "character": "𗗸",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "eddy/whirlpool",
    "explanationCN": "涡】"
  },
  {
    "character": "𗳘",
    "GX": "ŋwi̱¹",
    "GHC": "ŋwe¹",
    "explanationEN": "be.willing",
    "explanationCN": "乐意、愿"
  },
  {
    "character": "𘘣",
    "GX": "yə²",
    "GHC": "ꞏjɨ²",
    "explanationEN": "say/【姨】【以】【已】【依】【医】【驛】【野】【夷】【邑】",
    "explanationCN": "说【姨】【以】【已】【依】【医】【驛】【野】【夷】【邑】"
  },
  {
    "character": "𘘥",
    "GX": "yə¹",
    "GHC": "ꞏjɨ¹",
    "explanationEN": "say/call",
    "explanationCN": "说"
  },
  {
    "character": "𘙿",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "shaman/wizard",
    "explanationCN": "巫"
  },
  {
    "character": "𘝇",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "gentle/harmonious",
    "explanationCN": "合"
  },
  {
    "character": "𗱧",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "think.of/miss",
    "explanationCN": "思念"
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
    "explanationEN": "devil/demon",
    "explanationCN": "鬼怪"
  },
  {
    "character": "𗟠",
    "GX": "dźu¹",
    "GHC": "dźju¹",
    "explanationEN": "prepare/plan",
    "explanationCN": "筹算"
  },
  {
    "character": "𘄤",
    "GX": "phəh¹",
    "GHC": "phjɨ̣¹",
    "explanationEN": "aphorism/motto",
    "explanationCN": "妙语格言"
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
    "explanationEN": "drive",
    "explanationCN": "【棋】【箕】"
  },
  {
    "character": "𘄻",
    "GX": "lwa¹",
    "GHC": "ljwa¹",
    "explanationEN": "lower.limbs/legs",
    "explanationCN": "下肢"
  },
  {
    "character": "𗡪",
    "GX": "tsi̱w²",
    "GHC": "tsew²",
    "explanationEN": "limitation/ordinal",
    "explanationCN": "限；序数词缀"
  },
  {
    "character": "𗕵",
    "GX": "dźwaw¹",
    "GHC": "dźjwa̱¹",
    "explanationEN": "burst/split",
    "explanationCN": "破裂"
  },
  {
    "character": "𗰬",
    "GX": "to̱¹",
    "GHC": "to¹",
    "explanationEN": "a.surname",
    "explanationCN": "【篤】【哆】"
  },
  {
    "character": "𗸮",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "host/master",
    "explanationCN": "主"
  },
  {
    "character": "𘈄",
    "GX": "ntśə¹",
    "GHC": "tśjɨ̱¹",
    "explanationEN": "embroider",
    "explanationCN": "綉"
  },
  {
    "character": "𘅢",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "sit.cross-legged",
    "explanationCN": "跏趺"
  },
  {
    "character": "𘄵",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "leisure/free.time",
    "explanationCN": "空暇"
  },
  {
    "character": "𗈂",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "pot/jar",
    "explanationCN": "罐"
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
    "explanationEN": "a.surname",
    "explanationCN": "【塔】【道】"
  },
  {
    "character": "𗱞",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "aerolite",
    "explanationCN": "陨石神石"
  },
  {
    "character": "𗱮",
    "GX": "teṃh¹",
    "GHC": "tjɨj¹",
    "explanationEN": "fry.batter.in.a.thin.layer",
    "explanationCN": "摊"
  },
  {
    "character": "𗲔",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "pancake",
    "explanationCN": "饼（烙饼）"
  },
  {
    "character": "𗲆",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "true/real/genuine",
    "explanationCN": "真实"
  },
  {
    "character": "𗲢",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "insect/worm",
    "explanationCN": "虫蛆"
  },
  {
    "character": "𘒙",
    "GX": "twi̱¹",
    "GHC": "twe¹",
    "explanationEN": "pile.up/stack",
    "explanationCN": "堆"
  },
  {
    "character": "𗌵",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【龚】【䡗】【宫】【恭】【弓】【宫】【供】【供】【姜】【共】"
  },
  {
    "character": "𗍒",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "flag/banner",
    "explanationCN": "旗"
  },
  {
    "character": "𘗹",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "sing.loudly",
    "explanationCN": "高唱娱乐"
  },
  {
    "character": "𘓫",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "Qiangic.people/Tibetan",
    "explanationCN": "羌藏"
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
    "explanationEN": "bellyband/belt",
    "explanationCN": "肚带"
  },
  {
    "character": "𗗿",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "dog",
    "explanationCN": "犬【靼】【郸】【妲】"
  },
  {
    "character": "𗘄",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "mole.cricket",
    "explanationCN": "蝼蛄"
  },
  {
    "character": "𗘆",
    "GX": "qi̱w²",
    "GHC": "kew²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【狗】"
  },
  {
    "character": "𗶀",
    "GX": "nllu²",
    "GHC": "lju²",
    "explanationEN": "parrot",
    "explanationCN": "鸚鵡"
  },
  {
    "character": "𗡵",
    "GX": "nde¹",
    "GHC": "dji̱j¹",
    "explanationEN": "smile/laugh",
    "explanationCN": "嘻笑"
  },
  {
    "character": "𘄹",
    "GX": "twi̱ṃ¹",
    "GHC": "twe¹",
    "explanationEN": "brush/whisk",
    "explanationCN": "掸搔拂"
  },
  {
    "character": "𘴅",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "jump/leap",
    "explanationCN": "跳跃"
  },
  {
    "character": "𘄴",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "desire/want",
    "explanationCN": "1.要需求【齐】【寂】【戚】【籍】【缉】"
  },
  {
    "character": "𘅖",
    "GX": "mbə¹",
    "GHC": "bjɨ̱¹",
    "explanationEN": "tie.up",
    "explanationCN": "1.束缚、跳跃"
  },
  {
    "character": "𘅗",
    "GX": "zih¹",
    "GHC": "zjị¹",
    "explanationEN": "boots",
    "explanationCN": "靴"
  },
  {
    "character": "𘅭",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "dog",
    "explanationCN": "狗"
  },
  {
    "character": "𘅜",
    "GX": "ndi²",
    "GHC": "dji̱²",
    "explanationEN": "change/vary",
    "explanationCN": "变化"
  },
  {
    "character": "𗳥",
    "GX": "ndźu²",
    "GHC": "dźju̱²",
    "explanationEN": "exercise.forbearance",
    "explanationCN": "1.忍让、侵"
  },
  {
    "character": "𘘪",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "get/obtain",
    "explanationCN": "1.得、安"
  },
  {
    "character": "𘙌",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "ᴘꜰᴠ:ɪɴ/ɪᴍᴘ:ɪɴ/𝟣ᴅᴜ",
    "explanationCN": "ᴘꜰᴠ:ɪɴ/ɪᴍᴘ:ɪɴ/𝟣ᴅᴜ"
  },
  {
    "character": "𘝀",
    "GX": "mphi¹",
    "GHC": "phji̱¹",
    "explanationEN": "fly",
    "explanationCN": "飞瞬展翅形容词"
  },
  {
    "character": "𘚝",
    "GX": "lu²",
    "GHC": "lu",
    "explanationEN": "newborn.baby/infant",
    "explanationCN": "產儿婴儿"
  },
  {
    "character": "𘞃",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "a.long.narrow.flag/streamer",
    "explanationCN": "幢】"
  },
  {
    "character": "𘜝",
    "GX": "rtser²",
    "GHC": "tsjir²",
    "explanationEN": "thorn/splinter",
    "explanationCN": "1.棘刺、扠、茬稻芒"
  },
  {
    "character": "𗲦",
    "GX": "nvi¹",
    "GHC": "wji̱¹",
    "explanationEN": "defraud/swindle",
    "explanationCN": "诈骗"
  },
  {
    "character": "𘈧",
    "GX": "nde̱¹",
    "GHC": "de̱j¹",
    "explanationEN": "pass.on/transfer",
    "explanationCN": "1.传转、傅"
  },
  {
    "character": "𘗮",
    "GX": "dźuh²",
    "GHC": "dźjụ²",
    "explanationEN": "joking.remarks/banter",
    "explanationCN": "戏言"
  },
  {
    "character": "𘓧",
    "GX": "???",
    "GHC": "",
    "explanationEN": "luck/fortune",
    "explanationCN": "幸"
  },
  {
    "character": "𗇟",
    "GX": "qhə̱²",
    "GHC": "khə²",
    "explanationEN": "monkey/ape",
    "explanationCN": "1.猕猴、猿"
  },
  {
    "character": "𗈦",
    "GX": "lha²",
    "GHC": "lhạ",
    "explanationEN": "confuse/puzzle",
    "explanationCN": "1.迷惑、失、倒"
  },
  {
    "character": "𗕡",
    "GX": "rzor¹",
    "GHC": "zjor¹",
    "explanationEN": "redeem",
    "explanationCN": "赎"
  },
  {
    "character": "𘟠",
    "GX": "dzu̱¹",
    "GHC": "dzu¹",
    "explanationEN": "love.ᴀ",
    "explanationCN": "爱.ᴀ"
  },
  {
    "character": "𗕥",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "shining",
    "explanationCN": "1.毫、灿、显【密】"
  },
  {
    "character": "𗲓",
    "GX": "bao̱h¹",
    "GHC": "biọ¹",
    "explanationEN": "break.through/spout",
    "explanationCN": "迸突破"
  },
  {
    "character": "𗲛",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "four/the.fourth",
    "explanationCN": "四第四"
  },
  {
    "character": "𗲰",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "chop/pound",
    "explanationCN": "捣剁"
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
    "explanationEN": "rub/knead",
    "explanationCN": "揉搓"
  },
  {
    "character": "𘒉",
    "GX": "nlo̱¹",
    "GHC": "lo̱¹",
    "explanationEN": "kind/type",
    "explanationCN": "1.类、具"
  },
  {
    "character": "𗌻",
    "GX": "rya̱r²",
    "GHC": "ꞏjar²",
    "explanationEN": "subdue/tame",
    "explanationCN": "降伏驯服调御"
  },
  {
    "character": "𗘋",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "seven",
    "explanationCN": "七"
  },
  {
    "character": "𘘘",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "a.currency.unit",
    "explanationCN": "緡"
  },
  {
    "character": "𗉕",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "saint",
    "explanationCN": "圣灵"
  },
  {
    "character": "𗎟",
    "GX": "ntha̱r¹",
    "GHC": "tha̱r¹",
    "explanationEN": "blindness",
    "explanationCN": "盲"
  },
  {
    "character": "𗚀",
    "GX": "tśo¹",
    "GHC": "tśjo¹",
    "explanationEN": "go.without.a.burden",
    "explanationCN": "轻往"
  },
  {
    "character": "𘄘",
    "GX": "γao̱ṃ¹",
    "GHC": "ɣiow¹",
    "explanationEN": "surrender/capitulate",
    "explanationCN": "降】"
  },
  {
    "character": "𗡩",
    "GX": "hwi̱¹",
    "GHC": "xwe¹",
    "explanationEN": "grey/ashy.color",
    "explanationCN": "灰色】"
  },
  {
    "character": "𗶅",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "guard/defend",
    "explanationCN": "守护"
  },
  {
    "character": "𘄿",
    "GX": "te¹",
    "GHC": "tjij¹",
    "explanationEN": "chapter/grade/rank",
    "explanationCN": "1.品篇章、排、秩、摊、叹"
  },
  {
    "character": "𗳤",
    "GX": "lhwə²",
    "GHC": "lhjwɨ²",
    "explanationEN": "among/middle",
    "explanationCN": "中间"
  },
  {
    "character": "𘜄",
    "GX": "rŋwi̱r¹",
    "GHC": "ŋwer¹",
    "explanationEN": "equate/be.equal",
    "explanationCN": "1.等同、比、匹、权、均"
  },
  {
    "character": "𘝎",
    "GX": "rvwi̱r²",
    "GHC": "wer²",
    "explanationEN": "a.kind.of.silk",
    "explanationCN": "铺帛"
  },
  {
    "character": "𗕏",
    "GX": "rtśər²",
    "GHC": "tśjɨr²",
    "explanationEN": "conceited",
    "explanationCN": "矜高"
  },
  {
    "character": "𗕜",
    "GX": "vwa̱²",
    "GHC": "wa¹",
    "explanationEN": "hide/conceal",
    "explanationCN": "1.隠藏【蛙】（珠 173）【袜】（珠 252）【发】（音 194）"
  },
  {
    "character": "𗕮",
    "GX": "ntśhi¹",
    "GHC": "tśhji̱¹",
    "explanationEN": "pull",
    "explanationCN": "扯】"
  },
  {
    "character": "𗕴",
    "GX": "tseṃh¹",
    "GHC": "tsjɨ̣j¹",
    "explanationEN": "modest/humble",
    "explanationCN": "谦卑"
  },
  {
    "character": "𗘬",
    "GX": "swa¹",
    "GHC": "sjwa¹",
    "explanationEN": "time",
    "explanationCN": "1.时【宣】【修】"
  },
  {
    "character": "𗲠",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "hollow/void",
    "explanationCN": "空虚"
  },
  {
    "character": "𗲺",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "firm/solid",
    "explanationCN": "坚固"
  },
  {
    "character": "𘒑",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "food.for.army",
    "explanationCN": "军粮"
  },
  {
    "character": "𗘛",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "dye",
    "explanationCN": "染"
  },
  {
    "character": "𗸲",
    "GX": "rzur²",
    "GHC": "zjur²",
    "explanationEN": "give.birth",
    "explanationCN": "產"
  },
  {
    "character": "𗙹",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr¹",
    "explanationEN": "the.moon",
    "explanationCN": "月"
  },
  {
    "character": "𗰳",
    "GX": "lhə¹",
    "GHC": "lhjr¹",
    "explanationEN": "bear",
    "explanationCN": "熊"
  },
  {
    "character": "𘈅",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "the.front.of.a.Chinese.gown",
    "explanationCN": "衿"
  },
  {
    "character": "𘞅",
    "GX": "nlə¹",
    "GHC": "la¹",
    "explanationEN": "streamer",
    "explanationCN": "1.幡、鳧"
  },
  {
    "character": "𗕨",
    "GX": "llo̱ṃh¹",
    "GHC": "lọ¹",
    "explanationEN": "love",
    "explanationCN": "恋"
  },
  {
    "character": "𗉘",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "DEM/EXP",
    "explanationCN": "DEM; EXP"
  },
  {
    "character": "𗘅",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "pig/hog",
    "explanationCN": "亥猪"
  },
  {
    "character": "𗎣",
    "GX": "pao̱ṃ¹",
    "GHC": "piow¹",
    "explanationEN": "boundary/boder",
    "explanationCN": "1.边界、绑"
  },
  {
    "character": "𗈣",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "slanting/inclined/crooked",
    "explanationCN": "邪歪邪"
  },
  {
    "character": "𗕱",
    "GX": "γai̱¹",
    "GHC": "ɣie¹",
    "explanationEN": "height.(of.a.person)",
    "explanationCN": "身高身长"
  },
  {
    "character": "𗱺",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "steed/fine.horse",
    "explanationCN": "骏马"
  },
  {
    "character": "𗲧",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "end/east",
    "explanationCN": "末尾东方日出处"
  },
  {
    "character": "𗍙",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "curtain/screen",
    "explanationCN": "幔帐"
  },
  {
    "character": "𗟣",
    "GX": "nllə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "repent",
    "explanationCN": "改悔"
  },
  {
    "character": "𗵷",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "give.up/abandon",
    "explanationCN": "捨弃扬弃"
  },
  {
    "character": "𗵷",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "give.up/abandon",
    "explanationCN": "放弃;放弃"
  },
  {
    "character": "𘄠",
    "GX": "tśha²",
    "GHC": "tśhja²",
    "explanationEN": "shoot.an.arrow",
    "explanationCN": "射箭"
  },
  {
    "character": "𘈲",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "old.and.shabby",
    "explanationCN": "补衲破旧"
  },
  {
    "character": "𘗾",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "butcher/sacrifice",
    "explanationCN": "牺屠"
  },
  {
    "character": "𘅸",
    "GX": "nli¹",
    "GHC": "lji̱¹",
    "explanationEN": "trousers/pants",
    "explanationCN": "裤"
  },
  {
    "character": "𘑻",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "a.surname",
    "explanationCN": "【狄】【敌】"
  },
  {
    "character": "𘙟",
    "GX": "lhao̱h²",
    "GHC": "lhiọ²",
    "explanationEN": "neck",
    "explanationCN": "颈"
  },
  {
    "character": "𘙢",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "deafness",
    "explanationCN": "聋"
  },
  {
    "character": "𗡹",
    "GX": "rqo̱ṃr²",
    "GHC": "kowr²",
    "explanationEN": "like/desire",
    "explanationCN": "爱欲"
  },
  {
    "character": "𗟩",
    "GX": "ra?",
    "GHC": "ra",
    "explanationEN": "a.transliteration",
    "explanationCN": "【萝】"
  },
  {
    "character": "𗲻",
    "GX": "ntha̱¹",
    "GHC": "tha̱¹",
    "explanationEN": "suppress/stifle",
    "explanationCN": "压制"
  },
  {
    "character": "𘜆",
    "GX": "γuo¹",
    "GHC": "ꞏiow¹",
    "explanationEN": "wrestling",
    "explanationCN": "角力"
  },
  {
    "character": "𗈥",
    "GX": "ndẓae̱ṃ²",
    "GHC": "dźiej¹",
    "explanationEN": "lascivious/licentious",
    "explanationCN": "淫欲"
  },
  {
    "character": "𗗳",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "dirty/filthy",
    "explanationCN": "骯脏"
  },
  {
    "character": "𘅡",
    "GX": "nse¹",
    "GHC": "sji̱j¹",
    "explanationEN": "evidence/proof",
    "explanationCN": "证"
  },
  {
    "character": "𗈙",
    "GX": "ntśu¹",
    "GHC": "tśju̱¹",
    "explanationEN": "envy/harm",
    "explanationCN": "嫉害凌侵伤"
  },
  {
    "character": "𗕦",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "restrained/reserved",
    "explanationCN": "矜持"
  },
  {
    "character": "𗶏",
    "GX": "nlu²",
    "GHC": "lju̱²",
    "explanationEN": "imperial.concubine",
    "explanationCN": "嬪妃"
  },
  {
    "character": "𘔘",
    "GX": "hu̱ṃ¹",
    "GHC": "xũ¹",
    "explanationEN": "red",
    "explanationCN": "1.红】【洪】【和】【虹】【鸿】【弘】"
  },
  {
    "character": "𗲘",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "complain/grumble",
    "explanationCN": "抱怨"
  },
  {
    "character": "𘄗",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "stop/rest",
    "explanationCN": "停歇"
  },
  {
    "character": "𘙑",
    "GX": "lhoh²",
    "GHC": "lhjọ²",
    "explanationEN": "capture/obtain",
    "explanationCN": "获"
  },
  {
    "character": "𘜿",
    "GX": "lh??",
    "GHC": "",
    "explanationEN": "jerked.meat",
    "explanationCN": "脩"
  },
  {
    "character": "𗎠",
    "GX": "ryer²",
    "GHC": "ꞏji̱r²",
    "explanationEN": "tassel/a.piece.of.cloth",
    "explanationCN": "缨巾"
  },
  {
    "character": "𘒎",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r¹",
    "explanationEN": "place/site/market",
    "explanationCN": "1.场、街、市、陈"
  },
  {
    "character": "𗉪",
    "GX": "tṣhae̱ṃ²",
    "GHC": "tśhiəj²",
    "explanationEN": "vexation/worry",
    "explanationCN": "1.恼【差】"
  },
  {
    "character": "𘅎",
    "GX": "lleṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "happy/delighted",
    "explanationCN": "欢喜喜悦"
  },
  {
    "character": "𘘽",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "tail/end/back",
    "explanationCN": "尾巴;结束;返回"
  },
  {
    "character": "𗍛",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "fast/rapid/speech/word",
    "explanationCN": "急言"
  },
  {
    "character": "𗕛",
    "GX": "te̱¹",
    "GHC": "tej¹",
    "explanationEN": "well-proportioned",
    "explanationCN": "1.匀称【戴】"
  },
  {
    "character": "𗲀",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "stone.roller",
    "explanationCN": "碡碌（石滚）"
  },
  {
    "character": "𗸧",
    "GX": "???",
    "GHC": "",
    "explanationEN": "",
    "explanationCN": ""
  },
  {
    "character": "𗳬",
    "GX": "dwu²",
    "GHC": "djwu²",
    "explanationEN": "know/realize",
    "explanationCN": "知"
  },
  {
    "character": "𘑸",
    "GX": "ro̱ṃr¹",
    "GHC": "rowr¹",
    "explanationEN": "withered/skinny",
    "explanationCN": "枯瘦"
  },
  {
    "character": "𗕬",
    "GX": "śə²",
    "GHC": "śjɨ²",
    "explanationEN": "light/not.heavy",
    "explanationCN": "轻【什】"
  },
  {
    "character": "𘅘",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "spread/pave",
    "explanationCN": "1.铺、薄部"
  },
  {
    "character": "𘝍",
    "GX": "tśuh²",
    "GHC": "tśjụ²",
    "explanationEN": "wing",
    "explanationCN": "翼"
  },
  {
    "character": "𗇸",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "daylight/daytime",
    "explanationCN": "昼日时"
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
    "explanationEN": "seven/the.seventh",
    "explanationCN": "七第七"
  },
  {
    "character": "𗉚",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "blood.relations",
    "explanationCN": "嫡亲"
  },
  {
    "character": "𗕋",
    "GX": "rler¹",
    "GHC": "lji̱r¹",
    "explanationEN": "plough",
    "explanationCN": "犁】"
  },
  {
    "character": "𘇥",
    "GX": "pho̱ṃh²",
    "GHC": "phọ²",
    "explanationEN": "lame",
    "explanationCN": "1.跛（瘸）【鲍】"
  },
  {
    "character": "𘜉",
    "GX": "phi²",
    "GHC": "phji²",
    "explanationEN": "lose₂",
    "explanationCN": "失₂"
  },
  {
    "character": "𘒒",
    "GX": "nlo̱²",
    "GHC": "lo̱¹",
    "explanationEN": "exterminate/wipe.out",
    "explanationCN": "剿"
  },
  {
    "character": "𘃳",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音【鳩】【骄】【拘】【高】"
  },
  {
    "character": "𗳵",
    "GX": "ndzwə¹",
    "GHC": "dzjwɨ̱¹",
    "explanationEN": "speed/gallop",
    "explanationCN": "驰】"
  },
  {
    "character": "𗰷",
    "GX": "rzwə̱r¹",
    "GHC": "zwər¹",
    "explanationEN": "rinse/wash",
    "explanationCN": "洗濯"
  },
  {
    "character": "𗇿",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "disease/illness",
    "explanationCN": "疾病"
  },
  {
    "character": "𗱾",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "admire",
    "explanationCN": "慕"
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
    "explanationCN": "1.沉重、触投躄扣筑"
  },
  {
    "character": "𗕟",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "broken",
    "explanationCN": "破"
  },
  {
    "character": "𗲮",
    "GX": "rẓae̱r²",
    "GHC": "ziejr²",
    "explanationEN": "incomplete/different",
    "explanationCN": "残差"
  },
  {
    "character": "𗸇",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "steps/stairs",
    "explanationCN": "阶"
  },
  {
    "character": "𘞈",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "unlined.garment",
    "explanationCN": "1.单衣 【丹】【答】【担】【胆】"
  },
  {
    "character": "𘆊",
    "GX": "γoṃ¹",
    "GHC": "ɣjow¹",
    "explanationEN": "source",
    "explanationCN": "1.源、极、枕"
  },
  {
    "character": "𘆆",
    "GX": "le¹",
    "GHC": "ljij¹",
    "explanationEN": "ashamed/abashed",
    "explanationCN": "羞愧"
  },
  {
    "character": "𘆇",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "shame/disgrace",
    "explanationCN": "羞愧"
  },
  {
    "character": "𘅿",
    "GX": "buh¹",
    "GHC": "bjụ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【哺】【谋】"
  },
  {
    "character": "𗕎",
    "GX": "nni̱w²",
    "GHC": "ne̱w²",
    "explanationEN": "be.smooth.and.steady",
    "explanationCN": "1.安稳、愷悌"
  },
  {
    "character": "𗈓",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "winecup",
    "explanationCN": "盅罇尊"
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
    "explanationEN": "love/admiration",
    "explanationCN": "恋慕仰思"
  },
  {
    "character": "𗷸",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "son/man",
    "explanationCN": "子男丈夫"
  },
  {
    "character": "𗷬",
    "GX": "rtśhwo̱r²",
    "GHC": "tśhjwor²",
    "explanationEN": "servant",
    "explanationCN": "（按：依《文海杂类》此字属船母（dź-），但反切系联结果，此字属昌母（tśh-）。疑《文海杂类》注音较早，浊辅音尚未清化。）英文释义servant详细解释请参考《简明夏汉字典》第173页。聂歷山（Nevsky）释义奴僕奴龚煌城释义童奴僕奴《同义》释义童仆mojikyo字体叹景永时字体贩"
  },
  {
    "character": "𗲑",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "tiredness",
    "explanationCN": "倦"
  },
  {
    "character": "𘇩",
    "GX": "ṇi¹",
    "GHC": "nji¹",
    "explanationEN": "magic.arts",
    "explanationCN": "法术骗术"
  },
  {
    "character": "𗱢",
    "GX": "na¹",
    "GHC": "nja¹",
    "explanationEN": "ᴘꜰᴠ:ᴅᴏᴡɴ/ɪᴍᴘ:ᴅᴏᴡɴ",
    "explanationCN": "ᴘꜰᴠ:ᴅᴏᴡɴ/ɪᴍᴘ:ᴅᴏᴡɴ"
  },
  {
    "character": "𘃵",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "direction/orientation",
    "explanationCN": "方向"
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
    "explanationEN": "return/roll",
    "explanationCN": "返回翻滚"
  },
  {
    "character": "𗳶",
    "GX": "tṣhai̱¹",
    "GHC": "tśhie¹",
    "explanationEN": "a.surname",
    "explanationCN": "【赤】【处】"
  },
  {
    "character": "𘇙",
    "GX": "vwa̱ṃ²",
    "GHC": "wã²",
    "explanationEN": "support/bring.up",
    "explanationCN": "养育"
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
    "explanationEN": "rare/thin",
    "explanationCN": "末稀疏"
  },
  {
    "character": "𗈚",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "discontinuity/isolation",
    "explanationCN": "绝"
  },
  {
    "character": "𗲨",
    "GX": "rzir¹",
    "GHC": "zjir¹",
    "explanationEN": "heavy/cumbersome",
    "explanationCN": "笨重"
  },
  {
    "character": "𘒐",
    "GX": "nlo̱¹",
    "GHC": "lo̱¹",
    "explanationEN": "pool.efforts/cooperation",
    "explanationCN": "1.合力、群党"
  },
  {
    "character": "𗷳",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "measure/send.bounds.to",
    "explanationCN": "1.限量、评判、克"
  },
  {
    "character": "𗷹",
    "GX": "rdzu̱r¹",
    "GHC": "dzur¹",
    "explanationEN": "kick",
    "explanationCN": "（按：字按《文海杂类》规定，应属浊声母，但其反切结果，為清声母，此处从龚氏拟音。）"
  },
  {
    "character": "𗷾",
    "GX": "lleh¹",
    "GHC": "ljịj¹",
    "explanationEN": "wait.upon/serve",
    "explanationCN": "1.侍奉、局务"
  },
  {
    "character": "𗸅",
    "GX": "tśhwiṃ¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "repeat/duplicate",
    "explanationCN": "1.重复【春】"
  },
  {
    "character": "𗸆",
    "GX": "khoṃ¹",
    "GHC": "khjow¹",
    "explanationEN": "strong/powerful",
    "explanationCN": "强】"
  },
  {
    "character": "𘑯",
    "GX": "γwu̱²",
    "GHC": "ꞏwu²",
    "explanationEN": "brocade",
    "explanationCN": "透贝（贝锦）"
  },
  {
    "character": "𗈌",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "steal",
    "explanationCN": "盗窃"
  },
  {
    "character": "𗈉",
    "GX": "ni?",
    "GHC": "nji-",
    "explanationEN": "lose/fail",
    "explanationCN": "损失失败"
  },
  {
    "character": "𗲫",
    "GX": "bə̱?",
    "GHC": "bə",
    "explanationEN": "sink",
    "explanationCN": "1.沉没【茉】"
  },
  {
    "character": "𘒌",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "leopard/panther",
    "explanationCN": "1.豹】、中间"
  },
  {
    "character": "𗸒",
    "GX": "su̱¹",
    "GHC": "su¹",
    "explanationEN": "ᴄᴏᴍᴘ",
    "explanationCN": "ᴄᴏᴍᴘ"
  },
  {
    "character": "𗸐",
    "GX": "ryər²",
    "GHC": "ꞏjɨr²",
    "explanationEN": "diligent",
    "explanationCN": "勤"
  },
  {
    "character": "𘞆",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "thin/slight",
    "explanationCN": "1.薄、羸少"
  },
  {
    "character": "𗰹",
    "GX": "tso̱ṃ²",
    "GHC": "tsow²",
    "explanationEN": "a.surname",
    "explanationCN": "【左】【佐】【撮】【作】【臧】【蒋】"
  },
  {
    "character": "𗱈",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "tiger",
    "explanationCN": "1.虎寅【勒】"
  },
  {
    "character": "𗷲",
    "GX": "giṃ¹",
    "GHC": "gjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【银】【严】【业】【延】【银】【砚】【彦】【言】"
  },
  {
    "character": "𗸏",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "abandon/give.up",
    "explanationCN": "放弃"
  },
  {
    "character": "𗱙",
    "GX": "rqu̱r¹",
    "GHC": "kur¹",
    "explanationEN": "clumsy",
    "explanationCN": "拙笨"
  },
  {
    "character": "𗲄",
    "GX": "tṣhao̱ṃ¹",
    "GHC": "tśhiow¹",
    "explanationEN": "knit/wave",
    "explanationCN": "1.结、蒜"
  },
  {
    "character": "𘘋",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "devil/demon",
    "explanationCN": "魔鬼"
  },
  {
    "character": "𗕿",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "kind/loving",
    "explanationCN": "慈"
  },
  {
    "character": "𗕾",
    "GX": "ku¹",
    "GHC": "kju¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【俱】【锯】【拘】【鐝】【脚】【举】【莒】【句】【居】【驹】【车】"
  },
  {
    "character": "𗕻",
    "GX": "qho̱¹",
    "GHC": "kho¹",
    "explanationEN": "ditch",
    "explanationCN": "沟"
  },
  {
    "character": "𗈝",
    "GX": "tsi̱ṃ¹",
    "GHC": "tsẽ¹",
    "explanationEN": "hate/swear",
    "explanationCN": "1.憎駡】【曾】"
  },
  {
    "character": "𗖥",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "advise/urge",
    "explanationCN": "劝"
  },
  {
    "character": "𗇲",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "toil/hard.work",
    "explanationCN": "劳苦"
  },
  {
    "character": "𗗆",
    "GX": "si̱ṃ¹",
    "GHC": "sẽ¹",
    "explanationEN": "Buddhist.monk",
    "explanationCN": "僧】"
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
    "GHC": "ljịj¹",
    "explanationEN": "lazy/idle",
    "explanationCN": "怠"
  },
  {
    "character": "𗕷",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "flat/equal",
    "explanationCN": "平齐"
  },
  {
    "character": "𗴨",
    "GX": "səh¹",
    "GHC": "sjɨ̣¹",
    "explanationEN": "die",
    "explanationCN": "死】"
  },
  {
    "character": "𘜎",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "enough/sufficient",
    "explanationCN": "足够"
  },
  {
    "character": "𘜐",
    "GX": "ndza̱¹",
    "GHC": "dza̱¹",
    "explanationEN": "justice/righteousness",
    "explanationCN": "义"
  },
  {
    "character": "𗲕",
    "GX": "tsi̱¹",
    "GHC": "tse¹",
    "explanationEN": "button",
    "explanationCN": "纽扣"
  },
  {
    "character": "𗉄",
    "GX": "dẓaa̱¹",
    "GHC": "dźia¹",
    "explanationEN": "stir-fry",
    "explanationCN": "炒"
  },
  {
    "character": "𗴧",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "change/make.believe",
    "explanationCN": "变示佯装"
  },
  {
    "character": "𗖙",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "speak/talk/tell",
    "explanationCN": "诉说"
  },
  {
    "character": "𘇰",
    "GX": "tśhiṃ¹",
    "GHC": "tśhji¹",
    "explanationEN": "old/stale",
    "explanationCN": "陈】"
  },
  {
    "character": "𗇞",
    "GX": "qho̱ṃ¹",
    "GHC": "khow¹",
    "explanationEN": "hole/hollow",
    "explanationCN": "坑"
  },
  {
    "character": "𗱔",
    "GX": "ha̱ṃ¹",
    "GHC": "xã¹",
    "explanationEN": "foolish/silly",
    "explanationCN": "1.憨】【汉】【悍】【含】【邯】"
  },
  {
    "character": "𘒕",
    "GX": "nto̱²",
    "GHC": "to̱²",
    "explanationEN": "peaceful/harmonious",
    "explanationCN": "睦"
  },
  {
    "character": "𗕶",
    "GX": "γa̱h²",
    "GHC": "ɣạ²",
    "explanationEN": "mad/crazy",
    "explanationCN": "狂"
  },
  {
    "character": "𗴩",
    "GX": "səh¹",
    "GHC": "sjɨ̣¹",
    "explanationEN": "bright/intelligent",
    "explanationCN": "明亮;智能"
  },
  {
    "character": "𗈽",
    "GX": "pi̱¹",
    "GHC": "pe¹",
    "explanationEN": "dirty/filthy",
    "explanationCN": "1.骯脏【北】"
  },
  {
    "character": "𗖠",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "harmonious/mild",
    "explanationCN": "和合睦雍顺侃衎"
  },
  {
    "character": "𘒚",
    "GX": "be̱¹",
    "GHC": "bej¹",
    "explanationEN": "lose/fail",
    "explanationCN": "1.败】、北亡"
  },
  {
    "character": "𗖉",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "insane",
    "explanationCN": "疯狂"
  },
  {
    "character": "𘒈",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "healthy/strong",
    "explanationCN": "健"
  },
  {
    "character": "𗖨",
    "GX": "ri̱r¹",
    "GHC": "rer¹",
    "explanationEN": "peaceful/harmonious",
    "explanationCN": "睦"
  },
  {
    "character": "𘒛",
    "GX": "mba̱¹",
    "GHC": "ba̱¹",
    "explanationEN": "forget",
    "explanationCN": "1.忘【嚩】【跋】【末】"
  },
  {
    "character": "𗴍",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "quail",
    "explanationCN": "鵪鶉"
  },
  {
    "character": "𘆏",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "suppress/put.down",
    "explanationCN": "1.镇摄、回、还、报、逆屈、趺"
  },
  {
    "character": "𗱤",
    "GX": "tśeh²",
    "GHC": "tśjịj²",
    "explanationEN": "wallet/pocketbook",
    "explanationCN": "皮夹"
  },
  {
    "character": "𗖅",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "go.along.with/lead/guide",
    "explanationCN": "随带领引擕牵"
  },
  {
    "character": "𗈄",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "abuse/swear/curse",
    "explanationCN": "駡詈"
  },
  {
    "character": "𗱗",
    "GX": "tśeh¹",
    "GHC": "tśjịj¹",
    "explanationEN": "a.surname",
    "explanationCN": "【贞】"
  },
  {
    "character": "𘆒",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "exchange/change",
    "explanationCN": "换变"
  },
  {
    "character": "𗖱",
    "GX": "γwu̱²",
    "GHC": "ꞏwu",
    "explanationEN": "a.transliteration",
    "explanationCN": "【乌】【鄔】【坞】【温】【郝】"
  },
  {
    "character": "𗉊",
    "GX": "dźwe¹",
    "GHC": "dźjwij¹",
    "explanationEN": "burning.hot",
    "explanationCN": "炎热"
  },
  {
    "character": "𗗇",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "confess",
    "explanationCN": "招供"
  },
  {
    "character": "𗖪",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "swelling",
    "explanationCN": "肿"
  },
  {
    "character": "𗇣",
    "GX": "qao̱²",
    "GHC": "kio²",
    "explanationEN": "dislike/detest",
    "explanationCN": "厌恶"
  },
  {
    "character": "𗇳",
    "GX": "qhao̱¹",
    "GHC": "khio¹",
    "explanationEN": "detest.ʙ",
    "explanationCN": "厌恶嫌"
  },
  {
    "character": "𘒇",
    "GX": "tshi²",
    "GHC": "tshji²",
    "explanationEN": "wait.upon/serve",
    "explanationCN": "侍奉事夫"
  },
  {
    "character": "𗖈",
    "GX": "mpha¹",
    "GHC": "phja̱¹",
    "explanationEN": "forbid/ban",
    "explanationCN": "禁断"
  },
  {
    "character": "𗴦",
    "GX": "źaw²",
    "GHC": "źja̱²",
    "explanationEN": "main.points/essentials",
    "explanationCN": "要"
  },
  {
    "character": "𗲋",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "happy/joyful",
    "explanationCN": "欢乐"
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
    "GHC": "gia¹",
    "explanationEN": "army/soldier",
    "explanationCN": "军兵"
  },
  {
    "character": "𗗉",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "sing.happily",
    "explanationCN": "欢颂"
  },
  {
    "character": "𗴎",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【党】草名"
  },
  {
    "character": "𗗁",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "ashamed/abashed",
    "explanationCN": "羞愧"
  },
  {
    "character": "𘒖",
    "GX": "nlo̱¹",
    "GHC": "lo̱¹",
    "explanationEN": "gather/assemble",
    "explanationCN": "聚集"
  },
  {
    "character": "𗖦",
    "GX": "śwoṃ²",
    "GHC": "śjwow²",
    "explanationEN": "dispatch/send",
    "explanationCN": "遣发"
  },
  {
    "character": "𗗌",
    "GX": "ġo̱¹",
    "GHC": "go¹",
    "explanationEN": "house",
    "explanationCN": "房屋"
  },
  {
    "character": "𗖲",
    "GX": "lhu¹",
    "GHC": "lhju¹",
    "explanationEN": "increase/add",
    "explanationCN": "增"
  },
  {
    "character": "𗲅",
    "GX": "tṣhwae̱ṃ¹",
    "GHC": "tśhiwəj¹",
    "explanationEN": "tie/fasten",
    "explanationCN": "繫缚"
  },
  {
    "character": "𗗃",
    "GX": "γwuh²",
    "GHC": "ꞏwụ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【於】【鄔】"
  },
  {
    "character": "𘙸",
    "GX": "lao̱¹",
    "GHC": "lio¹",
    "explanationEN": "string",
    "explanationCN": "串"
  },
  {
    "character": "𗌭",
    "GX": "qu̱¹",
    "GHC": "ku¹",
    "explanationEN": "so",
    "explanationCN": "1.则故连词【鼓】（珠 212）【姑】（珠 366）【】（珠 166)【孤】（珠 064）【羖】（珠 164）【股】（珠 191）【孤】"
  },
  {
    "character": "𗌮",
    "GX": "rmor¹",
    "GHC": "mjor¹",
    "explanationEN": "true/closes",
    "explanationCN": "实如现"
  },
  {
    "character": "𗖧",
    "GX": "yi²",
    "GHC": "ꞏji²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【㗒】【夷】【依】【噎】"
  },
  {
    "character": "𗘮",
    "GX": "rnə̱r¹",
    "GHC": "nər¹",
    "explanationEN": "yellow",
    "explanationCN": "黄"
  },
  {
    "character": "𘛽",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "body",
    "explanationCN": "1.身、形、肤"
  },
  {
    "character": "𗲡",
    "GX": "hi̱ṃ²",
    "GHC": "xẽ²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【贺】"
  },
  {
    "character": "𗲬",
    "GX": "ŋqaa̱²",
    "GHC": "kia̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【岬】【峡】"
  },
  {
    "character": "𗇩",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "ancestor/forefather",
    "explanationCN": "先人祖先"
  },
  {
    "character": "𗈔",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "鷂鴟"
  },
  {
    "character": "𗳃",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "wall/stele",
    "explanationCN": "壁碑】"
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
    "GHC": "ꞏjo̱w²",
    "explanationEN": "love",
    "explanationCN": "爱"
  },
  {
    "character": "𗲗",
    "GX": "rsər¹",
    "GHC": "sjɨr¹",
    "explanationEN": "full/filled",
    "explanationCN": "满"
  },
  {
    "character": "𗈖",
    "GX": "???",
    "GHC": "",
    "explanationEN": "scold/rebuke/dress.down",
    "explanationCN": "（按：此字仅见《西夏陵墓残碑粹编》）英文释义to scold; to rebuke; to dress down详细解释请参考《简明夏汉字典》第185页。mojikyo字体镇景永时字体竍"
  },
  {
    "character": "𗴆",
    "GX": "dźwə²",
    "GHC": "dźjwɨ²",
    "explanationEN": "a.surname",
    "explanationCN": "【秫】"
  },
  {
    "character": "𘇬",
    "GX": "rtswar¹",
    "GHC": "tsjwar¹",
    "explanationEN": "know",
    "explanationCN": "知识"
  },
  {
    "character": "𗹍",
    "GX": "mih²",
    "GHC": "mjị²",
    "explanationEN": "an.official.title",
    "explanationCN": "中书"
  },
  {
    "character": "𗇭",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "spread",
    "explanationCN": "1.伸展、盃盏"
  },
  {
    "character": "𗴁",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "great-great-grandson",
    "explanationCN": "玄孙【葛】"
  },
  {
    "character": "𘈵",
    "GX": "nih²",
    "GHC": "njị²",
    "explanationEN": "nephew/brother's.child",
    "explanationCN": "1.姪、鰥"
  },
  {
    "character": "𗹒",
    "GX": "???",
    "GHC": "",
    "explanationEN": "politics/affairs",
    "explanationCN": "政"
  },
  {
    "character": "𗳍",
    "GX": "soh²",
    "GHC": "sjọ²",
    "explanationEN": "a.kind.of.grass.make.rain.cape",
    "explanationCN": "蓑】"
  },
  {
    "character": "𗳉",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "fields/subfurbs",
    "explanationCN": "田野郊外"
  },
  {
    "character": "𗳏",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【廷】【田】【天】"
  },
  {
    "character": "𘇭",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "tie",
    "explanationCN": "缚"
  },
  {
    "character": "𘈷",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "son/child",
    "explanationCN": "子"
  },
  {
    "character": "𘈸",
    "GX": "ror¹",
    "GHC": "rjor¹",
    "explanationEN": "spoil.(a.child)",
    "explanationCN": "溺爱"
  },
  {
    "character": "𗹐",
    "GX": "twu̱h¹",
    "GHC": "twụ¹",
    "explanationEN": "loyal/devoted",
    "explanationCN": "1.忠、直"
  },
  {
    "character": "𗹖",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "skilful/clever",
    "explanationCN": "巧"
  },
  {
    "character": "𗴄",
    "GX": "ryər²",
    "GHC": "ꞏjɨr²",
    "explanationEN": "platform",
    "explanationCN": "臺"
  },
  {
    "character": "𗴂",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "be.white",
    "explanationCN": "白"
  },
  {
    "character": "𘇯",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "giant.salamander",
    "explanationCN": "鯢】"
  },
  {
    "character": "𗹕",
    "GX": "do̱ṃ¹",
    "GHC": "dow¹",
    "explanationEN": "long.narrow.strips/a.classifier",
    "explanationCN": "条形容词"
  },
  {
    "character": "𗳿",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "risky.mountainside",
    "explanationCN": "险坡"
  },
  {
    "character": "𗶦",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "equality",
    "explanationCN": "齐平等同兼"
  },
  {
    "character": "𘞘",
    "GX": "n·yiw¹",
    "GHC": "ꞏji̱w¹",
    "explanationEN": "species/seed",
    "explanationCN": "种"
  },
  {
    "character": "𘞛",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "ear",
    "explanationCN": "耳"
  },
  {
    "character": "𘞾",
    "GX": "bəh¹",
    "GHC": "bjɨ̣¹",
    "explanationEN": "skilful/clever",
    "explanationCN": "【备】巧妇"
  },
  {
    "character": "𘝺",
    "GX": "vuh²",
    "GHC": "wjụ²",
    "explanationEN": "bear.(a.burden)",
    "explanationCN": "负担"
  },
  {
    "character": "𘟈",
    "GX": "nśə²",
    "GHC": "tśjɨ̱²",
    "explanationEN": "general.name.for.certain.musical.instruments",
    "explanationCN": "1.琴瑟、提"
  },
  {
    "character": "𘞙",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "profit/benefit",
    "explanationCN": "1.利、物"
  },
  {
    "character": "𘞜",
    "GX": "thwa̱ṃ²",
    "GHC": "thwã²",
    "explanationEN": "break.off",
    "explanationCN": "断绝"
  },
  {
    "character": "𗃓",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "turbid/muddy",
    "explanationCN": "浊"
  },
  {
    "character": "𗷣",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "eliminate/remove",
    "explanationCN": "除消"
  },
  {
    "character": "𗙏",
    "GX": "γai̱h²",
    "GHC": "ɣiẹ²",
    "explanationEN": "sound/sound",
    "explanationCN": "声音"
  },
  {
    "character": "𗹅",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "choke/block",
    "explanationCN": "硬塞"
  },
  {
    "character": "𗎂",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "patron.of.sheep",
    "explanationCN": "护羊神"
  },
  {
    "character": "𗘣",
    "GX": "rywər¹",
    "GHC": "ꞏjwɨr¹",
    "explanationEN": "looks/appearance",
    "explanationCN": "相象"
  },
  {
    "character": "𗙱",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "arduous/difficult/hard/tough",
    "explanationCN": "苦艰苦"
  },
  {
    "character": "𗟹",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "language/tongue",
    "explanationCN": "语言"
  },
  {
    "character": "𘄃",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "lamb",
    "explanationCN": "羊羔"
  },
  {
    "character": "𗗢",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "dagger/knife",
    "explanationCN": "匕首短刀"
  },
  {
    "character": "𗙅",
    "GX": "rhə̱r¹",
    "GHC": "xər¹",
    "explanationEN": "hum",
    "explanationCN": "哼】"
  },
  {
    "character": "𗰦",
    "GX": "lwo̱¹",
    "GHC": "lwo¹",
    "explanationEN": "dim/dusky",
    "explanationCN": "昏"
  },
  {
    "character": "𗹋",
    "GX": "hwi̱ṃ¹",
    "GHC": "xwẽ¹",
    "explanationEN": "dim/dusky",
    "explanationCN": "【昏】【浑】"
  },
  {
    "character": "𗹌",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "new/fresh",
    "explanationCN": "新"
  },
  {
    "character": "𘄂",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "clear",
    "explanationCN": "澄静湛"
  },
  {
    "character": "𘜘",
    "GX": "rir¹",
    "GHC": "rjir¹",
    "explanationEN": "get\\.a/obtain.ᴀ",
    "explanationCN": "得.ᴀ"
  },
  {
    "character": "𘇡",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "set.up/build",
    "explanationCN": "1.设置安建修、结织"
  },
  {
    "character": "𘙾",
    "GX": "ho̱ṃ¹",
    "GHC": "xow¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【黄】【璜】【皇】【和】"
  },
  {
    "character": "𘓳",
    "GX": "rŋo̱ṃr²",
    "GHC": "ŋowr²",
    "explanationEN": "whole/complete",
    "explanationCN": "全俱尽"
  },
  {
    "character": "𘇎",
    "GX": "ṇa?",
    "GHC": "nja",
    "explanationEN": "renovate/repair/dredge.(.a.river,.etc.)",
    "explanationCN": "1.整治、制"
  },
  {
    "character": "𘔭",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "money",
    "explanationCN": "钱】"
  },
  {
    "character": "𗷩",
    "GX": "yeṃ²",
    "GHC": "ꞏjɨj²",
    "explanationEN": "prison/jail",
    "explanationCN": "狱牢"
  },
  {
    "character": "𘆶",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "livestock/domestic.animals",
    "explanationCN": "牲畜"
  },
  {
    "character": "𘒽",
    "GX": "rkhwar¹",
    "GHC": "khjwar¹",
    "explanationEN": "old.ox",
    "explanationCN": "老牛"
  },
  {
    "character": "𘙰",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "same/alike",
    "explanationCN": "同类"
  },
  {
    "character": "𘇍",
    "GX": "γwu̱h²",
    "GHC": "ꞏwụ²",
    "explanationEN": "domestic.animals/steed",
    "explanationCN": "畜骏"
  },
  {
    "character": "𘙨",
    "GX": "so̱ṃ²",
    "GHC": "sow²",
    "explanationEN": "cry.bitterly",
    "explanationCN": "痛哭"
  },
  {
    "character": "𘜛",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "exchange",
    "explanationCN": "交换"
  },
  {
    "character": "𗗗",
    "GX": "nye¹",
    "GHC": "ꞏji̱j¹",
    "explanationEN": "exploits/achievements",
    "explanationCN": "1.恩功（名）、平坦"
  },
  {
    "character": "𗙦",
    "GX": "dźiṃ¹",
    "GHC": "dźji¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【寧】"
  },
  {
    "character": "𗠂",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "stagnant",
    "explanationCN": "1.滞、捷"
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
    "GHC": "ꞏo²",
    "explanationEN": "hold/contain/enter",
    "explanationCN": "容入进"
  },
  {
    "character": "𘜕",
    "GX": "rkir²",
    "GHC": "kjir²",
    "explanationEN": "dare",
    "explanationCN": "敢能"
  },
  {
    "character": "𘚃",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "grace/kindness",
    "explanationCN": "恩"
  },
  {
    "character": "𗗝",
    "GX": "nye¹",
    "GHC": "ꞏji̱j¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【耶】菜名"
  },
  {
    "character": "𘘊",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "齿（马齿菜）菜名"
  },
  {
    "character": "𘞟",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "crime/guilt",
    "explanationCN": "犯罪"
  },
  {
    "character": "𘇘",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "string/rope/belt",
    "explanationCN": "绳索带"
  },
  {
    "character": "𘓹",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "palace",
    "explanationCN": "宫城"
  },
  {
    "character": "𘓮",
    "GX": "ru̱r²",
    "GHC": "rur²",
    "explanationEN": "clean",
    "explanationCN": "清洁"
  },
  {
    "character": "𗸥",
    "GX": "tuh²",
    "GHC": "tjụ²",
    "explanationEN": "mate/marry",
    "explanationCN": "淫交配婚"
  },
  {
    "character": "𘇅",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "马（马齿菜）"
  },
  {
    "character": "𗃑",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "crooked/curved",
    "explanationCN": "钓曲"
  },
  {
    "character": "𗌯",
    "GX": "vih²",
    "GHC": "wjị²",
    "explanationEN": "send/dispatch",
    "explanationCN": "派遣"
  },
  {
    "character": "𗷛",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "expel",
    "explanationCN": "赶驱"
  },
  {
    "character": "𗍶",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "carve",
    "explanationCN": "雕刻"
  },
  {
    "character": "𗘽",
    "GX": "thwə¹",
    "GHC": "thjwɨ¹",
    "explanationEN": "fear/dread",
    "explanationCN": "1.吓惧【突】"
  },
  {
    "character": "𗙎",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "information/news",
    "explanationCN": "消息"
  },
  {
    "character": "𗌰",
    "GX": "pu̱h²",
    "GHC": "pụ²",
    "explanationEN": "old/aged",
    "explanationCN": "1.长【埔】"
  },
  {
    "character": "𗙲",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "jade.necklace/net",
    "explanationCN": "珞络网莉"
  },
  {
    "character": "𗹁",
    "GX": "rmar¹",
    "GHC": "mjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【矛】"
  },
  {
    "character": "𘄝",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "give.birth.to",
    "explanationCN": "生產分娩出生"
  },
  {
    "character": "𘄍",
    "GX": "ba̱²",
    "GHC": "ba²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【播】【嚩】【袜】"
  },
  {
    "character": "𘄎",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "clear/unmixed",
    "explanationCN": "清"
  },
  {
    "character": "𘔢",
    "GX": "qhwa̱h¹",
    "GHC": "khwạ¹",
    "explanationEN": "far",
    "explanationCN": "1.远、贬、废"
  },
  {
    "character": "𗰛",
    "GX": "dzeh¹",
    "GHC": "dzjịj¹",
    "explanationEN": "cross/pass/exceed",
    "explanationCN": "1.渡过越超逾、余、亢、济"
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
    "GHC": "khiwə",
    "explanationEN": "abuse/swear",
    "explanationCN": "1.駡詈【噲】【愧】【蒯】"
  },
  {
    "character": "𗙔",
    "GX": "hwa̱ṃ¹",
    "GHC": "xwã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【桓】【活】"
  },
  {
    "character": "𗙣",
    "GX": "ha¹",
    "GHC": "xja¹",
    "explanationEN": "condemn/swear",
    "explanationCN": "駡"
  },
  {
    "character": "𗟺",
    "GX": "pəh¹",
    "GHC": "pjɨ̣¹",
    "explanationEN": "suggestion/discussion",
    "explanationCN": "议谋"
  },
  {
    "character": "𘄭",
    "GX": "tsuh¹",
    "GHC": "tsjụ¹",
    "explanationEN": "harm",
    "explanationCN": "伤害"
  },
  {
    "character": "𘘈",
    "GX": "rtśir¹",
    "GHC": "tśjir¹",
    "explanationEN": "sound.of.clamping.the.teeth",
    "explanationCN": "咬牙声"
  },
  {
    "character": "𘘟",
    "GX": "za̱¹",
    "GHC": "za¹",
    "explanationEN": "enemy",
    "explanationCN": "1.敌寇、兵戈"
  },
  {
    "character": "𗰥",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "garden",
    "explanationCN": "1.花园【寛】"
  },
  {
    "character": "𗙨",
    "GX": "ryer¹",
    "GHC": "ꞏjijr¹",
    "explanationEN": "rapidly",
    "explanationCN": "急速"
  },
  {
    "character": "𗍽",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "salute",
    "explanationCN": "敬礼拜"
  },
  {
    "character": "𘆪",
    "GX": "tya²",
    "GHC": "tja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【低】【点】"
  },
  {
    "character": "𘆷",
    "GX": "rtar¹",
    "GHC": "tjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【諦】"
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
    "GHC": "kjịj¹",
    "explanationEN": "obstruct/block",
    "explanationCN": "堵塞"
  },
  {
    "character": "𘆸",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "grey",
    "explanationCN": "灰白色"
  },
  {
    "character": "𘇏",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "calm.down/arrange.for",
    "explanationCN": "平定安置"
  },
  {
    "character": "𘆻",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "bridle",
    "explanationCN": "轡（马繮绳）"
  },
  {
    "character": "𘙮",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "white",
    "explanationCN": "1.白、（珂）贝车渠"
  },
  {
    "character": "𘙱",
    "GX": "mbae̱¹",
    "GHC": "bie̱j¹",
    "explanationEN": "excrement.of.insects",
    "explanationCN": "虫屎"
  },
  {
    "character": "𗙃",
    "GX": "liṃ¹",
    "GHC": "ljĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【陵】【林】【邻】【临】【琳】"
  },
  {
    "character": "𗹈",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "felt",
    "explanationCN": "毡"
  },
  {
    "character": "𘇣",
    "GX": "llao̱h¹",
    "GHC": "liọ¹",
    "explanationEN": "mix/stir",
    "explanationCN": "搅和"
  },
  {
    "character": "𗌱",
    "GX": "beṃ²",
    "GHC": "bjɨj²",
    "explanationEN": "cheat/swindle",
    "explanationCN": "诈骗"
  },
  {
    "character": "𗷨",
    "GX": "eṃ²",
    "GHC": "ꞏjɨj²",
    "explanationEN": "prison/jail",
    "explanationCN": "监狱;监狱"
  },
  {
    "character": "𗗶",
    "GX": "nə̱?",
    "GHC": "nə",
    "explanationEN": "fox",
    "explanationCN": "狐"
  },
  {
    "character": "𘴁",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "tail/east",
    "explanationCN": "1.尾东【旦】"
  },
  {
    "character": "𗳩",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "a.surname",
    "explanationCN": "【讹】"
  },
  {
    "character": "𗸬",
    "GX": "lheṃ¹",
    "GHC": "lhjɨj¹",
    "explanationEN": "hear/listen",
    "explanationCN": "听闻"
  },
  {
    "character": "𘅆",
    "GX": "swe¹",
    "GHC": "sjwij¹",
    "explanationEN": "grind/pestle",
    "explanationCN": "研磨"
  },
  {
    "character": "𘔚",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "red",
    "explanationCN": "霓红赤朱緋"
  },
  {
    "character": "𘙁",
    "GX": "se̱²",
    "GHC": "sej²",
    "explanationEN": "ripe.hide/pelt",
    "explanationCN": "熟（皮子）形容词】"
  },
  {
    "character": "𘗭",
    "GX": "dźuh²",
    "GHC": "dźjụ²",
    "explanationEN": "bait",
    "explanationCN": "饵"
  },
  {
    "character": "𗶊",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "younger.sister",
    "explanationCN": "妹"
  },
  {
    "character": "𗙻",
    "GX": "tśo¹",
    "GHC": "tśjo¹",
    "explanationEN": "indicate",
    "explanationCN": "指示"
  },
  {
    "character": "𘃱",
    "GX": "dzwi̱w¹",
    "GHC": "dzwew¹",
    "explanationEN": "shoulder",
    "explanationCN": "肩"
  },
  {
    "character": "𘘖",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "grace/kindness",
    "explanationCN": "恩"
  },
  {
    "character": "𘔖",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "chin",
    "explanationCN": "頜頦（下巴）"
  },
  {
    "character": "𘘵",
    "GX": "so̱ṃ¹",
    "GHC": "sow¹",
    "explanationEN": "end/buttocks",
    "explanationCN": "末尾屁股"
  },
  {
    "character": "𘙄",
    "GX": "γwae̱ṃ²",
    "GHC": "ɣiwəj²",
    "explanationEN": "thin/feeble",
    "explanationCN": "瘦羸"
  },
  {
    "character": "𘚙",
    "GX": "pə̱h¹",
    "GHC": "pə̣¹",
    "explanationEN": "smell.of.meat",
    "explanationCN": "1.肉香、粘"
  },
  {
    "character": "𗉬",
    "GX": "gwe¹",
    "GHC": "gjwij¹",
    "explanationEN": "offer.sacrifices.god.or.ancestors",
    "explanationCN": "1.祭祀、祠"
  },
  {
    "character": "𗚂",
    "GX": "so²",
    "GHC": "sjo²",
    "explanationEN": "be.familiar.with",
    "explanationCN": "1.熟悉【诵】【襄】【穰】【相】【翔】【祥】【湘】【像】"
  },
  {
    "character": "𘈭",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "god/deity/divinity",
    "explanationCN": "神"
  },
  {
    "character": "𗍠",
    "GX": "khiṃ¹",
    "GHC": "khjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【琴】【禽】【清】【顷】"
  },
  {
    "character": "𗉵",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "do:LV,.compare.𘃡",
    "explanationCN": "to do:LV, compare"
  },
  {
    "character": "𗉴",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "lean.meat",
    "explanationCN": "1.瘦肉、碎肉"
  },
  {
    "character": "𗰴",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "toil",
    "explanationCN": "劳苦"
  },
  {
    "character": "𗉯",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "pan",
    "explanationCN": "锅】"
  },
  {
    "character": "𘈰",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj²",
    "explanationEN": "do.harm/damage/impair",
    "explanationCN": "损害"
  },
  {
    "character": "𗗷",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "noise",
    "explanationCN": "哄闹"
  },
  {
    "character": "𗶕",
    "GX": "yaṃ²",
    "GHC": "ꞏjã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【烟】【胭】【延】【燕】】"
  },
  {
    "character": "𘅄",
    "GX": "sa¹",
    "GHC": "sja¹",
    "explanationEN": "do",
    "explanationCN": "1.做作办【萨】【颯】【散】【三】【苏】【僧】【索】"
  },
  {
    "character": "𗸫",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "do",
    "explanationCN": "做办"
  },
  {
    "character": "𗸳",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "widowed/alone",
    "explanationCN": "寡"
  },
  {
    "character": "𘞄",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "flag/raise.in.wind",
    "explanationCN": "1.幡帜、吹扬动词"
  },
  {
    "character": "𘝄",
    "GX": "rvwi̱r²",
    "GHC": "wer²",
    "explanationEN": "wing",
    "explanationCN": "羽翼"
  },
  {
    "character": "𘔍",
    "GX": "yu¹",
    "GHC": "ꞏju̱¹",
    "explanationEN": "present.(a.gift)",
    "explanationCN": "馈赠"
  },
  {
    "character": "𘘀",
    "GX": "nśi¹",
    "GHC": "śji̱¹",
    "explanationEN": "livestock/domestic.animals",
    "explanationCN": "牲】"
  },
  {
    "character": "𗟧",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "gain/acquire/obtain",
    "explanationCN": "取得与音义相同，加在之后，表示动作的完成程度，具有能愿的作用"
  },
  {
    "character": "𗟰",
    "GX": "lhwi¹",
    "GHC": "lhjwi¹",
    "explanationEN": "like.the.new.and.loathe.the.old",
    "explanationCN": "喜新厌旧"
  },
  {
    "character": "𗘚",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "dark.green",
    "explanationCN": "绿（青）色"
  },
  {
    "character": "𗘓",
    "GX": "hu¹",
    "GHC": "xju¹",
    "explanationEN": "empty/unoccupied",
    "explanationCN": "（按：龚煌城认為“此字与汉语‘虚’字不但同音，功用也相同”（程 739））英文释义empty; unoccupied详细解释请参考《简明夏汉字典》第202页。龚煌城释义蹄《同义》释义黑mojikyo字体等景永时字体给"
  },
  {
    "character": "𗸝",
    "GX": "γo̱ṃ¹",
    "GHC": "ɣow¹",
    "explanationEN": "dizzy",
    "explanationCN": "晕"
  },
  {
    "character": "𗸜",
    "GX": "qhwə̱¹",
    "GHC": "khwə¹",
    "explanationEN": "half",
    "explanationCN": "半（春菜）"
  },
  {
    "character": "𗍇",
    "GX": "ṣuo¹",
    "GHC": "śiow¹",
    "explanationEN": "deep.black",
    "explanationCN": "参"
  },
  {
    "character": "𗗲",
    "GX": "qhai̱h²",
    "GHC": "khiẹ²",
    "explanationEN": "butcher",
    "explanationCN": "宰"
  },
  {
    "character": "𘄸",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "be.angry",
    "explanationCN": "生气"
  },
  {
    "character": "𗳞",
    "GX": "lha̱h¹",
    "GHC": "lhạ¹",
    "explanationEN": "beg",
    "explanationCN": "乞求"
  },
  {
    "character": "𗳧",
    "GX": "mai̱h¹",
    "GHC": "miẹ²",
    "explanationEN": "make.a.concession/yield/give.in",
    "explanationCN": "退让"
  },
  {
    "character": "𘑵",
    "GX": "nthə¹",
    "GHC": "thjɨ̱¹",
    "explanationEN": "revolve/rotate/spin",
    "explanationCN": "旋转（动）"
  },
  {
    "character": "𘘶",
    "GX": "vo¹",
    "GHC": "wjo¹",
    "explanationEN": "not",
    "explanationCN": "（按; 新版本下注，具有连接词的作用，加在动词和形容词之前，具有“所……”之音。详见。字已不通行，用代替。）"
  },
  {
    "character": "𘈁",
    "GX": "ṣaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "wren",
    "explanationCN": "鷦鷯"
  },
  {
    "character": "𗉗",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "lie/sleep",
    "explanationCN": "睡卧"
  },
  {
    "character": "𘅤",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "write",
    "explanationCN": "1.写书、凭、篤"
  },
  {
    "character": "𘝈",
    "GX": "dźih²",
    "GHC": "dźjar²",
    "explanationEN": "demon/devil",
    "explanationCN": "魔鬼"
  },
  {
    "character": "𗘘",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "colored.silk",
    "explanationCN": "彩绢"
  },
  {
    "character": "𘄢",
    "GX": "yaw¹",
    "GHC": "ꞏja̱¹",
    "explanationEN": "yes/okay/INTRG.RTH",
    "explanationCN": "然诺"
  },
  {
    "character": "𘇤",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "tease/play",
    "explanationCN": "戏耍戏剧游戏"
  },
  {
    "character": "𗳟",
    "GX": "vwe̱ṃ¹",
    "GHC": "wəj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【愧】【外】【韦】【伟】"
  },
  {
    "character": "𘄷",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "stirrup",
    "explanationCN": "1.鐙、弩弓"
  },
  {
    "character": "𘈬",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "a.skilled.workman",
    "explanationCN": "1.巧匠【寧】【涅】"
  },
  {
    "character": "𘔡",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "colored.silk",
    "explanationCN": "彩绢"
  },
  {
    "character": "𘑶",
    "GX": "tse¹",
    "GHC": "tsjij¹",
    "explanationEN": "he/it",
    "explanationCN": "他它彼"
  },
  {
    "character": "𘘩",
    "GX": "kə²",
    "GHC": "kjɨ²",
    "explanationEN": "an.animal.looks.like.a.deer",
    "explanationCN": "麂】"
  },
  {
    "character": "𗶔",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "hat/cap",
    "explanationCN": "帽子"
  },
  {
    "character": "𗟢",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "grant/award",
    "explanationCN": "施赏"
  },
  {
    "character": "𘈱",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "bored/worried",
    "explanationCN": "闷忧"
  },
  {
    "character": "𘙕",
    "GX": "kə²",
    "GHC": "kjɨ²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "吃兜菜"
  },
  {
    "character": "𘙠",
    "GX": "qao̱ṃ¹",
    "GHC": "kiow¹",
    "explanationEN": "obstinate/stubborn",
    "explanationCN": "犟】"
  },
  {
    "character": "𘙤",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "husband",
    "explanationCN": "夫"
  },
  {
    "character": "𗌸",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "a.surname",
    "explanationCN": "【宁】"
  },
  {
    "character": "𗶃",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "a.surname",
    "explanationCN": "【至】【止】【纸】【枝】【旨】【指】【知】【智】【脂】【蜘】【鴟】【軹】【志】【之】"
  },
  {
    "character": "𘅇",
    "GX": "ti¹",
    "GHC": "tji¹",
    "explanationEN": "ᴘʀᴏʜɪʙ",
    "explanationCN": "ᴘʀᴏʜɪʙ"
  },
  {
    "character": "𘴆",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "respectful",
    "explanationCN": "恭敬"
  },
  {
    "character": "𘅫",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "work/position",
    "explanationCN": "事做事管理局务"
  },
  {
    "character": "𗳦",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "even/equal",
    "explanationCN": "1.平等齐、俱斋并、谊均伦、两字重迭，意為“同时一齐”"
  },
  {
    "character": "𗳫",
    "GX": "lhih¹",
    "GHC": "lhjọ¹",
    "explanationEN": "take/marry",
    "explanationCN": "取拏娶"
  },
  {
    "character": "𘔋",
    "GX": "thwu²",
    "GHC": "thjwu²",
    "explanationEN": "borrow.money",
    "explanationCN": "借债"
  },
  {
    "character": "𘞀",
    "GX": "na²",
    "GHC": "lja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【理】【黎】"
  },
  {
    "character": "𘔞",
    "GX": "ho̱ṃ¹",
    "GHC": "xow¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【黄】【煌】【河】【皇】【洪】【何】"
  },
  {
    "character": "𘇾",
    "GX": "dźih²",
    "GHC": "dźjị²",
    "explanationEN": "daughter",
    "explanationCN": "女儿"
  },
  {
    "character": "𘈂",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "thread",
    "explanationCN": "綫"
  },
  {
    "character": "𘙅",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "belt/girdle",
    "explanationCN": "带"
  },
  {
    "character": "𘞋",
    "GX": "tseṃh¹",
    "GHC": "tsjɨj¹",
    "explanationEN": "full/packed",
    "explanationCN": "满盈"
  },
  {
    "character": "𘗯",
    "GX": "nllo̱r¹",
    "GHC": "ljo̱r¹",
    "explanationEN": "false/fake",
    "explanationCN": "偽諂"
  },
  {
    "character": "𘈨",
    "GX": "rnu̱r¹",
    "GHC": "nur¹",
    "explanationEN": "indicate/guide",
    "explanationCN": "指示"
  },
  {
    "character": "𗌺",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "servant",
    "explanationCN": "奴僕"
  },
  {
    "character": "𗘒",
    "GX": "qwe̱¹",
    "GHC": "kwej¹",
    "explanationEN": "hoof",
    "explanationCN": "1.蹄、蚌"
  },
  {
    "character": "𗉡",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "uneven/inconsistent",
    "explanationCN": "参差"
  },
  {
    "character": "𗉢",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "hand",
    "explanationCN": "1.手【绥】"
  },
  {
    "character": "𗉳",
    "GX": "qwa̱h²",
    "GHC": "kwạ²",
    "explanationEN": "hoe",
    "explanationCN": "锄"
  },
  {
    "character": "𗎝",
    "GX": "pha¹",
    "GHC": "phja²",
    "explanationEN": "wallet/pocketbook",
    "explanationCN": "皮夹"
  },
  {
    "character": "𗎞",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "blindness",
    "explanationCN": "瞑盲"
  },
  {
    "character": "𗎢",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【天】聪明"
  },
  {
    "character": "𗙿",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "guard/defend",
    "explanationCN": "守护"
  },
  {
    "character": "𗶈",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "female",
    "explanationCN": "女性巧女阴性"
  },
  {
    "character": "𘅑",
    "GX": "bo̱ṃ²",
    "GHC": "bow²",
    "explanationEN": "abashed/ashamed",
    "explanationCN": "羞愧"
  },
  {
    "character": "𘄾",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "move/migrate",
    "explanationCN": "迁徒"
  },
  {
    "character": "𘈘",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "days/times",
    "explanationCN": "时】"
  },
  {
    "character": "𘘼",
    "GX": "lhwi̱²",
    "GHC": "lwe²",
    "explanationEN": "slow/lazy",
    "explanationCN": "重定向至1763"
  },
  {
    "character": "𘙊",
    "GX": "lwi̱h²",
    "GHC": "lwe²",
    "explanationEN": "slow/lazy",
    "explanationCN": "慢缓停怠"
  },
  {
    "character": "𘒹",
    "GX": "lhu²",
    "GHC": "lhu",
    "explanationEN": "increase/add",
    "explanationCN": "增盛闰"
  },
  {
    "character": "𘝊",
    "GX": "rmi̱r²",
    "GHC": "mer²",
    "explanationEN": "puzzle/confuse",
    "explanationCN": "迷感"
  },
  {
    "character": "𗘑",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "dark.green",
    "explanationCN": "青绿色"
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
    "GHC": "ꞏja¹",
    "explanationEN": "cat",
    "explanationCN": "1.猫儿【牙】【燕】"
  },
  {
    "character": "𗍗",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "black",
    "explanationCN": "1.黑戊【卫】【威】【韦】（音 204）"
  },
  {
    "character": "𗍟",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "defend",
    "explanationCN": "守护"
  },
  {
    "character": "𗟨",
    "GX": "lhwi¹",
    "GHC": "lhjwi¹",
    "explanationEN": "take/seize/draw",
    "explanationCN": "1.取夺吸、接堕援"
  },
  {
    "character": "𘄡",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "wisdom",
    "explanationCN": "智"
  },
  {
    "character": "𘄦",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "bright/intelligent",
    "explanationCN": "聪明聪慧聪颖"
  },
  {
    "character": "𘙖",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "vat/jar/crock",
    "explanationCN": "缸瓮"
  },
  {
    "character": "𘔠",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "servant",
    "explanationCN": "僕奴"
  },
  {
    "character": "𗍢",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "spade",
    "explanationCN": "锹"
  },
  {
    "character": "𗳯",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "wrestle/fight",
    "explanationCN": "摔跤相扑角力"
  },
  {
    "character": "𗉧",
    "GX": "tsheṃh¹",
    "GHC": "tshjɨ̣j¹",
    "explanationEN": "door",
    "explanationCN": "门户"
  },
  {
    "character": "𗙼",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "ᴀɴᴛᴇ",
    "explanationCN": "ᴀɴᴛᴇ"
  },
  {
    "character": "𗸷",
    "GX": "lhweh²",
    "GHC": "lhjwịj²",
    "explanationEN": "frighten/scare",
    "explanationCN": "惊吓"
  },
  {
    "character": "𗡤",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "seek/look.for",
    "explanationCN": "寻觅"
  },
  {
    "character": "𗶉",
    "GX": "rzər¹",
    "GHC": "zjɨr¹",
    "explanationEN": "beautiful/splendid",
    "explanationCN": "美丽美妙"
  },
  {
    "character": "𗶋",
    "GX": "rtsir¹",
    "GHC": "tsjir¹",
    "explanationEN": "wife",
    "explanationCN": "妻子"
  },
  {
    "character": "𗉨",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "five",
    "explanationCN": "五【折】"
  },
  {
    "character": "𘆈",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "man",
    "explanationCN": "男夫君"
  },
  {
    "character": "𗱉",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "lack/fault",
    "explanationCN": "缺闕形容词"
  },
  {
    "character": "𗸀",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "appointment",
    "explanationCN": "1.任、迫"
  },
  {
    "character": "𘇨",
    "GX": "ṣwai̱¹",
    "GHC": "śiwe¹",
    "explanationEN": "shining.white",
    "explanationCN": "白皑皑"
  },
  {
    "character": "𗰼",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "arrange.for",
    "explanationCN": "安置"
  },
  {
    "character": "𘞇",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "thin.down",
    "explanationCN": "使薄"
  },
  {
    "character": "𗷱",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj²",
    "explanationEN": "benefaction/beneficence",
    "explanationCN": "恩功"
  },
  {
    "character": "𘈏",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "coarse/rough/rude",
    "explanationCN": "粗糙粗暴"
  },
  {
    "character": "𗳸",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "chess.playing",
    "explanationCN": "博弈"
  },
  {
    "character": "𗰻",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "fear/dread",
    "explanationCN": "1.畏惧、檄"
  },
  {
    "character": "𗱀",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "host/master",
    "explanationCN": "1.主、通常附在之后，表示领属关系、不表示领主关系，而表示强调原来的词汇意义、加在动词后，表示该动作的主体、加在之后，表示敌人仇人之意"
  },
  {
    "character": "𗰿",
    "GX": "ywi²",
    "GHC": "ꞏjwi²",
    "explanationEN": "barter/exchange",
    "explanationCN": "易换】"
  },
  {
    "character": "𗳷",
    "GX": "tṣhau̱h¹",
    "GHC": "tśhjụ¹",
    "explanationEN": "lure",
    "explanationCN": "诱【锄】【处】【杵】【枢】【住】【柱】【厨】【助】【泽】【楚】【抒】【褚】【初】"
  },
  {
    "character": "𗳹",
    "GX": "tṣhau̱h¹",
    "GHC": "",
    "explanationEN": "lure",
    "explanationCN": "引诱"
  },
  {
    "character": "𘒸",
    "GX": "fwə¹",
    "GHC": "xjwɨ¹",
    "explanationEN": "treasure",
    "explanationCN": "宝"
  },
  {
    "character": "𗱌",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "free.oneself.from…/take.off",
    "explanationCN": "解脱"
  },
  {
    "character": "𗸁",
    "GX": "lwo̱²",
    "GHC": "lwo²",
    "explanationEN": "firm/strong",
    "explanationCN": "牢固"
  },
  {
    "character": "𘈒",
    "GX": "dze²",
    "GHC": "dzjij²",
    "explanationEN": "other",
    "explanationCN": "其他各异"
  },
  {
    "character": "𘜊",
    "GX": "rphar¹",
    "GHC": "phjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【抛】"
  },
  {
    "character": "𗷿",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "grey",
    "explanationCN": "灰【麻】"
  },
  {
    "character": "𗸄",
    "GX": "ni?",
    "GHC": "nji",
    "explanationEN": "timid/weak",
    "explanationCN": "弱"
  },
  {
    "character": "𘆋",
    "GX": "γwo̱ṃh¹",
    "GHC": "ꞏwọ¹",
    "explanationEN": "thick/bulky",
    "explanationCN": "1.粗大、隆"
  },
  {
    "character": "𘑰",
    "GX": "rdwi̱wr²",
    "GHC": "dwewr²",
    "explanationEN": "silent",
    "explanationCN": "默"
  },
  {
    "character": "𗸉",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj²",
    "explanationEN": "horse.shoulder",
    "explanationCN": "马肩"
  },
  {
    "character": "𘘎",
    "GX": "rtswə̱r¹",
    "GHC": "tswər¹",
    "explanationEN": "curse/swear",
    "explanationCN": "咒诅"
  },
  {
    "character": "𗖝",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "few/a.little",
    "explanationCN": "少"
  },
  {
    "character": "𗖢",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "indicate/instruct",
    "explanationCN": "指示"
  },
  {
    "character": "𗖺",
    "GX": "ku¹",
    "GHC": "kju¹",
    "explanationEN": "eardrop",
    "explanationCN": "璫耳坠"
  },
  {
    "character": "𗗊",
    "GX": "ku¹",
    "GHC": "kju¹",
    "explanationEN": "sprouts",
    "explanationCN": "芽"
  },
  {
    "character": "𗖗",
    "GX": "si̱ṃ²",
    "GHC": "sẽ²",
    "explanationEN": "blow.(one’s.nose)/groan/snort",
    "explanationCN": "擤"
  },
  {
    "character": "𗗈",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "read",
    "explanationCN": "读】"
  },
  {
    "character": "𘜏",
    "GX": "rnar¹",
    "GHC": "njar¹",
    "explanationEN": "check/proofread",
    "explanationCN": "校"
  },
  {
    "character": "𘙷",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "cut/reduce",
    "explanationCN": "截裁"
  },
  {
    "character": "𗕽",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "know/realize/understand",
    "explanationCN": "知了解"
  },
  {
    "character": "𗖇",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "firm",
    "explanationCN": "1.牢厚、巧（巧匠）"
  },
  {
    "character": "𗖆",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "living.in.peace",
    "explanationCN": "安居"
  },
  {
    "character": "𗖡",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "crime/guilt",
    "explanationCN": "罪"
  },
  {
    "character": "𗖭",
    "GX": "nnu²",
    "GHC": "nju̱²",
    "explanationEN": "happy/joyous",
    "explanationCN": "喜悦"
  },
  {
    "character": "𗖸",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "say/eulogize",
    "explanationCN": "曰颂唱"
  },
  {
    "character": "𘇳",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "the.edge.of.a.knife",
    "explanationCN": "1.刀、靂"
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
    "explanationEN": "roast/warm.up",
    "explanationCN": "温热烤"
  },
  {
    "character": "𗉃",
    "GX": "teṃ¹",
    "GHC": "tjij¹",
    "explanationEN": "lamp",
    "explanationCN": "灯"
  },
  {
    "character": "𗖣",
    "GX": "rźai̱r¹",
    "GHC": "źier¹",
    "explanationEN": "swear/curse",
    "explanationCN": "詈駡呵"
  },
  {
    "character": "𗖞",
    "GX": "tśeh¹",
    "GHC": "tśjịj¹",
    "explanationEN": "flatter/toady",
    "explanationCN": "1.奉承、告、贱（诬）"
  },
  {
    "character": "𗈿",
    "GX": "tsha¹",
    "GHC": "tshja¹",
    "explanationEN": "heat.up/burn",
    "explanationCN": "热烫"
  },
  {
    "character": "𗖻",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "respect",
    "explanationCN": "尊"
  },
  {
    "character": "𗖤",
    "GX": "ntu̱¹",
    "GHC": "tu̱¹",
    "explanationEN": "look.for",
    "explanationCN": "寻觅"
  },
  {
    "character": "𗴇",
    "GX": "lweh²",
    "GHC": "ljwịj²",
    "explanationEN": "mountain",
    "explanationCN": "岭】"
  },
  {
    "character": "𘞒",
    "GX": "nśə¹",
    "GHC": "śjɨ̱¹",
    "explanationEN": "doubt",
    "explanationCN": "1.疑惑怀疑、恍惚"
  },
  {
    "character": "𗹘",
    "GX": "do̱ṃ¹",
    "GHC": "dow¹",
    "explanationEN": "watch/survey/observe",
    "explanationCN": "观察"
  },
  {
    "character": "𘝸",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "gorgeous",
    "explanationCN": "斑烂絇丽"
  },
  {
    "character": "𗹑",
    "GX": "tśeṃ¹",
    "GHC": "tśjɨj¹",
    "explanationEN": "correct/upright",
    "explanationCN": "1.正形容词】、二字重迭，表示“端正”“正经”"
  },
  {
    "character": "𘈴",
    "GX": "ga²",
    "GHC": "gja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【业】"
  },
  {
    "character": "𗴅",
    "GX": "qai̱²",
    "GHC": "kie²",
    "explanationEN": "dangerous",
    "explanationCN": "险"
  },
  {
    "character": "𗳆",
    "GX": "lhə̱²",
    "GHC": "lhjo¹",
    "explanationEN": "lose/die/fail",
    "explanationCN": "失丧亡衰蹶挫过殆"
  },
  {
    "character": "𗳌",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "that/those/it",
    "explanationCN": "彼"
  },
  {
    "character": "𘞑",
    "GX": "kiṃ¹",
    "GHC": "kjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【金】【锦】"
  },
  {
    "character": "𗳎",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "examine/look.into",
    "explanationCN": "察"
  },
  {
    "character": "𗷢",
    "GX": "tśuo²",
    "GHC": "tśjo̱w²",
    "explanationEN": "feed/raise/keep",
    "explanationCN": "喂养"
  },
  {
    "character": "𗰨",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "an.old-fashioned.long.narrow.table.or.desk",
    "explanationCN": "1.案、汇集【优】"
  },
  {
    "character": "𗙝",
    "GX": "kha̱h²",
    "GHC": "khạ",
    "explanationEN": "(usually.used.in.the.negative).sound/noise",
    "explanationCN": "生息"
  },
  {
    "character": "𘘞",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "month",
    "explanationCN": "月份"
  },
  {
    "character": "𗟸",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "palate",
    "explanationCN": "顎（口腔上顎）"
  },
  {
    "character": "𘚅",
    "GX": "lha̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "shine",
    "explanationCN": "耀"
  },
  {
    "character": "𗙁",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "sound/voice",
    "explanationCN": "声音"
  },
  {
    "character": "𘄪",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "hit/strike",
    "explanationCN": "打击杖弹"
  },
  {
    "character": "𘗧",
    "GX": "zwih¹",
    "GHC": "zjwị¹",
    "explanationEN": "marry",
    "explanationCN": "婚嫁"
  },
  {
    "character": "𘜙",
    "GX": "tśuh²",
    "GHC": "tśjụ²",
    "explanationEN": "can/dare",
    "explanationCN": "能敢"
  },
  {
    "character": "𘚉",
    "GX": "yoṃ²",
    "GHC": "ꞏjo̱r²",
    "explanationEN": "weave/knit",
    "explanationCN": "编织结"
  },
  {
    "character": "𘙜",
    "GX": "nə̱h¹",
    "GHC": "nə̣¹",
    "explanationEN": "scabies",
    "explanationCN": "疥癩"
  },
  {
    "character": "𗟮",
    "GX": "rker²",
    "GHC": "kji̱r²",
    "explanationEN": "rob/steal",
    "explanationCN": "偷盗窃"
  },
  {
    "character": "𘘗",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "wide/broad",
    "explanationCN": "寛阔"
  },
  {
    "character": "𗳭",
    "GX": "ryer²",
    "GHC": "ꞏjijr²",
    "explanationEN": "execute/kill",
    "explanationCN": "除诛斩戮"
  },
  {
    "character": "𘔝",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "hide",
    "explanationCN": "1.匿、倍"
  },
  {
    "character": "𘙃",
    "GX": "yə¹",
    "GHC": "ꞏjɨ¹",
    "explanationEN": "level/fat",
    "explanationCN": "平坦"
  },
  {
    "character": "𘝉",
    "GX": "???",
    "GHC": "",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𗉖",
    "GX": "tsheṃ¹",
    "GHC": "tshjɨj¹",
    "explanationEN": "small/thin",
    "explanationCN": "细微小"
  },
  {
    "character": "𗉞",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "float/drift",
    "explanationCN": "漂荡"
  },
  {
    "character": "𘈪",
    "GX": "ta¹",
    "GHC": "tja¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【怛】【多】【哆】"
  },
  {
    "character": "𗶇",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "(in.Chinese.thought).yin",
    "explanationCN": "阴"
  },
  {
    "character": "𘅅",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "leg",
    "explanationCN": "腿脛"
  },
  {
    "character": "𘙂",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "low/inferior",
    "explanationCN": "低下轻卑"
  },
  {
    "character": "𗵶",
    "GX": "ŋhe²",
    "GHC": "xjij²",
    "explanationEN": "broad/wide",
    "explanationCN": "1.寛阔宽广【歆】"
  },
  {
    "character": "𗟥",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "reduce",
    "explanationCN": "减除蠲"
  },
  {
    "character": "𗌷",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "fort/fortress",
    "explanationCN": "堡壁】"
  },
  {
    "character": "𗗱",
    "GX": "dẓaə̱¹",
    "GHC": "dźiə¹",
    "explanationEN": "fox",
    "explanationCN": "狐"
  },
  {
    "character": "𗡱",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "thin/tiny",
    "explanationCN": "细】"
  },
  {
    "character": "𗶂",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "cotton",
    "explanationCN": "棉"
  },
  {
    "character": "𗸚",
    "GX": "ŋġa̱¹",
    "GHC": "ga̱¹",
    "explanationEN": "thin/emaciated",
    "explanationCN": "消瘦"
  },
  {
    "character": "𘚊",
    "GX": "yoṃ²",
    "GHC": "ꞏjo̱r²",
    "explanationEN": "afterbirth",
    "explanationCN": "胞囊"
  },
  {
    "character": "𗟡",
    "GX": "lwu̱²",
    "GHC": "lwu²",
    "explanationEN": "sell/loan",
    "explanationCN": "货卖"
  },
  {
    "character": "𘞶",
    "GX": "mphu̱²",
    "GHC": "phu̱²",
    "explanationEN": "luxuriant/flourishing",
    "explanationCN": "1.茂盛、崇"
  },
  {
    "character": "𗡥",
    "GX": "ryər²",
    "GHC": "ꞏjɨr²",
    "explanationEN": "whip",
    "explanationCN": "鞭子"
  },
  {
    "character": "𗱋",
    "GX": "thəh²",
    "GHC": "thjɨ̣²",
    "explanationEN": "roll.up/volume.(of.books)",
    "explanationCN": "卷"
  },
  {
    "character": "𘈔",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "hide.(oneself)/avoid",
    "explanationCN": "躲避"
  },
  {
    "character": "𘆌",
    "GX": "tsheṃh¹",
    "GHC": "tshjɨ̣j¹",
    "explanationEN": "pare",
    "explanationCN": "削"
  },
  {
    "character": "𘇶",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "millet",
    "explanationCN": "粟糜"
  },
  {
    "character": "𘇸",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "shaman/sorcerer",
    "explanationCN": "巫师"
  },
  {
    "character": "𗬌",
    "GX": "zi̱ṃ¹",
    "GHC": "zẽ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【讼】虫声"
  },
  {
    "character": "𘉟",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "compel",
    "explanationCN": "胁迫"
  },
  {
    "character": "𗃐",
    "GX": "???",
    "GHC": "",
    "explanationEN": "hunchback",
    "explanationCN": "腰傴僂"
  },
  {
    "character": "𗢨",
    "GX": "dzwo²",
    "GHC": "dzjwo²",
    "explanationEN": "human.being/person",
    "explanationCN": "人"
  },
  {
    "character": "𘊏",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "insect/worm",
    "explanationCN": "虫"
  },
  {
    "character": "𘟥",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "insect/maggot",
    "explanationCN": "虫蛆"
  },
  {
    "character": "𗬍",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "silk",
    "explanationCN": "1.丝、蚕"
  },
  {
    "character": "𗹭",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "tall",
    "explanationCN": "高上"
  },
  {
    "character": "𗎰",
    "GX": "tśəh¹",
    "GHC": "tśjɨ̣¹",
    "explanationEN": "move/migrate",
    "explanationCN": "徒移迁"
  },
  {
    "character": "𗎭",
    "GX": "mmi¹",
    "GHC": "mji̱¹",
    "explanationEN": "house/residence",
    "explanationCN": "家宅宫捨居厦"
  },
  {
    "character": "𗂍",
    "GX": "nlhi¹",
    "GHC": "lhji̱¹",
    "explanationEN": "pull.out/pick/take",
    "explanationCN": "拔抽摘提取争掣擒"
  },
  {
    "character": "𗃆",
    "GX": "ryar¹",
    "GHC": "ꞏjar¹",
    "explanationEN": "daughter-in-law",
    "explanationCN": "媳妇"
  },
  {
    "character": "𗀿",
    "GX": "li¹",
    "GHC": "lji¹",
    "explanationEN": "tired",
    "explanationCN": "劳累乏"
  },
  {
    "character": "𗆳",
    "GX": "nye¹",
    "GHC": "ꞏji̱j¹",
    "explanationEN": "calm",
    "explanationCN": "平静伏贴伏定"
  },
  {
    "character": "𗂭",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "follow",
    "explanationCN": "随从跟陪"
  },
  {
    "character": "𗂮",
    "GX": "rkər¹",
    "GHC": "kjɨr¹",
    "explanationEN": "fly",
    "explanationCN": "飞（斜飞）"
  },
  {
    "character": "𗅥",
    "GX": "tu²",
    "GHC": "tju²",
    "explanationEN": "beat",
    "explanationCN": "打敲槌"
  },
  {
    "character": "𗂜",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "round.as.a.ball/satisfactory",
    "explanationCN": "滚圆圆满"
  },
  {
    "character": "𗆒",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "slack",
    "explanationCN": "懈怠"
  },
  {
    "character": "𗆬",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "impressive.and.dignified.manners",
    "explanationCN": "威仪"
  },
  {
    "character": "𗆟",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "a.surname",
    "explanationCN": "【名】【弥】"
  },
  {
    "character": "𗅱",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "map/picture",
    "explanationCN": "图"
  },
  {
    "character": "𗂚",
    "GX": "ye²",
    "GHC": "",
    "explanationEN": "banquet",
    "explanationCN": "宴"
  },
  {
    "character": "𗅉",
    "GX": "nuo¹",
    "GHC": "niow¹",
    "explanationEN": "ABE:abessive/POSTE:postessive",
    "explanationCN": "ABE; POSTE"
  },
  {
    "character": "𗅧",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "tendon/muscle",
    "explanationCN": "筋"
  },
  {
    "character": "𗆓",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "a.surname",
    "explanationCN": "【弥】"
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
    "explanationEN": "ceremony/rite/manner",
    "explanationCN": "1.礼閤法仪式制、俗、与（道）结合為“风俗”"
  },
  {
    "character": "𗆅",
    "GX": "dźe²",
    "GHC": "",
    "explanationEN": "tail/end",
    "explanationCN": "尾末"
  },
  {
    "character": "𗆲",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "succession",
    "explanationCN": "连续"
  },
  {
    "character": "𗆤",
    "GX": "dźih²",
    "GHC": "dźjiar²",
    "explanationEN": "true/real",
    "explanationCN": "真諦"
  },
  {
    "character": "𗅘",
    "GX": "kha̱ṃ¹",
    "GHC": "khã¹",
    "explanationEN": "看坎堪",
    "explanationCN": "1.坎】、又音【侃】【堪】【看】"
  },
  {
    "character": "𗆀",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "salt",
    "explanationCN": "1.盐【五】【吴】【乌】【吾】"
  },
  {
    "character": "𗆘",
    "GX": "qhə̱h¹",
    "GHC": "khə̣¹",
    "explanationEN": "contract",
    "explanationCN": "缩皱"
  },
  {
    "character": "𗆥",
    "GX": "ŋkhwa̱²",
    "GHC": "khwa̱²",
    "explanationEN": "decrepit.and.behind.the.times",
    "explanationCN": "老朽"
  },
  {
    "character": "𗅋",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "ɴᴇɢ",
    "explanationCN": "ɴᴇɢ"
  },
  {
    "character": "𗁈",
    "GX": "twa̱¹",
    "GHC": "twa¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音【怛】"
  },
  {
    "character": "𗁝",
    "GX": "giw¹",
    "GHC": "gjiw¹",
    "explanationEN": "respectful",
    "explanationCN": "1.恭敬、曲"
  },
  {
    "character": "𗁸",
    "GX": "si̱²",
    "GHC": "se²",
    "explanationEN": "tighten",
    "explanationCN": "1.繄、蹇塞闭"
  },
  {
    "character": "𗁷",
    "GX": "qhaa̱¹",
    "GHC": "khia¹",
    "explanationEN": "shoot/fire",
    "explanationCN": "1.射、捕"
  },
  {
    "character": "𗂄",
    "GX": "γwa̱¹",
    "GHC": "ɣwa¹",
    "explanationEN": "treasure",
    "explanationCN": "宝物"
  },
  {
    "character": "𗂵",
    "GX": "mphaa̱²",
    "GHC": "phia̱²",
    "explanationEN": "divide/separate",
    "explanationCN": "分"
  },
  {
    "character": "𗁍",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "a.surname",
    "explanationCN": "【部】"
  },
  {
    "character": "𗂥",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "before",
    "explanationCN": "前昔久"
  },
  {
    "character": "𗂊",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "jump/leap",
    "explanationCN": "1.跃、尊"
  },
  {
    "character": "𗃃",
    "GX": "rler¹",
    "GHC": "lji̱r¹",
    "explanationEN": "rub/knead",
    "explanationCN": "1.按摩抚（揉搓）、拨"
  },
  {
    "character": "𗁧",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "become.thin/thin.down",
    "explanationCN": "消瘦"
  },
  {
    "character": "𗂿",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "light.a.fire",
    "explanationCN": "点火"
  },
  {
    "character": "𗹮",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "shoulder",
    "explanationCN": "肩梁"
  },
  {
    "character": "𗹤",
    "GX": "ṣae̱¹",
    "GHC": "śiej¹",
    "explanationEN": "win",
    "explanationCN": "胜】"
  },
  {
    "character": "𗃀",
    "GX": "dzwə¹",
    "GHC": "tsjwɨ¹",
    "explanationEN": "rub/knead",
    "explanationCN": "揉搓"
  },
  {
    "character": "𗺀",
    "GX": "li̱ṃ¹",
    "GHC": "lẽ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【瓴】【檁】【陵】"
  },
  {
    "character": "𘉂",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj²",
    "explanationEN": "moat/chasm/gully",
    "explanationCN": "堑沟"
  },
  {
    "character": "𗺁",
    "GX": "hae̱ṃ²",
    "GHC": "xiəj²",
    "explanationEN": "a.surname",
    "explanationCN": "【行】【衡】【薤】【解】"
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
    "explanationCN": "肛"
  },
  {
    "character": "𗀰",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "great.waves/billows",
    "explanationCN": "1.波涛、闪闪"
  },
  {
    "character": "𗁐",
    "GX": "moh²",
    "GHC": "mjọ²",
    "explanationEN": "exhausted/dried.up",
    "explanationCN": "枯竭尽瘦"
  },
  {
    "character": "𗄭",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "gather",
    "explanationCN": "集聚俱】"
  },
  {
    "character": "𗄸",
    "GX": "tśha²",
    "GHC": "tśhja²",
    "explanationEN": "impressive.and.dignified.manners",
    "explanationCN": "威仪"
  },
  {
    "character": "𗅔",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "be.not",
    "explanationCN": "不是"
  },
  {
    "character": "𗅖",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "alms",
    "explanationCN": "布施"
  },
  {
    "character": "𗆞",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "look.inthe.distance.from.a.high.place",
    "explanationCN": "眺远眺"
  },
  {
    "character": "𗆫",
    "GX": "rlər²",
    "GHC": "ljɨ̱r²",
    "explanationEN": "think.of/long.for",
    "explanationCN": "思念忆"
  },
  {
    "character": "𗄹",
    "GX": "pe¹",
    "GHC": "pjij¹",
    "explanationEN": "deep.green",
    "explanationCN": "青玄色"
  },
  {
    "character": "𗄩",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "pass.through",
    "explanationCN": "穿贯"
  },
  {
    "character": "𗅕",
    "GX": "nli̱²",
    "GHC": "le̱²",
    "explanationEN": "dark.(of.complexion)",
    "explanationCN": "黧色】"
  },
  {
    "character": "𗅚",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "cast.sidelong.glances",
    "explanationCN": "仰后视名词"
  },
  {
    "character": "𗆛",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "tie/link",
    "explanationCN": "连接"
  },
  {
    "character": "𗀲",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "pass.through/invade",
    "explanationCN": "贯穿侵入"
  },
  {
    "character": "𗁯",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "a.surname",
    "explanationCN": "【屈】"
  },
  {
    "character": "𗂟",
    "GX": "rvar¹",
    "GHC": "wjar¹",
    "explanationEN": "dig/collapse",
    "explanationCN": "挖掘破"
  },
  {
    "character": "𗁭",
    "GX": "dźwow¹",
    "GHC": "dźjwo¹",
    "explanationEN": "drill/bore",
    "explanationCN": "钻"
  },
  {
    "character": "𗁶",
    "GX": "mphe¹",
    "GHC": "phji̱j¹",
    "explanationEN": "even/equal",
    "explanationCN": "均匀"
  },
  {
    "character": "𗹝",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "relative",
    "explanationCN": "亲近"
  },
  {
    "character": "𗹴",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "devil/demon",
    "explanationCN": "魔魅"
  },
  {
    "character": "𗹡",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "brave/violent",
    "explanationCN": "勇刚猛暴"
  },
  {
    "character": "𗁕",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "marry.a.wife/take",
    "explanationCN": "1.娶取、打"
  },
  {
    "character": "𗀱",
    "GX": "phao̱²",
    "GHC": "phio²",
    "explanationEN": "sing/chant",
    "explanationCN": "1.吟唱【庖】【鲍】【薄】【璞】（音 193）"
  },
  {
    "character": "𗅇",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "mould",
    "explanationCN": "模"
  },
  {
    "character": "𗅊",
    "GX": "lhai̱h²",
    "GHC": "lhiẹ²",
    "explanationEN": "smooth/glossy",
    "explanationCN": "光滑"
  },
  {
    "character": "𗅞",
    "GX": "lhə̱?",
    "GHC": "lhə",
    "explanationEN": "smooth",
    "explanationCN": "光平"
  },
  {
    "character": "𗄬",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "relation.by.marriage",
    "explanationCN": "姻亲血亲宗嗣"
  },
  {
    "character": "𗂞",
    "GX": "mae̱¹",
    "GHC": "miej¹",
    "explanationEN": "call/greet",
    "explanationCN": "招呼"
  },
  {
    "character": "𗅸",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "roar/howl",
    "explanationCN": "吼嚎鸣"
  },
  {
    "character": "𗆚",
    "GX": "ndzu¹",
    "GHC": "dzju̱¹",
    "explanationEN": "shake/sway",
    "explanationCN": "晃"
  },
  {
    "character": "𗅬",
    "GX": "dziw²",
    "GHC": "dźjiw²",
    "explanationEN": "abortion",
    "explanationCN": "堕小產流產"
  },
  {
    "character": "𗂗",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "drive.out/expel",
    "explanationCN": "驱赶"
  },
  {
    "character": "𗂤",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "crawl/creep",
    "explanationCN": "爬葡匐】"
  },
  {
    "character": "𗁒",
    "GX": "rer²",
    "GHC": "rjijr¹",
    "explanationEN": "distend",
    "explanationCN": "1.胀、寛"
  },
  {
    "character": "𗁨",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "the.common.people",
    "explanationCN": "庶民黎民"
  },
  {
    "character": "𗂁",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "mate.(with)/copulate",
    "explanationCN": "交配"
  },
  {
    "character": "𗁔",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "marry.a.wife/take",
    "explanationCN": "娶取"
  },
  {
    "character": "𗁼",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "gold",
    "explanationCN": "1.兑金【】"
  },
  {
    "character": "𗹧",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "supernatural.being",
    "explanationCN": "神仙"
  },
  {
    "character": "𗺂",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "fly/hover",
    "explanationCN": "飞翔"
  },
  {
    "character": "𘉁",
    "GX": "mmi¹",
    "GHC": "mji̱¹",
    "explanationEN": "crown",
    "explanationCN": "冕鬘"
  },
  {
    "character": "𗹯",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "exorcise",
    "explanationCN": "禳"
  },
  {
    "character": "𗅡",
    "GX": "qhwaə̱¹",
    "GHC": "khiwə¹",
    "explanationEN": "horn",
    "explanationCN": "角"
  },
  {
    "character": "𗁪",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【竇】【豆】【鍮】"
  },
  {
    "character": "𗂻",
    "GX": "dwe̱¹",
    "GHC": "dwej¹",
    "explanationEN": "hernia",
    "explanationCN": "疝气"
  },
  {
    "character": "𗁇",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "foolish/stupid",
    "explanationCN": "愚痴"
  },
  {
    "character": "𗄮",
    "GX": "ga¹",
    "GHC": "gja¹",
    "explanationEN": "stutter/stammer",
    "explanationCN": "口吃"
  },
  {
    "character": "𗹢",
    "GX": "doh²",
    "GHC": "djọ²",
    "explanationEN": "build.ʙ/cure.ʙ",
    "explanationCN": "修造"
  },
  {
    "character": "𗉺",
    "GX": "ṣaa̱¹",
    "GHC": "śia¹",
    "explanationEN": "sand",
    "explanationCN": "1.沙】【衫】【產】【洒】"
  },
  {
    "character": "𗉾",
    "GX": "rṣaa̱r¹",
    "GHC": "śiar¹",
    "explanationEN": "mix/stir",
    "explanationCN": "搅拌"
  },
  {
    "character": "𗋙",
    "GX": "və²",
    "GHC": "wjɨ²",
    "explanationEN": "a.surname",
    "explanationCN": "【韦】【毗】【毕】"
  },
  {
    "character": "𗊧",
    "GX": "tśhwaṃ¹",
    "GHC": "tśhjwã¹",
    "explanationEN": "river/plain",
    "explanationCN": "1.川】【釧】【椽】【篆】【传】"
  },
  {
    "character": "𗊸",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "in.the.past",
    "explanationCN": "从前往昔经过"
  },
  {
    "character": "𗋠",
    "GX": "ndźa²",
    "GHC": "dźja²",
    "explanationEN": "glutinous.(rice)",
    "explanationCN": "糯"
  },
  {
    "character": "𗋢",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "rope/cord",
    "explanationCN": "绳索"
  },
  {
    "character": "𗊾",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "a.place.name",
    "explanationCN": "【坻】地名"
  },
  {
    "character": "𗏂",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "one.of.the.eight.diagrams",
    "explanationCN": "巽"
  },
  {
    "character": "𗋁",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "drink",
    "explanationCN": "饮"
  },
  {
    "character": "𗌌",
    "GX": "naw¹",
    "GHC": "nja̱¹",
    "explanationEN": "deep",
    "explanationCN": "深黑"
  },
  {
    "character": "𗌦",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "lake",
    "explanationCN": "泊】"
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
    "explanationEN": "urn/earthen.jar/bottle",
    "explanationCN": "瓮瓶"
  },
  {
    "character": "𗢟",
    "GX": "tświ²",
    "GHC": "tśjwi²",
    "explanationEN": "disaster",
    "explanationCN": "祸"
  },
  {
    "character": "𗢠",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "boring",
    "explanationCN": "闷"
  },
  {
    "character": "𗢣",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "die",
    "explanationCN": "1.死、葬、謚、挽"
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
    "GHC": "ꞏjur²",
    "explanationEN": "upbringing",
    "explanationCN": "养育"
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
    "explanationCN": "疥癩（牛疮）"
  },
  {
    "character": "𗌘",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "butter",
    "explanationCN": "酪"
  },
  {
    "character": "𘉴",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "waste",
    "explanationCN": "荒"
  },
  {
    "character": "𗋯",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "moisture",
    "explanationCN": "潮湿"
  },
  {
    "character": "𗌃",
    "GX": "tu̱ṃ¹",
    "GHC": "tũ¹",
    "explanationEN": "winter",
    "explanationCN": "1.冬】【东】【董】【敦】"
  },
  {
    "character": "𗋉",
    "GX": "ndźa²",
    "GHC": "dźja̱²",
    "explanationEN": "marsh/hog",
    "explanationCN": "沼泽"
  },
  {
    "character": "𗌡",
    "GX": "tha̱ṃ¹",
    "GHC": "thã¹",
    "explanationEN": "beach/sands",
    "explanationCN": "1.滩】【檀】【曇】【淡】【诞】、洲【段】【译】（音 195）"
  },
  {
    "character": "𘊂",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "dung/excrement",
    "explanationCN": "粪屎"
  },
  {
    "character": "𘊀",
    "GX": "źəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "envy",
    "explanationCN": "嫉妒（忌妒）"
  },
  {
    "character": "𗇆",
    "GX": "rṣaa̱r¹",
    "GHC": "śiar¹",
    "explanationEN": "impressive.and.dignified.manners",
    "explanationCN": "威仪"
  },
  {
    "character": "𗊦",
    "GX": "ndə²",
    "GHC": "djɨ̱²",
    "explanationEN": "wash",
    "explanationCN": "濯"
  },
  {
    "character": "𗋕",
    "GX": "tha¹",
    "GHC": "thja¹",
    "explanationEN": "other/else",
    "explanationCN": "其彼此"
  },
  {
    "character": "𗊿",
    "GX": "ṣai̱ṃ¹",
    "GHC": "śiẽ¹",
    "explanationEN": "ooze/seep",
    "explanationCN": "【渗】【参】"
  },
  {
    "character": "𘓤",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "pawnshop/gurantee/inspect/examine",
    "explanationCN": "当铺担保检查动词"
  },
  {
    "character": "𗊆",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "rub",
    "explanationCN": "揉搓"
  },
  {
    "character": "𗊇",
    "GX": "sa̱²",
    "GHC": "sa²",
    "explanationEN": "dried.up/thin",
    "explanationCN": "涸竭瘦"
  },
  {
    "character": "𗊗",
    "GX": "lhe²",
    "GHC": "lhjij²",
    "explanationEN": "soft/lithe",
    "explanationCN": "软弱"
  },
  {
    "character": "𗋗",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "exhaustion/poverty",
    "explanationCN": "1.穷尽、糟糠"
  },
  {
    "character": "𗢓",
    "GX": "ŋah¹",
    "GHC": "ŋjạ¹",
    "explanationEN": "stammer/stutter",
    "explanationCN": "1.口吃、失"
  },
  {
    "character": "𗺑",
    "GX": "mba¹",
    "GHC": "bja̱¹",
    "explanationEN": "limit/end",
    "explanationCN": "穷尽绝无"
  },
  {
    "character": "𗎼",
    "GX": "swi̱w¹",
    "GHC": "swew¹",
    "explanationEN": "bright/brilliant/light",
    "explanationCN": "明亮;明;光"
  },
  {
    "character": "𗊪",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "country/territory/world",
    "explanationCN": "国界"
  },
  {
    "character": "𗉹",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "mix/blend",
    "explanationCN": "搅拌"
  },
  {
    "character": "𗉽",
    "GX": "sə̱²",
    "GHC": "sə²",
    "explanationEN": "clean/spotless",
    "explanationCN": "洁净"
  },
  {
    "character": "𗊕",
    "GX": "ṣaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "one.of",
    "explanationCN": "个【賖】【佘】【诗】"
  },
  {
    "character": "𘉵",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "sorrow",
    "explanationCN": "忧伤"
  },
  {
    "character": "𗋎",
    "GX": "rtṣhaə̱r¹",
    "GHC": "tśhiər¹",
    "explanationEN": "bustle",
    "explanationCN": "喧闹"
  },
  {
    "character": "𘉫",
    "GX": "gih¹",
    "GHC": "gjị¹",
    "explanationEN": "groan/moan",
    "explanationCN": "呻吟"
  },
  {
    "character": "𘉬",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "curse/swear",
    "explanationCN": "咒駡"
  },
  {
    "character": "𘉯",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "excrement/dung",
    "explanationCN": "屎粪"
  },
  {
    "character": "𘊊",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "wives.of.brothers/sister-in-law",
    "explanationCN": "妯娌"
  },
  {
    "character": "𗬗",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "land/soil",
    "explanationCN": "土地"
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
    "explanationCN": "1.鸭【贾】【假】"
  },
  {
    "character": "𘚾",
    "GX": "ndə̱¹",
    "GHC": "də̱¹",
    "explanationEN": "hasten/speed",
    "explanationCN": "1.趋急行疾驰、顿、二字重迭，具有“竞”之义"
  },
  {
    "character": "𗉿",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "saliva/spittle",
    "explanationCN": "唾液"
  },
  {
    "character": "𗊖",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
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
    "explanationEN": "hand.out/bestow",
    "explanationCN": "1.施、赐"
  },
  {
    "character": "𗢘",
    "GX": "swuh²",
    "GHC": "sjwụ²",
    "explanationEN": "live/revive",
    "explanationCN": "活苏醒"
  },
  {
    "character": "𗌅",
    "GX": "saṃ²",
    "GHC": "sjã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【先】【纤】【筛】【洗】【燮】"
  },
  {
    "character": "𗌨",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "bird",
    "explanationCN": "鸟"
  },
  {
    "character": "𗢔",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "die",
    "explanationCN": "死"
  },
  {
    "character": "𗏆",
    "GX": "hwaa̱ṃ¹",
    "GHC": "xiwã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【凡】【梵】【凡】【烦】【幡】【患】【环】【髮】【范】【樊】【化】【反】【番】"
  },
  {
    "character": "𗋘",
    "GX": "rqhwa̱r²",
    "GHC": "khwar²",
    "explanationEN": "boots",
    "explanationCN": "靿靴"
  },
  {
    "character": "𗊨",
    "GX": "tə̱h¹",
    "GHC": "tə̣¹",
    "explanationEN": "dirt/filth",
    "explanationCN": "污垢"
  },
  {
    "character": "𘉮",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "hate/grieved/sorrowful",
    "explanationCN": "恨悲痛噫形容词"
  },
  {
    "character": "𘉠",
    "GX": "tshih¹",
    "GHC": "tshjị¹",
    "explanationEN": "impoverished",
    "explanationCN": "窃（谦词）"
  },
  {
    "character": "𗢧",
    "GX": "rmi̱r²",
    "GHC": "me̱r²",
    "explanationEN": "be.frightened",
    "explanationCN": "惊骇"
  },
  {
    "character": "𗋺",
    "GX": "ŋqwai̱¹",
    "GHC": "kiwe̱¹",
    "explanationEN": "irrigate/pour",
    "explanationCN": "灌"
  },
  {
    "character": "𘉳",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "excrement/dung",
    "explanationCN": "粪便"
  },
  {
    "character": "𘉶",
    "GX": "rtsər¹",
    "GHC": "tsjɨ̱r¹",
    "explanationEN": "stammer/stutter",
    "explanationCN": "口吃"
  },
  {
    "character": "𗐄",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "hair",
    "explanationCN": "毛髮"
  },
  {
    "character": "𗬋",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "a.surname",
    "explanationCN": "【回】】"
  },
  {
    "character": "𗢬",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "amass/store.up/accumulate",
    "explanationCN": "积"
  },
  {
    "character": "𗢵",
    "GX": "rvwo̱r¹",
    "GHC": "wor¹",
    "explanationEN": "raise/happen",
    "explanationCN": "起生发"
  },
  {
    "character": "𗣊",
    "GX": "mi²",
    "GHC": "mji²",
    "explanationEN": "I/you",
    "explanationCN": "我汝"
  },
  {
    "character": "𗣚",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "perhaps/maybe/or",
    "explanationCN": "时或者"
  },
  {
    "character": "𗩿",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "a.surname",
    "explanationCN": "【细】【息】"
  },
  {
    "character": "𗼱",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "land/soil",
    "explanationCN": "土"
  },
  {
    "character": "𗼳",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "dust/dirt",
    "explanationCN": "尘埃"
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
    "explanationEN": "mouse/rat",
    "explanationCN": "鼠"
  },
  {
    "character": "𗏛",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【翁】【汶】【文】"
  },
  {
    "character": "𗣠",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "a.surname",
    "explanationCN": "【啼】【跌】"
  },
  {
    "character": "𗣛",
    "GX": "qi̱w¹",
    "GHC": "kew¹",
    "explanationEN": "a.surname",
    "explanationCN": "【勾】【沟】【高】【告】"
  },
  {
    "character": "𗤉",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "a.surname",
    "explanationCN": "【鄂】【罨】"
  },
  {
    "character": "𗨺",
    "GX": "lleh²",
    "GHC": "ljịj²",
    "explanationEN": "empress.dowager",
    "explanationCN": "太（后）"
  },
  {
    "character": "𗼸",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "fort/fortress",
    "explanationCN": "1.堡垒、篱"
  },
  {
    "character": "𗪃",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "draw.(a.bow)",
    "explanationCN": "张拉拔抽"
  },
  {
    "character": "𗾓",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "noon/midday",
    "explanationCN": "午"
  },
  {
    "character": "𗎻",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "collapse",
    "explanationCN": "圮"
  },
  {
    "character": "𗏜",
    "GX": "pae̱h¹",
    "GHC": "pẹj¹",
    "explanationEN": "belly/abdomen/stomach",
    "explanationCN": "腹肚"
  },
  {
    "character": "𗤄",
    "GX": "ryər¹",
    "GHC": "ꞏjɨr¹",
    "explanationEN": "ask.ᴀ",
    "explanationCN": "问.ᴀ"
  },
  {
    "character": "𗦣",
    "GX": "nwi¹",
    "GHC": "njwi¹",
    "explanationEN": "surpass/be.able.to",
    "explanationCN": "胜能名词"
  },
  {
    "character": "𗦪",
    "GX": "thəh¹",
    "GHC": "thjɨ̣¹",
    "explanationEN": "roll.up",
    "explanationCN": "1.卷皱、㲲"
  },
  {
    "character": "𗽷",
    "GX": "ryawr²",
    "GHC": "ꞏja̱r²",
    "explanationEN": "room/stay",
    "explanationCN": "室厩栏栖宿动词"
  },
  {
    "character": "𗾝",
    "GX": "nźiw¹",
    "GHC": "źji̱w¹",
    "explanationEN": "hang",
    "explanationCN": "1.悬挂、〈衤加〉"
  },
  {
    "character": "𗾮",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "when",
    "explanationCN": "何时"
  },
  {
    "character": "𗣺",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "snake/scorpion",
    "explanationCN": "蛇蝎"
  },
  {
    "character": "𗣽",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "love",
    "explanationCN": "1.爱、僧、圆"
  },
  {
    "character": "𗦇",
    "GX": "lli̱w²",
    "GHC": "lew²",
    "explanationEN": "thing/ɴᴍʟᴢ",
    "explanationCN": "东西;ɴᴍʟᴢ"
  },
  {
    "character": "𗩾",
    "GX": "zi²",
    "GHC": "źji²",
    "explanationEN": "extremely",
    "explanationCN": "最极甚无上"
  },
  {
    "character": "𗨹",
    "GX": "γə̱h¹",
    "GHC": "ɣə̣¹",
    "explanationEN": "pleased/satisfied",
    "explanationCN": "满意"
  },
  {
    "character": "𗧲",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "skilful",
    "explanationCN": "巧伎"
  },
  {
    "character": "𗫖",
    "GX": "ywiṃ¹",
    "GHC": "ꞏjwi¹",
    "explanationEN": "even",
    "explanationCN": "匀】"
  },
  {
    "character": "𗥲",
    "GX": "pi̱ṃ²",
    "GHC": "pẽ²",
    "explanationEN": "go.through/undergo",
    "explanationCN": "1.经歷【本】【嗢】【朋】【賁】（音 194）"
  },
  {
    "character": "𗨋",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "three.days.later",
    "explanationCN": "外后日"
  },
  {
    "character": "𗨒",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "a.surname",
    "explanationCN": "【冷】"
  },
  {
    "character": "𗧓",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "I/1SG",
    "explanationCN": "我; 1SG"
  },
  {
    "character": "𗩘",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "son.or.daughter",
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
    "explanationEN": "gather/collect",
    "explanationCN": "集"
  },
  {
    "character": "𗩤",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "in.the.past",
    "explanationCN": "1.往昔过去【毗】【婢】【鼻】"
  },
  {
    "character": "𗪟",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "the.beginning.of",
    "explanationCN": "1.始初、元首"
  },
  {
    "character": "𗪘",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "before",
    "explanationCN": "昔"
  },
  {
    "character": "𗩭",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "the.first.month",
    "explanationCN": "正"
  },
  {
    "character": "𘊓",
    "GX": "la̱?",
    "GHC": "la",
    "explanationEN": "scorpion",
    "explanationCN": "蝎"
  },
  {
    "character": "𗿀",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "land/soil",
    "explanationCN": "1.土地、社稷"
  },
  {
    "character": "𗩐",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "husband.and.wife",
    "explanationCN": "夫妇"
  },
  {
    "character": "𗩑",
    "GX": "ŋqu̱²",
    "GHC": "gu̱²",
    "explanationEN": "food.and.drink/diet",
    "explanationCN": "饮（宴）食"
  },
  {
    "character": "𗩮",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "barbarian",
    "explanationCN": "蛮夷"
  },
  {
    "character": "𗪬",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "night",
    "explanationCN": "夜晚"
  },
  {
    "character": "𗩕",
    "GX": "dza̱¹",
    "GHC": "dza¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【砸】【匝】"
  },
  {
    "character": "𗩽",
    "GX": "rtṣao̱r²",
    "GHC": "tśior²",
    "explanationEN": "filthy",
    "explanationCN": "污秽"
  },
  {
    "character": "𗿶",
    "GX": "lae̱h¹",
    "GHC": "lẹj¹",
    "explanationEN": "crow",
    "explanationCN": "鸦"
  },
  {
    "character": "𗿲",
    "GX": "ṣao̱²",
    "GHC": "śio²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【恕】鸟名"
  },
  {
    "character": "𘔸",
    "GX": "γo̱ṃh¹",
    "GHC": "ꞏọ¹",
    "explanationEN": "yawn",
    "explanationCN": "呵欠"
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
    "GX": "ṣao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "above/higher.place",
    "explanationCN": "上】"
  },
  {
    "character": "𗦨",
    "GX": "ṇ??",
    "GHC": "",
    "explanationEN": "contract",
    "explanationCN": "收缩"
  },
  {
    "character": "𗦰",
    "GX": "rṣaa̱r¹",
    "GHC": "śiar¹",
    "explanationEN": "a.surname",
    "explanationCN": "【娑】【萨】【杀】"
  },
  {
    "character": "𗽥",
    "GX": "rgur²",
    "GHC": "gjur²",
    "explanationEN": "gully",
    "explanationCN": "堑壑"
  },
  {
    "character": "𗽪",
    "GX": "γwe̱²",
    "GHC": "ɣwej²",
    "explanationEN": "city.wall.and.moat/gully",
    "explanationCN": "沟壑"
  },
  {
    "character": "𗨔",
    "GX": "ni̱w¹",
    "GHC": "new¹",
    "explanationEN": "breast",
    "explanationCN": "奶乳房】"
  },
  {
    "character": "𗪁",
    "GX": "gi²",
    "GHC": "",
    "explanationEN": "wife/concubine",
    "explanationCN": "妻妾"
  },
  {
    "character": "𗧈",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "urinate",
    "explanationCN": "（使）尿"
  },
  {
    "character": "𗬠",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【跋】【拔】"
  },
  {
    "character": "𗤿",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【縲】（）"
  },
  {
    "character": "𗥋",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "blow/pipe.(a.wind.instrument)",
    "explanationCN": "吹"
  },
  {
    "character": "𗦉",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "wife/concubine/woman",
    "explanationCN": "妻眷妾妇"
  },
  {
    "character": "𗨼",
    "GX": "dźwe²",
    "GHC": "dźjij²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【葚】【膡】"
  },
  {
    "character": "𗫕",
    "GX": "ntho̱¹",
    "GHC": "tho̱¹",
    "explanationEN": "ripple/undulate",
    "explanationCN": "荡漾"
  },
  {
    "character": "𗨄",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "achievement",
    "explanationCN": "成就"
  },
  {
    "character": "𗧋",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "respect",
    "explanationCN": "敬"
  },
  {
    "character": "𗪉",
    "GX": "zwih¹",
    "GHC": "zjwị¹",
    "explanationEN": "nephew",
    "explanationCN": "甥侄"
  },
  {
    "character": "𗧯",
    "GX": "nye¹",
    "GHC": "ꞏji̱j¹",
    "explanationEN": "hold",
    "explanationCN": "1.执持禀、揆、含、定"
  },
  {
    "character": "𗫋",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "separate",
    "explanationCN": "分离"
  },
  {
    "character": "𗽒",
    "GX": "pho̱ṃ²",
    "GHC": "phow²",
    "explanationEN": "mountain.peak",
    "explanationCN": "1.山峰、烽火"
  },
  {
    "character": "𗽰",
    "GX": "mbu̱²",
    "GHC": "bu̱²",
    "explanationEN": "grave/mausoleum",
    "explanationCN": "1.墓】【穆】【茂】【慕】【母】【漠】【谋】【嫫】（音 193）"
  },
  {
    "character": "𗿔",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "鶩（鸟名）"
  },
  {
    "character": "𗿥",
    "GX": "vəh¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "old/aged",
    "explanationCN": "老"
  },
  {
    "character": "𘔶",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "blow/beat",
    "explanationCN": "吹击"
  },
  {
    "character": "𗺘",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "barnyard.grass",
    "explanationCN": "稗稊"
  },
  {
    "character": "𗏼",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "send.back",
    "explanationCN": "遗送"
  },
  {
    "character": "𗣓",
    "GX": "ġai̱¹",
    "GHC": "gie¹",
    "explanationEN": "hard/difficult",
    "explanationCN": "1.难险叵、二字相重有“良久”之义"
  },
  {
    "character": "𗼷",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "gravel",
    "explanationCN": "砾"
  },
  {
    "character": "𗾻",
    "GX": "tshwu̱²",
    "GHC": "tshwu²",
    "explanationEN": "for.a.particular.person,.occasion,.purpose,.etc.",
    "explanationCN": "迷"
  },
  {
    "character": "𗺪",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "sweep/broom",
    "explanationCN": "扫，帚笤名词"
  },
  {
    "character": "𗻸",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "herbal.medicine",
    "explanationCN": "薢】"
  },
  {
    "character": "𗏴",
    "GX": "dźu¹",
    "GHC": "dźju¹",
    "explanationEN": "show/declare",
    "explanationCN": "显宣明达"
  },
  {
    "character": "𗥮",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "skill/artistry",
    "explanationCN": "1.技能技艺、敏捷"
  },
  {
    "character": "𗪭",
    "GX": "ndə̱¹",
    "GHC": "də̱¹",
    "explanationEN": "ago/before",
    "explanationCN": "前昔"
  },
  {
    "character": "𗫍",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【石】【食】【世】【植】【师】【使】【失】【什】【瑟】"
  },
  {
    "character": "𗽤",
    "GX": "tṣhae̱²",
    "GHC": "tśhiej²",
    "explanationEN": "a.stocked.village",
    "explanationCN": "1.寨】【鐺】【釵】【豺】【柴】【生】"
  },
  {
    "character": "𗽓",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "marsh",
    "explanationCN": "1.泽、斥卤（盐硷地）、江"
  },
  {
    "character": "𗺢",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "a.surname",
    "explanationCN": "【播】"
  },
  {
    "character": "𗺭",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "green",
    "explanationCN": "青绿"
  },
  {
    "character": "𗺬",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "witch",
    "explanationCN": "巫驱鬼者"
  },
  {
    "character": "𗺩",
    "GX": "ṣaa̱²",
    "GHC": "śia²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【莎】"
  },
  {
    "character": "𗺾",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "net/be.captured",
    "explanationCN": "网落网动词"
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
    "explanationCN": "淮】"
  },
  {
    "character": "𗧐",
    "GX": "bai̱²",
    "GHC": "bie²",
    "explanationEN": "unite",
    "explanationCN": "解开"
  },
  {
    "character": "𗩧",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "mould/mildew/mouldy.smell",
    "explanationCN": "霉霉味】"
  },
  {
    "character": "𗪆",
    "GX": "nswə¹",
    "GHC": "sjwɨ̱¹",
    "explanationEN": "think",
    "explanationCN": "1.思虑忧愁惻忆、二字重迭意“切切”"
  },
  {
    "character": "𗿋",
    "GX": "bo̱²",
    "GHC": "bo²",
    "explanationEN": "brood/hatch",
    "explanationCN": "1.孵、破【冒】"
  },
  {
    "character": "𗻂",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "light.a.fire",
    "explanationCN": "点火燃香燃烛"
  },
  {
    "character": "𗻢",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【漆合】草名"
  },
  {
    "character": "𗻭",
    "GX": "γa̱¹",
    "GHC": "ꞏa",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "（夏草）【阿】草名"
  },
  {
    "character": "𗻞",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【苣】菜名"
  },
  {
    "character": "𗻕",
    "GX": "nṣaa̱²",
    "GHC": "śia̱²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【穡】草名"
  },
  {
    "character": "𗏤",
    "GX": "tha̱²",
    "GHC": "tha",
    "explanationEN": "force/compel",
    "explanationCN": "1.逼迫、殃"
  },
  {
    "character": "𗬙",
    "GX": "tśhu²",
    "GHC": "tśhju²",
    "explanationEN": "that",
    "explanationCN": "彼此"
  },
  {
    "character": "𗣜",
    "GX": "thu²",
    "GHC": "thju²",
    "explanationEN": "this",
    "explanationCN": "此"
  },
  {
    "character": "𗻽",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "monkey",
    "explanationCN": "猴类"
  },
  {
    "character": "𗾹",
    "GX": "tshwu̱²",
    "GHC": "tshwu²",
    "explanationEN": "for.a.particular.person,.occasion,.purpose,.etc.",
    "explanationCN": "专心虔诚"
  },
  {
    "character": "𗤵",
    "GX": "rtśər¹",
    "GHC": "tśjɨr¹",
    "explanationEN": "tie",
    "explanationCN": "繫结"
  },
  {
    "character": "𗦵",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "big/thick",
    "explanationCN": "1.大粗头首【不】【本】（音 192）"
  },
  {
    "character": "𗣋",
    "GX": "khaṃ²",
    "GHC": "khjã²",
    "explanationEN": "enemy/foe",
    "explanationCN": "1.强敌、命【恒】【俭】【乾】（珠 102）【遣】（珠 302）【鈐】（珠 225）"
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
    "explanationEN": "give.up/abandon",
    "explanationCN": "捨弃授絶"
  },
  {
    "character": "𗽲",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "valley",
    "explanationCN": "谷"
  },
  {
    "character": "𗧺",
    "GX": "tho̱ṃ¹",
    "GHC": "thow¹",
    "explanationEN": "proficient",
    "explanationCN": "1.通【汤】【统】【同】【彤】【敦】"
  },
  {
    "character": "𗣖",
    "GX": "ṣuo¹",
    "GHC": "śiow¹",
    "explanationEN": "familiar",
    "explanationCN": "熟】"
  },
  {
    "character": "𗣗",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "do",
    "explanationCN": "做作為"
  },
  {
    "character": "𗢫",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "cheese",
    "explanationCN": "酪"
  },
  {
    "character": "𗾜",
    "GX": "tświw²",
    "GHC": "tśjwiw²",
    "explanationEN": "cheese",
    "explanationCN": "酪"
  },
  {
    "character": "𗢴",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "call.out/shout",
    "explanationCN": "呼喊"
  },
  {
    "character": "𗣘",
    "GX": "tṣuo¹",
    "GHC": "tśiow¹",
    "explanationEN": "orphan",
    "explanationCN": "孤儿"
  },
  {
    "character": "𗤃",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "stutter/faint",
    "explanationCN": "1.口吃昏厥、悲伤"
  },
  {
    "character": "𗣻",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "add/increase",
    "explanationCN": "增添"
  },
  {
    "character": "𘊛",
    "GX": "dzoh¹",
    "GHC": "dzjọ¹",
    "explanationEN": "metaphor/just.like",
    "explanationCN": "比喻譬如介词"
  },
  {
    "character": "𘔲",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "corpse",
    "explanationCN": "尸"
  },
  {
    "character": "𗢷",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "fresh",
    "explanationCN": "1.鲜、平"
  },
  {
    "character": "𗤋",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "not.exist",
    "explanationCN": "不存在"
  },
  {
    "character": "𗥒",
    "GX": "ŋo̱²",
    "GHC": "ŋo²",
    "explanationEN": "grieved/sorrowful",
    "explanationCN": "悲痛"
  },
  {
    "character": "𗤌",
    "GX": "tu̱¹",
    "GHC": "tu¹",
    "explanationEN": "sincere",
    "explanationCN": "篤厚"
  },
  {
    "character": "𗤸",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "play/laugh.and.frolic",
    "explanationCN": "戏牓"
  },
  {
    "character": "𗫚",
    "GX": "khwi²",
    "GHC": "khjwi²",
    "explanationEN": "circle",
    "explanationCN": "圈圆围"
  },
  {
    "character": "𗽐",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "a.traditional.unit.of.area",
    "explanationCN": "顷"
  },
  {
    "character": "𗼂",
    "GX": "ba̱¹",
    "GHC": "ba¹",
    "explanationEN": "go.hunting",
    "explanationCN": "猎"
  },
  {
    "character": "𗤅",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "bring.up",
    "explanationCN": "养育"
  },
  {
    "character": "𗦝",
    "GX": "dźeh²",
    "GHC": "dźjịj²",
    "explanationEN": "close.relative",
    "explanationCN": "1.近亲、旋转"
  },
  {
    "character": "𗥊",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "stunned/stupefied",
    "explanationCN": "惊愕"
  },
  {
    "character": "𗨴",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【龙】【陵】"
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
    "explanationEN": "a.surname",
    "explanationCN": "【没】"
  },
  {
    "character": "𗼹",
    "GX": "dźwo²",
    "GHC": "dźjwo²",
    "explanationEN": "cave/hole",
    "explanationCN": "1.洞穴孔窟窍、阴"
  },
  {
    "character": "𗾬",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "cuckoo",
    "explanationCN": "杜鹃【乙】"
  },
  {
    "character": "𗾲",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "name.of.a.star",
    "explanationCN": "昴星"
  },
  {
    "character": "𗿆",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "clear.away",
    "explanationCN": "消除"
  },
  {
    "character": "𗣍",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "worry",
    "explanationCN": "忧伤"
  },
  {
    "character": "𗥎",
    "GX": "rġa̱r²",
    "GHC": "gar¹",
    "explanationEN": "benefit/profit",
    "explanationCN": "利益"
  },
  {
    "character": "𗻾",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "dowry",
    "explanationCN": "婚礼（彩礼）"
  },
  {
    "character": "𗤆",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "a.surname",
    "explanationCN": "【黎】【力】【利】"
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
    "GHC": "tjịj¹",
    "explanationEN": "swift",
    "explanationCN": "迅速"
  },
  {
    "character": "𗨸",
    "GX": "γaə̱¹",
    "GHC": "ɣiə¹",
    "explanationEN": "close/near",
    "explanationCN": "近"
  },
  {
    "character": "𗼴",
    "GX": "leh¹",
    "GHC": "ljịj¹",
    "explanationEN": "seedling",
    "explanationCN": "1.苗芽【乙】"
  },
  {
    "character": "𘊐",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "ɪɴᴛʀɢ:ɪɴ/ᴏᴘᴛ:ɪɴ",
    "explanationCN": "ɪɴᴛʀɢ:ɪɴ/ᴏᴘᴛ:ɪɴ"
  },
  {
    "character": "𗏳",
    "GX": "rkawr²",
    "GHC": "kja̱r²",
    "explanationEN": "limit/end",
    "explanationCN": "穷尽"
  },
  {
    "character": "𗩍",
    "GX": "nvwə̱¹",
    "GHC": "wə̣¹",
    "explanationEN": "own/have",
    "explanationCN": "1.有享有、属"
  },
  {
    "character": "𗩻",
    "GX": "tśwow¹",
    "GHC": "tśjwo¹",
    "explanationEN": "tribute",
    "explanationCN": "贡奉（名动）"
  },
  {
    "character": "𗏽",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "mend/sew",
    "explanationCN": "1.缝缀、修饰"
  },
  {
    "character": "𗦀",
    "GX": "ho̱?",
    "GHC": "xo",
    "explanationEN": "a.transliteration",
    "explanationCN": "音【吽】"
  },
  {
    "character": "𗥀",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "scabies",
    "explanationCN": "疥癩"
  },
  {
    "character": "𗨻",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "do,.make",
    "explanationCN": "做，使"
  },
  {
    "character": "𗪄",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "draw.(a.bow)",
    "explanationCN": "张拉拔"
  },
  {
    "character": "𗢪",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "majestic/glorious",
    "explanationCN": "【壁】【脾】【鼻】【毕】【秘】【比】【轡】【錍】【彼】【毕】【笔】【碧】【壁】【鄙】"
  },
  {
    "character": "𗣏",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "physique",
    "explanationCN": "体格"
  },
  {
    "character": "𗣕",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "human.being/person",
    "explanationCN": "1.人、士"
  },
  {
    "character": "𗥌",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "emissary",
    "explanationCN": "1.使者、与（文）结合，具有帛书书信之义、试"
  },
  {
    "character": "𗦊",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "watch/keep.watch.on",
    "explanationCN": "见"
  },
  {
    "character": "𗦐",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "an.insect.name",
    "explanationCN": "虫名【蠡】"
  },
  {
    "character": "𗦡",
    "GX": "yo̱ṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "relatives",
    "explanationCN": "亲【养】"
  },
  {
    "character": "𗧭",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "a.surname",
    "explanationCN": "【兮】"
  },
  {
    "character": "𗨷",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "slowly",
    "explanationCN": "1.徐徐、渐渐、隐隐"
  },
  {
    "character": "𗽏",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "soil",
    "explanationCN": "土"
  },
  {
    "character": "𗾐",
    "GX": "lhwih¹",
    "GHC": "lhjwị¹",
    "explanationEN": "a.surname",
    "explanationCN": "【力】【利】"
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
    "explanationEN": "an.insect.name",
    "explanationCN": "【利】飞虫"
  },
  {
    "character": "𗿐",
    "GX": "tświw²",
    "GHC": "tśjwiw²",
    "explanationEN": "light.yellow",
    "explanationCN": "金色"
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
    "explanationCN": "潮湿"
  },
  {
    "character": "𘊙",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "fly/mosquito",
    "explanationCN": "蝇蚊"
  },
  {
    "character": "𗫫",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "rank",
    "explanationCN": "行列"
  },
  {
    "character": "𗢸",
    "GX": "llaw²",
    "GHC": "lja̱²",
    "explanationEN": "mouth",
    "explanationCN": "1.口、关卡"
  },
  {
    "character": "𗣔",
    "GX": "tu̱¹",
    "GHC": "tu¹",
    "explanationEN": "stupid/foolish",
    "explanationCN": "1.愚蠢【都】【堵】【篤】"
  },
  {
    "character": "𗧦",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "I/me",
    "explanationCN": "吾"
  },
  {
    "character": "𗦦",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "wrist",
    "explanationCN": "手腕（前臂）"
  },
  {
    "character": "𗥏",
    "GX": "γo̱ṃh²",
    "GHC": "ꞏọ²",
    "explanationEN": "dumbness",
    "explanationCN": "哑"
  },
  {
    "character": "𗪍",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "vulture",
    "explanationCN": "鷲"
  },
  {
    "character": "𘴃",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "鹃"
  },
  {
    "character": "𗾊",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "warehouse",
    "explanationCN": "仓库"
  },
  {
    "character": "𗾑",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "nephew",
    "explanationCN": "1.甥、母"
  },
  {
    "character": "𗿟",
    "GX": "mmu²",
    "GHC": "mju̱²",
    "explanationEN": "deep.pool",
    "explanationCN": "渊"
  },
  {
    "character": "𗻼",
    "GX": "ṣae̱ṃ¹",
    "GHC": "śiəj¹",
    "explanationEN": "man",
    "explanationCN": "1.生】、兽猩"
  },
  {
    "character": "𗦩",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "toinfect",
    "explanationCN": "传染"
  },
  {
    "character": "𗪀",
    "GX": "ŋkhu²",
    "GHC": "khju̱²",
    "explanationEN": "watch/oversee",
    "explanationCN": "视监守"
  },
  {
    "character": "𗪨",
    "GX": "mae̱²",
    "GHC": "miej²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【孟】【猛】【埋】【卖】"
  },
  {
    "character": "𗿤",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "breeding",
    "explanationCN": "鸟配"
  },
  {
    "character": "𗿹",
    "GX": "yo̱ṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "crow",
    "explanationCN": "乌鸦"
  },
  {
    "character": "𗿼",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "bird",
    "explanationCN": "1.鸟禽鷄（酉）、飞腾浮"
  },
  {
    "character": "𗢶",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "circle",
    "explanationCN": "1.匝、遍、返、度"
  },
  {
    "character": "𗪂",
    "GX": "ko¹",
    "GHC": "kjo¹",
    "explanationEN": "mother’s.brother",
    "explanationCN": "舅】"
  },
  {
    "character": "𗫯",
    "GX": "lhi²",
    "GHC": "lhji²",
    "explanationEN": "origin/source",
    "explanationCN": "本源"
  },
  {
    "character": "𗿱",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "mother",
    "explanationCN": "妈母娘"
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
    "GHC": "wjị¹",
    "explanationEN": "east/tail",
    "explanationCN": "末尾"
  },
  {
    "character": "𘊜",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "pearl",
    "explanationCN": "珠"
  },
  {
    "character": "𗿽",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【麻】鸟名"
  },
  {
    "character": "𗺙",
    "GX": "rzur²",
    "GHC": "zjur²",
    "explanationEN": "comet",
    "explanationCN": "扫星彗星"
  },
  {
    "character": "𗻓",
    "GX": "yo̱ṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "薯蕷（菜名）"
  },
  {
    "character": "𗏫",
    "GX": "lu̱h²",
    "GHC": "lụ²",
    "explanationEN": "stem/stalk",
    "explanationCN": "植（杆）茎柄"
  },
  {
    "character": "𗏻",
    "GX": "rdźər²",
    "GHC": "dźjɨr²",
    "explanationEN": "bear.lately",
    "explanationCN": "晚產"
  },
  {
    "character": "𗪵",
    "GX": "tṣae̱¹",
    "GHC": "tśiej¹",
    "explanationEN": "headgear/hat/cap",
    "explanationCN": "帽冠"
  },
  {
    "character": "𘔹",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "replete/swell",
    "explanationCN": "饱胀动词"
  },
  {
    "character": "𗺠",
    "GX": "tu̱¹",
    "GHC": "tu¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【朵】草名"
  },
  {
    "character": "𗻵",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "onion/garlic",
    "explanationCN": "䓤韭蒜"
  },
  {
    "character": "𗺚",
    "GX": "swa̱¹",
    "GHC": "swa¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【莎】草名"
  },
  {
    "character": "𗺫",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "a.kind.of.grass.or.vegetable",
    "explanationCN": "【菠】菜（草）名"
  },
  {
    "character": "𗻘",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【钱】菜名"
  },
  {
    "character": "𗧻",
    "GX": "dźə¹",
    "GHC": "dźjɨ",
    "explanationEN": "a.surname",
    "explanationCN": "番党项人"
  },
  {
    "character": "𗏉",
    "GX": "rγu̱r¹",
    "GHC": "ɣur¹",
    "explanationEN": "encircle/go.round",
    "explanationCN": "围绕"
  },
  {
    "character": "𗣑",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a.surname",
    "explanationCN": "【杜】【奴】"
  },
  {
    "character": "𗽂",
    "GX": "γi̱w¹",
    "GHC": "ɣew¹",
    "explanationEN": "trench",
    "explanationCN": "壕】"
  },
  {
    "character": "𗩂",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "spirit/mind",
    "explanationCN": "精神"
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
    "explanationEN": "smoke.out/fumigate",
    "explanationCN": "薰"
  },
  {
    "character": "𗻔",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "tie.a.knot.distinguish",
    "explanationCN": "结草"
  },
  {
    "character": "𗣒",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "round",
    "explanationCN": "1.圆球摶【郎】【落】"
  },
  {
    "character": "𗦧",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "spirit/vigour",
    "explanationCN": "1.精气、寺"
  },
  {
    "character": "𗪅",
    "GX": "tṣao̱²",
    "GHC": "tśio²",
    "explanationEN": "headgear/hat/cap",
    "explanationCN": "帽冠【卓】【车】"
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
    "explanationCN": "刚正"
  },
  {
    "character": "𗤈",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "give.birth",
    "explanationCN": "生產"
  },
  {
    "character": "𗥍",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "post/pillar/seat",
    "explanationCN": "柱座"
  },
  {
    "character": "𗟝",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "deerhorn,.antler",
    "explanationCN": "鹿角"
  },
  {
    "character": "𘜦",
    "GX": "rywər¹",
    "GHC": "ꞏjwɨr²",
    "explanationEN": "fast/rapid",
    "explanationCN": "急速"
  },
  {
    "character": "𘜦",
    "GX": "rywər²",
    "GHC": "ꞏjwɨr²",
    "explanationEN": "fast/rapid",
    "explanationCN": "快;快速"
  },
  {
    "character": "𘉩",
    "GX": "liw²",
    "GHC": "ljiw²",
    "explanationEN": "pull/drag",
    "explanationCN": "拉扯"
  },
  {
    "character": "𘚳",
    "GX": "ṣaa̱ṃ¹",
    "GHC": "śjã¹",
    "explanationEN": "straw.mat",
    "explanationCN": "苫"
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
    "explanationCN": "倏"
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
    "GHC": "ꞏwiọ¹",
    "explanationEN": "clear.away",
    "explanationCN": "1.清除、御史"
  },
  {
    "character": "𗬣",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "little.livestock",
    "explanationCN": "小畜"
  },
  {
    "character": "𗬶",
    "GX": "qwaa̱¹",
    "GHC": "kiwa¹",
    "explanationEN": "step.on/burst/split",
    "explanationCN": "踩压破裂"
  },
  {
    "character": "𗬦",
    "GX": "hi̱w²",
    "GHC": "xew²",
    "explanationEN": "musical.instrument/a.surname.(?)",
    "explanationCN": "【篌】【黑】"
  },
  {
    "character": "𗃧",
    "GX": "nle̱²",
    "GHC": "le̱j²",
    "explanationEN": "rely.on",
    "explanationCN": "依赖"
  },
  {
    "character": "𗃱",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "backbone",
    "explanationCN": "1.脊梁、波浪"
  },
  {
    "character": "𗃲",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj²",
    "explanationEN": "do/act",
    "explanationCN": "做為"
  },
  {
    "character": "𗬳",
    "GX": "pe̱¹",
    "GHC": "pej¹",
    "explanationEN": "outer/exterior",
    "explanationCN": "1.外表背后、防护"
  },
  {
    "character": "𗃫",
    "GX": "piw¹",
    "GHC": "pjiw¹",
    "explanationEN": "poor/needy/impoverished",
    "explanationCN": "1.贫穷饥寒、又音【表】"
  },
  {
    "character": "𗃭",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "death",
    "explanationCN": "死亡"
  },
  {
    "character": "𗬤",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "foundation/basis",
    "explanationCN": "根基"
  },
  {
    "character": "𗬬",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "ever/have.already",
    "explanationCN": "1.曾尝动词、况初"
  },
  {
    "character": "𗬯",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "listen/hear",
    "explanationCN": "听闻"
  },
  {
    "character": "𗬱",
    "GX": "źu¹",
    "GHC": "źju¹",
    "explanationEN": "loyal/honest",
    "explanationCN": "忠正直"
  },
  {
    "character": "𗃩",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "remains",
    "explanationCN": "残餘"
  },
  {
    "character": "𗴐",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "urgent",
    "explanationCN": "紧极甚楚"
  },
  {
    "character": "𘓒",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "afraid/scared",
    "explanationCN": "惊恐"
  },
  {
    "character": "𘓠",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "sad/sorrowful",
    "explanationCN": "悲哀忧愁"
  },
  {
    "character": "𘓓",
    "GX": "nvwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "filial.piety",
    "explanationCN": "1.孝、柔、葵"
  },
  {
    "character": "𘓏",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "sigh",
    "explanationCN": "叹息"
  },
  {
    "character": "𘓔",
    "GX": "məh²",
    "GHC": "mjɨ̣²",
    "explanationEN": "forget",
    "explanationCN": "忘"
  },
  {
    "character": "𘀁",
    "GX": "tho̱¹",
    "GHC": "tho¹",
    "explanationEN": "tired/weary",
    "explanationCN": "疲倦疲劳困乏"
  },
  {
    "character": "𗃗",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "name.of.a.star",
    "explanationCN": "逊星"
  },
  {
    "character": "𗬪",
    "GX": "nlho̱²",
    "GHC": "lho̱²",
    "explanationEN": "bright/smooth",
    "explanationCN": "光亮平光"
  },
  {
    "character": "𗬵",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "float/hang",
    "explanationCN": "漂浮悬"
  },
  {
    "character": "𗴗",
    "GX": "pe¹",
    "GHC": "pjij¹",
    "explanationEN": "come.and.go/have.contact",
    "explanationCN": "恭敬【并】【炳】"
  },
  {
    "character": "𗴛",
    "GX": "tśwoṃ²",
    "GHC": "tśjwow²",
    "explanationEN": "contribute",
    "explanationCN": "奉献"
  },
  {
    "character": "𗃶",
    "GX": "mmi̱²",
    "GHC": "me²",
    "explanationEN": "illness",
    "explanationCN": "病患"
  },
  {
    "character": "𘓎",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "beautiful",
    "explanationCN": "美妙"
  },
  {
    "character": "𗃝",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "baby/infant",
    "explanationCN": "婴儿"
  },
  {
    "character": "𗼆",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【尚】"
  },
  {
    "character": "𗼔",
    "GX": "tśho²",
    "GHC": "tśhjo²",
    "explanationEN": "a.surname",
    "explanationCN": "【丑】"
  },
  {
    "character": "𗼜",
    "GX": "γai̱²",
    "GHC": "ɣie²",
    "explanationEN": "interest/benefit",
    "explanationCN": "利益"
  },
  {
    "character": "𗼣",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【兮】宗姓"
  },
  {
    "character": "𗼨",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "a.surname",
    "explanationCN": "【嵬】"
  },
  {
    "character": "𗼤",
    "GX": "vwo̱ṃ¹",
    "GHC": "wow¹",
    "explanationEN": "prosperous/flourishing",
    "explanationCN": "旺】"
  },
  {
    "character": "𗼄",
    "GX": "rtṣai̱r¹",
    "GHC": "tśier¹",
    "explanationEN": "benefit/interest",
    "explanationCN": "1.利益、宠、方"
  },
  {
    "character": "𗼕",
    "GX": "lo¹",
    "GHC": "ljo¹",
    "explanationEN": "good.fortune",
    "explanationCN": "福右"
  },
  {
    "character": "𗼬",
    "GX": "ba̱ṃ¹",
    "GHC": "bã¹",
    "explanationEN": "twine/bind",
    "explanationCN": "缠绕"
  },
  {
    "character": "𗼇",
    "GX": "mi²",
    "GHC": "mji²",
    "explanationEN": "the.name.Tangut.people.call.themselves",
    "explanationCN": "番"
  },
  {
    "character": "𗼐",
    "GX": "qwaa̱ṃ¹",
    "GHC": "kiwã¹",
    "explanationEN": "close",
    "explanationCN": "【关】"
  },
  {
    "character": "𗼦",
    "GX": "dzuh²",
    "GHC": "dzjụ²",
    "explanationEN": "round-grained.non-glutinous.rice",
    "explanationCN": "黍粳稻"
  },
  {
    "character": "𗼭",
    "GX": "dzuh²",
    "GHC": "dzjụ²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【族】鸟名"
  },
  {
    "character": "𗼌",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "firm/staunch/unyielding",
    "explanationCN": "刚强"
  },
  {
    "character": "𗼓",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "emperor/monarch",
    "explanationCN": "天子君"
  },
  {
    "character": "𗺑",
    "GX": "mba¹",
    "GHC": "bja̱¹",
    "explanationEN": "limit/end",
    "explanationCN": "穷尽絶无"
  },
  {
    "character": "𘉄",
    "GX": "llwu²",
    "GHC": "ljwu²",
    "explanationEN": "witty.remark/witticism/rhetoric",
    "explanationCN": "妙语修辞"
  },
  {
    "character": "𗺔",
    "GX": "tshah²",
    "GHC": "tshjạ²",
    "explanationEN": "increase",
    "explanationCN": "增多"
  },
  {
    "character": "𗅜",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "discard/abandon",
    "explanationCN": "弃】"
  },
  {
    "character": "𗄱",
    "GX": "pe¹",
    "GHC": "pjij¹",
    "explanationEN": "deep.green",
    "explanationCN": "1.青玄色【并】"
  },
  {
    "character": "𗆁",
    "GX": "sa̱ṃ¹",
    "GHC": "sã¹",
    "explanationEN": "scattered",
    "explanationCN": "散】"
  },
  {
    "character": "𗆭",
    "GX": "dźiw¹",
    "GHC": "dźjiw¹",
    "explanationEN": "pursue",
    "explanationCN": "追逐"
  },
  {
    "character": "𗆈",
    "GX": "gih²",
    "GHC": "gjị²",
    "explanationEN": "wide/eclipse",
    "explanationCN": "广蚀"
  },
  {
    "character": "𗹥",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "speed/run.quickly",
    "explanationCN": "竞奔驰"
  },
  {
    "character": "𗎧",
    "GX": "qha̱²",
    "GHC": "kha²",
    "explanationEN": "an.insect.name",
    "explanationCN": "【卡】虫名"
  },
  {
    "character": "𗎥",
    "GX": "mmi¹",
    "GHC": "mji̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【米（名）】【弥】"
  },
  {
    "character": "𗄪",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "violate/go.against",
    "explanationCN": "1.背、败、忘"
  },
  {
    "character": "𗄺",
    "GX": "bu̱²",
    "GHC": "bu²",
    "explanationEN": "an.insect.name",
    "explanationCN": "【部】虫名"
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
    "explanationEN": "survey/research",
    "explanationCN": "1.测察思、占"
  },
  {
    "character": "𗂙",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "difference",
    "explanationCN": "异别"
  },
  {
    "character": "𗆠",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "subdue",
    "explanationCN": "降服降伏"
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
    "GHC": "ləu",
    "explanationEN": "abandon",
    "explanationCN": "1.捨弃、爆裂"
  },
  {
    "character": "𗅫",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "revere",
    "explanationCN": "敬畏"
  },
  {
    "character": "𗅵",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "land/soil",
    "explanationCN": "土地"
  },
  {
    "character": "𗆸",
    "GX": "bu̱²",
    "GHC": "bu²",
    "explanationEN": "an.insect.name",
    "explanationCN": "【部】虫名"
  },
  {
    "character": "𗁱",
    "GX": "ye²",
    "GHC": "ꞏjịj²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【茵】草名"
  },
  {
    "character": "𗆐",
    "GX": "lleh²",
    "GHC": "ljịj²",
    "explanationEN": "come₂",
    "explanationCN": "来₂"
  },
  {
    "character": "𗆃",
    "GX": "pu̱h²",
    "GHC": "pụ²",
    "explanationEN": "weft",
    "explanationCN": "纬綫"
  },
  {
    "character": "𗅹",
    "GX": "ya¹",
    "GHC": "ꞏja¹",
    "explanationEN": "east/tail",
    "explanationCN": "东末尾"
  },
  {
    "character": "𗅨",
    "GX": "meh²",
    "GHC": "mjịj²",
    "explanationEN": "nothing/not",
    "explanationCN": "无"
  },
  {
    "character": "𗅯",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "prohibit/ban/prohibition/ban",
    "explanationCN": "禁止名词"
  },
  {
    "character": "𗆕",
    "GX": "di¹",
    "GHC": "dji¹",
    "explanationEN": "internal.organs/viscera/abdominal.cavity",
    "explanationCN": "内臟腹腔"
  },
  {
    "character": "𗆡",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "high",
    "explanationCN": "高"
  },
  {
    "character": "𗀵",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【梅】草名"
  },
  {
    "character": "𗁆",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "man.of.wealth/moneybags",
    "explanationCN": "1.富翁、长者"
  },
  {
    "character": "𗁫",
    "GX": "sə̱¹",
    "GHC": "sə¹",
    "explanationEN": "tail/end",
    "explanationCN": "末尾"
  },
  {
    "character": "𗂖",
    "GX": "rbo̱ṃr¹",
    "GHC": "bowr¹",
    "explanationEN": "bag/pocket",
    "explanationCN": "包囊袋"
  },
  {
    "character": "𗂅",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "prime.minister/government.officials",
    "explanationCN": "丞相宰相官吏"
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
    "explanationEN": "a.surname",
    "explanationCN": "【祠】"
  },
  {
    "character": "𗂎",
    "GX": "tsheṃ²",
    "GHC": "tshjɨj²",
    "explanationEN": "purple/violet",
    "explanationCN": "1.紫色、紺【倩】【靖】【青】【净】【前】"
  },
  {
    "character": "𗹜",
    "GX": "dźwə²",
    "GHC": "dźjwɨ²",
    "explanationEN": "very.close.relative",
    "explanationCN": "至亲"
  },
  {
    "character": "𗁠",
    "GX": "vwo̱ṃ²",
    "GHC": "wow²",
    "explanationEN": "a.surname",
    "explanationCN": "【王】【旺】"
  },
  {
    "character": "𘈺",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "hinder/block",
    "explanationCN": "屏障"
  },
  {
    "character": "𗹞",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "an.insect.name",
    "explanationCN": "蠛"
  },
  {
    "character": "𘈽",
    "GX": "sweṃ¹",
    "GHC": "sjwɨj¹",
    "explanationEN": "(Buddhist).effect/accumulation",
    "explanationCN": "业"
  },
  {
    "character": "𗹪",
    "GX": "nle²",
    "GHC": "lji̱j²",
    "explanationEN": "destroy/damage",
    "explanationCN": "1.毁壤破壤、散离、陷、伐"
  },
  {
    "character": "𗁣",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "careful/fearful",
    "explanationCN": "1.谨畏、敬、平"
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
    "explanationEN": "sit/reside",
    "explanationCN": "坐乘居住"
  },
  {
    "character": "𗶧",
    "GX": "dźwi²",
    "GHC": "dźjwi²",
    "explanationEN": "bed",
    "explanationCN": "1.床榻、扶、载、两字重迭為“同床”“同居”“同住”"
  },
  {
    "character": "𗢞",
    "GX": "nlle²",
    "GHC": "lji̱j²",
    "explanationEN": "devil/demon",
    "explanationCN": "魔"
  },
  {
    "character": "𗌉",
    "GX": "rne̱r¹",
    "GHC": "nejr¹",
    "explanationEN": "flat-iron/smoothness/moistness",
    "explanationCN": "润滑熨"
  },
  {
    "character": "𗋨",
    "GX": "rlir²",
    "GHC": "ljir²",
    "explanationEN": "extract.butter/curdle",
    "explanationCN": "炼（乳）凝结"
  },
  {
    "character": "𗋌",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "the.ninth.of.the.ten.Heavenly.Stems",
    "explanationCN": "壬"
  },
  {
    "character": "𘚽",
    "GX": "lwəh¹",
    "GHC": "ljwɨ̣¹",
    "explanationEN": "run/speed",
    "explanationCN": "跑驰奔"
  },
  {
    "character": "𗏇",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "written.characters",
    "explanationCN": "字"
  },
  {
    "character": "𗊅",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "drink",
    "explanationCN": "饮"
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
    "explanationEN": "captivation.by.witchcraft",
    "explanationCN": "蛊惑"
  },
  {
    "character": "𘓢",
    "GX": "ndze̱²",
    "GHC": "dze̱j²",
    "explanationEN": "ride",
    "explanationCN": "骑"
  },
  {
    "character": "𗋼",
    "GX": "tṣhaə̱¹",
    "GHC": "tśhiə¹",
    "explanationEN": "foam/froth",
    "explanationCN": "抹泡沫"
  },
  {
    "character": "𘊢",
    "GX": "to²",
    "GHC": "tjo²",
    "explanationEN": "stop/cease",
    "explanationCN": "停息"
  },
  {
    "character": "𗊚",
    "GX": "ni?",
    "GHC": "nji",
    "explanationEN": "otter",
    "explanationCN": "獭"
  },
  {
    "character": "𗎾",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "a.comet",
    "explanationCN": "孛（彗）"
  },
  {
    "character": "𗊱",
    "GX": "dzo²",
    "GHC": "dzjo²",
    "explanationEN": "poetry/poem",
    "explanationCN": "1.诗、赋"
  },
  {
    "character": "𗋀",
    "GX": "tśəh²",
    "GHC": "tśjɨ̣²",
    "explanationEN": "flow/pass",
    "explanationCN": "流过"
  },
  {
    "character": "𗋒",
    "GX": "keh¹",
    "GHC": "kjịj¹",
    "explanationEN": "stalk",
    "explanationCN": "1.茎】、经、释"
  },
  {
    "character": "𗋟",
    "GX": "rqe̱r²",
    "GHC": "kejr²",
    "explanationEN": "crooked/aslant",
    "explanationCN": "歪斜"
  },
  {
    "character": "𗋮",
    "GX": "ṣwai̱¹",
    "GHC": "śiwe¹",
    "explanationEN": "honey",
    "explanationCN": "蜜"
  },
  {
    "character": "𗋂",
    "GX": "śwow¹",
    "GHC": "śjwo¹",
    "explanationEN": "need/want",
    "explanationCN": "1.需用、二字重迭表示“所需所用”【先】"
  },
  {
    "character": "𗌄",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "bone/skeleton",
    "explanationCN": "骨骼"
  },
  {
    "character": "𗊙",
    "GX": "hwi̱ṃ²",
    "GHC": "xwẽ²",
    "explanationEN": "a.surname",
    "explanationCN": "【浑】"
  },
  {
    "character": "𗢗",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "hell/inferno",
    "explanationCN": "地狱"
  },
  {
    "character": "𘔾",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【龙】草名"
  },
  {
    "character": "𗊊",
    "GX": "lo̱ṃh¹",
    "GHC": "lọ¹",
    "explanationEN": "reed",
    "explanationCN": "苇"
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
    "explanationEN": "beast/animal",
    "explanationCN": "兽"
  },
  {
    "character": "𘉹",
    "GX": "tsu¹",
    "GHC": "tsju¹",
    "explanationEN": "anger/rage",
    "explanationCN": "怨"
  },
  {
    "character": "𘊉",
    "GX": "keh¹",
    "GHC": "kjịj¹",
    "explanationEN": "rottenness",
    "explanationCN": "朽烂"
  },
  {
    "character": "𘊋",
    "GX": "po¹",
    "GHC": "pjo¹",
    "explanationEN": "slander",
    "explanationCN": "谤詆"
  },
  {
    "character": "𗋣",
    "GX": "rqhaa̱r¹",
    "GHC": "khiar¹",
    "explanationEN": "ghost/spirit",
    "explanationCN": "鬼蜮"
  },
  {
    "character": "𘊆",
    "GX": "bo²",
    "GHC": "bjo²",
    "explanationEN": "punish/penalize",
    "explanationCN": "罚"
  },
  {
    "character": "𗇉",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "Han.people",
    "explanationCN": "汉人"
  },
  {
    "character": "𗋰",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "poem",
    "explanationCN": "赋"
  },
  {
    "character": "𗼯",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "a.plot.of.land",
    "explanationCN": "畦"
  },
  {
    "character": "𗐅",
    "GX": "be¹",
    "GHC": "bjij¹",
    "explanationEN": "mend/patch",
    "explanationCN": "补衲"
  },
  {
    "character": "𗫳",
    "GX": "rqai̱r¹",
    "GHC": "kier¹",
    "explanationEN": "injure",
    "explanationCN": "1.伤害、狠"
  },
  {
    "character": "𗫴",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "fruit",
    "explanationCN": "1.果、珠"
  },
  {
    "character": "𗫽",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "musk.deer",
    "explanationCN": "麝"
  },
  {
    "character": "𗫼",
    "GX": "ləh²",
    "GHC": "ljɨ̣²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【梅】草名"
  },
  {
    "character": "𗬆",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "a.surname",
    "explanationCN": "【匹】"
  },
  {
    "character": "𗾞",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "day/daylight",
    "explanationCN": "日"
  },
  {
    "character": "𗏏",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "eat",
    "explanationCN": "食吃"
  },
  {
    "character": "𗏑",
    "GX": "nno̱¹",
    "GHC": "no̱¹",
    "explanationEN": "weak",
    "explanationCN": "弱哀"
  },
  {
    "character": "𗺣",
    "GX": "nśi²",
    "GHC": "śji̱²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【穡】草名"
  },
  {
    "character": "𗧹",
    "GX": "rŋir¹",
    "GHC": "ŋjir¹",
    "explanationEN": "disaster/calamity",
    "explanationCN": "灾祸灾难"
  },
  {
    "character": "𗻄",
    "GX": "kwiṃ¹",
    "GHC": "kjwĩ¹",
    "explanationEN": "thatched.cottage",
    "explanationCN": "草捨（草棚）"
  },
  {
    "character": "𗺼",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "macaque",
    "explanationCN": "獼猴"
  },
  {
    "character": "𗤾",
    "GX": "lo²",
    "GHC": "ljo²",
    "explanationEN": "elder.brother",
    "explanationCN": "兄哥"
  },
  {
    "character": "𗣸",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "death",
    "explanationCN": "死"
  },
  {
    "character": "𗾔",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "the.sun",
    "explanationCN": "日"
  },
  {
    "character": "𗽹",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "market",
    "explanationCN": "【市】【施】"
  },
  {
    "character": "𗾽",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "run.away/flee",
    "explanationCN": "逃跑"
  },
  {
    "character": "𗦷",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "before/formerly",
    "explanationCN": "从前昔日"
  },
  {
    "character": "𗧱",
    "GX": "swə²",
    "GHC": "sjwɨ²",
    "explanationEN": "a.surname",
    "explanationCN": "【税】【绥】"
  },
  {
    "character": "𗿁",
    "GX": "phə¹",
    "GHC": "phjɨ¹",
    "explanationEN": "hear/know",
    "explanationCN": "听闻"
  },
  {
    "character": "𗪯",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "wife/concubine",
    "explanationCN": "妻妾"
  },
  {
    "character": "𗺺",
    "GX": "si̱¹",
    "GHC": "se¹",
    "explanationEN": "flax",
    "explanationCN": "麻"
  },
  {
    "character": "𗬛",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "soft-shelled.turtle",
    "explanationCN": "鱉（甲鱼）"
  },
  {
    "character": "𗢺",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "before/formerly",
    "explanationCN": "经过从前"
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
    "explanationEN": "a.transliteration",
    "explanationCN": "【斯】【嗣】【似】【氏】【思】【巳】【四】【司】【丝】【死】【赐】"
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
    "explanationCN": "蜂"
  },
  {
    "character": "𗿿",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "sage/able.and.virtuous.person",
    "explanationCN": "1.圣贤【提】【地】【点】【底】【定】"
  },
  {
    "character": "𗣞",
    "GX": "rtswə̱r¹",
    "GHC": "tswər¹",
    "explanationEN": "milk.(a.livestock)",
    "explanationCN": "挤（乳）"
  },
  {
    "character": "𗬏",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "third",
    "explanationCN": "第三"
  },
  {
    "character": "𗤺",
    "GX": "lhwə²",
    "GHC": "lhjwɨ²",
    "explanationEN": "abrupt/sudden/violent",
    "explanationCN": "1.骤暴疾、突然"
  },
  {
    "character": "𗤻",
    "GX": "vah¹",
    "GHC": "wjạ¹",
    "explanationEN": "flower",
    "explanationCN": "1.花华【怀】"
  },
  {
    "character": "𗦶",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "throw.away/abandon",
    "explanationCN": "抛弃"
  },
  {
    "character": "𗤕",
    "GX": "tsa̱ṃ¹",
    "GHC": "tsã¹",
    "explanationEN": "burst/blast",
    "explanationCN": "1.爆裂爆破破裂【赞】"
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
    "explanationCN": "腹肚子"
  },
  {
    "character": "𗬢",
    "GX": "gwə¹",
    "GHC": "gjwɨ¹",
    "explanationEN": "firm/solid",
    "explanationCN": "1.坚固、甲"
  },
  {
    "character": "𗤍",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "anger",
    "explanationCN": "怒"
  },
  {
    "character": "𗦎",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "flow/leak",
    "explanationCN": "1.流漏过、休、絶、轮"
  },
  {
    "character": "𗧑",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "break.off.with.the.fingers.and.thumb",
    "explanationCN": "掰"
  },
  {
    "character": "𗨍",
    "GX": "hwaa̱¹",
    "GHC": "xiwa¹",
    "explanationEN": "flower/grass",
    "explanationCN": "【花】【项】【翻】【话】"
  },
  {
    "character": "𗧬",
    "GX": "tho̱ṃh²",
    "GHC": "thọ²",
    "explanationEN": "grow.up",
    "explanationCN": "长大"
  },
  {
    "character": "𗧰",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "open.wide/be.exposed.the.sun",
    "explanationCN": "敞开暴晒"
  },
  {
    "character": "𗪜",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "origin/source",
    "explanationCN": "本源"
  },
  {
    "character": "𗫉",
    "GX": "mbae̱¹",
    "GHC": "bie̱j¹",
    "explanationEN": "entertaimnent",
    "explanationCN": "娱乐"
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
    "explanationEN": "a.place.name",
    "explanationCN": "【旬】【匈】地名"
  },
  {
    "character": "𗽯",
    "GX": "phe̱ṃ¹",
    "GHC": "phəj¹",
    "explanationEN": "vast/wide",
    "explanationCN": "广阔"
  },
  {
    "character": "𘔼",
    "GX": "nuo¹",
    "GHC": "nio̱w¹",
    "explanationEN": "ᴄᴀᴜꜱ",
    "explanationCN": "CAUS"
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
    "GHC": "tśhiã¹",
    "explanationEN": "thatched.cottage",
    "explanationCN": "草捨茅棚"
  },
  {
    "character": "𗪝",
    "GX": "γwae̱h¹",
    "GHC": "ɣwẹj¹",
    "explanationEN": "struggle/fight",
    "explanationCN": "击"
  },
  {
    "character": "𗏥",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "a.surname",
    "explanationCN": "【吕】妙"
  },
  {
    "character": "𗏲",
    "GX": "phe̱²",
    "GHC": "phej²",
    "explanationEN": "a.surname",
    "explanationCN": "【沛】【裴】"
  },
  {
    "character": "𗣢",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "bamboo.or.twig.fence",
    "explanationCN": "笆"
  },
  {
    "character": "𗤼",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "night/darkness",
    "explanationCN": "夜冥暗"
  },
  {
    "character": "𗦢",
    "GX": "sa̱²",
    "GHC": "dza²",
    "explanationEN": "survey/measure",
    "explanationCN": "1.测量喻卜度、策"
  },
  {
    "character": "𗦤",
    "GX": "nle¹",
    "GHC": "lji̱j¹",
    "explanationEN": "wait/stay",
    "explanationCN": "稍侍停留"
  },
  {
    "character": "𗨟",
    "GX": "dź??",
    "GHC": "dź-",
    "explanationEN": "oblique/lopsided",
    "explanationCN": "倾斜邪歪"
  },
  {
    "character": "𗩚",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "exist/have/place",
    "explanationCN": "在有置设"
  },
  {
    "character": "𗧽",
    "GX": "rtso̱ṃr²",
    "GHC": "tsowr²",
    "explanationEN": "astonish/shock/voice",
    "explanationCN": "震骇震鸣憒闹"
  },
  {
    "character": "𗨰",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "weave",
    "explanationCN": "织【啦】"
  },
  {
    "character": "𗼺",
    "GX": "ndzu̱²",
    "GHC": "dzu̱²",
    "explanationEN": "plant/stand",
    "explanationCN": "植立"
  },
  {
    "character": "𗾾",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "fight/struggle",
    "explanationCN": "争鬭"
  },
  {
    "character": "𗺱",
    "GX": "ṣwaə̱¹",
    "GHC": "śiwə¹",
    "explanationEN": "mouse/rat",
    "explanationCN": "鼠】"
  },
  {
    "character": "𗻤",
    "GX": "ṣwaə̱¹",
    "GHC": "śiwə¹",
    "explanationEN": "coral",
    "explanationCN": "珊瑚"
  },
  {
    "character": "𗻗",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "a.kind.of.fruit",
    "explanationCN": "【粟】（沙果）"
  },
  {
    "character": "𗏡",
    "GX": "qu̱h¹",
    "GHC": "kụ¹",
    "explanationEN": "behind/back",
    "explanationCN": "后"
  },
  {
    "character": "𗦑",
    "GX": "hu̱¹",
    "GHC": "xu¹",
    "explanationEN": "clear/distinct",
    "explanationCN": "1.明晓明星分明、又音【傅】【户】【护】"
  },
  {
    "character": "𗺰",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "poisonous.weed",
    "explanationCN": "毒草"
  },
  {
    "character": "𗺡",
    "GX": "ndẓaa̱²",
    "GHC": "dźia̱²",
    "explanationEN": "graze/herd",
    "explanationCN": "放牧"
  },
  {
    "character": "𗻻",
    "GX": "tṣaa̱¹",
    "GHC": "tśia¹",
    "explanationEN": "a.kind.of.waterweeds",
    "explanationCN": "【藻】水草"
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
    "GHC": "kjạ¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【棺】草名"
  },
  {
    "character": "𗦈",
    "GX": "thi̱w¹",
    "GHC": "thew¹",
    "explanationEN": "penetrate",
    "explanationCN": "1.穿透】、破【陶】"
  },
  {
    "character": "𗨛",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "go.out/arise",
    "explanationCN": "1.出去、遁"
  },
  {
    "character": "𗫬",
    "GX": "ntṣaa̱²",
    "GHC": "tśia̱²",
    "explanationEN": "suffering/misery/distress",
    "explanationCN": "苦难"
  },
  {
    "character": "𗏹",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "often",
    "explanationCN": "常"
  },
  {
    "character": "𗪞",
    "GX": "yu¹",
    "GHC": "ꞏju¹",
    "explanationEN": "ashamed/abashed",
    "explanationCN": "1.羞愧【与】【预】"
  },
  {
    "character": "𗪔",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "hedgehog",
    "explanationCN": "刺猥"
  },
  {
    "character": "𗦁",
    "GX": "γai̱h²",
    "GHC": "ɣie²",
    "explanationEN": "harm/damage",
    "explanationCN": "1.损害、患、阻碍障壅滞、贼"
  },
  {
    "character": "𗺯",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【葫】草名"
  },
  {
    "character": "𗤶",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "heart/mind",
    "explanationCN": "心"
  },
  {
    "character": "𗾪",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "wisdom",
    "explanationCN": "慧心慧觉"
  },
  {
    "character": "𗟜",
    "GX": "rdzər¹",
    "GHC": "dzjɨr¹",
    "explanationEN": "rapid.speed",
    "explanationCN": "急】"
  },
  {
    "character": "𘜤",
    "GX": "ha¹",
    "GHC": "xja¹",
    "explanationEN": "very.fast/rapid",
    "explanationCN": "迅速急速"
  },
  {
    "character": "𘚫",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "slow/tardy",
    "explanationCN": "迟缓"
  },
  {
    "character": "𗺆",
    "GX": "lha¹",
    "GHC": "lhja¹",
    "explanationEN": "wide-open",
    "explanationCN": "敞开"
  },
  {
    "character": "𘚪",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "stand.up/set.up",
    "explanationCN": "立柱"
  },
  {
    "character": "𘚴",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "bee/wasp",
    "explanationCN": "【勒】虫名"
  },
  {
    "character": "𘚯",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【勒】草名"
  },
  {
    "character": "𗃠",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "imperial.court",
    "explanationCN": "皇城"
  },
  {
    "character": "𗴠",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "politics",
    "explanationCN": "政"
  },
  {
    "character": "𗃡",
    "GX": "puh²",
    "GHC": "pjụ²",
    "explanationEN": "hat/crown",
    "explanationCN": "1.冠盖、戴"
  },
  {
    "character": "𘓍",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "enemy/foe",
    "explanationCN": "敌寇"
  },
  {
    "character": "𗴕",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "respect",
    "explanationCN": "恭敬"
  },
  {
    "character": "𗬥",
    "GX": "de¹",
    "GHC": "djij¹",
    "explanationEN": "the.sun/day",
    "explanationCN": "日天"
  },
  {
    "character": "𗬫",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "surface",
    "explanationCN": "表外"
  },
  {
    "character": "𗃷",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "servant",
    "explanationCN": "奴僕"
  },
  {
    "character": "𗃼",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "an.insect.name",
    "explanationCN": "【疙】虫名"
  },
  {
    "character": "𗘯",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "ɪɴᴛʀɢ:ᴏᴜᴛ/ᴏᴘᴛ:ᴏᴜᴛ",
    "explanationCN": "ɪɴᴛʀɢ:ᴏᴜᴛ/ᴏᴘᴛ:ᴏᴜᴛ"
  },
  {
    "character": "𗃣",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "stagnate/leave.over/remain",
    "explanationCN": "停滞遗留剩餘"
  },
  {
    "character": "𗃨",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "change.irregularly",
    "explanationCN": "变幻"
  },
  {
    "character": "𗴒",
    "GX": "kah¹",
    "GHC": "kjạ¹",
    "explanationEN": "fear.ᴀ",
    "explanationCN": "恐惧.ᴀ"
  },
  {
    "character": "𗴞",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "revere/fear",
    "explanationCN": "敬畏可怕"
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
    "explanationEN": "hate",
    "explanationCN": "恨"
  },
  {
    "character": "𗼃",
    "GX": "śeṃ²",
    "GHC": "śjɨj²",
    "explanationEN": "sage/able.and.virtuous.person",
    "explanationCN": "圣】"
  },
  {
    "character": "𗼖",
    "GX": "lo¹",
    "GHC": "ljo¹",
    "explanationEN": "good.fortune",
    "explanationCN": "福右"
  },
  {
    "character": "𗼈",
    "GX": "nah¹",
    "GHC": "njạ¹",
    "explanationEN": "god/deity",
    "explanationCN": "1.神、圣"
  },
  {
    "character": "𗼛",
    "GX": "rtṣai̱r¹",
    "GHC": "tśier¹",
    "explanationEN": "right.side",
    "explanationCN": "右"
  },
  {
    "character": "𗺐",
    "GX": "lhuo¹",
    "GHC": "lhio̱w¹",
    "explanationEN": "strangle",
    "explanationCN": "勒死被割"
  },
  {
    "character": "𘉅",
    "GX": "dza̱¹",
    "GHC": "dza¹",
    "explanationEN": "miscellaneous/mixed",
    "explanationCN": "杂】"
  },
  {
    "character": "𗂼",
    "GX": "ye²",
    "GHC": "ꞏjij²",
    "explanationEN": "banquet/feast",
    "explanationCN": "宴席】"
  },
  {
    "character": "𗃇",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "hide/conceal",
    "explanationCN": "匿隠藏"
  },
  {
    "character": "𗆽",
    "GX": "tṣhaə̱¹",
    "GHC": "tśhiə¹",
    "explanationEN": "take.out",
    "explanationCN": "抽拔取"
  },
  {
    "character": "𗁓",
    "GX": "tə̱¹",
    "GHC": "tə¹",
    "explanationEN": "得",
    "explanationCN": "【德】【得】"
  },
  {
    "character": "𗂇",
    "GX": "qwae̱¹",
    "GHC": "kiwej¹",
    "explanationEN": "arm/wrist",
    "explanationCN": "1.臂腕、袖"
  },
  {
    "character": "𗂡",
    "GX": "rpə̱r¹",
    "GHC": "pər¹",
    "explanationEN": "clean/clear.away",
    "explanationCN": "扫除清除"
  },
  {
    "character": "𗂲",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "pierce/penetrate",
    "explanationCN": "穿陷"
  },
  {
    "character": "𗆾",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "inferior/betray",
    "explanationCN": "劣逆叛动词"
  },
  {
    "character": "𗆣",
    "GX": "nye¹",
    "GHC": "ꞏjịj¹",
    "explanationEN": "full",
    "explanationCN": "饱满"
  },
  {
    "character": "𗁬",
    "GX": "tho̱ṃ¹",
    "GHC": "thow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【唐】【道】【陀】【拓】【桃】【糖】【通】【大】【他】【驼】【堂】【棠】【铜】"
  },
  {
    "character": "𗹨",
    "GX": "yeṃ²",
    "GHC": "ꞏjɨj²",
    "explanationEN": "tent/house/temple",
    "explanationCN": "帐捨堂室宅宇庙泡"
  },
  {
    "character": "𗀷",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "penis",
    "explanationCN": "1.阴男根、淫"
  },
  {
    "character": "𗁁",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "have/exist(inanimate/immobile)",
    "explanationCN": "拥有;存在（无生命/不动）"
  },
  {
    "character": "𗁲",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "hair/feather",
    "explanationCN": "1.毛毫【昧】"
  },
  {
    "character": "𗁟",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "treasure",
    "explanationCN": "宝物"
  },
  {
    "character": "𗅶",
    "GX": "twə̱h¹",
    "GHC": "twə̣¹",
    "explanationEN": "take.out/catch",
    "explanationCN": "抽拔擒夺掣瞤"
  },
  {
    "character": "𗂢",
    "GX": "di̱h¹",
    "GHC": "dẹ¹",
    "explanationEN": "even/well-distributed",
    "explanationCN": "1.均匀、捻"
  },
  {
    "character": "𗂠",
    "GX": "hoṃ²",
    "GHC": "xjow²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【雄】"
  },
  {
    "character": "𗂶",
    "GX": "rə̱r¹",
    "GHC": "rər¹",
    "explanationEN": "stitch/sew",
    "explanationCN": "缝"
  },
  {
    "character": "𗹰",
    "GX": "tśəh¹",
    "GHC": "tśjɨ̣¹",
    "explanationEN": "encircle/go.round",
    "explanationCN": "围绕"
  },
  {
    "character": "𗹵",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "railing",
    "explanationCN": "栏】"
  },
  {
    "character": "𗹩",
    "GX": "ŋki¹",
    "GHC": "kji̱¹",
    "explanationEN": "make.smooth.with.a.file/grind",
    "explanationCN": "銼研磨"
  },
  {
    "character": "𗂔",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "swell/choke",
    "explanationCN": "胀"
  },
  {
    "character": "𗶣",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "a.surname",
    "explanationCN": "【妹】【梅】"
  },
  {
    "character": "𗶩",
    "GX": "thi²",
    "GHC": "thji²",
    "explanationEN": "land",
    "explanationCN": "1.地】【狄】【翟】【地】（珠 264）【笛】（珠 325）【涕】（珠 193）【体】（珠 304）"
  },
  {
    "character": "𗊍",
    "GX": "ŋqwai̱¹",
    "GHC": "kiwe̱¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鸛】鸟名"
  },
  {
    "character": "𗾀",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "powerful",
    "explanationCN": "强胜豪强"
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
    "GHC": "wẹ¹",
    "explanationEN": "coma/dying.words",
    "explanationCN": "昏迷"
  },
  {
    "character": "𗋓",
    "GX": "rzər²",
    "GHC": "zjɨ̱r²",
    "explanationEN": "breeding",
    "explanationCN": "配种"
  },
  {
    "character": "𘉰",
    "GX": "ŋah²",
    "GHC": "ŋjạ²",
    "explanationEN": "scar/defect/drawback",
    "explanationCN": "缺陷"
  },
  {
    "character": "𗊩",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "harmonious",
    "explanationCN": "和合"
  },
  {
    "character": "𗊁",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "mud",
    "explanationCN": "泥箅"
  },
  {
    "character": "𗊏",
    "GX": "nih²",
    "GHC": "njị²",
    "explanationEN": "pearl",
    "explanationCN": "1.珠、晶、计都"
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
    "explanationEN": "shake/shock",
    "explanationCN": "震动"
  },
  {
    "character": "𗎽",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "dust",
    "explanationCN": "尘土 尘埃"
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
    "explanationEN": "(used.before.disyllabic.verbs).self/oneself",
    "explanationCN": "自我"
  },
  {
    "character": "𗋵",
    "GX": "su̱²",
    "GHC": "su²",
    "explanationEN": "self",
    "explanationCN": "自吾"
  },
  {
    "character": "𗋚",
    "GX": "və²",
    "GHC": "wjɨ²",
    "explanationEN": "ᴘꜰᴠ:ᴏᴜᴛ/ɪᴍᴘ:ᴏᴜᴛ",
    "explanationCN": "ᴘꜰᴠ:ᴏᴜᴛ/ɪᴍᴘ:ᴏᴜᴛ"
  },
  {
    "character": "𗺒",
    "GX": "???",
    "GHC": "",
    "explanationEN": "lintel.(over.a.door)",
    "explanationCN": "梠楣"
  },
  {
    "character": "𗢤",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "grave/tomb",
    "explanationCN": "墓冢坟"
  },
  {
    "character": "𗾅",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "prison/jail",
    "explanationCN": "监牢狱"
  },
  {
    "character": "𘉷",
    "GX": "rkwər¹",
    "GHC": "kjwɨ̱r¹",
    "explanationEN": "a.kind.of.coarse.cloth",
    "explanationCN": "粗糙褐"
  },
  {
    "character": "𘉻",
    "GX": "lhi̱h²",
    "GHC": "lhẹ²",
    "explanationEN": "a.surname",
    "explanationCN": "【吕】【累】【虑】踩踏"
  },
  {
    "character": "𘉡",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "power/might",
    "explanationCN": "1.威、势"
  },
  {
    "character": "𘚀",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "be.stunned",
    "explanationCN": "愕"
  },
  {
    "character": "𗽽",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "clothing",
    "explanationCN": "衣服"
  },
  {
    "character": "𗾂",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "valley/gorge",
    "explanationCN": "1.谷】、隙"
  },
  {
    "character": "𗐉",
    "GX": "rmar¹",
    "GHC": "mjar¹",
    "explanationEN": "hair",
    "explanationCN": "毛髮"
  },
  {
    "character": "𗫵",
    "GX": "rqai̱r¹",
    "GHC": "kier¹",
    "explanationEN": "nightmare",
    "explanationCN": "1.魘、戏闹"
  },
  {
    "character": "𗢾",
    "GX": "kweṃh²",
    "GHC": "kjwɨ̣j²",
    "explanationEN": "alone/by.oneself",
    "explanationCN": "独自"
  },
  {
    "character": "𗣦",
    "GX": "świw¹",
    "GHC": "śjwiw¹",
    "explanationEN": "attend/follow",
    "explanationCN": "随从"
  },
  {
    "character": "𗥟",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "seduce",
    "explanationCN": "淫"
  },
  {
    "character": "𗼼",
    "GX": "qhau̱²",
    "GHC": "khu²",
    "explanationEN": "a.place.name",
    "explanationCN": "【库】【窟】"
  },
  {
    "character": "𗥜",
    "GX": "qwə̱h¹",
    "GHC": "kwə̣¹",
    "explanationEN": "a.surname",
    "explanationCN": "【骨】【橘】"
  },
  {
    "character": "𗨵",
    "GX": "kwəh¹",
    "GHC": "kjwɨ̣¹",
    "explanationEN": "a.surname",
    "explanationCN": "【格】"
  },
  {
    "character": "𗏪",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "coma/dying.words",
    "explanationCN": "昏迷"
  },
  {
    "character": "𗤏",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "mallet/beetle",
    "explanationCN": "槌"
  },
  {
    "character": "𗥅",
    "GX": "təh¹",
    "GHC": "tjɨ̣¹",
    "explanationEN": "often/constantly",
    "explanationCN": "经常;不断"
  },
  {
    "character": "𗥐",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "tail/the.east",
    "explanationCN": "尾东"
  },
  {
    "character": "𗨁",
    "GX": "phu²",
    "GHC": "phju²",
    "explanationEN": "up/above/over",
    "explanationCN": "1.上（方位）、长、高"
  },
  {
    "character": "𗨎",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "count/calculate",
    "explanationCN": "算计筹算"
  },
  {
    "character": "𗪿",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "a.surname",
    "explanationCN": "【梁】【拉】【猎】"
  },
  {
    "character": "𗾵",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "minced.meat/ground.meat",
    "explanationCN": "肉末肉馅"
  },
  {
    "character": "𗣥",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "rise/get.up/stand.up",
    "explanationCN": "起"
  },
  {
    "character": "𗤽",
    "GX": "si̱ṃ¹",
    "GHC": "sẽ¹",
    "explanationEN": "think",
    "explanationCN": "思】"
  },
  {
    "character": "𗦲",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "a.hundred.million",
    "explanationCN": "亿"
  },
  {
    "character": "𗨅",
    "GX": "lhə¹",
    "GHC": "lhji¹",
    "explanationEN": "frivolous",
    "explanationCN": "轻浮（飘浮）"
  },
  {
    "character": "𗩱",
    "GX": "nwi²",
    "GHC": "njwi²",
    "explanationEN": "can/be.able.to",
    "explanationCN": "1.能、善"
  },
  {
    "character": "𗾫",
    "GX": "nse²",
    "GHC": "sji̱j²",
    "explanationEN": "thought",
    "explanationCN": "想"
  },
  {
    "character": "𗻇",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【赏】草名"
  },
  {
    "character": "𗨆",
    "GX": "ṣae̱ṃ²",
    "GHC": "śiəj²",
    "explanationEN": "servant",
    "explanationCN": "奴僕【琛】"
  },
  {
    "character": "𗨣",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "agree.on",
    "explanationCN": "协议"
  },
  {
    "character": "𗦹",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "visitor/guest",
    "explanationCN": "客宾"
  },
  {
    "character": "𗦘",
    "GX": "qhaə̱¹",
    "GHC": "khiə¹",
    "explanationEN": "quiet",
    "explanationCN": "清静"
  },
  {
    "character": "𗼻",
    "GX": "lləh²",
    "GHC": "ljɨ̣²",
    "explanationEN": "land/soil",
    "explanationCN": "1.土地、活业、虞"
  },
  {
    "character": "𗾖",
    "GX": "ŋġo̱r¹",
    "GHC": "go̱r¹",
    "explanationEN": "man/male",
    "explanationCN": "男夫君雄"
  },
  {
    "character": "𗤊",
    "GX": "su̱²",
    "GHC": "su²",
    "explanationEN": "plot/scheme/conspire",
    "explanationCN": "1.图谋计谋【肃】（地名）"
  },
  {
    "character": "𗥄",
    "GX": "təh¹",
    "GHC": "tjɨ̣¹",
    "explanationEN": "often/constantly",
    "explanationCN": "1.时时、若或（语助）"
  },
  {
    "character": "𗦸",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "what/which/how/why",
    "explanationCN": "何"
  },
  {
    "character": "𗽿",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "pointed/tapering",
    "explanationCN": "1.尖【族】"
  },
  {
    "character": "𗨃",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "foolish/stupid",
    "explanationCN": "愚傻愣"
  },
  {
    "character": "𗪛",
    "GX": "dźwoṃ¹",
    "GHC": "dźjwow¹",
    "explanationEN": "publicize/propagate",
    "explanationCN": "1.宣扬、称号、泄"
  },
  {
    "character": "𗼵",
    "GX": "hao̱²",
    "GHC": "xjow²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【房】【方】【逢】【风】【匈】【兴】【奉】【雄】【放】【雍】【封】【冯】【风】"
  },
  {
    "character": "𗩴",
    "GX": "nni̱w²",
    "GHC": "ne̱w²",
    "explanationEN": "good/mercy",
    "explanationCN": "善亲"
  },
  {
    "character": "𗥝",
    "GX": "ndu̱¹",
    "GHC": "du̱¹",
    "explanationEN": "slave/servant",
    "explanationCN": "1.奴【努】（音 195）"
  },
  {
    "character": "𗥠",
    "GX": "mme²",
    "GHC": "mji̱j²",
    "explanationEN": "name/title",
    "explanationCN": "1.名、许"
  },
  {
    "character": "𗦻",
    "GX": "mme²",
    "GHC": "mji̱j²",
    "explanationEN": "name/title",
    "explanationCN": "1.名】、本、称"
  },
  {
    "character": "𗣧",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "thin",
    "explanationCN": "1.薄】【波】【婆】【摩】【訶】"
  },
  {
    "character": "𗢻",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "a.surname",
    "explanationCN": "【枚】【羊】"
  },
  {
    "character": "𗣤",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "border/boundary",
    "explanationCN": "边界"
  },
  {
    "character": "𗤞",
    "GX": "peṃ¹",
    "GHC": "pjɨj¹",
    "explanationEN": "tent",
    "explanationCN": "1.帐蓬、毛衣"
  },
  {
    "character": "𗦼",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "a.surname",
    "explanationCN": "【寿】"
  },
  {
    "character": "𗤙",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "native.place/old.home",
    "explanationCN": "老家"
  },
  {
    "character": "𗬒",
    "GX": "da̱²",
    "GHC": "da²",
    "explanationEN": "a.surname",
    "explanationCN": "【达】大长子"
  },
  {
    "character": "𗪋",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "line/ranks",
    "explanationCN": "1.行列、章句"
  },
  {
    "character": "𗏭",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "land/soil",
    "explanationCN": "土地"
  },
  {
    "character": "𗤛",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【忠】【鐘】【众】【中】【章】"
  },
  {
    "character": "𗤐",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "combine/unite",
    "explanationCN": "结合"
  },
  {
    "character": "𗦺",
    "GX": "pha̱ṃ¹",
    "GHC": "phã¹",
    "explanationEN": "a.surname",
    "explanationCN": "【盘】【槃】【潘】【跋】"
  },
  {
    "character": "𗨀",
    "GX": "dź??",
    "GHC": "dź-",
    "explanationEN": "abandon/exempt",
    "explanationCN": "免废弃"
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
    "explanationEN": "a.low.bank.of.earth.between.fields",
    "explanationCN": "田埂"
  },
  {
    "character": "𗾣",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "extremely.high",
    "explanationCN": "极高"
  },
  {
    "character": "𗿗",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "owl",
    "explanationCN": "鵂鴟"
  },
  {
    "character": "𗾯",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "arrow",
    "explanationCN": "矢箭"
  },
  {
    "character": "𗾄",
    "GX": "llə̱h¹",
    "GHC": "lə̣¹",
    "explanationEN": "bury",
    "explanationCN": "1.埋葬、殯"
  },
  {
    "character": "𗏾",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "grave/tomb",
    "explanationCN": "坟墓;墓"
  },
  {
    "character": "𗪗",
    "GX": "rdzwər¹",
    "GHC": "dzjwɨr¹",
    "explanationEN": "shiver/tremble",
    "explanationCN": "颤"
  },
  {
    "character": "𗤎",
    "GX": "nsa̱r¹",
    "GHC": "sa̱r¹",
    "explanationEN": "irrigate/pour",
    "explanationCN": "灌"
  },
  {
    "character": "𗦏",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "a.surname",
    "explanationCN": "【兮】【乙】"
  },
  {
    "character": "𗦞",
    "GX": "kwəh¹",
    "GHC": "kjwɨ̣¹",
    "explanationEN": "kowtow/worship.on.bended.knees",
    "explanationCN": "拜跪"
  },
  {
    "character": "𗨜",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "longevity",
    "explanationCN": "寿"
  },
  {
    "character": "𗩔",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "shining",
    "explanationCN": "1.耀、美"
  },
  {
    "character": "𗩞",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "down",
    "explanationCN": "底下"
  },
  {
    "character": "𗩙",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "a.surname",
    "explanationCN": "【普】【部】【铺】【葡】【薄】【菩】【泊】【濮】"
  },
  {
    "character": "𗪾",
    "GX": "qu̱h¹",
    "GHC": "kụ¹",
    "explanationEN": "loose",
    "explanationCN": "鬆"
  },
  {
    "character": "𗿝",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "wild.goose",
    "explanationCN": "雁"
  },
  {
    "character": "𗦗",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "man",
    "explanationCN": "1.男、阳【桑】【娑】【索】"
  },
  {
    "character": "𗏩",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "an.old-fashioned.belt",
    "explanationCN": "袜】"
  },
  {
    "character": "𗧳",
    "GX": "kha²",
    "GHC": "khja̱²",
    "explanationEN": "twine/wind",
    "explanationCN": "绕缠围"
  },
  {
    "character": "𗽻",
    "GX": "qao̱ṃ²",
    "GHC": "kiow²",
    "explanationEN": "tool/implement",
    "explanationCN": "（工）具】"
  },
  {
    "character": "𗽡",
    "GX": "rver²",
    "GHC": "wjijr²",
    "explanationEN": "dig",
    "explanationCN": "掘"
  },
  {
    "character": "𗾢",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "bird",
    "explanationCN": "鸟雀"
  },
  {
    "character": "𗺤",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "a.kind.of.herb",
    "explanationCN": "【蒡】（草药）"
  },
  {
    "character": "𗺳",
    "GX": "vah²",
    "GHC": "wjạ²",
    "explanationEN": "a.kind.of.herb",
    "explanationCN": "蔓（草）"
  },
  {
    "character": "𗻈",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "barnyard.grass",
    "explanationCN": "稊稗"
  },
  {
    "character": "𗫡",
    "GX": "nə²",
    "GHC": "njɨ²",
    "explanationEN": "arrive/spread",
    "explanationCN": "1.至到普遍、周上临及均"
  },
  {
    "character": "𗩌",
    "GX": "nlhu¹",
    "GHC": "lhju̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【律】【嚕】"
  },
  {
    "character": "𗏨",
    "GX": "rγu̱r¹",
    "GHC": "ɣur¹",
    "explanationEN": "corpse",
    "explanationCN": "尸"
  },
  {
    "character": "𗥶",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "a.surname",
    "explanationCN": "【陆】【鲁】【洛】迟缓"
  },
  {
    "character": "𗧝",
    "GX": "mo²",
    "GHC": "mjo²",
    "explanationEN": "realize",
    "explanationCN": "悟"
  },
  {
    "character": "𗩣",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "scatter/spill",
    "explanationCN": "撒"
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
    "explanationEN": "eliminate/clean.up",
    "explanationCN": "肃】"
  },
  {
    "character": "𗻆",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【赏】草名"
  },
  {
    "character": "𗤜",
    "GX": "loṃ¹",
    "GHC": "ljow¹",
    "explanationEN": "ball/ovum",
    "explanationCN": "卵丸"
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
    "explanationEN": "belch/breathe.ones.last",
    "explanationCN": "嗝嚥"
  },
  {
    "character": "𗾃",
    "GX": "rqha̱r¹",
    "GHC": "khar¹",
    "explanationEN": "dry/thirsty",
    "explanationCN": "乾渴"
  },
  {
    "character": "𗃪",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "level/smooth",
    "explanationCN": "平坦"
  },
  {
    "character": "𗴖",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "enemy/foe",
    "explanationCN": "敌"
  },
  {
    "character": "𗃹",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "be.stunned",
    "explanationCN": "愕"
  },
  {
    "character": "𘓜",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "narrow",
    "explanationCN": "窄"
  },
  {
    "character": "𘓝",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "label/mark",
    "explanationCN": "誌识】"
  },
  {
    "character": "𗎫",
    "GX": "rtser²",
    "GHC": "tsji̱r²",
    "explanationEN": "nature/character",
    "explanationCN": "性"
  },
  {
    "character": "𗄻",
    "GX": "nwə̱¹",
    "GHC": "nwə¹",
    "explanationEN": "know/realize",
    "explanationCN": "知"
  },
  {
    "character": "𗅄",
    "GX": "la̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "thick",
    "explanationCN": "厚"
  },
  {
    "character": "𗄯",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "clear/obvious",
    "explanationCN": "1.显明【梅】"
  },
  {
    "character": "𗅍",
    "GX": "lweṃh¹",
    "GHC": "ljwɨj¹",
    "explanationEN": "ignorant/muddle-headed",
    "explanationCN": "暗愚昧"
  },
  {
    "character": "𗆩",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "toil",
    "explanationCN": "辛苦"
  },
  {
    "character": "𗁻",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "skeleton/marrow",
    "explanationCN": "骨骼骨髓"
  },
  {
    "character": "𗡼",
    "GX": "rber²",
    "GHC": "bji̱r²",
    "explanationEN": "help/aid",
    "explanationCN": "1.助副右、嬪"
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
    "GHC": "ꞏu²",
    "explanationEN": "anger",
    "explanationCN": "怒"
  },
  {
    "character": "𗅂",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "manage/ministry",
    "explanationCN": "1.司名词、点"
  },
  {
    "character": "𗅃",
    "GX": "lwuh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "level/smooth.(land)",
    "explanationCN": "1.坦、二字重迭具有“堂堂巍巍”之义"
  },
  {
    "character": "𗁌",
    "GX": "rdi̱r²",
    "GHC": "de̱r²",
    "explanationEN": "grind",
    "explanationCN": "研"
  },
  {
    "character": "𗂝",
    "GX": "dźih¹",
    "GHC": "dźjị¹",
    "explanationEN": "cut/reap",
    "explanationCN": "割"
  },
  {
    "character": "𗂣",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "year/age",
    "explanationCN": "年岁"
  },
  {
    "character": "𗁜",
    "GX": "rvor¹",
    "GHC": "wjor¹",
    "explanationEN": "backbone",
    "explanationCN": "脊梁"
  },
  {
    "character": "𗂩",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "a.surname",
    "explanationCN": "【儒】【茹】【汝】"
  },
  {
    "character": "𗹳",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "principle/discipline",
    "explanationCN": "1.网、歷、躯干、簿"
  },
  {
    "character": "𗹠",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "skilful/ingenious",
    "explanationCN": "巧善精利"
  },
  {
    "character": "𗹸",
    "GX": "lhuo¹",
    "GHC": "lhio̱w¹",
    "explanationEN": "grave",
    "explanationCN": "1.坟墓【牢】"
  },
  {
    "character": "𗹼",
    "GX": "qhwaa̱¹",
    "GHC": "khiwa¹",
    "explanationEN": "kidney",
    "explanationCN": "腰子"
  },
  {
    "character": "𗇀",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "throw/abandon",
    "explanationCN": "抛弃"
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
    "explanationEN": "stupor/coma",
    "explanationCN": "昏迷"
  },
  {
    "character": "𗏃",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "an.ancient.unit.of.weight.(1/24.liang)",
    "explanationCN": "銖"
  },
  {
    "character": "𗏀",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "dust",
    "explanationCN": "尘埃"
  },
  {
    "character": "𗋐",
    "GX": "tśhu¹",
    "GHC": "tśhju¹",
    "explanationEN": "exist.ᴀ(inside)/have.ᴀ",
    "explanationCN": "（内部）存在.ᴀ；拥有.ᴀ"
  },
  {
    "character": "𗋪",
    "GX": "vwo̱h¹",
    "GHC": "ꞏwiọ¹",
    "explanationEN": "circle",
    "explanationCN": "1.围圆周、近"
  },
  {
    "character": "𗋡",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "colored.glaze",
    "explanationCN": "琉璃"
  },
  {
    "character": "𗌈",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "confusion",
    "explanationCN": "迷惑愚"
  },
  {
    "character": "𗢜",
    "GX": "???",
    "GHC": "",
    "explanationEN": "die",
    "explanationCN": "死（马）"
  },
  {
    "character": "𗌓",
    "GX": "???",
    "GHC": "",
    "explanationEN": "butter",
    "explanationCN": "熟酥"
  },
  {
    "character": "𗇈",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "cloth",
    "explanationCN": "1.布、葛巾"
  },
  {
    "character": "𗊟",
    "GX": "nso̱¹",
    "GHC": "so̱¹",
    "explanationEN": "sound",
    "explanationCN": "响"
  },
  {
    "character": "𗊹",
    "GX": "low¹",
    "GHC": "ljow¹",
    "explanationEN": "winding/crooked",
    "explanationCN": "弯曲斜"
  },
  {
    "character": "𗊈",
    "GX": "hwi̱¹",
    "GHC": "xwe¹",
    "explanationEN": "howl",
    "explanationCN": "嚎吼"
  },
  {
    "character": "𗊴",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "blood",
    "explanationCN": "血】"
  },
  {
    "character": "𘊈",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "weed",
    "explanationCN": "耨锄除"
  },
  {
    "character": "𘓣",
    "GX": "mbaa̱²",
    "GHC": "bia̱²",
    "explanationEN": "a.surname",
    "explanationCN": "【马】【马】【玛】【麻】【鬘】【蛮】"
  },
  {
    "character": "𗊢",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "heavy",
    "explanationCN": "1.重、大、厚"
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
    "explanationCN": "1.醋酸酱】、辛、与结合，具有“梅”之义"
  },
  {
    "character": "𗦠",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "detest/abhor",
    "explanationCN": "厌恶】"
  },
  {
    "character": "𗽙",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "tremble",
    "explanationCN": "慄"
  },
  {
    "character": "𗾋",
    "GX": "ti̱h¹",
    "GHC": "tẹ¹",
    "explanationEN": "excrement",
    "explanationCN": "粪"
  },
  {
    "character": "𗧨",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "go/march",
    "explanationCN": "巡行"
  },
  {
    "character": "𗏒",
    "GX": "du̱h²",
    "GHC": "dụ²",
    "explanationEN": "intestines",
    "explanationCN": "肠"
  },
  {
    "character": "𗬟",
    "GX": "rzi̱r²",
    "GHC": "zer²",
    "explanationEN": "expose.sunlight",
    "explanationCN": "1.曝、伞"
  },
  {
    "character": "𗣐",
    "GX": "təh¹",
    "GHC": "tjɨ̣¹",
    "explanationEN": "very.fast/rapid",
    "explanationCN": "急速疾"
  },
  {
    "character": "𗥉",
    "GX": "nde̱²",
    "GHC": "de̱j²",
    "explanationEN": "detest/loathe",
    "explanationCN": "嫌恶"
  },
  {
    "character": "𗣼",
    "GX": "tśha²",
    "GHC": "tśhja²",
    "explanationEN": "morals/virtue",
    "explanationCN": "1.德、正、贞、平、静"
  },
  {
    "character": "𗤝",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "know",
    "explanationCN": "知】"
  },
  {
    "character": "𗥦",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "head",
    "explanationCN": "1.头首、上、与连用具有“投降“之义"
  },
  {
    "character": "𗦯",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "a.surname",
    "explanationCN": "【胡】【吴】"
  },
  {
    "character": "𗥳",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "rapid/swift",
    "explanationCN": "迅速"
  },
  {
    "character": "𗥔",
    "GX": "nlhi̱w²",
    "GHC": "lhe̱w²",
    "explanationEN": "own/have",
    "explanationCN": "有在"
  },
  {
    "character": "𗧏",
    "GX": "tśho¹",
    "GHC": "tśhjo¹",
    "explanationEN": "exist.ʙ(inside)/have.ʙ",
    "explanationCN": "存在.ʙ（inside）;拥有.ʙ"
  },
  {
    "character": "𗧇",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "a.surname",
    "explanationCN": "【洛】"
  },
  {
    "character": "𗨈",
    "GX": "rbi̱r¹",
    "GHC": "ber¹",
    "explanationEN": "reward",
    "explanationCN": "奬赐"
  },
  {
    "character": "𗨨",
    "GX": "ro̱r²",
    "GHC": "ror²",
    "explanationEN": "circle/move.around",
    "explanationCN": "1.绕、敛、互"
  },
  {
    "character": "𗽧",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "enclose",
    "explanationCN": "围"
  },
  {
    "character": "𗾦",
    "GX": "tśo¹",
    "GHC": "tśjo¹",
    "explanationEN": "confused/mixed",
    "explanationCN": "混乱"
  },
  {
    "character": "𗾳",
    "GX": "tśo¹",
    "GHC": "",
    "explanationEN": "hard/difficult",
    "explanationCN": "难"
  },
  {
    "character": "𗿎",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "confused",
    "explanationCN": "1.纷乱、萤萤、鬱鬱"
  },
  {
    "character": "𗿪",
    "GX": "sa²",
    "GHC": "sja²",
    "explanationEN": "detest",
    "explanationCN": "嫌恶"
  },
  {
    "character": "𗪠",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "evening",
    "explanationCN": "晚名"
  },
  {
    "character": "𗪙",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "vulgar",
    "explanationCN": "俗愚顽"
  },
  {
    "character": "𗽫",
    "GX": "nwe¹",
    "GHC": "njwij¹",
    "explanationEN": "swell/coagulate",
    "explanationCN": "肿凝结"
  },
  {
    "character": "𗿇",
    "GX": "rkiwr¹",
    "GHC": "kjiwr¹",
    "explanationEN": "egret",
    "explanationCN": "孤鶩"
  },
  {
    "character": "𗿵",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "a.surname",
    "explanationCN": "【华】【匣】"
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
    "explanationEN": "a.kind.of.tool.for.divination",
    "explanationCN": "1.卜骨肩梁、检查造册"
  },
  {
    "character": "𗥹",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "crowd/group",
    "explanationCN": "群"
  },
  {
    "character": "𗥻",
    "GX": "phai̱¹",
    "GHC": "phie¹",
    "explanationEN": "a.surname",
    "explanationCN": "【白】【彭】"
  },
  {
    "character": "𗫞",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "stand.up",
    "explanationCN": "1.站、吏"
  },
  {
    "character": "𗽚",
    "GX": "qi̱w¹",
    "GHC": "kew¹",
    "explanationEN": "farmland",
    "explanationCN": "畴"
  },
  {
    "character": "𗏕",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "weapon",
    "explanationCN": "戈兵器"
  },
  {
    "character": "𗤇",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "obey",
    "explanationCN": "1.服从归顺、奔（投）"
  },
  {
    "character": "𗥞",
    "GX": "ŋgu²",
    "GHC": "gju̱²",
    "explanationEN": "rescue/relieve",
    "explanationCN": "救济"
  },
  {
    "character": "𗤪",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "ring/sound",
    "explanationCN": "震鸣"
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
    "explanationEN": "skill/scheme/stratagem",
    "explanationCN": "技计】"
  },
  {
    "character": "𗽕",
    "GX": "qao̱ṃ²",
    "GHC": "kiow²",
    "explanationEN": "valley",
    "explanationCN": "岬谷"
  },
  {
    "character": "𗾱",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "weapon",
    "explanationCN": "戈械枪剑箭……兵器"
  },
  {
    "character": "𘔺",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "gas",
    "explanationCN": "1.气】【溪】【忌】【綺】【暨】【器】（珠 232）【其】（珠 294）【起】（珠 105）【岂】（珠 353）【炁】（珠 082）"
  },
  {
    "character": "𗣿",
    "GX": "lhweh¹",
    "GHC": "lhjwịj¹",
    "explanationEN": "face",
    "explanationCN": "面容脸面"
  },
  {
    "character": "𗥨",
    "GX": "dźwow¹",
    "GHC": "dźjwo¹",
    "explanationEN": "bright/clever",
    "explanationCN": "明聪"
  },
  {
    "character": "𗩎",
    "GX": "nti̱w²",
    "GHC": "te̱w²",
    "explanationEN": "scheme/strategy",
    "explanationCN": "谋略计策"
  },
  {
    "character": "𗫑",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "livestock/domestic.animal",
    "explanationCN": "畜牲"
  },
  {
    "character": "𗺞",
    "GX": "tu̱h¹",
    "GHC": "tụ¹",
    "explanationEN": "net",
    "explanationCN": "网罗"
  },
  {
    "character": "𗻁",
    "GX": "nde̱²",
    "GHC": "de̱j²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【奶】草名"
  },
  {
    "character": "𗻫",
    "GX": "rvor²",
    "GHC": "wjor²",
    "explanationEN": "nest",
    "explanationCN": "窝巢】"
  },
  {
    "character": "𗧢",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "Hunnu.people",
    "explanationCN": "匈奴"
  },
  {
    "character": "𗿄",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "request/ask",
    "explanationCN": "1.请来【遽】【鉅】【巨】【瞿】【恪】【具】（珠 322）【渠】（珠 121）【局】（珠 301）【去】（珠 112）【距】【曲】【邛】（音 196）"
  },
  {
    "character": "𗻛",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【鳩】草名"
  },
  {
    "character": "𗻣",
    "GX": "qhwa̱²",
    "GHC": "khwa²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【恰】草名"
  },
  {
    "character": "𗺽",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【芦】草名"
  },
  {
    "character": "𗻑",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "herd/herbage",
    "explanationCN": "放牧牧草名词"
  },
  {
    "character": "𗏖",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "a.surname",
    "explanationCN": "【领】【翎】"
  },
  {
    "character": "𗣈",
    "GX": "lho̱?",
    "GHC": "lho",
    "explanationEN": "go.out",
    "explanationCN": "出过"
  },
  {
    "character": "𘊝",
    "GX": "ryir²",
    "GHC": "ꞏjir²",
    "explanationEN": "hundred",
    "explanationCN": "百"
  },
  {
    "character": "𗽍",
    "GX": "ndwə̱¹",
    "GHC": "dwə̣¹",
    "explanationEN": "protruding",
    "explanationCN": "突出"
  },
  {
    "character": "𗽎",
    "GX": "ndwə̱¹",
    "GHC": "",
    "explanationEN": "protruding",
    "explanationCN": "突出"
  },
  {
    "character": "𗾩",
    "GX": "hwaṃ¹",
    "GHC": "xjwã¹",
    "explanationEN": "county",
    "explanationCN": "髓"
  },
  {
    "character": "𗧜",
    "GX": "nlhu̱²",
    "GHC": "lhu̱²",
    "explanationEN": "marrow",
    "explanationCN": "难"
  },
  {
    "character": "𗦅",
    "GX": "ŋkhe¹",
    "GHC": "khji̱j¹",
    "explanationEN": "difficult",
    "explanationCN": "【折】"
  },
  {
    "character": "𗥽",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "a.surname",
    "explanationCN": "里（程）"
  },
  {
    "character": "𗼲",
    "GX": "mbu²",
    "GHC": "bju̱²",
    "explanationEN": "mile",
    "explanationCN": "1.统、将"
  },
  {
    "character": "𗩈",
    "GX": "mbu²",
    "GHC": "bju̱²",
    "explanationEN": "command",
    "explanationCN": "詔敕"
  },
  {
    "character": "𗿢",
    "GX": "rzu̱r²",
    "GHC": "zur²",
    "explanationEN": "imperial.edict",
    "explanationCN": "重定向至2222"
  },
  {
    "character": "𗩍",
    "GX": "nvwə̱¹",
    "GHC": "wə̣¹",
    "explanationEN": "own/have",
    "explanationCN": "拥有;要有"
  },
  {
    "character": "𗻯",
    "GX": "rzu̱r²",
    "GHC": "zur²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【茱】草名"
  },
  {
    "character": "𗩼",
    "GX": "nla̱¹",
    "GHC": "la̱¹",
    "explanationEN": "cherish",
    "explanationCN": "惜"
  },
  {
    "character": "𘚩",
    "GX": "qhae̱¹",
    "GHC": "khiej¹",
    "explanationEN": "north",
    "explanationCN": "朔（北）"
  },
  {
    "character": "𘚷",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "round.bone",
    "explanationCN": "圆骨"
  },
  {
    "character": "𘓡",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "cherish",
    "explanationCN": "惜"
  },
  {
    "character": "𗼙",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "emperor",
    "explanationCN": "君皇"
  },
  {
    "character": "𗼑",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "the.moon",
    "explanationCN": "月"
  },
  {
    "character": "𗼒",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "tribute/consecrate",
    "explanationCN": "1.贡献供奉、进、奏"
  },
  {
    "character": "𗼝",
    "GX": "lo¹",
    "GHC": "ljo¹",
    "explanationEN": "round.bone",
    "explanationCN": "圆骨"
  },
  {
    "character": "𗅽",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "dim/foolish",
    "explanationCN": "昏暗"
  },
  {
    "character": "𗃂",
    "GX": "qhə̱h¹",
    "GHC": "khə̣¹",
    "explanationEN": "rock/sway/shake",
    "explanationCN": "1.摇晃、喃"
  },
  {
    "character": "𗆔",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "discipline",
    "explanationCN": "1.纲纪、干、茎、略、殊、贯"
  },
  {
    "character": "𗎮",
    "GX": "vuh²",
    "GHC": "wjụ²",
    "explanationEN": "village/hamlet",
    "explanationCN": "村邑乡里"
  },
  {
    "character": "𗎲",
    "GX": "dźwe²",
    "GHC": "dźjwij²",
    "explanationEN": "move/migrate",
    "explanationCN": "迁徒"
  },
  {
    "character": "𗁳",
    "GX": "yaw²",
    "GHC": "ꞏja̱²",
    "explanationEN": "horn",
    "explanationCN": "角"
  },
  {
    "character": "𗄷",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "give.birth.to/bear",
    "explanationCN": "生產诞"
  },
  {
    "character": "𗢂",
    "GX": "hə̱²",
    "GHC": "xə²",
    "explanationEN": "Chinese.parasol.tree",
    "explanationCN": "梧桐"
  },
  {
    "character": "𗆇",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "heal/recover",
    "explanationCN": "1.愈消、瘥"
  },
  {
    "character": "𗅛",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "the.sun",
    "explanationCN": "太阳"
  },
  {
    "character": "𗆂",
    "GX": "phe̱¹",
    "GHC": "phej¹",
    "explanationEN": "tie.up/truss.up/restrict",
    "explanationCN": "1.捆缚枷拘、纪方"
  },
  {
    "character": "𗂛",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "bear.(a.burden)/shoulder",
    "explanationCN": "负担"
  },
  {
    "character": "𗹶",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "building",
    "explanationCN": "楼"
  },
  {
    "character": "𗅮",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "announce/accuse",
    "explanationCN": "告"
  },
  {
    "character": "𗂐",
    "GX": "tshwa̱¹",
    "GHC": "tshwa¹",
    "explanationEN": "invade.and.harass/impale",
    "explanationCN": "刺穿侵扰"
  },
  {
    "character": "𗁽",
    "GX": "tshe̱¹",
    "GHC": "tshej¹",
    "explanationEN": "invade.and.harass",
    "explanationCN": "侵扰劳役"
  },
  {
    "character": "𗅆",
    "GX": "deṃ²",
    "GHC": "djɨj²",
    "explanationEN": "calm/quiet",
    "explanationCN": "定】"
  },
  {
    "character": "𗹿",
    "GX": "de̱¹",
    "GHC": "dej¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【代】"
  },
  {
    "character": "𗎯",
    "GX": "vu²",
    "GHC": "wju²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【沃】"
  },
  {
    "character": "𗎱",
    "GX": "rtser²",
    "GHC": "tsji̱r²",
    "explanationEN": "a.surname",
    "explanationCN": "【稷】"
  },
  {
    "character": "𗆌",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【部】【牟】"
  },
  {
    "character": "𗂓",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【竇】【斗】"
  },
  {
    "character": "𗂀",
    "GX": "qo̱¹",
    "GHC": "ko¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【果】【光】"
  },
  {
    "character": "𗢆",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "a.surname",
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
    "explanationEN": "rest",
    "explanationCN": "休息"
  },
  {
    "character": "𗊼",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "fluctuate",
    "explanationCN": "波浪"
  },
  {
    "character": "𗢑",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "disease",
    "explanationCN": "病"
  },
  {
    "character": "𗊭",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "dropsy/edema",
    "explanationCN": "浮肿"
  },
  {
    "character": "𗌞",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "flood/floodwater",
    "explanationCN": "洪洪水"
  },
  {
    "character": "𘓥",
    "GX": "γu̱h²",
    "GHC": "ꞏụ²",
    "explanationEN": "bear.(a.burden)",
    "explanationCN": "负荷负担背载"
  },
  {
    "character": "𗢢",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "grave/cemetery",
    "explanationCN": "丘墓"
  },
  {
    "character": "𗋲",
    "GX": "lai̱h¹",
    "GHC": "liẹ¹",
    "explanationEN": "wash/clean",
    "explanationCN": "洗涤"
  },
  {
    "character": "𘉿",
    "GX": "tsu¹",
    "GHC": "tsju¹",
    "explanationEN": "a.surname",
    "explanationCN": "【且】【且】"
  },
  {
    "character": "𗊥",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "moist/smooth",
    "explanationCN": "润滑"
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
    "explanationEN": "chop/cut",
    "explanationCN": "斩"
  },
  {
    "character": "𗣱",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "cover/overspread",
    "explanationCN": "1.遮盖【寂】【坐】"
  },
  {
    "character": "𗾛",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "fall",
    "explanationCN": "降"
  },
  {
    "character": "𗿚",
    "GX": "haa̱²",
    "GHC": "xia²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【晓】【罅】"
  },
  {
    "character": "𗥓",
    "GX": "ŋo̱²",
    "GHC": "ŋo²",
    "explanationEN": "illness/disease",
    "explanationCN": "病疾"
  },
  {
    "character": "𗧥",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "long",
    "explanationCN": "1.长、遍、纵、绵、甲、栏、寿"
  },
  {
    "character": "𗩪",
    "GX": "lhao̱h²",
    "GHC": "lhiọ²",
    "explanationEN": "great-great-grandson",
    "explanationCN": "曾孙玄孙"
  },
  {
    "character": "𗩄",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "a.surname",
    "explanationCN": "【诺】【陀】"
  },
  {
    "character": "𗽬",
    "GX": "tshih¹",
    "GHC": "tshjị¹",
    "explanationEN": "soil/land",
    "explanationCN": "土己"
  },
  {
    "character": "𗫌",
    "GX": "ni¹",
    "GHC": "nji¹",
    "explanationEN": "family/house",
    "explanationCN": "1.家宅捨、都"
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
    "explanationEN": "a.surname",
    "explanationCN": "【西】【息】"
  },
  {
    "character": "𗪚",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "peaceful",
    "explanationCN": "安康寧靖"
  },
  {
    "character": "𗪩",
    "GX": "peṃh¹",
    "GHC": "pjɨ̣j¹",
    "explanationEN": "physical.strength.of.arms",
    "explanationCN": "旅力"
  },
  {
    "character": "𗪐",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "person",
    "explanationCN": "（按：此為男子女子之子，后缀语尾也）英文释义person详细解释请参考《简明夏汉字典》第346页。《同义》释义子mojikyo字体埒景永时字体縌"
  },
  {
    "character": "𗾸",
    "GX": "bi̱¹",
    "GHC": "be¹",
    "explanationEN": "disease",
    "explanationCN": "病"
  },
  {
    "character": "𗩅",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r¹",
    "explanationEN": "a.surname",
    "explanationCN": "【寥】【量】"
  },
  {
    "character": "𗧩",
    "GX": "bo̱²",
    "GHC": "bo²",
    "explanationEN": "a.surname",
    "explanationCN": "【勃】【柏】"
  },
  {
    "character": "𗽁",
    "GX": "γəh¹",
    "GHC": "ɣjɨ̣¹",
    "explanationEN": "tile/pottery",
    "explanationCN": "瓦陶"
  },
  {
    "character": "𗩇",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【温】【文】"
  },
  {
    "character": "𗿡",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a.place.name",
    "explanationCN": "【文】【汶】地名"
  },
  {
    "character": "𗦔",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "servant",
    "explanationCN": "1.奴僕【桑】"
  },
  {
    "character": "𗩃",
    "GX": "???",
    "GHC": "",
    "explanationEN": "pointed.end/point",
    "explanationCN": "1.尖端、擢"
  },
  {
    "character": "𗦓",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【禘】【尼】"
  },
  {
    "character": "𘔻",
    "GX": "kho²",
    "GHC": "khjo²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【强】【溪】"
  },
  {
    "character": "𗩁",
    "GX": "bai̱h¹",
    "GHC": "biẹ¹",
    "explanationEN": "willow",
    "explanationCN": "柳"
  },
  {
    "character": "𗪹",
    "GX": "dzo̱²",
    "GHC": "dzo²",
    "explanationEN": "a.surname",
    "explanationCN": "【嵯】【族】"
  },
  {
    "character": "𗻮",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "a.tree.name",
    "explanationCN": "【冷】树名"
  },
  {
    "character": "𗻴",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【菪】草名"
  },
  {
    "character": "𗩆",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "land/soil",
    "explanationCN": "土地"
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
    "explanationEN": "vigor/appearance",
    "explanationCN": "精神仪表"
  },
  {
    "character": "𗫃",
    "GX": "pho̱ṃ¹",
    "GHC": "phow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【彭】【朋】【坡】"
  },
  {
    "character": "𗺿",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "a.surname",
    "explanationCN": "【巴】"
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
    "explanationCN": "【没】"
  },
  {
    "character": "𗽊",
    "GX": "mme̱²",
    "GHC": "me̱j²",
    "explanationEN": "cave",
    "explanationCN": "1.洞穴、岩川、窍"
  },
  {
    "character": "𗾨",
    "GX": "rmə̱r²",
    "GHC": "mər²",
    "explanationEN": "crane",
    "explanationCN": "鹤"
  },
  {
    "character": "𘊕",
    "GX": "dźe²",
    "GHC": "dźe",
    "explanationEN": "a.surname",
    "explanationCN": "【神】"
  },
  {
    "character": "𗧪",
    "GX": "pe̱¹",
    "GHC": "pej¹",
    "explanationEN": "first",
    "explanationCN": "头生"
  },
  {
    "character": "𗿒",
    "GX": "qhwe̱²",
    "GHC": "khwej²",
    "explanationEN": "big/large",
    "explanationCN": "大魁】"
  },
  {
    "character": "𘊡",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "season",
    "explanationCN": "季"
  },
  {
    "character": "𘚲",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "cold.(disease)",
    "explanationCN": "风（伤风）"
  },
  {
    "character": "𘓑",
    "GX": "γwaa̱ṃ¹",
    "GHC": "ɣiwã¹",
    "explanationEN": "foolish/stupid",
    "explanationCN": "愚顽愚蠢"
  },
  {
    "character": "𗬲",
    "GX": "ndaa̱²",
    "GHC": "dia̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【达】【那】"
  },
  {
    "character": "𗃯",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "fall.ill.frequently",
    "explanationCN": "常病"
  },
  {
    "character": "𗴣",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "admire/respect",
    "explanationCN": "钦敬尊敬"
  },
  {
    "character": "𘓘",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "hot/painful",
    "explanationCN": "辛裂痛"
  },
  {
    "character": "𗴝",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "a.kind.of.jadeware",
    "explanationCN": "圭"
  },
  {
    "character": "𗆋",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "cry/weep",
    "explanationCN": "1.啼哭、又【说】"
  },
  {
    "character": "𗆆",
    "GX": "qwae̱ṃ¹",
    "GHC": "kiwəj¹",
    "explanationEN": "clumsy",
    "explanationCN": "笨【虢】"
  },
  {
    "character": "𗂬",
    "GX": "ryar²",
    "GHC": "ꞏjar²",
    "explanationEN": "marry",
    "explanationCN": "嫁过继"
  },
  {
    "character": "𗪎",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "force/compel",
    "explanationCN": "逼迫"
  },
  {
    "character": "𘀀",
    "GX": "rdwə̱r¹",
    "GHC": "dwər¹",
    "explanationEN": "be.tired.of",
    "explanationCN": "厌倦"
  },
  {
    "character": "𗀼",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "a.small.steelyard.for.weighing.gold,.medicine,.etc.",
    "explanationCN": "戳子"
  },
  {
    "character": "𗁺",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "clumsy/awkward/stupid",
    "explanationCN": "笨拙愚笨"
  },
  {
    "character": "𗅐",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "true/real/honest",
    "explanationCN": "1.真实诚实、果然"
  },
  {
    "character": "𗅻",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "lamb",
    "explanationCN": "羖䍽"
  },
  {
    "character": "𗅑",
    "GX": "meh¹",
    "GHC": "mjịj¹",
    "explanationEN": "morning/dawn",
    "explanationCN": "晨"
  },
  {
    "character": "𗆮",
    "GX": "lhwow¹",
    "GHC": "lhjwo¹",
    "explanationEN": "return/retreat",
    "explanationCN": "1.退还归、崩、屈"
  },
  {
    "character": "𗅏",
    "GX": "lah²",
    "GHC": "ljạ²",
    "explanationEN": "pierce/through/penetrate",
    "explanationCN": "穿"
  },
  {
    "character": "𗅝",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "foolish/stupid",
    "explanationCN": "愚"
  },
  {
    "character": "𗅾",
    "GX": "no̱¹",
    "GHC": "no¹",
    "explanationEN": "rib",
    "explanationCN": "1.肋【那】【拏】"
  },
  {
    "character": "𗆿",
    "GX": "rphaa̱r¹",
    "GHC": "phiar¹",
    "explanationEN": "disorder/loose",
    "explanationCN": "乱散"
  },
  {
    "character": "𗅓",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "mountain",
    "explanationCN": "1.山、月份"
  },
  {
    "character": "𗂾",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "devil/demon",
    "explanationCN": "魔"
  },
  {
    "character": "𗁗",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "a.surname",
    "explanationCN": "【酩】"
  },
  {
    "character": "𗂈",
    "GX": "źəh¹",
    "GHC": "źjɨ̣¹",
    "explanationEN": "left.side",
    "explanationCN": "左"
  },
  {
    "character": "𗃋",
    "GX": "rver²",
    "GHC": "wjijr²",
    "explanationEN": "hug/hold.up",
    "explanationCN": "举抱"
  },
  {
    "character": "𗂺",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "flog/beat",
    "explanationCN": "鞭打;击败"
  },
  {
    "character": "𗁡",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "dustpan",
    "explanationCN": "1.簸（箕）【备】【毗】【琵】【苾】【比】【鼻】【频】【嚭】【丕】"
  },
  {
    "character": "𘈻",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "breed/give.birth.to/bear",
    "explanationCN": "配种；生"
  },
  {
    "character": "𘈾",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "how.long/when",
    "explanationCN": "何时"
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
    "GHC": "ləu",
    "explanationEN": "nature/temperament",
    "explanationCN": "1.性格、散流"
  },
  {
    "character": "𗡺",
    "GX": "rber²",
    "GHC": "bji̱r²",
    "explanationEN": "explain/note",
    "explanationCN": "注释注解"
  },
  {
    "character": "𗅪",
    "GX": "qwae̱¹",
    "GHC": "kiwej¹",
    "explanationEN": "lose",
    "explanationCN": "遗失"
  },
  {
    "character": "𗁏",
    "GX": "ŋko¹",
    "GHC": "kjo̱¹",
    "explanationEN": "bite",
    "explanationCN": "咬嚙"
  },
  {
    "character": "𗄾",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "calculate/count",
    "explanationCN": "1.算数、歷、卜、该、娄"
  },
  {
    "character": "𗅴",
    "GX": "lae̱h²",
    "GHC": "lẹj²",
    "explanationEN": "avarice",
    "explanationCN": "贪"
  },
  {
    "character": "𗅳",
    "GX": "ŋġe̱²",
    "GHC": "ge̱j²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【讹】【额】"
  },
  {
    "character": "𗆝",
    "GX": "rə̱r²",
    "GHC": "rər²",
    "explanationEN": "tooth",
    "explanationCN": "齿"
  },
  {
    "character": "𗆷",
    "GX": "lla̱h²",
    "GHC": "lạ²",
    "explanationEN": "many/dense",
    "explanationCN": "多稠"
  },
  {
    "character": "𗁋",
    "GX": "taw¹",
    "GHC": "dja̱¹",
    "explanationEN": "drip",
    "explanationCN": "（滴）答】"
  },
  {
    "character": "𗂧",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "state",
    "explanationCN": "国"
  },
  {
    "character": "𗅅",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "harm",
    "explanationCN": "危害"
  },
  {
    "character": "𗂆",
    "GX": "zeh¹",
    "GHC": "zjịj¹",
    "explanationEN": "hit/touch/fit.exactly",
    "explanationCN": "1.著中、滞、结、耽"
  },
  {
    "character": "𗁾",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "rest/stop",
    "explanationCN": "息止"
  },
  {
    "character": "𗁙",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "fence,.fold",
    "explanationCN": "栅栏， 折迭"
  },
  {
    "character": "𗁚",
    "GX": "rkər²",
    "GHC": "",
    "explanationEN": "fence,.fold",
    "explanationCN": "栅栏， 折迭"
  },
  {
    "character": "𗁢",
    "GX": "nlhaa̱²",
    "GHC": "lhia̱²",
    "explanationEN": "fall/drop",
    "explanationCN": "落"
  },
  {
    "character": "𗂨",
    "GX": "tśoh²",
    "GHC": "tśjọ²",
    "explanationEN": "ashamed",
    "explanationCN": "羞"
  },
  {
    "character": "𗂋",
    "GX": "rnar¹",
    "GHC": "njar¹",
    "explanationEN": "flip/play.(a.stringed.musical.instrument)",
    "explanationCN": "弹"
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
    "explanationEN": "put.(the.palms.together)",
    "explanationCN": "合【网】【光】【哥】【个】【广】【刚】【姜】【羌】"
  },
  {
    "character": "𗂌",
    "GX": "yo̱r¹",
    "GHC": "ꞏjo̱r¹",
    "explanationEN": "firm/strong",
    "explanationCN": "刚强"
  },
  {
    "character": "𗀽",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "pound.with.a.pestle/beat",
    "explanationCN": "捣】"
  },
  {
    "character": "𗹱",
    "GX": "hae̱ṃ²",
    "GHC": "xiəj²",
    "explanationEN": "a.surname",
    "explanationCN": "【欣】【性】"
  },
  {
    "character": "𗹽",
    "GX": "tṣae̱h¹",
    "GHC": "tśiẹj¹",
    "explanationEN": "encircle/go.round",
    "explanationCN": "围绕"
  },
  {
    "character": "𗹾",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "former.times/in.the.past",
    "explanationCN": "昔原先先前"
  },
  {
    "character": "𗅩",
    "GX": "lwo̱ṃ¹",
    "GHC": "lwow¹",
    "explanationEN": "absurd/unexpected",
    "explanationCN": "妄枉虚横"
  },
  {
    "character": "𗃌",
    "GX": "rver²",
    "GHC": "wjijr²",
    "explanationEN": "hug/hold.up",
    "explanationCN": "举抱"
  },
  {
    "character": "𗀶",
    "GX": "tho̱ṃ¹",
    "GHC": "thow¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【塘】鸟名"
  },
  {
    "character": "𗀴",
    "GX": "???",
    "GHC": "",
    "explanationEN": "a.transliteration",
    "explanationCN": "【杂】"
  },
  {
    "character": "𗁖",
    "GX": "doh²",
    "GHC": "djọ²",
    "explanationEN": "build/treat.(a.disease)",
    "explanationCN": "治造"
  },
  {
    "character": "𗁿",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "rest/stop",
    "explanationCN": "息止"
  },
  {
    "character": "𗁵",
    "GX": "ye²",
    "GHC": "ꞏjij²",
    "explanationEN": "knitting.wool",
    "explanationCN": "毛线"
  },
  {
    "character": "𗁎",
    "GX": "dźih²",
    "GHC": "dźjị",
    "explanationEN": "ox/cattle",
    "explanationCN": "1.牛、财產"
  },
  {
    "character": "𗅗",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "kneel",
    "explanationCN": "跪"
  },
  {
    "character": "𗢃",
    "GX": "rgwər¹",
    "GHC": "gjwɨr¹",
    "explanationEN": "rise/grow",
    "explanationCN": "涨张昌"
  },
  {
    "character": "𗅷",
    "GX": "dẓae̱ṃ?",
    "GHC": "dźi",
    "explanationEN": "tooth",
    "explanationCN": "牙"
  },
  {
    "character": "𗡾",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "like/love/desire",
    "explanationCN": "爱欲"
  },
  {
    "character": "𗆑",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "swallow",
    "explanationCN": "吞食"
  },
  {
    "character": "𗆺",
    "GX": "lwo̱ṃ¹",
    "GHC": "lwow¹",
    "explanationEN": "lazy/slow",
    "explanationCN": "懒惰迟钝"
  },
  {
    "character": "𗆗",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "short",
    "explanationCN": "矮"
  },
  {
    "character": "𗇂",
    "GX": "rsa̱r²",
    "GHC": "sar²",
    "explanationEN": "spread/break.up",
    "explanationCN": "1.散】、弛、张"
  },
  {
    "character": "𗆨",
    "GX": "meh²",
    "GHC": "mjịj²",
    "explanationEN": "laborer/physical.labor",
    "explanationCN": "（按：体，非体之简体，《广韵》薄本切，音笨。“体工”乃干粗活之人，即劳力劳工也。）英文释义laborer; physical labor详细解释请参考《简明夏汉字典》第359页。聂歷山（Nevsky）释义体龚煌城释义体《同义》释义苦力奴仆mojikyo字体嫺景永时字体糠"
  },
  {
    "character": "𗂪",
    "GX": "rŋər²",
    "GHC": "ŋjɨr²",
    "explanationEN": "sheep/goat",
    "explanationCN": "顽羊"
  },
  {
    "character": "𗂉",
    "GX": "nvwi̱¹",
    "GHC": "we̱¹",
    "explanationEN": "lose/be.in.debt",
    "explanationCN": "遗失负债"
  },
  {
    "character": "𗁘",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "distend",
    "explanationCN": "胀宽"
  },
  {
    "character": "𗃍",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "spread",
    "explanationCN": "散布"
  },
  {
    "character": "𗁞",
    "GX": "tśhaw²",
    "GHC": "tśhja̱²",
    "explanationEN": "cui,.a.traditional.unit.of.length",
    "explanationCN": "尺】"
  },
  {
    "character": "𗹣",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "room/house",
    "explanationCN": "屋室"
  },
  {
    "character": "𘉀",
    "GX": "rtser¹",
    "GHC": "tsji̱r¹",
    "explanationEN": "government.official",
    "explanationCN": "官吏爵"
  },
  {
    "character": "𘈼",
    "GX": "ma̱²",
    "GHC": "ma²",
    "explanationEN": "in.the.past",
    "explanationCN": "过去昔日昨昔"
  },
  {
    "character": "𗁹",
    "GX": "tha̱²",
    "GHC": "tha",
    "explanationEN": "narrowness",
    "explanationCN": "迫逼"
  },
  {
    "character": "𗹫",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "good",
    "explanationCN": "善"
  },
  {
    "character": "𗀻",
    "GX": "tshwiṃ¹",
    "GHC": "tshjwĩ¹",
    "explanationEN": "cun,.a.traditional.unit.of.length",
    "explanationCN": "寸】"
  },
  {
    "character": "𗁴",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "son's.wife/daughter-in-law",
    "explanationCN": "媳"
  },
  {
    "character": "𗄰",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "dried/dry",
    "explanationCN": "乾"
  },
  {
    "character": "𗅒",
    "GX": "dzwa̱¹",
    "GHC": "dzwa¹",
    "explanationEN": "short/brief",
    "explanationCN": "矬】"
  },
  {
    "character": "𗅁",
    "GX": "γu̱²",
    "GHC": "ꞏu²",
    "explanationEN": "ɪɴᴇ",
    "explanationCN": "ɪɴᴇ"
  },
  {
    "character": "𗆄",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "measure/price",
    "explanationCN": "量价"
  },
  {
    "character": "𗁥",
    "GX": "tśoh²",
    "GHC": "tśjọ²",
    "explanationEN": "heavy",
    "explanationCN": "重（輜重）"
  },
  {
    "character": "𗂫",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "penis",
    "explanationCN": "男根"
  },
  {
    "character": "𗂹",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "flog/beat",
    "explanationCN": "打拷击笞"
  },
  {
    "character": "𗁩",
    "GX": "ti̱ṃ¹",
    "GHC": "tẽ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "等鐙"
  },
  {
    "character": "𗃄",
    "GX": "lwə²",
    "GHC": "ljwɨ²",
    "explanationEN": "fat/grease",
    "explanationCN": "脂肪"
  },
  {
    "character": "𗁤",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "tiger",
    "explanationCN": "虎"
  },
  {
    "character": "𗀾",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "cup",
    "explanationCN": "盃"
  },
  {
    "character": "𗹲",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "a.surname",
    "explanationCN": "1.【跋】坪"
  },
  {
    "character": "𗹷",
    "GX": "rŋo̱ṃr²",
    "GHC": "ŋowr²",
    "explanationEN": "anger/fury",
    "explanationCN": "怒嗔怒"
  },
  {
    "character": "𗐛",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "gathering/numerous",
    "explanationCN": "聚众坐"
  },
  {
    "character": "𗶨",
    "GX": "rda̱r¹",
    "GHC": "dar¹",
    "explanationEN": "reach",
    "explanationCN": "1.达】、舆、活"
  },
  {
    "character": "𗶫",
    "GX": "liw²",
    "GHC": "ljiw²",
    "explanationEN": "exhausted/be.used.up",
    "explanationCN": "尽【柳】"
  },
  {
    "character": "𗋭",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "sink",
    "explanationCN": "沉溺没坠"
  },
  {
    "character": "𗌥",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "dregs/residue",
    "explanationCN": "渣"
  },
  {
    "character": "𗴭",
    "GX": "swu̱²",
    "GHC": "swu²",
    "explanationEN": "similarity",
    "explanationCN": "像样似"
  },
  {
    "character": "𗊀",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "ditch/gully",
    "explanationCN": "沟壑"
  },
  {
    "character": "𗌁",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "toil",
    "explanationCN": "劳苦"
  },
  {
    "character": "𗌢",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "bridge",
    "explanationCN": "桥"
  },
  {
    "character": "𗢛",
    "GX": "yu¹",
    "GHC": "ꞏju¹",
    "explanationEN": "ghost/spirit",
    "explanationCN": "鬼魔【与】"
  },
  {
    "character": "𗊽",
    "GX": "bəh¹",
    "GHC": "bjɨ̣¹",
    "explanationEN": "tear/teardrop",
    "explanationCN": "泪"
  },
  {
    "character": "𗐒",
    "GX": "γa²",
    "GHC": "ɣja²",
    "explanationEN": "fast/rapid",
    "explanationCN": "疾速急"
  },
  {
    "character": "𗴫",
    "GX": "ki¹",
    "GHC": "kji¹",
    "explanationEN": "sing",
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
    "explanationEN": "net",
    "explanationCN": "网"
  },
  {
    "character": "𗐜",
    "GX": "γa²",
    "GHC": "ɣja²",
    "explanationEN": "cover/lid/cover",
    "explanationCN": "盖覆罩动词"
  },
  {
    "character": "𘔿",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "quail",
    "explanationCN": "鵪鶉"
  },
  {
    "character": "𗋆",
    "GX": "rqhwa̱r²",
    "GHC": "khwar²",
    "explanationEN": "eye.socket",
    "explanationCN": "眶】"
  },
  {
    "character": "𗊓",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "fountainhead/well-spring",
    "explanationCN": "源泉"
  },
  {
    "character": "𗋩",
    "GX": "rvwi̱r²",
    "GHC": "wer²",
    "explanationEN": "moist/rain/pool",
    "explanationCN": "泽雨"
  },
  {
    "character": "𗋊",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "canal/ditch",
    "explanationCN": "1.血沟、沼、流"
  },
  {
    "character": "𘊍",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "a.ghost.name",
    "explanationCN": "【魃】鬼名"
  },
  {
    "character": "𗐗",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "capture/gain",
    "explanationCN": "1.获得、及逮"
  },
  {
    "character": "𗐙",
    "GX": "ndu̱²",
    "GHC": "du²",
    "explanationEN": "aspiration/ideal/able/capable",
    "explanationCN": "志向能干形容词"
  },
  {
    "character": "𗴮",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "kind/type",
    "explanationCN": "类"
  },
  {
    "character": "𗐍",
    "GX": "ke̱?",
    "GHC": "kej",
    "explanationEN": "cover,.lid",
    "explanationCN": "盖"
  },
  {
    "character": "𗉻",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "analyze",
    "explanationCN": "分析"
  },
  {
    "character": "𘉥",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "reality/accuracy",
    "explanationCN": "中实正确"
  },
  {
    "character": "𘉦",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "chapters.and.sections",
    "explanationCN": "章节"
  },
  {
    "character": "𗘰",
    "GX": "mbaa̱²",
    "GHC": "bia̱²",
    "explanationEN": "dark",
    "explanationCN": "黑"
  },
  {
    "character": "𗉼",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "tasteless",
    "explanationCN": "淡"
  },
  {
    "character": "𗊺",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "a.surname",
    "explanationCN": "淡"
  },
  {
    "character": "𗌀",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "barnyard.grass",
    "explanationCN": "稗蒿子"
  },
  {
    "character": "𗉸",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "marsh",
    "explanationCN": "沼泽"
  },
  {
    "character": "𗊬",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "lining/inside",
    "explanationCN": "1.里、答"
  },
  {
    "character": "𗌏",
    "GX": "ryur²",
    "GHC": "ꞏjur²",
    "explanationEN": "servant",
    "explanationCN": "奴婢"
  },
  {
    "character": "𗢎",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "murder",
    "explanationCN": "杀害凶杀谋杀"
  },
  {
    "character": "𘉪",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "ridicule/slander",
    "explanationCN": "讥讽"
  },
  {
    "character": "𗊋",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "ridicule",
    "explanationCN": "嘲笑；【济】【跡】【祇】【质】【即】【止】"
  },
  {
    "character": "𘚁",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "victory",
    "explanationCN": "胜"
  },
  {
    "character": "𗋥",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "peace/adore",
    "explanationCN": "睦慕"
  },
  {
    "character": "𗌤",
    "GX": "???",
    "GHC": "",
    "explanationEN": "cherish/stint",
    "explanationCN": "惜吝"
  },
  {
    "character": "𗋏",
    "GX": "thwu̱²",
    "GHC": "thwu²",
    "explanationEN": "a.kind.of.food",
    "explanationCN": "乳头"
  },
  {
    "character": "𗐏",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "teapoy",
    "explanationCN": "茶几"
  },
  {
    "character": "𘉢",
    "GX": "dweh¹",
    "GHC": "djwịj¹",
    "explanationEN": "dignified/true.meaning",
    "explanationCN": "庄严高贵威仪"
  },
  {
    "character": "𗐓",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "choke/stifle",
    "explanationCN": "噎塞闷死窒息"
  },
  {
    "character": "𗊑",
    "GX": "dzwaṃ¹",
    "GHC": "dzjwã¹",
    "explanationEN": "water.spring",
    "explanationCN": "泉"
  },
  {
    "character": "𗊌",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "sweat/perspiration",
    "explanationCN": "汗"
  },
  {
    "character": "𗊶",
    "GX": "lhu¹",
    "GHC": "lhju¹",
    "explanationEN": "a.thin.white.silk.used.in.ancient.China,.plain.color",
    "explanationCN": "縹素白"
  },
  {
    "character": "𗋿",
    "GX": "ryur¹",
    "GHC": "ꞏjur¹",
    "explanationEN": "breed",
    "explanationCN": "育养"
  },
  {
    "character": "𗐘",
    "GX": "qho̱¹",
    "GHC": "kho¹",
    "explanationEN": "arrive",
    "explanationCN": "至到"
  },
  {
    "character": "𗢐",
    "GX": "γu̱¹",
    "GHC": "ꞏu²",
    "explanationEN": "grave",
    "explanationCN": "1.坟、死"
  },
  {
    "character": "𗊛",
    "GX": "tshi̱w¹",
    "GHC": "tshew¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "坟"
  },
  {
    "character": "𗊄",
    "GX": "teṃ¹",
    "GHC": "tjɨj¹",
    "explanationEN": "a.nail",
    "explanationCN": "【曹】【曲】【凑】【秋】【锹】【草】【造】【骚】【譙】【就】【澡】"
  },
  {
    "character": "𗊰",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "a.bottle",
    "explanationCN": "1.瓶、奎"
  },
  {
    "character": "𗊵",
    "GX": "tśhu¹",
    "GHC": "tśhju¹",
    "explanationEN": "strong/brave",
    "explanationCN": "体魄勇健"
  },
  {
    "character": "𗌍",
    "GX": "rhwa̱r¹",
    "GHC": "xwar¹",
    "explanationEN": "melt/thaw/confess",
    "explanationCN": "融化招供"
  },
  {
    "character": "𗌎",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "blood.stasis",
    "explanationCN": "瘀（血阻病）"
  },
  {
    "character": "𗋔",
    "GX": "thwi¹",
    "GHC": "thjwi¹",
    "explanationEN": "sweet/honeyed",
    "explanationCN": "甜"
  },
  {
    "character": "𗌜",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "water/dew",
    "explanationCN": "水（坎）汲"
  },
  {
    "character": "𗌗",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "cross/tide.over",
    "explanationCN": "渡度"
  },
  {
    "character": "𗢚",
    "GX": "zoh¹",
    "GHC": "zjọ¹",
    "explanationEN": "cow.disease",
    "explanationCN": "牛病"
  },
  {
    "character": "𗋈",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "mouth",
    "explanationCN": "口口腔"
  },
  {
    "character": "𗋬",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "cattail",
    "explanationCN": "蒲】"
  },
  {
    "character": "𗋾",
    "GX": "źu²",
    "GHC": "źju²",
    "explanationEN": "fish",
    "explanationCN": "鱼"
  },
  {
    "character": "𗋽",
    "GX": "rzər²",
    "GHC": "zjɨ̱r²",
    "explanationEN": "water",
    "explanationCN": "水"
  },
  {
    "character": "𗌛",
    "GX": "rhwa̱r¹",
    "GHC": "xwar¹",
    "explanationEN": "mix/stir/blend",
    "explanationCN": "和拌"
  },
  {
    "character": "𗌋",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "wild.goose",
    "explanationCN": "雁"
  },
  {
    "character": "𗌒",
    "GX": "rtṣao̱r²",
    "GHC": "tśior²",
    "explanationEN": "putty/spread.on",
    "explanationCN": "泥涂"
  },
  {
    "character": "𘉲",
    "GX": "giw²",
    "GHC": "gjiw²",
    "explanationEN": "hot/smelly",
    "explanationCN": "破裂"
  },
  {
    "character": "𘊃",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "indignation",
    "explanationCN": "愤怒"
  },
  {
    "character": "𘊌",
    "GX": "dẓai̱w¹",
    "GHC": "dźiew¹",
    "explanationEN": "milk/butter",
    "explanationCN": "乳奶"
  },
  {
    "character": "𗌙",
    "GX": "lhu¹",
    "GHC": "lhju¹",
    "explanationEN": "moisture/drop",
    "explanationCN": "湿滴"
  },
  {
    "character": "𗌬",
    "GX": "rdawr²",
    "GHC": "dja̱r²",
    "explanationEN": "wash/bathe",
    "explanationCN": "洗涤"
  },
  {
    "character": "𗋝",
    "GX": "lwu̱²",
    "GHC": "lwu²",
    "explanationEN": "wash/bathe",
    "explanationCN": "洗涤;去洗澡"
  },
  {
    "character": "𗌚",
    "GX": "neṃh²",
    "GHC": "njɨ̣j²",
    "explanationEN": "an.overcast.sky",
    "explanationCN": "重定向至1539"
  },
  {
    "character": "𗋦",
    "GX": "lhu¹",
    "GHC": "lhju¹",
    "explanationEN": "increase/add",
    "explanationCN": "增加;添加"
  },
  {
    "character": "𗊂",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "boat/ship",
    "explanationCN": "1.船舟舸舶舫筏、与连用，具有“櫓”之义"
  },
  {
    "character": "𗊔",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "mix",
    "explanationCN": "拌（搅拌）】"
  },
  {
    "character": "𗢏",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "die₂",
    "explanationCN": "死₂"
  },
  {
    "character": "𗊉",
    "GX": "noh¹",
    "GHC": "njọ¹",
    "explanationEN": "lubrication/oiliness",
    "explanationCN": "润滑油润"
  },
  {
    "character": "𗋫",
    "GX": "ti̱w¹",
    "GHC": "tew¹",
    "explanationEN": "overflow/spill",
    "explanationCN": "溢出"
  },
  {
    "character": "𗋃",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "limit/end",
    "explanationCN": "穷尽"
  },
  {
    "character": "𗢒",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "horse.disease",
    "explanationCN": "马病"
  },
  {
    "character": "𗋇",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "bent",
    "explanationCN": "曲"
  },
  {
    "character": "𗋅",
    "GX": "lwu̱¹",
    "GHC": "lwu¹",
    "explanationEN": "mix/blend",
    "explanationCN": "混合"
  },
  {
    "character": "𘉱",
    "GX": "nśiw¹",
    "GHC": "śji̱w¹",
    "explanationEN": "divine.disease/diagnose",
    "explanationCN": "占病诊断"
  },
  {
    "character": "𗋛",
    "GX": "nwəh¹",
    "GHC": "njwɨ̣¹",
    "explanationEN": "moisture/sweat",
    "explanationCN": "津潮湿"
  },
  {
    "character": "𘉾",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "excrement/faeces/dung",
    "explanationCN": "屎粪"
  },
  {
    "character": "𗌪",
    "GX": "lwə¹",
    "GHC": "ljwɨ¹",
    "explanationEN": "tear",
    "explanationCN": "泪】"
  },
  {
    "character": "𗐔",
    "GX": "rγa̱r²",
    "GHC": "ɣar²",
    "explanationEN": "land/soil",
    "explanationCN": "土地"
  },
  {
    "character": "𗊒",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "dregs",
    "explanationCN": "糟"
  },
  {
    "character": "𗊣",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "gargle/rinse",
    "explanationCN": "漱洗"
  },
  {
    "character": "𗘱",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "submit",
    "explanationCN": "归伏"
  },
  {
    "character": "𗾆",
    "GX": "dźiw¹",
    "GHC": "dźjiw¹",
    "explanationEN": "waist",
    "explanationCN": "1.腰、中"
  },
  {
    "character": "𗐈",
    "GX": "be¹",
    "GHC": "bjij¹",
    "explanationEN": "dung.beetles",
    "explanationCN": "蜣螂"
  },
  {
    "character": "𗐆",
    "GX": "tśoh¹",
    "GHC": "tśjọ¹",
    "explanationEN": "ugly",
    "explanationCN": "丑陋"
  },
  {
    "character": "𗐇",
    "GX": "lho̱ṃh²",
    "GHC": "lhọ²",
    "explanationEN": "ugly",
    "explanationCN": "陋】"
  },
  {
    "character": "𗫱",
    "GX": "khaṃ¹",
    "GHC": "khjã¹",
    "explanationEN": "dangerous",
    "explanationCN": "危险"
  },
  {
    "character": "𗫶",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "ᴛᴇꜱᴛᴍ/ᴅᴜʀ",
    "explanationCN": "ᴛᴇꜱᴛᴍ/ᴅᴜʀ"
  },
  {
    "character": "𗫷",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "a.place.name/a.surname",
    "explanationCN": "【邓】【塔】地名"
  },
  {
    "character": "𗫲",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "a.surname",
    "explanationCN": "【契】【卿】【茄】【警】【罄】"
  },
  {
    "character": "𗬀",
    "GX": "lwu̱²",
    "GHC": "lwu²",
    "explanationEN": "hide/conceal",
    "explanationCN": "隠匿伏"
  },
  {
    "character": "𗫿",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "used/worn/old",
    "explanationCN": "旧"
  },
  {
    "character": "𗬄",
    "GX": "tswa̱¹",
    "GHC": "tswa¹",
    "explanationEN": "a.surname",
    "explanationCN": "【札】（）"
  },
  {
    "character": "𗬁",
    "GX": "deṃ²",
    "GHC": "djɨj²",
    "explanationEN": "stop/abolish",
    "explanationCN": "停】"
  },
  {
    "character": "𗫻",
    "GX": "ndźe¹",
    "GHC": "dźji̱j¹",
    "explanationEN": "live/stay/exist",
    "explanationCN": "1.住在居有留、二字重迭，具有指代词和名词性质"
  },
  {
    "character": "𗬃",
    "GX": "si̱¹",
    "GHC": "se¹",
    "explanationEN": "intention/intent/word/term",
    "explanationCN": "意图词"
  },
  {
    "character": "𗫸",
    "GX": "yih²",
    "GHC": "ꞏjị²",
    "explanationEN": "again",
    "explanationCN": "又"
  },
  {
    "character": "𗬇",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "recreation/lead.a.chorus",
    "explanationCN": "领唱"
  },
  {
    "character": "𗬈",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "entertaimnent/recreation/lead.a.chorus",
    "explanationCN": "娱乐领唱动词"
  },
  {
    "character": "𗏗",
    "GX": "dź??",
    "GHC": "dź-",
    "explanationEN": "empty/unoccupied",
    "explanationCN": "虚"
  },
  {
    "character": "𗨭",
    "GX": "źeh¹",
    "GHC": "źjịj¹",
    "explanationEN": "disease/illness",
    "explanationCN": "病"
  },
  {
    "character": "𗨥",
    "GX": "twə¹",
    "GHC": "tsjwɨ¹",
    "explanationEN": "an.auxiliary.word",
    "explanationCN": "然则"
  },
  {
    "character": "𗩲",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "host/master",
    "explanationCN": "主人"
  },
  {
    "character": "𗽩",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "dry",
    "explanationCN": "乾涸"
  },
  {
    "character": "𗾏",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "crane",
    "explanationCN": "鹤"
  },
  {
    "character": "𗾷",
    "GX": "dźih?",
    "GHC": "dźjị",
    "explanationEN": "owlet",
    "explanationCN": "鴟鸕"
  },
  {
    "character": "𗿣",
    "GX": "rmer²",
    "GHC": "mjịjr²",
    "explanationEN": "god/magic.power",
    "explanationCN": "通灵应神"
  },
  {
    "character": "𗏞",
    "GX": "u¹",
    "GHC": "ꞏju¹",
    "explanationEN": "ghost/spirit",
    "explanationCN": "鬼魔"
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
    "explanationEN": "a.kind.of.shell.which.looks.like.a.jade/dress.and.personal.adornment/dress",
    "explanationCN": "1.珂贝服饰（穿戴）、精神"
  },
  {
    "character": "𗣡",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "a.surname",
    "explanationCN": "【狄】"
  },
  {
    "character": "𗨡",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "trough/cup",
    "explanationCN": "槽盏"
  },
  {
    "character": "𗨶",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "cry/weep",
    "explanationCN": "哭泣啼哭"
  },
  {
    "character": "𗥑",
    "GX": "hu̱¹",
    "GHC": "xu¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【富】、【府】【符】【夫】【浮】【甫】【駙】【扶】【虎】【呼】、【服】（珠 243）【缚】（珠 354）【福】（珠 095）【腹】（珠 191）【父】（珠 313）【斧】（珠 285）【伏】（珠 321）【袱】（珠 221）、【符】【敷】【傅】【鳧】【妇】【辅】【凤】【福】（音 202）"
  },
  {
    "character": "𗫔",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "many/numerous",
    "explanationCN": "1.众多群、和尚、【伊】【易】【裔】【医】【云】、【翼】【夷】【意】【羿】【异】（音 201）"
  },
  {
    "character": "𗣹",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "a.surname",
    "explanationCN": "【跡】"
  },
  {
    "character": "𗤹",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "a.surname",
    "explanationCN": "【药】"
  },
  {
    "character": "𗽌",
    "GX": "yae̱ṃh²",
    "GHC": "ꞏjə̣j²",
    "explanationEN": "gully/ditch",
    "explanationCN": "沟壑"
  },
  {
    "character": "𗫛",
    "GX": "lih²",
    "GHC": "ljị²",
    "explanationEN": "sing",
    "explanationCN": "歌唱"
  },
  {
    "character": "𗧸",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "many/much/numerous",
    "explanationCN": "多伙繁众"
  },
  {
    "character": "𘔽",
    "GX": "nuo¹",
    "GHC": "nio̱w¹",
    "explanationEN": "fair/just/impartial/equitable",
    "explanationCN": "公平（公道）"
  },
  {
    "character": "𗿷",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "exist.ᴀ(animate)/have.ᴀ",
    "explanationCN": "存在.ᴀ（有生命的）;拥有.ᴀ"
  },
  {
    "character": "𗿘",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鹊】鸟名"
  },
  {
    "character": "𗤭",
    "GX": "ywiṃ¹",
    "GHC": "ꞏjwĩ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【尹】【允】【员】【运】【云】"
  },
  {
    "character": "𗨌",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "guard/defend",
    "explanationCN": "守护守卫"
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
    "explanationEN": "prick",
    "explanationCN": "1.扎刺、针灸"
  },
  {
    "character": "𗩒",
    "GX": "rqwa̱r¹",
    "GHC": "kwar¹",
    "explanationEN": "suppress",
    "explanationCN": "1.压制、嗔恚"
  },
  {
    "character": "𗫈",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "now/today",
    "explanationCN": "现在;今天"
  },
  {
    "character": "𗪴",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "ram",
    "explanationCN": "雨"
  },
  {
    "character": "𗩩",
    "GX": "vaa̱ṃ²",
    "GHC": "ꞏwiã²",
    "explanationEN": "a.surname",
    "explanationCN": "【万】【晚】【曼】【宪】"
  },
  {
    "character": "𗽛",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "patch",
    "explanationCN": "补衲补贴补丁"
  },
  {
    "character": "𗽢",
    "GX": "qi̱w¹",
    "GHC": "kew¹",
    "explanationEN": "farmland",
    "explanationCN": "畴"
  },
  {
    "character": "𗽵",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "jar/bottle",
    "explanationCN": "泡瓶罐"
  },
  {
    "character": "𗤀",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "life/generation",
    "explanationCN": "1.世】、代、朝、氏、时"
  },
  {
    "character": "𗫭",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "sing/chant",
    "explanationCN": "歌颂咏唱"
  },
  {
    "character": "𗪰",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "wife/concubine",
    "explanationCN": "妻妾"
  },
  {
    "character": "𗣪",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "urine",
    "explanationCN": "尿名词"
  },
  {
    "character": "𗧒",
    "GX": "lhə¹",
    "GHC": "lhjɨ¹",
    "explanationEN": "birthplace",
    "explanationCN": "生处"
  },
  {
    "character": "𗨖",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "hide/lurk",
    "explanationCN": "伏匿"
  },
  {
    "character": "𗪥",
    "GX": "tśih¹",
    "GHC": "tśjị¹",
    "explanationEN": "humble",
    "explanationCN": "贱"
  },
  {
    "character": "𗥯",
    "GX": "gwih¹",
    "GHC": "gjwị¹",
    "explanationEN": "dress/wear",
    "explanationCN": "穿著"
  },
  {
    "character": "𗨠",
    "GX": "lhə¹",
    "GHC": "lhji¹",
    "explanationEN": "frivolous",
    "explanationCN": "轻浮"
  },
  {
    "character": "𗩖",
    "GX": "dzu²",
    "GHC": "dzju²",
    "explanationEN": "weapon/arms",
    "explanationCN": "兵器武器"
  },
  {
    "character": "𗪱",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "round.bone",
    "explanationCN": "（按：此字译文不确，仅供参考）英文释义round bone详细解释请参考《简明夏汉字典》第380页。《同义》释义股骨头mojikyo字体弯景永时字体喇"
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
    "explanationEN": "oath/vow",
    "explanationCN": "誓"
  },
  {
    "character": "𗼀",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "beast/animal",
    "explanationCN": "兽"
  },
  {
    "character": "𗻎",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "evil.spirit/demon",
    "explanationCN": "妖魔"
  },
  {
    "character": "𗨧",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "foolish/stupid/clumsy",
    "explanationCN": "愚笨"
  },
  {
    "character": "𗏰",
    "GX": "teh²",
    "GHC": "tjịj²",
    "explanationEN": "embrace/hold.in.arms",
    "explanationCN": "1.怀抱、抚养"
  },
  {
    "character": "𗐁",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "embrace",
    "explanationCN": "拥抱"
  },
  {
    "character": "𗥱",
    "GX": "dze̱¹",
    "GHC": "dzej¹",
    "explanationEN": "selfishness",
    "explanationCN": "私"
  },
  {
    "character": "𗦒",
    "GX": "rŋwə̱r²",
    "GHC": "ŋwər²",
    "explanationEN": "face/look",
    "explanationCN": "脸面容"
  },
  {
    "character": "𗨙",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "bear.ᴀ.(a.burden)/endure.ᴀ",
    "explanationCN": "负担.ᴀ; 忍耐.ᴀ"
  },
  {
    "character": "𗾿",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "a.kind.of.shell.which.looks.like.a.jade/dress.and.personal.adornment/dress",
    "explanationCN": "珂贝服饰（穿戴）"
  },
  {
    "character": "𗻠",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【荑】草名"
  },
  {
    "character": "𗻶",
    "GX": "ho̱ṃh²",
    "GHC": "xọ²",
    "explanationEN": "calamity/disaster/suffering",
    "explanationCN": "灾难"
  },
  {
    "character": "𗫟",
    "GX": "pho̱ṃ¹",
    "GHC": "phow¹",
    "explanationEN": "front.of.a.garment",
    "explanationCN": "怀襟"
  },
  {
    "character": "𗺸",
    "GX": "zwə¹",
    "GHC": "zjwɨ¹",
    "explanationEN": "seed",
    "explanationCN": "籽"
  },
  {
    "character": "𗻨",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "human.being/human.being",
    "explanationCN": "民人"
  },
  {
    "character": "𗻩",
    "GX": "zi̱ṃ²",
    "GHC": "zẽ²",
    "explanationEN": "jaw",
    "explanationCN": "頜（頦下巴）"
  },
  {
    "character": "𗢹",
    "GX": "yə¹",
    "GHC": "ꞏjɨ¹",
    "explanationEN": "salute",
    "explanationCN": "揖】"
  },
  {
    "character": "𗩫",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "woman/the.female",
    "explanationCN": "1.女、【迷】"
  },
  {
    "character": "𗽟",
    "GX": "γwe̱²",
    "GHC": "ɣwej²",
    "explanationEN": "a.surname",
    "explanationCN": "【回】"
  },
  {
    "character": "𗿜",
    "GX": "tśhi¹",
    "GHC": "tśhji¹",
    "explanationEN": "shame/disgrace",
    "explanationCN": "耻】"
  },
  {
    "character": "𗿭",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "鶥（鶝）"
  },
  {
    "character": "𗫣",
    "GX": "mpa̱¹",
    "GHC": "pa̱¹",
    "explanationEN": "change",
    "explanationCN": "变幻"
  },
  {
    "character": "𗤯",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "cry/weep/sob",
    "explanationCN": "哭泣"
  },
  {
    "character": "𗣌",
    "GX": "mi²",
    "GHC": "mji²",
    "explanationEN": "understand/comprehend",
    "explanationCN": "了然了解解悟"
  },
  {
    "character": "𗨳",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "return/submit",
    "explanationCN": "1.归、幸、诚、繫"
  },
  {
    "character": "𗫇",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "nit",
    "explanationCN": "虮"
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
    "explanationEN": "word/speech",
    "explanationCN": "言词"
  },
  {
    "character": "𗢩",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "a.surname",
    "explanationCN": "【匝】【砸】【杂】"
  },
  {
    "character": "𗢼",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "honest/upright",
    "explanationCN": "正直"
  },
  {
    "character": "𗢽",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "a.place.name/a.surname",
    "explanationCN": "【邓】"
  },
  {
    "character": "𗤘",
    "GX": "deṃ²",
    "GHC": "djɨj²",
    "explanationEN": "stop/abolish",
    "explanationCN": "停休"
  },
  {
    "character": "𗧘",
    "GX": "vwo̱²",
    "GHC": "wo²",
    "explanationEN": "justice/righteousness",
    "explanationCN": "1.义、议、理"
  },
  {
    "character": "𗼰",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a.place.name",
    "explanationCN": "【里】地名"
  },
  {
    "character": "𗽉",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "heavy",
    "explanationCN": "沉重"
  },
  {
    "character": "𗾉",
    "GX": "si̱w²",
    "GHC": "sew²",
    "explanationEN": "close/intimate",
    "explanationCN": "亲密悄语"
  },
  {
    "character": "𘔰",
    "GX": "γo̱ṃh²",
    "GHC": "ꞏọ²",
    "explanationEN": "tear/teardrop",
    "explanationCN": "泪"
  },
  {
    "character": "𗐚",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "ferment/make.(wine)",
    "explanationCN": "闷酿"
  },
  {
    "character": "𗬘",
    "GX": "lo²",
    "GHC": "ljo²",
    "explanationEN": "spread.ʙ./disseminate.ʙ",
    "explanationCN": "散布散撒"
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
    "GHC": "lhjɨ¹",
    "explanationEN": "a.kind.of.shell.which.looks.like.a.jade/dress.and.personal.adornment/dress",
    "explanationCN": "珂贝服饰精神"
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
    "GHC": "tshji¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【秦】、【亲】【尽】【曾】【津】"
  },
  {
    "character": "𗣷",
    "GX": "lhə̱?",
    "GHC": "lhə",
    "explanationEN": "full/packed/satisfied",
    "explanationCN": "1.满足、充备"
  },
  {
    "character": "𗣃",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "word/sentence",
    "explanationCN": "词句"
  },
  {
    "character": "𗧙",
    "GX": "llə²",
    "GHC": "ljɨ²",
    "explanationEN": "easy",
    "explanationCN": "1.易、【列】（音 204）"
  },
  {
    "character": "𗨫",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "manage/administer",
    "explanationCN": "1.管理勾管、了毕"
  },
  {
    "character": "𗧔",
    "GX": "llu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【卢】【鲁】【陆】（）"
  },
  {
    "character": "𗩶",
    "GX": "tśhweṃ¹",
    "GHC": "tśhjwɨj¹",
    "explanationEN": "frivolous/sly",
    "explanationCN": "轻薄"
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
    "explanationEN": "complete/dispel",
    "explanationCN": "全俱、祛除【地】【狄】"
  },
  {
    "character": "𗧁",
    "GX": "rer²",
    "GHC": "rjir²",
    "explanationEN": "scholar",
    "explanationCN": "儒士才"
  },
  {
    "character": "𗽨",
    "GX": "ntaa̱²",
    "GHC": "tia̱²",
    "explanationEN": "dry",
    "explanationCN": "涸枯"
  },
  {
    "character": "𗾍",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "rise/leap",
    "explanationCN": "起跃"
  },
  {
    "character": "𘊠",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "boy/lad",
    "explanationCN": "童"
  },
  {
    "character": "𗼿",
    "GX": "nae̱h²",
    "GHC": "nẹj²",
    "explanationEN": "rat",
    "explanationCN": "鼠"
  },
  {
    "character": "𗤴",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "senior/superior",
    "explanationCN": "尊贵"
  },
  {
    "character": "𗣯",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "smoothness/level",
    "explanationCN": "平坦"
  },
  {
    "character": "𗫎",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "maidservant",
    "explanationCN": "奴婢"
  },
  {
    "character": "𗤑",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "attack.by.words",
    "explanationCN": "抨】"
  },
  {
    "character": "𗦜",
    "GX": "so²",
    "GHC": "sjo²",
    "explanationEN": "say",
    "explanationCN": "云"
  },
  {
    "character": "𗥇",
    "GX": "təh¹",
    "GHC": "tjɨ̣¹",
    "explanationEN": "boy/lad/child",
    "explanationCN": "儿童"
  },
  {
    "character": "𗦆",
    "GX": "tsiṃ¹",
    "GHC": "tsjĩ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【晋】【津】【增】【甑】"
  },
  {
    "character": "𗥙",
    "GX": "tsha̱ṃ¹",
    "GHC": "tshã¹",
    "explanationEN": "steed/fine.horse",
    "explanationCN": "骏驥"
  },
  {
    "character": "𗥂",
    "GX": "ŋqhe̱¹",
    "GHC": "khe̱j¹",
    "explanationEN": "house/room",
    "explanationCN": "屋捨"
  },
  {
    "character": "𗥩",
    "GX": "lwu²",
    "GHC": "ljwu²",
    "explanationEN": "meet/assemble",
    "explanationCN": "1.会聚盟、期"
  },
  {
    "character": "𗣎",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "water.spring",
    "explanationCN": "泉"
  },
  {
    "character": "𗨿",
    "GX": "rtwar¹",
    "GHC": "tjwar¹",
    "explanationEN": "cease/stop",
    "explanationCN": "息停止"
  },
  {
    "character": "𗨩",
    "GX": "pa̱¹",
    "GHC": "pa¹",
    "explanationEN": "a.surname",
    "explanationCN": "【巴】【波】"
  },
  {
    "character": "𗪣",
    "GX": "pho̱ṃ²",
    "GHC": "phow²",
    "explanationEN": "conceited/self-important",
    "explanationCN": "矜骄"
  },
  {
    "character": "𗫀",
    "GX": "rnor¹",
    "GHC": "njo̱r¹",
    "explanationEN": "abundant/rich",
    "explanationCN": "富裕"
  },
  {
    "character": "𗥘",
    "GX": "lai̱h¹",
    "GHC": "liẹ¹",
    "explanationEN": "smear",
    "explanationCN": "涂"
  },
  {
    "character": "𗽋",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "a.traditional.unit.of.area",
    "explanationCN": "亩"
  },
  {
    "character": "𗾴",
    "GX": "bu̱²",
    "GHC": "bu²",
    "explanationEN": "assembly.hall/hall",
    "explanationCN": "会"
  },
  {
    "character": "𗏊",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "murder",
    "explanationCN": "杀死"
  },
  {
    "character": "𗬚",
    "GX": "nnə¹",
    "GHC": "njɨ̱¹",
    "explanationEN": "bask/shine.on",
    "explanationCN": "晒"
  },
  {
    "character": "𗬞",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "bask",
    "explanationCN": "曝晒"
  },
  {
    "character": "𗤓",
    "GX": "ntho¹",
    "GHC": "thjo̱¹",
    "explanationEN": "beautiful/wonderful",
    "explanationCN": "妙懿美"
  },
  {
    "character": "𗥺",
    "GX": "ŋŋwə̱¹",
    "GHC": "ŋwə̱¹",
    "explanationEN": "chant.incantation",
    "explanationCN": "咒"
  },
  {
    "character": "𗨞",
    "GX": "lheh²",
    "GHC": "lhjịj²",
    "explanationEN": "a.surname",
    "explanationCN": "【令】【领】【呤】"
  },
  {
    "character": "𗫥",
    "GX": "dźəh¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "ten",
    "explanationCN": "十什"
  },
  {
    "character": "𗪓",
    "GX": "tsha²",
    "GHC": "tsha²",
    "explanationEN": "skillful",
    "explanationCN": "巧"
  },
  {
    "character": "𗏚",
    "GX": "bəh¹",
    "GHC": "bjij¹",
    "explanationEN": "dung.beetles",
    "explanationCN": "蜣螂"
  },
  {
    "character": "𗥗",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "man.of.wealth/moneybags",
    "explanationCN": "1.富翁、长者"
  },
  {
    "character": "𗨮",
    "GX": "kah²",
    "GHC": "kjạ²",
    "explanationEN": "song",
    "explanationCN": "1.歌曲】、曲"
  },
  {
    "character": "𗩉",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "palace",
    "explanationCN": "宫殿"
  },
  {
    "character": "𗢱",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "teach/instruct",
    "explanationCN": "1.教指示、又音【座】"
  },
  {
    "character": "𗣮",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "a.surname",
    "explanationCN": "【盈】【耶】"
  },
  {
    "character": "𗧖",
    "GX": "tṣao̱ṃ²",
    "GHC": "tśiow²",
    "explanationEN": "many/muchq",
    "explanationCN": "多"
  },
  {
    "character": "𗧼",
    "GX": "dzu²",
    "GHC": "dzju²",
    "explanationEN": "complete/whole/all",
    "explanationCN": "全俱"
  },
  {
    "character": "𗤚",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "dirty/filthy",
    "explanationCN": "骯脏"
  },
  {
    "character": "𗾇",
    "GX": "bi̱¹",
    "GHC": "be¹",
    "explanationEN": "demented/mad",
    "explanationCN": "癲狂"
  },
  {
    "character": "𗾎",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "鴣鴣（斑鳩）"
  },
  {
    "character": "𗺛",
    "GX": "???",
    "GHC": "",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【？】草名"
  },
  {
    "character": "𗻟",
    "GX": "hi̱ṃ²",
    "GHC": "xẽ²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【贺】草名"
  },
  {
    "character": "𗺟",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【蒿】草名"
  },
  {
    "character": "𗻪",
    "GX": "nni̱w²",
    "GHC": "ne̱w²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【奶】草名"
  },
  {
    "character": "𗤱",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "scheme/stratagem",
    "explanationCN": "1.计谋、枢"
  },
  {
    "character": "𗨝",
    "GX": "śiṃ¹",
    "GHC": "śjĩ¹",
    "explanationEN": "body",
    "explanationCN": "1.身】、【审】（珠 283）【肾】（珠 086）【深】（珠 124）【辰】（珠 101）【申】（珠 101）【神】（珠 064）【绳】（珠 246）、【臣】【沉】【晨】"
  },
  {
    "character": "𗤲",
    "GX": "tsho̱ṃ²",
    "GHC": "tshow²",
    "explanationEN": "ridicule/deride",
    "explanationCN": "宣嘲"
  },
  {
    "character": "𗿏",
    "GX": "tshwu̱²",
    "GHC": "tshwu²",
    "explanationEN": "fat/corpulent",
    "explanationCN": "肥胖"
  },
  {
    "character": "𗫤",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "many/much",
    "explanationCN": "多"
  },
  {
    "character": "𗐃",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "buy.or.sell.on.credit",
    "explanationCN": "1.赊】、【捨】【闍】"
  },
  {
    "character": "𗿙",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "imperial.edict",
    "explanationCN": "詔"
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
    "explanationEN": "puncture.vine",
    "explanationCN": "藜"
  },
  {
    "character": "𗥈",
    "GX": "thə̱¹",
    "GHC": "thə¹",
    "explanationEN": "cooperation",
    "explanationCN": "协力合力"
  },
  {
    "character": "𗦂",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "calm",
    "explanationCN": "心静心安"
  },
  {
    "character": "𗨲",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "return/submit",
    "explanationCN": "归"
  },
  {
    "character": "𗢲",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "happy/cheerful",
    "explanationCN": "乐"
  },
  {
    "character": "𗥴",
    "GX": "qho̱ṃ¹",
    "GHC": "khow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【穹】【空】【孔】"
  },
  {
    "character": "𗨪",
    "GX": "kə²",
    "GHC": "kjɨ²",
    "explanationEN": "tangerine",
    "explanationCN": "橘"
  },
  {
    "character": "𗽀",
    "GX": "lhə²",
    "GHC": "lhjɨ²",
    "explanationEN": "dust",
    "explanationCN": "尘"
  },
  {
    "character": "𗧍",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "body",
    "explanationCN": "躬】"
  },
  {
    "character": "𗦳",
    "GX": "dzu²",
    "GHC": "dzju²",
    "explanationEN": "host/master",
    "explanationCN": "1.主、监、霸、帅、领、在、君、司"
  },
  {
    "character": "𗨯",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "skill/artistry",
    "explanationCN": "技"
  },
  {
    "character": "𗧗",
    "GX": "tśhweṃ¹",
    "GHC": "tśhjwɨj¹",
    "explanationEN": "prohibit/forbid/ban",
    "explanationCN": "1.禁治、【修】【齐】【慎】【谨】【製】【驭】"
  },
  {
    "character": "𗼁",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "beast/animal",
    "explanationCN": "兽"
  },
  {
    "character": "𗧚",
    "GX": "deṃ¹",
    "GHC": "djɨj¹",
    "explanationEN": "hide/shelter",
    "explanationCN": "匿窝藏"
  },
  {
    "character": "𗐂",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "embrace",
    "explanationCN": "拥抱"
  },
  {
    "character": "𗴬",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "urn/earthen.jar/bottle",
    "explanationCN": "瓮瓶"
  },
  {
    "character": "𗏘",
    "GX": "rγa̱r²",
    "GHC": "ɣar²",
    "explanationEN": "chest/thorax",
    "explanationCN": "胸"
  },
  {
    "character": "𗢰",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【那】【纳】、【南】"
  },
  {
    "character": "𗣄",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "what/which/why/how",
    "explanationCN": "何"
  },
  {
    "character": "𗣰",
    "GX": "kwi¹",
    "GHC": "kjwi¹",
    "explanationEN": "used/worn/old",
    "explanationCN": "旧"
  },
  {
    "character": "𗣆",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【潜】【千】【贱】【浅】【钱】【践】及"
  },
  {
    "character": "𗣣",
    "GX": "tshi¹",
    "GHC": "tshji¹",
    "explanationEN": "food.and.drink/cooked.rice.or.other.cereals",
    "explanationCN": "飧食饌"
  },
  {
    "character": "𗣶",
    "GX": "gə¹",
    "GHC": "gjɨ¹",
    "explanationEN": "children",
    "explanationCN": "儿音"
  },
  {
    "character": "𗥿",
    "GX": "pah²",
    "GHC": "pjạ²",
    "explanationEN": "wizard/sorcerer",
    "explanationCN": "巫师"
  },
  {
    "character": "𗥚",
    "GX": "zih²",
    "GHC": "zjwị²",
    "explanationEN": "give.birth",
    "explanationCN": "生產"
  },
  {
    "character": "𗥷",
    "GX": "nla̱¹",
    "GHC": "la̱¹",
    "explanationEN": "color/look",
    "explanationCN": "色容顏"
  },
  {
    "character": "𗧕",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "tax/duty",
    "explanationCN": "赋税"
  },
  {
    "character": "𗥰",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【罗】【拉】【喇】【辣】及"
  },
  {
    "character": "𗧌",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "beautiful/pretty",
    "explanationCN": "姿色"
  },
  {
    "character": "𗧧",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "spoil.(a.child)/dote.(a.child)",
    "explanationCN": "宠坏（一个孩子）;to dote （一个孩子）"
  },
  {
    "character": "𗧧",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "spoil.(a.child)/dote.(a.child)",
    "explanationCN": "宠坏（一个孩子）;to dote （一个孩子）"
  },
  {
    "character": "𗨬",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "narrow",
    "explanationCN": "狭窄"
  },
  {
    "character": "𗩷",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "gadfly",
    "explanationCN": "虻蚋"
  },
  {
    "character": "𗩹",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "now/this.moment",
    "explanationCN": "此刻"
  },
  {
    "character": "𗽗",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "cover/hide.from.view",
    "explanationCN": "遮蔽遮掩"
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
    "GHC": "dã¹",
    "explanationEN": "kick",
    "explanationCN": "蹴踢"
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
    "explanationEN": "able.and.virtuous.people",
    "explanationCN": "贤"
  },
  {
    "character": "𗾕",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "swallow",
    "explanationCN": "燕子"
  },
  {
    "character": "𗾧",
    "GX": "naw²",
    "GHC": "nja̱²",
    "explanationEN": "a.surname",
    "explanationCN": "【药】【纳】"
  },
  {
    "character": "𗿌",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鷓】鸟名"
  },
  {
    "character": "𗿯",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "trample/tread",
    "explanationCN": "践"
  },
  {
    "character": "𘔳",
    "GX": "lwi̱w¹",
    "GHC": "lwew¹",
    "explanationEN": "gas/smoke/flame",
    "explanationCN": "1.气焰、蒸"
  },
  {
    "character": "𘔴",
    "GX": "du²",
    "GHC": "dju²",
    "explanationEN": "give.birth",
    "explanationCN": "生產"
  },
  {
    "character": "𘟦",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "mandarin.duck",
    "explanationCN": "鸳鸯"
  },
  {
    "character": "𗩀",
    "GX": "rkwər¹",
    "GHC": "kjwɨr¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鶻】鸟名"
  },
  {
    "character": "𗏠",
    "GX": "rγa̱r²",
    "GHC": "ɣar²",
    "explanationEN": "amazement/astonishment",
    "explanationCN": "惊讶惊愕惊骇"
  },
  {
    "character": "𗩵",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "a.place.name",
    "explanationCN": "【没】地名"
  },
  {
    "character": "𗤒",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "year/age",
    "explanationCN": "年岁"
  },
  {
    "character": "𗤔",
    "GX": "mu²",
    "GHC": "mju²",
    "explanationEN": "dance/play",
    "explanationCN": "舞蹈娱乐游戏"
  },
  {
    "character": "𗦋",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "carriage",
    "explanationCN": "舆帐"
  },
  {
    "character": "𗧮",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "land",
    "explanationCN": "地】"
  },
  {
    "character": "𗽑",
    "GX": "nde²",
    "GHC": "dji̱j²",
    "explanationEN": "grave/cemetery",
    "explanationCN": "坟墓"
  },
  {
    "character": "𗾟",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "vast/wide/extensive",
    "explanationCN": "广昊弘"
  },
  {
    "character": "𗿮",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "people.of.father’s.generation",
    "explanationCN": "父辈长辈"
  },
  {
    "character": "𗿞",
    "GX": "dih¹",
    "GHC": "djị¹",
    "explanationEN": "mate/copulate",
    "explanationCN": "交配"
  },
  {
    "character": "𗏱",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "combine/gather",
    "explanationCN": "结合聚集"
  },
  {
    "character": "𗏮",
    "GX": "tsheh²",
    "GHC": "tshjịj²",
    "explanationEN": "landscape",
    "explanationCN": "江山"
  },
  {
    "character": "𗩨",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "color",
    "explanationCN": "色彩"
  },
  {
    "character": "𗦫",
    "GX": "yiw¹",
    "GHC": "ꞏjiw¹",
    "explanationEN": "cause",
    "explanationCN": "原因因缘由"
  },
  {
    "character": "𗧀",
    "GX": "li̱w¹",
    "GHC": "lew¹",
    "explanationEN": "only/sole",
    "explanationCN": "惟"
  },
  {
    "character": "𗩟",
    "GX": "tśeh¹",
    "GHC": "tśjịj¹",
    "explanationEN": "year/age",
    "explanationCN": "年岁"
  },
  {
    "character": "𗩠",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "luxuriant/majestic",
    "explanationCN": "茂盛壮"
  },
  {
    "character": "𗫦",
    "GX": "γai̱w¹",
    "GHC": "ɣiew¹",
    "explanationEN": "study/learn",
    "explanationCN": "学习"
  },
  {
    "character": "𗽸",
    "GX": "nlə¹",
    "GHC": "lhjɨ̱¹",
    "explanationEN": "epidermis/cuticle",
    "explanationCN": "表皮"
  },
  {
    "character": "𗿊",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "body",
    "explanationCN": "躯体"
  },
  {
    "character": "𗿖",
    "GX": "ŋŋaa̱²",
    "GHC": "ŋia̱²",
    "explanationEN": "goose",
    "explanationCN": "1.鹅、【顏】【宴】【崖】【英】【晏】【琊】、【牙】（珠 183）【芽】（珠 152）【岩】（珠 122）【鸭】（珠 166）【雁】（珠 166）【眼】（珠 142）、【雅】【晏】【琊】【邪】（音 197）"
  },
  {
    "character": "𗿩",
    "GX": "tśeh²",
    "GHC": "tśjịj²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【稚】鸟名"
  },
  {
    "character": "𗏝",
    "GX": "zoh¹",
    "GHC": "zjọ¹",
    "explanationEN": "cow.disease",
    "explanationCN": "牛病"
  },
  {
    "character": "𗪤",
    "GX": "tśih¹",
    "GHC": "tśjị¹",
    "explanationEN": "humble",
    "explanationCN": "贱"
  },
  {
    "character": "𗪳",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "teach/instruct",
    "explanationCN": "教"
  },
  {
    "character": "𗽣",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "measure",
    "explanationCN": "量】"
  },
  {
    "character": "𗩸",
    "GX": "rkhar¹",
    "GHC": "khjar¹",
    "explanationEN": "honest/upright",
    "explanationCN": "耿直"
  },
  {
    "character": "𗦌",
    "GX": "swa̱ṃ¹",
    "GHC": "swã¹",
    "explanationEN": "mute",
    "explanationCN": "1.瘂冥、【隋】"
  },
  {
    "character": "𗪇",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "sink/submerge",
    "explanationCN": "1.没、减"
  },
  {
    "character": "𗩳",
    "GX": "dẓwai̱¹",
    "GHC": "dźiwe¹",
    "explanationEN": "drag/pull",
    "explanationCN": "拉扯"
  },
  {
    "character": "𗦴",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "coal/mine/holy.mountain",
    "explanationCN": "煤（矿山神山）"
  },
  {
    "character": "𗿦",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "female/woman",
    "explanationCN": "1.雌母妇、【麻】"
  },
  {
    "character": "𗺗",
    "GX": "ndẓaa̱²",
    "GHC": "dźia̱²",
    "explanationEN": "green.grass",
    "explanationCN": "青草"
  },
  {
    "character": "𗺝",
    "GX": "to̱ṃ¹",
    "GHC": "tow¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【豆】草"
  },
  {
    "character": "𗻀",
    "GX": "bai̱²",
    "GHC": "bie²",
    "explanationEN": "herbal.medicine",
    "explanationCN": "卑"
  },
  {
    "character": "𗺨",
    "GX": "rni̱r²",
    "GHC": "ner²",
    "explanationEN": "fade/wither/shrivel.up",
    "explanationCN": "1.枯萎】、感"
  },
  {
    "character": "𗺻",
    "GX": "haa̱¹",
    "GHC": "xia¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【夏】草名"
  },
  {
    "character": "𗏙",
    "GX": "rdzwər¹",
    "GHC": "dzjwɨr¹",
    "explanationEN": "limit/end",
    "explanationCN": "绝尽"
  },
  {
    "character": "𗥵",
    "GX": "qhə̱²",
    "GHC": "khə²",
    "explanationEN": "a.surname",
    "explanationCN": "【骨】【客】"
  },
  {
    "character": "𗫐",
    "GX": "su̱¹",
    "GHC": "su¹",
    "explanationEN": "a.surname",
    "explanationCN": "【苏】【肃】"
  },
  {
    "character": "𗩏",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "target",
    "explanationCN": "盔垛靶"
  },
  {
    "character": "𗻡",
    "GX": "lho̱ṃh¹",
    "GHC": "lhọ¹",
    "explanationEN": "blanket",
    "explanationCN": "毯"
  },
  {
    "character": "𗪷",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鵜】鸟名"
  },
  {
    "character": "𗻅",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【兰】草名"
  },
  {
    "character": "𗻐",
    "GX": "mbu̱²",
    "GHC": "bu̱²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【孛】草名"
  },
  {
    "character": "𗻲",
    "GX": "tswə̱h¹",
    "GHC": "tswə̣¹",
    "explanationEN": "excrement/dung",
    "explanationCN": "畜粪"
  },
  {
    "character": "𗏣",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "ᴅɪʀᴇ/direction",
    "explanationCN": "ᴅɪʀᴇ；方向"
  },
  {
    "character": "𗏔",
    "GX": "tśoh¹",
    "GHC": "tśjọ¹",
    "explanationEN": "ugly",
    "explanationCN": "丑"
  },
  {
    "character": "𗪲",
    "GX": "γiw¹",
    "GHC": "ɣjiw¹",
    "explanationEN": "summon.(for.surrender)/call.for",
    "explanationCN": "招请摄"
  },
  {
    "character": "𗏷",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "coffin/casket",
    "explanationCN": "棺匣函帙"
  },
  {
    "character": "𗦛",
    "GX": "rdzə̱r²",
    "GHC": "dzər²",
    "explanationEN": "extrude",
    "explanationCN": "挤压"
  },
  {
    "character": "𗪺",
    "GX": "γai̱¹",
    "GHC": "ɣie¹",
    "explanationEN": "power/strength",
    "explanationCN": "1.力、工、势"
  },
  {
    "character": "𗫙",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "wrestling",
    "explanationCN": "相扑角抵摔交"
  },
  {
    "character": "𗧡",
    "GX": "ntse¹",
    "GHC": "tsji̱j¹",
    "explanationEN": "palpitate",
    "explanationCN": "悸"
  },
  {
    "character": "𗧠",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "desire/wish/lust",
    "explanationCN": "欲"
  },
  {
    "character": "𗽶",
    "GX": "?u̱h²",
    "GHC": "lụ²",
    "explanationEN": "cold/freeze",
    "explanationCN": "冻冰"
  },
  {
    "character": "𗿰",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "steps/stairs",
    "explanationCN": "陛阶】"
  },
  {
    "character": "𗤮",
    "GX": "nwo̱ṃ²",
    "GHC": "nuə",
    "explanationEN": "eloquence",
    "explanationCN": "辩才"
  },
  {
    "character": "𗧎",
    "GX": "qae̱h¹",
    "GHC": "kiẹj¹",
    "explanationEN": "sisters",
    "explanationCN": "姐妹"
  },
  {
    "character": "𗼶",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "ridge",
    "explanationCN": "脊墚岭"
  },
  {
    "character": "𗏋",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "die",
    "explanationCN": "死"
  },
  {
    "character": "𗬡",
    "GX": "biṃ¹",
    "GHC": "bjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【频】"
  },
  {
    "character": "𗣳",
    "GX": "seh²",
    "GHC": "sjịj²",
    "explanationEN": "write",
    "explanationCN": "1.写】、画"
  },
  {
    "character": "𗣵",
    "GX": "bae̱¹",
    "GHC": "biej¹",
    "explanationEN": "a.surname",
    "explanationCN": "【埋】【默】【墨】"
  },
  {
    "character": "𗩥",
    "GX": "bo̱¹",
    "GHC": "bo¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【婆】【部】"
  },
  {
    "character": "𗫏",
    "GX": "thwih¹",
    "GHC": "thjwị¹",
    "explanationEN": "the.young",
    "explanationCN": "少幼"
  },
  {
    "character": "𗏵",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "end/tail/east",
    "explanationCN": "1.末尾东、【嘛】【末】【摩】【么】【謨】【莫】【曼】"
  },
  {
    "character": "𗦬",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "common/generally",
    "explanationCN": "1.共总通、二字重迭表示“俱共”“共同”、廓交"
  },
  {
    "character": "𗪢",
    "GX": "dza¹",
    "GHC": "dzja¹",
    "explanationEN": "hair.worn.in.a.bun.or.coil",
    "explanationCN": "1.髻、顶"
  },
  {
    "character": "𗪒",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "inner/inside",
    "explanationCN": "内"
  },
  {
    "character": "𗺧",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【庞】草名"
  },
  {
    "character": "𗻝",
    "GX": "zi̱ṃ²",
    "GHC": "zẽ²",
    "explanationEN": "bamboo.shoots",
    "explanationCN": "笋"
  },
  {
    "character": "𗻳",
    "GX": "peṃ¹",
    "GHC": "pjɨj¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【丙】草名"
  },
  {
    "character": "𗧿",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "smear/plaster",
    "explanationCN": "涂抹"
  },
  {
    "character": "𗏿",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "auspicious/lucky",
    "explanationCN": "瑞象"
  },
  {
    "character": "𗫮",
    "GX": "da̱ṃ¹",
    "GHC": "dã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【檀】"
  },
  {
    "character": "𗺹",
    "GX": "hi̱w¹",
    "GHC": "xew¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "1.【厚】草名、【喉】（珠 184）【㬋】（珠 082）【篌】（珠 324）【后】（珠 108）【霍】（音 203）【侯】【呼】"
  },
  {
    "character": "𗻬",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "thin/rare",
    "explanationCN": "稀薄"
  },
  {
    "character": "𗨦",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "pellet",
    "explanationCN": "颗粒"
  },
  {
    "character": "𗼾",
    "GX": "ni̱ṃ¹",
    "GHC": "nẽ¹",
    "explanationEN": "a.place.name",
    "explanationCN": "【谷】【南】地名"
  },
  {
    "character": "𗧴",
    "GX": "thu²",
    "GHC": "thju²",
    "explanationEN": "abandon/give.up",
    "explanationCN": "放弃"
  },
  {
    "character": "𗪖",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "seethe/churn/roll",
    "explanationCN": "翻滚"
  },
  {
    "character": "𗫒",
    "GX": "mba̱¹",
    "GHC": "ba̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【冒】【末】"
  },
  {
    "character": "𗫓",
    "GX": "nśo̱r¹",
    "GHC": "śjo̱r¹",
    "explanationEN": "levity",
    "explanationCN": "轻佻"
  },
  {
    "character": "𗽘",
    "GX": "gə²",
    "GHC": "gjɨ²",
    "explanationEN": "cave/den/valley",
    "explanationCN": "谷穴窍"
  },
  {
    "character": "𗥸",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "cry/sob",
    "explanationCN": "哭泣（呜咽）"
  },
  {
    "character": "𗣇",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "the.third.of.the.Eight.Trigrams",
    "explanationCN": "1.根、矿山、耿"
  },
  {
    "character": "𗽱",
    "GX": "da̱ṃ¹",
    "GHC": "dã¹",
    "explanationEN": "a.surname",
    "explanationCN": "【陀】【谭】"
  },
  {
    "character": "𗐎",
    "GX": "pə¹",
    "GHC": "pjɨ¹",
    "explanationEN": "father",
    "explanationCN": "父爹爸"
  },
  {
    "character": "𗐖",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "arrive",
    "explanationCN": "至到】"
  },
  {
    "character": "𗺇",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "cheek",
    "explanationCN": "面颊"
  },
  {
    "character": "𘚺",
    "GX": "qhae̱ṃ¹",
    "GHC": "khiəj¹",
    "explanationEN": "cough/asthma",
    "explanationCN": "咳嗽喘"
  },
  {
    "character": "𘚸",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "fork",
    "explanationCN": "叉"
  },
  {
    "character": "𗴪",
    "GX": "rmər²",
    "GHC": "mjɨr²",
    "explanationEN": "observe",
    "explanationCN": "观察"
  },
  {
    "character": "𗃰",
    "GX": "he̱¹",
    "GHC": "xej¹",
    "explanationEN": "sea",
    "explanationCN": "海】"
  },
  {
    "character": "𗐑",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "scarf/kerchief",
    "explanationCN": "纚】"
  },
  {
    "character": "𗴡",
    "GX": "ŋġa̱¹",
    "GHC": "ga̱¹",
    "explanationEN": "doubt",
    "explanationCN": "忧疑"
  },
  {
    "character": "𗴑",
    "GX": "qhae̱ṃ¹",
    "GHC": "khiəj¹",
    "explanationEN": "calf.(of.the.leg)",
    "explanationCN": "腿肚（注：此字按字形结构应為，但《同音》甲乙丁本均刻為“?”）"
  },
  {
    "character": "𗐋",
    "GX": "γa²",
    "GHC": "ɣja²",
    "explanationEN": "umbrella.of.a.carriage",
    "explanationCN": "轩盖"
  },
  {
    "character": "𗃕",
    "GX": "nẓai̱¹",
    "GHC": "źie̱¹",
    "explanationEN": "make.great.efforts",
    "explanationCN": "努力"
  },
  {
    "character": "𗬨",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "seek/hanker.after/covet",
    "explanationCN": "贪"
  },
  {
    "character": "𗃢",
    "GX": "nśi¹",
    "GHC": "śji̱¹",
    "explanationEN": "misgiving/doubt",
    "explanationCN": "1.疑虑、恍惚"
  },
  {
    "character": "𗬧",
    "GX": "vwə̱h¹",
    "GHC": "wə̣¹",
    "explanationEN": "burn",
    "explanationCN": "燎"
  },
  {
    "character": "𗃵",
    "GX": "puh²",
    "GHC": "pjụ²",
    "explanationEN": "palace",
    "explanationCN": "宫殿"
  },
  {
    "character": "𗃮",
    "GX": "ṇo̱ṃ²",
    "GHC": "dźiow²",
    "explanationEN": "plaint/certificate",
    "explanationCN": "状】"
  },
  {
    "character": "𗴏",
    "GX": "tsa¹",
    "GHC": "tsja¹",
    "explanationEN": "broil/roast",
    "explanationCN": "炙烫"
  },
  {
    "character": "𗃖",
    "GX": "mu²",
    "GHC": "mju²",
    "explanationEN": "a.surname",
    "explanationCN": "【穆】【慕】"
  },
  {
    "character": "𗃜",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "be.willing.to/be.ready.to",
    "explanationCN": "乐意愿意"
  },
  {
    "character": "𘓛",
    "GX": "dzwi¹",
    "GHC": "dzjwi¹",
    "explanationEN": "still/calm",
    "explanationCN": "心静"
  },
  {
    "character": "𗴥",
    "GX": "miw²",
    "GHC": "mjiw²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【莫】【摩】【藐】"
  },
  {
    "character": "𗃸",
    "GX": "haə̱¹",
    "GHC": "xiə¹",
    "explanationEN": "leave",
    "explanationCN": "离"
  },
  {
    "character": "𗃙",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj²",
    "explanationEN": "sport/make.fun.of",
    "explanationCN": "戏闹"
  },
  {
    "character": "𘀂",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "detestion",
    "explanationCN": "1.厌嫌、【佉】【龋】"
  },
  {
    "character": "𗃤",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "relief/terrain",
    "explanationCN": "地面地势"
  },
  {
    "character": "𗴔",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "hatred/resentment",
    "explanationCN": "怨恨"
  },
  {
    "character": "𗴘",
    "GX": "ŋwə¹",
    "GHC": "ŋjwɨ¹",
    "explanationEN": "fear/dread",
    "explanationCN": "惊骇恐惧"
  },
  {
    "character": "𗴢",
    "GX": "mbu¹",
    "GHC": "bju̱¹",
    "explanationEN": "respect/revere",
    "explanationCN": "1.敬恭、贵重、仰崇、钦、宗、致、惭、豪、达"
  },
  {
    "character": "𘓗",
    "GX": "dzə̱¹",
    "GHC": "dzə¹",
    "explanationEN": "concentrated",
    "explanationCN": "专心专注"
  },
  {
    "character": "𗬴",
    "GX": "le̱ṃ¹",
    "GHC": "ləj¹",
    "explanationEN": "equal/even/moderate",
    "explanationCN": "均匀适中"
  },
  {
    "character": "𗃦",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "city",
    "explanationCN": "郭（城郭都城）邑"
  },
  {
    "character": "𗐐",
    "GX": "hoṃ¹",
    "GHC": "xjow¹",
    "explanationEN": "fragrant",
    "explanationCN": "1.香】、【方】（珠 133352）【房】（珠 344）【向】（珠 361）【胸】（珠 185）【乡】【雄】（音 203）"
  },
  {
    "character": "𗃬",
    "GX": "lli̱²",
    "GHC": "le²",
    "explanationEN": "fear/dread",
    "explanationCN": "1.恐惧惊骇、怨"
  },
  {
    "character": "𗴟",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "father",
    "explanationCN": "爸爸父亲爹爹"
  },
  {
    "character": "𗴓",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "tiger",
    "explanationCN": "虎"
  },
  {
    "character": "𗴚",
    "GX": "pe¹",
    "GHC": "pjij¹",
    "explanationEN": "flog/beat",
    "explanationCN": "扑打拷打"
  },
  {
    "character": "𗃳",
    "GX": "rmər²",
    "GHC": "mjɨr²",
    "explanationEN": "observe",
    "explanationCN": "观察"
  },
  {
    "character": "𗼊",
    "GX": "si̱w¹",
    "GHC": "sew¹",
    "explanationEN": "shyness/shame",
    "explanationCN": "羞】"
  },
  {
    "character": "𗼪",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "listen.attentively",
    "explanationCN": "1.諦、沉"
  },
  {
    "character": "𗼮",
    "GX": "dzuh²",
    "GHC": "dzjụ²",
    "explanationEN": "rain",
    "explanationCN": "1.雨、两字重迭表示“降雨”之义、【族】"
  },
  {
    "character": "𗐌",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "a.surname",
    "explanationCN": "【洼】"
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
    "explanationEN": "beautiful/good",
    "explanationCN": "美善"
  },
  {
    "character": "𘴂",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "god/deity/divinity/supernatural.being",
    "explanationCN": "神神仙"
  },
  {
    "character": "𗼍",
    "GX": "nsa̱¹",
    "GHC": "sa̱¹",
    "explanationEN": "very.close.relative",
    "explanationCN": "至亲"
  },
  {
    "character": "𗼚",
    "GX": "γo̱ṃ²",
    "GHC": "ꞏow²",
    "explanationEN": "a.surname",
    "explanationCN": "【敖】【卧】"
  },
  {
    "character": "𗼠",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "favor/merit",
    "explanationCN": "1.功恩、【屈】【掘】"
  },
  {
    "character": "𗼡",
    "GX": "peh¹",
    "GHC": "pjịj¹",
    "explanationEN": "wizard",
    "explanationCN": "巫禳"
  },
  {
    "character": "𗼥",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "power/authority",
    "explanationCN": "权势"
  },
  {
    "character": "𗼩",
    "GX": "γa̱h²",
    "GHC": "ɣạ²",
    "explanationEN": "name,.surname",
    "explanationCN": "1.【夏】、姻缘名词"
  },
  {
    "character": "𗼋",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "respect/reverence",
    "explanationCN": "恭敬"
  },
  {
    "character": "𗼏",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "uncle",
    "explanationCN": "父叔伯舅翁"
  },
  {
    "character": "𘉈",
    "GX": "dzi̱w²",
    "GHC": "dzew²",
    "explanationEN": "swindle/cheat",
    "explanationCN": "1.诈骗矫、偽僭"
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
    "GHC": "ꞏju¹",
    "explanationEN": "be.frightened/scare",
    "explanationCN": "惊吓"
  },
  {
    "character": "𘉇",
    "GX": "dzi̱w²",
    "GHC": "dzew²",
    "explanationEN": "swindle/cheat",
    "explanationCN": "诈骗"
  },
  {
    "character": "𗐕",
    "GX": "pe²",
    "GHC": "pjij²",
    "explanationEN": "father/people.of.father's.generation",
    "explanationCN": "爸爹翁"
  },
  {
    "character": "𗁄",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "fatigue",
    "explanationCN": "疲倦疲乏"
  },
  {
    "character": "𗎴",
    "GX": "ti¹",
    "GHC": "tji¹",
    "explanationEN": "east/end",
    "explanationCN": "东方末尾"
  },
  {
    "character": "𗃉",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "stuffy/dizzy",
    "explanationCN": "闷"
  },
  {
    "character": "𗂽",
    "GX": "ye²",
    "GHC": "ꞏjij²",
    "explanationEN": "sheep",
    "explanationCN": "羊"
  },
  {
    "character": "𗢁",
    "GX": "hə̱¹",
    "GHC": "xə¹",
    "explanationEN": "seek/look.for",
    "explanationCN": "1.寻觅寻找、【霍】（音 203）"
  },
  {
    "character": "𗆎",
    "GX": "tshe²",
    "GHC": "tshjij²",
    "explanationEN": "sheep",
    "explanationCN": "羖䍽"
  },
  {
    "character": "𗆻",
    "GX": "γa̱¹",
    "GHC": "ꞏja",
    "explanationEN": "alone/lonely/different",
    "explanationCN": "独孤异"
  },
  {
    "character": "𗄼",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "come",
    "explanationCN": "来"
  },
  {
    "character": "𗆧",
    "GX": "siw¹",
    "GHC": "sjiw¹",
    "explanationEN": "new/fresh",
    "explanationCN": "新"
  },
  {
    "character": "𗆊",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "uneven/fight",
    "explanationCN": "参差鬭动词"
  },
  {
    "character": "𗆉",
    "GX": "qao̱¹",
    "GHC": "kio¹",
    "explanationEN": "drive/oust",
    "explanationCN": "驱赶撵"
  },
  {
    "character": "𗃈",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "new",
    "explanationCN": "新"
  },
  {
    "character": "𗂃",
    "GX": "tśhwaw¹",
    "GHC": "tśhjwa̱¹",
    "explanationEN": "separate/break.off",
    "explanationCN": "分开分离掰开"
  },
  {
    "character": "𗂒",
    "GX": "rqwa̱r¹",
    "GHC": "kwar¹",
    "explanationEN": "observe/watch",
    "explanationCN": "观察"
  },
  {
    "character": "𗅰",
    "GX": "lwe̱ṃ¹",
    "GHC": "lwəj¹",
    "explanationEN": "slow/obtuse",
    "explanationCN": "迟钝"
  },
  {
    "character": "𗆵",
    "GX": "la̱¹",
    "GHC": "la¹",
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
    "GHC": "lạ²",
    "explanationEN": "estimate",
    "explanationCN": "量测"
  },
  {
    "character": "𗂱",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "neck",
    "explanationCN": "颈项"
  },
  {
    "character": "𗃅",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "decorate/adorn",
    "explanationCN": "装饰校饰严饰"
  },
  {
    "character": "𗹬",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "passion/knowledge",
    "explanationCN": "1.情知识、虞人"
  },
  {
    "character": "𗹟",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "patron.of.sheep",
    "explanationCN": "护羊神"
  },
  {
    "character": "𗂳",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "shoot",
    "explanationCN": "射】"
  },
  {
    "character": "𗀸",
    "GX": "nte̱¹",
    "GHC": "the̱j¹",
    "explanationEN": "ripple/undulate",
    "explanationCN": "1.荡漾、闪闪、俱炽"
  },
  {
    "character": "𗂯",
    "GX": "rġa̱r²",
    "GHC": "gar²",
    "explanationEN": "sleep",
    "explanationCN": "睡眠"
  },
  {
    "character": "𗄶",
    "GX": "tṣhai̱w¹",
    "GHC": "tśhiew¹",
    "explanationEN": "damage/injure",
    "explanationCN": "1.损坏、坼"
  },
  {
    "character": "𗅤",
    "GX": "rma̱r²",
    "GHC": "mar²",
    "explanationEN": "sorrowful/puzzled",
    "explanationCN": "苦罪迷惑"
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
    "explanationEN": "harsh.and.unreasonable/perverse",
    "explanationCN": "横】"
  },
  {
    "character": "𗆢",
    "GX": "qhwaə̱¹",
    "GHC": "khiwə¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "萝葡"
  },
  {
    "character": "𗆯",
    "GX": "tshə²",
    "GHC": "tshjɨ²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "萝葡菜"
  },
  {
    "character": "𗆶",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "turnip",
    "explanationCN": "蔓菁"
  },
  {
    "character": "𗹹",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "white",
    "explanationCN": "宁"
  },
  {
    "character": "𗂴",
    "GX": "rtśər¹",
    "GHC": "tśjɨr¹",
    "explanationEN": "pare",
    "explanationCN": "削"
  },
  {
    "character": "𗀳",
    "GX": "rtśər¹",
    "GHC": "tśjɨ̱r¹",
    "explanationEN": "attack",
    "explanationCN": "攻打"
  },
  {
    "character": "𗀺",
    "GX": "rnə̱r²",
    "GHC": "nər²",
    "explanationEN": "finger",
    "explanationCN": "指"
  },
  {
    "character": "𗁅",
    "GX": "lla̱h¹",
    "GHC": "lạ¹",
    "explanationEN": "hand",
    "explanationCN": "1.手、臂、巾、擒、始末"
  },
  {
    "character": "𗁃",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "cut",
    "explanationCN": "割"
  },
  {
    "character": "𗁊",
    "GX": "bah¹",
    "GHC": "bjạ¹",
    "explanationEN": "coarse/rough",
    "explanationCN": "1.粗糙、涩"
  },
  {
    "character": "𗄴",
    "GX": "ntwi̱²",
    "GHC": "twe̱²",
    "explanationEN": "pair/couple",
    "explanationCN": "对】"
  },
  {
    "character": "𘴀",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "foolish/stupid/clumsy",
    "explanationCN": "愚笨"
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
    "explanationEN": "bright.star",
    "explanationCN": "明星"
  },
  {
    "character": "𗅼",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "drink",
    "explanationCN": "饮"
  },
  {
    "character": "𗅣",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "firefly/glowworm",
    "explanationCN": "萤"
  },
  {
    "character": "𗅿",
    "GX": "dzeh¹",
    "GHC": "dzjịj¹",
    "explanationEN": "muddy/trubid",
    "explanationCN": "混浊"
  },
  {
    "character": "𗡽",
    "GX": "tṣwae̱ṃ²",
    "GHC": "tśiwəj²",
    "explanationEN": "droppings/insect.dung",
    "explanationCN": "粪（虫粪）"
  },
  {
    "character": "𗂑",
    "GX": "rqwa̱r¹",
    "GHC": "kwar¹",
    "explanationEN": "observe/watch",
    "explanationCN": "观察"
  },
  {
    "character": "𗄿",
    "GX": "llu̱h²",
    "GHC": "lụ²",
    "explanationEN": "hinder/obstruct",
    "explanationCN": "1.障碍、缺、陷"
  },
  {
    "character": "𗅌",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "winding/meandering",
    "explanationCN": "斜弯曲"
  },
  {
    "character": "𗡻",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "excrement/dung",
    "explanationCN": "屎粪"
  },
  {
    "character": "𗆹",
    "GX": "nye¹",
    "GHC": "ꞏji̱j¹",
    "explanationEN": "straight",
    "explanationCN": "直"
  },
  {
    "character": "𗆼",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "doubt/suspicion",
    "explanationCN": "疑"
  },
  {
    "character": "𗆰",
    "GX": "lla¹",
    "GHC": "lja¹",
    "explanationEN": "transport.ᴀ",
    "explanationCN": "送还.ᴀ运送.ᴀ"
  },
  {
    "character": "𗆱",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "close/handcuff",
    "explanationCN": "关闭銬梏"
  },
  {
    "character": "𗇁",
    "GX": "śaṃ¹",
    "GHC": "śjã¹",
    "explanationEN": "(Buddhist).chan/zen",
    "explanationCN": "禪】"
  },
  {
    "character": "𗅭",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "chop/cut",
    "explanationCN": "斩断裁剪割"
  },
  {
    "character": "𗁦",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "promote/raise",
    "explanationCN": "1.高昇举、骄慢"
  },
  {
    "character": "𗃊",
    "GX": "pho̱¹",
    "GHC": "pho¹",
    "explanationEN": "splash/pour",
    "explanationCN": "1.泼洒】、灌"
  },
  {
    "character": "𗂸",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "prime.minister.(in.ancient.China)",
    "explanationCN": "臣丞相宰相官宦大夫"
  },
  {
    "character": "𗂘",
    "GX": "rker²",
    "GHC": "kji̱r²",
    "explanationEN": "obstruct",
    "explanationCN": "障碍性衰竭（阳痿）"
  },
  {
    "character": "𗃎",
    "GX": "ryer¹",
    "GHC": "ꞏjijr¹",
    "explanationEN": "firm",
    "explanationCN": "1.刚强、坚、艰"
  },
  {
    "character": "𗃏",
    "GX": "koh²",
    "GHC": "kjọ²",
    "explanationEN": "cut",
    "explanationCN": "割"
  },
  {
    "character": "𗹻",
    "GX": "di̱w¹",
    "GHC": "dew¹",
    "explanationEN": "a.surname",
    "explanationCN": "【竇】【杜】【奴】"
  },
  {
    "character": "𗹦",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "sky/heaven",
    "explanationCN": "1.天、活业营生"
  },
  {
    "character": "𗺃",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "infect",
    "explanationCN": "传染"
  },
  {
    "character": "𗃁",
    "GX": "pha²",
    "GHC": "phja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【拍】【帕】"
  },
  {
    "character": "𗎩",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "family/household",
    "explanationCN": "家】"
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
    "explanationCN": "痣"
  },
  {
    "character": "𗂏",
    "GX": "yu¹",
    "GHC": "ꞏju¹",
    "explanationEN": "big.tree",
    "explanationCN": "1.大（榆）树、【羽】【裕】【昱】【瘐】、【豫】【余】【昱】【约】（音 202）"
  },
  {
    "character": "𗶰",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "expose/reveal",
    "explanationCN": "1.暴露、露宿躲避"
  },
  {
    "character": "𘝔",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "transport",
    "explanationCN": "输】"
  },
  {
    "character": "𘝒",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "string/wool.rope",
    "explanationCN": "绳毛绳"
  },
  {
    "character": "𘉧",
    "GX": "dźaw²",
    "GHC": "dźja̱²",
    "explanationEN": "skinny/wan.and.sallow",
    "explanationCN": "消瘦憔悴"
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
    "explanationEN": "present.as.a.gift/give",
    "explanationCN": "1.赠施供、趣"
  },
  {
    "character": "𗢦",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "flag/banner",
    "explanationCN": "旗】"
  },
  {
    "character": "𗋸",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "ᴘʀᴏʙ",
    "explanationCN": "ᴘʀᴏʙ"
  },
  {
    "character": "𘉼",
    "GX": "ntho̱²",
    "GHC": "tho̱²",
    "explanationEN": "harm/endanger",
    "explanationCN": "危害损害"
  },
  {
    "character": "𗋹",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "fluid/liquid",
    "explanationCN": "液"
  },
  {
    "character": "𘉸",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "scab",
    "explanationCN": "疥癩"
  },
  {
    "character": "𘉽",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "scab",
    "explanationCN": "癩疮"
  },
  {
    "character": "𘊎",
    "GX": "rphar¹",
    "GHC": "phjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【派】【帕】"
  },
  {
    "character": "𗋱",
    "GX": "ndi²",
    "GHC": "dji̱²",
    "explanationEN": "wash",
    "explanationCN": "洗濯"
  },
  {
    "character": "𗊠",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "a.surname",
    "explanationCN": "【竭】【迎】"
  },
  {
    "character": "𗏈",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "writing.brush",
    "explanationCN": "笔"
  },
  {
    "character": "𗊘",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "mix/mix",
    "explanationCN": "搅"
  },
  {
    "character": "𗌔",
    "GX": "thwa̱ṃ²",
    "GHC": "thwã²",
    "explanationEN": "a.surname",
    "explanationCN": "【段】【断】"
  },
  {
    "character": "𗇇",
    "GX": "hwa̱¹",
    "GHC": "xwa¹",
    "explanationEN": "He",
    "explanationCN": "和尚"
  },
  {
    "character": "𗊐",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "calf",
    "explanationCN": "牛犊"
  },
  {
    "character": "𗊡",
    "GX": "ha̱¹",
    "GHC": "xa¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【哈】】、【合】【褐】【皓】【闔】、活"
  },
  {
    "character": "𗊞",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "honest/upright",
    "explanationCN": "正直忠诚"
  },
  {
    "character": "𗋤",
    "GX": "rzər²",
    "GHC": "zjɨ̱r²",
    "explanationEN": "cheese",
    "explanationCN": "酪浆"
  },
  {
    "character": "𘉨",
    "GX": "dzwə̱¹",
    "GHC": "dzwə¹",
    "explanationEN": "chapter/volume",
    "explanationCN": "1.章册、首"
  },
  {
    "character": "𗊝",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "cross.(a.river)",
    "explanationCN": "1.渡涉、浮"
  },
  {
    "character": "𗢕",
    "GX": "rlhər¹",
    "GHC": "lhjɨ̱r¹",
    "explanationEN": "lose/fall",
    "explanationCN": "落失堕夺"
  },
  {
    "character": "𗏅",
    "GX": "n·ywə¹",
    "GHC": "ꞏjwɨ̱¹",
    "explanationEN": "block/obstruct",
    "explanationCN": "障蔽遮栏"
  },
  {
    "character": "𗊮",
    "GX": "laa̱²",
    "GHC": "lia²",
    "explanationEN": "drunkenness",
    "explanationCN": "醉"
  },
  {
    "character": "𗋴",
    "GX": "???",
    "GHC": "",
    "explanationEN": "press/suppress",
    "explanationCN": "压榨"
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
    "explanationEN": "a.transliteration",
    "explanationCN": "【接】【节】"
  },
  {
    "character": "𘊄",
    "GX": "ṇo̱ṃ²",
    "GHC": "niow²",
    "explanationEN": "evil/wicked/bad",
    "explanationCN": "1.恶、凶、涂、妖、【溺】（音 197）"
  },
  {
    "character": "𘊁",
    "GX": "khiw²",
    "GHC": "khjiw²",
    "explanationEN": "dig",
    "explanationCN": "掘】"
  },
  {
    "character": "𗋳",
    "GX": "kwa̱ṃ¹",
    "GHC": "kwã¹",
    "explanationEN": "tube",
    "explanationCN": "1.管】、【管】【官】【冠】"
  },
  {
    "character": "𗃛",
    "GX": "loṃ¹",
    "GHC": "ljow¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【梁】【凉】【亮】【龙】"
  },
  {
    "character": "𗌆",
    "GX": "śwe²",
    "GHC": "śjwij²",
    "explanationEN": "need/want",
    "explanationCN": "需要"
  },
  {
    "character": "𗌠",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "smear/smear",
    "explanationCN": "涂"
  },
  {
    "character": "𗌩",
    "GX": "peṃh²",
    "GHC": "pjɨ̣j²",
    "explanationEN": "knead.wheat.flour",
    "explanationCN": "和面"
  },
  {
    "character": "𗐊",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "sweet.words/flattery",
    "explanationCN": "辞语巧语花言"
  },
  {
    "character": "𗫹",
    "GX": "γwə̱¹",
    "GHC": "ɣwə¹",
    "explanationEN": "struggle/fight",
    "explanationCN": "争打"
  },
  {
    "character": "𗫺",
    "GX": "tshwiṃ¹",
    "GHC": "tshjwĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "村"
  },
  {
    "character": "𗬂",
    "GX": "rvwa̱r¹",
    "GHC": "war¹",
    "explanationEN": "twine/wind",
    "explanationCN": "1.缠绕、【娃】【婆】"
  },
  {
    "character": "𗬅",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "couple",
    "explanationCN": "夫妻"
  },
  {
    "character": "𗬉",
    "GX": "si̱¹",
    "GHC": "se¹",
    "explanationEN": "mustard",
    "explanationCN": "芥"
  },
  {
    "character": "𗬊",
    "GX": "γwə̱¹",
    "GHC": "ɣwə¹",
    "explanationEN": "a.surname",
    "explanationCN": "【鶻】"
  },
  {
    "character": "𗤤",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "count/calculate",
    "explanationCN": "计算"
  },
  {
    "character": "𗥡",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "a.surname",
    "explanationCN": "【鲁】【陆】【卢】【炉】【农】【禄】【碌】【鹿】【露】"
  },
  {
    "character": "𘊞",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【陆】【路】【农】"
  },
  {
    "character": "𘊔",
    "GX": "dźe²",
    "GHC": "dźjẽ",
    "explanationEN": "an.insect.name",
    "explanationCN": "蛆虫"
  },
  {
    "character": "𗤣",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "hook",
    "explanationCN": "勾钩动词"
  },
  {
    "character": "𗤨",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "timid/weak",
    "explanationCN": "1.怯弱、衰惫、卑劣"
  },
  {
    "character": "𗿑",
    "GX": "rhwə̱r¹",
    "GHC": "xwər¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【霍】【壑】、鹤"
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
    "explanationEN": "nose.impalement",
    "explanationCN": "穿鼻（鼻圈）"
  },
  {
    "character": "𗥤",
    "GX": "tse²",
    "GHC": "tsjij²",
    "explanationEN": "realize/know",
    "explanationCN": "1.悟晓通达明瞭、（菩）萨"
  },
  {
    "character": "𗨉",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "listen.ʙ",
    "explanationCN": "听.ʙ"
  },
  {
    "character": "𗩯",
    "GX": "swe¹",
    "GHC": "sjwij¹",
    "explanationEN": "clear/obvious",
    "explanationCN": "明显分明消息"
  },
  {
    "character": "𗪕",
    "GX": "mbi²",
    "GHC": "bji̱²",
    "explanationEN": "count/calculate",
    "explanationCN": "数计算"
  },
  {
    "character": "𗪫",
    "GX": "le²",
    "GHC": "ljị²",
    "explanationEN": "a.surname",
    "explanationCN": "【黎】【列】"
  },
  {
    "character": "𗿂",
    "GX": "ke²",
    "GHC": "kjij²",
    "explanationEN": "impressive.and.dignified",
    "explanationCN": "1.威仪、显贵"
  },
  {
    "character": "𗦙",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "pure",
    "explanationCN": "1.清白、【西】【仙】（神仙名）"
  },
  {
    "character": "𗪪",
    "GX": "śwu¹",
    "GHC": "śjwu¹",
    "explanationEN": "clear/transparent",
    "explanationCN": "澈澄清"
  },
  {
    "character": "𗨊",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "gallbladder",
    "explanationCN": "胆"
  },
  {
    "character": "𗫂",
    "GX": "ta¹",
    "GHC": "tja¹",
    "explanationEN": "ᴛᴏᴘ",
    "explanationCN": "ᴛᴏᴘ"
  },
  {
    "character": "𗽼",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "hole/hollow/pit",
    "explanationCN": "坑"
  },
  {
    "character": "𗻿",
    "GX": "swə¹",
    "GHC": "sjwɨ¹",
    "explanationEN": "make.a.noise/stir.up.trouble",
    "explanationCN": "哄闹"
  },
  {
    "character": "𗩢",
    "GX": "śwaw¹",
    "GHC": "śjwa̱¹",
    "explanationEN": "harness/hitch.up",
    "explanationCN": "套"
  },
  {
    "character": "𗪦",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "scar",
    "explanationCN": "1.疤痕】、【霸】【班】"
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
    "explanationEN": "time/date/moment",
    "explanationCN": "1.时、须臾"
  },
  {
    "character": "𗤡",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【义】、【宜】【玉】【仪】【毅】【凝】（音 196）"
  },
  {
    "character": "𗤬",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "link/unite",
    "explanationCN": "1.连、攻、干、蒙坌、死"
  },
  {
    "character": "𗧅",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "I.royal",
    "explanationCN": "朕"
  },
  {
    "character": "𗩡",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "a.surname",
    "explanationCN": "【温】【魏】"
  },
  {
    "character": "𗫊",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "suddenly/abruptly/throw",
    "explanationCN": "猛投起弃副词"
  },
  {
    "character": "𗨗",
    "GX": "ndzu̱²",
    "GHC": "dzu̱²",
    "explanationEN": "harmonious",
    "explanationCN": "协和偕谐"
  },
  {
    "character": "𗫁",
    "GX": "γwai̱¹",
    "GHC": "ɣiwe¹",
    "explanationEN": "influence/power",
    "explanationCN": "权势贵"
  },
  {
    "character": "𗬕",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "dark/ignorant",
    "explanationCN": "1.暗昧、宗源"
  },
  {
    "character": "𗨾",
    "GX": "he̱²",
    "GHC": "xej²",
    "explanationEN": "grieved/sorrowful",
    "explanationCN": "悲哀（形）"
  },
  {
    "character": "𗪮",
    "GX": "mmi̱²",
    "GHC": "me̱²",
    "explanationEN": "new",
    "explanationCN": "新"
  },
  {
    "character": "𗾤",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "ask/call",
    "explanationCN": "请召唤"
  },
  {
    "character": "𗽭",
    "GX": "qhi̱w²",
    "GHC": "khew²",
    "explanationEN": "opening/entrance/ferry.crossing",
    "explanationCN": "口津】"
  },
  {
    "character": "𘔵",
    "GX": "ŋqwə̱¹",
    "GHC": "kwə̱¹",
    "explanationEN": "snore",
    "explanationCN": "鼾"
  },
  {
    "character": "𗺴",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "section/part",
    "explanationCN": "1.段、半、鋌、刺"
  },
  {
    "character": "𗻉",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【芦】草名"
  },
  {
    "character": "𗻌",
    "GX": "tshə̱¹",
    "GHC": "tshə¹",
    "explanationEN": "potato/taro",
    "explanationCN": "薯芋"
  },
  {
    "character": "𗦾",
    "GX": "yu¹",
    "GHC": "ꞏju̱¹",
    "explanationEN": "see/look.at",
    "explanationCN": "1.看视覩瞻、检验"
  },
  {
    "character": "𗪼",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "mirror/looking.glass",
    "explanationCN": "镜子"
  },
  {
    "character": "𗿴",
    "GX": "rbo̱ṃr¹",
    "GHC": "bowr¹",
    "explanationEN": "nipple/teat",
    "explanationCN": "乳头"
  },
  {
    "character": "𗻦",
    "GX": "zi̱ṃ²",
    "GHC": "zẽ(lẽ)²",
    "explanationEN": "lettuce",
    "explanationCN": "萵苣（苦苣）"
  },
  {
    "character": "𗻱",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【节】草名"
  },
  {
    "character": "𗩜",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "cure/treat/heal",
    "explanationCN": "医治"
  },
  {
    "character": "𗿧",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "medicated.plaster",
    "explanationCN": "药膏"
  },
  {
    "character": "𗫨",
    "GX": "rdwi̱wr²",
    "GHC": "dwewr²",
    "explanationEN": "enlighten/awaken",
    "explanationCN": "觉"
  },
  {
    "character": "𗤷",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "life",
    "explanationCN": "命"
  },
  {
    "character": "𗧞",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "enlightenment",
    "explanationCN": "醒悟"
  },
  {
    "character": "𗪧",
    "GX": "śuh¹",
    "GHC": "śjụ¹",
    "explanationEN": "thin",
    "explanationCN": "瘦"
  },
  {
    "character": "𗦃",
    "GX": "γwe̱²",
    "GHC": "xwej²",
    "explanationEN": "a.surname",
    "explanationCN": "1.【回】】、【慧】【会】【灰】【恢】（音 202）"
  },
  {
    "character": "𗦽",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "baby/infant",
    "explanationCN": "婴儿"
  },
  {
    "character": "𗢿",
    "GX": "tshwiṃ¹",
    "GHC": "tshjwĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【村】【寸】"
  },
  {
    "character": "𗣨",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "clothing/clothes",
    "explanationCN": "衣服"
  },
  {
    "character": "𗣬",
    "GX": "vo¹",
    "GHC": "wjo¹",
    "explanationEN": "LV.ʙ",
    "explanationCN": "LV.ʙ"
  },
  {
    "character": "𗤫",
    "GX": "rkər²",
    "GHC": "kjɨ̱r²",
    "explanationEN": "house/room",
    "explanationCN": "室屋房庐捨"
  },
  {
    "character": "𗥬",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "a.surname",
    "explanationCN": "【瓔】【郢】（）"
  },
  {
    "character": "𗨐",
    "GX": "pe̱¹",
    "GHC": "pej¹",
    "explanationEN": "drink",
    "explanationCN": "饮"
  },
  {
    "character": "𗾘",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "the.back.of.somebody.or.something",
    "explanationCN": "背后"
  },
  {
    "character": "𗿈",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "pigeon/dove",
    "explanationCN": "鸽"
  },
  {
    "character": "𗧶",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "whispered/quiet/secret",
    "explanationCN": "窃窃谆谆低声悄悄暗暗阴谋"
  },
  {
    "character": "𗤩",
    "GX": "γwaṃ¹",
    "GHC": "ɣjwã¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【袁】【元】、【圆】（珠 352）【园】（珠 133）【原】（珠 121）【愿】（珠 304）【远】（珠 361）【㳂】（珠 344）、【渊】【阮】【苑】【援】【尹】【兗】（音 202）"
  },
  {
    "character": "𗪑",
    "GX": "rkhwar¹",
    "GHC": "khjwar¹",
    "explanationEN": "circle/ring",
    "explanationCN": "圈】"
  },
  {
    "character": "𗣟",
    "GX": "rver¹",
    "GHC": "wjijr¹",
    "explanationEN": "divination",
    "explanationCN": "卜占卜"
  },
  {
    "character": "𗥆",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "stars",
    "explanationCN": "辰星"
  },
  {
    "character": "𗽝",
    "GX": "qwaa̱¹",
    "GHC": "kiwa¹",
    "explanationEN": "a.place.name",
    "explanationCN": "1.【瓜】【寡】地名、【媧】【关】（音 197）"
  },
  {
    "character": "𗿃",
    "GX": "də̱h¹",
    "GHC": "də̣¹",
    "explanationEN": "pretty/beautiful",
    "explanationCN": "俊美"
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
    "GHC": "ꞏwụ²",
    "explanationEN": "man/male",
    "explanationCN": "男雄"
  },
  {
    "character": "𗥢",
    "GX": "dźih?",
    "GHC": "dźjị",
    "explanationEN": "a.surname",
    "explanationCN": "【貰】"
  },
  {
    "character": "𗩓",
    "GX": "yiw¹",
    "GHC": "ꞏjiw¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "茵蔯"
  },
  {
    "character": "𗪸",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "radish",
    "explanationCN": "萝葡"
  },
  {
    "character": "𗣀",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "a.surname",
    "explanationCN": "1.【令】【力】、哉、乐"
  },
  {
    "character": "𗣩",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "rely.on/depend",
    "explanationCN": "1.托依靠恃柱、【佗】、【踏】（珠 242）【大】（珠 326）【道】（珠 276）【桃】（珠 141142）【叹】（珠 275）【毯】（珠 243）【贪】（珠 355）【达】（音 195）"
  },
  {
    "character": "𗤟",
    "GX": "rtsir¹",
    "GHC": "tsjir¹",
    "explanationEN": "select/choose",
    "explanationCN": "择"
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
    "explanationEN": "skill/technology/artistry",
    "explanationCN": "技艺"
  },
  {
    "character": "𗾌",
    "GX": "rvwe̱r¹",
    "GHC": "wejr¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鵐】鸟名"
  },
  {
    "character": "𗩛",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "speak/say/state",
    "explanationCN": "讲说述"
  },
  {
    "character": "𗿨",
    "GX": "qwae̱ṃ¹",
    "GHC": "kiwəj¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鴂】鸟名"
  },
  {
    "character": "𗻜",
    "GX": "phae̱²",
    "GHC": "phiej²",
    "explanationEN": "barnyard.grass",
    "explanationCN": "稗（汉语代词）"
  },
  {
    "character": "𘊚",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "six/the.sixth",
    "explanationCN": "六行六"
  },
  {
    "character": "𗺜",
    "GX": "dzə̱h¹",
    "GHC": "dzə̣¹",
    "explanationEN": "dense",
    "explanationCN": "1.稠茂密、聚集"
  },
  {
    "character": "𗺦",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "reed",
    "explanationCN": "蒲芦"
  },
  {
    "character": "𗫜",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【芋】菜名"
  },
  {
    "character": "𗻙",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【杖】菜名"
  },
  {
    "character": "𗥼",
    "GX": "a?",
    "GHC": "ꞏja",
    "explanationEN": "monk/Buddhist.monk",
    "explanationCN": "1.僧、【阿】加在亲属称谓之前表示亲昵"
  },
  {
    "character": "𗏓",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "judge/examine",
    "explanationCN": "审"
  },
  {
    "character": "𗨱",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "auspicious/lucky",
    "explanationCN": "祥"
  },
  {
    "character": "𗿅",
    "GX": "yə¹",
    "GHC": "ꞏjɨ¹",
    "explanationEN": "marriage/matchmaker/relatives.by.marriage",
    "explanationCN": "婚姻亲家媒人"
  },
  {
    "character": "𗏯",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "sweet.words/flattery",
    "explanationCN": "甜言蜜语;奉承"
  },
  {
    "character": "𗧆",
    "GX": "ta¹",
    "GHC": "tja¹",
    "explanationEN": "stupid/dull/foolish",
    "explanationCN": "笨"
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
    "explanationEN": "pick/spade",
    "explanationCN": "鐝"
  },
  {
    "character": "𗨚",
    "GX": "ŋqa̱r¹",
    "GHC": "ka̱r¹",
    "explanationEN": "eyes",
    "explanationCN": "眼目"
  },
  {
    "character": "𗨏",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "insect.dung",
    "explanationCN": "虫屎"
  },
  {
    "character": "𗬑",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【跖】【姪】"
  },
  {
    "character": "𗬔",
    "GX": "lhah¹",
    "GHC": "lhjạ¹",
    "explanationEN": "lightning",
    "explanationCN": "闪电"
  },
  {
    "character": "𗽞",
    "GX": "theṃ¹",
    "GHC": "thjɨj¹",
    "explanationEN": "sky/lightning",
    "explanationCN": "天电】"
  },
  {
    "character": "𗽇",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "fork/branch.of.an.object",
    "explanationCN": "1.岔】、【叉】【茶】（珠 235）【炒】（珠 155）【鞔】（珠 336）【差】【刹】【湛】（音 200）"
  },
  {
    "character": "𗽈",
    "GX": "llih¹",
    "GHC": "ljị¹",
    "explanationEN": "plant/cultivate",
    "explanationCN": "1.耕种植、农、结"
  },
  {
    "character": "𗽮",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "south",
    "explanationCN": "南】"
  },
  {
    "character": "𗾗",
    "GX": "ha²",
    "GHC": "xja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【哈】"
  },
  {
    "character": "𗾚",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "people.of.father’s.generation",
    "explanationCN": "父辈"
  },
  {
    "character": "𗿛",
    "GX": "ba̱ṃ¹",
    "GHC": "bã¹",
    "explanationEN": "goose",
    "explanationCN": "鹅"
  },
  {
    "character": "𗿉",
    "GX": "γu¹",
    "GHC": "ɣju¹",
    "explanationEN": "smoke/mist",
    "explanationCN": "烟"
  },
  {
    "character": "𗪌",
    "GX": "rkwər¹",
    "GHC": "kjwɨ̱r¹",
    "explanationEN": "a.surname/a.nation",
    "explanationCN": "匈奴"
  },
  {
    "character": "𗬜",
    "GX": "koh¹",
    "GHC": "kjọ¹",
    "explanationEN": "fill.ᴀ.in",
    "explanationCN": "盛.ᴀ"
  },
  {
    "character": "𗤦",
    "GX": "ṣaə̱²",
    "GHC": "śiə²",
    "explanationEN": "a.surname",
    "explanationCN": "【苏】"
  },
  {
    "character": "𗥥",
    "GX": "rir¹",
    "GHC": "rjir¹",
    "explanationEN": "evil/harm",
    "explanationCN": "害"
  },
  {
    "character": "𗧊",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "be.born/rise",
    "explanationCN": "1.出生、登"
  },
  {
    "character": "𗥖",
    "GX": "twə¹",
    "GHC": "tjwɨ¹",
    "explanationEN": "flog/beat",
    "explanationCN": "1.打拷挞、筑"
  },
  {
    "character": "𗦱",
    "GX": "hwa̱¹",
    "GHC": "xwa¹",
    "explanationEN": "a.surname",
    "explanationCN": "【和】【会】【哈】"
  },
  {
    "character": "𗩊",
    "GX": "rtso̱r²",
    "GHC": "tsor²",
    "explanationEN": "ancestor/source",
    "explanationCN": "祖本源"
  },
  {
    "character": "𗩋",
    "GX": "mə̱¹",
    "GHC": "mə¹",
    "explanationEN": "merits.and.achievements/contribution",
    "explanationCN": "功绩"
  },
  {
    "character": "𗾥",
    "GX": "sa²",
    "GHC": "sja²",
    "explanationEN": "𗾥𗬥:the.day.after.tomorrow/a.transliteration/HYP:hypothetic",
    "explanationCN": "：后天;音译;HYP"
  },
  {
    "character": "𘴄",
    "GX": "ṣai̱²",
    "GHC": "śie²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "1.【鶽】鸟名【谢】【泄】【先】"
  },
  {
    "character": "𗨂",
    "GX": "yeṃ¹",
    "GHC": "ꞏjɨj¹",
    "explanationEN": "gain/make.profit",
    "explanationCN": "1.羸】、【英】【夜】、【婴】【冶】【野】【赢】【曄】（音 202）"
  },
  {
    "character": "𗪡",
    "GX": "gwo²",
    "GHC": "gjwo²",
    "explanationEN": "dress/apparel",
    "explanationCN": "穿著"
  },
  {
    "character": "𗩰",
    "GX": "qwa̱¹",
    "GHC": "kwa¹",
    "explanationEN": "pass",
    "explanationCN": "过"
  },
  {
    "character": "𗫠",
    "GX": "rgwər¹",
    "GHC": "gjwɨr¹",
    "explanationEN": "lie.down",
    "explanationCN": "1.卧、驻、与?结合，具有“被”之义"
  },
  {
    "character": "𗽠",
    "GX": "nlu̱¹",
    "GHC": "lu̱¹",
    "explanationEN": "dig",
    "explanationCN": "掘凿"
  },
  {
    "character": "𗾺",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "time",
    "explanationCN": "时"
  },
  {
    "character": "𗤠",
    "GX": "rvwa̱r¹",
    "GHC": "war¹",
    "explanationEN": "twine/wind",
    "explanationCN": "缠绕"
  },
  {
    "character": "𗫢",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "cast/throw",
    "explanationCN": "掷"
  },
  {
    "character": "𗦍",
    "GX": "thu̱²",
    "GHC": "",
    "explanationEN": "close/near",
    "explanationCN": "亲近侧"
  },
  {
    "character": "𗿬",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "turtledove",
    "explanationCN": "鴣鴣"
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
    "explanationCN": "明日"
  },
  {
    "character": "𗪊",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "plate/token",
    "explanationCN": "信牌"
  },
  {
    "character": "𗿍",
    "GX": "śaw¹",
    "GHC": "śja̱¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鳲】鸟名"
  },
  {
    "character": "𗻊",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "poison/toxin",
    "explanationCN": "毒】"
  },
  {
    "character": "𗻚",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "poison/toxin",
    "explanationCN": "毒"
  },
  {
    "character": "𗺮",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【苇】草名"
  },
  {
    "character": "𗩬",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "knowledge",
    "explanationCN": "识】"
  },
  {
    "character": "𗿸",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "name/title",
    "explanationCN": "1.名号曰、讳"
  },
  {
    "character": "𗻰",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【秋】草名"
  },
  {
    "character": "𗻷",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【土】草名"
  },
  {
    "character": "𗏺",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "ɪɴᴛʀɢ:ᴅɪʀ/ᴏᴘᴛ:ᴅɪʀ",
    "explanationCN": "ɪɴᴛʀɢ:ᴅɪʀ/ᴏᴘᴛ:ᴅɪʀ"
  },
  {
    "character": "𗐀",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "pool.efforts",
    "explanationCN": "助合力"
  },
  {
    "character": "𗧤",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "break.off/sever",
    "explanationCN": "1.断绝除、禁"
  },
  {
    "character": "𗿫",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "turtledove",
    "explanationCN": "鴣鴣"
  },
  {
    "character": "𗦄",
    "GX": "rdi̱r²",
    "GHC": "de̱r²",
    "explanationEN": "fear/terrify",
    "explanationCN": "心慌惊慌"
  },
  {
    "character": "𗫄",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【族】【殂】"
  },
  {
    "character": "𗧛",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "select/choose",
    "explanationCN": "选择"
  },
  {
    "character": "𗧟",
    "GX": "nźə¹",
    "GHC": "źjɨ̱¹",
    "explanationEN": "hate",
    "explanationCN": "恨"
  },
  {
    "character": "𗩗",
    "GX": "dzeṃ¹",
    "GHC": "dzjɨj¹",
    "explanationEN": "law/statue",
    "explanationCN": "律"
  },
  {
    "character": "𗫧",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "custom/common.sayings",
    "explanationCN": "俗俗语民情"
  },
  {
    "character": "𗥭",
    "GX": "lae̱²",
    "GHC": "liej²",
    "explanationEN": "carry.off/loot",
    "explanationCN": "（按：此字為来日音，《五音切韵》丁种本122-57与《文海寳韵》7、74中均為、31韵）英文释义to carry off; to loot详细解释请参考《简明夏汉字典》第448页。龚煌城释义（缺资料）mojikyo字体歛景永时字体毛"
  },
  {
    "character": "𗧃",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "manage/direct/preside",
    "explanationCN": "持主持"
  },
  {
    "character": "𗏸",
    "GX": "ma¹",
    "GHC": "mja¹",
    "explanationEN": "doorframe",
    "explanationCN": "閫门坎"
  },
  {
    "character": "𗻋",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "herd/tend",
    "explanationCN": "放牧"
  },
  {
    "character": "𗏢",
    "GX": "rγu̱r¹",
    "GHC": "ɣur¹",
    "explanationEN": "festival/date",
    "explanationCN": "节限"
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
    "GHC": "piọ¹",
    "explanationEN": "bottom",
    "explanationCN": "1.底下、腐烂"
  },
  {
    "character": "𘜨",
    "GX": "tṣhwae̱¹",
    "GHC": "tśhiwej¹",
    "explanationEN": "very.fast/at.high.speed",
    "explanationCN": "疾速迅速"
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
    "explanationEN": "revolve/rotate/spin",
    "explanationCN": "旋转"
  },
  {
    "character": "𘜧",
    "GX": "qwu̱h²",
    "GHC": "kwụ²",
    "explanationEN": "slow",
    "explanationCN": "缓慢"
  },
  {
    "character": "𘚬",
    "GX": "γi̱ṃ¹",
    "GHC": "ɣẽ¹",
    "explanationEN": "be.whizzing",
    "explanationCN": "颼"
  },
  {
    "character": "𗺈",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "raised",
    "explanationCN": "挺（凸）】"
  },
  {
    "character": "𗃚",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "deaf",
    "explanationCN": "聵"
  },
  {
    "character": "𗃟",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "bag/sack",
    "explanationCN": "袋"
  },
  {
    "character": "𗃴",
    "GX": "ŋkhau̱¹",
    "GHC": "khju̱¹",
    "explanationEN": "milk",
    "explanationCN": "挤乳"
  },
  {
    "character": "𗃞",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "puppy",
    "explanationCN": "词头"
  },
  {
    "character": "𗃾",
    "GX": "nəh²",
    "GHC": "njɨ̣²",
    "explanationEN": "nasal.cavity",
    "explanationCN": "鼻腔"
  },
  {
    "character": "𗃻",
    "GX": "nəh²",
    "GHC": "njɨ̣²",
    "explanationEN": "wisdom/consciousness",
    "explanationCN": "智慧知觉"
  },
  {
    "character": "𘓞",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "hope/wish",
    "explanationCN": "1.愿、誓"
  },
  {
    "character": "𗃘",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "pleasure",
    "explanationCN": "悦"
  },
  {
    "character": "𘓕",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "treacherous/frivolous",
    "explanationCN": "轻佻（飘浮）"
  },
  {
    "character": "𘓖",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "public.affairs/merit",
    "explanationCN": "1.公功】、【公】【翁】【军】【贡】【工】（音 196）"
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
    "explanationEN": "commandment/(Buddhist).discipline",
    "explanationCN": "1.戒】、律、法、条"
  },
  {
    "character": "𗬮",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "diligent/hardworking",
    "explanationCN": "勤快"
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
    "GHC": "kwụ²",
    "explanationEN": "slow",
    "explanationCN": "慢"
  },
  {
    "character": "𘓟",
    "GX": "dẓae̱²",
    "GHC": "dźiej²",
    "explanationEN": "faith/trust",
    "explanationCN": "信"
  },
  {
    "character": "𗬭",
    "GX": "ndźa²",
    "GHC": "dźja̱²",
    "explanationEN": "a.surname",
    "explanationCN": "【碾】【輦】【念】"
  },
  {
    "character": "𗬰",
    "GX": "ṇi²",
    "GHC": "dźji²",
    "explanationEN": "male",
    "explanationCN": "雄男"
  },
  {
    "character": "𗴤",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "sentry/examination",
    "explanationCN": "哨查"
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
    "explanationEN": "peace.and.happiness",
    "explanationCN": "结缘"
  },
  {
    "character": "𗼉",
    "GX": "swe¹",
    "GHC": "sjwij¹",
    "explanationEN": "year",
    "explanationCN": "岁】"
  },
  {
    "character": "𗼎",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "a.surname",
    "explanationCN": "【弥】【弭】"
  },
  {
    "character": "𗼞",
    "GX": "qo̱ṃ²",
    "GHC": "kow²",
    "explanationEN": "government.official",
    "explanationCN": "官公"
  },
  {
    "character": "𗼢",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "a.surname",
    "explanationCN": "【叙】【舒】"
  },
  {
    "character": "𘉆",
    "GX": "tsha̱¹",
    "GHC": "tsha¹",
    "explanationEN": "mixed",
    "explanationCN": "1.杂（汉语代词）、草"
  },
  {
    "character": "𗺓",
    "GX": "twi̱h²",
    "GHC": "twẹ²",
    "explanationEN": "continue",
    "explanationCN": "续"
  },
  {
    "character": "𗁂",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "wooden.handcuffs",
    "explanationCN": "梏（手銬）"
  },
  {
    "character": "𗂷",
    "GX": "twi̱h¹",
    "GHC": "twẹ¹",
    "explanationEN": "sew/follow.the.pattern.of",
    "explanationCN": "缀袭立任"
  },
  {
    "character": "𗁉",
    "GX": "pheh¹",
    "GHC": "phjịj¹",
    "explanationEN": "slant/leaning",
    "explanationCN": "偏斜"
  },
  {
    "character": "𗆖",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "field/farmland",
    "explanationCN": "田田畴"
  },
  {
    "character": "𗆜",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "escape/flee",
    "explanationCN": "遁逃"
  },
  {
    "character": "𗄳",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "big/great/thick",
    "explanationCN": "大粗"
  },
  {
    "character": "𗄽",
    "GX": "ṣaa̱ṃ¹",
    "GHC": "śiã¹",
    "explanationEN": "hill/mountain",
    "explanationCN": "1.山】、【產】"
  },
  {
    "character": "𗂦",
    "GX": "ryir²",
    "GHC": "ꞏjir²",
    "explanationEN": "chop/kill",
    "explanationCN": "斩诛"
  },
  {
    "character": "𗹺",
    "GX": "γaa̱ṃ²",
    "GHC": "ɣiã²",
    "explanationEN": "reduce/decrease",
    "explanationCN": "减"
  },
  {
    "character": "𗀹",
    "GX": "zi¹",
    "GHC": "zji¹",
    "explanationEN": "little/young.(bird.or.beast)",
    "explanationCN": "小崽雏"
  },
  {
    "character": "𗅟",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "sharp",
    "explanationCN": "尖端"
  },
  {
    "character": "𗆏",
    "GX": "tśuh²",
    "GHC": "tśjụ²",
    "explanationEN": "goat/lamb",
    "explanationCN": "羊小羊"
  },
  {
    "character": "𗆪",
    "GX": "nye¹",
    "GHC": "ꞏji̱j¹",
    "explanationEN": "exempt/grant.a.pardon",
    "explanationCN": "减免赦"
  },
  {
    "character": "𘝑",
    "GX": "ntswi̱¹",
    "GHC": "tswe̱¹",
    "explanationEN": "sit/squat",
    "explanationCN": "坐蹲"
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
    "explanationEN": "sweat/perspiration",
    "explanationCN": "1.汗、【尚】"
  },
  {
    "character": "𗊜",
    "GX": "źu²",
    "GHC": "źju²",
    "explanationEN": "milk",
    "explanationCN": "乳】"
  },
  {
    "character": "𘊇",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "guard",
    "explanationCN": "1.监护、【尚】【商】【昌】【章】、【尝】【丞】【桑】（音 200）"
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
    "GHC": "tswụ¹",
    "explanationEN": "alms.bowl/earthen.bowl/kettle",
    "explanationCN": "鉢壶"
  },
  {
    "character": "𘉣",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "love/adore",
    "explanationCN": "恋爱慕"
  },
  {
    "character": "𗢙",
    "GX": "rnar²",
    "GHC": "njar²",
    "explanationEN": "stuffy/bored",
    "explanationCN": "闷"
  },
  {
    "character": "𗫾",
    "GX": "ləh²",
    "GHC": "ljɨ̣²",
    "explanationEN": "hare/donkey",
    "explanationCN": "1.兔、驴"
  },
  {
    "character": "𗨇",
    "GX": "tṣuo¹",
    "GHC": "tśio̱w¹",
    "explanationEN": "steal",
    "explanationCN": "1.盗窃、【謖】【勺】【竹】【筑】"
  },
  {
    "character": "𗧷",
    "GX": "llwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "space",
    "explanationCN": "间空间"
  },
  {
    "character": "𗥕",
    "GX": "zu̱²",
    "GHC": "zu²",
    "explanationEN": "tie.up",
    "explanationCN": "繫缚"
  },
  {
    "character": "𗨕",
    "GX": "mbao̱²",
    "GHC": "bio̱²",
    "explanationEN": "leprosy",
    "explanationCN": "癩疥"
  },
  {
    "character": "𗣲",
    "GX": "bao̱¹",
    "GHC": "bio¹",
    "explanationEN": "line/ranks",
    "explanationCN": "1.行列、析"
  },
  {
    "character": "𗺶",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "straw.rope",
    "explanationCN": "草绳"
  },
  {
    "character": "𗬝",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "shield",
    "explanationCN": "盾櫓龟甲"
  },
  {
    "character": "𗤥",
    "GX": "ŋah¹",
    "GHC": "ŋiạ¹",
    "explanationEN": "vast",
    "explanationCN": "广阔"
  },
  {
    "character": "𗥣",
    "GX": "tsu̱²",
    "GHC": "tsu²",
    "explanationEN": "stand.up/rise/jump",
    "explanationCN": "1.起跃、上、【祖】（音 199）"
  },
  {
    "character": "𗦮",
    "GX": "phe¹",
    "GHC": "phjij¹",
    "explanationEN": "escape/evade",
    "explanationCN": "1.逃避、【平】【瓶】【病】"
  },
  {
    "character": "𗏐",
    "GX": "ntshe̱²",
    "GHC": "tshjij²",
    "explanationEN": "",
    "explanationCN": "（讹体）"
  },
  {
    "character": "𗤢",
    "GX": "bi²",
    "GHC": "bji̱²",
    "explanationEN": "below/down",
    "explanationCN": "下"
  },
  {
    "character": "𗽆",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "low",
    "explanationCN": "低下"
  },
  {
    "character": "𗺵",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【松】草名"
  },
  {
    "character": "𗻺",
    "GX": "vah²",
    "GHC": "wjạ²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【娃】菜名"
  },
  {
    "character": "𗺥",
    "GX": "bae̱h¹",
    "GHC": "biẹj¹",
    "explanationEN": "cogongrass",
    "explanationCN": "茅"
  },
  {
    "character": "𗥪",
    "GX": "reṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "instruct/teach",
    "explanationCN": "指教教导"
  },
  {
    "character": "𗣅",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "a.surname",
    "explanationCN": "【兀】"
  },
  {
    "character": "𗣫",
    "GX": "tse̱ṃ¹",
    "GHC": "tsəj¹",
    "explanationEN": "small/little/young",
    "explanationCN": "小少幼"
  },
  {
    "character": "𗼽",
    "GX": "si̱w²",
    "GHC": "sew²",
    "explanationEN": "small",
    "explanationCN": "1.小】、【霄】【簫】"
  },
  {
    "character": "𗾙",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "little.bird",
    "explanationCN": "小鸟"
  },
  {
    "character": "𘊒",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "mouse",
    "explanationCN": "鼱小鼠"
  },
  {
    "character": "𘔱",
    "GX": "pa¹",
    "GHC": "pja¹",
    "explanationEN": "crooked/askew",
    "explanationCN": "歪斜"
  },
  {
    "character": "𗦿",
    "GX": "peṃ¹",
    "GHC": "pjɨj¹",
    "explanationEN": "border",
    "explanationCN": "1.边编】、又音【邴】（音 194）【丙】（珠 096）【并】（珠 345）【饼】（珠 332）【变】（珠 364）【秉】【扁】（音 194）"
  },
  {
    "character": "𗣴",
    "GX": "vwi̱ṃ¹",
    "GHC": "wẽ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【文】【汶】【闻】"
  },
  {
    "character": "𗤧",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "it/you/he/others",
    "explanationCN": "彼他你"
  },
  {
    "character": "𗻍",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "cattail",
    "explanationCN": "蒲】"
  },
  {
    "character": "𗥫",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "light",
    "explanationCN": "轻"
  },
  {
    "character": "𗾶",
    "GX": "hu¹",
    "GHC": "xju¹",
    "explanationEN": "void/empty",
    "explanationCN": "1.虚】、【许】【荀】"
  },
  {
    "character": "𘕀",
    "GX": "ndzi²",
    "GHC": "dzji̱²",
    "explanationEN": "know/understand",
    "explanationCN": "知晓"
  },
  {
    "character": "𘚱",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "bamboo.or.twig.fence",
    "explanationCN": "篱笆】"
  },
  {
    "character": "𗃽",
    "GX": "rvwa̱r¹",
    "GHC": "war¹",
    "explanationEN": "despaired/destitute/poor",
    "explanationCN": "穷困绝望窘"
  },
  {
    "character": "𗇌",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "fortune/luck",
    "explanationCN": "运气福气"
  },
  {
    "character": "𗐤",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "see.someone.off",
    "explanationCN": "送行"
  },
  {
    "character": "𗐢",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "presently/in.a.moment",
    "explanationCN": "俄倾"
  },
  {
    "character": "𗇎",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "yoke/chains/shackles/fetters",
    "explanationCN": "枷锁"
  },
  {
    "character": "𗐟",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "natural.resources/resources",
    "explanationCN": "资源"
  },
  {
    "character": "𗐧",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "present.(a.gift)",
    "explanationCN": "馈赠"
  },
  {
    "character": "𗇋",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "ɴᴍʟᴢ:ᴀ",
    "explanationCN": "ɴᴍʟᴢ:ᴀ"
  },
  {
    "character": "𘛃",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "seat/place/official.title",
    "explanationCN": "1.座位官爵、职"
  },
  {
    "character": "𗐡",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "presently/in.a.moment",
    "explanationCN": "俄顷一会儿"
  },
  {
    "character": "𗐣",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "enjoin/tell",
    "explanationCN": "1.嘱咐吩咐、赠送"
  },
  {
    "character": "𗐝",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "butter",
    "explanationCN": "熟酥"
  },
  {
    "character": "𘝕",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "a.surname",
    "explanationCN": "【乃】【迺】"
  },
  {
    "character": "𗐦",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "bridal.chamber",
    "explanationCN": "洞房"
  },
  {
    "character": "𗐞",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "butter",
    "explanationCN": "熟酥"
  },
  {
    "character": "𗇖",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "twine/wind/tie.up",
    "explanationCN": "缠缚"
  },
  {
    "character": "𗇔",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "fall/sink",
    "explanationCN": "失落"
  },
  {
    "character": "𗐠",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "give.as.present/present.a.gift",
    "explanationCN": "1.赠、嘱咐、知"
  },
  {
    "character": "𗐥",
    "GX": "qwə̱¹",
    "GHC": "kwə¹",
    "explanationEN": "fortune/luck",
    "explanationCN": "运气福气"
  },
  {
    "character": "𘟙",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "king/monarch",
    "explanationCN": "1.王、与结合，具有“诸侯”之义、与?结合，具有“金刚”之义"
  },
  {
    "character": "𗇏",
    "GX": "le²",
    "GHC": "ljij²",
    "explanationEN": "a.surname",
    "explanationCN": "【令】【龄】"
  },
  {
    "character": "𗇐",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "build",
    "explanationCN": "修造医治"
  },
  {
    "character": "𗇙",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "extricate",
    "explanationCN": "解脱"
  },
  {
    "character": "𗇍",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "catch.fire",
    "explanationCN": "起火"
  },
  {
    "character": "𗇘",
    "GX": "lhi̱w²",
    "GHC": "lhew²",
    "explanationEN": "extricate",
    "explanationCN": "解脱"
  },
  {
    "character": "𗇊",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【定】【亭】【鐡】【蝶】【听】"
  },
  {
    "character": "𗇓",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "rope/fasten",
    "explanationCN": "捆绑"
  },
  {
    "character": "𗇗",
    "GX": "rzi̱r¹",
    "GHC": "zer¹",
    "explanationEN": "fasten/tie.up",
    "explanationCN": "1.繫缚、悬"
  },
  {
    "character": "𗇑",
    "GX": "ha̱²",
    "GHC": "xa²",
    "explanationEN": "happy/open.wide",
    "explanationCN": "舒坦敞开"
  },
  {
    "character": "𗇕",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "open.wide",
    "explanationCN": "舒坦敞开"
  },
  {
    "character": "𗇒",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "rope/fasten",
    "explanationCN": "1.绳索捆绑动词、逸"
  },
  {
    "character": "𗭆",
    "GX": "ta̱h¹",
    "GHC": "tạ¹",
    "explanationEN": "mound/hillock",
    "explanationCN": "丘"
  },
  {
    "character": "𗭌",
    "GX": "do̱ṃ²",
    "GHC": "dow²",
    "explanationEN": "shin/leg",
    "explanationCN": "脛腿"
  },
  {
    "character": "𗭍",
    "GX": "dźeh¹",
    "GHC": "dźjịj¹",
    "explanationEN": "go/send",
    "explanationCN": "1.行遣、用进、设狩"
  },
  {
    "character": "𗭈",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "overflow/spill",
    "explanationCN": "满溢"
  },
  {
    "character": "𘀆",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "ɪɴᴛʀɢ/ᴏᴘᴛ:ᴅᴏᴡɴ",
    "explanationCN": "ɪɴᴛʀɢ/ᴏᴘᴛ:ᴅᴏᴡɴ"
  },
  {
    "character": "𘛄",
    "GX": "???",
    "GHC": "",
    "explanationEN": "official.title/the.rank.of.nobility",
    "explanationCN": "（见3865312522）"
  },
  {
    "character": "𗭡",
    "GX": "rtswər¹",
    "GHC": "tsjwɨr¹",
    "explanationEN": "group/line",
    "explanationCN": "队"
  },
  {
    "character": "𘀐",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "six/the.sixth",
    "explanationCN": "六第六"
  },
  {
    "character": "𘀔",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "cattail",
    "explanationCN": "蒲】"
  },
  {
    "character": "𘀕",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "spot/stain/speckle",
    "explanationCN": "斑点"
  },
  {
    "character": "𘕂",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "go/parade",
    "explanationCN": "行游行"
  },
  {
    "character": "𘊺",
    "GX": "nwə²",
    "GHC": "njwɨ²",
    "explanationEN": "burn",
    "explanationCN": "燃烧"
  },
  {
    "character": "𘋀",
    "GX": "rgur²",
    "GHC": "gjur²",
    "explanationEN": "happy",
    "explanationCN": "娱乐"
  },
  {
    "character": "𗭥",
    "GX": "rpar²",
    "GHC": "pjar²",
    "explanationEN": "incomplete/fragmentary",
    "explanationCN": "残缺"
  },
  {
    "character": "𗭤",
    "GX": "puh¹",
    "GHC": "pjụ¹",
    "explanationEN": "incomplete/fragmentary",
    "explanationCN": "残缺"
  },
  {
    "character": "𗭏",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "fetters",
    "explanationCN": "桎镣"
  },
  {
    "character": "𘕃",
    "GX": "dźe¹",
    "GHC": "dźjij¹",
    "explanationEN": "comment/prepare",
    "explanationCN": "议论筹议"
  },
  {
    "character": "𘋇",
    "GX": "fi¹",
    "GHC": "xjwi¹",
    "explanationEN": "mouse/rat",
    "explanationCN": "1.鼠、【惠】、【肺】（珠 186）【掸】（珠 286）【徽】（珠 281）【擕】（珠 096）【髮】（珠 313）、【飞】【妃】【费】（音 194）"
  },
  {
    "character": "𗭓",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "shoes",
    "explanationCN": "鞋】"
  },
  {
    "character": "𗭇",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "shin",
    "explanationCN": "1.脛、膊"
  },
  {
    "character": "𗭚",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "fetters",
    "explanationCN": "桎镣"
  },
  {
    "character": "𗭙",
    "GX": "???",
    "GHC": "",
    "explanationEN": "extract",
    "explanationCN": "抽"
  },
  {
    "character": "𘊷",
    "GX": "nu̱h¹",
    "GHC": "nụ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【奴】【怒】"
  },
  {
    "character": "𘛅",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "official.title/the.rank.of.nobility",
    "explanationCN": "官爵"
  },
  {
    "character": "𘀓",
    "GX": "tse̱?",
    "GHC": "tsej",
    "explanationEN": "rat/mouse",
    "explanationCN": "鼠"
  },
  {
    "character": "𘛈",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "household.utensils/containers",
    "explanationCN": "器皿"
  },
  {
    "character": "𘀶",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "flour.sifter",
    "explanationCN": "萝"
  },
  {
    "character": "𘀠",
    "GX": "kwih¹",
    "GHC": "kjwị¹",
    "explanationEN": "full/filled",
    "explanationCN": "饱满"
  },
  {
    "character": "𗭫",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【壁】【卑】、闭】"
  },
  {
    "character": "𘊣",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "“Yang”.(the.positive.side).of.the.Chinese.“Yin-yang”.concept",
    "explanationCN": "阳"
  },
  {
    "character": "𘁀",
    "GX": "rkir¹",
    "GHC": "kjir¹",
    "explanationEN": "woolens",
    "explanationCN": "毛料"
  },
  {
    "character": "𘀪",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "meat.stuffing/sausage",
    "explanationCN": "肉馅香肠"
  },
  {
    "character": "𘀝",
    "GX": "ywə¹",
    "GHC": "ꞏjwɨ¹",
    "explanationEN": "hunger",
    "explanationCN": "饥饿"
  },
  {
    "character": "𘀴",
    "GX": "zwaṃ²",
    "GHC": "zjwã²",
    "explanationEN": "revolve/rotate",
    "explanationCN": "旋】"
  },
  {
    "character": "𘀬",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "bag/pocket/sack",
    "explanationCN": "囊袋"
  },
  {
    "character": "𘀧",
    "GX": "me¹",
    "GHC": "mjij¹",
    "explanationEN": "lower.limbs/legs",
    "explanationCN": "下肢"
  },
  {
    "character": "𘚿",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【酩】【冥】【命】"
  },
  {
    "character": "𘛇",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "utensils",
    "explanationCN": "具】"
  },
  {
    "character": "𘀨",
    "GX": "???",
    "GHC": "",
    "explanationEN": "a.kind.of.ghost",
    "explanationCN": "孤鬼"
  },
  {
    "character": "𘊤",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "stuff",
    "explanationCN": "塞满"
  },
  {
    "character": "𘀞",
    "GX": "rzer¹",
    "GHC": "zjijr¹",
    "explanationEN": "filled/full",
    "explanationCN": "饱满"
  },
  {
    "character": "𘟏",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "power/might",
    "explanationCN": "威力"
  },
  {
    "character": "𘀩",
    "GX": "rgwar²",
    "GHC": "gjwar²",
    "explanationEN": "lower.limbs/legs",
    "explanationCN": "下肢股脛"
  },
  {
    "character": "𗭟",
    "GX": "le¹",
    "GHC": "ljij¹",
    "explanationEN": "convulsion",
    "explanationCN": "痉（痉挛）"
  },
  {
    "character": "𗭜",
    "GX": "ndẓaa̱²",
    "GHC": "dźia̱²",
    "explanationEN": "lameness",
    "explanationCN": "跛蹶"
  },
  {
    "character": "𘀌",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "buffalo.gnat",
    "explanationCN": "虻蚋"
  },
  {
    "character": "𘀜",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "locust",
    "explanationCN": "蝗虫"
  },
  {
    "character": "𘛀",
    "GX": "mbe²",
    "GHC": "bji̱j²",
    "explanationEN": "a.surname",
    "explanationCN": "【】"
  },
  {
    "character": "𘊳",
    "GX": "bo̱¹",
    "GHC": "bo¹",
    "explanationEN": "line/march",
    "explanationCN": "1.队、林、榭"
  },
  {
    "character": "𘀇",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "invade",
    "explanationCN": "侵"
  },
  {
    "character": "𘀋",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "excrement/dung",
    "explanationCN": "粪屎"
  },
  {
    "character": "𗐨",
    "GX": "ṣai̱¹",
    "GHC": "śie¹",
    "explanationEN": "rare/sparse",
    "explanationCN": "1.疏】、【率】【舒】【书】、【树】（珠 235）【梳】（珠 254）【书】（珠 276）【鼠】（珠 164）【数】（珠 264）【庶】（珠 293）【蔬】（珠 144）【恕】（音 200）"
  },
  {
    "character": "𘊶",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "aunt/father's.sisters",
    "explanationCN": "姑"
  },
  {
    "character": "𘀷",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "fruit",
    "explanationCN": "果实"
  },
  {
    "character": "𗭬",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【壁】【蜱】【蛆】虫名"
  },
  {
    "character": "𘀹",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【竭】虫名"
  },
  {
    "character": "𘀼",
    "GX": "ni̱h¹",
    "GHC": "nẹ¹",
    "explanationEN": "give.a.speech/publicize",
    "explanationCN": "宣演说"
  },
  {
    "character": "𘀻",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "grow/increase",
    "explanationCN": "增长"
  },
  {
    "character": "𘀟",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "belly/abdomen/stomach",
    "explanationCN": "1.腹肚、胎、妊"
  },
  {
    "character": "𘀡",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【稊】（骆驼刺）（草名）"
  },
  {
    "character": "𘀾",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "old/aged",
    "explanationCN": "老"
  },
  {
    "character": "𘊫",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "a.surname",
    "explanationCN": "【跋】【帕】"
  },
  {
    "character": "𘀘",
    "GX": "mphe̱¹",
    "GHC": "phe̱j¹",
    "explanationEN": "cover/block",
    "explanationCN": "覆盖遮蔽"
  },
  {
    "character": "𘋂",
    "GX": "phu¹",
    "GHC": "phju¹",
    "explanationEN": "feast/banquet",
    "explanationCN": "筵宴"
  },
  {
    "character": "𘀚",
    "GX": "tṣhao̱¹",
    "GHC": "tśhio¹",
    "explanationEN": "origin/source",
    "explanationCN": "本源"
  },
  {
    "character": "𘋈",
    "GX": "nao̱h²",
    "GHC": "niọ²",
    "explanationEN": "rat",
    "explanationCN": "鼠"
  },
  {
    "character": "𗭐",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "proper/upright/regular",
    "explanationCN": "端正"
  },
  {
    "character": "𘀏",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "a.surname",
    "explanationCN": "【布】【博】【北】"
  },
  {
    "character": "𘀈",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "soil/land",
    "explanationCN": "坤地"
  },
  {
    "character": "𘀑",
    "GX": "pu̱¹",
    "GHC": "pu¹",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鵓】鸟名"
  },
  {
    "character": "𗭞",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "step/pace",
    "explanationCN": "步"
  },
  {
    "character": "𘀊",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "a.surname",
    "explanationCN": "【勒】"
  },
  {
    "character": "𘊸",
    "GX": "ba̱²",
    "GHC": "ba²",
    "explanationEN": "mother-in-law",
    "explanationCN": "婆婆岳母"
  },
  {
    "character": "𘊥",
    "GX": "dź??",
    "GHC": "dź-",
    "explanationEN": "clear.away",
    "explanationCN": "清除"
  },
  {
    "character": "𗭪",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "IFR/NMLZ",
    "explanationCN": "IFR; NMLZ"
  },
  {
    "character": "𘋌",
    "GX": "ntśə¹",
    "GHC": "tśjɨ̱¹",
    "explanationEN": "sew/patch.up",
    "explanationCN": "缝补"
  },
  {
    "character": "𘊦",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "a.classifier",
    "explanationCN": "次根"
  },
  {
    "character": "𘊪",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "arrow",
    "explanationCN": "矢】"
  },
  {
    "character": "𘀵",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "bow/salute",
    "explanationCN": "鞠躬敬礼"
  },
  {
    "character": "𘊬",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "even/equal",
    "explanationCN": "均匀"
  },
  {
    "character": "𗭢",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "support/sustain",
    "explanationCN": "支撑垫"
  },
  {
    "character": "𘀙",
    "GX": "bo²",
    "GHC": "bjo²",
    "explanationEN": "clear/obvious",
    "explanationCN": "明白分明"
  },
  {
    "character": "𗭛",
    "GX": "sweṃ²",
    "GHC": "sjwɨj²",
    "explanationEN": "heel",
    "explanationCN": "踵跟"
  },
  {
    "character": "𘀎",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "dark/dim",
    "explanationCN": "黑暗"
  },
  {
    "character": "𘀍",
    "GX": "na²",
    "GHC": "nja²",
    "explanationEN": "you",
    "explanationCN": "你汝子"
  },
  {
    "character": "𘀒",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "name.of.a.star",
    "explanationCN": "参"
  },
  {
    "character": "𘀖",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "blush",
    "explanationCN": "赤面"
  },
  {
    "character": "𘋃",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "melt/smelt",
    "explanationCN": "冶熔融熔"
  },
  {
    "character": "𗭦",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "support/sustain",
    "explanationCN": "支撑"
  },
  {
    "character": "𗭨",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "unreal.image",
    "explanationCN": "幻影"
  },
  {
    "character": "𘀮",
    "GX": "lhə̱¹",
    "GHC": "lhə¹",
    "explanationEN": "shrink/contract",
    "explanationCN": "抽缩收缩卷缩"
  },
  {
    "character": "𘀦",
    "GX": "me²",
    "GHC": "mjij²",
    "explanationEN": "stars",
    "explanationCN": "宿"
  },
  {
    "character": "𘀭",
    "GX": "qwae̱²",
    "GHC": "kiwej²",
    "explanationEN": "true/precious",
    "explanationCN": "珍真精"
  },
  {
    "character": "𘀫",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "foe/enemy",
    "explanationCN": "敌敌寇"
  },
  {
    "character": "𘊱",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "half/side",
    "explanationCN": "半偏旁片"
  },
  {
    "character": "𘝘",
    "GX": "yiw¹",
    "GHC": "ꞏjiw¹",
    "explanationEN": "disease/illness",
    "explanationCN": "疾病病患疫"
  },
  {
    "character": "𗐩",
    "GX": "ṣai̱¹",
    "GHC": "śie¹",
    "explanationEN": "a.surname",
    "explanationCN": "【庶】【率】"
  },
  {
    "character": "𘝗",
    "GX": "yiw¹",
    "GHC": "ꞏjiw¹",
    "explanationEN": "a.surname",
    "explanationCN": "【姚】【攸】【繇】【瑶】【陶】【尧】"
  },
  {
    "character": "𘞣",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "wooden.saddle",
    "explanationCN": "鞍木"
  },
  {
    "character": "𘞡",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "colored.glaze",
    "explanationCN": "琉璃"
  },
  {
    "character": "𘋎",
    "GX": "kwa̱ṃ¹",
    "GHC": "khã¹",
    "explanationEN": "strings.for.a.saddle",
    "explanationCN": "鞍索"
  },
  {
    "character": "𗭝",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "bottom/base",
    "explanationCN": "底"
  },
  {
    "character": "𗭕",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "tread.on/trample",
    "explanationCN": "踩踏"
  },
  {
    "character": "𗭔",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "tread.on/trample",
    "explanationCN": "践踏踩"
  },
  {
    "character": "𘀛",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "dirty/filthy",
    "explanationCN": "骯脏"
  },
  {
    "character": "𘕈",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "realize/wake.up.reality",
    "explanationCN": "悟醒"
  },
  {
    "character": "𘊾",
    "GX": "kaw¹",
    "GHC": "kja̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【迦】【羯】【鳩】"
  },
  {
    "character": "𘊵",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "skill/artistry",
    "explanationCN": "艺技艺"
  },
  {
    "character": "𘀗",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "sky/heaven",
    "explanationCN": "天乾"
  },
  {
    "character": "𘊴",
    "GX": "thu̱¹",
    "GHC": "thu¹",
    "explanationEN": "talk/speak",
    "explanationCN": "1.言谈说、设制、结、【屠】【杜】【敦】、2【涂】（珠 361）【肚】（珠 191）【兔】（珠 162）【碡】（珠 265）、【徒】【度】【菟】【吐】【土】（音 195）"
  },
  {
    "character": "𘕄",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "upright/honorable",
    "explanationCN": "刚正"
  },
  {
    "character": "𘕇",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "butter",
    "explanationCN": "熟酥"
  },
  {
    "character": "𘝖",
    "GX": "yiw¹",
    "GHC": "ꞏjiw¹",
    "explanationEN": "oil/fat/grease",
    "explanationCN": "油"
  },
  {
    "character": "𘊽",
    "GX": "thi̱ṃ²",
    "GHC": "thẽ²",
    "explanationEN": "a.surname",
    "explanationCN": "【腾】【邓】"
  },
  {
    "character": "𘋁",
    "GX": "dźwi¹",
    "GHC": "dźjwi¹",
    "explanationEN": "melt/eliminate",
    "explanationCN": "熔融消毁"
  },
  {
    "character": "𘟚",
    "GX": "də¹",
    "GHC": "djɨ¹",
    "explanationEN": "imperial.edict",
    "explanationCN": "詔敕"
  },
  {
    "character": "𘋆",
    "GX": "rfwa̱r¹",
    "GHC": "xjwe¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【敷】"
  },
  {
    "character": "𗭗",
    "GX": "paə̱²",
    "GHC": "piə²",
    "explanationEN": "boots",
    "explanationCN": "靴"
  },
  {
    "character": "𘀉",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "bird",
    "explanationCN": "禽雀"
  },
  {
    "character": "𗭣",
    "GX": "thwo̱¹",
    "GHC": "thwo¹",
    "explanationEN": "pad/put.something.under.something.else",
    "explanationCN": "垫"
  },
  {
    "character": "𘊿",
    "GX": "ba̱²",
    "GHC": "ba²",
    "explanationEN": "cherish/treasure",
    "explanationCN": "惜"
  },
  {
    "character": "𗭋",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "a.horse.with.white.trotters",
    "explanationCN": "白蹄"
  },
  {
    "character": "𗭘",
    "GX": "ntsa̱¹",
    "GHC": "tsa̱¹",
    "explanationEN": "legs/shin",
    "explanationCN": "腿脛"
  },
  {
    "character": "𘛉",
    "GX": "ntswə¹",
    "GHC": "tsjwɨ̱¹",
    "explanationEN": "pot/jar",
    "explanationCN": "罐"
  },
  {
    "character": "𘕉",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "taste/flavor",
    "explanationCN": "味】"
  },
  {
    "character": "𘀣",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "grease",
    "explanationCN": "膏"
  },
  {
    "character": "𘕊",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "smell/taste",
    "explanationCN": "味"
  },
  {
    "character": "𘋋",
    "GX": "dwu²",
    "GHC": "djwu²",
    "explanationEN": "mend/patch/repair",
    "explanationCN": "补"
  },
  {
    "character": "𘋉",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "do/make",
    "explanationCN": "做作"
  },
  {
    "character": "𘞠",
    "GX": "mpho²",
    "GHC": "phjo̱²",
    "explanationEN": "gentle/harmonious",
    "explanationCN": "温柔;和谐"
  },
  {
    "character": "𘛆",
    "GX": "sweṃh¹",
    "GHC": "sjwɨ̣j¹",
    "explanationEN": "casket/a.small.box.(case)",
    "explanationCN": "匣"
  },
  {
    "character": "𘀢",
    "GX": "tha̱¹",
    "GHC": "tha¹",
    "explanationEN": "camel",
    "explanationCN": "驼"
  },
  {
    "character": "𘀽",
    "GX": "ntshi²",
    "GHC": "tshji̱²",
    "explanationEN": "speak.ʙ",
    "explanationCN": "说.ʙ"
  },
  {
    "character": "𘊧",
    "GX": "ṇiw²",
    "GHC": "dźjiw²",
    "explanationEN": "a.transliteration",
    "explanationCN": "熄"
  },
  {
    "character": "𘀰",
    "GX": "tsha²",
    "GHC": "tshja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【擦】"
  },
  {
    "character": "𘋊",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "play/sport",
    "explanationCN": "嬉戏嬉闹"
  },
  {
    "character": "𘀯",
    "GX": "ma̱h²",
    "GHC": "mạ²",
    "explanationEN": "spread/scatter",
    "explanationCN": "散布散落"
  },
  {
    "character": "𗭩",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "foolish/stupid",
    "explanationCN": "愚蠢"
  },
  {
    "character": "𘀥",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "stomach/belly",
    "explanationCN": "胃肚"
  },
  {
    "character": "𘊨",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "eliminate/get.rid.of",
    "explanationCN": "1.除去、【头】"
  },
  {
    "character": "𘁁",
    "GX": "ndze²",
    "GHC": "dzji̱j²",
    "explanationEN": "cut.out",
    "explanationCN": "裁缝】"
  },
  {
    "character": "𘊮",
    "GX": "rtar¹",
    "GHC": "tjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【答】"
  },
  {
    "character": "𘋅",
    "GX": "sa̱ṃ¹",
    "GHC": "sã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【山】【三】【珊】、【散】（音 198）"
  },
  {
    "character": "𘊹",
    "GX": "kaw¹",
    "GHC": "kja̱¹",
    "explanationEN": "foundation/basis/burden",
    "explanationCN": "1.根脚根基负重、【葛】、【藁】（音 197）"
  },
  {
    "character": "𘊻",
    "GX": "nə¹",
    "GHC": "njɨ¹",
    "explanationEN": "mother-in-law",
    "explanationCN": "岳母姑婆"
  },
  {
    "character": "𘊼",
    "GX": "thwe̱¹",
    "GHC": "thwej¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【腿】【兑】【退】"
  },
  {
    "character": "𗭭",
    "GX": "dəh¹",
    "GHC": "djɨ̣¹",
    "explanationEN": "smash/grain",
    "explanationCN": "碎"
  },
  {
    "character": "𗭊",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "ɪɴᴛʀɢ/ᴏᴘᴛ:ᴜᴘ/ᴄᴏɴᴛ",
    "explanationCN": "ɪɴᴛʀɢ/ᴏᴘᴛ:ᴜᴘ/ᴄᴏɴᴛ"
  },
  {
    "character": "𗭒",
    "GX": "khə¹",
    "GHC": "khjɨ¹",
    "explanationEN": "foot",
    "explanationCN": "脚足"
  },
  {
    "character": "𗭠",
    "GX": "qha̱ṃ²",
    "GHC": "khã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【考】"
  },
  {
    "character": "𘕆",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "bear.(a.burden)/shoulder",
    "explanationCN": "1.担】、丹郸"
  },
  {
    "character": "𘕁",
    "GX": "rzər¹",
    "GHC": "zjɨr¹",
    "explanationEN": "note/record",
    "explanationCN": "记名词"
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
    "explanationEN": "look.for",
    "explanationCN": "寻"
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
    "GHC": "ꞏju̱¹",
    "explanationEN": "taste",
    "explanationCN": "1.尝、闻齅、食"
  },
  {
    "character": "𘛊",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "firm",
    "explanationCN": "牢厚"
  },
  {
    "character": "𘀸",
    "GX": "zwaṃ²",
    "GHC": "zjwã²",
    "explanationEN": "eggplant/aubergine",
    "explanationCN": "茄子"
  },
  {
    "character": "𘊩",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "draw.(a.bow)",
    "explanationCN": "张弓"
  },
  {
    "character": "𘀳",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【卡】【恰】"
  },
  {
    "character": "𘀺",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "draw.(water)/derive",
    "explanationCN": "1.汲取、【騫】【伽】【佉】【竭】【桀】【俭】"
  },
  {
    "character": "𘀿",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "a.kind.of.bag",
    "explanationCN": "连袋"
  },
  {
    "character": "𘀲",
    "GX": "kha²",
    "GHC": "khja²",
    "explanationEN": "#ERROR!",
    "explanationCN": "汲取"
  },
  {
    "character": "𘊭",
    "GX": "rtswə̱r²",
    "GHC": "tswər²",
    "explanationEN": "interests.(on.an.investment)",
    "explanationCN": "利息"
  },
  {
    "character": "𘊰",
    "GX": "pha̱¹",
    "GHC": "pha¹",
    "explanationEN": "damage/lose",
    "explanationCN": "1.破损、崩、亡、拔"
  },
  {
    "character": "𘊲",
    "GX": "mphaa̱²",
    "GHC": "phia̱²",
    "explanationEN": "divide/fraction",
    "explanationCN": "1.分名词、成、钱"
  },
  {
    "character": "𗭧",
    "GX": "dəh¹",
    "GHC": "djɨ̣¹",
    "explanationEN": "smash/grain",
    "explanationCN": "碎"
  },
  {
    "character": "𗭑",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "fetters",
    "explanationCN": "镣桎"
  },
  {
    "character": "𘛁",
    "GX": "mbe²",
    "GHC": "bji̱j²",
    "explanationEN": "line",
    "explanationCN": "行列"
  },
  {
    "character": "𗭉",
    "GX": "ntśə²",
    "GHC": "tśjɨ̱²",
    "explanationEN": "fall/tumble",
    "explanationCN": "蹶跌"
  },
  {
    "character": "𗭎",
    "GX": "nśi²",
    "GHC": "śji̱²",
    "explanationEN": "fall/tumble",
    "explanationCN": "蹶跌（详见4012392224）"
  },
  {
    "character": "𘕅",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "scabies",
    "explanationCN": "疥癩"
  },
  {
    "character": "𘛂",
    "GX": "mbe²",
    "GHC": "bji̱j²",
    "explanationEN": "roadside.stop/travel",
    "explanationCN": "1.驛馹行逝、客驾"
  },
  {
    "character": "𘊯",
    "GX": "twi¹",
    "GHC": "tjwi¹",
    "explanationEN": "be.choked",
    "explanationCN": "噎塞"
  },
  {
    "character": "𗺋",
    "GX": "tśhi¹",
    "GHC": "tśhji¹",
    "explanationEN": "base/origin",
    "explanationCN": "根本"
  },
  {
    "character": "𗺉",
    "GX": "tśhi²",
    "GHC": "tśhji²",
    "explanationEN": "base/origin",
    "explanationCN": "1.根本典、【尺】（珠 244）【齿】（珠 346）【滞】（珠 291）【痴】（珠 355）【治】（珠 293）【持】（珠 311）、【池】【直】（音 200）"
  },
  {
    "character": "𗢌",
    "GX": "pi̱ṃ¹",
    "GHC": "pẽ¹",
    "explanationEN": "dung/excrement",
    "explanationCN": "粪屎"
  },
  {
    "character": "𗢍",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "auspicious/lucky",
    "explanationCN": "瑞相"
  },
  {
    "character": "𗡿",
    "GX": "swa̱¹",
    "GHC": "swa¹",
    "explanationEN": "drop/eardrop",
    "explanationCN": "坠"
  },
  {
    "character": "𘚌",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "stop/stagnate",
    "explanationCN": "停止停滞"
  },
  {
    "character": "𗎶",
    "GX": "qo̱ṃ¹",
    "GHC": "kow¹",
    "explanationEN": "collapse",
    "explanationCN": "圮名词"
  },
  {
    "character": "𗍱",
    "GX": "zəh²",
    "GHC": "zjɨ̣²",
    "explanationEN": "two",
    "explanationCN": "二俱"
  },
  {
    "character": "𗎵",
    "GX": "nvu²",
    "GHC": "wju̱²",
    "explanationEN": "combine/contract",
    "explanationCN": "1.结合、收缩"
  },
  {
    "character": "𗍲",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "between/among",
    "explanationCN": "中间"
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
    "explanationEN": "you.hon",
    "explanationCN": "您"
  },
  {
    "character": "𗍪",
    "GX": "tsheṃ¹",
    "GHC": "tshjɨj¹",
    "explanationEN": "intimate/close",
    "explanationCN": "亲昵"
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
    "explanationCN": "1.吉、瑞、庆、接、【于】【玉】"
  },
  {
    "character": "𗎑",
    "GX": "rmu̱r²",
    "GHC": "mur²",
    "explanationEN": "hail",
    "explanationCN": "雹"
  },
  {
    "character": "𗎔",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "cold/frigid",
    "explanationCN": "寒"
  },
  {
    "character": "𗎗",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "cold",
    "explanationCN": "冷"
  },
  {
    "character": "𗺊",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "mineral.resources",
    "explanationCN": "矿藏"
  },
  {
    "character": "𗺍",
    "GX": "dẓwaə̱¹",
    "GHC": "dźiwə¹",
    "explanationEN": "pull/draw/tug",
    "explanationCN": "1.拉扯卷曲、拳"
  },
  {
    "character": "𗢈",
    "GX": "tsa̱¹",
    "GHC": "tsa¹",
    "explanationEN": "village",
    "explanationCN": "1.寨、固"
  },
  {
    "character": "𗎺",
    "GX": "vwa̱²",
    "GHC": "wa¹",
    "explanationEN": "a.figure.of.sitting",
    "explanationCN": "趺"
  },
  {
    "character": "𗍰",
    "GX": "poh²",
    "GHC": "pjọ²",
    "explanationEN": "ride",
    "explanationCN": "乘骑"
  },
  {
    "character": "𘔯",
    "GX": "ŋkhau̱¹",
    "GHC": "khju̱¹",
    "explanationEN": "greet",
    "explanationCN": "迎接"
  },
  {
    "character": "𗎃",
    "GX": "qai̱²",
    "GHC": "kie²",
    "explanationEN": "detest/abhor",
    "explanationCN": "厌恶"
  },
  {
    "character": "𗎉",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "cold/frigid",
    "explanationCN": "1.寒冷、【伋】"
  },
  {
    "character": "𗎐",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "harm/danger",
    "explanationCN": "危害损害伤害"
  },
  {
    "character": "𗢊",
    "GX": "vuh²",
    "GHC": "wjụ²",
    "explanationEN": "dung/excrement",
    "explanationCN": "粪屎"
  },
  {
    "character": "𗢀",
    "GX": "swa̱¹",
    "GHC": "swa¹",
    "explanationEN": "hair",
    "explanationCN": "1.髮帘、【莎】【索】【锁】【酸】"
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
    "explanationCN": "脚足"
  },
  {
    "character": "𗍬",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "a.unit.of.weight",
    "explanationCN": "1.两、付"
  },
  {
    "character": "𗍩",
    "GX": "hə²",
    "GHC": "xjɨ²",
    "explanationEN": "calamity/disaster",
    "explanationCN": "1.灾难、囈动词、【胁】"
  },
  {
    "character": "𗍨",
    "GX": "rzu̱r²",
    "GHC": "zur²",
    "explanationEN": "message/letter",
    "explanationCN": "信"
  },
  {
    "character": "𗎓",
    "GX": "rkiwr¹",
    "GHC": "kjiwr¹",
    "explanationEN": "cold/frigid",
    "explanationCN": "寒冷"
  },
  {
    "character": "𗎒",
    "GX": "da̱h²",
    "GHC": "dạ²",
    "explanationEN": "cold",
    "explanationCN": "冷"
  },
  {
    "character": "𗎈",
    "GX": "γwo̱ṃh¹",
    "GHC": "ꞏwọ¹",
    "explanationEN": "ice",
    "explanationCN": "冰"
  },
  {
    "character": "𗎸",
    "GX": "tśa²",
    "GHC": "tśja²",
    "explanationEN": "sled/sledge/sleigh",
    "explanationCN": "爬犁（雪橇）"
  },
  {
    "character": "𗍴",
    "GX": "rdi̱r²",
    "GHC": "de̱r²",
    "explanationEN": "a.unit.of.measurement",
    "explanationCN": "圭"
  },
  {
    "character": "𘉤",
    "GX": "rvwi̱r¹",
    "GHC": "wei¹",
    "explanationEN": "meet/see",
    "explanationCN": "遇逢会"
  },
  {
    "character": "𗢋",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "give.birth",
    "explanationCN": "生產"
  },
  {
    "character": "𗺏",
    "GX": "yeṃ²",
    "GHC": "ꞏjɨj²",
    "explanationEN": "socks",
    "explanationCN": "1.袜、装入"
  },
  {
    "character": "𗺎",
    "GX": "ntśhə¹",
    "GHC": "tśhjɨ̱¹",
    "explanationEN": "examine",
    "explanationCN": "审核考查"
  },
  {
    "character": "𗎹",
    "GX": "mbu²",
    "GHC": "bju̱²",
    "explanationEN": "contract/shrink",
    "explanationCN": "缩"
  },
  {
    "character": "𗳂",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "fine.horse/steed",
    "explanationCN": "骏马"
  },
  {
    "character": "𘓪",
    "GX": "beh¹",
    "GHC": "bjịj¹",
    "explanationEN": "sandalwood",
    "explanationCN": "檀"
  },
  {
    "character": "𘇒",
    "GX": "rvwai̱r¹",
    "GHC": "wier¹",
    "explanationEN": "cherish.ᴀ/treasure.ᴀ",
    "explanationCN": "爱惜.ᴀ"
  },
  {
    "character": "𘇓",
    "GX": "rvwao̱r¹",
    "GHC": "wior¹",
    "explanationEN": "cherish.ʙ/treasure.ʙ",
    "explanationCN": "爱惜.ʙ"
  },
  {
    "character": "𗗑",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "live/strong/robust",
    "explanationCN": "活壮形容词"
  },
  {
    "character": "𗗏",
    "GX": "rpwər¹",
    "GHC": "pjwɨ̱r¹",
    "explanationEN": "advise/urge",
    "explanationCN": "劝諫"
  },
  {
    "character": "𘀅",
    "GX": "ŋgu²",
    "GHC": "gju̱²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【蛹】虫名"
  },
  {
    "character": "𗳁",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "fete/present.(a.gift)",
    "explanationCN": "赐筵馈赠"
  },
  {
    "character": "𗗎",
    "GX": "rpwər¹",
    "GHC": "pjwɨ̱r¹",
    "explanationEN": "advise/urge",
    "explanationCN": "劝諫"
  },
  {
    "character": "𗲿",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "catkin",
    "explanationCN": "1.絮、结合"
  },
  {
    "character": "𘇐",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "esteem/worship/uphold",
    "explanationCN": "1.尊崇、尚用副词"
  },
  {
    "character": "𗗒",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "land/soil",
    "explanationCN": "土地"
  },
  {
    "character": "𗗐",
    "GX": "yiw²",
    "GHC": "ꞏjiw²",
    "explanationEN": "life",
    "explanationCN": "生命"
  },
  {
    "character": "𗳀",
    "GX": "me̱²",
    "GHC": "mej²",
    "explanationEN": "soft",
    "explanationCN": "绵软"
  },
  {
    "character": "𘇔",
    "GX": "ndza¹",
    "GHC": "dzja̱¹",
    "explanationEN": "thrifty/frugal",
    "explanationCN": "1.俭、治、【昝】"
  },
  {
    "character": "𘇕",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "cherish",
    "explanationCN": "珍惜"
  },
  {
    "character": "𗎏",
    "GX": "meh¹",
    "GHC": "mjịj¹",
    "explanationEN": "cold/frigid",
    "explanationCN": "寒冷"
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
    "explanationEN": "back/spine",
    "explanationCN": "脊"
  },
  {
    "character": "𗎋",
    "GX": "rvwə̱r²",
    "GHC": "wər²",
    "explanationEN": "dirty/filthy",
    "explanationCN": "脏污"
  },
  {
    "character": "𗎅",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "contend/vie/strive",
    "explanationCN": "分"
  },
  {
    "character": "𗎊",
    "GX": "re̱r¹",
    "GHC": "rejr¹",
    "explanationEN": "the.twelfth.lunar.month",
    "explanationCN": "腊月"
  },
  {
    "character": "𘇑",
    "GX": "γu̱¹",
    "GHC": "ɣu¹",
    "explanationEN": "exchange/change",
    "explanationCN": "交换;更改"
  },
  {
    "character": "𗢉",
    "GX": "tsa̱¹",
    "GHC": "tsa¹",
    "explanationEN": "firm",
    "explanationCN": "牢固"
  },
  {
    "character": "𗎷",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "connect",
    "explanationCN": "交络"
  },
  {
    "character": "𗍯",
    "GX": "???",
    "GHC": "",
    "explanationEN": "(tree).branch/twig",
    "explanationCN": "杈丫枝（丫杈）"
  },
  {
    "character": "𗍮",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "lamb",
    "explanationCN": "小羊"
  },
  {
    "character": "𗍭",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【凉】【梁】【粮】【良】【亮】】、【陇】"
  },
  {
    "character": "𗎌",
    "GX": "dźuo²",
    "GHC": "dźio̱w¹",
    "explanationEN": "cold/frigid",
    "explanationCN": "寒冷"
  },
  {
    "character": "𗎎",
    "GX": "qwai̱¹",
    "GHC": "kwie¹",
    "explanationEN": "frigid",
    "explanationCN": "寒"
  },
  {
    "character": "𗎆",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "snow",
    "explanationCN": "雪"
  },
  {
    "character": "𗎍",
    "GX": "qhai̱¹",
    "GHC": "khie¹",
    "explanationEN": "detest.ᴀ",
    "explanationCN": "厌恶憎怠苦"
  },
  {
    "character": "𗞯",
    "GX": "hau̱²",
    "GHC": "xu²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【瓠】树名"
  },
  {
    "character": "𗞳",
    "GX": "śwu²",
    "GHC": "śjwu²",
    "explanationEN": "winding.corridor/ambulatory",
    "explanationCN": "迴廊"
  },
  {
    "character": "𗚌",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "tail/backside",
    "explanationCN": "尾屁股"
  },
  {
    "character": "𗚏",
    "GX": "ṣaa̱¹",
    "GHC": "śia¹",
    "explanationEN": "Chinese.fir",
    "explanationCN": "杉】"
  },
  {
    "character": "𗝼",
    "GX": "dih²",
    "GHC": "djị²",
    "explanationEN": "agalloch/agalwood",
    "explanationCN": "沉香"
  },
  {
    "character": "𗚠",
    "GX": "qhu̱²",
    "GHC": "khu²",
    "explanationEN": "basket",
    "explanationCN": "筐篮笼篋量词"
  },
  {
    "character": "𗚑",
    "GX": "do̱¹",
    "GHC": "do¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【毒】树名"
  },
  {
    "character": "𗚻",
    "GX": "śeṃ²",
    "GHC": "śjɨj²",
    "explanationEN": "litre/a.unit.of.measurement",
    "explanationCN": "升供量词"
  },
  {
    "character": "𗜹",
    "GX": "lhih¹",
    "GHC": "ljị¹",
    "explanationEN": "enter",
    "explanationCN": "进入"
  },
  {
    "character": "𗜂",
    "GX": "γao̱h¹",
    "GHC": "ꞏiọ²",
    "explanationEN": "garden/yard",
    "explanationCN": "园"
  },
  {
    "character": "𗛜",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "circle/circumference",
    "explanationCN": "周匝重"
  },
  {
    "character": "𗝻",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "tree.tumor",
    "explanationCN": "树瘤"
  },
  {
    "character": "𗞲",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "collapse/cave.in",
    "explanationCN": "塌陷"
  },
  {
    "character": "𗛃",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "come/arrive",
    "explanationCN": "来"
  },
  {
    "character": "𗜟",
    "GX": "ŋgiw¹",
    "GHC": "gji̱w¹",
    "explanationEN": "a.kind.of.plant",
    "explanationCN": "【牛】草木名"
  },
  {
    "character": "𗝗",
    "GX": "no̱¹",
    "GHC": "no¹",
    "explanationEN": "roof.beam",
    "explanationCN": "辐"
  },
  {
    "character": "𗛆",
    "GX": "rvwa̱r²",
    "GHC": "war²",
    "explanationEN": "branch/twig",
    "explanationCN": "1.枝支条（弯枝）、体轮"
  },
  {
    "character": "𗛤",
    "GX": "rpa̱r²",
    "GHC": "par²",
    "explanationEN": "awning/shed",
    "explanationCN": "蓬棚"
  },
  {
    "character": "𗝉",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "a.place.name",
    "explanationCN": "1.【窝】【屋】（地名）】、负担动词"
  },
  {
    "character": "𗝄",
    "GX": "swaṃ²",
    "GHC": "sjwã²",
    "explanationEN": "revolve",
    "explanationCN": "旋】"
  },
  {
    "character": "𗝒",
    "GX": "γəh¹",
    "GHC": "ɣjɨ̣¹",
    "explanationEN": "charcoal",
    "explanationCN": "炭"
  },
  {
    "character": "𗝓",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "earthen.bowl",
    "explanationCN": "鉢盂"
  },
  {
    "character": "𗞝",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "wilderness/open.field",
    "explanationCN": "旷野"
  },
  {
    "character": "𗝳",
    "GX": "naw¹",
    "GHC": "nja̱²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【楠】树名"
  },
  {
    "character": "𗝥",
    "GX": "rmu̱r¹",
    "GHC": "mur¹",
    "explanationEN": "tree/wood",
    "explanationCN": "木】"
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
    "explanationCN": "柏】"
  },
  {
    "character": "𗞭",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "thin",
    "explanationCN": "细"
  },
  {
    "character": "𗝺",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "flood/floodwater",
    "explanationCN": "洪水;洪水"
  },
  {
    "character": "𗛄",
    "GX": "lwuh¹",
    "GHC": "ljwụ¹",
    "explanationEN": "rafter",
    "explanationCN": "栿梁"
  },
  {
    "character": "𗛨",
    "GX": "rna̱r²",
    "GHC": "nar²",
    "explanationEN": "move/shift",
    "explanationCN": "1.移易迁、惊慌"
  },
  {
    "character": "𗛪",
    "GX": "giw¹",
    "GHC": "gjiw¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【橛】树名"
  },
  {
    "character": "𗚢",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "rake",
    "explanationCN": "扒耙"
  },
  {
    "character": "𗜚",
    "GX": "dẓao̱¹",
    "GHC": "dźio¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【秫】树名"
  },
  {
    "character": "𗞍",
    "GX": "kaw¹",
    "GHC": "kja̱¹",
    "explanationEN": "pedestal/plinth",
    "explanationCN": "根脚"
  },
  {
    "character": "𗞻",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "jaw",
    "explanationCN": "頜（頦下巴）"
  },
  {
    "character": "𗞫",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "cracking.sound",
    "explanationCN": "裂音"
  },
  {
    "character": "𗟍",
    "GX": "ryur¹",
    "GHC": "ꞏjur¹",
    "explanationEN": "Chinese.crab.apple",
    "explanationCN": "擒"
  },
  {
    "character": "𗝘",
    "GX": "ṇwə̱²",
    "GHC": "nuə",
    "explanationEN": "bamboo",
    "explanationCN": "竹"
  },
  {
    "character": "𗝧",
    "GX": "tsha̱h¹",
    "GHC": "tshạ¹",
    "explanationEN": "crack/split",
    "explanationCN": "破裂"
  },
  {
    "character": "𗝜",
    "GX": "rdər²",
    "GHC": "djɨr²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【藤】草名"
  },
  {
    "character": "𗜡",
    "GX": "tsho̱ṃ²",
    "GHC": "tshow²",
    "explanationEN": "thorn.bushes",
    "explanationCN": "棘"
  },
  {
    "character": "𗞔",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "incense/fragrance",
    "explanationCN": "香"
  },
  {
    "character": "𗛩",
    "GX": "rvor¹",
    "GHC": "wjor¹",
    "explanationEN": "roof.beam",
    "explanationCN": "檩梁"
  },
  {
    "character": "𗞱",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "fragrant",
    "explanationCN": "1.香、棠"
  },
  {
    "character": "𗛗",
    "GX": "mbaa̱²",
    "GHC": "bia̱²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【麻】树名"
  },
  {
    "character": "𗝹",
    "GX": "vwu̱h¹",
    "GHC": "wụ¹",
    "explanationEN": "elm",
    "explanationCN": "榆"
  },
  {
    "character": "𗞪",
    "GX": "rγae̱r²",
    "GHC": "ꞏiejr²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【越】树名"
  },
  {
    "character": "𗞠",
    "GX": "hae̱ṃ²",
    "GHC": "xiəj²",
    "explanationEN": "apricot",
    "explanationCN": "杏】"
  },
  {
    "character": "𗚭",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiar¹",
    "explanationEN": "chop",
    "explanationCN": "1.铡剁、馅"
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
    "explanationCN": "桃子"
  },
  {
    "character": "𗚙",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "Chinese.parasol.tree",
    "explanationCN": "梧桐"
  },
  {
    "character": "𗚇",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "thick/dense",
    "explanationCN": "稠密"
  },
  {
    "character": "𗝃",
    "GX": "pae̱ṃ²",
    "GHC": "piəj²",
    "explanationEN": "bowl",
    "explanationCN": "鉢盔"
  },
  {
    "character": "𗚡",
    "GX": "nnə²",
    "GHC": "njɨ̱²",
    "explanationEN": "man/people/person",
    "explanationCN": "人庶民人民"
  },
  {
    "character": "𗚎",
    "GX": "ho̱ṃ²",
    "GHC": "xow²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【烘】树名"
  },
  {
    "character": "𗜠",
    "GX": "khwi¹",
    "GHC": "khjwi¹",
    "explanationEN": "punish.severely",
    "explanationCN": "1.苦罚、【逵】"
  },
  {
    "character": "𗜱",
    "GX": "ṣao̱²",
    "GHC": "śio²",
    "explanationEN": "pointed/sharp",
    "explanationCN": "尖细纤"
  },
  {
    "character": "𗛑",
    "GX": "rlho̱ṃr²",
    "GHC": "lhowr²",
    "explanationEN": "happiness/ease",
    "explanationCN": "乐】"
  },
  {
    "character": "𗚿",
    "GX": "liw²",
    "GHC": "ljiw²",
    "explanationEN": "gather/assemble",
    "explanationCN": "1.集结、【六】【略】【柳】【陆】、【绿】【录】（音 254）"
  },
  {
    "character": "𗜆",
    "GX": "lheh¹",
    "GHC": "lhjịj¹",
    "explanationEN": "bowl",
    "explanationCN": "鉢盔"
  },
  {
    "character": "𗚺",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "basket",
    "explanationCN": "筐子"
  },
  {
    "character": "𗛐",
    "GX": "śeh¹",
    "GHC": "śjịj¹",
    "explanationEN": "crack/split",
    "explanationCN": "破裂"
  },
  {
    "character": "𗚥",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "sugarcane",
    "explanationCN": "蔗"
  },
  {
    "character": "𗝔",
    "GX": "ru̱r²",
    "GHC": "rur²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【茹】树名"
  },
  {
    "character": "𗛇",
    "GX": "tshwa̱¹",
    "GHC": "tshwa¹",
    "explanationEN": "invade.and.harass/impale",
    "explanationCN": "刺穿"
  },
  {
    "character": "𗛀",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【果】树名"
  },
  {
    "character": "𗛧",
    "GX": "lluh¹",
    "GHC": "ljụ¹",
    "explanationEN": "flow/drift/float",
    "explanationCN": "漂流"
  },
  {
    "character": "𗚤",
    "GX": "tshe̱¹",
    "GHC": "tshej¹",
    "explanationEN": "invade.and.harass",
    "explanationCN": "穿刺"
  },
  {
    "character": "𗚒",
    "GX": "khu²",
    "GHC": "khju²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【楸】树名"
  },
  {
    "character": "𗚬",
    "GX": "rγo̱r¹",
    "GHC": "ɣor¹",
    "explanationEN": "ailanthus",
    "explanationCN": "樗】"
  },
  {
    "character": "𗚫",
    "GX": "vwe̱ṃ¹",
    "GHC": "wəj¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【歪】树名"
  },
  {
    "character": "𗜑",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "a.skilled.workman",
    "explanationCN": "技巧匠"
  },
  {
    "character": "𗛙",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "a.sleeveless.garment/waistcoat",
    "explanationCN": "褙心"
  },
  {
    "character": "𗞜",
    "GX": "ryur¹",
    "GHC": "ꞏjur¹",
    "explanationEN": "sapling",
    "explanationCN": "树苗"
  },
  {
    "character": "𗛹",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "desolate.and.boundless",
    "explanationCN": "1.荒漠苍茫、【苍】"
  },
  {
    "character": "𗛥",
    "GX": "dza̱¹",
    "GHC": "dza¹",
    "explanationEN": "chisel",
    "explanationCN": "凿名词】"
  },
  {
    "character": "𗚽",
    "GX": "du̱h¹",
    "GHC": "dụ¹",
    "explanationEN": "wilderness/open.field",
    "explanationCN": "旷野"
  },
  {
    "character": "𗚉",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "people/person/man",
    "explanationCN": "民凡民庶民人民"
  },
  {
    "character": "𗚔",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "bathe",
    "explanationCN": "噪浴沐"
  },
  {
    "character": "𗚛",
    "GX": "mu²",
    "GHC": "mju²",
    "explanationEN": "waver/move",
    "explanationCN": "动"
  },
  {
    "character": "𗚓",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "a.surname",
    "explanationCN": "【篤】【督】（）"
  },
  {
    "character": "𗚦",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "turtledove",
    "explanationCN": "鳩"
  },
  {
    "character": "𗛅",
    "GX": "du̱h²",
    "GHC": "dụ²",
    "explanationEN": "tub/bucket",
    "explanationCN": "桶筒"
  },
  {
    "character": "𗜁",
    "GX": "dźoh²",
    "GHC": "dźjọ²",
    "explanationEN": "Chinese.ink/coal",
    "explanationCN": "墨煤"
  },
  {
    "character": "𗛚",
    "GX": "dzeh¹",
    "GHC": "dzjịj²",
    "explanationEN": "boat/ship",
    "explanationCN": "船舟"
  },
  {
    "character": "𗚹",
    "GX": "ṣwaa̱ṃ¹",
    "GHC": "śiwã¹",
    "explanationEN": "bolt",
    "explanationCN": "栓动词】"
  },
  {
    "character": "𗛘",
    "GX": "qhu̱²",
    "GHC": "khu²",
    "explanationEN": "jackal/wolf",
    "explanationCN": "豺狼"
  },
  {
    "character": "𗝁",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "plough/share",
    "explanationCN": "犁"
  },
  {
    "character": "𗟋",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "roof.beam",
    "explanationCN": "1.梁、榴"
  },
  {
    "character": "𗜓",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "appear/show/sparkle",
    "explanationCN": "1.显现耀、誉叹、【单】【单】【陕】（音 199）"
  },
  {
    "character": "𗝌",
    "GX": "śa²",
    "GHC": "śja²",
    "explanationEN": "musk",
    "explanationCN": "麝】"
  },
  {
    "character": "𗝖",
    "GX": "qhe̱¹",
    "GHC": "khej¹",
    "explanationEN": "luxuriant/exuberant",
    "explanationCN": "1.茂盛、【凯】【愷】（音 197）"
  },
  {
    "character": "𗜋",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "Chinese.flowering.crab.apple",
    "explanationCN": "海（棠）"
  },
  {
    "character": "𗛡",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "bamboo.shoots",
    "explanationCN": "笋"
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
    "GHC": "kwã¹",
    "explanationEN": "jar/pot",
    "explanationCN": "罐】"
  },
  {
    "character": "𗝨",
    "GX": "to̱ṃh¹",
    "GHC": "tọ¹",
    "explanationEN": "a.kind.of.bamboo",
    "explanationCN": "【欓】树名"
  },
  {
    "character": "𗝕",
    "GX": "lu¹",
    "GHC": "lju¹",
    "explanationEN": "bamboo.flute",
    "explanationCN": "管笛萧"
  },
  {
    "character": "𗞨",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "bamboo.shoots",
    "explanationCN": "笋"
  },
  {
    "character": "𗞡",
    "GX": "pao̱¹",
    "GHC": "pio¹",
    "explanationEN": "burst/crack",
    "explanationCN": "1.爆（裂）】、【苞】【包】【鲍】（音 193）"
  },
  {
    "character": "𗞼",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "light/kindle/ignite/temple.attendant/(wax).candle",
    "explanationCN": "香蜡烛名词"
  },
  {
    "character": "𗟖",
    "GX": "koṃ¹",
    "GHC": "kjow¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "檟"
  },
  {
    "character": "𗚾",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "the.fruit.of.Chinese.wolfberry",
    "explanationCN": "杞"
  },
  {
    "character": "𗝩",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "be.imprisoned/supervise",
    "explanationCN": "1.监、囚"
  },
  {
    "character": "𗜒",
    "GX": "kha̱h²",
    "GHC": "kha",
    "explanationEN": "casket/a.small.box",
    "explanationCN": "匣"
  },
  {
    "character": "𗝍",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "hole/cavity",
    "explanationCN": "孔穴"
  },
  {
    "character": "𗜗",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【龙】树名"
  },
  {
    "character": "𗛛",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "central.room",
    "explanationCN": "堂屋"
  },
  {
    "character": "𗚧",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "firewood",
    "explanationCN": "薪"
  },
  {
    "character": "𗚆",
    "GX": "luh¹",
    "GHC": "ljụ¹",
    "explanationEN": "ring/make.a.sound",
    "explanationCN": "鸣响"
  },
  {
    "character": "𗚋",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "branch/twig",
    "explanationCN": "1.枝】、末"
  },
  {
    "character": "𗚴",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【示】树名"
  },
  {
    "character": "𗚚",
    "GX": "zi̱w²",
    "GHC": "zew²",
    "explanationEN": "wrist",
    "explanationCN": "1.腕、心"
  },
  {
    "character": "𗜄",
    "GX": "yo²",
    "GHC": "ꞏjo²",
    "explanationEN": "time/days",
    "explanationCN": "时"
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
    "explanationCN": "木瓜"
  },
  {
    "character": "𗛉",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【擒】树名"
  },
  {
    "character": "𘜯",
    "GX": "yih²",
    "GHC": "ꞏjị²",
    "explanationEN": "saddle",
    "explanationCN": "鞍"
  },
  {
    "character": "𗚨",
    "GX": "dziw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "cupboard/cabinet",
    "explanationCN": "柜橱"
  },
  {
    "character": "𗛈",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "rise.ʙ",
    "explanationCN": "生起趋"
  },
  {
    "character": "𗛯",
    "GX": "nvu¹",
    "GHC": "wju̱¹",
    "explanationEN": "old/rotten/withered",
    "explanationCN": "老朽枯"
  },
  {
    "character": "𗛶",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "frame/shelter",
    "explanationCN": "架"
  },
  {
    "character": "𗚳",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "neck.of.a.plough",
    "explanationCN": "犁弯"
  },
  {
    "character": "𗜝",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "red.wood",
    "explanationCN": "红木"
  },
  {
    "character": "𗜺",
    "GX": "???",
    "GHC": "",
    "explanationEN": "a.transliteration",
    "explanationCN": "（按：此字仅见《居庸关石刻》，疑笔误）英文释义a transliteration详细解释请参考《简明夏汉字典》第508页。mojikyo字体缸景永时字体苅"
  },
  {
    "character": "𗞕",
    "GX": "mphe̱²",
    "GHC": "phe̱j²",
    "explanationEN": "divide",
    "explanationCN": "分"
  },
  {
    "character": "𗟏",
    "GX": "leṃh²",
    "GHC": "ljɨ̣j²",
    "explanationEN": "ghost/spirit",
    "explanationCN": "鬼蜮"
  },
  {
    "character": "𗚰",
    "GX": "le̱¹",
    "GHC": "lej¹",
    "explanationEN": "close/shut",
    "explanationCN": "关闭"
  },
  {
    "character": "𗜍",
    "GX": "sa¹",
    "GHC": "sja¹",
    "explanationEN": "kill/slaughter",
    "explanationCN": "杀屠"
  },
  {
    "character": "𗜦",
    "GX": "llwih¹",
    "GHC": "ljwị¹",
    "explanationEN": "fall.in/sink/enter",
    "explanationCN": "1.入堕入陷入、置、系贯"
  },
  {
    "character": "𗜅",
    "GX": "vu²",
    "GHC": "wju²",
    "explanationEN": "gamble/play.games",
    "explanationCN": "赌"
  },
  {
    "character": "𗞐",
    "GX": "tsi²",
    "GHC": "tsji²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【梓】树名"
  },
  {
    "character": "𗚱",
    "GX": "lha¹",
    "GHC": "lha¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【棶】树名"
  },
  {
    "character": "𗜖",
    "GX": "tśo²",
    "GHC": "tśjo²",
    "explanationEN": "hold/have",
    "explanationCN": "执持】"
  },
  {
    "character": "𗞙",
    "GX": "twe¹",
    "GHC": "tjwij¹",
    "explanationEN": "small.cup/ancient.wine.vessel",
    "explanationCN": "卮盏斛量词"
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
    "explanationEN": "vehicle/carriage",
    "explanationCN": "1.车】、輜軫輅"
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
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【胡】树名"
  },
  {
    "character": "𗝐",
    "GX": "γa̱²",
    "GHC": "ɣa²",
    "explanationEN": "gather/concentrate",
    "explanationCN": "1.集结、荫蔽垂布"
  },
  {
    "character": "𗝏",
    "GX": "du̱h²",
    "GHC": "dụ²",
    "explanationEN": "a.unit.of.measurement",
    "explanationCN": "斗"
  },
  {
    "character": "𗝞",
    "GX": "nde̱²",
    "GHC": "de̱j²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【椴】树名"
  },
  {
    "character": "𗟑",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "荑"
  },
  {
    "character": "𗞷",
    "GX": "kwaṃ²",
    "GHC": "kjwã²",
    "explanationEN": "fort/fortress",
    "explanationCN": "堡垒"
  },
  {
    "character": "𗞑",
    "GX": "lweh¹",
    "GHC": "ljwịj¹",
    "explanationEN": "ridgepole",
    "explanationCN": "栋"
  },
  {
    "character": "𗜇",
    "GX": "ġu̱¹",
    "GHC": "gu¹",
    "explanationEN": "a.kind.of.wood",
    "explanationCN": "【具】（桷木）树名"
  },
  {
    "character": "𗞎",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "pear",
    "explanationCN": "梨"
  },
  {
    "character": "𗜕",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "neck.of.a.plough",
    "explanationCN": "犁弯"
  },
  {
    "character": "𗛞",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【棣】树名"
  },
  {
    "character": "𗛝",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "plum/woods/garden",
    "explanationCN": "梅林（森林）丛苑"
  },
  {
    "character": "𗚖",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r¹",
    "explanationEN": "a.unit.of.measurement",
    "explanationCN": "1.庹、箏案"
  },
  {
    "character": "𗜬",
    "GX": "nlo¹",
    "GHC": "ljo̱¹",
    "explanationEN": "fight.for/gamble",
    "explanationCN": "争夺赌"
  },
  {
    "character": "𗝦",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "purple/violet",
    "explanationCN": "紫色"
  },
  {
    "character": "𗝠",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "tree/wood",
    "explanationCN": "1.树木薪、与（颈）连用，具有“枷”之义"
  },
  {
    "character": "𗞴",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【梅】树名"
  },
  {
    "character": "𗚵",
    "GX": "baə̱¹",
    "GHC": "biə¹",
    "explanationEN": "willow",
    "explanationCN": "柳"
  },
  {
    "character": "𗞣",
    "GX": "γə¹",
    "GHC": "ɣjɨ¹",
    "explanationEN": "farm.animal/ox/cattle",
    "explanationCN": "耕牛"
  },
  {
    "character": "𗜿",
    "GX": "tshe²",
    "GHC": "tshjij²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【青】菜名"
  },
  {
    "character": "𗟂",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "skeleton",
    "explanationCN": "骼骨架"
  },
  {
    "character": "𗛾",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【柯】（簕欓）簕竹"
  },
  {
    "character": "𗝙",
    "GX": "rtso̱ṃr¹",
    "GHC": "tsowr¹",
    "explanationEN": "thorn/splinter",
    "explanationCN": "1.刺棘、短段"
  },
  {
    "character": "𗞂",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "calabash",
    "explanationCN": "芦】"
  },
  {
    "character": "𗞃",
    "GX": "ndə̱¹",
    "GHC": "də̱¹",
    "explanationEN": "stinking/smelly",
    "explanationCN": "腐臭"
  },
  {
    "character": "𗞺",
    "GX": "lhoṃ¹",
    "GHC": "lhjow¹",
    "explanationEN": "broom/sweep",
    "explanationCN": "扫帚扫动词"
  },
  {
    "character": "𗟆",
    "GX": "lhoṃ¹",
    "GHC": "lhjow¹",
    "explanationEN": "broom/sweep",
    "explanationCN": "扫帚"
  },
  {
    "character": "𗜘",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "near",
    "explanationCN": "近侧"
  },
  {
    "character": "𗞓",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "cherry",
    "explanationCN": "樱"
  },
  {
    "character": "𗞚",
    "GX": "ŋġae̱¹",
    "GHC": "gie̱j¹",
    "explanationEN": "thin/emaciated",
    "explanationCN": "瘦憔悴"
  },
  {
    "character": "𗞾",
    "GX": "qwo̱ṃ²",
    "GHC": "kwow²",
    "explanationEN": "be.destroyed",
    "explanationCN": "破裂"
  },
  {
    "character": "𗝬",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "railing/bainster",
    "explanationCN": "栏枙"
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
    "explanationEN": "seedling/young.plant",
    "explanationCN": "苗"
  },
  {
    "character": "𗝿",
    "GX": "tśhe¹",
    "GHC": "tśhjij¹",
    "explanationEN": "hold.ᴀ/grasp.ᴀ",
    "explanationCN": "1.执持拏】、载、吞吸、入、吹、【政】【郑】【程】"
  },
  {
    "character": "𗞄",
    "GX": "ru̱r¹",
    "GHC": "rur¹",
    "explanationEN": "a.kind.of.plant",
    "explanationCN": "【茹】草木名"
  },
  {
    "character": "𗞬",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【领】树名"
  },
  {
    "character": "𗟈",
    "GX": "mmə²",
    "GHC": "mjɨ̱²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【玫】树名"
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
    "explanationEN": "white.mulberry/mulberry",
    "explanationCN": "桑】"
  },
  {
    "character": "𗚘",
    "GX": "rtsir¹",
    "GHC": "tsjir¹",
    "explanationEN": "small.dish",
    "explanationCN": "警子"
  },
  {
    "character": "𗚈",
    "GX": "γa̱²",
    "GHC": "ɣa²",
    "explanationEN": "rice.steamer",
    "explanationCN": "甑"
  },
  {
    "character": "𗚗",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "sandalwood",
    "explanationCN": "檀木"
  },
  {
    "character": "𗚊",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "head/junction",
    "explanationCN": "头;结"
  },
  {
    "character": "𗛮",
    "GX": "nvwə̱¹",
    "GHC": "wə̱¹",
    "explanationEN": "bend.over/subdue",
    "explanationCN": "1.伏、服"
  },
  {
    "character": "𗛌",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "do",
    "explanationCN": "做作為"
  },
  {
    "character": "𗚕",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【梨】【藜】树名"
  },
  {
    "character": "𗛿",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "song",
    "explanationCN": "歌】"
  },
  {
    "character": "𗜽",
    "GX": "rər¹",
    "GHC": "rjɨr¹",
    "explanationEN": "flog/torture/beat",
    "explanationCN": "杖拷打"
  },
  {
    "character": "𗝽",
    "GX": "mpho²",
    "GHC": "phjo̱²",
    "explanationEN": "table/frame",
    "explanationCN": "桌架"
  },
  {
    "character": "𗜛",
    "GX": "???",
    "GHC": "",
    "explanationEN": "cork",
    "explanationCN": "软木"
  },
  {
    "character": "𗝤",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "plate/board",
    "explanationCN": "板版"
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
    "explanationEN": "brittle/crisp",
    "explanationCN": "脆"
  },
  {
    "character": "𗟎",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "winding.corridor",
    "explanationCN": "1.迴廊、宇"
  },
  {
    "character": "𗟌",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "hold/contain/sink/get.stuck",
    "explanationCN": "容入陷"
  },
  {
    "character": "𗛺",
    "GX": "γao̱h¹",
    "GHC": "ꞏiọ¹",
    "explanationEN": "round",
    "explanationCN": "圆"
  },
  {
    "character": "𗜣",
    "GX": "lluh¹",
    "GHC": "ljụ¹",
    "explanationEN": "night/evening",
    "explanationCN": "1.夜晚、闲"
  },
  {
    "character": "𗜫",
    "GX": "si¹",
    "GHC": "sji¹",
    "explanationEN": "west",
    "explanationCN": "1.西】、【锡】、【细】（珠 332）【膝】（珠 191）【析】（珠 314）【夕】（珠 346）【息】（珠 214）"
  },
  {
    "character": "𗞅",
    "GX": "tśwaṃ¹",
    "GHC": "tśjwã¹",
    "explanationEN": "turn/rotate",
    "explanationCN": "转】"
  },
  {
    "character": "𗜧",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "hole/cavity/tube",
    "explanationCN": "1.孔筒、量"
  },
  {
    "character": "𗚶",
    "GX": "nẓau̱¹",
    "GHC": "źju̱¹",
    "explanationEN": "thorn/splinter",
    "explanationCN": "棘刺"
  },
  {
    "character": "𗚣",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【拔】树名"
  },
  {
    "character": "𗞥",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "sing",
    "explanationCN": "咏唱歌"
  },
  {
    "character": "𗝢",
    "GX": "la̱ṃ¹",
    "GHC": "lã¹",
    "explanationEN": "a.place.name",
    "explanationCN": "【兰】地名"
  },
  {
    "character": "𗞟",
    "GX": "qao̱h¹",
    "GHC": "kiọ¹",
    "explanationEN": "fruit",
    "explanationCN": "果】"
  },
  {
    "character": "𗛴",
    "GX": "nae̱h²",
    "GHC": "dẹj²",
    "explanationEN": "seedling",
    "explanationCN": "1.苗芽、甲"
  },
  {
    "character": "𗚪",
    "GX": "bi̱¹",
    "GHC": "be¹",
    "explanationEN": "dispatch/send",
    "explanationCN": "遣送"
  },
  {
    "character": "𗜥",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "a.kind.of.plant",
    "explanationCN": "【茎】草木名"
  },
  {
    "character": "𗜉",
    "GX": "yə¹",
    "GHC": "ꞏjɨ¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【荑】草名"
  },
  {
    "character": "𗜰",
    "GX": "tsu̱ṃ¹",
    "GHC": "tsũ¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【宗】、【骏】【总】"
  },
  {
    "character": "𗝫",
    "GX": "qhai̱w²",
    "GHC": "khiew²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "1.【槭】树名、枝、记"
  },
  {
    "character": "𗛏",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "come/invite",
    "explanationCN": "来"
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
    "GHC": "dạ¹",
    "explanationEN": "chess.or.any.board.game",
    "explanationCN": "棋"
  },
  {
    "character": "𗚼",
    "GX": "tsha̱ṃ¹",
    "GHC": "tshã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【签】"
  },
  {
    "character": "𗛸",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "burnt/charred",
    "explanationCN": "焦"
  },
  {
    "character": "𗛵",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "small/little",
    "explanationCN": "小"
  },
  {
    "character": "𗝀",
    "GX": "tshe²",
    "GHC": "tshjij²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【梫】树名"
  },
  {
    "character": "𗞽",
    "GX": "baa̱¹",
    "GHC": "bia¹",
    "explanationEN": "burst/break/crack",
    "explanationCN": "裂破"
  },
  {
    "character": "𗚐",
    "GX": "llae̱h¹",
    "GHC": "liẹj¹",
    "explanationEN": "willow",
    "explanationCN": "1.杨柳、摆动"
  },
  {
    "character": "𗛻",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "maroon/chestnut.color",
    "explanationCN": "栗色"
  },
  {
    "character": "𗞋",
    "GX": "lhoṃ²",
    "GHC": "lhjo̱r¹",
    "explanationEN": "table/desk",
    "explanationCN": "桌"
  },
  {
    "character": "𗛊",
    "GX": "śah¹",
    "GHC": "śjạ¹",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𗛲",
    "GX": "loṃ²",
    "GHC": "ljow²",
    "explanationEN": "border/boundary",
    "explanationCN": "1.边界边际、旁"
  },
  {
    "character": "𗜩",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【欖】树名"
  },
  {
    "character": "𗝡",
    "GX": "nla̱¹",
    "GHC": "la¹",
    "explanationEN": "pollute",
    "explanationCN": "1.污染、耽著秽构"
  },
  {
    "character": "𗞢",
    "GX": "ba̱ṃ¹",
    "GHC": "bã¹",
    "explanationEN": "tray/plate",
    "explanationCN": "盘"
  },
  {
    "character": "𗞦",
    "GX": "rkur¹",
    "GHC": "kjur¹",
    "explanationEN": "smoke.(meat)/fumigate",
    "explanationCN": "薰"
  },
  {
    "character": "𗜀",
    "GX": "tsi̱w¹",
    "GHC": "tsew¹",
    "explanationEN": "alcoholic.drink/wine",
    "explanationCN": "1.酒】、【椒】【枣】、鷦"
  },
  {
    "character": "𗜷",
    "GX": "mbo̱²",
    "GHC": "bo̱²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【薄】树名"
  },
  {
    "character": "𗜸",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "a.classifier",
    "explanationCN": "具张乘（辆）"
  },
  {
    "character": "𗟊",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "wood.used.make.saddle",
    "explanationCN": "鞍木"
  },
  {
    "character": "𗝯",
    "GX": "paa̱¹",
    "GHC": "pia¹",
    "explanationEN": "rake",
    "explanationCN": "扒"
  },
  {
    "character": "𗞖",
    "GX": "fiṃ¹",
    "GHC": "xjwi¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【分】动词】、【训】、辆所、【风】（珠 165）【峰】（珠 244）【缝】（珠 244）【粉】（珠 255）【奉】（珠 341）【汾】（音 194）"
  },
  {
    "character": "𗜾",
    "GX": "yih¹",
    "GHC": "ꞏjị¹",
    "explanationEN": "ladle/scoop",
    "explanationCN": "匙（勺）"
  },
  {
    "character": "𗝷",
    "GX": "qi̱w²",
    "GHC": "kew²",
    "explanationEN": "the.fruit.of.Chinese.wolfberry",
    "explanationCN": "枸】"
  },
  {
    "character": "𗛢",
    "GX": "nllu²",
    "GHC": "lju̱²",
    "explanationEN": "railing/banister",
    "explanationCN": "栏枙"
  },
  {
    "character": "𗛂",
    "GX": "śwu²",
    "GHC": "śjwu²",
    "explanationEN": "able.and.virtuous",
    "explanationCN": "贤惠"
  },
  {
    "character": "𗛁",
    "GX": "mbi̱¹",
    "GHC": "be̱¹",
    "explanationEN": "chestnut",
    "explanationCN": "栗"
  },
  {
    "character": "𗞀",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "smile/laugh",
    "explanationCN": "笑"
  },
  {
    "character": "𗟐",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "tangerine",
    "explanationCN": "橘】"
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
    "explanationCN": "【密】（木瓜）"
  },
  {
    "character": "𗟃",
    "GX": "γiw²",
    "GHC": "ɣjiw²",
    "explanationEN": "play/make.fun.of",
    "explanationCN": "玩戏闹"
  },
  {
    "character": "𗟅",
    "GX": "qhaə̱²",
    "GHC": "khiə²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【柯】树名"
  },
  {
    "character": "𗛣",
    "GX": "lo̱ṃ¹",
    "GHC": "low¹",
    "explanationEN": "sway/swing",
    "explanationCN": "摇摆"
  },
  {
    "character": "𗞞",
    "GX": "da²",
    "GHC": "dja²",
    "explanationEN": "ᴘꜰᴠ/ɪᴍᴘ",
    "explanationCN": "ᴘꜰᴠ/ɪᴍᴘ"
  },
  {
    "character": "𗚩",
    "GX": "re̱r²",
    "GHC": "lhejr²",
    "explanationEN": "road/way",
    "explanationCN": "1.道、典"
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
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【都】树名"
  },
  {
    "character": "𗜤",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【耇】树名"
  },
  {
    "character": "𗞇",
    "GX": "tśho¹",
    "GHC": "tśhjo¹",
    "explanationEN": "go/walk",
    "explanationCN": "行走"
  },
  {
    "character": "𗜪",
    "GX": "li̱w¹",
    "GHC": "lew¹",
    "explanationEN": "building",
    "explanationCN": "1.楼】、耬、【娄】【陋】【路】【牢】"
  },
  {
    "character": "𗜜",
    "GX": "yo²",
    "GHC": "ꞏjo²",
    "explanationEN": "seek.ʙ/search.ʙ",
    "explanationCN": "寻找.ʙ"
  },
  {
    "character": "𗚝",
    "GX": "dzi̱²",
    "GHC": "dze²",
    "explanationEN": "thistles.and.thorns/brambles",
    "explanationCN": "1.棘蒺】、枣"
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
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【苇】树名"
  },
  {
    "character": "𗞩",
    "GX": "ni²",
    "GHC": "nji",
    "explanationEN": "bag/pocket",
    "explanationCN": "袋囊"
  },
  {
    "character": "𗜼",
    "GX": "zeṃh²",
    "GHC": "ljịj²",
    "explanationEN": "hold.ʙ",
    "explanationCN": "持.ʙ"
  },
  {
    "character": "𗞮",
    "GX": "ndi²",
    "GHC": "dji̱²",
    "explanationEN": "furniture/board",
    "explanationCN": "家俱隔板"
  },
  {
    "character": "𗝈",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "roof.beam/eaves",
    "explanationCN": "檐（梁）"
  },
  {
    "character": "𗛎",
    "GX": "dzo̱²",
    "GHC": "dzjo²",
    "explanationEN": "trough",
    "explanationCN": "槽】"
  },
  {
    "character": "𗞧",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "shaft.of.arrow",
    "explanationCN": "箭杆"
  },
  {
    "character": "𗞸",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【紫】树名"
  },
  {
    "character": "𗞏",
    "GX": "nwu̱h¹",
    "GHC": "nwụ¹",
    "explanationEN": "a.tongue.of.flame",
    "explanationCN": "火苗"
  },
  {
    "character": "𗚷",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【契】"
  },
  {
    "character": "𗝝",
    "GX": "rŋwə̱r¹",
    "GHC": "ŋwər¹",
    "explanationEN": "four",
    "explanationCN": "1.四、琵琶"
  },
  {
    "character": "𗞶",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "rake",
    "explanationCN": "耙芭"
  },
  {
    "character": "𗞵",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "wooden.framework/wooden.rack",
    "explanationCN": "木架"
  },
  {
    "character": "𗜙",
    "GX": "tśe²",
    "GHC": "tśjij²",
    "explanationEN": "hold/grasp",
    "explanationCN": "执】"
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
    "explanationEN": "stake/pile",
    "explanationCN": "桩"
  },
  {
    "character": "𗜻",
    "GX": "dwu̱²",
    "GHC": "dwu²",
    "explanationEN": "chopsticks",
    "explanationCN": "箸"
  },
  {
    "character": "𗝭",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "stake/pile",
    "explanationCN": "杙桩"
  },
  {
    "character": "𗜮",
    "GX": "nllu¹",
    "GHC": "lju̱¹",
    "explanationEN": "gamble/fight.for",
    "explanationCN": "赌争夺"
  },
  {
    "character": "𗜭",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "hair",
    "explanationCN": "毛髮"
  },
  {
    "character": "𗜃",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "borrow.money/raise.a.loan",
    "explanationCN": "借债负债"
  },
  {
    "character": "𗛬",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【杜】树名"
  },
  {
    "character": "𗛷",
    "GX": "phaa̱¹",
    "GHC": "phia¹",
    "explanationEN": "white.fir",
    "explanationCN": "白杉"
  },
  {
    "character": "𗜶",
    "GX": "nvwi̱¹",
    "GHC": "we̱¹",
    "explanationEN": "debt",
    "explanationCN": "债"
  },
  {
    "character": "𗛍",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "break/snap",
    "explanationCN": "折断"
  },
  {
    "character": "𗞆",
    "GX": "ġu̱²",
    "GHC": "gu²",
    "explanationEN": "heavy.burden",
    "explanationCN": "重栿"
  },
  {
    "character": "𗝰",
    "GX": "mma̱r¹",
    "GHC": "ma̱r¹",
    "explanationEN": "luxuriant/exuberant",
    "explanationCN": "茂】"
  },
  {
    "character": "𗝚",
    "GX": "sə¹",
    "GHC": "sjɨ¹",
    "explanationEN": "firewood",
    "explanationCN": "1.薪柴木、蔬"
  },
  {
    "character": "𗜨",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "a.kind.of.plant",
    "explanationCN": "芜"
  },
  {
    "character": "𗞊",
    "GX": "mpu̱¹",
    "GHC": "pu̱¹",
    "explanationEN": "replete/full",
    "explanationCN": "饱胀"
  },
  {
    "character": "𗝟",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "post/pillar",
    "explanationCN": "柱"
  },
  {
    "character": "𗚅",
    "GX": "lluh¹",
    "GHC": "ljụ¹",
    "explanationEN": "ring/make.a.sound",
    "explanationCN": "鸣响"
  },
  {
    "character": "𗚯",
    "GX": "le̱¹",
    "GHC": "lej¹",
    "explanationEN": "close/shut",
    "explanationCN": "1.关闭"
  },
  {
    "character": "𗟀",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "mortgage/pawn",
    "explanationCN": "典当"
  },
  {
    "character": "𗜌",
    "GX": "?eṃ²",
    "GHC": "",
    "explanationEN": "complete/all",
    "explanationCN": "俱全"
  },
  {
    "character": "𗞒",
    "GX": "ẓwaə̱¹",
    "GHC": "źiwə¹",
    "explanationEN": "difference/disparity",
    "explanationCN": "差别差异"
  },
  {
    "character": "𗟉",
    "GX": "ẓwaə̱¹",
    "GHC": "źiwə¹",
    "explanationEN": "nipple/teat",
    "explanationCN": "乳头"
  },
  {
    "character": "𗟓",
    "GX": "ta̱ṃ¹",
    "GHC": "tã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【丹】【旦】【郸】（）"
  },
  {
    "character": "𗝑",
    "GX": "dẓaa̱¹",
    "GHC": "dźia¹",
    "explanationEN": "walnut",
    "explanationCN": "胡桃"
  },
  {
    "character": "𗟄",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "pine/pine.tree",
    "explanationCN": "松"
  },
  {
    "character": "𗜵",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "railing/banister",
    "explanationCN": "围栏"
  },
  {
    "character": "𗜎",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "bind/tie.up",
    "explanationCN": "束缚"
  },
  {
    "character": "𗞘",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "trousseau",
    "explanationCN": "妆奩"
  },
  {
    "character": "𗜔",
    "GX": "dẓaa̱²",
    "GHC": "dźia²",
    "explanationEN": "disorderly/coarse",
    "explanationCN": "1.杂乱粗、竖、胡"
  },
  {
    "character": "𗝂",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "central.room",
    "explanationCN": "庭堂屋"
  },
  {
    "character": "𗝶",
    "GX": "tśa²",
    "GHC": "tśja²",
    "explanationEN": "button",
    "explanationCN": "纽扣"
  },
  {
    "character": "𗝾",
    "GX": "teṃh¹",
    "GHC": "tjɨj¹",
    "explanationEN": "advance/strive",
    "explanationCN": "强进"
  },
  {
    "character": "𗞁",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "post/pillar",
    "explanationCN": "柱"
  },
  {
    "character": "𗛒",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "eulogy/praise",
    "explanationCN": "颂】"
  },
  {
    "character": "𗜈",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "hold.ᴀ",
    "explanationCN": "持.ᴀ"
  },
  {
    "character": "𗝸",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "human.skeleton/ghost",
    "explanationCN": "骷髏鬼怪"
  },
  {
    "character": "𗝇",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "confidence/trust/faith",
    "explanationCN": "信任信实"
  },
  {
    "character": "𗛫",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "bathe/wash",
    "explanationCN": "洗浴"
  },
  {
    "character": "𗛼",
    "GX": "rtwə̱r¹",
    "GHC": "twər¹",
    "explanationEN": "tree.tumor",
    "explanationCN": "树瘤"
  },
  {
    "character": "𗛖",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "brambles",
    "explanationCN": "荆棘"
  },
  {
    "character": "𗝆",
    "GX": "tho̱ṃh¹",
    "GHC": "thọ¹",
    "explanationEN": "general.name.for.certain.musical.instruments",
    "explanationCN": "琴瑟乐器"
  },
  {
    "character": "𗜐",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "fire",
    "explanationCN": "火"
  },
  {
    "character": "𗚮",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【灿】"
  },
  {
    "character": "𗝋",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "pole/staff",
    "explanationCN": "杆桅"
  },
  {
    "character": "𗚍",
    "GX": "dzwaṃ¹",
    "GHC": "dźjwã¹",
    "explanationEN": "rafter",
    "explanationCN": "椽】"
  },
  {
    "character": "𗚸",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "urgent/pressing",
    "explanationCN": "急"
  },
  {
    "character": "𗚜",
    "GX": "pu²",
    "GHC": "pju²",
    "explanationEN": "burn.ᴀ",
    "explanationCN": "烧.ᴀ"
  },
  {
    "character": "𗛓",
    "GX": "llo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【欖】树名"
  },
  {
    "character": "𗜏",
    "GX": "mmə̱¹",
    "GHC": "mə̱¹",
    "explanationEN": "fire",
    "explanationCN": "火"
  },
  {
    "character": "𗛦",
    "GX": "qhai̱¹",
    "GHC": "khie¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【客】树名"
  },
  {
    "character": "𗜴",
    "GX": "qhau̱¹",
    "GHC": "khu¹",
    "explanationEN": "crooked/hollow",
    "explanationCN": "弯曲坑洼"
  },
  {
    "character": "𗝪",
    "GX": "ka̱ṃ¹",
    "GHC": "kã¹",
    "explanationEN": "pole/rod",
    "explanationCN": "杆竿】"
  },
  {
    "character": "𗜳",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "a.place.name",
    "explanationCN": "【川】地名"
  },
  {
    "character": "𗞰",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "faith/trust/confidence",
    "explanationCN": "信"
  },
  {
    "character": "𗚞",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "a.kind.of.tree",
    "explanationCN": "【莓】树名"
  },
  {
    "character": "𗞛",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣",
    "explanationEN": "burst.apart/collapse",
    "explanationCN": "崩裂毁圮"
  },
  {
    "character": "𘜭",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "head/junction",
    "explanationCN": "1.头、蕴、阴、笙"
  },
  {
    "character": "𗛱",
    "GX": "śiṃ¹",
    "GHC": "śji¹",
    "explanationEN": "a.place.name",
    "explanationCN": "【神】地名"
  },
  {
    "character": "𘜲",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "cool/cold",
    "explanationCN": "1.凉、【叔】【蜀】（音 200）"
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
    "explanationEN": "roof.beam",
    "explanationCN": "梁"
  },
  {
    "character": "𗜊",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "fear/dread",
    "explanationCN": "恐惧"
  },
  {
    "character": "𗜢",
    "GX": "twi̱h²",
    "GHC": "twẹ²",
    "explanationEN": "roof.beam",
    "explanationCN": "檩梁"
  },
  {
    "character": "𘚍",
    "GX": "khə¹",
    "GHC": "khjɨ¹",
    "explanationEN": "a.place.name",
    "explanationCN": "【祁】地名"
  },
  {
    "character": "𘜰",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "belt.or.band.for.saddles",
    "explanationCN": "肚带䪌"
  },
  {
    "character": "𘚓",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "bear.(a.burden)/carry.on.a.shoulder.pole",
    "explanationCN": "担"
  },
  {
    "character": "𘒿",
    "GX": "lwi̱¹",
    "GHC": "lwe¹",
    "explanationEN": "hinder/obstruct",
    "explanationCN": "障"
  },
  {
    "character": "𘓈",
    "GX": "dźu²",
    "GHC": "dźju²",
    "explanationEN": "seed/race",
    "explanationCN": "种根"
  },
  {
    "character": "𘓂",
    "GX": "ləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "what/who/where",
    "explanationCN": "何"
  },
  {
    "character": "𘓀",
    "GX": "lwi̱¹",
    "GHC": "lwe¹",
    "explanationEN": "forget",
    "explanationCN": "忘"
  },
  {
    "character": "𘓄",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "auspicious",
    "explanationCN": "祥瑞"
  },
  {
    "character": "𘓃",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "murderer/homicide/kill",
    "explanationCN": "凶手凶杀动词"
  },
  {
    "character": "𘜵",
    "GX": "śu¹",
    "GHC": "śju¹",
    "explanationEN": "swear/abuse",
    "explanationCN": "駡喻告"
  },
  {
    "character": "𗘲",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "pavilion",
    "explanationCN": "阁"
  },
  {
    "character": "𘚏",
    "GX": "swo¹",
    "GHC": "sjwo¹",
    "explanationEN": "inkstone/inkslab",
    "explanationCN": "1.砚、研动词"
  },
  {
    "character": "𘞖",
    "GX": "nsi̱w²",
    "GHC": "se̱w²",
    "explanationEN": "demand/ask.for",
    "explanationCN": "索取索求"
  },
  {
    "character": "𗴌",
    "GX": "zo̱ṃ²",
    "GHC": "zow²",
    "explanationEN": "that/it/he",
    "explanationCN": "彼它其"
  },
  {
    "character": "𘓁",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "CONC/CONJ",
    "explanationCN": "CONC;CONJ"
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
    "explanationCN": "破粒动词"
  },
  {
    "character": "𘜹",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "empress/queen",
    "explanationCN": "后"
  },
  {
    "character": "𗴋",
    "GX": "kwaṃ¹",
    "GHC": "kjwã¹",
    "explanationEN": "chapter/volume",
    "explanationCN": "1.卷】、【捐】【决】【绢】（音 197）"
  },
  {
    "character": "𘜴",
    "GX": "mma²",
    "GHC": "mja̱²",
    "explanationEN": "big/large",
    "explanationCN": "1.大、素事"
  },
  {
    "character": "𗘴",
    "GX": "mmu²",
    "GHC": "mju̱²",
    "explanationEN": "move/stir",
    "explanationCN": "动摇"
  },
  {
    "character": "𗵺",
    "GX": "vwa̱h¹",
    "GHC": "wạ¹",
    "explanationEN": "win/gain",
    "explanationCN": "赢"
  },
  {
    "character": "𘟊",
    "GX": "dzoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "a.place.put.corpse",
    "explanationCN": "尸场"
  },
  {
    "character": "𘚎",
    "GX": "dźiw¹",
    "GHC": "dzjiw¹",
    "explanationEN": "wash/bathe",
    "explanationCN": "洗濯涤"
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
    "explanationEN": "a.transliteration",
    "explanationCN": "【道】【佗】【大】【陶】【桃】"
  },
  {
    "character": "𘴈",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "wild.goose",
    "explanationCN": "大雁"
  },
  {
    "character": "𘜶",
    "GX": "lleh²",
    "GHC": "ljịj²",
    "explanationEN": "big/great/large",
    "explanationCN": "大太弘巨宏奘简"
  },
  {
    "character": "𗘵",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "butcher/cut",
    "explanationCN": "宰割"
  },
  {
    "character": "𗍣",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "break/snap",
    "explanationCN": "断"
  },
  {
    "character": "𗘳",
    "GX": "ndu²",
    "GHC": "dju̱²",
    "explanationEN": "stab/penetrate",
    "explanationCN": "刺穿"
  },
  {
    "character": "𘚒",
    "GX": "so̱ṃ¹",
    "GHC": "sow¹",
    "explanationEN": "fresh/clean",
    "explanationCN": "鲜洁清净"
  },
  {
    "character": "𘞔",
    "GX": "rphar¹",
    "GHC": "phjar¹",
    "explanationEN": "crew.cut",
    "explanationCN": "平头"
  },
  {
    "character": "𘓅",
    "GX": "khə²",
    "GHC": "khjɨ²",
    "explanationEN": "toil/hard.work",
    "explanationCN": "劳苦"
  },
  {
    "character": "𘓆",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "discuss/forecast/predict",
    "explanationCN": "论"
  },
  {
    "character": "𘓇",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "toil/hard.work",
    "explanationCN": "劳累劳苦"
  },
  {
    "character": "𘜮",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "a.unit.of.measurement",
    "explanationCN": "抄量词"
  },
  {
    "character": "𘜸",
    "GX": "tshə̱¹",
    "GHC": "tshə¹",
    "explanationEN": "temple",
    "explanationCN": "1.寺】、【次】、【刺】【慈】（音 198）"
  },
  {
    "character": "𘜱",
    "GX": "thəh²",
    "GHC": "thjɨ̣²",
    "explanationEN": "belt/band",
    "explanationCN": "带（腹带攀带）"
  },
  {
    "character": "𗶹",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "go₂",
    "explanationCN": "去₂"
  },
  {
    "character": "𗷂",
    "GX": "ṣai̱²",
    "GHC": "śie²",
    "explanationEN": "pursue",
    "explanationCN": "追赶"
  },
  {
    "character": "𗶺",
    "GX": "fu¹",
    "GHC": "xju¹",
    "explanationEN": "blow/puff",
    "explanationCN": "1.吹、除"
  },
  {
    "character": "𗶵",
    "GX": "ṣai̱²",
    "GHC": "śie²",
    "explanationEN": "mate",
    "explanationCN": "交配淫"
  },
  {
    "character": "𗶳",
    "GX": "ŋkho²",
    "GHC": "khio̱²",
    "explanationEN": "look/see",
    "explanationCN": "瞧见显现"
  },
  {
    "character": "𗶾",
    "GX": "ye²",
    "GHC": "ꞏjij²",
    "explanationEN": "go",
    "explanationCN": "去"
  },
  {
    "character": "𗶴",
    "GX": "ha̱?",
    "GHC": "xa",
    "explanationEN": "puff/blow",
    "explanationCN": "1.吹除、【哈】【訶】【贺】【汉】【韩】"
  },
  {
    "character": "𗷕",
    "GX": "???",
    "GHC": "",
    "explanationEN": "all.over",
    "explanationCN": "遍"
  },
  {
    "character": "𗷄",
    "GX": "źo¹",
    "GHC": "źjo¹",
    "explanationEN": "get.over/jump.over",
    "explanationCN": "越"
  },
  {
    "character": "𗶲",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "flee/run.away",
    "explanationCN": "逃跑"
  },
  {
    "character": "𗶱",
    "GX": "tśoh¹",
    "GHC": "tśjọ¹",
    "explanationEN": "wait.upon/attend.upon",
    "explanationCN": "侍奉"
  },
  {
    "character": "𗷎",
    "GX": "rqa̱r²",
    "GHC": "kar²",
    "explanationEN": "separate/distinguish",
    "explanationCN": "分离分别区分"
  },
  {
    "character": "𗶷",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "go.toward/depart",
    "explanationCN": "往去"
  },
  {
    "character": "𗶻",
    "GX": "śwəh²",
    "GHC": "śjwiw²",
    "explanationEN": "accompany/attend",
    "explanationCN": "随从伴随"
  },
  {
    "character": "𗷈",
    "GX": "tə̱¹",
    "GHC": "tə¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【底】"
  },
  {
    "character": "𗶿",
    "GX": "lhoṃ¹",
    "GHC": "lhjow¹",
    "explanationEN": "go.toward/depart",
    "explanationCN": "往"
  },
  {
    "character": "𗷖",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "give.alms/give.as.a.present",
    "explanationCN": "1.施赠、趣、向、去"
  },
  {
    "character": "𗷑",
    "GX": "mphi²",
    "GHC": "phji̱²",
    "explanationEN": "sensitive/dexterous",
    "explanationCN": "1.灵巧灵敏、批"
  },
  {
    "character": "𗷔",
    "GX": "twu̱¹",
    "GHC": "twu¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【都】【覩】【杜】【咄】"
  },
  {
    "character": "𗶽",
    "GX": "śə²",
    "GHC": "śjɨ²",
    "explanationEN": "slight/tiny/rare",
    "explanationCN": "微少许"
  },
  {
    "character": "𗷆",
    "GX": "mphi¹",
    "GHC": "phji̱¹",
    "explanationEN": "make/enable/cause",
    "explanationCN": "1.使令、用、检校"
  },
  {
    "character": "𗷇",
    "GX": "mphi²",
    "GHC": "phji̱²",
    "explanationEN": "flatter/fawn",
    "explanationCN": "阿諛"
  },
  {
    "character": "𗷃",
    "GX": "dźeh²",
    "GHC": "dźjịj²",
    "explanationEN": "fight/struggle",
    "explanationCN": "1.争夺争斗、敌搏、报"
  },
  {
    "character": "𗶼",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【虱】虫名"
  },
  {
    "character": "𗷍",
    "GX": "dźeh²",
    "GHC": "dźjịj²",
    "explanationEN": "jokes",
    "explanationCN": "戏謔"
  },
  {
    "character": "𗷌",
    "GX": "ti̱¹",
    "GHC": "te¹",
    "explanationEN": "run",
    "explanationCN": "逃跑"
  },
  {
    "character": "𗷏",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "offer/send.back",
    "explanationCN": "奉送遣送"
  },
  {
    "character": "𗶶",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "traffic/peddle/sell",
    "explanationCN": "贩（商贩）"
  },
  {
    "character": "𗷁",
    "GX": "ndza̱¹",
    "GHC": "dza̱¹",
    "explanationEN": "far",
    "explanationCN": "1.远、过失、衰"
  },
  {
    "character": "𗶸",
    "GX": "zo²",
    "GHC": "źjo²",
    "explanationEN": "sell",
    "explanationCN": "售卖】"
  },
  {
    "character": "𗷐",
    "GX": "hwi̱¹",
    "GHC": "xwe¹",
    "explanationEN": "drive.out/expel",
    "explanationCN": "驱除"
  },
  {
    "character": "𗷀",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "weave",
    "explanationCN": "编"
  },
  {
    "character": "𗷉",
    "GX": "śe¹",
    "GHC": "śjij¹",
    "explanationEN": "the.moon",
    "explanationCN": "月"
  },
  {
    "character": "𗷅",
    "GX": "śə²",
    "GHC": "śjɨ²",
    "explanationEN": "curtain/screen",
    "explanationCN": "1.幔、【释】【式】【势】"
  },
  {
    "character": "𘜬",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "send/tell.somebody.do",
    "explanationCN": "使驱使"
  },
  {
    "character": "𘜫",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "servant",
    "explanationCN": "奴僕"
  },
  {
    "character": "𗄝",
    "GX": "qai̱ṃ¹",
    "GHC": "kiẽ¹",
    "explanationEN": "earlobe",
    "explanationCN": "垂"
  },
  {
    "character": "𗄨",
    "GX": "lu̱²",
    "GHC": "lu²",
    "explanationEN": "burn/ignite/light",
    "explanationCN": "1.燃烧焚、烤"
  },
  {
    "character": "𗀚",
    "GX": "ṣao̱¹",
    "GHC": "śio¹",
    "explanationEN": "guide/lead",
    "explanationCN": "1.引导、诱将鼗（鞉）"
  },
  {
    "character": "𗠇",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "eat/food",
    "explanationCN": "食厨名词"
  },
  {
    "character": "𗠎",
    "GX": "qhə̱¹",
    "GHC": "khə¹",
    "explanationEN": "meat.stuffing/sausage",
    "explanationCN": "肉馅香肠"
  },
  {
    "character": "𗸢",
    "GX": "twa̱¹",
    "GHC": "twa¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【怛】（梵语）"
  },
  {
    "character": "𗠒",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "tall/high",
    "explanationCN": "高上"
  },
  {
    "character": "𗡐",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "interrogate",
    "explanationCN": "审问"
  },
  {
    "character": "𗡄",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "drink/eat/food",
    "explanationCN": "饮食服动词"
  },
  {
    "character": "𗠬",
    "GX": "dźwiw²",
    "GHC": "dźjwiw²",
    "explanationEN": "hungry",
    "explanationCN": "饿"
  },
  {
    "character": "𘉏",
    "GX": "tsho̱ṃh²",
    "GHC": "tshọ²",
    "explanationEN": "void/empty",
    "explanationCN": "虚"
  },
  {
    "character": "𗀢",
    "GX": "ṣao̱²",
    "GHC": "śio²",
    "explanationEN": "drive/expel",
    "explanationCN": "驱赶"
  },
  {
    "character": "𗡅",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "eat.ᴀ",
    "explanationCN": "吃.ʙ"
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
    "explanationEN": "shout/cry/yell",
    "explanationCN": "叫喊鸣"
  },
  {
    "character": "𗠪",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "command/direct",
    "explanationCN": "指挥指示"
  },
  {
    "character": "𗡈",
    "GX": "ryawr²",
    "GHC": "ꞏja̱r²",
    "explanationEN": "cry/shout",
    "explanationCN": "叫喊"
  },
  {
    "character": "𘉜",
    "GX": "tsho̱ṃh²",
    "GHC": "tshọ²",
    "explanationEN": "fear/terrify",
    "explanationCN": "惊慌惊恐"
  },
  {
    "character": "𗡃",
    "GX": "tshe̱²",
    "GHC": "tshej²",
    "explanationEN": "incomplete/imperfect",
    "explanationCN": "缺豁"
  },
  {
    "character": "𗄠",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "leader/host",
    "explanationCN": "领"
  },
  {
    "character": "𗢅",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "clean/spotless",
    "explanationCN": "洁净"
  },
  {
    "character": "𗺄",
    "GX": "ma̱²",
    "GHC": "ma²",
    "explanationEN": "greasy/smooth",
    "explanationCN": "1.腻、抹"
  },
  {
    "character": "𗄦",
    "GX": "dẓae̱h²",
    "GHC": "dźiẹj²",
    "explanationEN": "wizard",
    "explanationCN": "驱鬼者"
  },
  {
    "character": "𗄟",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "a.kind.of.official.position",
    "explanationCN": "1.勾管、【兀】（）"
  },
  {
    "character": "𗄡",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "scorched/burnt",
    "explanationCN": "焦糊"
  },
  {
    "character": "𗠆",
    "GX": "pao̱¹",
    "GHC": "pio¹",
    "explanationEN": "thunderbolt/thunderclap",
    "explanationCN": "霹靂"
  },
  {
    "character": "𗡙",
    "GX": "yo̱ṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "extol/praise",
    "explanationCN": "讚颂讚叹"
  },
  {
    "character": "𗠵",
    "GX": "pa̱h²",
    "GHC": "pạ²",
    "explanationEN": "thirst",
    "explanationCN": "渴"
  },
  {
    "character": "𗠭",
    "GX": "qai̱¹",
    "GHC": "kie¹",
    "explanationEN": "shout/call.out",
    "explanationCN": "呼唤喊"
  },
  {
    "character": "𗠫",
    "GX": "dźwiw²",
    "GHC": "dźjwiw²",
    "explanationEN": "hungry",
    "explanationCN": "饥饿"
  },
  {
    "character": "𗡉",
    "GX": "bi̱h²",
    "GHC": "bẹ²",
    "explanationEN": "instigate/abet",
    "explanationCN": "唆"
  },
  {
    "character": "𗄤",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "wizard/witch/sorcerer",
    "explanationCN": "巫驱鬼者"
  },
  {
    "character": "𗀛",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "open/shine.upon",
    "explanationCN": "敞"
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
    "explanationEN": "witch/wizard/sorcerer",
    "explanationCN": "巫驱鬼者"
  },
  {
    "character": "𗡊",
    "GX": "???",
    "GHC": "",
    "explanationEN": "swallow",
    "explanationCN": "吞"
  },
  {
    "character": "𗠝",
    "GX": "ya̱¹",
    "GHC": "ꞏja",
    "explanationEN": "a.transliteration",
    "explanationCN": "【阿】"
  },
  {
    "character": "𗠩",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "feed",
    "explanationCN": "喂使饮食"
  },
  {
    "character": "𗠉",
    "GX": "rmə̱r¹",
    "GHC": "mər¹",
    "explanationEN": "lips",
    "explanationCN": "唇"
  },
  {
    "character": "𗄢",
    "GX": "rə̱h¹",
    "GHC": "rjijr¹",
    "explanationEN": "distend",
    "explanationCN": "胀寛"
  },
  {
    "character": "𗠨",
    "GX": "dźwu²",
    "GHC": "dźjwu²",
    "explanationEN": "saliva",
    "explanationCN": "涎唾沫"
  },
  {
    "character": "𗡗",
    "GX": "ryawr²",
    "GHC": "ꞏja̱r²",
    "explanationEN": "chicken",
    "explanationCN": "鷄"
  },
  {
    "character": "𗠈",
    "GX": "dzo¹",
    "GHC": "dzjo¹",
    "explanationEN": "eat.ʙ",
    "explanationCN": "吃.ᴀ"
  },
  {
    "character": "𗀣",
    "GX": "rha̱r¹",
    "GHC": "xar¹",
    "explanationEN": "open.(one’s.mouth)",
    "explanationCN": "张口"
  },
  {
    "character": "𗄧",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "flea",
    "explanationCN": "蚤"
  },
  {
    "character": "𗄥",
    "GX": "lheh¹",
    "GHC": "lhjịj¹",
    "explanationEN": "wizard/sorcerer",
    "explanationCN": "巫驱鬼者"
  },
  {
    "character": "𗠐",
    "GX": "ndu̱²",
    "GHC": "du̱²",
    "explanationEN": "expand/swallow",
    "explanationCN": "胀吞"
  },
  {
    "character": "𗠑",
    "GX": "rqa̱r²",
    "GHC": "kar²",
    "explanationEN": "bite/chew",
    "explanationCN": "咬嚼"
  },
  {
    "character": "𗡀",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "be.greedy.for.money.or.food/be.gluttonous",
    "explanationCN": "贪食（贪嘴）"
  },
  {
    "character": "𘚠",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "foolish/stupid",
    "explanationCN": "愚痴"
  },
  {
    "character": "𘓼",
    "GX": "pə̱¹",
    "GHC": "pə¹",
    "explanationEN": "fire",
    "explanationCN": "火离"
  },
  {
    "character": "𘓽",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "roast.meat",
    "explanationCN": "炙"
  },
  {
    "character": "𘔅",
    "GX": "rzur²",
    "GHC": "zjur²",
    "explanationEN": "torch",
    "explanationCN": "1.火炬、烛"
  },
  {
    "character": "𗟗",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "sled/sledge/sleigh",
    "explanationCN": "爬犁（雪橇）"
  },
  {
    "character": "𗇄",
    "GX": "mi̱h²",
    "GHC": "mẹ²",
    "explanationEN": "sprinkle/spread/break",
    "explanationCN": "撒洒折"
  },
  {
    "character": "𗇅",
    "GX": "tśhə¹",
    "GHC": "tśhjɨ¹",
    "explanationEN": "narrow",
    "explanationCN": "窄狭"
  },
  {
    "character": "𘚦",
    "GX": "ba²",
    "GHC": "bja²",
    "explanationEN": "a.surname",
    "explanationCN": "【跋】"
  },
  {
    "character": "𘉘",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "a.surname",
    "explanationCN": "【徐】【叙】"
  },
  {
    "character": "𗠓",
    "GX": "bah²",
    "GHC": "bjạ²",
    "explanationEN": "binder/barrier",
    "explanationCN": "障碍噎"
  },
  {
    "character": "𗠿",
    "GX": "mo¹",
    "GHC": "mjo¹",
    "explanationEN": "feed",
    "explanationCN": "喂使饮食"
  },
  {
    "character": "𘚡",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "flea",
    "explanationCN": "蚤"
  },
  {
    "character": "𘉉",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "upright",
    "explanationCN": "直"
  },
  {
    "character": "𗟛",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "leaf",
    "explanationCN": "叶"
  },
  {
    "character": "𗠔",
    "GX": "pho²",
    "GHC": "phjo²",
    "explanationEN": "causative.ʙ",
    "explanationCN": "使.ʙ"
  },
  {
    "character": "𗡚",
    "GX": "tsi̱w²",
    "GHC": "tsew²",
    "explanationEN": "fast",
    "explanationCN": "齐名词"
  },
  {
    "character": "𘉙",
    "GX": "the²",
    "GHC": "thjij²",
    "explanationEN": "scheme/stratagem",
    "explanationCN": "1.图谋、机关"
  },
  {
    "character": "𗠟",
    "GX": "nśo¹",
    "GHC": "śjo̱¹",
    "explanationEN": "slaughter.ʙ",
    "explanationCN": "屠.ʙ"
  },
  {
    "character": "𗠞",
    "GX": "nwi²",
    "GHC": "njwi²",
    "explanationEN": "swallow/devour",
    "explanationCN": "吞食"
  },
  {
    "character": "𘉍",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "light/brightness",
    "explanationCN": "光明"
  },
  {
    "character": "𘉑",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": ".indeterminative.other",
    "explanationCN": "他彼"
  },
  {
    "character": "𘉒",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "HYP:hypothetic/a.transliteration/shame",
    "explanationCN": "HYP；羞愧；【慕】【牟】【毛】【謨】、【摩】【蒙】【莽】（音 193）"
  },
  {
    "character": "𗡏",
    "GX": "mmi̱¹",
    "GHC": "me̱¹",
    "explanationEN": "fragrant",
    "explanationCN": "馥芬芳"
  },
  {
    "character": "𗡑",
    "GX": "mmi̱¹",
    "GHC": "me̱¹",
    "explanationEN": "scatter/sprinkle",
    "explanationCN": "洒撒散"
  },
  {
    "character": "𗺅",
    "GX": "sa̱¹",
    "GHC": "sa¹",
    "explanationEN": "distend",
    "explanationCN": "胀"
  },
  {
    "character": "𘚥",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "a.surname",
    "explanationCN": "【吕】【閭】【驴】【卢】"
  },
  {
    "character": "𗠍",
    "GX": "tuh¹",
    "GHC": "tjụ¹",
    "explanationEN": "net",
    "explanationCN": "网"
  },
  {
    "character": "𗠤",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "entertain.at.a.banquet",
    "explanationCN": "宴会"
  },
  {
    "character": "𗠦",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "feed",
    "explanationCN": "喂使饮"
  },
  {
    "character": "𗠲",
    "GX": "ndo̱¹",
    "GHC": "do̱¹",
    "explanationEN": "mix",
    "explanationCN": "调】"
  },
  {
    "character": "𗠹",
    "GX": "ndzi²",
    "GHC": "dzji̱²",
    "explanationEN": "teach/instruct",
    "explanationCN": "教"
  },
  {
    "character": "𗠌",
    "GX": "va¹",
    "GHC": "wja¹",
    "explanationEN": "vomit/spit",
    "explanationCN": "吐"
  },
  {
    "character": "𗠄",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "distribute.food",
    "explanationCN": "分食"
  },
  {
    "character": "𘉐",
    "GX": "γuo¹",
    "GHC": "ꞏiow¹",
    "explanationEN": "contribution/achievement",
    "explanationCN": "功用"
  },
  {
    "character": "𘉛",
    "GX": "dwa̱ṃ¹",
    "GHC": "dwã¹",
    "explanationEN": "a.place.name",
    "explanationCN": "【暖】地名"
  },
  {
    "character": "𗠧",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "a.surname",
    "explanationCN": "【契】"
  },
  {
    "character": "𘉗",
    "GX": "γuo¹",
    "GHC": "ꞏiow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【药合】"
  },
  {
    "character": "𗢆",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【舜】、【说】"
  },
  {
    "character": "𗠷",
    "GX": "pho²",
    "GHC": "phjo²",
    "explanationEN": "distinguish/differentiate",
    "explanationCN": "区分分别"
  },
  {
    "character": "𗡋",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "cry/weep",
    "explanationCN": "哭泣"
  },
  {
    "character": "𗢇",
    "GX": "kiw¹",
    "GHC": "kjiw¹",
    "explanationEN": "ditch/gully",
    "explanationCN": "沟】"
  },
  {
    "character": "𘉝",
    "GX": "na²",
    "GHC": "nja²",
    "explanationEN": "drive/expel",
    "explanationCN": "1.驱赶驱驰、走、寇、催"
  },
  {
    "character": "𗠅",
    "GX": "ŋgə¹",
    "GHC": "gjɨ̱¹",
    "explanationEN": "distribute.food",
    "explanationCN": "分食"
  },
  {
    "character": "𗠻",
    "GX": "ntha̱r¹",
    "GHC": "tha̱r¹",
    "explanationEN": "stutter/stammer",
    "explanationCN": "口吃"
  },
  {
    "character": "𗡒",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "a.kind.of.food.like.cake",
    "explanationCN": "乳头"
  },
  {
    "character": "𗡖",
    "GX": "dźe²",
    "GHC": "",
    "explanationEN": "fat/grease",
    "explanationCN": "脂膏"
  },
  {
    "character": "𗡔",
    "GX": "ŋwu̱h¹",
    "GHC": "ŋwụ¹",
    "explanationEN": "oath/pledge",
    "explanationCN": "誓"
  },
  {
    "character": "𘉞",
    "GX": "na²",
    "GHC": "nja²",
    "explanationEN": "𝟤ꜱɢ",
    "explanationCN": "𝟤ꜱɢ"
  },
  {
    "character": "𘉋",
    "GX": "ryar¹",
    "GHC": "ꞏjar¹",
    "explanationEN": "eight",
    "explanationCN": "八"
  },
  {
    "character": "𗠃",
    "GX": "tuh¹",
    "GHC": "tjụ¹",
    "explanationEN": "saliva/spittle",
    "explanationCN": "唾"
  },
  {
    "character": "𗠚",
    "GX": "thae̱h²",
    "GHC": "thẹj²",
    "explanationEN": "big/extreme",
    "explanationCN": "太大副词】"
  },
  {
    "character": "𗠺",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "hobby",
    "explanationCN": "嗜好可口"
  },
  {
    "character": "𗠳",
    "GX": "ṣai̱²",
    "GHC": "śie²",
    "explanationEN": "whistle",
    "explanationCN": "哨"
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
    "explanationEN": "throat/swallow",
    "explanationCN": "（喉咙）咽喉嚥动词"
  },
  {
    "character": "𗢄",
    "GX": "śwaṃ²",
    "GHC": "śjwã²",
    "explanationEN": "side",
    "explanationCN": "1.侧、【鶉】（珠 172）【逊】（珠 074）【唇】（珠 183）、【舜】【宣】【说】【顺】（音 201）"
  },
  {
    "character": "𗡇",
    "GX": "dźe²",
    "GHC": "",
    "explanationEN": "food/bait",
    "explanationCN": "食饵"
  },
  {
    "character": "𗠮",
    "GX": "yaw²",
    "GHC": "ꞏja̱²",
    "explanationEN": "entertaimnent",
    "explanationCN": "唱歌娱乐"
  },
  {
    "character": "𗠸",
    "GX": "ndə²",
    "GHC": "djɨ̱²",
    "explanationEN": "smile/laugh",
    "explanationCN": "笑"
  },
  {
    "character": "𗠽",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "elder.brother",
    "explanationCN": "1.哥】、【歌】、【葛】"
  },
  {
    "character": "𗡕",
    "GX": "nu²",
    "GHC": "nju²",
    "explanationEN": "breast-feed/nurse",
    "explanationCN": "喂奶"
  },
  {
    "character": "𗠾",
    "GX": "tsu̱h²",
    "GHC": "tsụ²",
    "explanationEN": "cough",
    "explanationCN": "咳嗽"
  },
  {
    "character": "𗠼",
    "GX": "nlle²",
    "GHC": "lji̱j²",
    "explanationEN": "tasty/delicious",
    "explanationCN": "可口嗜好"
  },
  {
    "character": "𗠛",
    "GX": "lhuh²",
    "GHC": "ljụ²",
    "explanationEN": "swallow/eat/drink",
    "explanationCN": "1.食吃吞饮、浆汁"
  },
  {
    "character": "𗡂",
    "GX": "thwo̱²",
    "GHC": "thwo²",
    "explanationEN": "rear/howl",
    "explanationCN": "1.吼、何谁"
  },
  {
    "character": "𗡁",
    "GX": "ŋah²",
    "GHC": "ŋiạ²",
    "explanationEN": "a.round.flat.cake",
    "explanationCN": "饼"
  },
  {
    "character": "𗡝",
    "GX": "ka¹",
    "GHC": "kja¹",
    "explanationEN": "how.about",
    "explanationCN": "1.何如、【吉】【建】【蹇】【伽】【揭】【坚】【迦】【汲】"
  },
  {
    "character": "𗠋",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "instigate/abet",
    "explanationCN": "嗾使"
  },
  {
    "character": "𗡍",
    "GX": "pai̱h¹",
    "GHC": "piẹ¹",
    "explanationEN": "spit",
    "explanationCN": "吐"
  },
  {
    "character": "𗠴",
    "GX": "γaa̱²",
    "GHC": "ꞏia²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【哑】"
  },
  {
    "character": "𗸤",
    "GX": "ti̱ṃ¹",
    "GHC": "tẽ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "鐙等"
  },
  {
    "character": "𘚔",
    "GX": "mme²",
    "GHC": "mji̱j²",
    "explanationEN": "below/down/tip/end",
    "explanationCN": "1.下末尾终名词、二字重迭為“渐渐”之义"
  },
  {
    "character": "𘉔",
    "GX": "dwa̱²",
    "GHC": "dwa²",
    "explanationEN": "knit",
    "explanationCN": "织"
  },
  {
    "character": "𘔄",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "eat",
    "explanationCN": "食"
  },
  {
    "character": "𘔉",
    "GX": "rdwə̱r²",
    "GHC": "dwər²",
    "explanationEN": "burn/kindle",
    "explanationCN": "燃烧"
  },
  {
    "character": "𘓻",
    "GX": "ŋγi¹",
    "GHC": "ɣji̱¹",
    "explanationEN": "cook/boil",
    "explanationCN": "煮熬"
  },
  {
    "character": "𘚻",
    "GX": "di̱²",
    "GHC": "de²",
    "explanationEN": "happy/like/love",
    "explanationCN": "喜喜欢动词"
  },
  {
    "character": "𘔀",
    "GX": "vu¹",
    "GHC": "wju¹",
    "explanationEN": "pot/pan",
    "explanationCN": "锅罐"
  },
  {
    "character": "𘔈",
    "GX": "rdwə̱r¹",
    "GHC": "dwər¹",
    "explanationEN": "a.kind.of.sore",
    "explanationCN": "【毒】疮名"
  },
  {
    "character": "𗟙",
    "GX": "rthwə̱r¹",
    "GHC": "thwər¹",
    "explanationEN": "burn",
    "explanationCN": "1.烧、柴薪、【盾】"
  },
  {
    "character": "𘟎",
    "GX": "tshwu¹",
    "GHC": "tshjwu¹",
    "explanationEN": "cook/boil",
    "explanationCN": "煮"
  },
  {
    "character": "𗠗",
    "GX": "pi¹",
    "GHC": "pji¹",
    "explanationEN": "thunderbolt/thunderclap",
    "explanationCN": "霹靂"
  },
  {
    "character": "𗠢",
    "GX": "mphə¹",
    "GHC": "phjɨ̱¹",
    "explanationEN": "fear/dread",
    "explanationCN": "畏惧"
  },
  {
    "character": "𗡜",
    "GX": "keh¹",
    "GHC": "kjịj¹",
    "explanationEN": "offer.a.sacrifice",
    "explanationCN": "1.祭、薰"
  },
  {
    "character": "𗠶",
    "GX": "nźə¹",
    "GHC": "źjɨ̱¹",
    "explanationEN": "pierce.through/penetrate",
    "explanationCN": "穿刺"
  },
  {
    "character": "𗡘",
    "GX": "ndə¹",
    "GHC": "djɨ̱¹",
    "explanationEN": "frivolous",
    "explanationCN": "佻薄轻浮"
  },
  {
    "character": "𘉎",
    "GX": "dwa̱²",
    "GHC": "dwa²",
    "explanationEN": "many/much",
    "explanationCN": "多"
  },
  {
    "character": "𘉚",
    "GX": "dwa̱²",
    "GHC": "dwa²",
    "explanationEN": "hide",
    "explanationCN": "躲"
  },
  {
    "character": "𗠊",
    "GX": "dźaṃ¹",
    "GHC": "dźjã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【湛】"
  },
  {
    "character": "𗠖",
    "GX": "rγa̱r¹",
    "GHC": "ɣar¹",
    "explanationEN": "accuse.falsely",
    "explanationCN": "诬"
  },
  {
    "character": "𗠠",
    "GX": "ndo̱²",
    "GHC": "do̱²",
    "explanationEN": "banquet/feast",
    "explanationCN": "宴"
  },
  {
    "character": "𘉕",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "brilliant/magnificent/glorious",
    "explanationCN": "光辉"
  },
  {
    "character": "𘉖",
    "GX": "rpwər¹",
    "GHC": "pjwɨ̱r¹",
    "explanationEN": "cheat/deceive/change",
    "explanationCN": "骗变"
  },
  {
    "character": "𗡛",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "coriander",
    "explanationCN": "香菜"
  },
  {
    "character": "𗇃",
    "GX": "hwa̱²",
    "GHC": "xwa²",
    "explanationEN": "trench",
    "explanationCN": "1.壕井、【哈】"
  },
  {
    "character": "𗠕",
    "GX": "tha²",
    "GHC": "thja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【碟】"
  },
  {
    "character": "𗠙",
    "GX": "rbaə̱r¹",
    "GHC": "biər¹",
    "explanationEN": "a.kind.of.disease.in.nose",
    "explanationCN": "瘜鼻竇"
  },
  {
    "character": "𗠥",
    "GX": "ndo¹",
    "GHC": "djo̱¹",
    "explanationEN": "pick.out/select",
    "explanationCN": "拣捨持"
  },
  {
    "character": "𗡆",
    "GX": "rphə̱r¹",
    "GHC": "phər¹",
    "explanationEN": "sprinkle",
    "explanationCN": "泼】"
  },
  {
    "character": "𗠯",
    "GX": "rtshar¹",
    "GHC": "tshjar¹",
    "explanationEN": "instigate/calumniate",
    "explanationCN": "唆谗谤"
  },
  {
    "character": "𘚧",
    "GX": "???",
    "GHC": "",
    "explanationEN": "recommend",
    "explanationCN": "（按；此字仅见于聂氏词书）英文释义to recommend详细解释请参考《简明夏汉字典》第558页。聂歷山（Nevsky）释义荐mojikyo字体脸景永时字体葻"
  },
  {
    "character": "𘉓",
    "GX": "bya²",
    "GHC": "bja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【埋】【别】"
  },
  {
    "character": "𗡓",
    "GX": "thaw²",
    "GHC": "thja̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【条】【銚】"
  },
  {
    "character": "𗠱",
    "GX": "the¹",
    "GHC": "thjij¹",
    "explanationEN": "call.out/shout",
    "explanationCN": "呼喊呼唤"
  },
  {
    "character": "𗠰",
    "GX": "thi¹",
    "GHC": "thji¹",
    "explanationEN": "drink/eat",
    "explanationCN": "饮服喝"
  },
  {
    "character": "𘓿",
    "GX": "vwai̱²",
    "GHC": "wie²",
    "explanationEN": "stew",
    "explanationCN": "煨】"
  },
  {
    "character": "𘓾",
    "GX": "yaṃ¹",
    "GHC": "ꞏjã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【淹】【延】【焉】【严】【燕】【閆】、【筵】（珠 335）【烟】（珠 086）【焰】（珠 075）【演】（珠 365）【燕】（珠 126）、【厌】【淹】【阎】【盐】（音 203）"
  },
  {
    "character": "𘔁",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "one.of.the.decimal.cycle.of.ten.characters",
    "explanationCN": "丙"
  },
  {
    "character": "𘔂",
    "GX": "dźih¹",
    "GHC": "dźjɨ̣¹",
    "explanationEN": "burn",
    "explanationCN": "烧"
  },
  {
    "character": "𘔇",
    "GX": "lha̱¹",
    "GHC": "lha¹",
    "explanationEN": "extinguish/put.out",
    "explanationCN": "1.熄灭、删、蔑"
  },
  {
    "character": "𗟞",
    "GX": "lli̱h¹",
    "GHC": "lẹ¹",
    "explanationEN": "boil/cook",
    "explanationCN": "1.煮、煎"
  },
  {
    "character": "𘟍",
    "GX": "ẓai̱²",
    "GHC": "źie²",
    "explanationEN": "cook/boil",
    "explanationCN": "煮熬"
  },
  {
    "character": "𘉊",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "spinach",
    "explanationCN": "菠菜"
  },
  {
    "character": "𗠣",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "eat/food",
    "explanationCN": "食动词"
  },
  {
    "character": "𗠘",
    "GX": "kəh²",
    "GHC": "kjɨ̣²",
    "explanationEN": "eat",
    "explanationCN": "1.食、鐖"
  },
  {
    "character": "𗠡",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "below/down",
    "explanationCN": "下以下"
  },
  {
    "character": "𘔃",
    "GX": "tswu¹",
    "GHC": "tsjwu¹",
    "explanationEN": "kettle",
    "explanationCN": "壶"
  },
  {
    "character": "𘚤",
    "GX": "rthwə̱r¹",
    "GHC": "thwər¹",
    "explanationEN": "jump",
    "explanationCN": "跃起"
  },
  {
    "character": "𘝣",
    "GX": "ṇae̱ṃ¹",
    "GHC": "niəj¹",
    "explanationEN": "turbid/muddy",
    "explanationCN": "浊"
  },
  {
    "character": "𗒊",
    "GX": "ṇae̱ṃ²",
    "GHC": "",
    "explanationEN": "dirt/filth",
    "explanationCN": "垢"
  },
  {
    "character": "𘛍",
    "GX": "nwu̱¹",
    "GHC": "nwu¹",
    "explanationEN": "baby/infant",
    "explanationCN": "婴儿柔软"
  },
  {
    "character": "𘍐",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "toil/hard.work",
    "explanationCN": "劳苦"
  },
  {
    "character": "𗐮",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "ball",
    "explanationCN": "丸（圆形）"
  },
  {
    "character": "𘁏",
    "GX": "bə̱²",
    "GHC": "bə²",
    "explanationEN": "bull",
    "explanationCN": "公牛"
  },
  {
    "character": "𗑞",
    "GX": "khiw¹",
    "GHC": "khjiw¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【求】【蕎】"
  },
  {
    "character": "𘖞",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "rich/wealthy",
    "explanationCN": "富有"
  },
  {
    "character": "𘖭",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "ploughshare",
    "explanationCN": "鏵"
  },
  {
    "character": "𗐴",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "ear",
    "explanationCN": "耳"
  },
  {
    "character": "𗯧",
    "GX": "ŋkhə²",
    "GHC": "khjɨ̱²",
    "explanationEN": "chimney/window/hole",
    "explanationCN": "1.窗窗孔、间……之间介词"
  },
  {
    "character": "𗑷",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "all",
    "explanationCN": "皆悉尽总"
  },
  {
    "character": "𗑉",
    "GX": "me̱¹",
    "GHC": "mej¹",
    "explanationEN": "eyes",
    "explanationCN": "眼目"
  },
  {
    "character": "𗑹",
    "GX": "γa̱ṃ¹",
    "GHC": "ꞏã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【安】【庵】"
  },
  {
    "character": "𗓷",
    "GX": "khwaṃ¹",
    "GHC": "khjwã¹",
    "explanationEN": "a.surname",
    "explanationCN": "【群】【郡】【权】"
  },
  {
    "character": "𗓻",
    "GX": "rqhaa̱r¹",
    "GHC": "khiar¹",
    "explanationEN": "mist",
    "explanationCN": "阳焰"
  },
  {
    "character": "𘖷",
    "GX": "mah¹",
    "GHC": "mjạ¹",
    "explanationEN": "dig/gnaw/bite",
    "explanationCN": "掘凿嚙"
  },
  {
    "character": "𗇝",
    "GX": "rywar¹",
    "GHC": "ꞏjwar¹",
    "explanationEN": "light/glittering",
    "explanationCN": "1.亮闪耀、【越】"
  },
  {
    "character": "𗑜",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "treasure",
    "explanationCN": "宝物"
  },
  {
    "character": "𗓐",
    "GX": "γəh¹",
    "GHC": "ɣjɨ̣¹",
    "explanationEN": "rumor",
    "explanationCN": "1.流言、【頡】"
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
    "explanationCN": "深玄绝幽"
  },
  {
    "character": "𗑘",
    "GX": "swe̱¹",
    "GHC": "swej¹",
    "explanationEN": "clean/spotless",
    "explanationCN": "洁净"
  },
  {
    "character": "𗒫",
    "GX": "ŋgiw¹",
    "GHC": "gji̱w¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【牛】"
  },
  {
    "character": "𗒨",
    "GX": "ba̱h¹",
    "GHC": "bạ¹",
    "explanationEN": "cymbals",
    "explanationCN": "鈸】"
  },
  {
    "character": "𗔥",
    "GX": "dzi̱¹",
    "GHC": "dze¹",
    "explanationEN": "contend/quarrel",
    "explanationCN": "1.争、蜈蚣"
  },
  {
    "character": "𗔣",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【令】【林】【陵】"
  },
  {
    "character": "𗔸",
    "GX": "ba̱h²",
    "GHC": "bạ²",
    "explanationEN": "a.surname",
    "explanationCN": "1.【跋】、头髮名词"
  },
  {
    "character": "𗔫",
    "GX": "duh¹",
    "GHC": "djụ¹",
    "explanationEN": "meet/encounter",
    "explanationCN": "遇值"
  },
  {
    "character": "𗔟",
    "GX": "rṇar¹",
    "GHC": "n-",
    "explanationEN": "a.surname",
    "explanationCN": "【纽】【寧】"
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
    "explanationEN": "get/gain",
    "explanationCN": "1.得、停止"
  },
  {
    "character": "𘁔",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "big.ox.(elephant)",
    "explanationCN": "大牛（象）"
  },
  {
    "character": "𘖴",
    "GX": "tswa̱ṃ¹",
    "GHC": "tswã¹",
    "explanationEN": "drill/bore",
    "explanationCN": "1.钻】、【纂】地名"
  },
  {
    "character": "𗓗",
    "GX": "ndźu²",
    "GHC": "dźju̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【女】】"
  },
  {
    "character": "𗒈",
    "GX": "dẓae̱ṃ¹",
    "GHC": "dźiəj²",
    "explanationEN": "pool/pond",
    "explanationCN": "池"
  },
  {
    "character": "𗒢",
    "GX": "ṣae̱¹",
    "GHC": "śiej¹",
    "explanationEN": "guide/lead",
    "explanationCN": "引导"
  },
  {
    "character": "𗑼",
    "GX": "ne¹",
    "GHC": "njij¹",
    "explanationEN": "end/east",
    "explanationCN": "末尾东方"
  },
  {
    "character": "𗓽",
    "GX": "lo̱¹",
    "GHC": "lo¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【郎】【罗】、【萝】（珠 146）【饠】（珠 344）【糯】（珠 155）【骡】（珠 164）【骆】（珠 163）【珞】（珠 211）【乐】（珠 323）【螺】（珠 212）【狼】（珠 164）【廊】（珠 221）"
  },
  {
    "character": "𗔖",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "slaughter/butcher",
    "explanationCN": "宰】"
  },
  {
    "character": "𗔴",
    "GX": "ryur²",
    "GHC": "ꞏjur²",
    "explanationEN": "a.surname",
    "explanationCN": "【育】【域】"
  },
  {
    "character": "𗯨",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "world/capital.city",
    "explanationCN": "世界京城"
  },
  {
    "character": "𘎏",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "lure/seduce",
    "explanationCN": "1.引诱、召"
  },
  {
    "character": "𘖝",
    "GX": "???",
    "GHC": "",
    "explanationEN": "a.transliteration",
    "explanationCN": "（按：罗福成注：“溶字是否如此写法”？考证出疑笔误。此字凡三见，一并录此，供读者参考）英文释义a transliteration详细解释请参考《简明夏汉字典》第565页。mojikyo字体茉景永时字体溶"
  },
  {
    "character": "𘗇",
    "GX": "tṣhwaa̱¹",
    "GHC": "tśhiwa¹",
    "explanationEN": "suppress/stifle",
    "explanationCN": "压制"
  },
  {
    "character": "𘖱",
    "GX": "nẓau̱¹",
    "GHC": "źju̱¹",
    "explanationEN": "bell",
    "explanationCN": "铃"
  },
  {
    "character": "𗓛",
    "GX": "ṇwə̱²",
    "GHC": "nuə",
    "explanationEN": "wizard/sorcere",
    "explanationCN": "巫师"
  },
  {
    "character": "𗐯",
    "GX": "qae̱h²",
    "GHC": "kiẹj²",
    "explanationEN": "boundary",
    "explanationCN": "1.界】、潮、朝、京师"
  },
  {
    "character": "𗐶",
    "GX": "la̱h¹",
    "GHC": "lạ²",
    "explanationEN": "estimate",
    "explanationCN": "量目测"
  },
  {
    "character": "𗑋",
    "GX": "qhao̱ṃ²",
    "GHC": "khjow²",
    "explanationEN": "basket",
    "explanationCN": "筐子"
  },
  {
    "character": "𗒬",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "neck",
    "explanationCN": "脛项"
  },
  {
    "character": "𗑓",
    "GX": "di¹",
    "GHC": "dji¹",
    "explanationEN": "shift/move",
    "explanationCN": "移徒迁动"
  },
  {
    "character": "𗒠",
    "GX": "qae̱²",
    "GHC": "kiej²",
    "explanationEN": "cervical.vertebra",
    "explanationCN": "轮转（颈骨）名词"
  },
  {
    "character": "𗑻",
    "GX": "γa̱h¹",
    "GHC": "ɣạ¹",
    "explanationEN": "joint/very.close.relative",
    "explanationCN": "关节至亲"
  },
  {
    "character": "𗔔",
    "GX": "lhuh²",
    "GHC": "lhjụ²",
    "explanationEN": "bamboo",
    "explanationCN": "1.竹、芭蕉"
  },
  {
    "character": "𗒣",
    "GX": "bih²",
    "GHC": "bjị²",
    "explanationEN": "advocate/preach",
    "explanationCN": "鼓吹"
  },
  {
    "character": "𗑅",
    "GX": "gəh²",
    "GHC": "gjɨ̣²",
    "explanationEN": "ancestor/forebear",
    "explanationCN": "祖先"
  },
  {
    "character": "𗓈",
    "GX": "lhwu̱¹",
    "GHC": "lhwu¹",
    "explanationEN": "clothes/clothing",
    "explanationCN": "衣服"
  },
  {
    "character": "𗔇",
    "GX": "γu̱h²",
    "GHC": "ꞏụ²",
    "explanationEN": "storehouse/warehouse",
    "explanationCN": "仓库藏府当"
  },
  {
    "character": "𗒭",
    "GX": "khə¹",
    "GHC": "khjɨ¹",
    "explanationEN": "brother’s.son/nephew",
    "explanationCN": "侄子"
  },
  {
    "character": "𗔠",
    "GX": "tsu¹",
    "GHC": "sju¹",
    "explanationEN": "store/save",
    "explanationCN": "藏怀贮"
  },
  {
    "character": "𗓖",
    "GX": "ŋga²",
    "GHC": "gja̱²",
    "explanationEN": "dexterous/nimble",
    "explanationCN": "灵巧刚勇"
  },
  {
    "character": "𘎎",
    "GX": "swu̱²",
    "GHC": "swu²",
    "explanationEN": "full/filled",
    "explanationCN": "满盈"
  },
  {
    "character": "𘗁",
    "GX": "dźa²",
    "GHC": "dźja²",
    "explanationEN": "sharp/firm",
    "explanationCN": "刚利明快锋"
  },
  {
    "character": "𗓳",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "fat/corpulent",
    "explanationCN": "肥胖"
  },
  {
    "character": "𗓚",
    "GX": "ma̱²",
    "GHC": "ma²",
    "explanationEN": "apply/daub",
    "explanationCN": "抹】"
  },
  {
    "character": "𘖣",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "calm/quiet",
    "explanationCN": "心静"
  },
  {
    "character": "𗑝",
    "GX": "rtsi̱wr¹",
    "GHC": "tsewr¹",
    "explanationEN": "joint",
    "explanationCN": "1.节】、辈、重、数"
  },
  {
    "character": "𗑱",
    "GX": "ka²",
    "GHC": "kja²",
    "explanationEN": "rob/steps",
    "explanationCN": "劫阶】"
  },
  {
    "character": "𘃙",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "alone/lonely",
    "explanationCN": "单"
  },
  {
    "character": "𗭅",
    "GX": "dźə¹",
    "GHC": "dźjɨ",
    "explanationEN": "silk",
    "explanationCN": "绢（丝帛）"
  },
  {
    "character": "𘍝",
    "GX": "γao̱h¹",
    "GHC": "ꞏiọ¹",
    "explanationEN": "round",
    "explanationCN": "圆"
  },
  {
    "character": "𗑁",
    "GX": "yo̱ṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "appearance/shape",
    "explanationCN": "1.样】、【邕】【融】【雍】【容】【应】【雄】【阳】"
  },
  {
    "character": "𘖾",
    "GX": "rŋu̱r¹",
    "GHC": "ŋur¹",
    "explanationEN": "a.kind.of.mineral.smelt.copper",
    "explanationCN": "鍮"
  },
  {
    "character": "𗓀",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "hide/conceal",
    "explanationCN": "匿"
  },
  {
    "character": "𗭁",
    "GX": "rbu̱r¹",
    "GHC": "bur¹",
    "explanationEN": "shell",
    "explanationCN": "贝"
  },
  {
    "character": "𗬻",
    "GX": "ŋġo̱r¹",
    "GHC": "ko̱r¹",
    "explanationEN": "brocade",
    "explanationCN": "锦紈"
  },
  {
    "character": "𗭀",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "silk/satin",
    "explanationCN": "綾罗"
  },
  {
    "character": "𗑈",
    "GX": "dzəh²",
    "GHC": "dzjɨ̣²",
    "explanationEN": "pat/beat",
    "explanationCN": "拍"
  },
  {
    "character": "𗑗",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "clean/quiet",
    "explanationCN": "1.清净、静书"
  },
  {
    "character": "𗒪",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "altar",
    "explanationCN": "坛"
  },
  {
    "character": "𗑦",
    "GX": "rśwər¹",
    "GHC": "śjwɨr¹",
    "explanationEN": "frank/straightforward",
    "explanationCN": "直"
  },
  {
    "character": "𗓜",
    "GX": "rkhor¹",
    "GHC": "khjo̱r¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【羌】"
  },
  {
    "character": "𘖤",
    "GX": "ŋqhae̱¹",
    "GHC": "khie̱j¹",
    "explanationEN": "clank/clang",
    "explanationCN": "錚"
  },
  {
    "character": "𗬹",
    "GX": "reṃ²",
    "GHC": "rjɨj²",
    "explanationEN": "silk",
    "explanationCN": "丝"
  },
  {
    "character": "𗭄",
    "GX": "teṃh¹",
    "GHC": "tjɨj¹",
    "explanationEN": "satin",
    "explanationCN": "綾"
  },
  {
    "character": "𗑵",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "big.cymbals",
    "explanationCN": "鐃"
  },
  {
    "character": "𗑊",
    "GX": "ŋa̱²",
    "GHC": "ŋa²",
    "explanationEN": "night/evening",
    "explanationCN": "夜晚"
  },
  {
    "character": "𗐹",
    "GX": "γa̱ṃ¹",
    "GHC": "ꞏã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【安】【奄】"
  },
  {
    "character": "𗐭",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "speak/say",
    "explanationCN": "说"
  },
  {
    "character": "𗓓",
    "GX": "tśhe¹",
    "GHC": "tśhjij¹",
    "explanationEN": "go/walk",
    "explanationCN": "行"
  },
  {
    "character": "𗒋",
    "GX": "ṣao̱ṃ¹",
    "GHC": "śiow¹",
    "explanationEN": "gather/collect",
    "explanationCN": "集聚"
  },
  {
    "character": "𘖟",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "lance/spear",
    "explanationCN": "枪矛戟"
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
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【卜】菜名"
  },
  {
    "character": "𗑸",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "fight/struggle",
    "explanationCN": "争鬭"
  },
  {
    "character": "𗑒",
    "GX": "śwa¹",
    "GHC": "śjwa¹",
    "explanationEN": "ambition/will",
    "explanationCN": "志"
  },
  {
    "character": "𗑰",
    "GX": "tshe̱¹",
    "GHC": "tshej¹",
    "explanationEN": "property/wealth",
    "explanationCN": "1.财】、【菜】（珠 144）【裁】（珠 244）【在】（珠 316）【蔡】【才】（音 198）"
  },
  {
    "character": "𗬷",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "a.kind.of.silk.gauze",
    "explanationCN": "紫罗"
  },
  {
    "character": "𗬿",
    "GX": "rni̱r²",
    "GHC": "ner²",
    "explanationEN": "tough.silk",
    "explanationCN": "绢"
  },
  {
    "character": "𗬼",
    "GX": "ryər²",
    "GHC": "ꞏjɨr²",
    "explanationEN": "silk",
    "explanationCN": "绢帛縞彩"
  },
  {
    "character": "𗬾",
    "GX": "luh²",
    "GHC": "ljụ²",
    "explanationEN": "silk",
    "explanationCN": "丝"
  },
  {
    "character": "𗭃",
    "GX": "hoṃ²",
    "GHC": "xjow²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【凶】鸟名"
  },
  {
    "character": "𗐪",
    "GX": "qhao̱ṃ²",
    "GHC": "khjow²",
    "explanationEN": "respectability",
    "explanationCN": "1.恪、【可】（珠 314）【空】（珠 041）【箜】（珠 324）【坤】（珠 102）【眶】（珠 185）、【康】【羌】【軻】【广】【颗】【旷】【孔】【共】（音 196）"
  },
  {
    "character": "𗓙",
    "GX": "pə̱h¹",
    "GHC": "pə¹",
    "explanationEN": "hit/fix.exactly",
    "explanationCN": "著着中"
  },
  {
    "character": "𘞧",
    "GX": "nlhi̱w²",
    "GHC": "lhe̱w²",
    "explanationEN": "only/single",
    "explanationCN": "1.独、印章"
  },
  {
    "character": "𗒹",
    "GX": "śah¹",
    "GHC": "śjạ¹",
    "explanationEN": "seven",
    "explanationCN": "七"
  },
  {
    "character": "𘖈",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "skill.ability",
    "explanationCN": "领】"
  },
  {
    "character": "𘖠",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "timid.and.weak-willed",
    "explanationCN": "怯弱"
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
    "explanationEN": "mixed.silk",
    "explanationCN": "混丝"
  },
  {
    "character": "𗔕",
    "GX": "rnir²",
    "GHC": "njir²",
    "explanationEN": "platform/stage",
    "explanationCN": "臺"
  },
  {
    "character": "𗓘",
    "GX": "nheṃ¹",
    "GHC": "xjɨj¹",
    "explanationEN": "wide/broad",
    "explanationCN": "宽阔"
  },
  {
    "character": "𗔐",
    "GX": "nuh²",
    "GHC": "njụ²",
    "explanationEN": "kind",
    "explanationCN": "善良"
  },
  {
    "character": "𗔏",
    "GX": "lwu̱h²",
    "GHC": "lwụ²",
    "explanationEN": "stir/agitate/mix",
    "explanationCN": "搅拌"
  },
  {
    "character": "𘖩",
    "GX": "ŋqo̱²",
    "GHC": "ko̱²",
    "explanationEN": "pliers/pincers/forceps",
    "explanationCN": "鈐（钳）"
  },
  {
    "character": "𗑐",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "a.surname",
    "explanationCN": "【鲁】【炉】【路】"
  },
  {
    "character": "𗑺",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【纽】菜名"
  },
  {
    "character": "𗓲",
    "GX": "bo̱¹",
    "GHC": "bo¹",
    "explanationEN": "robe/gown",
    "explanationCN": "袍】"
  },
  {
    "character": "𗒻",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "skillful/nimble",
    "explanationCN": "1.灵巧、志"
  },
  {
    "character": "𗓪",
    "GX": "swiṃ¹",
    "GHC": "sjwĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【旬】】、【荀】【询】【孙】【巡】"
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
    "GHC": "mẽ¹",
    "explanationEN": "door/entrance",
    "explanationCN": "门】"
  },
  {
    "character": "𗐫",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "tell",
    "explanationCN": "告"
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
    "GHC": "ꞏjwɨr²",
    "explanationEN": "writing",
    "explanationCN": "1.文、铭、法、书"
  },
  {
    "character": "𗑑",
    "GX": "rmao̱r¹",
    "GHC": "mior¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【妙】【卯】【貌】"
  },
  {
    "character": "𗑬",
    "GX": "dzu̱¹",
    "GHC": "dzu¹",
    "explanationEN": "dregs/residue",
    "explanationCN": "渣滓"
  },
  {
    "character": "𗔑",
    "GX": "qa̱h²",
    "GHC": "kạ²",
    "explanationEN": "clothes.for.cattle/leather",
    "explanationCN": "牛衣革"
  },
  {
    "character": "𗒺",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "broken/fragmentary",
    "explanationCN": "破碎;零碎"
  },
  {
    "character": "𘎒",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "hot.pepper",
    "explanationCN": "辣椒"
  },
  {
    "character": "𗐵",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "see.ʙ",
    "explanationCN": "看.ʙ"
  },
  {
    "character": "𗐸",
    "GX": "se̱¹",
    "GHC": "sej¹",
    "explanationEN": "a.surname",
    "explanationCN": "【塞】【腮】"
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
    "explanationEN": "a.transliteration",
    "explanationCN": "【讫】【契】"
  },
  {
    "character": "𗒯",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "lose",
    "explanationCN": "1.丢失落弃、【奇】【錡】【起】【骑】【祗】【耆】【企】【崎】【却】【杞】【忌】【靳】【岐】"
  },
  {
    "character": "𗒼",
    "GX": "qhwae̱h¹",
    "GHC": "khwẹj¹",
    "explanationEN": "expand/enlarge",
    "explanationCN": "1.扩拓、骄慢"
  },
  {
    "character": "𗓩",
    "GX": "be̱ṃ¹",
    "GHC": "bəj¹",
    "explanationEN": "wide/vast/flat",
    "explanationCN": "广平"
  },
  {
    "character": "𗓏",
    "GX": "dźi?",
    "GHC": "dźji",
    "explanationEN": "look/see",
    "explanationCN": "1.览瞻、缨縵"
  },
  {
    "character": "𗒛",
    "GX": "γu̱h²",
    "GHC": "ꞏụ²",
    "explanationEN": "ride",
    "explanationCN": "乘名词"
  },
  {
    "character": "𘁒",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "brush/wipe/whisk",
    "explanationCN": "拂搔"
  },
  {
    "character": "𘖪",
    "GX": "rqaə̱r¹",
    "GHC": "kiər¹",
    "explanationEN": "thick/saw",
    "explanationCN": "粗锯名词"
  },
  {
    "character": "𘖯",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "a.kind.of.container.cook",
    "explanationCN": "鐺釜鑊缶"
  },
  {
    "character": "𘖼",
    "GX": "vaa̱ṃ²",
    "GHC": "wiã²",
    "explanationEN": "arrowhead",
    "explanationCN": "鏃"
  },
  {
    "character": "𘖽",
    "GX": "???",
    "GHC": "",
    "explanationEN": "plough",
    "explanationCN": "耒"
  },
  {
    "character": "𘖹",
    "GX": "lhə̱²",
    "GHC": "lhə",
    "explanationEN": "plane.(for.carpentry)",
    "explanationCN": "鉋（刨）"
  },
  {
    "character": "𗑖",
    "GX": "rŋwi̱r¹",
    "GHC": "ŋwer¹",
    "explanationEN": "a.hint.given.with.the.eyes",
    "explanationCN": "眼色"
  },
  {
    "character": "𗑆",
    "GX": "ntə¹",
    "GHC": "tjɨ̱¹",
    "explanationEN": "share/glare",
    "explanationCN": "瞪"
  },
  {
    "character": "𗑇",
    "GX": "ma̱h¹",
    "GHC": "mạ¹",
    "explanationEN": "son-in-law/husband",
    "explanationCN": "婿"
  },
  {
    "character": "𗔜",
    "GX": "lwe̱ṃ¹",
    "GHC": "lwəj¹",
    "explanationEN": "fast/rapid",
    "explanationCN": "快速"
  },
  {
    "character": "𗒡",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "go/walk",
    "explanationCN": "行走"
  },
  {
    "character": "𗒮",
    "GX": "khaw¹",
    "GHC": "khja̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【恰】【卡】"
  },
  {
    "character": "𗓭",
    "GX": "lwe̱¹",
    "GHC": "lwej¹",
    "explanationEN": "wealth",
    "explanationCN": "1.富、【雷】"
  },
  {
    "character": "𗒾",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "sleep",
    "explanationCN": "睡眠卧寝"
  },
  {
    "character": "𗓍",
    "GX": "nṣaa̱²",
    "GHC": "śia̱²",
    "explanationEN": "turbulent.(current)",
    "explanationCN": "激流急流"
  },
  {
    "character": "𘎐",
    "GX": "tṣae̱h²",
    "GHC": "tśiẹj²",
    "explanationEN": "continue/mend",
    "explanationCN": "1.续补、遍、与?同义：换免罢、繫帮守"
  },
  {
    "character": "𗒔",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "a.surname",
    "explanationCN": "【鄂】【峨】"
  },
  {
    "character": "𗔯",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "fight/struggle",
    "explanationCN": "争"
  },
  {
    "character": "𗔗",
    "GX": "śaw²",
    "GHC": "śja̱²",
    "explanationEN": "stinking/smelly",
    "explanationCN": "1.臭味、【少】【邵】【绍】"
  },
  {
    "character": "𗑔",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "honest/sincere",
    "explanationCN": "诚实果然"
  },
  {
    "character": "𗓔",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "a.surname",
    "explanationCN": "【清】【青】"
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
    "GHC": "njụ²",
    "explanationEN": "milk",
    "explanationCN": "奶喂"
  },
  {
    "character": "𗔹",
    "GX": "ryer¹",
    "GHC": "ꞏjijr¹",
    "explanationEN": "a.surname",
    "explanationCN": "【夷】【依】"
  },
  {
    "character": "𗒧",
    "GX": "γa̱h¹",
    "GHC": "ɣạ¹",
    "explanationEN": "cut.off/take.off",
    "explanationCN": "脱断"
  },
  {
    "character": "𗒓",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "gorgeous",
    "explanationCN": "1.绚丽、【察】"
  },
  {
    "character": "𗓴",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "a.kind.of.clothing.making.of.crude.gunny",
    "explanationCN": "褐衫"
  },
  {
    "character": "𗔆",
    "GX": "so¹",
    "GHC": "sjo¹",
    "explanationEN": "store/lay.in",
    "explanationCN": "贮藏"
  },
  {
    "character": "𗔧",
    "GX": "su²",
    "GHC": "sju²",
    "explanationEN": "cupboard/cabinet",
    "explanationCN": "柜"
  },
  {
    "character": "𘗐",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "ɪɴᴛʀɢ/ᴏᴘᴛ",
    "explanationCN": "ɪɴᴛʀɢ/ᴏᴘᴛ"
  },
  {
    "character": "𗐰",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "apron",
    "explanationCN": "襴"
  },
  {
    "character": "𗐷",
    "GX": "səh¹",
    "GHC": "sjɨ̣¹",
    "explanationEN": "clean",
    "explanationCN": "清洁"
  },
  {
    "character": "𗒝",
    "GX": "miṃ¹",
    "GHC": "mjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【旻】【民】【名】【閔】【愍】【泯】"
  },
  {
    "character": "𗒿",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "storehouse/warehouse",
    "explanationCN": "1.仓库、【路】【论】"
  },
  {
    "character": "𘖮",
    "GX": "ŋkhu¹",
    "GHC": "khju̱¹",
    "explanationEN": "burnt",
    "explanationCN": "焦"
  },
  {
    "character": "𗓼",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "oath/vow",
    "explanationCN": "誓"
  },
  {
    "character": "𗑙",
    "GX": "γa̱ṃ¹",
    "GHC": "ɣã¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【安】、【案】（珠 285）【鞍】（珠 062）【鵪】（珠 172）"
  },
  {
    "character": "𗒩",
    "GX": "nu¹",
    "GHC": "nju¹",
    "explanationEN": "a.surname",
    "explanationCN": "【纽】"
  },
  {
    "character": "𗓎",
    "GX": "llwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "mix/blend",
    "explanationCN": "和混合"
  },
  {
    "character": "𗔄",
    "GX": "baa̱²",
    "GHC": "bia²",
    "explanationEN": "gruel/porridge/congee",
    "explanationCN": "1.粥、炊"
  },
  {
    "character": "𗔾",
    "GX": "qhaə̱¹",
    "GHC": "khjə¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【乞】、刚形容词"
  },
  {
    "character": "𗑚",
    "GX": "ŋġa̱r¹",
    "GHC": "ga̱r¹",
    "explanationEN": "play",
    "explanationCN": "玩顽】"
  },
  {
    "character": "𗑭",
    "GX": "nwə²",
    "GHC": "njwɨ²",
    "explanationEN": "fat/grease",
    "explanationCN": "肥膏腴"
  },
  {
    "character": "𘂪",
    "GX": "dze²",
    "GHC": "dzjij²",
    "explanationEN": "one",
    "explanationCN": "一单"
  },
  {
    "character": "𗇛",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "firefly/glowworm",
    "explanationCN": "萤"
  },
  {
    "character": "𗐻",
    "GX": "yə²",
    "GHC": "ꞏjɨ²",
    "explanationEN": "clothing",
    "explanationCN": "衣】"
  },
  {
    "character": "𗐼",
    "GX": "dźwaw¹",
    "GHC": "dźjwa̱¹",
    "explanationEN": "hit/clap",
    "explanationCN": "1.拍、聚、抚"
  },
  {
    "character": "𘛵",
    "GX": "to̱²",
    "GHC": "to²",
    "explanationEN": "end",
    "explanationCN": "完终毕"
  },
  {
    "character": "𘑘",
    "GX": "śi¹",
    "GHC": "śji¹",
    "explanationEN": "celestial.being/immortal",
    "explanationCN": "仙"
  },
  {
    "character": "𘝨",
    "GX": "zoh²",
    "GHC": "zjọ²",
    "explanationEN": "ᴛɪᴍᴇ.ʙ",
    "explanationCN": "ᴛɪᴍᴇ.ʙ"
  },
  {
    "character": "𗒄",
    "GX": "law²",
    "GHC": "lja̱²",
    "explanationEN": "frontier/border",
    "explanationCN": "边界"
  },
  {
    "character": "𗑤",
    "GX": "γwa̱¹",
    "GHC": "ɣwa¹",
    "explanationEN": "harmonious",
    "explanationCN": "和谐"
  },
  {
    "character": "𗓤",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "honest/upright/calm",
    "explanationCN": "正直"
  },
  {
    "character": "𗐳",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "fort/stronghold",
    "explanationCN": "堡垒城邑"
  },
  {
    "character": "𗑌",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "incomplete/fragmentary",
    "explanationCN": "1.缺残差、【界】（珠 356）【芥】（珠 145）【更】（珠 264）【粳】（珠 155）【庚】（珠 096）【耕】（珠 271）【谐】【介】（音 196）"
  },
  {
    "character": "𗒅",
    "GX": "rśər¹",
    "GHC": "śjɨr¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【什】、【实】（珠 304）【十】（珠 363）【失】（珠 291）【室】（珠 343）【涉】（音 201）"
  },
  {
    "character": "𗑩",
    "GX": "ŋgi²",
    "GHC": "gji̱²",
    "explanationEN": "hope",
    "explanationCN": "希求望约贿"
  },
  {
    "character": "𗓉",
    "GX": "kə¹",
    "GHC": "kjɨ¹",
    "explanationEN": "father-in-law",
    "explanationCN": "公公岳父"
  },
  {
    "character": "𗒒",
    "GX": "mi̱²",
    "GHC": "me²",
    "explanationEN": "arrogant/squeamish",
    "explanationCN": "骄娇"
  },
  {
    "character": "𘑗",
    "GX": "rŋə̱r¹",
    "GHC": "ŋər¹",
    "explanationEN": "hill/mountain",
    "explanationCN": "1.山、峰岳丘"
  },
  {
    "character": "𗯦",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "a.surname",
    "explanationCN": "【令】【勒】"
  },
  {
    "character": "𘖇",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "manners/rites",
    "explanationCN": "礼仪"
  },
  {
    "character": "𘞤",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "wide/vast",
    "explanationCN": "广阔"
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
    "explanationEN": "brush/wipe/whisk",
    "explanationCN": "掸拂"
  },
  {
    "character": "𘖥",
    "GX": "rtswa̱r¹",
    "GHC": "tswar¹",
    "explanationEN": "wrinkle/fold",
    "explanationCN": "皱"
  },
  {
    "character": "𘗍",
    "GX": "lha̱ṃ²",
    "GHC": "lhjụ¹",
    "explanationEN": "armor",
    "explanationCN": "鎧"
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
    "explanationEN": "a.surname",
    "explanationCN": "【社】【佘】【涉】"
  },
  {
    "character": "𘟛",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "wisdom/intelligence",
    "explanationCN": "慧智慧"
  },
  {
    "character": "𗔻",
    "GX": "ryar²",
    "GHC": "ꞏjar²",
    "explanationEN": "a.skilled.(or.clever).workman/woman",
    "explanationCN": "巧妇名词"
  },
  {
    "character": "𗐱",
    "GX": "ni²",
    "GHC": "nji²",
    "explanationEN": "𝟣𝟤ᴘʟ",
    "explanationCN": "𝟣𝟤ᴘʟ"
  },
  {
    "character": "𗒖",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣",
    "explanationEN": "stretch",
    "explanationCN": "伸"
  },
  {
    "character": "𗑥",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "adore/admire",
    "explanationCN": "爱慕"
  },
  {
    "character": "𗒀",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "provide.for/support",
    "explanationCN": "供养"
  },
  {
    "character": "𗔂",
    "GX": "tsi¹",
    "GHC": "tsji¹",
    "explanationEN": "small.dish",
    "explanationCN": "碟子"
  },
  {
    "character": "𘎆",
    "GX": "dźwə¹",
    "GHC": "dźjwɨ¹",
    "explanationEN": "mutual(pron.)",
    "explanationCN": "彼此"
  },
  {
    "character": "𘎍",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "attend/follow",
    "explanationCN": "随从"
  },
  {
    "character": "𘖦",
    "GX": "ta̱h²",
    "GHC": "tạ²",
    "explanationEN": "fold/wrinkle",
    "explanationCN": "皱褶"
  },
  {
    "character": "𗔪",
    "GX": "qwae̱h¹",
    "GHC": "kiwẹj¹",
    "explanationEN": "thunder",
    "explanationCN": "雷鸣"
  },
  {
    "character": "𗓢",
    "GX": "və¹",
    "GHC": "wjɨ¹",
    "explanationEN": "mother-in-law",
    "explanationCN": "1.婆婆岳母、祖母"
  },
  {
    "character": "𗔘",
    "GX": "mo¹",
    "GHC": "mjo¹",
    "explanationEN": "hear.ʙ",
    "explanationCN": "闻.ʙ"
  },
  {
    "character": "𗒕",
    "GX": "lweh¹",
    "GHC": "ljwịj¹",
    "explanationEN": "neck",
    "explanationCN": "1.颈项、咽、枷"
  },
  {
    "character": "𗔨",
    "GX": "tṣaə̱²",
    "GHC": "tśiə²",
    "explanationEN": "twine",
    "explanationCN": "1.缠绕、釧、【芝】【邹】【淄】【徵】【挚】【脂】（音 207）"
  },
  {
    "character": "𘖨",
    "GX": "loṃ¹",
    "GHC": "ljow¹",
    "explanationEN": "dragon",
    "explanationCN": "龙】"
  },
  {
    "character": "𘗌",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "armor",
    "explanationCN": "甲胄鎧"
  },
  {
    "character": "𗔤",
    "GX": "qwai̱¹",
    "GHC": "kiwe¹",
    "explanationEN": "dark",
    "explanationCN": "黑（洞洞漆漆）"
  },
  {
    "character": "𗔩",
    "GX": "γae̱h²",
    "GHC": "ɣiẹj²",
    "explanationEN": "transport/freight",
    "explanationCN": "运输"
  },
  {
    "character": "𗑮",
    "GX": "də²",
    "GHC": "djɨ²",
    "explanationEN": "small.dish",
    "explanationCN": "碟】"
  },
  {
    "character": "𗑾",
    "GX": "ŋŋwu̱¹",
    "GHC": "ŋwu̱¹",
    "explanationEN": "speech/word",
    "explanationCN": "言论諭语"
  },
  {
    "character": "𗒳",
    "GX": "qhu̱¹",
    "GHC": "khu¹",
    "explanationEN": "bell",
    "explanationCN": "鐸"
  },
  {
    "character": "𗔦",
    "GX": "rmer²",
    "GHC": "mjijr²",
    "explanationEN": "a.surname",
    "explanationCN": "【名】【弥】"
  },
  {
    "character": "𗒷",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "parents",
    "explanationCN": "亲（父亲母亲本源）"
  },
  {
    "character": "𗔛",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "wear.ᴀ",
    "explanationCN": "穿.ᴀ"
  },
  {
    "character": "𗔢",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "make.(wine,.vinegar)",
    "explanationCN": "1.酿、探"
  },
  {
    "character": "𘖫",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "ceremony.and.propriety",
    "explanationCN": "礼仪"
  },
  {
    "character": "𘖺",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "drill/bore",
    "explanationCN": "钻"
  },
  {
    "character": "𗓝",
    "GX": "vwe̱²",
    "GHC": "wej²",
    "explanationEN": "clear.away/clean.up",
    "explanationCN": "扫除"
  },
  {
    "character": "𘁕",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "power.and.influence",
    "explanationCN": "权势"
  },
  {
    "character": "𘎊",
    "GX": "dzi¹",
    "GHC": "dzji¹",
    "explanationEN": "cut",
    "explanationCN": "切"
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
    "GHC": "ljwịj¹",
    "explanationEN": "a.surname",
    "explanationCN": "【令】"
  },
  {
    "character": "𗔡",
    "GX": "ləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "mend/patch/explain",
    "explanationCN": "补疏"
  },
  {
    "character": "𗔼",
    "GX": "γwe̱¹",
    "GHC": "ɣwej¹",
    "explanationEN": "struggle/fight",
    "explanationCN": "1.鬭争战、击"
  },
  {
    "character": "𘗆",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "turning.shovel",
    "explanationCN": "锅铲"
  },
  {
    "character": "𗔞",
    "GX": "rmər¹",
    "GHC": "mjɨr¹",
    "explanationEN": "livestock/domestic.animal",
    "explanationCN": "牲畜"
  },
  {
    "character": "𘗄",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "hook",
    "explanationCN": "钓鉤"
  },
  {
    "character": "𗒵",
    "GX": "qwa̱¹",
    "GHC": "kwa¹",
    "explanationEN": "tie/bind",
    "explanationCN": "繫扎捆"
  },
  {
    "character": "𗐾",
    "GX": "swi̱ṃ¹",
    "GHC": "swẽ¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【宋】【孙】【荀】【逊】、【送】（珠 341 ）【巡】（珠 282）【选】（珠 102）【鬆】（珠 144）"
  },
  {
    "character": "𗓦",
    "GX": "ndwu̱²",
    "GHC": "dwu̱²",
    "explanationEN": "secret/clandestine",
    "explanationCN": "1.秘密、韜"
  },
  {
    "character": "𗒥",
    "GX": "yoṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "respect/revere",
    "explanationCN": "敬重（歌颂）"
  },
  {
    "character": "𗑿",
    "GX": "law²",
    "GHC": "lja̱²",
    "explanationEN": "single/lonely",
    "explanationCN": "孤"
  },
  {
    "character": "𗒇",
    "GX": "nwi̱w¹",
    "GHC": "nwew¹",
    "explanationEN": "six-year-old.sheep",
    "explanationCN": "齐齿"
  },
  {
    "character": "𗑨",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "fight/struggle/dispute",
    "explanationCN": "争"
  },
  {
    "character": "𗓵",
    "GX": "ryer²",
    "GHC": "ꞏjijr²",
    "explanationEN": "a.surname",
    "explanationCN": "【夜】【叶】【耶】【页】"
  },
  {
    "character": "𘎇",
    "GX": "po̱ṃ¹",
    "GHC": "pow¹",
    "explanationEN": "help/assist",
    "explanationCN": "帮】"
  },
  {
    "character": "𘎈",
    "GX": "dźə¹",
    "GHC": "dźjɨ¹",
    "explanationEN": "pure",
    "explanationCN": "纯真"
  },
  {
    "character": "𘖢",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "lose",
    "explanationCN": "失落遗失失掉"
  },
  {
    "character": "𗑀",
    "GX": "dźih²",
    "GHC": "dźji",
    "explanationEN": "unfold/uphold",
    "explanationCN": "1.伸展张仰、抬"
  },
  {
    "character": "𗒰",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "lonely/solitary",
    "explanationCN": "孤独"
  },
  {
    "character": "𗐬",
    "GX": "qə̱²",
    "GHC": "kə²",
    "explanationEN": "sew/put.together",
    "explanationCN": "娺结合"
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
    "GHC": "tśiã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【占】【盏】"
  },
  {
    "character": "𗓥",
    "GX": "ṣao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "dawn/(early).morning",
    "explanationCN": "早晨"
  },
  {
    "character": "𗓧",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "a.surname",
    "explanationCN": "【侠】【罨】【夏】"
  },
  {
    "character": "𗐿",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "relatives",
    "explanationCN": "亲亲属"
  },
  {
    "character": "𗒑",
    "GX": "yə²",
    "GHC": "ꞏjɨ²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【夷】【邑】【挹】【益】【野】【一】"
  },
  {
    "character": "𗑧",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "make.(wine,.vinegar)",
    "explanationCN": "酿"
  },
  {
    "character": "𗑎",
    "GX": "nsə²",
    "GHC": "sjɨ̱²",
    "explanationEN": "speak.softly/whisper",
    "explanationCN": "细语】"
  },
  {
    "character": "𗑣",
    "GX": "γwa̱¹",
    "GHC": "ɣwa¹",
    "explanationEN": "harmonious",
    "explanationCN": "和】"
  },
  {
    "character": "𗓣",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "honest/upright/calm",
    "explanationCN": "心直心安"
  },
  {
    "character": "𗔒",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "husband",
    "explanationCN": "夫（丈夫）"
  },
  {
    "character": "𘖆",
    "GX": "leṃ²",
    "GHC": "ljɨj²",
    "explanationEN": "sing",
    "explanationCN": "歌唱"
  },
  {
    "character": "𗇚",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【蓍】菜名"
  },
  {
    "character": "𘛙",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【列】菜名"
  },
  {
    "character": "𗒸",
    "GX": "llə̱¹",
    "GHC": "lə¹",
    "explanationEN": "stomach.(of.a.bird)",
    "explanationCN": "嗉"
  },
  {
    "character": "𗑠",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "ᴀᴄᴄꜱ",
    "explanationCN": "ᴀᴄᴄꜱ"
  },
  {
    "character": "𗒃",
    "GX": "law²",
    "GHC": "lja̱²",
    "explanationEN": "frontier/border",
    "explanationCN": "1.边界、【鷯】【辽】（音 204）"
  },
  {
    "character": "𗔙",
    "GX": "ntśhi¹",
    "GHC": "tśhji̱¹",
    "explanationEN": "screen/observe",
    "explanationCN": "审察观察"
  },
  {
    "character": "𗔁",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "god/deity",
    "explanationCN": "神祇"
  },
  {
    "character": "𗑕",
    "GX": "ṇi²",
    "GHC": "dźji²",
    "explanationEN": "beautiful/pretty",
    "explanationCN": "美丽"
  },
  {
    "character": "𗒌",
    "GX": "nlə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【仂】【勒】【祠】"
  },
  {
    "character": "𗔌",
    "GX": "zih²",
    "GHC": "zjị²",
    "explanationEN": "shoes/boots",
    "explanationCN": "鞋靴动词"
  },
  {
    "character": "𗓺",
    "GX": "vwə̱¹",
    "GHC": "wə¹",
    "explanationEN": "fur-lined.jacket",
    "explanationCN": "皮袄"
  },
  {
    "character": "𗔮",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋiow²",
    "explanationEN": "cherish",
    "explanationCN": "怜惜"
  },
  {
    "character": "𗔃",
    "GX": "tśi²",
    "GHC": "tśji²",
    "explanationEN": "rouge",
    "explanationCN": "脂（胭脂）】"
  },
  {
    "character": "𗓫",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "robe/gown",
    "explanationCN": "袍】"
  },
  {
    "character": "𗔓",
    "GX": "???",
    "GHC": "",
    "explanationEN": "borrow",
    "explanationCN": "借债"
  },
  {
    "character": "𗔬",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "a.surname",
    "explanationCN": "1.【魏】【韦】、【卫】【渭】（音 194）"
  },
  {
    "character": "𗔵",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "a.surname",
    "explanationCN": "【菊】【矩】"
  },
  {
    "character": "𘁑",
    "GX": "mbao̱¹",
    "GHC": "bjo̱¹",
    "explanationEN": "cat",
    "explanationCN": "猫】"
  },
  {
    "character": "𘁓",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "蠓"
  },
  {
    "character": "𘗃",
    "GX": "vi̱h¹",
    "GHC": "wẹ¹",
    "explanationEN": "filthy/dirty/rusty",
    "explanationCN": "污銹"
  },
  {
    "character": "𘗉",
    "GX": "ra̱ṃ²",
    "GHC": "rã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【然】"
  },
  {
    "character": "𗓇",
    "GX": "qaə̱²",
    "GHC": "kiə²",
    "explanationEN": "cervical.vertebra",
    "explanationCN": "颈椎"
  },
  {
    "character": "𗒶",
    "GX": "khi¹",
    "GHC": "khji¹",
    "explanationEN": "lose",
    "explanationCN": "弃丢失"
  },
  {
    "character": "𗒜",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "band/belt",
    "explanationCN": "带"
  },
  {
    "character": "𗒱",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "year/age",
    "explanationCN": "年岁"
  },
  {
    "character": "𗒲",
    "GX": "tṣai̱¹",
    "GHC": "tśie¹",
    "explanationEN": "amuse/play.games",
    "explanationCN": "娱乐游戏"
  },
  {
    "character": "𗒁",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "love.ʙ",
    "explanationCN": "爱.ʙ"
  },
  {
    "character": "𗑳",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "thousand",
    "explanationCN": "仟"
  },
  {
    "character": "𗒦",
    "GX": "nna̱²",
    "GHC": "na̱²",
    "explanationEN": "seek/search/look.for",
    "explanationCN": "寻觅找"
  },
  {
    "character": "𗓑",
    "GX": "rγwe̱r²",
    "GHC": "ꞏwejr²",
    "explanationEN": "guard/defend",
    "explanationCN": "1.守护、衫"
  },
  {
    "character": "𗓒",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "father-in-law/uncle",
    "explanationCN": "岳父舅父"
  },
  {
    "character": "𗓱",
    "GX": "te¹",
    "GHC": "tjij¹",
    "explanationEN": "if/maybe/perhaps",
    "explanationCN": "假若或者"
  },
  {
    "character": "𗔋",
    "GX": "bo̱ṃ¹",
    "GHC": "bow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【庞】"
  },
  {
    "character": "𗑲",
    "GX": "ntśhiw¹",
    "GHC": "tśhji̱w¹",
    "explanationEN": "speak/say",
    "explanationCN": "说讲宣"
  },
  {
    "character": "𗔉",
    "GX": "tṣhuo¹",
    "GHC": "tśhio̱w¹",
    "explanationEN": "perhaps/maybe",
    "explanationCN": "或"
  },
  {
    "character": "𗓬",
    "GX": "rvwe̱r²",
    "GHC": "wejr²",
    "explanationEN": "flourish",
    "explanationCN": "1.广、【嵬】地名"
  },
  {
    "character": "𘎑",
    "GX": "źa²",
    "GHC": "rja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【然】【冉】【若】"
  },
  {
    "character": "𗔲",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "firm/strong",
    "explanationCN": "坚固"
  },
  {
    "character": "𗑏",
    "GX": "tha̱²",
    "GHC": "tha²",
    "explanationEN": "a.surname",
    "explanationCN": "【闥】【炭】"
  },
  {
    "character": "𗔍",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "industrious",
    "explanationCN": "勒奋勤快"
  },
  {
    "character": "𗓕",
    "GX": "vao̱ṃ¹",
    "GHC": "wiow¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【旺】【汪】"
  },
  {
    "character": "𗒴",
    "GX": "ntśhwə¹",
    "GHC": "śjwɨ̱¹",
    "explanationEN": "make.(wine,.vinegar)",
    "explanationCN": "酿"
  },
  {
    "character": "𗑟",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "relatives",
    "explanationCN": "1.亲、朋党、交"
  },
  {
    "character": "𗓾",
    "GX": "tshi̱w²",
    "GHC": "tshew²",
    "explanationEN": "close/intimate",
    "explanationCN": "亲近"
  },
  {
    "character": "𗔺",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "pants/trousers",
    "explanationCN": "裤"
  },
  {
    "character": "𗒟",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "demand",
    "explanationCN": "索取"
  },
  {
    "character": "𗓂",
    "GX": "sə²",
    "GHC": "sjɨ²",
    "explanationEN": "know/understand",
    "explanationCN": "知识"
  },
  {
    "character": "𗔷",
    "GX": "tṣao̱ṃ²",
    "GHC": "tśiow²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【章】【张】"
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
    "explanationEN": "turning.shovel",
    "explanationCN": "锅铲"
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
    "explanationEN": "a.surname",
    "explanationCN": "【高】"
  },
  {
    "character": "𘗋",
    "GX": "geh¹",
    "GHC": "gjịj¹",
    "explanationEN": "cut/clip/shave",
    "explanationCN": "1.剪割、剃"
  },
  {
    "character": "𘖳",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "realize/wake.up",
    "explanationCN": "悟醒"
  },
  {
    "character": "𗑍",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "trade",
    "explanationCN": "买卖"
  },
  {
    "character": "𗑡",
    "GX": "law²",
    "GHC": "lja̱²",
    "explanationEN": "lose",
    "explanationCN": "失落"
  },
  {
    "character": "𗒆",
    "GX": "hwaa̱²",
    "GHC": "xiwa²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【华】【花】【反】"
  },
  {
    "character": "𗒤",
    "GX": "rgur¹",
    "GHC": "gjur¹",
    "explanationEN": "one-year-old.sheep",
    "explanationCN": "羖羔"
  },
  {
    "character": "𗒽",
    "GX": "thu¹",
    "GHC": "thju¹",
    "explanationEN": "resentment/enmity",
    "explanationCN": "怨"
  },
  {
    "character": "𗓶",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "shirt.made.by.rough.cloth",
    "explanationCN": "褐"
  },
  {
    "character": "𗑯",
    "GX": "rgur²",
    "GHC": "gjur²",
    "explanationEN": "lie.down",
    "explanationCN": "卧"
  },
  {
    "character": "𘗎",
    "GX": "tswu¹",
    "GHC": "tsjwu¹",
    "explanationEN": "pot.boil.tea",
    "explanationCN": "銚"
  },
  {
    "character": "𘎉",
    "GX": "nllo̱¹",
    "GHC": "lho̱¹",
    "explanationEN": "rely.on",
    "explanationCN": "恃依靠"
  },
  {
    "character": "𘗂",
    "GX": "tsho̱ṃ²",
    "GHC": "tshow²",
    "explanationEN": "an.ancient.cooking.vessel.with.two.loop.handles.and.three.or.four.legs",
    "explanationCN": "鼎"
  },
  {
    "character": "𗓊",
    "GX": "qhao̱ṃ²",
    "GHC": "khiow²",
    "explanationEN": "a.surname",
    "explanationCN": "1.【羌】【騫】、强形容词"
  },
  {
    "character": "𗓞",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【朱】【竺】【烛】、做办动词"
  },
  {
    "character": "𘖻",
    "GX": "tṣhwaa̱¹",
    "GHC": "tśhjwa¹",
    "explanationEN": "triangular.arrowhead",
    "explanationCN": "三棱鏃"
  },
  {
    "character": "𗇜",
    "GX": "rywar¹",
    "GHC": "ꞏjwar¹",
    "explanationEN": "go/fast/quick",
    "explanationCN": "1.往、急形容词"
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
    "explanationEN": "oath/vow",
    "explanationCN": "誓发誓誓约"
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
    "explanationCN": "菜"
  },
  {
    "character": "𘖵",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "saw",
    "explanationCN": "锯"
  },
  {
    "character": "𗔝",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【耿】【埂】"
  },
  {
    "character": "𗔅",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "corner",
    "explanationCN": "界】"
  },
  {
    "character": "𗔱",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "power.and.prestige/impressive.and.dignified.manners",
    "explanationCN": "威风威仪"
  },
  {
    "character": "𘎌",
    "GX": "tśhwiw²",
    "GHC": "tśhjwiw²",
    "explanationEN": "field.mint/peppermint",
    "explanationCN": "薄荷"
  },
  {
    "character": "𗓆",
    "GX": "le¹",
    "GHC": "ljij¹",
    "explanationEN": "vary/change",
    "explanationCN": "1.变换易改、终脱、罢"
  },
  {
    "character": "𗓮",
    "GX": "mya²",
    "GHC": "mja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【羊】【绵】"
  },
  {
    "character": "𗓁",
    "GX": "mi¹",
    "GHC": "mji¹",
    "explanationEN": "hear.ᴀ",
    "explanationCN": "闻.ᴀ"
  },
  {
    "character": "𗓯",
    "GX": "???",
    "GHC": "",
    "explanationEN": "employment",
    "explanationCN": "雇"
  },
  {
    "character": "𗓨",
    "GX": "mi̱h²",
    "GHC": "bẹ²",
    "explanationEN": "seek/look.for",
    "explanationCN": "1.寻觅、全"
  },
  {
    "character": "𗔊",
    "GX": "qwo̱ṃ²",
    "GHC": "kwow²",
    "explanationEN": "anger/rage/fury",
    "explanationCN": "怒嗔忿恚"
  },
  {
    "character": "𗒐",
    "GX": "γwae̱¹",
    "GHC": "ɣiwej¹",
    "explanationEN": "receive/accept",
    "explanationCN": "受授"
  },
  {
    "character": "𗑫",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【婆】【泊】【跋】"
  },
  {
    "character": "𗓌",
    "GX": "???",
    "GHC": "",
    "explanationEN": "long",
    "explanationCN": "长"
  },
  {
    "character": "𘖿",
    "GX": "ŋgwi¹",
    "GHC": "gjwi̱¹",
    "explanationEN": "banner/flag/spear",
    "explanationCN": "旌旗枪矛"
  },
  {
    "character": "𗐽",
    "GX": "tsho̱ṃ¹",
    "GHC": "tshow¹",
    "explanationEN": "singer/actor",
    "explanationCN": "乐伎伶"
  },
  {
    "character": "𗒚",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "present.(a.gift)/entertain.(dinner)",
    "explanationCN": "馈赠筵请"
  },
  {
    "character": "𘛜",
    "GX": "zi̱¹",
    "GHC": "ze¹",
    "explanationEN": "baby/infant/seedling",
    "explanationCN": "婴儿幼苗"
  },
  {
    "character": "𘟞",
    "GX": "rbər¹",
    "GHC": "bjɨr¹",
    "explanationEN": "knife/sword",
    "explanationCN": "刀"
  },
  {
    "character": "𗑂",
    "GX": "rvwə̱r²",
    "GHC": "wər²",
    "explanationEN": "membrane",
    "explanationCN": "膜翳"
  },
  {
    "character": "𗓄",
    "GX": "ŋwe̱²",
    "GHC": "ŋwej²",
    "explanationEN": "harmonious/peaceful",
    "explanationCN": "和"
  },
  {
    "character": "𗓅",
    "GX": "ŋqaa̱²",
    "GHC": "kia̱²",
    "explanationEN": "patch/mend",
    "explanationCN": "补衲"
  },
  {
    "character": "𘖰",
    "GX": "tshwa¹",
    "GHC": "tshjwa¹",
    "explanationEN": "stove/furnace",
    "explanationCN": "火炉"
  },
  {
    "character": "𗐲",
    "GX": "bə̱¹",
    "GHC": "bə¹",
    "explanationEN": "soft",
    "explanationCN": "绵"
  },
  {
    "character": "𗒍",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "resolve",
    "explanationCN": "1.决断、御史"
  },
  {
    "character": "𗒉",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【老】【娄】【拉】"
  },
  {
    "character": "𗑪",
    "GX": "kwiṃ¹",
    "GHC": "kjwĩ¹",
    "explanationEN": "a.man.of.noble.character/a.man.of.virtue/gentleman",
    "explanationCN": "1.君】、【军】【郡】【究】"
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
    "GHC": "nwə",
    "explanationEN": "wisdom/suggestion",
    "explanationCN": "上慧"
  },
  {
    "character": "𗒎",
    "GX": "yo̱ṃ²",
    "GHC": "ꞏjow²",
    "explanationEN": "song/sing",
    "explanationCN": "歌唱名词"
  },
  {
    "character": "𗔀",
    "GX": "va¹",
    "GHC": "wja¹",
    "explanationEN": "father",
    "explanationCN": "父亲"
  },
  {
    "character": "𗓡",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "wealth/official's.salary.in.feudal.China/emolument",
    "explanationCN": "财禄"
  },
  {
    "character": "𗒂",
    "GX": "nah¹",
    "GHC": "njạ¹",
    "explanationEN": "marriage",
    "explanationCN": "婚"
  },
  {
    "character": "𗓠",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "mixed.blood",
    "explanationCN": "杂种混血儿"
  },
  {
    "character": "𘗤",
    "GX": "rtsər¹",
    "GHC": "tsjɨ̱r¹",
    "explanationEN": "five/the.fifth",
    "explanationCN": "五第五行五"
  },
  {
    "character": "𗑄",
    "GX": "tśu¹",
    "GHC": "tśju¹",
    "explanationEN": "have.to",
    "explanationCN": "不得已只能只好……"
  },
  {
    "character": "𗑃",
    "GX": "tśiṃ¹",
    "GHC": "tśjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【真】【证】【正】、【枕】（珠 243）【蒸】（珠 333）【震】（珠 102）【针】（珠 254）、【徵】【镇】【珍】"
  },
  {
    "character": "𗒗",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "brother’s.son/nephew",
    "explanationCN": "姪子"
  },
  {
    "character": "𗒘",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "true/real/pure",
    "explanationCN": "1.真实纯真、正良諦"
  },
  {
    "character": "𗒙",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "multitudinous/numerous",
    "explanationCN": "众多甚多"
  },
  {
    "character": "𗑴",
    "GX": "lwa̱ṃ¹",
    "GHC": "lwã¹",
    "explanationEN": "a.surname",
    "explanationCN": "【鸞】【乐】"
  },
  {
    "character": "𗓋",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "a.kind.of.animal",
    "explanationCN": "【谐】动物名"
  },
  {
    "character": "𗔎",
    "GX": "γae̱¹",
    "GHC": "ɣiej¹",
    "explanationEN": "put.in.order",
    "explanationCN": "整"
  },
  {
    "character": "𗶭",
    "GX": "γu²",
    "GHC": "ɣju²",
    "explanationEN": "stand/pedestal/base",
    "explanationCN": "座"
  },
  {
    "character": "𘍏",
    "GX": "tsi̱¹",
    "GHC": "tse¹",
    "explanationEN": "grayish.white/ashen/pale",
    "explanationCN": "灰白"
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
    "GHC": "ljị¹",
    "explanationEN": "sink.into/lapse.into",
    "explanationCN": "堕入"
  },
  {
    "character": "𗮄",
    "GX": "pho̱ṃ²",
    "GHC": "phow²",
    "explanationEN": "ask",
    "explanationCN": "1.问、【朋】译音"
  },
  {
    "character": "𘃤",
    "GX": "vo¹",
    "GHC": "wjo¹",
    "explanationEN": "send/dispatch",
    "explanationCN": "遣送行派遣"
  },
  {
    "character": "𗕁",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "grow/luxuriate",
    "explanationCN": "成长茂盛"
  },
  {
    "character": "𘁠",
    "GX": "γa̱¹",
    "GHC": "ꞏa",
    "explanationEN": "induce/lure",
    "explanationCN": "1.诱、差"
  },
  {
    "character": "𘁮",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "child",
    "explanationCN": "1.子、【氏】译音"
  },
  {
    "character": "𘃝",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "send/dispatch/benefit.from",
    "explanationCN": "遣送送行受用"
  },
  {
    "character": "𘃨",
    "GX": "rγər¹",
    "GHC": "ɣjɨr¹",
    "explanationEN": "make/create",
    "explanationCN": "做作造作巧"
  },
  {
    "character": "𘍶",
    "GX": "rγwə̱r¹",
    "GHC": "ɣwər¹",
    "explanationEN": "crane",
    "explanationCN": "鹤】"
  },
  {
    "character": "𘍷",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "reverence",
    "explanationCN": "尊至尊"
  },
  {
    "character": "𗮌",
    "GX": "yi¹",
    "GHC": "ꞏji¹",
    "explanationEN": "man.and.his.wife’s.brother",
    "explanationCN": "郎舅"
  },
  {
    "character": "𗮎",
    "GX": "rdźər¹",
    "GHC": "dźjɨ̱r¹",
    "explanationEN": "banquet/feast",
    "explanationCN": "筵宴佳餚"
  },
  {
    "character": "𗮒",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "puzzle/confuse/have.no.idea",
    "explanationCN": "迷惑不知"
  },
  {
    "character": "𗮕",
    "GX": "mmə¹",
    "GHC": "mjɨ̱¹",
    "explanationEN": "night/evening",
    "explanationCN": "夜晚"
  },
  {
    "character": "𘁭",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "wife",
    "explanationCN": "妻"
  },
  {
    "character": "𘁰",
    "GX": "lwih²",
    "GHC": "ljwị¹",
    "explanationEN": "muscle.and.joints",
    "explanationCN": "筋节"
  },
  {
    "character": "𘍼",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "six/the.sixth",
    "explanationCN": "六第六名词"
  },
  {
    "character": "𘍽",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "fire",
    "explanationCN": "火"
  },
  {
    "character": "𘛲",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "patrol/make.a.detour",
    "explanationCN": "巡绕行"
  },
  {
    "character": "𗮃",
    "GX": "tswi¹",
    "GHC": "tsjwi¹",
    "explanationEN": "whistling.arrow",
    "explanationCN": "呜鏑"
  },
  {
    "character": "𘁨",
    "GX": "bu̱¹",
    "GHC": "bu¹",
    "explanationEN": "preface/foreword",
    "explanationCN": "序"
  },
  {
    "character": "𘃧",
    "GX": "ŋgo¹",
    "GHC": "gjo̱¹",
    "explanationEN": "stupid/foolish",
    "explanationCN": "傻呆愣愚"
  },
  {
    "character": "𗭴",
    "GX": "yoṃ¹",
    "GHC": "ꞏjow¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【杨】、【王】【容】【融】、【羊】（珠 073）【阳】（珠 075）【扬】（珠 273）【鸯】（珠 171）"
  },
  {
    "character": "𘌩",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "salted/salty",
    "explanationCN": "䶢"
  },
  {
    "character": "𘌬",
    "GX": "vəh²",
    "GHC": "wjɨ̣²",
    "explanationEN": "send/dispatch",
    "explanationCN": "遣"
  },
  {
    "character": "𘌶",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "ball/fully.round",
    "explanationCN": "圆球圆滚形容词"
  },
  {
    "character": "𘕜",
    "GX": "ga²",
    "GHC": "gja²",
    "explanationEN": "I/me",
    "explanationCN": "1.我吾余、汝等对方"
  },
  {
    "character": "𘍊",
    "GX": "nti̱w²",
    "GHC": "te̱w²",
    "explanationEN": "rein.in/break",
    "explanationCN": "勒繄断"
  },
  {
    "character": "𘕹",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "a.surname",
    "explanationCN": "【赵】【兆】"
  },
  {
    "character": "𘛡",
    "GX": "dźih¹",
    "GHC": "dźjị¹",
    "explanationEN": "feast/banquet",
    "explanationCN": "筵宴"
  },
  {
    "character": "𗭷",
    "GX": "rni̱r¹",
    "GHC": "ner¹",
    "explanationEN": "old.sheep",
    "explanationCN": "老羊"
  },
  {
    "character": "𘌻",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "wall",
    "explanationCN": "壁堡"
  },
  {
    "character": "𘍒",
    "GX": "dzwe̱¹",
    "GHC": "dzwej¹",
    "explanationEN": "guilt/suffering/patient",
    "explanationCN": "罪受罪病患】"
  },
  {
    "character": "𘗜",
    "GX": "ŋao̱ṃ²",
    "GHC": "ŋjow²",
    "explanationEN": "file/filing.room",
    "explanationCN": "案档案室"
  },
  {
    "character": "𗮞",
    "GX": "rśwar¹",
    "GHC": "śjwar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【说】"
  },
  {
    "character": "𗮟",
    "GX": "tshwi̱¹",
    "GHC": "tshwe¹",
    "explanationEN": "dirty/filthy",
    "explanationCN": "脏骯脏弄脏"
  },
  {
    "character": "𗮨",
    "GX": "khi²",
    "GHC": "khji²",
    "explanationEN": "bottom/backside",
    "explanationCN": "屁股臀部"
  },
  {
    "character": "𗮳",
    "GX": "rgur¹",
    "GHC": "gjur¹",
    "explanationEN": "kidney",
    "explanationCN": "腰子肾"
  },
  {
    "character": "𗮲",
    "GX": "geh²",
    "GHC": "gjịj²",
    "explanationEN": "fry.in.shallow.oil.without.stirring",
    "explanationCN": "煨煎"
  },
  {
    "character": "𗮩",
    "GX": "llih²",
    "GHC": "ljị²",
    "explanationEN": "rib",
    "explanationCN": "肋】"
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
    "explanationEN": "combine/associate",
    "explanationCN": "1.结合交合、谋计商议"
  },
  {
    "character": "𗮹",
    "GX": "so²",
    "GHC": "sjo²",
    "explanationEN": "crop.(of.a.bird)/bladder",
    "explanationCN": "嗉囊膀胱"
  },
  {
    "character": "𗯂",
    "GX": "vwae̱ṃ¹",
    "GHC": "wiəj²",
    "explanationEN": "fart",
    "explanationCN": "屁"
  },
  {
    "character": "𗯊",
    "GX": "khaṃ²",
    "GHC": "khjã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【乾】【健】【犍】、癤痂"
  },
  {
    "character": "𗯅",
    "GX": "swu̱¹",
    "GHC": "swu¹",
    "explanationEN": "dried.meat",
    "explanationCN": "脩束脩"
  },
  {
    "character": "𗭿",
    "GX": "zweh²",
    "GHC": "źjwịj²",
    "explanationEN": "rub/knead",
    "explanationCN": "揉搓"
  },
  {
    "character": "𘃡",
    "GX": "vi¹",
    "GHC": "wji¹",
    "explanationEN": "LV.ᴀ",
    "explanationCN": "LV.ᴀ"
  },
  {
    "character": "𗮋",
    "GX": "qai̱w²",
    "GHC": "kiew²",
    "explanationEN": "perforate",
    "explanationCN": "穿刺"
  },
  {
    "character": "𗮇",
    "GX": "rdir¹",
    "GHC": "djir¹",
    "explanationEN": "rattle.of.a.drum",
    "explanationCN": "鼕（鼓声）"
  },
  {
    "character": "𘁚",
    "GX": "qwə̱¹",
    "GHC": "kwə¹",
    "explanationEN": "blanket",
    "explanationCN": "毡"
  },
  {
    "character": "𘕏",
    "GX": "rgiwr²",
    "GHC": "gjiwr²",
    "explanationEN": "seek/look.for",
    "explanationCN": "寻觅寻找"
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
    "explanationEN": "compare/contrast",
    "explanationCN": "比较"
  },
  {
    "character": "𗭼",
    "GX": "swi̱w¹",
    "GHC": "swew¹",
    "explanationEN": "bright/brilliant/light",
    "explanationCN": "明照曜辰"
  },
  {
    "character": "𘃋",
    "GX": "dzu¹",
    "GHC": "dzju¹",
    "explanationEN": "dream",
    "explanationCN": "梦梦幻"
  },
  {
    "character": "𘃩",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "twine",
    "explanationCN": "捻（缠）"
  },
  {
    "character": "𘍤",
    "GX": "bi̱²",
    "GHC": "be²",
    "explanationEN": "curly.hair/wavy.hair",
    "explanationCN": "鬈髮"
  },
  {
    "character": "𘌫",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "tomorrow",
    "explanationCN": "明日明天"
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
    "explanationEN": "carve/engrave",
    "explanationCN": "雕刻"
  },
  {
    "character": "𘕌",
    "GX": "twu̱h²",
    "GHC": "twụ²",
    "explanationEN": "genuine/true/real",
    "explanationCN": "真正"
  },
  {
    "character": "𘛐",
    "GX": "twu̱h¹",
    "GHC": "twụ¹",
    "explanationEN": "straight/honest/upright",
    "explanationCN": "直正"
  },
  {
    "character": "𘌭",
    "GX": "tśwow¹",
    "GHC": "tśjwo¹",
    "explanationEN": "drill/bore/penetrate",
    "explanationCN": "钻穿"
  },
  {
    "character": "𘛥",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "subdue/vanquish",
    "explanationCN": "降伏调御"
  },
  {
    "character": "𘗓",
    "GX": "ŋgwi¹",
    "GHC": "gjwi̱¹",
    "explanationEN": "baby.still",
    "explanationCN": "襁褓"
  },
  {
    "character": "𘍚",
    "GX": "mpu̱¹",
    "GHC": "pu̱¹",
    "explanationEN": "slack/lax/impoverished",
    "explanationCN": "懈贫困"
  },
  {
    "character": "𗭵",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "wool/feather/fine.hair",
    "explanationCN": "绒（氄）（毛）"
  },
  {
    "character": "𘎃",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "bird",
    "explanationCN": "鸟禽"
  },
  {
    "character": "𘛎",
    "GX": "ni̱w¹",
    "GHC": "new¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【乃】"
  },
  {
    "character": "𘃊",
    "GX": "yə²",
    "GHC": "ꞏjɨ²",
    "explanationEN": "sleepy",
    "explanationCN": "困"
  },
  {
    "character": "𘛳",
    "GX": "la̱²",
    "GHC": "la²",
    "explanationEN": "happiness/amusement",
    "explanationCN": "1.乐娱乐】、户"
  },
  {
    "character": "𘛴",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "dispel",
    "explanationCN": "祛除"
  },
  {
    "character": "𘖃",
    "GX": "vwa̱h²",
    "GHC": "wạ²",
    "explanationEN": "peace.and.happiness",
    "explanationCN": "婚姻（结缘）"
  },
  {
    "character": "𘁫",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "pearl",
    "explanationCN": "碧珠碑磲珂贝"
  },
  {
    "character": "𘌳",
    "GX": "vwi̱²",
    "GHC": "we²",
    "explanationEN": "extremely.happiness",
    "explanationCN": "极乐"
  },
  {
    "character": "𘍉",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "magpie",
    "explanationCN": "鹊"
  },
  {
    "character": "𘕛",
    "GX": "qae̱¹",
    "GHC": "kiej¹",
    "explanationEN": "abuse/swear/curse",
    "explanationCN": "駡詈"
  },
  {
    "character": "𘋾",
    "GX": "ṣuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "god/patron.saint",
    "explanationCN": "神守护神"
  },
  {
    "character": "𘍘",
    "GX": "be̱ṃ¹",
    "GHC": "bəj¹",
    "explanationEN": "pain/suffering/hardship",
    "explanationCN": "苦受苦苦难"
  },
  {
    "character": "𘗒",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "call/summon/invite",
    "explanationCN": "召唤邀请"
  },
  {
    "character": "𘋿",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "dog",
    "explanationCN": "犬狗"
  },
  {
    "character": "𘕋",
    "GX": "dźih²",
    "GHC": "dźjar²",
    "explanationEN": "fault/crime/guilt",
    "explanationCN": "罪过"
  },
  {
    "character": "𘃠",
    "GX": "ndu̱¹",
    "GHC": "du̱¹",
    "explanationEN": "save/store.up",
    "explanationCN": "1.积积存贮藏、癸"
  },
  {
    "character": "𗮐",
    "GX": "nthu̱¹",
    "GHC": "thu̱¹",
    "explanationEN": "beg/request/demand",
    "explanationCN": "求"
  },
  {
    "character": "𗮑",
    "GX": "nthu̱¹",
    "GHC": "",
    "explanationEN": "beg/request/demand",
    "explanationCN": "求"
  },
  {
    "character": "𘌴",
    "GX": "hwae̱ṃ¹",
    "GHC": "xiwəj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【怀】【获】【横】【淮】【愧】"
  },
  {
    "character": "𘌺",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗔽",
    "GX": "qhwaə̱¹",
    "GHC": "khjə¹",
    "explanationEN": "a.surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘍓",
    "GX": "khwə²",
    "GHC": "khjwɨ²",
    "explanationEN": "prison/jail",
    "explanationCN": "监狱牢"
  },
  {
    "character": "𘁱",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "pole/axis",
    "explanationCN": "干柱轴轂"
  },
  {
    "character": "𘎧",
    "GX": "vwa̱¹",
    "GHC": "wa¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【哇】【伐】【跋】"
  },
  {
    "character": "𘎫",
    "GX": "ki¹",
    "GHC": "kji¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【记】【纪】【嵇】】、【己】（珠 355）【撃】（珠 326）【蟣】（珠 174）【计】（珠 342）【急】（珠 234）【箕】（珠 265）、【姬】【冀】【棘】【寄】【机】【基】（音 197）"
  },
  {
    "character": "𘏆",
    "GX": "soh¹",
    "GHC": "sjọ¹",
    "explanationEN": "agriculture/farming",
    "explanationCN": "1.农、付"
  },
  {
    "character": "𘏂",
    "GX": "kwe¹",
    "GHC": "kjwij¹",
    "explanationEN": "convulsion",
    "explanationCN": "痉挛"
  },
  {
    "character": "𘎿",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【介】"
  },
  {
    "character": "𘖄",
    "GX": "qhə̱¹",
    "GHC": "khə¹",
    "explanationEN": "buttocks/bottom/backside",
    "explanationCN": "屁股"
  },
  {
    "character": "𘖖",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "mother",
    "explanationCN": "母妈娘"
  },
  {
    "character": "𘝪",
    "GX": "dźoṃ¹",
    "GHC": "dźjow¹",
    "explanationEN": "separate",
    "explanationCN": "分离"
  },
  {
    "character": "𘝙",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【奘】【藏】（）"
  },
  {
    "character": "𗯩",
    "GX": "twu̱h¹",
    "GHC": "twụ¹",
    "explanationEN": "each/place",
    "explanationCN": "各处代词"
  },
  {
    "character": "𗯪",
    "GX": "tu¹",
    "GHC": "tju¹",
    "explanationEN": "clumsy/dull/unskillful",
    "explanationCN": "拙笨"
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
    "GHC": "ꞏjɨ²",
    "explanationEN": "past/last",
    "explanationCN": "1.昨去、【邑】"
  },
  {
    "character": "𘎭",
    "GX": "nwəh¹",
    "GHC": "njwɨ¹",
    "explanationEN": "quick/nimble/agile",
    "explanationCN": "敏捷"
  },
  {
    "character": "𘏈",
    "GX": "vwa̱h¹",
    "GHC": "wạ¹",
    "explanationEN": "shoulder",
    "explanationCN": "肩"
  },
  {
    "character": "𘏋",
    "GX": "sə̱¹",
    "GHC": "sə¹",
    "explanationEN": "full/filled/packed",
    "explanationCN": "满足盈充"
  },
  {
    "character": "𘑉",
    "GX": "ŋqhu̱²",
    "GHC": "khu̱²",
    "explanationEN": "turn.over",
    "explanationCN": "1.翻、搜、返"
  },
  {
    "character": "𘖗",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣",
    "explanationEN": "pull.up/rescue",
    "explanationCN": "1.拔救、拉牵拽、伏、消除、招、抽"
  },
  {
    "character": "𗯡",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "change/vary",
    "explanationCN": "变化"
  },
  {
    "character": "𘁆",
    "GX": "khaṃ²",
    "GHC": "khjã²",
    "explanationEN": "elephant",
    "explanationCN": "大象"
  },
  {
    "character": "𗰁",
    "GX": "dźuo²",
    "GHC": "dźio̱w²",
    "explanationEN": "can/may",
    "explanationCN": "堪胜能可"
  },
  {
    "character": "𘏢",
    "GX": "kweṃh²",
    "GHC": "kjwɨ̣j²",
    "explanationEN": "repetition",
    "explanationCN": "重复"
  },
  {
    "character": "𘐚",
    "GX": "nśwə¹",
    "GHC": "śjwɨ̱¹",
    "explanationEN": "clear/transparent",
    "explanationCN": "澄清"
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
    "GHC": "lhjị²",
    "explanationEN": "elephant",
    "explanationCN": "象"
  },
  {
    "character": "𗰊",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "beast/animal",
    "explanationCN": "兽"
  },
  {
    "character": "𘋪",
    "GX": "rtər¹",
    "GHC": "tjɨr¹",
    "explanationEN": "filled/packed/full",
    "explanationCN": "满盈"
  },
  {
    "character": "𘏦",
    "GX": "teṃh¹",
    "GHC": "tjɨj¹",
    "explanationEN": "obstruct/block/stuff",
    "explanationCN": "堵塞闭"
  },
  {
    "character": "𘐕",
    "GX": "tśiw²",
    "GHC": "tśjiw²",
    "explanationEN": "circumference/circuit",
    "explanationCN": "周】"
  },
  {
    "character": "𗯼",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "burn/kindle",
    "explanationCN": "燃烧"
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
    "explanationEN": "a.surname",
    "explanationCN": "【极】【杰】"
  },
  {
    "character": "𘑈",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "pottery/earthenware",
    "explanationCN": "陶器"
  },
  {
    "character": "𘋰",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "a.surname",
    "explanationCN": "【勃】"
  },
  {
    "character": "𘋵",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "vulture",
    "explanationCN": "雕鷲"
  },
  {
    "character": "𘃖",
    "GX": "rza̱r²",
    "GHC": "zar²",
    "explanationEN": "fountainhead/source",
    "explanationCN": "1.源、枕"
  },
  {
    "character": "𘐂",
    "GX": "nwəh²",
    "GHC": "njwɨ̣²",
    "explanationEN": "burn/kindle",
    "explanationCN": "烧燃"
  },
  {
    "character": "𘖐",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "fire",
    "explanationCN": "火"
  },
  {
    "character": "𘖂",
    "GX": "rŋi̱wr²",
    "GHC": "ŋewr²",
    "explanationEN": "roebuck",
    "explanationCN": "獐"
  },
  {
    "character": "𘋖",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "west",
    "explanationCN": "西西方"
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
    "GHC": "khwụ²",
    "explanationEN": "cut/slice",
    "explanationCN": "切割"
  },
  {
    "character": "𗯥",
    "GX": "lhe̱²",
    "GHC": "lhej²",
    "explanationEN": "translate/vary",
    "explanationCN": "译易"
  },
  {
    "character": "𘏄",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "eliminate/get.rid.of",
    "explanationCN": "除"
  },
  {
    "character": "𘂂",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "god/deity",
    "explanationCN": "神"
  },
  {
    "character": "𘋚",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "tail/end/east",
    "explanationCN": "尾末东"
  },
  {
    "character": "𘛚",
    "GX": "nae̱h²",
    "GHC": "nẹj²",
    "explanationEN": "bamboo",
    "explanationCN": "竹"
  },
  {
    "character": "𘟬",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "axe/hatchet",
    "explanationCN": "斧鉞"
  },
  {
    "character": "𘎜",
    "GX": "ta̱h²",
    "GHC": "tạ²",
    "explanationEN": "fetus/embryo",
    "explanationCN": "胎"
  },
  {
    "character": "𘟫",
    "GX": "γa̱h¹",
    "GHC": "ɣạ¹",
    "explanationEN": "sword/saber/weapon",
    "explanationCN": "剑戟武器"
  },
  {
    "character": "𘐲",
    "GX": "lhoh²",
    "GHC": "lhjọ²",
    "explanationEN": "tattered/ragged/broken",
    "explanationCN": "破烂破碎"
  },
  {
    "character": "𘂹",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "end/tail/east",
    "explanationCN": "末尾东"
  },
  {
    "character": "𘐅",
    "GX": "ŋġai̱¹",
    "GHC": "gie̱¹",
    "explanationEN": "stupid/dull/inferior",
    "explanationCN": "傻呆次"
  },
  {
    "character": "𘑇",
    "GX": "yih²",
    "GHC": "ꞏjị²",
    "explanationEN": "uphold/stretch",
    "explanationCN": "伸张"
  },
  {
    "character": "𘛞",
    "GX": "mo̱²",
    "GHC": "mo²",
    "explanationEN": "solitary/lonely",
    "explanationCN": "弧"
  },
  {
    "character": "𘛷",
    "GX": "rər²",
    "GHC": "rjɨr²",
    "explanationEN": "thunderclap",
    "explanationCN": "【靂】雷声"
  },
  {
    "character": "𘎮",
    "GX": "pih¹",
    "GHC": "pjị¹",
    "explanationEN": "discuss",
    "explanationCN": "议论"
  },
  {
    "character": "𘑂",
    "GX": "lhoh²",
    "GHC": "lhjọ²",
    "explanationEN": "roll",
    "explanationCN": "擀"
  },
  {
    "character": "𘋒",
    "GX": "ŋgə¹",
    "GHC": "gjɨ̱¹",
    "explanationEN": "encourage.oneself",
    "explanationCN": "自励追求"
  },
  {
    "character": "𘂫",
    "GX": "vəh¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "change/fluctuate",
    "explanationCN": "变幻"
  },
  {
    "character": "𘐁",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "chess/gamble",
    "explanationCN": "弈棋赌动词"
  },
  {
    "character": "𘐘",
    "GX": "ŋqu̱¹",
    "GHC": "ku̱¹",
    "explanationEN": "carve/engrave/pick",
    "explanationCN": "雕刻挑"
  },
  {
    "character": "𘏉",
    "GX": "tśhwow¹",
    "GHC": "tśhjwo¹",
    "explanationEN": "pierce.through/penetrate",
    "explanationCN": "穿"
  },
  {
    "character": "𘝫",
    "GX": "???",
    "GHC": "",
    "explanationEN": "the.Milky.Way",
    "explanationCN": "银河"
  },
  {
    "character": "𘎰",
    "GX": "ndo¹",
    "GHC": "djo̱¹",
    "explanationEN": "pierce.through/penetrate",
    "explanationCN": "刺穿"
  },
  {
    "character": "𘏤",
    "GX": "rllər¹",
    "GHC": "ljɨr¹",
    "explanationEN": "a.surname",
    "explanationCN": "【利】【勒】"
  },
  {
    "character": "𘍨",
    "GX": "hi¹",
    "GHC": "xji¹",
    "explanationEN": "happy/pleased",
    "explanationCN": "1.喜】、【奚】【希】【稀】【呬】【醘】【頡】、【晞】【熙】【羲】（音 202）"
  },
  {
    "character": "𘛶",
    "GX": "rtśər²",
    "GHC": "tśjɨ̱r²",
    "explanationEN": "stars/constellation",
    "explanationCN": "星宿"
  },
  {
    "character": "𘎓",
    "GX": "llu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "hear",
    "explanationCN": "听见"
  },
  {
    "character": "𘂁",
    "GX": "ṣai̱w²",
    "GHC": "śiew²",
    "explanationEN": "color",
    "explanationCN": "色】"
  },
  {
    "character": "𘐄",
    "GX": "lhwa¹",
    "GHC": "lhwa",
    "explanationEN": "tie/weave/plait",
    "explanationCN": "结络编"
  },
  {
    "character": "𘋛",
    "GX": "beṃ¹",
    "GHC": "bjɨj¹",
    "explanationEN": "benefit/profit/interest",
    "explanationCN": "利益"
  },
  {
    "character": "𘃈",
    "GX": "li̱ṃ?",
    "GHC": "lẽ",
    "explanationEN": "husbands.of.sisters",
    "explanationCN": "1.连襟（缝缀）【呤】"
  },
  {
    "character": "𘐹",
    "GX": "phai̱²",
    "GHC": "phie²",
    "explanationEN": "paper",
    "explanationCN": "纸张"
  },
  {
    "character": "𘖔",
    "GX": "ṣwaa̱²",
    "GHC": "śiwa²",
    "explanationEN": "shrink/contract",
    "explanationCN": "1.缩（动、【朔】"
  },
  {
    "character": "𘑊",
    "GX": "ŋqhu̱²",
    "GHC": "khu̱²",
    "explanationEN": "turn.over",
    "explanationCN": "翻"
  },
  {
    "character": "𘖘",
    "GX": "dźə¹",
    "GHC": "dźjɨ̣",
    "explanationEN": "pull.up/rescue",
    "explanationCN": "拔拉抽"
  },
  {
    "character": "𘐀",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "Tibetan",
    "explanationCN": "1.羌藏吐藩、【渤】（音 193）"
  },
  {
    "character": "𘍭",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "cleverness/skillful.artisan",
    "explanationCN": "1.巧工匠、【岁】"
  },
  {
    "character": "𘋴",
    "GX": "yeṃ²",
    "GHC": "ꞏjɨj²",
    "explanationEN": "Tibetan",
    "explanationCN": "羌戎吐藩"
  },
  {
    "character": "𘎯",
    "GX": "rkawr²",
    "GHC": "kja̱r²",
    "explanationEN": "cut",
    "explanationCN": "割】"
  },
  {
    "character": "𘎱",
    "GX": "tśwe²",
    "GHC": "tśjij¹",
    "explanationEN": "drive.away/expel",
    "explanationCN": "驱遗"
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
    "GHC": "ljọ²",
    "explanationEN": "catch.ʙ/arrest.ʙ",
    "explanationCN": "捕捉捉拉"
  },
  {
    "character": "𗯻",
    "GX": "dźaw¹",
    "GHC": "dźja̱¹",
    "explanationEN": "burn/kindle",
    "explanationCN": "燃烧"
  },
  {
    "character": "𘎬",
    "GX": "kwih²",
    "GHC": "kjwị²",
    "explanationEN": "harvest/collect/reap",
    "explanationCN": "採收芟割"
  },
  {
    "character": "𘎘",
    "GX": "nli¹",
    "GHC": "lji̱¹",
    "explanationEN": "smell",
    "explanationCN": "嗅闻"
  },
  {
    "character": "𘂀",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "man/person/people",
    "explanationCN": "人民庶"
  },
  {
    "character": "𘋸",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "sexual.intercourse",
    "explanationCN": "性交"
  },
  {
    "character": "𘐪",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "draw.(a.bow)",
    "explanationCN": "拉"
  },
  {
    "character": "𘏃",
    "GX": "qə̱h¹",
    "GHC": "kə̣¹",
    "explanationEN": "overflow/spill",
    "explanationCN": "溢"
  },
  {
    "character": "𘏡",
    "GX": "ŋqhae̱¹",
    "GHC": "khie̱j¹",
    "explanationEN": "fruit",
    "explanationCN": "1.果实结果、辛"
  },
  {
    "character": "𘍫",
    "GX": "qhwai̱¹",
    "GHC": "khiwe¹",
    "explanationEN": "a.surname/vigorous",
    "explanationCN": "1.【契】、刚健形容词"
  },
  {
    "character": "𘖙",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "a.unit.of.measurement.for.rolls.of.cloth.or.silk",
    "explanationCN": "疋匹段"
  },
  {
    "character": "𘕧",
    "GX": "nda̱²",
    "GHC": "da̱²",
    "explanationEN": "tour/walk/patrol",
    "explanationCN": "游行巡"
  },
  {
    "character": "𘗢",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "husband.and.wife",
    "explanationCN": "夫妻"
  },
  {
    "character": "𘗝",
    "GX": "lu̱h¹",
    "GHC": "lụ¹",
    "explanationEN": "door",
    "explanationCN": "户"
  },
  {
    "character": "𘕪",
    "GX": "γi̱w¹",
    "GHC": "ɣew¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【沤】【嚎】【哀】【欧】"
  },
  {
    "character": "𘁸",
    "GX": "thə̱h¹",
    "GHC": "thə̣¹",
    "explanationEN": "even/well-distributed",
    "explanationCN": "均匀"
  },
  {
    "character": "𘗥",
    "GX": "dẓaə̱¹",
    "GHC": "dźiə¹",
    "explanationEN": "a.surname",
    "explanationCN": "【示】【射】"
  },
  {
    "character": "𗭶",
    "GX": "go²",
    "GHC": "gjo²",
    "explanationEN": "decline/wane",
    "explanationCN": "衰"
  },
  {
    "character": "𘌨",
    "GX": "lah²",
    "GHC": "ljạ²",
    "explanationEN": "burst/split/crack",
    "explanationCN": "破裂"
  },
  {
    "character": "𘍞",
    "GX": "γao̱h¹",
    "GHC": "iọ¹",
    "explanationEN": "round/ring/courtyard/all",
    "explanationCN": "发语词；范围"
  },
  {
    "character": "𘛫",
    "GX": "liw¹",
    "GHC": "ljiw¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【刘】【柳】【榴】【流】【留】【琉】【娄】【繚】"
  },
  {
    "character": "𗮍",
    "GX": "dzi²",
    "GHC": "dzji²",
    "explanationEN": "tattoo.the.face.(as.a.punishment)/brand",
    "explanationCN": "黥烙刺字"
  },
  {
    "character": "𘃫",
    "GX": "qwə̱h¹",
    "GHC": "kwə̣¹",
    "explanationEN": "unfired.brick",
    "explanationCN": "墼（砖坯）】"
  },
  {
    "character": "𘛒",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "mixed/in.a.mess/in.a.jumble",
    "explanationCN": "杂乱"
  },
  {
    "character": "𘍇",
    "GX": "rgwar¹",
    "GHC": "gjwar¹",
    "explanationEN": "gallop/speed",
    "explanationCN": "驰"
  },
  {
    "character": "𘛢",
    "GX": "rmer¹",
    "GHC": "mjijr¹",
    "explanationEN": "soldier/person",
    "explanationCN": "1.兵卒士人、庸"
  },
  {
    "character": "𘌮",
    "GX": "qhaa̱²",
    "GHC": "khia²",
    "explanationEN": "ghost/spirit/demon",
    "explanationCN": "鬼魅蜮"
  },
  {
    "character": "𘍌",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "wife",
    "explanationCN": "妻"
  },
  {
    "character": "𘍑",
    "GX": "leṃ¹",
    "GHC": "ljɨj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.音【灵】【林】【菱】【廉】、【令】（珠 366）【凌】（珠 296）【䔖】（珠 145）【綾】（珠 256）【连】（珠 291）【莲】（珠 136）【廉】（珠 232）【镰】（珠 266）、【陵】【零】【领】【伶】（音 204）"
  },
  {
    "character": "𗮤",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "penis",
    "explanationCN": "阴根生殖器"
  },
  {
    "character": "𗮬",
    "GX": "nlə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "sore",
    "explanationCN": "疱疹"
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
    "GHC": "ljị²",
    "explanationEN": "disaster/calamity",
    "explanationCN": "灾祸"
  },
  {
    "character": "𗮫",
    "GX": "tśhə²",
    "GHC": "tśhjɨ²",
    "explanationEN": "sore",
    "explanationCN": "癤"
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
    "explanationCN": "奶乳房】"
  },
  {
    "character": "𗯃",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "sore",
    "explanationCN": "癤"
  },
  {
    "character": "𗯀",
    "GX": "śiw²",
    "GHC": "śjiw²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【税】草名"
  },
  {
    "character": "𗮻",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【谋】草名"
  },
  {
    "character": "𗯉",
    "GX": "nlə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【勒】草名"
  },
  {
    "character": "𘕮",
    "GX": "hə¹",
    "GHC": "xjɨ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【稀】"
  },
  {
    "character": "𘕯",
    "GX": "hi¹",
    "GHC": "xji¹",
    "explanationEN": "surprised/amazed/stunned",
    "explanationCN": "惊讶惊愕稀奇形容词"
  },
  {
    "character": "𘕬",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "grow/develop",
    "explanationCN": "生壮"
  },
  {
    "character": "𗭽",
    "GX": "di̱h²",
    "GHC": "dẹ²",
    "explanationEN": "know/dispel.doubts",
    "explanationCN": "识知解惑"
  },
  {
    "character": "𘁘",
    "GX": "qwə̱¹",
    "GHC": "kwə¹",
    "explanationEN": "back",
    "explanationCN": "背后"
  },
  {
    "character": "𘃞",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "ᴇxʟᴀᴍ",
    "explanationCN": "ᴇxʟᴀᴍ"
  },
  {
    "character": "𘍵",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "realize/clever",
    "explanationCN": "悟觉聪慧形容词"
  },
  {
    "character": "𘖅",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【韦】【嵬】、【威】【伟】（音 194）"
  },
  {
    "character": "𘛮",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "happy/cheerful",
    "explanationCN": "1.乐娱快乐、【庆】【警】【吉】"
  },
  {
    "character": "𘁵",
    "GX": "tse²",
    "GHC": "tsjij²",
    "explanationEN": "slander/defame",
    "explanationCN": "诽谤毁訾"
  },
  {
    "character": "𘍹",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "scar",
    "explanationCN": "疥疮"
  },
  {
    "character": "𗮓",
    "GX": "nllə²",
    "GHC": "ljɨ̱²",
    "explanationEN": "detest",
    "explanationCN": "厌恶"
  },
  {
    "character": "𘁶",
    "GX": "dzə¹",
    "GHC": "dzjɨ¹",
    "explanationEN": "complete",
    "explanationCN": "齐全】"
  },
  {
    "character": "𗮉",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "wait.ʙ",
    "explanationCN": "等.ʙ"
  },
  {
    "character": "𗕀",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【芜】草名"
  },
  {
    "character": "𗭲",
    "GX": "thu̱²",
    "GHC": "thu²",
    "explanationEN": "a.kind.of.animal",
    "explanationCN": "【兔】兽名"
  },
  {
    "character": "𘌯",
    "GX": "tśheṃ¹",
    "GHC": "tśhjɨj¹",
    "explanationEN": "a.surname",
    "explanationCN": "【称】"
  },
  {
    "character": "𘋺",
    "GX": "ṣuo¹",
    "GHC": "śio̱w¹",
    "explanationEN": "a.surname",
    "explanationCN": "【蜀】【叔】【秀】"
  },
  {
    "character": "𘃍",
    "GX": "nno̱¹",
    "GHC": "no̱¹",
    "explanationEN": "finger",
    "explanationCN": "指"
  },
  {
    "character": "𘎢",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "strike/beat",
    "explanationCN": "1.打】、【靼】【打】【妲】"
  },
  {
    "character": "𘎤",
    "GX": "tə¹",
    "GHC": "tjɨ¹",
    "explanationEN": "if/one",
    "explanationCN": "若、一"
  },
  {
    "character": "𘋏",
    "GX": "ne̱²",
    "GHC": "nej²",
    "explanationEN": "evening/night",
    "explanationCN": "晚"
  },
  {
    "character": "𘐳",
    "GX": "?ə²",
    "GHC": "",
    "explanationEN": "volume",
    "explanationCN": "卷"
  },
  {
    "character": "𘂶",
    "GX": "vih¹",
    "GHC": "wjị¹",
    "explanationEN": "monkey/beast/animal",
    "explanationCN": "猴申晡兽"
  },
  {
    "character": "𘏀",
    "GX": "deh¹",
    "GHC": "djịj¹",
    "explanationEN": "cut/chop",
    "explanationCN": "切割斫斩截"
  },
  {
    "character": "𘛟",
    "GX": "ve²",
    "GHC": "wjij²",
    "explanationEN": "uncle",
    "explanationCN": "伯叔"
  },
  {
    "character": "𘋨",
    "GX": "dzwə¹",
    "GHC": "dzjwɨ¹",
    "explanationEN": "emperor",
    "explanationCN": "帝君"
  },
  {
    "character": "𘏐",
    "GX": "γwai̱¹",
    "GHC": "ɣiwe¹",
    "explanationEN": "power/force",
    "explanationCN": "势力权贵胜"
  },
  {
    "character": "𘎶",
    "GX": "qwə̱²",
    "GHC": "kwə²",
    "explanationEN": "convulsion/spasm/lame/bent",
    "explanationCN": "痉挛跛曲名词"
  },
  {
    "character": "𘟝",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "power/force",
    "explanationCN": "权势"
  },
  {
    "character": "𘁍",
    "GX": "lwəh¹",
    "GHC": "ljwɨ̣¹",
    "explanationEN": "calf",
    "explanationCN": "犊"
  },
  {
    "character": "𘍲",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "surprised/astonished",
    "explanationCN": "诧】"
  },
  {
    "character": "𘐰",
    "GX": "qwaə̱¹",
    "GHC": "kiwə¹",
    "explanationEN": "step.on/burst/split",
    "explanationCN": "踩压踏破裂"
  },
  {
    "character": "𘎴",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "drag/put.out",
    "explanationCN": "拔拉扯"
  },
  {
    "character": "𘁂",
    "GX": "ya²",
    "GHC": "ꞏja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【耶】【也】【野】【夜】【叶】【閆】【琰】、【邪】【邑】【衍】【逸】【阴】（音 210）"
  },
  {
    "character": "𘁻",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "crimson",
    "explanationCN": "朱红"
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
    "explanationEN": "a.kind.of.animal",
    "explanationCN": "【羝】动物名"
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
    "explanationEN": "the.sun",
    "explanationCN": "1.日、提"
  },
  {
    "character": "𘛸",
    "GX": "dźwu¹",
    "GHC": "dźjwu¹",
    "explanationEN": "meteorite/lightning/thunderbolt",
    "explanationCN": "陨石闪电霹靂"
  },
  {
    "character": "𘏮",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "knead/press",
    "explanationCN": "揉捏压"
  },
  {
    "character": "𘏧",
    "GX": "yaw²",
    "GHC": "ꞏja̱²",
    "explanationEN": "gold",
    "explanationCN": "1.金、【瑶】【陶】"
  },
  {
    "character": "𘏽",
    "GX": "swi¹",
    "GHC": "sjwi¹",
    "explanationEN": "auspicious/lucky",
    "explanationCN": "1.瑞吉祥、【隋】【遂】【随】"
  },
  {
    "character": "𘝱",
    "GX": "ŋkho¹",
    "GHC": "khjo̱¹",
    "explanationEN": "open.eyes",
    "explanationCN": "睁张瞪"
  },
  {
    "character": "𗯬",
    "GX": "rvwe̱r²",
    "GHC": "wejr²",
    "explanationEN": "nose.bolt",
    "explanationCN": "鼻栓"
  },
  {
    "character": "𗯵",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "destroy/damage",
    "explanationCN": "毁坏毁损破坏"
  },
  {
    "character": "𗯰",
    "GX": "thi²",
    "GHC": "thji²",
    "explanationEN": "tail",
    "explanationCN": "尾"
  },
  {
    "character": "𘂺",
    "GX": "tśi¹",
    "GHC": "tśji¹",
    "explanationEN": "stasis.(of.blood)",
    "explanationCN": "瘀阻（血阻病）"
  },
  {
    "character": "𘂿",
    "GX": "vəh¹",
    "GHC": "wjɨ̣¹",
    "explanationEN": "skill",
    "explanationCN": "伎技"
  },
  {
    "character": "𘏥",
    "GX": "du¹",
    "GHC": "dju¹",
    "explanationEN": "ban/prohibit",
    "explanationCN": "禁止拒"
  },
  {
    "character": "𗰌",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【拶】草名"
  },
  {
    "character": "𗰀",
    "GX": "nthwu̱¹",
    "GHC": "thwu̱¹",
    "explanationEN": "open/through",
    "explanationCN": "通】"
  },
  {
    "character": "𘏎",
    "GX": "ndzu²",
    "GHC": "dzju̱²",
    "explanationEN": "plant",
    "explanationCN": "栽植"
  },
  {
    "character": "𘐙",
    "GX": "dzwə̱¹",
    "GHC": "dzwə¹",
    "explanationEN": "arrest/catch",
    "explanationCN": "捉拏"
  },
  {
    "character": "𘐱",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "true/real/genuine",
    "explanationCN": "真实"
  },
  {
    "character": "𘑄",
    "GX": "dau̱¹",
    "GHC": "du¹",
    "explanationEN": "prohibit/ban/resist",
    "explanationCN": "1.拒绝禁止推卸、沉溺坑陷"
  },
  {
    "character": "𘎖",
    "GX": "dziw²",
    "GHC": "dzjiw²",
    "explanationEN": "link/continue",
    "explanationCN": "连接连续粘连动词"
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
    "GX": "ṣae̱ṃ¹",
    "GHC": "śiəj¹",
    "explanationEN": "give.birth/bear",
    "explanationCN": "生產】"
  },
  {
    "character": "𘎛",
    "GX": "nṣai̱¹",
    "GHC": "śie̱¹",
    "explanationEN": "target/meaning",
    "explanationCN": "的意"
  },
  {
    "character": "𘐯",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "prohibit/ban",
    "explanationCN": "制止禁止遏制"
  },
  {
    "character": "𘋹",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "the.Han",
    "explanationCN": "汉人"
  },
  {
    "character": "𘏭",
    "GX": "tśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "drag/pull",
    "explanationCN": "拉扯"
  },
  {
    "character": "𘂸",
    "GX": "keṃ¹",
    "GHC": "kjɨj¹",
    "explanationEN": "surprise/shock/alarm",
    "explanationCN": "惊】"
  },
  {
    "character": "𘖛",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "kind/benevolent",
    "explanationCN": "慈悲慈善"
  },
  {
    "character": "𘕤",
    "GX": "yu²",
    "GHC": "ꞏju²",
    "explanationEN": "seek.ᴀ/search.ᴀ",
    "explanationCN": "寻.ᴀ"
  },
  {
    "character": "𘛪",
    "GX": "bi²",
    "GHC": "bji²",
    "explanationEN": "be.surprised/be.amazed",
    "explanationCN": "惊愕惊讶"
  },
  {
    "character": "𘕨",
    "GX": "nsi¹",
    "GHC": "sji̱¹",
    "explanationEN": "cry.bitterly/wail/condole",
    "explanationCN": "痛苦吊唁"
  },
  {
    "character": "𘗞",
    "GX": "rvor²",
    "GHC": "wjor²",
    "explanationEN": "nest",
    "explanationCN": "窝巢】"
  },
  {
    "character": "𘁹",
    "GX": "rdza̱r¹",
    "GHC": "dzar¹",
    "explanationEN": "vary/change/be.magic",
    "explanationCN": "魔术变幻"
  },
  {
    "character": "𗮏",
    "GX": "ŋge¹",
    "GHC": "gji̱j¹",
    "explanationEN": "exceed/surpass",
    "explanationCN": "超过"
  },
  {
    "character": "𘃬",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "thread/string",
    "explanationCN": "线绳"
  },
  {
    "character": "𘃭",
    "GX": "qhao̱²",
    "GHC": "khio²",
    "explanationEN": "skillful/ingenious",
    "explanationCN": "巧】"
  },
  {
    "character": "𘌽",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "this",
    "explanationCN": "此"
  },
  {
    "character": "𘝠",
    "GX": "thə²",
    "GHC": "thjɨ²",
    "explanationEN": "scorpion",
    "explanationCN": "蝮蝎"
  },
  {
    "character": "𘞪",
    "GX": "teh¹",
    "GHC": "tjịj¹",
    "explanationEN": "only/unique",
    "explanationCN": "1.独一、专印"
  },
  {
    "character": "𗮦",
    "GX": "ntśi¹",
    "GHC": "tśji̱¹",
    "explanationEN": "make.love/rape",
    "explanationCN": "交构姦淫"
  },
  {
    "character": "𗮥",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "bottom/backside",
    "explanationCN": "屁股臀部"
  },
  {
    "character": "𗮝",
    "GX": "lhao̱ṃ²",
    "GHC": "lhiow²",
    "explanationEN": "meat.chopped.insmall.pieces/minced.meat",
    "explanationCN": "块膾"
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
    "GHC": "khjã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【乾】；癤"
  },
  {
    "character": "𗯋",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "penis",
    "explanationCN": "男根（阴茎）"
  },
  {
    "character": "𘁢",
    "GX": "thi̱w²",
    "GHC": "thew²",
    "explanationEN": "play/tease",
    "explanationCN": "1.嬉闹、【头】"
  },
  {
    "character": "𘃢",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "woolen.cloth",
    "explanationCN": "毛料"
  },
  {
    "character": "𘍡",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "penis",
    "explanationCN": "阴（男根）"
  },
  {
    "character": "𘌷",
    "GX": "nlu¹",
    "GHC": "lju̱¹",
    "explanationEN": "cross",
    "explanationCN": "渡度过"
  },
  {
    "character": "𘕞",
    "GX": "dzih²",
    "GHC": "dzjị²",
    "explanationEN": "abet/instigate",
    "explanationCN": "1.唆、癤疤"
  },
  {
    "character": "𘞫",
    "GX": "rgiwr²",
    "GHC": "gjiwr²",
    "explanationEN": "a.bit.of/a.drop.of",
    "explanationCN": "点滴丸形容词"
  },
  {
    "character": "𘗚",
    "GX": "de²",
    "GHC": "djij²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【缔】"
  },
  {
    "character": "𘃎",
    "GX": "pah¹",
    "GHC": "pjạ¹",
    "explanationEN": "palm/handful.of",
    "explanationCN": "1.掌巴合量词、掩"
  },
  {
    "character": "𘎸",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "decorate/adorn/ornament",
    "explanationCN": "饰"
  },
  {
    "character": "𘏔",
    "GX": "rphə̱r¹",
    "GHC": "phər¹",
    "explanationEN": "eliminate/clean.away",
    "explanationCN": "清除"
  },
  {
    "character": "𘐇",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "record/write/stele",
    "explanationCN": "记传碑"
  },
  {
    "character": "𘖏",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "right.now/this.time",
    "explanationCN": "此刻倾刻"
  },
  {
    "character": "𘋫",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "bend/inverse/topple.and.fall",
    "explanationCN": "倾倒伏躄"
  },
  {
    "character": "𘖕",
    "GX": "tso¹",
    "GHC": "tsjo¹",
    "explanationEN": "restless/impetuous",
    "explanationCN": "躁】"
  },
  {
    "character": "𘐠",
    "GX": "ŋwo̱²",
    "GHC": "ŋjwo²",
    "explanationEN": "damage/injure/harm",
    "explanationCN": "1.损伤损坏损害、破裂"
  },
  {
    "character": "𘑀",
    "GX": "təh²",
    "GHC": "tjɨ̣²",
    "explanationEN": "damage/break",
    "explanationCN": "破烂破碎破坏"
  },
  {
    "character": "𘐡",
    "GX": "ntśə¹",
    "GHC": "tśjɨ¹",
    "explanationEN": "order/sequence",
    "explanationCN": "1.次序、续绪、至"
  },
  {
    "character": "𘎩",
    "GX": "swe̱¹",
    "GHC": "swej¹",
    "explanationEN": "fragmentary/broken",
    "explanationCN": "碎】"
  },
  {
    "character": "𘋧",
    "GX": "nlo²",
    "GHC": "ljo̱²",
    "explanationEN": "pants",
    "explanationCN": "裤"
  },
  {
    "character": "𘖊",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "footmark/trace",
    "explanationCN": "足跡"
  },
  {
    "character": "𘏓",
    "GX": "se²",
    "GHC": "sjij²",
    "explanationEN": "interests.(on.an.investment)",
    "explanationCN": "利息"
  },
  {
    "character": "𘎷",
    "GX": "nwəh²",
    "GHC": "njwɨ̣²",
    "explanationEN": "rush.(be.used.as.wick)",
    "explanationCN": "灯草"
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
    "explanationEN": "listen.(respectfully)/hear",
    "explanationCN": "聆取"
  },
  {
    "character": "𘁼",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "puckery/astringent",
    "explanationCN": "1.涩】、柿子"
  },
  {
    "character": "𘂯",
    "GX": "mbo̱²",
    "GHC": "bo̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【慕】【茂】【目】【帽】【补】【满】、【谋】（珠 316）【牡】（珠 133）【墨】（珠 272）【木】（珠 136）【目】（珠 183）【牧】（珠 285）【毛】（珠 231 ）、【穆】【莽】【摩】（音 193）"
  },
  {
    "character": "𘏕",
    "GX": "rvwai̱r¹",
    "GHC": "wier¹",
    "explanationEN": "throw/cast",
    "explanationCN": "投抛掷"
  },
  {
    "character": "𘏒",
    "GX": "phai̱²",
    "GHC": "phie²",
    "explanationEN": "untie/relieve",
    "explanationCN": "解开张放"
  },
  {
    "character": "𘏱",
    "GX": "si̱w²",
    "GHC": "sew²",
    "explanationEN": "piebald/stripe",
    "explanationCN": "1.花斑斑纹、【簫】【修】【秀】【锈】【苏】"
  },
  {
    "character": "𘏰",
    "GX": "və²",
    "GHC": "wjɨ²",
    "explanationEN": "right.now/this.time",
    "explanationCN": "此刻顷刻"
  },
  {
    "character": "𘏑",
    "GX": "phu̱¹",
    "GHC": "phu¹",
    "explanationEN": "general/universal",
    "explanationCN": "普】"
  },
  {
    "character": "𘃑",
    "GX": "mi̱h²",
    "GHC": "mẹ²",
    "explanationEN": "abandon",
    "explanationCN": "抛弃免除"
  },
  {
    "character": "𘖎",
    "GX": "veh¹",
    "GHC": "wjịj¹",
    "explanationEN": "short/brief",
    "explanationCN": "短"
  },
  {
    "character": "𘏊",
    "GX": "rkur¹",
    "GHC": "kjur¹",
    "explanationEN": "fill.ᴀ/ladle.ᴀ",
    "explanationCN": "盛.ᴀ"
  },
  {
    "character": "𘏩",
    "GX": "feṃh²",
    "GHC": "xjwɨ̣j²",
    "explanationEN": "hang/suspend",
    "explanationCN": "悬垂"
  },
  {
    "character": "𗰎",
    "GX": "γu̱h¹",
    "GHC": "ꞏụ¹",
    "explanationEN": "young.deer",
    "explanationCN": "小鹿"
  },
  {
    "character": "𗯴",
    "GX": "khu¹",
    "GHC": "khju¹",
    "explanationEN": "ꜱᴜʙᴇ",
    "explanationCN": "ꜱᴜʙᴇ"
  },
  {
    "character": "𘛨",
    "GX": "ŋqwa̱¹",
    "GHC": "kwa̱¹",
    "explanationEN": "earthen.bowl/alms.bowl",
    "explanationCN": "鉢"
  },
  {
    "character": "𘋘",
    "GX": "qao̱²",
    "GHC": "kio²",
    "explanationEN": "call/make.somebody.do",
    "explanationCN": "1.教叫】、来到"
  },
  {
    "character": "𘖉",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "reach/arrive",
    "explanationCN": "到至"
  },
  {
    "character": "𘃓",
    "GX": "nna̱¹",
    "GHC": "na̱¹",
    "explanationEN": "grab/clutch",
    "explanationCN": "抓"
  },
  {
    "character": "𘐆",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "record/write/stele",
    "explanationCN": "记传碑名词"
  },
  {
    "character": "𗯶",
    "GX": "rma̱r²",
    "GHC": "ma²",
    "explanationEN": "a.surname",
    "explanationCN": "【苗】【麻】【卯】"
  },
  {
    "character": "𗯽",
    "GX": "mma̱r¹",
    "GHC": "ma̱r¹",
    "explanationEN": "wonderful/excellent",
    "explanationCN": "妙】"
  },
  {
    "character": "𘗣",
    "GX": "dau̱²",
    "GHC": "du²",
    "explanationEN": "pagoda/Buddhist.pagoda",
    "explanationCN": "塔"
  },
  {
    "character": "𘖚",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "marsh/swamp/bog",
    "explanationCN": "沼泽"
  },
  {
    "character": "𘛝",
    "GX": "tsu¹",
    "GHC": "tsju¹",
    "explanationEN": "penis",
    "explanationCN": "婴根"
  },
  {
    "character": "𘝤",
    "GX": "ṇao̱ṃ¹",
    "GHC": "niow¹",
    "explanationEN": "dirty/filthy",
    "explanationCN": "秽"
  },
  {
    "character": "𘃚",
    "GX": "dzwə²",
    "GHC": "dzjwɨ²",
    "explanationEN": "make/build",
    "explanationCN": "修造製作"
  },
  {
    "character": "𗔿",
    "GX": "rlwə̱r²",
    "GHC": "lwər²",
    "explanationEN": "ceremony/rite/get.a.haircut",
    "explanationCN": "1.礼、【论】"
  },
  {
    "character": "𗭮",
    "GX": "źoṃ¹",
    "GHC": "źjow¹",
    "explanationEN": "down/cloth.with.soft.nap",
    "explanationCN": "戎绒氄】"
  },
  {
    "character": "𗮅",
    "GX": "re̱r²",
    "GHC": "rejr²",
    "explanationEN": "many/much/more",
    "explanationCN": "多久餘"
  },
  {
    "character": "𗮀",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "intelligent/bright/clever",
    "explanationCN": "聪明"
  },
  {
    "character": "𘁞",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "ahead",
    "explanationCN": "1.前、木梳"
  },
  {
    "character": "𘃛",
    "GX": "rar²",
    "GHC": "rjar²",
    "explanationEN": "immediate/rapid",
    "explanationCN": "立即迅速忽然"
  },
  {
    "character": "𘃥",
    "GX": "ndu¹",
    "GHC": "dju̱¹",
    "explanationEN": "store/lay.in",
    "explanationCN": "贮藏"
  },
  {
    "character": "𘁟",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "uneven/irregular/different",
    "explanationCN": "异差异参差"
  },
  {
    "character": "𘍿",
    "GX": "rṇar¹",
    "GHC": "",
    "explanationEN": "hawk/eagle",
    "explanationCN": "鹰"
  },
  {
    "character": "𗮂",
    "GX": "pho¹",
    "GHC": "phjo¹",
    "explanationEN": "dexterous/nimble/skillful",
    "explanationCN": "灵巧"
  },
  {
    "character": "𘁯",
    "GX": "dzih¹",
    "GHC": "dzjị¹",
    "explanationEN": "claw/talon/finger",
    "explanationCN": "指爪"
  },
  {
    "character": "𘕸",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "all/whole",
    "explanationCN": "全都总"
  },
  {
    "character": "𘝟",
    "GX": "śwə¹",
    "GHC": "śjwɨ¹",
    "explanationEN": "contact/pass.through",
    "explanationCN": "来往通过出入"
  },
  {
    "character": "𘞨",
    "GX": "źeh²",
    "GHC": "źjịj²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【佘】【社】【涉】【日】、独"
  },
  {
    "character": "𘌾",
    "GX": "rbaa̱r¹",
    "GHC": "biar¹",
    "explanationEN": "make.a.profit/gallop",
    "explanationCN": "1.盈利、奔急驰"
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
    "explanationCN": "曲"
  },
  {
    "character": "𘗗",
    "GX": "po̱¹",
    "GHC": "po¹",
    "explanationEN": "a.surname",
    "explanationCN": "【播】【波】"
  },
  {
    "character": "𘗛",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "skeleton",
    "explanationCN": "骨髓"
  },
  {
    "character": "𗮜",
    "GX": "???",
    "GHC": "",
    "explanationEN": "meet",
    "explanationCN": "1.遇、拥挤拥堵"
  },
  {
    "character": "𗮣",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "rickets",
    "explanationCN": "疱疹"
  },
  {
    "character": "𗯞",
    "GX": "be¹",
    "GHC": "bjij¹",
    "explanationEN": "ring",
    "explanationCN": "鸣】"
  },
  {
    "character": "𘎦",
    "GX": "rvwə̱r¹",
    "GHC": "wər¹",
    "explanationEN": "gallop",
    "explanationCN": "急驰速往"
  },
  {
    "character": "𘎳",
    "GX": "nvwi̱¹",
    "GHC": "we̱¹",
    "explanationEN": "give.birth/bear",
    "explanationCN": "生產"
  },
  {
    "character": "𘞯",
    "GX": "dźih¹",
    "GHC": "dźjị¹",
    "explanationEN": "sickle",
    "explanationCN": "镰刀"
  },
  {
    "character": "𘟜",
    "GX": "dzo̱ṃ¹",
    "GHC": "dzow¹",
    "explanationEN": "wisdom/intelligence",
    "explanationCN": "智慧"
  },
  {
    "character": "𗰋",
    "GX": "rtsa̱r¹",
    "GHC": "tsar¹",
    "explanationEN": "a.kind.of.silk",
    "explanationCN": "繒】"
  },
  {
    "character": "𘋐",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "dawn/daybreak",
    "explanationCN": "晨拂晓黎明"
  },
  {
    "character": "𘋭",
    "GX": "tśha¹",
    "GHC": "tśhja¹",
    "explanationEN": "destroy/wreck",
    "explanationCN": "摧毁破坏"
  },
  {
    "character": "𘍯",
    "GX": "swi²",
    "GHC": "sjwi²",
    "explanationEN": "mother-in-law/aunt",
    "explanationCN": "1.岳母舅母尊、工匠"
  },
  {
    "character": "𘏸",
    "GX": "ṣaə̱¹",
    "GHC": "śiə¹",
    "explanationEN": "send/let.somebody.do",
    "explanationCN": "1.使】、【史】【诗】【始】【瑟】【师】【尸】【式】、【示】（珠 366）【事】（珠 304）【匙】（珠 232）【恃】（珠 296）【柿】（珠 143）【狮】（珠 161）、【侍】【诗】【謚】【士】【施】【世】（音 199）"
  },
  {
    "character": "𘐓",
    "GX": "tah²",
    "GHC": "tjạ²",
    "explanationEN": "unfold/pave",
    "explanationCN": "铺"
  },
  {
    "character": "𘋔",
    "GX": "lae̱h²",
    "GHC": "lẹj²",
    "explanationEN": "evening/night",
    "explanationCN": "晚"
  },
  {
    "character": "𘐑",
    "GX": "rer¹",
    "GHC": "rjijr¹",
    "explanationEN": "play.chess",
    "explanationCN": "弈棋"
  },
  {
    "character": "𗯤",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "cut/break",
    "explanationCN": "砍折"
  },
  {
    "character": "𘋩",
    "GX": "do̱²",
    "GHC": "do²",
    "explanationEN": "ᴛᴇʀᴍ",
    "explanationCN": "ᴛᴇʀᴍ"
  },
  {
    "character": "𘏁",
    "GX": "swe̱¹",
    "GHC": "swej¹",
    "explanationEN": "link/join",
    "explanationCN": "连"
  },
  {
    "character": "𘐏",
    "GX": "tih¹",
    "GHC": "tjị¹",
    "explanationEN": "place/put/set.up",
    "explanationCN": "1.置放设安、始扣专、戴"
  },
  {
    "character": "𘐟",
    "GX": "nah²",
    "GHC": "njạ²",
    "explanationEN": "handkerchief",
    "explanationCN": "1.帕（手帕护手）、补、帔"
  },
  {
    "character": "𘝲",
    "GX": "dwu¹",
    "GHC": "djwu¹",
    "explanationEN": "close.one’s.eyes",
    "explanationCN": "闭目"
  },
  {
    "character": "𘏇",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "curtain/screen/tassel",
    "explanationCN": "鬘缨网"
  },
  {
    "character": "𘛺",
    "GX": "be²",
    "GHC": "bjij²",
    "explanationEN": "dawn",
    "explanationCN": "1.拂晓黎明、旦"
  },
  {
    "character": "𘎙",
    "GX": "qhai̱w²",
    "GHC": "khiew²",
    "explanationEN": "a.surname",
    "explanationCN": "【祁】"
  },
  {
    "character": "𘏣",
    "GX": "lwih²",
    "GHC": "ljwị²",
    "explanationEN": "fetch/strive.for",
    "explanationCN": "取拏争取"
  },
  {
    "character": "𘐎",
    "GX": "pih¹",
    "GHC": "pjị¹",
    "explanationEN": "fat/grease",
    "explanationCN": "脂肪"
  },
  {
    "character": "𘏠",
    "GX": "tsoh²",
    "GHC": "tsjọ²",
    "explanationEN": "penetrate/pass.through",
    "explanationCN": "贯穿串"
  },
  {
    "character": "𘝭",
    "GX": "rzər²",
    "GHC": "zjɨr²",
    "explanationEN": "the.Milky.Way",
    "explanationCN": "银河"
  },
  {
    "character": "𘐿",
    "GX": "ŋkə¹",
    "GHC": "kjɨ̱¹",
    "explanationEN": "supervise",
    "explanationCN": "1.监督、穰"
  },
  {
    "character": "𘏿",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "supervise/preside",
    "explanationCN": "监】"
  },
  {
    "character": "𘐺",
    "GX": "llo̱ṃh¹",
    "GHC": "lhọ¹",
    "explanationEN": "force/intimidate",
    "explanationCN": "逼迫威逼"
  },
  {
    "character": "𘁡",
    "GX": "za̱²",
    "GHC": "za²",
    "explanationEN": "illness/disease",
    "explanationCN": "病"
  },
  {
    "character": "𘍈",
    "GX": "rzir²",
    "GHC": "zjir²",
    "explanationEN": "mad/insane",
    "explanationCN": "癲狂"
  },
  {
    "character": "𘗕",
    "GX": "rẓae̱r²",
    "GHC": "źiejr²",
    "explanationEN": "live/reside",
    "explanationCN": "居"
  },
  {
    "character": "𘁲",
    "GX": "za̱¹",
    "GHC": "za¹",
    "explanationEN": "comb.one's.hair",
    "explanationCN": "梳"
  },
  {
    "character": "𘛱",
    "GX": "ga̱ṃ¹",
    "GHC": "gã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【岸】"
  },
  {
    "character": "𘃟",
    "GX": "ywaṃ¹",
    "GHC": "ꞏjwã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【渊】【完】【元】、【苑】【宛】（音 203）"
  },
  {
    "character": "𘁴",
    "GX": "γwə̱²",
    "GHC": "ɣwə²",
    "explanationEN": "calabash",
    "explanationCN": "葫】"
  },
  {
    "character": "𘕼",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "a.surname",
    "explanationCN": "【俱】【玉】"
  },
  {
    "character": "𘍖",
    "GX": "rywar¹",
    "GHC": "ꞏjwar¹",
    "explanationEN": "be.tired/work.hard",
    "explanationCN": "劳苦"
  },
  {
    "character": "𗭯",
    "GX": "yoṃ¹",
    "GHC": "ꞏjow¹",
    "explanationEN": "a.surname",
    "explanationCN": "【羊】【杨】"
  },
  {
    "character": "𘏛",
    "GX": "be̱²",
    "GHC": "bej²",
    "explanationEN": "rope/string",
    "explanationCN": "绑索绳索"
  },
  {
    "character": "𘑕",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "an.animal-drawn.seed.plough",
    "explanationCN": "1.耬、娄"
  },
  {
    "character": "𘏫",
    "GX": "yaa̱²",
    "GHC": "ꞏjia²",
    "explanationEN": "fall",
    "explanationCN": "1.降、【亚】"
  },
  {
    "character": "𘐽",
    "GX": "tṣwae̱h¹",
    "GHC": "tśiwẹj¹",
    "explanationEN": "thunderous",
    "explanationCN": "雷鸣"
  },
  {
    "character": "𘐻",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "what.time/when",
    "explanationCN": "何时"
  },
  {
    "character": "𘑐",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "measure",
    "explanationCN": "计量"
  },
  {
    "character": "𘏾",
    "GX": "tse̱¹",
    "GHC": "tsej¹",
    "explanationEN": "plant/grow",
    "explanationCN": "1.栽】、【灾】【宰】"
  },
  {
    "character": "𘋜",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "illness/disease",
    "explanationCN": "病患"
  },
  {
    "character": "𘃀",
    "GX": "rzi̱wr²",
    "GHC": "zewr²",
    "explanationEN": "east",
    "explanationCN": "旭东方"
  },
  {
    "character": "𘐬",
    "GX": "bo̱²",
    "GHC": "bo²",
    "explanationEN": "cane/stick",
    "explanationCN": "杖"
  },
  {
    "character": "𘐾",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "stir/mix/twist",
    "explanationCN": "搅绞】"
  },
  {
    "character": "𘐸",
    "GX": "rzə̱r²",
    "GHC": "zər²",
    "explanationEN": "continue",
    "explanationCN": "续】"
  },
  {
    "character": "𘐼",
    "GX": "rtśir¹",
    "GHC": "tśjir¹",
    "explanationEN": "thunderous",
    "explanationCN": "雷鸣"
  },
  {
    "character": "𘑓",
    "GX": "rtśhawr²",
    "GHC": "tśhja̱r²",
    "explanationEN": "zhang,.a.unit.of.length",
    "explanationCN": "丈动词名词】"
  },
  {
    "character": "𘐗",
    "GX": "tə̱h¹",
    "GHC": "tə̣¹",
    "explanationEN": "hold/grasp",
    "explanationCN": "握执"
  },
  {
    "character": "𘐭",
    "GX": "ġo̱¹",
    "GHC": "go¹",
    "explanationEN": "pull",
    "explanationCN": "牵"
  },
  {
    "character": "𘂷",
    "GX": "khiṃ¹",
    "GHC": "khjwĩ¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【戚】【秋】【仇】、末尾名词"
  },
  {
    "character": "𘏻",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "a.surname",
    "explanationCN": "【汝】"
  },
  {
    "character": "𗶞",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "reveal/expose",
    "explanationCN": "暴露"
  },
  {
    "character": "𗶡",
    "GX": "hau̱¹",
    "GHC": "xu¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【胡】【虎】【蝴】【壶】【霍】、【瑚】（珠 126）【胡】（珠 331）【葫】（珠 142）【虎】（珠 165）【琥】（珠 126）【乎】（珠 314）【斛】（珠 154）【狐】（珠 162）【】（珠 146）、【湖】【鹤】【鵠】【户】（音 203）"
  },
  {
    "character": "𗶯",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "imperial.carriage/carriage",
    "explanationCN": "輦舆"
  },
  {
    "character": "𘟑",
    "GX": "ha̱ṃ²",
    "GHC": "xã²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【汉】】"
  },
  {
    "character": "𘟒",
    "GX": "hwi̱²",
    "GHC": "xwe²",
    "explanationEN": "a.surname",
    "explanationCN": "【暉】"
  },
  {
    "character": "𘟐",
    "GX": "rhə̱r²",
    "GHC": "xər²",
    "explanationEN": "hum",
    "explanationCN": "哼】"
  },
  {
    "character": "𗮗",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "cheek",
    "explanationCN": "颊"
  },
  {
    "character": "𘁣",
    "GX": "γeṃ¹",
    "GHC": "ɣjɨj¹",
    "explanationEN": "pillow",
    "explanationCN": "1.枕、源"
  },
  {
    "character": "𘍦",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "look/appearance",
    "explanationCN": "1.相像形、兆、瑞象"
  },
  {
    "character": "𘍺",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "dawn/daybreak",
    "explanationCN": "早晨拂晓黎明"
  },
  {
    "character": "𘛦",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "next.year",
    "explanationCN": "来年明年"
  },
  {
    "character": "𗕂",
    "GX": "gu²",
    "GHC": "giu²",
    "explanationEN": "tool/utensil",
    "explanationCN": "具器】"
  },
  {
    "character": "𘍄",
    "GX": "qai̱¹",
    "GHC": "kie¹",
    "explanationEN": "curse/swear",
    "explanationCN": "诅咒"
  },
  {
    "character": "𘕺",
    "GX": "gu¹",
    "GHC": "gju¹",
    "explanationEN": "canal/ditch",
    "explanationCN": "渠】"
  },
  {
    "character": "𘍂",
    "GX": "mo²",
    "GHC": "mjo²",
    "explanationEN": "sheep",
    "explanationCN": "羊未"
  },
  {
    "character": "𘛣",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【捨】【奢】【闍】【苫】【叉】【缮】"
  },
  {
    "character": "𘍍",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "wife",
    "explanationCN": "妻"
  },
  {
    "character": "𘋽",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "dog",
    "explanationCN": "犬狗"
  },
  {
    "character": "𘌀",
    "GX": "rγae̱r²",
    "GHC": "ꞏiejr²",
    "explanationEN": "curved/crooked",
    "explanationCN": "1.缩屈曲褰、昂"
  },
  {
    "character": "𗮚",
    "GX": "bih¹",
    "GHC": "bjị¹",
    "explanationEN": "urine",
    "explanationCN": "尿"
  },
  {
    "character": "𗮡",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "cheek",
    "explanationCN": "颊"
  },
  {
    "character": "𗮛",
    "GX": "tṣo̱ṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "distribute/allocate",
    "explanationCN": "分配"
  },
  {
    "character": "𗮷",
    "GX": "zwə¹",
    "GHC": "zjwɨ¹",
    "explanationEN": "rickets",
    "explanationCN": "痈"
  },
  {
    "character": "𗮵",
    "GX": "γu̱²",
    "GHC": "ɣu²",
    "explanationEN": "combine/integrate",
    "explanationCN": "1.合】、谋"
  },
  {
    "character": "𗮽",
    "GX": "rer²",
    "GHC": "rjijr²",
    "explanationEN": "rib",
    "explanationCN": "肋骨"
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
    "GHC": "wjị¹",
    "explanationEN": "trace/mark/scar",
    "explanationCN": "踪跡疤痕"
  },
  {
    "character": "𗯄",
    "GX": "kah²",
    "GHC": "kjạ²",
    "explanationEN": "scar/ugly",
    "explanationCN": "1.痂疤、丑陋形容词"
  },
  {
    "character": "𗯎",
    "GX": "twəh¹",
    "GHC": "tjwɨ̣¹",
    "explanationEN": "pudendum",
    "explanationCN": "女阴"
  },
  {
    "character": "𗮢",
    "GX": "lhao̱ṃ²",
    "GHC": "lhiow²",
    "explanationEN": "tinea/ringworm",
    "explanationCN": "癣"
  },
  {
    "character": "𗯆",
    "GX": "məh²",
    "GHC": "mjɨ̣²",
    "explanationEN": "jump",
    "explanationCN": "跳跃"
  },
  {
    "character": "𗯌",
    "GX": "tshai̱²",
    "GHC": "tshie²",
    "explanationEN": "stinking/smelly/foul",
    "explanationCN": "臭"
  },
  {
    "character": "𗭻",
    "GX": "nle²",
    "GHC": "lji̱j²",
    "explanationEN": "wait.ᴀ",
    "explanationCN": "等.ʙ"
  },
  {
    "character": "𘃜",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "permit/allow",
    "explanationCN": "1.允许、气、得"
  },
  {
    "character": "𗭾",
    "GX": "bu¹",
    "GHC": "bju¹",
    "explanationEN": "transparent",
    "explanationCN": "明澈"
  },
  {
    "character": "𘁛",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "children",
    "explanationCN": "儿童"
  },
  {
    "character": "𘁧",
    "GX": "ntśhe¹",
    "GHC": "tśhji̱j¹",
    "explanationEN": "argue/debate",
    "explanationCN": "辩"
  },
  {
    "character": "𘎀",
    "GX": "ṣaə̱²",
    "GHC": "śiə²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【翅】鸟名"
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
    "explanationEN": "a.surname",
    "explanationCN": "【施】"
  },
  {
    "character": "𗮙",
    "GX": "świ¹",
    "GHC": "śjwi¹",
    "explanationEN": "in.a.soft.low.voice",
    "explanationCN": "低声细语"
  },
  {
    "character": "𘍳",
    "GX": "ge¹",
    "GHC": "gjij¹",
    "explanationEN": "special/particular/peculiar",
    "explanationCN": "1.特殊奇超、倍最甚多"
  },
  {
    "character": "𗮁",
    "GX": "zweh²",
    "GHC": "zjwịj²",
    "explanationEN": "sing.praises.of/extol",
    "explanationCN": "颂扬"
  },
  {
    "character": "𘍟",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "a.unit.of.weight",
    "explanationCN": "鎰"
  },
  {
    "character": "𘎁",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "top/top.of.the.head",
    "explanationCN": "顶"
  },
  {
    "character": "𘁬",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "shallow/superficial",
    "explanationCN": "浅薄"
  },
  {
    "character": "𘍥",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "manage/dominate",
    "explanationCN": "主主持主宰"
  },
  {
    "character": "𘌧",
    "GX": "ti¹",
    "GHC": "tji¹",
    "explanationEN": "drip",
    "explanationCN": "滴】"
  },
  {
    "character": "𘌪",
    "GX": "rywər¹",
    "GHC": "ꞏjer¹",
    "explanationEN": "mad/crazy",
    "explanationCN": "狂"
  },
  {
    "character": "𘌱",
    "GX": "dzih¹",
    "GHC": "dzjị¹",
    "explanationEN": "cross",
    "explanationCN": "渡度往"
  },
  {
    "character": "𘍃",
    "GX": "rtśawr²",
    "GHC": "tśja̱r²",
    "explanationEN": "sound.of.teeth.grinding",
    "explanationCN": "咬牙声"
  },
  {
    "character": "𘕢",
    "GX": "bə¹",
    "GHC": "bjɨ¹",
    "explanationEN": "enemy/foe",
    "explanationCN": "敌寇"
  },
  {
    "character": "𘛕",
    "GX": "ṣwaə̱²",
    "GHC": "śiwə²",
    "explanationEN": "gorgeous/splendid",
    "explanationCN": "绚丽斑斕"
  },
  {
    "character": "𘕫",
    "GX": "rŋi̱wr¹",
    "GHC": "ŋewr¹",
    "explanationEN": "fear/dread",
    "explanationCN": "惧怕"
  },
  {
    "character": "𘛤",
    "GX": "rur¹",
    "GHC": "rjur¹",
    "explanationEN": "crucible",
    "explanationCN": "熔坩锅"
  },
  {
    "character": "𘋼",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "will/ideal/aspiration",
    "explanationCN": "1.誌记、忠烈烈士、贞"
  },
  {
    "character": "𗮘",
    "GX": "świ²",
    "GHC": "śjwi²",
    "explanationEN": "food/cooked.rice.or.other.cereals",
    "explanationCN": "食饌"
  },
  {
    "character": "𗮈",
    "GX": "ṇah?",
    "GHC": "nja",
    "explanationEN": "frost",
    "explanationCN": "霜"
  },
  {
    "character": "𘁎",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "a.place.name.(dyke/embankment)",
    "explanationCN": "【滩】地名名词"
  },
  {
    "character": "𘁤",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "woman/girl/daughter",
    "explanationCN": "女女儿"
  },
  {
    "character": "𘃮",
    "GX": "lə¹",
    "GHC": "ljɨ¹",
    "explanationEN": "leave/depart.from",
    "explanationCN": "离】"
  },
  {
    "character": "𘛯",
    "GX": "ŋġu̱¹",
    "GHC": "gu̱¹",
    "explanationEN": "a.surname",
    "explanationCN": "【吴】【兀】"
  },
  {
    "character": "𘛰",
    "GX": "khe²",
    "GHC": "khjij²",
    "explanationEN": "wizard/shaman",
    "explanationCN": "巫巫师"
  },
  {
    "character": "𘍾",
    "GX": "gi²",
    "GHC": "gji²",
    "explanationEN": "a.unit.of",
    "explanationCN": "数"
  },
  {
    "character": "𘕎",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "listen.ᴀ",
    "explanationCN": "听.ᴀ"
  },
  {
    "character": "𘁝",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "centre/middle",
    "explanationCN": "中心中央"
  },
  {
    "character": "𘁥",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【登】鸟名"
  },
  {
    "character": "𗭱",
    "GX": "ga²",
    "GHC": "gja²",
    "explanationEN": "old.sheep",
    "explanationCN": "羖羊"
  },
  {
    "character": "𘌸",
    "GX": "to̱ṃh¹",
    "GHC": "tọ¹",
    "explanationEN": "west",
    "explanationCN": "西"
  },
  {
    "character": "𘌲",
    "GX": "źiw¹",
    "GHC": "źjiw¹",
    "explanationEN": "add/increase",
    "explanationCN": "增"
  },
  {
    "character": "𘍀",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "play/sport",
    "explanationCN": "戏闹"
  },
  {
    "character": "𘍋",
    "GX": "ra̱r²",
    "GHC": "rar²",
    "explanationEN": "narrow/cramped",
    "explanationCN": "狭窄"
  },
  {
    "character": "𘍆",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "grey/ashy",
    "explanationCN": "灰色"
  },
  {
    "character": "𘌼",
    "GX": "lə²",
    "GHC": "ljɨ²",
    "explanationEN": "straight/swelling",
    "explanationCN": "臃直"
  },
  {
    "character": "𘕡",
    "GX": "rzi̱wr¹",
    "GHC": "zewr¹",
    "explanationEN": "graceful/elegant/gorgeous",
    "explanationCN": "秀美斑烂"
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
    "GHC": "tśjị¹",
    "explanationEN": "bitter/painful",
    "explanationCN": "苦"
  },
  {
    "character": "𘕭",
    "GX": "bi¹",
    "GHC": "bji¹",
    "explanationEN": "abundant",
    "explanationCN": "丰稔"
  },
  {
    "character": "𘗙",
    "GX": "bu²",
    "GHC": "bju²",
    "explanationEN": "brown",
    "explanationCN": "色"
  },
  {
    "character": "𘗖",
    "GX": "ŋkhe¹",
    "GHC": "khji̱j¹",
    "explanationEN": "play.games",
    "explanationCN": "游戏"
  },
  {
    "character": "𘃉",
    "GX": "ŋwə̱¹",
    "GHC": "ŋwə¹",
    "explanationEN": "sleep/be.drowsy",
    "explanationCN": "瞌睡"
  },
  {
    "character": "𘍠",
    "GX": "rdi̱wr¹",
    "GHC": "dewr¹",
    "explanationEN": "mortar",
    "explanationCN": "堆"
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
    "explanationCN": "1.脐、齐"
  },
  {
    "character": "𘃣",
    "GX": "vi²",
    "GHC": "wji²",
    "explanationEN": "a.surname",
    "explanationCN": "1.【韦】【尉】【未】【威】【维】【倭】【尾】【卫】【微】、【魏】【围】（音 194）"
  },
  {
    "character": "𘌹",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "run.quickly",
    "explanationCN": "奔驰"
  },
  {
    "character": "𘛩",
    "GX": "ŋkə¹",
    "GHC": "kjɨ̱¹",
    "explanationEN": "spotted/striped",
    "explanationCN": "1.驳、玛"
  },
  {
    "character": "𘌿",
    "GX": "phi̱¹",
    "GHC": "phe¹",
    "explanationEN": "skillful/ingenious",
    "explanationCN": "灵巧"
  },
  {
    "character": "𘛔",
    "GX": "nwo̱ṃ²",
    "GHC": "njwɨ²",
    "explanationEN": "herd",
    "explanationCN": "牧"
  },
  {
    "character": "𘍸",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "natural.resources",
    "explanationCN": "资源"
  },
  {
    "character": "𘋶",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "ghost/spirit",
    "explanationCN": "鬼"
  },
  {
    "character": "𘎻",
    "GX": "śə¹",
    "GHC": "śjɨ¹",
    "explanationEN": "wipe.off/whisk",
    "explanationCN": "1.拭】、装饰、里"
  },
  {
    "character": "𘏙",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "wipe.off/whisk",
    "explanationCN": "拂拭"
  },
  {
    "character": "𘏹",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "chopsticks",
    "explanationCN": "箸筷子"
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
    "explanationEN": "beat/pound",
    "explanationCN": "椎捶蹋"
  },
  {
    "character": "𘐶",
    "GX": "dźwo²",
    "GHC": "dźjwo²",
    "explanationEN": "throw/fling",
    "explanationCN": "掷投弃"
  },
  {
    "character": "𘂻",
    "GX": "li̱w²",
    "GHC": "lew²",
    "explanationEN": "owlet",
    "explanationCN": "鵂鵄"
  },
  {
    "character": "𗯯",
    "GX": "te²",
    "GHC": "tjij²",
    "explanationEN": "clumsy/dull/unskillful",
    "explanationCN": "拙笨俗愚呆"
  },
  {
    "character": "𘃅",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "store/save",
    "explanationCN": "贮藏"
  },
  {
    "character": "𘍪",
    "GX": "hu¹",
    "GHC": "xju¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【许】"
  },
  {
    "character": "𘎨",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "bear.ʙ.(a.burden)/endure.ʙ",
    "explanationCN": "负担.ʙ; 忍耐.ʙ"
  },
  {
    "character": "𘏬",
    "GX": "ŋqa̱r¹",
    "GHC": "ka̱r¹",
    "explanationEN": "steelyard",
    "explanationCN": "1.秤、三司、权"
  },
  {
    "character": "𘝯",
    "GX": "mbao̱¹",
    "GHC": "bjo̱¹",
    "explanationEN": "look/watch/observe",
    "explanationCN": "观瞻看"
  },
  {
    "character": "𘝧",
    "GX": "mbao̱¹",
    "GHC": "bjo̱¹",
    "explanationEN": "patrol",
    "explanationCN": "巡检"
  },
  {
    "character": "𗰂",
    "GX": "hwo̱²",
    "GHC": "xwo²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【活】】、【河】（珠 074）【荷】（珠 145）【和】（珠 084）【祸】（珠 095）【火】（珠 234）【黄】（珠 171）【皇】（珠 381）【凰】（珠 165）【贺】【何】（音 203）"
  },
  {
    "character": "𘋓",
    "GX": "ŋgə²",
    "GHC": "gjɨ̱²",
    "explanationEN": "note/remark/explanation",
    "explanationCN": "注疏评"
  },
  {
    "character": "𗰅",
    "GX": "gwe¹",
    "GHC": "",
    "explanationEN": "a.surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘋳",
    "GX": "gwi²",
    "GHC": "gjwi²",
    "explanationEN": "clothes/clothing",
    "explanationCN": "衣服"
  },
  {
    "character": "𘂱",
    "GX": "mbo̱¹",
    "GHC": "bo̱¹",
    "explanationEN": "color",
    "explanationCN": "顏色容貌"
  },
  {
    "character": "𘂼",
    "GX": "da̱h¹",
    "GHC": "dạ¹",
    "explanationEN": "imperial.edict",
    "explanationCN": "圣諭"
  },
  {
    "character": "𘐍",
    "GX": "tśhwi¹",
    "GHC": "tśhjwi¹",
    "explanationEN": "penetrate/pierce.through",
    "explanationCN": "穿"
  },
  {
    "character": "𘎚",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "patch/mend",
    "explanationCN": "补衲"
  },
  {
    "character": "𘎠",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "dustpan",
    "explanationCN": "簸箕"
  },
  {
    "character": "𘝦",
    "GX": "dźə¹",
    "GHC": "dźjɨ",
    "explanationEN": "skill/art",
    "explanationCN": "1.艺、业、行"
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
    "explanationEN": "name.of.a.ghost",
    "explanationCN": "【厉】鬼名"
  },
  {
    "character": "𘐩",
    "GX": "phə¹",
    "GHC": "phjɨ¹",
    "explanationEN": "lose/discard/abandon",
    "explanationCN": "失弃捨出亏"
  },
  {
    "character": "𘐢",
    "GX": "ŋġai̱¹",
    "GHC": "gie̱¹",
    "explanationEN": "shy/bashful",
    "explanationCN": "腼腆"
  },
  {
    "character": "𘋥",
    "GX": "di̱w²",
    "GHC": "dew²",
    "explanationEN": "motto",
    "explanationCN": "格言谚言辞"
  },
  {
    "character": "𘋬",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "love/like/clothing",
    "explanationCN": "1.喜爱、衣服"
  },
  {
    "character": "𘎣",
    "GX": "khwə¹",
    "GHC": "khjwɨ¹",
    "explanationEN": "winding/crooked",
    "explanationCN": "弯曲"
  },
  {
    "character": "𘎪",
    "GX": "ntshe¹",
    "GHC": "tshji̱j¹",
    "explanationEN": "speak.ᴀ",
    "explanationCN": "说.ᴀ"
  },
  {
    "character": "𘎵",
    "GX": "zeh²",
    "GHC": "zjịj²",
    "explanationEN": "tax/duty",
    "explanationCN": "赋税"
  },
  {
    "character": "𘝮",
    "GX": "llwu̱h¹",
    "GHC": "lwụ¹",
    "explanationEN": "cry/weep",
    "explanationCN": "哭泣"
  },
  {
    "character": "𘝥",
    "GX": "ntshe²",
    "GHC": "tshji̱j²",
    "explanationEN": "joke/jest",
    "explanationCN": "諢"
  },
  {
    "character": "𘁽",
    "GX": "nświ²",
    "GHC": "śjwi̱²",
    "explanationEN": "color/plaster",
    "explanationCN": "色彩涂抹"
  },
  {
    "character": "𘋦",
    "GX": "nẓaa̱²",
    "GHC": "źia̱²",
    "explanationEN": "exert",
    "explanationCN": "努力"
  },
  {
    "character": "𘖍",
    "GX": "ŋgi¹",
    "GHC": "gji̱¹",
    "explanationEN": "beg",
    "explanationCN": "乞讨】"
  },
  {
    "character": "𘖌",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "naughty.children",
    "explanationCN": "顽童"
  },
  {
    "character": "𘏟",
    "GX": "γa̱¹",
    "GHC": "ꞏa",
    "explanationEN": "full/content",
    "explanationCN": "满足"
  },
  {
    "character": "𘎲",
    "GX": "lhu̱¹",
    "GHC": "lhu¹",
    "explanationEN": "increase/raise/add",
    "explanationCN": "增加添益"
  },
  {
    "character": "𘝰",
    "GX": "giṃ¹",
    "GHC": "gjĩ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【银】"
  },
  {
    "character": "𗰇",
    "GX": "lha¹",
    "GHC": "lhjow¹",
    "explanationEN": "call/shout.to",
    "explanationCN": "呼唤"
  },
  {
    "character": "𘁋",
    "GX": "rṇar¹",
    "GHC": "",
    "explanationEN": "tooth",
    "explanationCN": "齿"
  },
  {
    "character": "𗯮",
    "GX": "nthwu̱¹",
    "GHC": "thwu̱¹",
    "explanationEN": "same/alike",
    "explanationCN": "同通】"
  },
  {
    "character": "𗯲",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "invade/touch",
    "explanationCN": "侵触"
  },
  {
    "character": "𘋲",
    "GX": "lu̱¹",
    "GHC": "lu¹",
    "explanationEN": "play/sport",
    "explanationCN": "嬉戏"
  },
  {
    "character": "𘐐",
    "GX": "mah¹",
    "GHC": "mjạ¹",
    "explanationEN": "injure/scratch",
    "explanationCN": "伤搔"
  },
  {
    "character": "𗰈",
    "GX": "dźwaw²",
    "GHC": "dźjwa̱²",
    "explanationEN": "a.surname",
    "explanationCN": "【赭】"
  },
  {
    "character": "𗰍",
    "GX": "dẓai̱w¹",
    "GHC": "dźiew¹",
    "explanationEN": "be.worried.about",
    "explanationCN": "烦恼"
  },
  {
    "character": "𘑅",
    "GX": "ŋkə¹",
    "GHC": "kjɨ̱¹",
    "explanationEN": "wrestle/struggle",
    "explanationCN": "摔跤搏鬭"
  },
  {
    "character": "𘋱",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "maxim/motto/aphorism",
    "explanationCN": "格言妙语"
  },
  {
    "character": "𘎥",
    "GX": "toh¹",
    "GHC": "tjọ¹",
    "explanationEN": "put/arrange.for",
    "explanationCN": "安置"
  },
  {
    "character": "𘍰",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "difference",
    "explanationCN": "差（参差）】"
  },
  {
    "character": "𘋗",
    "GX": "dzu̱²",
    "GHC": "dzu²",
    "explanationEN": "fine.horse/steed",
    "explanationCN": "骏"
  },
  {
    "character": "𘞥",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "live.in.peace",
    "explanationCN": "安居"
  },
  {
    "character": "𘞦",
    "GX": "lo̱ṃ²",
    "GHC": "low²",
    "explanationEN": "upright.and.outspoken",
    "explanationCN": "刚正"
  },
  {
    "character": "𘏜",
    "GX": "nti̱w²",
    "GHC": "te̱w²",
    "explanationEN": "pound.with.a.pestle",
    "explanationCN": "捣春"
  },
  {
    "character": "𘐞",
    "GX": "ŋwi̱²",
    "GHC": "ŋwe²",
    "explanationEN": "bridle",
    "explanationCN": "轡羈繮"
  },
  {
    "character": "𘁃",
    "GX": "ya²",
    "GHC": "ꞏja²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【鸦】【鹰】鸟名"
  },
  {
    "character": "𘃏",
    "GX": "pah²",
    "GHC": "pjạ²",
    "explanationEN": "a.kind.of.bird",
    "explanationCN": "【巴】鸟名"
  },
  {
    "character": "𘃆",
    "GX": "vwi̱¹",
    "GHC": "we¹",
    "explanationEN": "hang",
    "explanationCN": "悬挂"
  },
  {
    "character": "𘖑",
    "GX": "mə¹",
    "GHC": "mjɨ¹",
    "explanationEN": "ɴᴇɢ.ᴍᴏᴅ",
    "explanationCN": "ɴᴇɢ.ᴍᴏᴅ"
  },
  {
    "character": "𘎾",
    "GX": "kheṃ¹",
    "GHC": "khjɨj¹",
    "explanationEN": "grant.ʙ",
    "explanationCN": "予.ʙ"
  },
  {
    "character": "𘏚",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "ɴᴍʟᴢ:ʟᴏᴄ",
    "explanationCN": "ɴᴍʟᴢ:ʟᴏᴄ"
  },
  {
    "character": "𘏼",
    "GX": "tśhiw²",
    "GHC": "tśhjiw²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【丑】【紂】【畴】、【超】【兆】（音 200）"
  },
  {
    "character": "𘐧",
    "GX": "pih¹",
    "GHC": "pjị¹",
    "explanationEN": "Qiang.and.Rong.people",
    "explanationCN": "羌戎"
  },
  {
    "character": "𘐵",
    "GX": "phə²",
    "GHC": "phjɨ²",
    "explanationEN": "branch/twig",
    "explanationCN": "枝条"
  },
  {
    "character": "𘑆",
    "GX": "phə²",
    "GHC": "phjɨ²",
    "explanationEN": "a.kind.of.insect",
    "explanationCN": "【蚍】虫名"
  },
  {
    "character": "𘋯",
    "GX": "yeṃ²",
    "GHC": "ꞏjɨj²",
    "explanationEN": "bag/sack",
    "explanationCN": "1.袋囊、函鞘茧"
  },
  {
    "character": "𘋷",
    "GX": "???",
    "GHC": "",
    "explanationEN": "squeeze/press/force",
    "explanationCN": "挤逼"
  },
  {
    "character": "𘂮",
    "GX": "nwo²",
    "GHC": "njwo²",
    "explanationEN": "hate",
    "explanationCN": "怨恨"
  },
  {
    "character": "𘏍",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "butcher/chop",
    "explanationCN": "斩宰"
  },
  {
    "character": "𘏪",
    "GX": "nae̱h²",
    "GHC": "dẹj²",
    "explanationEN": "a.surname",
    "explanationCN": "【逎】【奈】"
  },
  {
    "character": "𘏨",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "treasure",
    "explanationCN": "宝"
  },
  {
    "character": "𘛭",
    "GX": "se¹",
    "GHC": "sjij¹",
    "explanationEN": "stars",
    "explanationCN": "星】"
  },
  {
    "character": "𗯳",
    "GX": "nwə¹",
    "GHC": "njwɨ¹",
    "explanationEN": "luxuriant/majestic",
    "explanationCN": "茂盛壮丽"
  },
  {
    "character": "𗯺",
    "GX": "rdwar¹",
    "GHC": "djwar¹",
    "explanationEN": "knife/sickle",
    "explanationCN": "刀鞘"
  },
  {
    "character": "𗯿",
    "GX": "rvwe̱r¹",
    "GHC": "wejr¹",
    "explanationEN": "flourishing/luxuriant",
    "explanationCN": "茂兴盛昌隆炽增"
  },
  {
    "character": "𘁿",
    "GX": "kwih²",
    "GHC": "kjwị²",
    "explanationEN": "stirrup",
    "explanationCN": "鐙"
  },
  {
    "character": "𘋕",
    "GX": "ho̱¹",
    "GHC": "xo¹",
    "explanationEN": "he/it/that",
    "explanationCN": "彼伊其"
  },
  {
    "character": "𘑒",
    "GX": "qə̱¹",
    "GHC": "kə¹",
    "explanationEN": "bag/sack",
    "explanationCN": "袋囊"
  },
  {
    "character": "𘑑",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "scrape",
    "explanationCN": "刮"
  },
  {
    "character": "𗯾",
    "GX": "luh¹",
    "GHC": "ljụ¹",
    "explanationEN": "Mongolian.gazelle",
    "explanationCN": "黄羊"
  },
  {
    "character": "𘁈",
    "GX": "śəh¹",
    "GHC": "śjɨ̣¹",
    "explanationEN": "down/lower/under",
    "explanationCN": "下低底副词"
  },
  {
    "character": "𘂃",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "color/appearance",
    "explanationCN": "色顏"
  },
  {
    "character": "𘎗",
    "GX": "lhəh¹",
    "GHC": "lhjɨ̣¹",
    "explanationEN": "bow/crossbow",
    "explanationCN": "弓弩"
  },
  {
    "character": "𘎡",
    "GX": "no̱²",
    "GHC": "no²",
    "explanationEN": "sweet.smell/flavor",
    "explanationCN": "香味气味"
  },
  {
    "character": "𘃄",
    "GX": "dzwəh¹",
    "GHC": "dzjwɨ̣¹",
    "explanationEN": "grip/handle",
    "explanationCN": "把柄"
  },
  {
    "character": "𘂬",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "exist(attached)",
    "explanationCN": "（附着）存在"
  },
  {
    "character": "𘎼",
    "GX": "thə¹",
    "GHC": "thjɨ¹",
    "explanationEN": "abandon/distinguish/expel",
    "explanationCN": "1.释放弃判明驱逐、断剜、脱"
  },
  {
    "character": "𘏝",
    "GX": "phao̱ṃ¹",
    "GHC": "phiow¹",
    "explanationEN": "bow/crossbow",
    "explanationCN": "弓弩"
  },
  {
    "character": "𘛘",
    "GX": "ntśə²",
    "GHC": "tśjɨ̱²",
    "explanationEN": "expand",
    "explanationCN": "扩展"
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
    "GHC": "ljwịj¹",
    "explanationEN": "hate",
    "explanationCN": "1.怨恨、恶"
  },
  {
    "character": "𘏌",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "hold/grip/grasp",
    "explanationCN": "1.握攥、勺"
  },
  {
    "character": "𘂴",
    "GX": "mme¹",
    "GHC": "mji̱j¹",
    "explanationEN": "tail/end/back",
    "explanationCN": "尾末后垂"
  },
  {
    "character": "𘂾",
    "GX": "qa̱h¹",
    "GHC": "kạ¹",
    "explanationEN": "tail/end/east",
    "explanationCN": "末尾东"
  },
  {
    "character": "𘋑",
    "GX": "qwaa̱¹",
    "GHC": "kiwa¹",
    "explanationEN": "remnants",
    "explanationCN": "剩"
  },
  {
    "character": "𘋙",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "fast/rapid/speech/word",
    "explanationCN": "急言"
  },
  {
    "character": "𘃗",
    "GX": "ndə¹",
    "GHC": "djɨ̱¹",
    "explanationEN": "estimate",
    "explanationCN": "估量测"
  },
  {
    "character": "𘐷",
    "GX": "ŋqa̱r¹",
    "GHC": "ka̱r¹",
    "explanationEN": "measure/examine",
    "explanationCN": "计量审察验窥"
  },
  {
    "character": "𘐒",
    "GX": "ryer²",
    "GHC": "ꞏji̱r²",
    "explanationEN": "spread/uphold",
    "explanationCN": "伸张伸展"
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
    "explanationEN": "report/reply",
    "explanationCN": "【报】【保】【褒】【宝】【菠】【簸】【菩】【波】"
  },
  {
    "character": "𘎽",
    "GX": "qhai̱w¹",
    "GHC": "khiew¹",
    "explanationEN": "demolish/destroy",
    "explanationCN": "拆毁摧毁"
  },
  {
    "character": "𘛬",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "ridge",
    "explanationCN": "1.脊、棱"
  },
  {
    "character": "𘕣",
    "GX": "vwa̱²",
    "GHC": "wa²",
    "explanationEN": "what",
    "explanationCN": "何"
  },
  {
    "character": "𘗠",
    "GX": "γa̱¹",
    "GHC": "ɣa¹",
    "explanationEN": "door/gate/room",
    "explanationCN": "门室屋宅计"
  },
  {
    "character": "𘁺",
    "GX": "lheṃ¹",
    "GHC": "lhjɨj¹",
    "explanationEN": "magic",
    "explanationCN": "1.魔法巫术妖术、代受"
  },
  {
    "character": "𘁷",
    "GX": "rdza̱r¹",
    "GHC": "dzar¹",
    "explanationEN": "survey/measure",
    "explanationCN": "1.测量名词、卑极"
  },
  {
    "character": "𗮔",
    "GX": "swi̱w¹",
    "GHC": "swew¹",
    "explanationEN": "shine/illuminate",
    "explanationCN": "照"
  },
  {
    "character": "𘎄",
    "GX": "rvwi̱r¹",
    "GHC": "wer¹",
    "explanationEN": "listen/hear",
    "explanationCN": "听闻"
  },
  {
    "character": "𘃦",
    "GX": "nllə¹",
    "GHC": "ljɨ̱¹",
    "explanationEN": "do/.be.able",
    "explanationCN": "做办能"
  },
  {
    "character": "𘍁",
    "GX": "rtṣaə̱r¹",
    "GHC": "tśiər¹",
    "explanationEN": "crack.noise",
    "explanationCN": "爆裂裂音"
  },
  {
    "character": "𘕝",
    "GX": "be̱¹",
    "GHC": "bej¹",
    "explanationEN": "smallpox",
    "explanationCN": "痘"
  },
  {
    "character": "𘕠",
    "GX": "rtṣao̱r¹",
    "GHC": "tśior¹",
    "explanationEN": "dirty/filthy",
    "explanationCN": "脏垢污秽辱淤"
  },
  {
    "character": "𘞬",
    "GX": "γwi̱ṃ¹",
    "GHC": "ɣwẽ¹",
    "explanationEN": "complete/overall",
    "explanationCN": "全面"
  },
  {
    "character": "𘍙",
    "GX": "guh²",
    "GHC": "gjụ²",
    "explanationEN": "tired/weary",
    "explanationCN": "疲倦"
  },
  {
    "character": "𗮮",
    "GX": "nni²",
    "GHC": "nji̱²",
    "explanationEN": "nose",
    "explanationCN": "鼻"
  },
  {
    "character": "𗮯",
    "GX": "śwaw¹",
    "GHC": "śjwa̱¹",
    "explanationEN": "the.upper.part.of.the.human.body",
    "explanationCN": "胁"
  },
  {
    "character": "𗮴",
    "GX": "mma¹",
    "GHC": "mja̱¹",
    "explanationEN": "sore",
    "explanationCN": "疮疤"
  },
  {
    "character": "𗮼",
    "GX": "peh²",
    "GHC": "pjịj²",
    "explanationEN": "kidney",
    "explanationCN": "肾臟"
  },
  {
    "character": "𗮱",
    "GX": "sa²",
    "GHC": "sja²",
    "explanationEN": "make.love/rape",
    "explanationCN": "交构奸淫"
  },
  {
    "character": "𗯁",
    "GX": "śiw²",
    "GHC": "śjiw²",
    "explanationEN": "louse",
    "explanationCN": "虱"
  },
  {
    "character": "𗮊",
    "GX": "pho¹",
    "GHC": "phjo¹",
    "explanationEN": "Mongolian.gazelle",
    "explanationCN": "黄羊"
  },
  {
    "character": "𘌰",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "Mongolian.gazelle",
    "explanationCN": "1.黄羊、机关"
  },
  {
    "character": "𘋻",
    "GX": "źu²",
    "GHC": "źju²",
    "explanationEN": "difference",
    "explanationCN": "1.差异、分、【如】【儒】【孺】【汝】、乎"
  },
  {
    "character": "𘛏",
    "GX": "na̱¹",
    "GHC": "na¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【娜】【那】"
  },
  {
    "character": "𗮆",
    "GX": "llih¹",
    "GHC": "ljị¹",
    "explanationEN": "arrow",
    "explanationCN": "箭矢"
  },
  {
    "character": "𘃌",
    "GX": "tih²",
    "GHC": "tjị²",
    "explanationEN": "sleep",
    "explanationCN": "睡觉"
  },
  {
    "character": "𘃪",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "end",
    "explanationCN": "终竟毕极了已讫"
  },
  {
    "character": "𘁩",
    "GX": "rqo̱ṃr²",
    "GHC": "kowr²",
    "explanationEN": "slanting/inclined",
    "explanationCN": "偏斜"
  },
  {
    "character": "𘍻",
    "GX": "la¹",
    "GHC": "lja¹",
    "explanationEN": "special/peculiar",
    "explanationCN": "特殊超迥"
  },
  {
    "character": "𘍣",
    "GX": "tśoṃ¹",
    "GHC": "tśjow¹",
    "explanationEN": "grow/develop",
    "explanationCN": "长"
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
    "explanationEN": "only/single/alone",
    "explanationCN": "独"
  },
  {
    "character": "𘗘",
    "GX": "rdar¹",
    "GHC": "djar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【达】"
  },
  {
    "character": "𘗔",
    "GX": "dya²",
    "GHC": "dja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【低】【甸】"
  },
  {
    "character": "𘍗",
    "GX": "gu²",
    "GHC": "gju²",
    "explanationEN": "toil/hard.labor/penal.servitude",
    "explanationCN": "劳苦劳累苦役"
  },
  {
    "character": "𘁪",
    "GX": "zəh¹",
    "GHC": "zjɨ̣¹",
    "explanationEN": "husband",
    "explanationCN": "夫"
  },
  {
    "character": "𘁾",
    "GX": "ŋwo̱²",
    "GHC": "ŋwo²",
    "explanationEN": "eloquence",
    "explanationCN": "1.辩才、【我】"
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
    "GHC": "wjụ¹",
    "explanationEN": "ladle/scoop",
    "explanationCN": "杓"
  },
  {
    "character": "𘃂",
    "GX": "vəh²",
    "GHC": "wjɨ̣²",
    "explanationEN": "tail/end/east",
    "explanationCN": "尾东"
  },
  {
    "character": "𘑌",
    "GX": "dźe²",
    "GHC": "dźjij²",
    "explanationEN": "evidence/proof",
    "explanationCN": "证据"
  },
  {
    "character": "𘐛",
    "GX": "lləh¹",
    "GHC": "ljɨ̣¹",
    "explanationEN": "transport.ʙ",
    "explanationCN": "1.运输、来賚"
  },
  {
    "character": "𘏶",
    "GX": "twi̱w¹",
    "GHC": "twew¹",
    "explanationEN": "join/connect",
    "explanationCN": "连接"
  },
  {
    "character": "𘐦",
    "GX": "vwuh¹",
    "GHC": "wjụ¹",
    "explanationEN": "bottle/jar",
    "explanationCN": "瓶"
  },
  {
    "character": "𘑖",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "drill/bore",
    "explanationCN": "钻"
  },
  {
    "character": "𘎞",
    "GX": "na̱h¹",
    "GHC": "nạ¹",
    "explanationEN": "nasal.mucus",
    "explanationCN": "鼻涕涕"
  },
  {
    "character": "𘑔",
    "GX": "tśaw¹",
    "GHC": "tśja̱¹",
    "explanationEN": "chop/cut/butcher",
    "explanationCN": "剁砍斩斫屠"
  },
  {
    "character": "𘖒",
    "GX": "məh²",
    "GHC": "mjɨ̣²",
    "explanationEN": "investigate/follow.the.trail.of",
    "explanationCN": "追查追踪"
  },
  {
    "character": "𘂽",
    "GX": "ne²",
    "GHC": "njij²",
    "explanationEN": "tail/bottom",
    "explanationCN": "尾巴臀部屁股"
  },
  {
    "character": "𘎹",
    "GX": "ndu̱¹",
    "GHC": "du̱¹",
    "explanationEN": "part/portion",
    "explanationCN": "份分"
  },
  {
    "character": "𘏘",
    "GX": "rur²",
    "GHC": "rjur²",
    "explanationEN": "ferment",
    "explanationCN": "1.酝酿、【嚕】"
  },
  {
    "character": "𘐤",
    "GX": "tshwe̱¹",
    "GHC": "tshwej¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【崔】【摧】【罪】【翟】"
  },
  {
    "character": "𗯸",
    "GX": "pa̱ṃ¹",
    "GHC": "pã¹",
    "explanationEN": "stunned/astonished",
    "explanationCN": "惊愕惊诧"
  },
  {
    "character": "𗯭",
    "GX": "vwe̱¹",
    "GHC": "wej¹",
    "explanationEN": "peaceful.and.happy/auspicious",
    "explanationCN": "安乐瑞象"
  },
  {
    "character": "𘂵",
    "GX": "???",
    "GHC": "",
    "explanationEN": "lose.conscience",
    "explanationCN": "昏迷"
  },
  {
    "character": "𘍩",
    "GX": "haṃ¹",
    "GHC": "xjã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【献】、【险】（珠 124）【贤】（珠 176）【掀】（珠 241）【见】（珠 303）【弦】（珠 323）【轩】（珠 211）"
  },
  {
    "character": "𘏲",
    "GX": "rtser¹",
    "GHC": "tsji̱r¹",
    "explanationEN": "select/choose",
    "explanationCN": "选择举决简"
  },
  {
    "character": "𘞮",
    "GX": "gi¹",
    "GHC": "gji¹",
    "explanationEN": "sharp",
    "explanationCN": "利"
  },
  {
    "character": "𘐣",
    "GX": "phə̱²",
    "GHC": "phə²",
    "explanationEN": "radish",
    "explanationCN": "萝葡"
  },
  {
    "character": "𘖓",
    "GX": "nli²",
    "GHC": "lji̱²",
    "explanationEN": "break/break",
    "explanationCN": "1.破损毁丧、累"
  },
  {
    "character": "𗯢",
    "GX": "gwə¹",
    "GHC": "gjwɨ¹",
    "explanationEN": "cut/break/snap",
    "explanationCN": "1.割折、堕、流"
  },
  {
    "character": "𘂰",
    "GX": "nṣao̱²",
    "GHC": "śio̱²",
    "explanationEN": "twin/a.pair.of",
    "explanationCN": "双】"
  },
  {
    "character": "𘍬",
    "GX": "ha²",
    "GHC": "xja²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【哈】【献】"
  },
  {
    "character": "𘍮",
    "GX": "rhar¹",
    "GHC": "xjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【胁】"
  },
  {
    "character": "𘏗",
    "GX": "ntśi²",
    "GHC": "tśji̱²",
    "explanationEN": "finger",
    "explanationCN": "指】"
  },
  {
    "character": "𘏷",
    "GX": "ndi¹",
    "GHC": "dji̱¹",
    "explanationEN": "divide/distribute",
    "explanationCN": "分区分分配"
  },
  {
    "character": "𘖋",
    "GX": "ŋə̱¹",
    "GHC": "ŋə¹",
    "explanationEN": "fatness",
    "explanationCN": "1.肥胖、嬉闹"
  },
  {
    "character": "𘛹",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "thunderclap",
    "explanationCN": "雷声"
  },
  {
    "character": "𗯹",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "catch.ᴀ/seize.ᴀ/arrest.ᴀ",
    "explanationCN": "捕捉.ᴀ"
  },
  {
    "character": "𘋮",
    "GX": "ryar¹",
    "GHC": "ꞏjar¹",
    "explanationEN": "stand.up",
    "explanationCN": "1.立、翘、座落"
  },
  {
    "character": "𘃔",
    "GX": "ndə¹",
    "GHC": "djɨ¹",
    "explanationEN": "check/inspect",
    "explanationCN": "检查"
  },
  {
    "character": "𘂳",
    "GX": "źah¹",
    "GHC": "źjạ¹",
    "explanationEN": "between/middle",
    "explanationCN": "间中间之间"
  },
  {
    "character": "𘐈",
    "GX": "kwa¹",
    "GHC": "kjwa¹",
    "explanationEN": "bent/winding/crooked",
    "explanationCN": "弯曲"
  },
  {
    "character": "𘏵",
    "GX": "?a²",
    "GHC": "-ja²",
    "explanationEN": "drive.away/expel",
    "explanationCN": "1.驱遣、荐"
  },
  {
    "character": "𘐊",
    "GX": "tshu̱¹",
    "GHC": "tshu¹",
    "explanationEN": "rough",
    "explanationCN": "粗】"
  },
  {
    "character": "𘞰",
    "GX": "li²",
    "GHC": "lji²",
    "explanationEN": "a.surname",
    "explanationCN": "【里】【利】"
  },
  {
    "character": "𗯷",
    "GX": "kweṃh¹",
    "GHC": "kjwɨ̣j¹",
    "explanationEN": "emperor/king",
    "explanationCN": "君皇天子"
  },
  {
    "character": "𘐌",
    "GX": "la²",
    "GHC": "lja²",
    "explanationEN": "send/mail/post",
    "explanationCN": "1.寄、取"
  },
  {
    "character": "𘐥",
    "GX": "vwuh¹",
    "GHC": "wjụ¹",
    "explanationEN": "bottle/jar",
    "explanationCN": "瓶瓮罐"
  },
  {
    "character": "𘐖",
    "GX": "lu²",
    "GHC": "lju²",
    "explanationEN": "house/room",
    "explanationCN": "屋室"
  },
  {
    "character": "𘎟",
    "GX": "nṣaa̱²",
    "GHC": "śia̱²",
    "explanationEN": "at.will/causally",
    "explanationCN": "1.随意、矢的靶、发"
  },
  {
    "character": "𘎝",
    "GX": "sih¹",
    "GHC": "sjị¹",
    "explanationEN": "nasal.sore",
    "explanationCN": "瘜】"
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
    "explanationEN": "dagger/knife",
    "explanationCN": "匕首砍刀"
  },
  {
    "character": "𘑍",
    "GX": "lhih²",
    "GHC": "lhjị²",
    "explanationEN": "burst/split",
    "explanationCN": "破裂"
  },
  {
    "character": "𘐔",
    "GX": "tshwi̱w¹",
    "GHC": "tshwew¹",
    "explanationEN": "salute/bow",
    "explanationCN": "敬礼拜动词"
  },
  {
    "character": "𘑏",
    "GX": "tah¹",
    "GHC": "tjạ¹",
    "explanationEN": "rely.on/depend.on",
    "explanationCN": "恃依靠"
  },
  {
    "character": "𘕥",
    "GX": "lah¹",
    "GHC": "ljạ¹",
    "explanationEN": "evidence/proof/prove",
    "explanationCN": "证动词"
  },
  {
    "character": "𘛌",
    "GX": "ri̱wr¹",
    "GHC": "rewr¹",
    "explanationEN": "bitter.lettuce",
    "explanationCN": "苦苣（蕖）"
  },
  {
    "character": "𘗡",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "house/room",
    "explanationCN": "屋室"
  },
  {
    "character": "𘗟",
    "GX": "nne¹",
    "GHC": "nji̱j¹",
    "explanationEN": "enter/open",
    "explanationCN": "通入"
  },
  {
    "character": "𘕩",
    "GX": "nsi¹",
    "GHC": "sji̱¹",
    "explanationEN": "cry.bitterly/wail/condole",
    "explanationCN": "哭吊唁"
  },
  {
    "character": "𘟟",
    "GX": "khe¹",
    "GHC": "khjij¹",
    "explanationEN": "cut/chop",
    "explanationCN": "割砍"
  },
  {
    "character": "𘟩",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "seal/stamp/brand",
    "explanationCN": "印信烙动词"
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
    "GHC": "ljị²",
    "explanationEN": "chest",
    "explanationCN": "胸"
  },
  {
    "character": "𘁙",
    "GX": "dźwa¹",
    "GHC": "dźjwa¹",
    "explanationEN": "peak/top/peak",
    "explanationCN": "1.头尖梢端峰、鏃"
  },
  {
    "character": "𘁳",
    "GX": "ndi̱w²",
    "GHC": "de̱w²",
    "explanationEN": "frivolous",
    "explanationCN": "1.轻浮佻易诺敬、【奴】"
  },
  {
    "character": "𘍢",
    "GX": "ye¹",
    "GHC": "ꞏjij¹",
    "explanationEN": "delighted",
    "explanationCN": "悦名词"
  },
  {
    "character": "𘕟",
    "GX": "rzi̱wr²",
    "GHC": "zewr²",
    "explanationEN": "brown.rice",
    "explanationCN": "糙米"
  },
  {
    "character": "𘍎",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "hare/rabbit",
    "explanationCN": "兔"
  },
  {
    "character": "𘟨",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "roll.up/contract/crease",
    "explanationCN": "卷缩皱"
  },
  {
    "character": "𘏴",
    "GX": "rγo̱r²",
    "GHC": "ɣor²",
    "explanationEN": "link/join/connect",
    "explanationCN": "连接"
  },
  {
    "character": "𘛗",
    "GX": "rźər¹",
    "GHC": "źjɨr¹",
    "explanationEN": "ostentatious/liberal.with.money",
    "explanationCN": "阔绰"
  },
  {
    "character": "𘏳",
    "GX": "śa¹",
    "GHC": "śja¹",
    "explanationEN": "a.bit",
    "explanationCN": "点滴"
  },
  {
    "character": "𘐉",
    "GX": "vah²",
    "GHC": "wjạ²",
    "explanationEN": "send/release/remit",
    "explanationCN": "1.遣放释赦、让、披、休、灌"
  },
  {
    "character": "𘃕",
    "GX": "nda¹",
    "GHC": "dja̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【达】【荼】【答】"
  },
  {
    "character": "𗯱",
    "GX": "γwəh¹",
    "GHC": "ɣjwɨ̣¹",
    "explanationEN": "ripple/move",
    "explanationCN": "1.流荡、鬱"
  },
  {
    "character": "𘟧",
    "GX": "rnoṃr²",
    "GHC": "njowr²",
    "explanationEN": "roll.up/contract/crease",
    "explanationCN": "皱卷缩"
  },
  {
    "character": "𘝳",
    "GX": "mə²",
    "GHC": "mjɨ²",
    "explanationEN": "silent/closed",
    "explanationCN": "闭默默然"
  },
  {
    "character": "𘏺",
    "GX": "rta̱r¹",
    "GHC": "tar¹",
    "explanationEN": "trample/step.up/tread",
    "explanationCN": "踩踏践"
  },
  {
    "character": "𘑁",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "prohibit/forbid/cover",
    "explanationCN": "禁止遮蔽镇摄"
  },
  {
    "character": "𘁄",
    "GX": "mə̱h¹",
    "GHC": "mə̣¹",
    "explanationEN": "calf",
    "explanationCN": "犊"
  },
  {
    "character": "𘃐",
    "GX": "tshe¹",
    "GHC": "tshjij¹",
    "explanationEN": "spade",
    "explanationCN": "锹"
  },
  {
    "character": "𘏖",
    "GX": "teṃh²",
    "GHC": "tjɨ̣j²",
    "explanationEN": "choke/block",
    "explanationCN": "噎塞"
  },
  {
    "character": "𘝬",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "burst/split",
    "explanationCN": "1.破裂】、瑕"
  },
  {
    "character": "𘎺",
    "GX": "ndi̱²",
    "GHC": "de̱²",
    "explanationEN": "plough/till",
    "explanationCN": "1.耕、裂"
  },
  {
    "character": "𘛋",
    "GX": "qha̱²",
    "GHC": "kha²",
    "explanationEN": "bitter.lettuce",
    "explanationCN": "苦苣（蕖）"
  },
  {
    "character": "𗕈",
    "GX": "nu̱¹",
    "GHC": "nu¹",
    "explanationEN": "mud/mire/sludge",
    "explanationCN": "污泥"
  },
  {
    "character": "𗭸",
    "GX": "pae̱²",
    "GHC": "piej²",
    "explanationEN": "combine/unite",
    "explanationCN": "1.结合、解剖、证"
  },
  {
    "character": "𘌂",
    "GX": "yu¹",
    "GHC": "ꞏju¹",
    "explanationEN": "meritorious.service",
    "explanationCN": "平"
  },
  {
    "character": "𘋝",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "ladder/stairs/steps",
    "explanationCN": "阶梯"
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
    "explanationEN": "moist/smooth/juice",
    "explanationCN": "润酪名词"
  },
  {
    "character": "𘌢",
    "GX": "zu̱¹",
    "GHC": "zu¹",
    "explanationEN": "belt/band",
    "explanationCN": "带"
  },
  {
    "character": "𗕄",
    "GX": "rir²",
    "GHC": "rjir²",
    "explanationEN": "juice/soup",
    "explanationCN": "1.汁汤、膏"
  },
  {
    "character": "𗕅",
    "GX": "mae̱¹",
    "GHC": "miej¹",
    "explanationEN": "cheese/skin.on.boiled.milk",
    "explanationCN": "奶皮酪"
  },
  {
    "character": "𗕃",
    "GX": "tso̱ṃ¹",
    "GHC": "tsow¹",
    "explanationEN": "soup/broth",
    "explanationCN": "汤"
  },
  {
    "character": "𘕰",
    "GX": "phu̱²",
    "GHC": "phu²",
    "explanationEN": "tree",
    "explanationCN": "1.树木、棵株"
  },
  {
    "character": "𘂆",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "also/too/small/𝟤ᴅᴜ",
    "explanationCN": "也;小;𝟤ᴅᴜ"
  },
  {
    "character": "𗕉",
    "GX": "ṣao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "otter",
    "explanationCN": "獭"
  },
  {
    "character": "𘝚",
    "GX": "rkwər¹",
    "GHC": "kjwɨr¹",
    "explanationEN": "steal/pilfer",
    "explanationCN": "偷盗名词"
  },
  {
    "character": "𘌃",
    "GX": "ri̱r²",
    "GHC": "rer²",
    "explanationEN": "rice",
    "explanationCN": "稻"
  },
  {
    "character": "𘌛",
    "GX": "lwi¹",
    "GHC": "ljwi¹",
    "explanationEN": "seed",
    "explanationCN": "种子籽"
  },
  {
    "character": "𘕑",
    "GX": "γu̱h¹",
    "GHC": "ꞏụ¹",
    "explanationEN": "cover/shelter/rely.on",
    "explanationCN": "蔽依"
  },
  {
    "character": "𘌈",
    "GX": "yu¹",
    "GHC": "ꞏju̱¹",
    "explanationEN": "level/even/smooth",
    "explanationCN": "1.平坦、【余】【餘】【逾】【庾】【瑜】【由】"
  },
  {
    "character": "𘌕",
    "GX": "dźuo²",
    "GHC": "dźio̱w²",
    "explanationEN": "wheat.flour/powder",
    "explanationCN": "粉"
  },
  {
    "character": "𘌗",
    "GX": "rkiwr²",
    "GHC": "kjiwr²",
    "explanationEN": "mould.stuffing.in.shoes.or.hats",
    "explanationCN": "楦头楦子"
  },
  {
    "character": "𘌖",
    "GX": "rźwər¹",
    "GHC": "źjwɨr¹",
    "explanationEN": "husked.sorghum/maize",
    "explanationCN": "秫米"
  },
  {
    "character": "𘋟",
    "GX": "ri̱wr²",
    "GHC": "rewr²",
    "explanationEN": "bank/shore/limit",
    "explanationCN": "1.岸阶限、贿赂、模样"
  },
  {
    "character": "𘌡",
    "GX": "lwi¹",
    "GHC": "ljwi¹",
    "explanationEN": "seed",
    "explanationCN": "种子"
  },
  {
    "character": "𘌑",
    "GX": "so̱²",
    "GHC": "so²",
    "explanationEN": "maize",
    "explanationCN": "粟】"
  },
  {
    "character": "𘌞",
    "GX": "tsə̱h¹",
    "GHC": "tsə̣¹",
    "explanationEN": "autumn",
    "explanationCN": "秋"
  },
  {
    "character": "𘌙",
    "GX": "dwu̱²",
    "GHC": "dwu²",
    "explanationEN": "beans",
    "explanationCN": "豆】"
  },
  {
    "character": "𘛓",
    "GX": "mbe¹",
    "GHC": "bji̱j¹",
    "explanationEN": "disobey/violate",
    "explanationCN": "禁违"
  },
  {
    "character": "𘂅",
    "GX": "yiw¹",
    "GHC": "ꞏjiw¹",
    "explanationEN": "stove/oven/furnace",
    "explanationCN": "炉灶"
  },
  {
    "character": "𘆜",
    "GX": "ntshə¹",
    "GHC": "tshjɨ̱¹",
    "explanationEN": "secondary.rainbow",
    "explanationCN": "霓虹"
  },
  {
    "character": "𘒭",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "burnt",
    "explanationCN": "焦"
  },
  {
    "character": "𗯗",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "change/vary",
    "explanationCN": "变化"
  },
  {
    "character": "𗈭",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "vary",
    "explanationCN": "变化"
  },
  {
    "character": "𗗤",
    "GX": "lwə̱²",
    "GHC": "lwə²",
    "explanationEN": "trade",
    "explanationCN": "买"
  },
  {
    "character": "𗈯",
    "GX": "rγai̱r¹",
    "GHC": "ɣier¹",
    "explanationEN": "die",
    "explanationCN": "死亡"
  },
  {
    "character": "𗈵",
    "GX": "dźəh²",
    "GHC": "dźjɨ̣²",
    "explanationEN": "combine/unite/integrate",
    "explanationCN": "结合"
  },
  {
    "character": "𗗨",
    "GX": "źih²",
    "GHC": "źjị²",
    "explanationEN": "man.and.his.wife’s.brother",
    "explanationCN": "郎舅"
  },
  {
    "character": "𗗪",
    "GX": "ŋki¹",
    "GHC": "kji̱¹",
    "explanationEN": "commerce/trade/business",
    "explanationCN": "贸易买卖"
  },
  {
    "character": "𗯖",
    "GX": "qhwu̱h²",
    "GHC": "khwụ²",
    "explanationEN": "cut/slice",
    "explanationCN": "切割"
  },
  {
    "character": "𗯝",
    "GX": "lhe̱²",
    "GHC": "lhej²",
    "explanationEN": "translate/vary",
    "explanationCN": "1.译变换、易、革、迂、假、反、庚"
  },
  {
    "character": "𘕱",
    "GX": "śu²",
    "GHC": "śju²",
    "explanationEN": "a.place.name",
    "explanationCN": "【树】地名"
  },
  {
    "character": "𘛠",
    "GX": "???",
    "GHC": "",
    "explanationEN": "millet",
    "explanationCN": "黍"
  },
  {
    "character": "𗗣",
    "GX": "lwə̱²",
    "GHC": "lwə²",
    "explanationEN": "trade",
    "explanationCN": "1.买卖、市贾"
  },
  {
    "character": "𗈮",
    "GX": "rγai̱r¹",
    "GHC": "ɣier¹",
    "explanationEN": "die",
    "explanationCN": "死亡"
  },
  {
    "character": "𗗩",
    "GX": "pha¹",
    "GHC": "phja¹",
    "explanationEN": "sell/traffic/peddle",
    "explanationCN": "贩卖"
  },
  {
    "character": "𗯑",
    "GX": "tsho¹",
    "GHC": "tshjo¹",
    "explanationEN": "tie.and.strap.something.tightly",
    "explanationCN": "勒"
  },
  {
    "character": "𘂋",
    "GX": "zi̱²",
    "GHC": "ze²",
    "explanationEN": "a.surname",
    "explanationCN": "【记】【祀】【祠】"
  },
  {
    "character": "𘂣",
    "GX": "lih¹",
    "GHC": "ljị¹",
    "explanationEN": "massage",
    "explanationCN": "按摩"
  },
  {
    "character": "𘕾",
    "GX": "rner²",
    "GHC": "njijr²",
    "explanationEN": "all/various",
    "explanationCN": "诸诸种种种"
  },
  {
    "character": "𘂩",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "shallow/superficial",
    "explanationCN": "浅薄"
  },
  {
    "character": "𘂡",
    "GX": "tswo¹",
    "GHC": "tsjwo¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【将】【奏】"
  },
  {
    "character": "𗯓",
    "GX": "dzo¹",
    "GHC": "dzjo¹",
    "explanationEN": "rein.in/tie.and.strap.something.tightly",
    "explanationCN": "勒紧"
  },
  {
    "character": "𘂚",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "two/twin/both/double",
    "explanationCN": "双两二形容词"
  },
  {
    "character": "𘕿",
    "GX": "γa̱²",
    "GHC": "ɣa²",
    "explanationEN": "ʟᴏᴄ",
    "explanationCN": "ʟᴏᴄ"
  },
  {
    "character": "𘂊",
    "GX": "???",
    "GHC": "",
    "explanationEN": "in.a.low.voice",
    "explanationCN": "小声"
  },
  {
    "character": "𘂍",
    "GX": "γaə̱¹",
    "GHC": "ɣiə¹",
    "explanationEN": "few/scant/rare",
    "explanationCN": "稀少寡薄"
  },
  {
    "character": "𗳑",
    "GX": "bi̱h¹",
    "GHC": "bẹ¹",
    "explanationEN": "hairpin",
    "explanationCN": "錍（簪）"
  },
  {
    "character": "𘂌",
    "GX": "ŋwə̱²",
    "GHC": "ŋwə²",
    "explanationEN": "throat/larynx",
    "explanationCN": "喉"
  },
  {
    "character": "𗳖",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "vulture",
    "explanationCN": "雕鷲"
  },
  {
    "character": "𗶪",
    "GX": "tao̱h¹",
    "GHC": "tiọ¹",
    "explanationEN": "roller",
    "explanationCN": "1.碾动词、压"
  },
  {
    "character": "𘌟",
    "GX": "pae̱²",
    "GHC": "piej²",
    "explanationEN": "combine/unite",
    "explanationCN": "结合"
  },
  {
    "character": "𘌅",
    "GX": "ze¹",
    "GHC": "zjij¹",
    "explanationEN": "extensive/wide/vast",
    "explanationCN": "1.广博阔、惇、楦"
  },
  {
    "character": "𘕕",
    "GX": "so̱ṃh¹",
    "GHC": "sọ¹",
    "explanationEN": "three",
    "explanationCN": "三"
  },
  {
    "character": "𘌉",
    "GX": "qwo̱¹",
    "GHC": "kwo¹",
    "explanationEN": "millet",
    "explanationCN": "糜黍"
  },
  {
    "character": "𘌘",
    "GX": "γo̱ṃ¹",
    "GHC": "ɣow¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【讹合】【菡】草名"
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
    "explanationEN": "supervise",
    "explanationCN": "1.监督、镇压、忍"
  },
  {
    "character": "𘆖",
    "GX": "ntshə¹",
    "GHC": "tshjɨ̱¹",
    "explanationEN": "rank/line",
    "explanationCN": "1.行列、诵、閤门、号、簫"
  },
  {
    "character": "𘒫",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "send/dispatch",
    "explanationCN": "1.遣送、御任、聘"
  },
  {
    "character": "𘙫",
    "GX": "śoh²",
    "GHC": "śjọ²",
    "explanationEN": "obstruct/block/cover",
    "explanationCN": "1.遮蔽依避、倾慕"
  },
  {
    "character": "𘕳",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "brothers",
    "explanationCN": "兄弟"
  },
  {
    "character": "𗯔",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "vexed/flustered",
    "explanationCN": "闷乱心烦心慌"
  },
  {
    "character": "𗗥",
    "GX": "źih²",
    "GHC": "źjị²",
    "explanationEN": "sell.and.buy",
    "explanationCN": "1.市】、商、沽、卖、货、榷场、嫁、店"
  },
  {
    "character": "𘕲",
    "GX": "qu̱h²",
    "GHC": "kụ²",
    "explanationEN": "tie.up/bind/bundle.up",
    "explanationCN": "1.捆绑繫扎、线"
  },
  {
    "character": "𘂓",
    "GX": "daṃ¹",
    "GHC": "djã¹",
    "explanationEN": "shallow/superficial",
    "explanationCN": "1.浅、【难】"
  },
  {
    "character": "𘂏",
    "GX": "bae̱h²",
    "GHC": "biẹj¹",
    "explanationEN": "a.unit.of.measurement",
    "explanationCN": "1.枚厘条枝株、竿弦"
  },
  {
    "character": "𘖀",
    "GX": "si²",
    "GHC": "sji²",
    "explanationEN": "year",
    "explanationCN": "岁】"
  },
  {
    "character": "𗳒",
    "GX": "ŋwu̱²",
    "GHC": "ŋwu²",
    "explanationEN": "ɪɴꜱ",
    "explanationCN": "ɪɴꜱ"
  },
  {
    "character": "𘂎",
    "GX": "la̱¹",
    "GHC": "la¹",
    "explanationEN": "small/little",
    "explanationCN": "小"
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
    "explanationEN": "bully.and.humiliate",
    "explanationCN": "欺凌"
  },
  {
    "character": "𘂒",
    "GX": "ṣai̱²",
    "GHC": "śie²",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "【施】草名"
  },
  {
    "character": "𘂠",
    "GX": "llo̱ṃ¹",
    "GHC": "low¹",
    "explanationEN": "exchange",
    "explanationCN": "1.换交换、【郎】"
  },
  {
    "character": "𘝛",
    "GX": "tṣhuo¹",
    "GHC": "tśhiow¹",
    "explanationEN": "steal/rob",
    "explanationCN": "盗窃偷"
  },
  {
    "character": "𘕚",
    "GX": "nne̱²",
    "GHC": "ne̱j²",
    "explanationEN": "post/bring.somebody",
    "explanationCN": "寄捎带"
  },
  {
    "character": "𘌊",
    "GX": "giw¹",
    "GHC": "gjiw¹",
    "explanationEN": "broad/wide/extensive",
    "explanationCN": "宽广"
  },
  {
    "character": "𘕐",
    "GX": "lə̱²",
    "GHC": "lə²",
    "explanationEN": "steal/rob/pilfer",
    "explanationCN": "盗窃偷"
  },
  {
    "character": "𘕒",
    "GX": "qau̱¹",
    "GHC": "ku¹",
    "explanationEN": "loose/wide",
    "explanationCN": "鬆寛"
  },
  {
    "character": "𘌒",
    "GX": "qo̱ṃ²",
    "GHC": "kow²",
    "explanationEN": "upright/the.right.way.(or.course)",
    "explanationCN": "刚正"
  },
  {
    "character": "𘒯",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "a.kind.of.farm.implements",
    "explanationCN": "耒"
  },
  {
    "character": "𗯜",
    "GX": "lhe̱²",
    "GHC": "lhej²",
    "explanationEN": "translate/vary",
    "explanationCN": "译变"
  },
  {
    "character": "𘕴",
    "GX": "dzeṃ²",
    "GHC": "dzjɨj²",
    "explanationEN": "corner",
    "explanationCN": "1.隅、角、方、矩"
  },
  {
    "character": "𗯘",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "tread/stamp",
    "explanationCN": "践踏"
  },
  {
    "character": "𗈸",
    "GX": "tśhoṃ¹",
    "GHC": "tśhjow¹",
    "explanationEN": "combine/unite",
    "explanationCN": "1.结合缀、【昌】【虫】【重】【长】"
  },
  {
    "character": "𘕵",
    "GX": "ṣai̱w¹",
    "GHC": "śiew¹",
    "explanationEN": "branch/twig",
    "explanationCN": "1.枝条、鞭"
  },
  {
    "character": "𘕶",
    "GX": "mphu¹",
    "GHC": "phiu̱¹",
    "explanationEN": "cover/shelter",
    "explanationCN": "1.掩蔽遮蔽覆盖、被"
  },
  {
    "character": "𘂐",
    "GX": "bae̱h²",
    "GHC": "biẹj¹",
    "explanationEN": "a.unit.of.measurement",
    "explanationCN": "条"
  },
  {
    "character": "𘂉",
    "GX": "di²",
    "GHC": "dji²",
    "explanationEN": "broken/gragmentary",
    "explanationCN": "碎"
  },
  {
    "character": "𘂔",
    "GX": "lo̱²",
    "GHC": "lo²",
    "explanationEN": "hole/concave",
    "explanationCN": "坑洼（凹）形容词"
  },
  {
    "character": "𘂝",
    "GX": "dze̱ṃ¹",
    "GHC": "dzəj¹",
    "explanationEN": "reduce/decrease",
    "explanationCN": "减短衰隋"
  },
  {
    "character": "𘌍",
    "GX": "ŋa̱¹",
    "GHC": "ŋa¹",
    "explanationEN": "yeast.make.wine",
    "explanationCN": "麯"
  },
  {
    "character": "𘝜",
    "GX": "rkur²",
    "GHC": "kjur²",
    "explanationEN": "steal/pilfer/rob",
    "explanationCN": "盗窃"
  },
  {
    "character": "𘌎",
    "GX": "śi²",
    "GHC": "śji²",
    "explanationEN": "corn/grain",
    "explanationCN": "穀物斛豆"
  },
  {
    "character": "𘋢",
    "GX": "dẓaa̱ṃ²",
    "GHC": "ńia¹",
    "explanationEN": "Bodhisattva",
    "explanationCN": "菩萨"
  },
  {
    "character": "𘋤",
    "GX": "dẓaa̱ṃ²",
    "GHC": "dźiã²",
    "explanationEN": "all.living.creatures/blood",
    "explanationCN": "众生、血"
  },
  {
    "character": "𘌠",
    "GX": "pheṃ¹",
    "GHC": "phjɨj¹",
    "explanationEN": "combine/unite",
    "explanationCN": "结合、证【弁】"
  },
  {
    "character": "𘆘",
    "GX": "tshə¹",
    "GHC": "tshjɨ¹",
    "explanationEN": "evening/night",
    "explanationCN": "晚夕"
  },
  {
    "character": "𗗧",
    "GX": "qaa̱¹",
    "GHC": "kia¹",
    "explanationEN": "price",
    "explanationCN": "1.价、【加】（珠 275）【家】（珠 216）【嫁】（珠 344）【贾】（珠 305）【间】（珠 273）【监】（珠 286）、【交】【嘉】【简】【胶】【校】【驾】（音 195）"
  },
  {
    "character": "𗈲",
    "GX": "qhwa̱¹",
    "GHC": "khwa¹",
    "explanationEN": "far/distant/remote",
    "explanationCN": "1.远、久、旷、迂、重、遐、角"
  },
  {
    "character": "𗯛",
    "GX": "kwə¹",
    "GHC": "kjwɨ¹",
    "explanationEN": "cut",
    "explanationCN": "砍折"
  },
  {
    "character": "𗈱",
    "GX": "rar¹",
    "GHC": "rjar¹",
    "explanationEN": "an.auxiliary.word",
    "explanationCN": "而"
  },
  {
    "character": "𘂈",
    "GX": "lo̱ṃh²",
    "GHC": "lọ²",
    "explanationEN": "two/second",
    "explanationCN": "二第二"
  },
  {
    "character": "𘂇",
    "GX": "pae̱ṃh²",
    "GHC": "piə̣j²",
    "explanationEN": "hair",
    "explanationCN": "髮"
  },
  {
    "character": "𘂦",
    "GX": "ha̱ṃ¹",
    "GHC": "xã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【汉】【邯】【韩】"
  },
  {
    "character": "𘌏",
    "GX": "rkhur¹",
    "GHC": "khjur¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【曲】【屈】、麯"
  },
  {
    "character": "𗈶",
    "GX": "sə¹",
    "GHC": "sjɨ¹",
    "explanationEN": "die",
    "explanationCN": "死"
  },
  {
    "character": "𘂛",
    "GX": "tshi̱²",
    "GHC": "tshe²",
    "explanationEN": "lowly/humble/low-down",
    "explanationCN": "1.贱、庶"
  },
  {
    "character": "𘕙",
    "GX": "tsə̱¹",
    "GHC": "tsə¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【子】【兹】……"
  },
  {
    "character": "𘋞",
    "GX": "rza̱r²",
    "GHC": "zar²",
    "explanationEN": "ashamed",
    "explanationCN": "惭愧"
  },
  {
    "character": "𘌄",
    "GX": "γo̱ṃ¹",
    "GHC": "ɣow¹",
    "explanationEN": "buckwheat",
    "explanationCN": "蕎麦"
  },
  {
    "character": "𘕔",
    "GX": "lə̱¹",
    "GHC": "lə¹",
    "explanationEN": "then/after",
    "explanationCN": "后（连）"
  },
  {
    "character": "𘌆",
    "GX": "qa̱²",
    "GHC": "ka²",
    "explanationEN": "pod",
    "explanationCN": "荚夹】"
  },
  {
    "character": "𘕘",
    "GX": "tsə̱¹",
    "GHC": "tsə¹",
    "explanationEN": "资紫子茨芝孜梓",
    "explanationCN": "资紫子茨芝孜梓"
  },
  {
    "character": "𘌋",
    "GX": "lhih¹",
    "GHC": "lhjị¹",
    "explanationEN": "wheat",
    "explanationCN": "麦子"
  },
  {
    "character": "𘌓",
    "GX": "qho̱ṃ²",
    "GHC": "khow²",
    "explanationEN": "chaff/bran/husk",
    "explanationCN": "糠】"
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
    "explanationEN": "wide.or.narrow",
    "explanationCN": "宽窄"
  },
  {
    "character": "𘕗",
    "GX": "qau̱²",
    "GHC": "ku²",
    "explanationEN": "woolen.blanket/knitting.wool",
    "explanationCN": "毯"
  },
  {
    "character": "𘕓",
    "GX": "nno̱²",
    "GHC": "no̱²",
    "explanationEN": "send/bring.somebody",
    "explanationCN": "寄捎带"
  },
  {
    "character": "𘋠",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "kind/sort/type",
    "explanationCN": "1.种、作為，可以重迭，意為“种种”、诸、众、杂"
  },
  {
    "character": "𗲾",
    "GX": "swi̱ṃ¹",
    "GHC": "swẽ¹",
    "explanationEN": "macaque",
    "explanationCN": "1.猻】、猴、猿"
  },
  {
    "character": "𘆙",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "dark/gloomy",
    "explanationCN": "晦"
  },
  {
    "character": "𘂄",
    "GX": "yuo²",
    "GHC": "ꞏjo̱w²",
    "explanationEN": "stove/oven",
    "explanationCN": "炉灶"
  },
  {
    "character": "𘒴",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "supervise",
    "explanationCN": "监"
  },
  {
    "character": "𘆗",
    "GX": "dẓaə̱²",
    "GHC": "śiə²",
    "explanationEN": "rotate/alternate/make.a.samsara",
    "explanationCN": "轮迴"
  },
  {
    "character": "𘆚",
    "GX": "ge²",
    "GHC": "gjij²",
    "explanationEN": "scriptures/warp",
    "explanationCN": "经"
  },
  {
    "character": "𘒳",
    "GX": "tao̱h¹",
    "GHC": "tiọ¹",
    "explanationEN": "sew/stitch",
    "explanationCN": "纫"
  },
  {
    "character": "𘒵",
    "GX": "tao̱h²",
    "GHC": "tiọ²",
    "explanationEN": "press/oppress",
    "explanationCN": "压"
  },
  {
    "character": "𘌤",
    "GX": "dəh¹",
    "GHC": "djɨ̣¹",
    "explanationEN": "strip/slip",
    "explanationCN": "条"
  },
  {
    "character": "𘌣",
    "GX": "zu̱¹",
    "GHC": "zu¹",
    "explanationEN": "run.quickly/rush",
    "explanationCN": "奔"
  },
  {
    "character": "𘌦",
    "GX": "rzu̱r¹",
    "GHC": "zur¹",
    "explanationEN": "long-winded",
    "explanationCN": "长语"
  },
  {
    "character": "𗟚",
    "GX": "nllo̱r¹",
    "GHC": "ljo̱r¹",
    "explanationEN": "flame",
    "explanationCN": "焰炎"
  },
  {
    "character": "𗰑",
    "GX": "rtər¹",
    "GHC": "tjɨr¹",
    "explanationEN": "heavy",
    "explanationCN": "沉重"
  },
  {
    "character": "𗯕",
    "GX": "le̱²",
    "GHC": "lej²",
    "explanationEN": "cut.off/sever",
    "explanationCN": "割"
  },
  {
    "character": "𘝡",
    "GX": "nlo̱r¹",
    "GHC": "ljo̱r¹",
    "explanationEN": "flame",
    "explanationCN": "焰"
  },
  {
    "character": "𗈫",
    "GX": "lweh²",
    "GHC": "ljwịj²",
    "explanationEN": "great-great-grandson",
    "explanationCN": "玄孙"
  },
  {
    "character": "𗗬",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "among/between",
    "explanationCN": "间副词"
  },
  {
    "character": "𗗦",
    "GX": "phə̱¹",
    "GHC": "phə¹",
    "explanationEN": "price/value",
    "explanationCN": "价格价价值"
  },
  {
    "character": "𗈬",
    "GX": "a?",
    "GHC": "ꞏja",
    "explanationEN": "boots.wearing.in.mud",
    "explanationCN": "泥靴"
  },
  {
    "character": "𗈺",
    "GX": "nnaa̱²",
    "GHC": "nia̱²",
    "explanationEN": "ore/mine",
    "explanationCN": "矿"
  },
  {
    "character": "𗗮",
    "GX": "lwu¹",
    "GHC": "ljwu¹",
    "explanationEN": "traffic/peddle",
    "explanationCN": "贩掮"
  },
  {
    "character": "𘕷",
    "GX": "rpoṃr²",
    "GHC": "pjowr²",
    "explanationEN": "luxuriant/exuberant",
    "explanationCN": "茂盛"
  },
  {
    "character": "𗈩",
    "GX": "γo̱¹",
    "GHC": "ꞏo¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【呕】"
  },
  {
    "character": "𗈷",
    "GX": "rŋi̱wr²",
    "GHC": "ŋewr²",
    "explanationEN": "exercise.evil.influence/ghost",
    "explanationCN": "作崇骷髏鬼怪"
  },
  {
    "character": "𗗫",
    "GX": "rtsi̱r¹",
    "GHC": "tser¹",
    "explanationEN": "buy.and.sell.traffic",
    "explanationCN": "买卖"
  },
  {
    "character": "𗈳",
    "GX": "γo̱²",
    "GHC": "ꞏo²",
    "explanationEN": "a.transliteration",
    "explanationCN": "1.【呕】、【嗃】"
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
    "explanationEN": "ghost/spirit",
    "explanationCN": "魔鬼"
  },
  {
    "character": "𘂨",
    "GX": "mbe̱¹",
    "GHC": "be̱j¹",
    "explanationEN": "a.surname",
    "explanationCN": "【】【闽】"
  },
  {
    "character": "𗯐",
    "GX": "rγo̱r²",
    "GHC": "",
    "explanationEN": "contend/vie/strive",
    "explanationCN": "争(讹字)"
  },
  {
    "character": "𘂙",
    "GX": "pa̱h¹",
    "GHC": "pạ¹",
    "explanationEN": "even/well-distributed",
    "explanationCN": "均匀匀称"
  },
  {
    "character": "𗯒",
    "GX": "tsha̱²",
    "GHC": "tsha²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【操】【粲】【朝】【参】"
  },
  {
    "character": "𘂘",
    "GX": "śoṃ¹",
    "GHC": "śjow¹",
    "explanationEN": "jump/leap",
    "explanationCN": "跳跃"
  },
  {
    "character": "𘂕",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "swallow",
    "explanationCN": "燕子"
  },
  {
    "character": "𗳕",
    "GX": "pe¹",
    "GHC": "pjij¹",
    "explanationEN": "crooked/askew",
    "explanationCN": "歪斜"
  },
  {
    "character": "𘂥",
    "GX": "ṣao̱ṃ²",
    "GHC": "śjow²",
    "explanationEN": "grey/ashy.color",
    "explanationCN": "灰色"
  },
  {
    "character": "𘖁",
    "GX": "tsha̱¹",
    "GHC": "tsha¹",
    "explanationEN": "hollow.bag",
    "explanationCN": "虚囊"
  },
  {
    "character": "𘌜",
    "GX": "pai̱¹",
    "GHC": "pie¹",
    "explanationEN": "wide/broad",
    "explanationCN": "1.阔、蓽毕、韭、【伯】【柏】"
  },
  {
    "character": "𘋡",
    "GX": "phi¹",
    "GHC": "phji¹",
    "explanationEN": "chopsticks",
    "explanationCN": "1.箸、办做得"
  },
  {
    "character": "𘋣",
    "GX": "mə̱²",
    "GHC": "mə²",
    "explanationEN": "a.kind.of.vegetable",
    "explanationCN": "【茉】菜名"
  },
  {
    "character": "𘌌",
    "GX": "śeṃ²",
    "GHC": "śjɨj²",
    "explanationEN": "house/shed/storehouse",
    "explanationCN": "捨仓】"
  },
  {
    "character": "𘕖",
    "GX": "veh²",
    "GHC": "wjịj²",
    "explanationEN": "send/dispatch",
    "explanationCN": "1.遣、放"
  },
  {
    "character": "𘆛",
    "GX": "nah¹",
    "GHC": "njạ¹",
    "explanationEN": "parallel/weft",
    "explanationCN": "纬线"
  },
  {
    "character": "𘒬",
    "GX": "???",
    "GHC": "",
    "explanationEN": "bear/endure",
    "explanationCN": "忍耐"
  },
  {
    "character": "𘒰",
    "GX": "nzi̱w²",
    "GHC": "ze̱w²",
    "explanationEN": "cape/cloak",
    "explanationCN": "1.氅、敞"
  },
  {
    "character": "𘒲",
    "GX": "rtə̱r¹",
    "GHC": "tər¹",
    "explanationEN": "tread/stamp/press",
    "explanationCN": "践踏压迫"
  },
  {
    "character": "𘌥",
    "GX": "be̱¹",
    "GHC": "bej¹",
    "explanationEN": "tie.up/arrest",
    "explanationCN": "缚繫拘"
  },
  {
    "character": "𗯚",
    "GX": "ŋġu̱²",
    "GHC": "gu̱²",
    "explanationEN": "do.forced.labor",
    "explanationCN": "役劳役"
  },
  {
    "character": "𗈪",
    "GX": "a?",
    "GHC": "ꞏja",
    "explanationEN": "one;ᴘꜰᴠ:ᴜᴘ/ɪɴᴛʀɢ",
    "explanationCN": "一；ᴘꜰᴠ:ᴜᴘ/ɪɴᴛʀɢ"
  },
  {
    "character": "𗈰",
    "GX": "rnar²",
    "GHC": "njar²",
    "explanationEN": "lose/drop",
    "explanationCN": "1.堕落、夺"
  },
  {
    "character": "𘝢",
    "GX": "tśhəh¹",
    "GHC": "tśhjɨ̣¹",
    "explanationEN": "burn",
    "explanationCN": "焚烧"
  },
  {
    "character": "𗗭",
    "GX": "tśuo²",
    "GHC": "tśjo̱w²",
    "explanationEN": "attend/wait.upon",
    "explanationCN": "奉随"
  },
  {
    "character": "𗈹",
    "GX": "nsi¹",
    "GHC": "sji̱¹",
    "explanationEN": "inspect/spy",
    "explanationCN": "1.检查、间谍奸细"
  },
  {
    "character": "𘂖",
    "GX": "tsə¹",
    "GHC": "tsjɨ¹",
    "explanationEN": "leprosy/scabies",
    "explanationCN": "癩疥"
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
    "explanationCN": "叉釵"
  },
  {
    "character": "𘂟",
    "GX": "di̱w¹",
    "GHC": "dew¹",
    "explanationEN": "carve/engrave/dig",
    "explanationCN": "1.雕刻凿掘、碎"
  },
  {
    "character": "𘌇",
    "GX": "nao̱h²",
    "GHC": "ku²",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘟱",
    "GX": "nao̱h²",
    "GHC": "",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘒱",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "mortar",
    "explanationCN": "踏堆"
  },
  {
    "character": "𗈴",
    "GX": "ror²",
    "GHC": "rjor²",
    "explanationEN": "presently/in.a.moment",
    "explanationCN": "俄顷一会儿"
  },
  {
    "character": "𘂤",
    "GX": "qha̱¹",
    "GHC": "kha¹",
    "explanationEN": "ɪɴᴛᴇꜱꜱ",
    "explanationCN": "ɪɴᴛᴇꜱꜱ"
  },
  {
    "character": "𗳓",
    "GX": "rśar¹",
    "GHC": "śjar¹",
    "explanationEN": "awn",
    "explanationCN": "芒"
  },
  {
    "character": "𗄌",
    "GX": "tśwə¹",
    "GHC": "tśjwɨ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "珠"
  },
  {
    "character": "𗄘",
    "GX": "tśwe̱ṃ¹",
    "GHC": "tśiwəj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "征"
  },
  {
    "character": "𗄏",
    "GX": "tśweṃ¹",
    "GHC": "tśjwɨj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "旨"
  },
  {
    "character": "𗄙",
    "GX": "tśwaw¹",
    "GHC": "tśjwa¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "濁"
  },
  {
    "character": "𗴯",
    "GX": "gwaṃ¹",
    "GHC": "gjwã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "刮"
  },
  {
    "character": "𗄂",
    "GX": "tśwe¹",
    "GHC": "tśjwij¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【长】"
  },
  {
    "character": "𗄍",
    "GX": "tśwow¹",
    "GHC": "tśjwo¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【章】"
  },
  {
    "character": "𗄃",
    "GX": "tśwoṃ¹",
    "GHC": "tśjwow¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【招】"
  },
  {
    "character": "𗄆",
    "GX": "rtśar¹",
    "GHC": "tśjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【筑】"
  },
  {
    "character": "𗄅",
    "GX": "tśwo²",
    "GHC": "tśjwo²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【筑】"
  },
  {
    "character": "𗄗",
    "GX": "tśe¹",
    "GHC": "tśjij¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【主】"
  },
  {
    "character": "𗄚",
    "GX": "tṣwaə̱¹",
    "GHC": "tśiwə¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【带】"
  },
  {
    "character": "𘅱",
    "GX": "twaw¹",
    "GHC": "tjwa¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【决】"
  },
  {
    "character": "𗖹",
    "GX": "ŋka¹",
    "GHC": "kja̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【彼】"
  },
  {
    "character": "𗉆",
    "GX": "mpai̱¹",
    "GHC": "pie̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "鞠躬敬礼"
  },
  {
    "character": "𘅛",
    "GX": "kuh¹",
    "GHC": "kjụ¹",
    "explanationEN": "bow/salute",
    "explanationCN": "礼拜"
  },
  {
    "character": "𗳙",
    "GX": "qa̱¹",
    "GHC": "ka¹",
    "explanationEN": "collapse",
    "explanationCN": "圮"
  },
  {
    "character": "𗶑",
    "GX": "tṣwao̱²",
    "GHC": "tśiwo²",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗘇",
    "GX": "tśu²",
    "GHC": "tśju²",
    "explanationEN": "a.surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𗹆",
    "GX": "ŋki¹",
    "GHC": "kji̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅼",
    "GX": "twuo¹",
    "GHC": "tiwo̱w¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅔",
    "GX": "tświ¹",
    "GHC": "tśjwi¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘅠",
    "GX": "ntwu̱¹",
    "GHC": "twu̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗇶",
    "GX": "ntśe¹",
    "GHC": "tśji̱j¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘄶",
    "GX": "bweh¹",
    "GHC": "bjwịj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗰕",
    "GX": "???",
    "GHC": "",
    "explanationEN": "many",
    "explanationCN": "多"
  },
  {
    "character": "𗶖",
    "GX": "tśah¹",
    "GHC": "tśjạ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【得】"
  },
  {
    "character": "𘅶",
    "GX": "rti̱wr¹",
    "GHC": "tewr¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【諦】"
  },
  {
    "character": "𗗋",
    "GX": "nte̱¹",
    "GHC": "te̱j¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【滓】"
  },
  {
    "character": "𗌂",
    "GX": "tświ̱¹",
    "GHC": "tśwe¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【煎】"
  },
  {
    "character": "𗌑",
    "GX": "tśwaṃ¹",
    "GHC": "tśjwã¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【津】"
  },
  {
    "character": "𗋶",
    "GX": "tsweṃ¹",
    "GHC": "tsjwɨj¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【边】"
  },
  {
    "character": "𗪶",
    "GX": "rpi̱r²",
    "GHC": "pe̱r²",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𘜢",
    "GX": "rkwar¹",
    "GHC": "kjwar¹",
    "explanationEN": "immediately/at.once/promptly",
    "explanationCN": "驰急速形容词"
  },
  {
    "character": "𘜥",
    "GX": "rkwar¹",
    "GHC": "kjwar¹",
    "explanationEN": "spread/very.fast/rapid",
    "explanationCN": "跑驰（同甲 48A35）"
  },
  {
    "character": "𘚼",
    "GX": "lwəh¹",
    "GHC": "ljwɨ̣¹",
    "explanationEN": "run/speed",
    "explanationCN": "奔"
  },
  {
    "character": "𗊤",
    "GX": "tśa¹",
    "GHC": "tśja¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗾼",
    "GX": "bo̱ṃh²",
    "GHC": "bọ²",
    "explanationEN": "run.away/flee",
    "explanationCN": "逃跑;逃跑"
  },
  {
    "character": "𗻥",
    "GX": "si̱¹",
    "GHC": "",
    "explanationEN": "mustard",
    "explanationCN": "芥菜"
  },
  {
    "character": "𘜣",
    "GX": "rdzər¹",
    "GHC": "dzjɨr¹",
    "explanationEN": "rapid.speed",
    "explanationCN": "疾"
  },
  {
    "character": "𗾁",
    "GX": "ŋqe̱²",
    "GHC": "ke̱j²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【戈】"
  },
  {
    "character": "𗊳",
    "GX": "tśweṃh¹",
    "GHC": "tsjwɨ̣j¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "音译"
  },
  {
    "character": "𗼧",
    "GX": "qai̱w¹",
    "GHC": "kiew¹",
    "explanationEN": "instruct",
    "explanationCN": "誥詔"
  },
  {
    "character": "𗌫",
    "GX": "tṣau̱²",
    "GHC": "tśwu²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【照】"
  },
  {
    "character": "𗌐",
    "GX": "tswa¹",
    "GHC": "tsjwa¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【滋】"
  },
  {
    "character": "𗻹",
    "GX": "mbu̱¹",
    "GHC": "bu̱¹",
    "explanationEN": "a.kind.of.grass",
    "explanationCN": "一种草"
  },
  {
    "character": "𗫰",
    "GX": "rpaa̱r¹",
    "GHC": "piar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【芭】"
  },
  {
    "character": "𘜠",
    "GX": "rśa̱r²",
    "GHC": "śar²",
    "explanationEN": "descend/land",
    "explanationCN": "降落"
  },
  {
    "character": "𗌟",
    "GX": "tśa¹",
    "GHC": "tśjiw¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【职】"
  },
  {
    "character": "𗨑",
    "GX": "ntṣaa̱²",
    "GHC": "tśia̱²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【淄】"
  },
  {
    "character": "𗨽",
    "GX": "rpar¹",
    "GHC": "pjar¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【报】"
  },
  {
    "character": "𗻃",
    "GX": "ŋkwa¹",
    "GHC": "kjwa̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【卷】"
  },
  {
    "character": "𗎕",
    "GX": "ŋkau̱¹",
    "GHC": "kju̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【菊】"
  },
  {
    "character": "𗟕",
    "GX": "tśah¹",
    "GHC": "tśjạ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【装】"
  },
  {
    "character": "𗝴",
    "GX": "rtu̱r¹",
    "GHC": "tur¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【覩】"
  },
  {
    "character": "𗞗",
    "GX": "ṣai̱w¹",
    "GHC": "śiew¹",
    "explanationEN": "a.surname",
    "explanationCN": "【世】勺"
  },
  {
    "character": "𘞕",
    "GX": "vwa̱ṃ²",
    "GHC": "wã²",
    "explanationEN": "a.surname",
    "explanationCN": "【旺】【汪】抚摸"
  },
  {
    "character": "𗷗",
    "GX": "two̱¹",
    "GHC": "two¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【垛】"
  },
  {
    "character": "𗷓",
    "GX": "twe̱¹",
    "GHC": "twej¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【滴】"
  },
  {
    "character": "𗷊",
    "GX": "ta̱¹",
    "GHC": "ta¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【篤】"
  },
  {
    "character": "𗒏",
    "GX": "ġao̱¹",
    "GHC": "gio¹",
    "explanationEN": "a.surname",
    "explanationCN": "1.【鄂】、乐"
  },
  {
    "character": "𘍜",
    "GX": "mpə̱¹",
    "GHC": "pə̱¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【蹦】"
  },
  {
    "character": "𘗑",
    "GX": "vw?¹",
    "GHC": "w-¹",
    "explanationEN": "call/shout/yell",
    "explanationCN": "呼唤叫喊"
  },
  {
    "character": "𘍕",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【罪】"
  },
  {
    "character": "𘃘",
    "GX": "ke¹",
    "GHC": "kjij¹",
    "explanationEN": "pull.out/move.or.adjust/pinch",
    "explanationCN": "拔拨捏"
  },
  {
    "character": "𘍅",
    "GX": "rgwar¹",
    "GHC": "gjwar¹",
    "explanationEN": "gallop/speed",
    "explanationCN": "驰"
  },
  {
    "character": "𘁌",
    "GX": "lwəh¹",
    "GHC": "ljwɨ̣¹",
    "explanationEN": "calf",
    "explanationCN": "犊"
  },
  {
    "character": "𘍱",
    "GX": "tṣhaa̱¹",
    "GHC": "tśhia¹",
    "explanationEN": "诧",
    "explanationCN": "诧"
  },
  {
    "character": "𘐜",
    "GX": "rpi̱r²",
    "GHC": "pe̱r²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【别】"
  },
  {
    "character": "𘝴",
    "GX": "gaw¹",
    "GHC": "gja̱¹",
    "explanationEN": "one’s.name",
    "explanationCN": "人名；爹"
  },
  {
    "character": "𘐮",
    "GX": "rġa̱r¹",
    "GHC": "gar¹",
    "explanationEN": "a.surname",
    "explanationCN": "姓氏"
  },
  {
    "character": "𘍛",
    "GX": "tśuh¹",
    "GHC": "tśjụ¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【诈】"
  },
  {
    "character": "𘕍",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "speak.bluntly",
    "explanationCN": "说真话"
  },
  {
    "character": "𘛑",
    "GX": "tśhiw¹",
    "GHC": "tśhjiw¹",
    "explanationEN": "honest/upright/fairminded",
    "explanationCN": "正直"
  },
  {
    "character": "𘑎",
    "GX": "te¹",
    "GHC": "tjij¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【丁】"
  },
  {
    "character": "𗯣",
    "GX": "ŋġu̱²",
    "GHC": "gu̱²",
    "explanationEN": "do.forced.labor",
    "explanationCN": "【役】"
  },
  {
    "character": "𘑋",
    "GX": "rti̱wr¹",
    "GHC": "tewr¹",
    "explanationEN": "a.transliteration",
    "explanationCN": "【的】"
  },
  {
    "character": "𘌝",
    "GX": "pu²",
    "GHC": "pju²",
    "explanationEN": "a.transliteration",
    "explanationCN": "【泊】"
  },
  {
    "character": "𗯙",
    "GX": "gwə¹",
    "GHC": "gjwɨ¹",
    "explanationEN": "cut",
    "explanationCN": "割 伐"
  },
  {
    "character": "𘂧",
    "GX": "qha̱¹",
    "GHC": "kha¹",
    "explanationEN": "INTESS",
    "explanationCN": "INTESS"
  },
  {
    "character": "𘟭",
    "GX": "??",
    "GHC": "",
    "explanationEN": "雅",
    "explanationCN": "雅"
  },
  {
    "character": "𘟮",
    "GX": "??",
    "GHC": "",
    "explanationEN": "社",
    "explanationCN": "社"
  },
  {
    "character": "𘟯",
    "GX": "??",
    "GHC": "",
    "explanationEN": "稷",
    "explanationCN": "稷"
  }
];

// 初始化词典对象
const wordDictionary = WORD_DATA.reduce((acc, entry) => {
    acc[entry.word] = entry;
    return acc;
}, {});

// 初始化字典对象
const dictionary = CHARACTER_DATA.reduce((acc, entry) => {
    acc[entry.character] = entry;
    return acc;
}, {});
