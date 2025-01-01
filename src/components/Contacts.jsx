import React, { useState, useRef, useEffect } from "react";
import CustomHook from "./CustomHook";
import Magnetic from "./common/Magnetic";
import RoundedBtn from "./common/RoundedButton";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

const Arrow = ` <svg
width="40px"
height="40px"
viewBox="0 0 14 14"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
>
<title>arrow-up-right</title>
<g
  id="Page-1"
  stroke="none"
  stroke-width="1"
  fill="none"
  fill-rule="evenodd"
>
  <g
    id="Artboard"
    transform="translate(-1019.000000, -279.000000)"
    stroke="#FFFFFF"
    stroke-width="1.5"
  >
    <g
      id="arrow-up-right"
      transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
    >
      <polyline
        id="Path"
        points="2.76923077 0 12 0 12 9.23076923"
      ></polyline>
      <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
    </g>
  </g>
</g>
</svg>`;

function Contacts() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Farhan Ahmed",
      service: values.service,
      message: values.message,
    };

    if (values.name && values.email && values.service && values.message) {
      setFormError(false);
      emailjs
        .send(
          "service_dgtx6bf",
          "template_8z395hm",
          templateParams,
          "lJUdaQcvYFSLADE26"
        )
        .then((response) => {
          console.log("Email sent Successfully..!", response);
          setValues({
            name: "",
            email: "",
            service: "",
            message: "",
          });
          setLoading(false);
          console.log(notifications);

          setNotifications((pv) => [
            generateRandomNotif("Email Send Succesfully"),
            ...pv,
          ]);
        })
        .catch((error) => {
          console.log("Failed to sent", error);
          setLoading(false);
          setNotifications((pv) => [
            generateRandomNotif("Unable To Send Email!"),
            ,
            ...pv,
          ]);
        });
    } else {
      setFormError(true);
    }
  };

  return (
    <section className="contacts py-24" ref={scrollTab} id="contact">
      <div
        className="title text-center font-bluu-next uppercase"
        ref={(el) => el && divs.current.push(el)}
      >
        Let's &lt;Connect!/&gt;
      </div>
      <div
        className="grid md:grid-cols-3 gap-4 mt-6 md:my-20"
        ref={(el) => el && divs.current.push(el)}
      >
        <div className="md:col-span-2">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-wrapper py-6 border-t border-b flex justify-start items-start">
              <div>
                <span className="lightColor text-lg">01</span>
              </div>
              <div className="px-6 flex flex-col flex-1">
                <label htmlFor="name" className="text-2xl text-white">
                  What&apos;s your name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className="bg-transparent  outline-none border-none py-4 w-full text-2xl placeholder:opacity-50"
                  placeholder="Jhone Doe"
                  value={values.name}
                />
              </div>
            </div>
            <div className="input-wrapper py-6 border-b flex justify-start items-start">
              <div>
                <span className="lightColor text-lg">02</span>
              </div>
              <div className="px-6 flex flex-col flex-1">
                <label htmlFor="name" className="text-2xl text-white">
                  What's your email?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-transparent outline-none border-none py-4 w-full text-2xl placeholder:opacity-50"
                  placeholder="Jhone@doe.com"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
            </div>
            <div className="input-wrapper py-6 border-b flex justify-start items-start">
              <div>
                <span className="lightColor text-lg">03</span>
              </div>
              <div className="px-6 flex flex-col flex-1">
                <label htmlFor="name" className="text-2xl text-white">
                  What services are you looking for?
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  className="bg-transparent outline-none border-none py-4 w-full text-2xl placeholder:opacity-50"
                  placeholder="Web Designing, Web Development..."
                  onChange={handleChange}
                  value={values.service}
                />
              </div>
            </div>
            <div className="input-wrapper py-6 border-b flex justify-start items-start">
              <div>
                <span className="lightColor text-lg">04</span>
              </div>
              <div className="px-6 flex flex-col flex-1">
                <label htmlFor="message" className="text-2xl text-white">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-transparent outline-none border-none py-4 w-full text-2xl placeholder:opacity-50"
                  placeholder="Hi Farhan, I'm looking for a web developer..."
                  rows="5"
                  onChange={handleChange}
                  value={values.message}
                />
              </div>
            </div>
            {formError && (
              <p className="text-red-600 text-xl font-medium mt-4">
                Unable to send Email! <br />
                Please Fill The Form First!
              </p>
            )}

            <button type="submit" className="group py-6 max-w-sm mx-auto mt-6">
              <RoundedBtn>
                {!loading ? (
                  <p className="text-lime-accent group-hover:text-black text-4xl">
                    Send it!
                  </p>
                ) : (
                  <p className="text-lime-accent group-hover:text-black text-4xl">
                    Loading...
                  </p>
                )}
              </RoundedBtn>
            </button>
          </form>
        </div>
        <div>
          <Magnetic>
            <img
              className="rounded-full w-20 md:w-40 md:h-40 object-cover"
              src="/avatar.jpg"
              alt=""
              ref={(el) => el && divs.current.push(el)}
            />
          </Magnetic>
          <div
            className="arrow-svg pl-8 mt-4"
            dangerouslySetInnerHTML={{ __html: Arrow }}
          />
          <div className="mt-6">
            <div className="pl-8">
              <h1 className="capitalize mb-2 text-2xl">CONTACT DETAILS</h1>
              <Magnetic>
                <a
                  href="mailto:farhanf7n@gmail.com"
                  className="hover:underline text-xl opacity-65"
                >
                  farhanf7n@gmail.com
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="tel:+923091789249"
                  className="hover:underline text-xl opacity-65"
                >
                  +923091789249
                </a>
              </Magnetic>
            </div>
          </div>
          <div className="mt-6">
            <div className="pl-8">
              <h1 className="capitalize mb-2 text-2xl">Social Links</h1>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/farhanf7n/"
                  className="hover:underline text-xl opacity-65"
                >
                  LinkedIn
                </a>
              </Magnetic>
            </div>
          </div>
          <div className="mt-6">
            <div className="pl-8">
              <h1 className="capitalize mb-2 text-2xl">Location</h1>
              <Magnetic>
                <p className=" text-xl opacity-65">Faisalabad, Pakistan</p>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
      {notifications.length > 0 && (
        <div className="flex flex-col gap-1 w-96 fixed top-2 right-2 z-50 pointer-events-none">
          <AnimatePresence>
            {notifications.map((n) => (
              <Notification removeNotif={removeNotif} {...n} key={n.id} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
export default Contacts;

const NOTIFICATION_TTL = 3000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="px-2 py-3 flex items-start rounded-md gap-2 font-medium shadow-lg text-white bg-green-600 pointer-events-auto"
    >
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        X
      </button>
    </motion.div>
  );
};

const generateRandomNotif = (text) => {
  const data = {
    id: Math.random(),
    text: `New notification: ${text}`,
  };

  return data;
};
