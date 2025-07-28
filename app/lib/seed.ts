import { HEALTH_DECLARATION_FORM_NAME } from "./constants"
import { GenericFormDataWithTimeStamp } from "./definitions"

export const HealthDeclarationFormDataWithTimeStampSeed = () => {
  const names: string[] = ["Tom", "John", "Harry", "Bob"]
  const temps: string[] = ["36.5", "37.2", "41.2", "35.1"]
  const symptoms: string[] = ["false", "true", "false", "true"]
  const contacts: string[] = ["true", "false", "false", "true"]
  const now = new Date()
  const result : (GenericFormDataWithTimeStamp)[] = []
  for (let i = 0; i < names.length; i++) {
    result.push({
      timestamp: now.toISOString(),
      formName: HEALTH_DECLARATION_FORM_NAME,
      jsonData: JSON.stringify({
        name: names[i],
        temperature: temps[i],
        hasSymptoms: symptoms[i],
        hasContact: contacts[i]
      })
    });
  }
  return result;
}
