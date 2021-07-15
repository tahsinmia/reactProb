import axios from 'axios';
import React from 'react';

class DataList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datas : []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/getreq`).then(res => {
            console.log(res);
            this.setState({datas : res.data})
        })
        .catch(err => {
            console.log(err);
        })
    }


    render() {
        const {datas} = this.state
        return(
            <>
                <div>
                    List of Data
                    {
                        datas.length ? datas.map(d => <div key={d._id}>{d.desc}{d.username}</div>) : null
                    }
                </div>
            </>
        )
    }
}

export default DataList;