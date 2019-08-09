"use strict";


//generic function for inserting a two column table
function insertTableData(list, tBody)
{
    let row1 = tBody.insertRow(0);
    let cell1Name = row1.insertCell(0);
    let cell2Name = row1.insertCell(1);
    cell1Name.innerHTML = "Name of Park";
    cell2Name.innerHTML = list.LocationName;

    let row2 = tBody.insertRow(1)
    let cell3Address = row2.insertCell(0);
    let cell4Address = row2.insertCell(1);
    cell3Address.innerHTML = "Address";
    cell4Address.innerHTML = list.Address + ", " + list.City + ", " + list.State + " " + ZipCode;

    let row3 = tBody.insertRow(2)
    let cell5Phone = row3.insertCell(0);
    let cell6Phone = row3.insertCell(1);
    cell5Phone.innerHTML = "Phone Number";
    cell6Phone.innerHTML = list.Phone;

    let row4 = tBody.insertRow(3)
    let cell7Fax = row4.insertCell(0);
    let cell8Fax = row4.insertCell(1);
    cell7Fax.innerHTML = "Fax Number";
    cell8Fax.innerHTML = list.Fax;

    let row5 = tBody.insertRow(4)
    let cell9Lat = row5.insertCell(0);
    let cell10Lat = row5.insertCell(1);
    cell9Lat.innerHTML = "Latitude";
    cell10Lat.innerHTML = list.Latitude;

    let row6 = tBody.insertRow(5)
    let cell11Long = row6.insertCell(0);
    let cell12Long = row6.insertCell(1);
    cell11Long.innerHTML = "Longitude";
    cell12Long.innerHTML = list.Longitude;

    let row7 = tBody.insertRow(5)
    let cell13coords = row7.insertCell(0);
    let cell14coords = row7.insertCell(1);
    cell13coords.innerHTML = "Location";
    cell14coords.innerHTML = list.Location.coordinates;
}

//creating a table when sorting by a category (includes clearing just the body of the table)
function createSearchByStateTable(list, selection)
{
    let tBody = document.getElementById("tableBody");

    /* while (tBody.childNodes.length)
    {
        tBody.removeChild(tBody.childNodes[0]);
    } */
    for (let i = 0; i < list.length; i++)
    {
        if (selection.value == list[i].state)
        {
            insertTableData(list[i], tBody);
        }
    }
}

//window onload
window.onload = function ()
{
    let states = [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "DC",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ];
    let stateSelectInput = document.querySelector("#stateSelect");

    for (let i = 0; i < states.length; i++)
    {
        let element1 = document.createElement("option");
        element1.text = states[i];
        element1.value = states[i];
        stateSelectInput.appendChild(element1);
    }

    let parkType = [
        "National Park",
        "National Monument",
        "Recreation Area",
        "Scenic Trail",
        "Battlefield",
        "Historic",
        "Memorial",
        "Preserve",
        "Island",
        "River",
        "Seashore",
        "Trail",
        "Parkway"
    ];
    let parkTypeSelectInput = document.querySelector("#parkTypeSelect");

    for (let i = 0; i < parkType.length; i++)
    {
        let element2 = document.createElement("option");
        element2.text = parkType[i];
        element2.value = parkType[i];
        parkTypeSelectInput.appendChild(element2);
    }

    let objects;
    $.getJSON("data/nationalparks.json", function (parks)
    {
        objects = parks;
        console.log(objects);
    }); //closing JSON object

    //defining buttons
    let searchByStateBtn = document.querySelector("#searchByStateBtn")
    let searchByParkTypeBtn = document.querySelector("#searchByParkTypeBtn")
    let stateGoBtn = document.querySelector("#stateGoBtn")
    let parkTypeGoBtn = document.querySelector("#parkTypeGoBtn")

    searchByStateBtn.onclick = function()
    {
        //make this display = "block"
    }

    searchByParkTypeBtn.onclick = function()
    {
        //make this display = "block"
    }

    stateGoBtn.onclick = function ()
    {
        createSearchByStateTable(objects, stateSelectInput);
    }
}