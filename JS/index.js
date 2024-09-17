let tenNghe = ['Bác sĩ', 'Pháp luật', 'Giáo Dục', 'Công nghệ thông tin', 'Kinh doanh và quản lý', 'Kiến trúc và xây dựng', 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân'];

$(document).ready(function() {
    $("#searchbar").keyup(function(){
        let text = $(this).val();
        let h = '';
        for(let c of tenNghe)
            if(c.toLowerCase().indexOf(text) >= 0)
            {
                h += `<li><a href="Nghề/${c}.html">${c}</a></li>`;          
            }
        $("#suggest").html(h);
        $("#suggest").show(h);
    });
});

function init(){
    let anh = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
    var slideshow = document.getElementById("slide");
    var i = 1;

    function loading(){
        slideshow.setAttribute("src", anh[i]);
        i++;
        if(i == anh.length) i = 1;
    };

    setInterval(loading, 4000);
};

