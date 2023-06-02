import ContentLoader from "react-content-loader"

export const CommentLoader = () => (
    <ContentLoader 
        speed={1}
        width={300}
        height={100}
        viewBox="0 0 300 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="221" y="12" rx="2" ry="2" width="69" height="10" /> 
        <rect x="3" y="37" rx="2" ry="2" width="290" height="48" /> 
        <rect x="3" y="5" rx="2" ry="2" width="195" height="17" />
    </ContentLoader>
)