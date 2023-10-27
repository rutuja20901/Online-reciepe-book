// Sample recipe data (replace with your own)
const recipes = [
    {
        title: "इडली सांबर",
        description: "इडली सांबर हा एक दक्षिण भारतीय पदार्थ आहे जो त्या भागामध्ये तसेच संपूर्ण भारतामध्ये आवडीने खाल्ला जातो. इडली आणि सांबर ह्या दोन्ही वेगवेगळ्या ( चवीला आणि दिसायला ) डिश आहेत. इडली हि एक मुख्य डिश आहे आणि सांबर हि डिश आपण एक साईड डिश म्हणून सर्व्ह करतो.",
        ingredients: ["३ वाटी तांदूळ, १ वाटी उडदाची डाळ, १/४ खायचा सोडा, दीड चमचा मीठ, तेल ( आवश्यकतेनुसार )."],
        instructions: ["आत्ता आपण इडली बनवण्यासाठी काय करावे लागते. तांदूळ आणि डाळीचे मिश्रण किती वेळ भिजवावे ते वाटल्यानंतर किती वेळ भिजवावे आणि त्याला कसे वाफवावे या सर्व प्रक्रीयेबद्दल माहिती घेणार आहोत.", "सर्वप्रथम ३ वाटी तांदूळ आणि १ वाटी डाळ चांगली निवडून घ्या आणि मग पाण्याने स्वच्छ धुवून घ्या. • मग एक खोल भांडे घ्या आणि त्यामध्ये धुतलेले तांदूळ आणि डाळ घाला आणि त्यामध्ये ६ वाटी पाणी घाला आणि त्यावर झाकण ठेवून ते ६ ते ७ तास भिजवा.", "सहा ते सात तासानंतर भिजवलेल्या मिश्रनामधील जास्त झालेले पाणी काढून घ्या आणि ते मिक्सर वर फिरवून त्याचे बारीक पीठ / बॅटर करून घ्या (सर्व तांदळाच्या आणि डाळीच्या मिश्रणाचे बॅटर करा ..", "मग हे तांदळाचे आणि डाळीचे बॅटर ४ ते ५ भिजवून ठेवा त्यामुळे पीठ चांगले फसफसून येईल आणी आपल्या इडल्या हलक्या आणि मऊ बनतील. ", "४ ते ५ तासांनी पिठामध्ये खायचा सोडा आणि मीठ घाला आणि ते चांगले मिक्स करून घ्या.", "त्यानंतर इडली पात्र घेवून त्यामध्ये पाणी घाला आणि इडली पात्राच्या प्लेट्सला तेल लावून घ्या आणि त्यामध्ये पीठ घाला आणि त्या प्लेट्स इडली पात्रामध्ये ठेवून त्यावर पत्राचे झाकण घाला." , "आणि ते मोठ्या आचेवर उकडण्यासाठी ठेवा आणि ते ६ ते ७ मिनिटे वाफवून घ्या. ६ ते ७ मिनिटांनी इडली पात्र उघडून इडलीमध्ये सुरी किंवा चमच्या घालून पहा जर सुरीला किंवा चमच्याला पीठ लागले तर ते आणि थोडा वेळ उकडा आणि जर पीठ लागले नसेल तर त्या चांगल्या उकडल्या असतील.","इडल्या उकडल्या असतील तर गॅस बंद करा आणि त्यामधील इडलीच्या प्लेट्स काढून घ्या आणि त्यामधील इडल्या चमच्याने काढून घ्या.","राहिलेल्या बॅटरच्या इडल्या वाफवण्यासाठी हीच प्रक्रिया वापरा.","तुमच्या मऊ, लुसलुशीत आणि हलक्या इडल्या तयार झाल्या."],
    },
    
    // Add more recipes here
];

const recipeList = document.getElementById("recipe-list");
const recipeDetails = document.getElementById("recipe-details");

// Display recipe list
recipes.forEach((recipe, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span class="recipe-title">${recipe.title}</span><br><span class="recipe-description">${recipe.description}</span>`;
    listItem.addEventListener("click", () => displayRecipe(index));
    recipeList.appendChild(listItem);
});

// Display recipe details
function displayRecipe(index) {
    const recipe = recipes[index];
    const ingredientsList = recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
    const instructionsList = recipe.instructions.map((instruction) => `<li>${instruction}</li>`).join("");
    recipeDetails.innerHTML = `
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <h4>साहित्य:</h4>
        <ul>${ingredientsList}</ul>
        <h4>कृती:</h4>
        <ol>${instructionsList}</ol>
    `;
    recipeDetails.style.display = "block";
}