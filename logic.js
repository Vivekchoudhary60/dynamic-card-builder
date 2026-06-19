function createcard(thumbnail, time, title, chanalname, views, timeAgo) {

    let viewsstr = ""

    if (views < 1000) {
        viewsstr = views
    }

    else if (views >= 1000000) {
        viewsstr = (views / 1000000).toFixed(1) + "M"
    }

    else {
        viewsstr = (views / 1000).toFixed(1) + "K"
    }

    let html = `

    <div class="container">

        <div class="thumbnail">
            <span class="time">${time}</span>

            <img 
            class="thumbnail-img" 
            src="${thumbnail}" 
            alt="">
        </div>

        <div class="title-chanal">

            <div class="title">
                ${title}
            </div>

            <div class="chanal-views">

                <span class="channel-name">
                    ${chanalname}
                </span>

                <span class="views">
                    ${viewsstr} views
                </span>

                <span class="months">
                    ${timeAgo} months ago
                </span>

            </div>

        </div>

    </div>
    `

    document.body.innerHTML += html
}


createcard('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3soTvnGf32cBC_IgXvWlsiE8mEyI5ZZa939wkAhxqw&s=10', '20:25', 'this is a video', 'vivek', 8745132144, 4)

createcard('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3soTvnGf32cBC_IgXvWlsiE8mEyI5ZZa939wkAhxqw&s=10', '20:25', 'this is a video' , 'vivek' , 8745132144, 4 )