#! /usr/bin/env node
const { scrapping } = require('./scraping');
const { args, usage } = require('./command');
const url = 'https://webscraper.io/test-sites/e-commerce/allinone';

const getText = async (url, selector) => {
  // Input : a string for the url of the document to be analayze
  //         a string fot the css selector that we want to search
  try {
    const paragraphContent = await scrapping(url, selector);
    console.log(paragraphContent);
  } catch (error) {
    console.log(usage);
  }
};

getText(args[0], args[1]);
