import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "OK OCE Mineral - Web",
    img: "/portfolio/okeoce.png",
    desc: "Sebagai Front-End Developer, saya berkontribusi dalam pembuatan landing page untuk Ok Oce Mineral, sebuah produk air mineral lokal yang mengedepankan kualitas dan kesegaran alami. Tujuan utama dari landing page ini adalah untuk memperkenalkan produk, menonjolkan keunggulan air mineral ini, dan mengajak pengunjung untuk mencoba serta mendukung produk lokal.",
    href: "https://okocemineral.com/",
  },
  {
    id: 2,
    title: "Program Makan Siang Siswa Berbasis Scan QR - Aplikasi Mobile",
    img: "/portfolio/makansiang.png",
    desc: "Sebagai Front-End Developer, saya mengembangkan aplikasi inovatif untuk mendukung implementasi program makan siang siswa di sekolah. Aplikasi ini dirancang untuk memudahkan administrasi dan distribusi makan siang dengan menggunakan teknologi scan QR, sehingga memastikan proses yang efisien dan akurat.",
    href: "https://youtu.be/qqICD81vLJg?si=E2qFBpcu9a2U17rd",
  },
  {
    id: 3,
    title: "Redesign Web QWords - Web",
    img: "/portfolio/qwords.png",
    desc: "Sebagai Front-End Developer, saya terlibat dalam proyek web redesign untuk QWords, sebuah perusahaan penyedia layanan web hosting dan domain terkemuka di Indonesia. Tujuan utama dari proyek ini adalah meningkatkan pengalaman pengguna (UX), memperkuat branding, serta meningkatkan konversi melalui tampilan dan navigasi situs yang lebih modern dan intuitif.",
    href: "https://panjikumbara.github.io/Redesign-Qwords/",
  },
  {
    id: 4,
    title: "Portofolio Versi 1.0 - Web",
    img: "/portfolio/portofolio-1.png",
    desc: "Sebagai langkah awal dalam membangun identitas profesional di dunia digital, saya telah mengembangkan web portofolio pribadi yang dirancang untuk menampilkan karya-karya dan pengalaman saya sebagai seorang Front-End Developer. Web portofolio ini berfungsi sebagai platform untuk memperlihatkan keahlian saya dalam desain web, pemrograman, dan pengembangan proyek serta terdapat beberapa sertifikat yang mendukung.",
    href: "https://panjikumbara.github.io/Portofolio-Panji-Kumbara/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <form action={item.href}>
              <button>
                <a href={item.href}>See Demo</a>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>My Portofolio</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
