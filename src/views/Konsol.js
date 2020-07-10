import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Konsol() {
    let { konsolId } = useParams();
    let { priceId } = useParams();
    let { stokId } = useParams();

    useEffect(() => {
        window.scrollTo(0, window.innerHeight, 'smoooth');
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h2>Barang yang dipilih adalah {konsolId} dengan harga {priceId}</h2>
                <h2>Stok {stokId}</h2>
            </header>
        </div>
    )
}