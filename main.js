// AvatorVChecker
// jquery-3.3.1.min.js

$(function () {
    // アイテムコードの接頭辞 : アイテムの部位名称
    var partsOf = {
        "H": "トップス",
        "L": "ボトムス&ワンピース",
        "CT": "アウター",
        "SA": "セット衣装1",
        "SB": "セット衣装2",
        "BL": "モイトイ",
        "P1": "ヘアスタイル",
        "AE": "帽子",
        "AD": "めがね",
        "AF": "アクセ1",
        "B2": "アクセ2",
        "B1": "雑貨1",
        "B3": "雑貨2",
        "AB": "その他1",
        "A1": "その他2",
        "A2": "その他3",
        "A3": "その他4",
        "E1": "ペット1",
        "E2": "ペット2",
        "E3": "ペット3",
        "E4": "ペット4",
        "A4": "背景",
        "AA": "エフェクト",
        "F": "フェイス"
    };

    $("img[data-itemcode]").each(function (index, element)
    {
        var itemCode = $(element).attr("data-itemcode");
        var parts = "";

        for (code in partsOf) {
            if (itemCode.startsWith(code)) {
                parts = partsOf[code];
            }
        }
        
        $(element).parents(".item").append("<p style=\"padding: 2px; margin: 0px; border-bottom: 1px solid #CCC; background-color: #F5F5FF\">" + (parts != "" ? parts : itemcode) + "</p>");
    });
});