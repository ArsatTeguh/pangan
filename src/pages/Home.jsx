import React, { useState, useEffect } from 'react';
import MasterNavbar from '../components/masterNavbar';
import MasterCarousel from '../components/masterCarousel';
import {
  Button,
  Input,
  Typography,
  typography,
} from '@material-tailwind/react';
import { FaArrowRight } from 'react-icons/fa';
import {
  FcApproval,
  FcCustomerSupport,
  FcMultipleDevices,
  FcOk,
} from 'react-icons/fc';
import MasterCard from '../components/masterCard';
import MasterFooter from '../components/masterFooter';

export default function Home() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsNavbarFixed(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`bg-wpiblue-50 ${
          isNavbarFixed ? 'fixed top-0 w-full z-10' : ''
        }`}
      >
        <MasterNavbar />
      </div>

      {/* Jumbotron */}
      <div className=" bg-wpigreen-50 xl:h-[820px] md:h-[900px] h-[900px]">
        <div
          className="bg-wpiblue-50 flex flex-col px-4 xl:px-36 xl:h-[600px] md:h-[760px] lg:h-[450px] h-[800px]"
          style={{ borderRadius: '0 0 50px 50px' }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row-reverse lg:h-[500px]">
            <div className=" h-[50vh] lg:h-full justify-center py-5 md:py-0 items-center col-span-7 lg:-translate-x-4">
              <img
                src="https://warungpangan.com/upload/settings/home_banner3.png"
                alt="image1"
                className="h-full w-full  "
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="flex justify-center items-center text-white col-span-5 pl-0 pt-5 md:pt-8 lg:pt-0 lg:pl-6 ">
              <div className="flex flex-col md:flex-row lg:flex-col">
                <div className="">
                  <Typography
                    variant="h3"
                    className="mb-4 text-center md:text-start  lg:text-left text-xl  md:text-4xl md:!leading-10 leading-7"
                  >
                    SATU APLIKASI UNTUK
                    <br /> SEMUA KEBUTUHAN WARUNG
                  </Typography>
                </div>
                <div className="">
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={40} /> Belanja, pencatatan dan
                    penjualan stok bisa semua
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Harga menguntungkan
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Diskon dan promo tiap
                    bulan
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Gratis pengiriman
                  </Typography>
                  <Typography
                    variant="h5"
                    className="mb-4 text-base lg:text-xl flex items-start"
                  >
                    <FcOk className="mr-4" size={30} /> Beragam pilihan
                    pendanaan
                  </Typography>
                  <div className="flex justify-center xl:justify-start md:justify-start">
                    <a href="/login">
                      <Button
                        className="hover:text-green-100 bg-wpigreen-50 "
                        size="lg"
                      >
                        <div className="flex items-center">
                          GABUNG SEKARANG <FaArrowRight className="ml-2" />
                        </div>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="container mx-auto xl:-translate-y-32 lg:-translate-y-16 md:-translate-y-24 -translate-y-16 xl:px-12 px-2 w-full h-[130px] md:h-[200px] lg:h-[300px]  sm:px-0 lg:px-2 ">
          <MasterCarousel />
        </div>

        {/* Content 1 */}
        <div
          className="bg-white lg:-translate-y-16
        "
        >
          <div className="container mx-auto text-center xl:mb-16 mb-12 ">
            <Typography
              variant="h3"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
            >
              Kenapa Harus Warung Pangan Indonesia
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-0 gap-12">
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
          </div>
        </div>

        {/* Content 2 */}
        <div className="container mx-auto grid xl:grid-cols-12 grid-cols-1 gap-6 px-4 lg:px-10 pt-6 lg:pt-0">
          <div className="lg:col-span-7 col-span-1 flex flex-col justify-start">
            <div className="pb-8 lg:pb-0">
              <Typography
                variant="h3"
                className="text-xl md:text-[1.8rem] lg:text-[2rem] !leading-8 text-center md:text-start"
                style={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 800,
                }}
              >
                Keunggulan Berbelanja di Aplikasi Warung Pangan
              </Typography>
            </div>
            <div className="flex flex-col md:flex-row  py-4 gap-3 md:gap-6">
              <span className="text-8xl lg:text-6xl flex items-center justify-center  md:h-full   ">
                <FcApproval />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-base lg:text-xl"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Pasokan Produk Berkualitas</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Banyak produk yang ditawarkan terutama produk-produk BUMN
                  kluster pangan (ID Food) dengan kualitas terjamin dengan harga
                  yang kompetitif dan pengiriman barang yang tepat waktu.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  py-4 gap-3 md:gap-6">
              <span className="text-8xl lg:text-6xl flex items-center justify-center  md:h-full   ">
                <FcMultipleDevices />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-base lg:text-xl"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Digitalisasi Warung</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Solusi lengkap bagi pemilik warung mengelola bisnis mereka,
                  yang mencakup pencatatan transaksi, manajemen inventori, dan
                  pemesanan via aplikasi
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  py-4 gap-3 md:gap-6">
              <span className="text-8xl lg:text-6xl flex items-center justify-center  md:h-full   ">
                <FcCustomerSupport />
              </span>
              <div>
                <Typography
                  variant="lead"
                  className="text-base lg:text-xl"
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  <b>Pembinaan Mitra</b>
                </Typography>
                <p className="text-justify pt-1 lg:pt-0">
                  Kami membantu para mitra agar bisnisnya dapat berkembang lebih
                  maju, dengan pelatihan, permodalan, dan promosi yang bertujuan
                  meningkatkan penjualan dan pengembangan kapasitas
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:col-span-5 col-span-1 border shadow-lg flex justify-center rounded-md items-center">
            <img
              src="https://warungpangan.com/upload/settings/home_banner_keunggulan.png"
              alt="image-2"
              style={{ height: '500px' }}
            />
          </div>
        </div>

        {/* Content 3 */}
        <div className="container mx-auto mb-6">
          <div className="my-10">
            <Typography
              className="xl:ml-14 lg:ml-4 md:ml-4 ml-14 flex justify-start"
              variant="h3"
              style={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 800,
              }}
            >
              Cerita Mitra Warung Pangan
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-0 gap-12">
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
            <div className="flex justify-center items-center">
              <MasterCard />
            </div>
          </div>
        </div>

        {/* Content Image */}
        <div class="container mx-auto w-full flex justify-center pb-16 px-2 lg:px-8">
          <div class="overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://warungpangan.com/upload/settings/mb_banner_bottom.png"
              alt=""
              class="w-full"
            />
          </div>
        </div>

        {/* Form Email */}
        <div className="bg-blue-50 lg:px-28 h-[50px] px-4">
          <div className=" bg-white grid grid-cols-1 lg:grid-cols-12 border rounded-lg shadow-lg py-8 px-4 lg:mx-0 -translate-y-10">
            <div className=" col-span-6 text-center flex items-center justify-center lg:justify-start">
              <Typography
                variant="h4"
                className="lg:text-2xl md:text-xl text-base pb-2 lg:pb-0"
                style={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 700,
                }}
              >
                Dapatkan info menarik dari kami!
              </Typography>
            </div>
            <div className=" col-span-6">
              <div className="flex gap-x-2 gap-y-4 flex-col lg:flex-row">
                <Input
                  size="lg"
                  placeholder="Email address"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
                  labelProps={{
                    className: 'before:content-none after:content-none w-full',
                  }}
                />
                <Button className="hover:bg-green-400 bg-wpigreen-50">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-50">
          <div className="container mx-auto pt-40 lg:pt-8">
            <MasterFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
