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


createcard(
    "computer.jpg",
    "12:33",
    "This is a website builder",
    "VR Gaming",
    229000,
    4
)
 