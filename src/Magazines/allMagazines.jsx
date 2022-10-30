function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }
  

const JanuaryCovers2022 = importAll(require.context('../Images/2022_01/2022_01_Cover', false, /\.(png|jpe?g|svg)$/));
const JanuaryIssues2022 = importAll(require.context('../Images/2022_01/2022_01_Issue', false, /\.(png|jpe?g|svg)$/));
const FeburaryCovers2022 = importAll(require.context('../Images/2022_02/2022_02_Cover', false, /\.(png|jpe?g|svg)$/));
const FeburaryIssues2022 = importAll(require.context('../Images/2022_02/2022_02_Issue', false, /\.(png|jpe?g|svg)$/));
const MarchCovers2022 = importAll(require.context('../Images/2022_03/2022_03_Cover', false, /\.(png|jpe?g|svg)$/));
const MarchIssues2022 = importAll(require.context('../Images/2022_03/2022_03_Issue', false, /\.(png|jpe?g|svg)$/));
const AprilCovers2022 = importAll(require.context('../Images/2022_04/2022_04_Cover', false, /\.(png|jpe?g|svg)$/));
const AprilIssues2022 = importAll(require.context('../Images/2022_04/2022_04_Issue', false, /\.(png|jpe?g|svg)$/));
const MayCovers2022 = importAll(require.context('../Images/2022_05/2022_05_Cover', false, /\.(png|jpe?g|svg)$/));
const MayIssues2022 = importAll(require.context('../Images/2022_05/2022_05_Issue', false, /\.(png|jpe?g|svg)$/));
const JuneCovers2022 = importAll(require.context('../Images/2022_06/2022_06_Cover', false, /\.(png|jpe?g|svg)$/));
const JuneIssues2022 = importAll(require.context('../Images/2022_06/2022_06_Issue', false, /\.(png|jpe?g|svg)$/));
const JulyCovers2022 = importAll(require.context('../Images/2022_07/2022_07_Cover', false, /\.(png|jpe?g|svg)$/));
const JulyIssues2022 = importAll(require.context('../Images/2022_07/2022_07_Issue', false, /\.(png|jpe?g|svg)$/));
const AugustCovers2022 = importAll(require.context('../Images/2022_08/2022_08_Cover', false, /\.(png|jpe?g|svg)$/));
const AugustIssues2022 = importAll(require.context('../Images/2022_08/2022_08_Issue', false, /\.(png|jpe?g|svg)$/));
const SeptemberCovers2022 = importAll(require.context('../Images/2022_09/2022_09_Cover', false, /\.(png|jpe?g|svg)$/));
const SeptemberIssues2022 = importAll(require.context('../Images/2022_09/2022_09_Issue', false, /\.(png|jpe?g|svg)$/));
const OctoberCovers = importAll(require.context('../Images/2022_10_Covers', false, /\.(png|jpe?g|svg)$/));
const OctoberIssue = importAll(require.context('../Images/2022_10_Issue', false, /\.(png|jpe?g|svg)$/));
let funct = (title)=> {
    let emptyArray = [];
    for (let key in title) {
        emptyArray.push(title[`${key}`])
    }
    return emptyArray;
}
let JanuaryCovers2022Array = funct(JanuaryCovers2022);
let JanuaryIssues2022Array = funct(JanuaryIssues2022);
let FeburaryCovers2022Array = funct(FeburaryCovers2022);
let FeburaryIssues2022Array = funct(FeburaryIssues2022);
let MarchCovers2022Array = funct(MarchCovers2022);
let MarchIssues2022Array = funct(MarchIssues2022);
let AprilCovers2022Array = funct(AprilCovers2022);
let AprilIssues2022Array = funct(AprilIssues2022);
let MayCovers2022Array = funct(MayCovers2022);
let MayIssues2022Array = funct(MayIssues2022);
let JuneCovers2022Array = funct(JuneCovers2022);
let JuneIssues2022Array= funct(JuneIssues2022); 
let JulyCovers2022Array= funct(JulyCovers2022);
let JulyIssues2022Array= funct(JulyIssues2022);
let AugustCovers2022Array= funct(AugustCovers2022);
let AugustIssues2022Array= funct(AugustIssues2022);
let SeptemberCovers2022Array= funct(SeptemberCovers2022);
let SeptemberIssues2022Array= funct(SeptemberIssues2022);
let OctoberCovers2022Array= funct(OctoberCovers);
let OctoberIssues2022Array= funct(OctoberIssue);
const Magazines = [
    {
        id: 0,
        issueDate: 'January 2022',
        imagesCover: JanuaryCovers2022Array,
        imagesIssue: JanuaryIssues2022Array
    },
    {
        id: 1,
        issueDate: 'Feburary 2022',
        imagesCover: FeburaryCovers2022Array,
        imagesIssue: FeburaryIssues2022Array
    },
    {
        id: 2,
        issueDate: 'March 2022',
        imagesCover: MarchCovers2022Array,
        imagesIssue: MarchIssues2022Array 
    },
    {
        id: 3,
        issueDate: 'April 2022',
        imagesCover: AprilCovers2022Array,
        imagesIssue: AprilIssues2022Array
    },
    {
        id: 4,
        issueDate: 'May 2022',
        imagesCover: MayCovers2022Array ,
        imagesIssue: MayIssues2022Array  
    },
    {
        id: 5,
        issueDate: 'June 2022',
        imagesCover: JuneCovers2022Array,
        imagesIssue: JuneIssues2022Array 
    },
    {
        id: 6,
        issueDate: 'July 2022',
        imagesCover: JulyCovers2022Array,
        imagesIssue: JulyIssues2022Array 
    },
    {
        id: 7,
        issueDate: 'August 2022',
        imagesCover: AugustCovers2022Array,
        imagesIssue: AugustIssues2022Array
    },
    {
        id: 8,
        issueDate: 'September 2022',
        imagesCover: SeptemberCovers2022Array,
        imagesIssue: SeptemberIssues2022Array 
    },
    {
        id: 9,
        issueDate: 'October 2022',
        imagesCover: OctoberCovers2022Array,
        imagesIssue: OctoberIssues2022Array
    },
]

export default Magazines; 