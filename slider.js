 var lastIndex = 0;
        var images = document.querySelectorAll('.slide img');
    
    images.forEach((item, index)=>{

    document.querySelectorAll('.ball .indicador')[index].addEventListener('click', ()=>{
            let lastImg = document.querySelectorAll('.slide img')[lastIndex];
            let newImg = document.querySelectorAll('.slide img')[index];
            
        document.querySelectorAll('.ball .indicador')[lastIndex].classList.remove('ativo');
        document.querySelectorAll('.ball .indicador')[index].classList.add('ativo');

            lastImg.style.opacity = 0;
            newImg.style.opacity = 1;

        lastIndex = index;
        })
    })
