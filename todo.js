
      NewText = function(){
        t = document.querySelector("main")
        ul = document.createElement("ul")
        li = document.createElement("li")
        ch = document.createElement("input")
        ch.type = "checkbox"
        li1 = document.createTextNode(document.querySelector('#redi').value)
        li.appendChild(ch)
        li.appendChild(li1)
        li.className = document.querySelector('#priority').value
        ul.appendChild(li)
        t.appendChild(ul)
        var checkbox;
        checkbox.type = "checkbox";
        checkbox.onclick = boxChecked;
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
