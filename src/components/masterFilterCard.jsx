import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardFooter,
  Checkbox,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Slider,
  Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

export default function MasterFilterCard() {
  const [section1Expanded, setSection1Expanded] = useState(false);
  const [section2Expanded, setSection2Expanded] = useState(false);
  const [section3Expanded, setSection3Expanded] = useState(false);
  const [provinsi, setProvinsi] = useState('Pilih Provinsi');
  const [kota, setKota] = useState('Pilih Kabupaten/kota');

  const [terendah, setTerendah] = useState(0);
  const [tertinggi, setTertinggi] = useState(0);

  const toggleSection1 = () => setSection1Expanded(!section1Expanded);
  const toggleSection2 = () => setSection2Expanded(!section2Expanded);
  const toggleSection3 = () => setSection3Expanded(!section3Expanded);

  const onTerendah = (e) => {
    const value = e.target.value;
    setTerendah(Math.floor(Number(value)));
  };

  const onTertinggi = (e) => {
    const value = e.target.value;
    setTertinggi(Math.floor(Number(value)));
  };

  //return as JSX

  return (
    <Card className="xl:w-96 w-full border-2 border-gray-300 shadow-md p-4">
      {/* Section 1 */}
      <Accordion
        className=""
        open={section1Expanded}
        icon={<AccordionIcon open={section1Expanded} />}
      >
        <AccordionHeader onClick={toggleSection1}>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: 800,
            }}
            color={section1Expanded ? 'green' : 'black'}
            className="text-left uppercase font-semibold"
          >
            Lokasi
          </Typography>
        </AccordionHeader>
        <AccordionBody className="w-full">
          <div className="flex w-full h-full flex-col gap-6 relative">
            <div className="relative">
              <select
                name="kota"
                className="w-full py-3 rounded-md border-[1px] border-black/25 px-2 appearance-none "
                id="kota"
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
              >
                <option disabled>Pilih Provinsi</option>
                <option value="Material Tailwind HTML">
                  Material Tailwind HTML
                </option>
                <option value="Material Tailwind React">
                  Material Tailwind React
                </option>
                <option value="Material Tailwind Vue">
                  Material Tailwind Vue
                </option>
                <option value="Material Tailwind Angular">
                  Material Tailwind Angular
                </option>
                <option value="Material Tailwind Svelte">
                  Material Tailwind Svelte
                </option>
              </select>
              <span className="absolute top-[1.1rem] right-2">
                <FaAngleDown />
              </span>
            </div>
            <div className="relative">
              <select
                name="kota"
                className="w-full py-3 rounded-md border-[1px] border-black/25 px-2 appearance-none "
                id="kota"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
              >
                <option disabled>Pilih Kabupaten/kota</option>
                <option value="Material Tailwind HTML">
                  Material Tailwind HTML
                </option>
                <option value="Material Tailwind React">
                  Material Tailwind React
                </option>
                <option value="Material Tailwind Vue">
                  Material Tailwind Vue
                </option>
                <option value="Material Tailwind Angular">
                  Material Tailwind Angular
                </option>
                <option value="Material Tailwind Svelte">
                  Material Tailwind Svelte
                </option>
              </select>
              <span className="absolute top-[1.1rem] right-2">
                <FaAngleDown />
              </span>
            </div>
          </div>
        </AccordionBody>
      </Accordion>

      {/* Section 2 */}
      <Accordion
        open={section2Expanded}
        icon={<AccordionIcon open={section2Expanded} />}
      >
        <AccordionHeader onClick={toggleSection2}>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: 800,
            }}
            color={section2Expanded ? 'green' : 'black'}
            className="text-left uppercase font-semibold"
          >
            Kategori
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <List>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Batubara
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-vue"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-vue"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Horticultural
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-svelte"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Agriculture
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-svelte-1"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-svelte-1"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Aquaculture
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-svelte-2"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-svelte-2"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: 'p-0',
                    }}
                  />
                </ListItemPrefix>
                <Typography
                  style={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 400,
                  }}
                  color="blue-gray"
                  className="font-medium"
                >
                  Mineral
                </Typography>
              </label>
            </ListItem>
          </List>
        </AccordionBody>
      </Accordion>

      {/* Section 3 */}
      <Accordion
        open={section3Expanded}
        icon={<AccordionIcon open={section3Expanded} />}
      >
        <AccordionHeader onClick={toggleSection3}>
          <Typography
            style={{
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: 800,
            }}
            color={section3Expanded ? 'green' : 'black'}
            className="text-left uppercase font-semibold"
          >
            Harga
          </Typography>
        </AccordionHeader>
        <AccordionBody>
          <div className="w-full mb-10 flex flex-col gap-2">
            <label htmlFor="" className="font-semibold text-black">
              Terendah
            </label>
            <Input value={`Rp. ${terendah}.000`} />
            <span className="px-1">
              <Slider defaultValue={0} value={terendah} onChange={onTerendah} />
            </span>
          </div>
          <div className="w-full mb-10 flex flex-col gap-2">
            <label htmlFor="" className="font-semibold text-black">
              Tertinggi
            </label>
            <Input value={`Rp. ${tertinggi * 2}.000`} />
            <span className="px-1">
              <Slider
                defaultValue={0}
                value={tertinggi}
                onChange={onTertinggi}
              />
            </span>
          </div>
        </AccordionBody>
      </Accordion>

      {/* Footer (optional) */}
      <CardFooter className="mt-2">
        <Button className="w-full bg-wpigreen-50">Tampilkan</Button>
      </CardFooter>
    </Card>
  );
}

// Component for Accordion Icon
const AccordionIcon = ({ open }) => (
  <FaAngleDown
    className={`h-5 w-5 transform ${
      open ? 'rotate-180' : ''
    } transition-transform`}
  />
);
