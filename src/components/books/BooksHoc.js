import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { booksQuery } from './queries';

export default compose(graphql(booksQuery));