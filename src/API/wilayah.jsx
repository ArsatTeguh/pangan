import { useEffect, useState } from 'react';
import axios from 'axios';
const Wilayah = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);

  const onProvinsi = async () => {
    try {
      const response = await axios.get(
        `https://backend.ptwpi.co.id/api/provinces`
      );
      const mappedData = response.data.map((item, index) => ({
        id: item.id,
        nomor: index + 1,
        provinceName: item.province,
      }));
      setProvinsi(mappedData);
    } catch (error) {
      console.log(error);
    }
  };
  const onCity = async () => {
    try {
      const response = await axios.get(
        `https://backend.ptwpi.co.id/api/cities`
      );
      setKota(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onCity();
    onProvinsi();
  }, []);

  const provinsiAndCity = provinsi.map((provinsi, index) => {
    const kotaProvinsi = kota
      .filter((kota) => kota.province_id === provinsi.id)
      .map((kota) => kota.city);

    return {
      cityName:
        kotaProvinsi.length <= 0 ? ['Kota belum terdaftar'] : kotaProvinsi,
      nomor: index + 1,
      id: provinsi.id,
      provinceName: provinsi.provinceName,
    };
  });

  return {
    provinsiAndCity,
  };
};

export default Wilayah;
