import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My app works expected', async() => {
    const user = userEvent.setup()
    const app = render(<App/>)

    const textareaFrom = app.getByPlaceholderText('Introducir Texto')

    await user.type(textareaFrom, 'Hola mundo')
    const result = await app.findByDisplayValue(/Hello Word/i, {}, { timeout: 5000})

    expect(result).toBeTruthy()
}, 5000)

// al momento de usar las librerias que se visualizan en este TEST, tenemos que instalar ciertas librerias como: 