const languageCodeMap = {
    cpp: 54,
    python: 92,
    javascript: 93,
    java: 91,
}

async function getSubmisson(tokenId, callback) {
    const url = 'https://judge0-ce.p.rapidapi.com/submissions/${tokenId}?base64_encoded=true&fields=*';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '93baae4442msh6cf03030a74ca97p11ff9cjsn365e42569383',
		'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
} catch (error) {
	callback({apiStatus: 'error', message: JSON.stringify(error)})
}
    
}

 export async function makeSubmmission({code, language, callback, stdin}){
    const url = 'https://judge0-ce.p.rapidapi.com/submissions/?base64_encoded=true&fields=*';
    const httpOptions= {
        method: 'POST',
	headers: {
		'x-rapidapi-key': '93baae4442msh6cf03030a74ca97p11ff9cjsn365e42569383',
		'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		language_id: languageCodeMap[language],
		source_code: btoa(code),
		stdin: btoa(stdin)
	})

    }
    

    try {
        callback({apiStatus: 'loading'})
        const response = await fetch(url, httpOptions);
        const result = await response.json();
        const tokenId = result.token;
        let statusCode = 1;
        let apiSubmissionResult;
        while(statusCode === 1 || statusCode === 2){
            try{
             apiSubmissionResult = await getSubmisson(tokenId);
            statusCode = apiSubmissionResult.status.id
            }
            catch(error){
                callback({apiStatus: 'error', message: JSON.stringify(error)})
                break
            }
        }

        if(apiSubmissionResult){
            callback({apiStatus: 'success', data: apiSubmissionResult})
        }

    } catch (error) {
        callback({
            apiStatus: 'error',
            message: JSON.stringify(error)
        })
    }
}









