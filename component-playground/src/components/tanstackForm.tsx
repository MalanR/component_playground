
import { useForm } from '@tanstack/react-form'
import Box from '@mui/material/Box'
import {Stack} from '@mui/material'
import { Typography } from '@mui/material'
import { useRef, useReducer } from 'react'
import type { AnyFieldApi } from '@tanstack/react-form'

function FieldInfo({ field }: {field: AnyFieldApi}){
    return(
        <>
            {field.store.state.meta.isTouched && !field.store.state.meta.isValid ? (
                <em>{field.store.state.meta.errors.join(',')}</em>    
            ) : null
            }
        </>
    )
}


export default function MyForm(){
    const renderCount =useRef(0)
    renderCount.current += 1

    const [, forceRender] = useReducer((x) => x + 1, 0)

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName:''
        },
        onSubmit: ({ value }) => {
            console.log(value)
        },
    })

    const {firstName, lastName} = form.store.state.values

    return(
        <Box sx={{width: "20rem"}}>
            <h2>My Simple form</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid lightgray"}}>
                    <Stack direction={'column'} sx={{ width: "12rem"}}>
                    <form.Field 
                        name="firstName"
                        validators={{
                            onBlurAsync:async({ value }) => {
                                 if (!value){
                                    return "A First name is required"
                                }
                                if (value.length < 3){
                                    return"First name is too short"
                                }
                                    await new Promise((resolve) => setTimeout(resolve, 500))
                                    return(
                                    value.includes('error') && 'No "error" allowed in first name'
                                )
                            },
                        }}
                        listeners={{
                            onBlur: () => {
                                console.log("last name is now blurred")
                                forceRender()
                            }
                        }}
                        children={( field ) => {
                            return (
                                <>
                                    <label htmlFor={field.name}>First Name</label>
                                    <input
                                    value={field.store.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                    />
                                    <FieldInfo field={field} />
                                </>
                            )
                        }}
                        >
                    </form.Field>
                    <form.Field 
                        name="lastName"
                        validators = {{
                            onBlurAsync:async({ value }) => {
                                if (!value){
                                    return "A  Last name is required"
                                }
                                if (value.length < 3){
                                    return "last name must be at least 3 charachter"
                                }
                                await new Promise((resolve) => setTimeout(resolve, 500))
                                return(
                                    value.includes('error') && 'No "error" allowed in last name'
                                )
                            }
                        }}
                        listeners={{
                            onBlur: () => {
                                console.log("last name is now blurred")
                                forceRender()
                            }
                        }}children={( field ) => {
                            return (
                                <>
                                    <label htmlFor={field.name}>Last Name</label>
                                    <input
                                    value={field.store.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                    />
                                    <FieldInfo field={field} />
                                </>
                            )
                        }}
                        >
                    </form.Field>
                    <button type="submit">Submit</button>
                    </Stack>
                </Box>
                    <Box>
                        <Typography>
                            Hello: {firstName} {lastName}
                        </Typography>
                        <Typography>
                            Renders : {renderCount.current}
                        </Typography>
                    </Box>
            </form>
        </Box>
    )
}