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
    data: ["ivan", "calle 127-141#13", "idecaviedes@gmail.com", "123","si"]
  },
  {
    className: "",
    data: ["Miguel", "calle 123", "fomy@misena.du.co", "789","no"]
  },
  {
    className: "table-info",
    data: ["Andrés", "calle70", "andball9@gmail.com", "56","si"]
  },
];
export { tasks, thead, tbody };
