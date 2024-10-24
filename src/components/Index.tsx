import { Helmet } from "react-helmet";
import { FaAddressBook } from "react-icons/fa";

export function Index() {
    return (
        <>
            <Helmet>
                <title>Index</title>
                <link rel="canonical" href="/" />
            </Helmet>
            <h1>Index <FaAddressBook /></h1>
        </>
    )
}