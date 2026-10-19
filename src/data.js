export const BUSINESS = {
  name: "Boba's PC Repair",
  phoneDisplay: '(555) 262-2272',
  phoneTel: '+15552622272',
  whatsapp: '15552622272',
  email: 'bench@bobaspcrepair.local',
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed · drop-off locker' },
  ],
  areas: ['Drop-off bench', 'Local courier pickup', 'On-site desktop service'],
  address: 'Bench Shop · Local metro area',
}

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#showcase', label: 'Results' },
  { href: '#area', label: 'Hours' },
  { href: '#contact', label: 'Book' },
]

export const SERVICES = [
  {
    id: 'dusting',
    title: 'Deep Dusting & Airflow Restoration',
    price: '$79',
    turnaround: 'Same-day',
    points: [
      'High-pressure electric blowout of chassis, heatsinks, and PSU intakes',
      'Fan blade, radiator, and filter cleaning without spinning fans under load',
      'Cable tidy so airflow paths stay unobstructed',
    ],
  },
  {
    id: 'thermal',
    title: 'CPU & GPU Thermal Paste / Pad Refresh',
    price: '$119',
    turnaround: '24 hours',
    points: [
      'Noctua NT-H2 or Thermal Grizzly Kryonaut application',
      'Pad replacement on VRMs, memory, and GPU core as needed',
      'Mount torque check and post-work thermal log',
    ],
  },
  {
    id: 'build',
    title: 'Custom PC Building & Bench Assembly',
    price: 'From $199',
    turnaround: '3–5 days',
    points: [
      'Parts inspection, cable routing, and sleeved-loom finish',
      'BIOS flash, XMP / EXPO memory profile tuning',
      'Driver stack, firmware, and first-boot stability pass',
    ],
  },
  {
    id: 'storage',
    title: 'Storage Upgrades & OS Migration',
    price: 'From $89',
    turnaround: 'Same-day',
    points: [
      'NVMe / SATA SSD swaps with clone or clean install',
      'Windows fresh install, driver setup, and activation check',
      'Health report on the retiring drive',
    ],
  },
  {
    id: 'diag',
    title: 'Hardware Diagnostics & Bench Testing',
    price: '$49*',
    turnaround: '2–4 hours',
    points: [
      'Thermal throttling, crash, and BSOD isolation',
      'Memtest, GPU burn, and PSU rail sanity checks',
      '*Credited toward repair if you proceed the same week',
    ],
  },
]

export const STEPS = [
  {
    n: '01',
    title: 'Free Initial Diagnostic',
    body: 'Tell us the symptoms. We inspect the chassis, logs, and thermals before quoting — no surprise bench fees.',
  },
  {
    n: '02',
    title: 'Bench Work & Cleaning',
    body: 'Anti-static handling, dust extraction, paste/pad work, and parts swaps on a grounded bench.',
  },
  {
    n: '03',
    title: 'Thermal & Stress Testing',
    body: 'Cinebench, 3D load, and idle soak. We log temps, clocks, and throttling so the fix is proven.',
  },
  {
    n: '04',
    title: 'Hand-off & Performance Report',
    body: 'You get the rig back with a before/after sheet, photos, and care notes for filters and paste cycles.',
  },
]

export const RESULTS = [
  {
    title: 'Ryzen 7 gaming tower',
    drop: '85°C → 62°C',
    detail: 'Under 10-minute Cinebench load after paste + pad refresh and deep dusting.',
    quote:
      'GPU fans were screaming. Boba’s shop had it back the same afternoon and the case is actually quiet now.',
    name: 'Alex M.',
    tag: 'Desktop · 5800X',
  },
  {
    title: 'Thin-and-light laptop',
    drop: '91°C → 68°C',
    detail: 'Repaste, heat-pipe reseat, and intake-grill restore. No more thermal shutdowns in class.',
    quote:
      'They walked me through the report instead of just handing me a bill. Laptop lasts a full lecture again.',
    name: 'Priya S.',
    tag: 'Laptop · i7',
  },
  {
    title: 'Creator workstation',
    drop: '88°C → 64°C',
    detail: 'Airflow reroute, filter kit, and EXPO tune. Encode times dropped with stable clocks.',
    quote:
      'Custom cable work looks factory. The performance sheet made it obvious the thermals were the bottleneck.',
    name: 'Diego R.',
    tag: 'Custom build',
  },
]
