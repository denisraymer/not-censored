import React, {useEffect, useState} from "react";
import {Nav, Tab} from "react-bootstrap";

const About = () => {
    const [sidebarHeight, setSidebarHeight] = useState(null);

    // ClientHeight
    useEffect(() => {
        const bodyHeight = document.querySelector('#root').clientHeight;
        const navbarHeight = document.querySelector('.navbar').clientHeight;
        const footerHeight = document.querySelector('.footer').clientHeight;

        setSidebarHeight(bodyHeight - (navbarHeight + footerHeight))
    }, [sidebarHeight])

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="idea">
            <div className='sidebar'>
                <div className='sidebar-content'>
                    <Nav variant="pills" className="sidebar-navigation flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="idea" className='sidebar-navigation__item'>
                                Идея
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contact" className='sidebar-navigation__item'>
                                Контакты
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="font" className='sidebar-navigation__item'>
                                Хочу шрифт
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <div className="tab-content" style={{height: `${sidebarHeight}px`}}>
                <div className="about-content">
                    <Tab.Pane eventKey="idea">
                        <div className="about-content__idea">
                            <div className='about-content__text'>
                                ШРИФТ (NOT)CENSORED — ЭТО ПОПЫТКА ОТРЕФЛЕКСИРОВАТЬ ЗНАЧЕНИЕ ОБЦЕННОЙ ЛЕКСИКИ В НАШЕЙ
                                ПОВСЕДНЕВНОЙ ПИСЬМЕННОЙ РЕЧИ.
                            </div>
                            <div className='about-content__text'>
                                ШРИФТ (NOT)CENSORED ВИДИТ И ПРЕВРАЩАЕТ НЕЦЕНЗУРНЫЕ СЛОВА В ТЕКСТЕ В АКЦИДЕНЦИЮ. У ШРИФТА
                                ЕСТЬ
                                ДВА НАЧЕРТАНИЯ — OBSCENE И CENSORED. ПЕРВОЕ ДЕЛАЕТ МАТ ЗАМЕТНЫМ И ЗНАЧИМЫМ, СОХРАНЯЯ ЕГО
                                ЧИТАБЕЛЬНОСТЬ. ВТОРОЕ ЖЕ ПРЕВРАЩАЕТ “НЕКРАСИВЫЕ СЛОВА” В КРАСИВУЮ ГРАФИКУ, КОТОРУЮ
                                ПРИХОДИТСЯ
                                ДЕШИФРОВАТЬ, ЧТОБЫ ПОНЯТЬ СУТЬ. ШРИФТ ПОДДЕРЖИВАЕТ ВАРИАТИВНОСТЬ, ПОЭТОМУ НАЧЕРТАНИЯ МОГУТ
                                ПЛАВНО МЕНЯТЬСЯ ОТ ОДНОГО К ДРУГОМУ.
                            </div>
                            <div className='about-content__text'>ЗА ОСНОВУ КЛАССИФИКАЦИИ МАТНЫХ СЛОВ Я ВЗЯЛА БОЛЬШОЙ СЛОВАРЬ
                                МАТА ПЛУЦЕРА-САРНО, РАЗОБРАВШИСЬ
                                В ЭТИМОЛОГИИ НЕЦЕНЗУРНЫХ СЛОВ. ОНИ ДЕЛЯТСЯ НА ЧЕТЫРЕ БОЛЬШИЕ ГРУППЫ — ПРОИЗВОДНЫЕ ОТ ЧЕТЫРЕХ
                                КОРНЕЙ: ХУЙ, ПИЗДА, ЕБАТЬ, БЛЯДЬ. КСТАТИ, ИМЕННО ЭТИ КАТЕГОРИИ СЛОВ ЗАПРЕЩАЕТ РОСКОМНАДЗОР В
                                СРЕДСТВАХ МАССОВОЙ ИНФОРМАЦИИ.
                            </div>
                            <div className='about-content__text'>КАЖДАЯ ГРУППА СЛОВ ИМЕЕТ СВОЙ СМЫСЛОВОЙ (И ШРИФТОВОЙ)
                                ХАРАКТЕР.
                                УВИДЕТЬ ИХ МОЖНО В ТЕКСТОВОМ
                                НАБОРЕ, ГДЕ ВСТРЕЧАЕТСЯ МАТ — А ПОПРОБОВАТЬ ВО ВКЛАДКЕ “ВЫСКАЗАТЬСЯ”.
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="contact">
                        <div className="about-content__contacts">
                            <div className="about-content__text">
                                СВЕТА СЕРГЕЕВА <br/>
                                (СОЗДАТЕЛЬНИЦА И ДИЗАЙНЕР ШРИФТА)
                            </div>
                            <div className="about-content__text">@MINNIE_VINNIE</div>
                            <div className="about-content__text">
                                ФИДБЭК И КОЛЛАБОРАЦИИ: <br/>
                                SVETLANASERGEEVA0896@GMAIL.COM
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="font">
                        <div className="about-content__font-download">
                            <div className="about-content__text">
                                ДЛЯ ТОГО, ЧТОБЫ ПОЛУЧИТЬ СВОЮ КОПИЮ ШРИФТА (NOT)CENSORED XPRMNTL,
                                НАПИШИТЕ ЗАПРОС НА ПОЧТУ SVETLANASERGEEVA0896@GMAIL.COM
                            </div>
                            <div className="about-content__text">
                                В ЗАПРОСЕ УКАЖИТЕ СВОЙ РОД ДЕЯТЕЛЬНОСТИ И ЦЕЛЬ ИСПОЛЬЗОВАНИЯ ШРИФТА.
                                ОТКРЫТАЯ ЛИЦЕНЗИЯ ПОЗВОЛЯЕТ СВОБОДНО ПОЛЬЗОВАТЬСЯ ШРИФТОМ, НО ЕГО СОЗДАТЕЛЮ
                                ВАЖНО ИМЕТЬ В ВИДУ, НАСКОЛЬКО ОН ЗНАЧИМ. :)
                            </div>
                        </div>
                    </Tab.Pane>
                </div>
            </div>
        </Tab.Container>
    )
}

export default About
