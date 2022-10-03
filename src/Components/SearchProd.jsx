import React, { useState } from 'react'

export default function SearchProd() {
    return (
        <form class="form-inline mt-2 mx-auto" style={{display:'flex',width:'50%'}}>
            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-dark mx-3" type="submit">Search</button>
        </form>
    )
}
