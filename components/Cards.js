// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const entryPoint = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((successResponse) => {
    console.log('Card Success!!', successResponse)
    const articles = successResponse.data.articles
    for(let obj in articles){
        articles[obj].forEach(element => {
            entryPoint.appendChild(createCard(element))
        });
    }
})
.catch((errorResponse) => {
    console.log('super Card error, bro!', errorResponse)
})

const createCard = (obj) => {

    //create and class
    const card = document.createElement('div');
    card.className = 'card'
    const headline = document.createElement('div');
    headline.className = 'headline'
    headline.textContent = obj.headline
    const author = document.createElement('div');
    author.className = 'author'
    const imgCont = document.createElement('div');
    imgCont.className = 'img-container'
    const img = document.createElement('img');
    img.src = obj.authorPhoto
    const span = document.createElement('span');
    span.textContent = 'By ' + obj.authorName

    //append
    card.append(headline, author)
    author.append(imgCont, span)
    imgCont.appendChild(img)

    //click event
    card.addEventListener('click', () => {
        console.log(obj.headline)
      })




return card;
}