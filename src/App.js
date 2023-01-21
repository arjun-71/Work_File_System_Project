import './App.css';
import React,{ Component } from 'react';

class App extends Component
{
  
  state = {
    selectedFile : null,
    fileUploadedSuccessfully : false
  }

  onFileChange = event =>
  {
    this.setState({selectedFile : event.target.file[0]});
  }

  onFileUpload = () =>  {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    //call Application Programming Interface(REST API created)
    console.log(formData);
    this.setState({selectedFile: null});
    this.setState({fileUploadedSuccessfully: true});


}
fileData = () => {
  if(this.state.selectedFile){
    <div>
      <h2>File Details:</h2>
      <p>File name : {this.state.selectedFile.name}</p>
      <p>File type : {this.state.selectedFile.type}</p>
      <p> Last Modified : {" "}
      {this.state.selectedFile.lastModified.toDateString()}
       </p>


    </div>
  }
  else if(this.state.fileUploadedSuccessfully)
  {
    <div>
    <br />
    <h4> Your file has been uploaded successfully!!</h4>
    </div>
  }
  else
  {
    return(
      <div>
        <br />
        <h4> Choose a file and then press the upload button</h4>
      </div>
    )
  }
}

  render(){
 return(  
 <div>
  <h2>Capital Program Management Group File Upload and Management System</h2>
  <h3>File Upload with React and Serverless API (REST)</h3>
  <div>
  <input type = "file" onChange = {this.onFileChange} />
  <button onClick={this.onFileUpload}>
    Upload
  </button>
  </div>
</div>


 )

 }
}

export default App;
