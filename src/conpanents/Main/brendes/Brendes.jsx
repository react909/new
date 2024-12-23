import React from 'react'
import { useState, useEffect } from 'react';








function Brendes() {


    const slides1 = [
        {
            image: 'https://avatars.mds.yandex.net/i?id=54ef211927725d5df917a03e6da32a9e_l-10814954-images-thumbs&n=13',
            title: 'Слайд 1',
            description: 'Описание слайда 1',
            price: '$10',
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=5420d2eb47c15bd6ffa2c55a417952b8_l-9041934-images-thumbs&ref=rim&n=13&w=800&h=800',
            title: 'Слайд 2',
            description: 'Описание слайда 2',
            price: '$20',
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=5655a1ba40a489ee028d98011c455819_l-5235619-images-thumbs&ref=rim&n=13&w=1100&h=1100',
            title: 'Слайд 3',
            description: 'Описание слайда 3',
            price: '$30',
        },
    ];



    const slides2 = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QFJoIDeLINt0fc3XID8bws8Js3SSG_r31A&s',
            title: 'Слайд 1',
            description: 'Описание слайда 1',
            price: '$10',
        },
        {
            image: 'https://assets.gq.ru/photos/60ffe85aead031c4e5b11a9a/master/w_1600%2Cc_limit/8%25D0%25BF%25D0%25B8%25D0%25B4%25D0%25B6%25D0%25B0%25D0%25BA.jpg',
            title: 'Слайд 2',
            description: 'Описание слайда 2',
            price: '$20',
        },
        {
            image: 'https://st-cdn.tsum.com/sig/44d922126440ba7a296a54f5389ab78f/width/434/i/ce/09/c7/4d/2defbdce-8854-48c5-9a02-385f5f8fa05d.jpg',
            title: 'Слайд 3',
            description: 'Описание слайда 3',
            price: '$30',
        },
    ];



    const slides3 = [
        {
            image: 'https://st-cdn.tsum.com/sig/c4dde2cd5cff75b198fc2b5c9fa78473/width/434/i/19/90/b3/0d/d81b24b4-2182-4c5f-b1f6-0e1d6a52f04f.jpg',
            title: 'Слайд 1',
            description: 'Описание слайда 1',
            price: '$10',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAkNZGXQ9aaI4EAC66ypRyAacSRSUMjN8rqG7u_KI7i6zin8MHhjFfCIjOlNxMghTgJE&usqp=CAU',
            title: 'Слайд 2',
            description: 'Описание слайда 2',
            price: '$20',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdh11ofdo94v80Wqph4ZPbwbR8ilMpsEaKQ&s',
            title: 'Слайд 3',
            description: 'Описание слайда 3',
            price: '$30',
        },
    ];




    const slides4 = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aunhwyJhJ0tzpQIHG6-ENu6tKk8WaiyAFw&s',
            title: 'Слайд 1',
            description: 'Описание слайда 1',
            price: '$10',
        },
        {
            image: 'https://ir.ozone.ru/s3/multimedia-3/c400/6800474559.jpg',
            title: 'Слайд 2',
            description: 'Описание слайда 2',
            price: '$20',
        },
        {
            image: 'https://log-cabin.ru/wp-content/uploads/2019/09/73e5f63f2e98bea74e0e6697890f.jpg',
            title: 'Слайд 3',
            description: 'Описание слайда 3',
            price: '$30',
        },
    ];



    const slides5 = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6zD0o-VUYRDJFcnSpUR4nUNrXYfHXR42tQ&s',
            title: 'Слайд 1',
            description: 'Описание слайда 1',
            price: '$10',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6QqomRsgu9N8NalgQdElzevVqNyEhikV-GQadc3Epz4tyBUF6fbgUyfdBoTVhVMFlFs&usqp=CAU',
            title: 'Слайд 2',
            description: 'Описание слайда 2',
            price: '$20',
        },
        {
            image: 'https://img.lovepik.com/png/20231107/suit-men-clothes-mens-clothing-suit-tie-suit-mockup_522025_wh860.png',
            title: 'Слайд 3',
            description: 'Описание слайда 3',
            price: '$30',
        },
    ];


    const slides6 = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvr1MZnUA57jMaDovtJCxrp4Txd02YVrtY8w&s',
            title: 'Слайд 1',
            description: 'Описание слайда 1',
            price: '$10',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl5VKCwp2q2vW4iARl7ePnGy6GpaPz-DU5eTMjwswc4XEE_z5VKlnkxJKGjUsqyNUOvY&usqp=CAU',
            title: 'Костюмы 2',
            description: 'Описание слайда 2',
            price: '$20',
        },
        {
            image: 'https://storage.yandexcloud.net/elyts-prod/iblock/9c9/9c9beceedf878105500fba2ead3c6342/pidzhak_strellson_siniy.jpg',
            title: 'Слайд 3',
            description: 'Описание слайда 3',
            price: '$30',
        },
    ];






    const [curentSlide1, setCurentSlide1] = useState(0);
    const [curentSlide2, setCurentSlide2] = useState(0);
    const [curentSlide3, setCurentSlide3] = useState(0);
    const [curentSlide4, setCurentSlide4] = useState(0);
    const [curentSlide5, setCurentSlide5] = useState(0);
    const [curentSlide6, setCurentSlide6] = useState(0);
    


    const handlePrevi = (setCurentSlide, slidesLength) => {
        setCurentSlide((prev) => (prev === 0 ? slidesLength - 1 : prev - 1));
    };
    
    const handleNexti = (setCurentSlide, slidesLength) => {
        setCurentSlide((prev) => (prev === slidesLength - 1 ? 0 : prev + 1));
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNexti(setCurentSlide1, slides1.length);  
        }, 2500);
    
        return () => clearInterval(interval);
    }, [curentSlide1]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNexti(setCurentSlide2, slides2.length);  
        }, 2000);
    
        return () => clearInterval(interval);
    }, [curentSlide2]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNexti(setCurentSlide3, slides3.length);  
        }, 2200);
    
        return () => clearInterval(interval);
    }, [curentSlide3]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNexti(setCurentSlide4, slides4.length);  
        }, 2300);
    
        return () => clearInterval(interval);
    }, [curentSlide4]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNexti(setCurentSlide5, slides5.length); 
        }, 2100);
    
        return () => clearInterval(interval);
    }, [curentSlide5]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNexti(setCurentSlide6, slides6.length);  
        }, 1900);
    
        return () => clearInterval(interval);
    }, [curentSlide6]);
    



    return (



        <section className='brendes'>
            <div className="container">
                <div className="brendes__block">
                    <h1 className='brendes__block-text'>Специально для вас</h1>
                    <div className="brendes__block-vip">
                       
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides1[curentSlide1].title}</h2>
                                <img src={slides1[curentSlide1].image} alt={slides1[curentSlide1].title} />
                                <p>{slides1[curentSlide1].description}</p>
                                <p>Цена: {slides1[curentSlide1].price}</p>
                                <button className="kupt">Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={() => handlePrevi(setCurentSlide1, slides1.length)}>⬅</button>
                                <button onClick={() => handleNexti(setCurentSlide1, slides1.length)}>➡</button>
                            </div>
                        </div>
 
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides2[curentSlide2].title}</h2>
                                <img src={slides2[curentSlide2].image} alt={slides2[curentSlide2].title} />
                                <p>{slides2[curentSlide2].description}</p>
                                <p>Цена: {slides2[curentSlide2].price}</p>
                                <button className="kupt">Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={() => handlePrevi(setCurentSlide2, slides2.length)}>⬅</button>
                                <button onClick={() => handleNexti(setCurentSlide2, slides2.length)}>➡</button>
                            </div>
                        </div>
 
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides3[curentSlide3].title}</h2>
                                <img src={slides3[curentSlide3].image} alt={slides3[curentSlide3].title} />
                                <p>{slides3[curentSlide3].description}</p>
                                <p>Цена: {slides3[curentSlide3].price}</p>
                                <button className="kupt">Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={() => handlePrevi(setCurentSlide3, slides3.length)}>⬅</button>
                                <button onClick={() => handleNexti(setCurentSlide3, slides3.length)}>➡</button>
                            </div>
                        </div>

            
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides4[curentSlide4].title}</h2>
                                <img src={slides4[curentSlide4].image} alt={slides4[curentSlide4].title} />
                                <p>{slides4[curentSlide4].description}</p>
                                <p>Цена: {slides4[curentSlide4].price}</p>
                                <button className="kupt">Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={() => handlePrevi(setCurentSlide4, slides4.length)}>⬅</button>
                                <button onClick={() => handleNexti(setCurentSlide4, slides4.length)}>➡</button>
                            </div>
                        </div>

                
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides5[curentSlide5].title}</h2>
                                <img src={slides5[curentSlide5].image} alt={slides5[curentSlide5].title} />
                                <p>{slides5[curentSlide5].description}</p>
                                <p>Цена: {slides5[curentSlide5].price}</p>
                                <button className="kupt">Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={() => handlePrevi(setCurentSlide5, slides5.length)}>⬅</button>
                                <button onClick={() => handleNexti(setCurentSlide5, slides5.length)}>➡</button>
                            </div>
                        </div>

               
                        <div className="brendes__block-sliden">
                            <div className="slisti" style={{ transition: 'transform 0.5s ease-in-out' }}>
                                <h2>{slides6[curentSlide6].title}</h2>
                                <img src={slides6[curentSlide6].image} alt={slides6[curentSlide6].title} />
                                <p>{slides6[curentSlide6].description}</p>
                                <p>Цена: {slides6[curentSlide6].price}</p>
                                <button className="kupt">Купить</button>
                            </div>
                            <div className="control">
                                <button onClick={() => handlePrevi(setCurentSlide6, slides6.length)}>⬅</button>
                                <button onClick={() => handleNexti(setCurentSlide6, slides6.length)}>➡</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Brendes
