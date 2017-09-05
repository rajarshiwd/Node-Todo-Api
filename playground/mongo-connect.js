//reqular way 
// const mongoClient = require('mongodb').MongoClient;
//<-- Object Destructing ES6 syntax -->

const {MongoClient,ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{

    if(err){
      return   console.log('Unable to connect to the database ');
    }

    console.log('successfully connected to the database');

    // db.collection('Todos').insertOne({
    // text:'do something dude',
    // completed:false
    // },(err,result) => {

    //     if(err){
    //      return   console.log('something went wrong', err);
    //     }

    // console.log(JSON.stringify(result.ops,undefined,2));

    // });

    db.collection('mydetails').insertOne({
        name:'rajarshi',
        city:'mulkallanka'
    },(err,res)=>{
        if(err){
          return console.log(err);
        }
    console.log(JSON.stringify(res.ops,undefined,2));
    })

    db.close();

})