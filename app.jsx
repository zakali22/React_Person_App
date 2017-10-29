

const PROFILES = [
  {
    name: "Zakeria Ali",
    interest: ['Reading', 'Coding', 'Documentaries'],
    ambitions: ['Lead Software Engineer', 'CEO of Start-up/Tech Company'],
    social1: {
      name: 'Facebook',
      friends: 3000
    },
    social2: {
      name: 'Twitter',
      friends: 21000
    },
    id: 1
  },
  {
    name: "Ahmed Ghunaim",
    interest: ['Reading', 'Movies'],
    ambitions: ['Lead Physicist for NASA'],
    social1: {
      name: 'Facebook',
      friends: 13000
    },
    social2: {
      name: 'Twitter',
      friends: 1000
    },
    id: 2
  }
];

const AddUsers = React.createClass({
  propTypes: {
    addUser: React.PropTypes.func.isRequired
  },
  
  onSubmit: function(e){
    e.preventDefault();
    this.props.addUser(this.state.name, this.state.interest, this.state.ambitions, this.state.social1, this.state.social2);
    this.setState({
        name: "",
        interest: "",
        ambitions: "",
        social1: "",
        social2: ""
    });
  },
  
  getInitialState: function(){
    return {
      name: "",
      interest: "",
      ambitions: "",
      social1: "",
      social2: ""
    }
  },
  
  onNameChange: function(event){

    this.setState({
      name: event.target.value,
    });
  },
  
  onInterestChange: function(event){

    this.setState({
      interest: event.target.value,
    });
  },  
  
  onAmbitionChange: function(event){

    this.setState({
      ambitions: event.target.value,
    });
  },
  
  onSocialOneChange: function(event){

    this.setState({
      social1: event.target.value,
    });
  },

  onSocialTwoChange: function(event){

    this.setState({
      social2: event.target.value,
    });
  },  
  
  
  render: function(){
    return (
      <div className="userForm">
        <form  onSubmit={this.onSubmit}>
          Full Name:<br/>
          <input type="text" name="firstname" value={this.state.name}  onChange={this.onNameChange} />
          <br/>
          Interests:<br/>
          <input type="text" name="lastname" value={this.state.interest} onChange={this.onInterestChange} />
          <br/>
          Ambitions:<br/>
          <input type="text" name="lastname" value={this.state.ambitions} onChange={this.onAmbitionChange} />
          <br/>
          Facebook Followers:<br/>
          <input type="text" name="lastname" value={this.state.social1} onChange={this.onSocialOneChange} />
          <br/>
          Twitter Followers:<br/>
          <input type="text" name="lastname" value={this.state.social2} onChange={this.onSocialTwoChange} />
          <br/>
          <input type="submit" value="Submit" />
        </form> 
      </div>
    );
  }
});

const Total = React.createClass({
  propTypes: {
    social1: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      friends: React.PropTypes.number.isRequired
    }), 
    social2: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      friends: React.PropTypes.number.isRequired
    })
  },
  
  render: function(){
    let totalFollowers = this.props.social1.friends + this.props.social2.friends;
    return ( 
       <div className="followers">
          <h3>Total amount of followers</h3>
          <p>{totalFollowers}</p>
      </div>
    )
  }
});

const Social = React.createClass({
  
  propTypes: {
    social1: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      friends: React.PropTypes.number.isRequired
    }), 
    social2: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      friends: React.PropTypes.number.isRequired
    }),
    increment: React.PropTypes.func.isRequired
  },
  render: function(){
     return (
      <div className="social">
         <h2>Friends on Social Media</h2>
         <ul>
           <li onClick={function() {this.props.increment("social1");}.bind(this)}>
             <h3>{this.props.social1.name}</h3>
             <p>{this.props.social1.friends}</p> 
          </li>
          <li onClick={function() {this.props.increment("social2");}.bind(this)}>
            <h3>{this.props.social2.name}</h3>
            <p>{this.props.social2.friends}</p> 
          </li>
        </ul>
        <Total social1={this.props.social1} social2={this.props.social2}/>
      </div> 
    ); 
  }
});


