import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import SearchInput from './search-input';
import {search} from '../src/actions/search';
import {required, nonEmpty} from './validators';
import './search-input.css';

export class SearchForm extends React.Component {

    onSubmit(values) {
      return this.props.dispatch(search(values.charName, values.realmName));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="search-form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return (
          <div className='search-container'>
            <form
                className="search-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {error}
                <Field
                    component={SearchInput}
                    type="text"
                    name="charName"
                    id="charName"
                    placeholder='Character Name'
                    validate={[required, nonEmpty]}
                />
                <Field
                    component={SearchInput}
                    type="text"
                    name="realmName"
                    id="realmName"
                    placeholder='Realm Name'
                    validate={[required, nonEmpty]}
                />
                <button className='search-button' disabled={this.props.pristine || this.props.submitting}>
                   Search 
                </button>
             </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'search',
    onSubmitFail: (errors, dispatch) => dispatch(focus('search', 'charName'))
})(SearchForm);