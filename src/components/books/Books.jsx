import React from 'react';
import map from 'lodash/map';
import withHocs from './BooksHoc';

class Books extends React.Component { 

  moveToDetails = () => {
    window.location.assign('http://localhost:3000/details');
  }
  
  render() {  
    
    const { data = {} } = this.props;
    const { books = [] } = data;    
    
    return ( 
      <section className="books">
        {map(books, (element) => (        
          <div className="books__item" key={element.id} onClick={this.moveToDetails}>
            <div className="books__item-cover">
              <img src={ element.cover } alt="cover" />
            </div>
            <div className="books__item-content">
              <div className="books__item-title">
                { element.title } 
              </div>
              <div className="books__item-text">
                { element.discription }
              </div>
            </div>          
          </div>
        ))}          
      </section>
    );
  }
};

export default withHocs(Books);