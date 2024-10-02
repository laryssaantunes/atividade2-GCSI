import React from 'react';
import styles from "./map.module.css";

const Map = () => {
    return (
        <div> 
            <iframe className={styles.map}
          id="gmap_canvas"
          src={"https://maps.google.com/maps?q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
          frameborder="0" 
          marginheight="0"
          marginwidth="0">
        </iframe>

        </div>
    );

    }
export default Map;