import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  GraduationCap,
  Clock,
  Calendar,
  Users,
  BookOpen
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-800 to-orange-900">
      {/* Quick Links Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About College */}
          <div className="space-y-4 text-left">
            <div className="flex justify-start items-center space-x-2 mb-6">
              <GraduationCap className="w-8 h-8 text-orange-300" />
              <h3 className="text-2xl font-bold text-white">Jaagruthi</h3>
            </div>
            <p className="text-orange-100 text-sm leading-relaxed">
              Empowering students with quality education and fostering academic excellence since 1989. 
              Affiliated to Mahatma Gandhi University - Nalgonda.
            </p>
            <div className="flex justify-start space-x-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-orange-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { icon: Users, text: 'About Us' },
                { icon: BookOpen, text: 'Academics' },
                { icon: Calendar, text: 'Events' },
                { icon: Clock, text: 'Time Table' },
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center justify-start space-x-2 text-orange-200 hover:text-orange-100 transition-colors duration-200 group">
                    <item.icon className="w-4 h-4" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex justify-start items-start space-x-3 text-orange-200">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  #2-2-168, Azad Road, Dist. Nalgonda, Telangana State - 508116
                </p>
              </div>
              <a href="tel:+1234567890" className="flex justify-start items-center space-x-3 text-orange-200 hover:text-orange-100 transition-colors duration-200">
                <Phone className="w-5 h-5" />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:info@jaagruthi.edu" className="flex justify-start items-center space-x-3 text-orange-200 hover:text-orange-100 transition-colors duration-200">
                <Mail className="w-5 h-5" />
                <span>info@jaagruthicollege.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-700/50 my-8" />
        <div className="text-center space-y-2">
          <p className="text-orange-200 text-sm">
            Sponsored by <span className="text-orange-100">Sri Saraswathi Educational Society</span>
          </p>
          <p className="text-orange-300 text-xs">
            Affiliated to Mahatma Gandhi University - Nalgonda
          </p>
          <p className="text-orange-400 text-sm mt-2">
            © {new Date().getFullYear()} Jaagruthi Degree & PG College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
