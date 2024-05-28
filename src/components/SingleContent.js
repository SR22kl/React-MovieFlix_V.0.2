import React from 'react'
import { img_300, unavailable } from '../config/config'
import { Badge } from '@mui/material'
import '../style/SingleContent.css'

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
  const Title = title.substring(0, 20);
  return (
    <>
      <div className='media'>
        <Badge badgeContent={vote_average} color={vote_average > 7 ? "primary" : "secondary"} />
        <img src={poster ? `${img_300}${poster}` : unavailable} alt={title} className='poster' />
        <b className='title'>{Title.length > 18 ? `${Title}...` : Title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date || "NA"}</span>
        </span>
      </div>

    </>
  )
}

export default SingleContent