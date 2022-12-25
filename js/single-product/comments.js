const commentReviewsFunc = function () {
    const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star")

    commentStarsDOM.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            commentStarsDOM.forEach((star) =>
                star.classList.remove("active")
            )
            item.classList.add("active")
        })
    })
}

const addNewCommentFunc = () => {
    let comments = [];
    let commentTextDOM = document.getElementById("comment-text")
    let commentNameDOM = document.getElementById("comment-name")
    let commentBtnDOM = document.querySelector(".form-submit input")
    let commentListDOM = document.querySelector(".comments-list")
    let commentStarsDOM = document.querySelector(".stars")
   
    
    let zaman = new Date()
    let yil = zaman.getFullYear()
    let gun = zaman.getDate()
    
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var n = month[zaman.getMonth()];
    let commentStars= "";
    let commentText = "";
    let commentName = "";
    commentStarsDOM.addEventListener("click", function(e){
        commentStars = e.target.value
       
    })
    commentNameDOM.addEventListener("input", function (e) {
        commentName = e.target.value;
    })
    commentTextDOM.addEventListener("input", function (e) {
        commentText = e.target.value
    })

    function addComment(e) {
        e.preventDefault();
        comments.push({
            text: commentText,
            author: commentName,
            star: commentStars
        })
        let result = ``
        comments.forEach((item) => {
            result += `
    <li class="comment-item">
                        <div class="comment-avatar">
                            <img src="img/avatars/avatar1.jpg">
                        </div>
                        <div class="comment-text">
                        <ul class="comment-star">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        </ul>
                            <div class="comment-meta">
                                <strong>${item.author}</strong>
                                -
                                <time>${n} ${gun} , ${yil}</time>
                            </div>
                            <div class="comment-description">
                                <p>
                                    ${item.text}

                                </p>
                            </div>
                        </div>
                    </li>
                        `;
        })
        commentListDOM.innerHTML = result
    }
    commentBtnDOM.addEventListener("click", addComment)
}

function commentsFunc() {
    commentReviewsFunc()
    addNewCommentFunc()
}
export default commentsFunc();