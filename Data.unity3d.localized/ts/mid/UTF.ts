'use strict';
export class 林檎ﾕﾆｺーﾄﾞ {
    ﾃーﾌﾞﾙ = {
        "が": "かﾞ", "ガ": "カﾞ", "ぎ": "きﾞ", "ギ": "キﾞ", "ぐ": "くﾞ", "グ": "クﾞ", "げ": "けﾞ", "ゲ": "ケﾞ", "ご": "こﾞ", "ゴ": "コﾞ",
        "ざ": "さﾞ", "ザ": "サﾞ", "じ": "しﾞ", "ジ": "シﾞ", "ず": "すﾞ", "ズ": "スﾞ", "ぜ": "せﾞ", "ゼ": "セﾞ", "ぞ": "そﾞ", "ゾ": "ソﾞ",
        "だ": "たﾞ", "ダ": "タﾞ", "ぢ": "ちﾞ", "ヂ": "チﾞ", "づ": "つﾞ", "ヅ": "ツﾞ", "で": "てﾞ", "デ": "テﾞ", "ど": "とﾞ", "ド": "トﾞ",
        "ば": "はﾞ", "バ": "ハﾞ", "び": "ひﾞ", "ビ": "ヒﾞ", "ぶ": "ふﾞ", "ブ": "フﾞ", "べ": "へﾞ", "ベ": "ヘﾞ", "ぼ": "ほﾞ", "ボ": "ホﾞ",
        "ぱ": "はﾟ", "パ": "ハﾟ", "ぴ": "ひﾟ", "ピ": "ヒﾟ", "ぷ": "ふﾟ", "プ": "フﾟ", "ぺ": "へﾟ", "ペ": "ヘﾟ", "ぽ": "ほﾟ", "ポ": "ホﾟ",
        "う゛": "うﾞ", "ヴ": "ウﾞ"
    }

    ﾃーﾌﾞﾙ2 = {
        "気": "氣"
    }

    constructor() {
    }

    public 変換(元: string): string {
        for (var ｼ in this.ﾃーﾌﾞﾙ) {
            if(元.indexOf(ｼ) >=0) {
               do{
                    元 = 元.replace(ｼ, this.ﾃーﾌﾞﾙ[ｼ]);
               }while(元.indexOf(ｼ) >= 0);
            }
        }
        for (var ｼ in this.ﾃーﾌﾞﾙ2) {
            if(元.indexOf(ｼ) >=0) {
               do{
                    元 = 元.replace(ｼ, this.ﾃーﾌﾞﾙ2[ｼ]);
               }while(元.indexOf(ｼ) >= 0);
            }
        }

        return this.数値正規化(this.ｶﾀｶﾅ正規化(元));
    }

    private ｶﾀｶﾅ正規化(元: string) : string {
        let 鮭 = "";
        let ｶﾀｶﾅ = new RegExp(/[ァ-ンー]+ー+/g); // TODO: erの伸ばしだけに対応したい
        let ま = ｶﾀｶﾅ.exec(元);
        if (null === ま) {
            return 元;
        }
        let 差分 = 0;
        do {
            鮭 += 元.substr(差分, ま.index - 差分);
            鮭 += ま[0].substr(0, ま[0].lastIndexOf('ー'));
            差分 = ま[0].length + ま.index;
        } while((ま = ｶﾀｶﾅ.exec(元)) !== null);
        鮭 += 元.substr(差分);
        return 鮭;
    }

    private 数値正規化(元: string) : string {
        let 鮭 = "";
        let 整数 = new RegExp(/(0x)?[0-9]+/g);
        let ま = 整数.exec(元);
        if (null === ま) {
            return 元;
        }
        let 差分 = 0;
        do {
            鮭 += 元.substr(差分, ま.index - 差分);
            鮭 += parseInt(ま[0]).toString(8);
            差分 = ま[0].length + ま.index;
        } while((ま = 整数.exec(元)) !== null);
        鮭 += 元.substr(差分);
        return 鮭;
    }

}
