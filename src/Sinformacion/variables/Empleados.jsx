const tasks = [
  {
    checked: true,
    text: 'Sign contract for "What are conference organizers afraid of?"'
  },
  {
    checked: false,
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?"
  },
  {
    checked: true,
    text:
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
  }
];

const thead = ["Nombre", "Telefono", "Cargo", "Estudios","Licencia", "Clave"];
const tbody = [
  {
    className: "table-success",
    data: ["Miguel", "23456765", "Repartidor", "Tecnologo","si", "1234"]
  },
  {
    className: "",
    data: ["Mateo", "2345434", "Vendedor", "Tecnologo","no", "321"]
  },
  {
    className: "table-info",
    data: ["Andrés", "45675432", "admin", "Tecnologo","no", "12345"]
  },
  {
    className: "",
    data: ["Ivan", "567876543", "el de arriba x2", "Tecnologo","no", "765"]
  },
];


export { tasks, thead, tbody };
