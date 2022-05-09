// photos of elon musks
let elonMuskImgs = [
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/9D42/production/_124485204_tv075719297.jpg",
    "https://cdn.vox-cdn.com/thumbor/2Ba6nKBZLSr3k1H0nJbn43sVq4w=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/70843266/VRG_Illo_STK022_K_Radtke_Musk_Thumbs_Up.0.jpg",
    "https://cdn.cnn.com/cnnnext/dam/assets/220405083742-01-elon-musk-0322-large-169.jpg",
    "https://www.aljazeera.com/wp-content/uploads/2022/04/musk2.jpg?resize=770%2C513",
    "https://www.hollywoodreporter.com/wp-content/uploads/2022/03/GettyImages-1229893337.jpg",
    "https://www.incimages.com/uploaded_files/image/1920x1080/feature-114-Elon-Musk-EoY-opener-pan_7026.jpg",
    "https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/be41ade9-970c-4910-a3e4-534ef4b6bf1d.jpg?source=next&amp;fit=scale-down&amp;quality=highest&amp;width=1067",
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/YW4BKUJQKZMCLNR62QOUFHVCME.jpg",
    "https://www.rollingstone.com/wp-content/uploads/2018/06/elon-musk-0b50501d-c829-4634-aaa8-8afbda486949.jpg",
    "https://c.files.bbci.co.uk/7727/production/_103330503_musk3.jpg",
    "https://assets.medpagetoday.net/media/images/92xxx/92658.jpg",
    "https://content.fortune.com/wp-content/uploads/2020/11/BPOY.01.Elon-Musk.jpg",
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/HPMU3IRVVZKEJM4VX7SDN77QIE.jpg",
    "https://i.guim.co.uk/img/media/b138c84f366b942fba412180f042018bd150d355/0_257_2505_1503/master/2505.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c2ef02be74ce0d6bbb987eeee7841227",
    "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2020/11/elon-musk-frown-1130201.jpg"
];

// get the list of img tags from current website
const imgs = document.getElementsByTagName("img")

// change the source of the image to one of the elon musk photo links
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * elonMuskImgs.length);
    imgs[i].src = elonMuskImgs[randomImg];
}

// change texts to elon musk
const texts = document.getElementsByTagName("p")
for (let i = 0; i < texts.length; i++) {
    texts[i].textContent = "Elon Musketeer";
}

const headers = document.getElementsByTagName("h1")
for (let i = 0; i < headers.length; i++) {
    headers[i].textContent = "Elon Musk";
}

const headers_2 = document.getElementsByTagName("h2")
for (let i = 0; i < headers_2.length; i++) {
    headers_2[i].textContent = "Elon Musk";
}