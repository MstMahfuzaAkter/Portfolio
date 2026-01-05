import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ec5y0ts", // Service ID
        "template_7hksf65", // Template ID
        form.current,
        {
          publicKey: "Y-hkeCmmRiuid1AiS",
        }
      )
      .then(
        (result) => {
          setStatus("SUCCESS");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("ERROR");
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-4 bg-white font-raleway">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Contact Me
          </h1>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider">Email</p>
                <a href="mailto:mstmahfuzaker581@gmail.com" className="text-gray-600 hover:text-secondary transition-colors">
                  mstmahfuzaker581@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider">Location</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider">Availability</p>
                <p className="text-gray-600">Freelance / Full-time</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#F8F9FA] p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} ref={form} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-4 bg-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      required
                      className="w-full px-6 py-4 bg-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-max px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/20 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <FaPaperPlane className={loading ? "animate-ping" : ""} />
                </button>

                {status === "SUCCESS" && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-bold text-sm">
                    ✓ Message Sent Successfully! I'll get back to you soon.
                  </div>
                )}
                {status === "ERROR" && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-xl text-center font-bold text-sm">
                    ✕ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;