type ButtonLinkProps = {
    label: string,
    href: string,
    className?: string
}

export default function ButtonLink({ label, href, className }: ButtonLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            className={className != null ? `button-link ${className}` : 'button-link'}
        >
            {label}
        </a>
    )
}
