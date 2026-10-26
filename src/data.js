const cdn = (file, w = 1800) =>
  `https://cdn.forgeautomotive.media/images/ed72g2cx/production/${file}?auto=format&fit=max&q=75&w=${w}`;

export const media = {
  gwagen: cdn("9e787594ef2847dbc40ccfad10a2d216286d948b-708x1402.png", 1200),
  porsche: cdn("682e73d1b2acb4f13627274e87a4177e916e71ac-708x1402.png", 1400),
  defender: cdn("ba98741cf2c606538db469ad0ae866ba4a03829e-707x1402.png", 1200),
  stitch: cdn("1ebe90ab77d2912275ef15f9ba86fe2fea1f451f-2880x3600.jpg", 2000),
  identity: cdn("da57e5f387ccdbcac3a5062687c96077cce58732-2880x2234.jpg", 1800),
  insight: cdn("7e3618f8e7e2adade4756571eb45bc5b269c945f-2880x2174.jpg", 1800),
  cohesion: cdn("6ae234c0882d982601f3c56bb5949218746831a5-2880x2218.jpg", 1800),
  closeup: cdn("9c69426f1711db9bc458b27925b9ac7e0d81d0aa-540x960.jpg", 800),
  wheel: cdn("63662a78dca265f912de70e8af02611ae6185428-216x270.jpg", 600),
  body: cdn("19b7e49a2f12696686bcf17288ce472acff82b3e-1254x1254.png", 1600),
  interior: cdn("10ebf92161cd329a63294240810302d888878636-1440x1800.jpg", 1600),
  wheels: cdn("5f5b1b063f2ce9527c148819ad59e40f1803f7a7-1440x1800.jpg", 1600),
  lighting: cdn("b702180a6720e017269ea18a09158b80d35b568d-1440x1800.jpg", 1600),
  exhaust: cdn("b035e63f8c811ca259b8baa42aef3213928828a3-1440x1800.jpg", 1600),
  protection: cdn("2c1a6f9f85de2f6ff7ea0a7de3c3898345710a58-1440x1800.jpg", 1600),
  previous: cdn("35c93330a1cd16aa426b7bded4ad225113f7b6db-3840x2160.png", 2000),
  stock: cdn("2bd7f1455a34d387b7cab13cfe092e2bd89f49fb-2880x1868.jpg", 2000),
  finale: cdn("8234f422e53117f9ee574a826d50902f5e4272b5-2880x1800.jpg", 2200),
  headlight: cdn("1ae29c489c262e30eeef1b5f2c27aea51088455a-740x740.jpg", 1200),
};

export const logos = [
  ["Audi", "ee044cb181426da11c16900ce4913af0f62d75be-120x42.svg"],
  ["Bentley", "1bbcee87beeb24ad727d42d93b98c616db92f466-120x38.svg"],
  ["Jaguar", "38ec1f867d581d9d61ddb5eab753ba8c1c5389f6-120x10.svg"],
  ["Lamborghini", "761e4964ae0fe091a0b91929b167daf8feea9d43-52x60.svg"],
  ["Land Rover", "904b299c410141aa875f4f014aeb013989ecc835-115x60.svg"],
  ["Aston Martin", "f8d59368625dc7aff0ad2e12090b4d21de46a6db-120x28.svg"],
  ["Lotus", "bda8edd2202c68fcd1843e37e49ff9a5a3a9051d-60x60.svg"],
  ["Lucid", "961ebcaf23926504a5912fd0c14e20ebf2956433-120x8.svg"],
  ["Maserati", "3ac4c0976fcecfca013643bceb42a8d5a734818c-120x60.svg"],
  ["McLaren", "a0a838a315f5e6927b402fa8d468c5d75b539239-120x18.svg"],
  ["Mercedes", "42baba0d1be5d9f4e6be490dbc40638566c91808-60x60.svg"],
  ["Polestar", "d72b08898e5351c0fb83bb1ffd677159ab18cf3b-120x27.svg"],
  ["Porsche", "6fdc1f00f6829b92a2c42d3f5af89f314b95fea9-120x8.svg"],
  ["Rolls-Royce", "546ecc843c42f8ec4eacc9d941b45cc774f4a8a7-49x60.svg"],
].map(([name, file]) => ({ name, src: cdn(file, 240) }));

