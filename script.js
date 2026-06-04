const scoreBoard = (function() {
    let score = 0;

    return{
        addPoint: function () {
            score++;
        },
        getScore: function () {
            return score;
        }
    }
})();


scoreBoard.addPoint();
scoreBoard.addPoint();

console.log(scoreBoard.getScore());