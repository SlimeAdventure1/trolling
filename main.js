var began = false
var timePassed = 0;
var trollingGoals = 0;

setInterval(function() {
    function getTrolling() { return Math.min(49999 - 1 / (timePassed + 1), 49999) }
    function getTrollingGain() { return began ? (3.75 / Math.pow(timePassed+1, 2)) : 0 }
    function getTrollingDisplay() { return Math.max(Math.pow(2, getTrolling()) / 768 - 1/3, 0) }
    function updateTrollingGoals() {
        let t = getTrolling();
        if (t < 9.5) trollingGoals = 0;
        else if (t < 10) trollingGoals = 1;
        else trollingGoals = 2;
    }
    function getNextTrollingGoal() {
        let t = getTrolling();
        if (trollingGoals == 0) return 9.5;
        else return 10; 
    }
    function getTrollingGoalDesc() {
        if (trollingGoals == 0) return "ascend to a higher plane of existence";
        else return "actually ascend to a higher plane of existence";
    }
    
    if (!began) return;
    timePassed += .005;
    updateTrollingGoals();
    
    document.getElementById("theTrollingHasBegun").style.display = began ? "none" : ""
    document.getElementById("completeAndUtterTrolling").style.display = began ? "" : "none"
    document.getElementById("completeAndUtterTrolling").innerHTML = (getTrolling()>=10)?"CHEATER!!!":((timePassed > 4.5 ? "Trolling is" : "Taxes are")+" 10% weaker<br>Cost: 10 "+(timePassed > 5 ? "Troll'd" : "Gold"))
    document.getElementById("trollingDiv").style.display = began ? "" : "none"
    document.getElementById("trolling").textContent = getTrolling().toFixed(2);
    document.getElementById("trollingGain").textContent = getTrollingGain().toFixed(8);
    document.getElementById("trollingPower").textContent = began ? ((1.25 * getTrollingGain()).toFixed(2)) : (1).toFixed(1.5);
    document.getElementById("trollingName").textContent = timePassed > 4.5 ? "complete and utter trolling" : "taxes"
    document.getElementById("theTrollHasEnteredTheRoom").style.opacity = getTrollingDisplay()
    document.getElementById("theTrollHasEnteredTheRoom").style["background-position"] = (2 * timePassed / (1 - Math.pow(getTrollingDisplay(), 0.002)))+"px"
    document.getElementById("theTrollHasEnteredTheRoom").style["background-size"] = (200 * Math.sin(Math.sqrt(timePassed) / (1 - Math.pow(getTrollingDisplay(), 0.002))))+"%"
    document.getElementById("res1").textContent = timePassed > 5 ? "Troll'd" : "Gold"
    document.getElementById("res2").textContent = timePassed > 5 ? "Troll'd" : "Gold"
    document.getElementById("res3").textContent = timePassed > 5 ? "Troll'd" : "Gold"
    document.getElementById("trollAscension").style.display = timePassed > 10 ? "" : "none"
    document.getElementById("trolledgold").textContent = getNextTrollingGoal().toFixed(5)
    document.getElementById("trolledgolddesc").textContent = getTrollingGoalDesc()
   
}, 20)
