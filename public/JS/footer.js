const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <h1>LOGO</h1>
            <div class="footer-container">
                <ul class="category">
                    <li class="title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                </ul>
                <ul class="category">
                    <li class="title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-sub">about company</p>
        <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rerum vero facilis eius distinctio dolor eligendi sint voluptates. Non culpa suscipit totam quaerat facilis dolorum quis cupiditate porro unde fugiat.</p>
        <p class="info">
            support emails - help@gmail.com,
            customersupport@clothing.com
        </p>
        <p class="info">telephone - 000 200 2200 020</p>
        <div class="social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">SHOPPING MADE EASIER</p>
    `;
}

createFooter();