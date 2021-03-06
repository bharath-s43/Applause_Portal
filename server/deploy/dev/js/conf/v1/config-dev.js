module.exports = {
	app : {
		version : 1,
		env : 'dev',
		port : 6004 
	},
	database : {
		host : '10.128.0.8',
		user : 'root',
		password : 'applause123',
		database : 'applause'
	},
	// database : {
	// 	host : '127.0.0.1',
	// 	user : 'root',
	// 	password : 'applause123',
	// 	database : 'applause'
	// },
	log : {
		enabled : true,
		outputs : {
			console : {
				enabled : true
			},
			file : {
				enabled : true,
				fileName : 'ck-api-',
				dirName : './logs',
				fileMaxSize : 10 * 1024 * 1024,
				maxFiles : 10
			}
		}
	},
	const : {
		CMS_HEADER_NAME : "gvb",
		E_SIG_HEADER_NAME : "gvb",
        CLOUD_BUCKET : "applause-dev-img",
		projectId : "applause-dev",
		CLOUD_IMAGE_URL : "http://storage.googleapis.com/applause-dev-img/",
		SKIPPABLE_PATH_PARTS : 4
	},
	bypassAuth : {	// keys are as regex pattern 
		"/api/v1/guest[/]?$" : ["POST"], 
		"/api/v1/users[/]?$" : ["POST"], 
		"/api/v1/login[/]?$" : ["POST"],
		"/api/v1/users/activate/*": ["GET"],
		"/api/v1/users/setPassword[/]?$": ["POST"],
		"/api/v1/pin[/]": ["POST"],
		"/api/v1/pin/confirm[/]": ["POST"],
		"/api/v1/forgotPassword[/]": ["POST"]
	}
};
