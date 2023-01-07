const leftArrow = document.getElementById("Left_Arrow")
const rightArrow = document.getElementById("Right_Arrow");
const image = document.getElementById("Main_Image");
const MainText = document.getElementById("GetALink");
const SubText = document.getElementById("TT");

const images = ["https://bit.ly/3GGu3sl", "https://bit.ly/3ImwRfn", "https://bit.ly/3VNHSsY"];
const GetALink = ["Get a link you can share", "Plan ahead", "Your meeting is safe"];
const TT = ["Click <strong>New meeting</strong> to get a link you can send to people you want to meet with", "Click <strong>New meeting</strong> to schedule meetings in Google Calender and send invited to participants", "No one can join a meeting unless invited or admitted by the host"];
const moreHorizontal = ["more_horizontal_1.png", "more_horizontal_2.png", "more_horizontal_3.png"];
let i = 0;

function GotoLeftImage()
{
    if(i == 0)
    {
        // Set Left arrow to non-interactable
        return;
    }
    i = (3 + i - 1) % 3;
    SetElements();
    SetArrows();
}

function GotoRightImage()
{
    if(i == 2)
    {
        return;
    }
    i = (i + 1) % 3;
    SetElements();
    SetArrows();
}

function SetArrows()
{
    rightArrow.style.filter = "opacity(100%)";
    leftArrow.style.filter = "opacity(100%)";
    if(i == 0)
        leftArrow.style.filter = "opacity(10%)";
    if(i == 2)
        rightArrow.style.filter = "opacity(10%)";    
}

function SetElements()
{
    image.src = images[i];
    MainText.innerHTML = GetALink[i];
    SubText.innerHTML = TT[i];
}