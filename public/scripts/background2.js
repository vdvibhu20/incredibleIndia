var counter = 0;
function changeBG(){
    // var imgs = [
    //     "url(http://hdwidescreenwallpapers.com/wp-content/uploads/2013/11/india-wallpaper-hd-1024x575.jpg)",
    //     "url(http://hdwidescreenwallpapers.com/wp-content/uploads/2013/11/india-hd-wallpapers-1024x576.jpg)",
    //     "url(http://hdwidescreenwallpapers.com/wp-content/uploads/2013/11/incredible-india-wallpapers-hd-1024x575.jpg)",
    //     "url(http://wallpapercave.com/wp/fROEr8f.jpg)",
    //     // "url(http://img.walls321.com/images2/xzsycnrxpxv.jpg)",
    //     // "url(https://s-media-cache-ak0.pinimg.com/originals/4b/97/79/4b9779490afe5e49735a12b45e0ed335.jpg)",
    //     // "url(http://hdwidescreenwallpapers.com/wp-content/uploads/2013/11/incredible-india-hd-wallpaper-1024x640.jpg)",
    //     "url(http://img.wallpaperfolder.com/f/5DE180CAE379/festival-colours-abuja-indian-holi.jpg)",
        
    //     // "url(http://hdwidescreenwallpapers.com/wp-content/uploads/2013/11/india-wallpaper-hd-1024x575.jpg)",
    //     // "url(http://hdwidescreenwallpapers.com/wp-content/uploads/2013/11/india-wallpaper-hd-1024x575.jpg)",
    //     // "url(https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
    //     // "url(https://images.unsplash.com/photo-1444012236767-1b471c68781c?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
    //     // "url(https://images.unsplash.com/photo-1444012104069-996724bf4a0a?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
    //     // "url(https://images.unsplash.com/photo-1445888761652-fc13cbb0d819?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
    //     // "url(https://images.unsplash.com/photo-1445888985293-8e1b904061c4?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
    //     // "url(https://images.unsplash.com/photo-1444228250525-3d441b642d12?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
    //     // "url(https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
    //     // "url(https://images.unsplash.com/photo-1445308394109-4ec2920981b1?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)"
    //   ]
    var image=[
            "url(../scripts/fROEr8f.jpg)",
            "url(../scripts/festival-colours-abuja-indian-holi.jpg)",
	    "url(../scripts/incredible-india-wallpapers-hd-1024x575.jpg)",
            "url(../scripts/india-hd-wallpapers-1024x576.jpg)",
            "url(../scripts/india-wallpaper-hd-1024x575.jpg)"
        ]
    
    // if(counter === imgs.length) counter = 0;
    // var styles={
    //     backgroundImage: imgs[counter],
    //     backgroundColor: "rgba(250, 250, 250, 0.3)"
    //     // webkitFilter: "background, blur(5px)",
    //     // background: filter(imgs[counter], "blur(5px)"),
    // }
    
     if(counter === image.length) counter = 0;
    var styles={
        backgroundImage: image[counter],
        backgroundColor: "rgba(250, 250, 250, 0.3)"
        // webkitFilter: "background, blur(5px)",
        // background: filter(imgs[counter], "blur(5px)"),
    }
    
    $("body").css(styles);

    counter++;
}
  
  setInterval(changeBG, 4000);



