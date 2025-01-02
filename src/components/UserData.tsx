import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { Link } from "react-router";
import { User } from "../store/userSlice";

const UserData = ({ id, name, email, phone, address }: User) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src="https://media.istockphoto.com/id/1152446348/photo/software-development-after-sundown.webp?a=1&b=1&s=612x612&w=0&k=20&c=8A-nlmVOZC4thMhoOVobwo4Qe6FOz0HEQqPNRk-9iSs="
        alt="A man with laptop holding phone"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-sky-500 mb-2">{name}</h3>
        {/* <p className="text-gray-600 mb-4 line-clamp-2 lowercase">{email}</p> */}

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2 text-sky-700" strokeWidth={3} />
            <span className="lowercase">{email}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Phone className="w-4 h-4 mr-2 text-sky-700" strokeWidth={3} />
            <span>{phone}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-sky-700" strokeWidth={3} />
            <span>{address?.city}</span>
          </div>
        </div>

        <Link
          to={`/user/${id}`}
          className="w-full block text-center bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition-colors"
        >
          <div className='flex items-center justify-center gap-2'>
          View Details
          <ExternalLink size={18} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserData;
