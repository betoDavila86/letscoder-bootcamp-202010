module.exports = {
    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

        if (!password.trim().length) throw new Error('password is empty or blank')
    },

    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    },

    validateText(text) {
        if (typeof text !== 'string') throw new TypeError(text + ' is not a text')

        if (!text.trim().length) throw new Error('text is empty or blank')
    },

    validateFullname(fullname) {
        if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a fullname')

        if (!fullname.trim().length) throw new Error('fullname is empty or blank')
    },

    validateVisibility(visibility) {
        if (typeof visibility !== 'string') throw new TypeError(visibility + ' is not a valid visibility')

        if (!visibility.trim().length) throw new Error('visibility is empty or blank')

        //if (visibility !== ('public' || 'private')) throw new Error('visibility should be public or private')
    },

    validateTags(tags) {
        if ( !(tags instanceof Array) ) throw new TypeError(tags + ' is not an array')

        //if (!tags.trim().length) throw new Error('tags are empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not a id')

        if (!id.trim().length) throw new Error('id is empty or blank')

        if (id.length !== 31 ) throw new Error('id length is not 31 digits')
    }
}
