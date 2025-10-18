// French Sentences Learning Application
const sentences = [
    // Greetings & Courtesy (12 sentences)
    { french: "Bonjour, comment allez-vous ?", english: "Hello, how are you?", pronunciation: "bon-ZHOOR, koh-mahn tah-lay VOO", category: "Greetings" },
    { french: "Je vais bien, merci.", english: "I'm fine, thank you.", pronunciation: "zhuh vay bee-AHN, mair-SEE", category: "Greetings" },
    { french: "Enchanté de faire votre connaissance.", english: "Nice to meet you.", pronunciation: "ahn-shahn-TAY duh fair votr koh-neh-SAHNS", category: "Greetings" },
    { french: "Bonne journée !", english: "Have a good day!", pronunciation: "bun zhoor-NAY", category: "Greetings" },
    { french: "À bientôt !", english: "See you soon!", pronunciation: "ah bee-ahn-TOH", category: "Greetings" },
    { french: "Excusez-moi de vous déranger.", english: "Sorry to bother you.", pronunciation: "ex-koo-zay MWAH duh voo day-rahn-ZHAY", category: "Greetings" },
    { french: "Puis-je vous aider ?", english: "Can I help you?", pronunciation: "pwee zhuh voo zay-DAY", category: "Greetings" },
    { french: "S'il vous plaît.", english: "Please.", pronunciation: "seel voo PLEH", category: "Greetings" },
    { french: "Merci beaucoup.", english: "Thank you very much.", pronunciation: "mair-SEE boh-KOO", category: "Greetings" },
    { french: "De rien.", english: "You're welcome.", pronunciation: "duh ree-AHN", category: "Greetings" },
    { french: "Pardon, je ne comprends pas.", english: "Sorry, I don't understand.", pronunciation: "par-DOHN, zhuh nuh kom-prahn PAH", category: "Greetings" },
    { french: "Bonne soirée !", english: "Have a good evening!", pronunciation: "bun swah-RAY", category: "Greetings" },

    // Daily Conversation (12 sentences)
    { french: "Comment vous appelez-vous ?", english: "What is your name?", pronunciation: "koh-mahn voo zah-play VOO", category: "Daily" },
    { french: "Je m'appelle Marie.", english: "My name is Marie.", pronunciation: "zhuh mah-pel mah-REE", category: "Daily" },
    { french: "D'où venez-vous ?", english: "Where are you from?", pronunciation: "doo veh-nay VOO", category: "Daily" },
    { french: "Je viens des États-Unis.", english: "I'm from the United States.", pronunciation: "zhuh vee-ahn day zay-tah-zoo-NEE", category: "Daily" },
    { french: "Parlez-vous anglais ?", english: "Do you speak English?", pronunciation: "par-lay voo ahn-GLEH", category: "Daily" },
    { french: "Je parle un peu français.", english: "I speak a little French.", pronunciation: "zhuh parl uhn puh frahn-SEH", category: "Daily" },
    { french: "Pouvez-vous répéter, s'il vous plaît ?", english: "Can you repeat, please?", pronunciation: "poo-vay voo ray-pay-TAY seel voo pleh", category: "Daily" },
    { french: "Qu'est-ce que c'est ?", english: "What is this?", pronunciation: "kess kuh SEH", category: "Daily" },
    { french: "Je ne sais pas.", english: "I don't know.", pronunciation: "zhuh nuh say PAH", category: "Daily" },
    { french: "C'est très intéressant !", english: "That's very interesting!", pronunciation: "seh tray ahn-tay-reh-SAHN", category: "Daily" },
    { french: "Quel âge avez-vous ?", english: "How old are you?", pronunciation: "kel ahzh ah-vay VOO", category: "Daily" },
    { french: "J'ai vingt-cinq ans.", english: "I'm twenty-five years old.", pronunciation: "zhay vahn-sank AHN", category: "Daily" },

    // At the Restaurant (12 sentences)
    { french: "Je voudrais une table pour deux personnes.", english: "I would like a table for two people.", pronunciation: "zhuh voo-DREH oon tahbl poor duh pair-SUN", category: "Restaurant" },
    { french: "Puis-je voir le menu, s'il vous plaît ?", english: "May I see the menu, please?", pronunciation: "pwee zhuh vwahr luh meh-NOO seel voo pleh", category: "Restaurant" },
    { french: "Qu'est-ce que vous recommandez ?", english: "What do you recommend?", pronunciation: "kess kuh voo reh-koh-mahn-DAY", category: "Restaurant" },
    { french: "Je voudrais commander maintenant.", english: "I would like to order now.", pronunciation: "zhuh voo-DREH koh-mahn-DAY mahn-tuh-NAHN", category: "Restaurant" },
    { french: "L'addition, s'il vous plaît.", english: "The bill, please.", pronunciation: "lah-dee-see-OHN seel voo pleh", category: "Restaurant" },
    { french: "C'était délicieux !", english: "It was delicious!", pronunciation: "say-teh day-lee-see-UH", category: "Restaurant" },
    { french: "Je suis végétarien.", english: "I am vegetarian.", pronunciation: "zhuh swee vay-zhay-tah-ree-AHN", category: "Restaurant" },
    { french: "Un verre d'eau, s'il vous plaît.", english: "A glass of water, please.", pronunciation: "uhn vair DOH seel voo pleh", category: "Restaurant" },
    { french: "Est-ce que le service est compris ?", english: "Is service included?", pronunciation: "ess kuh luh sair-VEES eh kom-PREE", category: "Restaurant" },
    { french: "Je suis allergique aux noix.", english: "I'm allergic to nuts.", pronunciation: "zhuh swee ah-lair-ZHEEK oh NWAH", category: "Restaurant" },
    { french: "Pouvez-vous me donner une fourchette ?", english: "Can you give me a fork?", pronunciation: "poo-vay voo muh doh-NAY oon for-SHET", category: "Restaurant" },
    { french: "C'est trop épicé pour moi.", english: "It's too spicy for me.", pronunciation: "seh troh ay-pee-SAY poor mwah", category: "Restaurant" },

    // Shopping (10 sentences)
    { french: "Combien ça coûte ?", english: "How much does it cost?", pronunciation: "kom-bee-AHN sah KOOT", category: "Shopping" },
    { french: "C'est trop cher.", english: "It's too expensive.", pronunciation: "seh troh SHARE", category: "Shopping" },
    { french: "Avez-vous quelque chose de moins cher ?", english: "Do you have something cheaper?", pronunciation: "ah-vay voo kel-kuh shohz duh mwahn SHARE", category: "Shopping" },
    { french: "Je cherche une chemise.", english: "I'm looking for a shirt.", pronunciation: "zhuh shairsh oon shuh-MEEZ", category: "Shopping" },
    { french: "Quelle est votre taille ?", english: "What is your size?", pronunciation: "kel eh votr TIE", category: "Shopping" },
    { french: "Puis-je l'essayer ?", english: "Can I try it on?", pronunciation: "pwee zhuh leh-say-YAY", category: "Shopping" },
    { french: "Où est la caisse ?", english: "Where is the checkout?", pronunciation: "oo eh lah KESS", category: "Shopping" },
    { french: "Acceptez-vous les cartes de crédit ?", english: "Do you accept credit cards?", pronunciation: "ahk-sep-tay voo lay kahrt duh kray-DEE", category: "Shopping" },
    { french: "Je vais le prendre.", english: "I'll take it.", pronunciation: "zhuh vay luh PRAHN-druh", category: "Shopping" },
    { french: "Avez-vous un sac ?", english: "Do you have a bag?", pronunciation: "ah-vay voo uhn SAHK", category: "Shopping" },

    // Directions & Travel (12 sentences)
    { french: "Où est la gare ?", english: "Where is the train station?", pronunciation: "oo eh lah GAHR", category: "Directions" },
    { french: "Comment aller à l'aéroport ?", english: "How do I get to the airport?", pronunciation: "koh-mahn ah-LAY ah lah-ay-roh-POR", category: "Directions" },
    { french: "C'est loin d'ici ?", english: "Is it far from here?", pronunciation: "seh lwahn dee-SEE", category: "Directions" },
    { french: "Tournez à droite.", english: "Turn right.", pronunciation: "toor-nay ah DRWAHT", category: "Directions" },
    { french: "Continuez tout droit.", english: "Continue straight ahead.", pronunciation: "kon-tee-noo-ay too DRWAH", category: "Directions" },
    { french: "C'est à côté de la banque.", english: "It's next to the bank.", pronunciation: "seh tah koh-TAY duh lah bahnk", category: "Directions" },
    { french: "Je suis perdu.", english: "I am lost.", pronunciation: "zhuh swee pair-DOO", category: "Directions" },
    { french: "À quelle heure part le train ?", english: "What time does the train leave?", pronunciation: "ah kel ur par luh TRAHN", category: "Directions" },
    { french: "Un billet aller-retour, s'il vous plaît.", english: "A round-trip ticket, please.", pronunciation: "uhn bee-YEH ah-lay ruh-TOOR seel voo pleh", category: "Directions" },
    { french: "Où puis-je trouver un taxi ?", english: "Where can I find a taxi?", pronunciation: "oo pwee zhuh troo-VAY uhn tahk-SEE", category: "Directions" },
    { french: "Le métro est-il ouvert ?", english: "Is the subway open?", pronunciation: "luh may-TROH eh-teel oo-VAIR", category: "Directions" },
    { french: "Pouvez-vous me montrer sur la carte ?", english: "Can you show me on the map?", pronunciation: "poo-vay voo muh mon-TRAY soor lah kahrt", category: "Directions" },

    // Emergency & Help (8 sentences)
    { french: "J'ai besoin d'aide !", english: "I need help!", pronunciation: "zhay buh-ZWAHN dehd", category: "Emergency" },
    { french: "Appelez la police !", english: "Call the police!", pronunciation: "ah-play lah poh-LEES", category: "Emergency" },
    { french: "J'ai besoin d'un médecin.", english: "I need a doctor.", pronunciation: "zhay buh-ZWAHN duhn may-SAHN", category: "Emergency" },
    { french: "Où est l'hôpital le plus proche ?", english: "Where is the nearest hospital?", pronunciation: "oo eh loh-pee-TAHL luh ploo prohsh", category: "Emergency" },
    { french: "J'ai perdu mon passeport.", english: "I lost my passport.", pronunciation: "zhay pair-DOO mohn pahs-POR", category: "Emergency" },
    { french: "Au secours !", english: "Help!", pronunciation: "oh suh-KOOR", category: "Emergency" },
    { french: "C'est une urgence !", english: "It's an emergency!", pronunciation: "seh toon oor-ZHAHNS", category: "Emergency" },
    { french: "Je ne me sens pas bien.", english: "I don't feel well.", pronunciation: "zhuh nuh muh sahn pah bee-AHN", category: "Emergency" },

    // Time & Schedule (8 sentences)
    { french: "Quelle heure est-il ?", english: "What time is it?", pronunciation: "kel ur eh-TEEL", category: "Time" },
    { french: "Il est trois heures et demie.", english: "It's three thirty.", pronunciation: "eel eh trwah zur ay duh-MEE", category: "Time" },
    { french: "À quelle heure ouvre le musée ?", english: "What time does the museum open?", pronunciation: "ah kel ur oovr luh moo-ZAY", category: "Time" },
    { french: "Je suis en retard.", english: "I am late.", pronunciation: "zhuh swee ahn ruh-TAHR", category: "Time" },
    { french: "Nous avons rendez-vous à midi.", english: "We have an appointment at noon.", pronunciation: "noo zah-vohn rahn-day-VOO ah mee-DEE", category: "Time" },
    { french: "Quel jour sommes-nous ?", english: "What day is it?", pronunciation: "kel zhoor sum NOO", category: "Time" },
    { french: "C'est fermé le dimanche.", english: "It's closed on Sunday.", pronunciation: "seh fair-MAY luh dee-MAHNSH", category: "Time" },
    { french: "Combien de temps faut-il ?", english: "How long does it take?", pronunciation: "kom-bee-AHN duh tahn foh-TEEL", category: "Time" },

    // Social & Meeting People (10 sentences)
    { french: "Voulez-vous prendre un café avec moi ?", english: "Would you like to have coffee with me?", pronunciation: "voo-lay voo prahn-druh uhn kah-FAY ah-vek mwah", category: "Social" },
    { french: "Qu'est-ce que vous faites dans la vie ?", english: "What do you do for a living?", pronunciation: "kess kuh voo feht dahn lah VEE", category: "Social" },
    { french: "J'aime beaucoup la France.", english: "I really like France.", pronunciation: "zhem boh-KOO lah frahns", category: "Social" },
    { french: "Avez-vous des enfants ?", english: "Do you have children?", pronunciation: "ah-vay voo day zahn-FAHN", category: "Social" },
    { french: "C'est ma première fois ici.", english: "It's my first time here.", pronunciation: "seh mah pruh-mee-AIR fwah ee-SEE", category: "Social" },
    { french: "Pouvons-nous être amis ?", english: "Can we be friends?", pronunciation: "poo-vohn noo ehtr ah-MEE", category: "Social" },
    { french: "Quel est votre numéro de téléphone ?", english: "What's your phone number?", pronunciation: "kel eh votr noo-may-roh duh tay-lay-FUN", category: "Social" },
    { french: "Êtes-vous libre ce soir ?", english: "Are you free tonight?", pronunciation: "eht voo lee-bruh suh SWAHR", category: "Social" },
    { french: "J'ai passé un bon moment.", english: "I had a good time.", pronunciation: "zhay pah-SAY uhn bohn moh-MAHN", category: "Social" },
    { french: "À la prochaine fois !", english: "Until next time!", pronunciation: "ah lah proh-SHEN fwah", category: "Social" },

    // Accommodation (8 sentences)
    { french: "Avez-vous une chambre disponible ?", english: "Do you have a room available?", pronunciation: "ah-vay voo oon shahm-bruh dees-poh-NEE-bluh", category: "Accommodation" },
    { french: "Je voudrais réserver une chambre.", english: "I would like to book a room.", pronunciation: "zhuh voo-DREH ray-zair-VAY oon shahm-bruh", category: "Accommodation" },
    { french: "Pour combien de nuits ?", english: "For how many nights?", pronunciation: "poor kom-bee-AHN duh NWEE", category: "Accommodation" },
    { french: "Le petit déjeuner est-il inclus ?", english: "Is breakfast included?", pronunciation: "luh puh-tee day-zhuh-NAY eh-teel ahn-KLOO", category: "Accommodation" },
    { french: "À quelle heure est le check-out ?", english: "What time is checkout?", pronunciation: "ah kel ur eh luh check-out", category: "Accommodation" },
    { french: "Y a-t-il le wifi gratuit ?", english: "Is there free wifi?", pronunciation: "ee ah-teel luh wee-fee grah-TWEE", category: "Accommodation" },
    { french: "Pouvez-vous me réveiller à sept heures ?", english: "Can you wake me at seven o'clock?", pronunciation: "poo-vay voo muh ray-vay-YAY ah set UR", category: "Accommodation" },
    { french: "La clé de ma chambre, s'il vous plaît.", english: "The key to my room, please.", pronunciation: "lah klay duh mah shahm-bruh seel voo pleh", category: "Accommodation" },

    // Work & Business (8 sentences)
    { french: "J'ai un rendez-vous avec Monsieur Dupont.", english: "I have an appointment with Mr. Dupont.", pronunciation: "zhay uhn rahn-day-voo ah-vek muh-syuh doo-POHN", category: "Work" },
    { french: "Voici ma carte de visite.", english: "Here's my business card.", pronunciation: "vwah-SEE mah kahrt duh vee-ZEET", category: "Work" },
    { french: "Je travaille pour une entreprise américaine.", english: "I work for an American company.", pronunciation: "zhuh trah-VIE poor oon ahn-truh-PREEZ ah-may-ree-KEN", category: "Work" },
    { french: "Pouvons-nous fixer une réunion ?", english: "Can we schedule a meeting?", pronunciation: "poo-vohn noo feek-SAY oon ray-oo-nee-OHN", category: "Work" },
    { french: "J'ai besoin de plus de temps.", english: "I need more time.", pronunciation: "zhay buh-ZWAHN duh ploo duh TAHN", category: "Work" },
    { french: "Le projet est terminé.", english: "The project is finished.", pronunciation: "luh proh-ZHEH eh tair-mee-NAY", category: "Work" },
    { french: "Pouvez-vous m'envoyer un email ?", english: "Can you send me an email?", pronunciation: "poo-vay voo mahn-vwah-YAY uhn ee-MEHL", category: "Work" },
    { french: "C'est une bonne idée !", english: "That's a good idea!", pronunciation: "seh toon bun ee-DAY", category: "Work" },

    // Feelings & Opinions (8 sentences)
    { french: "Je suis très heureux.", english: "I am very happy.", pronunciation: "zhuh swee tray ur-UH", category: "Feelings" },
    { french: "J'ai peur.", english: "I'm afraid.", pronunciation: "zhay PUR", category: "Feelings" },
    { french: "C'est magnifique !", english: "It's magnificent!", pronunciation: "seh mah-nyee-FEEK", category: "Feelings" },
    { french: "Je suis fatigué.", english: "I am tired.", pronunciation: "zhuh swee fah-tee-GAY", category: "Feelings" },
    { french: "Ça ne me plaît pas.", english: "I don't like it.", pronunciation: "sah nuh muh pleh PAH", category: "Feelings" },
    { french: "Je suis d'accord avec vous.", english: "I agree with you.", pronunciation: "zhuh swee dah-KOR ah-vek voo", category: "Feelings" },
    { french: "C'est dommage.", english: "That's a shame.", pronunciation: "seh doh-MAHZH", category: "Feelings" },
    { french: "Je m'ennuie.", english: "I'm bored.", pronunciation: "zhuh mahn-NWEE", category: "Feelings" },

    // Activities & Hobbies (8 sentences)
    { french: "J'aime faire du sport.", english: "I like to play sports.", pronunciation: "zhem fair doo SPOR", category: "Activities" },
    { french: "Allons au cinéma ce soir.", english: "Let's go to the movies tonight.", pronunciation: "ah-lohn oh see-nay-MAH suh swahr", category: "Activities" },
    { french: "Je joue de la guitare.", english: "I play the guitar.", pronunciation: "zhuh zhoo duh lah gee-TAHR", category: "Activities" },
    { french: "Voulez-vous danser ?", english: "Would you like to dance?", pronunciation: "voo-lay voo dahn-SAY", category: "Activities" },
    { french: "J'adore voyager.", english: "I love traveling.", pronunciation: "zhah-DOR vwah-yah-ZHAY", category: "Activities" },
    { french: "On va à la plage ?", english: "Shall we go to the beach?", pronunciation: "ohn vah ah lah PLAHZH", category: "Activities" },
    { french: "Je lis un livre intéressant.", english: "I'm reading an interesting book.", pronunciation: "zhuh lee uhn lee-vruh ahn-tay-reh-SAHN", category: "Activities" },
    { french: "J'apprends le français.", english: "I'm learning French.", pronunciation: "zhah-prahn luh frahn-SEH", category: "Activities" }
];

