import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from 'react';
import { useUserActions } from '../hooks/useUserActions';

export function CreateNewUser() {
    const { addUser } = useUserActions()
    const [result, setResult] = useState<'ok' | 'ko' | null>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setResult(null)

        const form = event.target as HTMLFormElement
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if (!name || !email || !github ) {
            return setResult('ko')
        }

        addUser({name, email, github})
        setResult('ok')
        form.reset()
    }
  return (
    <Card style={{ marginTop: '16px' }}>
        <Title>Create New User</Title>

        <form onSubmit={handleSubmit} action="">
            <TextInput
                name='name'
                placeholder="Aquí el nombre"
            />
            <TextInput
                name='email'
                placeholder="Aquí el apellido"
            />
            <TextInput
                name='github'
                placeholder="Aquí el usuario de GitHub"
            /> 

            <div>
                <Button
                type="submit" 
                style={{ marginTop: '16px' }}
                >
                    Crear usuario
                </Button>
                <span>
                    { result === 'ok' && <Badge color="green">Guardado Correctamente</Badge>}
                    { result === 'ko' && <Badge color="red">Error con los campos</Badge>}
                </span>
            </div>   
        </form>
    </Card>
  )
}
