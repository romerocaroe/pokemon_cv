import admin from 'firebase-admin'

export const fetchCommentService = async () => {
	try {
		let usersRef = await admin.database().ref('comments').once('value')
		let object = usersRef.val()
		let array = Object.keys(object).map(key => object[key])
		return array
	} catch (err){
		console.error("Error: " + err)
		return err
	}
}

export const createCommentService = async (username, description) => {
	try {
		if(!!username && !!description){
			let usersRef = await admin.database().ref('comments')
			let newMessageRef = usersRef.push();
			let id = newMessageRef.toString().substring(newMessageRef.toString().lastIndexOf('/') + 1)
			newMessageRef.set({
				'id': id,
				'description': description,
				'username': username
			});
			return id
		}
	} catch (err){
		console.error("Error: " + err)
		return err
	}
}

export const updateCommentService = async (id, username, description) => {
	try {
		let usersRef = await admin.database().ref('comments/'+id)
		usersRef.update({ username: username, description: description })
			.then(function() {
				console.log("Update succeeded.")
				return "Update succeeded."
			})
			.catch(function(error) {
				console.error("Update failed: " + error.message)
				return "Update failed: " + error.message
			});
	} catch (err){
		console.error("Error: " + err)
		return err
	}
}

export const deleteCommentService = async (id) => {
	try {
		let usersRef = await admin.database().ref('comments/'+id)
		usersRef.remove()
			.then(function() {
				console.log("Remove succeeded.")
				return "Remove succeeded."
			})
			.catch(function(error) {
				console.error("Remove failed: " + error.message)
				return "Remove failed: " + error.message
			});
	} catch (err){
		console.error("Error: " + err)
		return err
	}
}