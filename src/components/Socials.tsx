import ButtonLink from "./ButtonLink";

export default function Socials() {
    return (
        <section className="socials">
            <h2>Find us on</h2>
            <ul className="socials__link-list" role="list" aria-label="Socials">
                <li>
                    <ButtonLink label="Discord" href="https://discord.gg/jeqbnZcnNM" />
                </li>
                <li>
                    <ButtonLink label="Itch.io" href="https://alienpigeon.itch.io/demeter-defenders" />
                </li>
                <li>
                    <ButtonLink label="Instagram" href="https://www.instagram.com/bullsquid_/" />
                </li>
            </ul>
        </section>
    )
}
