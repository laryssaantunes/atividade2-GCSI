import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image"

export default function Footer(){
    return(
        <footer className={styles.fundo}>
            <nav>
            <link href= "https://ead.ifms.edu.br/"
             width={100}
             height={100}
             src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.m.wikipedia.org%2Fwiki%2FFicheiro%3AMoodle-logo.svg&psig=AOvVaw1_L_WvZVMZiA5IIwKICGAz&ust=1709812662568000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDi5dPK34QDFQAAAAAdAAAAABAJ"}
            ></link>
            </nav>
        </footer>
    );
}