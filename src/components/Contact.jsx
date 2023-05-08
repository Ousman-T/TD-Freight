

function Contact(){
    return(
        <div>
            <h1>Contact Page</h1>
            <form action="/contact" method="POST">
                Name:<input type="text" name="name"/>
                <br />
                E-Mail:<input type="text" name="E-Mail"/>
                <br />
                Phone-Number:<input type="text" name="number"/>
            </form>
        </div>
    );
};

export default Contact;