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

const thead = ["Name", "Country", "City", "Salary","Name", "Country", "City", "Salary"];
const tbody = [
  {
    className: "table-success",
    data: ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738","Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]
  },
  {
    className: "",
    data: ["Minerva Hooper", "pene", "Sinaai-Waas", "$23,789","Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]
  },
  {
    className: "table-info",
    data: ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142","Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]
  },
  {
    className: "",
    data: ["Philip Chaney", "Korea, South", "Overland Park", "$38,735","Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]
  },
  {
    className: "table-danger",
    data: ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542","Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]
  },
  { className: "", data: ["Mason Porter", "Chile", "Gloucester", "$78,615","Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"] },
  {
    className: "table-warning",
    data: ["Jon Porter", "Portugal", "Gloucester", "$98,615","Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
