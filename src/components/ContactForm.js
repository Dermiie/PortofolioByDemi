function ContactForm() {
  return (
    <form>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Your name"
          className="border w-[50%] rounded-md p-2"
        ></input>
        <input
          type="email"
          placeholder="Your Email"
          className="border w-[50%] rounded-md p-2"
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
        className="px-8 py-4 rounded-full bg-blue-500 text-xl text-white"
      >
        Submit Message
      </button>
    </form>
  );
}

export default ContactForm;
