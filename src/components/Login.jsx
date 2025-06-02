import { Button, Card, Field, Input, Stack, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "@/components/ui/password-input";

const Login = () => {
    const navigate = useNavigate();
    const goToPost = () => {
        navigate("/post");
    };

    return (
        <Flex minH="100vh" align="center" justify="center">
            <Card.Root maxW="sm">
                <Card.Header>
                    <Card.Title textAlign="center">Sign up</Card.Title>
                    <Card.Description>
                        Fill in the form below to create an account
                    </Card.Description>
                </Card.Header>
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root required>
                            <Field.Label>
                                Username
                                <Field.RequiredIndicator />
                            </Field.Label>
                            <Input
                                placeholder="Enter your username"
                                variant="subtle"
                                css={{ "--focus-color": "purple" }}
                            />
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>
                                Email
                                <Field.RequiredIndicator />
                            </Field.Label>
                            <Input
                                placeholder="Enter your email"
                                variant="subtle"
                                css={{ "--focus-color": "purple" }}
                            />
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>
                                Password
                                <Field.RequiredIndicator />
                            </Field.Label>
                            <PasswordInput
                                placeholder="Enter your password"
                                variant="subtle"
                                css={{ "--focus-color": "purple" }}
                            />
                        </Field.Root>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="center">
                    <Button onClick={goToPost} colorPalette="purple" variant="surface">
                        Sign up
                    </Button>
                </Card.Footer>
            </Card.Root>
        </Flex>
    );
};

export default Login;
