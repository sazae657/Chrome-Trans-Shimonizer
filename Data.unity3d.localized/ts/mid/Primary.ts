'use strict';
class 鹿大量 {
    public 正規表現;
    public ぉ;
    constructor(x:RegExp, y:string) {
        this.正規表現 = x;
        this.ぉ = y;
    }
}
export class 原色 {

    奈良公園: 鹿大量[] = [
        new 鹿大量(/(ポニテ|ポニーテール)/g, "リボンポニテ"),
        new 鹿大量(/何/g, "伺"),
        new 鹿大量(/([Mm]ac|[Aa]pple|i([Pp]hone|[Pp]ad))/g, "ｸｿ"),
        // ます
        new 鹿大量(/します(?![ぁ-ゖ])/g, "するので"),
        new 鹿大量(/きます(?![ぁ-ゖ])/g, "くるので"),
        new 鹿大量(/いり?ます(?![ぁ-ゖ])/g, "いるので"),
        new 鹿大量(/でます(?![ぁ-ゖ])/g, "でるので"),
        new 鹿大量(/てます(?![ぁ-ゖ])/g, "てるので"),
        new 鹿大量(/えます(?![ぁ-ゖ])/g, "えるので"),
        new 鹿大量(/やります(?![ぁ-ゖ])/g, "やるので"),
        new 鹿大量(/なります(?![ぁ-ゖ])/g, "なるので"),
        new 鹿大量(/(?:です|ます)(?![ぁ-ゖ])/g, "なので"),
        new 鹿大量(/でした(?![ぁ-ゖ])/g, "だったので"),
        new 鹿大量(/りました(?![ぁ-ゖ])/g, "ったので"),
        new 鹿大量(/みました(?![ぁ-ゖ])/g, "んだので"),
        new 鹿大量(/ました(?![ぁ-ゖ])/g, "たので"),
        new 鹿大量(/[!！]+/g, "（ぉ"),
        new 鹿大量(/ようこそ/g, "ようこそようこ"),
        new 鹿大量(/Zen([Ff]one|[Pp]ad)(\s+)?[28]([\.0-9]+)?/g, "ｲﾝﾃﾙｱﾝﾖﾖｲﾖ")
    ];

    constructor() {
    }

    private 内部(元: string, 正規: RegExp, 置換: string): string {
        let 鮭 = "";
        let ま = 正規.exec(元);
        if (null === ま) {
            return 元;
        }
        let 差分 = 0;
        do {
            鮭 += 元.substr(差分, ま.index - 差分);
            鮭 += 置換;
            差分 =　ま[0].length + ま.index;
        } while((ま = 正規.exec(元)) !== null);
        鮭 += 元.substr(差分);
        
        return 鮭;
    }

    public 変換(元: string): string {
        let 鮭 = 元;
        for (let ぉ of this.奈良公園) {
            鮭 = this.内部(鮭, ぉ.正規表現, ぉ.ぉ);
        }
        return 鮭;
    }
}
