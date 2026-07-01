import { Canvas } from '@react-three/fiber';
import { DumbbellModel } from './components/DumbbellModel';
import { BackgroundAnimation } from './components/BackgroundAnimation';

export default function App() {
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
            <a href="#offer" className="opacity-75 hover:opacity-100 transition-opacity">Training</a>
            <a href="#pricing" className="opacity-75 hover:opacity-100 transition-opacity">Pricing</a>
            <a href="#reviews" className="opacity-75 hover:opacity-100 transition-opacity">Reviews</a>
            <a href="#faq" className="opacity-75 hover:opacity-100 transition-opacity">FAQ</a>
            <a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">Visit</a>
          </div>
          <a
            className="bg-flame text-ink px-4 py-2.5 rounded-sm font-extrabold text-[13px] uppercase tracking-wide hover:brightness-110 transition-all"
            href="https://wa.me/910000000000?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Fitness%20360%C2%B0%20Gym"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
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
              href="https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20visit%20Fitness%20360%C2%B0%20for%20a%20trial"
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
        
        <div className="lg:w-1/2 h-[400px] lg:h-[600px] mt-12 lg:mt-0 relative cursor-grab active:cursor-grabbing">
          <Canvas shadows>
            <DumbbellModel />
          </Canvas>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-bone-dim uppercase tracking-widest pointer-events-none opacity-50">
            Drag to interact
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 border-b border-line">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-start max-w-[1100px] mx-auto">
          <div>
            <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">The gym</div>
            <h2 className="mb-6 text-[clamp(34px,5vw,56px)]">Small on purpose.</h2>
            <p className="text-bone-dim text-[16.5px] mb-4 max-w-[480px]">
              Fitness 360° isn't trying to be the biggest gym on the ring road. It's a focused space where members actually get seen — proper form correction, workout plans built around your goals, and diet advice that isn't copy-pasted.
            </p>
            <p className="text-bone-dim text-[16.5px] mb-4 max-w-[480px]">
              Members keep mentioning the same thing: it feels personal. Aesthetic interiors, a calm atmosphere, and a coach who remembers your name and your numbers.
            </p>
          </div>
          <div className="bg-steel border-l-4 border-flame p-7 text-[16px] text-bone leading-relaxed">
            "Very supportive staff and specially the owner Mr Amit Sir — he guides very well and helps us understand correct form of exercise and diet guidance."
            <cite className="block mt-3.5 text-[13px] text-bone-dim not-italic font-semibold">— Google review, Fitness 360° Gym</cite>
          </div>
        </div>
      </section>

      <section id="offer" className="py-24 px-6 border-b border-line bg-line bg-opacity-5">
        <div className="max-w-[640px] mb-14 mx-auto md:mx-0 max-w-[1100px]">
          <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">Training</div>
          <h2 className="text-[clamp(34px,5vw,56px)]">What you actually get</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line max-w-[1100px] mx-auto">
          <div className="bg-ink p-9">
            <div className="font-bebas text-flame-dim text-[20px] mb-5">01</div>
            <h3 className="text-[26px] mb-3">Form correction</h3>
            <p className="text-bone-dim text-[15px]">Every new member is walked through proper technique before being left to lift alone. No guessing, no injuries from bad form.</p>
          </div>
          <div className="bg-ink p-9">
            <div className="font-bebas text-flame-dim text-[20px] mb-5">02</div>
            <h3 className="text-[26px] mb-3">Diet guidance</h3>
            <p className="text-bone-dim text-[15px]">Simple, practical eating plans that fit your schedule and goals — not a generic PDF.</p>
          </div>
          <div className="bg-ink p-9">
            <div className="font-bebas text-flame-dim text-[20px] mb-5">03</div>
            <h3 className="text-[26px] mb-3">Real attention</h3>
            <p className="text-bone-dim text-[15px]">A smaller member base means the coach actually knows your progress, week over week.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1100px] mx-auto items-center">
          <div>
            <div className="text-[13px] font-bold text-flame uppercase tracking-[0.1em] mb-3.5">Visit</div>
            <h2 className="mb-6 text-[clamp(34px,5vw,56px)]">Come see it yourself.</h2>
            <p className="text-bone-dim mb-6 text-[16px] max-w-[420px]">
              Walk-ins welcome. First session is a free trial — no pressure to sign up on the spot.
            </p>
            <div className="flex gap-3.5 mb-4 text-[15px]">
              <span className="text-flame font-bold min-w-[90px] uppercase text-[12px] tracking-wider pt-[3px]">Address</span>
              <span className="text-bone-dim">3rd Floor, Swami Complex, Jyoti Nagar Main Rd, Ram Park, Rajkot, Gujarat 360005</span>
            </div>
            <div className="flex gap-3.5 mb-4 text-[15px]">
              <span className="text-flame font-bold min-w-[90px] uppercase text-[12px] tracking-wider pt-[3px]">Hours</span>
              <span className="text-bone-dim">Mon–Sat: 6:00 AM – 10:00 PM<br />Sunday: Closed</span>
            </div>
          </div>
          <div className="bg-steel p-11 rounded-sm text-center">
            <h3 className="text-[32px] mb-3.5">Ready when you are</h3>
            <p className="text-bone-dim text-[14.5px] mb-7">Message on WhatsApp to book your free trial session this week.</p>
            <a
              className="bg-flame text-ink px-7 py-4 font-extrabold uppercase text-sm tracking-wide rounded-sm w-full block hover:brightness-110 transition-colors"
              href="https://wa.me/910000000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20trial%20at%20Fitness%20360%C2%B0"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center text-bone-dim text-[13px] mb-[72px] md:mb-0">
        Fitness 360° Gym · Ram Park, Rajkot &nbsp;·&nbsp; <span className="text-flame">Built for the community.</span>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-ink/90 backdrop-blur-md border-t border-line md:hidden z-50 flex justify-center">
        <a
          className="bg-flame text-ink px-7 py-3.5 w-full text-center font-extrabold uppercase text-[13px] tracking-wide rounded-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,90,31,0.2)]"
          href="https://wa.me/910000000000?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial%20at%20Fitness%20360%C2%B0"
          target="_blank"
          rel="noreferrer"
        >
          Book Free Trial
        </a>
      </div>
    </>
  );
}
