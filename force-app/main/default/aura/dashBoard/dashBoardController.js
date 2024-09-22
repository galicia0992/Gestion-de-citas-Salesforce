({
    openModalDoc : function(component, event, helper) {
        let open = component.get('v.openModalDoc')
        
       
        if(open == false){
            component.set('v.openModalDoc', true)
        }else{
            component.set('v.openModalDoc', false)
        }
        
    },
    openModalPaciente : function(component, event, helper) {
        let open = component.get('v.openModalPaciente')
        
       
        if(open == false){
            component.set('v.openModalPaciente', true)
        }else{
            component.set('v.openModalPaciente', false)
        }
        
    }
})
