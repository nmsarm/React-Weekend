// Card Component - Props
const Card = (props) => {
    return (
      <>
       <div class="card" style={{width: "30rem"}}>
            <img class="card-img-top" src={props.img} alt="Image"/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">
                    <br/>
                    {props.text} 
                    <br/>
                </p>
            </div>
        </div>
        </>
    );
}
  
export default Card