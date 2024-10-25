# React- Router, Helmet and Icons
### Keep in mind that you can only use these in a React component

## React Router
With React Router, you can load elements when a specific path is loaded. Examples include: redirecting a user, a user manually visiting the main page or a specific part of your site.
#### Creating a router requires the following codes in main.tsx (or the place which is the root of the project):
```
const router = createBrowserRouter([
    {
        path: -- example: /phones
        loader: -- preload data: this is required to use params
        element: -- React element to load when visiting this path
        errorElement: -- React element in case of an error happens in the main element
    }
    /* other paths */
]);
```
```
/* inside createRoot() */
<RouterProvider router={router} />
```
#### A simple example of a path object in the ```createBrowserRouter()``` function:
```
{
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
}
```
#### If you want to do the following:
```
{
    path: "/phones/:id", -- only listing a specific phone based on id
    element: <ListPhones />,
    errorElement: <ErrorPage />,
}
```
#### then you need the loader attribute:
```
{
    path: "/phones/:id",
    loader: ({params}) => { -- a basic arrow function is passed with a fetch
      return fetch("/phones.json") -- you have to return the data you loaded in order to use that data later
        .then(response => response.json())
        .then(data => {return data.phones[(params.id) ? params.id : 0]});
    },
    element: <ListPhones />,
    errorElement: <ErrorPage />,
}
```
#### The structure of the JSON I use (and example data in it):
```
{
    "phones": [
      {
        "id": 1,
        "brand": "Apple",
        "model": "iPhone 14",
        "price": 999,
        "features": {
          "storage": "128GB",
          "camera": "12MP",
          "battery": "3110mAh"
        }
      }
    ]
}
```
#### In the element you load, you can use the ```useLoaderData()``` function to get the data, the loader loaded in earlier:
```
/* Phone interface */

export function ListPhones()
{
    const phone = useLoaderData() as Phone;
    return (
        <div>
            <p>phone.brand</p>
            <p>phone.model</p>
            <p>phone.price</p>
            <p>phone.features.storage</p>
            <p>phone.features.camera</p>
            <p>phone.features.battery</p>
        </div>
    )
}
```

## React Helmet
You can use React Helmet to change the tags inside the Head tag basically anywhere.
#### Changing the title and a link in a component:
```
export function Index()
{
    return (
        <Helmet>
            <title>Index</title>
            <link rel="canonical" href="/" />
        </Helmet>
    )
}
```


## React Icons
Adding an icon to an element is easy.
#### Example code:
```
import { FaMobile } from 'react-icons/fa';

export function ExampleComponent()
{
    return <FaMobile />
}
```

