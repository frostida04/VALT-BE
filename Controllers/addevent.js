const Events = require("../model/Events");


exports.Addevent = async (req, res) => {
    console.log("=========Events==========", req.body);
    const eventname = req.body.eventname.toLowerCase();
    const logo = req.body.logo;
    const date = req.body.date;
    const localtime = req.body.localtime;
    const country = req.body.country;
    const city = req.body.city;
    const www = req.body.www;
    const type = req.body.type;
    const Active = req.body.Active;
    const On_offline = req.body.On_offline;
    const link = req.body.link;
    const Description = req.body.Description;
    const gen_invtitle = req.body.gen_invtitle;
    const gen_invnum = req.body.gen_invnum;
    const gen_invlimit = req.body.gen_invlimit;
    const gen_invvalt = req.body.gen_invvalt;
    const vip_invtitle = req.body.vip_invtitle;
    const vip_invnum = req.body.vip_invnum;
    const vip_invlimit = req.body.vip_invlimit;
    const vip_invvalt = req.body.vip_invvalt;
    const vipb_invtitle = req.body.vipb_invtitle;
    const vipb_invnum = req.body.vipb_invnum;
    const vipb_invlimit = req.body.vipb_invlimit;
    const vipb_invvalt = req.body.vipb_invvalt;
    const offerdate = req.body.offerdate;
    const offerlocaltime = req.body.offerlocaltime;
  
    try {
      const newEvents = new User({
        eventname: eventname,
        logo: logo,
        date: date,
        localtime: localtime,
        country: country,
        city: city,
        www: www,
        type: type,
        Active: Active,
        On_offline: On_offline,
        link: link,
        Description: Description,
        gen_invtitle: gen_invtitle,
        gen_invnum: gen_invnum,
        gen_invlimit: gen_invlimit,
        gen_invvalt: gen_invvalt,
        vip_invtitle: vip_invtitle,
        vip_invnum: vip_invnum,
        vip_invlimit: vip_invlimit,
        vip_invvalt: vip_invvalt,
        vipb_invtitle: vipb_invtitle,
        vipb_invnum: vipb_invnum,
        vipb_invlimit: vipb_invlimit,
        vipb_invvalt: vipb_invvalt,
        offerdate: offerdate,
        offerlocaltime: offerlocaltime,
      });
      await newEvents.save();
      return res.status(201).json({ message: "Event added successfully" });
    } 
    catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Server error during addition" });
    }
  };
  