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
                    <p className="text-warning mb-0 py-2">© 2022 Daneah Sarmiento.</p>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer