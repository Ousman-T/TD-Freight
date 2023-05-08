

function Contact(){
    return(
        <div>
            <h1>Contact Page</h1>
            <form action="/contact" method="POST">
                Name:<input type="text" name="Name"/>
                <br />
                EMail:<input type="text" name="EMail"/>
                <br />
                PhoneNum:<input type="text" name="PhoneNum"/>
            </form>
        </div>
    );
};

export default Contact;