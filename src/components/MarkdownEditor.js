import React, { Component } from 'react';

class MarkdownEditor extends Component {
    constructor(props){
        super(props);
        this.state = {value : 'Hello, world!'};
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(e){
        this.setState({
            value : e.target.value
        });
    }
    getRawMarkup(){
        const md = new Remarkable();
        return {__html: md.render(this.state.value)};
    }
    render(){
        return (
            <div className = "MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor = "markdown-content">
                    Enter some markdown
                </label>
                <textarea
                    id = "markdown-content"
                    onchange = {this.handleChange}
                    defaultValue = {this.state.value}
                />
                <h3>Output</h3>
                <div 
                    className = "content"
                    dangerouslySetInnerHTML = {this.getRawMarkup()}
                />
            </div>
        );
    }
}

export default MarkdownEditor;