({
    init : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Nombre', fieldName: 'Name', type: 'text'},
            {label: 'Segundo Nombre', fieldName: 'Segundo_nombre__c', type: 'text'},
            {label: 'Primer Apellido', fieldName: 'Primer_apellido__c', type: 'text'},
            {label: 'Segundo Apellido', fieldName: 'Segundo_apellido__c', type: 'text'},
            {label: 'Telefono', fieldName: 'Telefono__c', type: 'phone'},
            {label: 'Especialidad', fieldName: 'Especialidad__c', type: 'text'},
            {label: 'Costo', fieldName: 'Costo__c', type: 'currency'}
        ]);
        helper.fetchData(component)
    }
})
