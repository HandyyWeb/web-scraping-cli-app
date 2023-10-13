const cheerio = require('cheerio');
const axios = require('axios');

const scrapping = async (url, selector) => {
  if (selector) {
    try {
      const result = await axios.get(url);
      const document = result.data;

      const $ = cheerio.load(`${document}`); // Load the document in a cheerio object
      const $selectedTextcontent = $(`${selector}`).text();

      return $selectedTextcontent;
    } catch (error) {
      throw error; // Handle the case when there is a problem with URL ( no URL entered, URL deprecated, etc...)
    }
  } else {
    throw new Error('Selector is empty'); // Handle the case when the user enter no selector
  }
};

module.exports = { scrapping };
