'use client';

import React, { Fragment, useState } from "react";
import HealthDeclarationForm from "@/app/components/health_declaration_form"
import HealthDeclarationTable from "@/app/components/health_declaration_table"
import { HealthDeclarationSchema } from "@/app/lib/form_schemas";
import { HEALTH_DECLARATION_FORM_NAME } from "@/app/lib/constants";
import { GenericFormDataWithTimeStamp, HealthDeclarationFormData, WithTimeStamp } from "@/app/lib/definitions";
import { HealthDeclarationFormDataWithTimeStampSeed } from "../lib/seed";

type HealthDeclarationFormDataWithTimeStamp = HealthDeclarationFormData & WithTimeStamp

export default function HealthDeclaration() {
  const [data, setData] = useState<GenericFormDataWithTimeStamp[]>(HealthDeclarationFormDataWithTimeStampSeed);
  const [formError, setFormError] = useState<string>("");

  const handleFormSubmit = (data: HealthDeclarationFormData): boolean => {
    const validatedFields = HealthDeclarationSchema.safeParse(data);
    if (!validatedFields.success) {
      setFormError(String(validatedFields.error.issues.at(0)?.message))
      return false;
    }
    const now = new Date();
    const tmpData: GenericFormDataWithTimeStamp = {
      timestamp: now.toISOString(),
      formName: HEALTH_DECLARATION_FORM_NAME,
      jsonData: JSON.stringify(data)
    }
    setData((prev) => [...prev, tmpData]);
    setFormError("");
    return true;
  };

  const healthDeclarationData: HealthDeclarationFormDataWithTimeStamp[] = data
  .filter((formData) => formData.formName === HEALTH_DECLARATION_FORM_NAME)
  .map((formData) => {
    const result: HealthDeclarationFormDataWithTimeStamp = JSON.parse(formData.jsonData) as HealthDeclarationFormDataWithTimeStamp
    result.timestamp = formData.timestamp;
    return result;
  });

  return (
		<Fragment>
			<HealthDeclarationForm onSubmit={handleFormSubmit} error={formError}/>
			<div className="mt-16" />
			<HealthDeclarationTable data={healthDeclarationData} />
		</Fragment>
  );
}
