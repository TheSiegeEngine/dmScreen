var mainContainer = document.getElementById('main-container')

function dieRoll(die){
    return Math.floor((Math.random() * die)) + 1;
}

function diceRolls(die, numDice){
    var results = [0]
    for(var i = 0; i < numDice; i++){
        results.push(dieRoll(die))
        results[0] += results[i + 1];
    }
    return results;
}

function renderDice(){
    mainContainer.innerHTML = `
        <div class="py-5">
        </div>
        <div class="px-5 py-5 bg-warning-a w-75 mx-auto rounded shadow">
            <h1 class="text-center text-white">Pick a Die to roll</h1>
            <form class="d-flex justify-content-center w-75 mt-3 mx-auto">
                <select id="quantity" class="border shadow mx-2" name="quantity">
                    <option selected="true" value="1" disabled="disabled">Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <select id="die" class="border shadow mx-2" name="die">
                    <option selected="true" value="20" disabled="disabled">Type</option>
                    <option value="20">D20</option>
                    <option value="12">D12</option>
                    <option value="10">D10</option>
                    <option value="8">D8</option>
                    <option value="6">D6</option>
                    <option value="4">D4</option>
                    <option value="3">D3</option>
                    <option value="100">D100</option>
                </select>
                <button id="submit" class="btn btn-primary shadow mx-2" type="submit">Roll!</button>
            </form>
            <div id="diceContents" class="text-center mt-4">
            </div>
        </div>
    `
}

function runDice(){
    renderDice();
    var diceContents = document.getElementById('diceContents');
    var submit = document.getElementById('submit');
    submit.addEventListener('click', e => {
        e.preventDefault();
        diceContents.innerHTML = "";
        var die = document.getElementById("die").value;
        var quantity = document.getElementById("quantity").value;
        var results = diceRolls(die, quantity);
        console.log(results);
        diceContents.innerHTML = `<h1>${quantity} d${die}(s) rolled for..</h1>
        <h1>${results[0]}</h1>
        `
    });
}


function runCombat(){

}
function runSkills(){

}


function conditionDescription(description){
    return description.map(list => {
        return `<li>${list}</li>`
    })
}

function runConditions(){
    var conditionsKeys = Object.keys(conditions);
    var conditionsList = conditionsKeys.map(condition => {
        return `<div class="px-2 w-sm-100 w-lg-75">
                    <h3>${condition}</h3>
                    <ul>
                        ${conditionDescription(conditions[condition]).join("")}
                    </ul>
                </div>
            `;
    });
    mainContainer.innerHTML = `
        <h1>Conditions</h1>
        <div class="d-flex p-2 flex-wrap">
            ${conditionsList.join("")}
        </div>
    `
}
function runMisc(){

}
function runTables(){

}
function runEquipment(){

}