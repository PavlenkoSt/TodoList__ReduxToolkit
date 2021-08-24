import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/todo'

const AddItemForm = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <h2 className='header'>Добавить ТУДУ</h2>
            <Formik
                initialValues={{ todo: '' }}
                validate={ values => {
                    const errors = {}
                    if (!values.todo) {
                        errors.todo = 'Required'
                    } 
                    return errors
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(false)
                    dispatch(addTodo({
                        id: Date.now(),
                        todo: values.todo,
                        completed: false
                    }))
                    resetForm()
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form className='form'>
                        <Field type="text" name="todo" className={`input ${errors.todo ? 'err' : ''}`} />
                        <ErrorMessage name="todo" component="div" className='error' />
                        <button className='btn' type="submit" disabled={isSubmitting}>
                            Добавить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddItemForm 