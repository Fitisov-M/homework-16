let mainId = document.getElementById('main');
let color = mainId.lastElementChild;
color.style.backgroundColor = 'red';

let wrapperId = document.getElementById('wrapper');
let change = function(){
    let first = wrapperId.firstElementChild;
    let last = wrapperId.lastElementChild;
    first.before(last);
}
change();

// 2


let question = confirm('Change img?');
let img = function(value){
    if (value === true){
        let link = prompt('link');
        let paraph = document.createElement('p');
        let newText = document.createTextNode(`<img src="${link}" alt="#">`);
        paraph.append(newText);
        let div = document.getElementById('wrapper1');
        div.after(paraph);
    }
}
img(question);


