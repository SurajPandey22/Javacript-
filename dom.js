

// function attach(content) {

// // console.log("hello coder army");
// const ele=document.createElement('li');
// ele.innerHTML=content;
// const par=document.getElementById('root');
// par.append(ele,"hello world");
// }

// attach("TS");
// attach("React");
// attach("Node");

// const a=document.createTextNode("Hello Suraj")

// const att=document.getElementById("root");
// att.append(a);

// const t=document.createAttribute('id');
// t.value="first";

// const curr_att=document.querySelector('li');
// curr_att.setAttributeNode(t);

// const parent=document.getElementById('root');

// const st=document.createAttribute("id");
// st.value="sec";
// parent.children[1].setAttributeNode(st);

// const l=document.getElementById("root");
// console.log(l.getAttribute("id"));
// l.setAttribute("id","root1");
// l.removeAttribute("id");





// const par=document.getElementById("root");

// const ele=document.createElement('li');
// ele.innerHTML="TS";
// par.prepend(ele);

// const child2=par.children[2];

// par.insertBefore(ele,child2);   // give two refrence child2 for before

// par.replaceChild(ele,child2);    //fist new secound old

// par.innerHTML+="<li>TypeScrpt</li>"



const par=document.getElementById("root");

const ele=document.createElement("div");

ele.innerHTML="Hello World";

par.insertAdjacentElement("beforebegin",ele);