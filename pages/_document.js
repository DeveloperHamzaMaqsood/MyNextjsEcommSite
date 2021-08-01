import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charset="utf-8"/>
                <meta name="keywords" content="Goggles a Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
                        Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
                <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
                <link href="css/login_overlay.css" rel='stylesheet' type='text/css' />
                <link href="css/style6.css" rel='stylesheet' type='text/css' />
                <link rel="stylesheet" href="css/shop.css" type="text/css" />
                <link rel="stylesheet" href="css/owl.carousel.css" type="text/css" media="all"/>
                <link rel="stylesheet" href="css/owl.theme.css" type="text/css" media="all"/>
                <link href="css/style.css" rel='stylesheet' type='text/css' />
                <link href="css/fontawesome-all.css" rel="stylesheet"/>
                <link href="css/simplyCountdown.css" rel='stylesheet' type='text/css' />
                <link href="css/login_overlay.css" rel='stylesheet' type='text/css' />
                <link href="css/style6.css" rel='stylesheet' type='text/css' />
                <link rel="stylesheet" href="css/shop.css" type="text/css" />
                <link rel="stylesheet" type="text/css" href="css/checkout.css"/>
                <link href="css/easy-responsive-tabs.css" rel='stylesheet' type='text/css' />
                <link href="css/style.css" rel='stylesheet' type='text/css' />
                <link href="css/fontawesome-all.css" rel="stylesheet"/>
                <link href="css/contact.css" rel='stylesheet' type='text/css' />
            </Head>
            <body>
            <Main />
            <NextScript />
            	<script src="js/modernizr-2.6.2.min.js"></script>
                <script src="js/classie-search.js"></script>
                <script src="js/demo1-search.js"></script>
                <script src="js/minicart.js"></script>
                <script src="js/simplyCountdown.js"></script>
                <script src="js/owl.carousel.js"></script>
                <script src="js/jquery-2.2.3.min.js"></script>
                <script src="js/move-top.js"></script>
                <script src="js/easing.js"></script>
                <script src="js/bootstrap.js"></script>
                <script src="js/temp.js"></script>
                <script src="js/jquery.flexslider.js"></script>
                <script src="js/imagezoom.js"></script>
                <script src="js/easy-responsive-tabs.js"></script>
                <script src="js/classie-search.js"></script>
                <script src="js/demo1-search.js"></script>
            </body>
        </Html>
        )
    }
}

export default MyDocument