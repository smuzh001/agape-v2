import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactMap extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className='contact-map'>
        <div
          style={{ overflow: "hidden", width: "1920px", position: "relative" }}
        >
          <iframe
            width={1920}
            height={670}
            src='https://maps.google.com/maps?width=1920&height=670&hl=en&amp;q=9.716845877104706,%2076.97356046507784+(Agape,%20Eco-Spiritual%20Resort,%20Vagamon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            frameBorder={0}
            scrolling='no'
            marginHeight={0}
            marginWidth={0}
          />
          <div
            style={{
              position: "absolute",
              width: "80%",
              bottom: "10px",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              color: "#000",
              textAlign: "center",
            }}
          >
            <small
              style={{ lineHeight: "1.8", fontSize: "2px", background: "#fff" }}
            >
              Powered by{" "}
              <a href='https://embedgooglemaps.com/es/'>Embedgooglemaps ES</a>{" "}
              &amp;{" "}
              <a href='https://www.jubler.org/'>increase website traffic</a>
            </small>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "#gmap_canvas img{max-width:none!important;background:none!important}",
            }}
          />
        </div>
        <br />
      </section>
    );
  }
}

export default ContactMap;
