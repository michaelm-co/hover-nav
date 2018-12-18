import React from 'react'
import Link from 'gatsby-link'
import PreCacheImg from 'react-precache-img';
import {
  withRouter
} from 'react-router-dom'


class Chip extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            hasOpened: false
        }

        this.handleOpen = this.handleOpen.bind(this);
    }

    componentDidMount(){
        const url = location.pathname
        if (url == this.props.link){
            this.setState({hasOpened:true})
        }else{
            this.setState({hasOpened:false})
        }
    }

    componentWillReceiveProps(){
        this.handleOpen()
    }

    handleOpen = (event) =>{
        const url = location.pathname
        if (url == this.props.link){
            this.setState({hasOpened:true})
        }else{
            this.setState({hasOpened:false})
        }
    }

    render (){
        return (
                <div className={this.state.hasOpened ? 'chipOpened' : 'chip'} style={{ backgroundImage : `url(${this.props.backgroundImage})`}} onMouseOver={() => { this.props.history.push(this.props.link); this.handleOpen();}}>

                <PreCacheImg
                  images={[
                      require('../assets/hero-2.jpg'),
                      require('../assets/hero-3.jpg'),
                      require('../assets/hero-4.jpg'),
                      require('../assets/hero-5.jpg')
                  ]}
                />

                </div>
        )
    }
}

export default withRouter(Chip)
