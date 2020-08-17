const crypto = require('crypto');
// let getDataFromDBResponse = [
//     {
//       "_id": "5f3474ed92fe8c49688971fc",
//       "answers": [
//         "89898989026"
//       ],
//       "userName": "ivanSampleA",
//       "userLastName": "ivanSampleA",
//       "time": "2020-08-12T23:02:05.178Z",
//       "eventId": 1,
//       "examName": "ivanSampleA/DEMO_Sample_Set_3_Questions/5148f3bd-11d1-417f-a269-d940493d5cce/ivanSampleA_DEMO_Sample_Set_3_Questions_5148f3bd-11d1-417f-a269-d940493d5cce_score.json",
//       "examId": "ivanSampleA_DEMO_Sample_Set_3_Questions_5148f3bd-11d1-417f-a269-d940493d5cce",
//       "questionId": "0099999002",
//       "answersHash": "46bd871f97c48434078fea0d69c33f2ed0d6af337cbe9f12208b3a0380157305fcc1930d7192a94df519e9d35b596bcbd722bef20ff863cd05954ab8cdc3a37d",
//       "__v": 0
//     },
//     {
//       "_id": "5f3474fb92fe8c49688971fd",
//       "answers": [
//         "89898989014"
//       ],
//       "userName": "ivanSampleA",
//       "userLastName": "ivanSampleA",
//       "time": "2020-08-12T23:02:19.714Z",
//       "eventId": 1,
//       "examName": "ivanSampleA/DEMO_Sample_Set_3_Questions/5148f3bd-11d1-417f-a269-d940493d5cce/ivanSampleA_DEMO_Sample_Set_3_Questions_5148f3bd-11d1-417f-a269-d940493d5cce_score.json",
//       "examId": "ivanSampleA_DEMO_Sample_Set_3_Questions_5148f3bd-11d1-417f-a269-d940493d5cce",
//       "questionId": "0099999001",
//       "answersHash": "11690a74a69fcc7449daae87f6629500a1bf6cd975a922b6c957557e729eaab4ed336171d43a57db58ff5773feb00115539f898887448199d10de0df4714329b",
//       "__v": 0
//     },
//     {
//       "_id": "5f34750492fe8c49688971fe",
//       "answers": [
//         "89898989000",
//         "89898989003"
//       ],
//       "userName": "ivanSampleA",
//       "userLastName": "ivanSampleA",
//       "time": "2020-08-12T23:02:28.045Z",
//       "eventId": 1,
//       "examName": "ivanSampleA/DEMO_Sample_Set_3_Questions/5148f3bd-11d1-417f-a269-d940493d5cce/ivanSampleA_DEMO_Sample_Set_3_Questions_5148f3bd-11d1-417f-a269-d940493d5cce_score.json",
//       "examId": "ivanSampleA_DEMO_Sample_Set_3_Questions_5148f3bd-11d1-417f-a269-d940493d5cce",
//       "questionId": "0099999000",
//       "answersHash": "815bb8da16deafac4893945243623eecaeccd4ef87e1f5e91701c2463ecfc86221225c71c1aefb14b707c7efcf4c69c2ddcc8fe1372b51b81bc1db18ea8df1c2",
//       "__v": 0
//     }
//   ]

