import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory,
  } from 'react-router-dom';
import Konsol from './Konsol';

export default function Stuff() {
    const history = useHistory();
    let match = useRouteMatch();

    console.log(match);

    return (
        <div className="App">
            <header className="App-header">
                Stuff
            </header>

            <div className="App">
                <header className="App-header">
                    <ul>
                        <div style={{ cursor: 'pointer' }}onClick={() => history.push('/about')}>NAVIGATE</div>
                        <li><Link to={`${match.url}/PS 4, ${match.url}/IDR 4.500.000, ${match.url}/Tersedia`}>PS 4</Link></li>
                        <li><Link to={`${match.url}/Nintendo Switch, ${match.url}/IDR 5.999.000, ${match.url}/Tersedia`}>Nintendo Switch</Link></li>
                        <li><Link to={`${match.url}/Xbox One, ${match.url}/IDR 4.250.000, ${match.url}/Tidak tersedia`}>Xbox One</Link></li>
                    </ul>
                </header>

                <Switch>
                    <Route path={`${match.url}/:konsolId, ${match.url}/:priceId, ${match.url}/:stokId`}>
                        <Konsol/>
                    </Route>
                    <Route path={match.url}>
                        <h2>Silahkan dipilih Barang yang diinginkan</h2>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}