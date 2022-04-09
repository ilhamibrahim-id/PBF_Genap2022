import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    state = {
        count: 0
      };    
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
        const count = this.state.count;
        this.setState({ count: count + 1 });
    }
    

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title grey lighten-2">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content  light-blue lighten-5">
                            <p><b>Harga: Rp.{item.price}</b></p>
                            <p><b>Stock: Rp.{item.stock}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Produk kami</h3>
                <p className="center">Kamu Telah Memasukan Barang Sebanyak <h5><b>{this.state.count}</b></h5></p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 30 }}>
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)