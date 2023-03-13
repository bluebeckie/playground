const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function testDavinci() {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 50,
      prompt:`The following is a conversation between an Agent and a Customer. The agent will attempt to diagnose the problem and suggest a solution, whilst refraining from asking any questions related to PII. Instead of asking for PII, such as username or password, refer the user to the help article www.samplewebsite.com/help/faq

        Customer: I can’t log in to my account.
        Agent:
      `
    });

    console.log(completion.data.choices[0].text);

  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};
// testDavinci();

async function testWords() {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 50,
      prompt:`please list several words that spells and sounds like the provided ones 

      example1: hay
      returns: bay, may, way, day, pay

      exmaple2: how
      returns: bow, cow, now, wow

      example3: school
      returns:
      `
    });

    console.log(completion.data.choices[0].text);

  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};
testWords();


// testWhisper();
