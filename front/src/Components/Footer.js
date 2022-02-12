function Footer(){
    var date = new Date().getFullYear();
    return(
        <div className="footer">
            <h4>Copyright @{date}</h4>
        </div>
    );
}
export default Footer;