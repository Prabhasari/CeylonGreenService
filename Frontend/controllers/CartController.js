import Cart from '../models/CartModel.js';



//Add to cart 

export const addToCart = async (req,res) => {
    try {
        const{product, quantity,email } =req.body
        //validation
        if(!product){
            return res.send({message:'product is Required'});
        }
        if(!quantity){
            return res.send({message:'quantity is Required'});
        }
        
        if(!email){
            return res.send({message:'email is Required'});
        }
        //check cart
        const exisitingcart = await Cart.findOne({product,email});

        //exisit cart
        if(exisitingcart){
            return res.status(200).send({
                success:false,
                message:'This item is alradey added',
            });
        }
        //save
        const cart = await new Cart({product, quantity,email}).save();

        res.status(201).send({
            success:true,
            message:'Cart Entered Successfully',
            cart
        });

    }catch (error) {
        console.error('Error adding to cart:', error);

        res.status(500).send({
            success: false,
            message: 'Error in details entering',
            error
        });
    }
};



//get all cart details 
export const getCart = async(req, res) =>{
    const{ email } =req.params;
    try {
        const cart = await Cart.find({email}).populate("product","name price");
        if (!cart || cart.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No Cart details found for this email",
            });
        }
        res.status(200).send({
            success: true,
            message: "cart details retrieved successfully",
            cart,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while retrieving cart details",
        });
        
    }
};



//update card details
export const updateCartItemQuantity = async (req,res) => {
    try {
        const {
            product,
            quantity
            } = req.body;
        const {id} = req.params;
        const cart = await Cart.findByIdAndUpdate(
            id,
            {product,quantity},
            {new: true}
            
        );
        res.status(200).send({
            success: true,
            message: "quantity Updated Successfully",
            cart,
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while updating quantity"
        })
        
    }
};



//delete cart details
export const deleteCartItem = async (req, res) =>{
    try {
        const { id } = req.params;
        await Cart.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Cart Details Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while deleting Card Details",
            error,
        });
    }
};


