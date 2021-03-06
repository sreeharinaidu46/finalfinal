import axios from "axios"

export const addOneBook = (book) => async dispatch => {
    dispatch({
        type: 'ADD_BOOK_REQUEST'
    })

    try {
        const response = await axios.post('/api/books/addBook', book);

        dispatch({
            type: 'ADD_BOOK_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_BOOK_FAILED',
            payload: error
        })
    }
}

export const getAllBook = () => async dispatch => {
    dispatch({
        type: 'GET_BOOKS_REQUEST'
    })
    try {
        const response = await axios.get('/api/books/allBook');

        dispatch({
            type: 'GET_BOOKS_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: 'GET_BOOKS_FAILED',
            payload: error
        })
    }
}

export const filterBook = (searchKey) => async dispatch => {
    dispatch({
        type: 'GET_BOOKS_REQUEST'
    })
    var filterItem;
    try {
        const response = await axios.get('/api/books/allBook');
        filterItem = response.data.filter(pizza => pizza.title.toLowerCase().includes(searchKey.toLowerCase()));

        dispatch({
            type: 'GET_BOOKS_SUCCESS',
            payload: filterItem
        })
    } catch (error) {
        dispatch({
            type: 'GET_BOOKS_FAILED',
            payload: error
        })
    }
}

export const getOneBook = (searchkey) => async dispatch => {

    console.log(searchkey)
    dispatch({
        type: 'GET_BOOK_REQUEST'
    })

    try {
        const book = await axios.post('/api/books/getBook', { searchkey });

        console.log(book.data);
        dispatch({
            type: 'GET_BOOK_SUCCESS',
            payload: book.data
        })
    } catch (error) {
        dispatch({
            type: 'GET_BOOK_FAILED',
            payload: error
        })
    }


}


export const modifyOneBokk = (book) => async dispatch => {
    dispatch({
        type: 'ADD_BOOK_REQUEST'
    })

    try {
        const response = await axios.post('/api/books/modifyOne', book);

        dispatch({
            type: 'ADD_BOOK_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_BOOK_FAILED',
            payload: error
        })
    }
}

export const modifyAllBooks = (book) => async dispatch => {
    dispatch({
        type: 'ADD_BOOK_REQUEST'
    })

    try {
        const response = await axios.post('/api/books/modifyAll', book);

        dispatch({
            type: 'ADD_BOOK_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_BOOK_FAILED',
            payload: error
        })
    }
}