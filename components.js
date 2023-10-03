
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="index.html"><img class="logo-img-text" src="images/images/DPG%20Corp%20Family%20Logo%20TIE%20GMC%20EP%20transparent.jpg" alt="Dakonte Product Group, TIE office mates, Great Menu Covers, and Easy Partition Logo. "></a>
            <ul class="nav">
                <li>
                    <div class="hover">
                        <a href="#">Products</a>
                        <div class="list">
                            <a href="https://tieofficemates.com/shop-ticket-holders/heavy-duty-stitched-job-ticket-holders/" target="_blank">Job Ticket Holders</a>
                            <a href="https://tieofficemates.com/vinyl-document-sleeves/waterproof-press-lock-seal/" target="_blank">Waterproof Holders</a>
                            <a href="https://tieofficemates.com/color-coding-options/" target="_blank">Color Coded Products</a>
                            <a href="https://greatmenucovers.com/cafe-menu-covers-vinyl-trim" target="_blank">Café Menu Covers</a>
                            <a href="https://greatmenucovers.com/clear-plastic-menu-sleeve-pockets/" target="_blank">Clear Menu Covers</a>
                            <a href="https://greatmenucovers.com/add-a-menu-page-inserts/" target="_blank">Add-A-Page</a>
                            <a href="https://tieofficemates.com/auto-repair-order-holders/" target="_blank">Service Order Holders</a>
                            <a href="https://tieofficemates.com/easy-sign-holders/" target="_blank">Sign Holders</a>
                            <a href="https://tieofficemates.com/vinyl-tag-holders/" target="_blank">Tag Holders</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="hover">
                        <a href="#">Industry</a>
                        <div class="list">
                            <a href="#">Auto Repair</a>
                            <a href="#">Construction</a>
                            <a href="#">Education</a>
                            <a href="#">Facility Manager</a>
                            <a href="#">Government</a>
                            <a href="#">Healthcare</a>
                            <a href="#">Manufacturer</a>
                            <a href="#">Office</a>
                            <a href="#">Retail</a>
                        </div>
                    </div>
                </li>
                <li><a href="brands.html">Brands</a></li>
            </ul>
             <a href="javascript:void(0);" class="hamburger" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </header>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <footer>
                <img class="logo-img-footer" src="images/icons/about-dgp.png" alt="Dakonte Product Group logo. ">
                <div>
                    <p><a href="about-dpg.html">About DGP</a> | <a href="#">Privacy</a></p>
                    <p class="copywrite">© Dakonte Product Group, Inc 2023. All Rights Reserved.</p>
                </div>
                <p class="trademark">The brands listed above are trademarks of Dakonte Product Group.</p>
            </footer>
            <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
            <script src="script.js"></script>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);