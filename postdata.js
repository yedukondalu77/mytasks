const form1=document.querySelector(".detailsform")
// console.log(form1)
form1.addEventListener('submit',event =>{
    event.preventDefault()
    const formData=new FormData(form1)
    console.log(formData.get('user_id'))
    console.log(formData.get('photo'))
    console.log(formData.get('mobile_no'))
    console.log(formData.get('company_id'))


    const data=new URLSearchParams(formData)
    // fetch('https://localhost:5432/user_details',{
    //     method:'POST',
    fetch('http://192.168.0.129:5432/user_details',{
        method:'POST',
        body:data
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})




// const form1 = document.querySelector(".detailsform")

// form1.addEventListener('submit', async event => {
//     event.preventDefault();

//     const formData = new FormData(form1);
    
//     try {
//         const response = await fetch('http://192.168.0.129:5432/learning_db', {
//             method: 'POST',
//             body: formData,
//         });

//         if (!response.ok) {
//             // Log the response status and body if the request fails
//             console.error('HTTP error:', response.status);
//             const errorText = await response.text();
//             console.error('Error response:', errorText);
//             return;
//         }

//         const data = await response.json();
//         console.log('Success:', data);
//     } catch (error) {
//         // Catch network errors
//         console.error('Fetch error:', error);
//     }
// });
