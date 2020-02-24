import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Desenvolvimento de Software" lang="pt" description="SPACE CODE"/>

        <div className={"page-header home"}>
            <h1>Tiramos sua ideia da cabeça</h1>
            <p>Nós acreditamos que nenhuma ideia e inutil. <br/> E a sua pode revolucionar o mundo! </p>
            {/* <img alt={"Dashboard"} src={featureImage}/> */}
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Mobile | Front End</h2>
                                <p>Desenvolvimento de aplicativos responsivo, clean e Intuitivo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Back-End</h2>
                                <p>Space code preza por: disponibilidade, segurança, confiabilidade e autenticidade.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Back-End</h2>
                                <p>Get rid of sending news by e-mail and its problems; post the news in an internal and attractive format via HiStaff instead.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>

    </Layout>
)

export default IndexPage
