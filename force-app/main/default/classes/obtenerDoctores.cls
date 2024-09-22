public inherited sharing class obtenerDoctores {
    public static List<Doctores__c> listaDoctores(){
        List<Doctores__c> doctores = [SELECT Id, Name, Segundo_nombre__c, Primer_apellido__c, Segundo_apellido__c, Telefono__c, Especialidad__c, Costo__c FROM Doctores__c];
        
        return doctores;
    }
}
