export default {
    "label": "Auth: Login",
    "id": "auth-login",
    "parent": "auth",
    "summary": "The graphjs-auth family of tags enable adding login/signup functionality to any web site in just a single tag. This tag is responsible for registration/sign up. If the user does not have an account yet, they may follow the login link inside this tag, which would appear in a lightbox. If you need more customizability, and  add signup function programmatically, please refer to [showLogin](/docs/functions/showLogin), and [login](/docs/functions/login).",
    "specs": [{
        "type": "textwithcheckbox",
        "key": "title",
        "label": "Title"
    }],
    "otherAttributes" : {
        "usernamePlaceholder":"Enter your username",
        "passwordPlaceholder":"Enter your password",
        "submitButtonText":"Login",
        "registerLinkText": "Not registered?",
        "resetLinkText":"Forgot Password",
        "usernameLengthErrorText":"Username is too short!",
        "usernamePatternErrorText":"Username is invalid. Valid characters are letters, numbers, hyphens, and underscores.",
        "passwordErrorText":"Password must be %s characters minimum!"
    }
}