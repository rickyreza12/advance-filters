//-----------------------------------
//State
//-----------------------------------

const firstState = {
    parentid = 0,
}


//-----------------------------------
//Template
//-----------------------------------

const defaultTemplate = (child = false, parentid = firstState.parentid) => {
    result = `
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="text" class="form-control" id="parent-${parentid}" placeholder="name@example.com">
    `;

    if(child = true)
    {

    }

    result += `</div>`;

    return result;
}

//-----------------------------------
//Document Ready
//-----------------------------------

(()=>{
    // alert('helo');
})()