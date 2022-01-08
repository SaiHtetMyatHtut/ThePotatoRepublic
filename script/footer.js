class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div class="container shadow">
            <div class="row">
                <div class="col-3 mr-auto">
                <p>&copy; The Potato Republic</p>
                </div>
                <div class="social-networks">
                
                <a href="https://www.facebook.com/potatoinpeace" target="_blank"><img src="img/facebook.svg" alt=""></a>
                </div>
            </div>
            </div>
        </footer>
        `;
    }
}

// <a href="" target="_blank"><img src="img/facebook.svg" alt=""></a>
// <a href="" target="_blank"><img src="img/facebook.svg" alt=""></a>

window.customElements.define("cus-footer", Footer)