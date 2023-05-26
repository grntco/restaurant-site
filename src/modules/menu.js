import createMenuData from './menu-data';

export default function loadMenu() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const h1 = menuPage.appendChild(document.createElement('h1'));
    h1.textContent = 'Our Menu';

    const createMenuContainer = (function() {
        const menuContainer = menuPage.appendChild(document.createElement('div'));
        menuContainer.classList.add('menu-container');

        const createMenuSections = (function() {
            // const createMenuArray = function() {
            //     class MenuSection {
            //         constructor(title, items) {
            //             this.title = title;
            //             this.items = items;
            //         }
            //     }
                
            //     class MenuItem {
            //         constructor(title, price, description) {
            //             this.title = title;
            //             this.price = price;
            //             this.description = description;
            //         }
            //     }
                
            //     const entrees = new MenuSection('Entrees', 
            //         [   
            //             new MenuItem('The Grits & Griddles', 12, 'Our world-famous buttery grits topped with two sunny-side eggs and bacon crumbles. Served with sausage and even buttery-er toast.'),
            //             new MenuItem('Biscuits & Gravy', 10, 'Two sausage biscuits lathered in gravy and cheddar cheese.'),
            //             new MenuItem('Omelette', 12, 'Your choice of add-ins: sausage crumbles, bacon, ham, cheddar cheese, onions, peppers and mushrooms.'),
            //             new MenuItem('Pancakes', 13, `Five of 'em. Topped with butter and served with a side of maple syrup.`),
            //         ]
            //     );
                
            //     const sandwiches = new MenuSection('Sandwiches', 
            //         [   
            //             new MenuItem('Bacon, Egg & Cheese Biscuit', 9, 'Is what it is.'),
            //             new MenuItem('Sausage, Egg & Cheese Bagel', 9, 'Like the other one, but with sausage and on a bagel.')
            //         ]
            //     );
                
            //     const sides = new MenuSection('Sides', 
            //         [   
            //             new MenuItem('Potatoes', 3, 'Add cheese and bacon crumbles for an extra $1... oh my...'),
            //             new MenuItem('Biscuit', 3, 'Dense yet fluffy. Dissolves in the mouth.'),
            //             new MenuItem('Grits', 3, 'Our world-famous buttery grits.'),
            //             new MenuItem('Fruit', 4, 'Strawberries, banana, watermelon and blueberries.')
            //         ]
            //     );
                
            //     const drinks = new MenuSection('Drinks', 
            //         [   
            //             new MenuItem('Orange Juice', 2.5, 'Not freshly squeezed, but still tastes just fine.'),
            //             new MenuItem('Coffee', 2.5, 'No cream. No sugar. Both regular and decaf.')
            //         ]
            //     );
                
            //     return [entrees, sandwiches, sides, drinks];
            // };

            const menuArray = createMenuData();

            for (let i = 0; i < menuArray.length; i++) {
                const menuSection = menuContainer.appendChild(document.createElement('div'));
                menuSection.classList.add('menu-section');

                const h2 = menuSection.appendChild(document.createElement('h2'));
                h2.textContent = menuArray[i].title;

                const itemContainer = menuSection.appendChild(document.createElement('div'));
                itemContainer.classList.add('items-container');

                for (let j = 0; j < menuArray[i].items.length; j++) {
                    const menuItem = itemContainer.appendChild(document.createElement('div'));
                    menuItem.classList.add('menu-item');

                    const itemTitle = menuItem.appendChild(document.createElement('h3'));
                    itemTitle.classList.add('item-title');
                    itemTitle.textContent = menuArray[i].items[j].title;

                    const itemPrice = menuItem.appendChild(document.createElement('div'));
                    itemPrice.classList.add('item-price');
                    itemPrice.textContent = `$${menuArray[i].items[j].price}`;

                    const itemDescription = menuItem.appendChild(document.createElement('p'));
                    itemDescription.classList.add('item-description');
                    itemDescription.textContent = menuArray[i].items[j].description;
                }
            }
        })();
    })();

    return menuPage;
}