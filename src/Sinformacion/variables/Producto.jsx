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

const thead = ["Nombre", "Precio ", "Categoria", "Registro sanitario","Cantidad", "Descripcion"];
const tbody = [
  {
    className: "table-success",
    data: ["palo", "13000", "palo", "12433","23","fierro golpeador de parejas felices"]
  },
  {
    className: "",
    data: ["hueso", "23000", "huesos", "343789","3","una blanco que mordio el perro"]
  },
];
export { tasks, thead, tbody };
