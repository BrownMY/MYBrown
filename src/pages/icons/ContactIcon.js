import React from "react";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";

const ContactIcon = () => {
  return (
    <div>
      <div class="icon">
        <ContactPhoneOutlinedIcon style={{ fontSize: 50 }} />
        <p class="p-nav">Contact</p>
      </div>
      <p class="p-mobile">C</p>
    </div>
  );
};

export default ContactIcon;
