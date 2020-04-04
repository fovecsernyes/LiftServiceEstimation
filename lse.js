//standing time calculated by the controller
function GetStandingTime(){
    return 20;
}

//time spent travelling from floor to floor
const _travelTime = 3;

//init function initializes the html
function Init()
{
    document.write("<table border='1'>");
    document.write("<tr>");
    document.write("<th>Floor</th>");
    document.write("<th>&#x2191;</th>");
    document.write("<th>&#x2193;</th>");
    document.write("<th>&#x2191;Elevator&#x2193;</th>");
    document.write("<th>&#x2191;Person&#x2193;</th>");
    document.write("</tr>");

    for (var a=10; 0 <= a; a--)
    {
        document.write("<tr>");
            document.write("<td>"+ a +"</td>");
            document.write("<td> <input type='checkbox' id='f_up" + a + "'/> </td>");
            document.write("<td> <input type='checkbox' id='f_down" + a + "'/> </td>");
            document.write("<td> <input type='radio' name='person' id='e_up" + a + "'/> <input type='radio' name='person' id='e_down" + a + "'/> </td>");
            document.write("<td> <input type='radio' name='elevator' id='p_up" + a + "'/> <input type='radio' name='elevator' id='p_down" + a + "'/> </td>");
        document.write("</tr>");
    }
    document.write("</table>");
    //disable some input on top and bottom
    ["f_up10", "f_down0", "e_up10", "e_down0", "p_up10", "p_down0"].forEach(e => document.getElementById(e).disabled = true);

    //set default values for checkboxes
    ["e_up0", "p_down10"].forEach(e => document.getElementById(e).checked = true);

    document.write("<input type='button' value='Calculate' onclick='Calc()'>");
}

//this function is called when calculated button is pressed
function Calc()
{
    var travellingPlan = GetTravellingPlan();
    var position = GetPosition();
    var target = GetTarget();

    var result = ServiceTimeEstimate(travellingPlan, position, target);

    alert("Arriving time is: " + result);
}

//gets the travelling plan
function GetTravellingPlan()
{
    return 0;
}

//gets the position and direction
function GetPosition()
{
    return 0;
}

//get the target position and direction
function GetTarget()
{
    return 0;
}

//the estimate function
function ServiceTimeEstimate(travellingPlan, position, target)
{
    return 1;
}

//function to be executed when initializing the app
Init();