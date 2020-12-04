import React, { Component } from 'react';
import Baivietlienquan from './Baivietlienquan';
import Chitietbaiviet from './Chitietbaiviet';
import Tacgia from './Tacgia';
import dl from './dulieu.json';


class Tinchitiet extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        var dem =1;
        return (

            <div className="container">
                {/* Nội dung bài viết  */}
                {
                    dl.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id)) {
                            return (
                                <div className="row mt-4">
                                    {/* Chi tiết bài viết  */}
                                    <Chitietbaiviet anh={value.anh} tieuDe={value.tieuDe} noiDung={value.noiDung} />
                                    <Tacgia />
                                </div>)
                        }
                        return true
                    })
                }
                <div className="row">
                    <div className="col-9 mt-4 mb-1">
                        <h2>Bài viết liên quan</h2>
                    </div>
                    {
                        dl.map((value, key) => {
                            if (value.id !== parseInt(this.props.match.params.id)) {
                                if (dem <= 3) {
                                    dem++;
                                    return (
                                        <Baivietlienquan
                                            key={key}
                                            tinId={value.id}
                                            anh={value.anh}
                                            tieuDe={value.tieuDe}
                                            trichDan={value.trichDan}
                                        />)
                                }
                            }
                            return true
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Tinchitiet;