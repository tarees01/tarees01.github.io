
      NewText = function(){
        li = document.createElement("li")
        ch = document.createElement("input")
        ch.type = "checkbox"
        ch.onclick = boxChecked;
        li1 = document.createTextNode(document.querySelector('#redi').value)
        li.appendChild(ch)
        li.appendChild(li1)
        li.className = document.querySelector('#priority').value
        localSave("tasklist");
        
      }
      boxChecked = function(){
        if (this.checked){
          this.parentNode.classList.add("Done");
          localSave("tasklist");
      }
        else{
          this.parentNode.classList.romove("Done");
          localSave("tasklist");
        }
      }
