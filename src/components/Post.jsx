import { Flex, Button, Card, Field, Input, Textarea, Stack } from "@chakra-ui/react"

import { useState } from "react";
import styled from 'styled-components';

const Post = () => {

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [posts, setPosts] = useState([]);

    const handlePost = () => {
        if (!title && !contents) return;
        setPosts(prev => [{ title, contents }, ...prev]);
        setTitle('');
        setContents('');
    };

    const handleDelete = index => {
        setPosts(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <Flex minH="100vh" align="center" justify="center" flexDir="column" gap={6}>
            <Card.Root maxW="sm">
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root required>
                            <Input
                                placeholder="タイトル"
                                variant="subtle"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Field.Root>
                        <Field.Root required>
                            <Textarea
                                autoresize
                                placeholder="内容を入力"
                                variant="subtle"
                                value={contents}
                                onChange={(e) => setContents(e.target.value)}
                            />
                        </Field.Root>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="center">
                    <Button
                        onClick={handlePost}
                        colorPalette="green"
                        variant="surface">
                        投稿する
                    </Button>
                </Card.Footer>
            </Card.Root>

            {posts.map((item, idx) => (
                <StyledWrapper key={idx}>
                    <Title>{item.title}</Title>
                    <Contents>{item.contents}</Contents>
                    <DeleteButton onClick={() => handleDelete(idx)}>削除</DeleteButton>
                </StyledWrapper>
            ))}

        </Flex>
    );
};

const StyledWrapper = styled.div`
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
`;

const Title = styled.h5`
    text-align: left;
    margin: 0 0 0 20px;
`;

const Contents = styled.p`
    white-space: pre-wrap;
    text-align: left;
    margin: 0 0 0 20px;
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    color: red;
    margin: 0 0 0 320px;
`;
export default Post;