let clickedSentences = new Set();
let currentFilter = 'all';
let currentSearch = '';
let showEnglishFirst = false; // Track language display mode
let recognition = null; // Speech recognition object
let isRecording = false;

// Initialize speech recognition
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        return true;
    }
    return false;
}

// Calculate similarity between two strings (Levenshtein distance based)
function calculateSimilarity(str1, str2) {
    // Normalize strings: lowercase and remove punctuation
    const normalize = (s) => s.toLowerCase()
        .replace(/[.,!?;:'"""()]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    
    const s1 = normalize(str1);
    const s2 = normalize(str2);
    
    // If exact match, return 100%
    if (s1 === s2) return 100;
    
    // Calculate Levenshtein distance
    const matrix = [];
    const len1 = s1.length;
    const len2 = s2.length;
    
    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // deletion
                matrix[i][j - 1] + 1,      // insertion
                matrix[i - 1][j - 1] + cost // substitution
            );
        }
    }
    
    const distance = matrix[len1][len2];
    const maxLen = Math.max(len1, len2);
    const similarity = Math.round(((maxLen - distance) / maxLen) * 100);
    
    return Math.max(0, similarity);
}

// Handle microphone click for voice recording
function handleMicClick(sentence, card, index) {
    if (!recognition && !initSpeechRecognition()) {
        alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
        return;
    }
    
    if (isRecording) {
        return; // Prevent multiple recordings at once
    }
    
    const micIcon = card.querySelector('.mic-icon');
    const scoreDiv = card.querySelector('.pronunciation-score');
    
    // Make sure card is active
    if (!card.classList.contains('active')) {
        card.classList.add('active');
    }
    
    // Set language for recognition
    recognition.lang = showEnglishFirst ? 'en-US' : 'fr-FR';
    
    // Start recording
    isRecording = true;
    micIcon.classList.add('recording');
    scoreDiv.textContent = 'Listening... 🎤';
    scoreDiv.className = 'pronunciation-score show';
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const targetText = showEnglishFirst ? sentence.english : sentence.french;
        const similarity = calculateSimilarity(transcript, targetText);
        
        // Display score with color coding
        let scoreClass = 'needs-practice';
        let feedback = 'Keep practicing!';
        
        if (similarity >= 85) {
            scoreClass = 'excellent';
            feedback = 'Excellent!';
        } else if (similarity >= 65) {
            scoreClass = 'good';
            feedback = 'Good job!';
        }
        
        scoreDiv.textContent = `${similarity}% Match - ${feedback}`;
        scoreDiv.className = `pronunciation-score show ${scoreClass}`;
        
        // Show what was heard (for debugging/learning)
        console.log('Expected:', targetText);
        console.log('You said:', transcript);
        console.log('Match:', similarity + '%');
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        scoreDiv.textContent = 'Error: ' + event.error;
        scoreDiv.className = 'pronunciation-score show needs-practice';
        micIcon.classList.remove('recording');
        isRecording = false;
    };
    
    recognition.onend = () => {
        micIcon.classList.remove('recording');
        isRecording = false;
    };
    
    try {
        recognition.start();
    } catch (error) {
        console.error('Failed to start recognition:', error);
        micIcon.classList.remove('recording');
        isRecording = false;
    }
}

