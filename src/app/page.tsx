"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, BarChart, Briefcase, Building, Crown, Gem, Gift, Handshake, Heart, Leaf, Linkedin, Mail, MapPin, MessageCircle, Sparkles, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {name: "Rooms", id: "product"},
            {name: "Amenities", id: "feature"},
            {name: "Reviews", id: "testimonial"},
            {name: "About", id: "about"},
            {name: "Contact", id: "contact"}
          ]}
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Luxuria Hotel"
          brandName="Luxuria Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled elegance at Luxuria Hotel, where every moment becomes an unforgettable memory in the heart of the city."
          tag="5-Star Excellence"
          tagIcon={Star}
          buttons={[
            {text: "Book Now", href: "contact"},
            {text: "Explore Rooms", href: "product"}
          ]}
          imageSrc="https://images.pexels.com/photos/7168582/pexels-photo-7168582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxuria Hotel elegant exterior at sunset"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Where Elegance Meets Excellence"
          description="Discover the perfect blend of sophisticated luxury and personalized service that has defined our hotel for over three decades."
          tag="Our Heritage"
          tagIcon={Crown}
          bulletPoints={[
            {
              title: "Prime Location",
              description: "Located in the prestigious downtown district with stunning city views",
              icon: MapPin
            },
            {
              title: "Award-Winning Service",
              description: "Recognized globally for exceptional guest experiences and attention to detail",
              icon: Award
            },
            {
              title: "Exclusive Amenities",
              description: "World-class spa, fine dining, and luxury facilities for the discerning traveler",
              icon: Sparkles
            },
            {
              title: "Sustainability Focus",
              description: "Committed to environmental responsibility without compromising on luxury",
              icon: Leaf
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel spa and wellness center"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Unmatched Amenities"
          description="Experience world-class facilities designed to exceed every expectation during your stay with us."
          tag="Premium Services"
          tagIcon={Gem}
          features={[
            {
              title: "Michelin-Star Restaurant",
              description: "Savor exquisite cuisine crafted by award-winning chefs in an elegant dining atmosphere.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant interior",
              button: {text: "View Menu", href: "restaurant"}
            },
            {
              title: "Rooftop Infinity Pool",
              description: "Relax in our stunning rooftop pool with panoramic city views and premium poolside service.",
              imageSrc: "https://images.pexels.com/photos/2736187/pexels-photo-2736187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop infinity pool with city views",
              button: {text: "Pool Hours", href: "amenities"}
            },
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body with our comprehensive spa treatments and wellness programs.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room",
              button: {text: "Book Treatment", href: "spa"}
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Luxury Accommodations"
          description="Choose from our collection of meticulously designed suites and rooms, each offering unparalleled comfort and elegance."
          tag="Room Selection"
          tagIcon={Building}
          products={[
            {
              id: "deluxe",
              name: "Deluxe City View Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe hotel room with city view",
              initialQuantity: 1,
              onProductClick: () => console.log('Deluxe room selected')
            },
            {
              id: "premium",
              name: "Premium Executive Suite",
              price: "$549/night",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium executive suite bedroom",
              initialQuantity: 1,
              onProductClick: () => console.log('Premium suite selected')
            },
            {
              id: "presidential",
              name: "Presidential Penthouse Suite",
              price: "$1,299/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential penthouse suite living area",
              initialQuantity: 1,
              onProductClick: () => console.log('Presidential suite selected')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Exclusive Packages"
          description="Discover our carefully curated packages designed to enhance your luxury experience with special amenities and services."
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "romantic",
              badge: "Romance Package",
              badgeIcon: Heart,
              price: "$899/night",
              subtitle: "Perfect for couples seeking an intimate getaway",
              buttons: [
                {text: "Book Romance", href: "contact"},
                {text: "Package Details", href: "packages"}
              ],
              features: [
                "Premium suite with champagne welcome",
                "Couples spa treatment included",
                "Private candlelit dinner for two",
                "Late checkout until 2 PM",
                "Complimentary breakfast in bed"
              ]
            },
            {
              id: "business",
              badge: "Business Elite",
              badgeIcon: Briefcase,
              price: "$699/night",
              subtitle: "Designed for the executive traveler",
              buttons: [
                {text: "Book Business", href: "contact"},
                {text: "Corporate Rates", href: "business"}
              ],
              features: [
                "Executive suite with city views",
                "Complimentary airport transfer",
                "Business center access 24/7",
                "Express laundry service",
                "Meeting room credits included"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to exceptional service is reflected in these achievements that speak to our dedication to luxury hospitality."
          tag="Hotel Statistics"
          tagIcon={BarChart}
          metrics={[
            {
              id: "1",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating based on reviews",
              icon: Star
            },
            {
              id: "2",
              value: "50K+",
              title: "guests",
              description: "Distinguished guests welcomed annually",
              icon: Users
            },
            {
              id: "3",
              value: "25",
              title: "awards",
              description: "International hospitality awards received",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Distinguished Team"
          description="Our passionate hospitality professionals are dedicated to creating exceptional experiences for every guest."
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Victoria Sterling",
              role: "General Manager",
              description: "With over 20 years in luxury hospitality, Victoria ensures every guest receives the finest experience.",
              imageSrc: "https://images.pexels.com/photos/4060364/pexels-photo-4060364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Victoria Sterling, General Manager",
              socialLinks: [
                {icon: "Linkedin", url: "https://linkedin.com/in/victoria-sterling"},
                {icon: "Mail", url: "mailto:victoria@luxuriahotel.com"}
              ]
            },
            {
              id: "2",
              name: "James Wellington",
              role: "Chief Concierge",
              description: "James and his team provide personalized service to make your stay truly memorable and seamless.",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wellington, Chief Concierge",
              socialLinks: [
                {icon: "Phone", url: "tel:+1234567890"},
                {icon: "Mail", url: "mailto:concierge@luxuriahotel.com"}
              ]
            },
            {
              id: "3",
              name: "Chef Marcus Dubois",
              role: "Executive Chef",
              description: "Michelin-starred chef creating exceptional culinary experiences with locally sourced premium ingredients.",
              imageSrc: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Marcus Dubois, Executive Chef",
              socialLinks: [
                {icon: "Instagram", url: "https://instagram.com/chefmarcusdubois"},
                {icon: "Globe", url: "https://marcusdubois-chef.com"}
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our valued guests about their extraordinary stays at Luxuria Hotel."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Corporate Executive",
              testimonial: "Exceptional service from arrival to departure. The attention to detail and personalized care made our anniversary celebration truly unforgettable.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell, guest photo"
            },
            {
              id: "2",
              name: "David Harrison",
              role: "International Business Traveler",
              testimonial: "The business facilities and executive service exceeded my expectations. The perfect blend of luxury and functionality for the discerning professional.",
              imageSrc: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Harrison, guest photo"
            },
            {
              id: "3",
              name: "Emma & Robert Chen",
              role: "Honeymooners",
              testimonial: "Our honeymoon suite was absolutely magical. Every detail was perfect, from the champagne welcome to the romantic dinner overlooking the city.",
              imageSrc: "https://images.pexels.com/photos/34487108/pexels-photo-34487108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma and Robert Chen, guest photo"
            },
            {
              id: "4",
              name: "Dr. Amanda Foster",
              role: "Medical Conference Attendee",
              testimonial: "The spa treatments and wellness facilities provided the perfect relaxation after long conference days. World-class service in every aspect.",
              imageSrc: "https://images.pexels.com/photos/7252253/pexels-photo-7252253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dr. Amanda Foster, guest photo"
            },
            {
              id: "5",
              name: "William Thornton",
              role: "Luxury Travel Connoisseur",
              testimonial: "Having stayed at the finest hotels worldwide, I can confidently say Luxuria Hotel sets the gold standard for luxury hospitality.",
              imageSrc: "https://images.pexels.com/photos/7519010/pexels-photo-7519010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "William Thornton, guest photo"
            },
            {
              id: "6",
              name: "Lisa Rodriguez",
              role: "Wedding Coordinator",
              testimonial: "The event planning team made our wedding celebration flawless. Their expertise and attention to detail created memories we'll treasure forever.",
              imageSrc: "https://images.pexels.com/photos/7202900/pexels-photo-7202900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Rodriguez, guest photo"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Recognized by Industry Leaders"
          description="Trusted partnerships and accolades from prestigious hospitality organizations worldwide."
          tag="Partnerships"
          tagIcon={Handshake}
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about your luxury stay with us"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out can be arranged subject to availability and may incur additional charges."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfer service. Our premium vehicles and professional chauffeurs ensure a comfortable arrival and departure experience."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature a Michelin-starred restaurant, casual café, rooftop bar, and 24-hour room service. Special dietary requirements can be accommodated with advance notice."
            },
            {
              id: "4",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets with our luxury pet program. Additional fees apply, and advance notification is required to ensure proper accommodations."
            },
            {
              id: "5",
              title: "What amenities are included in my stay?",
              content: "All rooms include complimentary WiFi, premium toiletries, 24-hour room service, fitness center access, and concierge services. Additional amenities vary by room type."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Luxury Experience"
          description="Let us create an unforgettable stay tailored to your preferences. Our concierge team is ready to assist with all arrangements."
          inputs={[
            {name: "name", type: "text", placeholder: "Full Name", required: true},
            {name: "email", type: "email", placeholder: "Email Address", required: true},
            {name: "phone", type: "tel", placeholder: "Phone Number", required: true},
            {name: "checkin", type: "date", placeholder: "Check-in Date", required: true},
            {name: "checkout", type: "date", placeholder: "Check-out Date", required: true},
            {name: "guests", type: "number", placeholder: "Number of Guests", required: true}
          ]}
          textarea={{
            name: "requests",
            placeholder: "Special requests or preferences (room type, amenities, celebration details, dietary requirements...)",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation Request"
          imageSrc="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxuria Hotel elegant reception desk"
          mediaPosition="right"
          onSubmit={(data) => console.log('Reservation request:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                {label: "Rooms & Suites", href: "product"},
                {label: "Amenities", href: "feature"},
                {label: "Dining", href: "restaurant"},
                {label: "Spa & Wellness", href: "spa"}
              ]
            },
            {
              title: "Services",
              items: [
                {label: "Concierge", href: "concierge"},
                {label: "Business Center", href: "business"},
                {label: "Event Planning", href: "events"},
                {label: "Transportation", href: "transport"}
              ]
            },
            {
              title: "Connect",
              items: [
                {label: "Contact Us", href: "contact"},
                {label: "Guest Reviews", href: "testimonial"},
                {label: "About Us", href: "about"},
                {label: "Careers", href: "careers"}
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 Luxuria Hotel. All rights reserved."
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}