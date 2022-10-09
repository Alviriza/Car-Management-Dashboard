const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'dqufcw81k', 
    api_key: '429173125155412', 
    api_secret: 'f8rFPvofA2P1UPqXWdhcz9a8hig' 
});

module.exports = cloudinary;