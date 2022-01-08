class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <header>
            <div class="container ">
                <div class="row">
                <div class="col mr-auto">
                    <a href="index.html" class="header-logo col">The Potato Republic</a>
                </div>
                <nav class="header-menu">
                    <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="mission.html">Mission</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
        `;
    }
}

window.customElements.define("cus-header", Header)