//-----------------------------------
//State
//-----------------------------------

const filterState = {
    id: null,
    parentid: 0,
    firstState: true,
}

const inputFormObject = {
    type: 'text',
    id: 'inputForm',
    text: 'Program',
    class: '',
    classParent: '',
    idParent: ''
}

const btnAddChildren = {
    text: 'Button',
    id: 'btn-add',
    type: 'submit',
    attribute: '',
    class: '',
    classParent: '',
    idParent: '',
    onClick: () => {}
}


let resultState = null;


//-----------------------------------
//Template
//-----------------------------------

const inputForm = (objectParameter) => {

    if(typeof objectParameter === 'undefined')
    {
        objectParameter = inputFormObject;
    }

    return `
        <div id="${objectParameter.idParent}" class="form-group ${objectParameter.classParent}">
            <label for="${objectParameter.id}">${objectParameter.text}</label>
            <input type="${objectParameter.type}" class="form-control ${objectParameter.class}" name="${objectParameter.id}" id="${objectParameter.id}" aria-describedby="emailHelp" placeholder="">
        </div>
    `;
}

const buttonAddChild = (objectParameter) => {

    if(typeof objectParameter === 'undefined')
    {
        objectParameter = btnAddChildren;
    }

    return `
       <div id="${objectParameter.idParent}" class="form-group ${objectParameter.classParent}">
        <button id="${objectParameter.id}" type="${objectParameter.type}" class="btn btn-primary ${objectParameter.class}" onclick="${objectParameter.onbtnClick}" ${objectParameter.attribute}>${objectParameter.text}</button>
       </div>
    `;
}

const masterTemplate = (html, type="row") =>{
    return `
        <div class="${type}">
            ${html}
        </div>
    `;
}

//-----------------------------------
//function method
//-----------------------------------

const onBtnClick = (id, functionPrameter) => {
    
    if(typeof functionPrameter === 'undefined')
    {
        functionPrameter = inputForm();
    }
    
    const childrenId = document.getElementById(id);

    childrenId.innerHTML += functionPrameter;

}

//-----------------------------------
// default
//-----------------------------------

const addingParent = (results) =>{
    return results += inputForm({id:'', text: 'Team', classParent: 'col', idParent: 'children-id'}) + buttonAddChild({classParent: 'col', class: 'mt-4', text: 'Add' , onClick: "onBtnClick('children-id')"});
}

const defaultActions = (outSide) => {
    
    let results = ``;

    if(outSide.id == null)
    {
        console.log('id cannot be null')
        return;
    }

    const masterParent = document.getElementById(outSide.id);

    results += inputForm({text: 'Program', classParent: 'col'});

    if(filterState.firstState)
    {
        filterState.firstState = false;
        resultState = addingParent(results);
        masterParent.innerHTML = masterTemplate(resultState);
    }else{
        
        resultState += addingParent(results);
        masterParent.innerHTML = masterTemplate(resultState);
    }

}

