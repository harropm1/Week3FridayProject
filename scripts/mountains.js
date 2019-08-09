"use strict";


//generic function for inserting a two column table
function insertTableData(list, tBody)
{
    let row1 = tBody.insertRow(0);
    let cell1Name = row1.insertCell(0);
    let cell2Name = row1.insertCell(1);
    cell1Name.innerHTML = "Name";
    cell2Name.innerHTML = list.name;

    let row2 = tBody.insertRow(1)
    let cell3Elevation = row2.insertCell(0);
    let cell4Elevation = row2.insertCell(1);
    cell3Elevation.innerHTML = "Elevation";
    cell4Elevation.innerHTML = list.elevation;

    let row3 = tBody.insertRow(2)
    let cell5Effort = row3.insertCell(0);
    let cell6Effort = row3.insertCell(1);
    cell5Effort.innerHTML = "Effort";
    cell6Effort.innerHTML = list.effort;

    let mtnImage = document.createElement("img");
    mtnImage.src = "images/" + list.img;
    mtnImage.alt = list.name;
    
    let row4 = tBody.insertRow(3)
    let cell7Image = row4.insertCell(0);
    let cell8Image = row4.insertCell(1);
    cell7Image.innerHTML = "Picture";
    cell8Image.appendChild(mtnImage);

    let row5 = tBody.insertRow(4)
    let cell9Desc = row5.insertCell(0);
    let cell10Desc = row5.insertCell(1);
    cell9Desc.innerHTML = "Description";
    cell10Desc.innerHTML = list.desc;

    let row6 = tBody.insertRow(5)
    let cell11LatLong = row6.insertCell(0);
    let cell12LatLong = row6.insertCell(1);
    cell11LatLong.innerHTML = "Latitude and Longitude";
    cell12LatLong.innerHTML = "Latitude: " + list.coords.lat + ", Longitude: " + list.coords.lng;
}

//creating a table when sorting by a category (includes clearing just the body of the table)
function createTable(list, selection)
{
    let tBody = document.getElementById("tableBody");

    while (tBody.childNodes.length)
    {
        tBody.removeChild(tBody.childNodes[0]);
    }
    for (let i = 0; i < list.length; i++)
    {
        if (selection.value == list[i].name)
        {
            insertTableData(list[i], tBody);
        }
    }
}

//window onload
window.onload = function ()
{
    let objects;

    let mountainSelectInput = document.querySelector("#mountainSelect");

    $.getJSON("data/mountains.json", function (data)
    {
        objects = data.mountains;
        for (let i = 0; i < objects.length; i++)
        {
            let mountainName = objects[i].name;
            let element = document.createElement("option");
            element.text = mountainName;
            element.value = mountainName;
            mountainSelectInput.appendChild(element);
        }
    }); //closing JSON object

    //defining variables
    let mountainBtn = document.querySelector("#mountainBtn")

    mountainBtn.onclick = function ()
    {
        createTable(objects, mountainSelectInput);
    }
}