({
    openModal : function(component, event, helper) {
        let open = component.get('v.open')
        console.log(open)
       
        if(open == false){
            component.set('v.open', true)
        }else{
            component.set('v.open', false)
        }
        console.log(open)
    }
})
