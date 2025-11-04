export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600">
              “I’m a third-year engineering student specializing in AI and Data Science, driven by curiosity and a passion for solving real-world problems through data. My interests span NLP, machine learning, and developing impactful web applications.”
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-xs uppercase tracking-wider text-indigo-600 font-semibold">Languages</p>
                <ul className="mt-3 space-y-2 text-gray-800">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-xs uppercase tracking-wider text-indigo-600 font-semibold">Libraries</p>
                <ul className="mt-3 space-y-2 text-gray-800">
                  <li>NumPy</li>
                  <li>Pandas</li>
                  <li>Matplotlib</li>
                  <li>Seaborn</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-xs uppercase tracking-wider text-indigo-600 font-semibold">Tools</p>
                <ul className="mt-3 space-y-2 text-gray-800">
                  <li>Jupyter Notebook</li>
                  <li>Streamlit</li>
                  <li>IntelliJ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
