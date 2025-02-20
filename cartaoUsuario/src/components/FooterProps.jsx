import "./FooterProps.css"


function FooterProps(props) {
    return (
        <>
        <footer className="footer">
        <div className="container">
          <div className="footer_contact">
            <p>
              <i className='bx bx-envelope'></i> Email Para Contato: {props.email}
            </p>
            <p>
              <i className='bx bx-phone'></i> Telefone Para Contato: {props.telefone}
            </p>
          </div>
          <div className="footer_social">
            <a href={props.instagram}>
              <i className='bx bxl-instagram'></i>
            </a>
            <a href={props.facebook}>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href={props.twitter} >
              <i className='bx bxl-twitter'></i>
            </a>
            <p>Site Feito Por: {props.autor}</p>
          </div>
        </div>
      </footer>
      {/* <img className="img" src={props.img} /> */}

        </>
    );
  }

export default FooterProps