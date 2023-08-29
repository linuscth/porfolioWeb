function LiveUrl(props) {
    if (props.props) {
        return (
            <a href={props.props} className="btn btn-primary  p-2">Live Url</a>

        )
    }
}
export default LiveUrl;