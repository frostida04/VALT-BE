const Organizers = require("../model/Organizers");


exports.Addorganizer = async (req, res) => {
    console.log("=========Organizers==========", req.body);
    const ornagizer = req.body.ornagizer.toLowerCase();
    const Name = req.body.Name;
    const Surname = req.body.Surname;
    const country = req.body.country;
    const city = req.body.city;
    const telegram = req.body.telegram;
    const phone = req.body.phone;
    const email = req.body.email;
    const wallet = req.body.wallet;
    const ornagizerId = req.body.ornagizerId;

    try {
      const newOrganizers = new User({
        ornagizer: ornagizer,
        Name: Name,
        Surname: Surname,
        localtime: localtime,
        country: country,
        city: city,
        telegram: telegram,
        phone: phone,
        email: email,
        wallet: wallet,
        ornagizerId: ornagizerId,
      });
      await newOrganizers.save();
      return res.status(201).json({ message: "Organizers added successfully" });
    } 
    catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Server error during addition" });
    }
  };
  