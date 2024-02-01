var Links = {
    setColor:function(color) {
        var links = document.querySelectorAll('a');
        i = 0;
        while(i<links.length) {
        links[i].style.color= color;
        i++;
        }
    }
}

var Body = {
    setColor:function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');

    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');

    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('black');
    }
}