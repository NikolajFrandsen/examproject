         


function CreateTableFromJSON(){
    var emptyBucket = JSON.parse(localStorage.getItem("bucketItems"));

    var col = [];
    for (var i = 0; i < emptyBucket.length; i++){
        for (var key in emptyBucket[i]){
            if (col.indexOf(key) === -1){
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    // HEADER --> Remove brackets to see. 
    // for (var i = 0; i < col.length; i++){
    //     var th = document.createElement("th");
    //     th.innerHTML = col[i];
    //     tr.appendChild(th);
    // }

    for (var i = 0; i < emptyBucket.length; i++){
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++){
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = emptyBucket[i][col[j]];
        }
    }

    var divContainer = document.getElementById('showbucketlist');
    divContainer.innterHTML = "";
    divContainer.appendChild(table);
}

  

// function jsonToTable(json, classes){
//     var cols = Object.keys(json[0]);
//     var headerRow = '';
//     var bodyRows = '';

//     classes = classes || '';

//     function capitalizeFirstLetter(string){
//         return 
//         string.charAt(0).toUppercase() + string.slice(1);
//     }

//     cols.map(function(col){
//         headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
//     });

//     json.map(function(row){
//         bodyRows += '<tr>';

//         cols.map(function(colName){
//             bodyRows += '<td>' + row[colName] + '</td>';
//         })

//         bodyRows += '</tr>';
//     });

//     return '<table class="' +
//          classes +
//          '"><thead><tr>' +
//          headerRow +
//          '</tr></thead><tbody>' +
//          bodyRows +
//          '</tbody></table>';

// }

// document.getElementById('showbucketlist') = jsonToTable(emptyBucket, 'table');