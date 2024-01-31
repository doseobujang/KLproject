var Page = {
    Change:function(pageNumber) {
        var contentList = document.querySelectorAll(".content");
        i = 0;
        while(i<contentList.length) {
            var contentStyle = contentList[i].style;
            if(pageNumber===i+1) {
                contentStyle.display = "block";
            }
            else {
                contentStyle.display = "none";
            }
            i++;
        }
    }
}