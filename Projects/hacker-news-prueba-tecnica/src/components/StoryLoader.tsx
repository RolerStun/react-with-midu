import ContentLoader from "react-content-loader"

export const StoryLoader = () => {
    return (
        <ContentLoader 
            speed={2}
            width={310}
            height={55}
            viewBox="0 0 310 55"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="12" cy="17" r="10" /> 
            <rect x="25" y="7" rx="5" ry="5" width="166" height="19" /> 
            <rect x="2" y="42" rx="5" ry="5" width="71" height="17" /> 
            <rect x="81" y="42" rx="5" ry="5" width="43" height="17" /> 
            <rect x="131" y="42" rx="5" ry="5" width="83" height="17" /> 
            <rect x="223" y="42" rx="5" ry="5" width="83" height="17" /> 
            <rect x="198" y="7" rx="5" ry="5" width="104" height="19" />
        </ContentLoader>
    )
}