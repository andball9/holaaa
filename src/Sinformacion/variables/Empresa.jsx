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

const thead = ["Nombre", "Dirección", "Email", "Telefono","Clave", "Mascota"];
const tbody = [
  {
    className: "table-success",
    data: ["coloperro", "2345643", "coloperro@gmail.com"]
  },
  {
    className: "",
    data: ["Mlpets", "543123", "ml@gmail.com"]
  },
  {
    className: "table-info",
    data: ["And", "4565470", "and@gmail.com"]
  },
];
export { tasks, thead, tbody };
