const Footer = () =>{
    
    // internal css
    const footerStyle = {
        position: "relative",
        width: "100%",
        bottom: "0"          
    }

    return(
        <>
           <footer className="bg-secondary" style={footerStyle}>
            <div className="bg-dark py-5">
                <div className="container text-center">
                    <p className="text-warning mb-0 py-2 mb-2">© 2022 Daneah Sarmiento.</p>
                    <a className="p-2" href="https://www.linkedin.com/in/daneahsarmiento/" target="__blank">
                        <i className="fa fa-linkedin fa-lg text-white mr-md-5 mr-3"> </i>
                    </a>
                    <a className="p-2"  href="https://www.instagram.com/nmsarm/" target="__blank">
                        <i className="fa fa-instagram fa-lg text-white mr-md-5 mr-3"> </i>
                    </a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer