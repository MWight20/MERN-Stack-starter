module.exports = (app) => {
    app.get('/hello', function(req, res) {
        res.json({ message: 'hooray! welcome to our api from in server/server!' });
        console.log('hooray! welcome to our api!');   
    });
}