/**
 * Required This roject
 ==================================
  
    1. Input must not have 0/250 words
    2. 0/250 (More professional and little challenging)
    
    3. 2nd feature (1:30pm)
    4. Generate time during adding tweet
 */

const tweetPost = document.querySelector('.tweet_area');
const tweetSubmitBtn = document.querySelector('.tweet_submit_btn');
const tweetPostWrap = document.querySelector('.tweet_post_wrap');




tweetSubmitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    //Receive Input
    const tweetPostValue = tweetPost.value;
    // Validate Input


    let isError = validTweetPost(tweetPostValue);

    if (!isError) {
        //add item
        addTweetUI(tweetPostValue);
    }
});

function addTweetUI(tweetPostValue) {
    let tweetList = `<li class="tweet_item">
    <div class="d-flex justify-content-between">

        <div class="tweet_post_parent d-flex justify-content-cente">
            <span>1</span>
            <div>
                <a href="#" class="tweet_link">
                    <p class="tweet_post">${tweetPostValue}</p>
                </a>
                <p class="tweet_time">This tweet 1 hour ago</p>
            </div>
        </div>

        <span><button class="tweet_btn delete_btn">Delete</button></span>
      </div>
   </li>`

    tweetPostWrap.insertAdjacentHTML('afterbegin', tweetList)
}


function validTweetPost(tweetPostValue) {

    //  console.log(!tweetPostValue, tweetPostValue.length <= 5)
    let isError = false;

    if (!tweetPostValue || tweetPostValue.length <= 5) {
        isError = true;
    }

    return isError;
}