let examQuestions = [
      {
        "question_id": "0099999000",
        "question_text": "Is this a question with the ID [99999000]?",
        "answers": [
          {
            "answer_id": "89898989000",
            "answer_text": "This answer with id [89898989000] is correct. It is associated to question with ID [99999000]"
          },
          {
            "answer_id": "89898989001",
            "answer_text": "This answer with id [89898989001] is wrong. It is associated to question with ID [99999000]"
          },
          {
            "answer_id": "89898989002",
            "answer_text": "This answer with id [89898989002] is wrong. It is associated to question with ID [99999000]"
          },
          {
            "answer_id": "89898989003",
            "answer_text": "This answer with id [89898989003] is correct. It is associated to question with ID [99999000]"
          }
        ],
        "answersSelected": [
          "89898989000",
          "89898989003"
        ],
        "answersHash": "815bb8da16deafac4893945243623eecaeccd4ef87e1f5e91701c2463ecfc86221225c71c1aefb14b707c7efcf4c69c2ddcc8fe1372b51b81bc1db18ea8df1c2"
      },
      {
        "question_id": "0099999001",
        "question_text": "Is this a question with the ID [99999001]?",
        "answers": [
          {
            "answer_id": "89898989013",
            "answer_text": "This answer with id [89898989013] is correct. It is associated to question with ID [99999001]"
          },
          {
            "answer_id": "89898989014",
            "answer_text": "This answer with id [89898989014] is wrong. It is associated to question with ID [99999001]"
          },
          {
            "answer_id": "89898989015",
            "answer_text": "This answer with id [89898989015] is wrong. It is associated to question with ID [99999001]"
          }
        ],
        "answersSelected": [
          "89898989014"
        ],
        "answersHash": "11690a74a69fcc7449daae87f6629500a1bf6cd975a922b6c957557e729eaab4ed336171d43a57db58ff5773feb00115539f898887448199d10de0df4714329b"
      },
      {
        "question_id": "0099999002",
        "question_text": "Is this a question with the ID [99999002]?",
        "answers": [
          {
            "answer_id": "89898989025",
            "answer_text": "This answer with id [89898989025] is wrong. It is associated to question with ID [99999002]"
          },
          {
            "answer_id": "89898989026",
            "answer_text": "This answer with id [89898989026] is correct. It is associated to question with ID [99999002]"
          }
        ],
        "answersSelected": [],
        // "answersSelected": [
        //   "89898989026"
        // ],
        "answersHash": "46bd871f97c48434078fea0d69c33f2ed0d6af337cbe9f12208b3a0380157305fcc1930d7192a94df519e9d35b596bcbd722bef20ff863cd05954ab8cdc3a37d"
      }

    ]


let one = examQuestions.filter(oneExam => {
    return oneExam.answersSelected.length > 0
}).map((oneExam) => {
    
    let h = 'DORFDEPP'
    let clientAnswersNew = {}
    let sortAnswers = oneExam.answersSelected.sort()
        
    let answerString = sortAnswers.join("")+h;

    let cryptoHash = crypto.createHash('sha512').update(answerString).digest('hex');

    let stateOfAnswer = (cryptoHash===oneExam.answersHash) ? "true"  : "false"

     
    clientAnswersNew.stateOfAnswer = stateOfAnswer
    clientAnswersNew.question_text = oneExam.question_text
    return clientAnswersNew;

})
// let one = getDataFromDBResponse.map(clientAnswers => { 
//     let h = 'DORFDEPP'
//         let clientAnswersNew = {}
//         examQuestions.find(question => {

        
//               if (question.question_id === clientAnswers.questionId) {

//                     let sortAnswers = clientAnswers.answers.sort()
//                     console.log('sortAnswers', sortAnswers);
                    
//                     let answerString = sortAnswers.join("")+h;
//                     console.log('answerString', answerString);
//                     let cryptoHash = crypto.createHash('sha512').update(answerString).digest('hex');

//                     console.log('cryptoHash', cryptoHash);
                    
//                     let stateOfAnswer = (cryptoHash===clientAnswers.answersHash) ? "true"  : "false"
    
//                     clientAnswersNew.stateOfAnswer = stateOfAnswer
//                     clientAnswersNew.question_text = question.question_text
                     
//                     return clientAnswersNew
//               }
//         })
//         return clientAnswersNew
// })

/* const mappingData = async (getDataFromDBResponse, examQuestions, getHashFromBlobStorageResponse) => {
   
    // try {
    //     return await mappingData(getDataFromDBResponse, examQuestions, getHashFromBlobStorageResponse)
    // } catch (error) {
    //     return Promise.reject(error)
    // } 

    return Promise.all(
        getDataFromDBResponse.map(clientAnswers => { 

            let clientAnswersNew = {}
            examQuestions.find(question => {

                if (question.question_id === clientAnswers.questionId) {

                    let sortAnswers = clientAnswers.answers.sort()
                    let answerString = sortAnswers.join("")+getHashFromBlobStorageResponse;
                    let cryptoHash = crypto.createHash('sha512').update(answerString).digest('hex');
                    let stateOfAnswer = (cryptoHash===clientAnswers.answersHash) ? true  : false

                    clientAnswersNew.stateOfAnswer = stateOfAnswer
                    clientAnswersNew.question_text = question.question_text
                }
                
            })
            return clientAnswersNew
        })
    ).catch(error => {
        return Promise.reject(error)
    }) 
} */
console.log(one);
