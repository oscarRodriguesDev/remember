interface pagedatailsProps {
    params: {
        id: string;
    }
}

interface DataProps {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
    }
}

async function delayFetch(url: string, delay: number) {
    await new Promise(resolve => setTimeout(resolve, delay))
    //const response = await fetch(url,{cache:'no-store'});  //aqui definimos para que o cache não vai revalidar
    const response = await fetch(url,{next:{revalidate:60}});// assim definimos o tempo para o cache revalidar
    return response.json();
}

async function getData() {
    const data = await delayFetch("https://api.github.com/users/oscarRodriguesDev/repos", 1)
    return data;
}

export default async function UserPage({ params }: pagedatailsProps) {

    const data: DataProps[] = await getData();
    const id = params.id
    return (
        <div>
            <h1>User Page</h1>
            <h3>detalhes do repositorio</h3>
            {/* vamos carregar os detalhse do repositorio aqui */}

            {data.map((item) => (
                <div key={item.id}>
                {id==item.id &&(
                    <div>
                        <h1>{item.id}</h1>
                        <p>{item.name}</p>
                    </div>
                )}
                </div>
            ))}
        </div>
    )
}