export const floats = [
  { src: cdn("8f648e094847c376b6b560dfe9f0e9d6e0ce2fed-216x270.jpg", 480), alt: "Matte black Lamborghini", top: "14%", left: "7%", w: 128 },
  { src: cdn("2bb9c0275c1fd738b3d8d6eab67da5371f4ff30c-216x270.jpg", 480), alt: "McLaren on grass", top: "28%", left: "18%", w: 156 },
  { src: cdn("116085dcd0540b42fceb7cdeaf7ac1a05f3bb44d-216x270.jpg", 480), alt: "Audi R8 outside the warehouse", top: "58%", left: "8%", w: 138 },
  { src: cdn("0288035a4aa68ca32da6fc23258d68e5d64d6119-216x270.jpg", 480), alt: "Forge interior", top: "62%", left: "24%", w: 118 },
  { src: cdn("e782a9a843ea48782e06daf1fbb95fb60d0a1a77-216x270.jpg", 480), alt: "Man in black hoodie", top: "12%", left: "74%", w: 132 },
  { src: cdn("4ffe9f6ba94c0cc2c4a25a0d11e825835a551928-216x270.jpg", 480), alt: "Range Rover wrap", top: "34%", left: "82%", w: 150 },
  { src: cdn("8d385d32be7a6f0eb6b8b207fcba594d172238ef-216x270.jpg", 480), alt: "Defender in the workshop", top: "58%", left: "70%", w: 126 },
  { src: cdn("63e0cfeb21911e7f46f7892a0fcdc4c56ab5a06f-216x270.jpg", 480), alt: "Craftsman applying PPF", top: "74%", left: "38%", w: 108 },
  { src: cdn("8b80ab77e6e599ccf253d8d0928e0542363f10a5-216x270.jpg", 480), alt: "Technicians applying PPF", top: "20%", left: "58%", w: 120 },
];

export const pillars = [
  {
    index: "01 / 03",
    title: "Identity",
    image: media.identity,
    alt: "Spirit of Ecstasy",
    copy: "Every build begins with the person behind the wheel, shaped around their individual taste, lifestyle, presence and personal sense of identity on the road.",
  },
  {
    index: "02 / 03",
    title: "Insight",
    image: media.insight,
    alt: "Custom carbon fibre",
    copy: "Exterior, interior and performance are brought together through a considered, detail-led approach, creating one complete and fully resolved vision.",
  },
  {
    index: "03 / 03",
    title: "Cohesion",
    image: media.cohesion,
    alt: "McLaren rear",
    copy: "Every modification is chosen with precision, ensuring each detail adds purpose, balance and distinction to the final bespoke automotive build.",
  },
];

export const services = [
  {
    title: "Bodystyling",
    image: media.body,
    alt: "Forge bodystyling",
    copy: "From aero styling to carbon details and exterior refinement, bodywork is designed to change the vehicle’s presence without compromising its original character.",
  },
  {
    title: "Interior",
    image: media.interior,
    alt: "Forge interior",
    copy: "Material, stitching, trim and finish are selected to create an interior that feels personal, tactile and composed. We turn the cabin into a space of identity, comfort and control.",
  },
  {
    title: "Wheels",
    image: media.wheels,
    alt: "Forge wheels",
    copy: "Bespoke wheel upgrades designed to enhance stance, proportion and road presence, with fitments selected to complement the vehicle’s character and performance.",
  },
  {
    title: "Lighting",
    image: media.lighting,
    alt: "Forge lighting",
    copy: "Lighting gives a vehicle its expression. From subtle tinting to signature illumination and refined visual details, we use light to sharpen character, presence and atmosphere.",
  },
  {
    title: "Exhaust",
    image: media.exhaust,
    alt: "Forge exhaust",
    copy: "Exhaust upgrades are chosen for tone, response and presence. Not noise for the sake of noise, but a sound profile that gives the vehicle more character and depth.",
  },
  {
    title: "Protection",
    image: media.protection,
    alt: "Paint protection film",
    copy: "Paint protective film solutions that preserve the finish of the vehicle while allowing for satin finishes, coloured films and full visual transformation.",
  },
];

export const builds = [
  ["EX-01", "Example Coupe", "Example listing. A placeholder build shown in place of a real vehicle record."],
  ["EX-02", "Example Touring", "Example listing. Satin paint and carbon details used only as sample copy."],
  ["EX-03", "Example Utility", "Example listing. Stance and finish described here are not a real stock car."],
  ["EX-04", "Example Grand Tourer", "Example listing. Colour, trim, and specification are sample details."],
  ["EX-05", "Example Estate", "Example listing. Written as a stand-in for a commissioned build."],
  ["EX-06", "Example Saloon", "Example listing. Materials and colours are placeholders."],
  ["EX-07", "Example Compact", "Example listing. Short description for a sample vehicle card."],
  ["EX-08", "Example Sport", "Example listing. Kit, finish, and caliper notes are sample text."],
];

export const buildImages = [
  cdn("8d385d32be7a6f0eb6b8b207fcba594d172238ef-216x270.jpg", 900),
  cdn("63662a78dca265f912de70e8af02611ae6185428-216x270.jpg", 900),
  cdn("4ffe9f6ba94c0cc2c4a25a0d11e825835a551928-216x270.jpg", 900),
  cdn("8f648e094847c376b6b560dfe9f0e9d6e0ce2fed-216x270.jpg", 900),
  cdn("116085dcd0540b42fceb7cdeaf7ac1a05f3bb44d-216x270.jpg", 900),
  cdn("0288035a4aa68ca32da6fc23258d68e5d64d6119-216x270.jpg", 900),
  cdn("2bb9c0275c1fd738b3d8d6eab67da5371f4ff30c-216x270.jpg", 900),
  cdn("63e0cfeb21911e7f46f7892a0fcdc4c56ab5a06f-216x270.jpg", 900),
];

export const phone = "+1 (555) 010-0142";
export const phoneHref = "tel:+15550100142";
export const email = "studio@example.com";
