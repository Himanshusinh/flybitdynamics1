import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - FLYBIT Dynamics | Best Indian Drone Show Company";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Terms of Service for FLYBIT Dynamics - India's leading drone show company. Read our terms and conditions for drone light shows.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="relative h-60 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/80">
            Our terms and conditions
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using FLYBIT Dynamics' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">2. Services</h2>
            <p className="mb-4">FLYBIT Dynamics provides:</p>
            <ul className="list-disc pl-6">
              <li>Drone light show performances</li>
              <li>Event planning and consultation</li>
              <li>Custom choreography and design</li>
              <li>Technical support and equipment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">3. Booking and Payment</h2>
            <ul className="list-disc pl-6">
              <li>All bookings require a signed contract and advance payment</li>
              <li>Payment terms will be specified in your service agreement</li>
              <li>Cancellation policies apply as per the signed contract</li>
              <li>Additional charges may apply for changes to the original scope</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">4. Weather and Safety</h2>
            <ul className="list-disc pl-6">
              <li>Shows may be postponed due to adverse weather conditions</li>
              <li>Safety regulations and flight restrictions must be adhered to</li>
              <li>We reserve the right to cancel shows for safety reasons</li>
              <li>Alternative dates will be offered for weather-related cancellations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              All content, choreography, and creative elements developed by FLYBIT Dynamics remain our intellectual property. Unauthorized reproduction or distribution is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              FLYBIT Dynamics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">7. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">8. Governing Law</h2>
            <p>
              These terms shall be interpreted and governed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-space-grotesk font-semibold mb-4">9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> info@flybitdynamics.com</p>
              <p><strong>Phone:</strong> +91 9664612798</p>
              <p><strong>Address:</strong> 51.1 Satyamev Eminence, Science City Road, Sola, Ahmedabad 380060</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}