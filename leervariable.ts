interface Employee {
    readonly employeeId: number;
    readonly startDate: Date;

    name: string;
    departamento:string
}

const employee: Employee = {
    employeeId: 1,
    startDate: new Date(),
    name: "pedro",
    departamento: "Finanzas",
};

employee.name = "Jessica";

console.log(employee);