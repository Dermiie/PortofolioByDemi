function ContactForm() {
  return (
    <form>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Your name"
          className="border lg:w-[50%] rounded-md p-2"
        ></input>
        <input
          type="email"
          placeholder="Your Email"
          className="border lg:w-[50%] rounded-md p-2"
        ></input>
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="border w-full rounded-md p-2 mb-4"
      ></input>
      <textarea
        rows={5}
        className="w-full rounded-md p-2 mb-4"
        placeholder="Message"
      ></textarea>

      <button
        type="submit"
        className="px-4 py-3 lg:px-8 lg:py-3 rounded-full bg-blue-900 text-xl mt-5 text-white"
      >
        Submit Message
      </button>
    </form>
  );
}

export default ContactForm;
