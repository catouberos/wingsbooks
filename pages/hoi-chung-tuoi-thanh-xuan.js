import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/aobuta.module.scss'
import { useEffect } from 'react'
import Rellax from "rellax"
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Aobuta() {
    useEffect(() => {
        let rellax = new Rellax('.rellax');

        const theSpotlight = document.getElementById('spotlight')
        const theContent = document.getElementById('content')
        const theCharacters = document.getElementById('characters')
        const lastScrollTop = 0

        const ScrollReveal = require('scrollreveal').default
        ScrollReveal().reveal('#introduction', {
            delay: 200,
        });
        ScrollReveal().reveal('#story', {
            delay: 200,
        });
        ScrollReveal().reveal('#images', {
            delay: 200,
        });
        ScrollReveal().reveal('#author', {
            delay: 200,
        });
        ScrollReveal().reveal('#characters', {
            delay: 200,
        });
        ScrollReveal().reveal('#adaptations', {
            delay: 200,
        });
        ScrollReveal().reveal('#order', {
            delay: 200,
        });

        window.addEventListener("load", function () {
            document.getElementById("entryLogo").classList += " animate__animated animate__jackInTheBox"
            setTimeout(function () { document.getElementById("entryContainer").classList += " animate__animated animate__fadeOut" }, 1500)
        });

        document.getElementById("toggleNav").addEventListener("click", function () {
            const nav = document.getElementById("navigation")
            if (nav.classList.contains("animate__slideInLeft")) {
                nav.classList.remove("animate__slideInLeft")
                nav.classList += " animate__slideOutLeft"
            } else {
                if (!nav.classList.contains("animate__animated")) {
                    nav.classList += " animate__animated"
                }
                nav.style.display = "block"
                nav.classList.remove("animate__slideOutLeft")
                nav.classList += " animate__slideInLeft"
            }
        })

        return () => {
            rellax.destroy()
        }
    })

    return (
        <div>
            <style jsx global>{`
                html {
                    background: #f4f5f7;
                    font-family: "Agenda Light", serif;
                    scroll-behavior: smooth;
                }
            `}</style>

            <Head>
                <title>Hội Chứng Tuổi Thanh Xuân</title>
                <meta name="description" content="Hội chứng tuổi thanh xuân" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="h-full w-full absolute top-0 left-0 z-50" style={{ background: '#f4f5f7' }} id="entryContainer">
                <div className="flex items-center justify-center h-full" id="entryLogo">
                    <Image
                        src="/images/aobuta/logo-blue.webp"
                        width={495}
                        height={81}
                        quality={100}
                    />
                </div>
            </div>

            <a className={`${styles.menu} fixed md:hidden z-30`} href="javascript:void(0)" id="toggleNav">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </a>

            <div className={`${styles.parallax} fixed top-0 left-0 z-0 h-full w-full`}>
                <div className="relative">
                    <div className={`${styles.parallax1} rellax absolute top-0 left-0 h-screen w-screen`} data-rellax-speed="1"></div>
                    <div className={`${styles.parallax2} rellax absolute top-0 left-0 h-screen w-screen`} data-rellax-speed="2"></div>
                </div>
            </div>

            <div className="block md:flex w-full">
                <div className="whitespace-nowrap h-screen fixed md:sticky top-0 p-8 bg-white hidden md:block z-20 w-full md:w-auto" id="navigation">
                    <div className="flex flex-col h-full">
                        <a href="#spotlight">
                            <Image
                                src="/images/aobuta/logo-vertical.webp"
                                width={128}
                                height={188}
                                quality={100}
                            />
                        </a>
                        <ul className="flex-1 mt-6">
                            <li><a href="#introduction">Giới thiệu</a></li>
                            <li><a href="#story">Cốt truyện</a></li>
                            <li><a href="#images">Hình ảnh</a></li>
                            <li><a href="#author">Tác giả</a></li>
                            <li><a href="#characters">Nhân vật</a></li>
                            <li><a href="#adaptations">Chuyển thể</a></li>
                            <li><a href="#order">Đặt mua</a></li>
                        </ul>
                        <div>
                            <Image
                                src="/images/aobuta/mai-chibi.webp"
                                width={100}
                                height={142}
                            />
                        </div>
                    </div>
                </div>
                <main>
                    <section className={`relative w-full h-screen ${styles.spotlight}`} id="spotlight">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 text-center w-11/12 md:w-3/4 lg:w-1/2">
                            <Image
                                src="/images/aobuta/logo.webp"
                                layout="fill"
                                objectFit="contain"
                                alt="Hội chứng tuổi thanh xuân"
                            />
                        </div>
                        <div className="rellax absolute left-4 top-4 w-1/2" style={{ maxWidth: '12rem' }}>
                            <Image
                                src="/images/aobuta/authors.webp"
                                width={1029}
                                height={297}
                            />
                        </div>
                        <div className="rellax absolute bottom-8 right-4 hidden md:block" data-rellax-speed="1">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="360px" height="100%" preserveAspectRatio="none" viewBox="0 0 416.07 97.96" fill="rgba(255, 255, 255, 1)">
                                    <path d="M415.93,69.33c-8.52,0-18.6.57-28,.57,0-1,2.1-2.42,2.87-3,1.16-.85,3.13-.63,4.56-3.17.44-.77-1.24-1.84,0-3.23.74-.84,2-1,2.56-1.48.74-.61,7.84-4.58,2-4.58.39-2.15,7.7-1,7.44-3-.08-.65-19.25-1-21.17-1,0-2.35,5.1,0,5.72-1.14.83-1.52-7.66-1.12-8.57-1.91.82-2.44.88.25-.62-2.46,5.08-4.78,11.85-2.2,17.75-5.61-1.82-1.61-8.17.68-10.5.82-4.22.26-13.52,1.43-16.36-1.42,1.42-1.48,9.88-.82,10.19-1.63.73-1.91-10.36.43-10.77-2.1.89.27,1.44-1.74.81-2.28.77.66-4.6,0-4.25-1.15.93.41,1.5.22,1.74-.56,0-1.2-6.2-1.73-6.89-1.73,0-3,12.9-4.62,14.82-4.87,3.53-.44,8.16-1.21,11.51-1.42,1.6-.11,4-.51,5.15-.58,2.11-.12,4,.2,5.79-.45,1-.36-.2-1.26-.64-1.26,0-.68,4.94-3.21,5.72-3.44,2.43-.7,6.7.53,8.51-1.39-1-1.1-10.83-.83-12.38-.9-4.3-.19-8.14-.07-12.08-.57-7.41-.94-14.46-1.16-21.82-2.29-12.21-1.87-24.64-4.48-37.49-5.72C317,5,302,3.93,287.31,3.09,271,2.15,253.49.31,236.68.09,213-.23,190.44.39,167.56.66c-14.71.17-31.73-.19-46.35,1.71-28,3.65-57.48,3-85.56,8-4.31.77-27.23,6.23-18.34,12,1.34.87,4,.65,4.9,1.43.68.58,2.71,4.31,2.58,5.43-.21,1.85,1,.89-.67,2.87-.43.52-3.82-.58-4.2,0-1.48,2.29,4.52,1.15,5.72,1.15,0,2.69-5.88.59-6.78,2.49-.11.25,13-1.16,11.72,2.43-.73,2.1-6-1.26-7.13,1-.17.34,5.7,1.1,6.2,1-.07.43-10.8,1.15-12,1.15-.25.82,1.77,1.47,2.3,1.91-.3,3.19-8.21-1.11-5.61,3.81,1.79,3.38,6,1.51,8.46,3.16-1.94,2.67-1.87.74-1.49,4.28.18,1.64,3.44.37.55,2.87-1.38,1.19-7.46,1.19-9.65,1.14-3.48-.08-7.22-1-10,.84a12.6,12.6,0,0,0-2,2c-.34.67-.23,4,.57,4.58,1.1.85,3.37-.19,4.29.57,2.25,1.84-.16,3.44.88,5.15.55.89,3.59,3.73,4.27,4.58.52.64,1.88,1.87,2.6,2.91,1,1.43.62,2.44,1.89,3.56,2.24,2,5.66,2.22,8.12,4.14,1.86,1.45,2.29,2.41,4.5,4,2.76,1.95-.82,2,4.43,2.48,0,0,.82-1.06,1-1,2.33.2,13.82,2.29,13.57,2.56.65.87,2.27.06,2.27-.85,2.81,0,5.37,1.4,8.29,1.72,1.28.14,2.28-.36,4,.58.81-.92,5.69.54,7.11.56,2.77,0,20.54.82,20,.85,2.29-.15,10.53-1,11.12.31,1.52-1.44,11.37-1.44,13.78-1.73,3.7-.45,7.47-.13,10.3-.58,5-.77,9.58,0,13.73.58,2.6.33,143.42-.78,168.09-1.72,10.88-.42,25.81,0,36.28,0,3.54,0,34,1.06,34,0,0-.48-7.66-1.17-8.11-1.15a24.85,24.85,0,0,1-5.85.09,51.74,51.74,0,0,0-7.23-.37,35.42,35.42,0,0,1-4.83.29,26.57,26.57,0,0,1-2.8-1.06c-1-.21-1.16,1.34-2.1,1.06a.9.9,0,0,0-.57-1.15c.43-2.17,24.68-.6,26.33-.57,1.29,0,2.64-.5,4.22-.5a66.55,66.55,0,0,1,6.67.2,164.81,164.81,0,0,0,18.55-.27c1,0,19.52-4.74,16-7.44h-4.28C411.35,82.05,416.34,69.33,415.93,69.33Z"></path>
                                </svg>
                                <p className="absolute top-1/2 transform -translate-y-1/2 text-xs text-center w-full px-10">
                                    Nằm trong top 10 bảng xếp hạng Kono Light Novel Ga Sugoi năm 2020<br />
                                    Series light-novel rom-com nổi tiếng đến từ Dengeki Bunko!
                                </p>
                            </div>
                        </div>
                        <a href="#content" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white border-1" style={{ borderColor: "#9a841c" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </a>
                    </section>
                    <section id="content" className={styles.content}>
                        <div className="px-4 py-12 md:p-16" id="introduction">
                            <h2 className={`${styles.gatefold} text-5xl mb-6 text-center md:text-left md:pl-12`}>Giới thiệu</h2>
                            <div className={`${styles.agenda} ${styles.bubble2} pl-12 pr-14 py-10 w-full md:w-3/4 lg:w-1/2`}>
                                <p className="mb-4"><strong>HỘI CHỨNG TUỔI THANH XUÂN</strong> là series light-novel cực kì ăn khách của bộ đôi tác giả Hajime KAMOSHIDA và hoạ sĩ Keji MIZOGUCHI. Đây chính là nguyên tác của bộ anime đình đám thống lĩnh mọi bảng xếp hạng anime năm 2018 và tiếp tục được chuyển thể thành movie chiếu rạp vào năm 2019!</p>
                                <p>Bộ sách cũng đã lọt top các series bán chạy nhất nửa đầu 2020 tại thị trường Nhật Bản và đã bán được HƠN 2 TRIỆU BẢN. Ngoài ra trong năm đó, tác phẩm cũng nằm trong top 10 của BXH Kono Light novel Ga Sugoi.</p>
                            </div>
                        </div>
                        <div className="px-4 py-12 md:p-16 relative" id="story">
                            <h2 className={`${styles.gatefold} text-5xl mb-6 text-center md:text-left md:pl-12`}>Cốt truyện</h2>
                            <div className={`${styles.agenda} bg-white rounded-xl p-6 md:m-6 w-full md:w-3/4 lg:w-1/2`}>
                                <p className="mb-4">Cuộc sống của Akutagawa Sakuta đã bước sang một trang mới kể từ khi cậu bắt gặp một nàng thỏ hoang trong thư viện. Cô nàng ấy chính là Sakurajima Mai, đàn chị khóa trên của cậu tại trường trung học phổ thông Minegahara, đồng thời cũng từng là một diễn viên nhí nổi tiếng. Có vẻ như ngoài Sakuta, không ai chú ý đến sự tồn tại của Mai cả. Gọi hiện tượng ấy là “Hội chứng tuổi dậy thì”, Sakuta đã quyết định cùng Mai giải mã những bí ẩn liên quan đến hội chứng của cô, và mối quan hệ của hai người cũng ngày càng gắn bó chặt chẽ…</p>
                                <p><strong>HỘI CHỨNG TUỔI THANH XUÂN</strong> là câu chuyện kể về những cô gái mắc phải những rối loạn tâm lý dẫn tới các hiện tượng siêu nhiên kỳ lạ gọi là “Hội chứng tuổi dậy thì” như xóa bỏ sự tồn tại của bản thân, lặp lại thời gian, doppelganger… Cùng với Sakurajima Mai, Azusagawa Sakuta đã giải quyết những khúc mắc đó - giải quyết “Hội chứng tuổi dậy thì”, đồng thời ở bên trong cậu cũng có những sự thay đổi lớn lao.</p>
                            </div>
                            <div className="absolute right-16 bottom-16 hidden md:block">
                                <Image
                                    src="/images/aobuta/tomoe-chibi.webp"
                                    width={180}
                                    height={260}
                                />
                            </div>
                        </div>
                        <div className="bg-black" id="images">
                            <div className="hidden md:flex gap-2 p-2">
                                <Image
                                    src="/images/aobuta/art1.jpg"
                                    height={950}
                                    width={650}
                                    className="rounded-xl"
                                />
                                <Image
                                    src="/images/aobuta/art2.jpg"
                                    height={950}
                                    width={650}
                                    className="rounded-xl"
                                />
                                <Image
                                    src="/images/aobuta/art3.jpg"
                                    height={950}
                                    width={650}
                                    className="rounded-xl"
                                />
                                <Image
                                    src="/images/aobuta/art4.jpg"
                                    height={950}
                                    width={650}
                                    className="rounded-xl"
                                />
                            </div>
                            <Splide options={{
                                rewind: true,
                                autoplay: true,
                                interval: 3000,
                                arrows: false,
                                pagination: false,
                            }} className="block md:hidden">
                                <SplideSlide className="p-2">
                                    <div className="text-center" style={{ lineHeight: 0 }}>
                                        <Image
                                            src="/images/aobuta/art1.jpg"
                                            height={950}
                                            width={650}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="p-2">
                                    <div className="text-center" style={{ lineHeight: 0 }}>
                                        <Image
                                            src="/images/aobuta/art2.jpg"
                                            height={950}
                                            width={650}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="p-2">
                                    <div className="text-center" style={{ lineHeight: 0 }}>
                                        <Image
                                            src="/images/aobuta/art3.jpg"
                                            height={950}
                                            width={650}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="p-2">
                                    <div className="text-center" style={{ lineHeight: 0 }}>
                                        <Image
                                            src="/images/aobuta/art4.jpg"
                                            height={950}
                                            width={650}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                        <div className="px-4 py-12 md:p-16 relative" id="author">
                            <h2 className={`${styles.gatefold} text-5xl mb-20 lg:mb-6 text-center md:text-left md:pl-12`}>Tác giả</h2>
                            <div className={`${styles.agenda} ${styles.bubble3} pl-12 pr-14 py-10 w-full md:w-3/4 lg:w-1/2 mb-6 relative`}>
                                <div className="absolute left-1/2 lg:right-0 top-0 transform -translate-x-1/2 lg:translate-x-1/3 -translate-y-1/3">
                                    <Image
                                        src="/images/aobuta/author.webp"
                                        height={151}
                                        width={217}
                                    />
                                </div>
                                <p className="mt-6 mb-4">Sinh ngày 11 tháng 4 năm 1978.</p>
                                <p>Xuất thân từ tỉnh Kanagawa. Tác giả của những series ăn khách như "Sakurasou no pet na kanojo" hay là one-shot "Just Because". Và gần đây nhất là "Hội chứng tuổi thanh xuân".</p>
                            </div>
                            <div className={`${styles.agenda} ${styles.bubble4} pl-12 pr-14 py-10 w-full md:w-3/4 lg:w-1/2`}>
                                <div className="w-2/3 ml-auto mr-auto">
                                    <Image
                                        src="/images/aobuta/logo-bw.webp"
                                        height={183}
                                        width={930}
                                    />
                                </div>
                                <p>Câu chuyện về cậu thiếu niên mang tên Azusagawa Sakuta và "Hội chứng tuổi dậy thì" kì lạ. Bạn đang tìm kiếm một bộ truyện thể loại tình cảm học đường nhưng có pha trộn thêm yếu tố kỳ ảo? <strong>HỘI CHỨNG TUỔI THANH XUÂN</strong> sẽ đáp ứng tất cả những điều đó cho bạn.</p>
                            </div>
                            <div className="absolute right-16 bottom-16 hidden md:block">
                                <Image
                                    src="/images/aobuta/rio-chibi.webp"
                                    width={180}
                                    height={260}
                                />
                            </div>
                        </div>
                        <Splide options={{
                            rewind: true,
                            width: "100%",
                            height: "80vh",
                            type: 'fade',
                            lazyLoad: 'nearby',
                            autoplay: false,
                            interval: 5000,
                            arrows: true,
                            pagination: false,
                        }} id="characters">
                            <SplideSlide>
                                <div className={`absolute bottom-4 left-4 right-4 lg:right-auto lg:bottom-20 lg:left-20 lg:w-1/3 z-10 ${styles.bubble2} p-12`}>
                                    <h3 className={`${styles.agenda} text-2xl mb-4`}>Azusagawa Sakuta</h3>
                                    <p>Học sinh lớp 11 kì quặc khi thời buổi này còn không có điện thoại di động, đang học trường cấp 3 Minegahara. Cậu tình cờ gặp Mai trong trang phục thỏ tại thư viện và cả hai quen biết nhau từ đó.</p>
                                </div>
                                <Image
                                    src="/images/aobuta/sakuta.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="right"
                                    quality={95}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <div className={`absolute bottom-4 left-4 right-4 lg:right-auto lg:bottom-20 lg:left-20 lg:w-1/3 z-10 ${styles.bubble2} p-12`}>
                                    <h3 className={`${styles.agenda} text-2xl mb-4`}>Sakurajima Mai</h3>
                                    <p>Học sinh lớp 12 trường Minegahara. Một ngôi sao vô cùng nổi tiếng đã chuyển mình thành diễn viên sau một quãng thời gian dài hoạt động dưới danh nghĩa một tài năng nhí. Tuy nhiên cô đã ngừng hoạt động 2 năm trước và đang sống cuộc sống học sinh bình thường.</p>
                                </div>
                                <Image
                                    src="/images/aobuta/mai.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="right"
                                    quality={95}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <div className={`absolute bottom-4 left-4 right-4 lg:right-auto lg:bottom-20 lg:left-20 lg:w-1/3 z-10 ${styles.bubble2} p-12`}>
                                    <h3 className={`${styles.agenda} text-2xl mb-4`}>Makinohara Shouko</h3>
                                    <p>Mười hai tuổi, đang học lớp Bảy, là người đã gửi gắm chú mèo con nhặt được cho Sakuta. Thỉnh thoảng lại ghé nhà Sakuta để xem. Cô bé có khuôn mặt rất giống với mối tình đầu của Sakuta.</p>
                                </div>
                                <Image
                                    src="/images/aobuta/shouko.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="right"
                                    quality={95}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <div className={`absolute bottom-4 left-4 right-4 lg:right-auto lg:bottom-20 lg:left-20 lg:w-1/3 z-10 ${styles.bubble2} p-12`}>
                                    <h3 className={`${styles.agenda} text-2xl mb-4`}>Koga Tomoe</h3>
                                    <p>Một nữ sinh cấp 3 láu táu đã hiểu nhầm Sakuta là một kẻ biến thái khi cậu đang tìm mẹ giúp một cô bé đi lạc. Hóa ra cô là học sinh lớp 10, đàn em cùng trường với Sakuta.</p>
                                </div>
                                <Image
                                    src="/images/aobuta/tomoe.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="right"
                                    quality={95}
                                />
                            </SplideSlide>
                            <SplideSlide>
                                <div className={`absolute bottom-4 left-4 right-4 lg:right-auto lg:bottom-20 lg:left-20 lg:w-1/3 z-10 ${styles.bubble2} p-12`}>
                                    <h3 className={`${styles.agenda} text-2xl mb-4`}>Futaba Rio</h3>
                                    <p>Rio là bạn thân của Sakuta, cô cũng là thành viên duy nhất của câu lạc bộ khoa học. Cô thường giúp đỡ Sakuta bằng cách đưa ra cho cậu những lời khuyên hữu ích. Bình thường cô hay mặc áo trắng và được mệnh danh là "quái nhân".</p>
                                </div>
                                <Image
                                    src="/images/aobuta/rio.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="right"
                                    quality={95}
                                />
                            </SplideSlide>
                        </Splide>
                        <div className="py-12 md:p-16 relative" id="adaptations">
                            <h2 className={`${styles.gatefold} text-5xl text-center`}>Các phiên bản chuyển thể</h2>
                            <div className="hidden md:grid grid-cols-3 gap-8 mt-8">
                                <div>
                                    <div className={`${styles.cover} transition duration-300 ease-in-out shadow-lg hover:shadow-2xl transition`}>
                                        <Image
                                            src="/images/aobuta/movie.jpg"
                                            height={778}
                                            width={550}
                                        />
                                    </div>
                                    <div className={`${styles.bubble4} text-center p-2 mt-4 w-full text-xl`}>Phim điện ảnh</div>
                                </div>
                                <div>
                                    <div className={`${styles.cover} transition duration-300 ease-in-out shadow-lg hover:shadow-2xl transition`}>
                                        <Image
                                            src="/images/aobuta/anime.jpg"
                                            height={778}
                                            width={550}
                                        />
                                    </div>
                                    <div className={`${styles.bubble4} text-center p-2 mt-4 w-full text-xl`}>Anime dài tập</div>
                                </div>
                                <div>
                                    <div className={`${styles.cover} transition duration-300 ease-in-out shadow-lg hover:shadow-2xl transition`}>
                                        <Image
                                            src="/images/aobuta/manga.jpg"
                                            height={774}
                                            width={550}
                                        />
                                    </div>
                                    <div className={`${styles.bubble4} text-center p-2 mt-4 w-full text-xl`}>Manga</div>
                                </div>
                            </div>
                            <Splide options={{
                                rewind: true,
                                autoplay: false,
                                interval: 5000,
                                arrows: false,
                                pagination: false,
                            }} className="mt-8 block md:hidden">
                                <SplideSlide className="px-4">
                                    <div className="text-center">
                                        <Image
                                            src="/images/aobuta/movie.jpg"
                                            height={778}
                                            width={550}
                                        />
                                    </div>
                                    <div className={`${styles.bubble4} text-center p-2 mt-4 w-full text-xl`}>Anime dài tập</div>
                                </SplideSlide>
                                <SplideSlide className="px-4">
                                    <div className="text-center">
                                        <Image
                                            src="/images/aobuta/anime.jpg"
                                            height={778}
                                            width={550}
                                        />
                                    </div>
                                    <div className={`${styles.bubble4} text-center p-2 mt-4 w-full text-xl`}>Phim điện ảnh</div>
                                </SplideSlide>
                                <SplideSlide className="px-4">
                                    <div className="text-center">
                                        <Image
                                            src="/images/aobuta/manga.jpg"
                                            height={774}
                                            width={550}
                                        />
                                    </div>
                                    <div className={`${styles.bubble4} text-center p-2 mt-4 w-full text-xl`}>Manga</div>
                                </SplideSlide>
                            </Splide>
                        </div>
                        <div className="px-4 py-12 md:p-16 relative" id="order">
                            <div className="text-center">
                                <Image
                                    src="/images/aobuta/logo-blue.webp"
                                    width={495}
                                    height={81}
                                />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
                                <div>
                                    <div className={`${styles.cover} p-1 transition ease-in-out duration-150 filter hover:brightness-75`} style={{ backgroundColor: '#0b6bba' }}>
                                        <Image
                                            src="/images/aobuta/vol1.webp"
                                            layout="responsive"
                                            height={1166}
                                            width={800}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={`${styles.cover} p-1 transition ease-in-out duration-150 filter hover:brightness-75`} style={{ backgroundColor: '#7bcf91' }}>
                                        <Image
                                            src="/images/aobuta/vol2.webp"
                                            layout="responsive"
                                            height={1166}
                                            width={800}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={`${styles.cover} p-1 transition ease-in-out duration-150 filter hover:brightness-75`} style={{ backgroundColor: '#ed3e71' }}>
                                        <Image
                                            src="/images/aobuta/vol3.webp"
                                            layout="responsive"
                                            height={1166}
                                            width={800}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={`${styles.cover} p-1 transition ease-in-out duration-150 filter hover:brightness-75`} style={{ backgroundColor: '#01919c' }}>
                                        <Image
                                            src="/images/aobuta/vol4.webp"
                                            layout="responsive"
                                            height={1166}
                                            width={800}
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className={`${styles.gatefold} text-3xl text-center mt-8`}>Đặt mua ngay</h3>
                            <p className="text-center mt-4">Đã phát hành 3 tập trên toàn quốc, tập 4 dự kiến phát hành tháng 7/2021</p>
                            <div className="flex flex-col lg:flex-row gap-12 mt-8 justify-center items-center">
                                <div>
                                    <a className={`${styles.link} w-24`} href="http://bit.ly/Aobuta-KimDong" target="_blank">
                                        <Image
                                            src="/images/aobuta/kimdong.webp"
                                            layout="responsive"
                                            height={328}
                                            width={350}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a className={`${styles.link} w-48`} href="http://bit.ly/Aobuta-FAHASA" target="_blank">
                                        <Image
                                            src="/images/aobuta/fahasa.webp"
                                            layout="responsive"
                                            height={241}
                                            width={1340}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a className={`${styles.link} w-32`} href="http://bit.ly/Aobuta-Tiki" target="_blank">
                                        <Image
                                            src="/images/aobuta/tiki.webp"
                                            layout="responsive"
                                            height={158}
                                            width={337}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a className={`${styles.link} w-32`} href="http://bit.ly/Aobuta-Shopee" target="_blank">
                                        <Image
                                            src="/images/aobuta/shopee.webp"
                                            layout="responsive"
                                            height={366}
                                            width={1058}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="footer" className="bg-white p-12">
                        <h4>Wings Books - Thương hiệu sách trẻ của NXB Kim Đồng</h4>
                        <ul>
                            <li>Địa chỉ: 55 Quang Trung, Nguyễn Du, Hai Bà Trưng, Hà Nội.</li>
                            <li>SĐT: 024.39435109</li>
                            <li>Email: wingsbooks@nxbkimdong.com.vn</li>
                            <li>Website: nxbkimdong.com.vn</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    )
}
