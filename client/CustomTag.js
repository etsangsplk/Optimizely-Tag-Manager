var React = require('react');

import AceEditor from 'react-ace';
var react = require('react-ace');
var Modal = require('react-modal');

var DisplayName = require('./DisplayName');
var CustomDescription = require('./CustomDescription');
var TriggerOptions = require('./TriggerOptions');
var ToggleButton = require('./ToggleButton');

// styles for modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '550px',
    width                 : '700px'
  }
};

var CustomTag = React.createClass({

  _reloadOptions: function() {

  },

  addCustomTag: function() {

  },

  onChange: function(e) {

  },

  // changes code editor code 
  changeSnippet: function(newSnippet) {
      this.setState({
        template: newSnippet
      });
  },

  changeDisplayName: function(newName) {
  	this.setState({
  		displayName: newName
  	})
  },

  changeCustomDescription: function(newDescription) {
  	this.setState({
  		tagDescription: newDescription
  	})
  },

  changeToggleButton: function(newToggle) {
  	this.setState({
  		active: newToggle
  	})
  },

  changeTrigger: function(newTrigger) {
  	this.setState({
  		trigger: newTrigger
  	})
  },

  changeOption: function(newOption) {
  	this.setState({
  		option: newOption
  	})
  },

  getInitialState: function() {
		return {
		  modalIsOpen: false,

		  name: 'custom',
		 	template: '',
		  displayName: '',
		  tagDescription: '',
		  trigger: 'Please Select a Trigger:',
		  option: 'Trigger Options:',
		  active: true,
		  errors: {},
		  customId: null,

		  projectDoneLoading: false
		};
  },

  componentWillReceiveProps: function(nextProps) {
		console.log("HIT WILL RECEIVE PROPS")
		this.setState({
			projectDoneLoading: true
		})
	},

  // opens modal
  openModal: function() {
    this.setState({
      modalIsOpen: true
    });
  },

  closeModal: function() {
    this.setState({
      modalIsOpen: false,
  	  name: 'custom',
  	  displayName: '',
  	  tagDescription: '',
 	  	template: '',
  	  trackingTrigger: 'inHeader',
      active: true,
  	  errors: {},
      customId: null
    });
  },

  render: function () {
  	console.log("modal state", this.state)

	  if (!this.state.projectDoneLoading) {
	  	return (
		  	<li className="anchor--right">
				<button className="button button--highlight" onClick={this.openModal}>Create Custom Tag</button>
			      {/*shows a modal to input custom code*/}
				  <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
		          <h2 ref="subtitle">Create Custom Tag</h2>
		          <div className='welcome'> Loading... </div> 
		          </Modal>
			  </li>
	  		)
	  }

		return (
		  <li className="anchor--right">
			<button className="button button--highlight" onClick={this.openModal}>Create Custom Tag</button>
		      {/*shows a modal to input custom code*/}
			  <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
	            <h2 ref="subtitle">Create Custom Tag</h2>
	            	<div className='modaltext'>
	            		<div> Please create your own tag by inserting Javascript.</div>
	  				    <div className="editor">
	  				        <AceEditor
	  				        	className={`editor`}
							    mode="javascript"
							    theme="tomorrow"
							    name="template"
							    height="120px"
							    width="620px"
							    editorProps={{$blockScrolling: true}}
	  				        	value={this.state.template}
	  				         	onChange={this.changeSnippet}
	  				        />
	  				    </div>
		            <DisplayName onChange={this.changeDisplayName} displayName={this.state.displayName}/>
		            <CustomDescription onChange={this.changeCustomDescription} tagDescription={this.state.tagDescription}/>
		            <TriggerOptions options={this.props.options} onTriggerChange={this.changeTrigger} onOptionChange={this.changeOption} currentTrigger={this.state.trigger} currentOption={this.state.option}/>
		            <ToggleButton onChange={this.changeToggleButton} active={this.state.active}/>
			  		</div>	
			  		<div className='flex pushed-right'>
			  			<button className="button right-margin" onClick={this.closeModal}> Cancel </button>
			            <button className="button button--highlight" onClick={this.addCustomTag}>Add Tag</button>
			  		</div>
	          </Modal>
		  </li>
		)
  } 

})

module.exports = CustomTag;
