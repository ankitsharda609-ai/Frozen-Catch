
import React, { useState } from 'react';

// Sub-components defined outside for performance and clarity

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <i className="fas fa-snowflake text-blue-600 text-2xl"></i>
        <span className="font-bold text-xl tracking-tight text-blue-900 uppercase">Frozen Basin Pros</span>
      </div>
      <a 
        href="tel:8443406413" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
      >
        <i className="fas fa-phone"></i>
        <span className="hidden sm:inline">(844) 340-6413</span>
        <span className="sm:hidden">Call</span>
      </a>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(30, 58, 138, 0.75)), url("https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1470")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    />
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <div className="inline-block bg-blue-600/30 backdrop-blur-md border border-blue-400/30 px-4 py-1.5 rounded-full text-blue-100 font-semibold text-sm mb-6 uppercase tracking-widest">
        Naperville's #1 Drainage Specialists
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Frozen Catch Basin <span className="text-blue-400">Thawing</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
        Don't let ice blocks flood your property. We use industrial steam technology to clear storm drains and prevent winter water damage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#services" className="bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold transition-colors">
          View Services
        </a>
        <a href="tel:8443406413" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
          Emergency Call-Out
        </a>
      </div>
    </div>
  </section>
);

const ServiceCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/40 transition-all group">
    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <i className={`${icon} text-3xl text-blue-600 group-hover:text-white`}></i>
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => (
  <section id="services" className="py-24 max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Winter Solutions</h2>
      <p className="text-slate-600 max-w-xl mx-auto">Expert care for Naperville's toughest drainage challenges during the freeze-thaw cycles.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <ServiceCard 
        icon="fas fa-snowflake"
        title="Basin Thawing"
        description="Professional high-heat steam thawing safely melts solid ice blocks in catch basins and storm drains without damaging pipes."
      />
      <ServiceCard 
        icon="fas fa-broom"
        title="Storm Drain Cleaning"
        description="Clearing silt, leaves, and winter debris to ensure maximum flow capacity during rapid snowmelt events."
      />
      <ServiceCard 
        icon="fas fa-water"
        title="Yard Drainage"
        description="Assessment and clearing of residential yard drains to prevent backyard flooding and structural ice damage."
      />
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{question}</span>
        <i className={`fas fa-chevron-down text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => (
  <section className="bg-white py-24">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-600">Common questions about winter drainage maintenance in Illinois.</p>
      </div>
      <div className="space-y-2">
        <FAQItem 
          question="What causes a catch basin to freeze?"
          answer="Standing water inside the basin from autumn rain or early snow freezes solid when temperatures drop below 32°F. Debris like leaves can trap this water, speeding up the freezing process."
        />
        <FAQItem 
          question="Is frozen drain thawing an emergency?"
          answer="Yes. A frozen drain prevents water from escaping your property, which can lead to rapid flooding during a thaw or heavy rain, creating dangerous ice rinks on your driveway."
        />
        <FAQItem 
          question="Do you service commercial properties?"
          answer="Absolutely. We handle everything from single-family home yard drains to large-scale commercial parking lot catch basins in Naperville and surrounding areas."
        />
        <FAQItem 
          question="How do I prevent my catch basin from freezing?"
          answer="Regular cleaning in late autumn to remove debris and ensuring the basin is properly graded are the best preventative measures."
        />
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <i className="fas fa-snowflake text-blue-500 text-2xl"></i>
            <span className="font-bold text-xl tracking-tight text-white uppercase">Frozen Basin Pros</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Naperville's trusted experts for emergency winter drainage solutions. Dedicated to keeping our community safe from flooding and ice hazards.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Service Area</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
              <span>100 W Jefferson Ave<br />Naperville, IL 60540</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-clock text-blue-500"></i>
              <span>Rapid Response Winter Hours</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
          <a 
            href="tel:8443406413" 
            className="flex items-center gap-3 text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors mb-4"
          >
            <i className="fas fa-phone-alt"></i>
            (844) 340-6413
          </a>
          <p className="text-slate-500">Call anytime for immediate emergency service.</p>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Frozen Catch Basin Thawing. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Urgent Local SEO Banner */}
        <section className="bg-blue-600 py-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Emergency Flooding in Naperville?</h3>
                <p className="text-blue-100">Our teams are stationed locally for the 60540, 60563, and 60564 zip codes.</p>
              </div>
            </div>
            <a 
              href="tel:8443406413" 
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
            >
              Get Help Now
            </a>
          </div>
        </section>

        <Services />
        
        {/* Detailed Content Section (Markdown Content Equivalent) */}
        <section className="bg-slate-100 py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">
                Naperville Winter Drainage Defense
              </h2>
              <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>
                  When the brutal Illinois winter hits, your property's drainage system is the first line of defense against flooding. However, when catch basins freeze solid, that defense disappears, leading to dangerous ice patches and costly water damage.
                </p>
                <h3 className="text-xl font-bold text-slate-800">Why Your Catch Basin Floods</h3>
                <p>
                  In Naperville, the "freeze-thaw" cycle causes standing water in these basins to turn into solid ice blocks. Once frozen, new snowmelt or rain has nowhere to go, resulting in:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Surface Flooding:</strong> Water backups on driveways and parking lots.</li>
                  <li><strong>Ice Hazards:</strong> "Black ice" forming from overflowed water.</li>
                  <li><strong>Structural Damage:</strong> Heaving concrete and foundation seepage.</li>
                </ul>
                <h3 className="text-xl font-bold text-slate-800">Our Professional Thawing Process</h3>
                <p>
                  We don't just "chip away" at the ice. We use professional-grade equipment to ensure your drains are clear without damaging the infrastructure:
                </p>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>High-Pressure Steam Thawing:</strong> Safely melts ice blocks in minutes using controlled heat that won't crack frozen concrete.
                  </li>
                  <li>
                    <strong>Debris Removal:</strong> We vacuum out the silt and leaves that often act as the "rebar" within ice blocks.
                  </li>
                  <li>
                    <strong>Flow Testing:</strong> We verify that the entire line to the main storm sewer is clear, not just the surface basin.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
