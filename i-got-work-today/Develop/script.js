getTime = () => {
    const today = moment();
    $("currentDay").text(today.format("LLLL"));
};

getLocalStorage = () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const description = localStorage.getItem(key);
        $(`input[data-id=${key}]`).val(description);
    };
};

clickIt = () => {
    const saveBtnEl = $(".saveBtn");
    saveBtnEl.on("click", function () {
        const button = $(this);
        const descriptionEl = button.closest(".row").find(".description");
        const descriptionText = descriptionEl.val();
        const dataAttr = descriptionEl.attr("data-id");
        localStorage.setItem(`${dataId}`, descriptionText);
    });
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
        };
    });
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
getLocalStorage();
setTime();
resetBtn();
