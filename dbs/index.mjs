import mongodb from 'mongodb'

export const port = 27017
export const dbName = 'server_template'
export const url = `mongodb://localhost:${port}/${dbName}`;

const MongoClient = mongodb.MongoClient;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    const dbs = db.db(dbName)
    dbs.collection('cate')
    dbs.createCollection('cate', (err, res) => {
        if (err) throw err;
        console.log('创建集合')

        db.close();
    })
});