import React from "react";
// import PropTypes from "prop-types";

export const YoutubeEmbed = ({ src }) => ( 
    <div className = "video-responsive" >
    <iframe width = "560"
    height = "315"
    src = {src}
    title = "YouTube video player"
    frameborder = "0"
    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen > </iframe> 
    </div>
);

// YoutubeEmbed.propTypes = {
//     embedId: PropTypes.string.isRequired
// };