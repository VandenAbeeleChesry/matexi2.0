import * as React from "react"
import '../scss/styles.scss';

const Layout = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default Layout;