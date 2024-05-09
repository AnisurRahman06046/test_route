function Contact() {
  return (
    <div className="container mx-auto w-full mt-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        Feel free to get in touch with us using the following contact
        information:
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li>Email: example@example.com</li>
        <li>Phone: +1234567890</li>
        <li>Address: 1234 Street Name, City, Country</li>
      </ul>
      <p className="text-lg">
        You can also fill out the form below to send us a message:
      </p>
      {/* Add your contact form component here */}
    </div>
  );
}

export default Contact;
