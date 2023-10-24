"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
const dev = false;

export default function Footer() {
    return (
        <footer>
            <div className="base">
                <div className="container mx-auto">
                    <div className="flex flex-wrap flex-row justify-between">
                        <div className="flex-col left-4 m-12 basis-1/3">
                            <h4>Calendário 2018</h4>
                            <div className="barra"></div>
                            <p>
                                <a href="https://www.simmp.com.br/wp-content/uploads/2018/07/calendario_2017.pdf" target="_blank"> Clicando aqui você confere o calendário escolar do município </a>
                            </p>
                            <br />
                            <a href="https://www.simmp.com.br/calendario-2018/" className="btn waves-effect waves-orange">Anos Anteriores</a>
                        </div>

                        <div className="flex-col left-4 m-12">
                            <h4>Parceiros</h4>
                            <div className="barra"></div>
                            <p></p><ul>
                                <li><a href="http://www.cnte.org.br/">CNTE</a></li>
                                <li><a href="http://www.mec.gov.br/">MEC</a></li>
                                <li><a href="http://www.tvt.org.br/seu-jornal-cat/">TVT</a></li>
                            </ul>
                            <p></p>
                        </div>

                        <div className="flex-col left-4 m-12 basis-1/3">
                            <h4>Contato</h4>
                            <div className="barra"></div>
                            <p className="flex flex-col">Envie sugestões, dúvidas e críticas, para:
                                <a href="mailto:contato@simmp.com.br">contato@simmp.com.br</a>

                                (77) 3424-3698
                                <a href="http://www.facebook.com/simmpvc" target="_blank">facebook.com/simmpvc</a>
                                <a href="http://www.instagram.com/simmp.sind" target="_blank">instagram.com/simmp.sind</a>

                                <b>Endereço:</b>
                                Av. Presidente Vargas, 335 – Alto Maron
                                CEP 45045-010
                                Vitória da Conquista – BA</p>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className="items-center container flex flex-row w-full px-12 mx-auto mt-10 mb-5 justify-between">
                <div className="col l10" style={{flexBasis: "15%"}}>
                    <p>Copyright 2023 © - Todos os direitos reservados<br />
                        SIMMP - Sindicato do Magistério Municipal Público de Vitória da Conquista<br />
                        Vitória da Conquista - BA</p>
                </div>
                {!dev && <MapContainer center={[-14.85238, -40.83086]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-14.85238, -40.83086]}>
                    <Popup>
                        SIMMP
                    </Popup>
                </Marker>
            </MapContainer>}
                <div className="flex-col l2">
                    <img className="responsive-img w-40" src="logo completa branca layout alt.png" alt="SIMMP" title="SIMMP" />
                </div>
            </div>
            
        </footer>
    )
}