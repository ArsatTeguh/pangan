import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import MasterSidebar from "../components/masterSidebar";
import MasterFooterAdmin from "../components/masterFooterAdmin";
import MasterNavbarAdmin from "../components/masterNavbarAdmin";
import { useDropzone } from "react-dropzone";
import { FaCloudArrowUp } from "react-icons/fa6";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AdminEditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (acceptedFiles) => {
    // Handle the selected file as needed
    setSelectedFile(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: "image/*", // Specify accepted file types
    onDrop: handleFileUpload,
  });
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-100 h-full flex flex-col min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white z-50 fixed top-0 h-full md:block transition-transform duration-200 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MasterSidebar />
      </div>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-200 ease-in-out opacity-50 md:hidden "
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Navbar */}
      <MasterNavbarAdmin
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Content Profile Edit */}
      <div className="flex-grow h-full ml-4 md:ml-80 pt-10 mr-4">
        <form>
            <div className="grid md:grid-cols-4 gap-2 bg-white md:mr-6 mb-6 pt-6 pb-6 px-6 rounded-lg shadow-md">
            <div className="md:col-span-4">
                <Typography variant="h5" className="pb-5">
                Edit Profile
                </Typography>
            </div>
            <div className="md:col-span-4">
              <Typography variant="small">
                Email
              </Typography>
            </div>
            <div className=" md:col-span-4 rounded-lg">
              <Input 
                disabled
                color="indigo"
                size="lg"
                placeholder="Email"
                className="!border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                New Password
              </Typography>
            </div>
            <div className=" md:col-span-4 rounded-lg">
              <Input
                color="indigo"
                size="lg"
                placeholder="New Password"
                className="!border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="md:col-span-4">
              <Typography variant="small" className="">
                Confirm New Password
              </Typography>
            </div>
            <div className=" md:col-span-4 rounded-lg">
              <Input
                color="indigo"
                size="lg"
                placeholder="Confirm New Password"
                className="!border-t-blue-gray-200 focus:!border-t-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="md:col-span-4 flex justify-end items-center pt-6">
            <a href="/dashboard" className="flex gap-2 text-wpigreen-500 ml-4 text-sm">
                <Button className="bg-red-400 flex">
                 Batal
                </Button>
              </a>
              <a href="/dashboard" className="flex gap-2 text-wpigreen-500 ml-4 text-sm">
                <Button className="bg-wpigreen-50 flex">
                 Simpan
                </Button>
              </a>
            </div>
            </div>
        </form>
      </div>


      {/* Footer */}
      <div className="pt-10">
        <MasterFooterAdmin />
      </div>
    </div>
  );
}
