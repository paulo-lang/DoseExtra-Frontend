import React, {Component} from "react"
import axios from "axios"

class PhotoPicker extends Component {
    state = {
        instaData: []
    }

    async componentDidMount() {
        let data = []
        const url = "https://www.instagram.com/doseextra.banda/?hl=en"
        const instaSource = await axios.get(url)

        const instaObj = instaSource.data
            .match(
                /<script type="text\/javascript">windows\._sharedData = (.*)<\/script>/
            )[1]
            .slice(0, -1)

        const convertedJsonObj = JSON.parse(instaObj)
        const mediaArr = 
                convertedJsonObj.entry_data.ProfilePage[0].graphql.user
                    .edge_owner_to_timeline_media.edges

        mediaArr.map(el => {
            const node = el.node
            data.push(node)
        })
        this.setState({ instaData: data })
    }

    renderInstaPics = () => {
        return this.state.instaData.map((media, index) => {
            return(
                <div style={{ display: "inline" }} key={index}>
                    <img
                        src={media.thumbnail_src}
                        alt="insta"
                        style={{ width: "200px" }}
                    />
                </div>
            )
        })
    }
    render() {
        return <div>{this.state.instaData ? this.renderInstaPics() : ""}</div>
    }

}

export default PhotoPicker