//const express = require("express");


const home = async (req, res) => {
    try {

        res.status(200).send("routing page  register sir ji");


    } catch (error) {
        console.log(error);
    }
};


module.exports = { home  };