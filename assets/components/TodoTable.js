import React, { Component, useContext, useState } from 'react'
import { TodoContext } from '../contexts/ToDoContext'
import { IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelIcon from '@mui/icons-material/Cancel';



export default function TodoTable() {
    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState('');
    const [editShown, setEditShown] = useState(false);
    const [editTodo, setEditTodo] = useState('');

    return (
        <form onSubmit={(event) => { context.createTodo(event, { name: addTodo }) }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Task Name</TableCell>
                            <TableCell align='right'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField fullWidth={true} onChange={(event) => { setAddTodo(event.target.value) }}></TextField>
                            </TableCell>
                            <TableCell>
                                <IconButton type="submit">
                                    <AddIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        {context.todos.slice().reverse().map((task, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {editShown === task.id ?
                                        <TextField
                                            value={editTodo}
                                            onChange={(event)=>{setEditTodo(event.target.value)}}
                                            fullWidth={true}
                                            slotProps={{
                                                input: {
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={(event)=>{context.updateTodo(event,{id:task.id, name:editTodo});setEditShown(false)}}>
                                                                <DoneOutlineIcon />
                                                            </IconButton>
                                                            <IconButton onClick={()=>{setEditShown(false)}}>
                                                                <CancelIcon />
                                                            </IconButton>
                                                            
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                        />
                                        :
                                        task.name
                                    }

                                </TableCell>
                                <TableCell align='right'>
                                    <IconButton aria-label="edit" onClick={(event) => {setEditShown(task.id); setEditTodo(task.name)}}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </form>
    )
}
