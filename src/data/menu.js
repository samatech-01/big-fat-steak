export const menuCategories = [
  { id: 'steak', label: 'Steak', title: 'Steak', items: [['Tenderloin',89000],['Rib Eye',89000],['Striploin',92000],['Grilled Sausage',37000]] },
  { id: 'chicken-fish', label: 'Chicken & Fish', title: 'Chicken & Fish', items: [['Chicken Crispy Steak',45000],['Chicken Steak',45000],['Lemongrass Dori',40000]] },
  { id: 'snack', label: 'Snack', title: 'Snack', items: [['Snack Platter',30000],['French Fries',15000],['Fried Enoki',20000]] },
  { id: 'tower', label: 'Steak Tower', title: 'Steak Tower 1 KG', items: [['Striploin',430000],['Tenderloin',415000],['Rib Eye',415000]] },
  { id: 'beverages', label: 'Beverages', title: 'Beverages', items: [['Soft Drinks',7000],['Iced Tea',6000],['Hot Tea',5000],['Mineral Water',5000],['Squeezed Orange',12000],['Blackcurrant Tea',8000]] },
  { id: 'extra', label: 'Extra', title: 'Extra Sauce & Side Dish', items: [['Rice',6000],['Bigfat Sauce',6000],['Sesame Sauce',6000],['BBQ Sauce',6000],['Mushroom Sauce',6000],['Blackpepper Sauce',6000],['Mashed Potato',14000],['Extra Corn',12000],['Extra Green Bean',12000]] },
];
export const formatPrice = value => `Rp${new Intl.NumberFormat('id-ID').format(value)}`;
