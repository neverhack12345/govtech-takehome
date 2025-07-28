import { z } from "zod";

export const HealthDeclarationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  temperature: z.coerce
    .number({ error: "Please enter a number for Temperature (°C)" })
    .min(34, { message: "Temperature (°C) must be more than 34" })
    .max(42, { message: "Temperature (°C) must be less than 42" }),
  hasSymptoms: z.coerce.boolean({ error: "Cannot convert hasSymptoms to boolean"}),
  hasContact: z.coerce.boolean({ error: "Cannot convert hasContact to boolean"}),  
});
