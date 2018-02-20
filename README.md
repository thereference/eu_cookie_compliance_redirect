# eu_cookie_compliance_redirect
We used this module to add two actions for the user to add in content to accept or deny the cookie popup from your separate node.

## The module creates two new actions:

* cookie/delete: results in denying the cookies, like the more info button of eu_cookie_compliance does.

* cookie/accept: results in accepting the cookies, like the accept button of eu_cookie_compliance does.

## Reason why these new actions had to be created:

* If you use a separate node to give the user information about your cookie policy you will probably have excluded this certain node from executing the eu_cookie_compliance.js which creates the popup.
* Because you are excluding this node for the eu_cookie_compliance.js, you cant call any of the eu_cookie_compliance JS functions on the same page.
* The new actions use php to set the value of the cookie-agreed. 
