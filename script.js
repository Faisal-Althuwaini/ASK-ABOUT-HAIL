// when submit button clicked call sendToChatGPT function
document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});


function sendToChatGPT() {
  // get text input
  let value = document.getElementById("word-input").value;

  // api body
  let body = {
    model: "gpt-4-turbo-preview",
    messages: [{ role: "user", content: value }],
    temperature: 1,
  };

  // api headers, containing api key
  let headers = {
    Authorization: "Bearer PUT_YOU_API_KEY_HERE",
  };

  // api post request using axios
  axios.post("https://api.openai.com/v1/chat/completions", body, {
      headers: headers,
    })
    .then((response) => {

      // get the response text from chatGPT
      let reply = response.data.choices[0].message.content;

      // Change the reply text container to the response from chatGPT
      document.getElementById("reply-content").textContent = reply;
    });
}
