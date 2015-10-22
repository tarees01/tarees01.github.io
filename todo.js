
 NewText = function(){
        t = document.querySelector("main")
        ul = document.querySelector("#tasklist")
        li = document.createElement("li")
        ch = document.createElement("input")
        ch.type = "checkbox"
        ch.onclick = boxChecked;
        li1 = document.createTextNode(document.querySelector('#redi').value)
        li.appendChild(ch)
        li.appendChild(li1)
        li.className = document.querySelector('#priority').value
        ul.appendChild(li)
        t.appendChild(ul)
        localSave("tasklist");
        
      }
      boxChecked = function(){
        if (this.checked){
          this.parentNode.classList.add("done");
          localSave("tasklist");
      }
        else{
          this.parentNode.classList.remove("done");
          localSave("tasklist");
        }
      }
