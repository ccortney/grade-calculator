const totalPoints = 375;

$("#points-needed-submit").on("click", function(e) {
    e.preventDefault();
    const points = getScores();
    showPoints(points);
})

function getScores() {
    const unit4Test = +document.querySelector('input[id="Unit-4-Test"]').value;
    const unit5Quiz1 = +document.querySelector('input[id="Unit-5-Quiz-1"]').value;
    const unit5Quiz2 = +document.querySelector('input[id="Unit-5-Quiz-2"]').value;
    const unit5Quiz3 = +document.querySelector('input[id="Unit-5-Quiz-3"]').value;
    const unit6Test = +document.querySelector('input[id="Unit-6-Test"]').value;
    const unit7Test = +document.querySelector('input[id="Unit-7-Test"]').value;
    const unit8Test = +document.querySelector('input[id="Unit-8-Test"]').value;

    const totalPointsEarned = unit4Test + unit5Quiz1 + unit5Quiz2 + unit5Quiz3 + unit6Test + unit7Test + unit8Test;
    
    const dailyWork = +document.querySelector('input[id="Daily-Work"]').value/100;
    const gradeWanted = document.querySelector('select').value;
    
    let points = calculatePointsNeeded(totalPointsEarned, dailyWork, gradeWanted);
    return points
}

function calculatePointsNeeded(totalPointsEarned, dailyWork, gradeWanted) {
    let points = gradeWanted - dailyWork;
    points = points/0.8;
    points = Math.round(points * totalPoints, 2);
    points = points - totalPointsEarned;
    return points
}


function showPoints(points) {
    const result = document.querySelector("#points-needed-result")
    result.innerHTML = `You Need to Get a ${points}% on the Final to Get that Grade`
}