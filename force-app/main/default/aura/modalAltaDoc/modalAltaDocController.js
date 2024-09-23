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
        let refreshDoctorDatatable = $A.get('e.c:doctoresDatatableRefresh')
        refreshDoctorDatatable.fire()
        component.set('v.openModalDoc', false)
    },
    closeModal : function (component) {
        component.set('v.openModalDoc', false)
    }
})
