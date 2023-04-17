const container = document.querySelector('.container')
let totalUpdate = document.querySelectorAll('.update')
// console.log(totalUpdate.length)

container.addEventListener('click',(e) =>
  {
    // Get element class(es)
    let elementClass = e.target.className;
    // If element has class(es)
    if (elementClass !== '') {
        if(e.target.parentElement.className === 'inline'){
            if(e.target.parentElement.parentElement.parentElement.className === 'update'){
                // console.log(e.target.parentElement.parentElement.parentElement.className)
            
                e.target.parentElement.parentElement.parentElement.setAttribute('class', 'read-update')
                // console.log(e.target.parentElement.parentElement.parentElement.className)

                document.querySelector('.number-of-notifications').textContent = document.querySelectorAll('.update').length;
            }
        }
    }
    if(elementClass === 'read'){
        document.querySelectorAll('.update').forEach(e => e.classList.replace('update', 'read-update'))
        document.querySelector('.number-of-notifications').textContent = document.querySelectorAll('.update').length;
    }
  }
)

