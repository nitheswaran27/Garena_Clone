import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalPage = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">{title}</h1>
          <div className="prose prose-red max-w-none text-gray-600 leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const About = () => (
  <LegalPage title="About Us">
    <p>Welcome to Garena Store Clone, your trusted partner for instant game top-ups. We provide a seamless and secure platform for gamers to recharge their favorite games like Free Fire, Call of Duty: Mobile, and more.</p>
    <p>Our mission is to provide the fastest and most reliable top-up experience in the industry. With instant delivery and 24/7 support, we ensure that your gaming never stops.</p>
  </LegalPage>
);

export const Contact = () => (
  <LegalPage title="Contact Us">
    <p>Have questions or need assistance? Our support team is here to help you.</p>
    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
      <div>
        <h3 className="font-bold text-gray-900">Email Support</h3>
        <p>support@garena.store (Replace with your actual email)</p>
      </div>
      <div>
        <h3 className="font-bold text-gray-900">Working Hours</h3>
        <p>Monday - Sunday: 10:00 AM - 10:00 PM</p>
      </div>
      <div>
        <h3 className="font-bold text-gray-900">Response Time</h3>
        <p>Typically within 2-4 hours during working hours.</p>
      </div>
    </div>
  </LegalPage>
);

export const Terms = () => (
  <LegalPage title="Terms and Conditions">
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Acceptance of Terms</h3>
      <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
    </section>
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Description of Service</h3>
      <p>We provide a platform for purchasing digital game credits. All transactions are final once the digital goods have been delivered to your game account.</p>
    </section>
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">3. User Responsibilities</h3>
      <p>Users are responsible for providing the correct Game ID (UID) or Username. We are not responsible for top-ups delivered to the wrong account due to incorrect information provided by the user.</p>
    </section>
  </LegalPage>
);

export const Privacy = () => (
  <LegalPage title="Privacy Policy">
    <p>We value your privacy. This policy explains how we handle your information.</p>
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Information Collection</h3>
      <p>We collect only the necessary information to process your top-up, such as your Game ID and payment details through our secure payment gateway partner (Razorpay).</p>
    </section>
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Data Security</h3>
      <p>Your payment information is processed securely by Razorpay. We do not store your credit card or bank details on our servers.</p>
    </section>
  </LegalPage>
);

export const Refund = () => (
  <LegalPage title="Refund Policy">
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Goods Policy</h3>
      <p>Due to the nature of digital goods (game credits), all sales are final. Once a top-up has been successfully processed and delivered to the provided Game ID, no refunds will be issued.</p>
    </section>
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Failed Transactions</h3>
      <p>In the event of a failed transaction where the amount has been deducted from your account but the credits were not delivered, a full refund will be processed within 5-7 working days, or the credits will be manually added to your account upon verification.</p>
    </section>
    <section>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Cancellation</h3>
      <p>Orders cannot be cancelled once the payment is completed.</p>
    </section>
  </LegalPage>
);
