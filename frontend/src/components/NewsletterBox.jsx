import React from "react";

const NewsletterBox = () => {
    const onSubmitHandler = () => {
        event.preventDefault();
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Be the first to get our latest updates and
        offers.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-md overflow-hidden">
        <input
          type="email"
          name="email"
          aria-label="Email address"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 outline-none py-3 px-2"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs py-4 px-10 hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
