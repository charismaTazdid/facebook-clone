import React from 'react';
import './Widget.css'

const Widget = () => {
    return (
        <div className="widget">
            <iframe  frameBorder="0" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FparagonProgrammerAcademy%2Fvideos%2F1009467359615982%2F&show_text=true&width=560&t=0" width="340" height="400px" style="border:none;overflow:scroll"
            style={{border: 'none', overflow: "scroll"}} scrolling="" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" title="">
            </iframe>
<br />
            <iframe  frameBorder="1" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FparagonProgrammerAcademy%2Fvideos%2F1020547052064555%2F&show_text=true&width=560&t=0" width="340" height="400px" style="border:none;overflow:hidden"
             style={{border: 'none', overflow: "hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" title=" "></iframe>

            <iframe  frameBorder="0" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FparagonProgrammerAcademy%2Fvideos%2F1009467359615982%2F&show_text=true&width=560&t=0" width="340" height="400px" style="border:none;overflow:hidden"
            style={{border: 'none', overflow: "hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" title=" ">
            </iframe>


        </div>
    );
};

export default Widget;