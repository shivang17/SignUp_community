import React, {Component} from 'react';

export default class SignUpForm extends Component
{
render()
{

return (
		<div>
		<div className="container">	
				<form>
				<div className="col-md-12">
				<label><b>Name</b></label>
				<input type="text" placeholder="Enter name" required/>
				</div>
				<div className="col-md-12">
				<label><b>Email id</b></label>
				<input type="email" placeholder="Enter your email" required/>
				</div>
				<div className="col-md-12">
				<label><b>Your Venture</b></label>
					<select>
						<option default="Select Venture">Select Venture</option>
						<option value="Jaaga Study">Jaaga Study</option>
						<option value="Jaaga Startup">Jaaga Startup</option>
						<option value="Jaaga Sustain">Jaaga Sustain</option>
					</select>
					</div>
					<div className="col-md-12">
					<label><b>Skills<input type="text" placeholder="Enter your Skill set" required/></b></label></div>
				<div className="col-md-12"><label><b>Role<input type="text" placeholder="What is your role" required/></b></label></div>
				<label><b>Github</b></label>
				<input type="text" placeholder="Github URL" required />
				<label><b>Twitter</b></label>
				<input type="text" placeholder="Twitter URL" required />
				<label><b>LinkedIn</b></label>
				<input type="text" placeholder="LinkedIn URL" required />
				<button type="submit" value="Signup">Signup</button>
			</form>
			</div>
			</div>
		);

}


}