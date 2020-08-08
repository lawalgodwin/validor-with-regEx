/**
@author Godwin Lawal

@function validator

@returns Boolean

@augments [fullName, email, username, dateOfBirth, website, streetAddress]

@description A function that validates user input using regular expressions pattern
             
@example 

             0 argument - user's fullName case insensitive not less than two letters
             1 argument - valid email address case insensitive
             2 argument - username (alphanumeric only)
             3 argument - date of birth in the format (dd-mm-yyyy)
             4 argument - website url (with or without https:// , http://and  www. prefix) subdomain also supported
             5 argument - street address in the format (No. 6, street, state, country.)


                return type: Boolean 

                true if all arguments are valid otherwise returns false

            for example:

            let validityStatus = validator("John Doe", "foo@gmail.com", "foousername", "16-04-1998", "http://google.com, "No. 27, Lagos Street, Benue, Nigeria"")

            console.log(validityStatus)

 
 */

function inputIsValid(fullName, emailAddress, username,  dateOfBirth, website, streetAddress) {

    let fullNamePattern = /^[a-zA-Z]{2,}\s?([a-zA-Z]{2,})?$/g

    let usernamePattern = /^[a-zA-Z0-9]+$/gi

    let emailPattern = /^(\w{2,})@(\w{2,})((\.[a-z]{2,3})|(\.[a-z]{2,}\.[a-z]{2,3}))$/gi

    let addressPattern = /^No\.\s\d+,(\s(\w+))+,\s\w+,\s\w+\.$/gi

    let urlPattern = /^(https|http)?:?(\/\/)?(www\.)?(\w+)\.[a-z]+(\/[a-zA-Z0-9_#]+(\.)?[a-z]+?)?\/?$/gi

    let datePattern = /^(3[0-1]|[^3-9]\d)-(0[1-9]|1[0-2])-\d{4}$/g

    return (fullNamePattern.test(fullName) && emailPattern.test(emailAddress) && usernamePattern.test(username)&& datePattern.test(dateOfBirth)&& urlPattern.test(website)&& addressPattern.test(streetAddress)) 

}


let isValid = inputIsValid("Lawal Godwin","godLawalinl200e@gy.webmail.com","myusername","09-10-2020", "www.google.com","No. 7, ogobia ugboju lga, Benue, Nigeria.")
console.log(isValid);