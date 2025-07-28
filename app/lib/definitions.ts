export type WithTimeStamp = {
    timestamp: string;
}

export type GenericFormData = {
    formName: string;
    jsonData: string
}

export type GenericFormDataWithTimeStamp = GenericFormData & WithTimeStamp

export type HealthDeclarationFormData = {
    name: string;
    temperature: string;
    hasSymptoms: string;
    hasContact: string;
}
