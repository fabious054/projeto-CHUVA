
(function (){

    let summaryOppner = document.getElementById('summary-oppener');
    let ocultSummary = document.getElementById('summary-hiden');
    let btnPrincipal = document.getElementById('btn1');
    let painelPrincial = Array.from(document.getElementsByClassName('discuss-content'));
    let painelInput = Array.from(document.getElementsByClassName('discuss-write-topic'));
    let painelConfirmation = Array.from(document.getElementsByClassName('discuss-topic-send'));
    let btnSendNewTopic = document.getElementById('btn-2');
    let btnNewTopic2 = document.getElementById('btn-3');

    summaryOppner.addEventListener('click',()=>{

        ocultSummary.style.display = 'block';
        summaryOppner.style.opacity ='0'

    });

    ocultSummary.addEventListener('click',()=>{

        summaryOppner.style.opacity = '100';
        ocultSummary.style.display = 'none'

    })

    btnPrincipal.addEventListener('click',()=>{

        painelPrincial.forEach(item => item.style.display = 'none');
        painelInput.forEach(item=> item.style.display = 'flex');

    })

    btnSendNewTopic.addEventListener('click',()=>{

        painelInput.forEach(item=> item.style.display = 'none');
        painelConfirmation.forEach(item=> item.style.display = 'flex');

    })

    btnNewTopic2.addEventListener('click',()=>{

        painelPrincial.forEach(item => item.style.display = 'none');
        painelInput.forEach(item=> item.style.display = 'flex');

    })
    likesCount();
    showComments();
    menuOpener();

})();

function likesCount(){
    
    let btnLike1 = document.getElementById('btnLike1');
    let btnLike2 = document.getElementById('btnLike2');
    let BoxLike1 = document.getElementById('likeBox1');
    let BoxLike2 = document.getElementById('likeBox2');
    let like = 1;
    let like2 = 1;

    btnLike1.addEventListener('click',()=>{

    like ++;
    BoxLike1.innerHTML = `${like } likes`

    });

    btnLike2.addEventListener('click',()=>{

    like2++;
    BoxLike2.innerHTML = `${like2} likes`

    });
    
}

function showComments() {
    
    let showComments = document.getElementById('showComments');
    let comments = Array.from(document.getElementsByClassName('comment-card'));

    showComments.addEventListener('click',()=>{ 

        comments.forEach(card=>{
            if(card.style.display == 'block'){
                card.style.display = 'none';
            } else {
                card.style.display = 'block';
            }
        })

    })
};

function menuOpener(){
    let btnMenuOpener = document.getElementById('menu-btn') ;
    let menu = Array.from(document.getElementsByClassName('side-bar')) ;

    btnMenuOpener.addEventListener('click',()=>{

        menu.forEach(menu=>{

            if(menu.classList.contains('side-bar-position-open')){

                menu.classList.remove('side-bar-position-open');
                menu.classList.contains('side-bar-position-close');
                document.documentElement.style.overflow = 'scroll'
                
            } else{
                menu.classList.add('side-bar-position-open');
                document.documentElement.style.overflow = 'hidden';
            }
        })

    })
}