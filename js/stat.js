'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 20;
var TEXT_HEIGHT = 35;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;


function renderCloud (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getMaxElement (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRandomNumber (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', '#3f4f97');
  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP * 2);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime) - GAP);
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomNumber(100) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
