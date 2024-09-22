public inherited sharing class obtenerPacientes {
    @AuraEnabled
    public static List<Paciente__c> listaPacientes(){
       List<Paciente__c> pacientes = [SELECT Id, Name, Segundo_nombre__c, Primer_apellido__c, Segundo_apellido__c, Telefono__c, Edad__c, Peso__c, Estatura__c FROM Paciente__c];
       
       return pacientes;
    }
}
