const roadsideAssitance = () => (
  <div id="roadmain">
    <div id="roadmaininner">
      <div className="bg-indigo-600">
        <div className="lg:grid lg:grid-cols-2">
          <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
              <span className="block">Ready to dive in?</span>
              <span className="block">Start your free trial today.</span>
            </h2>
            <p className="text-gray-300 mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <div className="inline-block shadow mt-5">
              <a
                href="/"
                className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="lg:relative lg:mt-16">
            {/* <img class="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md" src=""> */}
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default roadsideAssitance;
