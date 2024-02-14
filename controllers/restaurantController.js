const Restaurant = require('../models/restaurantModel')


exports.addRestaurant = async(req,res)=>{

    const {name,address,neighborhood,cuisine} = req.body;

    const photograph =req.file.path;

    

    try {
       const restaurant = await Restaurant.create({
            name,
            address,
            neighborhood,
            cuisine,
            photograph
       })

      

       if (!restaurant) {
        return res.status(500).json({

            success: false,
            message: 'failed to add Restaurant'
        })
    }
        res.status(200).json({

            success: true,
            message: 'Restaurant added Successfully'
        })


    } catch (error) {
        res.status(500).json({

            success: false,
            message: error
        })
    }

}

exports.getRestaurant = async (req,res)=>{

  try {
      const restaurants = await Restaurant.find();
      
      

      if (!restaurants) {
        return res.status(500).json({

            success: false,
            message: 'failed to add Restaurant'
        })
    }

    res.status(200).json({

        success: true,
        restaurants,
        
    })

  } catch (error) {
  
    
    res.status(500).json({

        success: false,
        message: 'failed to add Restaurant'
    })
  }
}
