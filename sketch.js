//Nav_Bar///////////////////
let homeBtn = document.getElementById('homebtn')
homeBtn.addEventListener('click', homeFunction)
function homeFunction() {
    window.scrollTo(0,0)
}
let newsBtn = document.getElementById('newsbtn')
newsBtn.addEventListener('click', newsFunction)
function newsFunction() {
    window.scrollTo(0, 900)
}
let susBtn = document.getElementById('susbtn')
susBtn.addEventListener('click', susFunction)
function susFunction() {
    window.scrollTo(0,1500)
}
///////////////////////////
//-------------------------------------------
//Yearly Carbon-Emission Quiz//////////////////
let quizBtn = document.getElementById('quiz_Btn')
quizBtn.addEventListener('click', showQuiz)
function showQuiz() {
    let quiz = document.getElementById('quiz')
    quiz.style.display = 'flex'
    window.scrollTo(0,1600)
    quizBtn.style.display = 'none'
}
submit_quiz = document.getElementById('submit_quiz')
submit_quiz.addEventListener('click', calcQuiz)
function calcQuiz() {
    let electric_ratio
    let electric_ratio_input = document.getElementById('electric_ratio').value
    if (electric_ratio_input == '1/12') {
        electric_ratio = 1/12
    }
    else if (electric_ratio_input == '1') {
        electric_ratio = 1
    }
    else if (electric_ratio_input == '30') {
        electric_ratio = 30
    }
    let electric_bill = Number(document.getElementById('electric_bill').value)
    let monthly_electric_emission = Math.round(electric_ratio * electric_bill * 105)
    let gas_ratio
    let gas_ratio_input = document.getElementById('gas_ratio').value
    if (gas_ratio_input == '1/12') {
        gas_ratio = 1/12
    }
    else if (gas_ratio_input == '1') {
        gas_ratio = 1
    }
    else if (gas_ratio_input == '30') {
        gas_ratio = 30
    }
    let gas_bill = Number(document.getElementById('gas_bill').value)
    let yearly_gas_emission = Math.round(gas_ratio * gas_bill * 105)
    let oil_ratio
    let oil_ratio_input = document.getElementById('oil_ratio').value
    if (oil_ratio_input == '1/12') {
        oil_ratio = 1/12
    }
    else if (oil_ratio_input == '1') {
        oil_ratio = 1
    }
    else if (oil_ratio_input == '30') {
        oil_ratio = 30
    }
    let oil_bill = Number(document.getElementById('oil_bill').value)
    let yearly_oil_emission = Math.round(oil_ratio * oil_bill * 113)
    let car_ratio
    let car_ratio_input = document.getElementById('car_ratio').value
    if (car_ratio_input == '1') {
        car_ratio = 1
    }
    else if (gas_ratio_input == '12') {
        car_ratio = 12
    }
    else if (car_ratio_input == '365') {
        car_ratio = 365
    }
    let car_bill = Number(document.getElementById('car_bill').value)
    let yearly_car_emission = Math.round(car_ratio * car_bill * .79)
    let short_flights = Number(document.getElementById('short_plane_flights').value)
    let yearly_short_emissions = short_flights * 1100
    let long_flights = Number(document.getElementById('long_plane_flights').value)
    let yearly_long_emissions = long_flights * 4400
    let yearly_newspaper_emissions
    if (document.getElementById('newspaper').value == "No") {
        yearly_newspaper_emissions = 184
    }
    else {
        yearly_newspaper_emissions = 0
    }
    let yearly_metal_emissions
    if (document.getElementById('metal').value == "No") {
        yearly_metal_emissions = 166
    }
    else {
        yearly_metal_emissions = 0
    }
    let total_yearly_emissions = (monthly_electric_emission + yearly_gas_emission + yearly_oil_emission + yearly_car_emission + yearly_short_emissions + yearly_long_emissions + yearly_newspaper_emissions + yearly_metal_emissions)/2205
    //
    let stats = document.getElementById('after_quiz')
    stats.style.display = 'flex'
    let main_stat = document.getElementById('main_stat')
    main_stat.innerText = 'On average, you emit ' + total_yearly_emissions + ' metric tonnes of CO2 per year.'
    quiz.style.display = 'none'
    let most_stat_box = document.getElementById('most_stat')
    //
    let list = {
        electric: monthly_electric_emission,
        gas: yearly_gas_emission,
        oil: yearly_oil_emission,
        car: yearly_car_emission,
        flight: yearly_short_emissions + yearly_long_emissions,
        news: yearly_newspaper_emissions,
        metal: yearly_metal_emissions
    }
    let max = list.electric
    most_stat_box.innerText = 'Most of your carbon emissions come from electricity usage.'
    let max_value = 'electric'
    if (list.gas > max) {
        max = list.gas
        max_value = 'gas'
        most_stat_box.innerText = 'Most of your carbon emissions come from gas usage.'
        let reminder1 = document.getElementById('personalized_reminder_1')
        reminder1.innerText = 'Slow down and drive conservatively (gas is expended more at higher speeds due to air and tire resistance)'
        let reminder2 = document.getElementById('personalized_reminder_2')
        reminder2.innerText = 'Consider riding a bike (cardio), scooter, or a subway/train more often'
        let reminder3 = document.getElementById('personalized_reminder_3')
        reminder3.innerText = "Open windows to cool down your car instead of using the AC"
    }
    if (list.oil > max) {
        max = list.oil
        max_value = 'oil'
        most_stat_box.innerText = 'Most of your carbon emissions come from oil usage.'
        let reminder1 = document.getElementById('personalized_reminder_1')
        let reminder2 = document.getElementById('personalized_reminder_2')
        let reminder3 = document.getElementById('personalized_reminder_3')
        reminder1.innerText = 'If you use an oil heating system, consider converting to gas, which is more efficient'
        reminder2.innerText = 'Avoid aggresively braking your car and keep tires pumped to reduce tire resistance'
        reminder3.innerText = 'If possible, lessen the weight of your car'
    }
    if (list.car > max) {
        max = list.car
        max_value = 'car'
        most_stat_box.innerText = 'Most of your carbon emissions come from car usage.'
        let reminder1 = document.getElementById('personalized_reminder_1')
        let reminder2 = document.getElementById('personalized_reminder_2')
        let reminder3 = document.getElementById('personalized_reminder_3')
        reminder1.innerText = 'Turn off car engines when idle to use less gas'
        reminder2.innerText = 'Consider using public transportation like citybikes or subways more often'
        reminder3.innerText = 'Consider carpooling or combining car trips to lessen the time and gas wasted between trips'
    }
    if (list.flight > max) {
        max = list.flight
        max_value = 'flight'
        most_stat_box.innerText = 'Most of your carbon emissions come from flights.'
        let reminder1 = document.getElementById('personalized_reminder_1')
        let reminder2 = document.getElementById('personalized_reminder_2')
        let reminder3 = document.getElementById('personalized_reminder_3')
        reminder1.innerText = 'Consider switching to an airport that is greener'
        reminder2.innerText = 'Consider attending meetings/greetings virtually'
        reminder3.innerText = 'Fly less'
    }
    if (list.news > max) {
        max = list.news
        max_value = 'news'
        most_stat_box.innerText = 'Most of your carbon emissions come from not recycling newspaper.'
        let reminder1 = document.getElementById('personalized_reminder_1')
        let reminder2 = document.getElementById('personalized_reminder_2')
        let reminder3 = document.getElementById('personalized_reminder_3')
        reminder1.innerText = 'Recycle newspapers (blue bin) instead of throwing them in the trash'
        reminder2.innerText = 'Repurpose newspapers'
        reminder3.innerText = 'Read news online instead of on paper'
    }
    if (list.metal > max) {
        max = list.metal
        max_value = 'metal'
        most_stat_box.innerText = 'Most of your carbon emissions come from not recycling aluminum & tin.'
        let reminder1 = document.getElementById('personalized_reminder_1')
        let reminder2 = document.getElementById('personalized_reminder_2')
        let reminder3 = document.getElementById('personalized_reminder_3')
        reminder1.innerText = 'Repurpose your aluminum and tin'
        reminder2.innerText = 'Recycle aluminum and tin (blue bin)'
        reminder3.innerText = 'Use less aluminum and tin'
    }
}


