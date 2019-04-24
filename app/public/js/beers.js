var beerOne = $("#beer1");
var beerTwo = $("#beer2");
var beerThree = $("#beer3");

function writeBeer(beerList) {
  beerOne.html(beerList[0]);
  beerTwo.html(beerList[1]);
  beerThree.html(beerList[2]);
}

function getBeer() {
  $.get("/api/beers", function(data) {
    console.log(data, "beers");
    var beerList = [];
    var randIndexes = [];

    var randNum = Math.floor(Math.random() * 14 + 1);

    for (var i = 0; i < 3; i++) {
      randIndexes.push(randNum);
      randNum += 3;
    }

    for (var i = 0; i < 3; i++) {
      beerList.push(data[randIndexes[i]].beer_name);
    }

    console.log(beerList);

    writeBeer(beerList);
  });
}

getBeer();



