import bullsquidPic from '@/assets/bullsquid-pic.jpg';
import notwendyPic from '@/assets/notwendy-pic.jpg';
import Image from 'next/image';

export default function TeamSection() {
    return (
        <section className="team">
            <h2>Team</h2>
            <ul className="team__members-list" role="list" aria-label="Team members">
                <li>
                    <article className="member-card">
                        <Image src={bullsquidPic} alt="Bullsquid profile picture" className="member-card__image" />
                        <div className="member-card__content">
                            <span className="member-card__name">bullsquid</span>
                            <p className="member-card__bio">
                                Main developer
                            </p>
                            <p className="member-card__bio">
                                Responsible for the game's programming, art, music, and sound design
                            </p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="member-card">
                        <Image src={notwendyPic} alt="NotWendy profile picture" className="member-card__image" />
                        <div className="member-card__content">
                            <span className="member-card__name">NotWendy</span>
                            <p className="member-card__bio">
                                Secondary Developer/Tester
                            </p>
                            <p className="member-card__bio">
                                Giving programming advice (promptly ignored), helping with some of the visual assets and design choices.
                            </p>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    )
}
