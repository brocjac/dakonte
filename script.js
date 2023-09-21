class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="index.html"><img class="logo-img-text" src="images/images/DPG Corp Family Logo TIE GMC EP transparent.jpg" alt="Dakonte Product Group, TIE office mates, Great Menu Covers, and Easy Partition Logo. "></a>
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
                            <a href="#">manufacturer</a>
                            <a href="#">Office</a>
                            <a href="#">Retail</a>
                        </div>
                    </div>
                </li>
                <li><a href="brands.html" target="_blank">Brands</a></li>
            </ul>
        </header>
        `;
    }
}

customElements.define('main-header', Header);