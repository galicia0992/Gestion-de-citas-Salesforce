({
    fetchData : function(component) {
        let action = component.get('c.listaDoctores')
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Asignar el resultado al atributo 'resultado'
                component.set("v.data", response.getReturnValue());
            } else {
                console.log("Error en el llamado a Apex: " + state);
            }
        });

        // Ejecutar la llamada al método Apex
        $A.enqueueAction(action);
    }
})
