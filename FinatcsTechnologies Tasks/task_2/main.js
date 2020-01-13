addg = true;
editg = false;
let updateTarget;
let alldata = [];

function clearInput() {

    document.getElementById("name").value = null

    document.getElementById("age").value = null
}

class user {
    constructor(name, age) {
        return { name, age }
    }

}
class push extends user {
    constructor(name, age) {
        alldata.push(super(name, age));
    }
}function add() {
  
if (!( (document.getElementById("name").value === "")||(document.getElementById("age").value == ""))) {
    

        if (addg) {
            let push1 = new push(
                document.getElementById("name").value,
                document.getElementById("age").value
            )
            clearInput()
        }
        if (editg) {

            document.getElementById("add").innerHTML = "Add data";
            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value
            alldata.splice(updateTarget, 1, { name, age })

            showAll()

            addg = true;
            editg = false;
            clearInput()

        }



    

}else{
    alert("invalid input")
}}
function deleteAll(event) {
    while (alldata.length > 0) {
        alldata.pop();
    }
    console.log(alldata);

    console.log(event.target.value);
    showAll()

}
function showAll() {
    document.getElementById("data").innerHTML = "";

    alldata.map((element, index) => {

        let line = document.createElement("div")
        let delbtn = document.createElement("button")
        let editbtn = document.createElement("button")
        let div = document.createElement("div")
        div.setAttribute("class", "row")

        line.appendChild(div)
        let div_ina = document.createElement("div")
        let div_i = document.createElement("div")
        let div_n = document.createElement("div")
        let div_a = document.createElement("div")
        div.appendChild(div_ina)
        div_i.appendChild(document.createTextNode((index + 1)))
        div_n.appendChild(document.createTextNode("name : " + element.name))
        div_a.appendChild(document.createTextNode("age: " + element.age))
        div_i.setAttribute("class", "index")
        div_n.setAttribute("class", "name")
        div_a.setAttribute("class", "age")
        div_ina.appendChild(div_i)
        div_ina.appendChild(div_n)
        div_ina.appendChild(div_a)




        div.appendChild(delbtn)

        div.appendChild(editbtn)


        delbtn.innerHTML = "delete "
        delbtn.setAttribute("value", index)
        delbtn.setAttribute("onclick", "del(event)")
        delbtn.setAttribute("class", "btn")

        editbtn.innerHTML = "edit "
        editbtn.setAttribute("value", index)
        editbtn.setAttribute("onclick", "edit(event)")
        editbtn.setAttribute("class", "btn")

        document.getElementById("data").appendChild(line);
    })

}
function del(event) {
    alldata.splice(event.target.value, 1)
    showAll()
}
function edit(event) {


    document.getElementById("name").value = alldata[event.target.value].name;

    document.getElementById("age").value = alldata[event.target.value].age;
    editg = true;
    addg = false;
    document.getElementById("add").innerHTML = "Update";
    updateTarget = event.target.value;


}