
import { ReadingPassage } from '@/data/readings';

export const japaneseReadings: ReadingPassage[] = [
  {
    id: "jp-passage1",
    title: "東京での一日",
    text: "今日は東京で晴れた日でした。佐藤さんは忙しい街を歩いていました。彼女はコーヒーを飲むためにカフェに入ることにしました。ウェイターは彼女に微笑んで、何が欲しいか尋ねました。佐藤さんはカフェラテとクロワッサンを注文しました。待っている間、彼女は窓の外を通り過ぎる人々を観察していました。写真を撮る観光客、急いでいるビジネスマン、遊んでいる子どもたちがいました。朝食を終えた後、彼女は会計を済ませ、散歩を続けました。彼女は美術館を訪れ、有名な芸術作品を鑑賞しました。その後、小さな店で家族へのお土産を買いました。正午には、彼女は休憩して本を読むために公園に座りました。素晴らしい一日でした、そして佐藤さんは街を探索できて幸せでした。",
    question: "佐藤さんはコーヒーを飲んだ後、どこへ行きましたか？",
    options: [
      "仕事へ行った",
      "美術館を訪れた",
      "家に帰った",
      "家族に電話をした"
    ],
    correctAnswer: 1,
    translations: {
      "今日": "today",
      "東京": "Tokyo",
      "晴れた": "sunny",
      "日": "day",
      "でした": "was",
      "佐藤": "Sato (name)",
      "さん": "Mr./Ms.",
      "忙しい": "busy",
      "街": "city",
      "歩いて": "walking",
      "いました": "was (doing)",
      "彼女": "she",
      "コーヒー": "coffee",
      "飲む": "to drink",
      "ため": "for the purpose of",
      "カフェ": "cafe",
      "入る": "to enter",
      "こと": "thing/matter",
      "しました": "did",
      "ウェイター": "waiter",
      "微笑んで": "smiled",
      "何": "what",
      "欲しい": "want",
      "尋ねました": "asked",
      "カフェラテ": "cafe latte",
      "クロワッサン": "croissant",
      "注文しました": "ordered",
      "待って": "waiting",
      "いる間": "while",
      "窓": "window",
      "外": "outside",
      "通り過ぎる": "passing by",
      "人々": "people",
      "観察して": "observed",
      "写真": "photos",
      "撮る": "taking",
      "観光客": "tourists",
      "急いで": "hurrying",
      "ビジネスマン": "businessmen",
      "遊んで": "playing",
      "子どもたち": "children",
      "朝食": "breakfast",
      "終えた": "finished",
      "後": "after",
      "会計": "bill",
      "済ませ": "paid",
      "散歩": "walk",
      "続けました": "continued",
      "美術館": "museum",
      "訪れ": "visited",
      "有名な": "famous",
      "芸術": "art",
      "作品": "works",
      "鑑賞しました": "admired",
      "その後": "then",
      "小さな": "small",
      "店": "shop",
      "家族": "family",
      "お土産": "souvenirs",
      "買いました": "bought",
      "正午": "noon",
      "休憩して": "rested",
      "本": "book",
      "読む": "to read",
      "公園": "park",
      "座りました": "sat down",
      "素晴らしい": "wonderful",
      "そして": "and",
      "探索": "explore",
      "できて": "to be able to",
      "幸せ": "happy"
    },
    sentenceTranslations: {
      0: "今天在东京是晴天。",
      1: "佐藤小姐在繁忙的城市里行走。",
      2: "她决定进入一家咖啡馆喝咖啡。",
      3: "服务员微笑着问她想要什么。",
      4: "佐藤小姐点了拿铁和牛角面包。",
      5: "等待的时候，她观察着窗外路过的人们。",
      6: "有拍照的游客，匆忙的商人和玩耍的孩子们。",
      7: "早餐后，她付了账，继续散步。",
      8: "她参观了博物馆，欣赏著名的艺术作品。",
      9: "然后，她在一家小商店为家人买了纪念品。",
      10: "中午，她坐在公园里休息，读书。",
      11: "这是美好的一天，佐藤小姐很高兴能够探索这座城市。"
    },
    sentenceRomaji: {
      0: "Kyou wa Tokyo de hareta hi deshita.",
      1: "Satou-san wa isogashii machi wo aruite imashita.",
      2: "Kanojo wa koohii wo nomu tame ni kafe ni hairu koto ni shimashita.",
      3: "Weitaa wa kanojo ni hohoende, nani ga hoshii ka tazunemashita.",
      4: "Satou-san wa kafeerate to kurowassan wo chuumon shimashita.",
      5: "Matte iru aida, kanojo wa mado no soto wo toori sugiru hitobito wo kansatsu shite imashita.",
      6: "Shashin wo toru kankoukyaku, isoide iru bijinesuman, asonde iru kodomotachi ga imashita.",
      7: "Choushoku wo oeta ato, kanojo wa kaikei wo sumase, sanpo wo tsuzukemashita.",
      8: "Kanojo wa bijutsukan wo otozure, yuumei na geijutsu sakuhin wo kanshou shimashita.",
      9: "Sono ato, chiisana mise de kazoku e no omiyage wo kaimashita.",
      10: "Shougo ni wa, kanojo wa kyuukei shite hon wo yomu tame ni kouen ni suwari mashita.",
      11: "Subarashii ichinichi deshita, soshite Satou-san wa machi wo tanken dekite shiawase deshita."
    }
  },
  {
    id: "jp-passage2",
    title: "おばあちゃんのレシピ",
    text: "毎週日曜日、私のおばあちゃんは特別なチョコレートケーキを作っていました。まず、大きなボウルに小麦粉、砂糖、ココアを混ぜました。次に、新鮮な卵と少しの牛乳を加えました。滑らかな混合物になるまで全てを混ぜました。彼女のレシピの秘密は、少しのシナモンとバニラを数滴加えることでした。混合物を型に注ぎ、45分間オーブンに入れました。私たちが待っている間、彼女は若い頃の話をしてくれました。甘い香りが家中に広がり、私たちの口を水にさせました。ケーキが完成すると、チョコレートのアイシングをかける前に冷ましました。彼女はいつも新鮮なフルーツでケーキを飾り付けました。おばあちゃんとその時間を共有することは、私の週のお気に入りの部分でした。",
    question: "おばあちゃんのレシピの秘密は何でしたか？",
    options: [
      "輸入チョコレートを使用すること",
      "ケーキを2時間焼くこと",
      "シナモンとバニラを加えること",
      "有名なシェフのレシピを使用すること"
    ],
    correctAnswer: 2,
    translations: {
      "毎週": "every week",
      "日曜日": "Sunday",
      "私": "I/me",
      "おばあちゃん": "grandmother",
      "特別な": "special",
      "チョコレート": "chocolate",
      "ケーキ": "cake",
      "作って": "made",
      "いました": "was (doing)",
      "まず": "first",
      "大きな": "big",
      "ボウル": "bowl",
      "小麦粉": "flour",
      "砂糖": "sugar",
      "ココア": "cocoa",
      "混ぜました": "mixed",
      "次に": "next",
      "新鮮な": "fresh",
      "卵": "eggs",
      "少し": "little",
      "牛乳": "milk",
      "加えました": "added",
      "滑らかな": "smooth",
      "混合物": "mixture",
      "になるまで": "until becoming",
      "全て": "everything",
      "混ぜ": "beat",
      "彼女": "she",
      "レシピ": "recipe",
      "秘密": "secret",
      "シナモン": "cinnamon",
      "バニラ": "vanilla",
      "数滴": "drops",
      "加えること": "to add",
      "でした": "was",
      "型": "mold",
      "注ぎ": "poured",
      "分間": "minutes",
      "オーブン": "oven",
      "入れました": "put",
      "私たち": "we",
      "待って": "waiting",
      "いる間": "while",
      "若い頃": "youth",
      "話": "stories",
      "してくれました": "told us",
      "甘い": "sweet",
      "香り": "aroma",
      "家中": "whole house",
      "広がり": "spread",
      "口": "mouth",
      "水": "water",
      "させました": "made",
      "完成": "completed",
      "アイシング": "icing",
      "かける": "to cover",
      "前に": "before",
      "冷ましました": "cooled",
      "いつも": "always",
      "フルーツ": "fruits",
      "飾り付けました": "decorated",
      "時間": "time",
      "共有": "sharing",
      "こと": "thing/matter",
      "週": "week",
      "お気に入り": "favorite",
      "部分": "part"
    },
    sentenceTranslations: {
      0: "每个星期日，我的祖母都会做特别的巧克力蛋糕。",
      1: "首先，她在大碗中混合面粉、糖和可可粉。",
      2: "接着，她加入新鲜的鸡蛋和少许牛奶。",
      3: "她搅拌所有材料直到成为顺滑的混合物。",
      4: "她的食谱秘诀是加入少量的肉桂和几滴香草精。",
      5: "她将混合物倒入模具中，然后放入烤箱45分钟。",
      6: "在我们等待的时候，她会讲述她年轻时的故事。",
      7: "甜美的香气弥漫整个房子，让我们垂涎欲滴。",
      8: "当蛋糕完成后，她会先让它冷却再涂上巧克力糖霜。",
      9: "她总是用新鲜水果装饰蛋糕。",
      10: "与祖母共度这段时光是我一周中最喜欢的部分。"
    },
    sentenceRomaji: {
      0: "Maishuu nichiyoubi, watashi no obaachan wa tokubetsu na chokoreeto keeki wo tsukutte imashita.",
      1: "Mazu, ookina bouru ni komugiko, satou, kokoa wo mazemashita.",
      2: "Tsugi ni, shinsen na tamago to sukoshi no gyuunyuu wo kuwaemashita.",
      3: "Nameraka na kongoubutsu ni naru made subete wo mazemashita.",
      4: "Kanojo no reshipi no himitsu wa, sukoshi no shinamon to banira wo suuteki kuwaeru koto deshita.",
      5: "Kongoubutsu wo kata ni sosogi, 45 funkan oobun ni iremashita.",
      6: "Watashitachi ga matte iru aida, kanojo wa wakai koro no hanashi wo shite kuremashita.",
      7: "Amai kaori ga iejuu ni hirogari, watashitachi no kuchi wo mizu ni sasemashita.",
      8: "Keeki ga kansei suru to, chokoreeto no aishingu wo kakeru mae ni samashimashita.",
      9: "Kanojo wa itsumo shinsen na furuutsu de keeki wo kazaritsukemashita.",
      10: "Obaachan to sono jikan wo kyouyuu suru koto wa, watashi no shuu no okiniiri no bubun deshita."
    }
  },
  {
    id: "jp-passage3",
    title: "四季の日本",
    text: "日本には四つの美しい季節があります。春には、桜の花が咲き、人々は花見を楽しみます。公園や川沿いがピンク色に染まります。夏になると、多くの祭りが開催されます。花火大会や盆踊りが人気です。秋は紅葉の季節です。山々が赤や黄色に変わります。特に京都の寺院は美しい景色で有名です。冬には、北部で雪が降ります。多くの人がスキーやスノーボードを楽しみます。東京では、クリスマスのイルミネーションが街を飾ります。日本の四季は、それぞれ異なる魅力を持っています。",
    question: "日本の秋に何が起こりますか？",
    options: [
      "桜が咲く",
      "祭りが開催される",
      "葉が赤や黄色に変わる",
      "雪が降る"
    ],
    correctAnswer: 2,
    translations: {
      "日本": "Japan",
      "には": "has/in",
      "四つ": "four",
      "美しい": "beautiful",
      "季節": "seasons",
      "あります": "there are",
      "春": "spring",
      "桜": "cherry blossoms",
      "花": "flowers",
      "咲き": "bloom",
      "人々": "people",
      "花見": "cherry blossom viewing",
      "楽しみます": "enjoy",
      "公園": "parks",
      "川沿い": "riverbanks",
      "ピンク色": "pink color",
      "染まります": "are dyed",
      "夏": "summer",
      "なると": "when it becomes",
      "多く": "many",
      "祭り": "festivals",
      "開催されます": "are held",
      "花火大会": "fireworks display",
      "盆踊り": "Bon dance",
      "人気": "popular",
      "です": "is",
      "秋": "autumn",
      "紅葉": "autumn leaves",
      "山々": "mountains",
      "赤": "red",
      "黄色": "yellow",
      "変わります": "change",
      "特に": "especially",
      "京都": "Kyoto",
      "寺院": "temples",
      "景色": "scenery",
      "有名": "famous",
      "冬": "winter",
      "北部": "northern part",
      "雪": "snow",
      "降ります": "falls",
      "スキー": "skiing",
      "スノーボード": "snowboarding",
      "東京": "Tokyo",
      "クリスマス": "Christmas",
      "イルミネーション": "illuminations",
      "街": "city",
      "飾ります": "decorate",
      "それぞれ": "each",
      "異なる": "different",
      "魅力": "charm",
      "持って": "have",
      "います": "ing (present continuous)"
    },
    sentenceTranslations: {
      0: "日本有四个美丽的季节。",
      1: "春天，樱花盛开，人们享受赏花活动。",
      2: "公园和河岸染上粉色。",
      3: "夏季，举办许多节日。",
      4: "烟花表演和盂兰盆舞很受欢迎。",
      5: "秋天是红叶的季节。",
      6: "山脉变成红色和黄色。",
      7: "特别是京都的寺庙因美丽的风景而闻名。",
      8: "冬天，北部下雪。",
      9: "许多人享受滑雪和滑雪板。",
      10: "在东京，圣诞节灯饰装饰城市。",
      11: "日本的四季各有不同的魅力。"
    },
    sentenceRomaji: {
      0: "Nihon ni wa yottsu no utsukushii kisetsu ga arimasu.",
      1: "Haru ni wa, sakura no hana ga saki, hitobito wa hanami wo tanoshimimasu.",
      2: "Kouen ya kawayoi ga pinku-iro ni somarimasu.",
      3: "Natsu ni naru to, ooku no matsuri ga kaisai saremasu.",
      4: "Hanabi taikai ya bon odori ga ninki desu.",
      5: "Aki wa kouyou no kisetsu desu.",
      6: "Yamayama ga aka ya kiiro ni kawarimasu.",
      7: "Toku ni Kyouto no jiin wa utsukushii keshiki de yuumei desu.",
      8: "Fuyu ni wa, hokubu de yuki ga furimasu.",
      9: "Ooku no hito ga sukii ya sunooboodo wo tanoshimimasu.",
      10: "Tokyo de wa, kurisumasu no irumineeshon ga machi wo kazarimasu.",
      11: "Nihon no shiki wa, sorezore kotonaru miryoku wo motte imasu."
    }
  }
];
