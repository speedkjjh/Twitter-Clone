import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import NewTweet from '../components/newTweet';
import UserNavbar from '../components/UserNavbar';
import { Container, Form, Button } from 'react-bootstrap';

const NewTweet = () => {
    const router = useRouter();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, []);

    return (
        <Container>
            {user && <UserNavbar />}
            {user && <NewTweet />}
        </Container>
    );
};

export default NewTweet;
