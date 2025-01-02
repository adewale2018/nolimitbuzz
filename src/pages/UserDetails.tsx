import { ChevronLeft, Globe, Mail, NotebookPen, PhoneCall } from "lucide-react";
import { Link, useParams } from "react-router";

import Spinner from "../components/Spinner";
import { useEffect } from "react";
import { useStore } from "../store";

const UserDetails = () => {
  const { loading, getDetails, userDetails } = useStore();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      getDetails(id);
    }
  }, [id]);

  if(loading) {
    return <Spinner />
  }

  return (
    <section>
      <Link
        to="/"
        className="font-serif flex items-center mb-5 text-sky-500"
      >
        <ChevronLeft className="h-8 w-8 cursor-pointer text-sky-700" /> Back
      </Link>
      <div className="shadow-md p-8 border rounded bg-gray-100 mb-10">
        <h2 className="font-serif text-sky-500 text-xl md:text-3xl font-bold">
          User Details
        </h2>
        <p className="px-2 mt-5 text-xl font-serif">
          ID:{" "}
          <span className="md:ml-5 px-8 text-base md:text-lg font-semibold py-1 rounded-full bg-sky-200 text-sky-700">
            {id}
          </span>
        </p>
      </div>
      <div className="cursor-pointer rounded-lg shadow-xl border border-gray-200 px-3 md:px-10 py-5">
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Name</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.name}
            <NotebookPen className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Email</h4>
          <span className="flex lowercase items-center gap-2  bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.email}
            <Mail className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Username</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.username}
            <Mail className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Phone Contact</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.phone}
            <PhoneCall className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Website</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.website}
            <Globe className="w-4 h-4" />
          </span>
        </div>
      </div>
      {/* Company */}
      <h4 className="mt-10 mb-2 text-sky-600 text-2xl font-medium">Company:</h4>
      <div className="cursor-pointer rounded-lg shadow-xl border border-gray-200 px-3 md:px-10 py-5">
        <div className="border-b py-4 flex justify-between items-center flex-wrap">
          <div>
            <p className="text-sky-400 font-bold uppercase">Name</p>
            <p>{userDetails?.company?.name}</p>
          </div>
          <div className="my-5">
            <p className="text-sky-400 font-bold uppercase">catchPhrase</p>
            <p>{userDetails?.company?.catchPhrase}</p>
          </div>
          <div>
            <p className="text-sky-400 font-bold uppercase">BS</p>
            <p>{userDetails?.company?.bs}</p>
          </div>
        </div>
      </div>
      {/* Address */}
      
      <h4 className="mt-10 mb-2 text-sky-600 text-2xl font-medium">Address:</h4>
      <div className="cursor-pointer rounded-lg shadow-xl border border-gray-200 px-3 md:px-10 py-5">
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Street</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.address?.street}
            <NotebookPen className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Suite</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.address?.suite}
            <Mail className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">City</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.address?.city}
            <Mail className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">ZipCode</h4>
          <span className="flex items-center gap-2 capitalize bg-gray-100 hover:bg-gray-200 rounded-full px-5 md:px-10 py-1 md:py-2  text-sky-600 hover:text-sky-700 transition-all duration-100 font-medium">
            {userDetails?.address?.zipcode}
            <PhoneCall className="w-4 h-4" />
          </span>
        </div>
        <div className="border-b py-4 flex justify-between items-center">
          <h4 className="font-serif text-base md:text-xl">Geo</h4>
          <p>Lat: {userDetails?.address?.geo?.lat}</p>
          <p>Lng: {userDetails?.address?.geo?.lng}</p>
        </div>
      </div>

    </section>
  );
};

export default UserDetails;
