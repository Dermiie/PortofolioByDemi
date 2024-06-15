import ContactAbout from './ContactAbout';
import ContactForm from './ContactForm';
import Footer from './Footer';

function Contact() {
  return (
    <div className="bg-stone-50 h-screen text-center gap-5 grid grid-rows-[10rem,auto,10rem]">
      <header>
        <p className="text-4xl font-medium  uppercase text-stone-700 tracking-normal  pt-[6rem]">
          Contact
        </p>
      </header>
      <section>
        <main className=" grid grid-cols-3 w-[80%] mx-auto mt-8 ">
          <aside>
            <ContactAbout></ContactAbout>
          </aside>
          <div className="col-span-2">
            <ContactForm></ContactForm>
          </div>
        </main>
      </section>
      <footer className="mt-auto pb-12 pt-5 bg-stone-100">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Contact;
