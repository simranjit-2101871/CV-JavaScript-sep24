console.log("sample project 5 cv_screening");

//Data to be screened for selecting the employee
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image:'https://randomuser.me/api/portraits/men/3.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]


//1.) now we use iterator here

function cv(profiles){
    let nextindex=0;
    return{
        next:function(){
            return nextindex<profiles.length ?
            {value:profiles[nextindex++],done:false} :
            {done:true}
        }
    };
}

//2.) button listner for next button
const next=document.getElementById('next');
next.addEventListener('click',nextCV);

const candidates=cv(data);
//3.) now i would like to see the next cv when i first come to the page so let me just the call the function
nextCV();

//function this is the paprt of 2 not 3
function nextCV(){
    const currentcandi=candidates.next().value;

    let image=document.getElementById('image');
    let profile=document.getElementById('profile');

    //4.) now at the end when the vlaues becomes undefined what to do then ,the code below was already written the if and else ststement has been added afterwards,so the code below if is 2 and 4 
    if(currentcandi!=undefined){

        image.innerHTML=`<img src='${currentcandi.image}'>`
        //here first i wrote image.innerHTML instead of profile so it was overwritten and the imagr was not able to display
        profile.innerHTML= `<ul class="list-group">
        <li class="list-group-item">Name: ${currentcandi.name}</li>
        <li class="list-group-item">${currentcandi.age} years old</li>
        <li class="list-group-item">Lives in ${currentcandi.city}</li>
        <li class="list-group-item">Primarily works on ${currentcandi.language}</li>
        <li class="list-group-item">Uses ${currentcandi.framework} framework</li>
      </ul>`;
    }
    else{
        alert('END OF APPLICATIONS');
        window.location.reload();

    }

}
