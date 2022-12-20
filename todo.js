document.getElementById('push').addEventListener('click', () => {
    if (document.getElementById('text1').value.length == 0) {
        alert("Please Enter the Taskfield")
    } else {
        document.getElementById('task').innerHTML +=
            `<div class="task2">
        <span id='new'>
           ${document.getElementById('text1').value}
        </span> 
        <button class="delete">DEL</button>
        </div>`
    ;
      let current = document.querySelectorAll('.delete')
            for(let i =0;i<current.length;i++){
                current[i].addEventListener("click",(e)=>{
                    e.target.parentNode.remove();
                })
                }
              
            }
    })

    document.getElementById("text1").addEventListener("keyup",(event)=>{
        if(event.key == "Enter"){
            document.getElementById('task').innerHTML +=
            `<div class="task2">
        <span id='new'>
           ${document.getElementById('text1').value}
        </span> 
        <button class="delete">DEL</button>
        </div>`
        }
     });
     
   