import Image from 'next/image';
import demeterDefendersImg from '@/assets/demeter-defenders-preview.jpeg';
import ButtonLink from './ButtonLink';

export default function GamesSection() {
    return (
        <section className='games'>
            <h2 className="games__heading">Games</h2>

            <div className="games__container">
                <Image src={demeterDefendersImg} alt='Game image' className='games__image'/>
                <div className="games__text-content">
                    <h3 className='games__title'>Demeter Defenders</h3>
                    <p className='games__description'>
                        Demeter Defenders is a horizontal scrolling shooter heavily inspired by Platypus.
                        Fly through the icy planes, destroy as much of the enemy fleet as you can, and don't get shot down in the process!
                        The game is currently in development and only the first level is available.
                    </p>
                    <ButtonLink href='https://alienpigeon.itch.io/demeter-defenders' label='Demo' />
                </div>
            </div>

            <div className="games__video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/CpQtDnlsIEE?si=x09h9-2XLLaT4MfY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}