// Initialize the app
function init() {
    renderSentences(sentences);
    setupEventListeners();
    initSpeechRecognition(); // Initialize speech recognition
    
    // Load voices - some browsers need this
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
}

// Render sentence cards
function renderSentences(sentenceList) {
    const sentenceGrid = document.getElementById('sentenceGrid');
    sentenceGrid.innerHTML = '';

    sentenceList.forEach((sentence, index) => {
        const card = document.createElement('div');
        card.className = 'sentence-card';
        card.dataset.index = index;
        
        // Determine which text to show first based on mode
        const primaryText = showEnglishFirst ? sentence.english : sentence.french;
        const secondaryText = showEnglishFirst ? sentence.french : sentence.english;
        
        card.innerHTML = `
            <span class="speaker-icon">🔊</span>
            <span class="mic-icon" data-index="${index}">🎤</span>
            <div class="category-tag">${sentence.category}</div>
            <div class="primary-sentence">${primaryText}</div>
            <div class="secondary-translation">${secondaryText}</div>
            <div class="pronunciation-hint">Pronunciation: ${sentence.pronunciation}</div>
            <div class="pronunciation-score" data-index="${index}"></div>
        `;

        card.addEventListener('click', (e) => {
            // Don't trigger card click if clicking on mic icon
            if (!e.target.classList.contains('mic-icon')) {
                handleSentenceClick(sentence, card, index);
            }
        });
        
        // Add mic icon click handler
        const micIcon = card.querySelector('.mic-icon');
        micIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            handleMicClick(sentence, card, index);
        });
        
        sentenceGrid.appendChild(card);
    });
}

