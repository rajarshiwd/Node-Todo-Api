
const {MongoClient,ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{

    if(err){
      return   console.log('Unable to connect to the database ');
    }

    db.collection('Todos').find({completion:true}).toArray().then((docs)=>{

        console.log(JSON.stringify(docs,undefined,2));

    },(err)=>{
        console.log('unable to fetch data',err);
    })

    //db.close();

})