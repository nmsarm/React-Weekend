// Jumbotron Component - Props

const Jumbotron = (props) => {
    return (
      <>
        <div className="jumbotron jumbotron-fluid bg-white verticalCenterContainer">
            <div class="container px-5">
                <h1 className="display-3">{props.title}</h1>
                <hr className="my-4"/>
                <p className="lead">{props.desc}</p>
                <br/>
                <br/>
                <p className="lead">
                    <a className="btn btn-warning btn-lg" href={props.href} role="button">{props.btntext}</a>
                </p>
            </div>
        </div>
        </>
    );
}
  
export default Jumbotron