// Handle sentence card click
function handleSentenceClick(sentence, card, index) {
    // Toggle active state
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Track clicked sentences
        clickedSentences.add(index);
        updateStats();

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        if (showEnglishFirst) {
            // In English-first mode: speak English first, then French
            speakSentence(sentence.english, 'en-US');
            const englishDelay = sentence.english.length * 50 + 800;
            setTimeout(() => {
                speakSentence(sentence.french, 'fr-FR');
            }, englishDelay);
        } else {
            // In French-first mode: speak French first, then English
            speakSentence(sentence.french, 'fr-FR');
            const frenchDelay = sentence.french.length * 50 + 800;
            setTimeout(() => {
                speakSentence(sentence.english, 'en-US');
            }, frenchDelay);
        }
    }
}

// Text-to-speech function for sentences
function speakSentence(text, lang) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.75; // Slower for sentence learning
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to find a voice that matches the language
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(voice => voice.lang.startsWith(lang.split('-')[0]));
    if (matchingVoice) {
        utterance.voice = matchingVoice;
    }

    // Add a small delay before speaking to ensure previous speech is finished
    setTimeout(() => {
        window.speechSynthesis.speak(utterance);
    }, 100);
}

// Toggle language display mode
function toggleLanguageMode() {
    showEnglishFirst = !showEnglishFirst;
    const button = document.getElementById('languageSwitch');
    
    if (showEnglishFirst) {
        button.textContent = '🔄 Show French First';
        button.classList.add('english-mode');
    } else {
        button.textContent = '🔄 Show English First';
        button.classList.remove('english-mode');
    }
    
    // Re-render all sentences with new mode
    filterSentences();
}

