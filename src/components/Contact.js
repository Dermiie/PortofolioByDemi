import ContactAbout from './ContactAbout';

import Footer from './Footer';

function Contact() {
  return (
    <div className="bg-stone-50 h-screen text-center gap-5 grid lg:grid-rows-[10rem,auto,10rem]">
      <header>
        <p className="text-lg md:text-2xl lg:text-4xl font-medium  uppercase text-stone-700 tracking-normal pt-10  lg:pt-[6rem]">
          Contact
        </p>
      </header>
      <section>
        <ContactAbout></ContactAbout>
      </section>
      <footer className="mt-auto pb-12 pt-5 bg-stone-100">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Contact;
