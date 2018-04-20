EU Cookie Compliance redirect 7.x - 1.x
==============================
We used this module to add two actions for the user to add in content to accept or deny the cookie popup from your separate node.

How it works.
=============

The module creates two new actions:

cookie/delete: results in denying the cookies, like the more info button of eu_cookie_compliance does.
cookie/accept: results in accepting the cookies, like the accept button of eu_cookie_compliance does.

The module also includes a JS file that will redirect the user two pages back in their history after clicking a accept/deny link.

How to use.
===============
On a node you can add an <a> tag with cookie/accept or cookie/delete as source.
