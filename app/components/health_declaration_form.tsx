"use client";

import { Card, CardBody, CardHeader, Form } from "@heroui/react";
import React, { Fragment, useState } from "react";
import { HealthDeclarationFormData } from "@/app/lib/definitions";

type Props = {
  onSubmit: (data: HealthDeclarationFormData) => boolean,
  error: string
};

export default function HealthDeclarationForm({ onSubmit, error }: Props) {
  const symptomsText = `
  Do you have any of the following symptoms now or within the last 14 days:
  Cough, smell/test impairment, fever, breathing difficulties, body aches,
  headaches, fatigue, sore throat, diarrhea, runny nose (even if your symptoms are
  mild)?
  `
  const contactText = `
  Have you been in contact with anyone suspected or diagnosed with Covid-19
  within the last 14 days?
  `
  const defaultFormData = {
    name: "",
    temperature: "",
    hasSymptoms: "",
    hasContact: ""
  }
  const [formData, setFormData] = useState<HealthDeclarationFormData>(defaultFormData);

  const handleChange = (
    e: { target: { name: string; value: string; }; }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = onSubmit(formData);
    if (result == true) {
      setFormData(defaultFormData);
    }
  };

  return (
    <Fragment>
      <Card 
        className="space-y-4 min-w-md max-w-xl mx-auto border-solid outline-solid outline-offset-8 outline-cyan-500"
        radius="lg"
        shadow="lg"
        isBlurred
      >
        <CardHeader>
          <h1 className="text-2xl font-bold mb-6">Health Declaration Form</h1>
        </CardHeader>
        <CardBody>
          <Form 
            onSubmit={handleSubmit} 
            onReset={() => setFormData(defaultFormData)}
          >
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                name="name"
                className="w-full border p-2"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
            <label htmlFor="temperature">Temperature (°C)</label>
              <input
                required
                type="number"
                name="temperature"
                className="w-full border p-2"
                id="temparature"
                value={formData.temperature}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="hasSymptoms">
                {symptomsText}
              </label>
              <select
                required
                name="hasSymptoms"
                id="hasSymptoms"
                className="w-full border p-2"
                value={formData.hasSymptoms}
                onChange={handleChange}
              >
                <option value="" disabled>Select an option</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div>
              <label htmlFor="hasContact">
                {contactText}
              </label>
              <select
                required
                name="hasContact"
                id="hasContact"
                className="w-full border p-2"
                value={formData.hasContact}
                onChange={handleChange}
              >
                <option value="" disabled>Select an option</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div>
              <label key="error" className="text-red-500">{error}</label>
            </div>
            <div className="flex flex-row gap-2 ">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 mt-2 rounded"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-red-600 text-white py-2 px-4 mt-2 rounded"
            >
              Clear
            </button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
}