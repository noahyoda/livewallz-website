import '../App.css';
import Grid from '@material-ui/core/Grid';

import React from 'react';

// import images in src
import imanuel from '../imgs/imanuel.png';
import noah from '../imgs/Jaussi047.jpg';
import cameron from '../imgs/cameron.jpg';
import jo from '../imgs/jo.jpg';

function Collapsable_bio(props) {
    // toggle bio to show first 3 lines
    let preview = props.bio.slice(0, 200) + "...";
    const [open, setOpen] = React.useState(true);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            {open && (
                    <div className="toggle">
                        <p>{preview}</p>
                    </div>
                ) || !open && (
                    <div className="toggle">
                        <p>{props.bio}</p>
                    </div>
                
                )}
            <button className="Team-MemberBioButton" onClick={toggle}> Show {
                !open && "Less..." || open && "More..."
            }</button>
        </div>
    )
}

function MemberCard(props) {
    // map names to images
    let images = {
        "Immanuel Bierer": imanuel,
        "Noah Jaussi": noah,
        "Cameron Steensma": cameron,
        "Jo Elston": jo
    }

    // bold titles that don't have classname
    return (
        <div className="Team-MemberCard">
            <img className="Team-MemberImage" src={images[props.name]} alt="Image" />
            <div className="Team-MemberInfo">
                <h2 className="Team-MemberName">{props.name}</h2>
                <p style={{fontWeight: "bold", fontSize: "1.5em"}}>Role</p>
                <p className="Team-MemberRole">{props.role}</p>
                <p style={{fontWeight: "bold", fontSize: "1.5em"}}>Bio</p>
                <Collapsable_bio bio={props.bio} />
                <p style={{fontWeight: "bold", fontSize: "1.5em"}}>Contact Info</p>
                <p className="Team-MemberEmail">{props.email}</p>
                <p className="Team-MemberPhone">{props.phone}</p>
                <p style={{fontWeight: "bold", fontSize: "1.5em"}}>Links</p>
                <p className="Team-MemberLinkedIn"><a href={props.linkedin}>LinkedIn</a></p>
                <p className="Team-MemberOther"><a href={props.other}>{props.other}</a></p>
            </div>
        </div>
    )
}

function Team() {
    let member_info = {
        "Immanuel Bierer": {
            "role": "Graphics and Physics Lead",
            "bio": "Hi! My name is Immanuel Bierer and I was born on May 5th, 1987, into a family rich with diversity and ingenuity, was raised amidst the rolling landscapes of farms in Missouri, Florida, Idaho, and Montana. My upbringing, under the guidance of my father, an inventor and jack of all trades, instilled in me the values of hard work, discipline, and the importance of problem-solving. Despite a nomadic childhood, I found inspiration in the unlikeliest of places. From watching my father tackle challenges head-on to witnessing the wonders of nature in iconic national parks, such as the Grand Canyon, I developed a deep appreciation for the intricacies of the world around me. My educational journey took me from various elementary schools to Hamilton High School in Montana and then on to several more high schools in Sandy, Utah. While going to school as a child, I discovered a passion for art, and won best of show at my school's art contest with a drawing of a unicorn. With a keen interest in math, philosophy, science, and technology, I pursued higher education at Salt Lake Community College, where I earned an associate's degree in Computer Information Systems. My thirst for knowledge and problem-solving skills propelled me further, culminating in a bachelor's degree in Computer Science from the University of Utah. My professional career reflects a commitment to excellence and adaptability. From my early days as a production operator for Intel Micron Flash Technologies to my tenure at Oracle as a technical support analyst, I have navigated through challenges with resilience and determination. Despite setbacks, including downsizing and layoffs, my relentless pursuit of opportunity has led me to my current role at Domo Inc. Beyond the confines of my professional life, my passions are diverse and dynamic. From designing a groundbreaking 3D printer capable of self-replication, to leading a team in the development of an innovative Android live wallpaper application, my endeavors span the realms of math, technology, science, and creativity. Guided by a strong set of values encompassing integrity, accountability, and a commitment to excellence, I look up to visionary leaders like Wayne Szalinski, Elon Musk, Keanu Reeves, and Jordan Peterson. With a vision of leaving a lasting impact on the world with future inventions and other contributions to society, I envision a future of having a family, performing meaningful work, and taking advantage of valuable opportunities to make a difference. My legacy is not merely defined by my achievements, but by my relentless pursuit of innovation and an unwavering dedication to shaping a better future for generations to come.",
            "url": "imanuel.jpg",
            "linkedin": "https://www.linkedin.com/in/immanuel-bierer/",
            "email": "immanuelbierer@msn.com",
            "phone": "801-604-0997",
            "other": ""
        },
        "Noah Jaussi": {
            "role": "Mobile Infrastructure Lead, Mobile Dev Support",
            "bio": "Hi, I am a Software Engineer and Senior in Computer Science at the University of Utah. I've always had a passion for innovating and creating new things. All forms of engineering have fascinated me with Software being the most versatile to me. I especially love systems involving incredible computational power and efficiency. Outside of engineering I also love to para-glide, fly drones, go camping, surf, and explore the world.",
            "linkedin": "https://www.linkedin.com/in/noah-jaussi-678b121ba/",
            "email": "noahjaussi@gmail.com",
            "phone": "",
            "other": "njaussi.tech"
        },
        "Cameron Steensma": {
            "role": "Backend Lead, Mobile Connections Lead",
            "bio": "Hey there! I'm Cameron, a proud Utahn born and raised in Sandy. Utah football, guitar playing, and the rush of skiing down the slopes are where I find my passions. I am a competitive spirit and thus enjoy both playing and attending sports, sporting events. Graduating with a Bachelor's in Computer Science from the University of Utah, I've found a deep passion for databases, web and mobile development. I enjoy solving complex problems and am committed to lifelong learning.",
            "linkedin": "https://www.linkedin.com/in/cameron-steensma-406960176/",
            "email": "cameronsteensma@gmail.com",
            "phone": "801-867-5309",
            "other": ""
        },
        "Jo Elston": {
            "role": "Frontend Lead",
            "bio": "I am a senior at the University of Utah, double majoring in computer science and psychology. I have previously worked as a CS teaching assistant, a VR/AR researcher, and as a full-stack software engineer. My current interests in regards to CS include simulation software and machine learning. More broadly, I am driven by exploration and am interested in any endeavor that gives me the opportunity to master my craft.",
            "linkedin": "https://www.linkedin.com/in/jo-elston/",
            "email": "joelston101@gmail.com",
            "phone": "385-439-8427",
            "other": ""
        }
    }

    // create collection of member cards
    let collection = []
    //for (let i = 0; i < members.length; i++) {
    for (let m in member_info) {

        collection.push(
                <MemberCard 
                    name={m}
                    role={member_info[m].role}
                    bio={member_info[m].bio}
                    linkedin={member_info[m].linkedin}
                    email={member_info[m].email}
                    phone={member_info[m].phone}
                    other={member_info[m].other}
                />
        )
    }

    // draw collection in div
    return (
    <div className="Team">
        <h2 className="Team-Title">Meet the Team</h2>
        <Grid container spacing={3}>
            {collection}
        </Grid>
    </div>
    );
}

export default Team;
