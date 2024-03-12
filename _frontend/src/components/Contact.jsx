import React,{ useState} from "react";
import toast from "react-hot-toast";
import axios from "axios"; 

const Contact= () =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post("https://easy-pear-swallow-ring.cyclic.app/api/v1/message/send", {
      name,
      email,
      subject,
      message,
    }, { withCredentials: true, headers: { "Content-Type": "application/json" } }
    ).then(res =>{
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }).catch(error =>{
      toast.error(error.response.data.message);
      console.log(error);
    });
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Any where, Any City, 4521</p>
        </div>
        <div className="item">
          <h4>Call-us</h4>
          <p>Call Us: +91-12345-67891</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>abcd@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            title="Mumbai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.122983312036!2d72.83106001454732!3d19.07621108598064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630a81494e1%3A0x6fcd73638a4cbf30!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647557328883!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={10}
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact



