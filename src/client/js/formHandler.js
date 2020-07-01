const fetch = require("node-fetch");

function handleSubmit(event) {

    console.log('Button clicked');

    event.preventDefault()

    console.log('Button clicked after');

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    // Client.checkForName(formText)

    let elemHead = document.querySelector('.secHead');
    if(!Client.validateURL(formText)){
      // console.log('Invalid URL');
      let elmResult = document.querySelector('#dvResult');
      if (elmResult) {
        elmResult.classList.add('clsHide');
      }
      if (elemHead) {
        elemHead.visible = true;
        elemHead.classList.add("error");
        elemHead.innerText = "Invalid URL";
      }
      return
    }
    else {
      console.log('In else of valid url');
      elemHead.classList.remove("error");
      elemHead.innerText = "Form Result";
    }
    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')

    var urldata = {nlpurl: formText};
    // get_update_nlp();
    console.log("::: Calling get_update_nlp changed :::")
    const get_update_nlp = async() => {
      // console.log('Inside get_update_nlp');
      // let postData = await postnlpdata('http://localhost:8081/nlpapi', urldata);
      // let getData = await getNlpData('http://localhost:8081/nlpapi', urldata);
      // console.log('getData', getData);
      // await updateUI(getData);

      // Change url in postnldata as per below description for heroku and local env
      // heroku url --> https://evaluate-news-nlp-aditi.herokuapp.com/nlpapi/extract
      // local url --> http://localhost:5000/nlpapi/extract

      // postnlpdata(`http://localhost:8081/nlpapi/extract`, urldata)
      // postnlpdata(`https://evaluate-news-nlp-aditi.herokuapp.com/nlpapi/extract`, urldata)
      // postnlpdata(`http://localhost:5000/nlpapi/extract`, urldata)
      postnlpdata(`/nlpapi/extract`, urldata)
      .then(function(data){
        console.log('inside then on 5000 changed to proxy');
        // let strLabel = data[0]['label']
        // console.log('In Response Data Label - ', strLabel);
        console.log('post response Data - ', data);
        // console.log(data);
        // updateUI(data);
        postSentimentAnalysis('http://localhost:5000/nlpapi/sentiment', {'title': data.title})
        .then(function(sentData) {
          updateUI(sentData);
        });
        // getNlpData('http://localhost:8081/nlpapi', urldata)
        // .then(function(data) {
        //   console.log(data);
        //   updateUI(data);
        // })
      });
    }

    get_update_nlp();
    // fetch('/nlpapi', {
    //   method: 'POST',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(urldata),
    // })
    // .then(res => res.json())
    // .then(function(res) {
    //   alert('Inside', res);
    //     document.getElementById('results').innerHTML = res.message
    // })
}
const updateUI = async(result) => {
  console.log('updateUI', result);
  try {
    let elmResult = document.querySelector('#dvResult');
    if (elmResult) {
      elmResult.classList.remove('clsHide');
    }

    document.getElementById('urlImage').src = result.image;
    document.querySelector('#title p:nth-child(2)').innerText = result.title;
    document.querySelector('#author p:nth-child(2)').innerHTML = result.author;
    document.querySelector('#polarity p:nth-child(2)').innerText = result.polarity;
    document.querySelector('#subjectivity p:nth-child(2)').innerHTML = result.subjectivity;
    document.querySelector('#polr_confidence p:nth-child(2)').innerText = result.polarity_confidence;
    document.querySelector('#sub_confidence p:nth-child(2)').innerHTML = result.subjectivity_confidence;
  } catch (e) {
    console.log("updateUI Error - ", e);
  }
}
//get request to get nlp data
const getNlpData = async(baseUrl, data) => {
  // console.log('in getNlpData', data);
  const wURL = baseUrl;
  const res = await fetch(wURL, data);
  try {
    // console.log('Try getNlpData', res);
    const rsdata = await res.json();
    return rsdata;
  } catch(ex) {
    console.log('Error in getNlpData', ex);
  }
}

//get request to get nlp data
const postSentimentAnalysis = async(url='', data={}) => {
  console.log("In postSentimentAnalysis", url, data);
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    console.log("In postSentimentAnalysis data", newData);
    return newData;
  } catch (err) {
    console.log('Error in postSentimentAnalysis', err);
  }
}



const postnlpdata = async(url='', data={}) => {
  console.log("In Post 1", url, data['nlpurl']);
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    // console.log("In post data", newData);
    return newData;
  } catch (err) {
    console.log('Error in postnlpdata', err);
  }
}

export { handleSubmit, postnlpdata }
