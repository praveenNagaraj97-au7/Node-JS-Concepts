const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
//console.log(data);
const dataObj = JSON.parse(data);
//console.log(dataObj);

const overviewPage = fs.readFileSync(
  `${__dirname}/templates/templete-overview.html`,
  "utf-8"
);
const card = fs.readFileSync(
  `${__dirname}/templates/templete-card.html`,
  "utf-8"
);
const productPage = fs.readFileSync(
  `${__dirname}/templates/templete-product.html`,
  "utf-8"
);

const replaceTemplete = (card, product) => {
  let output = card.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};

//console.log(dataObj.map(el=>replaceTemplete(card,el)));

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // OVERVIEW PAGE
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObj.map((el) => replaceTemplete(card, el)).join("");
    const cards = overviewPage.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
    //console.log(cards );
    //console.log(cardsHtml)

    res.end(cards);

    // PRODUCT PAGE
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObj[query.id];
    //console.log(query.id);

    const output = replaceTemplete(productPage, product);
    res.end(output);

    // API PAGE
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    // NOT FOUND PAGES
  } else {
    res.writeHead(400, { "Content-type": "text/html" });
    res.end("<h1>NOT Found</h1>");
  }
});

server.listen(30, "localhost", () => {
  console.log("Server Started");
});
