import { Card, CardBody, CardHeader } from "@heroui/react";
import { Fragment } from "react";
import { HealthDeclarationFormData, WithTimeStamp } from "@/app/lib/definitions";

type Props = {
  data: (HealthDeclarationFormData & WithTimeStamp)[];
};

export default function HealthDeclarationTable({ data: data }: Props) {
  return (
    <Fragment>
      <Card 
        className="space-y-4 min-w-md max-w-max mx-auto border-solid outline-solid outline-offset-8 outline-cyan-500"
        radius="lg"
        shadow="lg"
        isBlurred
      >
        <CardHeader>
          <h1 className="text-2xl font-bold mb-6">Health Declaration Records</h1>
        </CardHeader>
        <CardBody>
          <div>
            <table className="border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Submission Time</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Temperature (°C)</th>
                  <th className="border p-2">Has Symptoms</th>
                  <th className="border p-2">Has Contact</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="border p-2">{new Date(item.timestamp).toString()}</td>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.temperature}</td>
                    <td className="border p-2">{item.hasSymptoms}</td>
                    <td className="border p-2">{item.hasContact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}