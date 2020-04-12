const http = require("http");
const fs = require("fs");
const url = require("url");

function replaceTemp(page, data) {
  let output = page.replace("{%BREEDNAME%}", data.breedname);
  output = output.replace("{%DESCRIPTION%}", data.description);
  output = output.replace("{%ORIGIN%}", data.origin);
  output = output.replace("{%COST%}", data.cost);
  output = output.replace("{%LIFESPAN%}", data.lifespan);
  output = output.replace("{%IMAGE%}", data.image);
  output = output.replace("{%ID%}", data.id);
  return output;
}

const data = fs.readFileSync(`${__dirname}/database/data.json`, "utf-8");
const dataObj = JSON.parse(data);
//
const introPage = fs.readFileSync(`${__dirname}/Template/intro.html`, "utf-8");
const cards = fs.readFileSync(`${__dirname}/Template/cards.html`, "utf-8");
const detailsPage = fs.readFileSync(
  `${__dirname}/Template/details.html`,
  "utf-8"
);

//
const server = http.createServer((req, res) => {
  const path = req.url;
  console.log(path);

  if (path === "/" || path === "intro") {
    res.writeHead(200, { "Content-type": "text/html" });
    // const output = cards.replace(/{%BREEDNAME%}/g, "Golden Retriever");
    // const mainPage = introPage.replace(/{%CARDS%}/g, output);
    // console.log(mainPage);
    // res.end(mainPage);
    const cardsHtml = dataObj.map((el) => replaceTemp(cards, el)).join("");
    const mainPage = introPage.replace(/{%CARDS%}/g, cardsHtml);
    res.end(mainPage);
    // console.log(mainPage);
  } else if (path === "/details") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObj
      .map((el) => replaceTemp(detailsPage, el))
      .join("");

    res.end(cardsHtml);
    //console.log(cardsHtml);
  }
});

server.listen(30, "localhost");
