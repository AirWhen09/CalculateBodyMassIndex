function getScore(){
    let score1 = 90;
    let score2 = 88;
    let name = 'Erwin';

    function add(){
        return `${name} scored: ${score1 + score2}`;
    }

    return add();
}

// alert(getScore());


function ask(question, yes, no){
    if(confirm(question)){
        showOk();
    }else{
        showCancel();
    }
}

function showOk(){
    alert("You Agreed");
}

function showCancel(){
    alert("You disagreed");
}

ask("You want to take a mini break?", showOk(), showCancel());