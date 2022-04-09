const db = require('../../database/models')
const fetch = require('node-fetch')
const axin = require('axios')
const { default: axios } = require('axios')
module.exports = {
    list: (req,res) => {
        db.Genre.findAll()
        .then((genres) => {
            res.json({
                meta:{
                    status: 200,
                    total: genres.length,
                    url: "/api/genres"
                },
                data:genres
            })
        })
    },
    detail:(req,res) => {
        db.Genre.findByPk(req.params.id)
        .then((genreId)=> {
            res.json({
                meta:{
                    status:200,
                    url:`api/genres/${req.params.id}`
                },
                data:genreId
            })
        })
    },
    fetch:(req,res)=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())//capturar repsuesta y parsearla a jon
        .then(countries => {//se consume denuevo en un formato js
            res.render('countries',{countries})
        })
    },
    fetch2:(req,res)=>{
        axios.get('http://localhost:3001/api/genres')
        .then(result => {
            res.render('genresList',{
                genres: result.data
            })
        })    
        /*  {//api propia 
            fetch('http://localhost:3001/api/genres')
            /* .then(response => response.json())//capturar repsuesta y parsearla a jon
            .then(data => {//se consume denuevo en un formato js
                res.render('genreList',{
                    genres: genres.data 
                }) 
            }) */
    }
}
 