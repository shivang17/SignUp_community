import React, {Component} from 'react';

export default class SignUpForm extends Component
{
render()
{

return (
		<div>
		<img src={"jaaga_logo.png"} />
		<h1>Welcome to the Team of Innovators</h1>
		<label>
			<input type="file" id="user-profile-image" style={{display :'none'}}/>
			<span className="glyphicon glyphicon-camera"></span>
			 <h2 id="image-caption">Upload Image</h2>
			</label>
		{/*<input type="file" name="Image" accept="image/*" className="image-upload lyphicon glyphicon-camera"/>
		<input type="submit" className="image-submit"/>
		<h1>Welcome to Jaaga Startup</h1>*/}
		<div className ="container">
			<form>
			<table>
			<tbody>
			<tr>
			<td><label className="red-label"><b>Name: </b></label></td>
			<td><input type="text" placeholder="Enter your name" required /></td>
			</tr>
			<tr>
			<td><label className="red-label"><b>Email: </b></label></td>
			<td><input type="email" placeholder="Enter your email-id" required /></td>
			</tr>
			<tr>
			<td><label className="red-label"><b>Your Venture:</b></label></td>
			<td>
			<select>
			<option default="Select Venture">Select Venture</option>
			<option value="Jaaga Study">Jaaga Study</option>
			<option value="Jaaga Startup">Jaaga Startup</option>
			<option value="Jaaga Sustain">Jaaga Sustain</option>
			</select>
			</td>
			</tr>
			<tr>
			<td>
			<label className="red-label"><b>Skills:</b></label>
			</td>
			<td><input type="text" placeholder="Enter your Skill set" required/></td>
			</tr>
			<tr>
			<td><label className="red-label fa fa-github"><b>Github: </b></label></td>
			<td><input type="text" placeholder="Github URL" required /></td>
			</tr>
			<tr>
			<td><label className="red-label fa fa-twitter"><b>Twitter: </b></label></td>
			<td><input type="text" placeholder="Twitter URL" required /></td>
			</tr>
			<tr>
			<td><label className="red-label fa fa-linkedin"><b>LinkedIn:</b></label></td>
			<td><input type="text" placeholder="LinkedIn URL" required /></td>
			</tr>
			</tbody>
			</table>
			<button type="submit" value="Signup" className="btn btn-primary">Signup</button>
			</form>
			</div>
			
			</div>
		);

}


}