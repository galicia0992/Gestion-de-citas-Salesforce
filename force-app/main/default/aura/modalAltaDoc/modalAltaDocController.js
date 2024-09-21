({
    myAction : function(component, event, helper) {

    },
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record " + + event.getParam("id") + " has been created successfully."
        });
        toastEvent.fire();
        component.set('v.open', false)
    },
    closeModal : function (component) {
        component.set('v.open', false)
    }
})
