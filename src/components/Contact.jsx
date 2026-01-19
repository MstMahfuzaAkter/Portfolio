import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ec5y0ts",
        "template_7hksf65",
        form.current,
        { publicKey: "Y-hkeCmmRiuid1AiS" }
      )
      .then(
        () => {
          setStatus("SUCCESS");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        },
        () => {
          setStatus("ERROR");
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section id="contact" className="relative py-10 bg-[#0a0f1d] overflow-hidden f">
      
      {/* Background Anime Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-500/5 blur-[100px] rounded-full"></div>
      <div className="absolute top-20 right-[-2%] text-white/5 text-[10rem] font-black rotate-90 select-none">GET IN TOUCH</div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl  text-white tracking-tight">
            Contact Me
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
          
          {/* Right Column: Contact Info Cards (35%) */}
          <div className="w-full lg:w-[35%] space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Contact Info</h3>
            
            {[
              { icon: <FaEnvelope />, label: "Email", value: "mstmahfuzaker581@gmail.com", link: "mailto:mstmahfuzaker581@gmail.com" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "Dhaka, Bangladesh" },
              { icon: <FaPhoneAlt />, label: "Availability", value: "Freelance / Full-time" }
            ].map((info, idx) => (
              <div key={idx} className="group flex items-center gap-6 p-6 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 backdrop-blur-sm">
                <div className="w-14 h-14 bg-[#1e293b] rounded-2xl flex items-center justify-center text-teal-400 text-xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all">
                  {info.icon}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[2px] mb-1">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="text-[11px] font-bold text-white/90 hover:text-teal-400 transition-colors truncate block">{info.value}</a>
                  ) : (
                    <p className="text-[11px] font-bold text-white/90">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Left Column: Contact Form (65%) */}
          <div className="w-full lg:w-[65%]">
            <div className="relative bg-[#111a2d]/60 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-10 tracking-tight italic">Send a Message</h3>
              
              <form onSubmit={handleSubmit} ref={form} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-[10px] font-black text-teal-400 uppercase tracking-[2px] mb-3 ml-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-5 bg-[#0f172a]/80 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-teal-500/50 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] font-black text-teal-400 uppercase tracking-[2px] mb-3 ml-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      required
                      className="w-full px-6 py-5 bg-[#0f172a]/80 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-teal-500/5 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black text-teal-400 uppercase tracking-[2px] mb-3 ml-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows="5"
                    className="w-full px-6 py-5 bg-[#0f172a]/80 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-teal-500/5 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full md:w-max px-12 py-5 bg-teal-500 text-white font-black text-[11px] uppercase tracking-widest rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/40 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-70"
                >
                  <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                  <FaPaperPlane className={`relative z-10 transition-all duration-500 ${loading ? "animate-ping" : "group-hover:translate-x-2 group-hover:-translate-y-2"}`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                {/* Status Alerts */}
                {status === "SUCCESS" && (
                  <div className="animate-fadeIn p-4 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-2xl text-center font-bold text-[10px] tracking-widest uppercase">
                    ✓ Your message has been sent!
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