const Details = React.createClass({
  render: function(){
    let interestString = '';
    let ambitionString = '';
       return (
          <div className="details"> 
              <ul>
                {this.props.interest.map(function(item){
                   interestString += item + ', ';
                 })}
                {this.props.ambition.map(function(item){
                   ambitionString += item + ', ';
                 })}
                <li>Interest: <span>{interestString}</span></li>
                <li>Ambitions: <span>{ambitionString}</span></li>
              </ul>
           </div>
       ); 
  }
});


const Name = React.createClass({
  render: function(){
    return (
    <div className="name">
      <h1>{this.props.name}</h1>
    </div>
  );
  }
});



const Profile = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    interest: React.PropTypes.array.isRequired,
    ambitions: React.PropTypes.array.isRequired,
    social1:  React.PropTypes.shape({
      name:  React.PropTypes.string.isRequired,
      friends: React.PropTypes.number.isRequired
    }),
    social2:  React.PropTypes.shape({
      name:  React.PropTypes.string.isRequired,
      friends: React.PropTypes.number.isRequired
    }),
    addFollowers: React.PropTypes.func.isRequired
  },
  render: function(){
     return (
       <div className="profile">
          <Name name={this.props.name}/>
          <Details interest={this.props.interest} ambition={this.props.ambitions}/>
          <Social social1={this.props.social1} social2={this.props.social2} increment={this.props.addFollowers} />
      </div> 
    );
  }
});


// CONVERT TO A REACT COMPONENT CLASS

const Profiles = React.createClass({
  propTypes: {
   initialProfiles: React.PropTypes.arrayOf(React.PropTypes.shape({
     name: React.PropTypes.string.isRequired,
     interest: React.PropTypes.array.isRequired,
     ambitions: React.PropTypes.array.isRequired,
     social1: React.PropTypes.shape({
       name: React.PropTypes.string.isRequired,
       friends: React.PropTypes.number.isRequired
     }).isRequired,
     social2: React.PropTypes.shape({
       name: React.PropTypes.string.isRequired,
       friends: React.PropTypes.number.isRequired
     }).isRequired,
     id: React.PropTypes.number.isRequired
   })) 
  },
  
  addUser: function(name, interest, ambition, social1, social2){
    let interestArr = interest.split(',');
    let ambitionArr = ambition.split(',');
    console.log(interestArr);
    console.log(ambitionArr);
    this.state.profiles.push({
      name: name,
      interest: interestArr,
      ambitions: ambitionArr,
      social1: {
        name: "Facebook",
        friends: parseInt(social1)
      },
      social2: {
        name: "Twitter",
        friends: parseInt(social2)
      }
    });
    
    this.setState(this.state);
  },
  
  addFollowers: function(socialName, index){
    console.log(this.state.profiles[index - 1][socialName].friends , index);
    this.state.profiles[index - 1][socialName].friends++;
    this.setState(this.state);
  },
  
  getInitialState: function() {
    return {
        profiles: this.props.initialProfiles
    };
  },
  
  render: function(){
    return (
      <div className="profileBox">
       {this.state.profiles.map(function(profile){
        return ( <Profile 
                    name={profile.name} 
                    interest={profile.interest} 
                    ambitions={profile.ambitions} 
                    social1={profile.social1} 
                    social2={profile.social2} 
                    key={profile.id} 
                    addFollowers={function(socialName) {this.addFollowers(socialName, profile.id);}.bind(this)}
                /> 
              );
        }.bind(this))}
        <AddUsers addUser={function(name, interest, ambition, social1, social2){ this.addUser(name, interest, ambition, social1, social2); }.bind(this)}/>
      </div>
   );
  }
});




ReactDOM.render(<Profiles initialProfiles={PROFILES}/>, document.getElementById('container'));
                