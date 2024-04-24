<h1 align="center">
  <img title="Netflix" src="https://fhsknightlife.com/wp-content/uploads/2020/04/uVASXqvMzyUrAPfSn9pMtxOC7s89ulzdDKBdtqCP.png" alt="NETFLIX Logo" width="400" />
  <br>
  Netflix Clone Built Using React.JS & Firebase
</h1>

<p><font size="3">
  This is a clone of Netflix website built using <strong><em>React.JS</em></strong> as a Front-end & <strong><em>Firebase</em></strong> as Back-end. It's not a replica, and it     doesn't have all the features of Netflix website. it's a similar version of Netflix with my own design touch, showing my abilities in React.JS to build something advanced       like Netflix. It contains the home page, sign-in page, sign-up page, browse page, and movie player.
  <br><br> 
  # Project Walk-Through

 # Home Page

<div align="center"><a name="menu"></a>
![Screenshot 2024-04-25 002238](https://github.com/Manish12-verma/netflix-clone-frontEnd/assets/110876979/038e641d-f1b1-448d-ac8a-85115dc0b1a0)

# Technology Used

I have built this project using the following tools & techniques:
- React.JS
- React Router.
- React Forms.
- React Hooks.
- useState.
- useContext.
- useEffect.
- useHistory.
- useState.
- Compound Components.
- JSX.
- CSS Modules.
- Firebase.
- VSCode.
- StyleLint.
- EsLint.
- Github Actions.
- Github Pages.


# How To Use

To be able to use this react app locally in a development environment you will need the following:

1) You will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2) You will need an account on [Firebase](https://firebase.com) and you should create a project on your firebase account dedicated to this Netflix project.

3) You will need the "./seed.js" file (which I added in this repo) to seed your firebase backend with movies information. OR you can use your seed file with your information if you want.

4) Then From your terminal, you should do the following:

```cmd
# Clone this repository
git clone https://github.com/AhmedTohamy01/React-Netflix-Clone

# Go into the repository
cd react-netflix-clone

# Install dependencies
npm install 

```

5) Then you will need to create the ./src/lib/firebase.prod.js file in your local repo, The content of firebase.prod.js file will be like the following:

```js
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };

```

6) Then you should use your firebase project information to fill the config information in firebase.prod.js file.

```js
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

```

7) Then you should seed your firebase database with the information in the seed.js file. , follow the following instructions to do this:

```js
1) Un-comment the following line:
// import { seedDatabase } from '../seed'
// seedDatabase(firebase);

2) Save the firebase.prod.js.

3) Wait 2 minutes and check your firebase database , if you found the data there then re-comment the above 2 lines.
   If you didn't re-commet the above 2 lines after the seeding process, you will get dupliacted data in your 
   firebase database.
 
```

8) After seeding your firebase database with the movies information & reverting the Github Pages changes you can run the Netflix React App using the following command from your terminal:

```
# Run the app
npm start
```

9) Now you can see the project in your browser as you see in the live demo link. 
Happy Hacking!
