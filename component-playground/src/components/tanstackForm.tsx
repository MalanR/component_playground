
import { useForm } from '@tanstack/react-form'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { useRef } from 'react'


export default function MyForm(){
    const renderCount =useRef(0)
    renderCount.current += 1

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName:''
        },
        onSubmit: ({ value }) => {
            console.log(value)
        },
    })

    return(
        <Box>
            <h2>My Simple form</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <Box>
                    <form.Field 
                        name="firstName"
                        listeners={{
                            onBlur: () => {
                                console.log("first name is now blurred")
                            }
                        }}
                        >
                        {(field) => (
                            <input
                                placeholder="first name"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                onBlur={field.handleBlur}
                            />
                        )}
                    </form.Field>

                    <form.Field name=
                        "lastName"
                        listeners={{
                            onBlur: () => {
                                console.log("last name is now blurred")
                            }
                        }}
                        >
                        {(field) => (
                            <input
                                placeholder="Last name"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                onBlur={field.handleBlur}
                            />
                        )}
                    </form.Field>
                    <button type="submit">Submit</button>
                </Box>
                    <Box>
                        <Typography>
                            Hello: {form.state.values.firstName} {form.state.values.lastName}
                        </Typography>
                        <Typography>
                            Renders : {renderCount.current}
                        </Typography>
                    </Box>
            </form>
        </Box>
    )
}