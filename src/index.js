const home = (() => {
    var panel = document.createElement('div');
    panel.setAttribute('id', 'panel')

    const run = {};
    const internal = {
        clearColors: () => {
            const buttons = document.querySelectorAll('.button')
            buttons.forEach((button) => {
                button.style.backgroundColor = null;
                button.style.color = null;
            })
        },
        setColors: (e) => {
            e.target.style.backgroundColor = 'gold';
            e.target.style.color = 'white';
        },
        setImage: (elem, url) => {
            elem.style.background = `url(${url}) no-repeat fixed center`;
        },
        setHeight: (elem, size) => {
            elem.style.height = size;
        },
        genPage: (skip=false) => {

            const content = document.getElementById('content')

            const main = document.createElement('div')
            main.setAttribute('id', 'main')

            const button1 = document.createElement('div');
            button1.classList.add('button');
            button1.innerText = 'Home';
            
            button1.addEventListener('click', (e) => {
                internal.clearColors();
                internal.clearPage();
                internal.genPage(true);
                internal.setColors(e);
            })

            const button2 = document.createElement('div');
            button2.classList.add('button');
            button2.innerText = 'Menu';

            button2.addEventListener('click', (e) => {
                internal.clearColors();
                internal.clearPage();
                internal.generateMain();
                internal.setColors(e);
                menuItems.run.displayMenu();
            })

            const button3 = document.createElement('div');
            button3.classList.add('button');
            button3.innerText = 'Contact Us!';

            button3.addEventListener('click', (e) => {
                internal.clearColors();
                internal.clearPage();
                internal.generateMain();
                internal.setColors(e);
                menuItems.run.displayContact();
            })
            const buttons = [button1, button2, button3]

            if (!skip){
                buttons.forEach((button) => {
                    panel.appendChild(button);
                })
                button1.style.backgroundColor = 'gold';
                button1.style.color = 'white';
            }
            const header = document.createElement('div');
            header.setAttribute('id', 'header');
            header.innerText = 'Martino\'s Pizza';

            const body = document.createElement('div');
            body.setAttribute('id', 'body');
            internal.setImage(body, '../img/6.jpg')
            internal.setHeight(body, '40%')

            const footer = document.createElement('div');
            footer.setAttribute('id', 'footer');
            internal.setHeight(footer, '25%')
            internal.setImage(footer, '../img/1.jpg')
            
            const items = [panel, header, body, footer];

            items.forEach((item) => {
                main.appendChild(item);
            })
            
            content.appendChild(main);
        },
        clearPage: () => {
            const main = document.createElement('div')
            main.setAttribute('id', 'main')
            main.appendChild(panel);
            content.innerHTML = '';
        },

        generateMain: () => {
            const main = document.createElement('div');
            main.setAttribute('id', 'main');
            content.appendChild(main);
            main.appendChild(panel);
        }
    };
    run.showPage = () => {
        internal.genPage();
    },
    run.hidePage = () => {
        internal.clearPage();
    }

    return { run };

})();

const menuItems = (() => {
    run = {};
    internal = {
        setImage: (elem, url) => {
            elem.style.background = `url(${url}) no-repeat fixed center`;
        },
        setHeight: (elem, size) => {
            elem.style.height = size;
        },
        setStyle: (elem, style, param) => {
            elem.style[style] = param;
        },
        genContact: () => {
            const main = document.getElementById('main');
            const content = document.getElementById('content');

            const body = document.createElement('div');
            body.setAttribute('id', 'body');
            internal.setHeight(body, '50%');
            internal.setImage(body, '../img/loc.jpg')
            
            const footer = document.createElement('div');
            footer.setAttribute('id', 'footer');

            footer.innerText = 'My Name is Anatoly Martino! Contact me at \n\t Anatoly@Martinos.com! \n My di telefono is 222-222-2222 NO SPAM CALLS!'
            internal.setStyle(footer, 'font-family', 'cursive')
            internal.setStyle(footer, 'text-align', 'center')
            internal.setHeight(footer, '34vh')
            internal.setStyle(footer, 'font-size', '4vh')
            const items = [body, footer];

            items.forEach((item) => {
                main.appendChild(item);
            })
            content.appendChild(main);
        },
        genMenu: () => {
            const main = document.getElementById('main');
            const content = document.getElementById('content');

            const body = document.createElement('div');
            body.setAttribute('id', 'body');

            const mOne = document.createElement('div');
            mOne.setAttribute('id', 'body');
            const mTwo = document.createElement('div');
            mTwo.setAttribute('id', 'body');
            const mThree = document.createElement('div');
            mThree.setAttribute('id', 'body');

            const bodyItems = [mOne, mTwo, mThree]
            
            mOne.textContent = 'Salad!\n Only the very best and finest cut lettuce, tomatoes, onions.\n Delicious for all!'
            mTwo.textContent = 'Cheese Pizza! Ay! It\'s All I Know! Pizza!!!!'
            mThree.textContent = 'Mama Mia Lava Pie! Chocolately-Goodness for you and your family!'
            
            bodyItems.forEach((item) => {
                internal.setHeight(item, '25%')
                internal.setStyle(item, 'text-align', 'center')
                internal.setStyle(item, 'font-size', '4vh')
                internal.setStyle(item, 'padding-top', '5vh')
                internal.setStyle(item, 'margin', '1vh')
                body.appendChild(item)
            })

            internal.setHeight(body, '75%')

            const footer = document.createElement('div');
            footer.setAttribute('id', 'footer');
            internal.setImage(footer, '../img/8.jpg')

            const items = [body, footer];

            items.forEach((item) => {
                main.appendChild(item);
            })
            content.appendChild(main);
        }
    }
    run.displayContact = () => {
        internal.genContact();
    },
    run.displayMenu = () => {
        internal.genMenu();
    }
    return { run };
})();


home.run.showPage();