// procurar um botao 
document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField(){
      const newfields = document.querySelector('.schedule-item').cloneNode(true)
          
      const  fields = newfields.querySelectorAll('input')

      fields.forEach(function(field){
        field.value = ""
            })
      document.querySelector('#schedule-items').appendChild(newfields)

}