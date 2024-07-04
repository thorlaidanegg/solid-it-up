// components/Footer.tsx

import { FC } from 'react';
import Image from 'next/image';
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'; // Example icons, replace with actual icons or SVGs
import { HiOutlineMail } from 'react-icons/hi'; // Example icon for email
import { BsFillTelephoneFill } from 'react-icons/bs'; // Example icon for phone

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo and About Us */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 relative">
            <Image src="/logo.svg" layout="fill" objectFit="contain" alt="Solid-It-Up Logo" />
          </div>
          <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac enim velit.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <BsFillTelephoneFill className="text-gray-400" />
            <span>8799796044</span>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlineMail className="text-gray-400" />
            <span>ranakshah0512@gmail.com</span>
          </div>
        </div>

        {/* Column 4: Social Media */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FiInstagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FiFacebook className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FiTwitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FiLinkedin className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2024 Solid-It-Up. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
