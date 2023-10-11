
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="../html/index.html"><img class="logo-img-text" src="../images/images/DPG%20Corp%20Family%20Logo%20TIE%20GMC%20EP%20transparent.jpg" alt="Dakonte Product Group, TIE office mates, Great Menu Covers, and Easy Partition Logo. "></a>
            <div class="nav">
                <ul>
                    <li>
                        <div class="hover">
                            <a onclick="show_hide_1()" href="#" class="menuItem">Products</a>
                            <div class="list list-1" style="display: none;">
                                <a href="https://tieofficemates.com/shop-ticket-holders/heavy-duty-stitched-job-ticket-holders/">Job Ticket Holders</a>
                                <a href="https://tieofficemates.com/vinyl-document-sleeves/waterproof-press-lock-seal/">Waterproof Holders</a>
                                <a href="https://tieofficemates.com/color-coding-options/">Color Coded Products</a>
                                <a href="https://greatmenucovers.com/cafe-menu-covers-vinyl-trim">Café Menu Covers</a>
                                <a href="https://greatmenucovers.com/clear-plastic-menu-sleeve-pockets/">Clear Menu Covers</a>
                                <a href="https://greatmenucovers.com/add-a-menu-page-inserts/">Add-A-Page</a>
                                <a href="https://tieofficemates.com/auto-repair-order-holders/">Service Order Holders</a>
                                <a href="https://tieofficemates.com/easy-sign-holders/">Sign Holders</a>
                                <a href="https://tieofficemates.com/vinyl-tag-holders/">Tag Holders</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="hover">
                            <a onclick="show_hide_2()" href="#" class="menuItem">Industry</a>
                            <div class="list list-2" style="display: none;">
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
                    <li><a href="../html/brands.html" class="menuItem">Brands</a></li>
                </ul>
            </div>
            <button class="hamburger">
                <i class="menuIcon material-icons">menu</i>
                <i class="closeIcon material-icons" style="display: none">close</i>
            </button>
        </header>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <footer>
                <a href="../html/index.html"><img class="logo-img-footer" src="../images/icons/about-dgp.png" alt="Dakonte Product Group logo. "></a>
                <div>
                    <p><a href="https://tieofficemates.com/industries-served/">About DGP</a> | <a href="https://tieofficemates.com/privacy-policy/">Privacy</a></p>
                    <p class="copywrite">© Dakonte Product Group, Inc 2023. All Rights Reserved.</p>
                </div>
                <p class="trademark">The brands listed above are trademarks of Dakonte Product Group.</p>
            </footer>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);