const Footer = () => {
  return (
    <footer className="bg-[var(--bg-color)] md:flex justify-between pb-20 text-white px-6 md:px-20 space-y-10">
      <div className="space-y-8 md:flex flex-col justify-between">
        <div className="space-y-4">
          <h1 className="playfair-display text-3xl font-bold">MNTN</h1>
          <p className="leading-8 md:w-3/4">
            Get out there & discover your next slope, mountain & destination!
          </p>
        </div>
        <p className="text-[#fff5] text-sm">
          Copyright 2020 MNTN, Inc. Terms & Privacy
        </p>
      </div>
      <div className="space-y-10 md:flex gap-40">
        <div className="space-y-6">
          <h1 className="text-2xl text-[var(--text-color)] font-bold">
            More on The Blog
          </h1>
          <div className="space-y-4">
            <p>About MNTN</p>
            <p>Contributors & Writers</p>
            <p>Write For Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl text-[var(--text-color)] font-bold">
            More on MNTN
          </h1>
          <div className="space-y-4">
            <p>The Team</p>
            <p>Jobs</p>
            <p>Press</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
