export default function loadMenu() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const h1 = menuPage.appendChild(document.createElement('h1'));
    h1.textContent = 'Our Menu';

    const createMenuContainer = (function() {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        const createMenuSections = (function() {
            const createMenuArray = (function() {
                class MenuSection {
                    constructor(title, items) { //items will be an array
                        this.title = title;
                        this.items = items;
                    }
                }
                
                class MenuItem {
                    constructor(title, price, description) {
                        this.title = title;
                        this.price = price;
                        this.description = description;
                    }
                }
                
                const entrees = new MenuSection('Entrees', 
                    [   
                        new MenuItem('The Grits & Griddles', 12, 'Our world-famous buttery grits topped with two sunny-side eggs and bacon crumbles. Served with sausage and even buttery-er toast.'),
                        new MenuItem('Biscuits & Gravy', 10, 'Two sausage biscuits lathered in gravy and cheddar cheese.'),
                        new MenuItem('Omelette', 12, 'Your choice of add-ins: sausage crumbles, bacon, ham, cheddar cheese, onions, peppers, and mushrooms.'),
                        new MenuItem('Pancakes', 13, `Five of 'em. Topped with butter and served with a side of maple syrup.`),
                    ]
                );
                
                const sandwiches = new MenuSection('Sandwiches', 
                    [   
                        new MenuItem('Bacon, Egg & Cheese Biscuit', 9, 'Is what it is.'),
                        new MenuItem('Sausage, Egg & Cheese Bagel', 9, 'Like the other one, but with sausage and on a bagel.')
                    ]
                );
                
                const sides = new MenuSection('Sides', 
                    [   
                        new MenuItem('Potatoes', 3, 'Add cheese and bacon crumbles for an extra $1... oh my...'),
                        new MenuItem('Biscuit', 3, 'Dense yet fluffy. Dissolves in the mouth.'),
                        new MenuItem('Grits', 3, 'Our world-famous buttery grits.'),
                        new MenuItem('Fruit', 4, 'Strawberries, banana, watermelon, and blueberries.')
                    ]
                );
                
                const drinks = new MenuSection('Drinks', 
                    [   
                        new MenuItem('Orange Juice', 2.5, 'Not freshly squeezed, but still tastes just fine.'),
                        new MenuItem('Coffee', 2.5, 'No cream. No sugar. Both regular and decaf.')
                    ]
                );
                
                const menuArray = [entrees, sandwiches, sides, drinks];
                return menuArray;
            })();



        })();
        
    })();
    
    return menuPage;
}



// const menuArray = [
//     {
//         title: 'Entrees',
//         items: [
//             {
//                 title: 'The Grits & Griddles',
//                 price: 12,
//                 description: 'Our world-famous buttery grits topped with two sunny-side eggs and bacon crumbles. Served with sausage and even buttery-er toast.'
//             },
//         ]
//     },
// ]