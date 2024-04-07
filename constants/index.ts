import { BiSolidHomeCircle } from "react-icons/bi";
import { FaHashtag, FaBell, FaEnvelope, FaBookmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
const NAVIGATION_ITEMS = [
    { 
        title: "Home",
        icon: BiSolidHomeCircle
    },
    {
        title: "Explore",
        icon: FaHashtag
    },
    {
        title: "Notification",
        icon: FaBell
    },
    {
        title: "Message",
        icon: FaEnvelope
    },
    {
        title: "Bookmark",
        icon: FaBookmark
    },
    {
        title: "Profile",
        icon: FaUser
    }

]

export {NAVIGATION_ITEMS}