// Setup event listeners
function setupEventListeners() {
    const searchBox = document.getElementById('searchBox');
    const categoryFilter = document.getElementById('categoryFilter');
    const languageSwitch = document.getElementById('languageSwitch');

    searchBox.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterSentences();
    });

    categoryFilter.addEventListener('change', (e) => {
        currentFilter = e.target.value;
        filterSentences();
    });

    languageSwitch.addEventListener('click', toggleLanguageMode);
}

// Filter sentences based on search and category
function filterSentences() {
    let filtered = sentences;

    // Filter by category
    if (currentFilter !== 'all') {
        filtered = filtered.filter(sentence => sentence.category === currentFilter);
    }

    // Filter by search
    if (currentSearch) {
        filtered = filtered.filter(sentence => 
            sentence.french.toLowerCase().includes(currentSearch) ||
            sentence.english.toLowerCase().includes(currentSearch)
        );
    }

    renderSentences(filtered);
}

// Update statistics
function updateStats() {
    const stats = document.getElementById('stats');
    const percentage = Math.round((clickedSentences.size / sentences.length) * 100);
    stats.textContent = `Sentences practiced: ${clickedSentences.size} / ${sentences.length} (${percentage}%) • Keep going! 🎯`;
}

// Initialize the app when page loads
init();
