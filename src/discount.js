
    $(".banner-text-box").css("display", "none");
    $(".col-md-3").css("width", "15%");
    $(".col-md-9").css("width", "85%");
    $(".product-list-col-3 .product-box").css({
        "width": "30%",
        "margin-right": "2%"
    });
    $(".product-box").each((i, item) => {
        url = $(item).find(".quickview-link.product-box-preview").attr("data-remote");
        $.get(url, function(data) {
            var elements = $(data);
            var soldByDafiti = $('.product-seller-name', elements).find("strong").text();
            var soldBy = $('.product-seller-name', elements).text();
            $(item).css({
                "border-radius": "2%",
                "border-width": "2px"
            });
            
            if (soldByDafiti.indexOf("Dafiti") > 0 || soldBy.indexOf("Dafiti") > 0 || soldBy.indexOf("Kanui") > 0 || soldBy.indexOf("Tricae") > 0) {
                $(item).css({
                    "border-style": "solid",
                    "border-color": "green"
                });
                var price = ($(item).find(".product-box-price .product-box-price-to").text() != "" && $(item).find(".product-box-price .product-box-price-to") != undefined) ? $(item).find(".product-box-price .product-box-price-to").text() : $(item).find(".product-box-price .product-box-price-from").text();
                var v = parseInt(price.replace(/\D/g, ""));
                var d = (v * 0.7).toFixed(0) + "";
                var discount = (!isNaN(v)) ? d.substring(0, d.length - 2) + ',' + d.substring(d.length - 2) : "";               

                $(item).find(".product-box-detail .discount").remove();
                $(item).find(".product-box-detail").append("<div class='product-box-price discount' style='color:green;'>-30%: R$ " + discount + "</div>");

            } else {
                $(item).css({
                    "border-style": "dotted",
                    "border-color": "red"
                });
            }
        });
    });

