module.exports = (app) => {
    app.get('/hello', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
        console.log('hooray! welcome to our api!');   
    });
}