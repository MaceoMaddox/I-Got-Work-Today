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

resetBtn = () => {
    const resetBtn = $(".clear-btn");
    resetBtn.on("click", function () {
        localStorage.clear();
        for (let i = 0; i < $(".description").length; i++) {
            $(".description").val('');
        };
    });
};

getTime();
setTime();