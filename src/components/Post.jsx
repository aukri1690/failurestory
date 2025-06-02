import { Field, Input, Textarea, Button } from "@chakra-ui/react"
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
        <>
            <Field.Root required>
                <Input
                    placeholder="Enter title"
                    variant="subtle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Field.Root>

            <Textarea
                colorPalette='purple'
                size="xl"
                autoresize
                variant="subtle"
                placeholder="Enter your failure story"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
            />

            <Button
                onClick={handlePost}
                colorPalette={'purple'}
                variant="surface">
                Post
            </Button>

            {posts.map((item, idx) => (
            <StyledWrapper key={idx}>
                <Title>{item.title}</Title>
                <Contents>{item.contents}</Contents>
                <DeleteButton onClick={() => handleDelete(idx)}>削除</DeleteButton>
            </StyledWrapper>
        ))}
        </>
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