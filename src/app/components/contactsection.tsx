
export default function ContactSection() {
  return (
    <section className="flex min-h-screen items-center gap-5" id="contact">
      <div className="contact-form ">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className="form-title-description">
        <h1>Contact us</h1>
        <h2 className="no-space-h3">Get in touch with us</h2>
        <p>Phone: 0473 164 581</p>
        <p>Email: info@thebestmove.com.au </p>
        <br />
        <p>Call us or send us a message to book your move today</p>
      </div>
    </section>
  );
}
