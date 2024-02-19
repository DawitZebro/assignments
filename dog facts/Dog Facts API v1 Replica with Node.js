const express = require('express');


const app = express();
const PORT = 3000;

// Dog facts data
const dogFacts = [
    "A group of pugs is called a grumble.",
    "Dogs have a sense of time and can predict future events.",
    "Dogs have three eyelids. The third lid, called a nictitating membrane or 'haw,' keeps the eye lubricated and protected.",
    "Dalmatian puppies are pure white when they are born and develop their spots as they grow older.",
    "Greyhounds can run up to 45 miles per hour.",
    "A dog's nose print is unique, much like a person's fingerprint.",
    "Basset Hounds cannot swim due to their heavy upper body and short legs.",
    "Newfoundlands are excellent swimmers due to their webbed feet and water-resistant coat.",
    "The Basenji dog is known as the 'barkless dog' because it does not bark like other breeds.",
    "Pomeranians were once larger sled dogs in the Arctic."
];

// GET /facts endpoint
app.get('/facts', (req, res) => {
    try {
        // Reads the number query parameter
        const number = parseInt(req.query.number);

        // If number is provided, return that many facts. If not, return all facts.
        const facts = number ? dogFacts.slice(0, number) : dogFacts;

        // Responds with JSON containing the dog facts
        res.json({ facts, success: true });
    } catch (error) {
        // Handle invalid requests
        res.status(400).json({ error: 'Invalid request', success: false });
    }
});

// Starts the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
