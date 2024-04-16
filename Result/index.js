let id = -1;

const showInTable = (ele) => {
    document.getElementById("name").value = ele.name;
    document.getElementById("rollNo").value = ele.rollNo;
    document.getElementById("hindi").value = ele.hindi;
    document.getElementById("english").value = ele.english;
    document.getElementById("math").value = ele.math;
    document.getElementById("submit").innerHTML = "Update";

    id = ele.id;
    console.log(id);
    console.log(ele);
    // updateData(ele.id, ele)();
}
const showData = (data) => {
    document.getElementById("tbody").innerHTML = "";
    data.map((ele,index) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerHTML = index + 1
        // tr.innerHTML = index + 1
        let td1 = document.createElement("td");
        td1.innerHTML = ele.name
        let td2 = document.createElement("td");
        td2.innerHTML = ele.rollNo
        let td3 = document.createElement("td");
        if (ele.hindi >= 0 && ele.hindi <= 100) {
            td3.innerHTML = ele.hindi
        } else {
            alert("Please enter mark between 0 and 100")
            console.log("Please enter mark between 0 and 100")
        }
        let td4 = document.createElement("td");
        if (ele.english >= 0 && ele.english <= 100) {
            td4.innerHTML = ele.english
        } else {
            alert("Please enter mark between 0 and 100")
            console.log("Please enter mark between 0 and 100")
        }
        
        let td5 = document.createElement("td");
        if (ele.math >= 0 && ele.math <= 100) {
            td5.innerHTML = ele.math
        } else {
            alert("Please enter mark between 0 and 100")
            console.log("Please enter mark between 0 and 100")
        }
        
        let td6 = document.createElement("td");
        td6.innerHTML = Number(ele.hindi)+ Number(ele.english) + Number(ele.math)
        let td7 = document.createElement("td");
        if ((ele.hindi >= 0 && ele.hindi <= 100) && (ele.math >= 0 && ele.math <= 100) && (ele.english >= 0 && ele.english <= 100)) { 
            if (Number(ele.hindi) >= 35 && Number(ele.english) >= 35 && Number(ele.math) >= 35) {
                td7.innerHTML = "Pass"
                td7.style.color = "green"
            } else {
                td7.innerHTML = "Fail"
                td7.style.color = "red"
            }
        }
        // else {
        //     alert("Please enter mark between 0 and 100")
        //     console.log("Please enter mark between 0 and 100")
        // }
        let updateBtn = document.createElement("button");
        updateBtn.innerHTML = "Update"
        updateBtn.addEventListener("click", () => showInTable(ele));
        updateBtn.setAttribute("class", "btn btn-outline-secondary");
        let td8 = document.createElement("td")
        td8.append(updateBtn);
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("class", "btn btn-outline-secondary")
        deleteBtn.addEventListener("click", () => deleteData(ele.id));
        let td9 = document.createElement("td")
        td9.append(deleteBtn);
        tr.append(th,td1, td2, td3, td4, td5, td6, td7, td8, td9)
        
        if ((ele.hindi >= 0 && ele.hindi <= 100) && (ele.math >= 0 && ele.math <= 100) && (ele.english >= 0 && ele.english <= 100)) { 
            document.getElementById("tbody").append(tr)
        }
        // else {
        //     alert("Please enter mark between 0 and 100")
        //     console.log("Please enter mark between 0 and 100")
        // }
   
    })
}

const updateData = async(id, student) => { 
    let response = await fetch(`http://localhost:3000/result/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    });
    let data = await response.json();
    console.log(data);
    getdata();
}

const deleteData = async (id) => { 
    let response = await fetch(`http://localhost:3000/result/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    let data = await response.json();
    console.log(data);
    getdata();
}

const getdata = async () => { 
    let response = await fetch("http://localhost:3000/result");
    let data = await response.json();
    console.log(data);
    showData(data);
}
getdata()
const PostData = async (student) => {
    const response = await fetch('http://localhost:3000/result', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    });
    const data = await response.json();
    console.log(data);
}
const handleSubmit = (e) => { 
    e.preventDefault();
    let student = {
        name: document.getElementById("name").value,
        rollNo: document.getElementById("rollNo").value,
        hindi: document.getElementById("hindi").value,
        english: document.getElementById("english").value,
        math:document.getElementById("math").value
    }
    console.log(student);
    if (id !== -1) {
        updateData(id, student)();
    }
    else {
        PostData(student)
    }
}


document.getElementById("form").addEventListener("submit", handleSubmit);