const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });

  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  try {
    console.log('Navigating to http://127.0.0.1:5174...');
    await page.goto('http://127.0.0.1:5174', { waitUntil: 'load', timeout: 30000 });
    
    await page.waitForTimeout(5000); 
    
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log('BODY HTML:', bodyHTML.substring(0, 1000));
    
  } catch (error) {
    console.log('TEST ERROR:', error.message);
  } finally {
    await browser.close();
  }
})();
