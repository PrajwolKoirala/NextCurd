import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Button } from '../ui/button';

interface BackButtonProps {
    href: string;
    label: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, label }) => {
    return (
        <div>
            <Button
                variant="link"
                className='font-normal w-full'
                asChild
            >
                <div> {/* Wrap Link with a container element */}
                    <Link href={href}> 
                        {label}
                    </Link>
                </div>
            </Button>
        </div>
    );
};

export default BackButton;
