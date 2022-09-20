getTime = () => {
    const today = moment();
    $("currentDay").text(today.format("LLLL"));
};

setTime = () => {
    $(".description").each(function () {
        var dataId = $(this).attr("data-id");
        var hour = moment().hour();
        if (dataId < hour) {
            $(this).addClass("past");
        } else if (dataId == hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    }
};



getTime();