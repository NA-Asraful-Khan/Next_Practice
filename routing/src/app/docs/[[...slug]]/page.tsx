type DocsDetailsParams = {
    params: {
      slug:string[]
    };
  };
const Docs:React.FC<DocsDetailsParams> = ({params}) => {
    if(params.slug?.length === 2){
        return(
            <h1>
                Viewing Dosc For Feature {params.slug[0]} and Concept {params.slug[1]}
            </h1>
        )
    }else if(params.slug?.length ===1){
        return <h1>Viewing Docs for Featuree {params.slug[0]}</h1>
    }

    return <h1>Docs Home Page</h1>
}

export default Docs