let login = document.getElementById('log_in_btn')
login.addEventListener('click', loginfunction)
function loginfunction() {
    let username = document.getElementById('username_input').value
    let password = document.getElementById('password_input').value
    if (username == 'Username' && password == 'Password') {
        let not_logged_in = document.getElementById('not_logged_in')
        let logged_in = document.getElementById('logged_in')
        not_logged_in.style.display = 'none'
        logged_in.style.display = 'block'
    }
    else {
        alert('Wrong username or password')
    }
}
let retake = document.getElementById('retake')
retake.addEventListener('click', retakefunction)
function retakefunction() {
    let quiz = document.getElementById('quiz')
    quiz.style.display = 'flex'
    let after_quiz = document.getElementById('after_quiz')
    after_quiz.style.display = 'none'
}

let complete1 = document.getElementById('complete1')
complete1.addEventListener('click', complete1function)
function complete1function() {
    let reminder1 = document.getElementById('personalized_reminder_1')
    reminder1.style.color = 'lightgreen'
}
let complete2 = document.getElementById('complete2')
complete2.addEventListener('click', complete2function)
function complete2function() {
    let reminder2 = document.getElementById('personalized_reminder_2')
    reminder2.style.color = 'lightgreen'
}
let complete3 = document.getElementById('complete3')
complete3.addEventListener('click', complete3function)
function complete3function() {
    let reminder3 = document.getElementById('personalized_reminder_3')
    reminder3.style.color = 'lightgreen'
}
let abandon1 = document.getElementById("abandon1")
abandon1.addEventListener('click', abandon1function)
function abandon1function() {
    let reminder1 = document.getElementById('personalized_reminder_1')
    reminder1.style.color = 'red'
}
let abandon2 = document.getElementById("abandon2")
abandon2.addEventListener('click', abandon2function)
function abandon2function() {
    let reminder2 = document.getElementById('personalized_reminder_2')
    reminder2.style.color = 'red'
}
let abandon3 = document.getElementById("abandon3")
abandon3.addEventListener('click', abandon3function)
function abandon3function() {
    let reminder3 = document.getElementById('personalized_reminder_3')
    reminder3.style.color = 'red'
}




// /////////////////////////////////////////
// //-------------------------------------------
// ////////////////firebase_work////////////////
// function updateDB() {
//     const data = {
//         USERNAME: 'hi',
//         MESSAGE: 'hello'
//     }
//     const database = firebase.database().ref()
//     database.push(data)
// }
// /*instead of displaying all items as none before user is
// logged in, prevent user from scrolling down to the main page 
// until they are logged in. Once logged in, display the log-in
// prompts as hidden and user DOM to customize the rest of the page.
// */
