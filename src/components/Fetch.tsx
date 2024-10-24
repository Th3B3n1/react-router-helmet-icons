export async function Fetch(filePath: string)
{
    try
    {
        return await fetch(filePath)
            .then(response => response.json())
            .then(data => {return data});
    }
    catch (e)
    {
        throw new Error("Unable to fetch due to: " + e);
    }
}