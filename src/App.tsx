import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { DumbbellModel } from './components/DumbbellModel';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Instagram, MessageCircle, MapPin, Clock, ArrowRight, User, Phone } from 'lucide-react';

// Centralized configurations - Placeholders to be replaced by the owner
const WHATSAPP_NUMBER = "910000000000"; // Replace with your real WhatsApp number (with country code, e.g. 919876543210)
const INSTAGRAM_URL = "https://instagram.com/YOUR_INSTAGRAM_HANDLE"; // Replace with your real Instagram URL

// Dynamic WhatsApp message helper
const getWhatsAppUrl = (text: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export default function App() {
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;
    const message = `Hi Amit sir, my name is ${leadName} and my phone number is ${leadPhone}. I would like to book a free trial session at Fitness 360° Gym in Ram Park!`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  // Gallery items using stunning high-quality Unsplash image URLs that perfectly match the user's real physical gym photos
  const galleryItems = [
    { id: 2, src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop", title: "Strength Machine Floor", category: "Leg Extensions" },
    { id: 3, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", title: "Powerlifting & Racks", category: "Free Weights" },
    { id: 4, src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop", title: "Kettlebells & Functional Zone", category: "Functional Training" },
    { id: 6, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop", title: "1-on-1 Form Correction", category: "Amit Sir Coaching" }
  ];

  return (
    <>
      <BackgroundAnimation />
      
      <header className="sticky top-0 z-50 bg-[#111111e6] backdrop-blur-md border-b border-line">
        <nav className="flex items-center justify-between py-4 px-6 max-w-[1100px] mx-auto">
          <div className="font-bebas text-[22px] tracking-widest">
            FITNESS <span className="text-flame">360°</span>
          </div>
          <div className="hidden sm:flex gap-7 text-sm font-semibold uppercase tracking-wider">
            <a href="#about" className="opacity-75 hover:opacity-100 transition-opacity">About</a>
            <a href="#gallery" className="opacity-75 hover:opacity-100 transition-opacity">Gallery</a>
            <a href="#offer" className="opacity-75 hover:opacity-100 transition-opacity">Training</a>
            <a href="#pricing" className="opacity-75 hover:opacity-100 transition-opacity">Pricing</a>
            <a href="#reviews" className="opacity-75 hover:opacity-100 transition-opacity">Reviews</a>
            <a href="#faq" className="opacity-75 hover:opacity-100 transition-opacity">FAQ</a>
            <a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">Visit</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-3 items-center">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-75 hover:opacity-100 hover:text-flame transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={getWhatsAppUrl("Hi Amit sir, I am reaching out from your website.")} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="opacity-75 hover:opacity-100 hover:text-flame transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <a
              className="bg-flame text-ink px-4 py-2.5 rounded-sm font-extrabold text-[13px] uppercase tracking-wide hover:brightness-110 transition-all"
              href={getWhatsAppUrl("Hi, I want to know more about Fitness 360° Gym")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </nav>
      </header>

      <section className="pt-24 pb-20 px-6 max-w-[1100px] mx-auto relative border-b border-line lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 relative z-10">
          <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-flame mb-5 flex items-center gap-2.5 before:content-[''] before:w-6 before:h-px before:bg-flame">
            Ram Park · Rajkot
          </div>
          <h1 className="text-[clamp(52px,10vw,108px)] max-w-[900px]">
            Trained by <em className="not-italic text-flame">Amit sir</em>.<br />
            Not a franchise.
          </h1>
          <p className="mt-7 text-[19px] text-bone-dim max-w-[520px] font-normal">
            A small strength gym where the owner still corrects your form personally — diet guidance, real attention, zero crowd politics.
          </p>
          <div className="flex gap-3.5 mt-10 flex-wrap">
            <a
              className="bg-flame text-ink px-7 py-4 font-extrabold uppercase text-sm tracking-wide rounded-sm hover:-translate-y-0.5 transition-transform inline-flex items-center gap-2"
              href={getWhatsAppUrl("Hi, I'd like to visit Fitness 360° for a trial session.")}
              target="_blank"
              rel="noreferrer"
            >
              Book a free trial →
            </a>
            <a
              className="border border-line text-bone px-7 py-4 font-bold uppercase text-sm tracking-wide rounded-sm hover:border-bone-dim transition-colors"
              href="#offer"
            >
              See what's included
            </a>
          </div>
          
          <div className="mt-14 flex flex-wrap gap-y-8 border-t border-line pt-7">
            <div className="pr-10 mr-10 border-r border-line last:border-r-0">
              <div className="font-bebas text-[40px] text-flame leading-none">4.8★</div>
              <div className="text-[12px] text-bone-dim uppercase tracking-widest mt-1.5">Google rating</div>
            </div>
            <div className="pr-10 mr-10 border-r border-line last:border-r-0">
              <div className="font-bebas text-[40px] text-flame leading-none">6AM–10PM</div>
              <div className="text-[12px] text-bone-dim uppercase tracking-widest mt-1.5">Open daily</div>
            </div>
            <div className="pr-10 mr-10 border-r border-line last:border-r-0">
              <div className="font-bebas text-[40px] text-flame leading-none">1:1</div>
              <div className="text-[12px] text-bone-dim uppercase tracking-widest mt-1.5">Personal diet</div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 h-[400px] lg:h-[600px] mt-12 lg:mt-0 relative overflow-hidden rounded-sm shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" 
            alt="Fitness 360 Gym Equipment" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="about" className="py-24 px-6 border-b border-line">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center max-w-[1100px] mx-auto">
          <div>
            <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">The gym</div>
            <h2 className="mb-6 text-[clamp(34px,5vw,56px)] font-bebas tracking-wide">Small on purpose.</h2>
            <p className="text-bone-dim text-[16.5px] mb-4 max-w-[520px]">
              Fitness 360° isn't trying to be the biggest gym on the ring road. It's a focused space where members actually get seen — proper form correction, workout plans built around your goals, and diet advice that isn't copy-pasted.
            </p>
            <p className="text-bone-dim text-[16.5px] mb-6 max-w-[520px]">
              Members keep mentioning the same thing: it feels personal. Aesthetic interiors, a calm atmosphere, and a coach who remembers your name and your numbers.
            </p>
            
            <div className="bg-steel border-l-4 border-flame p-6 text-[15.5px] text-bone leading-relaxed rounded-r-sm">
              "Very supportive staff and specially the owner Mr Amit Sir — he guides very well and helps us understand correct form of exercise and diet guidance."
              <cite className="block mt-3 text-[12px] text-bone-dim not-italic font-semibold">— Google review, Fitness 360° Gym</cite>
            </div>
          </div>
          
          <div className="relative group rounded-sm overflow-hidden border border-line aspect-[4/5] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" 
              alt="Fitness 360° Gym Interior" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-105 group-hover:scale-102 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-ink/75 backdrop-blur-sm p-4 border border-line rounded-sm">
              <div className="font-bebas text-lg tracking-wide text-bone">Fitness 360° Ram Park</div>
              <div className="text-[11px] text-flame font-bold uppercase tracking-widest mt-0.5">Owner-Operated Strength Space</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 border-b border-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">Our Space</div>
          <h2 className="mb-10 text-[clamp(34px,5vw,56px)]">The Gym Gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden bg-steel border border-line rounded-sm aspect-[4/3] cursor-pointer shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <span className="text-flame text-xs font-bold uppercase tracking-widest drop-shadow-md">{item.category}</span>
                  <h3 className="text-xl text-white font-bold mt-1 drop-shadow-md">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="py-24 px-6 border-b border-line bg-line bg-opacity-5 relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto mb-14 lg:flex gap-12 items-end">
          <div className="lg:w-1/2">
            <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">Training</div>
            <h2 className="text-[clamp(34px,5vw,56px)] leading-tight">What you actually get</h2>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-bone-dim text-[16px]">
            No false promises. Just the right equipment, the right environment, and a trainer who actually cares about your fitness journey.
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          <div className="bg-ink group overflow-hidden border border-line rounded-sm shadow-lg flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop" alt="Form Correction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-6 flex-grow">
              <div className="font-bebas text-flame-dim text-[20px] mb-3">01</div>
              <h3 className="text-[24px] mb-3 font-semibold text-bone">Form correction</h3>
              <p className="text-bone-dim text-[14.5px] leading-relaxed">Every new member is walked through proper technique before being left to lift alone. No guessing, no injuries from bad form.</p>
            </div>
          </div>
          
          <div className="bg-ink group overflow-hidden border border-line rounded-sm shadow-lg flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop" alt="Diet Guidance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-6 flex-grow">
              <div className="font-bebas text-flame-dim text-[20px] mb-3">02</div>
              <h3 className="text-[24px] mb-3 font-semibold text-bone">Diet guidance</h3>
              <p className="text-bone-dim text-[14.5px] leading-relaxed">Simple, practical eating plans that fit your schedule and goals — not a generic PDF. Tailored specifically for you.</p>
            </div>
          </div>
          
          <div className="bg-ink group overflow-hidden border border-line rounded-sm shadow-lg flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop" alt="Real Attention" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
            </div>
            <div className="p-8 pt-6 flex-grow">
              <div className="font-bebas text-flame-dim text-[20px] mb-3">03</div>
              <h3 className="text-[24px] mb-3 font-semibold text-bone">Real attention</h3>
              <p className="text-bone-dim text-[14.5px] leading-relaxed">A smaller member base means the coach actually knows your progress, week over week. You aren't just another number.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 border-b border-line">
        <div className="max-w-[1100px] mx-auto mb-14 text-center md:text-left">
          <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">Pricing</div>
          <h2 className="text-[clamp(34px,5vw,56px)]">Clear Memberships</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <div className="bg-steel p-10 border-t-2 border-transparent hover:border-flame transition-colors">
            <h3 className="text-[28px] mb-2">Monthly</h3>
            <div className="font-bebas text-[48px] text-flame mb-4">₹1,500<span className="text-[20px] text-bone-dim ml-2">/mo</span></div>
            <ul className="text-bone-dim text-[15px] space-y-3 mb-8">
              <li className="flex items-center gap-3">✓ Full gym access</li>
              <li className="flex items-center gap-3">✓ Basic diet chart</li>
              <li className="flex items-center gap-3">✓ Form correction</li>
            </ul>
            <a href="#contact" className="block text-center border border-line text-bone px-6 py-3 font-bold uppercase text-sm tracking-wide rounded-sm hover:border-bone-dim transition-colors">Join Now</a>
          </div>
          <div className="bg-steel p-10 border-t-2 border-flame relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-flame text-ink font-bold uppercase tracking-wider text-[11px] px-3 py-1 rounded-sm">Most Popular</div>
            <h3 className="text-[28px] mb-2">Quarterly</h3>
            <div className="font-bebas text-[48px] text-flame mb-4">₹4,000<span className="text-[20px] text-bone-dim ml-2">/3 mo</span></div>
            <ul className="text-bone-dim text-[15px] space-y-3 mb-8">
              <li className="flex items-center gap-3">✓ Full gym access</li>
              <li className="flex items-center gap-3">✓ Personalized diet plan</li>
              <li className="flex items-center gap-3">✓ Dedicated progress tracking</li>
            </ul>
            <a href="#contact" className="block text-center bg-flame text-ink px-6 py-3 font-extrabold uppercase text-sm tracking-wide rounded-sm hover:brightness-110 transition-colors">Join Now</a>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 border-b border-line overflow-hidden">
        <div className="max-w-[1100px] mx-auto mb-14">
          <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">What members say</div>
          <h2 className="text-[clamp(34px,5vw,56px)]">Straight from Google</h2>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2 max-w-[1100px] mx-auto snap-x scrollbar-thin scrollbar-thumb-steel scrollbar-track-ink">
          <div className="min-w-[300px] md:min-w-[350px] snap-center bg-steel p-7 rounded-sm border-t-2 border-flame shrink-0">
            <div className="text-flame text-[14px] tracking-widest mb-3.5">★★★★★</div>
            <p className="text-[14.5px] text-bone-dim mb-4">"Very aesthetic interiors and cosy atmosphere to workout. Plus the guidance given by Mr Amit sir about diet and workout goals are extremely satisfying and valuable."</p>
            <div className="text-[13px] font-bold text-bone">Google reviewer</div>
          </div>
          <div className="min-w-[300px] md:min-w-[350px] snap-center bg-steel p-7 rounded-sm border-t-2 border-flame shrink-0">
            <div className="text-flame text-[14px] tracking-widest mb-3.5">★★★★★</div>
            <p className="text-[14.5px] text-bone-dim mb-4">"I really appreciate the supportive atmosphere and the focus on fitness, discipline, and overall well-being. Helped me improve not only my physical strength but also my confidence."</p>
            <div className="text-[13px] font-bold text-bone">Google reviewer</div>
          </div>
          <div className="min-w-[300px] md:min-w-[350px] snap-center bg-steel p-7 rounded-sm border-t-2 border-flame shrink-0">
            <div className="text-flame text-[14px] tracking-widest mb-3.5">★★★★★</div>
            <p className="text-[14.5px] text-bone-dim mb-4">"It's a perfect choice as it provides all necessary tips to improve body strength and personal attention too."</p>
            <div className="text-[13px] font-bold text-bone">Google reviewer</div>
          </div>
          <div className="min-w-[300px] md:min-w-[350px] snap-center bg-steel p-7 rounded-sm border-t-2 border-flame shrink-0">
            <div className="text-flame text-[14px] tracking-widest mb-3.5">★★★★★</div>
            <p className="text-[14.5px] text-bone-dim mb-4">"Best place for your fitness journey."</p>
            <div className="text-[13px] font-bold text-bone">Google reviewer</div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 border-b border-line bg-line bg-opacity-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
          <div>
            <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">FAQ</div>
            <h2 className="text-[clamp(34px,5vw,56px)]">Common Questions</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[22px] mb-3">Do I need to be experienced to join?</h3>
              <p className="text-bone-dim text-[15.5px]">Not at all. Amit sir ensures every beginner is taught proper form and given a structured routine. You won't be left wondering what to do.</p>
            </div>
            <div>
              <h3 className="text-[22px] mb-3">Is personal training mandatory?</h3>
              <p className="text-bone-dim text-[15.5px]">No. General guidance and form correction are included for all members. Dedicated 1-on-1 personal training is available but entirely optional.</p>
            </div>
            <div>
              <h3 className="text-[22px] mb-3">How crowded does it get?</h3>
              <p className="text-bone-dim text-[15.5px]">We cap memberships to prevent overcrowding. Peak hours (7-9 AM, 6-8 PM) are busy but manageable, and you rarely have to wait for equipment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1100px] mx-auto items-start">
          <div>
            <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">Visit</div>
            <h2 className="mb-6 text-[clamp(34px,5vw,56px)]">Come see it yourself.</h2>
            <p className="text-bone-dim mb-6 text-[16px] max-w-[420px]">
              Walk-ins welcome. First session is a free trial — no pressure to sign up on the spot.
            </p>
            <div className="flex gap-3.5 mb-4 text-[15px]">
              <MapPin className="text-flame w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <span className="text-flame font-bold block uppercase text-[12px] tracking-wider mb-0.5">Address</span>
                <span className="text-bone-dim">3rd Floor, Swami Complex, Jyoti Nagar Main Rd, Ram Park, Rajkot, Gujarat 360005</span>
              </div>
            </div>
            <div className="flex gap-3.5 mb-8 text-[15px]">
              <Clock className="text-flame w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <span className="text-flame font-bold block uppercase text-[12px] tracking-wider mb-0.5">Hours</span>
                <span className="text-bone-dim">Mon–Sat: 6:00 AM – 10:00 PM<br />Sunday: Closed</span>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-[240px] rounded-sm overflow-hidden border border-line">
              <iframe
                title="Fitness 360 Gym Location Map"
                src="https://maps.google.com/maps?q=Fitness%20360%20Gym%20Ram%20Park%20Rajkot%20Gujarat%20360005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          <div className="bg-steel p-8 md:p-10 rounded-sm">
            <h3 className="text-[28px] mb-2 font-bebas text-bone text-center md:text-left">Get a Free Trial Pass</h3>
            <p className="text-bone-dim text-[14px] mb-6 text-center md:text-left">
              Enter your details to generate your trial pass, or text directly on WhatsApp.
            </p>
            
            {/* Lead capture form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase text-bone-dim tracking-wider mb-1.5" htmlFor="name-input">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-bone-dim/60" />
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full bg-ink/50 border border-line rounded-sm py-3 pl-11 pr-4 text-sm text-bone placeholder-bone-dim/40 focus:border-flame focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase text-bone-dim tracking-wider mb-1.5" htmlFor="phone-input">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-bone-dim/60" />
                  <input
                    id="phone-input"
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full bg-ink/50 border border-line rounded-sm py-3 pl-11 pr-4 text-sm text-bone placeholder-bone-dim/40 focus:border-flame focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-flame text-ink py-3.5 font-extrabold uppercase text-sm tracking-wide rounded-sm hover:brightness-110 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(255,90,31,0.15)]"
              >
                Claim Free Pass <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-line"></div>
              <span className="flex-shrink mx-4 text-xs font-semibold uppercase text-bone-dim/40 tracking-widest">OR</span>
              <div className="flex-grow border-t border-line"></div>
            </div>
            
            <a
              className="mt-4 w-full border border-line text-bone px-7 py-3.5 font-bold uppercase text-sm tracking-wide rounded-sm flex items-center justify-center gap-2 hover:border-bone-dim transition-colors"
              href={getWhatsAppUrl("Hi Amit sir, I'd like to book a free trial session at Fitness 360°.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="w-5 h-5 text-flame" /> Quick Text on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-bone-dim text-[13px] mb-[72px] md:mb-0 border-t border-line/10">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Fitness 360° Gym · Ram Park, Rajkot &nbsp;·&nbsp; <span className="text-flame">Built for the community.</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="opacity-75 hover:opacity-100 hover:text-flame transition-all flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <span className="opacity-30">|</span>
            <a href={getWhatsAppUrl("Hi Amit sir, I'm reaching out from your website.")} target="_blank" rel="noreferrer" className="opacity-75 hover:opacity-100 hover:text-flame transition-all flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-ink/90 backdrop-blur-md border-t border-line md:hidden z-50 flex justify-center">
        <a
          className="bg-flame text-ink px-7 py-3.5 w-full text-center font-extrabold uppercase text-[13px] tracking-wide rounded-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,90,31,0.2)]"
          href={getWhatsAppUrl("Hi Amit sir, I'd like to book a free trial at Fitness 360°")}
          target="_blank"
          rel="noreferrer"
        >
          Book Free Trial
        </a>
      </div>
    </>
  );
}
