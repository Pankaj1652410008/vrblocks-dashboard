const addLiquidityList = async () => {    
    await fetch("./assets/js/affiliteReward.json").then(response => {
        return response.json();
    }).then(jsondata => {
    
      var z = localStorage.getItem("tokenByUser")
      //console.log(z)
      if(z){
        z=JSON.parse(z)
        //console.log(z)
        jsondata = z.concat(jsondata)
        //console.log(jsondata)
        //console.log(jsondata.length)
      }
      //console.log(jsondata)
    
        var table = document.getElementById("table1");        
        var table2 = document.getElementById("table2");        
        var table3 = document.getElementById("table3");        
        var table4 = document.getElementById("table4");        
        var table5 = document.getElementById("table5");        
        var table6 = document.getElementById("table6");        
        var table7 = document.getElementById("table7");        
        var table8 = document.getElementById("table8");        
        var table9 = document.getElementById("table9");        
        var table10 = document.getElementById("table10");        
        var table11 = document.getElementById("table11");        
        var table12 = document.getElementById("table12");        
        var table13 = document.getElementById("table13");        
        var table14 = document.getElementById("table14");        
        var table15 = document.getElementById("table15");        
        // table.innerHTML =""
        // table2.innerHTML =""
       
        for(var i = 0;i < jsondata.length;i++ ){
            // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(i);
                var row2 = table2.insertRow(i);
                var row3 = table3.insertRow(i);
                var row4 = table4.insertRow(i);
                var row5 = table5.insertRow(i);
                var row6 = table6.insertRow(i);
                var row7 = table7.insertRow(i);
                var row8 = table8.insertRow(i);
                var row9 = table9.insertRow(i);
                var row10 = table10.insertRow(i);
                var row11 = table11.insertRow(i);
                var row12 = table12.insertRow(i);
                var row13 = table13.insertRow(i);
                var row14 = table14.insertRow(i);
                var row15 = table15.insertRow(i);
    
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                // var cell1 = row.insertCell(0);
                var cell1 = row.insertCell(0);
                var cell2 = row2.insertCell(0);
                var cell3 = row3.insertCell(0);
                var cell4 = row4.insertCell(0);
                var cell5 = row5.insertCell(0);
                var cell6 = row6.insertCell(0);
                var cell7 = row7.insertCell(0);
                var cell8 = row8.insertCell(0);
                var cell9 = row9.insertCell(0);
                var cell10 = row10.insertCell(0);
                var cell11 = row11.insertCell(0);
                var cell12 = row12.insertCell(0);
                var cell13 = row13.insertCell(0);
                var cell14 = row14.insertCell(0);
                var cell15 = row15.insertCell(0);
                       
                // var cell2 = row.insertCell(1);
    
                cell1.innerHTML = jsondata[i].levelName;
                cell2.innerHTML = jsondata[i].levelName;
                cell3.innerHTML = jsondata[i].levelName;
                cell4.innerHTML = jsondata[i].levelName;
                cell5.innerHTML = jsondata[i].levelName;
                cell6.innerHTML = jsondata[i].levelName;
                cell7.innerHTML = jsondata[i].levelName;
                cell8.innerHTML = jsondata[i].levelName;
                cell9.innerHTML = jsondata[i].levelName;
                cell10.innerHTML = jsondata[i].levelName;
                cell11.innerHTML = jsondata[i].levelName;
                cell12.innerHTML = jsondata[i].levelName;
                cell13.innerHTML = jsondata[i].levelName;
                cell14.innerHTML = jsondata[i].levelName;
                cell15.innerHTML = jsondata[i].levelName;
                // cell1.innerHTML = "";
                // cell2.innerHTML = jsondata[i].affiliteEarn;
    
                /////////////////////////////////////
                // var img = document.createElement('img');
                // img.src = jsondata[i].tokenImage
                // cell1.appendChild(img)
    
                /////////////////////////////////////
                
    
                //console.log(jsondata[i])
    
        }
    })
    // addRowHandlers3()
    }
    addLiquidityList()
    
    
    
    // function addRowHandlers3() {
    //     var table = document.getElementById("table3");
    //     var rows = table.getElementsByTagName("tr");
    //     //console.log(rows.length)
    //     for (i = 0; i < rows.length; i++) {
    //       var currentRow = table.rows[i];
    //       var createClickHandler = function(row) {
    //         return function() {
    //           var name = row.getElementsByTagName("td")[1];
    //           var image = row.getElementsByTagName("td")[0];
    //           var contractAddress = row.getElementsByTagName("td")[2];
    //           //console.log(name.innerHTML, image.innerHTML, contractAddress.innerHTML)
    //           //var id = cell//cell.innerHTML;
    //           //alert("id:" + id);
    //           updateLiquidityUpperBtn(name.innerHTML, image.innerHTML, contractAddress.innerHTML)
    //         };
    //       };
    //       currentRow.onclick = createClickHandler(currentRow);
    //     }
    //   }
    

      // function updateLiquidityUpperBtn(name, image, contractAddress) {
      //   myLiquiditySelect()
      //   console.log(image)
      //   var regex = /(?<=\")(.*?)(?=\")/ ;
      //   var url = regex.exec(image)
      //   //console.log(url[0])
        
      //   document.getElementById('liquidityMessage').innerHTML = name
      //   document.getElementById('myImage3').src = url[0]
      //   updateTokenBal2()
      // }
   