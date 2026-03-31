const componentsData = {
    cpu: [
        {
            id: 1,
            name: "Intel Core i5-13400F(DNS)",
            specs: "10 ядер, 16 потоков, до 4.6 ГГц",
            price: 17999,
            socket: "LGA1700",
            tdp: 65,
            url: "https://www.dns.ru/product/intel-core-i5-13400f/"
        },
        {
            id: 2,
            name: "Intel Core i5-13400(DNS)",
            specs: "10 ядер, 16 потоков, до 4.6 ГГц, со встроенной графикой",
            price: 19999,
            socket: "LGA1700",
            tdp: 65,
            url: "https://www.dns.ru/product/intel-core-i5-13400/"
        },
        {
            id: 3,
            name: "AMD Ryzen 5 7600(DNS)",
            specs: "6 ядер, 12 потоков, до 5.1 ГГц",
            price: 18999,
            socket: "AM5",
            tdp: 65,
            url: "https://www.dns.ru/product/amd-ryzen-5-7600/"
        },
        {
            id: 4,
            name: "Intel Core i7-13700KF(DNS)",
            specs: "16 ядер, 24 потока, до 5.4 ГГц",
            price: 34999,
            socket: "LGA1700",
            tdp: 125,
            url: "https://www.dns.ru/product/intel-core-i7-13700kf/"
        },
        {
        id: 5,
        name: "AMD Ryzen 7 5700X(Ситилинк)",
        specs: "8 ядер, 16 потока, до 4.6 Ггц",
        price: 15990,
        socket: "AM4",
        tdp: 65,  
        url: "https://www.citilink.ru/product/processor-amd-ryzen-7-5700x-am4-oem-100-000000926-1901517/"
        },
        {
        id: 6,
        name: "Intel Core i5 12400(Ситилинк)",
        specs: "6 ядер, 12 потоков, до 4.4 Ггц",
        price: 18990,
        socket: "LGA1700",
        tdp: 65,
        url: "https://www.citilink.ru/product/processor-intel-core-i5-12400-lga-1700-oem-cm8071504650608-srl5y-1855474/"
        },
        {
            id: 7,
        name: "Intel Core i3 12100(Ситилинк)",
        specs: "4 ядра, 8 потока, до 4.3 Ггц",
        price: 15990,
        socket: "LGA1700",
        tdp: 60,
        url: "https://www.citilink.ru/product/processor-intel-core-i3-12100-lga-1700-oem-cm8071504651012-srl62-1779455/"
        },
        {
            id: 8,
        name: "AMD Ryzen 5 5500(Ситилинк)",
        specs: "Характеристики",
        price: 7990,
        socket: "AM4",
        tdp: 65,
        url: "https://www.citilink.ru/product/processor-amd-ryzen-5-5500-am4-oem-100-000000457-1901493/"
        },
        {
            id: 9,
        name: "AMD Ryzen 5 3600(Ситилинк)",
        specs: "6 ядер, 12 потоков, до 4.2 Ггц",
        price: 7990,
        socket: "AM4",
        tdp: 65,
        url: "https://www.citilink.ru/product/processor-amd-ryzen-5-3600-am4-oem-100-000000031-1773826/"
        },
        {
            id: 10,
        name: "AMD Ryzen 5 3400G(Ситилинк)",
        specs: "4 ядра, 8 потока, до 4.2 Ггц",
        price: 7990,
        socket: "AM4",
        tdp: 65,
        url: "https://www.citilink.ru/product/processor-amd-ryzen-5-3400g-socketam4-oem-yd3400c5m4mfh-1151440/"
        },
        {
            id: 11,
        name: "AMD Ryzen 5 7600(Ситилинк)",
        specs: "6 ядер, 12 потоков, до 5.1 ГГц",
        price: 18990,
        socket: "AM5",
        tdp: 65,
        url: "https://www.citilink.ru/product/processor-amd-ryzen-5-7600-am5-oem-100-000001015-1987763/"
        },
        {
            id: 8,
        name: "AMD Ryzen 5 3600(DNS)",
        specs: "Характеристики",
        price: 7499,
        socket: "AM4",
        tdp: 65,
        url: "https://www.dns-shop.ru/product/39783e4afccbed20"
        },
        {
            id: 9,
        name: "Intel Core i3 10105f(OZON)",
        specs: "4 ядер, 8 потоков, 3,7 ГГц",
        price: 3760,
        socket: "lga 1200",
        tdp: 65,
        url: "https://www.ozon.ru/product/intel-protsessor-oem-bez-kulera-812328825/?at=83tBMkyKViZO9pnofz7zjQZIOn6GpJhq6LQ96UJNNXM9&reviewsVariantMode=2"
        },
        {
           id: 9,
        name: "Intel Core 2 Quard Q8300(OZON)",
        specs: "4 ядер, 4 потоков, 2,5 ГГц",
        price: 675,
        socket: "lga 775",
        tdp: 95,
        url: "https://www.ozon.ru/product/intel-protsessor-core-2-quard-q8300-2-5-ggts-lga-775-4-mb-4-yadra-oem-bez-kulera-1634417504/?at=OgtEXOByVsEE7Z2ukLWrnDSlwJ8ywIjQq5VvUD9V4B" 
        }
],

    gpu: [
        {
            id: 1,
            name: "RTX 4060 8GB(DNS)",
            specs: "8GB GDDR6, 2460 МГц",
            price: 32999,
            tdp: 115,
            url: "https://www.dns.ru/product/rtx-4060-8gb/"
        },
        {
            id: 2,
            name: "RTX 4070 12GB(DNS)",
            specs: "12GB GDDR6X, 2475 МГц",
            price: 54999,
            tdp: 200,
            url: "https://www.dns.ru/product/rtx-4070-12gb/"
        },
        {
            id: 3,
            name: "RTX 5060 8GB(OZON)",
            specs: "8GB GDDR7, 2280 МГц",
            price: 31443,
            tdp: 145,
            url: "https://www.ozon.ru/product/gigabyte-videokarta-geforce-rtx-5060-geforce-rtx-5060-windforce-max-oc-8-gb-8-gb-gv-n5060wf2max-3098189972/?at=nRtrLWRY0i049rQQSZ7DPE3HrgD58ZC0XlWMYFAAOBR7"
        },
         {
            id: 4,
            name: " RTX 5050 8GB(OZON)",
            specs: "8GB GDDR6, 2317 МГц",
            price: 27597,
            tdp: 130,
            url: "https://www.ozon.ru/product/msi-videokarta-geforce-rtx-5050-shadow-2x-oc-8-gb-rtx-5050-8g-shadow-2x-oc-2537586477/?at=Z8tXRjWpZF6vKqrBU9qDMXYIx8PKqGup2wYWATEMZO8k"
        },
         {
            id: 5,
            name: "RTX 3050 6 ГБ(OZON)",
            specs: "6GB GDDR5, 1042 МГц",
            price: 18227,
            tdp: 70,
            url: "https://www.ozon.ru/product/palit-videokarta-geforce-rtx-3050-6-gb-ne63050018je-1072f-3033197476/?at=08tYWyALOcJLwkLxHpg75g5cMrD2G7cy88gKLUkJDrKB"
        },
         {
            id: 6,
            name: "Radeon RX 580 8GB(OZON)",
            specs: "8GB GDDR5, 1340 МГц",
            price: 11963,
            tdp: 185,
            url: "https://www.ozon.ru/product/sapphire-videokarta-radeon-rx-580-videokarta-radeon-rx-580-8gb-8pin-8-gb-novaya-1884161278/?at=OgtEXOByVsEJgLG6FpLn3O0IWK00ODsE1MjpVivzvgJ0"
        },
         {
            id: 7,
            name: "GTX 1660 SUPER 6GB(OZON)",
            specs: "6GB GDDR6, 1530 МГц",
            price: 17582,
            tdp: 125,
            url: "https://www.ozon.ru/product/msi-videokarta-geforce-gtx-1660-super-1660-super-gaming-z-plus-6-gb-gtx-1660-super-gaming-z-plus-2698876498/?at=J8tgznjDGF3gRAgnsr8Wqw0tnvnkK7iBWG81cgA3k40"
        },
         {
            id: 8,
            name: "RTX 2060SUPER 8GB(Ситилинк)",
            specs: "8GB GDDR6, 1470 МГц",
            price: 33800,
            tdp: 160,
            url: "https://www.citilink.ru/product/videokarta-afox-pci-e-af2060s-8192d6h7-nv-rtx2060super-8gb-256bit-gddr-2096453/"
        },
         {
            id: 9,
            name: "GTX 1050TI 4GB(Ситилинк)",
            specs: "4GB GDDR5, 1291 МГц",
            price: 13490,
            tdp: 75,
            url: "https://www.citilink.ru/product/videokarta-afox-pci-e-3-0-af1050ti-4096d5h7-v9-nv-gtx1050ti-4gb-128bit-2154229/"
        },
         {
            id: 10,
            name: "RX 6700XT 12GB(Ситилинк)",
            specs: "12GB GDDR6, 2321 МГц",
            price: 21830,
            tdp: 230,
            url: "https://www.citilink.ru/product/videokarta-sapphire-pci-e-4-0-11306-02-20g-rx-6700xt-gaming-pulse-12g-M00295551/?text=rx+6700"
        },
         {
            id: 11,
            name: "RTX 5080 16GB(Ситилинк)",
            specs: "16GB GDDR7, 2295 МГц",
            price: 134100,
            tdp: 360,
            url: "https://www.citilink.ru/product/videokarta-palit-pci-e-4-0-pa-rtx5080-gamingpro-oc-nv-rtx5080-16gb-256-2078386/properties/"
        }
    ],
    motherboard: [
        {
            id: 1,
            name: "MSI B760M-A PRO(DNS)",
            specs: "LGA1700, DDR5, mATX",
            price: 12999,
            socket: "LGA1700",
            formFactor: "mATX",
            ramType: "DDR5",
            url: "https://www.dns-shop.ru/product/eeec7d7581d0ed20/materinskaa-plata-msi-pro-b760m-a-wifi-ddr4/"
        },
        
        {
            id: 2,
            name: "ASUS PRIME B760-PLUS",
            specs: "LGA1700, DDR5, ATX",
            price: 15999,
            socket: "LGA1700",
            formFactor: "ATX",
            ramType: "DDR5",
            url: "https://www.dns-shop.ru/product/4252feaf09b3ed20/materinskaa-plata-asus-prime-b760-plus/"
        },
        {
            id: 3,
            name: "ASRock H610M-HDV/M.2+ D5(DNS)",
            specs: "LGA1700, DDR5, mATX",
            price: 6709,
            socket: "LGA1700",
            formFactor: "mATX",
            ramType: "DDR5",
            url: "https://www.dns-shop.ru/product/272e903887f5ed20/materinskaa-plata-asrock-h610m-hdvm2/"
        },
        {
            id: 4,
            name: "ASUS PRIME B660-PLUS D4(OZON)",
            specs: "LGA1700, DDR4, ATX",
            price: 8208,
            socket: "LGA1700",
            formFactor: "ATX",
            ramType: "DDR4",
            url: "https://www.ozon.ru/product/materinskaya-plata-asus-prime-b660m-k-d4-lga1700-b660-2xddr4-matx-raid-vga-hdmi-90mb1950-m0eay0-704396882/?at=ywtAW37P3IQro6PrtpDqQ5wuRQJAx5uMWPM8ZuLm7X63"
        },
        {
            id: 5,
            name: "Gigabyte B760 GAMING X WIFI6E GEN5",
            specs: "LGA1700, DDR5, ATX, WiFi",
            price: 12006,
            socket: "LGA1700",
            formFactor: "ATX",
            ramType: "DDR5",
            url: "https://www.ozon.ru/product/materinskaya-plata-gigabyte-b760m-gaming-x-wifi6e-gen5-intel-b760-lga-1700-ddr5-3033299710/?at=6WtZ9JP6JFjgpgJ6FJnDG53HB8M7zZI0kLg4xCRK4o3"
        },
        {
            id: 6,
            name: "Gigabyte GA-B450M DS3H",
            specs: "AM4, DDR4, mATX",
            price: 6556,
            socket: "AM4",
            formFactor: "mATX",
            ramType: "DDR4",
            url: "https://www.dns-shop.ru/product/ce8348a993a33330/materinskaa-plata-gigabyte-b450m-ds3h/"
        },
        {
            id: 7,
            name: "Gigabyte B550 Gaming X V2(OZON)",
            specs: "AM4, DDR4, ATX, PCIe 4.0",
            price: 12935,
            socket: "AM4",
            formFactor: "ATX",
            ramType: "DDR4",
            url: "https://www.ozon.ru/product/gigabyte-b650-gaming-x-ax-v2-am5-ddr5-materinskaya-plata-1637461351/?at=83tBMgX5guz2PYvBf0pGoPGHl788JNHLMNopwH858y27"
        },
        {
            id: 8,
            name: "ASRock B650 PG Lightning(DNS)",
            specs: "AM5, DDR5, ATX",
            price: 10999,
            socket: "AM5",
            formFactor: "ATX",
            ramType: "DDR5",
            url: "https://www.dns-shop.ru/product/05b99abf4952ed20/materinskaa-plata-asrock-b650-pg-lightning/"
        },
        {
            id: 9,
            name: "ASUS TUF GAMING B650-PLUS WIFI(Ситилинк)",
            specs: "AM5, DDR5, ATX, WiFi 6",
            price: 19070,
            socket: "AM5",
            formFactor: "ATX",
            ramType: "DDR5",
            url: "https://www.citilink.ru/product/materinskaya-plata-asus-tuf-gaming-b650-plus-wifi-socketam5-amd-b650-a-1871413//"
        },
        {
            id: 10,
            name: "Gigabyte B650I AX(OZON)",
            specs: "AM5, DDR5, Mini-ATX",
            price: 12935,
            socket: "AM5",
            formFactor: "Mini-ATX",
            ramType: "DDR5",
            url: "https://www.ozon.ru/product/gigabyte-b650i-ax-am5-ddr5-materinskaya-plata-1628555924/?at=oZt6GmDVmC0g3219iYAr0vkI1BNDoMuX7mWB3hJXAl5A"
        },
        {
            id: 11,
            name: "MSI PRO B760M-A WIFI(Ситилинк)",
            specs: "LGA1700, DDR5, mATX, WiFi",
            price: 10500,
            socket: "LGA1700",
            formFactor: "mATX",
            ramType: "DDR5",
            url: "https://www.citilink.ru/product/materinskaya-plata-msi-pro-b760m-a-wifi-lga-1700-intel-b760-matx-ret-1971050/"
        }
    ],
    ram: [
        {
            id: 1,
            name: "Kingston DDR5 16GB(DNS)",
            specs: "16GB DDR5, 5200MHz",
            price: 15000,
            type: "DDR5",
            capacity: 16,
            url: "https://www.dns-shop.ru/product/5669272afb2ced20/operativnaa-pamat-kingston-fury-beast-black-kf552c40bb-16-16-gb/"
        },
        {
            id: 2,
            name: "Corsair DDR5 32GB(OZON)",
            specs: "32GB DDR5, 5600MHz",
            price: 14286,
            type: "DDR5",
            capacity: 32,
            url: "https://www.ozon.ru/product/corsair-operativnaya-pamyat-1x16-gb-lpx-3636068567/?at=w0tgQnvEnsqoG0Q3ivxZ9yXT4vN0jkcoDg8J6Uy8LxwP"
        },
        {
            id: 3,
            name: "Kingston Fury DDR4 16GB(OZON)",
            specs: "16GB DDR4, 3200MHz",
            price: 9714,
            type: "DDR4",
            capacity: 16,
            url: "https://www.ozon.ru/product/kingston-fury-operativnaya-pamyat-1x16-gb-kf432c16bb-16-1728684824/?at=WPtNY86L8hpZNqJ8h1v7MWqfoE4ApqU14GmWBfzpj4YR"
        },
        {
            id: 4,
            name: "Samsung DDR4 8GB (OZON)",
            specs: "8GB DDR4, 2666MHz",
            price: 7173,
            type: "DDR4",
            capacity: 8,
            url: "https://www.ozon.ru/product/samsung-operativnaya-pamyat-ddr4-8gb-2666-mhz-dlya-pk-1x8-gb-m378a1k43cb2-ctd-1240234919/?at=jYtZJ0Y40FZzg8YpTrrVxMAUpNvx0nIQooqz3IvLEvw1"
        },
        {
            id: 5,
            name: "G.Skill Trident Z5 DDR5 64GB Kit (OZON)",
            specs: "64GB DDR5 (2x32GB), 6000MHz",
            price: 46863,
            type: "DDR5",
            capacity: 64,
            url: "https://www.ozon.ru/product/g-skill-operativnaya-pamyat-ddr5-trident-z5-rgb-32gb-6000mhz-cl36-36-36-36-96-1-35v-2x16-gb-f5-886297749/?at=A6tGo5ZK5cyyYzQOulxlPnmhMj6D5KcxwWnXkFy7poJP"
        },
        {
            id: 6,
            name: "Hikvision DDR3 8GB (Ситилинк)",
            specs: "8GB DDR3, 1600MHz",
            price: 2390,
            type: "DDR3",
            capacity: 32,
            url: "https://www.citilink.ru/product/pamyat-ddr3-8gb-1600mhz-hikvision-hsc308u16z1-8g-hiksemi-rtl-pc3-12800-2099291/"
        },
        {
            id: 7,
            name: "Corsair Vengeance RGB DDR5 32GB (OZON)",
            specs: "32GB DDR5 (2x16GB), 6000MHz",
            price: 43535,
            type: "DDR5",
            capacity: 32,
            url: "https://www.ozon.ru/product/corsair-operativnaya-pamyat-ddr5-vengeance-rgb-6400-32-gb-2x16-gb-intel-xmp-3-0-36-48-48-104-2x16-3391473284/?at=83tBMgX5gu4o6Mq9TgWyPr8IrMGqKyHxEL2lpTgpNlm"
        },
        {
            id: 8,
            name: "AMD Radeon R3 DDR3 8GB (OZON)",
            specs: "8GB DDR3, 1600MHz",
            price: 1319,
            type: "DDR3",
            capacity: 8,
            url: "https://www.ozon.ru/product/amd-operativnaya-pamyat-radeon-4gb-ddr3-1600-1rx8-u-dimm-1x4-gb-r534g1601u1s-uo-3240965947/?at=J8tgzoQR0uv12V6ETn6wLyvuMWGMkBFpm570vf9mOoOG"
        },
        {
            id: 9,
            name: "Patriot Viper Steel DDR4 16GB (OZON)",
            specs: "16GB DDR4, 3600MHz",
            price: 13290,
            type: "DDR4",
            capacity: 16,
            url: "https://www.ozon.ru/product/patriot-memory-operativnaya-pamyat-viper-steel-ddr4-3000-mgts-1x16-gb-pvs416g320c6-1637455855/?at=DqtDmZO1gTXqZJ1WtyrRDgEsA1q1OMhZAKvZ0S2ZG7LP"
        },
        {
            id: 10,
            name: "Kingston FURY DDR5 16GB (OZON)",
            specs: "16GB DDR5, 5200MHz",
            price: 9714,
            type: "DDR5",
            capacity: 16,
            url: "https://www.ozon.ru/product/kingston-fury-operativnaya-pamyat-1x16-gb-kf432c16bb-16-1728684824/?at=OgtEXk2JqI9yjpPRc6Qw32rhV9omlt56g96NUzMqwRM"
        },
    ],
    storage: [
        {
            id: 1,
            name: "Samsung 980 1TB NVMe(DNS)",
            specs: "1TB, NVMe, PCIe 3.0",
            price: 18990,
            type: "NVMe",
            capacity: 1000,
            url: "https://www.dns-shop.ru/product/2f1ccf93dc09ed20/1000-gb-m2-nvme-nakopitel-samsung-980-mz-v8v1t0bw/"
        },
        {
            id: 2,
            name: "WD Blue 1TB SSD(Ситилинк)",
            specs: "1TB, SATA III",
            price: 18990,
            type: "SATA",
            capacity: 1000,
            url: "https://www.citilink.ru/product/ssd-nakopitel-wd-blue-sa510-wds100t3b0a-1tb-2-5-sata-iii-sata-1846027/"
        },
        {
            id: 3,
            name: "Kingston KC3000 512GB SSD(OZON)",
            specs: "512Гб, PCIe 4.0 NVMe M.2",
            price: 13684,
            type: "NVMe",
            capacity: 2000,
            url: "https://www.ozon.ru/product/kingston-512-gb-vnutrenniy-ssd-disk-skc3000s-512g-1628554180/?at=MZtv8Y6gEiwl4xgAiy014m1tmMvG7BIvYvzvpS7Wnv7&from_sku=1637445411&oos_search=false"
        },
        {
            id: 4,
            name: "Crucial BX500 480GB SSD(OZON)",
            specs: "480GB, SATA III",
            price: 9881,
            type: "SATA",
            capacity: 480,
            url: "https://www.ozon.ru/product/crucial-500-gb-vnutrenniy-ssd-disk-ct500bx500ssd1-783756255/?at=57twK1WoqcQ8KwRQiWEB6r2clOQW1pCv9KKQ6H9AvVko"
        },
        {
            id: 5,
            name: "Kingston NV2 500GB SSD(OZON)",
            specs: "500GB, PCIe 4.0 NVMe M.2",
            price: 8312,
            type: "NVMe",
            capacity: 500,
            url: "https://www.ozon.ru/product/kingston-500-gb-vnutrenniy-ssd-disk-snv3s-500g-1736722541/?at=08tYWzrK6c8gOzJVfQ3rnk7sG6vWR4hxBGQKltZnGAvx"
        },
        {
            id: 6,
            name: "Seagate BarraCuda 2TB HDD(Ситилинк)",
            specs: "2TB, 7200 rpm, SATA III",
            price: 16990,
            type: "HDD",
            capacity: "2000",
            url: "https://www.citilink.ru/product/zhestkii-disk-seagate-barracuda-st2000dm008-2tb-hdd-sata-iii-3-5-1187869/"
        },
        {
            id: 7,
            name: "WD Purple 4TB HDD(Ситилинк)",
            specs: "4TB, 5400 rpm, SATA III",
            price: 18990,
            type: "HDD",
            capacity: "4000",
            url: "https://www.citilink.ru/product/zhestkii-disk-wd-purple-wd43purz-4tb-hdd-sata-iii-3-5-1933027/"
        },
        {
            id: 8,
            name: "Toshiba P300 1TB HDD(OZON)",
            specs: "1TB, 7200 rpm, SATA III",
            price: 6290,
            type: "HDD",
            capacity: "1000",
            url: "https://www.ozon.ru/product/toshiba-1-tb-vnutrenniy-zhestkiy-disk-dlya-kompyutera-hdd-p300-nakopitel-vneshniy-1-tb-3449525769/?at=36tWMvRwLh8mZglDsnOrgR0fJBpQPGSOzqA0ZiGRo4qr"
        },
        {
            id: 9,
            name: "WD Blue 4TB HDD(Ситилинк)",
            specs: "4TB, 5400 rpm, SATA III",
            price: 17990,
            type: "HDD",
            capacity: "4000",
            url: "https://www.citilink.ru/product/zhestkii-disk-wd-blue-wd40ezax-4tb-hdd-sata-iii-3-5-1987527/"
        }
    ],
    psu: [
        {
            id: 1,
            name: "Corsair 750W",
            specs: "750W, 80 Plus Gold",
            price: 8999,
            wattage: 750,
            url: "https://www.dns.ru/product/corsair-750w/"
        },
        {
            id: 2,
            name: "Deepcool PF650 650W (DNS)",
            specs: "650W, 80 Plus Standard, Active PFC",
            price: 4020,
            wattage: "650",
            url: "https://www.dns-shop.ru/product/759476c1fa5ed763/blok-pitania-deepcool-pf650-r-pf650d-ha0b-eu-cernyj/"
        },
        {
            id: 3,
            name: "Chieftec Core BBS-600S 600W (OZON)",
            specs: "600W, 80 Plus Gold, Active PFC",
            price: 7474,
            wattage: "600",
            url: "https://www.ozon.ru/product/blok-pitaniya-dlya-pk-chieftec-core-bbs-600s-atx-2-3-600w-80-plus-gold-active-pfc-120mm-fan-oem-590402975/?at=WPtNY8y2lI83G3nliOMXVwiDn2wAYHQrg2BnuXG8xDm"
        },
        {
            id: 4,
            name: "Aerocool Aero Bronze 650W (OZON)",
            specs: "650W, 80 Plus Bronze, Active PFC",
            price: 3598,
            wattage: "650",
            url: "https://www.ozon.ru/product/blok-pitaniya-dlya-pk-aerocool-atx-650w-vx-plus-650w-24-4-4pin-120mm-fan-3xsata-rtl-676608312/?at=Z8tXRYoEOu9jN1qXHPo4QJlT86o7V5INqjRkOFEx26Vp"
        },
        {
            id: 5,
            name: "Cougar STX 650W (DNS)",
            specs: "650W, 80 Plus Standard, Active PFC",
            price: 10219,
            wattage: "650",
            url: "https://www.dns-shop.ru/product/c02358657c8d3361/blok-pitania-cougar-stx650-cgr-st-650-cernyj/"
        },
        {
            id: 6,
            name: "Deepcool DQ650 EVO 650W (OZON)",
            specs: "650W, 80 Plus Gold, Fully Modular",
            price: 4671,
            wattage: "650",
            url: "https://www.ozon.ru/product/blok-pitaniya-dlya-pk-deepcool-650w-pf650-80-plus-805230481/?at=79tn6YWv3SP3WJ6pUqXJWogsj13VXYC8GL3g5IoDj3my"
        },
        {
            id: 7,
            name: "Aerocool KCAS Plus 600W (DNS)",
            specs: "600W, 80 Plus Bronze, Active PFC",
            price: 3199,
            wattage: "600",
            url: "https://www.dns-shop.ru/product/19e57a5a0c913330/blok-pitania-aerocool-kcas-plus-600w-kcas-600-plus-cernyj/"
        },
        {
            id: 10,
            name: "Cougar VTE600 600W (DNS)",
            specs: "600W, 80 Plus Bronze, Active PFC",
            price: 4544,
            wattage: "600",
            url: "https://www.ozon.ru/product/blok-pitaniya-cougar-vte-500-80-bronze-500w-yaponskie-kondensatory-active-pfc-1673488567/?at=LZtlO2YAEIylkZRnt4lg7YLsMEjnK4IqwwABPF7lX34P"
        }
    ],
    case: [
        {
            id: 1,
            name: "Deepcool MATREXX 55(DNS)",
            specs: "Mid Tower, ATX/mATX",
            price: 3999,
            formFactor: "ATX",
            url: "https://www.dns-shop.ru/product/c048bb3615643332/korpus-deepcool-matrexx-55-dp-atx-matrexx55-cernyj/"
        },
        {
            id: 2,
            name: "Deepcool CC560 V2(OZON)",
            specs: "Mid Tower, ATX, Mesh-перед",
            price: 4396,
            formFactor: "ATX",
            url: "https://www.ozon.ru/product/korpus-deepcool-cc560-v2-belyy-bez-bp-atx-8x120mm-5x140mm-1xusb2-0-audio-bott-psu-1580672121/?at=NOtwxpZqpcmYOgnjcpyX6OJhZ2WJOWhO7zzmxHzkvoKX"
        },
        {
            id: 3,
            name: "Zalman S2(DNS)",
            specs: "Mid Tower, ATX/mATX, 3 вентилятора",
            price: 3699,
            formFactor: "ATX",
            url: "https://www.dns-shop.ru/product/f5ea4f12fc1f3332/korpus-zalman-s2-cernyj/"
        },
        {
            i: 4,
            name: "AeroCool Cylon(OZON)",
            specs: "Mid Tower, ATX/mATX",
            price: 3990,
            formFacto: "ATX",
            url: "https://www.ozon.ru/product/korpus-dlya-pk-atx-aerocool-cylon-315095019/?at=K8tZwkDykFN2jYplC5XWGMLTDmJv4VcnD2lRXUnV0oKD"
        },
        {
            id: 5,
            name: "Fractal Design Pop Mini Air(OZON)",
            specs: "Mini Tower, mATX, Mesh, высокая продуваемость",
            price: 15915,
            formFactor: "mATX",
            url: "https://www.ozon.ru/product/fractal-design-fd-c-por1m-01-korpus-pop-mini-air-rgb-white-tg-clear-tint-2340323772/?at=57twK1MP1cjM6vJ0cEoJYy6FlvXoK6U5Vm10HLw4RvE"
        },
        {
            id: 6,
            name: "Lian Li LANCOOL 216(DNS)",
            specs: "Mid Tower, ATX, 2x160mm в комплекте",
            price: 9999,
            formFactor: "ATX",
            url: "https://www.dns-shop.ru/product/eebc68fecf85ed20/korpus-lian-li-lancool-216-g99lan216x10r-cernyj/"
        },
        {
            id: 7,
            name: "DEXP DC-201(DNS)",
            specs: "Mid Tower, ATX/mATX, бюджетный",
            price: 2699,
            formFactor: "ATX",
            url: "https://www.dns-shop.ru/product/75a138feadcb1b80/korpus-dexp-dc-201m-d831-dc-201m-cernyj/"
        },
        {
            id: 8,
            name: "Pure Base 500DX(DNS)",
            specs: "Mid Tower, ATX, ARGB, шумоизоляция",
            price: 10590,
            formFactor: "ATX",
            url: "https://www.dns-shop.ru/product/8a52fa9793f13332/korpus-be-quiet-pure-base-500dx-bgw37-cernyj/"
        },
        {
            id: 9,
            name: "GAMEMAX Vista M(OZON)",
            specs: "Mid Tower, ATX/mATX, Стекло спереди",
            price: 4999,
            formFactor: "ATX",
            url: "https://www.ozon.ru/product/korpus-dlya-pk-gamemax-vista-mw-white-bez-bp-belyy-midi-tower-micro-atx-mini-itx-cpu-165mm-vga-1200256132/?at=VvtzK82n8fKrgOQCrGLYn3IBZmP8LCGqlEYXUkg3r9R"
        },
        {
            id: 10,
            name: "Jonsbo D31 Mesh(OZON)",
            specs: "Midi Tower, mATX, экран опционально",
            price: 7490,
            formFactor: "mATX",
            url: "https://www.ozon.ru/product/jonsbo-kompyuternyy-korpus-d31-mesh-chernyy-d31-mesh-black-1628554853/?at=K8tZwkDykFN5rEVMtW8jXPMuj0Lq2mi4j2OA3cGnNG27&sh=fyAdUQDTlw"
        }
    ],
    cooler: [
        {
            id: 1,
            name: "Deepcool AK620(DNS)",
            specs: "Воздушное, AM4, AM5, LGA 1150, LGA 1151, LGA 1155, LGA 1156, LGA 1200, LGA 1700, LGA 1851",
            price: 4999,
            tdp: 260,
            url: "https://www.dns.ru/product/deepcool-ak620/"
        },
        {
            id: 2,
            name: "Intel E97379(Ситилинк)",
            specs: "Воздушное, LGA 1150, LGA 1151, LGA 1155, LGA 1156, LGA 1200",
            price: 350,
            tdp: 65,
            url: "https://www.citilink.ru/product/ustroistvo-ohlazhdeniya-kuler-intel-e97379-90mm-bulk-582779/"
        },
        {
            id: 3,
            name: "MONTECH NX400(Ситилинк)",
            specs: "Воздушное, AM4, AM5, LGA 1150, LGA 1151, LGA 1155, LGA 1156, LGA 1200, LGA 1700, LGA 1851",
            price: 1340,
            tdp: 220,
            url: "https://www.citilink.ru/product/ustroistvo-ohlazhdeniya-kuler-montech-nx400-soc-am5-am4-1200-1700-1851-2096142/properties/"
        },
        {
            id: 4,
            name: "Cooler Master Hyper 212 Pro(Ситилинк)",
            specs: "Воздушное, AM4, AM5, LGA 1150, LGA 1151, LGA 1155, LGA 1156, LGA 1200, LGA 1700, LGA 1851",
            price: 2800,
            tdp: 220,
            url: "https://www.citilink.ru/product/ustroistvo-ohlazhdeniya-kuler-cooler-master-hyper-212-pro-argb-soc-am5-2091883/properties/"
        },
        {
            id: 5,
            name: "PCCOOLER RT500(Ситилинк)",
            specs: "Воздушное,  AM4, AM5, LGA 1150, LGA 1151, LGA 1155, LGA 1156, LGA 1200, LGA 1700, LGA 1851",
            price: 1670,
            tdp: 245,
            url: "https://www.citilink.ru/product/ustroistvo-ohlazhdeniya-kuler-pccooler-rt500-tc-argb-soc-am5-am4-1200-2157417/"
        },
        {
            id: 6,
            name: "ID-COOLING FX360 Pro(Ситилинк)",
            specs: "Водяное,  AM4, AM5, LGA 1150, LGA 1151, LGA 1155, LGA 1156, LGA 1200, LGA 1700, LGA 1851, LGA 2011, LGA 2011-v3, LGA 2066",
            price: 4770,
            tdp: 350,
            url: "https://www.citilink.ru/product/sistema-vodyanogo-ohlazhdeniya-id-cooling-fx360-pro-soc-am5-am4-1200-1-2073325/"
        },
        {
            id: 7,
            name: "Aigo AC SE 240(Ситилинк)",
            specs: "Водяное, AM4, AM2+, AM3, LGA 2011, LGA 1151, LGA 1150, LGA 1155, LGA 1156, LGA 1366, LGA 1200, LGA 1700, LGA 2011-3",
            price: 2614,
            tdp: 200,
            url: "https://www.ozon.ru/product/aigo-sistema-vodyanogo-ohlazhdeniya-ac-se-240-chernyy-3468845879/?at=k2to0vOBBuym9RG6cJzzOGViQzOjn2FYYLoZrIXrB6Qz"
        },
        {
            id: 8,
            name: "Mr COLD J30(OZON)",
            specs: "Воздушное, AM4, LGA 1151v2, LGA 1155, LGA 1200, LGA 2011, LGA 2011-3, LGA 1151, LGA 1150, LGA 1700, LGA 1156, AM5, LGA 2011-1, LGA 1851",
            price: 2422,
            tdp: 190,
            url: "https://www.ozon.ru/product/s-displeem-kuler-dlya-protsessora-pk-bashennyy-4pin-bez-podsvetki-mr-cold-j30-2401472523/?at=DqtDmZ5AAfWqJB13FWNkB17s82L9ymt0pKQxxt3VxoyZ"
        },
        {
            id: 9,
            name: "Bloody BD-LC240ARGB1(OZON)",
            specs: "Водяное, AM4, AM5, AM3, LGA 1150, LGA 1151, LGA 1155, LGA 1156, LGA 1200, LGA 1366, LGA 2011, LGA 2011-3, LGA 2066",
            price: 4017,
            tdp: 260,
            url: "https://www.ozon.ru/product/vodyanoe-ohlazhdenie-dlya-protsessora-bloody-bd-lc240argb1-argb-260vt-4-pin-chernyy-1867472653/?at=gpt4WJAyyFRP1lmIEZ06gnUnpnLZ7S1WllvpHEOqXj"
        },
        {
            id: 10,
            name: "Deepcool AG400(OZON)",
            specs: "Воздушное, AM5, AM4, LGA 1200, LGA 1700, LGA 1851, LGA 1151, LGA 1150, LGA 1155",
            price: 1367,
            tdp: 220,
            url: "https://www.ozon.ru/product/kuler-dlya-protsessora-deepcool-ag400-soc-am5-am4-1200-1700-1851-silver-black-4-pin-18-31-6db-al-cu-1830825093/?at=79tn6YANNTW93kywt0GY47JfVYvkNKsxEE8zWSzRjBrm"
        },
    ]
};

let currentBuild = {
    cpu: null,
    gpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    psu: null,
    case: null,
    cooler: null
};

function formatPrice(price) {
    return price.toLocaleString('ru-RU') + ' ₽';
}

function getTotalPrice() {
    let total = 0;
    for (let category in currentBuild) {
        if (currentBuild[category]) {
            total += currentBuild[category].price;
        }
    }
    return total;
}