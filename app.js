$(function() {
    let positions = ["1" , "5", "3", "4", "7" , "9", "1", "6", "8" , "2", "4", "9", "1", "8", "5", "1"];
    let greetings = ["Цъкни тук", "Цъкни там", "Сега тук", "Сега там", "Ся тук","Ся там", "и тук", "и там", "ама и тук", "много бавно цъкаш", "Бавничък", "Мноо бавно", "harder", "better", "faster", "stronger"];
    let buttonColorClass = ["primary", "success", "info", "warning", "success", "danger","primary", "info", "warning", "danger", "success", "primary", "primary", "info", "warning", "danger"];

    let currentPosition = 1;
    let currentIndex = 0;
    let currentButtonColorClass = 'warning';
    let currentGreeting = 'Цъкни';
    
    $('.click-me').click(next);
    
    function next() {

        if (currentIndex === 15) {
            $('body').empty();
            $('body').html(`<img src="cat.jpg"> <br><br> <img src="cat2.jpg">`);
            return;
        }

        //empty previous
        $(`#${currentPosition}`).empty();

        //create next
        currentIndex++;
        currentPosition = positions[currentIndex];
        currentButtonColorClass = buttonColorClass[currentIndex];
        currentGreeting = greetings[currentIndex];

        let html = `<button type="button" class="btn btn-${currentButtonColorClass} click-me">${currentGreeting}</button>`;
        let currentField = $(`#${currentPosition}`);

        $('td').html('<button class="invisible">Invisible</button>');
        currentField.html(html);

        $('.click-me').click(next);
    }
});
