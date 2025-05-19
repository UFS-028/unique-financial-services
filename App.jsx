import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function UniqueFinancialServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src="/image.png" alt="Unique Financial Services Logo" className="h-12" />
          <h1 className="text-2xl font-bold">Unique Financial Services</h1>
        </div>
        <nav className="space-x-6 font-medium">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Accounting Made Easy</motion.h2>
        <p className="max-w-xl mx-auto text-lg">We offer reliable and accurate accounting, bookkeeping, and payroll services tailored for your business.</p>
        <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="Finance Illustration" className="w-32 mx-auto mt-6" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-6">About Us</h3>
        <p className="text-center max-w-2xl mx-auto">At Unique Financial Services, we specialize in providing personalized financial services with a professional approach. Our expert team ensures your books are always balanced and payrolls are handled smoothly.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-20">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3105/3105613.png" alt="Accounting" className="w-16 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Accounting</h4>
              <p>Accurate financial reporting and analysis to help your business grow.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/4221/4221437.png" alt="Bookkeeping" className="w-16 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Bookkeeping</h4>
              <p>Organized record-keeping to ensure smooth financial management.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3561/3561482.png" alt="Payroll" className="w-16 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Payroll</h4>
              <p>Timely and compliant payroll services tailored to your business needs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-6">Get in Touch</h3>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-4">Have questions or ready to get started? Contact us now!</p>
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex items-center gap-2"><Mail className="w-5 h-5" /> info@uniquefinancial.com</div>
            <div className="flex items-center gap-2"><Phone className="w-5 h-5" /> +1 (234) 567-8901</div>
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">Send Us a Message</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm bg-purple-100">© 2025 Unique Financial Services. All rights reserved.</footer>
    </div>
  );
}
