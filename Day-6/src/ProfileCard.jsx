import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, role, image, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
